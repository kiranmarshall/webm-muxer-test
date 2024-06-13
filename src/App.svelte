<script lang="ts">
  import { onMount } from "svelte";
  import { Muxer, ArrayBufferTarget } from "webm-muxer";
  import { vp9EncoderChecker } from "./lib/vp9EncoderChecker";

  let width = 1920;
  let height = 1080;

  let muxer = new Muxer({
    target: new ArrayBufferTarget(),
    video: { codec: "V_VP9", width, height },
    firstTimestampBehavior: "offset",
    type: "webm",
  });

  let videoEncoder: VideoEncoder;

  let video: HTMLVideoElement;
  let stream: MediaStream;
  let track: MediaStreamTrack;

  let processor: any;
  let frameStream: any;

  let availableWebcamDevices: MediaDeviceInfo[] = [];
  let selectedDevice: MediaDeviceInfo;

  let logRef: HTMLOListElement;

  async function resetStream() {
    video.srcObject = null;
    stream.getTracks().forEach((track) => track.stop());

    stream = await navigator.mediaDevices.getUserMedia({
      video: { width, height, deviceId: selectedDevice.deviceId },
    });

    track = stream.getVideoTracks()[0];
    video.srcObject = stream;
    console.log("updated video feed to", selectedDevice.label);
  }

  async function startWebcamStream() {
    availableWebcamDevices = (await navigator.mediaDevices.enumerateDevices()).filter((device) => {
      return device.kind === "videoinput";
    });
    selectedDevice = availableWebcamDevices[0];

    stream = await navigator.mediaDevices.getUserMedia({
      video: { width, height },
    });

    track = stream.getVideoTracks()[0];
    video.srcObject = stream;
    console.log("video feed initialised to", selectedDevice.label);

    // @ts-ignore
    processor = new MediaStreamTrackProcessor({ track });
    frameStream = processor.readable.getReader();
    console.log("frame stream reader configured", frameStream);
  }

  let availableCodecs: string[] = [];
  let selectedCodec = "none";

  onMount(async () => {
    await startWebcamStream();

    availableCodecs = await vp9EncoderChecker(width, height);
    if (availableCodecs.length < 2) {
      throw new Error("No supported vp9 codecs found");
    }

    console.log("available vp9 codecs found");
  });

  let encoderConfigured = false;

  async function configureEncoder() {
    if (selectedCodec === "none") {
      throw new Error("Please select codec");
    }

    // Working non-vp9 codecs below
    // codec: "avc1.42002A", // true (also true with format: annexb)
    // codec: "avc1.42001f", // true (also true with format: annexb)
    // avc: { format: "annexb" }, //

    const config = { codec: selectedCodec, width, height };
    const { supported } = await VideoEncoder.isConfigSupported(config);
    if (!supported) throw new Error("VideoEncoder config not supported");

    videoEncoder = new VideoEncoder({
      output: (chunk, meta) => {
        console.log(chunk, meta);
        muxer.addVideoChunk(chunk, meta);
      },
      error: (e) => console.error(e),
    });

    videoEncoder.configure(config);
    console.log("encoder configured", { config, videoEncoder });
    encoderConfigured = true;
  }

  async function startEncoding() {
    const frame = (await frameStream.read()) as { done: boolean; value: VideoFrame };
    videoEncoder.encode(frame.value);
    console.log("video frame captured", frame.value);
  }

  async function stopEncoding() {
    await videoEncoder.flush();
    muxer.finalize();
    console.log(muxer);

    const { buffer } = muxer.target;
    let blob = new Blob([buffer], { type: "video/webm" });
    window.open(URL.createObjectURL(blob), "_blank");

    videoEncoder.reset();
    videoEncoder.close();
    encoderConfigured = false;
  }
</script>

<main>
  <p>
    Intended for use on desktop. Open console to view logs on interactions
    <br /><br />
    First set stream source, then configure encoder.
    <br />
    Press start encoding to begin webm capture. Each time you press start, another frame will be captured.
    <br />
    Capture multiple frames with movement in between for best results.
    <br />
    Press finish encoding to have video open in new tab.
  </p>

  <video bind:this={video} height={540} width={960} autoplay>
    <track kind="captions" />
  </video>

  <div>
    <select bind:value={selectedDevice}>
      {#each availableWebcamDevices as device}
        <option value={device}>{device.label}</option>
      {/each}
    </select>

    <button disabled={encoderConfigured} on:click={resetStream}>Update stream</button>
  </div>

  <div>
    <select bind:value={selectedCodec}>
      <option value="none">none</option>
      {#each availableCodecs as codec}
        <option value={codec}>{codec}</option>
      {/each}
    </select>

    <button disabled={encoderConfigured} on:click={configureEncoder}>Configure encoder</button>
  </div>

  <div>
    <button disabled={!encoderConfigured} on:click={startEncoding}>start encoding</button>
    <button disabled={!encoderConfigured} on:click={stopEncoding}>finish encoding</button>
  </div>
</main>

<style>
  div {
    margin-bottom: 1rem;
  }
</style>

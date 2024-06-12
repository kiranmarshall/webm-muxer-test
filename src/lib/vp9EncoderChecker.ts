const profiles = ["00", "01", "02", "03"];
const bitDepths = ["08", "10", "12"];
const levels = [
  "00",
  "10",
  "11",
  "20",
  "21",
  "30",
  "31",
  "40",
  "41",
  "50",
  "51",
  "52",
  "60",
  "61",
  "62",
];

export async function vp9EncoderChecker(width: number, height: number) {
  const allowedCodecs: string[] = [];

  for (const profile of profiles) {
    for (const level of levels) {
      for (const bitDepth of bitDepths) {
        const codec = `vp09.${profile}.${level}.${bitDepth}`;
        const { supported } = await VideoEncoder.isConfigSupported({ codec, height, width });
        if (supported) {
          allowedCodecs.push(codec);
        }
      }
    }
  }

  return allowedCodecs;
}

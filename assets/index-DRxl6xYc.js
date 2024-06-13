var xi=Object.defineProperty;var Hi=(t,e,s)=>e in t?xi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var Ee=(t,e,s)=>(Hi(t,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();function xt(){}function fi(t){return t()}function ei(){return Object.create(null)}function Jt(t){t.forEach(fi)}function ui(t){return typeof t=="function"}function Ki(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ji(t){return Object.keys(t).length===0}function v(t,e){t.appendChild(e)}function Fe(t,e,s){t.insertBefore(e,s||null)}function be(t){t.parentNode&&t.parentNode.removeChild(t)}function ii(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function W(t){return document.createElement(t)}function tt(t){return document.createTextNode(t)}function ot(){return tt(" ")}function ht(t,e,s,a){return t.addEventListener(e,s,a),()=>t.removeEventListener(e,s,a)}function Ut(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function Yi(t){return Array.from(t.childNodes)}function wi(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ht(t,e){t.value=e??""}function ie(t,e,s){for(let a=0;a<t.options.length;a+=1){const n=t.options[a];if(n.__value===e){n.selected=!0;return}}(!s||e!==void 0)&&(t.selectedIndex=-1)}function si(t){const e=t.querySelector(":checked");return e&&e.__value}let Kt;function Vt(t){Kt=t}function Gi(){if(!Kt)throw new Error("Function called outside component initialization");return Kt}function Zi(t){Gi().$$.on_mount.push(t)}const ct=[],Ce=[];let _t=[];const ni=[],qi=Promise.resolve();let We=!1;function Qi(){We||(We=!0,qi.then(pi))}function jt(t){_t.push(t)}const Me=new Set;let lt=0;function pi(){if(lt!==0)return;const t=Kt;do{try{for(;lt<ct.length;){const e=ct[lt];lt++,Vt(e),Xi(e.$$)}}catch(e){throw ct.length=0,lt=0,e}for(Vt(null),ct.length=0,lt=0;Ce.length;)Ce.pop()();for(let e=0;e<_t.length;e+=1){const s=_t[e];Me.has(s)||(Me.add(s),s())}_t.length=0}while(ct.length);for(;ni.length;)ni.pop()();We=!1,Me.clear(),Vt(t)}function Xi(t){if(t.fragment!==null){t.update(),Jt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(jt)}}function Ji(t){const e=[],s=[];_t.forEach(a=>t.indexOf(a)===-1?e.push(a):s.push(a)),s.forEach(a=>a()),_t=e}const ts=new Set;function es(t,e){t&&t.i&&(ts.delete(t),t.i(e))}function se(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function is(t,e,s){const{fragment:a,after_update:n}=t.$$;a&&a.m(e,s),jt(()=>{const r=t.$$.on_mount.map(fi).filter(ui);t.$$.on_destroy?t.$$.on_destroy.push(...r):Jt(r),t.$$.on_mount=[]}),n.forEach(jt)}function ss(t,e){const s=t.$$;s.fragment!==null&&(Ji(s.after_update),Jt(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function ns(t,e){t.$$.dirty[0]===-1&&(ct.push(t),Qi(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function as(t,e,s,a,n,r,d=null,w=[-1]){const y=Kt;Vt(t);const g=t.$$={fragment:null,ctx:[],props:r,update:xt,not_equal:n,bound:ei(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(y?y.$$.context:[])),callbacks:ei(),dirty:w,skip_bound:!1,root:e.target||y.$$.root};d&&d(g.root);let S=!1;if(g.ctx=s?s(t,e.props||{},(m,U,...G)=>{const C=G.length?G[0]:U;return g.ctx&&n(g.ctx[m],g.ctx[m]=C)&&(!g.skip_bound&&g.bound[m]&&g.bound[m](C),S&&ns(t,m)),U}):[],g.update(),S=!0,Jt(g.before_update),g.fragment=a?a(g.ctx):!1,e.target){if(e.hydrate){const m=Yi(e.target);g.fragment&&g.fragment.l(m),m.forEach(be)}else g.fragment&&g.fragment.c();e.intro&&es(t.$$.fragment),is(t,e.target,e.anchor),pi()}Vt(y)}class rs{constructor(){Ee(this,"$$");Ee(this,"$$set")}$destroy(){ss(this,1),this.$destroy=xt}$on(e,s){if(!ui(s))return xt;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(s),()=>{const n=a.indexOf(s);n!==-1&&a.splice(n,1)}}$set(e){this.$$set&&!ji(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const os="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(os);var hs=Object.defineProperty,ai=Object.getOwnPropertySymbols,ls=Object.prototype.hasOwnProperty,ds=Object.prototype.propertyIsEnumerable,M=Math.pow,ri=(t,e,s)=>e in t?hs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,cs=(t,e)=>{for(var s in e||(e={}))ls.call(e,s)&&ri(t,s,e[s]);if(ai)for(var s of ai(e))ds.call(e,s)&&ri(t,s,e[s]);return t},Ne=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)},i=(t,e,s)=>(Ne(t,e,"read from private field"),s?s.call(t):e.get(t)),o=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},f=(t,e,s,a)=>(Ne(t,e,"write to private field"),e.set(t,s),s),h=(t,e,s)=>(Ne(t,e,"access private method"),s),_i=class{constructor(t){this.value=t}},$e=class{constructor(t){this.value=t}},gi=t=>t<256?1:t<65536?2:t<1<<24?3:t<M(2,32)?4:t<M(2,40)?5:6,fs=t=>{if(t<127)return 1;if(t<16383)return 2;if(t<(1<<21)-1)return 3;if(t<(1<<28)-1)return 4;if(t<M(2,35)-1)return 5;if(t<M(2,42)-1)return 6;throw new Error("EBML VINT size not supported "+t)},dt=(t,e,s)=>{let a=0;for(let n=e;n<s;n++){let r=Math.floor(n/8),d=t[r],w=7-(n&7),y=(d&1<<w)>>w;a<<=1,a|=y}return a},us=(t,e,s,a)=>{for(let n=e;n<s;n++){let r=Math.floor(n/8),d=t[r],w=7-(n&7);d&=~(1<<w),d|=(a&1<<s-n-1)>>s-n-1<<w,t[r]=d}},mi=class{constructor(){this.buffer=null}},vi=class{constructor(t){this.options=t}},ws=class{constructor(t,e){this.stream=t,this.options=e}},j,_,Te,bi,Le,yi,Ue,ki,ne,Ie,Be,Ei,Mi=class{constructor(){o(this,Te),o(this,Le),o(this,Ue),o(this,ne),o(this,Be),this.pos=0,o(this,j,new Uint8Array(8)),o(this,_,new DataView(i(this,j).buffer)),this.offsets=new WeakMap,this.dataOffsets=new WeakMap}seek(t){this.pos=t}writeEBMLVarInt(t,e=fs(t)){let s=0;switch(e){case 1:i(this,_).setUint8(s++,128|t);break;case 2:i(this,_).setUint8(s++,64|t>>8),i(this,_).setUint8(s++,t);break;case 3:i(this,_).setUint8(s++,32|t>>16),i(this,_).setUint8(s++,t>>8),i(this,_).setUint8(s++,t);break;case 4:i(this,_).setUint8(s++,16|t>>24),i(this,_).setUint8(s++,t>>16),i(this,_).setUint8(s++,t>>8),i(this,_).setUint8(s++,t);break;case 5:i(this,_).setUint8(s++,8|t/M(2,32)&7),i(this,_).setUint8(s++,t>>24),i(this,_).setUint8(s++,t>>16),i(this,_).setUint8(s++,t>>8),i(this,_).setUint8(s++,t);break;case 6:i(this,_).setUint8(s++,4|t/M(2,40)&3),i(this,_).setUint8(s++,t/M(2,32)|0),i(this,_).setUint8(s++,t>>24),i(this,_).setUint8(s++,t>>16),i(this,_).setUint8(s++,t>>8),i(this,_).setUint8(s++,t);break;default:throw new Error("Bad EBML VINT size "+e)}this.write(i(this,j).subarray(0,s))}writeEBML(t){var e,s;if(t!==null)if(t instanceof Uint8Array)this.write(t);else if(Array.isArray(t))for(let a of t)this.writeEBML(a);else if(this.offsets.set(t,this.pos),h(this,ne,Ie).call(this,t.id),Array.isArray(t.data)){let a=this.pos,n=t.size===-1?1:(e=t.size)!=null?e:4;t.size===-1?h(this,Te,bi).call(this,255):this.seek(this.pos+n);let r=this.pos;if(this.dataOffsets.set(t,r),this.writeEBML(t.data),t.size!==-1){let d=this.pos-r,w=this.pos;this.seek(a),this.writeEBMLVarInt(d,n),this.seek(w)}}else if(typeof t.data=="number"){let a=(s=t.size)!=null?s:gi(t.data);this.writeEBMLVarInt(a),h(this,ne,Ie).call(this,t.data,a)}else typeof t.data=="string"?(this.writeEBMLVarInt(t.data.length),h(this,Be,Ei).call(this,t.data)):t.data instanceof Uint8Array?(this.writeEBMLVarInt(t.data.byteLength,t.size),this.write(t.data)):t.data instanceof _i?(this.writeEBMLVarInt(4),h(this,Le,yi).call(this,t.data.value)):t.data instanceof $e&&(this.writeEBMLVarInt(8),h(this,Ue,ki).call(this,t.data.value))}};j=new WeakMap;_=new WeakMap;Te=new WeakSet;bi=function(t){i(this,_).setUint8(0,t),this.write(i(this,j).subarray(0,1))};Le=new WeakSet;yi=function(t){i(this,_).setFloat32(0,t,!1),this.write(i(this,j).subarray(0,4))};Ue=new WeakSet;ki=function(t){i(this,_).setFloat64(0,t,!1),this.write(i(this,j))};ne=new WeakSet;Ie=function(t,e=gi(t)){let s=0;switch(e){case 6:i(this,_).setUint8(s++,t/M(2,40)|0);case 5:i(this,_).setUint8(s++,t/M(2,32)|0);case 4:i(this,_).setUint8(s++,t>>24);case 3:i(this,_).setUint8(s++,t>>16);case 2:i(this,_).setUint8(s++,t>>8);case 1:i(this,_).setUint8(s++,t);break;default:throw new Error("Bad UINT size "+e)}this.write(i(this,j).subarray(0,s))};Be=new WeakSet;Ei=function(t){this.write(new Uint8Array(t.split("").map(e=>e.charCodeAt(0))))};var ae,et,Yt,re,Ae,ps=class extends Mi{constructor(t){super(),o(this,re),o(this,ae,void 0),o(this,et,new ArrayBuffer(M(2,16))),o(this,Yt,new Uint8Array(i(this,et))),f(this,ae,t)}write(t){h(this,re,Ae).call(this,this.pos+t.byteLength),i(this,Yt).set(t,this.pos),this.pos+=t.byteLength}finalize(){h(this,re,Ae).call(this,this.pos),i(this,ae).buffer=i(this,et).slice(0,this.pos)}};ae=new WeakMap;et=new WeakMap;Yt=new WeakMap;re=new WeakSet;Ae=function(t){let e=i(this,et).byteLength;for(;e<t;)e*=2;if(e===i(this,et).byteLength)return;let s=new ArrayBuffer(e),a=new Uint8Array(s);a.set(i(this,Yt),0),f(this,et,s),f(this,Yt,a)};var ft,B,A,Z,Wt=class extends Mi{constructor(t){super(),this.target=t,o(this,ft,!1),o(this,B,void 0),o(this,A,void 0),o(this,Z,void 0)}write(t){if(!i(this,ft))return;let e=this.pos;if(e<i(this,A)){if(e+t.byteLength<=i(this,A))return;t=t.subarray(i(this,A)-e),e=0}let s=e+t.byteLength-i(this,A),a=i(this,B).byteLength;for(;a<s;)a*=2;if(a!==i(this,B).byteLength){let n=new Uint8Array(a);n.set(i(this,B),0),f(this,B,n)}i(this,B).set(t,e-i(this,A)),f(this,Z,Math.max(i(this,Z),e+t.byteLength))}startTrackingWrites(){f(this,ft,!0),f(this,B,new Uint8Array(M(2,10))),f(this,A,this.pos),f(this,Z,this.pos)}getTrackedWrites(){if(!i(this,ft))throw new Error("Can't get tracked writes since nothing was tracked.");let e={data:i(this,B).subarray(0,i(this,Z)-i(this,A)),start:i(this,A),end:i(this,Z)};return f(this,B,void 0),f(this,ft,!1),e}};ft=new WeakMap;B=new WeakMap;A=new WeakMap;Z=new WeakMap;var q,oe,he,Si=class extends Wt{constructor(t,e){super(t),o(this,q,[]),o(this,oe,0),o(this,he,void 0),f(this,he,e)}write(t){super.write(t),i(this,q).push({data:t.slice(),start:this.pos}),this.pos+=t.byteLength}flush(){var t,e;if(i(this,q).length===0)return;let s=[],a=[...i(this,q)].sort((n,r)=>n.start-r.start);s.push({start:a[0].start,size:a[0].data.byteLength});for(let n=1;n<a.length;n++){let r=s[s.length-1],d=a[n];d.start<=r.start+r.size?r.size=Math.max(r.size,d.start+d.data.byteLength-r.start):s.push({start:d.start,size:d.data.byteLength})}for(let n of s){n.data=new Uint8Array(n.size);for(let r of i(this,q))n.start<=r.start&&r.start<n.start+n.size&&n.data.set(r.data,r.start-n.start);if(i(this,he)&&n.start<i(this,oe))throw new Error("Internal error: Monotonicity violation.");(e=(t=this.target.options).onData)==null||e.call(t,n.data,n.start),f(this,oe,n.start+n.data.byteLength)}i(this,q).length=0}finalize(){}};q=new WeakMap;oe=new WeakMap;he=new WeakMap;var _s=M(2,24),gs=2,I,T,fe,ue,we,ze,Re,Ci,xe,Wi,Ot,pe,Ti=class extends Wt{constructor(t,e){var s,a;if(super(t),o(this,we),o(this,Re),o(this,xe),o(this,Ot),o(this,I,void 0),o(this,T,[]),o(this,fe,0),o(this,ue,void 0),f(this,I,(a=(s=t.options)==null?void 0:s.chunkSize)!=null?a:_s),f(this,ue,e),!Number.isInteger(i(this,I))||i(this,I)<M(2,10))throw new Error("Invalid StreamTarget options: chunkSize must be an integer not smaller than 1024.")}write(t){super.write(t),h(this,we,ze).call(this,t,this.pos),h(this,Ot,pe).call(this),this.pos+=t.byteLength}finalize(){h(this,Ot,pe).call(this,!0)}};I=new WeakMap;T=new WeakMap;fe=new WeakMap;ue=new WeakMap;we=new WeakSet;ze=function(t,e){let s=i(this,T).findIndex(w=>w.start<=e&&e<w.start+i(this,I));s===-1&&(s=h(this,xe,Wi).call(this,e));let a=i(this,T)[s],n=e-a.start,r=t.subarray(0,Math.min(i(this,I)-n,t.byteLength));a.data.set(r,n);let d={start:n,end:n+r.byteLength};if(h(this,Re,Ci).call(this,a,d),a.written[0].start===0&&a.written[0].end===i(this,I)&&(a.shouldFlush=!0),i(this,T).length>gs){for(let w=0;w<i(this,T).length-1;w++)i(this,T)[w].shouldFlush=!0;h(this,Ot,pe).call(this)}r.byteLength<t.byteLength&&h(this,we,ze).call(this,t.subarray(r.byteLength),e+r.byteLength)};Re=new WeakSet;Ci=function(t,e){let s=0,a=t.written.length-1,n=-1;for(;s<=a;){let r=Math.floor(s+(a-s+1)/2);t.written[r].start<=e.start?(s=r+1,n=r):a=r-1}for(t.written.splice(n+1,0,e),(n===-1||t.written[n].end<e.start)&&n++;n<t.written.length-1&&t.written[n].end>=t.written[n+1].start;)t.written[n].end=Math.max(t.written[n].end,t.written[n+1].end),t.written.splice(n+1,1)};xe=new WeakSet;Wi=function(t){let s={start:Math.floor(t/i(this,I))*i(this,I),data:new Uint8Array(i(this,I)),written:[],shouldFlush:!1};return i(this,T).push(s),i(this,T).sort((a,n)=>a.start-n.start),i(this,T).indexOf(s)};Ot=new WeakSet;pe=function(t=!1){var e,s;for(let a=0;a<i(this,T).length;a++){let n=i(this,T)[a];if(!(!n.shouldFlush&&!t)){for(let r of n.written){if(i(this,ue)&&n.start+r.start<i(this,fe))throw new Error("Internal error: Monotonicity violation.");(s=(e=this.target.options).onData)==null||s.call(e,n.data.subarray(r.start,r.end),n.start+r.start),f(this,fe,n.start+r.end)}i(this,T).splice(a--,1)}}};var ms=class extends Ti{constructor(t,e){var s;super(new vi({onData:(a,n)=>t.stream.write({type:"write",data:a,position:n}),chunked:!0,chunkSize:(s=t.options)==null?void 0:s.chunkSize}),e)}},Et=1,Gt=2,_e=3,vs=1,bs=2,ys=17,Se=M(2,15),Dt=M(2,12),oi="https://github.com/Vanilagy/webm-muxer",Li=6,Ui=5,ks=["strict","offset","permissive"],c,l,Zt,qt,V,Mt,ut,it,St,Y,gt,mt,O,Ct,vt,H,K,Q,Ft,Nt,bt,yt,ge,Qt,$t,Pe,Ii,Ve,Bi,He,Ai,Ke,zi,je,Pi,Ye,Vi,Ge,Oi,ye,Ze,ke,qe,Qe,Di,X,wt,J,pt,Oe,Fi,De,Ni,At,le,zt,de,Xe,$i,z,P,kt,Xt,Rt,me,Je,Ri,ve,ti,Pt,ce,Es=class{constructor(t){o(this,Pe),o(this,Ve),o(this,He),o(this,Ke),o(this,je),o(this,Ye),o(this,Ge),o(this,ye),o(this,ke),o(this,Qe),o(this,X),o(this,J),o(this,Oe),o(this,De),o(this,At),o(this,zt),o(this,Xe),o(this,z),o(this,kt),o(this,Rt),o(this,Je),o(this,ve),o(this,Pt),o(this,c,void 0),o(this,l,void 0),o(this,Zt,void 0),o(this,qt,void 0),o(this,V,void 0),o(this,Mt,void 0),o(this,ut,void 0),o(this,it,void 0),o(this,St,void 0),o(this,Y,void 0),o(this,gt,void 0),o(this,mt,void 0),o(this,O,void 0),o(this,Ct,void 0),o(this,vt,0),o(this,H,[]),o(this,K,[]),o(this,Q,[]),o(this,Ft,void 0),o(this,Nt,void 0),o(this,bt,-1),o(this,yt,-1),o(this,ge,-1),o(this,Qt,void 0),o(this,$t,!1);var e;h(this,Pe,Ii).call(this,t),f(this,c,cs({type:"webm",firstTimestampBehavior:"strict"},t)),this.target=t.target;let s=!!i(this,c).streaming;if(t.target instanceof mi)f(this,l,new ps(t.target));else if(t.target instanceof vi)f(this,l,(e=t.target.options)!=null&&e.chunked?new Ti(t.target,s):new Si(t.target,s));else if(t.target instanceof ws)f(this,l,new ms(t.target,s));else throw new Error(`Invalid target: ${t.target}`);h(this,Ve,Bi).call(this)}addVideoChunk(t,e,s){let a=new Uint8Array(t.byteLength);t.copyTo(a),this.addVideoChunkRaw(a,t.type,s??t.timestamp,e)}addVideoChunkRaw(t,e,s,a){if(h(this,Pt,ce).call(this),!i(this,c).video)throw new Error("No video track declared.");i(this,Ft)===void 0&&f(this,Ft,s),a&&h(this,Oe,Fi).call(this,a);let n=h(this,zt,de).call(this,t,e,s,Et);for(i(this,c).video.codec==="V_VP9"&&h(this,De,Ni).call(this,n),f(this,bt,n.timestamp);i(this,K).length>0&&i(this,K)[0].timestamp<=n.timestamp;){let r=i(this,K).shift();h(this,z,P).call(this,r,!1)}!i(this,c).audio||n.timestamp<=i(this,yt)?h(this,z,P).call(this,n,!0):i(this,H).push(n),h(this,At,le).call(this),h(this,X,wt).call(this)}addAudioChunk(t,e,s){let a=new Uint8Array(t.byteLength);t.copyTo(a),this.addAudioChunkRaw(a,t.type,s??t.timestamp,e)}addAudioChunkRaw(t,e,s,a){if(h(this,Pt,ce).call(this),!i(this,c).audio)throw new Error("No audio track declared.");i(this,Nt)===void 0&&f(this,Nt,s),a!=null&&a.decoderConfig&&(i(this,c).streaming?f(this,Y,h(this,kt,Xt).call(this,a.decoderConfig.description)):h(this,Rt,me).call(this,i(this,Y),a.decoderConfig.description));let n=h(this,zt,de).call(this,t,e,s,Gt);for(f(this,yt,n.timestamp);i(this,H).length>0&&i(this,H)[0].timestamp<=n.timestamp;){let r=i(this,H).shift();h(this,z,P).call(this,r,!0)}!i(this,c).video||n.timestamp<=i(this,bt)?h(this,z,P).call(this,n,!i(this,c).video):i(this,K).push(n),h(this,At,le).call(this),h(this,X,wt).call(this)}addSubtitleChunk(t,e,s){if(h(this,Pt,ce).call(this),!i(this,c).subtitles)throw new Error("No subtitle track declared.");e!=null&&e.decoderConfig&&(i(this,c).streaming?f(this,gt,h(this,kt,Xt).call(this,e.decoderConfig.description)):h(this,Rt,me).call(this,i(this,gt),e.decoderConfig.description));let a=h(this,zt,de).call(this,t.body,"key",s??t.timestamp,_e,t.duration,t.additions);f(this,ge,a.timestamp),i(this,Q).push(a),h(this,At,le).call(this),h(this,X,wt).call(this)}finalize(){if(i(this,$t))throw new Error("Cannot finalize a muxer more than once.");for(;i(this,H).length>0;)h(this,z,P).call(this,i(this,H).shift(),!0);for(;i(this,K).length>0;)h(this,z,P).call(this,i(this,K).shift(),!0);for(;i(this,Q).length>0&&i(this,Q)[0].timestamp<=i(this,vt);)h(this,z,P).call(this,i(this,Q).shift(),!1);if(i(this,c).streaming||h(this,ve,ti).call(this),i(this,l).writeEBML(i(this,mt)),!i(this,c).streaming){let t=i(this,l).pos,e=i(this,l).pos-i(this,J,pt);i(this,l).seek(i(this,l).offsets.get(i(this,Zt))+4),i(this,l).writeEBMLVarInt(e,Li),i(this,ut).data=new $e(i(this,vt)),i(this,l).seek(i(this,l).offsets.get(i(this,ut))),i(this,l).writeEBML(i(this,ut)),i(this,V).data[0].data[1].data=i(this,l).offsets.get(i(this,mt))-i(this,J,pt),i(this,V).data[1].data[1].data=i(this,l).offsets.get(i(this,qt))-i(this,J,pt),i(this,V).data[2].data[1].data=i(this,l).offsets.get(i(this,Mt))-i(this,J,pt),i(this,l).seek(i(this,l).offsets.get(i(this,V))),i(this,l).writeEBML(i(this,V)),i(this,l).seek(t)}h(this,X,wt).call(this),i(this,l).finalize(),f(this,$t,!0)}};c=new WeakMap;l=new WeakMap;Zt=new WeakMap;qt=new WeakMap;V=new WeakMap;Mt=new WeakMap;ut=new WeakMap;it=new WeakMap;St=new WeakMap;Y=new WeakMap;gt=new WeakMap;mt=new WeakMap;O=new WeakMap;Ct=new WeakMap;vt=new WeakMap;H=new WeakMap;K=new WeakMap;Q=new WeakMap;Ft=new WeakMap;Nt=new WeakMap;bt=new WeakMap;yt=new WeakMap;ge=new WeakMap;Qt=new WeakMap;$t=new WeakMap;Pe=new WeakSet;Ii=function(t){if(t.type&&t.type!=="webm"&&t.type!=="matroska")throw new Error(`Invalid type: ${t.type}`);if(t.firstTimestampBehavior&&!ks.includes(t.firstTimestampBehavior))throw new Error(`Invalid first timestamp behavior: ${t.firstTimestampBehavior}`)};Ve=new WeakSet;Bi=function(){i(this,l)instanceof Wt&&i(this,l).target.options.onHeader&&i(this,l).startTrackingWrites(),h(this,He,Ai).call(this),i(this,c).streaming||h(this,Ye,Vi).call(this),h(this,Ge,Oi).call(this),h(this,Ke,zi).call(this),h(this,je,Pi).call(this),i(this,c).streaming||(h(this,ye,Ze).call(this),h(this,ke,qe).call(this)),h(this,Qe,Di).call(this),h(this,X,wt).call(this)};He=new WeakSet;Ai=function(){var t;let e={id:440786851,data:[{id:17030,data:1},{id:17143,data:1},{id:17138,data:4},{id:17139,data:8},{id:17026,data:(t=i(this,c).type)!=null?t:"webm"},{id:17031,data:2},{id:17029,data:2}]};i(this,l).writeEBML(e)};Ke=new WeakSet;zi=function(){f(this,St,{id:236,size:4,data:new Uint8Array(Dt)}),f(this,Y,{id:236,size:4,data:new Uint8Array(Dt)}),f(this,gt,{id:236,size:4,data:new Uint8Array(Dt)})};je=new WeakSet;Pi=function(){f(this,it,{id:21936,data:[{id:21937,data:2},{id:21946,data:2},{id:21947,data:2},{id:21945,data:0}]})};Ye=new WeakSet;Vi=function(){const t=new Uint8Array([28,83,187,107]),e=new Uint8Array([21,73,169,102]),s=new Uint8Array([22,84,174,107]);f(this,V,{id:290298740,data:[{id:19899,data:[{id:21419,data:t},{id:21420,size:5,data:0}]},{id:19899,data:[{id:21419,data:e},{id:21420,size:5,data:0}]},{id:19899,data:[{id:21419,data:s},{id:21420,size:5,data:0}]}]})};Ge=new WeakSet;Oi=function(){let t={id:17545,data:new $e(0)};f(this,ut,t);let e={id:357149030,data:[{id:2807729,data:1e6},{id:19840,data:oi},{id:22337,data:oi},i(this,c).streaming?null:t]};f(this,qt,e)};ye=new WeakSet;Ze=function(){let t={id:374648427,data:[]};f(this,Mt,t),i(this,c).video&&t.data.push({id:174,data:[{id:215,data:Et},{id:29637,data:Et},{id:131,data:vs},{id:134,data:i(this,c).video.codec},i(this,St),i(this,c).video.frameRate?{id:2352003,data:1e9/i(this,c).video.frameRate}:null,{id:224,data:[{id:176,data:i(this,c).video.width},{id:186,data:i(this,c).video.height},i(this,c).video.alpha?{id:21440,data:1}:null,i(this,it)]}]}),i(this,c).audio&&(f(this,Y,i(this,c).streaming?i(this,Y)||null:{id:236,size:4,data:new Uint8Array(Dt)}),t.data.push({id:174,data:[{id:215,data:Gt},{id:29637,data:Gt},{id:131,data:bs},{id:134,data:i(this,c).audio.codec},i(this,Y),{id:225,data:[{id:181,data:new _i(i(this,c).audio.sampleRate)},{id:159,data:i(this,c).audio.numberOfChannels},i(this,c).audio.bitDepth?{id:25188,data:i(this,c).audio.bitDepth}:null]}]})),i(this,c).subtitles&&t.data.push({id:174,data:[{id:215,data:_e},{id:29637,data:_e},{id:131,data:ys},{id:134,data:i(this,c).subtitles.codec},i(this,gt)]})};ke=new WeakSet;qe=function(){let t={id:408125543,size:i(this,c).streaming?-1:Li,data:[i(this,c).streaming?null:i(this,V),i(this,qt),i(this,Mt)]};if(f(this,Zt,t),i(this,l).writeEBML(t),i(this,l)instanceof Wt&&i(this,l).target.options.onHeader){let{data:e,start:s}=i(this,l).getTrackedWrites();i(this,l).target.options.onHeader(e,s)}};Qe=new WeakSet;Di=function(){f(this,mt,{id:475249515,data:[]})};X=new WeakSet;wt=function(){i(this,l)instanceof Si&&i(this,l).flush()};J=new WeakSet;pt=function(){return i(this,l).dataOffsets.get(i(this,Zt))};Oe=new WeakSet;Fi=function(t){if(t.decoderConfig){if(t.decoderConfig.colorSpace){let e=t.decoderConfig.colorSpace;if(f(this,Qt,e),i(this,it).data=[{id:21937,data:{rgb:1,bt709:1,bt470bg:5,smpte170m:6}[e.matrix]},{id:21946,data:{bt709:1,smpte170m:6,"iec61966-2-1":13}[e.transfer]},{id:21947,data:{bt709:1,bt470bg:5,smpte170m:6}[e.primaries]},{id:21945,data:[1,2][Number(e.fullRange)]}],!i(this,c).streaming){let s=i(this,l).pos;i(this,l).seek(i(this,l).offsets.get(i(this,it))),i(this,l).writeEBML(i(this,it)),i(this,l).seek(s)}}t.decoderConfig.description&&(i(this,c).streaming?f(this,St,h(this,kt,Xt).call(this,t.decoderConfig.description)):h(this,Rt,me).call(this,i(this,St),t.decoderConfig.description))}};De=new WeakSet;Ni=function(t){if(t.type!=="key"||!i(this,Qt))return;let e=0;if(dt(t.data,0,2)!==2)return;e+=2;let s=(dt(t.data,e+1,e+2)<<1)+dt(t.data,e+0,e+1);e+=2,s===3&&e++;let a=dt(t.data,e+0,e+1);if(e++,a)return;let n=dt(t.data,e+0,e+1);if(e++,n!==0)return;e+=2;let r=dt(t.data,e+0,e+24);if(e+=24,r!==4817730)return;s>=2&&e++;let d={rgb:7,bt709:2,bt470bg:1,smpte170m:3}[i(this,Qt).matrix];us(t.data,e+0,e+3,d)};At=new WeakSet;le=function(){let t=Math.min(i(this,c).video?i(this,bt):1/0,i(this,c).audio?i(this,yt):1/0),e=i(this,Q);for(;e.length>0&&e[0].timestamp<=t;)h(this,z,P).call(this,e.shift(),!i(this,c).video&&!i(this,c).audio)};zt=new WeakSet;de=function(t,e,s,a,n,r){let d=h(this,Xe,$i).call(this,s,a);return{data:t,additions:r,type:e,timestamp:d,duration:n,trackNumber:a}};Xe=new WeakSet;$i=function(t,e){let s=e===Et?i(this,bt):e===Gt?i(this,yt):i(this,ge);if(e!==_e){let a=e===Et?i(this,Ft):i(this,Nt);if(i(this,c).firstTimestampBehavior==="strict"&&s===-1&&t!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received ${t}). Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of the document, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
If you want to allow non-zero first timestamps, set firstTimestampBehavior: 'permissive'.
`);i(this,c).firstTimestampBehavior==="offset"&&(t-=a)}if(t<s)throw new Error(`Timestamps must be monotonically increasing (went from ${s} to ${t}).`);if(t<0)throw new Error(`Timestamps must be non-negative (received ${t}).`);return t};z=new WeakSet;P=function(t,e){i(this,c).streaming&&!i(this,Mt)&&(h(this,ye,Ze).call(this),h(this,ke,qe).call(this));let s=Math.floor(t.timestamp/1e3),a=e&&t.type==="key"&&s-i(this,Ct)>=1e3;(!i(this,O)||a)&&h(this,Je,Ri).call(this,s);let n=s-i(this,Ct);if(n<0)return;if(n>=Se)throw new Error(`Current Matroska cluster exceeded its maximum allowed length of ${Se} milliseconds. In order to produce a correct WebM file, you must pass in a key frame at least every ${Se} milliseconds.`);let d=new Uint8Array(4),w=new DataView(d.buffer);if(w.setUint8(0,128|t.trackNumber),w.setInt16(1,n,!1),t.duration===void 0&&!t.additions){w.setUint8(3,+(t.type==="key")<<7);let y={id:163,data:[d,t.data]};i(this,l).writeEBML(y)}else{let y=Math.floor(t.duration/1e3),g={id:160,data:[{id:161,data:[d,t.data]},t.duration!==void 0?{id:155,data:y}:null,t.additions?{id:30113,data:t.additions}:null]};i(this,l).writeEBML(g)}f(this,vt,Math.max(i(this,vt),s))};kt=new WeakSet;Xt=function(t){return{id:25506,size:4,data:new Uint8Array(t)}};Rt=new WeakSet;me=function(t,e){let s=i(this,l).pos;i(this,l).seek(i(this,l).offsets.get(t));let a=6+e.byteLength,n=Dt-a;if(n<0){let r=e.byteLength+n;e instanceof ArrayBuffer?e=e.slice(0,r):e=e.buffer.slice(0,r),n=0}t=[h(this,kt,Xt).call(this,e),{id:236,size:4,data:new Uint8Array(n)}],i(this,l).writeEBML(t),i(this,l).seek(s)};Je=new WeakSet;Ri=function(t){i(this,O)&&!i(this,c).streaming&&h(this,ve,ti).call(this),i(this,l)instanceof Wt&&i(this,l).target.options.onCluster&&i(this,l).startTrackingWrites(),f(this,O,{id:524531317,size:i(this,c).streaming?-1:Ui,data:[{id:231,data:t}]}),i(this,l).writeEBML(i(this,O)),f(this,Ct,t);let e=i(this,l).offsets.get(i(this,O))-i(this,J,pt);i(this,mt).data.push({id:187,data:[{id:179,data:t},i(this,c).video?{id:183,data:[{id:247,data:Et},{id:241,data:e}]}:null,i(this,c).audio?{id:183,data:[{id:247,data:Gt},{id:241,data:e}]}:null]})};ve=new WeakSet;ti=function(){let t=i(this,l).pos-i(this,l).dataOffsets.get(i(this,O)),e=i(this,l).pos;if(i(this,l).seek(i(this,l).offsets.get(i(this,O))+4),i(this,l).writeEBMLVarInt(t,Ui),i(this,l).seek(e),i(this,l)instanceof Wt&&i(this,l).target.options.onCluster){let{data:s,start:a}=i(this,l).getTrackedWrites();i(this,l).target.options.onCluster(s,a,i(this,Ct))}};Pt=new WeakSet;ce=function(){if(i(this,$t))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};new TextEncoder;const Ms=["00","01","02","03"],Ss=["08","10","12"],Cs=["00","10","11","20","21","30","31","40","41","50","51","52","60","61","62"];async function Ws(t,e){const s=[];for(const a of Ms)for(const n of Cs)for(const r of Ss){const d=`vp09.${a}.${n}.${r}`,{supported:w}=await VideoEncoder.isConfigSupported({codec:d,height:e,width:t});w&&s.push(d)}return s}function hi(t,e,s){const a=t.slice();return a[20]=e[s],a}function li(t,e,s){const a=t.slice();return a[23]=e[s],a}function di(t){let e,s=t[23].label+"",a,n;return{c(){e=W("option"),a=tt(s),e.__value=n=t[23],Ht(e,e.__value)},m(r,d){Fe(r,e,d),v(e,a)},p(r,d){d&2&&s!==(s=r[23].label+"")&&wi(a,s),d&2&&n!==(n=r[23])&&(e.__value=n,Ht(e,e.__value))},d(r){r&&be(e)}}}function ci(t){let e,s=t[20]+"",a,n;return{c(){e=W("option"),a=tt(s),e.__value=n=t[20],Ht(e,e.__value)},m(r,d){Fe(r,e,d),v(e,a)},p(r,d){d&8&&s!==(s=r[20]+"")&&wi(a,s),d&8&&n!==(n=r[20])&&(e.__value=n,Ht(e,e.__value))},d(r){r&&be(e)}}}function Ts(t){let e,s,a,n,r,d,w,y,g,S,m,U,G,C,D,st,F,N,te,nt,ee,$,b,R,x,Tt,at=se(t[1]),k=[];for(let p=0;p<at.length;p+=1)k[p]=di(li(t,at,p));let rt=se(t[3]),E=[];for(let p=0;p<rt.length;p+=1)E[p]=ci(hi(t,rt,p));return{c(){e=W("main"),s=W("video"),s.innerHTML='<track kind="captions"/>',a=ot(),n=W("div"),r=W("select");for(let p=0;p<k.length;p+=1)k[p].c();d=ot(),w=W("button"),y=tt("Update stream"),g=ot(),S=W("div"),m=W("select"),U=W("option"),U.textContent="none";for(let p=0;p<E.length;p+=1)E[p].c();G=ot(),C=W("button"),D=tt("Configure encoder"),st=ot(),F=W("div"),N=W("button"),te=tt("start encoding"),ee=ot(),$=W("button"),b=tt("finish encoding"),Ut(s,"height",540),Ut(s,"width",960),s.autoplay=!0,t[2]===void 0&&jt(()=>t[11].call(r)),w.disabled=t[5],Ut(n,"class","svelte-t6ynls"),U.__value="none",Ht(U,U.__value),t[4]===void 0&&jt(()=>t[12].call(m)),C.disabled=t[5],Ut(S,"class","svelte-t6ynls"),N.disabled=nt=!t[5],$.disabled=R=!t[5],Ut(F,"class","svelte-t6ynls")},m(p,L){Fe(p,e,L),v(e,s),t[10](s),v(e,a),v(e,n),v(n,r);for(let u=0;u<k.length;u+=1)k[u]&&k[u].m(r,null);ie(r,t[2],!0),v(n,d),v(n,w),v(w,y),v(e,g),v(e,S),v(S,m),v(m,U);for(let u=0;u<E.length;u+=1)E[u]&&E[u].m(m,null);ie(m,t[4],!0),v(S,G),v(S,C),v(C,D),v(e,st),v(e,F),v(F,N),v(N,te),v(F,ee),v(F,$),v($,b),x||(Tt=[ht(r,"change",t[11]),ht(w,"click",t[6]),ht(m,"change",t[12]),ht(C,"click",t[7]),ht(N,"click",t[8]),ht($,"click",t[9])],x=!0)},p(p,[L]){if(L&2){at=se(p[1]);let u;for(u=0;u<at.length;u+=1){const Lt=li(p,at,u);k[u]?k[u].p(Lt,L):(k[u]=di(Lt),k[u].c(),k[u].m(r,null))}for(;u<k.length;u+=1)k[u].d(1);k.length=at.length}if(L&6&&ie(r,p[2]),L&32&&(w.disabled=p[5]),L&8){rt=se(p[3]);let u;for(u=0;u<rt.length;u+=1){const Lt=hi(p,rt,u);E[u]?E[u].p(Lt,L):(E[u]=ci(Lt),E[u].c(),E[u].m(m,null))}for(;u<E.length;u+=1)E[u].d(1);E.length=rt.length}L&24&&ie(m,p[4]),L&32&&(C.disabled=p[5]),L&32&&nt!==(nt=!p[5])&&(N.disabled=nt),L&32&&R!==(R=!p[5])&&($.disabled=R)},i:xt,o:xt,d(p){p&&be(e),t[10](null),ii(k,p),ii(E,p),x=!1,Jt(Tt)}}}let It=1920,Bt=1080;function Ls(t,e,s){let a=new Es({target:new mi,video:{codec:"V_VP9",width:It,height:Bt},firstTimestampBehavior:"offset",type:"webm"}),n,r,d,w,y,g,S=[],m;async function U(){s(0,r.srcObject=null,r),d.getTracks().forEach(b=>b.stop()),d=await navigator.mediaDevices.getUserMedia({video:{width:It,height:Bt,deviceId:m.deviceId}}),w=d.getVideoTracks()[0],s(0,r.srcObject=d,r),console.log("updated webcam feed to",m.deviceId)}async function G(){s(1,S=(await navigator.mediaDevices.enumerateDevices()).filter(b=>b.kind==="videoinput")),s(2,m=S[0]),d=await navigator.mediaDevices.getUserMedia({video:{width:It,height:Bt}}),w=d.getVideoTracks()[0],s(0,r.srcObject=d,r),console.log("video feed set to webcam"),y=new MediaStreamTrackProcessor({track:w}),g=y.readable.getReader(),console.log("frame stream reader configured",g)}let C=[],D="none";Zi(async()=>{if(await G(),s(3,C=await Ws(It,Bt)),C.length<2)throw new Error("No supported vp9 codecs found");console.log("available vp9 codecs found")});let st=!1;async function F(){if(D==="none")throw new Error("Please select codec");const b={codec:D,width:It,height:Bt},{supported:R}=await VideoEncoder.isConfigSupported(b);if(!R)throw new Error("VideoEncoder config not supported");n=new VideoEncoder({output:(x,Tt)=>{console.log(x,Tt),a.addVideoChunk(x,Tt)},error:x=>console.error(x)}),n.configure(b),console.log("encoder configured",{config:b,videoEncoder:n}),s(5,st=!0)}async function N(){const b=await g.read();console.log(b),n.encode(b.value),console.log(n)}async function te(){await n.flush(),a.finalize(),console.log(a);const{buffer:b}=a.target;let R=new Blob([b],{type:"video/webm"});console.log(URL.createObjectURL(R)),n.close(),n.reset(),s(5,st=!1)}function nt(b){Ce[b?"unshift":"push"](()=>{r=b,s(0,r)})}function ee(){m=si(this),s(2,m),s(1,S)}function $(){D=si(this),s(4,D),s(3,C)}return[r,S,m,C,D,st,U,F,N,te,nt,ee,$]}class Us extends rs{constructor(e){super(),as(this,e,Ls,Ts,Ki,{})}}new Us({target:document.getElementById("app")});
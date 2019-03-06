parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"OZd1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fromHex=i,exports.toHex=c,exports.bytesConcat=o,exports.bs58checkEncode=p,exports.bs58checkDecode=_,exports.bs58checkPrefixPick=l,exports.getContractHexKey=u,exports.encodeZarithUInt=g,exports.encodeZarithInt=w,exports.toTzStrValue=b,exports.toTzBytes=E,exports.encodeRawBytes=S,exports.decodeRawBytes=U,exports.default=exports.watermark=exports.prefix=void 0;var e=r(require("bn.js")),t=r(require("bs58check")),n=r(require("elliptic"));function r(e){return e&&e.__esModule?e:{default:e}}const[s,a]="undefined"!=typeof window?[window.TextEncoder,window.TextDecoder]:[require("util").TextEncoder,require("util").TextDecoder];function i(e){return new Uint8Array(n.default.utils.toArray(e,"hex"))}function c(e){return n.default.utils.toHex(e)}function o(e,t){const n=new Uint8Array(e.length+t.length);return n.set(e,0),n.set(t,e.length),n}function p(e,n){const r="string"==typeof n?h[n]:n;return t.default.encode(o(r,e))}function _(e,n){return t.default.decode(e).slice(n?n.length:l(e).bytes.length)}const h={block_hash:new Uint8Array([1,52]),operation_hash:new Uint8Array([5,116]),operation_list_hash:new Uint8Array([133,233]),operation_list_list_hash:new Uint8Array([29,159,109]),protocol_hash:new Uint8Array([2,170]),context_hash:new Uint8Array([79,199]),ed25519_public_key_hash:new Uint8Array([6,161,159]),secp256k1_public_key_hash:new Uint8Array([6,161,161]),p256_public_key_hash:new Uint8Array([6,161,164]),cryptobox_public_key_hash:new Uint8Array([153,103]),ed25519_seed:new Uint8Array([13,15,58,7]),ed25519_public_key:new Uint8Array([13,15,37,217]),secp256k1_secret_key:new Uint8Array([17,162,224,201]),p256_secret_key:new Uint8Array([16,81,238,189]),ed25519_encrypted_seed:new Uint8Array([7,90,60,179,41]),secp256k1_encrypted_secret_key:new Uint8Array([9,237,241,174,150]),p256_encrypted_secret_key:new Uint8Array([9,48,57,115,171]),secp256k1_public_key:new Uint8Array([3,254,226,86]),p256_public_key:new Uint8Array([3,178,139,127]),secp256k1_scalar:new Uint8Array([38,248,136]),secp256k1_element:new Uint8Array([5,92,0]),ed25519_secret_key:new Uint8Array([43,246,78,7]),ed25519_signature:new Uint8Array([9,245,205,134,18]),secp256k1_signature:new Uint8Array([13,115,101,19,63]),p256_signature:new Uint8Array([54,240,44,52]),generic_signature:new Uint8Array([4,130,43]),chain_id:new Uint8Array([7,82,0]),contract_hash:new Uint8Array([2,90,121])};function l(e){const t={15:{Net:"chain_id"},30:{id:"cryptobox_public_key_hash"},36:{tz1:"ed25519_public_key_hash",tz2:"secp256k1_public_key_hash",tz3:"p256_public_key_hash",KT1:"contract_hash"},51:{B:"block_hash",o:"operation_hash",P:"protocol_hash"},52:{Lo:"operation_list_hash",Co:"context_hash"},53:{LLo:"operation_list_list_hash",SSp:"secp256k1_scalar"},54:{edsk:"ed25519_seed",edpk:"ed25519_public_key",spsk:"secp256k1_secret_key",p2sk:"p256_secret_key",GSp:"secp256k1_element"},55:{sppk:"secp256k1_public_key",p2pk:"p256_public_key"},88:{edesk:"ed25519_encrypted_seed",spesk:"secp256k1_encrypted_secret_key",p2esk:"p256_encrypted_secret_key"},96:{sig:"generic_signature"},98:{edsk:"ed25519_secret_key",p2sig:"p256_signature"},99:{edsig:"ed25519_signature",spsig1:"secp256k1_signature"}}[e.length];if(t)for(const n in t){const r=n.length;if(e.slice(0,r)===n)return{bytes:h[t[n]],name:t[n]}}throw`No prefix found for: ${e}`}function u(e){if(36!==e.length||"KT1"!==e.slice(0,3))throw`invalid contract: ${e}`;const t=c(_(e,h.contract_hash));return[[0,2],[2,4],[4,6],[6,8],[8,10],[10,void 0]].map(e=>t.slice(e[0],e[1])).join("/")}exports.prefix=h;const d={block_header:e=>o(new Uint8Array([1]),e),endorsement:e=>o(new Uint8Array([2]),e),operation:()=>new Uint8Array([3]),custom:e=>e};exports.watermark=d;const y={"00":"parameter","01":"storage","02":"code","03":"False","04":"Elt","05":"Left","06":"None","07":"Pair","08":"Right","09":"Some","0A":"True","0B":"Unit","0C":"PACK","0D":"UNPACK","0E":"BLAKE2B","0F":"SHA256",10:"SHA512",11:"ABS",12:"ADD",13:"AMOUNT",14:"AND",15:"BALANCE",16:"CAR",17:"CDR",18:"CHECK_SIGNATURE",19:"COMPARE","1A":"CONCAT","1B":"CONS","1C":"CREATE_ACCOUNT","1D":"CREATE_CONTRACT","1E":"IMPLICIT_ACCOUNT","1F":"DIP",20:"DROP",21:"DUP",22:"EDIV",23:"EMPTY_MAP",24:"EMPTY_SET",25:"EQ",26:"EXEC",27:"FAILWITH",28:"GE",29:"GET","2A":"GT","2B":"HASH_KEY","2C":"IF","2D":"IF_CONS","2E":"IF_LEFT","2F":"IF_NONE",30:"INT",31:"LAMBDA",32:"LE",33:"LEFT",34:"LOOP",35:"LSL",36:"LSR",37:"LT",38:"MAP",39:"MEM","3A":"MUL","3B":"NEG","3C":"NEQ","3D":"NIL","3E":"NONE","3F":"NOT",40:"NOW",41:"OR",42:"PAIR",43:"PUSH",44:"RIGHT",45:"SIZE",46:"SOME",47:"SOURCE",48:"SENDER",49:"SELF","4A":"STEPS_TO_QUOTA","4B":"SUB","4C":"SWAP","4D":"TRANSFER_TOKENS","4E":"SET_DELEGATE","4F":"UNIT",50:"UPDATE",51:"XOR",52:"ITER",53:"LOOP_LEFT",54:"ADDRESS",55:"CONTRACT",56:"ISNAT",57:"CAST",58:"RENAME",59:"bool","5A":"contract","5B":"int","5C":"key","5D":"key_hash","5E":"lambda","5F":"list",60:"map",61:"big_map",62:"nat",63:"option",64:"or",65:"pair",66:"set",67:"signature",68:"string",69:"bytes","6A":"mutez","6B":"timestamp","6C":"unit","6D":"operation","6E":"address","6F":"SLICE"},k=(()=>{const e={};for(const t in y)e[y[t]]=t;return e})(),A={"00":"int","01":"string","02":"seq","03":{name:"prim",len:0,annots:!1},"04":{name:"prim",len:0,annots:!0},"05":{name:"prim",len:1,annots:!1},"06":{name:"prim",len:1,annots:!0},"07":{name:"prim",len:2,annots:!1},"08":{name:"prim",len:2,annots:!0},"09":{name:"prim",len:3,annots:!0},"0A":"bytes"},f={0:{false:"03",true:"04"},1:{false:"05",true:"06"},2:{false:"07",true:"08"},3:{true:"09"}};function g(t){const n=new e.default(t,10).toString(2).replace("-",""),r=n.length%7?n.length+7-n.length%7:n.length,s=n.padStart(r,"0").match(/\d{7}/g).reverse();return s.map((e,t)=>parseInt((t===s.length-1?"0":"1")+e,2).toString(16).padStart(2,"0")).join("")}function w(t){const n=new e.default(t,10),r="-"===n.toString(2)[0]?"1":"0",s=n.toString(2).replace("-",""),a=s.length<=6?6:(s.length-6)%7?s.length+7-(s.length-6)%7:s.length,i=s.padStart(a,"0").match(/\d{6,7}/g).reverse();return i[0]=r+i[0],i.map((e,t)=>parseInt((t===i.length-1?"0":"1")+e,2).toString(16).padStart(2,"0")).join("")}function b(e){const t={44(){const t=e.slice(0,2);if("00"===t){const t=e.slice(2,4),n={"00":"ed25519_public_key_hash","01":"secp256k1_public_key_hash","02":"p256_public_key_hash"};return p(i(e.slice(4)),n[t])}if("01"===t)return p(i(e.slice(2,42)),"contract_hash");throw`Invalid tag(${t}) for contract id`},42(){const t=e.slice(0,2);return p(i(e.slice(2)),{"00":"ed25519_public_key_hash","01":"secp256k1_public_key_hash","02":"p256_public_key_hash"}[t])},66(){const t=e.slice(0,2);if("00"!==t)throw`Invalid tag(${t}) for Ed25519 public key`;return p(i(e.slice(2)),"ed25519_public_key")},68(){const t=e.slice(0,2);if("01"===t)return p(i(e.slice(2)),"secp256k1_public_key");if("02"===t)return p(i(e.slice(2)),"p256_public_key");throw`Invalid tag(${t}) for Secp256k1 and P256 public key`}};try{return t[e.length]()}catch(n){throw`Invalid input to decode to Micheline: ${e}`}}function E(e,t=!1){const n=l(e),r=_(e,n.bytes);return({contract_hash:"01",ed25519_public_key_hash:t?"00":"0000",secp256k1_public_key_hash:t?"01":"0001",p256_public_key_hash:t?"02":"0002",ed25519_public_key:"00",secp256k1_public_key:"01",p256_public_key:"02"}[n.name]||"")+c(r)+({contract_hash:"00"}[n.name]||"")}function S(e){const t=e=>{const n=[];if(e instanceof Array){n.push("02");const r=e.map(e=>t(e)).join(""),s=r.length/2;n.push(s.toString(16).padStart(8,"0")),n.push(r)}else if(e instanceof Object)if(e.prim){const r=e.args?e.args.length:0;if(n.push(f[r][!!e.annots]),n.push(k[e.prim]),e.args&&e.args.forEach(e=>{n.push(t(e))}),e.annots){const t=e.annots.map(e=>c((new s).encode(e))).join("20");n.push((t.length/2).toString(16).padStart(8,"0")),n.push(t)}}else if(e.bytes||e.address||e.contract||e.key||e.key_hash||e.signature){const t=e.bytes||E(e.address||e.contract||e.key||e.key_hash||e.signature,e.key_hash),r=t.length/2;n.push("0A"),n.push(r.toString(16).padStart(8,"0")),n.push(t)}else if(e.int){const t=w(e.int);n.push("00"),n.push(t)}else if(e.string){const t=(new s).encode(e.string),r=[].slice.call(t).map(e=>e.toString(16).padStart(2,"0")).join(""),a=t.length;n.push("01"),n.push(a.toString(16).padStart(8,"0")),n.push(r)}return n.join("")};return t(e).toUpperCase()}function U(t){t=t.toUpperCase();let n=0;const r=e=>t.slice(n,n+e),s=()=>{const t=r(2),i=A[t];if(i instanceof Object){n+=2;const e=y[r(2)];n+=2;const t={prim:e,args:Array.apply(null,new Array(i.len)).map(()=>s()),annots:void 0};if(i.len||delete t.args,i.annots){const e=2*parseInt(r(8),16);n+=8;const s=r(e).match(/[\dA-F]{2}/g);if(n+=e,s){const e=new Uint8Array(s.map(e=>parseInt(e,16))),n=new a("utf-8").decode(e);t.annots=n.split(" ")}}else delete t.annots;return t}if("0A"===t){n+=2;const e=r(8);n+=8;const t=2*parseInt(e,16),s=r(t);return n+=t,{bytes:s}}if("01"===t){n+=2;const e=r(8);n+=8;const t=2*parseInt(e,16),s=r(t);n+=t;const i=s.match(/[\dA-F]{2}/g);if(i instanceof Array){const e=new Uint8Array(i.map(e=>parseInt(e,16)));return{string:new a("utf-8").decode(e)}}throw"Input bytes error"}if("00"===t){n+=2;const t=parseInt(r(2),16).toString(2).padStart(8,"0");n+=2;t[1];const s=[t.slice(2)];let a="1"===t[0];for(;a;){const e=parseInt(r(2),16).toString(2).padStart(8,"0");n+=2,s.push(e.slice(1)),a="1"===e[0]}return{int:new e.default(s.reverse().join(""),2).toString(10)}}if("02"===t){n+=2;const e=r(8);n+=8;const t=2*parseInt(e,16),a=(r(t),n+t),i=[];for(;a>n;)i.push(s());return i}throw`Invalid raw bytes: Byte:${t} Index:${n}`};return s()}var m={fromHex:i,toHex:c,toTzBytes:E,toTzStrValue:b,prefix:h,watermark:d,bs58checkEncode:p,bs58checkDecode:_,bs58checkPrefixPick:l,getContractHexKey:u,bytesConcat:o,encodeRawBytes:S,decodeRawBytes:U,encodeZarithInt:w,encodeZarithUInt:g};exports.default=m;
},{}],"7UtD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.blake2bHash=i,exports.getMnemonic=a,exports.genRandomBytes=f,exports.decryptKey=k,exports.encryptKey=_,exports.getKeyFromSecretKey=b,exports.getKeyFromSeed=h,exports.getSeedFromWords=m,exports.getKeyFromWords=g,exports.genRandomKey=x,exports.signOperation=w,exports.default=void 0;var e=d(require("bip39")),t=d(require("./codec")),r=d(require("elliptic")),c=d(require("blakejs")),n=d(require("crypto")),s=o(require("tweetnacl"));function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var c=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};c.get||c.set?Object.defineProperty(t,r,c):t[r]=e[r]}return t.default=e,t}function d(e){return e&&e.__esModule?e:{default:e}}function i(e,t=32){return c.default.blake2b(e,null,t)}function a(t){return e.default.generateMnemonic(t)}class u{constructor(e,r,c){this.name=e,this.secret_key=r,this.pub_key=c,this.address={ed25519:()=>t.default.bs58checkEncode(i(this.pub_key,20),t.default.prefix.ed25519_public_key_hash),secp256k1:()=>t.default.bs58checkEncode(i(this.pub_key,20),t.default.prefix.secp256k1_public_key_hash),p256:()=>t.default.bs58checkEncode(i(this.pub_key,20),t.default.prefix.p256_public_key_hash)}[this.name]()}getSecretKey(){return{ed25519:()=>t.default.bs58checkEncode(this.secret_key,t.default.prefix.ed25519_secret_key),secp256k1:()=>t.default.bs58checkEncode(this.secret_key,t.default.prefix.secp256k1_secret_key),p256:()=>t.default.bs58checkEncode(this.secret_key,t.default.prefix.p256_secret_key)}[this.name]()}getPublicKey(){return{ed25519:()=>t.default.bs58checkEncode(this.pub_key,t.default.prefix.ed25519_public_key),secp256k1:()=>t.default.bs58checkEncode(this.pub_key,t.default.prefix.secp256k1_public_key),p256:()=>t.default.bs58checkEncode(this.pub_key,t.default.prefix.p256_public_key)}[this.name]()}}function f(e){return"undefined"!=typeof window&&window.crypto&&window.crypto.getRandomValues?window.crypto.getRandomValues(new Uint8Array(e)):n.default.randomBytes(e)}function p(e){new r.default.eddsa("ed25519");const t=s.default.sign.keyPair[32===e.length?"fromSeed":"fromSecretKey"](e);return new u("ed25519",t.secretKey,t.publicKey)}function y(e){const t=new r.default.ec("secp256k1").keyFromPrivate(e),c=new Uint8Array([2].concat(t.getPublic().getX().toArray()));return new u("secp256k1",e,c)}function l(e){const t=new r.default.ec("p256").keyFromPrivate(e),c=new Uint8Array([3].concat(t.getPublic().getX().toArray()));return new u("p256",e,c)}function k(e,r){const c=t.default.bs58checkPrefixPick(e),o=t.default.bs58checkDecode(e,c.bytes),d=o.slice(0,8),i=o.slice(8),a=n.default.pbkdf2Sync(r,d,32768,32,"sha512"),u=s.secretbox.open(i,new Uint8Array(24),a),f={ed25519_encrypted_seed:p,secp256k1_encrypted_secret_key:y,p256_encrypted_secret_key:l};if(c.name in f)return f[c.name](u);throw"No valid prefix for encrypted key found"}function _(e,r,c){if(32!==r.length)throw"The length of key bytes to encrypt can only be 32. (should use seed for ed25519)";const o=f(8),d=n.default.pbkdf2Sync(c,o,32768,32,"sha512"),i=(0,s.secretbox)(r,new Uint8Array(24),d),a={ed25519:t.default.prefix.ed25519_encrypted_seed,secp256k1:t.default.prefix.secp256k1_encrypted_secret_key,p256:t.default.prefix.p256_encrypted_secret_key},u=t.default.bytesConcat(o,i);return t.default.bs58checkEncode(u,a[e])}function b(e){const r=t.default.bs58checkPrefixPick(e),c=t.default.bs58checkDecode(e,r.bytes),n={ed25519_secret_key:p,secp256k1_secret_key:y,p256_encrypted_secret_key:l};if(r.name in n)return n[r.name](c);throw"No valid prefix for secret key found"}function h(e){const r="string"==typeof e?t.default.bs58checkDecode(e):e,c=s.default.sign.keyPair.fromSeed(r);return new u("ed25519",c.secretKey,c.publicKey)}function m(t,r){const c=t instanceof Array?t.join(" "):t;return e.default.mnemonicToSeed(c,r).slice(0,32)}function g(e,t){return h(m(e,t))}function x(e){return{ed25519:p,secp256k1:y,p256:l}[e](f("ed25519"===e?64:32))}function w(e,c){const n="string"==typeof e?t.default.fromHex(e):e,o=i(t.default.bytesConcat(t.default.watermark.operation(),n)),d=t.default.bs58checkPrefixPick(c),a={ed25519_secret_key:t.default.prefix.ed25519_signature,secp256k1_secret_key:t.default.prefix.secp256k1_signature,p256_secret_key:t.default.prefix.p256_signature},u=t.default.bs58checkDecode(c,d.bytes);if(d.name in a){const e={ed25519_secret_key:()=>s.default.sign.keyPair.fromSecretKey(u).secretKey,secp256k1_secret_key:()=>new r.default.ec("secp256k1").keyFromPrivate(u),p256_secret_key:()=>new r.default.ec("p256").keyFromPrivate(u)}[d.name](),c="ed25519_secret_key"===d.name?new Uint8Array(s.default.sign.detached(o,e)):(e=>new Uint8Array(e.r.toArray().concat(e.s.toArray())))(e.sign(o,{canonical:!0}));return t.default.bs58checkEncode(c,a[d.name])}throw`invalid prefix for: ${c}`}var K={getMnemonic:a,getKeyFromSeed:h,getSeedFromWords:m,getKeyFromWords:g,genRandomKey:x,genRandomBytes:f,decryptKey:k,encryptKey:_,getKeyFromSecretKey:b,signOperation:w};exports.default=K;
},{"./codec":"OZd1"}],"46Yz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.forgeOperation=o,exports.parseOperationBytes=r,exports.default=void 0;var e=a(require("bn.js")),t=a(require("./codec"));function a(e){return e&&e.__esModule?e:{default:e}}const s={transaction(e){const a=["08"];if(a.push(t.default.toTzBytes(e.source)),[e.fee,e.counter,e.gas_limit,e.storage_limit,e.amount].forEach(e=>{const s=t.default.encodeZarithUInt(e);a.push(s)}),a.push(t.default.toTzBytes(e.destination)),a.push(e.parameters?"FF":"00"),e.parameters){const s=t.default.encodeRawBytes(e.parameters);a.push((s.length/2).toString(16).padStart(8,"0")),a.push(s)}return a.join("")},origination(e){const a=["09"];if(a.push(t.default.toTzBytes(e.source)),[e.fee,e.counter,e.gas_limit,e.storage_limit].forEach(e=>{const s=t.default.encodeZarithUInt(e);a.push(s)}),a.push(t.default.toTzBytes(e.managerPubkey,!0)),a.push(t.default.encodeZarithUInt(e.balance)),a.push(e.spendable?"FF":"00"),a.push(e.delegatable?"FF":"00"),a.push(e.delegate?"FF":"00"),e.delegate&&a.push(t.default.toTzBytes(e.delegate,!0)),a.push(e.script?"FF":"00"),e.script&&e.script.code&&e.script.storage){const s=t.default.encodeRawBytes(e.script.code);a.push((s.length/2).toString(16).padStart(8,"0")),a.push(s);const o=t.default.encodeRawBytes(e.script.storage);a.push((o.length/2).toString(16).padStart(8,"0")),a.push(o)}return a.join("")},reveal(e){const a=["07"];return a.push(t.default.toTzBytes(e.source)),[e.fee,e.counter,e.gas_limit,e.storage_limit].forEach(e=>{const s=t.default.encodeZarithUInt(e);a.push(s)}),a.push(t.default.toTzBytes(e.public_key,!0)),a.join("")}};function o(e,a){const o=t.default.bs58checkDecode(a),r=[t.default.toHex(o)];return e.forEach(e=>{const t=s[e.kind](e);r.push(t)}),r.join("").toLowerCase()}function r(a){a=a.slice(64).toUpperCase();let s=0;const o=e=>{const t=a.slice(s,e?s+e:void 0);return s+=e,t},r=()=>{const t=parseInt(o(2),16).toString(2).padStart(8,"0"),a=[t.slice(1)];let s="1"===t[0];for(;s;){const e=parseInt(o(2),16).toString(2).padStart(8,"0");a.push(e.slice(1)),s="1"===e[0]}return new e.default(a.reverse().join(""),2).toString(10)},n=[];for(;s<a.length-1;){const e=o(2);if("07"===e){const e=t.default.toTzStrValue(o(44)),a=r(),s=r(),u=r(),i=r(),l=t.default.toTzStrValue(o());n.push({kind:"reveal",source:e,fee:a,counter:s,gas_limit:u,storage_limit:i,public_key:l})}else if("08"===e){const e=t.default.toTzStrValue(o(44)),a=r(),s=r(),u=r(),i=r(),l=r(),c=t.default.toTzStrValue(o(44));let d;if("FF"===o(2)){const e=2*parseInt(o(8),16);d=t.default.decodeRawBytes(o(e))}n.push({kind:"transaction",source:e,fee:a,counter:s,gas_limit:u,storage_limit:i,amount:l,destination:c,parameters:d})}else{if("09"!==e)throw`Only support reveal(07), transaction(08) and origination(09) tags.\nBut current tag is ${e} at index: ${s}`;{const e=t.default.toTzStrValue(o(44)),a=r(),s=r(),u=r(),i=r(),l=t.default.toTzStrValue(o(42)),c=r(),d="00"!==o(2),p="00"!==o(2),f="00"===o(2)?void 0:t.default.toTzStrValue(o(42));let h;if("FF"===o(2)){const e=2*parseInt(o(8),16),a=t.default.decodeRawBytes(o(e)),s=2*parseInt(o(8),16);h={code:a,storage:t.default.decodeRawBytes(o(s))}}n.push({kind:"origination",source:e,fee:a,counter:s,gas_limit:u,storage_limit:i,managerPubkey:l,balance:c,spendable:d,delegatable:p,delegate:f,script:h})}}}return n}var n={forgeOperation:o,parseOperationBytes:r};exports.default=n;
},{"./codec":"OZd1"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=c(require("./PsddFKi3/codec")),e=c(require("./PsddFKi3/crypto")),d=c(require("./PsddFKi3/localop"));function c(o){return o&&o.__esModule?o:{default:o}}const t={PsddFKi3:{codec:o.default,crypto:e.default,localop:d.default}},r={codec:t.PsddFKi3.codec,crypto:t.PsddFKi3.crypto,localop:t.PsddFKi3.localop,modProtocol(o){if(!(o in t))throw`Protocol:${o} doesn't exist in protocols`;r.codec=t[o].codec,r.crypto=t[o].crypto,r.localop=t[o].localop}};var l=r;exports.default=l;
},{"./PsddFKi3/codec":"OZd1","./PsddFKi3/crypto":"7UtD","./PsddFKi3/localop":"46Yz"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map
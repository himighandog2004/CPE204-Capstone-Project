import{c as Gu,b as vn,t as qr}from"../chunks/DpPNDkSg.js";import"../chunks/CRfDEawb.js";import{aJ as Wu,u as Ku,r as Qu,C as Xu,D as cl,F as ul,ac as Ju,az as Yu,g as we,R as mt,T as Be,V as De,W as ur,Z as _n,X as Bo,Y as Zu}from"../chunks/DG9fO9Vj.js";import{s as jo}from"../chunks/qdSHFwYm.js";import{i as $o}from"../chunks/BVjXUt0r.js";import{e as eh,i as th,s as nh}from"../chunks/CkpxMIa2.js";import{I as rh,a as ih,M as sh,r as Ho}from"../chunks/CCimFQad.js";import{l as oh,e as zo}from"../chunks/BfmvDGbb.js";import{i as ah}from"../chunks/Dp_WqK5O.js";import{s as lh,r as ch}from"../chunks/CRdvjZbj.js";function qo(n,e,t=e){var r=Wu();oh(n,"input",i=>{var o=i?n.defaultValue:n.value;if(o=Si(n)?Ci(o):o,t(o),r&&o!==(o=e())){var l=n.selectionStart,u=n.selectionEnd;n.value=o??"",u!==null&&(n.selectionStart=l,n.selectionEnd=Math.min(u,n.value.length))}}),(Xu&&n.defaultValue!==n.value||Ku(e)==null&&n.value)&&t(Si(n)?Ci(n.value):n.value),Qu(()=>{var i=e();Si(n)&&i===Ci(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function Si(n){var e=n.type;return e==="number"||e==="range"}function Ci(n){return n===""?null:+n}function uh(n){return function(...e){var t=e[0];return t.preventDefault(),n==null?void 0:n.apply(this,e)}}function hh(n,e){cl(e,!0);let t=ch(e,["$$slots","$$events","$$legacy"]);rh(n,lh({name:"key-round"},()=>t,{iconNode:[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]],children:(i,o)=>{var l=Gu(),u=Ju(l);ih(u,()=>e.children??Yu),vn(i,l)},$$slots:{default:!0}})),ul()}const dh=()=>{};var Go={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},fh=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],l=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],l=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return e.join("")},dl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,u=l?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,v=o>>2,w=(o&3)<<4|u>>4;let P=(u&15)<<2|f>>6,C=f&63;h||(C=64,l||(P=64)),r.push(t[v],t[w],t[P],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):fh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const w=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||f==null||w==null)throw new ph;const P=o<<2|u>>4;if(r.push(P),f!==64){const C=u<<4&240|f>>2;if(r.push(C),w!==64){const k=f<<6&192|w;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ph extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gh=function(n){const e=hl(n);return dl.encodeByteArray(e,!0)},Rr=function(n){return gh(n).replace(/\./g,"")},fl=function(n){try{return dl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=()=>mh().__FIREBASE_DEFAULTS__,yh=()=>{if(typeof process>"u"||typeof Go>"u")return;const n=Go.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fl(n[1]);return e&&JSON.parse(e)},Gr=()=>{try{return dh()||_h()||yh()||vh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pl=n=>{var e,t;return(t=(e=Gr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Eh=n=>{const e=pl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},gl=()=>{var n;return(n=Gr())===null||n===void 0?void 0:n.config},ml=n=>{var e;return(e=Gr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Rr(JSON.stringify(t)),Rr(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Ah(){var n;const e=(n=Gr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ph(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function bh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sh(){const n=_e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ch(){return!Ah()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kh(){try{return typeof indexedDB=="object"}catch{return!1}}function Dh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="FirebaseError";class Ke extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Nh,Object.setPrototypeOf(this,Ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vn.prototype.create)}}class Vn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],l=o?Oh(o,r):"Error",u=`${this.serviceName}: ${l} (${i}).`;return new Ke(i,u,r)}}function Oh(n,e){return n.replace(Vh,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Vh=/\{\$([^}]+)}/g;function Mh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],l=e[i];if(Wo(o)&&Wo(l)){if(!Tt(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Wo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Lh(n,e){const t=new xh(n,e);return t.subscribe.bind(t)}class xh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Uh(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ki),i.error===void 0&&(i.error=ki),i.complete===void 0&&(i.complete=ki);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ki(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(n){return n&&n._delegate?n._delegate:n}class It{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Th;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jh(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=_t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_t){return this.instances.has(e)}getOptions(e=_t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&l.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bh(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_t){return this.component?this.component.multipleInstances?e:_t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bh(n){return n===_t?void 0:n}function jh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const Hh={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},zh=U.INFO,qh={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Gh=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=qh[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class as{constructor(e){this.name=e,this._logLevel=zh,this._logHandler=Gh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const Wh=(n,e)=>e.some(t=>n instanceof t);let Ko,Qo;function Kh(){return Ko||(Ko=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qh(){return Qo||(Qo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _l=new WeakMap,Bi=new WeakMap,yl=new WeakMap,Di=new WeakMap,ls=new WeakMap;function Xh(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{t(it(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&_l.set(t,n)}).catch(()=>{}),ls.set(e,n),e}function Jh(n){if(Bi.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{t(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Bi.set(n,e)}let ji={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return it(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Yh(n){ji=n(ji)}function Zh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ni(this),e,...t);return yl.set(r,e.sort?e.sort():[e]),it(r)}:Qh().includes(n)?function(...e){return n.apply(Ni(this),e),it(_l.get(this))}:function(...e){return it(n.apply(Ni(this),e))}}function ed(n){return typeof n=="function"?Zh(n):(n instanceof IDBTransaction&&Jh(n),Wh(n,Kh())?new Proxy(n,ji):n)}function it(n){if(n instanceof IDBRequest)return Xh(n);if(Di.has(n))return Di.get(n);const e=ed(n);return e!==n&&(Di.set(n,e),ls.set(e,n)),e}const Ni=n=>ls.get(n);function td(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,e),u=it(l);return r&&l.addEventListener("upgradeneeded",h=>{r(it(l.result),h.oldVersion,h.newVersion,it(l.transaction),h)}),t&&l.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const nd=["get","getKey","getAll","getAllKeys","count"],rd=["put","add","delete","clear"],Oi=new Map;function Xo(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Oi.get(e))return Oi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=rd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nd.includes(t)))return;const o=async function(l,...u){const h=this.transaction(l,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[t](...u),i&&h.done]))[0]};return Oi.set(e,o),o}Yh(n=>({...n,get:(e,t,r)=>Xo(e,t)||n.get(e,t,r),has:(e,t)=>!!Xo(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function sd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $i="@firebase/app",Jo="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new as("@firebase/app"),od="@firebase/app-compat",ad="@firebase/analytics-compat",ld="@firebase/analytics",cd="@firebase/app-check-compat",ud="@firebase/app-check",hd="@firebase/auth",dd="@firebase/auth-compat",fd="@firebase/database",pd="@firebase/data-connect",gd="@firebase/database-compat",md="@firebase/functions",_d="@firebase/functions-compat",yd="@firebase/installations",vd="@firebase/installations-compat",Ed="@firebase/messaging",Td="@firebase/messaging-compat",Id="@firebase/performance",wd="@firebase/performance-compat",Ad="@firebase/remote-config",Rd="@firebase/remote-config-compat",Pd="@firebase/storage",bd="@firebase/storage-compat",Sd="@firebase/firestore",Cd="@firebase/vertexai",kd="@firebase/firestore-compat",Dd="firebase",Nd="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="[DEFAULT]",Od={[$i]:"fire-core",[od]:"fire-core-compat",[ld]:"fire-analytics",[ad]:"fire-analytics-compat",[ud]:"fire-app-check",[cd]:"fire-app-check-compat",[hd]:"fire-auth",[dd]:"fire-auth-compat",[fd]:"fire-rtdb",[pd]:"fire-data-connect",[gd]:"fire-rtdb-compat",[md]:"fire-fn",[_d]:"fire-fn-compat",[yd]:"fire-iid",[vd]:"fire-iid-compat",[Ed]:"fire-fcm",[Td]:"fire-fcm-compat",[Id]:"fire-perf",[wd]:"fire-perf-compat",[Ad]:"fire-rc",[Rd]:"fire-rc-compat",[Pd]:"fire-gcs",[bd]:"fire-gcs-compat",[Sd]:"fire-fst",[kd]:"fire-fst-compat",[Cd]:"fire-vertex","fire-js":"fire-js",[Dd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Map,Vd=new Map,zi=new Map;function Yo(n,e){try{n.container.addComponent(e)}catch(t){qe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ht(n){const e=n.name;if(zi.has(e))return qe.debug(`There were multiple attempts to register component ${e}.`),!1;zi.set(e,n);for(const t of Pr.values())Yo(t,n);for(const t of Vd.values())Yo(t,n);return!0}function cs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function be(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},st=new Vn("app","Firebase",Md);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new It("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw st.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=Nd;function vl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw st.create("bad-app-name",{appName:String(i)});if(t||(t=gl()),!t)throw st.create("no-options");const o=Pr.get(i);if(o){if(Tt(t,o.options)&&Tt(r,o.config))return o;throw st.create("duplicate-app",{appName:i})}const l=new $h(i);for(const h of zi.values())l.addComponent(h);const u=new Ld(t,r,l);return Pr.set(i,u),u}function El(n=Hi){const e=Pr.get(n);if(!e&&n===Hi&&gl())return vl();if(!e)throw st.create("no-app",{appName:n});return e}function ot(n,e,t){var r;let i=(r=Od[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qe.warn(u.join(" "));return}Ht(new It(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="firebase-heartbeat-database",Ud=1,Pn="firebase-heartbeat-store";let Vi=null;function Tl(){return Vi||(Vi=td(xd,Ud,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pn)}catch(t){console.warn(t)}}}}).catch(n=>{throw st.create("idb-open",{originalErrorMessage:n.message})})),Vi}async function Fd(n){try{const t=(await Tl()).transaction(Pn),r=await t.objectStore(Pn).get(Il(n));return await t.done,r}catch(e){if(e instanceof Ke)qe.warn(e.message);else{const t=st.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qe.warn(t.message)}}}async function Zo(n,e){try{const r=(await Tl()).transaction(Pn,"readwrite");await r.objectStore(Pn).put(e,Il(n)),await r.done}catch(t){if(t instanceof Ke)qe.warn(t.message);else{const r=st.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qe.warn(r.message)}}}function Il(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=1024,jd=30;class $d{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zd(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ea();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>jd){const l=qd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ea(),{heartbeatsToSend:r,unsentEntries:i}=Hd(this._heartbeatsCache.heartbeats),o=Rr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return qe.warn(t),""}}}function ea(){return new Date().toISOString().substring(0,10)}function Hd(n,e=Bd){const t=[];let r=n.slice();for(const i of n){const o=t.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),ta(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ta(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class zd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kh()?Dh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Fd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ta(n){return Rr(JSON.stringify({version:2,heartbeats:n})).length}function qd(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){Ht(new It("platform-logger",e=>new id(e),"PRIVATE")),Ht(new It("heartbeat",e=>new $d(e),"PRIVATE")),ot($i,Jo,n),ot($i,Jo,"esm2017"),ot("fire-js","")}Gd("");var Wd="firebase",Kd="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot(Wd,Kd,"app");function us(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function wl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qd=wl,Al=new Vn("auth","Firebase",wl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new as("@firebase/auth");function Xd(n,...e){br.logLevel<=U.WARN&&br.warn(`Auth (${Qt}): ${n}`,...e)}function _r(n,...e){br.logLevel<=U.ERROR&&br.error(`Auth (${Qt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n,...e){throw hs(n,...e)}function Oe(n,...e){return hs(n,...e)}function Rl(n,e,t){const r=Object.assign(Object.assign({},Qd()),{[e]:t});return new Vn("auth","Firebase",r).create(e,{appName:n.name})}function at(n){return Rl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hs(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Al.create(n,...e)}function O(n,e,...t){if(!n)throw hs(e,...t)}function je(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _r(e),new Error(e)}function We(n,e){n||je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Jd(){return na()==="http:"||na()==="https:"}function na(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jd()||Ph()||"connection"in navigator)?navigator.onLine:!0}function Zd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t){this.shortDelay=e,this.longDelay=t,We(t>e,"Short delay should be less than long delay!"),this.isMobile=wh()||bh()}get(){return Yd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n,e){We(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nf=new Ln(3e4,6e4);function xn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ct(n,e,t,r,i={}){return bl(n,i,async()=>{let o={},l={};r&&(e==="GET"?l=r:o={body:JSON.stringify(r)});const u=Mn(Object.assign({key:n.config.apiKey},l)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:h},o);return Rh()||(f.referrerPolicy="no-referrer"),Pl.fetch()(await Cl(n,n.config.apiHost,t,u),f)})}async function bl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ef),e);try{const i=new sf(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw hr(n,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[h,f]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw hr(n,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw hr(n,"email-already-in-use",l);if(h==="USER_DISABLED")throw hr(n,"user-disabled",l);const v=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Rl(n,v,f);Ge(n,v)}}catch(i){if(i instanceof Ke)throw i;Ge(n,"network-request-failed",{message:String(i)})}}async function Sl(n,e,t,r,i={}){const o=await Ct(n,e,t,r,i);return"mfaPendingCredential"in o&&Ge(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Cl(n,e,t,r){const i=`${e}${t}?${r}`,o=n,l=o.config.emulator?ds(n.config,i):`${n.config.apiScheme}://${i}`;return tf.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(l).toString():l}function rf(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Oe(this.auth,"network-request-failed")),nf.get())})}}function hr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Oe(n,e,r);return i.customData._tokenResponse=t,i}function ra(n){return n!==void 0&&n.enterprise!==void 0}class of{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return rf(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function af(n,e){return Ct(n,"GET","/v2/recaptchaConfig",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf(n,e){return Ct(n,"POST","/v1/accounts:delete",e)}async function Sr(n,e){return Ct(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cf(n,e=!1){const t=Me(n),r=await t.getIdToken(e),i=fs(r);O(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Tn(Mi(i.auth_time)),issuedAtTime:Tn(Mi(i.iat)),expirationTime:Tn(Mi(i.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Mi(n){return Number(n)*1e3}function fs(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return _r("JWT malformed, contained fewer than 3 sections"),null;try{const i=fl(t);return i?JSON.parse(i):(_r("Failed to decode base64 JWT payload"),null)}catch(i){return _r("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ia(n){const e=fs(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ke&&uf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function uf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(n){var e;const t=n.auth,r=await n.getIdToken(),i=await bn(n,Sr(t,{idToken:r}));O(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?kl(o.providerUserInfo):[],u=ff(n.providerData,l),h=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),v=h?f:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Gi(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function df(n){const e=Me(n);await Cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ff(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kl(n){return n.map(e=>{var{providerId:t}=e,r=us(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pf(n,e){const t=await bl(n,{},async()=>{const r=Mn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,l=await Cl(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Pl.fetch()(l,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function gf(n,e){return Ct(n,"POST","/v2/accounts:revokeToken",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ia(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){O(e.length!==0,"internal-error");const t=ia(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await pf(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,l=new Ft;return r&&(O(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),o&&(O(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ft,this.toJSON())}_performRefresh(){return je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ce{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=us(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Gi(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await bn(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cf(this,e)}reload(){return df(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Cr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(be(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await bn(this,lf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,l,u,h,f,v;const w=(r=t.displayName)!==null&&r!==void 0?r:void 0,P=(i=t.email)!==null&&i!==void 0?i:void 0,C=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,k=(l=t.photoURL)!==null&&l!==void 0?l:void 0,M=(u=t.tenantId)!==null&&u!==void 0?u:void 0,N=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,z=(f=t.createdAt)!==null&&f!==void 0?f:void 0,H=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:q,emailVerified:Z,isAnonymous:G,providerData:$,stsTokenManager:y}=t;O(q&&y,e,"internal-error");const p=Ft.fromJSON(this.name,y);O(typeof q=="string",e,"internal-error"),Ze(w,e.name),Ze(P,e.name),O(typeof Z=="boolean",e,"internal-error"),O(typeof G=="boolean",e,"internal-error"),Ze(C,e.name),Ze(k,e.name),Ze(M,e.name),Ze(N,e.name),Ze(z,e.name),Ze(H,e.name);const m=new Ce({uid:q,auth:e,email:P,emailVerified:Z,displayName:w,isAnonymous:G,photoURL:k,phoneNumber:C,tenantId:M,stsTokenManager:p,createdAt:z,lastLoginAt:H});return $&&Array.isArray($)&&(m.providerData=$.map(_=>Object.assign({},_))),N&&(m._redirectEventId=N),m}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ft;i.updateFromServerResponse(t);const o=new Ce({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Cr(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];O(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?kl(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new Ft;u.updateFromIdToken(r);const h=new Ce({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:l}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Gi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Map;function $e(n){We(n instanceof Function,"Expected a class definition");let e=sa.get(n);return e?(We(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sa.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Dl.type="NONE";const oa=Dl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(n,e,t){return`firebase:${n}:${e}:${t}`}class Bt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=yr(this.userKey,i.apiKey,o),this.fullPersistenceKey=yr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Sr(this.auth,{idToken:e}).catch(()=>{});return t?Ce._fromGetAccountInfoResponse(this.auth,t,e):null}return Ce._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Bt($e(oa),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||$e(oa);const l=yr(r,e.config.apiKey,e.name);let u=null;for(const f of t)try{const v=await f._get(l);if(v){let w;if(typeof v=="string"){const P=await Sr(e,{idToken:v}).catch(()=>{});if(!P)break;w=await Ce._fromGetAccountInfoResponse(e,P,v)}else w=Ce._fromJSON(e,v);f!==o&&(u=w),o=f;break}}catch{}const h=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Bt(o,e,r):(o=h[0],u&&await o._set(l,u.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(l)}catch{}})),new Bt(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ml(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xl(e))return"Blackberry";if(Ul(e))return"Webos";if(Ol(e))return"Safari";if((e.includes("chrome/")||Vl(e))&&!e.includes("edge/"))return"Chrome";if(Ll(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nl(n=_e()){return/firefox\//i.test(n)}function Ol(n=_e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vl(n=_e()){return/crios\//i.test(n)}function Ml(n=_e()){return/iemobile/i.test(n)}function Ll(n=_e()){return/android/i.test(n)}function xl(n=_e()){return/blackberry/i.test(n)}function Ul(n=_e()){return/webos/i.test(n)}function ps(n=_e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function mf(n=_e()){var e;return ps(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _f(){return Sh()&&document.documentMode===10}function Fl(n=_e()){return ps(n)||Ll(n)||Ul(n)||xl(n)||/windows phone/i.test(n)||Ml(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n,e=[]){let t;switch(n){case"Browser":t=aa(_e());break;case"Worker":t=`${aa(_e())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((l,u)=>{try{const h=e(o);l(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vf(n,e={}){return Ct(n,"GET","/v2/passwordPolicy",xn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=6;class Tf{constructor(e){var t,r,i,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:Ef,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,l,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsNumericCharacter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new la(this),this.idTokenSubscription=new la(this),this.beforeStateQueue=new yf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Al,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$e(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await Bt.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Sr(this,{idToken:e}),r=await Ce._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(be(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===u)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Cr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(be(this.app))return Promise.reject(at(this));const t=e?Me(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return be(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return be(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($e(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vf(this),t=new Tf(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await gf(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$e(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await Bt.create(this,[$e(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{l=!0,h()}}else{const h=e.addObserver(t);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Xd(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xt(n){return Me(n)}class la{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lh(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wf(n){Wr=n}function jl(n){return Wr.loadJS(n)}function Af(){return Wr.recaptchaEnterpriseScript}function Rf(){return Wr.gapiScript}function Pf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class bf{constructor(){this.enterprise=new Sf}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Sf{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Cf="recaptcha-enterprise",$l="NO_RECAPTCHA";class kf{constructor(e){this.type=Cf,this.auth=Xt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,u)=>{af(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const f=new of(h);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,l(f.siteKey)}}).catch(h=>{u(h)})})}function i(o,l,u){const h=window.grecaptcha;ra(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(f=>{l(f)}).catch(()=>{l($l)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bf().execute("siteKey",{action:"verify"}):new Promise((o,l)=>{r(this.auth).then(u=>{if(!t&&ra(window.grecaptcha))i(u,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Af();h.length!==0&&(h+=u),jl(h).then(()=>{i(u,o,l)}).catch(f=>{l(f)})}}).catch(u=>{l(u)})})}}async function ca(n,e,t,r=!1,i=!1){const o=new kf(n);let l;if(i)l=$l;else try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const u=Object.assign({},e);return r?Object.assign(u,{captchaResp:l}):Object.assign(u,{captchaResponse:l}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Df(n,e,t,r,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await ca(n,e,t,t==="getOobCode");return r(n,l)}else return r(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await ca(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n,e){const t=cs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Tt(o,e??{}))return i;Ge(i,"already-initialized")}return t.initialize({options:e})}function Of(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map($e);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Vf(n,e,t){const r=Xt(n);O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Hl(e),{host:l,port:u}=Mf(e),h=u===null?"":`:${u}`,f={url:`${o}//${l}${h}/`},v=Object.freeze({host:l,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){O(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),O(Tt(f,r.config.emulator)&&Tt(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Lf()}function Hl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Mf(n){const e=Hl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:ua(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:ua(l)}}}function ua(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Lf(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return je("not implemented")}_getIdTokenResponse(e){return je("not implemented")}_linkToIdToken(e,t){return je("not implemented")}_getReauthenticationResolver(e){return je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(n,e){return Sl(n,"POST","/v1/accounts:signInWithIdp",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="http://localhost";class wt extends zl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ge("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=us(t,["providerId","signInMethod"]);if(!r||!i)return null;const l=new wt(r,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return jt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,jt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jt(e,t)}buildRequest(){const e={requestUri:xf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ql{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Un{constructor(){super("facebook.com")}static credential(e){return wt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch{return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com";et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Un{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return tt.credential(t,r)}catch{return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com";tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Un{constructor(){super("github.com")}static credential(e){return wt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch{return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com";nt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Un{constructor(){super("twitter.com")}static credential(e,t){return wt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return rt.credential(t,r)}catch{return null}}}rt.TWITTER_SIGN_IN_METHOD="twitter.com";rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uf(n,e){return Sl(n,"POST","/v1/accounts:signUp",xn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Ce._fromIdTokenResponse(e,r,i),l=ha(r);return new At({user:o,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ha(r);return new At({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ha(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Ke{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new kr(e,t,r,i)}}function Gl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?kr._fromErrorAndOperation(n,o,e,r):o})}async function Ff(n,e,t=!1){const r=await bn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return At._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(n,e,t=!1){const{auth:r}=n;if(be(r.app))return Promise.reject(at(r));const i="reauthenticate";try{const o=await bn(n,Gl(r,i,e,n),t);O(o.idToken,r,"internal-error");const l=fs(o.idToken);O(l,r,"internal-error");const{sub:u}=l;return O(n.uid===u,r,"user-mismatch"),At._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(n,e,t=!1){if(be(n.app))return Promise.reject(at(n));const r="signIn",i=await Gl(n,r,e),o=await At._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $f(n){const e=Xt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Hf(n,e,t){if(be(n.app))return Promise.reject(at(n));const r=Xt(n),l=await Df(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Uf).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&$f(n),h}),u=await At._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(u.user),u}function zf(n,e,t,r){return Me(n).onIdTokenChanged(e,t,r)}function qf(n,e,t){return Me(n).beforeAuthStateChanged(e,t)}const Dr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Dr,"1"),this.storage.removeItem(Dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=1e3,Wf=10;class Kl extends Wl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,u,h)=>{this.notifyListeners(l,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);_f()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Wf):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Gf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kl.type="LOCAL";const Kf=Kl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends Wl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ql.type="SESSION";const Xl=Ql;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Kr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(l).map(async f=>f(t.origin,o)),h=await Qf(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((u,h)=>{const f=gs("",20);i.port1.start();const v=setTimeout(()=>{h(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(w){const P=w;if(P.data.eventId===f)switch(P.data.status){case"ack":clearTimeout(v),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(P.data.response);break;default:clearTimeout(v),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return window}function Jf(n){Ve().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function Yf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ep(){return Jl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="firebaseLocalStorageDb",tp=1,Nr="firebaseLocalStorage",Zl="fbase_key";class Fn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qr(n,e){return n.transaction([Nr],e?"readwrite":"readonly").objectStore(Nr)}function np(){const n=indexedDB.deleteDatabase(Yl);return new Fn(n).toPromise()}function Wi(){const n=indexedDB.open(Yl,tp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Nr,{keyPath:Zl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Nr)?e(r):(r.close(),await np(),e(await Wi()))})})}async function da(n,e,t){const r=Qr(n,!0).put({[Zl]:e,value:t});return new Fn(r).toPromise()}async function rp(n,e){const t=Qr(n,!1).get(e),r=await new Fn(t).toPromise();return r===void 0?null:r.value}function fa(n,e){const t=Qr(n,!0).delete(e);return new Fn(t).toPromise()}const ip=800,sp=3;class ec{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>sp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kr._getInstance(ep()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Yf(),!this.activeServiceWorker)return;this.sender=new Xf(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wi();return await da(e,Dr,"1"),await fa(e,Dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>da(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>rp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Qr(i,!1).getAll();return new Fn(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ip)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ec.type="LOCAL";const op=ec;new Ln(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(n,e){return e?$e(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends zl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lp(n){return jf(n.auth,new ms(n),n.bypassAuthState)}function cp(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Bf(t,new ms(n),n.bypassAuthState)}async function up(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Ff(t,new ms(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:l,type:u}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lp;case"linkViaPopup":case"linkViaRedirect":return up;case"reauthViaPopup":case"reauthViaRedirect":return cp;default:Ge(this.auth,"internal-error")}}resolve(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=new Ln(2e3,1e4);class Ut extends tc{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){We(this.filter.length===1,"Popup operations only handle one event");const e=gs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Oe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hp.get())};e()}}Ut.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="pendingRedirect",vr=new Map;class fp extends tc{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=vr.get(this.auth._key());if(!e){try{const r=await pp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}vr.set(this.auth._key(),e)}return this.bypassAuthState||vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pp(n,e){const t=_p(e),r=mp(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function gp(n,e){vr.set(n._key(),e)}function mp(n){return $e(n._redirectPersistence)}function _p(n){return yr(dp,n.config.apiKey,n.name)}async function yp(n,e,t=!1){if(be(n.app))return Promise.reject(at(n));const r=Xt(n),i=ap(r,e),l=await new fp(r,i,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=10*60*1e3;class Ep{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!nc(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Oe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vp&&this.cachedEventUids.clear(),this.cachedEventUids.has(pa(e))}saveEventToCache(e){this.cachedEventUids.add(pa(e)),this.lastProcessedEventTime=Date.now()}}function pa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function nc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(n,e={}){return Ct(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ap=/^https?/;async function Rp(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ip(n);for(const t of e)try{if(Pp(t))return}catch{}Ge(n,"unauthorized-domain")}function Pp(n){const e=qi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!Ap.test(t))return!1;if(wp.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=new Ln(3e4,6e4);function ga(){const n=Ve().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sp(n){return new Promise((e,t)=>{var r,i,o;function l(){ga(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ga(),t(Oe(n,"network-request-failed"))},timeout:bp.get()})}if(!((i=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Ve().gapi)===null||o===void 0)&&o.load)l();else{const u=Pf("iframefcb");return Ve()[u]=()=>{gapi.load?l():t(Oe(n,"network-request-failed"))},jl(`${Rf()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw Er=null,e})}let Er=null;function Cp(n){return Er=Er||Sp(n),Er}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=new Ln(5e3,15e3),Dp="__/auth/iframe",Np="emulator/auth/iframe",Op={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mp(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ds(e,Np):`https://${n.config.authDomain}/${Dp}`,r={apiKey:e.apiKey,appName:n.name,v:Qt},i=Vp.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Mn(r).slice(1)}`}async function Lp(n){const e=await Cp(n),t=Ve().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:Mp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Op,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const l=Oe(n,"network-request-failed"),u=Ve().setTimeout(()=>{o(l)},kp.get());function h(){Ve().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Up=500,Fp=600,Bp="_blank",jp="http://localhost";class ma{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $p(n,e,t,r=Up,i=Fp){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},xp),{width:r.toString(),height:i.toString(),top:o,left:l}),f=_e().toLowerCase();t&&(u=Vl(f)?Bp:t),Nl(f)&&(e=e||jp,h.scrollbars="yes");const v=Object.entries(h).reduce((P,[C,k])=>`${P}${C}=${k},`,"");if(mf(f)&&u!=="_self")return Hp(e||"",u),new ma(null);const w=window.open(e||"",u,v);O(w,n,"popup-blocked");try{w.focus()}catch{}return new ma(w)}function Hp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="__/auth/handler",qp="emulator/auth/handler",Gp=encodeURIComponent("fac");async function _a(n,e,t,r,i,o){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Qt,eventId:i};if(e instanceof ql){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",Mh(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,w]of Object.entries({}))l[v]=w}if(e instanceof Un){const v=e.getScopes().filter(w=>w!=="");v.length>0&&(l.scopes=v.join(","))}n.tenantId&&(l.tid=n.tenantId);const u=l;for(const v of Object.keys(u))u[v]===void 0&&delete u[v];const h=await n._getAppCheckToken(),f=h?`#${Gp}=${encodeURIComponent(h)}`:"";return`${Wp(n)}?${Mn(u).slice(1)}${f}`}function Wp({config:n}){return n.emulator?ds(n,qp):`https://${n.authDomain}/${zp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="webStorageSupport";class Kp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xl,this._completeRedirectFn=yp,this._overrideRedirectResult=gp}async _openPopup(e,t,r,i){var o;We((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await _a(e,t,r,qi(),i);return $p(e,l,gs())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await _a(e,t,r,qi(),i);return Jf(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(We(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Lp(e),r=new Ep(e);return t.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Li,{type:Li},i=>{var o;const l=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Li];l!==void 0&&t(!!l),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Rp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fl()||Ol()||ps()}}const Qp=Kp;var ya="@firebase/auth",va="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yp(n){Ht(new It("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;O(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:l,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bl(n)},f=new If(r,i,o,h);return Of(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ht(new It("auth-internal",e=>{const t=Xt(e.getProvider("auth").getImmediate());return(r=>new Xp(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(ya,va,Jp(n)),ot(ya,va,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=5*60,eg=ml("authIdTokenMaxAge")||Zp;let Ea=null;const tg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>eg)return;const i=t==null?void 0:t.token;Ea!==i&&(Ea=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ng(n=El()){const e=cs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Nf(n,{popupRedirectResolver:Qp,persistence:[op,Kf,Xl]}),r=ml("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=tg(o.toString());qf(t,l,()=>l(t.currentUser)),zf(t,u=>l(u))}}const i=pl("auth");return i&&Vf(t,`http://${i}`),t}function rg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}wf({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Oe("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",rg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yp("Browser");var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _s;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,p){function m(){}m.prototype=p.prototype,y.D=p.prototype,y.prototype=new m,y.prototype.constructor=y,y.C=function(_,E,I){for(var g=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)g[Ae-2]=arguments[Ae];return p.prototype[E].apply(_,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,p,m){m||(m=0);var _=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)_[E]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(E=0;16>E;++E)_[E]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=y.g[0],m=y.g[1],E=y.g[2];var I=y.g[3],g=p+(I^m&(E^I))+_[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+_[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+_[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+_[3]+3250441966&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+_[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+_[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+_[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+_[7]+4249261313&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+_[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+_[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+_[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+_[11]+2304563134&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+_[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+_[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+_[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+_[15]+1236535329&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(E^I&(m^E))+_[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+_[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+_[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+_[0]+3921069994&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+_[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+_[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+_[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+_[4]+3889429448&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+_[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+_[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+_[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+_[8]+1163531501&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+_[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+_[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+_[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+_[12]+2368359562&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(m^E^I)+_[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+_[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+_[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+_[14]+4259657740&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+_[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+_[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+_[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+_[10]+3200236656&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+_[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+_[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+_[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+_[6]+76029189&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+_[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+_[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+_[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+_[2]+3299628645&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(E^(m|~I))+_[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+_[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+_[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+_[5]+4237533241&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+_[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+_[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+_[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+_[1]+2240044497&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+_[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+_[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+_[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+_[13]+1309151649&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+_[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+_[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+_[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+_[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,y.g[2]=y.g[2]+E&4294967295,y.g[3]=y.g[3]+I&4294967295}r.prototype.u=function(y,p){p===void 0&&(p=y.length);for(var m=p-this.blockSize,_=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=m;)i(this,y,I),I+=this.blockSize;if(typeof y=="string"){for(;I<p;)if(_[E++]=y.charCodeAt(I++),E==this.blockSize){i(this,_),E=0;break}}else for(;I<p;)if(_[E++]=y[I++],E==this.blockSize){i(this,_),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;var m=8*this.o;for(p=y.length-8;p<y.length;++p)y[p]=m&255,m/=256;for(this.u(y),y=Array(16),p=m=0;4>p;++p)for(var _=0;32>_;_+=8)y[m++]=this.g[p]>>>_&255;return y};function o(y,p){var m=u;return Object.prototype.hasOwnProperty.call(m,y)?m[y]:m[y]=p(y)}function l(y,p){this.h=p;for(var m=[],_=!0,E=y.length-1;0<=E;E--){var I=y[E]|0;_&&I==p||(m[E]=I,_=!1)}this.g=m}var u={};function h(y){return-128<=y&&128>y?o(y,function(p){return new l([p|0],0>p?-1:0)}):new l([y|0],0>y?-1:0)}function f(y){if(isNaN(y)||!isFinite(y))return w;if(0>y)return N(f(-y));for(var p=[],m=1,_=0;y>=m;_++)p[_]=y/m|0,m*=4294967296;return new l(p,0)}function v(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return N(v(y.substring(1),p));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),_=w,E=0;E<y.length;E+=8){var I=Math.min(8,y.length-E),g=parseInt(y.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),_=_.j(I).add(f(g))):(_=_.j(m),_=_.add(f(g)))}return _}var w=h(0),P=h(1),C=h(16777216);n=l.prototype,n.m=function(){if(M(this))return-N(this).m();for(var y=0,p=1,m=0;m<this.g.length;m++){var _=this.i(m);y+=(0<=_?_:4294967296+_)*p,p*=4294967296}return y},n.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(k(this))return"0";if(M(this))return"-"+N(this).toString(y);for(var p=f(Math.pow(y,6)),m=this,_="";;){var E=Z(m,p).g;m=z(m,E.j(p));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(y);if(m=E,k(m))return I+_;for(;6>I.length;)I="0"+I;_=I+_}},n.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function k(y){if(y.h!=0)return!1;for(var p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function M(y){return y.h==-1}n.l=function(y){return y=z(this,y),M(y)?-1:k(y)?0:1};function N(y){for(var p=y.g.length,m=[],_=0;_<p;_++)m[_]=~y.g[_];return new l(m,~y.h).add(P)}n.abs=function(){return M(this)?N(this):this},n.add=function(y){for(var p=Math.max(this.g.length,y.g.length),m=[],_=0,E=0;E<=p;E++){var I=_+(this.i(E)&65535)+(y.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(y.i(E)>>>16);_=g>>>16,I&=65535,g&=65535,m[E]=g<<16|I}return new l(m,m[m.length-1]&-2147483648?-1:0)};function z(y,p){return y.add(N(p))}n.j=function(y){if(k(this)||k(y))return w;if(M(this))return M(y)?N(this).j(N(y)):N(N(this).j(y));if(M(y))return N(this.j(N(y)));if(0>this.l(C)&&0>y.l(C))return f(this.m()*y.m());for(var p=this.g.length+y.g.length,m=[],_=0;_<2*p;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var E=0;E<y.g.length;E++){var I=this.i(_)>>>16,g=this.i(_)&65535,Ae=y.i(E)>>>16,Zt=y.i(E)&65535;m[2*_+2*E]+=g*Zt,H(m,2*_+2*E),m[2*_+2*E+1]+=I*Zt,H(m,2*_+2*E+1),m[2*_+2*E+1]+=g*Ae,H(m,2*_+2*E+1),m[2*_+2*E+2]+=I*Ae,H(m,2*_+2*E+2)}for(_=0;_<p;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=p;_<2*p;_++)m[_]=0;return new l(m,0)};function H(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function q(y,p){this.g=y,this.h=p}function Z(y,p){if(k(p))throw Error("division by zero");if(k(y))return new q(w,w);if(M(y))return p=Z(N(y),p),new q(N(p.g),N(p.h));if(M(p))return p=Z(y,N(p)),new q(N(p.g),p.h);if(30<y.g.length){if(M(y)||M(p))throw Error("slowDivide_ only works with positive integers.");for(var m=P,_=p;0>=_.l(y);)m=G(m),_=G(_);var E=$(m,1),I=$(_,1);for(_=$(_,2),m=$(m,2);!k(_);){var g=I.add(_);0>=g.l(y)&&(E=E.add(m),I=g),_=$(_,1),m=$(m,1)}return p=z(y,E.j(p)),new q(E,p)}for(E=w;0<=y.l(p);){for(m=Math.max(1,Math.floor(y.m()/p.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),I=f(m),g=I.j(p);M(g)||0<g.l(y);)m-=_,I=f(m),g=I.j(p);k(I)&&(I=P),E=E.add(I),y=z(y,g)}return new q(E,y)}n.A=function(y){return Z(this,y).h},n.and=function(y){for(var p=Math.max(this.g.length,y.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)&y.i(_);return new l(m,this.h&y.h)},n.or=function(y){for(var p=Math.max(this.g.length,y.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)|y.i(_);return new l(m,this.h|y.h)},n.xor=function(y){for(var p=Math.max(this.g.length,y.g.length),m=[],_=0;_<p;_++)m[_]=this.i(_)^y.i(_);return new l(m,this.h^y.h)};function G(y){for(var p=y.g.length+1,m=[],_=0;_<p;_++)m[_]=y.i(_)<<1|y.i(_-1)>>>31;return new l(m,y.h)}function $(y,p){var m=p>>5;p%=32;for(var _=y.g.length-m,E=[],I=0;I<_;I++)E[I]=0<p?y.i(I+m)>>>p|y.i(I+m+1)<<32-p:y.i(I+m);return new l(E,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=v,_s=l}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rc,En,ic,Tr,Ki,sc,oc,ac;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof dr=="object"&&dr];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=t(this);function i(s,a){if(a)e:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var T=s[d];if(!(T in c))break e;c=c[T]}s=s[s.length-1],d=c[s],a=a(d),a!=d&&a!=null&&e(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,d=!1,T={next:function(){if(!d&&c<s.length){var A=c++;return{value:a(A,s[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function v(s,a,c){return s.call.apply(s.bind,arguments)}function w(s,a,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function P(s,a,c){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:w,P.apply(null,arguments)}function C(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function k(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,T,A){for(var S=Array(arguments.length-2),W=2;W<arguments.length;W++)S[W-2]=arguments[W];return a.prototype[T].apply(d,S)}}function M(s){const a=s.length;if(0<a){const c=Array(a);for(let d=0;d<a;d++)c[d]=s[d];return c}return[]}function N(s,a){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const T=s.length||0,A=d.length||0;s.length=T+A;for(let S=0;S<A;S++)s[T+S]=d[S]}else s.push(d)}}class z{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(s){return/^[\s\xa0]*$/.test(s)}function q(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function Z(s){return Z[" "](s),s}Z[" "]=function(){};var G=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function $(s,a,c){for(const d in s)a.call(c,s[d],d,s)}function y(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function p(s){const a={};for(const c in s)a[c]=s[c];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(s,a){let c,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(c in d)s[c]=d[c];for(let A=0;A<m.length;A++)c=m[A],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function E(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function I(s){u.setTimeout(()=>{throw s},0)}function g(){var s=ii;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Ae{constructor(){this.h=this.g=null}add(a,c){const d=Zt.get();d.set(a,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Zt=new z(()=>new hu,s=>s.reset());class hu{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let en,tn=!1,ii=new Ae,Fs=()=>{const s=u.Promise.resolve(void 0);en=()=>{s.then(du)}};var du=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){I(c)}var a=Zt;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}tn=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var fu=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return s}();function nn(s,a){if(ue.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(G){e:{try{Z(a.nodeName);var T=!0;break e}catch{}T=!1}T||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:pu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&nn.aa.h.call(this)}}k(nn,ue);var pu={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var qn="closure_listenable_"+(1e6*Math.random()|0),gu=0;function mu(s,a,c,d,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!d,this.ha=T,this.key=++gu,this.da=this.fa=!1}function Gn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Wn(s){this.src=s,this.g={},this.h=0}Wn.prototype.add=function(s,a,c,d,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var S=oi(s,a,d,T);return-1<S?(a=s[S],c||(a.fa=!1)):(a=new mu(a,this.src,A,!!d,T),a.fa=c,s.push(a)),a};function si(s,a){var c=a.type;if(c in s.g){var d=s.g[c],T=Array.prototype.indexOf.call(d,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(d,T,1),A&&(Gn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function oi(s,a,c,d){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==a&&A.capture==!!c&&A.ha==d)return T}return-1}var ai="closure_lm_"+(1e6*Math.random()|0),li={};function Bs(s,a,c,d,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Bs(s,a[A],c,d,T);return null}return c=Hs(c),s&&s[qn]?s.K(a,c,f(d)?!!d.capture:!1,T):_u(s,a,c,!1,d,T)}function _u(s,a,c,d,T,A){if(!a)throw Error("Invalid event type");var S=f(T)?!!T.capture:!!T,W=ui(s);if(W||(s[ai]=W=new Wn(s)),c=W.add(a,c,d,S,A),c.proxy)return c;if(d=yu(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)fu||(T=S),T===void 0&&(T=!1),s.addEventListener(a.toString(),d,T);else if(s.attachEvent)s.attachEvent($s(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function yu(){function s(c){return a.call(s.src,s.listener,c)}const a=vu;return s}function js(s,a,c,d,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)js(s,a[A],c,d,T);else d=f(d)?!!d.capture:!!d,c=Hs(c),s&&s[qn]?(s=s.i,a=String(a).toString(),a in s.g&&(A=s.g[a],c=oi(A,c,d,T),-1<c&&(Gn(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete s.g[a],s.h--)))):s&&(s=ui(s))&&(a=s.g[a.toString()],s=-1,a&&(s=oi(a,c,d,T)),(c=-1<s?a[s]:null)&&ci(c))}function ci(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[qn])si(a.i,s);else{var c=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(c,d,s.capture):a.detachEvent?a.detachEvent($s(c),d):a.addListener&&a.removeListener&&a.removeListener(d),(c=ui(a))?(si(c,s),c.h==0&&(c.src=null,a[ai]=null)):Gn(s)}}}function $s(s){return s in li?li[s]:li[s]="on"+s}function vu(s,a){if(s.da)s=!0;else{a=new nn(a,this);var c=s.listener,d=s.ha||s.src;s.fa&&ci(s),s=c.call(d,a)}return s}function ui(s){return s=s[ai],s instanceof Wn?s:null}var hi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hs(s){return typeof s=="function"?s:(s[hi]||(s[hi]=function(a){return s.handleEvent(a)}),s[hi])}function he(){Qe.call(this),this.i=new Wn(this),this.M=this,this.F=null}k(he,Qe),he.prototype[qn]=!0,he.prototype.removeEventListener=function(s,a,c,d){js(this,s,a,c,d)};function ye(s,a){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new ue(a,s);else if(a instanceof ue)a.target=a.target||s;else{var T=a;a=new ue(d,s),_(a,T)}if(T=!0,c)for(var A=c.length-1;0<=A;A--){var S=a.g=c[A];T=Kn(S,d,!0,a)&&T}if(S=a.g=s,T=Kn(S,d,!0,a)&&T,T=Kn(S,d,!1,a)&&T,c)for(A=0;A<c.length;A++)S=a.g=c[A],T=Kn(S,d,!1,a)&&T}he.prototype.N=function(){if(he.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],d=0;d<c.length;d++)Gn(c[d]);delete s.g[a],s.h--}}this.F=null},he.prototype.K=function(s,a,c,d){return this.i.add(String(s),a,!1,c,d)},he.prototype.L=function(s,a,c,d){return this.i.add(String(s),a,!0,c,d)};function Kn(s,a,c,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var S=a[A];if(S&&!S.da&&S.capture==c){var W=S.listener,se=S.ha||S.src;S.fa&&si(s.i,S),T=W.call(se,d)!==!1&&T}}return T&&!d.defaultPrevented}function zs(s,a,c){if(typeof s=="function")c&&(s=P(s,c));else if(s&&typeof s.handleEvent=="function")s=P(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(s,a||0)}function qs(s){s.g=zs(()=>{s.g=null,s.i&&(s.i=!1,qs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Eu extends Qe{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:qs(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rn(s){Qe.call(this),this.h=s,this.g={}}k(rn,Qe);var Gs=[];function Ws(s){$(s.g,function(a,c){this.g.hasOwnProperty(c)&&ci(a)},s),s.g={}}rn.prototype.N=function(){rn.aa.N.call(this),Ws(this)},rn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var di=u.JSON.stringify,Tu=u.JSON.parse,Iu=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function fi(){}fi.prototype.h=null;function Ks(s){return s.h||(s.h=s.i())}function Qs(){}var sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pi(){ue.call(this,"d")}k(pi,ue);function gi(){ue.call(this,"c")}k(gi,ue);var dt={},Xs=null;function Qn(){return Xs=Xs||new he}dt.La="serverreachability";function Js(s){ue.call(this,dt.La,s)}k(Js,ue);function on(s){const a=Qn();ye(a,new Js(a))}dt.STAT_EVENT="statevent";function Ys(s,a){ue.call(this,dt.STAT_EVENT,s),this.stat=a}k(Ys,ue);function ve(s){const a=Qn();ye(a,new Ys(a,s))}dt.Ma="timingevent";function Zs(s,a){ue.call(this,dt.Ma,s),this.size=a}k(Zs,ue);function an(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function ln(){this.g=!0}ln.prototype.xa=function(){this.g=!1};function wu(s,a,c,d,T,A){s.info(function(){if(s.g)if(A)for(var S="",W=A.split("&"),se=0;se<W.length;se++){var j=W[se].split("=");if(1<j.length){var de=j[0];j=j[1];var fe=de.split("_");S=2<=fe.length&&fe[1]=="type"?S+(de+"="+j+"&"):S+(de+"=redacted&")}}else S=null;else S=A;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+a+`
`+c+`
`+S})}function Au(s,a,c,d,T,A,S){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+a+`
`+c+`
`+A+" "+S})}function Nt(s,a,c,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Pu(s,c)+(d?" "+d:"")})}function Ru(s,a){s.info(function(){return"TIMEOUT: "+a})}ln.prototype.info=function(){};function Pu(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var S=1;S<T.length;S++)T[S]=""}}}}return di(c)}catch{return a}}var Xn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mi;function Jn(){}k(Jn,fi),Jn.prototype.g=function(){return new XMLHttpRequest},Jn.prototype.i=function(){return{}},mi=new Jn;function Xe(s,a,c,d){this.j=s,this.i=a,this.l=c,this.R=d||1,this.U=new rn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new to}function to(){this.i=null,this.g="",this.h=!1}var no={},_i={};function yi(s,a,c){s.L=1,s.v=tr(Ue(a)),s.m=c,s.P=!0,ro(s,null)}function ro(s,a){s.F=Date.now(),Yn(s),s.A=Ue(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),yo(c.i,"t",d),s.C=0,c=s.j.J,s.h=new to,s.g=Lo(s.j,c?a:null,!s.m),0<s.O&&(s.M=new Eu(P(s.Y,s,s.g),s.O)),a=s.U,c=s.g,d=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(Gs[0]=T.toString()),T=Gs);for(var A=0;A<T.length;A++){var S=Bs(c,T[A],d||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),on(),wu(s.i,s.u,s.A,s.l,s.R,s.m)}Xe.prototype.ca=function(s){s=s.target;const a=this.M;a&&Fe(s)==3?a.j():this.Y(s)},Xe.prototype.Y=function(s){try{if(s==this.g)e:{const fe=Fe(this.g);var a=this.g.Ba();const Mt=this.g.Z();if(!(3>fe)&&(fe!=3||this.g&&(this.h.h||this.g.oa()||Ro(this.g)))){this.J||fe!=4||a==7||(a==8||0>=Mt?on(3):on(2)),vi(this);var c=this.g.Z();this.X=c;t:if(io(this)){var d=Ro(this.g);s="";var T=d.length,A=Fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ft(this),cn(this);var S="";break t}this.h.i=new u.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(A&&a==T-1)});d.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=c==200,Au(this.i,this.u,this.A,this.l,this.R,fe,c),this.o){if(this.T&&!this.K){t:{if(this.g){var W,se=this.g;if((W=se.g?se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(W)){var j=W;break t}}j=null}if(c=j)Nt(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ei(this,c);else{this.o=!1,this.s=3,ve(12),ft(this),cn(this);break e}}if(this.P){c=!0;let Re;for(;!this.J&&this.C<S.length;)if(Re=bu(this,S),Re==_i){fe==4&&(this.s=4,ve(14),c=!1),Nt(this.i,this.l,null,"[Incomplete Response]");break}else if(Re==no){this.s=4,ve(15),Nt(this.i,this.l,S,"[Invalid Chunk]"),c=!1;break}else Nt(this.i,this.l,Re,null),Ei(this,Re);if(io(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||S.length!=0||this.h.h||(this.s=1,ve(16),c=!1),this.o=this.o&&c,!c)Nt(this.i,this.l,S,"[Invalid Chunked Response]"),ft(this),cn(this);else if(0<S.length&&!this.W){this.W=!0;var de=this.j;de.g==this&&de.ba&&!de.M&&(de.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Pi(de),de.M=!0,ve(11))}}else Nt(this.i,this.l,S,null),Ei(this,S);fe==4&&ft(this),this.o&&!this.J&&(fe==4?No(this.j,this):(this.o=!1,Yn(this)))}else zu(this.g),c==400&&0<S.indexOf("Unknown SID")?(this.s=3,ve(12)):(this.s=0,ve(13)),ft(this),cn(this)}}}catch{}finally{}};function io(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function bu(s,a){var c=s.C,d=a.indexOf(`
`,c);return d==-1?_i:(c=Number(a.substring(c,d)),isNaN(c)?no:(d+=1,d+c>a.length?_i:(a=a.slice(d,d+c),s.C=d+c,a)))}Xe.prototype.cancel=function(){this.J=!0,ft(this)};function Yn(s){s.S=Date.now()+s.I,so(s,s.I)}function so(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=an(P(s.ba,s),a)}function vi(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Xe.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Ru(this.i,this.A),this.L!=2&&(on(),ve(17)),ft(this),this.s=2,cn(this)):so(this,this.S-s)};function cn(s){s.j.G==0||s.J||No(s.j,s)}function ft(s){vi(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ws(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Ei(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||Ti(c.h,s))){if(!s.K&&Ti(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)ar(c),sr(c);else break e;Ri(c),ve(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=an(P(c.Za,c),6e3));if(1>=lo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else gt(c,11)}else if((s.K||c.g==s)&&ar(c),!H(a))for(T=c.Da.g.parse(a),a=0;a<T.length;a++){let j=T[a];if(c.T=j[0],j=j[1],c.G==2)if(j[0]=="c"){c.K=j[1],c.ia=j[2];const de=j[3];de!=null&&(c.la=de,c.j.info("VER="+c.la));const fe=j[4];fe!=null&&(c.Aa=fe,c.j.info("SVER="+c.Aa));const Mt=j[5];Mt!=null&&typeof Mt=="number"&&0<Mt&&(d=1.5*Mt,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Re=s.g;if(Re){const cr=Re.g?Re.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cr){var A=d.h;A.g||cr.indexOf("spdy")==-1&&cr.indexOf("quic")==-1&&cr.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Ii(A,A.h),A.h=null))}if(d.D){const bi=Re.g?Re.g.getResponseHeader("X-HTTP-Session-Id"):null;bi&&(d.ya=bi,Q(d.I,d.D,bi))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var S=s;if(d.qa=Mo(d,d.J?d.ia:null,d.W),S.K){co(d.h,S);var W=S,se=d.L;se&&(W.I=se),W.B&&(vi(W),Yn(W)),d.g=S}else ko(d);0<c.i.length&&or(c)}else j[0]!="stop"&&j[0]!="close"||gt(c,7);else c.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?gt(c,7):Ai(c):j[0]!="noop"&&c.l&&c.l.ta(j),c.v=0)}}on(4)}catch{}}var Su=class{constructor(s,a){this.g=s,this.map=a}};function oo(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ao(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function lo(s){return s.h?1:s.g?s.g.size:0}function Ti(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Ii(s,a){s.g?s.g.add(a):s.h=a}function co(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}oo.prototype.cancel=function(){if(this.i=uo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function uo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return M(s.i)}function Cu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],c=s.length,d=0;d<c;d++)a.push(s[d]);return a}a=[],c=0;for(d in s)a[c++]=s[d];return a}function ku(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const d in s)a[c++]=d;return a}}}function ho(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=ku(s),d=Cu(s),T=d.length,A=0;A<T;A++)a.call(void 0,d[A],c&&c[A],s)}var fo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Du(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),T=null;if(0<=d){var A=s[c].substring(0,d);T=s[c].substring(d+1)}else A=s[c];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function pt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof pt){this.h=s.h,Zn(this,s.j),this.o=s.o,this.g=s.g,er(this,s.s),this.l=s.l;var a=s.i,c=new dn;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),po(this,c),this.m=s.m}else s&&(a=String(s).match(fo))?(this.h=!1,Zn(this,a[1]||"",!0),this.o=un(a[2]||""),this.g=un(a[3]||"",!0),er(this,a[4]),this.l=un(a[5]||"",!0),po(this,a[6]||"",!0),this.m=un(a[7]||"")):(this.h=!1,this.i=new dn(null,this.h))}pt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(hn(a,go,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(hn(a,go,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(hn(c,c.charAt(0)=="/"?Vu:Ou,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",hn(c,Lu)),s.join("")};function Ue(s){return new pt(s)}function Zn(s,a,c){s.j=c?un(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function er(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function po(s,a,c){a instanceof dn?(s.i=a,xu(s.i,s.h)):(c||(a=hn(a,Mu)),s.i=new dn(a,s.h))}function Q(s,a,c){s.i.set(a,c)}function tr(s){return Q(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function un(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function hn(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Nu),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Nu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var go=/[#\/\?@]/g,Ou=/[#\?:]/g,Vu=/[#\?]/g,Mu=/[#\?@]/g,Lu=/#/g;function dn(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Je(s){s.g||(s.g=new Map,s.h=0,s.i&&Du(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=dn.prototype,n.add=function(s,a){Je(this),this.i=null,s=Ot(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function mo(s,a){Je(s),a=Ot(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function _o(s,a){return Je(s),a=Ot(s,a),s.g.has(a)}n.forEach=function(s,a){Je(this),this.g.forEach(function(c,d){c.forEach(function(T){s.call(a,T,d,this)},this)},this)},n.na=function(){Je(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let d=0;d<a.length;d++){const T=s[d];for(let A=0;A<T.length;A++)c.push(a[d])}return c},n.V=function(s){Je(this);let a=[];if(typeof s=="string")_o(this,s)&&(a=a.concat(this.g.get(Ot(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},n.set=function(s,a){return Je(this),this.i=null,s=Ot(this,s),_o(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function yo(s,a,c){mo(s,a),0<c.length&&(s.i=null,s.g.set(Ot(s,a),M(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var d=a[c];const A=encodeURIComponent(String(d)),S=this.V(d);for(d=0;d<S.length;d++){var T=A;S[d]!==""&&(T+="="+encodeURIComponent(String(S[d]))),s.push(T)}}return this.i=s.join("&")};function Ot(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function xu(s,a){a&&!s.j&&(Je(s),s.i=null,s.g.forEach(function(c,d){var T=d.toLowerCase();d!=T&&(mo(this,d),yo(this,T,c))},s)),s.j=a}function Uu(s,a){const c=new ln;if(u.Image){const d=new Image;d.onload=C(Ye,c,"TestLoadImage: loaded",!0,a,d),d.onerror=C(Ye,c,"TestLoadImage: error",!1,a,d),d.onabort=C(Ye,c,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(Ye,c,"TestLoadImage: timeout",!1,a,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Fu(s,a){const c=new ln,d=new AbortController,T=setTimeout(()=>{d.abort(),Ye(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(A=>{clearTimeout(T),A.ok?Ye(c,"TestPingServer: ok",!0,a):Ye(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ye(c,"TestPingServer: error",!1,a)})}function Ye(s,a,c,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(c)}catch{}}function Bu(){this.g=new Iu}function ju(s,a,c){const d=c||"";try{ho(s,function(T,A){let S=T;f(T)&&(S=di(T)),a.push(d+A+"="+encodeURIComponent(S))})}catch(T){throw a.push(d+"type="+encodeURIComponent("_badmap")),T}}function nr(s){this.l=s.Ub||null,this.j=s.eb||!1}k(nr,fi),nr.prototype.g=function(){return new rr(this.l,this.j)},nr.prototype.i=function(s){return function(){return s}}({});function rr(s,a){he.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(rr,he),n=rr.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,pn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,pn(this)),this.g&&(this.readyState=3,pn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function vo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?fn(this):pn(this),this.readyState==3&&vo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,fn(this))},n.Qa=function(s){this.g&&(this.response=s,fn(this))},n.ga=function(){this.g&&fn(this)};function fn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,pn(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function pn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Eo(s){let a="";return $(s,function(c,d){a+=d,a+=":",a+=c,a+=`\r
`}),a}function wi(s,a,c){e:{for(d in c){var d=!1;break e}d=!0}d||(c=Eo(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):Q(s,a,c))}function J(s){he.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(J,he);var $u=/^https?$/i,Hu=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mi.g(),this.v=this.o?Ks(this.o):Ks(mi),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){To(this,A);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)c.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())c.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),T=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Hu,a,void 0))||d||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,S]of c)this.g.setRequestHeader(A,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ao(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){To(this,A)}};function To(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Io(s),ir(s)}function Io(s){s.A||(s.A=!0,ye(s,"complete"),ye(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,ye(this,"complete"),ye(this,"abort"),ir(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ir(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?wo(this):this.bb())},n.bb=function(){wo(this)};function wo(s){if(s.h&&typeof l<"u"&&(!s.v[1]||Fe(s)!=4||s.Z()!=2)){if(s.u&&Fe(s)==4)zs(s.Ea,0,s);else if(ye(s,"readystatechange"),Fe(s)==4){s.h=!1;try{const S=s.Z();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var c;if(!(c=a)){var d;if(d=S===0){var T=String(s.D).match(fo)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),d=!$u.test(T?T.toLowerCase():"")}c=d}if(c)ye(s,"complete"),ye(s,"success");else{s.m=6;try{var A=2<Fe(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",Io(s)}}finally{ir(s)}}}}function ir(s,a){if(s.g){Ao(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||ye(s,"ready");try{c.onreadystatechange=d}catch{}}}function Ao(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Fe(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Fe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Tu(a)}};function Ro(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function zu(s){const a={};s=(s.g&&2<=Fe(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(H(s[d]))continue;var c=E(s[d]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=a[T]||[];a[T]=A,A.push(c)}y(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gn(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Po(s){this.Aa=0,this.i=[],this.j=new ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gn("baseRetryDelayMs",5e3,s),this.cb=gn("retryDelaySeedMs",1e4,s),this.Wa=gn("forwardChannelMaxRetries",2,s),this.wa=gn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new oo(s&&s.concurrentRequestLimit),this.Da=new Bu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Po.prototype,n.la=8,n.G=1,n.connect=function(s,a,c,d){ve(0),this.W=s,this.H=a||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Mo(this,null,this.W),or(this)};function Ai(s){if(bo(s),s.G==3){var a=s.U++,c=Ue(s.I);if(Q(c,"SID",s.K),Q(c,"RID",a),Q(c,"TYPE","terminate"),mn(s,c),a=new Xe(s,s.j,a),a.L=2,a.v=tr(Ue(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=Lo(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Yn(a)}Vo(s)}function sr(s){s.g&&(Pi(s),s.g.cancel(),s.g=null)}function bo(s){sr(s),s.u&&(u.clearTimeout(s.u),s.u=null),ar(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function or(s){if(!ao(s.h)&&!s.s){s.s=!0;var a=s.Ga;en||Fs(),tn||(en(),tn=!0),ii.add(a,s),s.B=0}}function qu(s,a){return lo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=an(P(s.Ga,s,a),Oo(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Xe(this,this.j,s);let A=this.o;if(this.S&&(A?(A=p(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)e:{for(var a=0,c=0;c<this.i.length;c++){t:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=c;break e}if(a===4096||c===this.i.length-1){a=c+1;break e}}a=1e3}else a=1e3;a=Co(this,T,a),c=Ue(this.I),Q(c,"RID",s),Q(c,"CVER",22),this.D&&Q(c,"X-HTTP-Session-Id",this.D),mn(this,c),A&&(this.O?a="headers="+encodeURIComponent(String(Eo(A)))+"&"+a:this.m&&wi(c,this.m,A)),Ii(this.h,T),this.Ua&&Q(c,"TYPE","init"),this.P?(Q(c,"$req",a),Q(c,"SID","null"),T.T=!0,yi(T,c,null)):yi(T,c,a),this.G=2}}else this.G==3&&(s?So(this,s):this.i.length==0||ao(this.h)||So(this))};function So(s,a){var c;a?c=a.l:c=s.U++;const d=Ue(s.I);Q(d,"SID",s.K),Q(d,"RID",c),Q(d,"AID",s.T),mn(s,d),s.m&&s.o&&wi(d,s.m,s.o),c=new Xe(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Co(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ii(s.h,c),yi(c,d,a)}function mn(s,a){s.H&&$(s.H,function(c,d){Q(a,d,c)}),s.l&&ho({},function(c,d){Q(a,d,c)})}function Co(s,a,c){c=Math.min(s.i.length,c);var d=s.l?P(s.l.Na,s.l,s):null;e:{var T=s.i;let A=-1;for(;;){const S=["count="+c];A==-1?0<c?(A=T[0].g,S.push("ofs="+A)):A=0:S.push("ofs="+A);let W=!0;for(let se=0;se<c;se++){let j=T[se].g;const de=T[se].map;if(j-=A,0>j)A=Math.max(0,T[se].g-100),W=!1;else try{ju(de,S,"req"+j+"_")}catch{d&&d(de)}}if(W){d=S.join("&");break e}}}return s=s.i.splice(0,c),a.D=s,d}function ko(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;en||Fs(),tn||(en(),tn=!0),ii.add(a,s),s.v=0}}function Ri(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=an(P(s.Fa,s),Oo(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Do(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=an(P(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ve(10),sr(this),Do(this))};function Pi(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Do(s){s.g=new Xe(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Ue(s.qa);Q(a,"RID","rpc"),Q(a,"SID",s.K),Q(a,"AID",s.T),Q(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Q(a,"TO",s.ja),Q(a,"TYPE","xmlhttp"),mn(s,a),s.m&&s.o&&wi(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=tr(Ue(a)),c.m=null,c.P=!0,ro(c,s)}n.Za=function(){this.C!=null&&(this.C=null,sr(this),Ri(this),ve(19))};function ar(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function No(s,a){var c=null;if(s.g==a){ar(s),Pi(s),s.g=null;var d=2}else if(Ti(s.h,a))c=a.D,co(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;d=Qn(),ye(d,new Zs(d,c)),or(s)}else ko(s);else if(T=a.s,T==3||T==0&&0<a.X||!(d==1&&qu(s,a)||d==2&&Ri(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),T){case 1:gt(s,5);break;case 4:gt(s,10);break;case 3:gt(s,6);break;default:gt(s,2)}}}function Oo(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function gt(s,a){if(s.j.info("Error code "+a),a==2){var c=P(s.fb,s),d=s.Xa;const T=!d;d=new pt(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Zn(d,"https"),tr(d),T?Uu(d.toString(),c):Fu(d.toString(),c)}else ve(2);s.G=0,s.l&&s.l.sa(a),Vo(s),bo(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Vo(s){if(s.G=0,s.ka=[],s.l){const a=uo(s.h);(a.length!=0||s.i.length!=0)&&(N(s.ka,a),N(s.ka,s.i),s.h.i.length=0,M(s.i),s.i.length=0),s.l.ra()}}function Mo(s,a,c){var d=c instanceof pt?Ue(c):new pt(c);if(d.g!="")a&&(d.g=a+"."+d.g),er(d,d.s);else{var T=u.location;d=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new pt(null);d&&Zn(A,d),a&&(A.g=a),T&&er(A,T),c&&(A.l=c),d=A}return c=s.D,a=s.ya,c&&a&&Q(d,c,a),Q(d,"VER",s.la),mn(s,d),d}function Lo(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new nr({eb:c})):new J(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xo(){}n=xo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function lr(){}lr.prototype.g=function(s,a){return new Ie(s,a)};function Ie(s,a){he.call(this),this.g=new Po(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!H(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Vt(this)}k(Ie,he),Ie.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ie.prototype.close=function(){Ai(this.g)},Ie.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=di(s),s=c);a.i.push(new Su(a.Ya++,s)),a.G==3&&or(a)},Ie.prototype.N=function(){this.g.l=null,delete this.j,Ai(this.g),delete this.g,Ie.aa.N.call(this)};function Uo(s){pi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const c in a){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(Uo,pi);function Fo(){gi.call(this),this.status=1}k(Fo,gi);function Vt(s){this.g=s}k(Vt,xo),Vt.prototype.ua=function(){ye(this.g,"a")},Vt.prototype.ta=function(s){ye(this.g,new Uo(s))},Vt.prototype.sa=function(s){ye(this.g,new Fo)},Vt.prototype.ra=function(){ye(this.g,"b")},lr.prototype.createWebChannel=lr.prototype.g,Ie.prototype.send=Ie.prototype.o,Ie.prototype.open=Ie.prototype.m,Ie.prototype.close=Ie.prototype.close,ac=function(){return new lr},oc=function(){return Qn()},sc=dt,Ki={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xn.NO_ERROR=0,Xn.TIMEOUT=8,Xn.HTTP_ERROR=6,Tr=Xn,eo.COMPLETE="complete",ic=eo,Qs.EventType=sn,sn.OPEN="a",sn.CLOSE="b",sn.ERROR="c",sn.MESSAGE="d",he.prototype.listen=he.prototype.K,En=Qs,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,rc=J}).apply(typeof dr<"u"?dr:typeof self<"u"?self:typeof window<"u"?window:{});const Ia="@firebase/firestore",wa="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ge.UNAUTHENTICATED=new ge(null),ge.GOOGLE_CREDENTIALS=new ge("google-credentials-uid"),ge.FIRST_PARTY=new ge("first-party-uid"),ge.MOCK_USER=new ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new as("@firebase/firestore");function Lt(){return Rt.logLevel}function D(n,...e){if(Rt.logLevel<=U.DEBUG){const t=e.map(ys);Rt.debug(`Firestore (${Jt}): ${n}`,...t)}}function Pt(n,...e){if(Rt.logLevel<=U.ERROR){const t=e.map(ys);Rt.error(`Firestore (${Jt}): ${n}`,...t)}}function Xr(n,...e){if(Rt.logLevel<=U.WARN){const t=e.map(ys);Rt.warn(`Firestore (${Jt}): ${n}`,...t)}}function ys(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,lc(n,r,t)}function lc(n,e,t){let r=`FIRESTORE (${Jt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Pt(r),new Error(r)}function Y(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||lc(e,i,r)}function K(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Ke{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ig{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ge.UNAUTHENTICATED))}shutdown(){}}class sg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class og{constructor(e){this.t=e,this.currentUser=ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new vt,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new vt)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new cc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string",2055,{h:e}),new ge(e)}}class ag{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ge.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lg{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ag(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Aa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,be(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Y(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Aa(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Y(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Aa(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=ug(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function B(n,e){return n<e?-1:n>e?1:0}function Qi(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return B(r,i);{const o=hg(),l=dg(o.encode(Ra(n,t)),o.encode(Ra(e,t)));return l!==0?l:B(r,i)}}t+=r>65535?2:1}return B(n.length,e.length)}function Ra(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function dg(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return B(n[t],e[t]);return B(n.length,e.length)}function zt(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=-62135596800,ba=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*ba);return new ie(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pa)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ba}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Pa;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new ie(0,0))}static max(){return new X(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="__name__";class Ne{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&x(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ne.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ne?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Ne.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return B(e.length,t.length)}static compareSegments(e,t){const r=Ne.isNumericId(e),i=Ne.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ne.extractNumericId(e).compare(Ne.extractNumericId(t)):Qi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _s.fromString(e.substring(4,e.length-2))}}class te extends Ne{construct(e,t,r){return new te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new te(t)}static emptyPath(){return new te([])}}const fg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends Ne{construct(e,t,r){return new le(e,t,r)}static isValidIdentifier(e){return fg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sa}static keyField(){return new le([Sa])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new V(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new V(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(l=!l,i++):u!=="."||l?(r+=u,i++):(o(),i++)}if(o(),l)throw new V(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new le(t)}static emptyPath(){return new le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(te.fromString(e))}static fromName(e){return new L(te.fromString(e).popFirst(5))}static empty(){return new L(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new te(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=-1;function pg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new ie(t+1,0):new ie(t,r));return new lt(i,L.empty(),e)}function gg(n){return new lt(n.readTime,n.key,Sn)}class lt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new lt(X.min(),L.empty(),Sn)}static max(){return new lt(X.max(),L.empty(),Sn)}}function mg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:B(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==_g)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let i=0,o=0,l=!1;e.forEach(u=>{++i,u.next(()=>{++o,l&&o===i&&t()},h=>r(h))}),l=!0,o===i&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(i=>i?R.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new R((r,i)=>{const o=e.length,l=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;t(e[f]).next(v=>{l[f]=v,++u,u===o&&r(l)},v=>i(v))}})}static doWhile(e,t){return new R((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function vg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Bn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Es.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=-1;function Is(n){return n==null}function Or(n){return n===0&&1/n==-1/0}function Eg(n){return typeof n=="number"&&Number.isInteger(n)&&!Or(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="";function Tg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ca(e)),e=Ig(n.get(t),e);return Ca(e)}function Ig(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case hc:t+="";break;default:t+=o}}return t}function Ca(n){return n+hc+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t){this.comparator=e,this.root=t||oe.EMPTY}insert(e,t){return new Te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,oe.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,oe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fr(this.root,e,this.comparator,!1)}getReverseIterator(){return new fr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fr(this.root,e,this.comparator,!0)}}class fr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class oe{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??oe.RED,this.left=i??oe.EMPTY,this.right=o??oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new oe(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return oe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw x(27949);return e+(this.isRed()?0:1)}}oe.EMPTY=null,oe.RED=!0,oe.BLACK=!1;oe.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new oe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Da(this.data.getIterator())}getIteratorFrom(e){return new Da(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class Da{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.fields=e,e.sort(le.comparator)}static empty(){return new ke([])}unionWith(e){let t=new ce(le.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return zt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new wg("Invalid base64 string: "+o):o}}(e);return new Le(t)}static fromUint8Array(e){const t=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const Ag=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(n){if(Y(!!n,39018),typeof n=="string"){let e=0;const t=Ag.exec(n);if(Y(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qt(n){return typeof n=="string"?Le.fromBase64String(n):Le.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="server_timestamp",pc="__type__",gc="__previous_value__",mc="__local_write_time__";function ws(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[pc])===null||t===void 0?void 0:t.stringValue)===fc}function As(n){const e=n.mapValue.fields[gc];return ws(e)?As(e):e}function Vr(n){const e=bt(n.mapValue.fields[mc].timestampValue);return new ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,t,r,i,o,l,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}}const Mr="(default)";class Lr{constructor(e,t){this.projectId=e,this.database=t||Mr}static empty(){return new Lr("","")}get isDefaultDatabase(){return this.database===Mr}isEqual(e){return e instanceof Lr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="__type__",Pg="__max__",pr={mapValue:{}},yc="__vector__",Xi="value";function St(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ws(n)?4:Sg(n)?9007199254740991:bg(n)?10:11:x(28295,{value:n})}function xe(n,e){if(n===e)return!0;const t=St(n);if(t!==St(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vr(n).isEqual(Vr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=bt(i.timestampValue),u=bt(o.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return qt(i.bytesValue).isEqual(qt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ae(i.geoPointValue.latitude)===ae(o.geoPointValue.latitude)&&ae(i.geoPointValue.longitude)===ae(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ae(i.integerValue)===ae(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=ae(i.doubleValue),u=ae(o.doubleValue);return l===u?Or(l)===Or(u):isNaN(l)&&isNaN(u)}return!1}(n,e);case 9:return zt(n.arrayValue.values||[],e.arrayValue.values||[],xe);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},u=o.mapValue.fields||{};if(ka(l)!==ka(u))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(u[h]===void 0||!xe(l[h],u[h])))return!1;return!0}(n,e);default:return x(52216,{left:n})}}function Cn(n,e){return(n.values||[]).find(t=>xe(t,e))!==void 0}function Gt(n,e){if(n===e)return 0;const t=St(n),r=St(e);if(t!==r)return B(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,e.booleanValue);case 2:return function(o,l){const u=ae(o.integerValue||o.doubleValue),h=ae(l.integerValue||l.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return Na(n.timestampValue,e.timestampValue);case 4:return Na(Vr(n),Vr(e));case 5:return Qi(n.stringValue,e.stringValue);case 6:return function(o,l){const u=qt(o),h=qt(l);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,l){const u=o.split("/"),h=l.split("/");for(let f=0;f<u.length&&f<h.length;f++){const v=B(u[f],h[f]);if(v!==0)return v}return B(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,l){const u=B(ae(o.latitude),ae(l.latitude));return u!==0?u:B(ae(o.longitude),ae(l.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Oa(n.arrayValue,e.arrayValue);case 10:return function(o,l){var u,h,f,v;const w=o.fields||{},P=l.fields||{},C=(u=w[Xi])===null||u===void 0?void 0:u.arrayValue,k=(h=P[Xi])===null||h===void 0?void 0:h.arrayValue,M=B(((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0,((v=k==null?void 0:k.values)===null||v===void 0?void 0:v.length)||0);return M!==0?M:Oa(C,k)}(n.mapValue,e.mapValue);case 11:return function(o,l){if(o===pr.mapValue&&l===pr.mapValue)return 0;if(o===pr.mapValue)return 1;if(l===pr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=l.fields||{},v=Object.keys(f);h.sort(),v.sort();for(let w=0;w<h.length&&w<v.length;++w){const P=Qi(h[w],v[w]);if(P!==0)return P;const C=Gt(u[h[w]],f[v[w]]);if(C!==0)return C}return B(h.length,v.length)}(n.mapValue,e.mapValue);default:throw x(23264,{Pe:t})}}function Na(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return B(n,e);const t=bt(n),r=bt(e),i=B(t.seconds,r.seconds);return i!==0?i:B(t.nanos,r.nanos)}function Oa(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Gt(t[i],r[i]);if(o)return o}return B(t.length,r.length)}function Wt(n){return Ji(n)}function Ji(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=bt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return qt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Ji(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${Ji(t.fields[l])}`;return i+"}"}(n.mapValue):x(61005,{value:n})}function Ir(n){switch(St(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=As(n);return e?16+Ir(e):16;case 5:return 2*n.stringValue.length;case 6:return qt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Ir(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Yt(r.fields,(o,l)=>{i+=o.length+Ir(l)}),i}(n.mapValue);default:throw x(13486,{value:n})}}function Yi(n){return!!n&&"integerValue"in n}function Rs(n){return!!n&&"arrayValue"in n}function wr(n){return!!n&&"mapValue"in n}function bg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[_c])===null||t===void 0?void 0:t.stringValue)===yc}function In(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Yt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=In(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=In(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Sg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Pg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.value=e}static empty(){return new Se({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!wr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=In(t)}setAll(e){let t=le.emptyPath(),r={},i=[];e.forEach((l,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}l?r[u.lastSegment()]=In(l):i.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());wr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];wr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Yt(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Se(In(this.value))}}function vc(n){const e=[];return Yt(n.fields,(t,r)=>{const i=new le([t]);if(wr(r)){const o=vc(r.mapValue).fields;if(o.length===0)e.push(i);else for(const l of o)e.push(i.child(l))}else e.push(i)}),new ke(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t,r,i,o,l,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=u}static newInvalidDocument(e){return new Pe(e,0,X.min(),X.min(),X.min(),Se.empty(),0)}static newFoundDocument(e,t,r,i){return new Pe(e,1,t,X.min(),r,i,0)}static newNoDocument(e,t){return new Pe(e,2,t,X.min(),X.min(),Se.empty(),0)}static newUnknownDocument(e,t){return new Pe(e,3,t,X.min(),X.min(),Se.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Se.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){this.position=e,this.inclusive=t}}function Va(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],l=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(l.referenceValue),t.key):r=Gt(l,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ma(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!xe(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t="asc"){this.field=e,this.dir=t}}function Cg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{}class re extends Ec{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Dg(e,t,r):t==="array-contains"?new Vg(e,r):t==="in"?new Mg(e,r):t==="not-in"?new Lg(e,r):t==="array-contains-any"?new xg(e,r):new re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ng(e,r):new Og(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Gt(t,this.value)):t!==null&&St(this.value)===St(t)&&this.matchesComparison(Gt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ct extends Ec{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new ct(e,t)}matches(e){return Tc(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Tc(n){return n.op==="and"}function Ic(n){return kg(n)&&Tc(n)}function kg(n){for(const e of n.filters)if(e instanceof ct)return!1;return!0}function Zi(n){if(n instanceof re)return n.field.canonicalString()+n.op.toString()+Wt(n.value);if(Ic(n))return n.filters.map(e=>Zi(e)).join(",");{const e=n.filters.map(t=>Zi(t)).join(",");return`${n.op}(${e})`}}function wc(n,e){return n instanceof re?function(r,i){return i instanceof re&&r.op===i.op&&r.field.isEqual(i.field)&&xe(r.value,i.value)}(n,e):n instanceof ct?function(r,i){return i instanceof ct&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,l,u)=>o&&wc(l,i.filters[u]),!0):!1}(n,e):void x(19439)}function Ac(n){return n instanceof re?function(t){return`${t.field.canonicalString()} ${t.op} ${Wt(t.value)}`}(n):n instanceof ct?function(t){return t.op.toString()+" {"+t.getFilters().map(Ac).join(" ,")+"}"}(n):"Filter"}class Dg extends re{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ng extends re{constructor(e,t){super(e,"in",t),this.keys=Rc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Og extends re{constructor(e,t){super(e,"not-in",t),this.keys=Rc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Rc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class Vg extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Rs(t)&&Cn(t.arrayValue,this.value)}}class Mg extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Cn(this.value.arrayValue,t)}}class Lg extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(Cn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Cn(this.value.arrayValue,t)}}class xg extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Rs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Cn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t=null,r=[],i=[],o=null,l=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=u,this.Ie=null}}function La(n,e=null,t=[],r=[],i=null,o=null,l=null){return new Ug(n,e,t,r,i,o,l)}function Ps(n){const e=K(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Zi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Is(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Wt(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Wt(r)).join(",")),e.Ie=t}return e.Ie}function bs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Cg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!wc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ma(n.startAt,e.startAt)&&Ma(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t=null,r=[],i=[],o=null,l="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=u,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Fg(n,e,t,r,i,o,l,u){return new Jr(n,e,t,r,i,o,l,u)}function Bg(n){return new Jr(n)}function xa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jg(n){return n.collectionGroup!==null}function wn(n){const e=K(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let u=new ce(le.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new Ur(o,r))}),t.has(le.keyField().canonicalString())||e.Ee.push(new Ur(le.keyField(),r))}return e.Ee}function Et(n){const e=K(n);return e.de||(e.de=$g(e,wn(n))),e.de}function $g(n,e){if(n.limitType==="F")return La(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Ur(i.field,o)});const t=n.endAt?new xr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new xr(n.startAt.position,n.startAt.inclusive):null;return La(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function es(n,e,t){return new Jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Pc(n,e){return bs(Et(n),Et(e))&&n.limitType===e.limitType}function bc(n){return`${Ps(Et(n))}|lt:${n.limitType}`}function yn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Ac(i)).join(", ")}]`),Is(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Wt(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Wt(i)).join(",")),`Target(${r})`}(Et(n))}; limitType=${n.limitType})`}function Ss(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of wn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(l,u,h){const f=Va(l,u,h);return l.inclusive?f<=0:f<0}(r.startAt,wn(r),i)||r.endAt&&!function(l,u,h){const f=Va(l,u,h);return l.inclusive?f>=0:f>0}(r.endAt,wn(r),i))}(n,e)}function Hg(n){return(e,t)=>{let r=!1;for(const i of wn(n)){const o=zg(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function zg(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(o,l,u){const h=l.data.field(o),f=u.data.field(o);return h!==null&&f!==null?Gt(h,f):x(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yt(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return dc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new Te(L.comparator);function Fr(){return qg}const Sc=new Te(L.comparator);function gr(...n){let e=Sc;for(const t of n)e=e.insert(t.key,t);return e}function Cc(n){let e=Sc;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function yt(){return An()}function kc(){return An()}function An(){return new kt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Gg=new Te(L.comparator),Wg=new ce(L.comparator);function me(...n){let e=Wg;for(const t of n)e=e.add(t);return e}const Kg=new ce(B);function Qg(){return Kg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Or(e)?"-0":e}}function Dc(n){return{integerValue:""+n}}function Xg(n,e){return Eg(e)?Dc(e):Cs(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this._=void 0}}function Jg(n,e,t){return n instanceof Br?function(i,o){const l={fields:{[pc]:{stringValue:fc},[mc]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ws(o)&&(o=As(o)),o&&(l.fields[gc]=o),{mapValue:l}}(t,e):n instanceof kn?Oc(n,e):n instanceof Dn?Vc(n,e):function(i,o){const l=Nc(i,o),u=Ua(l)+Ua(i.Re);return Yi(l)&&Yi(i.Re)?Dc(u):Cs(i.serializer,u)}(n,e)}function Yg(n,e,t){return n instanceof kn?Oc(n,e):n instanceof Dn?Vc(n,e):t}function Nc(n,e){return n instanceof jr?function(r){return Yi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Br extends Yr{}class kn extends Yr{constructor(e){super(),this.elements=e}}function Oc(n,e){const t=Mc(e);for(const r of n.elements)t.some(i=>xe(i,r))||t.push(r);return{arrayValue:{values:t}}}class Dn extends Yr{constructor(e){super(),this.elements=e}}function Vc(n,e){let t=Mc(e);for(const r of n.elements)t=t.filter(i=>!xe(i,r));return{arrayValue:{values:t}}}class jr extends Yr{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Ua(n){return ae(n.integerValue||n.doubleValue)}function Mc(n){return Rs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Zg(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof kn&&i instanceof kn||r instanceof Dn&&i instanceof Dn?zt(r.elements,i.elements,xe):r instanceof jr&&i instanceof jr?xe(r.Re,i.Re):r instanceof Br&&i instanceof Br}(n.transform,e.transform)}class em{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ar(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zr{}function Lc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Uc(n.key,He.none()):new jn(n.key,n.data,He.none());{const t=n.data,r=Se.empty();let i=new ce(le.comparator);for(let o of e.fields)if(!i.has(o)){let l=t.field(o);l===null&&o.length>1&&(o=o.popLast(),l=t.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new Dt(n.key,r,new ke(i.toArray()),He.none())}}function tm(n,e,t){n instanceof jn?function(i,o,l){const u=i.value.clone(),h=Ba(i.fieldTransforms,o,l.transformResults);u.setAll(h),o.convertToFoundDocument(l.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Dt?function(i,o,l){if(!Ar(i.precondition,o))return void o.convertToUnknownDocument(l.version);const u=Ba(i.fieldTransforms,o,l.transformResults),h=o.data;h.setAll(xc(i)),h.setAll(u),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function Rn(n,e,t,r){return n instanceof jn?function(o,l,u,h){if(!Ar(o.precondition,l))return u;const f=o.value.clone(),v=ja(o.fieldTransforms,h,l);return f.setAll(v),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Dt?function(o,l,u,h){if(!Ar(o.precondition,l))return u;const f=ja(o.fieldTransforms,h,l),v=l.data;return v.setAll(xc(o)),v.setAll(f),l.convertToFoundDocument(l.version,v).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,e,t,r):function(o,l,u){return Ar(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):u}(n,e,t)}function nm(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=Nc(r.transform,i||null);o!=null&&(t===null&&(t=Se.empty()),t.set(r.field,o))}return t||null}function Fa(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&zt(r,i,(o,l)=>Zg(o,l))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class jn extends Zr{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dt extends Zr{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function xc(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ba(n,e,t){const r=new Map;Y(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const o=n[i],l=o.transform,u=e.data.field(o.field);r.set(o.field,Yg(l,u,t[i]))}return r}function ja(n,e,t){const r=new Map;for(const i of n){const o=i.transform,l=t.data.field(i.field);r.set(i.field,Jg(o,l,e))}return r}class Uc extends Zr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rm extends Zr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&tm(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Rn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Rn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=kc();return this.mutations.forEach(i=>{const o=e.get(i.key),l=o.overlayedDocument;let u=this.applyToLocalView(l,o.mutatedFields);u=t.has(i.key)?null:u;const h=Lc(l,u);h!==null&&r.set(i.key,h),l.isValidDocument()||l.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),me())}isEqual(e){return this.batchId===e.batchId&&zt(this.mutations,e.mutations,(t,r)=>Fa(t,r))&&zt(this.baseMutations,e.baseMutations,(t,r)=>Fa(t,r))}}class ks{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Y(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return Gg}();const o=e.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new ks(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee,F;function om(n){switch(n){case b.OK:return x(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function am(n){if(n===void 0)return Pt("GRPC error has no .code"),b.UNKNOWN;switch(n){case ee.OK:return b.OK;case ee.CANCELLED:return b.CANCELLED;case ee.UNKNOWN:return b.UNKNOWN;case ee.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ee.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ee.INTERNAL:return b.INTERNAL;case ee.UNAVAILABLE:return b.UNAVAILABLE;case ee.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ee.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ee.NOT_FOUND:return b.NOT_FOUND;case ee.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ee.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ee.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ee.ABORTED:return b.ABORTED;case ee.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ee.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ee.DATA_LOSS:return b.DATA_LOSS;default:return x(39323,{code:n})}}(F=ee||(ee={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new _s([4294967295,4294967295],0);class lm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ts(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function um(n,e){return ts(n,e.toTimestamp())}function $t(n){return Y(!!n,49232),X.fromTimestamp(function(t){const r=bt(t);return new ie(r.seconds,r.nanos)}(n))}function Fc(n,e){return ns(n,e).canonicalString()}function ns(n,e){const t=function(i){return new te(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function hm(n){const e=te.fromString(n);return Y(vm(e),10190,{key:e.toString()}),e}function rs(n,e){return Fc(n.databaseId,e.path)}function dm(n){const e=hm(n);return e.length===4?te.emptyPath():pm(e)}function fm(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pm(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function $a(n,e,t){return{name:rs(n,e),fields:t.value.mapValue.fields}}function gm(n,e){let t;if(e instanceof jn)t={update:$a(n,e.key,e.value)};else if(e instanceof Uc)t={delete:rs(n,e.key)};else if(e instanceof Dt)t={update:$a(n,e.key,e.data),updateMask:ym(e.fieldMask)};else{if(!(e instanceof rm))return x(16599,{ft:e.type});t={verify:rs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,l){const u=l.transform;if(u instanceof Br)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof kn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Dn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof jr)return{fieldPath:l.field.canonicalString(),increment:u.Re};throw x(20930,{transform:l.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:um(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)}(n,e.precondition)),t}function mm(n,e){return n&&n.length>0?(Y(e!==void 0,14353),n.map(t=>function(i,o){let l=i.updateTime?$t(i.updateTime):$t(o);return l.isEqual(X.min())&&(l=$t(o)),new em(l,i.transformResults||[])}(t,e))):[]}function _m(n){let e=dm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Y(r===1,65062);const v=t.from[0];v.allDescendants?i=v.collectionId:e=e.child(v.collectionId)}let o=[];t.where&&(o=function(w){const P=Bc(w);return P instanceof ct&&Ic(P)?P.getFilters():[P]}(t.where));let l=[];t.orderBy&&(l=function(w){return w.map(P=>function(k){return new Ur(xt(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(P))}(t.orderBy));let u=null;t.limit&&(u=function(w){let P;return P=typeof w=="object"?w.value:w,Is(P)?null:P}(t.limit));let h=null;t.startAt&&(h=function(w){const P=!!w.before,C=w.values||[];return new xr(C,P)}(t.startAt));let f=null;return t.endAt&&(f=function(w){const P=!w.before,C=w.values||[];return new xr(C,P)}(t.endAt)),Fg(e,i,l,o,u,"F",h,f)}function Bc(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xt(t.unaryFilter.field);return re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=xt(t.unaryFilter.field);return re.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=xt(t.unaryFilter.field);return re.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=xt(t.unaryFilter.field);return re.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(n):n.fieldFilter!==void 0?function(t){return re.create(xt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ct.create(t.compositeFilter.filters.map(r=>Bc(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(t.compositeFilter.op))}(n):x(30097,{filter:n})}function xt(n){return le.fromServerFormat(n.fieldPath)}function ym(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function vm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.wt=e}}function Tm(n){const e=_m({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?es(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.yn=new wm}addToCollectionParentIndex(e,t){return this.yn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(lt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(lt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class wm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ce(te.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ce(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jc=41943040;class Ee{static withCacheSize(e){return new Ee(e,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee.DEFAULT_COLLECTION_PERCENTILE=10,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ee.DEFAULT=new Ee(jc,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ee.DISABLED=new Ee(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new Kt(0)}static ir(){return new Kt(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="LruGarbageCollector",Am=1048576;function qa([n,e],[t,r]){const i=B(n,t);return i===0?B(e,r):i}class Rm{constructor(e){this.cr=e,this.buffer=new ce(qa),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();qa(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Pm{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){D(za,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Bn(t)?D(za,"Ignoring IndexedDB error during garbage collection: ",t):await vs(t)}await this.Ir(3e5)})}}class bm{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Es.le);const r=new Rm(t);return this.Er.forEachTarget(e,i=>r.Pr(i.sequenceNumber)).next(()=>this.Er.Ar(e,i=>r.Pr(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Er.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Ha)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ha):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let r,i,o,l,u,h,f;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,l=Date.now(),this.nthSequenceNumber(e,i))).next(w=>(r=w,u=Date.now(),this.removeTargets(e,r,t))).next(w=>(o=w,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(w=>(f=Date.now(),Lt()<=U.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-v}ms
	Determined least recently used ${i} in `+(u-l)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${w} documents in `+(f-h)+`ms
Total Duration: ${f-v}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w})))}}function Sm(n,e){return new bm(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.changes=new kt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Rn(r.mutation,i,ke.empty(),ie.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,t,r=me()){const i=yt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let l=gr();return o.forEach((u,h)=>{l=l.insert(u,h.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const r=yt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,me()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((l,u)=>{t.set(l,u)})})}computeViews(e,t,r,i){let o=Fr();const l=An(),u=function(){return An()}();return t.forEach((h,f)=>{const v=r.get(f.key);i.has(f.key)&&(v===void 0||v.mutation instanceof Dt)?o=o.insert(f.key,f):v!==void 0?(l.set(f.key,v.mutation.getFieldMask()),Rn(v.mutation,f,v.mutation.getFieldMask(),ie.now())):l.set(f.key,ke.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((f,v)=>l.set(f,v)),t.forEach((f,v)=>{var w;return u.set(f,new km(v,(w=l.get(f))!==null&&w!==void 0?w:null))}),u))}recalculateAndSaveOverlays(e,t){const r=An();let i=new Te((l,u)=>l-u),o=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const u of l)u.keys().forEach(h=>{const f=t.get(h);if(f===null)return;let v=r.get(h)||ke.empty();v=u.applyToLocalView(f,v),r.set(h,v);const w=(i.get(u.batchId)||me()).add(h);i=i.insert(u.batchId,w)})}).next(()=>{const l=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,v=h.value,w=kc();v.forEach(P=>{if(!o.has(P)){const C=Lc(t.get(P),r.get(P));C!==null&&w.set(P,C),o=o.add(P)}}),l.push(this.documentOverlayCache.saveOverlays(e,f,w))}return R.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(l){return L.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):R.resolve(yt());let u=Sn,h=o;return l.next(f=>R.forEach(f,(v,w)=>(u<w.largestBatchId&&(u=w.largestBatchId),o.get(v)?R.resolve():this.remoteDocumentCache.getEntry(e,v).next(P=>{h=h.insert(v,P)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,h,f,me())).next(v=>({batchId:u,changes:Cc(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=gr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let l=gr();return this.indexManager.getCollectionParents(e,o).next(u=>R.forEach(u,h=>{const f=function(w,P){return new Jr(P,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(v=>{v.forEach((w,P)=>{l=l.insert(w,P)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(l=>{o.forEach((h,f)=>{const v=f.getKey();l.get(v)===null&&(l=l.insert(v,Pe.newInvalidDocument(v)))});let u=gr();return l.forEach((h,f)=>{const v=o.get(h);v!==void 0&&Rn(v.mutation,f,ke.empty(),ie.now()),Ss(t,f)&&(u=u.insert(h,f))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return R.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:$t(i.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(i){return{name:i.name,query:Tm(i.bundledQuery),readTime:$t(i.readTime)}}(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.overlays=new Te(L.comparator),this.Or=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=yt();return R.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.St(e,t,o)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Or.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Or.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const i=yt(),o=t.length+1,l=new L(t.child("")),u=this.overlays.getIteratorFrom(l);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return R.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Te((f,v)=>f-v);const l=this.overlays.getIterator();for(;l.hasNext();){const f=l.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let v=o.get(f.largestBatchId);v===null&&(v=yt(),o=o.insert(f.largestBatchId,v)),v.set(f.getKey(),f)}}const u=yt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,v)=>u.set(f,v)),!(u.size()>=i)););return R.resolve(u)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Or.get(i.largestBatchId).delete(r.key);this.Or.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new sm(t,r));let o=this.Or.get(t);o===void 0&&(o=me(),this.Or.set(t,o)),this.Or.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.sessionToken=Le.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.Nr=new ce(ne.Br),this.Lr=new ce(ne.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const r=new ne(e,t);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Qr(new ne(e,t))}$r(e,t){e.forEach(r=>this.removeReference(r,t))}Ur(e){const t=new L(new te([])),r=new ne(t,e),i=new ne(t,e+1),o=[];return this.Lr.forEachInRange([r,i],l=>{this.Qr(l),o.push(l.key)}),o}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new L(new te([])),r=new ne(t,e),i=new ne(t,e+1);let o=me();return this.Lr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(e){const t=new ne(e,0),r=this.Nr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ne{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return L.comparator(e.key,t.key)||B(e.Gr,t.Gr)}static kr(e,t){return B(e.Gr,t.Gr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new ce(ne.Br)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new im(o,t,r,i);this.mutationQueue.push(l);for(const u of i)this.zr=this.zr.add(new ne(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return R.resolve(l)}lookupMutationBatch(e,t){return R.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Hr(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Ts:this.Jn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ne(t,0),i=new ne(t,Number.POSITIVE_INFINITY),o=[];return this.zr.forEachInRange([r,i],l=>{const u=this.jr(l.Gr);o.push(u)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(B);return t.forEach(i=>{const o=new ne(i,0),l=new ne(i,Number.POSITIVE_INFINITY);this.zr.forEachInRange([o,l],u=>{r=r.add(u.Gr)})}),R.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const l=new ne(new L(o),0);let u=new ce(B);return this.zr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(u=u.add(h.Gr)),!0)},l),R.resolve(this.Jr(u))}Jr(e){const t=[];return e.forEach(r=>{const i=this.jr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Y(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return R.forEach(t.mutations,i=>{const o=new ne(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,t){const r=new ne(t,0),i=this.zr.firstAfterOrEqual(r);return R.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.Zr=e,this.docs=function(){return new Te(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,l=this.Zr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():Pe.newInvalidDocument(t))}getEntries(e,t){let r=Fr();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Pe.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=Fr();const l=t.path,u=new L(l.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:v}}=h.getNext();if(!l.isPrefixOf(f.path))break;f.path.length>l.length+1||mg(gg(v),r)<=0||(i.has(v.key)||Ss(t,v))&&(o=o.insert(v.key,v.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(e,t,r,i){x(9500)}Xr(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new xm(this)}getSize(e){return R.resolve(this.size)}}class xm extends Cm{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.vr.addEntry(e,i)):this.vr.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.persistence=e,this.ei=new kt(t=>Ps(t),bs),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.ti=0,this.ni=new Ds,this.targetCount=0,this.ri=Kt.rr()}forEachTarget(e,t){return this.ei.forEach((r,i)=>t(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ti&&(this.ti=t),R.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new Kt(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.ar(t),R.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.ei.forEach((l,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ei.delete(l),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.ei.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.ni.qr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.ni.$r(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(l=>{o.push(i.markPotentiallyOrphaned(e,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ni.Wr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.ni.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t){this.ii={},this.overlays={},this.si=new Es(0),this.oi=!1,this.oi=!0,this._i=new Vm,this.referenceDelegate=e(this),this.ai=new Um(this),this.indexManager=new Im,this.remoteDocumentCache=function(i){return new Lm(i)}(r=>this.referenceDelegate.ui(r)),this.serializer=new Em(t),this.ci=new Nm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Om,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ii[e.toKey()];return r||(r=new Mm(t,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const i=new Fm(this.si.next());return this.referenceDelegate.li(),r(i).next(o=>this.referenceDelegate.hi(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Pi(e,t){return R.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,t)))}}class Fm extends yg{constructor(e){super(),this.currentSequenceNumber=e}}class Ns{constructor(e){this.persistence=e,this.Ti=new Ds,this.Ii=null}static Ei(e){return new Ns(e)}get di(){if(this.Ii)return this.Ii;throw x(60996)}addReference(e,t,r){return this.Ti.addReference(r,t),this.di.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Ti.removeReference(r,t),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,r=>{const i=L.fromPath(r);return this.Ai(e,i).next(o=>{o||t.removeEntry(i,X.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return R.or([()=>R.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class $r{constructor(e,t){this.persistence=e,this.Ri=new kt(r=>Tg(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Sm(this,t)}static Ei(e,t){return new $r(e,t)}li(){}hi(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Vr(e){let t=0;return this.Ar(e,r=>{t++}).next(()=>t)}Ar(e,t){return R.forEach(this.Ri,(r,i)=>this.gr(e,r,i).next(o=>o?R.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Xr(e,l=>this.gr(e,l,t).next(u=>{u||(r++,o.removeEntry(l,X.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),R.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ir(e.data.value)),t}gr(e,t,r){return R.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.Ri.get(t);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ls=r,this.hs=i}static Ps(e,t){let r=me(),i=me();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Os(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return Ch()?8:vg(_e())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Rs(e,t).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Vs(e,t,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new Bm;return this.fs(e,t,l).next(u=>{if(o.result=u,this.Is)return this.gs(e,t,l,u.size)})}).next(()=>o.result)}gs(e,t,r,i){return r.documentReadCount<this.Es?(Lt()<=U.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",yn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),R.resolve()):(Lt()<=U.DEBUG&&D("QueryEngine","Query:",yn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Lt()<=U.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",yn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Et(t))):R.resolve())}Rs(e,t){if(xa(t))return R.resolve(null);let r=Et(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=es(t,null,"F"),r=Et(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const l=me(...o);return this.As.getDocuments(e,l).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const f=this.ps(t,u);return this.ys(t,f,l,h.readTime)?this.Rs(e,es(t,null,"F")):this.ws(e,f,t,h)}))})))}Vs(e,t,r,i){return xa(t)||i.isEqual(X.min())?R.resolve(null):this.As.getDocuments(e,r).next(o=>{const l=this.ps(t,o);return this.ys(t,l,r,i)?R.resolve(null):(Lt()<=U.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yn(t)),this.ws(e,l,t,pg(i,Sn)).next(u=>u))})}ps(e,t){let r=new ce(Hg(e));return t.forEach((i,o)=>{Ss(e,o)&&(r=r.add(o))}),r}ys(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}fs(e,t,r){return Lt()<=U.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",yn(t)),this.As.getDocumentsMatchingQuery(e,t,lt.min(),r)}ws(e,t,r,i){return this.As.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="LocalStore";class Hm{constructor(e,t,r,i){this.persistence=e,this.bs=t,this.serializer=i,this.Ss=new Te(B),this.Ds=new kt(o=>Ps(o),bs),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Dm(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function zm(n,e,t,r){return new Hm(n,e,t,r)}async function Hc(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Fs(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],u=[];let h=me();for(const f of i){l.push(f.batchId);for(const v of f.mutations)h=h.add(v.key)}for(const f of o){u.push(f.batchId);for(const v of f.mutations)h=h.add(v.key)}return t.localDocuments.getDocuments(r,h).next(f=>({Ms:f,removedBatchIds:l,addedBatchIds:u}))})})}function qm(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.Cs.newChangeBuffer({trackRemovals:!0});return function(u,h,f,v){const w=f.batch,P=w.keys();let C=R.resolve();return P.forEach(k=>{C=C.next(()=>v.getEntry(h,k)).next(M=>{const N=f.docVersions.get(k);Y(N!==null,48541),M.version.compareTo(N)<0&&(w.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),v.addEntry(M)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(h,w))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=me();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Gm(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function Wm(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ts),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Ga{constructor(){this.activeTargetIds=Qg()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Km{constructor(){this.So=new Ga,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,r){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Ga,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="ConnectivityMonitor";class Ka{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){D(Wa,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){D(Wa,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr=null;function is(){return mr===null?mr=function(){return 268435456+Math.round(2147483648*Math.random())}():mr++,"0x"+mr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="RestConnection",Xm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Jm{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${r}/databases/${i}`,this.qo=this.databaseId.database===Mr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Qo(e,t,r,i,o){const l=is(),u=this.$o(e,t.toUriEncodedString());D(xi,`Sending RPC '${e}' ${l}:`,u,r);const h={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(h,i,o),this.Ko(e,u,h,r).then(f=>(D(xi,`Received RPC '${e}' ${l}: `,f),f),f=>{throw Xr(xi,`RPC '${e}' ${l} failed with error: `,f,"url: ",u,"request:",r),f})}Wo(e,t,r,i,o,l){return this.Qo(e,t,r,i,o)}Uo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jt}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}$o(e,t){const r=Xm[e];return`${this.Lo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="WebChannelConnection";class Zm extends Jm{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,r,i){const o=is();return new Promise((l,u)=>{const h=new rc;h.setWithCredentials(!0),h.listenOnce(ic.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Tr.NO_ERROR:const v=h.getResponseJson();D(pe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(v)),l(v);break;case Tr.TIMEOUT:D(pe,`RPC '${e}' ${o} timed out`),u(new V(b.DEADLINE_EXCEEDED,"Request time out"));break;case Tr.HTTP_ERROR:const w=h.getStatus();if(D(pe,`RPC '${e}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let P=h.getResponseJson();Array.isArray(P)&&(P=P[0]);const C=P==null?void 0:P.error;if(C&&C.status&&C.message){const k=function(N){const z=N.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(z)>=0?z:b.UNKNOWN}(C.status);u(new V(k,C.message))}else u(new V(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new V(b.UNAVAILABLE,"Connection failed."));break;default:x(9055,{s_:e,streamId:o,o_:h.getLastErrorCode(),__:h.getLastError()})}}finally{D(pe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);D(pe,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",f,r,15)})}a_(e,t,r){const i=is(),o=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=ac(),u=oc(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Uo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const v=o.join("");D(pe,`Creating RPC '${e}' stream ${i}: ${v}`,h);const w=l.createWebChannel(v,h);let P=!1,C=!1;const k=new Ym({Go:N=>{C?D(pe,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(P||(D(pe,`Opening RPC '${e}' stream ${i} transport.`),w.open(),P=!0),D(pe,`RPC '${e}' stream ${i} sending:`,N),w.send(N))},zo:()=>w.close()}),M=(N,z,H)=>{N.listen(z,q=>{try{H(q)}catch(Z){setTimeout(()=>{throw Z},0)}})};return M(w,En.EventType.OPEN,()=>{C||(D(pe,`RPC '${e}' stream ${i} transport opened.`),k.t_())}),M(w,En.EventType.CLOSE,()=>{C||(C=!0,D(pe,`RPC '${e}' stream ${i} transport closed`),k.r_())}),M(w,En.EventType.ERROR,N=>{C||(C=!0,Xr(pe,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),k.r_(new V(b.UNAVAILABLE,"The operation could not be completed")))}),M(w,En.EventType.MESSAGE,N=>{var z;if(!C){const H=N.data[0];Y(!!H,16349);const q=H,Z=(q==null?void 0:q.error)||((z=q[0])===null||z===void 0?void 0:z.error);if(Z){D(pe,`RPC '${e}' stream ${i} received error:`,Z);const G=Z.status;let $=function(m){const _=ee[m];if(_!==void 0)return am(_)}(G),y=Z.message;$===void 0&&($=b.INTERNAL,y="Unknown error status: "+G+" with message "+Z.message),C=!0,k.r_(new V($,y)),w.close()}else D(pe,`RPC '${e}' stream ${i} received:`,H),k.i_(H)}}),M(u,sc.STAT_EVENT,N=>{N.stat===Ki.PROXY?D(pe,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Ki.NOPROXY&&D(pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.n_()},0),k}}function Ui(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n){return new lm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,r=1e3,i=1.5,o=6e4){this.bi=e,this.timerId=t,this.u_=r,this.c_=i,this.l_=o,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),i=Math.max(0,t-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,i,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="PersistentStream";class e_{constructor(e,t,r,i,o,l,u,h){this.bi=e,this.R_=r,this.V_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new zc(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(Pt(t.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.m_===t&&this.B_(r,i)},r=>{e(()=>{const i=new V(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(i)})})}B_(e,t){const r=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(i=>{r(()=>this.L_(i))}),this.stream.onMessage(i=>{r(()=>++this.p_==1?this.q_(i):this.onNext(i))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return D(Qa,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(D(Qa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class t_ extends e_{constructor(e,t,r,i,o,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,l),this.serializer=o}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return Y(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Y(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=mm(e.writeResults,e.commitTime),r=$t(e.commitTime);return this.listener.j_(r,t)}H_(){const e={};e.database=fm(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>gm(this.serializer,r))};this.F_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{}class r_ extends n_{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.J_=!1}Y_(){if(this.J_)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,r,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Qo(e,ns(t,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(b.UNKNOWN,o.toString())})}Wo(e,t,r,i,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.Wo(e,ns(t,r),i,l,u,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new V(b.UNKNOWN,l.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class i_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Pt(t),this.ea=!1):D("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="RemoteStore";class s_{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=o,this.ca.vo(l=>{r.enqueueAndForget(async()=>{zn(this)&&(D($n,"Restarting streams for network reachability change."),await async function(h){const f=K(h);f.aa.add(4),await Hn(f),f.la.set("Unknown"),f.aa.delete(4),await ti(f)}(this))})}),this.la=new i_(r,i)}}async function ti(n){if(zn(n))for(const e of n.ua)await e(!0)}async function Hn(n){for(const e of n.ua)await e(!1)}function zn(n){return K(n).aa.size===0}async function qc(n,e,t){if(!Bn(e))throw e;n.aa.add(1),await Hn(n),n.la.set("Offline"),t||(t=()=>Gm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D($n,"Retrying IndexedDB access"),await t(),n.aa.delete(1),await ti(n)})}function Gc(n,e){return e().catch(t=>qc(n,t,e))}async function ni(n){const e=K(n),t=ut(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:Ts;for(;o_(e);)try{const i=await Wm(e.localStore,r);if(i===null){e.oa.length===0&&t.v_();break}r=i.batchId,a_(e,i)}catch(i){await qc(e,i)}Wc(e)&&Kc(e)}function o_(n){return zn(n)&&n.oa.length<10}function a_(n,e){n.oa.push(e);const t=ut(n);t.b_()&&t.W_&&t.G_(e.mutations)}function Wc(n){return zn(n)&&!ut(n).w_()&&n.oa.length>0}function Kc(n){ut(n).start()}async function l_(n){ut(n).H_()}async function c_(n){const e=ut(n);for(const t of n.oa)e.G_(t.mutations)}async function u_(n,e,t){const r=n.oa.shift(),i=ks.from(r,e,t);await Gc(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ni(n)}async function h_(n,e){e&&ut(n).W_&&await async function(r,i){if(function(l){return om(l)&&l!==b.ABORTED}(i.code)){const o=r.oa.shift();ut(r).D_(),await Gc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ni(r)}}(n,e),Wc(n)&&Kc(n)}async function Xa(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),D($n,"RemoteStore received new credentials");const r=zn(t);t.aa.add(3),await Hn(t),r&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await ti(t)}async function d_(n,e){const t=K(n);e?(t.aa.delete(2),await ti(t)):e||(t.aa.add(2),await Hn(t),t.la.set("Unknown"))}function ut(n){return n.Ta||(n.Ta=function(t,r,i){const o=K(t);return o.Y_(),new t_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{jo:()=>Promise.resolve(),Jo:l_.bind(null,n),Zo:h_.bind(null,n),z_:c_.bind(null,n),j_:u_.bind(null,n)}),n.ua.push(async e=>{e?(n.Ta.D_(),await ni(n)):(await n.Ta.stop(),n.oa.length>0&&(D($n,`Stopping write stream with ${n.oa.length} pending writes`),n.oa=[]))})),n.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const l=Date.now()+r,u=new Vs(e,t,l,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qc(n,e){if(Pt("AsyncQueue",`${e}: ${n}`),Bn(n))return new V(b.UNAVAILABLE,`${e}: ${n}`);throw n}class f_{constructor(){this.queries=Ja(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,r){const i=K(t),o=i.queries;i.queries=Ja(),o.forEach((l,u)=>{for(const h of u.Ra)h.onError(r)})})(this,new V(b.ABORTED,"Firestore shutting down"))}}function Ja(){return new kt(n=>bc(n),Pc)}function p_(n){n.fa.forEach(e=>{e.next()})}var Ya,Za;(Za=Ya||(Ya={})).ya="default",Za.Cache="cache";const g_="SyncEngine";class m_{constructor(e,t,r,i,o,l){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.nu={},this.ru=new kt(u=>bc(u),Pc),this.iu=new Map,this.su=new Set,this.ou=new Te(L.comparator),this._u=new Map,this.au=new Ds,this.uu={},this.cu=new Map,this.lu=Kt.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function __(n,e,t){const r=T_(n);try{const i=await function(l,u){const h=K(l),f=ie.now(),v=u.reduce((C,k)=>C.add(k.key),me());let w,P;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=Fr(),M=me();return h.Cs.getEntries(C,v).next(N=>{k=N,k.forEach((z,H)=>{H.isValidDocument()||(M=M.add(z))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,k)).next(N=>{w=N;const z=[];for(const H of u){const q=nm(H,w.get(H.key).overlayedDocument);q!=null&&z.push(new Dt(H.key,q,vc(q.value.mapValue),He.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,z,u)}).next(N=>{P=N;const z=N.applyToLocalDocumentSet(w,M);return h.documentOverlayCache.saveOverlays(C,N.batchId,z)})}).then(()=>({batchId:P.batchId,changes:Cc(w)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(l,u,h){let f=l.uu[l.currentUser.toKey()];f||(f=new Te(B)),f=f.insert(u,h),l.uu[l.currentUser.toKey()]=f}(r,i.batchId,t),await ri(r,i.changes),await ni(r.remoteStore)}catch(i){const o=Qc(i,"Failed to persist write");t.reject(o)}}function el(n,e,t){const r=K(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ru.forEach((o,l)=>{const u=l.view.ga(e);u.snapshot&&i.push(u.snapshot)}),function(l,u){const h=K(l);h.onlineState=u;let f=!1;h.queries.forEach((v,w)=>{for(const P of w.Ra)P.ga(u)&&(f=!0)}),f&&p_(h)}(r.eventManager,e),i.length&&r.nu.Q_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function y_(n,e){const t=K(n),r=e.batch.batchId;try{const i=await qm(t.localStore,e);Jc(t,r,null),Xc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ri(t,i)}catch(i){await vs(i)}}async function v_(n,e,t){const r=K(n);try{const i=await function(l,u){const h=K(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let v;return h.mutationQueue.lookupMutationBatch(f,u).next(w=>(Y(w!==null,37113),v=w.keys(),h.mutationQueue.removeMutationBatch(f,w))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,v,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,v)).next(()=>h.localDocuments.getDocuments(f,v))})}(r.localStore,e);Jc(r,e,t),Xc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ri(r,i)}catch(i){await vs(i)}}function Xc(n,e){(n.cu.get(e)||[]).forEach(t=>{t.resolve()}),n.cu.delete(e)}function Jc(n,e,t){const r=K(n);let i=r.uu[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.uu[r.currentUser.toKey()]=i}}async function ri(n,e,t){const r=K(n),i=[],o=[],l=[];r.ru.isEmpty()||(r.ru.forEach((u,h)=>{l.push(r.Pu(h,e,t).then(f=>{var v;if((f||t)&&r.isPrimaryClient){const w=f?!f.fromCache:(v=void 0)===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(f){i.push(f);const w=Os.Ps(h.targetId,f);o.push(w)}}))}),await Promise.all(l),r.nu.Q_(i),await async function(h,f){const v=K(h);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(f,P=>R.forEach(P.ls,C=>v.persistence.referenceDelegate.addReference(w,P.targetId,C)).next(()=>R.forEach(P.hs,C=>v.persistence.referenceDelegate.removeReference(w,P.targetId,C)))))}catch(w){if(!Bn(w))throw w;D($m,"Failed to update sequence numbers: "+w)}for(const w of f){const P=w.targetId;if(!w.fromCache){const C=v.Ss.get(P),k=C.snapshotVersion,M=C.withLastLimboFreeSnapshotVersion(k);v.Ss=v.Ss.insert(P,M)}}}(r.localStore,o))}async function E_(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){D(g_,"User change. New user:",e.toKey());const r=await Hc(t.localStore,e);t.currentUser=e,function(o,l){o.cu.forEach(u=>{u.forEach(h=>{h.reject(new V(b.CANCELLED,l))})}),o.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ri(t,r.Ms)}}function T_(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=y_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=v_.bind(null,e),e}class Hr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ei(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return zm(this.persistence,new jm,e.initialUser,this.serializer)}Ru(e){return new $c(Ns.Ei,this.serializer)}Au(e){return new Km}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hr.provider={build:()=>new Hr};class I_ extends Hr{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){Y(this.persistence.referenceDelegate instanceof $r,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Pm(r,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?Ee.withCacheSize(this.cacheSizeBytes):Ee.DEFAULT;return new $c(r=>$r.Ei(r,t),this.serializer)}}class ss{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>el(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=E_.bind(null,this.syncEngine),await d_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new f_}()}createDatastore(e){const t=ei(e.databaseInfo.databaseId),r=function(o){return new Zm(o)}(e.databaseInfo);return function(o,l,u,h){return new r_(o,l,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,l,u){return new s_(r,i,o,l,u)}(this.localStore,this.datastore,e.asyncQueue,t=>el(this.syncEngine,t,0),function(){return Ka.C()?new Ka:new Qm}())}createSyncEngine(e,t){return function(i,o,l,u,h,f,v){const w=new m_(i,o,l,u,h,f);return v&&(w.hu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=K(i);D($n,"RemoteStore shutting down."),o.aa.add(5),await Hn(o),o.ca.shutdown(),o.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ss.provider={build:()=>new ss};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="FirestoreClient";class w_{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ge.UNAUTHENTICATED,this.clientId=uc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{D(ht,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(D(ht,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Qc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fi(n,e){n.asyncQueue.verifyOperationInProgress(),D(ht,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Hc(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function tl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await A_(n);D(ht,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Xa(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Xa(e.remoteStore,i)),n._onlineComponents=e}async function A_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(ht,"Using user provided OfflineComponentProvider");try{await Fi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Xr("Error using user provided cache. Falling back to memory cache: "+t),await Fi(n,new Hr)}}else D(ht,"Using default OfflineComponentProvider"),await Fi(n,new I_(void 0));return n._offlineComponents}async function R_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(ht,"Using user provided OnlineComponentProvider"),await tl(n,n._uninitializedComponentsProvider._online)):(D(ht,"Using default OnlineComponentProvider"),await tl(n,new ss))),n._onlineComponents}function P_(n){return R_(n).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n,e,t){if(!t)throw new V(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function S_(n,e,t,r){if(e===!0&&r===!0)throw new V(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function rl(n){if(!L.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function os(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ms(n);throw new V(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="firestore.googleapis.com",il=!0;class sl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zc,this.ssl=il}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:il;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Am)throw new V(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}S_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yc((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ls{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ig;switch(r.type){case"firstParty":return new lg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=nl.get(t);r&&(D("ComponentProvider","Removing Datastore"),nl.delete(t),r.terminate())}(this),Promise.resolve()}}function C_(n,e,t,r={}){var i;const o=(n=os(n,Ls))._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;o.host!==Zc&&o.host!==u&&Xr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:!1,emulatorOptions:r});if(!Tt(h,l)&&(n._setSettings(h),r.mockUserToken)){let f,v;if(typeof r.mockUserToken=="string")f=r.mockUserToken,v=ge.MOCK_USER;else{f=Ih(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new V(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new ge(w)}n._authCredentials=new sg(new cc(f,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xs(this.firestore,e,this._query)}}class ze{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}}class Nn extends xs{constructor(e,t,r){super(e,t,Bg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new L(e))}withConverter(e){return new Nn(this.firestore,e,this._path)}}function k_(n,e,...t){if(n=Me(n),arguments.length===1&&(e=uc.newId()),b_("doc","path",e),n instanceof Ls){const r=te.fromString(e,...t);return rl(r),new ze(n,null,new L(r))}{if(!(n instanceof ze||n instanceof Nn))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return rl(r),new ze(n.firestore,n instanceof Nn?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="AsyncQueue";class al{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new zc(this,"async_queue_retry"),this.ju=()=>{const r=Ui();r&&D(ol,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const t=Ui();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=Ui();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new vt;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Bn(e))throw e;D(ol,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Pt("INTERNAL UNHANDLED ERROR: ",ll(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=t,t}enqueueAfterDelay(e,t,r){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const i=Vs.createAndSchedule(this,e,t,r,o=>this.Xu(o));return this.Uu.push(i),i}Ju(){this.Ku&&x(47125,{ec:ll(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function ll(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class eu extends Ls{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new al,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new al(e),this._firestoreClient=void 0,await e}}}function D_(n,e){const t=typeof n=="object"?n:El(),r=typeof n=="string"?n:Mr,i=cs(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Eh("firestore");o&&C_(i,...o)}return i}function N_(n){if(n._terminated)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||O_(n),n._firestoreClient}function O_(n){var e,t,r;const i=n._freezeSettings(),o=function(u,h,f,v){return new Rg(u,h,f,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,Yc(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new w_(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this._byteString=e}static fromBase64String(e){try{return new On(Le.fromBase64String(e))}catch(t){throw new V(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new On(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=/^__.*__$/;class M_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Dt(e,this.data,this.fieldMask,t,this.fieldTransforms):new jn(e,this.data,t,this.fieldTransforms)}}function su(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{oc:n})}}class Us{constructor(e,t,r,i,o,l){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this._c(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Us(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ac({path:r,cc:!1});return i.lc(e),i}hc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ac({path:r,cc:!1});return i._c(),i}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return zr(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(su(this.oc)&&V_.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class L_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ei(e)}dc(e,t,r,i=!1){return new Us({oc:e,methodName:t,Ec:r,path:le.emptyPath(),cc:!1,Ic:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function x_(n){const e=n._freezeSettings(),t=ei(n._databaseId);return new L_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function U_(n,e,t,r,i,o={}){const l=n.dc(o.merge||o.mergeFields?2:0,e,t,i);cu("Data must be an object, but it was:",l,r);const u=au(r,l);let h,f;if(o.merge)h=new ke(l.fieldMask),f=l.fieldTransforms;else if(o.mergeFields){const v=[];for(const w of o.mergeFields){const P=F_(e,w,t);if(!l.contains(P))throw new V(b.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);$_(v,P)||v.push(P)}h=new ke(v),f=l.fieldTransforms.filter(w=>h.covers(w.field))}else h=null,f=l.fieldTransforms;return new M_(new Se(u),h,f)}function ou(n,e){if(lu(n=Me(n)))return cu("Unsupported field value:",e,n),au(n,e);if(n instanceof nu)return function(r,i){if(!su(i.oc))throw i.Tc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,i){const o=[];let l=0;for(const u of r){let h=ou(u,i.Pc(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ie.fromDate(r);return{timestampValue:ts(i.serializer,o)}}if(r instanceof ie){const o=new ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ts(i.serializer,o)}}if(r instanceof ru)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof On)return{bytesValue:cm(i.serializer,r._byteString)};if(r instanceof ze){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Tc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Fc(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof iu)return function(l,u){return{mapValue:{fields:{[_c]:{stringValue:yc},[Xi]:{arrayValue:{values:l.toArray().map(f=>{if(typeof f!="number")throw u.Tc("VectorValues must only contain numeric values.");return Cs(u.serializer,f)})}}}}}}(r,i);throw i.Tc(`Unsupported field value: ${Ms(r)}`)}(n,e)}function au(n,e){const t={};return dc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yt(n,(r,i)=>{const o=ou(i,e.uc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function lu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof ru||n instanceof On||n instanceof ze||n instanceof nu||n instanceof iu)}function cu(n,e,t){if(!lu(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Ms(t);throw r==="an object"?e.Tc(n+" a custom object"):e.Tc(n+" "+r)}}function F_(n,e,t){if((e=Me(e))instanceof tu)return e._internalPath;if(typeof e=="string")return j_(n,e);throw zr("Field path arguments must be of type string or ",n,!1,void 0,t)}const B_=new RegExp("[~\\*/\\[\\]]");function j_(n,e,t){if(e.search(B_)>=0)throw zr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new tu(...e.split("."))._internalPath}catch{throw zr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zr(n,e,t,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||l)&&(h+=" (found",o&&(h+=` in field ${r}`),l&&(h+=` in document ${i}`),h+=")"),new V(b.INVALID_ARGUMENT,u+n+h)}function $_(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(n,e,t){let r;return r=n?n.toFirestore(e):e,r}function z_(n,e,t){n=os(n,ze);const r=os(n.firestore,eu),i=H_(n.converter,e);return q_(r,[U_(x_(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,He.none())])}function q_(n,e){return function(r,i){const o=new vt;return r.asyncQueue.enqueueAndForget(async()=>__(await P_(r),i,o)),o.promise}(N_(n),e)}(function(e,t=!0){(function(i){Jt=i})(Qt),Ht(new It("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),u=new eu(new og(r.getProvider("auth-internal")),new cg(l,r.getProvider("app-check-internal")),function(f,v){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new V(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lr(f.options.projectId,v)}(l,i),l);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),ot(Ia,wa,e),ot(Ia,wa,"esm2017")})();const G_={apiKey:"AIzaSyD_wnxmDJymJSgS9379ChbqqWwF6z_Pi04",authDomain:"cloudward-5972b.firebaseapp.com",projectId:"cloudward-5972b",storageBucket:"cloudward-5972b.firebasestorage.app",messagingSenderId:"293779252761",appId:"1:293779252761:web:d10a1cdf53872769e42c88",measurementId:"G-B4HHKZVZK5"},uu=vl(G_),W_=ng(uu),K_=D_(uu);var Q_=qr('<span class="text-green-500">✓</span>'),X_=qr("<li><button> <!></button></li>"),J_=qr('<div role="alert" class="alert alert-error alert-soft mt-4 text-white rounded-lg"><span> </span></div>'),Y_=qr('<div class="bg-[#181818] w-screen h-screen flex items-center justify-center"><div class="register-card rounded-xl bg-[#f7374f] flex flex-col items-center svelte-1ca27lj"><a href="/" class="flex items-center justify-left w-full"><img src="/backbtn.png" alt="Back Button" class="w-10 h-10 mt-5 ml-5"></a> <div class="flex flex-col items-center justify-center"><img src="/cloudward.png" alt="Logo" class="w-32 h-32 mb-5"> <h1 class="text-3xl text-white font-bold">CloudWard</h1> <p class="text-white text-sm mb-2">Register as:</p></div> <div class="menu menu-horizontal bg-[#181818] rounded-xl text-white"></div> <form class="flex flex-col items-center w-full px-6 mt-4"><label class="input input-bordered mb-2 bg-[#181818] svelte-1ca27lj"><!> <input class="text-white" type="email" placeholder="Email"></label> <label class="input input-bordered mb-2 bg-[#181818] svelte-1ca27lj"><!> <input class="text-white" type="password" placeholder="Password"></label> <button type="submit" class="btn bg-white text-black hover:bg-gray-200 w-1/2 font-bold">Register</button> <p class="text-white text-sm mt-3">Already have an account? <a href="/login" class="log-link font-bold text-[#181818] svelte-1ca27lj">Login</a></p> <!></form></div></div>');function uy(n,e){cl(e,!1);let t=ur(""),r=ur(""),i=ur("Patient");const o=["Patient","Doctor"];let l=ur("");function u(G){_n(i,G)}async function h(){try{const $=(await Hf(W_,we(t),we(r))).user;await z_(k_(K_,"users",$.uid),{email:$.email,role:we(i)}),console.log("User registered and role saved."),window.location.href="/login"}catch(G){G instanceof Error&&(G.message.includes("email-already-in-use")?_n(l,"This email is already registered. Please use a different email."):_n(l,G.message),console.error(G.message))}}ah();var f=Y_(),v=Be(f),w=mt(Be(v),4);eh(w,5,()=>o,th,(G,$)=>{var y=X_(),p=Be(y);let m;var _=Be(p),E=mt(_);{var I=g=>{var Ae=Q_();vn(g,Ae)};$o(E,g=>{we(i)===we($)&&g(I)})}De(p),De(y),Bo(g=>{m=nh(p,1,"flex justify-between",null,m,g),jo(_,`${we($)??""} `)},[()=>({active:we(i)===we($)})],Zu),zo("click",p,()=>u(we($))),vn(G,y)}),De(w);var P=mt(w,2),C=Be(P),k=Be(C);sh(k,{color:"#FFFF"});var M=mt(k,2);Ho(M),De(C);var N=mt(C,2),z=Be(N);hh(z,{color:"#FFFF"});var H=mt(z,2);Ho(H),De(N);var q=mt(N,6);{var Z=G=>{var $=J_(),y=Be($),p=Be(y,!0);De(y),De($),Bo(()=>jo(p,we(l))),vn(G,$)};$o(q,G=>{we(l)&&G(Z)})}De(P),De(v),De(f),qo(M,()=>we(t),G=>_n(t,G)),qo(H,()=>we(r),G=>_n(r,G)),zo("submit",P,uh(h)),vn(n,f),ul()}export{uy as component};

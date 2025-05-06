import{aF as Zh,u as ed,r as td,G as nd}from"./B4yUTaZg.js";import{l as rd}from"./1W6vjebl.js";function Av(n,e,t=e){var r=Zh();rd(n,"input",i=>{var o=i?n.defaultValue:n.value;if(o=Wi(n)?Ki(o):o,t(o),r&&o!==(o=e())){var a=n.selectionStart,u=n.selectionEnd;n.value=o??"",u!==null&&(n.selectionStart=a,n.selectionEnd=Math.min(u,n.value.length))}}),(nd&&n.defaultValue!==n.value||ed(e)==null&&n.value)&&t(Wi(n)?Ki(n.value):n.value),td(()=>{var i=e();Wi(n)&&i===Ki(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function Wi(n){var e=n.type;return e==="number"||e==="range"}function Ki(n){return n===""?null:+n}const id=()=>{};var Sa={};/**
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
 */const Jc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},sd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,p=o>>2,T=(o&3)<<4|u>>4;let R=(u&15)<<2|d>>6,P=d&63;h||(P=64,a||(R=64)),r.push(t[p],t[T],t[R],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const T=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||T==null)throw new od;const R=o<<2|u>>4;if(r.push(R),d!==64){const P=u<<4&240|d>>2;if(r.push(P),T!==64){const D=d<<6&192|T;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class od extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ad=function(n){const e=Jc(n);return Xc.encodeByteArray(e,!0)},jr=function(n){return ad(n).replace(/\./g,"")},Zc=function(n){try{return Xc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ud=()=>cd().__FIREBASE_DEFAULTS__,ld=()=>{if(typeof process>"u"||typeof Sa>"u")return;const n=Sa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zc(n[1]);return e&&JSON.parse(e)},ai=()=>{try{return id()||ud()||ld()||hd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},eu=n=>{var e,t;return(t=(e=ai())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},dd=n=>{const e=eu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},tu=()=>{var n;return(n=ai())===null||n===void 0?void 0:n.config},nu=n=>{var e;return(e=ai())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class fd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function pd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[jr(JSON.stringify(t)),jr(JSON.stringify(a)),""].join(".")}/**
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function gd(){var n;const e=(n=ai())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _d(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ed(){const n=ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Td(){return!gd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Id(){try{return typeof indexedDB=="object"}catch{return!1}}function wd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ad="FirebaseError";class Ze extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ad,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Rd(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Ze(i,u,r)}}function Rd(n,e){return n.replace(Sd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Sd=/\{\$([^}]+)}/g;function Pd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ct(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Pa(o)&&Pa(a)){if(!Ct(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Pa(n){return n!==null&&typeof n=="object"}/**
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
 */function Xn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function kn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Cd(n,e){const t=new bd(n,e);return t.subscribe.bind(t)}class bd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");kd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Qi),i.error===void 0&&(i.error=Qi),i.complete===void 0&&(i.complete=Qi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qi(){}/**
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
 */function we(n){return n&&n._delegate?n._delegate:n}class bt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const St="[DEFAULT]";/**
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
 */class Vd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new fd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nd(e))try{this.getOrInitializeService({instanceIdentifier:St})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=St){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=St){return this.instances.has(e)}getOptions(e=St){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=St){return this.component?this.component.multipleInstances?e:St:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dd(n){return n===St?void 0:n}function Nd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Od{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Ld={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Md=j.INFO,xd={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Ud=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=xd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ks{constructor(e){this.name=e,this._logLevel=Md,this._logHandler=Ud,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ld[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Fd=(n,e)=>e.some(t=>n instanceof t);let Ca,ba;function Bd(){return Ca||(Ca=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jd(){return ba||(ba=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ru=new WeakMap,os=new WeakMap,iu=new WeakMap,Yi=new WeakMap,Vs=new WeakMap;function qd(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(ht(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ru.set(t,n)}).catch(()=>{}),Vs.set(e,n),e}function $d(n){if(os.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});os.set(n,e)}let as={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return os.get(n);if(e==="objectStoreNames")return n.objectStoreNames||iu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ht(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zd(n){as=n(as)}function Hd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ji(this),e,...t);return iu.set(r,e.sort?e.sort():[e]),ht(r)}:jd().includes(n)?function(...e){return n.apply(Ji(this),e),ht(ru.get(this))}:function(...e){return ht(n.apply(Ji(this),e))}}function Gd(n){return typeof n=="function"?Hd(n):(n instanceof IDBTransaction&&$d(n),Fd(n,Bd())?new Proxy(n,as):n)}function ht(n){if(n instanceof IDBRequest)return qd(n);if(Yi.has(n))return Yi.get(n);const e=Gd(n);return e!==n&&(Yi.set(n,e),Vs.set(e,n)),e}const Ji=n=>Vs.get(n);function Wd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),u=ht(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ht(a.result),h.oldVersion,h.newVersion,ht(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Kd=["get","getKey","getAll","getAllKeys","count"],Qd=["put","add","delete","clear"],Xi=new Map;function ka(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xi.get(e))return Xi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Qd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Kd.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&h.done]))[0]};return Xi.set(e,o),o}zd(n=>({...n,get:(e,t,r)=>ka(e,t)||n.get(e,t,r),has:(e,t)=>!!ka(e,t)||n.has(e,t)}));/**
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
 */class Yd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Jd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cs="@firebase/app",Va="0.11.5";/**
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
 */const Qe=new ks("@firebase/app"),Xd="@firebase/app-compat",Zd="@firebase/analytics-compat",ef="@firebase/analytics",tf="@firebase/app-check-compat",nf="@firebase/app-check",rf="@firebase/auth",sf="@firebase/auth-compat",of="@firebase/database",af="@firebase/data-connect",cf="@firebase/database-compat",uf="@firebase/functions",lf="@firebase/functions-compat",hf="@firebase/installations",df="@firebase/installations-compat",ff="@firebase/messaging",pf="@firebase/messaging-compat",mf="@firebase/performance",gf="@firebase/performance-compat",_f="@firebase/remote-config",yf="@firebase/remote-config-compat",vf="@firebase/storage",Ef="@firebase/storage-compat",Tf="@firebase/firestore",If="@firebase/vertexai",wf="@firebase/firestore-compat",Af="firebase",Rf="11.6.1";/**
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
 */const us="[DEFAULT]",Sf={[cs]:"fire-core",[Xd]:"fire-core-compat",[ef]:"fire-analytics",[Zd]:"fire-analytics-compat",[nf]:"fire-app-check",[tf]:"fire-app-check-compat",[rf]:"fire-auth",[sf]:"fire-auth-compat",[of]:"fire-rtdb",[af]:"fire-data-connect",[cf]:"fire-rtdb-compat",[uf]:"fire-fn",[lf]:"fire-fn-compat",[hf]:"fire-iid",[df]:"fire-iid-compat",[ff]:"fire-fcm",[pf]:"fire-fcm-compat",[mf]:"fire-perf",[gf]:"fire-perf-compat",[_f]:"fire-rc",[yf]:"fire-rc-compat",[vf]:"fire-gcs",[Ef]:"fire-gcs-compat",[Tf]:"fire-fst",[wf]:"fire-fst-compat",[If]:"fire-vertex","fire-js":"fire-js",[Af]:"fire-js-all"};/**
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
 */const Fn=new Map,Pf=new Map,ls=new Map;function Da(n,e){try{n.container.addComponent(e)}catch(t){Qe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Jt(n){const e=n.name;if(ls.has(e))return Qe.debug(`There were multiple attempts to register component ${e}.`),!1;ls.set(e,n);for(const t of Fn.values())Da(t,n);for(const t of Pf.values())Da(t,n);return!0}function Ds(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Se(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Cf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new Jn("app","Firebase",Cf);/**
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
 */class bf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
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
 */const on=Rf;function su(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:us,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dt.create("bad-app-name",{appName:String(i)});if(t||(t=tu()),!t)throw dt.create("no-options");const o=Fn.get(i);if(o){if(Ct(t,o.options)&&Ct(r,o.config))return o;throw dt.create("duplicate-app",{appName:i})}const a=new Od(i);for(const h of ls.values())a.addComponent(h);const u=new bf(t,r,a);return Fn.set(i,u),u}function Ns(n=us){const e=Fn.get(n);if(!e&&n===us&&tu())return su();if(!e)throw dt.create("no-app",{appName:n});return e}function kf(){return Array.from(Fn.values())}function ft(n,e,t){var r;let i=(r=Sf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qe.warn(u.join(" "));return}Jt(new bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Vf="firebase-heartbeat-database",Df=1,Bn="firebase-heartbeat-store";let Zi=null;function ou(){return Zi||(Zi=Wd(Vf,Df,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Bn)}catch(t){console.warn(t)}}}}).catch(n=>{throw dt.create("idb-open",{originalErrorMessage:n.message})})),Zi}async function Nf(n){try{const t=(await ou()).transaction(Bn),r=await t.objectStore(Bn).get(au(n));return await t.done,r}catch(e){if(e instanceof Ze)Qe.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qe.warn(t.message)}}}async function Na(n,e){try{const r=(await ou()).transaction(Bn,"readwrite");await r.objectStore(Bn).put(e,au(n)),await r.done}catch(t){if(t instanceof Ze)Qe.warn(t.message);else{const r=dt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qe.warn(r.message)}}}function au(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Of=1024,Lf=30;class Mf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Uf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Oa();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Lf){const a=Ff(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Oa(),{heartbeatsToSend:r,unsentEntries:i}=xf(this._heartbeatsCache.heartbeats),o=jr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Qe.warn(t),""}}}function Oa(){return new Date().toISOString().substring(0,10)}function xf(n,e=Of){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),La(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),La(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Uf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Id()?wd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Nf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Na(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Na(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function La(n){return jr(JSON.stringify({version:2,heartbeats:n})).length}function Ff(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Bf(n){Jt(new bt("platform-logger",e=>new Yd(e),"PRIVATE")),Jt(new bt("heartbeat",e=>new Mf(e),"PRIVATE")),ft(cs,Va,n),ft(cs,Va,"esm2017"),ft("fire-js","")}Bf("");var jf="firebase",qf="11.6.1";/**
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
 */ft(jf,qf,"app");function Os(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function cu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $f=cu,uu=new Jn("auth","Firebase",cu());/**
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
 */const qr=new ks("@firebase/auth");function zf(n,...e){qr.logLevel<=j.WARN&&qr.warn(`Auth (${on}): ${n}`,...e)}function Dr(n,...e){qr.logLevel<=j.ERROR&&qr.error(`Auth (${on}): ${n}`,...e)}/**
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
 */function be(n,...e){throw Ls(n,...e)}function Oe(n,...e){return Ls(n,...e)}function lu(n,e,t){const r=Object.assign(Object.assign({},$f()),{[e]:t});return new Jn("auth","Firebase",r).create(e,{appName:n.name})}function We(n){return lu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ls(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return uu.create(n,...e)}function O(n,e,...t){if(!n)throw Ls(e,...t)}function He(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Dr(e),new Error(e)}function Ye(n,e){n||He(e)}/**
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
 */function hs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Hf(){return Ma()==="http:"||Ma()==="https:"}function Ma(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Gf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hf()||yd()||"connection"in navigator)?navigator.onLine:!0}function Wf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Zn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ye(t>e,"Short delay should be less than long delay!"),this.isMobile=md()||vd()}get(){return Gf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ms(n,e){Ye(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class hu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;He("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;He("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;He("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Kf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Qf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Yf=new Zn(3e4,6e4);function Be(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function je(n,e,t,r,i={}){return du(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=Xn(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:h},o);return _d()||(d.referrerPolicy="no-referrer"),hu.fetch()(await fu(n,n.config.apiHost,t,u),d)})}async function du(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Kf),e);try{const i=new Xf(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Sr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Sr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Sr(n,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw lu(n,p,d);be(n,p)}}catch(i){if(i instanceof Ze)throw i;be(n,"network-request-failed",{message:String(i)})}}async function er(n,e,t,r,i={}){const o=await je(n,e,t,r,i);return"mfaPendingCredential"in o&&be(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function fu(n,e,t,r){const i=`${e}${t}?${r}`,o=n,a=o.config.emulator?Ms(n.config,i):`${n.config.apiScheme}://${i}`;return Qf.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function Jf(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Oe(this.auth,"network-request-failed")),Yf.get())})}}function Sr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Oe(n,e,r);return i.customData._tokenResponse=t,i}function xa(n){return n!==void 0&&n.enterprise!==void 0}class Zf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Jf(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ep(n,e){return je(n,"GET","/v2/recaptchaConfig",Be(n,e))}/**
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
 */async function tp(n,e){return je(n,"POST","/v1/accounts:delete",e)}async function $r(n,e){return je(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function On(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function np(n,e=!1){const t=we(n),r=await t.getIdToken(e),i=xs(r);O(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:On(es(i.auth_time)),issuedAtTime:On(es(i.iat)),expirationTime:On(es(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function es(n){return Number(n)*1e3}function xs(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Dr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zc(t);return i?JSON.parse(i):(Dr("Failed to decode base64 JWT payload"),null)}catch(i){return Dr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ua(n){const e=xs(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function jn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ze&&rp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function rp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ip{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ds{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zr(n){var e;const t=n.auth,r=await n.getIdToken(),i=await jn(n,$r(t,{idToken:r}));O(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?pu(o.providerUserInfo):[],u=op(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),p=h?d:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new ds(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,T)}async function sp(n){const e=we(n);await zr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function op(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pu(n){return n.map(e=>{var{providerId:t}=e,r=Os(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ap(n,e){const t=await du(n,{},async()=>{const r=Xn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=await fu(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",hu.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function cp(n,e){return je(n,"POST","/v2/accounts:revokeToken",Be(n,e))}/**
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
 */class Wt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ua(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){O(e.length!==0,"internal-error");const t=Ua(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await ap(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new Wt;return r&&(O(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(O(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wt,this.toJSON())}_performRefresh(){return He("not implemented")}}/**
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
 */function st(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ve{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Os(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ip(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ds(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await jn(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return np(this,e)}reload(){return sp(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ve(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await zr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Se(this.auth.app))return Promise.reject(We(this.auth));const e=await this.getIdToken();return await jn(this,tp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,u,h,d,p;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,R=(i=t.email)!==null&&i!==void 0?i:void 0,P=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,D=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(u=t.tenantId)!==null&&u!==void 0?u:void 0,k=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,W=(d=t.createdAt)!==null&&d!==void 0?d:void 0,z=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:H,emailVerified:ee,isAnonymous:Re,providerData:te,stsTokenManager:v}=t;O(H&&v,e,"internal-error");const m=Wt.fromJSON(this.name,v);O(typeof H=="string",e,"internal-error"),st(T,e.name),st(R,e.name),O(typeof ee=="boolean",e,"internal-error"),O(typeof Re=="boolean",e,"internal-error"),st(P,e.name),st(D,e.name),st(N,e.name),st(k,e.name),st(W,e.name),st(z,e.name);const _=new Ve({uid:H,auth:e,email:R,emailVerified:ee,displayName:T,isAnonymous:Re,photoURL:D,phoneNumber:P,tenantId:N,stsTokenManager:m,createdAt:W,lastLoginAt:z});return te&&Array.isArray(te)&&(_.providerData=te.map(y=>Object.assign({},y))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new Wt;i.updateFromServerResponse(t);const o=new Ve({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zr(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];O(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?pu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new Wt;u.updateFromIdToken(r);const h=new Ve({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ds(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
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
 */const Fa=new Map;function Ge(n){Ye(n instanceof Function,"Expected a class definition");let e=Fa.get(n);return e?(Ye(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fa.set(n,e),e)}/**
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
 */class mu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mu.type="NONE";const Ba=mu;/**
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
 */function Nr(n,e,t){return`firebase:${n}:${e}:${t}`}class Kt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Nr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Nr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await $r(this.auth,{idToken:e}).catch(()=>{});return t?Ve._fromGetAccountInfoResponse(this.auth,t,e):null}return Ve._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Kt(Ge(Ba),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Ge(Ba);const a=Nr(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){let T;if(typeof p=="string"){const R=await $r(e,{idToken:p}).catch(()=>{});if(!R)break;T=await Ve._fromGetAccountInfoResponse(e,R,p)}else T=Ve._fromJSON(e,p);d!==o&&(u=T),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Kt(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Kt(o,e,r))}}/**
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
 */function ja(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tu(e))return"Blackberry";if(Iu(e))return"Webos";if(_u(e))return"Safari";if((e.includes("chrome/")||yu(e))&&!e.includes("edge/"))return"Chrome";if(Eu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gu(n=ve()){return/firefox\//i.test(n)}function _u(n=ve()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yu(n=ve()){return/crios\//i.test(n)}function vu(n=ve()){return/iemobile/i.test(n)}function Eu(n=ve()){return/android/i.test(n)}function Tu(n=ve()){return/blackberry/i.test(n)}function Iu(n=ve()){return/webos/i.test(n)}function Us(n=ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function up(n=ve()){var e;return Us(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lp(){return Ed()&&document.documentMode===10}function wu(n=ve()){return Us(n)||Eu(n)||Iu(n)||Tu(n)||/windows phone/i.test(n)||vu(n)}/**
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
 */function Au(n,e=[]){let t;switch(n){case"Browser":t=ja(ve());break;case"Worker":t=`${ja(ve())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${on}/${r}`}/**
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
 */class hp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function dp(n,e={}){return je(n,"GET","/v2/passwordPolicy",Be(n,e))}/**
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
 */const fp=6;class pp{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:fp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class mp{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qa(this),this.idTokenSubscription=new qa(this),this.beforeStateQueue=new hp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ge(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await Kt.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $r(this,{idToken:e}),r=await Ve._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Se(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Se(this.app))return Promise.reject(We(this));const t=e?we(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Se(this.app)?Promise.reject(We(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Se(this.app)?Promise.reject(We(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dp(this),t=new pp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await cp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ge(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await Kt.create(this,[Ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Au(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Se(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&zf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function et(n){return we(n)}class qa{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cd(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ci={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gp(n){ci=n}function Ru(n){return ci.loadJS(n)}function _p(){return ci.recaptchaEnterpriseScript}function yp(){return ci.gapiScript}function vp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Ep{constructor(){this.enterprise=new Tp}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Tp{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ip="recaptcha-enterprise",Su="NO_RECAPTCHA";class wp{constructor(e){this.type=Ip,this.auth=et(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{ep(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new Zf(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{u(h)})})}function i(o,a,u){const h=window.grecaptcha;xa(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(Su)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ep().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(u=>{if(!t&&xa(window.grecaptcha))i(u,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=_p();h.length!==0&&(h+=u),Ru(h).then(()=>{i(u,o,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function $a(n,e,t,r=!1,i=!1){const o=new wp(n);let a;if(i)a=Su;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const h=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const h=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Hr(n,e,t,r,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await $a(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await $a(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
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
 */function Ap(n,e){const t=Ds(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Ct(o,e??{}))return i;be(i,"already-initialized")}return t.initialize({options:e})}function Rp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ge);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Sp(n,e,t){const r=et(n);O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Pu(e),{host:a,port:u}=Pp(e),h=u===null?"":`:${u}`,d={url:`${o}//${a}${h}/`},p=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){O(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),O(Ct(d,r.config.emulator)&&Ct(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Cp()}function Pu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Pp(n){const e=Pu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:za(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:za(a)}}}function za(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Cp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Fs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return He("not implemented")}_getIdTokenResponse(e){return He("not implemented")}_linkToIdToken(e,t){return He("not implemented")}_getReauthenticationResolver(e){return He("not implemented")}}/**
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
 */async function Cu(n,e){return je(n,"POST","/v1/accounts:resetPassword",Be(n,e))}async function bp(n,e){return je(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function kp(n,e){return er(n,"POST","/v1/accounts:signInWithPassword",Be(n,e))}async function Vp(n,e){return je(n,"POST","/v1/accounts:sendOobCode",Be(n,e))}async function Dp(n,e){return Vp(n,e)}/**
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
 */async function Np(n,e){return er(n,"POST","/v1/accounts:signInWithEmailLink",Be(n,e))}async function Op(n,e){return er(n,"POST","/v1/accounts:signInWithEmailLink",Be(n,e))}/**
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
 */class qn extends Fs{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new qn(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new qn(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hr(e,t,"signInWithPassword",kp);case"emailLink":return Np(e,{email:this._email,oobCode:this._password});default:be(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hr(e,r,"signUpPassword",bp);case"emailLink":return Op(e,{idToken:t,email:this._email,oobCode:this._password});default:be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qt(n,e){return er(n,"POST","/v1/accounts:signInWithIdp",Be(n,e))}/**
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
 */const Lp="http://localhost";class kt extends Fs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Os(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new kt(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Qt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qt(e,t)}buildRequest(){const e={requestUri:Lp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xn(t)}return e}}/**
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
 */function Mp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xp(n){const e=bn(kn(n)).link,t=e?bn(kn(e)).deep_link_id:null,r=bn(kn(n)).deep_link_id;return(r?bn(kn(r)).link:null)||r||t||e||n}class Bs{constructor(e){var t,r,i,o,a,u;const h=bn(kn(e)),d=(t=h.apiKey)!==null&&t!==void 0?t:null,p=(r=h.oobCode)!==null&&r!==void 0?r:null,T=Mp((i=h.mode)!==null&&i!==void 0?i:null);O(d&&p&&T,"argument-error"),this.apiKey=d,this.operation=T,this.code=p,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.lang)!==null&&a!==void 0?a:null,this.tenantId=(u=h.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=xp(e);try{return new Bs(t)}catch{return null}}}/**
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
 */class an{constructor(){this.providerId=an.PROVIDER_ID}static credential(e,t){return qn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Bs.parseLink(t);return O(r,"argument-error"),qn._fromEmailAndCode(e,r.code,r.tenantId)}}an.PROVIDER_ID="password";an.EMAIL_PASSWORD_SIGN_IN_METHOD="password";an.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tr extends bu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ot extends tr{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
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
 */class at extends tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return kt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return at.credential(t,r)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
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
 */class ct extends tr{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com";ct.PROVIDER_ID="github.com";/**
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
 */class ut extends tr{constructor(){super("twitter.com")}static credential(e,t){return kt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ut.credential(t,r)}catch{return null}}}ut.TWITTER_SIGN_IN_METHOD="twitter.com";ut.PROVIDER_ID="twitter.com";/**
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
 */async function Up(n,e){return er(n,"POST","/v1/accounts:signUp",Be(n,e))}/**
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
 */class Vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Ve._fromIdTokenResponse(e,r,i),a=Ha(r);return new Vt({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ha(r);return new Vt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ha(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Gr extends Ze{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Gr(e,t,r,i)}}function ku(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Gr._fromErrorAndOperation(n,o,e,r):o})}async function Fp(n,e,t=!1){const r=await jn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vt._forOperation(n,"link",r)}/**
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
 */async function Bp(n,e,t=!1){const{auth:r}=n;if(Se(r.app))return Promise.reject(We(r));const i="reauthenticate";try{const o=await jn(n,ku(r,i,e,n),t);O(o.idToken,r,"internal-error");const a=xs(o.idToken);O(a,r,"internal-error");const{sub:u}=a;return O(n.uid===u,r,"user-mismatch"),Vt._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&be(r,"user-mismatch"),o}}/**
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
 */async function Vu(n,e,t=!1){if(Se(n.app))return Promise.reject(We(n));const r="signIn",i=await ku(n,r,e),o=await Vt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function jp(n,e){return Vu(et(n),e)}/**
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
 */class js{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?qs._fromServerResponse(e,t):"totpInfo"in t?$s._fromServerResponse(e,t):be(e,"internal-error")}}class qs extends js{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new qs(t)}}class $s extends js{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new $s(t)}}/**
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
 */async function zs(n){const e=et(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Rv(n,e,t){const r=et(n);await Hr(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Dp)}async function Sv(n,e,t){await Cu(we(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zs(n),r})}async function qp(n,e){const t=we(n),r=await Cu(t,{oobCode:e}),i=r.requestType;switch(O(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,t,"internal-error");default:O(r.email,t,"internal-error")}let o=null;return r.mfaInfo&&(o=js._fromServerResponse(et(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function Pv(n,e){const{data:t}=await qp(we(n),e);return t.email}async function Cv(n,e,t){if(Se(n.app))return Promise.reject(We(n));const r=et(n),a=await Hr(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Up).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&zs(n),h}),u=await Vt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function bv(n,e,t){return Se(n.app)?Promise.reject(We(n)):jp(we(n),an.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zs(n),r})}function $p(n,e,t,r){return we(n).onIdTokenChanged(e,t,r)}function zp(n,e,t){return we(n).beforeAuthStateChanged(e,t)}const Wr="__sak";/**
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
 */class Du{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wr,"1"),this.storage.removeItem(Wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Hp=1e3,Gp=10;class Nu extends Du{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);lp()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Gp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Hp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nu.type="LOCAL";const Wp=Nu;/**
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
 */class Ou extends Du{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ou.type="SESSION";const Lu=Ou;/**
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
 */function Kp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ui{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ui(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async d=>d(t.origin,o)),h=await Kp(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ui.receivers=[];/**
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
 */function Hs(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Qp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const d=Hs("",20);i.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(T){const R=T;if(R.data.eventId===d)switch(R.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(R.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Le(){return window}function Yp(n){Le().location.href=n}/**
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
 */function Mu(){return typeof Le().WorkerGlobalScope<"u"&&typeof Le().importScripts=="function"}async function Jp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Zp(){return Mu()?self:null}/**
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
 */const xu="firebaseLocalStorageDb",em=1,Kr="firebaseLocalStorage",Uu="fbase_key";class nr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function li(n,e){return n.transaction([Kr],e?"readwrite":"readonly").objectStore(Kr)}function tm(){const n=indexedDB.deleteDatabase(xu);return new nr(n).toPromise()}function fs(){const n=indexedDB.open(xu,em);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Kr,{keyPath:Uu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Kr)?e(r):(r.close(),await tm(),e(await fs()))})})}async function Ga(n,e,t){const r=li(n,!0).put({[Uu]:e,value:t});return new nr(r).toPromise()}async function nm(n,e){const t=li(n,!1).get(e),r=await new nr(t).toPromise();return r===void 0?null:r.value}function Wa(n,e){const t=li(n,!0).delete(e);return new nr(t).toPromise()}const rm=800,im=3;class Fu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>im)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ui._getInstance(Zp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Jp(),!this.activeServiceWorker)return;this.sender=new Qp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fs();return await Ga(e,Wr,"1"),await Wa(e,Wr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ga(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>nm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=li(i,!1).getAll();return new nr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fu.type="LOCAL";const sm=Fu;new Zn(3e4,6e4);/**
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
 */function om(n,e){return e?Ge(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Gs extends Fs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function am(n){return Vu(n.auth,new Gs(n),n.bypassAuthState)}function cm(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Bp(t,new Gs(n),n.bypassAuthState)}async function um(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Fp(t,new Gs(n),n.bypassAuthState)}/**
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
 */class Bu{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return am;case"linkViaPopup":case"linkViaRedirect":return um;case"reauthViaPopup":case"reauthViaRedirect":return cm;default:be(this.auth,"internal-error")}}resolve(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lm=new Zn(2e3,1e4);class Gt extends Bu{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Gt.currentPopupAction&&Gt.currentPopupAction.cancel(),Gt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Ye(this.filter.length===1,"Popup operations only handle one event");const e=Hs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Oe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Oe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lm.get())};e()}}Gt.currentPopupAction=null;/**
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
 */const hm="pendingRedirect",Or=new Map;class dm extends Bu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Or.get(this.auth._key());if(!e){try{const r=await fm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Or.set(this.auth._key(),e)}return this.bypassAuthState||Or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fm(n,e){const t=gm(e),r=mm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function pm(n,e){Or.set(n._key(),e)}function mm(n){return Ge(n._redirectPersistence)}function gm(n){return Nr(hm,n.config.apiKey,n.name)}async function _m(n,e,t=!1){if(Se(n.app))return Promise.reject(We(n));const r=et(n),i=om(r,e),a=await new dm(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const ym=10*60*1e3;class vm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Em(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ju(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Oe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ym&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ka(e))}saveEventToCache(e){this.cachedEventUids.add(Ka(e)),this.lastProcessedEventTime=Date.now()}}function Ka(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ju({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Em(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ju(n);default:return!1}}/**
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
 */async function Tm(n,e={}){return je(n,"GET","/v1/projects",e)}/**
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
 */const Im=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wm=/^https?/;async function Am(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Tm(n);for(const t of e)try{if(Rm(t))return}catch{}be(n,"unauthorized-domain")}function Rm(n){const e=hs(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!wm.test(t))return!1;if(Im.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Sm=new Zn(3e4,6e4);function Qa(){const n=Le().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Pm(n){return new Promise((e,t)=>{var r,i,o;function a(){Qa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qa(),t(Oe(n,"network-request-failed"))},timeout:Sm.get()})}if(!((i=(r=Le().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Le().gapi)===null||o===void 0)&&o.load)a();else{const u=vp("iframefcb");return Le()[u]=()=>{gapi.load?a():t(Oe(n,"network-request-failed"))},Ru(`${yp()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw Lr=null,e})}let Lr=null;function Cm(n){return Lr=Lr||Pm(n),Lr}/**
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
 */const bm=new Zn(5e3,15e3),km="__/auth/iframe",Vm="emulator/auth/iframe",Dm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Om(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ms(e,Vm):`https://${n.config.authDomain}/${km}`,r={apiKey:e.apiKey,appName:n.name,v:on},i=Nm.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Xn(r).slice(1)}`}async function Lm(n){const e=await Cm(n),t=Le().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:Om(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dm,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Oe(n,"network-request-failed"),u=Le().setTimeout(()=>{o(a)},bm.get());function h(){Le().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const Mm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xm=500,Um=600,Fm="_blank",Bm="http://localhost";class Ya{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jm(n,e,t,r=xm,i=Um){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},Mm),{width:r.toString(),height:i.toString(),top:o,left:a}),d=ve().toLowerCase();t&&(u=yu(d)?Fm:t),gu(d)&&(e=e||Bm,h.scrollbars="yes");const p=Object.entries(h).reduce((R,[P,D])=>`${R}${P}=${D},`,"");if(up(d)&&u!=="_self")return qm(e||"",u),new Ya(null);const T=window.open(e||"",u,p);O(T,n,"popup-blocked");try{T.focus()}catch{}return new Ya(T)}function qm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const $m="__/auth/handler",zm="emulator/auth/handler",Hm=encodeURIComponent("fac");async function Ja(n,e,t,r,i,o){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:on,eventId:i};if(e instanceof bu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Pd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,T]of Object.entries({}))a[p]=T}if(e instanceof tr){const p=e.getScopes().filter(T=>T!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const h=await n._getAppCheckToken(),d=h?`#${Hm}=${encodeURIComponent(h)}`:"";return`${Gm(n)}?${Xn(u).slice(1)}${d}`}function Gm({config:n}){return n.emulator?Ms(n,zm):`https://${n.authDomain}/${$m}`}/**
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
 */const ts="webStorageSupport";class Wm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lu,this._completeRedirectFn=_m,this._overrideRedirectResult=pm}async _openPopup(e,t,r,i){var o;Ye((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Ja(e,t,r,hs(),i);return jm(e,a,Hs())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Ja(e,t,r,hs(),i);return Yp(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Ye(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Lm(e),r=new vm(e);return t.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ts,{type:ts},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ts];a!==void 0&&t(!!a),be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Am(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wu()||_u()||Us()}}const Km=Wm;var Xa="@firebase/auth",Za="1.10.1";/**
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
 */class Qm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ym(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jm(n){Jt(new bt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;O(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Au(n)},d=new mp(r,i,o,h);return Rp(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Jt(new bt("auth-internal",e=>{const t=et(e.getProvider("auth").getImmediate());return(r=>new Qm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Xa,Za,Ym(n)),ft(Xa,Za,"esm2017")}/**
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
 */const Xm=5*60,Zm=nu("authIdTokenMaxAge")||Xm;let ec=null;const eg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Zm)return;const i=t==null?void 0:t.token;ec!==i&&(ec=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tg(n=Ns()){const e=Ds(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ap(n,{popupRedirectResolver:Km,persistence:[sm,Wp,Lu]}),r=nu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=eg(o.toString());zp(t,a,()=>a(t.currentUser)),$p(t,u=>a(u))}}const i=eu("auth");return i&&Sp(t,`http://${i}`),t}function ng(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}gp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Oe("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",ng().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jm("Browser");var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pt,qu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,E,w){for(var g=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)g[qe-2]=arguments[qe];return m.prototype[E].apply(y,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],E=v.g[2];var w=v.g[3],g=m+(w^_&(E^w))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[2]+606105819&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[6]+2821735955&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[10]+4294925233&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[14]+2792965006&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^w&(_^E))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[11]+643717713&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[15]+3634488961&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[3]+4107603335&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[7]+1735328473&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^w)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[11]+1839030562&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[7]+4139469664&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[3]+3572445317&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[15]+530742520&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~w))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[14]+2878612391&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[10]+4293915773&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[6]+2734768916&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[2]+718787259&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,y=this.B,E=this.h,w=0;w<m;){if(E==0)for(;w<=_;)i(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<m;)if(y[E++]=v.charCodeAt(w++),E==this.blockSize){i(this,y),E=0;break}}else for(;w<m;)if(y[E++]=v[w++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)v[_++]=this.g[m]>>>y&255;return v};function o(v,m){var _=u;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;for(var _=[],y=!0,E=v.length-1;0<=E;E--){var w=v[E]|0;y&&w==m||(_[E]=w,y=!1)}this.g=_}var u={};function h(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return T;if(0>v)return k(d(-v));for(var m=[],_=1,y=0;v>=_;y++)m[y]=v/_|0,_*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return k(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=T,E=0;E<v.length;E+=8){var w=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+w),m);8>w?(w=d(Math.pow(m,w)),y=y.j(w).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var T=h(0),R=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-k(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(N(this))return"-"+k(this).toString(v);for(var m=d(Math.pow(v,6)),_=this,y="";;){var E=ee(_,m).g;_=W(_,E.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,D(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function N(v){return v.h==-1}n.l=function(v){return v=W(this,v),N(v)?-1:D(v)?0:1};function k(v){for(var m=v.g.length,_=[],y=0;y<m;y++)_[y]=~v.g[y];return new a(_,~v.h).add(R)}n.abs=function(){return N(this)?k(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0,E=0;E<=m;E++){var w=y+(this.i(E)&65535)+(v.i(E)&65535),g=(w>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,w&=65535,g&=65535,_[E]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function W(v,m){return v.add(k(m))}n.j=function(v){if(D(this)||D(v))return T;if(N(this))return N(v)?k(this).j(k(v)):k(k(this).j(v));if(N(v))return k(this.j(k(v)));if(0>this.l(P)&&0>v.l(P))return d(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var w=this.i(y)>>>16,g=this.i(y)&65535,qe=v.i(E)>>>16,dn=v.i(E)&65535;_[2*y+2*E]+=g*dn,z(_,2*y+2*E),_[2*y+2*E+1]+=w*dn,z(_,2*y+2*E+1),_[2*y+2*E+1]+=g*qe,z(_,2*y+2*E+1),_[2*y+2*E+2]+=w*qe,z(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function z(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function H(v,m){this.g=v,this.h=m}function ee(v,m){if(D(m))throw Error("division by zero");if(D(v))return new H(T,T);if(N(v))return m=ee(k(v),m),new H(k(m.g),k(m.h));if(N(m))return m=ee(v,k(m)),new H(k(m.g),m.h);if(30<v.g.length){if(N(v)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=m;0>=y.l(v);)_=Re(_),y=Re(y);var E=te(_,1),w=te(y,1);for(y=te(y,2),_=te(_,2);!D(y);){var g=w.add(y);0>=g.l(v)&&(E=E.add(_),w=g),y=te(y,1),_=te(_,1)}return m=W(v,E.j(m)),new H(E,m)}for(E=T;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(_),g=w.j(m);N(g)||0<g.l(v);)_-=y,w=d(_),g=w.j(m);D(w)&&(w=R),E=E.add(w),v=W(v,g)}return new H(E,v)}n.A=function(v){return ee(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function Re(v){for(var m=v.g.length+1,_=[],y=0;y<m;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function te(v,m){var _=m>>5;m%=32;for(var y=v.g.length-_,E=[],w=0;w<y;w++)E[w]=0<m?v.i(w+_)>>>m|v.i(w+_+1)<<32-m:v.i(w+_);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,pt=a}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});var Pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $u,Vn,zu,Mr,ps,Hu,Gu,Wu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,l){return s==Array.prototype||s==Object.prototype||(s[c]=l.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pr=="object"&&Pr];for(var c=0;c<s.length;++c){var l=s[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var l=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in l))break e;l=l[I]}s=s[s.length-1],f=l[s],c=c(f),c!=f&&c!=null&&e(l,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var l=0,f=!1,I={next:function(){if(!f&&l<s.length){var A=l++;return{value:c(A,s[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,l){return s.call.apply(s.bind,arguments)}function T(s,c,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(c,I)}}return function(){return s.apply(c,arguments)}}function R(s,c,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:T,R.apply(null,arguments)}function P(s,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function D(s,c){function l(){}l.prototype=c.prototype,s.aa=c.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,I,A){for(var b=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)b[Q-2]=arguments[Q];return c.prototype[I].apply(f,b)}}function N(s){const c=s.length;if(0<c){const l=Array(c);for(let f=0;f<c;f++)l[f]=s[f];return l}return[]}function k(s,c){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const I=s.length||0,A=f.length||0;s.length=I+A;for(let b=0;b<A;b++)s[I+b]=f[b]}else s.push(f)}}class W{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function z(s){return/^[\s\xa0]*$/.test(s)}function H(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function ee(s){return ee[" "](s),s}ee[" "]=function(){};var Re=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function te(s,c,l){for(const f in s)c.call(l,s[f],f,s)}function v(s,c){for(const l in s)c.call(void 0,s[l],l,s)}function m(s){const c={};for(const l in s)c[l]=s[l];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let l,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(l in f)s[l]=f[l];for(let A=0;A<_.length;A++)l=_[A],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function E(s){var c=1;s=s.split(":");const l=[];for(;0<c&&s.length;)l.push(s.shift()),c--;return s.length&&l.push(s.join(":")),l}function w(s){u.setTimeout(()=>{throw s},0)}function g(){var s=wi;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class qe{constructor(){this.h=this.g=null}add(c,l){const f=dn.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var dn=new W(()=>new yh,s=>s.reset());class yh{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let fn,pn=!1,wi=new qe,So=()=>{const s=u.Promise.resolve(void 0);fn=()=>{s.then(vh)}};var vh=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){w(l)}var c=dn;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}pn=!1};function tt(){this.s=this.s,this.C=this.C}tt.prototype.s=!1,tt.prototype.ma=function(){this.s||(this.s=!0,this.N())},tt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Eh=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return s}();function mn(s,c){if(de.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(Re){e:{try{ee(c.nodeName);var I=!0;break e}catch{}I=!1}I||(c=null)}}else l=="mouseover"?c=s.fromElement:l=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Th[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&mn.aa.h.call(this)}}D(mn,de);var Th={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var ar="closure_listenable_"+(1e6*Math.random()|0),Ih=0;function wh(s,c,l,f,I){this.listener=s,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=I,this.key=++Ih,this.da=this.fa=!1}function cr(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ur(s){this.src=s,this.g={},this.h=0}ur.prototype.add=function(s,c,l,f,I){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var b=Ri(s,c,f,I);return-1<b?(c=s[b],l||(c.fa=!1)):(c=new wh(c,this.src,A,!!f,I),c.fa=l,s.push(c)),c};function Ai(s,c){var l=c.type;if(l in s.g){var f=s.g[l],I=Array.prototype.indexOf.call(f,c,void 0),A;(A=0<=I)&&Array.prototype.splice.call(f,I,1),A&&(cr(c),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Ri(s,c,l,f){for(var I=0;I<s.length;++I){var A=s[I];if(!A.da&&A.listener==c&&A.capture==!!l&&A.ha==f)return I}return-1}var Si="closure_lm_"+(1e6*Math.random()|0),Pi={};function Po(s,c,l,f,I){if(Array.isArray(c)){for(var A=0;A<c.length;A++)Po(s,c[A],l,f,I);return null}return l=ko(l),s&&s[ar]?s.K(c,l,d(f)?!!f.capture:!1,I):Ah(s,c,l,!1,f,I)}function Ah(s,c,l,f,I,A){if(!c)throw Error("Invalid event type");var b=d(I)?!!I.capture:!!I,Q=bi(s);if(Q||(s[Si]=Q=new ur(s)),l=Q.add(c,l,f,b,A),l.proxy)return l;if(f=Rh(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)Eh||(I=b),I===void 0&&(I=!1),s.addEventListener(c.toString(),f,I);else if(s.attachEvent)s.attachEvent(bo(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Rh(){function s(l){return c.call(s.src,s.listener,l)}const c=Sh;return s}function Co(s,c,l,f,I){if(Array.isArray(c))for(var A=0;A<c.length;A++)Co(s,c[A],l,f,I);else f=d(f)?!!f.capture:!!f,l=ko(l),s&&s[ar]?(s=s.i,c=String(c).toString(),c in s.g&&(A=s.g[c],l=Ri(A,l,f,I),-1<l&&(cr(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete s.g[c],s.h--)))):s&&(s=bi(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Ri(c,l,f,I)),(l=-1<s?c[s]:null)&&Ci(l))}function Ci(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[ar])Ai(c.i,s);else{var l=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(l,f,s.capture):c.detachEvent?c.detachEvent(bo(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=bi(c))?(Ai(l,s),l.h==0&&(l.src=null,c[Si]=null)):cr(s)}}}function bo(s){return s in Pi?Pi[s]:Pi[s]="on"+s}function Sh(s,c){if(s.da)s=!0;else{c=new mn(c,this);var l=s.listener,f=s.ha||s.src;s.fa&&Ci(s),s=l.call(f,c)}return s}function bi(s){return s=s[Si],s instanceof ur?s:null}var ki="__closure_events_fn_"+(1e9*Math.random()>>>0);function ko(s){return typeof s=="function"?s:(s[ki]||(s[ki]=function(c){return s.handleEvent(c)}),s[ki])}function fe(){tt.call(this),this.i=new ur(this),this.M=this,this.F=null}D(fe,tt),fe.prototype[ar]=!0,fe.prototype.removeEventListener=function(s,c,l,f){Co(this,s,c,l,f)};function Ee(s,c){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new de(c,s);else if(c instanceof de)c.target=c.target||s;else{var I=c;c=new de(f,s),y(c,I)}if(I=!0,l)for(var A=l.length-1;0<=A;A--){var b=c.g=l[A];I=lr(b,f,!0,c)&&I}if(b=c.g=s,I=lr(b,f,!0,c)&&I,I=lr(b,f,!1,c)&&I,l)for(A=0;A<l.length;A++)b=c.g=l[A],I=lr(b,f,!1,c)&&I}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var l=s.g[c],f=0;f<l.length;f++)cr(l[f]);delete s.g[c],s.h--}}this.F=null},fe.prototype.K=function(s,c,l,f){return this.i.add(String(s),c,!1,l,f)},fe.prototype.L=function(s,c,l,f){return this.i.add(String(s),c,!0,l,f)};function lr(s,c,l,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var I=!0,A=0;A<c.length;++A){var b=c[A];if(b&&!b.da&&b.capture==l){var Q=b.listener,ce=b.ha||b.src;b.fa&&Ai(s.i,b),I=Q.call(ce,f)!==!1&&I}}return I&&!f.defaultPrevented}function Vo(s,c,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(s,c||0)}function Do(s){s.g=Vo(()=>{s.g=null,s.i&&(s.i=!1,Do(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Ph extends tt{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Do(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(s){tt.call(this),this.h=s,this.g={}}D(gn,tt);var No=[];function Oo(s){te(s.g,function(c,l){this.g.hasOwnProperty(l)&&Ci(c)},s),s.g={}}gn.prototype.N=function(){gn.aa.N.call(this),Oo(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vi=u.JSON.stringify,Ch=u.JSON.parse,bh=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Di(){}Di.prototype.h=null;function Lo(s){return s.h||(s.h=s.i())}function Mo(){}var _n={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ni(){de.call(this,"d")}D(Ni,de);function Oi(){de.call(this,"c")}D(Oi,de);var It={},xo=null;function hr(){return xo=xo||new fe}It.La="serverreachability";function Uo(s){de.call(this,It.La,s)}D(Uo,de);function yn(s){const c=hr();Ee(c,new Uo(c))}It.STAT_EVENT="statevent";function Fo(s,c){de.call(this,It.STAT_EVENT,s),this.stat=c}D(Fo,de);function Te(s){const c=hr();Ee(c,new Fo(c,s))}It.Ma="timingevent";function Bo(s,c){de.call(this,It.Ma,s),this.size=c}D(Bo,de);function vn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},c)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function kh(s,c,l,f,I,A){s.info(function(){if(s.g)if(A)for(var b="",Q=A.split("&"),ce=0;ce<Q.length;ce++){var G=Q[ce].split("=");if(1<G.length){var pe=G[0];G=G[1];var me=pe.split("_");b=2<=me.length&&me[1]=="type"?b+(pe+"="+G+"&"):b+(pe+"=redacted&")}}else b=null;else b=A;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+c+`
`+l+`
`+b})}function Vh(s,c,l,f,I,A,b){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+c+`
`+l+`
`+A+" "+b})}function Ut(s,c,l,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Nh(s,l)+(f?" "+f:"")})}function Dh(s,c){s.info(function(){return"TIMEOUT: "+c})}En.prototype.info=function(){};function Nh(s,c){if(!s.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var A=I[0];if(A!="noop"&&A!="stop"&&A!="close")for(var b=1;b<I.length;b++)I[b]=""}}}}return Vi(l)}catch{return c}}var dr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Li;function fr(){}D(fr,Di),fr.prototype.g=function(){return new XMLHttpRequest},fr.prototype.i=function(){return{}},Li=new fr;function nt(s,c,l,f){this.j=s,this.i=c,this.l=l,this.R=f||1,this.U=new gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qo}function qo(){this.i=null,this.g="",this.h=!1}var $o={},Mi={};function xi(s,c,l){s.L=1,s.v=_r($e(c)),s.m=l,s.P=!0,zo(s,null)}function zo(s,c){s.F=Date.now(),pr(s),s.A=$e(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ia(l.i,"t",f),s.C=0,l=s.j.J,s.h=new qo,s.g=Ia(s.j,l?c:null,!s.m),0<s.O&&(s.M=new Ph(R(s.Y,s,s.g),s.O)),c=s.U,l=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(No[0]=I.toString()),I=No);for(var A=0;A<I.length;A++){var b=Po(l,I[A],f||c.handleEvent,!1,c.h||c);if(!b)break;c.g[b.key]=b}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),yn(),kh(s.i,s.u,s.A,s.l,s.R,s.m)}nt.prototype.ca=function(s){s=s.target;const c=this.M;c&&ze(s)==3?c.j():this.Y(s)},nt.prototype.Y=function(s){try{if(s==this.g)e:{const me=ze(this.g);var c=this.g.Ba();const jt=this.g.Z();if(!(3>me)&&(me!=3||this.g&&(this.h.h||this.g.oa()||ha(this.g)))){this.J||me!=4||c==7||(c==8||0>=jt?yn(3):yn(2)),Ui(this);var l=this.g.Z();this.X=l;t:if(Ho(this)){var f=ha(this.g);s="";var I=f.length,A=ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wt(this),Tn(this);var b="";break t}this.h.i=new u.TextDecoder}for(c=0;c<I;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(A&&c==I-1)});f.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,Vh(this.i,this.u,this.A,this.l,this.R,me,l),this.o){if(this.T&&!this.K){t:{if(this.g){var Q,ce=this.g;if((Q=ce.g?ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(Q)){var G=Q;break t}}G=null}if(l=G)Ut(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fi(this,l);else{this.o=!1,this.s=3,Te(12),wt(this),Tn(this);break e}}if(this.P){l=!0;let ke;for(;!this.J&&this.C<b.length;)if(ke=Oh(this,b),ke==Mi){me==4&&(this.s=4,Te(14),l=!1),Ut(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==$o){this.s=4,Te(15),Ut(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else Ut(this.i,this.l,ke,null),Fi(this,ke);if(Ho(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||b.length!=0||this.h.h||(this.s=1,Te(16),l=!1),this.o=this.o&&l,!l)Ut(this.i,this.l,b,"[Invalid Chunked Response]"),wt(this),Tn(this);else if(0<b.length&&!this.W){this.W=!0;var pe=this.j;pe.g==this&&pe.ba&&!pe.M&&(pe.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),Hi(pe),pe.M=!0,Te(11))}}else Ut(this.i,this.l,b,null),Fi(this,b);me==4&&wt(this),this.o&&!this.J&&(me==4?ya(this.j,this):(this.o=!1,pr(this)))}else Jh(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),wt(this),Tn(this)}}}catch{}finally{}};function Ho(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Oh(s,c){var l=s.C,f=c.indexOf(`
`,l);return f==-1?Mi:(l=Number(c.substring(l,f)),isNaN(l)?$o:(f+=1,f+l>c.length?Mi:(c=c.slice(f,f+l),s.C=f+l,c)))}nt.prototype.cancel=function(){this.J=!0,wt(this)};function pr(s){s.S=Date.now()+s.I,Go(s,s.I)}function Go(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=vn(R(s.ba,s),c)}function Ui(s){s.B&&(u.clearTimeout(s.B),s.B=null)}nt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Dh(this.i,this.A),this.L!=2&&(yn(),Te(17)),wt(this),this.s=2,Tn(this)):Go(this,this.S-s)};function Tn(s){s.j.G==0||s.J||ya(s.j,s)}function wt(s){Ui(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,Oo(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Fi(s,c){try{var l=s.j;if(l.G!=0&&(l.g==s||Bi(l.h,s))){if(!s.K&&Bi(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)wr(l),Tr(l);else break e;zi(l),Te(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=vn(R(l.Za,l),6e3));if(1>=Qo(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Rt(l,11)}else if((s.K||l.g==s)&&wr(l),!z(c))for(I=l.Da.g.parse(c),c=0;c<I.length;c++){let G=I[c];if(l.T=G[0],G=G[1],l.G==2)if(G[0]=="c"){l.K=G[1],l.ia=G[2];const pe=G[3];pe!=null&&(l.la=pe,l.j.info("VER="+l.la));const me=G[4];me!=null&&(l.Aa=me,l.j.info("SVER="+l.Aa));const jt=G[5];jt!=null&&typeof jt=="number"&&0<jt&&(f=1.5*jt,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const ke=s.g;if(ke){const Rr=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rr){var A=f.h;A.g||Rr.indexOf("spdy")==-1&&Rr.indexOf("quic")==-1&&Rr.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(ji(A,A.h),A.h=null))}if(f.D){const Gi=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;Gi&&(f.ya=Gi,Y(f.I,f.D,Gi))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var b=s;if(f.qa=Ta(f,f.J?f.ia:null,f.W),b.K){Yo(f.h,b);var Q=b,ce=f.L;ce&&(Q.I=ce),Q.B&&(Ui(Q),pr(Q)),f.g=b}else ga(f);0<l.i.length&&Ir(l)}else G[0]!="stop"&&G[0]!="close"||Rt(l,7);else l.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?Rt(l,7):$i(l):G[0]!="noop"&&l.l&&l.l.ta(G),l.v=0)}}yn(4)}catch{}}var Lh=class{constructor(s,c){this.g=s,this.map=c}};function Wo(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ko(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Qo(s){return s.h?1:s.g?s.g.size:0}function Bi(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function ji(s,c){s.g?s.g.add(c):s.h=c}function Yo(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Wo.prototype.cancel=function(){if(this.i=Jo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Jo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const l of s.g.values())c=c.concat(l.D);return c}return N(s.i)}function Mh(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],l=s.length,f=0;f<l;f++)c.push(s[f]);return c}c=[],l=0;for(f in s)c[l++]=s[f];return c}function xh(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var l=0;l<s;l++)c.push(l);return c}c=[],l=0;for(const f in s)c[l++]=f;return c}}}function Xo(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var l=xh(s),f=Mh(s),I=f.length,A=0;A<I;A++)c.call(void 0,f[A],l&&l[A],s)}var Zo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uh(s,c){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),I=null;if(0<=f){var A=s[l].substring(0,f);I=s[l].substring(f+1)}else A=s[l];c(A,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function At(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof At){this.h=s.h,mr(this,s.j),this.o=s.o,this.g=s.g,gr(this,s.s),this.l=s.l;var c=s.i,l=new An;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),ea(this,l),this.m=s.m}else s&&(c=String(s).match(Zo))?(this.h=!1,mr(this,c[1]||"",!0),this.o=In(c[2]||""),this.g=In(c[3]||"",!0),gr(this,c[4]),this.l=In(c[5]||"",!0),ea(this,c[6]||"",!0),this.m=In(c[7]||"")):(this.h=!1,this.i=new An(null,this.h))}At.prototype.toString=function(){var s=[],c=this.j;c&&s.push(wn(c,ta,!0),":");var l=this.g;return(l||c=="file")&&(s.push("//"),(c=this.o)&&s.push(wn(c,ta,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(wn(l,l.charAt(0)=="/"?jh:Bh,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",wn(l,$h)),s.join("")};function $e(s){return new At(s)}function mr(s,c,l){s.j=l?In(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function gr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function ea(s,c,l){c instanceof An?(s.i=c,zh(s.i,s.h)):(l||(c=wn(c,qh)),s.i=new An(c,s.h))}function Y(s,c,l){s.i.set(c,l)}function _r(s){return Y(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function In(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function wn(s,c,l){return typeof s=="string"?(s=encodeURI(s).replace(c,Fh),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Fh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ta=/[#\/\?@]/g,Bh=/[#\?:]/g,jh=/[#\?]/g,qh=/[#\?@]/g,$h=/#/g;function An(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function rt(s){s.g||(s.g=new Map,s.h=0,s.i&&Uh(s.i,function(c,l){s.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=An.prototype,n.add=function(s,c){rt(this),this.i=null,s=Ft(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(c),this.h+=1,this};function na(s,c){rt(s),c=Ft(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function ra(s,c){return rt(s),c=Ft(s,c),s.g.has(c)}n.forEach=function(s,c){rt(this),this.g.forEach(function(l,f){l.forEach(function(I){s.call(c,I,f,this)},this)},this)},n.na=function(){rt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){const I=s[f];for(let A=0;A<I.length;A++)l.push(c[f])}return l},n.V=function(s){rt(this);let c=[];if(typeof s=="string")ra(this,s)&&(c=c.concat(this.g.get(Ft(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)c=c.concat(s[l])}return c},n.set=function(s,c){return rt(this),this.i=null,s=Ft(this,s),ra(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function ia(s,c,l){na(s,c),0<l.length&&(s.i=null,s.g.set(Ft(s,c),N(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];const A=encodeURIComponent(String(f)),b=this.V(f);for(f=0;f<b.length;f++){var I=A;b[f]!==""&&(I+="="+encodeURIComponent(String(b[f]))),s.push(I)}}return this.i=s.join("&")};function Ft(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function zh(s,c){c&&!s.j&&(rt(s),s.i=null,s.g.forEach(function(l,f){var I=f.toLowerCase();f!=I&&(na(this,f),ia(this,I,l))},s)),s.j=c}function Hh(s,c){const l=new En;if(u.Image){const f=new Image;f.onload=P(it,l,"TestLoadImage: loaded",!0,c,f),f.onerror=P(it,l,"TestLoadImage: error",!1,c,f),f.onabort=P(it,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=P(it,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Gh(s,c){const l=new En,f=new AbortController,I=setTimeout(()=>{f.abort(),it(l,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(A=>{clearTimeout(I),A.ok?it(l,"TestPingServer: ok",!0,c):it(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(I),it(l,"TestPingServer: error",!1,c)})}function it(s,c,l,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(l)}catch{}}function Wh(){this.g=new bh}function Kh(s,c,l){const f=l||"";try{Xo(s,function(I,A){let b=I;d(I)&&(b=Vi(I)),c.push(f+A+"="+encodeURIComponent(b))})}catch(I){throw c.push(f+"type="+encodeURIComponent("_badmap")),I}}function yr(s){this.l=s.Ub||null,this.j=s.eb||!1}D(yr,Di),yr.prototype.g=function(){return new vr(this.l,this.j)},yr.prototype.i=function(s){return function(){return s}}({});function vr(s,c){fe.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(vr,fe),n=vr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Sn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sa(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function sa(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Rn(this):Sn(this),this.readyState==3&&sa(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Rn(this))},n.Qa=function(s){this.g&&(this.response=s,Rn(this))},n.ga=function(){this.g&&Rn(this)};function Rn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Sn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=c.next();return s.join(`\r
`)};function Sn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function oa(s){let c="";return te(s,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function qi(s,c,l){e:{for(f in l){var f=!1;break e}f=!0}f||(l=oa(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):Y(s,c,l))}function X(s){fe.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(X,fe);var Qh=/^https?$/i,Yh=["POST","PUT"];n=X.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Li.g(),this.v=this.o?Lo(this.o):Lo(Li),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(A){aa(this,A);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)l.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())l.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),I=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Yh,c,void 0))||f||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,b]of l)this.g.setRequestHeader(A,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{la(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){aa(this,A)}};function aa(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,ca(s),Er(s)}function ca(s){s.A||(s.A=!0,Ee(s,"complete"),Ee(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ee(this,"complete"),Ee(this,"abort"),Er(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Er(this,!0)),X.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ua(this):this.bb())},n.bb=function(){ua(this)};function ua(s){if(s.h&&typeof a<"u"&&(!s.v[1]||ze(s)!=4||s.Z()!=2)){if(s.u&&ze(s)==4)Vo(s.Ea,0,s);else if(Ee(s,"readystatechange"),ze(s)==4){s.h=!1;try{const b=s.Z();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var f;if(f=b===0){var I=String(s.D).match(Zo)[1]||null;!I&&u.self&&u.self.location&&(I=u.self.location.protocol.slice(0,-1)),f=!Qh.test(I?I.toLowerCase():"")}l=f}if(l)Ee(s,"complete"),Ee(s,"success");else{s.m=6;try{var A=2<ze(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",ca(s)}}finally{Er(s)}}}}function Er(s,c){if(s.g){la(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Ee(s,"ready");try{l.onreadystatechange=f}catch{}}}function la(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function ze(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<ze(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Ch(c)}};function ha(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Jh(s){const c={};s=(s.g&&2<=ze(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(z(s[f]))continue;var l=E(s[f]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=c[I]||[];c[I]=A,A.push(l)}v(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pn(s,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||c}function da(s){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pn("baseRetryDelayMs",5e3,s),this.cb=Pn("retryDelaySeedMs",1e4,s),this.Wa=Pn("forwardChannelMaxRetries",2,s),this.wa=Pn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Wo(s&&s.concurrentRequestLimit),this.Da=new Wh,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=da.prototype,n.la=8,n.G=1,n.connect=function(s,c,l,f){Te(0),this.W=s,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Ta(this,null,this.W),Ir(this)};function $i(s){if(fa(s),s.G==3){var c=s.U++,l=$e(s.I);if(Y(l,"SID",s.K),Y(l,"RID",c),Y(l,"TYPE","terminate"),Cn(s,l),c=new nt(s,s.j,c),c.L=2,c.v=_r($e(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=Ia(c.j,null),c.g.ea(c.v)),c.F=Date.now(),pr(c)}Ea(s)}function Tr(s){s.g&&(Hi(s),s.g.cancel(),s.g=null)}function fa(s){Tr(s),s.u&&(u.clearTimeout(s.u),s.u=null),wr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function Ir(s){if(!Ko(s.h)&&!s.s){s.s=!0;var c=s.Ga;fn||So(),pn||(fn(),pn=!0),wi.add(c,s),s.B=0}}function Xh(s,c){return Qo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=vn(R(s.Ga,s,c),va(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new nt(this,this.j,s);let A=this.o;if(this.S&&(A?(A=m(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(I.H=A,A=null),this.P)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=ma(this,I,c),l=$e(this.I),Y(l,"RID",s),Y(l,"CVER",22),this.D&&Y(l,"X-HTTP-Session-Id",this.D),Cn(this,l),A&&(this.O?c="headers="+encodeURIComponent(String(oa(A)))+"&"+c:this.m&&qi(l,this.m,A)),ji(this.h,I),this.Ua&&Y(l,"TYPE","init"),this.P?(Y(l,"$req",c),Y(l,"SID","null"),I.T=!0,xi(I,l,null)):xi(I,l,c),this.G=2}}else this.G==3&&(s?pa(this,s):this.i.length==0||Ko(this.h)||pa(this))};function pa(s,c){var l;c?l=c.l:l=s.U++;const f=$e(s.I);Y(f,"SID",s.K),Y(f,"RID",l),Y(f,"AID",s.T),Cn(s,f),s.m&&s.o&&qi(f,s.m,s.o),l=new nt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),c&&(s.i=c.D.concat(s.i)),c=ma(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),ji(s.h,l),xi(l,f,c)}function Cn(s,c){s.H&&te(s.H,function(l,f){Y(c,f,l)}),s.l&&Xo({},function(l,f){Y(c,f,l)})}function ma(s,c,l){l=Math.min(s.i.length,l);var f=s.l?R(s.l.Na,s.l,s):null;e:{var I=s.i;let A=-1;for(;;){const b=["count="+l];A==-1?0<l?(A=I[0].g,b.push("ofs="+A)):A=0:b.push("ofs="+A);let Q=!0;for(let ce=0;ce<l;ce++){let G=I[ce].g;const pe=I[ce].map;if(G-=A,0>G)A=Math.max(0,I[ce].g-100),Q=!1;else try{Kh(pe,b,"req"+G+"_")}catch{f&&f(pe)}}if(Q){f=b.join("&");break e}}}return s=s.i.splice(0,l),c.D=s,f}function ga(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;fn||So(),pn||(fn(),pn=!0),wi.add(c,s),s.v=0}}function zi(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=vn(R(s.Fa,s),va(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,_a(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=vn(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),Tr(this),_a(this))};function Hi(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function _a(s){s.g=new nt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=$e(s.qa);Y(c,"RID","rpc"),Y(c,"SID",s.K),Y(c,"AID",s.T),Y(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&Y(c,"TO",s.ja),Y(c,"TYPE","xmlhttp"),Cn(s,c),s.m&&s.o&&qi(c,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=_r($e(c)),l.m=null,l.P=!0,zo(l,s)}n.Za=function(){this.C!=null&&(this.C=null,Tr(this),zi(this),Te(19))};function wr(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function ya(s,c){var l=null;if(s.g==c){wr(s),Hi(s),s.g=null;var f=2}else if(Bi(s.h,c))l=c.D,Yo(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var I=s.B;f=hr(),Ee(f,new Bo(f,l)),Ir(s)}else ga(s);else if(I=c.s,I==3||I==0&&0<c.X||!(f==1&&Xh(s,c)||f==2&&zi(s)))switch(l&&0<l.length&&(c=s.h,c.i=c.i.concat(l)),I){case 1:Rt(s,5);break;case 4:Rt(s,10);break;case 3:Rt(s,6);break;default:Rt(s,2)}}}function va(s,c){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*c}function Rt(s,c){if(s.j.info("Error code "+c),c==2){var l=R(s.fb,s),f=s.Xa;const I=!f;f=new At(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||mr(f,"https"),_r(f),I?Hh(f.toString(),l):Gh(f.toString(),l)}else Te(2);s.G=0,s.l&&s.l.sa(c),Ea(s),fa(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function Ea(s){if(s.G=0,s.ka=[],s.l){const c=Jo(s.h);(c.length!=0||s.i.length!=0)&&(k(s.ka,c),k(s.ka,s.i),s.h.i.length=0,N(s.i),s.i.length=0),s.l.ra()}}function Ta(s,c,l){var f=l instanceof At?$e(l):new At(l);if(f.g!="")c&&(f.g=c+"."+f.g),gr(f,f.s);else{var I=u.location;f=I.protocol,c=c?c+"."+I.hostname:I.hostname,I=+I.port;var A=new At(null);f&&mr(A,f),c&&(A.g=c),I&&gr(A,I),l&&(A.l=l),f=A}return l=s.D,c=s.ya,l&&c&&Y(f,l,c),Y(f,"VER",s.la),Cn(s,f),f}function Ia(s,c,l){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new X(new yr({eb:l})):new X(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wa(){}n=wa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ar(){}Ar.prototype.g=function(s,c){return new Ae(s,c)};function Ae(s,c){fe.call(this),this.g=new da(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!z(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!z(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Bt(this)}D(Ae,fe),Ae.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ae.prototype.close=function(){$i(this.g)},Ae.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Vi(s),s=l);c.i.push(new Lh(c.Ya++,s)),c.G==3&&Ir(c)},Ae.prototype.N=function(){this.g.l=null,delete this.j,$i(this.g),delete this.g,Ae.aa.N.call(this)};function Aa(s){Ni.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const l in c){s=l;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}D(Aa,Ni);function Ra(){Oi.call(this),this.status=1}D(Ra,Oi);function Bt(s){this.g=s}D(Bt,wa),Bt.prototype.ua=function(){Ee(this.g,"a")},Bt.prototype.ta=function(s){Ee(this.g,new Aa(s))},Bt.prototype.sa=function(s){Ee(this.g,new Ra)},Bt.prototype.ra=function(){Ee(this.g,"b")},Ar.prototype.createWebChannel=Ar.prototype.g,Ae.prototype.send=Ae.prototype.o,Ae.prototype.open=Ae.prototype.m,Ae.prototype.close=Ae.prototype.close,Wu=function(){return new Ar},Gu=function(){return hr()},Hu=It,ps={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},dr.NO_ERROR=0,dr.TIMEOUT=8,dr.HTTP_ERROR=6,Mr=dr,jo.COMPLETE="complete",zu=jo,Mo.EventType=_n,_n.OPEN="a",_n.CLOSE="b",_n.ERROR="c",_n.MESSAGE="d",fe.prototype.listen=fe.prototype.K,Vn=Mo,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,$u=X}).apply(typeof Pr<"u"?Pr:typeof self<"u"?self:typeof window<"u"?window:{});const nc="@firebase/firestore",rc="4.7.11";/**
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
 */class _e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
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
 */let cn="11.6.1";/**
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
 */const Dt=new ks("@firebase/firestore");function qt(){return Dt.logLevel}function V(n,...e){if(Dt.logLevel<=j.DEBUG){const t=e.map(Ws);Dt.debug(`Firestore (${cn}): ${n}`,...t)}}function Je(n,...e){if(Dt.logLevel<=j.ERROR){const t=e.map(Ws);Dt.error(`Firestore (${cn}): ${n}`,...t)}}function Xt(n,...e){if(Dt.logLevel<=j.WARN){const t=e.map(Ws);Dt.warn(`Firestore (${cn}): ${n}`,...t)}}function Ws(n){if(typeof n=="string")return n;try{/**
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
 */function x(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ku(n,r,t)}function Ku(n,e,t){let r=`FIRESTORE (${cn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Je(r),new Error(r)}function K(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Ku(e,i,r)}function F(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Ze{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Qu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_e.UNAUTHENTICATED))}shutdown(){}}class ig{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sg{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){K(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new mt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new mt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new Qu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string",2055,{h:e}),new _e(e)}}class og{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ag{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new og(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ic{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Se(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){K(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ic(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(K(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ic(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Yu(){return new TextEncoder}/**
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
 */class Ju{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=ug(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function B(n,e){return n<e?-1:n>e?1:0}function ms(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return B(r,i);{const o=Yu(),a=lg(o.encode(sc(n,t)),o.encode(sc(e,t)));return a!==0?a:B(r,i)}}t+=r>65535?2:1}return B(n.length,e.length)}function sc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function lg(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return B(n[t],e[t]);return B(n.length,e.length)}function Zt(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const oc=-62135596800,ac=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*ac);return new se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<oc)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ac}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-oc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new se(0,0))}static max(){return new U(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const cc="__name__";class Ne{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&x(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ne.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ne?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Ne.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return B(e.length,t.length)}static compareSegments(e,t){const r=Ne.isNumericId(e),i=Ne.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ne.extractNumericId(e).compare(Ne.extractNumericId(t)):ms(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pt.fromString(e.substring(4,e.length-2))}}class Z extends Ne{construct(e,t,r){return new Z(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}const hg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends Ne{construct(e,t,r){return new le(e,t,r)}static isValidIdentifier(e){return hg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cc}static keyField(){return new le([cc])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new le(t)}static emptyPath(){return new le([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(Z.fromString(e))}static fromName(e){return new M(Z.fromString(e).popFirst(5))}static empty(){return new M(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new Z(e.slice()))}}/**
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
 */const $n=-1;function dg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new gt(i,M.empty(),e)}function fg(n){return new gt(n.readTime,n.key,$n)}class gt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new gt(U.min(),M.empty(),$n)}static max(){return new gt(U.max(),M.empty(),$n)}}function pg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:B(n.largestBatchId,e.largestBatchId))}/**
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
 */const mg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function un(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==mg)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(i=>i?S.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new S((r,i)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>i(p))}})}static doWhile(e,t){return new S((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function _g(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ln(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class hi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}hi.le=-1;/**
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
 */const Ks=-1;function di(n){return n==null}function Qr(n){return n===0&&1/n==-1/0}function yg(n){return typeof n=="number"&&Number.isInteger(n)&&!Qr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Xu="";function vg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=uc(e)),e=Eg(n.get(t),e);return uc(e)}function Eg(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case Xu:t+="";break;default:t+=o}}return t}function uc(n){return n+Xu+""}/**
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
 */function lc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ot(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class J{constructor(e,t){this.comparator=e,this.root=t||ue.EMPTY}insert(e,t){return new J(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cr(this.root,e,this.comparator,!0)}}class Cr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ue{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??ue.RED,this.left=i??ue.EMPTY,this.right=o??ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new ue(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw x(27949);return e+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1;ue.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class oe{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hc(this.data.getIterator())}getIteratorFrom(e){return new hc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof oe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new oe(this.comparator);return t.data=e,t}}class hc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class De{constructor(e){this.fields=e,e.sort(le.comparator)}static empty(){return new De([])}unionWith(e){let t=new oe(le.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new De(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class el extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new el("Invalid base64 string: "+o):o}}(e);return new he(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const Tg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(n){if(K(!!n,39018),typeof n=="string"){let e=0;const t=Tg.exec(n);if(K(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ne(n.seconds),nanos:ne(n.nanos)}}function ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yt(n){return typeof n=="string"?he.fromBase64String(n):he.fromUint8Array(n)}/**
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
 */const tl="server_timestamp",nl="__type__",rl="__previous_value__",il="__local_write_time__";function Qs(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[nl])===null||t===void 0?void 0:t.stringValue)===tl}function fi(n){const e=n.mapValue.fields[rl];return Qs(e)?fi(e):e}function zn(n){const e=_t(n.mapValue.fields[il].timestampValue);return new se(e.seconds,e.nanos)}/**
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
 */class Ig{constructor(e,t,r,i,o,a,u,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}const Yr="(default)";class Hn{constructor(e,t){this.projectId=e,this.database=t||Yr}static empty(){return new Hn("","")}get isDefaultDatabase(){return this.database===Yr}isEqual(e){return e instanceof Hn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const sl="__type__",wg="__max__",br={mapValue:{}},ol="__vector__",Jr="value";function vt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qs(n)?4:Rg(n)?9007199254740991:Ag(n)?10:11:x(28295,{value:n})}function Ue(n,e){if(n===e)return!0;const t=vt(n);if(t!==vt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zn(n).isEqual(zn(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=_t(i.timestampValue),u=_t(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return yt(i.bytesValue).isEqual(yt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ne(i.geoPointValue.latitude)===ne(o.geoPointValue.latitude)&&ne(i.geoPointValue.longitude)===ne(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ne(i.integerValue)===ne(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=ne(i.doubleValue),u=ne(o.doubleValue);return a===u?Qr(a)===Qr(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Zt(n.arrayValue.values||[],e.arrayValue.values||[],Ue);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(lc(a)!==lc(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Ue(a[h],u[h])))return!1;return!0}(n,e);default:return x(52216,{left:n})}}function Gn(n,e){return(n.values||[]).find(t=>Ue(t,e))!==void 0}function en(n,e){if(n===e)return 0;const t=vt(n),r=vt(e);if(t!==r)return B(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=ne(o.integerValue||o.doubleValue),h=ne(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return dc(n.timestampValue,e.timestampValue);case 4:return dc(zn(n),zn(e));case 5:return ms(n.stringValue,e.stringValue);case 6:return function(o,a){const u=yt(o),h=yt(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=B(u[d],h[d]);if(p!==0)return p}return B(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=B(ne(o.latitude),ne(a.latitude));return u!==0?u:B(ne(o.longitude),ne(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return fc(n.arrayValue,e.arrayValue);case 10:return function(o,a){var u,h,d,p;const T=o.fields||{},R=a.fields||{},P=(u=T[Jr])===null||u===void 0?void 0:u.arrayValue,D=(h=R[Jr])===null||h===void 0?void 0:h.arrayValue,N=B(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((p=D==null?void 0:D.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:fc(P,D)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===br.mapValue&&a===br.mapValue)return 0;if(o===br.mapValue)return 1;if(a===br.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let T=0;T<h.length&&T<p.length;++T){const R=ms(h[T],p[T]);if(R!==0)return R;const P=en(u[h[T]],d[p[T]]);if(P!==0)return P}return B(h.length,p.length)}(n.mapValue,e.mapValue);default:throw x(23264,{Pe:t})}}function dc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return B(n,e);const t=_t(n),r=_t(e),i=B(t.seconds,r.seconds);return i!==0?i:B(t.nanos,r.nanos)}function fc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=en(t[i],r[i]);if(o)return o}return B(t.length,r.length)}function tn(n){return gs(n)}function gs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=_t(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return yt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=gs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${gs(t.fields[a])}`;return i+"}"}(n.mapValue):x(61005,{value:n})}function xr(n){switch(vt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fi(n);return e?16+xr(e):16;case 5:return 2*n.stringValue.length;case 6:return yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+xr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Ot(r.fields,(o,a)=>{i+=o.length+xr(a)}),i}(n.mapValue);default:throw x(13486,{value:n})}}function _s(n){return!!n&&"integerValue"in n}function Ys(n){return!!n&&"arrayValue"in n}function pc(n){return!!n&&"nullValue"in n}function mc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ur(n){return!!n&&"mapValue"in n}function Ag(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[sl])===null||t===void 0?void 0:t.stringValue)===ol}function Ln(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ot(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ln(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ln(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Rg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===wg}/**
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
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ur(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ln(t)}setAll(e){let t=le.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=Ln(a):i.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Ur(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ue(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ur(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Ot(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Pe(Ln(this.value))}}function al(n){const e=[];return Ot(n.fields,(t,r)=>{const i=new le([t]);if(Ur(r)){const o=al(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new De(e)}/**
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
 */class ye{constructor(e,t,r,i,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new ye(e,0,U.min(),U.min(),U.min(),Pe.empty(),0)}static newFoundDocument(e,t,r,i){return new ye(e,1,t,U.min(),r,i,0)}static newNoDocument(e,t){return new ye(e,2,t,U.min(),U.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,U.min(),U.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xr{constructor(e,t){this.position=e,this.inclusive=t}}function gc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=en(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function _c(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ue(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Zr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Sg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class cl{}class ie extends cl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Cg(e,t,r):t==="array-contains"?new Vg(e,r):t==="in"?new Dg(e,r):t==="not-in"?new Ng(e,r):t==="array-contains-any"?new Og(e,r):new ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new bg(e,r):new kg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(en(t,this.value)):t!==null&&vt(this.value)===vt(t)&&this.matchesComparison(en(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fe extends cl{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Fe(e,t)}matches(e){return ul(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function ul(n){return n.op==="and"}function ll(n){return Pg(n)&&ul(n)}function Pg(n){for(const e of n.filters)if(e instanceof Fe)return!1;return!0}function ys(n){if(n instanceof ie)return n.field.canonicalString()+n.op.toString()+tn(n.value);if(ll(n))return n.filters.map(e=>ys(e)).join(",");{const e=n.filters.map(t=>ys(t)).join(",");return`${n.op}(${e})`}}function hl(n,e){return n instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&Ue(r.value,i.value)}(n,e):n instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&hl(a,i.filters[u]),!0):!1}(n,e):void x(19439)}function dl(n){return n instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${tn(t.value)}`}(n):n instanceof Fe?function(t){return t.op.toString()+" {"+t.getFilters().map(dl).join(" ,")+"}"}(n):"Filter"}class Cg extends ie{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class bg extends ie{constructor(e,t){super(e,"in",t),this.keys=fl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class kg extends ie{constructor(e,t){super(e,"not-in",t),this.keys=fl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function fl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Vg extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ys(t)&&Gn(t.arrayValue,this.value)}}class Dg extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gn(this.value.arrayValue,t)}}class Ng extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Gn(this.value.arrayValue,t)}}class Og extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ys(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Gn(this.value.arrayValue,r))}}/**
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
 */class Lg{constructor(e,t=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.Ie=null}}function yc(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Lg(n,e,t,r,i,o,a)}function Js(n){const e=F(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ys(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),di(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>tn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>tn(r)).join(",")),e.Ie=t}return e.Ie}function Xs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Sg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_c(n.startAt,e.startAt)&&_c(n.endAt,e.endAt)}function vs(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class pi{constructor(e,t=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Mg(n,e,t,r,i,o,a,u){return new pi(n,e,t,r,i,o,a,u)}function Zs(n){return new pi(n)}function vc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xg(n){return n.collectionGroup!==null}function Mn(n){const e=F(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new oe(le.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new Zr(o,r))}),t.has(le.keyField().canonicalString())||e.Ee.push(new Zr(le.keyField(),r))}return e.Ee}function Me(n){const e=F(n);return e.de||(e.de=Ug(e,Mn(n))),e.de}function Ug(n,e){if(n.limitType==="F")return yc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Zr(i.field,o)});const t=n.endAt?new Xr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Xr(n.startAt.position,n.startAt.inclusive):null;return yc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Es(n,e,t){return new pi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function mi(n,e){return Xs(Me(n),Me(e))&&n.limitType===e.limitType}function pl(n){return`${Js(Me(n))}|lt:${n.limitType}`}function $t(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>dl(i)).join(", ")}]`),di(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>tn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>tn(i)).join(",")),`Target(${r})`}(Me(n))}; limitType=${n.limitType})`}function gi(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Mn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,h){const d=gc(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Mn(r),i)||r.endAt&&!function(a,u,h){const d=gc(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Mn(r),i))}(n,e)}function Fg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ml(n){return(e,t)=>{let r=!1;for(const i of Mn(n)){const o=Bg(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Bg(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?en(h,d):x(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
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
 */class Lt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ot(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Zu(this.inner)}size(){return this.innerSize}}/**
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
 */const jg=new J(M.comparator);function Xe(){return jg}const gl=new J(M.comparator);function Dn(...n){let e=gl;for(const t of n)e=e.insert(t.key,t);return e}function _l(n){let e=gl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Pt(){return xn()}function yl(){return xn()}function xn(){return new Lt(n=>n.toString(),(n,e)=>n.isEqual(e))}const qg=new J(M.comparator),$g=new oe(M.comparator);function q(...n){let e=$g;for(const t of n)e=e.add(t);return e}const zg=new oe(B);function Hg(){return zg}/**
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
 */function eo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qr(e)?"-0":e}}function vl(n){return{integerValue:""+n}}function Gg(n,e){return yg(e)?vl(e):eo(n,e)}/**
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
 */class _i{constructor(){this._=void 0}}function Wg(n,e,t){return n instanceof ei?function(i,o){const a={fields:{[nl]:{stringValue:tl},[il]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Qs(o)&&(o=fi(o)),o&&(a.fields[rl]=o),{mapValue:a}}(t,e):n instanceof Wn?Tl(n,e):n instanceof Kn?Il(n,e):function(i,o){const a=El(i,o),u=Ec(a)+Ec(i.Re);return _s(a)&&_s(i.Re)?vl(u):eo(i.serializer,u)}(n,e)}function Kg(n,e,t){return n instanceof Wn?Tl(n,e):n instanceof Kn?Il(n,e):t}function El(n,e){return n instanceof ti?function(r){return _s(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ei extends _i{}class Wn extends _i{constructor(e){super(),this.elements=e}}function Tl(n,e){const t=wl(e);for(const r of n.elements)t.some(i=>Ue(i,r))||t.push(r);return{arrayValue:{values:t}}}class Kn extends _i{constructor(e){super(),this.elements=e}}function Il(n,e){let t=wl(e);for(const r of n.elements)t=t.filter(i=>!Ue(i,r));return{arrayValue:{values:t}}}class ti extends _i{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Ec(n){return ne(n.integerValue||n.doubleValue)}function wl(n){return Ys(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qg(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Wn&&i instanceof Wn||r instanceof Kn&&i instanceof Kn?Zt(r.elements,i.elements,Ue):r instanceof ti&&i instanceof ti?Ue(r.Re,i.Re):r instanceof ei&&i instanceof ei}(n.transform,e.transform)}class Yg{constructor(e,t){this.version=e,this.transformResults=t}}class Ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class yi{}function Al(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Sl(n.key,Ke.none()):new rr(n.key,n.data,Ke.none());{const t=n.data,r=Pe.empty();let i=new oe(le.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Mt(n.key,r,new De(i.toArray()),Ke.none())}}function Jg(n,e,t){n instanceof rr?function(i,o,a){const u=i.value.clone(),h=Ic(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Mt?function(i,o,a){if(!Fr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Ic(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Rl(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Un(n,e,t,r){return n instanceof rr?function(o,a,u,h){if(!Fr(o.precondition,a))return u;const d=o.value.clone(),p=wc(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Mt?function(o,a,u,h){if(!Fr(o.precondition,a))return u;const d=wc(o.fieldTransforms,h,a),p=a.data;return p.setAll(Rl(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(o,a,u){return Fr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function Xg(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=El(r.transform,i||null);o!=null&&(t===null&&(t=Pe.empty()),t.set(r.field,o))}return t||null}function Tc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zt(r,i,(o,a)=>Qg(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class rr extends yi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mt extends yi{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Rl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ic(n,e,t){const r=new Map;K(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,Kg(a,u,t[i]))}return r}function wc(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,Wg(o,a,e))}return r}class Sl extends yi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zg extends yi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class e_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Jg(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Un(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Un(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=yl();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;const h=Al(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),q())}isEqual(e){return this.batchId===e.batchId&&Zt(this.mutations,e.mutations,(t,r)=>Tc(t,r))&&Zt(this.baseMutations,e.baseMutations,(t,r)=>Tc(t,r))}}class to{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){K(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return qg}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new to(e,t,r,i)}}/**
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
 */class t_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class n_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var re,$;function r_(n){switch(n){case C.OK:return x(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function Pl(n){if(n===void 0)return Je("GRPC error has no .code"),C.UNKNOWN;switch(n){case re.OK:return C.OK;case re.CANCELLED:return C.CANCELLED;case re.UNKNOWN:return C.UNKNOWN;case re.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case re.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case re.INTERNAL:return C.INTERNAL;case re.UNAVAILABLE:return C.UNAVAILABLE;case re.UNAUTHENTICATED:return C.UNAUTHENTICATED;case re.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case re.NOT_FOUND:return C.NOT_FOUND;case re.ALREADY_EXISTS:return C.ALREADY_EXISTS;case re.PERMISSION_DENIED:return C.PERMISSION_DENIED;case re.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case re.ABORTED:return C.ABORTED;case re.OUT_OF_RANGE:return C.OUT_OF_RANGE;case re.UNIMPLEMENTED:return C.UNIMPLEMENTED;case re.DATA_LOSS:return C.DATA_LOSS;default:return x(39323,{code:n})}}($=re||(re={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const i_=new pt([4294967295,4294967295],0);function Ac(n){const e=Yu().encode(n),t=new qu;return t.update(e),new Uint8Array(t.digest())}function Rc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new pt([t,r],0),new pt([i,o],0)]}class no{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Nn(`Invalid padding: ${t}`);if(r<0)throw new Nn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Nn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Nn(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=pt.fromNumber(this.pe)}we(e,t,r){let i=e.add(t.multiply(pt.fromNumber(r)));return i.compare(i_)===1&&(i=new pt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Ac(e),[r,i]=Rc(t);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);if(!this.be(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new no(o,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.pe===0)return;const t=Ac(e),[r,i]=Rc(t);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vi{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ir.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new vi(U.min(),i,new J(B),Xe(),q())}}class ir{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ir(r,t,q(),q(),q())}}/**
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
 */class Br{constructor(e,t,r,i){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=i}}class Cl{constructor(e,t){this.targetId=e,this.Ce=t}}class bl{constructor(e,t,r=he.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Sc{constructor(){this.Fe=0,this.Me=Pc(),this.xe=he.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=q(),t=q(),r=q();return this.Me.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:x(38017,{changeType:o})}}),new ir(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Pc()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,K(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class s_{constructor(e){this.ze=e,this.je=new Map,this.He=Xe(),this.Je=kr(),this.Ye=kr(),this.Ze=new J(B)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:x(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}ot(e){const t=e.targetId,r=e.Ce.count,i=this._t(t);if(i){const o=i.target;if(vs(o))if(r===0){const a=new M(o.path);this.tt(t,a,ye.newNoDocument(a,U.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this.ut(t);if(a!==r){const u=this.ct(e),h=u?this.lt(u,e,a):1;if(h!==0){this.st(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,u;try{a=yt(r).toUint8Array()}catch(h){if(h instanceof el)return Xt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new no(a,i,o)}catch(h){return Xt(h instanceof Nn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.pe===0?null:u}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.ze.Pt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.tt(t,o,null),i++)}),i}It(e){const t=new Map;this.je.forEach((o,a)=>{const u=this._t(a);if(u){if(o.current&&vs(u.target)){const h=new M(u.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,ye.newNoDocument(h,e))}o.Le&&(t.set(a,o.qe()),o.Qe())}});let r=q();this.Ye.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(e));const i=new vi(e,t,this.Ze,this.He,r);return this.He=Xe(),this.Je=kr(),this.Ye=kr(),this.Ze=new J(B),i}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,t)?i.$e(t,1):i.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Sc,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new oe(B),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new oe(B),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Sc),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function kr(){return new J(M.comparator)}function Pc(){return new J(M.comparator)}const o_={asc:"ASCENDING",desc:"DESCENDING"},a_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},c_={and:"AND",or:"OR"};class u_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ts(n,e){return n.useProto3Json||di(e)?e:{value:e}}function ni(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function l_(n,e){return ni(n,e.toTimestamp())}function xe(n){return K(!!n,49232),U.fromTimestamp(function(t){const r=_t(t);return new se(r.seconds,r.nanos)}(n))}function ro(n,e){return Is(n,e).canonicalString()}function Is(n,e){const t=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Vl(n){const e=Z.fromString(n);return K(Ml(e),10190,{key:e.toString()}),e}function ws(n,e){return ro(n.databaseId,e.path)}function ns(n,e){const t=Vl(e);if(t.get(1)!==n.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(Nl(t))}function Dl(n,e){return ro(n.databaseId,e)}function h_(n){const e=Vl(n);return e.length===4?Z.emptyPath():Nl(e)}function As(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nl(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Cc(n,e,t){return{name:ws(n,e),fields:t.value.mapValue.fields}}function d_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(K(p===void 0||typeof p=="string",58123),he.fromBase64String(p||"")):(K(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),he.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?C.UNKNOWN:Pl(d.code);return new L(p,d.message||"")}(a);t=new bl(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ns(n,r.document.name),o=xe(r.document.updateTime),a=r.document.createTime?xe(r.document.createTime):U.min(),u=new Pe({mapValue:{fields:r.document.fields}}),h=ye.newFoundDocument(i,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Br(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ns(n,r.document),o=r.readTime?xe(r.readTime):U.min(),a=ye.newNoDocument(i,o),u=r.removedTargetIds||[];t=new Br([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ns(n,r.document),o=r.removedTargetIds||[];t=new Br([],o,i,null)}else{if(!("filter"in e))return x(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new n_(i,o),u=r.targetId;t=new Cl(u,a)}}return t}function f_(n,e){let t;if(e instanceof rr)t={update:Cc(n,e.key,e.value)};else if(e instanceof Sl)t={delete:ws(n,e.key)};else if(e instanceof Mt)t={update:Cc(n,e.key,e.data),updateMask:I_(e.fieldMask)};else{if(!(e instanceof Zg))return x(16599,{ft:e.type});t={verify:ws(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof ei)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Wn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Kn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof ti)return{fieldPath:a.field.canonicalString(),increment:u.Re};throw x(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:l_(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)}(n,e.precondition)),t}function p_(n,e){return n&&n.length>0?(K(e!==void 0,14353),n.map(t=>function(i,o){let a=i.updateTime?xe(i.updateTime):xe(o);return a.isEqual(U.min())&&(a=xe(o)),new Yg(a,i.transformResults||[])}(t,e))):[]}function m_(n,e){return{documents:[Dl(n,e.path)]}}function g_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Dl(n,i);const o=function(d){if(d.length!==0)return Ll(Fe.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(R){return{field:zt(R.field),direction:v_(R.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Ts(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{gt:t,parent:i}}function __(n){let e=h_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){K(r===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(T){const R=Ol(T);return R instanceof Fe&&ll(R)?R.getFilters():[R]}(t.where));let a=[];t.orderBy&&(a=function(T){return T.map(R=>function(D){return new Zr(Ht(D.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(R))}(t.orderBy));let u=null;t.limit&&(u=function(T){let R;return R=typeof T=="object"?T.value:T,di(R)?null:R}(t.limit));let h=null;t.startAt&&(h=function(T){const R=!!T.before,P=T.values||[];return new Xr(P,R)}(t.startAt));let d=null;return t.endAt&&(d=function(T){const R=!T.before,P=T.values||[];return new Xr(P,R)}(t.endAt)),Mg(e,i,a,o,u,"F",h,d)}function y_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ol(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ht(t.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ht(t.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ht(t.unaryFilter.field);return ie.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ht(t.unaryFilter.field);return ie.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(n):n.fieldFilter!==void 0?function(t){return ie.create(Ht(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Fe.create(t.compositeFilter.filters.map(r=>Ol(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(t.compositeFilter.op))}(n):x(30097,{filter:n})}function v_(n){return o_[n]}function E_(n){return a_[n]}function T_(n){return c_[n]}function zt(n){return{fieldPath:n.canonicalString()}}function Ht(n){return le.fromServerFormat(n.fieldPath)}function Ll(n){return n instanceof ie?function(t){if(t.op==="=="){if(mc(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NAN"}};if(pc(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(mc(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NOT_NAN"}};if(pc(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zt(t.field),op:E_(t.op),value:t.value}}}(n):n instanceof Fe?function(t){const r=t.getFilters().map(i=>Ll(i));return r.length===1?r[0]:{compositeFilter:{op:T_(t.op),filters:r}}}(n):x(54877,{filter:n})}function I_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ml(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class lt{constructor(e,t,r,i,o=U.min(),a=U.min(),u=he.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class w_{constructor(e){this.wt=e}}function A_(n){const e=__({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Es(e,e.limit,"L"):e}/**
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
 */class R_{constructor(){this.yn=new S_}addToCollectionParentIndex(e,t){return this.yn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(gt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(gt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class S_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new oe(Z.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new oe(Z.comparator)).toArray()}}/**
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
 */const bc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xl=41943040;class Ie{static withCacheSize(e){return new Ie(e,Ie.DEFAULT_COLLECTION_PERCENTILE,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ie.DEFAULT_COLLECTION_PERCENTILE=10,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ie.DEFAULT=new Ie(xl,Ie.DEFAULT_COLLECTION_PERCENTILE,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ie.DISABLED=new Ie(-1,0,0);/**
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
 */class nn{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new nn(0)}static ir(){return new nn(-1)}}/**
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
 */const kc="LruGarbageCollector",P_=1048576;function Vc([n,e],[t,r]){const i=B(n,t);return i===0?B(e,r):i}class C_{constructor(e){this.cr=e,this.buffer=new oe(Vc),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Vc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class b_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){V(kc,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ln(t)?V(kc,"Ignoring IndexedDB error during garbage collection: ",t):await un(t)}await this.Ir(3e5)})}}class k_{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(hi.le);const r=new C_(t);return this.Er.forEachTarget(e,i=>r.Pr(i.sequenceNumber)).next(()=>this.Er.Ar(e,i=>r.Pr(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Er.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(bc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bc):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let r,i,o,a,u,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,a=Date.now(),this.nthSequenceNumber(e,i))).next(T=>(r=T,u=Date.now(),this.removeTargets(e,r,t))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(T=>(d=Date.now(),qt()<=j.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${T} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T})))}}function V_(n,e){return new k_(n,e)}/**
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
 */class D_{constructor(){this.changes=new Lt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class N_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class O_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Un(r.mutation,i,De.empty(),se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=q()){const i=Pt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Dn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Pt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,q()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let o=Xe();const a=xn(),u=function(){return xn()}();return t.forEach((h,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Mt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Un(p.mutation,d,p.mutation.getFieldMask(),se.now())):a.set(d.key,De.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var T;return u.set(d,new N_(p,(T=a.get(d))!==null&&T!==void 0?T:null))}),u))}recalculateAndSaveOverlays(e,t){const r=xn();let i=new J((a,u)=>a-u),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=r.get(h)||De.empty();p=u.applyToLocalView(d,p),r.set(h,p);const T=(i.get(u.batchId)||q()).add(h);i=i.insert(u.batchId,T)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,T=yl();p.forEach(R=>{if(!o.has(R)){const P=Al(t.get(R),r.get(R));P!==null&&T.set(R,P),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,T))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):S.resolve(Pt());let u=$n,h=o;return a.next(d=>S.forEach(d,(p,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(p)?S.resolve():this.remoteDocumentCache.getEntry(e,p).next(R=>{h=h.insert(p,R)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,q())).next(p=>({batchId:u,changes:_l(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let i=Dn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Dn();return this.indexManager.getCollectionParents(e,o).next(u=>S.forEach(u,h=>{const d=function(T,R){return new pi(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((T,R)=>{a=a.insert(T,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ye.newInvalidDocument(p)))});let u=Dn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&Un(p.mutation,d,De.empty(),se.now()),gi(t,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class L_{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return S.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:xe(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(i){return{name:i.name,query:A_(i.bundledQuery),readTime:xe(i.readTime)}}(t)),S.resolve()}}/**
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
 */class M_{constructor(){this.overlays=new J(M.comparator),this.Or=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Pt();return S.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.St(e,t,o)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Or.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Or.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const i=Pt(),o=t.length+1,a=new M(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new J((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Pt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Pt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return S.resolve(u)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Or.get(i.largestBatchId).delete(r.key);this.Or.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new t_(t,r));let o=this.Or.get(t);o===void 0&&(o=q(),this.Or.set(t,o)),this.Or.set(t,o.add(r.key))}}/**
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
 */class x_{constructor(){this.sessionToken=he.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
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
 */class io{constructor(){this.Nr=new oe(ae.Br),this.Lr=new oe(ae.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const r=new ae(e,t);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Qr(new ae(e,t))}$r(e,t){e.forEach(r=>this.removeReference(r,t))}Ur(e){const t=new M(new Z([])),r=new ae(t,e),i=new ae(t,e+1),o=[];return this.Lr.forEachInRange([r,i],a=>{this.Qr(a),o.push(a.key)}),o}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new M(new Z([])),r=new ae(t,e),i=new ae(t,e+1);let o=q();return this.Lr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new ae(e,0),r=this.Nr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ae{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return M.comparator(e.key,t.key)||B(e.Gr,t.Gr)}static kr(e,t){return B(e.Gr,t.Gr)||M.comparator(e.key,t.key)}}/**
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
 */class U_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new oe(ae.Br)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new e_(o,t,r,i);this.mutationQueue.push(a);for(const u of i)this.zr=this.zr.add(new ae(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Hr(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Ks:this.Jn-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ae(t,0),i=new ae(t,Number.POSITIVE_INFINITY),o=[];return this.zr.forEachInRange([r,i],a=>{const u=this.jr(a.Gr);o.push(u)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new oe(B);return t.forEach(i=>{const o=new ae(i,0),a=new ae(i,Number.POSITIVE_INFINITY);this.zr.forEachInRange([o,a],u=>{r=r.add(u.Gr)})}),S.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new ae(new M(o),0);let u=new oe(B);return this.zr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(h.Gr)),!0)},a),S.resolve(this.Jr(u))}Jr(e){const t=[];return e.forEach(r=>{const i=this.jr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){K(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return S.forEach(t.mutations,i=>{const o=new ae(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,t){const r=new ae(t,0),i=this.zr.firstAfterOrEqual(r);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class F_{constructor(e){this.Zr=e,this.docs=function(){return new J(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.Zr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=Xe();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():ye.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=Xe();const a=t.path,u=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||pg(fg(p),r)<=0||(i.has(p.key)||gi(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(e,t,r,i){x(9500)}Xr(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new B_(this)}getSize(e){return S.resolve(this.size)}}class B_ extends D_{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.vr.addEntry(e,i)):this.vr.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
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
 */class j_{constructor(e){this.persistence=e,this.ei=new Lt(t=>Js(t),Xs),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.ti=0,this.ni=new io,this.targetCount=0,this.ri=nn.rr()}forEachTarget(e,t){return this.ei.forEach((r,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ti&&(this.ti=t),S.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new nn(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.ar(t),S.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.ei.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ei.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.ei.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.ni.qr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.ni.$r(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ni.Wr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.ni.containsKey(t))}}/**
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
 */class Ul{constructor(e,t){this.ii={},this.overlays={},this.si=new hi(0),this.oi=!1,this.oi=!0,this._i=new x_,this.referenceDelegate=e(this),this.ai=new j_(this),this.indexManager=new R_,this.remoteDocumentCache=function(i){return new F_(i)}(r=>this.referenceDelegate.ui(r)),this.serializer=new w_(t),this.ci=new L_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new M_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ii[e.toKey()];return r||(r=new U_(t,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const i=new q_(this.si.next());return this.referenceDelegate.li(),r(i).next(o=>this.referenceDelegate.hi(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Pi(e,t){return S.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,t)))}}class q_ extends gg{constructor(e){super(),this.currentSequenceNumber=e}}class so{constructor(e){this.persistence=e,this.Ti=new io,this.Ii=null}static Ei(e){return new so(e)}get di(){if(this.Ii)return this.Ii;throw x(60996)}addReference(e,t,r){return this.Ti.addReference(r,t),this.di.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Ti.removeReference(r,t),this.di.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),S.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.di,r=>{const i=M.fromPath(r);return this.Ai(e,i).next(o=>{o||t.removeEntry(i,U.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return S.or([()=>S.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class ri{constructor(e,t){this.persistence=e,this.Ri=new Lt(r=>vg(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=V_(this,t)}static Ei(e,t){return new ri(e,t)}li(){}hi(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Vr(e){let t=0;return this.Ar(e,r=>{t++}).next(()=>t)}Ar(e,t){return S.forEach(this.Ri,(r,i)=>this.gr(e,r,i).next(o=>o?S.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Xr(e,a=>this.gr(e,a,t).next(u=>{u||(r++,o.removeEntry(a,U.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),S.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xr(e.data.value)),t}gr(e,t,r){return S.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.Ri.get(t);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class oo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ls=r,this.hs=i}static Ps(e,t){let r=q(),i=q();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new oo(e,t.fromCache,r,i)}}/**
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
 */class $_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class z_{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return Td()?8:_g(ve())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Rs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Vs(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new $_;return this.fs(e,t,a).next(u=>{if(o.result=u,this.Is)return this.gs(e,t,a,u.size)})}).next(()=>o.result)}gs(e,t,r,i){return r.documentReadCount<this.Es?(qt()<=j.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",$t(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),S.resolve()):(qt()<=j.DEBUG&&V("QueryEngine","Query:",$t(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(qt()<=j.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",$t(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Me(t))):S.resolve())}Rs(e,t){if(vc(t))return S.resolve(null);let r=Me(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Es(t,null,"F"),r=Me(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=q(...o);return this.As.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.ps(t,u);return this.ys(t,d,a,h.readTime)?this.Rs(e,Es(t,null,"F")):this.ws(e,d,t,h)}))})))}Vs(e,t,r,i){return vc(t)||i.isEqual(U.min())?S.resolve(null):this.As.getDocuments(e,r).next(o=>{const a=this.ps(t,o);return this.ys(t,a,r,i)?S.resolve(null):(qt()<=j.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$t(t)),this.ws(e,a,t,dg(i,$n)).next(u=>u))})}ps(e,t){let r=new oe(ml(e));return t.forEach((i,o)=>{gi(e,o)&&(r=r.add(o))}),r}ys(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}fs(e,t,r){return qt()<=j.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",$t(t)),this.As.getDocumentsMatchingQuery(e,t,gt.min(),r)}ws(e,t,r,i){return this.As.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const ao="LocalStore",H_=3e8;class G_{constructor(e,t,r,i){this.persistence=e,this.bs=t,this.serializer=i,this.Ss=new J(B),this.Ds=new Lt(o=>Js(o),Xs),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new O_(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function W_(n,e,t,r){return new G_(n,e,t,r)}async function Fl(n,e){const t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Fs(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=q();for(const d of i){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({Ms:d,removedBatchIds:a,addedBatchIds:u}))})})}function K_(n,e){const t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.Cs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){const T=d.batch,R=T.keys();let P=S.resolve();return R.forEach(D=>{P=P.next(()=>p.getEntry(h,D)).next(N=>{const k=d.docVersions.get(D);K(k!==null,48541),N.version.compareTo(k)<0&&(T.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(h,T))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=q();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Bl(n){const e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function Q_(n,e){const t=F(n),r=e.snapshotVersion;let i=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Cs.newChangeBuffer({trackRemovals:!0});i=t.Ss;const u=[];e.targetChanges.forEach((p,T)=>{const R=i.get(T);if(!R)return;u.push(t.ai.removeMatchingKeys(o,p.removedDocuments,T).next(()=>t.ai.addMatchingKeys(o,p.addedDocuments,T)));let P=R.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(T)!==null?P=P.withResumeToken(he.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),i=i.insert(T,P),function(N,k,W){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=H_?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(R,P,p)&&u.push(t.ai.updateTargetData(o,P))});let h=Xe(),d=q();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(Y_(o,a,e.documentUpdates).next(p=>{h=p.xs,d=p.Os})),!r.isEqual(U.min())){const p=t.ai.getLastRemoteSnapshotVersion(o).next(T=>t.ai.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return S.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.Ss=i,o))}function Y_(n,e,t){let r=q(),i=q();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=Xe();return t.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(U.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):V(ao,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{xs:a,Os:i}})}function J_(n,e){const t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ks),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function X_(n,e){const t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.ai.getTargetData(r,e).next(o=>o?(i=o,S.resolve(i)):t.ai.allocateTargetId(r).next(a=>(i=new lt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.ai.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(r.targetId,r),t.Ds.set(e,r.targetId)),r})}async function Rs(n,e,t){const r=F(n),i=r.Ss.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!ln(a))throw a;V(ao,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(i.target)}function Dc(n,e,t){const r=F(n);let i=U.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const T=F(h),R=T.Ds.get(p);return R!==void 0?S.resolve(T.Ss.get(R)):T.ai.getTargetData(d,p)}(r,a,Me(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.bs.getDocumentsMatchingQuery(a,e,t?i:U.min(),t?o:q())).next(u=>(Z_(r,Fg(e),u),{documents:u,Ns:o})))}function Z_(n,e,t){let r=n.vs.get(e)||U.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.vs.set(e,r)}class Nc{constructor(){this.activeTargetIds=Hg()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ey{constructor(){this.So=new Nc,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,r){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Nc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ty{vo(e){}shutdown(){}}/**
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
 */const Oc="ConnectivityMonitor";class Lc{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){V(Oc,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){V(Oc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vr=null;function Ss(){return Vr===null?Vr=function(){return 268435456+Math.round(2147483648*Math.random())}():Vr++,"0x"+Vr.toString(16)}/**
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
 */const rs="RestConnection",ny={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ry{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${r}/databases/${i}`,this.qo=this.databaseId.database===Yr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Qo(e,t,r,i,o){const a=Ss(),u=this.$o(e,t.toUriEncodedString());V(rs,`Sending RPC '${e}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(h,i,o),this.Ko(e,u,h,r).then(d=>(V(rs,`Received RPC '${e}' ${a}: `,d),d),d=>{throw Xt(rs,`RPC '${e}' ${a} failed with error: `,d,"url: ",u,"request:",r),d})}Wo(e,t,r,i,o,a){return this.Qo(e,t,r,i,o)}Uo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}$o(e,t){const r=ny[e];return`${this.Lo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class iy{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const ge="WebChannelConnection";class sy extends ry{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,r,i){const o=Ss();return new Promise((a,u)=>{const h=new $u;h.setWithCredentials(!0),h.listenOnce(zu.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Mr.NO_ERROR:const p=h.getResponseJson();V(ge,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case Mr.TIMEOUT:V(ge,`RPC '${e}' ${o} timed out`),u(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case Mr.HTTP_ERROR:const T=h.getStatus();if(V(ge,`RPC '${e}' ${o} failed with status:`,T,"response text:",h.getResponseText()),T>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const D=function(k){const W=k.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(W)>=0?W:C.UNKNOWN}(P.status);u(new L(D,P.message))}else u(new L(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new L(C.UNAVAILABLE,"Connection failed."));break;default:x(9055,{s_:e,streamId:o,o_:h.getLastErrorCode(),__:h.getLastError()})}}finally{V(ge,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);V(ge,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",d,r,15)})}a_(e,t,r){const i=Ss(),o=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Wu(),u=Gu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Uo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=o.join("");V(ge,`Creating RPC '${e}' stream ${i}: ${p}`,h);const T=a.createWebChannel(p,h);let R=!1,P=!1;const D=new iy({Go:k=>{P?V(ge,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(R||(V(ge,`Opening RPC '${e}' stream ${i} transport.`),T.open(),R=!0),V(ge,`RPC '${e}' stream ${i} sending:`,k),T.send(k))},zo:()=>T.close()}),N=(k,W,z)=>{k.listen(W,H=>{try{z(H)}catch(ee){setTimeout(()=>{throw ee},0)}})};return N(T,Vn.EventType.OPEN,()=>{P||(V(ge,`RPC '${e}' stream ${i} transport opened.`),D.t_())}),N(T,Vn.EventType.CLOSE,()=>{P||(P=!0,V(ge,`RPC '${e}' stream ${i} transport closed`),D.r_())}),N(T,Vn.EventType.ERROR,k=>{P||(P=!0,Xt(ge,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),D.r_(new L(C.UNAVAILABLE,"The operation could not be completed")))}),N(T,Vn.EventType.MESSAGE,k=>{var W;if(!P){const z=k.data[0];K(!!z,16349);const H=z,ee=(H==null?void 0:H.error)||((W=H[0])===null||W===void 0?void 0:W.error);if(ee){V(ge,`RPC '${e}' stream ${i} received error:`,ee);const Re=ee.status;let te=function(_){const y=re[_];if(y!==void 0)return Pl(y)}(Re),v=ee.message;te===void 0&&(te=C.INTERNAL,v="Unknown error status: "+Re+" with message "+ee.message),P=!0,D.r_(new L(te,v)),T.close()}else V(ge,`RPC '${e}' stream ${i} received:`,z),D.i_(z)}}),N(u,Hu.STAT_EVENT,k=>{k.stat===ps.PROXY?V(ge,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===ps.NOPROXY&&V(ge,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.n_()},0),D}}function is(){return typeof document<"u"?document:null}/**
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
 */function Ei(n){return new u_(n,!0)}/**
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
 */class jl{constructor(e,t,r=1e3,i=1.5,o=6e4){this.bi=e,this.timerId=t,this.u_=r,this.c_=i,this.l_=o,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),i=Math.max(0,t-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,i,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const Mc="PersistentStream";class ql{constructor(e,t,r,i,o,a,u,h){this.bi=e,this.R_=r,this.V_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new jl(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Je(t.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.m_===t&&this.B_(r,i)},r=>{e(()=>{const i=new L(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(i)})})}B_(e,t){const r=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(i=>{r(()=>this.L_(i))}),this.stream.onMessage(i=>{r(()=>++this.p_==1?this.q_(i):this.onNext(i))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return V(Mc,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(V(Mc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oy extends ql{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=d_(this.serializer,e),r=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?xe(a.readTime):U.min()}(e);return this.listener.Q_(t,r)}U_(e){const t={};t.database=As(this.serializer),t.addTarget=function(o,a){let u;const h=a.target;if(u=vs(h)?{documents:m_(o,h)}:{query:g_(o,h).gt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=kl(o,a.resumeToken);const d=Ts(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=ni(o,a.snapshotVersion.toTimestamp());const d=Ts(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=y_(this.serializer,e);r&&(t.labels=r),this.F_(t)}K_(e){const t={};t.database=As(this.serializer),t.removeTarget=e,this.F_(t)}}class ay extends ql{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return K(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){K(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=p_(e.writeResults,e.commitTime),r=xe(e.commitTime);return this.listener.j_(r,t)}H_(){const e={};e.database=As(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>f_(this.serializer,r))};this.F_(t)}}/**
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
 */class cy{}class uy extends cy{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.J_=!1}Y_(){if(this.J_)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,r,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Qo(e,Is(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(C.UNKNOWN,o.toString())})}Wo(e,t,r,i,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Wo(e,Is(t,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(C.UNKNOWN,a.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class ly{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Je(t),this.ea=!1):V("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const Nt="RemoteStore";class hy{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=o,this.ca.vo(a=>{r.enqueueAndForget(async()=>{xt(this)&&(V(Nt,"Restarting streams for network reachability change."),await async function(h){const d=F(h);d.aa.add(4),await sr(d),d.la.set("Unknown"),d.aa.delete(4),await Ti(d)}(this))})}),this.la=new ly(r,i)}}async function Ti(n){if(xt(n))for(const e of n.ua)await e(!0)}async function sr(n){for(const e of n.ua)await e(!1)}function $l(n,e){const t=F(n);t._a.has(e.targetId)||(t._a.set(e.targetId,e),ho(t)?lo(t):hn(t).b_()&&uo(t,e))}function co(n,e){const t=F(n),r=hn(t);t._a.delete(e),r.b_()&&zl(t,e),t._a.size===0&&(r.b_()?r.v_():xt(t)&&t.la.set("Unknown"))}function uo(n,e){if(n.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hn(n).U_(e)}function zl(n,e){n.ha.Ke(e),hn(n).K_(e)}function lo(n){n.ha=new s_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n._a.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),hn(n).start(),n.la.ta()}function ho(n){return xt(n)&&!hn(n).w_()&&n._a.size>0}function xt(n){return F(n).aa.size===0}function Hl(n){n.ha=void 0}async function dy(n){n.la.set("Online")}async function fy(n){n._a.forEach((e,t)=>{uo(n,e)})}async function py(n,e){Hl(n),ho(n)?(n.la.ia(e),lo(n)):n.la.set("Unknown")}async function my(n,e,t){if(n.la.set("Online"),e instanceof bl&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i._a.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i._a.delete(u),i.ha.removeTarget(u))}(n,e)}catch(r){V(Nt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ii(n,r)}else if(e instanceof Br?n.ha.Xe(e):e instanceof Cl?n.ha.ot(e):n.ha.nt(e),!t.isEqual(U.min()))try{const r=await Bl(n.localStore);t.compareTo(r)>=0&&await function(o,a){const u=o.ha.It(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o._a.get(d);p&&o._a.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o._a.get(h);if(!p)return;o._a.set(h,p.withResumeToken(he.EMPTY_BYTE_STRING,p.snapshotVersion)),zl(o,h);const T=new lt(p.target,h,d,p.sequenceNumber);uo(o,T)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){V(Nt,"Failed to raise snapshot:",r),await ii(n,r)}}async function ii(n,e,t){if(!ln(e))throw e;n.aa.add(1),await sr(n),n.la.set("Offline"),t||(t=()=>Bl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(Nt,"Retrying IndexedDB access"),await t(),n.aa.delete(1),await Ti(n)})}function Gl(n,e){return e().catch(t=>ii(n,t,e))}async function Ii(n){const e=F(n),t=Et(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:Ks;for(;gy(e);)try{const i=await J_(e.localStore,r);if(i===null){e.oa.length===0&&t.v_();break}r=i.batchId,_y(e,i)}catch(i){await ii(e,i)}Wl(e)&&Kl(e)}function gy(n){return xt(n)&&n.oa.length<10}function _y(n,e){n.oa.push(e);const t=Et(n);t.b_()&&t.W_&&t.G_(e.mutations)}function Wl(n){return xt(n)&&!Et(n).w_()&&n.oa.length>0}function Kl(n){Et(n).start()}async function yy(n){Et(n).H_()}async function vy(n){const e=Et(n);for(const t of n.oa)e.G_(t.mutations)}async function Ey(n,e,t){const r=n.oa.shift(),i=to.from(r,e,t);await Gl(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ii(n)}async function Ty(n,e){e&&Et(n).W_&&await async function(r,i){if(function(a){return r_(a)&&a!==C.ABORTED}(i.code)){const o=r.oa.shift();Et(r).D_(),await Gl(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ii(r)}}(n,e),Wl(n)&&Kl(n)}async function xc(n,e){const t=F(n);t.asyncQueue.verifyOperationInProgress(),V(Nt,"RemoteStore received new credentials");const r=xt(t);t.aa.add(3),await sr(t),r&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await Ti(t)}async function Iy(n,e){const t=F(n);e?(t.aa.delete(2),await Ti(t)):e||(t.aa.add(2),await sr(t),t.la.set("Unknown"))}function hn(n){return n.Pa||(n.Pa=function(t,r,i){const o=F(t);return o.Y_(),new oy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{jo:dy.bind(null,n),Jo:fy.bind(null,n),Zo:py.bind(null,n),Q_:my.bind(null,n)}),n.ua.push(async e=>{e?(n.Pa.D_(),ho(n)?lo(n):n.la.set("Unknown")):(await n.Pa.stop(),Hl(n))})),n.Pa}function Et(n){return n.Ta||(n.Ta=function(t,r,i){const o=F(t);return o.Y_(),new ay(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{jo:()=>Promise.resolve(),Jo:yy.bind(null,n),Zo:Ty.bind(null,n),z_:vy.bind(null,n),j_:Ey.bind(null,n)}),n.ua.push(async e=>{e?(n.Ta.D_(),await Ii(n)):(await n.Ta.stop(),n.oa.length>0&&(V(Nt,`Stopping write stream with ${n.oa.length} pending writes`),n.oa=[]))})),n.Ta}/**
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
 */class fo{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,u=new fo(e,t,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function po(n,e){if(Je("AsyncQueue",`${e}: ${n}`),ln(n))return new L(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Yt{static emptySet(e){return new Yt(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=Dn(),this.sortedSet=new J(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Yt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Uc{constructor(){this.Ia=new J(M.comparator)}track(e){const t=e.doc.key,r=this.Ia.get(t);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(t):e.type===1&&r.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):x(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,r)=>{e.push(r)}),e}}class rn{constructor(e,t,r,i,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new rn(e,t,Yt.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class wy{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class Ay{constructor(){this.queries=Fc(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,r){const i=F(t),o=i.queries;i.queries=Fc(),o.forEach((a,u)=>{for(const h of u.Ra)h.onError(r)})})(this,new L(C.ABORTED,"Firestore shutting down"))}}function Fc(){return new Lt(n=>pl(n),mi)}async function Ry(n,e){const t=F(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.Va()&&e.ma()&&(r=2):(o=new wy,r=e.ma()?0:1);try{switch(r){case 0:o.Aa=await t.onListen(i,!0);break;case 1:o.Aa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=po(a,`Initialization of query '${$t(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.Ra.push(e),e.ga(t.onlineState),o.Aa&&e.pa(o.Aa)&&mo(t)}async function Sy(n,e){const t=F(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.Ra.indexOf(e);a>=0&&(o.Ra.splice(a,1),o.Ra.length===0?i=e.ma()?0:1:!o.Va()&&e.ma()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Py(n,e){const t=F(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const u of a.Ra)u.pa(i)&&(r=!0);a.Aa=i}}r&&mo(t)}function Cy(n,e,t){const r=F(n),i=r.queries.get(e);if(i)for(const o of i.Ra)o.onError(t);r.queries.delete(e)}function mo(n){n.fa.forEach(e=>{e.next()})}var Ps,Bc;(Bc=Ps||(Ps={})).ya="default",Bc.Cache="cache";class by{constructor(e,t,r){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new rn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const r=t!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=rn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Ps.Cache}}/**
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
 */class Ql{constructor(e){this.key=e}}class Yl{constructor(e){this.key=e}}class ky{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=q(),this.mutatedKeys=q(),this.Ua=ml(e),this.Ka=new Yt(this.Ua)}get Wa(){return this.qa}Ga(e,t){const r=t?t.za:new Uc,i=t?t.Ka:this.Ka;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,T)=>{const R=i.get(p),P=gi(this.query,T)?T:null,D=!!R&&this.mutatedKeys.has(R.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let k=!1;R&&P?R.data.isEqual(P.data)?D!==N&&(r.track({type:3,doc:P}),k=!0):this.ja(R,P)||(r.track({type:2,doc:P}),k=!0,(h&&this.Ua(P,h)>0||d&&this.Ua(P,d)<0)&&(u=!0)):!R&&P?(r.track({type:0,doc:P}),k=!0):R&&!P&&(r.track({type:1,doc:R}),k=!0,(h||d)&&(u=!0)),k&&(P?(a=a.add(P),o=N?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ka:a,za:r,ys:u,mutatedKeys:o}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const a=e.za.da();a.sort((p,T)=>function(P,D){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Vt:k})}};return N(P)-N(D)}(p.type,T.type)||this.Ua(p.doc,T.doc)),this.Ha(r),i=i!=null&&i;const u=t&&!i?this.Ja():[],h=this.$a.size===0&&this.current&&!i?1:0,d=h!==this.Qa;return this.Qa=h,a.length!==0||d?{snapshot:new rn(this.query,e.Ka,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:u}:{Ya:u}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Uc,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=q(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const t=[];return e.forEach(r=>{this.$a.has(r)||t.push(new Yl(r))}),this.$a.forEach(r=>{e.has(r)||t.push(new Ql(r))}),t}Xa(e){this.qa=e.Ns,this.$a=q();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return rn.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const go="SyncEngine";class Vy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Dy{constructor(e){this.key=e,this.tu=!1}}class Ny{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.nu={},this.ru=new Lt(u=>pl(u),mi),this.iu=new Map,this.su=new Set,this.ou=new J(M.comparator),this._u=new Map,this.au=new io,this.uu={},this.cu=new Map,this.lu=nn.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function Oy(n,e,t=!0){const r=nh(n);let i;const o=r.ru.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.eu()):i=await Jl(r,e,t,!0),i}async function Ly(n,e){const t=nh(n);await Jl(t,e,!0,!1)}async function Jl(n,e,t,r){const i=await X_(n.localStore,Me(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return r&&(u=await My(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&$l(n.remoteStore,i),u}async function My(n,e,t,r,i){n.Pu=(T,R,P)=>async function(N,k,W,z){let H=k.view.Ga(W);H.ys&&(H=await Dc(N.localStore,k.query,!1).then(({documents:v})=>k.view.Ga(v,H)));const ee=z&&z.targetChanges.get(k.targetId),Re=z&&z.targetMismatches.get(k.targetId)!=null,te=k.view.applyChanges(H,N.isPrimaryClient,ee,Re);return qc(N,k.targetId,te.Ya),te.snapshot}(n,T,R,P);const o=await Dc(n.localStore,e,!0),a=new ky(e,o.Ns),u=a.Ga(o.documents),h=ir.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,h);qc(n,t,d.Ya);const p=new Vy(e,t,a);return n.ru.set(e,p),n.iu.has(t)?n.iu.get(t).push(e):n.iu.set(t,[e]),d.snapshot}async function xy(n,e,t){const r=F(n),i=r.ru.get(e),o=r.iu.get(i.targetId);if(o.length>1)return r.iu.set(i.targetId,o.filter(a=>!mi(a,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Rs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&co(r.remoteStore,i.targetId),Cs(r,i.targetId)}).catch(un)):(Cs(r,i.targetId),await Rs(r.localStore,i.targetId,!0))}async function Uy(n,e){const t=F(n),r=t.ru.get(e),i=t.iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),co(t.remoteStore,r.targetId))}async function Fy(n,e,t){const r=Gy(n);try{const i=await function(a,u){const h=F(a),d=se.now(),p=u.reduce((P,D)=>P.add(D.key),q());let T,R;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let D=Xe(),N=q();return h.Cs.getEntries(P,p).next(k=>{D=k,D.forEach((W,z)=>{z.isValidDocument()||(N=N.add(W))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,D)).next(k=>{T=k;const W=[];for(const z of u){const H=Xg(z,T.get(z.key).overlayedDocument);H!=null&&W.push(new Mt(z.key,H,al(H.value.mapValue),Ke.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,W,u)}).next(k=>{R=k;const W=k.applyToLocalDocumentSet(T,N);return h.documentOverlayCache.saveOverlays(P,k.batchId,W)})}).then(()=>({batchId:R.batchId,changes:_l(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let d=a.uu[a.currentUser.toKey()];d||(d=new J(B)),d=d.insert(u,h),a.uu[a.currentUser.toKey()]=d}(r,i.batchId,t),await or(r,i.changes),await Ii(r.remoteStore)}catch(i){const o=po(i,"Failed to persist write");t.reject(o)}}async function Xl(n,e){const t=F(n);try{const r=await Q_(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t._u.get(o);a&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.tu=!0:i.modifiedDocuments.size>0?K(a.tu,14607):i.removedDocuments.size>0&&(K(a.tu,42227),a.tu=!1))}),await or(t,r,e)}catch(r){await un(r)}}function jc(n,e,t){const r=F(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ru.forEach((o,a)=>{const u=a.view.ga(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=F(a);h.onlineState=u;let d=!1;h.queries.forEach((p,T)=>{for(const R of T.Ra)R.ga(u)&&(d=!0)}),d&&mo(h)}(r.eventManager,e),i.length&&r.nu.Q_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function By(n,e,t){const r=F(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r._u.get(e),o=i&&i.key;if(o){let a=new J(M.comparator);a=a.insert(o,ye.newNoDocument(o,U.min()));const u=q().add(o),h=new vi(U.min(),new Map,new J(B),a,u);await Xl(r,h),r.ou=r.ou.remove(o),r._u.delete(e),_o(r)}else await Rs(r.localStore,e,!1).then(()=>Cs(r,e,t)).catch(un)}async function jy(n,e){const t=F(n),r=e.batch.batchId;try{const i=await K_(t.localStore,e);eh(t,r,null),Zl(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await or(t,i)}catch(i){await un(i)}}async function qy(n,e,t){const r=F(n);try{const i=await function(a,u){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(T=>(K(T!==null,37113),p=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,e);eh(r,e,t),Zl(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await or(r,i)}catch(i){await un(i)}}function Zl(n,e){(n.cu.get(e)||[]).forEach(t=>{t.resolve()}),n.cu.delete(e)}function eh(n,e,t){const r=F(n);let i=r.uu[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.uu[r.currentUser.toKey()]=i}}function Cs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.iu.get(e))n.ru.delete(r),t&&n.nu.Tu(r,t);n.iu.delete(e),n.isPrimaryClient&&n.au.Ur(e).forEach(r=>{n.au.containsKey(r)||th(n,r)})}function th(n,e){n.su.delete(e.path.canonicalString());const t=n.ou.get(e);t!==null&&(co(n.remoteStore,t),n.ou=n.ou.remove(e),n._u.delete(t),_o(n))}function qc(n,e,t){for(const r of t)r instanceof Ql?(n.au.addReference(r.key,e),$y(n,r)):r instanceof Yl?(V(go,"Document no longer in limbo: "+r.key),n.au.removeReference(r.key,e),n.au.containsKey(r.key)||th(n,r.key)):x(19791,{Iu:r})}function $y(n,e){const t=e.key,r=t.path.canonicalString();n.ou.get(t)||n.su.has(r)||(V(go,"New document in limbo: "+t),n.su.add(r),_o(n))}function _o(n){for(;n.su.size>0&&n.ou.size<n.maxConcurrentLimboResolutions;){const e=n.su.values().next().value;n.su.delete(e);const t=new M(Z.fromString(e)),r=n.lu.next();n._u.set(r,new Dy(t)),n.ou=n.ou.insert(t,r),$l(n.remoteStore,new lt(Me(Zs(t.path)),r,"TargetPurposeLimboResolution",hi.le))}}async function or(n,e,t){const r=F(n),i=[],o=[],a=[];r.ru.isEmpty()||(r.ru.forEach((u,h)=>{a.push(r.Pu(h,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const T=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){i.push(d);const T=oo.Ps(h.targetId,d);o.push(T)}}))}),await Promise.all(a),r.nu.Q_(i),await async function(h,d){const p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>S.forEach(d,R=>S.forEach(R.ls,P=>p.persistence.referenceDelegate.addReference(T,R.targetId,P)).next(()=>S.forEach(R.hs,P=>p.persistence.referenceDelegate.removeReference(T,R.targetId,P)))))}catch(T){if(!ln(T))throw T;V(ao,"Failed to update sequence numbers: "+T)}for(const T of d){const R=T.targetId;if(!T.fromCache){const P=p.Ss.get(R),D=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(D);p.Ss=p.Ss.insert(R,N)}}}(r.localStore,o))}async function zy(n,e){const t=F(n);if(!t.currentUser.isEqual(e)){V(go,"User change. New user:",e.toKey());const r=await Fl(t.localStore,e);t.currentUser=e,function(o,a){o.cu.forEach(u=>{u.forEach(h=>{h.reject(new L(C.CANCELLED,a))})}),o.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await or(t,r.Ms)}}function Hy(n,e){const t=F(n),r=t._u.get(e);if(r&&r.tu)return q().add(r.key);{let i=q();const o=t.iu.get(e);if(!o)return i;for(const a of o){const u=t.ru.get(a);i=i.unionWith(u.view.Wa)}return i}}function nh(n){const e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=By.bind(null,e),e.nu.Q_=Py.bind(null,e.eventManager),e.nu.Tu=Cy.bind(null,e.eventManager),e}function Gy(n){const e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qy.bind(null,e),e}class si{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ei(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return W_(this.persistence,new z_,e.initialUser,this.serializer)}Ru(e){return new Ul(so.Ei,this.serializer)}Au(e){return new ey}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}si.provider={build:()=>new si};class Wy extends si{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){K(this.persistence.referenceDelegate instanceof ri,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new b_(r,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?Ie.withCacheSize(this.cacheSizeBytes):Ie.DEFAULT;return new Ul(r=>ri.Ei(r,t),this.serializer)}}class bs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zy.bind(null,this.syncEngine),await Iy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ay}()}createDatastore(e){const t=Ei(e.databaseInfo.databaseId),r=function(o){return new sy(o)}(e.databaseInfo);return function(o,a,u,h){return new uy(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,u){return new hy(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>jc(this.syncEngine,t,0),function(){return Lc.C()?new Lc:new ty}())}createSyncEngine(e,t){return function(i,o,a,u,h,d,p){const T=new Ny(i,o,a,u,h,d);return p&&(T.hu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=F(i);V(Nt,"RemoteStore shutting down."),o.aa.add(5),await sr(o),o.ca.shutdown(),o.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}bs.provider={build:()=>new bs};/**
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
 *//**
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
 */class Ky{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Je("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Tt="FirestoreClient";class Qy{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=_e.UNAUTHENTICATED,this.clientId=Ju.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{V(Tt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V(Tt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=po(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ss(n,e){n.asyncQueue.verifyOperationInProgress(),V(Tt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Fl(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function $c(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Yy(n);V(Tt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>xc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>xc(e.remoteStore,i)),n._onlineComponents=e}async function Yy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Tt,"Using user provided OfflineComponentProvider");try{await ss(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Xt("Error using user provided cache. Falling back to memory cache: "+t),await ss(n,new si)}}else V(Tt,"Using default OfflineComponentProvider"),await ss(n,new Wy(void 0));return n._offlineComponents}async function rh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Tt,"Using user provided OnlineComponentProvider"),await $c(n,n._uninitializedComponentsProvider._online)):(V(Tt,"Using default OnlineComponentProvider"),await $c(n,new bs))),n._onlineComponents}function Jy(n){return rh(n).then(e=>e.syncEngine)}async function Xy(n){const e=await rh(n),t=e.eventManager;return t.onListen=Oy.bind(null,e.syncEngine),t.onUnlisten=xy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ly.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Uy.bind(null,e.syncEngine),t}function Zy(n,e,t={}){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new Ky({next:R=>{p.yu(),a.enqueueAndForget(()=>Sy(o,T));const P=R.docs.has(u);!P&&R.fromCache?d.reject(new L(C.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&R.fromCache&&h&&h.source==="server"?d.reject(new L(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(R)},error:R=>d.reject(R)}),T=new by(Zs(u.path),p,{includeMetadataChanges:!0,Fa:!0});return Ry(o,T)}(await Xy(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function ih(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const zc=new Map;/**
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
 */function ev(n,e,t){if(!t)throw new L(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tv(n,e,t,r){if(e===!0&&r===!0)throw new L(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hc(n){if(!M.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function Qn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=yo(n);throw new L(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const sh="firestore.googleapis.com",Gc=!0;class Wc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sh,this.ssl=Gc}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Gc;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xl;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<P_)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ih((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rg;switch(r.type){case"firstParty":return new ag(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=zc.get(t);r&&(V("ComponentProvider","Removing Datastore"),zc.delete(t),r.terminate())}(this),Promise.resolve()}}function nv(n,e,t,r={}){var i;const o=(n=Qn(n,vo))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;o.host!==sh&&o.host!==u&&Xt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:!1,emulatorOptions:r});if(!Ct(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=_e.MOCK_USER;else{d=pd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new L(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new _e(T)}n._authCredentials=new ig(new Qu(d,p))}}/**
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
 */class Eo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Eo(this.firestore,e,this._query)}}class Ce{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ce(this.firestore,e,this._key)}}class Yn extends Eo{constructor(e,t,r){super(e,t,Zs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ce(this.firestore,null,new M(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function Vv(n,e,...t){if(n=we(n),arguments.length===1&&(e=Ju.newId()),ev("doc","path",e),n instanceof vo){const r=Z.fromString(e,...t);return Hc(r),new Ce(n,null,new M(r))}{if(!(n instanceof Ce||n instanceof Yn))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return Hc(r),new Ce(n.firestore,n instanceof Yn?n.converter:null,new M(r))}}/**
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
 */const Kc="AsyncQueue";class Qc{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new jl(this,"async_queue_retry"),this.ju=()=>{const r=is();r&&V(Kc,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const t=is();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=is();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new mt;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!ln(e))throw e;V(Kc,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Je("INTERNAL UNHANDLED ERROR: ",Yc(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=t,t}enqueueAfterDelay(e,t,r){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const i=fo.createAndSchedule(this,e,t,r,o=>this.Xu(o));return this.Uu.push(i),i}Ju(){this.Ku&&x(47125,{ec:Yc(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function Yc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class To extends vo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Qc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qc(e),this._firestoreClient=void 0,await e}}}function rv(n,e){const t=typeof n=="object"?n:Ns(),r=typeof n=="string"?n:Yr,i=Ds(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=dd("firestore");o&&nv(i,...o)}return i}function oh(n){if(n._terminated)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||iv(n),n._firestoreClient}function iv(n){var e,t,r;const i=n._freezeSettings(),o=function(u,h,d,p){return new Ig(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,ih(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Qy(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sn(he.fromBase64String(e))}catch(t){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new sn(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Io{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ah{constructor(e){this._methodName=e}}/**
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
 */class wo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
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
 */class Ao{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const sv=/^__.*__$/;class ov{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms):new rr(e,this.data,t,this.fieldTransforms)}}function ch(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{oc:n})}}class Ro{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this._c(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Ro(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ac({path:r,cc:!1});return i.lc(e),i}hc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ac({path:r,cc:!1});return i._c(),i}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return oi(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(ch(this.oc)&&sv.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class av{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ei(e)}dc(e,t,r,i=!1){return new Ro({oc:e,methodName:t,Ec:r,path:le.emptyPath(),cc:!1,Ic:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cv(n){const e=n._freezeSettings(),t=Ei(n._databaseId);return new av(n._databaseId,!!e.ignoreUndefinedProperties,t)}function uv(n,e,t,r,i,o={}){const a=n.dc(o.merge||o.mergeFields?2:0,e,t,i);dh("Data must be an object, but it was:",a,r);const u=lh(r,a);let h,d;if(o.merge)h=new De(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const T of o.mergeFields){const R=lv(e,T,t);if(!a.contains(R))throw new L(C.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);dv(p,R)||p.push(R)}h=new De(p),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new ov(new Pe(u),h,d)}function uh(n,e){if(hh(n=we(n)))return dh("Unsupported field value:",e,n),lh(n,e);if(n instanceof ah)return function(r,i){if(!ch(i.oc))throw i.Tc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Tc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const u of r){let h=uh(u,i.Pc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Gg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=se.fromDate(r);return{timestampValue:ni(i.serializer,o)}}if(r instanceof se){const o=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ni(i.serializer,o)}}if(r instanceof wo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sn)return{bytesValue:kl(i.serializer,r._byteString)};if(r instanceof Ce){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Tc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ro(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ao)return function(a,u){return{mapValue:{fields:{[sl]:{stringValue:ol},[Jr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.Tc("VectorValues must only contain numeric values.");return eo(u.serializer,d)})}}}}}}(r,i);throw i.Tc(`Unsupported field value: ${yo(r)}`)}(n,e)}function lh(n,e){const t={};return Zu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ot(n,(r,i)=>{const o=uh(i,e.uc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function hh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof wo||n instanceof sn||n instanceof Ce||n instanceof ah||n instanceof Ao)}function dh(n,e,t){if(!hh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=yo(t);throw r==="an object"?e.Tc(n+" a custom object"):e.Tc(n+" "+r)}}function lv(n,e,t){if((e=we(e))instanceof Io)return e._internalPath;if(typeof e=="string")return fh(n,e);throw oi("Field path arguments must be of type string or ",n,!1,void 0,t)}const hv=new RegExp("[~\\*/\\[\\]]");function fh(n,e,t){if(e.search(hv)>=0)throw oi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Io(...e.split("."))._internalPath}catch{throw oi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function oi(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new L(C.INVALID_ARGUMENT,u+n+h)}function dv(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class ph{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fv extends ph{data(){return super.data()}}function mh(n,e){return typeof e=="string"?fh(n,e):e instanceof Io?e._internalPath:e._delegate._internalPath}class pv{convertValue(e,t="none"){switch(vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ot(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Jr].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ne(a.doubleValue));return new Ao(o)}convertGeoPoint(e){return new wo(ne(e.latitude),ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=fi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(zn(e));default:return null}}convertTimestamp(e){const t=_t(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Z.fromString(e);K(Ml(r),9688,{name:e});const i=new Hn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(t)||Je(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function mv(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class gv{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gh extends ph{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _v(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(mh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class _v extends gh{data(e={}){return super.data(e)}}/**
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
 */function Dv(n){n=Qn(n,Ce);const e=Qn(n.firestore,To);return Zy(oh(e),n._key).then(t=>Ev(e,n,t))}class yv extends pv{constructor(e){super(),this.firestore=e}convertBytes(e){return new sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,t)}}function Nv(n,e,t){n=Qn(n,Ce);const r=Qn(n.firestore,To),i=mv(n.converter,e);return vv(r,[uv(cv(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ke.none())])}function vv(n,e){return function(r,i){const o=new mt;return r.asyncQueue.enqueueAndForget(async()=>Fy(await Jy(r),i,o)),o.promise}(oh(n),e)}function Ev(n,e,t){const r=t.docs.get(e._key),i=new yv(n);return new gh(n,i,e._key,r,new gv(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){cn=i})(on),Jt(new bt("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new To(new sg(r.getProvider("auth-internal")),new cg(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hn(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),ft(nc,rc,e),ft(nc,rc,"esm2017")})();const Tv={apiKey:"AIzaSyD_wnxmDJymJSgS9379ChbqqWwF6z_Pi04",authDomain:"cloudward-5972b.firebaseapp.com",projectId:"cloudward-5972b",storageBucket:"cloudward-5972b.firebasestorage.app",messagingSenderId:"293779252761",appId:"1:293779252761:web:d10a1cdf53872769e42c88",measurementId:"G-B4HHKZVZK5"},_h=kf().length===0?su(Tv):Ns(),Ov=tg(_h),Lv=rv(_h);export{Ov as a,Av as b,Sv as c,bv as d,Vv as e,Lv as f,Dv as g,Cv as h,Nv as i,Rv as s,Pv as v};

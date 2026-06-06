(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kr="150",eh=0,da=1,nh=2,rc=1,ac=2,As=3,ni=0,Ye=1,Fn=2,ei=0,Ji=1,ua=2,fa=3,pa=4,ih=5,ji=100,sh=101,oh=102,ma=103,ga=104,rh=200,ah=201,lh=202,ch=203,lc=204,cc=205,hh=206,dh=207,uh=208,fh=209,ph=210,mh=0,gh=1,vh=2,Dr=3,yh=4,_h=5,xh=6,Mh=7,hc=0,wh=1,bh=2,Gn=0,Sh=1,Eh=2,Ah=3,Ch=4,Th=5,dc=300,es=301,ns=302,Ir=303,Pr=304,Lo=306,Or=1e3,Ke=1001,Nr=1002,me=1003,va=1004,Fo=1005,tn=1006,Rh=1007,Ps=1008,wi=1009,Lh=1010,Dh=1011,uc=1012,Ih=1013,_i=1014,xi=1015,Os=1016,Ph=1017,Oh=1018,Qi=1020,Nh=1021,hn=1023,Bh=1024,kh=1025,Mi=1026,is=1027,zh=1028,Fh=1029,Uh=1030,Gh=1031,Vh=1033,Uo=33776,Go=33777,Vo=33778,Ho=33779,ya=35840,_a=35841,xa=35842,Ma=35843,Hh=36196,wa=37492,ba=37496,Sa=37808,Ea=37809,Aa=37810,Ca=37811,Ta=37812,Ra=37813,La=37814,Da=37815,Ia=37816,Pa=37817,Oa=37818,Na=37819,Ba=37820,ka=37821,Wo=36492,Wh=36283,za=36284,Fa=36285,Ua=36286,bi=3e3,ne=3001,qh=3200,Xh=3201,fc=0,Kh=1,bn="srgb",Ns="srgb-linear",pc="display-p3",qo=7680,Yh=519,Br=35044,Ga="300 es",kr=1035;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Va=1234567;const Ts=Math.PI/180,xo=180/Math.PI;function Vn(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[a&255]+Te[a>>8&255]+Te[a>>16&255]+Te[a>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Fe(a,t,e){return Math.max(t,Math.min(e,a))}function Yr(a,t){return(a%t+t)%t}function jh(a,t,e,n,i){return n+(a-t)*(i-n)/(e-t)}function $h(a,t,e){return a!==t?(e-a)/(t-a):0}function Rs(a,t,e){return(1-e)*a+e*t}function Zh(a,t,e,n){return Rs(a,t,1-Math.exp(-e*n))}function Jh(a,t=1){return t-Math.abs(Yr(a,t*2)-t)}function Qh(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*(3-2*a))}function td(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*a*(a*(a*6-15)+10))}function ed(a,t){return a+Math.floor(Math.random()*(t-a+1))}function nd(a,t){return a+Math.random()*(t-a)}function id(a){return a*(.5-Math.random())}function sd(a){a!==void 0&&(Va=a);let t=Va+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function od(a){return a*Ts}function rd(a){return a*xo}function zr(a){return(a&a-1)===0&&a!==0}function ad(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function mc(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function ld(a,t,e,n,i){const s=Math.cos,o=Math.sin,r=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":a.set(r*h,l*u,l*d,r*c);break;case"YZY":a.set(l*d,r*h,l*u,r*c);break;case"ZXZ":a.set(l*u,l*d,r*h,r*c);break;case"XZX":a.set(r*h,l*g,l*m,r*c);break;case"YXY":a.set(l*m,r*h,l*g,r*c);break;case"ZYZ":a.set(l*g,l*m,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Zt(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const on={DEG2RAD:Ts,RAD2DEG:xo,generateUUID:Vn,clamp:Fe,euclideanModulo:Yr,mapLinear:jh,inverseLerp:$h,lerp:Rs,damp:Zh,pingpong:Jh,smoothstep:Qh,smootherstep:td,randInt:ed,randFloat:nd,randFloatSpread:id,seededRandom:sd,degToRad:od,radToDeg:rd,isPowerOfTwo:zr,ceilPowerOfTwo:ad,floorPowerOfTwo:mc,setQuaternionFromProperEuler:ld,normalize:Zt,denormalize:Un};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,r,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],f=i[0],p=i[3],y=i[6],v=i[1],_=i[4],x=i[7],S=i[2],E=i[5],T=i[8];return s[0]=o*f+r*v+l*S,s[3]=o*p+r*_+l*E,s[6]=o*y+r*x+l*T,s[1]=c*f+h*v+u*S,s[4]=c*p+h*_+u*E,s[7]=c*y+h*x+u*T,s[2]=d*f+m*v+g*S,s[5]=d*p+m*_+g*E,s[8]=d*y+m*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*r*c-n*s*h+n*r*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=h*o-r*c,d=r*l-h*s,m=c*s-o*l,g=e*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return t[0]=u*f,t[1]=(i*c-h*n)*f,t[2]=(r*n-i*o)*f,t[3]=d*f,t[4]=(h*e-i*l)*f,t[5]=(i*s-r*e)*f,t[6]=m*f,t[7]=(n*l-c*e)*f,t[8]=(o*e-n*s)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,r){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*r)+o+t,-i*c,i*l,-i*(-c*o+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Xo.makeScale(t,e)),this}rotate(t){return this.premultiply(Xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xo.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new ke;function gc(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Mo(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}let Si=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,r){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],m=s[o+1],g=s[o+2],f=s[o+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=f;return}if(u!==f||l!==d||c!==m||h!==g){let p=1-r;const y=l*d+c*m+h*g+u*f,v=y>=0?1:-1,_=1-y*y;if(_>Number.EPSILON){const S=Math.sqrt(_),E=Math.atan2(S,y*v);p=Math.sin(p*E)/S,r=Math.sin(r*E)/S}const x=r*v;if(l=l*p+d*x,c=c*p+m*x,h=h*p+g*x,u=u*p+f*x,p===1-r){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const r=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return t[e]=r*g+h*u+l*m-c*d,t[e+1]=l*g+h*d+c*u-r*m,t[e+2]=c*g+h*m+r*d-l*u,t[e+3]=h*g-r*u-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(i/2),u=r(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],r=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+r+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>r&&n>u){const m=2*Math.sqrt(1+n-r-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(r>u){const m=2*Math.sqrt(1+r-n-u);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-r);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*r+i*c-s*l,this._y=i*h+o*l+s*r-n*c,this._z=s*h+o*c+n*l-i*r,this._w=o*h-n*r-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*t._w+n*t._x+i*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ha.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ha.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z,l=t.w,c=l*e+o*i-r*n,h=l*n+r*e-s*i,u=l*i+s*n-o*e,d=-s*e-o*n-r*i;return this.x=c*l+d*-s+h*-r-u*-o,this.y=h*l+d*-o+u*-s-c*-r,this.z=u*l+d*-r+c*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,r=e.y,l=e.z;return this.x=i*l-s*r,this.y=s*o-n*l,this.z=n*r-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ko.copy(this).projectOnVector(t),this.sub(Ko)}reflect(t){return this.sub(Ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new G,Ha=new Si;function ts(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Yo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const cd=new ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),hd=new ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Qn=new G;function dd(a){return a.convertSRGBToLinear(),Qn.set(a.r,a.g,a.b).applyMatrix3(hd),a.setRGB(Qn.x,Qn.y,Qn.z)}function ud(a){return Qn.set(a.r,a.g,a.b).applyMatrix3(cd),a.setRGB(Qn.x,Qn.y,Qn.z).convertLinearToSRGB()}const fd={[Ns]:a=>a,[bn]:a=>a.convertSRGBToLinear(),[pc]:dd},pd={[Ns]:a=>a,[bn]:a=>a.convertLinearToSRGB(),[pc]:ud},Pe={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return Ns},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;const n=fd[t],i=pd[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}};let Ri;class vc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=Mo("canvas")),Ri.width=t.width,Ri.height=t.height;const n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ts(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ts(e[n]/255)*255):e[n]=ts(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class yc{constructor(t=null){this.isSource=!0,this.uuid=Vn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(jo(i[o].image)):s.push(jo(i[o]))}else s=jo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function jo(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?vc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let md=0;class Ve extends as{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=Ke,i=Ke,s=tn,o=Ps,r=hn,l=wi,c=Ve.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Vn(),this.name="",this.source=new yc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Or:t.x=t.x-Math.floor(t.x);break;case Ke:t.x=t.x<0?0:1;break;case Nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Or:t.y=t.y-Math.floor(t.y);break;case Ke:t.y=t.y<0?0:1;break;case Nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=dc;Ve.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,i=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],f=l[2],p=l[6],y=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,x=(m+1)/2,S=(y+1)/2,E=(h+d)/4,T=(u+f)/4,w=(g+p)/4;return _>x&&_>S?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=E/n,s=T/n):x>S?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=w/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=T/s,i=w/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(u-f)*(u-f)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-f)/v,this.z=(d-h)/v,this.w=Math.acos((c+m+y-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ei extends as{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:tn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _c extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=me,this.minFilter=me,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gd extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=me,this.minFilter=me,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],d=t[l+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>r&&(r=d)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),d=t.getZ(l);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>r&&(r=d)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,r=s.count;o<r;o++)ai.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(ai)}else n.boundingBox===null&&n.computeBoundingBox(),$o.copy(n.boundingBox),$o.applyMatrix4(t.matrixWorld),this.union($o);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Gs.subVectors(this.max,ds),Li.subVectors(t.a,ds),Di.subVectors(t.b,ds),Ii.subVectors(t.c,ds),qn.subVectors(Di,Li),Xn.subVectors(Ii,Di),li.subVectors(Li,Ii);let e=[0,-qn.z,qn.y,0,-Xn.z,Xn.y,0,-li.z,li.y,qn.z,0,-qn.x,Xn.z,0,-Xn.x,li.z,0,-li.x,-qn.y,qn.x,0,-Xn.y,Xn.x,0,-li.y,li.x,0];return!Zo(e,Li,Di,Ii,Gs)||(e=[1,0,0,0,1,0,0,0,1],!Zo(e,Li,Di,Ii,Gs))?!1:(Vs.crossVectors(qn,Xn),e=[Vs.x,Vs.y,Vs.z],Zo(e,Li,Di,Ii,Gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Tn=[new G,new G,new G,new G,new G,new G,new G,new G],ai=new G,$o=new Fs,Li=new G,Di=new G,Ii=new G,qn=new G,Xn=new G,li=new G,ds=new G,Gs=new G,Vs=new G,ci=new G;function Zo(a,t,e,n,i){for(let s=0,o=a.length-3;s<=o;s+=3){ci.fromArray(a,s);const r=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const vd=new Fs,us=new G,Jo=new G;let jr=class{constructor(t=new G,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);const e=us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(us,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(Jo)),this.expandByPoint(us.copy(t.center).sub(Jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Rn=new G,Qo=new G,Hs=new G,Kn=new G,tr=new G,Ws=new G,er=new G;let xc=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qo.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Qo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Hs),r=Kn.dot(this.direction),l=-Kn.dot(Hs),c=Kn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*l-r,d=o*r-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const f=1/h;u*=f,d*=f,m=u*(u+o*d+2*r)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+r)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+r)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+r)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(o*s+r)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+r)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qo).addScaledVector(Hs,d),m}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(r=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(r=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,i,s){tr.subVectors(e,t),Ws.subVectors(n,t),er.crossVectors(tr,Ws);let o=this.direction.dot(er),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const l=r*this.direction.dot(Ws.crossVectors(Kn,Ws));if(l<0)return null;const c=r*this.direction.dot(tr.cross(Kn));if(c<0||l+c>o)return null;const h=-r*Kn.dot(er);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class fe{constructor(){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,r,l,c,h,u,d,m,g,f,p){const y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=i,y[1]=s,y[5]=o,y[9]=r,y[13]=l,y[2]=c,y[6]=h,y[10]=u,y[14]=d,y[3]=m,y[7]=g,y[11]=f,y[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Pi.setFromMatrixColumn(t,0).length(),s=1/Pi.setFromMatrixColumn(t,1).length(),o=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,m=o*u,g=r*h,f=r*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=d-f*c,e[9]=-r*l,e[2]=f-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,m=l*u,g=c*h,f=c*u;e[0]=d+f*r,e[4]=g*r-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-r,e[2]=m*r-g,e[6]=f+d*r,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,m=l*u,g=c*h,f=c*u;e[0]=d-f*r,e[4]=-o*u,e[8]=g+m*r,e[1]=m+g*r,e[5]=o*h,e[9]=f-d*r,e[2]=-o*c,e[6]=r,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,m=o*u,g=r*h,f=r*u;e[0]=l*h,e[4]=g*c-m,e[8]=d*c+f,e[1]=l*u,e[5]=f*c+d,e[9]=m*c-g,e[2]=-c,e[6]=r*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,g=r*l,f=r*c;e[0]=l*h,e[4]=f-d*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-r*h,e[2]=-c*h,e[6]=m*u+g,e[10]=d-f*u}else if(t.order==="XZY"){const d=o*l,m=o*c,g=r*l,f=r*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+f,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=r*h,e[10]=f*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,_d)}lookAt(t,e,n){const i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Yn.crossVectors(n,qe),Yn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Yn.crossVectors(n,qe)),Yn.normalize(),qs.crossVectors(qe,Yn),i[0]=Yn.x,i[4]=qs.x,i[8]=qe.x,i[1]=Yn.y,i[5]=qs.y,i[9]=qe.y,i[2]=Yn.z,i[6]=qs.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],f=n[6],p=n[10],y=n[14],v=n[3],_=n[7],x=n[11],S=n[15],E=i[0],T=i[4],w=i[8],C=i[12],I=i[1],z=i[5],U=i[9],D=i[13],P=i[2],O=i[6],N=i[10],K=i[14],k=i[3],q=i[7],Y=i[11],et=i[15];return s[0]=o*E+r*I+l*P+c*k,s[4]=o*T+r*z+l*O+c*q,s[8]=o*w+r*U+l*N+c*Y,s[12]=o*C+r*D+l*K+c*et,s[1]=h*E+u*I+d*P+m*k,s[5]=h*T+u*z+d*O+m*q,s[9]=h*w+u*U+d*N+m*Y,s[13]=h*C+u*D+d*K+m*et,s[2]=g*E+f*I+p*P+y*k,s[6]=g*T+f*z+p*O+y*q,s[10]=g*w+f*U+p*N+y*Y,s[14]=g*C+f*D+p*K+y*et,s[3]=v*E+_*I+x*P+S*k,s[7]=v*T+_*z+x*O+S*q,s[11]=v*w+_*U+x*N+S*Y,s[15]=v*C+_*D+x*K+S*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],r=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],m=t[14],g=t[3],f=t[7],p=t[11],y=t[15];return g*(+s*l*u-i*c*u-s*r*d+n*c*d+i*r*m-n*l*m)+f*(+e*l*m-e*c*d+s*o*d-i*o*m+i*c*h-s*l*h)+p*(+e*c*u-e*r*m-s*o*u+n*o*m+s*r*h-n*c*h)+y*(-i*r*h-e*l*u+e*r*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],m=t[11],g=t[12],f=t[13],p=t[14],y=t[15],v=u*p*c-f*d*c+f*l*m-r*p*m-u*l*y+r*d*y,_=g*d*c-h*p*c-g*l*m+o*p*m+h*l*y-o*d*y,x=h*f*c-g*u*c+g*r*m-o*f*m-h*r*y+o*u*y,S=g*u*l-h*f*l-g*r*d+o*f*d+h*r*p-o*u*p,E=e*v+n*_+i*x+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(f*d*s-u*p*s-f*i*m+n*p*m+u*i*y-n*d*y)*T,t[2]=(r*p*s-f*l*s+f*i*c-n*p*c-r*i*y+n*l*y)*T,t[3]=(u*l*s-r*d*s-u*i*c+n*d*c+r*i*m-n*l*m)*T,t[4]=_*T,t[5]=(h*p*s-g*d*s+g*i*m-e*p*m-h*i*y+e*d*y)*T,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*y-e*l*y)*T,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*m+e*l*m)*T,t[8]=x*T,t[9]=(g*u*s-h*f*s-g*n*m+e*f*m+h*n*y-e*u*y)*T,t[10]=(o*f*s-g*r*s+g*n*c-e*f*c-o*n*y+e*r*y)*T,t[11]=(h*r*s-o*u*s-h*n*c+e*u*c+o*n*m-e*r*m)*T,t[12]=S*T,t[13]=(h*f*i-g*u*i+g*n*d-e*f*d-h*n*p+e*u*p)*T,t[14]=(g*r*i-o*f*i-g*n*l+e*f*l+o*n*p-e*r*p)*T,t[15]=(o*u*i-h*r*i+h*n*l-e*u*l-o*n*d+e*r*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,r=t.y,l=t.z,c=s*o,h=s*r;return this.set(c*o+n,c*r-i*l,c*l+i*r,0,c*r+i*l,h*r+n,h*l-i*o,0,c*l-i*r,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,r=e._z,l=e._w,c=s+s,h=o+o,u=r+r,d=s*c,m=s*h,g=s*u,f=o*h,p=o*u,y=r*u,v=l*c,_=l*h,x=l*u,S=n.x,E=n.y,T=n.z;return i[0]=(1-(f+y))*S,i[1]=(m+x)*S,i[2]=(g-_)*S,i[3]=0,i[4]=(m-x)*E,i[5]=(1-(d+y))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(g+_)*T,i[9]=(p-v)*T,i[10]=(1-(d+f))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Pi.set(i[0],i[1],i[2]).length();const o=Pi.set(i[4],i[5],i[6]).length(),r=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],rn.copy(this);const c=1/s,h=1/o,u=1/r;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=s,n.y=o,n.z=r,this}makePerspective(t,e,n,i,s,o){const r=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return r[0]=l,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=c,r[9]=u,r[13]=0,r[2]=0,r[6]=0,r[10]=d,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,n,i,s,o){const r=this.elements,l=1/(e-t),c=1/(n-i),h=1/(o-s),u=(e+t)*l,d=(n+i)*c,m=(o+s)*h;return r[0]=2*l,r[4]=0,r[8]=0,r[12]=-u,r[1]=0,r[5]=2*c,r[9]=0,r[13]=-d,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new G,rn=new fe,yd=new G(0,0,0),_d=new G(1,1,1),Yn=new G,qs=new G,qe=new G,Wa=new fe,qa=new Si;class Do{constructor(t=0,e=0,n=0,i=Do.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],r=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Fe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qa.setFromEuler(this),this.setFromQuaternion(qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Do.DEFAULT_ORDER="XYZ";class $r{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xd=0;const Xa=new G,Oi=new Si,Ln=new fe,Xs=new G,fs=new G,Md=new G,wd=new Si,Ka=new G(1,0,0),Ya=new G(0,1,0),ja=new G(0,0,1),bd={type:"added"},$a={type:"removed"};class Ce extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new G,e=new Do,n=new Si,i=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new ke}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Ka,t)}rotateY(t){return this.rotateOnAxis(Ya,t)}rotateZ(t){return this.rotateOnAxis(ja,t)}translateOnAxis(t,e){return Xa.copy(t).applyQuaternion(this.quaternion),this.position.add(Xa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ka,t)}translateY(t){return this.translateOnAxis(Ya,t)}translateZ(t){return this.translateOnAxis(ja,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xs.copy(t):Xs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(fs,Xs,this.up):Ln.lookAt(Xs,fs,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(bd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($a)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent($a)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,t,Md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(t.materials,this.material[l]));i.material=r}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(s(t.animations,l))}}if(e){const r=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ce.DEFAULT_UP=new G(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new G,Dn=new G,nr=new G,In=new G,Ni=new G,Bi=new G,Za=new G,ir=new G,sr=new G,or=new G;class En{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),an.subVectors(t,e),i.cross(an);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){an.subVectors(i,e),Dn.subVectors(n,e),nr.subVectors(t,e);const o=an.dot(an),r=an.dot(Dn),l=an.dot(nr),c=Dn.dot(Dn),h=Dn.dot(nr),u=o*c-r*r;if(u===0)return s.set(-2,-1,-1);const d=1/u,m=(c*l-r*h)*d,g=(o*h-r*l)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,In),In.x>=0&&In.y>=0&&In.x+In.y<=1}static getUV(t,e,n,i,s,o,r,l){return this.getBarycoord(t,e,n,i,In),l.set(0,0),l.addScaledVector(s,In.x),l.addScaledVector(o,In.y),l.addScaledVector(r,In.z),l}static isFrontFacing(t,e,n,i){return an.subVectors(n,e),Dn.subVectors(t,e),an.cross(Dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),an.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return En.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,r;Ni.subVectors(i,n),Bi.subVectors(s,n),ir.subVectors(t,n);const l=Ni.dot(ir),c=Bi.dot(ir);if(l<=0&&c<=0)return e.copy(n);sr.subVectors(t,i);const h=Ni.dot(sr),u=Bi.dot(sr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ni,o);or.subVectors(t,s);const m=Ni.dot(or),g=Bi.dot(or);if(g>=0&&m<=g)return e.copy(s);const f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(n).addScaledVector(Bi,r);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Za.subVectors(s,i),r=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(Za,r);const y=1/(p+f+d);return o=f*y,r=d*y,e.copy(n).addScaledVector(Ni,o).addScaledVector(Bi,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Sd=0,ls=class extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Ji,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const l=s[r];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function rr(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Pe.workingColorSpace){if(t=Yr(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=rr(o,s,t+1/3),this.g=rr(o,s,t),this.b=rr(o,s,t-1/3)}return Pe.toWorkingColorSpace(this,i),this}setStyle(t,e=bn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Pe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Pe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Pe.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Pe.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){const n=Mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}copyLinearToSRGB(t){return this.r=Yo(t.r),this.g=Yo(t.g),this.b=Yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return Pe.fromWorkingColorSpace(Re.copy(this),t),Fe(Re.r*255,0,255)<<16^Fe(Re.g*255,0,255)<<8^Fe(Re.b*255,0,255)<<0}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,s=Re.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let l,c;const h=(r+o)/2;if(r===o)l=0,c=0;else{const u=o-r;switch(c=h<=.5?u/(o+r):u/(2-o-r),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=bn){Pe.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(ln),ln.h+=t,ln.s+=e,ln.l+=n,this.setHSL(ln.h,ln.s,ln.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ln),t.getHSL(Ks);const n=Rs(ln.h,Ks.h,e),i=Rs(ln.s,Ks.s,e),s=Rs(ln.l,Ks.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Xt;Xt.NAMES=Mc;class Zr extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new G,Ys=new kt;class fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Br,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Br&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class wc extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bc extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class dn extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ed=0;const Ze=new fe,ar=new Ce,ki=new G,Xe=new Fs,ps=new Fs,we=new G;class Wn extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gc(t)?bc:wc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return ar.lookAt(t),ar.updateMatrix(),this.applyMatrix4(ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Xe.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const r=e[s];ps.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(Xe.min,ps.min),Xe.expandByPoint(we),we.addVectors(Xe.max,ps.max),Xe.expandByPoint(we)):(Xe.expandByPoint(ps.min),Xe.expandByPoint(ps.max))}Xe.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)we.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(we));if(e)for(let s=0,o=e.length;s<o;s++){const r=e[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)we.fromBufferAttribute(r,c),l&&(ki.fromBufferAttribute(t,c),we.add(ki)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<r;I++)c[I]=new G,h[I]=new G;const u=new G,d=new G,m=new G,g=new kt,f=new kt,p=new kt,y=new G,v=new G;function _(I,z,U){u.fromArray(i,I*3),d.fromArray(i,z*3),m.fromArray(i,U*3),g.fromArray(o,I*2),f.fromArray(o,z*2),p.fromArray(o,U*2),d.sub(u),m.sub(u),f.sub(g),p.sub(g);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(y.copy(d).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(D),v.copy(m).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(D),c[I].add(y),c[z].add(y),c[U].add(y),h[I].add(v),h[z].add(v),h[U].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let I=0,z=x.length;I<z;++I){const U=x[I],D=U.start,P=U.count;for(let O=D,N=D+P;O<N;O+=3)_(n[O+0],n[O+1],n[O+2])}const S=new G,E=new G,T=new G,w=new G;function C(I){T.fromArray(s,I*3),w.copy(T);const z=c[I];S.copy(z),S.sub(T.multiplyScalar(T.dot(z))).normalize(),E.crossVectors(w,z);const D=E.dot(h[I])<0?-1:1;l[I*4]=S.x,l[I*4+1]=S.y,l[I*4+2]=S.z,l[I*4+3]=D}for(let I=0,z=x.length;I<z;++I){const U=x[I],D=U.start,P=U.count;for(let O=D,N=D+P;O<N;O+=3)C(n[O+0]),C(n[O+1]),C(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new G,s=new G,o=new G,r=new G,l=new G,c=new G,h=new G,u=new G;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),f=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,f),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,u=r.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){r.isInterleavedBufferAttribute?m=l[f]*r.data.stride+r.offset:m=l[f]*h;for(let y=0;y<h;y++)d[g++]=c[m++]}return new fn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Wn,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],c=t(l,n);e.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=t(d,n);l.push(m)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ja=new fe,vn=new xc,js=new jr,Qa=new G,ms=new G,gs=new G,vs=new G,lr=new G,$s=new G,Zs=new kt,Js=new kt,Qs=new kt,cr=new G,to=new G;class mt extends Ce{constructor(t=new Wn,e=new Zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(s&&r){$s.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=r[l],u=s[l];h!==0&&(lr.fromBufferAttribute(u,t),o?$s.addScaledVector(lr,h):$s.addScaledVector(lr.sub(e),h))}e.add($s)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),vn.copy(t.ray).recast(t.near),js.containsPoint(vn.origin)===!1&&(vn.intersectSphere(js,Qa)===null||vn.origin.distanceToSquared(Qa)>(t.far-t.near)**2))||(Ja.copy(s).invert(),vn.copy(t.ray).applyMatrix4(Ja),n.boundingBox!==null&&vn.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,u=n.groups,d=n.drawRange;if(r!==null)if(Array.isArray(i))for(let m=0,g=u.length;m<g;m++){const f=u[m],p=i[f.materialIndex],y=Math.max(f.start,d.start),v=Math.min(r.count,Math.min(f.start+f.count,d.start+d.count));for(let _=y,x=v;_<x;_+=3){const S=r.getX(_),E=r.getX(_+1),T=r.getX(_+2);o=eo(this,p,t,vn,c,h,S,E,T),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(r.count,d.start+d.count);for(let f=m,p=g;f<p;f+=3){const y=r.getX(f),v=r.getX(f+1),_=r.getX(f+2);o=eo(this,i,t,vn,c,h,y,v,_),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=u.length;m<g;m++){const f=u[m],p=i[f.materialIndex],y=Math.max(f.start,d.start),v=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let _=y,x=v;_<x;_+=3){const S=_,E=_+1,T=_+2;o=eo(this,p,t,vn,c,h,S,E,T),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let f=m,p=g;f<p;f+=3){const y=f,v=f+1,_=f+2;o=eo(this,i,t,vn,c,h,y,v,_),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}}}function Ad(a,t,e,n,i,s,o,r){let l;if(t.side===Ye?l=n.intersectTriangle(o,s,i,!0,r):l=n.intersectTriangle(i,s,o,t.side===ni,r),l===null)return null;to.copy(r),to.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(to);return c<e.near||c>e.far?null:{distance:c,point:to.clone(),object:a}}function eo(a,t,e,n,i,s,o,r,l){a.getVertexPosition(o,ms),a.getVertexPosition(r,gs),a.getVertexPosition(l,vs);const c=Ad(a,t,e,n,ms,gs,vs,cr);if(c){i&&(Zs.fromBufferAttribute(i,o),Js.fromBufferAttribute(i,r),Qs.fromBufferAttribute(i,l),c.uv=En.getUV(cr,ms,gs,vs,Zs,Js,Qs,new kt)),s&&(Zs.fromBufferAttribute(s,o),Js.fromBufferAttribute(s,r),Qs.fromBufferAttribute(s,l),c.uv2=En.getUV(cr,ms,gs,vs,Zs,Js,Qs,new kt));const h={a:o,b:r,c:l,normal:new G,materialIndex:0};En.getNormal(ms,gs,vs,h.normal),c.face=h}return c}class Tt extends Wn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(u,2));function g(f,p,y,v,_,x,S,E,T,w,C){const I=x/T,z=S/w,U=x/2,D=S/2,P=E/2,O=T+1,N=w+1;let K=0,k=0;const q=new G;for(let Y=0;Y<N;Y++){const et=Y*z-D;for(let B=0;B<O;B++){const tt=B*I-U;q[f]=tt*v,q[p]=et*_,q[y]=P,c.push(q.x,q.y,q.z),q[f]=0,q[p]=0,q[y]=E>0?1:-1,h.push(q.x,q.y,q.z),u.push(B/T),u.push(1-Y/w),K+=1}}for(let Y=0;Y<w;Y++)for(let et=0;et<T;et++){const B=d+et+O*Y,tt=d+et+O*(Y+1),nt=d+(et+1)+O*(Y+1),V=d+(et+1)+O*Y;l.push(B,tt,V),l.push(tt,nt,V),k+=6}r.addGroup(m,k,C),m+=k,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ss(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ne(a){const t={};for(let e=0;e<a.length;e++){const n=ss(a[e]);for(const i in n)t[i]=n[i]}return t}function Cd(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function Sc(a){return a.getRenderTarget()===null&&a.outputEncoding===ne?bn:Ns}const Td={clone:ss,merge:Ne};var Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=Cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ec extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends Ec{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,Fi=1;class Dd extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new en(zi,Fi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new en(zi,Fi,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new en(zi,Fi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const r=new en(zi,Fi,t,e);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const l=new en(zi,Fi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new en(zi,Fi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=Gn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,r),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ac extends Ve{constructor(t,e,n,i,s,o,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:es,super(t,e,n,i,s,o,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Id extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ac(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Tt(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:ei});s.uniforms.tEquirect.value=e;const o=new mt(i,s),r=e.minFilter;return e.minFilter===Ps&&(e.minFilter=tn),new Dd(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const hr=new G,Pd=new G,Od=new ke;let pi=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=hr.subVectors(n,e).cross(Pd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(hr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Od.getNormalMatrix(t),i=this.coplanarPoint(hr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ui=new jr,no=new G;class Jr{constructor(t=new pi,e=new pi,n=new pi,i=new pi,s=new pi,o=new pi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],m=n[9],g=n[10],f=n[11],p=n[12],y=n[13],v=n[14],_=n[15];return e[0].setComponents(r-i,u-l,f-d,_-p).normalize(),e[1].setComponents(r+i,u+l,f+d,_+p).normalize(),e[2].setComponents(r+s,u+c,f+m,_+y).normalize(),e[3].setComponents(r-s,u-c,f-m,_-y).normalize(),e[4].setComponents(r-o,u-h,f-g,_-v).normalize(),e[5].setComponents(r+o,u+h,f+g,_+v).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(no.x=i.normal.x>0?t.max.x:t.min.x,no.y=i.normal.y>0?t.max.y:t.min.y,no.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cc(){let a=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function Nd(a,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,m=h.updateRange;a.bindBuffer(u,c),m.count===-1?a.bufferSubData(u,0,d):(e?a.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):a.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:r,update:l}}class Qr extends Wn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,r=Math.floor(n),l=Math.floor(i),c=r+1,h=l+1,u=t/r,d=e/l,m=[],g=[],f=[],p=[];for(let y=0;y<h;y++){const v=y*d-o;for(let _=0;_<c;_++){const x=_*u-s;g.push(x,-v,0),f.push(0,0,1),p.push(_/r),p.push(1-y/l)}}for(let y=0;y<l;y++)for(let v=0;v<r;v++){const _=v+c*y,x=v+c*(y+1),S=v+1+c*(y+1),E=v+1+c*y;m.push(_,x,E),m.push(x,S,E)}this.setIndex(m),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(f,3)),this.setAttribute("uv",new dn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vd="vec3 transformed = vec3( position );",Hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,qd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,nu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ru=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",cu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_u=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Su=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Eu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ru=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Du=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Iu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Nu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ku=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,$u=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,af=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_f=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ef=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Af=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Cf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Tf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Rf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Lf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Df=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,If=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Pf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,np=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ip=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,fp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pt={alphamap_fragment:Bd,alphamap_pars_fragment:kd,alphatest_fragment:zd,alphatest_pars_fragment:Fd,aomap_fragment:Ud,aomap_pars_fragment:Gd,begin_vertex:Vd,beginnormal_vertex:Hd,bsdfs:Wd,iridescence_fragment:qd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:jd,clipping_planes_vertex:$d,color_fragment:Zd,color_pars_fragment:Jd,color_pars_vertex:Qd,color_vertex:tu,common:eu,cube_uv_reflection_fragment:nu,defaultnormal_vertex:iu,displacementmap_pars_vertex:su,displacementmap_vertex:ou,emissivemap_fragment:ru,emissivemap_pars_fragment:au,encodings_fragment:lu,encodings_pars_fragment:cu,envmap_fragment:hu,envmap_common_pars_fragment:du,envmap_pars_fragment:uu,envmap_pars_vertex:fu,envmap_physical_pars_fragment:Eu,envmap_vertex:pu,fog_vertex:mu,fog_pars_vertex:gu,fog_fragment:vu,fog_pars_fragment:yu,gradientmap_pars_fragment:_u,lightmap_fragment:xu,lightmap_pars_fragment:Mu,lights_lambert_fragment:wu,lights_lambert_pars_fragment:bu,lights_pars_begin:Su,lights_toon_fragment:Au,lights_toon_pars_fragment:Cu,lights_phong_fragment:Tu,lights_phong_pars_fragment:Ru,lights_physical_fragment:Lu,lights_physical_pars_fragment:Du,lights_fragment_begin:Iu,lights_fragment_maps:Pu,lights_fragment_end:Ou,logdepthbuf_fragment:Nu,logdepthbuf_pars_fragment:Bu,logdepthbuf_pars_vertex:ku,logdepthbuf_vertex:zu,map_fragment:Fu,map_pars_fragment:Uu,map_particle_fragment:Gu,map_particle_pars_fragment:Vu,metalnessmap_fragment:Hu,metalnessmap_pars_fragment:Wu,morphcolor_vertex:qu,morphnormal_vertex:Xu,morphtarget_pars_vertex:Ku,morphtarget_vertex:Yu,normal_fragment_begin:ju,normal_fragment_maps:$u,normal_pars_fragment:Zu,normal_pars_vertex:Ju,normal_vertex:Qu,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:ef,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:sf,iridescence_pars_fragment:of,output_fragment:rf,packing:af,premultiplied_alpha_fragment:lf,project_vertex:cf,dithering_fragment:hf,dithering_pars_fragment:df,roughnessmap_fragment:uf,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:vf,skinbase_vertex:yf,skinning_pars_vertex:_f,skinning_vertex:xf,skinnormal_vertex:Mf,specularmap_fragment:wf,specularmap_pars_fragment:bf,tonemapping_fragment:Sf,tonemapping_pars_fragment:Ef,transmission_fragment:Af,transmission_pars_fragment:Cf,uv_pars_fragment:Tf,uv_pars_vertex:Rf,uv_vertex:Lf,uv2_pars_fragment:Df,uv2_pars_vertex:If,uv2_vertex:Pf,worldpos_vertex:Of,background_vert:Nf,background_frag:Bf,backgroundCube_vert:kf,backgroundCube_frag:zf,cube_vert:Ff,cube_frag:Uf,depth_vert:Gf,depth_frag:Vf,distanceRGBA_vert:Hf,distanceRGBA_frag:Wf,equirect_vert:qf,equirect_frag:Xf,linedashed_vert:Kf,linedashed_frag:Yf,meshbasic_vert:jf,meshbasic_frag:$f,meshlambert_vert:Zf,meshlambert_frag:Jf,meshmatcap_vert:Qf,meshmatcap_frag:tp,meshnormal_vert:ep,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:sp,meshphysical_vert:op,meshphysical_frag:rp,meshtoon_vert:ap,meshtoon_frag:lp,points_vert:cp,points_frag:hp,shadow_vert:dp,shadow_frag:up,sprite_vert:fp,sprite_frag:pp},pt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ke},uv2Transform:{value:new ke},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ke}}},Sn={basic:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Ne([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Ne([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Ne([pt.points,pt.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Ne([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Ne([pt.common,pt.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Ne([pt.sprite,pt.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Ne([pt.common,pt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Ne([pt.lights,pt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};Sn.physical={uniforms:Ne([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new kt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const io={r:0,b:0,g:0};function mp(a,t,e,n,i,s,o){const r=new Xt(0);let l=s===!0?0:1,c,h,u=null,d=0,m=null;function g(p,y){let v=!1,_=y.isScene===!0?y.background:null;_&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_));const x=a.xr,S=x.getSession&&x.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?f(r,l):_&&_.isColor&&(f(_,1),v=!0),(a.autoClear||v)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Lo)?(h===void 0&&(h=new mt(new Tt(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:ss(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=_.encoding!==ne,(u!==_||d!==_.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,m=a.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new mt(new Qr(2,2),new Ai({name:"BackgroundMaterial",uniforms:ss(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=_.encoding!==ne,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,m=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,y){p.getRGB(io,Sc(a)),n.buffers.color.setClear(io.r,io.g,io.b,y,o)}return{getClearColor:function(){return r},setClearColor:function(p,y=1){r.set(p),l=y,f(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(r,l)},render:g}}function gp(a,t,e,n){const i=a.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},l=p(null);let c=l,h=!1;function u(P,O,N,K,k){let q=!1;if(o){const Y=f(K,N,O);c!==Y&&(c=Y,m(c.object)),q=y(P,K,N,k),q&&v(P,K,N,k)}else{const Y=O.wireframe===!0;(c.geometry!==K.id||c.program!==N.id||c.wireframe!==Y)&&(c.geometry=K.id,c.program=N.id,c.wireframe=Y,q=!0)}k!==null&&e.update(k,34963),(q||h)&&(h=!1,w(P,O,N,K),k!==null&&a.bindBuffer(34963,e.get(k).buffer))}function d(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?a.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?a.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function f(P,O,N){const K=N.wireframe===!0;let k=r[P.id];k===void 0&&(k={},r[P.id]=k);let q=k[O.id];q===void 0&&(q={},k[O.id]=q);let Y=q[K];return Y===void 0&&(Y=p(d()),q[K]=Y),Y}function p(P){const O=[],N=[],K=[];for(let k=0;k<i;k++)O[k]=0,N[k]=0,K[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:N,attributeDivisors:K,object:P,attributes:{},index:null}}function y(P,O,N,K){const k=c.attributes,q=O.attributes;let Y=0;const et=N.getAttributes();for(const B in et)if(et[B].location>=0){const nt=k[B];let V=q[B];if(V===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),nt===void 0||nt.attribute!==V||V&&nt.data!==V.data)return!0;Y++}return c.attributesNum!==Y||c.index!==K}function v(P,O,N,K){const k={},q=O.attributes;let Y=0;const et=N.getAttributes();for(const B in et)if(et[B].location>=0){let nt=q[B];nt===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor));const V={};V.attribute=nt,nt&&nt.data&&(V.data=nt.data),k[B]=V,Y++}c.attributes=k,c.attributesNum=Y,c.index=K}function _(){const P=c.newAttributes;for(let O=0,N=P.length;O<N;O++)P[O]=0}function x(P){S(P,0)}function S(P,O){const N=c.newAttributes,K=c.enabledAttributes,k=c.attributeDivisors;N[P]=1,K[P]===0&&(a.enableVertexAttribArray(P),K[P]=1),k[P]!==O&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),k[P]=O)}function E(){const P=c.newAttributes,O=c.enabledAttributes;for(let N=0,K=O.length;N<K;N++)O[N]!==P[N]&&(a.disableVertexAttribArray(N),O[N]=0)}function T(P,O,N,K,k,q){n.isWebGL2===!0&&(N===5124||N===5125)?a.vertexAttribIPointer(P,O,N,k,q):a.vertexAttribPointer(P,O,N,K,k,q)}function w(P,O,N,K){if(n.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const k=K.attributes,q=N.getAttributes(),Y=O.defaultAttributeValues;for(const et in q){const B=q[et];if(B.location>=0){let tt=k[et];if(tt===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),tt!==void 0){const nt=tt.normalized,V=tt.itemSize,lt=e.get(tt);if(lt===void 0)continue;const ct=lt.buffer,dt=lt.type,ot=lt.bytesPerElement;if(tt.isInterleavedBufferAttribute){const ut=tt.data,Et=ut.stride,bt=tt.offset;if(ut.isInstancedInterleavedBuffer){for(let Dt=0;Dt<B.locationSize;Dt++)S(B.location+Dt,ut.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Dt=0;Dt<B.locationSize;Dt++)x(B.location+Dt);a.bindBuffer(34962,ct);for(let Dt=0;Dt<B.locationSize;Dt++)T(B.location+Dt,V/B.locationSize,dt,nt,Et*ot,(bt+V/B.locationSize*Dt)*ot)}else{if(tt.isInstancedBufferAttribute){for(let ut=0;ut<B.locationSize;ut++)S(B.location+ut,tt.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ut=0;ut<B.locationSize;ut++)x(B.location+ut);a.bindBuffer(34962,ct);for(let ut=0;ut<B.locationSize;ut++)T(B.location+ut,V/B.locationSize,dt,nt,V*ot,V/B.locationSize*ut*ot)}}else if(Y!==void 0){const nt=Y[et];if(nt!==void 0)switch(nt.length){case 2:a.vertexAttrib2fv(B.location,nt);break;case 3:a.vertexAttrib3fv(B.location,nt);break;case 4:a.vertexAttrib4fv(B.location,nt);break;default:a.vertexAttrib1fv(B.location,nt)}}}}E()}function C(){U();for(const P in r){const O=r[P];for(const N in O){const K=O[N];for(const k in K)g(K[k].object),delete K[k];delete O[N]}delete r[P]}}function I(P){if(r[P.id]===void 0)return;const O=r[P.id];for(const N in O){const K=O[N];for(const k in K)g(K[k].object),delete K[k];delete O[N]}delete r[P.id]}function z(P){for(const O in r){const N=r[O];if(N[P.id]===void 0)continue;const K=N[P.id];for(const k in K)g(K[k].object),delete K[k];delete N[P.id]}}function U(){D(),h=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:U,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:x,disableUnusedAttributes:E}}function vp(a,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function r(c,h){a.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,m;if(i)d=a,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,h,u),e.update(h,s,u)}this.setMode=o,this.render=r,this.renderInstances=l}function yp(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let r=e.precision!==void 0?e.precision:"highp";const l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=a.getParameter(34930),d=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),f=a.getParameter(34921),p=a.getParameter(36347),y=a.getParameter(36348),v=a.getParameter(36349),_=d>0,x=o||t.has("OES_texture_float"),S=_&&x,E=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:E}}function _p(a){const t=this;let e=null,n=0,i=!1,s=!1;const o=new pi,r=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,f=u.clipIntersection,p=u.clipShadows,y=a.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const v=s?0:n,_=v*4;let x=y.clippingState||null;l.value=x,x=h(g,d,_,m);for(let S=0;S!==_;++S)x[S]=e[S];y.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,g){const f=u!==null?u.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const y=m+f*4,v=d.matrixWorldInverse;r.getNormalMatrix(v),(p===null||p.length<y)&&(p=new Float32Array(y));for(let _=0,x=m;_!==f;++_,x+=4)o.copy(u[_]).applyMatrix4(v,r),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function xp(a){let t=new WeakMap;function e(o,r){return r===Ir?o.mapping=es:r===Pr&&(o.mapping=ns),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===Ir||r===Pr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Id(l.height/2);return c.fromEquirectangularTexture(a,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Tc extends Ec{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,r=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,tl=[.125,.215,.35,.446,.526,.582],gi=20,dr=new Tc,el=new Xt;let ur=null;const mi=(1+Math.sqrt(5))/2,Gi=1/mi,nl=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,mi,Gi),new G(0,mi,-Gi),new G(Gi,0,mi),new G(-Gi,0,mi),new G(mi,Gi,0),new G(-mi,Gi,0)];class il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ur=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ur),t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ur=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Os,format:hn,encoding:bi,depthBuffer:!1},i=sl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(s)),this._blurMaterial=wp(s,t,e)}return i}_compileMaterial(t){const e=new mt(this._lodPlanes[0],t);this._renderer.compile(e,dr)}_sceneToCubeUV(t,e,n,i){const r=new en(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(el),h.toneMapping=Gn,h.autoClear=!1;const m=new Zr({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new mt(new Tt,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy(el),f=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(r.up.set(0,l[y],0),r.lookAt(c[y],0,0)):v===1?(r.up.set(0,0,l[y]),r.lookAt(0,c[y],0)):(r.up.set(0,l[y],0),r.lookAt(0,0,c[y]));const _=this._cubeSize;so(i,v*_,y>2?_:0,_,_),h.setRenderTarget(i),f&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===es||t.mapping===ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const l=this._cubeSize;so(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,dr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=nl[(i-1)%nl.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new mt(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*gi-1),f=s/g,p=isFinite(s)?1+Math.floor(h*f):gi;p>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gi}`);const y=[];let v=0;for(let T=0;T<gi;++T){const w=T/f,C=Math.exp(-w*w/2);y.push(C),T===0?v+=C:T<p&&(v+=2*C)}for(let T=0;T<y.length;T++)y[T]=y[T]/v;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=y,d.latitudinal.value=o==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const x=this._sizeLods[i],S=3*x*(i>_-$i?i-_+$i:0),E=4*(this._cubeSize-x);so(e,S,E,3*x,2*x),l.setRenderTarget(e),l.render(u,dr)}}function Mp(a){const t=[],e=[],n=[];let i=a;const s=a-$i+1+tl.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);e.push(r);let l=1/r;o>a-$i?l=tl[o-a+$i-1]:o===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,f=3,p=2,y=1,v=new Float32Array(f*g*m),_=new Float32Array(p*g*m),x=new Float32Array(y*g*m);for(let E=0;E<m;E++){const T=E%3*2/3-1,w=E>2?0:-1,C=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];v.set(C,f*g*E),_.set(d,p*g*E);const I=[E,E,E,E,E,E];x.set(I,y*g*E)}const S=new Wn;S.setAttribute("position",new fn(v,f)),S.setAttribute("uv",new fn(_,p)),S.setAttribute("faceIndex",new fn(x,y)),t.push(S),i>$i&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sl(a,t,e){const n=new Ei(a,t,e);return n.texture.mapping=Lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function wp(a,t,e){const n=new Float32Array(gi),i=new G(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ol(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function rl(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ta(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bp(a){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===Ir||l===Pr,h=l===es||l===ns;if(c||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let u=t.get(r);return e===null&&(e=new il(a)),u=c?e.fromEquirectangular(r,u):e.fromCubemap(r,u),t.set(r,u),u.texture}else{if(t.has(r))return t.get(r).texture;{const u=r.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new il(a));const d=c?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,d),r.addEventListener("dispose",s),d.texture}else return null}}}return r}function i(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Sp(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ep(a,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],34962);const m=u.morphAttributes;for(const g in m){const f=m[g];for(let p=0,y=f.length;p<y;p++)t.update(f[p],34962)}}function c(u){const d=[],m=u.index,g=u.attributes.position;let f=0;if(m!==null){const v=m.array;f=m.version;for(let _=0,x=v.length;_<x;_+=3){const S=v[_+0],E=v[_+1],T=v[_+2];d.push(S,E,E,T,T,S)}}else{const v=g.array;f=g.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const S=_+0,E=_+1,T=_+2;d.push(S,E,E,T,T,S)}}const p=new(gc(d)?bc:wc)(d,1);p.version=f;const y=s.get(u);y&&t.remove(y),s.set(u,p)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function Ap(a,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let r,l;function c(d){r=d.type,l=d.bytesPerElement}function h(d,m){a.drawElements(s,m,r,d*l),e.update(m,s,1)}function u(d,m,g){if(g===0)return;let f,p;if(i)f=a,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,m,r,d*l,g),e.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function Cp(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(e.calls++,o){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Tp(a,t){return a[0]-t[0]}function Rp(a,t){return Math.abs(t[1])-Math.abs(a[1])}function Lp(a,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new Se,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==f){let O=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let C=0;_===!0&&(C=1),x===!0&&(C=2),S===!0&&(C=3);let I=h.attributes.position.count*C,z=1;I>t.maxTextureSize&&(z=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const U=new Float32Array(I*z*4*f),D=new _c(U,I,z,f);D.type=xi,D.needsUpdate=!0;const P=C*4;for(let N=0;N<f;N++){const K=E[N],k=T[N],q=w[N],Y=I*z*4*N;for(let et=0;et<K.count;et++){const B=et*P;_===!0&&(o.fromBufferAttribute(K,et),U[Y+B+0]=o.x,U[Y+B+1]=o.y,U[Y+B+2]=o.z,U[Y+B+3]=0),x===!0&&(o.fromBufferAttribute(k,et),U[Y+B+4]=o.x,U[Y+B+5]=o.y,U[Y+B+6]=o.z,U[Y+B+7]=0),S===!0&&(o.fromBufferAttribute(q,et),U[Y+B+8]=o.x,U[Y+B+9]=o.y,U[Y+B+10]=o.z,U[Y+B+11]=q.itemSize===4?o.w:1)}}p={count:f,texture:D,size:new kt(I,z)},s.set(h,p),h.addEventListener("dispose",O)}let y=0;for(let _=0;_<d.length;_++)y+=d[_];const v=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(a,"morphTargetBaseInfluence",v),u.getUniforms().setValue(a,"morphTargetInfluences",d),u.getUniforms().setValue(a,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let f=n[h.id];if(f===void 0||f.length!==g){f=[];for(let x=0;x<g;x++)f[x]=[x,0];n[h.id]=f}for(let x=0;x<g;x++){const S=f[x];S[0]=x,S[1]=d[x]}f.sort(Rp);for(let x=0;x<8;x++)x<g&&f[x][1]?(r[x][0]=f[x][0],r[x][1]=f[x][1]):(r[x][0]=Number.MAX_SAFE_INTEGER,r[x][1]=0);r.sort(Tp);const p=h.morphAttributes.position,y=h.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const S=r[x],E=S[0],T=S[1];E!==Number.MAX_SAFE_INTEGER&&T?(p&&h.getAttribute("morphTarget"+x)!==p[E]&&h.setAttribute("morphTarget"+x,p[E]),y&&h.getAttribute("morphNormal"+x)!==y[E]&&h.setAttribute("morphNormal"+x,y[E]),i[x]=T,v+=T):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),y&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const _=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(a,"morphTargetBaseInfluence",_),u.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Dp(a,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Rc=new Ve,Lc=new _c,Dc=new gd,Ic=new Ac,al=[],ll=[],cl=new Float32Array(16),hl=new Float32Array(9),dl=new Float32Array(4);function cs(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=al[i];if(s===void 0&&(s=new Float32Array(i),al[i]=s),t!==0){n.toArray(s,0);for(let o=1,r=0;o!==t;++o)r+=e,a[o].toArray(s,r)}return s}function ge(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function ve(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function Io(a,t){let e=ll[t];e===void 0&&(e=new Int32Array(t),ll[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function Ip(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function Pp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;a.uniform2fv(this.addr,t),ve(e,t)}}function Op(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;a.uniform3fv(this.addr,t),ve(e,t)}}function Np(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;a.uniform4fv(this.addr,t),ve(e,t)}}function Bp(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;dl.set(n),a.uniformMatrix2fv(this.addr,!1,dl),ve(e,n)}}function kp(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;hl.set(n),a.uniformMatrix3fv(this.addr,!1,hl),ve(e,n)}}function zp(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;cl.set(n),a.uniformMatrix4fv(this.addr,!1,cl),ve(e,n)}}function Fp(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Up(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;a.uniform2iv(this.addr,t),ve(e,t)}}function Gp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;a.uniform3iv(this.addr,t),ve(e,t)}}function Vp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;a.uniform4iv(this.addr,t),ve(e,t)}}function Hp(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function Wp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;a.uniform2uiv(this.addr,t),ve(e,t)}}function qp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;a.uniform3uiv(this.addr,t),ve(e,t)}}function Xp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;a.uniform4uiv(this.addr,t),ve(e,t)}}function Kp(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Rc,i)}function Yp(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Dc,i)}function jp(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ic,i)}function $p(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Lc,i)}function Zp(a){switch(a){case 5126:return Ip;case 35664:return Pp;case 35665:return Op;case 35666:return Np;case 35674:return Bp;case 35675:return kp;case 35676:return zp;case 5124:case 35670:return Fp;case 35667:case 35671:return Up;case 35668:case 35672:return Gp;case 35669:case 35673:return Vp;case 5125:return Hp;case 36294:return Wp;case 36295:return qp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return $p}}function Jp(a,t){a.uniform1fv(this.addr,t)}function Qp(a,t){const e=cs(t,this.size,2);a.uniform2fv(this.addr,e)}function tm(a,t){const e=cs(t,this.size,3);a.uniform3fv(this.addr,e)}function em(a,t){const e=cs(t,this.size,4);a.uniform4fv(this.addr,e)}function nm(a,t){const e=cs(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function im(a,t){const e=cs(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function sm(a,t){const e=cs(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function om(a,t){a.uniform1iv(this.addr,t)}function rm(a,t){a.uniform2iv(this.addr,t)}function am(a,t){a.uniform3iv(this.addr,t)}function lm(a,t){a.uniform4iv(this.addr,t)}function cm(a,t){a.uniform1uiv(this.addr,t)}function hm(a,t){a.uniform2uiv(this.addr,t)}function dm(a,t){a.uniform3uiv(this.addr,t)}function um(a,t){a.uniform4uiv(this.addr,t)}function fm(a,t,e){const n=this.cache,i=t.length,s=Io(e,i);ge(n,s)||(a.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Rc,s[o])}function pm(a,t,e){const n=this.cache,i=t.length,s=Io(e,i);ge(n,s)||(a.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Dc,s[o])}function mm(a,t,e){const n=this.cache,i=t.length,s=Io(e,i);ge(n,s)||(a.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ic,s[o])}function gm(a,t,e){const n=this.cache,i=t.length,s=Io(e,i);ge(n,s)||(a.uniform1iv(this.addr,s),ve(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Lc,s[o])}function vm(a){switch(a){case 5126:return Jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return om;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return dm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Zp(e.type)}}class _m{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=vm(e.type)}}class xm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(t,e[r.id],n)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function ul(a,t){a.seq.push(t),a.map[t.id]=t}function Mm(a,t,e){const n=a.name,i=n.length;for(fr.lastIndex=0;;){const s=fr.exec(n),o=fr.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===i){ul(e,c===void 0?new ym(r,a,t):new _m(r,a,t));break}else{let u=e.map[r];u===void 0&&(u=new xm(r),ul(e,u)),e=u}}}class yo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Mm(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const r=e[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function fl(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}let wm=0;function bm(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}function Sm(a){switch(a){case bi:return["Linear","( value )"];case ne:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function pl(a,t,e){const n=a.getShaderParameter(t,35713),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+bm(a.getShaderSource(t),o)}else return i}function Em(a,t){const e=Sm(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Am(a,t){let e;switch(t){case Sh:e="Linear";break;case Eh:e="Reinhard";break;case Ah:e="OptimizedCineon";break;case Ch:e="ACESFilmic";break;case Th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Cm(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function Tm(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rm(a,t){const e={},n=a.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[o]={type:s.type,location:a.getAttribLocation(t,o),locationSize:r}}return e}function Cs(a){return a!==""}function ml(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gl(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fr(a){return a.replace(Lm,Dm)}function Dm(a,t){const e=Pt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Fr(e)}const Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(a){return a.replace(Im,Pm)}function Pm(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function yl(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Om(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===rc?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===As&&(t="SHADOWMAP_TYPE_VSM"),t}function Nm(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case Lo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bm(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function km(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case hc:t="ENVMAP_BLENDING_MULTIPLY";break;case wh:t="ENVMAP_BLENDING_MIX";break;case bh:t="ENVMAP_BLENDING_ADD";break}return t}function zm(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Fm(a,t,e,n){const i=a.getContext(),s=e.defines;let o=e.vertexShader,r=e.fragmentShader;const l=Om(e),c=Nm(e),h=Bm(e),u=km(e),d=zm(e),m=e.isWebGL2?"":Cm(e),g=Tm(s),f=i.createProgram();let p,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Cs).join(`
`),p.length>0&&(p+=`
`),y=[m,g].filter(Cs).join(`
`),y.length>0&&(y+=`
`)):(p=[yl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),y=[m,yl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?Am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.encodings_pars_fragment,Em("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),o=Fr(o),o=ml(o,e),o=gl(o,e),r=Fr(r),r=ml(r,e),r=gl(r,e),o=vl(o),r=vl(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["#define varying in",e.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const _=v+p+o,x=v+y+r,S=fl(i,35633,_),E=fl(i,35632,x);if(i.attachShader(f,S),i.attachShader(f,E),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),a.debug.checkShaderErrors){const C=i.getProgramInfoLog(f).trim(),I=i.getShaderInfoLog(S).trim(),z=i.getShaderInfoLog(E).trim();let U=!0,D=!0;if(i.getProgramParameter(f,35714)===!1){U=!1;const P=pl(i,S,"vertex"),O=pl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+C+`
`+P+`
`+O)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||z==="")&&(D=!1);D&&(this.diagnostics={runnable:U,programLog:C,vertexShader:{log:I,prefix:p},fragmentShader:{log:z,prefix:y}})}i.deleteShader(S),i.deleteShader(E);let T;this.getUniforms=function(){return T===void 0&&(T=new yo(i,f)),T};let w;return this.getAttributes=function(){return w===void 0&&(w=Rm(i,f)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=wm++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=E,this}let Um=0;class Gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Vm(t),e.set(t,n)),n}}class Vm{constructor(t){this.id=Um++,this.code=t,this.usedTimes=0}}function Hm(a,t,e,n,i,s,o){const r=new $r,l=new Gm,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(w,C,I,z,U){const D=z.fog,P=U.geometry,O=w.isMeshStandardMaterial?z.environment:null,N=(w.isMeshStandardMaterial?e:t).get(w.envMap||O),K=N&&N.mapping===Lo?N.image.height:null,k=g[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Y=q!==void 0?q.length:0;let et=0;P.morphAttributes.position!==void 0&&(et=1),P.morphAttributes.normal!==void 0&&(et=2),P.morphAttributes.color!==void 0&&(et=3);let B,tt,nt,V;if(k){const Et=Sn[k];B=Et.vertexShader,tt=Et.fragmentShader}else B=w.vertexShader,tt=w.fragmentShader,l.update(w),nt=l.getVertexShaderID(w),V=l.getFragmentShaderID(w);const lt=a.getRenderTarget(),ct=w.alphaTest>0,dt=w.clearcoat>0,ot=w.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:w.type,vertexShader:B,fragmentShader:tt,defines:w.defines,customVertexShaderID:nt,customFragmentShaderID:V,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:d,outputEncoding:lt===null?a.outputEncoding:lt.isXRRenderTarget===!0?lt.texture.encoding:bi,map:!!w.map,matcap:!!w.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:K,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===Kh,tangentSpaceNormalMap:w.normalMapType===fc,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===ne,clearcoat:dt,clearcoatMap:dt&&!!w.clearcoatMap,clearcoatRoughnessMap:dt&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:dt&&!!w.clearcoatNormalMap,iridescence:ot,iridescenceMap:ot&&!!w.iridescenceMap,iridescenceThicknessMap:ot&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===Ji,alphaMap:!!w.alphaMap,alphaTest:ct,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!P.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!D,useFog:w.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:et,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:w.toneMapped?a.toneMapping:Gn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Fn,flipSided:w.side===Ye,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)C.push(I),C.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(y(C,w),v(C,w),C.push(a.outputEncoding)),C.push(w.customProgramCacheKey),C.join()}function y(w,C){w.push(C.precision),w.push(C.outputEncoding),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.combine),w.push(C.vertexUvs),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function v(w,C){r.disableAll(),C.isWebGL2&&r.enable(0),C.supportsVertexTextures&&r.enable(1),C.instancing&&r.enable(2),C.instancingColor&&r.enable(3),C.map&&r.enable(4),C.matcap&&r.enable(5),C.envMap&&r.enable(6),C.lightMap&&r.enable(7),C.aoMap&&r.enable(8),C.emissiveMap&&r.enable(9),C.bumpMap&&r.enable(10),C.normalMap&&r.enable(11),C.objectSpaceNormalMap&&r.enable(12),C.tangentSpaceNormalMap&&r.enable(13),C.clearcoat&&r.enable(14),C.clearcoatMap&&r.enable(15),C.clearcoatRoughnessMap&&r.enable(16),C.clearcoatNormalMap&&r.enable(17),C.iridescence&&r.enable(18),C.iridescenceMap&&r.enable(19),C.iridescenceThicknessMap&&r.enable(20),C.displacementMap&&r.enable(21),C.specularMap&&r.enable(22),C.roughnessMap&&r.enable(23),C.metalnessMap&&r.enable(24),C.gradientMap&&r.enable(25),C.alphaMap&&r.enable(26),C.alphaTest&&r.enable(27),C.vertexColors&&r.enable(28),C.vertexAlphas&&r.enable(29),C.vertexUvs&&r.enable(30),C.vertexTangents&&r.enable(31),C.uvsVertexOnly&&r.enable(32),w.push(r.mask),r.disableAll(),C.fog&&r.enable(0),C.useFog&&r.enable(1),C.flatShading&&r.enable(2),C.logarithmicDepthBuffer&&r.enable(3),C.skinning&&r.enable(4),C.morphTargets&&r.enable(5),C.morphNormals&&r.enable(6),C.morphColors&&r.enable(7),C.premultipliedAlpha&&r.enable(8),C.shadowMapEnabled&&r.enable(9),C.useLegacyLights&&r.enable(10),C.doubleSided&&r.enable(11),C.flipSided&&r.enable(12),C.useDepthPacking&&r.enable(13),C.dithering&&r.enable(14),C.specularIntensityMap&&r.enable(15),C.specularColorMap&&r.enable(16),C.transmission&&r.enable(17),C.transmissionMap&&r.enable(18),C.thicknessMap&&r.enable(19),C.sheen&&r.enable(20),C.sheenColorMap&&r.enable(21),C.sheenRoughnessMap&&r.enable(22),C.decodeVideoTexture&&r.enable(23),C.opaque&&r.enable(24),w.push(r.mask)}function _(w){const C=g[w.type];let I;if(C){const z=Sn[C];I=Td.clone(z.uniforms)}else I=w.uniforms;return I}function x(w,C){let I;for(let z=0,U=c.length;z<U;z++){const D=c[z];if(D.cacheKey===C){I=D,++I.usedTimes;break}}return I===void 0&&(I=new Fm(a,C,w,s),c.push(I)),I}function S(w){if(--w.usedTimes===0){const C=c.indexOf(w);c[C]=c[c.length-1],c.pop(),w.destroy()}}function E(w){l.remove(w)}function T(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:_,acquireProgram:x,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:T}}function Wm(){let a=new WeakMap;function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function e(s){a.delete(s)}function n(s,o,r){a.get(s)[o]=r}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function qm(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function _l(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function xl(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,m,g,f,p){let y=a[t];return y===void 0?(y={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:f,group:p},a[t]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=m,y.groupOrder=g,y.renderOrder=u.renderOrder,y.z=f,y.group=p),t++,y}function r(u,d,m,g,f,p){const y=o(u,d,m,g,f,p);m.transmission>0?n.push(y):m.transparent===!0?i.push(y):e.push(y)}function l(u,d,m,g,f,p){const y=o(u,d,m,g,f,p);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):e.unshift(y)}function c(u,d){e.length>1&&e.sort(u||qm),n.length>1&&n.sort(d||_l),i.length>1&&i.sort(d||_l)}function h(){for(let u=t,d=a.length;u<d;u++){const m=a[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:r,unshift:l,finish:h,sort:c}}function Xm(){let a=new WeakMap;function t(n,i){const s=a.get(n);let o;return s===void 0?(o=new xl,a.set(n,[o])):i>=s.length?(o=new xl,s.push(o)):o=s[i],o}function e(){a=new WeakMap}return{get:t,dispose:e}}function Km(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Xt};break;case"SpotLight":e={position:new G,direction:new G,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new G,halfWidth:new G,halfHeight:new G};break}return a[t.id]=e,e}}}function Ym(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let jm=0;function $m(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function Zm(a,t){const e=new Km,n=Ym(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new G);const s=new G,o=new fe,r=new fe;function l(h,u){let d=0,m=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,y=0,v=0,_=0,x=0,S=0,E=0,T=0,w=0;h.sort($m);const C=u===!0?Math.PI:1;for(let z=0,U=h.length;z<U;z++){const D=h[z],P=D.color,O=D.intensity,N=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=P.r*O*C,m+=P.g*O*C,g+=P.b*O*C;else if(D.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],O);else if(D.isDirectionalLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*C),D.castShadow){const q=D.shadow,Y=n.get(D);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=D.shadow.matrix,x++}i.directional[f]=k,f++}else if(D.isSpotLight){const k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(P).multiplyScalar(O*C),k.distance=N,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[y]=k;const q=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,q.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[y]=q.matrix,D.castShadow){const Y=n.get(D);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,i.spotShadow[y]=Y,i.spotShadowMap[y]=K,E++}y++}else if(D.isRectAreaLight){const k=e.get(D);k.color.copy(P).multiplyScalar(O),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[v]=k,v++}else if(D.isPointLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*C),k.distance=D.distance,k.decay=D.decay,D.castShadow){const q=D.shadow,Y=n.get(D);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,i.pointShadow[p]=Y,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=D.shadow.matrix,S++}i.point[p]=k,p++}else if(D.isHemisphereLight){const k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(O*C),k.groundColor.copy(D.groundColor).multiplyScalar(O*C),i.hemi[_]=k,_++}}v>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==v||I.hemiLength!==_||I.numDirectionalShadows!==x||I.numPointShadows!==S||I.numSpotShadows!==E||I.numSpotMaps!==T)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=v,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,I.directionalLength=f,I.pointLength=p,I.spotLength=y,I.rectAreaLength=v,I.hemiLength=_,I.numDirectionalShadows=x,I.numPointShadows=S,I.numSpotShadows=E,I.numSpotMaps=T,i.version=jm++)}function c(h,u){let d=0,m=0,g=0,f=0,p=0;const y=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){const x=h[v];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(y),d++}else if(x.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(y),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(y),g++}else if(x.isRectAreaLight){const S=i.rectArea[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(y),r.identity(),o.copy(x.matrixWorld),o.premultiply(y),r.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),f++}else if(x.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(y),m++}else if(x.isHemisphereLight){const S=i.hemi[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(y),p++}}}return{setup:l,setupView:c,state:i}}function Ml(a,t){const e=new Zm(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function r(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:r}}function Jm(a,t){let e=new WeakMap;function n(s,o=0){const r=e.get(s);let l;return r===void 0?(l=new Ml(a,t),e.set(s,[l])):o>=r.length?(l=new Ml(a,t),r.push(l)):l=r[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Qm extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tg extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ig(a,t,e){let n=new Jr;const i=new kt,s=new kt,o=new Se,r=new Qm({depthPacking:Xh}),l=new tg,c={},h=e.maxTextureSize,u={[ni]:Ye,[Ye]:ni,[Fn]:Fn},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:eg,fragmentShader:ng}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Wn;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new mt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc,this.render=function(x,S,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const T=a.getRenderTarget(),w=a.getActiveCubeFace(),C=a.getActiveMipmapLevel(),I=a.state;I.setBlending(ei),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let z=0,U=x.length;z<U;z++){const D=x[z],P=D.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const O=P.getFrameExtents();if(i.multiply(O),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/O.x),i.x=s.x*O.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/O.y),i.y=s.y*O.y,P.mapSize.y=s.y)),P.map===null){const K=this.type!==As?{minFilter:me,magFilter:me}:{};P.map=new Ei(i.x,i.y,K),P.map.texture.name=D.name+".shadowMap",P.camera.updateProjectionMatrix()}a.setRenderTarget(P.map),a.clear();const N=P.getViewportCount();for(let K=0;K<N;K++){const k=P.getViewport(K);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),I.viewport(o),P.updateMatrices(D,K),n=P.getFrustum(),_(S,E,P.camera,D,this.type)}P.isPointLightShadow!==!0&&this.type===As&&y(P,E),P.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(T,w,C)};function y(x,S){const E=t.update(f);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Ei(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,a.setRenderTarget(x.mapPass),a.clear(),a.renderBufferDirect(S,null,E,d,f,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,a.setRenderTarget(x.map),a.clear(),a.renderBufferDirect(S,null,E,m,f,null)}function v(x,S,E,T,w,C){let I=null;const z=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(z!==void 0)I=z;else if(I=E.isPointLight===!0?l:r,a.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const U=I.uuid,D=S.uuid;let P=c[U];P===void 0&&(P={},c[U]=P);let O=P[D];O===void 0&&(O=I.clone(),P[D]=O),I=O}return I.visible=S.visible,I.wireframe=S.wireframe,C===As?I.side=S.shadowSide!==null?S.shadowSide:S.side:I.side=S.shadowSide!==null?S.shadowSide:u[S.side],I.alphaMap=S.alphaMap,I.alphaTest=S.alphaTest,I.map=S.map,I.clipShadows=S.clipShadows,I.clippingPlanes=S.clippingPlanes,I.clipIntersection=S.clipIntersection,I.displacementMap=S.displacementMap,I.displacementScale=S.displacementScale,I.displacementBias=S.displacementBias,I.wireframeLinewidth=S.wireframeLinewidth,I.linewidth=S.linewidth,E.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(E.matrixWorld),I.nearDistance=T,I.farDistance=w),I}function _(x,S,E,T,w){if(x.visible===!1)return;if(x.layers.test(S.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&w===As)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const z=t.update(x),U=x.material;if(Array.isArray(U)){const D=z.groups;for(let P=0,O=D.length;P<O;P++){const N=D[P],K=U[N.materialIndex];if(K&&K.visible){const k=v(x,K,T,E.near,E.far,w);a.renderBufferDirect(E,null,z,k,x,N)}}}else if(U.visible){const D=v(x,U,T,E.near,E.far,w);a.renderBufferDirect(E,null,z,D,x,null)}}const I=x.children;for(let z=0,U=I.length;z<U;z++)_(I[z],S,E,T,w)}}function sg(a,t,e){const n=e.isWebGL2;function i(){let F=!1;const J=new Se;let rt=null;const vt=new Se(0,0,0,0);return{setMask:function(xt){rt!==xt&&!F&&(a.colorMask(xt,xt,xt,xt),rt=xt)},setLocked:function(xt){F=xt},setClear:function(xt,te,xe,De,mn){mn===!0&&(xt*=De,te*=De,xe*=De),J.set(xt,te,xe,De),vt.equals(J)===!1&&(a.clearColor(xt,te,xe,De),vt.copy(J))},reset:function(){F=!1,rt=null,vt.set(-1,0,0,0)}}}function s(){let F=!1,J=null,rt=null,vt=null;return{setTest:function(xt){xt?ct(2929):dt(2929)},setMask:function(xt){J!==xt&&!F&&(a.depthMask(xt),J=xt)},setFunc:function(xt){if(rt!==xt){switch(xt){case mh:a.depthFunc(512);break;case gh:a.depthFunc(519);break;case vh:a.depthFunc(513);break;case Dr:a.depthFunc(515);break;case yh:a.depthFunc(514);break;case _h:a.depthFunc(518);break;case xh:a.depthFunc(516);break;case Mh:a.depthFunc(517);break;default:a.depthFunc(515)}rt=xt}},setLocked:function(xt){F=xt},setClear:function(xt){vt!==xt&&(a.clearDepth(xt),vt=xt)},reset:function(){F=!1,J=null,rt=null,vt=null}}}function o(){let F=!1,J=null,rt=null,vt=null,xt=null,te=null,xe=null,De=null,mn=null;return{setTest:function(ae){F||(ae?ct(2960):dt(2960))},setMask:function(ae){J!==ae&&!F&&(a.stencilMask(ae),J=ae)},setFunc:function(ae,$e,gn){(rt!==ae||vt!==$e||xt!==gn)&&(a.stencilFunc(ae,$e,gn),rt=ae,vt=$e,xt=gn)},setOp:function(ae,$e,gn){(te!==ae||xe!==$e||De!==gn)&&(a.stencilOp(ae,$e,gn),te=ae,xe=$e,De=gn)},setLocked:function(ae){F=ae},setClear:function(ae){mn!==ae&&(a.clearStencil(ae),mn=ae)},reset:function(){F=!1,J=null,rt=null,vt=null,xt=null,te=null,xe=null,De=null,mn=null}}}const r=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,f=[],p=null,y=!1,v=null,_=null,x=null,S=null,E=null,T=null,w=null,C=!1,I=null,z=null,U=null,D=null,P=null;const O=a.getParameter(35661);let N=!1,K=0;const k=a.getParameter(7938);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=K>=2);let q=null,Y={};const et=a.getParameter(3088),B=a.getParameter(2978),tt=new Se().fromArray(et),nt=new Se().fromArray(B);function V(F,J,rt){const vt=new Uint8Array(4),xt=a.createTexture();a.bindTexture(F,xt),a.texParameteri(F,10241,9728),a.texParameteri(F,10240,9728);for(let te=0;te<rt;te++)a.texImage2D(J+te,0,6408,1,1,0,6408,5121,vt);return xt}const lt={};lt[3553]=V(3553,3553,1),lt[34067]=V(34067,34069,6),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ct(2929),l.setFunc(Dr),$t(!1),zt(da),ct(2884),Jt(ei);function ct(F){d[F]!==!0&&(a.enable(F),d[F]=!0)}function dt(F){d[F]!==!1&&(a.disable(F),d[F]=!1)}function ot(F,J){return m[F]!==J?(a.bindFramebuffer(F,J),m[F]=J,n&&(F===36009&&(m[36160]=J),F===36160&&(m[36009]=J)),!0):!1}function ut(F,J){let rt=f,vt=!1;if(F)if(rt=g.get(J),rt===void 0&&(rt=[],g.set(J,rt)),F.isWebGLMultipleRenderTargets){const xt=F.texture;if(rt.length!==xt.length||rt[0]!==36064){for(let te=0,xe=xt.length;te<xe;te++)rt[te]=36064+te;rt.length=xt.length,vt=!0}}else rt[0]!==36064&&(rt[0]=36064,vt=!0);else rt[0]!==1029&&(rt[0]=1029,vt=!0);vt&&(e.isWebGL2?a.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Et(F){return p!==F?(a.useProgram(F),p=F,!0):!1}const bt={[ji]:32774,[sh]:32778,[oh]:32779};if(n)bt[ma]=32775,bt[ga]=32776;else{const F=t.get("EXT_blend_minmax");F!==null&&(bt[ma]=F.MIN_EXT,bt[ga]=F.MAX_EXT)}const Dt={[rh]:0,[ah]:1,[lh]:768,[lc]:770,[ph]:776,[uh]:774,[hh]:772,[ch]:769,[cc]:771,[fh]:775,[dh]:773};function Jt(F,J,rt,vt,xt,te,xe,De){if(F===ei){y===!0&&(dt(3042),y=!1);return}if(y===!1&&(ct(3042),y=!0),F!==ih){if(F!==v||De!==C){if((_!==ji||E!==ji)&&(a.blendEquation(32774),_=ji,E=ji),De)switch(F){case Ji:a.blendFuncSeparate(1,771,1,771);break;case ua:a.blendFunc(1,1);break;case fa:a.blendFuncSeparate(0,769,0,1);break;case pa:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ji:a.blendFuncSeparate(770,771,1,771);break;case ua:a.blendFunc(770,1);break;case fa:a.blendFuncSeparate(0,769,0,1);break;case pa:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,S=null,T=null,w=null,v=F,C=De}return}xt=xt||J,te=te||rt,xe=xe||vt,(J!==_||xt!==E)&&(a.blendEquationSeparate(bt[J],bt[xt]),_=J,E=xt),(rt!==x||vt!==S||te!==T||xe!==w)&&(a.blendFuncSeparate(Dt[rt],Dt[vt],Dt[te],Dt[xe]),x=rt,S=vt,T=te,w=xe),v=F,C=!1}function oe(F,J){F.side===Fn?dt(2884):ct(2884);let rt=F.side===Ye;J&&(rt=!rt),$t(rt),F.blending===Ji&&F.transparent===!1?Jt(ei):Jt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),r.setMask(F.colorWrite);const vt=F.stencilWrite;c.setTest(vt),vt&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Gt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ct(32926):dt(32926)}function $t(F){I!==F&&(F?a.frontFace(2304):a.frontFace(2305),I=F)}function zt(F){F!==eh?(ct(2884),F!==z&&(F===da?a.cullFace(1029):F===nh?a.cullFace(1028):a.cullFace(1032))):dt(2884),z=F}function Ft(F){F!==U&&(N&&a.lineWidth(F),U=F)}function Gt(F,J,rt){F?(ct(32823),(D!==J||P!==rt)&&(a.polygonOffset(J,rt),D=J,P=rt)):dt(32823)}function Ee(F){F?ct(3089):dt(3089)}function ye(F){F===void 0&&(F=33984+O-1),q!==F&&(a.activeTexture(F),q=F)}function L(F,J,rt){rt===void 0&&(q===null?rt=33984+O-1:rt=q);let vt=Y[rt];vt===void 0&&(vt={type:void 0,texture:void 0},Y[rt]=vt),(vt.type!==F||vt.texture!==J)&&(q!==rt&&(a.activeTexture(rt),q=rt),a.bindTexture(F,J||lt[F]),vt.type=F,vt.texture=J)}function A(){const F=Y[q];F!==void 0&&F.type!==void 0&&(a.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function H(){try{a.compressedTexImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{a.compressedTexImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{a.texSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{a.texSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{a.texStorage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{a.texStorage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{a.texImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{a.texImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(F){tt.equals(F)===!1&&(a.scissor(F.x,F.y,F.z,F.w),tt.copy(F))}function wt(F){nt.equals(F)===!1&&(a.viewport(F.x,F.y,F.z,F.w),nt.copy(F))}function Vt(F,J){let rt=u.get(J);rt===void 0&&(rt=new WeakMap,u.set(J,rt));let vt=rt.get(F);vt===void 0&&(vt=a.getUniformBlockIndex(J,F.name),rt.set(F,vt))}function Qt(F,J){const vt=u.get(J).get(F);h.get(J)!==vt&&(a.uniformBlockBinding(J,vt,F.__bindingPointIndex),h.set(J,vt))}function _e(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},q=null,Y={},m={},g=new WeakMap,f=[],p=null,y=!1,v=null,_=null,x=null,S=null,E=null,T=null,w=null,C=!1,I=null,z=null,U=null,D=null,P=null,tt.set(0,0,a.canvas.width,a.canvas.height),nt.set(0,0,a.canvas.width,a.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:ct,disable:dt,bindFramebuffer:ot,drawBuffers:ut,useProgram:Et,setBlending:Jt,setMaterial:oe,setFlipSided:$t,setCullFace:zt,setLineWidth:Ft,setPolygonOffset:Gt,setScissorTest:Ee,activeTexture:ye,bindTexture:L,unbindTexture:A,compressedTexImage2D:H,compressedTexImage3D:$,texImage2D:_t,texImage3D:Ct,updateUBOMapping:Vt,uniformBlockBinding:Qt,texStorage2D:j,texStorage3D:Mt,texSubImage2D:it,texSubImage3D:at,compressedTexSubImage2D:ft,compressedTexSubImage3D:st,scissor:St,viewport:wt,reset:_e}}function og(a,t,e,n,i,s,o){const r=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,A){return y?new OffscreenCanvas(L,A):Mo("canvas")}function _(L,A,H,$){let it=1;if((L.width>$||L.height>$)&&(it=$/Math.max(L.width,L.height)),it<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const at=A?mc:Math.floor,ft=at(it*L.width),st=at(it*L.height);f===void 0&&(f=v(ft,st));const j=H?v(ft,st):f;return j.width=ft,j.height=st,j.getContext("2d").drawImage(L,0,0,ft,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ft+"x"+st+")."),j}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return zr(L.width)&&zr(L.height)}function S(L){return r?!1:L.wrapS!==Ke||L.wrapT!==Ke||L.minFilter!==me&&L.minFilter!==tn}function E(L,A){return L.generateMipmaps&&A&&L.minFilter!==me&&L.minFilter!==tn}function T(L){a.generateMipmap(L)}function w(L,A,H,$,it=!1){if(r===!1)return A;if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let at=A;return A===6403&&(H===5126&&(at=33326),H===5131&&(at=33325),H===5121&&(at=33321)),A===33319&&(H===5126&&(at=33328),H===5131&&(at=33327),H===5121&&(at=33323)),A===6408&&(H===5126&&(at=34836),H===5131&&(at=34842),H===5121&&(at=$===ne&&it===!1?35907:32856),H===32819&&(at=32854),H===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function C(L,A,H){return E(L,H)===!0||L.isFramebufferTexture&&L.minFilter!==me&&L.minFilter!==tn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function I(L){return L===me||L===va||L===Fo?9728:9729}function z(L){const A=L.target;A.removeEventListener("dispose",z),D(A),A.isVideoTexture&&g.delete(A)}function U(L){const A=L.target;A.removeEventListener("dispose",U),O(A)}function D(L){const A=n.get(L);if(A.__webglInit===void 0)return;const H=L.source,$=p.get(H);if($){const it=$[A.__cacheKey];it.usedTimes--,it.usedTimes===0&&P(L),Object.keys($).length===0&&p.delete(H)}n.remove(L)}function P(L){const A=n.get(L);a.deleteTexture(A.__webglTexture);const H=L.source,$=p.get(H);delete $[A.__cacheKey],o.memory.textures--}function O(L){const A=L.texture,H=n.get(L),$=n.get(A);if($.__webglTexture!==void 0&&(a.deleteTexture($.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let it=0;it<6;it++)a.deleteFramebuffer(H.__webglFramebuffer[it]),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer[it]);else{if(a.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&a.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let it=0;it<H.__webglColorRenderbuffer.length;it++)H.__webglColorRenderbuffer[it]&&a.deleteRenderbuffer(H.__webglColorRenderbuffer[it]);H.__webglDepthRenderbuffer&&a.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let it=0,at=A.length;it<at;it++){const ft=n.get(A[it]);ft.__webglTexture&&(a.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(A[it])}n.remove(A),n.remove(L)}let N=0;function K(){N=0}function k(){const L=N;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),N+=1,L}function q(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.encoding),A.join()}function Y(L,A){const H=n.get(L);if(L.isVideoTexture&&Ee(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const $=L.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(H,L,A);return}}e.bindTexture(3553,H.__webglTexture,33984+A)}function et(L,A){const H=n.get(L);if(L.version>0&&H.__version!==L.version){dt(H,L,A);return}e.bindTexture(35866,H.__webglTexture,33984+A)}function B(L,A){const H=n.get(L);if(L.version>0&&H.__version!==L.version){dt(H,L,A);return}e.bindTexture(32879,H.__webglTexture,33984+A)}function tt(L,A){const H=n.get(L);if(L.version>0&&H.__version!==L.version){ot(H,L,A);return}e.bindTexture(34067,H.__webglTexture,33984+A)}const nt={[Or]:10497,[Ke]:33071,[Nr]:33648},V={[me]:9728,[va]:9984,[Fo]:9986,[tn]:9729,[Rh]:9985,[Ps]:9987};function lt(L,A,H){if(H?(a.texParameteri(L,10242,nt[A.wrapS]),a.texParameteri(L,10243,nt[A.wrapT]),(L===32879||L===35866)&&a.texParameteri(L,32882,nt[A.wrapR]),a.texParameteri(L,10240,V[A.magFilter]),a.texParameteri(L,10241,V[A.minFilter])):(a.texParameteri(L,10242,33071),a.texParameteri(L,10243,33071),(L===32879||L===35866)&&a.texParameteri(L,32882,33071),(A.wrapS!==Ke||A.wrapT!==Ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(L,10240,I(A.magFilter)),a.texParameteri(L,10241,I(A.minFilter)),A.minFilter!==me&&A.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const $=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===me||A.minFilter!==Fo&&A.minFilter!==Ps||A.type===xi&&t.has("OES_texture_float_linear")===!1||r===!1&&A.type===Os&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(a.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ct(L,A){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",z));const $=A.source;let it=p.get($);it===void 0&&(it={},p.set($,it));const at=q(A);if(at!==L.__cacheKey){it[at]===void 0&&(it[at]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,H=!0),it[at].usedTimes++;const ft=it[L.__cacheKey];ft!==void 0&&(it[L.__cacheKey].usedTimes--,ft.usedTimes===0&&P(A)),L.__cacheKey=at,L.__webglTexture=it[at].texture}return H}function dt(L,A,H){let $=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&($=35866),A.isData3DTexture&&($=32879);const it=ct(L,A),at=A.source;e.bindTexture($,L.__webglTexture,33984+H);const ft=n.get(at);if(at.version!==ft.__version||it===!0){e.activeTexture(33984+H),a.pixelStorei(37440,A.flipY),a.pixelStorei(37441,A.premultiplyAlpha),a.pixelStorei(3317,A.unpackAlignment),a.pixelStorei(37443,0);const st=S(A)&&x(A.image)===!1;let j=_(A.image,st,!1,h);j=ye(A,j);const Mt=x(j)||r,_t=s.convert(A.format,A.encoding);let Ct=s.convert(A.type),St=w(A.internalFormat,_t,Ct,A.encoding,A.isVideoTexture);lt($,A,Mt);let wt;const Vt=A.mipmaps,Qt=r&&A.isVideoTexture!==!0,_e=ft.__version===void 0||it===!0,F=C(A,j,Mt);if(A.isDepthTexture)St=6402,r?A.type===xi?St=36012:A.type===_i?St=33190:A.type===Qi?St=35056:St=33189:A.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Mi&&St===6402&&A.type!==uc&&A.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=_i,Ct=s.convert(A.type)),A.format===is&&St===6402&&(St=34041,A.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Qi,Ct=s.convert(A.type))),_e&&(Qt?e.texStorage2D(3553,1,St,j.width,j.height):e.texImage2D(3553,0,St,j.width,j.height,0,_t,Ct,null));else if(A.isDataTexture)if(Vt.length>0&&Mt){Qt&&_e&&e.texStorage2D(3553,F,St,Vt[0].width,Vt[0].height);for(let J=0,rt=Vt.length;J<rt;J++)wt=Vt[J],Qt?e.texSubImage2D(3553,J,0,0,wt.width,wt.height,_t,Ct,wt.data):e.texImage2D(3553,J,St,wt.width,wt.height,0,_t,Ct,wt.data);A.generateMipmaps=!1}else Qt?(_e&&e.texStorage2D(3553,F,St,j.width,j.height),e.texSubImage2D(3553,0,0,0,j.width,j.height,_t,Ct,j.data)):e.texImage2D(3553,0,St,j.width,j.height,0,_t,Ct,j.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Qt&&_e&&e.texStorage3D(35866,F,St,Vt[0].width,Vt[0].height,j.depth);for(let J=0,rt=Vt.length;J<rt;J++)wt=Vt[J],A.format!==hn?_t!==null?Qt?e.compressedTexSubImage3D(35866,J,0,0,0,wt.width,wt.height,j.depth,_t,wt.data,0,0):e.compressedTexImage3D(35866,J,St,wt.width,wt.height,j.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(35866,J,0,0,0,wt.width,wt.height,j.depth,_t,Ct,wt.data):e.texImage3D(35866,J,St,wt.width,wt.height,j.depth,0,_t,Ct,wt.data)}else{Qt&&_e&&e.texStorage2D(3553,F,St,Vt[0].width,Vt[0].height);for(let J=0,rt=Vt.length;J<rt;J++)wt=Vt[J],A.format!==hn?_t!==null?Qt?e.compressedTexSubImage2D(3553,J,0,0,wt.width,wt.height,_t,wt.data):e.compressedTexImage2D(3553,J,St,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(3553,J,0,0,wt.width,wt.height,_t,Ct,wt.data):e.texImage2D(3553,J,St,wt.width,wt.height,0,_t,Ct,wt.data)}else if(A.isDataArrayTexture)Qt?(_e&&e.texStorage3D(35866,F,St,j.width,j.height,j.depth),e.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,_t,Ct,j.data)):e.texImage3D(35866,0,St,j.width,j.height,j.depth,0,_t,Ct,j.data);else if(A.isData3DTexture)Qt?(_e&&e.texStorage3D(32879,F,St,j.width,j.height,j.depth),e.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,_t,Ct,j.data)):e.texImage3D(32879,0,St,j.width,j.height,j.depth,0,_t,Ct,j.data);else if(A.isFramebufferTexture){if(_e)if(Qt)e.texStorage2D(3553,F,St,j.width,j.height);else{let J=j.width,rt=j.height;for(let vt=0;vt<F;vt++)e.texImage2D(3553,vt,St,J,rt,0,_t,Ct,null),J>>=1,rt>>=1}}else if(Vt.length>0&&Mt){Qt&&_e&&e.texStorage2D(3553,F,St,Vt[0].width,Vt[0].height);for(let J=0,rt=Vt.length;J<rt;J++)wt=Vt[J],Qt?e.texSubImage2D(3553,J,0,0,_t,Ct,wt):e.texImage2D(3553,J,St,_t,Ct,wt);A.generateMipmaps=!1}else Qt?(_e&&e.texStorage2D(3553,F,St,j.width,j.height),e.texSubImage2D(3553,0,0,0,_t,Ct,j)):e.texImage2D(3553,0,St,_t,Ct,j);E(A,Mt)&&T($),ft.__version=at.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ot(L,A,H){if(A.image.length!==6)return;const $=ct(L,A),it=A.source;e.bindTexture(34067,L.__webglTexture,33984+H);const at=n.get(it);if(it.version!==at.__version||$===!0){e.activeTexture(33984+H),a.pixelStorei(37440,A.flipY),a.pixelStorei(37441,A.premultiplyAlpha),a.pixelStorei(3317,A.unpackAlignment),a.pixelStorei(37443,0);const ft=A.isCompressedTexture||A.image[0].isCompressedTexture,st=A.image[0]&&A.image[0].isDataTexture,j=[];for(let J=0;J<6;J++)!ft&&!st?j[J]=_(A.image[J],!1,!0,c):j[J]=st?A.image[J].image:A.image[J],j[J]=ye(A,j[J]);const Mt=j[0],_t=x(Mt)||r,Ct=s.convert(A.format,A.encoding),St=s.convert(A.type),wt=w(A.internalFormat,Ct,St,A.encoding),Vt=r&&A.isVideoTexture!==!0,Qt=at.__version===void 0||$===!0;let _e=C(A,Mt,_t);lt(34067,A,_t);let F;if(ft){Vt&&Qt&&e.texStorage2D(34067,_e,wt,Mt.width,Mt.height);for(let J=0;J<6;J++){F=j[J].mipmaps;for(let rt=0;rt<F.length;rt++){const vt=F[rt];A.format!==hn?Ct!==null?Vt?e.compressedTexSubImage2D(34069+J,rt,0,0,vt.width,vt.height,Ct,vt.data):e.compressedTexImage2D(34069+J,rt,wt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?e.texSubImage2D(34069+J,rt,0,0,vt.width,vt.height,Ct,St,vt.data):e.texImage2D(34069+J,rt,wt,vt.width,vt.height,0,Ct,St,vt.data)}}}else{F=A.mipmaps,Vt&&Qt&&(F.length>0&&_e++,e.texStorage2D(34067,_e,wt,j[0].width,j[0].height));for(let J=0;J<6;J++)if(st){Vt?e.texSubImage2D(34069+J,0,0,0,j[J].width,j[J].height,Ct,St,j[J].data):e.texImage2D(34069+J,0,wt,j[J].width,j[J].height,0,Ct,St,j[J].data);for(let rt=0;rt<F.length;rt++){const xt=F[rt].image[J].image;Vt?e.texSubImage2D(34069+J,rt+1,0,0,xt.width,xt.height,Ct,St,xt.data):e.texImage2D(34069+J,rt+1,wt,xt.width,xt.height,0,Ct,St,xt.data)}}else{Vt?e.texSubImage2D(34069+J,0,0,0,Ct,St,j[J]):e.texImage2D(34069+J,0,wt,Ct,St,j[J]);for(let rt=0;rt<F.length;rt++){const vt=F[rt];Vt?e.texSubImage2D(34069+J,rt+1,0,0,Ct,St,vt.image[J]):e.texImage2D(34069+J,rt+1,wt,Ct,St,vt.image[J])}}}E(A,_t)&&T(34067),at.__version=it.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ut(L,A,H,$,it){const at=s.convert(H.format,H.encoding),ft=s.convert(H.type),st=w(H.internalFormat,at,ft,H.encoding);n.get(A).__hasExternalTextures||(it===32879||it===35866?e.texImage3D(it,0,st,A.width,A.height,A.depth,0,at,ft,null):e.texImage2D(it,0,st,A.width,A.height,0,at,ft,null)),e.bindFramebuffer(36160,L),Gt(A)?d.framebufferTexture2DMultisampleEXT(36160,$,it,n.get(H).__webglTexture,0,Ft(A)):(it===3553||it>=34069&&it<=34074)&&a.framebufferTexture2D(36160,$,it,n.get(H).__webglTexture,0),e.bindFramebuffer(36160,null)}function Et(L,A,H){if(a.bindRenderbuffer(36161,L),A.depthBuffer&&!A.stencilBuffer){let $=33189;if(H||Gt(A)){const it=A.depthTexture;it&&it.isDepthTexture&&(it.type===xi?$=36012:it.type===_i&&($=33190));const at=Ft(A);Gt(A)?d.renderbufferStorageMultisampleEXT(36161,at,$,A.width,A.height):a.renderbufferStorageMultisample(36161,at,$,A.width,A.height)}else a.renderbufferStorage(36161,$,A.width,A.height);a.framebufferRenderbuffer(36160,36096,36161,L)}else if(A.depthBuffer&&A.stencilBuffer){const $=Ft(A);H&&Gt(A)===!1?a.renderbufferStorageMultisample(36161,$,35056,A.width,A.height):Gt(A)?d.renderbufferStorageMultisampleEXT(36161,$,35056,A.width,A.height):a.renderbufferStorage(36161,34041,A.width,A.height),a.framebufferRenderbuffer(36160,33306,36161,L)}else{const $=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let it=0;it<$.length;it++){const at=$[it],ft=s.convert(at.format,at.encoding),st=s.convert(at.type),j=w(at.internalFormat,ft,st,at.encoding),Mt=Ft(A);H&&Gt(A)===!1?a.renderbufferStorageMultisample(36161,Mt,j,A.width,A.height):Gt(A)?d.renderbufferStorageMultisampleEXT(36161,Mt,j,A.width,A.height):a.renderbufferStorage(36161,j,A.width,A.height)}}a.bindRenderbuffer(36161,null)}function bt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Y(A.depthTexture,0);const $=n.get(A.depthTexture).__webglTexture,it=Ft(A);if(A.depthTexture.format===Mi)Gt(A)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,it):a.framebufferTexture2D(36160,36096,3553,$,0);else if(A.depthTexture.format===is)Gt(A)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,it):a.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function Dt(L){const A=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");bt(A.__webglFramebuffer,L)}else if(H){A.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(36160,A.__webglFramebuffer[$]),A.__webglDepthbuffer[$]=a.createRenderbuffer(),Et(A.__webglDepthbuffer[$],L,!1)}else e.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=a.createRenderbuffer(),Et(A.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function Jt(L,A,H){const $=n.get(L);A!==void 0&&ut($.__webglFramebuffer,L,L.texture,36064,3553),H!==void 0&&Dt(L)}function oe(L){const A=L.texture,H=n.get(L),$=n.get(A);L.addEventListener("dispose",U),L.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=A.version,o.memory.textures++);const it=L.isWebGLCubeRenderTarget===!0,at=L.isWebGLMultipleRenderTargets===!0,ft=x(L)||r;if(it){H.__webglFramebuffer=[];for(let st=0;st<6;st++)H.__webglFramebuffer[st]=a.createFramebuffer()}else{if(H.__webglFramebuffer=a.createFramebuffer(),at)if(i.drawBuffers){const st=L.texture;for(let j=0,Mt=st.length;j<Mt;j++){const _t=n.get(st[j]);_t.__webglTexture===void 0&&(_t.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&L.samples>0&&Gt(L)===!1){const st=at?A:[A];H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let j=0;j<st.length;j++){const Mt=st[j];H.__webglColorRenderbuffer[j]=a.createRenderbuffer(),a.bindRenderbuffer(36161,H.__webglColorRenderbuffer[j]);const _t=s.convert(Mt.format,Mt.encoding),Ct=s.convert(Mt.type),St=w(Mt.internalFormat,_t,Ct,Mt.encoding,L.isXRRenderTarget===!0),wt=Ft(L);a.renderbufferStorageMultisample(36161,wt,St,L.width,L.height),a.framebufferRenderbuffer(36160,36064+j,36161,H.__webglColorRenderbuffer[j])}a.bindRenderbuffer(36161,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),Et(H.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}}if(it){e.bindTexture(34067,$.__webglTexture),lt(34067,A,ft);for(let st=0;st<6;st++)ut(H.__webglFramebuffer[st],L,A,36064,34069+st);E(A,ft)&&T(34067),e.unbindTexture()}else if(at){const st=L.texture;for(let j=0,Mt=st.length;j<Mt;j++){const _t=st[j],Ct=n.get(_t);e.bindTexture(3553,Ct.__webglTexture),lt(3553,_t,ft),ut(H.__webglFramebuffer,L,_t,36064+j,3553),E(_t,ft)&&T(3553)}e.unbindTexture()}else{let st=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(r?st=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(st,$.__webglTexture),lt(st,A,ft),ut(H.__webglFramebuffer,L,A,36064,st),E(A,ft)&&T(st),e.unbindTexture()}L.depthBuffer&&Dt(L)}function $t(L){const A=x(L)||r,H=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let $=0,it=H.length;$<it;$++){const at=H[$];if(E(at,A)){const ft=L.isWebGLCubeRenderTarget?34067:3553,st=n.get(at).__webglTexture;e.bindTexture(ft,st),T(ft),e.unbindTexture()}}}function zt(L){if(r&&L.samples>0&&Gt(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],H=L.width,$=L.height;let it=16384;const at=[],ft=L.stencilBuffer?33306:36096,st=n.get(L),j=L.isWebGLMultipleRenderTargets===!0;if(j)for(let Mt=0;Mt<A.length;Mt++)e.bindFramebuffer(36160,st.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Mt,36161,null),e.bindFramebuffer(36160,st.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Mt,3553,null,0);e.bindFramebuffer(36008,st.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,st.__webglFramebuffer);for(let Mt=0;Mt<A.length;Mt++){at.push(36064+Mt),L.depthBuffer&&at.push(ft);const _t=st.__ignoreDepthValues!==void 0?st.__ignoreDepthValues:!1;if(_t===!1&&(L.depthBuffer&&(it|=256),L.stencilBuffer&&(it|=1024)),j&&a.framebufferRenderbuffer(36008,36064,36161,st.__webglColorRenderbuffer[Mt]),_t===!0&&(a.invalidateFramebuffer(36008,[ft]),a.invalidateFramebuffer(36009,[ft])),j){const Ct=n.get(A[Mt]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,Ct,0)}a.blitFramebuffer(0,0,H,$,0,0,H,$,it,9728),m&&a.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),j)for(let Mt=0;Mt<A.length;Mt++){e.bindFramebuffer(36160,st.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Mt,36161,st.__webglColorRenderbuffer[Mt]);const _t=n.get(A[Mt]).__webglTexture;e.bindFramebuffer(36160,st.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Mt,3553,_t,0)}e.bindFramebuffer(36009,st.__webglMultisampledFramebuffer)}}function Ft(L){return Math.min(u,L.samples)}function Gt(L){const A=n.get(L);return r&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ee(L){const A=o.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function ye(L,A){const H=L.encoding,$=L.format,it=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===kr||H!==bi&&(H===ne?r===!1?t.has("EXT_sRGB")===!0&&$===hn?(L.format=kr,L.minFilter=tn,L.generateMipmaps=!1):A=vc.sRGBToLinear(A):($!==hn||it!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),A}this.allocateTextureUnit=k,this.resetTextureUnits=K,this.setTexture2D=Y,this.setTexture2DArray=et,this.setTexture3D=B,this.setTextureCube=tt,this.rebindTextures=Jt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Gt}function rg(a,t,e){const n=e.isWebGL2;function i(s,o=null){let r;if(s===wi)return 5121;if(s===Ph)return 32819;if(s===Oh)return 32820;if(s===Lh)return 5120;if(s===Dh)return 5122;if(s===uc)return 5123;if(s===Ih)return 5124;if(s===_i)return 5125;if(s===xi)return 5126;if(s===Os)return n?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Nh)return 6406;if(s===hn)return 6408;if(s===Bh)return 6409;if(s===kh)return 6410;if(s===Mi)return 6402;if(s===is)return 34041;if(s===kr)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===zh)return 6403;if(s===Fh)return 36244;if(s===Uh)return 33319;if(s===Gh)return 33320;if(s===Vh)return 36249;if(s===Uo||s===Go||s===Vo||s===Ho)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ya||s===_a||s===xa||s===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hh)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wa||s===ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===wa)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===ba)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sa||s===Ea||s===Aa||s===Ca||s===Ta||s===Ra||s===La||s===Da||s===Ia||s===Pa||s===Oa||s===Na||s===Ba||s===ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Sa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ea)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Aa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ca)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ta)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ra)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===La)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Da)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ia)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Oa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Na)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ba)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ka)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===Wo)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Wh||s===za||s===Fa||s===Ua)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(s===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(s===za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qi?n?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class ag extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class se extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lg={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n),y=this._getHandJoint(c,f);p!==null&&(y.matrix.fromArray(p.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=p.radius),y.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class cg extends Ve{constructor(t,e,n,i,s,o,r,l,c,h){if(h=h!==void 0?h:Mi,h!==Mi&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mi&&(n=_i),n===void 0&&h===is&&(n=Qi),super(null,i,s,o,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:me,this.minFilter=l!==void 0?l:me,this.flipY=!1,this.generateMipmaps=!1}}class hg extends as{constructor(t,e){super();const n=this;let i=null,s=1,o=null,r="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null;const f=e.getContextAttributes();let p=null,y=null;const v=[],_=[],x=new Set,S=new Map,E=new en;E.layers.enable(1),E.viewport=new Se;const T=new en;T.layers.enable(2),T.viewport=new Se;const w=[E,T],C=new ag;C.layers.enable(1),C.layers.enable(2);let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let tt=v[B];return tt===void 0&&(tt=new pr,v[B]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(B){let tt=v[B];return tt===void 0&&(tt=new pr,v[B]=tt),tt.getGripSpace()},this.getHand=function(B){let tt=v[B];return tt===void 0&&(tt=new pr,v[B]=tt),tt.getHandSpace()};function U(B){const tt=_.indexOf(B.inputSource);if(tt===-1)return;const nt=v[tt];nt!==void 0&&nt.dispatchEvent({type:B.type,data:B.inputSource})}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",P);for(let B=0;B<v.length;B++){const tt=_[B];tt!==null&&(_[B]=null,v[B].disconnect(tt))}I=null,z=null,t.setRenderTarget(p),m=null,d=null,u=null,i=null,y=null,et.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",P),f.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:m}),y=new Ei(m.framebufferWidth,m.framebufferHeight,{format:hn,type:wi,encoding:t.outputEncoding,stencilBuffer:f.stencil})}else{let tt=null,nt=null,V=null;f.depth&&(V=f.stencil?35056:33190,tt=f.stencil?is:Mi,nt=f.stencil?Qi:_i);const lt={colorFormat:32856,depthFormat:V,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(lt),i.updateRenderState({layers:[d]}),y=new Ei(d.textureWidth,d.textureHeight,{format:hn,type:wi,depthTexture:new cg(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:f.stencil,encoding:t.outputEncoding,samples:f.antialias?4:0});const ct=t.properties.get(y);ct.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(r),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(B){for(let tt=0;tt<B.removed.length;tt++){const nt=B.removed[tt],V=_.indexOf(nt);V>=0&&(_[V]=null,v[V].disconnect(nt))}for(let tt=0;tt<B.added.length;tt++){const nt=B.added[tt];let V=_.indexOf(nt);if(V===-1){for(let ct=0;ct<v.length;ct++)if(ct>=_.length){_.push(nt),V=ct;break}else if(_[ct]===null){_[ct]=nt,V=ct;break}if(V===-1)break}const lt=v[V];lt&&lt.connect(nt)}}const O=new G,N=new G;function K(B,tt,nt){O.setFromMatrixPosition(tt.matrixWorld),N.setFromMatrixPosition(nt.matrixWorld);const V=O.distanceTo(N),lt=tt.projectionMatrix.elements,ct=nt.projectionMatrix.elements,dt=lt[14]/(lt[10]-1),ot=lt[14]/(lt[10]+1),ut=(lt[9]+1)/lt[5],Et=(lt[9]-1)/lt[5],bt=(lt[8]-1)/lt[0],Dt=(ct[8]+1)/ct[0],Jt=dt*bt,oe=dt*Dt,$t=V/(-bt+Dt),zt=$t*-bt;tt.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(zt),B.translateZ($t),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ft=dt+$t,Gt=ot+$t,Ee=Jt-zt,ye=oe+(V-zt),L=ut*ot/Gt*Ft,A=Et*ot/Gt*Ft;B.projectionMatrix.makePerspective(Ee,ye,L,A,Ft,Gt)}function k(B,tt){tt===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(tt.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;C.near=T.near=E.near=B.near,C.far=T.far=E.far=B.far,(I!==C.near||z!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,z=C.far);const tt=B.parent,nt=C.cameras;k(C,tt);for(let lt=0;lt<nt.length;lt++)k(nt[lt],tt);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),B.matrix.copy(C.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const V=B.children;for(let lt=0,ct=V.length;lt<ct;lt++)V[lt].updateMatrixWorld(!0);nt.length===2?K(C,E,T):C.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return x};let q=null;function Y(B,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){const nt=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let V=!1;nt.length!==C.cameras.length&&(C.cameras.length=0,V=!0);for(let lt=0;lt<nt.length;lt++){const ct=nt[lt];let dt=null;if(m!==null)dt=m.getViewport(ct);else{const ut=u.getViewSubImage(d,ct);dt=ut.viewport,lt===0&&(t.setRenderTargetTextures(y,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(y))}let ot=w[lt];ot===void 0&&(ot=new en,ot.layers.enable(lt),ot.viewport=new Se,w[lt]=ot),ot.matrix.fromArray(ct.transform.matrix),ot.projectionMatrix.fromArray(ct.projectionMatrix),ot.viewport.set(dt.x,dt.y,dt.width,dt.height),lt===0&&C.matrix.copy(ot.matrix),V===!0&&C.cameras.push(ot)}}for(let nt=0;nt<v.length;nt++){const V=_[nt],lt=v[nt];V!==null&&lt!==void 0&&lt.update(V,tt,c||o)}if(q&&q(B,tt),tt.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:tt.detectedPlanes});let nt=null;for(const V of x)tt.detectedPlanes.has(V)||(nt===null&&(nt=[]),nt.push(V));if(nt!==null)for(const V of nt)x.delete(V),S.delete(V),n.dispatchEvent({type:"planeremoved",data:V});for(const V of tt.detectedPlanes)if(!x.has(V))x.add(V),S.set(V,tt.lastChangedTime),n.dispatchEvent({type:"planeadded",data:V});else{const lt=S.get(V);V.lastChangedTime>lt&&(S.set(V,V.lastChangedTime),n.dispatchEvent({type:"planechanged",data:V}))}}g=null}const et=new Cc;et.setAnimationLoop(Y),this.setAnimationLoop=function(B){q=B},this.dispose=function(){}}}function dg(a,t){function e(f,p){p.color.getRGB(f.fogColor.value,Sc(a)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),h(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),u(f,p),p.isMeshPhysicalMaterial&&d(f,p,_)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?r(f,p,y,v):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Ye&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Ye&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const y=t.get(p).envMap;if(y&&(f.envMap.value=y,f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const x=a.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uv2Transform.value.copy(_.matrix))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function r(f,p,y,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*y,f.scale.value=v*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,y){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ye&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function ug(a,t,e,n){let i={},s={},o=[];const r=e.isWebGL2?a.getParameter(35375):0;function l(v,_){const x=_.program;n.uniformBlockBinding(v,x)}function c(v,_){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",p));const S=_.program;n.updateUBOMapping(v,S);const E=t.render.frame;s[v.id]!==E&&(d(v),s[v.id]=E)}function h(v){const _=u();v.__bindingPointIndex=_;const x=a.createBuffer(),S=v.__size,E=v.usage;return a.bindBuffer(35345,x),a.bufferData(35345,S,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,_,x),x}function u(){for(let v=0;v<r;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=i[v.id],x=v.uniforms,S=v.__cache;a.bindBuffer(35345,_);for(let E=0,T=x.length;E<T;E++){const w=x[E];if(m(w,E,S)===!0){const C=w.__offset,I=Array.isArray(w.value)?w.value:[w.value];let z=0;for(let U=0;U<I.length;U++){const D=I[U],P=f(D);typeof D=="number"?(w.__data[0]=D,a.bufferSubData(35345,C+z,w.__data)):D.isMatrix3?(w.__data[0]=D.elements[0],w.__data[1]=D.elements[1],w.__data[2]=D.elements[2],w.__data[3]=D.elements[0],w.__data[4]=D.elements[3],w.__data[5]=D.elements[4],w.__data[6]=D.elements[5],w.__data[7]=D.elements[0],w.__data[8]=D.elements[6],w.__data[9]=D.elements[7],w.__data[10]=D.elements[8],w.__data[11]=D.elements[0]):(D.toArray(w.__data,z),z+=P.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,C,w.__data)}}a.bindBuffer(35345,null)}function m(v,_,x){const S=v.value;if(x[_]===void 0){if(typeof S=="number")x[_]=S;else{const E=Array.isArray(S)?S:[S],T=[];for(let w=0;w<E.length;w++)T.push(E[w].clone());x[_]=T}return!0}else if(typeof S=="number"){if(x[_]!==S)return x[_]=S,!0}else{const E=Array.isArray(x[_])?x[_]:[x[_]],T=Array.isArray(S)?S:[S];for(let w=0;w<E.length;w++){const C=E[w];if(C.equals(T[w])===!1)return C.copy(T[w]),!0}}return!1}function g(v){const _=v.uniforms;let x=0;const S=16;let E=0;for(let T=0,w=_.length;T<w;T++){const C=_[T],I={boundary:0,storage:0},z=Array.isArray(C.value)?C.value:[C.value];for(let U=0,D=z.length;U<D;U++){const P=z[U],O=f(P);I.boundary+=O.boundary,I.storage+=O.storage}if(C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,T>0){E=x%S;const U=S-E;E!==0&&U-I.boundary<0&&(x+=S-E,C.__offset=x)}x+=I.storage}return E=x%S,E>0&&(x+=S-E),v.__size=x,v.__cache={},this}function f(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),a.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function y(){for(const v in i)a.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:y}}function fg(){const a=Mo("canvas");return a.style.display="block",a}function ea(a={}){this.isWebGLRenderer=!0;const t=a.canvas!==void 0?a.canvas:fg(),e=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,r=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let u=null,d=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=bi,this.useLegacyLights=!0,this.toneMapping=Gn,this.toneMappingExposure=1;const f=this;let p=!1,y=0,v=0,_=null,x=-1,S=null;const E=new Se,T=new Se;let w=null,C=t.width,I=t.height,z=1,U=null,D=null;const P=new Se(0,0,C,I),O=new Se(0,0,C,I);let N=!1;const K=new Jr;let k=!1,q=!1,Y=null;const et=new fe,B=new G,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return _===null?z:1}let V=e;function lt(R,X){for(let Z=0;Z<R.length;Z++){const W=R[Z],Q=t.getContext(W,X);if(Q!==null)return Q}return null}try{const R={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:r,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kr}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",wt,!1),V===null){const X=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&X.shift(),V=lt(X,R),V===null)throw lt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ct,dt,ot,ut,Et,bt,Dt,Jt,oe,$t,zt,Ft,Gt,Ee,ye,L,A,H,$,it,at,ft,st,j;function Mt(){ct=new Sp(V),dt=new yp(V,ct,a),ct.init(dt),ft=new rg(V,ct,dt),ot=new sg(V,ct,dt),ut=new Cp,Et=new Wm,bt=new og(V,ct,ot,Et,dt,ft,ut),Dt=new xp(f),Jt=new bp(f),oe=new Nd(V,dt),st=new gp(V,ct,oe,dt),$t=new Ep(V,oe,ut,st),zt=new Dp(V,$t,oe,ut),$=new Lp(V,dt,bt),L=new _p(Et),Ft=new Hm(f,Dt,Jt,ct,dt,st,L),Gt=new dg(f,Et),Ee=new Xm,ye=new Jm(ct,dt),H=new mp(f,Dt,Jt,ot,zt,h,o),A=new ig(f,zt,dt),j=new ug(V,ut,dt,ot),it=new vp(V,ct,ut,dt),at=new Ap(V,ct,ut,dt),ut.programs=Ft.programs,f.capabilities=dt,f.extensions=ct,f.properties=Et,f.renderLists=Ee,f.shadowMap=A,f.state=ot,f.info=ut}Mt();const _t=new hg(f,V);this.xr=_t,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(C,I,!1))},this.getSize=function(R){return R.set(C,I)},this.setSize=function(R,X,Z=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=R,I=X,t.width=Math.floor(R*z),t.height=Math.floor(X*z),Z===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(C*z,I*z).floor()},this.setDrawingBufferSize=function(R,X,Z){C=R,I=X,z=Z,t.width=Math.floor(R*Z),t.height=Math.floor(X*Z),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(P)},this.setViewport=function(R,X,Z,W){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,X,Z,W),ot.viewport(E.copy(P).multiplyScalar(z).floor())},this.getScissor=function(R){return R.copy(O)},this.setScissor=function(R,X,Z,W){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,X,Z,W),ot.scissor(T.copy(O).multiplyScalar(z).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(R){ot.setScissorTest(N=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){D=R},this.getClearColor=function(R){return R.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(R=!0,X=!0,Z=!0){let W=0;R&&(W|=16384),X&&(W|=256),Z&&(W|=1024),V.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),Ee.dispose(),ye.dispose(),Et.dispose(),Dt.dispose(),Jt.dispose(),zt.dispose(),st.dispose(),j.dispose(),Ft.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",rt),_t.removeEventListener("sessionend",vt),Y&&(Y.dispose(),Y=null),xt.stop()};function Ct(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const R=ut.autoReset,X=A.enabled,Z=A.autoUpdate,W=A.needsUpdate,Q=A.type;Mt(),ut.autoReset=R,A.enabled=X,A.autoUpdate=Z,A.needsUpdate=W,A.type=Q}function wt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Vt(R){const X=R.target;X.removeEventListener("dispose",Vt),Qt(X)}function Qt(R){_e(R),Et.remove(R)}function _e(R){const X=Et.get(R).programs;X!==void 0&&(X.forEach(function(Z){Ft.releaseProgram(Z)}),R.isShaderMaterial&&Ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,Z,W,Q,At){X===null&&(X=tt);const Lt=Q.isMesh&&Q.matrixWorld.determinant()<0,Nt=Zc(R,X,Z,W,Q);ot.setMaterial(W,Lt);let Bt=Z.index,Kt=1;W.wireframe===!0&&(Bt=$t.getWireframeAttribute(Z),Kt=2);const Ht=Z.drawRange,Wt=Z.attributes.position;let le=Ht.start*Kt,He=(Ht.start+Ht.count)*Kt;At!==null&&(le=Math.max(le,At.start*Kt),He=Math.min(He,(At.start+At.count)*Kt)),Bt!==null?(le=Math.max(le,0),He=Math.min(He,Bt.count)):Wt!=null&&(le=Math.max(le,0),He=Math.min(He,Wt.count));const Cn=He-le;if(Cn<0||Cn===1/0)return;st.setup(Q,W,Nt,Z,Bt);let si,ce=it;if(Bt!==null&&(si=oe.get(Bt),ce=at,ce.setIndex(si)),Q.isMesh)W.wireframe===!0?(ot.setLineWidth(W.wireframeLinewidth*nt()),ce.setMode(1)):ce.setMode(4);else if(Q.isLine){let qt=W.linewidth;qt===void 0&&(qt=1),ot.setLineWidth(qt*nt()),Q.isLineSegments?ce.setMode(1):Q.isLineLoop?ce.setMode(2):ce.setMode(3)}else Q.isPoints?ce.setMode(0):Q.isSprite&&ce.setMode(4);if(Q.isInstancedMesh)ce.renderInstances(le,Cn,Q.count);else if(Z.isInstancedBufferGeometry){const qt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,No=Math.min(Z.instanceCount,qt);ce.renderInstances(le,Cn,No)}else ce.render(le,Cn)},this.compile=function(R,X){function Z(W,Q,At){W.transparent===!0&&W.side===Fn&&W.forceSinglePass===!1?(W.side=Ye,W.needsUpdate=!0,$e(W,Q,At),W.side=ni,W.needsUpdate=!0,$e(W,Q,At),W.side=Fn):$e(W,Q,At)}d=ye.get(R),d.init(),g.push(d),R.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights(f.useLegacyLights),R.traverse(function(W){const Q=W.material;if(Q)if(Array.isArray(Q))for(let At=0;At<Q.length;At++){const Lt=Q[At];Z(Lt,R,W)}else Z(Q,R,W)}),g.pop(),d=null};let F=null;function J(R){F&&F(R)}function rt(){xt.stop()}function vt(){xt.start()}const xt=new Cc;xt.setAnimationLoop(J),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(R){F=R,_t.setAnimationLoop(R),R===null?xt.stop():xt.start()},_t.addEventListener("sessionstart",rt),_t.addEventListener("sessionend",vt),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(X),X=_t.getCamera()),R.isScene===!0&&R.onBeforeRender(f,R,X,_),d=ye.get(R,g.length),d.init(),g.push(d),et.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),K.setFromProjectionMatrix(et),q=this.localClippingEnabled,k=L.init(this.clippingPlanes,q),u=Ee.get(R,m.length),u.init(),m.push(u),te(R,X,0,f.sortObjects),u.finish(),f.sortObjects===!0&&u.sort(U,D),k===!0&&L.beginShadows();const Z=d.state.shadowsArray;if(A.render(Z,R,X),k===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(u,R),d.setupLights(f.useLegacyLights),X.isArrayCamera){const W=X.cameras;for(let Q=0,At=W.length;Q<At;Q++){const Lt=W[Q];xe(u,R,Lt,Lt.viewport)}}else xe(u,R,X);_!==null&&(bt.updateMultisampleRenderTarget(_),bt.updateRenderTargetMipmap(_)),R.isScene===!0&&R.onAfterRender(f,R,X),st.resetDefaultState(),x=-1,S=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function te(R,X,Z,W){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){W&&B.setFromMatrixPosition(R.matrixWorld).applyMatrix4(et);const Lt=zt.update(R),Nt=R.material;Nt.visible&&u.push(R,Lt,Nt,Z,B.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==ut.render.frame&&(R.skeleton.update(),R.skeleton.frame=ut.render.frame),!R.frustumCulled||K.intersectsObject(R))){W&&B.setFromMatrixPosition(R.matrixWorld).applyMatrix4(et);const Lt=zt.update(R),Nt=R.material;if(Array.isArray(Nt)){const Bt=Lt.groups;for(let Kt=0,Ht=Bt.length;Kt<Ht;Kt++){const Wt=Bt[Kt],le=Nt[Wt.materialIndex];le&&le.visible&&u.push(R,Lt,le,Z,B.z,Wt)}}else Nt.visible&&u.push(R,Lt,Nt,Z,B.z,null)}}const At=R.children;for(let Lt=0,Nt=At.length;Lt<Nt;Lt++)te(At[Lt],X,Z,W)}function xe(R,X,Z,W){const Q=R.opaque,At=R.transmissive,Lt=R.transparent;d.setupLightsView(Z),k===!0&&L.setGlobalState(f.clippingPlanes,Z),At.length>0&&De(Q,X,Z),W&&ot.viewport(E.copy(W)),Q.length>0&&mn(Q,X,Z),At.length>0&&mn(At,X,Z),Lt.length>0&&mn(Lt,X,Z),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function De(R,X,Z){const W=dt.isWebGL2;Y===null&&(Y=new Ei(1024,1024,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")?Os:wi,minFilter:Ps,samples:W&&s===!0?4:0}));const Q=f.getRenderTarget();f.setRenderTarget(Y),f.clear();const At=f.toneMapping;f.toneMapping=Gn,mn(R,X,Z),f.toneMapping=At,bt.updateMultisampleRenderTarget(Y),bt.updateRenderTargetMipmap(Y),f.setRenderTarget(Q)}function mn(R,X,Z){const W=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,At=R.length;Q<At;Q++){const Lt=R[Q],Nt=Lt.object,Bt=Lt.geometry,Kt=W===null?Lt.material:W,Ht=Lt.group;Nt.layers.test(Z.layers)&&ae(Nt,X,Z,Bt,Kt,Ht)}}function ae(R,X,Z,W,Q,At){R.onBeforeRender(f,X,Z,W,Q,At),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(f,X,Z,W,R,At),Q.transparent===!0&&Q.side===Fn&&Q.forceSinglePass===!1?(Q.side=Ye,Q.needsUpdate=!0,f.renderBufferDirect(Z,X,W,Q,R,At),Q.side=ni,Q.needsUpdate=!0,f.renderBufferDirect(Z,X,W,Q,R,At),Q.side=Fn):f.renderBufferDirect(Z,X,W,Q,R,At),R.onAfterRender(f,X,Z,W,Q,At)}function $e(R,X,Z){X.isScene!==!0&&(X=tt);const W=Et.get(R),Q=d.state.lights,At=d.state.shadowsArray,Lt=Q.state.version,Nt=Ft.getParameters(R,Q.state,At,X,Z),Bt=Ft.getProgramCacheKey(Nt);let Kt=W.programs;W.environment=R.isMeshStandardMaterial?X.environment:null,W.fog=X.fog,W.envMap=(R.isMeshStandardMaterial?Jt:Dt).get(R.envMap||W.environment),Kt===void 0&&(R.addEventListener("dispose",Vt),Kt=new Map,W.programs=Kt);let Ht=Kt.get(Bt);if(Ht!==void 0){if(W.currentProgram===Ht&&W.lightsStateVersion===Lt)return gn(R,Nt),Ht}else Nt.uniforms=Ft.getUniforms(R),R.onBuild(Z,Nt,f),R.onBeforeCompile(Nt,f),Ht=Ft.acquireProgram(Nt,Bt),Kt.set(Bt,Ht),W.uniforms=Nt.uniforms;const Wt=W.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=L.uniform),gn(R,Nt),W.needsLights=Qc(R),W.lightsStateVersion=Lt,W.needsLights&&(Wt.ambientLightColor.value=Q.state.ambient,Wt.lightProbe.value=Q.state.probe,Wt.directionalLights.value=Q.state.directional,Wt.directionalLightShadows.value=Q.state.directionalShadow,Wt.spotLights.value=Q.state.spot,Wt.spotLightShadows.value=Q.state.spotShadow,Wt.rectAreaLights.value=Q.state.rectArea,Wt.ltc_1.value=Q.state.rectAreaLTC1,Wt.ltc_2.value=Q.state.rectAreaLTC2,Wt.pointLights.value=Q.state.point,Wt.pointLightShadows.value=Q.state.pointShadow,Wt.hemisphereLights.value=Q.state.hemi,Wt.directionalShadowMap.value=Q.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Wt.spotShadowMap.value=Q.state.spotShadowMap,Wt.spotLightMatrix.value=Q.state.spotLightMatrix,Wt.spotLightMap.value=Q.state.spotLightMap,Wt.pointShadowMap.value=Q.state.pointShadowMap,Wt.pointShadowMatrix.value=Q.state.pointShadowMatrix);const le=Ht.getUniforms(),He=yo.seqWithValue(le.seq,Wt);return W.currentProgram=Ht,W.uniformsList=He,Ht}function gn(R,X){const Z=Et.get(R);Z.outputEncoding=X.outputEncoding,Z.instancing=X.instancing,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function Zc(R,X,Z,W,Q){X.isScene!==!0&&(X=tt),bt.resetTextureUnits();const At=X.fog,Lt=W.isMeshStandardMaterial?X.environment:null,Nt=_===null?f.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:bi,Bt=(W.isMeshStandardMaterial?Jt:Dt).get(W.envMap||Lt),Kt=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ht=!!W.normalMap&&!!Z.attributes.tangent,Wt=!!Z.morphAttributes.position,le=!!Z.morphAttributes.normal,He=!!Z.morphAttributes.color,Cn=W.toneMapped?f.toneMapping:Gn,si=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ce=si!==void 0?si.length:0,qt=Et.get(W),No=d.state.lights;if(k===!0&&(q===!0||R!==S)){const We=R===S&&W.id===x;L.setState(W,R,We)}let Me=!1;W.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==No.state.version||qt.outputEncoding!==Nt||Q.isInstancedMesh&&qt.instancing===!1||!Q.isInstancedMesh&&qt.instancing===!0||Q.isSkinnedMesh&&qt.skinning===!1||!Q.isSkinnedMesh&&qt.skinning===!0||qt.envMap!==Bt||W.fog===!0&&qt.fog!==At||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==L.numPlanes||qt.numIntersection!==L.numIntersection)||qt.vertexAlphas!==Kt||qt.vertexTangents!==Ht||qt.morphTargets!==Wt||qt.morphNormals!==le||qt.morphColors!==He||qt.toneMapping!==Cn||dt.isWebGL2===!0&&qt.morphTargetsCount!==ce)&&(Me=!0):(Me=!0,qt.__version=W.version);let oi=qt.currentProgram;Me===!0&&(oi=$e(W,X,Q));let ca=!1,hs=!1,Bo=!1;const Ie=oi.getUniforms(),ri=qt.uniforms;if(ot.useProgram(oi.program)&&(ca=!0,hs=!0,Bo=!0),W.id!==x&&(x=W.id,hs=!0),ca||S!==R){if(Ie.setValue(V,"projectionMatrix",R.projectionMatrix),dt.logarithmicDepthBuffer&&Ie.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),S!==R&&(S=R,hs=!0,Bo=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const We=Ie.map.cameraPosition;We!==void 0&&We.setValue(V,B.setFromMatrixPosition(R.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ie.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||Q.isSkinnedMesh)&&Ie.setValue(V,"viewMatrix",R.matrixWorldInverse)}if(Q.isSkinnedMesh){Ie.setOptional(V,Q,"bindMatrix"),Ie.setOptional(V,Q,"bindMatrixInverse");const We=Q.skeleton;We&&(dt.floatVertexTextures?(We.boneTexture===null&&We.computeBoneTexture(),Ie.setValue(V,"boneTexture",We.boneTexture,bt),Ie.setValue(V,"boneTextureSize",We.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ko=Z.morphAttributes;if((ko.position!==void 0||ko.normal!==void 0||ko.color!==void 0&&dt.isWebGL2===!0)&&$.update(Q,Z,oi),(hs||qt.receiveShadow!==Q.receiveShadow)&&(qt.receiveShadow=Q.receiveShadow,Ie.setValue(V,"receiveShadow",Q.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ri.envMap.value=Bt,ri.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),hs&&(Ie.setValue(V,"toneMappingExposure",f.toneMappingExposure),qt.needsLights&&Jc(ri,Bo),At&&W.fog===!0&&Gt.refreshFogUniforms(ri,At),Gt.refreshMaterialUniforms(ri,W,z,I,Y),yo.upload(V,qt.uniformsList,ri,bt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(yo.upload(V,qt.uniformsList,ri,bt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ie.setValue(V,"center",Q.center),Ie.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ie.setValue(V,"normalMatrix",Q.normalMatrix),Ie.setValue(V,"modelMatrix",Q.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const We=W.uniformsGroups;for(let zo=0,th=We.length;zo<th;zo++)if(dt.isWebGL2){const ha=We[zo];j.update(ha,oi),j.bind(ha,oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return oi}function Jc(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Qc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(R,X,Z){Et.get(R.texture).__webglTexture=X,Et.get(R.depthTexture).__webglTexture=Z;const W=Et.get(R);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=Z===void 0,W.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,X){const Z=Et.get(R);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,Z=0){_=R,y=X,v=Z;let W=!0,Q=null,At=!1,Lt=!1;if(R){const Bt=Et.get(R);Bt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(36160,null),W=!1):Bt.__webglFramebuffer===void 0?bt.setupRenderTarget(R):Bt.__hasExternalTextures&&bt.rebindTextures(R,Et.get(R.texture).__webglTexture,Et.get(R.depthTexture).__webglTexture);const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Lt=!0);const Ht=Et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Q=Ht[X],At=!0):dt.isWebGL2&&R.samples>0&&bt.useMultisampledRTT(R)===!1?Q=Et.get(R).__webglMultisampledFramebuffer:Q=Ht,E.copy(R.viewport),T.copy(R.scissor),w=R.scissorTest}else E.copy(P).multiplyScalar(z).floor(),T.copy(O).multiplyScalar(z).floor(),w=N;if(ot.bindFramebuffer(36160,Q)&&dt.drawBuffers&&W&&ot.drawBuffers(R,Q),ot.viewport(E),ot.scissor(T),ot.setScissorTest(w),At){const Bt=Et.get(R.texture);V.framebufferTexture2D(36160,36064,34069+X,Bt.__webglTexture,Z)}else if(Lt){const Bt=Et.get(R.texture),Kt=X||0;V.framebufferTextureLayer(36160,36064,Bt.__webglTexture,Z||0,Kt)}x=-1},this.readRenderTargetPixels=function(R,X,Z,W,Q,At,Lt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt){ot.bindFramebuffer(36160,Nt);try{const Bt=R.texture,Kt=Bt.format,Ht=Bt.type;if(Kt!==hn&&ft.convert(Kt)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Ht===Os&&(ct.has("EXT_color_buffer_half_float")||dt.isWebGL2&&ct.has("EXT_color_buffer_float"));if(Ht!==wi&&ft.convert(Ht)!==V.getParameter(35738)&&!(Ht===xi&&(dt.isWebGL2||ct.has("OES_texture_float")||ct.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-W&&Z>=0&&Z<=R.height-Q&&V.readPixels(X,Z,W,Q,ft.convert(Kt),ft.convert(Ht),At)}finally{const Bt=_!==null?Et.get(_).__webglFramebuffer:null;ot.bindFramebuffer(36160,Bt)}}},this.copyFramebufferToTexture=function(R,X,Z=0){const W=Math.pow(2,-Z),Q=Math.floor(X.image.width*W),At=Math.floor(X.image.height*W);bt.setTexture2D(X,0),V.copyTexSubImage2D(3553,Z,0,0,R.x,R.y,Q,At),ot.unbindTexture()},this.copyTextureToTexture=function(R,X,Z,W=0){const Q=X.image.width,At=X.image.height,Lt=ft.convert(Z.format),Nt=ft.convert(Z.type);bt.setTexture2D(Z,0),V.pixelStorei(37440,Z.flipY),V.pixelStorei(37441,Z.premultiplyAlpha),V.pixelStorei(3317,Z.unpackAlignment),X.isDataTexture?V.texSubImage2D(3553,W,R.x,R.y,Q,At,Lt,Nt,X.image.data):X.isCompressedTexture?V.compressedTexSubImage2D(3553,W,R.x,R.y,X.mipmaps[0].width,X.mipmaps[0].height,Lt,X.mipmaps[0].data):V.texSubImage2D(3553,W,R.x,R.y,Lt,Nt,X.image),W===0&&Z.generateMipmaps&&V.generateMipmap(3553),ot.unbindTexture()},this.copyTextureToTexture3D=function(R,X,Z,W,Q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const At=R.max.x-R.min.x+1,Lt=R.max.y-R.min.y+1,Nt=R.max.z-R.min.z+1,Bt=ft.convert(W.format),Kt=ft.convert(W.type);let Ht;if(W.isData3DTexture)bt.setTexture3D(W,0),Ht=32879;else if(W.isDataArrayTexture)bt.setTexture2DArray(W,0),Ht=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,W.flipY),V.pixelStorei(37441,W.premultiplyAlpha),V.pixelStorei(3317,W.unpackAlignment);const Wt=V.getParameter(3314),le=V.getParameter(32878),He=V.getParameter(3316),Cn=V.getParameter(3315),si=V.getParameter(32877),ce=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;V.pixelStorei(3314,ce.width),V.pixelStorei(32878,ce.height),V.pixelStorei(3316,R.min.x),V.pixelStorei(3315,R.min.y),V.pixelStorei(32877,R.min.z),Z.isDataTexture||Z.isData3DTexture?V.texSubImage3D(Ht,Q,X.x,X.y,X.z,At,Lt,Nt,Bt,Kt,ce.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ht,Q,X.x,X.y,X.z,At,Lt,Nt,Bt,ce.data)):V.texSubImage3D(Ht,Q,X.x,X.y,X.z,At,Lt,Nt,Bt,Kt,ce),V.pixelStorei(3314,Wt),V.pixelStorei(32878,le),V.pixelStorei(3316,He),V.pixelStorei(3315,Cn),V.pixelStorei(32877,si),Q===0&&W.generateMipmaps&&V.generateMipmap(Ht),ot.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?bt.setTextureCube(R,0):R.isData3DTexture?bt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?bt.setTexture2DArray(R,0):bt.setTexture2D(R,0),ot.unbindTexture()},this.resetState=function(){y=0,v=0,_=null,ot.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(ea.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class pg extends ea{}pg.prototype.isWebGL1Renderer=!0;class na{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new na(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class mg extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class gg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Br,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Oe=new G;class wo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pc extends ls{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vi;const ys=new G,Hi=new G,Wi=new G,qi=new kt,_s=new kt,Oc=new fe,oo=new G,xs=new G,ro=new G,wl=new kt,mr=new kt,bl=new kt;class vg extends Ce{constructor(t){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new Wn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gg(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new wo(n,3,0,!1)),Vi.setAttribute("uv",new wo(n,2,3,!1))}this.geometry=Vi,this.material=t!==void 0?t:new Pc,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),Oc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Wi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;ao(oo.set(-.5,-.5,0),Wi,o,Hi,i,s),ao(xs.set(.5,-.5,0),Wi,o,Hi,i,s),ao(ro.set(.5,.5,0),Wi,o,Hi,i,s),wl.set(0,0),mr.set(1,0),bl.set(1,1);let r=t.ray.intersectTriangle(oo,xs,ro,!1,ys);if(r===null&&(ao(xs.set(-.5,.5,0),Wi,o,Hi,i,s),mr.set(0,1),r=t.ray.intersectTriangle(oo,ro,xs,!1,ys),r===null))return;const l=t.ray.origin.distanceTo(ys);l<t.near||l>t.far||e.push({distance:l,point:ys.clone(),uv:En.getUV(ys,oo,xs,ro,wl,mr,bl,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ao(a,t,e,n,i,s){qi.subVectors(a,e).addScalar(.5).multiply(n),i!==void 0?(_s.x=s*qi.x-i*qi.y,_s.y=i*qi.x+s*qi.y):_s.copy(qi),a.copy(t),a.x+=_s.x,a.y+=_s.y,a.applyMatrix4(Oc)}class ia extends Ve{constructor(t,e,n,i,s,o,r,l,c){super(t,e,n,i,s,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ut extends ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nc extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const gr=new fe,Sl=new G,El=new G;class yg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sl),El.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(El),e.updateMatrixWorld(),gr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _g extends yg{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xg extends Nc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new _g}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mg extends Nc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class wg{constructor(t,e,n=0,i=1/0){this.ray=new xc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new $r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ur(t,this,n,e),n.sort(Al),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ur(t[i],this,n,e);return n.sort(Al),n}}function Al(a,t){return a.distance-t.distance}function Ur(a,t,e,n){if(a.layers.test(t.layers)&&a.raycast(t,e),n===!0){const i=a.children;for(let s=0,o=i.length;s<o;s++)Ur(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kr);const ht={CHUNK_SIZE:16,RENDER_DISTANCE:3,GRAVITY:-19.8,PLAYER_SPEED:12,PLAYER_JUMP_FORCE:8,PLAYER_HEIGHT:1.8,PLAYER_RADIUS:.4,FOVY:75,NEAR:.1,FAR:1e3,PLAYER_MAX_HP:10,FALL_DAMAGE_MIN_SPEED:-12,FALL_DAMAGE_FACTOR:1.5,MAX_MOBS:5,MOB_SPAWN_RADIUS:25,MOB_DESPAWN_RADIUS:35,MAX_DROPPED_ITEMS:30,ITEM_DESPAWN_TIME:30,ITEM_PICKUP_RADIUS:3.5,GAS_WEB_APP_URL:"https://script.google.com/macros/s/AKfycbzKtNw2WKxcfTh8bIqK5-9NqxHXHR9SFn0SRsL366S97-JodCSj_-fCu3rqJzbF2x7Dcw/exec"},lo={keyForward:"KeyW",keyBackward:"KeyS",keyLeft:"KeyA",keyRight:"KeyD",keyJump:"Space",keyPlaceBlock:"KeyV",keyBreakBlock:"KeyB",keyOpenMap:"KeyM",keyOpenInventory:"KeyE",keyOpenCrafting:"KeyC",keyOpenManual:"KeyN",keyRegisterHome:"KeyH",invertClicks:!1,enableShadows:!0,easyMode:!0,characterType:"boy1",keyRescue:"KeyP"},Cl="maikurafu_config";class bg{currentConfig;constructor(){this.currentConfig={...lo},this.load()}load(){try{const t=localStorage.getItem(Cl);if(t){const e=JSON.parse(t);this.currentConfig={...lo,...e}}}catch(t){console.error("設定の読み込みに失敗しました。デフォルト設定を使用します。",t),this.currentConfig={...lo}}return this.currentConfig}getConfig(){return this.currentConfig}save(t){this.currentConfig={...this.currentConfig,...t};try{localStorage.setItem(Cl,JSON.stringify(this.currentConfig))}catch(e){console.error("設定の保存に失敗しました。",e)}}reset(){return this.currentConfig={...lo},this.save(this.currentConfig),this.currentConfig}}const Ae=new bg;class Sg{scene;camera;renderer;container;constructor(t){const e=document.getElementById(t);if(!e)throw new Error(`Container element with id "${t}" not found.`);this.container=e,this.initScene(),this.initCamera(),this.initRenderer(),window.addEventListener("resize",this.onWindowResize.bind(this))}initScene(){this.scene=new mg,this.scene.background=new Xt(8306926),this.scene.fog=new na(8306926,.015)}initCamera(){const t=this.container.clientWidth/this.container.clientHeight;this.camera=new en(ht.FOVY,t,ht.NEAR,ht.FAR),this.camera.position.set(0,5,10),this.camera.lookAt(0,0,0)}initRenderer(){const t=Ae.getConfig();this.renderer=new ea({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=t.enableShadows,this.renderer.shadowMap.type=ac,this.container.appendChild(this.renderer.domElement)}onWindowResize(){const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}render(){this.renderer.render(this.scene,this.camera)}}var M=(a=>(a[a.AIR=0]="AIR",a[a.GROUND=1]="GROUND",a[a.DIRT=2]="DIRT",a[a.STONE=3]="STONE",a[a.WOOD=4]="WOOD",a[a.LEAVES=5]="LEAVES",a[a.PLANK=6]="PLANK",a[a.BRICK=7]="BRICK",a[a.SAND=8]="SAND",a[a.COAL_ORE=9]="COAL_ORE",a[a.TORCH=10]="TORCH",a[a.GLASS=11]="GLASS",a[a.DOOR_CLOSED=12]="DOOR_CLOSED",a[a.DOOR_OPEN=13]="DOOR_OPEN",a[a.SWORD=14]="SWORD",a[a.STAIRS=15]="STAIRS",a[a.FENCE=16]="FENCE",a[a.BED_HEAD=17]="BED_HEAD",a[a.BED_FOOT=18]="BED_FOOT",a[a.FURNACE=19]="FURNACE",a[a.CHEST=20]="CHEST",a[a.WATER=21]="WATER",a[a.DIAMOND_SWORD=22]="DIAMOND_SWORD",a[a.HAMMER=23]="HAMMER",a[a.BEDROCK=24]="BEDROCK",a[a.IRON_ORE=25]="IRON_ORE",a[a.GOLD_ORE=26]="GOLD_ORE",a[a.DIAMOND_ORE=27]="DIAMOND_ORE",a[a.STICK=28]="STICK",a[a.IRON_INGOT=29]="IRON_INGOT",a[a.GOLD_INGOT=30]="GOLD_INGOT",a[a.DIAMOND=31]="DIAMOND",a[a.COBBLESTONE=32]="COBBLESTONE",a[a.COAL=33]="COAL",a[a.APPLE=34]="APPLE",a[a.WOODEN_PICKAXE=35]="WOODEN_PICKAXE",a[a.STONE_PICKAXE=36]="STONE_PICKAXE",a[a.IRON_PICKAXE=37]="IRON_PICKAXE",a[a.DIAMOND_PICKAXE=38]="DIAMOND_PICKAXE",a[a.WOODEN_AXE=39]="WOODEN_AXE",a[a.STONE_AXE=40]="STONE_AXE",a[a.IRON_AXE=41]="IRON_AXE",a[a.DIAMOND_AXE=42]="DIAMOND_AXE",a[a.WOODEN_SHOVEL=43]="WOODEN_SHOVEL",a[a.STONE_SHOVEL=44]="STONE_SHOVEL",a[a.IRON_SHOVEL=45]="IRON_SHOVEL",a[a.DIAMOND_SHOVEL=46]="DIAMOND_SHOVEL",a[a.LEATHER_ARMOR_SET=47]="LEATHER_ARMOR_SET",a[a.IRON_ARMOR_SET=48]="IRON_ARMOR_SET",a[a.DIAMOND_ARMOR_SET=49]="DIAMOND_ARMOR_SET",a))(M||{});const An={0:{id:0,name:"くうき",isSolid:!1,isTransparent:!0,uvs:{front:0,back:0,left:0,right:0,top:0,bottom:0}},1:{id:1,name:"くさブロック",isSolid:!0,isTransparent:!1,uvs:{front:3,back:3,left:3,right:3,top:0,bottom:2},drops:2,hardness:.5,requiredToolCategory:"shovel"},2:{id:2,name:"つち",isSolid:!0,isTransparent:!1,uvs:{front:1,back:1,left:1,right:1,top:1,bottom:1},hardness:.5,requiredToolCategory:"shovel"},3:{id:3,name:"いし",isSolid:!0,isTransparent:!1,uvs:{front:1,back:1,left:1,right:1,top:1,bottom:1},drops:32,hardness:1.5,requiredToolCategory:"pickaxe"},4:{id:4,name:"まるた",isSolid:!0,isTransparent:!1,uvs:{front:4,back:4,left:4,right:4,top:5,bottom:5},hardness:2,requiredToolCategory:"axe"},5:{id:5,name:"はっぱ",isSolid:!0,isTransparent:!1,uvs:{front:6,back:6,left:6,right:6,top:6,bottom:6},hardness:.2},6:{id:6,name:"いた",isSolid:!0,isTransparent:!1,uvs:{front:9,back:9,left:9,right:9,top:9,bottom:9},hardness:2,requiredToolCategory:"axe"},7:{id:7,name:"れんが",isSolid:!0,isTransparent:!1,uvs:{front:7,back:7,left:7,right:7,top:7,bottom:7},hardness:2,requiredToolCategory:"pickaxe"},8:{id:8,name:"すな",isSolid:!0,isTransparent:!1,uvs:{front:8,back:8,left:8,right:8,top:8,bottom:8},hardness:.5,requiredToolCategory:"shovel"},9:{id:9,name:"せきたんこうせき",isSolid:!0,isTransparent:!1,uvs:{front:25,back:25,left:25,right:25,top:25,bottom:25},drops:33,hardness:3,requiredToolCategory:"pickaxe",minToolTier:0},10:{id:10,name:"たいまつ",isSolid:!1,isTransparent:!0,lightLevel:14,uvs:{front:11,back:11,left:11,right:11,top:11,bottom:11}},11:{id:11,name:"ガラス",isSolid:!0,isTransparent:!0,uvs:{front:12,back:12,left:12,right:12,top:12,bottom:12},hardness:.3},12:{id:12,name:"ドア（しめる）",isSolid:!0,isTransparent:!0,uvs:{front:13,back:13,left:13,right:13,top:13,bottom:13},hardness:1,requiredToolCategory:"axe"},13:{id:13,name:"ドア（あける）",isSolid:!1,isTransparent:!0,uvs:{front:13,back:13,left:13,right:13,top:13,bottom:13},hardness:1,requiredToolCategory:"axe"},14:{id:14,name:"いしのけん",isSolid:!1,isTransparent:!0,uvs:{front:14,back:14,left:14,right:14,top:14,bottom:14},isTool:!0,toolCategory:"sword",toolTier:1,speedMultiplier:1.5},15:{id:15,name:"きのかいだん",isSolid:!0,isTransparent:!0,uvs:{front:9,back:9,left:9,right:9,top:9,bottom:9},hardness:1,requiredToolCategory:"axe"},16:{id:16,name:"さく",isSolid:!0,isTransparent:!0,uvs:{front:16,back:16,left:16,right:16,top:16,bottom:16},hardness:1,requiredToolCategory:"axe"},17:{id:17,name:"ベッド（まくら）",isSolid:!0,isTransparent:!0,uvs:{front:18,back:18,left:18,right:18,top:17,bottom:16},hardness:.5},18:{id:18,name:"ベッド（あしもと）",isSolid:!0,isTransparent:!0,uvs:{front:18,back:18,left:18,right:18,top:18,bottom:16},hardness:.5},19:{id:19,name:"かまど",isSolid:!0,isTransparent:!1,uvs:{front:19,back:2,left:2,right:2,top:2,bottom:2},hardness:2,requiredToolCategory:"pickaxe"},20:{id:20,name:"チェスト",isSolid:!0,isTransparent:!0,uvs:{front:20,back:21,left:21,right:21,top:21,bottom:16},hardness:2,requiredToolCategory:"axe"},21:{id:21,name:"みず",isSolid:!1,isTransparent:!0,uvs:{front:22,back:22,left:22,right:22,top:22,bottom:22}},22:{id:22,name:"ダイヤのけん",isSolid:!1,isTransparent:!0,uvs:{front:23,back:23,left:23,right:23,top:23,bottom:23},isTool:!0,toolCategory:"sword",toolTier:3,speedMultiplier:1.5},23:{id:23,name:"ハンマー",isSolid:!1,isTransparent:!0,uvs:{front:24,back:24,left:24,right:24,top:24,bottom:24},isTool:!0,toolCategory:"sword",toolTier:2,speedMultiplier:1.5},24:{id:24,name:"いわばん",isSolid:!0,isTransparent:!1,uvs:{front:25,back:25,left:25,right:25,top:25,bottom:25}},25:{id:25,name:"てつこうせき",isSolid:!0,isTransparent:!1,uvs:{front:26,back:26,left:26,right:26,top:26,bottom:26},hardness:3,requiredToolCategory:"pickaxe",minToolTier:1},26:{id:26,name:"きんこうせき",isSolid:!0,isTransparent:!1,uvs:{front:27,back:27,left:27,right:27,top:27,bottom:27},hardness:3,requiredToolCategory:"pickaxe",minToolTier:2},27:{id:27,name:"ダイヤこうせき",isSolid:!0,isTransparent:!1,uvs:{front:28,back:28,left:28,right:28,top:28,bottom:28},drops:31,hardness:3,requiredToolCategory:"pickaxe",minToolTier:2},28:{id:28,name:"きのぼう",isSolid:!1,isTransparent:!0,uvs:{front:29,back:29,left:29,right:29,top:29,bottom:29}},29:{id:29,name:"てつインゴット",isSolid:!1,isTransparent:!0,uvs:{front:30,back:30,left:30,right:30,top:30,bottom:30}},30:{id:30,name:"きんインゴット",isSolid:!1,isTransparent:!0,uvs:{front:31,back:31,left:31,right:31,top:31,bottom:31}},31:{id:31,name:"ダイヤモンド",isSolid:!1,isTransparent:!0,uvs:{front:32,back:32,left:32,right:32,top:32,bottom:32}},32:{id:32,name:"丸石",isSolid:!0,isTransparent:!1,uvs:{front:33,back:33,left:33,right:33,top:33,bottom:33}},33:{id:33,name:"石炭",isSolid:!1,isTransparent:!0,uvs:{front:34,back:34,left:34,right:34,top:34,bottom:34}},34:{id:34,name:"リンゴ",isSolid:!1,isTransparent:!0,uvs:{front:35,back:35,left:35,right:35,top:35,bottom:35}},35:{id:35,name:"木のツルハシ",isSolid:!1,isTransparent:!0,uvs:{front:36,back:36,left:36,right:36,top:36,bottom:36},isTool:!0,toolCategory:"pickaxe",toolTier:0,speedMultiplier:2},36:{id:36,name:"石のツルハシ",isSolid:!1,isTransparent:!0,uvs:{front:37,back:37,left:37,right:37,top:37,bottom:37},isTool:!0,toolCategory:"pickaxe",toolTier:1,speedMultiplier:4},37:{id:37,name:"鉄のツルハシ",isSolid:!1,isTransparent:!0,uvs:{front:38,back:38,left:38,right:38,top:38,bottom:38},isTool:!0,toolCategory:"pickaxe",toolTier:2,speedMultiplier:6},38:{id:38,name:"ダイヤのツルハシ",isSolid:!1,isTransparent:!0,uvs:{front:39,back:39,left:39,right:39,top:39,bottom:39},isTool:!0,toolCategory:"pickaxe",toolTier:3,speedMultiplier:8},39:{id:39,name:"木の斧",isSolid:!1,isTransparent:!0,uvs:{front:40,back:40,left:40,right:40,top:40,bottom:40},isTool:!0,toolCategory:"axe",toolTier:0,speedMultiplier:2},40:{id:40,name:"石の斧",isSolid:!1,isTransparent:!0,uvs:{front:41,back:41,left:41,right:41,top:41,bottom:41},isTool:!0,toolCategory:"axe",toolTier:1,speedMultiplier:4},41:{id:41,name:"鉄の斧",isSolid:!1,isTransparent:!0,uvs:{front:42,back:42,left:42,right:42,top:42,bottom:42},isTool:!0,toolCategory:"axe",toolTier:2,speedMultiplier:6},42:{id:42,name:"ダイヤの斧",isSolid:!1,isTransparent:!0,uvs:{front:43,back:43,left:43,right:43,top:43,bottom:43},isTool:!0,toolCategory:"axe",toolTier:3,speedMultiplier:8},43:{id:43,name:"木のシャベル",isSolid:!1,isTransparent:!0,uvs:{front:44,back:44,left:44,right:44,top:44,bottom:44},isTool:!0,toolCategory:"shovel",toolTier:0,speedMultiplier:2},44:{id:44,name:"石のシャベル",isSolid:!1,isTransparent:!0,uvs:{front:45,back:45,left:45,right:45,top:45,bottom:45},isTool:!0,toolCategory:"shovel",toolTier:1,speedMultiplier:4},45:{id:45,name:"鉄のシャベル",isSolid:!1,isTransparent:!0,uvs:{front:46,back:46,left:46,right:46,top:46,bottom:46},isTool:!0,toolCategory:"shovel",toolTier:2,speedMultiplier:6},46:{id:46,name:"ダイヤのシャベル",isSolid:!1,isTransparent:!0,uvs:{front:47,back:47,left:47,right:47,top:47,bottom:47},isTool:!0,toolCategory:"shovel",toolTier:3,speedMultiplier:8},47:{id:47,name:"革の防具セット",isSolid:!1,isTransparent:!0,uvs:{front:48,back:48,left:48,right:48,top:48,bottom:48}},48:{id:48,name:"鉄の防具セット",isSolid:!1,isTransparent:!0,uvs:{front:49,back:49,left:49,right:49,top:49,bottom:49}},49:{id:49,name:"ダイヤの防具セット",isSolid:!1,isTransparent:!0,uvs:{front:50,back:50,left:50,right:50,top:50,bottom:50}}},Eg=[{dir:[1,0,0],corners:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uvName:"right"},{dir:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uvName:"left"},{dir:[0,1,0],corners:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],uvName:"top"},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uvName:"bottom"},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uvName:"front"},{dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uvName:"back"}],Tl={top:1,bottom:.5,front:.8,back:.8,left:.65,right:.65};class Rl{x;y;z;blocks;mesh=null;isDirty=!0;size=ht.CHUNK_SIZE;constructor(t,e,n){this.x=t,this.y=e,this.z=n,this.blocks=new Uint8Array(this.size*this.size*this.size)}getIndex(t,e,n){return t+e*this.size+n*this.size*this.size}isOutOfBounds(t,e,n){return t<0||t>=this.size||e<0||e>=this.size||n<0||n>=this.size}setBlock(t,e,n,i){if(this.isOutOfBounds(t,e,n))return;const s=this.getIndex(t,e,n);this.blocks[s]!==i&&(this.blocks[s]=i,this.isDirty=!0)}getBlock(t,e,n){if(this.isOutOfBounds(t,e,n))return M.AIR;const i=this.getIndex(t,e,n);return this.blocks[i]}generateMesh(t,e){if(!this.isDirty&&this.mesh)return this.mesh;const n=[],i=[],s=[],o=[],r=[];let l=0;const c=4,h=16,u=1/c,d=1/h,m=[],g=2;for(let y=-g;y<this.size+g;y++)for(let v=-g;v<this.size+g;v++)for(let _=-g;_<this.size+g;_++){const x=this.x*this.size+y,S=this.y*this.size+v,E=this.z*this.size+_;t.getBlock(x,S,E)===M.TORCH&&m.push({x:x+.5,y:S+.5,z:E+.5})}const f=(y,v,_,x,S,E,T)=>{const w=[{dir:[1,0,0],corners:[[x,v,E],[x,v,_],[x,S,_],[x,S,E]],uvName:"right"},{dir:[-1,0,0],corners:[[y,v,_],[y,v,E],[y,S,E],[y,S,_]],uvName:"left"},{dir:[0,1,0],corners:[[y,S,E],[x,S,E],[x,S,_],[y,S,_]],uvName:"top"},{dir:[0,-1,0],corners:[[y,v,_],[x,v,_],[x,v,E],[y,v,E]],uvName:"bottom"},{dir:[0,0,1],corners:[[y,v,E],[x,v,E],[x,S,E],[y,S,E]],uvName:"front"},{dir:[0,0,-1],corners:[[x,v,_],[y,v,_],[y,S,_],[x,S,_]],uvName:"back"}];for(const C of w){for(const N of C.corners){n.push(N[0],N[1],N[2]),i.push(...C.dir);const K=Tl[C.uvName];let k=0;for(let et=0;et<m.length;et++){const B=m[et],tt=N[0]-B.x,nt=N[1]-B.y,V=N[2]-B.z,lt=Math.abs(tt)+Math.abs(nt)+Math.abs(V),ct=Math.max(0,1-lt/8);ct>k&&(k=ct)}const q=Math.min(1,.52+k*.48),Y=K*q;s.push(Y,Y*(.93-(1-k)*.08),Y*(.85-(1-k)*.15))}const I=T%c,z=Math.floor(T/c),U=I*u,D=1-(z+1)*d,P=U+u,O=D+d;o.push(U,D,P,D,P,O,U,O),r.push(l,l+1,l+2,l,l+2,l+3),l+=4}};for(let y=0;y<this.size;y++)for(let v=0;v<this.size;v++)for(let _=0;_<this.size;_++){const x=this.getBlock(y,v,_);if(x===M.AIR)continue;const S=An[x],E=this.x*this.size+y,T=this.y*this.size+v,w=this.z*this.size+_;if(x===M.STAIRS){f(E,T,w,E+1,T+.5,w+1,9),f(E,T+.5,w,E+1,T+1,w+.5,9);continue}if(x===M.FENCE){const I=(tt,nt)=>{const V=y+tt,lt=v,ct=_+nt;let dt;return this.isOutOfBounds(V,lt,ct)?dt=t.getBlock(E+tt,T,w+nt):dt=this.getBlock(V,lt,ct),dt===M.FENCE},z=I(0,-1),U=I(0,1),D=I(1,0),P=I(-1,0),O=.375,N=.625;f(E+O,T,w+O,E+N,T+1,w+N,16);const K=.4375,k=.5625,q=.75,Y=.875,et=.4375,B=.5625;z&&(f(E+K,T+q,w,E+k,T+Y,w+O,16),f(E+K,T+et,w,E+k,T+B,w+O,16)),U&&(f(E+K,T+q,w+N,E+k,T+Y,w+1,16),f(E+K,T+et,w+N,E+k,T+B,w+1,16)),D&&(f(E+N,T+q,w+K,E+1,T+Y,w+k,16),f(E+N,T+et,w+K,E+1,T+B,w+k,16)),P&&(f(E,T+q,w+K,E+O,T+Y,w+k,16),f(E,T+et,w+K,E+O,T+B,w+k,16));continue}if(x===M.BED_HEAD||x===M.BED_FOOT){const I=x===M.BED_HEAD?17:18,z=18,U=.5625;f(E,T,w,E+1,T+U,w+1,z);{const D=I,P=D%c,O=Math.floor(D/c),N=P*u,K=1-(O+1)*d,k=N+u,q=K+d,Y=[[E,T+U,w+1],[E+1,T+U,w+1],[E+1,T+U,w],[E,T+U,w]];for(const et of Y)n.push(et[0],et[1],et[2]),i.push(0,1,0),s.push(.95,.95,.95);o.push(N,K,k,K,k,q,N,q),r.push(l,l+1,l+2,l,l+2,l+3),l+=4}continue}if(x===M.CHEST){const C=E+.0625,I=w+.0625,z=E+.9375,U=w+.9375;f(C,T,I,z,T+.875,U,21);{const P=20%c,O=Math.floor(20/c),N=P*u,K=1-(O+1)*d,k=N+u,q=K+d,Y=[[C,T,U],[z,T,U],[z,T+.875,U],[C,T+.875,U]];for(const et of Y)n.push(et[0],et[1],et[2]),i.push(0,0,1),s.push(.85,.85,.85);o.push(N,K,k,K,k,q,N,q),r.push(l,l+1,l+2,l,l+2,l+3),l+=4}f(C,T+.875,I,z,T+.9375,U,21);continue}for(const C of Eg){const I=y+C.dir[0],z=v+C.dir[1],U=_+C.dir[2];let D=!1;if(x===M.TORCH||x===M.DOOR_CLOSED||x===M.DOOR_OPEN)D=!0;else{let P;this.isOutOfBounds(I,z,U)?P=t.getBlock(E+C.dir[0],T+C.dir[1],w+C.dir[2]):P=this.getBlock(I,z,U);const O=An[P];!O.isSolid||O.isTransparent?S.isTransparent&&P===x?D=!1:D=!0:D=!1}if(D){const P=x===M.TORCH,O=x===M.DOOR_CLOSED,N=x===M.DOOR_OPEN;let K="NS";(O||N)&&(K=t.getDoorOrientation(E,T,w));for(const ot of C.corners){let ut=E+ot[0],Et=T+ot[1],bt=w+ot[2];if(P)ut=E+.5+(ot[0]-.5)*.125,Et=T+ot[1]*.625,bt=w+.5+(ot[2]-.5)*.125;else if(O)K==="EW"?ut=E+.5+(ot[0]-.5)*.14:bt=w+.5+(ot[2]-.5)*.14;else if(N)K==="EW"?bt=w+.5+(ot[2]-.5)*.14:ut=E+.5+(ot[0]-.5)*.14;else if(x===M.WATER&&ot[1]===1){let L;this.isOutOfBounds(y,v+1,_)?L=t.getBlock(E,T+1,w):L=this.getBlock(y,v+1,_),L!==M.WATER&&(Et-=.15)}n.push(ut,Et,bt),i.push(...C.dir);const Dt=Tl[C.uvName];let Jt=0;for(let L=0;L<m.length;L++){const A=m[L],H=ut-A.x,$=Et-A.y,it=bt-A.z,at=Math.abs(H)+Math.abs($)+Math.abs(it),ft=Math.max(0,1-at/8);ft>Jt&&(Jt=ft)}const oe=x===M.TORCH,$t=oe?1:Jt,zt=Math.min(1,.52+$t*.48),Ft=Dt*zt,Gt=Ft,Ee=Ft*(oe?.9:.93-(1-$t)*.08),ye=Ft*(oe?.6:.85-(1-$t)*.15);s.push(Gt,Ee,ye)}const k=S.uvs[C.uvName],q=k%c,Y=Math.floor(k/c),et=q*u,B=1-(Y+1)*d,tt=et+u,nt=B+d;let V=et,lt=B,ct=tt,dt=nt;if(P){const ot=u/16,ut=d/16;V=et+7*ot,ct=et+9*ot,C.uvName==="top"?(dt=nt-4*ut,lt=nt-6*ut):C.uvName==="bottom"?(dt=nt-14*ut,lt=nt-16*ut):(dt=nt-6*ut,lt=nt-16*ut)}o.push(V,lt,ct,lt,ct,dt,V,dt),r.push(l,l+1,l+2,l,l+2,l+3),l+=4}}}if(n.length===0)return this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null),this.isDirty=!1,null;const p=new Wn;return p.setAttribute("position",new dn(n,3)),p.setAttribute("normal",new dn(i,3)),p.setAttribute("color",new dn(s,3)),p.setAttribute("uv",new dn(o,2)),p.setIndex(r),this.mesh?(this.mesh.geometry.dispose(),this.mesh.geometry=p):(this.mesh=new mt(p,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0),this.isDirty=!1,this.mesh}}function Ag(){const a=document.createElement("canvas"),t=16,e=4,n=16;a.width=t*e,a.height=t*n;const i=a.getContext("2d"),s=(H,$,it,at,ft,st)=>{const j=H*t,Mt=$*t;for(let _t=0;_t<t;_t++)for(let Ct=0;Ct<t;Ct++){const St=(Math.random()-.5)*st,wt=Math.max(0,Math.min(255,Math.floor(it+St))),Vt=Math.max(0,Math.min(255,Math.floor(at+St))),Qt=Math.max(0,Math.min(255,Math.floor(ft+St)));i.fillStyle=`rgb(${wt}, ${Vt}, ${Qt})`,i.fillRect(j+_t,Mt+Ct,1,1)}};s(0,0,100,180,70,30),s(1,0,130,95,65,20),s(2,0,120,120,120,20),s(3,0,130,95,65,20);const o=3*t;for(let H=0;H<t;H++){const $=3+Math.floor(Math.random()*3);for(let it=0;it<$;it++){const at=(Math.random()-.5)*30,ft=Math.max(0,Math.min(255,Math.floor(100+at))),st=Math.max(0,Math.min(255,Math.floor(180+at))),j=Math.max(0,Math.min(255,Math.floor(70+at)));i.fillStyle=`rgb(${ft}, ${st}, ${j})`,i.fillRect(o+H,it,1,1)}}s(0,1,100,70,45,15);const r=0*t,l=1*t;for(let H=0;H<t;H++)for(let $=0;$<t;$++)(H+$*2)%5===0&&(i.fillStyle=`rgb(${70+Math.random()*10}, ${50+Math.random()*10}, ${30+Math.random()*10})`,i.fillRect(r+H,l+$,1,1));s(1,1,185,150,105,10);const c=1*t,h=1*t;i.fillStyle="rgb(115, 80, 50)";for(let H=0;H<t;H++)for(let $=0;$<t;$++){const it=H-7.5,at=$-7.5,ft=Math.sqrt(it*it+at*at);(Math.abs(ft-3)<.6||Math.abs(ft-6)<.6)&&i.fillRect(c+H,h+$,1,1)}s(2,1,35,115,30,20);const u=2*t,d=1*t;for(let H=0;H<30;H++){const $=Math.floor(Math.random()*t),it=Math.floor(Math.random()*t);i.fillStyle=`rgb(${15+Math.random()*10}, ${45+Math.random()*10}, ${10+Math.random()*10})`,i.fillRect(u+$,d+it,1,1)}s(3,1,155,75,55,15);const m=3*t,g=1*t;i.fillStyle="rgb(205, 200, 195)",i.fillRect(m,g+4,t,1),i.fillRect(m,g+9,t,1),i.fillRect(m,g+14,t,1),i.fillRect(m+4,g,1,4),i.fillRect(m+12,g,1,4),i.fillRect(m+8,g+5,1,4),i.fillRect(m+4,g+10,1,4),i.fillRect(m+12,g+10,1,4),i.fillRect(m+8,g+15,1,1),s(0,2,220,205,150,30),s(1,2,190,145,85,12);const f=1*t,p=2*t;i.fillStyle="rgb(140, 100, 55)",i.fillRect(f,p+4,t,1),i.fillRect(f,p+8,t,1),i.fillRect(f,p+12,t,1),s(2,2,120,120,120,20);const y=2*t,v=2*t;i.fillStyle="rgb(40, 40, 40)",[[2,3],[3,3],[3,4],[8,8],[9,8],[9,9],[8,9],[11,2],[12,3],[4,12],[5,11],[5,12]].forEach(([H,$])=>{i.fillRect(y+H,v+$,1,1)});const x=3*t,S=2*t;i.fillStyle="rgba(0, 0, 0, 0)",i.clearRect(x,S,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(x+7,S+8,2,8),i.fillStyle="rgb(255, 120, 0)",i.fillRect(x+7,S+6,2,2),i.fillStyle="rgb(255, 230, 0)",i.fillRect(x+7,S+7,2,1),i.fillStyle="rgb(255, 240, 100)",i.fillRect(x+7,S+4,2,2),i.fillStyle="rgb(60, 40, 20)",i.fillRect(x+7,S+14,2,2);const E=0*t,T=3*t;i.clearRect(E,T,t,t),i.fillStyle="rgba(240, 248, 255, 0.8)",i.fillRect(E,T,t,1),i.fillRect(E,T+t-1,t,1),i.fillRect(E,T,1,t),i.fillRect(E+t-1,T,1,t),i.fillStyle="rgba(255, 255, 255, 0.6)",i.fillRect(E+3,T+3,1,1),i.fillRect(E+4,T+2,1,1),i.fillRect(E+2,T+4,1,1),i.fillRect(E+10,T+10,1,1),i.fillRect(E+11,T+9,1,1),i.fillRect(E+9,T+11,1,1);const w=1*t,C=3*t;i.clearRect(w,C,t,t),i.fillStyle="rgb(130, 85, 45)",i.fillRect(w,C,t,t),i.fillStyle="rgb(90, 55, 25)",i.fillRect(w,C,t,1),i.fillRect(w,C+t-1,t,1),i.fillRect(w,C,1,t),i.fillRect(w+t-1,C,1,t),i.fillRect(w+t/2-1,C,2,t),i.clearRect(w+2,C+2,4,5),i.clearRect(w+10,C+2,4,5),i.fillStyle="rgba(255, 255, 255, 0.4)",i.fillRect(w+2,C+2,4,1),i.fillRect(w+10,C+2,4,1),i.fillStyle="rgb(230, 190, 50)",i.fillRect(w+13,C+9,2,2),i.fillStyle="rgb(180, 140, 20)",i.fillRect(w+14,C+11,1,1);const I=2*t,z=3*t;i.clearRect(I,z,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(I+2,z+13,1,1),i.fillRect(I+3,z+12,1,1),i.fillRect(I+4,z+11,1,1),i.fillStyle="rgb(90, 60, 30)",i.fillRect(I+1,z+14,1,1),i.fillStyle="rgb(230, 190, 50)",i.fillRect(I+5,z+10,1,1),i.fillRect(I+3,z+11,1,1),i.fillRect(I+4,z+12,1,1),i.fillRect(I+5,z+12,1,1),i.fillRect(I+2,z+12,1,1),i.fillRect(I+3,z+13,1,1),i.fillStyle="rgb(120, 120, 120)",[[5,11],[6,10],[7,9],[8,8],[9,7],[10,6],[11,5],[12,4],[13,3]].forEach(([H,$])=>{i.fillRect(I+H,z+$,1,1)}),i.fillStyle="rgb(180, 180, 180)";const D=[[5,10],[6,9],[7,8],[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1]];D.forEach(([H,$])=>{i.fillRect(I+H,z+$,1,1)}),i.fillStyle="rgb(240, 240, 240)";const P=[[4,9],[5,8],[6,7],[7,6],[8,5],[9,4],[10,3],[11,2],[12,1],[13,0]];P.forEach(([H,$])=>{i.fillRect(I+H,z+$,1,1)}),s(0,4,190,145,85,12);const O=0*t,N=4*t;i.fillStyle="rgb(140, 100, 55)",i.fillRect(O,N+4,t,1),i.fillRect(O,N+8,t,1),i.fillRect(O,N+12,t,1);const K=1*t,k=4*t;i.fillStyle="rgb(255, 255, 255)",i.fillRect(K,k,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(K,k,t,1),i.fillRect(K,k+t-1,t,1),i.fillRect(K,k,1,t),i.fillRect(K+t-1,k,1,t),i.fillStyle="rgb(220, 220, 220)",i.fillRect(K+2,k+6,t-4,1),i.fillRect(K+2,k+10,t-4,1);const q=2*t,Y=4*t;i.fillStyle="rgb(200, 30, 30)",i.fillRect(q,Y,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(q,Y,t,1),i.fillRect(q,Y+t-1,t,1),i.fillRect(q,Y,1,t),i.fillRect(q+t-1,Y,1,t),s(3,4,120,115,110,15);const et=3*t,B=4*t;i.fillStyle="rgb(75, 75, 85)",i.fillRect(et+1,B+1,t-2,2),i.fillStyle="rgb(25, 20, 15)",i.fillRect(et+3,B+5,10,8),i.fillStyle="rgb(255, 120, 0)",i.fillRect(et+5,B+7,3,4),i.fillRect(et+8,B+8,3,3),i.fillStyle="rgb(255, 220, 0)",i.fillRect(et+6,B+8,2,2),s(0,5,160,115,65,12);const tt=0*t,nt=5*t;i.fillStyle="rgb(100, 65, 30)",i.fillRect(tt,nt,t,1),i.fillRect(tt,nt+t-1,t,1),i.fillRect(tt,nt,1,t),i.fillRect(tt+t-1,nt,1,t),i.fillRect(tt+1,nt+5,t-2,1),i.fillStyle="rgb(220, 180, 40)",i.fillRect(tt+6,nt+2,4,3),i.fillStyle="rgb(160, 120, 20)",i.fillRect(tt+7,nt+4,2,2),s(1,5,160,115,65,12);const V=1*t,lt=5*t;i.fillStyle="rgb(100, 65, 30)",i.fillRect(V,lt,t,1),i.fillRect(V,lt+t-1,t,1),i.fillRect(V,lt,1,t),i.fillRect(V+t-1,lt,1,t),i.fillRect(V+1,lt+5,t-2,1);const ct=2*t,dt=5*t;s(2,5,40,100,200,20),i.fillStyle="rgba(20, 80, 220, 0.4)",i.fillRect(ct,dt,t,t),i.fillStyle="rgba(255, 255, 255, 0.3)",i.fillRect(ct+2,dt+3,4,1),i.fillRect(ct+8,dt+7,5,1),i.fillRect(ct+4,dt+12,3,1);const ot=3*t,ut=5*t;i.clearRect(ot,ut,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(ot+2,ut+13,1,1),i.fillRect(ot+3,ut+12,1,1),i.fillRect(ot+4,ut+11,1,1),i.fillStyle="rgb(0, 136, 255)",i.fillRect(ot+5,ut+10,1,1),i.fillRect(ot+3,ut+11,1,1),i.fillRect(ot+4,ut+12,1,1),i.fillRect(ot+5,ut+12,1,1),i.fillRect(ot+2,ut+12,1,1),i.fillRect(ot+3,ut+13,1,1),i.fillStyle="rgb(0, 255, 255)",D.forEach(([H,$])=>{i.fillRect(ot+H,ut+$,1,1)}),i.fillStyle="rgb(240, 255, 255)",P.forEach(([H,$])=>{i.fillRect(ot+H,ut+$,1,1)});const Et=0*t,bt=6*t;i.clearRect(Et,bt,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(Et+7,bt+6,2,8),i.fillStyle="rgb(85, 85, 85)",i.fillRect(Et+4,bt+2,8,4),i.fillStyle="rgb(120, 120, 120)",i.fillRect(Et+4,bt+2,8,1);const Dt=1*t,Jt=6*t;i.fillStyle="rgb(30, 30, 30)",i.fillRect(Dt,Jt,t,t);for(let H=0;H<t;H++)for(let $=0;$<t;$++)Math.random()>.5&&(i.fillStyle=Math.random()>.5?"rgb(15, 15, 15)":"rgb(45, 45, 45)",i.fillRect(Dt+H,Jt+$,1,1));const oe=(H,$)=>{const it=H%4,at=Math.floor(H/4),ft=it*t,st=at*t;i.fillStyle="rgb(120, 120, 120)",i.fillRect(ft,st,t,t),i.fillStyle="rgb(100, 100, 100)",i.fillRect(ft,st,t,t/2),i.fillStyle="rgb(140, 140, 140)",i.fillRect(ft,st+t/2,t,t/2),i.fillStyle="rgb(90, 90, 90)";for(let Mt=0;Mt<5;Mt++)i.fillRect(ft+Mt*2,st+Mt*2,2,2);i.fillStyle=$,[[2,2],[10,3],[5,7],[12,9],[4,13],[10,14],[7,10]].forEach(([Mt,_t])=>{i.fillRect(ft+Mt,st+_t,2,2)})};oe(26,"rgb(240, 200, 180)"),oe(27,"rgb(255, 215, 0)"),oe(28,"rgb(0, 255, 255)"),i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(1*t,7*t,t,t),i.fillStyle="rgb(139, 69, 19)",i.beginPath(),i.moveTo(1*t+4,7*t+12),i.lineTo(1*t+12,7*t+4),i.lineWidth=2,i.stroke();const $t=(H,$)=>{const it=H%4,at=Math.floor(H/4),ft=it*t,st=at*t;i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(ft,st,t,t),i.fillStyle=$,i.fillRect(ft+3,st+6,10,4),i.fillStyle="rgba(255, 255, 255, 0.4)",i.fillRect(ft+3,st+6,10,1)};$t(30,"rgb(220, 220, 220)"),$t(31,"rgb(255, 215, 0)"),i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(0*t,8*t,t,t),i.fillStyle="rgb(0, 255, 255)",i.beginPath(),i.moveTo(0*t+8,8*t+2),i.lineTo(0*t+14,8*t+8),i.lineTo(0*t+8,8*t+14),i.lineTo(0*t+2,8*t+8),i.fill(),s(1,8,140,140,140,30),i.fillStyle="rgba(100, 100, 100, 0.5)",i.fillRect(1*t+2,8*t+2,4,4),i.fillRect(1*t+10,8*t+8,4,4),i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(2*t,8*t,t,t),i.fillStyle="rgb(30, 30, 30)",i.beginPath(),i.arc(2*t+8,8*t+8,5,0,Math.PI*2),i.fill(),i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(3*t,8*t,t,t),i.fillStyle="rgb(220, 20, 20)",i.beginPath(),i.arc(3*t+8,8*t+9,5,0,Math.PI*2),i.fill(),i.fillStyle="rgb(34, 139, 34)",i.fillRect(3*t+7,8*t+3,2,3);const zt=(H,$,it)=>{const at=H%4,ft=Math.floor(H/4),st=at*t,j=ft*t;i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(st,j,t,t),i.strokeStyle="rgb(139, 69, 19)",i.lineWidth=2,i.beginPath(),i.moveTo(st+3,j+13),i.lineTo(st+11,j+5),i.stroke(),i.fillStyle=$,it==="pickaxe"?(i.beginPath(),i.moveTo(st+2,j+6),i.lineTo(st+10,j+2),i.lineTo(st+14,j+6),i.lineTo(st+10,j+10),i.fill()):it==="axe"?(i.beginPath(),i.moveTo(st+8,j+2),i.lineTo(st+14,j+4),i.lineTo(st+12,j+10),i.lineTo(st+6,j+6),i.fill()):it==="shovel"&&(i.beginPath(),i.moveTo(st+10,j+2),i.lineTo(st+14,j+6),i.lineTo(st+12,j+8),i.lineTo(st+8,j+4),i.fill())},Ft="rgb(160, 82, 45)",Gt="rgb(169, 169, 169)",Ee="rgb(220, 220, 220)",ye="rgb(0, 255, 255)";zt(36,Ft,"pickaxe"),zt(37,Gt,"pickaxe"),zt(38,Ee,"pickaxe"),zt(39,ye,"pickaxe"),zt(40,Ft,"axe"),zt(41,Gt,"axe"),zt(42,Ee,"axe"),zt(43,ye,"axe"),zt(44,Ft,"shovel"),zt(45,Gt,"shovel"),zt(46,Ee,"shovel"),zt(47,ye,"shovel");const L=(H,$)=>{const it=H%4,at=Math.floor(H/4),ft=it*t,st=at*t;i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(ft,st,t,t),i.fillStyle=$,i.fillRect(ft+4,st+3,8,10),i.clearRect(ft+6,st+10,4,3)};L(48,"rgb(160, 82, 45)"),L(49,Ee),L(50,ye);const A=new ia(a);return A.magFilter=me,A.minFilter=me,A.wrapS=Ke,A.wrapT=Ke,A}class co{permutation;constructor(t=0){this.permutation=new Array(512);const e=new Array(256);let n=t;for(let i=0;i<256;i++)n=(n*1103515245+12345)%2147483648,e[i]=i;for(let i=255;i>0;i--){n=(n*1103515245+12345)%2147483648;const s=n%(i+1),o=e[i];e[i]=e[s],e[s]=o}for(let i=0;i<512;i++)this.permutation[i]=e[i&255]}fade(t){return t*t*t*(t*(t*6-15)+10)}lerp(t,e,n){return e+t*(n-e)}grad(t,e,n){const i=t&15,s=i<8?e:n,o=i<4?n:i===12||i===14?e:0;return(i&1?-s:s)+(i&2?-o:o)}noise2D(t,e){const n=Math.floor(t)&255,i=Math.floor(e)&255;t-=Math.floor(t),e-=Math.floor(e);const s=this.fade(t),o=this.fade(e),r=this.permutation[n]+i,l=this.permutation[n+1]+i;return this.lerp(o,this.lerp(s,this.grad(this.permutation[r],t,e),this.grad(this.permutation[l],t-1,e)),this.lerp(s,this.grad(this.permutation[r+1],t,e-1),this.grad(this.permutation[l+1],t-1,e-1)))}fbm2D(t,e,n,i=.5,s=1){let o=0,r=s,l=1,c=0;for(let h=0;h<n;h++)o+=this.noise2D(t*r,e*r)*l,c+=l,l*=i,r*=2;return o/c}grad3(t,e,n,i){const s=t&15,o=s<8?e:n,r=s<4?n:s===12||s===14?e:i;return(s&1?-o:o)+(s&2?-r:r)}noise3D(t,e,n){const i=Math.floor(t)&255,s=Math.floor(e)&255,o=Math.floor(n)&255;t-=Math.floor(t),e-=Math.floor(e),n-=Math.floor(n);const r=this.fade(t),l=this.fade(e),c=this.fade(n),h=this.permutation[i]+s,u=this.permutation[h]+o,d=this.permutation[h+1]+o,m=this.permutation[i+1]+s,g=this.permutation[m]+o,f=this.permutation[m+1]+o;return this.lerp(c,this.lerp(l,this.lerp(r,this.grad3(this.permutation[u],t,e,n),this.grad3(this.permutation[g],t-1,e,n)),this.lerp(r,this.grad3(this.permutation[d],t,e-1,n),this.grad3(this.permutation[f],t-1,e-1,n))),this.lerp(l,this.lerp(r,this.grad3(this.permutation[u+1],t,e,n-1),this.grad3(this.permutation[g+1],t-1,e,n-1)),this.lerp(r,this.grad3(this.permutation[d+1],t,e-1,n-1),this.grad3(this.permutation[f+1],t-1,e-1,n-1))))}fbm3D(t,e,n,i,s=.5,o=1){let r=0,l=o,c=1,h=0;for(let u=0;u<i;u++)r+=this.noise3D(t*l,e*l,n*l)*c,h+=c,c*=s,l*=2;return r/h}}class Cg{noise;tempNoise;humidNoise;caveNoise;constructor(t=12345){this.noise=new co(t),this.tempNoise=new co(t+100),this.humidNoise=new co(t+200),this.caveNoise=new co(t+300)}generateV1(t){const e=ht.CHUNK_SIZE,n=t.y*e;for(let i=0;i<e;i++)for(let s=0;s<e;s++)for(let o=0;o<e;o++){const r=n+o;let l=M.AIR;if(r<=-10)l=M.BEDROCK;else if(r<-4){const c=Math.sin(t.x*17.13+t.y*31.41+t.z*53.57+i*7.1+o*13.3+s*19.9)*43758.5453;l=c-Math.floor(c)<.05?M.COAL_ORE:M.STONE}else r<0?l=M.DIRT:r===0&&(l=M.GROUND);t.setBlock(i,o,s,l)}this.generateTrees(t,0)}generateV2(t){const e=ht.CHUNK_SIZE,n=t.x*e,i=t.y*e,s=t.z*e,o=-5;for(let r=0;r<e;r++)for(let l=0;l<e;l++){const c=n+r,h=s+l,u=this.noise.fbm2D(c,h,4,.5,.015),d=this.tempNoise.fbm2D(c,h,2,.5,.005),m=this.humidNoise.fbm2D(c,h,2,.5,.005),g=d>.1&&m<0,f=m>.15,p=Math.floor(u*40)-2;for(let y=0;y<e;y++){const v=i+y;let _=M.AIR;if(v<=-30)_=M.BEDROCK;else if(v<=p){let x=!1;if(v<p-5){const S=this.caveNoise.fbm3D(c,v,h,2,.5,.05);Math.abs(S)<.06&&(x=!0)}if(!x)if(v<p-3){_=M.STONE;const S=Math.sin(t.x*17.13+t.y*31.41+t.z*53.57+r*7.1+y*13.3+l*19.9)*43758.5453;if(S-Math.floor(S)<.06){const T=Math.sin(c*1.1+v*2.2+h*3.3)*1e3,w=T-Math.floor(T);v<-20&&w<.08?_=M.DIAMOND_ORE:v<-10&&w<.2?_=M.GOLD_ORE:v<0&&w<.5?_=M.IRON_ORE:_=M.COAL_ORE}}else v<p?_=g?M.SAND:M.DIRT:v===p&&(_=g?M.SAND:M.GROUND)}else v<=o&&(_=M.WATER);t.setBlock(r,y,l,_)}if(p>=i&&p<i+e&&!g&&p>=o){const y=f?.05:.01,v=p-i;this.tryGenerateTreeAt(t,r,v,l,c,h,y)}}}generateTrees(t,e){const n=ht.CHUNK_SIZE,i=t.y*n;if(e>=i&&e<i+n){const s=e-i;for(let o=2;o<n-2;o++)for(let r=2;r<n-2;r++)this.tryGenerateTreeAt(t,o,s,r,t.x*n+o,t.z*n+r)}}tryGenerateTreeAt(t,e,n,i,s,o,r=.015){if(e<2||e>=ht.CHUNK_SIZE-2||i<2||i>=ht.CHUNK_SIZE-2||n+5>=ht.CHUNK_SIZE)return;const l=Math.sin(s*12.9898+o*78.233)*43758.5453;if(l-Math.floor(l)<r){const h=n+1;t.setBlock(e,h,i,M.WOOD),t.setBlock(e,h+1,i,M.WOOD),t.setBlock(e,h+2,i,M.WOOD);const u=h+2;t.setBlock(e+1,u,i,M.LEAVES),t.setBlock(e-1,u,i,M.LEAVES),t.setBlock(e,u,i+1,M.LEAVES),t.setBlock(e,u,i-1,M.LEAVES);for(let d=-1;d<=1;d++)for(let m=-1;m<=1;m++)(d!==0||m!==0)&&t.setBlock(e+d,u+1,i+m,M.LEAVES);t.setBlock(e,u+1,i,M.LEAVES),t.setBlock(e,u+2,i,M.LEAVES),t.setBlock(e+1,u+2,i,M.LEAVES),t.setBlock(e-1,u+2,i,M.LEAVES),t.setBlock(e,u+2,i+1,M.LEAVES),t.setBlock(e,u+2,i-1,M.LEAVES)}}}let Tg=class{chunks=new Map;scene;material;modifiedBlocks=new Map;doorOrientations=new Map;chunkVersions=new Map;terrainGenerator;constructor(t){this.scene=t;const e=Ag(),n=new Ut({map:e,vertexColors:!0,roughness:.85,metalness:.05,alphaTest:.5,side:Fn});n.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("vec3 totalEmissiveRadiance = emissive;",`
        // 頂点カラーから松明光成分（最低輝度0.52を超える部分）を抽出し、自己発光として加算する
        vec3 torchLight = max(vec3(0.0), vColor - vec3(0.52));
        // 温かみのあるオレンジ色の自己発光を1.5倍で加算（夜間でも綺麗に光る）
        vec3 totalEmissiveRadiance = emissive + torchLight * 1.5;
        `)},this.material=n,this.terrainGenerator=new Cg}getChunkKey(t,e,n){return`${t},${e},${n}`}getChunk(t,e,n){return this.chunks.get(this.getChunkKey(t,e,n))}*getLoadedChunks(){yield*this.chunks.values()}getBlock(t,e,n){const i=Math.floor(t/ht.CHUNK_SIZE),s=Math.floor(e/ht.CHUNK_SIZE),o=Math.floor(n/ht.CHUNK_SIZE),r=this.getChunk(i,s,o);if(!r)return M.AIR;const l=(t%ht.CHUNK_SIZE+ht.CHUNK_SIZE)%ht.CHUNK_SIZE,c=(e%ht.CHUNK_SIZE+ht.CHUNK_SIZE)%ht.CHUNK_SIZE,h=(n%ht.CHUNK_SIZE+ht.CHUNK_SIZE)%ht.CHUNK_SIZE;return r.getBlock(l,c,h)}setBlock(t,e,n,i){const s=Math.floor(t/ht.CHUNK_SIZE),o=Math.floor(e/ht.CHUNK_SIZE),r=Math.floor(n/ht.CHUNK_SIZE),l=this.getChunkKey(s,o,r),c=ht.CHUNK_SIZE,h=(t%c+c)%c,u=(e%c+c)%c,d=(n%c+c)%c,m=h+u*c+d*c*c;let g=this.modifiedBlocks.get(l);g||(g=new Map,this.modifiedBlocks.set(l,g)),g.set(m,i);let f=this.getChunk(s,o,r);f||(f=new Rl(s,o,r),this.chunks.set(l,f)),f.setBlock(h,u,d,i),this.updateChunkMesh(s,o,r),h===0&&this.updateChunkMesh(s-1,o,r),h===ht.CHUNK_SIZE-1&&this.updateChunkMesh(s+1,o,r),u===0&&this.updateChunkMesh(s,o-1,r),u===ht.CHUNK_SIZE-1&&this.updateChunkMesh(s,o+1,r),d===0&&this.updateChunkMesh(s,o,r-1),d===ht.CHUNK_SIZE-1&&this.updateChunkMesh(s,o,r+1)}setDoorOrientation(t,e,n,i){this.doorOrientations.set(`${t},${e},${n}`,i)}getDoorOrientation(t,e,n){return this.doorOrientations.get(`${t},${e},${n}`)??"NS"}removeDoorOrientation(t,e,n){this.doorOrientations.delete(`${t},${e},${n}`)}updateChunkMesh(t,e,n){const i=this.getChunk(t,e,n);if(!i)return;const s=i.mesh,o=i.generateMesh(this,this.material);o&&!s?this.scene.add(o):!o&&s&&this.scene.remove(s)}generateWorldAround(t,e){const n=Math.floor(t/ht.CHUNK_SIZE),i=Math.floor(e/ht.CHUNK_SIZE),s=ht.RENDER_DISTANCE,o=new Set;for(let l=n-s;l<=n+s;l++)for(let c=i-s;c<=i+s;c++)for(let h=-1;h<=1;h++){const u=this.getChunkKey(l,h,c);if(o.add(u),!this.chunks.has(u)){const d=new Rl(l,h,c);this.generateChunkTerrain(d),this.chunks.set(u,d)}}for(const[l,c]of this.chunks.entries())o.has(l)||(c.mesh&&(this.scene.remove(c.mesh),c.mesh.geometry.dispose(),c.mesh=null),this.chunks.delete(l));for(let l=n-s;l<=n+s;l++)for(let c=i-s;c<=i+s;c++)for(let h=-1;h<=1;h++)this.updateChunkMesh(l,h,c);const r=document.getElementById("chunks-display");r&&(r.textContent=this.chunks.size.toString())}generateChunkTerrain(t){const e=this.getChunkKey(t.x,t.y,t.z);let n=this.chunkVersions.get(e);const i=6;Math.abs(t.x)<=i&&Math.abs(t.z)<=i&&(n=1,this.chunkVersions.set(e,1)),n===void 0&&(this.modifiedBlocks.has(e)?n=1:n=2,this.chunkVersions.set(e,n)),n===1?this.terrainGenerator.generateV1(t):this.terrainGenerator.generateV2(t);const s=this.modifiedBlocks.get(e);if(s){const o=ht.CHUNK_SIZE;for(const[r,l]of s.entries()){const c=r%o,h=Math.floor(r%(o*o)/o),u=Math.floor(r/(o*o));t.setBlock(c,h,u,l)}}}getChunkMeshes(){const t=[];for(const e of this.chunks.values())e.mesh&&t.push(e.mesh);return t}getChunksCount(){return this.chunks.size}getModifiedBlocksData(){const t={};for(const[i,s]of this.modifiedBlocks.entries()){if(s.size===0)continue;const o={};for(const[r,l]of s.entries())o[r.toString()]=l;t[i]=o}const e={};for(const[i,s]of this.doorOrientations.entries())e[i]=s;const n={};for(const[i,s]of this.chunkVersions.entries())n[i]=s;return{blocks:t,doorOrientations:e,chunkVersions:n}}setModifiedBlocksData(t){if(this.modifiedBlocks.clear(),this.doorOrientations.clear(),this.chunkVersions.clear(),!t)return;const e=t.blocks??t;for(const n of Object.keys(e)){const i=new Map,s=e[n];for(const o of Object.keys(s)){const r=parseInt(o,10),l=s[o];i.set(r,l)}this.modifiedBlocks.set(n,i)}if(t.doorOrientations)for(const[n,i]of Object.entries(t.doorOrientations))this.doorOrientations.set(n,i);if(t.chunkVersions)for(const[n,i]of Object.entries(t.chunkVersions))this.chunkVersions.set(n,i)}mergeModifiedBlocksData(t){const e=new Set;if(!t)return e;const n=t.blocks??t;for(const i of Object.keys(n)){if(i==="doorOrientations"||i==="chunkVersions"||i==="blocks")continue;let s=this.modifiedBlocks.get(i);s||(s=new Map,this.modifiedBlocks.set(i,s),e.add(i));const o=n[i];for(const r of Object.keys(o)){const l=parseInt(r,10),c=o[r];if(s.get(l)!==c){s.set(l,c),e.add(i);const u=i.split(","),d=parseInt(u[0],10),m=parseInt(u[1],10),g=parseInt(u[2],10),f=this.getChunk(d,m,g);if(f){const p=ht.CHUNK_SIZE,y=l%p,v=Math.floor(l%(p*p)/p),_=Math.floor(l/(p*p));f.setBlock(y,v,_,c)}}}}if(t.doorOrientations){for(const[i,s]of Object.entries(t.doorOrientations))if(this.doorOrientations.get(i)!==s){this.doorOrientations.set(i,s);const r=i.split(","),l=parseInt(r[0],10),c=parseInt(r[1],10),h=parseInt(r[2],10),u=Math.floor(l/ht.CHUNK_SIZE),d=Math.floor(c/ht.CHUNK_SIZE),m=Math.floor(h/ht.CHUNK_SIZE);e.add(this.getChunkKey(u,d,m))}}if(t.chunkVersions)for(const[i,s]of Object.entries(t.chunkVersions))this.chunkVersions.get(i)!==s&&(this.chunkVersions.set(i,s),e.add(i));return e}clearAndRebuild(t,e){for(const n of this.chunks.values())n.mesh&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh=null);this.chunks.clear(),this.generateWorldAround(t,e)}};class Rg{keys={};justPressedKeys={};mouseDelta={x:0,y:0};isLocked=!1;isLeftClickDown=!1;isRightClickDown=!1;lastModalCloseTime=0;isActionActive(t){const e=Ae.getConfig();switch(t){case"forward":return!!this.keys[e.keyForward];case"backward":return!!this.keys[e.keyBackward];case"left":return!!this.keys[e.keyLeft];case"right":return!!this.keys[e.keyRight];case"jump":return!!this.keys[e.keyJump];default:return!1}}targetElement;constructor(t){this.targetElement=t,window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),document.addEventListener("mousemove",this.onMouseMove.bind(this)),document.addEventListener("pointerlockchange",this.onPointerLockChange.bind(this)),window.addEventListener("mousedown",e=>{this.isLocked&&(e.button===0&&(this.isLeftClickDown=!0),e.button===2&&(this.isRightClickDown=!0))}),window.addEventListener("mouseup",e=>{e.button===0&&(this.isLeftClickDown=!1),e.button===2&&(this.isRightClickDown=!1)})}requestLock(){this.isLocked||this.targetElement.requestPointerLock()}onKeyDown(t){const e=t.code;e==="Tab"&&t.preventDefault();const n=Ae.getConfig(),i=[n.keyForward,n.keyBackward,n.keyLeft,n.keyRight,n.keyJump,n.keyPlaceBlock,n.keyBreakBlock,n.keyOpenMap,n.keyOpenInventory,n.keyOpenCrafting,n.keyOpenManual,n.keyRegisterHome];this.isLocked&&(e==="F5"||e==="KeyQ"||e==="KeyE"||e==="KeyC"||e==="KeyH"||i.includes(e))&&t.preventDefault(),this.keys[e]||(this.justPressedKeys[e]=!0),this.keys[e]=!0}onKeyUp(t){const e=t.code;this.keys[e]=!1,this.justPressedKeys[e]=!1}onMouseMove(t){this.isLocked&&(this.mouseDelta.x+=t.movementX,this.mouseDelta.y+=t.movementY)}onPointerLockChange(){const t=document.getElementById("menu-overlay"),e=document.getElementById("crosshair"),n=document.getElementById("inventory-modal");if(document.pointerLockElement===this.targetElement)this.isLocked=!0,t&&(t.style.display="none"),e&&(e.style.display="block");else{this.isLocked=!1,this.clearKeys();const i=n&&n.style.display==="flex",s=document.getElementById("crafting-modal"),o=s&&s.style.display==="flex",r=document.getElementById("manual-modal"),l=r&&r.style.display==="flex",c=document.getElementById("world-map-modal"),h=c&&c.style.display==="flex";!i&&!o&&!l&&!h&&performance.now()-this.lastModalCloseTime>300&&t&&(t.style.display="flex",t.style.opacity="1"),e&&(e.style.display="none")}}clearKeys(){this.keys={},this.justPressedKeys={}}consumeJustPressed(t){return this.justPressedKeys[t]?(this.justPressedKeys[t]=!1,!0):!1}consumeMouseDelta(){const t={...this.mouseDelta};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}}class un{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new b);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new b);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new un);const n=this.elements,i=t.elements,s=e.elements,o=n[0],r=n[1],l=n[2],c=n[3],h=n[4],u=n[5],d=n[6],m=n[7],g=n[8],f=i[0],p=i[1],y=i[2],v=i[3],_=i[4],x=i[5],S=i[6],E=i[7],T=i[8];return s[0]=o*f+r*v+l*S,s[1]=o*p+r*_+l*E,s[2]=o*y+r*x+l*T,s[3]=c*f+h*v+u*S,s[4]=c*p+h*_+u*E,s[5]=c*y+h*x+u*T,s[6]=d*f+m*v+g*S,s[7]=d*p+m*_+g*E,s[8]=d*y+m*x+g*T,e}scale(t,e){e===void 0&&(e=new un);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new b);const n=3,i=4,s=[];let o,r;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+i*r]=this.elements[o+3*r];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const u=4;let d;do{if(o=c-l,s[o+i*o]===0){for(r=o+1;r<c;r++)if(s[o+i*r]!==0){h=u;do d=u-h,s[d+i*o]+=s[d+i*r];while(--h);break}}if(s[o+i*o]!==0)for(r=o+1;r<c;r++){const m=s[o+i*r]/s[o+i*o];h=u;do d=u-h,s[d+i*r]=d<=o?0:s[d+i*r]-s[d+i*o]*m;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new un);const e=3,n=6,i=Lg;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let r=3;const l=r;let c;const h=n;let u;do{if(s=l-r,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do u=h-c,i[u+n*s]+=i[u+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const d=i[s+n*o]/i[s+n*s];c=h;do u=h-c,i[u+n*o]=u<=s?0:i[u+n*o]-i[u+n*s]*d;while(--c)}}while(--r);s=2;do{o=s-1;do{const d=i[s+n*o]/i[s+n*s];c=n;do u=n-c,i[u+n*o]=i[u+n*o]-i[u+n*s]*d;while(--c)}while(o--)}while(--s);s=2;do{const d=1/i[s+n*s];c=n;do u=n-c,i[u+n*s]=i[u+n*s]*d;while(--c)}while(s--);s=2;do{o=2;do{if(u=i[e+o+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,u)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,r=n+n,l=i+i,c=e*o,h=e*r,u=e*l,d=n*r,m=n*l,g=i*l,f=s*o,p=s*r,y=s*l,v=this.elements;return v[3*0+0]=1-(d+g),v[3*0+1]=h-y,v[3*0+2]=u+p,v[3*1+0]=h+y,v[3*1+1]=1-(c+g),v[3*1+2]=m-f,v[3*2+0]=u-p,v[3*2+1]=m+f,v[3*2+2]=1-(c+d),this}transpose(t){t===void 0&&(t=new un);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Lg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,s=t.z,o=this.x,r=this.y,l=this.z;return e.x=r*s-l*i,e.y=l*n-o*s,e.z=o*i-r*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new b(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new b(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new un([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new b);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(r-i)*(r-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(r-i)*(r-i)}scale(t,e){e===void 0&&(e=new b);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new b),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new b),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new b),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Dg,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Ig;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Ll),Ll.almostEquals(t,e)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const Dg=new b,Ig=new b,Ll=new b;class je{constructor(t){t===void 0&&(t={}),this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,r=n;s.copy(t[0]),r&&r.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];r&&(r.vmult(c,Dl),c=Dl),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new je().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,r=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&r&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,r,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),r.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=Il,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,r,l,c,h,u);for(let d=0;d!==8;d++){const m=n[d];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Il,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,r,l,c,h,u);for(let d=0;d!==8;d++){const m=n[d];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,r=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(r,l),Math.min(c,h)),Math.min(u,d)),g=Math.min(Math.min(Math.max(r,l),Math.max(c,h)),Math.max(u,d));return!(g<0||m>g)}}const Dl=new b,Il=[new b,new b,new b,new b,new b,new b,new b,new b];class Pl{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Bc{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class ue{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new b),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Pg,i=Og;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new ue);const n=this.x,i=this.y,s=this.z,o=this.w,r=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*r+i*c-s*l,e.y=i*h+o*l+s*r-n*c,e.z=s*h+o*c+n*l-i*r,e.w=o*h-n*r-i*l-s*c,e}inverse(t){t===void 0&&(t=new ue);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new ue),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,s=t.z,o=this.x,r=this.y,l=this.z,c=this.w,h=c*n+r*s-l*i,u=c*i+l*n-o*s,d=c*s+o*i-r*n,m=-o*n-r*i-l*s;return e.x=h*c+m*-o+u*-l-d*-r,e.y=u*c+m*-r+d*-o-h*-l,e.z=d*c+m*-l+h*-r-u*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,r=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*r+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const u=o*o,d=r*r,m=l*l;n=Math.atan2(2*r*c-2*o*l,1-2*d-2*m),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*r*l,1-2*u-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),r=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*r+s*c*h,this.y=s*c*r-l*o*h,this.z=s*o*h+l*c*r,this.w=s*o*r-l*c*h):i==="YXZ"?(this.x=l*o*r+s*c*h,this.y=s*c*r-l*o*h,this.z=s*o*h-l*c*r,this.w=s*o*r+l*c*h):i==="ZXY"?(this.x=l*o*r-s*c*h,this.y=s*c*r+l*o*h,this.z=s*o*h+l*c*r,this.w=s*o*r-l*c*h):i==="ZYX"?(this.x=l*o*r-s*c*h,this.y=s*c*r+l*o*h,this.z=s*o*h-l*c*r,this.w=s*o*r+l*c*h):i==="YZX"?(this.x=l*o*r+s*c*h,this.y=s*c*r+l*o*h,this.z=s*o*h-l*c*r,this.w=s*o*r-l*c*h):i==="XZY"&&(this.x=l*o*r-s*c*h,this.y=s*c*r-l*o*h,this.z=s*o*h+l*c*r,this.w=s*o*r+l*c*h),this}clone(){return new ue(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new ue);const i=this.x,s=this.y,o=this.z,r=this.w;let l=t.x,c=t.y,h=t.z,u=t.w,d,m,g,f,p;return m=i*l+s*c+o*h+r*u,m<0&&(m=-m,l=-l,c=-c,h=-h,u=-u),1-m>1e-6?(d=Math.acos(m),g=Math.sin(d),f=Math.sin((1-e)*d)/g,p=Math.sin(e*d)/g):(f=1-e,p=e),n.x=f*i+p*l,n.y=f*s+p*c,n.z=f*o+p*h,n.w=f*r+p*u,n}integrate(t,e,n,i){i===void 0&&(i=new ue);const s=t.x*n.x,o=t.y*n.y,r=t.z*n.z,l=this.x,c=this.y,h=this.z,u=this.w,d=e*.5;return i.x+=d*(s*u+o*h-r*c),i.y+=d*(o*u+r*l-s*h),i.z+=d*(r*u+s*c-o*l),i.w+=d*(-s*l-o*c-r*h),i}}const Pg=new b,Og=new b,Ng={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class yt{constructor(t){t===void 0&&(t={}),this.id=yt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}yt.idCounter=0;yt.types=Ng;class Yt{constructor(t){t===void 0&&(t={}),this.position=new b,this.quaternion=new ue,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Yt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Yt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),n.vsub(t,i),e.conjugate(Ol),Ol.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new b),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new b),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Ol=new ue;class Ls extends yt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:yt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new b;for(let s=0;s!==t.length;s++){const o=t[s],r=o.length;for(let l=0;l!==r;l++){const c=(l+1)%r;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new b;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Ls.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new b,o=new b;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,r,l,c){const h=new b;let u=-1,d=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const f=h.dot(o);f>d&&(d=f,u=g)}const m=[];for(let g=0;g<n.faces[u].length;g++){const f=n.vertices[n.faces[u][g]],p=new b;p.copy(f),s.vmult(p,p),i.vadd(p,p),m.push(p)}u>=0&&this.clipFaceAgainstHull(o,t,e,m,r,l,c)}findSeparatingAxis(t,e,n,i,s,o,r,l){const c=new b,h=new b,u=new b,d=new b,m=new b,g=new b;let f=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let y=0;y!==p.uniqueAxes.length;y++){n.vmult(p.uniqueAxes[y],c);const v=p.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<f&&(f=v,o.copy(c))}else{const y=r?r.length:p.faces.length;for(let v=0;v<y;v++){const _=r?r[v]:v;c.copy(p.faceNormals[_]),n.vmult(c,c);const x=p.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<f&&(f=x,o.copy(c))}}if(t.uniqueAxes)for(let y=0;y!==t.uniqueAxes.length;y++){s.vmult(t.uniqueAxes[y],h);const v=p.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<f&&(f=v,o.copy(h))}else{const y=l?l.length:t.faces.length;for(let v=0;v<y;v++){const _=l?l[v]:v;h.copy(t.faceNormals[_]),s.vmult(h,h);const x=p.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<f&&(f=x,o.copy(h))}}for(let y=0;y!==p.uniqueEdges.length;y++){n.vmult(p.uniqueEdges[y],d);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],m),d.cross(m,g),!g.almostZero()){g.normalize();const _=p.testSepAxis(g,t,e,n,i,s);if(_===!1)return!1;_<f&&(f=_,o.copy(g))}}return i.vsub(e,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const r=this;Ls.project(r,t,n,i,vr),Ls.project(e,t,s,o,yr);const l=vr[0],c=vr[1],h=yr[0],u=yr[1];if(l<u||h<c)return!1;const d=l-u,m=h-c;return d<m?d:m}calculateLocalInertia(t,e){const n=new b,i=new b;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,r=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*r*2*r),e.y=1/12*t*(2*s*2*s+2*r*2*r),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,r){const l=new b,c=new b,h=new b,u=new b,d=new b,m=new b,g=new b,f=new b,p=this,y=[],v=i,_=y;let x=-1,S=Number.MAX_VALUE;for(let I=0;I<p.faces.length;I++){l.copy(p.faceNormals[I]),n.vmult(l,l);const z=l.dot(t);z<S&&(S=z,x=I)}if(x<0)return;const E=p.faces[x];E.connectedFaces=[];for(let I=0;I<p.faces.length;I++)for(let z=0;z<p.faces[I].length;z++)E.indexOf(p.faces[I][z])!==-1&&I!==x&&E.connectedFaces.indexOf(I)===-1&&E.connectedFaces.push(I);const T=E.length;for(let I=0;I<T;I++){const z=p.vertices[E[I]],U=p.vertices[E[(I+1)%T]];z.vsub(U,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),u.copy(this.faceNormals[x]),n.vmult(u,u),e.vadd(u,u),h.cross(u,d),d.negate(d),m.copy(z),n.vmult(m,m),e.vadd(m,m);const D=E.connectedFaces[I];g.copy(this.faceNormals[D]);const P=this.getPlaneConstantOfFace(D);f.copy(g),n.vmult(f,f);const O=P-f.dot(e);for(this.clipFaceAgainstPlane(v,_,f,O);v.length;)v.shift();for(;_.length;)v.push(_.shift())}g.copy(this.faceNormals[x]);const w=this.getPlaneConstantOfFace(x);f.copy(g),n.vmult(f,f);const C=w-f.dot(e);for(let I=0;I<v.length;I++){let z=f.dot(v[I])+C;if(z<=s&&(console.log(`clamped: depth=${z} to minDist=${s}`),z=s),z<=o){const U=v[I];if(z<=1e-6){const D={point:U,normal:f,depth:z};r.push(D)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const r=t.length;if(r<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<r;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const u=new b;u.copy(c),e.push(u)}else{const u=new b;l.lerp(c,s/(s-o),u),e.push(u)}else if(o<0){const u=new b;l.lerp(c,s/(s-o),u),e.push(u),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new b);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,r,l,c,h,u,d=new b;for(let m=0;m<s.length;m++){d.copy(s[m]),e.vmult(d,d),t.vadd(d,d);const g=d;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(r===void 0||g.y<r)&&(r=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(u===void 0||g.z>u)&&(u=g.z)}n.set(o,r,l),i.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new b);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new b;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let r=i[o];const l=e[n[o][0]],c=new b;t.vsub(l,c);const h=r.dot(c),u=new b;s.vsub(l,u);const d=r.dot(u);if(h<0&&d>0||h>0&&d<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,r=Bg;let l=0,c=0;const h=kg,u=t.vertices;h.setZero(),Yt.vectorToLocalFrame(n,i,e,r),Yt.pointToLocalFrame(n,i,h,h);const d=h.dot(r);c=l=u[0].dot(r);for(let m=1;m<o;m++){const g=u[m].dot(r);g>l&&(l=g),g<c&&(c=g)}if(c-=d,l-=d,c>l){const m=c;c=l,l=m}s[0]=l,s[1]=c}}const vr=[],yr=[];new b;const Bg=new b,kg=new b;class Ci extends yt{constructor(t){super({type:yt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=b,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],r=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Ls({vertices:s,faces:o,axes:r});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new b),Ci.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)jn.set(s[o][0],s[o][1],s[o][2]),e.vmult(jn,jn),t.vadd(jn,jn),n(jn.x,jn.y,jn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;yn[0].set(s.x,s.y,s.z),yn[1].set(-s.x,s.y,s.z),yn[2].set(-s.x,-s.y,s.z),yn[3].set(-s.x,-s.y,-s.z),yn[4].set(s.x,-s.y,-s.z),yn[5].set(s.x,s.y,-s.z),yn[6].set(-s.x,s.y,-s.z),yn[7].set(s.x,-s.y,s.z);const o=yn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let r=1;r<8;r++){const l=yn[r];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),u>i.z&&(i.z=u),c<n.x&&(n.x=c),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const jn=new b,yn=[new b,new b,new b,new b,new b,new b,new b,new b],sa={DYNAMIC:1,STATIC:2,KINEMATIC:4},oa={AWAKE:0,SLEEPY:1,SLEEPING:2};class gt extends Bc{constructor(t){t===void 0&&(t={}),super(),this.id=gt.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new b,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new b,this.force=new b;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?gt.STATIC:gt.DYNAMIC,typeof t.type==typeof gt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=gt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new ue,this.initQuaternion=new ue,this.previousQuaternion=new ue,this.interpolatedQuaternion=new ue,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new b,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new un,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new un,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new b(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new b(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new je,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=gt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===gt.SLEEPING&&this.dispatchEvent(gt.wakeupEvent)}sleep(){this.sleepState=gt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===gt.AWAKE&&n<i?(this.sleepState=gt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(gt.sleepyEvent)):e===gt.SLEEPY&&n>i?this.wakeUp():e===gt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(gt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===gt.SLEEPING||this.type===gt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new b),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new b),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new b,s=new ue;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const r=e[s].length(),l=o.boundingSphereRadius;r+l>i&&(i=r+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=zg,o=Fg,r=this.quaternion,l=this.aabb,c=Ug;for(let h=0;h!==i;h++){const u=t[h];r.vmult(e[h],s),s.vadd(this.position,s),r.mult(n[h],o),u.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Gg,i=Vg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new b),this.type!==gt.DYNAMIC)return;this.sleepState===gt.SLEEPING&&this.wakeUp();const n=Hg;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new b),this.type!==gt.DYNAMIC)return;const n=Wg,i=qg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===gt.DYNAMIC&&(this.sleepState===gt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new b),this.type!==gt.DYNAMIC)return;this.sleepState===gt.SLEEPING&&this.wakeUp();const n=e,i=Xg;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Kg;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new b),this.type!==gt.DYNAMIC)return;const n=Yg,i=jg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=$g;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ci.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new b;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===gt.DYNAMIC||this.type===gt.KINEMATIC)||this.sleepState===gt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,r=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,m=h*t;i.x+=r.x*m*d.x,i.y+=r.y*m*d.y,i.z+=r.z*m*d.z;const g=u.elements,f=this.angularFactor,p=l.x*f.x,y=l.y*f.y,v=l.z*f.z;s.x+=t*(g[0]*p+g[1]*y+g[2]*v),s.y+=t*(g[3]*p+g[4]*y+g[5]*v),s.z+=t*(g[6]*p+g[7]*y+g[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}gt.idCounter=0;gt.COLLIDE_EVENT_NAME="collide";gt.DYNAMIC=sa.DYNAMIC;gt.STATIC=sa.STATIC;gt.KINEMATIC=sa.KINEMATIC;gt.AWAKE=oa.AWAKE;gt.SLEEPY=oa.SLEEPY;gt.SLEEPING=oa.SLEEPING;gt.wakeupEvent={type:"wakeup"};gt.sleepyEvent={type:"sleepy"};gt.sleepEvent={type:"sleep"};const zg=new b,Fg=new ue,Ug=new je,Gg=new un,Vg=new un;new un;const Hg=new b,Wg=new b,qg=new b,Xg=new b,Kg=new b,Yg=new b,jg=new b,$g=new b;class kc{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&gt.STATIC||t.sleepState===gt.SLEEPING)&&(e.type&gt.STATIC||e.sleepState===gt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Zg;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Jg,i=Qg,s=t0,o=t.length;for(let r=0;r!==o;r++)i[r]=t[r],s[r]=e[r];t.length=0,e.length=0;for(let r=0;r!==o;r++){const l=i[r].id,c=s[r].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=r,n.keys.push(h)}for(let r=0;r!==n.keys.length;r++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new b;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Zg=new b;new b;new ue;new b;const Jg={keys:[]},Qg=[],t0=[];new b;new b;new b;class e0 extends kc{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,r;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],r=i[c],this.needBroadphaseCollision(o,r)&&this.intersectionTest(o,r,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class bo{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,r){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=r}}let zc,Fc,Uc,Gc,Vc,Hc,Wc;const ra={CLOSEST:1,ANY:2,ALL:4};zc=yt.types.SPHERE;Fc=yt.types.PLANE;Uc=yt.types.BOX;Gc=yt.types.CYLINDER;Vc=yt.types.CONVEXPOLYHEDRON;Hc=yt.types.HEIGHTFIELD;Wc=yt.types.TRIMESH;class de{get[zc](){return this._intersectSphere}get[Fc](){return this._intersectPlane}get[Uc](){return this._intersectBox}get[Gc](){return this._intersectConvex}get[Vc](){return this._intersectConvex}get[Hc](){return this._intersectHeightfield}get[Wc](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new b),e===void 0&&(e=new b),this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=de.ANY,this.result=new bo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||de.ANY,this.result=e.result||new bo,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Nl),_r.length=0,t.broadphase.aabbQuery(t,Nl,_r),this.intersectBodies(_r),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=n0,s=i0;for(let o=0,r=t.shapes.length;o<r;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(v0(s,this.direction,n)>t.boundingSphereRadius)return;const r=this[t.type];r&&r.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,r=this.to,l=this.direction,c=new b(0,0,1);e.vmult(c,c);const h=new b;o.vsub(n,h);const u=h.dot(c);r.vsub(n,h);const d=h.dot(c);if(u*d>0||o.distanceTo(r)<u)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const g=new b,f=new b,p=new b;o.vsub(n,g);const y=-c.dot(g)/m;l.scale(y,f),o.vadd(f,p),this.reportIntersection(c,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=s0;o.from.copy(this.from),o.to.copy(this.to),Yt.pointToLocalFrame(n,e,o.from,o.from),Yt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const r=o0;let l,c,h,u;l=c=0,h=u=t.data.length-1;const d=new je;o.getAABB(d),t.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,r,!0),l=Math.max(l,r[0]),c=Math.max(c,r[1]),t.getIndexOfPosition(d.upperBound.x,d.upperBound.y,r,!0),h=Math.min(h,r[0]+1),u=Math.min(u,r[1]+1);for(let m=l;m<h;m++)for(let g=c;g<u;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,d),!!d.overlapsRay(o)){if(t.getConvexTrianglePillar(m,g,!1),Yt.pointToWorldFrame(n,e,t.pillarOffset,ho),this._intersectConvex(t.pillarConvex,e,ho,i,s,Bl),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Yt.pointToWorldFrame(n,e,t.pillarOffset,ho),this._intersectConvex(t.pillarConvex,e,ho,i,s,Bl)}}}_intersectSphere(t,e,n,i,s){const o=this.from,r=this.to,l=t.radius,c=(r.x-o.x)**2+(r.y-o.y)**2+(r.z-o.z)**2,h=2*((r.x-o.x)*(o.x-n.x)+(r.y-o.y)*(o.y-n.y)+(r.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,d=h**2-4*c*u,m=r0,g=a0;if(!(d<0))if(d===0)o.lerp(r,d,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const f=(-h-Math.sqrt(d))/(2*c),p=(-h+Math.sqrt(d))/(2*c);if(f>=0&&f<=1&&(o.lerp(r,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(r,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const r=l0,l=kl,c=o&&o.faceList||null,h=t.faces,u=t.vertices,d=t.faceNormals,m=this.direction,g=this.from,f=this.to,p=g.distanceTo(f),y=c?c.length:h.length,v=this.result;for(let _=0;!v.shouldStop&&_<y;_++){const x=c?c[_]:_,S=h[x],E=d[x],T=e,w=n;l.copy(u[S[0]]),T.vmult(l,l),l.vadd(w,l),l.vsub(g,l),T.vmult(E,r);const C=m.dot(r);if(Math.abs(C)<this.precision)continue;const I=r.dot(l)/C;if(!(I<0)){m.scale(I,ze),ze.vadd(g,ze),cn.copy(u[S[0]]),T.vmult(cn,cn),w.vadd(cn,cn);for(let z=1;!v.shouldStop&&z<S.length-1;z++){_n.copy(u[S[z]]),xn.copy(u[S[z+1]]),T.vmult(_n,_n),T.vmult(xn,xn),w.vadd(_n,_n),w.vadd(xn,xn);const U=ze.distanceTo(g);!(de.pointInTriangle(ze,cn,_n,xn)||de.pointInTriangle(ze,_n,cn,xn))||U>p||this.reportIntersection(r,ze,s,i,x)}}}}_intersectTrimesh(t,e,n,i,s,o){const r=c0,l=m0,c=g0,h=kl,u=h0,d=d0,m=u0,g=p0,f=f0,p=t.indices;t.vertices;const y=this.from,v=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(e),Yt.vectorToLocalFrame(n,e,_,u),Yt.pointToLocalFrame(n,e,y,d),Yt.pointToLocalFrame(n,e,v,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,m.vsub(d,u),u.normalize();const x=d.distanceSquared(m);t.tree.rayQuery(this,c,l);for(let S=0,E=l.length;!this.result.shouldStop&&S!==E;S++){const T=l[S];t.getNormal(T,r),t.getVertex(p[T*3],cn),cn.vsub(d,h);const w=u.dot(r),C=r.dot(h)/w;if(C<0)continue;u.scale(C,ze),ze.vadd(d,ze),t.getVertex(p[T*3+1],_n),t.getVertex(p[T*3+2],xn);const I=ze.distanceSquared(d);!(de.pointInTriangle(ze,_n,cn,xn)||de.pointInTriangle(ze,cn,_n,xn))||I>x||(Yt.vectorToWorldFrame(e,r,f),Yt.pointToWorldFrame(n,e,ze,g),this.reportIntersection(f,g,s,i,T))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,r=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case de.ALL:this.hasHit=!0,c.set(o,r,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case de.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,r,t,e,n,i,l));break;case de.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,r,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,vi),n.vsub(e,Ms),t.vsub(e,xr);const s=vi.dot(vi),o=vi.dot(Ms),r=vi.dot(xr),l=Ms.dot(Ms),c=Ms.dot(xr);let h,u;return(h=l*r-o*c)>=0&&(u=s*c-o*r)>=0&&h+u<s*l-o*o}}de.CLOSEST=ra.CLOSEST;de.ANY=ra.ANY;de.ALL=ra.ALL;const Nl=new je,_r=[],Ms=new b,xr=new b,n0=new b,i0=new ue,ze=new b,cn=new b,_n=new b,xn=new b;new b;new bo;const Bl={faceList:[0]},ho=new b,s0=new de,o0=[],r0=new b,a0=new b,l0=new b;new b;new b;const kl=new b,c0=new b,h0=new b,d0=new b,u0=new b,f0=new b,p0=new b;new je;const m0=[],g0=new Yt,vi=new b,uo=new b;function v0(a,t,e){e.vsub(a,vi);const n=vi.dot(t);return t.scale(n,uo),uo.vadd(a,uo),e.distanceTo(uo)}class Zi extends kc{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const o=t.boundingRadius,r=e.boundingRadius,l=i+o;return s-r<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,o=this.axisIndex;let r,l;for(this.dirty&&(this.sortList(),this.dirty=!1),r=0;r!==s;r++){const c=i[r];for(l=r+1;l<s;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!Zi.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Zi.insertionSortX(t):e===1?Zi.insertionSortY(t):e===2&&Zi.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0;const r=this.axisList,l=r.length,c=1/l;for(let m=0;m!==l;m++){const g=r[m],f=g.position.x;t+=f,e+=f*f;const p=g.position.y;n+=p,i+=p*p;const y=g.position.z;s+=y,o+=y*y}const h=e-t*t*c,u=i-n*n*c,d=o-s*s*c;h>u?h>d?this.axisIndex=0:this.axisIndex=2:u>d?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let r=0;r<o.length;r++){const l=o[r];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class y0{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class zl{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Us{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Us.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new zl,this.jacobianElementB=new zl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,r=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,r)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,r=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,r)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,r=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Fl),r.scale(h,Ul),n.invInertiaWorldSolve.vmult(o,Gl),i.invInertiaWorldSolve.vmult(l,Vl),t.multiplyVectors(Fl,Gl)+e.multiplyVectors(Ul,Vl)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,r=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return r.vmult(t.rotational,fo),c+=fo.dot(t.rotational),l.vmult(e.rotational,fo),c+=fo.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=_0;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Us.idCounter=0;const Fl=new b,Ul=new b,Gl=new b,Vl=new b,fo=new b,_0=new b;class x0 extends Us{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,r=this.rj,l=M0,c=w0,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=b0,f=this.jacobianElementA,p=this.jacobianElementB,y=this.ni;o.cross(y,l),r.cross(y,c),y.negate(f.spatial),l.negate(f.rotational),p.spatial.copy(y),p.rotational.copy(c),g.copy(s.position),g.vadd(r,g),g.vsub(i.position,g),g.vsub(o,g);const v=y.dot(g),_=this.restitution+1,x=_*d.dot(y)-_*h.dot(y)+m.dot(c)-u.dot(l),S=this.computeGiMf();return-v*e-x*n-t*S}getImpactVelocityAlongNormal(){const t=S0,e=E0,n=A0,i=C0,s=T0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const M0=new b,w0=new b,b0=new b,S0=new b,E0=new b,A0=new b,C0=new b,T0=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Hl extends Us{constructor(t,e,n){super(t,e,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=R0,o=L0,r=this.t;n.cross(r,s),i.cross(r,o);const l=this.jacobianElementA,c=this.jacobianElementB;r.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(r),c.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*e-t*u}}const R0=new b,L0=new b;class os{constructor(t,e,n){n=y0.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=os.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}os.idCounter=0;class rs{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=rs.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}rs.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new de;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class D0 extends yt{constructor(t){if(super({type:yt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new b);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let r=0;r<o.length;r++){const l=o[r];n[l]=t[l]-s,i[l]=t[l]+s}}}new b;new b;new b;new b;new b;new b;new b;new b;new b;class I0 extends yt{constructor(){super({type:yt.types.PLANE}),this.worldNormal=new b,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new b),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Pn.set(0,0,1),e.vmult(Pn,Pn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Pn.x===1?i.x=t.x:Pn.x===-1&&(n.x=t.x),Pn.y===1?i.y=t.y:Pn.y===-1&&(n.y=t.y),Pn.z===1?i.z=t.z:Pn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Pn=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new je;new b;new je;new b;new b;new b;new b;new b;new b;new b;new je;new b;new Yt;new je;class P0{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class O0 extends P0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,r=o.length,l=e.bodies,c=l.length,h=t;let u,d,m,g,f,p;if(r!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const y=B0,v=k0,_=N0;y.length=r,v.length=r,_.length=r;for(let x=0;x!==r;x++){const S=o[x];_[x]=0,v[x]=S.computeB(h),y[x]=1/S.computeC()}if(r!==0){for(let E=0;E!==c;E++){const T=l[E],w=T.vlambda,C=T.wlambda;w.set(0,0,0),C.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let E=0;E!==r;E++){const T=o[E];u=v[E],d=y[E],p=_[E],f=T.computeGWlambda(),m=d*(u-f-T.eps*p),p+m<T.minForce?m=T.minForce-p:p+m>T.maxForce&&(m=T.maxForce-p),_[E]+=m,g+=m>0?m:-m,T.addToWlambda(m)}if(g*g<s)break}for(let E=0;E!==c;E++){const T=l[E],w=T.velocity,C=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),w.vadd(T.vlambda,w),T.wlambda.vmul(T.angularFactor,T.wlambda),C.vadd(T.wlambda,C)}let x=o.length;const S=1/h;for(;x--;)o[x].multiplier=_[x]*S}return n}}const N0=[],B0=[],k0=[];class z0{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class F0 extends z0{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const ee={sphereSphere:yt.types.SPHERE,spherePlane:yt.types.SPHERE|yt.types.PLANE,boxBox:yt.types.BOX|yt.types.BOX,sphereBox:yt.types.SPHERE|yt.types.BOX,planeBox:yt.types.PLANE|yt.types.BOX,convexConvex:yt.types.CONVEXPOLYHEDRON,sphereConvex:yt.types.SPHERE|yt.types.CONVEXPOLYHEDRON,planeConvex:yt.types.PLANE|yt.types.CONVEXPOLYHEDRON,boxConvex:yt.types.BOX|yt.types.CONVEXPOLYHEDRON,sphereHeightfield:yt.types.SPHERE|yt.types.HEIGHTFIELD,boxHeightfield:yt.types.BOX|yt.types.HEIGHTFIELD,convexHeightfield:yt.types.CONVEXPOLYHEDRON|yt.types.HEIGHTFIELD,sphereParticle:yt.types.PARTICLE|yt.types.SPHERE,planeParticle:yt.types.PLANE|yt.types.PARTICLE,boxParticle:yt.types.BOX|yt.types.PARTICLE,convexParticle:yt.types.PARTICLE|yt.types.CONVEXPOLYHEDRON,cylinderCylinder:yt.types.CYLINDER,sphereCylinder:yt.types.SPHERE|yt.types.CYLINDER,planeCylinder:yt.types.PLANE|yt.types.CYLINDER,boxCylinder:yt.types.BOX|yt.types.CYLINDER,convexCylinder:yt.types.CONVEXPOLYHEDRON|yt.types.CYLINDER,heightfieldCylinder:yt.types.HEIGHTFIELD|yt.types.CYLINDER,particleCylinder:yt.types.PARTICLE|yt.types.CYLINDER,sphereTrimesh:yt.types.SPHERE|yt.types.TRIMESH,planeTrimesh:yt.types.PLANE|yt.types.TRIMESH};class U0{get[ee.sphereSphere](){return this.sphereSphere}get[ee.spherePlane](){return this.spherePlane}get[ee.boxBox](){return this.boxBox}get[ee.sphereBox](){return this.sphereBox}get[ee.planeBox](){return this.planeBox}get[ee.convexConvex](){return this.convexConvex}get[ee.sphereConvex](){return this.sphereConvex}get[ee.planeConvex](){return this.planeConvex}get[ee.boxConvex](){return this.boxConvex}get[ee.sphereHeightfield](){return this.sphereHeightfield}get[ee.boxHeightfield](){return this.boxHeightfield}get[ee.convexHeightfield](){return this.convexHeightfield}get[ee.sphereParticle](){return this.sphereParticle}get[ee.planeParticle](){return this.planeParticle}get[ee.boxParticle](){return this.boxParticle}get[ee.convexParticle](){return this.convexParticle}get[ee.cylinderCylinder](){return this.convexConvex}get[ee.sphereCylinder](){return this.sphereConvex}get[ee.planeCylinder](){return this.planeConvex}get[ee.boxCylinder](){return this.boxConvex}get[ee.convexCylinder](){return this.convexConvex}get[ee.heightfieldCylinder](){return this.heightfieldCylinder}get[ee.particleCylinder](){return this.particleCylinder}get[ee.sphereTrimesh](){return this.sphereTrimesh}get[ee.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new F0,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let r;this.contactPointPool.length?(r=this.contactPointPool.pop(),r.bi=t,r.bj=e):r=new x0(t,e),r.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;r.restitution=l.restitution,r.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(r.restitution=c.restitution*h.restitution),r.si=s||n,r.sj=o||i,r}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,r=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*(r.frictionGravity||r.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,f=g.length?g.pop():new Hl(n,i,d*m),p=g.length?g.pop():new Hl(n,i,d*m);return f.bi=p.bi=n,f.bj=p.bj=i,f.minForce=p.minForce=-d*m,f.maxForce=p.maxForce=d*m,f.ri.copy(t.ri),f.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(f.t,p.t),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,r.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,r.dt),f.enabled=p.enabled=t.enabled,e.push(f,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];hi.setZero(),Xi.setZero(),Ki.setZero();const s=e.bi;e.bj;for(let r=0;r!==t;r++)e=this.result[this.result.length-1-r],e.bi!==s?(hi.vadd(e.ni,hi),Xi.vadd(e.ri,Xi),Ki.vadd(e.rj,Ki)):(hi.vsub(e.ni,hi),Xi.vadd(e.rj,Xi),Ki.vadd(e.ri,Ki));const o=1/t;Xi.scale(o,n.ri),Ki.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),hi.normalize(),hi.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,r){this.contactPointPool=s,this.frictionEquationPool=r,this.result=i,this.frictionResult=o;const l=H0,c=W0,h=G0,u=V0;for(let d=0,m=t.length;d!==m;d++){const g=t[d],f=e[d];let p=null;g.material&&f.material&&(p=n.getContactMaterial(g.material,f.material)||null);const y=g.type&gt.KINEMATIC&&f.type&gt.STATIC||g.type&gt.STATIC&&f.type&gt.KINEMATIC||g.type&gt.KINEMATIC&&f.type&gt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const _=g.shapes[v];for(let x=0;x<f.shapes.length;x++){f.quaternion.mult(f.shapeOrientations[x],c),f.quaternion.vmult(f.shapeOffsets[x],u),u.vadd(f.position,u);const S=f.shapes[x];if(!(_.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(u)>_.boundingSphereRadius+S.boundingSphereRadius)continue;let E=null;_.material&&S.material&&(E=n.getContactMaterial(_.material,S.material)||null),this.currentContactMaterial=E||p||n.defaultContactMaterial;const T=_.type|S.type,w=this[T];if(w){let C=!1;_.type<S.type?C=w.call(this,_,S,h,u,l,c,g,f,_,S,y):C=w.call(this,S,_,u,h,c,l,f,g,_,S,y),C&&y&&(n.shapeOverlapKeeper.set(_.id,S.id),n.bodyOverlapKeeper.set(g.id,f.id))}}}}}sphereSphere(t,e,n,i,s,o,r,l,c,h,u){if(u)return n.distanceSquared(i)<(t.radius+e.radius)**2;const d=this.createContactEquation(r,l,t,e,c,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(t.radius,d.ri),d.rj.scale(-e.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(r.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(t,e,n,i,s,o,r,l,c,h,u){const d=this.createContactEquation(r,l,t,e,c,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(t.radius,d.ri),n.vsub(i,po),d.ni.scale(d.ni.dot(po),Wl),po.vsub(Wl,d.rj),-po.dot(d.ni)<=t.radius){if(u)return!0;const m=d.ri,g=d.rj;m.vadd(n,m),m.vsub(r.position,m),g.vadd(i,g),g.vsub(l.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(t,e,n,i,s,o,r,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,r,l,t,e,u)}sphereBox(t,e,n,i,s,o,r,l,c,h,u){const d=this.v3pool,m=gv;n.vsub(i,mo),e.getSideNormals(m,o);const g=t.radius;let f=!1;const p=yv,y=_v,v=xv;let _=null,x=0,S=0,E=0,T=null;for(let N=0,K=m.length;N!==K&&f===!1;N++){const k=fv;k.copy(m[N]);const q=k.length();k.normalize();const Y=mo.dot(k);if(Y<q+g&&Y>0){const et=pv,B=mv;et.copy(m[(N+1)%3]),B.copy(m[(N+2)%3]);const tt=et.length(),nt=B.length();et.normalize(),B.normalize();const V=mo.dot(et),lt=mo.dot(B);if(V<tt&&V>-tt&&lt<nt&&lt>-nt){const ct=Math.abs(Y-q-g);if((T===null||ct<T)&&(T=ct,S=V,E=lt,_=q,p.copy(k),y.copy(et),v.copy(B),x++,u))return!0}}}if(x){f=!0;const N=this.createContactEquation(r,l,t,e,c,h);p.scale(-g,N.ri),N.ni.copy(p),N.ni.negate(N.ni),p.scale(_,p),y.scale(S,y),p.vadd(y,p),v.scale(E,v),p.vadd(v,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(r.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let w=d.get();const C=vv;for(let N=0;N!==2&&!f;N++)for(let K=0;K!==2&&!f;K++)for(let k=0;k!==2&&!f;k++)if(w.set(0,0,0),N?w.vadd(m[0],w):w.vsub(m[0],w),K?w.vadd(m[1],w):w.vsub(m[1],w),k?w.vadd(m[2],w):w.vsub(m[2],w),i.vadd(w,C),C.vsub(n,C),C.lengthSquared()<g*g){if(u)return!0;f=!0;const q=this.createContactEquation(r,l,t,e,c,h);q.ri.copy(C),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(g,q.ri),q.rj.copy(w),q.ri.vadd(n,q.ri),q.ri.vsub(r.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}d.release(w),w=null;const I=d.get(),z=d.get(),U=d.get(),D=d.get(),P=d.get(),O=m.length;for(let N=0;N!==O&&!f;N++)for(let K=0;K!==O&&!f;K++)if(N%3!==K%3){m[K].cross(m[N],I),I.normalize(),m[N].vadd(m[K],z),U.copy(n),U.vsub(z,U),U.vsub(i,U);const k=U.dot(I);I.scale(k,D);let q=0;for(;q===N%3||q===K%3;)q++;P.copy(n),P.vsub(D,P),P.vsub(z,P),P.vsub(i,P);const Y=Math.abs(k),et=P.length();if(Y<m[q].length()&&et<g){if(u)return!0;f=!0;const B=this.createContactEquation(r,l,t,e,c,h);z.vadd(D,B.rj),B.rj.copy(B.rj),P.negate(B.ni),B.ni.normalize(),B.ri.copy(B.rj),B.ri.vadd(i,B.ri),B.ri.vsub(n,B.ri),B.ri.normalize(),B.ri.scale(g,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(r.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}d.release(I,z,U,D,P)}planeBox(t,e,n,i,s,o,r,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,r,l,t,e,u)}convexConvex(t,e,n,i,s,o,r,l,c,h,u,d,m){const g=Nv;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,d,m)){const f=[],p=Bv;t.clipAgainstHull(n,s,e,i,o,g,-100,100,f);let y=0;for(let v=0;v!==f.length;v++){if(u)return!0;const _=this.createContactEquation(r,l,t,e,c,h),x=_.ri,S=_.rj;g.negate(_.ni),f[v].normal.negate(p),p.scale(f[v].depth,p),f[v].point.vadd(p,x),S.copy(f[v].point),x.vsub(n,x),S.vsub(i,S),x.vadd(n,x),x.vsub(r.position,x),S.vadd(i,S),S.vsub(l.position,S),this.result.push(_),y++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&y&&this.createFrictionFromAverage(y)}}sphereConvex(t,e,n,i,s,o,r,l,c,h,u){const d=this.v3pool;n.vsub(i,Mv);const m=e.faceNormals,g=e.faces,f=e.vertices,p=t.radius;let y=!1;for(let v=0;v!==f.length;v++){const _=f[v],x=Ev;o.vmult(_,x),i.vadd(x,x);const S=Sv;if(x.vsub(n,S),S.lengthSquared()<p*p){if(u)return!0;y=!0;const E=this.createContactEquation(r,l,t,e,c,h);E.ri.copy(S),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(p,E.ri),x.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(r.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let v=0,_=g.length;v!==_&&y===!1;v++){const x=m[v],S=g[v],E=Av;o.vmult(x,E);const T=Cv;o.vmult(f[S[0]],T),T.vadd(i,T);const w=Tv;E.scale(-p,w),n.vadd(w,w);const C=Rv;w.vsub(T,C);const I=C.dot(E),z=Lv;if(n.vsub(T,z),I<0&&z.dot(E)>0){const U=[];for(let D=0,P=S.length;D!==P;D++){const O=d.get();o.vmult(f[S[D]],O),i.vadd(O,O),U.push(O)}if(uv(U,E,n)){if(u)return!0;y=!0;const D=this.createContactEquation(r,l,t,e,c,h);E.scale(-p,D.ri),E.negate(D.ni);const P=d.get();E.scale(-I,P);const O=d.get();E.scale(-p,O),n.vsub(i,D.rj),D.rj.vadd(O,D.rj),D.rj.vadd(P,D.rj),D.rj.vadd(i,D.rj),D.rj.vsub(l.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(r.position,D.ri),d.release(P),d.release(O),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let N=0,K=U.length;N!==K;N++)d.release(U[N]);return}else for(let D=0;D!==S.length;D++){const P=d.get(),O=d.get();o.vmult(f[S[(D+1)%S.length]],P),o.vmult(f[S[(D+2)%S.length]],O),i.vadd(P,P),i.vadd(O,O);const N=wv;O.vsub(P,N);const K=bv;N.unit(K);const k=d.get(),q=d.get();n.vsub(P,q);const Y=q.dot(K);K.scale(Y,k),k.vadd(P,k);const et=d.get();if(k.vsub(n,et),Y>0&&Y*Y<N.lengthSquared()&&et.lengthSquared()<p*p){if(u)return!0;const B=this.createContactEquation(r,l,t,e,c,h);k.vsub(i,B.rj),k.vsub(n,B.ni),B.ni.normalize(),B.ni.scale(p,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(r.position,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(let tt=0,nt=U.length;tt!==nt;tt++)d.release(U[tt]);d.release(P),d.release(O),d.release(k),d.release(et),d.release(q);return}d.release(P),d.release(O),d.release(k),d.release(et),d.release(q)}for(let D=0,P=U.length;D!==P;D++)d.release(U[D])}}}planeConvex(t,e,n,i,s,o,r,l,c,h,u){const d=Dv,m=Iv;m.set(0,0,1),s.vmult(m,m);let g=0;const f=Pv;for(let p=0;p!==e.vertices.length;p++)if(d.copy(e.vertices[p]),o.vmult(d,d),i.vadd(d,d),d.vsub(n,f),m.dot(f)<=0){if(u)return!0;const v=this.createContactEquation(r,l,t,e,c,h),_=Ov;m.scale(m.dot(f),_),d.vsub(_,_),_.vsub(n,v.ri),v.ni.copy(m),d.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(r.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,r,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,r,l,t,e,u)}sphereHeightfield(t,e,n,i,s,o,r,l,c,h,u){const d=e.data,m=t.radius,g=e.elementSize,f=Yv,p=Kv;Yt.pointToLocalFrame(i,o,n,p);let y=Math.floor((p.x-m)/g)-1,v=Math.ceil((p.x+m)/g)+1,_=Math.floor((p.y-m)/g)-1,x=Math.ceil((p.y+m)/g)+1;if(v<0||x<0||y>d.length||_>d[0].length)return;y<0&&(y=0),v<0&&(v=0),_<0&&(_=0),x<0&&(x=0),y>=d.length&&(y=d.length-1),v>=d.length&&(v=d.length-1),x>=d[0].length&&(x=d[0].length-1),_>=d[0].length&&(_=d[0].length-1);const S=[];e.getRectMinMax(y,_,v,x,S);const E=S[0],T=S[1];if(p.z-m>T||p.z+m<E)return;const w=this.result;for(let C=y;C<v;C++)for(let I=_;I<x;I++){const z=w.length;let U=!1;if(e.getConvexTrianglePillar(C,I,!1),Yt.pointToWorldFrame(i,o,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.sphereConvex(t,e.pillarConvex,n,f,s,o,r,l,t,e,u)),u&&U||(e.getConvexTrianglePillar(C,I,!0),Yt.pointToWorldFrame(i,o,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.sphereConvex(t,e.pillarConvex,n,f,s,o,r,l,t,e,u)),u&&U))return!0;if(w.length-z>2)return}}boxHeightfield(t,e,n,i,s,o,r,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,r,l,t,e,u)}convexHeightfield(t,e,n,i,s,o,r,l,c,h,u){const d=e.data,m=e.elementSize,g=t.boundingSphereRadius,f=qv,p=Xv,y=Wv;Yt.pointToLocalFrame(i,o,n,y);let v=Math.floor((y.x-g)/m)-1,_=Math.ceil((y.x+g)/m)+1,x=Math.floor((y.y-g)/m)-1,S=Math.ceil((y.y+g)/m)+1;if(_<0||S<0||v>d.length||x>d[0].length)return;v<0&&(v=0),_<0&&(_=0),x<0&&(x=0),S<0&&(S=0),v>=d.length&&(v=d.length-1),_>=d.length&&(_=d.length-1),S>=d[0].length&&(S=d[0].length-1),x>=d[0].length&&(x=d[0].length-1);const E=[];e.getRectMinMax(v,x,_,S,E);const T=E[0],w=E[1];if(!(y.z-g>w||y.z+g<T))for(let C=v;C<_;C++)for(let I=x;I<S;I++){let z=!1;if(e.getConvexTrianglePillar(C,I,!1),Yt.pointToWorldFrame(i,o,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.convexConvex(t,e.pillarConvex,n,f,s,o,r,l,null,null,u,p,null)),u&&z||(e.getConvexTrianglePillar(C,I,!0),Yt.pointToWorldFrame(i,o,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.convexConvex(t,e.pillarConvex,n,f,s,o,r,l,null,null,u,p,null)),u&&z))return!0}}sphereParticle(t,e,n,i,s,o,r,l,c,h,u){const d=Uv;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=t.radius*t.radius){if(u)return!0;const g=this.createContactEquation(l,r,e,t,c,h);d.normalize(),g.rj.copy(d),g.rj.scale(t.radius,g.rj),g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,r,l,c,h,u){const d=kv;d.set(0,0,1),r.quaternion.vmult(d,d);const m=zv;if(i.vsub(r.position,m),d.dot(m)<=0){if(u)return!0;const f=this.createContactEquation(l,r,e,t,c,h);f.ni.copy(d),f.ni.negate(f.ni),f.ri.set(0,0,0);const p=Fv;d.scale(d.dot(i),p),i.vsub(p,p),f.rj.copy(p),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxParticle(t,e,n,i,s,o,r,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,r,l,t,e,u)}convexParticle(t,e,n,i,s,o,r,l,c,h,u){let d=-1;const m=Vv,g=Hv;let f=null;const p=Gv;if(p.copy(i),p.vsub(n,p),s.conjugate(ql),ql.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let y=0,v=t.faces.length;y!==v;y++){const _=[t.worldVertices[t.faces[y][0]]],x=t.worldFaceNormals[y];i.vsub(_[0],Xl);const S=-x.dot(Xl);if(f===null||Math.abs(S)<Math.abs(f)){if(u)return!0;f=S,d=y,m.copy(x)}}if(d!==-1){const y=this.createContactEquation(l,r,e,t,c,h);m.scale(f,g),g.vadd(i,g),g.vsub(n,g),y.rj.copy(g),m.negate(y.ni),y.ri.set(0,0,0);const v=y.ri,_=y.rj;v.vadd(i,v),v.vsub(l.position,v),_.vadd(n,_),_.vsub(r.position,_),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,r,l,c,h,u){return this.convexHeightfield(e,t,i,n,o,s,l,r,c,h,u)}particleCylinder(t,e,n,i,s,o,r,l,c,h,u){return this.convexParticle(e,t,i,n,o,s,l,r,c,h,u)}sphereTrimesh(t,e,n,i,s,o,r,l,c,h,u){const d=J0,m=Q0,g=tv,f=ev,p=nv,y=iv,v=av,_=Z0,x=j0,S=lv;Yt.pointToLocalFrame(i,o,n,p);const E=t.radius;v.lowerBound.set(p.x-E,p.y-E,p.z-E),v.upperBound.set(p.x+E,p.y+E,p.z+E),e.getTrianglesInAABB(v,S);const T=$0,w=t.radius*t.radius;for(let D=0;D<S.length;D++)for(let P=0;P<3;P++)if(e.getVertex(e.indices[S[D]*3+P],T),T.vsub(p,x),x.lengthSquared()<=w){if(_.copy(T),Yt.pointToWorldFrame(i,o,_,T),T.vsub(n,x),u)return!0;let O=this.createContactEquation(r,l,t,e,c,h);O.ni.copy(x),O.ni.normalize(),O.ri.copy(O.ni),O.ri.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(r.position,O.ri),O.rj.copy(T),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}for(let D=0;D<S.length;D++)for(let P=0;P<3;P++){e.getVertex(e.indices[S[D]*3+P],d),e.getVertex(e.indices[S[D]*3+(P+1)%3],m),m.vsub(d,g),p.vsub(m,y);const O=y.dot(g);p.vsub(d,y);let N=y.dot(g);if(N>0&&O<0&&(p.vsub(d,y),f.copy(g),f.normalize(),N=y.dot(f),f.scale(N,y),y.vadd(d,y),y.distanceTo(p)<t.radius)){if(u)return!0;const k=this.createContactEquation(r,l,t,e,c,h);y.vsub(p,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(r.position,k.ri),Yt.pointToWorldFrame(i,o,y,y),y.vsub(l.position,k.rj),Yt.vectorToWorldFrame(o,k.ni,k.ni),Yt.vectorToWorldFrame(o,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const C=sv,I=ov,z=rv,U=Y0;for(let D=0,P=S.length;D!==P;D++){e.getTriangleVertices(S[D],C,I,z),e.getNormal(S[D],U),p.vsub(C,y);let O=y.dot(U);if(U.scale(O,y),p.vsub(y,y),O=y.distanceTo(p),de.pointInTriangle(y,C,I,z)&&O<t.radius){if(u)return!0;let N=this.createContactEquation(r,l,t,e,c,h);y.vsub(p,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(r.position,N.ri),Yt.pointToWorldFrame(i,o,y,y),y.vsub(l.position,N.rj),Yt.vectorToWorldFrame(o,N.ni,N.ni),Yt.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}S.length=0}planeTrimesh(t,e,n,i,s,o,r,l,c,h,u){const d=new b,m=q0;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,d);const f=new b;f.copy(d),Yt.pointToWorldFrame(i,o,f,d);const p=X0;if(d.vsub(n,p),m.dot(p)<=0){if(u)return!0;const v=this.createContactEquation(r,l,t,e,c,h);v.ni.copy(m);const _=K0;m.scale(p.dot(m),_),d.vsub(_,_),v.ri.copy(_),v.ri.vsub(r.position,v.ri),v.rj.copy(d),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const hi=new b,Xi=new b,Ki=new b,G0=new b,V0=new b,H0=new ue,W0=new ue,q0=new b,X0=new b,K0=new b,Y0=new b,j0=new b;new b;const $0=new b,Z0=new b,J0=new b,Q0=new b,tv=new b,ev=new b,nv=new b,iv=new b,sv=new b,ov=new b,rv=new b,av=new je,lv=[],po=new b,Wl=new b,cv=new b,hv=new b,dv=new b;function uv(a,t,e){let n=null;const i=a.length;for(let s=0;s!==i;s++){const o=a[s],r=cv;a[(s+1)%i].vsub(o,r);const l=hv;r.cross(t,l);const c=dv;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const mo=new b,fv=new b,pv=new b,mv=new b,gv=[new b,new b,new b,new b,new b,new b],vv=new b,yv=new b,_v=new b,xv=new b,Mv=new b,wv=new b,bv=new b,Sv=new b,Ev=new b,Av=new b,Cv=new b,Tv=new b,Rv=new b,Lv=new b;new b;new b;const Dv=new b,Iv=new b,Pv=new b,Ov=new b,Nv=new b,Bv=new b,kv=new b,zv=new b,Fv=new b,Uv=new b,ql=new ue,Gv=new b;new b;const Vv=new b,Xl=new b,Hv=new b,Wv=new b,qv=new b,Xv=[0],Kv=new b,Yv=new b;class Kl{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let r=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[r];)r++;c=h===i[r],c||Yl(t,h)}r=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[r];)r++;c=n[r]===h,c||Yl(e,h)}}}function Yl(a,t){a.push((t&4294901760)>>16,t&65535)}const Mr=(a,t)=>a<t?`${a}-${t}`:`${t}-${a}`;class jv{constructor(){this.data={keys:[]}}get(t,e){const n=Mr(t,e);return this.data[n]}set(t,e,n){const i=Mr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Mr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class $v extends Bc{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new e0,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new O0,this.constraints=[],this.narrowphase=new U0(this),this.collisionMatrix=new Pl,this.collisionMatrixPrevious=new Pl,this.bodyOverlapKeeper=new Kl,this.shapeOverlapKeeper=new Kl,this.contactmaterials=[],this.contactMaterialTable=new jv,this.defaultMaterial=new rs("default"),this.defaultContactMaterial=new os(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof bo?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=de.ALL,n.from=t,n.to=e,n.callback=i,wr.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=de.ANY,n.from=t,n.to=e,n.result=i,wr.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=de.CLOSEST,n.from=t,n.to=e,n.result=i,wr.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof gt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=pe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=pe.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(pe.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let r=0;r!==this.bodies.length;r++){const l=this.bodies[r];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=ey,i=ny,s=this.bodies.length,o=this.bodies,r=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=gt.DYNAMIC;let d=-1/0;const m=this.constraints,g=ty;l.length();const f=l.x,p=l.y,y=l.z;let v=0;for(c&&(d=pe.now()),v=0;v!==s;v++){const D=o[v];if(D.type===u){const P=D.force,O=D.mass;P.x+=O*f,P.y+=O*p,P.z+=O*y}}for(let D=0,P=this.subsystems.length;D!==P;D++)this.subsystems[D].update();c&&(d=pe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=pe.now()-d);let _=m.length;for(v=0;v!==_;v++){const D=m[v];if(!D.collideConnected)for(let P=n.length-1;P>=0;P-=1)(D.bodyA===n[P]&&D.bodyB===i[P]||D.bodyB===n[P]&&D.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),c&&(d=pe.now());const x=Qv,S=e.length;for(v=0;v!==S;v++)x.push(e[v]);e.length=0;const E=this.frictionEquations.length;for(v=0;v!==E;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,g),c&&(h.narrowphase=pe.now()-d),c&&(d=pe.now()),v=0;v<this.frictionEquations.length;v++)r.addEquation(this.frictionEquations[v]);const T=e.length;for(let D=0;D!==T;D++){const P=e[D],O=P.bi,N=P.bj,K=P.si,k=P.sj;let q;if(O.material&&N.material?q=this.getContactMaterial(O.material,N.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,O.material&&N.material&&(O.material.friction>=0&&N.material.friction>=0&&O.material.friction*N.material.friction,O.material.restitution>=0&&N.material.restitution>=0&&(P.restitution=O.material.restitution*N.material.restitution)),r.addEquation(P),O.allowSleep&&O.type===gt.DYNAMIC&&O.sleepState===gt.SLEEPING&&N.sleepState===gt.AWAKE&&N.type!==gt.STATIC){const Y=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),et=N.sleepSpeedLimit**2;Y>=et*2&&(O.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===gt.DYNAMIC&&N.sleepState===gt.SLEEPING&&O.sleepState===gt.AWAKE&&O.type!==gt.STATIC){const Y=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),et=O.sleepSpeedLimit**2;Y>=et*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(O,N,!0),this.collisionMatrixPrevious.get(O,N)||(ws.body=N,ws.contact=P,O.dispatchEvent(ws),ws.body=O,N.dispatchEvent(ws)),this.bodyOverlapKeeper.set(O.id,N.id),this.shapeOverlapKeeper.set(K.id,k.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=pe.now()-d,d=pe.now()),v=0;v!==s;v++){const D=o[v];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(_=m.length,v=0;v!==_;v++){const D=m[v];D.update();for(let P=0,O=D.equations.length;P!==O;P++){const N=D.equations[P];r.addEquation(N)}}r.solve(t,this),c&&(h.solve=pe.now()-d),r.removeAllEquations();const w=Math.pow;for(v=0;v!==s;v++){const D=o[v];if(D.type&u){const P=w(1-D.linearDamping,t),O=D.velocity;O.scale(P,O);const N=D.angularVelocity;if(N){const K=w(1-D.angularDamping,t);N.scale(K,N)}}}this.dispatchEvent(Jv),c&&(d=pe.now());const I=this.stepnumber%(this.quatNormalizeSkip+1)===0,z=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(t,I,z);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=pe.now()-d),this.stepnumber+=1,this.dispatchEvent(Zv);let U=!0;if(this.allowSleep)for(U=!1,v=0;v!==s;v++){const D=o[v];D.sleepTick(this.time),D.sleepState!==gt.SLEEPING&&(U=!0)}this.hasActiveBodies=U}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(On,Nn),t){for(let s=0,o=On.length;s<o;s+=2)bs.bodyA=this.getBodyById(On[s]),bs.bodyB=this.getBodyById(On[s+1]),this.dispatchEvent(bs);bs.bodyA=bs.bodyB=null}if(e){for(let s=0,o=Nn.length;s<o;s+=2)Ss.bodyA=this.getBodyById(Nn[s]),Ss.bodyB=this.getBodyById(Nn[s+1]),this.dispatchEvent(Ss);Ss.bodyA=Ss.bodyB=null}On.length=Nn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(On,Nn),n){for(let s=0,o=On.length;s<o;s+=2){const r=this.getShapeById(On[s]),l=this.getShapeById(On[s+1]);Bn.shapeA=r,Bn.shapeB=l,r&&(Bn.bodyA=r.body),l&&(Bn.bodyB=l.body),this.dispatchEvent(Bn)}Bn.bodyA=Bn.bodyB=Bn.shapeA=Bn.shapeB=null}if(i){for(let s=0,o=Nn.length;s<o;s+=2){const r=this.getShapeById(Nn[s]),l=this.getShapeById(Nn[s+1]);kn.shapeA=r,kn.shapeB=l,r&&(kn.bodyA=r.body),l&&(kn.bodyB=l.body),this.dispatchEvent(kn)}kn.bodyA=kn.bodyB=kn.shapeA=kn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new je;const wr=new de,pe=globalThis.performance||{};if(!pe.now){let a=Date.now();pe.timing&&pe.timing.navigationStart&&(a=pe.timing.navigationStart),pe.now=()=>Date.now()-a}new b;const Zv={type:"postStep"},Jv={type:"preStep"},ws={type:gt.COLLIDE_EVENT_NAME,body:null,contact:null},Qv=[],ty=[],ey=[],ny=[],On=[],Nn=[],bs={type:"beginContact",bodyA:null,bodyB:null},Ss={type:"endContact",bodyA:null,bodyB:null},Bn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},kn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Ue{static audioCtx=null;static noiseBuffer=null;static init(){if(this.audioCtx){this.audioCtx.state==="suspended"&&this.audioCtx.resume();return}try{const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t,this.createNoiseBuffer())}catch(t){console.warn("Failed to initialize AudioContext:",t)}}static createNoiseBuffer(){if(!this.audioCtx)return;const t=this.audioCtx.sampleRate*1;this.noiseBuffer=this.audioCtx.createBuffer(1,t,this.audioCtx.sampleRate);const e=this.noiseBuffer.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}static playNoise(t,e,n,i="lowpass"){if(!this.audioCtx||!this.noiseBuffer)return;const s=this.audioCtx.createBufferSource();s.buffer=this.noiseBuffer;const o=this.audioCtx.createGain();o.gain.setValueAtTime(e,this.audioCtx.currentTime),o.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+t);let r=s;if(n!==void 0){const l=this.audioCtx.createBiquadFilter();l.type=i,l.frequency.setValueAtTime(n,this.audioCtx.currentTime),s.connect(l),r=l}r.connect(o),o.connect(this.audioCtx.destination),s.start(),s.stop(this.audioCtx.currentTime+t)}static playTone(t,e,n,i,s){if(!this.audioCtx)return;const o=this.audioCtx.createOscillator();o.type=t;const r=this.audioCtx.createGain();r.gain.setValueAtTime(s,this.audioCtx.currentTime),r.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+i),o.frequency.setValueAtTime(e,this.audioCtx.currentTime),e!==n&&o.frequency.exponentialRampToValueAtTime(n,this.audioCtx.currentTime+i),o.connect(r),r.connect(this.audioCtx.destination),o.start(),o.stop(this.audioCtx.currentTime+i)}static playBreak(t){if(this.init(),!!this.audioCtx)switch(t){case M.STONE:case M.COAL_ORE:case M.BRICK:this.playNoise(.18,.35,450,"bandpass"),this.playTone("triangle",130,40,.15,.3);break;case M.WOOD:case M.PLANK:case M.DOOR_CLOSED:case M.DOOR_OPEN:this.playNoise(.12,.3,600,"lowpass"),this.playTone("triangle",180,80,.12,.35);break;case M.GROUND:case M.DIRT:case M.LEAVES:this.playNoise(.08,.25,1200,"bandpass");break;case M.GLASS:this.playTone("sine",1600,800,.25,.35),this.playTone("sine",2200,1e3,.2,.2),this.playNoise(.18,.15,4e3,"highpass");break;default:this.playNoise(.1,.25,800,"lowpass");break}}static playPlace(t){if(this.init(),!!this.audioCtx)switch(t){case M.STONE:case M.COAL_ORE:case M.BRICK:this.playNoise(.08,.2,700,"bandpass"),this.playTone("triangle",180,120,.08,.18);break;case M.WOOD:case M.PLANK:case M.DOOR_CLOSED:case M.DOOR_OPEN:this.playNoise(.06,.2,900,"lowpass"),this.playTone("triangle",240,180,.06,.2);break;case M.GLASS:this.playTone("sine",1900,1700,.1,.2);break;default:this.playNoise(.05,.18,1400,"lowpass");break}}static playSwing(){this.init(),this.playTone("sine",600,90,.12,.25),this.playNoise(.08,.1,2500,"bandpass")}static playHit(){this.init(),this.playNoise(.12,.4,250,"lowpass"),this.playTone("sawtooth",120,40,.1,.3)}static playDamage(){this.init(),this.playTone("sawtooth",85,45,.16,.45),this.playNoise(.14,.25,350,"lowpass")}static playJump(){this.init(),this.playTone("triangle",160,280,.12,.2)}static playPickup(){this.init(),this.playTone("sine",950,1400,.08,.22)}}class Je{position;camera;body;characterType="boy1";avatar;head;bodyMesh;leftArm;rightArm;leftLeg;rightLeg;cameraMode="1PV";armorType="none";armorMat;weapons1PV={};weapons3PV={};swingTime=0;hp=ht.PLAYER_MAX_HP;isDead=!1;spawnPosition;pitch=0;yaw=0;sensitivity=.002;speed=ht.PLAYER_SPEED;isGrounded=!1;isInWater=!1;isSprintingToggle=!1;jumpForce=7.5;lastVelocityY=0;lastDamageTime=0;lastRegenTime=0;voxelWorld;static tempVec3=new G;static tempVec3_2=new G;static tempQuat=new Si;static tempQuat_2=new Si;static tempDirection=new G;constructor(t,e,n,i){this.camera=t,this.position=e.clone(),this.spawnPosition=e.clone();const s=ht.PLAYER_RADIUS,o=ht.PLAYER_HEIGHT/2;this.body=new gt({mass:60,position:new b(e.x,e.y+o,e.z),fixedRotation:!0,linearDamping:.1,material:n.playerMaterial});const r=new D0(s);this.body.addShape(r,new b(0,-.5,0)),this.body.addShape(r,new b(0,0,0)),this.body.addShape(r,new b(0,.5,0)),n.world.addBody(this.body),this.characterType=Ae.getConfig().characterType||"boy1",this.avatar=new se,this.avatar.rotation.order="YXZ",this.buildAvatar(),i.add(this.avatar),i.add(this.camera);const l={14:{creator:()=>this.buildSword(13421772,7877903,15381256)},22:{creator:()=>this.buildSword(65535,7877903,35071)},23:{creator:()=>this.buildHammer()},35:{creator:()=>this.buildPickaxe(9132587)},36:{creator:()=>this.buildPickaxe(8947848)},37:{creator:()=>this.buildPickaxe(14540253)},38:{creator:()=>this.buildPickaxe(65535)},39:{creator:()=>this.buildAxe(9132587)},40:{creator:()=>this.buildAxe(8947848)},41:{creator:()=>this.buildAxe(14540253)},42:{creator:()=>this.buildAxe(65535)},43:{creator:()=>this.buildShovel(9132587)},44:{creator:()=>this.buildShovel(8947848)},45:{creator:()=>this.buildShovel(14540253)},46:{creator:()=>this.buildShovel(65535)}};for(const c of Object.keys(l)){const h=Number(c);this.weapons1PV[h]=l[h].creator(),this.weapons3PV[h]=l[h].creator(),this.weapons1PV[h].position.set(.24,-.24,-.38),this.weapons1PV[h].rotation.set(-30*Math.PI/180,45*Math.PI/180,15*Math.PI/180),this.weapons1PV[h].visible=!1,this.camera.add(this.weapons1PV[h]),this.weapons3PV[h].position.set(0,-.6,-.1),this.weapons3PV[h].rotation.x=-Math.PI/2,this.weapons3PV[h].visible=!1,this.rightArm.add(this.weapons3PV[h])}this.syncCamera()}buildAvatar(){for(;this.avatar.children.length>0;)this.avatar.remove(this.avatar.children[0]);let t=5913896,e=33023,n=2829184,i=16767916,s=3355443,o=!1;const r=this.characterType||"boy1";r==="boy1"?(t=2236962,e=3900150,n=1920728,s=1920728):r==="boy2"?(t=14251782,e=1096065,n=2042167,s=292951):r==="girl1"?(t=14362487,e=16436245,n=5195493,s=12458077,o=!0):r==="girl2"&&(t=440020,e=9133302,n=4674921,s=7153881,o=!0);const l=new Ut({color:i,roughness:.9}),c=new Ut({color:e,roughness:.9}),h=new Ut({color:i,roughness:.9}),u=new Ut({color:n,roughness:.9}),d=new Ut({color:t,roughness:.9}),m=new Ut({color:16777215,roughness:.9}),g=new Ut({color:s,roughness:.9}),f=new Ut({color:14753096,roughness:.9});this.armorMat=new Ut({color:16777215,roughness:.8,metalness:.1,visible:!1});const p=new Tt(.44,.04,.44),y=new Tt(.44,.4,.04),v=new Tt(.04,.4,.44),_=new Tt(.44,.62,.24),x=new Tt(.24,.35,.24);x.translate(0,-.175,0);const S=new Tt(.23,.4,.23);S.translate(0,-.2,0);const E=new Tt(.24,.2,.24);E.translate(0,-.5,0);const T=new Tt(.4,.4,.4);this.head=new mt(T,l),this.head.position.y=.5,this.head.castShadow=!0,this.head.receiveShadow=!0;const w=new Tt(.42,.15,.42),C=new mt(w,d);if(C.position.y=.15,this.head.add(C),o){const oe=new Tt(.42,.32,.08),$t=new mt(oe,d);$t.position.set(0,-.08,.17),$t.castShadow=!0,$t.receiveShadow=!0,this.head.add($t);const zt=new Tt(.08,.25,.42),Ft=new mt(zt,d);Ft.position.set(.17,-.05,0),Ft.castShadow=!0,Ft.receiveShadow=!0,this.head.add(Ft);const Gt=new mt(zt,d);Gt.position.set(-.17,-.05,0),Gt.castShadow=!0,Gt.receiveShadow=!0,this.head.add(Gt)}const I=new Tt(.08,.04,.01),z=new mt(I,m);z.position.set(.08,.01,-.201),this.head.add(z);const U=new Tt(.04,.04,.012),D=new mt(U,g);D.position.set(.06,.01,-.202),this.head.add(D);const P=new mt(I,m);P.position.set(-.08,.01,-.201),this.head.add(P);const O=new mt(U,g);O.position.set(-.06,.01,-.202),this.head.add(O);const N=new Tt(.12,.04,.01),K=new mt(N,f);K.position.set(0,-.09,-.201),this.head.add(K);const k=new mt(p,this.armorMat);k.position.set(0,.22,0),k.castShadow=!0,k.receiveShadow=!0,this.head.add(k);const q=new mt(y,this.armorMat);q.position.set(0,.02,.22),q.castShadow=!0,q.receiveShadow=!0,this.head.add(q);const Y=new mt(v,this.armorMat);Y.position.set(.22,.02,0),Y.castShadow=!0,Y.receiveShadow=!0,this.head.add(Y);const et=new mt(v,this.armorMat);et.position.set(-.22,.02,0),et.castShadow=!0,et.receiveShadow=!0,this.head.add(et),this.avatar.add(this.head);const B=new Tt(.4,.6,.2);this.bodyMesh=new mt(B,c),this.bodyMesh.position.y=0,this.bodyMesh.castShadow=!0,this.bodyMesh.receiveShadow=!0;const tt=new mt(_,this.armorMat);tt.castShadow=!0,tt.receiveShadow=!0,this.bodyMesh.add(tt),this.avatar.add(this.bodyMesh);const nt=new Tt(.2,.6,.2);nt.translate(0,-.3,0),this.leftArm=new se;const V=new mt(nt,h);V.castShadow=!0,V.receiveShadow=!0;const lt=new mt(x,this.armorMat);lt.castShadow=!0,lt.receiveShadow=!0,V.add(lt),this.leftArm.add(V),this.leftArm.position.set(.3,.3,0),this.avatar.add(this.leftArm),this.rightArm=new se;const ct=new mt(nt,h);ct.castShadow=!0,ct.receiveShadow=!0;const dt=new mt(x,this.armorMat);dt.castShadow=!0,dt.receiveShadow=!0,ct.add(dt),this.rightArm.add(ct),this.rightArm.position.set(-.3,.3,0),this.avatar.add(this.rightArm),this.leftLeg=new se;const ot=new mt(nt,u);ot.castShadow=!0,ot.receiveShadow=!0;const ut=new mt(S,this.armorMat);ut.castShadow=!0,ut.receiveShadow=!0,ot.add(ut);const Et=new mt(E,this.armorMat);Et.castShadow=!0,Et.receiveShadow=!0,ot.add(Et),this.leftLeg.add(ot),this.leftLeg.position.set(.1,-.3,0),this.avatar.add(this.leftLeg),this.rightLeg=new se;const bt=new mt(nt,u);bt.castShadow=!0,bt.receiveShadow=!0;const Dt=new mt(S,this.armorMat);Dt.castShadow=!0,Dt.receiveShadow=!0,bt.add(Dt);const Jt=new mt(E,this.armorMat);if(Jt.castShadow=!0,Jt.receiveShadow=!0,bt.add(Jt),this.rightLeg.add(bt),this.rightLeg.position.set(-.1,-.3,0),this.avatar.add(this.rightLeg),this.weapons3PV)for(const oe of Object.keys(this.weapons3PV)){const $t=Number(oe),zt=this.weapons3PV[$t];zt&&this.rightArm.add(zt)}}changeCharacter(t){this.characterType!==t&&(this.characterType=t,this.buildAvatar(),this.setArmor(this.armorType))}buildSword(t=13421772,e=7877903,n=15381256){const i=new se,s=new Ut({color:t,roughness:.3,metalness:.8}),o=new Ut({color:n,roughness:.5,metalness:.5}),r=new Ut({color:e,roughness:.9}),l=new Tt(.06,.45,.02);l.translate(0,.225,0);const c=new mt(l,s);c.castShadow=!0,c.receiveShadow=!0,c.position.y=.02,i.add(c);const h=new Tt(.16,.04,.04),u=new mt(h,o);u.castShadow=!0,u.receiveShadow=!0,u.position.y=0,i.add(u);const d=new Tt(.04,.12,.04);d.translate(0,-.06,0);const m=new mt(d,r);return m.castShadow=!0,m.receiveShadow=!0,m.position.y=-.02,i.add(m),i}buildHammer(){const t=new se,e=new Ut({color:5592405,roughness:.7,metalness:.5}),n=new Ut({color:7877903,roughness:.9}),i=new Tt(.15,.15,.3);i.translate(0,.3,0);const s=new mt(i,e);s.castShadow=!0,s.receiveShadow=!0,t.add(s);const o=new Tt(.04,.4,.04);o.translate(0,.05,0);const r=new mt(o,n);return r.castShadow=!0,r.receiveShadow=!0,t.add(r),t}update(t,e,n,i){if(this.isDead)return;const s=Ae.getConfig();t.consumeJustPressed(s.keyRescue)&&this.rescue();const o=performance.now();if(this.hp<ht.PLAYER_MAX_HP&&o-this.lastDamageTime>5e3&&o-this.lastRegenTime>1e3&&(this.hp=Math.min(ht.PLAYER_MAX_HP,this.hp+1),this.lastRegenTime=o),t.consumeJustPressed("F5")&&(this.cameraMode==="1PV"?this.cameraMode="3PV_BACK":this.cameraMode==="3PV_BACK"?this.cameraMode="3PV_FRONT":this.cameraMode="1PV"),(t.consumeJustPressed("ShiftLeft")||t.consumeJustPressed("ShiftRight"))&&(this.isSprintingToggle=!this.isSprintingToggle),this.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.handleStepClimb(n),this.isInWater=!1,this.voxelWorld){const r=Math.floor(this.position.x),l=Math.floor(this.position.y-ht.PLAYER_HEIGHT/2+.1),c=Math.floor(this.position.z);this.voxelWorld.getBlock(r,l,c)===M.WATER&&(this.isInWater=!0)}if(!t.isLocked){this.body.velocity.x*=.8,this.body.velocity.z*=.8;return}for(const r of Object.keys(this.weapons1PV)){const l=Number(r),c=i===l;this.cameraMode==="1PV"?(this.weapons1PV[l].visible=c,this.weapons3PV[l].visible=!1):(this.weapons1PV[l].visible=!1,this.weapons3PV[l].visible=c)}this.handleRotation(t),this.checkGrounded(n),this.handleMovement(t,e),this.animateAvatar(e),this.syncCamera(),this.updateHUD()}handleRotation(t){const e=t.consumeMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch-=e.y*this.sensitivity;const n=85*Math.PI/180;this.pitch=Math.max(-n,Math.min(n,this.pitch))}checkGrounded(t){const e=ht.PLAYER_HEIGHT/2,n=this.position.y-e-.12,i=[{x:this.position.x,z:this.position.z},{x:this.position.x-.3,z:this.position.z-.3},{x:this.position.x+.3,z:this.position.z-.3},{x:this.position.x-.3,z:this.position.z+.3},{x:this.position.x+.3,z:this.position.z+.3}];let s=!1;for(const r of i){const l=Math.floor(r.x),c=Math.floor(n),h=Math.floor(r.z);if(t.getBlock(l,c,h)!==0){s=!0;break}}const o=s||Math.abs(this.body.velocity.y)<.2;if(o&&!this.isGrounded&&!this.isInWater&&this.lastVelocityY<ht.FALL_DAMAGE_MIN_SPEED){const r=Math.floor((ht.FALL_DAMAGE_MIN_SPEED-this.lastVelocityY)*ht.FALL_DAMAGE_FACTOR);r>0&&this.takeDamage(r)}this.isGrounded=o,this.lastVelocityY=this.body.velocity.y}handleStepClimb(t){const e=this.body.velocity.x,n=this.body.velocity.z,i=e*e+n*n;if(i<.01)return;const s=ht.PLAYER_HEIGHT/2,o=this.position.y-s,r=Math.sqrt(i),l=e/r,c=n/r,h=ht.PLAYER_RADIUS+.15,u=this.position.x+l*h,d=this.position.z+c*h,m=Math.floor(u),g=Math.floor(d),f=Math.floor(o+.15),p=t.getBlock(m,f,g),y=t.getBlock(m,f+1,g),v=t.getBlock(m,f+2,g);if(p!==0&&y===0&&v===0){let _=1;(p===M.BED_HEAD||p===M.BED_FOOT)&&(_=.5625);const x=f+_,S=x-o;S>.05&&S<=1.05&&(p===M.STAIRS?this.body.velocity.y=4:(this.body.position.y=x+s+.05,this.position.y=this.body.position.y,this.body.velocity.y<0&&(this.body.velocity.y=0)))}}setArmor(t){this.armorType=t,t==="none"?this.armorMat.visible=!1:(this.armorMat.visible=!0,t==="leather"?(this.armorMat.color.setHex(9132587),this.armorMat.roughness=.9,this.armorMat.metalness=0):t==="iron"?(this.armorMat.color.setHex(14211288),this.armorMat.roughness=.4,this.armorMat.metalness=.8):t==="diamond"&&(this.armorMat.color.setHex(2282478),this.armorMat.roughness=.3,this.armorMat.metalness=.6),this.armorMat.needsUpdate=!0)}takeDamage(t){if(this.isDead)return;this.lastDamageTime=performance.now(),t>0&&(this.armorType==="leather"?t=Math.max(1,Math.floor(t*.9)):this.armorType==="iron"?t=Math.max(1,Math.floor(t*.7)):this.armorType==="diamond"&&(t=Math.max(1,Math.floor(t*.4)))),this.hp=Math.max(0,this.hp-t),Ue.playDamage();const e=document.getElementById("damage-overlay");e&&(e.style.opacity="0.5",setTimeout(()=>{e.style.opacity="0"},150)),this.hp<=0&&this.die()}die(){this.isDead=!0,this.body.velocity.set(0,0,0);const t=document.getElementById("death-screen");t&&(t.style.display="flex"),document.exitPointerLock()}respawn(){this.hp=ht.PLAYER_MAX_HP,this.isDead=!1,this.body.position.set(this.spawnPosition.x,this.spawnPosition.y+ht.PLAYER_HEIGHT/2,this.spawnPosition.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.pitch=0,this.yaw=0;const t=document.getElementById("death-screen");t&&(t.style.display="none");const e=document.getElementById("menu-overlay");e&&(e.style.display="flex")}rescue(){this.body.position.set(this.spawnPosition.x,this.spawnPosition.y+ht.PLAYER_HEIGHT/2,this.spawnPosition.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.position.set(this.spawnPosition.x,this.spawnPosition.y+ht.PLAYER_HEIGHT/2,this.spawnPosition.z),this.syncCamera(),this.updateHUD(),this.voxelWorld&&(this.voxelWorld.clearAndRebuild(this.position.x,this.position.z),this.voxelWorld.generateWorldAround(this.position.x,this.position.z));const t=document.getElementById("save-toast");t&&(t.textContent="初期位置に戻りました（スタック救出）",t.style.backgroundColor="rgba(59, 130, 246, 0.9)",t.style.opacity="1",t.style.transform="translateY(0)",setTimeout(()=>{t.style.opacity="0",t.style.transform="translateY(-20px)"},3e3)),console.log("Player was rescued and returned to spawn position.")}handleMovement(t,e){const n=Je.tempVec3.set(0,0,0);t.isActionActive("forward")&&(n.z-=1),t.isActionActive("backward")&&(n.z+=1),t.isActionActive("left")&&(n.x-=1),t.isActionActive("right")&&(n.x+=1),n.normalize();const i=Je.tempDirection.copy(n);i.applyAxisAngle(Je.tempVec3_2.set(0,1,0),this.yaw);let s=this.isSprintingToggle?this.speed*1.5:this.speed;this.isInWater&&(s*=.6);const o=i.x*s,r=i.z*s;this.isGrounded?(this.body.velocity.x=o,this.body.velocity.z=r):(this.body.velocity.x+=(o-this.body.velocity.x)*3*e,this.body.velocity.z+=(r-this.body.velocity.z)*3*e),t.isActionActive("jump")&&(this.isInWater?this.body.velocity.y=this.jumpForce*.4:this.isGrounded&&(this.body.velocity.y=this.jumpForce,this.isGrounded=!1,Ue.playJump())),this.isInWater&&this.body.velocity.y<-2&&(this.body.velocity.y*=.8)}animateAvatar(t){this.avatar.position.copy(this.position),this.avatar.rotation.y=this.yaw,this.head.rotation.x=this.pitch;const n=this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z>.1&&this.isGrounded;if(n){const o=performance.now()*.01,r=Math.sin(o)*.8;this.leftArm.rotation.x=r,this.swingTime<=0&&(this.rightArm.rotation.x=-r),this.leftLeg.rotation.x=-r,this.rightLeg.rotation.x=r}else{const o=10*t;this.leftArm.rotation.x+=(0-this.leftArm.rotation.x)*o,this.swingTime<=0&&(this.rightArm.rotation.x+=(0-this.rightArm.rotation.x)*o),this.leftLeg.rotation.x+=(0-this.leftLeg.rotation.x)*o,this.rightLeg.rotation.x+=(0-this.rightLeg.rotation.x)*o}let i=!1,s=0;if(!n&&this.isGrounded&&this.voxelWorld){const o=Math.floor(this.position.x),r=ht.PLAYER_HEIGHT/2,l=Math.floor(this.position.y-r-.1),c=Math.floor(this.position.z),h=this.voxelWorld.getBlock(o,l,c);if(h===M.BED_HEAD||h===M.BED_FOOT){i=!0;const u=h===M.BED_HEAD?M.BED_FOOT:M.BED_HEAD;this.voxelWorld.getBlock(o+1,l,c)===u?s=h===M.BED_HEAD?-Math.PI/2:Math.PI/2:this.voxelWorld.getBlock(o-1,l,c)===u?s=h===M.BED_HEAD?Math.PI/2:-Math.PI/2:this.voxelWorld.getBlock(o,l,c+1)===u?s=h===M.BED_HEAD?Math.PI:0:this.voxelWorld.getBlock(o,l,c-1)===u&&(s=h===M.BED_HEAD?0:Math.PI)}}if(i){const o=-Math.PI/2;this.avatar.rotation.x+=(o-this.avatar.rotation.x)*10*t,this.avatar.rotation.y=s,this.avatar.position.y-=.7}else this.avatar.rotation.x+=(0-this.avatar.rotation.x)*10*t;if(this.swingTime>0){this.swingTime-=t;const o=(.15-this.swingTime)/.15,r=Math.sin(o*Math.PI)*1.2;if(this.cameraMode==="1PV")for(const l of Object.keys(this.weapons1PV)){const c=Number(l);this.weapons1PV[c].rotation.x=-30*Math.PI/180+r,this.weapons1PV[c].rotation.y=45*Math.PI/180-r*.5,this.weapons1PV[c].position.z=-.38+r*.15}else this.rightArm.rotation.x=-Math.PI/3+r*1.5,this.rightArm.rotation.y=r*.5}else if(this.rightArm.rotation.y+=(0-this.rightArm.rotation.y)*10*t,this.cameraMode==="1PV")for(const o of Object.keys(this.weapons1PV)){const r=Number(o);this.weapons1PV[r].rotation.set(-30*Math.PI/180,45*Math.PI/180,15*Math.PI/180),this.weapons1PV[r].position.set(.24,-.24,-.38)}}syncCamera(){const t=Je.tempQuat.setFromAxisAngle(Je.tempVec3.set(0,1,0),this.yaw),e=Je.tempQuat_2.setFromAxisAngle(Je.tempVec3_2.set(1,0,0),this.pitch),n=Je.tempQuat.multiplyQuaternions(t,e);this.camera.quaternion.copy(n);const i=ht.PLAYER_HEIGHT/2-.2;if(this.cameraMode==="1PV")this.camera.position.set(this.position.x,this.position.y+i,this.position.z),this.avatar.visible=!1;else{this.avatar.visible=!0,this.head.visible=!0;const s=4,o=Je.tempVec3.set(0,i+.4,0),r=Je.tempVec3_2.set(0,0,-1).applyQuaternion(n),l=new G(this.position.x+o.x,this.position.y+o.y,this.position.z+o.z);let c;this.cameraMode==="3PV_BACK"?c=r.clone().negate():c=new G(r.x,-r.y,r.z).normalize();const h=this.calcSafeCameraDist(l,c,s);this.cameraMode==="3PV_BACK"?this.camera.position.copy(l).addScaledVector(c,h):(this.camera.position.copy(l).addScaledVector(c,h),this.camera.lookAt(this.position.x,this.position.y+i,this.position.z))}}calcSafeCameraDist(t,e,n){if(!this.voxelWorld)return n;const i=.2,s=.1,o=Math.ceil(n/s);for(let r=1;r<=o;r++){const l=Math.min(r*s,n),c=t.x+e.x*l,h=t.y+e.y*l,u=t.z+e.z*l,d=Math.floor(c),m=Math.floor(h),g=Math.floor(u);if(this.voxelWorld.getBlock(d,m,g)!==0)return Math.max(0,l-i)}return n}updateHUD(){const t=document.getElementById("pos-display");t&&(t.textContent=`${this.position.x.toFixed(1)}, ${this.position.y.toFixed(1)}, ${this.position.z.toFixed(1)}`)}swing(){this.swingTime<=0&&(this.swingTime=.15,Ue.playSwing())}getYaw(){return this.yaw}setWorld(t){this.voxelWorld=t}getSaveData(){return{x:this.body.position.x,y:this.body.position.y,z:this.body.position.z,hp:this.hp,yaw:this.yaw,pitch:this.pitch,armorType:this.armorType}}loadSaveData(t){if(!t)return;this.hp=typeof t.hp=="number"?t.hp:ht.PLAYER_MAX_HP,this.isDead=this.hp<=0,t.armorType?this.setArmor(t.armorType):this.setArmor("none");const e=document.getElementById("death-screen");e&&(e.style.display=this.isDead?"flex":"none"),this.yaw=typeof t.yaw=="number"?t.yaw:0,this.pitch=typeof t.pitch=="number"?t.pitch:0,this.body.position.set(t.x,t.y,t.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.position.set(t.x,t.y,t.z),this.syncCamera(),this.updateHUD()}buildPickaxe(t,e=7877903){const n=new se,i=new Ut({color:e,roughness:.9}),s=new Ut({color:t,roughness:.5,metalness:.5}),o=new Tt(.03,.45,.03);o.translate(0,.1,0);const r=new mt(o,i);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const l=new Tt(.24,.04,.04);l.translate(0,.3,0);const c=new mt(l,s);return c.castShadow=!0,c.receiveShadow=!0,n.add(c),n}buildAxe(t,e=7877903){const n=new se,i=new Ut({color:e,roughness:.9}),s=new Ut({color:t,roughness:.5,metalness:.5}),o=new Tt(.03,.45,.03);o.translate(0,.1,0);const r=new mt(o,i);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const l=new Tt(.12,.12,.04);l.translate(.05,.26,0);const c=new mt(l,s);return c.castShadow=!0,c.receiveShadow=!0,n.add(c),n}buildShovel(t,e=7877903){const n=new se,i=new Ut({color:e,roughness:.9}),s=new Ut({color:t,roughness:.5,metalness:.5}),o=new Tt(.03,.45,.03);o.translate(0,.1,0);const r=new mt(o,i);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const l=new Tt(.08,.12,.02);l.translate(0,.31,0);const c=new mt(l,s);return c.castShadow=!0,c.receiveShadow=!0,n.add(c),n}}class iy{world;playerMaterial;defaultMaterial;blockBodies=new Map;blockShape;bedShape;constructor(){this.world=new $v,this.world.gravity.set(0,ht.GRAVITY,0),this.world.broadphase=new Zi(this.world),this.world.solver.iterations=5,this.defaultMaterial=new rs("default");const t=new os(this.defaultMaterial,this.defaultMaterial,{friction:.1,restitution:0});this.world.addContactMaterial(t),this.world.defaultContactMaterial=t,this.playerMaterial=new rs("player");const e=new os(this.playerMaterial,this.defaultMaterial,{friction:0,restitution:0});this.world.addContactMaterial(e),this.blockShape=new Ci(new b(.5,.5,.5)),this.bedShape=new Ci(new b(.5,.5625/2,.5));const n=new gt({mass:0,shape:new I0});n.quaternion.setFromEuler(-Math.PI/2,0,0),n.position.set(0,-50,0),this.world.addBody(n)}updateBlockBodies(t,e){const i=Math.floor(t.x),s=Math.floor(t.y),o=Math.floor(t.z),r=new Set;for(let l=i-3;l<=i+3;l++)for(let c=s-3-1;c<=s+3;c++)for(let h=o-3;h<=o+3;h++){const u=e.getBlock(l,c,h),d=An[u];if(d&&d.isSolid){const m=`${l},${c},${h}`;if(r.add(m),!this.blockBodies.has(m)){let g=this.blockShape,f=.5;(u===M.BED_HEAD||u===M.BED_FOOT)&&(g=this.bedShape,f=.5625/2);const p=new gt({mass:0,shape:g,position:new b(l+.5,c+f,h+.5),material:this.defaultMaterial});this.world.addBody(p),this.blockBodies.set(m,p)}}}for(const[l,c]of this.blockBodies.entries())r.has(l)||(this.world.removeBody(c),this.blockBodies.delete(l))}step(t){this.world.step(1/60,t,3);const e=document.getElementById("bodies-display");e&&(e.textContent=this.world.bodies.length.toString())}}class sy{overlay;modal;configBtn;keyButtons;invertClicksChk;enableShadowsChk;easyModeChk;saveBtn;defaultBtn;closeBtn;tempConfig;activeBindingKey=null;globalKeydownListener=null;constructor(){this.overlay=document.getElementById("menu-overlay"),this.modal=document.getElementById("config-modal"),this.configBtn=document.getElementById("config-btn"),this.keyButtons={forward:document.getElementById("key-forward-btn"),backward:document.getElementById("key-backward-btn"),left:document.getElementById("key-left-btn"),right:document.getElementById("key-right-btn"),jump:document.getElementById("key-jump-btn"),place:document.getElementById("key-place-btn"),break:document.getElementById("key-break-btn"),map:document.getElementById("key-map-btn"),inventory:document.getElementById("key-inventory-btn"),crafting:document.getElementById("key-crafting-btn"),manual:document.getElementById("key-manual-btn"),home:document.getElementById("key-home-btn"),rescue:document.getElementById("key-rescue-btn")},this.invertClicksChk=document.getElementById("invert-clicks-chk"),this.enableShadowsChk=document.getElementById("enable-shadows-chk"),this.easyModeChk=document.getElementById("easy-mode-chk"),this.saveBtn=document.getElementById("config-save-btn"),this.defaultBtn=document.getElementById("config-default-btn"),this.closeBtn=document.getElementById("config-close-btn"),this.tempConfig={...Ae.getConfig()},this.initEvents()}initEvents(){this.configBtn.addEventListener("click",()=>{this.openModal()}),this.keyButtons.forward.addEventListener("click",()=>this.startBinding("keyForward",this.keyButtons.forward)),this.keyButtons.backward.addEventListener("click",()=>this.startBinding("keyBackward",this.keyButtons.backward)),this.keyButtons.left.addEventListener("click",()=>this.startBinding("keyLeft",this.keyButtons.left)),this.keyButtons.right.addEventListener("click",()=>this.startBinding("keyRight",this.keyButtons.right)),this.keyButtons.jump.addEventListener("click",()=>this.startBinding("keyJump",this.keyButtons.jump)),this.keyButtons.place.addEventListener("click",()=>this.startBinding("keyPlaceBlock",this.keyButtons.place)),this.keyButtons.break.addEventListener("click",()=>this.startBinding("keyBreakBlock",this.keyButtons.break)),this.keyButtons.map.addEventListener("click",()=>this.startBinding("keyOpenMap",this.keyButtons.map)),this.keyButtons.inventory.addEventListener("click",()=>this.startBinding("keyOpenInventory",this.keyButtons.inventory)),this.keyButtons.crafting.addEventListener("click",()=>this.startBinding("keyOpenCrafting",this.keyButtons.crafting)),this.keyButtons.manual.addEventListener("click",()=>this.startBinding("keyOpenManual",this.keyButtons.manual)),this.keyButtons.home.addEventListener("click",()=>this.startBinding("keyRegisterHome",this.keyButtons.home)),this.keyButtons.rescue.addEventListener("click",()=>this.startBinding("keyRescue",this.keyButtons.rescue));const t=document.getElementById("rescue-now-btn");t&&t.addEventListener("click",()=>{this.closeModal(),window.dispatchEvent(new CustomEvent("request-rescue"))}),this.saveBtn.addEventListener("click",()=>{this.saveConfig()}),this.defaultBtn.addEventListener("click",()=>{this.loadDefaultConfig()}),this.closeBtn.addEventListener("click",()=>{this.closeModal()})}openModal(){this.tempConfig={...Ae.getConfig()},this.updateUI(),this.modal.style.display="flex"}closeModal(){this.stopBinding(),this.modal.style.display="none"}updateUI(){this.keyButtons.forward.textContent=this.formatKeyName(this.tempConfig.keyForward),this.keyButtons.backward.textContent=this.formatKeyName(this.tempConfig.keyBackward),this.keyButtons.left.textContent=this.formatKeyName(this.tempConfig.keyLeft),this.keyButtons.right.textContent=this.formatKeyName(this.tempConfig.keyRight),this.keyButtons.jump.textContent=this.formatKeyName(this.tempConfig.keyJump),this.keyButtons.place.textContent=this.formatKeyName(this.tempConfig.keyPlaceBlock),this.keyButtons.break.textContent=this.formatKeyName(this.tempConfig.keyBreakBlock),this.keyButtons.map.textContent=this.formatKeyName(this.tempConfig.keyOpenMap),this.keyButtons.inventory.textContent=this.formatKeyName(this.tempConfig.keyOpenInventory),this.keyButtons.crafting.textContent=this.formatKeyName(this.tempConfig.keyOpenCrafting),this.keyButtons.manual.textContent=this.formatKeyName(this.tempConfig.keyOpenManual),this.keyButtons.home.textContent=this.formatKeyName(this.tempConfig.keyRegisterHome),this.keyButtons.rescue.textContent=this.formatKeyName(this.tempConfig.keyRescue),this.invertClicksChk.checked=this.tempConfig.invertClicks,this.enableShadowsChk.checked=this.tempConfig.enableShadows,this.easyModeChk.checked=this.tempConfig.easyMode}formatKeyName(t){return t.startsWith("Key")?t.substring(3):t.startsWith("Digit")?t.substring(5):t==="Space"?"Space":t}startBinding(t,e){this.stopBinding(),this.activeBindingKey=t,e.classList.add("waiting"),e.textContent="キーを入力...",this.globalKeydownListener=n=>{n.preventDefault(),n.stopPropagation();const i=n.code;if(i==="Escape"){this.stopBinding(),this.updateUI();return}this.activeBindingKey&&(this.tempConfig[this.activeBindingKey]=i),this.stopBinding(),this.updateUI()},window.addEventListener("keydown",this.globalKeydownListener,!0)}stopBinding(){this.globalKeydownListener&&(window.removeEventListener("keydown",this.globalKeydownListener,!0),this.globalKeydownListener=null),Object.values(this.keyButtons).forEach(t=>{t.classList.remove("waiting")}),this.activeBindingKey=null}saveConfig(){this.tempConfig.invertClicks=this.invertClicksChk.checked,this.tempConfig.enableShadows=this.enableShadowsChk.checked,this.tempConfig.easyMode=this.easyModeChk.checked,Ae.save(this.tempConfig),this.closeModal(),this.updateInstructionsUI(),window.dispatchEvent(new CustomEvent("config-changed"))}loadDefaultConfig(){const t={keyForward:"KeyW",keyBackward:"KeyS",keyLeft:"KeyA",keyRight:"KeyD",keyJump:"Space",keyPlaceBlock:"KeyV",keyBreakBlock:"KeyB",keyOpenMap:"KeyM",keyOpenInventory:"KeyE",keyOpenCrafting:"KeyC",keyOpenManual:"KeyN",keyRegisterHome:"KeyH",invertClicks:!1,enableShadows:!0,easyMode:!0,characterType:"boy1",keyRescue:"KeyP"};this.tempConfig={...t},this.updateUI()}updateInstructionsUI(){const t=Ae.getConfig(),e=this.overlay.querySelectorAll(".key-badge");e.length>=5&&(e[0].textContent=this.formatKeyName(t.keyForward),e[1].textContent=this.formatKeyName(t.keyLeft),e[2].textContent=this.formatKeyName(t.keyBackward),e[3].textContent=this.formatKeyName(t.keyRight),e[4].textContent=this.formatKeyName(t.keyJump));const n=this.overlay.querySelector("#click-break-badge"),i=this.overlay.querySelector("#key-break-badge");n&&i&&(n.textContent=t.invertClicks?"右クリック":"左クリック",i.textContent=this.formatKeyName(t.keyBreakBlock));const s=this.overlay.querySelector("#click-place-badge"),o=this.overlay.querySelector("#key-place-badge");s&&o&&(s.textContent=t.invertClicks?"左クリック":"右クリック",o.textContent=this.formatKeyName(t.keyPlaceBlock));const r=this.overlay.querySelector("#key-map-badge");r&&(r.textContent=this.formatKeyName(t.keyOpenMap));const l=this.overlay.querySelector("#key-inventory-badge");l&&(l.textContent=this.formatKeyName(t.keyOpenInventory));const c=this.overlay.querySelector("#key-crafting-badge");c&&(c.textContent=this.formatKeyName(t.keyOpenCrafting));const h=this.overlay.querySelector("#key-manual-badge");h&&(h.textContent=this.formatKeyName(t.keyOpenManual));const u=this.overlay.querySelector("#key-home-badge");u&&(u.textContent=this.formatKeyName(t.keyRegisterHome));const d=this.overlay.querySelector("#key-rescue-badge");d&&(d.textContent=this.formatKeyName(t.keyRescue))}}const oy=[{id:"plank",inputs:[{type:M.WOOD,count:1}],output:{type:M.PLANK,count:4}},{id:"stick",inputs:[{type:M.PLANK,count:2}],output:{type:M.STICK,count:4}},{id:"torch",inputs:[{type:M.STICK,count:1},{type:M.COAL,count:1}],output:{type:M.TORCH,count:4}},{id:"chest",inputs:[{type:M.PLANK,count:8}],output:{type:M.CHEST,count:1}},{id:"furnace",inputs:[{type:M.COBBLESTONE,count:8}],output:{type:M.FURNACE,count:1}},{id:"door",inputs:[{type:M.PLANK,count:6}],output:{type:M.DOOR_CLOSED,count:3}},{id:"bed",inputs:[{type:M.PLANK,count:3},{type:M.WOOD,count:3}],output:{type:M.BED_HEAD,count:1}},{id:"stairs",inputs:[{type:M.PLANK,count:6}],output:{type:M.STAIRS,count:4}},{id:"fence",inputs:[{type:M.PLANK,count:2},{type:M.STICK,count:4}],output:{type:M.FENCE,count:3}},{id:"smelt_stone",inputs:[{type:M.COBBLESTONE,count:1},{type:M.COAL,count:1}],output:{type:M.STONE,count:1}},{id:"smelt_glass",inputs:[{type:M.SAND,count:1},{type:M.COAL,count:1}],output:{type:M.GLASS,count:1}},{id:"smelt_iron",inputs:[{type:M.IRON_ORE,count:1},{type:M.COAL,count:1}],output:{type:M.IRON_INGOT,count:1}},{id:"smelt_gold",inputs:[{type:M.GOLD_ORE,count:1},{type:M.COAL,count:1}],output:{type:M.GOLD_INGOT,count:1}},{id:"wooden_pickaxe",inputs:[{type:M.STICK,count:2},{type:M.PLANK,count:3}],output:{type:M.WOODEN_PICKAXE,count:1}},{id:"stone_pickaxe",inputs:[{type:M.STICK,count:2},{type:M.COBBLESTONE,count:3}],output:{type:M.STONE_PICKAXE,count:1}},{id:"iron_pickaxe",inputs:[{type:M.STICK,count:2},{type:M.IRON_INGOT,count:3}],output:{type:M.IRON_PICKAXE,count:1}},{id:"diamond_pickaxe",inputs:[{type:M.STICK,count:2},{type:M.DIAMOND,count:3}],output:{type:M.DIAMOND_PICKAXE,count:1}},{id:"wooden_axe",inputs:[{type:M.STICK,count:2},{type:M.PLANK,count:3}],output:{type:M.WOODEN_AXE,count:1}},{id:"stone_axe",inputs:[{type:M.STICK,count:2},{type:M.COBBLESTONE,count:3}],output:{type:M.STONE_AXE,count:1}},{id:"iron_axe",inputs:[{type:M.STICK,count:2},{type:M.IRON_INGOT,count:3}],output:{type:M.IRON_AXE,count:1}},{id:"diamond_axe",inputs:[{type:M.STICK,count:2},{type:M.DIAMOND,count:3}],output:{type:M.DIAMOND_AXE,count:1}},{id:"wooden_shovel",inputs:[{type:M.STICK,count:2},{type:M.PLANK,count:1}],output:{type:M.WOODEN_SHOVEL,count:1}},{id:"stone_shovel",inputs:[{type:M.STICK,count:2},{type:M.COBBLESTONE,count:1}],output:{type:M.STONE_SHOVEL,count:1}},{id:"iron_shovel",inputs:[{type:M.STICK,count:2},{type:M.IRON_INGOT,count:1}],output:{type:M.IRON_SHOVEL,count:1}},{id:"diamond_shovel",inputs:[{type:M.STICK,count:2},{type:M.DIAMOND,count:1}],output:{type:M.DIAMOND_SHOVEL,count:1}},{id:"stone_sword",inputs:[{type:M.STICK,count:1},{type:M.COBBLESTONE,count:2}],output:{type:M.SWORD,count:1}},{id:"diamond_sword",inputs:[{type:M.STICK,count:1},{type:M.DIAMOND,count:2}],output:{type:M.DIAMOND_SWORD,count:1}},{id:"hammer",inputs:[{type:M.STICK,count:2},{type:M.IRON_INGOT,count:3}],output:{type:M.HAMMER,count:1}},{id:"iron_armor_set",inputs:[{type:M.IRON_INGOT,count:24}],output:{type:M.IRON_ARMOR_SET,count:1}},{id:"diamond_armor_set",inputs:[{type:M.DIAMOND,count:24}],output:{type:M.DIAMOND_ARMOR_SET,count:1}}];class ry{time=0;timeScale=.01;sunLight;ambientLight;scene;skyColor=new Xt;sunColor=new Xt;ambientColor=new Xt;constructor(t){this.scene=t,this.scene.background=this.skyColor;const e=Ae.getConfig();this.sunLight=new xg(16777215,1.2),this.sunLight.castShadow=e.enableShadows,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=80;const n=30;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.ambientLight=new Mg(16777215,.4),this.scene.add(this.ambientLight)}update(t,e){const n=this.time*Math.PI*2,i=Math.sin(n);let s=1;i>-.1?s=.35:s=2.5,this.time=(this.time+this.timeScale*s*t)%1;const o=this.time*Math.PI*2,r=Math.sin(o),l=Math.cos(o);this.sunLight.position.set(e.x+l*40,e.y+r*40,e.z+l*20),this.sunLight.target.position.copy(e),this.sunLight.target.updateMatrixWorld();const c=Math.max(0,Math.min(1,r*2+.5)),h=on.lerp(.02,.45,c),u=on.lerp(.03,.65,c),d=on.lerp(.08,.95,c);this.skyColor.setRGB(h,u,d);const m=on.lerp(0,1.2,c);this.sunLight.intensity=m;const g=on.lerp(.1,1,c),f=on.lerp(.1,.95,c),p=on.lerp(.2,.85,c);this.sunColor.setRGB(g,f,p),this.sunLight.color.copy(this.sunColor);const y=on.lerp(.22,.45,c);this.ambientLight.intensity=y;const v=on.lerp(.15,1,c),_=on.lerp(.18,1,c),x=on.lerp(.35,1,c);this.ambientColor.setRGB(v,_,x),this.ambientLight.color.copy(this.ambientColor)}setShadowsEnabled(t){this.sunLight.castShadow=t}isNight(){const t=this.time*Math.PI*2;return Math.sin(t)<-.1}}const ay={[M.GROUND]:4906624,[M.DIRT]:8736014,[M.STONE]:10265519,[M.WOOD]:7877903,[M.LEAVES]:2278750,[M.PLANK]:16096779,[M.BRICK]:15680580,[M.SAND]:16707722,[M.COAL_ORE]:3621201,[M.TORCH]:16347926,[M.GLASS]:14742270,[M.DOOR_CLOSED]:11817737,[M.SWORD]:13421772};class yi{blockType;mesh;body;scene;physicsWorld;age=0;isAttracted=!1;static sharedGeometry=new Tt(.2,.2,.2);static materialPool=new Map;static tempVec3=new G;static tempVec3_2=new G;constructor(t,e,n,i,s){this.blockType=t,this.scene=n,this.physicsWorld=i;let o=yi.materialPool.get(t);if(!o){const l=ay[t]||16777215;o=new Ut({color:l,roughness:.8,metalness:.1}),yi.materialPool.set(t,o)}this.mesh=new mt(yi.sharedGeometry,o),this.mesh.position.copy(e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh);const r=new Ci(new b(.1,.1,.1));if(this.body=new gt({mass:1,shape:r,position:new b(e.x,e.y,e.z)}),s){const l=s.clone().sub(e),c=l.length();l.normalize(),l.y+=.5,l.normalize();const h=Math.min(Math.max(c*2,4),15);this.body.velocity.set(l.x*h,l.y*h,l.z*h),this.body.linearDamping=.1}else this.body.velocity.set((Math.random()-.5)*4,Math.random()*4+2,(Math.random()-.5)*4);this.physicsWorld.addBody(this.body)}update(t,e){if(this.age+=t,this.age>ht.ITEM_DESPAWN_TIME)return this.destroy(),!0;const n=yi.tempVec3.set(this.body.position.x,this.body.position.y,this.body.position.z),i=n.distanceTo(e);if(i<ht.ITEM_PICKUP_RADIUS){this.isAttracted=!0,this.body.world&&this.physicsWorld.removeBody(this.body);const s=yi.tempVec3_2.copy(e).sub(n).normalize();if(n.add(s.multiplyScalar(22*t)),this.mesh.position.copy(n),i<.5)return this.destroy(),!0}else this.isAttracted?(this.isAttracted=!1,this.body.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z),this.body.velocity.set(0,0,0),this.physicsWorld.addBody(this.body)):(this.mesh.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.mesh.rotation.x+=t*2,this.mesh.rotation.y+=t*1.5);return!1}destroy(){this.mesh&&this.scene.remove(this.mesh),this.body.world&&this.physicsWorld.removeBody(this.body)}}class Le{mesh;body;hp=4;scene;physicsWorld;head;leftLeg;rightLeg;speed=3;jumpForce=6;attackCooldown=0;damageFlashTime=0;static sharedHeadGeo=new Tt(.4,.4,.4);static sharedBodyGeo=new Tt(.4,.6,.2);static sharedLimbGeo=new Tt(.2,.6,.2);static zombieGreenMat=new Ut({color:5614165,roughness:.9});static zombieBlueMat=new Ut({color:3362408,roughness:.9});static zombiePurpleMat=new Ut({color:4729947,roughness:.9});static damageMat=new Ut({color:16724787,roughness:.5});static tempVec3=new G;static tempDirection=new G;constructor(t,e,n){this.scene=e,this.physicsWorld=n;const i=.35,s=.9,o=new Ci(new b(i,s,i));this.body=new gt({mass:50,shape:o,position:new b(t.x,t.y+s,t.z),fixedRotation:!0,linearDamping:.1}),this.physicsWorld.addBody(this.body),this.mesh=new se,this.buildAvatar(),this.scene.add(this.mesh)}buildAvatar(){const t=Le.zombieGreenMat,e=Le.zombieBlueMat,n=Le.zombieGreenMat,i=Le.zombiePurpleMat;this.head=new mt(Le.sharedHeadGeo,t),this.head.position.y=.5,this.head.castShadow=!0,this.head.receiveShadow=!0,this.mesh.add(this.head);const s=new mt(Le.sharedBodyGeo,e);s.position.y=0,s.castShadow=!0,s.receiveShadow=!0,this.mesh.add(s);const o=Le.sharedLimbGeo.clone();o.translate(0,-.3,0);const r=new se,l=new mt(o,n);l.castShadow=!0,l.receiveShadow=!0,r.add(l),r.position.set(.3,.3,0),r.rotation.x=-Math.PI/2,this.mesh.add(r);const c=new se,h=new mt(o,n);h.castShadow=!0,h.receiveShadow=!0,c.add(h),c.position.set(-.3,.3,0),c.rotation.x=-Math.PI/2,this.mesh.add(c),this.leftLeg=new se;const u=new mt(o,i);u.castShadow=!0,u.receiveShadow=!0,this.leftLeg.add(u),this.leftLeg.position.set(.1,-.3,0),this.mesh.add(this.leftLeg),this.rightLeg=new se;const d=new mt(o,i);d.castShadow=!0,d.receiveShadow=!0,this.rightLeg.add(d),this.rightLeg.position.set(-.1,-.3,0),this.mesh.add(this.rightLeg)}update(t,e){const n=e.position,s=Le.tempVec3.set(this.body.position.x,this.body.position.y,this.body.position.z).distanceTo(n);if(s>ht.MOB_DESPAWN_RADIUS)return this.destroy(),!0;if(this.damageFlashTime>0&&(this.damageFlashTime-=t,this.damageFlashTime<=0&&this.setMaterials(!1)),e.hp>0?this.runAI(t,n,s,e):(this.body.velocity.x*=.8,this.body.velocity.z*=.8),this.mesh.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z>.1){const r=performance.now()*.01,l=Math.sin(r)*.8;this.leftLeg.rotation.x=-l,this.rightLeg.rotation.x=l}else this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0;return!1}runAI(t,e,n,i){const s=Le.tempDirection.set(e.x-this.body.position.x,0,e.z-this.body.position.z);s.normalize();const o=Math.atan2(s.x,s.z);if(this.mesh.rotation.y=o,n<ht.MOB_SPAWN_RADIUS){this.body.velocity.x=s.x*this.speed,this.body.velocity.z=s.z*this.speed;const r=this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z,l=this.speed*this.speed,c=r<l*.25,h=Math.abs(this.body.velocity.y)<.02;c&&h&&(this.body.velocity.y=this.jumpForce)}else this.body.velocity.x*=.8,this.body.velocity.z*=.8;this.attackCooldown>0&&(this.attackCooldown-=t),n<1.3&&this.attackCooldown<=0&&(i.takeDamage(2),this.attackCooldown=1.2)}takeDamage(t,e){return this.hp-=t,this.damageFlashTime=.2,this.setMaterials(!0),Ue.playHit(),this.body.velocity.y=4,this.body.velocity.x=e.x*6,this.body.velocity.z=e.z*6,this.hp<=0?(this.destroy(),!0):!1}setMaterials(t){this.mesh.traverse(e=>{e instanceof mt&&(t?e.material=Le.damageMat:e===this.head||e.parent===this.head?e.material=Le.zombieGreenMat:e.name==="hair"?e.material=new Ut({color:5913896,roughness:.9}):e.position.y===0?e.material=Le.zombieBlueMat:e.position.y===-.3||e.parent?.position.y===-.3?e.material=Le.zombiePurpleMat:e.material=Le.zombieGreenMat)})}destroy(){this.mesh&&this.scene.remove(this.mesh),this.body.world&&this.physicsWorld.removeBody(this.body)}}class ly{player;world;accountId=null;worldId="shared_world_1";autoSaveInterval=null;isSaving=!1;onSaveCustomData;onLoadCustomData;onConflictDetected;constructor(t,e){this.player=t,this.world=e}setAccountId(t){this.accountId=t}getAccountId(){return this.accountId}setWorldId(t){this.worldId=t||"shared_world_1"}async loadData(t=!1){if(!this.accountId)return console.error("Account ID is not set."),!1;try{this.showToast("データをロード中...");const n=await(await fetch(`${ht.GAS_WEB_APP_URL}?accountId=${encodeURIComponent(this.accountId)}&worldId=${encodeURIComponent(this.worldId)}`)).json();if(!t){const i=localStorage.getItem("maikurafu_autosave");if(i)try{const o=JSON.parse(i).timestamp||0,r=Math.max(n.playerLastUpdated||0,n.worldLastUpdated||0);if(r>0&&o>r&&this.onConflictDetected){const l=await this.onConflictDetected(o,r);if(l==="cancel")return this.showToast("ロードをキャンセルしました"),!1;if(l==="local")return this.showToast("ローカルデータをクラウドにアップロード中..."),await this.saveData()?(this.showToast("ローカルデータをクラウドに保存しました"),!0):(this.showToast("アップロードに失敗しました",!0),!1)}}catch(s){console.warn("Failed to parse local autosave for conflict check:",s)}}if(n.worldData&&this.world.setModifiedBlocksData(n.worldData),n.playerData)this.player.loadSaveData(n.playerData),this.onLoadCustomData&&n.playerData.customData&&this.onLoadCustomData(n.playerData.customData);else{const s=Math.floor(Math.random()*300*2)-300+100,o=Math.floor(Math.random()*300*2)-300+100;this.player.position.set(s,30,o),this.player.body.position.set(s,30,o),this.player.body.velocity.set(0,0,0),this.player.spawnPosition.set(s,30,o)}return this.world.clearAndRebuild(this.player.position.x,this.player.position.z),this.showToast("ロードが完了しました"),!0}catch(e){return console.error("Failed to load data:",e),this.showToast("ロードに失敗しました",!0),!1}}async saveData(){if(console.log("[SaveManager] saveData started. accountId:",this.accountId,"worldId:",this.worldId),!this.accountId)return console.error("[SaveManager] Account ID is not set."),alert("[SaveManager] アカウントIDが設定されていません。"),!1;if(this.isSaving)return console.log("[SaveManager] Already saving, skip."),!1;this.isSaving=!0;try{this.showToast("セーブ中...");const t=this.world.getModifiedBlocksData(),e=this.player.getSaveData();this.onSaveCustomData&&(e.customData=this.onSaveCustomData());const n={accountId:this.accountId,worldId:this.worldId,worldData:t,playerData:e};console.log("[SaveManager] Sending payload to GAS...");const i=await fetch(ht.GAS_WEB_APP_URL,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(n)});console.log("[SaveManager] Response received, status:",i.status);const s=await i.json();if(console.log("[SaveManager] Response JSON parsed:",s),this.isSaving=!1,s.success){if(s.worldData){const o=this.world.mergeModifiedBlocksData(s.worldData);if(o.size>0)for(const r of o){const l=r.split(","),c=parseInt(l[0],10),h=parseInt(l[1],10),u=parseInt(l[2],10);this.world.updateChunkMesh(c,h,u)}}return this.showToast("セーブしました"),!0}else throw new Error(s.error||"GAS側でエラーが発生しました")}catch(t){return console.error("[SaveManager] Failed to save data:",t),alert(`[SaveManager] セーブに失敗しました:
${t.message||t}`),this.showToast("セーブに失敗しました",!0),this.isSaving=!1,!1}}async syncWorldData(){try{this.showToast("ワールドデータを同期中...");const t=this.accountId||"anonymous",n=await(await fetch(`${ht.GAS_WEB_APP_URL}?accountId=${encodeURIComponent(t)}&worldId=${encodeURIComponent(this.worldId)}`)).json();if(n.worldData){const i=this.world.mergeModifiedBlocksData(n.worldData);if(i.size>0){for(const s of i){const o=s.split(","),r=parseInt(o[0],10),l=parseInt(o[1],10),c=parseInt(o[2],10);this.world.updateChunkMesh(r,l,c)}this.showToast("同期が完了しました（建築物が更新されました）")}else this.showToast("すでに最新の状態です");return!0}else return this.showToast("同期データがありません"),!1}catch(t){return console.error("Failed to sync world data:",t),this.showToast("同期に失敗しました",!0),!1}}startAutoSave(t=3){this.stopAutoSave(),this.autoSaveInterval=window.setInterval(()=>{this.accountId&&this.saveData()},t*60*1e3)}stopAutoSave(){this.autoSaveInterval!==null&&(window.clearInterval(this.autoSaveInterval),this.autoSaveInterval=null)}showToast(t,e=!1){const n=document.getElementById("save-toast");n&&(n.textContent=t,n.style.backgroundColor=e?"rgba(220, 53, 69, 0.9)":"rgba(40, 167, 69, 0.9)",n.style.opacity="1",n.style.transform="translateY(0)",setTimeout(()=>{n.style.opacity="0",n.style.transform="translateY(-20px)"},3e3))}}const cy={[M.AIR]:"#000000",[M.GROUND]:"#4ade80",[M.DIRT]:"#854d0e",[M.STONE]:"#9ca3af",[M.WOOD]:"#78350f",[M.LEAVES]:"#22c55e",[M.PLANK]:"#f59e0b",[M.BRICK]:"#ef4444",[M.SAND]:"#fef08a",[M.COAL_ORE]:"#374151",[M.IRON_ORE]:"#d4d4d8",[M.GOLD_ORE]:"#fde047",[M.DIAMOND_ORE]:"#67e8f9",[M.WATER]:"#3b82f6",[M.BEDROCK]:"#111827",[M.COBBLESTONE]:"#6b7280"};class hy{homePosition=null;compassBar;homeMarker;homeDistance;mapCanvas;mapPlayerIcon;mapHomeIcon;mapRadius=64;constructor(){this.compassBar=document.getElementById("compass-bar"),this.homeMarker=document.getElementById("home-marker"),this.homeDistance=document.getElementById("home-distance"),this.mapCanvas=document.getElementById("world-map-canvas"),this.mapPlayerIcon=document.getElementById("map-player-icon"),this.mapHomeIcon=document.getElementById("map-home-icon"),this.initCompassUI()}initCompassUI(){if(!this.compassBar)return;[{label:"N (きた)",deg:0},{label:"NE (ほくとう)",deg:45,minor:!0},{label:"E (ひがし)",deg:90},{label:"SE (なんとう)",deg:135,minor:!0},{label:"S (みなみ)",deg:180},{label:"SW (なんせい)",deg:225,minor:!0},{label:"W (にし)",deg:270},{label:"NW (ほくせい)",deg:315,minor:!0},{label:"N (きた)",deg:360},{label:"NE (ほくとう)",deg:405,minor:!0},{label:"E (ひがし)",deg:450}].forEach(e=>{const n=document.createElement("div");n.className=`compass-tick ${e.minor?"minor":""}`;const i=e.deg/360*800;n.style.left=`${i}px`,n.innerHTML=`<span>${e.label}</span>`,this.compassBar.appendChild(n)})}setHome(t){this.homePosition=t.clone(),this.homeMarker&&(this.homeMarker.style.display="block"),this.homeDistance&&(this.homeDistance.style.display="block"),this.mapHomeIcon&&(this.mapHomeIcon.style.display="block")}getHome(){return this.homePosition}updateCompass(t){if(!this.compassBar)return;const e=new G(0,0,-1).applyQuaternion(t.camera.quaternion);let i=Math.atan2(e.x,-e.z)*(180/Math.PI);i<0&&(i+=360);const s=i/360*800;if(this.compassBar.style.transform=`translateX(${-s}px)`,this.homePosition&&this.homeMarker&&this.homeDistance){const o=this.homePosition.clone().sub(t.position),r=o.length();let c=Math.atan2(o.x,-o.z)*(180/Math.PI);c<0&&(c+=360);let h=c-i;h>180&&(h-=360),h<-180&&(h+=360);const u=90,d=85,m=h<-u||h>u,f=Math.max(-d,Math.min(d,h))/360*800;this.homeMarker.style.left=`calc(50% + ${f}px)`,m?(h<0?this.homeMarker.textContent="◀🏠":this.homeMarker.textContent="🏠▶",this.homeMarker.style.opacity="0.7"):(this.homeMarker.textContent="🏠",this.homeMarker.style.opacity="1"),this.homeDistance.textContent=`${Math.floor(r)}m`,this.homeDistance.style.display="block"}}getDirectionJapanese(t,e){let i=Math.atan2(e,t)*(180/Math.PI);return i<0&&(i+=360),i>=337.5||i<22.5?{name:"ひがし",arrow:"➡"}:i>=22.5&&i<67.5?{name:"なんとう",arrow:"↘"}:i>=67.5&&i<112.5?{name:"みなみ",arrow:"⬇"}:i>=112.5&&i<157.5?{name:"なんせい",arrow:"↙"}:i>=157.5&&i<202.5?{name:"にし",arrow:"⬅"}:i>=202.5&&i<247.5?{name:"ほくせい",arrow:"↖"}:i>=247.5&&i<292.5?{name:"きた",arrow:"⬆"}:{name:"ほくとう",arrow:"↗"}}renderMap(t,e){if(!this.mapCanvas)return;const n=this.mapCanvas.getContext("2d");if(!n)return;const i=this.mapRadius*2;this.mapCanvas.width=i,this.mapCanvas.height=i,n.fillStyle="#000000",n.fillRect(0,0,i,i);const s=Math.floor(e.x),o=Math.floor(e.z),r=Array.from(t.getLoadedChunks()).sort((y,v)=>y.y-v.y);for(const y of r){const v=y.x*ht.CHUNK_SIZE,_=y.z*ht.CHUNK_SIZE;for(let x=0;x<ht.CHUNK_SIZE;x++)for(let S=0;S<ht.CHUNK_SIZE;S++){const E=v+x,T=_+S,w=E-s+this.mapRadius,C=T-o+this.mapRadius;if(w>=0&&w<i&&C>=0&&C<i){let I=M.AIR;for(let z=ht.CHUNK_SIZE-1;z>=0;z--){const U=y.getBlock(x,z,S);if(U!==M.AIR&&U!==M.WATER){I=U;break}else U===M.WATER&&I===M.AIR&&(I=U)}if(I!==M.AIR){const z=cy[I]||"#555555";n.fillStyle=z,n.fillRect(w,C,1,1)}}}}if(this.mapPlayerIcon&&(this.mapPlayerIcon.style.left="50%",this.mapPlayerIcon.style.top="50%"),this.homePosition&&this.mapHomeIcon){const y=this.homePosition.x-s+this.mapRadius,v=this.homePosition.z-o+this.mapRadius,_=y/i*100,x=v/i*100,S=_<0||_>100||x<0||x>100;if(this.mapHomeIcon.style.left=`${Math.min(Math.max(_,2),98)}%`,this.mapHomeIcon.style.top=`${Math.min(Math.max(x,2),98)}%`,S){const E=this.homePosition.x-s,T=this.homePosition.z-o,w=this.getDirectionJapanese(E,T);this.mapHomeIcon.textContent=w.arrow}else this.mapHomeIcon.textContent="🏠"}const l=[],c=ht.CHUNK_SIZE,h=t.getModifiedBlocksData();if(h&&h.blocks)for(const[y,v]of Object.entries(h.blocks)){const[_,x,S]=y.split(",").map(Number);for(const[E,T]of Object.entries(v))if(T!==M.AIR){const w=parseInt(E,10),C=w%c,I=Math.floor(w%(c*c)/c),z=Math.floor(w/(c*c)),U=_*c+C,D=x*c+I,P=S*c+z;l.push(new G(U,D,P))}}const u=[],d=5,m=new Set;for(let y=0;y<l.length;y++){if(m.has(y))continue;const v=[l[y]];m.add(y);for(let _=y+1;_<l.length;_++)if(!m.has(_)){for(const x of v)if(x.distanceTo(l[_])<15){v.push(l[_]),m.add(_);break}}if(v.length>=d){const _=new G;for(const x of v)_.add(x);_.divideScalar(v.length),u.push(_)}}document.querySelectorAll(".map-building-icon").forEach(y=>y.remove());const f=document.getElementById("world-map-container");f&&u.forEach(y=>{const v=document.createElement("div");v.className="map-icon map-building-icon",v.style.color="#ffa500",v.style.textShadow="0 0 5px black";const _=y.x-s+this.mapRadius,x=y.z-o+this.mapRadius,S=_/i*100,E=x/i*100,T=S<0||S>100||E<0||E>100;if(v.style.left=`${Math.min(Math.max(S,2),98)}%`,v.style.top=`${Math.min(Math.max(E,2),98)}%`,T){const w=y.x-s,C=y.z-o,I=this.getDirectionJapanese(w,C);v.textContent=I.arrow}else v.textContent="🧱";f.appendChild(v)});const p=document.getElementById("world-map-info");if(p){const y=[];if(this.homePosition){const v=this.homePosition.x-s,_=this.homePosition.z-o,x=Math.floor(new G(v,0,_).length()),S=this.getDirectionJapanese(v,_);y.push(`🏠 登録した拠点: <b>${S.name}</b> (${x}m) ${S.arrow}`)}else y.push("🏠 登録した拠点: 未登録");u.length>0?u.forEach((v,_)=>{const x=v.x-s,S=v.z-o,E=Math.floor(new G(x,0,S).length()),T=this.getDirectionJapanese(x,S);y.push(`🧱 建てた建物 ${_+1}: <b>${T.name}</b> (${E}m) ${T.arrow}`)}):y.push("🧱 建てた建物: まだありません"),p.innerHTML=y.join("<br>")}}}class dy{accountId;characterType;homePosition;position;mesh;scene;voxelWorld;head;bodyMesh;leftArm;rightArm;leftLeg;rightLeg;nameTag;speed=2;velocityY=0;walkTimer=0;isWaiting=!1;targetDirection=new G;isGreeting=!1;constructor(t,e,n,i,s){this.accountId=t,this.characterType=e||"boy1",this.homePosition=n.clone(),this.position=n.clone(),this.scene=i,this.voxelWorld=s,this.mesh=new se,this.buildAvatar(),this.nameTag=this.createNameTag(this.accountId),this.mesh.add(this.nameTag),this.scene.add(this.mesh),this.chooseNextAction()}buildAvatar(){let t=5913896,e=33023,n=2829184,i=16767916,s=3355443,o=!1;const r=this.characterType;r==="boy1"?(t=2236962,e=3900150,n=1920728,s=1920728):r==="boy2"?(t=14251782,e=1096065,n=2042167,s=292951):r==="girl1"?(t=14362487,e=16436245,n=5195493,s=12458077,o=!0):r==="girl2"&&(t=440020,e=9133302,n=4674921,s=7153881,o=!0);const l=new Ut({color:i,roughness:.9}),c=new Ut({color:e,roughness:.9}),h=new Ut({color:i,roughness:.9}),u=new Ut({color:n,roughness:.9}),d=new Ut({color:t,roughness:.9}),m=new Ut({color:16777215,roughness:.9}),g=new Ut({color:s,roughness:.9}),f=new Ut({color:14753096,roughness:.9}),p=new Tt(.4,.4,.4);this.head=new mt(p,l),this.head.position.y=.5,this.head.castShadow=!0,this.head.receiveShadow=!0;const y=new Tt(.42,.15,.42),v=new mt(y,d);if(v.position.y=.15,this.head.add(v),o){const K=new Tt(.42,.32,.08),k=new mt(K,d);k.position.set(0,-.08,.17),k.castShadow=!0,k.receiveShadow=!0,this.head.add(k);const q=new Tt(.08,.25,.42),Y=new mt(q,d);Y.position.set(.17,-.05,0),Y.castShadow=!0,Y.receiveShadow=!0,this.head.add(Y);const et=new mt(q,d);et.position.set(-.17,-.05,0),et.castShadow=!0,et.receiveShadow=!0,this.head.add(et)}const _=new Tt(.08,.04,.01),x=new mt(_,m);x.position.set(.08,.01,-.201),this.head.add(x);const S=new Tt(.04,.04,.012),E=new mt(S,g);E.position.set(.06,.01,-.202),this.head.add(E);const T=new mt(_,m);T.position.set(-.08,.01,-.201),this.head.add(T);const w=new mt(S,g);w.position.set(-.06,.01,-.202),this.head.add(w);const C=new Tt(.12,.04,.01),I=new mt(C,f);I.position.set(0,-.09,-.201),this.head.add(I),this.mesh.add(this.head);const z=new Tt(.4,.6,.2);this.bodyMesh=new mt(z,c),this.bodyMesh.position.y=0,this.bodyMesh.castShadow=!0,this.bodyMesh.receiveShadow=!0,this.mesh.add(this.bodyMesh);const U=new Tt(.2,.6,.2);U.translate(0,-.3,0),this.leftArm=new se;const D=new mt(U,h);D.castShadow=!0,D.receiveShadow=!0,this.leftArm.add(D),this.leftArm.position.set(.3,.3,0),this.mesh.add(this.leftArm),this.rightArm=new se;const P=new mt(U,h);P.castShadow=!0,P.receiveShadow=!0,this.rightArm.add(P),this.rightArm.position.set(-.3,.3,0),this.mesh.add(this.rightArm),this.leftLeg=new se;const O=new mt(U,u);O.castShadow=!0,O.receiveShadow=!0,this.leftLeg.add(O),this.leftLeg.position.set(.1,-.3,0),this.mesh.add(this.leftLeg),this.rightLeg=new se;const N=new mt(U,u);N.castShadow=!0,N.receiveShadow=!0,this.rightLeg.add(N),this.rightLeg.position.set(-.1,-.3,0),this.mesh.add(this.rightLeg)}createNameTag(t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n&&(n.fillStyle="rgba(11, 15, 25, 0.6)",n.beginPath(),n.roundRect?n.roundRect(10,5,236,54,10):n.rect(10,5,236,54),n.fill(),n.strokeStyle="rgba(255, 255, 255, 0.1)",n.lineWidth=2,n.stroke(),n.font="bold 22px Outfit, sans-serif",n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.shadowColor="rgba(0, 0, 0, 0.5)",n.shadowBlur=4,n.fillText(t,128,32));const i=new ia(e),s=new Pc({map:i,transparent:!0,depthTest:!0}),o=new vg(s);return o.scale.set(1.6,.4,1),o.position.set(0,.95,0),o}update(t,e){const n=e.position,i=this.position.distanceTo(n),s=20;this.velocityY-=s*t,this.velocityY<-20&&(this.velocityY=-20);const o=this.position.clone();this.isGreeting=i<4,!this.isGreeting&&!this.isWaiting&&(o.x+=this.targetDirection.x*this.speed*t,o.z+=this.targetDirection.z*this.speed*t),o.y+=this.velocityY*t;const r=ht.PLAYER_HEIGHT/2,l=o.y-r,c=Math.floor(o.x),h=Math.floor(o.z),u=Math.floor(l),d=this.voxelWorld.getBlock(c,u,h);d!==M.AIR&&d!==M.WATER&&(o.y=u+1+r,this.velocityY=0);const g=Math.floor(o.y),f=this.voxelWorld.getBlock(c,g,h);if(f!==M.AIR&&f!==M.WATER){const y=this.voxelWorld.getBlock(c,g+1,h),v=this.voxelWorld.getBlock(c,g+2,h);if(y===M.AIR&&v===M.AIR){const _=f===M.BED_HEAD||f===M.BED_FOOT?.5625:1;o.y=g+_+r,this.velocityY=0}else o.x=this.position.x,o.z=this.position.z}if(this.position.copy(o),this.mesh.position.copy(this.position),this.isGreeting){const y=n.x-this.position.x,v=n.z-this.position.z,_=Math.atan2(y,v);this.mesh.rotation.y=_;const x=Math.max(-.4,Math.min(.4,(n.y-this.position.y)/i));this.head.rotation.x+=(x-this.head.rotation.x)*5*t;const S=Math.sin(performance.now()*.015)*.2-1.2;this.rightArm.rotation.x+=(S-this.rightArm.rotation.x)*5*t,this.rightArm.rotation.z+=(.2-this.rightArm.rotation.z)*5*t;const E=10*t;this.leftArm.rotation.x+=(0-this.leftArm.rotation.x)*E,this.leftArm.rotation.z+=(0-this.leftArm.rotation.z)*E,this.leftLeg.rotation.x+=(0-this.leftLeg.rotation.x)*E,this.rightLeg.rotation.x+=(0-this.rightLeg.rotation.x)*E}else if(this.head.rotation.x+=(0-this.head.rotation.x)*5*t,this.rightArm.rotation.z+=(0-this.rightArm.rotation.z)*5*t,this.walkTimer-=t,this.walkTimer<=0&&this.chooseNextAction(),this.isWaiting){const y=10*t;this.leftArm.rotation.x+=(0-this.leftArm.rotation.x)*y,this.rightArm.rotation.x+=(0-this.rightArm.rotation.x)*y,this.leftLeg.rotation.x+=(0-this.leftLeg.rotation.x)*y,this.rightLeg.rotation.x+=(0-this.rightLeg.rotation.x)*y}else{const y=Math.atan2(this.targetDirection.x,this.targetDirection.z);this.mesh.rotation.y=y;const v=performance.now()*.008,_=Math.sin(v)*.6;this.leftArm.rotation.x=_,this.rightArm.rotation.x=-_,this.leftLeg.rotation.x=-_,this.rightLeg.rotation.x=_}}chooseNextAction(){if(this.isWaiting=Math.random()<.5,this.walkTimer=3+Math.random()*5,!this.isWaiting)if(this.position.distanceTo(this.homePosition)>12)this.targetDirection.copy(this.homePosition).sub(this.position),this.targetDirection.y=0,this.targetDirection.normalize();else{const n=Math.random()*Math.PI*2;this.targetDirection.set(Math.sin(n),0,Math.cos(n)).normalize()}}destroy(){this.mesh&&this.scene.remove(this.mesh)}}class uy{playersMeta=[];activeNPCs=new Map;scene;voxelWorld;constructor(t,e){this.scene=t,this.voxelWorld=e}async fetchOtherPlayers(t,e){try{const i=await(await fetch(`${ht.GAS_WEB_APP_URL}?action=listOtherPlayers&accountId=${encodeURIComponent(t)}&worldId=${encodeURIComponent(e)}`)).json();i&&i.players&&(this.playersMeta=i.players,console.log("Loaded other players metadata:",this.playersMeta))}catch(n){console.error("Failed to fetch other players info:",n)}}update(t,e){const n=e.position;for(const i of this.playersMeta){if(!i.homePosition)continue;const s=new G(i.homePosition.x,i.homePosition.y,i.homePosition.z),o=n.distanceTo(s),r=35,l=45,c=this.activeNPCs.has(i.accountId);if(o<r&&!c){const h=new dy(i.accountId,i.characterType,s,this.scene,this.voxelWorld);this.activeNPCs.set(i.accountId,h),console.log(`NPC Spawned: ${i.accountId} at home position.`)}else if(o>l&&c){const h=this.activeNPCs.get(i.accountId);h&&(h.destroy(),this.activeNPCs.delete(i.accountId),console.log(`NPC Despawned: ${i.accountId}`))}}for(const i of this.activeNPCs.values())i.update(t,e)}clearAll(){for(const t of this.activeNPCs.values())t.destroy();this.activeNPCs.clear(),this.playersMeta=[]}}const Ge=new Sg("canvas-container");let Yi=!1,$n=0,jl=new G(-999,-999,-999),go=0,$l=!1;const Po=document.createElement("canvas");Po.width=128;Po.height=128;const Mn=Po.getContext("2d"),Bs=new ia(Po);Bs.magFilter=me;Bs.minFilter=me;const fy=new Zr({map:Bs,transparent:!0,opacity:.8,depthTest:!0,depthWrite:!1}),py=new Tt(1.01,1.01,1.01),Jn=new mt(py,fy);Jn.visible=!1;Ge.scene.add(Jn);function Zl(a){if(Mn.clearRect(0,0,128,128),a<=0){Bs.needsUpdate=!0;return}Mn.strokeStyle="rgba(0, 0, 0, 0.7)",Mn.lineWidth=2,Mn.lineCap="round",Mn.lineJoin="round";const t=Math.floor(a*40);let e=12345;const n=()=>(e=(e*9301+49297)%233280,e/233280);Mn.beginPath();for(let i=0;i<t;i++){const s=n()*128,o=n()*128,r=s+(n()-.5)*40,l=o+(n()-.5)*40;Mn.moveTo(s,o),Mn.lineTo(r,l),n()>.5&&Mn.lineTo(r+(n()-.5)*20,l+(n()-.5)*20)}Mn.stroke(),Bs.needsUpdate=!0}const Ds=new iy,Ot=new Rg(document.body),Rt=new Je(Ge.camera,new G(8,5,8),Ds,Ge.scene),Gr=new ry(Ge.scene),zn=[],Qe=[],Ti=new hy,be={[M.AIR]:0,[M.GROUND]:64,[M.DIRT]:64,[M.STONE]:64,[M.WOOD]:64,[M.LEAVES]:64,[M.PLANK]:64,[M.BRICK]:64,[M.SAND]:64,[M.COAL_ORE]:64,[M.TORCH]:64,[M.GLASS]:64,[M.DOOR_CLOSED]:64,[M.DOOR_OPEN]:0,[M.SWORD]:1,[M.STAIRS]:64,[M.FENCE]:64,[M.BED_HEAD]:64,[M.BED_FOOT]:0,[M.FURNACE]:64,[M.CHEST]:64,[M.WATER]:64,[M.DIAMOND_SWORD]:1,[M.HAMMER]:1,[M.BEDROCK]:0,[M.IRON_ORE]:0,[M.GOLD_ORE]:0,[M.DIAMOND_ORE]:0,[M.STICK]:0,[M.IRON_INGOT]:0,[M.GOLD_INGOT]:0,[M.DIAMOND]:0,[M.COBBLESTONE]:0,[M.COAL]:0,[M.APPLE]:0,[M.WOODEN_PICKAXE]:0,[M.STONE_PICKAXE]:0,[M.IRON_PICKAXE]:0,[M.DIAMOND_PICKAXE]:0,[M.WOODEN_AXE]:0,[M.STONE_AXE]:0,[M.IRON_AXE]:0,[M.DIAMOND_AXE]:0,[M.WOODEN_SHOVEL]:0,[M.STONE_SHOVEL]:0,[M.IRON_SHOVEL]:0,[M.DIAMOND_SHOVEL]:0,[M.LEATHER_ARMOR_SET]:0,[M.IRON_ARMOR_SET]:0,[M.DIAMOND_ARMOR_SET]:0},my=new sy;my.updateInstructionsUI();window.addEventListener("request-rescue",()=>{Rt.rescue(),Ot.requestLock()});const Jl=document.getElementById("respawn-btn");Jl&&Jl.addEventListener("click",()=>{Rt.respawn(),Ot.requestLock(),Ue.init(),Ao||(Ao=!0,requestAnimationFrame(aa))});let ie=M.GROUND,ii=0;const nn=[[M.GROUND,M.DIRT,M.STONE,M.WOOD,M.LEAVES,M.PLANK,M.BRICK,M.SAND,M.TORCH],[M.GLASS,M.DOOR_CLOSED,M.COAL_ORE,M.DIAMOND_SWORD,M.HAMMER,M.STAIRS,M.FENCE,M.BED_HEAD,M.FURNACE]];let sn=0,Hn=nn[sn];const qc=document.querySelectorAll(".hotbar-slot"),Ql=document.getElementById("hotbar-label");function ks(a){switch(a){case M.GROUND:return"slot-grass";case M.DIRT:return"slot-dirt";case M.STONE:return"slot-stone";case M.WOOD:return"slot-wood";case M.LEAVES:return"slot-leaves";case M.PLANK:return"slot-plank";case M.BRICK:return"slot-brick";case M.SAND:return"slot-sand";case M.TORCH:return"slot-torch";case M.GLASS:return"slot-glass";case M.DOOR_CLOSED:return"slot-door";case M.COAL_ORE:return"slot-coal";case M.STAIRS:return"slot-stairs";case M.FENCE:return"slot-fence";case M.BED_HEAD:return"slot-bed";case M.FURNACE:return"slot-furnace";case M.CHEST:return"slot-chest";case M.WATER:return"slot-water";case M.SWORD:return"slot-sword";case M.DIAMOND_SWORD:return"slot-diamond-sword";case M.HAMMER:return"slot-hammer";default:return""}}function pn(){qc.forEach((t,e)=>{const n=Hn[e];t.setAttribute("data-block",n.toString());const i=t.querySelector(".slot-icon");if(i){i.className="slot-icon";const o=ks(n);o&&i.classList.add(o)}const s=document.getElementById(`count-${e}`);s&&(s.textContent=(be[n]||0).toString())});const a=document.getElementById("hotbar-page-indicator");a&&(a.textContent=(sn+1).toString()),So(ii)}pn();function So(a){a<0||a>=Hn.length||(ii=a,ie=Hn[a],qc.forEach((t,e)=>{e===a?t.classList.add("active"):t.classList.remove("active")}),Ql&&(Ql.textContent=An[ie].name))}const It=new Tg(Ge.scene);Rt.setWorld(It);const jt=new ly(Rt,It),_o=new uy(Ge.scene,It);jt.onSaveCustomData=()=>{const a=Ti.getHome();return{inventory:{blocks:be,hotbarPages:nn,activePage:sn,activeSlotIndex:ii},homePosition:a?{x:a.x,y:a.y,z:a.z}:null}};jt.onLoadCustomData=a=>{if(a){if(a.inventory){const t=a.inventory;t.blocks&&Object.assign(be,t.blocks),t.hotbarPages&&(nn[0]=[...t.hotbarPages[0]],nn[1]=[...t.hotbarPages[1]]),typeof t.activePage=="number"&&(sn=t.activePage,Hn=nn[sn]),typeof t.activeSlotIndex=="number"&&(ii=t.activeSlotIndex),pn()}a.homePosition&&Ti.setHome(new G(a.homePosition.x,a.homePosition.y,a.homePosition.z))}};jt.onConflictDetected=(a,t)=>new Promise(e=>{const n=document.getElementById("conflict-modal"),i=document.getElementById("conflict-local-time"),s=document.getElementById("conflict-cloud-time"),o=document.getElementById("conflict-use-local-btn"),r=document.getElementById("conflict-use-cloud-btn"),l=document.getElementById("conflict-cancel-btn");if(!n||!i||!s||!o||!r||!l){e("cloud");return}const c=g=>{if(!g)return"データなし";const f=new Date(g);return`${f.getFullYear()}/${(f.getMonth()+1).toString().padStart(2,"0")}/${f.getDate().toString().padStart(2,"0")} ${f.getHours().toString().padStart(2,"0")}:${f.getMinutes().toString().padStart(2,"0")}:${f.getSeconds().toString().padStart(2,"0")}`};i.textContent=c(a),s.textContent=c(t),document.exitPointerLock(),n.style.display="flex";const h=g=>{n.style.display="none",o.removeEventListener("click",u),r.removeEventListener("click",d),l.removeEventListener("click",m),e(g)},u=()=>h("local"),d=()=>h("cloud"),m=()=>h("cancel");o.addEventListener("click",u),r.addEventListener("click",d),l.addEventListener("click",m)});const gy=Ay();gy?It.clearAndRebuild(Rt.position.x,Rt.position.z):It.generateWorldAround(Rt.position.x,Rt.position.z);const re=document.getElementById("account-id-input"),Be=document.getElementById("world-id-input");function Oo(a){const t=document.getElementById("account-id-list");if(!t)return;let e=[];try{const i=localStorage.getItem("maikurafu_account_ids");i&&(e=JSON.parse(i))}catch{}a&&!e.includes(a)&&(e.push(a),localStorage.setItem("maikurafu_account_ids",JSON.stringify(e)));const n=i=>{t.innerHTML="",i.forEach(s=>{const o=document.createElement("option");o.value=s,t.appendChild(o)})};n(e);{const i=Be&&Be.value.trim()||"shared_world_1";fetch(`${ht.GAS_WEB_APP_URL}?action=listAccounts&worldId=${encodeURIComponent(i)}`).then(s=>s.json()).then(s=>{if(s.accounts&&Array.isArray(s.accounts)){let o=!1;s.accounts.forEach(r=>{e.includes(r)||(e.push(r),o=!0)}),o&&(localStorage.setItem("maikurafu_account_ids",JSON.stringify(e)),n(e))}}).catch(s=>console.warn("Failed to fetch accounts from server:",s))}}Oo();if(re){const a=localStorage.getItem("maikurafu_last_account_id");a&&(re.value=a)}const Is=new wg,Vr=6;function vy(){const a=document.getElementById("hp-container");if(a){const t=ht.PLAYER_MAX_HP,e=Rt.hp;let n="";for(let i=1;i<=t;i++)n+=i<=e?"❤":"🖤";a.textContent=n}}function Eo(a,t,e){if(zn.length>=ht.MAX_DROPPED_ITEMS){const i=zn.shift();i&&i.destroy()}const n=new yi(a,t,Ge.scene,Ds.world,e);zn.push(n)}const Es=new G,vo=new G;let br=0,Sr=0,tc=0;function aa(a){requestAnimationFrame(aa);const t=Math.min((a-tc)/1e3,.1);if(tc=a,go>0&&(go-=t),Ds.updateBlockBodies(Rt.position,It),Ds.step(t),Rt.update(Ot,t,It,ie),_o.update(t,Rt),Ti.updateCompass({position:Rt.position,camera:Ge.camera}),Gr.update(t,Rt.position),Ot.consumeJustPressed("Tab")&&(sn=1-sn,Hn=nn[sn],pn()),Ot.consumeJustPressed(Ae.getConfig().keyRegisterHome)&&Ot.isLocked){Ti.setHome(Rt.position);const s=document.createElement("div");s.style.position="absolute",s.style.top="100px",s.style.left="50%",s.style.transform="translateX(-50%)",s.style.color="#32cd32",s.style.fontSize="1.5rem",s.style.fontWeight="bold",s.style.textShadow="0 2px 4px rgba(0,0,0,0.8)",s.style.zIndex="50",s.textContent="🏠 ここを拠点に設定しました",document.body.appendChild(s),setTimeout(()=>s.remove(),3e3)}if(Ot.consumeJustPressed("KeyQ")&&be[ie]>0){be[ie]--,pn();const s=ht.PLAYER_HEIGHT/2-.2;vo.copy(Rt.position),vo.y+=s,Es.set(0,0,-1).applyQuaternion(Ge.camera.quaternion),vo.addScaledVector(Es,.8),Eo(ie,vo);const o=zn[zn.length-1];o&&o.body.velocity.set(Es.x*6+(Math.random()-.5)*.5,Es.y*6+2,Es.z*6+(Math.random()-.5)*.5)}for(let s=zn.length-1;s>=0;s--){const o=zn[s],r=o.update(t,Rt.position);o.mesh.position.distanceTo(Rt.position)<1.2?(be[o.blockType]=(be[o.blockType]||0)+1,pn(),Ue.playPickup(),o.destroy(),zn.splice(s,1)):r&&zn.splice(s,1)}if(Gr.isNight()){if(br+=t,br>2&&(br=0,Qe.length<ht.MAX_MOBS)){const s=ht.MOB_SPAWN_RADIUS,o=Math.random()*Math.PI*2,r=12+Math.random()*(s-12),l=Math.floor(Rt.position.x+Math.cos(o)*r),c=Math.floor(Rt.position.z+Math.sin(o)*r);let h=0,u=!1;for(let d=15;d>=-10;d--)if(It.getBlock(l,d,c)!==M.AIR){h=d+1,u=!0;break}if(u){const d=new Le(new G(l,h,c),Ge.scene,Ds.world);Qe.push(d)}}}else for(let s=Qe.length-1;s>=0;s--)Qe[s].destroy(),Qe.splice(s,1);for(let s=Qe.length-1;s>=0;s--)Qe[s].update(t,Rt)&&Qe.splice(s,1);vy(),Ot.isLocked&&It.generateWorldAround(Rt.position.x,Rt.position.z),Sr+=t,Sr>5&&(Sr=0,la());const e=Ae.getConfig();Ot.consumeJustPressed(e.keyPlaceBlock)&&Xc(!1,!0);const n=e.invertClicks?Ot.isRightClickDown:Ot.isLeftClickDown;let i=n;if(e.easyMode&&(i=n&&!$l&&go<=0),$l=n,i&&Ot.isLocked){Rt.swing(),Is.setFromCamera(new kt(0,0),Rt.camera);const s=It.getChunkMeshes(),o=Is.intersectObjects(s);let r=!1;if(o.length>0&&o[0].distance<=Vr){const l=o[0],c=l.point,h=l.face?.normal;if(h){const u=c.clone().sub(h.clone().multiplyScalar(.1)),d=Math.floor(u.x),m=Math.floor(u.y),g=Math.floor(u.z),f=It.getBlock(d,m,g);if(f!==M.AIR&&f!==M.BEDROCK){r=!0;const p=new G(d,m,g);if(!Yi||!jl.equals(p))Yi=!0,jl.copy(p),$n=0,Jn.position.set(d+.5,m+.5,g+.5),Jn.visible=!0,Zl(0),e.easyMode&&(ec(f,d,m,g),Yi=!1,Jn.visible=!1,$n=0,go=.25);else{const y=An[f],v=An[ie]||{};let _=y.hardness||1,x=1;const S=!y.requiredToolCategory||y.requiredToolCategory==="none"||v.toolCategory===y.requiredToolCategory;S&&v.isTool?x*=v.speedMultiplier||1:!S&&y.requiredToolCategory&&y.requiredToolCategory!=="none"&&(x*=.1);const E=_*1.5/x;$n+=t/E,Zl($n),$n>=1&&(ec(f,d,m,g),Yi=!1,Jn.visible=!1,$n=0)}}}}r||(Yi=!1,Jn.visible=!1,$n=0)}else Yi=!1,Jn.visible=!1,$n=0;Ge.render()}function ec(a,t,e,n){if(a!==M.BEDROCK){if(It.setBlock(t,e,n,M.AIR),Ue.playBreak(a),a===M.DOOR_CLOSED||a===M.DOOR_OPEN){const i=It.getBlock(t,e+1,n);(i===M.DOOR_CLOSED||i===M.DOOR_OPEN)&&It.setBlock(t,e+1,n,M.AIR);const s=It.getBlock(t,e-1,n);(s===M.DOOR_CLOSED||s===M.DOOR_OPEN)&&(It.setBlock(t,e-1,n,M.AIR),It.removeDoorOrientation(t,e-1,n)),It.removeDoorOrientation(t,e,n)}if(a===M.BED_HEAD||a===M.BED_FOOT){const i=a===M.BED_HEAD?M.BED_FOOT:M.BED_HEAD,s=[[t+1,n],[t-1,n],[t,n+1],[t,n-1]];for(const[o,r]of s)if(It.getBlock(o,e,r)===i){It.setBlock(o,e,r,M.AIR);break}Eo(M.BED_HEAD,new G(t+.5,e+.5,n+.5),Rt.position)}else{const i=An[a],s=An[ie],o=i.minToolTier||0;if((s.isTool&&s.toolTier||0)>=o&&a!==M.DOOR_OPEN){let l=i.drops??a;a===M.LEAVES&&(Math.random()<.05?l=M.APPLE:l=M.AIR),l!==M.AIR&&Eo(l,new G(t+.5,e+.5,n+.5),Rt.position)}}}}function Xc(a,t){if(!a&&!t)return;Is.setFromCamera(new kt(0,0),Rt.camera);const e=It.getChunkMeshes(),n=Is.intersectObjects(e);if(n.length>0){const i=n[0];if(i.distance>Vr)return;const s=i.point,o=i.face?.normal;if(!o)return;if(a){Rt.swing();const r=[];Qe.forEach(c=>{c.mesh.traverse(h=>{h instanceof mt&&r.push(h)})});const l=Is.intersectObjects(r);if(l.length>0&&l[0].distance<Vr){const c=l[0].object;let h=null;for(const u of Qe){let d=!1;if(u.mesh.traverse(m=>{m===c&&(d=!0)}),d){h=u;break}}if(h){const u=new G(0,0,-1).applyQuaternion(Ge.camera.quaternion);u.y=.2,u.normalize();const d=ie===M.DIAMOND_SWORD?6:ie===M.HAMMER?5:ie===M.SWORD?4:2;if(h.takeDamage(d,u)){const g=Math.random()<.4?M.COAL_ORE:M.STONE;Eo(g,new G(h.body.position.x,h.body.position.y,h.body.position.z),Rt.position);const f=Qe.indexOf(h);f>-1&&Qe.splice(f,1)}return}}}else if(t){if(ie===M.SWORD||ie===M.DIAMOND_SWORD||ie===M.HAMMER)return;const r=s.clone().sub(o.clone().multiplyScalar(.1)),l=Math.floor(r.x),c=Math.floor(r.y),h=Math.floor(r.z),u=It.getBlock(l,c,h);if(u===M.DOOR_CLOSED){It.setBlock(l,c,h,M.DOOR_OPEN),It.getBlock(l,c+1,h)===M.DOOR_CLOSED&&It.setBlock(l,c+1,h,M.DOOR_OPEN),Ue.playPlace(M.DOOR_OPEN);return}else if(u===M.DOOR_OPEN){It.setBlock(l,c,h,M.DOOR_CLOSED),It.getBlock(l,c+1,h)===M.DOOR_OPEN&&It.setBlock(l,c+1,h,M.DOOR_CLOSED),Ue.playPlace(M.DOOR_CLOSED);return}if(be[ie]<=0)return;const d=s.clone().add(o.clone().multiplyScalar(.1)),m=Math.floor(d.x),g=Math.floor(d.y),f=Math.floor(d.z),p=ht.PLAYER_HEIGHT/2,y=Math.floor(Rt.position.x),v=Math.floor(Rt.position.y-p),_=Math.floor(Rt.position.z),x=m===y&&f===_&&(g===v||g===v+1),S=m===y&&f===_&&g===v,E=m===y&&f===_&&g===v+1,T=ie===M.TORCH,w=ie===M.DOOR_CLOSED,C=ie===M.BED_HEAD;if(T||!x||S||E){if(w){It.setBlock(m,g,f,M.DOOR_CLOSED);const I=Rt.getYaw(),U=Math.abs(Math.sin(I))<.707?"NS":"EW";It.setDoorOrientation(m,g,f,U),It.getBlock(m,g+1,f)===M.AIR&&(It.setBlock(m,g+1,f,M.DOOR_CLOSED),It.setDoorOrientation(m,g+1,f,U)),Ue.playPlace(ie),be[ie]--,pn()}else if(C){It.setBlock(m,g,f,M.BED_HEAD);const I=Rt.getYaw();let z=0,U=0;const D=-Math.sin(I),P=-Math.cos(I);Math.abs(D)>Math.abs(P)?z=Math.sign(D):U=Math.sign(P);const O=m+z,N=f+U;It.getBlock(O,g,N)===M.AIR&&It.setBlock(O,g,N,M.BED_FOOT),Ue.playPlace(ie),be[M.BED_HEAD]--,pn()}else It.setBlock(m,g,f,ie),Ue.playPlace(ie),be[ie]--,pn();S&&(Rt.body.position.y=g+1+p+.05,Rt.position.y=Rt.body.position.y,Rt.body.velocity.y<0&&(Rt.body.velocity.y=0))}}}}window.addEventListener("keydown",a=>{if(document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement)return;const t=Ae.getConfig();if(a.code==="Escape"){let e=!1;const n=document.getElementById("inventory-modal");n&&n.style.display==="flex"&&(Wr(),e=!0);const s=document.getElementById("crafting-modal"),o=s&&s.style.display==="flex";!e&&o&&(qr(),e=!0);const r=document.getElementById("manual-modal"),l=r&&r.style.display==="flex";!e&&l&&(Xr(),e=!0);const c=document.getElementById("world-map-modal"),h=c&&c.style.display==="flex";!e&&h&&(oc(),e=!0);const u=document.getElementById("config-modal"),d=u&&u.style.display==="flex";!e&&d&&(u.style.display="none",Ot.lastModalCloseTime=performance.now(),Ot.requestLock(),e=!0),e&&(a.preventDefault(),Ot.consumeJustPressed("Escape"))}if(a.code===t.keyOpenInventory){const e=document.getElementById("inventory-modal");e&&e.style.display==="flex"?(Wr(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenInventory)):Ot.isLocked&&(My(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenInventory))}if(a.code===t.keyOpenCrafting){const e=document.getElementById("crafting-modal");e&&e.style.display==="flex"?(qr(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenCrafting)):Ot.isLocked&&(wy(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenCrafting))}if(a.code===t.keyOpenManual){const e=document.getElementById("manual-modal");e&&e.style.display==="flex"?(Xr(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenManual)):Ot.isLocked&&(by(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenManual))}if(a.code===t.keyOpenMap){const e=document.getElementById("world-map-modal");e&&e.style.display==="flex"?(oc(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenMap)):Ot.isLocked&&(Sy(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenMap))}});document.addEventListener("pointerlockerror",()=>{const a=document.getElementById("menu-overlay"),t=document.getElementById("inventory-modal"),e=document.getElementById("crafting-modal"),n=document.getElementById("manual-modal"),i=document.getElementById("world-map-modal"),s=t&&t.style.display==="flex",o=e&&e.style.display==="flex",r=n&&n.style.display==="flex",l=i&&i.style.display==="flex";!s&&!o&&!r&&!l&&a&&(a.style.display="flex",a.style.opacity="1")});window.addEventListener("mousedown",a=>{if(!Ot.isLocked)return;const t=Ae.getConfig(),e=a.button===0,n=a.button===2,i=t.invertClicks?n:e,s=t.invertClicks?e:n;Xc(i,s)});window.addEventListener("contextmenu",a=>{a.preventDefault()});const Hr=document.querySelectorAll(".char-select-btn"),yy=Ae.getConfig().characterType||"boy1";Hr.forEach(a=>{a.getAttribute("data-char")===yy?a.classList.add("active"):a.classList.remove("active")});Hr.forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-char");t&&(Hr.forEach(e=>e.classList.remove("active")),a.classList.add("active"),Ae.save({characterType:t}),Rt.changeCharacter(t))})});const Zn=document.getElementById("start-btn"),_y=document.getElementById("menu-overlay");let Ao=!1;if(Zn&&_y){Zn.addEventListener("click",async()=>{if(Be&&Be.value.trim()!==""&&jt.setWorldId(Be.value.trim()),re&&re.value.trim()!==""){const e=re.value.trim();if(jt.setAccountId(e),console.log("[main.ts] startBtn: Login with input account ID:",e),alert("[main.ts] ログイン成功 (入力): "+e),Oo(e),localStorage.setItem("maikurafu_last_account_id",e),Zn.textContent="データをロード中...",Zn.setAttribute("disabled","true"),!await jt.loadData()){Zn.textContent="ゲームスタート",Zn.removeAttribute("disabled");return}Zn.textContent="ゲームスタート",Zn.removeAttribute("disabled"),jt.startAutoSave(3);const i=Be&&Be.value.trim()||"shared_world_1";_o.fetchOtherPlayers(e,i)}else{const e=localStorage.getItem("maikurafu_last_account_id");if(e&&e.trim()!==""){jt.setAccountId(e),console.log("[main.ts] startBtn: Login with lastAccountId:",e),alert("[main.ts] ログイン成功 (LocalStorage自動引き継ぎ): "+e),jt.startAutoSave(3),jt.saveData().catch(i=>console.error("Initial auto cloud save failed:",i));const n=Be&&Be.value.trim()||"shared_world_1";_o.fetchOtherPlayers(e,n)}else jt.setAccountId(""),console.log("[main.ts] startBtn: Login as guest (offline mode)."),alert("[main.ts] オフラインモードでログインしました。"),jt.stopAutoSave(),_o.clearAll()}Ot.requestLock(),Ue.init(),Ao||(Ao=!0,requestAnimationFrame(aa))});const a=document.getElementById("hotbar"),t=document.getElementById("hud");document.addEventListener("pointerlockchange",()=>{const e=document.pointerLockElement;if(console.log("[main.ts] pointerlockchange fired. pointerLockElement:",e?e.tagName:"null"),alert("[main.ts] pointerlockchange発生: pointerLockElement = "+(e?e.tagName:"null")),document.pointerLockElement===document.body)a&&(a.style.display="flex"),t&&(t.style.display="block"),ti&&(ti.style.display="none");else if(!(ti&&ti.style.display==="flex")){a&&(a.style.display="none"),t&&(t.style.display="none"),la();const i=jt.getAccountId();console.log("[main.ts] pointerlockchange: Esc detected. activeAccountId:",i),i?jt.saveData().catch(s=>console.error("Cloud save failed:",s)):console.log("[main.ts] pointerlockchange: Cloud save skipped (no active account ID).")}})}window.addEventListener("keydown",a=>{if(Ot.isLocked&&a.code.startsWith("Digit")){const t=parseInt(a.code.substring(5));t>=1&&t<=9&&So(t-1)}});window.addEventListener("wheel",a=>{if(Ot.isLocked){if(a.deltaY>0){const t=(ii+1)%Hn.length;So(t)}else if(a.deltaY<0){const t=(ii-1+Hn.length)%Hn.length;So(t)}}},{passive:!0});window.addEventListener("config-changed",()=>{const a=Ae.getConfig();Ge.renderer.shadowMap.enabled=a.enableShadows,Gr.setShadowsEnabled(a.enableShadows),Ge.scene.traverse(t=>{t instanceof mt&&t.material&&(Array.isArray(t.material)?t.material.forEach(e=>{e.needsUpdate=!0}):t.material.needsUpdate=!0)})});const ti=document.getElementById("inventory-modal"),Er=document.getElementById("inventory-item-list"),Ar=document.getElementById("inventory-hotbar-slots"),nc=document.getElementById("inventory-close-btn");let zs=null;const xy=[M.GROUND,M.DIRT,M.STONE,M.WOOD,M.LEAVES,M.PLANK,M.BRICK,M.SAND,M.COAL_ORE,M.TORCH,M.GLASS,M.DOOR_CLOSED,M.STAIRS,M.SWORD,M.FENCE,M.BED_HEAD,M.FURNACE,M.CHEST,M.WATER,M.DIAMOND_SWORD,M.HAMMER,M.BEDROCK,M.IRON_ORE,M.GOLD_ORE,M.DIAMOND_ORE,M.STICK,M.IRON_INGOT,M.GOLD_INGOT,M.DIAMOND,M.COBBLESTONE,M.COAL,M.APPLE,M.WOODEN_PICKAXE,M.STONE_PICKAXE,M.IRON_PICKAXE,M.DIAMOND_PICKAXE,M.WOODEN_AXE,M.STONE_AXE,M.IRON_AXE,M.DIAMOND_AXE,M.WOODEN_SHOVEL,M.STONE_SHOVEL,M.IRON_SHOVEL,M.DIAMOND_SHOVEL,M.LEATHER_ARMOR_SET,M.IRON_ARMOR_SET,M.DIAMOND_ARMOR_SET];function Kc(){const a=Rt.armorType;document.querySelectorAll(".armor-btn").forEach(e=>{e.getAttribute("data-armor")===a?e.classList.add("active"):e.classList.remove("active")})}function My(){ti&&(document.exitPointerLock(),ti.style.display="flex",zs=null,jc(),$c(),Kc())}function Wr(){ti&&(ti.style.display="none",Ot.lastModalCloseTime=performance.now(),Ot.requestLock())}nc&&nc.addEventListener("click",Wr);const Co=document.getElementById("crafting-modal"),Cr=document.getElementById("recipe-list"),ic=document.getElementById("crafting-close-btn");function wy(){Co&&(document.exitPointerLock(),Co.style.display="flex",Yc())}function qr(){Co&&(Co.style.display="none",Ot.lastModalCloseTime=performance.now(),Ot.requestLock())}ic&&ic.addEventListener("click",qr);const To=document.getElementById("manual-modal"),sc=document.getElementById("manual-close-btn"),wn=document.getElementById("manual-toggle-kids-btn"),Tr=document.getElementById("manual-content"),Rr=document.getElementById("manual-content-kids");let Lr=!1;function by(){To&&(document.exitPointerLock(),To.style.display="flex")}function Xr(){To&&(To.style.display="none",Ot.lastModalCloseTime=performance.now(),Ot.requestLock())}sc&&sc.addEventListener("click",Xr);const Ro=document.getElementById("world-map-modal");function Sy(){Ro&&(document.exitPointerLock(),Ro.style.display="flex",Ti.renderMap(It,Rt.position))}function oc(){Ro&&(Ro.style.display="none",Ot.lastModalCloseTime=performance.now(),Ot.requestLock())}wn&&Tr&&Rr&&wn.addEventListener("click",()=>{Lr=!Lr,Lr?(Tr.style.display="none",Rr.style.display="block",wn.textContent="もとの文字にもどす",wn.style.backgroundColor="rgba(139, 92, 246, 0.2)",wn.style.borderColor="rgba(139, 92, 246, 0.5)",wn.style.color="#a78bfa"):(Tr.style.display="block",Rr.style.display="none",wn.textContent="ひらがなモードにする",wn.style.backgroundColor="rgba(59, 130, 246, 0.2)",wn.style.borderColor="rgba(59, 130, 246, 0.5)",wn.style.color="#60a5fa")});function Yc(){Cr&&(Cr.innerHTML="",oy.forEach(a=>{const t=a.inputs.every(o=>(be[o.type]||0)>=o.count),e=document.createElement("div");e.className="recipe-item";const n=document.createElement("div");n.className="recipe-output",n.innerHTML=`<div class="slot-icon ${ks(a.output.type)}"></div> <span>${An[a.output.type].name} x${a.output.count}</span>`;const i=document.createElement("div");i.className="recipe-inputs",a.inputs.forEach(o=>{const r=be[o.type]||0,l=r>=o.count,c=document.createElement("div");c.className=`recipe-input-item ${l?"sufficient":"lacking"}`,c.innerHTML=`<div class="slot-icon ${ks(o.type)}" style="width:24px;height:24px;"></div> <span>${r}/${o.count}</span>`,i.appendChild(c)});const s=document.createElement("button");s.className="craft-btn",s.textContent="作成",s.disabled=!t,s.addEventListener("click",()=>{s.disabled||(a.inputs.forEach(o=>{be[o.type]-=o.count}),be[a.output.type]=(be[a.output.type]||0)+a.output.count,Ue.playPlace(a.output.type),pn(),Yc())}),e.appendChild(n),e.appendChild(i),e.appendChild(s),Cr.appendChild(e)}))}const Ey=document.querySelectorAll(".armor-btn");Ey.forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-armor");t&&(Rt.setArmor(t),Kc())})});function jc(){Er&&(Er.innerHTML="",xy.forEach(a=>{const t=An[a],e=document.createElement("div");e.className="inventory-item",zs===a&&e.classList.add("selected");const n=document.createElement("div");n.className=`slot-icon ${ks(a)}`,e.appendChild(n);const i=document.createElement("div");i.className="item-name",i.textContent=t.name,e.appendChild(i),e.addEventListener("click",()=>{zs=a,jc()}),Er.appendChild(e)}))}function $c(){Ar&&(Ar.innerHTML="",nn.forEach((a,t)=>{a.forEach((e,n)=>{const i=document.createElement("div");i.className="inventory-hotbar-slot",t===sn&&(i.style.borderColor="rgba(255, 255, 255, 0.4)",i.style.background="rgba(255, 255, 255, 0.05)");const s=document.createElement("div");s.className=`slot-icon ${ks(e)}`,i.appendChild(s);const o=document.createElement("div");o.className="slot-num",o.textContent=(n+1).toString(),i.appendChild(o),i.addEventListener("click",()=>{zs!==null&&(nn[t][n]=zs,pn(),$c())}),Ar.appendChild(i)})}))}function Ay(){const a=localStorage.getItem("maikurafu_autosave");if(!a)return!1;try{const t=JSON.parse(a);if(t.player&&Rt.loadSaveData(t.player),t.inventory){const e=t.inventory;e.blocks&&Object.assign(be,e.blocks),e.hotbarPages&&(nn[0]=[...e.hotbarPages[0]],nn[1]=[...e.hotbarPages[1]]),typeof e.activePage=="number"&&(sn=e.activePage,Hn=nn[sn]),typeof e.activeSlotIndex=="number"&&(ii=e.activeSlotIndex),pn()}return t.homePosition&&Ti.setHome(new G(t.homePosition.x,t.homePosition.y,t.homePosition.z)),t.world&&It.setModifiedBlocksData(t.world),console.log("Game auto-saved state successfully loaded from localStorage."),!0}catch(t){return console.warn("Failed to parse autosave data:",t),!1}}function la(){const a=Ti.getHome(),t={version:"1.0.0",timestamp:Date.now(),player:Rt.getSaveData(),inventory:{blocks:be,hotbarPages:nn,activePage:sn,activeSlotIndex:ii},homePosition:a?{x:a.x,y:a.y,z:a.z}:null,world:It.getModifiedBlocksData()};localStorage.setItem("maikurafu_autosave",JSON.stringify(t)),console.log("Game auto-saved to localStorage.")}const di=document.getElementById("cloud-save-btn"),ui=document.getElementById("cloud-load-btn");di&&di.addEventListener("click",async()=>{alert('[main.ts] cloudSaveBtn clicked! input_val: "'+(re?re.value:"null")+'" getAccountId: "'+jt.getAccountId()+'"');let a=re?re.value.trim():"";if(a===""&&(a=jt.getAccountId()||"",a!==""&&re&&(re.value=a)),a!==""){jt.setAccountId(a),Oo(a),Be&&jt.setWorldId(Be.value.trim()),la();const t=di.textContent;di.textContent="セーブ中...",di.setAttribute("disabled","true"),await jt.saveData(),di.textContent=t,di.removeAttribute("disabled")}else alert("アカウントIDを入力してください")});ui&&ui.addEventListener("click",async()=>{alert('[main.ts] cloudLoadBtn clicked! input_val: "'+(re?re.value:"null")+'" getAccountId: "'+jt.getAccountId()+'"');let a=re?re.value.trim():"";if(a===""&&(a=jt.getAccountId()||"",a!==""&&re&&(re.value=a)),a!==""){jt.setAccountId(a),Oo(a),Be&&jt.setWorldId(Be.value.trim());const t=ui.textContent;ui.textContent="ロード中...",ui.setAttribute("disabled","true"),await jt.loadData(),ui.textContent=t,ui.removeAttribute("disabled")}else alert("アカウントIDを入力してください")});const fi=document.getElementById("cloud-sync-btn");fi&&fi.addEventListener("click",async()=>{alert('[main.ts] cloudSyncBtn clicked! input_val: "'+(re?re.value:"null")+'" getAccountId: "'+jt.getAccountId()+'"'),Be&&jt.setWorldId(Be.value.trim());let a=re?re.value.trim():"";a===""&&(a=jt.getAccountId()||"",a!==""&&re&&(re.value=a)),a!==""&&jt.setAccountId(a);const t=fi.textContent;fi.textContent="同期中...",fi.setAttribute("disabled","true"),await jt.syncWorldData(),fi.textContent=t,fi.removeAttribute("disabled")});

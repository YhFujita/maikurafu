(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ir="150",kc=0,jr=1,zc=2,Hl=1,Wl=2,ms=3,Zn=0,Xe=1,zn=2,$n=0,Wi=1,$r=2,Zr=3,Jr=4,Fc=5,Gi=100,Uc=101,Gc=102,Qr=103,ta=104,Vc=200,Hc=201,Wc=202,qc=203,ql=204,Xl=205,Xc=206,Kc=207,Yc=208,jc=209,$c=210,Zc=0,Jc=1,Qc=2,gr=3,th=4,eh=5,nh=6,ih=7,Kl=0,sh=1,oh=2,Fn=0,rh=1,ah=2,lh=3,ch=4,hh=5,Yl=300,Ki=301,Yi=302,vr=303,_r=304,go=306,yr=1e3,We=1001,xr=1002,ue=1003,ea=1004,Eo=1005,Je=1006,uh=1007,Ss=1008,_i=1009,dh=1010,fh=1011,jl=1012,ph=1013,mi=1014,gi=1015,ws=1016,mh=1017,gh=1018,qi=1020,vh=1021,ln=1023,_h=1024,yh=1025,vi=1026,ji=1027,xh=1028,Mh=1029,bh=1030,Sh=1031,wh=1033,Co=33776,Ao=33777,To=33778,Ro=33779,na=35840,ia=35841,sa=35842,oa=35843,Eh=36196,ra=37492,aa=37496,la=37808,ca=37809,ha=37810,ua=37811,da=37812,fa=37813,pa=37814,ma=37815,ga=37816,va=37817,_a=37818,ya=37819,xa=37820,Ma=37821,Lo=36492,Ch=36283,ba=36284,Sa=36285,wa=36286,yi=3e3,te=3001,Ah=3200,Th=3201,$l=0,Rh=1,Mn="srgb",Es="srgb-linear",Zl="display-p3",Do=7680,Lh=519,Ea=35044,Ca="300 es",Mr=1035;class Qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Aa=1234567;const _s=Math.PI/180,ro=180/Math.PI;function ts(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[a&255]+Ee[a>>8&255]+Ee[a>>16&255]+Ee[a>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Be(a,t,e){return Math.max(t,Math.min(e,a))}function Pr(a,t){return(a%t+t)%t}function Dh(a,t,e,n,i){return n+(a-t)*(i-n)/(e-t)}function Ih(a,t,e){return a!==t?(e-a)/(t-a):0}function ys(a,t,e){return(1-e)*a+e*t}function Ph(a,t,e,n){return ys(a,t,1-Math.exp(-e*n))}function Oh(a,t=1){return t-Math.abs(Pr(a,t*2)-t)}function Nh(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*(3-2*a))}function Bh(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*a*(a*(a*6-15)+10))}function kh(a,t){return a+Math.floor(Math.random()*(t-a+1))}function zh(a,t){return a+Math.random()*(t-a)}function Fh(a){return a*(.5-Math.random())}function Uh(a){a!==void 0&&(Aa=a);let t=Aa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gh(a){return a*_s}function Vh(a){return a*ro}function br(a){return(a&a-1)===0&&a!==0}function Hh(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Jl(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Wh(a,t,e,n,i){const s=Math.cos,o=Math.sin,r=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":a.set(r*h,l*d,l*u,r*c);break;case"YZY":a.set(l*u,r*h,l*d,r*c);break;case"ZXZ":a.set(l*d,l*u,r*h,r*c);break;case"XZX":a.set(r*h,l*g,l*m,r*c);break;case"YXY":a.set(l*m,r*h,l*g,r*c);break;case"ZYZ":a.set(l*g,l*m,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gs(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ne(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const nn={DEG2RAD:_s,RAD2DEG:ro,generateUUID:ts,clamp:Be,euclideanModulo:Pr,mapLinear:Dh,inverseLerp:Ih,lerp:ys,damp:Ph,pingpong:Oh,smoothstep:Nh,smootherstep:Bh,randInt:kh,randFloat:zh,randFloatSpread:Fh,seededRandom:Uh,degToRad:Gh,radToDeg:Vh,isPowerOfTwo:br,ceilPowerOfTwo:Hh,floorPowerOfTwo:Jl,setQuaternionFromProperEuler:Wh,normalize:Ne,denormalize:gs};class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,r,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],f=i[0],p=i[3],_=i[6],v=i[1],y=i[4],x=i[7],w=i[2],E=i[5],T=i[8];return s[0]=o*f+r*v+l*w,s[3]=o*p+r*y+l*E,s[6]=o*_+r*x+l*T,s[1]=c*f+h*v+d*w,s[4]=c*p+h*y+d*E,s[7]=c*_+h*x+d*T,s[2]=u*f+m*v+g*w,s[5]=u*p+m*y+g*E,s[8]=u*_+m*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*r*c-n*s*h+n*r*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=h*o-r*c,u=r*l-h*s,m=c*s-o*l,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return t[0]=d*f,t[1]=(i*c-h*n)*f,t[2]=(r*n-i*o)*f,t[3]=u*f,t[4]=(h*e-i*l)*f,t[5]=(i*s-r*e)*f,t[6]=m*f,t[7]=(n*l-c*e)*f,t[8]=(o*e-n*s)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,r){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*r)+o+t,-i*c,i*l,-i*(-c*o+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Io.makeScale(t,e)),this}rotate(t){return this.premultiply(Io.makeRotation(-t)),this}translate(t,e){return this.premultiply(Io.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new Pe;function Ql(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function ao(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}let xi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,r){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],m=s[o+1],g=s[o+2],f=s[o+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(r===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=f;return}if(d!==f||l!==u||c!==m||h!==g){let p=1-r;const _=l*u+c*m+h*g+d*f,v=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const w=Math.sqrt(y),E=Math.atan2(w,_*v);p=Math.sin(p*E)/w,r=Math.sin(r*E)/w}const x=r*v;if(l=l*p+u*x,c=c*p+m*x,h=h*p+g*x,d=d*p+f*x,p===1-r){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const r=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return t[e]=r*g+h*d+l*m-c*u,t[e+1]=l*g+h*u+c*d-r*m,t[e+2]=c*g+h*m+r*u-l*d,t[e+3]=h*g-r*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(i/2),d=r(s/2),u=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],r=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+r+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>r&&n>d){const m=2*Math.sqrt(1+n-r-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(r>d){const m=2*Math.sqrt(1+r-n-d);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-r);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*r+i*c-s*l,this._y=i*h+o*l+s*r-n*c,this._z=s*h+o*c+n*l-i*r,this._w=o*h-n*r-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*t._w+n*t._x+i*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ta.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ta.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z,l=t.w,c=l*e+o*i-r*n,h=l*n+r*e-s*i,d=l*i+s*n-o*e,u=-s*e-o*n-r*i;return this.x=c*l+u*-s+h*-r-d*-o,this.y=h*l+u*-o+d*-s-c*-r,this.z=d*l+u*-r+c*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,r=e.y,l=e.z;return this.x=i*l-s*r,this.y=s*o-n*l,this.z=n*r-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Po.copy(this).projectOnVector(t),this.sub(Po)}reflect(t){return this.sub(Po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new H,Ta=new xi;function Xi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Oo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const qh=new Pe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Xh=new Pe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Yn=new H;function Kh(a){return a.convertSRGBToLinear(),Yn.set(a.r,a.g,a.b).applyMatrix3(Xh),a.setRGB(Yn.x,Yn.y,Yn.z)}function Yh(a){return Yn.set(a.r,a.g,a.b).applyMatrix3(qh),a.setRGB(Yn.x,Yn.y,Yn.z).convertLinearToSRGB()}const jh={[Es]:a=>a,[Mn]:a=>a.convertSRGBToLinear(),[Zl]:Kh},$h={[Es]:a=>a,[Mn]:a=>a.convertLinearToSRGB(),[Zl]:Yh},De={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return Es},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;const n=jh[t],i=$h[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}};let wi;class tc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=ao("canvas")),wi.width=t.width,wi.height=t.height;const n=wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ao("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xi(e[n]/255)*255):e[n]=Xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class ec{constructor(t=null){this.isSource=!0,this.uuid=ts(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(No(i[o].image)):s.push(No(i[o]))}else s=No(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function No(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?tc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zh=0;class Fe extends Qi{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=We,i=We,s=Je,o=Ss,r=ln,l=_i,c=Fe.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=ts(),this.name="",this.source=new ec(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yr:t.x=t.x-Math.floor(t.x);break;case We:t.x=t.x<0?0:1;break;case xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yr:t.y=t.y-Math.floor(t.y);break;case We:t.y=t.y<0?0:1;break;case xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Yl;Fe.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,i=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],f=l[2],p=l[6],_=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(m+1)/2,w=(_+1)/2,E=(h+u)/4,T=(d+f)/4,M=(g+p)/4;return y>x&&y>w?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=T/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=M/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=M/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-f)*(d-f)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-f)/v,this.z=(u-h)/v,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mi extends Qi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Je,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ec(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nc extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jh extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],d=t[l+1],u=t[l+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),d=t.getY(l),u=t.getZ(l);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,r=s.count;o<r;o++)ii.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(ii)}else n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox),Bo.applyMatrix4(t.matrixWorld),this.union(Bo);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Is.subVectors(this.max,is),Ei.subVectors(t.a,is),Ci.subVectors(t.b,is),Ai.subVectors(t.c,is),Gn.subVectors(Ci,Ei),Vn.subVectors(Ai,Ci),si.subVectors(Ei,Ai);let e=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-si.z,si.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,si.z,0,-si.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-si.y,si.x,0];return!ko(e,Ei,Ci,Ai,Is)||(e=[1,0,0,0,1,0,0,0,1],!ko(e,Ei,Ci,Ai,Is))?!1:(Ps.crossVectors(Gn,Vn),e=[Ps.x,Ps.y,Ps.z],ko(e,Ei,Ci,Ai,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new H,new H,new H,new H,new H,new H,new H,new H],ii=new H,Bo=new Rs,Ei=new H,Ci=new H,Ai=new H,Gn=new H,Vn=new H,si=new H,is=new H,Is=new H,Ps=new H,oi=new H;function ko(a,t,e,n,i){for(let s=0,o=a.length-3;s<=o;s+=3){oi.fromArray(a,s);const r=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const Qh=new Rs,ss=new H,zo=new H;let Or=class{constructor(t=new H,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ss,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(zo)),this.expandByPoint(ss.copy(t.center).sub(zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const An=new H,Fo=new H,Os=new H,Hn=new H,Uo=new H,Ns=new H,Go=new H;let ic=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fo.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Fo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Os),r=Hn.dot(this.direction),l=-Hn.dot(Os),c=Hn.lengthSq(),h=Math.abs(1-o*o);let d,u,m,g;if(h>0)if(d=o*l-r,u=o*r-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const f=1/h;d*=f,u*=f,m=d*(d+o*u+2*r)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+r)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(o*s+r)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Fo).addScaledVector(Os,u),m}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,r,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(r=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(r=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,i,s){Uo.subVectors(e,t),Ns.subVectors(n,t),Go.crossVectors(Uo,Ns);let o=this.direction.dot(Go),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;Hn.subVectors(this.origin,t);const l=r*this.direction.dot(Ns.crossVectors(Hn,Ns));if(l<0)return null;const c=r*this.direction.dot(Uo.cross(Hn));if(c<0||l+c>o)return null;const h=-r*Hn.dot(Go);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class de{constructor(){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,r,l,c,h,d,u,m,g,f,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=r,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=u,_[3]=m,_[7]=g,_[11]=f,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ti.setFromMatrixColumn(t,0).length(),s=1/Ti.setFromMatrixColumn(t,1).length(),o=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,m=o*d,g=r*h,f=r*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=u-f*c,e[9]=-r*l,e[2]=f-u*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,m=l*d,g=c*h,f=c*d;e[0]=u+f*r,e[4]=g*r-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-r,e[2]=m*r-g,e[6]=f+u*r,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,m=l*d,g=c*h,f=c*d;e[0]=u-f*r,e[4]=-o*d,e[8]=g+m*r,e[1]=m+g*r,e[5]=o*h,e[9]=f-u*r,e[2]=-o*c,e[6]=r,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,m=o*d,g=r*h,f=r*d;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+f,e[1]=l*d,e[5]=f*c+u,e[9]=m*c-g,e[2]=-c,e[6]=r*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,m=o*c,g=r*l,f=r*c;e[0]=l*h,e[4]=f-u*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-r*h,e[2]=-c*h,e[6]=m*d+g,e[10]=u-f*d}else if(t.order==="XZY"){const u=o*l,m=o*c,g=r*l,f=r*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+f,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=r*h,e[10]=f*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tu,t,eu)}lookAt(t,e,n){const i=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Wn.crossVectors(n,Ve),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Wn.crossVectors(n,Ve)),Wn.normalize(),Bs.crossVectors(Ve,Wn),i[0]=Wn.x,i[4]=Bs.x,i[8]=Ve.x,i[1]=Wn.y,i[5]=Bs.y,i[9]=Ve.y,i[2]=Wn.z,i[6]=Bs.z,i[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],f=n[6],p=n[10],_=n[14],v=n[3],y=n[7],x=n[11],w=n[15],E=i[0],T=i[4],M=i[8],A=i[12],I=i[1],F=i[5],U=i[9],D=i[13],P=i[2],O=i[6],N=i[10],K=i[14],k=i[3],X=i[7],Y=i[11],it=i[15];return s[0]=o*E+r*I+l*P+c*k,s[4]=o*T+r*F+l*O+c*X,s[8]=o*M+r*U+l*N+c*Y,s[12]=o*A+r*D+l*K+c*it,s[1]=h*E+d*I+u*P+m*k,s[5]=h*T+d*F+u*O+m*X,s[9]=h*M+d*U+u*N+m*Y,s[13]=h*A+d*D+u*K+m*it,s[2]=g*E+f*I+p*P+_*k,s[6]=g*T+f*F+p*O+_*X,s[10]=g*M+f*U+p*N+_*Y,s[14]=g*A+f*D+p*K+_*it,s[3]=v*E+y*I+x*P+w*k,s[7]=v*T+y*F+x*O+w*X,s[11]=v*M+y*U+x*N+w*Y,s[15]=v*A+y*D+x*K+w*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],r=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],f=t[7],p=t[11],_=t[15];return g*(+s*l*d-i*c*d-s*r*u+n*c*u+i*r*m-n*l*m)+f*(+e*l*m-e*c*u+s*o*u-i*o*m+i*c*h-s*l*h)+p*(+e*c*d-e*r*m-s*o*d+n*o*m+s*r*h-n*c*h)+_*(-i*r*h-e*l*d+e*r*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],f=t[13],p=t[14],_=t[15],v=d*p*c-f*u*c+f*l*m-r*p*m-d*l*_+r*u*_,y=g*u*c-h*p*c-g*l*m+o*p*m+h*l*_-o*u*_,x=h*f*c-g*d*c+g*r*m-o*f*m-h*r*_+o*d*_,w=g*d*l-h*f*l-g*r*u+o*f*u+h*r*p-o*d*p,E=e*v+n*y+i*x+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(f*u*s-d*p*s-f*i*m+n*p*m+d*i*_-n*u*_)*T,t[2]=(r*p*s-f*l*s+f*i*c-n*p*c-r*i*_+n*l*_)*T,t[3]=(d*l*s-r*u*s-d*i*c+n*u*c+r*i*m-n*l*m)*T,t[4]=y*T,t[5]=(h*p*s-g*u*s+g*i*m-e*p*m-h*i*_+e*u*_)*T,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*_-e*l*_)*T,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*m+e*l*m)*T,t[8]=x*T,t[9]=(g*d*s-h*f*s-g*n*m+e*f*m+h*n*_-e*d*_)*T,t[10]=(o*f*s-g*r*s+g*n*c-e*f*c-o*n*_+e*r*_)*T,t[11]=(h*r*s-o*d*s-h*n*c+e*d*c+o*n*m-e*r*m)*T,t[12]=w*T,t[13]=(h*f*i-g*d*i+g*n*u-e*f*u-h*n*p+e*d*p)*T,t[14]=(g*r*i-o*f*i-g*n*l+e*f*l+o*n*p-e*r*p)*T,t[15]=(o*d*i-h*r*i+h*n*l-e*d*l-o*n*u+e*r*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,r=t.y,l=t.z,c=s*o,h=s*r;return this.set(c*o+n,c*r-i*l,c*l+i*r,0,c*r+i*l,h*r+n,h*l-i*o,0,c*l-i*r,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,r=e._z,l=e._w,c=s+s,h=o+o,d=r+r,u=s*c,m=s*h,g=s*d,f=o*h,p=o*d,_=r*d,v=l*c,y=l*h,x=l*d,w=n.x,E=n.y,T=n.z;return i[0]=(1-(f+_))*w,i[1]=(m+x)*w,i[2]=(g-y)*w,i[3]=0,i[4]=(m-x)*E,i[5]=(1-(u+_))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(g+y)*T,i[9]=(p-v)*T,i[10]=(1-(u+f))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ti.set(i[0],i[1],i[2]).length();const o=Ti.set(i[4],i[5],i[6]).length(),r=Ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],sn.copy(this);const c=1/s,h=1/o,d=1/r;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,e.setFromRotationMatrix(sn),n.x=s,n.y=o,n.z=r,this}makePerspective(t,e,n,i,s,o){const r=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(o+s)/(o-s),m=-2*o*s/(o-s);return r[0]=l,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=c,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=u,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,n,i,s,o){const r=this.elements,l=1/(e-t),c=1/(n-i),h=1/(o-s),d=(e+t)*l,u=(n+i)*c,m=(o+s)*h;return r[0]=2*l,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*c,r[9]=0,r[13]=-u,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ti=new H,sn=new de,tu=new H(0,0,0),eu=new H(1,1,1),Wn=new H,Bs=new H,Ve=new H,Ra=new de,La=new xi;class vo{constructor(t=0,e=0,n=0,i=vo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],r=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ra.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ra,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return La.setFromEuler(this),this.setFromQuaternion(La,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vo.DEFAULT_ORDER="XYZ";class Nr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nu=0;const Da=new H,Ri=new xi,Tn=new de,ks=new H,os=new H,iu=new H,su=new xi,Ia=new H(1,0,0),Pa=new H(0,1,0),Oa=new H(0,0,1),ou={type:"added"},Na={type:"removed"};class Te extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new H,e=new vo,n=new xi,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Pe}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(Ia,t)}rotateY(t){return this.rotateOnAxis(Pa,t)}rotateZ(t){return this.rotateOnAxis(Oa,t)}translateOnAxis(t,e){return Da.copy(t).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ia,t)}translateY(t){return this.translateOnAxis(Pa,t)}translateZ(t){return this.translateOnAxis(Oa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ks.copy(t):ks.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(os,ks,this.up):Tn.lookAt(ks,os,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ou)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Na)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Na)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,iu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(t.materials,this.material[l]));i.material=r}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(s(t.animations,l))}}if(e){const r=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),m=o(t.animations),g=o(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Te.DEFAULT_UP=new H(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new H,Rn=new H,Vo=new H,Ln=new H,Li=new H,Di=new H,Ba=new H,Ho=new H,Wo=new H,qo=new H;class kn{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),on.subVectors(t,e),i.cross(on);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){on.subVectors(i,e),Rn.subVectors(n,e),Vo.subVectors(t,e);const o=on.dot(on),r=on.dot(Rn),l=on.dot(Vo),c=Rn.dot(Rn),h=Rn.dot(Vo),d=o*c-r*r;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(c*l-r*h)*u,g=(o*h-r*l)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ln),Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getUV(t,e,n,i,s,o,r,l){return this.getBarycoord(t,e,n,i,Ln),l.set(0,0),l.addScaledVector(s,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(r,Ln.z),l}static isFrontFacing(t,e,n,i){return on.subVectors(n,e),Rn.subVectors(t,e),on.cross(Rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),on.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return kn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return kn.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,r;Li.subVectors(i,n),Di.subVectors(s,n),Ho.subVectors(t,n);const l=Li.dot(Ho),c=Di.dot(Ho);if(l<=0&&c<=0)return e.copy(n);Wo.subVectors(t,i);const h=Li.dot(Wo),d=Di.dot(Wo);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Li,o);qo.subVectors(t,s);const m=Li.dot(qo),g=Di.dot(qo);if(g>=0&&m<=g)return e.copy(s);const f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(n).addScaledVector(Di,r);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Ba.subVectors(s,i),r=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(Ba,r);const _=1/(p+f+u);return o=f*_,r=u*_,e.copy(n).addScaledVector(Li,o).addScaledVector(Di,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let ru=0,Ls=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Wi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ql,this.blendDst=Xl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const l=s[r];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Xo(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=De.workingColorSpace){return this.r=t,this.g=e,this.b=n,De.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=De.workingColorSpace){if(t=Pr(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Xo(o,s,t+1/3),this.g=Xo(o,s,t),this.b=Xo(o,s,t-1/3)}return De.toWorkingColorSpace(this,i),this}setStyle(t,e=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,De.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,De.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,De.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,De.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const n=sc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=Oo(t.r),this.g=Oo(t.g),this.b=Oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return De.fromWorkingColorSpace(Ce.copy(this),t),Be(Ce.r*255,0,255)<<16^Be(Ce.g*255,0,255)<<8^Be(Ce.b*255,0,255)<<0}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=De.workingColorSpace){De.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,i=Ce.g,s=Ce.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let l,c;const h=(r+o)/2;if(r===o)l=0,c=0;else{const d=o-r;switch(c=h<=.5?d/(o+r):d/(2-o-r),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=De.workingColorSpace){return De.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Mn){De.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,i=Ce.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(rn),rn.h+=t,rn.s+=e,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rn),t.getHSL(zs);const n=ys(rn.h,zs.h,e),i=ys(rn.s,zs.s,e),s=ys(rn.l,zs.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new qt;qt.NAMES=sc;class Br extends Ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const re=new H,Fs=new Kt;class Sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ea,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fs.fromBufferAttribute(this,e),Fs.applyMatrix3(t),this.setXY(e,Fs.x,Fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix3(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix4(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyNormalMatrix(t),this.setXYZ(e,re.x,re.y,re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.transformDirection(t),this.setXYZ(e,re.x,re.y,re.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ea&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class oc extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rc extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class cn extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let au=0;const je=new de,Ko=new Te,Ii=new H,He=new Rs,rs=new Rs,ye=new H;class Qn extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ql(t)?rc:oc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Ko.lookAt(t),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];He.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const r=e[s];rs.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(He.min,rs.min),He.expandByPoint(ye),ye.addVectors(He.max,rs.max),He.expandByPoint(ye)):(He.expandByPoint(rs.min),He.expandByPoint(rs.max))}He.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let s=0,o=e.length;s<o;s++){const r=e[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)ye.fromBufferAttribute(r,c),l&&(Ii.fromBufferAttribute(t,c),ye.add(Ii)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<r;I++)c[I]=new H,h[I]=new H;const d=new H,u=new H,m=new H,g=new Kt,f=new Kt,p=new Kt,_=new H,v=new H;function y(I,F,U){d.fromArray(i,I*3),u.fromArray(i,F*3),m.fromArray(i,U*3),g.fromArray(o,I*2),f.fromArray(o,F*2),p.fromArray(o,U*2),u.sub(d),m.sub(d),f.sub(g),p.sub(g);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(D),v.copy(m).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(D),c[I].add(_),c[F].add(_),c[U].add(_),h[I].add(v),h[F].add(v),h[U].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let I=0,F=x.length;I<F;++I){const U=x[I],D=U.start,P=U.count;for(let O=D,N=D+P;O<N;O+=3)y(n[O+0],n[O+1],n[O+2])}const w=new H,E=new H,T=new H,M=new H;function A(I){T.fromArray(s,I*3),M.copy(T);const F=c[I];w.copy(F),w.sub(T.multiplyScalar(T.dot(F))).normalize(),E.crossVectors(M,F);const D=E.dot(h[I])<0?-1:1;l[I*4]=w.x,l[I*4+1]=w.y,l[I*4+2]=w.z,l[I*4+3]=D}for(let I=0,F=x.length;I<F;++I){const U=x[I],D=U.start,P=U.count;for(let O=D,N=D+P;O<N;O+=3)A(n[O+0]),A(n[O+1]),A(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new H,s=new H,o=new H,r=new H,l=new H,c=new H,h=new H,d=new H;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),f=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,f),o.fromBufferAttribute(e,p),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,d=r.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){r.isInterleavedBufferAttribute?m=l[f]*r.data.stride+r.offset:m=l[f]*h;for(let _=0;_<h;_++)u[g++]=c[m++]}return new Sn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qn,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],c=t(l,n);e.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ka=new de,mn=new ic,Us=new Or,za=new H,as=new H,ls=new H,cs=new H,Yo=new H,Gs=new H,Vs=new Kt,Hs=new Kt,Ws=new Kt,jo=new H,qs=new H;class xt extends Te{constructor(t=new Qn,e=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(s&&r){Gs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=r[l],d=s[l];h!==0&&(Yo.fromBufferAttribute(d,t),o?Gs.addScaledVector(Yo,h):Gs.addScaledVector(Yo.sub(e),h))}e.add(Gs)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),mn.copy(t.ray).recast(t.near),Us.containsPoint(mn.origin)===!1&&(mn.intersectSphere(Us,za)===null||mn.origin.distanceToSquared(za)>(t.far-t.near)**2))||(ka.copy(s).invert(),mn.copy(t.ray).applyMatrix4(ka),n.boundingBox!==null&&mn.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(r!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],_=Math.max(f.start,u.start),v=Math.min(r.count,Math.min(f.start+f.count,u.start+u.count));for(let y=_,x=v;y<x;y+=3){const w=r.getX(y),E=r.getX(y+1),T=r.getX(y+2);o=Xs(this,p,t,mn,c,h,w,E,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const m=Math.max(0,u.start),g=Math.min(r.count,u.start+u.count);for(let f=m,p=g;f<p;f+=3){const _=r.getX(f),v=r.getX(f+1),y=r.getX(f+2);o=Xs(this,i,t,mn,c,h,_,v,y),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],_=Math.max(f.start,u.start),v=Math.min(l.count,Math.min(f.start+f.count,u.start+u.count));for(let y=_,x=v;y<x;y+=3){const w=y,E=y+1,T=y+2;o=Xs(this,p,t,mn,c,h,w,E,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const m=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let f=m,p=g;f<p;f+=3){const _=f,v=f+1,y=f+2;o=Xs(this,i,t,mn,c,h,_,v,y),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}}}function lu(a,t,e,n,i,s,o,r){let l;if(t.side===Xe?l=n.intersectTriangle(o,s,i,!0,r):l=n.intersectTriangle(i,s,o,t.side===Zn,r),l===null)return null;qs.copy(r),qs.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(qs);return c<e.near||c>e.far?null:{distance:c,point:qs.clone(),object:a}}function Xs(a,t,e,n,i,s,o,r,l){a.getVertexPosition(o,as),a.getVertexPosition(r,ls),a.getVertexPosition(l,cs);const c=lu(a,t,e,n,as,ls,cs,jo);if(c){i&&(Vs.fromBufferAttribute(i,o),Hs.fromBufferAttribute(i,r),Ws.fromBufferAttribute(i,l),c.uv=kn.getUV(jo,as,ls,cs,Vs,Hs,Ws,new Kt)),s&&(Vs.fromBufferAttribute(s,o),Hs.fromBufferAttribute(s,r),Ws.fromBufferAttribute(s,l),c.uv2=kn.getUV(jo,as,ls,cs,Vs,Hs,Ws,new Kt));const h={a:o,b:r,c:l,normal:new H,materialIndex:0};kn.getNormal(as,ls,cs,h.normal),c.face=h}return c}class Bt extends Qn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(d,2));function g(f,p,_,v,y,x,w,E,T,M,A){const I=x/T,F=w/M,U=x/2,D=w/2,P=E/2,O=T+1,N=M+1;let K=0,k=0;const X=new H;for(let Y=0;Y<N;Y++){const it=Y*F-D;for(let B=0;B<O;B++){const tt=B*I-U;X[f]=tt*v,X[p]=it*y,X[_]=P,c.push(X.x,X.y,X.z),X[f]=0,X[p]=0,X[_]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(B/T),d.push(1-Y/M),K+=1}}for(let Y=0;Y<M;Y++)for(let it=0;it<T;it++){const B=u+it+O*Y,tt=u+it+O*(Y+1),et=u+(it+1)+O*(Y+1),G=u+(it+1)+O*Y;l.push(B,tt,G),l.push(tt,et,G),k+=6}r.addGroup(m,k,A),m+=k,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $i(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(a){const t={};for(let e=0;e<a.length;e++){const n=$i(a[e]);for(const i in n)t[i]=n[i]}return t}function cu(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function ac(a){return a.getRenderTarget()===null&&a.outputEncoding===te?Mn:Es}const hu={clone:$i,merge:Ie};var uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lc extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qe extends lc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Oi=1;class fu extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Qe(Pi,Oi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Qe(Pi,Oi,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Qe(Pi,Oi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const r=new Qe(Pi,Oi,t,e);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const l=new Qe(Pi,Oi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Qe(Pi,Oi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=Fn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,r),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class cc extends Fe{constructor(t,e,n,i,s,o,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,n,i,s,o,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pu extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new cc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bt(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:$n});s.uniforms.tEquirect.value=e;const o=new xt(i,s),r=e.minFilter;return e.minFilter===Ss&&(e.minFilter=Je),new fu(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const $o=new H,mu=new H,gu=new Pe;let hi=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=$o.subVectors(n,e).cross(mu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gu.getNormalMatrix(t),i=this.coplanarPoint($o).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ni=new Or,Ks=new H;class kr{constructor(t=new hi,e=new hi,n=new hi,i=new hi,s=new hi,o=new hi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],m=n[9],g=n[10],f=n[11],p=n[12],_=n[13],v=n[14],y=n[15];return e[0].setComponents(r-i,d-l,f-u,y-p).normalize(),e[1].setComponents(r+i,d+l,f+u,y+p).normalize(),e[2].setComponents(r+s,d+c,f+m,y+_).normalize(),e[3].setComponents(r-s,d-c,f-m,y-_).normalize(),e[4].setComponents(r-o,d-h,f-g,y-v).normalize(),e[5].setComponents(r+o,d+h,f+g,y+v).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ks.x=i.normal.x>0?t.max.x:t.min.x,Ks.y=i.normal.y>0?t.max.y:t.min.y,Ks.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hc(){let a=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function vu(a,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,m=h.updateRange;a.bindBuffer(d,c),m.count===-1?a.bufferSubData(d,0,u):(e?a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:o,remove:r,update:l}}class zr extends Qn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,r=Math.floor(n),l=Math.floor(i),c=r+1,h=l+1,d=t/r,u=e/l,m=[],g=[],f=[],p=[];for(let _=0;_<h;_++){const v=_*u-o;for(let y=0;y<c;y++){const x=y*d-s;g.push(x,-v,0),f.push(0,0,1),p.push(y/r),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<r;v++){const y=v+c*_,x=v+c*(_+1),w=v+1+c*(_+1),E=v+1+c*_;m.push(y,x,E),m.push(x,w,E)}this.setIndex(m),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(f,3)),this.setAttribute("uv",new cn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.widthSegments,t.heightSegments)}}var _u=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wu="vec3 transformed = vec3( position );",Eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Au=`#ifdef USE_IRIDESCENCE
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
#endif`,Tu=`#ifdef USE_BUMPMAP
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
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ku=`#define PI 3.141592653589793
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
}`,zu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fu=`vec3 transformedNormal = objectNormal;
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
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",qu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xu=`#ifdef USE_ENVMAP
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
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$u=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ju=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ed=`#ifdef USE_GRADIENTMAP
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
}`,nd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rd=`uniform bool receiveShadow;
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
#endif`,ad=`#if defined( USE_ENVMAP )
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
#endif`,ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
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
#endif`,fd=`struct PhysicalMaterial {
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
}`,pd=`
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
#endif`,md=`#if defined( RE_IndirectDiffuse )
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ad=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Td=`#ifdef USE_MORPHNORMALS
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
#endif`,Rd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ld=`#ifdef USE_MORPHTARGETS
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
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Id=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bd=`#ifdef USE_NORMALMAP
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
#endif`,kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jd=`float getShadowMask() {
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
}`,Qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nf=`#ifdef USE_SKINNING
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
#endif`,sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,af=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lf=`#ifdef USE_TRANSMISSION
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
#endif`,cf=`#ifdef USE_TRANSMISSION
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
#endif`,hf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,df=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ff=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,pf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,mf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_f=`uniform sampler2D t2D;
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sf=`#include <common>
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
}`,wf=`#if DEPTH_PACKING == 3200
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
}`,Ef=`#define DISTANCE
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
}`,Cf=`#define DISTANCE
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rf=`uniform float scale;
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
}`,Lf=`uniform vec3 diffuse;
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
}`,Df=`#include <common>
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
}`,If=`uniform vec3 diffuse;
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
}`,Pf=`#define LAMBERT
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
}`,Of=`#define LAMBERT
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
}`,Nf=`#define MATCAP
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
}`,Bf=`#define MATCAP
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
}`,kf=`#define NORMAL
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
}`,zf=`#define NORMAL
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
}`,Ff=`#define PHONG
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
}`,Uf=`#define PHONG
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
}`,Gf=`#define STANDARD
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
}`,Vf=`#define STANDARD
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
}`,Hf=`#define TOON
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
}`,Wf=`#define TOON
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
}`,qf=`uniform float size;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Kf=`#include <common>
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
}`,Yf=`uniform vec3 color;
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
}`,jf=`uniform float rotation;
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
}`,$f=`uniform vec3 diffuse;
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
}`,Dt={alphamap_fragment:_u,alphamap_pars_fragment:yu,alphatest_fragment:xu,alphatest_pars_fragment:Mu,aomap_fragment:bu,aomap_pars_fragment:Su,begin_vertex:wu,beginnormal_vertex:Eu,bsdfs:Cu,iridescence_fragment:Au,bumpmap_pars_fragment:Tu,clipping_planes_fragment:Ru,clipping_planes_pars_fragment:Lu,clipping_planes_pars_vertex:Du,clipping_planes_vertex:Iu,color_fragment:Pu,color_pars_fragment:Ou,color_pars_vertex:Nu,color_vertex:Bu,common:ku,cube_uv_reflection_fragment:zu,defaultnormal_vertex:Fu,displacementmap_pars_vertex:Uu,displacementmap_vertex:Gu,emissivemap_fragment:Vu,emissivemap_pars_fragment:Hu,encodings_fragment:Wu,encodings_pars_fragment:qu,envmap_fragment:Xu,envmap_common_pars_fragment:Ku,envmap_pars_fragment:Yu,envmap_pars_vertex:ju,envmap_physical_pars_fragment:ad,envmap_vertex:$u,fog_vertex:Zu,fog_pars_vertex:Ju,fog_fragment:Qu,fog_pars_fragment:td,gradientmap_pars_fragment:ed,lightmap_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:sd,lights_lambert_pars_fragment:od,lights_pars_begin:rd,lights_toon_fragment:ld,lights_toon_pars_fragment:cd,lights_phong_fragment:hd,lights_phong_pars_fragment:ud,lights_physical_fragment:dd,lights_physical_pars_fragment:fd,lights_fragment_begin:pd,lights_fragment_maps:md,lights_fragment_end:gd,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:xd,map_fragment:Md,map_pars_fragment:bd,map_particle_fragment:Sd,map_particle_pars_fragment:wd,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:Cd,morphcolor_vertex:Ad,morphnormal_vertex:Td,morphtarget_pars_vertex:Rd,morphtarget_vertex:Ld,normal_fragment_begin:Dd,normal_fragment_maps:Id,normal_pars_fragment:Pd,normal_pars_vertex:Od,normal_vertex:Nd,normalmap_pars_fragment:Bd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:Fd,iridescence_pars_fragment:Ud,output_fragment:Gd,packing:Vd,premultiplied_alpha_fragment:Hd,project_vertex:Wd,dithering_fragment:qd,dithering_pars_fragment:Xd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:jd,shadowmap_pars_vertex:$d,shadowmap_vertex:Zd,shadowmask_pars_fragment:Jd,skinbase_vertex:Qd,skinning_pars_vertex:tf,skinning_vertex:ef,skinnormal_vertex:nf,specularmap_fragment:sf,specularmap_pars_fragment:of,tonemapping_fragment:rf,tonemapping_pars_fragment:af,transmission_fragment:lf,transmission_pars_fragment:cf,uv_pars_fragment:hf,uv_pars_vertex:uf,uv_vertex:df,uv2_pars_fragment:ff,uv2_pars_vertex:pf,uv2_vertex:mf,worldpos_vertex:gf,background_vert:vf,background_frag:_f,backgroundCube_vert:yf,backgroundCube_frag:xf,cube_vert:Mf,cube_frag:bf,depth_vert:Sf,depth_frag:wf,distanceRGBA_vert:Ef,distanceRGBA_frag:Cf,equirect_vert:Af,equirect_frag:Tf,linedashed_vert:Rf,linedashed_frag:Lf,meshbasic_vert:Df,meshbasic_frag:If,meshlambert_vert:Pf,meshlambert_frag:Of,meshmatcap_vert:Nf,meshmatcap_frag:Bf,meshnormal_vert:kf,meshnormal_frag:zf,meshphong_vert:Ff,meshphong_frag:Uf,meshphysical_vert:Gf,meshphysical_frag:Vf,meshtoon_vert:Hf,meshtoon_frag:Wf,points_vert:qf,points_frag:Xf,shadow_vert:Kf,shadow_frag:Yf,sprite_vert:jf,sprite_frag:$f},pt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pe},uv2Transform:{value:new Pe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}}},bn={basic:{uniforms:Ie([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ie([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ie([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ie([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Ie([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Ie([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Ie([pt.points,pt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ie([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ie([pt.common,pt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ie([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Ie([pt.sprite,pt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ie([pt.common,pt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ie([pt.lights,pt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};bn.physical={uniforms:Ie([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Ys={r:0,b:0,g:0};function Zf(a,t,e,n,i,s,o){const r=new qt(0);let l=s===!0?0:1,c,h,d=null,u=0,m=null;function g(p,_){let v=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y));const x=a.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(y=null),y===null?f(r,l):y&&y.isColor&&(f(y,1),v=!0),(a.autoClear||v)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),y&&(y.isCubeTexture||y.mapping===go)?(h===void 0&&(h=new xt(new Bt(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:$i(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=y.encoding!==te,(d!==y||u!==y.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,m=a.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new xt(new zr(2,2),new bi({name:"BackgroundMaterial",uniforms:$i(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=y.encoding!==te,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,m=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,_){p.getRGB(Ys,ac(a)),n.buffers.color.setClear(Ys.r,Ys.g,Ys.b,_,o)}return{getClearColor:function(){return r},setClearColor:function(p,_=1){r.set(p),l=_,f(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(r,l)},render:g}}function Jf(a,t,e,n){const i=a.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},l=p(null);let c=l,h=!1;function d(P,O,N,K,k){let X=!1;if(o){const Y=f(K,N,O);c!==Y&&(c=Y,m(c.object)),X=_(P,K,N,k),X&&v(P,K,N,k)}else{const Y=O.wireframe===!0;(c.geometry!==K.id||c.program!==N.id||c.wireframe!==Y)&&(c.geometry=K.id,c.program=N.id,c.wireframe=Y,X=!0)}k!==null&&e.update(k,34963),(X||h)&&(h=!1,M(P,O,N,K),k!==null&&a.bindBuffer(34963,e.get(k).buffer))}function u(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?a.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?a.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function f(P,O,N){const K=N.wireframe===!0;let k=r[P.id];k===void 0&&(k={},r[P.id]=k);let X=k[O.id];X===void 0&&(X={},k[O.id]=X);let Y=X[K];return Y===void 0&&(Y=p(u()),X[K]=Y),Y}function p(P){const O=[],N=[],K=[];for(let k=0;k<i;k++)O[k]=0,N[k]=0,K[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:N,attributeDivisors:K,object:P,attributes:{},index:null}}function _(P,O,N,K){const k=c.attributes,X=O.attributes;let Y=0;const it=N.getAttributes();for(const B in it)if(it[B].location>=0){const et=k[B];let G=X[B];if(G===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),et===void 0||et.attribute!==G||G&&et.data!==G.data)return!0;Y++}return c.attributesNum!==Y||c.index!==K}function v(P,O,N,K){const k={},X=O.attributes;let Y=0;const it=N.getAttributes();for(const B in it)if(it[B].location>=0){let et=X[B];et===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));const G={};G.attribute=et,et&&et.data&&(G.data=et.data),k[B]=G,Y++}c.attributes=k,c.attributesNum=Y,c.index=K}function y(){const P=c.newAttributes;for(let O=0,N=P.length;O<N;O++)P[O]=0}function x(P){w(P,0)}function w(P,O){const N=c.newAttributes,K=c.enabledAttributes,k=c.attributeDivisors;N[P]=1,K[P]===0&&(a.enableVertexAttribArray(P),K[P]=1),k[P]!==O&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),k[P]=O)}function E(){const P=c.newAttributes,O=c.enabledAttributes;for(let N=0,K=O.length;N<K;N++)O[N]!==P[N]&&(a.disableVertexAttribArray(N),O[N]=0)}function T(P,O,N,K,k,X){n.isWebGL2===!0&&(N===5124||N===5125)?a.vertexAttribIPointer(P,O,N,k,X):a.vertexAttribPointer(P,O,N,K,k,X)}function M(P,O,N,K){if(n.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const k=K.attributes,X=N.getAttributes(),Y=O.defaultAttributeValues;for(const it in X){const B=X[it];if(B.location>=0){let tt=k[it];if(tt===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),tt!==void 0){const et=tt.normalized,G=tt.itemSize,lt=e.get(tt);if(lt===void 0)continue;const ct=lt.buffer,ut=lt.type,ot=lt.bytesPerElement;if(tt.isInterleavedBufferAttribute){const dt=tt.data,Et=dt.stride,St=tt.offset;if(dt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<B.locationSize;Lt++)w(B.location+Lt,dt.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Lt=0;Lt<B.locationSize;Lt++)x(B.location+Lt);a.bindBuffer(34962,ct);for(let Lt=0;Lt<B.locationSize;Lt++)T(B.location+Lt,G/B.locationSize,ut,et,Et*ot,(St+G/B.locationSize*Lt)*ot)}else{if(tt.isInstancedBufferAttribute){for(let dt=0;dt<B.locationSize;dt++)w(B.location+dt,tt.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let dt=0;dt<B.locationSize;dt++)x(B.location+dt);a.bindBuffer(34962,ct);for(let dt=0;dt<B.locationSize;dt++)T(B.location+dt,G/B.locationSize,ut,et,G*ot,G/B.locationSize*dt*ot)}}else if(Y!==void 0){const et=Y[it];if(et!==void 0)switch(et.length){case 2:a.vertexAttrib2fv(B.location,et);break;case 3:a.vertexAttrib3fv(B.location,et);break;case 4:a.vertexAttrib4fv(B.location,et);break;default:a.vertexAttrib1fv(B.location,et)}}}}E()}function A(){U();for(const P in r){const O=r[P];for(const N in O){const K=O[N];for(const k in K)g(K[k].object),delete K[k];delete O[N]}delete r[P]}}function I(P){if(r[P.id]===void 0)return;const O=r[P.id];for(const N in O){const K=O[N];for(const k in K)g(K[k].object),delete K[k];delete O[N]}delete r[P.id]}function F(P){for(const O in r){const N=r[O];if(N[P.id]===void 0)continue;const K=N[P.id];for(const k in K)g(K[k].object),delete K[k];delete N[P.id]}}function U(){D(),h=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:x,disableUnusedAttributes:E}}function Qf(a,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function r(c,h){a.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,m;if(i)u=a,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,h,d),e.update(h,s,d)}this.setMode=o,this.render=r,this.renderInstances=l}function tp(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let r=e.precision!==void 0?e.precision:"highp";const l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=a.getParameter(34930),u=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),f=a.getParameter(34921),p=a.getParameter(36347),_=a.getParameter(36348),v=a.getParameter(36349),y=u>0,x=o||t.has("OES_texture_float"),w=y&&x,E=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:E}}function ep(a){const t=this;let e=null,n=0,i=!1,s=!1;const o=new hi,r=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,_=a.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const v=s?0:n,y=v*4;let x=_.clippingState||null;l.value=x,x=h(g,u,y,m);for(let w=0;w!==y;++w)x[w]=e[w];_.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const f=d!==null?d.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const _=m+f*4,v=u.matrixWorldInverse;r.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,x=m;y!==f;++y,x+=4)o.copy(d[y]).applyMatrix4(v,r),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function np(a){let t=new WeakMap;function e(o,r){return r===vr?o.mapping=Ki:r===_r&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===vr||r===_r)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pu(l.height/2);return c.fromEquirectangularTexture(a,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class uc extends lc{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,r=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vi=4,Fa=[.125,.215,.35,.446,.526,.582],di=20,Zo=new uc,Ua=new qt;let Jo=null;const ui=(1+Math.sqrt(5))/2,Bi=1/ui,Ga=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,ui,Bi),new H(0,ui,-Bi),new H(Bi,0,ui),new H(-Bi,0,ui),new H(ui,Bi,0),new H(-ui,Bi,0)];class Va{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Jo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jo),t.scissorTest=!1,js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:ws,format:ln,encoding:yi,depthBuffer:!1},i=Ha(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ha(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ip(s)),this._blurMaterial=sp(s,t,e)}return i}_compileMaterial(t){const e=new xt(this._lodPlanes[0],t);this._renderer.compile(e,Zo)}_sceneToCubeUV(t,e,n,i){const r=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ua),h.toneMapping=Fn,h.autoClear=!1;const m=new Br({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new xt(new Bt,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy(Ua),f=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(r.up.set(0,l[_],0),r.lookAt(c[_],0,0)):v===1?(r.up.set(0,0,l[_]),r.lookAt(0,c[_],0)):(r.up.set(0,l[_],0),r.lookAt(0,0,c[_]));const y=this._cubeSize;js(i,v*y,_>2?y:0,y,y),h.setRenderTarget(i),f&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ki||t.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const l=this._cubeSize;js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Zo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ga[(i-1)%Ga.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new xt(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*di-1),f=s/g,p=isFinite(s)?1+Math.floor(h*f):di;p>di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${di}`);const _=[];let v=0;for(let T=0;T<di;++T){const M=T/f,A=Math.exp(-M*M/2);_.push(A),T===0?v+=A:T<p&&(v+=2*A)}for(let T=0;T<_.length;T++)_[T]=_[T]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=_,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const x=this._sizeLods[i],w=3*x*(i>y-Vi?i-y+Vi:0),E=4*(this._cubeSize-x);js(e,w,E,3*x,2*x),l.setRenderTarget(e),l.render(d,Zo)}}function ip(a){const t=[],e=[],n=[];let i=a;const s=a-Vi+1+Fa.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);e.push(r);let l=1/r;o>a-Vi?l=Fa[o-a+Vi-1]:o===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,f=3,p=2,_=1,v=new Float32Array(f*g*m),y=new Float32Array(p*g*m),x=new Float32Array(_*g*m);for(let E=0;E<m;E++){const T=E%3*2/3-1,M=E>2?0:-1,A=[T,M,0,T+2/3,M,0,T+2/3,M+1,0,T,M,0,T+2/3,M+1,0,T,M+1,0];v.set(A,f*g*E),y.set(u,p*g*E);const I=[E,E,E,E,E,E];x.set(I,_*g*E)}const w=new Qn;w.setAttribute("position",new Sn(v,f)),w.setAttribute("uv",new Sn(y,p)),w.setAttribute("faceIndex",new Sn(x,_)),t.push(w),i>Vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ha(a,t,e){const n=new Mi(a,t,e);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function sp(a,t,e){const n=new Float32Array(di),i=new H(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fr(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Wa(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fr(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function qa(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Fr(){return`

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
	`}function op(a){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===vr||l===_r,h=l===Ki||l===Yi;if(c||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=t.get(r);return e===null&&(e=new Va(a)),d=c?e.fromEquirectangular(r,d):e.fromCubemap(r,d),t.set(r,d),d.texture}else{if(t.has(r))return t.get(r).texture;{const d=r.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Va(a));const u=c?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,u),r.addEventListener("dispose",s),u.texture}else return null}}}return r}function i(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function rp(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ap(a,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function r(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],34962);const m=d.morphAttributes;for(const g in m){const f=m[g];for(let p=0,_=f.length;p<_;p++)t.update(f[p],34962)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let f=0;if(m!==null){const v=m.array;f=m.version;for(let y=0,x=v.length;y<x;y+=3){const w=v[y+0],E=v[y+1],T=v[y+2];u.push(w,E,E,T,T,w)}}else{const v=g.array;f=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const w=y+0,E=y+1,T=y+2;u.push(w,E,E,T,T,w)}}const p=new(Ql(u)?rc:oc)(u,1);p.version=f;const _=s.get(d);_&&t.remove(_),s.set(d,p)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:r,update:l,getWireframeAttribute:h}}function lp(a,t,e,n){const i=n.isWebGL2;let s;function o(u){s=u}let r,l;function c(u){r=u.type,l=u.bytesPerElement}function h(u,m){a.drawElements(s,m,r,u*l),e.update(m,s,1)}function d(u,m,g){if(g===0)return;let f,p;if(i)f=a,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,m,r,u*l,g),e.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function cp(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(e.calls++,o){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function hp(a,t){return a[0]-t[0]}function up(a,t){return Math.abs(t[1])-Math.abs(a[1])}function dp(a,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new be,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==f){let O=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let A=0;y===!0&&(A=1),x===!0&&(A=2),w===!0&&(A=3);let I=h.attributes.position.count*A,F=1;I>t.maxTextureSize&&(F=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const U=new Float32Array(I*F*4*f),D=new nc(U,I,F,f);D.type=gi,D.needsUpdate=!0;const P=A*4;for(let N=0;N<f;N++){const K=E[N],k=T[N],X=M[N],Y=I*F*4*N;for(let it=0;it<K.count;it++){const B=it*P;y===!0&&(o.fromBufferAttribute(K,it),U[Y+B+0]=o.x,U[Y+B+1]=o.y,U[Y+B+2]=o.z,U[Y+B+3]=0),x===!0&&(o.fromBufferAttribute(k,it),U[Y+B+4]=o.x,U[Y+B+5]=o.y,U[Y+B+6]=o.z,U[Y+B+7]=0),w===!0&&(o.fromBufferAttribute(X,it),U[Y+B+8]=o.x,U[Y+B+9]=o.y,U[Y+B+10]=o.z,U[Y+B+11]=X.itemSize===4?o.w:1)}}p={count:f,texture:D,size:new Kt(I,F)},s.set(h,p),h.addEventListener("dispose",O)}let _=0;for(let y=0;y<u.length;y++)_+=u[y];const v=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(a,"morphTargetBaseInfluence",v),d.getUniforms().setValue(a,"morphTargetInfluences",u),d.getUniforms().setValue(a,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let f=n[h.id];if(f===void 0||f.length!==g){f=[];for(let x=0;x<g;x++)f[x]=[x,0];n[h.id]=f}for(let x=0;x<g;x++){const w=f[x];w[0]=x,w[1]=u[x]}f.sort(up);for(let x=0;x<8;x++)x<g&&f[x][1]?(r[x][0]=f[x][0],r[x][1]=f[x][1]):(r[x][0]=Number.MAX_SAFE_INTEGER,r[x][1]=0);r.sort(hp);const p=h.morphAttributes.position,_=h.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const w=r[x],E=w[0],T=w[1];E!==Number.MAX_SAFE_INTEGER&&T?(p&&h.getAttribute("morphTarget"+x)!==p[E]&&h.setAttribute("morphTarget"+x,p[E]),_&&h.getAttribute("morphNormal"+x)!==_[E]&&h.setAttribute("morphNormal"+x,_[E]),i[x]=T,v+=T):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),_&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const y=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(a,"morphTargetBaseInfluence",y),d.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function fp(a,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const dc=new Fe,fc=new nc,pc=new Jh,mc=new cc,Xa=[],Ka=[],Ya=new Float32Array(16),ja=new Float32Array(9),$a=new Float32Array(4);function es(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=Xa[i];if(s===void 0&&(s=new Float32Array(i),Xa[i]=s),t!==0){n.toArray(s,0);for(let o=1,r=0;o!==t;++o)r+=e,a[o].toArray(s,r)}return s}function fe(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function pe(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function _o(a,t){let e=Ka[t];e===void 0&&(e=new Int32Array(t),Ka[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function pp(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function mp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;a.uniform2fv(this.addr,t),pe(e,t)}}function gp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;a.uniform3fv(this.addr,t),pe(e,t)}}function vp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;a.uniform4fv(this.addr,t),pe(e,t)}}function _p(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;$a.set(n),a.uniformMatrix2fv(this.addr,!1,$a),pe(e,n)}}function yp(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;ja.set(n),a.uniformMatrix3fv(this.addr,!1,ja),pe(e,n)}}function xp(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Ya.set(n),a.uniformMatrix4fv(this.addr,!1,Ya),pe(e,n)}}function Mp(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function bp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;a.uniform2iv(this.addr,t),pe(e,t)}}function Sp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;a.uniform3iv(this.addr,t),pe(e,t)}}function wp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;a.uniform4iv(this.addr,t),pe(e,t)}}function Ep(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function Cp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;a.uniform2uiv(this.addr,t),pe(e,t)}}function Ap(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;a.uniform3uiv(this.addr,t),pe(e,t)}}function Tp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;a.uniform4uiv(this.addr,t),pe(e,t)}}function Rp(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||dc,i)}function Lp(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pc,i)}function Dp(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mc,i)}function Ip(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||fc,i)}function Pp(a){switch(a){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return vp;case 35674:return _p;case 35675:return yp;case 35676:return xp;case 5124:case 35670:return Mp;case 35667:case 35671:return bp;case 35668:case 35672:return Sp;case 35669:case 35673:return wp;case 5125:return Ep;case 36294:return Cp;case 36295:return Ap;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Lp;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Ip}}function Op(a,t){a.uniform1fv(this.addr,t)}function Np(a,t){const e=es(t,this.size,2);a.uniform2fv(this.addr,e)}function Bp(a,t){const e=es(t,this.size,3);a.uniform3fv(this.addr,e)}function kp(a,t){const e=es(t,this.size,4);a.uniform4fv(this.addr,e)}function zp(a,t){const e=es(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function Fp(a,t){const e=es(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function Up(a,t){const e=es(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function Gp(a,t){a.uniform1iv(this.addr,t)}function Vp(a,t){a.uniform2iv(this.addr,t)}function Hp(a,t){a.uniform3iv(this.addr,t)}function Wp(a,t){a.uniform4iv(this.addr,t)}function qp(a,t){a.uniform1uiv(this.addr,t)}function Xp(a,t){a.uniform2uiv(this.addr,t)}function Kp(a,t){a.uniform3uiv(this.addr,t)}function Yp(a,t){a.uniform4uiv(this.addr,t)}function jp(a,t,e){const n=this.cache,i=t.length,s=_o(e,i);fe(n,s)||(a.uniform1iv(this.addr,s),pe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||dc,s[o])}function $p(a,t,e){const n=this.cache,i=t.length,s=_o(e,i);fe(n,s)||(a.uniform1iv(this.addr,s),pe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||pc,s[o])}function Zp(a,t,e){const n=this.cache,i=t.length,s=_o(e,i);fe(n,s)||(a.uniform1iv(this.addr,s),pe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||mc,s[o])}function Jp(a,t,e){const n=this.cache,i=t.length,s=_o(e,i);fe(n,s)||(a.uniform1iv(this.addr,s),pe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||fc,s[o])}function Qp(a){switch(a){case 5126:return Op;case 35664:return Np;case 35665:return Bp;case 35666:return kp;case 35674:return zp;case 35675:return Fp;case 35676:return Up;case 5124:case 35670:return Gp;case 35667:case 35671:return Vp;case 35668:case 35672:return Hp;case 35669:case 35673:return Wp;case 5125:return qp;case 36294:return Xp;case 36295:return Kp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}class tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Pp(e.type)}}class em{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Qp(e.type)}}class nm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(t,e[r.id],n)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function Za(a,t){a.seq.push(t),a.map[t.id]=t}function im(a,t,e){const n=a.name,i=n.length;for(Qo.lastIndex=0;;){const s=Qo.exec(n),o=Qo.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===i){Za(e,c===void 0?new tm(r,a,t):new em(r,a,t));break}else{let d=e.map[r];d===void 0&&(d=new nm(r),Za(e,d)),e=d}}}class oo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);im(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const r=e[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ja(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}let sm=0;function om(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}function rm(a){switch(a){case yi:return["Linear","( value )"];case te:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Qa(a,t,e){const n=a.getShaderParameter(t,35713),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+om(a.getShaderSource(t),o)}else return i}function am(a,t){const e=rm(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function lm(a,t){let e;switch(t){case rh:e="Linear";break;case ah:e="Reinhard";break;case lh:e="OptimizedCineon";break;case ch:e="ACESFilmic";break;case hh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cm(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function hm(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function um(a,t){const e={},n=a.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[o]={type:s.type,location:a.getAttribLocation(t,o),locationSize:r}}return e}function vs(a){return a!==""}function tl(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function el(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sr(a){return a.replace(dm,fm)}function fm(a,t){const e=Dt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Sr(e)}const pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(a){return a.replace(pm,mm)}function mm(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function il(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gm(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ms&&(t="SHADOWMAP_TYPE_VSM"),t}function vm(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ki:case Yi:t="ENVMAP_TYPE_CUBE";break;case go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _m(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function ym(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Kl:t="ENVMAP_BLENDING_MULTIPLY";break;case sh:t="ENVMAP_BLENDING_MIX";break;case oh:t="ENVMAP_BLENDING_ADD";break}return t}function xm(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Mm(a,t,e,n){const i=a.getContext(),s=e.defines;let o=e.vertexShader,r=e.fragmentShader;const l=gm(e),c=vm(e),h=_m(e),d=ym(e),u=xm(e),m=e.isWebGL2?"":cm(e),g=hm(s),f=i.createProgram();let p,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(vs).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(vs).join(`
`),_.length>0&&(_+=`
`)):(p=[il(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),_=[m,il(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.encodings_pars_fragment,am("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),o=Sr(o),o=tl(o,e),o=el(o,e),r=Sr(r),r=tl(r,e),r=el(r,e),o=nl(o),r=nl(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===Ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+p+o,x=v+_+r,w=Ja(i,35633,y),E=Ja(i,35632,x);if(i.attachShader(f,w),i.attachShader(f,E),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),a.debug.checkShaderErrors){const A=i.getProgramInfoLog(f).trim(),I=i.getShaderInfoLog(w).trim(),F=i.getShaderInfoLog(E).trim();let U=!0,D=!0;if(i.getProgramParameter(f,35714)===!1){U=!1;const P=Qa(i,w,"vertex"),O=Qa(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+A+`
`+P+`
`+O)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(I===""||F==="")&&(D=!1);D&&(this.diagnostics={runnable:U,programLog:A,vertexShader:{log:I,prefix:p},fragmentShader:{log:F,prefix:_}})}i.deleteShader(w),i.deleteShader(E);let T;this.getUniforms=function(){return T===void 0&&(T=new oo(i,f)),T};let M;return this.getAttributes=function(){return M===void 0&&(M=um(i,f)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=sm++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=E,this}let bm=0;class Sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new wm(t),e.set(t,n)),n}}class wm{constructor(t){this.id=bm++,this.code=t,this.usedTimes=0}}function Em(a,t,e,n,i,s,o){const r=new Nr,l=new Sm,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M,A,I,F,U){const D=F.fog,P=U.geometry,O=M.isMeshStandardMaterial?F.environment:null,N=(M.isMeshStandardMaterial?e:t).get(M.envMap||O),K=N&&N.mapping===go?N.image.height:null,k=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Y=X!==void 0?X.length:0;let it=0;P.morphAttributes.position!==void 0&&(it=1),P.morphAttributes.normal!==void 0&&(it=2),P.morphAttributes.color!==void 0&&(it=3);let B,tt,et,G;if(k){const Et=bn[k];B=Et.vertexShader,tt=Et.fragmentShader}else B=M.vertexShader,tt=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),G=l.getFragmentShaderID(M);const lt=a.getRenderTarget(),ct=M.alphaTest>0,ut=M.clearcoat>0,ot=M.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:M.type,vertexShader:B,fragmentShader:tt,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:G,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:u,outputEncoding:lt===null?a.outputEncoding:lt.isXRRenderTarget===!0?lt.texture.encoding:yi,map:!!M.map,matcap:!!M.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:K,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Rh,tangentSpaceNormalMap:M.normalMapType===$l,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===te,clearcoat:ut,clearcoatMap:ut&&!!M.clearcoatMap,clearcoatRoughnessMap:ut&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ut&&!!M.clearcoatNormalMap,iridescence:ot,iridescenceMap:ot&&!!M.iridescenceMap,iridescenceThicknessMap:ot&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Wi,alphaMap:!!M.alphaMap,alphaTest:ct,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!P.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:it,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:M.toneMapped?a.toneMapping:Fn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zn,flipSided:M.side===Xe,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)A.push(I),A.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(A,M),v(A,M),A.push(a.outputEncoding)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputEncoding),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.combine),M.push(A.vertexUvs),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){r.disableAll(),A.isWebGL2&&r.enable(0),A.supportsVertexTextures&&r.enable(1),A.instancing&&r.enable(2),A.instancingColor&&r.enable(3),A.map&&r.enable(4),A.matcap&&r.enable(5),A.envMap&&r.enable(6),A.lightMap&&r.enable(7),A.aoMap&&r.enable(8),A.emissiveMap&&r.enable(9),A.bumpMap&&r.enable(10),A.normalMap&&r.enable(11),A.objectSpaceNormalMap&&r.enable(12),A.tangentSpaceNormalMap&&r.enable(13),A.clearcoat&&r.enable(14),A.clearcoatMap&&r.enable(15),A.clearcoatRoughnessMap&&r.enable(16),A.clearcoatNormalMap&&r.enable(17),A.iridescence&&r.enable(18),A.iridescenceMap&&r.enable(19),A.iridescenceThicknessMap&&r.enable(20),A.displacementMap&&r.enable(21),A.specularMap&&r.enable(22),A.roughnessMap&&r.enable(23),A.metalnessMap&&r.enable(24),A.gradientMap&&r.enable(25),A.alphaMap&&r.enable(26),A.alphaTest&&r.enable(27),A.vertexColors&&r.enable(28),A.vertexAlphas&&r.enable(29),A.vertexUvs&&r.enable(30),A.vertexTangents&&r.enable(31),A.uvsVertexOnly&&r.enable(32),M.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.skinning&&r.enable(4),A.morphTargets&&r.enable(5),A.morphNormals&&r.enable(6),A.morphColors&&r.enable(7),A.premultipliedAlpha&&r.enable(8),A.shadowMapEnabled&&r.enable(9),A.useLegacyLights&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.specularIntensityMap&&r.enable(15),A.specularColorMap&&r.enable(16),A.transmission&&r.enable(17),A.transmissionMap&&r.enable(18),A.thicknessMap&&r.enable(19),A.sheen&&r.enable(20),A.sheenColorMap&&r.enable(21),A.sheenRoughnessMap&&r.enable(22),A.decodeVideoTexture&&r.enable(23),A.opaque&&r.enable(24),M.push(r.mask)}function y(M){const A=g[M.type];let I;if(A){const F=bn[A];I=hu.clone(F.uniforms)}else I=M.uniforms;return I}function x(M,A){let I;for(let F=0,U=c.length;F<U;F++){const D=c[F];if(D.cacheKey===A){I=D,++I.usedTimes;break}}return I===void 0&&(I=new Mm(a,A,M,s),c.push(I)),I}function w(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function T(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:y,acquireProgram:x,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:T}}function Cm(){let a=new WeakMap;function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function e(s){a.delete(s)}function n(s,o,r){a.get(s)[o]=r}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Am(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function sl(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function ol(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,m,g,f,p){let _=a[t];return _===void 0?(_={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:f,group:p},a[t]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=f,_.group=p),t++,_}function r(d,u,m,g,f,p){const _=o(d,u,m,g,f,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function l(d,u,m,g,f,p){const _=o(d,u,m,g,f,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function c(d,u){e.length>1&&e.sort(d||Am),n.length>1&&n.sort(u||sl),i.length>1&&i.sort(u||sl)}function h(){for(let d=t,u=a.length;d<u;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:r,unshift:l,finish:h,sort:c}}function Tm(){let a=new WeakMap;function t(n,i){const s=a.get(n);let o;return s===void 0?(o=new ol,a.set(n,[o])):i>=s.length?(o=new ol,s.push(o)):o=s[i],o}function e(){a=new WeakMap}return{get:t,dispose:e}}function Rm(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new qt};break;case"SpotLight":e={position:new H,direction:new H,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new H,halfWidth:new H,halfHeight:new H};break}return a[t.id]=e,e}}}function Lm(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let Dm=0;function Im(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function Pm(a,t){const e=new Rm,n=Lm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new H);const s=new H,o=new de,r=new de;function l(h,d){let u=0,m=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,p=0,_=0,v=0,y=0,x=0,w=0,E=0,T=0,M=0;h.sort(Im);const A=d===!0?Math.PI:1;for(let F=0,U=h.length;F<U;F++){const D=h[F],P=D.color,O=D.intensity,N=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=P.r*O*A,m+=P.g*O*A,g+=P.b*O*A;else if(D.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],O);else if(D.isDirectionalLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const X=D.shadow,Y=n.get(D);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=D.shadow.matrix,x++}i.directional[f]=k,f++}else if(D.isSpotLight){const k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(P).multiplyScalar(O*A),k.distance=N,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[_]=k;const X=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,X.updateMatrices(D),D.castShadow&&M++),i.spotLightMatrix[_]=X.matrix,D.castShadow){const Y=n.get(D);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=K,E++}_++}else if(D.isRectAreaLight){const k=e.get(D);k.color.copy(P).multiplyScalar(O),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[v]=k,v++}else if(D.isPointLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*A),k.distance=D.distance,k.decay=D.decay,D.castShadow){const X=D.shadow,Y=n.get(D);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,Y.shadowCameraNear=X.camera.near,Y.shadowCameraFar=X.camera.far,i.pointShadow[p]=Y,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=D.shadow.matrix,w++}i.point[p]=k,p++}else if(D.isHemisphereLight){const k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(O*A),k.groundColor.copy(D.groundColor).multiplyScalar(O*A),i.hemi[y]=k,y++}}v>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==v||I.hemiLength!==y||I.numDirectionalShadows!==x||I.numPointShadows!==w||I.numSpotShadows!==E||I.numSpotMaps!==T)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=v,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=E+T-M,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=M,I.directionalLength=f,I.pointLength=p,I.spotLength=_,I.rectAreaLength=v,I.hemiLength=y,I.numDirectionalShadows=x,I.numPointShadows=w,I.numSpotShadows=E,I.numSpotMaps=T,i.version=Dm++)}function c(h,d){let u=0,m=0,g=0,f=0,p=0;const _=d.matrixWorldInverse;for(let v=0,y=h.length;v<y;v++){const x=h[v];if(x.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),u++}else if(x.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const w=i.rectArea[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),r.identity(),o.copy(x.matrixWorld),o.premultiply(_),r.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),f++}else if(x.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),m++}else if(x.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function rl(a,t){const e=new Pm(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function r(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:r}}function Om(a,t){let e=new WeakMap;function n(s,o=0){const r=e.get(s);let l;return r===void 0?(l=new rl(a,t),e.set(s,[l])):o>=r.length?(l=new rl(a,t),r.push(l)):l=r[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Nm extends Ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bm extends Ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zm=`uniform sampler2D shadow_pass;
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
}`;function Fm(a,t,e){let n=new kr;const i=new Kt,s=new Kt,o=new be,r=new Nm({depthPacking:Th}),l=new Bm,c={},h=e.maxTextureSize,d={[Zn]:Xe,[Xe]:Zn,[zn]:zn},u=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:km,fragmentShader:zm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Qn;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new xt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl,this.render=function(x,w,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const T=a.getRenderTarget(),M=a.getActiveCubeFace(),A=a.getActiveMipmapLevel(),I=a.state;I.setBlending($n),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let F=0,U=x.length;F<U;F++){const D=x[F],P=D.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const O=P.getFrameExtents();if(i.multiply(O),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/O.x),i.x=s.x*O.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/O.y),i.y=s.y*O.y,P.mapSize.y=s.y)),P.map===null){const K=this.type!==ms?{minFilter:ue,magFilter:ue}:{};P.map=new Mi(i.x,i.y,K),P.map.texture.name=D.name+".shadowMap",P.camera.updateProjectionMatrix()}a.setRenderTarget(P.map),a.clear();const N=P.getViewportCount();for(let K=0;K<N;K++){const k=P.getViewport(K);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),I.viewport(o),P.updateMatrices(D,K),n=P.getFrustum(),y(w,E,P.camera,D,this.type)}P.isPointLightShadow!==!0&&this.type===ms&&_(P,E),P.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(T,M,A)};function _(x,w){const E=t.update(f);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Mi(i.x,i.y)),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,a.setRenderTarget(x.mapPass),a.clear(),a.renderBufferDirect(w,null,E,u,f,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,a.setRenderTarget(x.map),a.clear(),a.renderBufferDirect(w,null,E,m,f,null)}function v(x,w,E,T,M,A){let I=null;const F=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(F!==void 0)I=F;else if(I=E.isPointLight===!0?l:r,a.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=I.uuid,D=w.uuid;let P=c[U];P===void 0&&(P={},c[U]=P);let O=P[D];O===void 0&&(O=I.clone(),P[D]=O),I=O}return I.visible=w.visible,I.wireframe=w.wireframe,A===ms?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:d[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,E.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(E.matrixWorld),I.nearDistance=T,I.farDistance=M),I}function y(x,w,E,T,M){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===ms)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const F=t.update(x),U=x.material;if(Array.isArray(U)){const D=F.groups;for(let P=0,O=D.length;P<O;P++){const N=D[P],K=U[N.materialIndex];if(K&&K.visible){const k=v(x,K,T,E.near,E.far,M);a.renderBufferDirect(E,null,F,k,x,N)}}}else if(U.visible){const D=v(x,U,T,E.near,E.far,M);a.renderBufferDirect(E,null,F,D,x,null)}}const I=x.children;for(let F=0,U=I.length;F<U;F++)y(I[F],w,E,T,M)}}function Um(a,t,e){const n=e.isWebGL2;function i(){let z=!1;const J=new be;let rt=null;const gt=new be(0,0,0,0);return{setMask:function(yt){rt!==yt&&!z&&(a.colorMask(yt,yt,yt,yt),rt=yt)},setLocked:function(yt){z=yt},setClear:function(yt,Jt,ve,Re,fn){fn===!0&&(yt*=Re,Jt*=Re,ve*=Re),J.set(yt,Jt,ve,Re),gt.equals(J)===!1&&(a.clearColor(yt,Jt,ve,Re),gt.copy(J))},reset:function(){z=!1,rt=null,gt.set(-1,0,0,0)}}}function s(){let z=!1,J=null,rt=null,gt=null;return{setTest:function(yt){yt?ct(2929):ut(2929)},setMask:function(yt){J!==yt&&!z&&(a.depthMask(yt),J=yt)},setFunc:function(yt){if(rt!==yt){switch(yt){case Zc:a.depthFunc(512);break;case Jc:a.depthFunc(519);break;case Qc:a.depthFunc(513);break;case gr:a.depthFunc(515);break;case th:a.depthFunc(514);break;case eh:a.depthFunc(518);break;case nh:a.depthFunc(516);break;case ih:a.depthFunc(517);break;default:a.depthFunc(515)}rt=yt}},setLocked:function(yt){z=yt},setClear:function(yt){gt!==yt&&(a.clearDepth(yt),gt=yt)},reset:function(){z=!1,J=null,rt=null,gt=null}}}function o(){let z=!1,J=null,rt=null,gt=null,yt=null,Jt=null,ve=null,Re=null,fn=null;return{setTest:function(ie){z||(ie?ct(2960):ut(2960))},setMask:function(ie){J!==ie&&!z&&(a.stencilMask(ie),J=ie)},setFunc:function(ie,Ye,pn){(rt!==ie||gt!==Ye||yt!==pn)&&(a.stencilFunc(ie,Ye,pn),rt=ie,gt=Ye,yt=pn)},setOp:function(ie,Ye,pn){(Jt!==ie||ve!==Ye||Re!==pn)&&(a.stencilOp(ie,Ye,pn),Jt=ie,ve=Ye,Re=pn)},setLocked:function(ie){z=ie},setClear:function(ie){fn!==ie&&(a.clearStencil(ie),fn=ie)},reset:function(){z=!1,J=null,rt=null,gt=null,yt=null,Jt=null,ve=null,Re=null,fn=null}}}const r=new i,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,f=[],p=null,_=!1,v=null,y=null,x=null,w=null,E=null,T=null,M=null,A=!1,I=null,F=null,U=null,D=null,P=null;const O=a.getParameter(35661);let N=!1,K=0;const k=a.getParameter(7938);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=K>=2);let X=null,Y={};const it=a.getParameter(3088),B=a.getParameter(2978),tt=new be().fromArray(it),et=new be().fromArray(B);function G(z,J,rt){const gt=new Uint8Array(4),yt=a.createTexture();a.bindTexture(z,yt),a.texParameteri(z,10241,9728),a.texParameteri(z,10240,9728);for(let Jt=0;Jt<rt;Jt++)a.texImage2D(J+Jt,0,6408,1,1,0,6408,5121,gt);return yt}const lt={};lt[3553]=G(3553,3553,1),lt[34067]=G(34067,34069,6),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ct(2929),l.setFunc(gr),Yt(!1),kt(jr),ct(2884),$t($n);function ct(z){u[z]!==!0&&(a.enable(z),u[z]=!0)}function ut(z){u[z]!==!1&&(a.disable(z),u[z]=!1)}function ot(z,J){return m[z]!==J?(a.bindFramebuffer(z,J),m[z]=J,n&&(z===36009&&(m[36160]=J),z===36160&&(m[36009]=J)),!0):!1}function dt(z,J){let rt=f,gt=!1;if(z)if(rt=g.get(J),rt===void 0&&(rt=[],g.set(J,rt)),z.isWebGLMultipleRenderTargets){const yt=z.texture;if(rt.length!==yt.length||rt[0]!==36064){for(let Jt=0,ve=yt.length;Jt<ve;Jt++)rt[Jt]=36064+Jt;rt.length=yt.length,gt=!0}}else rt[0]!==36064&&(rt[0]=36064,gt=!0);else rt[0]!==1029&&(rt[0]=1029,gt=!0);gt&&(e.isWebGL2?a.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Et(z){return p!==z?(a.useProgram(z),p=z,!0):!1}const St={[Gi]:32774,[Uc]:32778,[Gc]:32779};if(n)St[Qr]=32775,St[ta]=32776;else{const z=t.get("EXT_blend_minmax");z!==null&&(St[Qr]=z.MIN_EXT,St[ta]=z.MAX_EXT)}const Lt={[Vc]:0,[Hc]:1,[Wc]:768,[ql]:770,[$c]:776,[Yc]:774,[Xc]:772,[qc]:769,[Xl]:771,[jc]:775,[Kc]:773};function $t(z,J,rt,gt,yt,Jt,ve,Re){if(z===$n){_===!0&&(ut(3042),_=!1);return}if(_===!1&&(ct(3042),_=!0),z!==Fc){if(z!==v||Re!==A){if((y!==Gi||E!==Gi)&&(a.blendEquation(32774),y=Gi,E=Gi),Re)switch(z){case Wi:a.blendFuncSeparate(1,771,1,771);break;case $r:a.blendFunc(1,1);break;case Zr:a.blendFuncSeparate(0,769,0,1);break;case Jr:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Wi:a.blendFuncSeparate(770,771,1,771);break;case $r:a.blendFunc(770,1);break;case Zr:a.blendFuncSeparate(0,769,0,1);break;case Jr:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,w=null,T=null,M=null,v=z,A=Re}return}yt=yt||J,Jt=Jt||rt,ve=ve||gt,(J!==y||yt!==E)&&(a.blendEquationSeparate(St[J],St[yt]),y=J,E=yt),(rt!==x||gt!==w||Jt!==T||ve!==M)&&(a.blendFuncSeparate(Lt[rt],Lt[gt],Lt[Jt],Lt[ve]),x=rt,w=gt,T=Jt,M=ve),v=z,A=!1}function ne(z,J){z.side===zn?ut(2884):ct(2884);let rt=z.side===Xe;J&&(rt=!rt),Yt(rt),z.blending===Wi&&z.transparent===!1?$t($n):$t(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),r.setMask(z.colorWrite);const gt=z.stencilWrite;c.setTest(gt),gt&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ft(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ct(32926):ut(32926)}function Yt(z){I!==z&&(z?a.frontFace(2304):a.frontFace(2305),I=z)}function kt(z){z!==kc?(ct(2884),z!==F&&(z===jr?a.cullFace(1029):z===zc?a.cullFace(1028):a.cullFace(1032))):ut(2884),F=z}function zt(z){z!==U&&(N&&a.lineWidth(z),U=z)}function Ft(z,J,rt){z?(ct(32823),(D!==J||P!==rt)&&(a.polygonOffset(J,rt),D=J,P=rt)):ut(32823)}function Se(z){z?ct(3089):ut(3089)}function me(z){z===void 0&&(z=33984+O-1),X!==z&&(a.activeTexture(z),X=z)}function L(z,J,rt){rt===void 0&&(X===null?rt=33984+O-1:rt=X);let gt=Y[rt];gt===void 0&&(gt={type:void 0,texture:void 0},Y[rt]=gt),(gt.type!==z||gt.texture!==J)&&(X!==rt&&(a.activeTexture(rt),X=rt),a.bindTexture(z,J||lt[z]),gt.type=z,gt.texture=J)}function C(){const z=Y[X];z!==void 0&&z.type!==void 0&&(a.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function V(){try{a.compressedTexImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{a.compressedTexImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{a.texSubImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{a.texSubImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{a.texStorage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{a.texStorage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{a.texImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{a.texImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(z){tt.equals(z)===!1&&(a.scissor(z.x,z.y,z.z,z.w),tt.copy(z))}function bt(z){et.equals(z)===!1&&(a.viewport(z.x,z.y,z.z,z.w),et.copy(z))}function Ut(z,J){let rt=d.get(J);rt===void 0&&(rt=new WeakMap,d.set(J,rt));let gt=rt.get(z);gt===void 0&&(gt=a.getUniformBlockIndex(J,z.name),rt.set(z,gt))}function Zt(z,J){const gt=d.get(J).get(z);h.get(J)!==gt&&(a.uniformBlockBinding(J,gt,z.__bindingPointIndex),h.set(J,gt))}function ge(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},X=null,Y={},m={},g=new WeakMap,f=[],p=null,_=!1,v=null,y=null,x=null,w=null,E=null,T=null,M=null,A=!1,I=null,F=null,U=null,D=null,P=null,tt.set(0,0,a.canvas.width,a.canvas.height),et.set(0,0,a.canvas.width,a.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:ct,disable:ut,bindFramebuffer:ot,drawBuffers:dt,useProgram:Et,setBlending:$t,setMaterial:ne,setFlipSided:Yt,setCullFace:kt,setLineWidth:zt,setPolygonOffset:Ft,setScissorTest:Se,activeTexture:me,bindTexture:L,unbindTexture:C,compressedTexImage2D:V,compressedTexImage3D:$,texImage2D:_t,texImage3D:At,updateUBOMapping:Ut,uniformBlockBinding:Zt,texStorage2D:j,texStorage3D:Mt,texSubImage2D:nt,texSubImage3D:at,compressedTexSubImage2D:ft,compressedTexSubImage3D:st,scissor:wt,viewport:bt,reset:ge}}function Gm(a,t,e,n,i,s,o){const r=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,C){return _?new OffscreenCanvas(L,C):ao("canvas")}function y(L,C,V,$){let nt=1;if((L.width>$||L.height>$)&&(nt=$/Math.max(L.width,L.height)),nt<1||C===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const at=C?Jl:Math.floor,ft=at(nt*L.width),st=at(nt*L.height);f===void 0&&(f=v(ft,st));const j=V?v(ft,st):f;return j.width=ft,j.height=st,j.getContext("2d").drawImage(L,0,0,ft,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ft+"x"+st+")."),j}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return br(L.width)&&br(L.height)}function w(L){return r?!1:L.wrapS!==We||L.wrapT!==We||L.minFilter!==ue&&L.minFilter!==Je}function E(L,C){return L.generateMipmaps&&C&&L.minFilter!==ue&&L.minFilter!==Je}function T(L){a.generateMipmap(L)}function M(L,C,V,$,nt=!1){if(r===!1)return C;if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let at=C;return C===6403&&(V===5126&&(at=33326),V===5131&&(at=33325),V===5121&&(at=33321)),C===33319&&(V===5126&&(at=33328),V===5131&&(at=33327),V===5121&&(at=33323)),C===6408&&(V===5126&&(at=34836),V===5131&&(at=34842),V===5121&&(at=$===te&&nt===!1?35907:32856),V===32819&&(at=32854),V===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function A(L,C,V){return E(L,V)===!0||L.isFramebufferTexture&&L.minFilter!==ue&&L.minFilter!==Je?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function I(L){return L===ue||L===ea||L===Eo?9728:9729}function F(L){const C=L.target;C.removeEventListener("dispose",F),D(C),C.isVideoTexture&&g.delete(C)}function U(L){const C=L.target;C.removeEventListener("dispose",U),O(C)}function D(L){const C=n.get(L);if(C.__webglInit===void 0)return;const V=L.source,$=p.get(V);if($){const nt=$[C.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&P(L),Object.keys($).length===0&&p.delete(V)}n.remove(L)}function P(L){const C=n.get(L);a.deleteTexture(C.__webglTexture);const V=L.source,$=p.get(V);delete $[C.__cacheKey],o.memory.textures--}function O(L){const C=L.texture,V=n.get(L),$=n.get(C);if($.__webglTexture!==void 0&&(a.deleteTexture($.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)a.deleteFramebuffer(V.__webglFramebuffer[nt]),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer[nt]);else{if(a.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&a.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let nt=0;nt<V.__webglColorRenderbuffer.length;nt++)V.__webglColorRenderbuffer[nt]&&a.deleteRenderbuffer(V.__webglColorRenderbuffer[nt]);V.__webglDepthRenderbuffer&&a.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let nt=0,at=C.length;nt<at;nt++){const ft=n.get(C[nt]);ft.__webglTexture&&(a.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(C[nt])}n.remove(C),n.remove(L)}let N=0;function K(){N=0}function k(){const L=N;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),N+=1,L}function X(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.encoding),C.join()}function Y(L,C){const V=n.get(L);if(L.isVideoTexture&&Se(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const $=L.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(V,L,C);return}}e.bindTexture(3553,V.__webglTexture,33984+C)}function it(L,C){const V=n.get(L);if(L.version>0&&V.__version!==L.version){ut(V,L,C);return}e.bindTexture(35866,V.__webglTexture,33984+C)}function B(L,C){const V=n.get(L);if(L.version>0&&V.__version!==L.version){ut(V,L,C);return}e.bindTexture(32879,V.__webglTexture,33984+C)}function tt(L,C){const V=n.get(L);if(L.version>0&&V.__version!==L.version){ot(V,L,C);return}e.bindTexture(34067,V.__webglTexture,33984+C)}const et={[yr]:10497,[We]:33071,[xr]:33648},G={[ue]:9728,[ea]:9984,[Eo]:9986,[Je]:9729,[uh]:9985,[Ss]:9987};function lt(L,C,V){if(V?(a.texParameteri(L,10242,et[C.wrapS]),a.texParameteri(L,10243,et[C.wrapT]),(L===32879||L===35866)&&a.texParameteri(L,32882,et[C.wrapR]),a.texParameteri(L,10240,G[C.magFilter]),a.texParameteri(L,10241,G[C.minFilter])):(a.texParameteri(L,10242,33071),a.texParameteri(L,10243,33071),(L===32879||L===35866)&&a.texParameteri(L,32882,33071),(C.wrapS!==We||C.wrapT!==We)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(L,10240,I(C.magFilter)),a.texParameteri(L,10241,I(C.minFilter)),C.minFilter!==ue&&C.minFilter!==Je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const $=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===ue||C.minFilter!==Eo&&C.minFilter!==Ss||C.type===gi&&t.has("OES_texture_float_linear")===!1||r===!1&&C.type===ws&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(a.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function ct(L,C){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",F));const $=C.source;let nt=p.get($);nt===void 0&&(nt={},p.set($,nt));const at=X(C);if(at!==L.__cacheKey){nt[at]===void 0&&(nt[at]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,V=!0),nt[at].usedTimes++;const ft=nt[L.__cacheKey];ft!==void 0&&(nt[L.__cacheKey].usedTimes--,ft.usedTimes===0&&P(C)),L.__cacheKey=at,L.__webglTexture=nt[at].texture}return V}function ut(L,C,V){let $=3553;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&($=35866),C.isData3DTexture&&($=32879);const nt=ct(L,C),at=C.source;e.bindTexture($,L.__webglTexture,33984+V);const ft=n.get(at);if(at.version!==ft.__version||nt===!0){e.activeTexture(33984+V),a.pixelStorei(37440,C.flipY),a.pixelStorei(37441,C.premultiplyAlpha),a.pixelStorei(3317,C.unpackAlignment),a.pixelStorei(37443,0);const st=w(C)&&x(C.image)===!1;let j=y(C.image,st,!1,h);j=me(C,j);const Mt=x(j)||r,_t=s.convert(C.format,C.encoding);let At=s.convert(C.type),wt=M(C.internalFormat,_t,At,C.encoding,C.isVideoTexture);lt($,C,Mt);let bt;const Ut=C.mipmaps,Zt=r&&C.isVideoTexture!==!0,ge=ft.__version===void 0||nt===!0,z=A(C,j,Mt);if(C.isDepthTexture)wt=6402,r?C.type===gi?wt=36012:C.type===mi?wt=33190:C.type===qi?wt=35056:wt=33189:C.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===vi&&wt===6402&&C.type!==jl&&C.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=mi,At=s.convert(C.type)),C.format===ji&&wt===6402&&(wt=34041,C.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=qi,At=s.convert(C.type))),ge&&(Zt?e.texStorage2D(3553,1,wt,j.width,j.height):e.texImage2D(3553,0,wt,j.width,j.height,0,_t,At,null));else if(C.isDataTexture)if(Ut.length>0&&Mt){Zt&&ge&&e.texStorage2D(3553,z,wt,Ut[0].width,Ut[0].height);for(let J=0,rt=Ut.length;J<rt;J++)bt=Ut[J],Zt?e.texSubImage2D(3553,J,0,0,bt.width,bt.height,_t,At,bt.data):e.texImage2D(3553,J,wt,bt.width,bt.height,0,_t,At,bt.data);C.generateMipmaps=!1}else Zt?(ge&&e.texStorage2D(3553,z,wt,j.width,j.height),e.texSubImage2D(3553,0,0,0,j.width,j.height,_t,At,j.data)):e.texImage2D(3553,0,wt,j.width,j.height,0,_t,At,j.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Zt&&ge&&e.texStorage3D(35866,z,wt,Ut[0].width,Ut[0].height,j.depth);for(let J=0,rt=Ut.length;J<rt;J++)bt=Ut[J],C.format!==ln?_t!==null?Zt?e.compressedTexSubImage3D(35866,J,0,0,0,bt.width,bt.height,j.depth,_t,bt.data,0,0):e.compressedTexImage3D(35866,J,wt,bt.width,bt.height,j.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(35866,J,0,0,0,bt.width,bt.height,j.depth,_t,At,bt.data):e.texImage3D(35866,J,wt,bt.width,bt.height,j.depth,0,_t,At,bt.data)}else{Zt&&ge&&e.texStorage2D(3553,z,wt,Ut[0].width,Ut[0].height);for(let J=0,rt=Ut.length;J<rt;J++)bt=Ut[J],C.format!==ln?_t!==null?Zt?e.compressedTexSubImage2D(3553,J,0,0,bt.width,bt.height,_t,bt.data):e.compressedTexImage2D(3553,J,wt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(3553,J,0,0,bt.width,bt.height,_t,At,bt.data):e.texImage2D(3553,J,wt,bt.width,bt.height,0,_t,At,bt.data)}else if(C.isDataArrayTexture)Zt?(ge&&e.texStorage3D(35866,z,wt,j.width,j.height,j.depth),e.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,_t,At,j.data)):e.texImage3D(35866,0,wt,j.width,j.height,j.depth,0,_t,At,j.data);else if(C.isData3DTexture)Zt?(ge&&e.texStorage3D(32879,z,wt,j.width,j.height,j.depth),e.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,_t,At,j.data)):e.texImage3D(32879,0,wt,j.width,j.height,j.depth,0,_t,At,j.data);else if(C.isFramebufferTexture){if(ge)if(Zt)e.texStorage2D(3553,z,wt,j.width,j.height);else{let J=j.width,rt=j.height;for(let gt=0;gt<z;gt++)e.texImage2D(3553,gt,wt,J,rt,0,_t,At,null),J>>=1,rt>>=1}}else if(Ut.length>0&&Mt){Zt&&ge&&e.texStorage2D(3553,z,wt,Ut[0].width,Ut[0].height);for(let J=0,rt=Ut.length;J<rt;J++)bt=Ut[J],Zt?e.texSubImage2D(3553,J,0,0,_t,At,bt):e.texImage2D(3553,J,wt,_t,At,bt);C.generateMipmaps=!1}else Zt?(ge&&e.texStorage2D(3553,z,wt,j.width,j.height),e.texSubImage2D(3553,0,0,0,_t,At,j)):e.texImage2D(3553,0,wt,_t,At,j);E(C,Mt)&&T($),ft.__version=at.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function ot(L,C,V){if(C.image.length!==6)return;const $=ct(L,C),nt=C.source;e.bindTexture(34067,L.__webglTexture,33984+V);const at=n.get(nt);if(nt.version!==at.__version||$===!0){e.activeTexture(33984+V),a.pixelStorei(37440,C.flipY),a.pixelStorei(37441,C.premultiplyAlpha),a.pixelStorei(3317,C.unpackAlignment),a.pixelStorei(37443,0);const ft=C.isCompressedTexture||C.image[0].isCompressedTexture,st=C.image[0]&&C.image[0].isDataTexture,j=[];for(let J=0;J<6;J++)!ft&&!st?j[J]=y(C.image[J],!1,!0,c):j[J]=st?C.image[J].image:C.image[J],j[J]=me(C,j[J]);const Mt=j[0],_t=x(Mt)||r,At=s.convert(C.format,C.encoding),wt=s.convert(C.type),bt=M(C.internalFormat,At,wt,C.encoding),Ut=r&&C.isVideoTexture!==!0,Zt=at.__version===void 0||$===!0;let ge=A(C,Mt,_t);lt(34067,C,_t);let z;if(ft){Ut&&Zt&&e.texStorage2D(34067,ge,bt,Mt.width,Mt.height);for(let J=0;J<6;J++){z=j[J].mipmaps;for(let rt=0;rt<z.length;rt++){const gt=z[rt];C.format!==ln?At!==null?Ut?e.compressedTexSubImage2D(34069+J,rt,0,0,gt.width,gt.height,At,gt.data):e.compressedTexImage2D(34069+J,rt,bt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?e.texSubImage2D(34069+J,rt,0,0,gt.width,gt.height,At,wt,gt.data):e.texImage2D(34069+J,rt,bt,gt.width,gt.height,0,At,wt,gt.data)}}}else{z=C.mipmaps,Ut&&Zt&&(z.length>0&&ge++,e.texStorage2D(34067,ge,bt,j[0].width,j[0].height));for(let J=0;J<6;J++)if(st){Ut?e.texSubImage2D(34069+J,0,0,0,j[J].width,j[J].height,At,wt,j[J].data):e.texImage2D(34069+J,0,bt,j[J].width,j[J].height,0,At,wt,j[J].data);for(let rt=0;rt<z.length;rt++){const yt=z[rt].image[J].image;Ut?e.texSubImage2D(34069+J,rt+1,0,0,yt.width,yt.height,At,wt,yt.data):e.texImage2D(34069+J,rt+1,bt,yt.width,yt.height,0,At,wt,yt.data)}}else{Ut?e.texSubImage2D(34069+J,0,0,0,At,wt,j[J]):e.texImage2D(34069+J,0,bt,At,wt,j[J]);for(let rt=0;rt<z.length;rt++){const gt=z[rt];Ut?e.texSubImage2D(34069+J,rt+1,0,0,At,wt,gt.image[J]):e.texImage2D(34069+J,rt+1,bt,At,wt,gt.image[J])}}}E(C,_t)&&T(34067),at.__version=nt.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function dt(L,C,V,$,nt){const at=s.convert(V.format,V.encoding),ft=s.convert(V.type),st=M(V.internalFormat,at,ft,V.encoding);n.get(C).__hasExternalTextures||(nt===32879||nt===35866?e.texImage3D(nt,0,st,C.width,C.height,C.depth,0,at,ft,null):e.texImage2D(nt,0,st,C.width,C.height,0,at,ft,null)),e.bindFramebuffer(36160,L),Ft(C)?u.framebufferTexture2DMultisampleEXT(36160,$,nt,n.get(V).__webglTexture,0,zt(C)):(nt===3553||nt>=34069&&nt<=34074)&&a.framebufferTexture2D(36160,$,nt,n.get(V).__webglTexture,0),e.bindFramebuffer(36160,null)}function Et(L,C,V){if(a.bindRenderbuffer(36161,L),C.depthBuffer&&!C.stencilBuffer){let $=33189;if(V||Ft(C)){const nt=C.depthTexture;nt&&nt.isDepthTexture&&(nt.type===gi?$=36012:nt.type===mi&&($=33190));const at=zt(C);Ft(C)?u.renderbufferStorageMultisampleEXT(36161,at,$,C.width,C.height):a.renderbufferStorageMultisample(36161,at,$,C.width,C.height)}else a.renderbufferStorage(36161,$,C.width,C.height);a.framebufferRenderbuffer(36160,36096,36161,L)}else if(C.depthBuffer&&C.stencilBuffer){const $=zt(C);V&&Ft(C)===!1?a.renderbufferStorageMultisample(36161,$,35056,C.width,C.height):Ft(C)?u.renderbufferStorageMultisampleEXT(36161,$,35056,C.width,C.height):a.renderbufferStorage(36161,34041,C.width,C.height),a.framebufferRenderbuffer(36160,33306,36161,L)}else{const $=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let nt=0;nt<$.length;nt++){const at=$[nt],ft=s.convert(at.format,at.encoding),st=s.convert(at.type),j=M(at.internalFormat,ft,st,at.encoding),Mt=zt(C);V&&Ft(C)===!1?a.renderbufferStorageMultisample(36161,Mt,j,C.width,C.height):Ft(C)?u.renderbufferStorageMultisampleEXT(36161,Mt,j,C.width,C.height):a.renderbufferStorage(36161,j,C.width,C.height)}}a.bindRenderbuffer(36161,null)}function St(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Y(C.depthTexture,0);const $=n.get(C.depthTexture).__webglTexture,nt=zt(C);if(C.depthTexture.format===vi)Ft(C)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,nt):a.framebufferTexture2D(36160,36096,3553,$,0);else if(C.depthTexture.format===ji)Ft(C)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,nt):a.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function Lt(L){const C=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");St(C.__webglFramebuffer,L)}else if(V){C.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(36160,C.__webglFramebuffer[$]),C.__webglDepthbuffer[$]=a.createRenderbuffer(),Et(C.__webglDepthbuffer[$],L,!1)}else e.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=a.createRenderbuffer(),Et(C.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function $t(L,C,V){const $=n.get(L);C!==void 0&&dt($.__webglFramebuffer,L,L.texture,36064,3553),V!==void 0&&Lt(L)}function ne(L){const C=L.texture,V=n.get(L),$=n.get(C);L.addEventListener("dispose",U),L.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=C.version,o.memory.textures++);const nt=L.isWebGLCubeRenderTarget===!0,at=L.isWebGLMultipleRenderTargets===!0,ft=x(L)||r;if(nt){V.__webglFramebuffer=[];for(let st=0;st<6;st++)V.__webglFramebuffer[st]=a.createFramebuffer()}else{if(V.__webglFramebuffer=a.createFramebuffer(),at)if(i.drawBuffers){const st=L.texture;for(let j=0,Mt=st.length;j<Mt;j++){const _t=n.get(st[j]);_t.__webglTexture===void 0&&(_t.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&L.samples>0&&Ft(L)===!1){const st=at?C:[C];V.__webglMultisampledFramebuffer=a.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let j=0;j<st.length;j++){const Mt=st[j];V.__webglColorRenderbuffer[j]=a.createRenderbuffer(),a.bindRenderbuffer(36161,V.__webglColorRenderbuffer[j]);const _t=s.convert(Mt.format,Mt.encoding),At=s.convert(Mt.type),wt=M(Mt.internalFormat,_t,At,Mt.encoding,L.isXRRenderTarget===!0),bt=zt(L);a.renderbufferStorageMultisample(36161,bt,wt,L.width,L.height),a.framebufferRenderbuffer(36160,36064+j,36161,V.__webglColorRenderbuffer[j])}a.bindRenderbuffer(36161,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=a.createRenderbuffer(),Et(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}}if(nt){e.bindTexture(34067,$.__webglTexture),lt(34067,C,ft);for(let st=0;st<6;st++)dt(V.__webglFramebuffer[st],L,C,36064,34069+st);E(C,ft)&&T(34067),e.unbindTexture()}else if(at){const st=L.texture;for(let j=0,Mt=st.length;j<Mt;j++){const _t=st[j],At=n.get(_t);e.bindTexture(3553,At.__webglTexture),lt(3553,_t,ft),dt(V.__webglFramebuffer,L,_t,36064+j,3553),E(_t,ft)&&T(3553)}e.unbindTexture()}else{let st=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(r?st=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(st,$.__webglTexture),lt(st,C,ft),dt(V.__webglFramebuffer,L,C,36064,st),E(C,ft)&&T(st),e.unbindTexture()}L.depthBuffer&&Lt(L)}function Yt(L){const C=x(L)||r,V=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let $=0,nt=V.length;$<nt;$++){const at=V[$];if(E(at,C)){const ft=L.isWebGLCubeRenderTarget?34067:3553,st=n.get(at).__webglTexture;e.bindTexture(ft,st),T(ft),e.unbindTexture()}}}function kt(L){if(r&&L.samples>0&&Ft(L)===!1){const C=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],V=L.width,$=L.height;let nt=16384;const at=[],ft=L.stencilBuffer?33306:36096,st=n.get(L),j=L.isWebGLMultipleRenderTargets===!0;if(j)for(let Mt=0;Mt<C.length;Mt++)e.bindFramebuffer(36160,st.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Mt,36161,null),e.bindFramebuffer(36160,st.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Mt,3553,null,0);e.bindFramebuffer(36008,st.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,st.__webglFramebuffer);for(let Mt=0;Mt<C.length;Mt++){at.push(36064+Mt),L.depthBuffer&&at.push(ft);const _t=st.__ignoreDepthValues!==void 0?st.__ignoreDepthValues:!1;if(_t===!1&&(L.depthBuffer&&(nt|=256),L.stencilBuffer&&(nt|=1024)),j&&a.framebufferRenderbuffer(36008,36064,36161,st.__webglColorRenderbuffer[Mt]),_t===!0&&(a.invalidateFramebuffer(36008,[ft]),a.invalidateFramebuffer(36009,[ft])),j){const At=n.get(C[Mt]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,At,0)}a.blitFramebuffer(0,0,V,$,0,0,V,$,nt,9728),m&&a.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),j)for(let Mt=0;Mt<C.length;Mt++){e.bindFramebuffer(36160,st.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Mt,36161,st.__webglColorRenderbuffer[Mt]);const _t=n.get(C[Mt]).__webglTexture;e.bindFramebuffer(36160,st.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Mt,3553,_t,0)}e.bindFramebuffer(36009,st.__webglMultisampledFramebuffer)}}function zt(L){return Math.min(d,L.samples)}function Ft(L){const C=n.get(L);return r&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Se(L){const C=o.render.frame;g.get(L)!==C&&(g.set(L,C),L.update())}function me(L,C){const V=L.encoding,$=L.format,nt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Mr||V!==yi&&(V===te?r===!1?t.has("EXT_sRGB")===!0&&$===ln?(L.format=Mr,L.minFilter=Je,L.generateMipmaps=!1):C=tc.sRGBToLinear(C):($!==ln||nt!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),C}this.allocateTextureUnit=k,this.resetTextureUnits=K,this.setTexture2D=Y,this.setTexture2DArray=it,this.setTexture3D=B,this.setTextureCube=tt,this.rebindTextures=$t,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Ft}function Vm(a,t,e){const n=e.isWebGL2;function i(s,o=null){let r;if(s===_i)return 5121;if(s===mh)return 32819;if(s===gh)return 32820;if(s===dh)return 5120;if(s===fh)return 5122;if(s===jl)return 5123;if(s===ph)return 5124;if(s===mi)return 5125;if(s===gi)return 5126;if(s===ws)return n?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===vh)return 6406;if(s===ln)return 6408;if(s===_h)return 6409;if(s===yh)return 6410;if(s===vi)return 6402;if(s===ji)return 34041;if(s===Mr)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===xh)return 6403;if(s===Mh)return 36244;if(s===bh)return 33319;if(s===Sh)return 33320;if(s===wh)return 36249;if(s===Co||s===Ao||s===To||s===Ro)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===na||s===ia||s===sa||s===oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Eh)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ra||s===aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===ra)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===aa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===la||s===ca||s===ha||s===ua||s===da||s===fa||s===pa||s===ma||s===ga||s===va||s===_a||s===ya||s===xa||s===Ma)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===la)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ca)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ha)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ua)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===da)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ma)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ga)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===va)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_a)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ya)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ma)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===Lo)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ch||s===ba||s===Sa||s===wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(s===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(s===ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qi?n?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class Hm extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class he extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wm={type:"move"};class tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n),_=this._getHandJoint(c,f);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Wm)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class qm extends Fe{constructor(t,e,n,i,s,o,r,l,c,h){if(h=h!==void 0?h:vi,h!==vi&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vi&&(n=mi),n===void 0&&h===ji&&(n=qi),super(null,i,s,o,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:ue,this.minFilter=l!==void 0?l:ue,this.flipY=!1,this.generateMipmaps=!1}}class Xm extends Qi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,r="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null;const f=e.getContextAttributes();let p=null,_=null;const v=[],y=[],x=new Set,w=new Map,E=new Qe;E.layers.enable(1),E.viewport=new be;const T=new Qe;T.layers.enable(2),T.viewport=new be;const M=[E,T],A=new Hm;A.layers.enable(1),A.layers.enable(2);let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let tt=v[B];return tt===void 0&&(tt=new tr,v[B]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(B){let tt=v[B];return tt===void 0&&(tt=new tr,v[B]=tt),tt.getGripSpace()},this.getHand=function(B){let tt=v[B];return tt===void 0&&(tt=new tr,v[B]=tt),tt.getHandSpace()};function U(B){const tt=y.indexOf(B.inputSource);if(tt===-1)return;const et=v[tt];et!==void 0&&et.dispatchEvent({type:B.type,data:B.inputSource})}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",P);for(let B=0;B<v.length;B++){const tt=y[B];tt!==null&&(y[B]=null,v[B].disconnect(tt))}I=null,F=null,t.setRenderTarget(p),m=null,u=null,d=null,i=null,_=null,it.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",P),f.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:m}),_=new Mi(m.framebufferWidth,m.framebufferHeight,{format:ln,type:_i,encoding:t.outputEncoding,stencilBuffer:f.stencil})}else{let tt=null,et=null,G=null;f.depth&&(G=f.stencil?35056:33190,tt=f.stencil?ji:vi,et=f.stencil?qi:mi);const lt={colorFormat:32856,depthFormat:G,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(lt),i.updateRenderState({layers:[u]}),_=new Mi(u.textureWidth,u.textureHeight,{format:ln,type:_i,depthTexture:new qm(u.textureWidth,u.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:f.stencil,encoding:t.outputEncoding,samples:f.antialias?4:0});const ct=t.properties.get(_);ct.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(r),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(B){for(let tt=0;tt<B.removed.length;tt++){const et=B.removed[tt],G=y.indexOf(et);G>=0&&(y[G]=null,v[G].disconnect(et))}for(let tt=0;tt<B.added.length;tt++){const et=B.added[tt];let G=y.indexOf(et);if(G===-1){for(let ct=0;ct<v.length;ct++)if(ct>=y.length){y.push(et),G=ct;break}else if(y[ct]===null){y[ct]=et,G=ct;break}if(G===-1)break}const lt=v[G];lt&&lt.connect(et)}}const O=new H,N=new H;function K(B,tt,et){O.setFromMatrixPosition(tt.matrixWorld),N.setFromMatrixPosition(et.matrixWorld);const G=O.distanceTo(N),lt=tt.projectionMatrix.elements,ct=et.projectionMatrix.elements,ut=lt[14]/(lt[10]-1),ot=lt[14]/(lt[10]+1),dt=(lt[9]+1)/lt[5],Et=(lt[9]-1)/lt[5],St=(lt[8]-1)/lt[0],Lt=(ct[8]+1)/ct[0],$t=ut*St,ne=ut*Lt,Yt=G/(-St+Lt),kt=Yt*-St;tt.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(kt),B.translateZ(Yt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const zt=ut+Yt,Ft=ot+Yt,Se=$t-kt,me=ne+(G-kt),L=dt*ot/Ft*zt,C=Et*ot/Ft*zt;B.projectionMatrix.makePerspective(Se,me,L,C,zt,Ft)}function k(B,tt){tt===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(tt.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;A.near=T.near=E.near=B.near,A.far=T.far=E.far=B.far,(I!==A.near||F!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,F=A.far);const tt=B.parent,et=A.cameras;k(A,tt);for(let lt=0;lt<et.length;lt++)k(et[lt],tt);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),B.matrix.copy(A.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const G=B.children;for(let lt=0,ct=G.length;lt<ct;lt++)G[lt].updateMatrixWorld(!0);et.length===2?K(A,E,T):A.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return x};let X=null;function Y(B,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){const et=h.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let G=!1;et.length!==A.cameras.length&&(A.cameras.length=0,G=!0);for(let lt=0;lt<et.length;lt++){const ct=et[lt];let ut=null;if(m!==null)ut=m.getViewport(ct);else{const dt=d.getViewSubImage(u,ct);ut=dt.viewport,lt===0&&(t.setRenderTargetTextures(_,dt.colorTexture,u.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(_))}let ot=M[lt];ot===void 0&&(ot=new Qe,ot.layers.enable(lt),ot.viewport=new be,M[lt]=ot),ot.matrix.fromArray(ct.transform.matrix),ot.projectionMatrix.fromArray(ct.projectionMatrix),ot.viewport.set(ut.x,ut.y,ut.width,ut.height),lt===0&&A.matrix.copy(ot.matrix),G===!0&&A.cameras.push(ot)}}for(let et=0;et<v.length;et++){const G=y[et],lt=v[et];G!==null&&lt!==void 0&&lt.update(G,tt,c||o)}if(X&&X(B,tt),tt.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:tt.detectedPlanes});let et=null;for(const G of x)tt.detectedPlanes.has(G)||(et===null&&(et=[]),et.push(G));if(et!==null)for(const G of et)x.delete(G),w.delete(G),n.dispatchEvent({type:"planeremoved",data:G});for(const G of tt.detectedPlanes)if(!x.has(G))x.add(G),w.set(G,tt.lastChangedTime),n.dispatchEvent({type:"planeadded",data:G});else{const lt=w.get(G);G.lastChangedTime>lt&&(w.set(G,G.lastChangedTime),n.dispatchEvent({type:"planechanged",data:G}))}}g=null}const it=new hc;it.setAnimationLoop(Y),this.setAnimationLoop=function(B){X=B},this.dispose=function(){}}}function Km(a,t){function e(f,p){p.color.getRGB(f.fogColor.value,ac(a)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),h(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),d(f,p),p.isMeshPhysicalMaterial&&u(f,p,y)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?r(f,p,_,v):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Xe&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Xe&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const x=a.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uv2Transform.value.copy(y.matrix))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function r(f,p,_,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*_,f.scale.value=v*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function u(f,p,_){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Xe&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Ym(a,t,e,n){let i={},s={},o=[];const r=e.isWebGL2?a.getParameter(35375):0;function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",p));const w=y.program;n.updateUBOMapping(v,w);const E=t.render.frame;s[v.id]!==E&&(u(v),s[v.id]=E)}function h(v){const y=d();v.__bindingPointIndex=y;const x=a.createBuffer(),w=v.__size,E=v.usage;return a.bindBuffer(35345,x),a.bufferData(35345,w,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,y,x),x}function d(){for(let v=0;v<r;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],x=v.uniforms,w=v.__cache;a.bindBuffer(35345,y);for(let E=0,T=x.length;E<T;E++){const M=x[E];if(m(M,E,w)===!0){const A=M.__offset,I=Array.isArray(M.value)?M.value:[M.value];let F=0;for(let U=0;U<I.length;U++){const D=I[U],P=f(D);typeof D=="number"?(M.__data[0]=D,a.bufferSubData(35345,A+F,M.__data)):D.isMatrix3?(M.__data[0]=D.elements[0],M.__data[1]=D.elements[1],M.__data[2]=D.elements[2],M.__data[3]=D.elements[0],M.__data[4]=D.elements[3],M.__data[5]=D.elements[4],M.__data[6]=D.elements[5],M.__data[7]=D.elements[0],M.__data[8]=D.elements[6],M.__data[9]=D.elements[7],M.__data[10]=D.elements[8],M.__data[11]=D.elements[0]):(D.toArray(M.__data,F),F+=P.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,A,M.__data)}}a.bindBuffer(35345,null)}function m(v,y,x){const w=v.value;if(x[y]===void 0){if(typeof w=="number")x[y]=w;else{const E=Array.isArray(w)?w:[w],T=[];for(let M=0;M<E.length;M++)T.push(E[M].clone());x[y]=T}return!0}else if(typeof w=="number"){if(x[y]!==w)return x[y]=w,!0}else{const E=Array.isArray(x[y])?x[y]:[x[y]],T=Array.isArray(w)?w:[w];for(let M=0;M<E.length;M++){const A=E[M];if(A.equals(T[M])===!1)return A.copy(T[M]),!0}}return!1}function g(v){const y=v.uniforms;let x=0;const w=16;let E=0;for(let T=0,M=y.length;T<M;T++){const A=y[T],I={boundary:0,storage:0},F=Array.isArray(A.value)?A.value:[A.value];for(let U=0,D=F.length;U<D;U++){const P=F[U],O=f(P);I.boundary+=O.boundary,I.storage+=O.storage}if(A.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=x,T>0){E=x%w;const U=w-E;E!==0&&U-I.boundary<0&&(x+=w-E,A.__offset=x)}x+=I.storage}return E=x%w,E>0&&(x+=w-E),v.__size=x,v.__cache={},this}function f(v){const y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){const y=v.target;y.removeEventListener("dispose",p);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const v in i)a.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function jm(){const a=ao("canvas");return a.style.display="block",a}function Ur(a={}){this.isWebGLRenderer=!0;const t=a.canvas!==void 0?a.canvas:jm(),e=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,r=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let d=null,u=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=yi,this.useLegacyLights=!0,this.toneMapping=Fn,this.toneMappingExposure=1;const f=this;let p=!1,_=0,v=0,y=null,x=-1,w=null;const E=new be,T=new be;let M=null,A=t.width,I=t.height,F=1,U=null,D=null;const P=new be(0,0,A,I),O=new be(0,0,A,I);let N=!1;const K=new kr;let k=!1,X=!1,Y=null;const it=new de,B=new H,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return y===null?F:1}let G=e;function lt(R,q){for(let Z=0;Z<R.length;Z++){const W=R[Z],Q=t.getContext(W,q);if(Q!==null)return Q}return null}try{const R={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:r,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ir}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",bt,!1),G===null){const q=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&q.shift(),G=lt(q,R),G===null)throw lt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ct,ut,ot,dt,Et,St,Lt,$t,ne,Yt,kt,zt,Ft,Se,me,L,C,V,$,nt,at,ft,st,j;function Mt(){ct=new rp(G),ut=new tp(G,ct,a),ct.init(ut),ft=new Vm(G,ct,ut),ot=new Um(G,ct,ut),dt=new cp,Et=new Cm,St=new Gm(G,ct,ot,Et,ut,ft,dt),Lt=new np(f),$t=new op(f),ne=new vu(G,ut),st=new Jf(G,ct,ne,ut),Yt=new ap(G,ne,dt,st),kt=new fp(G,Yt,ne,dt),$=new dp(G,ut,St),L=new ep(Et),zt=new Em(f,Lt,$t,ct,ut,st,L),Ft=new Km(f,Et),Se=new Tm,me=new Om(ct,ut),V=new Zf(f,Lt,$t,ot,kt,h,o),C=new Fm(f,kt,ut),j=new Ym(G,dt,ut,ot),nt=new Qf(G,ct,dt,ut),at=new lp(G,ct,dt,ut),dt.programs=zt.programs,f.capabilities=ut,f.extensions=ct,f.properties=Et,f.renderLists=Se,f.shadowMap=C,f.state=ot,f.info=dt}Mt();const _t=new Xm(f,G);this.xr=_t,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(A,I,!1))},this.getSize=function(R){return R.set(A,I)},this.setSize=function(R,q,Z=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=R,I=q,t.width=Math.floor(R*F),t.height=Math.floor(q*F),Z===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(A*F,I*F).floor()},this.setDrawingBufferSize=function(R,q,Z){A=R,I=q,F=Z,t.width=Math.floor(R*Z),t.height=Math.floor(q*Z),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(P)},this.setViewport=function(R,q,Z,W){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,q,Z,W),ot.viewport(E.copy(P).multiplyScalar(F).floor())},this.getScissor=function(R){return R.copy(O)},this.setScissor=function(R,q,Z,W){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,q,Z,W),ot.scissor(T.copy(O).multiplyScalar(F).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(R){ot.setScissorTest(N=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){D=R},this.getClearColor=function(R){return R.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(R=!0,q=!0,Z=!0){let W=0;R&&(W|=16384),q&&(W|=256),Z&&(W|=1024),G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),Se.dispose(),me.dispose(),Et.dispose(),Lt.dispose(),$t.dispose(),kt.dispose(),st.dispose(),j.dispose(),zt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",rt),_t.removeEventListener("sessionend",gt),Y&&(Y.dispose(),Y=null),yt.stop()};function At(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const R=dt.autoReset,q=C.enabled,Z=C.autoUpdate,W=C.needsUpdate,Q=C.type;Mt(),dt.autoReset=R,C.enabled=q,C.autoUpdate=Z,C.needsUpdate=W,C.type=Q}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ut(R){const q=R.target;q.removeEventListener("dispose",Ut),Zt(q)}function Zt(R){ge(R),Et.remove(R)}function ge(R){const q=Et.get(R).programs;q!==void 0&&(q.forEach(function(Z){zt.releaseProgram(Z)}),R.isShaderMaterial&&zt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,Z,W,Q,Ct){q===null&&(q=tt);const Rt=Q.isMesh&&Q.matrixWorld.determinant()<0,Ot=Pc(R,q,Z,W,Q);ot.setMaterial(W,Rt);let Nt=Z.index,Wt=1;W.wireframe===!0&&(Nt=Yt.getWireframeAttribute(Z),Wt=2);const Gt=Z.drawRange,Vt=Z.attributes.position;let se=Gt.start*Wt,Ue=(Gt.start+Gt.count)*Wt;Ct!==null&&(se=Math.max(se,Ct.start*Wt),Ue=Math.min(Ue,(Ct.start+Ct.count)*Wt)),Nt!==null?(se=Math.max(se,0),Ue=Math.min(Ue,Nt.count)):Vt!=null&&(se=Math.max(se,0),Ue=Math.min(Ue,Vt.count));const En=Ue-se;if(En<0||En===1/0)return;st.setup(Q,W,Ot,Z,Nt);let ti,oe=nt;if(Nt!==null&&(ti=ne.get(Nt),oe=at,oe.setIndex(ti)),Q.isMesh)W.wireframe===!0?(ot.setLineWidth(W.wireframeLinewidth*et()),oe.setMode(1)):oe.setMode(4);else if(Q.isLine){let Ht=W.linewidth;Ht===void 0&&(Ht=1),ot.setLineWidth(Ht*et()),Q.isLineSegments?oe.setMode(1):Q.isLineLoop?oe.setMode(2):oe.setMode(3)}else Q.isPoints?oe.setMode(0):Q.isSprite&&oe.setMode(4);if(Q.isInstancedMesh)oe.renderInstances(se,En,Q.count);else if(Z.isInstancedBufferGeometry){const Ht=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Mo=Math.min(Z.instanceCount,Ht);oe.renderInstances(se,En,Mo)}else oe.render(se,En)},this.compile=function(R,q){function Z(W,Q,Ct){W.transparent===!0&&W.side===zn&&W.forceSinglePass===!1?(W.side=Xe,W.needsUpdate=!0,Ye(W,Q,Ct),W.side=Zn,W.needsUpdate=!0,Ye(W,Q,Ct),W.side=zn):Ye(W,Q,Ct)}u=me.get(R),u.init(),g.push(u),R.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),u.setupLights(f.useLegacyLights),R.traverse(function(W){const Q=W.material;if(Q)if(Array.isArray(Q))for(let Ct=0;Ct<Q.length;Ct++){const Rt=Q[Ct];Z(Rt,R,W)}else Z(Q,R,W)}),g.pop(),u=null};let z=null;function J(R){z&&z(R)}function rt(){yt.stop()}function gt(){yt.start()}const yt=new hc;yt.setAnimationLoop(J),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(R){z=R,_t.setAnimationLoop(R),R===null?yt.stop():yt.start()},_t.addEventListener("sessionstart",rt),_t.addEventListener("sessionend",gt),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(q),q=_t.getCamera()),R.isScene===!0&&R.onBeforeRender(f,R,q,y),u=me.get(R,g.length),u.init(),g.push(u),it.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),K.setFromProjectionMatrix(it),X=this.localClippingEnabled,k=L.init(this.clippingPlanes,X),d=Se.get(R,m.length),d.init(),m.push(d),Jt(R,q,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(U,D),k===!0&&L.beginShadows();const Z=u.state.shadowsArray;if(C.render(Z,R,q),k===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(d,R),u.setupLights(f.useLegacyLights),q.isArrayCamera){const W=q.cameras;for(let Q=0,Ct=W.length;Q<Ct;Q++){const Rt=W[Q];ve(d,R,Rt,Rt.viewport)}}else ve(d,R,q);y!==null&&(St.updateMultisampleRenderTarget(y),St.updateRenderTargetMipmap(y)),R.isScene===!0&&R.onAfterRender(f,R,q),st.resetDefaultState(),x=-1,w=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Jt(R,q,Z,W){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)u.pushLight(R),R.castShadow&&u.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){W&&B.setFromMatrixPosition(R.matrixWorld).applyMatrix4(it);const Rt=kt.update(R),Ot=R.material;Ot.visible&&d.push(R,Rt,Ot,Z,B.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==dt.render.frame&&(R.skeleton.update(),R.skeleton.frame=dt.render.frame),!R.frustumCulled||K.intersectsObject(R))){W&&B.setFromMatrixPosition(R.matrixWorld).applyMatrix4(it);const Rt=kt.update(R),Ot=R.material;if(Array.isArray(Ot)){const Nt=Rt.groups;for(let Wt=0,Gt=Nt.length;Wt<Gt;Wt++){const Vt=Nt[Wt],se=Ot[Vt.materialIndex];se&&se.visible&&d.push(R,Rt,se,Z,B.z,Vt)}}else Ot.visible&&d.push(R,Rt,Ot,Z,B.z,null)}}const Ct=R.children;for(let Rt=0,Ot=Ct.length;Rt<Ot;Rt++)Jt(Ct[Rt],q,Z,W)}function ve(R,q,Z,W){const Q=R.opaque,Ct=R.transmissive,Rt=R.transparent;u.setupLightsView(Z),k===!0&&L.setGlobalState(f.clippingPlanes,Z),Ct.length>0&&Re(Q,q,Z),W&&ot.viewport(E.copy(W)),Q.length>0&&fn(Q,q,Z),Ct.length>0&&fn(Ct,q,Z),Rt.length>0&&fn(Rt,q,Z),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Re(R,q,Z){const W=ut.isWebGL2;Y===null&&(Y=new Mi(1024,1024,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")?ws:_i,minFilter:Ss,samples:W&&s===!0?4:0}));const Q=f.getRenderTarget();f.setRenderTarget(Y),f.clear();const Ct=f.toneMapping;f.toneMapping=Fn,fn(R,q,Z),f.toneMapping=Ct,St.updateMultisampleRenderTarget(Y),St.updateRenderTargetMipmap(Y),f.setRenderTarget(Q)}function fn(R,q,Z){const W=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Ct=R.length;Q<Ct;Q++){const Rt=R[Q],Ot=Rt.object,Nt=Rt.geometry,Wt=W===null?Rt.material:W,Gt=Rt.group;Ot.layers.test(Z.layers)&&ie(Ot,q,Z,Nt,Wt,Gt)}}function ie(R,q,Z,W,Q,Ct){R.onBeforeRender(f,q,Z,W,Q,Ct),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(f,q,Z,W,R,Ct),Q.transparent===!0&&Q.side===zn&&Q.forceSinglePass===!1?(Q.side=Xe,Q.needsUpdate=!0,f.renderBufferDirect(Z,q,W,Q,R,Ct),Q.side=Zn,Q.needsUpdate=!0,f.renderBufferDirect(Z,q,W,Q,R,Ct),Q.side=zn):f.renderBufferDirect(Z,q,W,Q,R,Ct),R.onAfterRender(f,q,Z,W,Q,Ct)}function Ye(R,q,Z){q.isScene!==!0&&(q=tt);const W=Et.get(R),Q=u.state.lights,Ct=u.state.shadowsArray,Rt=Q.state.version,Ot=zt.getParameters(R,Q.state,Ct,q,Z),Nt=zt.getProgramCacheKey(Ot);let Wt=W.programs;W.environment=R.isMeshStandardMaterial?q.environment:null,W.fog=q.fog,W.envMap=(R.isMeshStandardMaterial?$t:Lt).get(R.envMap||W.environment),Wt===void 0&&(R.addEventListener("dispose",Ut),Wt=new Map,W.programs=Wt);let Gt=Wt.get(Nt);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===Rt)return pn(R,Ot),Gt}else Ot.uniforms=zt.getUniforms(R),R.onBuild(Z,Ot,f),R.onBeforeCompile(Ot,f),Gt=zt.acquireProgram(Ot,Nt),Wt.set(Nt,Gt),W.uniforms=Ot.uniforms;const Vt=W.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Vt.clippingPlanes=L.uniform),pn(R,Ot),W.needsLights=Nc(R),W.lightsStateVersion=Rt,W.needsLights&&(Vt.ambientLightColor.value=Q.state.ambient,Vt.lightProbe.value=Q.state.probe,Vt.directionalLights.value=Q.state.directional,Vt.directionalLightShadows.value=Q.state.directionalShadow,Vt.spotLights.value=Q.state.spot,Vt.spotLightShadows.value=Q.state.spotShadow,Vt.rectAreaLights.value=Q.state.rectArea,Vt.ltc_1.value=Q.state.rectAreaLTC1,Vt.ltc_2.value=Q.state.rectAreaLTC2,Vt.pointLights.value=Q.state.point,Vt.pointLightShadows.value=Q.state.pointShadow,Vt.hemisphereLights.value=Q.state.hemi,Vt.directionalShadowMap.value=Q.state.directionalShadowMap,Vt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Vt.spotShadowMap.value=Q.state.spotShadowMap,Vt.spotLightMatrix.value=Q.state.spotLightMatrix,Vt.spotLightMap.value=Q.state.spotLightMap,Vt.pointShadowMap.value=Q.state.pointShadowMap,Vt.pointShadowMatrix.value=Q.state.pointShadowMatrix);const se=Gt.getUniforms(),Ue=oo.seqWithValue(se.seq,Vt);return W.currentProgram=Gt,W.uniformsList=Ue,Gt}function pn(R,q){const Z=Et.get(R);Z.outputEncoding=q.outputEncoding,Z.instancing=q.instancing,Z.skinning=q.skinning,Z.morphTargets=q.morphTargets,Z.morphNormals=q.morphNormals,Z.morphColors=q.morphColors,Z.morphTargetsCount=q.morphTargetsCount,Z.numClippingPlanes=q.numClippingPlanes,Z.numIntersection=q.numClipIntersection,Z.vertexAlphas=q.vertexAlphas,Z.vertexTangents=q.vertexTangents,Z.toneMapping=q.toneMapping}function Pc(R,q,Z,W,Q){q.isScene!==!0&&(q=tt),St.resetTextureUnits();const Ct=q.fog,Rt=W.isMeshStandardMaterial?q.environment:null,Ot=y===null?f.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:yi,Nt=(W.isMeshStandardMaterial?$t:Lt).get(W.envMap||Rt),Wt=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Gt=!!W.normalMap&&!!Z.attributes.tangent,Vt=!!Z.morphAttributes.position,se=!!Z.morphAttributes.normal,Ue=!!Z.morphAttributes.color,En=W.toneMapped?f.toneMapping:Fn,ti=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,oe=ti!==void 0?ti.length:0,Ht=Et.get(W),Mo=u.state.lights;if(k===!0&&(X===!0||R!==w)){const Ge=R===w&&W.id===x;L.setState(W,R,Ge)}let _e=!1;W.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Mo.state.version||Ht.outputEncoding!==Ot||Q.isInstancedMesh&&Ht.instancing===!1||!Q.isInstancedMesh&&Ht.instancing===!0||Q.isSkinnedMesh&&Ht.skinning===!1||!Q.isSkinnedMesh&&Ht.skinning===!0||Ht.envMap!==Nt||W.fog===!0&&Ht.fog!==Ct||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==L.numPlanes||Ht.numIntersection!==L.numIntersection)||Ht.vertexAlphas!==Wt||Ht.vertexTangents!==Gt||Ht.morphTargets!==Vt||Ht.morphNormals!==se||Ht.morphColors!==Ue||Ht.toneMapping!==En||ut.isWebGL2===!0&&Ht.morphTargetsCount!==oe)&&(_e=!0):(_e=!0,Ht.__version=W.version);let ei=Ht.currentProgram;_e===!0&&(ei=Ye(W,q,Q));let Kr=!1,ns=!1,bo=!1;const Le=ei.getUniforms(),ni=Ht.uniforms;if(ot.useProgram(ei.program)&&(Kr=!0,ns=!0,bo=!0),W.id!==x&&(x=W.id,ns=!0),Kr||w!==R){if(Le.setValue(G,"projectionMatrix",R.projectionMatrix),ut.logarithmicDepthBuffer&&Le.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),w!==R&&(w=R,ns=!0,bo=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const Ge=Le.map.cameraPosition;Ge!==void 0&&Ge.setValue(G,B.setFromMatrixPosition(R.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Le.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||Q.isSkinnedMesh)&&Le.setValue(G,"viewMatrix",R.matrixWorldInverse)}if(Q.isSkinnedMesh){Le.setOptional(G,Q,"bindMatrix"),Le.setOptional(G,Q,"bindMatrixInverse");const Ge=Q.skeleton;Ge&&(ut.floatVertexTextures?(Ge.boneTexture===null&&Ge.computeBoneTexture(),Le.setValue(G,"boneTexture",Ge.boneTexture,St),Le.setValue(G,"boneTextureSize",Ge.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const So=Z.morphAttributes;if((So.position!==void 0||So.normal!==void 0||So.color!==void 0&&ut.isWebGL2===!0)&&$.update(Q,Z,ei),(ns||Ht.receiveShadow!==Q.receiveShadow)&&(Ht.receiveShadow=Q.receiveShadow,Le.setValue(G,"receiveShadow",Q.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ni.envMap.value=Nt,ni.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ns&&(Le.setValue(G,"toneMappingExposure",f.toneMappingExposure),Ht.needsLights&&Oc(ni,bo),Ct&&W.fog===!0&&Ft.refreshFogUniforms(ni,Ct),Ft.refreshMaterialUniforms(ni,W,F,I,Y),oo.upload(G,Ht.uniformsList,ni,St)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(oo.upload(G,Ht.uniformsList,ni,St),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Le.setValue(G,"center",Q.center),Le.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Le.setValue(G,"normalMatrix",Q.normalMatrix),Le.setValue(G,"modelMatrix",Q.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ge=W.uniformsGroups;for(let wo=0,Bc=Ge.length;wo<Bc;wo++)if(ut.isWebGL2){const Yr=Ge[wo];j.update(Yr,ei),j.bind(Yr,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function Oc(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Nc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(R,q,Z){Et.get(R.texture).__webglTexture=q,Et.get(R.depthTexture).__webglTexture=Z;const W=Et.get(R);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=Z===void 0,W.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,q){const Z=Et.get(R);Z.__webglFramebuffer=q,Z.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,Z=0){y=R,_=q,v=Z;let W=!0,Q=null,Ct=!1,Rt=!1;if(R){const Nt=Et.get(R);Nt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(36160,null),W=!1):Nt.__webglFramebuffer===void 0?St.setupRenderTarget(R):Nt.__hasExternalTextures&&St.rebindTextures(R,Et.get(R.texture).__webglTexture,Et.get(R.depthTexture).__webglTexture);const Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Rt=!0);const Gt=Et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Q=Gt[q],Ct=!0):ut.isWebGL2&&R.samples>0&&St.useMultisampledRTT(R)===!1?Q=Et.get(R).__webglMultisampledFramebuffer:Q=Gt,E.copy(R.viewport),T.copy(R.scissor),M=R.scissorTest}else E.copy(P).multiplyScalar(F).floor(),T.copy(O).multiplyScalar(F).floor(),M=N;if(ot.bindFramebuffer(36160,Q)&&ut.drawBuffers&&W&&ot.drawBuffers(R,Q),ot.viewport(E),ot.scissor(T),ot.setScissorTest(M),Ct){const Nt=Et.get(R.texture);G.framebufferTexture2D(36160,36064,34069+q,Nt.__webglTexture,Z)}else if(Rt){const Nt=Et.get(R.texture),Wt=q||0;G.framebufferTextureLayer(36160,36064,Nt.__webglTexture,Z||0,Wt)}x=-1},this.readRenderTargetPixels=function(R,q,Z,W,Q,Ct,Rt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ot=Ot[Rt]),Ot){ot.bindFramebuffer(36160,Ot);try{const Nt=R.texture,Wt=Nt.format,Gt=Nt.type;if(Wt!==ln&&ft.convert(Wt)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=Gt===ws&&(ct.has("EXT_color_buffer_half_float")||ut.isWebGL2&&ct.has("EXT_color_buffer_float"));if(Gt!==_i&&ft.convert(Gt)!==G.getParameter(35738)&&!(Gt===gi&&(ut.isWebGL2||ct.has("OES_texture_float")||ct.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-W&&Z>=0&&Z<=R.height-Q&&G.readPixels(q,Z,W,Q,ft.convert(Wt),ft.convert(Gt),Ct)}finally{const Nt=y!==null?Et.get(y).__webglFramebuffer:null;ot.bindFramebuffer(36160,Nt)}}},this.copyFramebufferToTexture=function(R,q,Z=0){const W=Math.pow(2,-Z),Q=Math.floor(q.image.width*W),Ct=Math.floor(q.image.height*W);St.setTexture2D(q,0),G.copyTexSubImage2D(3553,Z,0,0,R.x,R.y,Q,Ct),ot.unbindTexture()},this.copyTextureToTexture=function(R,q,Z,W=0){const Q=q.image.width,Ct=q.image.height,Rt=ft.convert(Z.format),Ot=ft.convert(Z.type);St.setTexture2D(Z,0),G.pixelStorei(37440,Z.flipY),G.pixelStorei(37441,Z.premultiplyAlpha),G.pixelStorei(3317,Z.unpackAlignment),q.isDataTexture?G.texSubImage2D(3553,W,R.x,R.y,Q,Ct,Rt,Ot,q.image.data):q.isCompressedTexture?G.compressedTexSubImage2D(3553,W,R.x,R.y,q.mipmaps[0].width,q.mipmaps[0].height,Rt,q.mipmaps[0].data):G.texSubImage2D(3553,W,R.x,R.y,Rt,Ot,q.image),W===0&&Z.generateMipmaps&&G.generateMipmap(3553),ot.unbindTexture()},this.copyTextureToTexture3D=function(R,q,Z,W,Q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=R.max.x-R.min.x+1,Rt=R.max.y-R.min.y+1,Ot=R.max.z-R.min.z+1,Nt=ft.convert(W.format),Wt=ft.convert(W.type);let Gt;if(W.isData3DTexture)St.setTexture3D(W,0),Gt=32879;else if(W.isDataArrayTexture)St.setTexture2DArray(W,0),Gt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,W.flipY),G.pixelStorei(37441,W.premultiplyAlpha),G.pixelStorei(3317,W.unpackAlignment);const Vt=G.getParameter(3314),se=G.getParameter(32878),Ue=G.getParameter(3316),En=G.getParameter(3315),ti=G.getParameter(32877),oe=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;G.pixelStorei(3314,oe.width),G.pixelStorei(32878,oe.height),G.pixelStorei(3316,R.min.x),G.pixelStorei(3315,R.min.y),G.pixelStorei(32877,R.min.z),Z.isDataTexture||Z.isData3DTexture?G.texSubImage3D(Gt,Q,q.x,q.y,q.z,Ct,Rt,Ot,Nt,Wt,oe.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Gt,Q,q.x,q.y,q.z,Ct,Rt,Ot,Nt,oe.data)):G.texSubImage3D(Gt,Q,q.x,q.y,q.z,Ct,Rt,Ot,Nt,Wt,oe),G.pixelStorei(3314,Vt),G.pixelStorei(32878,se),G.pixelStorei(3316,Ue),G.pixelStorei(3315,En),G.pixelStorei(32877,ti),Q===0&&W.generateMipmaps&&G.generateMipmap(Gt),ot.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?St.setTextureCube(R,0):R.isData3DTexture?St.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?St.setTexture2DArray(R,0):St.setTexture2D(R,0),ot.unbindTexture()},this.resetState=function(){_=0,v=0,y=null,ot.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Ur.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class $m extends Ur{}$m.prototype.isWebGL1Renderer=!0;class Gr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new Gr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Zm extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class gc extends Fe{constructor(t,e,n,i,s,o,r,l,c){super(t,e,n,i,s,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jt extends Ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vc extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const er=new de,al=new H,ll=new H;class Jm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;al.setFromMatrixPosition(t.matrixWorld),e.position.copy(al),ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ll),e.updateMatrixWorld(),er.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(er),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(er)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qm extends Jm{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tg extends vc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Qm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class eg extends vc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ng{constructor(t,e,n=0,i=1/0){this.ray=new ic(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return wr(t,this,n,e),n.sort(cl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)wr(t[i],this,n,e);return n.sort(cl),n}}function cl(a,t){return a.distance-t.distance}function wr(a,t,e,n){if(a.layers.test(t.layers)&&a.raycast(t,e),n===!0){const i=a.children;for(let s=0,o=i.length;s<o;s++)wr(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ir}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ir);const ht={CHUNK_SIZE:16,RENDER_DISTANCE:3,GRAVITY:-19.8,PLAYER_SPEED:12,PLAYER_JUMP_FORCE:8,PLAYER_HEIGHT:1.8,PLAYER_RADIUS:.4,FOVY:75,NEAR:.1,FAR:1e3,PLAYER_MAX_HP:10,FALL_DAMAGE_MIN_SPEED:-12,FALL_DAMAGE_FACTOR:1.5,MAX_MOBS:5,MOB_SPAWN_RADIUS:25,MOB_DESPAWN_RADIUS:35,MAX_DROPPED_ITEMS:30,ITEM_DESPAWN_TIME:30,ITEM_PICKUP_RADIUS:3.5,GAS_WEB_APP_URL:"https://script.google.com/macros/s/AKfycbzKtNw2WKxcfTh8bIqK5-9NqxHXHR9SFn0SRsL366S97-JodCSj_-fCu3rqJzbF2x7Dcw/exec"},$s={keyForward:"KeyW",keyBackward:"KeyS",keyLeft:"KeyA",keyRight:"KeyD",keyJump:"Space",keyPlaceBlock:"KeyV",keyBreakBlock:"KeyB",keyOpenMap:"KeyM",keyOpenInventory:"KeyE",keyOpenCrafting:"KeyC",keyOpenManual:"KeyN",keyRegisterHome:"KeyH",invertClicks:!1,enableShadows:!0,easyMode:!0,characterType:"boy1",keyRescue:"KeyP"},hl="maikurafu_config";class ig{currentConfig;constructor(){this.currentConfig={...$s},this.load()}load(){try{const t=localStorage.getItem(hl);if(t){const e=JSON.parse(t);this.currentConfig={...$s,...e}}}catch(t){console.error("設定の読み込みに失敗しました。デフォルト設定を使用します。",t),this.currentConfig={...$s}}return this.currentConfig}getConfig(){return this.currentConfig}save(t){this.currentConfig={...this.currentConfig,...t};try{localStorage.setItem(hl,JSON.stringify(this.currentConfig))}catch(e){console.error("設定の保存に失敗しました。",e)}}reset(){return this.currentConfig={...$s},this.save(this.currentConfig),this.currentConfig}}const we=new ig;class sg{scene;camera;renderer;container;constructor(t){const e=document.getElementById(t);if(!e)throw new Error(`Container element with id "${t}" not found.`);this.container=e,this.initScene(),this.initCamera(),this.initRenderer(),window.addEventListener("resize",this.onWindowResize.bind(this))}initScene(){this.scene=new Zm,this.scene.background=new qt(8306926),this.scene.fog=new Gr(8306926,.015)}initCamera(){const t=this.container.clientWidth/this.container.clientHeight;this.camera=new Qe(ht.FOVY,t,ht.NEAR,ht.FAR),this.camera.position.set(0,5,10),this.camera.lookAt(0,0,0)}initRenderer(){const t=we.getConfig();this.renderer=new Ur({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=t.enableShadows,this.renderer.shadowMap.type=Wl,this.container.appendChild(this.renderer.domElement)}onWindowResize(){const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}render(){this.renderer.render(this.scene,this.camera)}}var b=(a=>(a[a.AIR=0]="AIR",a[a.GROUND=1]="GROUND",a[a.DIRT=2]="DIRT",a[a.STONE=3]="STONE",a[a.WOOD=4]="WOOD",a[a.LEAVES=5]="LEAVES",a[a.PLANK=6]="PLANK",a[a.BRICK=7]="BRICK",a[a.SAND=8]="SAND",a[a.COAL_ORE=9]="COAL_ORE",a[a.TORCH=10]="TORCH",a[a.GLASS=11]="GLASS",a[a.DOOR_CLOSED=12]="DOOR_CLOSED",a[a.DOOR_OPEN=13]="DOOR_OPEN",a[a.SWORD=14]="SWORD",a[a.STAIRS=15]="STAIRS",a[a.FENCE=16]="FENCE",a[a.BED_HEAD=17]="BED_HEAD",a[a.BED_FOOT=18]="BED_FOOT",a[a.FURNACE=19]="FURNACE",a[a.CHEST=20]="CHEST",a[a.WATER=21]="WATER",a[a.DIAMOND_SWORD=22]="DIAMOND_SWORD",a[a.HAMMER=23]="HAMMER",a[a.BEDROCK=24]="BEDROCK",a[a.IRON_ORE=25]="IRON_ORE",a[a.GOLD_ORE=26]="GOLD_ORE",a[a.DIAMOND_ORE=27]="DIAMOND_ORE",a[a.STICK=28]="STICK",a[a.IRON_INGOT=29]="IRON_INGOT",a[a.GOLD_INGOT=30]="GOLD_INGOT",a[a.DIAMOND=31]="DIAMOND",a[a.COBBLESTONE=32]="COBBLESTONE",a[a.COAL=33]="COAL",a[a.APPLE=34]="APPLE",a[a.WOODEN_PICKAXE=35]="WOODEN_PICKAXE",a[a.STONE_PICKAXE=36]="STONE_PICKAXE",a[a.IRON_PICKAXE=37]="IRON_PICKAXE",a[a.DIAMOND_PICKAXE=38]="DIAMOND_PICKAXE",a[a.WOODEN_AXE=39]="WOODEN_AXE",a[a.STONE_AXE=40]="STONE_AXE",a[a.IRON_AXE=41]="IRON_AXE",a[a.DIAMOND_AXE=42]="DIAMOND_AXE",a[a.WOODEN_SHOVEL=43]="WOODEN_SHOVEL",a[a.STONE_SHOVEL=44]="STONE_SHOVEL",a[a.IRON_SHOVEL=45]="IRON_SHOVEL",a[a.DIAMOND_SHOVEL=46]="DIAMOND_SHOVEL",a[a.LEATHER_ARMOR_SET=47]="LEATHER_ARMOR_SET",a[a.IRON_ARMOR_SET=48]="IRON_ARMOR_SET",a[a.DIAMOND_ARMOR_SET=49]="DIAMOND_ARMOR_SET",a))(b||{});const wn={0:{id:0,name:"くうき",isSolid:!1,isTransparent:!0,uvs:{front:0,back:0,left:0,right:0,top:0,bottom:0}},1:{id:1,name:"くさブロック",isSolid:!0,isTransparent:!1,uvs:{front:3,back:3,left:3,right:3,top:0,bottom:2},drops:2,hardness:.5,requiredToolCategory:"shovel"},2:{id:2,name:"つち",isSolid:!0,isTransparent:!1,uvs:{front:1,back:1,left:1,right:1,top:1,bottom:1},hardness:.5,requiredToolCategory:"shovel"},3:{id:3,name:"いし",isSolid:!0,isTransparent:!1,uvs:{front:1,back:1,left:1,right:1,top:1,bottom:1},drops:32,hardness:1.5,requiredToolCategory:"pickaxe"},4:{id:4,name:"まるた",isSolid:!0,isTransparent:!1,uvs:{front:4,back:4,left:4,right:4,top:5,bottom:5},hardness:2,requiredToolCategory:"axe"},5:{id:5,name:"はっぱ",isSolid:!0,isTransparent:!1,uvs:{front:6,back:6,left:6,right:6,top:6,bottom:6},hardness:.2},6:{id:6,name:"いた",isSolid:!0,isTransparent:!1,uvs:{front:9,back:9,left:9,right:9,top:9,bottom:9},hardness:2,requiredToolCategory:"axe"},7:{id:7,name:"れんが",isSolid:!0,isTransparent:!1,uvs:{front:7,back:7,left:7,right:7,top:7,bottom:7},hardness:2,requiredToolCategory:"pickaxe"},8:{id:8,name:"すな",isSolid:!0,isTransparent:!1,uvs:{front:8,back:8,left:8,right:8,top:8,bottom:8},hardness:.5,requiredToolCategory:"shovel"},9:{id:9,name:"せきたんこうせき",isSolid:!0,isTransparent:!1,uvs:{front:25,back:25,left:25,right:25,top:25,bottom:25},drops:33,hardness:3,requiredToolCategory:"pickaxe",minToolTier:0},10:{id:10,name:"たいまつ",isSolid:!1,isTransparent:!0,lightLevel:14,uvs:{front:11,back:11,left:11,right:11,top:11,bottom:11}},11:{id:11,name:"ガラス",isSolid:!0,isTransparent:!0,uvs:{front:12,back:12,left:12,right:12,top:12,bottom:12},hardness:.3},12:{id:12,name:"ドア（しめる）",isSolid:!0,isTransparent:!0,uvs:{front:13,back:13,left:13,right:13,top:13,bottom:13},hardness:1,requiredToolCategory:"axe"},13:{id:13,name:"ドア（あける）",isSolid:!1,isTransparent:!0,uvs:{front:13,back:13,left:13,right:13,top:13,bottom:13},hardness:1,requiredToolCategory:"axe"},14:{id:14,name:"いしのけん",isSolid:!1,isTransparent:!0,uvs:{front:14,back:14,left:14,right:14,top:14,bottom:14},isTool:!0,toolCategory:"sword",toolTier:1,speedMultiplier:1.5},15:{id:15,name:"きのかいだん",isSolid:!0,isTransparent:!0,uvs:{front:9,back:9,left:9,right:9,top:9,bottom:9},hardness:1,requiredToolCategory:"axe"},16:{id:16,name:"さく",isSolid:!0,isTransparent:!0,uvs:{front:16,back:16,left:16,right:16,top:16,bottom:16},hardness:1,requiredToolCategory:"axe"},17:{id:17,name:"ベッド（まくら）",isSolid:!0,isTransparent:!0,uvs:{front:18,back:18,left:18,right:18,top:17,bottom:16},hardness:.5},18:{id:18,name:"ベッド（あしもと）",isSolid:!0,isTransparent:!0,uvs:{front:18,back:18,left:18,right:18,top:18,bottom:16},hardness:.5},19:{id:19,name:"かまど",isSolid:!0,isTransparent:!1,uvs:{front:19,back:2,left:2,right:2,top:2,bottom:2},hardness:2,requiredToolCategory:"pickaxe"},20:{id:20,name:"チェスト",isSolid:!0,isTransparent:!0,uvs:{front:20,back:21,left:21,right:21,top:21,bottom:16},hardness:2,requiredToolCategory:"axe"},21:{id:21,name:"みず",isSolid:!1,isTransparent:!0,uvs:{front:22,back:22,left:22,right:22,top:22,bottom:22}},22:{id:22,name:"ダイヤのけん",isSolid:!1,isTransparent:!0,uvs:{front:23,back:23,left:23,right:23,top:23,bottom:23},isTool:!0,toolCategory:"sword",toolTier:3,speedMultiplier:1.5},23:{id:23,name:"ハンマー",isSolid:!1,isTransparent:!0,uvs:{front:24,back:24,left:24,right:24,top:24,bottom:24},isTool:!0,toolCategory:"sword",toolTier:2,speedMultiplier:1.5},24:{id:24,name:"いわばん",isSolid:!0,isTransparent:!1,uvs:{front:25,back:25,left:25,right:25,top:25,bottom:25}},25:{id:25,name:"てつこうせき",isSolid:!0,isTransparent:!1,uvs:{front:26,back:26,left:26,right:26,top:26,bottom:26},hardness:3,requiredToolCategory:"pickaxe",minToolTier:1},26:{id:26,name:"きんこうせき",isSolid:!0,isTransparent:!1,uvs:{front:27,back:27,left:27,right:27,top:27,bottom:27},hardness:3,requiredToolCategory:"pickaxe",minToolTier:2},27:{id:27,name:"ダイヤこうせき",isSolid:!0,isTransparent:!1,uvs:{front:28,back:28,left:28,right:28,top:28,bottom:28},drops:31,hardness:3,requiredToolCategory:"pickaxe",minToolTier:2},28:{id:28,name:"きのぼう",isSolid:!1,isTransparent:!0,uvs:{front:29,back:29,left:29,right:29,top:29,bottom:29}},29:{id:29,name:"てつインゴット",isSolid:!1,isTransparent:!0,uvs:{front:30,back:30,left:30,right:30,top:30,bottom:30}},30:{id:30,name:"きんインゴット",isSolid:!1,isTransparent:!0,uvs:{front:31,back:31,left:31,right:31,top:31,bottom:31}},31:{id:31,name:"ダイヤモンド",isSolid:!1,isTransparent:!0,uvs:{front:32,back:32,left:32,right:32,top:32,bottom:32}},32:{id:32,name:"丸石",isSolid:!0,isTransparent:!1,uvs:{front:33,back:33,left:33,right:33,top:33,bottom:33}},33:{id:33,name:"石炭",isSolid:!1,isTransparent:!0,uvs:{front:34,back:34,left:34,right:34,top:34,bottom:34}},34:{id:34,name:"リンゴ",isSolid:!1,isTransparent:!0,uvs:{front:35,back:35,left:35,right:35,top:35,bottom:35}},35:{id:35,name:"木のツルハシ",isSolid:!1,isTransparent:!0,uvs:{front:36,back:36,left:36,right:36,top:36,bottom:36},isTool:!0,toolCategory:"pickaxe",toolTier:0,speedMultiplier:2},36:{id:36,name:"石のツルハシ",isSolid:!1,isTransparent:!0,uvs:{front:37,back:37,left:37,right:37,top:37,bottom:37},isTool:!0,toolCategory:"pickaxe",toolTier:1,speedMultiplier:4},37:{id:37,name:"鉄のツルハシ",isSolid:!1,isTransparent:!0,uvs:{front:38,back:38,left:38,right:38,top:38,bottom:38},isTool:!0,toolCategory:"pickaxe",toolTier:2,speedMultiplier:6},38:{id:38,name:"ダイヤのツルハシ",isSolid:!1,isTransparent:!0,uvs:{front:39,back:39,left:39,right:39,top:39,bottom:39},isTool:!0,toolCategory:"pickaxe",toolTier:3,speedMultiplier:8},39:{id:39,name:"木の斧",isSolid:!1,isTransparent:!0,uvs:{front:40,back:40,left:40,right:40,top:40,bottom:40},isTool:!0,toolCategory:"axe",toolTier:0,speedMultiplier:2},40:{id:40,name:"石の斧",isSolid:!1,isTransparent:!0,uvs:{front:41,back:41,left:41,right:41,top:41,bottom:41},isTool:!0,toolCategory:"axe",toolTier:1,speedMultiplier:4},41:{id:41,name:"鉄の斧",isSolid:!1,isTransparent:!0,uvs:{front:42,back:42,left:42,right:42,top:42,bottom:42},isTool:!0,toolCategory:"axe",toolTier:2,speedMultiplier:6},42:{id:42,name:"ダイヤの斧",isSolid:!1,isTransparent:!0,uvs:{front:43,back:43,left:43,right:43,top:43,bottom:43},isTool:!0,toolCategory:"axe",toolTier:3,speedMultiplier:8},43:{id:43,name:"木のシャベル",isSolid:!1,isTransparent:!0,uvs:{front:44,back:44,left:44,right:44,top:44,bottom:44},isTool:!0,toolCategory:"shovel",toolTier:0,speedMultiplier:2},44:{id:44,name:"石のシャベル",isSolid:!1,isTransparent:!0,uvs:{front:45,back:45,left:45,right:45,top:45,bottom:45},isTool:!0,toolCategory:"shovel",toolTier:1,speedMultiplier:4},45:{id:45,name:"鉄のシャベル",isSolid:!1,isTransparent:!0,uvs:{front:46,back:46,left:46,right:46,top:46,bottom:46},isTool:!0,toolCategory:"shovel",toolTier:2,speedMultiplier:6},46:{id:46,name:"ダイヤのシャベル",isSolid:!1,isTransparent:!0,uvs:{front:47,back:47,left:47,right:47,top:47,bottom:47},isTool:!0,toolCategory:"shovel",toolTier:3,speedMultiplier:8},47:{id:47,name:"革の防具セット",isSolid:!1,isTransparent:!0,uvs:{front:48,back:48,left:48,right:48,top:48,bottom:48}},48:{id:48,name:"鉄の防具セット",isSolid:!1,isTransparent:!0,uvs:{front:49,back:49,left:49,right:49,top:49,bottom:49}},49:{id:49,name:"ダイヤの防具セット",isSolid:!1,isTransparent:!0,uvs:{front:50,back:50,left:50,right:50,top:50,bottom:50}}},og=[{dir:[1,0,0],corners:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uvName:"right"},{dir:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uvName:"left"},{dir:[0,1,0],corners:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],uvName:"top"},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uvName:"bottom"},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uvName:"front"},{dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uvName:"back"}],ul={top:1,bottom:.5,front:.8,back:.8,left:.65,right:.65};class dl{x;y;z;blocks;mesh=null;isDirty=!0;size=ht.CHUNK_SIZE;constructor(t,e,n){this.x=t,this.y=e,this.z=n,this.blocks=new Uint8Array(this.size*this.size*this.size)}getIndex(t,e,n){return t+e*this.size+n*this.size*this.size}isOutOfBounds(t,e,n){return t<0||t>=this.size||e<0||e>=this.size||n<0||n>=this.size}setBlock(t,e,n,i){if(this.isOutOfBounds(t,e,n))return;const s=this.getIndex(t,e,n);this.blocks[s]!==i&&(this.blocks[s]=i,this.isDirty=!0)}getBlock(t,e,n){if(this.isOutOfBounds(t,e,n))return b.AIR;const i=this.getIndex(t,e,n);return this.blocks[i]}generateMesh(t,e){if(!this.isDirty&&this.mesh)return this.mesh;const n=[],i=[],s=[],o=[],r=[];let l=0;const c=4,h=16,d=1/c,u=1/h,m=[],g=2;for(let _=-g;_<this.size+g;_++)for(let v=-g;v<this.size+g;v++)for(let y=-g;y<this.size+g;y++){const x=this.x*this.size+_,w=this.y*this.size+v,E=this.z*this.size+y;t.getBlock(x,w,E)===b.TORCH&&m.push({x:x+.5,y:w+.5,z:E+.5})}const f=(_,v,y,x,w,E,T)=>{const M=[{dir:[1,0,0],corners:[[x,v,E],[x,v,y],[x,w,y],[x,w,E]],uvName:"right"},{dir:[-1,0,0],corners:[[_,v,y],[_,v,E],[_,w,E],[_,w,y]],uvName:"left"},{dir:[0,1,0],corners:[[_,w,E],[x,w,E],[x,w,y],[_,w,y]],uvName:"top"},{dir:[0,-1,0],corners:[[_,v,y],[x,v,y],[x,v,E],[_,v,E]],uvName:"bottom"},{dir:[0,0,1],corners:[[_,v,E],[x,v,E],[x,w,E],[_,w,E]],uvName:"front"},{dir:[0,0,-1],corners:[[x,v,y],[_,v,y],[_,w,y],[x,w,y]],uvName:"back"}];for(const A of M){for(const N of A.corners){n.push(N[0],N[1],N[2]),i.push(...A.dir);const K=ul[A.uvName];let k=0;for(let it=0;it<m.length;it++){const B=m[it],tt=N[0]-B.x,et=N[1]-B.y,G=N[2]-B.z,lt=Math.abs(tt)+Math.abs(et)+Math.abs(G),ct=Math.max(0,1-lt/8);ct>k&&(k=ct)}const X=Math.min(1,.52+k*.48),Y=K*X;s.push(Y,Y*(.93-(1-k)*.08),Y*(.85-(1-k)*.15))}const I=T%c,F=Math.floor(T/c),U=I*d,D=1-(F+1)*u,P=U+d,O=D+u;o.push(U,D,P,D,P,O,U,O),r.push(l,l+1,l+2,l,l+2,l+3),l+=4}};for(let _=0;_<this.size;_++)for(let v=0;v<this.size;v++)for(let y=0;y<this.size;y++){const x=this.getBlock(_,v,y);if(x===b.AIR)continue;const w=wn[x],E=this.x*this.size+_,T=this.y*this.size+v,M=this.z*this.size+y;if(x===b.STAIRS){f(E,T,M,E+1,T+.5,M+1,9),f(E,T+.5,M,E+1,T+1,M+.5,9);continue}if(x===b.FENCE){const I=(tt,et)=>{const G=_+tt,lt=v,ct=y+et;let ut;return this.isOutOfBounds(G,lt,ct)?ut=t.getBlock(E+tt,T,M+et):ut=this.getBlock(G,lt,ct),ut===b.FENCE},F=I(0,-1),U=I(0,1),D=I(1,0),P=I(-1,0),O=.375,N=.625;f(E+O,T,M+O,E+N,T+1,M+N,16);const K=.4375,k=.5625,X=.75,Y=.875,it=.4375,B=.5625;F&&(f(E+K,T+X,M,E+k,T+Y,M+O,16),f(E+K,T+it,M,E+k,T+B,M+O,16)),U&&(f(E+K,T+X,M+N,E+k,T+Y,M+1,16),f(E+K,T+it,M+N,E+k,T+B,M+1,16)),D&&(f(E+N,T+X,M+K,E+1,T+Y,M+k,16),f(E+N,T+it,M+K,E+1,T+B,M+k,16)),P&&(f(E,T+X,M+K,E+O,T+Y,M+k,16),f(E,T+it,M+K,E+O,T+B,M+k,16));continue}if(x===b.BED_HEAD||x===b.BED_FOOT){const I=x===b.BED_HEAD?17:18,F=18,U=.5625;f(E,T,M,E+1,T+U,M+1,F);{const D=I,P=D%c,O=Math.floor(D/c),N=P*d,K=1-(O+1)*u,k=N+d,X=K+u,Y=[[E,T+U,M+1],[E+1,T+U,M+1],[E+1,T+U,M],[E,T+U,M]];for(const it of Y)n.push(it[0],it[1],it[2]),i.push(0,1,0),s.push(.95,.95,.95);o.push(N,K,k,K,k,X,N,X),r.push(l,l+1,l+2,l,l+2,l+3),l+=4}continue}if(x===b.CHEST){const A=E+.0625,I=M+.0625,F=E+.9375,U=M+.9375;f(A,T,I,F,T+.875,U,21);{const P=20%c,O=Math.floor(20/c),N=P*d,K=1-(O+1)*u,k=N+d,X=K+u,Y=[[A,T,U],[F,T,U],[F,T+.875,U],[A,T+.875,U]];for(const it of Y)n.push(it[0],it[1],it[2]),i.push(0,0,1),s.push(.85,.85,.85);o.push(N,K,k,K,k,X,N,X),r.push(l,l+1,l+2,l,l+2,l+3),l+=4}f(A,T+.875,I,F,T+.9375,U,21);continue}for(const A of og){const I=_+A.dir[0],F=v+A.dir[1],U=y+A.dir[2];let D=!1;if(x===b.TORCH||x===b.DOOR_CLOSED||x===b.DOOR_OPEN)D=!0;else{let P;this.isOutOfBounds(I,F,U)?P=t.getBlock(E+A.dir[0],T+A.dir[1],M+A.dir[2]):P=this.getBlock(I,F,U);const O=wn[P];!O.isSolid||O.isTransparent?w.isTransparent&&P===x?D=!1:D=!0:D=!1}if(D){const P=x===b.TORCH,O=x===b.DOOR_CLOSED,N=x===b.DOOR_OPEN;let K="NS";(O||N)&&(K=t.getDoorOrientation(E,T,M));for(const ot of A.corners){let dt=E+ot[0],Et=T+ot[1],St=M+ot[2];if(P)dt=E+.5+(ot[0]-.5)*.125,Et=T+ot[1]*.625,St=M+.5+(ot[2]-.5)*.125;else if(O)K==="EW"?dt=E+.5+(ot[0]-.5)*.14:St=M+.5+(ot[2]-.5)*.14;else if(N)K==="EW"?St=M+.5+(ot[2]-.5)*.14:dt=E+.5+(ot[0]-.5)*.14;else if(x===b.WATER&&ot[1]===1){let L;this.isOutOfBounds(_,v+1,y)?L=t.getBlock(E,T+1,M):L=this.getBlock(_,v+1,y),L!==b.WATER&&(Et-=.15)}n.push(dt,Et,St),i.push(...A.dir);const Lt=ul[A.uvName];let $t=0;for(let L=0;L<m.length;L++){const C=m[L],V=dt-C.x,$=Et-C.y,nt=St-C.z,at=Math.abs(V)+Math.abs($)+Math.abs(nt),ft=Math.max(0,1-at/8);ft>$t&&($t=ft)}const ne=x===b.TORCH,Yt=ne?1:$t,kt=Math.min(1,.52+Yt*.48),zt=Lt*kt,Ft=zt,Se=zt*(ne?.9:.93-(1-Yt)*.08),me=zt*(ne?.6:.85-(1-Yt)*.15);s.push(Ft,Se,me)}const k=w.uvs[A.uvName],X=k%c,Y=Math.floor(k/c),it=X*d,B=1-(Y+1)*u,tt=it+d,et=B+u;let G=it,lt=B,ct=tt,ut=et;if(P){const ot=d/16,dt=u/16;G=it+7*ot,ct=it+9*ot,A.uvName==="top"?(ut=et-4*dt,lt=et-6*dt):A.uvName==="bottom"?(ut=et-14*dt,lt=et-16*dt):(ut=et-6*dt,lt=et-16*dt)}o.push(G,lt,ct,lt,ct,ut,G,ut),r.push(l,l+1,l+2,l,l+2,l+3),l+=4}}}if(n.length===0)return this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null),this.isDirty=!1,null;const p=new Qn;return p.setAttribute("position",new cn(n,3)),p.setAttribute("normal",new cn(i,3)),p.setAttribute("color",new cn(s,3)),p.setAttribute("uv",new cn(o,2)),p.setIndex(r),this.mesh?(this.mesh.geometry.dispose(),this.mesh.geometry=p):(this.mesh=new xt(p,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0),this.isDirty=!1,this.mesh}}function rg(){const a=document.createElement("canvas"),t=16,e=4,n=16;a.width=t*e,a.height=t*n;const i=a.getContext("2d"),s=(V,$,nt,at,ft,st)=>{const j=V*t,Mt=$*t;for(let _t=0;_t<t;_t++)for(let At=0;At<t;At++){const wt=(Math.random()-.5)*st,bt=Math.max(0,Math.min(255,Math.floor(nt+wt))),Ut=Math.max(0,Math.min(255,Math.floor(at+wt))),Zt=Math.max(0,Math.min(255,Math.floor(ft+wt)));i.fillStyle=`rgb(${bt}, ${Ut}, ${Zt})`,i.fillRect(j+_t,Mt+At,1,1)}};s(0,0,100,180,70,30),s(1,0,130,95,65,20),s(2,0,120,120,120,20),s(3,0,130,95,65,20);const o=3*t;for(let V=0;V<t;V++){const $=3+Math.floor(Math.random()*3);for(let nt=0;nt<$;nt++){const at=(Math.random()-.5)*30,ft=Math.max(0,Math.min(255,Math.floor(100+at))),st=Math.max(0,Math.min(255,Math.floor(180+at))),j=Math.max(0,Math.min(255,Math.floor(70+at)));i.fillStyle=`rgb(${ft}, ${st}, ${j})`,i.fillRect(o+V,nt,1,1)}}s(0,1,100,70,45,15);const r=0*t,l=1*t;for(let V=0;V<t;V++)for(let $=0;$<t;$++)(V+$*2)%5===0&&(i.fillStyle=`rgb(${70+Math.random()*10}, ${50+Math.random()*10}, ${30+Math.random()*10})`,i.fillRect(r+V,l+$,1,1));s(1,1,185,150,105,10);const c=1*t,h=1*t;i.fillStyle="rgb(115, 80, 50)";for(let V=0;V<t;V++)for(let $=0;$<t;$++){const nt=V-7.5,at=$-7.5,ft=Math.sqrt(nt*nt+at*at);(Math.abs(ft-3)<.6||Math.abs(ft-6)<.6)&&i.fillRect(c+V,h+$,1,1)}s(2,1,35,115,30,20);const d=2*t,u=1*t;for(let V=0;V<30;V++){const $=Math.floor(Math.random()*t),nt=Math.floor(Math.random()*t);i.fillStyle=`rgb(${15+Math.random()*10}, ${45+Math.random()*10}, ${10+Math.random()*10})`,i.fillRect(d+$,u+nt,1,1)}s(3,1,155,75,55,15);const m=3*t,g=1*t;i.fillStyle="rgb(205, 200, 195)",i.fillRect(m,g+4,t,1),i.fillRect(m,g+9,t,1),i.fillRect(m,g+14,t,1),i.fillRect(m+4,g,1,4),i.fillRect(m+12,g,1,4),i.fillRect(m+8,g+5,1,4),i.fillRect(m+4,g+10,1,4),i.fillRect(m+12,g+10,1,4),i.fillRect(m+8,g+15,1,1),s(0,2,220,205,150,30),s(1,2,190,145,85,12);const f=1*t,p=2*t;i.fillStyle="rgb(140, 100, 55)",i.fillRect(f,p+4,t,1),i.fillRect(f,p+8,t,1),i.fillRect(f,p+12,t,1),s(2,2,120,120,120,20);const _=2*t,v=2*t;i.fillStyle="rgb(40, 40, 40)",[[2,3],[3,3],[3,4],[8,8],[9,8],[9,9],[8,9],[11,2],[12,3],[4,12],[5,11],[5,12]].forEach(([V,$])=>{i.fillRect(_+V,v+$,1,1)});const x=3*t,w=2*t;i.fillStyle="rgba(0, 0, 0, 0)",i.clearRect(x,w,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(x+7,w+8,2,8),i.fillStyle="rgb(255, 120, 0)",i.fillRect(x+7,w+6,2,2),i.fillStyle="rgb(255, 230, 0)",i.fillRect(x+7,w+7,2,1),i.fillStyle="rgb(255, 240, 100)",i.fillRect(x+7,w+4,2,2),i.fillStyle="rgb(60, 40, 20)",i.fillRect(x+7,w+14,2,2);const E=0*t,T=3*t;i.clearRect(E,T,t,t),i.fillStyle="rgba(240, 248, 255, 0.8)",i.fillRect(E,T,t,1),i.fillRect(E,T+t-1,t,1),i.fillRect(E,T,1,t),i.fillRect(E+t-1,T,1,t),i.fillStyle="rgba(255, 255, 255, 0.6)",i.fillRect(E+3,T+3,1,1),i.fillRect(E+4,T+2,1,1),i.fillRect(E+2,T+4,1,1),i.fillRect(E+10,T+10,1,1),i.fillRect(E+11,T+9,1,1),i.fillRect(E+9,T+11,1,1);const M=1*t,A=3*t;i.clearRect(M,A,t,t),i.fillStyle="rgb(130, 85, 45)",i.fillRect(M,A,t,t),i.fillStyle="rgb(90, 55, 25)",i.fillRect(M,A,t,1),i.fillRect(M,A+t-1,t,1),i.fillRect(M,A,1,t),i.fillRect(M+t-1,A,1,t),i.fillRect(M+t/2-1,A,2,t),i.clearRect(M+2,A+2,4,5),i.clearRect(M+10,A+2,4,5),i.fillStyle="rgba(255, 255, 255, 0.4)",i.fillRect(M+2,A+2,4,1),i.fillRect(M+10,A+2,4,1),i.fillStyle="rgb(230, 190, 50)",i.fillRect(M+13,A+9,2,2),i.fillStyle="rgb(180, 140, 20)",i.fillRect(M+14,A+11,1,1);const I=2*t,F=3*t;i.clearRect(I,F,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(I+2,F+13,1,1),i.fillRect(I+3,F+12,1,1),i.fillRect(I+4,F+11,1,1),i.fillStyle="rgb(90, 60, 30)",i.fillRect(I+1,F+14,1,1),i.fillStyle="rgb(230, 190, 50)",i.fillRect(I+5,F+10,1,1),i.fillRect(I+3,F+11,1,1),i.fillRect(I+4,F+12,1,1),i.fillRect(I+5,F+12,1,1),i.fillRect(I+2,F+12,1,1),i.fillRect(I+3,F+13,1,1),i.fillStyle="rgb(120, 120, 120)",[[5,11],[6,10],[7,9],[8,8],[9,7],[10,6],[11,5],[12,4],[13,3]].forEach(([V,$])=>{i.fillRect(I+V,F+$,1,1)}),i.fillStyle="rgb(180, 180, 180)";const D=[[5,10],[6,9],[7,8],[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1]];D.forEach(([V,$])=>{i.fillRect(I+V,F+$,1,1)}),i.fillStyle="rgb(240, 240, 240)";const P=[[4,9],[5,8],[6,7],[7,6],[8,5],[9,4],[10,3],[11,2],[12,1],[13,0]];P.forEach(([V,$])=>{i.fillRect(I+V,F+$,1,1)}),s(0,4,190,145,85,12);const O=0*t,N=4*t;i.fillStyle="rgb(140, 100, 55)",i.fillRect(O,N+4,t,1),i.fillRect(O,N+8,t,1),i.fillRect(O,N+12,t,1);const K=1*t,k=4*t;i.fillStyle="rgb(255, 255, 255)",i.fillRect(K,k,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(K,k,t,1),i.fillRect(K,k+t-1,t,1),i.fillRect(K,k,1,t),i.fillRect(K+t-1,k,1,t),i.fillStyle="rgb(220, 220, 220)",i.fillRect(K+2,k+6,t-4,1),i.fillRect(K+2,k+10,t-4,1);const X=2*t,Y=4*t;i.fillStyle="rgb(200, 30, 30)",i.fillRect(X,Y,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(X,Y,t,1),i.fillRect(X,Y+t-1,t,1),i.fillRect(X,Y,1,t),i.fillRect(X+t-1,Y,1,t),s(3,4,120,115,110,15);const it=3*t,B=4*t;i.fillStyle="rgb(75, 75, 85)",i.fillRect(it+1,B+1,t-2,2),i.fillStyle="rgb(25, 20, 15)",i.fillRect(it+3,B+5,10,8),i.fillStyle="rgb(255, 120, 0)",i.fillRect(it+5,B+7,3,4),i.fillRect(it+8,B+8,3,3),i.fillStyle="rgb(255, 220, 0)",i.fillRect(it+6,B+8,2,2),s(0,5,160,115,65,12);const tt=0*t,et=5*t;i.fillStyle="rgb(100, 65, 30)",i.fillRect(tt,et,t,1),i.fillRect(tt,et+t-1,t,1),i.fillRect(tt,et,1,t),i.fillRect(tt+t-1,et,1,t),i.fillRect(tt+1,et+5,t-2,1),i.fillStyle="rgb(220, 180, 40)",i.fillRect(tt+6,et+2,4,3),i.fillStyle="rgb(160, 120, 20)",i.fillRect(tt+7,et+4,2,2),s(1,5,160,115,65,12);const G=1*t,lt=5*t;i.fillStyle="rgb(100, 65, 30)",i.fillRect(G,lt,t,1),i.fillRect(G,lt+t-1,t,1),i.fillRect(G,lt,1,t),i.fillRect(G+t-1,lt,1,t),i.fillRect(G+1,lt+5,t-2,1);const ct=2*t,ut=5*t;s(2,5,40,100,200,20),i.fillStyle="rgba(20, 80, 220, 0.4)",i.fillRect(ct,ut,t,t),i.fillStyle="rgba(255, 255, 255, 0.3)",i.fillRect(ct+2,ut+3,4,1),i.fillRect(ct+8,ut+7,5,1),i.fillRect(ct+4,ut+12,3,1);const ot=3*t,dt=5*t;i.clearRect(ot,dt,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(ot+2,dt+13,1,1),i.fillRect(ot+3,dt+12,1,1),i.fillRect(ot+4,dt+11,1,1),i.fillStyle="rgb(0, 136, 255)",i.fillRect(ot+5,dt+10,1,1),i.fillRect(ot+3,dt+11,1,1),i.fillRect(ot+4,dt+12,1,1),i.fillRect(ot+5,dt+12,1,1),i.fillRect(ot+2,dt+12,1,1),i.fillRect(ot+3,dt+13,1,1),i.fillStyle="rgb(0, 255, 255)",D.forEach(([V,$])=>{i.fillRect(ot+V,dt+$,1,1)}),i.fillStyle="rgb(240, 255, 255)",P.forEach(([V,$])=>{i.fillRect(ot+V,dt+$,1,1)});const Et=0*t,St=6*t;i.clearRect(Et,St,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(Et+7,St+6,2,8),i.fillStyle="rgb(85, 85, 85)",i.fillRect(Et+4,St+2,8,4),i.fillStyle="rgb(120, 120, 120)",i.fillRect(Et+4,St+2,8,1);const Lt=1*t,$t=6*t;i.fillStyle="rgb(30, 30, 30)",i.fillRect(Lt,$t,t,t);for(let V=0;V<t;V++)for(let $=0;$<t;$++)Math.random()>.5&&(i.fillStyle=Math.random()>.5?"rgb(15, 15, 15)":"rgb(45, 45, 45)",i.fillRect(Lt+V,$t+$,1,1));const ne=(V,$)=>{const nt=V%4,at=Math.floor(V/4),ft=nt*t,st=at*t;i.fillStyle="rgb(120, 120, 120)",i.fillRect(ft,st,t,t),i.fillStyle="rgb(100, 100, 100)",i.fillRect(ft,st,t,t/2),i.fillStyle="rgb(140, 140, 140)",i.fillRect(ft,st+t/2,t,t/2),i.fillStyle="rgb(90, 90, 90)";for(let Mt=0;Mt<5;Mt++)i.fillRect(ft+Mt*2,st+Mt*2,2,2);i.fillStyle=$,[[2,2],[10,3],[5,7],[12,9],[4,13],[10,14],[7,10]].forEach(([Mt,_t])=>{i.fillRect(ft+Mt,st+_t,2,2)})};ne(26,"rgb(240, 200, 180)"),ne(27,"rgb(255, 215, 0)"),ne(28,"rgb(0, 255, 255)"),i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(1*t,7*t,t,t),i.fillStyle="rgb(139, 69, 19)",i.beginPath(),i.moveTo(1*t+4,7*t+12),i.lineTo(1*t+12,7*t+4),i.lineWidth=2,i.stroke();const Yt=(V,$)=>{const nt=V%4,at=Math.floor(V/4),ft=nt*t,st=at*t;i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(ft,st,t,t),i.fillStyle=$,i.fillRect(ft+3,st+6,10,4),i.fillStyle="rgba(255, 255, 255, 0.4)",i.fillRect(ft+3,st+6,10,1)};Yt(30,"rgb(220, 220, 220)"),Yt(31,"rgb(255, 215, 0)"),i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(0*t,8*t,t,t),i.fillStyle="rgb(0, 255, 255)",i.beginPath(),i.moveTo(0*t+8,8*t+2),i.lineTo(0*t+14,8*t+8),i.lineTo(0*t+8,8*t+14),i.lineTo(0*t+2,8*t+8),i.fill(),s(1,8,140,140,140,30),i.fillStyle="rgba(100, 100, 100, 0.5)",i.fillRect(1*t+2,8*t+2,4,4),i.fillRect(1*t+10,8*t+8,4,4),i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(2*t,8*t,t,t),i.fillStyle="rgb(30, 30, 30)",i.beginPath(),i.arc(2*t+8,8*t+8,5,0,Math.PI*2),i.fill(),i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(3*t,8*t,t,t),i.fillStyle="rgb(220, 20, 20)",i.beginPath(),i.arc(3*t+8,8*t+9,5,0,Math.PI*2),i.fill(),i.fillStyle="rgb(34, 139, 34)",i.fillRect(3*t+7,8*t+3,2,3);const kt=(V,$,nt)=>{const at=V%4,ft=Math.floor(V/4),st=at*t,j=ft*t;i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(st,j,t,t),i.strokeStyle="rgb(139, 69, 19)",i.lineWidth=2,i.beginPath(),i.moveTo(st+3,j+13),i.lineTo(st+11,j+5),i.stroke(),i.fillStyle=$,nt==="pickaxe"?(i.beginPath(),i.moveTo(st+2,j+6),i.lineTo(st+10,j+2),i.lineTo(st+14,j+6),i.lineTo(st+10,j+10),i.fill()):nt==="axe"?(i.beginPath(),i.moveTo(st+8,j+2),i.lineTo(st+14,j+4),i.lineTo(st+12,j+10),i.lineTo(st+6,j+6),i.fill()):nt==="shovel"&&(i.beginPath(),i.moveTo(st+10,j+2),i.lineTo(st+14,j+6),i.lineTo(st+12,j+8),i.lineTo(st+8,j+4),i.fill())},zt="rgb(160, 82, 45)",Ft="rgb(169, 169, 169)",Se="rgb(220, 220, 220)",me="rgb(0, 255, 255)";kt(36,zt,"pickaxe"),kt(37,Ft,"pickaxe"),kt(38,Se,"pickaxe"),kt(39,me,"pickaxe"),kt(40,zt,"axe"),kt(41,Ft,"axe"),kt(42,Se,"axe"),kt(43,me,"axe"),kt(44,zt,"shovel"),kt(45,Ft,"shovel"),kt(46,Se,"shovel"),kt(47,me,"shovel");const L=(V,$)=>{const nt=V%4,at=Math.floor(V/4),ft=nt*t,st=at*t;i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(ft,st,t,t),i.fillStyle=$,i.fillRect(ft+4,st+3,8,10),i.clearRect(ft+6,st+10,4,3)};L(48,"rgb(160, 82, 45)"),L(49,Se),L(50,me);const C=new gc(a);return C.magFilter=ue,C.minFilter=ue,C.wrapS=We,C.wrapT=We,C}class Zs{permutation;constructor(t=0){this.permutation=new Array(512);const e=new Array(256);let n=t;for(let i=0;i<256;i++)n=(n*1103515245+12345)%2147483648,e[i]=i;for(let i=255;i>0;i--){n=(n*1103515245+12345)%2147483648;const s=n%(i+1),o=e[i];e[i]=e[s],e[s]=o}for(let i=0;i<512;i++)this.permutation[i]=e[i&255]}fade(t){return t*t*t*(t*(t*6-15)+10)}lerp(t,e,n){return e+t*(n-e)}grad(t,e,n){const i=t&15,s=i<8?e:n,o=i<4?n:i===12||i===14?e:0;return(i&1?-s:s)+(i&2?-o:o)}noise2D(t,e){const n=Math.floor(t)&255,i=Math.floor(e)&255;t-=Math.floor(t),e-=Math.floor(e);const s=this.fade(t),o=this.fade(e),r=this.permutation[n]+i,l=this.permutation[n+1]+i;return this.lerp(o,this.lerp(s,this.grad(this.permutation[r],t,e),this.grad(this.permutation[l],t-1,e)),this.lerp(s,this.grad(this.permutation[r+1],t,e-1),this.grad(this.permutation[l+1],t-1,e-1)))}fbm2D(t,e,n,i=.5,s=1){let o=0,r=s,l=1,c=0;for(let h=0;h<n;h++)o+=this.noise2D(t*r,e*r)*l,c+=l,l*=i,r*=2;return o/c}grad3(t,e,n,i){const s=t&15,o=s<8?e:n,r=s<4?n:s===12||s===14?e:i;return(s&1?-o:o)+(s&2?-r:r)}noise3D(t,e,n){const i=Math.floor(t)&255,s=Math.floor(e)&255,o=Math.floor(n)&255;t-=Math.floor(t),e-=Math.floor(e),n-=Math.floor(n);const r=this.fade(t),l=this.fade(e),c=this.fade(n),h=this.permutation[i]+s,d=this.permutation[h]+o,u=this.permutation[h+1]+o,m=this.permutation[i+1]+s,g=this.permutation[m]+o,f=this.permutation[m+1]+o;return this.lerp(c,this.lerp(l,this.lerp(r,this.grad3(this.permutation[d],t,e,n),this.grad3(this.permutation[g],t-1,e,n)),this.lerp(r,this.grad3(this.permutation[u],t,e-1,n),this.grad3(this.permutation[f],t-1,e-1,n))),this.lerp(l,this.lerp(r,this.grad3(this.permutation[d+1],t,e,n-1),this.grad3(this.permutation[g+1],t-1,e,n-1)),this.lerp(r,this.grad3(this.permutation[u+1],t,e-1,n-1),this.grad3(this.permutation[f+1],t-1,e-1,n-1))))}fbm3D(t,e,n,i,s=.5,o=1){let r=0,l=o,c=1,h=0;for(let d=0;d<i;d++)r+=this.noise3D(t*l,e*l,n*l)*c,h+=c,c*=s,l*=2;return r/h}}class ag{noise;tempNoise;humidNoise;caveNoise;constructor(t=12345){this.noise=new Zs(t),this.tempNoise=new Zs(t+100),this.humidNoise=new Zs(t+200),this.caveNoise=new Zs(t+300)}generateV1(t){const e=ht.CHUNK_SIZE,n=t.y*e;for(let i=0;i<e;i++)for(let s=0;s<e;s++)for(let o=0;o<e;o++){const r=n+o;let l=b.AIR;if(r<=-10)l=b.BEDROCK;else if(r<-4){const c=Math.sin(t.x*17.13+t.y*31.41+t.z*53.57+i*7.1+o*13.3+s*19.9)*43758.5453;l=c-Math.floor(c)<.05?b.COAL_ORE:b.STONE}else r<0?l=b.DIRT:r===0&&(l=b.GROUND);t.setBlock(i,o,s,l)}this.generateTrees(t,0)}generateV2(t){const e=ht.CHUNK_SIZE,n=t.x*e,i=t.y*e,s=t.z*e,o=-5;for(let r=0;r<e;r++)for(let l=0;l<e;l++){const c=n+r,h=s+l,d=this.noise.fbm2D(c,h,4,.5,.015),u=this.tempNoise.fbm2D(c,h,2,.5,.005),m=this.humidNoise.fbm2D(c,h,2,.5,.005),g=u>.1&&m<0,f=m>.15,p=Math.floor(d*40)-2;for(let _=0;_<e;_++){const v=i+_;let y=b.AIR;if(v<=-30)y=b.BEDROCK;else if(v<=p){let x=!1;if(v<p-5){const w=this.caveNoise.fbm3D(c,v,h,2,.5,.05);Math.abs(w)<.06&&(x=!0)}if(!x)if(v<p-3){y=b.STONE;const w=Math.sin(t.x*17.13+t.y*31.41+t.z*53.57+r*7.1+_*13.3+l*19.9)*43758.5453;if(w-Math.floor(w)<.06){const T=Math.sin(c*1.1+v*2.2+h*3.3)*1e3,M=T-Math.floor(T);v<-20&&M<.08?y=b.DIAMOND_ORE:v<-10&&M<.2?y=b.GOLD_ORE:v<0&&M<.5?y=b.IRON_ORE:y=b.COAL_ORE}}else v<p?y=g?b.SAND:b.DIRT:v===p&&(y=g?b.SAND:b.GROUND)}else v<=o&&(y=b.WATER);t.setBlock(r,_,l,y)}if(p>=i&&p<i+e&&!g&&p>=o){const _=f?.05:.01,v=p-i;this.tryGenerateTreeAt(t,r,v,l,c,h,_)}}}generateTrees(t,e){const n=ht.CHUNK_SIZE,i=t.y*n;if(e>=i&&e<i+n){const s=e-i;for(let o=2;o<n-2;o++)for(let r=2;r<n-2;r++)this.tryGenerateTreeAt(t,o,s,r,t.x*n+o,t.z*n+r)}}tryGenerateTreeAt(t,e,n,i,s,o,r=.015){if(e<2||e>=ht.CHUNK_SIZE-2||i<2||i>=ht.CHUNK_SIZE-2||n+5>=ht.CHUNK_SIZE)return;const l=Math.sin(s*12.9898+o*78.233)*43758.5453;if(l-Math.floor(l)<r){const h=n+1;t.setBlock(e,h,i,b.WOOD),t.setBlock(e,h+1,i,b.WOOD),t.setBlock(e,h+2,i,b.WOOD);const d=h+2;t.setBlock(e+1,d,i,b.LEAVES),t.setBlock(e-1,d,i,b.LEAVES),t.setBlock(e,d,i+1,b.LEAVES),t.setBlock(e,d,i-1,b.LEAVES);for(let u=-1;u<=1;u++)for(let m=-1;m<=1;m++)(u!==0||m!==0)&&t.setBlock(e+u,d+1,i+m,b.LEAVES);t.setBlock(e,d+1,i,b.LEAVES),t.setBlock(e,d+2,i,b.LEAVES),t.setBlock(e+1,d+2,i,b.LEAVES),t.setBlock(e-1,d+2,i,b.LEAVES),t.setBlock(e,d+2,i+1,b.LEAVES),t.setBlock(e,d+2,i-1,b.LEAVES)}}}let lg=class{chunks=new Map;scene;material;modifiedBlocks=new Map;doorOrientations=new Map;chunkVersions=new Map;terrainGenerator;constructor(t){this.scene=t;const e=rg(),n=new jt({map:e,vertexColors:!0,roughness:.85,metalness:.05,alphaTest:.5,side:zn});n.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("vec3 totalEmissiveRadiance = emissive;",`
        // 頂点カラーから松明光成分（最低輝度0.52を超える部分）を抽出し、自己発光として加算する
        vec3 torchLight = max(vec3(0.0), vColor - vec3(0.52));
        // 温かみのあるオレンジ色の自己発光を1.5倍で加算（夜間でも綺麗に光る）
        vec3 totalEmissiveRadiance = emissive + torchLight * 1.5;
        `)},this.material=n,this.terrainGenerator=new ag}getChunkKey(t,e,n){return`${t},${e},${n}`}getChunk(t,e,n){return this.chunks.get(this.getChunkKey(t,e,n))}*getLoadedChunks(){yield*this.chunks.values()}getBlock(t,e,n){const i=Math.floor(t/ht.CHUNK_SIZE),s=Math.floor(e/ht.CHUNK_SIZE),o=Math.floor(n/ht.CHUNK_SIZE),r=this.getChunk(i,s,o);if(!r)return b.AIR;const l=(t%ht.CHUNK_SIZE+ht.CHUNK_SIZE)%ht.CHUNK_SIZE,c=(e%ht.CHUNK_SIZE+ht.CHUNK_SIZE)%ht.CHUNK_SIZE,h=(n%ht.CHUNK_SIZE+ht.CHUNK_SIZE)%ht.CHUNK_SIZE;return r.getBlock(l,c,h)}setBlock(t,e,n,i){const s=Math.floor(t/ht.CHUNK_SIZE),o=Math.floor(e/ht.CHUNK_SIZE),r=Math.floor(n/ht.CHUNK_SIZE),l=this.getChunkKey(s,o,r),c=ht.CHUNK_SIZE,h=(t%c+c)%c,d=(e%c+c)%c,u=(n%c+c)%c,m=h+d*c+u*c*c;let g=this.modifiedBlocks.get(l);g||(g=new Map,this.modifiedBlocks.set(l,g)),g.set(m,i);let f=this.getChunk(s,o,r);f||(f=new dl(s,o,r),this.chunks.set(l,f)),f.setBlock(h,d,u,i),this.updateChunkMesh(s,o,r),h===0&&this.updateChunkMesh(s-1,o,r),h===ht.CHUNK_SIZE-1&&this.updateChunkMesh(s+1,o,r),d===0&&this.updateChunkMesh(s,o-1,r),d===ht.CHUNK_SIZE-1&&this.updateChunkMesh(s,o+1,r),u===0&&this.updateChunkMesh(s,o,r-1),u===ht.CHUNK_SIZE-1&&this.updateChunkMesh(s,o,r+1)}setDoorOrientation(t,e,n,i){this.doorOrientations.set(`${t},${e},${n}`,i)}getDoorOrientation(t,e,n){return this.doorOrientations.get(`${t},${e},${n}`)??"NS"}removeDoorOrientation(t,e,n){this.doorOrientations.delete(`${t},${e},${n}`)}updateChunkMesh(t,e,n){const i=this.getChunk(t,e,n);if(!i)return;const s=i.mesh,o=i.generateMesh(this,this.material);o&&!s?this.scene.add(o):!o&&s&&this.scene.remove(s)}generateWorldAround(t,e){const n=Math.floor(t/ht.CHUNK_SIZE),i=Math.floor(e/ht.CHUNK_SIZE),s=ht.RENDER_DISTANCE,o=new Set;for(let l=n-s;l<=n+s;l++)for(let c=i-s;c<=i+s;c++)for(let h=-1;h<=1;h++){const d=this.getChunkKey(l,h,c);if(o.add(d),!this.chunks.has(d)){const u=new dl(l,h,c);this.generateChunkTerrain(u),this.chunks.set(d,u)}}for(const[l,c]of this.chunks.entries())o.has(l)||(c.mesh&&(this.scene.remove(c.mesh),c.mesh.geometry.dispose(),c.mesh=null),this.chunks.delete(l));for(let l=n-s;l<=n+s;l++)for(let c=i-s;c<=i+s;c++)for(let h=-1;h<=1;h++)this.updateChunkMesh(l,h,c);const r=document.getElementById("chunks-display");r&&(r.textContent=this.chunks.size.toString())}generateChunkTerrain(t){const e=this.getChunkKey(t.x,t.y,t.z);let n=this.chunkVersions.get(e);const i=6;Math.abs(t.x)<=i&&Math.abs(t.z)<=i&&(n=1,this.chunkVersions.set(e,1)),n===void 0&&(this.modifiedBlocks.has(e)?n=1:n=2,this.chunkVersions.set(e,n)),n===1?this.terrainGenerator.generateV1(t):this.terrainGenerator.generateV2(t);const s=this.modifiedBlocks.get(e);if(s){const o=ht.CHUNK_SIZE;for(const[r,l]of s.entries()){const c=r%o,h=Math.floor(r%(o*o)/o),d=Math.floor(r/(o*o));t.setBlock(c,h,d,l)}}}getChunkMeshes(){const t=[];for(const e of this.chunks.values())e.mesh&&t.push(e.mesh);return t}getChunksCount(){return this.chunks.size}getModifiedBlocksData(){const t={};for(const[i,s]of this.modifiedBlocks.entries()){if(s.size===0)continue;const o={};for(const[r,l]of s.entries())o[r.toString()]=l;t[i]=o}const e={};for(const[i,s]of this.doorOrientations.entries())e[i]=s;const n={};for(const[i,s]of this.chunkVersions.entries())n[i]=s;return{blocks:t,doorOrientations:e,chunkVersions:n}}setModifiedBlocksData(t){if(this.modifiedBlocks.clear(),this.doorOrientations.clear(),this.chunkVersions.clear(),!t)return;const e=t.blocks??t;for(const n of Object.keys(e)){const i=new Map,s=e[n];for(const o of Object.keys(s)){const r=parseInt(o,10),l=s[o];i.set(r,l)}this.modifiedBlocks.set(n,i)}if(t.doorOrientations)for(const[n,i]of Object.entries(t.doorOrientations))this.doorOrientations.set(n,i);if(t.chunkVersions)for(const[n,i]of Object.entries(t.chunkVersions))this.chunkVersions.set(n,i)}mergeModifiedBlocksData(t){const e=new Set;if(!t)return e;const n=t.blocks??t;for(const i of Object.keys(n)){if(i==="doorOrientations"||i==="chunkVersions"||i==="blocks")continue;let s=this.modifiedBlocks.get(i);s||(s=new Map,this.modifiedBlocks.set(i,s),e.add(i));const o=n[i];for(const r of Object.keys(o)){const l=parseInt(r,10),c=o[r];if(s.get(l)!==c){s.set(l,c),e.add(i);const d=i.split(","),u=parseInt(d[0],10),m=parseInt(d[1],10),g=parseInt(d[2],10),f=this.getChunk(u,m,g);if(f){const p=ht.CHUNK_SIZE,_=l%p,v=Math.floor(l%(p*p)/p),y=Math.floor(l/(p*p));f.setBlock(_,v,y,c)}}}}if(t.doorOrientations){for(const[i,s]of Object.entries(t.doorOrientations))if(this.doorOrientations.get(i)!==s){this.doorOrientations.set(i,s);const r=i.split(","),l=parseInt(r[0],10),c=parseInt(r[1],10),h=parseInt(r[2],10),d=Math.floor(l/ht.CHUNK_SIZE),u=Math.floor(c/ht.CHUNK_SIZE),m=Math.floor(h/ht.CHUNK_SIZE);e.add(this.getChunkKey(d,u,m))}}if(t.chunkVersions)for(const[i,s]of Object.entries(t.chunkVersions))this.chunkVersions.get(i)!==s&&(this.chunkVersions.set(i,s),e.add(i));return e}clearAndRebuild(t,e){for(const n of this.chunks.values())n.mesh&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh=null);this.chunks.clear(),this.generateWorldAround(t,e)}};class cg{keys={};justPressedKeys={};mouseDelta={x:0,y:0};isLocked=!1;isLeftClickDown=!1;isRightClickDown=!1;lastModalCloseTime=0;isActionActive(t){const e=we.getConfig();switch(t){case"forward":return!!this.keys[e.keyForward];case"backward":return!!this.keys[e.keyBackward];case"left":return!!this.keys[e.keyLeft];case"right":return!!this.keys[e.keyRight];case"jump":return!!this.keys[e.keyJump];default:return!1}}targetElement;constructor(t){this.targetElement=t,window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),document.addEventListener("mousemove",this.onMouseMove.bind(this)),document.addEventListener("pointerlockchange",this.onPointerLockChange.bind(this)),window.addEventListener("mousedown",e=>{this.isLocked&&(e.button===0&&(this.isLeftClickDown=!0),e.button===2&&(this.isRightClickDown=!0))}),window.addEventListener("mouseup",e=>{e.button===0&&(this.isLeftClickDown=!1),e.button===2&&(this.isRightClickDown=!1)})}requestLock(){this.isLocked||this.targetElement.requestPointerLock()}onKeyDown(t){const e=t.code;e==="Tab"&&t.preventDefault();const n=we.getConfig(),i=[n.keyForward,n.keyBackward,n.keyLeft,n.keyRight,n.keyJump,n.keyPlaceBlock,n.keyBreakBlock,n.keyOpenMap,n.keyOpenInventory,n.keyOpenCrafting,n.keyOpenManual,n.keyRegisterHome];this.isLocked&&(e==="F5"||e==="KeyQ"||e==="KeyE"||e==="KeyC"||e==="KeyH"||i.includes(e))&&t.preventDefault(),this.keys[e]||(this.justPressedKeys[e]=!0),this.keys[e]=!0}onKeyUp(t){const e=t.code;this.keys[e]=!1,this.justPressedKeys[e]=!1}onMouseMove(t){this.isLocked&&(this.mouseDelta.x+=t.movementX,this.mouseDelta.y+=t.movementY)}onPointerLockChange(){const t=document.getElementById("menu-overlay"),e=document.getElementById("crosshair"),n=document.getElementById("inventory-modal");if(document.pointerLockElement===this.targetElement)this.isLocked=!0,t&&(t.style.display="none"),e&&(e.style.display="block");else{this.isLocked=!1,this.clearKeys();const i=n&&n.style.display==="flex",s=document.getElementById("crafting-modal"),o=s&&s.style.display==="flex",r=document.getElementById("manual-modal"),l=r&&r.style.display==="flex",c=document.getElementById("world-map-modal"),h=c&&c.style.display==="flex";!i&&!o&&!l&&!h&&performance.now()-this.lastModalCloseTime>300&&t&&(t.style.display="flex",t.style.opacity="1"),e&&(e.style.display="none")}}clearKeys(){this.keys={},this.justPressedKeys={}}consumeJustPressed(t){return this.justPressedKeys[t]?(this.justPressedKeys[t]=!1,!0):!1}consumeMouseDelta(){const t={...this.mouseDelta};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}}class hn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new S);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new S);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new hn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],r=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],f=i[0],p=i[1],_=i[2],v=i[3],y=i[4],x=i[5],w=i[6],E=i[7],T=i[8];return s[0]=o*f+r*v+l*w,s[1]=o*p+r*y+l*E,s[2]=o*_+r*x+l*T,s[3]=c*f+h*v+d*w,s[4]=c*p+h*y+d*E,s[5]=c*_+h*x+d*T,s[6]=u*f+m*v+g*w,s[7]=u*p+m*y+g*E,s[8]=u*_+m*x+g*T,e}scale(t,e){e===void 0&&(e=new hn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new S);const n=3,i=4,s=[];let o,r;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+i*r]=this.elements[o+3*r];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,s[o+i*o]===0){for(r=o+1;r<c;r++)if(s[o+i*r]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*r];while(--h);break}}if(s[o+i*o]!==0)for(r=o+1;r<c;r++){const m=s[o+i*r]/s[o+i*o];h=d;do u=d-h,s[u+i*r]=u<=o?0:s[u+i*r]-s[u+i*o]*m;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new hn);const e=3,n=6,i=hg;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let r=3;const l=r;let c;const h=n;let d;do{if(s=l-r,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const u=i[s+n*o]/i[s+n*s];c=h;do d=h-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--c)}}while(--r);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--c)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,r=n+n,l=i+i,c=e*o,h=e*r,d=e*l,u=n*r,m=n*l,g=i*l,f=s*o,p=s*r,_=s*l,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-_,v[3*0+2]=d+p,v[3*1+0]=h+_,v[3*1+1]=1-(c+g),v[3*1+2]=m-f,v[3*2+0]=d-p,v[3*2+1]=m+f,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new hn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const hg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,o=this.x,r=this.y,l=this.z;return e.x=r*s-l*i,e.y=l*n-o*s,e.z=o*i-r*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new S(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new S(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new hn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new S);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(r-i)*(r-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(r-i)*(r-i)}scale(t,e){e===void 0&&(e=new S);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new S),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new S),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new S),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=ug,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=dg;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(fl),fl.almostEquals(t,e)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const ug=new S,dg=new S,fl=new S;class Ke{constructor(t){t===void 0&&(t={}),this.lowerBound=new S,this.upperBound=new S,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,r=n;s.copy(t[0]),r&&r.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];r&&(r.vmult(c,pl),c=pl),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Ke().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,r=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&r&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,r,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),r.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=ml,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=ml,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,r=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(r,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(r,l),Math.max(c,h)),Math.max(d,u));return!(g<0||m>g)}}const pl=new S,ml=[new S,new S,new S,new S,new S,new S,new S,new S];class gl{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class _c{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class le{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new S),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=fg,i=pg;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new le);const n=this.x,i=this.y,s=this.z,o=this.w,r=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*r+i*c-s*l,e.y=i*h+o*l+s*r-n*c,e.z=s*h+o*c+n*l-i*r,e.w=o*h-n*r-i*l-s*c,e}inverse(t){t===void 0&&(t=new le);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new le),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,o=this.x,r=this.y,l=this.z,c=this.w,h=c*n+r*s-l*i,d=c*i+l*n-o*s,u=c*s+o*i-r*n,m=-o*n-r*i-l*s;return e.x=h*c+m*-o+d*-l-u*-r,e.y=d*c+m*-r+u*-o-h*-l,e.z=u*c+m*-l+h*-r-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,r=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*r+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=r*r,m=l*l;n=Math.atan2(2*r*c-2*o*l,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*r*l,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),r=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*r+s*c*h,this.y=s*c*r-l*o*h,this.z=s*o*h+l*c*r,this.w=s*o*r-l*c*h):i==="YXZ"?(this.x=l*o*r+s*c*h,this.y=s*c*r-l*o*h,this.z=s*o*h-l*c*r,this.w=s*o*r+l*c*h):i==="ZXY"?(this.x=l*o*r-s*c*h,this.y=s*c*r+l*o*h,this.z=s*o*h+l*c*r,this.w=s*o*r-l*c*h):i==="ZYX"?(this.x=l*o*r-s*c*h,this.y=s*c*r+l*o*h,this.z=s*o*h-l*c*r,this.w=s*o*r+l*c*h):i==="YZX"?(this.x=l*o*r+s*c*h,this.y=s*c*r+l*o*h,this.z=s*o*h-l*c*r,this.w=s*o*r-l*c*h):i==="XZY"&&(this.x=l*o*r-s*c*h,this.y=s*c*r-l*o*h,this.z=s*o*h+l*c*r,this.w=s*o*r+l*c*h),this}clone(){return new le(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new le);const i=this.x,s=this.y,o=this.z,r=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,m,g,f,p;return m=i*l+s*c+o*h+r*d,m<0&&(m=-m,l=-l,c=-c,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),f=Math.sin((1-e)*u)/g,p=Math.sin(e*u)/g):(f=1-e,p=e),n.x=f*i+p*l,n.y=f*s+p*c,n.z=f*o+p*h,n.w=f*r+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new le);const s=t.x*n.x,o=t.y*n.y,r=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-r*c),i.y+=u*(o*d+r*l-s*h),i.z+=u*(r*d+s*c-o*l),i.w+=u*(-s*l-o*c-r*h),i}}const fg=new S,pg=new S,mg={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class vt{constructor(t){t===void 0&&(t={}),this.id=vt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}vt.idCounter=0;vt.types=mg;class Xt{constructor(t){t===void 0&&(t={}),this.position=new S,this.quaternion=new le,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Xt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Xt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),n.vsub(t,i),e.conjugate(vl),vl.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new S),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new S),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const vl=new le;class xs extends vt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:vt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new S;for(let s=0;s!==t.length;s++){const o=t[s],r=o.length;for(let l=0;l!==r;l++){const c=(l+1)%r;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new S;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];xs.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new S,o=new S;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,r,l,c){const h=new S;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const f=h.dot(o);f>u&&(u=f,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const f=n.vertices[n.faces[d][g]],p=new S;p.copy(f),s.vmult(p,p),i.vadd(p,p),m.push(p)}d>=0&&this.clipFaceAgainstHull(o,t,e,m,r,l,c)}findSeparatingAxis(t,e,n,i,s,o,r,l){const c=new S,h=new S,d=new S,u=new S,m=new S,g=new S;let f=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let _=0;_!==p.uniqueAxes.length;_++){n.vmult(p.uniqueAxes[_],c);const v=p.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<f&&(f=v,o.copy(c))}else{const _=r?r.length:p.faces.length;for(let v=0;v<_;v++){const y=r?r[v]:v;c.copy(p.faceNormals[y]),n.vmult(c,c);const x=p.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<f&&(f=x,o.copy(c))}}if(t.uniqueAxes)for(let _=0;_!==t.uniqueAxes.length;_++){s.vmult(t.uniqueAxes[_],h);const v=p.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<f&&(f=v,o.copy(h))}else{const _=l?l.length:t.faces.length;for(let v=0;v<_;v++){const y=l?l[v]:v;h.copy(t.faceNormals[y]),s.vmult(h,h);const x=p.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<f&&(f=x,o.copy(h))}}for(let _=0;_!==p.uniqueEdges.length;_++){n.vmult(p.uniqueEdges[_],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],m),u.cross(m,g),!g.almostZero()){g.normalize();const y=p.testSepAxis(g,t,e,n,i,s);if(y===!1)return!1;y<f&&(f=y,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const r=this;xs.project(r,t,n,i,nr),xs.project(e,t,s,o,ir);const l=nr[0],c=nr[1],h=ir[0],d=ir[1];if(l<d||h<c)return!1;const u=l-d,m=h-c;return u<m?u:m}calculateLocalInertia(t,e){const n=new S,i=new S;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,r=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*r*2*r),e.y=1/12*t*(2*s*2*s+2*r*2*r),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,r){const l=new S,c=new S,h=new S,d=new S,u=new S,m=new S,g=new S,f=new S,p=this,_=[],v=i,y=_;let x=-1,w=Number.MAX_VALUE;for(let I=0;I<p.faces.length;I++){l.copy(p.faceNormals[I]),n.vmult(l,l);const F=l.dot(t);F<w&&(w=F,x=I)}if(x<0)return;const E=p.faces[x];E.connectedFaces=[];for(let I=0;I<p.faces.length;I++)for(let F=0;F<p.faces[I].length;F++)E.indexOf(p.faces[I][F])!==-1&&I!==x&&E.connectedFaces.indexOf(I)===-1&&E.connectedFaces.push(I);const T=E.length;for(let I=0;I<T;I++){const F=p.vertices[E[I]],U=p.vertices[E[(I+1)%T]];F.vsub(U,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[x]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(F),n.vmult(m,m),e.vadd(m,m);const D=E.connectedFaces[I];g.copy(this.faceNormals[D]);const P=this.getPlaneConstantOfFace(D);f.copy(g),n.vmult(f,f);const O=P-f.dot(e);for(this.clipFaceAgainstPlane(v,y,f,O);v.length;)v.shift();for(;y.length;)v.push(y.shift())}g.copy(this.faceNormals[x]);const M=this.getPlaneConstantOfFace(x);f.copy(g),n.vmult(f,f);const A=M-f.dot(e);for(let I=0;I<v.length;I++){let F=f.dot(v[I])+A;if(F<=s&&(console.log(`clamped: depth=${F} to minDist=${s}`),F=s),F<=o){const U=v[I];if(F<=1e-6){const D={point:U,normal:f,depth:F};r.push(D)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const r=t.length;if(r<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<r;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const d=new S;d.copy(c),e.push(d)}else{const d=new S;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){const d=new S;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new S);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,r,l,c,h,d,u=new S;for(let m=0;m<s.length;m++){u.copy(s[m]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(r===void 0||g.y<r)&&(r=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,r,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new S);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new S;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let r=i[o];const l=e[n[o][0]],c=new S;t.vsub(l,c);const h=r.dot(c),d=new S;s.vsub(l,d);const u=r.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,r=gg;let l=0,c=0;const h=vg,d=t.vertices;h.setZero(),Xt.vectorToLocalFrame(n,i,e,r),Xt.pointToLocalFrame(n,i,h,h);const u=h.dot(r);c=l=d[0].dot(r);for(let m=1;m<o;m++){const g=d[m].dot(r);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const m=c;c=l,l=m}s[0]=l,s[1]=c}}const nr=[],ir=[];new S;const gg=new S,vg=new S;class Si extends vt{constructor(t){super({type:vt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=S,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],r=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new xs({vertices:s,faces:o,axes:r});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new S),Si.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)qn.set(s[o][0],s[o][1],s[o][2]),e.vmult(qn,qn),t.vadd(qn,qn),n(qn.x,qn.y,qn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;gn[0].set(s.x,s.y,s.z),gn[1].set(-s.x,s.y,s.z),gn[2].set(-s.x,-s.y,s.z),gn[3].set(-s.x,-s.y,-s.z),gn[4].set(s.x,-s.y,-s.z),gn[5].set(s.x,s.y,-s.z),gn[6].set(-s.x,s.y,-s.z),gn[7].set(s.x,-s.y,s.z);const o=gn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let r=1;r<8;r++){const l=gn[r];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const qn=new S,gn=[new S,new S,new S,new S,new S,new S,new S,new S],Vr={DYNAMIC:1,STATIC:2,KINEMATIC:4},Hr={AWAKE:0,SLEEPY:1,SLEEPING:2};class mt extends _c{constructor(t){t===void 0&&(t={}),super(),this.id=mt.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new S,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new S,this.force=new S;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?mt.STATIC:mt.DYNAMIC,typeof t.type==typeof mt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=mt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new le,this.initQuaternion=new le,this.previousQuaternion=new le,this.interpolatedQuaternion=new le,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new S,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new hn,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new hn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new S(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new S(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ke,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=mt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===mt.SLEEPING&&this.dispatchEvent(mt.wakeupEvent)}sleep(){this.sleepState=mt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===mt.AWAKE&&n<i?(this.sleepState=mt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(mt.sleepyEvent)):e===mt.SLEEPY&&n>i?this.wakeUp():e===mt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(mt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===mt.SLEEPING||this.type===mt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new S),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new S),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new S,s=new le;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const r=e[s].length(),l=o.boundingSphereRadius;r+l>i&&(i=r+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=_g,o=yg,r=this.quaternion,l=this.aabb,c=xg;for(let h=0;h!==i;h++){const d=t[h];r.vmult(e[h],s),s.vadd(this.position,s),r.mult(n[h],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Mg,i=bg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new S),this.type!==mt.DYNAMIC)return;this.sleepState===mt.SLEEPING&&this.wakeUp();const n=Sg;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new S),this.type!==mt.DYNAMIC)return;const n=wg,i=Eg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===mt.DYNAMIC&&(this.sleepState===mt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new S),this.type!==mt.DYNAMIC)return;this.sleepState===mt.SLEEPING&&this.wakeUp();const n=e,i=Cg;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Ag;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new S),this.type!==mt.DYNAMIC)return;const n=Tg,i=Rg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Lg;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Si.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new S;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===mt.DYNAMIC||this.type===mt.KINEMATIC)||this.sleepState===mt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,r=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*t;i.x+=r.x*m*u.x,i.y+=r.y*m*u.y,i.z+=r.z*m*u.z;const g=d.elements,f=this.angularFactor,p=l.x*f.x,_=l.y*f.y,v=l.z*f.z;s.x+=t*(g[0]*p+g[1]*_+g[2]*v),s.y+=t*(g[3]*p+g[4]*_+g[5]*v),s.z+=t*(g[6]*p+g[7]*_+g[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}mt.idCounter=0;mt.COLLIDE_EVENT_NAME="collide";mt.DYNAMIC=Vr.DYNAMIC;mt.STATIC=Vr.STATIC;mt.KINEMATIC=Vr.KINEMATIC;mt.AWAKE=Hr.AWAKE;mt.SLEEPY=Hr.SLEEPY;mt.SLEEPING=Hr.SLEEPING;mt.wakeupEvent={type:"wakeup"};mt.sleepyEvent={type:"sleepy"};mt.sleepEvent={type:"sleep"};const _g=new S,yg=new le,xg=new Ke,Mg=new hn,bg=new hn;new hn;const Sg=new S,wg=new S,Eg=new S,Cg=new S,Ag=new S,Tg=new S,Rg=new S,Lg=new S;class yc{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&mt.STATIC||t.sleepState===mt.SLEEPING)&&(e.type&mt.STATIC||e.sleepState===mt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Dg;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Ig,i=Pg,s=Og,o=t.length;for(let r=0;r!==o;r++)i[r]=t[r],s[r]=e[r];t.length=0,e.length=0;for(let r=0;r!==o;r++){const l=i[r].id,c=s[r].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=r,n.keys.push(h)}for(let r=0;r!==n.keys.length;r++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new S;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Dg=new S;new S;new le;new S;const Ig={keys:[]},Pg=[],Og=[];new S;new S;new S;class Ng extends yc{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,r;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],r=i[c],this.needBroadphaseCollision(o,r)&&this.intersectionTest(o,r,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class lo{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,r){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=r}}let xc,Mc,bc,Sc,wc,Ec,Cc;const Wr={CLOSEST:1,ANY:2,ALL:4};xc=vt.types.SPHERE;Mc=vt.types.PLANE;bc=vt.types.BOX;Sc=vt.types.CYLINDER;wc=vt.types.CONVEXPOLYHEDRON;Ec=vt.types.HEIGHTFIELD;Cc=vt.types.TRIMESH;class ae{get[xc](){return this._intersectSphere}get[Mc](){return this._intersectPlane}get[bc](){return this._intersectBox}get[Sc](){return this._intersectConvex}get[wc](){return this._intersectConvex}get[Ec](){return this._intersectHeightfield}get[Cc](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new S),e===void 0&&(e=new S),this.from=t.clone(),this.to=e.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ae.ANY,this.result=new lo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||ae.ANY,this.result=e.result||new lo,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(_l),sr.length=0,t.broadphase.aabbQuery(t,_l,sr),this.intersectBodies(sr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=Bg,s=kg;for(let o=0,r=t.shapes.length;o<r;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Zg(s,this.direction,n)>t.boundingSphereRadius)return;const r=this[t.type];r&&r.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,r=this.to,l=this.direction,c=new S(0,0,1);e.vmult(c,c);const h=new S;o.vsub(n,h);const d=h.dot(c);r.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(r)<d)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const g=new S,f=new S,p=new S;o.vsub(n,g);const _=-c.dot(g)/m;l.scale(_,f),o.vadd(f,p),this.reportIntersection(c,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=zg;o.from.copy(this.from),o.to.copy(this.to),Xt.pointToLocalFrame(n,e,o.from,o.from),Xt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const r=Fg;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Ke;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,r,!0),l=Math.max(l,r[0]),c=Math.max(c,r[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,r,!0),h=Math.min(h,r[0]+1),d=Math.min(d,r[1]+1);for(let m=l;m<h;m++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(m,g,!1),Xt.pointToWorldFrame(n,e,t.pillarOffset,Js),this._intersectConvex(t.pillarConvex,e,Js,i,s,yl),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Xt.pointToWorldFrame(n,e,t.pillarOffset,Js),this._intersectConvex(t.pillarConvex,e,Js,i,s,yl)}}}_intersectSphere(t,e,n,i,s){const o=this.from,r=this.to,l=t.radius,c=(r.x-o.x)**2+(r.y-o.y)**2+(r.z-o.z)**2,h=2*((r.x-o.x)*(o.x-n.x)+(r.y-o.y)*(o.y-n.y)+(r.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,m=Ug,g=Gg;if(!(u<0))if(u===0)o.lerp(r,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const f=(-h-Math.sqrt(u))/(2*c),p=(-h+Math.sqrt(u))/(2*c);if(f>=0&&f<=1&&(o.lerp(r,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(r,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const r=Vg,l=xl,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,m=this.direction,g=this.from,f=this.to,p=g.distanceTo(f),_=c?c.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<_;y++){const x=c?c[y]:y,w=h[x],E=u[x],T=e,M=n;l.copy(d[w[0]]),T.vmult(l,l),l.vadd(M,l),l.vsub(g,l),T.vmult(E,r);const A=m.dot(r);if(Math.abs(A)<this.precision)continue;const I=r.dot(l)/A;if(!(I<0)){m.scale(I,Oe),Oe.vadd(g,Oe),an.copy(d[w[0]]),T.vmult(an,an),M.vadd(an,an);for(let F=1;!v.shouldStop&&F<w.length-1;F++){vn.copy(d[w[F]]),_n.copy(d[w[F+1]]),T.vmult(vn,vn),T.vmult(_n,_n),M.vadd(vn,vn),M.vadd(_n,_n);const U=Oe.distanceTo(g);!(ae.pointInTriangle(Oe,an,vn,_n)||ae.pointInTriangle(Oe,vn,an,_n))||U>p||this.reportIntersection(r,Oe,s,i,x)}}}}_intersectTrimesh(t,e,n,i,s,o){const r=Hg,l=jg,c=$g,h=xl,d=Wg,u=qg,m=Xg,g=Yg,f=Kg,p=t.indices;t.vertices;const _=this.from,v=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),Xt.vectorToLocalFrame(n,e,y,d),Xt.pointToLocalFrame(n,e,_,u),Xt.pointToLocalFrame(n,e,v,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,m.vsub(u,d),d.normalize();const x=u.distanceSquared(m);t.tree.rayQuery(this,c,l);for(let w=0,E=l.length;!this.result.shouldStop&&w!==E;w++){const T=l[w];t.getNormal(T,r),t.getVertex(p[T*3],an),an.vsub(u,h);const M=d.dot(r),A=r.dot(h)/M;if(A<0)continue;d.scale(A,Oe),Oe.vadd(u,Oe),t.getVertex(p[T*3+1],vn),t.getVertex(p[T*3+2],_n);const I=Oe.distanceSquared(u);!(ae.pointInTriangle(Oe,vn,an,_n)||ae.pointInTriangle(Oe,an,vn,_n))||I>x||(Xt.vectorToWorldFrame(e,r,f),Xt.pointToWorldFrame(n,e,Oe,g),this.reportIntersection(f,g,s,i,T))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,r=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case ae.ALL:this.hasHit=!0,c.set(o,r,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case ae.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,r,t,e,n,i,l));break;case ae.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,r,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,fi),n.vsub(e,hs),t.vsub(e,or);const s=fi.dot(fi),o=fi.dot(hs),r=fi.dot(or),l=hs.dot(hs),c=hs.dot(or);let h,d;return(h=l*r-o*c)>=0&&(d=s*c-o*r)>=0&&h+d<s*l-o*o}}ae.CLOSEST=Wr.CLOSEST;ae.ANY=Wr.ANY;ae.ALL=Wr.ALL;const _l=new Ke,sr=[],hs=new S,or=new S,Bg=new S,kg=new le,Oe=new S,an=new S,vn=new S,_n=new S;new S;new lo;const yl={faceList:[0]},Js=new S,zg=new ae,Fg=[],Ug=new S,Gg=new S,Vg=new S;new S;new S;const xl=new S,Hg=new S,Wg=new S,qg=new S,Xg=new S,Kg=new S,Yg=new S;new Ke;const jg=[],$g=new Xt,fi=new S,Qs=new S;function Zg(a,t,e){e.vsub(a,fi);const n=fi.dot(t);return t.scale(n,Qs),Qs.vadd(a,Qs),e.distanceTo(Qs)}class Hi extends yc{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const o=t.boundingRadius,r=e.boundingRadius,l=i+o;return s-r<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,o=this.axisIndex;let r,l;for(this.dirty&&(this.sortList(),this.dirty=!1),r=0;r!==s;r++){const c=i[r];for(l=r+1;l<s;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!Hi.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Hi.insertionSortX(t):e===1?Hi.insertionSortY(t):e===2&&Hi.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0;const r=this.axisList,l=r.length,c=1/l;for(let m=0;m!==l;m++){const g=r[m],f=g.position.x;t+=f,e+=f*f;const p=g.position.y;n+=p,i+=p*p;const _=g.position.z;s+=_,o+=_*_}const h=e-t*t*c,d=i-n*n*c,u=o-s*s*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let r=0;r<o.length;r++){const l=o[r];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class Jg{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Ml{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Ds{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ds.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ml,this.jacobianElementB=new Ml,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,r=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,r)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,r=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,r)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,r=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,bl),r.scale(h,Sl),n.invInertiaWorldSolve.vmult(o,wl),i.invInertiaWorldSolve.vmult(l,El),t.multiplyVectors(bl,wl)+e.multiplyVectors(Sl,El)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,r=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return r.vmult(t.rotational,to),c+=to.dot(t.rotational),l.vmult(e.rotational,to),c+=to.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Qg;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ds.idCounter=0;const bl=new S,Sl=new S,wl=new S,El=new S,to=new S,Qg=new S;class t0 extends Ds{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,r=this.rj,l=e0,c=n0,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=i0,f=this.jacobianElementA,p=this.jacobianElementB,_=this.ni;o.cross(_,l),r.cross(_,c),_.negate(f.spatial),l.negate(f.rotational),p.spatial.copy(_),p.rotational.copy(c),g.copy(s.position),g.vadd(r,g),g.vsub(i.position,g),g.vsub(o,g);const v=_.dot(g),y=this.restitution+1,x=y*u.dot(_)-y*h.dot(_)+m.dot(c)-d.dot(l),w=this.computeGiMf();return-v*e-x*n-t*w}getImpactVelocityAlongNormal(){const t=s0,e=o0,n=r0,i=a0,s=l0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const e0=new S,n0=new S,i0=new S,s0=new S,o0=new S,r0=new S,a0=new S,l0=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Cl extends Ds{constructor(t,e,n){super(t,e,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=c0,o=h0,r=this.t;n.cross(r,s),i.cross(r,o);const l=this.jacobianElementA,c=this.jacobianElementB;r.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(r),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const c0=new S,h0=new S;class Zi{constructor(t,e,n){n=Jg.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Zi.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Zi.idCounter=0;class Ji{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Ji.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Ji.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new ae;new S;new S;new S;new S(1,0,0),new S(0,1,0),new S(0,0,1);new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class u0 extends vt{constructor(t){if(super({type:vt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new S);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let r=0;r<o.length;r++){const l=o[r];n[l]=t[l]-s,i[l]=t[l]+s}}}new S;new S;new S;new S;new S;new S;new S;new S;new S;class d0 extends vt{constructor(){super({type:vt.types.PLANE}),this.worldNormal=new S,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new S),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Dn.set(0,0,1),e.vmult(Dn,Dn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Dn.x===1?i.x=t.x:Dn.x===-1&&(n.x=t.x),Dn.y===1?i.y=t.y:Dn.y===-1&&(n.y=t.y),Dn.z===1?i.z=t.z:Dn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Dn=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new Ke;new S;new Ke;new S;new S;new S;new S;new S;new S;new S;new Ke;new S;new Xt;new Ke;class f0{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class p0 extends f0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,r=o.length,l=e.bodies,c=l.length,h=t;let d,u,m,g,f,p;if(r!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const _=g0,v=v0,y=m0;_.length=r,v.length=r,y.length=r;for(let x=0;x!==r;x++){const w=o[x];y[x]=0,v[x]=w.computeB(h),_[x]=1/w.computeC()}if(r!==0){for(let E=0;E!==c;E++){const T=l[E],M=T.vlambda,A=T.wlambda;M.set(0,0,0),A.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let E=0;E!==r;E++){const T=o[E];d=v[E],u=_[E],p=y[E],f=T.computeGWlambda(),m=u*(d-f-T.eps*p),p+m<T.minForce?m=T.minForce-p:p+m>T.maxForce&&(m=T.maxForce-p),y[E]+=m,g+=m>0?m:-m,T.addToWlambda(m)}if(g*g<s)break}for(let E=0;E!==c;E++){const T=l[E],M=T.velocity,A=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),M.vadd(T.vlambda,M),T.wlambda.vmul(T.angularFactor,T.wlambda),A.vadd(T.wlambda,A)}let x=o.length;const w=1/h;for(;x--;)o[x].multiplier=y[x]*w}return n}}const m0=[],g0=[],v0=[];class _0{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class y0 extends _0{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const Qt={sphereSphere:vt.types.SPHERE,spherePlane:vt.types.SPHERE|vt.types.PLANE,boxBox:vt.types.BOX|vt.types.BOX,sphereBox:vt.types.SPHERE|vt.types.BOX,planeBox:vt.types.PLANE|vt.types.BOX,convexConvex:vt.types.CONVEXPOLYHEDRON,sphereConvex:vt.types.SPHERE|vt.types.CONVEXPOLYHEDRON,planeConvex:vt.types.PLANE|vt.types.CONVEXPOLYHEDRON,boxConvex:vt.types.BOX|vt.types.CONVEXPOLYHEDRON,sphereHeightfield:vt.types.SPHERE|vt.types.HEIGHTFIELD,boxHeightfield:vt.types.BOX|vt.types.HEIGHTFIELD,convexHeightfield:vt.types.CONVEXPOLYHEDRON|vt.types.HEIGHTFIELD,sphereParticle:vt.types.PARTICLE|vt.types.SPHERE,planeParticle:vt.types.PLANE|vt.types.PARTICLE,boxParticle:vt.types.BOX|vt.types.PARTICLE,convexParticle:vt.types.PARTICLE|vt.types.CONVEXPOLYHEDRON,cylinderCylinder:vt.types.CYLINDER,sphereCylinder:vt.types.SPHERE|vt.types.CYLINDER,planeCylinder:vt.types.PLANE|vt.types.CYLINDER,boxCylinder:vt.types.BOX|vt.types.CYLINDER,convexCylinder:vt.types.CONVEXPOLYHEDRON|vt.types.CYLINDER,heightfieldCylinder:vt.types.HEIGHTFIELD|vt.types.CYLINDER,particleCylinder:vt.types.PARTICLE|vt.types.CYLINDER,sphereTrimesh:vt.types.SPHERE|vt.types.TRIMESH,planeTrimesh:vt.types.PLANE|vt.types.TRIMESH};class x0{get[Qt.sphereSphere](){return this.sphereSphere}get[Qt.spherePlane](){return this.spherePlane}get[Qt.boxBox](){return this.boxBox}get[Qt.sphereBox](){return this.sphereBox}get[Qt.planeBox](){return this.planeBox}get[Qt.convexConvex](){return this.convexConvex}get[Qt.sphereConvex](){return this.sphereConvex}get[Qt.planeConvex](){return this.planeConvex}get[Qt.boxConvex](){return this.boxConvex}get[Qt.sphereHeightfield](){return this.sphereHeightfield}get[Qt.boxHeightfield](){return this.boxHeightfield}get[Qt.convexHeightfield](){return this.convexHeightfield}get[Qt.sphereParticle](){return this.sphereParticle}get[Qt.planeParticle](){return this.planeParticle}get[Qt.boxParticle](){return this.boxParticle}get[Qt.convexParticle](){return this.convexParticle}get[Qt.cylinderCylinder](){return this.convexConvex}get[Qt.sphereCylinder](){return this.sphereConvex}get[Qt.planeCylinder](){return this.planeConvex}get[Qt.boxCylinder](){return this.boxConvex}get[Qt.convexCylinder](){return this.convexConvex}get[Qt.heightfieldCylinder](){return this.heightfieldCylinder}get[Qt.particleCylinder](){return this.particleCylinder}get[Qt.sphereTrimesh](){return this.sphereTrimesh}get[Qt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new y0,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let r;this.contactPointPool.length?(r=this.contactPointPool.pop(),r.bi=t,r.bj=e):r=new t0(t,e),r.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;r.restitution=l.restitution,r.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(r.restitution=c.restitution*h.restitution),r.si=s||n,r.sj=o||i,r}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,r=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(r.frictionGravity||r.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,f=g.length?g.pop():new Cl(n,i,u*m),p=g.length?g.pop():new Cl(n,i,u*m);return f.bi=p.bi=n,f.bj=p.bj=i,f.minForce=p.minForce=-u*m,f.maxForce=p.maxForce=u*m,f.ri.copy(t.ri),f.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(f.t,p.t),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,r.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,r.dt),f.enabled=p.enabled=t.enabled,e.push(f,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ri.setZero(),ki.setZero(),zi.setZero();const s=e.bi;e.bj;for(let r=0;r!==t;r++)e=this.result[this.result.length-1-r],e.bi!==s?(ri.vadd(e.ni,ri),ki.vadd(e.ri,ki),zi.vadd(e.rj,zi)):(ri.vsub(e.ni,ri),ki.vadd(e.rj,ki),zi.vadd(e.ri,zi));const o=1/t;ki.scale(o,n.ri),zi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ri.normalize(),ri.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,r){this.contactPointPool=s,this.frictionEquationPool=r,this.result=i,this.frictionResult=o;const l=S0,c=w0,h=M0,d=b0;for(let u=0,m=t.length;u!==m;u++){const g=t[u],f=e[u];let p=null;g.material&&f.material&&(p=n.getContactMaterial(g.material,f.material)||null);const _=g.type&mt.KINEMATIC&&f.type&mt.STATIC||g.type&mt.STATIC&&f.type&mt.KINEMATIC||g.type&mt.KINEMATIC&&f.type&mt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const y=g.shapes[v];for(let x=0;x<f.shapes.length;x++){f.quaternion.mult(f.shapeOrientations[x],c),f.quaternion.vmult(f.shapeOffsets[x],d),d.vadd(f.position,d);const w=f.shapes[x];if(!(y.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+w.boundingSphereRadius)continue;let E=null;y.material&&w.material&&(E=n.getContactMaterial(y.material,w.material)||null),this.currentContactMaterial=E||p||n.defaultContactMaterial;const T=y.type|w.type,M=this[T];if(M){let A=!1;y.type<w.type?A=M.call(this,y,w,h,d,l,c,g,f,y,w,_):A=M.call(this,w,y,d,h,c,l,f,g,y,w,_),A&&_&&(n.shapeOverlapKeeper.set(y.id,w.id),n.bodyOverlapKeeper.set(g.id,f.id))}}}}}sphereSphere(t,e,n,i,s,o,r,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(r,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(r.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,r,l,c,h,d){const u=this.createContactEquation(r,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,eo),u.ni.scale(u.ni.dot(eo),Al),eo.vsub(Al,u.rj),-eo.dot(u.ni)<=t.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(r.position,m),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,r,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,r,l,t,e,d)}sphereBox(t,e,n,i,s,o,r,l,c,h,d){const u=this.v3pool,m=$0;n.vsub(i,no),e.getSideNormals(m,o);const g=t.radius;let f=!1;const p=J0,_=Q0,v=tv;let y=null,x=0,w=0,E=0,T=null;for(let N=0,K=m.length;N!==K&&f===!1;N++){const k=K0;k.copy(m[N]);const X=k.length();k.normalize();const Y=no.dot(k);if(Y<X+g&&Y>0){const it=Y0,B=j0;it.copy(m[(N+1)%3]),B.copy(m[(N+2)%3]);const tt=it.length(),et=B.length();it.normalize(),B.normalize();const G=no.dot(it),lt=no.dot(B);if(G<tt&&G>-tt&&lt<et&&lt>-et){const ct=Math.abs(Y-X-g);if((T===null||ct<T)&&(T=ct,w=G,E=lt,y=X,p.copy(k),_.copy(it),v.copy(B),x++,d))return!0}}}if(x){f=!0;const N=this.createContactEquation(r,l,t,e,c,h);p.scale(-g,N.ri),N.ni.copy(p),N.ni.negate(N.ni),p.scale(y,p),_.scale(w,_),p.vadd(_,p),v.scale(E,v),p.vadd(v,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(r.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let M=u.get();const A=Z0;for(let N=0;N!==2&&!f;N++)for(let K=0;K!==2&&!f;K++)for(let k=0;k!==2&&!f;k++)if(M.set(0,0,0),N?M.vadd(m[0],M):M.vsub(m[0],M),K?M.vadd(m[1],M):M.vsub(m[1],M),k?M.vadd(m[2],M):M.vsub(m[2],M),i.vadd(M,A),A.vsub(n,A),A.lengthSquared()<g*g){if(d)return!0;f=!0;const X=this.createContactEquation(r,l,t,e,c,h);X.ri.copy(A),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(g,X.ri),X.rj.copy(M),X.ri.vadd(n,X.ri),X.ri.vsub(r.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(l.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}u.release(M),M=null;const I=u.get(),F=u.get(),U=u.get(),D=u.get(),P=u.get(),O=m.length;for(let N=0;N!==O&&!f;N++)for(let K=0;K!==O&&!f;K++)if(N%3!==K%3){m[K].cross(m[N],I),I.normalize(),m[N].vadd(m[K],F),U.copy(n),U.vsub(F,U),U.vsub(i,U);const k=U.dot(I);I.scale(k,D);let X=0;for(;X===N%3||X===K%3;)X++;P.copy(n),P.vsub(D,P),P.vsub(F,P),P.vsub(i,P);const Y=Math.abs(k),it=P.length();if(Y<m[X].length()&&it<g){if(d)return!0;f=!0;const B=this.createContactEquation(r,l,t,e,c,h);F.vadd(D,B.rj),B.rj.copy(B.rj),P.negate(B.ni),B.ni.normalize(),B.ri.copy(B.rj),B.ri.vadd(i,B.ri),B.ri.vsub(n,B.ri),B.ri.normalize(),B.ri.scale(g,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(r.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}u.release(I,F,U,D,P)}planeBox(t,e,n,i,s,o,r,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,r,l,t,e,d)}convexConvex(t,e,n,i,s,o,r,l,c,h,d,u,m){const g=mv;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,m)){const f=[],p=gv;t.clipAgainstHull(n,s,e,i,o,g,-100,100,f);let _=0;for(let v=0;v!==f.length;v++){if(d)return!0;const y=this.createContactEquation(r,l,t,e,c,h),x=y.ri,w=y.rj;g.negate(y.ni),f[v].normal.negate(p),p.scale(f[v].depth,p),f[v].point.vadd(p,x),w.copy(f[v].point),x.vsub(n,x),w.vsub(i,w),x.vadd(n,x),x.vsub(r.position,x),w.vadd(i,w),w.vsub(l.position,w),this.result.push(y),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(t,e,n,i,s,o,r,l,c,h,d){const u=this.v3pool;n.vsub(i,ev);const m=e.faceNormals,g=e.faces,f=e.vertices,p=t.radius;let _=!1;for(let v=0;v!==f.length;v++){const y=f[v],x=ov;o.vmult(y,x),i.vadd(x,x);const w=sv;if(x.vsub(n,w),w.lengthSquared()<p*p){if(d)return!0;_=!0;const E=this.createContactEquation(r,l,t,e,c,h);E.ri.copy(w),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(p,E.ri),x.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(r.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let v=0,y=g.length;v!==y&&_===!1;v++){const x=m[v],w=g[v],E=rv;o.vmult(x,E);const T=av;o.vmult(f[w[0]],T),T.vadd(i,T);const M=lv;E.scale(-p,M),n.vadd(M,M);const A=cv;M.vsub(T,A);const I=A.dot(E),F=hv;if(n.vsub(T,F),I<0&&F.dot(E)>0){const U=[];for(let D=0,P=w.length;D!==P;D++){const O=u.get();o.vmult(f[w[D]],O),i.vadd(O,O),U.push(O)}if(X0(U,E,n)){if(d)return!0;_=!0;const D=this.createContactEquation(r,l,t,e,c,h);E.scale(-p,D.ri),E.negate(D.ni);const P=u.get();E.scale(-I,P);const O=u.get();E.scale(-p,O),n.vsub(i,D.rj),D.rj.vadd(O,D.rj),D.rj.vadd(P,D.rj),D.rj.vadd(i,D.rj),D.rj.vsub(l.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(r.position,D.ri),u.release(P),u.release(O),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let N=0,K=U.length;N!==K;N++)u.release(U[N]);return}else for(let D=0;D!==w.length;D++){const P=u.get(),O=u.get();o.vmult(f[w[(D+1)%w.length]],P),o.vmult(f[w[(D+2)%w.length]],O),i.vadd(P,P),i.vadd(O,O);const N=nv;O.vsub(P,N);const K=iv;N.unit(K);const k=u.get(),X=u.get();n.vsub(P,X);const Y=X.dot(K);K.scale(Y,k),k.vadd(P,k);const it=u.get();if(k.vsub(n,it),Y>0&&Y*Y<N.lengthSquared()&&it.lengthSquared()<p*p){if(d)return!0;const B=this.createContactEquation(r,l,t,e,c,h);k.vsub(i,B.rj),k.vsub(n,B.ni),B.ni.normalize(),B.ni.scale(p,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(r.position,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(let tt=0,et=U.length;tt!==et;tt++)u.release(U[tt]);u.release(P),u.release(O),u.release(k),u.release(it),u.release(X);return}u.release(P),u.release(O),u.release(k),u.release(it),u.release(X)}for(let D=0,P=U.length;D!==P;D++)u.release(U[D])}}}planeConvex(t,e,n,i,s,o,r,l,c,h,d){const u=uv,m=dv;m.set(0,0,1),s.vmult(m,m);let g=0;const f=fv;for(let p=0;p!==e.vertices.length;p++)if(u.copy(e.vertices[p]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,f),m.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(r,l,t,e,c,h),y=pv;m.scale(m.dot(f),y),u.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(m),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(r.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,r,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,r,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,r,l,c,h,d){const u=e.data,m=t.radius,g=e.elementSize,f=Tv,p=Av;Xt.pointToLocalFrame(i,o,n,p);let _=Math.floor((p.x-m)/g)-1,v=Math.ceil((p.x+m)/g)+1,y=Math.floor((p.y-m)/g)-1,x=Math.ceil((p.y+m)/g)+1;if(v<0||x<0||_>u.length||y>u[0].length)return;_<0&&(_=0),v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),_>=u.length&&(_=u.length-1),v>=u.length&&(v=u.length-1),x>=u[0].length&&(x=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const w=[];e.getRectMinMax(_,y,v,x,w);const E=w[0],T=w[1];if(p.z-m>T||p.z+m<E)return;const M=this.result;for(let A=_;A<v;A++)for(let I=y;I<x;I++){const F=M.length;let U=!1;if(e.getConvexTrianglePillar(A,I,!1),Xt.pointToWorldFrame(i,o,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.sphereConvex(t,e.pillarConvex,n,f,s,o,r,l,t,e,d)),d&&U||(e.getConvexTrianglePillar(A,I,!0),Xt.pointToWorldFrame(i,o,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.sphereConvex(t,e.pillarConvex,n,f,s,o,r,l,t,e,d)),d&&U))return!0;if(M.length-F>2)return}}boxHeightfield(t,e,n,i,s,o,r,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,r,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,r,l,c,h,d){const u=e.data,m=e.elementSize,g=t.boundingSphereRadius,f=Ev,p=Cv,_=wv;Xt.pointToLocalFrame(i,o,n,_);let v=Math.floor((_.x-g)/m)-1,y=Math.ceil((_.x+g)/m)+1,x=Math.floor((_.y-g)/m)-1,w=Math.ceil((_.y+g)/m)+1;if(y<0||w<0||v>u.length||x>u[0].length)return;v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),w<0&&(w=0),v>=u.length&&(v=u.length-1),y>=u.length&&(y=u.length-1),w>=u[0].length&&(w=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const E=[];e.getRectMinMax(v,x,y,w,E);const T=E[0],M=E[1];if(!(_.z-g>M||_.z+g<T))for(let A=v;A<y;A++)for(let I=x;I<w;I++){let F=!1;if(e.getConvexTrianglePillar(A,I,!1),Xt.pointToWorldFrame(i,o,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.convexConvex(t,e.pillarConvex,n,f,s,o,r,l,null,null,d,p,null)),d&&F||(e.getConvexTrianglePillar(A,I,!0),Xt.pointToWorldFrame(i,o,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.convexConvex(t,e.pillarConvex,n,f,s,o,r,l,null,null,d,p,null)),d&&F))return!0}}sphereParticle(t,e,n,i,s,o,r,l,c,h,d){const u=xv;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,r,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,r,l,c,h,d){const u=vv;u.set(0,0,1),r.quaternion.vmult(u,u);const m=_v;if(i.vsub(r.position,m),u.dot(m)<=0){if(d)return!0;const f=this.createContactEquation(l,r,e,t,c,h);f.ni.copy(u),f.ni.negate(f.ni),f.ri.set(0,0,0);const p=yv;u.scale(u.dot(i),p),i.vsub(p,p),f.rj.copy(p),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxParticle(t,e,n,i,s,o,r,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,r,l,t,e,d)}convexParticle(t,e,n,i,s,o,r,l,c,h,d){let u=-1;const m=bv,g=Sv;let f=null;const p=Mv;if(p.copy(i),p.vsub(n,p),s.conjugate(Tl),Tl.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let _=0,v=t.faces.length;_!==v;_++){const y=[t.worldVertices[t.faces[_][0]]],x=t.worldFaceNormals[_];i.vsub(y[0],Rl);const w=-x.dot(Rl);if(f===null||Math.abs(w)<Math.abs(f)){if(d)return!0;f=w,u=_,m.copy(x)}}if(u!==-1){const _=this.createContactEquation(l,r,e,t,c,h);m.scale(f,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),m.negate(_.ni),_.ri.set(0,0,0);const v=_.ri,y=_.rj;v.vadd(i,v),v.vsub(l.position,v),y.vadd(n,y),y.vsub(r.position,y),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,r,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,s,l,r,c,h,d)}particleCylinder(t,e,n,i,s,o,r,l,c,h,d){return this.convexParticle(e,t,i,n,o,s,l,r,c,h,d)}sphereTrimesh(t,e,n,i,s,o,r,l,c,h,d){const u=I0,m=P0,g=O0,f=N0,p=B0,_=k0,v=G0,y=D0,x=R0,w=V0;Xt.pointToLocalFrame(i,o,n,p);const E=t.radius;v.lowerBound.set(p.x-E,p.y-E,p.z-E),v.upperBound.set(p.x+E,p.y+E,p.z+E),e.getTrianglesInAABB(v,w);const T=L0,M=t.radius*t.radius;for(let D=0;D<w.length;D++)for(let P=0;P<3;P++)if(e.getVertex(e.indices[w[D]*3+P],T),T.vsub(p,x),x.lengthSquared()<=M){if(y.copy(T),Xt.pointToWorldFrame(i,o,y,T),T.vsub(n,x),d)return!0;let O=this.createContactEquation(r,l,t,e,c,h);O.ni.copy(x),O.ni.normalize(),O.ri.copy(O.ni),O.ri.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(r.position,O.ri),O.rj.copy(T),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}for(let D=0;D<w.length;D++)for(let P=0;P<3;P++){e.getVertex(e.indices[w[D]*3+P],u),e.getVertex(e.indices[w[D]*3+(P+1)%3],m),m.vsub(u,g),p.vsub(m,_);const O=_.dot(g);p.vsub(u,_);let N=_.dot(g);if(N>0&&O<0&&(p.vsub(u,_),f.copy(g),f.normalize(),N=_.dot(f),f.scale(N,_),_.vadd(u,_),_.distanceTo(p)<t.radius)){if(d)return!0;const k=this.createContactEquation(r,l,t,e,c,h);_.vsub(p,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(r.position,k.ri),Xt.pointToWorldFrame(i,o,_,_),_.vsub(l.position,k.rj),Xt.vectorToWorldFrame(o,k.ni,k.ni),Xt.vectorToWorldFrame(o,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const A=z0,I=F0,F=U0,U=T0;for(let D=0,P=w.length;D!==P;D++){e.getTriangleVertices(w[D],A,I,F),e.getNormal(w[D],U),p.vsub(A,_);let O=_.dot(U);if(U.scale(O,_),p.vsub(_,_),O=_.distanceTo(p),ae.pointInTriangle(_,A,I,F)&&O<t.radius){if(d)return!0;let N=this.createContactEquation(r,l,t,e,c,h);_.vsub(p,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(r.position,N.ri),Xt.pointToWorldFrame(i,o,_,_),_.vsub(l.position,N.rj),Xt.vectorToWorldFrame(o,N.ni,N.ni),Xt.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}w.length=0}planeTrimesh(t,e,n,i,s,o,r,l,c,h,d){const u=new S,m=E0;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const f=new S;f.copy(u),Xt.pointToWorldFrame(i,o,f,u);const p=C0;if(u.vsub(n,p),m.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(r,l,t,e,c,h);v.ni.copy(m);const y=A0;m.scale(p.dot(m),y),u.vsub(y,y),v.ri.copy(y),v.ri.vsub(r.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const ri=new S,ki=new S,zi=new S,M0=new S,b0=new S,S0=new le,w0=new le,E0=new S,C0=new S,A0=new S,T0=new S,R0=new S;new S;const L0=new S,D0=new S,I0=new S,P0=new S,O0=new S,N0=new S,B0=new S,k0=new S,z0=new S,F0=new S,U0=new S,G0=new Ke,V0=[],eo=new S,Al=new S,H0=new S,W0=new S,q0=new S;function X0(a,t,e){let n=null;const i=a.length;for(let s=0;s!==i;s++){const o=a[s],r=H0;a[(s+1)%i].vsub(o,r);const l=W0;r.cross(t,l);const c=q0;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const no=new S,K0=new S,Y0=new S,j0=new S,$0=[new S,new S,new S,new S,new S,new S],Z0=new S,J0=new S,Q0=new S,tv=new S,ev=new S,nv=new S,iv=new S,sv=new S,ov=new S,rv=new S,av=new S,lv=new S,cv=new S,hv=new S;new S;new S;const uv=new S,dv=new S,fv=new S,pv=new S,mv=new S,gv=new S,vv=new S,_v=new S,yv=new S,xv=new S,Tl=new le,Mv=new S;new S;const bv=new S,Rl=new S,Sv=new S,wv=new S,Ev=new S,Cv=[0],Av=new S,Tv=new S;class Ll{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let r=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[r];)r++;c=h===i[r],c||Dl(t,h)}r=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[r];)r++;c=n[r]===h,c||Dl(e,h)}}}function Dl(a,t){a.push((t&4294901760)>>16,t&65535)}const rr=(a,t)=>a<t?`${a}-${t}`:`${t}-${a}`;class Rv{constructor(){this.data={keys:[]}}get(t,e){const n=rr(t,e);return this.data[n]}set(t,e,n){const i=rr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=rr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Lv extends _c{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Ng,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new p0,this.constraints=[],this.narrowphase=new x0(this),this.collisionMatrix=new gl,this.collisionMatrixPrevious=new gl,this.bodyOverlapKeeper=new Ll,this.shapeOverlapKeeper=new Ll,this.contactmaterials=[],this.contactMaterialTable=new Rv,this.defaultMaterial=new Ji("default"),this.defaultContactMaterial=new Zi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof lo?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=ae.ALL,n.from=t,n.to=e,n.callback=i,ar.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=ae.ANY,n.from=t,n.to=e,n.result=i,ar.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=ae.CLOSEST,n.from=t,n.to=e,n.result=i,ar.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof mt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ce.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ce.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ce.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let r=0;r!==this.bodies.length;r++){const l=this.bodies[r];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Nv,i=Bv,s=this.bodies.length,o=this.bodies,r=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=mt.DYNAMIC;let u=-1/0;const m=this.constraints,g=Ov;l.length();const f=l.x,p=l.y,_=l.z;let v=0;for(c&&(u=ce.now()),v=0;v!==s;v++){const D=o[v];if(D.type===d){const P=D.force,O=D.mass;P.x+=O*f,P.y+=O*p,P.z+=O*_}}for(let D=0,P=this.subsystems.length;D!==P;D++)this.subsystems[D].update();c&&(u=ce.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=ce.now()-u);let y=m.length;for(v=0;v!==y;v++){const D=m[v];if(!D.collideConnected)for(let P=n.length-1;P>=0;P-=1)(D.bodyA===n[P]&&D.bodyB===i[P]||D.bodyB===n[P]&&D.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),c&&(u=ce.now());const x=Pv,w=e.length;for(v=0;v!==w;v++)x.push(e[v]);e.length=0;const E=this.frictionEquations.length;for(v=0;v!==E;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,g),c&&(h.narrowphase=ce.now()-u),c&&(u=ce.now()),v=0;v<this.frictionEquations.length;v++)r.addEquation(this.frictionEquations[v]);const T=e.length;for(let D=0;D!==T;D++){const P=e[D],O=P.bi,N=P.bj,K=P.si,k=P.sj;let X;if(O.material&&N.material?X=this.getContactMaterial(O.material,N.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,O.material&&N.material&&(O.material.friction>=0&&N.material.friction>=0&&O.material.friction*N.material.friction,O.material.restitution>=0&&N.material.restitution>=0&&(P.restitution=O.material.restitution*N.material.restitution)),r.addEquation(P),O.allowSleep&&O.type===mt.DYNAMIC&&O.sleepState===mt.SLEEPING&&N.sleepState===mt.AWAKE&&N.type!==mt.STATIC){const Y=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),it=N.sleepSpeedLimit**2;Y>=it*2&&(O.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===mt.DYNAMIC&&N.sleepState===mt.SLEEPING&&O.sleepState===mt.AWAKE&&O.type!==mt.STATIC){const Y=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),it=O.sleepSpeedLimit**2;Y>=it*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(O,N,!0),this.collisionMatrixPrevious.get(O,N)||(us.body=N,us.contact=P,O.dispatchEvent(us),us.body=O,N.dispatchEvent(us)),this.bodyOverlapKeeper.set(O.id,N.id),this.shapeOverlapKeeper.set(K.id,k.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=ce.now()-u,u=ce.now()),v=0;v!==s;v++){const D=o[v];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(y=m.length,v=0;v!==y;v++){const D=m[v];D.update();for(let P=0,O=D.equations.length;P!==O;P++){const N=D.equations[P];r.addEquation(N)}}r.solve(t,this),c&&(h.solve=ce.now()-u),r.removeAllEquations();const M=Math.pow;for(v=0;v!==s;v++){const D=o[v];if(D.type&d){const P=M(1-D.linearDamping,t),O=D.velocity;O.scale(P,O);const N=D.angularVelocity;if(N){const K=M(1-D.angularDamping,t);N.scale(K,N)}}}this.dispatchEvent(Iv),c&&(u=ce.now());const I=this.stepnumber%(this.quatNormalizeSkip+1)===0,F=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(t,I,F);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=ce.now()-u),this.stepnumber+=1,this.dispatchEvent(Dv);let U=!0;if(this.allowSleep)for(U=!1,v=0;v!==s;v++){const D=o[v];D.sleepTick(this.time),D.sleepState!==mt.SLEEPING&&(U=!0)}this.hasActiveBodies=U}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(In,Pn),t){for(let s=0,o=In.length;s<o;s+=2)ds.bodyA=this.getBodyById(In[s]),ds.bodyB=this.getBodyById(In[s+1]),this.dispatchEvent(ds);ds.bodyA=ds.bodyB=null}if(e){for(let s=0,o=Pn.length;s<o;s+=2)fs.bodyA=this.getBodyById(Pn[s]),fs.bodyB=this.getBodyById(Pn[s+1]),this.dispatchEvent(fs);fs.bodyA=fs.bodyB=null}In.length=Pn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(In,Pn),n){for(let s=0,o=In.length;s<o;s+=2){const r=this.getShapeById(In[s]),l=this.getShapeById(In[s+1]);On.shapeA=r,On.shapeB=l,r&&(On.bodyA=r.body),l&&(On.bodyB=l.body),this.dispatchEvent(On)}On.bodyA=On.bodyB=On.shapeA=On.shapeB=null}if(i){for(let s=0,o=Pn.length;s<o;s+=2){const r=this.getShapeById(Pn[s]),l=this.getShapeById(Pn[s+1]);Nn.shapeA=r,Nn.shapeB=l,r&&(Nn.bodyA=r.body),l&&(Nn.bodyB=l.body),this.dispatchEvent(Nn)}Nn.bodyA=Nn.bodyB=Nn.shapeA=Nn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ke;const ar=new ae,ce=globalThis.performance||{};if(!ce.now){let a=Date.now();ce.timing&&ce.timing.navigationStart&&(a=ce.timing.navigationStart),ce.now=()=>Date.now()-a}new S;const Dv={type:"postStep"},Iv={type:"preStep"},us={type:mt.COLLIDE_EVENT_NAME,body:null,contact:null},Pv=[],Ov=[],Nv=[],Bv=[],In=[],Pn=[],ds={type:"beginContact",bodyA:null,bodyB:null},fs={type:"endContact",bodyA:null,bodyB:null},On={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Nn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class ke{static audioCtx=null;static noiseBuffer=null;static init(){if(this.audioCtx){this.audioCtx.state==="suspended"&&this.audioCtx.resume();return}try{const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t,this.createNoiseBuffer())}catch(t){console.warn("Failed to initialize AudioContext:",t)}}static createNoiseBuffer(){if(!this.audioCtx)return;const t=this.audioCtx.sampleRate*1;this.noiseBuffer=this.audioCtx.createBuffer(1,t,this.audioCtx.sampleRate);const e=this.noiseBuffer.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}static playNoise(t,e,n,i="lowpass"){if(!this.audioCtx||!this.noiseBuffer)return;const s=this.audioCtx.createBufferSource();s.buffer=this.noiseBuffer;const o=this.audioCtx.createGain();o.gain.setValueAtTime(e,this.audioCtx.currentTime),o.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+t);let r=s;if(n!==void 0){const l=this.audioCtx.createBiquadFilter();l.type=i,l.frequency.setValueAtTime(n,this.audioCtx.currentTime),s.connect(l),r=l}r.connect(o),o.connect(this.audioCtx.destination),s.start(),s.stop(this.audioCtx.currentTime+t)}static playTone(t,e,n,i,s){if(!this.audioCtx)return;const o=this.audioCtx.createOscillator();o.type=t;const r=this.audioCtx.createGain();r.gain.setValueAtTime(s,this.audioCtx.currentTime),r.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+i),o.frequency.setValueAtTime(e,this.audioCtx.currentTime),e!==n&&o.frequency.exponentialRampToValueAtTime(n,this.audioCtx.currentTime+i),o.connect(r),r.connect(this.audioCtx.destination),o.start(),o.stop(this.audioCtx.currentTime+i)}static playBreak(t){if(this.init(),!!this.audioCtx)switch(t){case b.STONE:case b.COAL_ORE:case b.BRICK:this.playNoise(.18,.35,450,"bandpass"),this.playTone("triangle",130,40,.15,.3);break;case b.WOOD:case b.PLANK:case b.DOOR_CLOSED:case b.DOOR_OPEN:this.playNoise(.12,.3,600,"lowpass"),this.playTone("triangle",180,80,.12,.35);break;case b.GROUND:case b.DIRT:case b.LEAVES:this.playNoise(.08,.25,1200,"bandpass");break;case b.GLASS:this.playTone("sine",1600,800,.25,.35),this.playTone("sine",2200,1e3,.2,.2),this.playNoise(.18,.15,4e3,"highpass");break;default:this.playNoise(.1,.25,800,"lowpass");break}}static playPlace(t){if(this.init(),!!this.audioCtx)switch(t){case b.STONE:case b.COAL_ORE:case b.BRICK:this.playNoise(.08,.2,700,"bandpass"),this.playTone("triangle",180,120,.08,.18);break;case b.WOOD:case b.PLANK:case b.DOOR_CLOSED:case b.DOOR_OPEN:this.playNoise(.06,.2,900,"lowpass"),this.playTone("triangle",240,180,.06,.2);break;case b.GLASS:this.playTone("sine",1900,1700,.1,.2);break;default:this.playNoise(.05,.18,1400,"lowpass");break}}static playSwing(){this.init(),this.playTone("sine",600,90,.12,.25),this.playNoise(.08,.1,2500,"bandpass")}static playHit(){this.init(),this.playNoise(.12,.4,250,"lowpass"),this.playTone("sawtooth",120,40,.1,.3)}static playDamage(){this.init(),this.playTone("sawtooth",85,45,.16,.45),this.playNoise(.14,.25,350,"lowpass")}static playJump(){this.init(),this.playTone("triangle",160,280,.12,.2)}static playPickup(){this.init(),this.playTone("sine",950,1400,.08,.22)}}class $e{position;camera;body;characterType="boy1";avatar;head;bodyMesh;leftArm;rightArm;leftLeg;rightLeg;cameraMode="1PV";armorType="none";armorMat;weapons1PV={};weapons3PV={};swingTime=0;hp=ht.PLAYER_MAX_HP;isDead=!1;spawnPosition;pitch=0;yaw=0;sensitivity=.002;speed=ht.PLAYER_SPEED;isGrounded=!1;isInWater=!1;isSprintingToggle=!1;jumpForce=7.5;lastVelocityY=0;lastDamageTime=0;lastRegenTime=0;voxelWorld;static tempVec3=new H;static tempVec3_2=new H;static tempQuat=new xi;static tempQuat_2=new xi;static tempDirection=new H;constructor(t,e,n,i){this.camera=t,this.position=e.clone(),this.spawnPosition=e.clone();const s=ht.PLAYER_RADIUS,o=ht.PLAYER_HEIGHT/2;this.body=new mt({mass:60,position:new S(e.x,e.y+o,e.z),fixedRotation:!0,linearDamping:.1,material:n.playerMaterial});const r=new u0(s);this.body.addShape(r,new S(0,-.5,0)),this.body.addShape(r,new S(0,0,0)),this.body.addShape(r,new S(0,.5,0)),n.world.addBody(this.body),this.characterType=we.getConfig().characterType||"boy1",this.avatar=new he,this.avatar.rotation.order="YXZ",this.buildAvatar(),i.add(this.avatar),i.add(this.camera);const l={14:{creator:()=>this.buildSword(13421772,7877903,15381256)},22:{creator:()=>this.buildSword(65535,7877903,35071)},23:{creator:()=>this.buildHammer()},35:{creator:()=>this.buildPickaxe(9132587)},36:{creator:()=>this.buildPickaxe(8947848)},37:{creator:()=>this.buildPickaxe(14540253)},38:{creator:()=>this.buildPickaxe(65535)},39:{creator:()=>this.buildAxe(9132587)},40:{creator:()=>this.buildAxe(8947848)},41:{creator:()=>this.buildAxe(14540253)},42:{creator:()=>this.buildAxe(65535)},43:{creator:()=>this.buildShovel(9132587)},44:{creator:()=>this.buildShovel(8947848)},45:{creator:()=>this.buildShovel(14540253)},46:{creator:()=>this.buildShovel(65535)}};for(const c of Object.keys(l)){const h=Number(c);this.weapons1PV[h]=l[h].creator(),this.weapons3PV[h]=l[h].creator(),this.weapons1PV[h].position.set(.24,-.24,-.38),this.weapons1PV[h].rotation.set(-30*Math.PI/180,45*Math.PI/180,15*Math.PI/180),this.weapons1PV[h].visible=!1,this.camera.add(this.weapons1PV[h]),this.weapons3PV[h].position.set(0,-.6,-.1),this.weapons3PV[h].rotation.x=-Math.PI/2,this.weapons3PV[h].visible=!1,this.rightArm.add(this.weapons3PV[h])}this.syncCamera()}buildAvatar(){for(;this.avatar.children.length>0;)this.avatar.remove(this.avatar.children[0]);let t=5913896,e=33023,n=2829184,i=16767916,s=3355443,o=!1;const r=this.characterType||"boy1";r==="boy1"?(t=2236962,e=3900150,n=1920728,s=1920728):r==="boy2"?(t=14251782,e=1096065,n=2042167,s=292951):r==="girl1"?(t=14362487,e=16436245,n=5195493,s=12458077,o=!0):r==="girl2"&&(t=440020,e=9133302,n=4674921,s=7153881,o=!0);const l=new jt({color:i,roughness:.9}),c=new jt({color:e,roughness:.9}),h=new jt({color:i,roughness:.9}),d=new jt({color:n,roughness:.9}),u=new jt({color:t,roughness:.9}),m=new jt({color:16777215,roughness:.9}),g=new jt({color:s,roughness:.9}),f=new jt({color:14753096,roughness:.9});this.armorMat=new jt({color:16777215,roughness:.8,metalness:.1,visible:!1});const p=new Bt(.44,.04,.44),_=new Bt(.44,.4,.04),v=new Bt(.04,.4,.44),y=new Bt(.44,.62,.24),x=new Bt(.24,.35,.24);x.translate(0,-.175,0);const w=new Bt(.23,.4,.23);w.translate(0,-.2,0);const E=new Bt(.24,.2,.24);E.translate(0,-.5,0);const T=new Bt(.4,.4,.4);this.head=new xt(T,l),this.head.position.y=.5,this.head.castShadow=!0,this.head.receiveShadow=!0;const M=new Bt(.42,.15,.42),A=new xt(M,u);if(A.position.y=.15,this.head.add(A),o){const ne=new Bt(.42,.32,.08),Yt=new xt(ne,u);Yt.position.set(0,-.08,.17),Yt.castShadow=!0,Yt.receiveShadow=!0,this.head.add(Yt);const kt=new Bt(.08,.25,.42),zt=new xt(kt,u);zt.position.set(.17,-.05,0),zt.castShadow=!0,zt.receiveShadow=!0,this.head.add(zt);const Ft=new xt(kt,u);Ft.position.set(-.17,-.05,0),Ft.castShadow=!0,Ft.receiveShadow=!0,this.head.add(Ft)}const I=new Bt(.08,.04,.01),F=new xt(I,m);F.position.set(.08,.01,-.201),this.head.add(F);const U=new Bt(.04,.04,.012),D=new xt(U,g);D.position.set(.06,.01,-.202),this.head.add(D);const P=new xt(I,m);P.position.set(-.08,.01,-.201),this.head.add(P);const O=new xt(U,g);O.position.set(-.06,.01,-.202),this.head.add(O);const N=new Bt(.12,.04,.01),K=new xt(N,f);K.position.set(0,-.09,-.201),this.head.add(K);const k=new xt(p,this.armorMat);k.position.set(0,.22,0),k.castShadow=!0,k.receiveShadow=!0,this.head.add(k);const X=new xt(_,this.armorMat);X.position.set(0,.02,.22),X.castShadow=!0,X.receiveShadow=!0,this.head.add(X);const Y=new xt(v,this.armorMat);Y.position.set(.22,.02,0),Y.castShadow=!0,Y.receiveShadow=!0,this.head.add(Y);const it=new xt(v,this.armorMat);it.position.set(-.22,.02,0),it.castShadow=!0,it.receiveShadow=!0,this.head.add(it),this.avatar.add(this.head);const B=new Bt(.4,.6,.2);this.bodyMesh=new xt(B,c),this.bodyMesh.position.y=0,this.bodyMesh.castShadow=!0,this.bodyMesh.receiveShadow=!0;const tt=new xt(y,this.armorMat);tt.castShadow=!0,tt.receiveShadow=!0,this.bodyMesh.add(tt),this.avatar.add(this.bodyMesh);const et=new Bt(.2,.6,.2);et.translate(0,-.3,0),this.leftArm=new he;const G=new xt(et,h);G.castShadow=!0,G.receiveShadow=!0;const lt=new xt(x,this.armorMat);lt.castShadow=!0,lt.receiveShadow=!0,G.add(lt),this.leftArm.add(G),this.leftArm.position.set(.3,.3,0),this.avatar.add(this.leftArm),this.rightArm=new he;const ct=new xt(et,h);ct.castShadow=!0,ct.receiveShadow=!0;const ut=new xt(x,this.armorMat);ut.castShadow=!0,ut.receiveShadow=!0,ct.add(ut),this.rightArm.add(ct),this.rightArm.position.set(-.3,.3,0),this.avatar.add(this.rightArm),this.leftLeg=new he;const ot=new xt(et,d);ot.castShadow=!0,ot.receiveShadow=!0;const dt=new xt(w,this.armorMat);dt.castShadow=!0,dt.receiveShadow=!0,ot.add(dt);const Et=new xt(E,this.armorMat);Et.castShadow=!0,Et.receiveShadow=!0,ot.add(Et),this.leftLeg.add(ot),this.leftLeg.position.set(.1,-.3,0),this.avatar.add(this.leftLeg),this.rightLeg=new he;const St=new xt(et,d);St.castShadow=!0,St.receiveShadow=!0;const Lt=new xt(w,this.armorMat);Lt.castShadow=!0,Lt.receiveShadow=!0,St.add(Lt);const $t=new xt(E,this.armorMat);if($t.castShadow=!0,$t.receiveShadow=!0,St.add($t),this.rightLeg.add(St),this.rightLeg.position.set(-.1,-.3,0),this.avatar.add(this.rightLeg),this.weapons3PV)for(const ne of Object.keys(this.weapons3PV)){const Yt=Number(ne),kt=this.weapons3PV[Yt];kt&&this.rightArm.add(kt)}}changeCharacter(t){this.characterType!==t&&(this.characterType=t,this.buildAvatar(),this.setArmor(this.armorType))}buildSword(t=13421772,e=7877903,n=15381256){const i=new he,s=new jt({color:t,roughness:.3,metalness:.8}),o=new jt({color:n,roughness:.5,metalness:.5}),r=new jt({color:e,roughness:.9}),l=new Bt(.06,.45,.02);l.translate(0,.225,0);const c=new xt(l,s);c.castShadow=!0,c.receiveShadow=!0,c.position.y=.02,i.add(c);const h=new Bt(.16,.04,.04),d=new xt(h,o);d.castShadow=!0,d.receiveShadow=!0,d.position.y=0,i.add(d);const u=new Bt(.04,.12,.04);u.translate(0,-.06,0);const m=new xt(u,r);return m.castShadow=!0,m.receiveShadow=!0,m.position.y=-.02,i.add(m),i}buildHammer(){const t=new he,e=new jt({color:5592405,roughness:.7,metalness:.5}),n=new jt({color:7877903,roughness:.9}),i=new Bt(.15,.15,.3);i.translate(0,.3,0);const s=new xt(i,e);s.castShadow=!0,s.receiveShadow=!0,t.add(s);const o=new Bt(.04,.4,.04);o.translate(0,.05,0);const r=new xt(o,n);return r.castShadow=!0,r.receiveShadow=!0,t.add(r),t}update(t,e,n,i){if(this.isDead)return;const s=we.getConfig();t.consumeJustPressed(s.keyRescue)&&this.rescue();const o=performance.now();if(this.hp<ht.PLAYER_MAX_HP&&o-this.lastDamageTime>5e3&&o-this.lastRegenTime>1e3&&(this.hp=Math.min(ht.PLAYER_MAX_HP,this.hp+1),this.lastRegenTime=o),t.consumeJustPressed("F5")&&(this.cameraMode==="1PV"?this.cameraMode="3PV_BACK":this.cameraMode==="3PV_BACK"?this.cameraMode="3PV_FRONT":this.cameraMode="1PV"),(t.consumeJustPressed("ShiftLeft")||t.consumeJustPressed("ShiftRight"))&&(this.isSprintingToggle=!this.isSprintingToggle),this.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.handleStepClimb(n),this.isInWater=!1,this.voxelWorld){const r=Math.floor(this.position.x),l=Math.floor(this.position.y-ht.PLAYER_HEIGHT/2+.1),c=Math.floor(this.position.z);this.voxelWorld.getBlock(r,l,c)===b.WATER&&(this.isInWater=!0)}if(!t.isLocked){this.body.velocity.x*=.8,this.body.velocity.z*=.8;return}for(const r of Object.keys(this.weapons1PV)){const l=Number(r),c=i===l;this.cameraMode==="1PV"?(this.weapons1PV[l].visible=c,this.weapons3PV[l].visible=!1):(this.weapons1PV[l].visible=!1,this.weapons3PV[l].visible=c)}this.handleRotation(t),this.checkGrounded(n),this.handleMovement(t,e),this.animateAvatar(e),this.syncCamera(),this.updateHUD()}handleRotation(t){const e=t.consumeMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch-=e.y*this.sensitivity;const n=85*Math.PI/180;this.pitch=Math.max(-n,Math.min(n,this.pitch))}checkGrounded(t){const e=ht.PLAYER_HEIGHT/2,n=this.position.y-e-.12,i=[{x:this.position.x,z:this.position.z},{x:this.position.x-.3,z:this.position.z-.3},{x:this.position.x+.3,z:this.position.z-.3},{x:this.position.x-.3,z:this.position.z+.3},{x:this.position.x+.3,z:this.position.z+.3}];let s=!1;for(const r of i){const l=Math.floor(r.x),c=Math.floor(n),h=Math.floor(r.z);if(t.getBlock(l,c,h)!==0){s=!0;break}}const o=s||Math.abs(this.body.velocity.y)<.2;if(o&&!this.isGrounded&&!this.isInWater&&this.lastVelocityY<ht.FALL_DAMAGE_MIN_SPEED){const r=Math.floor((ht.FALL_DAMAGE_MIN_SPEED-this.lastVelocityY)*ht.FALL_DAMAGE_FACTOR);r>0&&this.takeDamage(r)}this.isGrounded=o,this.lastVelocityY=this.body.velocity.y}handleStepClimb(t){const e=this.body.velocity.x,n=this.body.velocity.z,i=e*e+n*n;if(i<.01)return;const s=ht.PLAYER_HEIGHT/2,o=this.position.y-s,r=Math.sqrt(i),l=e/r,c=n/r,h=ht.PLAYER_RADIUS+.15,d=this.position.x+l*h,u=this.position.z+c*h,m=Math.floor(d),g=Math.floor(u),f=Math.floor(o+.15),p=t.getBlock(m,f,g),_=t.getBlock(m,f+1,g),v=t.getBlock(m,f+2,g);if(p!==0&&_===0&&v===0){let y=1;(p===b.BED_HEAD||p===b.BED_FOOT)&&(y=.5625);const x=f+y,w=x-o;w>.05&&w<=1.05&&(p===b.STAIRS?this.body.velocity.y=4:(this.body.position.y=x+s+.05,this.position.y=this.body.position.y,this.body.velocity.y<0&&(this.body.velocity.y=0)))}}setArmor(t){this.armorType=t,t==="none"?this.armorMat.visible=!1:(this.armorMat.visible=!0,t==="leather"?(this.armorMat.color.setHex(9132587),this.armorMat.roughness=.9,this.armorMat.metalness=0):t==="iron"?(this.armorMat.color.setHex(14211288),this.armorMat.roughness=.4,this.armorMat.metalness=.8):t==="diamond"&&(this.armorMat.color.setHex(2282478),this.armorMat.roughness=.3,this.armorMat.metalness=.6),this.armorMat.needsUpdate=!0)}takeDamage(t){if(this.isDead)return;this.lastDamageTime=performance.now(),t>0&&(this.armorType==="leather"?t=Math.max(1,Math.floor(t*.9)):this.armorType==="iron"?t=Math.max(1,Math.floor(t*.7)):this.armorType==="diamond"&&(t=Math.max(1,Math.floor(t*.4)))),this.hp=Math.max(0,this.hp-t),ke.playDamage();const e=document.getElementById("damage-overlay");e&&(e.style.opacity="0.5",setTimeout(()=>{e.style.opacity="0"},150)),this.hp<=0&&this.die()}die(){this.isDead=!0,this.body.velocity.set(0,0,0);const t=document.getElementById("death-screen");t&&(t.style.display="flex"),document.exitPointerLock()}respawn(){this.hp=ht.PLAYER_MAX_HP,this.isDead=!1,this.body.position.set(this.spawnPosition.x,this.spawnPosition.y+ht.PLAYER_HEIGHT/2,this.spawnPosition.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.pitch=0,this.yaw=0;const t=document.getElementById("death-screen");t&&(t.style.display="none");const e=document.getElementById("menu-overlay");e&&(e.style.display="flex")}rescue(){this.body.position.set(this.spawnPosition.x,this.spawnPosition.y+ht.PLAYER_HEIGHT/2,this.spawnPosition.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.position.set(this.spawnPosition.x,this.spawnPosition.y+ht.PLAYER_HEIGHT/2,this.spawnPosition.z),this.syncCamera(),this.updateHUD(),this.voxelWorld&&(this.voxelWorld.clearAndRebuild(this.position.x,this.position.z),this.voxelWorld.generateWorldAround(this.position.x,this.position.z));const t=document.getElementById("save-toast");t&&(t.textContent="初期位置に戻りました（スタック救出）",t.style.backgroundColor="rgba(59, 130, 246, 0.9)",t.style.opacity="1",t.style.transform="translateY(0)",setTimeout(()=>{t.style.opacity="0",t.style.transform="translateY(-20px)"},3e3)),console.log("Player was rescued and returned to spawn position.")}handleMovement(t,e){const n=$e.tempVec3.set(0,0,0);t.isActionActive("forward")&&(n.z-=1),t.isActionActive("backward")&&(n.z+=1),t.isActionActive("left")&&(n.x-=1),t.isActionActive("right")&&(n.x+=1),n.normalize();const i=$e.tempDirection.copy(n);i.applyAxisAngle($e.tempVec3_2.set(0,1,0),this.yaw);let s=this.isSprintingToggle?this.speed*1.5:this.speed;this.isInWater&&(s*=.6);const o=i.x*s,r=i.z*s;this.isGrounded?(this.body.velocity.x=o,this.body.velocity.z=r):(this.body.velocity.x+=(o-this.body.velocity.x)*3*e,this.body.velocity.z+=(r-this.body.velocity.z)*3*e),t.isActionActive("jump")&&(this.isInWater?this.body.velocity.y=this.jumpForce*.4:this.isGrounded&&(this.body.velocity.y=this.jumpForce,this.isGrounded=!1,ke.playJump())),this.isInWater&&this.body.velocity.y<-2&&(this.body.velocity.y*=.8)}animateAvatar(t){this.avatar.position.copy(this.position),this.avatar.rotation.y=this.yaw,this.head.rotation.x=this.pitch;const n=this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z>.1&&this.isGrounded;if(n){const o=performance.now()*.01,r=Math.sin(o)*.8;this.leftArm.rotation.x=r,this.swingTime<=0&&(this.rightArm.rotation.x=-r),this.leftLeg.rotation.x=-r,this.rightLeg.rotation.x=r}else{const o=10*t;this.leftArm.rotation.x+=(0-this.leftArm.rotation.x)*o,this.swingTime<=0&&(this.rightArm.rotation.x+=(0-this.rightArm.rotation.x)*o),this.leftLeg.rotation.x+=(0-this.leftLeg.rotation.x)*o,this.rightLeg.rotation.x+=(0-this.rightLeg.rotation.x)*o}let i=!1,s=0;if(!n&&this.isGrounded&&this.voxelWorld){const o=Math.floor(this.position.x),r=ht.PLAYER_HEIGHT/2,l=Math.floor(this.position.y-r-.1),c=Math.floor(this.position.z),h=this.voxelWorld.getBlock(o,l,c);if(h===b.BED_HEAD||h===b.BED_FOOT){i=!0;const d=h===b.BED_HEAD?b.BED_FOOT:b.BED_HEAD;this.voxelWorld.getBlock(o+1,l,c)===d?s=h===b.BED_HEAD?-Math.PI/2:Math.PI/2:this.voxelWorld.getBlock(o-1,l,c)===d?s=h===b.BED_HEAD?Math.PI/2:-Math.PI/2:this.voxelWorld.getBlock(o,l,c+1)===d?s=h===b.BED_HEAD?Math.PI:0:this.voxelWorld.getBlock(o,l,c-1)===d&&(s=h===b.BED_HEAD?0:Math.PI)}}if(i){const o=-Math.PI/2;this.avatar.rotation.x+=(o-this.avatar.rotation.x)*10*t,this.avatar.rotation.y=s,this.avatar.position.y-=.7}else this.avatar.rotation.x+=(0-this.avatar.rotation.x)*10*t;if(this.swingTime>0){this.swingTime-=t;const o=(.15-this.swingTime)/.15,r=Math.sin(o*Math.PI)*1.2;if(this.cameraMode==="1PV")for(const l of Object.keys(this.weapons1PV)){const c=Number(l);this.weapons1PV[c].rotation.x=-30*Math.PI/180+r,this.weapons1PV[c].rotation.y=45*Math.PI/180-r*.5,this.weapons1PV[c].position.z=-.38+r*.15}else this.rightArm.rotation.x=-Math.PI/3+r*1.5,this.rightArm.rotation.y=r*.5}else if(this.rightArm.rotation.y+=(0-this.rightArm.rotation.y)*10*t,this.cameraMode==="1PV")for(const o of Object.keys(this.weapons1PV)){const r=Number(o);this.weapons1PV[r].rotation.set(-30*Math.PI/180,45*Math.PI/180,15*Math.PI/180),this.weapons1PV[r].position.set(.24,-.24,-.38)}}syncCamera(){const t=$e.tempQuat.setFromAxisAngle($e.tempVec3.set(0,1,0),this.yaw),e=$e.tempQuat_2.setFromAxisAngle($e.tempVec3_2.set(1,0,0),this.pitch),n=$e.tempQuat.multiplyQuaternions(t,e);this.camera.quaternion.copy(n);const i=ht.PLAYER_HEIGHT/2-.2;if(this.cameraMode==="1PV")this.camera.position.set(this.position.x,this.position.y+i,this.position.z),this.avatar.visible=!1;else{this.avatar.visible=!0,this.head.visible=!0;const s=4,o=$e.tempVec3.set(0,i+.4,0),r=$e.tempVec3_2.set(0,0,-1).applyQuaternion(n),l=new H(this.position.x+o.x,this.position.y+o.y,this.position.z+o.z);let c;this.cameraMode==="3PV_BACK"?c=r.clone().negate():c=new H(r.x,-r.y,r.z).normalize();const h=this.calcSafeCameraDist(l,c,s);this.cameraMode==="3PV_BACK"?this.camera.position.copy(l).addScaledVector(c,h):(this.camera.position.copy(l).addScaledVector(c,h),this.camera.lookAt(this.position.x,this.position.y+i,this.position.z))}}calcSafeCameraDist(t,e,n){if(!this.voxelWorld)return n;const i=.2,s=.1,o=Math.ceil(n/s);for(let r=1;r<=o;r++){const l=Math.min(r*s,n),c=t.x+e.x*l,h=t.y+e.y*l,d=t.z+e.z*l,u=Math.floor(c),m=Math.floor(h),g=Math.floor(d);if(this.voxelWorld.getBlock(u,m,g)!==0)return Math.max(0,l-i)}return n}updateHUD(){const t=document.getElementById("pos-display");t&&(t.textContent=`${this.position.x.toFixed(1)}, ${this.position.y.toFixed(1)}, ${this.position.z.toFixed(1)}`)}swing(){this.swingTime<=0&&(this.swingTime=.15,ke.playSwing())}getYaw(){return this.yaw}setWorld(t){this.voxelWorld=t}getSaveData(){return{x:this.body.position.x,y:this.body.position.y,z:this.body.position.z,hp:this.hp,yaw:this.yaw,pitch:this.pitch,armorType:this.armorType}}loadSaveData(t){if(!t)return;this.hp=typeof t.hp=="number"?t.hp:ht.PLAYER_MAX_HP,this.isDead=this.hp<=0,t.armorType?this.setArmor(t.armorType):this.setArmor("none");const e=document.getElementById("death-screen");e&&(e.style.display=this.isDead?"flex":"none"),this.yaw=typeof t.yaw=="number"?t.yaw:0,this.pitch=typeof t.pitch=="number"?t.pitch:0,this.body.position.set(t.x,t.y,t.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.position.set(t.x,t.y,t.z),this.syncCamera(),this.updateHUD()}buildPickaxe(t,e=7877903){const n=new he,i=new jt({color:e,roughness:.9}),s=new jt({color:t,roughness:.5,metalness:.5}),o=new Bt(.03,.45,.03);o.translate(0,.1,0);const r=new xt(o,i);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const l=new Bt(.24,.04,.04);l.translate(0,.3,0);const c=new xt(l,s);return c.castShadow=!0,c.receiveShadow=!0,n.add(c),n}buildAxe(t,e=7877903){const n=new he,i=new jt({color:e,roughness:.9}),s=new jt({color:t,roughness:.5,metalness:.5}),o=new Bt(.03,.45,.03);o.translate(0,.1,0);const r=new xt(o,i);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const l=new Bt(.12,.12,.04);l.translate(.05,.26,0);const c=new xt(l,s);return c.castShadow=!0,c.receiveShadow=!0,n.add(c),n}buildShovel(t,e=7877903){const n=new he,i=new jt({color:e,roughness:.9}),s=new jt({color:t,roughness:.5,metalness:.5}),o=new Bt(.03,.45,.03);o.translate(0,.1,0);const r=new xt(o,i);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const l=new Bt(.08,.12,.02);l.translate(0,.31,0);const c=new xt(l,s);return c.castShadow=!0,c.receiveShadow=!0,n.add(c),n}}class kv{world;playerMaterial;defaultMaterial;blockBodies=new Map;blockShape;bedShape;constructor(){this.world=new Lv,this.world.gravity.set(0,ht.GRAVITY,0),this.world.broadphase=new Hi(this.world),this.world.solver.iterations=5,this.defaultMaterial=new Ji("default");const t=new Zi(this.defaultMaterial,this.defaultMaterial,{friction:.1,restitution:0});this.world.addContactMaterial(t),this.world.defaultContactMaterial=t,this.playerMaterial=new Ji("player");const e=new Zi(this.playerMaterial,this.defaultMaterial,{friction:0,restitution:0});this.world.addContactMaterial(e),this.blockShape=new Si(new S(.5,.5,.5)),this.bedShape=new Si(new S(.5,.5625/2,.5));const n=new mt({mass:0,shape:new d0});n.quaternion.setFromEuler(-Math.PI/2,0,0),n.position.set(0,-50,0),this.world.addBody(n)}updateBlockBodies(t,e){const i=Math.floor(t.x),s=Math.floor(t.y),o=Math.floor(t.z),r=new Set;for(let l=i-3;l<=i+3;l++)for(let c=s-3-1;c<=s+3;c++)for(let h=o-3;h<=o+3;h++){const d=e.getBlock(l,c,h),u=wn[d];if(u&&u.isSolid){const m=`${l},${c},${h}`;if(r.add(m),!this.blockBodies.has(m)){let g=this.blockShape,f=.5;(d===b.BED_HEAD||d===b.BED_FOOT)&&(g=this.bedShape,f=.5625/2);const p=new mt({mass:0,shape:g,position:new S(l+.5,c+f,h+.5),material:this.defaultMaterial});this.world.addBody(p),this.blockBodies.set(m,p)}}}for(const[l,c]of this.blockBodies.entries())r.has(l)||(this.world.removeBody(c),this.blockBodies.delete(l))}step(t){this.world.step(1/60,t,3);const e=document.getElementById("bodies-display");e&&(e.textContent=this.world.bodies.length.toString())}}class zv{overlay;modal;configBtn;keyButtons;invertClicksChk;enableShadowsChk;easyModeChk;saveBtn;defaultBtn;closeBtn;tempConfig;activeBindingKey=null;globalKeydownListener=null;constructor(){this.overlay=document.getElementById("menu-overlay"),this.modal=document.getElementById("config-modal"),this.configBtn=document.getElementById("config-btn"),this.keyButtons={forward:document.getElementById("key-forward-btn"),backward:document.getElementById("key-backward-btn"),left:document.getElementById("key-left-btn"),right:document.getElementById("key-right-btn"),jump:document.getElementById("key-jump-btn"),place:document.getElementById("key-place-btn"),break:document.getElementById("key-break-btn"),map:document.getElementById("key-map-btn"),inventory:document.getElementById("key-inventory-btn"),crafting:document.getElementById("key-crafting-btn"),manual:document.getElementById("key-manual-btn"),home:document.getElementById("key-home-btn"),rescue:document.getElementById("key-rescue-btn")},this.invertClicksChk=document.getElementById("invert-clicks-chk"),this.enableShadowsChk=document.getElementById("enable-shadows-chk"),this.easyModeChk=document.getElementById("easy-mode-chk"),this.saveBtn=document.getElementById("config-save-btn"),this.defaultBtn=document.getElementById("config-default-btn"),this.closeBtn=document.getElementById("config-close-btn"),this.tempConfig={...we.getConfig()},this.initEvents()}initEvents(){this.configBtn.addEventListener("click",()=>{this.openModal()}),this.keyButtons.forward.addEventListener("click",()=>this.startBinding("keyForward",this.keyButtons.forward)),this.keyButtons.backward.addEventListener("click",()=>this.startBinding("keyBackward",this.keyButtons.backward)),this.keyButtons.left.addEventListener("click",()=>this.startBinding("keyLeft",this.keyButtons.left)),this.keyButtons.right.addEventListener("click",()=>this.startBinding("keyRight",this.keyButtons.right)),this.keyButtons.jump.addEventListener("click",()=>this.startBinding("keyJump",this.keyButtons.jump)),this.keyButtons.place.addEventListener("click",()=>this.startBinding("keyPlaceBlock",this.keyButtons.place)),this.keyButtons.break.addEventListener("click",()=>this.startBinding("keyBreakBlock",this.keyButtons.break)),this.keyButtons.map.addEventListener("click",()=>this.startBinding("keyOpenMap",this.keyButtons.map)),this.keyButtons.inventory.addEventListener("click",()=>this.startBinding("keyOpenInventory",this.keyButtons.inventory)),this.keyButtons.crafting.addEventListener("click",()=>this.startBinding("keyOpenCrafting",this.keyButtons.crafting)),this.keyButtons.manual.addEventListener("click",()=>this.startBinding("keyOpenManual",this.keyButtons.manual)),this.keyButtons.home.addEventListener("click",()=>this.startBinding("keyRegisterHome",this.keyButtons.home)),this.keyButtons.rescue.addEventListener("click",()=>this.startBinding("keyRescue",this.keyButtons.rescue));const t=document.getElementById("rescue-now-btn");t&&t.addEventListener("click",()=>{this.closeModal(),window.dispatchEvent(new CustomEvent("request-rescue"))}),this.saveBtn.addEventListener("click",()=>{this.saveConfig()}),this.defaultBtn.addEventListener("click",()=>{this.loadDefaultConfig()}),this.closeBtn.addEventListener("click",()=>{this.closeModal()})}openModal(){this.tempConfig={...we.getConfig()},this.updateUI(),this.modal.style.display="flex"}closeModal(){this.stopBinding(),this.modal.style.display="none"}updateUI(){this.keyButtons.forward.textContent=this.formatKeyName(this.tempConfig.keyForward),this.keyButtons.backward.textContent=this.formatKeyName(this.tempConfig.keyBackward),this.keyButtons.left.textContent=this.formatKeyName(this.tempConfig.keyLeft),this.keyButtons.right.textContent=this.formatKeyName(this.tempConfig.keyRight),this.keyButtons.jump.textContent=this.formatKeyName(this.tempConfig.keyJump),this.keyButtons.place.textContent=this.formatKeyName(this.tempConfig.keyPlaceBlock),this.keyButtons.break.textContent=this.formatKeyName(this.tempConfig.keyBreakBlock),this.keyButtons.map.textContent=this.formatKeyName(this.tempConfig.keyOpenMap),this.keyButtons.inventory.textContent=this.formatKeyName(this.tempConfig.keyOpenInventory),this.keyButtons.crafting.textContent=this.formatKeyName(this.tempConfig.keyOpenCrafting),this.keyButtons.manual.textContent=this.formatKeyName(this.tempConfig.keyOpenManual),this.keyButtons.home.textContent=this.formatKeyName(this.tempConfig.keyRegisterHome),this.keyButtons.rescue.textContent=this.formatKeyName(this.tempConfig.keyRescue),this.invertClicksChk.checked=this.tempConfig.invertClicks,this.enableShadowsChk.checked=this.tempConfig.enableShadows,this.easyModeChk.checked=this.tempConfig.easyMode}formatKeyName(t){return t.startsWith("Key")?t.substring(3):t.startsWith("Digit")?t.substring(5):t==="Space"?"Space":t}startBinding(t,e){this.stopBinding(),this.activeBindingKey=t,e.classList.add("waiting"),e.textContent="キーを入力...",this.globalKeydownListener=n=>{n.preventDefault(),n.stopPropagation();const i=n.code;if(i==="Escape"){this.stopBinding(),this.updateUI();return}this.activeBindingKey&&(this.tempConfig[this.activeBindingKey]=i),this.stopBinding(),this.updateUI()},window.addEventListener("keydown",this.globalKeydownListener,!0)}stopBinding(){this.globalKeydownListener&&(window.removeEventListener("keydown",this.globalKeydownListener,!0),this.globalKeydownListener=null),Object.values(this.keyButtons).forEach(t=>{t.classList.remove("waiting")}),this.activeBindingKey=null}saveConfig(){this.tempConfig.invertClicks=this.invertClicksChk.checked,this.tempConfig.enableShadows=this.enableShadowsChk.checked,this.tempConfig.easyMode=this.easyModeChk.checked,we.save(this.tempConfig),this.closeModal(),this.updateInstructionsUI(),window.dispatchEvent(new CustomEvent("config-changed"))}loadDefaultConfig(){const t={keyForward:"KeyW",keyBackward:"KeyS",keyLeft:"KeyA",keyRight:"KeyD",keyJump:"Space",keyPlaceBlock:"KeyV",keyBreakBlock:"KeyB",keyOpenMap:"KeyM",keyOpenInventory:"KeyE",keyOpenCrafting:"KeyC",keyOpenManual:"KeyN",keyRegisterHome:"KeyH",invertClicks:!1,enableShadows:!0,easyMode:!0,characterType:"boy1",keyRescue:"KeyP"};this.tempConfig={...t},this.updateUI()}updateInstructionsUI(){const t=we.getConfig(),e=this.overlay.querySelectorAll(".key-badge");e.length>=5&&(e[0].textContent=this.formatKeyName(t.keyForward),e[1].textContent=this.formatKeyName(t.keyLeft),e[2].textContent=this.formatKeyName(t.keyBackward),e[3].textContent=this.formatKeyName(t.keyRight),e[4].textContent=this.formatKeyName(t.keyJump));const n=this.overlay.querySelector("#click-break-badge"),i=this.overlay.querySelector("#key-break-badge");n&&i&&(n.textContent=t.invertClicks?"右クリック":"左クリック",i.textContent=this.formatKeyName(t.keyBreakBlock));const s=this.overlay.querySelector("#click-place-badge"),o=this.overlay.querySelector("#key-place-badge");s&&o&&(s.textContent=t.invertClicks?"左クリック":"右クリック",o.textContent=this.formatKeyName(t.keyPlaceBlock));const r=this.overlay.querySelector("#key-map-badge");r&&(r.textContent=this.formatKeyName(t.keyOpenMap));const l=this.overlay.querySelector("#key-inventory-badge");l&&(l.textContent=this.formatKeyName(t.keyOpenInventory));const c=this.overlay.querySelector("#key-crafting-badge");c&&(c.textContent=this.formatKeyName(t.keyOpenCrafting));const h=this.overlay.querySelector("#key-manual-badge");h&&(h.textContent=this.formatKeyName(t.keyOpenManual));const d=this.overlay.querySelector("#key-home-badge");d&&(d.textContent=this.formatKeyName(t.keyRegisterHome));const u=this.overlay.querySelector("#key-rescue-badge");u&&(u.textContent=this.formatKeyName(t.keyRescue))}}const Fv=[{id:"plank",inputs:[{type:b.WOOD,count:1}],output:{type:b.PLANK,count:4}},{id:"stick",inputs:[{type:b.PLANK,count:2}],output:{type:b.STICK,count:4}},{id:"torch",inputs:[{type:b.STICK,count:1},{type:b.COAL,count:1}],output:{type:b.TORCH,count:4}},{id:"chest",inputs:[{type:b.PLANK,count:8}],output:{type:b.CHEST,count:1}},{id:"furnace",inputs:[{type:b.COBBLESTONE,count:8}],output:{type:b.FURNACE,count:1}},{id:"door",inputs:[{type:b.PLANK,count:6}],output:{type:b.DOOR_CLOSED,count:3}},{id:"bed",inputs:[{type:b.PLANK,count:3},{type:b.WOOD,count:3}],output:{type:b.BED_HEAD,count:1}},{id:"stairs",inputs:[{type:b.PLANK,count:6}],output:{type:b.STAIRS,count:4}},{id:"fence",inputs:[{type:b.PLANK,count:2},{type:b.STICK,count:4}],output:{type:b.FENCE,count:3}},{id:"smelt_stone",inputs:[{type:b.COBBLESTONE,count:1},{type:b.COAL,count:1}],output:{type:b.STONE,count:1}},{id:"smelt_glass",inputs:[{type:b.SAND,count:1},{type:b.COAL,count:1}],output:{type:b.GLASS,count:1}},{id:"smelt_iron",inputs:[{type:b.IRON_ORE,count:1},{type:b.COAL,count:1}],output:{type:b.IRON_INGOT,count:1}},{id:"smelt_gold",inputs:[{type:b.GOLD_ORE,count:1},{type:b.COAL,count:1}],output:{type:b.GOLD_INGOT,count:1}},{id:"wooden_pickaxe",inputs:[{type:b.STICK,count:2},{type:b.PLANK,count:3}],output:{type:b.WOODEN_PICKAXE,count:1}},{id:"stone_pickaxe",inputs:[{type:b.STICK,count:2},{type:b.COBBLESTONE,count:3}],output:{type:b.STONE_PICKAXE,count:1}},{id:"iron_pickaxe",inputs:[{type:b.STICK,count:2},{type:b.IRON_INGOT,count:3}],output:{type:b.IRON_PICKAXE,count:1}},{id:"diamond_pickaxe",inputs:[{type:b.STICK,count:2},{type:b.DIAMOND,count:3}],output:{type:b.DIAMOND_PICKAXE,count:1}},{id:"wooden_axe",inputs:[{type:b.STICK,count:2},{type:b.PLANK,count:3}],output:{type:b.WOODEN_AXE,count:1}},{id:"stone_axe",inputs:[{type:b.STICK,count:2},{type:b.COBBLESTONE,count:3}],output:{type:b.STONE_AXE,count:1}},{id:"iron_axe",inputs:[{type:b.STICK,count:2},{type:b.IRON_INGOT,count:3}],output:{type:b.IRON_AXE,count:1}},{id:"diamond_axe",inputs:[{type:b.STICK,count:2},{type:b.DIAMOND,count:3}],output:{type:b.DIAMOND_AXE,count:1}},{id:"wooden_shovel",inputs:[{type:b.STICK,count:2},{type:b.PLANK,count:1}],output:{type:b.WOODEN_SHOVEL,count:1}},{id:"stone_shovel",inputs:[{type:b.STICK,count:2},{type:b.COBBLESTONE,count:1}],output:{type:b.STONE_SHOVEL,count:1}},{id:"iron_shovel",inputs:[{type:b.STICK,count:2},{type:b.IRON_INGOT,count:1}],output:{type:b.IRON_SHOVEL,count:1}},{id:"diamond_shovel",inputs:[{type:b.STICK,count:2},{type:b.DIAMOND,count:1}],output:{type:b.DIAMOND_SHOVEL,count:1}},{id:"stone_sword",inputs:[{type:b.STICK,count:1},{type:b.COBBLESTONE,count:2}],output:{type:b.SWORD,count:1}},{id:"diamond_sword",inputs:[{type:b.STICK,count:1},{type:b.DIAMOND,count:2}],output:{type:b.DIAMOND_SWORD,count:1}},{id:"hammer",inputs:[{type:b.STICK,count:2},{type:b.IRON_INGOT,count:3}],output:{type:b.HAMMER,count:1}},{id:"iron_armor_set",inputs:[{type:b.IRON_INGOT,count:24}],output:{type:b.IRON_ARMOR_SET,count:1}},{id:"diamond_armor_set",inputs:[{type:b.DIAMOND,count:24}],output:{type:b.DIAMOND_ARMOR_SET,count:1}}];class Uv{time=0;timeScale=.01;sunLight;ambientLight;scene;skyColor=new qt;sunColor=new qt;ambientColor=new qt;constructor(t){this.scene=t,this.scene.background=this.skyColor;const e=we.getConfig();this.sunLight=new tg(16777215,1.2),this.sunLight.castShadow=e.enableShadows,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=80;const n=30;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.ambientLight=new eg(16777215,.4),this.scene.add(this.ambientLight)}update(t,e){const n=this.time*Math.PI*2,i=Math.sin(n);let s=1;i>-.1?s=.35:s=2.5,this.time=(this.time+this.timeScale*s*t)%1;const o=this.time*Math.PI*2,r=Math.sin(o),l=Math.cos(o);this.sunLight.position.set(e.x+l*40,e.y+r*40,e.z+l*20),this.sunLight.target.position.copy(e),this.sunLight.target.updateMatrixWorld();const c=Math.max(0,Math.min(1,r*2+.5)),h=nn.lerp(.02,.45,c),d=nn.lerp(.03,.65,c),u=nn.lerp(.08,.95,c);this.skyColor.setRGB(h,d,u);const m=nn.lerp(0,1.2,c);this.sunLight.intensity=m;const g=nn.lerp(.1,1,c),f=nn.lerp(.1,.95,c),p=nn.lerp(.2,.85,c);this.sunColor.setRGB(g,f,p),this.sunLight.color.copy(this.sunColor);const _=nn.lerp(.22,.45,c);this.ambientLight.intensity=_;const v=nn.lerp(.15,1,c),y=nn.lerp(.18,1,c),x=nn.lerp(.35,1,c);this.ambientColor.setRGB(v,y,x),this.ambientLight.color.copy(this.ambientColor)}setShadowsEnabled(t){this.sunLight.castShadow=t}isNight(){const t=this.time*Math.PI*2;return Math.sin(t)<-.1}}const Gv={[b.GROUND]:4906624,[b.DIRT]:8736014,[b.STONE]:10265519,[b.WOOD]:7877903,[b.LEAVES]:2278750,[b.PLANK]:16096779,[b.BRICK]:15680580,[b.SAND]:16707722,[b.COAL_ORE]:3621201,[b.TORCH]:16347926,[b.GLASS]:14742270,[b.DOOR_CLOSED]:11817737,[b.SWORD]:13421772};class pi{blockType;mesh;body;scene;physicsWorld;age=0;isAttracted=!1;static sharedGeometry=new Bt(.2,.2,.2);static materialPool=new Map;static tempVec3=new H;static tempVec3_2=new H;constructor(t,e,n,i,s){this.blockType=t,this.scene=n,this.physicsWorld=i;let o=pi.materialPool.get(t);if(!o){const l=Gv[t]||16777215;o=new jt({color:l,roughness:.8,metalness:.1}),pi.materialPool.set(t,o)}this.mesh=new xt(pi.sharedGeometry,o),this.mesh.position.copy(e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh);const r=new Si(new S(.1,.1,.1));if(this.body=new mt({mass:1,shape:r,position:new S(e.x,e.y,e.z)}),s){const l=s.clone().sub(e),c=l.length();l.normalize(),l.y+=.5,l.normalize();const h=Math.min(Math.max(c*2,4),15);this.body.velocity.set(l.x*h,l.y*h,l.z*h),this.body.linearDamping=.1}else this.body.velocity.set((Math.random()-.5)*4,Math.random()*4+2,(Math.random()-.5)*4);this.physicsWorld.addBody(this.body)}update(t,e){if(this.age+=t,this.age>ht.ITEM_DESPAWN_TIME)return this.destroy(),!0;const n=pi.tempVec3.set(this.body.position.x,this.body.position.y,this.body.position.z),i=n.distanceTo(e);if(i<ht.ITEM_PICKUP_RADIUS){this.isAttracted=!0,this.body.world&&this.physicsWorld.removeBody(this.body);const s=pi.tempVec3_2.copy(e).sub(n).normalize();if(n.add(s.multiplyScalar(22*t)),this.mesh.position.copy(n),i<.5)return this.destroy(),!0}else this.isAttracted?(this.isAttracted=!1,this.body.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z),this.body.velocity.set(0,0,0),this.physicsWorld.addBody(this.body)):(this.mesh.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.mesh.rotation.x+=t*2,this.mesh.rotation.y+=t*1.5);return!1}destroy(){this.mesh&&this.scene.remove(this.mesh),this.body.world&&this.physicsWorld.removeBody(this.body)}}class Ae{mesh;body;hp=4;scene;physicsWorld;head;leftLeg;rightLeg;speed=3;jumpForce=6;attackCooldown=0;damageFlashTime=0;static sharedHeadGeo=new Bt(.4,.4,.4);static sharedBodyGeo=new Bt(.4,.6,.2);static sharedLimbGeo=new Bt(.2,.6,.2);static zombieGreenMat=new jt({color:5614165,roughness:.9});static zombieBlueMat=new jt({color:3362408,roughness:.9});static zombiePurpleMat=new jt({color:4729947,roughness:.9});static damageMat=new jt({color:16724787,roughness:.5});static tempVec3=new H;static tempDirection=new H;constructor(t,e,n){this.scene=e,this.physicsWorld=n;const i=.35,s=.9,o=new Si(new S(i,s,i));this.body=new mt({mass:50,shape:o,position:new S(t.x,t.y+s,t.z),fixedRotation:!0,linearDamping:.1}),this.physicsWorld.addBody(this.body),this.mesh=new he,this.buildAvatar(),this.scene.add(this.mesh)}buildAvatar(){const t=Ae.zombieGreenMat,e=Ae.zombieBlueMat,n=Ae.zombieGreenMat,i=Ae.zombiePurpleMat;this.head=new xt(Ae.sharedHeadGeo,t),this.head.position.y=.5,this.head.castShadow=!0,this.head.receiveShadow=!0,this.mesh.add(this.head);const s=new xt(Ae.sharedBodyGeo,e);s.position.y=0,s.castShadow=!0,s.receiveShadow=!0,this.mesh.add(s);const o=Ae.sharedLimbGeo.clone();o.translate(0,-.3,0);const r=new he,l=new xt(o,n);l.castShadow=!0,l.receiveShadow=!0,r.add(l),r.position.set(.3,.3,0),r.rotation.x=-Math.PI/2,this.mesh.add(r);const c=new he,h=new xt(o,n);h.castShadow=!0,h.receiveShadow=!0,c.add(h),c.position.set(-.3,.3,0),c.rotation.x=-Math.PI/2,this.mesh.add(c),this.leftLeg=new he;const d=new xt(o,i);d.castShadow=!0,d.receiveShadow=!0,this.leftLeg.add(d),this.leftLeg.position.set(.1,-.3,0),this.mesh.add(this.leftLeg),this.rightLeg=new he;const u=new xt(o,i);u.castShadow=!0,u.receiveShadow=!0,this.rightLeg.add(u),this.rightLeg.position.set(-.1,-.3,0),this.mesh.add(this.rightLeg)}update(t,e){const n=e.position,s=Ae.tempVec3.set(this.body.position.x,this.body.position.y,this.body.position.z).distanceTo(n);if(s>ht.MOB_DESPAWN_RADIUS)return this.destroy(),!0;if(this.damageFlashTime>0&&(this.damageFlashTime-=t,this.damageFlashTime<=0&&this.setMaterials(!1)),e.hp>0?this.runAI(t,n,s,e):(this.body.velocity.x*=.8,this.body.velocity.z*=.8),this.mesh.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z>.1){const r=performance.now()*.01,l=Math.sin(r)*.8;this.leftLeg.rotation.x=-l,this.rightLeg.rotation.x=l}else this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0;return!1}runAI(t,e,n,i){const s=Ae.tempDirection.set(e.x-this.body.position.x,0,e.z-this.body.position.z);s.normalize();const o=Math.atan2(s.x,s.z);if(this.mesh.rotation.y=o,n<ht.MOB_SPAWN_RADIUS){this.body.velocity.x=s.x*this.speed,this.body.velocity.z=s.z*this.speed;const r=this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z,l=this.speed*this.speed,c=r<l*.25,h=Math.abs(this.body.velocity.y)<.02;c&&h&&(this.body.velocity.y=this.jumpForce)}else this.body.velocity.x*=.8,this.body.velocity.z*=.8;this.attackCooldown>0&&(this.attackCooldown-=t),n<1.3&&this.attackCooldown<=0&&(i.takeDamage(2),this.attackCooldown=1.2)}takeDamage(t,e){return this.hp-=t,this.damageFlashTime=.2,this.setMaterials(!0),ke.playHit(),this.body.velocity.y=4,this.body.velocity.x=e.x*6,this.body.velocity.z=e.z*6,this.hp<=0?(this.destroy(),!0):!1}setMaterials(t){this.mesh.traverse(e=>{e instanceof xt&&(t?e.material=Ae.damageMat:e===this.head||e.parent===this.head?e.material=Ae.zombieGreenMat:e.name==="hair"?e.material=new jt({color:5913896,roughness:.9}):e.position.y===0?e.material=Ae.zombieBlueMat:e.position.y===-.3||e.parent?.position.y===-.3?e.material=Ae.zombiePurpleMat:e.material=Ae.zombieGreenMat)})}destroy(){this.mesh&&this.scene.remove(this.mesh),this.body.world&&this.physicsWorld.removeBody(this.body)}}class Vv{player;world;accountId=null;worldId="shared_world_1";autoSaveInterval=null;isSaving=!1;onSaveCustomData;onLoadCustomData;constructor(t,e){this.player=t,this.world=e}setAccountId(t){this.accountId=t}getAccountId(){return this.accountId}setWorldId(t){this.worldId=t||"shared_world_1"}async loadData(){if(!this.accountId)return console.error("Account ID is not set."),!1;try{this.showToast("データをロード中...");const e=await(await fetch(`${ht.GAS_WEB_APP_URL}?accountId=${encodeURIComponent(this.accountId)}&worldId=${encodeURIComponent(this.worldId)}`)).json();if(e.worldData&&this.world.setModifiedBlocksData(e.worldData),e.playerData)this.player.loadSaveData(e.playerData),this.onLoadCustomData&&e.playerData.customData&&this.onLoadCustomData(e.playerData.customData);else{const i=Math.floor(Math.random()*300*2)-300+100,s=Math.floor(Math.random()*300*2)-300+100;this.player.position.set(i,30,s),this.player.body.position.set(i,30,s),this.player.body.velocity.set(0,0,0),this.player.spawnPosition.set(i,30,s)}return this.world.clearAndRebuild(this.player.position.x,this.player.position.z),this.showToast("ロードが完了しました"),!0}catch(t){return console.error("Failed to load data:",t),this.showToast("ロードに失敗しました",!0),!1}}async saveData(){if(!this.accountId)return console.error("Account ID is not set."),!1;if(this.isSaving)return!1;this.isSaving=!0;try{this.showToast("セーブ中...");const t=this.world.getModifiedBlocksData(),e=this.player.getSaveData();this.onSaveCustomData&&(e.customData=this.onSaveCustomData());const n={accountId:this.accountId,worldId:this.worldId,worldData:t,playerData:e},s=await(await fetch(ht.GAS_WEB_APP_URL,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(n)})).json();if(this.isSaving=!1,s.success){if(s.worldData){const o=this.world.mergeModifiedBlocksData(s.worldData);if(o.size>0)for(const r of o){const l=r.split(","),c=parseInt(l[0],10),h=parseInt(l[1],10),d=parseInt(l[2],10);this.world.updateChunkMesh(c,h,d)}}return this.showToast("セーブしました"),!0}else throw new Error(s.error)}catch(t){return console.error("Failed to save data:",t),this.showToast("セーブに失敗しました",!0),this.isSaving=!1,!1}}async syncWorldData(){try{this.showToast("ワールドデータを同期中...");const t=this.accountId||"anonymous",n=await(await fetch(`${ht.GAS_WEB_APP_URL}?accountId=${encodeURIComponent(t)}&worldId=${encodeURIComponent(this.worldId)}`)).json();if(n.worldData){const i=this.world.mergeModifiedBlocksData(n.worldData);if(i.size>0){for(const s of i){const o=s.split(","),r=parseInt(o[0],10),l=parseInt(o[1],10),c=parseInt(o[2],10);this.world.updateChunkMesh(r,l,c)}this.showToast("同期が完了しました（建築物が更新されました）")}else this.showToast("すでに最新の状態です");return!0}else return this.showToast("同期データがありません"),!1}catch(t){return console.error("Failed to sync world data:",t),this.showToast("同期に失敗しました",!0),!1}}startAutoSave(t=3){this.stopAutoSave(),this.autoSaveInterval=window.setInterval(()=>{this.accountId&&this.saveData()},t*60*1e3)}stopAutoSave(){this.autoSaveInterval!==null&&(window.clearInterval(this.autoSaveInterval),this.autoSaveInterval=null)}showToast(t,e=!1){const n=document.getElementById("save-toast");n&&(n.textContent=t,n.style.backgroundColor=e?"rgba(220, 53, 69, 0.9)":"rgba(40, 167, 69, 0.9)",n.style.opacity="1",n.style.transform="translateY(0)",setTimeout(()=>{n.style.opacity="0",n.style.transform="translateY(-20px)"},3e3))}}const Hv={[b.AIR]:"#000000",[b.GROUND]:"#4ade80",[b.DIRT]:"#854d0e",[b.STONE]:"#9ca3af",[b.WOOD]:"#78350f",[b.LEAVES]:"#22c55e",[b.PLANK]:"#f59e0b",[b.BRICK]:"#ef4444",[b.SAND]:"#fef08a",[b.COAL_ORE]:"#374151",[b.IRON_ORE]:"#d4d4d8",[b.GOLD_ORE]:"#fde047",[b.DIAMOND_ORE]:"#67e8f9",[b.WATER]:"#3b82f6",[b.BEDROCK]:"#111827",[b.COBBLESTONE]:"#6b7280"};class Wv{homePosition=null;compassBar;homeMarker;homeDistance;mapCanvas;mapPlayerIcon;mapHomeIcon;mapRadius=64;constructor(){this.compassBar=document.getElementById("compass-bar"),this.homeMarker=document.getElementById("home-marker"),this.homeDistance=document.getElementById("home-distance"),this.mapCanvas=document.getElementById("world-map-canvas"),this.mapPlayerIcon=document.getElementById("map-player-icon"),this.mapHomeIcon=document.getElementById("map-home-icon"),this.initCompassUI()}initCompassUI(){if(!this.compassBar)return;[{label:"N (きた)",deg:0},{label:"NE (ほくとう)",deg:45,minor:!0},{label:"E (ひがし)",deg:90},{label:"SE (なんとう)",deg:135,minor:!0},{label:"S (みなみ)",deg:180},{label:"SW (なんせい)",deg:225,minor:!0},{label:"W (にし)",deg:270},{label:"NW (ほくせい)",deg:315,minor:!0},{label:"N (きた)",deg:360},{label:"NE (ほくとう)",deg:405,minor:!0},{label:"E (ひがし)",deg:450}].forEach(e=>{const n=document.createElement("div");n.className=`compass-tick ${e.minor?"minor":""}`;const i=e.deg/360*800;n.style.left=`${i}px`,n.innerHTML=`<span>${e.label}</span>`,this.compassBar.appendChild(n)})}setHome(t){this.homePosition=t.clone(),this.homeMarker&&(this.homeMarker.style.display="block"),this.homeDistance&&(this.homeDistance.style.display="block"),this.mapHomeIcon&&(this.mapHomeIcon.style.display="block")}updateCompass(t){if(!this.compassBar)return;const e=new H(0,0,-1).applyQuaternion(t.camera.quaternion);let i=Math.atan2(e.x,-e.z)*(180/Math.PI);i<0&&(i+=360);const s=i/360*800;if(this.compassBar.style.transform=`translateX(${-s}px)`,this.homePosition&&this.homeMarker&&this.homeDistance){const o=this.homePosition.clone().sub(t.position),r=o.length();let c=Math.atan2(o.x,-o.z)*(180/Math.PI);c<0&&(c+=360);let h=c-i;h>180&&(h-=360),h<-180&&(h+=360);const d=90,u=85,m=h<-d||h>d,f=Math.max(-u,Math.min(u,h))/360*800;this.homeMarker.style.left=`calc(50% + ${f}px)`,m?(h<0?this.homeMarker.textContent="◀🏠":this.homeMarker.textContent="🏠▶",this.homeMarker.style.opacity="0.7"):(this.homeMarker.textContent="🏠",this.homeMarker.style.opacity="1"),this.homeDistance.textContent=`${Math.floor(r)}m`,this.homeDistance.style.display="block"}}getDirectionJapanese(t,e){let i=Math.atan2(e,t)*(180/Math.PI);return i<0&&(i+=360),i>=337.5||i<22.5?{name:"ひがし",arrow:"➡"}:i>=22.5&&i<67.5?{name:"なんとう",arrow:"↘"}:i>=67.5&&i<112.5?{name:"みなみ",arrow:"⬇"}:i>=112.5&&i<157.5?{name:"なんせい",arrow:"↙"}:i>=157.5&&i<202.5?{name:"にし",arrow:"⬅"}:i>=202.5&&i<247.5?{name:"ほくせい",arrow:"↖"}:i>=247.5&&i<292.5?{name:"きた",arrow:"⬆"}:{name:"ほくとう",arrow:"↗"}}renderMap(t,e){if(!this.mapCanvas)return;const n=this.mapCanvas.getContext("2d");if(!n)return;const i=this.mapRadius*2;this.mapCanvas.width=i,this.mapCanvas.height=i,n.fillStyle="#000000",n.fillRect(0,0,i,i);const s=Math.floor(e.x),o=Math.floor(e.z),r=Array.from(t.getLoadedChunks()).sort((_,v)=>_.y-v.y);for(const _ of r){const v=_.x*ht.CHUNK_SIZE,y=_.z*ht.CHUNK_SIZE;for(let x=0;x<ht.CHUNK_SIZE;x++)for(let w=0;w<ht.CHUNK_SIZE;w++){const E=v+x,T=y+w,M=E-s+this.mapRadius,A=T-o+this.mapRadius;if(M>=0&&M<i&&A>=0&&A<i){let I=b.AIR;for(let F=ht.CHUNK_SIZE-1;F>=0;F--){const U=_.getBlock(x,F,w);if(U!==b.AIR&&U!==b.WATER){I=U;break}else U===b.WATER&&I===b.AIR&&(I=U)}if(I!==b.AIR){const F=Hv[I]||"#555555";n.fillStyle=F,n.fillRect(M,A,1,1)}}}}if(this.mapPlayerIcon&&(this.mapPlayerIcon.style.left="50%",this.mapPlayerIcon.style.top="50%"),this.homePosition&&this.mapHomeIcon){const _=this.homePosition.x-s+this.mapRadius,v=this.homePosition.z-o+this.mapRadius,y=_/i*100,x=v/i*100,w=y<0||y>100||x<0||x>100;if(this.mapHomeIcon.style.left=`${Math.min(Math.max(y,2),98)}%`,this.mapHomeIcon.style.top=`${Math.min(Math.max(x,2),98)}%`,w){const E=this.homePosition.x-s,T=this.homePosition.z-o,M=this.getDirectionJapanese(E,T);this.mapHomeIcon.textContent=M.arrow}else this.mapHomeIcon.textContent="🏠"}const l=[],c=ht.CHUNK_SIZE,h=t.getModifiedBlocksData();if(h&&h.blocks)for(const[_,v]of Object.entries(h.blocks)){const[y,x,w]=_.split(",").map(Number);for(const[E,T]of Object.entries(v))if(T!==b.AIR){const M=parseInt(E,10),A=M%c,I=Math.floor(M%(c*c)/c),F=Math.floor(M/(c*c)),U=y*c+A,D=x*c+I,P=w*c+F;l.push(new H(U,D,P))}}const d=[],u=5,m=new Set;for(let _=0;_<l.length;_++){if(m.has(_))continue;const v=[l[_]];m.add(_);for(let y=_+1;y<l.length;y++)if(!m.has(y)){for(const x of v)if(x.distanceTo(l[y])<15){v.push(l[y]),m.add(y);break}}if(v.length>=u){const y=new H;for(const x of v)y.add(x);y.divideScalar(v.length),d.push(y)}}document.querySelectorAll(".map-building-icon").forEach(_=>_.remove());const f=document.getElementById("world-map-container");f&&d.forEach(_=>{const v=document.createElement("div");v.className="map-icon map-building-icon",v.style.color="#ffa500",v.style.textShadow="0 0 5px black";const y=_.x-s+this.mapRadius,x=_.z-o+this.mapRadius,w=y/i*100,E=x/i*100,T=w<0||w>100||E<0||E>100;if(v.style.left=`${Math.min(Math.max(w,2),98)}%`,v.style.top=`${Math.min(Math.max(E,2),98)}%`,T){const M=_.x-s,A=_.z-o,I=this.getDirectionJapanese(M,A);v.textContent=I.arrow}else v.textContent="🧱";f.appendChild(v)});const p=document.getElementById("world-map-info");if(p){const _=[];if(this.homePosition){const v=this.homePosition.x-s,y=this.homePosition.z-o,x=Math.floor(new H(v,0,y).length()),w=this.getDirectionJapanese(v,y);_.push(`🏠 登録した拠点: <b>${w.name}</b> (${x}m) ${w.arrow}`)}else _.push("🏠 登録した拠点: 未登録");d.length>0?d.forEach((v,y)=>{const x=v.x-s,w=v.z-o,E=Math.floor(new H(x,0,w).length()),T=this.getDirectionJapanese(x,w);_.push(`🧱 建てた建物 ${y+1}: <b>${T.name}</b> (${E}m) ${T.arrow}`)}):_.push("🧱 建てた建物: まだありません"),p.innerHTML=_.join("<br>")}}}const qe=new sg("canvas-container");let Fi=!1,Xn=0,Il=new H(-999,-999,-999),io=0,Pl=!1;const yo=document.createElement("canvas");yo.width=128;yo.height=128;const yn=yo.getContext("2d"),Cs=new gc(yo);Cs.magFilter=ue;Cs.minFilter=ue;const qv=new Br({map:Cs,transparent:!0,opacity:.8,depthTest:!0,depthWrite:!1}),Xv=new Bt(1.01,1.01,1.01),Kn=new xt(Xv,qv);Kn.visible=!1;qe.scene.add(Kn);function Ol(a){if(yn.clearRect(0,0,128,128),a<=0){Cs.needsUpdate=!0;return}yn.strokeStyle="rgba(0, 0, 0, 0.7)",yn.lineWidth=2,yn.lineCap="round",yn.lineJoin="round";const t=Math.floor(a*40);let e=12345;const n=()=>(e=(e*9301+49297)%233280,e/233280);yn.beginPath();for(let i=0;i<t;i++){const s=n()*128,o=n()*128,r=s+(n()-.5)*40,l=o+(n()-.5)*40;yn.moveTo(s,o),yn.lineTo(r,l),n()>.5&&yn.lineTo(r+(n()-.5)*20,l+(n()-.5)*20)}yn.stroke(),Cs.needsUpdate=!0}const Ms=new kv,Pt=new cg(document.body),Tt=new $e(qe.camera,new H(8,5,8),Ms,qe.scene),Er=new Uv(qe.scene),Bn=[],Ze=[],Cr=new Wv,Me={[b.AIR]:0,[b.GROUND]:64,[b.DIRT]:64,[b.STONE]:64,[b.WOOD]:64,[b.LEAVES]:64,[b.PLANK]:64,[b.BRICK]:64,[b.SAND]:64,[b.COAL_ORE]:64,[b.TORCH]:64,[b.GLASS]:64,[b.DOOR_CLOSED]:64,[b.DOOR_OPEN]:0,[b.SWORD]:1,[b.STAIRS]:64,[b.FENCE]:64,[b.BED_HEAD]:64,[b.BED_FOOT]:0,[b.FURNACE]:64,[b.CHEST]:64,[b.WATER]:64,[b.DIAMOND_SWORD]:1,[b.HAMMER]:1,[b.BEDROCK]:0,[b.IRON_ORE]:0,[b.GOLD_ORE]:0,[b.DIAMOND_ORE]:0,[b.STICK]:0,[b.IRON_INGOT]:0,[b.GOLD_INGOT]:0,[b.DIAMOND]:0,[b.COBBLESTONE]:0,[b.COAL]:0,[b.APPLE]:0,[b.WOODEN_PICKAXE]:0,[b.STONE_PICKAXE]:0,[b.IRON_PICKAXE]:0,[b.DIAMOND_PICKAXE]:0,[b.WOODEN_AXE]:0,[b.STONE_AXE]:0,[b.IRON_AXE]:0,[b.DIAMOND_AXE]:0,[b.WOODEN_SHOVEL]:0,[b.STONE_SHOVEL]:0,[b.IRON_SHOVEL]:0,[b.DIAMOND_SHOVEL]:0,[b.LEATHER_ARMOR_SET]:0,[b.IRON_ARMOR_SET]:0,[b.DIAMOND_ARMOR_SET]:0},Kv=new zv;Kv.updateInstructionsUI();window.addEventListener("request-rescue",()=>{Tt.rescue(),Pt.requestLock()});const Nl=document.getElementById("respawn-btn");Nl&&Nl.addEventListener("click",()=>{Tt.respawn(),Pt.requestLock(),ke.init(),uo||(uo=!0,requestAnimationFrame(qr))});let ee=b.GROUND,Jn=0;const tn=[[b.GROUND,b.DIRT,b.STONE,b.WOOD,b.LEAVES,b.PLANK,b.BRICK,b.SAND,b.TORCH],[b.GLASS,b.DOOR_CLOSED,b.COAL_ORE,b.DIAMOND_SWORD,b.HAMMER,b.STAIRS,b.FENCE,b.BED_HEAD,b.FURNACE]];let en=0,Un=tn[en];const Ac=document.querySelectorAll(".hotbar-slot"),Bl=document.getElementById("hotbar-label");function As(a){switch(a){case b.GROUND:return"slot-grass";case b.DIRT:return"slot-dirt";case b.STONE:return"slot-stone";case b.WOOD:return"slot-wood";case b.LEAVES:return"slot-leaves";case b.PLANK:return"slot-plank";case b.BRICK:return"slot-brick";case b.SAND:return"slot-sand";case b.TORCH:return"slot-torch";case b.GLASS:return"slot-glass";case b.DOOR_CLOSED:return"slot-door";case b.COAL_ORE:return"slot-coal";case b.STAIRS:return"slot-stairs";case b.FENCE:return"slot-fence";case b.BED_HEAD:return"slot-bed";case b.FURNACE:return"slot-furnace";case b.CHEST:return"slot-chest";case b.WATER:return"slot-water";case b.SWORD:return"slot-sword";case b.DIAMOND_SWORD:return"slot-diamond-sword";case b.HAMMER:return"slot-hammer";default:return""}}function un(){Ac.forEach((t,e)=>{const n=Un[e];t.setAttribute("data-block",n.toString());const i=t.querySelector(".slot-icon");if(i){i.className="slot-icon";const o=As(n);o&&i.classList.add(o)}const s=document.getElementById(`count-${e}`);s&&(s.textContent=(Me[n]||0).toString())});const a=document.getElementById("hotbar-page-indicator");a&&(a.textContent=(en+1).toString()),co(Jn)}un();function co(a){a<0||a>=Un.length||(Jn=a,ee=Un[a],Ac.forEach((t,e)=>{e===a?t.classList.add("active"):t.classList.remove("active")}),Bl&&(Bl.textContent=wn[ee].name))}const It=new lg(qe.scene);Tt.setWorld(It);const xe=new Vv(Tt,It);xe.onSaveCustomData=()=>({inventory:{blocks:Me,hotbarPages:tn,activePage:en,activeSlotIndex:Jn}});xe.onLoadCustomData=a=>{if(a&&a.inventory){const t=a.inventory;t.blocks&&Object.assign(Me,t.blocks),t.hotbarPages&&(tn[0]=[...t.hotbarPages[0]],tn[1]=[...t.hotbarPages[1]]),typeof t.activePage=="number"&&(en=t.activePage,Un=tn[en]),typeof t.activeSlotIndex=="number"&&(Jn=t.activeSlotIndex),un()}};const Yv=s_();Yv?It.clearAndRebuild(Tt.position.x,Tt.position.z):It.generateWorldAround(Tt.position.x,Tt.position.z);const ze=document.getElementById("account-id-input"),dn=document.getElementById("world-id-input");function xo(a){const t=document.getElementById("account-id-list");if(!t)return;let e=[];try{const i=localStorage.getItem("maikurafu_account_ids");i&&(e=JSON.parse(i))}catch{}a&&!e.includes(a)&&(e.push(a),localStorage.setItem("maikurafu_account_ids",JSON.stringify(e)));const n=i=>{t.innerHTML="",i.forEach(s=>{const o=document.createElement("option");o.value=s,t.appendChild(o)})};n(e);{const i=dn&&dn.value.trim()||"shared_world_1";fetch(`${ht.GAS_WEB_APP_URL}?action=listAccounts&worldId=${encodeURIComponent(i)}`).then(s=>s.json()).then(s=>{if(s.accounts&&Array.isArray(s.accounts)){let o=!1;s.accounts.forEach(r=>{e.includes(r)||(e.push(r),o=!0)}),o&&(localStorage.setItem("maikurafu_account_ids",JSON.stringify(e)),n(e))}}).catch(s=>console.warn("Failed to fetch accounts from server:",s))}}xo();const bs=new ng,Ar=6;function jv(){const a=document.getElementById("hp-container");if(a){const t=ht.PLAYER_MAX_HP,e=Tt.hp;let n="";for(let i=1;i<=t;i++)n+=i<=e?"❤":"🖤";a.textContent=n}}function ho(a,t,e){if(Bn.length>=ht.MAX_DROPPED_ITEMS){const i=Bn.shift();i&&i.destroy()}const n=new pi(a,t,qe.scene,Ms.world,e);Bn.push(n)}const ps=new H,so=new H;let lr=0,cr=0,kl=0;function qr(a){requestAnimationFrame(qr);const t=Math.min((a-kl)/1e3,.1);if(kl=a,io>0&&(io-=t),Ms.updateBlockBodies(Tt.position,It),Ms.step(t),Tt.update(Pt,t,It,ee),Cr.updateCompass({position:Tt.position,camera:qe.camera}),Er.update(t,Tt.position),Pt.consumeJustPressed("Tab")&&(en=1-en,Un=tn[en],un()),Pt.consumeJustPressed(we.getConfig().keyRegisterHome)&&Pt.isLocked){Cr.setHome(Tt.position);const s=document.createElement("div");s.style.position="absolute",s.style.top="100px",s.style.left="50%",s.style.transform="translateX(-50%)",s.style.color="#32cd32",s.style.fontSize="1.5rem",s.style.fontWeight="bold",s.style.textShadow="0 2px 4px rgba(0,0,0,0.8)",s.style.zIndex="50",s.textContent="🏠 ここを拠点に設定しました",document.body.appendChild(s),setTimeout(()=>s.remove(),3e3)}if(Pt.consumeJustPressed("KeyQ")&&Me[ee]>0){Me[ee]--,un();const s=ht.PLAYER_HEIGHT/2-.2;so.copy(Tt.position),so.y+=s,ps.set(0,0,-1).applyQuaternion(qe.camera.quaternion),so.addScaledVector(ps,.8),ho(ee,so);const o=Bn[Bn.length-1];o&&o.body.velocity.set(ps.x*6+(Math.random()-.5)*.5,ps.y*6+2,ps.z*6+(Math.random()-.5)*.5)}for(let s=Bn.length-1;s>=0;s--){const o=Bn[s],r=o.update(t,Tt.position);o.mesh.position.distanceTo(Tt.position)<1.2?(Me[o.blockType]=(Me[o.blockType]||0)+1,un(),ke.playPickup(),o.destroy(),Bn.splice(s,1)):r&&Bn.splice(s,1)}if(Er.isNight()){if(lr+=t,lr>2&&(lr=0,Ze.length<ht.MAX_MOBS)){const s=ht.MOB_SPAWN_RADIUS,o=Math.random()*Math.PI*2,r=12+Math.random()*(s-12),l=Math.floor(Tt.position.x+Math.cos(o)*r),c=Math.floor(Tt.position.z+Math.sin(o)*r);let h=0,d=!1;for(let u=15;u>=-10;u--)if(It.getBlock(l,u,c)!==b.AIR){h=u+1,d=!0;break}if(d){const u=new Ae(new H(l,h,c),qe.scene,Ms.world);Ze.push(u)}}}else for(let s=Ze.length-1;s>=0;s--)Ze[s].destroy(),Ze.splice(s,1);for(let s=Ze.length-1;s>=0;s--)Ze[s].update(t,Tt)&&Ze.splice(s,1);jv(),Pt.isLocked&&It.generateWorldAround(Tt.position.x,Tt.position.z),cr+=t,cr>5&&(cr=0,Xr());const e=we.getConfig();Pt.consumeJustPressed(e.keyPlaceBlock)&&Tc(!1,!0);const n=e.invertClicks?Pt.isRightClickDown:Pt.isLeftClickDown;let i=n;if(e.easyMode&&(i=n&&!Pl&&io<=0),Pl=n,i&&Pt.isLocked){Tt.swing(),bs.setFromCamera(new Kt(0,0),Tt.camera);const s=It.getChunkMeshes(),o=bs.intersectObjects(s);let r=!1;if(o.length>0&&o[0].distance<=Ar){const l=o[0],c=l.point,h=l.face?.normal;if(h){const d=c.clone().sub(h.clone().multiplyScalar(.1)),u=Math.floor(d.x),m=Math.floor(d.y),g=Math.floor(d.z),f=It.getBlock(u,m,g);if(f!==b.AIR&&f!==b.BEDROCK){r=!0;const p=new H(u,m,g);if(!Fi||!Il.equals(p))Fi=!0,Il.copy(p),Xn=0,Kn.position.set(u+.5,m+.5,g+.5),Kn.visible=!0,Ol(0),e.easyMode&&(zl(f,u,m,g),Fi=!1,Kn.visible=!1,Xn=0,io=.25);else{const _=wn[f],v=wn[ee]||{};let y=_.hardness||1,x=1;const w=!_.requiredToolCategory||_.requiredToolCategory==="none"||v.toolCategory===_.requiredToolCategory;w&&v.isTool?x*=v.speedMultiplier||1:!w&&_.requiredToolCategory&&_.requiredToolCategory!=="none"&&(x*=.1);const E=y*1.5/x;Xn+=t/E,Ol(Xn),Xn>=1&&(zl(f,u,m,g),Fi=!1,Kn.visible=!1,Xn=0)}}}}r||(Fi=!1,Kn.visible=!1,Xn=0)}else Fi=!1,Kn.visible=!1,Xn=0;qe.render()}function zl(a,t,e,n){if(a!==b.BEDROCK){if(It.setBlock(t,e,n,b.AIR),ke.playBreak(a),a===b.DOOR_CLOSED||a===b.DOOR_OPEN){const i=It.getBlock(t,e+1,n);(i===b.DOOR_CLOSED||i===b.DOOR_OPEN)&&It.setBlock(t,e+1,n,b.AIR);const s=It.getBlock(t,e-1,n);(s===b.DOOR_CLOSED||s===b.DOOR_OPEN)&&(It.setBlock(t,e-1,n,b.AIR),It.removeDoorOrientation(t,e-1,n)),It.removeDoorOrientation(t,e,n)}if(a===b.BED_HEAD||a===b.BED_FOOT){const i=a===b.BED_HEAD?b.BED_FOOT:b.BED_HEAD,s=[[t+1,n],[t-1,n],[t,n+1],[t,n-1]];for(const[o,r]of s)if(It.getBlock(o,e,r)===i){It.setBlock(o,e,r,b.AIR);break}ho(b.BED_HEAD,new H(t+.5,e+.5,n+.5),Tt.position)}else{const i=wn[a],s=wn[ee],o=i.minToolTier||0;if((s.isTool&&s.toolTier||0)>=o&&a!==b.DOOR_OPEN){let l=i.drops??a;a===b.LEAVES&&(Math.random()<.05?l=b.APPLE:l=b.AIR),l!==b.AIR&&ho(l,new H(t+.5,e+.5,n+.5),Tt.position)}}}}function Tc(a,t){if(!a&&!t)return;bs.setFromCamera(new Kt(0,0),Tt.camera);const e=It.getChunkMeshes(),n=bs.intersectObjects(e);if(n.length>0){const i=n[0];if(i.distance>Ar)return;const s=i.point,o=i.face?.normal;if(!o)return;if(a){Tt.swing();const r=[];Ze.forEach(c=>{c.mesh.traverse(h=>{h instanceof xt&&r.push(h)})});const l=bs.intersectObjects(r);if(l.length>0&&l[0].distance<Ar){const c=l[0].object;let h=null;for(const d of Ze){let u=!1;if(d.mesh.traverse(m=>{m===c&&(u=!0)}),u){h=d;break}}if(h){const d=new H(0,0,-1).applyQuaternion(qe.camera.quaternion);d.y=.2,d.normalize();const u=ee===b.DIAMOND_SWORD?6:ee===b.HAMMER?5:ee===b.SWORD?4:2;if(h.takeDamage(u,d)){const g=Math.random()<.4?b.COAL_ORE:b.STONE;ho(g,new H(h.body.position.x,h.body.position.y,h.body.position.z),Tt.position);const f=Ze.indexOf(h);f>-1&&Ze.splice(f,1)}return}}}else if(t){if(ee===b.SWORD||ee===b.DIAMOND_SWORD||ee===b.HAMMER)return;const r=s.clone().sub(o.clone().multiplyScalar(.1)),l=Math.floor(r.x),c=Math.floor(r.y),h=Math.floor(r.z),d=It.getBlock(l,c,h);if(d===b.DOOR_CLOSED){It.setBlock(l,c,h,b.DOOR_OPEN),It.getBlock(l,c+1,h)===b.DOOR_CLOSED&&It.setBlock(l,c+1,h,b.DOOR_OPEN),ke.playPlace(b.DOOR_OPEN);return}else if(d===b.DOOR_OPEN){It.setBlock(l,c,h,b.DOOR_CLOSED),It.getBlock(l,c+1,h)===b.DOOR_OPEN&&It.setBlock(l,c+1,h,b.DOOR_CLOSED),ke.playPlace(b.DOOR_CLOSED);return}if(Me[ee]<=0)return;const u=s.clone().add(o.clone().multiplyScalar(.1)),m=Math.floor(u.x),g=Math.floor(u.y),f=Math.floor(u.z),p=ht.PLAYER_HEIGHT/2,_=Math.floor(Tt.position.x),v=Math.floor(Tt.position.y-p),y=Math.floor(Tt.position.z),x=m===_&&f===y&&(g===v||g===v+1),w=m===_&&f===y&&g===v,E=m===_&&f===y&&g===v+1,T=ee===b.TORCH,M=ee===b.DOOR_CLOSED,A=ee===b.BED_HEAD;if(T||!x||w||E){if(M){It.setBlock(m,g,f,b.DOOR_CLOSED);const I=Tt.getYaw(),U=Math.abs(Math.sin(I))<.707?"NS":"EW";It.setDoorOrientation(m,g,f,U),It.getBlock(m,g+1,f)===b.AIR&&(It.setBlock(m,g+1,f,b.DOOR_CLOSED),It.setDoorOrientation(m,g+1,f,U)),ke.playPlace(ee),Me[ee]--,un()}else if(A){It.setBlock(m,g,f,b.BED_HEAD);const I=Tt.getYaw();let F=0,U=0;const D=-Math.sin(I),P=-Math.cos(I);Math.abs(D)>Math.abs(P)?F=Math.sign(D):U=Math.sign(P);const O=m+F,N=f+U;It.getBlock(O,g,N)===b.AIR&&It.setBlock(O,g,N,b.BED_FOOT),ke.playPlace(ee),Me[b.BED_HEAD]--,un()}else It.setBlock(m,g,f,ee),ke.playPlace(ee),Me[ee]--,un();w&&(Tt.body.position.y=g+1+p+.05,Tt.position.y=Tt.body.position.y,Tt.body.velocity.y<0&&(Tt.body.velocity.y=0))}}}}window.addEventListener("keydown",a=>{if(document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement)return;const t=we.getConfig();if(a.code==="Escape"){let e=!1;const n=document.getElementById("inventory-modal");n&&n.style.display==="flex"&&(Rr(),e=!0);const s=document.getElementById("crafting-modal"),o=s&&s.style.display==="flex";!e&&o&&(Lr(),e=!0);const r=document.getElementById("manual-modal"),l=r&&r.style.display==="flex";!e&&l&&(Dr(),e=!0);const c=document.getElementById("world-map-modal"),h=c&&c.style.display==="flex";!e&&h&&(Vl(),e=!0);const d=document.getElementById("config-modal"),u=d&&d.style.display==="flex";!e&&u&&(d.style.display="none",Pt.lastModalCloseTime=performance.now(),Pt.requestLock(),e=!0),e&&(a.preventDefault(),Pt.consumeJustPressed("Escape"))}if(a.code===t.keyOpenInventory){const e=document.getElementById("inventory-modal");e&&e.style.display==="flex"?(Rr(),a.preventDefault(),Pt.consumeJustPressed(t.keyOpenInventory)):Pt.isLocked&&(Qv(),a.preventDefault(),Pt.consumeJustPressed(t.keyOpenInventory))}if(a.code===t.keyOpenCrafting){const e=document.getElementById("crafting-modal");e&&e.style.display==="flex"?(Lr(),a.preventDefault(),Pt.consumeJustPressed(t.keyOpenCrafting)):Pt.isLocked&&(t_(),a.preventDefault(),Pt.consumeJustPressed(t.keyOpenCrafting))}if(a.code===t.keyOpenManual){const e=document.getElementById("manual-modal");e&&e.style.display==="flex"?(Dr(),a.preventDefault(),Pt.consumeJustPressed(t.keyOpenManual)):Pt.isLocked&&(e_(),a.preventDefault(),Pt.consumeJustPressed(t.keyOpenManual))}if(a.code===t.keyOpenMap){const e=document.getElementById("world-map-modal");e&&e.style.display==="flex"?(Vl(),a.preventDefault(),Pt.consumeJustPressed(t.keyOpenMap)):Pt.isLocked&&(n_(),a.preventDefault(),Pt.consumeJustPressed(t.keyOpenMap))}});document.addEventListener("pointerlockerror",()=>{const a=document.getElementById("menu-overlay"),t=document.getElementById("inventory-modal"),e=document.getElementById("crafting-modal"),n=document.getElementById("manual-modal"),i=document.getElementById("world-map-modal"),s=t&&t.style.display==="flex",o=e&&e.style.display==="flex",r=n&&n.style.display==="flex",l=i&&i.style.display==="flex";!s&&!o&&!r&&!l&&a&&(a.style.display="flex",a.style.opacity="1")});window.addEventListener("mousedown",a=>{if(!Pt.isLocked)return;const t=we.getConfig(),e=a.button===0,n=a.button===2,i=t.invertClicks?n:e,s=t.invertClicks?e:n;Tc(i,s)});window.addEventListener("contextmenu",a=>{a.preventDefault()});const Tr=document.querySelectorAll(".char-select-btn"),$v=we.getConfig().characterType||"boy1";Tr.forEach(a=>{a.getAttribute("data-char")===$v?a.classList.add("active"):a.classList.remove("active")});Tr.forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-char");t&&(Tr.forEach(e=>e.classList.remove("active")),a.classList.add("active"),we.save({characterType:t}),Tt.changeCharacter(t))})});const Ui=document.getElementById("start-btn"),Zv=document.getElementById("menu-overlay");let uo=!1;if(Ui&&Zv){Ui.addEventListener("click",async()=>{if(dn&&dn.value.trim()!==""&&xe.setWorldId(dn.value.trim()),ze&&ze.value.trim()!==""){const e=ze.value.trim();xe.setAccountId(e),xo(e),Ui.textContent="データをロード中...",Ui.setAttribute("disabled","true"),await xe.loadData(),Ui.textContent="ゲームスタート",Ui.removeAttribute("disabled"),xe.startAutoSave(3)}else xe.setAccountId(""),xe.stopAutoSave();Pt.requestLock(),ke.init(),uo||(uo=!0,requestAnimationFrame(qr))});const a=document.getElementById("hotbar"),t=document.getElementById("hud");document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===document.body?(a&&(a.style.display="flex"),t&&(t.style.display="block"),jn&&(jn.style.display="none")):jn&&jn.style.display==="flex"||(a&&(a.style.display="none"),t&&(t.style.display="none"),Xr(),ze&&ze.value.trim()!==""&&xe.saveData().catch(n=>console.error("Cloud save failed:",n)))})}window.addEventListener("keydown",a=>{if(Pt.isLocked&&a.code.startsWith("Digit")){const t=parseInt(a.code.substring(5));t>=1&&t<=9&&co(t-1)}});window.addEventListener("wheel",a=>{if(Pt.isLocked){if(a.deltaY>0){const t=(Jn+1)%Un.length;co(t)}else if(a.deltaY<0){const t=(Jn-1+Un.length)%Un.length;co(t)}}},{passive:!0});window.addEventListener("config-changed",()=>{const a=we.getConfig();qe.renderer.shadowMap.enabled=a.enableShadows,Er.setShadowsEnabled(a.enableShadows),qe.scene.traverse(t=>{t instanceof xt&&t.material&&(Array.isArray(t.material)?t.material.forEach(e=>{e.needsUpdate=!0}):t.material.needsUpdate=!0)})});const jn=document.getElementById("inventory-modal"),hr=document.getElementById("inventory-item-list"),ur=document.getElementById("inventory-hotbar-slots"),Fl=document.getElementById("inventory-close-btn");let Ts=null;const Jv=[b.GROUND,b.DIRT,b.STONE,b.WOOD,b.LEAVES,b.PLANK,b.BRICK,b.SAND,b.COAL_ORE,b.TORCH,b.GLASS,b.DOOR_CLOSED,b.STAIRS,b.SWORD,b.FENCE,b.BED_HEAD,b.FURNACE,b.CHEST,b.WATER,b.DIAMOND_SWORD,b.HAMMER,b.BEDROCK,b.IRON_ORE,b.GOLD_ORE,b.DIAMOND_ORE,b.STICK,b.IRON_INGOT,b.GOLD_INGOT,b.DIAMOND,b.COBBLESTONE,b.COAL,b.APPLE,b.WOODEN_PICKAXE,b.STONE_PICKAXE,b.IRON_PICKAXE,b.DIAMOND_PICKAXE,b.WOODEN_AXE,b.STONE_AXE,b.IRON_AXE,b.DIAMOND_AXE,b.WOODEN_SHOVEL,b.STONE_SHOVEL,b.IRON_SHOVEL,b.DIAMOND_SHOVEL,b.LEATHER_ARMOR_SET,b.IRON_ARMOR_SET,b.DIAMOND_ARMOR_SET];function Rc(){const a=Tt.armorType;document.querySelectorAll(".armor-btn").forEach(e=>{e.getAttribute("data-armor")===a?e.classList.add("active"):e.classList.remove("active")})}function Qv(){jn&&(document.exitPointerLock(),jn.style.display="flex",Ts=null,Dc(),Ic(),Rc())}function Rr(){jn&&(jn.style.display="none",Pt.lastModalCloseTime=performance.now(),Pt.requestLock())}Fl&&Fl.addEventListener("click",Rr);const fo=document.getElementById("crafting-modal"),dr=document.getElementById("recipe-list"),Ul=document.getElementById("crafting-close-btn");function t_(){fo&&(document.exitPointerLock(),fo.style.display="flex",Lc())}function Lr(){fo&&(fo.style.display="none",Pt.lastModalCloseTime=performance.now(),Pt.requestLock())}Ul&&Ul.addEventListener("click",Lr);const po=document.getElementById("manual-modal"),Gl=document.getElementById("manual-close-btn"),xn=document.getElementById("manual-toggle-kids-btn"),fr=document.getElementById("manual-content"),pr=document.getElementById("manual-content-kids");let mr=!1;function e_(){po&&(document.exitPointerLock(),po.style.display="flex")}function Dr(){po&&(po.style.display="none",Pt.lastModalCloseTime=performance.now(),Pt.requestLock())}Gl&&Gl.addEventListener("click",Dr);const mo=document.getElementById("world-map-modal");function n_(){mo&&(document.exitPointerLock(),mo.style.display="flex",Cr.renderMap(It,Tt.position))}function Vl(){mo&&(mo.style.display="none",Pt.lastModalCloseTime=performance.now(),Pt.requestLock())}xn&&fr&&pr&&xn.addEventListener("click",()=>{mr=!mr,mr?(fr.style.display="none",pr.style.display="block",xn.textContent="もとの文字にもどす",xn.style.backgroundColor="rgba(139, 92, 246, 0.2)",xn.style.borderColor="rgba(139, 92, 246, 0.5)",xn.style.color="#a78bfa"):(fr.style.display="block",pr.style.display="none",xn.textContent="ひらがなモードにする",xn.style.backgroundColor="rgba(59, 130, 246, 0.2)",xn.style.borderColor="rgba(59, 130, 246, 0.5)",xn.style.color="#60a5fa")});function Lc(){dr&&(dr.innerHTML="",Fv.forEach(a=>{const t=a.inputs.every(o=>(Me[o.type]||0)>=o.count),e=document.createElement("div");e.className="recipe-item";const n=document.createElement("div");n.className="recipe-output",n.innerHTML=`<div class="slot-icon ${As(a.output.type)}"></div> <span>${wn[a.output.type].name} x${a.output.count}</span>`;const i=document.createElement("div");i.className="recipe-inputs",a.inputs.forEach(o=>{const r=Me[o.type]||0,l=r>=o.count,c=document.createElement("div");c.className=`recipe-input-item ${l?"sufficient":"lacking"}`,c.innerHTML=`<div class="slot-icon ${As(o.type)}" style="width:24px;height:24px;"></div> <span>${r}/${o.count}</span>`,i.appendChild(c)});const s=document.createElement("button");s.className="craft-btn",s.textContent="作成",s.disabled=!t,s.addEventListener("click",()=>{s.disabled||(a.inputs.forEach(o=>{Me[o.type]-=o.count}),Me[a.output.type]=(Me[a.output.type]||0)+a.output.count,ke.playPlace(a.output.type),un(),Lc())}),e.appendChild(n),e.appendChild(i),e.appendChild(s),dr.appendChild(e)}))}const i_=document.querySelectorAll(".armor-btn");i_.forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-armor");t&&(Tt.setArmor(t),Rc())})});function Dc(){hr&&(hr.innerHTML="",Jv.forEach(a=>{const t=wn[a],e=document.createElement("div");e.className="inventory-item",Ts===a&&e.classList.add("selected");const n=document.createElement("div");n.className=`slot-icon ${As(a)}`,e.appendChild(n);const i=document.createElement("div");i.className="item-name",i.textContent=t.name,e.appendChild(i),e.addEventListener("click",()=>{Ts=a,Dc()}),hr.appendChild(e)}))}function Ic(){ur&&(ur.innerHTML="",tn.forEach((a,t)=>{a.forEach((e,n)=>{const i=document.createElement("div");i.className="inventory-hotbar-slot",t===en&&(i.style.borderColor="rgba(255, 255, 255, 0.4)",i.style.background="rgba(255, 255, 255, 0.05)");const s=document.createElement("div");s.className=`slot-icon ${As(e)}`,i.appendChild(s);const o=document.createElement("div");o.className="slot-num",o.textContent=(n+1).toString(),i.appendChild(o),i.addEventListener("click",()=>{Ts!==null&&(tn[t][n]=Ts,un(),Ic())}),ur.appendChild(i)})}))}function s_(){const a=localStorage.getItem("maikurafu_autosave");if(!a)return!1;try{const t=JSON.parse(a);if(t.player&&Tt.loadSaveData(t.player),t.inventory){const e=t.inventory;e.blocks&&Object.assign(Me,e.blocks),e.hotbarPages&&(tn[0]=[...e.hotbarPages[0]],tn[1]=[...e.hotbarPages[1]]),typeof e.activePage=="number"&&(en=e.activePage,Un=tn[en]),typeof e.activeSlotIndex=="number"&&(Jn=e.activeSlotIndex),un()}return t.world&&It.setModifiedBlocksData(t.world),console.log("Game auto-saved state successfully loaded from localStorage."),!0}catch(t){return console.warn("Failed to parse autosave data:",t),!1}}function Xr(){const a={version:"1.0.0",timestamp:Date.now(),player:Tt.getSaveData(),inventory:{blocks:Me,hotbarPages:tn,activePage:en,activeSlotIndex:Jn},world:It.getModifiedBlocksData()};localStorage.setItem("maikurafu_autosave",JSON.stringify(a)),console.log("Game auto-saved to localStorage.")}const ai=document.getElementById("cloud-save-btn"),li=document.getElementById("cloud-load-btn");ai&&ai.addEventListener("click",async()=>{if(ze&&ze.value.trim()!==""){const a=ze.value.trim();xe.setAccountId(a),xo(a),dn&&xe.setWorldId(dn.value.trim()),Xr();const t=ai.textContent;ai.textContent="セーブ中...",ai.setAttribute("disabled","true"),await xe.saveData(),ai.textContent=t,ai.removeAttribute("disabled")}else alert("アカウントIDを入力してください")});li&&li.addEventListener("click",async()=>{if(ze&&ze.value.trim()!==""){const a=ze.value.trim();xe.setAccountId(a),xo(a),dn&&xe.setWorldId(dn.value.trim());const t=li.textContent;li.textContent="ロード中...",li.setAttribute("disabled","true"),await xe.loadData(),li.textContent=t,li.removeAttribute("disabled")}else alert("アカウントIDを入力してください")});const ci=document.getElementById("cloud-sync-btn");ci&&ci.addEventListener("click",async()=>{if(dn&&xe.setWorldId(dn.value.trim()),ze&&ze.value.trim()!==""){const t=ze.value.trim();xe.setAccountId(t)}const a=ci.textContent;ci.textContent="同期中...",ci.setAttribute("disabled","true"),await xe.syncWorldData(),ci.textContent=a,ci.removeAttribute("disabled")});

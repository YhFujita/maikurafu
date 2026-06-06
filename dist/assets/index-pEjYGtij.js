(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dr="150",Bc=0,Yr=1,zc=2,Vl=1,Hl=2,ps=3,Zn=0,qe=1,zn=2,$n=0,Hi=1,jr=2,$r=3,Zr=4,kc=5,Ui=100,Fc=101,Uc=102,Jr=103,Qr=104,Gc=200,Vc=201,Hc=202,Wc=203,Wl=204,ql=205,qc=206,Xc=207,Kc=208,Yc=209,jc=210,$c=0,Zc=1,Jc=2,mr=3,Qc=4,th=5,eh=6,nh=7,Xl=0,ih=1,sh=2,kn=0,oh=1,rh=2,ah=3,lh=4,ch=5,Kl=300,Xi=301,Ki=302,gr=303,vr=304,mo=306,_r=1e3,He=1001,yr=1002,ue=1003,ta=1004,wo=1005,Ze=1006,hh=1007,bs=1008,vi=1009,uh=1010,dh=1011,Yl=1012,fh=1013,pi=1014,mi=1015,Ss=1016,ph=1017,mh=1018,Wi=1020,gh=1021,an=1023,vh=1024,_h=1025,gi=1026,Yi=1027,yh=1028,xh=1029,Mh=1030,bh=1031,Sh=1033,Eo=33776,Co=33777,Ao=33778,To=33779,ea=35840,na=35841,ia=35842,sa=35843,wh=36196,oa=37492,ra=37496,aa=37808,la=37809,ca=37810,ha=37811,ua=37812,da=37813,fa=37814,pa=37815,ma=37816,ga=37817,va=37818,_a=37819,ya=37820,xa=37821,Ro=36492,Eh=36283,Ma=36284,ba=36285,Sa=36286,_i=3e3,Qt=3001,Ch=3200,Ah=3201,jl=0,Th=1,xn="srgb",ws="srgb-linear",$l="display-p3",Lo=7680,Rh=519,wa=35044,Ea="300 es",xr=1035;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ca=1234567;const vs=Math.PI/180,oo=180/Math.PI;function Qi(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[a&255]+Se[a>>8&255]+Se[a>>16&255]+Se[a>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Be(a,t,e){return Math.max(t,Math.min(e,a))}function Ir(a,t){return(a%t+t)%t}function Lh(a,t,e,n,i){return n+(a-t)*(i-n)/(e-t)}function Dh(a,t,e){return a!==t?(e-a)/(t-a):0}function _s(a,t,e){return(1-e)*a+e*t}function Ih(a,t,e,n){return _s(a,t,1-Math.exp(-e*n))}function Ph(a,t=1){return t-Math.abs(Ir(a,t*2)-t)}function Oh(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*(3-2*a))}function Nh(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*a*(a*(a*6-15)+10))}function Bh(a,t){return a+Math.floor(Math.random()*(t-a+1))}function zh(a,t){return a+Math.random()*(t-a)}function kh(a){return a*(.5-Math.random())}function Fh(a){a!==void 0&&(Ca=a);let t=Ca+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Uh(a){return a*vs}function Gh(a){return a*oo}function Mr(a){return(a&a-1)===0&&a!==0}function Vh(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Zl(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Hh(a,t,e,n,i){const s=Math.cos,o=Math.sin,r=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),m=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":a.set(r*h,l*d,l*u,r*c);break;case"YZY":a.set(l*u,r*h,l*d,r*c);break;case"ZXZ":a.set(l*d,l*u,r*h,r*c);break;case"XZX":a.set(r*h,l*g,l*m,r*c);break;case"YXY":a.set(l*m,r*h,l*g,r*c);break;case"ZYZ":a.set(l*g,l*m,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ms(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ne(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const en={DEG2RAD:vs,RAD2DEG:oo,generateUUID:Qi,clamp:Be,euclideanModulo:Ir,mapLinear:Lh,inverseLerp:Dh,lerp:_s,damp:Ih,pingpong:Ph,smoothstep:Oh,smootherstep:Nh,randInt:Bh,randFloat:zh,randFloatSpread:kh,seededRandom:Fh,degToRad:Uh,radToDeg:Gh,isPowerOfTwo:Mr,ceilPowerOfTwo:Vh,floorPowerOfTwo:Zl,setQuaternionFromProperEuler:Hh,normalize:Ne,denormalize:ms};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,r,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],f=i[0],p=i[3],_=i[6],v=i[1],y=i[4],x=i[7],w=i[2],E=i[5],T=i[8];return s[0]=o*f+r*v+l*w,s[3]=o*p+r*y+l*E,s[6]=o*_+r*x+l*T,s[1]=c*f+h*v+d*w,s[4]=c*p+h*y+d*E,s[7]=c*_+h*x+d*T,s[2]=u*f+m*v+g*w,s[5]=u*p+m*y+g*E,s[8]=u*_+m*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*r*c-n*s*h+n*r*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=h*o-r*c,u=r*l-h*s,m=c*s-o*l,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return t[0]=d*f,t[1]=(i*c-h*n)*f,t[2]=(r*n-i*o)*f,t[3]=u*f,t[4]=(h*e-i*l)*f,t[5]=(i*s-r*e)*f,t[6]=m*f,t[7]=(n*l-c*e)*f,t[8]=(o*e-n*s)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,r){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*r)+o+t,-i*c,i*l,-i*(-c*o+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Do.makeScale(t,e)),this}rotate(t){return this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new Pe;function Jl(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function ro(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}let yi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,r){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],m=s[o+1],g=s[o+2],f=s[o+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(r===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=f;return}if(d!==f||l!==u||c!==m||h!==g){let p=1-r;const _=l*u+c*m+h*g+d*f,v=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const w=Math.sqrt(y),E=Math.atan2(w,_*v);p=Math.sin(p*E)/w,r=Math.sin(r*E)/w}const x=r*v;if(l=l*p+u*x,c=c*p+m*x,h=h*p+g*x,d=d*p+f*x,p===1-r){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const r=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return t[e]=r*g+h*d+l*m-c*u,t[e+1]=l*g+h*u+c*d-r*m,t[e+2]=c*g+h*m+r*u-l*d,t[e+3]=h*g-r*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(i/2),d=r(s/2),u=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],r=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+r+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>r&&n>d){const m=2*Math.sqrt(1+n-r-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(r>d){const m=2*Math.sqrt(1+r-n-d);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-r);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*r+i*c-s*l,this._y=i*h+o*l+s*r-n*c,this._z=s*h+o*c+n*l-i*r,this._w=o*h-n*r-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*t._w+n*t._x+i*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Aa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Aa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z,l=t.w,c=l*e+o*i-r*n,h=l*n+r*e-s*i,d=l*i+s*n-o*e,u=-s*e-o*n-r*i;return this.x=c*l+u*-s+h*-r-d*-o,this.y=h*l+u*-o+d*-s-c*-r,this.z=d*l+u*-r+c*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,r=e.y,l=e.z;return this.x=i*l-s*r,this.y=s*o-n*l,this.z=n*r-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Io.copy(this).projectOnVector(t),this.sub(Io)}reflect(t){return this.sub(Io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Io=new H,Aa=new yi;function qi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Po(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Wh=new Pe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),qh=new Pe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Yn=new H;function Xh(a){return a.convertSRGBToLinear(),Yn.set(a.r,a.g,a.b).applyMatrix3(qh),a.setRGB(Yn.x,Yn.y,Yn.z)}function Kh(a){return Yn.set(a.r,a.g,a.b).applyMatrix3(Wh),a.setRGB(Yn.x,Yn.y,Yn.z).convertLinearToSRGB()}const Yh={[ws]:a=>a,[xn]:a=>a.convertSRGBToLinear(),[$l]:Xh},jh={[ws]:a=>a,[xn]:a=>a.convertLinearToSRGB(),[$l]:Kh},Le={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return ws},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;const n=Yh[t],i=jh[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}};let Si;class Ql{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Si===void 0&&(Si=ro("canvas")),Si.width=t.width,Si.height=t.height;const n=Si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ro("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qi(e[n]/255)*255):e[n]=qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class tc{constructor(t=null){this.isSource=!0,this.uuid=Qi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(Oo(i[o].image)):s.push(Oo(i[o]))}else s=Oo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Oo(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ql.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $h=0;class ke extends Ji{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=He,i=He,s=Ze,o=bs,r=an,l=vi,c=ke.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Qi(),this.name="",this.source=new tc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _r:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _r:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Kl;ke.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],f=l[2],p=l[6],_=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(m+1)/2,w=(_+1)/2,E=(h+u)/4,T=(d+f)/4,M=(g+p)/4;return y>x&&y>w?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=T/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=M/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=M/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-f)*(d-f)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-f)/v,this.z=(u-h)/v,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xi extends Ji{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ze,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new tc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ec extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zh extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],d=t[l+1],u=t[l+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),d=t.getY(l),u=t.getZ(l);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,r=s.count;o<r;o++)ii.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(ii)}else n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox),No.applyMatrix4(t.matrixWorld),this.union(No);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Ds.subVectors(this.max,ns),wi.subVectors(t.a,ns),Ei.subVectors(t.b,ns),Ci.subVectors(t.c,ns),Gn.subVectors(Ei,wi),Vn.subVectors(Ci,Ei),si.subVectors(wi,Ci);let e=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-si.z,si.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,si.z,0,-si.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-si.y,si.x,0];return!Bo(e,wi,Ei,Ci,Ds)||(e=[1,0,0,0,1,0,0,0,1],!Bo(e,wi,Ei,Ci,Ds))?!1:(Is.crossVectors(Gn,Vn),e=[Is.x,Is.y,Is.z],Bo(e,wi,Ei,Ci,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new H,new H,new H,new H,new H,new H,new H,new H],ii=new H,No=new Ts,wi=new H,Ei=new H,Ci=new H,Gn=new H,Vn=new H,si=new H,ns=new H,Ds=new H,Is=new H,oi=new H;function Bo(a,t,e,n,i){for(let s=0,o=a.length-3;s<=o;s+=3){oi.fromArray(a,s);const r=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const Jh=new Ts,is=new H,zo=new H;let Pr=class{constructor(t=new H,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(is,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(zo)),this.expandByPoint(is.copy(t.center).sub(zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Cn=new H,ko=new H,Ps=new H,Hn=new H,Fo=new H,Os=new H,Uo=new H;let nc=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ko.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(ko);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ps),r=Hn.dot(this.direction),l=-Hn.dot(Ps),c=Hn.lengthSq(),h=Math.abs(1-o*o);let d,u,m,g;if(h>0)if(d=o*l-r,u=o*r-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const f=1/h;d*=f,u*=f,m=d*(d+o*u+2*r)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+r)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(o*s+r)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ko).addScaledVector(Ps,u),m}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,r,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(r=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(r=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,i,s){Fo.subVectors(e,t),Os.subVectors(n,t),Uo.crossVectors(Fo,Os);let o=this.direction.dot(Uo),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;Hn.subVectors(this.origin,t);const l=r*this.direction.dot(Os.crossVectors(Hn,Os));if(l<0)return null;const c=r*this.direction.dot(Fo.cross(Hn));if(c<0||l+c>o)return null;const h=-r*Hn.dot(Uo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class de{constructor(){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,r,l,c,h,d,u,m,g,f,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=r,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=u,_[3]=m,_[7]=g,_[11]=f,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ai.setFromMatrixColumn(t,0).length(),s=1/Ai.setFromMatrixColumn(t,1).length(),o=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,m=o*d,g=r*h,f=r*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=u-f*c,e[9]=-r*l,e[2]=f-u*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,m=l*d,g=c*h,f=c*d;e[0]=u+f*r,e[4]=g*r-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-r,e[2]=m*r-g,e[6]=f+u*r,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,m=l*d,g=c*h,f=c*d;e[0]=u-f*r,e[4]=-o*d,e[8]=g+m*r,e[1]=m+g*r,e[5]=o*h,e[9]=f-u*r,e[2]=-o*c,e[6]=r,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,m=o*d,g=r*h,f=r*d;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+f,e[1]=l*d,e[5]=f*c+u,e[9]=m*c-g,e[2]=-c,e[6]=r*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,m=o*c,g=r*l,f=r*c;e[0]=l*h,e[4]=f-u*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-r*h,e[2]=-c*h,e[6]=m*d+g,e[10]=u-f*d}else if(t.order==="XZY"){const u=o*l,m=o*c,g=r*l,f=r*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+f,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=r*h,e[10]=f*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qh,t,tu)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Wn.crossVectors(n,Ge),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Wn.crossVectors(n,Ge)),Wn.normalize(),Ns.crossVectors(Ge,Wn),i[0]=Wn.x,i[4]=Ns.x,i[8]=Ge.x,i[1]=Wn.y,i[5]=Ns.y,i[9]=Ge.y,i[2]=Wn.z,i[6]=Ns.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],f=n[6],p=n[10],_=n[14],v=n[3],y=n[7],x=n[11],w=n[15],E=i[0],T=i[4],M=i[8],A=i[12],I=i[1],F=i[5],U=i[9],D=i[13],P=i[2],N=i[6],O=i[10],K=i[14],z=i[3],X=i[7],Y=i[11],it=i[15];return s[0]=o*E+r*I+l*P+c*z,s[4]=o*T+r*F+l*N+c*X,s[8]=o*M+r*U+l*O+c*Y,s[12]=o*A+r*D+l*K+c*it,s[1]=h*E+d*I+u*P+m*z,s[5]=h*T+d*F+u*N+m*X,s[9]=h*M+d*U+u*O+m*Y,s[13]=h*A+d*D+u*K+m*it,s[2]=g*E+f*I+p*P+_*z,s[6]=g*T+f*F+p*N+_*X,s[10]=g*M+f*U+p*O+_*Y,s[14]=g*A+f*D+p*K+_*it,s[3]=v*E+y*I+x*P+w*z,s[7]=v*T+y*F+x*N+w*X,s[11]=v*M+y*U+x*O+w*Y,s[15]=v*A+y*D+x*K+w*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],r=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],f=t[7],p=t[11],_=t[15];return g*(+s*l*d-i*c*d-s*r*u+n*c*u+i*r*m-n*l*m)+f*(+e*l*m-e*c*u+s*o*u-i*o*m+i*c*h-s*l*h)+p*(+e*c*d-e*r*m-s*o*d+n*o*m+s*r*h-n*c*h)+_*(-i*r*h-e*l*d+e*r*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],f=t[13],p=t[14],_=t[15],v=d*p*c-f*u*c+f*l*m-r*p*m-d*l*_+r*u*_,y=g*u*c-h*p*c-g*l*m+o*p*m+h*l*_-o*u*_,x=h*f*c-g*d*c+g*r*m-o*f*m-h*r*_+o*d*_,w=g*d*l-h*f*l-g*r*u+o*f*u+h*r*p-o*d*p,E=e*v+n*y+i*x+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(f*u*s-d*p*s-f*i*m+n*p*m+d*i*_-n*u*_)*T,t[2]=(r*p*s-f*l*s+f*i*c-n*p*c-r*i*_+n*l*_)*T,t[3]=(d*l*s-r*u*s-d*i*c+n*u*c+r*i*m-n*l*m)*T,t[4]=y*T,t[5]=(h*p*s-g*u*s+g*i*m-e*p*m-h*i*_+e*u*_)*T,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*_-e*l*_)*T,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*m+e*l*m)*T,t[8]=x*T,t[9]=(g*d*s-h*f*s-g*n*m+e*f*m+h*n*_-e*d*_)*T,t[10]=(o*f*s-g*r*s+g*n*c-e*f*c-o*n*_+e*r*_)*T,t[11]=(h*r*s-o*d*s-h*n*c+e*d*c+o*n*m-e*r*m)*T,t[12]=w*T,t[13]=(h*f*i-g*d*i+g*n*u-e*f*u-h*n*p+e*d*p)*T,t[14]=(g*r*i-o*f*i-g*n*l+e*f*l+o*n*p-e*r*p)*T,t[15]=(o*d*i-h*r*i+h*n*l-e*d*l-o*n*u+e*r*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,r=t.y,l=t.z,c=s*o,h=s*r;return this.set(c*o+n,c*r-i*l,c*l+i*r,0,c*r+i*l,h*r+n,h*l-i*o,0,c*l-i*r,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,r=e._z,l=e._w,c=s+s,h=o+o,d=r+r,u=s*c,m=s*h,g=s*d,f=o*h,p=o*d,_=r*d,v=l*c,y=l*h,x=l*d,w=n.x,E=n.y,T=n.z;return i[0]=(1-(f+_))*w,i[1]=(m+x)*w,i[2]=(g-y)*w,i[3]=0,i[4]=(m-x)*E,i[5]=(1-(u+_))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(g+y)*T,i[9]=(p-v)*T,i[10]=(1-(u+f))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ai.set(i[0],i[1],i[2]).length();const o=Ai.set(i[4],i[5],i[6]).length(),r=Ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);const c=1/s,h=1/o,d=1/r;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,e.setFromRotationMatrix(nn),n.x=s,n.y=o,n.z=r,this}makePerspective(t,e,n,i,s,o){const r=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(o+s)/(o-s),m=-2*o*s/(o-s);return r[0]=l,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=c,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=u,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,n,i,s,o){const r=this.elements,l=1/(e-t),c=1/(n-i),h=1/(o-s),d=(e+t)*l,u=(n+i)*c,m=(o+s)*h;return r[0]=2*l,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*c,r[9]=0,r[13]=-u,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ai=new H,nn=new de,Qh=new H(0,0,0),tu=new H(1,1,1),Wn=new H,Ns=new H,Ge=new H,Ta=new de,Ra=new yi;class go{constructor(t=0,e=0,n=0,i=go.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],r=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ta.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ta,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}go.DEFAULT_ORDER="XYZ";class Or{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eu=0;const La=new H,Ti=new yi,An=new de,Bs=new H,ss=new H,nu=new H,iu=new yi,Da=new H(1,0,0),Ia=new H(0,1,0),Pa=new H(0,0,1),su={type:"added"},Oa={type:"removed"};class Ae extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new H,e=new go,n=new yi,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Pe}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Da,t)}rotateY(t){return this.rotateOnAxis(Ia,t)}rotateZ(t){return this.rotateOnAxis(Pa,t)}translateOnAxis(t,e){return La.copy(t).applyQuaternion(this.quaternion),this.position.add(La.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Da,t)}translateY(t){return this.translateOnAxis(Ia,t)}translateZ(t){return this.translateOnAxis(Pa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(ss,Bs,this.up):An.lookAt(Bs,ss,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(An),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(su)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Oa)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Oa)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,iu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(t.materials,this.material[l]));i.material=r}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(s(t.animations,l))}}if(e){const r=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),m=o(t.animations),g=o(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new H(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new H,Tn=new H,Go=new H,Rn=new H,Ri=new H,Li=new H,Na=new H,Vo=new H,Ho=new H,Wo=new H;class Bn{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){sn.subVectors(i,e),Tn.subVectors(n,e),Go.subVectors(t,e);const o=sn.dot(sn),r=sn.dot(Tn),l=sn.dot(Go),c=Tn.dot(Tn),h=Tn.dot(Go),d=o*c-r*r;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(c*l-r*h)*u,g=(o*h-r*l)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(t,e,n,i,s,o,r,l){return this.getBarycoord(t,e,n,i,Rn),l.set(0,0),l.addScaledVector(s,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(r,Rn.z),l}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),Tn.subVectors(t,e),sn.cross(Tn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),sn.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Bn.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,r;Ri.subVectors(i,n),Li.subVectors(s,n),Vo.subVectors(t,n);const l=Ri.dot(Vo),c=Li.dot(Vo);if(l<=0&&c<=0)return e.copy(n);Ho.subVectors(t,i);const h=Ri.dot(Ho),d=Li.dot(Ho);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ri,o);Wo.subVectors(t,s);const m=Ri.dot(Wo),g=Li.dot(Wo);if(g>=0&&m<=g)return e.copy(s);const f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(n).addScaledVector(Li,r);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Na.subVectors(s,i),r=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(Na,r);const _=1/(p+f+u);return o=f*_,r=u*_,e.copy(n).addScaledVector(Ri,o).addScaledVector(Li,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let ou=0,Rs=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Hi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wl,this.blendDst=ql,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const l=s[r];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},zs={h:0,s:0,l:0};function qo(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Le.workingColorSpace){if(t=Ir(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=qo(o,s,t+1/3),this.g=qo(o,s,t),this.b=qo(o,s,t-1/3)}return Le.toWorkingColorSpace(this,i),this}setStyle(t,e=xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Le.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Le.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Le.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Le.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const n=ic[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}copyLinearToSRGB(t){return this.r=Po(t.r),this.g=Po(t.g),this.b=Po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return Le.fromWorkingColorSpace(we.copy(this),t),Be(we.r*255,0,255)<<16^Be(we.g*255,0,255)<<8^Be(we.b*255,0,255)<<0}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(we.copy(this),e);const n=we.r,i=we.g,s=we.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let l,c;const h=(r+o)/2;if(r===o)l=0,c=0;else{const d=o-r;switch(c=h<=.5?d/(o+r):d/(2-o-r),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=xn){Le.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,i=we.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(on),on.h+=t,on.s+=e,on.l+=n,this.setHSL(on.h,on.s,on.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(on),t.getHSL(zs);const n=_s(on.h,zs.h,e),i=_s(on.s,zs.s,e),s=_s(on.l,zs.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Vt;Vt.NAMES=ic;class Nr extends Rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new H,ks=new Xt;class bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wa&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class sc extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class oc extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class cn extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ru=0;const Ye=new de,Xo=new Ae,Di=new H,Ve=new Ts,os=new Ts,ye=new H;class Qn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jl(t)?oc:sc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const r=e[s];os.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(Ve.min,os.min),Ve.expandByPoint(ye),ye.addVectors(Ve.max,os.max),Ve.expandByPoint(ye)):(Ve.expandByPoint(os.min),Ve.expandByPoint(os.max))}Ve.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let s=0,o=e.length;s<o;s++){const r=e[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)ye.fromBufferAttribute(r,c),l&&(Di.fromBufferAttribute(t,c),ye.add(Di)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<r;I++)c[I]=new H,h[I]=new H;const d=new H,u=new H,m=new H,g=new Xt,f=new Xt,p=new Xt,_=new H,v=new H;function y(I,F,U){d.fromArray(i,I*3),u.fromArray(i,F*3),m.fromArray(i,U*3),g.fromArray(o,I*2),f.fromArray(o,F*2),p.fromArray(o,U*2),u.sub(d),m.sub(d),f.sub(g),p.sub(g);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(D),v.copy(m).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(D),c[I].add(_),c[F].add(_),c[U].add(_),h[I].add(v),h[F].add(v),h[U].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let I=0,F=x.length;I<F;++I){const U=x[I],D=U.start,P=U.count;for(let N=D,O=D+P;N<O;N+=3)y(n[N+0],n[N+1],n[N+2])}const w=new H,E=new H,T=new H,M=new H;function A(I){T.fromArray(s,I*3),M.copy(T);const F=c[I];w.copy(F),w.sub(T.multiplyScalar(T.dot(F))).normalize(),E.crossVectors(M,F);const D=E.dot(h[I])<0?-1:1;l[I*4]=w.x,l[I*4+1]=w.y,l[I*4+2]=w.z,l[I*4+3]=D}for(let I=0,F=x.length;I<F;++I){const U=x[I],D=U.start,P=U.count;for(let N=D,O=D+P;N<O;N+=3)A(n[N+0]),A(n[N+1]),A(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new H,s=new H,o=new H,r=new H,l=new H,c=new H,h=new H,d=new H;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),f=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,f),o.fromBufferAttribute(e,p),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,d=r.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){r.isInterleavedBufferAttribute?m=l[f]*r.data.stride+r.offset:m=l[f]*h;for(let _=0;_<h;_++)u[g++]=c[m++]}return new bn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qn,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],c=t(l,n);e.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new de,pn=new nc,Fs=new Pr,za=new H,rs=new H,as=new H,ls=new H,Ko=new H,Us=new H,Gs=new Xt,Vs=new Xt,Hs=new Xt,Yo=new H,Ws=new H;class St extends Ae{constructor(t=new Qn,e=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(s&&r){Us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=r[l],d=s[l];h!==0&&(Ko.fromBufferAttribute(d,t),o?Us.addScaledVector(Ko,h):Us.addScaledVector(Ko.sub(e),h))}e.add(Us)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),pn.copy(t.ray).recast(t.near),Fs.containsPoint(pn.origin)===!1&&(pn.intersectSphere(Fs,za)===null||pn.origin.distanceToSquared(za)>(t.far-t.near)**2))||(Ba.copy(s).invert(),pn.copy(t.ray).applyMatrix4(Ba),n.boundingBox!==null&&pn.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(r!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],_=Math.max(f.start,u.start),v=Math.min(r.count,Math.min(f.start+f.count,u.start+u.count));for(let y=_,x=v;y<x;y+=3){const w=r.getX(y),E=r.getX(y+1),T=r.getX(y+2);o=qs(this,p,t,pn,c,h,w,E,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const m=Math.max(0,u.start),g=Math.min(r.count,u.start+u.count);for(let f=m,p=g;f<p;f+=3){const _=r.getX(f),v=r.getX(f+1),y=r.getX(f+2);o=qs(this,i,t,pn,c,h,_,v,y),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],_=Math.max(f.start,u.start),v=Math.min(l.count,Math.min(f.start+f.count,u.start+u.count));for(let y=_,x=v;y<x;y+=3){const w=y,E=y+1,T=y+2;o=qs(this,p,t,pn,c,h,w,E,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=f.materialIndex,e.push(o))}}else{const m=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let f=m,p=g;f<p;f+=3){const _=f,v=f+1,y=f+2;o=qs(this,i,t,pn,c,h,_,v,y),o&&(o.faceIndex=Math.floor(f/3),e.push(o))}}}}function au(a,t,e,n,i,s,o,r){let l;if(t.side===qe?l=n.intersectTriangle(o,s,i,!0,r):l=n.intersectTriangle(i,s,o,t.side===Zn,r),l===null)return null;Ws.copy(r),Ws.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Ws);return c<e.near||c>e.far?null:{distance:c,point:Ws.clone(),object:a}}function qs(a,t,e,n,i,s,o,r,l){a.getVertexPosition(o,rs),a.getVertexPosition(r,as),a.getVertexPosition(l,ls);const c=au(a,t,e,n,rs,as,ls,Yo);if(c){i&&(Gs.fromBufferAttribute(i,o),Vs.fromBufferAttribute(i,r),Hs.fromBufferAttribute(i,l),c.uv=Bn.getUV(Yo,rs,as,ls,Gs,Vs,Hs,new Xt)),s&&(Gs.fromBufferAttribute(s,o),Vs.fromBufferAttribute(s,r),Hs.fromBufferAttribute(s,l),c.uv2=Bn.getUV(Yo,rs,as,ls,Gs,Vs,Hs,new Xt));const h={a:o,b:r,c:l,normal:new H,materialIndex:0};Bn.getNormal(rs,as,ls,h.normal),c.face=h}return c}class Bt extends Qn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(d,2));function g(f,p,_,v,y,x,w,E,T,M,A){const I=x/T,F=w/M,U=x/2,D=w/2,P=E/2,N=T+1,O=M+1;let K=0,z=0;const X=new H;for(let Y=0;Y<O;Y++){const it=Y*F-D;for(let B=0;B<N;B++){const tt=B*I-U;X[f]=tt*v,X[p]=it*y,X[_]=P,c.push(X.x,X.y,X.z),X[f]=0,X[p]=0,X[_]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(B/T),d.push(1-Y/M),K+=1}}for(let Y=0;Y<M;Y++)for(let it=0;it<T;it++){const B=u+it+N*Y,tt=u+it+N*(Y+1),et=u+(it+1)+N*(Y+1),G=u+(it+1)+N*Y;l.push(B,tt,G),l.push(tt,et,G),z+=6}r.addGroup(m,z,A),m+=z,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ji(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(a){const t={};for(let e=0;e<a.length;e++){const n=ji(a[e]);for(const i in n)t[i]=n[i]}return t}function lu(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function rc(a){return a.getRenderTarget()===null&&a.outputEncoding===Qt?xn:ws}const cu={clone:ji,merge:De};var hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hu,this.fragmentShader=uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=lu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ac extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Je extends ac{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=-90,Pi=1;class du extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Je(Ii,Pi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Je(Ii,Pi,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Je(Ii,Pi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const r=new Je(Ii,Pi,t,e);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const l=new Je(Ii,Pi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Je(Ii,Pi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=kn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,r),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class lc extends ke{constructor(t,e,n,i,s,o,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,n,i,s,o,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fu extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new lc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bt(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:$n});s.uniforms.tEquirect.value=e;const o=new St(i,s),r=e.minFilter;return e.minFilter===bs&&(e.minFilter=Ze),new du(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const jo=new H,pu=new H,mu=new Pe;let ci=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=jo.subVectors(n,e).cross(pu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mu.getNormalMatrix(t),i=this.coplanarPoint(jo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Oi=new Pr,Xs=new H;class Br{constructor(t=new ci,e=new ci,n=new ci,i=new ci,s=new ci,o=new ci){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],m=n[9],g=n[10],f=n[11],p=n[12],_=n[13],v=n[14],y=n[15];return e[0].setComponents(r-i,d-l,f-u,y-p).normalize(),e[1].setComponents(r+i,d+l,f+u,y+p).normalize(),e[2].setComponents(r+s,d+c,f+m,y+_).normalize(),e[3].setComponents(r-s,d-c,f-m,y-_).normalize(),e[4].setComponents(r-o,d-h,f-g,y-v).normalize(),e[5].setComponents(r+o,d+h,f+g,y+v).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSprite(t){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Xs.x=i.normal.x>0?t.max.x:t.min.x,Xs.y=i.normal.y>0?t.max.y:t.min.y,Xs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cc(){let a=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function gu(a,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,m=h.updateRange;a.bindBuffer(d,c),m.count===-1?a.bufferSubData(d,0,u):(e?a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:o,remove:r,update:l}}class zr extends Qn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,r=Math.floor(n),l=Math.floor(i),c=r+1,h=l+1,d=t/r,u=e/l,m=[],g=[],f=[],p=[];for(let _=0;_<h;_++){const v=_*u-o;for(let y=0;y<c;y++){const x=y*d-s;g.push(x,-v,0),f.push(0,0,1),p.push(y/r),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<r;v++){const y=v+c*_,x=v+c*(_+1),w=v+1+c*(_+1),E=v+1+c*_;m.push(y,x,E),m.push(x,w,E)}this.setIndex(m),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(f,3)),this.setAttribute("uv",new cn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.width,t.height,t.widthSegments,t.heightSegments)}}var vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,_u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Su="vec3 transformed = vec3( position );",wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Cu=`#ifdef USE_IRIDESCENCE
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
#endif`,Au=`#ifdef USE_BUMPMAP
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
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bu=`#define PI 3.141592653589793
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
#endif`,ku=`vec3 transformedNormal = objectNormal;
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
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qu=`#ifdef USE_ENVMAP
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
#endif`,Xu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ku=`#ifdef USE_ENVMAP
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
#endif`,Yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
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
#endif`,$u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ju=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,td=`#ifdef USE_GRADIENTMAP
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
}`,ed=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
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
#endif`,rd=`#if defined( USE_ENVMAP )
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
#endif`,ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ud=`PhysicalMaterial material;
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
#endif`,dd=`struct PhysicalMaterial {
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
}`,fd=`
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
#endif`,pd=`#if defined( RE_IndirectDiffuse )
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
#endif`,md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ad=`#ifdef USE_MORPHNORMALS
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
#endif`,Td=`#ifdef USE_MORPHTARGETS
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
#endif`,Rd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Dd=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nd=`#ifdef USE_NORMALMAP
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
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zd=`float getShadowMask() {
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
}`,Jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qd=`#ifdef USE_SKINNING
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
#endif`,tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ef=`#ifdef USE_SKINNING
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
#endif`,nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,af=`#ifdef USE_TRANSMISSION
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
#endif`,lf=`#ifdef USE_TRANSMISSION
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
#endif`,cf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,hf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,df=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ff=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,pf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vf=`uniform sampler2D t2D;
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bf=`#include <common>
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
}`,Sf=`#if DEPTH_PACKING == 3200
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
}`,wf=`#define DISTANCE
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
}`,Ef=`#define DISTANCE
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tf=`uniform float scale;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Lf=`#include <common>
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
}`,Df=`uniform vec3 diffuse;
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
}`,If=`#define LAMBERT
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
}`,Pf=`#define LAMBERT
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
}`,Of=`#define MATCAP
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
}`,Nf=`#define MATCAP
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
}`,Bf=`#define NORMAL
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
}`,kf=`#define PHONG
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
}`,Ff=`#define PHONG
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
}`,Uf=`#define STANDARD
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
}`,Gf=`#define STANDARD
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
}`,Vf=`#define TOON
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
}`,Hf=`#define TOON
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
}`,Wf=`uniform float size;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Xf=`#include <common>
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
}`,Kf=`uniform vec3 color;
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
}`,Yf=`uniform float rotation;
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
}`,jf=`uniform vec3 diffuse;
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
}`,Dt={alphamap_fragment:vu,alphamap_pars_fragment:_u,alphatest_fragment:yu,alphatest_pars_fragment:xu,aomap_fragment:Mu,aomap_pars_fragment:bu,begin_vertex:Su,beginnormal_vertex:wu,bsdfs:Eu,iridescence_fragment:Cu,bumpmap_pars_fragment:Au,clipping_planes_fragment:Tu,clipping_planes_pars_fragment:Ru,clipping_planes_pars_vertex:Lu,clipping_planes_vertex:Du,color_fragment:Iu,color_pars_fragment:Pu,color_pars_vertex:Ou,color_vertex:Nu,common:Bu,cube_uv_reflection_fragment:zu,defaultnormal_vertex:ku,displacementmap_pars_vertex:Fu,displacementmap_vertex:Uu,emissivemap_fragment:Gu,emissivemap_pars_fragment:Vu,encodings_fragment:Hu,encodings_pars_fragment:Wu,envmap_fragment:qu,envmap_common_pars_fragment:Xu,envmap_pars_fragment:Ku,envmap_pars_vertex:Yu,envmap_physical_pars_fragment:rd,envmap_vertex:ju,fog_vertex:$u,fog_pars_vertex:Zu,fog_fragment:Ju,fog_pars_fragment:Qu,gradientmap_pars_fragment:td,lightmap_fragment:ed,lightmap_pars_fragment:nd,lights_lambert_fragment:id,lights_lambert_pars_fragment:sd,lights_pars_begin:od,lights_toon_fragment:ad,lights_toon_pars_fragment:ld,lights_phong_fragment:cd,lights_phong_pars_fragment:hd,lights_physical_fragment:ud,lights_physical_pars_fragment:dd,lights_fragment_begin:fd,lights_fragment_maps:pd,lights_fragment_end:md,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:_d,logdepthbuf_vertex:yd,map_fragment:xd,map_pars_fragment:Md,map_particle_fragment:bd,map_particle_pars_fragment:Sd,metalnessmap_fragment:wd,metalnessmap_pars_fragment:Ed,morphcolor_vertex:Cd,morphnormal_vertex:Ad,morphtarget_pars_vertex:Td,morphtarget_vertex:Rd,normal_fragment_begin:Ld,normal_fragment_maps:Dd,normal_pars_fragment:Id,normal_pars_vertex:Pd,normal_vertex:Od,normalmap_pars_fragment:Nd,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:kd,iridescence_pars_fragment:Fd,output_fragment:Ud,packing:Gd,premultiplied_alpha_fragment:Vd,project_vertex:Hd,dithering_fragment:Wd,dithering_pars_fragment:qd,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:Yd,shadowmap_pars_vertex:jd,shadowmap_vertex:$d,shadowmask_pars_fragment:Zd,skinbase_vertex:Jd,skinning_pars_vertex:Qd,skinning_vertex:tf,skinnormal_vertex:ef,specularmap_fragment:nf,specularmap_pars_fragment:sf,tonemapping_fragment:of,tonemapping_pars_fragment:rf,transmission_fragment:af,transmission_pars_fragment:lf,uv_pars_fragment:cf,uv_pars_vertex:hf,uv_vertex:uf,uv2_pars_fragment:df,uv2_pars_vertex:ff,uv2_vertex:pf,worldpos_vertex:mf,background_vert:gf,background_frag:vf,backgroundCube_vert:_f,backgroundCube_frag:yf,cube_vert:xf,cube_frag:Mf,depth_vert:bf,depth_frag:Sf,distanceRGBA_vert:wf,distanceRGBA_frag:Ef,equirect_vert:Cf,equirect_frag:Af,linedashed_vert:Tf,linedashed_frag:Rf,meshbasic_vert:Lf,meshbasic_frag:Df,meshlambert_vert:If,meshlambert_frag:Pf,meshmatcap_vert:Of,meshmatcap_frag:Nf,meshnormal_vert:Bf,meshnormal_frag:zf,meshphong_vert:kf,meshphong_frag:Ff,meshphysical_vert:Uf,meshphysical_frag:Gf,meshtoon_vert:Vf,meshtoon_frag:Hf,points_vert:Wf,points_frag:qf,shadow_vert:Xf,shadow_frag:Kf,sprite_vert:Yf,sprite_frag:jf},ft={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pe},uv2Transform:{value:new Pe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}}},Mn={basic:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:De([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:De([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:De([ft.points,ft.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:De([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:De([ft.common,ft.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:De([ft.sprite,ft.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:De([ft.common,ft.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:De([ft.lights,ft.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};Mn.physical={uniforms:De([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Ks={r:0,b:0,g:0};function $f(a,t,e,n,i,s,o){const r=new Vt(0);let l=s===!0?0:1,c,h,d=null,u=0,m=null;function g(p,_){let v=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y));const x=a.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(y=null),y===null?f(r,l):y&&y.isColor&&(f(y,1),v=!0),(a.autoClear||v)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),y&&(y.isCubeTexture||y.mapping===mo)?(h===void 0&&(h=new St(new Bt(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:ji(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=y.encoding!==Qt,(d!==y||u!==y.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,m=a.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new St(new zr(2,2),new Mi({name:"BackgroundMaterial",uniforms:ji(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=y.encoding!==Qt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,m=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,_){p.getRGB(Ks,rc(a)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,_,o)}return{getClearColor:function(){return r},setClearColor:function(p,_=1){r.set(p),l=_,f(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(r,l)},render:g}}function Zf(a,t,e,n){const i=a.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},l=p(null);let c=l,h=!1;function d(P,N,O,K,z){let X=!1;if(o){const Y=f(K,O,N);c!==Y&&(c=Y,m(c.object)),X=_(P,K,O,z),X&&v(P,K,O,z)}else{const Y=N.wireframe===!0;(c.geometry!==K.id||c.program!==O.id||c.wireframe!==Y)&&(c.geometry=K.id,c.program=O.id,c.wireframe=Y,X=!0)}z!==null&&e.update(z,34963),(X||h)&&(h=!1,M(P,N,O,K),z!==null&&a.bindBuffer(34963,e.get(z).buffer))}function u(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?a.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?a.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function f(P,N,O){const K=O.wireframe===!0;let z=r[P.id];z===void 0&&(z={},r[P.id]=z);let X=z[N.id];X===void 0&&(X={},z[N.id]=X);let Y=X[K];return Y===void 0&&(Y=p(u()),X[K]=Y),Y}function p(P){const N=[],O=[],K=[];for(let z=0;z<i;z++)N[z]=0,O[z]=0,K[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:K,object:P,attributes:{},index:null}}function _(P,N,O,K){const z=c.attributes,X=N.attributes;let Y=0;const it=O.getAttributes();for(const B in it)if(it[B].location>=0){const et=z[B];let G=X[B];if(G===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),et===void 0||et.attribute!==G||G&&et.data!==G.data)return!0;Y++}return c.attributesNum!==Y||c.index!==K}function v(P,N,O,K){const z={},X=N.attributes;let Y=0;const it=O.getAttributes();for(const B in it)if(it[B].location>=0){let et=X[B];et===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));const G={};G.attribute=et,et&&et.data&&(G.data=et.data),z[B]=G,Y++}c.attributes=z,c.attributesNum=Y,c.index=K}function y(){const P=c.newAttributes;for(let N=0,O=P.length;N<O;N++)P[N]=0}function x(P){w(P,0)}function w(P,N){const O=c.newAttributes,K=c.enabledAttributes,z=c.attributeDivisors;O[P]=1,K[P]===0&&(a.enableVertexAttribArray(P),K[P]=1),z[P]!==N&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),z[P]=N)}function E(){const P=c.newAttributes,N=c.enabledAttributes;for(let O=0,K=N.length;O<K;O++)N[O]!==P[O]&&(a.disableVertexAttribArray(O),N[O]=0)}function T(P,N,O,K,z,X){n.isWebGL2===!0&&(O===5124||O===5125)?a.vertexAttribIPointer(P,N,O,z,X):a.vertexAttribPointer(P,N,O,K,z,X)}function M(P,N,O,K){if(n.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const z=K.attributes,X=O.getAttributes(),Y=N.defaultAttributeValues;for(const it in X){const B=X[it];if(B.location>=0){let tt=z[it];if(tt===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),tt!==void 0){const et=tt.normalized,G=tt.itemSize,lt=e.get(tt);if(lt===void 0)continue;const ct=lt.buffer,ht=lt.type,rt=lt.bytesPerElement;if(tt.isInterleavedBufferAttribute){const ut=tt.data,Mt=ut.stride,wt=tt.offset;if(ut.isInstancedInterleavedBuffer){for(let Lt=0;Lt<B.locationSize;Lt++)w(B.location+Lt,ut.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Lt=0;Lt<B.locationSize;Lt++)x(B.location+Lt);a.bindBuffer(34962,ct);for(let Lt=0;Lt<B.locationSize;Lt++)T(B.location+Lt,G/B.locationSize,ht,et,Mt*rt,(wt+G/B.locationSize*Lt)*rt)}else{if(tt.isInstancedBufferAttribute){for(let ut=0;ut<B.locationSize;ut++)w(B.location+ut,tt.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ut=0;ut<B.locationSize;ut++)x(B.location+ut);a.bindBuffer(34962,ct);for(let ut=0;ut<B.locationSize;ut++)T(B.location+ut,G/B.locationSize,ht,et,G*rt,G/B.locationSize*ut*rt)}}else if(Y!==void 0){const et=Y[it];if(et!==void 0)switch(et.length){case 2:a.vertexAttrib2fv(B.location,et);break;case 3:a.vertexAttrib3fv(B.location,et);break;case 4:a.vertexAttrib4fv(B.location,et);break;default:a.vertexAttrib1fv(B.location,et)}}}}E()}function A(){U();for(const P in r){const N=r[P];for(const O in N){const K=N[O];for(const z in K)g(K[z].object),delete K[z];delete N[O]}delete r[P]}}function I(P){if(r[P.id]===void 0)return;const N=r[P.id];for(const O in N){const K=N[O];for(const z in K)g(K[z].object),delete K[z];delete N[O]}delete r[P.id]}function F(P){for(const N in r){const O=r[N];if(O[P.id]===void 0)continue;const K=O[P.id];for(const z in K)g(K[z].object),delete K[z];delete O[P.id]}}function U(){D(),h=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:x,disableUnusedAttributes:E}}function Jf(a,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function r(c,h){a.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,m;if(i)u=a,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,h,d),e.update(h,s,d)}this.setMode=o,this.render=r,this.renderInstances=l}function Qf(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let r=e.precision!==void 0?e.precision:"highp";const l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=a.getParameter(34930),u=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),f=a.getParameter(34921),p=a.getParameter(36347),_=a.getParameter(36348),v=a.getParameter(36349),y=u>0,x=o||t.has("OES_texture_float"),w=y&&x,E=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:E}}function tp(a){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ci,r=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,_=a.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const v=s?0:n,y=v*4;let x=_.clippingState||null;l.value=x,x=h(g,u,y,m);for(let w=0;w!==y;++w)x[w]=e[w];_.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const f=d!==null?d.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const _=m+f*4,v=u.matrixWorldInverse;r.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,x=m;y!==f;++y,x+=4)o.copy(d[y]).applyMatrix4(v,r),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function ep(a){let t=new WeakMap;function e(o,r){return r===gr?o.mapping=Xi:r===vr&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===gr||r===vr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fu(l.height/2);return c.fromEquirectangularTexture(a,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class hc extends ac{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,r=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,ka=[.125,.215,.35,.446,.526,.582],ui=20,$o=new hc,Fa=new Vt;let Zo=null;const hi=(1+Math.sqrt(5))/2,Ni=1/hi,Ua=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,hi,Ni),new H(0,hi,-Ni),new H(Ni,0,hi),new H(-Ni,0,hi),new H(hi,Ni,0),new H(-hi,Ni,0)];class Ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Zo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo),t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Ss,format:an,encoding:_i,depthBuffer:!1},i=Va(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Va(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(s)),this._blurMaterial=ip(s,t,e)}return i}_compileMaterial(t){const e=new St(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,n,i){const r=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Fa),h.toneMapping=kn,h.autoClear=!1;const m=new Nr({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new St(new Bt,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy(Fa),f=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(r.up.set(0,l[_],0),r.lookAt(c[_],0,0)):v===1?(r.up.set(0,0,l[_]),r.lookAt(0,c[_],0)):(r.up.set(0,l[_],0),r.lookAt(0,0,c[_]));const y=this._cubeSize;Ys(i,v*y,_>2?y:0,y,y),h.setRenderTarget(i),f&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Xi||t.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ha());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const l=this._cubeSize;Ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ua[(i-1)%Ua.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new St(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ui-1),f=s/g,p=isFinite(s)?1+Math.floor(h*f):ui;p>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ui}`);const _=[];let v=0;for(let T=0;T<ui;++T){const M=T/f,A=Math.exp(-M*M/2);_.push(A),T===0?v+=A:T<p&&(v+=2*A)}for(let T=0;T<_.length;T++)_[T]=_[T]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=_,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const x=this._sizeLods[i],w=3*x*(i>y-Gi?i-y+Gi:0),E=4*(this._cubeSize-x);Ys(e,w,E,3*x,2*x),l.setRenderTarget(e),l.render(d,$o)}}function np(a){const t=[],e=[],n=[];let i=a;const s=a-Gi+1+ka.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);e.push(r);let l=1/r;o>a-Gi?l=ka[o-a+Gi-1]:o===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,f=3,p=2,_=1,v=new Float32Array(f*g*m),y=new Float32Array(p*g*m),x=new Float32Array(_*g*m);for(let E=0;E<m;E++){const T=E%3*2/3-1,M=E>2?0:-1,A=[T,M,0,T+2/3,M,0,T+2/3,M+1,0,T,M,0,T+2/3,M+1,0,T,M+1,0];v.set(A,f*g*E),y.set(u,p*g*E);const I=[E,E,E,E,E,E];x.set(I,_*g*E)}const w=new Qn;w.setAttribute("position",new bn(v,f)),w.setAttribute("uv",new bn(y,p)),w.setAttribute("faceIndex",new bn(x,_)),t.push(w),i>Gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Va(a,t,e){const n=new xi(a,t,e);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function ip(a,t,e){const n=new Float32Array(ui),i=new H(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kr(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ha(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kr(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Wa(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function kr(){return`

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
	`}function sp(a){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===gr||l===vr,h=l===Xi||l===Ki;if(c||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=t.get(r);return e===null&&(e=new Ga(a)),d=c?e.fromEquirectangular(r,d):e.fromCubemap(r,d),t.set(r,d),d.texture}else{if(t.has(r))return t.get(r).texture;{const d=r.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Ga(a));const u=c?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,u),r.addEventListener("dispose",s),u.texture}else return null}}}return r}function i(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function op(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rp(a,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function r(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],34962);const m=d.morphAttributes;for(const g in m){const f=m[g];for(let p=0,_=f.length;p<_;p++)t.update(f[p],34962)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let f=0;if(m!==null){const v=m.array;f=m.version;for(let y=0,x=v.length;y<x;y+=3){const w=v[y+0],E=v[y+1],T=v[y+2];u.push(w,E,E,T,T,w)}}else{const v=g.array;f=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const w=y+0,E=y+1,T=y+2;u.push(w,E,E,T,T,w)}}const p=new(Jl(u)?oc:sc)(u,1);p.version=f;const _=s.get(d);_&&t.remove(_),s.set(d,p)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:r,update:l,getWireframeAttribute:h}}function ap(a,t,e,n){const i=n.isWebGL2;let s;function o(u){s=u}let r,l;function c(u){r=u.type,l=u.bytesPerElement}function h(u,m){a.drawElements(s,m,r,u*l),e.update(m,s,1)}function d(u,m,g){if(g===0)return;let f,p;if(i)f=a,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,m,r,u*l,g),e.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function lp(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(e.calls++,o){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function cp(a,t){return a[0]-t[0]}function hp(a,t){return Math.abs(t[1])-Math.abs(a[1])}function up(a,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new Me,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==f){let N=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let A=0;y===!0&&(A=1),x===!0&&(A=2),w===!0&&(A=3);let I=h.attributes.position.count*A,F=1;I>t.maxTextureSize&&(F=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const U=new Float32Array(I*F*4*f),D=new ec(U,I,F,f);D.type=mi,D.needsUpdate=!0;const P=A*4;for(let O=0;O<f;O++){const K=E[O],z=T[O],X=M[O],Y=I*F*4*O;for(let it=0;it<K.count;it++){const B=it*P;y===!0&&(o.fromBufferAttribute(K,it),U[Y+B+0]=o.x,U[Y+B+1]=o.y,U[Y+B+2]=o.z,U[Y+B+3]=0),x===!0&&(o.fromBufferAttribute(z,it),U[Y+B+4]=o.x,U[Y+B+5]=o.y,U[Y+B+6]=o.z,U[Y+B+7]=0),w===!0&&(o.fromBufferAttribute(X,it),U[Y+B+8]=o.x,U[Y+B+9]=o.y,U[Y+B+10]=o.z,U[Y+B+11]=X.itemSize===4?o.w:1)}}p={count:f,texture:D,size:new Xt(I,F)},s.set(h,p),h.addEventListener("dispose",N)}let _=0;for(let y=0;y<u.length;y++)_+=u[y];const v=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(a,"morphTargetBaseInfluence",v),d.getUniforms().setValue(a,"morphTargetInfluences",u),d.getUniforms().setValue(a,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let f=n[h.id];if(f===void 0||f.length!==g){f=[];for(let x=0;x<g;x++)f[x]=[x,0];n[h.id]=f}for(let x=0;x<g;x++){const w=f[x];w[0]=x,w[1]=u[x]}f.sort(hp);for(let x=0;x<8;x++)x<g&&f[x][1]?(r[x][0]=f[x][0],r[x][1]=f[x][1]):(r[x][0]=Number.MAX_SAFE_INTEGER,r[x][1]=0);r.sort(cp);const p=h.morphAttributes.position,_=h.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const w=r[x],E=w[0],T=w[1];E!==Number.MAX_SAFE_INTEGER&&T?(p&&h.getAttribute("morphTarget"+x)!==p[E]&&h.setAttribute("morphTarget"+x,p[E]),_&&h.getAttribute("morphNormal"+x)!==_[E]&&h.setAttribute("morphNormal"+x,_[E]),i[x]=T,v+=T):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),_&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const y=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(a,"morphTargetBaseInfluence",y),d.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function dp(a,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function o(){i=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const uc=new ke,dc=new ec,fc=new Zh,pc=new lc,qa=[],Xa=[],Ka=new Float32Array(16),Ya=new Float32Array(9),ja=new Float32Array(4);function ts(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=qa[i];if(s===void 0&&(s=new Float32Array(i),qa[i]=s),t!==0){n.toArray(s,0);for(let o=1,r=0;o!==t;++o)r+=e,a[o].toArray(s,r)}return s}function fe(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function pe(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function vo(a,t){let e=Xa[t];e===void 0&&(e=new Int32Array(t),Xa[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function fp(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function pp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;a.uniform2fv(this.addr,t),pe(e,t)}}function mp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;a.uniform3fv(this.addr,t),pe(e,t)}}function gp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;a.uniform4fv(this.addr,t),pe(e,t)}}function vp(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;ja.set(n),a.uniformMatrix2fv(this.addr,!1,ja),pe(e,n)}}function _p(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Ya.set(n),a.uniformMatrix3fv(this.addr,!1,Ya),pe(e,n)}}function yp(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Ka.set(n),a.uniformMatrix4fv(this.addr,!1,Ka),pe(e,n)}}function xp(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Mp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;a.uniform2iv(this.addr,t),pe(e,t)}}function bp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;a.uniform3iv(this.addr,t),pe(e,t)}}function Sp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;a.uniform4iv(this.addr,t),pe(e,t)}}function wp(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function Ep(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;a.uniform2uiv(this.addr,t),pe(e,t)}}function Cp(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;a.uniform3uiv(this.addr,t),pe(e,t)}}function Ap(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;a.uniform4uiv(this.addr,t),pe(e,t)}}function Tp(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||uc,i)}function Rp(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||fc,i)}function Lp(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pc,i)}function Dp(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||dc,i)}function Ip(a){switch(a){case 5126:return fp;case 35664:return pp;case 35665:return mp;case 35666:return gp;case 35674:return vp;case 35675:return _p;case 35676:return yp;case 5124:case 35670:return xp;case 35667:case 35671:return Mp;case 35668:case 35672:return bp;case 35669:case 35673:return Sp;case 5125:return wp;case 36294:return Ep;case 36295:return Cp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Dp}}function Pp(a,t){a.uniform1fv(this.addr,t)}function Op(a,t){const e=ts(t,this.size,2);a.uniform2fv(this.addr,e)}function Np(a,t){const e=ts(t,this.size,3);a.uniform3fv(this.addr,e)}function Bp(a,t){const e=ts(t,this.size,4);a.uniform4fv(this.addr,e)}function zp(a,t){const e=ts(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function kp(a,t){const e=ts(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function Fp(a,t){const e=ts(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function Up(a,t){a.uniform1iv(this.addr,t)}function Gp(a,t){a.uniform2iv(this.addr,t)}function Vp(a,t){a.uniform3iv(this.addr,t)}function Hp(a,t){a.uniform4iv(this.addr,t)}function Wp(a,t){a.uniform1uiv(this.addr,t)}function qp(a,t){a.uniform2uiv(this.addr,t)}function Xp(a,t){a.uniform3uiv(this.addr,t)}function Kp(a,t){a.uniform4uiv(this.addr,t)}function Yp(a,t,e){const n=this.cache,i=t.length,s=vo(e,i);fe(n,s)||(a.uniform1iv(this.addr,s),pe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||uc,s[o])}function jp(a,t,e){const n=this.cache,i=t.length,s=vo(e,i);fe(n,s)||(a.uniform1iv(this.addr,s),pe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||fc,s[o])}function $p(a,t,e){const n=this.cache,i=t.length,s=vo(e,i);fe(n,s)||(a.uniform1iv(this.addr,s),pe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||pc,s[o])}function Zp(a,t,e){const n=this.cache,i=t.length,s=vo(e,i);fe(n,s)||(a.uniform1iv(this.addr,s),pe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||dc,s[o])}function Jp(a){switch(a){case 5126:return Pp;case 35664:return Op;case 35665:return Np;case 35666:return Bp;case 35674:return zp;case 35675:return kp;case 35676:return Fp;case 5124:case 35670:return Up;case 35667:case 35671:return Gp;case 35668:case 35672:return Vp;case 35669:case 35673:return Hp;case 5125:return Wp;case 36294:return qp;case 36295:return Xp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Zp}}class Qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Ip(e.type)}}class tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Jp(e.type)}}class em{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(t,e[r.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function $a(a,t){a.seq.push(t),a.map[t.id]=t}function nm(a,t,e){const n=a.name,i=n.length;for(Jo.lastIndex=0;;){const s=Jo.exec(n),o=Jo.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===i){$a(e,c===void 0?new Qp(r,a,t):new tm(r,a,t));break}else{let d=e.map[r];d===void 0&&(d=new em(r),$a(e,d)),e=d}}}class so{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);nm(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const r=e[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Za(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}let im=0;function sm(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}function om(a){switch(a){case _i:return["Linear","( value )"];case Qt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Ja(a,t,e){const n=a.getShaderParameter(t,35713),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+sm(a.getShaderSource(t),o)}else return i}function rm(a,t){const e=om(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function am(a,t){let e;switch(t){case oh:e="Linear";break;case rh:e="Reinhard";break;case ah:e="OptimizedCineon";break;case lh:e="ACESFilmic";break;case ch:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function lm(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function cm(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hm(a,t){const e={},n=a.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[o]={type:s.type,location:a.getAttribLocation(t,o),locationSize:r}}return e}function gs(a){return a!==""}function Qa(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tl(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const um=/^[ \t]*#include +<([\w\d./]+)>/gm;function br(a){return a.replace(um,dm)}function dm(a,t){const e=Dt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return br(e)}const fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(a){return a.replace(fm,pm)}function pm(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nl(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mm(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ps&&(t="SHADOWMAP_TYPE_VSM"),t}function gm(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Xi:case Ki:t="ENVMAP_TYPE_CUBE";break;case mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vm(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function _m(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Xl:t="ENVMAP_BLENDING_MULTIPLY";break;case ih:t="ENVMAP_BLENDING_MIX";break;case sh:t="ENVMAP_BLENDING_ADD";break}return t}function ym(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xm(a,t,e,n){const i=a.getContext(),s=e.defines;let o=e.vertexShader,r=e.fragmentShader;const l=mm(e),c=gm(e),h=vm(e),d=_m(e),u=ym(e),m=e.isWebGL2?"":lm(e),g=cm(s),f=i.createProgram();let p,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(gs).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(gs).join(`
`),_.length>0&&(_+=`
`)):(p=[nl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),_=[m,nl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==kn?am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.encodings_pars_fragment,rm("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),o=br(o),o=Qa(o,e),o=tl(o,e),r=br(r),r=Qa(r,e),r=tl(r,e),o=el(o),r=el(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+p+o,x=v+_+r,w=Za(i,35633,y),E=Za(i,35632,x);if(i.attachShader(f,w),i.attachShader(f,E),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),a.debug.checkShaderErrors){const A=i.getProgramInfoLog(f).trim(),I=i.getShaderInfoLog(w).trim(),F=i.getShaderInfoLog(E).trim();let U=!0,D=!0;if(i.getProgramParameter(f,35714)===!1){U=!1;const P=Ja(i,w,"vertex"),N=Ja(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+A+`
`+P+`
`+N)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(I===""||F==="")&&(D=!1);D&&(this.diagnostics={runnable:U,programLog:A,vertexShader:{log:I,prefix:p},fragmentShader:{log:F,prefix:_}})}i.deleteShader(w),i.deleteShader(E);let T;this.getUniforms=function(){return T===void 0&&(T=new so(i,f)),T};let M;return this.getAttributes=function(){return M===void 0&&(M=hm(i,f)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=im++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=E,this}let Mm=0;class bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sm(t),e.set(t,n)),n}}class Sm{constructor(t){this.id=Mm++,this.code=t,this.usedTimes=0}}function wm(a,t,e,n,i,s,o){const r=new Or,l=new bm,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M,A,I,F,U){const D=F.fog,P=U.geometry,N=M.isMeshStandardMaterial?F.environment:null,O=(M.isMeshStandardMaterial?e:t).get(M.envMap||N),K=O&&O.mapping===mo?O.image.height:null,z=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Y=X!==void 0?X.length:0;let it=0;P.morphAttributes.position!==void 0&&(it=1),P.morphAttributes.normal!==void 0&&(it=2),P.morphAttributes.color!==void 0&&(it=3);let B,tt,et,G;if(z){const Mt=Mn[z];B=Mt.vertexShader,tt=Mt.fragmentShader}else B=M.vertexShader,tt=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),G=l.getFragmentShaderID(M);const lt=a.getRenderTarget(),ct=M.alphaTest>0,ht=M.clearcoat>0,rt=M.iridescence>0;return{isWebGL2:h,shaderID:z,shaderName:M.type,vertexShader:B,fragmentShader:tt,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:G,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:u,outputEncoding:lt===null?a.outputEncoding:lt.isXRRenderTarget===!0?lt.texture.encoding:_i,map:!!M.map,matcap:!!M.matcap,envMap:!!O,envMapMode:O&&O.mapping,envMapCubeUVHeight:K,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Th,tangentSpaceNormalMap:M.normalMapType===jl,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Qt,clearcoat:ht,clearcoatMap:ht&&!!M.clearcoatMap,clearcoatRoughnessMap:ht&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ht&&!!M.clearcoatNormalMap,iridescence:rt,iridescenceMap:rt&&!!M.iridescenceMap,iridescenceThicknessMap:rt&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Hi,alphaMap:!!M.alphaMap,alphaTest:ct,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!P.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:it,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:M.toneMapped?a.toneMapping:kn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zn,flipSided:M.side===qe,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)A.push(I),A.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(A,M),v(A,M),A.push(a.outputEncoding)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputEncoding),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.combine),M.push(A.vertexUvs),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){r.disableAll(),A.isWebGL2&&r.enable(0),A.supportsVertexTextures&&r.enable(1),A.instancing&&r.enable(2),A.instancingColor&&r.enable(3),A.map&&r.enable(4),A.matcap&&r.enable(5),A.envMap&&r.enable(6),A.lightMap&&r.enable(7),A.aoMap&&r.enable(8),A.emissiveMap&&r.enable(9),A.bumpMap&&r.enable(10),A.normalMap&&r.enable(11),A.objectSpaceNormalMap&&r.enable(12),A.tangentSpaceNormalMap&&r.enable(13),A.clearcoat&&r.enable(14),A.clearcoatMap&&r.enable(15),A.clearcoatRoughnessMap&&r.enable(16),A.clearcoatNormalMap&&r.enable(17),A.iridescence&&r.enable(18),A.iridescenceMap&&r.enable(19),A.iridescenceThicknessMap&&r.enable(20),A.displacementMap&&r.enable(21),A.specularMap&&r.enable(22),A.roughnessMap&&r.enable(23),A.metalnessMap&&r.enable(24),A.gradientMap&&r.enable(25),A.alphaMap&&r.enable(26),A.alphaTest&&r.enable(27),A.vertexColors&&r.enable(28),A.vertexAlphas&&r.enable(29),A.vertexUvs&&r.enable(30),A.vertexTangents&&r.enable(31),A.uvsVertexOnly&&r.enable(32),M.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.skinning&&r.enable(4),A.morphTargets&&r.enable(5),A.morphNormals&&r.enable(6),A.morphColors&&r.enable(7),A.premultipliedAlpha&&r.enable(8),A.shadowMapEnabled&&r.enable(9),A.useLegacyLights&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.specularIntensityMap&&r.enable(15),A.specularColorMap&&r.enable(16),A.transmission&&r.enable(17),A.transmissionMap&&r.enable(18),A.thicknessMap&&r.enable(19),A.sheen&&r.enable(20),A.sheenColorMap&&r.enable(21),A.sheenRoughnessMap&&r.enable(22),A.decodeVideoTexture&&r.enable(23),A.opaque&&r.enable(24),M.push(r.mask)}function y(M){const A=g[M.type];let I;if(A){const F=Mn[A];I=cu.clone(F.uniforms)}else I=M.uniforms;return I}function x(M,A){let I;for(let F=0,U=c.length;F<U;F++){const D=c[F];if(D.cacheKey===A){I=D,++I.usedTimes;break}}return I===void 0&&(I=new xm(a,A,M,s),c.push(I)),I}function w(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function T(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:y,acquireProgram:x,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:T}}function Em(){let a=new WeakMap;function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function e(s){a.delete(s)}function n(s,o,r){a.get(s)[o]=r}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Cm(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function il(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function sl(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,m,g,f,p){let _=a[t];return _===void 0?(_={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:f,group:p},a[t]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=f,_.group=p),t++,_}function r(d,u,m,g,f,p){const _=o(d,u,m,g,f,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function l(d,u,m,g,f,p){const _=o(d,u,m,g,f,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function c(d,u){e.length>1&&e.sort(d||Cm),n.length>1&&n.sort(u||il),i.length>1&&i.sort(u||il)}function h(){for(let d=t,u=a.length;d<u;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:r,unshift:l,finish:h,sort:c}}function Am(){let a=new WeakMap;function t(n,i){const s=a.get(n);let o;return s===void 0?(o=new sl,a.set(n,[o])):i>=s.length?(o=new sl,s.push(o)):o=s[i],o}function e(){a=new WeakMap}return{get:t,dispose:e}}function Tm(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Vt};break;case"SpotLight":e={position:new H,direction:new H,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new H,halfWidth:new H,halfHeight:new H};break}return a[t.id]=e,e}}}function Rm(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let Lm=0;function Dm(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function Im(a,t){const e=new Tm,n=Rm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new H);const s=new H,o=new de,r=new de;function l(h,d){let u=0,m=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,p=0,_=0,v=0,y=0,x=0,w=0,E=0,T=0,M=0;h.sort(Dm);const A=d===!0?Math.PI:1;for(let F=0,U=h.length;F<U;F++){const D=h[F],P=D.color,N=D.intensity,O=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=P.r*N*A,m+=P.g*N*A,g+=P.b*N*A;else if(D.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],N);else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const X=D.shadow,Y=n.get(D);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=D.shadow.matrix,x++}i.directional[f]=z,f++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(P).multiplyScalar(N*A),z.distance=O,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,i.spot[_]=z;const X=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,X.updateMatrices(D),D.castShadow&&M++),i.spotLightMatrix[_]=X.matrix,D.castShadow){const Y=n.get(D);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=K,E++}_++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(P).multiplyScalar(N),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[v]=z,v++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*A),z.distance=D.distance,z.decay=D.decay,D.castShadow){const X=D.shadow,Y=n.get(D);Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,Y.shadowCameraNear=X.camera.near,Y.shadowCameraFar=X.camera.far,i.pointShadow[p]=Y,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=D.shadow.matrix,w++}i.point[p]=z,p++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(N*A),z.groundColor.copy(D.groundColor).multiplyScalar(N*A),i.hemi[y]=z,y++}}v>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==v||I.hemiLength!==y||I.numDirectionalShadows!==x||I.numPointShadows!==w||I.numSpotShadows!==E||I.numSpotMaps!==T)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=v,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=E+T-M,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=M,I.directionalLength=f,I.pointLength=p,I.spotLength=_,I.rectAreaLength=v,I.hemiLength=y,I.numDirectionalShadows=x,I.numPointShadows=w,I.numSpotShadows=E,I.numSpotMaps=T,i.version=Lm++)}function c(h,d){let u=0,m=0,g=0,f=0,p=0;const _=d.matrixWorldInverse;for(let v=0,y=h.length;v<y;v++){const x=h[v];if(x.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),u++}else if(x.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const w=i.rectArea[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),r.identity(),o.copy(x.matrixWorld),o.premultiply(_),r.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),f++}else if(x.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),m++}else if(x.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function ol(a,t){const e=new Im(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function r(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:r}}function Pm(a,t){let e=new WeakMap;function n(s,o=0){const r=e.get(s);let l;return r===void 0?(l=new ol(a,t),e.set(s,[l])):o>=r.length?(l=new ol(a,t),r.push(l)):l=r[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Om extends Rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nm extends Rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bm=`void main() {
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
}`;function km(a,t,e){let n=new Br;const i=new Xt,s=new Xt,o=new Me,r=new Om({depthPacking:Ah}),l=new Nm,c={},h=e.maxTextureSize,d={[Zn]:qe,[qe]:Zn,[zn]:zn},u=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Bm,fragmentShader:zm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Qn;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new St(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl,this.render=function(x,w,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const T=a.getRenderTarget(),M=a.getActiveCubeFace(),A=a.getActiveMipmapLevel(),I=a.state;I.setBlending($n),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let F=0,U=x.length;F<U;F++){const D=x[F],P=D.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const N=P.getFrameExtents();if(i.multiply(N),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/N.x),i.x=s.x*N.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/N.y),i.y=s.y*N.y,P.mapSize.y=s.y)),P.map===null){const K=this.type!==ps?{minFilter:ue,magFilter:ue}:{};P.map=new xi(i.x,i.y,K),P.map.texture.name=D.name+".shadowMap",P.camera.updateProjectionMatrix()}a.setRenderTarget(P.map),a.clear();const O=P.getViewportCount();for(let K=0;K<O;K++){const z=P.getViewport(K);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),I.viewport(o),P.updateMatrices(D,K),n=P.getFrustum(),y(w,E,P.camera,D,this.type)}P.isPointLightShadow!==!0&&this.type===ps&&_(P,E),P.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(T,M,A)};function _(x,w){const E=t.update(f);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new xi(i.x,i.y)),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,a.setRenderTarget(x.mapPass),a.clear(),a.renderBufferDirect(w,null,E,u,f,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,a.setRenderTarget(x.map),a.clear(),a.renderBufferDirect(w,null,E,m,f,null)}function v(x,w,E,T,M,A){let I=null;const F=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(F!==void 0)I=F;else if(I=E.isPointLight===!0?l:r,a.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=I.uuid,D=w.uuid;let P=c[U];P===void 0&&(P={},c[U]=P);let N=P[D];N===void 0&&(N=I.clone(),P[D]=N),I=N}return I.visible=w.visible,I.wireframe=w.wireframe,A===ps?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:d[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,E.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(E.matrixWorld),I.nearDistance=T,I.farDistance=M),I}function y(x,w,E,T,M){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===ps)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const F=t.update(x),U=x.material;if(Array.isArray(U)){const D=F.groups;for(let P=0,N=D.length;P<N;P++){const O=D[P],K=U[O.materialIndex];if(K&&K.visible){const z=v(x,K,T,E.near,E.far,M);a.renderBufferDirect(E,null,F,z,x,O)}}}else if(U.visible){const D=v(x,U,T,E.near,E.far,M);a.renderBufferDirect(E,null,F,D,x,null)}}const I=x.children;for(let F=0,U=I.length;F<U;F++)y(I[F],w,E,T,M)}}function Fm(a,t,e){const n=e.isWebGL2;function i(){let k=!1;const J=new Me;let ot=null;const gt=new Me(0,0,0,0);return{setMask:function(yt){ot!==yt&&!k&&(a.colorMask(yt,yt,yt,yt),ot=yt)},setLocked:function(yt){k=yt},setClear:function(yt,Zt,ve,Te,dn){dn===!0&&(yt*=Te,Zt*=Te,ve*=Te),J.set(yt,Zt,ve,Te),gt.equals(J)===!1&&(a.clearColor(yt,Zt,ve,Te),gt.copy(J))},reset:function(){k=!1,ot=null,gt.set(-1,0,0,0)}}}function s(){let k=!1,J=null,ot=null,gt=null;return{setTest:function(yt){yt?ct(2929):ht(2929)},setMask:function(yt){J!==yt&&!k&&(a.depthMask(yt),J=yt)},setFunc:function(yt){if(ot!==yt){switch(yt){case $c:a.depthFunc(512);break;case Zc:a.depthFunc(519);break;case Jc:a.depthFunc(513);break;case mr:a.depthFunc(515);break;case Qc:a.depthFunc(514);break;case th:a.depthFunc(518);break;case eh:a.depthFunc(516);break;case nh:a.depthFunc(517);break;default:a.depthFunc(515)}ot=yt}},setLocked:function(yt){k=yt},setClear:function(yt){gt!==yt&&(a.clearDepth(yt),gt=yt)},reset:function(){k=!1,J=null,ot=null,gt=null}}}function o(){let k=!1,J=null,ot=null,gt=null,yt=null,Zt=null,ve=null,Te=null,dn=null;return{setTest:function(ne){k||(ne?ct(2960):ht(2960))},setMask:function(ne){J!==ne&&!k&&(a.stencilMask(ne),J=ne)},setFunc:function(ne,Ke,fn){(ot!==ne||gt!==Ke||yt!==fn)&&(a.stencilFunc(ne,Ke,fn),ot=ne,gt=Ke,yt=fn)},setOp:function(ne,Ke,fn){(Zt!==ne||ve!==Ke||Te!==fn)&&(a.stencilOp(ne,Ke,fn),Zt=ne,ve=Ke,Te=fn)},setLocked:function(ne){k=ne},setClear:function(ne){dn!==ne&&(a.clearStencil(ne),dn=ne)},reset:function(){k=!1,J=null,ot=null,gt=null,yt=null,Zt=null,ve=null,Te=null,dn=null}}}const r=new i,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,f=[],p=null,_=!1,v=null,y=null,x=null,w=null,E=null,T=null,M=null,A=!1,I=null,F=null,U=null,D=null,P=null;const N=a.getParameter(35661);let O=!1,K=0;const z=a.getParameter(7938);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=K>=2);let X=null,Y={};const it=a.getParameter(3088),B=a.getParameter(2978),tt=new Me().fromArray(it),et=new Me().fromArray(B);function G(k,J,ot){const gt=new Uint8Array(4),yt=a.createTexture();a.bindTexture(k,yt),a.texParameteri(k,10241,9728),a.texParameteri(k,10240,9728);for(let Zt=0;Zt<ot;Zt++)a.texImage2D(J+Zt,0,6408,1,1,0,6408,5121,gt);return yt}const lt={};lt[3553]=G(3553,3553,1),lt[34067]=G(34067,34069,6),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ct(2929),l.setFunc(mr),ee(!1),Wt(Yr),ct(2884),Yt($n);function ct(k){u[k]!==!0&&(a.enable(k),u[k]=!0)}function ht(k){u[k]!==!1&&(a.disable(k),u[k]=!1)}function rt(k,J){return m[k]!==J?(a.bindFramebuffer(k,J),m[k]=J,n&&(k===36009&&(m[36160]=J),k===36160&&(m[36009]=J)),!0):!1}function ut(k,J){let ot=f,gt=!1;if(k)if(ot=g.get(J),ot===void 0&&(ot=[],g.set(J,ot)),k.isWebGLMultipleRenderTargets){const yt=k.texture;if(ot.length!==yt.length||ot[0]!==36064){for(let Zt=0,ve=yt.length;Zt<ve;Zt++)ot[Zt]=36064+Zt;ot.length=yt.length,gt=!0}}else ot[0]!==36064&&(ot[0]=36064,gt=!0);else ot[0]!==1029&&(ot[0]=1029,gt=!0);gt&&(e.isWebGL2?a.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function Mt(k){return p!==k?(a.useProgram(k),p=k,!0):!1}const wt={[Ui]:32774,[Fc]:32778,[Uc]:32779};if(n)wt[Jr]=32775,wt[Qr]=32776;else{const k=t.get("EXT_blend_minmax");k!==null&&(wt[Jr]=k.MIN_EXT,wt[Qr]=k.MAX_EXT)}const Lt={[Gc]:0,[Vc]:1,[Hc]:768,[Wl]:770,[jc]:776,[Kc]:774,[qc]:772,[Wc]:769,[ql]:771,[Yc]:775,[Xc]:773};function Yt(k,J,ot,gt,yt,Zt,ve,Te){if(k===$n){_===!0&&(ht(3042),_=!1);return}if(_===!1&&(ct(3042),_=!0),k!==kc){if(k!==v||Te!==A){if((y!==Ui||E!==Ui)&&(a.blendEquation(32774),y=Ui,E=Ui),Te)switch(k){case Hi:a.blendFuncSeparate(1,771,1,771);break;case jr:a.blendFunc(1,1);break;case $r:a.blendFuncSeparate(0,769,0,1);break;case Zr:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Hi:a.blendFuncSeparate(770,771,1,771);break;case jr:a.blendFunc(770,1);break;case $r:a.blendFuncSeparate(0,769,0,1);break;case Zr:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,w=null,T=null,M=null,v=k,A=Te}return}yt=yt||J,Zt=Zt||ot,ve=ve||gt,(J!==y||yt!==E)&&(a.blendEquationSeparate(wt[J],wt[yt]),y=J,E=yt),(ot!==x||gt!==w||Zt!==T||ve!==M)&&(a.blendFuncSeparate(Lt[ot],Lt[gt],Lt[Zt],Lt[ve]),x=ot,w=gt,T=Zt,M=ve),v=k,A=!1}function le(k,J){k.side===zn?ht(2884):ct(2884);let ot=k.side===qe;J&&(ot=!ot),ee(ot),k.blending===Hi&&k.transparent===!1?Yt($n):Yt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),r.setMask(k.colorWrite);const gt=k.stencilWrite;c.setTest(gt),gt&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Kt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(32926):ht(32926)}function ee(k){I!==k&&(k?a.frontFace(2304):a.frontFace(2305),I=k)}function Wt(k){k!==Bc?(ct(2884),k!==F&&(k===Yr?a.cullFace(1029):k===zc?a.cullFace(1028):a.cullFace(1032))):ht(2884),F=k}function qt(k){k!==U&&(O&&a.lineWidth(k),U=k)}function Kt(k,J,ot){k?(ct(32823),(D!==J||P!==ot)&&(a.polygonOffset(J,ot),D=J,P=ot)):ht(32823)}function be(k){k?ct(3089):ht(3089)}function me(k){k===void 0&&(k=33984+N-1),X!==k&&(a.activeTexture(k),X=k)}function L(k,J,ot){ot===void 0&&(X===null?ot=33984+N-1:ot=X);let gt=Y[ot];gt===void 0&&(gt={type:void 0,texture:void 0},Y[ot]=gt),(gt.type!==k||gt.texture!==J)&&(X!==ot&&(a.activeTexture(ot),X=ot),a.bindTexture(k,J||lt[k]),gt.type=k,gt.texture=J)}function C(){const k=Y[X];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function V(){try{a.compressedTexImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{a.compressedTexImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{a.texSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{a.texSubImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{a.texStorage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{a.texStorage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{a.texImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{a.texImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(k){tt.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),tt.copy(k))}function bt(k){et.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),et.copy(k))}function zt(k,J){let ot=d.get(J);ot===void 0&&(ot=new WeakMap,d.set(J,ot));let gt=ot.get(k);gt===void 0&&(gt=a.getUniformBlockIndex(J,k.name),ot.set(k,gt))}function $t(k,J){const gt=d.get(J).get(k);h.get(J)!==gt&&(a.uniformBlockBinding(J,gt,k.__bindingPointIndex),h.set(J,gt))}function ge(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},X=null,Y={},m={},g=new WeakMap,f=[],p=null,_=!1,v=null,y=null,x=null,w=null,E=null,T=null,M=null,A=!1,I=null,F=null,U=null,D=null,P=null,tt.set(0,0,a.canvas.width,a.canvas.height),et.set(0,0,a.canvas.width,a.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:ct,disable:ht,bindFramebuffer:rt,drawBuffers:ut,useProgram:Mt,setBlending:Yt,setMaterial:le,setFlipSided:ee,setCullFace:Wt,setLineWidth:qt,setPolygonOffset:Kt,setScissorTest:be,activeTexture:me,bindTexture:L,unbindTexture:C,compressedTexImage2D:V,compressedTexImage3D:$,texImage2D:_t,texImage3D:At,updateUBOMapping:zt,uniformBlockBinding:$t,texStorage2D:j,texStorage3D:xt,texSubImage2D:nt,texSubImage3D:at,compressedTexSubImage2D:dt,compressedTexSubImage3D:st,scissor:Et,viewport:bt,reset:ge}}function Um(a,t,e,n,i,s,o){const r=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,C){return _?new OffscreenCanvas(L,C):ro("canvas")}function y(L,C,V,$){let nt=1;if((L.width>$||L.height>$)&&(nt=$/Math.max(L.width,L.height)),nt<1||C===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const at=C?Zl:Math.floor,dt=at(nt*L.width),st=at(nt*L.height);f===void 0&&(f=v(dt,st));const j=V?v(dt,st):f;return j.width=dt,j.height=st,j.getContext("2d").drawImage(L,0,0,dt,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+dt+"x"+st+")."),j}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return Mr(L.width)&&Mr(L.height)}function w(L){return r?!1:L.wrapS!==He||L.wrapT!==He||L.minFilter!==ue&&L.minFilter!==Ze}function E(L,C){return L.generateMipmaps&&C&&L.minFilter!==ue&&L.minFilter!==Ze}function T(L){a.generateMipmap(L)}function M(L,C,V,$,nt=!1){if(r===!1)return C;if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let at=C;return C===6403&&(V===5126&&(at=33326),V===5131&&(at=33325),V===5121&&(at=33321)),C===33319&&(V===5126&&(at=33328),V===5131&&(at=33327),V===5121&&(at=33323)),C===6408&&(V===5126&&(at=34836),V===5131&&(at=34842),V===5121&&(at=$===Qt&&nt===!1?35907:32856),V===32819&&(at=32854),V===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function A(L,C,V){return E(L,V)===!0||L.isFramebufferTexture&&L.minFilter!==ue&&L.minFilter!==Ze?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function I(L){return L===ue||L===ta||L===wo?9728:9729}function F(L){const C=L.target;C.removeEventListener("dispose",F),D(C),C.isVideoTexture&&g.delete(C)}function U(L){const C=L.target;C.removeEventListener("dispose",U),N(C)}function D(L){const C=n.get(L);if(C.__webglInit===void 0)return;const V=L.source,$=p.get(V);if($){const nt=$[C.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&P(L),Object.keys($).length===0&&p.delete(V)}n.remove(L)}function P(L){const C=n.get(L);a.deleteTexture(C.__webglTexture);const V=L.source,$=p.get(V);delete $[C.__cacheKey],o.memory.textures--}function N(L){const C=L.texture,V=n.get(L),$=n.get(C);if($.__webglTexture!==void 0&&(a.deleteTexture($.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)a.deleteFramebuffer(V.__webglFramebuffer[nt]),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer[nt]);else{if(a.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&a.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let nt=0;nt<V.__webglColorRenderbuffer.length;nt++)V.__webglColorRenderbuffer[nt]&&a.deleteRenderbuffer(V.__webglColorRenderbuffer[nt]);V.__webglDepthRenderbuffer&&a.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let nt=0,at=C.length;nt<at;nt++){const dt=n.get(C[nt]);dt.__webglTexture&&(a.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(C[nt])}n.remove(C),n.remove(L)}let O=0;function K(){O=0}function z(){const L=O;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),O+=1,L}function X(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.encoding),C.join()}function Y(L,C){const V=n.get(L);if(L.isVideoTexture&&be(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const $=L.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(V,L,C);return}}e.bindTexture(3553,V.__webglTexture,33984+C)}function it(L,C){const V=n.get(L);if(L.version>0&&V.__version!==L.version){ht(V,L,C);return}e.bindTexture(35866,V.__webglTexture,33984+C)}function B(L,C){const V=n.get(L);if(L.version>0&&V.__version!==L.version){ht(V,L,C);return}e.bindTexture(32879,V.__webglTexture,33984+C)}function tt(L,C){const V=n.get(L);if(L.version>0&&V.__version!==L.version){rt(V,L,C);return}e.bindTexture(34067,V.__webglTexture,33984+C)}const et={[_r]:10497,[He]:33071,[yr]:33648},G={[ue]:9728,[ta]:9984,[wo]:9986,[Ze]:9729,[hh]:9985,[bs]:9987};function lt(L,C,V){if(V?(a.texParameteri(L,10242,et[C.wrapS]),a.texParameteri(L,10243,et[C.wrapT]),(L===32879||L===35866)&&a.texParameteri(L,32882,et[C.wrapR]),a.texParameteri(L,10240,G[C.magFilter]),a.texParameteri(L,10241,G[C.minFilter])):(a.texParameteri(L,10242,33071),a.texParameteri(L,10243,33071),(L===32879||L===35866)&&a.texParameteri(L,32882,33071),(C.wrapS!==He||C.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(L,10240,I(C.magFilter)),a.texParameteri(L,10241,I(C.minFilter)),C.minFilter!==ue&&C.minFilter!==Ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const $=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===ue||C.minFilter!==wo&&C.minFilter!==bs||C.type===mi&&t.has("OES_texture_float_linear")===!1||r===!1&&C.type===Ss&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(a.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function ct(L,C){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",F));const $=C.source;let nt=p.get($);nt===void 0&&(nt={},p.set($,nt));const at=X(C);if(at!==L.__cacheKey){nt[at]===void 0&&(nt[at]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,V=!0),nt[at].usedTimes++;const dt=nt[L.__cacheKey];dt!==void 0&&(nt[L.__cacheKey].usedTimes--,dt.usedTimes===0&&P(C)),L.__cacheKey=at,L.__webglTexture=nt[at].texture}return V}function ht(L,C,V){let $=3553;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&($=35866),C.isData3DTexture&&($=32879);const nt=ct(L,C),at=C.source;e.bindTexture($,L.__webglTexture,33984+V);const dt=n.get(at);if(at.version!==dt.__version||nt===!0){e.activeTexture(33984+V),a.pixelStorei(37440,C.flipY),a.pixelStorei(37441,C.premultiplyAlpha),a.pixelStorei(3317,C.unpackAlignment),a.pixelStorei(37443,0);const st=w(C)&&x(C.image)===!1;let j=y(C.image,st,!1,h);j=me(C,j);const xt=x(j)||r,_t=s.convert(C.format,C.encoding);let At=s.convert(C.type),Et=M(C.internalFormat,_t,At,C.encoding,C.isVideoTexture);lt($,C,xt);let bt;const zt=C.mipmaps,$t=r&&C.isVideoTexture!==!0,ge=dt.__version===void 0||nt===!0,k=A(C,j,xt);if(C.isDepthTexture)Et=6402,r?C.type===mi?Et=36012:C.type===pi?Et=33190:C.type===Wi?Et=35056:Et=33189:C.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===gi&&Et===6402&&C.type!==Yl&&C.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=pi,At=s.convert(C.type)),C.format===Yi&&Et===6402&&(Et=34041,C.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Wi,At=s.convert(C.type))),ge&&($t?e.texStorage2D(3553,1,Et,j.width,j.height):e.texImage2D(3553,0,Et,j.width,j.height,0,_t,At,null));else if(C.isDataTexture)if(zt.length>0&&xt){$t&&ge&&e.texStorage2D(3553,k,Et,zt[0].width,zt[0].height);for(let J=0,ot=zt.length;J<ot;J++)bt=zt[J],$t?e.texSubImage2D(3553,J,0,0,bt.width,bt.height,_t,At,bt.data):e.texImage2D(3553,J,Et,bt.width,bt.height,0,_t,At,bt.data);C.generateMipmaps=!1}else $t?(ge&&e.texStorage2D(3553,k,Et,j.width,j.height),e.texSubImage2D(3553,0,0,0,j.width,j.height,_t,At,j.data)):e.texImage2D(3553,0,Et,j.width,j.height,0,_t,At,j.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){$t&&ge&&e.texStorage3D(35866,k,Et,zt[0].width,zt[0].height,j.depth);for(let J=0,ot=zt.length;J<ot;J++)bt=zt[J],C.format!==an?_t!==null?$t?e.compressedTexSubImage3D(35866,J,0,0,0,bt.width,bt.height,j.depth,_t,bt.data,0,0):e.compressedTexImage3D(35866,J,Et,bt.width,bt.height,j.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(35866,J,0,0,0,bt.width,bt.height,j.depth,_t,At,bt.data):e.texImage3D(35866,J,Et,bt.width,bt.height,j.depth,0,_t,At,bt.data)}else{$t&&ge&&e.texStorage2D(3553,k,Et,zt[0].width,zt[0].height);for(let J=0,ot=zt.length;J<ot;J++)bt=zt[J],C.format!==an?_t!==null?$t?e.compressedTexSubImage2D(3553,J,0,0,bt.width,bt.height,_t,bt.data):e.compressedTexImage2D(3553,J,Et,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(3553,J,0,0,bt.width,bt.height,_t,At,bt.data):e.texImage2D(3553,J,Et,bt.width,bt.height,0,_t,At,bt.data)}else if(C.isDataArrayTexture)$t?(ge&&e.texStorage3D(35866,k,Et,j.width,j.height,j.depth),e.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,_t,At,j.data)):e.texImage3D(35866,0,Et,j.width,j.height,j.depth,0,_t,At,j.data);else if(C.isData3DTexture)$t?(ge&&e.texStorage3D(32879,k,Et,j.width,j.height,j.depth),e.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,_t,At,j.data)):e.texImage3D(32879,0,Et,j.width,j.height,j.depth,0,_t,At,j.data);else if(C.isFramebufferTexture){if(ge)if($t)e.texStorage2D(3553,k,Et,j.width,j.height);else{let J=j.width,ot=j.height;for(let gt=0;gt<k;gt++)e.texImage2D(3553,gt,Et,J,ot,0,_t,At,null),J>>=1,ot>>=1}}else if(zt.length>0&&xt){$t&&ge&&e.texStorage2D(3553,k,Et,zt[0].width,zt[0].height);for(let J=0,ot=zt.length;J<ot;J++)bt=zt[J],$t?e.texSubImage2D(3553,J,0,0,_t,At,bt):e.texImage2D(3553,J,Et,_t,At,bt);C.generateMipmaps=!1}else $t?(ge&&e.texStorage2D(3553,k,Et,j.width,j.height),e.texSubImage2D(3553,0,0,0,_t,At,j)):e.texImage2D(3553,0,Et,_t,At,j);E(C,xt)&&T($),dt.__version=at.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function rt(L,C,V){if(C.image.length!==6)return;const $=ct(L,C),nt=C.source;e.bindTexture(34067,L.__webglTexture,33984+V);const at=n.get(nt);if(nt.version!==at.__version||$===!0){e.activeTexture(33984+V),a.pixelStorei(37440,C.flipY),a.pixelStorei(37441,C.premultiplyAlpha),a.pixelStorei(3317,C.unpackAlignment),a.pixelStorei(37443,0);const dt=C.isCompressedTexture||C.image[0].isCompressedTexture,st=C.image[0]&&C.image[0].isDataTexture,j=[];for(let J=0;J<6;J++)!dt&&!st?j[J]=y(C.image[J],!1,!0,c):j[J]=st?C.image[J].image:C.image[J],j[J]=me(C,j[J]);const xt=j[0],_t=x(xt)||r,At=s.convert(C.format,C.encoding),Et=s.convert(C.type),bt=M(C.internalFormat,At,Et,C.encoding),zt=r&&C.isVideoTexture!==!0,$t=at.__version===void 0||$===!0;let ge=A(C,xt,_t);lt(34067,C,_t);let k;if(dt){zt&&$t&&e.texStorage2D(34067,ge,bt,xt.width,xt.height);for(let J=0;J<6;J++){k=j[J].mipmaps;for(let ot=0;ot<k.length;ot++){const gt=k[ot];C.format!==an?At!==null?zt?e.compressedTexSubImage2D(34069+J,ot,0,0,gt.width,gt.height,At,gt.data):e.compressedTexImage2D(34069+J,ot,bt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?e.texSubImage2D(34069+J,ot,0,0,gt.width,gt.height,At,Et,gt.data):e.texImage2D(34069+J,ot,bt,gt.width,gt.height,0,At,Et,gt.data)}}}else{k=C.mipmaps,zt&&$t&&(k.length>0&&ge++,e.texStorage2D(34067,ge,bt,j[0].width,j[0].height));for(let J=0;J<6;J++)if(st){zt?e.texSubImage2D(34069+J,0,0,0,j[J].width,j[J].height,At,Et,j[J].data):e.texImage2D(34069+J,0,bt,j[J].width,j[J].height,0,At,Et,j[J].data);for(let ot=0;ot<k.length;ot++){const yt=k[ot].image[J].image;zt?e.texSubImage2D(34069+J,ot+1,0,0,yt.width,yt.height,At,Et,yt.data):e.texImage2D(34069+J,ot+1,bt,yt.width,yt.height,0,At,Et,yt.data)}}else{zt?e.texSubImage2D(34069+J,0,0,0,At,Et,j[J]):e.texImage2D(34069+J,0,bt,At,Et,j[J]);for(let ot=0;ot<k.length;ot++){const gt=k[ot];zt?e.texSubImage2D(34069+J,ot+1,0,0,At,Et,gt.image[J]):e.texImage2D(34069+J,ot+1,bt,At,Et,gt.image[J])}}}E(C,_t)&&T(34067),at.__version=nt.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function ut(L,C,V,$,nt){const at=s.convert(V.format,V.encoding),dt=s.convert(V.type),st=M(V.internalFormat,at,dt,V.encoding);n.get(C).__hasExternalTextures||(nt===32879||nt===35866?e.texImage3D(nt,0,st,C.width,C.height,C.depth,0,at,dt,null):e.texImage2D(nt,0,st,C.width,C.height,0,at,dt,null)),e.bindFramebuffer(36160,L),Kt(C)?u.framebufferTexture2DMultisampleEXT(36160,$,nt,n.get(V).__webglTexture,0,qt(C)):(nt===3553||nt>=34069&&nt<=34074)&&a.framebufferTexture2D(36160,$,nt,n.get(V).__webglTexture,0),e.bindFramebuffer(36160,null)}function Mt(L,C,V){if(a.bindRenderbuffer(36161,L),C.depthBuffer&&!C.stencilBuffer){let $=33189;if(V||Kt(C)){const nt=C.depthTexture;nt&&nt.isDepthTexture&&(nt.type===mi?$=36012:nt.type===pi&&($=33190));const at=qt(C);Kt(C)?u.renderbufferStorageMultisampleEXT(36161,at,$,C.width,C.height):a.renderbufferStorageMultisample(36161,at,$,C.width,C.height)}else a.renderbufferStorage(36161,$,C.width,C.height);a.framebufferRenderbuffer(36160,36096,36161,L)}else if(C.depthBuffer&&C.stencilBuffer){const $=qt(C);V&&Kt(C)===!1?a.renderbufferStorageMultisample(36161,$,35056,C.width,C.height):Kt(C)?u.renderbufferStorageMultisampleEXT(36161,$,35056,C.width,C.height):a.renderbufferStorage(36161,34041,C.width,C.height),a.framebufferRenderbuffer(36160,33306,36161,L)}else{const $=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let nt=0;nt<$.length;nt++){const at=$[nt],dt=s.convert(at.format,at.encoding),st=s.convert(at.type),j=M(at.internalFormat,dt,st,at.encoding),xt=qt(C);V&&Kt(C)===!1?a.renderbufferStorageMultisample(36161,xt,j,C.width,C.height):Kt(C)?u.renderbufferStorageMultisampleEXT(36161,xt,j,C.width,C.height):a.renderbufferStorage(36161,j,C.width,C.height)}}a.bindRenderbuffer(36161,null)}function wt(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Y(C.depthTexture,0);const $=n.get(C.depthTexture).__webglTexture,nt=qt(C);if(C.depthTexture.format===gi)Kt(C)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,nt):a.framebufferTexture2D(36160,36096,3553,$,0);else if(C.depthTexture.format===Yi)Kt(C)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,nt):a.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function Lt(L){const C=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");wt(C.__webglFramebuffer,L)}else if(V){C.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(36160,C.__webglFramebuffer[$]),C.__webglDepthbuffer[$]=a.createRenderbuffer(),Mt(C.__webglDepthbuffer[$],L,!1)}else e.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=a.createRenderbuffer(),Mt(C.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function Yt(L,C,V){const $=n.get(L);C!==void 0&&ut($.__webglFramebuffer,L,L.texture,36064,3553),V!==void 0&&Lt(L)}function le(L){const C=L.texture,V=n.get(L),$=n.get(C);L.addEventListener("dispose",U),L.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=C.version,o.memory.textures++);const nt=L.isWebGLCubeRenderTarget===!0,at=L.isWebGLMultipleRenderTargets===!0,dt=x(L)||r;if(nt){V.__webglFramebuffer=[];for(let st=0;st<6;st++)V.__webglFramebuffer[st]=a.createFramebuffer()}else{if(V.__webglFramebuffer=a.createFramebuffer(),at)if(i.drawBuffers){const st=L.texture;for(let j=0,xt=st.length;j<xt;j++){const _t=n.get(st[j]);_t.__webglTexture===void 0&&(_t.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&L.samples>0&&Kt(L)===!1){const st=at?C:[C];V.__webglMultisampledFramebuffer=a.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let j=0;j<st.length;j++){const xt=st[j];V.__webglColorRenderbuffer[j]=a.createRenderbuffer(),a.bindRenderbuffer(36161,V.__webglColorRenderbuffer[j]);const _t=s.convert(xt.format,xt.encoding),At=s.convert(xt.type),Et=M(xt.internalFormat,_t,At,xt.encoding,L.isXRRenderTarget===!0),bt=qt(L);a.renderbufferStorageMultisample(36161,bt,Et,L.width,L.height),a.framebufferRenderbuffer(36160,36064+j,36161,V.__webglColorRenderbuffer[j])}a.bindRenderbuffer(36161,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=a.createRenderbuffer(),Mt(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}}if(nt){e.bindTexture(34067,$.__webglTexture),lt(34067,C,dt);for(let st=0;st<6;st++)ut(V.__webglFramebuffer[st],L,C,36064,34069+st);E(C,dt)&&T(34067),e.unbindTexture()}else if(at){const st=L.texture;for(let j=0,xt=st.length;j<xt;j++){const _t=st[j],At=n.get(_t);e.bindTexture(3553,At.__webglTexture),lt(3553,_t,dt),ut(V.__webglFramebuffer,L,_t,36064+j,3553),E(_t,dt)&&T(3553)}e.unbindTexture()}else{let st=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(r?st=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(st,$.__webglTexture),lt(st,C,dt),ut(V.__webglFramebuffer,L,C,36064,st),E(C,dt)&&T(st),e.unbindTexture()}L.depthBuffer&&Lt(L)}function ee(L){const C=x(L)||r,V=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let $=0,nt=V.length;$<nt;$++){const at=V[$];if(E(at,C)){const dt=L.isWebGLCubeRenderTarget?34067:3553,st=n.get(at).__webglTexture;e.bindTexture(dt,st),T(dt),e.unbindTexture()}}}function Wt(L){if(r&&L.samples>0&&Kt(L)===!1){const C=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],V=L.width,$=L.height;let nt=16384;const at=[],dt=L.stencilBuffer?33306:36096,st=n.get(L),j=L.isWebGLMultipleRenderTargets===!0;if(j)for(let xt=0;xt<C.length;xt++)e.bindFramebuffer(36160,st.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+xt,36161,null),e.bindFramebuffer(36160,st.__webglFramebuffer),a.framebufferTexture2D(36009,36064+xt,3553,null,0);e.bindFramebuffer(36008,st.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,st.__webglFramebuffer);for(let xt=0;xt<C.length;xt++){at.push(36064+xt),L.depthBuffer&&at.push(dt);const _t=st.__ignoreDepthValues!==void 0?st.__ignoreDepthValues:!1;if(_t===!1&&(L.depthBuffer&&(nt|=256),L.stencilBuffer&&(nt|=1024)),j&&a.framebufferRenderbuffer(36008,36064,36161,st.__webglColorRenderbuffer[xt]),_t===!0&&(a.invalidateFramebuffer(36008,[dt]),a.invalidateFramebuffer(36009,[dt])),j){const At=n.get(C[xt]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,At,0)}a.blitFramebuffer(0,0,V,$,0,0,V,$,nt,9728),m&&a.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),j)for(let xt=0;xt<C.length;xt++){e.bindFramebuffer(36160,st.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+xt,36161,st.__webglColorRenderbuffer[xt]);const _t=n.get(C[xt]).__webglTexture;e.bindFramebuffer(36160,st.__webglFramebuffer),a.framebufferTexture2D(36009,36064+xt,3553,_t,0)}e.bindFramebuffer(36009,st.__webglMultisampledFramebuffer)}}function qt(L){return Math.min(d,L.samples)}function Kt(L){const C=n.get(L);return r&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function be(L){const C=o.render.frame;g.get(L)!==C&&(g.set(L,C),L.update())}function me(L,C){const V=L.encoding,$=L.format,nt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===xr||V!==_i&&(V===Qt?r===!1?t.has("EXT_sRGB")===!0&&$===an?(L.format=xr,L.minFilter=Ze,L.generateMipmaps=!1):C=Ql.sRGBToLinear(C):($!==an||nt!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),C}this.allocateTextureUnit=z,this.resetTextureUnits=K,this.setTexture2D=Y,this.setTexture2DArray=it,this.setTexture3D=B,this.setTextureCube=tt,this.rebindTextures=Yt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Kt}function Gm(a,t,e){const n=e.isWebGL2;function i(s,o=null){let r;if(s===vi)return 5121;if(s===ph)return 32819;if(s===mh)return 32820;if(s===uh)return 5120;if(s===dh)return 5122;if(s===Yl)return 5123;if(s===fh)return 5124;if(s===pi)return 5125;if(s===mi)return 5126;if(s===Ss)return n?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===gh)return 6406;if(s===an)return 6408;if(s===vh)return 6409;if(s===_h)return 6410;if(s===gi)return 6402;if(s===Yi)return 34041;if(s===xr)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===yh)return 6403;if(s===xh)return 36244;if(s===Mh)return 33319;if(s===bh)return 33320;if(s===Sh)return 36249;if(s===Eo||s===Co||s===Ao||s===To)if(o===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ea||s===na||s===ia||s===sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wh)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===oa||s===ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===oa)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===ra)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===aa||s===la||s===ca||s===ha||s===ua||s===da||s===fa||s===pa||s===ma||s===ga||s===va||s===_a||s===ya||s===xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===aa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===la)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ca)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ha)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ua)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===da)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ma)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ga)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===va)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_a)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ya)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ro)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===Ro)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Eh||s===Ma||s===ba||s===Sa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(s===Ro)return r.COMPRESSED_RED_RGTC1_EXT;if(s===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wi?n?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class Vm extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class he extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hm={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n),_=this._getHandJoint(c,f);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Wm extends ke{constructor(t,e,n,i,s,o,r,l,c,h){if(h=h!==void 0?h:gi,h!==gi&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gi&&(n=pi),n===void 0&&h===Yi&&(n=Wi),super(null,i,s,o,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:ue,this.minFilter=l!==void 0?l:ue,this.flipY=!1,this.generateMipmaps=!1}}class qm extends Ji{constructor(t,e){super();const n=this;let i=null,s=1,o=null,r="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null;const f=e.getContextAttributes();let p=null,_=null;const v=[],y=[],x=new Set,w=new Map,E=new Je;E.layers.enable(1),E.viewport=new Me;const T=new Je;T.layers.enable(2),T.viewport=new Me;const M=[E,T],A=new Vm;A.layers.enable(1),A.layers.enable(2);let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let tt=v[B];return tt===void 0&&(tt=new Qo,v[B]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(B){let tt=v[B];return tt===void 0&&(tt=new Qo,v[B]=tt),tt.getGripSpace()},this.getHand=function(B){let tt=v[B];return tt===void 0&&(tt=new Qo,v[B]=tt),tt.getHandSpace()};function U(B){const tt=y.indexOf(B.inputSource);if(tt===-1)return;const et=v[tt];et!==void 0&&et.dispatchEvent({type:B.type,data:B.inputSource})}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",P);for(let B=0;B<v.length;B++){const tt=y[B];tt!==null&&(y[B]=null,v[B].disconnect(tt))}I=null,F=null,t.setRenderTarget(p),m=null,u=null,d=null,i=null,_=null,it.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",P),f.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:m}),_=new xi(m.framebufferWidth,m.framebufferHeight,{format:an,type:vi,encoding:t.outputEncoding,stencilBuffer:f.stencil})}else{let tt=null,et=null,G=null;f.depth&&(G=f.stencil?35056:33190,tt=f.stencil?Yi:gi,et=f.stencil?Wi:pi);const lt={colorFormat:32856,depthFormat:G,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(lt),i.updateRenderState({layers:[u]}),_=new xi(u.textureWidth,u.textureHeight,{format:an,type:vi,depthTexture:new Wm(u.textureWidth,u.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:f.stencil,encoding:t.outputEncoding,samples:f.antialias?4:0});const ct=t.properties.get(_);ct.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(r),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(B){for(let tt=0;tt<B.removed.length;tt++){const et=B.removed[tt],G=y.indexOf(et);G>=0&&(y[G]=null,v[G].disconnect(et))}for(let tt=0;tt<B.added.length;tt++){const et=B.added[tt];let G=y.indexOf(et);if(G===-1){for(let ct=0;ct<v.length;ct++)if(ct>=y.length){y.push(et),G=ct;break}else if(y[ct]===null){y[ct]=et,G=ct;break}if(G===-1)break}const lt=v[G];lt&&lt.connect(et)}}const N=new H,O=new H;function K(B,tt,et){N.setFromMatrixPosition(tt.matrixWorld),O.setFromMatrixPosition(et.matrixWorld);const G=N.distanceTo(O),lt=tt.projectionMatrix.elements,ct=et.projectionMatrix.elements,ht=lt[14]/(lt[10]-1),rt=lt[14]/(lt[10]+1),ut=(lt[9]+1)/lt[5],Mt=(lt[9]-1)/lt[5],wt=(lt[8]-1)/lt[0],Lt=(ct[8]+1)/ct[0],Yt=ht*wt,le=ht*Lt,ee=G/(-wt+Lt),Wt=ee*-wt;tt.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Wt),B.translateZ(ee),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const qt=ht+ee,Kt=rt+ee,be=Yt-Wt,me=le+(G-Wt),L=ut*rt/Kt*qt,C=Mt*rt/Kt*qt;B.projectionMatrix.makePerspective(be,me,L,C,qt,Kt)}function z(B,tt){tt===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(tt.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;A.near=T.near=E.near=B.near,A.far=T.far=E.far=B.far,(I!==A.near||F!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,F=A.far);const tt=B.parent,et=A.cameras;z(A,tt);for(let lt=0;lt<et.length;lt++)z(et[lt],tt);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),B.matrix.copy(A.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const G=B.children;for(let lt=0,ct=G.length;lt<ct;lt++)G[lt].updateMatrixWorld(!0);et.length===2?K(A,E,T):A.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return x};let X=null;function Y(B,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){const et=h.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let G=!1;et.length!==A.cameras.length&&(A.cameras.length=0,G=!0);for(let lt=0;lt<et.length;lt++){const ct=et[lt];let ht=null;if(m!==null)ht=m.getViewport(ct);else{const ut=d.getViewSubImage(u,ct);ht=ut.viewport,lt===0&&(t.setRenderTargetTextures(_,ut.colorTexture,u.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(_))}let rt=M[lt];rt===void 0&&(rt=new Je,rt.layers.enable(lt),rt.viewport=new Me,M[lt]=rt),rt.matrix.fromArray(ct.transform.matrix),rt.projectionMatrix.fromArray(ct.projectionMatrix),rt.viewport.set(ht.x,ht.y,ht.width,ht.height),lt===0&&A.matrix.copy(rt.matrix),G===!0&&A.cameras.push(rt)}}for(let et=0;et<v.length;et++){const G=y[et],lt=v[et];G!==null&&lt!==void 0&&lt.update(G,tt,c||o)}if(X&&X(B,tt),tt.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:tt.detectedPlanes});let et=null;for(const G of x)tt.detectedPlanes.has(G)||(et===null&&(et=[]),et.push(G));if(et!==null)for(const G of et)x.delete(G),w.delete(G),n.dispatchEvent({type:"planeremoved",data:G});for(const G of tt.detectedPlanes)if(!x.has(G))x.add(G),w.set(G,tt.lastChangedTime),n.dispatchEvent({type:"planeadded",data:G});else{const lt=w.get(G);G.lastChangedTime>lt&&(w.set(G,G.lastChangedTime),n.dispatchEvent({type:"planechanged",data:G}))}}g=null}const it=new cc;it.setAnimationLoop(Y),this.setAnimationLoop=function(B){X=B},this.dispose=function(){}}}function Xm(a,t){function e(f,p){p.color.getRGB(f.fogColor.value,rc(a)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),h(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),d(f,p),p.isMeshPhysicalMaterial&&u(f,p,y)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?r(f,p,_,v):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===qe&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===qe&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const x=a.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uv2Transform.value.copy(y.matrix))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function r(f,p,_,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*_,f.scale.value=v*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function u(f,p,_){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===qe&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Km(a,t,e,n){let i={},s={},o=[];const r=e.isWebGL2?a.getParameter(35375):0;function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",p));const w=y.program;n.updateUBOMapping(v,w);const E=t.render.frame;s[v.id]!==E&&(u(v),s[v.id]=E)}function h(v){const y=d();v.__bindingPointIndex=y;const x=a.createBuffer(),w=v.__size,E=v.usage;return a.bindBuffer(35345,x),a.bufferData(35345,w,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,y,x),x}function d(){for(let v=0;v<r;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],x=v.uniforms,w=v.__cache;a.bindBuffer(35345,y);for(let E=0,T=x.length;E<T;E++){const M=x[E];if(m(M,E,w)===!0){const A=M.__offset,I=Array.isArray(M.value)?M.value:[M.value];let F=0;for(let U=0;U<I.length;U++){const D=I[U],P=f(D);typeof D=="number"?(M.__data[0]=D,a.bufferSubData(35345,A+F,M.__data)):D.isMatrix3?(M.__data[0]=D.elements[0],M.__data[1]=D.elements[1],M.__data[2]=D.elements[2],M.__data[3]=D.elements[0],M.__data[4]=D.elements[3],M.__data[5]=D.elements[4],M.__data[6]=D.elements[5],M.__data[7]=D.elements[0],M.__data[8]=D.elements[6],M.__data[9]=D.elements[7],M.__data[10]=D.elements[8],M.__data[11]=D.elements[0]):(D.toArray(M.__data,F),F+=P.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,A,M.__data)}}a.bindBuffer(35345,null)}function m(v,y,x){const w=v.value;if(x[y]===void 0){if(typeof w=="number")x[y]=w;else{const E=Array.isArray(w)?w:[w],T=[];for(let M=0;M<E.length;M++)T.push(E[M].clone());x[y]=T}return!0}else if(typeof w=="number"){if(x[y]!==w)return x[y]=w,!0}else{const E=Array.isArray(x[y])?x[y]:[x[y]],T=Array.isArray(w)?w:[w];for(let M=0;M<E.length;M++){const A=E[M];if(A.equals(T[M])===!1)return A.copy(T[M]),!0}}return!1}function g(v){const y=v.uniforms;let x=0;const w=16;let E=0;for(let T=0,M=y.length;T<M;T++){const A=y[T],I={boundary:0,storage:0},F=Array.isArray(A.value)?A.value:[A.value];for(let U=0,D=F.length;U<D;U++){const P=F[U],N=f(P);I.boundary+=N.boundary,I.storage+=N.storage}if(A.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=x,T>0){E=x%w;const U=w-E;E!==0&&U-I.boundary<0&&(x+=w-E,A.__offset=x)}x+=I.storage}return E=x%w,E>0&&(x+=w-E),v.__size=x,v.__cache={},this}function f(v){const y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){const y=v.target;y.removeEventListener("dispose",p);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const v in i)a.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function Ym(){const a=ro("canvas");return a.style.display="block",a}function Fr(a={}){this.isWebGLRenderer=!0;const t=a.canvas!==void 0?a.canvas:Ym(),e=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,r=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let d=null,u=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=_i,this.useLegacyLights=!0,this.toneMapping=kn,this.toneMappingExposure=1;const f=this;let p=!1,_=0,v=0,y=null,x=-1,w=null;const E=new Me,T=new Me;let M=null,A=t.width,I=t.height,F=1,U=null,D=null;const P=new Me(0,0,A,I),N=new Me(0,0,A,I);let O=!1;const K=new Br;let z=!1,X=!1,Y=null;const it=new de,B=new H,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return y===null?F:1}let G=e;function lt(R,q){for(let Z=0;Z<R.length;Z++){const W=R[Z],Q=t.getContext(W,q);if(Q!==null)return Q}return null}try{const R={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:r,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dr}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",bt,!1),G===null){const q=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&q.shift(),G=lt(q,R),G===null)throw lt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ct,ht,rt,ut,Mt,wt,Lt,Yt,le,ee,Wt,qt,Kt,be,me,L,C,V,$,nt,at,dt,st,j;function xt(){ct=new op(G),ht=new Qf(G,ct,a),ct.init(ht),dt=new Gm(G,ct,ht),rt=new Fm(G,ct,ht),ut=new lp,Mt=new Em,wt=new Um(G,ct,rt,Mt,ht,dt,ut),Lt=new ep(f),Yt=new sp(f),le=new gu(G,ht),st=new Zf(G,ct,le,ht),ee=new rp(G,le,ut,st),Wt=new dp(G,ee,le,ut),$=new up(G,ht,wt),L=new tp(Mt),qt=new wm(f,Lt,Yt,ct,ht,st,L),Kt=new Xm(f,Mt),be=new Am,me=new Pm(ct,ht),V=new $f(f,Lt,Yt,rt,Wt,h,o),C=new km(f,Wt,ht),j=new Km(G,ut,ht,rt),nt=new Jf(G,ct,ut,ht),at=new ap(G,ct,ut,ht),ut.programs=qt.programs,f.capabilities=ht,f.extensions=ct,f.properties=Mt,f.renderLists=be,f.shadowMap=C,f.state=rt,f.info=ut}xt();const _t=new qm(f,G);this.xr=_t,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(A,I,!1))},this.getSize=function(R){return R.set(A,I)},this.setSize=function(R,q,Z=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=R,I=q,t.width=Math.floor(R*F),t.height=Math.floor(q*F),Z===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(A*F,I*F).floor()},this.setDrawingBufferSize=function(R,q,Z){A=R,I=q,F=Z,t.width=Math.floor(R*Z),t.height=Math.floor(q*Z),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(P)},this.setViewport=function(R,q,Z,W){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,q,Z,W),rt.viewport(E.copy(P).multiplyScalar(F).floor())},this.getScissor=function(R){return R.copy(N)},this.setScissor=function(R,q,Z,W){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,q,Z,W),rt.scissor(T.copy(N).multiplyScalar(F).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(R){rt.setScissorTest(O=R)},this.setOpaqueSort=function(R){U=R},this.setTransparentSort=function(R){D=R},this.getClearColor=function(R){return R.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(R=!0,q=!0,Z=!0){let W=0;R&&(W|=16384),q&&(W|=256),Z&&(W|=1024),G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),be.dispose(),me.dispose(),Mt.dispose(),Lt.dispose(),Yt.dispose(),Wt.dispose(),st.dispose(),j.dispose(),qt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",ot),_t.removeEventListener("sessionend",gt),Y&&(Y.dispose(),Y=null),yt.stop()};function At(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const R=ut.autoReset,q=C.enabled,Z=C.autoUpdate,W=C.needsUpdate,Q=C.type;xt(),ut.autoReset=R,C.enabled=q,C.autoUpdate=Z,C.needsUpdate=W,C.type=Q}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function zt(R){const q=R.target;q.removeEventListener("dispose",zt),$t(q)}function $t(R){ge(R),Mt.remove(R)}function ge(R){const q=Mt.get(R).programs;q!==void 0&&(q.forEach(function(Z){qt.releaseProgram(Z)}),R.isShaderMaterial&&qt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,Z,W,Q,Ct){q===null&&(q=tt);const Rt=Q.isMesh&&Q.matrixWorld.determinant()<0,Pt=Ic(R,q,Z,W,Q);rt.setMaterial(W,Rt);let Nt=Z.index,Gt=1;W.wireframe===!0&&(Nt=ee.getWireframeAttribute(Z),Gt=2);const kt=Z.drawRange,Ft=Z.attributes.position;let ie=kt.start*Gt,Fe=(kt.start+kt.count)*Gt;Ct!==null&&(ie=Math.max(ie,Ct.start*Gt),Fe=Math.min(Fe,(Ct.start+Ct.count)*Gt)),Nt!==null?(ie=Math.max(ie,0),Fe=Math.min(Fe,Nt.count)):Ft!=null&&(ie=Math.max(ie,0),Fe=Math.min(Fe,Ft.count));const wn=Fe-ie;if(wn<0||wn===1/0)return;st.setup(Q,W,Pt,Z,Nt);let ti,se=nt;if(Nt!==null&&(ti=le.get(Nt),se=at,se.setIndex(ti)),Q.isMesh)W.wireframe===!0?(rt.setLineWidth(W.wireframeLinewidth*et()),se.setMode(1)):se.setMode(4);else if(Q.isLine){let Ut=W.linewidth;Ut===void 0&&(Ut=1),rt.setLineWidth(Ut*et()),Q.isLineSegments?se.setMode(1):Q.isLineLoop?se.setMode(2):se.setMode(3)}else Q.isPoints?se.setMode(0):Q.isSprite&&se.setMode(4);if(Q.isInstancedMesh)se.renderInstances(ie,wn,Q.count);else if(Z.isInstancedBufferGeometry){const Ut=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,xo=Math.min(Z.instanceCount,Ut);se.renderInstances(ie,wn,xo)}else se.render(ie,wn)},this.compile=function(R,q){function Z(W,Q,Ct){W.transparent===!0&&W.side===zn&&W.forceSinglePass===!1?(W.side=qe,W.needsUpdate=!0,Ke(W,Q,Ct),W.side=Zn,W.needsUpdate=!0,Ke(W,Q,Ct),W.side=zn):Ke(W,Q,Ct)}u=me.get(R),u.init(),g.push(u),R.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),u.setupLights(f.useLegacyLights),R.traverse(function(W){const Q=W.material;if(Q)if(Array.isArray(Q))for(let Ct=0;Ct<Q.length;Ct++){const Rt=Q[Ct];Z(Rt,R,W)}else Z(Q,R,W)}),g.pop(),u=null};let k=null;function J(R){k&&k(R)}function ot(){yt.stop()}function gt(){yt.start()}const yt=new cc;yt.setAnimationLoop(J),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(R){k=R,_t.setAnimationLoop(R),R===null?yt.stop():yt.start()},_t.addEventListener("sessionstart",ot),_t.addEventListener("sessionend",gt),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(q),q=_t.getCamera()),R.isScene===!0&&R.onBeforeRender(f,R,q,y),u=me.get(R,g.length),u.init(),g.push(u),it.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),K.setFromProjectionMatrix(it),X=this.localClippingEnabled,z=L.init(this.clippingPlanes,X),d=be.get(R,m.length),d.init(),m.push(d),Zt(R,q,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(U,D),z===!0&&L.beginShadows();const Z=u.state.shadowsArray;if(C.render(Z,R,q),z===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(d,R),u.setupLights(f.useLegacyLights),q.isArrayCamera){const W=q.cameras;for(let Q=0,Ct=W.length;Q<Ct;Q++){const Rt=W[Q];ve(d,R,Rt,Rt.viewport)}}else ve(d,R,q);y!==null&&(wt.updateMultisampleRenderTarget(y),wt.updateRenderTargetMipmap(y)),R.isScene===!0&&R.onAfterRender(f,R,q),st.resetDefaultState(),x=-1,w=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Zt(R,q,Z,W){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)u.pushLight(R),R.castShadow&&u.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){W&&B.setFromMatrixPosition(R.matrixWorld).applyMatrix4(it);const Rt=Wt.update(R),Pt=R.material;Pt.visible&&d.push(R,Rt,Pt,Z,B.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==ut.render.frame&&(R.skeleton.update(),R.skeleton.frame=ut.render.frame),!R.frustumCulled||K.intersectsObject(R))){W&&B.setFromMatrixPosition(R.matrixWorld).applyMatrix4(it);const Rt=Wt.update(R),Pt=R.material;if(Array.isArray(Pt)){const Nt=Rt.groups;for(let Gt=0,kt=Nt.length;Gt<kt;Gt++){const Ft=Nt[Gt],ie=Pt[Ft.materialIndex];ie&&ie.visible&&d.push(R,Rt,ie,Z,B.z,Ft)}}else Pt.visible&&d.push(R,Rt,Pt,Z,B.z,null)}}const Ct=R.children;for(let Rt=0,Pt=Ct.length;Rt<Pt;Rt++)Zt(Ct[Rt],q,Z,W)}function ve(R,q,Z,W){const Q=R.opaque,Ct=R.transmissive,Rt=R.transparent;u.setupLightsView(Z),z===!0&&L.setGlobalState(f.clippingPlanes,Z),Ct.length>0&&Te(Q,q,Z),W&&rt.viewport(E.copy(W)),Q.length>0&&dn(Q,q,Z),Ct.length>0&&dn(Ct,q,Z),Rt.length>0&&dn(Rt,q,Z),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Te(R,q,Z){const W=ht.isWebGL2;Y===null&&(Y=new xi(1024,1024,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")?Ss:vi,minFilter:bs,samples:W&&s===!0?4:0}));const Q=f.getRenderTarget();f.setRenderTarget(Y),f.clear();const Ct=f.toneMapping;f.toneMapping=kn,dn(R,q,Z),f.toneMapping=Ct,wt.updateMultisampleRenderTarget(Y),wt.updateRenderTargetMipmap(Y),f.setRenderTarget(Q)}function dn(R,q,Z){const W=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Ct=R.length;Q<Ct;Q++){const Rt=R[Q],Pt=Rt.object,Nt=Rt.geometry,Gt=W===null?Rt.material:W,kt=Rt.group;Pt.layers.test(Z.layers)&&ne(Pt,q,Z,Nt,Gt,kt)}}function ne(R,q,Z,W,Q,Ct){R.onBeforeRender(f,q,Z,W,Q,Ct),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(f,q,Z,W,R,Ct),Q.transparent===!0&&Q.side===zn&&Q.forceSinglePass===!1?(Q.side=qe,Q.needsUpdate=!0,f.renderBufferDirect(Z,q,W,Q,R,Ct),Q.side=Zn,Q.needsUpdate=!0,f.renderBufferDirect(Z,q,W,Q,R,Ct),Q.side=zn):f.renderBufferDirect(Z,q,W,Q,R,Ct),R.onAfterRender(f,q,Z,W,Q,Ct)}function Ke(R,q,Z){q.isScene!==!0&&(q=tt);const W=Mt.get(R),Q=u.state.lights,Ct=u.state.shadowsArray,Rt=Q.state.version,Pt=qt.getParameters(R,Q.state,Ct,q,Z),Nt=qt.getProgramCacheKey(Pt);let Gt=W.programs;W.environment=R.isMeshStandardMaterial?q.environment:null,W.fog=q.fog,W.envMap=(R.isMeshStandardMaterial?Yt:Lt).get(R.envMap||W.environment),Gt===void 0&&(R.addEventListener("dispose",zt),Gt=new Map,W.programs=Gt);let kt=Gt.get(Nt);if(kt!==void 0){if(W.currentProgram===kt&&W.lightsStateVersion===Rt)return fn(R,Pt),kt}else Pt.uniforms=qt.getUniforms(R),R.onBuild(Z,Pt,f),R.onBeforeCompile(Pt,f),kt=qt.acquireProgram(Pt,Nt),Gt.set(Nt,kt),W.uniforms=Pt.uniforms;const Ft=W.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ft.clippingPlanes=L.uniform),fn(R,Pt),W.needsLights=Oc(R),W.lightsStateVersion=Rt,W.needsLights&&(Ft.ambientLightColor.value=Q.state.ambient,Ft.lightProbe.value=Q.state.probe,Ft.directionalLights.value=Q.state.directional,Ft.directionalLightShadows.value=Q.state.directionalShadow,Ft.spotLights.value=Q.state.spot,Ft.spotLightShadows.value=Q.state.spotShadow,Ft.rectAreaLights.value=Q.state.rectArea,Ft.ltc_1.value=Q.state.rectAreaLTC1,Ft.ltc_2.value=Q.state.rectAreaLTC2,Ft.pointLights.value=Q.state.point,Ft.pointLightShadows.value=Q.state.pointShadow,Ft.hemisphereLights.value=Q.state.hemi,Ft.directionalShadowMap.value=Q.state.directionalShadowMap,Ft.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ft.spotShadowMap.value=Q.state.spotShadowMap,Ft.spotLightMatrix.value=Q.state.spotLightMatrix,Ft.spotLightMap.value=Q.state.spotLightMap,Ft.pointShadowMap.value=Q.state.pointShadowMap,Ft.pointShadowMatrix.value=Q.state.pointShadowMatrix);const ie=kt.getUniforms(),Fe=so.seqWithValue(ie.seq,Ft);return W.currentProgram=kt,W.uniformsList=Fe,kt}function fn(R,q){const Z=Mt.get(R);Z.outputEncoding=q.outputEncoding,Z.instancing=q.instancing,Z.skinning=q.skinning,Z.morphTargets=q.morphTargets,Z.morphNormals=q.morphNormals,Z.morphColors=q.morphColors,Z.morphTargetsCount=q.morphTargetsCount,Z.numClippingPlanes=q.numClippingPlanes,Z.numIntersection=q.numClipIntersection,Z.vertexAlphas=q.vertexAlphas,Z.vertexTangents=q.vertexTangents,Z.toneMapping=q.toneMapping}function Ic(R,q,Z,W,Q){q.isScene!==!0&&(q=tt),wt.resetTextureUnits();const Ct=q.fog,Rt=W.isMeshStandardMaterial?q.environment:null,Pt=y===null?f.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:_i,Nt=(W.isMeshStandardMaterial?Yt:Lt).get(W.envMap||Rt),Gt=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,kt=!!W.normalMap&&!!Z.attributes.tangent,Ft=!!Z.morphAttributes.position,ie=!!Z.morphAttributes.normal,Fe=!!Z.morphAttributes.color,wn=W.toneMapped?f.toneMapping:kn,ti=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,se=ti!==void 0?ti.length:0,Ut=Mt.get(W),xo=u.state.lights;if(z===!0&&(X===!0||R!==w)){const Ue=R===w&&W.id===x;L.setState(W,R,Ue)}let _e=!1;W.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==xo.state.version||Ut.outputEncoding!==Pt||Q.isInstancedMesh&&Ut.instancing===!1||!Q.isInstancedMesh&&Ut.instancing===!0||Q.isSkinnedMesh&&Ut.skinning===!1||!Q.isSkinnedMesh&&Ut.skinning===!0||Ut.envMap!==Nt||W.fog===!0&&Ut.fog!==Ct||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==L.numPlanes||Ut.numIntersection!==L.numIntersection)||Ut.vertexAlphas!==Gt||Ut.vertexTangents!==kt||Ut.morphTargets!==Ft||Ut.morphNormals!==ie||Ut.morphColors!==Fe||Ut.toneMapping!==wn||ht.isWebGL2===!0&&Ut.morphTargetsCount!==se)&&(_e=!0):(_e=!0,Ut.__version=W.version);let ei=Ut.currentProgram;_e===!0&&(ei=Ke(W,q,Q));let Xr=!1,es=!1,Mo=!1;const Re=ei.getUniforms(),ni=Ut.uniforms;if(rt.useProgram(ei.program)&&(Xr=!0,es=!0,Mo=!0),W.id!==x&&(x=W.id,es=!0),Xr||w!==R){if(Re.setValue(G,"projectionMatrix",R.projectionMatrix),ht.logarithmicDepthBuffer&&Re.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),w!==R&&(w=R,es=!0,Mo=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const Ue=Re.map.cameraPosition;Ue!==void 0&&Ue.setValue(G,B.setFromMatrixPosition(R.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Re.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||Q.isSkinnedMesh)&&Re.setValue(G,"viewMatrix",R.matrixWorldInverse)}if(Q.isSkinnedMesh){Re.setOptional(G,Q,"bindMatrix"),Re.setOptional(G,Q,"bindMatrixInverse");const Ue=Q.skeleton;Ue&&(ht.floatVertexTextures?(Ue.boneTexture===null&&Ue.computeBoneTexture(),Re.setValue(G,"boneTexture",Ue.boneTexture,wt),Re.setValue(G,"boneTextureSize",Ue.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bo=Z.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0&&ht.isWebGL2===!0)&&$.update(Q,Z,ei),(es||Ut.receiveShadow!==Q.receiveShadow)&&(Ut.receiveShadow=Q.receiveShadow,Re.setValue(G,"receiveShadow",Q.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ni.envMap.value=Nt,ni.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),es&&(Re.setValue(G,"toneMappingExposure",f.toneMappingExposure),Ut.needsLights&&Pc(ni,Mo),Ct&&W.fog===!0&&Kt.refreshFogUniforms(ni,Ct),Kt.refreshMaterialUniforms(ni,W,F,I,Y),so.upload(G,Ut.uniformsList,ni,wt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(so.upload(G,Ut.uniformsList,ni,wt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Re.setValue(G,"center",Q.center),Re.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Re.setValue(G,"normalMatrix",Q.normalMatrix),Re.setValue(G,"modelMatrix",Q.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ue=W.uniformsGroups;for(let So=0,Nc=Ue.length;So<Nc;So++)if(ht.isWebGL2){const Kr=Ue[So];j.update(Kr,ei),j.bind(Kr,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function Pc(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Oc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(R,q,Z){Mt.get(R.texture).__webglTexture=q,Mt.get(R.depthTexture).__webglTexture=Z;const W=Mt.get(R);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=Z===void 0,W.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,q){const Z=Mt.get(R);Z.__webglFramebuffer=q,Z.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,Z=0){y=R,_=q,v=Z;let W=!0,Q=null,Ct=!1,Rt=!1;if(R){const Nt=Mt.get(R);Nt.__useDefaultFramebuffer!==void 0?(rt.bindFramebuffer(36160,null),W=!1):Nt.__webglFramebuffer===void 0?wt.setupRenderTarget(R):Nt.__hasExternalTextures&&wt.rebindTextures(R,Mt.get(R.texture).__webglTexture,Mt.get(R.depthTexture).__webglTexture);const Gt=R.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Rt=!0);const kt=Mt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Q=kt[q],Ct=!0):ht.isWebGL2&&R.samples>0&&wt.useMultisampledRTT(R)===!1?Q=Mt.get(R).__webglMultisampledFramebuffer:Q=kt,E.copy(R.viewport),T.copy(R.scissor),M=R.scissorTest}else E.copy(P).multiplyScalar(F).floor(),T.copy(N).multiplyScalar(F).floor(),M=O;if(rt.bindFramebuffer(36160,Q)&&ht.drawBuffers&&W&&rt.drawBuffers(R,Q),rt.viewport(E),rt.scissor(T),rt.setScissorTest(M),Ct){const Nt=Mt.get(R.texture);G.framebufferTexture2D(36160,36064,34069+q,Nt.__webglTexture,Z)}else if(Rt){const Nt=Mt.get(R.texture),Gt=q||0;G.framebufferTextureLayer(36160,36064,Nt.__webglTexture,Z||0,Gt)}x=-1},this.readRenderTargetPixels=function(R,q,Z,W,Q,Ct,Rt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Mt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){rt.bindFramebuffer(36160,Pt);try{const Nt=R.texture,Gt=Nt.format,kt=Nt.type;if(Gt!==an&&dt.convert(Gt)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ft=kt===Ss&&(ct.has("EXT_color_buffer_half_float")||ht.isWebGL2&&ct.has("EXT_color_buffer_float"));if(kt!==vi&&dt.convert(kt)!==G.getParameter(35738)&&!(kt===mi&&(ht.isWebGL2||ct.has("OES_texture_float")||ct.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-W&&Z>=0&&Z<=R.height-Q&&G.readPixels(q,Z,W,Q,dt.convert(Gt),dt.convert(kt),Ct)}finally{const Nt=y!==null?Mt.get(y).__webglFramebuffer:null;rt.bindFramebuffer(36160,Nt)}}},this.copyFramebufferToTexture=function(R,q,Z=0){const W=Math.pow(2,-Z),Q=Math.floor(q.image.width*W),Ct=Math.floor(q.image.height*W);wt.setTexture2D(q,0),G.copyTexSubImage2D(3553,Z,0,0,R.x,R.y,Q,Ct),rt.unbindTexture()},this.copyTextureToTexture=function(R,q,Z,W=0){const Q=q.image.width,Ct=q.image.height,Rt=dt.convert(Z.format),Pt=dt.convert(Z.type);wt.setTexture2D(Z,0),G.pixelStorei(37440,Z.flipY),G.pixelStorei(37441,Z.premultiplyAlpha),G.pixelStorei(3317,Z.unpackAlignment),q.isDataTexture?G.texSubImage2D(3553,W,R.x,R.y,Q,Ct,Rt,Pt,q.image.data):q.isCompressedTexture?G.compressedTexSubImage2D(3553,W,R.x,R.y,q.mipmaps[0].width,q.mipmaps[0].height,Rt,q.mipmaps[0].data):G.texSubImage2D(3553,W,R.x,R.y,Rt,Pt,q.image),W===0&&Z.generateMipmaps&&G.generateMipmap(3553),rt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,Z,W,Q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=R.max.x-R.min.x+1,Rt=R.max.y-R.min.y+1,Pt=R.max.z-R.min.z+1,Nt=dt.convert(W.format),Gt=dt.convert(W.type);let kt;if(W.isData3DTexture)wt.setTexture3D(W,0),kt=32879;else if(W.isDataArrayTexture)wt.setTexture2DArray(W,0),kt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,W.flipY),G.pixelStorei(37441,W.premultiplyAlpha),G.pixelStorei(3317,W.unpackAlignment);const Ft=G.getParameter(3314),ie=G.getParameter(32878),Fe=G.getParameter(3316),wn=G.getParameter(3315),ti=G.getParameter(32877),se=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;G.pixelStorei(3314,se.width),G.pixelStorei(32878,se.height),G.pixelStorei(3316,R.min.x),G.pixelStorei(3315,R.min.y),G.pixelStorei(32877,R.min.z),Z.isDataTexture||Z.isData3DTexture?G.texSubImage3D(kt,Q,q.x,q.y,q.z,Ct,Rt,Pt,Nt,Gt,se.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(kt,Q,q.x,q.y,q.z,Ct,Rt,Pt,Nt,se.data)):G.texSubImage3D(kt,Q,q.x,q.y,q.z,Ct,Rt,Pt,Nt,Gt,se),G.pixelStorei(3314,Ft),G.pixelStorei(32878,ie),G.pixelStorei(3316,Fe),G.pixelStorei(3315,wn),G.pixelStorei(32877,ti),Q===0&&W.generateMipmaps&&G.generateMipmap(kt),rt.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?wt.setTextureCube(R,0):R.isData3DTexture?wt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?wt.setTexture2DArray(R,0):wt.setTexture2D(R,0),rt.unbindTexture()},this.resetState=function(){_=0,v=0,y=null,rt.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Fr.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class jm extends Fr{}jm.prototype.isWebGL1Renderer=!0;class Ur{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new Ur(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class $m extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class mc extends ke{constructor(t,e,n,i,s,o,r,l,c){super(t,e,n,i,s,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jt extends Rs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gc extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const tr=new de,rl=new H,al=new H;class Zm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(rl),al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(al),e.updateMatrixWorld(),tr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jm extends Zm{constructor(){super(new hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qm extends gc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Jm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tg extends gc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class eg{constructor(t,e,n=0,i=1/0){this.ray=new nc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Sr(t,this,n,e),n.sort(ll),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Sr(t[i],this,n,e);return n.sort(ll),n}}function ll(a,t){return a.distance-t.distance}function Sr(a,t,e,n){if(a.layers.test(t.layers)&&a.raycast(t,e),n===!0){const i=a.children;for(let s=0,o=i.length;s<o;s++)Sr(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dr);const pt={CHUNK_SIZE:16,RENDER_DISTANCE:3,GRAVITY:-19.8,PLAYER_SPEED:12,PLAYER_JUMP_FORCE:8,PLAYER_HEIGHT:1.8,PLAYER_RADIUS:.4,FOVY:75,NEAR:.1,FAR:1e3,PLAYER_MAX_HP:10,FALL_DAMAGE_MIN_SPEED:-12,FALL_DAMAGE_FACTOR:1.5,MAX_MOBS:5,MOB_SPAWN_RADIUS:25,MOB_DESPAWN_RADIUS:35,MAX_DROPPED_ITEMS:30,ITEM_DESPAWN_TIME:30,ITEM_PICKUP_RADIUS:3.5,GAS_WEB_APP_URL:"https://script.google.com/macros/s/AKfycbzKtNw2WKxcfTh8bIqK5-9NqxHXHR9SFn0SRsL366S97-JodCSj_-fCu3rqJzbF2x7Dcw/exec"},js={keyForward:"KeyW",keyBackward:"KeyS",keyLeft:"KeyA",keyRight:"KeyD",keyJump:"Space",keyPlaceBlock:"KeyV",keyBreakBlock:"KeyB",keyOpenMap:"KeyM",keyOpenInventory:"KeyE",keyOpenCrafting:"KeyC",keyOpenManual:"KeyN",keyRegisterHome:"KeyH",invertClicks:!1,enableShadows:!0,easyMode:!0,characterType:"boy1"},cl="maikurafu_config";class ng{currentConfig;constructor(){this.currentConfig={...js},this.load()}load(){try{const t=localStorage.getItem(cl);if(t){const e=JSON.parse(t);this.currentConfig={...js,...e}}}catch(t){console.error("設定の読み込みに失敗しました。デフォルト設定を使用します。",t),this.currentConfig={...js}}return this.currentConfig}getConfig(){return this.currentConfig}save(t){this.currentConfig={...this.currentConfig,...t};try{localStorage.setItem(cl,JSON.stringify(this.currentConfig))}catch(e){console.error("設定の保存に失敗しました。",e)}}reset(){return this.currentConfig={...js},this.save(this.currentConfig),this.currentConfig}}const Ce=new ng;class ig{scene;camera;renderer;container;constructor(t){const e=document.getElementById(t);if(!e)throw new Error(`Container element with id "${t}" not found.`);this.container=e,this.initScene(),this.initCamera(),this.initRenderer(),window.addEventListener("resize",this.onWindowResize.bind(this))}initScene(){this.scene=new $m,this.scene.background=new Vt(8306926),this.scene.fog=new Ur(8306926,.015)}initCamera(){const t=this.container.clientWidth/this.container.clientHeight;this.camera=new Je(pt.FOVY,t,pt.NEAR,pt.FAR),this.camera.position.set(0,5,10),this.camera.lookAt(0,0,0)}initRenderer(){const t=Ce.getConfig();this.renderer=new Fr({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=t.enableShadows,this.renderer.shadowMap.type=Hl,this.container.appendChild(this.renderer.domElement)}onWindowResize(){const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}render(){this.renderer.render(this.scene,this.camera)}}var b=(a=>(a[a.AIR=0]="AIR",a[a.GROUND=1]="GROUND",a[a.DIRT=2]="DIRT",a[a.STONE=3]="STONE",a[a.WOOD=4]="WOOD",a[a.LEAVES=5]="LEAVES",a[a.PLANK=6]="PLANK",a[a.BRICK=7]="BRICK",a[a.SAND=8]="SAND",a[a.COAL_ORE=9]="COAL_ORE",a[a.TORCH=10]="TORCH",a[a.GLASS=11]="GLASS",a[a.DOOR_CLOSED=12]="DOOR_CLOSED",a[a.DOOR_OPEN=13]="DOOR_OPEN",a[a.SWORD=14]="SWORD",a[a.STAIRS=15]="STAIRS",a[a.FENCE=16]="FENCE",a[a.BED_HEAD=17]="BED_HEAD",a[a.BED_FOOT=18]="BED_FOOT",a[a.FURNACE=19]="FURNACE",a[a.CHEST=20]="CHEST",a[a.WATER=21]="WATER",a[a.DIAMOND_SWORD=22]="DIAMOND_SWORD",a[a.HAMMER=23]="HAMMER",a[a.BEDROCK=24]="BEDROCK",a[a.IRON_ORE=25]="IRON_ORE",a[a.GOLD_ORE=26]="GOLD_ORE",a[a.DIAMOND_ORE=27]="DIAMOND_ORE",a[a.STICK=28]="STICK",a[a.IRON_INGOT=29]="IRON_INGOT",a[a.GOLD_INGOT=30]="GOLD_INGOT",a[a.DIAMOND=31]="DIAMOND",a[a.COBBLESTONE=32]="COBBLESTONE",a[a.COAL=33]="COAL",a[a.APPLE=34]="APPLE",a[a.WOODEN_PICKAXE=35]="WOODEN_PICKAXE",a[a.STONE_PICKAXE=36]="STONE_PICKAXE",a[a.IRON_PICKAXE=37]="IRON_PICKAXE",a[a.DIAMOND_PICKAXE=38]="DIAMOND_PICKAXE",a[a.WOODEN_AXE=39]="WOODEN_AXE",a[a.STONE_AXE=40]="STONE_AXE",a[a.IRON_AXE=41]="IRON_AXE",a[a.DIAMOND_AXE=42]="DIAMOND_AXE",a[a.WOODEN_SHOVEL=43]="WOODEN_SHOVEL",a[a.STONE_SHOVEL=44]="STONE_SHOVEL",a[a.IRON_SHOVEL=45]="IRON_SHOVEL",a[a.DIAMOND_SHOVEL=46]="DIAMOND_SHOVEL",a[a.LEATHER_ARMOR_SET=47]="LEATHER_ARMOR_SET",a[a.IRON_ARMOR_SET=48]="IRON_ARMOR_SET",a[a.DIAMOND_ARMOR_SET=49]="DIAMOND_ARMOR_SET",a))(b||{});const Sn={0:{id:0,name:"くうき",isSolid:!1,isTransparent:!0,uvs:{front:0,back:0,left:0,right:0,top:0,bottom:0}},1:{id:1,name:"くさブロック",isSolid:!0,isTransparent:!1,uvs:{front:3,back:3,left:3,right:3,top:0,bottom:2},drops:2,hardness:.5,requiredToolCategory:"shovel"},2:{id:2,name:"つち",isSolid:!0,isTransparent:!1,uvs:{front:1,back:1,left:1,right:1,top:1,bottom:1},hardness:.5,requiredToolCategory:"shovel"},3:{id:3,name:"いし",isSolid:!0,isTransparent:!1,uvs:{front:1,back:1,left:1,right:1,top:1,bottom:1},drops:32,hardness:1.5,requiredToolCategory:"pickaxe"},4:{id:4,name:"まるた",isSolid:!0,isTransparent:!1,uvs:{front:4,back:4,left:4,right:4,top:5,bottom:5},hardness:2,requiredToolCategory:"axe"},5:{id:5,name:"はっぱ",isSolid:!0,isTransparent:!1,uvs:{front:6,back:6,left:6,right:6,top:6,bottom:6},hardness:.2},6:{id:6,name:"いた",isSolid:!0,isTransparent:!1,uvs:{front:9,back:9,left:9,right:9,top:9,bottom:9},hardness:2,requiredToolCategory:"axe"},7:{id:7,name:"れんが",isSolid:!0,isTransparent:!1,uvs:{front:7,back:7,left:7,right:7,top:7,bottom:7},hardness:2,requiredToolCategory:"pickaxe"},8:{id:8,name:"すな",isSolid:!0,isTransparent:!1,uvs:{front:8,back:8,left:8,right:8,top:8,bottom:8},hardness:.5,requiredToolCategory:"shovel"},9:{id:9,name:"せきたんこうせき",isSolid:!0,isTransparent:!1,uvs:{front:25,back:25,left:25,right:25,top:25,bottom:25},drops:33,hardness:3,requiredToolCategory:"pickaxe",minToolTier:0},10:{id:10,name:"たいまつ",isSolid:!1,isTransparent:!0,lightLevel:14,uvs:{front:11,back:11,left:11,right:11,top:11,bottom:11}},11:{id:11,name:"ガラス",isSolid:!0,isTransparent:!0,uvs:{front:12,back:12,left:12,right:12,top:12,bottom:12},hardness:.3},12:{id:12,name:"ドア（しめる）",isSolid:!0,isTransparent:!0,uvs:{front:13,back:13,left:13,right:13,top:13,bottom:13},hardness:1,requiredToolCategory:"axe"},13:{id:13,name:"ドア（あける）",isSolid:!1,isTransparent:!0,uvs:{front:13,back:13,left:13,right:13,top:13,bottom:13},hardness:1,requiredToolCategory:"axe"},14:{id:14,name:"いしのけん",isSolid:!1,isTransparent:!0,uvs:{front:14,back:14,left:14,right:14,top:14,bottom:14},isTool:!0,toolCategory:"sword",toolTier:1,speedMultiplier:1.5},15:{id:15,name:"きのかいだん",isSolid:!0,isTransparent:!0,uvs:{front:9,back:9,left:9,right:9,top:9,bottom:9},hardness:1,requiredToolCategory:"axe"},16:{id:16,name:"さく",isSolid:!0,isTransparent:!0,uvs:{front:16,back:16,left:16,right:16,top:16,bottom:16},hardness:1,requiredToolCategory:"axe"},17:{id:17,name:"ベッド（まくら）",isSolid:!0,isTransparent:!0,uvs:{front:18,back:18,left:18,right:18,top:17,bottom:16},hardness:.5},18:{id:18,name:"ベッド（あしもと）",isSolid:!0,isTransparent:!0,uvs:{front:18,back:18,left:18,right:18,top:18,bottom:16},hardness:.5},19:{id:19,name:"かまど",isSolid:!0,isTransparent:!1,uvs:{front:19,back:2,left:2,right:2,top:2,bottom:2},hardness:2,requiredToolCategory:"pickaxe"},20:{id:20,name:"チェスト",isSolid:!0,isTransparent:!0,uvs:{front:20,back:21,left:21,right:21,top:21,bottom:16},hardness:2,requiredToolCategory:"axe"},21:{id:21,name:"みず",isSolid:!1,isTransparent:!0,uvs:{front:22,back:22,left:22,right:22,top:22,bottom:22}},22:{id:22,name:"ダイヤのけん",isSolid:!1,isTransparent:!0,uvs:{front:23,back:23,left:23,right:23,top:23,bottom:23},isTool:!0,toolCategory:"sword",toolTier:3,speedMultiplier:1.5},23:{id:23,name:"ハンマー",isSolid:!1,isTransparent:!0,uvs:{front:24,back:24,left:24,right:24,top:24,bottom:24},isTool:!0,toolCategory:"sword",toolTier:2,speedMultiplier:1.5},24:{id:24,name:"いわばん",isSolid:!0,isTransparent:!1,uvs:{front:25,back:25,left:25,right:25,top:25,bottom:25}},25:{id:25,name:"てつこうせき",isSolid:!0,isTransparent:!1,uvs:{front:26,back:26,left:26,right:26,top:26,bottom:26},hardness:3,requiredToolCategory:"pickaxe",minToolTier:1},26:{id:26,name:"きんこうせき",isSolid:!0,isTransparent:!1,uvs:{front:27,back:27,left:27,right:27,top:27,bottom:27},hardness:3,requiredToolCategory:"pickaxe",minToolTier:2},27:{id:27,name:"ダイヤこうせき",isSolid:!0,isTransparent:!1,uvs:{front:28,back:28,left:28,right:28,top:28,bottom:28},drops:31,hardness:3,requiredToolCategory:"pickaxe",minToolTier:2},28:{id:28,name:"きのぼう",isSolid:!1,isTransparent:!0,uvs:{front:29,back:29,left:29,right:29,top:29,bottom:29}},29:{id:29,name:"てつインゴット",isSolid:!1,isTransparent:!0,uvs:{front:30,back:30,left:30,right:30,top:30,bottom:30}},30:{id:30,name:"きんインゴット",isSolid:!1,isTransparent:!0,uvs:{front:31,back:31,left:31,right:31,top:31,bottom:31}},31:{id:31,name:"ダイヤモンド",isSolid:!1,isTransparent:!0,uvs:{front:32,back:32,left:32,right:32,top:32,bottom:32}},32:{id:32,name:"丸石",isSolid:!0,isTransparent:!1,uvs:{front:33,back:33,left:33,right:33,top:33,bottom:33}},33:{id:33,name:"石炭",isSolid:!1,isTransparent:!0,uvs:{front:34,back:34,left:34,right:34,top:34,bottom:34}},34:{id:34,name:"リンゴ",isSolid:!1,isTransparent:!0,uvs:{front:35,back:35,left:35,right:35,top:35,bottom:35}},35:{id:35,name:"木のツルハシ",isSolid:!1,isTransparent:!0,uvs:{front:36,back:36,left:36,right:36,top:36,bottom:36},isTool:!0,toolCategory:"pickaxe",toolTier:0,speedMultiplier:2},36:{id:36,name:"石のツルハシ",isSolid:!1,isTransparent:!0,uvs:{front:37,back:37,left:37,right:37,top:37,bottom:37},isTool:!0,toolCategory:"pickaxe",toolTier:1,speedMultiplier:4},37:{id:37,name:"鉄のツルハシ",isSolid:!1,isTransparent:!0,uvs:{front:38,back:38,left:38,right:38,top:38,bottom:38},isTool:!0,toolCategory:"pickaxe",toolTier:2,speedMultiplier:6},38:{id:38,name:"ダイヤのツルハシ",isSolid:!1,isTransparent:!0,uvs:{front:39,back:39,left:39,right:39,top:39,bottom:39},isTool:!0,toolCategory:"pickaxe",toolTier:3,speedMultiplier:8},39:{id:39,name:"木の斧",isSolid:!1,isTransparent:!0,uvs:{front:40,back:40,left:40,right:40,top:40,bottom:40},isTool:!0,toolCategory:"axe",toolTier:0,speedMultiplier:2},40:{id:40,name:"石の斧",isSolid:!1,isTransparent:!0,uvs:{front:41,back:41,left:41,right:41,top:41,bottom:41},isTool:!0,toolCategory:"axe",toolTier:1,speedMultiplier:4},41:{id:41,name:"鉄の斧",isSolid:!1,isTransparent:!0,uvs:{front:42,back:42,left:42,right:42,top:42,bottom:42},isTool:!0,toolCategory:"axe",toolTier:2,speedMultiplier:6},42:{id:42,name:"ダイヤの斧",isSolid:!1,isTransparent:!0,uvs:{front:43,back:43,left:43,right:43,top:43,bottom:43},isTool:!0,toolCategory:"axe",toolTier:3,speedMultiplier:8},43:{id:43,name:"木のシャベル",isSolid:!1,isTransparent:!0,uvs:{front:44,back:44,left:44,right:44,top:44,bottom:44},isTool:!0,toolCategory:"shovel",toolTier:0,speedMultiplier:2},44:{id:44,name:"石のシャベル",isSolid:!1,isTransparent:!0,uvs:{front:45,back:45,left:45,right:45,top:45,bottom:45},isTool:!0,toolCategory:"shovel",toolTier:1,speedMultiplier:4},45:{id:45,name:"鉄のシャベル",isSolid:!1,isTransparent:!0,uvs:{front:46,back:46,left:46,right:46,top:46,bottom:46},isTool:!0,toolCategory:"shovel",toolTier:2,speedMultiplier:6},46:{id:46,name:"ダイヤのシャベル",isSolid:!1,isTransparent:!0,uvs:{front:47,back:47,left:47,right:47,top:47,bottom:47},isTool:!0,toolCategory:"shovel",toolTier:3,speedMultiplier:8},47:{id:47,name:"革の防具セット",isSolid:!1,isTransparent:!0,uvs:{front:48,back:48,left:48,right:48,top:48,bottom:48}},48:{id:48,name:"鉄の防具セット",isSolid:!1,isTransparent:!0,uvs:{front:49,back:49,left:49,right:49,top:49,bottom:49}},49:{id:49,name:"ダイヤの防具セット",isSolid:!1,isTransparent:!0,uvs:{front:50,back:50,left:50,right:50,top:50,bottom:50}}},sg=[{dir:[1,0,0],corners:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uvName:"right"},{dir:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uvName:"left"},{dir:[0,1,0],corners:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],uvName:"top"},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uvName:"bottom"},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uvName:"front"},{dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uvName:"back"}],hl={top:1,bottom:.5,front:.8,back:.8,left:.65,right:.65};class ul{x;y;z;blocks;mesh=null;isDirty=!0;size=pt.CHUNK_SIZE;constructor(t,e,n){this.x=t,this.y=e,this.z=n,this.blocks=new Uint8Array(this.size*this.size*this.size)}getIndex(t,e,n){return t+e*this.size+n*this.size*this.size}isOutOfBounds(t,e,n){return t<0||t>=this.size||e<0||e>=this.size||n<0||n>=this.size}setBlock(t,e,n,i){if(this.isOutOfBounds(t,e,n))return;const s=this.getIndex(t,e,n);this.blocks[s]!==i&&(this.blocks[s]=i,this.isDirty=!0)}getBlock(t,e,n){if(this.isOutOfBounds(t,e,n))return b.AIR;const i=this.getIndex(t,e,n);return this.blocks[i]}generateMesh(t,e){if(!this.isDirty&&this.mesh)return this.mesh;const n=[],i=[],s=[],o=[],r=[];let l=0;const c=4,h=16,d=1/c,u=1/h,m=[],g=2;for(let _=-g;_<this.size+g;_++)for(let v=-g;v<this.size+g;v++)for(let y=-g;y<this.size+g;y++){const x=this.x*this.size+_,w=this.y*this.size+v,E=this.z*this.size+y;t.getBlock(x,w,E)===b.TORCH&&m.push({x:x+.5,y:w+.5,z:E+.5})}const f=(_,v,y,x,w,E,T)=>{const M=[{dir:[1,0,0],corners:[[x,v,E],[x,v,y],[x,w,y],[x,w,E]],uvName:"right"},{dir:[-1,0,0],corners:[[_,v,y],[_,v,E],[_,w,E],[_,w,y]],uvName:"left"},{dir:[0,1,0],corners:[[_,w,E],[x,w,E],[x,w,y],[_,w,y]],uvName:"top"},{dir:[0,-1,0],corners:[[_,v,y],[x,v,y],[x,v,E],[_,v,E]],uvName:"bottom"},{dir:[0,0,1],corners:[[_,v,E],[x,v,E],[x,w,E],[_,w,E]],uvName:"front"},{dir:[0,0,-1],corners:[[x,v,y],[_,v,y],[_,w,y],[x,w,y]],uvName:"back"}];for(const A of M){for(const O of A.corners){n.push(O[0],O[1],O[2]),i.push(...A.dir);const K=hl[A.uvName];let z=0;for(let it=0;it<m.length;it++){const B=m[it],tt=O[0]-B.x,et=O[1]-B.y,G=O[2]-B.z,lt=Math.abs(tt)+Math.abs(et)+Math.abs(G),ct=Math.max(0,1-lt/8);ct>z&&(z=ct)}const X=Math.min(1,.52+z*.48),Y=K*X;s.push(Y,Y*(.93-(1-z)*.08),Y*(.85-(1-z)*.15))}const I=T%c,F=Math.floor(T/c),U=I*d,D=1-(F+1)*u,P=U+d,N=D+u;o.push(U,D,P,D,P,N,U,N),r.push(l,l+1,l+2,l,l+2,l+3),l+=4}};for(let _=0;_<this.size;_++)for(let v=0;v<this.size;v++)for(let y=0;y<this.size;y++){const x=this.getBlock(_,v,y);if(x===b.AIR)continue;const w=Sn[x],E=this.x*this.size+_,T=this.y*this.size+v,M=this.z*this.size+y;if(x===b.STAIRS){f(E,T,M,E+1,T+.5,M+1,9),f(E,T+.5,M,E+1,T+1,M+.5,9);continue}if(x===b.FENCE){const I=(tt,et)=>{const G=_+tt,lt=v,ct=y+et;let ht;return this.isOutOfBounds(G,lt,ct)?ht=t.getBlock(E+tt,T,M+et):ht=this.getBlock(G,lt,ct),ht===b.FENCE},F=I(0,-1),U=I(0,1),D=I(1,0),P=I(-1,0),N=.375,O=.625;f(E+N,T,M+N,E+O,T+1,M+O,16);const K=.4375,z=.5625,X=.75,Y=.875,it=.4375,B=.5625;F&&(f(E+K,T+X,M,E+z,T+Y,M+N,16),f(E+K,T+it,M,E+z,T+B,M+N,16)),U&&(f(E+K,T+X,M+O,E+z,T+Y,M+1,16),f(E+K,T+it,M+O,E+z,T+B,M+1,16)),D&&(f(E+O,T+X,M+K,E+1,T+Y,M+z,16),f(E+O,T+it,M+K,E+1,T+B,M+z,16)),P&&(f(E,T+X,M+K,E+N,T+Y,M+z,16),f(E,T+it,M+K,E+N,T+B,M+z,16));continue}if(x===b.BED_HEAD||x===b.BED_FOOT){const I=x===b.BED_HEAD?17:18,F=18,U=.5625;f(E,T,M,E+1,T+U,M+1,F);{const D=I,P=D%c,N=Math.floor(D/c),O=P*d,K=1-(N+1)*u,z=O+d,X=K+u,Y=[[E,T+U,M+1],[E+1,T+U,M+1],[E+1,T+U,M],[E,T+U,M]];for(const it of Y)n.push(it[0],it[1],it[2]),i.push(0,1,0),s.push(.95,.95,.95);o.push(O,K,z,K,z,X,O,X),r.push(l,l+1,l+2,l,l+2,l+3),l+=4}continue}if(x===b.CHEST){const A=E+.0625,I=M+.0625,F=E+.9375,U=M+.9375;f(A,T,I,F,T+.875,U,21);{const P=20%c,N=Math.floor(20/c),O=P*d,K=1-(N+1)*u,z=O+d,X=K+u,Y=[[A,T,U],[F,T,U],[F,T+.875,U],[A,T+.875,U]];for(const it of Y)n.push(it[0],it[1],it[2]),i.push(0,0,1),s.push(.85,.85,.85);o.push(O,K,z,K,z,X,O,X),r.push(l,l+1,l+2,l,l+2,l+3),l+=4}f(A,T+.875,I,F,T+.9375,U,21);continue}for(const A of sg){const I=_+A.dir[0],F=v+A.dir[1],U=y+A.dir[2];let D=!1;if(x===b.TORCH||x===b.DOOR_CLOSED||x===b.DOOR_OPEN)D=!0;else{let P;this.isOutOfBounds(I,F,U)?P=t.getBlock(E+A.dir[0],T+A.dir[1],M+A.dir[2]):P=this.getBlock(I,F,U);const N=Sn[P];!N.isSolid||N.isTransparent?w.isTransparent&&P===x?D=!1:D=!0:D=!1}if(D){const P=x===b.TORCH,N=x===b.DOOR_CLOSED,O=x===b.DOOR_OPEN;let K="NS";(N||O)&&(K=t.getDoorOrientation(E,T,M));for(const rt of A.corners){let ut=E+rt[0],Mt=T+rt[1],wt=M+rt[2];if(P)ut=E+.5+(rt[0]-.5)*.125,Mt=T+rt[1]*.625,wt=M+.5+(rt[2]-.5)*.125;else if(N)K==="EW"?ut=E+.5+(rt[0]-.5)*.14:wt=M+.5+(rt[2]-.5)*.14;else if(O)K==="EW"?wt=M+.5+(rt[2]-.5)*.14:ut=E+.5+(rt[0]-.5)*.14;else if(x===b.WATER&&rt[1]===1){let L;this.isOutOfBounds(_,v+1,y)?L=t.getBlock(E,T+1,M):L=this.getBlock(_,v+1,y),L!==b.WATER&&(Mt-=.15)}n.push(ut,Mt,wt),i.push(...A.dir);const Lt=hl[A.uvName];let Yt=0;for(let L=0;L<m.length;L++){const C=m[L],V=ut-C.x,$=Mt-C.y,nt=wt-C.z,at=Math.abs(V)+Math.abs($)+Math.abs(nt),dt=Math.max(0,1-at/8);dt>Yt&&(Yt=dt)}const le=x===b.TORCH,ee=le?1:Yt,Wt=Math.min(1,.52+ee*.48),qt=Lt*Wt,Kt=qt,be=qt*(le?.9:.93-(1-ee)*.08),me=qt*(le?.6:.85-(1-ee)*.15);s.push(Kt,be,me)}const z=w.uvs[A.uvName],X=z%c,Y=Math.floor(z/c),it=X*d,B=1-(Y+1)*u,tt=it+d,et=B+u;let G=it,lt=B,ct=tt,ht=et;if(P){const rt=d/16,ut=u/16;G=it+7*rt,ct=it+9*rt,A.uvName==="top"?(ht=et-4*ut,lt=et-6*ut):A.uvName==="bottom"?(ht=et-14*ut,lt=et-16*ut):(ht=et-6*ut,lt=et-16*ut)}o.push(G,lt,ct,lt,ct,ht,G,ht),r.push(l,l+1,l+2,l,l+2,l+3),l+=4}}}if(n.length===0)return this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null),this.isDirty=!1,null;const p=new Qn;return p.setAttribute("position",new cn(n,3)),p.setAttribute("normal",new cn(i,3)),p.setAttribute("color",new cn(s,3)),p.setAttribute("uv",new cn(o,2)),p.setIndex(r),this.mesh?(this.mesh.geometry.dispose(),this.mesh.geometry=p):(this.mesh=new St(p,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0),this.isDirty=!1,this.mesh}}function og(){const a=document.createElement("canvas"),t=16,e=4,n=16;a.width=t*e,a.height=t*n;const i=a.getContext("2d"),s=(V,$,nt,at,dt,st)=>{const j=V*t,xt=$*t;for(let _t=0;_t<t;_t++)for(let At=0;At<t;At++){const Et=(Math.random()-.5)*st,bt=Math.max(0,Math.min(255,Math.floor(nt+Et))),zt=Math.max(0,Math.min(255,Math.floor(at+Et))),$t=Math.max(0,Math.min(255,Math.floor(dt+Et)));i.fillStyle=`rgb(${bt}, ${zt}, ${$t})`,i.fillRect(j+_t,xt+At,1,1)}};s(0,0,100,180,70,30),s(1,0,130,95,65,20),s(2,0,120,120,120,20),s(3,0,130,95,65,20);const o=3*t;for(let V=0;V<t;V++){const $=3+Math.floor(Math.random()*3);for(let nt=0;nt<$;nt++){const at=(Math.random()-.5)*30,dt=Math.max(0,Math.min(255,Math.floor(100+at))),st=Math.max(0,Math.min(255,Math.floor(180+at))),j=Math.max(0,Math.min(255,Math.floor(70+at)));i.fillStyle=`rgb(${dt}, ${st}, ${j})`,i.fillRect(o+V,nt,1,1)}}s(0,1,100,70,45,15);const r=0*t,l=1*t;for(let V=0;V<t;V++)for(let $=0;$<t;$++)(V+$*2)%5===0&&(i.fillStyle=`rgb(${70+Math.random()*10}, ${50+Math.random()*10}, ${30+Math.random()*10})`,i.fillRect(r+V,l+$,1,1));s(1,1,185,150,105,10);const c=1*t,h=1*t;i.fillStyle="rgb(115, 80, 50)";for(let V=0;V<t;V++)for(let $=0;$<t;$++){const nt=V-7.5,at=$-7.5,dt=Math.sqrt(nt*nt+at*at);(Math.abs(dt-3)<.6||Math.abs(dt-6)<.6)&&i.fillRect(c+V,h+$,1,1)}s(2,1,35,115,30,20);const d=2*t,u=1*t;for(let V=0;V<30;V++){const $=Math.floor(Math.random()*t),nt=Math.floor(Math.random()*t);i.fillStyle=`rgb(${15+Math.random()*10}, ${45+Math.random()*10}, ${10+Math.random()*10})`,i.fillRect(d+$,u+nt,1,1)}s(3,1,155,75,55,15);const m=3*t,g=1*t;i.fillStyle="rgb(205, 200, 195)",i.fillRect(m,g+4,t,1),i.fillRect(m,g+9,t,1),i.fillRect(m,g+14,t,1),i.fillRect(m+4,g,1,4),i.fillRect(m+12,g,1,4),i.fillRect(m+8,g+5,1,4),i.fillRect(m+4,g+10,1,4),i.fillRect(m+12,g+10,1,4),i.fillRect(m+8,g+15,1,1),s(0,2,220,205,150,30),s(1,2,190,145,85,12);const f=1*t,p=2*t;i.fillStyle="rgb(140, 100, 55)",i.fillRect(f,p+4,t,1),i.fillRect(f,p+8,t,1),i.fillRect(f,p+12,t,1),s(2,2,120,120,120,20);const _=2*t,v=2*t;i.fillStyle="rgb(40, 40, 40)",[[2,3],[3,3],[3,4],[8,8],[9,8],[9,9],[8,9],[11,2],[12,3],[4,12],[5,11],[5,12]].forEach(([V,$])=>{i.fillRect(_+V,v+$,1,1)});const x=3*t,w=2*t;i.fillStyle="rgba(0, 0, 0, 0)",i.clearRect(x,w,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(x+7,w+8,2,8),i.fillStyle="rgb(255, 120, 0)",i.fillRect(x+7,w+6,2,2),i.fillStyle="rgb(255, 230, 0)",i.fillRect(x+7,w+7,2,1),i.fillStyle="rgb(255, 240, 100)",i.fillRect(x+7,w+4,2,2),i.fillStyle="rgb(60, 40, 20)",i.fillRect(x+7,w+14,2,2);const E=0*t,T=3*t;i.clearRect(E,T,t,t),i.fillStyle="rgba(240, 248, 255, 0.8)",i.fillRect(E,T,t,1),i.fillRect(E,T+t-1,t,1),i.fillRect(E,T,1,t),i.fillRect(E+t-1,T,1,t),i.fillStyle="rgba(255, 255, 255, 0.6)",i.fillRect(E+3,T+3,1,1),i.fillRect(E+4,T+2,1,1),i.fillRect(E+2,T+4,1,1),i.fillRect(E+10,T+10,1,1),i.fillRect(E+11,T+9,1,1),i.fillRect(E+9,T+11,1,1);const M=1*t,A=3*t;i.clearRect(M,A,t,t),i.fillStyle="rgb(130, 85, 45)",i.fillRect(M,A,t,t),i.fillStyle="rgb(90, 55, 25)",i.fillRect(M,A,t,1),i.fillRect(M,A+t-1,t,1),i.fillRect(M,A,1,t),i.fillRect(M+t-1,A,1,t),i.fillRect(M+t/2-1,A,2,t),i.clearRect(M+2,A+2,4,5),i.clearRect(M+10,A+2,4,5),i.fillStyle="rgba(255, 255, 255, 0.4)",i.fillRect(M+2,A+2,4,1),i.fillRect(M+10,A+2,4,1),i.fillStyle="rgb(230, 190, 50)",i.fillRect(M+13,A+9,2,2),i.fillStyle="rgb(180, 140, 20)",i.fillRect(M+14,A+11,1,1);const I=2*t,F=3*t;i.clearRect(I,F,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(I+2,F+13,1,1),i.fillRect(I+3,F+12,1,1),i.fillRect(I+4,F+11,1,1),i.fillStyle="rgb(90, 60, 30)",i.fillRect(I+1,F+14,1,1),i.fillStyle="rgb(230, 190, 50)",i.fillRect(I+5,F+10,1,1),i.fillRect(I+3,F+11,1,1),i.fillRect(I+4,F+12,1,1),i.fillRect(I+5,F+12,1,1),i.fillRect(I+2,F+12,1,1),i.fillRect(I+3,F+13,1,1),i.fillStyle="rgb(120, 120, 120)",[[5,11],[6,10],[7,9],[8,8],[9,7],[10,6],[11,5],[12,4],[13,3]].forEach(([V,$])=>{i.fillRect(I+V,F+$,1,1)}),i.fillStyle="rgb(180, 180, 180)";const D=[[5,10],[6,9],[7,8],[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1]];D.forEach(([V,$])=>{i.fillRect(I+V,F+$,1,1)}),i.fillStyle="rgb(240, 240, 240)";const P=[[4,9],[5,8],[6,7],[7,6],[8,5],[9,4],[10,3],[11,2],[12,1],[13,0]];P.forEach(([V,$])=>{i.fillRect(I+V,F+$,1,1)}),s(0,4,190,145,85,12);const N=0*t,O=4*t;i.fillStyle="rgb(140, 100, 55)",i.fillRect(N,O+4,t,1),i.fillRect(N,O+8,t,1),i.fillRect(N,O+12,t,1);const K=1*t,z=4*t;i.fillStyle="rgb(255, 255, 255)",i.fillRect(K,z,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(K,z,t,1),i.fillRect(K,z+t-1,t,1),i.fillRect(K,z,1,t),i.fillRect(K+t-1,z,1,t),i.fillStyle="rgb(220, 220, 220)",i.fillRect(K+2,z+6,t-4,1),i.fillRect(K+2,z+10,t-4,1);const X=2*t,Y=4*t;i.fillStyle="rgb(200, 30, 30)",i.fillRect(X,Y,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(X,Y,t,1),i.fillRect(X,Y+t-1,t,1),i.fillRect(X,Y,1,t),i.fillRect(X+t-1,Y,1,t),s(3,4,120,115,110,15);const it=3*t,B=4*t;i.fillStyle="rgb(75, 75, 85)",i.fillRect(it+1,B+1,t-2,2),i.fillStyle="rgb(25, 20, 15)",i.fillRect(it+3,B+5,10,8),i.fillStyle="rgb(255, 120, 0)",i.fillRect(it+5,B+7,3,4),i.fillRect(it+8,B+8,3,3),i.fillStyle="rgb(255, 220, 0)",i.fillRect(it+6,B+8,2,2),s(0,5,160,115,65,12);const tt=0*t,et=5*t;i.fillStyle="rgb(100, 65, 30)",i.fillRect(tt,et,t,1),i.fillRect(tt,et+t-1,t,1),i.fillRect(tt,et,1,t),i.fillRect(tt+t-1,et,1,t),i.fillRect(tt+1,et+5,t-2,1),i.fillStyle="rgb(220, 180, 40)",i.fillRect(tt+6,et+2,4,3),i.fillStyle="rgb(160, 120, 20)",i.fillRect(tt+7,et+4,2,2),s(1,5,160,115,65,12);const G=1*t,lt=5*t;i.fillStyle="rgb(100, 65, 30)",i.fillRect(G,lt,t,1),i.fillRect(G,lt+t-1,t,1),i.fillRect(G,lt,1,t),i.fillRect(G+t-1,lt,1,t),i.fillRect(G+1,lt+5,t-2,1);const ct=2*t,ht=5*t;s(2,5,40,100,200,20),i.fillStyle="rgba(20, 80, 220, 0.4)",i.fillRect(ct,ht,t,t),i.fillStyle="rgba(255, 255, 255, 0.3)",i.fillRect(ct+2,ht+3,4,1),i.fillRect(ct+8,ht+7,5,1),i.fillRect(ct+4,ht+12,3,1);const rt=3*t,ut=5*t;i.clearRect(rt,ut,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(rt+2,ut+13,1,1),i.fillRect(rt+3,ut+12,1,1),i.fillRect(rt+4,ut+11,1,1),i.fillStyle="rgb(0, 136, 255)",i.fillRect(rt+5,ut+10,1,1),i.fillRect(rt+3,ut+11,1,1),i.fillRect(rt+4,ut+12,1,1),i.fillRect(rt+5,ut+12,1,1),i.fillRect(rt+2,ut+12,1,1),i.fillRect(rt+3,ut+13,1,1),i.fillStyle="rgb(0, 255, 255)",D.forEach(([V,$])=>{i.fillRect(rt+V,ut+$,1,1)}),i.fillStyle="rgb(240, 255, 255)",P.forEach(([V,$])=>{i.fillRect(rt+V,ut+$,1,1)});const Mt=0*t,wt=6*t;i.clearRect(Mt,wt,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(Mt+7,wt+6,2,8),i.fillStyle="rgb(85, 85, 85)",i.fillRect(Mt+4,wt+2,8,4),i.fillStyle="rgb(120, 120, 120)",i.fillRect(Mt+4,wt+2,8,1);const Lt=1*t,Yt=6*t;i.fillStyle="rgb(30, 30, 30)",i.fillRect(Lt,Yt,t,t);for(let V=0;V<t;V++)for(let $=0;$<t;$++)Math.random()>.5&&(i.fillStyle=Math.random()>.5?"rgb(15, 15, 15)":"rgb(45, 45, 45)",i.fillRect(Lt+V,Yt+$,1,1));const le=(V,$)=>{const nt=V%4,at=Math.floor(V/4),dt=nt*t,st=at*t;i.fillStyle="rgb(120, 120, 120)",i.fillRect(dt,st,t,t),i.fillStyle="rgb(100, 100, 100)",i.fillRect(dt,st,t,t/2),i.fillStyle="rgb(140, 140, 140)",i.fillRect(dt,st+t/2,t,t/2),i.fillStyle="rgb(90, 90, 90)";for(let xt=0;xt<5;xt++)i.fillRect(dt+xt*2,st+xt*2,2,2);i.fillStyle=$,[[2,2],[10,3],[5,7],[12,9],[4,13],[10,14],[7,10]].forEach(([xt,_t])=>{i.fillRect(dt+xt,st+_t,2,2)})};le(26,"rgb(240, 200, 180)"),le(27,"rgb(255, 215, 0)"),le(28,"rgb(0, 255, 255)"),i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(1*t,7*t,t,t),i.fillStyle="rgb(139, 69, 19)",i.beginPath(),i.moveTo(1*t+4,7*t+12),i.lineTo(1*t+12,7*t+4),i.lineWidth=2,i.stroke();const ee=(V,$)=>{const nt=V%4,at=Math.floor(V/4),dt=nt*t,st=at*t;i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(dt,st,t,t),i.fillStyle=$,i.fillRect(dt+3,st+6,10,4),i.fillStyle="rgba(255, 255, 255, 0.4)",i.fillRect(dt+3,st+6,10,1)};ee(30,"rgb(220, 220, 220)"),ee(31,"rgb(255, 215, 0)"),i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(0*t,8*t,t,t),i.fillStyle="rgb(0, 255, 255)",i.beginPath(),i.moveTo(0*t+8,8*t+2),i.lineTo(0*t+14,8*t+8),i.lineTo(0*t+8,8*t+14),i.lineTo(0*t+2,8*t+8),i.fill(),s(1,8,140,140,140,30),i.fillStyle="rgba(100, 100, 100, 0.5)",i.fillRect(1*t+2,8*t+2,4,4),i.fillRect(1*t+10,8*t+8,4,4),i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(2*t,8*t,t,t),i.fillStyle="rgb(30, 30, 30)",i.beginPath(),i.arc(2*t+8,8*t+8,5,0,Math.PI*2),i.fill(),i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(3*t,8*t,t,t),i.fillStyle="rgb(220, 20, 20)",i.beginPath(),i.arc(3*t+8,8*t+9,5,0,Math.PI*2),i.fill(),i.fillStyle="rgb(34, 139, 34)",i.fillRect(3*t+7,8*t+3,2,3);const Wt=(V,$,nt)=>{const at=V%4,dt=Math.floor(V/4),st=at*t,j=dt*t;i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(st,j,t,t),i.strokeStyle="rgb(139, 69, 19)",i.lineWidth=2,i.beginPath(),i.moveTo(st+3,j+13),i.lineTo(st+11,j+5),i.stroke(),i.fillStyle=$,nt==="pickaxe"?(i.beginPath(),i.moveTo(st+2,j+6),i.lineTo(st+10,j+2),i.lineTo(st+14,j+6),i.lineTo(st+10,j+10),i.fill()):nt==="axe"?(i.beginPath(),i.moveTo(st+8,j+2),i.lineTo(st+14,j+4),i.lineTo(st+12,j+10),i.lineTo(st+6,j+6),i.fill()):nt==="shovel"&&(i.beginPath(),i.moveTo(st+10,j+2),i.lineTo(st+14,j+6),i.lineTo(st+12,j+8),i.lineTo(st+8,j+4),i.fill())},qt="rgb(160, 82, 45)",Kt="rgb(169, 169, 169)",be="rgb(220, 220, 220)",me="rgb(0, 255, 255)";Wt(36,qt,"pickaxe"),Wt(37,Kt,"pickaxe"),Wt(38,be,"pickaxe"),Wt(39,me,"pickaxe"),Wt(40,qt,"axe"),Wt(41,Kt,"axe"),Wt(42,be,"axe"),Wt(43,me,"axe"),Wt(44,qt,"shovel"),Wt(45,Kt,"shovel"),Wt(46,be,"shovel"),Wt(47,me,"shovel");const L=(V,$)=>{const nt=V%4,at=Math.floor(V/4),dt=nt*t,st=at*t;i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(dt,st,t,t),i.fillStyle=$,i.fillRect(dt+4,st+3,8,10),i.clearRect(dt+6,st+10,4,3)};L(48,"rgb(160, 82, 45)"),L(49,be),L(50,me);const C=new mc(a);return C.magFilter=ue,C.minFilter=ue,C.wrapS=He,C.wrapT=He,C}class $s{permutation;constructor(t=0){this.permutation=new Array(512);const e=new Array(256);let n=t;for(let i=0;i<256;i++)n=(n*1103515245+12345)%2147483648,e[i]=i;for(let i=255;i>0;i--){n=(n*1103515245+12345)%2147483648;const s=n%(i+1),o=e[i];e[i]=e[s],e[s]=o}for(let i=0;i<512;i++)this.permutation[i]=e[i&255]}fade(t){return t*t*t*(t*(t*6-15)+10)}lerp(t,e,n){return e+t*(n-e)}grad(t,e,n){const i=t&15,s=i<8?e:n,o=i<4?n:i===12||i===14?e:0;return(i&1?-s:s)+(i&2?-o:o)}noise2D(t,e){const n=Math.floor(t)&255,i=Math.floor(e)&255;t-=Math.floor(t),e-=Math.floor(e);const s=this.fade(t),o=this.fade(e),r=this.permutation[n]+i,l=this.permutation[n+1]+i;return this.lerp(o,this.lerp(s,this.grad(this.permutation[r],t,e),this.grad(this.permutation[l],t-1,e)),this.lerp(s,this.grad(this.permutation[r+1],t,e-1),this.grad(this.permutation[l+1],t-1,e-1)))}fbm2D(t,e,n,i=.5,s=1){let o=0,r=s,l=1,c=0;for(let h=0;h<n;h++)o+=this.noise2D(t*r,e*r)*l,c+=l,l*=i,r*=2;return o/c}grad3(t,e,n,i){const s=t&15,o=s<8?e:n,r=s<4?n:s===12||s===14?e:i;return(s&1?-o:o)+(s&2?-r:r)}noise3D(t,e,n){const i=Math.floor(t)&255,s=Math.floor(e)&255,o=Math.floor(n)&255;t-=Math.floor(t),e-=Math.floor(e),n-=Math.floor(n);const r=this.fade(t),l=this.fade(e),c=this.fade(n),h=this.permutation[i]+s,d=this.permutation[h]+o,u=this.permutation[h+1]+o,m=this.permutation[i+1]+s,g=this.permutation[m]+o,f=this.permutation[m+1]+o;return this.lerp(c,this.lerp(l,this.lerp(r,this.grad3(this.permutation[d],t,e,n),this.grad3(this.permutation[g],t-1,e,n)),this.lerp(r,this.grad3(this.permutation[u],t,e-1,n),this.grad3(this.permutation[f],t-1,e-1,n))),this.lerp(l,this.lerp(r,this.grad3(this.permutation[d+1],t,e,n-1),this.grad3(this.permutation[g+1],t-1,e,n-1)),this.lerp(r,this.grad3(this.permutation[u+1],t,e-1,n-1),this.grad3(this.permutation[f+1],t-1,e-1,n-1))))}fbm3D(t,e,n,i,s=.5,o=1){let r=0,l=o,c=1,h=0;for(let d=0;d<i;d++)r+=this.noise3D(t*l,e*l,n*l)*c,h+=c,c*=s,l*=2;return r/h}}class rg{noise;tempNoise;humidNoise;caveNoise;constructor(t=12345){this.noise=new $s(t),this.tempNoise=new $s(t+100),this.humidNoise=new $s(t+200),this.caveNoise=new $s(t+300)}generateV1(t){const e=pt.CHUNK_SIZE,n=t.y*e;for(let i=0;i<e;i++)for(let s=0;s<e;s++)for(let o=0;o<e;o++){const r=n+o;let l=b.AIR;if(r<=-10)l=b.BEDROCK;else if(r<-4){const c=Math.sin(t.x*17.13+t.y*31.41+t.z*53.57+i*7.1+o*13.3+s*19.9)*43758.5453;l=c-Math.floor(c)<.05?b.COAL_ORE:b.STONE}else r<0?l=b.DIRT:r===0&&(l=b.GROUND);t.setBlock(i,o,s,l)}this.generateTrees(t,0)}generateV2(t){const e=pt.CHUNK_SIZE,n=t.x*e,i=t.y*e,s=t.z*e,o=-5;for(let r=0;r<e;r++)for(let l=0;l<e;l++){const c=n+r,h=s+l,d=this.noise.fbm2D(c,h,4,.5,.015),u=this.tempNoise.fbm2D(c,h,2,.5,.005),m=this.humidNoise.fbm2D(c,h,2,.5,.005),g=u>.1&&m<0,f=m>.15,p=Math.floor(d*40)-2;for(let _=0;_<e;_++){const v=i+_;let y=b.AIR;if(v<=-30)y=b.BEDROCK;else if(v<=p){let x=!1;if(v<p-5){const w=this.caveNoise.fbm3D(c,v,h,2,.5,.05);Math.abs(w)<.06&&(x=!0)}if(!x)if(v<p-3){y=b.STONE;const w=Math.sin(t.x*17.13+t.y*31.41+t.z*53.57+r*7.1+_*13.3+l*19.9)*43758.5453;if(w-Math.floor(w)<.06){const T=Math.sin(c*1.1+v*2.2+h*3.3)*1e3,M=T-Math.floor(T);v<-20&&M<.08?y=b.DIAMOND_ORE:v<-10&&M<.2?y=b.GOLD_ORE:v<0&&M<.5?y=b.IRON_ORE:y=b.COAL_ORE}}else v<p?y=g?b.SAND:b.DIRT:v===p&&(y=g?b.SAND:b.GROUND)}else v<=o&&(y=b.WATER);t.setBlock(r,_,l,y)}if(p>=i&&p<i+e&&!g&&p>=o){const _=f?.05:.01,v=p-i;this.tryGenerateTreeAt(t,r,v,l,c,h,_)}}}generateTrees(t,e){const n=pt.CHUNK_SIZE,i=t.y*n;if(e>=i&&e<i+n){const s=e-i;for(let o=2;o<n-2;o++)for(let r=2;r<n-2;r++)this.tryGenerateTreeAt(t,o,s,r,t.x*n+o,t.z*n+r)}}tryGenerateTreeAt(t,e,n,i,s,o,r=.015){if(e<2||e>=pt.CHUNK_SIZE-2||i<2||i>=pt.CHUNK_SIZE-2||n+5>=pt.CHUNK_SIZE)return;const l=Math.sin(s*12.9898+o*78.233)*43758.5453;if(l-Math.floor(l)<r){const h=n+1;t.setBlock(e,h,i,b.WOOD),t.setBlock(e,h+1,i,b.WOOD),t.setBlock(e,h+2,i,b.WOOD);const d=h+2;t.setBlock(e+1,d,i,b.LEAVES),t.setBlock(e-1,d,i,b.LEAVES),t.setBlock(e,d,i+1,b.LEAVES),t.setBlock(e,d,i-1,b.LEAVES);for(let u=-1;u<=1;u++)for(let m=-1;m<=1;m++)(u!==0||m!==0)&&t.setBlock(e+u,d+1,i+m,b.LEAVES);t.setBlock(e,d+1,i,b.LEAVES),t.setBlock(e,d+2,i,b.LEAVES),t.setBlock(e+1,d+2,i,b.LEAVES),t.setBlock(e-1,d+2,i,b.LEAVES),t.setBlock(e,d+2,i+1,b.LEAVES),t.setBlock(e,d+2,i-1,b.LEAVES)}}}let ag=class{chunks=new Map;scene;material;modifiedBlocks=new Map;doorOrientations=new Map;chunkVersions=new Map;terrainGenerator;constructor(t){this.scene=t;const e=og(),n=new jt({map:e,vertexColors:!0,roughness:.85,metalness:.05,alphaTest:.5,side:zn});n.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("vec3 totalEmissiveRadiance = emissive;",`
        // 頂点カラーから松明光成分（最低輝度0.52を超える部分）を抽出し、自己発光として加算する
        vec3 torchLight = max(vec3(0.0), vColor - vec3(0.52));
        // 温かみのあるオレンジ色の自己発光を1.5倍で加算（夜間でも綺麗に光る）
        vec3 totalEmissiveRadiance = emissive + torchLight * 1.5;
        `)},this.material=n,this.terrainGenerator=new rg}getChunkKey(t,e,n){return`${t},${e},${n}`}getChunk(t,e,n){return this.chunks.get(this.getChunkKey(t,e,n))}*getLoadedChunks(){yield*this.chunks.values()}getBlock(t,e,n){const i=Math.floor(t/pt.CHUNK_SIZE),s=Math.floor(e/pt.CHUNK_SIZE),o=Math.floor(n/pt.CHUNK_SIZE),r=this.getChunk(i,s,o);if(!r)return b.AIR;const l=(t%pt.CHUNK_SIZE+pt.CHUNK_SIZE)%pt.CHUNK_SIZE,c=(e%pt.CHUNK_SIZE+pt.CHUNK_SIZE)%pt.CHUNK_SIZE,h=(n%pt.CHUNK_SIZE+pt.CHUNK_SIZE)%pt.CHUNK_SIZE;return r.getBlock(l,c,h)}setBlock(t,e,n,i){const s=Math.floor(t/pt.CHUNK_SIZE),o=Math.floor(e/pt.CHUNK_SIZE),r=Math.floor(n/pt.CHUNK_SIZE),l=this.getChunkKey(s,o,r),c=pt.CHUNK_SIZE,h=(t%c+c)%c,d=(e%c+c)%c,u=(n%c+c)%c,m=h+d*c+u*c*c;let g=this.modifiedBlocks.get(l);g||(g=new Map,this.modifiedBlocks.set(l,g)),g.set(m,i);let f=this.getChunk(s,o,r);f||(f=new ul(s,o,r),this.chunks.set(l,f)),f.setBlock(h,d,u,i),this.updateChunkMesh(s,o,r),h===0&&this.updateChunkMesh(s-1,o,r),h===pt.CHUNK_SIZE-1&&this.updateChunkMesh(s+1,o,r),d===0&&this.updateChunkMesh(s,o-1,r),d===pt.CHUNK_SIZE-1&&this.updateChunkMesh(s,o+1,r),u===0&&this.updateChunkMesh(s,o,r-1),u===pt.CHUNK_SIZE-1&&this.updateChunkMesh(s,o,r+1)}setDoorOrientation(t,e,n,i){this.doorOrientations.set(`${t},${e},${n}`,i)}getDoorOrientation(t,e,n){return this.doorOrientations.get(`${t},${e},${n}`)??"NS"}removeDoorOrientation(t,e,n){this.doorOrientations.delete(`${t},${e},${n}`)}updateChunkMesh(t,e,n){const i=this.getChunk(t,e,n);if(!i)return;const s=i.mesh,o=i.generateMesh(this,this.material);o&&!s?this.scene.add(o):!o&&s&&this.scene.remove(s)}generateWorldAround(t,e){const n=Math.floor(t/pt.CHUNK_SIZE),i=Math.floor(e/pt.CHUNK_SIZE),s=pt.RENDER_DISTANCE,o=new Set;for(let l=n-s;l<=n+s;l++)for(let c=i-s;c<=i+s;c++)for(let h=-1;h<=1;h++){const d=this.getChunkKey(l,h,c);if(o.add(d),!this.chunks.has(d)){const u=new ul(l,h,c);this.generateChunkTerrain(u),this.chunks.set(d,u)}}for(const[l,c]of this.chunks.entries())o.has(l)||(c.mesh&&(this.scene.remove(c.mesh),c.mesh.geometry.dispose(),c.mesh=null),this.chunks.delete(l));for(let l=n-s;l<=n+s;l++)for(let c=i-s;c<=i+s;c++)for(let h=-1;h<=1;h++)this.updateChunkMesh(l,h,c);const r=document.getElementById("chunks-display");r&&(r.textContent=this.chunks.size.toString())}generateChunkTerrain(t){const e=this.getChunkKey(t.x,t.y,t.z);let n=this.chunkVersions.get(e);const i=6;Math.abs(t.x)<=i&&Math.abs(t.z)<=i&&(n=1,this.chunkVersions.set(e,1)),n===void 0&&(this.modifiedBlocks.has(e)?n=1:n=2,this.chunkVersions.set(e,n)),n===1?this.terrainGenerator.generateV1(t):this.terrainGenerator.generateV2(t);const s=this.modifiedBlocks.get(e);if(s){const o=pt.CHUNK_SIZE;for(const[r,l]of s.entries()){const c=r%o,h=Math.floor(r%(o*o)/o),d=Math.floor(r/(o*o));t.setBlock(c,h,d,l)}}}getChunkMeshes(){const t=[];for(const e of this.chunks.values())e.mesh&&t.push(e.mesh);return t}getChunksCount(){return this.chunks.size}getModifiedBlocksData(){const t={};for(const[i,s]of this.modifiedBlocks.entries()){if(s.size===0)continue;const o={};for(const[r,l]of s.entries())o[r.toString()]=l;t[i]=o}const e={};for(const[i,s]of this.doorOrientations.entries())e[i]=s;const n={};for(const[i,s]of this.chunkVersions.entries())n[i]=s;return{blocks:t,doorOrientations:e,chunkVersions:n}}setModifiedBlocksData(t){if(this.modifiedBlocks.clear(),this.doorOrientations.clear(),this.chunkVersions.clear(),!t)return;const e=t.blocks??t;for(const n of Object.keys(e)){const i=new Map,s=e[n];for(const o of Object.keys(s)){const r=parseInt(o,10),l=s[o];i.set(r,l)}this.modifiedBlocks.set(n,i)}if(t.doorOrientations)for(const[n,i]of Object.entries(t.doorOrientations))this.doorOrientations.set(n,i);if(t.chunkVersions)for(const[n,i]of Object.entries(t.chunkVersions))this.chunkVersions.set(n,i)}clearAndRebuild(t,e){for(const n of this.chunks.values())n.mesh&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh=null);this.chunks.clear(),this.generateWorldAround(t,e)}};class lg{keys={};justPressedKeys={};mouseDelta={x:0,y:0};isLocked=!1;isLeftClickDown=!1;isRightClickDown=!1;lastModalCloseTime=0;isActionActive(t){const e=Ce.getConfig();switch(t){case"forward":return!!this.keys[e.keyForward];case"backward":return!!this.keys[e.keyBackward];case"left":return!!this.keys[e.keyLeft];case"right":return!!this.keys[e.keyRight];case"jump":return!!this.keys[e.keyJump];default:return!1}}targetElement;constructor(t){this.targetElement=t,window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),document.addEventListener("mousemove",this.onMouseMove.bind(this)),document.addEventListener("pointerlockchange",this.onPointerLockChange.bind(this)),window.addEventListener("mousedown",e=>{this.isLocked&&(e.button===0&&(this.isLeftClickDown=!0),e.button===2&&(this.isRightClickDown=!0))}),window.addEventListener("mouseup",e=>{e.button===0&&(this.isLeftClickDown=!1),e.button===2&&(this.isRightClickDown=!1)})}requestLock(){this.isLocked||this.targetElement.requestPointerLock()}onKeyDown(t){const e=t.code;e==="Tab"&&t.preventDefault();const n=Ce.getConfig(),i=[n.keyForward,n.keyBackward,n.keyLeft,n.keyRight,n.keyJump,n.keyPlaceBlock,n.keyBreakBlock,n.keyOpenMap,n.keyOpenInventory,n.keyOpenCrafting,n.keyOpenManual,n.keyRegisterHome];this.isLocked&&(e==="F5"||e==="KeyQ"||e==="KeyE"||e==="KeyC"||e==="KeyH"||i.includes(e))&&t.preventDefault(),this.keys[e]||(this.justPressedKeys[e]=!0),this.keys[e]=!0}onKeyUp(t){const e=t.code;this.keys[e]=!1,this.justPressedKeys[e]=!1}onMouseMove(t){this.isLocked&&(this.mouseDelta.x+=t.movementX,this.mouseDelta.y+=t.movementY)}onPointerLockChange(){const t=document.getElementById("menu-overlay"),e=document.getElementById("crosshair"),n=document.getElementById("inventory-modal");if(document.pointerLockElement===this.targetElement)this.isLocked=!0,t&&(t.style.display="none"),e&&(e.style.display="block");else{this.isLocked=!1,this.clearKeys();const i=n&&n.style.display==="flex",s=document.getElementById("crafting-modal"),o=s&&s.style.display==="flex",r=document.getElementById("manual-modal"),l=r&&r.style.display==="flex",c=document.getElementById("world-map-modal"),h=c&&c.style.display==="flex";!i&&!o&&!l&&!h&&performance.now()-this.lastModalCloseTime>300&&t&&(t.style.display="flex",t.style.opacity="1"),e&&(e.style.display="none")}}clearKeys(){this.keys={},this.justPressedKeys={}}consumeJustPressed(t){return this.justPressedKeys[t]?(this.justPressedKeys[t]=!1,!0):!1}consumeMouseDelta(){const t={...this.mouseDelta};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}}class hn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new S);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new S);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new hn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],r=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],f=i[0],p=i[1],_=i[2],v=i[3],y=i[4],x=i[5],w=i[6],E=i[7],T=i[8];return s[0]=o*f+r*v+l*w,s[1]=o*p+r*y+l*E,s[2]=o*_+r*x+l*T,s[3]=c*f+h*v+d*w,s[4]=c*p+h*y+d*E,s[5]=c*_+h*x+d*T,s[6]=u*f+m*v+g*w,s[7]=u*p+m*y+g*E,s[8]=u*_+m*x+g*T,e}scale(t,e){e===void 0&&(e=new hn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new S);const n=3,i=4,s=[];let o,r;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+i*r]=this.elements[o+3*r];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,s[o+i*o]===0){for(r=o+1;r<c;r++)if(s[o+i*r]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*r];while(--h);break}}if(s[o+i*o]!==0)for(r=o+1;r<c;r++){const m=s[o+i*r]/s[o+i*o];h=d;do u=d-h,s[u+i*r]=u<=o?0:s[u+i*r]-s[u+i*o]*m;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new hn);const e=3,n=6,i=cg;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let r=3;const l=r;let c;const h=n;let d;do{if(s=l-r,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const u=i[s+n*o]/i[s+n*s];c=h;do d=h-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--c)}}while(--r);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--c)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,r=n+n,l=i+i,c=e*o,h=e*r,d=e*l,u=n*r,m=n*l,g=i*l,f=s*o,p=s*r,_=s*l,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-_,v[3*0+2]=d+p,v[3*1+0]=h+_,v[3*1+1]=1-(c+g),v[3*1+2]=m-f,v[3*2+0]=d-p,v[3*2+1]=m+f,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new hn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const cg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,o=this.x,r=this.y,l=this.z;return e.x=r*s-l*i,e.y=l*n-o*s,e.z=o*i-r*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new S(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new S(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new hn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new S);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(r-i)*(r-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(r-i)*(r-i)}scale(t,e){e===void 0&&(e=new S);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new S),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new S),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new S),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=hg,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=ug;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(dl),dl.almostEquals(t,e)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const hg=new S,ug=new S,dl=new S;class Xe{constructor(t){t===void 0&&(t={}),this.lowerBound=new S,this.upperBound=new S,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,r=n;s.copy(t[0]),r&&r.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];r&&(r.vmult(c,fl),c=fl),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Xe().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,r=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&r&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,r,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),r.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=pl,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=pl,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,r=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(r,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(r,l),Math.max(c,h)),Math.max(d,u));return!(g<0||m>g)}}const fl=new S,pl=[new S,new S,new S,new S,new S,new S,new S,new S];class ml{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class vc{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class ae{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new S),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=dg,i=fg;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new ae);const n=this.x,i=this.y,s=this.z,o=this.w,r=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*r+i*c-s*l,e.y=i*h+o*l+s*r-n*c,e.z=s*h+o*c+n*l-i*r,e.w=o*h-n*r-i*l-s*c,e}inverse(t){t===void 0&&(t=new ae);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new ae),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,o=this.x,r=this.y,l=this.z,c=this.w,h=c*n+r*s-l*i,d=c*i+l*n-o*s,u=c*s+o*i-r*n,m=-o*n-r*i-l*s;return e.x=h*c+m*-o+d*-l-u*-r,e.y=d*c+m*-r+u*-o-h*-l,e.z=u*c+m*-l+h*-r-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,r=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*r+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=r*r,m=l*l;n=Math.atan2(2*r*c-2*o*l,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*r*l,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),r=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*r+s*c*h,this.y=s*c*r-l*o*h,this.z=s*o*h+l*c*r,this.w=s*o*r-l*c*h):i==="YXZ"?(this.x=l*o*r+s*c*h,this.y=s*c*r-l*o*h,this.z=s*o*h-l*c*r,this.w=s*o*r+l*c*h):i==="ZXY"?(this.x=l*o*r-s*c*h,this.y=s*c*r+l*o*h,this.z=s*o*h+l*c*r,this.w=s*o*r-l*c*h):i==="ZYX"?(this.x=l*o*r-s*c*h,this.y=s*c*r+l*o*h,this.z=s*o*h-l*c*r,this.w=s*o*r+l*c*h):i==="YZX"?(this.x=l*o*r+s*c*h,this.y=s*c*r+l*o*h,this.z=s*o*h-l*c*r,this.w=s*o*r-l*c*h):i==="XZY"&&(this.x=l*o*r-s*c*h,this.y=s*c*r-l*o*h,this.z=s*o*h+l*c*r,this.w=s*o*r+l*c*h),this}clone(){return new ae(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new ae);const i=this.x,s=this.y,o=this.z,r=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,m,g,f,p;return m=i*l+s*c+o*h+r*d,m<0&&(m=-m,l=-l,c=-c,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),f=Math.sin((1-e)*u)/g,p=Math.sin(e*u)/g):(f=1-e,p=e),n.x=f*i+p*l,n.y=f*s+p*c,n.z=f*o+p*h,n.w=f*r+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new ae);const s=t.x*n.x,o=t.y*n.y,r=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-r*c),i.y+=u*(o*d+r*l-s*h),i.z+=u*(r*d+s*c-o*l),i.w+=u*(-s*l-o*c-r*h),i}}const dg=new S,fg=new S,pg={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class vt{constructor(t){t===void 0&&(t={}),this.id=vt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}vt.idCounter=0;vt.types=pg;class Ht{constructor(t){t===void 0&&(t={}),this.position=new S,this.quaternion=new ae,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ht.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ht.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),n.vsub(t,i),e.conjugate(gl),gl.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new S),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new S),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const gl=new ae;class ys extends vt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:vt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new S;for(let s=0;s!==t.length;s++){const o=t[s],r=o.length;for(let l=0;l!==r;l++){const c=(l+1)%r;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new S;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];ys.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new S,o=new S;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,r,l,c){const h=new S;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const f=h.dot(o);f>u&&(u=f,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const f=n.vertices[n.faces[d][g]],p=new S;p.copy(f),s.vmult(p,p),i.vadd(p,p),m.push(p)}d>=0&&this.clipFaceAgainstHull(o,t,e,m,r,l,c)}findSeparatingAxis(t,e,n,i,s,o,r,l){const c=new S,h=new S,d=new S,u=new S,m=new S,g=new S;let f=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let _=0;_!==p.uniqueAxes.length;_++){n.vmult(p.uniqueAxes[_],c);const v=p.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<f&&(f=v,o.copy(c))}else{const _=r?r.length:p.faces.length;for(let v=0;v<_;v++){const y=r?r[v]:v;c.copy(p.faceNormals[y]),n.vmult(c,c);const x=p.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<f&&(f=x,o.copy(c))}}if(t.uniqueAxes)for(let _=0;_!==t.uniqueAxes.length;_++){s.vmult(t.uniqueAxes[_],h);const v=p.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<f&&(f=v,o.copy(h))}else{const _=l?l.length:t.faces.length;for(let v=0;v<_;v++){const y=l?l[v]:v;h.copy(t.faceNormals[y]),s.vmult(h,h);const x=p.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<f&&(f=x,o.copy(h))}}for(let _=0;_!==p.uniqueEdges.length;_++){n.vmult(p.uniqueEdges[_],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],m),u.cross(m,g),!g.almostZero()){g.normalize();const y=p.testSepAxis(g,t,e,n,i,s);if(y===!1)return!1;y<f&&(f=y,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const r=this;ys.project(r,t,n,i,er),ys.project(e,t,s,o,nr);const l=er[0],c=er[1],h=nr[0],d=nr[1];if(l<d||h<c)return!1;const u=l-d,m=h-c;return u<m?u:m}calculateLocalInertia(t,e){const n=new S,i=new S;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,r=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*r*2*r),e.y=1/12*t*(2*s*2*s+2*r*2*r),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,r){const l=new S,c=new S,h=new S,d=new S,u=new S,m=new S,g=new S,f=new S,p=this,_=[],v=i,y=_;let x=-1,w=Number.MAX_VALUE;for(let I=0;I<p.faces.length;I++){l.copy(p.faceNormals[I]),n.vmult(l,l);const F=l.dot(t);F<w&&(w=F,x=I)}if(x<0)return;const E=p.faces[x];E.connectedFaces=[];for(let I=0;I<p.faces.length;I++)for(let F=0;F<p.faces[I].length;F++)E.indexOf(p.faces[I][F])!==-1&&I!==x&&E.connectedFaces.indexOf(I)===-1&&E.connectedFaces.push(I);const T=E.length;for(let I=0;I<T;I++){const F=p.vertices[E[I]],U=p.vertices[E[(I+1)%T]];F.vsub(U,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[x]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(F),n.vmult(m,m),e.vadd(m,m);const D=E.connectedFaces[I];g.copy(this.faceNormals[D]);const P=this.getPlaneConstantOfFace(D);f.copy(g),n.vmult(f,f);const N=P-f.dot(e);for(this.clipFaceAgainstPlane(v,y,f,N);v.length;)v.shift();for(;y.length;)v.push(y.shift())}g.copy(this.faceNormals[x]);const M=this.getPlaneConstantOfFace(x);f.copy(g),n.vmult(f,f);const A=M-f.dot(e);for(let I=0;I<v.length;I++){let F=f.dot(v[I])+A;if(F<=s&&(console.log(`clamped: depth=${F} to minDist=${s}`),F=s),F<=o){const U=v[I];if(F<=1e-6){const D={point:U,normal:f,depth:F};r.push(D)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const r=t.length;if(r<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<r;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const d=new S;d.copy(c),e.push(d)}else{const d=new S;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){const d=new S;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new S);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,r,l,c,h,d,u=new S;for(let m=0;m<s.length;m++){u.copy(s[m]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(r===void 0||g.y<r)&&(r=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,r,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new S);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new S;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let r=i[o];const l=e[n[o][0]],c=new S;t.vsub(l,c);const h=r.dot(c),d=new S;s.vsub(l,d);const u=r.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,r=mg;let l=0,c=0;const h=gg,d=t.vertices;h.setZero(),Ht.vectorToLocalFrame(n,i,e,r),Ht.pointToLocalFrame(n,i,h,h);const u=h.dot(r);c=l=d[0].dot(r);for(let m=1;m<o;m++){const g=d[m].dot(r);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const m=c;c=l,l=m}s[0]=l,s[1]=c}}const er=[],nr=[];new S;const mg=new S,gg=new S;class bi extends vt{constructor(t){super({type:vt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=S,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],r=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new ys({vertices:s,faces:o,axes:r});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new S),bi.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)qn.set(s[o][0],s[o][1],s[o][2]),e.vmult(qn,qn),t.vadd(qn,qn),n(qn.x,qn.y,qn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;mn[0].set(s.x,s.y,s.z),mn[1].set(-s.x,s.y,s.z),mn[2].set(-s.x,-s.y,s.z),mn[3].set(-s.x,-s.y,-s.z),mn[4].set(s.x,-s.y,-s.z),mn[5].set(s.x,s.y,-s.z),mn[6].set(-s.x,s.y,-s.z),mn[7].set(s.x,-s.y,s.z);const o=mn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let r=1;r<8;r++){const l=mn[r];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const qn=new S,mn=[new S,new S,new S,new S,new S,new S,new S,new S],Gr={DYNAMIC:1,STATIC:2,KINEMATIC:4},Vr={AWAKE:0,SLEEPY:1,SLEEPING:2};class mt extends vc{constructor(t){t===void 0&&(t={}),super(),this.id=mt.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new S,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new S,this.force=new S;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?mt.STATIC:mt.DYNAMIC,typeof t.type==typeof mt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=mt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new ae,this.initQuaternion=new ae,this.previousQuaternion=new ae,this.interpolatedQuaternion=new ae,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new S,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new hn,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new hn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new S(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new S(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Xe,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=mt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===mt.SLEEPING&&this.dispatchEvent(mt.wakeupEvent)}sleep(){this.sleepState=mt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===mt.AWAKE&&n<i?(this.sleepState=mt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(mt.sleepyEvent)):e===mt.SLEEPY&&n>i?this.wakeUp():e===mt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(mt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===mt.SLEEPING||this.type===mt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new S),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new S),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new S,s=new ae;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const r=e[s].length(),l=o.boundingSphereRadius;r+l>i&&(i=r+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=vg,o=_g,r=this.quaternion,l=this.aabb,c=yg;for(let h=0;h!==i;h++){const d=t[h];r.vmult(e[h],s),s.vadd(this.position,s),r.mult(n[h],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=xg,i=Mg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new S),this.type!==mt.DYNAMIC)return;this.sleepState===mt.SLEEPING&&this.wakeUp();const n=bg;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new S),this.type!==mt.DYNAMIC)return;const n=Sg,i=wg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===mt.DYNAMIC&&(this.sleepState===mt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new S),this.type!==mt.DYNAMIC)return;this.sleepState===mt.SLEEPING&&this.wakeUp();const n=e,i=Eg;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Cg;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new S),this.type!==mt.DYNAMIC)return;const n=Ag,i=Tg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Rg;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),bi.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new S;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===mt.DYNAMIC||this.type===mt.KINEMATIC)||this.sleepState===mt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,r=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*t;i.x+=r.x*m*u.x,i.y+=r.y*m*u.y,i.z+=r.z*m*u.z;const g=d.elements,f=this.angularFactor,p=l.x*f.x,_=l.y*f.y,v=l.z*f.z;s.x+=t*(g[0]*p+g[1]*_+g[2]*v),s.y+=t*(g[3]*p+g[4]*_+g[5]*v),s.z+=t*(g[6]*p+g[7]*_+g[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}mt.idCounter=0;mt.COLLIDE_EVENT_NAME="collide";mt.DYNAMIC=Gr.DYNAMIC;mt.STATIC=Gr.STATIC;mt.KINEMATIC=Gr.KINEMATIC;mt.AWAKE=Vr.AWAKE;mt.SLEEPY=Vr.SLEEPY;mt.SLEEPING=Vr.SLEEPING;mt.wakeupEvent={type:"wakeup"};mt.sleepyEvent={type:"sleepy"};mt.sleepEvent={type:"sleep"};const vg=new S,_g=new ae,yg=new Xe,xg=new hn,Mg=new hn;new hn;const bg=new S,Sg=new S,wg=new S,Eg=new S,Cg=new S,Ag=new S,Tg=new S,Rg=new S;class _c{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&mt.STATIC||t.sleepState===mt.SLEEPING)&&(e.type&mt.STATIC||e.sleepState===mt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Lg;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Dg,i=Ig,s=Pg,o=t.length;for(let r=0;r!==o;r++)i[r]=t[r],s[r]=e[r];t.length=0,e.length=0;for(let r=0;r!==o;r++){const l=i[r].id,c=s[r].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=r,n.keys.push(h)}for(let r=0;r!==n.keys.length;r++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new S;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Lg=new S;new S;new ae;new S;const Dg={keys:[]},Ig=[],Pg=[];new S;new S;new S;class Og extends _c{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,r;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],r=i[c],this.needBroadphaseCollision(o,r)&&this.intersectionTest(o,r,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class ao{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,r){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=r}}let yc,xc,Mc,bc,Sc,wc,Ec;const Hr={CLOSEST:1,ANY:2,ALL:4};yc=vt.types.SPHERE;xc=vt.types.PLANE;Mc=vt.types.BOX;bc=vt.types.CYLINDER;Sc=vt.types.CONVEXPOLYHEDRON;wc=vt.types.HEIGHTFIELD;Ec=vt.types.TRIMESH;class re{get[yc](){return this._intersectSphere}get[xc](){return this._intersectPlane}get[Mc](){return this._intersectBox}get[bc](){return this._intersectConvex}get[Sc](){return this._intersectConvex}get[wc](){return this._intersectHeightfield}get[Ec](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new S),e===void 0&&(e=new S),this.from=t.clone(),this.to=e.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=re.ANY,this.result=new ao,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||re.ANY,this.result=e.result||new ao,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(vl),ir.length=0,t.broadphase.aabbQuery(t,vl,ir),this.intersectBodies(ir),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=Ng,s=Bg;for(let o=0,r=t.shapes.length;o<r;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if($g(s,this.direction,n)>t.boundingSphereRadius)return;const r=this[t.type];r&&r.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,r=this.to,l=this.direction,c=new S(0,0,1);e.vmult(c,c);const h=new S;o.vsub(n,h);const d=h.dot(c);r.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(r)<d)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const g=new S,f=new S,p=new S;o.vsub(n,g);const _=-c.dot(g)/m;l.scale(_,f),o.vadd(f,p),this.reportIntersection(c,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=zg;o.from.copy(this.from),o.to.copy(this.to),Ht.pointToLocalFrame(n,e,o.from,o.from),Ht.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const r=kg;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Xe;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,r,!0),l=Math.max(l,r[0]),c=Math.max(c,r[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,r,!0),h=Math.min(h,r[0]+1),d=Math.min(d,r[1]+1);for(let m=l;m<h;m++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(m,g,!1),Ht.pointToWorldFrame(n,e,t.pillarOffset,Zs),this._intersectConvex(t.pillarConvex,e,Zs,i,s,_l),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Ht.pointToWorldFrame(n,e,t.pillarOffset,Zs),this._intersectConvex(t.pillarConvex,e,Zs,i,s,_l)}}}_intersectSphere(t,e,n,i,s){const o=this.from,r=this.to,l=t.radius,c=(r.x-o.x)**2+(r.y-o.y)**2+(r.z-o.z)**2,h=2*((r.x-o.x)*(o.x-n.x)+(r.y-o.y)*(o.y-n.y)+(r.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,m=Fg,g=Ug;if(!(u<0))if(u===0)o.lerp(r,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const f=(-h-Math.sqrt(u))/(2*c),p=(-h+Math.sqrt(u))/(2*c);if(f>=0&&f<=1&&(o.lerp(r,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(r,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const r=Gg,l=yl,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,m=this.direction,g=this.from,f=this.to,p=g.distanceTo(f),_=c?c.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<_;y++){const x=c?c[y]:y,w=h[x],E=u[x],T=e,M=n;l.copy(d[w[0]]),T.vmult(l,l),l.vadd(M,l),l.vsub(g,l),T.vmult(E,r);const A=m.dot(r);if(Math.abs(A)<this.precision)continue;const I=r.dot(l)/A;if(!(I<0)){m.scale(I,Oe),Oe.vadd(g,Oe),rn.copy(d[w[0]]),T.vmult(rn,rn),M.vadd(rn,rn);for(let F=1;!v.shouldStop&&F<w.length-1;F++){gn.copy(d[w[F]]),vn.copy(d[w[F+1]]),T.vmult(gn,gn),T.vmult(vn,vn),M.vadd(gn,gn),M.vadd(vn,vn);const U=Oe.distanceTo(g);!(re.pointInTriangle(Oe,rn,gn,vn)||re.pointInTriangle(Oe,gn,rn,vn))||U>p||this.reportIntersection(r,Oe,s,i,x)}}}}_intersectTrimesh(t,e,n,i,s,o){const r=Vg,l=Yg,c=jg,h=yl,d=Hg,u=Wg,m=qg,g=Kg,f=Xg,p=t.indices;t.vertices;const _=this.from,v=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),Ht.vectorToLocalFrame(n,e,y,d),Ht.pointToLocalFrame(n,e,_,u),Ht.pointToLocalFrame(n,e,v,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,m.vsub(u,d),d.normalize();const x=u.distanceSquared(m);t.tree.rayQuery(this,c,l);for(let w=0,E=l.length;!this.result.shouldStop&&w!==E;w++){const T=l[w];t.getNormal(T,r),t.getVertex(p[T*3],rn),rn.vsub(u,h);const M=d.dot(r),A=r.dot(h)/M;if(A<0)continue;d.scale(A,Oe),Oe.vadd(u,Oe),t.getVertex(p[T*3+1],gn),t.getVertex(p[T*3+2],vn);const I=Oe.distanceSquared(u);!(re.pointInTriangle(Oe,gn,rn,vn)||re.pointInTriangle(Oe,rn,gn,vn))||I>x||(Ht.vectorToWorldFrame(e,r,f),Ht.pointToWorldFrame(n,e,Oe,g),this.reportIntersection(f,g,s,i,T))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,r=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case re.ALL:this.hasHit=!0,c.set(o,r,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case re.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,r,t,e,n,i,l));break;case re.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,r,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,di),n.vsub(e,cs),t.vsub(e,sr);const s=di.dot(di),o=di.dot(cs),r=di.dot(sr),l=cs.dot(cs),c=cs.dot(sr);let h,d;return(h=l*r-o*c)>=0&&(d=s*c-o*r)>=0&&h+d<s*l-o*o}}re.CLOSEST=Hr.CLOSEST;re.ANY=Hr.ANY;re.ALL=Hr.ALL;const vl=new Xe,ir=[],cs=new S,sr=new S,Ng=new S,Bg=new ae,Oe=new S,rn=new S,gn=new S,vn=new S;new S;new ao;const _l={faceList:[0]},Zs=new S,zg=new re,kg=[],Fg=new S,Ug=new S,Gg=new S;new S;new S;const yl=new S,Vg=new S,Hg=new S,Wg=new S,qg=new S,Xg=new S,Kg=new S;new Xe;const Yg=[],jg=new Ht,di=new S,Js=new S;function $g(a,t,e){e.vsub(a,di);const n=di.dot(t);return t.scale(n,Js),Js.vadd(a,Js),e.distanceTo(Js)}class Vi extends _c{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const o=t.boundingRadius,r=e.boundingRadius,l=i+o;return s-r<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,o=this.axisIndex;let r,l;for(this.dirty&&(this.sortList(),this.dirty=!1),r=0;r!==s;r++){const c=i[r];for(l=r+1;l<s;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!Vi.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Vi.insertionSortX(t):e===1?Vi.insertionSortY(t):e===2&&Vi.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0;const r=this.axisList,l=r.length,c=1/l;for(let m=0;m!==l;m++){const g=r[m],f=g.position.x;t+=f,e+=f*f;const p=g.position.y;n+=p,i+=p*p;const _=g.position.z;s+=_,o+=_*_}const h=e-t*t*c,d=i-n*n*c,u=o-s*s*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let r=0;r<o.length;r++){const l=o[r];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class Zg{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class xl{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Ls{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ls.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new xl,this.jacobianElementB=new xl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,r=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,r)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,r=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,r)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,r=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Ml),r.scale(h,bl),n.invInertiaWorldSolve.vmult(o,Sl),i.invInertiaWorldSolve.vmult(l,wl),t.multiplyVectors(Ml,Sl)+e.multiplyVectors(bl,wl)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,r=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return r.vmult(t.rotational,Qs),c+=Qs.dot(t.rotational),l.vmult(e.rotational,Qs),c+=Qs.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Jg;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ls.idCounter=0;const Ml=new S,bl=new S,Sl=new S,wl=new S,Qs=new S,Jg=new S;class Qg extends Ls{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,r=this.rj,l=t0,c=e0,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=n0,f=this.jacobianElementA,p=this.jacobianElementB,_=this.ni;o.cross(_,l),r.cross(_,c),_.negate(f.spatial),l.negate(f.rotational),p.spatial.copy(_),p.rotational.copy(c),g.copy(s.position),g.vadd(r,g),g.vsub(i.position,g),g.vsub(o,g);const v=_.dot(g),y=this.restitution+1,x=y*u.dot(_)-y*h.dot(_)+m.dot(c)-d.dot(l),w=this.computeGiMf();return-v*e-x*n-t*w}getImpactVelocityAlongNormal(){const t=i0,e=s0,n=o0,i=r0,s=a0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const t0=new S,e0=new S,n0=new S,i0=new S,s0=new S,o0=new S,r0=new S,a0=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class El extends Ls{constructor(t,e,n){super(t,e,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=l0,o=c0,r=this.t;n.cross(r,s),i.cross(r,o);const l=this.jacobianElementA,c=this.jacobianElementB;r.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(r),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const l0=new S,c0=new S;class $i{constructor(t,e,n){n=Zg.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=$i.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}$i.idCounter=0;class Zi{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Zi.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Zi.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new re;new S;new S;new S;new S(1,0,0),new S(0,1,0),new S(0,0,1);new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class h0 extends vt{constructor(t){if(super({type:vt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new S);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let r=0;r<o.length;r++){const l=o[r];n[l]=t[l]-s,i[l]=t[l]+s}}}new S;new S;new S;new S;new S;new S;new S;new S;new S;class u0 extends vt{constructor(){super({type:vt.types.PLANE}),this.worldNormal=new S,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new S),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Ln.set(0,0,1),e.vmult(Ln,Ln);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Ln.x===1?i.x=t.x:Ln.x===-1&&(n.x=t.x),Ln.y===1?i.y=t.y:Ln.y===-1&&(n.y=t.y),Ln.z===1?i.z=t.z:Ln.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Ln=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new Xe;new S;new Xe;new S;new S;new S;new S;new S;new S;new S;new Xe;new S;new Ht;new Xe;class d0{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class f0 extends d0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,r=o.length,l=e.bodies,c=l.length,h=t;let d,u,m,g,f,p;if(r!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const _=m0,v=g0,y=p0;_.length=r,v.length=r,y.length=r;for(let x=0;x!==r;x++){const w=o[x];y[x]=0,v[x]=w.computeB(h),_[x]=1/w.computeC()}if(r!==0){for(let E=0;E!==c;E++){const T=l[E],M=T.vlambda,A=T.wlambda;M.set(0,0,0),A.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let E=0;E!==r;E++){const T=o[E];d=v[E],u=_[E],p=y[E],f=T.computeGWlambda(),m=u*(d-f-T.eps*p),p+m<T.minForce?m=T.minForce-p:p+m>T.maxForce&&(m=T.maxForce-p),y[E]+=m,g+=m>0?m:-m,T.addToWlambda(m)}if(g*g<s)break}for(let E=0;E!==c;E++){const T=l[E],M=T.velocity,A=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),M.vadd(T.vlambda,M),T.wlambda.vmul(T.angularFactor,T.wlambda),A.vadd(T.wlambda,A)}let x=o.length;const w=1/h;for(;x--;)o[x].multiplier=y[x]*w}return n}}const p0=[],m0=[],g0=[];class v0{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class _0 extends v0{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const Jt={sphereSphere:vt.types.SPHERE,spherePlane:vt.types.SPHERE|vt.types.PLANE,boxBox:vt.types.BOX|vt.types.BOX,sphereBox:vt.types.SPHERE|vt.types.BOX,planeBox:vt.types.PLANE|vt.types.BOX,convexConvex:vt.types.CONVEXPOLYHEDRON,sphereConvex:vt.types.SPHERE|vt.types.CONVEXPOLYHEDRON,planeConvex:vt.types.PLANE|vt.types.CONVEXPOLYHEDRON,boxConvex:vt.types.BOX|vt.types.CONVEXPOLYHEDRON,sphereHeightfield:vt.types.SPHERE|vt.types.HEIGHTFIELD,boxHeightfield:vt.types.BOX|vt.types.HEIGHTFIELD,convexHeightfield:vt.types.CONVEXPOLYHEDRON|vt.types.HEIGHTFIELD,sphereParticle:vt.types.PARTICLE|vt.types.SPHERE,planeParticle:vt.types.PLANE|vt.types.PARTICLE,boxParticle:vt.types.BOX|vt.types.PARTICLE,convexParticle:vt.types.PARTICLE|vt.types.CONVEXPOLYHEDRON,cylinderCylinder:vt.types.CYLINDER,sphereCylinder:vt.types.SPHERE|vt.types.CYLINDER,planeCylinder:vt.types.PLANE|vt.types.CYLINDER,boxCylinder:vt.types.BOX|vt.types.CYLINDER,convexCylinder:vt.types.CONVEXPOLYHEDRON|vt.types.CYLINDER,heightfieldCylinder:vt.types.HEIGHTFIELD|vt.types.CYLINDER,particleCylinder:vt.types.PARTICLE|vt.types.CYLINDER,sphereTrimesh:vt.types.SPHERE|vt.types.TRIMESH,planeTrimesh:vt.types.PLANE|vt.types.TRIMESH};class y0{get[Jt.sphereSphere](){return this.sphereSphere}get[Jt.spherePlane](){return this.spherePlane}get[Jt.boxBox](){return this.boxBox}get[Jt.sphereBox](){return this.sphereBox}get[Jt.planeBox](){return this.planeBox}get[Jt.convexConvex](){return this.convexConvex}get[Jt.sphereConvex](){return this.sphereConvex}get[Jt.planeConvex](){return this.planeConvex}get[Jt.boxConvex](){return this.boxConvex}get[Jt.sphereHeightfield](){return this.sphereHeightfield}get[Jt.boxHeightfield](){return this.boxHeightfield}get[Jt.convexHeightfield](){return this.convexHeightfield}get[Jt.sphereParticle](){return this.sphereParticle}get[Jt.planeParticle](){return this.planeParticle}get[Jt.boxParticle](){return this.boxParticle}get[Jt.convexParticle](){return this.convexParticle}get[Jt.cylinderCylinder](){return this.convexConvex}get[Jt.sphereCylinder](){return this.sphereConvex}get[Jt.planeCylinder](){return this.planeConvex}get[Jt.boxCylinder](){return this.boxConvex}get[Jt.convexCylinder](){return this.convexConvex}get[Jt.heightfieldCylinder](){return this.heightfieldCylinder}get[Jt.particleCylinder](){return this.particleCylinder}get[Jt.sphereTrimesh](){return this.sphereTrimesh}get[Jt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new _0,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let r;this.contactPointPool.length?(r=this.contactPointPool.pop(),r.bi=t,r.bj=e):r=new Qg(t,e),r.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;r.restitution=l.restitution,r.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(r.restitution=c.restitution*h.restitution),r.si=s||n,r.sj=o||i,r}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,r=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(r.frictionGravity||r.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,f=g.length?g.pop():new El(n,i,u*m),p=g.length?g.pop():new El(n,i,u*m);return f.bi=p.bi=n,f.bj=p.bj=i,f.minForce=p.minForce=-u*m,f.maxForce=p.maxForce=u*m,f.ri.copy(t.ri),f.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(f.t,p.t),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,r.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,r.dt),f.enabled=p.enabled=t.enabled,e.push(f,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ri.setZero(),Bi.setZero(),zi.setZero();const s=e.bi;e.bj;for(let r=0;r!==t;r++)e=this.result[this.result.length-1-r],e.bi!==s?(ri.vadd(e.ni,ri),Bi.vadd(e.ri,Bi),zi.vadd(e.rj,zi)):(ri.vsub(e.ni,ri),Bi.vadd(e.rj,Bi),zi.vadd(e.ri,zi));const o=1/t;Bi.scale(o,n.ri),zi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ri.normalize(),ri.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,r){this.contactPointPool=s,this.frictionEquationPool=r,this.result=i,this.frictionResult=o;const l=b0,c=S0,h=x0,d=M0;for(let u=0,m=t.length;u!==m;u++){const g=t[u],f=e[u];let p=null;g.material&&f.material&&(p=n.getContactMaterial(g.material,f.material)||null);const _=g.type&mt.KINEMATIC&&f.type&mt.STATIC||g.type&mt.STATIC&&f.type&mt.KINEMATIC||g.type&mt.KINEMATIC&&f.type&mt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const y=g.shapes[v];for(let x=0;x<f.shapes.length;x++){f.quaternion.mult(f.shapeOrientations[x],c),f.quaternion.vmult(f.shapeOffsets[x],d),d.vadd(f.position,d);const w=f.shapes[x];if(!(y.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+w.boundingSphereRadius)continue;let E=null;y.material&&w.material&&(E=n.getContactMaterial(y.material,w.material)||null),this.currentContactMaterial=E||p||n.defaultContactMaterial;const T=y.type|w.type,M=this[T];if(M){let A=!1;y.type<w.type?A=M.call(this,y,w,h,d,l,c,g,f,y,w,_):A=M.call(this,w,y,d,h,c,l,f,g,y,w,_),A&&_&&(n.shapeOverlapKeeper.set(y.id,w.id),n.bodyOverlapKeeper.set(g.id,f.id))}}}}}sphereSphere(t,e,n,i,s,o,r,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(r,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(r.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,r,l,c,h,d){const u=this.createContactEquation(r,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,to),u.ni.scale(u.ni.dot(to),Cl),to.vsub(Cl,u.rj),-to.dot(u.ni)<=t.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(r.position,m),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,r,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,r,l,t,e,d)}sphereBox(t,e,n,i,s,o,r,l,c,h,d){const u=this.v3pool,m=j0;n.vsub(i,eo),e.getSideNormals(m,o);const g=t.radius;let f=!1;const p=Z0,_=J0,v=Q0;let y=null,x=0,w=0,E=0,T=null;for(let O=0,K=m.length;O!==K&&f===!1;O++){const z=X0;z.copy(m[O]);const X=z.length();z.normalize();const Y=eo.dot(z);if(Y<X+g&&Y>0){const it=K0,B=Y0;it.copy(m[(O+1)%3]),B.copy(m[(O+2)%3]);const tt=it.length(),et=B.length();it.normalize(),B.normalize();const G=eo.dot(it),lt=eo.dot(B);if(G<tt&&G>-tt&&lt<et&&lt>-et){const ct=Math.abs(Y-X-g);if((T===null||ct<T)&&(T=ct,w=G,E=lt,y=X,p.copy(z),_.copy(it),v.copy(B),x++,d))return!0}}}if(x){f=!0;const O=this.createContactEquation(r,l,t,e,c,h);p.scale(-g,O.ri),O.ni.copy(p),O.ni.negate(O.ni),p.scale(y,p),_.scale(w,_),p.vadd(_,p),v.scale(E,v),p.vadd(v,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(r.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}let M=u.get();const A=$0;for(let O=0;O!==2&&!f;O++)for(let K=0;K!==2&&!f;K++)for(let z=0;z!==2&&!f;z++)if(M.set(0,0,0),O?M.vadd(m[0],M):M.vsub(m[0],M),K?M.vadd(m[1],M):M.vsub(m[1],M),z?M.vadd(m[2],M):M.vsub(m[2],M),i.vadd(M,A),A.vsub(n,A),A.lengthSquared()<g*g){if(d)return!0;f=!0;const X=this.createContactEquation(r,l,t,e,c,h);X.ri.copy(A),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(g,X.ri),X.rj.copy(M),X.ri.vadd(n,X.ri),X.ri.vsub(r.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(l.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}u.release(M),M=null;const I=u.get(),F=u.get(),U=u.get(),D=u.get(),P=u.get(),N=m.length;for(let O=0;O!==N&&!f;O++)for(let K=0;K!==N&&!f;K++)if(O%3!==K%3){m[K].cross(m[O],I),I.normalize(),m[O].vadd(m[K],F),U.copy(n),U.vsub(F,U),U.vsub(i,U);const z=U.dot(I);I.scale(z,D);let X=0;for(;X===O%3||X===K%3;)X++;P.copy(n),P.vsub(D,P),P.vsub(F,P),P.vsub(i,P);const Y=Math.abs(z),it=P.length();if(Y<m[X].length()&&it<g){if(d)return!0;f=!0;const B=this.createContactEquation(r,l,t,e,c,h);F.vadd(D,B.rj),B.rj.copy(B.rj),P.negate(B.ni),B.ni.normalize(),B.ri.copy(B.rj),B.ri.vadd(i,B.ri),B.ri.vsub(n,B.ri),B.ri.normalize(),B.ri.scale(g,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(r.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}u.release(I,F,U,D,P)}planeBox(t,e,n,i,s,o,r,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,r,l,t,e,d)}convexConvex(t,e,n,i,s,o,r,l,c,h,d,u,m){const g=pv;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,m)){const f=[],p=mv;t.clipAgainstHull(n,s,e,i,o,g,-100,100,f);let _=0;for(let v=0;v!==f.length;v++){if(d)return!0;const y=this.createContactEquation(r,l,t,e,c,h),x=y.ri,w=y.rj;g.negate(y.ni),f[v].normal.negate(p),p.scale(f[v].depth,p),f[v].point.vadd(p,x),w.copy(f[v].point),x.vsub(n,x),w.vsub(i,w),x.vadd(n,x),x.vsub(r.position,x),w.vadd(i,w),w.vsub(l.position,w),this.result.push(y),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(t,e,n,i,s,o,r,l,c,h,d){const u=this.v3pool;n.vsub(i,tv);const m=e.faceNormals,g=e.faces,f=e.vertices,p=t.radius;let _=!1;for(let v=0;v!==f.length;v++){const y=f[v],x=sv;o.vmult(y,x),i.vadd(x,x);const w=iv;if(x.vsub(n,w),w.lengthSquared()<p*p){if(d)return!0;_=!0;const E=this.createContactEquation(r,l,t,e,c,h);E.ri.copy(w),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(p,E.ri),x.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(r.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let v=0,y=g.length;v!==y&&_===!1;v++){const x=m[v],w=g[v],E=ov;o.vmult(x,E);const T=rv;o.vmult(f[w[0]],T),T.vadd(i,T);const M=av;E.scale(-p,M),n.vadd(M,M);const A=lv;M.vsub(T,A);const I=A.dot(E),F=cv;if(n.vsub(T,F),I<0&&F.dot(E)>0){const U=[];for(let D=0,P=w.length;D!==P;D++){const N=u.get();o.vmult(f[w[D]],N),i.vadd(N,N),U.push(N)}if(q0(U,E,n)){if(d)return!0;_=!0;const D=this.createContactEquation(r,l,t,e,c,h);E.scale(-p,D.ri),E.negate(D.ni);const P=u.get();E.scale(-I,P);const N=u.get();E.scale(-p,N),n.vsub(i,D.rj),D.rj.vadd(N,D.rj),D.rj.vadd(P,D.rj),D.rj.vadd(i,D.rj),D.rj.vsub(l.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(r.position,D.ri),u.release(P),u.release(N),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let O=0,K=U.length;O!==K;O++)u.release(U[O]);return}else for(let D=0;D!==w.length;D++){const P=u.get(),N=u.get();o.vmult(f[w[(D+1)%w.length]],P),o.vmult(f[w[(D+2)%w.length]],N),i.vadd(P,P),i.vadd(N,N);const O=ev;N.vsub(P,O);const K=nv;O.unit(K);const z=u.get(),X=u.get();n.vsub(P,X);const Y=X.dot(K);K.scale(Y,z),z.vadd(P,z);const it=u.get();if(z.vsub(n,it),Y>0&&Y*Y<O.lengthSquared()&&it.lengthSquared()<p*p){if(d)return!0;const B=this.createContactEquation(r,l,t,e,c,h);z.vsub(i,B.rj),z.vsub(n,B.ni),B.ni.normalize(),B.ni.scale(p,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(r.position,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(let tt=0,et=U.length;tt!==et;tt++)u.release(U[tt]);u.release(P),u.release(N),u.release(z),u.release(it),u.release(X);return}u.release(P),u.release(N),u.release(z),u.release(it),u.release(X)}for(let D=0,P=U.length;D!==P;D++)u.release(U[D])}}}planeConvex(t,e,n,i,s,o,r,l,c,h,d){const u=hv,m=uv;m.set(0,0,1),s.vmult(m,m);let g=0;const f=dv;for(let p=0;p!==e.vertices.length;p++)if(u.copy(e.vertices[p]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,f),m.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(r,l,t,e,c,h),y=fv;m.scale(m.dot(f),y),u.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(m),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(r.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,r,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,r,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,r,l,c,h,d){const u=e.data,m=t.radius,g=e.elementSize,f=Av,p=Cv;Ht.pointToLocalFrame(i,o,n,p);let _=Math.floor((p.x-m)/g)-1,v=Math.ceil((p.x+m)/g)+1,y=Math.floor((p.y-m)/g)-1,x=Math.ceil((p.y+m)/g)+1;if(v<0||x<0||_>u.length||y>u[0].length)return;_<0&&(_=0),v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),_>=u.length&&(_=u.length-1),v>=u.length&&(v=u.length-1),x>=u[0].length&&(x=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const w=[];e.getRectMinMax(_,y,v,x,w);const E=w[0],T=w[1];if(p.z-m>T||p.z+m<E)return;const M=this.result;for(let A=_;A<v;A++)for(let I=y;I<x;I++){const F=M.length;let U=!1;if(e.getConvexTrianglePillar(A,I,!1),Ht.pointToWorldFrame(i,o,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.sphereConvex(t,e.pillarConvex,n,f,s,o,r,l,t,e,d)),d&&U||(e.getConvexTrianglePillar(A,I,!0),Ht.pointToWorldFrame(i,o,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.sphereConvex(t,e.pillarConvex,n,f,s,o,r,l,t,e,d)),d&&U))return!0;if(M.length-F>2)return}}boxHeightfield(t,e,n,i,s,o,r,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,r,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,r,l,c,h,d){const u=e.data,m=e.elementSize,g=t.boundingSphereRadius,f=wv,p=Ev,_=Sv;Ht.pointToLocalFrame(i,o,n,_);let v=Math.floor((_.x-g)/m)-1,y=Math.ceil((_.x+g)/m)+1,x=Math.floor((_.y-g)/m)-1,w=Math.ceil((_.y+g)/m)+1;if(y<0||w<0||v>u.length||x>u[0].length)return;v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),w<0&&(w=0),v>=u.length&&(v=u.length-1),y>=u.length&&(y=u.length-1),w>=u[0].length&&(w=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const E=[];e.getRectMinMax(v,x,y,w,E);const T=E[0],M=E[1];if(!(_.z-g>M||_.z+g<T))for(let A=v;A<y;A++)for(let I=x;I<w;I++){let F=!1;if(e.getConvexTrianglePillar(A,I,!1),Ht.pointToWorldFrame(i,o,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.convexConvex(t,e.pillarConvex,n,f,s,o,r,l,null,null,d,p,null)),d&&F||(e.getConvexTrianglePillar(A,I,!0),Ht.pointToWorldFrame(i,o,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.convexConvex(t,e.pillarConvex,n,f,s,o,r,l,null,null,d,p,null)),d&&F))return!0}}sphereParticle(t,e,n,i,s,o,r,l,c,h,d){const u=yv;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,r,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,r,l,c,h,d){const u=gv;u.set(0,0,1),r.quaternion.vmult(u,u);const m=vv;if(i.vsub(r.position,m),u.dot(m)<=0){if(d)return!0;const f=this.createContactEquation(l,r,e,t,c,h);f.ni.copy(u),f.ni.negate(f.ni),f.ri.set(0,0,0);const p=_v;u.scale(u.dot(i),p),i.vsub(p,p),f.rj.copy(p),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxParticle(t,e,n,i,s,o,r,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,r,l,t,e,d)}convexParticle(t,e,n,i,s,o,r,l,c,h,d){let u=-1;const m=Mv,g=bv;let f=null;const p=xv;if(p.copy(i),p.vsub(n,p),s.conjugate(Al),Al.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let _=0,v=t.faces.length;_!==v;_++){const y=[t.worldVertices[t.faces[_][0]]],x=t.worldFaceNormals[_];i.vsub(y[0],Tl);const w=-x.dot(Tl);if(f===null||Math.abs(w)<Math.abs(f)){if(d)return!0;f=w,u=_,m.copy(x)}}if(u!==-1){const _=this.createContactEquation(l,r,e,t,c,h);m.scale(f,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),m.negate(_.ni),_.ri.set(0,0,0);const v=_.ri,y=_.rj;v.vadd(i,v),v.vsub(l.position,v),y.vadd(n,y),y.vsub(r.position,y),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,r,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,s,l,r,c,h,d)}particleCylinder(t,e,n,i,s,o,r,l,c,h,d){return this.convexParticle(e,t,i,n,o,s,l,r,c,h,d)}sphereTrimesh(t,e,n,i,s,o,r,l,c,h,d){const u=D0,m=I0,g=P0,f=O0,p=N0,_=B0,v=U0,y=L0,x=T0,w=G0;Ht.pointToLocalFrame(i,o,n,p);const E=t.radius;v.lowerBound.set(p.x-E,p.y-E,p.z-E),v.upperBound.set(p.x+E,p.y+E,p.z+E),e.getTrianglesInAABB(v,w);const T=R0,M=t.radius*t.radius;for(let D=0;D<w.length;D++)for(let P=0;P<3;P++)if(e.getVertex(e.indices[w[D]*3+P],T),T.vsub(p,x),x.lengthSquared()<=M){if(y.copy(T),Ht.pointToWorldFrame(i,o,y,T),T.vsub(n,x),d)return!0;let N=this.createContactEquation(r,l,t,e,c,h);N.ni.copy(x),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(r.position,N.ri),N.rj.copy(T),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let D=0;D<w.length;D++)for(let P=0;P<3;P++){e.getVertex(e.indices[w[D]*3+P],u),e.getVertex(e.indices[w[D]*3+(P+1)%3],m),m.vsub(u,g),p.vsub(m,_);const N=_.dot(g);p.vsub(u,_);let O=_.dot(g);if(O>0&&N<0&&(p.vsub(u,_),f.copy(g),f.normalize(),O=_.dot(f),f.scale(O,_),_.vadd(u,_),_.distanceTo(p)<t.radius)){if(d)return!0;const z=this.createContactEquation(r,l,t,e,c,h);_.vsub(p,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(r.position,z.ri),Ht.pointToWorldFrame(i,o,_,_),_.vsub(l.position,z.rj),Ht.vectorToWorldFrame(o,z.ni,z.ni),Ht.vectorToWorldFrame(o,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}const A=z0,I=k0,F=F0,U=A0;for(let D=0,P=w.length;D!==P;D++){e.getTriangleVertices(w[D],A,I,F),e.getNormal(w[D],U),p.vsub(A,_);let N=_.dot(U);if(U.scale(N,_),p.vsub(_,_),N=_.distanceTo(p),re.pointInTriangle(_,A,I,F)&&N<t.radius){if(d)return!0;let O=this.createContactEquation(r,l,t,e,c,h);_.vsub(p,O.ni),O.ni.normalize(),O.ni.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(r.position,O.ri),Ht.pointToWorldFrame(i,o,_,_),_.vsub(l.position,O.rj),Ht.vectorToWorldFrame(o,O.ni,O.ni),Ht.vectorToWorldFrame(o,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}w.length=0}planeTrimesh(t,e,n,i,s,o,r,l,c,h,d){const u=new S,m=w0;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const f=new S;f.copy(u),Ht.pointToWorldFrame(i,o,f,u);const p=E0;if(u.vsub(n,p),m.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(r,l,t,e,c,h);v.ni.copy(m);const y=C0;m.scale(p.dot(m),y),u.vsub(y,y),v.ri.copy(y),v.ri.vsub(r.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const ri=new S,Bi=new S,zi=new S,x0=new S,M0=new S,b0=new ae,S0=new ae,w0=new S,E0=new S,C0=new S,A0=new S,T0=new S;new S;const R0=new S,L0=new S,D0=new S,I0=new S,P0=new S,O0=new S,N0=new S,B0=new S,z0=new S,k0=new S,F0=new S,U0=new Xe,G0=[],to=new S,Cl=new S,V0=new S,H0=new S,W0=new S;function q0(a,t,e){let n=null;const i=a.length;for(let s=0;s!==i;s++){const o=a[s],r=V0;a[(s+1)%i].vsub(o,r);const l=H0;r.cross(t,l);const c=W0;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const eo=new S,X0=new S,K0=new S,Y0=new S,j0=[new S,new S,new S,new S,new S,new S],$0=new S,Z0=new S,J0=new S,Q0=new S,tv=new S,ev=new S,nv=new S,iv=new S,sv=new S,ov=new S,rv=new S,av=new S,lv=new S,cv=new S;new S;new S;const hv=new S,uv=new S,dv=new S,fv=new S,pv=new S,mv=new S,gv=new S,vv=new S,_v=new S,yv=new S,Al=new ae,xv=new S;new S;const Mv=new S,Tl=new S,bv=new S,Sv=new S,wv=new S,Ev=[0],Cv=new S,Av=new S;class Rl{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let r=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[r];)r++;c=h===i[r],c||Ll(t,h)}r=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[r];)r++;c=n[r]===h,c||Ll(e,h)}}}function Ll(a,t){a.push((t&4294901760)>>16,t&65535)}const or=(a,t)=>a<t?`${a}-${t}`:`${t}-${a}`;class Tv{constructor(){this.data={keys:[]}}get(t,e){const n=or(t,e);return this.data[n]}set(t,e,n){const i=or(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=or(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Rv extends vc{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Og,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new f0,this.constraints=[],this.narrowphase=new y0(this),this.collisionMatrix=new ml,this.collisionMatrixPrevious=new ml,this.bodyOverlapKeeper=new Rl,this.shapeOverlapKeeper=new Rl,this.contactmaterials=[],this.contactMaterialTable=new Tv,this.defaultMaterial=new Zi("default"),this.defaultContactMaterial=new $i(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof ao?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=re.ALL,n.from=t,n.to=e,n.callback=i,rr.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=re.ANY,n.from=t,n.to=e,n.result=i,rr.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=re.CLOSEST,n.from=t,n.to=e,n.result=i,rr.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof mt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ce.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ce.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ce.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let r=0;r!==this.bodies.length;r++){const l=this.bodies[r];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Ov,i=Nv,s=this.bodies.length,o=this.bodies,r=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=mt.DYNAMIC;let u=-1/0;const m=this.constraints,g=Pv;l.length();const f=l.x,p=l.y,_=l.z;let v=0;for(c&&(u=ce.now()),v=0;v!==s;v++){const D=o[v];if(D.type===d){const P=D.force,N=D.mass;P.x+=N*f,P.y+=N*p,P.z+=N*_}}for(let D=0,P=this.subsystems.length;D!==P;D++)this.subsystems[D].update();c&&(u=ce.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=ce.now()-u);let y=m.length;for(v=0;v!==y;v++){const D=m[v];if(!D.collideConnected)for(let P=n.length-1;P>=0;P-=1)(D.bodyA===n[P]&&D.bodyB===i[P]||D.bodyB===n[P]&&D.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),c&&(u=ce.now());const x=Iv,w=e.length;for(v=0;v!==w;v++)x.push(e[v]);e.length=0;const E=this.frictionEquations.length;for(v=0;v!==E;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,g),c&&(h.narrowphase=ce.now()-u),c&&(u=ce.now()),v=0;v<this.frictionEquations.length;v++)r.addEquation(this.frictionEquations[v]);const T=e.length;for(let D=0;D!==T;D++){const P=e[D],N=P.bi,O=P.bj,K=P.si,z=P.sj;let X;if(N.material&&O.material?X=this.getContactMaterial(N.material,O.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,N.material&&O.material&&(N.material.friction>=0&&O.material.friction>=0&&N.material.friction*O.material.friction,N.material.restitution>=0&&O.material.restitution>=0&&(P.restitution=N.material.restitution*O.material.restitution)),r.addEquation(P),N.allowSleep&&N.type===mt.DYNAMIC&&N.sleepState===mt.SLEEPING&&O.sleepState===mt.AWAKE&&O.type!==mt.STATIC){const Y=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),it=O.sleepSpeedLimit**2;Y>=it*2&&(N.wakeUpAfterNarrowphase=!0)}if(O.allowSleep&&O.type===mt.DYNAMIC&&O.sleepState===mt.SLEEPING&&N.sleepState===mt.AWAKE&&N.type!==mt.STATIC){const Y=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),it=N.sleepSpeedLimit**2;Y>=it*2&&(O.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,O,!0),this.collisionMatrixPrevious.get(N,O)||(hs.body=O,hs.contact=P,N.dispatchEvent(hs),hs.body=N,O.dispatchEvent(hs)),this.bodyOverlapKeeper.set(N.id,O.id),this.shapeOverlapKeeper.set(K.id,z.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=ce.now()-u,u=ce.now()),v=0;v!==s;v++){const D=o[v];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(y=m.length,v=0;v!==y;v++){const D=m[v];D.update();for(let P=0,N=D.equations.length;P!==N;P++){const O=D.equations[P];r.addEquation(O)}}r.solve(t,this),c&&(h.solve=ce.now()-u),r.removeAllEquations();const M=Math.pow;for(v=0;v!==s;v++){const D=o[v];if(D.type&d){const P=M(1-D.linearDamping,t),N=D.velocity;N.scale(P,N);const O=D.angularVelocity;if(O){const K=M(1-D.angularDamping,t);O.scale(K,O)}}}this.dispatchEvent(Dv),c&&(u=ce.now());const I=this.stepnumber%(this.quatNormalizeSkip+1)===0,F=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(t,I,F);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=ce.now()-u),this.stepnumber+=1,this.dispatchEvent(Lv);let U=!0;if(this.allowSleep)for(U=!1,v=0;v!==s;v++){const D=o[v];D.sleepTick(this.time),D.sleepState!==mt.SLEEPING&&(U=!0)}this.hasActiveBodies=U}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Dn,In),t){for(let s=0,o=Dn.length;s<o;s+=2)us.bodyA=this.getBodyById(Dn[s]),us.bodyB=this.getBodyById(Dn[s+1]),this.dispatchEvent(us);us.bodyA=us.bodyB=null}if(e){for(let s=0,o=In.length;s<o;s+=2)ds.bodyA=this.getBodyById(In[s]),ds.bodyB=this.getBodyById(In[s+1]),this.dispatchEvent(ds);ds.bodyA=ds.bodyB=null}Dn.length=In.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Dn,In),n){for(let s=0,o=Dn.length;s<o;s+=2){const r=this.getShapeById(Dn[s]),l=this.getShapeById(Dn[s+1]);Pn.shapeA=r,Pn.shapeB=l,r&&(Pn.bodyA=r.body),l&&(Pn.bodyB=l.body),this.dispatchEvent(Pn)}Pn.bodyA=Pn.bodyB=Pn.shapeA=Pn.shapeB=null}if(i){for(let s=0,o=In.length;s<o;s+=2){const r=this.getShapeById(In[s]),l=this.getShapeById(In[s+1]);On.shapeA=r,On.shapeB=l,r&&(On.bodyA=r.body),l&&(On.bodyB=l.body),this.dispatchEvent(On)}On.bodyA=On.bodyB=On.shapeA=On.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Xe;const rr=new re,ce=globalThis.performance||{};if(!ce.now){let a=Date.now();ce.timing&&ce.timing.navigationStart&&(a=ce.timing.navigationStart),ce.now=()=>Date.now()-a}new S;const Lv={type:"postStep"},Dv={type:"preStep"},hs={type:mt.COLLIDE_EVENT_NAME,body:null,contact:null},Iv=[],Pv=[],Ov=[],Nv=[],Dn=[],In=[],us={type:"beginContact",bodyA:null,bodyB:null},ds={type:"endContact",bodyA:null,bodyB:null},Pn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},On={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class ze{static audioCtx=null;static noiseBuffer=null;static init(){if(this.audioCtx){this.audioCtx.state==="suspended"&&this.audioCtx.resume();return}try{const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t,this.createNoiseBuffer())}catch(t){console.warn("Failed to initialize AudioContext:",t)}}static createNoiseBuffer(){if(!this.audioCtx)return;const t=this.audioCtx.sampleRate*1;this.noiseBuffer=this.audioCtx.createBuffer(1,t,this.audioCtx.sampleRate);const e=this.noiseBuffer.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}static playNoise(t,e,n,i="lowpass"){if(!this.audioCtx||!this.noiseBuffer)return;const s=this.audioCtx.createBufferSource();s.buffer=this.noiseBuffer;const o=this.audioCtx.createGain();o.gain.setValueAtTime(e,this.audioCtx.currentTime),o.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+t);let r=s;if(n!==void 0){const l=this.audioCtx.createBiquadFilter();l.type=i,l.frequency.setValueAtTime(n,this.audioCtx.currentTime),s.connect(l),r=l}r.connect(o),o.connect(this.audioCtx.destination),s.start(),s.stop(this.audioCtx.currentTime+t)}static playTone(t,e,n,i,s){if(!this.audioCtx)return;const o=this.audioCtx.createOscillator();o.type=t;const r=this.audioCtx.createGain();r.gain.setValueAtTime(s,this.audioCtx.currentTime),r.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+i),o.frequency.setValueAtTime(e,this.audioCtx.currentTime),e!==n&&o.frequency.exponentialRampToValueAtTime(n,this.audioCtx.currentTime+i),o.connect(r),r.connect(this.audioCtx.destination),o.start(),o.stop(this.audioCtx.currentTime+i)}static playBreak(t){if(this.init(),!!this.audioCtx)switch(t){case b.STONE:case b.COAL_ORE:case b.BRICK:this.playNoise(.18,.35,450,"bandpass"),this.playTone("triangle",130,40,.15,.3);break;case b.WOOD:case b.PLANK:case b.DOOR_CLOSED:case b.DOOR_OPEN:this.playNoise(.12,.3,600,"lowpass"),this.playTone("triangle",180,80,.12,.35);break;case b.GROUND:case b.DIRT:case b.LEAVES:this.playNoise(.08,.25,1200,"bandpass");break;case b.GLASS:this.playTone("sine",1600,800,.25,.35),this.playTone("sine",2200,1e3,.2,.2),this.playNoise(.18,.15,4e3,"highpass");break;default:this.playNoise(.1,.25,800,"lowpass");break}}static playPlace(t){if(this.init(),!!this.audioCtx)switch(t){case b.STONE:case b.COAL_ORE:case b.BRICK:this.playNoise(.08,.2,700,"bandpass"),this.playTone("triangle",180,120,.08,.18);break;case b.WOOD:case b.PLANK:case b.DOOR_CLOSED:case b.DOOR_OPEN:this.playNoise(.06,.2,900,"lowpass"),this.playTone("triangle",240,180,.06,.2);break;case b.GLASS:this.playTone("sine",1900,1700,.1,.2);break;default:this.playNoise(.05,.18,1400,"lowpass");break}}static playSwing(){this.init(),this.playTone("sine",600,90,.12,.25),this.playNoise(.08,.1,2500,"bandpass")}static playHit(){this.init(),this.playNoise(.12,.4,250,"lowpass"),this.playTone("sawtooth",120,40,.1,.3)}static playDamage(){this.init(),this.playTone("sawtooth",85,45,.16,.45),this.playNoise(.14,.25,350,"lowpass")}static playJump(){this.init(),this.playTone("triangle",160,280,.12,.2)}static playPickup(){this.init(),this.playTone("sine",950,1400,.08,.22)}}class je{position;camera;body;characterType="boy1";avatar;head;bodyMesh;leftArm;rightArm;leftLeg;rightLeg;cameraMode="1PV";armorType="none";armorMat;weapons1PV={};weapons3PV={};swingTime=0;hp=pt.PLAYER_MAX_HP;isDead=!1;spawnPosition;pitch=0;yaw=0;sensitivity=.002;speed=pt.PLAYER_SPEED;isGrounded=!1;isInWater=!1;isSprintingToggle=!1;jumpForce=7.5;lastVelocityY=0;lastDamageTime=0;lastRegenTime=0;voxelWorld;static tempVec3=new H;static tempVec3_2=new H;static tempQuat=new yi;static tempQuat_2=new yi;static tempDirection=new H;constructor(t,e,n,i){this.camera=t,this.position=e.clone(),this.spawnPosition=e.clone();const s=pt.PLAYER_RADIUS,o=pt.PLAYER_HEIGHT/2;this.body=new mt({mass:60,position:new S(e.x,e.y+o,e.z),fixedRotation:!0,linearDamping:.1,material:n.playerMaterial});const r=new h0(s);this.body.addShape(r,new S(0,-.5,0)),this.body.addShape(r,new S(0,0,0)),this.body.addShape(r,new S(0,.5,0)),n.world.addBody(this.body),this.characterType=Ce.getConfig().characterType||"boy1",this.avatar=new he,this.avatar.rotation.order="YXZ",this.buildAvatar(),i.add(this.avatar),i.add(this.camera);const l={14:{creator:()=>this.buildSword(13421772,7877903,15381256)},22:{creator:()=>this.buildSword(65535,7877903,35071)},23:{creator:()=>this.buildHammer()},35:{creator:()=>this.buildPickaxe(9132587)},36:{creator:()=>this.buildPickaxe(8947848)},37:{creator:()=>this.buildPickaxe(14540253)},38:{creator:()=>this.buildPickaxe(65535)},39:{creator:()=>this.buildAxe(9132587)},40:{creator:()=>this.buildAxe(8947848)},41:{creator:()=>this.buildAxe(14540253)},42:{creator:()=>this.buildAxe(65535)},43:{creator:()=>this.buildShovel(9132587)},44:{creator:()=>this.buildShovel(8947848)},45:{creator:()=>this.buildShovel(14540253)},46:{creator:()=>this.buildShovel(65535)}};for(const c of Object.keys(l)){const h=Number(c);this.weapons1PV[h]=l[h].creator(),this.weapons3PV[h]=l[h].creator(),this.weapons1PV[h].position.set(.24,-.24,-.38),this.weapons1PV[h].rotation.set(-30*Math.PI/180,45*Math.PI/180,15*Math.PI/180),this.weapons1PV[h].visible=!1,this.camera.add(this.weapons1PV[h]),this.weapons3PV[h].position.set(0,-.6,.1),this.weapons3PV[h].rotation.x=Math.PI/2,this.weapons3PV[h].visible=!1,this.rightArm.add(this.weapons3PV[h])}this.syncCamera()}buildAvatar(){for(;this.avatar.children.length>0;)this.avatar.remove(this.avatar.children[0]);let t=5913896,e=33023,n=2829184,i=16767916,s=3355443,o=!1;const r=this.characterType||"boy1";r==="boy1"?(t=2236962,e=3900150,n=1920728,s=1920728):r==="boy2"?(t=14251782,e=1096065,n=2042167,s=292951):r==="girl1"?(t=14362487,e=16436245,n=5195493,s=12458077,o=!0):r==="girl2"&&(t=440020,e=9133302,n=4674921,s=7153881,o=!0);const l=new jt({color:i,roughness:.9}),c=new jt({color:e,roughness:.9}),h=new jt({color:i,roughness:.9}),d=new jt({color:n,roughness:.9}),u=new jt({color:t,roughness:.9}),m=new jt({color:16777215,roughness:.9}),g=new jt({color:s,roughness:.9}),f=new jt({color:14753096,roughness:.9});this.armorMat=new jt({color:16777215,roughness:.8,metalness:.1,visible:!1});const p=new Bt(.44,.44,.44),_=new Bt(.44,.62,.24),v=new Bt(.24,.35,.24);v.translate(0,-.175,0);const y=new Bt(.23,.4,.23);y.translate(0,-.2,0);const x=new Bt(.24,.2,.24);x.translate(0,-.5,0);const w=new Bt(.4,.4,.4);this.head=new St(w,l),this.head.position.y=.5,this.head.castShadow=!0,this.head.receiveShadow=!0;const E=new Bt(.42,.15,.42),T=new St(E,u);if(T.position.y=.15,this.head.add(T),o){const ut=new Bt(.42,.32,.08),Mt=new St(ut,u);Mt.position.set(0,-.08,.17),Mt.castShadow=!0,Mt.receiveShadow=!0,this.head.add(Mt);const wt=new Bt(.08,.25,.42),Lt=new St(wt,u);Lt.position.set(.17,-.05,0),Lt.castShadow=!0,Lt.receiveShadow=!0,this.head.add(Lt);const Yt=new St(wt,u);Yt.position.set(-.17,-.05,0),Yt.castShadow=!0,Yt.receiveShadow=!0,this.head.add(Yt)}const M=new Bt(.08,.04,.01),A=new St(M,m);A.position.set(.08,.02,-.201),this.head.add(A);const I=new Bt(.04,.04,.012),F=new St(I,g);F.position.set(.1,.02,-.202),this.head.add(F);const U=new St(M,m);U.position.set(-.08,.02,-.201),this.head.add(U);const D=new St(I,g);D.position.set(-.1,.02,-.202),this.head.add(D);const P=new Bt(.12,.04,.01),N=new St(P,f);N.position.set(0,-.08,-.201),this.head.add(N);const O=new St(p,this.armorMat);O.castShadow=!0,O.receiveShadow=!0,this.head.add(O),this.avatar.add(this.head);const K=new Bt(.4,.6,.2);this.bodyMesh=new St(K,c),this.bodyMesh.position.y=0,this.bodyMesh.castShadow=!0,this.bodyMesh.receiveShadow=!0;const z=new St(_,this.armorMat);z.castShadow=!0,z.receiveShadow=!0,this.bodyMesh.add(z),this.avatar.add(this.bodyMesh);const X=new Bt(.2,.6,.2);X.translate(0,-.3,0),this.leftArm=new he;const Y=new St(X,h);Y.castShadow=!0,Y.receiveShadow=!0;const it=new St(v,this.armorMat);it.castShadow=!0,it.receiveShadow=!0,Y.add(it),this.leftArm.add(Y),this.leftArm.position.set(.3,.3,0),this.avatar.add(this.leftArm),this.rightArm=new he;const B=new St(X,h);B.castShadow=!0,B.receiveShadow=!0;const tt=new St(v,this.armorMat);tt.castShadow=!0,tt.receiveShadow=!0,B.add(tt),this.rightArm.add(B),this.rightArm.position.set(-.3,.3,0),this.avatar.add(this.rightArm),this.leftLeg=new he;const et=new St(X,d);et.castShadow=!0,et.receiveShadow=!0;const G=new St(y,this.armorMat);G.castShadow=!0,G.receiveShadow=!0,et.add(G);const lt=new St(x,this.armorMat);lt.castShadow=!0,lt.receiveShadow=!0,et.add(lt),this.leftLeg.add(et),this.leftLeg.position.set(.1,-.3,0),this.avatar.add(this.leftLeg),this.rightLeg=new he;const ct=new St(X,d);ct.castShadow=!0,ct.receiveShadow=!0;const ht=new St(y,this.armorMat);ht.castShadow=!0,ht.receiveShadow=!0,ct.add(ht);const rt=new St(x,this.armorMat);if(rt.castShadow=!0,rt.receiveShadow=!0,ct.add(rt),this.rightLeg.add(ct),this.rightLeg.position.set(-.1,-.3,0),this.avatar.add(this.rightLeg),this.weapons3PV)for(const ut of Object.keys(this.weapons3PV)){const Mt=Number(ut),wt=this.weapons3PV[Mt];wt&&this.rightArm.add(wt)}}changeCharacter(t){this.characterType!==t&&(this.characterType=t,this.buildAvatar(),this.setArmor(this.armorType))}buildSword(t=13421772,e=7877903,n=15381256){const i=new he,s=new jt({color:t,roughness:.3,metalness:.8}),o=new jt({color:n,roughness:.5,metalness:.5}),r=new jt({color:e,roughness:.9}),l=new Bt(.06,.45,.02);l.translate(0,.225,0);const c=new St(l,s);c.castShadow=!0,c.receiveShadow=!0,c.position.y=.02,i.add(c);const h=new Bt(.16,.04,.04),d=new St(h,o);d.castShadow=!0,d.receiveShadow=!0,d.position.y=0,i.add(d);const u=new Bt(.04,.12,.04);u.translate(0,-.06,0);const m=new St(u,r);return m.castShadow=!0,m.receiveShadow=!0,m.position.y=-.02,i.add(m),i}buildHammer(){const t=new he,e=new jt({color:5592405,roughness:.7,metalness:.5}),n=new jt({color:7877903,roughness:.9}),i=new Bt(.15,.15,.3);i.translate(0,.3,0);const s=new St(i,e);s.castShadow=!0,s.receiveShadow=!0,t.add(s);const o=new Bt(.04,.4,.04);o.translate(0,.05,0);const r=new St(o,n);return r.castShadow=!0,r.receiveShadow=!0,t.add(r),t}update(t,e,n,i){if(this.isDead)return;const s=performance.now();if(this.hp<pt.PLAYER_MAX_HP&&s-this.lastDamageTime>5e3&&s-this.lastRegenTime>1e3&&(this.hp=Math.min(pt.PLAYER_MAX_HP,this.hp+1),this.lastRegenTime=s),t.consumeJustPressed("F5")&&(this.cameraMode==="1PV"?this.cameraMode="3PV_BACK":this.cameraMode==="3PV_BACK"?this.cameraMode="3PV_FRONT":this.cameraMode="1PV"),(t.consumeJustPressed("ShiftLeft")||t.consumeJustPressed("ShiftRight"))&&(this.isSprintingToggle=!this.isSprintingToggle),this.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.handleStepClimb(n),this.isInWater=!1,this.voxelWorld){const o=Math.floor(this.position.x),r=Math.floor(this.position.y-pt.PLAYER_HEIGHT/2+.1),l=Math.floor(this.position.z);this.voxelWorld.getBlock(o,r,l)===b.WATER&&(this.isInWater=!0)}if(!t.isLocked){this.body.velocity.x*=.8,this.body.velocity.z*=.8;return}for(const o of Object.keys(this.weapons1PV)){const r=Number(o),l=i===r;this.cameraMode==="1PV"?(this.weapons1PV[r].visible=l,this.weapons3PV[r].visible=!1):(this.weapons1PV[r].visible=!1,this.weapons3PV[r].visible=l)}this.handleRotation(t),this.checkGrounded(n),this.handleMovement(t,e),this.animateAvatar(e),this.syncCamera(),this.updateHUD()}handleRotation(t){const e=t.consumeMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch-=e.y*this.sensitivity;const n=85*Math.PI/180;this.pitch=Math.max(-n,Math.min(n,this.pitch))}checkGrounded(t){const e=pt.PLAYER_HEIGHT/2,n=this.position.y-e-.12,i=[{x:this.position.x,z:this.position.z},{x:this.position.x-.3,z:this.position.z-.3},{x:this.position.x+.3,z:this.position.z-.3},{x:this.position.x-.3,z:this.position.z+.3},{x:this.position.x+.3,z:this.position.z+.3}];let s=!1;for(const r of i){const l=Math.floor(r.x),c=Math.floor(n),h=Math.floor(r.z);if(t.getBlock(l,c,h)!==0){s=!0;break}}const o=s||Math.abs(this.body.velocity.y)<.2;if(o&&!this.isGrounded&&!this.isInWater&&this.lastVelocityY<pt.FALL_DAMAGE_MIN_SPEED){const r=Math.floor((pt.FALL_DAMAGE_MIN_SPEED-this.lastVelocityY)*pt.FALL_DAMAGE_FACTOR);r>0&&this.takeDamage(r)}this.isGrounded=o,this.lastVelocityY=this.body.velocity.y}handleStepClimb(t){const e=this.body.velocity.x,n=this.body.velocity.z,i=e*e+n*n;if(i<.01)return;const s=pt.PLAYER_HEIGHT/2,o=this.position.y-s,r=Math.sqrt(i),l=e/r,c=n/r,h=pt.PLAYER_RADIUS+.15,d=this.position.x+l*h,u=this.position.z+c*h,m=Math.floor(d),g=Math.floor(u),f=Math.floor(o+.15),p=t.getBlock(m,f,g),_=t.getBlock(m,f+1,g),v=t.getBlock(m,f+2,g);if(p!==0&&_===0&&v===0){let y=1;(p===b.BED_HEAD||p===b.BED_FOOT)&&(y=.5625);const x=f+y,w=x-o;w>.05&&w<=1.05&&(p===b.STAIRS?this.body.velocity.y=4:(this.body.position.y=x+s+.05,this.position.y=this.body.position.y,this.body.velocity.y<0&&(this.body.velocity.y=0)))}}setArmor(t){this.armorType=t,t==="none"?this.armorMat.visible=!1:(this.armorMat.visible=!0,t==="leather"?(this.armorMat.color.setHex(9132587),this.armorMat.roughness=.9,this.armorMat.metalness=0):t==="iron"?(this.armorMat.color.setHex(14211288),this.armorMat.roughness=.4,this.armorMat.metalness=.8):t==="diamond"&&(this.armorMat.color.setHex(2282478),this.armorMat.roughness=.3,this.armorMat.metalness=.6),this.armorMat.needsUpdate=!0)}takeDamage(t){if(this.isDead)return;this.lastDamageTime=performance.now(),t>0&&(this.armorType==="leather"?t=Math.max(1,Math.floor(t*.9)):this.armorType==="iron"?t=Math.max(1,Math.floor(t*.7)):this.armorType==="diamond"&&(t=Math.max(1,Math.floor(t*.4)))),this.hp=Math.max(0,this.hp-t),ze.playDamage();const e=document.getElementById("damage-overlay");e&&(e.style.opacity="0.5",setTimeout(()=>{e.style.opacity="0"},150)),this.hp<=0&&this.die()}die(){this.isDead=!0,this.body.velocity.set(0,0,0);const t=document.getElementById("death-screen");t&&(t.style.display="flex"),document.exitPointerLock()}respawn(){this.hp=pt.PLAYER_MAX_HP,this.isDead=!1,this.body.position.set(this.spawnPosition.x,this.spawnPosition.y+pt.PLAYER_HEIGHT/2,this.spawnPosition.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.pitch=0,this.yaw=0;const t=document.getElementById("death-screen");t&&(t.style.display="none");const e=document.getElementById("menu-overlay");e&&(e.style.display="flex")}handleMovement(t,e){const n=je.tempVec3.set(0,0,0);t.isActionActive("forward")&&(n.z-=1),t.isActionActive("backward")&&(n.z+=1),t.isActionActive("left")&&(n.x-=1),t.isActionActive("right")&&(n.x+=1),n.normalize();const i=je.tempDirection.copy(n);i.applyAxisAngle(je.tempVec3_2.set(0,1,0),this.yaw);let s=this.isSprintingToggle?this.speed*1.5:this.speed;this.isInWater&&(s*=.6);const o=i.x*s,r=i.z*s;this.isGrounded?(this.body.velocity.x=o,this.body.velocity.z=r):(this.body.velocity.x+=(o-this.body.velocity.x)*3*e,this.body.velocity.z+=(r-this.body.velocity.z)*3*e),t.isActionActive("jump")&&(this.isInWater?this.body.velocity.y=this.jumpForce*.4:this.isGrounded&&(this.body.velocity.y=this.jumpForce,this.isGrounded=!1,ze.playJump())),this.isInWater&&this.body.velocity.y<-2&&(this.body.velocity.y*=.8)}animateAvatar(t){this.avatar.position.copy(this.position),this.avatar.rotation.y=this.yaw,this.head.rotation.x=this.pitch;const n=this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z>.1&&this.isGrounded;if(n){const o=performance.now()*.01,r=Math.sin(o)*.8;this.leftArm.rotation.x=r,this.swingTime<=0&&(this.rightArm.rotation.x=-r),this.leftLeg.rotation.x=-r,this.rightLeg.rotation.x=r}else{const o=10*t;this.leftArm.rotation.x+=(0-this.leftArm.rotation.x)*o,this.swingTime<=0&&(this.rightArm.rotation.x+=(0-this.rightArm.rotation.x)*o),this.leftLeg.rotation.x+=(0-this.leftLeg.rotation.x)*o,this.rightLeg.rotation.x+=(0-this.rightLeg.rotation.x)*o}let i=!1,s=0;if(!n&&this.isGrounded&&this.voxelWorld){const o=Math.floor(this.position.x),r=pt.PLAYER_HEIGHT/2,l=Math.floor(this.position.y-r-.1),c=Math.floor(this.position.z),h=this.voxelWorld.getBlock(o,l,c);if(h===b.BED_HEAD||h===b.BED_FOOT){i=!0;const d=h===b.BED_HEAD?b.BED_FOOT:b.BED_HEAD;this.voxelWorld.getBlock(o+1,l,c)===d?s=h===b.BED_HEAD?-Math.PI/2:Math.PI/2:this.voxelWorld.getBlock(o-1,l,c)===d?s=h===b.BED_HEAD?Math.PI/2:-Math.PI/2:this.voxelWorld.getBlock(o,l,c+1)===d?s=h===b.BED_HEAD?Math.PI:0:this.voxelWorld.getBlock(o,l,c-1)===d&&(s=h===b.BED_HEAD?0:Math.PI)}}if(i){const o=-Math.PI/2;this.avatar.rotation.x+=(o-this.avatar.rotation.x)*10*t,this.avatar.rotation.y=s,this.avatar.position.y-=.7}else this.avatar.rotation.x+=(0-this.avatar.rotation.x)*10*t;if(this.swingTime>0){this.swingTime-=t;const o=(.15-this.swingTime)/.15,r=Math.sin(o*Math.PI)*1.2;if(this.cameraMode==="1PV")for(const l of Object.keys(this.weapons1PV)){const c=Number(l);this.weapons1PV[c].rotation.x=-30*Math.PI/180+r,this.weapons1PV[c].rotation.y=45*Math.PI/180-r*.5,this.weapons1PV[c].position.z=-.38+r*.15}else this.rightArm.rotation.x=-Math.PI/3-r*1.5,this.rightArm.rotation.y=-r*.5}else if(this.cameraMode==="1PV")for(const o of Object.keys(this.weapons1PV)){const r=Number(o);this.weapons1PV[r].rotation.set(-30*Math.PI/180,45*Math.PI/180,15*Math.PI/180),this.weapons1PV[r].position.set(.24,-.24,-.38)}}syncCamera(){const t=je.tempQuat.setFromAxisAngle(je.tempVec3.set(0,1,0),this.yaw),e=je.tempQuat_2.setFromAxisAngle(je.tempVec3_2.set(1,0,0),this.pitch),n=je.tempQuat.multiplyQuaternions(t,e);this.camera.quaternion.copy(n);const i=pt.PLAYER_HEIGHT/2-.2;if(this.cameraMode==="1PV")this.camera.position.set(this.position.x,this.position.y+i,this.position.z),this.avatar.visible=!1;else{this.avatar.visible=!0,this.head.visible=!0;const s=4,o=je.tempVec3.set(0,i+.4,0),r=je.tempVec3_2.set(0,0,-1).applyQuaternion(n),l=new H(this.position.x+o.x,this.position.y+o.y,this.position.z+o.z);let c;this.cameraMode==="3PV_BACK"?c=r.clone().negate():c=new H(r.x,-r.y,r.z).normalize();const h=this.calcSafeCameraDist(l,c,s);this.cameraMode==="3PV_BACK"?this.camera.position.copy(l).addScaledVector(c,h):(this.camera.position.copy(l).addScaledVector(c,h),this.camera.lookAt(this.position.x,this.position.y+i,this.position.z))}}calcSafeCameraDist(t,e,n){if(!this.voxelWorld)return n;const i=.2,s=.1,o=Math.ceil(n/s);for(let r=1;r<=o;r++){const l=Math.min(r*s,n),c=t.x+e.x*l,h=t.y+e.y*l,d=t.z+e.z*l,u=Math.floor(c),m=Math.floor(h),g=Math.floor(d);if(this.voxelWorld.getBlock(u,m,g)!==0)return Math.max(0,l-i)}return n}updateHUD(){const t=document.getElementById("pos-display");t&&(t.textContent=`${this.position.x.toFixed(1)}, ${this.position.y.toFixed(1)}, ${this.position.z.toFixed(1)}`)}swing(){this.swingTime<=0&&(this.swingTime=.15,ze.playSwing())}getYaw(){return this.yaw}setWorld(t){this.voxelWorld=t}getSaveData(){return{x:this.body.position.x,y:this.body.position.y,z:this.body.position.z,hp:this.hp,yaw:this.yaw,pitch:this.pitch,armorType:this.armorType}}loadSaveData(t){if(!t)return;this.hp=typeof t.hp=="number"?t.hp:pt.PLAYER_MAX_HP,this.isDead=this.hp<=0,t.armorType?this.setArmor(t.armorType):this.setArmor("none");const e=document.getElementById("death-screen");e&&(e.style.display=this.isDead?"flex":"none"),this.yaw=typeof t.yaw=="number"?t.yaw:0,this.pitch=typeof t.pitch=="number"?t.pitch:0,this.body.position.set(t.x,t.y,t.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.position.set(t.x,t.y,t.z),this.syncCamera(),this.updateHUD()}buildPickaxe(t,e=7877903){const n=new he,i=new jt({color:e,roughness:.9}),s=new jt({color:t,roughness:.5,metalness:.5}),o=new Bt(.03,.45,.03);o.translate(0,.1,0);const r=new St(o,i);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const l=new Bt(.24,.04,.04);l.translate(0,.3,0);const c=new St(l,s);return c.castShadow=!0,c.receiveShadow=!0,n.add(c),n}buildAxe(t,e=7877903){const n=new he,i=new jt({color:e,roughness:.9}),s=new jt({color:t,roughness:.5,metalness:.5}),o=new Bt(.03,.45,.03);o.translate(0,.1,0);const r=new St(o,i);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const l=new Bt(.12,.12,.04);l.translate(.05,.26,0);const c=new St(l,s);return c.castShadow=!0,c.receiveShadow=!0,n.add(c),n}buildShovel(t,e=7877903){const n=new he,i=new jt({color:e,roughness:.9}),s=new jt({color:t,roughness:.5,metalness:.5}),o=new Bt(.03,.45,.03);o.translate(0,.1,0);const r=new St(o,i);r.castShadow=!0,r.receiveShadow=!0,n.add(r);const l=new Bt(.08,.12,.02);l.translate(0,.31,0);const c=new St(l,s);return c.castShadow=!0,c.receiveShadow=!0,n.add(c),n}}class Bv{world;playerMaterial;defaultMaterial;blockBodies=new Map;blockShape;bedShape;constructor(){this.world=new Rv,this.world.gravity.set(0,pt.GRAVITY,0),this.world.broadphase=new Vi(this.world),this.world.solver.iterations=5,this.defaultMaterial=new Zi("default");const t=new $i(this.defaultMaterial,this.defaultMaterial,{friction:.1,restitution:0});this.world.addContactMaterial(t),this.world.defaultContactMaterial=t,this.playerMaterial=new Zi("player");const e=new $i(this.playerMaterial,this.defaultMaterial,{friction:0,restitution:0});this.world.addContactMaterial(e),this.blockShape=new bi(new S(.5,.5,.5)),this.bedShape=new bi(new S(.5,.5625/2,.5));const n=new mt({mass:0,shape:new u0});n.quaternion.setFromEuler(-Math.PI/2,0,0),n.position.set(0,-50,0),this.world.addBody(n)}updateBlockBodies(t,e){const i=Math.floor(t.x),s=Math.floor(t.y),o=Math.floor(t.z),r=new Set;for(let l=i-3;l<=i+3;l++)for(let c=s-3-1;c<=s+3;c++)for(let h=o-3;h<=o+3;h++){const d=e.getBlock(l,c,h),u=Sn[d];if(u&&u.isSolid){const m=`${l},${c},${h}`;if(r.add(m),!this.blockBodies.has(m)){let g=this.blockShape,f=.5;(d===b.BED_HEAD||d===b.BED_FOOT)&&(g=this.bedShape,f=.5625/2);const p=new mt({mass:0,shape:g,position:new S(l+.5,c+f,h+.5),material:this.defaultMaterial});this.world.addBody(p),this.blockBodies.set(m,p)}}}for(const[l,c]of this.blockBodies.entries())r.has(l)||(this.world.removeBody(c),this.blockBodies.delete(l))}step(t){this.world.step(1/60,t,3);const e=document.getElementById("bodies-display");e&&(e.textContent=this.world.bodies.length.toString())}}class zv{overlay;modal;configBtn;keyButtons;invertClicksChk;enableShadowsChk;easyModeChk;saveBtn;defaultBtn;closeBtn;tempConfig;activeBindingKey=null;globalKeydownListener=null;constructor(){this.overlay=document.getElementById("menu-overlay"),this.modal=document.getElementById("config-modal"),this.configBtn=document.getElementById("config-btn"),this.keyButtons={forward:document.getElementById("key-forward-btn"),backward:document.getElementById("key-backward-btn"),left:document.getElementById("key-left-btn"),right:document.getElementById("key-right-btn"),jump:document.getElementById("key-jump-btn"),place:document.getElementById("key-place-btn"),break:document.getElementById("key-break-btn"),map:document.getElementById("key-map-btn"),inventory:document.getElementById("key-inventory-btn"),crafting:document.getElementById("key-crafting-btn"),manual:document.getElementById("key-manual-btn"),home:document.getElementById("key-home-btn")},this.invertClicksChk=document.getElementById("invert-clicks-chk"),this.enableShadowsChk=document.getElementById("enable-shadows-chk"),this.easyModeChk=document.getElementById("easy-mode-chk"),this.saveBtn=document.getElementById("config-save-btn"),this.defaultBtn=document.getElementById("config-default-btn"),this.closeBtn=document.getElementById("config-close-btn"),this.tempConfig={...Ce.getConfig()},this.initEvents()}initEvents(){this.configBtn.addEventListener("click",()=>{this.openModal()}),this.keyButtons.forward.addEventListener("click",()=>this.startBinding("keyForward",this.keyButtons.forward)),this.keyButtons.backward.addEventListener("click",()=>this.startBinding("keyBackward",this.keyButtons.backward)),this.keyButtons.left.addEventListener("click",()=>this.startBinding("keyLeft",this.keyButtons.left)),this.keyButtons.right.addEventListener("click",()=>this.startBinding("keyRight",this.keyButtons.right)),this.keyButtons.jump.addEventListener("click",()=>this.startBinding("keyJump",this.keyButtons.jump)),this.keyButtons.place.addEventListener("click",()=>this.startBinding("keyPlaceBlock",this.keyButtons.place)),this.keyButtons.break.addEventListener("click",()=>this.startBinding("keyBreakBlock",this.keyButtons.break)),this.keyButtons.map.addEventListener("click",()=>this.startBinding("keyOpenMap",this.keyButtons.map)),this.keyButtons.inventory.addEventListener("click",()=>this.startBinding("keyOpenInventory",this.keyButtons.inventory)),this.keyButtons.crafting.addEventListener("click",()=>this.startBinding("keyOpenCrafting",this.keyButtons.crafting)),this.keyButtons.manual.addEventListener("click",()=>this.startBinding("keyOpenManual",this.keyButtons.manual)),this.keyButtons.home.addEventListener("click",()=>this.startBinding("keyRegisterHome",this.keyButtons.home)),this.saveBtn.addEventListener("click",()=>{this.saveConfig()}),this.defaultBtn.addEventListener("click",()=>{this.loadDefaultConfig()}),this.closeBtn.addEventListener("click",()=>{this.closeModal()})}openModal(){this.tempConfig={...Ce.getConfig()},this.updateUI(),this.modal.style.display="flex"}closeModal(){this.stopBinding(),this.modal.style.display="none"}updateUI(){this.keyButtons.forward.textContent=this.formatKeyName(this.tempConfig.keyForward),this.keyButtons.backward.textContent=this.formatKeyName(this.tempConfig.keyBackward),this.keyButtons.left.textContent=this.formatKeyName(this.tempConfig.keyLeft),this.keyButtons.right.textContent=this.formatKeyName(this.tempConfig.keyRight),this.keyButtons.jump.textContent=this.formatKeyName(this.tempConfig.keyJump),this.keyButtons.place.textContent=this.formatKeyName(this.tempConfig.keyPlaceBlock),this.keyButtons.break.textContent=this.formatKeyName(this.tempConfig.keyBreakBlock),this.keyButtons.map.textContent=this.formatKeyName(this.tempConfig.keyOpenMap),this.keyButtons.inventory.textContent=this.formatKeyName(this.tempConfig.keyOpenInventory),this.keyButtons.crafting.textContent=this.formatKeyName(this.tempConfig.keyOpenCrafting),this.keyButtons.manual.textContent=this.formatKeyName(this.tempConfig.keyOpenManual),this.keyButtons.home.textContent=this.formatKeyName(this.tempConfig.keyRegisterHome),this.invertClicksChk.checked=this.tempConfig.invertClicks,this.enableShadowsChk.checked=this.tempConfig.enableShadows,this.easyModeChk.checked=this.tempConfig.easyMode}formatKeyName(t){return t.startsWith("Key")?t.substring(3):t.startsWith("Digit")?t.substring(5):t==="Space"?"Space":t}startBinding(t,e){this.stopBinding(),this.activeBindingKey=t,e.classList.add("waiting"),e.textContent="キーを入力...",this.globalKeydownListener=n=>{n.preventDefault(),n.stopPropagation();const i=n.code;if(i==="Escape"){this.stopBinding(),this.updateUI();return}this.activeBindingKey&&(this.tempConfig[this.activeBindingKey]=i),this.stopBinding(),this.updateUI()},window.addEventListener("keydown",this.globalKeydownListener,!0)}stopBinding(){this.globalKeydownListener&&(window.removeEventListener("keydown",this.globalKeydownListener,!0),this.globalKeydownListener=null),Object.values(this.keyButtons).forEach(t=>{t.classList.remove("waiting")}),this.activeBindingKey=null}saveConfig(){this.tempConfig.invertClicks=this.invertClicksChk.checked,this.tempConfig.enableShadows=this.enableShadowsChk.checked,this.tempConfig.easyMode=this.easyModeChk.checked,Ce.save(this.tempConfig),this.closeModal(),this.updateInstructionsUI(),window.dispatchEvent(new CustomEvent("config-changed"))}loadDefaultConfig(){const t={keyForward:"KeyW",keyBackward:"KeyS",keyLeft:"KeyA",keyRight:"KeyD",keyJump:"Space",keyPlaceBlock:"KeyV",keyBreakBlock:"KeyB",keyOpenMap:"KeyM",keyOpenInventory:"KeyE",keyOpenCrafting:"KeyC",keyOpenManual:"KeyN",keyRegisterHome:"KeyH",invertClicks:!1,enableShadows:!0,easyMode:!0,characterType:"boy1"};this.tempConfig={...t},this.updateUI()}updateInstructionsUI(){const t=Ce.getConfig(),e=this.overlay.querySelectorAll(".key-badge");e.length>=5&&(e[0].textContent=this.formatKeyName(t.keyForward),e[1].textContent=this.formatKeyName(t.keyLeft),e[2].textContent=this.formatKeyName(t.keyBackward),e[3].textContent=this.formatKeyName(t.keyRight),e[4].textContent=this.formatKeyName(t.keyJump));const n=this.overlay.querySelector("#click-break-badge"),i=this.overlay.querySelector("#key-break-badge");n&&i&&(n.textContent=t.invertClicks?"右クリック":"左クリック",i.textContent=this.formatKeyName(t.keyBreakBlock));const s=this.overlay.querySelector("#click-place-badge"),o=this.overlay.querySelector("#key-place-badge");s&&o&&(s.textContent=t.invertClicks?"左クリック":"右クリック",o.textContent=this.formatKeyName(t.keyPlaceBlock));const r=this.overlay.querySelector("#key-map-badge");r&&(r.textContent=this.formatKeyName(t.keyOpenMap));const l=this.overlay.querySelector("#key-inventory-badge");l&&(l.textContent=this.formatKeyName(t.keyOpenInventory));const c=this.overlay.querySelector("#key-crafting-badge");c&&(c.textContent=this.formatKeyName(t.keyOpenCrafting));const h=this.overlay.querySelector("#key-manual-badge");h&&(h.textContent=this.formatKeyName(t.keyOpenManual));const d=this.overlay.querySelector("#key-home-badge");d&&(d.textContent=this.formatKeyName(t.keyRegisterHome))}}const kv=[{id:"plank",inputs:[{type:b.WOOD,count:1}],output:{type:b.PLANK,count:4}},{id:"stick",inputs:[{type:b.PLANK,count:2}],output:{type:b.STICK,count:4}},{id:"torch",inputs:[{type:b.STICK,count:1},{type:b.COAL,count:1}],output:{type:b.TORCH,count:4}},{id:"chest",inputs:[{type:b.PLANK,count:8}],output:{type:b.CHEST,count:1}},{id:"furnace",inputs:[{type:b.COBBLESTONE,count:8}],output:{type:b.FURNACE,count:1}},{id:"door",inputs:[{type:b.PLANK,count:6}],output:{type:b.DOOR_CLOSED,count:3}},{id:"bed",inputs:[{type:b.PLANK,count:3},{type:b.WOOD,count:3}],output:{type:b.BED_HEAD,count:1}},{id:"stairs",inputs:[{type:b.PLANK,count:6}],output:{type:b.STAIRS,count:4}},{id:"fence",inputs:[{type:b.PLANK,count:2},{type:b.STICK,count:4}],output:{type:b.FENCE,count:3}},{id:"smelt_stone",inputs:[{type:b.COBBLESTONE,count:1},{type:b.COAL,count:1}],output:{type:b.STONE,count:1}},{id:"smelt_glass",inputs:[{type:b.SAND,count:1},{type:b.COAL,count:1}],output:{type:b.GLASS,count:1}},{id:"smelt_iron",inputs:[{type:b.IRON_ORE,count:1},{type:b.COAL,count:1}],output:{type:b.IRON_INGOT,count:1}},{id:"smelt_gold",inputs:[{type:b.GOLD_ORE,count:1},{type:b.COAL,count:1}],output:{type:b.GOLD_INGOT,count:1}},{id:"wooden_pickaxe",inputs:[{type:b.STICK,count:2},{type:b.PLANK,count:3}],output:{type:b.WOODEN_PICKAXE,count:1}},{id:"stone_pickaxe",inputs:[{type:b.STICK,count:2},{type:b.COBBLESTONE,count:3}],output:{type:b.STONE_PICKAXE,count:1}},{id:"iron_pickaxe",inputs:[{type:b.STICK,count:2},{type:b.IRON_INGOT,count:3}],output:{type:b.IRON_PICKAXE,count:1}},{id:"diamond_pickaxe",inputs:[{type:b.STICK,count:2},{type:b.DIAMOND,count:3}],output:{type:b.DIAMOND_PICKAXE,count:1}},{id:"wooden_axe",inputs:[{type:b.STICK,count:2},{type:b.PLANK,count:3}],output:{type:b.WOODEN_AXE,count:1}},{id:"stone_axe",inputs:[{type:b.STICK,count:2},{type:b.COBBLESTONE,count:3}],output:{type:b.STONE_AXE,count:1}},{id:"iron_axe",inputs:[{type:b.STICK,count:2},{type:b.IRON_INGOT,count:3}],output:{type:b.IRON_AXE,count:1}},{id:"diamond_axe",inputs:[{type:b.STICK,count:2},{type:b.DIAMOND,count:3}],output:{type:b.DIAMOND_AXE,count:1}},{id:"wooden_shovel",inputs:[{type:b.STICK,count:2},{type:b.PLANK,count:1}],output:{type:b.WOODEN_SHOVEL,count:1}},{id:"stone_shovel",inputs:[{type:b.STICK,count:2},{type:b.COBBLESTONE,count:1}],output:{type:b.STONE_SHOVEL,count:1}},{id:"iron_shovel",inputs:[{type:b.STICK,count:2},{type:b.IRON_INGOT,count:1}],output:{type:b.IRON_SHOVEL,count:1}},{id:"diamond_shovel",inputs:[{type:b.STICK,count:2},{type:b.DIAMOND,count:1}],output:{type:b.DIAMOND_SHOVEL,count:1}},{id:"stone_sword",inputs:[{type:b.STICK,count:1},{type:b.COBBLESTONE,count:2}],output:{type:b.SWORD,count:1}},{id:"diamond_sword",inputs:[{type:b.STICK,count:1},{type:b.DIAMOND,count:2}],output:{type:b.DIAMOND_SWORD,count:1}},{id:"hammer",inputs:[{type:b.STICK,count:2},{type:b.IRON_INGOT,count:3}],output:{type:b.HAMMER,count:1}},{id:"iron_armor_set",inputs:[{type:b.IRON_INGOT,count:24}],output:{type:b.IRON_ARMOR_SET,count:1}},{id:"diamond_armor_set",inputs:[{type:b.DIAMOND,count:24}],output:{type:b.DIAMOND_ARMOR_SET,count:1}}];class Fv{time=0;timeScale=.01;sunLight;ambientLight;scene;skyColor=new Vt;sunColor=new Vt;ambientColor=new Vt;constructor(t){this.scene=t,this.scene.background=this.skyColor;const e=Ce.getConfig();this.sunLight=new Qm(16777215,1.2),this.sunLight.castShadow=e.enableShadows,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=80;const n=30;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.ambientLight=new tg(16777215,.4),this.scene.add(this.ambientLight)}update(t,e){const n=this.time*Math.PI*2,i=Math.sin(n);let s=1;i>-.1?s=.35:s=2.5,this.time=(this.time+this.timeScale*s*t)%1;const o=this.time*Math.PI*2,r=Math.sin(o),l=Math.cos(o);this.sunLight.position.set(e.x+l*40,e.y+r*40,e.z+l*20),this.sunLight.target.position.copy(e),this.sunLight.target.updateMatrixWorld();const c=Math.max(0,Math.min(1,r*2+.5)),h=en.lerp(.02,.45,c),d=en.lerp(.03,.65,c),u=en.lerp(.08,.95,c);this.skyColor.setRGB(h,d,u);const m=en.lerp(0,1.2,c);this.sunLight.intensity=m;const g=en.lerp(.1,1,c),f=en.lerp(.1,.95,c),p=en.lerp(.2,.85,c);this.sunColor.setRGB(g,f,p),this.sunLight.color.copy(this.sunColor);const _=en.lerp(.22,.45,c);this.ambientLight.intensity=_;const v=en.lerp(.15,1,c),y=en.lerp(.18,1,c),x=en.lerp(.35,1,c);this.ambientColor.setRGB(v,y,x),this.ambientLight.color.copy(this.ambientColor)}setShadowsEnabled(t){this.sunLight.castShadow=t}isNight(){const t=this.time*Math.PI*2;return Math.sin(t)<-.1}}const Uv={[b.GROUND]:4906624,[b.DIRT]:8736014,[b.STONE]:10265519,[b.WOOD]:7877903,[b.LEAVES]:2278750,[b.PLANK]:16096779,[b.BRICK]:15680580,[b.SAND]:16707722,[b.COAL_ORE]:3621201,[b.TORCH]:16347926,[b.GLASS]:14742270,[b.DOOR_CLOSED]:11817737,[b.SWORD]:13421772};class fi{blockType;mesh;body;scene;physicsWorld;age=0;isAttracted=!1;static sharedGeometry=new Bt(.2,.2,.2);static materialPool=new Map;static tempVec3=new H;static tempVec3_2=new H;constructor(t,e,n,i,s){this.blockType=t,this.scene=n,this.physicsWorld=i;let o=fi.materialPool.get(t);if(!o){const l=Uv[t]||16777215;o=new jt({color:l,roughness:.8,metalness:.1}),fi.materialPool.set(t,o)}this.mesh=new St(fi.sharedGeometry,o),this.mesh.position.copy(e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh);const r=new bi(new S(.1,.1,.1));if(this.body=new mt({mass:1,shape:r,position:new S(e.x,e.y,e.z)}),s){const l=s.clone().sub(e),c=l.length();l.normalize(),l.y+=.5,l.normalize();const h=Math.min(Math.max(c*2,4),15);this.body.velocity.set(l.x*h,l.y*h,l.z*h),this.body.linearDamping=.1}else this.body.velocity.set((Math.random()-.5)*4,Math.random()*4+2,(Math.random()-.5)*4);this.physicsWorld.addBody(this.body)}update(t,e){if(this.age+=t,this.age>pt.ITEM_DESPAWN_TIME)return this.destroy(),!0;const n=fi.tempVec3.set(this.body.position.x,this.body.position.y,this.body.position.z),i=n.distanceTo(e);if(i<pt.ITEM_PICKUP_RADIUS){this.isAttracted=!0,this.body.world&&this.physicsWorld.removeBody(this.body);const s=fi.tempVec3_2.copy(e).sub(n).normalize();if(n.add(s.multiplyScalar(22*t)),this.mesh.position.copy(n),i<.5)return this.destroy(),!0}else this.isAttracted?(this.isAttracted=!1,this.body.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z),this.body.velocity.set(0,0,0),this.physicsWorld.addBody(this.body)):(this.mesh.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.mesh.rotation.x+=t*2,this.mesh.rotation.y+=t*1.5);return!1}destroy(){this.mesh&&this.scene.remove(this.mesh),this.body.world&&this.physicsWorld.removeBody(this.body)}}class Ee{mesh;body;hp=4;scene;physicsWorld;head;leftLeg;rightLeg;speed=3;jumpForce=6;attackCooldown=0;damageFlashTime=0;static sharedHeadGeo=new Bt(.4,.4,.4);static sharedBodyGeo=new Bt(.4,.6,.2);static sharedLimbGeo=new Bt(.2,.6,.2);static zombieGreenMat=new jt({color:5614165,roughness:.9});static zombieBlueMat=new jt({color:3362408,roughness:.9});static zombiePurpleMat=new jt({color:4729947,roughness:.9});static damageMat=new jt({color:16724787,roughness:.5});static tempVec3=new H;static tempDirection=new H;constructor(t,e,n){this.scene=e,this.physicsWorld=n;const i=.35,s=.9,o=new bi(new S(i,s,i));this.body=new mt({mass:50,shape:o,position:new S(t.x,t.y+s,t.z),fixedRotation:!0,linearDamping:.1}),this.physicsWorld.addBody(this.body),this.mesh=new he,this.buildAvatar(),this.scene.add(this.mesh)}buildAvatar(){const t=Ee.zombieGreenMat,e=Ee.zombieBlueMat,n=Ee.zombieGreenMat,i=Ee.zombiePurpleMat;this.head=new St(Ee.sharedHeadGeo,t),this.head.position.y=.5,this.head.castShadow=!0,this.head.receiveShadow=!0,this.mesh.add(this.head);const s=new St(Ee.sharedBodyGeo,e);s.position.y=0,s.castShadow=!0,s.receiveShadow=!0,this.mesh.add(s);const o=Ee.sharedLimbGeo.clone();o.translate(0,-.3,0);const r=new he,l=new St(o,n);l.castShadow=!0,l.receiveShadow=!0,r.add(l),r.position.set(.3,.3,0),r.rotation.x=-Math.PI/2,this.mesh.add(r);const c=new he,h=new St(o,n);h.castShadow=!0,h.receiveShadow=!0,c.add(h),c.position.set(-.3,.3,0),c.rotation.x=-Math.PI/2,this.mesh.add(c),this.leftLeg=new he;const d=new St(o,i);d.castShadow=!0,d.receiveShadow=!0,this.leftLeg.add(d),this.leftLeg.position.set(.1,-.3,0),this.mesh.add(this.leftLeg),this.rightLeg=new he;const u=new St(o,i);u.castShadow=!0,u.receiveShadow=!0,this.rightLeg.add(u),this.rightLeg.position.set(-.1,-.3,0),this.mesh.add(this.rightLeg)}update(t,e){const n=e.position,s=Ee.tempVec3.set(this.body.position.x,this.body.position.y,this.body.position.z).distanceTo(n);if(s>pt.MOB_DESPAWN_RADIUS)return this.destroy(),!0;if(this.damageFlashTime>0&&(this.damageFlashTime-=t,this.damageFlashTime<=0&&this.setMaterials(!1)),e.hp>0?this.runAI(t,n,s,e):(this.body.velocity.x*=.8,this.body.velocity.z*=.8),this.mesh.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z>.1){const r=performance.now()*.01,l=Math.sin(r)*.8;this.leftLeg.rotation.x=-l,this.rightLeg.rotation.x=l}else this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0;return!1}runAI(t,e,n,i){const s=Ee.tempDirection.set(e.x-this.body.position.x,0,e.z-this.body.position.z);s.normalize();const o=Math.atan2(s.x,s.z);if(this.mesh.rotation.y=o,n<pt.MOB_SPAWN_RADIUS){this.body.velocity.x=s.x*this.speed,this.body.velocity.z=s.z*this.speed;const r=this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z,l=this.speed*this.speed,c=r<l*.25,h=Math.abs(this.body.velocity.y)<.02;c&&h&&(this.body.velocity.y=this.jumpForce)}else this.body.velocity.x*=.8,this.body.velocity.z*=.8;this.attackCooldown>0&&(this.attackCooldown-=t),n<1.3&&this.attackCooldown<=0&&(i.takeDamage(2),this.attackCooldown=1.2)}takeDamage(t,e){return this.hp-=t,this.damageFlashTime=.2,this.setMaterials(!0),ze.playHit(),this.body.velocity.y=4,this.body.velocity.x=e.x*6,this.body.velocity.z=e.z*6,this.hp<=0?(this.destroy(),!0):!1}setMaterials(t){this.mesh.traverse(e=>{e instanceof St&&(t?e.material=Ee.damageMat:e===this.head||e.parent===this.head?e.material=Ee.zombieGreenMat:e.name==="hair"?e.material=new jt({color:5913896,roughness:.9}):e.position.y===0?e.material=Ee.zombieBlueMat:e.position.y===-.3||e.parent?.position.y===-.3?e.material=Ee.zombiePurpleMat:e.material=Ee.zombieGreenMat)})}destroy(){this.mesh&&this.scene.remove(this.mesh),this.body.world&&this.physicsWorld.removeBody(this.body)}}class Gv{player;world;accountId=null;worldId="shared_world_1";autoSaveInterval=null;isSaving=!1;onSaveCustomData;onLoadCustomData;constructor(t,e){this.player=t,this.world=e}setAccountId(t){this.accountId=t}getAccountId(){return this.accountId}setWorldId(t){this.worldId=t||"shared_world_1"}async loadData(){if(!this.accountId)return console.error("Account ID is not set."),!1;try{this.showToast("データをロード中...");const e=await(await fetch(`${pt.GAS_WEB_APP_URL}?accountId=${encodeURIComponent(this.accountId)}&worldId=${encodeURIComponent(this.worldId)}`)).json();if(e.worldData&&this.world.setModifiedBlocksData(e.worldData),e.playerData)this.player.loadSaveData(e.playerData),this.onLoadCustomData&&e.playerData.customData&&this.onLoadCustomData(e.playerData.customData);else{const i=Math.floor(Math.random()*300*2)-300+100,s=Math.floor(Math.random()*300*2)-300+100;this.player.position.set(i,30,s),this.player.body.position.set(i,30,s),this.player.body.velocity.set(0,0,0),this.player.spawnPosition.set(i,30,s)}return this.world.clearAndRebuild(this.player.position.x,this.player.position.z),this.showToast("ロードが完了しました"),!0}catch(t){return console.error("Failed to load data:",t),this.showToast("ロードに失敗しました",!0),!1}}async saveData(){if(!this.accountId)return console.error("Account ID is not set."),!1;if(this.isSaving)return!1;this.isSaving=!0;try{this.showToast("セーブ中...");const t=this.world.getModifiedBlocksData(),e=this.player.getSaveData();this.onSaveCustomData&&(e.customData=this.onSaveCustomData());const n={accountId:this.accountId,worldId:this.worldId,worldData:t,playerData:e},s=await(await fetch(pt.GAS_WEB_APP_URL,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(n)})).json();if(this.isSaving=!1,s.success)return this.showToast("セーブしました"),!0;throw new Error(s.error)}catch(t){return console.error("Failed to save data:",t),this.showToast("セーブに失敗しました",!0),this.isSaving=!1,!1}}startAutoSave(t=3){this.stopAutoSave(),this.autoSaveInterval=window.setInterval(()=>{this.accountId&&this.saveData()},t*60*1e3)}stopAutoSave(){this.autoSaveInterval!==null&&(window.clearInterval(this.autoSaveInterval),this.autoSaveInterval=null)}showToast(t,e=!1){const n=document.getElementById("save-toast");n&&(n.textContent=t,n.style.backgroundColor=e?"rgba(220, 53, 69, 0.9)":"rgba(40, 167, 69, 0.9)",n.style.opacity="1",n.style.transform="translateY(0)",setTimeout(()=>{n.style.opacity="0",n.style.transform="translateY(-20px)"},3e3))}}const Vv={[b.AIR]:"#000000",[b.GROUND]:"#4ade80",[b.DIRT]:"#854d0e",[b.STONE]:"#9ca3af",[b.WOOD]:"#78350f",[b.LEAVES]:"#22c55e",[b.PLANK]:"#f59e0b",[b.BRICK]:"#ef4444",[b.SAND]:"#fef08a",[b.COAL_ORE]:"#374151",[b.IRON_ORE]:"#d4d4d8",[b.GOLD_ORE]:"#fde047",[b.DIAMOND_ORE]:"#67e8f9",[b.WATER]:"#3b82f6",[b.BEDROCK]:"#111827",[b.COBBLESTONE]:"#6b7280"};class Hv{homePosition=null;compassBar;homeMarker;homeDistance;mapCanvas;mapPlayerIcon;mapHomeIcon;mapRadius=64;constructor(){this.compassBar=document.getElementById("compass-bar"),this.homeMarker=document.getElementById("home-marker"),this.homeDistance=document.getElementById("home-distance"),this.mapCanvas=document.getElementById("world-map-canvas"),this.mapPlayerIcon=document.getElementById("map-player-icon"),this.mapHomeIcon=document.getElementById("map-home-icon"),this.initCompassUI()}initCompassUI(){if(!this.compassBar)return;[{label:"N (きた)",deg:0},{label:"NE (ほくとう)",deg:45,minor:!0},{label:"E (ひがし)",deg:90},{label:"SE (なんとう)",deg:135,minor:!0},{label:"S (みなみ)",deg:180},{label:"SW (なんせい)",deg:225,minor:!0},{label:"W (にし)",deg:270},{label:"NW (ほくせい)",deg:315,minor:!0},{label:"N (きた)",deg:360},{label:"NE (ほくとう)",deg:405,minor:!0},{label:"E (ひがし)",deg:450}].forEach(e=>{const n=document.createElement("div");n.className=`compass-tick ${e.minor?"minor":""}`;const i=e.deg/360*800;n.style.left=`${i}px`,n.innerHTML=`<span>${e.label}</span>`,this.compassBar.appendChild(n)})}setHome(t){this.homePosition=t.clone(),this.homeMarker&&(this.homeMarker.style.display="block"),this.homeDistance&&(this.homeDistance.style.display="block"),this.mapHomeIcon&&(this.mapHomeIcon.style.display="block")}updateCompass(t){if(!this.compassBar)return;const e=new H(0,0,-1).applyQuaternion(t.camera.quaternion);let i=Math.atan2(e.x,-e.z)*(180/Math.PI);i<0&&(i+=360);const s=i/360*800;if(this.compassBar.style.transform=`translateX(${-s}px)`,this.homePosition&&this.homeMarker&&this.homeDistance){const o=this.homePosition.clone().sub(t.position),r=o.length();let c=Math.atan2(o.x,-o.z)*(180/Math.PI);c<0&&(c+=360);let h=c-i;h>180&&(h-=360),h<-180&&(h+=360);const d=90,u=85,m=h<-d||h>d,f=Math.max(-u,Math.min(u,h))/360*800;this.homeMarker.style.left=`calc(50% + ${f}px)`,m?(h<0?this.homeMarker.textContent="◀🏠":this.homeMarker.textContent="🏠▶",this.homeMarker.style.opacity="0.7"):(this.homeMarker.textContent="🏠",this.homeMarker.style.opacity="1"),this.homeDistance.textContent=`${Math.floor(r)}m`,this.homeDistance.style.display="block"}}getDirectionJapanese(t,e){let i=Math.atan2(e,t)*(180/Math.PI);return i<0&&(i+=360),i>=337.5||i<22.5?{name:"ひがし",arrow:"➡"}:i>=22.5&&i<67.5?{name:"なんとう",arrow:"↘"}:i>=67.5&&i<112.5?{name:"みなみ",arrow:"⬇"}:i>=112.5&&i<157.5?{name:"なんせい",arrow:"↙"}:i>=157.5&&i<202.5?{name:"にし",arrow:"⬅"}:i>=202.5&&i<247.5?{name:"ほくせい",arrow:"↖"}:i>=247.5&&i<292.5?{name:"きた",arrow:"⬆"}:{name:"ほくとう",arrow:"↗"}}renderMap(t,e){if(!this.mapCanvas)return;const n=this.mapCanvas.getContext("2d");if(!n)return;const i=this.mapRadius*2;this.mapCanvas.width=i,this.mapCanvas.height=i,n.fillStyle="#000000",n.fillRect(0,0,i,i);const s=Math.floor(e.x),o=Math.floor(e.z),r=Array.from(t.getLoadedChunks()).sort((_,v)=>_.y-v.y);for(const _ of r){const v=_.x*pt.CHUNK_SIZE,y=_.z*pt.CHUNK_SIZE;for(let x=0;x<pt.CHUNK_SIZE;x++)for(let w=0;w<pt.CHUNK_SIZE;w++){const E=v+x,T=y+w,M=E-s+this.mapRadius,A=T-o+this.mapRadius;if(M>=0&&M<i&&A>=0&&A<i){let I=b.AIR;for(let F=pt.CHUNK_SIZE-1;F>=0;F--){const U=_.getBlock(x,F,w);if(U!==b.AIR&&U!==b.WATER){I=U;break}else U===b.WATER&&I===b.AIR&&(I=U)}if(I!==b.AIR){const F=Vv[I]||"#555555";n.fillStyle=F,n.fillRect(M,A,1,1)}}}}if(this.mapPlayerIcon&&(this.mapPlayerIcon.style.left="50%",this.mapPlayerIcon.style.top="50%"),this.homePosition&&this.mapHomeIcon){const _=this.homePosition.x-s+this.mapRadius,v=this.homePosition.z-o+this.mapRadius,y=_/i*100,x=v/i*100,w=y<0||y>100||x<0||x>100;if(this.mapHomeIcon.style.left=`${Math.min(Math.max(y,2),98)}%`,this.mapHomeIcon.style.top=`${Math.min(Math.max(x,2),98)}%`,w){const E=this.homePosition.x-s,T=this.homePosition.z-o,M=this.getDirectionJapanese(E,T);this.mapHomeIcon.textContent=M.arrow}else this.mapHomeIcon.textContent="🏠"}const l=[],c=pt.CHUNK_SIZE,h=t.getModifiedBlocksData();if(h&&h.blocks)for(const[_,v]of Object.entries(h.blocks)){const[y,x,w]=_.split(",").map(Number);for(const[E,T]of Object.entries(v))if(T!==b.AIR){const M=parseInt(E,10),A=M%c,I=Math.floor(M%(c*c)/c),F=Math.floor(M/(c*c)),U=y*c+A,D=x*c+I,P=w*c+F;l.push(new H(U,D,P))}}const d=[],u=5,m=new Set;for(let _=0;_<l.length;_++){if(m.has(_))continue;const v=[l[_]];m.add(_);for(let y=_+1;y<l.length;y++)if(!m.has(y)){for(const x of v)if(x.distanceTo(l[y])<15){v.push(l[y]),m.add(y);break}}if(v.length>=u){const y=new H;for(const x of v)y.add(x);y.divideScalar(v.length),d.push(y)}}document.querySelectorAll(".map-building-icon").forEach(_=>_.remove());const f=document.getElementById("world-map-container");f&&d.forEach(_=>{const v=document.createElement("div");v.className="map-icon map-building-icon",v.style.color="#ffa500",v.style.textShadow="0 0 5px black";const y=_.x-s+this.mapRadius,x=_.z-o+this.mapRadius,w=y/i*100,E=x/i*100,T=w<0||w>100||E<0||E>100;if(v.style.left=`${Math.min(Math.max(w,2),98)}%`,v.style.top=`${Math.min(Math.max(E,2),98)}%`,T){const M=_.x-s,A=_.z-o,I=this.getDirectionJapanese(M,A);v.textContent=I.arrow}else v.textContent="🧱";f.appendChild(v)});const p=document.getElementById("world-map-info");if(p){const _=[];if(this.homePosition){const v=this.homePosition.x-s,y=this.homePosition.z-o,x=Math.floor(new H(v,0,y).length()),w=this.getDirectionJapanese(v,y);_.push(`🏠 登録した拠点: <b>${w.name}</b> (${x}m) ${w.arrow}`)}else _.push("🏠 登録した拠点: 未登録");d.length>0?d.forEach((v,y)=>{const x=v.x-s,w=v.z-o,E=Math.floor(new H(x,0,w).length()),T=this.getDirectionJapanese(x,w);_.push(`🧱 建てた建物 ${y+1}: <b>${T.name}</b> (${E}m) ${T.arrow}`)}):_.push("🧱 建てた建物: まだありません"),p.innerHTML=_.join("<br>")}}}const We=new ig("canvas-container");let ki=!1,Xn=0,Dl=new H(-999,-999,-999),no=0,Il=!1;const _o=document.createElement("canvas");_o.width=128;_o.height=128;const _n=_o.getContext("2d"),Es=new mc(_o);Es.magFilter=ue;Es.minFilter=ue;const Wv=new Nr({map:Es,transparent:!0,opacity:.8,depthTest:!0,depthWrite:!1}),qv=new Bt(1.01,1.01,1.01),Kn=new St(qv,Wv);Kn.visible=!1;We.scene.add(Kn);function Pl(a){if(_n.clearRect(0,0,128,128),a<=0){Es.needsUpdate=!0;return}_n.strokeStyle="rgba(0, 0, 0, 0.7)",_n.lineWidth=2,_n.lineCap="round",_n.lineJoin="round";const t=Math.floor(a*40);let e=12345;const n=()=>(e=(e*9301+49297)%233280,e/233280);_n.beginPath();for(let i=0;i<t;i++){const s=n()*128,o=n()*128,r=s+(n()-.5)*40,l=o+(n()-.5)*40;_n.moveTo(s,o),_n.lineTo(r,l),n()>.5&&_n.lineTo(r+(n()-.5)*20,l+(n()-.5)*20)}_n.stroke(),Es.needsUpdate=!0}const xs=new Bv,Ot=new lg(document.body),Tt=new je(We.camera,new H(8,5,8),xs,We.scene),wr=new Fv(We.scene),Nn=[],$e=[],Er=new Hv,xe={[b.AIR]:0,[b.GROUND]:64,[b.DIRT]:64,[b.STONE]:64,[b.WOOD]:64,[b.LEAVES]:64,[b.PLANK]:64,[b.BRICK]:64,[b.SAND]:64,[b.COAL_ORE]:64,[b.TORCH]:64,[b.GLASS]:64,[b.DOOR_CLOSED]:64,[b.DOOR_OPEN]:0,[b.SWORD]:1,[b.STAIRS]:64,[b.FENCE]:64,[b.BED_HEAD]:64,[b.BED_FOOT]:0,[b.FURNACE]:64,[b.CHEST]:64,[b.WATER]:64,[b.DIAMOND_SWORD]:1,[b.HAMMER]:1,[b.BEDROCK]:0,[b.IRON_ORE]:0,[b.GOLD_ORE]:0,[b.DIAMOND_ORE]:0,[b.STICK]:0,[b.IRON_INGOT]:0,[b.GOLD_INGOT]:0,[b.DIAMOND]:0,[b.COBBLESTONE]:0,[b.COAL]:0,[b.APPLE]:0,[b.WOODEN_PICKAXE]:0,[b.STONE_PICKAXE]:0,[b.IRON_PICKAXE]:0,[b.DIAMOND_PICKAXE]:0,[b.WOODEN_AXE]:0,[b.STONE_AXE]:0,[b.IRON_AXE]:0,[b.DIAMOND_AXE]:0,[b.WOODEN_SHOVEL]:0,[b.STONE_SHOVEL]:0,[b.IRON_SHOVEL]:0,[b.DIAMOND_SHOVEL]:0,[b.LEATHER_ARMOR_SET]:0,[b.IRON_ARMOR_SET]:0,[b.DIAMOND_ARMOR_SET]:0},Xv=new zv;Xv.updateInstructionsUI();const Ol=document.getElementById("respawn-btn");Ol&&Ol.addEventListener("click",()=>{Tt.respawn(),Ot.requestLock(),ze.init(),ho||(ho=!0,requestAnimationFrame(Wr))});let te=b.GROUND,Jn=0;const Qe=[[b.GROUND,b.DIRT,b.STONE,b.WOOD,b.LEAVES,b.PLANK,b.BRICK,b.SAND,b.TORCH],[b.GLASS,b.DOOR_CLOSED,b.COAL_ORE,b.DIAMOND_SWORD,b.HAMMER,b.STAIRS,b.FENCE,b.BED_HEAD,b.FURNACE]];let tn=0,Fn=Qe[tn];const Cc=document.querySelectorAll(".hotbar-slot"),Nl=document.getElementById("hotbar-label");function Cs(a){switch(a){case b.GROUND:return"slot-grass";case b.DIRT:return"slot-dirt";case b.STONE:return"slot-stone";case b.WOOD:return"slot-wood";case b.LEAVES:return"slot-leaves";case b.PLANK:return"slot-plank";case b.BRICK:return"slot-brick";case b.SAND:return"slot-sand";case b.TORCH:return"slot-torch";case b.GLASS:return"slot-glass";case b.DOOR_CLOSED:return"slot-door";case b.COAL_ORE:return"slot-coal";case b.STAIRS:return"slot-stairs";case b.FENCE:return"slot-fence";case b.BED_HEAD:return"slot-bed";case b.FURNACE:return"slot-furnace";case b.CHEST:return"slot-chest";case b.WATER:return"slot-water";case b.SWORD:return"slot-sword";case b.DIAMOND_SWORD:return"slot-diamond-sword";case b.HAMMER:return"slot-hammer";default:return""}}function un(){Cc.forEach((t,e)=>{const n=Fn[e];t.setAttribute("data-block",n.toString());const i=t.querySelector(".slot-icon");if(i){i.className="slot-icon";const o=Cs(n);o&&i.classList.add(o)}const s=document.getElementById(`count-${e}`);s&&(s.textContent=(xe[n]||0).toString())});const a=document.getElementById("hotbar-page-indicator");a&&(a.textContent=(tn+1).toString()),lo(Jn)}un();function lo(a){a<0||a>=Fn.length||(Jn=a,te=Fn[a],Cc.forEach((t,e)=>{e===a?t.classList.add("active"):t.classList.remove("active")}),Nl&&(Nl.textContent=Sn[te].name))}const It=new ag(We.scene);Tt.setWorld(It);const Ie=new Gv(Tt,It);Ie.onSaveCustomData=()=>({inventory:{blocks:xe,hotbarPages:Qe,activePage:tn,activeSlotIndex:Jn}});Ie.onLoadCustomData=a=>{if(a&&a.inventory){const t=a.inventory;t.blocks&&Object.assign(xe,t.blocks),t.hotbarPages&&(Qe[0]=[...t.hotbarPages[0]],Qe[1]=[...t.hotbarPages[1]]),typeof t.activePage=="number"&&(tn=t.activePage,Fn=Qe[tn]),typeof t.activeSlotIndex=="number"&&(Jn=t.activeSlotIndex),un()}};const Kv=i_();Kv?It.clearAndRebuild(Tt.position.x,Tt.position.z):It.generateWorldAround(Tt.position.x,Tt.position.z);const ln=document.getElementById("account-id-input"),Un=document.getElementById("world-id-input");function yo(a){const t=document.getElementById("account-id-list");if(!t)return;let e=[];try{const i=localStorage.getItem("maikurafu_account_ids");i&&(e=JSON.parse(i))}catch{}a&&!e.includes(a)&&(e.push(a),localStorage.setItem("maikurafu_account_ids",JSON.stringify(e)));const n=i=>{t.innerHTML="",i.forEach(s=>{const o=document.createElement("option");o.value=s,t.appendChild(o)})};n(e);{const i=Un&&Un.value.trim()||"shared_world_1";fetch(`${pt.GAS_WEB_APP_URL}?action=listAccounts&worldId=${encodeURIComponent(i)}`).then(s=>s.json()).then(s=>{if(s.accounts&&Array.isArray(s.accounts)){let o=!1;s.accounts.forEach(r=>{e.includes(r)||(e.push(r),o=!0)}),o&&(localStorage.setItem("maikurafu_account_ids",JSON.stringify(e)),n(e))}}).catch(s=>console.warn("Failed to fetch accounts from server:",s))}}yo();const Ms=new eg,Cr=6;function Yv(){const a=document.getElementById("hp-container");if(a){const t=pt.PLAYER_MAX_HP,e=Tt.hp;let n="";for(let i=1;i<=t;i++)n+=i<=e?"❤":"🖤";a.textContent=n}}function co(a,t,e){if(Nn.length>=pt.MAX_DROPPED_ITEMS){const i=Nn.shift();i&&i.destroy()}const n=new fi(a,t,We.scene,xs.world,e);Nn.push(n)}const fs=new H,io=new H;let ar=0,lr=0,Bl=0;function Wr(a){requestAnimationFrame(Wr);const t=Math.min((a-Bl)/1e3,.1);if(Bl=a,no>0&&(no-=t),xs.updateBlockBodies(Tt.position,It),xs.step(t),Tt.update(Ot,t,It,te),Er.updateCompass({position:Tt.position,camera:We.camera}),wr.update(t,Tt.position),Ot.consumeJustPressed("Tab")&&(tn=1-tn,Fn=Qe[tn],un()),Ot.consumeJustPressed(Ce.getConfig().keyRegisterHome)&&Ot.isLocked){Er.setHome(Tt.position);const s=document.createElement("div");s.style.position="absolute",s.style.top="100px",s.style.left="50%",s.style.transform="translateX(-50%)",s.style.color="#32cd32",s.style.fontSize="1.5rem",s.style.fontWeight="bold",s.style.textShadow="0 2px 4px rgba(0,0,0,0.8)",s.style.zIndex="50",s.textContent="🏠 ここを拠点に設定しました",document.body.appendChild(s),setTimeout(()=>s.remove(),3e3)}if(Ot.consumeJustPressed("KeyQ")&&xe[te]>0){xe[te]--,un();const s=pt.PLAYER_HEIGHT/2-.2;io.copy(Tt.position),io.y+=s,fs.set(0,0,-1).applyQuaternion(We.camera.quaternion),io.addScaledVector(fs,.8),co(te,io);const o=Nn[Nn.length-1];o&&o.body.velocity.set(fs.x*6+(Math.random()-.5)*.5,fs.y*6+2,fs.z*6+(Math.random()-.5)*.5)}for(let s=Nn.length-1;s>=0;s--){const o=Nn[s],r=o.update(t,Tt.position);o.mesh.position.distanceTo(Tt.position)<1.2?(xe[o.blockType]=(xe[o.blockType]||0)+1,un(),ze.playPickup(),o.destroy(),Nn.splice(s,1)):r&&Nn.splice(s,1)}if(wr.isNight()){if(ar+=t,ar>2&&(ar=0,$e.length<pt.MAX_MOBS)){const s=pt.MOB_SPAWN_RADIUS,o=Math.random()*Math.PI*2,r=12+Math.random()*(s-12),l=Math.floor(Tt.position.x+Math.cos(o)*r),c=Math.floor(Tt.position.z+Math.sin(o)*r);let h=0,d=!1;for(let u=15;u>=-10;u--)if(It.getBlock(l,u,c)!==b.AIR){h=u+1,d=!0;break}if(d){const u=new Ee(new H(l,h,c),We.scene,xs.world);$e.push(u)}}}else for(let s=$e.length-1;s>=0;s--)$e[s].destroy(),$e.splice(s,1);for(let s=$e.length-1;s>=0;s--)$e[s].update(t,Tt)&&$e.splice(s,1);Yv(),Ot.isLocked&&It.generateWorldAround(Tt.position.x,Tt.position.z),lr+=t,lr>5&&(lr=0,qr());const e=Ce.getConfig();Ot.consumeJustPressed(e.keyPlaceBlock)&&Ac(!1,!0);const n=e.invertClicks?Ot.isRightClickDown:Ot.isLeftClickDown;let i=n;if(e.easyMode&&(i=n&&!Il&&no<=0),Il=n,i&&Ot.isLocked){Tt.swing(),Ms.setFromCamera(new Xt(0,0),Tt.camera);const s=It.getChunkMeshes(),o=Ms.intersectObjects(s);let r=!1;if(o.length>0&&o[0].distance<=Cr){const l=o[0],c=l.point,h=l.face?.normal;if(h){const d=c.clone().sub(h.clone().multiplyScalar(.1)),u=Math.floor(d.x),m=Math.floor(d.y),g=Math.floor(d.z),f=It.getBlock(u,m,g);if(f!==b.AIR&&f!==b.BEDROCK){r=!0;const p=new H(u,m,g);if(!ki||!Dl.equals(p))ki=!0,Dl.copy(p),Xn=0,Kn.position.set(u+.5,m+.5,g+.5),Kn.visible=!0,Pl(0),e.easyMode&&(zl(f,u,m,g),ki=!1,Kn.visible=!1,Xn=0,no=.25);else{const _=Sn[f],v=Sn[te]||{};let y=_.hardness||1,x=1;const w=!_.requiredToolCategory||_.requiredToolCategory==="none"||v.toolCategory===_.requiredToolCategory;w&&v.isTool?x*=v.speedMultiplier||1:!w&&_.requiredToolCategory&&_.requiredToolCategory!=="none"&&(x*=.1);const E=y*1.5/x;Xn+=t/E,Pl(Xn),Xn>=1&&(zl(f,u,m,g),ki=!1,Kn.visible=!1,Xn=0)}}}}r||(ki=!1,Kn.visible=!1,Xn=0)}else ki=!1,Kn.visible=!1,Xn=0;We.render()}function zl(a,t,e,n){if(a!==b.BEDROCK){if(It.setBlock(t,e,n,b.AIR),ze.playBreak(a),a===b.DOOR_CLOSED||a===b.DOOR_OPEN){const i=It.getBlock(t,e+1,n);(i===b.DOOR_CLOSED||i===b.DOOR_OPEN)&&It.setBlock(t,e+1,n,b.AIR);const s=It.getBlock(t,e-1,n);(s===b.DOOR_CLOSED||s===b.DOOR_OPEN)&&(It.setBlock(t,e-1,n,b.AIR),It.removeDoorOrientation(t,e-1,n)),It.removeDoorOrientation(t,e,n)}if(a===b.BED_HEAD||a===b.BED_FOOT){const i=a===b.BED_HEAD?b.BED_FOOT:b.BED_HEAD,s=[[t+1,n],[t-1,n],[t,n+1],[t,n-1]];for(const[o,r]of s)if(It.getBlock(o,e,r)===i){It.setBlock(o,e,r,b.AIR);break}co(b.BED_HEAD,new H(t+.5,e+.5,n+.5),Tt.position)}else{const i=Sn[a],s=Sn[te],o=i.minToolTier||0;if((s.isTool&&s.toolTier||0)>=o&&a!==b.DOOR_OPEN){let l=i.drops??a;a===b.LEAVES&&(Math.random()<.05?l=b.APPLE:l=b.AIR),l!==b.AIR&&co(l,new H(t+.5,e+.5,n+.5),Tt.position)}}}}function Ac(a,t){if(!a&&!t)return;Ms.setFromCamera(new Xt(0,0),Tt.camera);const e=It.getChunkMeshes(),n=Ms.intersectObjects(e);if(n.length>0){const i=n[0];if(i.distance>Cr)return;const s=i.point,o=i.face?.normal;if(!o)return;if(a){Tt.swing();const r=[];$e.forEach(c=>{c.mesh.traverse(h=>{h instanceof St&&r.push(h)})});const l=Ms.intersectObjects(r);if(l.length>0&&l[0].distance<Cr){const c=l[0].object;let h=null;for(const d of $e){let u=!1;if(d.mesh.traverse(m=>{m===c&&(u=!0)}),u){h=d;break}}if(h){const d=new H(0,0,-1).applyQuaternion(We.camera.quaternion);d.y=.2,d.normalize();const u=te===b.DIAMOND_SWORD?6:te===b.HAMMER?5:te===b.SWORD?4:2;if(h.takeDamage(u,d)){const g=Math.random()<.4?b.COAL_ORE:b.STONE;co(g,new H(h.body.position.x,h.body.position.y,h.body.position.z),Tt.position);const f=$e.indexOf(h);f>-1&&$e.splice(f,1)}return}}}else if(t){if(te===b.SWORD||te===b.DIAMOND_SWORD||te===b.HAMMER)return;const r=s.clone().sub(o.clone().multiplyScalar(.1)),l=Math.floor(r.x),c=Math.floor(r.y),h=Math.floor(r.z),d=It.getBlock(l,c,h);if(d===b.DOOR_CLOSED){It.setBlock(l,c,h,b.DOOR_OPEN),It.getBlock(l,c+1,h)===b.DOOR_CLOSED&&It.setBlock(l,c+1,h,b.DOOR_OPEN),ze.playPlace(b.DOOR_OPEN);return}else if(d===b.DOOR_OPEN){It.setBlock(l,c,h,b.DOOR_CLOSED),It.getBlock(l,c+1,h)===b.DOOR_OPEN&&It.setBlock(l,c+1,h,b.DOOR_CLOSED),ze.playPlace(b.DOOR_CLOSED);return}if(xe[te]<=0)return;const u=s.clone().add(o.clone().multiplyScalar(.1)),m=Math.floor(u.x),g=Math.floor(u.y),f=Math.floor(u.z),p=pt.PLAYER_HEIGHT/2,_=Math.floor(Tt.position.x),v=Math.floor(Tt.position.y-p),y=Math.floor(Tt.position.z),x=m===_&&f===y&&(g===v||g===v+1),w=m===_&&f===y&&g===v,E=m===_&&f===y&&g===v+1,T=te===b.TORCH,M=te===b.DOOR_CLOSED,A=te===b.BED_HEAD;if(T||!x||w||E){if(M){It.setBlock(m,g,f,b.DOOR_CLOSED);const I=Tt.getYaw(),U=Math.abs(Math.sin(I))<.707?"NS":"EW";It.setDoorOrientation(m,g,f,U),It.getBlock(m,g+1,f)===b.AIR&&(It.setBlock(m,g+1,f,b.DOOR_CLOSED),It.setDoorOrientation(m,g+1,f,U)),ze.playPlace(te),xe[te]--,un()}else if(A){It.setBlock(m,g,f,b.BED_HEAD);const I=Tt.getYaw();let F=0,U=0;const D=-Math.sin(I),P=-Math.cos(I);Math.abs(D)>Math.abs(P)?F=Math.sign(D):U=Math.sign(P);const N=m+F,O=f+U;It.getBlock(N,g,O)===b.AIR&&It.setBlock(N,g,O,b.BED_FOOT),ze.playPlace(te),xe[b.BED_HEAD]--,un()}else It.setBlock(m,g,f,te),ze.playPlace(te),xe[te]--,un();w&&(Tt.body.position.y=g+1+p+.05,Tt.position.y=Tt.body.position.y,Tt.body.velocity.y<0&&(Tt.body.velocity.y=0))}}}}window.addEventListener("keydown",a=>{if(document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement)return;const t=Ce.getConfig();if(a.code==="Escape"){let e=!1;const n=document.getElementById("inventory-modal");n&&n.style.display==="flex"&&(Tr(),e=!0);const s=document.getElementById("crafting-modal"),o=s&&s.style.display==="flex";!e&&o&&(Rr(),e=!0);const r=document.getElementById("manual-modal"),l=r&&r.style.display==="flex";!e&&l&&(Lr(),e=!0);const c=document.getElementById("world-map-modal"),h=c&&c.style.display==="flex";!e&&h&&(Gl(),e=!0);const d=document.getElementById("config-modal"),u=d&&d.style.display==="flex";!e&&u&&(d.style.display="none",Ot.lastModalCloseTime=performance.now(),Ot.requestLock(),e=!0),e&&(a.preventDefault(),Ot.consumeJustPressed("Escape"))}if(a.code===t.keyOpenInventory){const e=document.getElementById("inventory-modal");e&&e.style.display==="flex"?(Tr(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenInventory)):Ot.isLocked&&(Jv(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenInventory))}if(a.code===t.keyOpenCrafting){const e=document.getElementById("crafting-modal");e&&e.style.display==="flex"?(Rr(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenCrafting)):Ot.isLocked&&(Qv(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenCrafting))}if(a.code===t.keyOpenManual){const e=document.getElementById("manual-modal");e&&e.style.display==="flex"?(Lr(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenManual)):Ot.isLocked&&(t_(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenManual))}if(a.code===t.keyOpenMap){const e=document.getElementById("world-map-modal");e&&e.style.display==="flex"?(Gl(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenMap)):Ot.isLocked&&(e_(),a.preventDefault(),Ot.consumeJustPressed(t.keyOpenMap))}});document.addEventListener("pointerlockerror",()=>{const a=document.getElementById("menu-overlay"),t=document.getElementById("inventory-modal"),e=document.getElementById("crafting-modal"),n=document.getElementById("manual-modal"),i=document.getElementById("world-map-modal"),s=t&&t.style.display==="flex",o=e&&e.style.display==="flex",r=n&&n.style.display==="flex",l=i&&i.style.display==="flex";!s&&!o&&!r&&!l&&a&&(a.style.display="flex",a.style.opacity="1")});window.addEventListener("mousedown",a=>{if(!Ot.isLocked)return;const t=Ce.getConfig(),e=a.button===0,n=a.button===2,i=t.invertClicks?n:e,s=t.invertClicks?e:n;Ac(i,s)});window.addEventListener("contextmenu",a=>{a.preventDefault()});const Ar=document.querySelectorAll(".char-select-btn"),jv=Ce.getConfig().characterType||"boy1";Ar.forEach(a=>{a.getAttribute("data-char")===jv?a.classList.add("active"):a.classList.remove("active")});Ar.forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-char");t&&(Ar.forEach(e=>e.classList.remove("active")),a.classList.add("active"),Ce.save({characterType:t}),Tt.changeCharacter(t))})});const Fi=document.getElementById("start-btn"),$v=document.getElementById("menu-overlay");let ho=!1;if(Fi&&$v){Fi.addEventListener("click",async()=>{if(Un&&Un.value.trim()!==""&&Ie.setWorldId(Un.value.trim()),ln&&ln.value.trim()!==""){const e=ln.value.trim();Ie.setAccountId(e),yo(e),Fi.textContent="データをロード中...",Fi.setAttribute("disabled","true"),await Ie.loadData(),Fi.textContent="ゲームスタート",Fi.removeAttribute("disabled"),Ie.startAutoSave(3)}else Ie.setAccountId(""),Ie.stopAutoSave();Ot.requestLock(),ze.init(),ho||(ho=!0,requestAnimationFrame(Wr))});const a=document.getElementById("hotbar"),t=document.getElementById("hud");document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===document.body?(a&&(a.style.display="flex"),t&&(t.style.display="block"),jn&&(jn.style.display="none")):jn&&jn.style.display==="flex"||(a&&(a.style.display="none"),t&&(t.style.display="none"),qr(),ln&&ln.value.trim()!==""&&Ie.saveData().catch(n=>console.error("Cloud save failed:",n)))})}window.addEventListener("keydown",a=>{if(Ot.isLocked&&a.code.startsWith("Digit")){const t=parseInt(a.code.substring(5));t>=1&&t<=9&&lo(t-1)}});window.addEventListener("wheel",a=>{if(Ot.isLocked){if(a.deltaY>0){const t=(Jn+1)%Fn.length;lo(t)}else if(a.deltaY<0){const t=(Jn-1+Fn.length)%Fn.length;lo(t)}}},{passive:!0});window.addEventListener("config-changed",()=>{const a=Ce.getConfig();We.renderer.shadowMap.enabled=a.enableShadows,wr.setShadowsEnabled(a.enableShadows),We.scene.traverse(t=>{t instanceof St&&t.material&&(Array.isArray(t.material)?t.material.forEach(e=>{e.needsUpdate=!0}):t.material.needsUpdate=!0)})});const jn=document.getElementById("inventory-modal"),cr=document.getElementById("inventory-item-list"),hr=document.getElementById("inventory-hotbar-slots"),kl=document.getElementById("inventory-close-btn");let As=null;const Zv=[b.GROUND,b.DIRT,b.STONE,b.WOOD,b.LEAVES,b.PLANK,b.BRICK,b.SAND,b.COAL_ORE,b.TORCH,b.GLASS,b.DOOR_CLOSED,b.STAIRS,b.SWORD,b.FENCE,b.BED_HEAD,b.FURNACE,b.CHEST,b.WATER,b.DIAMOND_SWORD,b.HAMMER,b.BEDROCK,b.IRON_ORE,b.GOLD_ORE,b.DIAMOND_ORE,b.STICK,b.IRON_INGOT,b.GOLD_INGOT,b.DIAMOND,b.COBBLESTONE,b.COAL,b.APPLE,b.WOODEN_PICKAXE,b.STONE_PICKAXE,b.IRON_PICKAXE,b.DIAMOND_PICKAXE,b.WOODEN_AXE,b.STONE_AXE,b.IRON_AXE,b.DIAMOND_AXE,b.WOODEN_SHOVEL,b.STONE_SHOVEL,b.IRON_SHOVEL,b.DIAMOND_SHOVEL,b.LEATHER_ARMOR_SET,b.IRON_ARMOR_SET,b.DIAMOND_ARMOR_SET];function Tc(){const a=Tt.armorType;document.querySelectorAll(".armor-btn").forEach(e=>{e.getAttribute("data-armor")===a?e.classList.add("active"):e.classList.remove("active")})}function Jv(){jn&&(document.exitPointerLock(),jn.style.display="flex",As=null,Lc(),Dc(),Tc())}function Tr(){jn&&(jn.style.display="none",Ot.lastModalCloseTime=performance.now(),Ot.requestLock())}kl&&kl.addEventListener("click",Tr);const uo=document.getElementById("crafting-modal"),ur=document.getElementById("recipe-list"),Fl=document.getElementById("crafting-close-btn");function Qv(){uo&&(document.exitPointerLock(),uo.style.display="flex",Rc())}function Rr(){uo&&(uo.style.display="none",Ot.lastModalCloseTime=performance.now(),Ot.requestLock())}Fl&&Fl.addEventListener("click",Rr);const fo=document.getElementById("manual-modal"),Ul=document.getElementById("manual-close-btn"),yn=document.getElementById("manual-toggle-kids-btn"),dr=document.getElementById("manual-content"),fr=document.getElementById("manual-content-kids");let pr=!1;function t_(){fo&&(document.exitPointerLock(),fo.style.display="flex")}function Lr(){fo&&(fo.style.display="none",Ot.lastModalCloseTime=performance.now(),Ot.requestLock())}Ul&&Ul.addEventListener("click",Lr);const po=document.getElementById("world-map-modal");function e_(){po&&(document.exitPointerLock(),po.style.display="flex",Er.renderMap(It,Tt.position))}function Gl(){po&&(po.style.display="none",Ot.lastModalCloseTime=performance.now(),Ot.requestLock())}yn&&dr&&fr&&yn.addEventListener("click",()=>{pr=!pr,pr?(dr.style.display="none",fr.style.display="block",yn.textContent="もとの文字にもどす",yn.style.backgroundColor="rgba(139, 92, 246, 0.2)",yn.style.borderColor="rgba(139, 92, 246, 0.5)",yn.style.color="#a78bfa"):(dr.style.display="block",fr.style.display="none",yn.textContent="ひらがなモードにする",yn.style.backgroundColor="rgba(59, 130, 246, 0.2)",yn.style.borderColor="rgba(59, 130, 246, 0.5)",yn.style.color="#60a5fa")});function Rc(){ur&&(ur.innerHTML="",kv.forEach(a=>{const t=a.inputs.every(o=>(xe[o.type]||0)>=o.count),e=document.createElement("div");e.className="recipe-item";const n=document.createElement("div");n.className="recipe-output",n.innerHTML=`<div class="slot-icon ${Cs(a.output.type)}"></div> <span>${Sn[a.output.type].name} x${a.output.count}</span>`;const i=document.createElement("div");i.className="recipe-inputs",a.inputs.forEach(o=>{const r=xe[o.type]||0,l=r>=o.count,c=document.createElement("div");c.className=`recipe-input-item ${l?"sufficient":"lacking"}`,c.innerHTML=`<div class="slot-icon ${Cs(o.type)}" style="width:24px;height:24px;"></div> <span>${r}/${o.count}</span>`,i.appendChild(c)});const s=document.createElement("button");s.className="craft-btn",s.textContent="作成",s.disabled=!t,s.addEventListener("click",()=>{s.disabled||(a.inputs.forEach(o=>{xe[o.type]-=o.count}),xe[a.output.type]=(xe[a.output.type]||0)+a.output.count,ze.playPlace(a.output.type),un(),Rc())}),e.appendChild(n),e.appendChild(i),e.appendChild(s),ur.appendChild(e)}))}const n_=document.querySelectorAll(".armor-btn");n_.forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-armor");t&&(Tt.setArmor(t),Tc())})});function Lc(){cr&&(cr.innerHTML="",Zv.forEach(a=>{const t=Sn[a],e=document.createElement("div");e.className="inventory-item",As===a&&e.classList.add("selected");const n=document.createElement("div");n.className=`slot-icon ${Cs(a)}`,e.appendChild(n);const i=document.createElement("div");i.className="item-name",i.textContent=t.name,e.appendChild(i),e.addEventListener("click",()=>{As=a,Lc()}),cr.appendChild(e)}))}function Dc(){hr&&(hr.innerHTML="",Qe.forEach((a,t)=>{a.forEach((e,n)=>{const i=document.createElement("div");i.className="inventory-hotbar-slot",t===tn&&(i.style.borderColor="rgba(255, 255, 255, 0.4)",i.style.background="rgba(255, 255, 255, 0.05)");const s=document.createElement("div");s.className=`slot-icon ${Cs(e)}`,i.appendChild(s);const o=document.createElement("div");o.className="slot-num",o.textContent=(n+1).toString(),i.appendChild(o),i.addEventListener("click",()=>{As!==null&&(Qe[t][n]=As,un(),Dc())}),hr.appendChild(i)})}))}function i_(){const a=localStorage.getItem("maikurafu_autosave");if(!a)return!1;try{const t=JSON.parse(a);if(t.player&&Tt.loadSaveData(t.player),t.inventory){const e=t.inventory;e.blocks&&Object.assign(xe,e.blocks),e.hotbarPages&&(Qe[0]=[...e.hotbarPages[0]],Qe[1]=[...e.hotbarPages[1]]),typeof e.activePage=="number"&&(tn=e.activePage,Fn=Qe[tn]),typeof e.activeSlotIndex=="number"&&(Jn=e.activeSlotIndex),un()}return t.world&&It.setModifiedBlocksData(t.world),console.log("Game auto-saved state successfully loaded from localStorage."),!0}catch(t){return console.warn("Failed to parse autosave data:",t),!1}}function qr(){const a={version:"1.0.0",timestamp:Date.now(),player:Tt.getSaveData(),inventory:{blocks:xe,hotbarPages:Qe,activePage:tn,activeSlotIndex:Jn},world:It.getModifiedBlocksData()};localStorage.setItem("maikurafu_autosave",JSON.stringify(a)),console.log("Game auto-saved to localStorage.")}const ai=document.getElementById("cloud-save-btn"),li=document.getElementById("cloud-load-btn");ai&&ai.addEventListener("click",async()=>{if(ln&&ln.value.trim()!==""){const a=ln.value.trim();Ie.setAccountId(a),yo(a),Un&&Ie.setWorldId(Un.value.trim()),qr();const t=ai.textContent;ai.textContent="セーブ中...",ai.setAttribute("disabled","true"),await Ie.saveData(),ai.textContent=t,ai.removeAttribute("disabled")}else alert("アカウントIDを入力してください")});li&&li.addEventListener("click",async()=>{if(ln&&ln.value.trim()!==""){const a=ln.value.trim();Ie.setAccountId(a),yo(a),Un&&Ie.setWorldId(Un.value.trim());const t=li.textContent;li.textContent="ロード中...",li.setAttribute("disabled","true"),await Ie.loadData(),li.textContent=t,li.removeAttribute("disabled")}else alert("アカウントIDを入力してください")});

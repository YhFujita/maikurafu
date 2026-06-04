(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lo="150",ac=0,Ao=1,lc=2,pl=1,ml=2,cs=3,Xn=0,He=1,zn=2,qn=0,Oi=1,To=2,Co=3,Lo=4,cc=5,Ni=100,hc=101,uc=102,Ro=103,Do=104,dc=200,fc=201,pc=202,mc=203,gl=204,vl=205,gc=206,vc=207,_c=208,xc=209,yc=210,Mc=0,bc=1,wc=2,$r=3,Sc=4,Ec=5,Ac=6,Tc=7,_l=0,Cc=1,Lc=2,Bn=0,Rc=1,Dc=2,Pc=3,Ic=4,Nc=5,xl=300,Gi=301,Vi=302,Jr=303,Qr=304,er=306,to=1e3,Ge=1001,eo=1002,ve=1003,Po=1004,cr=1005,Ke=1006,zc=1007,gs=1008,fi=1009,Bc=1010,Oc=1011,yl=1012,Fc=1013,hi=1014,ui=1015,vs=1016,kc=1017,Uc=1018,Fi=1020,Gc=1021,rn=1023,Vc=1024,Hc=1025,di=1026,Hi=1027,Wc=1028,qc=1029,Xc=1030,Yc=1031,jc=1033,hr=33776,ur=33777,dr=33778,fr=33779,Io=35840,No=35841,zo=35842,Bo=35843,Kc=36196,Oo=37492,Fo=37496,ko=37808,Uo=37809,Go=37810,Vo=37811,Ho=37812,Wo=37813,qo=37814,Xo=37815,Yo=37816,jo=37817,Ko=37818,Zo=37819,$o=37820,Jo=37821,pr=36492,Zc=36283,Qo=36284,ta=36285,ea=36286,pi=3e3,$t=3001,$c=3200,Jc=3201,Ml=0,Qc=1,gn="srgb",_s="srgb-linear",bl="display-p3",mr=7680,th=519,na=35044,ia="300 es",no=1035;class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sa=1234567;const ds=Math.PI/180,Zs=180/Math.PI;function ji(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[a&255]+xe[a>>8&255]+xe[a>>16&255]+xe[a>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function Ie(a,t,e){return Math.max(t,Math.min(e,a))}function co(a,t){return(a%t+t)%t}function eh(a,t,e,n,i){return n+(a-t)*(i-n)/(e-t)}function nh(a,t,e){return a!==t?(e-a)/(t-a):0}function fs(a,t,e){return(1-e)*a+e*t}function ih(a,t,e,n){return fs(a,t,1-Math.exp(-e*n))}function sh(a,t=1){return t-Math.abs(co(a,t*2)-t)}function rh(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*(3-2*a))}function oh(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*a*(a*(a*6-15)+10))}function ah(a,t){return a+Math.floor(Math.random()*(t-a+1))}function lh(a,t){return a+Math.random()*(t-a)}function ch(a){return a*(.5-Math.random())}function hh(a){a!==void 0&&(sa=a);let t=sa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uh(a){return a*ds}function dh(a){return a*Zs}function io(a){return(a&a-1)===0&&a!==0}function fh(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function wl(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function ph(a,t,e,n,i){const s=Math.cos,r=Math.sin,o=s(e/2),l=r(e/2),c=s((t+n)/2),h=r((t+n)/2),d=s((t-n)/2),u=r((t-n)/2),m=s((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":a.set(o*h,l*d,l*u,o*c);break;case"YZY":a.set(l*u,o*h,l*d,o*c);break;case"ZXZ":a.set(l*d,l*u,o*h,o*c);break;case"XZX":a.set(o*h,l*g,l*m,o*c);break;case"YXY":a.set(l*m,o*h,l*g,o*c);break;case"ZYZ":a.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hs(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Pe(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Qe={DEG2RAD:ds,RAD2DEG:Zs,generateUUID:ji,clamp:Ie,euclideanModulo:co,mapLinear:eh,inverseLerp:nh,lerp:fs,damp:ih,pingpong:sh,smoothstep:rh,smootherstep:oh,randInt:ah,randFloat:lh,randFloatSpread:ch,seededRandom:hh,degToRad:uh,radToDeg:dh,isPowerOfTwo:io,ceilPowerOfTwo:fh,floorPowerOfTwo:wl,setQuaternionFromProperEuler:ph,normalize:Pe,denormalize:hs};class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Re{constructor(){Re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],f=i[0],p=i[3],_=i[6],v=i[1],y=i[4],x=i[7],w=i[2],S=i[5],T=i[8];return s[0]=r*f+o*v+l*w,s[3]=r*p+o*y+l*S,s[6]=r*_+o*x+l*T,s[1]=c*f+h*v+d*w,s[4]=c*p+h*y+d*S,s[7]=c*_+h*x+d*T,s[2]=u*f+m*v+g*w,s[5]=u*p+m*y+g*S,s[8]=u*_+m*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*s,m=c*s-r*l,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return t[0]=d*f,t[1]=(i*c-h*n)*f,t[2]=(o*n-i*r)*f,t[3]=u*f,t[4]=(h*e-i*l)*f,t[5]=(i*s-o*e)*f,t[6]=m*f,t[7]=(n*l-c*e)*f,t[8]=(r*e-n*s)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(gr.makeScale(t,e)),this}rotate(t){return this.premultiply(gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(gr.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new Re;function Sl(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function $s(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}let mi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],m=s[r+1],g=s[r+2],f=s[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=f;return}if(d!==f||l!==u||c!==m||h!==g){let p=1-o;const _=l*u+c*m+h*g+d*f,v=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const w=Math.sqrt(y),S=Math.atan2(w,_*v);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w}const x=o*v;if(l=l*p+u*x,c=c*p+m*x,h=h*p+g*x,d=d*p+f*x,p===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r],u=s[r+1],m=s[r+2],g=s[r+3];return t[e]=o*g+h*d+l*m-c*u,t[e+1]=l*g+h*u+c*d-o*m,t[e+2]=c*g+h*m+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),m=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(r-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(r-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ra.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ra.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=l*e+r*i-o*n,h=l*n+o*e-s*i,d=l*i+s*n-r*e,u=-s*e-r*n-o*i;return this.x=c*l+u*-s+h*-o-d*-r,this.y=h*l+u*-r+d*-s-c*-o,this.z=d*l+u*-o+c*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vr.copy(this).projectOnVector(t),this.sub(vr)}reflect(t){return this.sub(vr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new H,ra=new mi;function ki(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function _r(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const mh=new Re().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),gh=new Re().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Wn=new H;function vh(a){return a.convertSRGBToLinear(),Wn.set(a.r,a.g,a.b).applyMatrix3(gh),a.setRGB(Wn.x,Wn.y,Wn.z)}function _h(a){return Wn.set(a.r,a.g,a.b).applyMatrix3(mh),a.setRGB(Wn.x,Wn.y,Wn.z).convertLinearToSRGB()}const xh={[_s]:a=>a,[gn]:a=>a.convertSRGBToLinear(),[bl]:vh},yh={[_s]:a=>a,[gn]:a=>a.convertLinearToSRGB(),[bl]:_h},Te={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return _s},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;const n=xh[t],i=yh[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}};let _i;class El{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=$s("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$s("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ki(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Al{constructor(t=null){this.isSource=!0,this.uuid=ji(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(xr(i[r].image)):s.push(xr(i[r]))}else s=xr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function xr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?El.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mh=0;class Ne extends Yi{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Ge,i=Ge,s=Ke,r=gs,o=rn,l=fi,c=Ne.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=ji(),this.name="",this.source=new Al(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case to:t.x=t.x-Math.floor(t.x);break;case Ge:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case to:t.y=t.y-Math.floor(t.y);break;case Ge:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=xl;Ne.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,i=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],f=l[2],p=l[6],_=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(m+1)/2,w=(_+1)/2,S=(h+u)/4,T=(d+f)/4,M=(g+p)/4;return y>x&&y>w?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=S/n,s=T/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=S/i,s=M/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=M/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-f)*(d-f)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-f)/v,this.z=(u-h)/v,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gi extends Yi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ke,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Al(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tl extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ve,this.minFilter=ve,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bh extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ve,this.minFilter=ve,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],d=t[l+1],u=t[l+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),d=t.getY(l),u=t.getZ(l);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)Qn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Qn)}else n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox),yr.applyMatrix4(t.matrixWorld),this.union(yr);const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),ws.subVectors(this.max,$i),xi.subVectors(t.a,$i),yi.subVectors(t.b,$i),Mi.subVectors(t.c,$i),kn.subVectors(yi,xi),Un.subVectors(Mi,yi),ti.subVectors(xi,Mi);let e=[0,-kn.z,kn.y,0,-Un.z,Un.y,0,-ti.z,ti.y,kn.z,0,-kn.x,Un.z,0,-Un.x,ti.z,0,-ti.x,-kn.y,kn.x,0,-Un.y,Un.x,0,-ti.y,ti.x,0];return!Mr(e,xi,yi,Mi,ws)||(e=[1,0,0,0,1,0,0,0,1],!Mr(e,xi,yi,Mi,ws))?!1:(Ss.crossVectors(kn,Un),e=[Ss.x,Ss.y,Ss.z],Mr(e,xi,yi,Mi,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new H,new H,new H,new H,new H,new H,new H,new H],Qn=new H,yr=new ys,xi=new H,yi=new H,Mi=new H,kn=new H,Un=new H,ti=new H,$i=new H,ws=new H,Ss=new H,ei=new H;function Mr(a,t,e,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){ei.fromArray(a,s);const o=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=t.dot(ei),c=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const wh=new ys,Ji=new H,br=new H;class ho{constructor(t=new H,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ji,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(br)),this.expandByPoint(Ji.copy(t.center).sub(br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new H,wr=new H,Es=new H,Gn=new H,Sr=new H,As=new H,Er=new H;let Cl=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wr.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(wr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Es),o=Gn.dot(this.direction),l=-Gn.dot(Es),c=Gn.lengthSq(),h=Math.abs(1-r*r);let d,u,m,g;if(h>0)if(d=r*l-o,u=r*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const f=1/h;d*=f,u*=f,m=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(wr).addScaledVector(Es,u),m}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,i,s){Sr.subVectors(e,t),As.subVectors(n,t),Er.crossVectors(Sr,As);let r=this.direction.dot(Er),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Gn.subVectors(this.origin,t);const l=o*this.direction.dot(As.crossVectors(Gn,As));if(l<0)return null;const c=o*this.direction.dot(Sr.cross(Gn));if(c<0||l+c>r)return null;const h=-o*Gn.dot(Er);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class le{constructor(){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,o,l,c,h,d,u,m,g,f,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=u,_[3]=m,_[7]=g,_[11]=f,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/bi.setFromMatrixColumn(t,0).length(),s=1/bi.setFromMatrixColumn(t,1).length(),r=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*h,m=r*d,g=o*h,f=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=u-f*c,e[9]=-o*l,e[2]=f-u*c,e[6]=g+m*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,m=l*d,g=c*h,f=c*d;e[0]=u+f*o,e[4]=g*o-m,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=m*o-g,e[6]=f+u*o,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,m=l*d,g=c*h,f=c*d;e[0]=u-f*o,e[4]=-r*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*h,e[9]=f-u*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,m=r*d,g=o*h,f=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+f,e[1]=l*d,e[5]=f*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,m=r*c,g=o*l,f=o*c;e[0]=l*h,e[4]=f-u*d,e[8]=g*d+m,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=u-f*d}else if(t.order==="XZY"){const u=r*l,m=r*c,g=o*l,f=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+f,e[5]=r*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=f*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sh,t,Eh)}lookAt(t,e,n){const i=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Vn.crossVectors(n,Oe),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Vn.crossVectors(n,Oe)),Vn.normalize(),Ts.crossVectors(Oe,Vn),i[0]=Vn.x,i[4]=Ts.x,i[8]=Oe.x,i[1]=Vn.y,i[5]=Ts.y,i[9]=Oe.y,i[2]=Vn.z,i[6]=Ts.z,i[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],f=n[6],p=n[10],_=n[14],v=n[3],y=n[7],x=n[11],w=n[15],S=i[0],T=i[4],M=i[8],A=i[12],D=i[1],k=i[5],G=i[9],R=i[13],P=i[2],N=i[6],z=i[10],X=i[14],F=i[3],q=i[7],Y=i[11],et=i[15];return s[0]=r*S+o*D+l*P+c*F,s[4]=r*T+o*k+l*N+c*q,s[8]=r*M+o*G+l*z+c*Y,s[12]=r*A+o*R+l*X+c*et,s[1]=h*S+d*D+u*P+m*F,s[5]=h*T+d*k+u*N+m*q,s[9]=h*M+d*G+u*z+m*Y,s[13]=h*A+d*R+u*X+m*et,s[2]=g*S+f*D+p*P+_*F,s[6]=g*T+f*k+p*N+_*q,s[10]=g*M+f*G+p*z+_*Y,s[14]=g*A+f*R+p*X+_*et,s[3]=v*S+y*D+x*P+w*F,s[7]=v*T+y*k+x*N+w*q,s[11]=v*M+y*G+x*z+w*Y,s[15]=v*A+y*R+x*X+w*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],f=t[7],p=t[11],_=t[15];return g*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*m-n*l*m)+f*(+e*l*m-e*c*u+s*r*u-i*r*m+i*c*h-s*l*h)+p*(+e*c*d-e*o*m-s*r*d+n*r*m+s*o*h-n*c*h)+_*(-i*o*h-e*l*d+e*o*u+i*r*d-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],f=t[13],p=t[14],_=t[15],v=d*p*c-f*u*c+f*l*m-o*p*m-d*l*_+o*u*_,y=g*u*c-h*p*c-g*l*m+r*p*m+h*l*_-r*u*_,x=h*f*c-g*d*c+g*o*m-r*f*m-h*o*_+r*d*_,w=g*d*l-h*f*l-g*o*u+r*f*u+h*o*p-r*d*p,S=e*v+n*y+i*x+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=v*T,t[1]=(f*u*s-d*p*s-f*i*m+n*p*m+d*i*_-n*u*_)*T,t[2]=(o*p*s-f*l*s+f*i*c-n*p*c-o*i*_+n*l*_)*T,t[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*m-n*l*m)*T,t[4]=y*T,t[5]=(h*p*s-g*u*s+g*i*m-e*p*m-h*i*_+e*u*_)*T,t[6]=(g*l*s-r*p*s-g*i*c+e*p*c+r*i*_-e*l*_)*T,t[7]=(r*u*s-h*l*s+h*i*c-e*u*c-r*i*m+e*l*m)*T,t[8]=x*T,t[9]=(g*d*s-h*f*s-g*n*m+e*f*m+h*n*_-e*d*_)*T,t[10]=(r*f*s-g*o*s+g*n*c-e*f*c-r*n*_+e*o*_)*T,t[11]=(h*o*s-r*d*s-h*n*c+e*d*c+r*n*m-e*o*m)*T,t[12]=w*T,t[13]=(h*f*i-g*d*i+g*n*u-e*f*u-h*n*p+e*d*p)*T,t[14]=(g*o*i-r*f*i-g*n*l+e*f*l+r*n*p-e*o*p)*T,t[15]=(r*d*i-h*o*i+h*n*l-e*d*l-r*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,l=e._w,c=s+s,h=r+r,d=o+o,u=s*c,m=s*h,g=s*d,f=r*h,p=r*d,_=o*d,v=l*c,y=l*h,x=l*d,w=n.x,S=n.y,T=n.z;return i[0]=(1-(f+_))*w,i[1]=(m+x)*w,i[2]=(g-y)*w,i[3]=0,i[4]=(m-x)*S,i[5]=(1-(u+_))*S,i[6]=(p+v)*S,i[7]=0,i[8]=(g+y)*T,i[9]=(p-v)*T,i[10]=(1-(u+f))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=bi.set(i[0],i[1],i[2]).length();const r=bi.set(i[4],i[5],i[6]).length(),o=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const c=1/s,h=1/r,d=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,e.setFromRotationMatrix(tn),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r){const o=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(r+s)/(r-s),m=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r){const o=this.elements,l=1/(e-t),c=1/(n-i),h=1/(r-s),d=(e+t)*l,u=(n+i)*c,m=(r+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bi=new H,tn=new le,Sh=new H(0,0,0),Eh=new H(1,1,1),Vn=new H,Ts=new H,Oe=new H,oa=new le,aa=new mi;class nr{constructor(t=0,e=0,n=0,i=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ie(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return aa.setFromEuler(this),this.setFromQuaternion(aa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class uo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ah=0;const la=new H,wi=new mi,En=new le,Cs=new H,Qi=new H,Th=new H,Ch=new mi,ca=new H(1,0,0),ha=new H(0,1,0),ua=new H(0,0,1),Lh={type:"added"},da={type:"removed"};class we extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new H,e=new nr,n=new mi,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new le},normalMatrix:{value:new Re}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.multiply(wi),this}rotateOnWorldAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.premultiply(wi),this}rotateX(t){return this.rotateOnAxis(ca,t)}rotateY(t){return this.rotateOnAxis(ha,t)}rotateZ(t){return this.rotateOnAxis(ua,t)}translateOnAxis(t,e){return la.copy(t).applyQuaternion(this.quaternion),this.position.add(la.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ca,t)}translateY(t){return this.translateOnAxis(ha,t)}translateZ(t){return this.translateOnAxis(ua,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cs.copy(t):Cs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Qi,Cs,this.up):En.lookAt(Cs,Qi,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),wi.setFromRotationMatrix(En),this.quaternion.premultiply(wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Lh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(da)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(da)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,Th),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Ch,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new H(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new H,An=new H,Ar=new H,Tn=new H,Si=new H,Ei=new H,fa=new H,Tr=new H,Cr=new H,Lr=new H;class Nn{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){en.subVectors(i,e),An.subVectors(n,e),Ar.subVectors(t,e);const r=en.dot(en),o=en.dot(An),l=en.dot(Ar),c=An.dot(An),h=An.dot(Ar),d=r*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(c*l-o*h)*u,g=(r*h-o*l)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(t,e,n,i,s,r,o,l){return this.getBarycoord(t,e,n,i,Tn),l.set(0,0),l.addScaledVector(s,Tn.x),l.addScaledVector(r,Tn.y),l.addScaledVector(o,Tn.z),l}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),An.subVectors(t,e),en.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),An.subVectors(this.a,this.b),en.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Nn.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;Si.subVectors(i,n),Ei.subVectors(s,n),Tr.subVectors(t,n);const l=Si.dot(Tr),c=Ei.dot(Tr);if(l<=0&&c<=0)return e.copy(n);Cr.subVectors(t,i);const h=Si.dot(Cr),d=Ei.dot(Cr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Si,r);Lr.subVectors(t,s);const m=Si.dot(Lr),g=Ei.dot(Lr);if(g>=0&&m<=g)return e.copy(s);const f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ei,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return fa.subVectors(s,i),o=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(fa,o);const _=1/(p+f+u);return r=f*_,o=u*_,e.copy(n).addScaledVector(Si,r).addScaledVector(Ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Rh=0,Ms=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Oi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=gl,this.blendDst=vl,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const Ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Rr(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Te.workingColorSpace){if(t=co(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Rr(r,s,t+1/3),this.g=Rr(r,s,t),this.b=Rr(r,s,t-1/3)}return Te.toWorkingColorSpace(this,i),this}setStyle(t,e=gn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Te.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Te.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Te.toWorkingColorSpace(this,e),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Te.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const n=Ll[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return Te.fromWorkingColorSpace(ye.copy(this),t),Ie(ye.r*255,0,255)<<16^Ie(ye.g*255,0,255)<<8^Ie(ye.b*255,0,255)<<0}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,i=ye.g,s=ye.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=gn){Te.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,i=ye.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(nn),nn.h+=t,nn.s+=e,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nn),t.getHSL(Ls);const n=fs(nn.h,Ls.h,e),i=fs(nn.s,Ls.s,e),s=fs(nn.l,Ls.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Ht;Ht.NAMES=Ll;class Rl extends Ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new H,Rs=new Yt;class yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=na,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==na&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Dl extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pl extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class an extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dh=0;const Xe=new le,Dr=new we,Ai=new H,Fe=new ys,ts=new ys,pe=new H;class Kn extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sl(t)?Pl:Dl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Re().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Dr.lookAt(t),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new an(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Fe.setFromBufferAttribute(s),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(Fe.min,ts.min),Fe.expandByPoint(pe),pe.addVectors(Fe.max,ts.max),Fe.expandByPoint(pe)):(Fe.expandByPoint(ts.min),Fe.expandByPoint(ts.max))}Fe.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)pe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(pe));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pe.fromBufferAttribute(o,c),l&&(Ai.fromBufferAttribute(t,c),pe.add(Ai)),i=Math.max(i,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let D=0;D<o;D++)c[D]=new H,h[D]=new H;const d=new H,u=new H,m=new H,g=new Yt,f=new Yt,p=new Yt,_=new H,v=new H;function y(D,k,G){d.fromArray(i,D*3),u.fromArray(i,k*3),m.fromArray(i,G*3),g.fromArray(r,D*2),f.fromArray(r,k*2),p.fromArray(r,G*2),u.sub(d),m.sub(d),f.sub(g),p.sub(g);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(R),v.copy(m).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(R),c[D].add(_),c[k].add(_),c[G].add(_),h[D].add(v),h[k].add(v),h[G].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let D=0,k=x.length;D<k;++D){const G=x[D],R=G.start,P=G.count;for(let N=R,z=R+P;N<z;N+=3)y(n[N+0],n[N+1],n[N+2])}const w=new H,S=new H,T=new H,M=new H;function A(D){T.fromArray(s,D*3),M.copy(T);const k=c[D];w.copy(k),w.sub(T.multiplyScalar(T.dot(k))).normalize(),S.crossVectors(M,k);const R=S.dot(h[D])<0?-1:1;l[D*4]=w.x,l[D*4+1]=w.y,l[D*4+2]=w.z,l[D*4+3]=R}for(let D=0,k=x.length;D<k;++D){const G=x[D],R=G.start,P=G.count;for(let N=R,z=R+P;N<z;N+=3)A(n[N+0]),A(n[N+1]),A(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new H,s=new H,r=new H,o=new H,l=new H,c=new H,h=new H,d=new H;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),f=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,p),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){o.isInterleavedBufferAttribute?m=l[f]*o.data.stride+o.offset:m=l[f]*h;for(let _=0;_<h;_++)u[g++]=c[m++]}return new yn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Kn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pa=new le,dn=new Cl,Ds=new ho,ma=new H,es=new H,ns=new H,is=new H,Pr=new H,Ps=new H,Is=new Yt,Ns=new Yt,zs=new Yt,Ir=new H,Bs=new H;class Pt extends we{constructor(t=new Kn,e=new Rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Pr.fromBufferAttribute(d,t),r?Ps.addScaledVector(Pr,h):Ps.addScaledVector(Pr.sub(e),h))}e.add(Ps)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),dn.copy(t.ray).recast(t.near),Ds.containsPoint(dn.origin)===!1&&(dn.intersectSphere(Ds,ma)===null||dn.origin.distanceToSquared(ma)>(t.far-t.near)**2))||(pa.copy(s).invert(),dn.copy(t.ray).applyMatrix4(pa),n.boundingBox!==null&&dn.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],_=Math.max(f.start,u.start),v=Math.min(o.count,Math.min(f.start+f.count,u.start+u.count));for(let y=_,x=v;y<x;y+=3){const w=o.getX(y),S=o.getX(y+1),T=o.getX(y+2);r=Os(this,p,t,dn,c,h,w,S,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const m=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let f=m,p=g;f<p;f+=3){const _=o.getX(f),v=o.getX(f+1),y=o.getX(f+2);r=Os(this,i,t,dn,c,h,_,v,y),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],_=Math.max(f.start,u.start),v=Math.min(l.count,Math.min(f.start+f.count,u.start+u.count));for(let y=_,x=v;y<x;y+=3){const w=y,S=y+1,T=y+2;r=Os(this,p,t,dn,c,h,w,S,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const m=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let f=m,p=g;f<p;f+=3){const _=f,v=f+1,y=f+2;r=Os(this,i,t,dn,c,h,_,v,y),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function Ph(a,t,e,n,i,s,r,o){let l;if(t.side===He?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,t.side===Xn,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Bs);return c<e.near||c>e.far?null:{distance:c,point:Bs.clone(),object:a}}function Os(a,t,e,n,i,s,r,o,l){a.getVertexPosition(r,es),a.getVertexPosition(o,ns),a.getVertexPosition(l,is);const c=Ph(a,t,e,n,es,ns,is,Ir);if(c){i&&(Is.fromBufferAttribute(i,r),Ns.fromBufferAttribute(i,o),zs.fromBufferAttribute(i,l),c.uv=Nn.getUV(Ir,es,ns,is,Is,Ns,zs,new Yt)),s&&(Is.fromBufferAttribute(s,r),Ns.fromBufferAttribute(s,o),zs.fromBufferAttribute(s,l),c.uv2=Nn.getUV(Ir,es,ns,is,Is,Ns,zs,new Yt));const h={a:r,b:o,c:l,normal:new H,materialIndex:0};Nn.getNormal(es,ns,is,h.normal),c.face=h}return c}class Qt extends Kn{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(d,2));function g(f,p,_,v,y,x,w,S,T,M,A){const D=x/T,k=w/M,G=x/2,R=w/2,P=S/2,N=T+1,z=M+1;let X=0,F=0;const q=new H;for(let Y=0;Y<z;Y++){const et=Y*k-R;for(let B=0;B<N;B++){const J=B*D-G;q[f]=J*v,q[p]=et*y,q[_]=P,c.push(q.x,q.y,q.z),q[f]=0,q[p]=0,q[_]=S>0?1:-1,h.push(q.x,q.y,q.z),d.push(B/T),d.push(1-Y/M),X+=1}}for(let Y=0;Y<M;Y++)for(let et=0;et<T;et++){const B=u+et+N*Y,J=u+et+N*(Y+1),tt=u+(et+1)+N*(Y+1),U=u+(et+1)+N*Y;l.push(B,J,U),l.push(J,tt,U),F+=6}o.addGroup(m,F,A),m+=F,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wi(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(a){const t={};for(let e=0;e<a.length;e++){const n=Wi(a[e]);for(const i in n)t[i]=n[i]}return t}function Ih(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function Il(a){return a.getRenderTarget()===null&&a.outputEncoding===$t?gn:_s}const Nh={clone:Wi,merge:Ce};var zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=Ih(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Nl extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ze extends Nl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ds*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,Ci=1;class Oh extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ze(Ti,Ci,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ze(Ti,Ci,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new Ze(Ti,Ci,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new Ze(Ti,Ci,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Ze(Ti,Ci,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ze(Ti,Ci,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=Bn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class zl extends Ne{constructor(t,e,n,i,s,r,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gi,super(t,e,n,i,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fh extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new zl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qt(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:qn});s.uniforms.tEquirect.value=e;const r=new Pt(i,s),o=e.minFilter;return e.minFilter===gs&&(e.minFilter=Ke),new Oh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const Nr=new H,kh=new H,Uh=new Re;let ri=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Nr.subVectors(n,e).cross(kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Uh.getNormalMatrix(t),i=this.coplanarPoint(Nr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Li=new ho,Fs=new H;class fo{constructor(t=new ri,e=new ri,n=new ri,i=new ri,s=new ri,r=new ri){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],m=n[9],g=n[10],f=n[11],p=n[12],_=n[13],v=n[14],y=n[15];return e[0].setComponents(o-i,d-l,f-u,y-p).normalize(),e[1].setComponents(o+i,d+l,f+u,y+p).normalize(),e[2].setComponents(o+s,d+c,f+m,y+_).normalize(),e[3].setComponents(o-s,d-c,f-m,y-_).normalize(),e[4].setComponents(o-r,d-h,f-g,y-v).normalize(),e[5].setComponents(o+r,d+h,f+g,y+v).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fs.x=i.normal.x>0?t.max.x:t.min.x,Fs.y=i.normal.y>0?t.max.y:t.min.y,Fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bl(){let a=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function Gh(a,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,m=h.updateRange;a.bindBuffer(d,c),m.count===-1?a.bufferSubData(d,0,u):(e?a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:r,remove:o,update:l}}class po extends Kn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,m=[],g=[],f=[],p=[];for(let _=0;_<h;_++){const v=_*u-r;for(let y=0;y<c;y++){const x=y*d-s;g.push(x,-v,0),f.push(0,0,1),p.push(y/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<o;v++){const y=v+c*_,x=v+c*(_+1),w=v+1+c*(_+1),S=v+1+c*_;m.push(y,x,S),m.push(x,w,S)}this.setIndex(m),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh="vec3 transformed = vec3( position );",Kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,$h=`#ifdef USE_IRIDESCENCE
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
#endif`,Jh=`#ifdef USE_BUMPMAP
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
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,au=`#define PI 3.141592653589793
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
}`,lu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cu=`vec3 transformedNormal = objectNormal;
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
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",mu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gu=`#ifdef USE_ENVMAP
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
#endif`,vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_u=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eu=`#ifdef USE_GRADIENTMAP
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
}`,Au=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ru=`uniform bool receiveShadow;
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
#endif`,Du=`#if defined( USE_ENVMAP )
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
#endif`,Pu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bu=`PhysicalMaterial material;
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
#endif`,Ou=`struct PhysicalMaterial {
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
}`,Fu=`
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
#endif`,ku=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Gu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ku=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$u=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ju=`#ifdef USE_MORPHNORMALS
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
#endif`,Qu=`#ifdef USE_MORPHTARGETS
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
#endif`,td=`#ifdef USE_MORPHTARGETS
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
#endif`,ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,nd=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,od=`#ifdef USE_NORMALMAP
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
#endif`,ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bd=`float getShadowMask() {
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
}`,wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sd=`#ifdef USE_SKINNING
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
#endif`,Ed=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ad=`#ifdef USE_SKINNING
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
#endif`,Td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dd=`#ifdef USE_TRANSMISSION
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
#endif`,Pd=`#ifdef USE_TRANSMISSION
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
#endif`,Id=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Nd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,zd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Bd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Od=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Fd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gd=`uniform sampler2D t2D;
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
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xd=`#include <common>
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
}`,Yd=`#if DEPTH_PACKING == 3200
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
}`,jd=`#define DISTANCE
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
}`,Kd=`#define DISTANCE
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jd=`uniform float scale;
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
}`,Qd=`uniform vec3 diffuse;
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
}`,tf=`#include <common>
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
}`,ef=`uniform vec3 diffuse;
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
}`,nf=`#define LAMBERT
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
}`,sf=`#define LAMBERT
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
}`,rf=`#define MATCAP
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
}`,of=`#define MATCAP
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
}`,af=`#define NORMAL
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
}`,lf=`#define NORMAL
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
}`,cf=`#define PHONG
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
}`,hf=`#define PHONG
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
}`,uf=`#define STANDARD
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
}`,df=`#define STANDARD
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
}`,ff=`#define TOON
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
}`,pf=`#define TOON
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
}`,mf=`uniform float size;
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
}`,gf=`uniform vec3 diffuse;
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
}`,vf=`#include <common>
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
}`,_f=`uniform vec3 color;
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
}`,xf=`uniform float rotation;
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
}`,yf=`uniform vec3 diffuse;
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
}`,Dt={alphamap_fragment:Vh,alphamap_pars_fragment:Hh,alphatest_fragment:Wh,alphatest_pars_fragment:qh,aomap_fragment:Xh,aomap_pars_fragment:Yh,begin_vertex:jh,beginnormal_vertex:Kh,bsdfs:Zh,iridescence_fragment:$h,bumpmap_pars_fragment:Jh,clipping_planes_fragment:Qh,clipping_planes_pars_fragment:tu,clipping_planes_pars_vertex:eu,clipping_planes_vertex:nu,color_fragment:iu,color_pars_fragment:su,color_pars_vertex:ru,color_vertex:ou,common:au,cube_uv_reflection_fragment:lu,defaultnormal_vertex:cu,displacementmap_pars_vertex:hu,displacementmap_vertex:uu,emissivemap_fragment:du,emissivemap_pars_fragment:fu,encodings_fragment:pu,encodings_pars_fragment:mu,envmap_fragment:gu,envmap_common_pars_fragment:vu,envmap_pars_fragment:_u,envmap_pars_vertex:xu,envmap_physical_pars_fragment:Du,envmap_vertex:yu,fog_vertex:Mu,fog_pars_vertex:bu,fog_fragment:wu,fog_pars_fragment:Su,gradientmap_pars_fragment:Eu,lightmap_fragment:Au,lightmap_pars_fragment:Tu,lights_lambert_fragment:Cu,lights_lambert_pars_fragment:Lu,lights_pars_begin:Ru,lights_toon_fragment:Pu,lights_toon_pars_fragment:Iu,lights_phong_fragment:Nu,lights_phong_pars_fragment:zu,lights_physical_fragment:Bu,lights_physical_pars_fragment:Ou,lights_fragment_begin:Fu,lights_fragment_maps:ku,lights_fragment_end:Uu,logdepthbuf_fragment:Gu,logdepthbuf_pars_fragment:Vu,logdepthbuf_pars_vertex:Hu,logdepthbuf_vertex:Wu,map_fragment:qu,map_pars_fragment:Xu,map_particle_fragment:Yu,map_particle_pars_fragment:ju,metalnessmap_fragment:Ku,metalnessmap_pars_fragment:Zu,morphcolor_vertex:$u,morphnormal_vertex:Ju,morphtarget_pars_vertex:Qu,morphtarget_vertex:td,normal_fragment_begin:ed,normal_fragment_maps:nd,normal_pars_fragment:id,normal_pars_vertex:sd,normal_vertex:rd,normalmap_pars_fragment:od,clearcoat_normal_fragment_begin:ad,clearcoat_normal_fragment_maps:ld,clearcoat_pars_fragment:cd,iridescence_pars_fragment:hd,output_fragment:ud,packing:dd,premultiplied_alpha_fragment:fd,project_vertex:pd,dithering_fragment:md,dithering_pars_fragment:gd,roughnessmap_fragment:vd,roughnessmap_pars_fragment:_d,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:yd,shadowmap_vertex:Md,shadowmask_pars_fragment:bd,skinbase_vertex:wd,skinning_pars_vertex:Sd,skinning_vertex:Ed,skinnormal_vertex:Ad,specularmap_fragment:Td,specularmap_pars_fragment:Cd,tonemapping_fragment:Ld,tonemapping_pars_fragment:Rd,transmission_fragment:Dd,transmission_pars_fragment:Pd,uv_pars_fragment:Id,uv_pars_vertex:Nd,uv_vertex:zd,uv2_pars_fragment:Bd,uv2_pars_vertex:Od,uv2_vertex:Fd,worldpos_vertex:kd,background_vert:Ud,background_frag:Gd,backgroundCube_vert:Vd,backgroundCube_frag:Hd,cube_vert:Wd,cube_frag:qd,depth_vert:Xd,depth_frag:Yd,distanceRGBA_vert:jd,distanceRGBA_frag:Kd,equirect_vert:Zd,equirect_frag:$d,linedashed_vert:Jd,linedashed_frag:Qd,meshbasic_vert:tf,meshbasic_frag:ef,meshlambert_vert:nf,meshlambert_frag:sf,meshmatcap_vert:rf,meshmatcap_frag:of,meshnormal_vert:af,meshnormal_frag:lf,meshphong_vert:cf,meshphong_frag:hf,meshphysical_vert:uf,meshphysical_frag:df,meshtoon_vert:ff,meshtoon_frag:pf,points_vert:mf,points_frag:gf,shadow_vert:vf,shadow_frag:_f,sprite_vert:xf,sprite_frag:yf},ct={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Re},uv2Transform:{value:new Re},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Re}}},vn={basic:{uniforms:Ce([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ce([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ce([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ce([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Ce([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Ce([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Ce([ct.points,ct.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ce([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ce([ct.common,ct.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ce([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Ce([ct.sprite,ct.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ce([ct.common,ct.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ce([ct.lights,ct.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};vn.physical={uniforms:Ce([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const ks={r:0,b:0,g:0};function Mf(a,t,e,n,i,s,r){const o=new Ht(0);let l=s===!0?0:1,c,h,d=null,u=0,m=null;function g(p,_){let v=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y));const x=a.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(y=null),y===null?f(o,l):y&&y.isColor&&(f(y,1),v=!0),(a.autoClear||v)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),y&&(y.isCubeTexture||y.mapping===er)?(h===void 0&&(h=new Pt(new Qt(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Wi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=y.encoding!==$t,(d!==y||u!==y.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,m=a.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Pt(new po(2,2),new vi({name:"BackgroundMaterial",uniforms:Wi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=y.encoding!==$t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,m=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,_){p.getRGB(ks,Il(a)),n.buffers.color.setClear(ks.r,ks.g,ks.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(o,l)},render:g}}function bf(a,t,e,n){const i=a.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function d(P,N,z,X,F){let q=!1;if(r){const Y=f(X,z,N);c!==Y&&(c=Y,m(c.object)),q=_(P,X,z,F),q&&v(P,X,z,F)}else{const Y=N.wireframe===!0;(c.geometry!==X.id||c.program!==z.id||c.wireframe!==Y)&&(c.geometry=X.id,c.program=z.id,c.wireframe=Y,q=!0)}F!==null&&e.update(F,34963),(q||h)&&(h=!1,M(P,N,z,X),F!==null&&a.bindBuffer(34963,e.get(F).buffer))}function u(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?a.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?a.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function f(P,N,z){const X=z.wireframe===!0;let F=o[P.id];F===void 0&&(F={},o[P.id]=F);let q=F[N.id];q===void 0&&(q={},F[N.id]=q);let Y=q[X];return Y===void 0&&(Y=p(u()),q[X]=Y),Y}function p(P){const N=[],z=[],X=[];for(let F=0;F<i;F++)N[F]=0,z[F]=0,X[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:X,object:P,attributes:{},index:null}}function _(P,N,z,X){const F=c.attributes,q=N.attributes;let Y=0;const et=z.getAttributes();for(const B in et)if(et[B].location>=0){const tt=F[B];let U=q[B];if(U===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(U=P.instanceColor)),tt===void 0||tt.attribute!==U||U&&tt.data!==U.data)return!0;Y++}return c.attributesNum!==Y||c.index!==X}function v(P,N,z,X){const F={},q=N.attributes;let Y=0;const et=z.getAttributes();for(const B in et)if(et[B].location>=0){let tt=q[B];tt===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor));const U={};U.attribute=tt,tt&&tt.data&&(U.data=tt.data),F[B]=U,Y++}c.attributes=F,c.attributesNum=Y,c.index=X}function y(){const P=c.newAttributes;for(let N=0,z=P.length;N<z;N++)P[N]=0}function x(P){w(P,0)}function w(P,N){const z=c.newAttributes,X=c.enabledAttributes,F=c.attributeDivisors;z[P]=1,X[P]===0&&(a.enableVertexAttribArray(P),X[P]=1),F[P]!==N&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),F[P]=N)}function S(){const P=c.newAttributes,N=c.enabledAttributes;for(let z=0,X=N.length;z<X;z++)N[z]!==P[z]&&(a.disableVertexAttribArray(z),N[z]=0)}function T(P,N,z,X,F,q){n.isWebGL2===!0&&(z===5124||z===5125)?a.vertexAttribIPointer(P,N,z,F,q):a.vertexAttribPointer(P,N,z,X,F,q)}function M(P,N,z,X){if(n.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const F=X.attributes,q=z.getAttributes(),Y=N.defaultAttributeValues;for(const et in q){const B=q[et];if(B.location>=0){let J=F[et];if(J===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){const tt=J.normalized,U=J.itemSize,ot=e.get(J);if(ot===void 0)continue;const at=ot.buffer,lt=ot.type,it=ot.bytesPerElement;if(J.isInterleavedBufferAttribute){const ht=J.data,St=ht.stride,Et=J.offset;if(ht.isInstancedInterleavedBuffer){for(let Rt=0;Rt<B.locationSize;Rt++)w(B.location+Rt,ht.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Rt=0;Rt<B.locationSize;Rt++)x(B.location+Rt);a.bindBuffer(34962,at);for(let Rt=0;Rt<B.locationSize;Rt++)T(B.location+Rt,U/B.locationSize,lt,tt,St*it,(Et+U/B.locationSize*Rt)*it)}else{if(J.isInstancedBufferAttribute){for(let ht=0;ht<B.locationSize;ht++)w(B.location+ht,J.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ht=0;ht<B.locationSize;ht++)x(B.location+ht);a.bindBuffer(34962,at);for(let ht=0;ht<B.locationSize;ht++)T(B.location+ht,U/B.locationSize,lt,tt,U*it,U/B.locationSize*ht*it)}}else if(Y!==void 0){const tt=Y[et];if(tt!==void 0)switch(tt.length){case 2:a.vertexAttrib2fv(B.location,tt);break;case 3:a.vertexAttrib3fv(B.location,tt);break;case 4:a.vertexAttrib4fv(B.location,tt);break;default:a.vertexAttrib1fv(B.location,tt)}}}}S()}function A(){G();for(const P in o){const N=o[P];for(const z in N){const X=N[z];for(const F in X)g(X[F].object),delete X[F];delete N[z]}delete o[P]}}function D(P){if(o[P.id]===void 0)return;const N=o[P.id];for(const z in N){const X=N[z];for(const F in X)g(X[F].object),delete X[F];delete N[z]}delete o[P.id]}function k(P){for(const N in o){const z=o[N];if(z[P.id]===void 0)continue;const X=z[P.id];for(const F in X)g(X[F].object),delete X[F];delete z[P.id]}}function G(){R(),h=!0,c!==l&&(c=l,m(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:k,initAttributes:y,enableAttribute:x,disableUnusedAttributes:S}}function wf(a,t,e,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,h){a.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,m;if(i)u=a,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,h,d),e.update(h,s,d)}this.setMode=r,this.render=o,this.renderInstances=l}function Sf(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=a.getParameter(34930),u=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),f=a.getParameter(34921),p=a.getParameter(36347),_=a.getParameter(36348),v=a.getParameter(36349),y=u>0,x=r||t.has("OES_texture_float"),w=y&&x,S=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:S}}function Ef(a){const t=this;let e=null,n=0,i=!1,s=!1;const r=new ri,o=new Re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,_=a.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const v=s?0:n,y=v*4;let x=_.clippingState||null;l.value=x,x=h(g,u,y,m);for(let w=0;w!==y;++w)x[w]=e[w];_.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const f=d!==null?d.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const _=m+f*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,x=m;y!==f;++y,x+=4)r.copy(d[y]).applyMatrix4(v,o),r.normal.toArray(p,x),p[x+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function Af(a){let t=new WeakMap;function e(r,o){return o===Jr?r.mapping=Gi:o===Qr&&(r.mapping=Vi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===Jr||o===Qr)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Fh(l.height/2);return c.fromEquirectangularTexture(a,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ol extends Nl{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zi=4,ga=[.125,.215,.35,.446,.526,.582],ai=20,zr=new Ol,va=new Ht;let Br=null;const oi=(1+Math.sqrt(5))/2,Ri=1/oi,_a=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,oi,Ri),new H(0,oi,-Ri),new H(Ri,0,oi),new H(-Ri,0,oi),new H(oi,Ri,0),new H(-oi,Ri,0)];class xa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Br=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Br),t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Br=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:vs,format:rn,encoding:pi,depthBuffer:!1},i=ya(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ya(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tf(s)),this._blurMaterial=Cf(s,t,e)}return i}_compileMaterial(t){const e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,zr)}_sceneToCubeUV(t,e,n,i){const o=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(va),h.toneMapping=Bn,h.autoClear=!1;const m=new Rl({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new Pt(new Qt,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy(va),f=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):v===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const y=this._cubeSize;Us(i,v*y,_>2?y:0,y,y),h.setRenderTarget(i),f&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Gi||t.mapping===Vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ma());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Pt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Us(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,zr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=_a[(i-1)%_a.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Pt(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ai-1),f=s/g,p=isFinite(s)?1+Math.floor(h*f):ai;p>ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const _=[];let v=0;for(let T=0;T<ai;++T){const M=T/f,A=Math.exp(-M*M/2);_.push(A),T===0?v+=A:T<p&&(v+=2*A)}for(let T=0;T<_.length;T++)_[T]=_[T]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=_,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const x=this._sizeLods[i],w=3*x*(i>y-zi?i-y+zi:0),S=4*(this._cubeSize-x);Us(e,w,S,3*x,2*x),l.setRenderTarget(e),l.render(d,zr)}}function Tf(a){const t=[],e=[],n=[];let i=a;const s=a-zi+1+ga.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>a-zi?l=ga[r-a+zi-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,f=3,p=2,_=1,v=new Float32Array(f*g*m),y=new Float32Array(p*g*m),x=new Float32Array(_*g*m);for(let S=0;S<m;S++){const T=S%3*2/3-1,M=S>2?0:-1,A=[T,M,0,T+2/3,M,0,T+2/3,M+1,0,T,M,0,T+2/3,M+1,0,T,M+1,0];v.set(A,f*g*S),y.set(u,p*g*S);const D=[S,S,S,S,S,S];x.set(D,_*g*S)}const w=new Kn;w.setAttribute("position",new yn(v,f)),w.setAttribute("uv",new yn(y,p)),w.setAttribute("faceIndex",new yn(x,_)),t.push(w),i>zi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ya(a,t,e){const n=new gi(a,t,e);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function Cf(a,t,e){const n=new Float32Array(ai),i=new H(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mo(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ma(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ba(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function mo(){return`

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
	`}function Lf(a){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Jr||l===Qr,h=l===Gi||l===Vi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new xa(a)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new xa(a));const u=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Rf(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Df(a,t,e,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],34962);const m=d.morphAttributes;for(const g in m){const f=m[g];for(let p=0,_=f.length;p<_;p++)t.update(f[p],34962)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let f=0;if(m!==null){const v=m.array;f=m.version;for(let y=0,x=v.length;y<x;y+=3){const w=v[y+0],S=v[y+1],T=v[y+2];u.push(w,S,S,T,T,w)}}else{const v=g.array;f=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const w=y+0,S=y+1,T=y+2;u.push(w,S,S,T,T,w)}}const p=new(Sl(u)?Pl:Dl)(u,1);p.version=f;const _=s.get(d);_&&t.remove(_),s.set(d,p)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Pf(a,t,e,n){const i=n.isWebGL2;let s;function r(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,m){a.drawElements(s,m,o,u*l),e.update(m,s,1)}function d(u,m,g){if(g===0)return;let f,p;if(i)f=a,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,m,o,u*l,g),e.update(m,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=d}function If(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Nf(a,t){return a[0]-t[0]}function zf(a,t){return Math.abs(t[1])-Math.abs(a[1])}function Bf(a,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new ge,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==f){let N=function(){R.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let A=0;y===!0&&(A=1),x===!0&&(A=2),w===!0&&(A=3);let D=h.attributes.position.count*A,k=1;D>t.maxTextureSize&&(k=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const G=new Float32Array(D*k*4*f),R=new Tl(G,D,k,f);R.type=ui,R.needsUpdate=!0;const P=A*4;for(let z=0;z<f;z++){const X=S[z],F=T[z],q=M[z],Y=D*k*4*z;for(let et=0;et<X.count;et++){const B=et*P;y===!0&&(r.fromBufferAttribute(X,et),G[Y+B+0]=r.x,G[Y+B+1]=r.y,G[Y+B+2]=r.z,G[Y+B+3]=0),x===!0&&(r.fromBufferAttribute(F,et),G[Y+B+4]=r.x,G[Y+B+5]=r.y,G[Y+B+6]=r.z,G[Y+B+7]=0),w===!0&&(r.fromBufferAttribute(q,et),G[Y+B+8]=r.x,G[Y+B+9]=r.y,G[Y+B+10]=r.z,G[Y+B+11]=q.itemSize===4?r.w:1)}}p={count:f,texture:R,size:new Yt(D,k)},s.set(h,p),h.addEventListener("dispose",N)}let _=0;for(let y=0;y<u.length;y++)_+=u[y];const v=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(a,"morphTargetBaseInfluence",v),d.getUniforms().setValue(a,"morphTargetInfluences",u),d.getUniforms().setValue(a,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let f=n[h.id];if(f===void 0||f.length!==g){f=[];for(let x=0;x<g;x++)f[x]=[x,0];n[h.id]=f}for(let x=0;x<g;x++){const w=f[x];w[0]=x,w[1]=u[x]}f.sort(zf);for(let x=0;x<8;x++)x<g&&f[x][1]?(o[x][0]=f[x][0],o[x][1]=f[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Nf);const p=h.morphAttributes.position,_=h.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const w=o[x],S=w[0],T=w[1];S!==Number.MAX_SAFE_INTEGER&&T?(p&&h.getAttribute("morphTarget"+x)!==p[S]&&h.setAttribute("morphTarget"+x,p[S]),_&&h.getAttribute("morphNormal"+x)!==_[S]&&h.setAttribute("morphNormal"+x,_[S]),i[x]=T,v+=T):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),_&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const y=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(a,"morphTargetBaseInfluence",y),d.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Of(a,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}const Fl=new Ne,kl=new Tl,Ul=new bh,Gl=new zl,wa=[],Sa=[],Ea=new Float32Array(16),Aa=new Float32Array(9),Ta=new Float32Array(4);function Ki(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=wa[i];if(s===void 0&&(s=new Float32Array(i),wa[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function ce(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function he(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function ir(a,t){let e=Sa[t];e===void 0&&(e=new Int32Array(t),Sa[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function Ff(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function kf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;a.uniform2fv(this.addr,t),he(e,t)}}function Uf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;a.uniform3fv(this.addr,t),he(e,t)}}function Gf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;a.uniform4fv(this.addr,t),he(e,t)}}function Vf(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Ta.set(n),a.uniformMatrix2fv(this.addr,!1,Ta),he(e,n)}}function Hf(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Aa.set(n),a.uniformMatrix3fv(this.addr,!1,Aa),he(e,n)}}function Wf(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Ea.set(n),a.uniformMatrix4fv(this.addr,!1,Ea),he(e,n)}}function qf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Xf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;a.uniform2iv(this.addr,t),he(e,t)}}function Yf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;a.uniform3iv(this.addr,t),he(e,t)}}function jf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;a.uniform4iv(this.addr,t),he(e,t)}}function Kf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function Zf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;a.uniform2uiv(this.addr,t),he(e,t)}}function $f(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;a.uniform3uiv(this.addr,t),he(e,t)}}function Jf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;a.uniform4uiv(this.addr,t),he(e,t)}}function Qf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Fl,i)}function tp(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ul,i)}function ep(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gl,i)}function np(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||kl,i)}function ip(a){switch(a){case 5126:return Ff;case 35664:return kf;case 35665:return Uf;case 35666:return Gf;case 35674:return Vf;case 35675:return Hf;case 35676:return Wf;case 5124:case 35670:return qf;case 35667:case 35671:return Xf;case 35668:case 35672:return Yf;case 35669:case 35673:return jf;case 5125:return Kf;case 36294:return Zf;case 36295:return $f;case 36296:return Jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Qf;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return ep;case 36289:case 36303:case 36311:case 36292:return np}}function sp(a,t){a.uniform1fv(this.addr,t)}function rp(a,t){const e=Ki(t,this.size,2);a.uniform2fv(this.addr,e)}function op(a,t){const e=Ki(t,this.size,3);a.uniform3fv(this.addr,e)}function ap(a,t){const e=Ki(t,this.size,4);a.uniform4fv(this.addr,e)}function lp(a,t){const e=Ki(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function cp(a,t){const e=Ki(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function hp(a,t){const e=Ki(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function up(a,t){a.uniform1iv(this.addr,t)}function dp(a,t){a.uniform2iv(this.addr,t)}function fp(a,t){a.uniform3iv(this.addr,t)}function pp(a,t){a.uniform4iv(this.addr,t)}function mp(a,t){a.uniform1uiv(this.addr,t)}function gp(a,t){a.uniform2uiv(this.addr,t)}function vp(a,t){a.uniform3uiv(this.addr,t)}function _p(a,t){a.uniform4uiv(this.addr,t)}function xp(a,t,e){const n=this.cache,i=t.length,s=ir(e,i);ce(n,s)||(a.uniform1iv(this.addr,s),he(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Fl,s[r])}function yp(a,t,e){const n=this.cache,i=t.length,s=ir(e,i);ce(n,s)||(a.uniform1iv(this.addr,s),he(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Ul,s[r])}function Mp(a,t,e){const n=this.cache,i=t.length,s=ir(e,i);ce(n,s)||(a.uniform1iv(this.addr,s),he(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Gl,s[r])}function bp(a,t,e){const n=this.cache,i=t.length,s=ir(e,i);ce(n,s)||(a.uniform1iv(this.addr,s),he(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||kl,s[r])}function wp(a){switch(a){case 5126:return sp;case 35664:return rp;case 35665:return op;case 35666:return ap;case 35674:return lp;case 35675:return cp;case 35676:return hp;case 5124:case 35670:return up;case 35667:case 35671:return dp;case 35668:case 35672:return fp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return gp;case 36295:return vp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return xp;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return bp}}class Sp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=ip(e.type)}}class Ep{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=wp(e.type)}}class Ap{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function Ca(a,t){a.seq.push(t),a.map[t.id]=t}function Tp(a,t,e){const n=a.name,i=n.length;for(Or.lastIndex=0;;){const s=Or.exec(n),r=Or.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Ca(e,c===void 0?new Sp(o,a,t):new Ep(o,a,t));break}else{let d=e.map[o];d===void 0&&(d=new Ap(o),Ca(e,d)),e=d}}}class js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);Tp(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function La(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}let Cp=0;function Lp(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function Rp(a){switch(a){case pi:return["Linear","( value )"];case $t:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Ra(a,t,e){const n=a.getShaderParameter(t,35713),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Lp(a.getShaderSource(t),r)}else return i}function Dp(a,t){const e=Rp(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Pp(a,t){let e;switch(t){case Rc:e="Linear";break;case Dc:e="Reinhard";break;case Pc:e="OptimizedCineon";break;case Ic:e="ACESFilmic";break;case Nc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ip(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join(`
`)}function Np(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zp(a,t){const e={},n=a.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function us(a){return a!==""}function Da(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pa(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(a){return a.replace(Bp,Op)}function Op(a,t){const e=Dt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return so(e)}const Fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ia(a){return a.replace(Fp,kp)}function kp(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Na(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Up(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===ml?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===cs&&(t="SHADOWMAP_TYPE_VSM"),t}function Gp(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Gi:case Vi:t="ENVMAP_TYPE_CUBE";break;case er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vp(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function Hp(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case _l:t="ENVMAP_BLENDING_MULTIPLY";break;case Cc:t="ENVMAP_BLENDING_MIX";break;case Lc:t="ENVMAP_BLENDING_ADD";break}return t}function Wp(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function qp(a,t,e,n){const i=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Up(e),c=Gp(e),h=Vp(e),d=Hp(e),u=Wp(e),m=e.isWebGL2?"":Ip(e),g=Np(s),f=i.createProgram();let p,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(us).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(us).join(`
`),_.length>0&&(_+=`
`)):(p=[Na(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),_=[m,Na(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?Pp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.encodings_pars_fragment,Dp("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(us).join(`
`)),r=so(r),r=Da(r,e),r=Pa(r,e),o=so(o),o=Da(o,e),o=Pa(o,e),r=Ia(r),o=Ia(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+p+r,x=v+_+o,w=La(i,35633,y),S=La(i,35632,x);if(i.attachShader(f,w),i.attachShader(f,S),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),a.debug.checkShaderErrors){const A=i.getProgramInfoLog(f).trim(),D=i.getShaderInfoLog(w).trim(),k=i.getShaderInfoLog(S).trim();let G=!0,R=!0;if(i.getProgramParameter(f,35714)===!1){G=!1;const P=Ra(i,w,"vertex"),N=Ra(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+A+`
`+P+`
`+N)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(D===""||k==="")&&(R=!1);R&&(this.diagnostics={runnable:G,programLog:A,vertexShader:{log:D,prefix:p},fragmentShader:{log:k,prefix:_}})}i.deleteShader(w),i.deleteShader(S);let T;this.getUniforms=function(){return T===void 0&&(T=new js(i,f)),T};let M;return this.getAttributes=function(){return M===void 0&&(M=zp(i,f)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=Cp++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=S,this}let Xp=0;class Yp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jp(t),e.set(t,n)),n}}class jp{constructor(t){this.id=Xp++,this.code=t,this.usedTimes=0}}function Kp(a,t,e,n,i,s,r){const o=new uo,l=new Yp,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M,A,D,k,G){const R=k.fog,P=G.geometry,N=M.isMeshStandardMaterial?k.environment:null,z=(M.isMeshStandardMaterial?e:t).get(M.envMap||N),X=z&&z.mapping===er?z.image.height:null,F=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Y=q!==void 0?q.length:0;let et=0;P.morphAttributes.position!==void 0&&(et=1),P.morphAttributes.normal!==void 0&&(et=2),P.morphAttributes.color!==void 0&&(et=3);let B,J,tt,U;if(F){const St=vn[F];B=St.vertexShader,J=St.fragmentShader}else B=M.vertexShader,J=M.fragmentShader,l.update(M),tt=l.getVertexShaderID(M),U=l.getFragmentShaderID(M);const ot=a.getRenderTarget(),at=M.alphaTest>0,lt=M.clearcoat>0,it=M.iridescence>0;return{isWebGL2:h,shaderID:F,shaderName:M.type,vertexShader:B,fragmentShader:J,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:U,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:u,outputEncoding:ot===null?a.outputEncoding:ot.isXRRenderTarget===!0?ot.texture.encoding:pi,map:!!M.map,matcap:!!M.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:X,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Qc,tangentSpaceNormalMap:M.normalMapType===Ml,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===$t,clearcoat:lt,clearcoatMap:lt&&!!M.clearcoatMap,clearcoatRoughnessMap:lt&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:lt&&!!M.clearcoatNormalMap,iridescence:it,iridescenceMap:it&&!!M.iridescenceMap,iridescenceThicknessMap:it&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Oi,alphaMap:!!M.alphaMap,alphaTest:at,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!P.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:M.toneMapped?a.toneMapping:Bn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zn,flipSided:M.side===He,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)A.push(D),A.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(A,M),v(A,M),A.push(a.outputEncoding)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputEncoding),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.combine),M.push(A.vertexUvs),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),M.push(o.mask)}function y(M){const A=g[M.type];let D;if(A){const k=vn[A];D=Nh.clone(k.uniforms)}else D=M.uniforms;return D}function x(M,A){let D;for(let k=0,G=c.length;k<G;k++){const R=c[k];if(R.cacheKey===A){D=R,++D.usedTimes;break}}return D===void 0&&(D=new qp(a,A,M,s),c.push(D)),D}function w(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function S(M){l.remove(M)}function T(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:y,acquireProgram:x,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:T}}function Zp(){let a=new WeakMap;function t(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function e(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function $p(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function za(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function Ba(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,m,g,f,p){let _=a[t];return _===void 0?(_={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:f,group:p},a[t]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=f,_.group=p),t++,_}function o(d,u,m,g,f,p){const _=r(d,u,m,g,f,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function l(d,u,m,g,f,p){const _=r(d,u,m,g,f,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function c(d,u){e.length>1&&e.sort(d||$p),n.length>1&&n.sort(u||za),i.length>1&&i.sort(u||za)}function h(){for(let d=t,u=a.length;d<u;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Jp(){let a=new WeakMap;function t(n,i){const s=a.get(n);let r;return s===void 0?(r=new Ba,a.set(n,[r])):i>=s.length?(r=new Ba,s.push(r)):r=s[i],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function Qp(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Ht};break;case"SpotLight":e={position:new H,direction:new H,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new H,halfWidth:new H,halfHeight:new H};break}return a[t.id]=e,e}}}function tm(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let em=0;function nm(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function im(a,t){const e=new Qp,n=tm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new H);const s=new H,r=new le,o=new le;function l(h,d){let u=0,m=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,p=0,_=0,v=0,y=0,x=0,w=0,S=0,T=0,M=0;h.sort(nm);const A=d===!0?Math.PI:1;for(let k=0,G=h.length;k<G;k++){const R=h[k],P=R.color,N=R.intensity,z=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=P.r*N*A,m+=P.g*N*A,g+=P.b*N*A;else if(R.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(R.sh.coefficients[F],N);else if(R.isDirectionalLight){const F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity*A),R.castShadow){const q=R.shadow,Y=n.get(R);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=R.shadow.matrix,x++}i.directional[f]=F,f++}else if(R.isSpotLight){const F=e.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(P).multiplyScalar(N*A),F.distance=z,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,i.spot[_]=F;const q=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,q.updateMatrices(R),R.castShadow&&M++),i.spotLightMatrix[_]=q.matrix,R.castShadow){const Y=n.get(R);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=X,S++}_++}else if(R.isRectAreaLight){const F=e.get(R);F.color.copy(P).multiplyScalar(N),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),i.rectArea[v]=F,v++}else if(R.isPointLight){const F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity*A),F.distance=R.distance,F.decay=R.decay,R.castShadow){const q=R.shadow,Y=n.get(R);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,i.pointShadow[p]=Y,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=R.shadow.matrix,w++}i.point[p]=F,p++}else if(R.isHemisphereLight){const F=e.get(R);F.skyColor.copy(R.color).multiplyScalar(N*A),F.groundColor.copy(R.groundColor).multiplyScalar(N*A),i.hemi[y]=F,y++}}v>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==f||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==v||D.hemiLength!==y||D.numDirectionalShadows!==x||D.numPointShadows!==w||D.numSpotShadows!==S||D.numSpotMaps!==T)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=v,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+T-M,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=M,D.directionalLength=f,D.pointLength=p,D.spotLength=_,D.rectAreaLength=v,D.hemiLength=y,D.numDirectionalShadows=x,D.numPointShadows=w,D.numSpotShadows=S,D.numSpotMaps=T,i.version=em++)}function c(h,d){let u=0,m=0,g=0,f=0,p=0;const _=d.matrixWorldInverse;for(let v=0,y=h.length;v<y;v++){const x=h[v];if(x.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),u++}else if(x.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const w=i.rectArea[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),o.identity(),r.copy(x.matrixWorld),r.premultiply(_),o.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),f++}else if(x.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(_),m++}else if(x.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Oa(a,t){const e=new im(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function sm(a,t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let l;return o===void 0?(l=new Oa(a,t),e.set(s,[l])):r>=o.length?(l=new Oa(a,t),o.push(l)):l=o[r],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class rm extends Ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class om extends Ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lm=`uniform sampler2D shadow_pass;
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
}`;function cm(a,t,e){let n=new fo;const i=new Yt,s=new Yt,r=new ge,o=new rm({depthPacking:Jc}),l=new om,c={},h=e.maxTextureSize,d={[Xn]:He,[He]:Xn,[zn]:zn},u=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:am,fragmentShader:lm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Kn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Pt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl,this.render=function(x,w,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const T=a.getRenderTarget(),M=a.getActiveCubeFace(),A=a.getActiveMipmapLevel(),D=a.state;D.setBlending(qn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let k=0,G=x.length;k<G;k++){const R=x[k],P=R.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const N=P.getFrameExtents();if(i.multiply(N),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/N.x),i.x=s.x*N.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/N.y),i.y=s.y*N.y,P.mapSize.y=s.y)),P.map===null){const X=this.type!==cs?{minFilter:ve,magFilter:ve}:{};P.map=new gi(i.x,i.y,X),P.map.texture.name=R.name+".shadowMap",P.camera.updateProjectionMatrix()}a.setRenderTarget(P.map),a.clear();const z=P.getViewportCount();for(let X=0;X<z;X++){const F=P.getViewport(X);r.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),D.viewport(r),P.updateMatrices(R,X),n=P.getFrustum(),y(w,S,P.camera,R,this.type)}P.isPointLightShadow!==!0&&this.type===cs&&_(P,S),P.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(T,M,A)};function _(x,w){const S=t.update(f);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new gi(i.x,i.y)),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,a.setRenderTarget(x.mapPass),a.clear(),a.renderBufferDirect(w,null,S,u,f,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,a.setRenderTarget(x.map),a.clear(),a.renderBufferDirect(w,null,S,m,f,null)}function v(x,w,S,T,M,A){let D=null;const k=S.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(k!==void 0)D=k;else if(D=S.isPointLight===!0?l:o,a.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=D.uuid,R=w.uuid;let P=c[G];P===void 0&&(P={},c[G]=P);let N=P[R];N===void 0&&(N=D.clone(),P[R]=N),D=N}return D.visible=w.visible,D.wireframe=w.wireframe,A===cs?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:d[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,S.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(S.matrixWorld),D.nearDistance=T,D.farDistance=M),D}function y(x,w,S,T,M){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===cs)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,x.matrixWorld);const k=t.update(x),G=x.material;if(Array.isArray(G)){const R=k.groups;for(let P=0,N=R.length;P<N;P++){const z=R[P],X=G[z.materialIndex];if(X&&X.visible){const F=v(x,X,T,S.near,S.far,M);a.renderBufferDirect(S,null,k,F,x,z)}}}else if(G.visible){const R=v(x,G,T,S.near,S.far,M);a.renderBufferDirect(S,null,k,R,x,null)}}const D=x.children;for(let k=0,G=D.length;k<G;k++)y(D[k],w,S,T,M)}}function hm(a,t,e){const n=e.isWebGL2;function i(){let O=!1;const Z=new ge;let nt=null;const ft=new ge(0,0,0,0);return{setMask:function(vt){nt!==vt&&!O&&(a.colorMask(vt,vt,vt,vt),nt=vt)},setLocked:function(vt){O=vt},setClear:function(vt,Kt,de,Ee,hn){hn===!0&&(vt*=Ee,Kt*=Ee,de*=Ee),Z.set(vt,Kt,de,Ee),ft.equals(Z)===!1&&(a.clearColor(vt,Kt,de,Ee),ft.copy(Z))},reset:function(){O=!1,nt=null,ft.set(-1,0,0,0)}}}function s(){let O=!1,Z=null,nt=null,ft=null;return{setTest:function(vt){vt?at(2929):lt(2929)},setMask:function(vt){Z!==vt&&!O&&(a.depthMask(vt),Z=vt)},setFunc:function(vt){if(nt!==vt){switch(vt){case Mc:a.depthFunc(512);break;case bc:a.depthFunc(519);break;case wc:a.depthFunc(513);break;case $r:a.depthFunc(515);break;case Sc:a.depthFunc(514);break;case Ec:a.depthFunc(518);break;case Ac:a.depthFunc(516);break;case Tc:a.depthFunc(517);break;default:a.depthFunc(515)}nt=vt}},setLocked:function(vt){O=vt},setClear:function(vt){ft!==vt&&(a.clearDepth(vt),ft=vt)},reset:function(){O=!1,Z=null,nt=null,ft=null}}}function r(){let O=!1,Z=null,nt=null,ft=null,vt=null,Kt=null,de=null,Ee=null,hn=null;return{setTest:function(ee){O||(ee?at(2960):lt(2960))},setMask:function(ee){Z!==ee&&!O&&(a.stencilMask(ee),Z=ee)},setFunc:function(ee,qe,un){(nt!==ee||ft!==qe||vt!==un)&&(a.stencilFunc(ee,qe,un),nt=ee,ft=qe,vt=un)},setOp:function(ee,qe,un){(Kt!==ee||de!==qe||Ee!==un)&&(a.stencilOp(ee,qe,un),Kt=ee,de=qe,Ee=un)},setLocked:function(ee){O=ee},setClear:function(ee){hn!==ee&&(a.clearStencil(ee),hn=ee)},reset:function(){O=!1,Z=null,nt=null,ft=null,vt=null,Kt=null,de=null,Ee=null,hn=null}}}const o=new i,l=new s,c=new r,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,f=[],p=null,_=!1,v=null,y=null,x=null,w=null,S=null,T=null,M=null,A=!1,D=null,k=null,G=null,R=null,P=null;const N=a.getParameter(35661);let z=!1,X=0;const F=a.getParameter(7938);F.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(F)[1]),z=X>=1):F.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),z=X>=2);let q=null,Y={};const et=a.getParameter(3088),B=a.getParameter(2978),J=new ge().fromArray(et),tt=new ge().fromArray(B);function U(O,Z,nt){const ft=new Uint8Array(4),vt=a.createTexture();a.bindTexture(O,vt),a.texParameteri(O,10241,9728),a.texParameteri(O,10240,9728);for(let Kt=0;Kt<nt;Kt++)a.texImage2D(Z+Kt,0,6408,1,1,0,6408,5121,ft);return vt}const ot={};ot[3553]=U(3553,3553,1),ot[34067]=U(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),at(2929),l.setFunc($r),qt(!1),jt(Ao),at(2884),bt(qn);function at(O){u[O]!==!0&&(a.enable(O),u[O]=!0)}function lt(O){u[O]!==!1&&(a.disable(O),u[O]=!1)}function it(O,Z){return m[O]!==Z?(a.bindFramebuffer(O,Z),m[O]=Z,n&&(O===36009&&(m[36160]=Z),O===36160&&(m[36009]=Z)),!0):!1}function ht(O,Z){let nt=f,ft=!1;if(O)if(nt=g.get(Z),nt===void 0&&(nt=[],g.set(Z,nt)),O.isWebGLMultipleRenderTargets){const vt=O.texture;if(nt.length!==vt.length||nt[0]!==36064){for(let Kt=0,de=vt.length;Kt<de;Kt++)nt[Kt]=36064+Kt;nt.length=vt.length,ft=!0}}else nt[0]!==36064&&(nt[0]=36064,ft=!0);else nt[0]!==1029&&(nt[0]=1029,ft=!0);ft&&(e.isWebGL2?a.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function St(O){return p!==O?(a.useProgram(O),p=O,!0):!1}const Et={[Ni]:32774,[hc]:32778,[uc]:32779};if(n)Et[Ro]=32775,Et[Do]=32776;else{const O=t.get("EXT_blend_minmax");O!==null&&(Et[Ro]=O.MIN_EXT,Et[Do]=O.MAX_EXT)}const Rt={[dc]:0,[fc]:1,[pc]:768,[gl]:770,[yc]:776,[_c]:774,[gc]:772,[mc]:769,[vl]:771,[xc]:775,[vc]:773};function bt(O,Z,nt,ft,vt,Kt,de,Ee){if(O===qn){_===!0&&(lt(3042),_=!1);return}if(_===!1&&(at(3042),_=!0),O!==cc){if(O!==v||Ee!==A){if((y!==Ni||S!==Ni)&&(a.blendEquation(32774),y=Ni,S=Ni),Ee)switch(O){case Oi:a.blendFuncSeparate(1,771,1,771);break;case To:a.blendFunc(1,1);break;case Co:a.blendFuncSeparate(0,769,0,1);break;case Lo:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Oi:a.blendFuncSeparate(770,771,1,771);break;case To:a.blendFunc(770,1);break;case Co:a.blendFuncSeparate(0,769,0,1);break;case Lo:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,w=null,T=null,M=null,v=O,A=Ee}return}vt=vt||Z,Kt=Kt||nt,de=de||ft,(Z!==y||vt!==S)&&(a.blendEquationSeparate(Et[Z],Et[vt]),y=Z,S=vt),(nt!==x||ft!==w||Kt!==T||de!==M)&&(a.blendFuncSeparate(Rt[nt],Rt[ft],Rt[Kt],Rt[de]),x=nt,w=ft,T=Kt,M=de),v=O,A=!1}function Ct(O,Z){O.side===zn?lt(2884):at(2884);let nt=O.side===He;Z&&(nt=!nt),qt(nt),O.blending===Oi&&O.transparent===!1?bt(qn):bt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const ft=O.stencilWrite;c.setTest(ft),ft&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Xt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?at(32926):lt(32926)}function qt(O){D!==O&&(O?a.frontFace(2304):a.frontFace(2305),D=O)}function jt(O){O!==ac?(at(2884),O!==k&&(O===Ao?a.cullFace(1029):O===lc?a.cullFace(1028):a.cullFace(1032))):lt(2884),k=O}function Ut(O){O!==G&&(z&&a.lineWidth(O),G=O)}function Xt(O,Z,nt){O?(at(32823),(R!==Z||P!==nt)&&(a.polygonOffset(Z,nt),R=Z,P=nt)):lt(32823)}function _e(O){O?at(3089):lt(3089)}function Se(O){O===void 0&&(O=33984+N-1),q!==O&&(a.activeTexture(O),q=O)}function L(O,Z,nt){nt===void 0&&(q===null?nt=33984+N-1:nt=q);let ft=Y[nt];ft===void 0&&(ft={type:void 0,texture:void 0},Y[nt]=ft),(ft.type!==O||ft.texture!==Z)&&(q!==nt&&(a.activeTexture(nt),q=nt),a.bindTexture(O,Z||ot[O]),ft.type=O,ft.texture=Z)}function E(){const O=Y[q];O!==void 0&&O.type!==void 0&&(a.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function j(){try{a.compressedTexImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{a.compressedTexImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{a.texSubImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{a.texSubImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{a.texStorage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{a.texStorage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{a.texImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{a.texImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(O){J.equals(O)===!1&&(a.scissor(O.x,O.y,O.z,O.w),J.copy(O))}function yt(O){tt.equals(O)===!1&&(a.viewport(O.x,O.y,O.z,O.w),tt.copy(O))}function Gt(O,Z){let nt=d.get(Z);nt===void 0&&(nt=new WeakMap,d.set(Z,nt));let ft=nt.get(O);ft===void 0&&(ft=a.getUniformBlockIndex(Z,O.name),nt.set(O,ft))}function Jt(O,Z){const ft=d.get(Z).get(O);h.get(Z)!==ft&&(a.uniformBlockBinding(Z,ft,O.__bindingPointIndex),h.set(Z,ft))}function ue(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},q=null,Y={},m={},g=new WeakMap,f=[],p=null,_=!1,v=null,y=null,x=null,w=null,S=null,T=null,M=null,A=!1,D=null,k=null,G=null,R=null,P=null,J.set(0,0,a.canvas.width,a.canvas.height),tt.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:at,disable:lt,bindFramebuffer:it,drawBuffers:ht,useProgram:St,setBlending:bt,setMaterial:Ct,setFlipSided:qt,setCullFace:jt,setLineWidth:Ut,setPolygonOffset:Xt,setScissorTest:_e,activeTexture:Se,bindTexture:L,unbindTexture:E,compressedTexImage2D:j,compressedTexImage3D:st,texImage2D:_t,texImage3D:Tt,updateUBOMapping:Gt,uniformBlockBinding:Jt,texStorage2D:Q,texStorage3D:At,texSubImage2D:rt,texSubImage3D:ut,compressedTexSubImage2D:xt,compressedTexSubImage3D:mt,scissor:wt,viewport:yt,reset:ue}}function um(a,t,e,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,E){return _?new OffscreenCanvas(L,E):$s("canvas")}function y(L,E,j,st){let rt=1;if((L.width>st||L.height>st)&&(rt=st/Math.max(L.width,L.height)),rt<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ut=E?wl:Math.floor,xt=ut(rt*L.width),mt=ut(rt*L.height);f===void 0&&(f=v(xt,mt));const Q=j?v(xt,mt):f;return Q.width=xt,Q.height=mt,Q.getContext("2d").drawImage(L,0,0,xt,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+xt+"x"+mt+")."),Q}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return io(L.width)&&io(L.height)}function w(L){return o?!1:L.wrapS!==Ge||L.wrapT!==Ge||L.minFilter!==ve&&L.minFilter!==Ke}function S(L,E){return L.generateMipmaps&&E&&L.minFilter!==ve&&L.minFilter!==Ke}function T(L){a.generateMipmap(L)}function M(L,E,j,st,rt=!1){if(o===!1)return E;if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=E;return E===6403&&(j===5126&&(ut=33326),j===5131&&(ut=33325),j===5121&&(ut=33321)),E===33319&&(j===5126&&(ut=33328),j===5131&&(ut=33327),j===5121&&(ut=33323)),E===6408&&(j===5126&&(ut=34836),j===5131&&(ut=34842),j===5121&&(ut=st===$t&&rt===!1?35907:32856),j===32819&&(ut=32854),j===32820&&(ut=32855)),(ut===33325||ut===33326||ut===33327||ut===33328||ut===34842||ut===34836)&&t.get("EXT_color_buffer_float"),ut}function A(L,E,j){return S(L,j)===!0||L.isFramebufferTexture&&L.minFilter!==ve&&L.minFilter!==Ke?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function D(L){return L===ve||L===Po||L===cr?9728:9729}function k(L){const E=L.target;E.removeEventListener("dispose",k),R(E),E.isVideoTexture&&g.delete(E)}function G(L){const E=L.target;E.removeEventListener("dispose",G),N(E)}function R(L){const E=n.get(L);if(E.__webglInit===void 0)return;const j=L.source,st=p.get(j);if(st){const rt=st[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&P(L),Object.keys(st).length===0&&p.delete(j)}n.remove(L)}function P(L){const E=n.get(L);a.deleteTexture(E.__webglTexture);const j=L.source,st=p.get(j);delete st[E.__cacheKey],r.memory.textures--}function N(L){const E=L.texture,j=n.get(L),st=n.get(E);if(st.__webglTexture!==void 0&&(a.deleteTexture(st.__webglTexture),r.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)a.deleteFramebuffer(j.__webglFramebuffer[rt]),j.__webglDepthbuffer&&a.deleteRenderbuffer(j.__webglDepthbuffer[rt]);else{if(a.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&a.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&a.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let rt=0;rt<j.__webglColorRenderbuffer.length;rt++)j.__webglColorRenderbuffer[rt]&&a.deleteRenderbuffer(j.__webglColorRenderbuffer[rt]);j.__webglDepthRenderbuffer&&a.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let rt=0,ut=E.length;rt<ut;rt++){const xt=n.get(E[rt]);xt.__webglTexture&&(a.deleteTexture(xt.__webglTexture),r.memory.textures--),n.remove(E[rt])}n.remove(E),n.remove(L)}let z=0;function X(){z=0}function F(){const L=z;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),z+=1,L}function q(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.encoding),E.join()}function Y(L,E){const j=n.get(L);if(L.isVideoTexture&&_e(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const st=L.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(j,L,E);return}}e.bindTexture(3553,j.__webglTexture,33984+E)}function et(L,E){const j=n.get(L);if(L.version>0&&j.__version!==L.version){lt(j,L,E);return}e.bindTexture(35866,j.__webglTexture,33984+E)}function B(L,E){const j=n.get(L);if(L.version>0&&j.__version!==L.version){lt(j,L,E);return}e.bindTexture(32879,j.__webglTexture,33984+E)}function J(L,E){const j=n.get(L);if(L.version>0&&j.__version!==L.version){it(j,L,E);return}e.bindTexture(34067,j.__webglTexture,33984+E)}const tt={[to]:10497,[Ge]:33071,[eo]:33648},U={[ve]:9728,[Po]:9984,[cr]:9986,[Ke]:9729,[zc]:9985,[gs]:9987};function ot(L,E,j){if(j?(a.texParameteri(L,10242,tt[E.wrapS]),a.texParameteri(L,10243,tt[E.wrapT]),(L===32879||L===35866)&&a.texParameteri(L,32882,tt[E.wrapR]),a.texParameteri(L,10240,U[E.magFilter]),a.texParameteri(L,10241,U[E.minFilter])):(a.texParameteri(L,10242,33071),a.texParameteri(L,10243,33071),(L===32879||L===35866)&&a.texParameteri(L,32882,33071),(E.wrapS!==Ge||E.wrapT!==Ge)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(L,10240,D(E.magFilter)),a.texParameteri(L,10241,D(E.minFilter)),E.minFilter!==ve&&E.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===ve||E.minFilter!==cr&&E.minFilter!==gs||E.type===ui&&t.has("OES_texture_float_linear")===!1||o===!1&&E.type===vs&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(a.texParameterf(L,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function at(L,E){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",k));const st=E.source;let rt=p.get(st);rt===void 0&&(rt={},p.set(st,rt));const ut=q(E);if(ut!==L.__cacheKey){rt[ut]===void 0&&(rt[ut]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,j=!0),rt[ut].usedTimes++;const xt=rt[L.__cacheKey];xt!==void 0&&(rt[L.__cacheKey].usedTimes--,xt.usedTimes===0&&P(E)),L.__cacheKey=ut,L.__webglTexture=rt[ut].texture}return j}function lt(L,E,j){let st=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=35866),E.isData3DTexture&&(st=32879);const rt=at(L,E),ut=E.source;e.bindTexture(st,L.__webglTexture,33984+j);const xt=n.get(ut);if(ut.version!==xt.__version||rt===!0){e.activeTexture(33984+j),a.pixelStorei(37440,E.flipY),a.pixelStorei(37441,E.premultiplyAlpha),a.pixelStorei(3317,E.unpackAlignment),a.pixelStorei(37443,0);const mt=w(E)&&x(E.image)===!1;let Q=y(E.image,mt,!1,h);Q=Se(E,Q);const At=x(Q)||o,_t=s.convert(E.format,E.encoding);let Tt=s.convert(E.type),wt=M(E.internalFormat,_t,Tt,E.encoding,E.isVideoTexture);ot(st,E,At);let yt;const Gt=E.mipmaps,Jt=o&&E.isVideoTexture!==!0,ue=xt.__version===void 0||rt===!0,O=A(E,Q,At);if(E.isDepthTexture)wt=6402,o?E.type===ui?wt=36012:E.type===hi?wt=33190:E.type===Fi?wt=35056:wt=33189:E.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===di&&wt===6402&&E.type!==yl&&E.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=hi,Tt=s.convert(E.type)),E.format===Hi&&wt===6402&&(wt=34041,E.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Fi,Tt=s.convert(E.type))),ue&&(Jt?e.texStorage2D(3553,1,wt,Q.width,Q.height):e.texImage2D(3553,0,wt,Q.width,Q.height,0,_t,Tt,null));else if(E.isDataTexture)if(Gt.length>0&&At){Jt&&ue&&e.texStorage2D(3553,O,wt,Gt[0].width,Gt[0].height);for(let Z=0,nt=Gt.length;Z<nt;Z++)yt=Gt[Z],Jt?e.texSubImage2D(3553,Z,0,0,yt.width,yt.height,_t,Tt,yt.data):e.texImage2D(3553,Z,wt,yt.width,yt.height,0,_t,Tt,yt.data);E.generateMipmaps=!1}else Jt?(ue&&e.texStorage2D(3553,O,wt,Q.width,Q.height),e.texSubImage2D(3553,0,0,0,Q.width,Q.height,_t,Tt,Q.data)):e.texImage2D(3553,0,wt,Q.width,Q.height,0,_t,Tt,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Jt&&ue&&e.texStorage3D(35866,O,wt,Gt[0].width,Gt[0].height,Q.depth);for(let Z=0,nt=Gt.length;Z<nt;Z++)yt=Gt[Z],E.format!==rn?_t!==null?Jt?e.compressedTexSubImage3D(35866,Z,0,0,0,yt.width,yt.height,Q.depth,_t,yt.data,0,0):e.compressedTexImage3D(35866,Z,wt,yt.width,yt.height,Q.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(35866,Z,0,0,0,yt.width,yt.height,Q.depth,_t,Tt,yt.data):e.texImage3D(35866,Z,wt,yt.width,yt.height,Q.depth,0,_t,Tt,yt.data)}else{Jt&&ue&&e.texStorage2D(3553,O,wt,Gt[0].width,Gt[0].height);for(let Z=0,nt=Gt.length;Z<nt;Z++)yt=Gt[Z],E.format!==rn?_t!==null?Jt?e.compressedTexSubImage2D(3553,Z,0,0,yt.width,yt.height,_t,yt.data):e.compressedTexImage2D(3553,Z,wt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(3553,Z,0,0,yt.width,yt.height,_t,Tt,yt.data):e.texImage2D(3553,Z,wt,yt.width,yt.height,0,_t,Tt,yt.data)}else if(E.isDataArrayTexture)Jt?(ue&&e.texStorage3D(35866,O,wt,Q.width,Q.height,Q.depth),e.texSubImage3D(35866,0,0,0,0,Q.width,Q.height,Q.depth,_t,Tt,Q.data)):e.texImage3D(35866,0,wt,Q.width,Q.height,Q.depth,0,_t,Tt,Q.data);else if(E.isData3DTexture)Jt?(ue&&e.texStorage3D(32879,O,wt,Q.width,Q.height,Q.depth),e.texSubImage3D(32879,0,0,0,0,Q.width,Q.height,Q.depth,_t,Tt,Q.data)):e.texImage3D(32879,0,wt,Q.width,Q.height,Q.depth,0,_t,Tt,Q.data);else if(E.isFramebufferTexture){if(ue)if(Jt)e.texStorage2D(3553,O,wt,Q.width,Q.height);else{let Z=Q.width,nt=Q.height;for(let ft=0;ft<O;ft++)e.texImage2D(3553,ft,wt,Z,nt,0,_t,Tt,null),Z>>=1,nt>>=1}}else if(Gt.length>0&&At){Jt&&ue&&e.texStorage2D(3553,O,wt,Gt[0].width,Gt[0].height);for(let Z=0,nt=Gt.length;Z<nt;Z++)yt=Gt[Z],Jt?e.texSubImage2D(3553,Z,0,0,_t,Tt,yt):e.texImage2D(3553,Z,wt,_t,Tt,yt);E.generateMipmaps=!1}else Jt?(ue&&e.texStorage2D(3553,O,wt,Q.width,Q.height),e.texSubImage2D(3553,0,0,0,_t,Tt,Q)):e.texImage2D(3553,0,wt,_t,Tt,Q);S(E,At)&&T(st),xt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function it(L,E,j){if(E.image.length!==6)return;const st=at(L,E),rt=E.source;e.bindTexture(34067,L.__webglTexture,33984+j);const ut=n.get(rt);if(rt.version!==ut.__version||st===!0){e.activeTexture(33984+j),a.pixelStorei(37440,E.flipY),a.pixelStorei(37441,E.premultiplyAlpha),a.pixelStorei(3317,E.unpackAlignment),a.pixelStorei(37443,0);const xt=E.isCompressedTexture||E.image[0].isCompressedTexture,mt=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let Z=0;Z<6;Z++)!xt&&!mt?Q[Z]=y(E.image[Z],!1,!0,c):Q[Z]=mt?E.image[Z].image:E.image[Z],Q[Z]=Se(E,Q[Z]);const At=Q[0],_t=x(At)||o,Tt=s.convert(E.format,E.encoding),wt=s.convert(E.type),yt=M(E.internalFormat,Tt,wt,E.encoding),Gt=o&&E.isVideoTexture!==!0,Jt=ut.__version===void 0||st===!0;let ue=A(E,At,_t);ot(34067,E,_t);let O;if(xt){Gt&&Jt&&e.texStorage2D(34067,ue,yt,At.width,At.height);for(let Z=0;Z<6;Z++){O=Q[Z].mipmaps;for(let nt=0;nt<O.length;nt++){const ft=O[nt];E.format!==rn?Tt!==null?Gt?e.compressedTexSubImage2D(34069+Z,nt,0,0,ft.width,ft.height,Tt,ft.data):e.compressedTexImage2D(34069+Z,nt,yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(34069+Z,nt,0,0,ft.width,ft.height,Tt,wt,ft.data):e.texImage2D(34069+Z,nt,yt,ft.width,ft.height,0,Tt,wt,ft.data)}}}else{O=E.mipmaps,Gt&&Jt&&(O.length>0&&ue++,e.texStorage2D(34067,ue,yt,Q[0].width,Q[0].height));for(let Z=0;Z<6;Z++)if(mt){Gt?e.texSubImage2D(34069+Z,0,0,0,Q[Z].width,Q[Z].height,Tt,wt,Q[Z].data):e.texImage2D(34069+Z,0,yt,Q[Z].width,Q[Z].height,0,Tt,wt,Q[Z].data);for(let nt=0;nt<O.length;nt++){const vt=O[nt].image[Z].image;Gt?e.texSubImage2D(34069+Z,nt+1,0,0,vt.width,vt.height,Tt,wt,vt.data):e.texImage2D(34069+Z,nt+1,yt,vt.width,vt.height,0,Tt,wt,vt.data)}}else{Gt?e.texSubImage2D(34069+Z,0,0,0,Tt,wt,Q[Z]):e.texImage2D(34069+Z,0,yt,Tt,wt,Q[Z]);for(let nt=0;nt<O.length;nt++){const ft=O[nt];Gt?e.texSubImage2D(34069+Z,nt+1,0,0,Tt,wt,ft.image[Z]):e.texImage2D(34069+Z,nt+1,yt,Tt,wt,ft.image[Z])}}}S(E,_t)&&T(34067),ut.__version=rt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ht(L,E,j,st,rt){const ut=s.convert(j.format,j.encoding),xt=s.convert(j.type),mt=M(j.internalFormat,ut,xt,j.encoding);n.get(E).__hasExternalTextures||(rt===32879||rt===35866?e.texImage3D(rt,0,mt,E.width,E.height,E.depth,0,ut,xt,null):e.texImage2D(rt,0,mt,E.width,E.height,0,ut,xt,null)),e.bindFramebuffer(36160,L),Xt(E)?u.framebufferTexture2DMultisampleEXT(36160,st,rt,n.get(j).__webglTexture,0,Ut(E)):(rt===3553||rt>=34069&&rt<=34074)&&a.framebufferTexture2D(36160,st,rt,n.get(j).__webglTexture,0),e.bindFramebuffer(36160,null)}function St(L,E,j){if(a.bindRenderbuffer(36161,L),E.depthBuffer&&!E.stencilBuffer){let st=33189;if(j||Xt(E)){const rt=E.depthTexture;rt&&rt.isDepthTexture&&(rt.type===ui?st=36012:rt.type===hi&&(st=33190));const ut=Ut(E);Xt(E)?u.renderbufferStorageMultisampleEXT(36161,ut,st,E.width,E.height):a.renderbufferStorageMultisample(36161,ut,st,E.width,E.height)}else a.renderbufferStorage(36161,st,E.width,E.height);a.framebufferRenderbuffer(36160,36096,36161,L)}else if(E.depthBuffer&&E.stencilBuffer){const st=Ut(E);j&&Xt(E)===!1?a.renderbufferStorageMultisample(36161,st,35056,E.width,E.height):Xt(E)?u.renderbufferStorageMultisampleEXT(36161,st,35056,E.width,E.height):a.renderbufferStorage(36161,34041,E.width,E.height),a.framebufferRenderbuffer(36160,33306,36161,L)}else{const st=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let rt=0;rt<st.length;rt++){const ut=st[rt],xt=s.convert(ut.format,ut.encoding),mt=s.convert(ut.type),Q=M(ut.internalFormat,xt,mt,ut.encoding),At=Ut(E);j&&Xt(E)===!1?a.renderbufferStorageMultisample(36161,At,Q,E.width,E.height):Xt(E)?u.renderbufferStorageMultisampleEXT(36161,At,Q,E.width,E.height):a.renderbufferStorage(36161,Q,E.width,E.height)}}a.bindRenderbuffer(36161,null)}function Et(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const st=n.get(E.depthTexture).__webglTexture,rt=Ut(E);if(E.depthTexture.format===di)Xt(E)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,st,0,rt):a.framebufferTexture2D(36160,36096,3553,st,0);else if(E.depthTexture.format===Hi)Xt(E)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,st,0,rt):a.framebufferTexture2D(36160,33306,3553,st,0);else throw new Error("Unknown depthTexture format")}function Rt(L){const E=n.get(L),j=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Et(E.__webglFramebuffer,L)}else if(j){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(36160,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]=a.createRenderbuffer(),St(E.__webglDepthbuffer[st],L,!1)}else e.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=a.createRenderbuffer(),St(E.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function bt(L,E,j){const st=n.get(L);E!==void 0&&ht(st.__webglFramebuffer,L,L.texture,36064,3553),j!==void 0&&Rt(L)}function Ct(L){const E=L.texture,j=n.get(L),st=n.get(E);L.addEventListener("dispose",G),L.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=a.createTexture()),st.__version=E.version,r.memory.textures++);const rt=L.isWebGLCubeRenderTarget===!0,ut=L.isWebGLMultipleRenderTargets===!0,xt=x(L)||o;if(rt){j.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)j.__webglFramebuffer[mt]=a.createFramebuffer()}else{if(j.__webglFramebuffer=a.createFramebuffer(),ut)if(i.drawBuffers){const mt=L.texture;for(let Q=0,At=mt.length;Q<At;Q++){const _t=n.get(mt[Q]);_t.__webglTexture===void 0&&(_t.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Xt(L)===!1){const mt=ut?E:[E];j.__webglMultisampledFramebuffer=a.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let Q=0;Q<mt.length;Q++){const At=mt[Q];j.__webglColorRenderbuffer[Q]=a.createRenderbuffer(),a.bindRenderbuffer(36161,j.__webglColorRenderbuffer[Q]);const _t=s.convert(At.format,At.encoding),Tt=s.convert(At.type),wt=M(At.internalFormat,_t,Tt,At.encoding,L.isXRRenderTarget===!0),yt=Ut(L);a.renderbufferStorageMultisample(36161,yt,wt,L.width,L.height),a.framebufferRenderbuffer(36160,36064+Q,36161,j.__webglColorRenderbuffer[Q])}a.bindRenderbuffer(36161,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=a.createRenderbuffer(),St(j.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}}if(rt){e.bindTexture(34067,st.__webglTexture),ot(34067,E,xt);for(let mt=0;mt<6;mt++)ht(j.__webglFramebuffer[mt],L,E,36064,34069+mt);S(E,xt)&&T(34067),e.unbindTexture()}else if(ut){const mt=L.texture;for(let Q=0,At=mt.length;Q<At;Q++){const _t=mt[Q],Tt=n.get(_t);e.bindTexture(3553,Tt.__webglTexture),ot(3553,_t,xt),ht(j.__webglFramebuffer,L,_t,36064+Q,3553),S(_t,xt)&&T(3553)}e.unbindTexture()}else{let mt=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?mt=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(mt,st.__webglTexture),ot(mt,E,xt),ht(j.__webglFramebuffer,L,E,36064,mt),S(E,xt)&&T(mt),e.unbindTexture()}L.depthBuffer&&Rt(L)}function qt(L){const E=x(L)||o,j=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let st=0,rt=j.length;st<rt;st++){const ut=j[st];if(S(ut,E)){const xt=L.isWebGLCubeRenderTarget?34067:3553,mt=n.get(ut).__webglTexture;e.bindTexture(xt,mt),T(xt),e.unbindTexture()}}}function jt(L){if(o&&L.samples>0&&Xt(L)===!1){const E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],j=L.width,st=L.height;let rt=16384;const ut=[],xt=L.stencilBuffer?33306:36096,mt=n.get(L),Q=L.isWebGLMultipleRenderTargets===!0;if(Q)for(let At=0;At<E.length;At++)e.bindFramebuffer(36160,mt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+At,36161,null),e.bindFramebuffer(36160,mt.__webglFramebuffer),a.framebufferTexture2D(36009,36064+At,3553,null,0);e.bindFramebuffer(36008,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,mt.__webglFramebuffer);for(let At=0;At<E.length;At++){ut.push(36064+At),L.depthBuffer&&ut.push(xt);const _t=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(_t===!1&&(L.depthBuffer&&(rt|=256),L.stencilBuffer&&(rt|=1024)),Q&&a.framebufferRenderbuffer(36008,36064,36161,mt.__webglColorRenderbuffer[At]),_t===!0&&(a.invalidateFramebuffer(36008,[xt]),a.invalidateFramebuffer(36009,[xt])),Q){const Tt=n.get(E[At]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,Tt,0)}a.blitFramebuffer(0,0,j,st,0,0,j,st,rt,9728),m&&a.invalidateFramebuffer(36008,ut)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),Q)for(let At=0;At<E.length;At++){e.bindFramebuffer(36160,mt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+At,36161,mt.__webglColorRenderbuffer[At]);const _t=n.get(E[At]).__webglTexture;e.bindFramebuffer(36160,mt.__webglFramebuffer),a.framebufferTexture2D(36009,36064+At,3553,_t,0)}e.bindFramebuffer(36009,mt.__webglMultisampledFramebuffer)}}function Ut(L){return Math.min(d,L.samples)}function Xt(L){const E=n.get(L);return o&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _e(L){const E=r.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function Se(L,E){const j=L.encoding,st=L.format,rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===no||j!==pi&&(j===$t?o===!1?t.has("EXT_sRGB")===!0&&st===rn?(L.format=no,L.minFilter=Ke,L.generateMipmaps=!1):E=El.sRGBToLinear(E):(st!==rn||rt!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),E}this.allocateTextureUnit=F,this.resetTextureUnits=X,this.setTexture2D=Y,this.setTexture2DArray=et,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=bt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Xt}function dm(a,t,e){const n=e.isWebGL2;function i(s,r=null){let o;if(s===fi)return 5121;if(s===kc)return 32819;if(s===Uc)return 32820;if(s===Bc)return 5120;if(s===Oc)return 5122;if(s===yl)return 5123;if(s===Fc)return 5124;if(s===hi)return 5125;if(s===ui)return 5126;if(s===vs)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Gc)return 6406;if(s===rn)return 6408;if(s===Vc)return 6409;if(s===Hc)return 6410;if(s===di)return 6402;if(s===Hi)return 34041;if(s===no)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Wc)return 6403;if(s===qc)return 36244;if(s===Xc)return 33319;if(s===Yc)return 33320;if(s===jc)return 36249;if(s===hr||s===ur||s===dr||s===fr)if(r===$t)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===hr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===hr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ur)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===dr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Io||s===No||s===zo||s===Bo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Io)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===No)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Oo||s===Fo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Oo)return r===$t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Fo)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ko||s===Uo||s===Go||s===Vo||s===Ho||s===Wo||s===qo||s===Xo||s===Yo||s===jo||s===Ko||s===Zo||s===$o||s===Jo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ko)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uo)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Go)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vo)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ho)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wo)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qo)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xo)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yo)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jo)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ko)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zo)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$o)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jo)return r===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===pr)return r===$t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Zc||s===Qo||s===ta||s===ea)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===pr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Qo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ta)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ea)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fi?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class fm extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class be extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pm={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n),_=this._getHandJoint(c,f);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class mm extends Ne{constructor(t,e,n,i,s,r,o,l,c,h){if(h=h!==void 0?h:di,h!==di&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===di&&(n=hi),n===void 0&&h===Hi&&(n=Fi),super(null,i,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ve,this.minFilter=l!==void 0?l:ve,this.flipY=!1,this.generateMipmaps=!1}}class gm extends Yi{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null;const f=e.getContextAttributes();let p=null,_=null;const v=[],y=[],x=new Set,w=new Map,S=new Ze;S.layers.enable(1),S.viewport=new ge;const T=new Ze;T.layers.enable(2),T.viewport=new ge;const M=[S,T],A=new fm;A.layers.enable(1),A.layers.enable(2);let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let J=v[B];return J===void 0&&(J=new Fr,v[B]=J),J.getTargetRaySpace()},this.getControllerGrip=function(B){let J=v[B];return J===void 0&&(J=new Fr,v[B]=J),J.getGripSpace()},this.getHand=function(B){let J=v[B];return J===void 0&&(J=new Fr,v[B]=J),J.getHandSpace()};function G(B){const J=y.indexOf(B.inputSource);if(J===-1)return;const tt=v[J];tt!==void 0&&tt.dispatchEvent({type:B.type,data:B.inputSource})}function R(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",P);for(let B=0;B<v.length;B++){const J=y[B];J!==null&&(y[B]=null,v[B].disconnect(J))}D=null,k=null,t.setRenderTarget(p),m=null,u=null,d=null,i=null,_=null,et.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",R),i.addEventListener("inputsourceschange",P),f.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:m}),_=new gi(m.framebufferWidth,m.framebufferHeight,{format:rn,type:fi,encoding:t.outputEncoding,stencilBuffer:f.stencil})}else{let J=null,tt=null,U=null;f.depth&&(U=f.stencil?35056:33190,J=f.stencil?Hi:di,tt=f.stencil?Fi:hi);const ot={colorFormat:32856,depthFormat:U,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(ot),i.updateRenderState({layers:[u]}),_=new gi(u.textureWidth,u.textureHeight,{format:rn,type:fi,depthTexture:new mm(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,encoding:t.outputEncoding,samples:f.antialias?4:0});const at=t.properties.get(_);at.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(B){for(let J=0;J<B.removed.length;J++){const tt=B.removed[J],U=y.indexOf(tt);U>=0&&(y[U]=null,v[U].disconnect(tt))}for(let J=0;J<B.added.length;J++){const tt=B.added[J];let U=y.indexOf(tt);if(U===-1){for(let at=0;at<v.length;at++)if(at>=y.length){y.push(tt),U=at;break}else if(y[at]===null){y[at]=tt,U=at;break}if(U===-1)break}const ot=v[U];ot&&ot.connect(tt)}}const N=new H,z=new H;function X(B,J,tt){N.setFromMatrixPosition(J.matrixWorld),z.setFromMatrixPosition(tt.matrixWorld);const U=N.distanceTo(z),ot=J.projectionMatrix.elements,at=tt.projectionMatrix.elements,lt=ot[14]/(ot[10]-1),it=ot[14]/(ot[10]+1),ht=(ot[9]+1)/ot[5],St=(ot[9]-1)/ot[5],Et=(ot[8]-1)/ot[0],Rt=(at[8]+1)/at[0],bt=lt*Et,Ct=lt*Rt,qt=U/(-Et+Rt),jt=qt*-Et;J.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(jt),B.translateZ(qt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ut=lt+qt,Xt=it+qt,_e=bt-jt,Se=Ct+(U-jt),L=ht*it/Xt*Ut,E=St*it/Xt*Ut;B.projectionMatrix.makePerspective(_e,Se,L,E,Ut,Xt)}function F(B,J){J===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(J.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;A.near=T.near=S.near=B.near,A.far=T.far=S.far=B.far,(D!==A.near||k!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),D=A.near,k=A.far);const J=B.parent,tt=A.cameras;F(A,J);for(let ot=0;ot<tt.length;ot++)F(tt[ot],J);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),B.matrix.copy(A.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const U=B.children;for(let ot=0,at=U.length;ot<at;ot++)U[ot].updateMatrixWorld(!0);tt.length===2?X(A,S,T):A.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return x};let q=null;function Y(B,J){if(h=J.getViewerPose(c||r),g=J,h!==null){const tt=h.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let U=!1;tt.length!==A.cameras.length&&(A.cameras.length=0,U=!0);for(let ot=0;ot<tt.length;ot++){const at=tt[ot];let lt=null;if(m!==null)lt=m.getViewport(at);else{const ht=d.getViewSubImage(u,at);lt=ht.viewport,ot===0&&(t.setRenderTargetTextures(_,ht.colorTexture,u.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(_))}let it=M[ot];it===void 0&&(it=new Ze,it.layers.enable(ot),it.viewport=new ge,M[ot]=it),it.matrix.fromArray(at.transform.matrix),it.projectionMatrix.fromArray(at.projectionMatrix),it.viewport.set(lt.x,lt.y,lt.width,lt.height),ot===0&&A.matrix.copy(it.matrix),U===!0&&A.cameras.push(it)}}for(let tt=0;tt<v.length;tt++){const U=y[tt],ot=v[tt];U!==null&&ot!==void 0&&ot.update(U,J,c||r)}if(q&&q(B,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let tt=null;for(const U of x)J.detectedPlanes.has(U)||(tt===null&&(tt=[]),tt.push(U));if(tt!==null)for(const U of tt)x.delete(U),w.delete(U),n.dispatchEvent({type:"planeremoved",data:U});for(const U of J.detectedPlanes)if(!x.has(U))x.add(U),w.set(U,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:U});else{const ot=w.get(U);U.lastChangedTime>ot&&(w.set(U,U.lastChangedTime),n.dispatchEvent({type:"planechanged",data:U}))}}g=null}const et=new Bl;et.setAnimationLoop(Y),this.setAnimationLoop=function(B){q=B},this.dispose=function(){}}}function vm(a,t){function e(f,p){p.color.getRGB(f.fogColor.value,Il(a)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),h(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),d(f,p),p.isMeshPhysicalMaterial&&u(f,p,y)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&r(f,p)):p.isPointsMaterial?o(f,p,_,v):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===He&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===He&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const x=a.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uv2Transform.value.copy(y.matrix))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function r(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function o(f,p,_,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*_,f.scale.value=v*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function u(f,p,_){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===He&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function _m(a,t,e,n){let i={},s={},r=[];const o=e.isWebGL2?a.getParameter(35375):0;function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",p));const w=y.program;n.updateUBOMapping(v,w);const S=t.render.frame;s[v.id]!==S&&(u(v),s[v.id]=S)}function h(v){const y=d();v.__bindingPointIndex=y;const x=a.createBuffer(),w=v.__size,S=v.usage;return a.bindBuffer(35345,x),a.bufferData(35345,w,S),a.bindBuffer(35345,null),a.bindBufferBase(35345,y,x),x}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],x=v.uniforms,w=v.__cache;a.bindBuffer(35345,y);for(let S=0,T=x.length;S<T;S++){const M=x[S];if(m(M,S,w)===!0){const A=M.__offset,D=Array.isArray(M.value)?M.value:[M.value];let k=0;for(let G=0;G<D.length;G++){const R=D[G],P=f(R);typeof R=="number"?(M.__data[0]=R,a.bufferSubData(35345,A+k,M.__data)):R.isMatrix3?(M.__data[0]=R.elements[0],M.__data[1]=R.elements[1],M.__data[2]=R.elements[2],M.__data[3]=R.elements[0],M.__data[4]=R.elements[3],M.__data[5]=R.elements[4],M.__data[6]=R.elements[5],M.__data[7]=R.elements[0],M.__data[8]=R.elements[6],M.__data[9]=R.elements[7],M.__data[10]=R.elements[8],M.__data[11]=R.elements[0]):(R.toArray(M.__data,k),k+=P.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,A,M.__data)}}a.bindBuffer(35345,null)}function m(v,y,x){const w=v.value;if(x[y]===void 0){if(typeof w=="number")x[y]=w;else{const S=Array.isArray(w)?w:[w],T=[];for(let M=0;M<S.length;M++)T.push(S[M].clone());x[y]=T}return!0}else if(typeof w=="number"){if(x[y]!==w)return x[y]=w,!0}else{const S=Array.isArray(x[y])?x[y]:[x[y]],T=Array.isArray(w)?w:[w];for(let M=0;M<S.length;M++){const A=S[M];if(A.equals(T[M])===!1)return A.copy(T[M]),!0}}return!1}function g(v){const y=v.uniforms;let x=0;const w=16;let S=0;for(let T=0,M=y.length;T<M;T++){const A=y[T],D={boundary:0,storage:0},k=Array.isArray(A.value)?A.value:[A.value];for(let G=0,R=k.length;G<R;G++){const P=k[G],N=f(P);D.boundary+=N.boundary,D.storage+=N.storage}if(A.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=x,T>0){S=x%w;const G=w-S;S!==0&&G-D.boundary<0&&(x+=w-S,A.__offset=x)}x+=D.storage}return S=x%w,S>0&&(x+=w-S),v.__size=x,v.__cache={},this}function f(v){const y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){const y=v.target;y.removeEventListener("dispose",p);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const v in i)a.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:l,update:c,dispose:_}}function xm(){const a=$s("canvas");return a.style.display="block",a}function go(a={}){this.isWebGLRenderer=!0;const t=a.canvas!==void 0?a.canvas:xm(),e=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let d=null,u=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pi,this.useLegacyLights=!0,this.toneMapping=Bn,this.toneMappingExposure=1;const f=this;let p=!1,_=0,v=0,y=null,x=-1,w=null;const S=new ge,T=new ge;let M=null,A=t.width,D=t.height,k=1,G=null,R=null;const P=new ge(0,0,A,D),N=new ge(0,0,A,D);let z=!1;const X=new fo;let F=!1,q=!1,Y=null;const et=new le,B=new H,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return y===null?k:1}let U=e;function ot(C,W){for(let K=0;K<C.length;K++){const V=C[K],$=t.getContext(V,W);if($!==null)return $}return null}try{const C={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lo}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",yt,!1),U===null){const W=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&W.shift(),U=ot(W,C),U===null)throw ot(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let at,lt,it,ht,St,Et,Rt,bt,Ct,qt,jt,Ut,Xt,_e,Se,L,E,j,st,rt,ut,xt,mt,Q;function At(){at=new Rf(U),lt=new Sf(U,at,a),at.init(lt),xt=new dm(U,at,lt),it=new hm(U,at,lt),ht=new If,St=new Zp,Et=new um(U,at,it,St,lt,xt,ht),Rt=new Af(f),bt=new Lf(f),Ct=new Gh(U,lt),mt=new bf(U,at,Ct,lt),qt=new Df(U,Ct,ht,mt),jt=new Of(U,qt,Ct,ht),st=new Bf(U,lt,Et),L=new Ef(St),Ut=new Kp(f,Rt,bt,at,lt,mt,L),Xt=new vm(f,St),_e=new Jp,Se=new sm(at,lt),j=new Mf(f,Rt,bt,it,jt,h,r),E=new cm(f,jt,lt),Q=new _m(U,ht,lt,it),rt=new wf(U,at,ht,lt),ut=new Pf(U,at,ht,lt),ht.programs=Ut.programs,f.capabilities=lt,f.extensions=at,f.properties=St,f.renderLists=_e,f.shadowMap=E,f.state=it,f.info=ht}At();const _t=new gm(f,U);this.xr=_t,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(A,D,!1))},this.getSize=function(C){return C.set(A,D)},this.setSize=function(C,W,K=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=C,D=W,t.width=Math.floor(C*k),t.height=Math.floor(W*k),K===!0&&(t.style.width=C+"px",t.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(A*k,D*k).floor()},this.setDrawingBufferSize=function(C,W,K){A=C,D=W,k=K,t.width=Math.floor(C*K),t.height=Math.floor(W*K),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(P)},this.setViewport=function(C,W,K,V){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,W,K,V),it.viewport(S.copy(P).multiplyScalar(k).floor())},this.getScissor=function(C){return C.copy(N)},this.setScissor=function(C,W,K,V){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,W,K,V),it.scissor(T.copy(N).multiplyScalar(k).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(C){it.setScissorTest(z=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){R=C},this.getClearColor=function(C){return C.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(C=!0,W=!0,K=!0){let V=0;C&&(V|=16384),W&&(V|=256),K&&(V|=1024),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),_e.dispose(),Se.dispose(),St.dispose(),Rt.dispose(),bt.dispose(),jt.dispose(),mt.dispose(),Q.dispose(),Ut.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",nt),_t.removeEventListener("sessionend",ft),Y&&(Y.dispose(),Y=null),vt.stop()};function Tt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=ht.autoReset,W=E.enabled,K=E.autoUpdate,V=E.needsUpdate,$=E.type;At(),ht.autoReset=C,E.enabled=W,E.autoUpdate=K,E.needsUpdate=V,E.type=$}function yt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Gt(C){const W=C.target;W.removeEventListener("dispose",Gt),Jt(W)}function Jt(C){ue(C),St.remove(C)}function ue(C){const W=St.get(C).programs;W!==void 0&&(W.forEach(function(K){Ut.releaseProgram(K)}),C.isShaderMaterial&&Ut.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,K,V,$,Mt){W===null&&(W=J);const Lt=$.isMesh&&$.matrixWorld.determinant()<0,It=ic(C,W,K,V,$);it.setMaterial(V,Lt);let zt=K.index,Vt=1;V.wireframe===!0&&(zt=qt.getWireframeAttribute(K),Vt=2);const Ot=K.drawRange,Ft=K.attributes.position;let ne=Ot.start*Vt,ze=(Ot.start+Ot.count)*Vt;Mt!==null&&(ne=Math.max(ne,Mt.start*Vt),ze=Math.min(ze,(Mt.start+Mt.count)*Vt)),zt!==null?(ne=Math.max(ne,0),ze=Math.min(ze,zt.count)):Ft!=null&&(ne=Math.max(ne,0),ze=Math.min(ze,Ft.count));const bn=ze-ne;if(bn<0||bn===1/0)return;mt.setup($,V,It,K,zt);let Zn,ie=rt;if(zt!==null&&(Zn=Ct.get(zt),ie=ut,ie.setIndex(Zn)),$.isMesh)V.wireframe===!0?(it.setLineWidth(V.wireframeLinewidth*tt()),ie.setMode(1)):ie.setMode(4);else if($.isLine){let kt=V.linewidth;kt===void 0&&(kt=1),it.setLineWidth(kt*tt()),$.isLineSegments?ie.setMode(1):$.isLineLoop?ie.setMode(2):ie.setMode(3)}else $.isPoints?ie.setMode(0):$.isSprite&&ie.setMode(4);if($.isInstancedMesh)ie.renderInstances(ne,bn,$.count);else if(K.isInstancedBufferGeometry){const kt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,rr=Math.min(K.instanceCount,kt);ie.renderInstances(ne,bn,rr)}else ie.render(ne,bn)},this.compile=function(C,W){function K(V,$,Mt){V.transparent===!0&&V.side===zn&&V.forceSinglePass===!1?(V.side=He,V.needsUpdate=!0,qe(V,$,Mt),V.side=Xn,V.needsUpdate=!0,qe(V,$,Mt),V.side=zn):qe(V,$,Mt)}u=Se.get(C),u.init(),g.push(u),C.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(u.pushLight(V),V.castShadow&&u.pushShadow(V))}),u.setupLights(f.useLegacyLights),C.traverse(function(V){const $=V.material;if($)if(Array.isArray($))for(let Mt=0;Mt<$.length;Mt++){const Lt=$[Mt];K(Lt,C,V)}else K($,C,V)}),g.pop(),u=null};let O=null;function Z(C){O&&O(C)}function nt(){vt.stop()}function ft(){vt.start()}const vt=new Bl;vt.setAnimationLoop(Z),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(C){O=C,_t.setAnimationLoop(C),C===null?vt.stop():vt.start()},_t.addEventListener("sessionstart",nt),_t.addEventListener("sessionend",ft),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(W),W=_t.getCamera()),C.isScene===!0&&C.onBeforeRender(f,C,W,y),u=Se.get(C,g.length),u.init(),g.push(u),et.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),X.setFromProjectionMatrix(et),q=this.localClippingEnabled,F=L.init(this.clippingPlanes,q),d=_e.get(C,m.length),d.init(),m.push(d),Kt(C,W,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(G,R),F===!0&&L.beginShadows();const K=u.state.shadowsArray;if(E.render(K,C,W),F===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(d,C),u.setupLights(f.useLegacyLights),W.isArrayCamera){const V=W.cameras;for(let $=0,Mt=V.length;$<Mt;$++){const Lt=V[$];de(d,C,Lt,Lt.viewport)}}else de(d,C,W);y!==null&&(Et.updateMultisampleRenderTarget(y),Et.updateRenderTargetMipmap(y)),C.isScene===!0&&C.onAfterRender(f,C,W),mt.resetDefaultState(),x=-1,w=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Kt(C,W,K,V){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){V&&B.setFromMatrixPosition(C.matrixWorld).applyMatrix4(et);const Lt=jt.update(C),It=C.material;It.visible&&d.push(C,Lt,It,K,B.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==ht.render.frame&&(C.skeleton.update(),C.skeleton.frame=ht.render.frame),!C.frustumCulled||X.intersectsObject(C))){V&&B.setFromMatrixPosition(C.matrixWorld).applyMatrix4(et);const Lt=jt.update(C),It=C.material;if(Array.isArray(It)){const zt=Lt.groups;for(let Vt=0,Ot=zt.length;Vt<Ot;Vt++){const Ft=zt[Vt],ne=It[Ft.materialIndex];ne&&ne.visible&&d.push(C,Lt,ne,K,B.z,Ft)}}else It.visible&&d.push(C,Lt,It,K,B.z,null)}}const Mt=C.children;for(let Lt=0,It=Mt.length;Lt<It;Lt++)Kt(Mt[Lt],W,K,V)}function de(C,W,K,V){const $=C.opaque,Mt=C.transmissive,Lt=C.transparent;u.setupLightsView(K),F===!0&&L.setGlobalState(f.clippingPlanes,K),Mt.length>0&&Ee($,W,K),V&&it.viewport(S.copy(V)),$.length>0&&hn($,W,K),Mt.length>0&&hn(Mt,W,K),Lt.length>0&&hn(Lt,W,K),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Ee(C,W,K){const V=lt.isWebGL2;Y===null&&(Y=new gi(1024,1024,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")?vs:fi,minFilter:gs,samples:V&&s===!0?4:0}));const $=f.getRenderTarget();f.setRenderTarget(Y),f.clear();const Mt=f.toneMapping;f.toneMapping=Bn,hn(C,W,K),f.toneMapping=Mt,Et.updateMultisampleRenderTarget(Y),Et.updateRenderTargetMipmap(Y),f.setRenderTarget($)}function hn(C,W,K){const V=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Mt=C.length;$<Mt;$++){const Lt=C[$],It=Lt.object,zt=Lt.geometry,Vt=V===null?Lt.material:V,Ot=Lt.group;It.layers.test(K.layers)&&ee(It,W,K,zt,Vt,Ot)}}function ee(C,W,K,V,$,Mt){C.onBeforeRender(f,W,K,V,$,Mt),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(f,W,K,V,C,Mt),$.transparent===!0&&$.side===zn&&$.forceSinglePass===!1?($.side=He,$.needsUpdate=!0,f.renderBufferDirect(K,W,V,$,C,Mt),$.side=Xn,$.needsUpdate=!0,f.renderBufferDirect(K,W,V,$,C,Mt),$.side=zn):f.renderBufferDirect(K,W,V,$,C,Mt),C.onAfterRender(f,W,K,V,$,Mt)}function qe(C,W,K){W.isScene!==!0&&(W=J);const V=St.get(C),$=u.state.lights,Mt=u.state.shadowsArray,Lt=$.state.version,It=Ut.getParameters(C,$.state,Mt,W,K),zt=Ut.getProgramCacheKey(It);let Vt=V.programs;V.environment=C.isMeshStandardMaterial?W.environment:null,V.fog=W.fog,V.envMap=(C.isMeshStandardMaterial?bt:Rt).get(C.envMap||V.environment),Vt===void 0&&(C.addEventListener("dispose",Gt),Vt=new Map,V.programs=Vt);let Ot=Vt.get(zt);if(Ot!==void 0){if(V.currentProgram===Ot&&V.lightsStateVersion===Lt)return un(C,It),Ot}else It.uniforms=Ut.getUniforms(C),C.onBuild(K,It,f),C.onBeforeCompile(It,f),Ot=Ut.acquireProgram(It,zt),Vt.set(zt,Ot),V.uniforms=It.uniforms;const Ft=V.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ft.clippingPlanes=L.uniform),un(C,It),V.needsLights=rc(C),V.lightsStateVersion=Lt,V.needsLights&&(Ft.ambientLightColor.value=$.state.ambient,Ft.lightProbe.value=$.state.probe,Ft.directionalLights.value=$.state.directional,Ft.directionalLightShadows.value=$.state.directionalShadow,Ft.spotLights.value=$.state.spot,Ft.spotLightShadows.value=$.state.spotShadow,Ft.rectAreaLights.value=$.state.rectArea,Ft.ltc_1.value=$.state.rectAreaLTC1,Ft.ltc_2.value=$.state.rectAreaLTC2,Ft.pointLights.value=$.state.point,Ft.pointLightShadows.value=$.state.pointShadow,Ft.hemisphereLights.value=$.state.hemi,Ft.directionalShadowMap.value=$.state.directionalShadowMap,Ft.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ft.spotShadowMap.value=$.state.spotShadowMap,Ft.spotLightMatrix.value=$.state.spotLightMatrix,Ft.spotLightMap.value=$.state.spotLightMap,Ft.pointShadowMap.value=$.state.pointShadowMap,Ft.pointShadowMatrix.value=$.state.pointShadowMatrix);const ne=Ot.getUniforms(),ze=js.seqWithValue(ne.seq,Ft);return V.currentProgram=Ot,V.uniformsList=ze,Ot}function un(C,W){const K=St.get(C);K.outputEncoding=W.outputEncoding,K.instancing=W.instancing,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function ic(C,W,K,V,$){W.isScene!==!0&&(W=J),Et.resetTextureUnits();const Mt=W.fog,Lt=V.isMeshStandardMaterial?W.environment:null,It=y===null?f.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:pi,zt=(V.isMeshStandardMaterial?bt:Rt).get(V.envMap||Lt),Vt=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ot=!!V.normalMap&&!!K.attributes.tangent,Ft=!!K.morphAttributes.position,ne=!!K.morphAttributes.normal,ze=!!K.morphAttributes.color,bn=V.toneMapped?f.toneMapping:Bn,Zn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ie=Zn!==void 0?Zn.length:0,kt=St.get(V),rr=u.state.lights;if(F===!0&&(q===!0||C!==w)){const Be=C===w&&V.id===x;L.setState(V,C,Be)}let fe=!1;V.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==rr.state.version||kt.outputEncoding!==It||$.isInstancedMesh&&kt.instancing===!1||!$.isInstancedMesh&&kt.instancing===!0||$.isSkinnedMesh&&kt.skinning===!1||!$.isSkinnedMesh&&kt.skinning===!0||kt.envMap!==zt||V.fog===!0&&kt.fog!==Mt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==L.numPlanes||kt.numIntersection!==L.numIntersection)||kt.vertexAlphas!==Vt||kt.vertexTangents!==Ot||kt.morphTargets!==Ft||kt.morphNormals!==ne||kt.morphColors!==ze||kt.toneMapping!==bn||lt.isWebGL2===!0&&kt.morphTargetsCount!==ie)&&(fe=!0):(fe=!0,kt.__version=V.version);let $n=kt.currentProgram;fe===!0&&($n=qe(V,W,$));let So=!1,Zi=!1,or=!1;const Ae=$n.getUniforms(),Jn=kt.uniforms;if(it.useProgram($n.program)&&(So=!0,Zi=!0,or=!0),V.id!==x&&(x=V.id,Zi=!0),So||w!==C){if(Ae.setValue(U,"projectionMatrix",C.projectionMatrix),lt.logarithmicDepthBuffer&&Ae.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),w!==C&&(w=C,Zi=!0,or=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Be=Ae.map.cameraPosition;Be!==void 0&&Be.setValue(U,B.setFromMatrixPosition(C.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ae.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||$.isSkinnedMesh)&&Ae.setValue(U,"viewMatrix",C.matrixWorldInverse)}if($.isSkinnedMesh){Ae.setOptional(U,$,"bindMatrix"),Ae.setOptional(U,$,"bindMatrixInverse");const Be=$.skeleton;Be&&(lt.floatVertexTextures?(Be.boneTexture===null&&Be.computeBoneTexture(),Ae.setValue(U,"boneTexture",Be.boneTexture,Et),Ae.setValue(U,"boneTextureSize",Be.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ar=K.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0&&lt.isWebGL2===!0)&&st.update($,K,$n),(Zi||kt.receiveShadow!==$.receiveShadow)&&(kt.receiveShadow=$.receiveShadow,Ae.setValue(U,"receiveShadow",$.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Jn.envMap.value=zt,Jn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Zi&&(Ae.setValue(U,"toneMappingExposure",f.toneMappingExposure),kt.needsLights&&sc(Jn,or),Mt&&V.fog===!0&&Xt.refreshFogUniforms(Jn,Mt),Xt.refreshMaterialUniforms(Jn,V,k,D,Y),js.upload(U,kt.uniformsList,Jn,Et)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(js.upload(U,kt.uniformsList,Jn,Et),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ae.setValue(U,"center",$.center),Ae.setValue(U,"modelViewMatrix",$.modelViewMatrix),Ae.setValue(U,"normalMatrix",$.normalMatrix),Ae.setValue(U,"modelMatrix",$.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Be=V.uniformsGroups;for(let lr=0,oc=Be.length;lr<oc;lr++)if(lt.isWebGL2){const Eo=Be[lr];Q.update(Eo,$n),Q.bind(Eo,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function sc(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function rc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(C,W,K){St.get(C.texture).__webglTexture=W,St.get(C.depthTexture).__webglTexture=K;const V=St.get(C);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=K===void 0,V.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){const K=St.get(C);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,K=0){y=C,_=W,v=K;let V=!0,$=null,Mt=!1,Lt=!1;if(C){const zt=St.get(C);zt.__useDefaultFramebuffer!==void 0?(it.bindFramebuffer(36160,null),V=!1):zt.__webglFramebuffer===void 0?Et.setupRenderTarget(C):zt.__hasExternalTextures&&Et.rebindTextures(C,St.get(C.texture).__webglTexture,St.get(C.depthTexture).__webglTexture);const Vt=C.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Lt=!0);const Ot=St.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?($=Ot[W],Mt=!0):lt.isWebGL2&&C.samples>0&&Et.useMultisampledRTT(C)===!1?$=St.get(C).__webglMultisampledFramebuffer:$=Ot,S.copy(C.viewport),T.copy(C.scissor),M=C.scissorTest}else S.copy(P).multiplyScalar(k).floor(),T.copy(N).multiplyScalar(k).floor(),M=z;if(it.bindFramebuffer(36160,$)&&lt.drawBuffers&&V&&it.drawBuffers(C,$),it.viewport(S),it.scissor(T),it.setScissorTest(M),Mt){const zt=St.get(C.texture);U.framebufferTexture2D(36160,36064,34069+W,zt.__webglTexture,K)}else if(Lt){const zt=St.get(C.texture),Vt=W||0;U.framebufferTextureLayer(36160,36064,zt.__webglTexture,K||0,Vt)}x=-1},this.readRenderTargetPixels=function(C,W,K,V,$,Mt,Lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=St.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(It=It[Lt]),It){it.bindFramebuffer(36160,It);try{const zt=C.texture,Vt=zt.format,Ot=zt.type;if(Vt!==rn&&xt.convert(Vt)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ft=Ot===vs&&(at.has("EXT_color_buffer_half_float")||lt.isWebGL2&&at.has("EXT_color_buffer_float"));if(Ot!==fi&&xt.convert(Ot)!==U.getParameter(35738)&&!(Ot===ui&&(lt.isWebGL2||at.has("OES_texture_float")||at.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-V&&K>=0&&K<=C.height-$&&U.readPixels(W,K,V,$,xt.convert(Vt),xt.convert(Ot),Mt)}finally{const zt=y!==null?St.get(y).__webglFramebuffer:null;it.bindFramebuffer(36160,zt)}}},this.copyFramebufferToTexture=function(C,W,K=0){const V=Math.pow(2,-K),$=Math.floor(W.image.width*V),Mt=Math.floor(W.image.height*V);Et.setTexture2D(W,0),U.copyTexSubImage2D(3553,K,0,0,C.x,C.y,$,Mt),it.unbindTexture()},this.copyTextureToTexture=function(C,W,K,V=0){const $=W.image.width,Mt=W.image.height,Lt=xt.convert(K.format),It=xt.convert(K.type);Et.setTexture2D(K,0),U.pixelStorei(37440,K.flipY),U.pixelStorei(37441,K.premultiplyAlpha),U.pixelStorei(3317,K.unpackAlignment),W.isDataTexture?U.texSubImage2D(3553,V,C.x,C.y,$,Mt,Lt,It,W.image.data):W.isCompressedTexture?U.compressedTexSubImage2D(3553,V,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Lt,W.mipmaps[0].data):U.texSubImage2D(3553,V,C.x,C.y,Lt,It,W.image),V===0&&K.generateMipmaps&&U.generateMipmap(3553),it.unbindTexture()},this.copyTextureToTexture3D=function(C,W,K,V,$=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Mt=C.max.x-C.min.x+1,Lt=C.max.y-C.min.y+1,It=C.max.z-C.min.z+1,zt=xt.convert(V.format),Vt=xt.convert(V.type);let Ot;if(V.isData3DTexture)Et.setTexture3D(V,0),Ot=32879;else if(V.isDataArrayTexture)Et.setTexture2DArray(V,0),Ot=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,V.flipY),U.pixelStorei(37441,V.premultiplyAlpha),U.pixelStorei(3317,V.unpackAlignment);const Ft=U.getParameter(3314),ne=U.getParameter(32878),ze=U.getParameter(3316),bn=U.getParameter(3315),Zn=U.getParameter(32877),ie=K.isCompressedTexture?K.mipmaps[0]:K.image;U.pixelStorei(3314,ie.width),U.pixelStorei(32878,ie.height),U.pixelStorei(3316,C.min.x),U.pixelStorei(3315,C.min.y),U.pixelStorei(32877,C.min.z),K.isDataTexture||K.isData3DTexture?U.texSubImage3D(Ot,$,W.x,W.y,W.z,Mt,Lt,It,zt,Vt,ie.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ot,$,W.x,W.y,W.z,Mt,Lt,It,zt,ie.data)):U.texSubImage3D(Ot,$,W.x,W.y,W.z,Mt,Lt,It,zt,Vt,ie),U.pixelStorei(3314,Ft),U.pixelStorei(32878,ne),U.pixelStorei(3316,ze),U.pixelStorei(3315,bn),U.pixelStorei(32877,Zn),$===0&&V.generateMipmaps&&U.generateMipmap(Ot),it.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Et.setTextureCube(C,0):C.isData3DTexture?Et.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Et.setTexture2DArray(C,0):Et.setTexture2D(C,0),it.unbindTexture()},this.resetState=function(){_=0,v=0,y=null,it.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(go.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class ym extends go{}ym.prototype.isWebGL1Renderer=!0;class vo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new vo(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Mm extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class bm extends Ne{constructor(t,e,n,i,s,r,o,l,c){super(t,e,n,i,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class me extends Ms{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vl extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const kr=new le,Fa=new H,ka=new H;class wm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fa),ka.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ka),e.updateMatrixWorld(),kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Sm extends wm{constructor(){super(new Ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Em extends Vl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Sm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Am extends Vl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tm{constructor(t,e,n=0,i=1/0){this.ray=new Cl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return ro(t,this,n,e),n.sort(Ua),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ro(t[i],this,n,e);return n.sort(Ua),n}}function Ua(a,t){return a.distance-t.distance}function ro(a,t,e,n){if(a.layers.test(t.layers)&&a.raycast(t,e),n===!0){const i=a.children;for(let s=0,r=i.length;s<r;s++)ro(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);const pt={CHUNK_SIZE:16,RENDER_DISTANCE:3,GRAVITY:-19.8,PLAYER_SPEED:12,PLAYER_JUMP_FORCE:8,PLAYER_HEIGHT:1.8,PLAYER_RADIUS:.4,FOVY:75,NEAR:.1,FAR:1e3,PLAYER_MAX_HP:10,FALL_DAMAGE_MIN_SPEED:-12,FALL_DAMAGE_FACTOR:1.5,MAX_MOBS:5,MOB_SPAWN_RADIUS:25,MOB_DESPAWN_RADIUS:35,MAX_DROPPED_ITEMS:30,ITEM_DESPAWN_TIME:30,ITEM_PICKUP_RADIUS:3.5,GAS_WEB_APP_URL:"https://script.google.com/macros/s/AKfycbzKtNw2WKxcfTh8bIqK5-9NqxHXHR9SFn0SRsL366S97-JodCSj_-fCu3rqJzbF2x7Dcw/exec"},Gs={keyForward:"KeyW",keyBackward:"KeyS",keyLeft:"KeyA",keyRight:"KeyD",keyJump:"Space",keyPlaceBlock:"KeyV",keyBreakBlock:"KeyB",invertClicks:!1,enableShadows:!0},Ga="maikurafu_config";class Cm{currentConfig;constructor(){this.currentConfig={...Gs},this.load()}load(){try{const t=localStorage.getItem(Ga);if(t){const e=JSON.parse(t);this.currentConfig={...Gs,...e}}}catch(t){console.error("設定の読み込みに失敗しました。デフォルト設定を使用します。",t),this.currentConfig={...Gs}}return this.currentConfig}getConfig(){return this.currentConfig}save(t){this.currentConfig={...this.currentConfig,...t};try{localStorage.setItem(Ga,JSON.stringify(this.currentConfig))}catch(e){console.error("設定の保存に失敗しました。",e)}}reset(){return this.currentConfig={...Gs},this.save(this.currentConfig),this.currentConfig}}const _n=new Cm;class Lm{scene;camera;renderer;container;constructor(t){const e=document.getElementById(t);if(!e)throw new Error(`Container element with id "${t}" not found.`);this.container=e,this.initScene(),this.initCamera(),this.initRenderer(),window.addEventListener("resize",this.onWindowResize.bind(this))}initScene(){this.scene=new Mm,this.scene.background=new Ht(8306926),this.scene.fog=new vo(8306926,.015)}initCamera(){const t=this.container.clientWidth/this.container.clientHeight;this.camera=new Ze(pt.FOVY,t,pt.NEAR,pt.FAR),this.camera.position.set(0,5,10),this.camera.lookAt(0,0,0)}initRenderer(){const t=_n.getConfig();this.renderer=new go({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=t.enableShadows,this.renderer.shadowMap.type=ml,this.container.appendChild(this.renderer.domElement)}onWindowResize(){const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}render(){this.renderer.render(this.scene,this.camera)}}var I=(a=>(a[a.AIR=0]="AIR",a[a.GROUND=1]="GROUND",a[a.DIRT=2]="DIRT",a[a.STONE=3]="STONE",a[a.WOOD=4]="WOOD",a[a.LEAVES=5]="LEAVES",a[a.PLANK=6]="PLANK",a[a.BRICK=7]="BRICK",a[a.SAND=8]="SAND",a[a.COAL_ORE=9]="COAL_ORE",a[a.TORCH=10]="TORCH",a[a.GLASS=11]="GLASS",a[a.DOOR_CLOSED=12]="DOOR_CLOSED",a[a.DOOR_OPEN=13]="DOOR_OPEN",a[a.SWORD=14]="SWORD",a[a.STAIRS=15]="STAIRS",a[a.FENCE=16]="FENCE",a[a.BED_HEAD=17]="BED_HEAD",a[a.BED_FOOT=18]="BED_FOOT",a[a.FURNACE=19]="FURNACE",a[a.CHEST=20]="CHEST",a[a.WATER=21]="WATER",a[a.DIAMOND_SWORD=22]="DIAMOND_SWORD",a[a.HAMMER=23]="HAMMER",a))(I||{});const Ui={0:{id:0,name:"くうき",isSolid:!1,isTransparent:!0,uvs:{front:0,back:0,left:0,right:0,top:0,bottom:0}},1:{id:1,name:"くさ",isSolid:!0,isTransparent:!1,uvs:{front:3,back:3,left:3,right:3,top:0,bottom:1}},2:{id:2,name:"つち",isSolid:!0,isTransparent:!1,uvs:{front:1,back:1,left:1,right:1,top:1,bottom:1}},3:{id:3,name:"いし",isSolid:!0,isTransparent:!1,uvs:{front:2,back:2,left:2,right:2,top:2,bottom:2}},4:{id:4,name:"まるた",isSolid:!0,isTransparent:!1,uvs:{front:4,back:4,left:4,right:4,top:5,bottom:5}},5:{id:5,name:"はっぱ",isSolid:!0,isTransparent:!1,uvs:{front:6,back:6,left:6,right:6,top:6,bottom:6}},6:{id:6,name:"いた",isSolid:!0,isTransparent:!1,uvs:{front:9,back:9,left:9,right:9,top:9,bottom:9}},7:{id:7,name:"れんが",isSolid:!0,isTransparent:!1,uvs:{front:7,back:7,left:7,right:7,top:7,bottom:7}},8:{id:8,name:"すな",isSolid:!0,isTransparent:!1,uvs:{front:8,back:8,left:8,right:8,top:8,bottom:8}},9:{id:9,name:"せきたん",isSolid:!0,isTransparent:!1,uvs:{front:10,back:10,left:10,right:10,top:10,bottom:10}},10:{id:10,name:"たいまつ",isSolid:!1,isTransparent:!0,lightLevel:14,uvs:{front:11,back:11,left:11,right:11,top:11,bottom:11}},11:{id:11,name:"ガラス",isSolid:!0,isTransparent:!0,uvs:{front:12,back:12,left:12,right:12,top:12,bottom:12}},12:{id:12,name:"ドア（しめる）",isSolid:!0,isTransparent:!0,uvs:{front:13,back:13,left:13,right:13,top:13,bottom:13}},13:{id:13,name:"ドア（あける）",isSolid:!1,isTransparent:!0,uvs:{front:13,back:13,left:13,right:13,top:13,bottom:13}},14:{id:14,name:"いしのけん",isSolid:!1,isTransparent:!0,uvs:{front:14,back:14,left:14,right:14,top:14,bottom:14}},15:{id:15,name:"きのかいだん",isSolid:!0,isTransparent:!0,uvs:{front:9,back:9,left:9,right:9,top:9,bottom:9}},16:{id:16,name:"さく",isSolid:!0,isTransparent:!0,uvs:{front:16,back:16,left:16,right:16,top:16,bottom:16}},17:{id:17,name:"ベッド（まくら）",isSolid:!0,isTransparent:!0,uvs:{front:18,back:18,left:18,right:18,top:17,bottom:16}},18:{id:18,name:"ベッド（あしもと）",isSolid:!0,isTransparent:!0,uvs:{front:18,back:18,left:18,right:18,top:18,bottom:16}},19:{id:19,name:"かまど",isSolid:!0,isTransparent:!1,uvs:{front:19,back:2,left:2,right:2,top:2,bottom:2}},20:{id:20,name:"チェスト",isSolid:!0,isTransparent:!0,uvs:{front:20,back:21,left:21,right:21,top:21,bottom:16}},21:{id:21,name:"みず",isSolid:!1,isTransparent:!0,uvs:{front:22,back:22,left:22,right:22,top:22,bottom:22}},22:{id:22,name:"ダイヤのけん",isSolid:!1,isTransparent:!0,uvs:{front:23,back:23,left:23,right:23,top:23,bottom:23}},23:{id:23,name:"ハンマー",isSolid:!1,isTransparent:!0,uvs:{front:24,back:24,left:24,right:24,top:24,bottom:24}}},Rm=[{dir:[1,0,0],corners:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uvName:"right"},{dir:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uvName:"left"},{dir:[0,1,0],corners:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],uvName:"top"},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uvName:"bottom"},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uvName:"front"},{dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uvName:"back"}],Va={top:1,bottom:.5,front:.8,back:.8,left:.65,right:.65};class Ha{x;y;z;blocks;mesh=null;isDirty=!0;size=pt.CHUNK_SIZE;constructor(t,e,n){this.x=t,this.y=e,this.z=n,this.blocks=new Uint8Array(this.size*this.size*this.size)}getIndex(t,e,n){return t+e*this.size+n*this.size*this.size}isOutOfBounds(t,e,n){return t<0||t>=this.size||e<0||e>=this.size||n<0||n>=this.size}setBlock(t,e,n,i){if(this.isOutOfBounds(t,e,n))return;const s=this.getIndex(t,e,n);this.blocks[s]!==i&&(this.blocks[s]=i,this.isDirty=!0)}getBlock(t,e,n){if(this.isOutOfBounds(t,e,n))return I.AIR;const i=this.getIndex(t,e,n);return this.blocks[i]}generateMesh(t,e){if(!this.isDirty&&this.mesh)return this.mesh;const n=[],i=[],s=[],r=[],o=[];let l=0;const c=4,h=7,d=1/c,u=1/h,m=[],g=2;for(let _=-g;_<this.size+g;_++)for(let v=-g;v<this.size+g;v++)for(let y=-g;y<this.size+g;y++){const x=this.x*this.size+_,w=this.y*this.size+v,S=this.z*this.size+y;t.getBlock(x,w,S)===I.TORCH&&m.push({x:x+.5,y:w+.5,z:S+.5})}const f=(_,v,y,x,w,S,T)=>{const M=[{dir:[1,0,0],corners:[[x,v,S],[x,v,y],[x,w,y],[x,w,S]],uvName:"right"},{dir:[-1,0,0],corners:[[_,v,y],[_,v,S],[_,w,S],[_,w,y]],uvName:"left"},{dir:[0,1,0],corners:[[_,w,S],[x,w,S],[x,w,y],[_,w,y]],uvName:"top"},{dir:[0,-1,0],corners:[[_,v,y],[x,v,y],[x,v,S],[_,v,S]],uvName:"bottom"},{dir:[0,0,1],corners:[[_,v,S],[x,v,S],[x,w,S],[_,w,S]],uvName:"front"},{dir:[0,0,-1],corners:[[x,v,y],[_,v,y],[_,w,y],[x,w,y]],uvName:"back"}];for(const A of M){for(const z of A.corners){n.push(z[0],z[1],z[2]),i.push(...A.dir);const X=Va[A.uvName];let F=0;for(let et=0;et<m.length;et++){const B=m[et],J=z[0]-B.x,tt=z[1]-B.y,U=z[2]-B.z,ot=Math.abs(J)+Math.abs(tt)+Math.abs(U),at=Math.max(0,1-ot/8);at>F&&(F=at)}const q=Math.min(1,.52+F*.48),Y=X*q;s.push(Y,Y*(.93-(1-F)*.08),Y*(.85-(1-F)*.15))}const D=T%c,k=Math.floor(T/c),G=D*d,R=1-(k+1)*u,P=G+d,N=R+u;r.push(G,R,P,R,P,N,G,N),o.push(l,l+1,l+2,l,l+2,l+3),l+=4}};for(let _=0;_<this.size;_++)for(let v=0;v<this.size;v++)for(let y=0;y<this.size;y++){const x=this.getBlock(_,v,y);if(x===I.AIR)continue;const w=Ui[x],S=this.x*this.size+_,T=this.y*this.size+v,M=this.z*this.size+y;if(x===I.STAIRS){f(S,T,M,S+1,T+.5,M+1,9),f(S,T+.5,M,S+1,T+1,M+.5,9);continue}if(x===I.FENCE){const D=(J,tt)=>{const U=_+J,ot=v,at=y+tt;let lt;if(this.isOutOfBounds(U,ot,at)?lt=t.getBlock(S+J,T,M+tt):lt=this.getBlock(U,ot,at),lt===I.AIR)return!1;if(lt===I.FENCE||lt===I.DOOR_CLOSED||lt===I.DOOR_OPEN)return!0;const it=Ui[lt];return it?it.isSolid&&!it.isTransparent:!1},k=D(0,-1),G=D(0,1),R=D(1,0),P=D(-1,0),N=.375,z=.625;f(S+N,T,M+N,S+z,T+1,M+z,16);const X=.4375,F=.5625,q=.75,Y=.875,et=.4375,B=.5625;k&&(f(S+X,T+q,M,S+F,T+Y,M+N,16),f(S+X,T+et,M,S+F,T+B,M+N,16)),G&&(f(S+X,T+q,M+z,S+F,T+Y,M+1,16),f(S+X,T+et,M+z,S+F,T+B,M+1,16)),R&&(f(S+z,T+q,M+X,S+1,T+Y,M+F,16),f(S+z,T+et,M+X,S+1,T+B,M+F,16)),P&&(f(S,T+q,M+X,S+N,T+Y,M+F,16),f(S,T+et,M+X,S+N,T+B,M+F,16));continue}if(x===I.BED_HEAD||x===I.BED_FOOT){const D=x===I.BED_HEAD?17:18,k=18,G=.5625;f(S,T,M,S+1,T+G,M+1,k);{const R=D,P=R%c,N=Math.floor(R/c),z=P*d,X=1-(N+1)*u,F=z+d,q=X+u,Y=[[S,T+G,M+1],[S+1,T+G,M+1],[S+1,T+G,M],[S,T+G,M]];for(const et of Y)n.push(et[0],et[1],et[2]),i.push(0,1,0),s.push(.95,.95,.95);r.push(z,X,F,X,F,q,z,q),o.push(l,l+1,l+2,l,l+2,l+3),l+=4}continue}if(x===I.CHEST){const A=S+.0625,D=M+.0625,k=S+.9375,G=M+.9375;f(A,T,D,k,T+.875,G,21);{const P=20%c,N=Math.floor(20/c),z=P*d,X=1-(N+1)*u,F=z+d,q=X+u,Y=[[A,T,G],[k,T,G],[k,T+.875,G],[A,T+.875,G]];for(const et of Y)n.push(et[0],et[1],et[2]),i.push(0,0,1),s.push(.85,.85,.85);r.push(z,X,F,X,F,q,z,q),o.push(l,l+1,l+2,l,l+2,l+3),l+=4}f(A,T+.875,D,k,T+.9375,G,21);continue}for(const A of Rm){const D=_+A.dir[0],k=v+A.dir[1],G=y+A.dir[2];let R=!1;if(x===I.TORCH||x===I.DOOR_CLOSED||x===I.DOOR_OPEN)R=!0;else{let P;this.isOutOfBounds(D,k,G)?P=t.getBlock(S+A.dir[0],T+A.dir[1],M+A.dir[2]):P=this.getBlock(D,k,G);const N=Ui[P];!N.isSolid||N.isTransparent?w.isTransparent&&P===x?R=!1:R=!0:R=!1}if(R){const P=x===I.TORCH,N=x===I.DOOR_CLOSED,z=x===I.DOOR_OPEN;let X="NS";(N||z)&&(X=t.getDoorOrientation(S,T,M));for(const it of A.corners){let ht=S+it[0],St=T+it[1],Et=M+it[2];if(P)ht=S+.5+(it[0]-.5)*.125,St=T+it[1]*.625,Et=M+.5+(it[2]-.5)*.125;else if(N)X==="EW"?ht=S+.5+(it[0]-.5)*.14:Et=M+.5+(it[2]-.5)*.14;else if(z)X==="EW"?Et=M+.5+(it[2]-.5)*.14:ht=S+.5+(it[0]-.5)*.14;else if(x===I.WATER&&it[1]===1){let L;this.isOutOfBounds(_,v+1,y)?L=t.getBlock(S,T+1,M):L=this.getBlock(_,v+1,y),L!==I.WATER&&(St-=.15)}n.push(ht,St,Et),i.push(...A.dir);const Rt=Va[A.uvName];let bt=0;for(let L=0;L<m.length;L++){const E=m[L],j=ht-E.x,st=St-E.y,rt=Et-E.z,ut=Math.abs(j)+Math.abs(st)+Math.abs(rt),xt=Math.max(0,1-ut/8);xt>bt&&(bt=xt)}const Ct=x===I.TORCH,qt=Ct?1:bt,jt=Math.min(1,.52+qt*.48),Ut=Rt*jt,Xt=Ut,_e=Ut*(Ct?.9:.93-(1-qt)*.08),Se=Ut*(Ct?.6:.85-(1-qt)*.15);s.push(Xt,_e,Se)}const F=w.uvs[A.uvName],q=F%c,Y=Math.floor(F/c),et=q*d,B=1-(Y+1)*u,J=et+d,tt=B+u;let U=et,ot=B,at=J,lt=tt;if(P){const it=d/16,ht=u/16;U=et+7*it,at=et+9*it,A.uvName==="top"?(lt=tt-4*ht,ot=tt-6*ht):A.uvName==="bottom"?(lt=tt-14*ht,ot=tt-16*ht):(lt=tt-6*ht,ot=tt-16*ht)}r.push(U,ot,at,ot,at,lt,U,lt),o.push(l,l+1,l+2,l,l+2,l+3),l+=4}}}if(n.length===0)return this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null),this.isDirty=!1,null;const p=new Kn;return p.setAttribute("position",new an(n,3)),p.setAttribute("normal",new an(i,3)),p.setAttribute("color",new an(s,3)),p.setAttribute("uv",new an(r,2)),p.setIndex(o),this.mesh?(this.mesh.geometry.dispose(),this.mesh.geometry=p):(this.mesh=new Pt(p,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0),this.isDirty=!1,this.mesh}}function Dm(){const a=document.createElement("canvas"),t=16,e=4,n=7;a.width=t*e,a.height=t*n;const i=a.getContext("2d"),s=(bt,Ct,qt,jt,Ut,Xt)=>{const _e=bt*t,Se=Ct*t;for(let L=0;L<t;L++)for(let E=0;E<t;E++){const j=(Math.random()-.5)*Xt,st=Math.max(0,Math.min(255,Math.floor(qt+j))),rt=Math.max(0,Math.min(255,Math.floor(jt+j))),ut=Math.max(0,Math.min(255,Math.floor(Ut+j)));i.fillStyle=`rgb(${st}, ${rt}, ${ut})`,i.fillRect(_e+L,Se+E,1,1)}};s(0,0,100,180,70,30),s(1,0,130,95,65,20),s(2,0,120,120,120,20),s(3,0,130,95,65,20);const r=3*t;for(let bt=0;bt<t;bt++){const Ct=3+Math.floor(Math.random()*3);for(let qt=0;qt<Ct;qt++){const jt=(Math.random()-.5)*30,Ut=Math.max(0,Math.min(255,Math.floor(100+jt))),Xt=Math.max(0,Math.min(255,Math.floor(180+jt))),_e=Math.max(0,Math.min(255,Math.floor(70+jt)));i.fillStyle=`rgb(${Ut}, ${Xt}, ${_e})`,i.fillRect(r+bt,qt,1,1)}}s(0,1,100,70,45,15);const o=0*t,l=1*t;for(let bt=0;bt<t;bt++)for(let Ct=0;Ct<t;Ct++)(bt+Ct*2)%5===0&&(i.fillStyle=`rgb(${70+Math.random()*10}, ${50+Math.random()*10}, ${30+Math.random()*10})`,i.fillRect(o+bt,l+Ct,1,1));s(1,1,185,150,105,10);const c=1*t,h=1*t;i.fillStyle="rgb(115, 80, 50)";for(let bt=0;bt<t;bt++)for(let Ct=0;Ct<t;Ct++){const qt=bt-7.5,jt=Ct-7.5,Ut=Math.sqrt(qt*qt+jt*jt);(Math.abs(Ut-3)<.6||Math.abs(Ut-6)<.6)&&i.fillRect(c+bt,h+Ct,1,1)}s(2,1,35,115,30,20);const d=2*t,u=1*t;for(let bt=0;bt<30;bt++){const Ct=Math.floor(Math.random()*t),qt=Math.floor(Math.random()*t);i.fillStyle=`rgb(${15+Math.random()*10}, ${45+Math.random()*10}, ${10+Math.random()*10})`,i.fillRect(d+Ct,u+qt,1,1)}s(3,1,155,75,55,15);const m=3*t,g=1*t;i.fillStyle="rgb(205, 200, 195)",i.fillRect(m,g+4,t,1),i.fillRect(m,g+9,t,1),i.fillRect(m,g+14,t,1),i.fillRect(m+4,g,1,4),i.fillRect(m+12,g,1,4),i.fillRect(m+8,g+5,1,4),i.fillRect(m+4,g+10,1,4),i.fillRect(m+12,g+10,1,4),i.fillRect(m+8,g+15,1,1),s(0,2,220,205,150,30),s(1,2,190,145,85,12);const f=1*t,p=2*t;i.fillStyle="rgb(140, 100, 55)",i.fillRect(f,p+4,t,1),i.fillRect(f,p+8,t,1),i.fillRect(f,p+12,t,1),s(2,2,120,120,120,20);const _=2*t,v=2*t;i.fillStyle="rgb(40, 40, 40)",[[2,3],[3,3],[3,4],[8,8],[9,8],[9,9],[8,9],[11,2],[12,3],[4,12],[5,11],[5,12]].forEach(([bt,Ct])=>{i.fillRect(_+bt,v+Ct,1,1)});const x=3*t,w=2*t;i.fillStyle="rgba(0, 0, 0, 0)",i.clearRect(x,w,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(x+7,w+8,2,8),i.fillStyle="rgb(255, 120, 0)",i.fillRect(x+7,w+6,2,2),i.fillStyle="rgb(255, 230, 0)",i.fillRect(x+7,w+7,2,1),i.fillStyle="rgb(255, 240, 100)",i.fillRect(x+7,w+4,2,2),i.fillStyle="rgb(60, 40, 20)",i.fillRect(x+7,w+14,2,2);const S=0*t,T=3*t;i.clearRect(S,T,t,t),i.fillStyle="rgba(240, 248, 255, 0.8)",i.fillRect(S,T,t,1),i.fillRect(S,T+t-1,t,1),i.fillRect(S,T,1,t),i.fillRect(S+t-1,T,1,t),i.fillStyle="rgba(255, 255, 255, 0.6)",i.fillRect(S+3,T+3,1,1),i.fillRect(S+4,T+2,1,1),i.fillRect(S+2,T+4,1,1),i.fillRect(S+10,T+10,1,1),i.fillRect(S+11,T+9,1,1),i.fillRect(S+9,T+11,1,1);const M=1*t,A=3*t;i.clearRect(M,A,t,t),i.fillStyle="rgb(130, 85, 45)",i.fillRect(M,A,t,t),i.fillStyle="rgb(90, 55, 25)",i.fillRect(M,A,t,1),i.fillRect(M,A+t-1,t,1),i.fillRect(M,A,1,t),i.fillRect(M+t-1,A,1,t),i.fillRect(M+t/2-1,A,2,t),i.clearRect(M+2,A+2,4,5),i.clearRect(M+10,A+2,4,5),i.fillStyle="rgba(255, 255, 255, 0.4)",i.fillRect(M+2,A+2,4,1),i.fillRect(M+10,A+2,4,1),i.fillStyle="rgb(230, 190, 50)",i.fillRect(M+13,A+9,2,2),i.fillStyle="rgb(180, 140, 20)",i.fillRect(M+14,A+11,1,1);const D=2*t,k=3*t;i.clearRect(D,k,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(D+2,k+13,1,1),i.fillRect(D+3,k+12,1,1),i.fillRect(D+4,k+11,1,1),i.fillStyle="rgb(90, 60, 30)",i.fillRect(D+1,k+14,1,1),i.fillStyle="rgb(230, 190, 50)",i.fillRect(D+5,k+10,1,1),i.fillRect(D+3,k+11,1,1),i.fillRect(D+4,k+12,1,1),i.fillRect(D+5,k+12,1,1),i.fillRect(D+2,k+12,1,1),i.fillRect(D+3,k+13,1,1),i.fillStyle="rgb(120, 120, 120)",[[5,11],[6,10],[7,9],[8,8],[9,7],[10,6],[11,5],[12,4],[13,3]].forEach(([bt,Ct])=>{i.fillRect(D+bt,k+Ct,1,1)}),i.fillStyle="rgb(180, 180, 180)";const R=[[5,10],[6,9],[7,8],[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1]];R.forEach(([bt,Ct])=>{i.fillRect(D+bt,k+Ct,1,1)}),i.fillStyle="rgb(240, 240, 240)";const P=[[4,9],[5,8],[6,7],[7,6],[8,5],[9,4],[10,3],[11,2],[12,1],[13,0]];P.forEach(([bt,Ct])=>{i.fillRect(D+bt,k+Ct,1,1)}),s(0,4,190,145,85,12);const N=0*t,z=4*t;i.fillStyle="rgb(140, 100, 55)",i.fillRect(N,z+4,t,1),i.fillRect(N,z+8,t,1),i.fillRect(N,z+12,t,1);const X=1*t,F=4*t;i.fillStyle="rgb(255, 255, 255)",i.fillRect(X,F,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(X,F,t,1),i.fillRect(X,F+t-1,t,1),i.fillRect(X,F,1,t),i.fillRect(X+t-1,F,1,t),i.fillStyle="rgb(220, 220, 220)",i.fillRect(X+2,F+6,t-4,1),i.fillRect(X+2,F+10,t-4,1);const q=2*t,Y=4*t;i.fillStyle="rgb(200, 30, 30)",i.fillRect(q,Y,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(q,Y,t,1),i.fillRect(q,Y+t-1,t,1),i.fillRect(q,Y,1,t),i.fillRect(q+t-1,Y,1,t),s(3,4,120,115,110,15);const et=3*t,B=4*t;i.fillStyle="rgb(75, 75, 85)",i.fillRect(et+1,B+1,t-2,2),i.fillStyle="rgb(25, 20, 15)",i.fillRect(et+3,B+5,10,8),i.fillStyle="rgb(255, 120, 0)",i.fillRect(et+5,B+7,3,4),i.fillRect(et+8,B+8,3,3),i.fillStyle="rgb(255, 220, 0)",i.fillRect(et+6,B+8,2,2),s(0,5,160,115,65,12);const J=0*t,tt=5*t;i.fillStyle="rgb(100, 65, 30)",i.fillRect(J,tt,t,1),i.fillRect(J,tt+t-1,t,1),i.fillRect(J,tt,1,t),i.fillRect(J+t-1,tt,1,t),i.fillRect(J+1,tt+5,t-2,1),i.fillStyle="rgb(220, 180, 40)",i.fillRect(J+6,tt+2,4,3),i.fillStyle="rgb(160, 120, 20)",i.fillRect(J+7,tt+4,2,2),s(1,5,160,115,65,12);const U=1*t,ot=5*t;i.fillStyle="rgb(100, 65, 30)",i.fillRect(U,ot,t,1),i.fillRect(U,ot+t-1,t,1),i.fillRect(U,ot,1,t),i.fillRect(U+t-1,ot,1,t),i.fillRect(U+1,ot+5,t-2,1);const at=2*t,lt=5*t;s(2,5,40,100,200,20),i.fillStyle="rgba(20, 80, 220, 0.4)",i.fillRect(at,lt,t,t),i.fillStyle="rgba(255, 255, 255, 0.3)",i.fillRect(at+2,lt+3,4,1),i.fillRect(at+8,lt+7,5,1),i.fillRect(at+4,lt+12,3,1);const it=3*t,ht=5*t;i.clearRect(it,ht,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(it+2,ht+13,1,1),i.fillRect(it+3,ht+12,1,1),i.fillRect(it+4,ht+11,1,1),i.fillStyle="rgb(0, 136, 255)",i.fillRect(it+5,ht+10,1,1),i.fillRect(it+3,ht+11,1,1),i.fillRect(it+4,ht+12,1,1),i.fillRect(it+5,ht+12,1,1),i.fillRect(it+2,ht+12,1,1),i.fillRect(it+3,ht+13,1,1),i.fillStyle="rgb(0, 255, 255)",R.forEach(([bt,Ct])=>{i.fillRect(it+bt,ht+Ct,1,1)}),i.fillStyle="rgb(240, 255, 255)",P.forEach(([bt,Ct])=>{i.fillRect(it+bt,ht+Ct,1,1)});const St=0*t,Et=6*t;i.clearRect(St,Et,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(St+7,Et+6,2,8),i.fillStyle="rgb(85, 85, 85)",i.fillRect(St+4,Et+2,8,4),i.fillStyle="rgb(120, 120, 120)",i.fillRect(St+4,Et+2,8,1);const Rt=new bm(a);return Rt.magFilter=ve,Rt.minFilter=ve,Rt.wrapS=Ge,Rt.wrapT=Ge,Rt}class Pm{permutation;constructor(t=0){this.permutation=new Array(512);const e=new Array(256);let n=t;for(let i=0;i<256;i++)n=(n*1103515245+12345)%2147483648,e[i]=i;for(let i=255;i>0;i--){n=(n*1103515245+12345)%2147483648;const s=n%(i+1),r=e[i];e[i]=e[s],e[s]=r}for(let i=0;i<512;i++)this.permutation[i]=e[i&255]}fade(t){return t*t*t*(t*(t*6-15)+10)}lerp(t,e,n){return e+t*(n-e)}grad(t,e,n){const i=t&15,s=i<8?e:n,r=i<4?n:i===12||i===14?e:0;return(i&1?-s:s)+(i&2?-r:r)}noise2D(t,e){const n=Math.floor(t)&255,i=Math.floor(e)&255;t-=Math.floor(t),e-=Math.floor(e);const s=this.fade(t),r=this.fade(e),o=this.permutation[n]+i,l=this.permutation[n+1]+i;return this.lerp(r,this.lerp(s,this.grad(this.permutation[o],t,e),this.grad(this.permutation[l],t-1,e)),this.lerp(s,this.grad(this.permutation[o+1],t,e-1),this.grad(this.permutation[l+1],t-1,e-1)))}fbm2D(t,e,n,i=.5,s=1){let r=0,o=s,l=1,c=0;for(let h=0;h<n;h++)r+=this.noise2D(t*o,e*o)*l,c+=l,l*=i,o*=2;return r/c}}class Im{noise;constructor(t=12345){this.noise=new Pm(t)}generateV1(t){const e=pt.CHUNK_SIZE,n=t.y*e;for(let i=0;i<e;i++)for(let s=0;s<e;s++)for(let r=0;r<e;r++){const o=n+r;let l=I.AIR;if(o<-4){const c=Math.sin(t.x*17.13+t.y*31.41+t.z*53.57+i*7.1+r*13.3+s*19.9)*43758.5453;l=c-Math.floor(c)<.05?I.COAL_ORE:I.STONE}else o<0?l=I.DIRT:o===0&&(l=I.GROUND);t.setBlock(i,r,s,l)}this.generateTrees(t,0)}generateV2(t){const e=pt.CHUNK_SIZE,n=t.x*e,i=t.y*e,s=t.z*e;for(let r=0;r<e;r++)for(let o=0;o<e;o++){const l=n+r,c=s+o,h=this.noise.fbm2D(l,c,4,.5,.02),d=Math.floor(h*25)-2;for(let u=0;u<e;u++){const m=i+u;let g=I.AIR;if(m<d-3){const f=Math.sin(t.x*17.13+t.y*31.41+t.z*53.57+r*7.1+u*13.3+o*19.9)*43758.5453;g=f-Math.floor(f)<.05?I.COAL_ORE:I.STONE}else m<d?g=I.DIRT:m===d&&(g=I.GROUND);t.setBlock(r,u,o,g)}if(d>=i&&d<i+e){const u=d-i;this.tryGenerateTreeAt(t,r,u,o,l,c)}}}generateTrees(t,e){const n=pt.CHUNK_SIZE,i=t.y*n;if(e>=i&&e<i+n){const s=e-i;for(let r=2;r<n-2;r++)for(let o=2;o<n-2;o++)this.tryGenerateTreeAt(t,r,s,o,t.x*n+r,t.z*n+o)}}tryGenerateTreeAt(t,e,n,i,s,r){if(e<2||e>=pt.CHUNK_SIZE-2||i<2||i>=pt.CHUNK_SIZE-2||n+5>=pt.CHUNK_SIZE)return;const o=Math.sin(s*12.9898+r*78.233)*43758.5453;if(o-Math.floor(o)<.015){const c=n+1;t.setBlock(e,c,i,I.WOOD),t.setBlock(e,c+1,i,I.WOOD),t.setBlock(e,c+2,i,I.WOOD);const h=c+2;t.setBlock(e+1,h,i,I.LEAVES),t.setBlock(e-1,h,i,I.LEAVES),t.setBlock(e,h,i+1,I.LEAVES),t.setBlock(e,h,i-1,I.LEAVES);for(let d=-1;d<=1;d++)for(let u=-1;u<=1;u++)(d!==0||u!==0)&&t.setBlock(e+d,h+1,i+u,I.LEAVES);t.setBlock(e,h+1,i,I.LEAVES),t.setBlock(e,h+2,i,I.LEAVES),t.setBlock(e+1,h+2,i,I.LEAVES),t.setBlock(e-1,h+2,i,I.LEAVES),t.setBlock(e,h+2,i+1,I.LEAVES),t.setBlock(e,h+2,i-1,I.LEAVES)}}}let Nm=class{chunks=new Map;scene;material;modifiedBlocks=new Map;doorOrientations=new Map;chunkVersions=new Map;terrainGenerator;constructor(t){this.scene=t;const e=Dm(),n=new me({map:e,vertexColors:!0,roughness:.85,metalness:.05,alphaTest:.5,side:zn});n.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("vec3 totalEmissiveRadiance = emissive;",`
        // 頂点カラーから松明光成分（最低輝度0.52を超える部分）を抽出し、自己発光として加算する
        vec3 torchLight = max(vec3(0.0), vColor - vec3(0.52));
        // 温かみのあるオレンジ色の自己発光を1.5倍で加算（夜間でも綺麗に光る）
        vec3 totalEmissiveRadiance = emissive + torchLight * 1.5;
        `)},this.material=n,this.terrainGenerator=new Im}getChunkKey(t,e,n){return`${t},${e},${n}`}getChunk(t,e,n){return this.chunks.get(this.getChunkKey(t,e,n))}getBlock(t,e,n){const i=Math.floor(t/pt.CHUNK_SIZE),s=Math.floor(e/pt.CHUNK_SIZE),r=Math.floor(n/pt.CHUNK_SIZE),o=this.getChunk(i,s,r);if(!o)return I.AIR;const l=(t%pt.CHUNK_SIZE+pt.CHUNK_SIZE)%pt.CHUNK_SIZE,c=(e%pt.CHUNK_SIZE+pt.CHUNK_SIZE)%pt.CHUNK_SIZE,h=(n%pt.CHUNK_SIZE+pt.CHUNK_SIZE)%pt.CHUNK_SIZE;return o.getBlock(l,c,h)}setBlock(t,e,n,i){const s=Math.floor(t/pt.CHUNK_SIZE),r=Math.floor(e/pt.CHUNK_SIZE),o=Math.floor(n/pt.CHUNK_SIZE),l=this.getChunkKey(s,r,o),c=pt.CHUNK_SIZE,h=(t%c+c)%c,d=(e%c+c)%c,u=(n%c+c)%c,m=h+d*c+u*c*c;let g=this.modifiedBlocks.get(l);g||(g=new Map,this.modifiedBlocks.set(l,g)),g.set(m,i);let f=this.getChunk(s,r,o);f||(f=new Ha(s,r,o),this.chunks.set(l,f)),f.setBlock(h,d,u,i),this.updateChunkMesh(s,r,o),h===0&&this.updateChunkMesh(s-1,r,o),h===pt.CHUNK_SIZE-1&&this.updateChunkMesh(s+1,r,o),d===0&&this.updateChunkMesh(s,r-1,o),d===pt.CHUNK_SIZE-1&&this.updateChunkMesh(s,r+1,o),u===0&&this.updateChunkMesh(s,r,o-1),u===pt.CHUNK_SIZE-1&&this.updateChunkMesh(s,r,o+1)}setDoorOrientation(t,e,n,i){this.doorOrientations.set(`${t},${e},${n}`,i)}getDoorOrientation(t,e,n){return this.doorOrientations.get(`${t},${e},${n}`)??"NS"}removeDoorOrientation(t,e,n){this.doorOrientations.delete(`${t},${e},${n}`)}updateChunkMesh(t,e,n){const i=this.getChunk(t,e,n);if(!i)return;const s=i.mesh,r=i.generateMesh(this,this.material);r&&!s?this.scene.add(r):!r&&s&&this.scene.remove(s)}generateWorldAround(t,e){const n=Math.floor(t/pt.CHUNK_SIZE),i=Math.floor(e/pt.CHUNK_SIZE),s=pt.RENDER_DISTANCE,r=new Set;for(let l=n-s;l<=n+s;l++)for(let c=i-s;c<=i+s;c++)for(let h=-1;h<=1;h++){const d=this.getChunkKey(l,h,c);if(r.add(d),!this.chunks.has(d)){const u=new Ha(l,h,c);this.generateChunkTerrain(u),this.chunks.set(d,u)}}for(const[l,c]of this.chunks.entries())r.has(l)||(c.mesh&&(this.scene.remove(c.mesh),c.mesh.geometry.dispose(),c.mesh=null),this.chunks.delete(l));for(let l=n-s;l<=n+s;l++)for(let c=i-s;c<=i+s;c++)for(let h=-1;h<=1;h++)this.updateChunkMesh(l,h,c);const o=document.getElementById("chunks-display");o&&(o.textContent=this.chunks.size.toString())}generateChunkTerrain(t){const e=this.getChunkKey(t.x,t.y,t.z);let n=this.chunkVersions.get(e);const i=6;Math.abs(t.x)<=i&&Math.abs(t.z)<=i&&(n=1,this.chunkVersions.set(e,1)),n===void 0&&(this.modifiedBlocks.has(e)?n=1:n=2,this.chunkVersions.set(e,n)),n===1?this.terrainGenerator.generateV1(t):this.terrainGenerator.generateV2(t);const s=this.modifiedBlocks.get(e);if(s){const r=pt.CHUNK_SIZE;for(const[o,l]of s.entries()){const c=o%r,h=Math.floor(o%(r*r)/r),d=Math.floor(o/(r*r));t.setBlock(c,h,d,l)}}}getChunkMeshes(){const t=[];for(const e of this.chunks.values())e.mesh&&t.push(e.mesh);return t}getChunksCount(){return this.chunks.size}getModifiedBlocksData(){const t={};for(const[i,s]of this.modifiedBlocks.entries()){if(s.size===0)continue;const r={};for(const[o,l]of s.entries())r[o.toString()]=l;t[i]=r}const e={};for(const[i,s]of this.doorOrientations.entries())e[i]=s;const n={};for(const[i,s]of this.chunkVersions.entries())n[i]=s;return{blocks:t,doorOrientations:e,chunkVersions:n}}setModifiedBlocksData(t){if(this.modifiedBlocks.clear(),this.doorOrientations.clear(),this.chunkVersions.clear(),!t)return;const e=t.blocks??t;for(const n of Object.keys(e)){const i=new Map,s=e[n];for(const r of Object.keys(s)){const o=parseInt(r,10),l=s[r];i.set(o,l)}this.modifiedBlocks.set(n,i)}if(t.doorOrientations)for(const[n,i]of Object.entries(t.doorOrientations))this.doorOrientations.set(n,i);if(t.chunkVersions)for(const[n,i]of Object.entries(t.chunkVersions))this.chunkVersions.set(n,i)}clearAndRebuild(t,e){for(const n of this.chunks.values())n.mesh&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh=null);this.chunks.clear(),this.generateWorldAround(t,e)}};class zm{keys={};justPressedKeys={};mouseDelta={x:0,y:0};isLocked=!1;isActionActive(t){const e=_n.getConfig();switch(t){case"forward":return!!this.keys[e.keyForward];case"backward":return!!this.keys[e.keyBackward];case"left":return!!this.keys[e.keyLeft];case"right":return!!this.keys[e.keyRight];case"jump":return!!this.keys[e.keyJump];default:return!1}}targetElement;constructor(t){this.targetElement=t,window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),document.addEventListener("mousemove",this.onMouseMove.bind(this)),document.addEventListener("pointerlockchange",this.onPointerLockChange.bind(this))}requestLock(){this.isLocked||this.targetElement.requestPointerLock()}onKeyDown(t){const e=t.code;e==="Tab"&&t.preventDefault(),this.isLocked&&(e==="F5"||e==="KeyQ"||e==="KeyE")&&(e==="KeyE"||e==="F5")&&t.preventDefault(),this.keys[e]||(this.justPressedKeys[e]=!0),this.keys[e]=!0}onKeyUp(t){const e=t.code;this.keys[e]=!1,this.justPressedKeys[e]=!1}onMouseMove(t){this.isLocked&&(this.mouseDelta.x+=t.movementX,this.mouseDelta.y+=t.movementY)}onPointerLockChange(){const t=document.getElementById("menu-overlay"),e=document.getElementById("crosshair"),n=document.getElementById("inventory-modal");document.pointerLockElement===this.targetElement?(this.isLocked=!0,t&&(t.style.display="none"),e&&(e.style.display="block")):(this.isLocked=!1,this.clearKeys(),n&&n.style.display==="flex"||t&&(t.style.display="flex",t.style.opacity="1"),e&&(e.style.display="none"))}clearKeys(){this.keys={},this.justPressedKeys={}}consumeJustPressed(t){return this.justPressedKeys[t]?(this.justPressedKeys[t]=!1,!0):!1}consumeMouseDelta(){const t={...this.mouseDelta};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}}class ln{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new b);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new b);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new ln);const n=this.elements,i=t.elements,s=e.elements,r=n[0],o=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],f=i[0],p=i[1],_=i[2],v=i[3],y=i[4],x=i[5],w=i[6],S=i[7],T=i[8];return s[0]=r*f+o*v+l*w,s[1]=r*p+o*y+l*S,s[2]=r*_+o*x+l*T,s[3]=c*f+h*v+d*w,s[4]=c*p+h*y+d*S,s[5]=c*_+h*x+d*T,s[6]=u*f+m*v+g*w,s[7]=u*p+m*y+g*S,s[8]=u*_+m*x+g*T,e}scale(t,e){e===void 0&&(e=new ln);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new b);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(r=c-l,s[r+i*r]===0){for(o=r+1;o<c;o++)if(s[r+i*o]!==0){h=d;do u=d-h,s[u+i*r]+=s[u+i*o];while(--h);break}}if(s[r+i*r]!==0)for(o=r+1;o<c;o++){const m=s[r+i*o]/s[r+i*r];h=d;do u=d-h,s[u+i*o]=u<=r?0:s[u+i*o]-s[u+i*r]*m;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new ln);const e=3,n=6,i=Bm;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const l=o;let c;const h=n;let d;do{if(s=l-o,i[s+n*s]===0){for(r=s+1;r<l;r++)if(i[s+n*r]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<l;r++){const u=i[s+n*r]/i[s+n*s];c=h;do d=h-c,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*u;while(--c)}}while(--o);s=2;do{r=s-1;do{const u=i[s+n*r]/i[s+n*s];c=n;do d=n-c,i[d+n*r]=i[d+n*r]-i[d+n*s]*u;while(--c)}while(r--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{r=2;do{if(d=i[e+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,d)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,o=n+n,l=i+i,c=e*r,h=e*o,d=e*l,u=n*o,m=n*l,g=i*l,f=s*r,p=s*o,_=s*l,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-_,v[3*0+2]=d+p,v[3*1+0]=h+_,v[3*1+1]=1-(c+g),v[3*1+2]=m-f,v[3*2+0]=d-p,v[3*2+1]=m+f,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new ln);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Bm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z;return e.x=o*s-l*i,e.y=l*n-r*s,e.z=r*i-o*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new b(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new b(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new ln([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new b);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i)}scale(t,e){e===void 0&&(e=new b);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new b),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new b),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new b),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Om,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=Fm;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Wa),Wa.almostEquals(t,e)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const Om=new b,Fm=new b,Wa=new b;class We{constructor(t){t===void 0&&(t={}),this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(t[0]),o&&o.vmult(s,s),r.copy(s);for(let l=1;l<t.length;l++){let c=t[l];o&&(o.vmult(c,qa),c=qa),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new We().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&o&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,o,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),o.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=Xa,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Xa,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,o=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,m=Math.max(Math.max(Math.min(o,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,h)),Math.max(d,u));return!(g<0||m>g)}}const qa=new b,Xa=[new b,new b,new b,new b,new b,new b,new b,new b];class Ya{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Hl{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class oe{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new b),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=km,i=Um;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new oe);const n=this.x,i=this.y,s=this.z,r=this.w,o=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+r*o+i*c-s*l,e.y=i*h+r*l+s*o-n*c,e.z=s*h+r*c+n*l-i*o,e.w=r*h-n*o-i*l-s*c,e}inverse(t){t===void 0&&(t=new oe);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new oe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z,c=this.w,h=c*n+o*s-l*i,d=c*i+l*n-r*s,u=c*s+r*i-o*n,m=-r*n-o*i-l*s;return e.x=h*c+m*-r+d*-l-u*-o,e.y=d*c+m*-o+u*-r-h*-l,e.z=u*c+m*-l+h*-o-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,o=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=r*o+l*c;if(h>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const d=r*r,u=o*o,m=l*l;n=Math.atan2(2*o*c-2*r*l,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*r*c-2*o*l,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*o+s*c*h,this.y=s*c*o-l*r*h,this.z=s*r*h+l*c*o,this.w=s*r*o-l*c*h):i==="YXZ"?(this.x=l*r*o+s*c*h,this.y=s*c*o-l*r*h,this.z=s*r*h-l*c*o,this.w=s*r*o+l*c*h):i==="ZXY"?(this.x=l*r*o-s*c*h,this.y=s*c*o+l*r*h,this.z=s*r*h+l*c*o,this.w=s*r*o-l*c*h):i==="ZYX"?(this.x=l*r*o-s*c*h,this.y=s*c*o+l*r*h,this.z=s*r*h-l*c*o,this.w=s*r*o+l*c*h):i==="YZX"?(this.x=l*r*o+s*c*h,this.y=s*c*o+l*r*h,this.z=s*r*h-l*c*o,this.w=s*r*o-l*c*h):i==="XZY"&&(this.x=l*r*o-s*c*h,this.y=s*c*o-l*r*h,this.z=s*r*h+l*c*o,this.w=s*r*o+l*c*h),this}clone(){return new oe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new oe);const i=this.x,s=this.y,r=this.z,o=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,m,g,f,p;return m=i*l+s*c+r*h+o*d,m<0&&(m=-m,l=-l,c=-c,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),f=Math.sin((1-e)*u)/g,p=Math.sin(e*u)/g):(f=1-e,p=e),n.x=f*i+p*l,n.y=f*s+p*c,n.z=f*r+p*h,n.w=f*o+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new oe);const s=t.x*n.x,r=t.y*n.y,o=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+r*h-o*c),i.y+=u*(r*d+o*l-s*h),i.z+=u*(o*d+s*c-r*l),i.w+=u*(-s*l-r*c-o*h),i}}const km=new b,Um=new b,Gm={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class gt{constructor(t){t===void 0&&(t={}),this.id=gt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}gt.idCounter=0;gt.types=Gm;class Wt{constructor(t){t===void 0&&(t={}),this.position=new b,this.quaternion=new oe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Wt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Wt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),n.vsub(t,i),e.conjugate(ja),ja.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new b),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new b),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const ja=new oe;class ps extends gt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:gt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new b;for(let s=0;s!==t.length;s++){const r=t[s],o=r.length;for(let l=0;l!==o;l++){const c=(l+1)%o;e[r[l]].vsub(e[r[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new b;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];ps.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new b,r=new b;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,o,l,c){const h=new b;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const f=h.dot(r);f>u&&(u=f,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const f=n.vertices[n.faces[d][g]],p=new b;p.copy(f),s.vmult(p,p),i.vadd(p,p),m.push(p)}d>=0&&this.clipFaceAgainstHull(r,t,e,m,o,l,c)}findSeparatingAxis(t,e,n,i,s,r,o,l){const c=new b,h=new b,d=new b,u=new b,m=new b,g=new b;let f=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let _=0;_!==p.uniqueAxes.length;_++){n.vmult(p.uniqueAxes[_],c);const v=p.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<f&&(f=v,r.copy(c))}else{const _=o?o.length:p.faces.length;for(let v=0;v<_;v++){const y=o?o[v]:v;c.copy(p.faceNormals[y]),n.vmult(c,c);const x=p.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<f&&(f=x,r.copy(c))}}if(t.uniqueAxes)for(let _=0;_!==t.uniqueAxes.length;_++){s.vmult(t.uniqueAxes[_],h);const v=p.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<f&&(f=v,r.copy(h))}else{const _=l?l.length:t.faces.length;for(let v=0;v<_;v++){const y=l?l[v]:v;h.copy(t.faceNormals[y]),s.vmult(h,h);const x=p.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<f&&(f=x,r.copy(h))}}for(let _=0;_!==p.uniqueEdges.length;_++){n.vmult(p.uniqueEdges[_],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],m),u.cross(m,g),!g.almostZero()){g.normalize();const y=p.testSepAxis(g,t,e,n,i,s);if(y===!1)return!1;y<f&&(f=y,r.copy(g))}}return i.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const o=this;ps.project(o,t,n,i,Ur),ps.project(e,t,s,r,Gr);const l=Ur[0],c=Ur[1],h=Gr[0],d=Gr[1];if(l<d||h<c)return!1;const u=l-d,m=h-c;return u<m?u:m}calculateLocalInertia(t,e){const n=new b,i=new b;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*o*2*o),e.y=1/12*t*(2*s*2*s+2*o*2*o),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,o){const l=new b,c=new b,h=new b,d=new b,u=new b,m=new b,g=new b,f=new b,p=this,_=[],v=i,y=_;let x=-1,w=Number.MAX_VALUE;for(let D=0;D<p.faces.length;D++){l.copy(p.faceNormals[D]),n.vmult(l,l);const k=l.dot(t);k<w&&(w=k,x=D)}if(x<0)return;const S=p.faces[x];S.connectedFaces=[];for(let D=0;D<p.faces.length;D++)for(let k=0;k<p.faces[D].length;k++)S.indexOf(p.faces[D][k])!==-1&&D!==x&&S.connectedFaces.indexOf(D)===-1&&S.connectedFaces.push(D);const T=S.length;for(let D=0;D<T;D++){const k=p.vertices[S[D]],G=p.vertices[S[(D+1)%T]];k.vsub(G,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[x]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(k),n.vmult(m,m),e.vadd(m,m);const R=S.connectedFaces[D];g.copy(this.faceNormals[R]);const P=this.getPlaneConstantOfFace(R);f.copy(g),n.vmult(f,f);const N=P-f.dot(e);for(this.clipFaceAgainstPlane(v,y,f,N);v.length;)v.shift();for(;y.length;)v.push(y.shift())}g.copy(this.faceNormals[x]);const M=this.getPlaneConstantOfFace(x);f.copy(g),n.vmult(f,f);const A=M-f.dot(e);for(let D=0;D<v.length;D++){let k=f.dot(v[D])+A;if(k<=s&&(console.log(`clamped: depth=${k} to minDist=${s}`),k=s),k<=r){const G=v[D];if(k<=1e-6){const R={point:G,normal:f,depth:k};o.push(R)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const o=t.length;if(o<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<o;h++){if(c=t[h],r=n.dot(c)+i,s<0)if(r<0){const d=new b;d.copy(c),e.push(d)}else{const d=new b;l.lerp(c,s/(s-r),d),e.push(d)}else if(r<0){const d=new b;l.lerp(c,s/(s-r),d),e.push(d),e.push(c)}l=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new b);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,o,l,c,h,d,u=new b;for(let m=0;m<s.length;m++){u.copy(s[m]),e.vmult(u,u),t.vadd(u,u);const g=u;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,o,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new b);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new b;this.getAveragePointLocal(s);for(let r=0;r<this.faces.length;r++){let o=i[r];const l=e[n[r][0]],c=new b;t.vsub(l,c);const h=o.dot(c),d=new b;s.vsub(l,d);const u=o.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const r=t.vertices.length,o=Vm;let l=0,c=0;const h=Hm,d=t.vertices;h.setZero(),Wt.vectorToLocalFrame(n,i,e,o),Wt.pointToLocalFrame(n,i,h,h);const u=h.dot(o);c=l=d[0].dot(o);for(let m=1;m<r;m++){const g=d[m].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const m=c;c=l,l=m}s[0]=l,s[1]=c}}const Ur=[],Gr=[];new b;const Vm=new b,Hm=new b;class Yn extends gt{constructor(t){super({type:gt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=b,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new ps({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new b),Yn.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)Hn.set(s[r][0],s[r][1],s[r][2]),e.vmult(Hn,Hn),t.vadd(Hn,Hn),n(Hn.x,Hn.y,Hn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;fn[0].set(s.x,s.y,s.z),fn[1].set(-s.x,s.y,s.z),fn[2].set(-s.x,-s.y,s.z),fn[3].set(-s.x,-s.y,-s.z),fn[4].set(s.x,-s.y,-s.z),fn[5].set(s.x,s.y,-s.z),fn[6].set(-s.x,s.y,-s.z),fn[7].set(s.x,-s.y,s.z);const r=fn[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const l=fn[o];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Hn=new b,fn=[new b,new b,new b,new b,new b,new b,new b,new b],_o={DYNAMIC:1,STATIC:2,KINEMATIC:4},xo={AWAKE:0,SLEEPY:1,SLEEPING:2};class dt extends Hl{constructor(t){t===void 0&&(t={}),super(),this.id=dt.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new b,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new b,this.force=new b;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?dt.STATIC:dt.DYNAMIC,typeof t.type==typeof dt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=dt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new oe,this.initQuaternion=new oe,this.previousQuaternion=new oe,this.interpolatedQuaternion=new oe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new b,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new ln,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new ln,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new b(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new b(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new We,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=dt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===dt.SLEEPING&&this.dispatchEvent(dt.wakeupEvent)}sleep(){this.sleepState=dt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===dt.AWAKE&&n<i?(this.sleepState=dt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(dt.sleepyEvent)):e===dt.SLEEPY&&n>i?this.wakeUp():e===dt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(dt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===dt.SLEEPING||this.type===dt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new b),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new b),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new b,s=new oe;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const o=e[s].length(),l=r.boundingSphereRadius;o+l>i&&(i=o+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Wm,r=qm,o=this.quaternion,l=this.aabb,c=Xm;for(let h=0;h!==i;h++){const d=t[h];o.vmult(e[h],s),s.vadd(this.position,s),o.mult(n[h],r),d.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Ym,i=jm;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new b),this.type!==dt.DYNAMIC)return;this.sleepState===dt.SLEEPING&&this.wakeUp();const n=Km;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new b),this.type!==dt.DYNAMIC)return;const n=Zm,i=$m;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===dt.DYNAMIC&&(this.sleepState===dt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new b),this.type!==dt.DYNAMIC)return;this.sleepState===dt.SLEEPING&&this.wakeUp();const n=e,i=Jm;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Qm;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new b),this.type!==dt.DYNAMIC)return;const n=tg,i=eg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=ng;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Yn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new b;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===dt.DYNAMIC||this.type===dt.KINEMATIC)||this.sleepState===dt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*t;i.x+=o.x*m*u.x,i.y+=o.y*m*u.y,i.z+=o.z*m*u.z;const g=d.elements,f=this.angularFactor,p=l.x*f.x,_=l.y*f.y,v=l.z*f.z;s.x+=t*(g[0]*p+g[1]*_+g[2]*v),s.y+=t*(g[3]*p+g[4]*_+g[5]*v),s.z+=t*(g[6]*p+g[7]*_+g[8]*v),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}dt.idCounter=0;dt.COLLIDE_EVENT_NAME="collide";dt.DYNAMIC=_o.DYNAMIC;dt.STATIC=_o.STATIC;dt.KINEMATIC=_o.KINEMATIC;dt.AWAKE=xo.AWAKE;dt.SLEEPY=xo.SLEEPY;dt.SLEEPING=xo.SLEEPING;dt.wakeupEvent={type:"wakeup"};dt.sleepyEvent={type:"sleepy"};dt.sleepEvent={type:"sleep"};const Wm=new b,qm=new oe,Xm=new We,Ym=new ln,jm=new ln;new ln;const Km=new b,Zm=new b,$m=new b,Jm=new b,Qm=new b,tg=new b,eg=new b,ng=new b;class Wl{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&dt.STATIC||t.sleepState===dt.SLEEPING)&&(e.type&dt.STATIC||e.sleepState===dt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=ig;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=sg,i=rg,s=og,r=t.length;for(let o=0;o!==r;o++)i[o]=t[o],s[o]=e[o];t.length=0,e.length=0;for(let o=0;o!==r;o++){const l=i[o].id,c=s[o].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=o,n.keys.push(h)}for(let o=0;o!==n.keys.length;o++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new b;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const ig=new b;new b;new oe;new b;const sg={keys:[]},rg=[],og=[];new b;new b;new b;class ag extends Wl{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,o;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],o=i[c],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Js{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let ql,Xl,Yl,jl,Kl,Zl,$l;const yo={CLOSEST:1,ANY:2,ALL:4};ql=gt.types.SPHERE;Xl=gt.types.PLANE;Yl=gt.types.BOX;jl=gt.types.CYLINDER;Kl=gt.types.CONVEXPOLYHEDRON;Zl=gt.types.HEIGHTFIELD;$l=gt.types.TRIMESH;class re{get[ql](){return this._intersectSphere}get[Xl](){return this._intersectPlane}get[Yl](){return this._intersectBox}get[jl](){return this._intersectConvex}get[Kl](){return this._intersectConvex}get[Zl](){return this._intersectHeightfield}get[$l](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new b),e===void 0&&(e=new b),this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=re.ANY,this.result=new Js,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||re.ANY,this.result=e.result||new Js,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ka),Vr.length=0,t.broadphase.aabbQuery(t,Ka,Vr),this.intersectBodies(Vr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=lg,s=cg;for(let r=0,o=t.shapes.length;r<o;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(wg(s,this.direction,n)>t.boundingSphereRadius)return;const o=this[t.type];o&&o.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,o=this.to,l=this.direction,c=new b(0,0,1);e.vmult(c,c);const h=new b;r.vsub(n,h);const d=h.dot(c);o.vsub(n,h);const u=h.dot(c);if(d*u>0||r.distanceTo(o)<d)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const g=new b,f=new b,p=new b;r.vsub(n,g);const _=-c.dot(g)/m;l.scale(_,f),r.vadd(f,p),this.reportIntersection(c,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=hg;r.from.copy(this.from),r.to.copy(this.to),Wt.pointToLocalFrame(n,e,r.from,r.from),Wt.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const o=ug;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new We;r.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),h=Math.min(h,o[0]+1),d=Math.min(d,o[1]+1);for(let m=l;m<h;m++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,u),!!u.overlapsRay(r)){if(t.getConvexTrianglePillar(m,g,!1),Wt.pointToWorldFrame(n,e,t.pillarOffset,Vs),this._intersectConvex(t.pillarConvex,e,Vs,i,s,Za),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Wt.pointToWorldFrame(n,e,t.pillarOffset,Vs),this._intersectConvex(t.pillarConvex,e,Vs,i,s,Za)}}}_intersectSphere(t,e,n,i,s){const r=this.from,o=this.to,l=t.radius,c=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,h=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,u=h**2-4*c*d,m=dg,g=fg;if(!(u<0))if(u===0)r.lerp(o,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const f=(-h-Math.sqrt(u))/(2*c),p=(-h+Math.sqrt(u))/(2*c);if(f>=0&&f<=1&&(r.lerp(o,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(r.lerp(o,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const o=pg,l=$a,c=r&&r.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,m=this.direction,g=this.from,f=this.to,p=g.distanceTo(f),_=c?c.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<_;y++){const x=c?c[y]:y,w=h[x],S=u[x],T=e,M=n;l.copy(d[w[0]]),T.vmult(l,l),l.vadd(M,l),l.vsub(g,l),T.vmult(S,o);const A=m.dot(o);if(Math.abs(A)<this.precision)continue;const D=o.dot(l)/A;if(!(D<0)){m.scale(D,De),De.vadd(g,De),sn.copy(d[w[0]]),T.vmult(sn,sn),M.vadd(sn,sn);for(let k=1;!v.shouldStop&&k<w.length-1;k++){pn.copy(d[w[k]]),mn.copy(d[w[k+1]]),T.vmult(pn,pn),T.vmult(mn,mn),M.vadd(pn,pn),M.vadd(mn,mn);const G=De.distanceTo(g);!(re.pointInTriangle(De,sn,pn,mn)||re.pointInTriangle(De,pn,sn,mn))||G>p||this.reportIntersection(o,De,s,i,x)}}}}_intersectTrimesh(t,e,n,i,s,r){const o=mg,l=Mg,c=bg,h=$a,d=gg,u=vg,m=_g,g=yg,f=xg,p=t.indices;t.vertices;const _=this.from,v=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),Wt.vectorToLocalFrame(n,e,y,d),Wt.pointToLocalFrame(n,e,_,u),Wt.pointToLocalFrame(n,e,v,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,m.vsub(u,d),d.normalize();const x=u.distanceSquared(m);t.tree.rayQuery(this,c,l);for(let w=0,S=l.length;!this.result.shouldStop&&w!==S;w++){const T=l[w];t.getNormal(T,o),t.getVertex(p[T*3],sn),sn.vsub(u,h);const M=d.dot(o),A=o.dot(h)/M;if(A<0)continue;d.scale(A,De),De.vadd(u,De),t.getVertex(p[T*3+1],pn),t.getVertex(p[T*3+2],mn);const D=De.distanceSquared(u);!(re.pointInTriangle(De,pn,sn,mn)||re.pointInTriangle(De,sn,pn,mn))||D>x||(Wt.vectorToWorldFrame(e,o,f),Wt.pointToWorldFrame(n,e,De,g),this.reportIntersection(f,g,s,i,T))}l.length=0}reportIntersection(t,e,n,i,s){const r=this.from,o=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case re.ALL:this.hasHit=!0,c.set(r,o,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case re.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l));break;case re.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,li),n.vsub(e,ss),t.vsub(e,Hr);const s=li.dot(li),r=li.dot(ss),o=li.dot(Hr),l=ss.dot(ss),c=ss.dot(Hr);let h,d;return(h=l*o-r*c)>=0&&(d=s*c-r*o)>=0&&h+d<s*l-r*r}}re.CLOSEST=yo.CLOSEST;re.ANY=yo.ANY;re.ALL=yo.ALL;const Ka=new We,Vr=[],ss=new b,Hr=new b,lg=new b,cg=new oe,De=new b,sn=new b,pn=new b,mn=new b;new b;new Js;const Za={faceList:[0]},Vs=new b,hg=new re,ug=[],dg=new b,fg=new b,pg=new b;new b;new b;const $a=new b,mg=new b,gg=new b,vg=new b,_g=new b,xg=new b,yg=new b;new We;const Mg=[],bg=new Wt,li=new b,Hs=new b;function wg(a,t,e){e.vsub(a,li);const n=li.dot(t);return t.scale(n,Hs),Hs.vadd(a,Hs),e.distanceTo(Hs)}class Bi extends Wl{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const r=t.boundingRadius,o=e.boundingRadius,l=i+r;return s-o<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,r=this.axisIndex;let o,l;for(this.dirty&&(this.sortList(),this.dirty=!1),o=0;o!==s;o++){const c=i[o];for(l=o+1;l<s;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!Bi.checkBounds(c,h,r))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Bi.insertionSortX(t):e===1?Bi.insertionSortY(t):e===2&&Bi.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,r=0;const o=this.axisList,l=o.length,c=1/l;for(let m=0;m!==l;m++){const g=o[m],f=g.position.x;t+=f,e+=f*f;const p=g.position.y;n+=p,i+=p*p;const _=g.position.z;s+=_,r+=_*_}const h=e-t*t*c,d=i-n*n*c,u=r-s*s*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const r=this.axisList;e.lowerBound[s],e.upperBound[s];for(let o=0;o<r.length;o++){const l=r[o];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class Sg{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Ja{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class bs{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=bs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ja,this.jacobianElementB=new Ja,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,o)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,o)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Qa),o.scale(h,tl),n.invInertiaWorldSolve.vmult(r,el),i.invInertiaWorldSolve.vmult(l,nl),t.multiplyVectors(Qa,el)+e.multiplyVectors(tl,nl)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return o.vmult(t.rotational,Ws),c+=Ws.dot(t.rotational),l.vmult(e.rotational,Ws),c+=Ws.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=Eg;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}bs.idCounter=0;const Qa=new b,tl=new b,el=new b,nl=new b,Ws=new b,Eg=new b;class Ag extends bs{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,l=Tg,c=Cg,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=Lg,f=this.jacobianElementA,p=this.jacobianElementB,_=this.ni;r.cross(_,l),o.cross(_,c),_.negate(f.spatial),l.negate(f.rotational),p.spatial.copy(_),p.rotational.copy(c),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(r,g);const v=_.dot(g),y=this.restitution+1,x=y*u.dot(_)-y*h.dot(_)+m.dot(c)-d.dot(l),w=this.computeGiMf();return-v*e-x*n-t*w}getImpactVelocityAlongNormal(){const t=Rg,e=Dg,n=Pg,i=Ig,s=Ng;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Tg=new b,Cg=new b,Lg=new b,Rg=new b,Dg=new b,Pg=new b,Ig=new b,Ng=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class il extends bs{constructor(t,e,n){super(t,e,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=zg,r=Bg,o=this.t;n.cross(o,s),i.cross(o,r);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const zg=new b,Bg=new b;class qi{constructor(t,e,n){n=Sg.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=qi.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}qi.idCounter=0;class Xi{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Xi.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Xi.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new re;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Og extends gt{constructor(){super({type:gt.types.PLANE}),this.worldNormal=new b,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new b),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Cn.set(0,0,1),e.vmult(Cn,Cn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Cn.x===1?i.x=t.x:Cn.x===-1&&(n.x=t.x),Cn.y===1?i.y=t.y:Cn.y===-1&&(n.y=t.y),Cn.z===1?i.z=t.z:Cn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Cn=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new We;new b;new We;new b;new b;new b;new b;new b;new b;new b;new We;new b;new Wt;new We;class Fg{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class kg extends Fg{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,l=e.bodies,c=l.length,h=t;let d,u,m,g,f,p;if(o!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const _=Gg,v=Vg,y=Ug;_.length=o,v.length=o,y.length=o;for(let x=0;x!==o;x++){const w=r[x];y[x]=0,v[x]=w.computeB(h),_[x]=1/w.computeC()}if(o!==0){for(let S=0;S!==c;S++){const T=l[S],M=T.vlambda,A=T.wlambda;M.set(0,0,0),A.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let S=0;S!==o;S++){const T=r[S];d=v[S],u=_[S],p=y[S],f=T.computeGWlambda(),m=u*(d-f-T.eps*p),p+m<T.minForce?m=T.minForce-p:p+m>T.maxForce&&(m=T.maxForce-p),y[S]+=m,g+=m>0?m:-m,T.addToWlambda(m)}if(g*g<s)break}for(let S=0;S!==c;S++){const T=l[S],M=T.velocity,A=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),M.vadd(T.vlambda,M),T.wlambda.vmul(T.angularFactor,T.wlambda),A.vadd(T.wlambda,A)}let x=r.length;const w=1/h;for(;x--;)r[x].multiplier=y[x]*w}return n}}const Ug=[],Gg=[],Vg=[];class Hg{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Wg extends Hg{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const Zt={sphereSphere:gt.types.SPHERE,spherePlane:gt.types.SPHERE|gt.types.PLANE,boxBox:gt.types.BOX|gt.types.BOX,sphereBox:gt.types.SPHERE|gt.types.BOX,planeBox:gt.types.PLANE|gt.types.BOX,convexConvex:gt.types.CONVEXPOLYHEDRON,sphereConvex:gt.types.SPHERE|gt.types.CONVEXPOLYHEDRON,planeConvex:gt.types.PLANE|gt.types.CONVEXPOLYHEDRON,boxConvex:gt.types.BOX|gt.types.CONVEXPOLYHEDRON,sphereHeightfield:gt.types.SPHERE|gt.types.HEIGHTFIELD,boxHeightfield:gt.types.BOX|gt.types.HEIGHTFIELD,convexHeightfield:gt.types.CONVEXPOLYHEDRON|gt.types.HEIGHTFIELD,sphereParticle:gt.types.PARTICLE|gt.types.SPHERE,planeParticle:gt.types.PLANE|gt.types.PARTICLE,boxParticle:gt.types.BOX|gt.types.PARTICLE,convexParticle:gt.types.PARTICLE|gt.types.CONVEXPOLYHEDRON,cylinderCylinder:gt.types.CYLINDER,sphereCylinder:gt.types.SPHERE|gt.types.CYLINDER,planeCylinder:gt.types.PLANE|gt.types.CYLINDER,boxCylinder:gt.types.BOX|gt.types.CYLINDER,convexCylinder:gt.types.CONVEXPOLYHEDRON|gt.types.CYLINDER,heightfieldCylinder:gt.types.HEIGHTFIELD|gt.types.CYLINDER,particleCylinder:gt.types.PARTICLE|gt.types.CYLINDER,sphereTrimesh:gt.types.SPHERE|gt.types.TRIMESH,planeTrimesh:gt.types.PLANE|gt.types.TRIMESH};class qg{get[Zt.sphereSphere](){return this.sphereSphere}get[Zt.spherePlane](){return this.spherePlane}get[Zt.boxBox](){return this.boxBox}get[Zt.sphereBox](){return this.sphereBox}get[Zt.planeBox](){return this.planeBox}get[Zt.convexConvex](){return this.convexConvex}get[Zt.sphereConvex](){return this.sphereConvex}get[Zt.planeConvex](){return this.planeConvex}get[Zt.boxConvex](){return this.boxConvex}get[Zt.sphereHeightfield](){return this.sphereHeightfield}get[Zt.boxHeightfield](){return this.boxHeightfield}get[Zt.convexHeightfield](){return this.convexHeightfield}get[Zt.sphereParticle](){return this.sphereParticle}get[Zt.planeParticle](){return this.planeParticle}get[Zt.boxParticle](){return this.boxParticle}get[Zt.convexParticle](){return this.convexParticle}get[Zt.cylinderCylinder](){return this.convexConvex}get[Zt.sphereCylinder](){return this.sphereConvex}get[Zt.planeCylinder](){return this.planeConvex}get[Zt.boxCylinder](){return this.boxConvex}get[Zt.convexCylinder](){return this.convexConvex}get[Zt.heightfieldCylinder](){return this.heightfieldCylinder}get[Zt.particleCylinder](){return this.particleCylinder}get[Zt.sphereTrimesh](){return this.sphereTrimesh}get[Zt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Wg,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=t,o.bj=e):o=new Ag(t,e),o.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(o.restitution=c.restitution*h.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(o.frictionGravity||o.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,f=g.length?g.pop():new il(n,i,u*m),p=g.length?g.pop():new il(n,i,u*m);return f.bi=p.bi=n,f.bj=p.bj=i,f.minForce=p.minForce=-u*m,f.maxForce=p.maxForce=u*m,f.ri.copy(t.ri),f.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(f.t,p.t),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),f.enabled=p.enabled=t.enabled,e.push(f,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ni.setZero(),Di.setZero(),Pi.setZero();const s=e.bi;e.bj;for(let o=0;o!==t;o++)e=this.result[this.result.length-1-o],e.bi!==s?(ni.vadd(e.ni,ni),Di.vadd(e.ri,Di),Pi.vadd(e.rj,Pi)):(ni.vsub(e.ni,ni),Di.vadd(e.rj,Di),Pi.vadd(e.ri,Pi));const r=1/t;Di.scale(r,n.ri),Pi.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ni.normalize(),ni.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;const l=jg,c=Kg,h=Xg,d=Yg;for(let u=0,m=t.length;u!==m;u++){const g=t[u],f=e[u];let p=null;g.material&&f.material&&(p=n.getContactMaterial(g.material,f.material)||null);const _=g.type&dt.KINEMATIC&&f.type&dt.STATIC||g.type&dt.STATIC&&f.type&dt.KINEMATIC||g.type&dt.KINEMATIC&&f.type&dt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const y=g.shapes[v];for(let x=0;x<f.shapes.length;x++){f.quaternion.mult(f.shapeOrientations[x],c),f.quaternion.vmult(f.shapeOffsets[x],d),d.vadd(f.position,d);const w=f.shapes[x];if(!(y.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+w.boundingSphereRadius)continue;let S=null;y.material&&w.material&&(S=n.getContactMaterial(y.material,w.material)||null),this.currentContactMaterial=S||p||n.defaultContactMaterial;const T=y.type|w.type,M=this[T];if(M){let A=!1;y.type<w.type?A=M.call(this,y,w,h,d,l,c,g,f,y,w,_):A=M.call(this,w,y,d,h,c,l,f,g,y,w,_),A&&_&&(n.shapeOverlapKeeper.set(y.id,w.id),n.bodyOverlapKeeper.set(g.id,f.id))}}}}}sphereSphere(t,e,n,i,s,r,o,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(o,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,r,o,l,c,h,d){const u=this.createContactEquation(o,l,t,e,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,qs),u.ni.scale(u.ni.dot(qs),sl),qs.vsub(sl,u.rj),-qs.dot(u.ni)<=t.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(o.position,m),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,o,l,t,e,d)}sphereBox(t,e,n,i,s,r,o,l,c,h,d){const u=this.v3pool,m=M0;n.vsub(i,Xs),e.getSideNormals(m,r);const g=t.radius;let f=!1;const p=w0,_=S0,v=E0;let y=null,x=0,w=0,S=0,T=null;for(let z=0,X=m.length;z!==X&&f===!1;z++){const F=_0;F.copy(m[z]);const q=F.length();F.normalize();const Y=Xs.dot(F);if(Y<q+g&&Y>0){const et=x0,B=y0;et.copy(m[(z+1)%3]),B.copy(m[(z+2)%3]);const J=et.length(),tt=B.length();et.normalize(),B.normalize();const U=Xs.dot(et),ot=Xs.dot(B);if(U<J&&U>-J&&ot<tt&&ot>-tt){const at=Math.abs(Y-q-g);if((T===null||at<T)&&(T=at,w=U,S=ot,y=q,p.copy(F),_.copy(et),v.copy(B),x++,d))return!0}}}if(x){f=!0;const z=this.createContactEquation(o,l,t,e,c,h);p.scale(-g,z.ri),z.ni.copy(p),z.ni.negate(z.ni),p.scale(y,p),_.scale(w,_),p.vadd(_,p),v.scale(S,v),p.vadd(v,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(o.position,z.ri),z.rj.vadd(i,z.rj),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let M=u.get();const A=b0;for(let z=0;z!==2&&!f;z++)for(let X=0;X!==2&&!f;X++)for(let F=0;F!==2&&!f;F++)if(M.set(0,0,0),z?M.vadd(m[0],M):M.vsub(m[0],M),X?M.vadd(m[1],M):M.vsub(m[1],M),F?M.vadd(m[2],M):M.vsub(m[2],M),i.vadd(M,A),A.vsub(n,A),A.lengthSquared()<g*g){if(d)return!0;f=!0;const q=this.createContactEquation(o,l,t,e,c,h);q.ri.copy(A),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(g,q.ri),q.rj.copy(M),q.ri.vadd(n,q.ri),q.ri.vsub(o.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}u.release(M),M=null;const D=u.get(),k=u.get(),G=u.get(),R=u.get(),P=u.get(),N=m.length;for(let z=0;z!==N&&!f;z++)for(let X=0;X!==N&&!f;X++)if(z%3!==X%3){m[X].cross(m[z],D),D.normalize(),m[z].vadd(m[X],k),G.copy(n),G.vsub(k,G),G.vsub(i,G);const F=G.dot(D);D.scale(F,R);let q=0;for(;q===z%3||q===X%3;)q++;P.copy(n),P.vsub(R,P),P.vsub(k,P),P.vsub(i,P);const Y=Math.abs(F),et=P.length();if(Y<m[q].length()&&et<g){if(d)return!0;f=!0;const B=this.createContactEquation(o,l,t,e,c,h);k.vadd(R,B.rj),B.rj.copy(B.rj),P.negate(B.ni),B.ni.normalize(),B.ri.copy(B.rj),B.ri.vadd(i,B.ri),B.ri.vsub(n,B.ri),B.ri.normalize(),B.ri.scale(g,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(o.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}u.release(D,k,G,R,P)}planeBox(t,e,n,i,s,r,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,o,l,t,e,d)}convexConvex(t,e,n,i,s,r,o,l,c,h,d,u,m){const g=U0;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,g,u,m)){const f=[],p=G0;t.clipAgainstHull(n,s,e,i,r,g,-100,100,f);let _=0;for(let v=0;v!==f.length;v++){if(d)return!0;const y=this.createContactEquation(o,l,t,e,c,h),x=y.ri,w=y.rj;g.negate(y.ni),f[v].normal.negate(p),p.scale(f[v].depth,p),f[v].point.vadd(p,x),w.copy(f[v].point),x.vsub(n,x),w.vsub(i,w),x.vadd(n,x),x.vsub(o.position,x),w.vadd(i,w),w.vsub(l.position,w),this.result.push(y),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(t,e,n,i,s,r,o,l,c,h,d){const u=this.v3pool;n.vsub(i,A0);const m=e.faceNormals,g=e.faces,f=e.vertices,p=t.radius;let _=!1;for(let v=0;v!==f.length;v++){const y=f[v],x=R0;r.vmult(y,x),i.vadd(x,x);const w=L0;if(x.vsub(n,w),w.lengthSquared()<p*p){if(d)return!0;_=!0;const S=this.createContactEquation(o,l,t,e,c,h);S.ri.copy(w),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(p,S.ri),x.vsub(i,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(o.position,S.ri),S.rj.vadd(i,S.rj),S.rj.vsub(l.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let v=0,y=g.length;v!==y&&_===!1;v++){const x=m[v],w=g[v],S=D0;r.vmult(x,S);const T=P0;r.vmult(f[w[0]],T),T.vadd(i,T);const M=I0;S.scale(-p,M),n.vadd(M,M);const A=N0;M.vsub(T,A);const D=A.dot(S),k=z0;if(n.vsub(T,k),D<0&&k.dot(S)>0){const G=[];for(let R=0,P=w.length;R!==P;R++){const N=u.get();r.vmult(f[w[R]],N),i.vadd(N,N),G.push(N)}if(v0(G,S,n)){if(d)return!0;_=!0;const R=this.createContactEquation(o,l,t,e,c,h);S.scale(-p,R.ri),S.negate(R.ni);const P=u.get();S.scale(-D,P);const N=u.get();S.scale(-p,N),n.vsub(i,R.rj),R.rj.vadd(N,R.rj),R.rj.vadd(P,R.rj),R.rj.vadd(i,R.rj),R.rj.vsub(l.position,R.rj),R.ri.vadd(n,R.ri),R.ri.vsub(o.position,R.ri),u.release(P),u.release(N),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult);for(let z=0,X=G.length;z!==X;z++)u.release(G[z]);return}else for(let R=0;R!==w.length;R++){const P=u.get(),N=u.get();r.vmult(f[w[(R+1)%w.length]],P),r.vmult(f[w[(R+2)%w.length]],N),i.vadd(P,P),i.vadd(N,N);const z=T0;N.vsub(P,z);const X=C0;z.unit(X);const F=u.get(),q=u.get();n.vsub(P,q);const Y=q.dot(X);X.scale(Y,F),F.vadd(P,F);const et=u.get();if(F.vsub(n,et),Y>0&&Y*Y<z.lengthSquared()&&et.lengthSquared()<p*p){if(d)return!0;const B=this.createContactEquation(o,l,t,e,c,h);F.vsub(i,B.rj),F.vsub(n,B.ni),B.ni.normalize(),B.ni.scale(p,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(o.position,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(let J=0,tt=G.length;J!==tt;J++)u.release(G[J]);u.release(P),u.release(N),u.release(F),u.release(et),u.release(q);return}u.release(P),u.release(N),u.release(F),u.release(et),u.release(q)}for(let R=0,P=G.length;R!==P;R++)u.release(G[R])}}}planeConvex(t,e,n,i,s,r,o,l,c,h,d){const u=B0,m=O0;m.set(0,0,1),s.vmult(m,m);let g=0;const f=F0;for(let p=0;p!==e.vertices.length;p++)if(u.copy(e.vertices[p]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,f),m.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(o,l,t,e,c,h),y=k0;m.scale(m.dot(f),y),u.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(m),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(o.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}sphereHeightfield(t,e,n,i,s,r,o,l,c,h,d){const u=e.data,m=t.radius,g=e.elementSize,f=Q0,p=J0;Wt.pointToLocalFrame(i,r,n,p);let _=Math.floor((p.x-m)/g)-1,v=Math.ceil((p.x+m)/g)+1,y=Math.floor((p.y-m)/g)-1,x=Math.ceil((p.y+m)/g)+1;if(v<0||x<0||_>u.length||y>u[0].length)return;_<0&&(_=0),v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),_>=u.length&&(_=u.length-1),v>=u.length&&(v=u.length-1),x>=u[0].length&&(x=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const w=[];e.getRectMinMax(_,y,v,x,w);const S=w[0],T=w[1];if(p.z-m>T||p.z+m<S)return;const M=this.result;for(let A=_;A<v;A++)for(let D=y;D<x;D++){const k=M.length;let G=!1;if(e.getConvexTrianglePillar(A,D,!1),Wt.pointToWorldFrame(i,r,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,f,s,r,o,l,t,e,d)),d&&G||(e.getConvexTrianglePillar(A,D,!0),Wt.pointToWorldFrame(i,r,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,f,s,r,o,l,t,e,d)),d&&G))return!0;if(M.length-k>2)return}}boxHeightfield(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}convexHeightfield(t,e,n,i,s,r,o,l,c,h,d){const u=e.data,m=e.elementSize,g=t.boundingSphereRadius,f=Z0,p=$0,_=K0;Wt.pointToLocalFrame(i,r,n,_);let v=Math.floor((_.x-g)/m)-1,y=Math.ceil((_.x+g)/m)+1,x=Math.floor((_.y-g)/m)-1,w=Math.ceil((_.y+g)/m)+1;if(y<0||w<0||v>u.length||x>u[0].length)return;v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),w<0&&(w=0),v>=u.length&&(v=u.length-1),y>=u.length&&(y=u.length-1),w>=u[0].length&&(w=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const S=[];e.getRectMinMax(v,x,y,w,S);const T=S[0],M=S[1];if(!(_.z-g>M||_.z+g<T))for(let A=v;A<y;A++)for(let D=x;D<w;D++){let k=!1;if(e.getConvexTrianglePillar(A,D,!1),Wt.pointToWorldFrame(i,r,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.convexConvex(t,e.pillarConvex,n,f,s,r,o,l,null,null,d,p,null)),d&&k||(e.getConvexTrianglePillar(A,D,!0),Wt.pointToWorldFrame(i,r,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.convexConvex(t,e.pillarConvex,n,f,s,r,o,l,null,null,d,p,null)),d&&k))return!0}}sphereParticle(t,e,n,i,s,r,o,l,c,h,d){const u=q0;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,o,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,r,o,l,c,h,d){const u=V0;u.set(0,0,1),o.quaternion.vmult(u,u);const m=H0;if(i.vsub(o.position,m),u.dot(m)<=0){if(d)return!0;const f=this.createContactEquation(l,o,e,t,c,h);f.ni.copy(u),f.ni.negate(f.ni),f.ri.set(0,0,0);const p=W0;u.scale(u.dot(i),p),i.vsub(p,p),f.rj.copy(p),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxParticle(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}convexParticle(t,e,n,i,s,r,o,l,c,h,d){let u=-1;const m=Y0,g=j0;let f=null;const p=X0;if(p.copy(i),p.vsub(n,p),s.conjugate(rl),rl.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let _=0,v=t.faces.length;_!==v;_++){const y=[t.worldVertices[t.faces[_][0]]],x=t.worldFaceNormals[_];i.vsub(y[0],ol);const w=-x.dot(ol);if(f===null||Math.abs(w)<Math.abs(f)){if(d)return!0;f=w,u=_,m.copy(x)}}if(u!==-1){const _=this.createContactEquation(l,o,e,t,c,h);m.scale(f,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),m.negate(_.ni),_.ri.set(0,0,0);const v=_.ri,y=_.rj;v.vadd(i,v),v.vsub(l.position,v),y.vadd(n,y),y.vsub(o.position,y),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,o,l,c,h,d){return this.convexHeightfield(e,t,i,n,r,s,l,o,c,h,d)}particleCylinder(t,e,n,i,s,r,o,l,c,h,d){return this.convexParticle(e,t,i,n,r,s,l,o,c,h,d)}sphereTrimesh(t,e,n,i,s,r,o,l,c,h,d){const u=i0,m=s0,g=r0,f=o0,p=a0,_=l0,v=d0,y=n0,x=t0,w=f0;Wt.pointToLocalFrame(i,r,n,p);const S=t.radius;v.lowerBound.set(p.x-S,p.y-S,p.z-S),v.upperBound.set(p.x+S,p.y+S,p.z+S),e.getTrianglesInAABB(v,w);const T=e0,M=t.radius*t.radius;for(let R=0;R<w.length;R++)for(let P=0;P<3;P++)if(e.getVertex(e.indices[w[R]*3+P],T),T.vsub(p,x),x.lengthSquared()<=M){if(y.copy(T),Wt.pointToWorldFrame(i,r,y,T),T.vsub(n,x),d)return!0;let N=this.createContactEquation(o,l,t,e,c,h);N.ni.copy(x),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),N.rj.copy(T),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let R=0;R<w.length;R++)for(let P=0;P<3;P++){e.getVertex(e.indices[w[R]*3+P],u),e.getVertex(e.indices[w[R]*3+(P+1)%3],m),m.vsub(u,g),p.vsub(m,_);const N=_.dot(g);p.vsub(u,_);let z=_.dot(g);if(z>0&&N<0&&(p.vsub(u,_),f.copy(g),f.normalize(),z=_.dot(f),f.scale(z,_),_.vadd(u,_),_.distanceTo(p)<t.radius)){if(d)return!0;const F=this.createContactEquation(o,l,t,e,c,h);_.vsub(p,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(o.position,F.ri),Wt.pointToWorldFrame(i,r,_,_),_.vsub(l.position,F.rj),Wt.vectorToWorldFrame(r,F.ni,F.ni),Wt.vectorToWorldFrame(r,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}const A=c0,D=h0,k=u0,G=Qg;for(let R=0,P=w.length;R!==P;R++){e.getTriangleVertices(w[R],A,D,k),e.getNormal(w[R],G),p.vsub(A,_);let N=_.dot(G);if(G.scale(N,_),p.vsub(_,_),N=_.distanceTo(p),re.pointInTriangle(_,A,D,k)&&N<t.radius){if(d)return!0;let z=this.createContactEquation(o,l,t,e,c,h);_.vsub(p,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(o.position,z.ri),Wt.pointToWorldFrame(i,r,_,_),_.vsub(l.position,z.rj),Wt.vectorToWorldFrame(r,z.ni,z.ni),Wt.vectorToWorldFrame(r,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}w.length=0}planeTrimesh(t,e,n,i,s,r,o,l,c,h,d){const u=new b,m=Zg;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const f=new b;f.copy(u),Wt.pointToWorldFrame(i,r,f,u);const p=$g;if(u.vsub(n,p),m.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(o,l,t,e,c,h);v.ni.copy(m);const y=Jg;m.scale(p.dot(m),y),u.vsub(y,y),v.ri.copy(y),v.ri.vsub(o.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const ni=new b,Di=new b,Pi=new b,Xg=new b,Yg=new b,jg=new oe,Kg=new oe,Zg=new b,$g=new b,Jg=new b,Qg=new b,t0=new b;new b;const e0=new b,n0=new b,i0=new b,s0=new b,r0=new b,o0=new b,a0=new b,l0=new b,c0=new b,h0=new b,u0=new b,d0=new We,f0=[],qs=new b,sl=new b,p0=new b,m0=new b,g0=new b;function v0(a,t,e){let n=null;const i=a.length;for(let s=0;s!==i;s++){const r=a[s],o=p0;a[(s+1)%i].vsub(r,o);const l=m0;o.cross(t,l);const c=g0;e.vsub(r,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Xs=new b,_0=new b,x0=new b,y0=new b,M0=[new b,new b,new b,new b,new b,new b],b0=new b,w0=new b,S0=new b,E0=new b,A0=new b,T0=new b,C0=new b,L0=new b,R0=new b,D0=new b,P0=new b,I0=new b,N0=new b,z0=new b;new b;new b;const B0=new b,O0=new b,F0=new b,k0=new b,U0=new b,G0=new b,V0=new b,H0=new b,W0=new b,q0=new b,rl=new oe,X0=new b;new b;const Y0=new b,ol=new b,j0=new b,K0=new b,Z0=new b,$0=[0],J0=new b,Q0=new b;class al{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let o=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[o];)o++;c=h===i[o],c||ll(t,h)}o=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>n[o];)o++;c=n[o]===h,c||ll(e,h)}}}function ll(a,t){a.push((t&4294901760)>>16,t&65535)}const Wr=(a,t)=>a<t?`${a}-${t}`:`${t}-${a}`;class tv{constructor(){this.data={keys:[]}}get(t,e){const n=Wr(t,e);return this.data[n]}set(t,e,n){const i=Wr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Wr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class ev extends Hl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new ag,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new kg,this.constraints=[],this.narrowphase=new qg(this),this.collisionMatrix=new Ya,this.collisionMatrixPrevious=new Ya,this.bodyOverlapKeeper=new al,this.shapeOverlapKeeper=new al,this.contactmaterials=[],this.contactMaterialTable=new tv,this.defaultMaterial=new Xi("default"),this.defaultContactMaterial=new qi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Js?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=re.ALL,n.from=t,n.to=e,n.callback=i,qr.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=re.ANY,n.from=t,n.to=e,n.result=i,qr.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=re.CLOSEST,n.from=t,n.to=e,n.result=i,qr.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof dt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ae.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ae.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ae.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=ov,i=av,s=this.bodies.length,r=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=dt.DYNAMIC;let u=-1/0;const m=this.constraints,g=rv;l.length();const f=l.x,p=l.y,_=l.z;let v=0;for(c&&(u=ae.now()),v=0;v!==s;v++){const R=r[v];if(R.type===d){const P=R.force,N=R.mass;P.x+=N*f,P.y+=N*p,P.z+=N*_}}for(let R=0,P=this.subsystems.length;R!==P;R++)this.subsystems[R].update();c&&(u=ae.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=ae.now()-u);let y=m.length;for(v=0;v!==y;v++){const R=m[v];if(!R.collideConnected)for(let P=n.length-1;P>=0;P-=1)(R.bodyA===n[P]&&R.bodyB===i[P]||R.bodyB===n[P]&&R.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),c&&(u=ae.now());const x=sv,w=e.length;for(v=0;v!==w;v++)x.push(e[v]);e.length=0;const S=this.frictionEquations.length;for(v=0;v!==S;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,g),c&&(h.narrowphase=ae.now()-u),c&&(u=ae.now()),v=0;v<this.frictionEquations.length;v++)o.addEquation(this.frictionEquations[v]);const T=e.length;for(let R=0;R!==T;R++){const P=e[R],N=P.bi,z=P.bj,X=P.si,F=P.sj;let q;if(N.material&&z.material?q=this.getContactMaterial(N.material,z.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,N.material&&z.material&&(N.material.friction>=0&&z.material.friction>=0&&N.material.friction*z.material.friction,N.material.restitution>=0&&z.material.restitution>=0&&(P.restitution=N.material.restitution*z.material.restitution)),o.addEquation(P),N.allowSleep&&N.type===dt.DYNAMIC&&N.sleepState===dt.SLEEPING&&z.sleepState===dt.AWAKE&&z.type!==dt.STATIC){const Y=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),et=z.sleepSpeedLimit**2;Y>=et*2&&(N.wakeUpAfterNarrowphase=!0)}if(z.allowSleep&&z.type===dt.DYNAMIC&&z.sleepState===dt.SLEEPING&&N.sleepState===dt.AWAKE&&N.type!==dt.STATIC){const Y=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),et=N.sleepSpeedLimit**2;Y>=et*2&&(z.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,z,!0),this.collisionMatrixPrevious.get(N,z)||(rs.body=z,rs.contact=P,N.dispatchEvent(rs),rs.body=N,z.dispatchEvent(rs)),this.bodyOverlapKeeper.set(N.id,z.id),this.shapeOverlapKeeper.set(X.id,F.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=ae.now()-u,u=ae.now()),v=0;v!==s;v++){const R=r[v];R.wakeUpAfterNarrowphase&&(R.wakeUp(),R.wakeUpAfterNarrowphase=!1)}for(y=m.length,v=0;v!==y;v++){const R=m[v];R.update();for(let P=0,N=R.equations.length;P!==N;P++){const z=R.equations[P];o.addEquation(z)}}o.solve(t,this),c&&(h.solve=ae.now()-u),o.removeAllEquations();const M=Math.pow;for(v=0;v!==s;v++){const R=r[v];if(R.type&d){const P=M(1-R.linearDamping,t),N=R.velocity;N.scale(P,N);const z=R.angularVelocity;if(z){const X=M(1-R.angularDamping,t);z.scale(X,z)}}}this.dispatchEvent(iv),c&&(u=ae.now());const D=this.stepnumber%(this.quatNormalizeSkip+1)===0,k=this.quatNormalizeFast;for(v=0;v!==s;v++)r[v].integrate(t,D,k);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=ae.now()-u),this.stepnumber+=1,this.dispatchEvent(nv);let G=!0;if(this.allowSleep)for(G=!1,v=0;v!==s;v++){const R=r[v];R.sleepTick(this.time),R.sleepState!==dt.SLEEPING&&(G=!0)}this.hasActiveBodies=G}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Ln,Rn),t){for(let s=0,r=Ln.length;s<r;s+=2)os.bodyA=this.getBodyById(Ln[s]),os.bodyB=this.getBodyById(Ln[s+1]),this.dispatchEvent(os);os.bodyA=os.bodyB=null}if(e){for(let s=0,r=Rn.length;s<r;s+=2)as.bodyA=this.getBodyById(Rn[s]),as.bodyB=this.getBodyById(Rn[s+1]),this.dispatchEvent(as);as.bodyA=as.bodyB=null}Ln.length=Rn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Ln,Rn),n){for(let s=0,r=Ln.length;s<r;s+=2){const o=this.getShapeById(Ln[s]),l=this.getShapeById(Ln[s+1]);Dn.shapeA=o,Dn.shapeB=l,o&&(Dn.bodyA=o.body),l&&(Dn.bodyB=l.body),this.dispatchEvent(Dn)}Dn.bodyA=Dn.bodyB=Dn.shapeA=Dn.shapeB=null}if(i){for(let s=0,r=Rn.length;s<r;s+=2){const o=this.getShapeById(Rn[s]),l=this.getShapeById(Rn[s+1]);Pn.shapeA=o,Pn.shapeB=l,o&&(Pn.bodyA=o.body),l&&(Pn.bodyB=l.body),this.dispatchEvent(Pn)}Pn.bodyA=Pn.bodyB=Pn.shapeA=Pn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new We;const qr=new re,ae=globalThis.performance||{};if(!ae.now){let a=Date.now();ae.timing&&ae.timing.navigationStart&&(a=ae.timing.navigationStart),ae.now=()=>Date.now()-a}new b;const nv={type:"postStep"},iv={type:"preStep"},rs={type:dt.COLLIDE_EVENT_NAME,body:null,contact:null},sv=[],rv=[],ov=[],av=[],Ln=[],Rn=[],os={type:"beginContact",bodyA:null,bodyB:null},as={type:"endContact",bodyA:null,bodyB:null},Dn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Pn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class ke{static audioCtx=null;static noiseBuffer=null;static init(){if(this.audioCtx){this.audioCtx.state==="suspended"&&this.audioCtx.resume();return}try{const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t,this.createNoiseBuffer())}catch(t){console.warn("Failed to initialize AudioContext:",t)}}static createNoiseBuffer(){if(!this.audioCtx)return;const t=this.audioCtx.sampleRate*1;this.noiseBuffer=this.audioCtx.createBuffer(1,t,this.audioCtx.sampleRate);const e=this.noiseBuffer.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}static playNoise(t,e,n,i="lowpass"){if(!this.audioCtx||!this.noiseBuffer)return;const s=this.audioCtx.createBufferSource();s.buffer=this.noiseBuffer;const r=this.audioCtx.createGain();r.gain.setValueAtTime(e,this.audioCtx.currentTime),r.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+t);let o=s;if(n!==void 0){const l=this.audioCtx.createBiquadFilter();l.type=i,l.frequency.setValueAtTime(n,this.audioCtx.currentTime),s.connect(l),o=l}o.connect(r),r.connect(this.audioCtx.destination),s.start(),s.stop(this.audioCtx.currentTime+t)}static playTone(t,e,n,i,s){if(!this.audioCtx)return;const r=this.audioCtx.createOscillator();r.type=t;const o=this.audioCtx.createGain();o.gain.setValueAtTime(s,this.audioCtx.currentTime),o.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+i),r.frequency.setValueAtTime(e,this.audioCtx.currentTime),e!==n&&r.frequency.exponentialRampToValueAtTime(n,this.audioCtx.currentTime+i),r.connect(o),o.connect(this.audioCtx.destination),r.start(),r.stop(this.audioCtx.currentTime+i)}static playBreak(t){if(this.init(),!!this.audioCtx)switch(t){case I.STONE:case I.COAL_ORE:case I.BRICK:this.playNoise(.18,.35,450,"bandpass"),this.playTone("triangle",130,40,.15,.3);break;case I.WOOD:case I.PLANK:case I.DOOR_CLOSED:case I.DOOR_OPEN:this.playNoise(.12,.3,600,"lowpass"),this.playTone("triangle",180,80,.12,.35);break;case I.GROUND:case I.DIRT:case I.LEAVES:this.playNoise(.08,.25,1200,"bandpass");break;case I.GLASS:this.playTone("sine",1600,800,.25,.35),this.playTone("sine",2200,1e3,.2,.2),this.playNoise(.18,.15,4e3,"highpass");break;default:this.playNoise(.1,.25,800,"lowpass");break}}static playPlace(t){if(this.init(),!!this.audioCtx)switch(t){case I.STONE:case I.COAL_ORE:case I.BRICK:this.playNoise(.08,.2,700,"bandpass"),this.playTone("triangle",180,120,.08,.18);break;case I.WOOD:case I.PLANK:case I.DOOR_CLOSED:case I.DOOR_OPEN:this.playNoise(.06,.2,900,"lowpass"),this.playTone("triangle",240,180,.06,.2);break;case I.GLASS:this.playTone("sine",1900,1700,.1,.2);break;default:this.playNoise(.05,.18,1400,"lowpass");break}}static playSwing(){this.init(),this.playTone("sine",600,90,.12,.25),this.playNoise(.08,.1,2500,"bandpass")}static playHit(){this.init(),this.playNoise(.12,.4,250,"lowpass"),this.playTone("sawtooth",120,40,.1,.3)}static playDamage(){this.init(),this.playTone("sawtooth",85,45,.16,.45),this.playNoise(.14,.25,350,"lowpass")}static playJump(){this.init(),this.playTone("triangle",160,280,.12,.2)}static playPickup(){this.init(),this.playTone("sine",950,1400,.08,.22)}}class Ye{position;camera;body;avatar;head;bodyMesh;leftArm;rightArm;leftLeg;rightLeg;cameraMode="1PV";armorType="none";armorMat;weapons1PV={};weapons3PV={};swingTime=0;hp=pt.PLAYER_MAX_HP;isDead=!1;spawnPosition;pitch=0;yaw=0;sensitivity=.002;speed=pt.PLAYER_SPEED;isGrounded=!1;isInWater=!1;isSprintingToggle=!1;jumpForce=7.5;lastVelocityY=0;lastDamageTime=0;lastRegenTime=0;voxelWorld;static tempVec3=new H;static tempVec3_2=new H;static tempQuat=new mi;static tempQuat_2=new mi;static tempDirection=new H;constructor(t,e,n,i){this.camera=t,this.position=e.clone(),this.spawnPosition=e.clone();const s=pt.PLAYER_RADIUS,r=pt.PLAYER_HEIGHT/2,o=new Yn(new b(s,r,s));this.body=new dt({mass:60,shape:o,position:new b(e.x,e.y+r,e.z),fixedRotation:!0,linearDamping:.1,material:n.playerMaterial}),n.world.addBody(this.body),this.avatar=new be,this.buildAvatar(),i.add(this.avatar),this.weapons1PV[14]=this.buildSword(13421772,7877903,15381256),this.weapons3PV[14]=this.buildSword(13421772,7877903,15381256),this.weapons1PV[22]=this.buildSword(65535,7877903,35071),this.weapons3PV[22]=this.buildSword(65535,7877903,35071),this.weapons1PV[23]=this.buildHammer(),this.weapons3PV[23]=this.buildHammer();for(const l of[14,22,23])this.weapons1PV[l].position.set(.24,-.24,-.38),this.weapons1PV[l].rotation.set(-30*Math.PI/180,45*Math.PI/180,15*Math.PI/180),this.weapons1PV[l].visible=!1,this.camera.add(this.weapons1PV[l]),this.weapons3PV[l].position.set(0,-.6,.1),this.weapons3PV[l].rotation.x=Math.PI/2,this.weapons3PV[l].visible=!1,this.rightArm.add(this.weapons3PV[l]);this.syncCamera()}buildAvatar(){const t=new me({color:16767916,roughness:.9}),e=new me({color:33023,roughness:.9}),n=new me({color:16767916,roughness:.9}),i=new me({color:2829184,roughness:.9}),s=new me({color:5913896,roughness:.9});this.armorMat=new me({color:16777215,roughness:.8,metalness:.1,visible:!1});const r=new Qt(.44,.44,.44),o=new Qt(.44,.62,.24),l=new Qt(.24,.35,.24);l.translate(0,-.175,0);const c=new Qt(.23,.4,.23);c.translate(0,-.2,0);const h=new Qt(.24,.2,.24);h.translate(0,-.5,0);const d=new Qt(.4,.4,.4);this.head=new Pt(d,t),this.head.position.y=.5,this.head.castShadow=!0,this.head.receiveShadow=!0;const u=new Qt(.42,.15,.42),m=new Pt(u,s);m.position.y=.15,this.head.add(m);const g=new Pt(r,this.armorMat);g.castShadow=!0,g.receiveShadow=!0,this.head.add(g),this.avatar.add(this.head);const f=new Qt(.4,.6,.2);this.bodyMesh=new Pt(f,e),this.bodyMesh.position.y=0,this.bodyMesh.castShadow=!0,this.bodyMesh.receiveShadow=!0;const p=new Pt(o,this.armorMat);p.castShadow=!0,p.receiveShadow=!0,this.bodyMesh.add(p),this.avatar.add(this.bodyMesh);const _=new Qt(.2,.6,.2);_.translate(0,-.3,0),this.leftArm=new be;const v=new Pt(_,n);v.castShadow=!0,v.receiveShadow=!0;const y=new Pt(l,this.armorMat);y.castShadow=!0,y.receiveShadow=!0,v.add(y),this.leftArm.add(v),this.leftArm.position.set(.3,.3,0),this.avatar.add(this.leftArm),this.rightArm=new be;const x=new Pt(_,n);x.castShadow=!0,x.receiveShadow=!0;const w=new Pt(l,this.armorMat);w.castShadow=!0,w.receiveShadow=!0,x.add(w),this.rightArm.add(x),this.rightArm.position.set(-.3,.3,0),this.avatar.add(this.rightArm),this.leftLeg=new be;const S=new Pt(_,i);S.castShadow=!0,S.receiveShadow=!0;const T=new Pt(c,this.armorMat);T.castShadow=!0,T.receiveShadow=!0,S.add(T);const M=new Pt(h,this.armorMat);M.castShadow=!0,M.receiveShadow=!0,S.add(M),this.leftLeg.add(S),this.leftLeg.position.set(.1,-.3,0),this.avatar.add(this.leftLeg),this.rightLeg=new be;const A=new Pt(_,i);A.castShadow=!0,A.receiveShadow=!0;const D=new Pt(c,this.armorMat);D.castShadow=!0,D.receiveShadow=!0,A.add(D);const k=new Pt(h,this.armorMat);k.castShadow=!0,k.receiveShadow=!0,A.add(k),this.rightLeg.add(A),this.rightLeg.position.set(-.1,-.3,0),this.avatar.add(this.rightLeg)}buildSword(t=13421772,e=7877903,n=15381256){const i=new be,s=new me({color:t,roughness:.3,metalness:.8}),r=new me({color:n,roughness:.5,metalness:.5}),o=new me({color:e,roughness:.9}),l=new Qt(.06,.45,.02);l.translate(0,.225,0);const c=new Pt(l,s);c.castShadow=!0,c.receiveShadow=!0,c.position.y=.02,i.add(c);const h=new Qt(.16,.04,.04),d=new Pt(h,r);d.castShadow=!0,d.receiveShadow=!0,d.position.y=0,i.add(d);const u=new Qt(.04,.12,.04);u.translate(0,-.06,0);const m=new Pt(u,o);return m.castShadow=!0,m.receiveShadow=!0,m.position.y=-.02,i.add(m),i}buildHammer(){const t=new be,e=new me({color:5592405,roughness:.7,metalness:.5}),n=new me({color:7877903,roughness:.9}),i=new Qt(.15,.15,.3);i.translate(0,.3,0);const s=new Pt(i,e);s.castShadow=!0,s.receiveShadow=!0,t.add(s);const r=new Qt(.04,.4,.04);r.translate(0,.05,0);const o=new Pt(r,n);return o.castShadow=!0,o.receiveShadow=!0,t.add(o),t}update(t,e,n,i){if(this.isDead)return;const s=performance.now();if(this.hp<pt.PLAYER_MAX_HP&&s-this.lastDamageTime>5e3&&s-this.lastRegenTime>1e3&&(this.hp=Math.min(pt.PLAYER_MAX_HP,this.hp+1),this.lastRegenTime=s),t.consumeJustPressed("F5")&&(this.cameraMode==="1PV"?this.cameraMode="3PV_BACK":this.cameraMode==="3PV_BACK"?this.cameraMode="3PV_FRONT":this.cameraMode="1PV"),(t.consumeJustPressed("ShiftLeft")||t.consumeJustPressed("ShiftRight"))&&(this.isSprintingToggle=!this.isSprintingToggle),this.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.handleStepClimb(n),this.isInWater=!1,this.voxelWorld){const r=Math.floor(this.position.x),o=Math.floor(this.position.y-pt.PLAYER_HEIGHT/2+.1),l=Math.floor(this.position.z);this.voxelWorld.getBlock(r,o,l)===I.WATER&&(this.isInWater=!0)}if(!t.isLocked){this.body.velocity.x*=.8,this.body.velocity.z*=.8;return}for(const r of[14,22,23]){const o=i===r;this.cameraMode==="1PV"?(this.weapons1PV[r].visible=o,this.weapons3PV[r].visible=!1):(this.weapons1PV[r].visible=!1,this.weapons3PV[r].visible=o)}this.handleRotation(t),this.checkGrounded(n),this.handleMovement(t,e),this.animateAvatar(e),this.syncCamera(),this.updateHUD()}handleRotation(t){const e=t.consumeMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch-=e.y*this.sensitivity;const n=85*Math.PI/180;this.pitch=Math.max(-n,Math.min(n,this.pitch))}checkGrounded(t){const e=pt.PLAYER_HEIGHT/2,n=this.position.y-e-.05,i=[{x:this.position.x,z:this.position.z},{x:this.position.x-.3,z:this.position.z-.3},{x:this.position.x+.3,z:this.position.z-.3},{x:this.position.x-.3,z:this.position.z+.3},{x:this.position.x+.3,z:this.position.z+.3}];let s=!1;for(const o of i){const l=Math.floor(o.x),c=Math.floor(n),h=Math.floor(o.z);if(t.getBlock(l,c,h)!==0){s=!0;break}}const r=s||Math.abs(this.body.velocity.y)<.05;if(r&&!this.isGrounded&&!this.isInWater&&this.lastVelocityY<pt.FALL_DAMAGE_MIN_SPEED){const o=Math.floor((pt.FALL_DAMAGE_MIN_SPEED-this.lastVelocityY)*pt.FALL_DAMAGE_FACTOR);o>0&&this.takeDamage(o)}this.isGrounded=r,this.lastVelocityY=this.body.velocity.y}handleStepClimb(t){const e=this.body.velocity.x,n=this.body.velocity.z,i=e*e+n*n;if(i<.01)return;const s=pt.PLAYER_HEIGHT/2,r=this.position.y-s,o=Math.sqrt(i),l=e/o,c=n/o,h=pt.PLAYER_RADIUS+.15,d=this.position.x+l*h,u=this.position.z+c*h,m=Math.floor(d),g=Math.floor(u),f=Math.floor(r+.15),p=t.getBlock(m,f,g),_=t.getBlock(m,f+1,g),v=t.getBlock(m,f+2,g);if(p!==0&&_===0&&v===0){let y=1;(p===I.BED_HEAD||p===I.BED_FOOT)&&(y=.5625);const x=f+y,w=x-r;w>.05&&w<=1.05&&(p===I.STAIRS?this.body.velocity.y=4:(this.body.position.y=x+s+.05,this.position.y=this.body.position.y,this.body.velocity.y<0&&(this.body.velocity.y=0)))}}setArmor(t){this.armorType=t,t==="none"?this.armorMat.visible=!1:(this.armorMat.visible=!0,t==="leather"?(this.armorMat.color.setHex(9132587),this.armorMat.roughness=.9,this.armorMat.metalness=0):t==="iron"?(this.armorMat.color.setHex(14211288),this.armorMat.roughness=.4,this.armorMat.metalness=.8):t==="diamond"&&(this.armorMat.color.setHex(2282478),this.armorMat.roughness=.3,this.armorMat.metalness=.6),this.armorMat.needsUpdate=!0)}takeDamage(t){if(this.isDead)return;this.lastDamageTime=performance.now(),t>0&&(this.armorType==="leather"?t=Math.max(1,Math.floor(t*.9)):this.armorType==="iron"?t=Math.max(1,Math.floor(t*.7)):this.armorType==="diamond"&&(t=Math.max(1,Math.floor(t*.4)))),this.hp=Math.max(0,this.hp-t),ke.playDamage();const e=document.getElementById("damage-overlay");e&&(e.style.opacity="0.5",setTimeout(()=>{e.style.opacity="0"},150)),this.hp<=0&&this.die()}die(){this.isDead=!0,this.body.velocity.set(0,0,0);const t=document.getElementById("death-screen");t&&(t.style.display="flex"),document.exitPointerLock()}respawn(){this.hp=pt.PLAYER_MAX_HP,this.isDead=!1,this.body.position.set(this.spawnPosition.x,this.spawnPosition.y+pt.PLAYER_HEIGHT/2,this.spawnPosition.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.pitch=0,this.yaw=0;const t=document.getElementById("death-screen");t&&(t.style.display="none");const e=document.getElementById("menu-overlay");e&&(e.style.display="flex")}handleMovement(t,e){const n=Ye.tempVec3.set(0,0,0);t.isActionActive("forward")&&(n.z-=1),t.isActionActive("backward")&&(n.z+=1),t.isActionActive("left")&&(n.x-=1),t.isActionActive("right")&&(n.x+=1),n.normalize();const i=Ye.tempDirection.copy(n);i.applyAxisAngle(Ye.tempVec3_2.set(0,1,0),this.yaw);let s=this.isSprintingToggle?this.speed*1.5:this.speed;this.isInWater&&(s*=.6);const r=i.x*s,o=i.z*s,l=this.isGrounded?15:3;this.body.velocity.x+=(r-this.body.velocity.x)*l*e,this.body.velocity.z+=(o-this.body.velocity.z)*l*e,t.isActionActive("jump")&&(this.isInWater?this.body.velocity.y=this.jumpForce*.4:this.isGrounded&&(this.body.velocity.y=this.jumpForce,this.isGrounded=!1,ke.playJump())),this.isInWater&&this.body.velocity.y<-2&&(this.body.velocity.y*=.8)}animateAvatar(t){this.avatar.position.copy(this.position),this.avatar.rotation.y=this.yaw,this.head.rotation.x=this.pitch;const n=this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z>.1&&this.isGrounded;if(n){const r=performance.now()*.01,o=Math.sin(r)*.8;this.leftArm.rotation.x=o,this.swingTime<=0&&(this.rightArm.rotation.x=-o),this.leftLeg.rotation.x=-o,this.rightLeg.rotation.x=o}else{const r=10*t;this.leftArm.rotation.x+=(0-this.leftArm.rotation.x)*r,this.swingTime<=0&&(this.rightArm.rotation.x+=(0-this.rightArm.rotation.x)*r),this.leftLeg.rotation.x+=(0-this.leftLeg.rotation.x)*r,this.rightLeg.rotation.x+=(0-this.rightLeg.rotation.x)*r}let i=!1,s=0;if(!n&&this.isGrounded&&this.voxelWorld){const r=Math.floor(this.position.x),o=pt.PLAYER_HEIGHT/2,l=Math.floor(this.position.y-o-.1),c=Math.floor(this.position.z),h=this.voxelWorld.getBlock(r,l,c);if(h===I.BED_HEAD||h===I.BED_FOOT){i=!0;const d=h===I.BED_HEAD?I.BED_FOOT:I.BED_HEAD;this.voxelWorld.getBlock(r+1,l,c)===d?s=h===I.BED_HEAD?-Math.PI/2:Math.PI/2:this.voxelWorld.getBlock(r-1,l,c)===d?s=h===I.BED_HEAD?Math.PI/2:-Math.PI/2:this.voxelWorld.getBlock(r,l,c+1)===d?s=h===I.BED_HEAD?Math.PI:0:this.voxelWorld.getBlock(r,l,c-1)===d&&(s=h===I.BED_HEAD?0:Math.PI)}}if(i){const r=-Math.PI/2;this.avatar.rotation.x+=(r-this.avatar.rotation.x)*10*t,this.avatar.rotation.y=s,this.avatar.position.y-=.5}else this.avatar.rotation.x+=(0-this.avatar.rotation.x)*10*t;if(this.swingTime>0){this.swingTime-=t;const r=(.15-this.swingTime)/.15,o=Math.sin(r*Math.PI)*1.2;if(this.cameraMode==="1PV")for(const l of[14,22,23])this.weapons1PV[l].rotation.x=-30*Math.PI/180+o,this.weapons1PV[l].rotation.y=45*Math.PI/180-o*.5,this.weapons1PV[l].position.z=-.38+o*.15;else this.rightArm.rotation.x=-Math.PI/3-o*1.5,this.rightArm.rotation.y=-o*.5}else if(this.cameraMode==="1PV")for(const r of[14,22,23])this.weapons1PV[r].rotation.set(-30*Math.PI/180,45*Math.PI/180,15*Math.PI/180),this.weapons1PV[r].position.set(.24,-.24,-.38)}syncCamera(){const t=Ye.tempQuat.setFromAxisAngle(Ye.tempVec3.set(0,1,0),this.yaw),e=Ye.tempQuat_2.setFromAxisAngle(Ye.tempVec3_2.set(1,0,0),this.pitch),n=Ye.tempQuat.multiplyQuaternions(t,e);this.camera.quaternion.copy(n);const i=pt.PLAYER_HEIGHT/2-.2;if(this.cameraMode==="1PV")this.camera.position.set(this.position.x,this.position.y+i,this.position.z),this.avatar.visible=!1;else{this.avatar.visible=!0,this.head.visible=!0;const s=4,r=Ye.tempVec3.set(0,i+.4,0),o=Ye.tempVec3_2.set(0,0,-1).applyQuaternion(n),l=new H(this.position.x+r.x,this.position.y+r.y,this.position.z+r.z);let c;this.cameraMode==="3PV_BACK"?c=o.clone().negate():c=new H(o.x,-o.y,o.z).normalize();const h=this.calcSafeCameraDist(l,c,s);this.cameraMode==="3PV_BACK"?this.camera.position.copy(l).addScaledVector(c,h):(this.camera.position.copy(l).addScaledVector(c,h),this.camera.lookAt(this.position.x,this.position.y+i,this.position.z))}}calcSafeCameraDist(t,e,n){if(!this.voxelWorld)return n;const i=.2,s=.1,r=Math.ceil(n/s);for(let o=1;o<=r;o++){const l=Math.min(o*s,n),c=t.x+e.x*l,h=t.y+e.y*l,d=t.z+e.z*l,u=Math.floor(c),m=Math.floor(h),g=Math.floor(d);if(this.voxelWorld.getBlock(u,m,g)!==0)return Math.max(0,l-i)}return n}updateHUD(){const t=document.getElementById("pos-display");t&&(t.textContent=`${this.position.x.toFixed(1)}, ${this.position.y.toFixed(1)}, ${this.position.z.toFixed(1)}`)}swing(){this.swingTime<=0&&(this.swingTime=.15)}getYaw(){return this.yaw}setWorld(t){this.voxelWorld=t}getSaveData(){return{x:this.body.position.x,y:this.body.position.y,z:this.body.position.z,hp:this.hp,yaw:this.yaw,pitch:this.pitch,armorType:this.armorType}}loadSaveData(t){if(!t)return;this.hp=typeof t.hp=="number"?t.hp:pt.PLAYER_MAX_HP,this.isDead=this.hp<=0,t.armorType?this.setArmor(t.armorType):this.setArmor("none");const e=document.getElementById("death-screen");e&&(e.style.display=this.isDead?"flex":"none"),this.yaw=typeof t.yaw=="number"?t.yaw:0,this.pitch=typeof t.pitch=="number"?t.pitch:0,this.body.position.set(t.x,t.y,t.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.position.set(t.x,t.y,t.z),this.syncCamera(),this.updateHUD()}}class lv{world;playerMaterial;blockBodies=new Map;blockShape;bedShape;constructor(){this.world=new ev,this.world.gravity.set(0,pt.GRAVITY,0),this.world.broadphase=new Bi(this.world),this.world.solver.iterations=5;const t=new Xi("default"),e=new qi(t,t,{friction:.1,restitution:0});this.world.addContactMaterial(e),this.world.defaultContactMaterial=e,this.playerMaterial=new Xi("player");const n=new qi(this.playerMaterial,t,{friction:0,restitution:0});this.world.addContactMaterial(n),this.blockShape=new Yn(new b(.5,.5,.5)),this.bedShape=new Yn(new b(.5,.5625/2,.5));const i=new dt({mass:0,shape:new Og});i.quaternion.setFromEuler(-Math.PI/2,0,0),i.position.set(0,-50,0),this.world.addBody(i)}updateBlockBodies(t,e){const i=Math.floor(t.x),s=Math.floor(t.y),r=Math.floor(t.z),o=new Set;for(let l=i-3;l<=i+3;l++)for(let c=s-3-1;c<=s+3;c++)for(let h=r-3;h<=r+3;h++){const d=e.getBlock(l,c,h),u=Ui[d];if(u&&u.isSolid){const m=`${l},${c},${h}`;if(o.add(m),!this.blockBodies.has(m)){let g=this.blockShape,f=.5;(d===I.BED_HEAD||d===I.BED_FOOT)&&(g=this.bedShape,f=.5625/2);const p=new dt({mass:0,shape:g,position:new b(l+.5,c+f,h+.5)});this.world.addBody(p),this.blockBodies.set(m,p)}}}for(const[l,c]of this.blockBodies.entries())o.has(l)||(this.world.removeBody(c),this.blockBodies.delete(l))}step(t){this.world.step(1/60,t,3);const e=document.getElementById("bodies-display");e&&(e.textContent=this.world.bodies.length.toString())}}class cv{overlay;modal;configBtn;keyButtons;invertClicksChk;enableShadowsChk;saveBtn;defaultBtn;closeBtn;tempConfig;activeBindingKey=null;globalKeydownListener=null;constructor(){this.overlay=document.getElementById("menu-overlay"),this.modal=document.getElementById("config-modal"),this.configBtn=document.getElementById("config-btn"),this.keyButtons={forward:document.getElementById("key-forward-btn"),backward:document.getElementById("key-backward-btn"),left:document.getElementById("key-left-btn"),right:document.getElementById("key-right-btn"),jump:document.getElementById("key-jump-btn"),place:document.getElementById("key-place-btn"),break:document.getElementById("key-break-btn")},this.invertClicksChk=document.getElementById("invert-clicks-chk"),this.enableShadowsChk=document.getElementById("enable-shadows-chk"),this.saveBtn=document.getElementById("config-save-btn"),this.defaultBtn=document.getElementById("config-default-btn"),this.closeBtn=document.getElementById("config-close-btn"),this.tempConfig={..._n.getConfig()},this.initEvents()}initEvents(){this.configBtn.addEventListener("click",()=>{this.openModal()}),this.keyButtons.forward.addEventListener("click",()=>this.startBinding("keyForward",this.keyButtons.forward)),this.keyButtons.backward.addEventListener("click",()=>this.startBinding("keyBackward",this.keyButtons.backward)),this.keyButtons.left.addEventListener("click",()=>this.startBinding("keyLeft",this.keyButtons.left)),this.keyButtons.right.addEventListener("click",()=>this.startBinding("keyRight",this.keyButtons.right)),this.keyButtons.jump.addEventListener("click",()=>this.startBinding("keyJump",this.keyButtons.jump)),this.keyButtons.place.addEventListener("click",()=>this.startBinding("keyPlaceBlock",this.keyButtons.place)),this.keyButtons.break.addEventListener("click",()=>this.startBinding("keyBreakBlock",this.keyButtons.break)),this.saveBtn.addEventListener("click",()=>{this.saveConfig()}),this.defaultBtn.addEventListener("click",()=>{this.loadDefaultConfig()}),this.closeBtn.addEventListener("click",()=>{this.closeModal()})}openModal(){this.tempConfig={..._n.getConfig()},this.updateUI(),this.modal.style.display="flex"}closeModal(){this.stopBinding(),this.modal.style.display="none"}updateUI(){this.keyButtons.forward.textContent=this.formatKeyName(this.tempConfig.keyForward),this.keyButtons.backward.textContent=this.formatKeyName(this.tempConfig.keyBackward),this.keyButtons.left.textContent=this.formatKeyName(this.tempConfig.keyLeft),this.keyButtons.right.textContent=this.formatKeyName(this.tempConfig.keyRight),this.keyButtons.jump.textContent=this.formatKeyName(this.tempConfig.keyJump),this.keyButtons.place.textContent=this.formatKeyName(this.tempConfig.keyPlaceBlock),this.keyButtons.break.textContent=this.formatKeyName(this.tempConfig.keyBreakBlock),this.invertClicksChk.checked=this.tempConfig.invertClicks,this.enableShadowsChk.checked=this.tempConfig.enableShadows}formatKeyName(t){return t.startsWith("Key")?t.substring(3):t.startsWith("Digit")?t.substring(5):t==="Space"?"Space":t}startBinding(t,e){this.stopBinding(),this.activeBindingKey=t,e.classList.add("waiting"),e.textContent="キーを入力...",this.globalKeydownListener=n=>{n.preventDefault(),n.stopPropagation();const i=n.code;if(i==="Escape"){this.stopBinding(),this.updateUI();return}this.activeBindingKey&&(this.tempConfig[this.activeBindingKey]=i),this.stopBinding(),this.updateUI()},window.addEventListener("keydown",this.globalKeydownListener,!0)}stopBinding(){this.globalKeydownListener&&(window.removeEventListener("keydown",this.globalKeydownListener,!0),this.globalKeydownListener=null),Object.values(this.keyButtons).forEach(t=>{t.classList.remove("waiting")}),this.activeBindingKey=null}saveConfig(){this.tempConfig.invertClicks=this.invertClicksChk.checked,this.tempConfig.enableShadows=this.enableShadowsChk.checked,_n.save(this.tempConfig),this.closeModal(),this.updateInstructionsUI(),window.dispatchEvent(new CustomEvent("config-changed"))}loadDefaultConfig(){const t={keyForward:"KeyW",keyBackward:"KeyS",keyLeft:"KeyA",keyRight:"KeyD",keyJump:"Space",keyPlaceBlock:"KeyV",keyBreakBlock:"KeyB",invertClicks:!1,enableShadows:!0};this.tempConfig={...t},this.updateUI()}updateInstructionsUI(){const t=_n.getConfig(),e=this.overlay.querySelectorAll(".key-badge");e.length>=5&&(e[0].textContent=this.formatKeyName(t.keyForward),e[1].textContent=this.formatKeyName(t.keyLeft),e[2].textContent=this.formatKeyName(t.keyBackward),e[3].textContent=this.formatKeyName(t.keyRight),e[4].textContent=this.formatKeyName(t.keyJump));const n=this.overlay.querySelector("#click-break-badge"),i=this.overlay.querySelector("#key-break-badge");n&&i&&(n.textContent=t.invertClicks?"右クリック":"左クリック",i.textContent=this.formatKeyName(t.keyBreakBlock));const s=this.overlay.querySelector("#click-place-badge"),r=this.overlay.querySelector("#key-place-badge");s&&r&&(s.textContent=t.invertClicks?"左クリック":"右クリック",r.textContent=this.formatKeyName(t.keyPlaceBlock))}}class hv{time=0;timeScale=.01;sunLight;ambientLight;scene;skyColor=new Ht;sunColor=new Ht;ambientColor=new Ht;constructor(t){this.scene=t,this.scene.background=this.skyColor;const e=_n.getConfig();this.sunLight=new Em(16777215,1.2),this.sunLight.castShadow=e.enableShadows,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=80;const n=30;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.ambientLight=new Am(16777215,.4),this.scene.add(this.ambientLight)}update(t,e){const n=this.time*Math.PI*2,i=Math.sin(n);let s=1;i>-.1?s=.35:s=2.5,this.time=(this.time+this.timeScale*s*t)%1;const r=this.time*Math.PI*2,o=Math.sin(r),l=Math.cos(r);this.sunLight.position.set(e.x+l*40,e.y+o*40,e.z+l*20),this.sunLight.target.position.copy(e),this.sunLight.target.updateMatrixWorld();const c=Math.max(0,Math.min(1,o*2+.5)),h=Qe.lerp(.02,.45,c),d=Qe.lerp(.03,.65,c),u=Qe.lerp(.08,.95,c);this.skyColor.setRGB(h,d,u);const m=Qe.lerp(0,1.2,c);this.sunLight.intensity=m;const g=Qe.lerp(.1,1,c),f=Qe.lerp(.1,.95,c),p=Qe.lerp(.2,.85,c);this.sunColor.setRGB(g,f,p),this.sunLight.color.copy(this.sunColor);const _=Qe.lerp(.22,.45,c);this.ambientLight.intensity=_;const v=Qe.lerp(.15,1,c),y=Qe.lerp(.18,1,c),x=Qe.lerp(.35,1,c);this.ambientColor.setRGB(v,y,x),this.ambientLight.color.copy(this.ambientColor)}setShadowsEnabled(t){this.sunLight.castShadow=t}isNight(){const t=this.time*Math.PI*2;return Math.sin(t)<-.1}}const uv={[I.GROUND]:4906624,[I.DIRT]:8736014,[I.STONE]:10265519,[I.WOOD]:7877903,[I.LEAVES]:2278750,[I.PLANK]:16096779,[I.BRICK]:15680580,[I.SAND]:16707722,[I.COAL_ORE]:3621201,[I.TORCH]:16347926,[I.GLASS]:14742270,[I.DOOR_CLOSED]:11817737,[I.SWORD]:13421772};class ci{blockType;mesh;body;scene;physicsWorld;age=0;isAttracted=!1;static sharedGeometry=new Qt(.2,.2,.2);static materialPool=new Map;static tempVec3=new H;static tempVec3_2=new H;constructor(t,e,n,i,s){this.blockType=t,this.scene=n,this.physicsWorld=i;let r=ci.materialPool.get(t);if(!r){const l=uv[t]||16777215;r=new me({color:l,roughness:.8,metalness:.1}),ci.materialPool.set(t,r)}this.mesh=new Pt(ci.sharedGeometry,r),this.mesh.position.copy(e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh);const o=new Yn(new b(.1,.1,.1));if(this.body=new dt({mass:1,shape:o,position:new b(e.x,e.y,e.z)}),s){const l=s.clone().sub(e),c=l.length();l.normalize(),l.y+=.5,l.normalize();const h=Math.min(Math.max(c*2,4),15);this.body.velocity.set(l.x*h,l.y*h,l.z*h),this.body.linearDamping=.1}else this.body.velocity.set((Math.random()-.5)*4,Math.random()*4+2,(Math.random()-.5)*4);this.physicsWorld.addBody(this.body)}update(t,e){if(this.age+=t,this.age>pt.ITEM_DESPAWN_TIME)return this.destroy(),!0;const n=ci.tempVec3.set(this.body.position.x,this.body.position.y,this.body.position.z),i=n.distanceTo(e);if(i<pt.ITEM_PICKUP_RADIUS){this.isAttracted=!0,this.body.world&&this.physicsWorld.removeBody(this.body);const s=ci.tempVec3_2.copy(e).sub(n).normalize();if(n.add(s.multiplyScalar(22*t)),this.mesh.position.copy(n),i<.5)return this.destroy(),!0}else this.isAttracted?(this.isAttracted=!1,this.body.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z),this.body.velocity.set(0,0,0),this.physicsWorld.addBody(this.body)):(this.mesh.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.mesh.rotation.x+=t*2,this.mesh.rotation.y+=t*1.5);return!1}destroy(){this.mesh&&this.scene.remove(this.mesh),this.body.world&&this.physicsWorld.removeBody(this.body)}}class Me{mesh;body;hp=4;scene;physicsWorld;head;leftLeg;rightLeg;speed=3;jumpForce=6;attackCooldown=0;damageFlashTime=0;static sharedHeadGeo=new Qt(.4,.4,.4);static sharedBodyGeo=new Qt(.4,.6,.2);static sharedLimbGeo=new Qt(.2,.6,.2);static zombieGreenMat=new me({color:5614165,roughness:.9});static zombieBlueMat=new me({color:3362408,roughness:.9});static zombiePurpleMat=new me({color:4729947,roughness:.9});static damageMat=new me({color:16724787,roughness:.5});static tempVec3=new H;static tempDirection=new H;constructor(t,e,n){this.scene=e,this.physicsWorld=n;const i=.35,s=.9,r=new Yn(new b(i,s,i));this.body=new dt({mass:50,shape:r,position:new b(t.x,t.y+s,t.z),fixedRotation:!0,linearDamping:.1}),this.physicsWorld.addBody(this.body),this.mesh=new be,this.buildAvatar(),this.scene.add(this.mesh)}buildAvatar(){const t=Me.zombieGreenMat,e=Me.zombieBlueMat,n=Me.zombieGreenMat,i=Me.zombiePurpleMat;this.head=new Pt(Me.sharedHeadGeo,t),this.head.position.y=.5,this.head.castShadow=!0,this.head.receiveShadow=!0,this.mesh.add(this.head);const s=new Pt(Me.sharedBodyGeo,e);s.position.y=0,s.castShadow=!0,s.receiveShadow=!0,this.mesh.add(s);const r=Me.sharedLimbGeo.clone();r.translate(0,-.3,0);const o=new be,l=new Pt(r,n);l.castShadow=!0,l.receiveShadow=!0,o.add(l),o.position.set(.3,.3,0),o.rotation.x=-Math.PI/2,this.mesh.add(o);const c=new be,h=new Pt(r,n);h.castShadow=!0,h.receiveShadow=!0,c.add(h),c.position.set(-.3,.3,0),c.rotation.x=-Math.PI/2,this.mesh.add(c),this.leftLeg=new be;const d=new Pt(r,i);d.castShadow=!0,d.receiveShadow=!0,this.leftLeg.add(d),this.leftLeg.position.set(.1,-.3,0),this.mesh.add(this.leftLeg),this.rightLeg=new be;const u=new Pt(r,i);u.castShadow=!0,u.receiveShadow=!0,this.rightLeg.add(u),this.rightLeg.position.set(-.1,-.3,0),this.mesh.add(this.rightLeg)}update(t,e){const n=e.position,s=Me.tempVec3.set(this.body.position.x,this.body.position.y,this.body.position.z).distanceTo(n);if(s>pt.MOB_DESPAWN_RADIUS)return this.destroy(),!0;if(this.damageFlashTime>0&&(this.damageFlashTime-=t,this.damageFlashTime<=0&&this.setMaterials(!1)),e.hp>0?this.runAI(t,n,s,e):(this.body.velocity.x*=.8,this.body.velocity.z*=.8),this.mesh.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z>.1){const o=performance.now()*.01,l=Math.sin(o)*.8;this.leftLeg.rotation.x=-l,this.rightLeg.rotation.x=l}else this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0;return!1}runAI(t,e,n,i){const s=Me.tempDirection.set(e.x-this.body.position.x,0,e.z-this.body.position.z);s.normalize();const r=Math.atan2(s.x,s.z);if(this.mesh.rotation.y=r,n<pt.MOB_SPAWN_RADIUS){this.body.velocity.x=s.x*this.speed,this.body.velocity.z=s.z*this.speed;const o=this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z,l=this.speed*this.speed,c=o<l*.25,h=Math.abs(this.body.velocity.y)<.02;c&&h&&(this.body.velocity.y=this.jumpForce)}else this.body.velocity.x*=.8,this.body.velocity.z*=.8;this.attackCooldown>0&&(this.attackCooldown-=t),n<1.3&&this.attackCooldown<=0&&(i.takeDamage(2),this.attackCooldown=1.2)}takeDamage(t,e){return this.hp-=t,this.damageFlashTime=.2,this.setMaterials(!0),ke.playHit(),this.body.velocity.y=4,this.body.velocity.x=e.x*6,this.body.velocity.z=e.z*6,this.hp<=0?(this.destroy(),!0):!1}setMaterials(t){this.mesh.traverse(e=>{e instanceof Pt&&(t?e.material=Me.damageMat:e===this.head||e.parent===this.head?e.material=Me.zombieGreenMat:e.name==="hair"?e.material=new me({color:5913896,roughness:.9}):e.position.y===0?e.material=Me.zombieBlueMat:e.position.y===-.3||e.parent?.position.y===-.3?e.material=Me.zombiePurpleMat:e.material=Me.zombieGreenMat)})}destroy(){this.mesh&&this.scene.remove(this.mesh),this.body.world&&this.physicsWorld.removeBody(this.body)}}class dv{player;world;accountId=null;worldId="shared_world_1";autoSaveInterval=null;isSaving=!1;onSaveCustomData;onLoadCustomData;constructor(t,e){this.player=t,this.world=e}setAccountId(t){this.accountId=t}getAccountId(){return this.accountId}setWorldId(t){this.worldId=t||"shared_world_1"}async loadData(){if(!this.accountId)return console.error("Account ID is not set."),!1;try{this.showToast("データをロード中...");const e=await(await fetch(`${pt.GAS_WEB_APP_URL}?accountId=${encodeURIComponent(this.accountId)}&worldId=${encodeURIComponent(this.worldId)}`)).json();if(e.worldData&&this.world.setModifiedBlocksData(e.worldData),e.playerData)this.player.loadSaveData(e.playerData),this.onLoadCustomData&&e.playerData.customData&&this.onLoadCustomData(e.playerData.customData);else{const i=Math.floor(Math.random()*300*2)-300+100,s=Math.floor(Math.random()*300*2)-300+100;this.player.position.set(i,30,s),this.player.body.position.set(i,30,s),this.player.body.velocity.set(0,0,0),this.player.spawnPosition.set(i,30,s)}return this.world.clearAndRebuild(this.player.position.x,this.player.position.z),this.showToast("ロードが完了しました"),!0}catch(t){return console.error("Failed to load data:",t),this.showToast("ロードに失敗しました",!0),!1}}async saveData(){if(!this.accountId)return console.error("Account ID is not set."),!1;if(this.isSaving)return!1;this.isSaving=!0;try{this.showToast("セーブ中...");const t=this.world.getModifiedBlocksData(),e=this.player.getSaveData();this.onSaveCustomData&&(e.customData=this.onSaveCustomData());const n={accountId:this.accountId,worldId:this.worldId,worldData:t,playerData:e},s=await(await fetch(pt.GAS_WEB_APP_URL,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(n)})).json();if(this.isSaving=!1,s.success)return this.showToast("セーブしました"),!0;throw new Error(s.error)}catch(t){return console.error("Failed to save data:",t),this.showToast("セーブに失敗しました",!0),this.isSaving=!1,!1}}startAutoSave(t=3){this.stopAutoSave(),this.autoSaveInterval=window.setInterval(()=>{this.accountId&&this.saveData()},t*60*1e3)}stopAutoSave(){this.autoSaveInterval!==null&&(window.clearInterval(this.autoSaveInterval),this.autoSaveInterval=null)}showToast(t,e=!1){const n=document.getElementById("save-toast");n&&(n.textContent=t,n.style.backgroundColor=e?"rgba(220, 53, 69, 0.9)":"rgba(40, 167, 69, 0.9)",n.style.opacity="1",n.style.transform="translateY(0)",setTimeout(()=>{n.style.opacity="0",n.style.transform="translateY(-20px)"},3e3))}}const cn=new Lm("canvas-container"),ms=new lv,Ue=new zm(document.body),Nt=new Ye(cn.camera,new H(8,5,8),ms,cn.scene),oo=new hv(cn.scene),In=[],je=[],Ve={[I.AIR]:0,[I.GROUND]:64,[I.DIRT]:64,[I.STONE]:64,[I.WOOD]:64,[I.LEAVES]:64,[I.PLANK]:64,[I.BRICK]:64,[I.SAND]:64,[I.COAL_ORE]:64,[I.TORCH]:64,[I.GLASS]:64,[I.DOOR_CLOSED]:64,[I.DOOR_OPEN]:0,[I.SWORD]:1,[I.STAIRS]:64,[I.FENCE]:64,[I.BED_HEAD]:64,[I.BED_FOOT]:0,[I.FURNACE]:64,[I.CHEST]:64,[I.WATER]:64,[I.DIAMOND_SWORD]:1,[I.HAMMER]:1},fv=new cv;fv.updateInstructionsUI();const cl=document.getElementById("respawn-btn");cl&&cl.addEventListener("click",()=>{Nt.respawn(),Ue.requestLock(),ke.init(),tr||(tr=!0,requestAnimationFrame(bo))});let te=I.GROUND,jn=0;const $e=[[I.GROUND,I.DIRT,I.STONE,I.WOOD,I.LEAVES,I.PLANK,I.BRICK,I.SAND,I.TORCH],[I.GLASS,I.DOOR_CLOSED,I.COAL_ORE,I.DIAMOND_SWORD,I.HAMMER,I.STAIRS,I.FENCE,I.BED_HEAD,I.FURNACE]];let Je=0,On=$e[Je];const Jl=document.querySelectorAll(".hotbar-slot"),hl=document.getElementById("hotbar-label");function Mo(a){switch(a){case I.GROUND:return"slot-grass";case I.DIRT:return"slot-dirt";case I.STONE:return"slot-stone";case I.WOOD:return"slot-wood";case I.LEAVES:return"slot-leaves";case I.PLANK:return"slot-plank";case I.BRICK:return"slot-brick";case I.SAND:return"slot-sand";case I.TORCH:return"slot-torch";case I.GLASS:return"slot-glass";case I.DOOR_CLOSED:return"slot-door";case I.COAL_ORE:return"slot-coal";case I.STAIRS:return"slot-stairs";case I.FENCE:return"slot-fence";case I.BED_HEAD:return"slot-bed";case I.FURNACE:return"slot-furnace";case I.CHEST:return"slot-chest";case I.WATER:return"slot-water";case I.SWORD:return"slot-sword";case I.DIAMOND_SWORD:return"slot-diamond-sword";case I.HAMMER:return"slot-hammer";default:return""}}function Mn(){Jl.forEach((t,e)=>{const n=On[e];t.setAttribute("data-block",n.toString());const i=t.querySelector(".slot-icon");if(i){i.className="slot-icon";const r=Mo(n);r&&i.classList.add(r)}const s=document.getElementById(`count-${e}`);s&&(s.textContent=(Ve[n]||0).toString())});const a=document.getElementById("hotbar-page-indicator");a&&(a.textContent=(Je+1).toString()),Qs(jn)}Mn();function Qs(a){a<0||a>=On.length||(jn=a,te=On[a],Jl.forEach((t,e)=>{e===a?t.classList.add("active"):t.classList.remove("active")}),hl&&(hl.textContent=Ui[te].name))}const Bt=new Nm(cn.scene);Nt.setWorld(Bt);const Le=new dv(Nt,Bt);Le.onSaveCustomData=()=>({inventory:{blocks:Ve,hotbarPages:$e,activePage:Je,activeSlotIndex:jn}});Le.onLoadCustomData=a=>{if(a&&a.inventory){const t=a.inventory;t.blocks&&Object.assign(Ve,t.blocks),t.hotbarPages&&($e[0]=[...t.hotbarPages[0]],$e[1]=[...t.hotbarPages[1]]),typeof t.activePage=="number"&&(Je=t.activePage,On=$e[Je]),typeof t.activeSlotIndex=="number"&&(jn=t.activeSlotIndex),Mn()}};const pv=yv();pv?Bt.clearAndRebuild(Nt.position.x,Nt.position.z):Bt.generateWorldAround(Nt.position.x,Nt.position.z);const on=document.getElementById("account-id-input"),Fn=document.getElementById("world-id-input");function sr(a){const t=document.getElementById("account-id-list");if(!t)return;let e=[];try{const i=localStorage.getItem("maikurafu_account_ids");i&&(e=JSON.parse(i))}catch{}a&&!e.includes(a)&&(e.push(a),localStorage.setItem("maikurafu_account_ids",JSON.stringify(e)));const n=i=>{t.innerHTML="",i.forEach(s=>{const r=document.createElement("option");r.value=s,t.appendChild(r)})};n(e);{const i=Fn&&Fn.value.trim()||"shared_world_1";fetch(`${pt.GAS_WEB_APP_URL}?action=listAccounts&worldId=${encodeURIComponent(i)}`).then(s=>s.json()).then(s=>{if(s.accounts&&Array.isArray(s.accounts)){let r=!1;s.accounts.forEach(o=>{e.includes(o)||(e.push(o),r=!0)}),r&&(localStorage.setItem("maikurafu_account_ids",JSON.stringify(e)),n(e))}}).catch(s=>console.warn("Failed to fetch accounts from server:",s))}}sr();const Xr=new Tm,ul=6;function mv(){const a=document.getElementById("hp-container");if(a){const t=pt.PLAYER_MAX_HP,e=Nt.hp;let n="";for(let i=1;i<=t;i++)n+=i<=e?"❤":"🖤";a.textContent=n}}function Ks(a,t,e){if(In.length>=pt.MAX_DROPPED_ITEMS){const i=In.shift();i&&i.destroy()}const n=new ci(a,t,cn.scene,ms.world,e);In.push(n)}const ls=new H,Ys=new H;let Yr=0,jr=0,dl=0;function bo(a){requestAnimationFrame(bo);const t=Math.min((a-dl)/1e3,.1);if(dl=a,ms.updateBlockBodies(Nt.position,Bt),ms.step(t),Nt.update(Ue,t,Bt,te),oo.update(t,Nt.position),Ue.consumeJustPressed("Tab")&&(Je=1-Je,On=$e[Je],Mn()),Ue.consumeJustPressed("KeyE")&&(xn&&xn.style.display==="flex"?tc():_v()),Ue.consumeJustPressed("KeyQ")&&Ve[te]>0){Ve[te]--,Mn();const n=pt.PLAYER_HEIGHT/2-.2;Ys.copy(Nt.position),Ys.y+=n,ls.set(0,0,-1).applyQuaternion(cn.camera.quaternion),Ys.addScaledVector(ls,.8),Ks(te,Ys);const i=In[In.length-1];i&&i.body.velocity.set(ls.x*6+(Math.random()-.5)*.5,ls.y*6+2,ls.z*6+(Math.random()-.5)*.5)}for(let n=In.length-1;n>=0;n--){const i=In[n],s=i.update(t,Nt.position);i.mesh.position.distanceTo(Nt.position)<1.2?(Ve[i.blockType]=(Ve[i.blockType]||0)+1,Mn(),ke.playPickup(),i.destroy(),In.splice(n,1)):s&&In.splice(n,1)}if(oo.isNight()){if(Yr+=t,Yr>2&&(Yr=0,je.length<pt.MAX_MOBS)){const n=pt.MOB_SPAWN_RADIUS,i=Math.random()*Math.PI*2,s=12+Math.random()*(n-12),r=Math.floor(Nt.position.x+Math.cos(i)*s),o=Math.floor(Nt.position.z+Math.sin(i)*s);let l=0,c=!1;for(let h=15;h>=-10;h--)if(Bt.getBlock(r,h,o)!==I.AIR){l=h+1,c=!0;break}if(c){const h=new Me(new H(r,l,o),cn.scene,ms.world);je.push(h)}}}else for(let n=je.length-1;n>=0;n--)je[n].destroy(),je.splice(n,1);for(let n=je.length-1;n>=0;n--)je[n].update(t,Nt)&&je.splice(n,1);mv(),Ue.isLocked&&Bt.generateWorldAround(Nt.position.x,Nt.position.z),jr+=t,jr>5&&(jr=0,wo());const e=_n.getConfig();Ue.consumeJustPressed(e.keyPlaceBlock)&&ao(!1,!0),Ue.consumeJustPressed(e.keyBreakBlock)&&ao(!0,!1),cn.render()}function ao(a,t){if(!a&&!t)return;Xr.setFromCamera(new Yt(0,0),Nt.camera);const e=Bt.getChunkMeshes(),n=Xr.intersectObjects(e);if(n.length>0){const i=n[0];if(i.distance>ul)return;const s=i.point,r=i.face?.normal;if(!r)return;if(a){Nt.swing(),ke.playSwing();const o=[];je.forEach(g=>{g.mesh.traverse(f=>{f instanceof Pt&&o.push(f)})});const l=Xr.intersectObjects(o);if(l.length>0&&l[0].distance<ul){const g=l[0].object;let f=null;for(const p of je){let _=!1;if(p.mesh.traverse(v=>{v===g&&(_=!0)}),_){f=p;break}}if(f){const p=new H(0,0,-1).applyQuaternion(cn.camera.quaternion);p.y=.2,p.normalize();const _=te===I.DIAMOND_SWORD?6:te===I.HAMMER?5:te===I.SWORD?4:2;if(f.takeDamage(_,p)){const y=Math.random()<.4?I.COAL_ORE:I.STONE;Ks(y,new H(f.body.position.x,f.body.position.y,f.body.position.z),Nt.position);const x=je.indexOf(f);x>-1&&je.splice(x,1)}return}}const c=s.clone().sub(r.clone().multiplyScalar(.1)),h=Math.floor(c.x),d=Math.floor(c.y),u=Math.floor(c.z),m=Bt.getBlock(h,d,u);if(m!==I.AIR){if(Bt.setBlock(h,d,u,I.AIR),ke.playBreak(m),m===I.DOOR_CLOSED||m===I.DOOR_OPEN){const g=Bt.getBlock(h,d+1,u);(g===I.DOOR_CLOSED||g===I.DOOR_OPEN)&&Bt.setBlock(h,d+1,u,I.AIR);const f=Bt.getBlock(h,d-1,u);(f===I.DOOR_CLOSED||f===I.DOOR_OPEN)&&(Bt.setBlock(h,d-1,u,I.AIR),Bt.removeDoorOrientation(h,d-1,u)),Bt.removeDoorOrientation(h,d,u)}if(m===I.BED_HEAD||m===I.BED_FOOT){const g=m===I.BED_HEAD?I.BED_FOOT:I.BED_HEAD,f=[[h+1,u],[h-1,u],[h,u+1],[h,u-1]];for(const[p,_]of f)if(Bt.getBlock(p,d,_)===g){Bt.setBlock(p,d,_,I.AIR);break}Ks(I.BED_HEAD,new H(h+.5,d+.5,u+.5),Nt.position)}else m!==I.DOOR_OPEN&&Ks(m,new H(h+.5,d+.5,u+.5),Nt.position)}}else if(t){if(te===I.SWORD||te===I.DIAMOND_SWORD||te===I.HAMMER)return;const o=s.clone().sub(r.clone().multiplyScalar(.1)),l=Math.floor(o.x),c=Math.floor(o.y),h=Math.floor(o.z),d=Bt.getBlock(l,c,h);if(d===I.DOOR_CLOSED){Bt.setBlock(l,c,h,I.DOOR_OPEN),Bt.getBlock(l,c+1,h)===I.DOOR_CLOSED&&Bt.setBlock(l,c+1,h,I.DOOR_OPEN),ke.playPlace(I.DOOR_OPEN);return}else if(d===I.DOOR_OPEN){Bt.setBlock(l,c,h,I.DOOR_CLOSED),Bt.getBlock(l,c+1,h)===I.DOOR_OPEN&&Bt.setBlock(l,c+1,h,I.DOOR_CLOSED),ke.playPlace(I.DOOR_CLOSED);return}if(Ve[te]<=0)return;const u=s.clone().add(r.clone().multiplyScalar(.1)),m=Math.floor(u.x),g=Math.floor(u.y),f=Math.floor(u.z),p=pt.PLAYER_HEIGHT/2,_=Math.floor(Nt.position.x),v=Math.floor(Nt.position.y-p),y=Math.floor(Nt.position.z),x=m===_&&f===y&&(g===v||g===v+1),w=m===_&&f===y&&g===v,S=m===_&&f===y&&g===v+1,T=te===I.TORCH,M=te===I.DOOR_CLOSED,A=te===I.BED_HEAD;if(T||!x||w||S){if(M){Bt.setBlock(m,g,f,I.DOOR_CLOSED);const D=Nt.getYaw(),G=Math.abs(Math.sin(D))<.707?"NS":"EW";Bt.setDoorOrientation(m,g,f,G),Bt.getBlock(m,g+1,f)===I.AIR&&(Bt.setBlock(m,g+1,f,I.DOOR_CLOSED),Bt.setDoorOrientation(m,g+1,f,G)),ke.playPlace(te),Ve[te]--,Mn()}else if(A){Bt.setBlock(m,g,f,I.BED_HEAD);const D=Nt.getYaw();let k=0,G=0;const R=-Math.sin(D),P=-Math.cos(D);Math.abs(R)>Math.abs(P)?k=Math.sign(R):G=Math.sign(P);const N=m+k,z=f+G;Bt.getBlock(N,g,z)===I.AIR&&Bt.setBlock(N,g,z,I.BED_FOOT),ke.playPlace(te),Ve[I.BED_HEAD]--,Mn()}else Bt.setBlock(m,g,f,te),ke.playPlace(te),Ve[te]--,Mn();w&&(Nt.body.position.y=g+1+p+.05,Nt.position.y=Nt.body.position.y,Nt.body.velocity.y<0&&(Nt.body.velocity.y=0))}}}}window.addEventListener("mousedown",a=>{if(!Ue.isLocked)return;const t=_n.getConfig(),e=a.button===0,n=a.button===2,i=t.invertClicks?n:e,s=t.invertClicks?e:n;ao(i,s)});window.addEventListener("contextmenu",a=>{a.preventDefault()});const Ii=document.getElementById("start-btn"),gv=document.getElementById("menu-overlay");let tr=!1;if(Ii&&gv){Ii.addEventListener("click",async()=>{if(Fn&&Fn.value.trim()!==""&&Le.setWorldId(Fn.value.trim()),on&&on.value.trim()!==""){const e=on.value.trim();Le.setAccountId(e),sr(e),Ii.textContent="データをロード中...",Ii.setAttribute("disabled","true"),await Le.loadData(),Ii.textContent="ゲームスタート",Ii.removeAttribute("disabled"),Le.startAutoSave(3)}else Le.setAccountId(""),Le.stopAutoSave();Ue.requestLock(),ke.init(),tr||(tr=!0,requestAnimationFrame(bo))});const a=document.getElementById("hotbar"),t=document.getElementById("hud");document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===document.body?(a&&(a.style.display="flex"),t&&(t.style.display="block"),xn&&(xn.style.display="none")):xn&&xn.style.display==="flex"||(a&&(a.style.display="none"),t&&(t.style.display="none"),wo(),on&&on.value.trim()!==""&&Le.saveData().catch(n=>console.error("Cloud save failed:",n)))})}window.addEventListener("keydown",a=>{if(Ue.isLocked&&a.code.startsWith("Digit")){const t=parseInt(a.code.substring(5));t>=1&&t<=9&&Qs(t-1)}});window.addEventListener("wheel",a=>{if(Ue.isLocked){if(a.deltaY>0){const t=(jn+1)%On.length;Qs(t)}else if(a.deltaY<0){const t=(jn-1+On.length)%On.length;Qs(t)}}},{passive:!0});window.addEventListener("config-changed",()=>{const a=_n.getConfig();cn.renderer.shadowMap.enabled=a.enableShadows,oo.setShadowsEnabled(a.enableShadows),cn.scene.traverse(t=>{t instanceof Pt&&t.material&&(Array.isArray(t.material)?t.material.forEach(e=>{e.needsUpdate=!0}):t.material.needsUpdate=!0)})});const xn=document.getElementById("inventory-modal"),Kr=document.getElementById("inventory-item-list"),Zr=document.getElementById("inventory-hotbar-slots"),fl=document.getElementById("inventory-close-btn");let xs=null;const vv=[I.GROUND,I.DIRT,I.STONE,I.WOOD,I.LEAVES,I.PLANK,I.BRICK,I.SAND,I.COAL_ORE,I.TORCH,I.GLASS,I.DOOR_CLOSED,I.STAIRS,I.SWORD,I.FENCE,I.BED_HEAD,I.FURNACE,I.CHEST,I.WATER,I.DIAMOND_SWORD,I.HAMMER];function Ql(){const a=Nt.armorType;document.querySelectorAll(".armor-btn").forEach(e=>{e.getAttribute("data-armor")===a?e.classList.add("active"):e.classList.remove("active")})}function _v(){xn&&(document.exitPointerLock(),xn.style.display="flex",xs=null,ec(),nc(),Ql())}function tc(){xn&&(xn.style.display="none",Ue.requestLock())}fl&&fl.addEventListener("click",tc);const xv=document.querySelectorAll(".armor-btn");xv.forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-armor");t&&(Nt.setArmor(t),Ql())})});function ec(){Kr&&(Kr.innerHTML="",vv.forEach(a=>{const t=Ui[a],e=document.createElement("div");e.className="inventory-item",xs===a&&e.classList.add("selected");const n=document.createElement("div");n.className=`slot-icon ${Mo(a)}`,e.appendChild(n);const i=document.createElement("div");i.className="item-name",i.textContent=t.name,e.appendChild(i),e.addEventListener("click",()=>{xs=a,ec()}),Kr.appendChild(e)}))}function nc(){Zr&&(Zr.innerHTML="",$e.forEach((a,t)=>{a.forEach((e,n)=>{const i=document.createElement("div");i.className="inventory-hotbar-slot",t===Je&&(i.style.borderColor="rgba(255, 255, 255, 0.4)",i.style.background="rgba(255, 255, 255, 0.05)");const s=document.createElement("div");s.className=`slot-icon ${Mo(e)}`,i.appendChild(s);const r=document.createElement("div");r.className="slot-num",r.textContent=(n+1).toString(),i.appendChild(r),i.addEventListener("click",()=>{xs!==null&&($e[t][n]=xs,Mn(),nc())}),Zr.appendChild(i)})}))}function yv(){const a=localStorage.getItem("maikurafu_autosave");if(!a)return!1;try{const t=JSON.parse(a);if(t.player&&Nt.loadSaveData(t.player),t.inventory){const e=t.inventory;e.blocks&&Object.assign(Ve,e.blocks),e.hotbarPages&&($e[0]=[...e.hotbarPages[0]],$e[1]=[...e.hotbarPages[1]]),typeof e.activePage=="number"&&(Je=e.activePage,On=$e[Je]),typeof e.activeSlotIndex=="number"&&(jn=e.activeSlotIndex),Mn()}return t.world&&Bt.setModifiedBlocksData(t.world),console.log("Game auto-saved state successfully loaded from localStorage."),!0}catch(t){return console.warn("Failed to parse autosave data:",t),!1}}function wo(){const a={version:"1.0.0",timestamp:Date.now(),player:Nt.getSaveData(),inventory:{blocks:Ve,hotbarPages:$e,activePage:Je,activeSlotIndex:jn},world:Bt.getModifiedBlocksData()};localStorage.setItem("maikurafu_autosave",JSON.stringify(a)),console.log("Game auto-saved to localStorage.")}const ii=document.getElementById("cloud-save-btn"),si=document.getElementById("cloud-load-btn");ii&&ii.addEventListener("click",async()=>{if(on&&on.value.trim()!==""){const a=on.value.trim();Le.setAccountId(a),sr(a),Fn&&Le.setWorldId(Fn.value.trim()),wo();const t=ii.textContent;ii.textContent="セーブ中...",ii.setAttribute("disabled","true"),await Le.saveData(),ii.textContent=t,ii.removeAttribute("disabled")}else alert("アカウントIDを入力してください")});si&&si.addEventListener("click",async()=>{if(on&&on.value.trim()!==""){const a=on.value.trim();Le.setAccountId(a),sr(a),Fn&&Le.setWorldId(Fn.value.trim());const t=si.textContent;si.textContent="ロード中...",si.setAttribute("disabled","true"),await Le.loadData(),si.textContent=t,si.removeAttribute("disabled")}else alert("アカウントIDを入力してください")});

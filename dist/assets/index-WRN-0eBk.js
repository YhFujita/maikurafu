(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="150",lc=0,Co=1,cc=2,ml=1,gl=2,ls=3,Xn=0,He=1,zn=2,qn=0,Bi=1,To=2,Ro=3,Lo=4,hc=5,Ni=100,uc=101,dc=102,Do=103,Po=104,fc=200,pc=201,mc=202,gc=203,vl=204,_l=205,vc=206,_c=207,xc=208,yc=209,bc=210,Mc=0,wc=1,Sc=2,Jr=3,Ec=4,Ac=5,Cc=6,Tc=7,xl=0,Rc=1,Lc=2,On=0,Dc=1,Pc=2,Ic=3,Nc=4,zc=5,yl=300,Ui=301,Gi=302,Qr=303,to=304,nr=306,eo=1e3,Ge=1001,no=1002,xe=1003,Io=1004,hr=1005,Ke=1006,Oc=1007,ms=1008,fi=1009,Bc=1010,Fc=1011,bl=1012,kc=1013,hi=1014,ui=1015,gs=1016,Uc=1017,Gc=1018,Fi=1020,Vc=1021,rn=1023,Hc=1024,Wc=1025,di=1026,Vi=1027,qc=1028,Xc=1029,Yc=1030,jc=1031,Kc=1033,ur=33776,dr=33777,fr=33778,pr=33779,No=35840,zo=35841,Oo=35842,Bo=35843,Zc=36196,Fo=37492,ko=37496,Uo=37808,Go=37809,Vo=37810,Ho=37811,Wo=37812,qo=37813,Xo=37814,Yo=37815,jo=37816,Ko=37817,Zo=37818,$o=37819,Jo=37820,Qo=37821,mr=36492,$c=36283,ta=36284,ea=36285,na=36286,pi=3e3,Kt=3001,Jc=3200,Qc=3201,Ml=0,th=1,gn="srgb",vs="srgb-linear",wl="display-p3",gr=7680,eh=519,ia=35044,sa="300 es",io=1035;class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ra=1234567;const us=Math.PI/180,$s=180/Math.PI;function Yi(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[l&255]+ye[l>>8&255]+ye[l>>16&255]+ye[l>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Ie(l,t,e){return Math.max(t,Math.min(e,l))}function ho(l,t){return(l%t+t)%t}function nh(l,t,e,n,i){return n+(l-t)*(i-n)/(e-t)}function ih(l,t,e){return l!==t?(e-l)/(t-l):0}function ds(l,t,e){return(1-e)*l+e*t}function sh(l,t,e,n){return ds(l,t,1-Math.exp(-e*n))}function rh(l,t=1){return t-Math.abs(ho(l,t*2)-t)}function oh(l,t,e){return l<=t?0:l>=e?1:(l=(l-t)/(e-t),l*l*(3-2*l))}function ah(l,t,e){return l<=t?0:l>=e?1:(l=(l-t)/(e-t),l*l*l*(l*(l*6-15)+10))}function lh(l,t){return l+Math.floor(Math.random()*(t-l+1))}function ch(l,t){return l+Math.random()*(t-l)}function hh(l){return l*(.5-Math.random())}function uh(l){l!==void 0&&(ra=l);let t=ra+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dh(l){return l*us}function fh(l){return l*$s}function so(l){return(l&l-1)===0&&l!==0}function ph(l){return Math.pow(2,Math.ceil(Math.log(l)/Math.LN2))}function Sl(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function mh(l,t,e,n,i){const s=Math.cos,r=Math.sin,o=s(e/2),a=r(e/2),c=s((t+n)/2),h=r((t+n)/2),d=s((t-n)/2),u=r((t-n)/2),m=s((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":l.set(o*h,a*d,a*u,o*c);break;case"YZY":l.set(a*u,o*h,a*d,o*c);break;case"ZXZ":l.set(a*d,a*u,o*h,o*c);break;case"XZX":l.set(o*h,a*g,a*m,o*c);break;case"YXY":l.set(a*m,o*h,a*g,o*c);break;case"ZYZ":l.set(a*g,a*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cs(l,t){switch(t.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function Pe(l,t){switch(t.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}const Qe={DEG2RAD:us,RAD2DEG:$s,generateUUID:Yi,clamp:Ie,euclideanModulo:ho,mapLinear:nh,inverseLerp:ih,lerp:ds,damp:sh,pingpong:rh,smoothstep:oh,smootherstep:ah,randInt:lh,randFloat:ch,randFloatSpread:hh,seededRandom:uh,degToRad:dh,radToDeg:fh,isPowerOfTwo:so,ceilPowerOfTwo:ph,floorPowerOfTwo:Sl,setQuaternionFromProperEuler:mh,normalize:Pe,denormalize:cs};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,o,a,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=a,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],a=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],f=i[0],p=i[3],_=i[6],v=i[1],x=i[4],y=i[7],w=i[2],S=i[5],C=i[8];return s[0]=r*f+o*v+a*w,s[3]=r*p+o*x+a*S,s[6]=r*_+o*y+a*C,s[1]=c*f+h*v+d*w,s[4]=c*p+h*x+d*S,s[7]=c*_+h*y+d*C,s[2]=u*f+m*v+g*w,s[5]=u*p+m*x+g*S,s[8]=u*_+m*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*s*h+n*o*a+i*s*c-i*r*a}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*a-h*s,m=c*s-r*a,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return t[0]=d*f,t[1]=(i*c-h*n)*f,t[2]=(o*n-i*r)*f,t[3]=u*f,t[4]=(h*e-i*a)*f,t[5]=(i*s-o*e)*f,t[6]=m*f,t[7]=(n*a-c*e)*f,t[8]=(r*e-n*s)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const a=Math.cos(s),c=Math.sin(s);return this.set(n*a,n*c,-n*(a*r+c*o)+r+t,-i*c,i*a,-i*(-c*r+a*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(vr.makeScale(t,e)),this}rotate(t){return this.premultiply(vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(vr.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vr=new Le;function El(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function Js(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}let mi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let a=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],m=s[r+1],g=s[r+2],f=s[r+3];if(o===0){t[e+0]=a,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=f;return}if(d!==f||a!==u||c!==m||h!==g){let p=1-o;const _=a*u+c*m+h*g+d*f,v=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const w=Math.sqrt(x),S=Math.atan2(w,_*v);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w}const y=o*v;if(a=a*p+u*y,c=c*p+m*y,h=h*p+g*y,d=d*p+f*y,p===1-o){const w=1/Math.sqrt(a*a+c*c+h*h+d*d);a*=w,c*=w,h*=w,d*=w}}t[e]=a,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],a=n[i+1],c=n[i+2],h=n[i+3],d=s[r],u=s[r+1],m=s[r+2],g=s[r+3];return t[e]=o*g+h*d+a*m-c*u,t[e+1]=a*g+h*u+c*d-o*m,t[e+2]=c*g+h*m+o*u-a*d,t[e+3]=h*g-o*d-a*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,a=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=a(n/2),m=a(i/2),g=a(s/2);switch(r){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-a)*m,this._y=(s-c)*m,this._z=(r-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-a)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(a+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(r-i)/m,this._x=(s+c)/m,this._y=(a+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,a=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-s*a,this._y=i*h+r*a+s*o-n*c,this._z=s*h+r*c+n*a-i*o,this._w=r*h-n*o-i*a-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const a=1-o*o;if(a<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(a),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,a=t.w,c=a*e+r*i-o*n,h=a*n+o*e-s*i,d=a*i+s*n-r*e,u=-s*e-r*n-o*i;return this.x=c*a+u*-s+h*-o-d*-r,this.y=h*a+u*-r+d*-s-c*-o,this.z=d*a+u*-o+c*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,a=e.z;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _r.copy(this).projectOnVector(t),this.sub(_r)}reflect(t){return this.sub(_r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new H,oa=new mi;function ki(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function xr(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const gh=new Le().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),vh=new Le().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Wn=new H;function _h(l){return l.convertSRGBToLinear(),Wn.set(l.r,l.g,l.b).applyMatrix3(vh),l.setRGB(Wn.x,Wn.y,Wn.z)}function xh(l){return Wn.set(l.r,l.g,l.b).applyMatrix3(gh),l.setRGB(Wn.x,Wn.y,Wn.z).convertLinearToSRGB()}const yh={[vs]:l=>l,[gn]:l=>l.convertSRGBToLinear(),[wl]:_h},bh={[vs]:l=>l,[gn]:l=>l.convertLinearToSRGB(),[wl]:xh},Ce={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(l){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!l},get workingColorSpace(){return vs},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,t,e){if(this.enabled===!1||t===e||!t||!e)return l;const n=yh[t],i=bh[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(l))},fromWorkingColorSpace:function(l,t){return this.convert(l,this.workingColorSpace,t)},toWorkingColorSpace:function(l,t){return this.convert(l,t,this.workingColorSpace)}};let _i;class Al{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Js("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ki(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Cl{constructor(t=null){this.isSource=!0,this.uuid=Yi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(yr(i[r].image)):s.push(yr(i[r]))}else s=yr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function yr(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?Al.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mh=0;class Ne extends Xi{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Ge,i=Ge,s=Ke,r=ms,o=rn,a=fi,c=Ne.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Yi(),this.name="",this.source=new Cl(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case eo:t.x=t.x-Math.floor(t.x);break;case Ge:t.x=t.x<0?0:1;break;case no:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case eo:t.y=t.y-Math.floor(t.y);break;case Ge:t.y=t.y<0?0:1;break;case no:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=yl;Ne.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,i=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const a=t.elements,c=a[0],h=a[4],d=a[8],u=a[1],m=a[5],g=a[9],f=a[2],p=a[6],_=a[10];if(Math.abs(h-u)<.01&&Math.abs(d-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(m+1)/2,w=(_+1)/2,S=(h+u)/4,C=(d+f)/4,b=(g+p)/4;return x>y&&x>w?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=S/n,s=C/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=S/i,s=b/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=C/s,i=b/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-f)*(d-f)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-f)/v,this.z=(u-h)/v,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gi extends Xi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ke,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tl extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xe,this.minFilter=xe,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wh extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xe,this.minFilter=xe,this.wrapR=Ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,c=t.length;a<c;a+=3){const h=t[a],d=t[a+1],u=t[a+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,c=t.count;a<c;a++){const h=t.getX(a),d=t.getY(a),u=t.getZ(a);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)Qn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Qn)}else n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox),br.applyMatrix4(t.matrixWorld),this.union(br);const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zi),ws.subVectors(this.max,Zi),xi.subVectors(t.a,Zi),yi.subVectors(t.b,Zi),bi.subVectors(t.c,Zi),kn.subVectors(yi,xi),Un.subVectors(bi,yi),ti.subVectors(xi,bi);let e=[0,-kn.z,kn.y,0,-Un.z,Un.y,0,-ti.z,ti.y,kn.z,0,-kn.x,Un.z,0,-Un.x,ti.z,0,-ti.x,-kn.y,kn.x,0,-Un.y,Un.x,0,-ti.y,ti.x,0];return!Mr(e,xi,yi,bi,ws)||(e=[1,0,0,0,1,0,0,0,1],!Mr(e,xi,yi,bi,ws))?!1:(Ss.crossVectors(kn,Un),e=[Ss.x,Ss.y,Ss.z],Mr(e,xi,yi,bi,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new H,new H,new H,new H,new H,new H,new H,new H],Qn=new H,br=new ys,xi=new H,yi=new H,bi=new H,kn=new H,Un=new H,ti=new H,Zi=new H,ws=new H,Ss=new H,ei=new H;function Mr(l,t,e,n,i){for(let s=0,r=l.length-3;s<=r;s+=3){ei.fromArray(l,s);const o=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),a=t.dot(ei),c=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(a,c,h),Math.min(a,c,h))>o)return!1}return!0}const Sh=new ys,$i=new H,wr=new H;class uo{constructor(t=new H,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);const e=$i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($i,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(wr)),this.expandByPoint($i.copy(t.center).sub(wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new H,Sr=new H,Es=new H,Gn=new H,Er=new H,As=new H,Ar=new H;let Rl=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Sr.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(Sr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Es),o=Gn.dot(this.direction),a=-Gn.dot(Es),c=Gn.lengthSq(),h=Math.abs(1-r*r);let d,u,m,g;if(h>0)if(d=r*a-o,u=r*o-a,g=s*h,d>=0)if(u>=-g)if(u<=g){const f=1/h;d*=f,u*=f,m=d*(d+r*u+2*o)+u*(r*d+u+2*a)+c}else u=s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*a)+c;else u=-s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*a)+c;else u<=-g?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-a),s),m=-d*d+u*(u+2*a)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-a),s),m=u*(u+2*a)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-a),s),m=-d*d+u*(u+2*a)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Sr).addScaledVector(Es,u),m}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,a=n+r;return a<0?null:o<0?this.at(a,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,a;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(o=(t.min.z-u.z)*d,a=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,a=(t.min.z-u.z)*d),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,i,s){Er.subVectors(e,t),As.subVectors(n,t),Ar.crossVectors(Er,As);let r=this.direction.dot(Ar),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Gn.subVectors(this.origin,t);const a=o*this.direction.dot(As.crossVectors(Gn,As));if(a<0)return null;const c=o*this.direction.dot(Er.cross(Gn));if(c<0||a+c>r)return null;const h=-o*Gn.dot(Ar);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class he{constructor(){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,o,a,c,h,d,u,m,g,f,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=o,_[13]=a,_[2]=c,_[6]=h,_[10]=d,_[14]=u,_[3]=m,_[7]=g,_[11]=f,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Mi.setFromMatrixColumn(t,0).length(),s=1/Mi.setFromMatrixColumn(t,1).length(),r=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*h,m=r*d,g=o*h,f=o*d;e[0]=a*h,e[4]=-a*d,e[8]=c,e[1]=m+g*c,e[5]=u-f*c,e[9]=-o*a,e[2]=f-u*c,e[6]=g+m*c,e[10]=r*a}else if(t.order==="YXZ"){const u=a*h,m=a*d,g=c*h,f=c*d;e[0]=u+f*o,e[4]=g*o-m,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=m*o-g,e[6]=f+u*o,e[10]=r*a}else if(t.order==="ZXY"){const u=a*h,m=a*d,g=c*h,f=c*d;e[0]=u-f*o,e[4]=-r*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*h,e[9]=f-u*o,e[2]=-r*c,e[6]=o,e[10]=r*a}else if(t.order==="ZYX"){const u=r*h,m=r*d,g=o*h,f=o*d;e[0]=a*h,e[4]=g*c-m,e[8]=u*c+f,e[1]=a*d,e[5]=f*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*a,e[10]=r*a}else if(t.order==="YZX"){const u=r*a,m=r*c,g=o*a,f=o*c;e[0]=a*h,e[4]=f-u*d,e[8]=g*d+m,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=u-f*d}else if(t.order==="XZY"){const u=r*a,m=r*c,g=o*a,f=o*c;e[0]=a*h,e[4]=-d,e[8]=c*h,e[1]=u*d+f,e[5]=r*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=f*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Eh,t,Ah)}lookAt(t,e,n){const i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Vn.crossVectors(n,Be),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Vn.crossVectors(n,Be)),Vn.normalize(),Cs.crossVectors(Be,Vn),i[0]=Vn.x,i[4]=Cs.x,i[8]=Be.x,i[1]=Vn.y,i[5]=Cs.y,i[9]=Be.y,i[2]=Vn.z,i[6]=Cs.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],a=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],f=n[6],p=n[10],_=n[14],v=n[3],x=n[7],y=n[11],w=n[15],S=i[0],C=i[4],b=i[8],A=i[12],P=i[1],k=i[5],G=i[9],L=i[13],I=i[2],N=i[6],z=i[10],X=i[14],F=i[3],q=i[7],Y=i[11],et=i[15];return s[0]=r*S+o*P+a*I+c*F,s[4]=r*C+o*k+a*N+c*q,s[8]=r*b+o*G+a*z+c*Y,s[12]=r*A+o*L+a*X+c*et,s[1]=h*S+d*P+u*I+m*F,s[5]=h*C+d*k+u*N+m*q,s[9]=h*b+d*G+u*z+m*Y,s[13]=h*A+d*L+u*X+m*et,s[2]=g*S+f*P+p*I+_*F,s[6]=g*C+f*k+p*N+_*q,s[10]=g*b+f*G+p*z+_*Y,s[14]=g*A+f*L+p*X+_*et,s[3]=v*S+x*P+y*I+w*F,s[7]=v*C+x*k+y*N+w*q,s[11]=v*b+x*G+y*z+w*Y,s[15]=v*A+x*L+y*X+w*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],a=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],f=t[7],p=t[11],_=t[15];return g*(+s*a*d-i*c*d-s*o*u+n*c*u+i*o*m-n*a*m)+f*(+e*a*m-e*c*u+s*r*u-i*r*m+i*c*h-s*a*h)+p*(+e*c*d-e*o*m-s*r*d+n*r*m+s*o*h-n*c*h)+_*(-i*o*h-e*a*d+e*o*u+i*r*d-n*r*u+n*a*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],f=t[13],p=t[14],_=t[15],v=d*p*c-f*u*c+f*a*m-o*p*m-d*a*_+o*u*_,x=g*u*c-h*p*c-g*a*m+r*p*m+h*a*_-r*u*_,y=h*f*c-g*d*c+g*o*m-r*f*m-h*o*_+r*d*_,w=g*d*a-h*f*a-g*o*u+r*f*u+h*o*p-r*d*p,S=e*v+n*x+i*y+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/S;return t[0]=v*C,t[1]=(f*u*s-d*p*s-f*i*m+n*p*m+d*i*_-n*u*_)*C,t[2]=(o*p*s-f*a*s+f*i*c-n*p*c-o*i*_+n*a*_)*C,t[3]=(d*a*s-o*u*s-d*i*c+n*u*c+o*i*m-n*a*m)*C,t[4]=x*C,t[5]=(h*p*s-g*u*s+g*i*m-e*p*m-h*i*_+e*u*_)*C,t[6]=(g*a*s-r*p*s-g*i*c+e*p*c+r*i*_-e*a*_)*C,t[7]=(r*u*s-h*a*s+h*i*c-e*u*c-r*i*m+e*a*m)*C,t[8]=y*C,t[9]=(g*d*s-h*f*s-g*n*m+e*f*m+h*n*_-e*d*_)*C,t[10]=(r*f*s-g*o*s+g*n*c-e*f*c-r*n*_+e*o*_)*C,t[11]=(h*o*s-r*d*s-h*n*c+e*d*c+r*n*m-e*o*m)*C,t[12]=w*C,t[13]=(h*f*i-g*d*i+g*n*u-e*f*u-h*n*p+e*d*p)*C,t[14]=(g*o*i-r*f*i-g*n*a+e*f*a+r*n*p-e*o*p)*C,t[15]=(r*d*i-h*o*i+h*n*a-e*d*a-r*n*u+e*o*u)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,a=t.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*a,c*a+i*o,0,c*o+i*a,h*o+n,h*a-i*r,0,c*a-i*o,h*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,a=e._w,c=s+s,h=r+r,d=o+o,u=s*c,m=s*h,g=s*d,f=r*h,p=r*d,_=o*d,v=a*c,x=a*h,y=a*d,w=n.x,S=n.y,C=n.z;return i[0]=(1-(f+_))*w,i[1]=(m+y)*w,i[2]=(g-x)*w,i[3]=0,i[4]=(m-y)*S,i[5]=(1-(u+_))*S,i[6]=(p+v)*S,i[7]=0,i[8]=(g+x)*C,i[9]=(p-v)*C,i[10]=(1-(u+f))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Mi.set(i[0],i[1],i[2]).length();const r=Mi.set(i[4],i[5],i[6]).length(),o=Mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const c=1/s,h=1/r,d=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,e.setFromRotationMatrix(tn),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r){const o=this.elements,a=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(r+s)/(r-s),m=-2*r*s/(r-s);return o[0]=a,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r){const o=this.elements,a=1/(e-t),c=1/(n-i),h=1/(r-s),d=(e+t)*a,u=(n+i)*c,m=(r+s)*h;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new H,tn=new he,Eh=new H(0,0,0),Ah=new H(1,1,1),Vn=new H,Cs=new H,Be=new H,aa=new he,la=new mi;class ir{constructor(t=0,e=0,n=0,i=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],a=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ie(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return aa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(aa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return la.setFromEuler(this),this.setFromQuaternion(la,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class fo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ch=0;const ca=new H,wi=new mi,En=new he,Ts=new H,Ji=new H,Th=new H,Rh=new mi,ha=new H(1,0,0),ua=new H(0,1,0),da=new H(0,0,1),Lh={type:"added"},fa={type:"removed"};class Se extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new H,e=new ir,n=new mi,i=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new he},normalMatrix:{value:new Le}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.multiply(wi),this}rotateOnWorldAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.premultiply(wi),this}rotateX(t){return this.rotateOnAxis(ha,t)}rotateY(t){return this.rotateOnAxis(ua,t)}rotateZ(t){return this.rotateOnAxis(da,t)}translateOnAxis(t,e){return ca.copy(t).applyQuaternion(this.quaternion),this.position.add(ca.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ha,t)}translateY(t){return this.translateOnAxis(ua,t)}translateZ(t){return this.translateOnAxis(da,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ts.copy(t):Ts.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Ji,Ts,this.up):En.lookAt(Ts,Ji,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),wi.setFromRotationMatrix(En),this.quaternion.premultiply(wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Lh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fa)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(fa)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,Th),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Rh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,h=a.length;c<h;c++){const d=a[c];s(t.shapes,d)}else s(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(s(t.materials,this.material[a]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(s(t.animations,a))}}if(e){const o=r(t.geometries),a=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const a=[];for(const c in o){const h=o[c];delete h.metadata,a.push(h)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new H(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new H,An=new H,Cr=new H,Cn=new H,Si=new H,Ei=new H,pa=new H,Tr=new H,Rr=new H,Lr=new H;class Nn{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){en.subVectors(i,e),An.subVectors(n,e),Cr.subVectors(t,e);const r=en.dot(en),o=en.dot(An),a=en.dot(Cr),c=An.dot(An),h=An.dot(Cr),d=r*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(c*a-o*h)*u,g=(r*h-o*a)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Cn),Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(t,e,n,i,s,r,o,a){return this.getBarycoord(t,e,n,i,Cn),a.set(0,0),a.addScaledVector(s,Cn.x),a.addScaledVector(r,Cn.y),a.addScaledVector(o,Cn.z),a}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),An.subVectors(t,e),en.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),An.subVectors(this.a,this.b),en.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Nn.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;Si.subVectors(i,n),Ei.subVectors(s,n),Tr.subVectors(t,n);const a=Si.dot(Tr),c=Ei.dot(Tr);if(a<=0&&c<=0)return e.copy(n);Rr.subVectors(t,i);const h=Si.dot(Rr),d=Ei.dot(Rr);if(h>=0&&d<=h)return e.copy(i);const u=a*d-h*c;if(u<=0&&a>=0&&h<=0)return r=a/(a-h),e.copy(n).addScaledVector(Si,r);Lr.subVectors(t,s);const m=Si.dot(Lr),g=Ei.dot(Lr);if(g>=0&&m<=g)return e.copy(s);const f=m*c-a*g;if(f<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ei,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return pa.subVectors(s,i),o=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(pa,o);const _=1/(p+f+u);return r=f*_,o=u*_,e.copy(n).addScaledVector(Si,r).addScaledVector(Ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Dh=0,bs=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Bi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=vl,this.blendDst=_l,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const a=s[o];delete a.metadata,r.push(a)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const Ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Dr(l,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?l+(t-l)*6*e:e<1/2?t:e<2/3?l+(t-l)*6*(2/3-e):l}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ce.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ce.workingColorSpace){if(t=ho(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Dr(r,s,t+1/3),this.g=Dr(r,s,t),this.b=Dr(r,s,t-1/3)}return Ce.toWorkingColorSpace(this,i),this}setStyle(t,e=gn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ce.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ce.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(a,c,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ce.toWorkingColorSpace(this,e),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ce.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const n=Ll[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return Ce.fromWorkingColorSpace(be.copy(this),t),Ie(be.r*255,0,255)<<16^Ie(be.g*255,0,255)<<8^Ie(be.b*255,0,255)<<0}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,s=be.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let a,c;const h=(o+r)/2;if(o===r)a=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:a=(i-s)/d+(i<s?6:0);break;case i:a=(s-n)/d+2;break;case s:a=(n-i)/d+4;break}a/=6}return t.h=a,t.s=c,t.l=h,t}getRGB(t,e=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=gn){Ce.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(nn),nn.h+=t,nn.s+=e,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nn),t.getHSL(Rs);const n=ds(nn.h,Rs.h,e),i=ds(nn.s,Rs.s,e),s=ds(nn.l,Rs.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Ht;Ht.NAMES=Ll;class Dl extends bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const re=new H,Ls=new qt;class yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ia,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix3(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix4(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyNormalMatrix(t),this.setXYZ(e,re.x,re.y,re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.transformDirection(t),this.setXYZ(e,re.x,re.y,re.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ia&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Pl extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Il extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class an extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ph=0;const Xe=new he,Pr=new Se,Ai=new H,Fe=new ys,Qi=new ys,ge=new H;class Kn extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(El(t)?Il:Pl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Le().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Pr.lookAt(t),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new an(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Fe.setFromBufferAttribute(s),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Fe.min,Qi.min),Fe.expandByPoint(ge),ge.addVectors(Fe.max,Qi.max),Fe.expandByPoint(ge)):(Fe.expandByPoint(Qi.min),Fe.expandByPoint(Qi.max))}Fe.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)ge.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],a=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ge.fromBufferAttribute(o,c),a&&(Ai.fromBufferAttribute(t,c),ge.add(Ai)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*o),4));const a=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<o;P++)c[P]=new H,h[P]=new H;const d=new H,u=new H,m=new H,g=new qt,f=new qt,p=new qt,_=new H,v=new H;function x(P,k,G){d.fromArray(i,P*3),u.fromArray(i,k*3),m.fromArray(i,G*3),g.fromArray(r,P*2),f.fromArray(r,k*2),p.fromArray(r,G*2),u.sub(d),m.sub(d),f.sub(g),p.sub(g);const L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(L),v.copy(m).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(L),c[P].add(_),c[k].add(_),c[G].add(_),h[P].add(v),h[k].add(v),h[G].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,k=y.length;P<k;++P){const G=y[P],L=G.start,I=G.count;for(let N=L,z=L+I;N<z;N+=3)x(n[N+0],n[N+1],n[N+2])}const w=new H,S=new H,C=new H,b=new H;function A(P){C.fromArray(s,P*3),b.copy(C);const k=c[P];w.copy(k),w.sub(C.multiplyScalar(C.dot(k))).normalize(),S.crossVectors(b,k);const L=S.dot(h[P])<0?-1:1;a[P*4]=w.x,a[P*4+1]=w.y,a[P*4+2]=w.z,a[P*4+3]=L}for(let P=0,k=y.length;P<k;++P){const G=y[P],L=G.start,I=G.count;for(let N=L,z=L+I;N<z;N+=3)A(n[N+0]),A(n[N+1]),A(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new H,s=new H,r=new H,o=new H,a=new H,c=new H,h=new H,d=new H;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),f=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,p),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),a.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),o.add(h),a.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,a){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(a.length*h);let m=0,g=0;for(let f=0,p=a.length;f<p;f++){o.isInterleavedBufferAttribute?m=a[f]*o.data.stride+o.offset:m=a[f]*h;for(let _=0;_<h;_++)u[g++]=c[m++]}return new yn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Kn,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=t(a,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const a=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=t(u,n);a.push(m)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,a=r.length;o<a;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const c=n[a];t.data.attributes[a]=c.toJSON(t.data)}const i={};let s=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[a]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ma=new he,dn=new Rl,Ds=new uo,ga=new H,ts=new H,es=new H,ns=new H,Ir=new H,Ps=new H,Is=new qt,Ns=new qt,zs=new qt,Nr=new H,Os=new H;class Dt extends Se{constructor(t=new Kn,e=new Dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Ps.set(0,0,0);for(let a=0,c=s.length;a<c;a++){const h=o[a],d=s[a];h!==0&&(Ir.fromBufferAttribute(d,t),r?Ps.addScaledVector(Ir,h):Ps.addScaledVector(Ir.sub(e),h))}e.add(Ps)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),dn.copy(t.ray).recast(t.near),Ds.containsPoint(dn.origin)===!1&&(dn.intersectSphere(Ds,ga)===null||dn.origin.distanceToSquared(ga)>(t.far-t.near)**2))||(ma.copy(s).invert(),dn.copy(t.ray).applyMatrix4(ma),n.boundingBox!==null&&dn.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,a=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],_=Math.max(f.start,u.start),v=Math.min(o.count,Math.min(f.start+f.count,u.start+u.count));for(let x=_,y=v;x<y;x+=3){const w=o.getX(x),S=o.getX(x+1),C=o.getX(x+2);r=Bs(this,p,t,dn,c,h,w,S,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const m=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let f=m,p=g;f<p;f+=3){const _=o.getX(f),v=o.getX(f+1),x=o.getX(f+2);r=Bs(this,i,t,dn,c,h,_,v,x),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const f=d[m],p=i[f.materialIndex],_=Math.max(f.start,u.start),v=Math.min(a.count,Math.min(f.start+f.count,u.start+u.count));for(let x=_,y=v;x<y;x+=3){const w=x,S=x+1,C=x+2;r=Bs(this,p,t,dn,c,h,w,S,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const m=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let f=m,p=g;f<p;f+=3){const _=f,v=f+1,x=f+2;r=Bs(this,i,t,dn,c,h,_,v,x),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function Ih(l,t,e,n,i,s,r,o){let a;if(t.side===He?a=n.intersectTriangle(r,s,i,!0,o):a=n.intersectTriangle(i,s,r,t.side===Xn,o),a===null)return null;Os.copy(o),Os.applyMatrix4(l.matrixWorld);const c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:l}}function Bs(l,t,e,n,i,s,r,o,a){l.getVertexPosition(r,ts),l.getVertexPosition(o,es),l.getVertexPosition(a,ns);const c=Ih(l,t,e,n,ts,es,ns,Nr);if(c){i&&(Is.fromBufferAttribute(i,r),Ns.fromBufferAttribute(i,o),zs.fromBufferAttribute(i,a),c.uv=Nn.getUV(Nr,ts,es,ns,Is,Ns,zs,new qt)),s&&(Is.fromBufferAttribute(s,r),Ns.fromBufferAttribute(s,o),zs.fromBufferAttribute(s,a),c.uv2=Nn.getUV(Nr,ts,es,ns,Is,Ns,zs,new qt));const h={a:r,b:o,c:a,normal:new H,materialIndex:0};Nn.getNormal(ts,es,ns,h.normal),c.face=h}return c}class Qt extends Kn{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const a=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(d,2));function g(f,p,_,v,x,y,w,S,C,b,A){const P=y/C,k=w/b,G=y/2,L=w/2,I=S/2,N=C+1,z=b+1;let X=0,F=0;const q=new H;for(let Y=0;Y<z;Y++){const et=Y*k-L;for(let O=0;O<N;O++){const J=O*P-G;q[f]=J*v,q[p]=et*x,q[_]=I,c.push(q.x,q.y,q.z),q[f]=0,q[p]=0,q[_]=S>0?1:-1,h.push(q.x,q.y,q.z),d.push(O/C),d.push(1-Y/b),X+=1}}for(let Y=0;Y<b;Y++)for(let et=0;et<C;et++){const O=u+et+N*Y,J=u+et+N*(Y+1),tt=u+(et+1)+N*(Y+1),U=u+(et+1)+N*Y;a.push(O,J,U),a.push(J,tt,U),F+=6}o.addGroup(m,F,A),m+=F,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(l){const t={};for(const e in l){t[e]={};for(const n in l[e]){const i=l[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Te(l){const t={};for(let e=0;e<l.length;e++){const n=Hi(l[e]);for(const i in n)t[i]=n[i]}return t}function Nh(l){const t=[];for(let e=0;e<l.length;e++)t.push(l[e].clone());return t}function Nl(l){return l.getRenderTarget()===null&&l.outputEncoding===Kt?gn:vs}const zh={clone:Hi,merge:Te};var Oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=Nh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zl extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ze extends zl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/a,e-=r.offsetY*n/c,i*=r.width/a,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ci=-90,Ti=1;class Fh extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ze(Ci,Ti,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ze(Ci,Ti,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new Ze(Ci,Ti,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new Ze(Ci,Ti,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const a=new Ze(Ci,Ti,t,e);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const c=new Ze(Ci,Ti,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,a,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=On,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,a),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Ol extends Ne{constructor(t,e,n,i,s,r,o,a,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ui,super(t,e,n,i,s,r,o,a,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kh extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ol(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qt(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:qn});s.uniforms.tEquirect.value=e;const r=new Dt(i,s),o=e.minFilter;return e.minFilter===ms&&(e.minFilter=Ke),new Fh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const zr=new H,Uh=new H,Gh=new Le;let ri=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=zr.subVectors(n,e).cross(Uh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(zr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gh.getNormalMatrix(t),i=this.coplanarPoint(zr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ri=new uo,Fs=new H;class po{constructor(t=new ri,e=new ri,n=new ri,i=new ri,s=new ri,r=new ri){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],c=n[5],h=n[6],d=n[7],u=n[8],m=n[9],g=n[10],f=n[11],p=n[12],_=n[13],v=n[14],x=n[15];return e[0].setComponents(o-i,d-a,f-u,x-p).normalize(),e[1].setComponents(o+i,d+a,f+u,x+p).normalize(),e[2].setComponents(o+s,d+c,f+m,x+_).normalize(),e[3].setComponents(o-s,d-c,f-m,x-_).normalize(),e[4].setComponents(o-r,d-h,f-g,x-v).normalize(),e[5].setComponents(o+r,d+h,f+g,x+v).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fs.x=i.normal.x>0?t.max.x:t.min.x,Fs.y=i.normal.y>0?t.max.y:t.min.y,Fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bl(){let l=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=l.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=l.requestAnimationFrame(i),t=!0)},stop:function(){l.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){l=s}}}function Vh(l,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,m=l.createBuffer();l.bindBuffer(h,m),l.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,m=h.updateRange;l.bindBuffer(d,c),m.count===-1?l.bufferSubData(d,0,u):(e?l.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):l.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(l.deleteBuffer(h.buffer),n.delete(c))}function a(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:r,remove:o,update:a}}class mo extends Kn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),a=Math.floor(i),c=o+1,h=a+1,d=t/o,u=e/a,m=[],g=[],f=[],p=[];for(let _=0;_<h;_++){const v=_*u-r;for(let x=0;x<c;x++){const y=x*d-s;g.push(y,-v,0),f.push(0,0,1),p.push(x/o),p.push(1-_/a)}}for(let _=0;_<a;_++)for(let v=0;v<o;v++){const x=v+c*_,y=v+c*(_+1),w=v+1+c*(_+1),S=v+1+c*_;m.push(x,y,S),m.push(y,w,S)}this.setIndex(m),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Wh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kh="vec3 transformed = vec3( position );",Zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$h=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Jh=`#ifdef USE_IRIDESCENCE
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
#endif`,Qh=`#ifdef USE_BUMPMAP
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lu=`#define PI 3.141592653589793
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
}`,cu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hu=`vec3 transformedNormal = objectNormal;
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
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",gu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vu=`#ifdef USE_ENVMAP
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
#endif`,_u=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xu=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Au=`#ifdef USE_GRADIENTMAP
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
}`,Cu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ru=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Du=`uniform bool receiveShadow;
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
#endif`,Pu=`#if defined( USE_ENVMAP )
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
#endif`,Iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ou=`varying vec3 vViewPosition;
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
#endif`,Fu=`struct PhysicalMaterial {
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
}`,ku=`
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
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$u=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ju=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qu=`#ifdef USE_MORPHNORMALS
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
#endif`,td=`#ifdef USE_MORPHTARGETS
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
#endif`,ed=`#ifdef USE_MORPHTARGETS
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
#endif`,nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,id=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ad=`#ifdef USE_NORMALMAP
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
#endif`,ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`float getShadowMask() {
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
}`,Sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,Ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cd=`#ifdef USE_SKINNING
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
#endif`,Rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pd=`#ifdef USE_TRANSMISSION
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
#endif`,Id=`#ifdef USE_TRANSMISSION
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
#endif`,Nd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,zd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Od=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Bd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Fd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,kd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vd=`uniform sampler2D t2D;
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
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yd=`#include <common>
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
}`,jd=`#if DEPTH_PACKING == 3200
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
}`,Kd=`#define DISTANCE
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
}`,Zd=`#define DISTANCE
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qd=`uniform float scale;
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
}`,tf=`uniform vec3 diffuse;
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
}`,ef=`#include <common>
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
}`,nf=`uniform vec3 diffuse;
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
}`,sf=`#define LAMBERT
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
}`,rf=`#define LAMBERT
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
}`,of=`#define MATCAP
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
}`,af=`#define MATCAP
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
}`,lf=`#define NORMAL
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
}`,cf=`#define NORMAL
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
}`,hf=`#define PHONG
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
}`,uf=`#define PHONG
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
}`,df=`#define STANDARD
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
}`,ff=`#define STANDARD
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
}`,pf=`#define TOON
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
}`,mf=`#define TOON
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
}`,gf=`uniform float size;
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
}`,vf=`uniform vec3 diffuse;
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
}`,_f=`#include <common>
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
}`,xf=`uniform vec3 color;
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
}`,yf=`uniform float rotation;
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
}`,bf=`uniform vec3 diffuse;
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
}`,Lt={alphamap_fragment:Hh,alphamap_pars_fragment:Wh,alphatest_fragment:qh,alphatest_pars_fragment:Xh,aomap_fragment:Yh,aomap_pars_fragment:jh,begin_vertex:Kh,beginnormal_vertex:Zh,bsdfs:$h,iridescence_fragment:Jh,bumpmap_pars_fragment:Qh,clipping_planes_fragment:tu,clipping_planes_pars_fragment:eu,clipping_planes_pars_vertex:nu,clipping_planes_vertex:iu,color_fragment:su,color_pars_fragment:ru,color_pars_vertex:ou,color_vertex:au,common:lu,cube_uv_reflection_fragment:cu,defaultnormal_vertex:hu,displacementmap_pars_vertex:uu,displacementmap_vertex:du,emissivemap_fragment:fu,emissivemap_pars_fragment:pu,encodings_fragment:mu,encodings_pars_fragment:gu,envmap_fragment:vu,envmap_common_pars_fragment:_u,envmap_pars_fragment:xu,envmap_pars_vertex:yu,envmap_physical_pars_fragment:Pu,envmap_vertex:bu,fog_vertex:Mu,fog_pars_vertex:wu,fog_fragment:Su,fog_pars_fragment:Eu,gradientmap_pars_fragment:Au,lightmap_fragment:Cu,lightmap_pars_fragment:Tu,lights_lambert_fragment:Ru,lights_lambert_pars_fragment:Lu,lights_pars_begin:Du,lights_toon_fragment:Iu,lights_toon_pars_fragment:Nu,lights_phong_fragment:zu,lights_phong_pars_fragment:Ou,lights_physical_fragment:Bu,lights_physical_pars_fragment:Fu,lights_fragment_begin:ku,lights_fragment_maps:Uu,lights_fragment_end:Gu,logdepthbuf_fragment:Vu,logdepthbuf_pars_fragment:Hu,logdepthbuf_pars_vertex:Wu,logdepthbuf_vertex:qu,map_fragment:Xu,map_pars_fragment:Yu,map_particle_fragment:ju,map_particle_pars_fragment:Ku,metalnessmap_fragment:Zu,metalnessmap_pars_fragment:$u,morphcolor_vertex:Ju,morphnormal_vertex:Qu,morphtarget_pars_vertex:td,morphtarget_vertex:ed,normal_fragment_begin:nd,normal_fragment_maps:id,normal_pars_fragment:sd,normal_pars_vertex:rd,normal_vertex:od,normalmap_pars_fragment:ad,clearcoat_normal_fragment_begin:ld,clearcoat_normal_fragment_maps:cd,clearcoat_pars_fragment:hd,iridescence_pars_fragment:ud,output_fragment:dd,packing:fd,premultiplied_alpha_fragment:pd,project_vertex:md,dithering_fragment:gd,dithering_pars_fragment:vd,roughnessmap_fragment:_d,roughnessmap_pars_fragment:xd,shadowmap_pars_fragment:yd,shadowmap_pars_vertex:bd,shadowmap_vertex:Md,shadowmask_pars_fragment:wd,skinbase_vertex:Sd,skinning_pars_vertex:Ed,skinning_vertex:Ad,skinnormal_vertex:Cd,specularmap_fragment:Td,specularmap_pars_fragment:Rd,tonemapping_fragment:Ld,tonemapping_pars_fragment:Dd,transmission_fragment:Pd,transmission_pars_fragment:Id,uv_pars_fragment:Nd,uv_pars_vertex:zd,uv_vertex:Od,uv2_pars_fragment:Bd,uv2_pars_vertex:Fd,uv2_vertex:kd,worldpos_vertex:Ud,background_vert:Gd,background_frag:Vd,backgroundCube_vert:Hd,backgroundCube_frag:Wd,cube_vert:qd,cube_frag:Xd,depth_vert:Yd,depth_frag:jd,distanceRGBA_vert:Kd,distanceRGBA_frag:Zd,equirect_vert:$d,equirect_frag:Jd,linedashed_vert:Qd,linedashed_frag:tf,meshbasic_vert:ef,meshbasic_frag:nf,meshlambert_vert:sf,meshlambert_frag:rf,meshmatcap_vert:of,meshmatcap_frag:af,meshnormal_vert:lf,meshnormal_frag:cf,meshphong_vert:hf,meshphong_frag:uf,meshphysical_vert:df,meshphysical_frag:ff,meshtoon_vert:pf,meshtoon_frag:mf,points_vert:gf,points_frag:vf,shadow_vert:_f,shadow_frag:xf,sprite_vert:yf,sprite_frag:bf},lt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Le},uv2Transform:{value:new Le},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Le}}},vn={basic:{uniforms:Te([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Te([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Te([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Te([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Te([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Te([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Te([lt.points,lt.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Te([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Te([lt.common,lt.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Te([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Te([lt.sprite,lt.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:Te([lt.common,lt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:Te([lt.lights,lt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};vn.physical={uniforms:Te([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new qt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const ks={r:0,b:0,g:0};function Mf(l,t,e,n,i,s,r){const o=new Ht(0);let a=s===!0?0:1,c,h,d=null,u=0,m=null;function g(p,_){let v=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x));const y=l.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(x=null),x===null?f(o,a):x&&x.isColor&&(f(x,1),v=!0),(l.autoClear||v)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),x&&(x.isCubeTexture||x.mapping===nr)?(h===void 0&&(h=new Dt(new Qt(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Hi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=x.encoding!==Kt,(d!==x||u!==x.version||m!==l.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,m=l.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Dt(new mo(2,2),new vi({name:"BackgroundMaterial",uniforms:Hi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==Kt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||m!==l.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,m=l.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,_){p.getRGB(ks,Nl(l)),n.buffers.color.setClear(ks.r,ks.g,ks.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),a=_,f(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,f(o,a)},render:g}}function wf(l,t,e,n){const i=l.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},a=p(null);let c=a,h=!1;function d(I,N,z,X,F){let q=!1;if(r){const Y=f(X,z,N);c!==Y&&(c=Y,m(c.object)),q=_(I,X,z,F),q&&v(I,X,z,F)}else{const Y=N.wireframe===!0;(c.geometry!==X.id||c.program!==z.id||c.wireframe!==Y)&&(c.geometry=X.id,c.program=z.id,c.wireframe=Y,q=!0)}F!==null&&e.update(F,34963),(q||h)&&(h=!1,b(I,N,z,X),F!==null&&l.bindBuffer(34963,e.get(F).buffer))}function u(){return n.isWebGL2?l.createVertexArray():s.createVertexArrayOES()}function m(I){return n.isWebGL2?l.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?l.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function f(I,N,z){const X=z.wireframe===!0;let F=o[I.id];F===void 0&&(F={},o[I.id]=F);let q=F[N.id];q===void 0&&(q={},F[N.id]=q);let Y=q[X];return Y===void 0&&(Y=p(u()),q[X]=Y),Y}function p(I){const N=[],z=[],X=[];for(let F=0;F<i;F++)N[F]=0,z[F]=0,X[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:X,object:I,attributes:{},index:null}}function _(I,N,z,X){const F=c.attributes,q=N.attributes;let Y=0;const et=z.getAttributes();for(const O in et)if(et[O].location>=0){const tt=F[O];let U=q[O];if(U===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(U=I.instanceColor)),tt===void 0||tt.attribute!==U||U&&tt.data!==U.data)return!0;Y++}return c.attributesNum!==Y||c.index!==X}function v(I,N,z,X){const F={},q=N.attributes;let Y=0;const et=z.getAttributes();for(const O in et)if(et[O].location>=0){let tt=q[O];tt===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(tt=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(tt=I.instanceColor));const U={};U.attribute=tt,tt&&tt.data&&(U.data=tt.data),F[O]=U,Y++}c.attributes=F,c.attributesNum=Y,c.index=X}function x(){const I=c.newAttributes;for(let N=0,z=I.length;N<z;N++)I[N]=0}function y(I){w(I,0)}function w(I,N){const z=c.newAttributes,X=c.enabledAttributes,F=c.attributeDivisors;z[I]=1,X[I]===0&&(l.enableVertexAttribArray(I),X[I]=1),F[I]!==N&&((n.isWebGL2?l:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,N),F[I]=N)}function S(){const I=c.newAttributes,N=c.enabledAttributes;for(let z=0,X=N.length;z<X;z++)N[z]!==I[z]&&(l.disableVertexAttribArray(z),N[z]=0)}function C(I,N,z,X,F,q){n.isWebGL2===!0&&(z===5124||z===5125)?l.vertexAttribIPointer(I,N,z,F,q):l.vertexAttribPointer(I,N,z,X,F,q)}function b(I,N,z,X){if(n.isWebGL2===!1&&(I.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const F=X.attributes,q=z.getAttributes(),Y=N.defaultAttributeValues;for(const et in q){const O=q[et];if(O.location>=0){let J=F[et];if(J===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){const tt=J.normalized,U=J.itemSize,ot=e.get(J);if(ot===void 0)continue;const at=ot.buffer,ct=ot.type,st=ot.bytesPerElement;if(J.isInterleavedBufferAttribute){const ht=J.data,Et=ht.stride,At=J.offset;if(ht.isInstancedInterleavedBuffer){for(let Bt=0;Bt<O.locationSize;Bt++)w(O.location+Bt,ht.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Bt=0;Bt<O.locationSize;Bt++)y(O.location+Bt);l.bindBuffer(34962,at);for(let Bt=0;Bt<O.locationSize;Bt++)C(O.location+Bt,U/O.locationSize,ct,tt,Et*st,(At+U/O.locationSize*Bt)*st)}else{if(J.isInstancedBufferAttribute){for(let ht=0;ht<O.locationSize;ht++)w(O.location+ht,J.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ht=0;ht<O.locationSize;ht++)y(O.location+ht);l.bindBuffer(34962,at);for(let ht=0;ht<O.locationSize;ht++)C(O.location+ht,U/O.locationSize,ct,tt,U*st,U/O.locationSize*ht*st)}}else if(Y!==void 0){const tt=Y[et];if(tt!==void 0)switch(tt.length){case 2:l.vertexAttrib2fv(O.location,tt);break;case 3:l.vertexAttrib3fv(O.location,tt);break;case 4:l.vertexAttrib4fv(O.location,tt);break;default:l.vertexAttrib1fv(O.location,tt)}}}}S()}function A(){G();for(const I in o){const N=o[I];for(const z in N){const X=N[z];for(const F in X)g(X[F].object),delete X[F];delete N[z]}delete o[I]}}function P(I){if(o[I.id]===void 0)return;const N=o[I.id];for(const z in N){const X=N[z];for(const F in X)g(X[F].object),delete X[F];delete N[z]}delete o[I.id]}function k(I){for(const N in o){const z=o[N];if(z[I.id]===void 0)continue;const X=z[I.id];for(const F in X)g(X[F].object),delete X[F];delete z[I.id]}}function G(){L(),h=!0,c!==a&&(c=a,m(c.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:G,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:y,disableUnusedAttributes:S}}function Sf(l,t,e,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,h){l.drawArrays(s,c,h),e.update(h,s,1)}function a(c,h,d){if(d===0)return;let u,m;if(i)u=l,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,h,d),e.update(h,s,d)}this.setMode=r,this.render=o,this.renderInstances=a}function Ef(l,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=l.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&l instanceof WebGL2RenderingContext;let o=e.precision!==void 0?e.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const c=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=l.getParameter(34930),u=l.getParameter(35660),m=l.getParameter(3379),g=l.getParameter(34076),f=l.getParameter(34921),p=l.getParameter(36347),_=l.getParameter(36348),v=l.getParameter(36349),x=u>0,y=r||t.has("OES_texture_float"),w=x&&y,S=r?l.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:S}}function Af(l){const t=this;let e=null,n=0,i=!1,s=!1;const r=new ri,o=new Le,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,_=l.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const v=s?0:n,x=v*4;let y=_.clippingState||null;a.value=y,y=h(g,u,x,m);for(let w=0;w!==x;++w)y[w]=e[w];_.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}};function c(){a.value!==e&&(a.value=e,a.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const f=d!==null?d.length:0;let p=null;if(f!==0){if(p=a.value,g!==!0||p===null){const _=m+f*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,y=m;x!==f;++x,y+=4)r.copy(d[x]).applyMatrix4(v,o),r.normal.toArray(p,y),p[y+3]=r.constant}a.value=p,a.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function Cf(l){let t=new WeakMap;function e(r,o){return o===Qr?r.mapping=Ui:o===to&&(r.mapping=Gi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===Qr||o===to)if(t.has(r)){const a=t.get(r).texture;return e(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const c=new kh(a.height/2);return c.fromEquirectangularTexture(l,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const a=t.get(o);a!==void 0&&(t.delete(o),a.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Fl extends zl{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,a=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zi=4,va=[.125,.215,.35,.446,.526,.582],ai=20,Or=new Fl,_a=new Ht;let Br=null;const oi=(1+Math.sqrt(5))/2,Li=1/oi,xa=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,oi,Li),new H(0,oi,-Li),new H(Li,0,oi),new H(-Li,0,oi),new H(oi,Li,0),new H(-oi,Li,0)];class ya{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Br=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Br),t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Br=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:gs,format:rn,encoding:pi,depthBuffer:!1},i=ba(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ba(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tf(s)),this._blurMaterial=Rf(s,t,e)}return i}_compileMaterial(t){const e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,Or)}_sceneToCubeUV(t,e,n,i){const o=new Ze(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(_a),h.toneMapping=On,h.autoClear=!1;const m=new Dl({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new Dt(new Qt,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy(_a),f=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(o.up.set(0,a[_],0),o.lookAt(c[_],0,0)):v===1?(o.up.set(0,0,a[_]),o.lookAt(0,c[_],0)):(o.up.set(0,a[_],0),o.lookAt(0,0,c[_]));const x=this._cubeSize;Us(i,v*x,_>2?x:0,x,x),h.setRenderTarget(i),f&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ui||t.mapping===Gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ma());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Dt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const a=this._cubeSize;Us(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(r,Or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=xa[(i-1)%xa.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const a=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Dt(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ai-1),f=s/g,p=isFinite(s)?1+Math.floor(h*f):ai;p>ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const _=[];let v=0;for(let C=0;C<ai;++C){const b=C/f,A=Math.exp(-b*b/2);_.push(A),C===0?v+=A:C<p&&(v+=2*A)}for(let C=0;C<_.length;C++)_[C]=_[C]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=_,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const y=this._sizeLods[i],w=3*y*(i>x-zi?i-x+zi:0),S=4*(this._cubeSize-y);Us(e,w,S,3*y,2*y),a.setRenderTarget(e),a.render(d,Or)}}function Tf(l){const t=[],e=[],n=[];let i=l;const s=l-zi+1+va.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let a=1/o;r>l-zi?a=va[r-l+zi-1]:r===0&&(a=0),n.push(a);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,f=3,p=2,_=1,v=new Float32Array(f*g*m),x=new Float32Array(p*g*m),y=new Float32Array(_*g*m);for(let S=0;S<m;S++){const C=S%3*2/3-1,b=S>2?0:-1,A=[C,b,0,C+2/3,b,0,C+2/3,b+1,0,C,b,0,C+2/3,b+1,0,C,b+1,0];v.set(A,f*g*S),x.set(u,p*g*S);const P=[S,S,S,S,S,S];y.set(P,_*g*S)}const w=new Kn;w.setAttribute("position",new yn(v,f)),w.setAttribute("uv",new yn(x,p)),w.setAttribute("faceIndex",new yn(y,_)),t.push(w),i>zi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ba(l,t,e){const n=new gi(l,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(l,t,e,n,i){l.viewport.set(t,e,n,i),l.scissor.set(t,e,n,i)}function Rf(l,t,e){const n=new Float32Array(ai),i=new H(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:go(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ma(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function wa(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function go(){return`

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
	`}function Lf(l){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const a=o.mapping,c=a===Qr||a===to,h=a===Ui||a===Gi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new ya(l)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new ya(l));const u=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let a=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&a++;return a===c}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Df(l){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=l.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pf(l,t,e,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function a(d){const u=d.attributes;for(const g in u)t.update(u[g],34962);const m=d.morphAttributes;for(const g in m){const f=m[g];for(let p=0,_=f.length;p<_;p++)t.update(f[p],34962)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let f=0;if(m!==null){const v=m.array;f=m.version;for(let x=0,y=v.length;x<y;x+=3){const w=v[x+0],S=v[x+1],C=v[x+2];u.push(w,S,S,C,C,w)}}else{const v=g.array;f=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const w=x+0,S=x+1,C=x+2;u.push(w,S,S,C,C,w)}}const p=new(El(u)?Il:Pl)(u,1);p.version=f;const _=s.get(d);_&&t.remove(_),s.set(d,p)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:a,getWireframeAttribute:h}}function If(l,t,e,n){const i=n.isWebGL2;let s;function r(u){s=u}let o,a;function c(u){o=u.type,a=u.bytesPerElement}function h(u,m){l.drawElements(s,m,o,u*a),e.update(m,s,1)}function d(u,m,g){if(g===0)return;let f,p;if(i)f=l,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,m,o,u*a,g),e.update(m,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=d}function Nf(l){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function zf(l,t){return l[0]-t[0]}function Of(l,t){return Math.abs(t[1])-Math.abs(l[1])}function Bf(l,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new _e,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function a(c,h,d){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==f){let N=function(){L.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let A=0;x===!0&&(A=1),y===!0&&(A=2),w===!0&&(A=3);let P=h.attributes.position.count*A,k=1;P>t.maxTextureSize&&(k=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const G=new Float32Array(P*k*4*f),L=new Tl(G,P,k,f);L.type=ui,L.needsUpdate=!0;const I=A*4;for(let z=0;z<f;z++){const X=S[z],F=C[z],q=b[z],Y=P*k*4*z;for(let et=0;et<X.count;et++){const O=et*I;x===!0&&(r.fromBufferAttribute(X,et),G[Y+O+0]=r.x,G[Y+O+1]=r.y,G[Y+O+2]=r.z,G[Y+O+3]=0),y===!0&&(r.fromBufferAttribute(F,et),G[Y+O+4]=r.x,G[Y+O+5]=r.y,G[Y+O+6]=r.z,G[Y+O+7]=0),w===!0&&(r.fromBufferAttribute(q,et),G[Y+O+8]=r.x,G[Y+O+9]=r.y,G[Y+O+10]=r.z,G[Y+O+11]=q.itemSize===4?r.w:1)}}p={count:f,texture:L,size:new qt(P,k)},s.set(h,p),h.addEventListener("dispose",N)}let _=0;for(let x=0;x<u.length;x++)_+=u[x];const v=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(l,"morphTargetBaseInfluence",v),d.getUniforms().setValue(l,"morphTargetInfluences",u),d.getUniforms().setValue(l,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(l,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let f=n[h.id];if(f===void 0||f.length!==g){f=[];for(let y=0;y<g;y++)f[y]=[y,0];n[h.id]=f}for(let y=0;y<g;y++){const w=f[y];w[0]=y,w[1]=u[y]}f.sort(Of);for(let y=0;y<8;y++)y<g&&f[y][1]?(o[y][0]=f[y][0],o[y][1]=f[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(zf);const p=h.morphAttributes.position,_=h.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const w=o[y],S=w[0],C=w[1];S!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+y)!==p[S]&&h.setAttribute("morphTarget"+y,p[S]),_&&h.getAttribute("morphNormal"+y)!==_[S]&&h.setAttribute("morphNormal"+y,_[S]),i[y]=C,v+=C):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),_&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const x=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(l,"morphTargetBaseInfluence",x),d.getUniforms().setValue(l,"morphTargetInfluences",i)}}return{update:a}}function Ff(l,t,e,n){let i=new WeakMap;function s(a){const c=n.render.frame,h=a.geometry,d=t.get(a,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),e.update(a.instanceMatrix,34962),a.instanceColor!==null&&e.update(a.instanceColor,34962)),d}function r(){i=new WeakMap}function o(a){const c=a.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}const kl=new Ne,Ul=new Tl,Gl=new wh,Vl=new Ol,Sa=[],Ea=[],Aa=new Float32Array(16),Ca=new Float32Array(9),Ta=new Float32Array(4);function ji(l,t,e){const n=l[0];if(n<=0||n>0)return l;const i=t*e;let s=Sa[i];if(s===void 0&&(s=new Float32Array(i),Sa[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,l[r].toArray(s,o)}return s}function ue(l,t){if(l.length!==t.length)return!1;for(let e=0,n=l.length;e<n;e++)if(l[e]!==t[e])return!1;return!0}function de(l,t){for(let e=0,n=t.length;e<n;e++)l[e]=t[e]}function sr(l,t){let e=Ea[t];e===void 0&&(e=new Int32Array(t),Ea[t]=e);for(let n=0;n!==t;++n)e[n]=l.allocateTextureUnit();return e}function kf(l,t){const e=this.cache;e[0]!==t&&(l.uniform1f(this.addr,t),e[0]=t)}function Uf(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;l.uniform2fv(this.addr,t),de(e,t)}}function Gf(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;l.uniform3fv(this.addr,t),de(e,t)}}function Vf(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;l.uniform4fv(this.addr,t),de(e,t)}}function Hf(l,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;l.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Ta.set(n),l.uniformMatrix2fv(this.addr,!1,Ta),de(e,n)}}function Wf(l,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;l.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Ca.set(n),l.uniformMatrix3fv(this.addr,!1,Ca),de(e,n)}}function qf(l,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;l.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(ue(e,n))return;Aa.set(n),l.uniformMatrix4fv(this.addr,!1,Aa),de(e,n)}}function Xf(l,t){const e=this.cache;e[0]!==t&&(l.uniform1i(this.addr,t),e[0]=t)}function Yf(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;l.uniform2iv(this.addr,t),de(e,t)}}function jf(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;l.uniform3iv(this.addr,t),de(e,t)}}function Kf(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;l.uniform4iv(this.addr,t),de(e,t)}}function Zf(l,t){const e=this.cache;e[0]!==t&&(l.uniform1ui(this.addr,t),e[0]=t)}function $f(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;l.uniform2uiv(this.addr,t),de(e,t)}}function Jf(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;l.uniform3uiv(this.addr,t),de(e,t)}}function Qf(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;l.uniform4uiv(this.addr,t),de(e,t)}}function tp(l,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||kl,i)}function ep(l,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Gl,i)}function np(l,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Vl,i)}function ip(l,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ul,i)}function sp(l){switch(l){case 5126:return kf;case 35664:return Uf;case 35665:return Gf;case 35666:return Vf;case 35674:return Hf;case 35675:return Wf;case 35676:return qf;case 5124:case 35670:return Xf;case 35667:case 35671:return Yf;case 35668:case 35672:return jf;case 35669:case 35673:return Kf;case 5125:return Zf;case 36294:return $f;case 36295:return Jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}function rp(l,t){l.uniform1fv(this.addr,t)}function op(l,t){const e=ji(t,this.size,2);l.uniform2fv(this.addr,e)}function ap(l,t){const e=ji(t,this.size,3);l.uniform3fv(this.addr,e)}function lp(l,t){const e=ji(t,this.size,4);l.uniform4fv(this.addr,e)}function cp(l,t){const e=ji(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,e)}function hp(l,t){const e=ji(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,e)}function up(l,t){const e=ji(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,e)}function dp(l,t){l.uniform1iv(this.addr,t)}function fp(l,t){l.uniform2iv(this.addr,t)}function pp(l,t){l.uniform3iv(this.addr,t)}function mp(l,t){l.uniform4iv(this.addr,t)}function gp(l,t){l.uniform1uiv(this.addr,t)}function vp(l,t){l.uniform2uiv(this.addr,t)}function _p(l,t){l.uniform3uiv(this.addr,t)}function xp(l,t){l.uniform4uiv(this.addr,t)}function yp(l,t,e){const n=this.cache,i=t.length,s=sr(e,i);ue(n,s)||(l.uniform1iv(this.addr,s),de(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||kl,s[r])}function bp(l,t,e){const n=this.cache,i=t.length,s=sr(e,i);ue(n,s)||(l.uniform1iv(this.addr,s),de(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Gl,s[r])}function Mp(l,t,e){const n=this.cache,i=t.length,s=sr(e,i);ue(n,s)||(l.uniform1iv(this.addr,s),de(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Vl,s[r])}function wp(l,t,e){const n=this.cache,i=t.length,s=sr(e,i);ue(n,s)||(l.uniform1iv(this.addr,s),de(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Ul,s[r])}function Sp(l){switch(l){case 5126:return rp;case 35664:return op;case 35665:return ap;case 35666:return lp;case 35674:return cp;case 35675:return hp;case 35676:return up;case 5124:case 35670:return dp;case 35667:case 35671:return fp;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return gp;case 36294:return vp;case 36295:return _p;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return wp}}class Ep{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=sp(e.type)}}class Ap{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Sp(e.type)}}class Cp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function Ra(l,t){l.seq.push(t),l.map[t.id]=t}function Tp(l,t,e){const n=l.name,i=n.length;for(Fr.lastIndex=0;;){const s=Fr.exec(n),r=Fr.lastIndex;let o=s[1];const a=s[2]==="]",c=s[3];if(a&&(o=o|0),c===void 0||c==="["&&r+2===i){Ra(e,c===void 0?new Ep(o,l,t):new Ap(o,l,t));break}else{let d=e.map[o];d===void 0&&(d=new Cp(o),Ra(e,d)),e=d}}}class Ks{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);Tp(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function La(l,t,e){const n=l.createShader(t);return l.shaderSource(n,e),l.compileShader(n),n}let Rp=0;function Lp(l,t){const e=l.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function Dp(l){switch(l){case pi:return["Linear","( value )"];case Kt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function Da(l,t,e){const n=l.getShaderParameter(t,35713),i=l.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Lp(l.getShaderSource(t),r)}else return i}function Pp(l,t){const e=Dp(t);return"vec4 "+l+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Ip(l,t){let e;switch(t){case Dc:e="Linear";break;case Pc:e="Reinhard";break;case Ic:e="OptimizedCineon";break;case Nc:e="ACESFilmic";break;case zc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+l+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Np(l){return[l.extensionDerivatives||l.envMapCubeUVHeight||l.bumpMap||l.tangentSpaceNormalMap||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hs).join(`
`)}function zp(l){const t=[];for(const e in l){const n=l[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Op(l,t){const e={},n=l.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=l.getActiveAttrib(t,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[r]={type:s.type,location:l.getAttribLocation(t,r),locationSize:o}}return e}function hs(l){return l!==""}function Pa(l,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ia(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(l){return l.replace(Bp,Fp)}function Fp(l,t){const e=Lt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ro(e)}const kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Na(l){return l.replace(kp,Up)}function Up(l,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function za(l){let t="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?t+=`
#define HIGH_PRECISION`:l.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gp(l){let t="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===ml?t="SHADOWMAP_TYPE_PCF":l.shadowMapType===gl?t="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===ls&&(t="SHADOWMAP_TYPE_VSM"),t}function Vp(l){let t="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case Ui:case Gi:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hp(l){let t="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Wp(l){let t="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case xl:t="ENVMAP_BLENDING_MULTIPLY";break;case Rc:t="ENVMAP_BLENDING_MIX";break;case Lc:t="ENVMAP_BLENDING_ADD";break}return t}function qp(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xp(l,t,e,n){const i=l.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const a=Gp(e),c=Vp(e),h=Hp(e),d=Wp(e),u=qp(e),m=e.isWebGL2?"":Np(e),g=zp(s),f=i.createProgram();let p,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(hs).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(hs).join(`
`),_.length>0&&(_+=`
`)):(p=[za(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),_=[m,za(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Lt.tonemapping_pars_fragment:"",e.toneMapping!==On?Ip("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.encodings_pars_fragment,Pp("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),r=ro(r),r=Pa(r,e),r=Ia(r,e),o=ro(o),o=Pa(o,e),o=Ia(o,e),r=Na(r),o=Na(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=v+p+r,y=v+_+o,w=La(i,35633,x),S=La(i,35632,y);if(i.attachShader(f,w),i.attachShader(f,S),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),l.debug.checkShaderErrors){const A=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(w).trim(),k=i.getShaderInfoLog(S).trim();let G=!0,L=!0;if(i.getProgramParameter(f,35714)===!1){G=!1;const I=Da(i,w,"vertex"),N=Da(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+A+`
`+I+`
`+N)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(P===""||k==="")&&(L=!1);L&&(this.diagnostics={runnable:G,programLog:A,vertexShader:{log:P,prefix:p},fragmentShader:{log:k,prefix:_}})}i.deleteShader(w),i.deleteShader(S);let C;this.getUniforms=function(){return C===void 0&&(C=new Ks(i,f)),C};let b;return this.getAttributes=function(){return b===void 0&&(b=Op(i,f)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=Rp++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=S,this}let Yp=0;class jp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Kp(t),e.set(t,n)),n}}class Kp{constructor(t){this.id=Yp++,this.code=t,this.usedTimes=0}}function Zp(l,t,e,n,i,s,r){const o=new fo,a=new jp,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(b,A,P,k,G){const L=k.fog,I=G.geometry,N=b.isMeshStandardMaterial?k.environment:null,z=(b.isMeshStandardMaterial?e:t).get(b.envMap||N),X=z&&z.mapping===nr?z.image.height:null,F=g[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Y=q!==void 0?q.length:0;let et=0;I.morphAttributes.position!==void 0&&(et=1),I.morphAttributes.normal!==void 0&&(et=2),I.morphAttributes.color!==void 0&&(et=3);let O,J,tt,U;if(F){const Et=vn[F];O=Et.vertexShader,J=Et.fragmentShader}else O=b.vertexShader,J=b.fragmentShader,a.update(b),tt=a.getVertexShaderID(b),U=a.getFragmentShaderID(b);const ot=l.getRenderTarget(),at=b.alphaTest>0,ct=b.clearcoat>0,st=b.iridescence>0;return{isWebGL2:h,shaderID:F,shaderName:b.type,vertexShader:O,fragmentShader:J,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:U,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:u,outputEncoding:ot===null?l.outputEncoding:ot.isXRRenderTarget===!0?ot.texture.encoding:pi,map:!!b.map,matcap:!!b.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:X,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===th,tangentSpaceNormalMap:b.normalMapType===Ml,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Kt,clearcoat:ct,clearcoatMap:ct&&!!b.clearcoatMap,clearcoatRoughnessMap:ct&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:ct&&!!b.clearcoatNormalMap,iridescence:st,iridescenceMap:st&&!!b.iridescenceMap,iridescenceThicknessMap:st&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Bi,alphaMap:!!b.alphaMap,alphaTest:at,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!I.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:l.shadowMap.enabled&&P.length>0,shadowMapType:l.shadowMap.type,toneMapping:b.toneMapped?l.toneMapping:On,useLegacyLights:l.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zn,flipSided:b.side===He,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)A.push(P),A.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(_(A,b),v(A,b),A.push(l.outputEncoding)),A.push(b.customProgramCacheKey),A.join()}function _(b,A){b.push(A.precision),b.push(A.outputEncoding),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.combine),b.push(A.vertexUvs),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function v(b,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),b.push(o.mask)}function x(b){const A=g[b.type];let P;if(A){const k=vn[A];P=zh.clone(k.uniforms)}else P=b.uniforms;return P}function y(b,A){let P;for(let k=0,G=c.length;k<G;k++){const L=c[k];if(L.cacheKey===A){P=L,++P.usedTimes;break}}return P===void 0&&(P=new Xp(l,A,b,s),c.push(P)),P}function w(b){if(--b.usedTimes===0){const A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),b.destroy()}}function S(b){a.remove(b)}function C(){a.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:x,acquireProgram:y,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:C}}function $p(){let l=new WeakMap;function t(s){let r=l.get(s);return r===void 0&&(r={},l.set(s,r)),r}function e(s){l.delete(s)}function n(s,r,o){l.get(s)[r]=o}function i(){l=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Jp(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.z!==t.z?l.z-t.z:l.id-t.id}function Oa(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function Ba(){const l=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,m,g,f,p){let _=l[t];return _===void 0?(_={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:f,group:p},l[t]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=f,_.group=p),t++,_}function o(d,u,m,g,f,p){const _=r(d,u,m,g,f,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function a(d,u,m,g,f,p){const _=r(d,u,m,g,f,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function c(d,u){e.length>1&&e.sort(d||Jp),n.length>1&&n.sort(u||Oa),i.length>1&&i.sort(u||Oa)}function h(){for(let d=t,u=l.length;d<u;d++){const m=l[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:a,finish:h,sort:c}}function Qp(){let l=new WeakMap;function t(n,i){const s=l.get(n);let r;return s===void 0?(r=new Ba,l.set(n,[r])):i>=s.length?(r=new Ba,s.push(r)):r=s[i],r}function e(){l=new WeakMap}return{get:t,dispose:e}}function tm(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Ht};break;case"SpotLight":e={position:new H,direction:new H,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new H,halfWidth:new H,halfHeight:new H};break}return l[t.id]=e,e}}}function em(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=e,e}}}let nm=0;function im(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function sm(l,t){const e=new tm,n=em(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new H);const s=new H,r=new he,o=new he;function a(h,d){let u=0,m=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,p=0,_=0,v=0,x=0,y=0,w=0,S=0,C=0,b=0;h.sort(im);const A=d===!0?Math.PI:1;for(let k=0,G=h.length;k<G;k++){const L=h[k],I=L.color,N=L.intensity,z=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=I.r*N*A,m+=I.g*N*A,g+=I.b*N*A;else if(L.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(L.sh.coefficients[F],N);else if(L.isDirectionalLight){const F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){const q=L.shadow,Y=n.get(L);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=L.shadow.matrix,y++}i.directional[f]=F,f++}else if(L.isSpotLight){const F=e.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(I).multiplyScalar(N*A),F.distance=z,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,i.spot[_]=F;const q=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,q.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[_]=q.matrix,L.castShadow){const Y=n.get(L);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=X,S++}_++}else if(L.isRectAreaLight){const F=e.get(L);F.color.copy(I).multiplyScalar(N),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=F,v++}else if(L.isPointLight){const F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*A),F.distance=L.distance,F.decay=L.decay,L.castShadow){const q=L.shadow,Y=n.get(L);Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,i.pointShadow[p]=Y,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=L.shadow.matrix,w++}i.point[p]=F,p++}else if(L.isHemisphereLight){const F=e.get(L);F.skyColor.copy(L.color).multiplyScalar(N*A),F.groundColor.copy(L.groundColor).multiplyScalar(N*A),i.hemi[x]=F,x++}}v>0&&(t.isWebGL2||l.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==v||P.hemiLength!==x||P.numDirectionalShadows!==y||P.numPointShadows!==w||P.numSpotShadows!==S||P.numSpotMaps!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,P.directionalLength=f,P.pointLength=p,P.spotLength=_,P.rectAreaLength=v,P.hemiLength=x,P.numDirectionalShadows=y,P.numPointShadows=w,P.numSpotShadows=S,P.numSpotMaps=C,i.version=nm++)}function c(h,d){let u=0,m=0,g=0,f=0,p=0;const _=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const y=h[v];if(y.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),u++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const w=i.rectArea[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),o.identity(),r.copy(y.matrixWorld),r.premultiply(_),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),f++}else if(y.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(_),p++}}}return{setup:a,setupView:c,state:i}}function Fa(l,t){const e=new sm(l,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function a(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function rm(l,t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Fa(l,t),e.set(s,[a])):r>=o.length?(a=new Fa(l,t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class om extends bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class am extends bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cm=`uniform sampler2D shadow_pass;
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
}`;function hm(l,t,e){let n=new po;const i=new qt,s=new qt,r=new _e,o=new om({depthPacking:Qc}),a=new am,c={},h=e.maxTextureSize,d={[Xn]:He,[He]:Xn,[zn]:zn},u=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:lm,fragmentShader:cm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Kn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Dt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml,this.render=function(y,w,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const C=l.getRenderTarget(),b=l.getActiveCubeFace(),A=l.getActiveMipmapLevel(),P=l.state;P.setBlending(qn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let k=0,G=y.length;k<G;k++){const L=y[k],I=L.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const N=I.getFrameExtents();if(i.multiply(N),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/N.x),i.x=s.x*N.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/N.y),i.y=s.y*N.y,I.mapSize.y=s.y)),I.map===null){const X=this.type!==ls?{minFilter:xe,magFilter:xe}:{};I.map=new gi(i.x,i.y,X),I.map.texture.name=L.name+".shadowMap",I.camera.updateProjectionMatrix()}l.setRenderTarget(I.map),l.clear();const z=I.getViewportCount();for(let X=0;X<z;X++){const F=I.getViewport(X);r.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),P.viewport(r),I.updateMatrices(L,X),n=I.getFrustum(),x(w,S,I.camera,L,this.type)}I.isPointLightShadow!==!0&&this.type===ls&&_(I,S),I.needsUpdate=!1}p.needsUpdate=!1,l.setRenderTarget(C,b,A)};function _(y,w){const S=t.update(f);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new gi(i.x,i.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,l.setRenderTarget(y.mapPass),l.clear(),l.renderBufferDirect(w,null,S,u,f,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,l.setRenderTarget(y.map),l.clear(),l.renderBufferDirect(w,null,S,m,f,null)}function v(y,w,S,C,b,A){let P=null;const k=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(k!==void 0)P=k;else if(P=S.isPointLight===!0?a:o,l.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=P.uuid,L=w.uuid;let I=c[G];I===void 0&&(I={},c[G]=I);let N=I[L];N===void 0&&(N=P.clone(),I[L]=N),P=N}return P.visible=w.visible,P.wireframe=w.wireframe,A===ls?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(S.matrixWorld),P.nearDistance=C,P.farDistance=b),P}function x(y,w,S,C,b){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===ls)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);const k=t.update(y),G=y.material;if(Array.isArray(G)){const L=k.groups;for(let I=0,N=L.length;I<N;I++){const z=L[I],X=G[z.materialIndex];if(X&&X.visible){const F=v(y,X,C,S.near,S.far,b);l.renderBufferDirect(S,null,k,F,y,z)}}}else if(G.visible){const L=v(y,G,C,S.near,S.far,b);l.renderBufferDirect(S,null,k,L,y,null)}}const P=y.children;for(let k=0,G=P.length;k<G;k++)x(P[k],w,S,C,b)}}function um(l,t,e){const n=e.isWebGL2;function i(){let B=!1;const Z=new _e;let nt=null;const pt=new _e(0,0,0,0);return{setMask:function(_t){nt!==_t&&!B&&(l.colorMask(_t,_t,_t,_t),nt=_t)},setLocked:function(_t){B=_t},setClear:function(_t,Yt,pe,Ee,hn){hn===!0&&(_t*=Ee,Yt*=Ee,pe*=Ee),Z.set(_t,Yt,pe,Ee),pt.equals(Z)===!1&&(l.clearColor(_t,Yt,pe,Ee),pt.copy(Z))},reset:function(){B=!1,nt=null,pt.set(-1,0,0,0)}}}function s(){let B=!1,Z=null,nt=null,pt=null;return{setTest:function(_t){_t?at(2929):ct(2929)},setMask:function(_t){Z!==_t&&!B&&(l.depthMask(_t),Z=_t)},setFunc:function(_t){if(nt!==_t){switch(_t){case Mc:l.depthFunc(512);break;case wc:l.depthFunc(519);break;case Sc:l.depthFunc(513);break;case Jr:l.depthFunc(515);break;case Ec:l.depthFunc(514);break;case Ac:l.depthFunc(518);break;case Cc:l.depthFunc(516);break;case Tc:l.depthFunc(517);break;default:l.depthFunc(515)}nt=_t}},setLocked:function(_t){B=_t},setClear:function(_t){pt!==_t&&(l.clearDepth(_t),pt=_t)},reset:function(){B=!1,Z=null,nt=null,pt=null}}}function r(){let B=!1,Z=null,nt=null,pt=null,_t=null,Yt=null,pe=null,Ee=null,hn=null;return{setTest:function(ne){B||(ne?at(2960):ct(2960))},setMask:function(ne){Z!==ne&&!B&&(l.stencilMask(ne),Z=ne)},setFunc:function(ne,qe,un){(nt!==ne||pt!==qe||_t!==un)&&(l.stencilFunc(ne,qe,un),nt=ne,pt=qe,_t=un)},setOp:function(ne,qe,un){(Yt!==ne||pe!==qe||Ee!==un)&&(l.stencilOp(ne,qe,un),Yt=ne,pe=qe,Ee=un)},setLocked:function(ne){B=ne},setClear:function(ne){hn!==ne&&(l.clearStencil(ne),hn=ne)},reset:function(){B=!1,Z=null,nt=null,pt=null,_t=null,Yt=null,pe=null,Ee=null,hn=null}}}const o=new i,a=new s,c=new r,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,f=[],p=null,_=!1,v=null,x=null,y=null,w=null,S=null,C=null,b=null,A=!1,P=null,k=null,G=null,L=null,I=null;const N=l.getParameter(35661);let z=!1,X=0;const F=l.getParameter(7938);F.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(F)[1]),z=X>=1):F.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),z=X>=2);let q=null,Y={};const et=l.getParameter(3088),O=l.getParameter(2978),J=new _e().fromArray(et),tt=new _e().fromArray(O);function U(B,Z,nt){const pt=new Uint8Array(4),_t=l.createTexture();l.bindTexture(B,_t),l.texParameteri(B,10241,9728),l.texParameteri(B,10240,9728);for(let Yt=0;Yt<nt;Yt++)l.texImage2D(Z+Yt,0,6408,1,1,0,6408,5121,pt);return _t}const ot={};ot[3553]=U(3553,3553,1),ot[34067]=U(34067,34069,6),o.setClear(0,0,0,1),a.setClear(1),c.setClear(0),at(2929),a.setFunc(Jr),Zt(!1),bt(Co),at(2884),te(qn);function at(B){u[B]!==!0&&(l.enable(B),u[B]=!0)}function ct(B){u[B]!==!1&&(l.disable(B),u[B]=!1)}function st(B,Z){return m[B]!==Z?(l.bindFramebuffer(B,Z),m[B]=Z,n&&(B===36009&&(m[36160]=Z),B===36160&&(m[36009]=Z)),!0):!1}function ht(B,Z){let nt=f,pt=!1;if(B)if(nt=g.get(Z),nt===void 0&&(nt=[],g.set(Z,nt)),B.isWebGLMultipleRenderTargets){const _t=B.texture;if(nt.length!==_t.length||nt[0]!==36064){for(let Yt=0,pe=_t.length;Yt<pe;Yt++)nt[Yt]=36064+Yt;nt.length=_t.length,pt=!0}}else nt[0]!==36064&&(nt[0]=36064,pt=!0);else nt[0]!==1029&&(nt[0]=1029,pt=!0);pt&&(e.isWebGL2?l.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function Et(B){return p!==B?(l.useProgram(B),p=B,!0):!1}const At={[Ni]:32774,[uc]:32778,[dc]:32779};if(n)At[Do]=32775,At[Po]=32776;else{const B=t.get("EXT_blend_minmax");B!==null&&(At[Do]=B.MIN_EXT,At[Po]=B.MAX_EXT)}const Bt={[fc]:0,[pc]:1,[mc]:768,[vl]:770,[bc]:776,[xc]:774,[vc]:772,[gc]:769,[_l]:771,[yc]:775,[_c]:773};function te(B,Z,nt,pt,_t,Yt,pe,Ee){if(B===qn){_===!0&&(ct(3042),_=!1);return}if(_===!1&&(at(3042),_=!0),B!==hc){if(B!==v||Ee!==A){if((x!==Ni||S!==Ni)&&(l.blendEquation(32774),x=Ni,S=Ni),Ee)switch(B){case Bi:l.blendFuncSeparate(1,771,1,771);break;case To:l.blendFunc(1,1);break;case Ro:l.blendFuncSeparate(0,769,0,1);break;case Lo:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Bi:l.blendFuncSeparate(770,771,1,771);break;case To:l.blendFunc(770,1);break;case Ro:l.blendFuncSeparate(0,769,0,1);break;case Lo:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,w=null,C=null,b=null,v=B,A=Ee}return}_t=_t||Z,Yt=Yt||nt,pe=pe||pt,(Z!==x||_t!==S)&&(l.blendEquationSeparate(At[Z],At[_t]),x=Z,S=_t),(nt!==y||pt!==w||Yt!==C||pe!==b)&&(l.blendFuncSeparate(Bt[nt],Bt[pt],Bt[Yt],Bt[pe]),y=nt,w=pt,C=Yt,b=pe),v=B,A=!1}function le(B,Z){B.side===zn?ct(2884):at(2884);let nt=B.side===He;Z&&(nt=!nt),Zt(nt),B.blending===Bi&&B.transparent===!1?te(qn):te(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),o.setMask(B.colorWrite);const pt=B.stencilWrite;c.setTest(pt),pt&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Pt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?at(32926):ct(32926)}function Zt(B){P!==B&&(B?l.frontFace(2304):l.frontFace(2305),P=B)}function bt(B){B!==lc?(at(2884),B!==k&&(B===Co?l.cullFace(1029):B===cc?l.cullFace(1028):l.cullFace(1032))):ct(2884),k=B}function vt(B){B!==G&&(z&&l.lineWidth(B),G=B)}function Pt(B,Z,nt){B?(at(32823),(L!==Z||I!==nt)&&(l.polygonOffset(Z,nt),L=Z,I=nt)):ct(32823)}function $t(B){B?at(3089):ct(3089)}function Xt(B){B===void 0&&(B=33984+N-1),q!==B&&(l.activeTexture(B),q=B)}function R(B,Z,nt){nt===void 0&&(q===null?nt=33984+N-1:nt=q);let pt=Y[nt];pt===void 0&&(pt={type:void 0,texture:void 0},Y[nt]=pt),(pt.type!==B||pt.texture!==Z)&&(q!==nt&&(l.activeTexture(nt),q=nt),l.bindTexture(B,Z||ot[B]),pt.type=B,pt.texture=Z)}function E(){const B=Y[q];B!==void 0&&B.type!==void 0&&(l.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function j(){try{l.compressedTexImage2D.apply(l,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{l.compressedTexImage3D.apply(l,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{l.texSubImage2D.apply(l,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{l.texSubImage3D.apply(l,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{l.compressedTexSubImage3D.apply(l,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{l.texStorage2D.apply(l,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{l.texStorage3D.apply(l,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{l.texImage2D.apply(l,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{l.texImage3D.apply(l,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(B){J.equals(B)===!1&&(l.scissor(B.x,B.y,B.z,B.w),J.copy(B))}function Mt(B){tt.equals(B)===!1&&(l.viewport(B.x,B.y,B.z,B.w),tt.copy(B))}function Gt(B,Z){let nt=d.get(Z);nt===void 0&&(nt=new WeakMap,d.set(Z,nt));let pt=nt.get(B);pt===void 0&&(pt=l.getUniformBlockIndex(Z,B.name),nt.set(B,pt))}function Jt(B,Z){const pt=d.get(Z).get(B);h.get(Z)!==pt&&(l.uniformBlockBinding(Z,pt,B.__bindingPointIndex),h.set(Z,pt))}function fe(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),n===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),u={},q=null,Y={},m={},g=new WeakMap,f=[],p=null,_=!1,v=null,x=null,y=null,w=null,S=null,C=null,b=null,A=!1,P=null,k=null,G=null,L=null,I=null,J.set(0,0,l.canvas.width,l.canvas.height),tt.set(0,0,l.canvas.width,l.canvas.height),o.reset(),a.reset(),c.reset()}return{buffers:{color:o,depth:a,stencil:c},enable:at,disable:ct,bindFramebuffer:st,drawBuffers:ht,useProgram:Et,setBlending:te,setMaterial:le,setFlipSided:Zt,setCullFace:bt,setLineWidth:vt,setPolygonOffset:Pt,setScissorTest:$t,activeTexture:Xt,bindTexture:R,unbindTexture:E,compressedTexImage2D:j,compressedTexImage3D:it,texImage2D:xt,texImage3D:Tt,updateUBOMapping:Gt,uniformBlockBinding:Jt,texStorage2D:Q,texStorage3D:Ct,texSubImage2D:rt,texSubImage3D:ut,compressedTexSubImage2D:yt,compressedTexSubImage3D:ft,scissor:St,viewport:Mt,reset:fe}}function dm(l,t,e,n,i,s,r){const o=i.isWebGL2,a=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,E){return _?new OffscreenCanvas(R,E):Js("canvas")}function x(R,E,j,it){let rt=1;if((R.width>it||R.height>it)&&(rt=it/Math.max(R.width,R.height)),rt<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ut=E?Sl:Math.floor,yt=ut(rt*R.width),ft=ut(rt*R.height);f===void 0&&(f=v(yt,ft));const Q=j?v(yt,ft):f;return Q.width=yt,Q.height=ft,Q.getContext("2d").drawImage(R,0,0,yt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+yt+"x"+ft+")."),Q}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return so(R.width)&&so(R.height)}function w(R){return o?!1:R.wrapS!==Ge||R.wrapT!==Ge||R.minFilter!==xe&&R.minFilter!==Ke}function S(R,E){return R.generateMipmaps&&E&&R.minFilter!==xe&&R.minFilter!==Ke}function C(R){l.generateMipmap(R)}function b(R,E,j,it,rt=!1){if(o===!1)return E;if(R!==null){if(l[R]!==void 0)return l[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ut=E;return E===6403&&(j===5126&&(ut=33326),j===5131&&(ut=33325),j===5121&&(ut=33321)),E===33319&&(j===5126&&(ut=33328),j===5131&&(ut=33327),j===5121&&(ut=33323)),E===6408&&(j===5126&&(ut=34836),j===5131&&(ut=34842),j===5121&&(ut=it===Kt&&rt===!1?35907:32856),j===32819&&(ut=32854),j===32820&&(ut=32855)),(ut===33325||ut===33326||ut===33327||ut===33328||ut===34842||ut===34836)&&t.get("EXT_color_buffer_float"),ut}function A(R,E,j){return S(R,j)===!0||R.isFramebufferTexture&&R.minFilter!==xe&&R.minFilter!==Ke?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function P(R){return R===xe||R===Io||R===hr?9728:9729}function k(R){const E=R.target;E.removeEventListener("dispose",k),L(E),E.isVideoTexture&&g.delete(E)}function G(R){const E=R.target;E.removeEventListener("dispose",G),N(E)}function L(R){const E=n.get(R);if(E.__webglInit===void 0)return;const j=R.source,it=p.get(j);if(it){const rt=it[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&I(R),Object.keys(it).length===0&&p.delete(j)}n.remove(R)}function I(R){const E=n.get(R);l.deleteTexture(E.__webglTexture);const j=R.source,it=p.get(j);delete it[E.__cacheKey],r.memory.textures--}function N(R){const E=R.texture,j=n.get(R),it=n.get(E);if(it.__webglTexture!==void 0&&(l.deleteTexture(it.__webglTexture),r.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)l.deleteFramebuffer(j.__webglFramebuffer[rt]),j.__webglDepthbuffer&&l.deleteRenderbuffer(j.__webglDepthbuffer[rt]);else{if(l.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&l.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&l.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let rt=0;rt<j.__webglColorRenderbuffer.length;rt++)j.__webglColorRenderbuffer[rt]&&l.deleteRenderbuffer(j.__webglColorRenderbuffer[rt]);j.__webglDepthRenderbuffer&&l.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let rt=0,ut=E.length;rt<ut;rt++){const yt=n.get(E[rt]);yt.__webglTexture&&(l.deleteTexture(yt.__webglTexture),r.memory.textures--),n.remove(E[rt])}n.remove(E),n.remove(R)}let z=0;function X(){z=0}function F(){const R=z;return R>=a&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a),z+=1,R}function q(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.encoding),E.join()}function Y(R,E){const j=n.get(R);if(R.isVideoTexture&&$t(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){const it=R.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(j,R,E);return}}e.bindTexture(3553,j.__webglTexture,33984+E)}function et(R,E){const j=n.get(R);if(R.version>0&&j.__version!==R.version){ct(j,R,E);return}e.bindTexture(35866,j.__webglTexture,33984+E)}function O(R,E){const j=n.get(R);if(R.version>0&&j.__version!==R.version){ct(j,R,E);return}e.bindTexture(32879,j.__webglTexture,33984+E)}function J(R,E){const j=n.get(R);if(R.version>0&&j.__version!==R.version){st(j,R,E);return}e.bindTexture(34067,j.__webglTexture,33984+E)}const tt={[eo]:10497,[Ge]:33071,[no]:33648},U={[xe]:9728,[Io]:9984,[hr]:9986,[Ke]:9729,[Oc]:9985,[ms]:9987};function ot(R,E,j){if(j?(l.texParameteri(R,10242,tt[E.wrapS]),l.texParameteri(R,10243,tt[E.wrapT]),(R===32879||R===35866)&&l.texParameteri(R,32882,tt[E.wrapR]),l.texParameteri(R,10240,U[E.magFilter]),l.texParameteri(R,10241,U[E.minFilter])):(l.texParameteri(R,10242,33071),l.texParameteri(R,10243,33071),(R===32879||R===35866)&&l.texParameteri(R,32882,33071),(E.wrapS!==Ge||E.wrapT!==Ge)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(R,10240,P(E.magFilter)),l.texParameteri(R,10241,P(E.minFilter)),E.minFilter!==xe&&E.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===xe||E.minFilter!==hr&&E.minFilter!==ms||E.type===ui&&t.has("OES_texture_float_linear")===!1||o===!1&&E.type===gs&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(l.texParameterf(R,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function at(R,E){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",k));const it=E.source;let rt=p.get(it);rt===void 0&&(rt={},p.set(it,rt));const ut=q(E);if(ut!==R.__cacheKey){rt[ut]===void 0&&(rt[ut]={texture:l.createTexture(),usedTimes:0},r.memory.textures++,j=!0),rt[ut].usedTimes++;const yt=rt[R.__cacheKey];yt!==void 0&&(rt[R.__cacheKey].usedTimes--,yt.usedTimes===0&&I(E)),R.__cacheKey=ut,R.__webglTexture=rt[ut].texture}return j}function ct(R,E,j){let it=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(it=35866),E.isData3DTexture&&(it=32879);const rt=at(R,E),ut=E.source;e.bindTexture(it,R.__webglTexture,33984+j);const yt=n.get(ut);if(ut.version!==yt.__version||rt===!0){e.activeTexture(33984+j),l.pixelStorei(37440,E.flipY),l.pixelStorei(37441,E.premultiplyAlpha),l.pixelStorei(3317,E.unpackAlignment),l.pixelStorei(37443,0);const ft=w(E)&&y(E.image)===!1;let Q=x(E.image,ft,!1,h);Q=Xt(E,Q);const Ct=y(Q)||o,xt=s.convert(E.format,E.encoding);let Tt=s.convert(E.type),St=b(E.internalFormat,xt,Tt,E.encoding,E.isVideoTexture);ot(it,E,Ct);let Mt;const Gt=E.mipmaps,Jt=o&&E.isVideoTexture!==!0,fe=yt.__version===void 0||rt===!0,B=A(E,Q,Ct);if(E.isDepthTexture)St=6402,o?E.type===ui?St=36012:E.type===hi?St=33190:E.type===Fi?St=35056:St=33189:E.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===di&&St===6402&&E.type!==bl&&E.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=hi,Tt=s.convert(E.type)),E.format===Vi&&St===6402&&(St=34041,E.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Fi,Tt=s.convert(E.type))),fe&&(Jt?e.texStorage2D(3553,1,St,Q.width,Q.height):e.texImage2D(3553,0,St,Q.width,Q.height,0,xt,Tt,null));else if(E.isDataTexture)if(Gt.length>0&&Ct){Jt&&fe&&e.texStorage2D(3553,B,St,Gt[0].width,Gt[0].height);for(let Z=0,nt=Gt.length;Z<nt;Z++)Mt=Gt[Z],Jt?e.texSubImage2D(3553,Z,0,0,Mt.width,Mt.height,xt,Tt,Mt.data):e.texImage2D(3553,Z,St,Mt.width,Mt.height,0,xt,Tt,Mt.data);E.generateMipmaps=!1}else Jt?(fe&&e.texStorage2D(3553,B,St,Q.width,Q.height),e.texSubImage2D(3553,0,0,0,Q.width,Q.height,xt,Tt,Q.data)):e.texImage2D(3553,0,St,Q.width,Q.height,0,xt,Tt,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Jt&&fe&&e.texStorage3D(35866,B,St,Gt[0].width,Gt[0].height,Q.depth);for(let Z=0,nt=Gt.length;Z<nt;Z++)Mt=Gt[Z],E.format!==rn?xt!==null?Jt?e.compressedTexSubImage3D(35866,Z,0,0,0,Mt.width,Mt.height,Q.depth,xt,Mt.data,0,0):e.compressedTexImage3D(35866,Z,St,Mt.width,Mt.height,Q.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(35866,Z,0,0,0,Mt.width,Mt.height,Q.depth,xt,Tt,Mt.data):e.texImage3D(35866,Z,St,Mt.width,Mt.height,Q.depth,0,xt,Tt,Mt.data)}else{Jt&&fe&&e.texStorage2D(3553,B,St,Gt[0].width,Gt[0].height);for(let Z=0,nt=Gt.length;Z<nt;Z++)Mt=Gt[Z],E.format!==rn?xt!==null?Jt?e.compressedTexSubImage2D(3553,Z,0,0,Mt.width,Mt.height,xt,Mt.data):e.compressedTexImage2D(3553,Z,St,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(3553,Z,0,0,Mt.width,Mt.height,xt,Tt,Mt.data):e.texImage2D(3553,Z,St,Mt.width,Mt.height,0,xt,Tt,Mt.data)}else if(E.isDataArrayTexture)Jt?(fe&&e.texStorage3D(35866,B,St,Q.width,Q.height,Q.depth),e.texSubImage3D(35866,0,0,0,0,Q.width,Q.height,Q.depth,xt,Tt,Q.data)):e.texImage3D(35866,0,St,Q.width,Q.height,Q.depth,0,xt,Tt,Q.data);else if(E.isData3DTexture)Jt?(fe&&e.texStorage3D(32879,B,St,Q.width,Q.height,Q.depth),e.texSubImage3D(32879,0,0,0,0,Q.width,Q.height,Q.depth,xt,Tt,Q.data)):e.texImage3D(32879,0,St,Q.width,Q.height,Q.depth,0,xt,Tt,Q.data);else if(E.isFramebufferTexture){if(fe)if(Jt)e.texStorage2D(3553,B,St,Q.width,Q.height);else{let Z=Q.width,nt=Q.height;for(let pt=0;pt<B;pt++)e.texImage2D(3553,pt,St,Z,nt,0,xt,Tt,null),Z>>=1,nt>>=1}}else if(Gt.length>0&&Ct){Jt&&fe&&e.texStorage2D(3553,B,St,Gt[0].width,Gt[0].height);for(let Z=0,nt=Gt.length;Z<nt;Z++)Mt=Gt[Z],Jt?e.texSubImage2D(3553,Z,0,0,xt,Tt,Mt):e.texImage2D(3553,Z,St,xt,Tt,Mt);E.generateMipmaps=!1}else Jt?(fe&&e.texStorage2D(3553,B,St,Q.width,Q.height),e.texSubImage2D(3553,0,0,0,xt,Tt,Q)):e.texImage2D(3553,0,St,xt,Tt,Q);S(E,Ct)&&C(it),yt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function st(R,E,j){if(E.image.length!==6)return;const it=at(R,E),rt=E.source;e.bindTexture(34067,R.__webglTexture,33984+j);const ut=n.get(rt);if(rt.version!==ut.__version||it===!0){e.activeTexture(33984+j),l.pixelStorei(37440,E.flipY),l.pixelStorei(37441,E.premultiplyAlpha),l.pixelStorei(3317,E.unpackAlignment),l.pixelStorei(37443,0);const yt=E.isCompressedTexture||E.image[0].isCompressedTexture,ft=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let Z=0;Z<6;Z++)!yt&&!ft?Q[Z]=x(E.image[Z],!1,!0,c):Q[Z]=ft?E.image[Z].image:E.image[Z],Q[Z]=Xt(E,Q[Z]);const Ct=Q[0],xt=y(Ct)||o,Tt=s.convert(E.format,E.encoding),St=s.convert(E.type),Mt=b(E.internalFormat,Tt,St,E.encoding),Gt=o&&E.isVideoTexture!==!0,Jt=ut.__version===void 0||it===!0;let fe=A(E,Ct,xt);ot(34067,E,xt);let B;if(yt){Gt&&Jt&&e.texStorage2D(34067,fe,Mt,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){B=Q[Z].mipmaps;for(let nt=0;nt<B.length;nt++){const pt=B[nt];E.format!==rn?Tt!==null?Gt?e.compressedTexSubImage2D(34069+Z,nt,0,0,pt.width,pt.height,Tt,pt.data):e.compressedTexImage2D(34069+Z,nt,Mt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(34069+Z,nt,0,0,pt.width,pt.height,Tt,St,pt.data):e.texImage2D(34069+Z,nt,Mt,pt.width,pt.height,0,Tt,St,pt.data)}}}else{B=E.mipmaps,Gt&&Jt&&(B.length>0&&fe++,e.texStorage2D(34067,fe,Mt,Q[0].width,Q[0].height));for(let Z=0;Z<6;Z++)if(ft){Gt?e.texSubImage2D(34069+Z,0,0,0,Q[Z].width,Q[Z].height,Tt,St,Q[Z].data):e.texImage2D(34069+Z,0,Mt,Q[Z].width,Q[Z].height,0,Tt,St,Q[Z].data);for(let nt=0;nt<B.length;nt++){const _t=B[nt].image[Z].image;Gt?e.texSubImage2D(34069+Z,nt+1,0,0,_t.width,_t.height,Tt,St,_t.data):e.texImage2D(34069+Z,nt+1,Mt,_t.width,_t.height,0,Tt,St,_t.data)}}else{Gt?e.texSubImage2D(34069+Z,0,0,0,Tt,St,Q[Z]):e.texImage2D(34069+Z,0,Mt,Tt,St,Q[Z]);for(let nt=0;nt<B.length;nt++){const pt=B[nt];Gt?e.texSubImage2D(34069+Z,nt+1,0,0,Tt,St,pt.image[Z]):e.texImage2D(34069+Z,nt+1,Mt,Tt,St,pt.image[Z])}}}S(E,xt)&&C(34067),ut.__version=rt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ht(R,E,j,it,rt){const ut=s.convert(j.format,j.encoding),yt=s.convert(j.type),ft=b(j.internalFormat,ut,yt,j.encoding);n.get(E).__hasExternalTextures||(rt===32879||rt===35866?e.texImage3D(rt,0,ft,E.width,E.height,E.depth,0,ut,yt,null):e.texImage2D(rt,0,ft,E.width,E.height,0,ut,yt,null)),e.bindFramebuffer(36160,R),Pt(E)?u.framebufferTexture2DMultisampleEXT(36160,it,rt,n.get(j).__webglTexture,0,vt(E)):(rt===3553||rt>=34069&&rt<=34074)&&l.framebufferTexture2D(36160,it,rt,n.get(j).__webglTexture,0),e.bindFramebuffer(36160,null)}function Et(R,E,j){if(l.bindRenderbuffer(36161,R),E.depthBuffer&&!E.stencilBuffer){let it=33189;if(j||Pt(E)){const rt=E.depthTexture;rt&&rt.isDepthTexture&&(rt.type===ui?it=36012:rt.type===hi&&(it=33190));const ut=vt(E);Pt(E)?u.renderbufferStorageMultisampleEXT(36161,ut,it,E.width,E.height):l.renderbufferStorageMultisample(36161,ut,it,E.width,E.height)}else l.renderbufferStorage(36161,it,E.width,E.height);l.framebufferRenderbuffer(36160,36096,36161,R)}else if(E.depthBuffer&&E.stencilBuffer){const it=vt(E);j&&Pt(E)===!1?l.renderbufferStorageMultisample(36161,it,35056,E.width,E.height):Pt(E)?u.renderbufferStorageMultisampleEXT(36161,it,35056,E.width,E.height):l.renderbufferStorage(36161,34041,E.width,E.height),l.framebufferRenderbuffer(36160,33306,36161,R)}else{const it=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let rt=0;rt<it.length;rt++){const ut=it[rt],yt=s.convert(ut.format,ut.encoding),ft=s.convert(ut.type),Q=b(ut.internalFormat,yt,ft,ut.encoding),Ct=vt(E);j&&Pt(E)===!1?l.renderbufferStorageMultisample(36161,Ct,Q,E.width,E.height):Pt(E)?u.renderbufferStorageMultisampleEXT(36161,Ct,Q,E.width,E.height):l.renderbufferStorage(36161,Q,E.width,E.height)}}l.bindRenderbuffer(36161,null)}function At(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const it=n.get(E.depthTexture).__webglTexture,rt=vt(E);if(E.depthTexture.format===di)Pt(E)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,it,0,rt):l.framebufferTexture2D(36160,36096,3553,it,0);else if(E.depthTexture.format===Vi)Pt(E)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,it,0,rt):l.framebufferTexture2D(36160,33306,3553,it,0);else throw new Error("Unknown depthTexture format")}function Bt(R){const E=n.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");At(E.__webglFramebuffer,R)}else if(j){E.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(36160,E.__webglFramebuffer[it]),E.__webglDepthbuffer[it]=l.createRenderbuffer(),Et(E.__webglDepthbuffer[it],R,!1)}else e.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=l.createRenderbuffer(),Et(E.__webglDepthbuffer,R,!1);e.bindFramebuffer(36160,null)}function te(R,E,j){const it=n.get(R);E!==void 0&&ht(it.__webglFramebuffer,R,R.texture,36064,3553),j!==void 0&&Bt(R)}function le(R){const E=R.texture,j=n.get(R),it=n.get(E);R.addEventListener("dispose",G),R.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=l.createTexture()),it.__version=E.version,r.memory.textures++);const rt=R.isWebGLCubeRenderTarget===!0,ut=R.isWebGLMultipleRenderTargets===!0,yt=y(R)||o;if(rt){j.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)j.__webglFramebuffer[ft]=l.createFramebuffer()}else{if(j.__webglFramebuffer=l.createFramebuffer(),ut)if(i.drawBuffers){const ft=R.texture;for(let Q=0,Ct=ft.length;Q<Ct;Q++){const xt=n.get(ft[Q]);xt.__webglTexture===void 0&&(xt.__webglTexture=l.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Pt(R)===!1){const ft=ut?E:[E];j.__webglMultisampledFramebuffer=l.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let Q=0;Q<ft.length;Q++){const Ct=ft[Q];j.__webglColorRenderbuffer[Q]=l.createRenderbuffer(),l.bindRenderbuffer(36161,j.__webglColorRenderbuffer[Q]);const xt=s.convert(Ct.format,Ct.encoding),Tt=s.convert(Ct.type),St=b(Ct.internalFormat,xt,Tt,Ct.encoding,R.isXRRenderTarget===!0),Mt=vt(R);l.renderbufferStorageMultisample(36161,Mt,St,R.width,R.height),l.framebufferRenderbuffer(36160,36064+Q,36161,j.__webglColorRenderbuffer[Q])}l.bindRenderbuffer(36161,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=l.createRenderbuffer(),Et(j.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(36160,null)}}if(rt){e.bindTexture(34067,it.__webglTexture),ot(34067,E,yt);for(let ft=0;ft<6;ft++)ht(j.__webglFramebuffer[ft],R,E,36064,34069+ft);S(E,yt)&&C(34067),e.unbindTexture()}else if(ut){const ft=R.texture;for(let Q=0,Ct=ft.length;Q<Ct;Q++){const xt=ft[Q],Tt=n.get(xt);e.bindTexture(3553,Tt.__webglTexture),ot(3553,xt,yt),ht(j.__webglFramebuffer,R,xt,36064+Q,3553),S(xt,yt)&&C(3553)}e.unbindTexture()}else{let ft=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ft=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,it.__webglTexture),ot(ft,E,yt),ht(j.__webglFramebuffer,R,E,36064,ft),S(E,yt)&&C(ft),e.unbindTexture()}R.depthBuffer&&Bt(R)}function Zt(R){const E=y(R)||o,j=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let it=0,rt=j.length;it<rt;it++){const ut=j[it];if(S(ut,E)){const yt=R.isWebGLCubeRenderTarget?34067:3553,ft=n.get(ut).__webglTexture;e.bindTexture(yt,ft),C(yt),e.unbindTexture()}}}function bt(R){if(o&&R.samples>0&&Pt(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],j=R.width,it=R.height;let rt=16384;const ut=[],yt=R.stencilBuffer?33306:36096,ft=n.get(R),Q=R.isWebGLMultipleRenderTargets===!0;if(Q)for(let Ct=0;Ct<E.length;Ct++)e.bindFramebuffer(36160,ft.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Ct,36161,null),e.bindFramebuffer(36160,ft.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Ct,3553,null,0);e.bindFramebuffer(36008,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,ft.__webglFramebuffer);for(let Ct=0;Ct<E.length;Ct++){ut.push(36064+Ct),R.depthBuffer&&ut.push(yt);const xt=ft.__ignoreDepthValues!==void 0?ft.__ignoreDepthValues:!1;if(xt===!1&&(R.depthBuffer&&(rt|=256),R.stencilBuffer&&(rt|=1024)),Q&&l.framebufferRenderbuffer(36008,36064,36161,ft.__webglColorRenderbuffer[Ct]),xt===!0&&(l.invalidateFramebuffer(36008,[yt]),l.invalidateFramebuffer(36009,[yt])),Q){const Tt=n.get(E[Ct]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,Tt,0)}l.blitFramebuffer(0,0,j,it,0,0,j,it,rt,9728),m&&l.invalidateFramebuffer(36008,ut)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),Q)for(let Ct=0;Ct<E.length;Ct++){e.bindFramebuffer(36160,ft.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+Ct,36161,ft.__webglColorRenderbuffer[Ct]);const xt=n.get(E[Ct]).__webglTexture;e.bindFramebuffer(36160,ft.__webglFramebuffer),l.framebufferTexture2D(36009,36064+Ct,3553,xt,0)}e.bindFramebuffer(36009,ft.__webglMultisampledFramebuffer)}}function vt(R){return Math.min(d,R.samples)}function Pt(R){const E=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function $t(R){const E=r.render.frame;g.get(R)!==E&&(g.set(R,E),R.update())}function Xt(R,E){const j=R.encoding,it=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===io||j!==pi&&(j===Kt?o===!1?t.has("EXT_sRGB")===!0&&it===rn?(R.format=io,R.minFilter=Ke,R.generateMipmaps=!1):E=Al.sRGBToLinear(E):(it!==rn||rt!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),E}this.allocateTextureUnit=F,this.resetTextureUnits=X,this.setTexture2D=Y,this.setTexture2DArray=et,this.setTexture3D=O,this.setTextureCube=J,this.rebindTextures=te,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Pt}function fm(l,t,e){const n=e.isWebGL2;function i(s,r=null){let o;if(s===fi)return 5121;if(s===Uc)return 32819;if(s===Gc)return 32820;if(s===Bc)return 5120;if(s===Fc)return 5122;if(s===bl)return 5123;if(s===kc)return 5124;if(s===hi)return 5125;if(s===ui)return 5126;if(s===gs)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Vc)return 6406;if(s===rn)return 6408;if(s===Hc)return 6409;if(s===Wc)return 6410;if(s===di)return 6402;if(s===Vi)return 34041;if(s===io)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===qc)return 6403;if(s===Xc)return 36244;if(s===Yc)return 33319;if(s===jc)return 33320;if(s===Kc)return 36249;if(s===ur||s===dr||s===fr||s===pr)if(r===Kt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ur)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ur)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===dr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===No||s===zo||s===Oo||s===Bo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===No)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Oo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fo||s===ko)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Fo)return r===Kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ko)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Uo||s===Go||s===Vo||s===Ho||s===Wo||s===qo||s===Xo||s===Yo||s===jo||s===Ko||s===Zo||s===$o||s===Jo||s===Qo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Uo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Go)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ho)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ko)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$o)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qo)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===mr)return r===Kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===$c||s===ta||s===ea||s===na)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===mr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ta)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ea)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===na)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fi?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):l[s]!==void 0?l[s]:null}return{convert:i}}class pm extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class we extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mm={type:"move"};class kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n),_=this._getHandJoint(c,f);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class gm extends Ne{constructor(t,e,n,i,s,r,o,a,c,h){if(h=h!==void 0?h:di,h!==di&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===di&&(n=hi),n===void 0&&h===Vi&&(n=Fi),super(null,i,s,r,o,a,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:xe,this.minFilter=a!==void 0?a:xe,this.flipY=!1,this.generateMipmaps=!1}}class vm extends Xi{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",a=1,c=null,h=null,d=null,u=null,m=null,g=null;const f=e.getContextAttributes();let p=null,_=null;const v=[],x=[],y=new Set,w=new Map,S=new Ze;S.layers.enable(1),S.viewport=new _e;const C=new Ze;C.layers.enable(2),C.viewport=new _e;const b=[S,C],A=new pm;A.layers.enable(1),A.layers.enable(2);let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let J=v[O];return J===void 0&&(J=new kr,v[O]=J),J.getTargetRaySpace()},this.getControllerGrip=function(O){let J=v[O];return J===void 0&&(J=new kr,v[O]=J),J.getGripSpace()},this.getHand=function(O){let J=v[O];return J===void 0&&(J=new kr,v[O]=J),J.getHandSpace()};function G(O){const J=x.indexOf(O.inputSource);if(J===-1)return;const tt=v[J];tt!==void 0&&tt.dispatchEvent({type:O.type,data:O.inputSource})}function L(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",I);for(let O=0;O<v.length;O++){const J=x[O];J!==null&&(x[O]=null,v[O].disconnect(J))}P=null,k=null,t.setRenderTarget(p),m=null,u=null,d=null,i=null,_=null,et.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",L),i.addEventListener("inputsourceschange",I),f.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:m}),_=new gi(m.framebufferWidth,m.framebufferHeight,{format:rn,type:fi,encoding:t.outputEncoding,stencilBuffer:f.stencil})}else{let J=null,tt=null,U=null;f.depth&&(U=f.stencil?35056:33190,J=f.stencil?Vi:di,tt=f.stencil?Fi:hi);const ot={colorFormat:32856,depthFormat:U,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(ot),i.updateRenderState({layers:[u]}),_=new gi(u.textureWidth,u.textureHeight,{format:rn,type:fi,depthTexture:new gm(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,encoding:t.outputEncoding,samples:f.antialias?4:0});const at=t.properties.get(_);at.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(a),c=null,r=await i.requestReferenceSpace(o),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(O){for(let J=0;J<O.removed.length;J++){const tt=O.removed[J],U=x.indexOf(tt);U>=0&&(x[U]=null,v[U].disconnect(tt))}for(let J=0;J<O.added.length;J++){const tt=O.added[J];let U=x.indexOf(tt);if(U===-1){for(let at=0;at<v.length;at++)if(at>=x.length){x.push(tt),U=at;break}else if(x[at]===null){x[at]=tt,U=at;break}if(U===-1)break}const ot=v[U];ot&&ot.connect(tt)}}const N=new H,z=new H;function X(O,J,tt){N.setFromMatrixPosition(J.matrixWorld),z.setFromMatrixPosition(tt.matrixWorld);const U=N.distanceTo(z),ot=J.projectionMatrix.elements,at=tt.projectionMatrix.elements,ct=ot[14]/(ot[10]-1),st=ot[14]/(ot[10]+1),ht=(ot[9]+1)/ot[5],Et=(ot[9]-1)/ot[5],At=(ot[8]-1)/ot[0],Bt=(at[8]+1)/at[0],te=ct*At,le=ct*Bt,Zt=U/(-At+Bt),bt=Zt*-At;J.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(bt),O.translateZ(Zt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const vt=ct+Zt,Pt=st+Zt,$t=te-bt,Xt=le+(U-bt),R=ht*st/Pt*vt,E=Et*st/Pt*vt;O.projectionMatrix.makePerspective($t,Xt,R,E,vt,Pt)}function F(O,J){J===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(J.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;A.near=C.near=S.near=O.near,A.far=C.far=S.far=O.far,(P!==A.near||k!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,k=A.far);const J=O.parent,tt=A.cameras;F(A,J);for(let ot=0;ot<tt.length;ot++)F(tt[ot],J);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),O.matrix.copy(A.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const U=O.children;for(let ot=0,at=U.length;ot<at;ot++)U[ot].updateMatrixWorld(!0);tt.length===2?X(A,S,C):A.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&m===null))return a},this.setFoveation=function(O){a=O,u!==null&&(u.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.getPlanes=function(){return y};let q=null;function Y(O,J){if(h=J.getViewerPose(c||r),g=J,h!==null){const tt=h.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let U=!1;tt.length!==A.cameras.length&&(A.cameras.length=0,U=!0);for(let ot=0;ot<tt.length;ot++){const at=tt[ot];let ct=null;if(m!==null)ct=m.getViewport(at);else{const ht=d.getViewSubImage(u,at);ct=ht.viewport,ot===0&&(t.setRenderTargetTextures(_,ht.colorTexture,u.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(_))}let st=b[ot];st===void 0&&(st=new Ze,st.layers.enable(ot),st.viewport=new _e,b[ot]=st),st.matrix.fromArray(at.transform.matrix),st.projectionMatrix.fromArray(at.projectionMatrix),st.viewport.set(ct.x,ct.y,ct.width,ct.height),ot===0&&A.matrix.copy(st.matrix),U===!0&&A.cameras.push(st)}}for(let tt=0;tt<v.length;tt++){const U=x[tt],ot=v[tt];U!==null&&ot!==void 0&&ot.update(U,J,c||r)}if(q&&q(O,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let tt=null;for(const U of y)J.detectedPlanes.has(U)||(tt===null&&(tt=[]),tt.push(U));if(tt!==null)for(const U of tt)y.delete(U),w.delete(U),n.dispatchEvent({type:"planeremoved",data:U});for(const U of J.detectedPlanes)if(!y.has(U))y.add(U),w.set(U,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:U});else{const ot=w.get(U);U.lastChangedTime>ot&&(w.set(U,U.lastChangedTime),n.dispatchEvent({type:"planechanged",data:U}))}}g=null}const et=new Bl;et.setAnimationLoop(Y),this.setAnimationLoop=function(O){q=O},this.dispose=function(){}}}function _m(l,t){function e(f,p){p.color.getRGB(f.fogColor.value,Nl(l)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,_,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),h(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),d(f,p),p.isMeshPhysicalMaterial&&u(f,p,x)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&r(f,p)):p.isPointsMaterial?o(f,p,_,v):p.isSpriteMaterial?a(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===He&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===He&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const y=l.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uv2Transform.value.copy(x.matrix))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function r(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function o(f,p,_,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*_,f.scale.value=v*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uvTransform.value.copy(x.matrix))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function u(f,p,_){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===He&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function xm(l,t,e,n){let i={},s={},r=[];const o=e.isWebGL2?l.getParameter(35375):0;function a(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(g(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",p));const w=x.program;n.updateUBOMapping(v,w);const S=t.render.frame;s[v.id]!==S&&(u(v),s[v.id]=S)}function h(v){const x=d();v.__bindingPointIndex=x;const y=l.createBuffer(),w=v.__size,S=v.usage;return l.bindBuffer(35345,y),l.bufferData(35345,w,S),l.bindBuffer(35345,null),l.bindBufferBase(35345,x,y),y}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],y=v.uniforms,w=v.__cache;l.bindBuffer(35345,x);for(let S=0,C=y.length;S<C;S++){const b=y[S];if(m(b,S,w)===!0){const A=b.__offset,P=Array.isArray(b.value)?b.value:[b.value];let k=0;for(let G=0;G<P.length;G++){const L=P[G],I=f(L);typeof L=="number"?(b.__data[0]=L,l.bufferSubData(35345,A+k,b.__data)):L.isMatrix3?(b.__data[0]=L.elements[0],b.__data[1]=L.elements[1],b.__data[2]=L.elements[2],b.__data[3]=L.elements[0],b.__data[4]=L.elements[3],b.__data[5]=L.elements[4],b.__data[6]=L.elements[5],b.__data[7]=L.elements[0],b.__data[8]=L.elements[6],b.__data[9]=L.elements[7],b.__data[10]=L.elements[8],b.__data[11]=L.elements[0]):(L.toArray(b.__data,k),k+=I.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(35345,A,b.__data)}}l.bindBuffer(35345,null)}function m(v,x,y){const w=v.value;if(y[x]===void 0){if(typeof w=="number")y[x]=w;else{const S=Array.isArray(w)?w:[w],C=[];for(let b=0;b<S.length;b++)C.push(S[b].clone());y[x]=C}return!0}else if(typeof w=="number"){if(y[x]!==w)return y[x]=w,!0}else{const S=Array.isArray(y[x])?y[x]:[y[x]],C=Array.isArray(w)?w:[w];for(let b=0;b<S.length;b++){const A=S[b];if(A.equals(C[b])===!1)return A.copy(C[b]),!0}}return!1}function g(v){const x=v.uniforms;let y=0;const w=16;let S=0;for(let C=0,b=x.length;C<b;C++){const A=x[C],P={boundary:0,storage:0},k=Array.isArray(A.value)?A.value:[A.value];for(let G=0,L=k.length;G<L;G++){const I=k[G],N=f(I);P.boundary+=N.boundary,P.storage+=N.storage}if(A.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,C>0){S=y%w;const G=w-S;S!==0&&G-P.boundary<0&&(y+=w-S,A.__offset=y)}y+=P.storage}return S=y%w,S>0&&(y+=w-S),v.__size=y,v.__cache={},this}function f(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const y=r.indexOf(x.__bindingPointIndex);r.splice(y,1),l.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const v in i)l.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:a,update:c,dispose:_}}function ym(){const l=Js("canvas");return l.style.display="block",l}function vo(l={}){this.isWebGLRenderer=!0;const t=l.canvas!==void 0?l.canvas:ym(),e=l.context!==void 0?l.context:null,n=l.depth!==void 0?l.depth:!0,i=l.stencil!==void 0?l.stencil:!0,s=l.antialias!==void 0?l.antialias:!1,r=l.premultipliedAlpha!==void 0?l.premultipliedAlpha:!0,o=l.preserveDrawingBuffer!==void 0?l.preserveDrawingBuffer:!1,a=l.powerPreference!==void 0?l.powerPreference:"default",c=l.failIfMajorPerformanceCaveat!==void 0?l.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=l.alpha!==void 0?l.alpha:!1;let d=null,u=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pi,this.useLegacyLights=!0,this.toneMapping=On,this.toneMappingExposure=1;const f=this;let p=!1,_=0,v=0,x=null,y=-1,w=null;const S=new _e,C=new _e;let b=null,A=t.width,P=t.height,k=1,G=null,L=null;const I=new _e(0,0,A,P),N=new _e(0,0,A,P);let z=!1;const X=new po;let F=!1,q=!1,Y=null;const et=new he,O=new H,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return x===null?k:1}let U=e;function ot(T,W){for(let K=0;K<T.length;K++){const V=T[K],$=t.getContext(V,W);if($!==null)return $}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:a,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${co}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",Mt,!1),U===null){const W=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&W.shift(),U=ot(W,T),U===null)throw ot(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let at,ct,st,ht,Et,At,Bt,te,le,Zt,bt,vt,Pt,$t,Xt,R,E,j,it,rt,ut,yt,ft,Q;function Ct(){at=new Df(U),ct=new Ef(U,at,l),at.init(ct),yt=new fm(U,at,ct),st=new um(U,at,ct),ht=new Nf,Et=new $p,At=new dm(U,at,st,Et,ct,yt,ht),Bt=new Cf(f),te=new Lf(f),le=new Vh(U,ct),ft=new wf(U,at,le,ct),Zt=new Pf(U,le,ht,ft),bt=new Ff(U,Zt,le,ht),it=new Bf(U,ct,At),R=new Af(Et),vt=new Zp(f,Bt,te,at,ct,ft,R),Pt=new _m(f,Et),$t=new Qp,Xt=new rm(at,ct),j=new Mf(f,Bt,te,st,bt,h,r),E=new hm(f,bt,ct),Q=new xm(U,ht,ct,st),rt=new Sf(U,at,ht,ct),ut=new If(U,at,ht,ct),ht.programs=vt.programs,f.capabilities=ct,f.extensions=at,f.properties=Et,f.renderLists=$t,f.shadowMap=E,f.state=st,f.info=ht}Ct();const xt=new vm(f,U);this.xr=xt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(A,P,!1))},this.getSize=function(T){return T.set(A,P)},this.setSize=function(T,W,K=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=T,P=W,t.width=Math.floor(T*k),t.height=Math.floor(W*k),K===!0&&(t.style.width=T+"px",t.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(A*k,P*k).floor()},this.setDrawingBufferSize=function(T,W,K){A=T,P=W,k=K,t.width=Math.floor(T*K),t.height=Math.floor(W*K),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(I)},this.setViewport=function(T,W,K,V){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,W,K,V),st.viewport(S.copy(I).multiplyScalar(k).floor())},this.getScissor=function(T){return T.copy(N)},this.setScissor=function(T,W,K,V){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,W,K,V),st.scissor(C.copy(N).multiplyScalar(k).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(T){st.setScissorTest(z=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){L=T},this.getClearColor=function(T){return T.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(T=!0,W=!0,K=!0){let V=0;T&&(V|=16384),W&&(V|=256),K&&(V|=1024),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",Mt,!1),$t.dispose(),Xt.dispose(),Et.dispose(),Bt.dispose(),te.dispose(),bt.dispose(),ft.dispose(),Q.dispose(),vt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",nt),xt.removeEventListener("sessionend",pt),Y&&(Y.dispose(),Y=null),_t.stop()};function Tt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=ht.autoReset,W=E.enabled,K=E.autoUpdate,V=E.needsUpdate,$=E.type;Ct(),ht.autoReset=T,E.enabled=W,E.autoUpdate=K,E.needsUpdate=V,E.type=$}function Mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Gt(T){const W=T.target;W.removeEventListener("dispose",Gt),Jt(W)}function Jt(T){fe(T),Et.remove(T)}function fe(T){const W=Et.get(T).programs;W!==void 0&&(W.forEach(function(K){vt.releaseProgram(K)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,K,V,$,wt){W===null&&(W=J);const Rt=$.isMesh&&$.matrixWorld.determinant()<0,It=sc(T,W,K,V,$);st.setMaterial(V,Rt);let zt=K.index,Vt=1;V.wireframe===!0&&(zt=Zt.getWireframeAttribute(K),Vt=2);const Ft=K.drawRange,kt=K.attributes.position;let ie=Ft.start*Vt,ze=(Ft.start+Ft.count)*Vt;wt!==null&&(ie=Math.max(ie,wt.start*Vt),ze=Math.min(ze,(wt.start+wt.count)*Vt)),zt!==null?(ie=Math.max(ie,0),ze=Math.min(ze,zt.count)):kt!=null&&(ie=Math.max(ie,0),ze=Math.min(ze,kt.count));const Mn=ze-ie;if(Mn<0||Mn===1/0)return;ft.setup($,V,It,K,zt);let Zn,se=rt;if(zt!==null&&(Zn=le.get(zt),se=ut,se.setIndex(Zn)),$.isMesh)V.wireframe===!0?(st.setLineWidth(V.wireframeLinewidth*tt()),se.setMode(1)):se.setMode(4);else if($.isLine){let Ut=V.linewidth;Ut===void 0&&(Ut=1),st.setLineWidth(Ut*tt()),$.isLineSegments?se.setMode(1):$.isLineLoop?se.setMode(2):se.setMode(3)}else $.isPoints?se.setMode(0):$.isSprite&&se.setMode(4);if($.isInstancedMesh)se.renderInstances(ie,Mn,$.count);else if(K.isInstancedBufferGeometry){const Ut=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,or=Math.min(K.instanceCount,Ut);se.renderInstances(ie,Mn,or)}else se.render(ie,Mn)},this.compile=function(T,W){function K(V,$,wt){V.transparent===!0&&V.side===zn&&V.forceSinglePass===!1?(V.side=He,V.needsUpdate=!0,qe(V,$,wt),V.side=Xn,V.needsUpdate=!0,qe(V,$,wt),V.side=zn):qe(V,$,wt)}u=Xt.get(T),u.init(),g.push(u),T.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(u.pushLight(V),V.castShadow&&u.pushShadow(V))}),u.setupLights(f.useLegacyLights),T.traverse(function(V){const $=V.material;if($)if(Array.isArray($))for(let wt=0;wt<$.length;wt++){const Rt=$[wt];K(Rt,T,V)}else K($,T,V)}),g.pop(),u=null};let B=null;function Z(T){B&&B(T)}function nt(){_t.stop()}function pt(){_t.start()}const _t=new Bl;_t.setAnimationLoop(Z),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(T){B=T,xt.setAnimationLoop(T),T===null?_t.stop():_t.start()},xt.addEventListener("sessionstart",nt),xt.addEventListener("sessionend",pt),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(W),W=xt.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,W,x),u=Xt.get(T,g.length),u.init(),g.push(u),et.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),X.setFromProjectionMatrix(et),q=this.localClippingEnabled,F=R.init(this.clippingPlanes,q),d=$t.get(T,m.length),d.init(),m.push(d),Yt(T,W,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(G,L),F===!0&&R.beginShadows();const K=u.state.shadowsArray;if(E.render(K,T,W),F===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(d,T),u.setupLights(f.useLegacyLights),W.isArrayCamera){const V=W.cameras;for(let $=0,wt=V.length;$<wt;$++){const Rt=V[$];pe(d,T,Rt,Rt.viewport)}}else pe(d,T,W);x!==null&&(At.updateMultisampleRenderTarget(x),At.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(f,T,W),ft.resetDefaultState(),y=-1,w=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Yt(T,W,K,V){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){V&&O.setFromMatrixPosition(T.matrixWorld).applyMatrix4(et);const Rt=bt.update(T),It=T.material;It.visible&&d.push(T,Rt,It,K,O.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==ht.render.frame&&(T.skeleton.update(),T.skeleton.frame=ht.render.frame),!T.frustumCulled||X.intersectsObject(T))){V&&O.setFromMatrixPosition(T.matrixWorld).applyMatrix4(et);const Rt=bt.update(T),It=T.material;if(Array.isArray(It)){const zt=Rt.groups;for(let Vt=0,Ft=zt.length;Vt<Ft;Vt++){const kt=zt[Vt],ie=It[kt.materialIndex];ie&&ie.visible&&d.push(T,Rt,ie,K,O.z,kt)}}else It.visible&&d.push(T,Rt,It,K,O.z,null)}}const wt=T.children;for(let Rt=0,It=wt.length;Rt<It;Rt++)Yt(wt[Rt],W,K,V)}function pe(T,W,K,V){const $=T.opaque,wt=T.transmissive,Rt=T.transparent;u.setupLightsView(K),F===!0&&R.setGlobalState(f.clippingPlanes,K),wt.length>0&&Ee($,W,K),V&&st.viewport(S.copy(V)),$.length>0&&hn($,W,K),wt.length>0&&hn(wt,W,K),Rt.length>0&&hn(Rt,W,K),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Ee(T,W,K){const V=ct.isWebGL2;Y===null&&(Y=new gi(1024,1024,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")?gs:fi,minFilter:ms,samples:V&&s===!0?4:0}));const $=f.getRenderTarget();f.setRenderTarget(Y),f.clear();const wt=f.toneMapping;f.toneMapping=On,hn(T,W,K),f.toneMapping=wt,At.updateMultisampleRenderTarget(Y),At.updateRenderTargetMipmap(Y),f.setRenderTarget($)}function hn(T,W,K){const V=W.isScene===!0?W.overrideMaterial:null;for(let $=0,wt=T.length;$<wt;$++){const Rt=T[$],It=Rt.object,zt=Rt.geometry,Vt=V===null?Rt.material:V,Ft=Rt.group;It.layers.test(K.layers)&&ne(It,W,K,zt,Vt,Ft)}}function ne(T,W,K,V,$,wt){T.onBeforeRender(f,W,K,V,$,wt),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(f,W,K,V,T,wt),$.transparent===!0&&$.side===zn&&$.forceSinglePass===!1?($.side=He,$.needsUpdate=!0,f.renderBufferDirect(K,W,V,$,T,wt),$.side=Xn,$.needsUpdate=!0,f.renderBufferDirect(K,W,V,$,T,wt),$.side=zn):f.renderBufferDirect(K,W,V,$,T,wt),T.onAfterRender(f,W,K,V,$,wt)}function qe(T,W,K){W.isScene!==!0&&(W=J);const V=Et.get(T),$=u.state.lights,wt=u.state.shadowsArray,Rt=$.state.version,It=vt.getParameters(T,$.state,wt,W,K),zt=vt.getProgramCacheKey(It);let Vt=V.programs;V.environment=T.isMeshStandardMaterial?W.environment:null,V.fog=W.fog,V.envMap=(T.isMeshStandardMaterial?te:Bt).get(T.envMap||V.environment),Vt===void 0&&(T.addEventListener("dispose",Gt),Vt=new Map,V.programs=Vt);let Ft=Vt.get(zt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===Rt)return un(T,It),Ft}else It.uniforms=vt.getUniforms(T),T.onBuild(K,It,f),T.onBeforeCompile(It,f),Ft=vt.acquireProgram(It,zt),Vt.set(zt,Ft),V.uniforms=It.uniforms;const kt=V.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=R.uniform),un(T,It),V.needsLights=oc(T),V.lightsStateVersion=Rt,V.needsLights&&(kt.ambientLightColor.value=$.state.ambient,kt.lightProbe.value=$.state.probe,kt.directionalLights.value=$.state.directional,kt.directionalLightShadows.value=$.state.directionalShadow,kt.spotLights.value=$.state.spot,kt.spotLightShadows.value=$.state.spotShadow,kt.rectAreaLights.value=$.state.rectArea,kt.ltc_1.value=$.state.rectAreaLTC1,kt.ltc_2.value=$.state.rectAreaLTC2,kt.pointLights.value=$.state.point,kt.pointLightShadows.value=$.state.pointShadow,kt.hemisphereLights.value=$.state.hemi,kt.directionalShadowMap.value=$.state.directionalShadowMap,kt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,kt.spotShadowMap.value=$.state.spotShadowMap,kt.spotLightMatrix.value=$.state.spotLightMatrix,kt.spotLightMap.value=$.state.spotLightMap,kt.pointShadowMap.value=$.state.pointShadowMap,kt.pointShadowMatrix.value=$.state.pointShadowMatrix);const ie=Ft.getUniforms(),ze=Ks.seqWithValue(ie.seq,kt);return V.currentProgram=Ft,V.uniformsList=ze,Ft}function un(T,W){const K=Et.get(T);K.outputEncoding=W.outputEncoding,K.instancing=W.instancing,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function sc(T,W,K,V,$){W.isScene!==!0&&(W=J),At.resetTextureUnits();const wt=W.fog,Rt=V.isMeshStandardMaterial?W.environment:null,It=x===null?f.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:pi,zt=(V.isMeshStandardMaterial?te:Bt).get(V.envMap||Rt),Vt=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ft=!!V.normalMap&&!!K.attributes.tangent,kt=!!K.morphAttributes.position,ie=!!K.morphAttributes.normal,ze=!!K.morphAttributes.color,Mn=V.toneMapped?f.toneMapping:On,Zn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,se=Zn!==void 0?Zn.length:0,Ut=Et.get(V),or=u.state.lights;if(F===!0&&(q===!0||T!==w)){const Oe=T===w&&V.id===y;R.setState(V,T,Oe)}let me=!1;V.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==or.state.version||Ut.outputEncoding!==It||$.isInstancedMesh&&Ut.instancing===!1||!$.isInstancedMesh&&Ut.instancing===!0||$.isSkinnedMesh&&Ut.skinning===!1||!$.isSkinnedMesh&&Ut.skinning===!0||Ut.envMap!==zt||V.fog===!0&&Ut.fog!==wt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==R.numPlanes||Ut.numIntersection!==R.numIntersection)||Ut.vertexAlphas!==Vt||Ut.vertexTangents!==Ft||Ut.morphTargets!==kt||Ut.morphNormals!==ie||Ut.morphColors!==ze||Ut.toneMapping!==Mn||ct.isWebGL2===!0&&Ut.morphTargetsCount!==se)&&(me=!0):(me=!0,Ut.__version=V.version);let $n=Ut.currentProgram;me===!0&&($n=qe(V,W,$));let Eo=!1,Ki=!1,ar=!1;const Ae=$n.getUniforms(),Jn=Ut.uniforms;if(st.useProgram($n.program)&&(Eo=!0,Ki=!0,ar=!0),V.id!==y&&(y=V.id,Ki=!0),Eo||w!==T){if(Ae.setValue(U,"projectionMatrix",T.projectionMatrix),ct.logarithmicDepthBuffer&&Ae.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),w!==T&&(w=T,Ki=!0,ar=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Oe=Ae.map.cameraPosition;Oe!==void 0&&Oe.setValue(U,O.setFromMatrixPosition(T.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ae.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||$.isSkinnedMesh)&&Ae.setValue(U,"viewMatrix",T.matrixWorldInverse)}if($.isSkinnedMesh){Ae.setOptional(U,$,"bindMatrix"),Ae.setOptional(U,$,"bindMatrixInverse");const Oe=$.skeleton;Oe&&(ct.floatVertexTextures?(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ae.setValue(U,"boneTexture",Oe.boneTexture,At),Ae.setValue(U,"boneTextureSize",Oe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const lr=K.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0&&ct.isWebGL2===!0)&&it.update($,K,$n),(Ki||Ut.receiveShadow!==$.receiveShadow)&&(Ut.receiveShadow=$.receiveShadow,Ae.setValue(U,"receiveShadow",$.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Jn.envMap.value=zt,Jn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Ki&&(Ae.setValue(U,"toneMappingExposure",f.toneMappingExposure),Ut.needsLights&&rc(Jn,ar),wt&&V.fog===!0&&Pt.refreshFogUniforms(Jn,wt),Pt.refreshMaterialUniforms(Jn,V,k,P,Y),Ks.upload(U,Ut.uniformsList,Jn,At)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ks.upload(U,Ut.uniformsList,Jn,At),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ae.setValue(U,"center",$.center),Ae.setValue(U,"modelViewMatrix",$.modelViewMatrix),Ae.setValue(U,"normalMatrix",$.normalMatrix),Ae.setValue(U,"modelMatrix",$.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Oe=V.uniformsGroups;for(let cr=0,ac=Oe.length;cr<ac;cr++)if(ct.isWebGL2){const Ao=Oe[cr];Q.update(Ao,$n),Q.bind(Ao,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function rc(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function oc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,W,K){Et.get(T.texture).__webglTexture=W,Et.get(T.depthTexture).__webglTexture=K;const V=Et.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=K===void 0,V.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,W){const K=Et.get(T);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,K=0){x=T,_=W,v=K;let V=!0,$=null,wt=!1,Rt=!1;if(T){const zt=Et.get(T);zt.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(36160,null),V=!1):zt.__webglFramebuffer===void 0?At.setupRenderTarget(T):zt.__hasExternalTextures&&At.rebindTextures(T,Et.get(T.texture).__webglTexture,Et.get(T.depthTexture).__webglTexture);const Vt=T.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Rt=!0);const Ft=Et.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?($=Ft[W],wt=!0):ct.isWebGL2&&T.samples>0&&At.useMultisampledRTT(T)===!1?$=Et.get(T).__webglMultisampledFramebuffer:$=Ft,S.copy(T.viewport),C.copy(T.scissor),b=T.scissorTest}else S.copy(I).multiplyScalar(k).floor(),C.copy(N).multiplyScalar(k).floor(),b=z;if(st.bindFramebuffer(36160,$)&&ct.drawBuffers&&V&&st.drawBuffers(T,$),st.viewport(S),st.scissor(C),st.setScissorTest(b),wt){const zt=Et.get(T.texture);U.framebufferTexture2D(36160,36064,34069+W,zt.__webglTexture,K)}else if(Rt){const zt=Et.get(T.texture),Vt=W||0;U.framebufferTextureLayer(36160,36064,zt.__webglTexture,K||0,Vt)}y=-1},this.readRenderTargetPixels=function(T,W,K,V,$,wt,Rt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It){st.bindFramebuffer(36160,It);try{const zt=T.texture,Vt=zt.format,Ft=zt.type;if(Vt!==rn&&yt.convert(Vt)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Ft===gs&&(at.has("EXT_color_buffer_half_float")||ct.isWebGL2&&at.has("EXT_color_buffer_float"));if(Ft!==fi&&yt.convert(Ft)!==U.getParameter(35738)&&!(Ft===ui&&(ct.isWebGL2||at.has("OES_texture_float")||at.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-V&&K>=0&&K<=T.height-$&&U.readPixels(W,K,V,$,yt.convert(Vt),yt.convert(Ft),wt)}finally{const zt=x!==null?Et.get(x).__webglFramebuffer:null;st.bindFramebuffer(36160,zt)}}},this.copyFramebufferToTexture=function(T,W,K=0){const V=Math.pow(2,-K),$=Math.floor(W.image.width*V),wt=Math.floor(W.image.height*V);At.setTexture2D(W,0),U.copyTexSubImage2D(3553,K,0,0,T.x,T.y,$,wt),st.unbindTexture()},this.copyTextureToTexture=function(T,W,K,V=0){const $=W.image.width,wt=W.image.height,Rt=yt.convert(K.format),It=yt.convert(K.type);At.setTexture2D(K,0),U.pixelStorei(37440,K.flipY),U.pixelStorei(37441,K.premultiplyAlpha),U.pixelStorei(3317,K.unpackAlignment),W.isDataTexture?U.texSubImage2D(3553,V,T.x,T.y,$,wt,Rt,It,W.image.data):W.isCompressedTexture?U.compressedTexSubImage2D(3553,V,T.x,T.y,W.mipmaps[0].width,W.mipmaps[0].height,Rt,W.mipmaps[0].data):U.texSubImage2D(3553,V,T.x,T.y,Rt,It,W.image),V===0&&K.generateMipmaps&&U.generateMipmap(3553),st.unbindTexture()},this.copyTextureToTexture3D=function(T,W,K,V,$=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=T.max.x-T.min.x+1,Rt=T.max.y-T.min.y+1,It=T.max.z-T.min.z+1,zt=yt.convert(V.format),Vt=yt.convert(V.type);let Ft;if(V.isData3DTexture)At.setTexture3D(V,0),Ft=32879;else if(V.isDataArrayTexture)At.setTexture2DArray(V,0),Ft=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,V.flipY),U.pixelStorei(37441,V.premultiplyAlpha),U.pixelStorei(3317,V.unpackAlignment);const kt=U.getParameter(3314),ie=U.getParameter(32878),ze=U.getParameter(3316),Mn=U.getParameter(3315),Zn=U.getParameter(32877),se=K.isCompressedTexture?K.mipmaps[0]:K.image;U.pixelStorei(3314,se.width),U.pixelStorei(32878,se.height),U.pixelStorei(3316,T.min.x),U.pixelStorei(3315,T.min.y),U.pixelStorei(32877,T.min.z),K.isDataTexture||K.isData3DTexture?U.texSubImage3D(Ft,$,W.x,W.y,W.z,wt,Rt,It,zt,Vt,se.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ft,$,W.x,W.y,W.z,wt,Rt,It,zt,se.data)):U.texSubImage3D(Ft,$,W.x,W.y,W.z,wt,Rt,It,zt,Vt,se),U.pixelStorei(3314,kt),U.pixelStorei(32878,ie),U.pixelStorei(3316,ze),U.pixelStorei(3315,Mn),U.pixelStorei(32877,Zn),$===0&&V.generateMipmaps&&U.generateMipmap(Ft),st.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?At.setTextureCube(T,0):T.isData3DTexture?At.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?At.setTexture2DArray(T,0):At.setTexture2D(T,0),st.unbindTexture()},this.resetState=function(){_=0,v=0,x=null,st.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(vo.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(l){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!l}}});class bm extends vo{}bm.prototype.isWebGL1Renderer=!0;class _o{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(t),this.density=e}clone(){return new _o(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Mm extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class wm extends Ne{constructor(t,e,n,i,s,r,o,a,c){super(t,e,n,i,s,r,o,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ve extends bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hl extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ur=new he,ka=new H,Ua=new H;class Sm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ka.setFromMatrixPosition(t.matrixWorld),e.position.copy(ka),Ua.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ua),e.updateMatrixWorld(),Ur.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ur)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Em extends Sm{constructor(){super(new Fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Am extends Hl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Em}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cm extends Hl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tm{constructor(t,e,n=0,i=1/0){this.ray=new Rl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return oo(t,this,n,e),n.sort(Ga),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)oo(t[i],this,n,e);return n.sort(Ga),n}}function Ga(l,t){return l.distance-t.distance}function oo(l,t,e,n){if(l.layers.test(t.layers)&&l.raycast(t,e),n===!0){const i=l.children;for(let s=0,r=i.length;s<r;s++)oo(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);const mt={CHUNK_SIZE:16,RENDER_DISTANCE:3,GRAVITY:-19.8,PLAYER_SPEED:12,PLAYER_JUMP_FORCE:8,PLAYER_HEIGHT:1.8,PLAYER_RADIUS:.4,FOVY:75,NEAR:.1,FAR:1e3,PLAYER_MAX_HP:10,FALL_DAMAGE_MIN_SPEED:-12,FALL_DAMAGE_FACTOR:1.5,MAX_MOBS:5,MOB_SPAWN_RADIUS:25,MOB_DESPAWN_RADIUS:35,MAX_DROPPED_ITEMS:30,ITEM_DESPAWN_TIME:30,ITEM_PICKUP_RADIUS:3.5,GAS_WEB_APP_URL:"https://script.google.com/macros/s/AKfycbzKtNw2WKxcfTh8bIqK5-9NqxHXHR9SFn0SRsL366S97-JodCSj_-fCu3rqJzbF2x7Dcw/exec"},Gs={keyForward:"KeyW",keyBackward:"KeyS",keyLeft:"KeyA",keyRight:"KeyD",keyJump:"Space",keyPlaceBlock:"KeyV",keyBreakBlock:"KeyB",invertClicks:!1,enableShadows:!0},Va="maikurafu_config";class Rm{currentConfig;constructor(){this.currentConfig={...Gs},this.load()}load(){try{const t=localStorage.getItem(Va);if(t){const e=JSON.parse(t);this.currentConfig={...Gs,...e}}}catch(t){console.error("設定の読み込みに失敗しました。デフォルト設定を使用します。",t),this.currentConfig={...Gs}}return this.currentConfig}getConfig(){return this.currentConfig}save(t){this.currentConfig={...this.currentConfig,...t};try{localStorage.setItem(Va,JSON.stringify(this.currentConfig))}catch(e){console.error("設定の保存に失敗しました。",e)}}reset(){return this.currentConfig={...Gs},this.save(this.currentConfig),this.currentConfig}}const _n=new Rm;class Lm{scene;camera;renderer;container;constructor(t){const e=document.getElementById(t);if(!e)throw new Error(`Container element with id "${t}" not found.`);this.container=e,this.initScene(),this.initCamera(),this.initRenderer(),window.addEventListener("resize",this.onWindowResize.bind(this))}initScene(){this.scene=new Mm,this.scene.background=new Ht(8306926),this.scene.fog=new _o(8306926,.015)}initCamera(){const t=this.container.clientWidth/this.container.clientHeight;this.camera=new Ze(mt.FOVY,t,mt.NEAR,mt.FAR),this.camera.position.set(0,5,10),this.camera.lookAt(0,0,0)}initRenderer(){const t=_n.getConfig();this.renderer=new vo({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=t.enableShadows,this.renderer.shadowMap.type=gl,this.container.appendChild(this.renderer.domElement)}onWindowResize(){const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}render(){this.renderer.render(this.scene,this.camera)}}var D=(l=>(l[l.AIR=0]="AIR",l[l.GROUND=1]="GROUND",l[l.DIRT=2]="DIRT",l[l.STONE=3]="STONE",l[l.WOOD=4]="WOOD",l[l.LEAVES=5]="LEAVES",l[l.PLANK=6]="PLANK",l[l.BRICK=7]="BRICK",l[l.SAND=8]="SAND",l[l.COAL_ORE=9]="COAL_ORE",l[l.TORCH=10]="TORCH",l[l.GLASS=11]="GLASS",l[l.DOOR_CLOSED=12]="DOOR_CLOSED",l[l.DOOR_OPEN=13]="DOOR_OPEN",l[l.SWORD=14]="SWORD",l[l.STAIRS=15]="STAIRS",l[l.FENCE=16]="FENCE",l[l.BED_HEAD=17]="BED_HEAD",l[l.BED_FOOT=18]="BED_FOOT",l[l.FURNACE=19]="FURNACE",l[l.CHEST=20]="CHEST",l[l.WATER=21]="WATER",l[l.DIAMOND_SWORD=22]="DIAMOND_SWORD",l[l.HAMMER=23]="HAMMER",l[l.BEDROCK=24]="BEDROCK",l[l.IRON_ORE=25]="IRON_ORE",l[l.GOLD_ORE=26]="GOLD_ORE",l[l.DIAMOND_ORE=27]="DIAMOND_ORE",l))(D||{});const _s={0:{id:0,name:"くうき",isSolid:!1,isTransparent:!0,uvs:{front:0,back:0,left:0,right:0,top:0,bottom:0}},1:{id:1,name:"くさ",isSolid:!0,isTransparent:!1,uvs:{front:3,back:3,left:3,right:3,top:0,bottom:1}},2:{id:2,name:"つち",isSolid:!0,isTransparent:!1,uvs:{front:1,back:1,left:1,right:1,top:1,bottom:1}},3:{id:3,name:"いし",isSolid:!0,isTransparent:!1,uvs:{front:2,back:2,left:2,right:2,top:2,bottom:2}},4:{id:4,name:"まるた",isSolid:!0,isTransparent:!1,uvs:{front:4,back:4,left:4,right:4,top:5,bottom:5}},5:{id:5,name:"はっぱ",isSolid:!0,isTransparent:!1,uvs:{front:6,back:6,left:6,right:6,top:6,bottom:6}},6:{id:6,name:"いた",isSolid:!0,isTransparent:!1,uvs:{front:9,back:9,left:9,right:9,top:9,bottom:9}},7:{id:7,name:"れんが",isSolid:!0,isTransparent:!1,uvs:{front:7,back:7,left:7,right:7,top:7,bottom:7}},8:{id:8,name:"すな",isSolid:!0,isTransparent:!1,uvs:{front:8,back:8,left:8,right:8,top:8,bottom:8}},9:{id:9,name:"せきたん",isSolid:!0,isTransparent:!1,uvs:{front:10,back:10,left:10,right:10,top:10,bottom:10}},10:{id:10,name:"たいまつ",isSolid:!1,isTransparent:!0,lightLevel:14,uvs:{front:11,back:11,left:11,right:11,top:11,bottom:11}},11:{id:11,name:"ガラス",isSolid:!0,isTransparent:!0,uvs:{front:12,back:12,left:12,right:12,top:12,bottom:12}},12:{id:12,name:"ドア（しめる）",isSolid:!0,isTransparent:!0,uvs:{front:13,back:13,left:13,right:13,top:13,bottom:13}},13:{id:13,name:"ドア（あける）",isSolid:!1,isTransparent:!0,uvs:{front:13,back:13,left:13,right:13,top:13,bottom:13}},14:{id:14,name:"いしのけん",isSolid:!1,isTransparent:!0,uvs:{front:14,back:14,left:14,right:14,top:14,bottom:14}},15:{id:15,name:"きのかいだん",isSolid:!0,isTransparent:!0,uvs:{front:9,back:9,left:9,right:9,top:9,bottom:9}},16:{id:16,name:"さく",isSolid:!0,isTransparent:!0,uvs:{front:16,back:16,left:16,right:16,top:16,bottom:16}},17:{id:17,name:"ベッド（まくら）",isSolid:!0,isTransparent:!0,uvs:{front:18,back:18,left:18,right:18,top:17,bottom:16}},18:{id:18,name:"ベッド（あしもと）",isSolid:!0,isTransparent:!0,uvs:{front:18,back:18,left:18,right:18,top:18,bottom:16}},19:{id:19,name:"かまど",isSolid:!0,isTransparent:!1,uvs:{front:19,back:2,left:2,right:2,top:2,bottom:2}},20:{id:20,name:"チェスト",isSolid:!0,isTransparent:!0,uvs:{front:20,back:21,left:21,right:21,top:21,bottom:16}},21:{id:21,name:"みず",isSolid:!1,isTransparent:!0,uvs:{front:22,back:22,left:22,right:22,top:22,bottom:22}},22:{id:22,name:"ダイヤのけん",isSolid:!1,isTransparent:!0,uvs:{front:23,back:23,left:23,right:23,top:23,bottom:23}},23:{id:23,name:"ハンマー",isSolid:!1,isTransparent:!0,uvs:{front:24,back:24,left:24,right:24,top:24,bottom:24}},24:{id:24,name:"いわばん",isSolid:!0,isTransparent:!1,uvs:{front:25,back:25,left:25,right:25,top:25,bottom:25}},25:{id:25,name:"てつこうせき",isSolid:!0,isTransparent:!1,uvs:{front:26,back:26,left:26,right:26,top:26,bottom:26}},26:{id:26,name:"きんこうせき",isSolid:!0,isTransparent:!1,uvs:{front:27,back:27,left:27,right:27,top:27,bottom:27}},27:{id:27,name:"ダイヤこうせき",isSolid:!0,isTransparent:!1,uvs:{front:28,back:28,left:28,right:28,top:28,bottom:28}}},Dm=[{dir:[1,0,0],corners:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uvName:"right"},{dir:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uvName:"left"},{dir:[0,1,0],corners:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],uvName:"top"},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uvName:"bottom"},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uvName:"front"},{dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uvName:"back"}],Ha={top:1,bottom:.5,front:.8,back:.8,left:.65,right:.65};class Wa{x;y;z;blocks;mesh=null;isDirty=!0;size=mt.CHUNK_SIZE;constructor(t,e,n){this.x=t,this.y=e,this.z=n,this.blocks=new Uint8Array(this.size*this.size*this.size)}getIndex(t,e,n){return t+e*this.size+n*this.size*this.size}isOutOfBounds(t,e,n){return t<0||t>=this.size||e<0||e>=this.size||n<0||n>=this.size}setBlock(t,e,n,i){if(this.isOutOfBounds(t,e,n))return;const s=this.getIndex(t,e,n);this.blocks[s]!==i&&(this.blocks[s]=i,this.isDirty=!0)}getBlock(t,e,n){if(this.isOutOfBounds(t,e,n))return D.AIR;const i=this.getIndex(t,e,n);return this.blocks[i]}generateMesh(t,e){if(!this.isDirty&&this.mesh)return this.mesh;const n=[],i=[],s=[],r=[],o=[];let a=0;const c=4,h=7,d=1/c,u=1/h,m=[],g=2;for(let _=-g;_<this.size+g;_++)for(let v=-g;v<this.size+g;v++)for(let x=-g;x<this.size+g;x++){const y=this.x*this.size+_,w=this.y*this.size+v,S=this.z*this.size+x;t.getBlock(y,w,S)===D.TORCH&&m.push({x:y+.5,y:w+.5,z:S+.5})}const f=(_,v,x,y,w,S,C)=>{const b=[{dir:[1,0,0],corners:[[y,v,S],[y,v,x],[y,w,x],[y,w,S]],uvName:"right"},{dir:[-1,0,0],corners:[[_,v,x],[_,v,S],[_,w,S],[_,w,x]],uvName:"left"},{dir:[0,1,0],corners:[[_,w,S],[y,w,S],[y,w,x],[_,w,x]],uvName:"top"},{dir:[0,-1,0],corners:[[_,v,x],[y,v,x],[y,v,S],[_,v,S]],uvName:"bottom"},{dir:[0,0,1],corners:[[_,v,S],[y,v,S],[y,w,S],[_,w,S]],uvName:"front"},{dir:[0,0,-1],corners:[[y,v,x],[_,v,x],[_,w,x],[y,w,x]],uvName:"back"}];for(const A of b){for(const z of A.corners){n.push(z[0],z[1],z[2]),i.push(...A.dir);const X=Ha[A.uvName];let F=0;for(let et=0;et<m.length;et++){const O=m[et],J=z[0]-O.x,tt=z[1]-O.y,U=z[2]-O.z,ot=Math.abs(J)+Math.abs(tt)+Math.abs(U),at=Math.max(0,1-ot/8);at>F&&(F=at)}const q=Math.min(1,.52+F*.48),Y=X*q;s.push(Y,Y*(.93-(1-F)*.08),Y*(.85-(1-F)*.15))}const P=C%c,k=Math.floor(C/c),G=P*d,L=1-(k+1)*u,I=G+d,N=L+u;r.push(G,L,I,L,I,N,G,N),o.push(a,a+1,a+2,a,a+2,a+3),a+=4}};for(let _=0;_<this.size;_++)for(let v=0;v<this.size;v++)for(let x=0;x<this.size;x++){const y=this.getBlock(_,v,x);if(y===D.AIR)continue;const w=_s[y],S=this.x*this.size+_,C=this.y*this.size+v,b=this.z*this.size+x;if(y===D.STAIRS){f(S,C,b,S+1,C+.5,b+1,9),f(S,C+.5,b,S+1,C+1,b+.5,9);continue}if(y===D.FENCE){const P=(J,tt)=>{const U=_+J,ot=v,at=x+tt;let ct;return this.isOutOfBounds(U,ot,at)?ct=t.getBlock(S+J,C,b+tt):ct=this.getBlock(U,ot,at),ct===D.FENCE},k=P(0,-1),G=P(0,1),L=P(1,0),I=P(-1,0),N=.375,z=.625;f(S+N,C,b+N,S+z,C+1,b+z,16);const X=.4375,F=.5625,q=.75,Y=.875,et=.4375,O=.5625;k&&(f(S+X,C+q,b,S+F,C+Y,b+N,16),f(S+X,C+et,b,S+F,C+O,b+N,16)),G&&(f(S+X,C+q,b+z,S+F,C+Y,b+1,16),f(S+X,C+et,b+z,S+F,C+O,b+1,16)),L&&(f(S+z,C+q,b+X,S+1,C+Y,b+F,16),f(S+z,C+et,b+X,S+1,C+O,b+F,16)),I&&(f(S,C+q,b+X,S+N,C+Y,b+F,16),f(S,C+et,b+X,S+N,C+O,b+F,16));continue}if(y===D.BED_HEAD||y===D.BED_FOOT){const P=y===D.BED_HEAD?17:18,k=18,G=.5625;f(S,C,b,S+1,C+G,b+1,k);{const L=P,I=L%c,N=Math.floor(L/c),z=I*d,X=1-(N+1)*u,F=z+d,q=X+u,Y=[[S,C+G,b+1],[S+1,C+G,b+1],[S+1,C+G,b],[S,C+G,b]];for(const et of Y)n.push(et[0],et[1],et[2]),i.push(0,1,0),s.push(.95,.95,.95);r.push(z,X,F,X,F,q,z,q),o.push(a,a+1,a+2,a,a+2,a+3),a+=4}continue}if(y===D.CHEST){const A=S+.0625,P=b+.0625,k=S+.9375,G=b+.9375;f(A,C,P,k,C+.875,G,21);{const I=20%c,N=Math.floor(20/c),z=I*d,X=1-(N+1)*u,F=z+d,q=X+u,Y=[[A,C,G],[k,C,G],[k,C+.875,G],[A,C+.875,G]];for(const et of Y)n.push(et[0],et[1],et[2]),i.push(0,0,1),s.push(.85,.85,.85);r.push(z,X,F,X,F,q,z,q),o.push(a,a+1,a+2,a,a+2,a+3),a+=4}f(A,C+.875,P,k,C+.9375,G,21);continue}for(const A of Dm){const P=_+A.dir[0],k=v+A.dir[1],G=x+A.dir[2];let L=!1;if(y===D.TORCH||y===D.DOOR_CLOSED||y===D.DOOR_OPEN)L=!0;else{let I;this.isOutOfBounds(P,k,G)?I=t.getBlock(S+A.dir[0],C+A.dir[1],b+A.dir[2]):I=this.getBlock(P,k,G);const N=_s[I];!N.isSolid||N.isTransparent?w.isTransparent&&I===y?L=!1:L=!0:L=!1}if(L){const I=y===D.TORCH,N=y===D.DOOR_CLOSED,z=y===D.DOOR_OPEN;let X="NS";(N||z)&&(X=t.getDoorOrientation(S,C,b));for(const st of A.corners){let ht=S+st[0],Et=C+st[1],At=b+st[2];if(I)ht=S+.5+(st[0]-.5)*.125,Et=C+st[1]*.625,At=b+.5+(st[2]-.5)*.125;else if(N)X==="EW"?ht=S+.5+(st[0]-.5)*.14:At=b+.5+(st[2]-.5)*.14;else if(z)X==="EW"?At=b+.5+(st[2]-.5)*.14:ht=S+.5+(st[0]-.5)*.14;else if(y===D.WATER&&st[1]===1){let R;this.isOutOfBounds(_,v+1,x)?R=t.getBlock(S,C+1,b):R=this.getBlock(_,v+1,x),R!==D.WATER&&(Et-=.15)}n.push(ht,Et,At),i.push(...A.dir);const Bt=Ha[A.uvName];let te=0;for(let R=0;R<m.length;R++){const E=m[R],j=ht-E.x,it=Et-E.y,rt=At-E.z,ut=Math.abs(j)+Math.abs(it)+Math.abs(rt),yt=Math.max(0,1-ut/8);yt>te&&(te=yt)}const le=y===D.TORCH,Zt=le?1:te,bt=Math.min(1,.52+Zt*.48),vt=Bt*bt,Pt=vt,$t=vt*(le?.9:.93-(1-Zt)*.08),Xt=vt*(le?.6:.85-(1-Zt)*.15);s.push(Pt,$t,Xt)}const F=w.uvs[A.uvName],q=F%c,Y=Math.floor(F/c),et=q*d,O=1-(Y+1)*u,J=et+d,tt=O+u;let U=et,ot=O,at=J,ct=tt;if(I){const st=d/16,ht=u/16;U=et+7*st,at=et+9*st,A.uvName==="top"?(ct=tt-4*ht,ot=tt-6*ht):A.uvName==="bottom"?(ct=tt-14*ht,ot=tt-16*ht):(ct=tt-6*ht,ot=tt-16*ht)}r.push(U,ot,at,ot,at,ct,U,ct),o.push(a,a+1,a+2,a,a+2,a+3),a+=4}}}if(n.length===0)return this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null),this.isDirty=!1,null;const p=new Kn;return p.setAttribute("position",new an(n,3)),p.setAttribute("normal",new an(i,3)),p.setAttribute("color",new an(s,3)),p.setAttribute("uv",new an(r,2)),p.setIndex(o),this.mesh?(this.mesh.geometry.dispose(),this.mesh.geometry=p):(this.mesh=new Dt(p,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0),this.isDirty=!1,this.mesh}}function Pm(){const l=document.createElement("canvas"),t=16,e=4,n=7;l.width=t*e,l.height=t*n;const i=l.getContext("2d"),s=(bt,vt,Pt,$t,Xt,R)=>{const E=bt*t,j=vt*t;for(let it=0;it<t;it++)for(let rt=0;rt<t;rt++){const ut=(Math.random()-.5)*R,yt=Math.max(0,Math.min(255,Math.floor(Pt+ut))),ft=Math.max(0,Math.min(255,Math.floor($t+ut))),Q=Math.max(0,Math.min(255,Math.floor(Xt+ut)));i.fillStyle=`rgb(${yt}, ${ft}, ${Q})`,i.fillRect(E+it,j+rt,1,1)}};s(0,0,100,180,70,30),s(1,0,130,95,65,20),s(2,0,120,120,120,20),s(3,0,130,95,65,20);const r=3*t;for(let bt=0;bt<t;bt++){const vt=3+Math.floor(Math.random()*3);for(let Pt=0;Pt<vt;Pt++){const $t=(Math.random()-.5)*30,Xt=Math.max(0,Math.min(255,Math.floor(100+$t))),R=Math.max(0,Math.min(255,Math.floor(180+$t))),E=Math.max(0,Math.min(255,Math.floor(70+$t)));i.fillStyle=`rgb(${Xt}, ${R}, ${E})`,i.fillRect(r+bt,Pt,1,1)}}s(0,1,100,70,45,15);const o=0*t,a=1*t;for(let bt=0;bt<t;bt++)for(let vt=0;vt<t;vt++)(bt+vt*2)%5===0&&(i.fillStyle=`rgb(${70+Math.random()*10}, ${50+Math.random()*10}, ${30+Math.random()*10})`,i.fillRect(o+bt,a+vt,1,1));s(1,1,185,150,105,10);const c=1*t,h=1*t;i.fillStyle="rgb(115, 80, 50)";for(let bt=0;bt<t;bt++)for(let vt=0;vt<t;vt++){const Pt=bt-7.5,$t=vt-7.5,Xt=Math.sqrt(Pt*Pt+$t*$t);(Math.abs(Xt-3)<.6||Math.abs(Xt-6)<.6)&&i.fillRect(c+bt,h+vt,1,1)}s(2,1,35,115,30,20);const d=2*t,u=1*t;for(let bt=0;bt<30;bt++){const vt=Math.floor(Math.random()*t),Pt=Math.floor(Math.random()*t);i.fillStyle=`rgb(${15+Math.random()*10}, ${45+Math.random()*10}, ${10+Math.random()*10})`,i.fillRect(d+vt,u+Pt,1,1)}s(3,1,155,75,55,15);const m=3*t,g=1*t;i.fillStyle="rgb(205, 200, 195)",i.fillRect(m,g+4,t,1),i.fillRect(m,g+9,t,1),i.fillRect(m,g+14,t,1),i.fillRect(m+4,g,1,4),i.fillRect(m+12,g,1,4),i.fillRect(m+8,g+5,1,4),i.fillRect(m+4,g+10,1,4),i.fillRect(m+12,g+10,1,4),i.fillRect(m+8,g+15,1,1),s(0,2,220,205,150,30),s(1,2,190,145,85,12);const f=1*t,p=2*t;i.fillStyle="rgb(140, 100, 55)",i.fillRect(f,p+4,t,1),i.fillRect(f,p+8,t,1),i.fillRect(f,p+12,t,1),s(2,2,120,120,120,20);const _=2*t,v=2*t;i.fillStyle="rgb(40, 40, 40)",[[2,3],[3,3],[3,4],[8,8],[9,8],[9,9],[8,9],[11,2],[12,3],[4,12],[5,11],[5,12]].forEach(([bt,vt])=>{i.fillRect(_+bt,v+vt,1,1)});const y=3*t,w=2*t;i.fillStyle="rgba(0, 0, 0, 0)",i.clearRect(y,w,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(y+7,w+8,2,8),i.fillStyle="rgb(255, 120, 0)",i.fillRect(y+7,w+6,2,2),i.fillStyle="rgb(255, 230, 0)",i.fillRect(y+7,w+7,2,1),i.fillStyle="rgb(255, 240, 100)",i.fillRect(y+7,w+4,2,2),i.fillStyle="rgb(60, 40, 20)",i.fillRect(y+7,w+14,2,2);const S=0*t,C=3*t;i.clearRect(S,C,t,t),i.fillStyle="rgba(240, 248, 255, 0.8)",i.fillRect(S,C,t,1),i.fillRect(S,C+t-1,t,1),i.fillRect(S,C,1,t),i.fillRect(S+t-1,C,1,t),i.fillStyle="rgba(255, 255, 255, 0.6)",i.fillRect(S+3,C+3,1,1),i.fillRect(S+4,C+2,1,1),i.fillRect(S+2,C+4,1,1),i.fillRect(S+10,C+10,1,1),i.fillRect(S+11,C+9,1,1),i.fillRect(S+9,C+11,1,1);const b=1*t,A=3*t;i.clearRect(b,A,t,t),i.fillStyle="rgb(130, 85, 45)",i.fillRect(b,A,t,t),i.fillStyle="rgb(90, 55, 25)",i.fillRect(b,A,t,1),i.fillRect(b,A+t-1,t,1),i.fillRect(b,A,1,t),i.fillRect(b+t-1,A,1,t),i.fillRect(b+t/2-1,A,2,t),i.clearRect(b+2,A+2,4,5),i.clearRect(b+10,A+2,4,5),i.fillStyle="rgba(255, 255, 255, 0.4)",i.fillRect(b+2,A+2,4,1),i.fillRect(b+10,A+2,4,1),i.fillStyle="rgb(230, 190, 50)",i.fillRect(b+13,A+9,2,2),i.fillStyle="rgb(180, 140, 20)",i.fillRect(b+14,A+11,1,1);const P=2*t,k=3*t;i.clearRect(P,k,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(P+2,k+13,1,1),i.fillRect(P+3,k+12,1,1),i.fillRect(P+4,k+11,1,1),i.fillStyle="rgb(90, 60, 30)",i.fillRect(P+1,k+14,1,1),i.fillStyle="rgb(230, 190, 50)",i.fillRect(P+5,k+10,1,1),i.fillRect(P+3,k+11,1,1),i.fillRect(P+4,k+12,1,1),i.fillRect(P+5,k+12,1,1),i.fillRect(P+2,k+12,1,1),i.fillRect(P+3,k+13,1,1),i.fillStyle="rgb(120, 120, 120)",[[5,11],[6,10],[7,9],[8,8],[9,7],[10,6],[11,5],[12,4],[13,3]].forEach(([bt,vt])=>{i.fillRect(P+bt,k+vt,1,1)}),i.fillStyle="rgb(180, 180, 180)";const L=[[5,10],[6,9],[7,8],[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1]];L.forEach(([bt,vt])=>{i.fillRect(P+bt,k+vt,1,1)}),i.fillStyle="rgb(240, 240, 240)";const I=[[4,9],[5,8],[6,7],[7,6],[8,5],[9,4],[10,3],[11,2],[12,1],[13,0]];I.forEach(([bt,vt])=>{i.fillRect(P+bt,k+vt,1,1)}),s(0,4,190,145,85,12);const N=0*t,z=4*t;i.fillStyle="rgb(140, 100, 55)",i.fillRect(N,z+4,t,1),i.fillRect(N,z+8,t,1),i.fillRect(N,z+12,t,1);const X=1*t,F=4*t;i.fillStyle="rgb(255, 255, 255)",i.fillRect(X,F,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(X,F,t,1),i.fillRect(X,F+t-1,t,1),i.fillRect(X,F,1,t),i.fillRect(X+t-1,F,1,t),i.fillStyle="rgb(220, 220, 220)",i.fillRect(X+2,F+6,t-4,1),i.fillRect(X+2,F+10,t-4,1);const q=2*t,Y=4*t;i.fillStyle="rgb(200, 30, 30)",i.fillRect(q,Y,t,t),i.fillStyle="rgb(101, 67, 33)",i.fillRect(q,Y,t,1),i.fillRect(q,Y+t-1,t,1),i.fillRect(q,Y,1,t),i.fillRect(q+t-1,Y,1,t),s(3,4,120,115,110,15);const et=3*t,O=4*t;i.fillStyle="rgb(75, 75, 85)",i.fillRect(et+1,O+1,t-2,2),i.fillStyle="rgb(25, 20, 15)",i.fillRect(et+3,O+5,10,8),i.fillStyle="rgb(255, 120, 0)",i.fillRect(et+5,O+7,3,4),i.fillRect(et+8,O+8,3,3),i.fillStyle="rgb(255, 220, 0)",i.fillRect(et+6,O+8,2,2),s(0,5,160,115,65,12);const J=0*t,tt=5*t;i.fillStyle="rgb(100, 65, 30)",i.fillRect(J,tt,t,1),i.fillRect(J,tt+t-1,t,1),i.fillRect(J,tt,1,t),i.fillRect(J+t-1,tt,1,t),i.fillRect(J+1,tt+5,t-2,1),i.fillStyle="rgb(220, 180, 40)",i.fillRect(J+6,tt+2,4,3),i.fillStyle="rgb(160, 120, 20)",i.fillRect(J+7,tt+4,2,2),s(1,5,160,115,65,12);const U=1*t,ot=5*t;i.fillStyle="rgb(100, 65, 30)",i.fillRect(U,ot,t,1),i.fillRect(U,ot+t-1,t,1),i.fillRect(U,ot,1,t),i.fillRect(U+t-1,ot,1,t),i.fillRect(U+1,ot+5,t-2,1);const at=2*t,ct=5*t;s(2,5,40,100,200,20),i.fillStyle="rgba(20, 80, 220, 0.4)",i.fillRect(at,ct,t,t),i.fillStyle="rgba(255, 255, 255, 0.3)",i.fillRect(at+2,ct+3,4,1),i.fillRect(at+8,ct+7,5,1),i.fillRect(at+4,ct+12,3,1);const st=3*t,ht=5*t;i.clearRect(st,ht,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(st+2,ht+13,1,1),i.fillRect(st+3,ht+12,1,1),i.fillRect(st+4,ht+11,1,1),i.fillStyle="rgb(0, 136, 255)",i.fillRect(st+5,ht+10,1,1),i.fillRect(st+3,ht+11,1,1),i.fillRect(st+4,ht+12,1,1),i.fillRect(st+5,ht+12,1,1),i.fillRect(st+2,ht+12,1,1),i.fillRect(st+3,ht+13,1,1),i.fillStyle="rgb(0, 255, 255)",L.forEach(([bt,vt])=>{i.fillRect(st+bt,ht+vt,1,1)}),i.fillStyle="rgb(240, 255, 255)",I.forEach(([bt,vt])=>{i.fillRect(st+bt,ht+vt,1,1)});const Et=0*t,At=6*t;i.clearRect(Et,At,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(Et+7,At+6,2,8),i.fillStyle="rgb(85, 85, 85)",i.fillRect(Et+4,At+2,8,4),i.fillStyle="rgb(120, 120, 120)",i.fillRect(Et+4,At+2,8,1);const Bt=1*t,te=6*t;i.fillStyle="rgb(30, 30, 30)",i.fillRect(Bt,te,t,t);for(let bt=0;bt<t;bt++)for(let vt=0;vt<t;vt++)Math.random()>.5&&(i.fillStyle=Math.random()>.5?"rgb(15, 15, 15)":"rgb(45, 45, 45)",i.fillRect(Bt+bt,te+vt,1,1));const le=(bt,vt)=>{const Pt=bt%4,$t=Math.floor(bt/4),Xt=Pt*t,R=$t*t;i.fillStyle="rgb(120, 120, 120)",i.fillRect(Xt,R,t,t),i.fillStyle="rgb(100, 100, 100)",i.fillRect(Xt,R,t,t/2),i.fillStyle="rgb(140, 140, 140)",i.fillRect(Xt,R+t/2,t,t/2),i.fillStyle="rgb(90, 90, 90)";for(let j=0;j<5;j++)i.fillRect(Xt+j*2,R+j*2,2,2);i.fillStyle=vt,[[2,2],[10,3],[5,7],[12,9],[4,13],[10,14],[7,10]].forEach(([j,it])=>{i.fillRect(Xt+j,R+it,2,2)})};le(26,"rgb(240, 200, 180)"),le(27,"rgb(255, 215, 0)"),le(28,"rgb(0, 255, 255)");const Zt=new wm(l);return Zt.magFilter=xe,Zt.minFilter=xe,Zt.wrapS=Ge,Zt.wrapT=Ge,Zt}class Vs{permutation;constructor(t=0){this.permutation=new Array(512);const e=new Array(256);let n=t;for(let i=0;i<256;i++)n=(n*1103515245+12345)%2147483648,e[i]=i;for(let i=255;i>0;i--){n=(n*1103515245+12345)%2147483648;const s=n%(i+1),r=e[i];e[i]=e[s],e[s]=r}for(let i=0;i<512;i++)this.permutation[i]=e[i&255]}fade(t){return t*t*t*(t*(t*6-15)+10)}lerp(t,e,n){return e+t*(n-e)}grad(t,e,n){const i=t&15,s=i<8?e:n,r=i<4?n:i===12||i===14?e:0;return(i&1?-s:s)+(i&2?-r:r)}noise2D(t,e){const n=Math.floor(t)&255,i=Math.floor(e)&255;t-=Math.floor(t),e-=Math.floor(e);const s=this.fade(t),r=this.fade(e),o=this.permutation[n]+i,a=this.permutation[n+1]+i;return this.lerp(r,this.lerp(s,this.grad(this.permutation[o],t,e),this.grad(this.permutation[a],t-1,e)),this.lerp(s,this.grad(this.permutation[o+1],t,e-1),this.grad(this.permutation[a+1],t-1,e-1)))}fbm2D(t,e,n,i=.5,s=1){let r=0,o=s,a=1,c=0;for(let h=0;h<n;h++)r+=this.noise2D(t*o,e*o)*a,c+=a,a*=i,o*=2;return r/c}grad3(t,e,n,i){const s=t&15,r=s<8?e:n,o=s<4?n:s===12||s===14?e:i;return(s&1?-r:r)+(s&2?-o:o)}noise3D(t,e,n){const i=Math.floor(t)&255,s=Math.floor(e)&255,r=Math.floor(n)&255;t-=Math.floor(t),e-=Math.floor(e),n-=Math.floor(n);const o=this.fade(t),a=this.fade(e),c=this.fade(n),h=this.permutation[i]+s,d=this.permutation[h]+r,u=this.permutation[h+1]+r,m=this.permutation[i+1]+s,g=this.permutation[m]+r,f=this.permutation[m+1]+r;return this.lerp(c,this.lerp(a,this.lerp(o,this.grad3(this.permutation[d],t,e,n),this.grad3(this.permutation[g],t-1,e,n)),this.lerp(o,this.grad3(this.permutation[u],t,e-1,n),this.grad3(this.permutation[f],t-1,e-1,n))),this.lerp(a,this.lerp(o,this.grad3(this.permutation[d+1],t,e,n-1),this.grad3(this.permutation[g+1],t-1,e,n-1)),this.lerp(o,this.grad3(this.permutation[u+1],t,e-1,n-1),this.grad3(this.permutation[f+1],t-1,e-1,n-1))))}fbm3D(t,e,n,i,s=.5,r=1){let o=0,a=r,c=1,h=0;for(let d=0;d<i;d++)o+=this.noise3D(t*a,e*a,n*a)*c,h+=c,c*=s,a*=2;return o/h}}class Im{noise;tempNoise;humidNoise;caveNoise;constructor(t=12345){this.noise=new Vs(t),this.tempNoise=new Vs(t+100),this.humidNoise=new Vs(t+200),this.caveNoise=new Vs(t+300)}generateV1(t){const e=mt.CHUNK_SIZE,n=t.y*e;for(let i=0;i<e;i++)for(let s=0;s<e;s++)for(let r=0;r<e;r++){const o=n+r;let a=D.AIR;if(o<=-10)a=D.BEDROCK;else if(o<-4){const c=Math.sin(t.x*17.13+t.y*31.41+t.z*53.57+i*7.1+r*13.3+s*19.9)*43758.5453;a=c-Math.floor(c)<.05?D.COAL_ORE:D.STONE}else o<0?a=D.DIRT:o===0&&(a=D.GROUND);t.setBlock(i,r,s,a)}this.generateTrees(t,0)}generateV2(t){const e=mt.CHUNK_SIZE,n=t.x*e,i=t.y*e,s=t.z*e,r=-5;for(let o=0;o<e;o++)for(let a=0;a<e;a++){const c=n+o,h=s+a,d=this.noise.fbm2D(c,h,4,.5,.015),u=this.tempNoise.fbm2D(c,h,2,.5,.005),m=this.humidNoise.fbm2D(c,h,2,.5,.005),g=u>.1&&m<0,f=m>.15,p=Math.floor(d*40)-2;for(let _=0;_<e;_++){const v=i+_;let x=D.AIR;if(v<=-30)x=D.BEDROCK;else if(v<=p){let y=!1;if(v<p-5){const w=this.caveNoise.fbm3D(c,v,h,2,.5,.05);Math.abs(w)<.06&&(y=!0)}if(!y)if(v<p-3){x=D.STONE;const w=Math.sin(t.x*17.13+t.y*31.41+t.z*53.57+o*7.1+_*13.3+a*19.9)*43758.5453;if(w-Math.floor(w)<.06){const C=Math.sin(c*1.1+v*2.2+h*3.3)*1e3,b=C-Math.floor(C);v<-20&&b<.08?x=D.DIAMOND_ORE:v<-10&&b<.2?x=D.GOLD_ORE:v<0&&b<.5?x=D.IRON_ORE:x=D.COAL_ORE}}else v<p?x=g?D.SAND:D.DIRT:v===p&&(x=g?D.SAND:D.GROUND)}else v<=r&&(x=D.WATER);t.setBlock(o,_,a,x)}if(p>=i&&p<i+e&&!g&&p>=r){const _=f?.05:.01,v=p-i;this.tryGenerateTreeAt(t,o,v,a,c,h,_)}}}generateTrees(t,e){const n=mt.CHUNK_SIZE,i=t.y*n;if(e>=i&&e<i+n){const s=e-i;for(let r=2;r<n-2;r++)for(let o=2;o<n-2;o++)this.tryGenerateTreeAt(t,r,s,o,t.x*n+r,t.z*n+o)}}tryGenerateTreeAt(t,e,n,i,s,r,o=.015){if(e<2||e>=mt.CHUNK_SIZE-2||i<2||i>=mt.CHUNK_SIZE-2||n+5>=mt.CHUNK_SIZE)return;const a=Math.sin(s*12.9898+r*78.233)*43758.5453;if(a-Math.floor(a)<o){const h=n+1;t.setBlock(e,h,i,D.WOOD),t.setBlock(e,h+1,i,D.WOOD),t.setBlock(e,h+2,i,D.WOOD);const d=h+2;t.setBlock(e+1,d,i,D.LEAVES),t.setBlock(e-1,d,i,D.LEAVES),t.setBlock(e,d,i+1,D.LEAVES),t.setBlock(e,d,i-1,D.LEAVES);for(let u=-1;u<=1;u++)for(let m=-1;m<=1;m++)(u!==0||m!==0)&&t.setBlock(e+u,d+1,i+m,D.LEAVES);t.setBlock(e,d+1,i,D.LEAVES),t.setBlock(e,d+2,i,D.LEAVES),t.setBlock(e+1,d+2,i,D.LEAVES),t.setBlock(e-1,d+2,i,D.LEAVES),t.setBlock(e,d+2,i+1,D.LEAVES),t.setBlock(e,d+2,i-1,D.LEAVES)}}}let Nm=class{chunks=new Map;scene;material;modifiedBlocks=new Map;doorOrientations=new Map;chunkVersions=new Map;terrainGenerator;constructor(t){this.scene=t;const e=Pm(),n=new ve({map:e,vertexColors:!0,roughness:.85,metalness:.05,alphaTest:.5,side:zn});n.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("vec3 totalEmissiveRadiance = emissive;",`
        // 頂点カラーから松明光成分（最低輝度0.52を超える部分）を抽出し、自己発光として加算する
        vec3 torchLight = max(vec3(0.0), vColor - vec3(0.52));
        // 温かみのあるオレンジ色の自己発光を1.5倍で加算（夜間でも綺麗に光る）
        vec3 totalEmissiveRadiance = emissive + torchLight * 1.5;
        `)},this.material=n,this.terrainGenerator=new Im}getChunkKey(t,e,n){return`${t},${e},${n}`}getChunk(t,e,n){return this.chunks.get(this.getChunkKey(t,e,n))}getBlock(t,e,n){const i=Math.floor(t/mt.CHUNK_SIZE),s=Math.floor(e/mt.CHUNK_SIZE),r=Math.floor(n/mt.CHUNK_SIZE),o=this.getChunk(i,s,r);if(!o)return D.AIR;const a=(t%mt.CHUNK_SIZE+mt.CHUNK_SIZE)%mt.CHUNK_SIZE,c=(e%mt.CHUNK_SIZE+mt.CHUNK_SIZE)%mt.CHUNK_SIZE,h=(n%mt.CHUNK_SIZE+mt.CHUNK_SIZE)%mt.CHUNK_SIZE;return o.getBlock(a,c,h)}setBlock(t,e,n,i){const s=Math.floor(t/mt.CHUNK_SIZE),r=Math.floor(e/mt.CHUNK_SIZE),o=Math.floor(n/mt.CHUNK_SIZE),a=this.getChunkKey(s,r,o),c=mt.CHUNK_SIZE,h=(t%c+c)%c,d=(e%c+c)%c,u=(n%c+c)%c,m=h+d*c+u*c*c;let g=this.modifiedBlocks.get(a);g||(g=new Map,this.modifiedBlocks.set(a,g)),g.set(m,i);let f=this.getChunk(s,r,o);f||(f=new Wa(s,r,o),this.chunks.set(a,f)),f.setBlock(h,d,u,i),this.updateChunkMesh(s,r,o),h===0&&this.updateChunkMesh(s-1,r,o),h===mt.CHUNK_SIZE-1&&this.updateChunkMesh(s+1,r,o),d===0&&this.updateChunkMesh(s,r-1,o),d===mt.CHUNK_SIZE-1&&this.updateChunkMesh(s,r+1,o),u===0&&this.updateChunkMesh(s,r,o-1),u===mt.CHUNK_SIZE-1&&this.updateChunkMesh(s,r,o+1)}setDoorOrientation(t,e,n,i){this.doorOrientations.set(`${t},${e},${n}`,i)}getDoorOrientation(t,e,n){return this.doorOrientations.get(`${t},${e},${n}`)??"NS"}removeDoorOrientation(t,e,n){this.doorOrientations.delete(`${t},${e},${n}`)}updateChunkMesh(t,e,n){const i=this.getChunk(t,e,n);if(!i)return;const s=i.mesh,r=i.generateMesh(this,this.material);r&&!s?this.scene.add(r):!r&&s&&this.scene.remove(s)}generateWorldAround(t,e){const n=Math.floor(t/mt.CHUNK_SIZE),i=Math.floor(e/mt.CHUNK_SIZE),s=mt.RENDER_DISTANCE,r=new Set;for(let a=n-s;a<=n+s;a++)for(let c=i-s;c<=i+s;c++)for(let h=-1;h<=1;h++){const d=this.getChunkKey(a,h,c);if(r.add(d),!this.chunks.has(d)){const u=new Wa(a,h,c);this.generateChunkTerrain(u),this.chunks.set(d,u)}}for(const[a,c]of this.chunks.entries())r.has(a)||(c.mesh&&(this.scene.remove(c.mesh),c.mesh.geometry.dispose(),c.mesh=null),this.chunks.delete(a));for(let a=n-s;a<=n+s;a++)for(let c=i-s;c<=i+s;c++)for(let h=-1;h<=1;h++)this.updateChunkMesh(a,h,c);const o=document.getElementById("chunks-display");o&&(o.textContent=this.chunks.size.toString())}generateChunkTerrain(t){const e=this.getChunkKey(t.x,t.y,t.z);let n=this.chunkVersions.get(e);const i=6;Math.abs(t.x)<=i&&Math.abs(t.z)<=i&&(n=1,this.chunkVersions.set(e,1)),n===void 0&&(this.modifiedBlocks.has(e)?n=1:n=2,this.chunkVersions.set(e,n)),n===1?this.terrainGenerator.generateV1(t):this.terrainGenerator.generateV2(t);const s=this.modifiedBlocks.get(e);if(s){const r=mt.CHUNK_SIZE;for(const[o,a]of s.entries()){const c=o%r,h=Math.floor(o%(r*r)/r),d=Math.floor(o/(r*r));t.setBlock(c,h,d,a)}}}getChunkMeshes(){const t=[];for(const e of this.chunks.values())e.mesh&&t.push(e.mesh);return t}getChunksCount(){return this.chunks.size}getModifiedBlocksData(){const t={};for(const[i,s]of this.modifiedBlocks.entries()){if(s.size===0)continue;const r={};for(const[o,a]of s.entries())r[o.toString()]=a;t[i]=r}const e={};for(const[i,s]of this.doorOrientations.entries())e[i]=s;const n={};for(const[i,s]of this.chunkVersions.entries())n[i]=s;return{blocks:t,doorOrientations:e,chunkVersions:n}}setModifiedBlocksData(t){if(this.modifiedBlocks.clear(),this.doorOrientations.clear(),this.chunkVersions.clear(),!t)return;const e=t.blocks??t;for(const n of Object.keys(e)){const i=new Map,s=e[n];for(const r of Object.keys(s)){const o=parseInt(r,10),a=s[r];i.set(o,a)}this.modifiedBlocks.set(n,i)}if(t.doorOrientations)for(const[n,i]of Object.entries(t.doorOrientations))this.doorOrientations.set(n,i);if(t.chunkVersions)for(const[n,i]of Object.entries(t.chunkVersions))this.chunkVersions.set(n,i)}clearAndRebuild(t,e){for(const n of this.chunks.values())n.mesh&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh=null);this.chunks.clear(),this.generateWorldAround(t,e)}};class zm{keys={};justPressedKeys={};mouseDelta={x:0,y:0};isLocked=!1;isActionActive(t){const e=_n.getConfig();switch(t){case"forward":return!!this.keys[e.keyForward];case"backward":return!!this.keys[e.keyBackward];case"left":return!!this.keys[e.keyLeft];case"right":return!!this.keys[e.keyRight];case"jump":return!!this.keys[e.keyJump];default:return!1}}targetElement;constructor(t){this.targetElement=t,window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),document.addEventListener("mousemove",this.onMouseMove.bind(this)),document.addEventListener("pointerlockchange",this.onPointerLockChange.bind(this))}requestLock(){this.isLocked||this.targetElement.requestPointerLock()}onKeyDown(t){const e=t.code;e==="Tab"&&t.preventDefault(),this.isLocked&&(e==="F5"||e==="KeyQ"||e==="KeyE")&&(e==="KeyE"||e==="F5")&&t.preventDefault(),this.keys[e]||(this.justPressedKeys[e]=!0),this.keys[e]=!0}onKeyUp(t){const e=t.code;this.keys[e]=!1,this.justPressedKeys[e]=!1}onMouseMove(t){this.isLocked&&(this.mouseDelta.x+=t.movementX,this.mouseDelta.y+=t.movementY)}onPointerLockChange(){const t=document.getElementById("menu-overlay"),e=document.getElementById("crosshair"),n=document.getElementById("inventory-modal");document.pointerLockElement===this.targetElement?(this.isLocked=!0,t&&(t.style.display="none"),e&&(e.style.display="block")):(this.isLocked=!1,this.clearKeys(),n&&n.style.display==="flex"||t&&(t.style.display="flex",t.style.opacity="1"),e&&(e.style.display="none"))}clearKeys(){this.keys={},this.justPressedKeys={}}consumeJustPressed(t){return this.justPressedKeys[t]?(this.justPressedKeys[t]=!1,!0):!1}consumeMouseDelta(){const t={...this.mouseDelta};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}}class ln{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new ln);const n=this.elements,i=t.elements,s=e.elements,r=n[0],o=n[1],a=n[2],c=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],f=i[0],p=i[1],_=i[2],v=i[3],x=i[4],y=i[5],w=i[6],S=i[7],C=i[8];return s[0]=r*f+o*v+a*w,s[1]=r*p+o*x+a*S,s[2]=r*_+o*y+a*C,s[3]=c*f+h*v+d*w,s[4]=c*p+h*x+d*S,s[5]=c*_+h*y+d*C,s[6]=u*f+m*v+g*w,s[7]=u*p+m*x+g*S,s[8]=u*_+m*y+g*C,e}scale(t,e){e===void 0&&(e=new ln);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new M);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let a=3;const c=a;let h;const d=4;let u;do{if(r=c-a,s[r+i*r]===0){for(o=r+1;o<c;o++)if(s[r+i*o]!==0){h=d;do u=d-h,s[u+i*r]+=s[u+i*o];while(--h);break}}if(s[r+i*r]!==0)for(o=r+1;o<c;o++){const m=s[r+i*o]/s[r+i*r];h=d;do u=d-h,s[u+i*o]=u<=r?0:s[u+i*o]-s[u+i*r]*m;while(--h)}}while(--a);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new ln);const e=3,n=6,i=Om;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const a=o;let c;const h=n;let d;do{if(s=a-o,i[s+n*s]===0){for(r=s+1;r<a;r++)if(i[s+n*r]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<a;r++){const u=i[s+n*r]/i[s+n*s];c=h;do d=h-c,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*u;while(--c)}}while(--o);s=2;do{r=s-1;do{const u=i[s+n*r]/i[s+n*s];c=n;do d=n-c,i[d+n*r]=i[d+n*r]-i[d+n*s]*u;while(--c)}while(r--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{r=2;do{if(d=i[e+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,d)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,o=n+n,a=i+i,c=e*r,h=e*o,d=e*a,u=n*o,m=n*a,g=i*a,f=s*r,p=s*o,_=s*a,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-_,v[3*0+2]=d+p,v[3*1+0]=h+_,v[3*1+1]=1-(c+g),v[3*1+2]=m-f,v[3*2+0]=d-p,v[3*2+1]=m+f,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new ln);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Om=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,a=this.z;return e.x=o*s-a*i,e.y=a*n-r*s,e.z=r*i-o*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new ln([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new M);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i)}scale(t,e){e===void 0&&(e=new M);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new M),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Bm,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=Fm;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(qa),qa.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const Bm=new M,Fm=new M,qa=new M;class We{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(t[0]),o&&o.vmult(s,s),r.copy(s);for(let a=1;a<t.length;a++){let c=t[a];o&&(o.vmult(c,Xa),c=Xa),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new We().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,a=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&o&&a}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,o,a){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),o.set(c.x,c.y,h.z),a.copy(h)}toLocalFrame(t,e){const n=Ya,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,a,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Ya,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,a,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,o=(this.lowerBound.x-n.x)*i,a=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,m=Math.max(Math.max(Math.min(o,a),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,a),Math.max(c,h)),Math.max(d,u));return!(g<0||m>g)}}const Xa=new M,Ya=[new M,new M,new M,new M,new M,new M,new M,new M];class ja{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Wl{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class ae{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=km,i=Um;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new ae);const n=this.x,i=this.y,s=this.z,r=this.w,o=t.x,a=t.y,c=t.z,h=t.w;return e.x=n*h+r*o+i*c-s*a,e.y=i*h+r*a+s*o-n*c,e.z=s*h+r*c+n*a-i*o,e.w=r*h-n*o-i*a-s*c,e}inverse(t){t===void 0&&(t=new ae);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new ae),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,a=this.z,c=this.w,h=c*n+o*s-a*i,d=c*i+a*n-r*s,u=c*s+r*i-o*n,m=-r*n-o*i-a*s;return e.x=h*c+m*-r+d*-a-u*-o,e.y=d*c+m*-o+u*-r-h*-a,e.z=u*c+m*-a+h*-o-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,o=this.y,a=this.z,c=this.w;switch(e){case"YZX":const h=r*o+a*c;if(h>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const d=r*r,u=o*o,m=a*a;n=Math.atan2(2*o*c-2*r*a,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*r*c-2*o*a,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(n/2),a=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=a*r*o+s*c*h,this.y=s*c*o-a*r*h,this.z=s*r*h+a*c*o,this.w=s*r*o-a*c*h):i==="YXZ"?(this.x=a*r*o+s*c*h,this.y=s*c*o-a*r*h,this.z=s*r*h-a*c*o,this.w=s*r*o+a*c*h):i==="ZXY"?(this.x=a*r*o-s*c*h,this.y=s*c*o+a*r*h,this.z=s*r*h+a*c*o,this.w=s*r*o-a*c*h):i==="ZYX"?(this.x=a*r*o-s*c*h,this.y=s*c*o+a*r*h,this.z=s*r*h-a*c*o,this.w=s*r*o+a*c*h):i==="YZX"?(this.x=a*r*o+s*c*h,this.y=s*c*o+a*r*h,this.z=s*r*h-a*c*o,this.w=s*r*o-a*c*h):i==="XZY"&&(this.x=a*r*o-s*c*h,this.y=s*c*o-a*r*h,this.z=s*r*h+a*c*o,this.w=s*r*o+a*c*h),this}clone(){return new ae(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new ae);const i=this.x,s=this.y,r=this.z,o=this.w;let a=t.x,c=t.y,h=t.z,d=t.w,u,m,g,f,p;return m=i*a+s*c+r*h+o*d,m<0&&(m=-m,a=-a,c=-c,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),f=Math.sin((1-e)*u)/g,p=Math.sin(e*u)/g):(f=1-e,p=e),n.x=f*i+p*a,n.y=f*s+p*c,n.z=f*r+p*h,n.w=f*o+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new ae);const s=t.x*n.x,r=t.y*n.y,o=t.z*n.z,a=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+r*h-o*c),i.y+=u*(r*d+o*a-s*h),i.z+=u*(o*d+s*c-r*a),i.w+=u*(-s*a-r*c-o*h),i}}const km=new M,Um=new M,Gm={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class gt{constructor(t){t===void 0&&(t={}),this.id=gt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}gt.idCounter=0;gt.types=Gm;class Wt{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new ae,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Wt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Wt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),n.vsub(t,i),e.conjugate(Ka),Ka.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new M),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Ka=new ae;class fs extends gt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:gt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==t.length;s++){const r=t[s],o=r.length;for(let a=0;a!==o;a++){const c=(a+1)%o;e[r[a]].vsub(e[r[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];fs.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new M,r=new M;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,o,a,c){const h=new M;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const f=h.dot(r);f>u&&(u=f,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const f=n.vertices[n.faces[d][g]],p=new M;p.copy(f),s.vmult(p,p),i.vadd(p,p),m.push(p)}d>=0&&this.clipFaceAgainstHull(r,t,e,m,o,a,c)}findSeparatingAxis(t,e,n,i,s,r,o,a){const c=new M,h=new M,d=new M,u=new M,m=new M,g=new M;let f=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let _=0;_!==p.uniqueAxes.length;_++){n.vmult(p.uniqueAxes[_],c);const v=p.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<f&&(f=v,r.copy(c))}else{const _=o?o.length:p.faces.length;for(let v=0;v<_;v++){const x=o?o[v]:v;c.copy(p.faceNormals[x]),n.vmult(c,c);const y=p.testSepAxis(c,t,e,n,i,s);if(y===!1)return!1;y<f&&(f=y,r.copy(c))}}if(t.uniqueAxes)for(let _=0;_!==t.uniqueAxes.length;_++){s.vmult(t.uniqueAxes[_],h);const v=p.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<f&&(f=v,r.copy(h))}else{const _=a?a.length:t.faces.length;for(let v=0;v<_;v++){const x=a?a[v]:v;h.copy(t.faceNormals[x]),s.vmult(h,h);const y=p.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<f&&(f=y,r.copy(h))}}for(let _=0;_!==p.uniqueEdges.length;_++){n.vmult(p.uniqueEdges[_],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],m),u.cross(m,g),!g.almostZero()){g.normalize();const x=p.testSepAxis(g,t,e,n,i,s);if(x===!1)return!1;x<f&&(f=x,r.copy(g))}}return i.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const o=this;fs.project(o,t,n,i,Gr),fs.project(e,t,s,r,Vr);const a=Gr[0],c=Gr[1],h=Vr[0],d=Vr[1];if(a<d||h<c)return!1;const u=a-d,m=h-c;return u<m?u:m}calculateLocalInertia(t,e){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*o*2*o),e.y=1/12*t*(2*s*2*s+2*o*2*o),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,o){const a=new M,c=new M,h=new M,d=new M,u=new M,m=new M,g=new M,f=new M,p=this,_=[],v=i,x=_;let y=-1,w=Number.MAX_VALUE;for(let P=0;P<p.faces.length;P++){a.copy(p.faceNormals[P]),n.vmult(a,a);const k=a.dot(t);k<w&&(w=k,y=P)}if(y<0)return;const S=p.faces[y];S.connectedFaces=[];for(let P=0;P<p.faces.length;P++)for(let k=0;k<p.faces[P].length;k++)S.indexOf(p.faces[P][k])!==-1&&P!==y&&S.connectedFaces.indexOf(P)===-1&&S.connectedFaces.push(P);const C=S.length;for(let P=0;P<C;P++){const k=p.vertices[S[P]],G=p.vertices[S[(P+1)%C]];k.vsub(G,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(k),n.vmult(m,m),e.vadd(m,m);const L=S.connectedFaces[P];g.copy(this.faceNormals[L]);const I=this.getPlaneConstantOfFace(L);f.copy(g),n.vmult(f,f);const N=I-f.dot(e);for(this.clipFaceAgainstPlane(v,x,f,N);v.length;)v.shift();for(;x.length;)v.push(x.shift())}g.copy(this.faceNormals[y]);const b=this.getPlaneConstantOfFace(y);f.copy(g),n.vmult(f,f);const A=b-f.dot(e);for(let P=0;P<v.length;P++){let k=f.dot(v[P])+A;if(k<=s&&(console.log(`clamped: depth=${k} to minDist=${s}`),k=s),k<=r){const G=v[P];if(k<=1e-6){const L={point:G,normal:f,depth:k};o.push(L)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const o=t.length;if(o<2)return e;let a=t[t.length-1],c=t[0];s=n.dot(a)+i;for(let h=0;h<o;h++){if(c=t[h],r=n.dot(c)+i,s<0)if(r<0){const d=new M;d.copy(c),e.push(d)}else{const d=new M;a.lerp(c,s/(s-r),d),e.push(d)}else if(r<0){const d=new M;a.lerp(c,s/(s-r),d),e.push(d),e.push(c)}a=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,o,a,c,h,d,u=new M;for(let m=0;m<s.length;m++){u.copy(s[m]),e.vmult(u,u),t.vadd(u,u);const g=u;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(a===void 0||g.z<a)&&(a=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,o,a),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new M;this.getAveragePointLocal(s);for(let r=0;r<this.faces.length;r++){let o=i[r];const a=e[n[r][0]],c=new M;t.vsub(a,c);const h=o.dot(c),d=new M;s.vsub(a,d);const u=o.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const r=t.vertices.length,o=Vm;let a=0,c=0;const h=Hm,d=t.vertices;h.setZero(),Wt.vectorToLocalFrame(n,i,e,o),Wt.pointToLocalFrame(n,i,h,h);const u=h.dot(o);c=a=d[0].dot(o);for(let m=1;m<r;m++){const g=d[m].dot(o);g>a&&(a=g),g<c&&(c=g)}if(c-=u,a-=u,c>a){const m=c;c=a,a=m}s[0]=a,s[1]=c}}const Gr=[],Vr=[];new M;const Vm=new M,Hm=new M;class Yn extends gt{constructor(t){super({type:gt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new fs({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),Yn.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)Hn.set(s[r][0],s[r][1],s[r][2]),e.vmult(Hn,Hn),t.vadd(Hn,Hn),n(Hn.x,Hn.y,Hn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;fn[0].set(s.x,s.y,s.z),fn[1].set(-s.x,s.y,s.z),fn[2].set(-s.x,-s.y,s.z),fn[3].set(-s.x,-s.y,-s.z),fn[4].set(s.x,-s.y,-s.z),fn[5].set(s.x,s.y,-s.z),fn[6].set(-s.x,s.y,-s.z),fn[7].set(s.x,-s.y,s.z);const r=fn[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const a=fn[o];e.vmult(a,a),t.vadd(a,a);const c=a.x,h=a.y,d=a.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Hn=new M,fn=[new M,new M,new M,new M,new M,new M,new M,new M],xo={DYNAMIC:1,STATIC:2,KINEMATIC:4},yo={AWAKE:0,SLEEPY:1,SLEEPING:2};class dt extends Wl{constructor(t){t===void 0&&(t={}),super(),this.id=dt.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?dt.STATIC:dt.DYNAMIC,typeof t.type==typeof dt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=dt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new ae,this.initQuaternion=new ae,this.previousQuaternion=new ae,this.interpolatedQuaternion=new ae,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new ln,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new ln,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new We,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=dt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===dt.SLEEPING&&this.dispatchEvent(dt.wakeupEvent)}sleep(){this.sleepState=dt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===dt.AWAKE&&n<i?(this.sleepState=dt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(dt.sleepyEvent)):e===dt.SLEEPY&&n>i?this.wakeUp():e===dt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(dt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===dt.SLEEPING||this.type===dt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new M,s=new ae;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const o=e[s].length(),a=r.boundingSphereRadius;o+a>i&&(i=o+a)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Wm,r=qm,o=this.quaternion,a=this.aabb,c=Xm;for(let h=0;h!==i;h++){const d=t[h];o.vmult(e[h],s),s.vadd(this.position,s),o.mult(n[h],r),d.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),h===0?a.copy(c):a.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Ym,i=jm;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==dt.DYNAMIC)return;this.sleepState===dt.SLEEPING&&this.wakeUp();const n=Km;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==dt.DYNAMIC)return;const n=Zm,i=$m;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===dt.DYNAMIC&&(this.sleepState===dt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==dt.DYNAMIC)return;this.sleepState===dt.SLEEPING&&this.wakeUp();const n=e,i=Jm;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Qm;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==dt.DYNAMIC)return;const n=tg,i=eg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=ng;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Yn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===dt.DYNAMIC||this.type===dt.KINEMATIC)||this.sleepState===dt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,a=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*t;i.x+=o.x*m*u.x,i.y+=o.y*m*u.y,i.z+=o.z*m*u.z;const g=d.elements,f=this.angularFactor,p=a.x*f.x,_=a.y*f.y,v=a.z*f.z;s.x+=t*(g[0]*p+g[1]*_+g[2]*v),s.y+=t*(g[3]*p+g[4]*_+g[5]*v),s.z+=t*(g[6]*p+g[7]*_+g[8]*v),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}dt.idCounter=0;dt.COLLIDE_EVENT_NAME="collide";dt.DYNAMIC=xo.DYNAMIC;dt.STATIC=xo.STATIC;dt.KINEMATIC=xo.KINEMATIC;dt.AWAKE=yo.AWAKE;dt.SLEEPY=yo.SLEEPY;dt.SLEEPING=yo.SLEEPING;dt.wakeupEvent={type:"wakeup"};dt.sleepyEvent={type:"sleepy"};dt.sleepEvent={type:"sleep"};const Wm=new M,qm=new ae,Xm=new We,Ym=new ln,jm=new ln;new ln;const Km=new M,Zm=new M,$m=new M,Jm=new M,Qm=new M,tg=new M,eg=new M,ng=new M;class ql{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&dt.STATIC||t.sleepState===dt.SLEEPING)&&(e.type&dt.STATIC||e.sleepState===dt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=ig;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=sg,i=rg,s=og,r=t.length;for(let o=0;o!==r;o++)i[o]=t[o],s[o]=e[o];t.length=0,e.length=0;for(let o=0;o!==r;o++){const a=i[o].id,c=s[o].id,h=a<c?`${a},${c}`:`${c},${a}`;n[h]=o,n.keys.push(h)}for(let o=0;o!==n.keys.length;o++){const a=n.keys.pop(),c=n[a];t.push(i[c]),e.push(s[c]),delete n[a]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new M;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const ig=new M;new M;new ae;new M;const sg={keys:[]},rg=[],og=[];new M;new M;new M;class ag extends ql{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,o;for(let a=0;a!==s;a++)for(let c=0;c!==a;c++)r=i[a],o=i[c],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Qs{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let Xl,Yl,jl,Kl,Zl,$l,Jl;const bo={CLOSEST:1,ANY:2,ALL:4};Xl=gt.types.SPHERE;Yl=gt.types.PLANE;jl=gt.types.BOX;Kl=gt.types.CYLINDER;Zl=gt.types.CONVEXPOLYHEDRON;$l=gt.types.HEIGHTFIELD;Jl=gt.types.TRIMESH;class oe{get[Xl](){return this._intersectSphere}get[Yl](){return this._intersectPlane}get[jl](){return this._intersectBox}get[Kl](){return this._intersectConvex}get[Zl](){return this._intersectConvex}get[$l](){return this._intersectHeightfield}get[Jl](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=oe.ANY,this.result=new Qs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||oe.ANY,this.result=e.result||new Qs,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Za),Hr.length=0,t.broadphase.aabbQuery(t,Za,Hr),this.intersectBodies(Hr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=lg,s=cg;for(let r=0,o=t.shapes.length;r<o;r++){const a=t.shapes[r];if(!(n&&!a.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(a,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(wg(s,this.direction,n)>t.boundingSphereRadius)return;const o=this[t.type];o&&o.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,o=this.to,a=this.direction,c=new M(0,0,1);e.vmult(c,c);const h=new M;r.vsub(n,h);const d=h.dot(c);o.vsub(n,h);const u=h.dot(c);if(d*u>0||r.distanceTo(o)<d)return;const m=c.dot(a);if(Math.abs(m)<this.precision)return;const g=new M,f=new M,p=new M;r.vsub(n,g);const _=-c.dot(g)/m;a.scale(_,f),r.vadd(f,p),this.reportIntersection(c,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=hg;r.from.copy(this.from),r.to.copy(this.to),Wt.pointToLocalFrame(n,e,r.from,r.from),Wt.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const o=ug;let a,c,h,d;a=c=0,h=d=t.data.length-1;const u=new We;r.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),a=Math.max(a,o[0]),c=Math.max(c,o[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),h=Math.min(h,o[0]+1),d=Math.min(d,o[1]+1);for(let m=a;m<h;m++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,u),!!u.overlapsRay(r)){if(t.getConvexTrianglePillar(m,g,!1),Wt.pointToWorldFrame(n,e,t.pillarOffset,Hs),this._intersectConvex(t.pillarConvex,e,Hs,i,s,$a),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Wt.pointToWorldFrame(n,e,t.pillarOffset,Hs),this._intersectConvex(t.pillarConvex,e,Hs,i,s,$a)}}}_intersectSphere(t,e,n,i,s){const r=this.from,o=this.to,a=t.radius,c=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,h=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-a**2,u=h**2-4*c*d,m=dg,g=fg;if(!(u<0))if(u===0)r.lerp(o,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const f=(-h-Math.sqrt(u))/(2*c),p=(-h+Math.sqrt(u))/(2*c);if(f>=0&&f<=1&&(r.lerp(o,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(r.lerp(o,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const o=pg,a=Ja,c=r&&r.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,m=this.direction,g=this.from,f=this.to,p=g.distanceTo(f),_=c?c.length:h.length,v=this.result;for(let x=0;!v.shouldStop&&x<_;x++){const y=c?c[x]:x,w=h[y],S=u[y],C=e,b=n;a.copy(d[w[0]]),C.vmult(a,a),a.vadd(b,a),a.vsub(g,a),C.vmult(S,o);const A=m.dot(o);if(Math.abs(A)<this.precision)continue;const P=o.dot(a)/A;if(!(P<0)){m.scale(P,De),De.vadd(g,De),sn.copy(d[w[0]]),C.vmult(sn,sn),b.vadd(sn,sn);for(let k=1;!v.shouldStop&&k<w.length-1;k++){pn.copy(d[w[k]]),mn.copy(d[w[k+1]]),C.vmult(pn,pn),C.vmult(mn,mn),b.vadd(pn,pn),b.vadd(mn,mn);const G=De.distanceTo(g);!(oe.pointInTriangle(De,sn,pn,mn)||oe.pointInTriangle(De,pn,sn,mn))||G>p||this.reportIntersection(o,De,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,r){const o=mg,a=bg,c=Mg,h=Ja,d=gg,u=vg,m=_g,g=yg,f=xg,p=t.indices;t.vertices;const _=this.from,v=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(e),Wt.vectorToLocalFrame(n,e,x,d),Wt.pointToLocalFrame(n,e,_,u),Wt.pointToLocalFrame(n,e,v,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,m.vsub(u,d),d.normalize();const y=u.distanceSquared(m);t.tree.rayQuery(this,c,a);for(let w=0,S=a.length;!this.result.shouldStop&&w!==S;w++){const C=a[w];t.getNormal(C,o),t.getVertex(p[C*3],sn),sn.vsub(u,h);const b=d.dot(o),A=o.dot(h)/b;if(A<0)continue;d.scale(A,De),De.vadd(u,De),t.getVertex(p[C*3+1],pn),t.getVertex(p[C*3+2],mn);const P=De.distanceSquared(u);!(oe.pointInTriangle(De,pn,sn,mn)||oe.pointInTriangle(De,sn,pn,mn))||P>y||(Wt.vectorToWorldFrame(e,o,f),Wt.pointToWorldFrame(n,e,De,g),this.reportIntersection(f,g,s,i,C))}a.length=0}reportIntersection(t,e,n,i,s){const r=this.from,o=this.to,a=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case oe.ALL:this.hasHit=!0,c.set(r,o,t,e,n,i,a),c.hasHit=!0,this.callback(c);break;case oe.CLOSEST:(a<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,a));break;case oe.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,a),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,li),n.vsub(e,is),t.vsub(e,Wr);const s=li.dot(li),r=li.dot(is),o=li.dot(Wr),a=is.dot(is),c=is.dot(Wr);let h,d;return(h=a*o-r*c)>=0&&(d=s*c-r*o)>=0&&h+d<s*a-r*r}}oe.CLOSEST=bo.CLOSEST;oe.ANY=bo.ANY;oe.ALL=bo.ALL;const Za=new We,Hr=[],is=new M,Wr=new M,lg=new M,cg=new ae,De=new M,sn=new M,pn=new M,mn=new M;new M;new Qs;const $a={faceList:[0]},Hs=new M,hg=new oe,ug=[],dg=new M,fg=new M,pg=new M;new M;new M;const Ja=new M,mg=new M,gg=new M,vg=new M,_g=new M,xg=new M,yg=new M;new We;const bg=[],Mg=new Wt,li=new M,Ws=new M;function wg(l,t,e){e.vsub(l,li);const n=li.dot(t);return t.scale(n,Ws),Ws.vadd(l,Ws),e.distanceTo(Ws)}class Oi extends ql{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const r=t.boundingRadius,o=e.boundingRadius,a=i+r;return s-o<a}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,r=this.axisIndex;let o,a;for(this.dirty&&(this.sortList(),this.dirty=!1),o=0;o!==s;o++){const c=i[o];for(a=o+1;a<s;a++){const h=i[a];if(this.needBroadphaseCollision(c,h)){if(!Oi.checkBounds(c,h,r))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Oi.insertionSortX(t):e===1?Oi.insertionSortY(t):e===2&&Oi.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,r=0;const o=this.axisList,a=o.length,c=1/a;for(let m=0;m!==a;m++){const g=o[m],f=g.position.x;t+=f,e+=f*f;const p=g.position.y;n+=p,i+=p*p;const _=g.position.z;s+=_,r+=_*_}const h=e-t*t*c,d=i-n*n*c,u=r-s*s*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const r=this.axisList;e.lowerBound[s],e.upperBound[s];for(let o=0;o<r.length;o++){const a=r[o];a.aabbNeedsUpdate&&a.updateAABB(),a.aabb.overlaps(e)&&n.push(a)}return n}}class Sg{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Qa{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Ms{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ms.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Qa,this.jacobianElementB=new Qa,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,a=i.angularVelocity;return t.multiplyVectors(s,o)+e.multiplyVectors(r,a)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,a=i.wlambda;return t.multiplyVectors(s,o)+e.multiplyVectors(r,a)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,a=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,tl),o.scale(h,el),n.invInertiaWorldSolve.vmult(r,nl),i.invInertiaWorldSolve.vmult(a,il),t.multiplyVectors(tl,nl)+e.multiplyVectors(el,il)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,a=i.invInertiaWorldSolve;let c=s+r;return o.vmult(t.rotational,qs),c+=qs.dot(t.rotational),a.vmult(e.rotational,qs),c+=qs.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=Eg;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ms.idCounter=0;const tl=new M,el=new M,nl=new M,il=new M,qs=new M,Eg=new M;class Ag extends Ms{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,a=Cg,c=Tg,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=Rg,f=this.jacobianElementA,p=this.jacobianElementB,_=this.ni;r.cross(_,a),o.cross(_,c),_.negate(f.spatial),a.negate(f.rotational),p.spatial.copy(_),p.rotational.copy(c),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(r,g);const v=_.dot(g),x=this.restitution+1,y=x*u.dot(_)-x*h.dot(_)+m.dot(c)-d.dot(a),w=this.computeGiMf();return-v*e-y*n-t*w}getImpactVelocityAlongNormal(){const t=Lg,e=Dg,n=Pg,i=Ig,s=Ng;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Cg=new M,Tg=new M,Rg=new M,Lg=new M,Dg=new M,Pg=new M,Ig=new M,Ng=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class sl extends Ms{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=zg,r=Og,o=this.t;n.cross(o,s),i.cross(o,r);const a=this.jacobianElementA,c=this.jacobianElementB;o.negate(a.spatial),s.negate(a.rotational),c.spatial.copy(o),c.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const zg=new M,Og=new M;class Wi{constructor(t,e,n){n=Sg.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Wi.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Wi.idCounter=0;class qi{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=qi.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}qi.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new oe;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Bg extends gt{constructor(){super({type:gt.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new M),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Tn.set(0,0,1),e.vmult(Tn,Tn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Tn.x===1?i.x=t.x:Tn.x===-1&&(n.x=t.x),Tn.y===1?i.y=t.y:Tn.y===-1&&(n.y=t.y),Tn.z===1?i.z=t.z:Tn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Tn=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new We;new M;new We;new M;new M;new M;new M;new M;new M;new M;new We;new M;new Wt;new We;class Fg{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class kg extends Fg{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,a=e.bodies,c=a.length,h=t;let d,u,m,g,f,p;if(o!==0)for(let y=0;y!==c;y++)a[y].updateSolveMassProperties();const _=Gg,v=Vg,x=Ug;_.length=o,v.length=o,x.length=o;for(let y=0;y!==o;y++){const w=r[y];x[y]=0,v[y]=w.computeB(h),_[y]=1/w.computeC()}if(o!==0){for(let S=0;S!==c;S++){const C=a[S],b=C.vlambda,A=C.wlambda;b.set(0,0,0),A.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let S=0;S!==o;S++){const C=r[S];d=v[S],u=_[S],p=x[S],f=C.computeGWlambda(),m=u*(d-f-C.eps*p),p+m<C.minForce?m=C.minForce-p:p+m>C.maxForce&&(m=C.maxForce-p),x[S]+=m,g+=m>0?m:-m,C.addToWlambda(m)}if(g*g<s)break}for(let S=0;S!==c;S++){const C=a[S],b=C.velocity,A=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),b.vadd(C.vlambda,b),C.wlambda.vmul(C.angularFactor,C.wlambda),A.vadd(C.wlambda,A)}let y=r.length;const w=1/h;for(;y--;)r[y].multiplier=x[y]*w}return n}}const Ug=[],Gg=[],Vg=[];class Hg{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Wg extends Hg{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const jt={sphereSphere:gt.types.SPHERE,spherePlane:gt.types.SPHERE|gt.types.PLANE,boxBox:gt.types.BOX|gt.types.BOX,sphereBox:gt.types.SPHERE|gt.types.BOX,planeBox:gt.types.PLANE|gt.types.BOX,convexConvex:gt.types.CONVEXPOLYHEDRON,sphereConvex:gt.types.SPHERE|gt.types.CONVEXPOLYHEDRON,planeConvex:gt.types.PLANE|gt.types.CONVEXPOLYHEDRON,boxConvex:gt.types.BOX|gt.types.CONVEXPOLYHEDRON,sphereHeightfield:gt.types.SPHERE|gt.types.HEIGHTFIELD,boxHeightfield:gt.types.BOX|gt.types.HEIGHTFIELD,convexHeightfield:gt.types.CONVEXPOLYHEDRON|gt.types.HEIGHTFIELD,sphereParticle:gt.types.PARTICLE|gt.types.SPHERE,planeParticle:gt.types.PLANE|gt.types.PARTICLE,boxParticle:gt.types.BOX|gt.types.PARTICLE,convexParticle:gt.types.PARTICLE|gt.types.CONVEXPOLYHEDRON,cylinderCylinder:gt.types.CYLINDER,sphereCylinder:gt.types.SPHERE|gt.types.CYLINDER,planeCylinder:gt.types.PLANE|gt.types.CYLINDER,boxCylinder:gt.types.BOX|gt.types.CYLINDER,convexCylinder:gt.types.CONVEXPOLYHEDRON|gt.types.CYLINDER,heightfieldCylinder:gt.types.HEIGHTFIELD|gt.types.CYLINDER,particleCylinder:gt.types.PARTICLE|gt.types.CYLINDER,sphereTrimesh:gt.types.SPHERE|gt.types.TRIMESH,planeTrimesh:gt.types.PLANE|gt.types.TRIMESH};class qg{get[jt.sphereSphere](){return this.sphereSphere}get[jt.spherePlane](){return this.spherePlane}get[jt.boxBox](){return this.boxBox}get[jt.sphereBox](){return this.sphereBox}get[jt.planeBox](){return this.planeBox}get[jt.convexConvex](){return this.convexConvex}get[jt.sphereConvex](){return this.sphereConvex}get[jt.planeConvex](){return this.planeConvex}get[jt.boxConvex](){return this.boxConvex}get[jt.sphereHeightfield](){return this.sphereHeightfield}get[jt.boxHeightfield](){return this.boxHeightfield}get[jt.convexHeightfield](){return this.convexHeightfield}get[jt.sphereParticle](){return this.sphereParticle}get[jt.planeParticle](){return this.planeParticle}get[jt.boxParticle](){return this.boxParticle}get[jt.convexParticle](){return this.convexParticle}get[jt.cylinderCylinder](){return this.convexConvex}get[jt.sphereCylinder](){return this.sphereConvex}get[jt.planeCylinder](){return this.planeConvex}get[jt.boxCylinder](){return this.boxConvex}get[jt.convexCylinder](){return this.convexConvex}get[jt.heightfieldCylinder](){return this.heightfieldCylinder}get[jt.particleCylinder](){return this.particleCylinder}get[jt.sphereTrimesh](){return this.sphereTrimesh}get[jt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Wg,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=t,o.bj=e):o=new Ag(t,e),o.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const a=this.currentContactMaterial;o.restitution=a.restitution,o.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(o.restitution=c.restitution*h.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,o=this.world,a=this.currentContactMaterial;let c=a.friction;const h=s.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(o.frictionGravity||o.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,f=g.length?g.pop():new sl(n,i,u*m),p=g.length?g.pop():new sl(n,i,u*m);return f.bi=p.bi=n,f.bj=p.bj=i,f.minForce=p.minForce=-u*m,f.maxForce=p.maxForce=u*m,f.ri.copy(t.ri),f.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(f.t,p.t),f.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),p.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),f.enabled=p.enabled=t.enabled,e.push(f,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ni.setZero(),Di.setZero(),Pi.setZero();const s=e.bi;e.bj;for(let o=0;o!==t;o++)e=this.result[this.result.length-1-o],e.bi!==s?(ni.vadd(e.ni,ni),Di.vadd(e.ri,Di),Pi.vadd(e.rj,Pi)):(ni.vsub(e.ni,ni),Di.vadd(e.rj,Di),Pi.vadd(e.ri,Pi));const r=1/t;Di.scale(r,n.ri),Pi.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ni.normalize(),ni.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;const a=jg,c=Kg,h=Xg,d=Yg;for(let u=0,m=t.length;u!==m;u++){const g=t[u],f=e[u];let p=null;g.material&&f.material&&(p=n.getContactMaterial(g.material,f.material)||null);const _=g.type&dt.KINEMATIC&&f.type&dt.STATIC||g.type&dt.STATIC&&f.type&dt.KINEMATIC||g.type&dt.KINEMATIC&&f.type&dt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],a),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const x=g.shapes[v];for(let y=0;y<f.shapes.length;y++){f.quaternion.mult(f.shapeOrientations[y],c),f.quaternion.vmult(f.shapeOffsets[y],d),d.vadd(f.position,d);const w=f.shapes[y];if(!(x.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+w.boundingSphereRadius)continue;let S=null;x.material&&w.material&&(S=n.getContactMaterial(x.material,w.material)||null),this.currentContactMaterial=S||p||n.defaultContactMaterial;const C=x.type|w.type,b=this[C];if(b){let A=!1;x.type<w.type?A=b.call(this,x,w,h,d,a,c,g,f,x,w,_):A=b.call(this,w,x,d,h,c,a,f,g,x,w,_),A&&_&&(n.shapeOverlapKeeper.set(x.id,w.id),n.bodyOverlapKeeper.set(g.id,f.id))}}}}}sphereSphere(t,e,n,i,s,r,o,a,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(o,a,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(a.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,r,o,a,c,h,d){const u=this.createContactEquation(o,a,t,e,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Xs),u.ni.scale(u.ni.dot(Xs),rl),Xs.vsub(rl,u.rj),-Xs.dot(u.ni)<=t.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(o.position,m),g.vadd(i,g),g.vsub(a.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,r,o,a,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,o,a,t,e,d)}sphereBox(t,e,n,i,s,r,o,a,c,h,d){const u=this.v3pool,m=b0;n.vsub(i,Ys),e.getSideNormals(m,r);const g=t.radius;let f=!1;const p=w0,_=S0,v=E0;let x=null,y=0,w=0,S=0,C=null;for(let z=0,X=m.length;z!==X&&f===!1;z++){const F=_0;F.copy(m[z]);const q=F.length();F.normalize();const Y=Ys.dot(F);if(Y<q+g&&Y>0){const et=x0,O=y0;et.copy(m[(z+1)%3]),O.copy(m[(z+2)%3]);const J=et.length(),tt=O.length();et.normalize(),O.normalize();const U=Ys.dot(et),ot=Ys.dot(O);if(U<J&&U>-J&&ot<tt&&ot>-tt){const at=Math.abs(Y-q-g);if((C===null||at<C)&&(C=at,w=U,S=ot,x=q,p.copy(F),_.copy(et),v.copy(O),y++,d))return!0}}}if(y){f=!0;const z=this.createContactEquation(o,a,t,e,c,h);p.scale(-g,z.ri),z.ni.copy(p),z.ni.negate(z.ni),p.scale(x,p),_.scale(w,_),p.vadd(_,p),v.scale(S,v),p.vadd(v,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(o.position,z.ri),z.rj.vadd(i,z.rj),z.rj.vsub(a.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let b=u.get();const A=M0;for(let z=0;z!==2&&!f;z++)for(let X=0;X!==2&&!f;X++)for(let F=0;F!==2&&!f;F++)if(b.set(0,0,0),z?b.vadd(m[0],b):b.vsub(m[0],b),X?b.vadd(m[1],b):b.vsub(m[1],b),F?b.vadd(m[2],b):b.vsub(m[2],b),i.vadd(b,A),A.vsub(n,A),A.lengthSquared()<g*g){if(d)return!0;f=!0;const q=this.createContactEquation(o,a,t,e,c,h);q.ri.copy(A),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(g,q.ri),q.rj.copy(b),q.ri.vadd(n,q.ri),q.ri.vsub(o.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(a.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}u.release(b),b=null;const P=u.get(),k=u.get(),G=u.get(),L=u.get(),I=u.get(),N=m.length;for(let z=0;z!==N&&!f;z++)for(let X=0;X!==N&&!f;X++)if(z%3!==X%3){m[X].cross(m[z],P),P.normalize(),m[z].vadd(m[X],k),G.copy(n),G.vsub(k,G),G.vsub(i,G);const F=G.dot(P);P.scale(F,L);let q=0;for(;q===z%3||q===X%3;)q++;I.copy(n),I.vsub(L,I),I.vsub(k,I),I.vsub(i,I);const Y=Math.abs(F),et=I.length();if(Y<m[q].length()&&et<g){if(d)return!0;f=!0;const O=this.createContactEquation(o,a,t,e,c,h);k.vadd(L,O.rj),O.rj.copy(O.rj),I.negate(O.ni),O.ni.normalize(),O.ri.copy(O.rj),O.ri.vadd(i,O.ri),O.ri.vsub(n,O.ri),O.ri.normalize(),O.ri.scale(g,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(o.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(a.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}u.release(P,k,G,L,I)}planeBox(t,e,n,i,s,r,o,a,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,o,a,t,e,d)}convexConvex(t,e,n,i,s,r,o,a,c,h,d,u,m){const g=U0;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,g,u,m)){const f=[],p=G0;t.clipAgainstHull(n,s,e,i,r,g,-100,100,f);let _=0;for(let v=0;v!==f.length;v++){if(d)return!0;const x=this.createContactEquation(o,a,t,e,c,h),y=x.ri,w=x.rj;g.negate(x.ni),f[v].normal.negate(p),p.scale(f[v].depth,p),f[v].point.vadd(p,y),w.copy(f[v].point),y.vsub(n,y),w.vsub(i,w),y.vadd(n,y),y.vsub(o.position,y),w.vadd(i,w),w.vsub(a.position,w),this.result.push(x),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(t,e,n,i,s,r,o,a,c,h,d){const u=this.v3pool;n.vsub(i,A0);const m=e.faceNormals,g=e.faces,f=e.vertices,p=t.radius;let _=!1;for(let v=0;v!==f.length;v++){const x=f[v],y=L0;r.vmult(x,y),i.vadd(y,y);const w=R0;if(y.vsub(n,w),w.lengthSquared()<p*p){if(d)return!0;_=!0;const S=this.createContactEquation(o,a,t,e,c,h);S.ri.copy(w),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(p,S.ri),y.vsub(i,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(o.position,S.ri),S.rj.vadd(i,S.rj),S.rj.vsub(a.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let v=0,x=g.length;v!==x&&_===!1;v++){const y=m[v],w=g[v],S=D0;r.vmult(y,S);const C=P0;r.vmult(f[w[0]],C),C.vadd(i,C);const b=I0;S.scale(-p,b),n.vadd(b,b);const A=N0;b.vsub(C,A);const P=A.dot(S),k=z0;if(n.vsub(C,k),P<0&&k.dot(S)>0){const G=[];for(let L=0,I=w.length;L!==I;L++){const N=u.get();r.vmult(f[w[L]],N),i.vadd(N,N),G.push(N)}if(v0(G,S,n)){if(d)return!0;_=!0;const L=this.createContactEquation(o,a,t,e,c,h);S.scale(-p,L.ri),S.negate(L.ni);const I=u.get();S.scale(-P,I);const N=u.get();S.scale(-p,N),n.vsub(i,L.rj),L.rj.vadd(N,L.rj),L.rj.vadd(I,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(a.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(o.position,L.ri),u.release(I),u.release(N),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let z=0,X=G.length;z!==X;z++)u.release(G[z]);return}else for(let L=0;L!==w.length;L++){const I=u.get(),N=u.get();r.vmult(f[w[(L+1)%w.length]],I),r.vmult(f[w[(L+2)%w.length]],N),i.vadd(I,I),i.vadd(N,N);const z=C0;N.vsub(I,z);const X=T0;z.unit(X);const F=u.get(),q=u.get();n.vsub(I,q);const Y=q.dot(X);X.scale(Y,F),F.vadd(I,F);const et=u.get();if(F.vsub(n,et),Y>0&&Y*Y<z.lengthSquared()&&et.lengthSquared()<p*p){if(d)return!0;const O=this.createContactEquation(o,a,t,e,c,h);F.vsub(i,O.rj),F.vsub(n,O.ni),O.ni.normalize(),O.ni.scale(p,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(a.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(o.position,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let J=0,tt=G.length;J!==tt;J++)u.release(G[J]);u.release(I),u.release(N),u.release(F),u.release(et),u.release(q);return}u.release(I),u.release(N),u.release(F),u.release(et),u.release(q)}for(let L=0,I=G.length;L!==I;L++)u.release(G[L])}}}planeConvex(t,e,n,i,s,r,o,a,c,h,d){const u=O0,m=B0;m.set(0,0,1),s.vmult(m,m);let g=0;const f=F0;for(let p=0;p!==e.vertices.length;p++)if(u.copy(e.vertices[p]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,f),m.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(o,a,t,e,c,h),x=k0;m.scale(m.dot(f),x),u.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(m),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(o.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(a.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,r,o,a,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,o,a,t,e,d)}sphereHeightfield(t,e,n,i,s,r,o,a,c,h,d){const u=e.data,m=t.radius,g=e.elementSize,f=Q0,p=J0;Wt.pointToLocalFrame(i,r,n,p);let _=Math.floor((p.x-m)/g)-1,v=Math.ceil((p.x+m)/g)+1,x=Math.floor((p.y-m)/g)-1,y=Math.ceil((p.y+m)/g)+1;if(v<0||y<0||_>u.length||x>u[0].length)return;_<0&&(_=0),v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),_>=u.length&&(_=u.length-1),v>=u.length&&(v=u.length-1),y>=u[0].length&&(y=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const w=[];e.getRectMinMax(_,x,v,y,w);const S=w[0],C=w[1];if(p.z-m>C||p.z+m<S)return;const b=this.result;for(let A=_;A<v;A++)for(let P=x;P<y;P++){const k=b.length;let G=!1;if(e.getConvexTrianglePillar(A,P,!1),Wt.pointToWorldFrame(i,r,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,f,s,r,o,a,t,e,d)),d&&G||(e.getConvexTrianglePillar(A,P,!0),Wt.pointToWorldFrame(i,r,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,f,s,r,o,a,t,e,d)),d&&G))return!0;if(b.length-k>2)return}}boxHeightfield(t,e,n,i,s,r,o,a,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,o,a,t,e,d)}convexHeightfield(t,e,n,i,s,r,o,a,c,h,d){const u=e.data,m=e.elementSize,g=t.boundingSphereRadius,f=Z0,p=$0,_=K0;Wt.pointToLocalFrame(i,r,n,_);let v=Math.floor((_.x-g)/m)-1,x=Math.ceil((_.x+g)/m)+1,y=Math.floor((_.y-g)/m)-1,w=Math.ceil((_.y+g)/m)+1;if(x<0||w<0||v>u.length||y>u[0].length)return;v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),w<0&&(w=0),v>=u.length&&(v=u.length-1),x>=u.length&&(x=u.length-1),w>=u[0].length&&(w=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const S=[];e.getRectMinMax(v,y,x,w,S);const C=S[0],b=S[1];if(!(_.z-g>b||_.z+g<C))for(let A=v;A<x;A++)for(let P=y;P<w;P++){let k=!1;if(e.getConvexTrianglePillar(A,P,!1),Wt.pointToWorldFrame(i,r,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.convexConvex(t,e.pillarConvex,n,f,s,r,o,a,null,null,d,p,null)),d&&k||(e.getConvexTrianglePillar(A,P,!0),Wt.pointToWorldFrame(i,r,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.convexConvex(t,e.pillarConvex,n,f,s,r,o,a,null,null,d,p,null)),d&&k))return!0}}sphereParticle(t,e,n,i,s,r,o,a,c,h,d){const u=q0;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(a,o,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,r,o,a,c,h,d){const u=V0;u.set(0,0,1),o.quaternion.vmult(u,u);const m=H0;if(i.vsub(o.position,m),u.dot(m)<=0){if(d)return!0;const f=this.createContactEquation(a,o,e,t,c,h);f.ni.copy(u),f.ni.negate(f.ni),f.ri.set(0,0,0);const p=W0;u.scale(u.dot(i),p),i.vsub(p,p),f.rj.copy(p),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxParticle(t,e,n,i,s,r,o,a,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,o,a,t,e,d)}convexParticle(t,e,n,i,s,r,o,a,c,h,d){let u=-1;const m=Y0,g=j0;let f=null;const p=X0;if(p.copy(i),p.vsub(n,p),s.conjugate(ol),ol.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let _=0,v=t.faces.length;_!==v;_++){const x=[t.worldVertices[t.faces[_][0]]],y=t.worldFaceNormals[_];i.vsub(x[0],al);const w=-y.dot(al);if(f===null||Math.abs(w)<Math.abs(f)){if(d)return!0;f=w,u=_,m.copy(y)}}if(u!==-1){const _=this.createContactEquation(a,o,e,t,c,h);m.scale(f,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),m.negate(_.ni),_.ri.set(0,0,0);const v=_.ri,x=_.rj;v.vadd(i,v),v.vsub(a.position,v),x.vadd(n,x),x.vsub(o.position,x),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,o,a,c,h,d){return this.convexHeightfield(e,t,i,n,r,s,a,o,c,h,d)}particleCylinder(t,e,n,i,s,r,o,a,c,h,d){return this.convexParticle(e,t,i,n,r,s,a,o,c,h,d)}sphereTrimesh(t,e,n,i,s,r,o,a,c,h,d){const u=i0,m=s0,g=r0,f=o0,p=a0,_=l0,v=d0,x=n0,y=t0,w=f0;Wt.pointToLocalFrame(i,r,n,p);const S=t.radius;v.lowerBound.set(p.x-S,p.y-S,p.z-S),v.upperBound.set(p.x+S,p.y+S,p.z+S),e.getTrianglesInAABB(v,w);const C=e0,b=t.radius*t.radius;for(let L=0;L<w.length;L++)for(let I=0;I<3;I++)if(e.getVertex(e.indices[w[L]*3+I],C),C.vsub(p,y),y.lengthSquared()<=b){if(x.copy(C),Wt.pointToWorldFrame(i,r,x,C),C.vsub(n,y),d)return!0;let N=this.createContactEquation(o,a,t,e,c,h);N.ni.copy(y),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),N.rj.copy(C),N.rj.vsub(a.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let L=0;L<w.length;L++)for(let I=0;I<3;I++){e.getVertex(e.indices[w[L]*3+I],u),e.getVertex(e.indices[w[L]*3+(I+1)%3],m),m.vsub(u,g),p.vsub(m,_);const N=_.dot(g);p.vsub(u,_);let z=_.dot(g);if(z>0&&N<0&&(p.vsub(u,_),f.copy(g),f.normalize(),z=_.dot(f),f.scale(z,_),_.vadd(u,_),_.distanceTo(p)<t.radius)){if(d)return!0;const F=this.createContactEquation(o,a,t,e,c,h);_.vsub(p,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(o.position,F.ri),Wt.pointToWorldFrame(i,r,_,_),_.vsub(a.position,F.rj),Wt.vectorToWorldFrame(r,F.ni,F.ni),Wt.vectorToWorldFrame(r,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}const A=c0,P=h0,k=u0,G=Qg;for(let L=0,I=w.length;L!==I;L++){e.getTriangleVertices(w[L],A,P,k),e.getNormal(w[L],G),p.vsub(A,_);let N=_.dot(G);if(G.scale(N,_),p.vsub(_,_),N=_.distanceTo(p),oe.pointInTriangle(_,A,P,k)&&N<t.radius){if(d)return!0;let z=this.createContactEquation(o,a,t,e,c,h);_.vsub(p,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(o.position,z.ri),Wt.pointToWorldFrame(i,r,_,_),_.vsub(a.position,z.rj),Wt.vectorToWorldFrame(r,z.ni,z.ni),Wt.vectorToWorldFrame(r,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}w.length=0}planeTrimesh(t,e,n,i,s,r,o,a,c,h,d){const u=new M,m=Zg;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const f=new M;f.copy(u),Wt.pointToWorldFrame(i,r,f,u);const p=$g;if(u.vsub(n,p),m.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(o,a,t,e,c,h);v.ni.copy(m);const x=Jg;m.scale(p.dot(m),x),u.vsub(x,x),v.ri.copy(x),v.ri.vsub(o.position,v.ri),v.rj.copy(u),v.rj.vsub(a.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const ni=new M,Di=new M,Pi=new M,Xg=new M,Yg=new M,jg=new ae,Kg=new ae,Zg=new M,$g=new M,Jg=new M,Qg=new M,t0=new M;new M;const e0=new M,n0=new M,i0=new M,s0=new M,r0=new M,o0=new M,a0=new M,l0=new M,c0=new M,h0=new M,u0=new M,d0=new We,f0=[],Xs=new M,rl=new M,p0=new M,m0=new M,g0=new M;function v0(l,t,e){let n=null;const i=l.length;for(let s=0;s!==i;s++){const r=l[s],o=p0;l[(s+1)%i].vsub(r,o);const a=m0;o.cross(t,a);const c=g0;e.vsub(r,c);const h=a.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Ys=new M,_0=new M,x0=new M,y0=new M,b0=[new M,new M,new M,new M,new M,new M],M0=new M,w0=new M,S0=new M,E0=new M,A0=new M,C0=new M,T0=new M,R0=new M,L0=new M,D0=new M,P0=new M,I0=new M,N0=new M,z0=new M;new M;new M;const O0=new M,B0=new M,F0=new M,k0=new M,U0=new M,G0=new M,V0=new M,H0=new M,W0=new M,q0=new M,ol=new ae,X0=new M;new M;const Y0=new M,al=new M,j0=new M,K0=new M,Z0=new M,$0=[0],J0=new M,Q0=new M;class ll{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let o=0;for(let a=0;a<s;a++){let c=!1;const h=n[a];for(;h>i[o];)o++;c=h===i[o],c||cl(t,h)}o=0;for(let a=0;a<r;a++){let c=!1;const h=i[a];for(;h>n[o];)o++;c=n[o]===h,c||cl(e,h)}}}function cl(l,t){l.push((t&4294901760)>>16,t&65535)}const qr=(l,t)=>l<t?`${l}-${t}`:`${t}-${l}`;class tv{constructor(){this.data={keys:[]}}get(t,e){const n=qr(t,e);return this.data[n]}set(t,e,n){const i=qr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=qr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class ev extends Wl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new ag,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new kg,this.constraints=[],this.narrowphase=new qg(this),this.collisionMatrix=new ja,this.collisionMatrixPrevious=new ja,this.bodyOverlapKeeper=new ll,this.shapeOverlapKeeper=new ll,this.contactmaterials=[],this.contactMaterialTable=new tv,this.defaultMaterial=new qi("default"),this.defaultContactMaterial=new Wi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Qs?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=oe.ALL,n.from=t,n.to=e,n.callback=i,Xr.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=oe.ANY,n.from=t,n.to=e,n.result=i,Xr.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=oe.CLOSEST,n.from=t,n.to=e,n.result=i,Xr.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof dt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ce.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ce.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ce.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let o=0;o!==this.bodies.length;o++){const a=this.bodies[o];a.previousPosition.lerp(a.position,r,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,r,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=ov,i=av,s=this.bodies.length,r=this.bodies,o=this.solver,a=this.gravity,c=this.doProfiling,h=this.profile,d=dt.DYNAMIC;let u=-1/0;const m=this.constraints,g=rv;a.length();const f=a.x,p=a.y,_=a.z;let v=0;for(c&&(u=ce.now()),v=0;v!==s;v++){const L=r[v];if(L.type===d){const I=L.force,N=L.mass;I.x+=N*f,I.y+=N*p,I.z+=N*_}}for(let L=0,I=this.subsystems.length;L!==I;L++)this.subsystems[L].update();c&&(u=ce.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=ce.now()-u);let x=m.length;for(v=0;v!==x;v++){const L=m[v];if(!L.collideConnected)for(let I=n.length-1;I>=0;I-=1)(L.bodyA===n[I]&&L.bodyB===i[I]||L.bodyB===n[I]&&L.bodyA===i[I])&&(n.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),c&&(u=ce.now());const y=sv,w=e.length;for(v=0;v!==w;v++)y.push(e[v]);e.length=0;const S=this.frictionEquations.length;for(v=0;v!==S;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,g),c&&(h.narrowphase=ce.now()-u),c&&(u=ce.now()),v=0;v<this.frictionEquations.length;v++)o.addEquation(this.frictionEquations[v]);const C=e.length;for(let L=0;L!==C;L++){const I=e[L],N=I.bi,z=I.bj,X=I.si,F=I.sj;let q;if(N.material&&z.material?q=this.getContactMaterial(N.material,z.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,N.material&&z.material&&(N.material.friction>=0&&z.material.friction>=0&&N.material.friction*z.material.friction,N.material.restitution>=0&&z.material.restitution>=0&&(I.restitution=N.material.restitution*z.material.restitution)),o.addEquation(I),N.allowSleep&&N.type===dt.DYNAMIC&&N.sleepState===dt.SLEEPING&&z.sleepState===dt.AWAKE&&z.type!==dt.STATIC){const Y=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),et=z.sleepSpeedLimit**2;Y>=et*2&&(N.wakeUpAfterNarrowphase=!0)}if(z.allowSleep&&z.type===dt.DYNAMIC&&z.sleepState===dt.SLEEPING&&N.sleepState===dt.AWAKE&&N.type!==dt.STATIC){const Y=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),et=N.sleepSpeedLimit**2;Y>=et*2&&(z.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,z,!0),this.collisionMatrixPrevious.get(N,z)||(ss.body=z,ss.contact=I,N.dispatchEvent(ss),ss.body=N,z.dispatchEvent(ss)),this.bodyOverlapKeeper.set(N.id,z.id),this.shapeOverlapKeeper.set(X.id,F.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=ce.now()-u,u=ce.now()),v=0;v!==s;v++){const L=r[v];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(x=m.length,v=0;v!==x;v++){const L=m[v];L.update();for(let I=0,N=L.equations.length;I!==N;I++){const z=L.equations[I];o.addEquation(z)}}o.solve(t,this),c&&(h.solve=ce.now()-u),o.removeAllEquations();const b=Math.pow;for(v=0;v!==s;v++){const L=r[v];if(L.type&d){const I=b(1-L.linearDamping,t),N=L.velocity;N.scale(I,N);const z=L.angularVelocity;if(z){const X=b(1-L.angularDamping,t);z.scale(X,z)}}}this.dispatchEvent(iv),c&&(u=ce.now());const P=this.stepnumber%(this.quatNormalizeSkip+1)===0,k=this.quatNormalizeFast;for(v=0;v!==s;v++)r[v].integrate(t,P,k);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=ce.now()-u),this.stepnumber+=1,this.dispatchEvent(nv);let G=!0;if(this.allowSleep)for(G=!1,v=0;v!==s;v++){const L=r[v];L.sleepTick(this.time),L.sleepState!==dt.SLEEPING&&(G=!0)}this.hasActiveBodies=G}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Rn,Ln),t){for(let s=0,r=Rn.length;s<r;s+=2)rs.bodyA=this.getBodyById(Rn[s]),rs.bodyB=this.getBodyById(Rn[s+1]),this.dispatchEvent(rs);rs.bodyA=rs.bodyB=null}if(e){for(let s=0,r=Ln.length;s<r;s+=2)os.bodyA=this.getBodyById(Ln[s]),os.bodyB=this.getBodyById(Ln[s+1]),this.dispatchEvent(os);os.bodyA=os.bodyB=null}Rn.length=Ln.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Rn,Ln),n){for(let s=0,r=Rn.length;s<r;s+=2){const o=this.getShapeById(Rn[s]),a=this.getShapeById(Rn[s+1]);Dn.shapeA=o,Dn.shapeB=a,o&&(Dn.bodyA=o.body),a&&(Dn.bodyB=a.body),this.dispatchEvent(Dn)}Dn.bodyA=Dn.bodyB=Dn.shapeA=Dn.shapeB=null}if(i){for(let s=0,r=Ln.length;s<r;s+=2){const o=this.getShapeById(Ln[s]),a=this.getShapeById(Ln[s+1]);Pn.shapeA=o,Pn.shapeB=a,o&&(Pn.bodyA=o.body),a&&(Pn.bodyB=a.body),this.dispatchEvent(Pn)}Pn.bodyA=Pn.bodyB=Pn.shapeA=Pn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new We;const Xr=new oe,ce=globalThis.performance||{};if(!ce.now){let l=Date.now();ce.timing&&ce.timing.navigationStart&&(l=ce.timing.navigationStart),ce.now=()=>Date.now()-l}new M;const nv={type:"postStep"},iv={type:"preStep"},ss={type:dt.COLLIDE_EVENT_NAME,body:null,contact:null},sv=[],rv=[],ov=[],av=[],Rn=[],Ln=[],rs={type:"beginContact",bodyA:null,bodyB:null},os={type:"endContact",bodyA:null,bodyB:null},Dn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Pn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class ke{static audioCtx=null;static noiseBuffer=null;static init(){if(this.audioCtx){this.audioCtx.state==="suspended"&&this.audioCtx.resume();return}try{const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t,this.createNoiseBuffer())}catch(t){console.warn("Failed to initialize AudioContext:",t)}}static createNoiseBuffer(){if(!this.audioCtx)return;const t=this.audioCtx.sampleRate*1;this.noiseBuffer=this.audioCtx.createBuffer(1,t,this.audioCtx.sampleRate);const e=this.noiseBuffer.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}static playNoise(t,e,n,i="lowpass"){if(!this.audioCtx||!this.noiseBuffer)return;const s=this.audioCtx.createBufferSource();s.buffer=this.noiseBuffer;const r=this.audioCtx.createGain();r.gain.setValueAtTime(e,this.audioCtx.currentTime),r.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+t);let o=s;if(n!==void 0){const a=this.audioCtx.createBiquadFilter();a.type=i,a.frequency.setValueAtTime(n,this.audioCtx.currentTime),s.connect(a),o=a}o.connect(r),r.connect(this.audioCtx.destination),s.start(),s.stop(this.audioCtx.currentTime+t)}static playTone(t,e,n,i,s){if(!this.audioCtx)return;const r=this.audioCtx.createOscillator();r.type=t;const o=this.audioCtx.createGain();o.gain.setValueAtTime(s,this.audioCtx.currentTime),o.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+i),r.frequency.setValueAtTime(e,this.audioCtx.currentTime),e!==n&&r.frequency.exponentialRampToValueAtTime(n,this.audioCtx.currentTime+i),r.connect(o),o.connect(this.audioCtx.destination),r.start(),r.stop(this.audioCtx.currentTime+i)}static playBreak(t){if(this.init(),!!this.audioCtx)switch(t){case D.STONE:case D.COAL_ORE:case D.BRICK:this.playNoise(.18,.35,450,"bandpass"),this.playTone("triangle",130,40,.15,.3);break;case D.WOOD:case D.PLANK:case D.DOOR_CLOSED:case D.DOOR_OPEN:this.playNoise(.12,.3,600,"lowpass"),this.playTone("triangle",180,80,.12,.35);break;case D.GROUND:case D.DIRT:case D.LEAVES:this.playNoise(.08,.25,1200,"bandpass");break;case D.GLASS:this.playTone("sine",1600,800,.25,.35),this.playTone("sine",2200,1e3,.2,.2),this.playNoise(.18,.15,4e3,"highpass");break;default:this.playNoise(.1,.25,800,"lowpass");break}}static playPlace(t){if(this.init(),!!this.audioCtx)switch(t){case D.STONE:case D.COAL_ORE:case D.BRICK:this.playNoise(.08,.2,700,"bandpass"),this.playTone("triangle",180,120,.08,.18);break;case D.WOOD:case D.PLANK:case D.DOOR_CLOSED:case D.DOOR_OPEN:this.playNoise(.06,.2,900,"lowpass"),this.playTone("triangle",240,180,.06,.2);break;case D.GLASS:this.playTone("sine",1900,1700,.1,.2);break;default:this.playNoise(.05,.18,1400,"lowpass");break}}static playSwing(){this.init(),this.playTone("sine",600,90,.12,.25),this.playNoise(.08,.1,2500,"bandpass")}static playHit(){this.init(),this.playNoise(.12,.4,250,"lowpass"),this.playTone("sawtooth",120,40,.1,.3)}static playDamage(){this.init(),this.playTone("sawtooth",85,45,.16,.45),this.playNoise(.14,.25,350,"lowpass")}static playJump(){this.init(),this.playTone("triangle",160,280,.12,.2)}static playPickup(){this.init(),this.playTone("sine",950,1400,.08,.22)}}class Ye{position;camera;body;avatar;head;bodyMesh;leftArm;rightArm;leftLeg;rightLeg;cameraMode="1PV";armorType="none";armorMat;weapons1PV={};weapons3PV={};swingTime=0;hp=mt.PLAYER_MAX_HP;isDead=!1;spawnPosition;pitch=0;yaw=0;sensitivity=.002;speed=mt.PLAYER_SPEED;isGrounded=!1;isInWater=!1;isSprintingToggle=!1;jumpForce=7.5;lastVelocityY=0;lastDamageTime=0;lastRegenTime=0;voxelWorld;static tempVec3=new H;static tempVec3_2=new H;static tempQuat=new mi;static tempQuat_2=new mi;static tempDirection=new H;constructor(t,e,n,i){this.camera=t,this.position=e.clone(),this.spawnPosition=e.clone();const s=mt.PLAYER_RADIUS,r=mt.PLAYER_HEIGHT/2,o=new Yn(new M(s,r,s));this.body=new dt({mass:60,shape:o,position:new M(e.x,e.y+r,e.z),fixedRotation:!0,linearDamping:.1,material:n.playerMaterial}),n.world.addBody(this.body),this.avatar=new we,this.buildAvatar(),i.add(this.avatar),this.weapons1PV[14]=this.buildSword(13421772,7877903,15381256),this.weapons3PV[14]=this.buildSword(13421772,7877903,15381256),this.weapons1PV[22]=this.buildSword(65535,7877903,35071),this.weapons3PV[22]=this.buildSword(65535,7877903,35071),this.weapons1PV[23]=this.buildHammer(),this.weapons3PV[23]=this.buildHammer();for(const a of[14,22,23])this.weapons1PV[a].position.set(.24,-.24,-.38),this.weapons1PV[a].rotation.set(-30*Math.PI/180,45*Math.PI/180,15*Math.PI/180),this.weapons1PV[a].visible=!1,this.camera.add(this.weapons1PV[a]),this.weapons3PV[a].position.set(0,-.6,.1),this.weapons3PV[a].rotation.x=Math.PI/2,this.weapons3PV[a].visible=!1,this.rightArm.add(this.weapons3PV[a]);this.syncCamera()}buildAvatar(){const t=new ve({color:16767916,roughness:.9}),e=new ve({color:33023,roughness:.9}),n=new ve({color:16767916,roughness:.9}),i=new ve({color:2829184,roughness:.9}),s=new ve({color:5913896,roughness:.9});this.armorMat=new ve({color:16777215,roughness:.8,metalness:.1,visible:!1});const r=new Qt(.44,.44,.44),o=new Qt(.44,.62,.24),a=new Qt(.24,.35,.24);a.translate(0,-.175,0);const c=new Qt(.23,.4,.23);c.translate(0,-.2,0);const h=new Qt(.24,.2,.24);h.translate(0,-.5,0);const d=new Qt(.4,.4,.4);this.head=new Dt(d,t),this.head.position.y=.5,this.head.castShadow=!0,this.head.receiveShadow=!0;const u=new Qt(.42,.15,.42),m=new Dt(u,s);m.position.y=.15,this.head.add(m);const g=new Dt(r,this.armorMat);g.castShadow=!0,g.receiveShadow=!0,this.head.add(g),this.avatar.add(this.head);const f=new Qt(.4,.6,.2);this.bodyMesh=new Dt(f,e),this.bodyMesh.position.y=0,this.bodyMesh.castShadow=!0,this.bodyMesh.receiveShadow=!0;const p=new Dt(o,this.armorMat);p.castShadow=!0,p.receiveShadow=!0,this.bodyMesh.add(p),this.avatar.add(this.bodyMesh);const _=new Qt(.2,.6,.2);_.translate(0,-.3,0),this.leftArm=new we;const v=new Dt(_,n);v.castShadow=!0,v.receiveShadow=!0;const x=new Dt(a,this.armorMat);x.castShadow=!0,x.receiveShadow=!0,v.add(x),this.leftArm.add(v),this.leftArm.position.set(.3,.3,0),this.avatar.add(this.leftArm),this.rightArm=new we;const y=new Dt(_,n);y.castShadow=!0,y.receiveShadow=!0;const w=new Dt(a,this.armorMat);w.castShadow=!0,w.receiveShadow=!0,y.add(w),this.rightArm.add(y),this.rightArm.position.set(-.3,.3,0),this.avatar.add(this.rightArm),this.leftLeg=new we;const S=new Dt(_,i);S.castShadow=!0,S.receiveShadow=!0;const C=new Dt(c,this.armorMat);C.castShadow=!0,C.receiveShadow=!0,S.add(C);const b=new Dt(h,this.armorMat);b.castShadow=!0,b.receiveShadow=!0,S.add(b),this.leftLeg.add(S),this.leftLeg.position.set(.1,-.3,0),this.avatar.add(this.leftLeg),this.rightLeg=new we;const A=new Dt(_,i);A.castShadow=!0,A.receiveShadow=!0;const P=new Dt(c,this.armorMat);P.castShadow=!0,P.receiveShadow=!0,A.add(P);const k=new Dt(h,this.armorMat);k.castShadow=!0,k.receiveShadow=!0,A.add(k),this.rightLeg.add(A),this.rightLeg.position.set(-.1,-.3,0),this.avatar.add(this.rightLeg)}buildSword(t=13421772,e=7877903,n=15381256){const i=new we,s=new ve({color:t,roughness:.3,metalness:.8}),r=new ve({color:n,roughness:.5,metalness:.5}),o=new ve({color:e,roughness:.9}),a=new Qt(.06,.45,.02);a.translate(0,.225,0);const c=new Dt(a,s);c.castShadow=!0,c.receiveShadow=!0,c.position.y=.02,i.add(c);const h=new Qt(.16,.04,.04),d=new Dt(h,r);d.castShadow=!0,d.receiveShadow=!0,d.position.y=0,i.add(d);const u=new Qt(.04,.12,.04);u.translate(0,-.06,0);const m=new Dt(u,o);return m.castShadow=!0,m.receiveShadow=!0,m.position.y=-.02,i.add(m),i}buildHammer(){const t=new we,e=new ve({color:5592405,roughness:.7,metalness:.5}),n=new ve({color:7877903,roughness:.9}),i=new Qt(.15,.15,.3);i.translate(0,.3,0);const s=new Dt(i,e);s.castShadow=!0,s.receiveShadow=!0,t.add(s);const r=new Qt(.04,.4,.04);r.translate(0,.05,0);const o=new Dt(r,n);return o.castShadow=!0,o.receiveShadow=!0,t.add(o),t}update(t,e,n,i){if(this.isDead)return;const s=performance.now();if(this.hp<mt.PLAYER_MAX_HP&&s-this.lastDamageTime>5e3&&s-this.lastRegenTime>1e3&&(this.hp=Math.min(mt.PLAYER_MAX_HP,this.hp+1),this.lastRegenTime=s),t.consumeJustPressed("F5")&&(this.cameraMode==="1PV"?this.cameraMode="3PV_BACK":this.cameraMode==="3PV_BACK"?this.cameraMode="3PV_FRONT":this.cameraMode="1PV"),(t.consumeJustPressed("ShiftLeft")||t.consumeJustPressed("ShiftRight"))&&(this.isSprintingToggle=!this.isSprintingToggle),this.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.handleStepClimb(n),this.isInWater=!1,this.voxelWorld){const r=Math.floor(this.position.x),o=Math.floor(this.position.y-mt.PLAYER_HEIGHT/2+.1),a=Math.floor(this.position.z);this.voxelWorld.getBlock(r,o,a)===D.WATER&&(this.isInWater=!0)}if(!t.isLocked){this.body.velocity.x*=.8,this.body.velocity.z*=.8;return}for(const r of[14,22,23]){const o=i===r;this.cameraMode==="1PV"?(this.weapons1PV[r].visible=o,this.weapons3PV[r].visible=!1):(this.weapons1PV[r].visible=!1,this.weapons3PV[r].visible=o)}this.handleRotation(t),this.checkGrounded(n),this.handleMovement(t,e),this.animateAvatar(e),this.syncCamera(),this.updateHUD()}handleRotation(t){const e=t.consumeMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch-=e.y*this.sensitivity;const n=85*Math.PI/180;this.pitch=Math.max(-n,Math.min(n,this.pitch))}checkGrounded(t){const e=mt.PLAYER_HEIGHT/2,n=this.position.y-e-.05,i=[{x:this.position.x,z:this.position.z},{x:this.position.x-.3,z:this.position.z-.3},{x:this.position.x+.3,z:this.position.z-.3},{x:this.position.x-.3,z:this.position.z+.3},{x:this.position.x+.3,z:this.position.z+.3}];let s=!1;for(const o of i){const a=Math.floor(o.x),c=Math.floor(n),h=Math.floor(o.z);if(t.getBlock(a,c,h)!==0){s=!0;break}}const r=s||Math.abs(this.body.velocity.y)<.05;if(r&&!this.isGrounded&&!this.isInWater&&this.lastVelocityY<mt.FALL_DAMAGE_MIN_SPEED){const o=Math.floor((mt.FALL_DAMAGE_MIN_SPEED-this.lastVelocityY)*mt.FALL_DAMAGE_FACTOR);o>0&&this.takeDamage(o)}this.isGrounded=r,this.lastVelocityY=this.body.velocity.y}handleStepClimb(t){const e=this.body.velocity.x,n=this.body.velocity.z,i=e*e+n*n;if(i<.01)return;const s=mt.PLAYER_HEIGHT/2,r=this.position.y-s,o=Math.sqrt(i),a=e/o,c=n/o,h=mt.PLAYER_RADIUS+.15,d=this.position.x+a*h,u=this.position.z+c*h,m=Math.floor(d),g=Math.floor(u),f=Math.floor(r+.15),p=t.getBlock(m,f,g),_=t.getBlock(m,f+1,g),v=t.getBlock(m,f+2,g);if(p!==0&&_===0&&v===0){let x=1;(p===D.BED_HEAD||p===D.BED_FOOT)&&(x=.5625);const y=f+x,w=y-r;w>.05&&w<=1.05&&(p===D.STAIRS?this.body.velocity.y=4:(this.body.position.y=y+s+.05,this.position.y=this.body.position.y,this.body.velocity.y<0&&(this.body.velocity.y=0)))}}setArmor(t){this.armorType=t,t==="none"?this.armorMat.visible=!1:(this.armorMat.visible=!0,t==="leather"?(this.armorMat.color.setHex(9132587),this.armorMat.roughness=.9,this.armorMat.metalness=0):t==="iron"?(this.armorMat.color.setHex(14211288),this.armorMat.roughness=.4,this.armorMat.metalness=.8):t==="diamond"&&(this.armorMat.color.setHex(2282478),this.armorMat.roughness=.3,this.armorMat.metalness=.6),this.armorMat.needsUpdate=!0)}takeDamage(t){if(this.isDead)return;this.lastDamageTime=performance.now(),t>0&&(this.armorType==="leather"?t=Math.max(1,Math.floor(t*.9)):this.armorType==="iron"?t=Math.max(1,Math.floor(t*.7)):this.armorType==="diamond"&&(t=Math.max(1,Math.floor(t*.4)))),this.hp=Math.max(0,this.hp-t),ke.playDamage();const e=document.getElementById("damage-overlay");e&&(e.style.opacity="0.5",setTimeout(()=>{e.style.opacity="0"},150)),this.hp<=0&&this.die()}die(){this.isDead=!0,this.body.velocity.set(0,0,0);const t=document.getElementById("death-screen");t&&(t.style.display="flex"),document.exitPointerLock()}respawn(){this.hp=mt.PLAYER_MAX_HP,this.isDead=!1,this.body.position.set(this.spawnPosition.x,this.spawnPosition.y+mt.PLAYER_HEIGHT/2,this.spawnPosition.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.pitch=0,this.yaw=0;const t=document.getElementById("death-screen");t&&(t.style.display="none");const e=document.getElementById("menu-overlay");e&&(e.style.display="flex")}handleMovement(t,e){const n=Ye.tempVec3.set(0,0,0);t.isActionActive("forward")&&(n.z-=1),t.isActionActive("backward")&&(n.z+=1),t.isActionActive("left")&&(n.x-=1),t.isActionActive("right")&&(n.x+=1),n.normalize();const i=Ye.tempDirection.copy(n);i.applyAxisAngle(Ye.tempVec3_2.set(0,1,0),this.yaw);let s=this.isSprintingToggle?this.speed*1.5:this.speed;this.isInWater&&(s*=.6);const r=i.x*s,o=i.z*s,a=this.isGrounded?15:3;this.body.velocity.x+=(r-this.body.velocity.x)*a*e,this.body.velocity.z+=(o-this.body.velocity.z)*a*e,t.isActionActive("jump")&&(this.isInWater?this.body.velocity.y=this.jumpForce*.4:this.isGrounded&&(this.body.velocity.y=this.jumpForce,this.isGrounded=!1,ke.playJump())),this.isInWater&&this.body.velocity.y<-2&&(this.body.velocity.y*=.8)}animateAvatar(t){this.avatar.position.copy(this.position),this.avatar.rotation.y=this.yaw,this.head.rotation.x=this.pitch;const n=this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z>.1&&this.isGrounded;if(n){const r=performance.now()*.01,o=Math.sin(r)*.8;this.leftArm.rotation.x=o,this.swingTime<=0&&(this.rightArm.rotation.x=-o),this.leftLeg.rotation.x=-o,this.rightLeg.rotation.x=o}else{const r=10*t;this.leftArm.rotation.x+=(0-this.leftArm.rotation.x)*r,this.swingTime<=0&&(this.rightArm.rotation.x+=(0-this.rightArm.rotation.x)*r),this.leftLeg.rotation.x+=(0-this.leftLeg.rotation.x)*r,this.rightLeg.rotation.x+=(0-this.rightLeg.rotation.x)*r}let i=!1,s=0;if(!n&&this.isGrounded&&this.voxelWorld){const r=Math.floor(this.position.x),o=mt.PLAYER_HEIGHT/2,a=Math.floor(this.position.y-o-.1),c=Math.floor(this.position.z),h=this.voxelWorld.getBlock(r,a,c);if(h===D.BED_HEAD||h===D.BED_FOOT){i=!0;const d=h===D.BED_HEAD?D.BED_FOOT:D.BED_HEAD;this.voxelWorld.getBlock(r+1,a,c)===d?s=h===D.BED_HEAD?-Math.PI/2:Math.PI/2:this.voxelWorld.getBlock(r-1,a,c)===d?s=h===D.BED_HEAD?Math.PI/2:-Math.PI/2:this.voxelWorld.getBlock(r,a,c+1)===d?s=h===D.BED_HEAD?Math.PI:0:this.voxelWorld.getBlock(r,a,c-1)===d&&(s=h===D.BED_HEAD?0:Math.PI)}}if(i){const r=-Math.PI/2;this.avatar.rotation.x+=(r-this.avatar.rotation.x)*10*t,this.avatar.rotation.y=s,this.avatar.position.y-=.5}else this.avatar.rotation.x+=(0-this.avatar.rotation.x)*10*t;if(this.swingTime>0){this.swingTime-=t;const r=(.15-this.swingTime)/.15,o=Math.sin(r*Math.PI)*1.2;if(this.cameraMode==="1PV")for(const a of[14,22,23])this.weapons1PV[a].rotation.x=-30*Math.PI/180+o,this.weapons1PV[a].rotation.y=45*Math.PI/180-o*.5,this.weapons1PV[a].position.z=-.38+o*.15;else this.rightArm.rotation.x=-Math.PI/3-o*1.5,this.rightArm.rotation.y=-o*.5}else if(this.cameraMode==="1PV")for(const r of[14,22,23])this.weapons1PV[r].rotation.set(-30*Math.PI/180,45*Math.PI/180,15*Math.PI/180),this.weapons1PV[r].position.set(.24,-.24,-.38)}syncCamera(){const t=Ye.tempQuat.setFromAxisAngle(Ye.tempVec3.set(0,1,0),this.yaw),e=Ye.tempQuat_2.setFromAxisAngle(Ye.tempVec3_2.set(1,0,0),this.pitch),n=Ye.tempQuat.multiplyQuaternions(t,e);this.camera.quaternion.copy(n);const i=mt.PLAYER_HEIGHT/2-.2;if(this.cameraMode==="1PV")this.camera.position.set(this.position.x,this.position.y+i,this.position.z),this.avatar.visible=!1;else{this.avatar.visible=!0,this.head.visible=!0;const s=4,r=Ye.tempVec3.set(0,i+.4,0),o=Ye.tempVec3_2.set(0,0,-1).applyQuaternion(n),a=new H(this.position.x+r.x,this.position.y+r.y,this.position.z+r.z);let c;this.cameraMode==="3PV_BACK"?c=o.clone().negate():c=new H(o.x,-o.y,o.z).normalize();const h=this.calcSafeCameraDist(a,c,s);this.cameraMode==="3PV_BACK"?this.camera.position.copy(a).addScaledVector(c,h):(this.camera.position.copy(a).addScaledVector(c,h),this.camera.lookAt(this.position.x,this.position.y+i,this.position.z))}}calcSafeCameraDist(t,e,n){if(!this.voxelWorld)return n;const i=.2,s=.1,r=Math.ceil(n/s);for(let o=1;o<=r;o++){const a=Math.min(o*s,n),c=t.x+e.x*a,h=t.y+e.y*a,d=t.z+e.z*a,u=Math.floor(c),m=Math.floor(h),g=Math.floor(d);if(this.voxelWorld.getBlock(u,m,g)!==0)return Math.max(0,a-i)}return n}updateHUD(){const t=document.getElementById("pos-display");t&&(t.textContent=`${this.position.x.toFixed(1)}, ${this.position.y.toFixed(1)}, ${this.position.z.toFixed(1)}`)}swing(){this.swingTime<=0&&(this.swingTime=.15)}getYaw(){return this.yaw}setWorld(t){this.voxelWorld=t}getSaveData(){return{x:this.body.position.x,y:this.body.position.y,z:this.body.position.z,hp:this.hp,yaw:this.yaw,pitch:this.pitch,armorType:this.armorType}}loadSaveData(t){if(!t)return;this.hp=typeof t.hp=="number"?t.hp:mt.PLAYER_MAX_HP,this.isDead=this.hp<=0,t.armorType?this.setArmor(t.armorType):this.setArmor("none");const e=document.getElementById("death-screen");e&&(e.style.display=this.isDead?"flex":"none"),this.yaw=typeof t.yaw=="number"?t.yaw:0,this.pitch=typeof t.pitch=="number"?t.pitch:0,this.body.position.set(t.x,t.y,t.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.position.set(t.x,t.y,t.z),this.syncCamera(),this.updateHUD()}}class lv{world;playerMaterial;blockBodies=new Map;blockShape;bedShape;constructor(){this.world=new ev,this.world.gravity.set(0,mt.GRAVITY,0),this.world.broadphase=new Oi(this.world),this.world.solver.iterations=5;const t=new qi("default"),e=new Wi(t,t,{friction:.1,restitution:0});this.world.addContactMaterial(e),this.world.defaultContactMaterial=e,this.playerMaterial=new qi("player");const n=new Wi(this.playerMaterial,t,{friction:0,restitution:0});this.world.addContactMaterial(n),this.blockShape=new Yn(new M(.5,.5,.5)),this.bedShape=new Yn(new M(.5,.5625/2,.5));const i=new dt({mass:0,shape:new Bg});i.quaternion.setFromEuler(-Math.PI/2,0,0),i.position.set(0,-50,0),this.world.addBody(i)}updateBlockBodies(t,e){const i=Math.floor(t.x),s=Math.floor(t.y),r=Math.floor(t.z),o=new Set;for(let a=i-3;a<=i+3;a++)for(let c=s-3-1;c<=s+3;c++)for(let h=r-3;h<=r+3;h++){const d=e.getBlock(a,c,h),u=_s[d];if(u&&u.isSolid){const m=`${a},${c},${h}`;if(o.add(m),!this.blockBodies.has(m)){let g=this.blockShape,f=.5;(d===D.BED_HEAD||d===D.BED_FOOT)&&(g=this.bedShape,f=.5625/2);const p=new dt({mass:0,shape:g,position:new M(a+.5,c+f,h+.5)});this.world.addBody(p),this.blockBodies.set(m,p)}}}for(const[a,c]of this.blockBodies.entries())o.has(a)||(this.world.removeBody(c),this.blockBodies.delete(a))}step(t){this.world.step(1/60,t,3);const e=document.getElementById("bodies-display");e&&(e.textContent=this.world.bodies.length.toString())}}class cv{overlay;modal;configBtn;keyButtons;invertClicksChk;enableShadowsChk;saveBtn;defaultBtn;closeBtn;tempConfig;activeBindingKey=null;globalKeydownListener=null;constructor(){this.overlay=document.getElementById("menu-overlay"),this.modal=document.getElementById("config-modal"),this.configBtn=document.getElementById("config-btn"),this.keyButtons={forward:document.getElementById("key-forward-btn"),backward:document.getElementById("key-backward-btn"),left:document.getElementById("key-left-btn"),right:document.getElementById("key-right-btn"),jump:document.getElementById("key-jump-btn"),place:document.getElementById("key-place-btn"),break:document.getElementById("key-break-btn")},this.invertClicksChk=document.getElementById("invert-clicks-chk"),this.enableShadowsChk=document.getElementById("enable-shadows-chk"),this.saveBtn=document.getElementById("config-save-btn"),this.defaultBtn=document.getElementById("config-default-btn"),this.closeBtn=document.getElementById("config-close-btn"),this.tempConfig={..._n.getConfig()},this.initEvents()}initEvents(){this.configBtn.addEventListener("click",()=>{this.openModal()}),this.keyButtons.forward.addEventListener("click",()=>this.startBinding("keyForward",this.keyButtons.forward)),this.keyButtons.backward.addEventListener("click",()=>this.startBinding("keyBackward",this.keyButtons.backward)),this.keyButtons.left.addEventListener("click",()=>this.startBinding("keyLeft",this.keyButtons.left)),this.keyButtons.right.addEventListener("click",()=>this.startBinding("keyRight",this.keyButtons.right)),this.keyButtons.jump.addEventListener("click",()=>this.startBinding("keyJump",this.keyButtons.jump)),this.keyButtons.place.addEventListener("click",()=>this.startBinding("keyPlaceBlock",this.keyButtons.place)),this.keyButtons.break.addEventListener("click",()=>this.startBinding("keyBreakBlock",this.keyButtons.break)),this.saveBtn.addEventListener("click",()=>{this.saveConfig()}),this.defaultBtn.addEventListener("click",()=>{this.loadDefaultConfig()}),this.closeBtn.addEventListener("click",()=>{this.closeModal()})}openModal(){this.tempConfig={..._n.getConfig()},this.updateUI(),this.modal.style.display="flex"}closeModal(){this.stopBinding(),this.modal.style.display="none"}updateUI(){this.keyButtons.forward.textContent=this.formatKeyName(this.tempConfig.keyForward),this.keyButtons.backward.textContent=this.formatKeyName(this.tempConfig.keyBackward),this.keyButtons.left.textContent=this.formatKeyName(this.tempConfig.keyLeft),this.keyButtons.right.textContent=this.formatKeyName(this.tempConfig.keyRight),this.keyButtons.jump.textContent=this.formatKeyName(this.tempConfig.keyJump),this.keyButtons.place.textContent=this.formatKeyName(this.tempConfig.keyPlaceBlock),this.keyButtons.break.textContent=this.formatKeyName(this.tempConfig.keyBreakBlock),this.invertClicksChk.checked=this.tempConfig.invertClicks,this.enableShadowsChk.checked=this.tempConfig.enableShadows}formatKeyName(t){return t.startsWith("Key")?t.substring(3):t.startsWith("Digit")?t.substring(5):t==="Space"?"Space":t}startBinding(t,e){this.stopBinding(),this.activeBindingKey=t,e.classList.add("waiting"),e.textContent="キーを入力...",this.globalKeydownListener=n=>{n.preventDefault(),n.stopPropagation();const i=n.code;if(i==="Escape"){this.stopBinding(),this.updateUI();return}this.activeBindingKey&&(this.tempConfig[this.activeBindingKey]=i),this.stopBinding(),this.updateUI()},window.addEventListener("keydown",this.globalKeydownListener,!0)}stopBinding(){this.globalKeydownListener&&(window.removeEventListener("keydown",this.globalKeydownListener,!0),this.globalKeydownListener=null),Object.values(this.keyButtons).forEach(t=>{t.classList.remove("waiting")}),this.activeBindingKey=null}saveConfig(){this.tempConfig.invertClicks=this.invertClicksChk.checked,this.tempConfig.enableShadows=this.enableShadowsChk.checked,_n.save(this.tempConfig),this.closeModal(),this.updateInstructionsUI(),window.dispatchEvent(new CustomEvent("config-changed"))}loadDefaultConfig(){const t={keyForward:"KeyW",keyBackward:"KeyS",keyLeft:"KeyA",keyRight:"KeyD",keyJump:"Space",keyPlaceBlock:"KeyV",keyBreakBlock:"KeyB",invertClicks:!1,enableShadows:!0};this.tempConfig={...t},this.updateUI()}updateInstructionsUI(){const t=_n.getConfig(),e=this.overlay.querySelectorAll(".key-badge");e.length>=5&&(e[0].textContent=this.formatKeyName(t.keyForward),e[1].textContent=this.formatKeyName(t.keyLeft),e[2].textContent=this.formatKeyName(t.keyBackward),e[3].textContent=this.formatKeyName(t.keyRight),e[4].textContent=this.formatKeyName(t.keyJump));const n=this.overlay.querySelector("#click-break-badge"),i=this.overlay.querySelector("#key-break-badge");n&&i&&(n.textContent=t.invertClicks?"右クリック":"左クリック",i.textContent=this.formatKeyName(t.keyBreakBlock));const s=this.overlay.querySelector("#click-place-badge"),r=this.overlay.querySelector("#key-place-badge");s&&r&&(s.textContent=t.invertClicks?"左クリック":"右クリック",r.textContent=this.formatKeyName(t.keyPlaceBlock))}}class hv{time=0;timeScale=.01;sunLight;ambientLight;scene;skyColor=new Ht;sunColor=new Ht;ambientColor=new Ht;constructor(t){this.scene=t,this.scene.background=this.skyColor;const e=_n.getConfig();this.sunLight=new Am(16777215,1.2),this.sunLight.castShadow=e.enableShadows,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=80;const n=30;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.ambientLight=new Cm(16777215,.4),this.scene.add(this.ambientLight)}update(t,e){const n=this.time*Math.PI*2,i=Math.sin(n);let s=1;i>-.1?s=.35:s=2.5,this.time=(this.time+this.timeScale*s*t)%1;const r=this.time*Math.PI*2,o=Math.sin(r),a=Math.cos(r);this.sunLight.position.set(e.x+a*40,e.y+o*40,e.z+a*20),this.sunLight.target.position.copy(e),this.sunLight.target.updateMatrixWorld();const c=Math.max(0,Math.min(1,o*2+.5)),h=Qe.lerp(.02,.45,c),d=Qe.lerp(.03,.65,c),u=Qe.lerp(.08,.95,c);this.skyColor.setRGB(h,d,u);const m=Qe.lerp(0,1.2,c);this.sunLight.intensity=m;const g=Qe.lerp(.1,1,c),f=Qe.lerp(.1,.95,c),p=Qe.lerp(.2,.85,c);this.sunColor.setRGB(g,f,p),this.sunLight.color.copy(this.sunColor);const _=Qe.lerp(.22,.45,c);this.ambientLight.intensity=_;const v=Qe.lerp(.15,1,c),x=Qe.lerp(.18,1,c),y=Qe.lerp(.35,1,c);this.ambientColor.setRGB(v,x,y),this.ambientLight.color.copy(this.ambientColor)}setShadowsEnabled(t){this.sunLight.castShadow=t}isNight(){const t=this.time*Math.PI*2;return Math.sin(t)<-.1}}const uv={[D.GROUND]:4906624,[D.DIRT]:8736014,[D.STONE]:10265519,[D.WOOD]:7877903,[D.LEAVES]:2278750,[D.PLANK]:16096779,[D.BRICK]:15680580,[D.SAND]:16707722,[D.COAL_ORE]:3621201,[D.TORCH]:16347926,[D.GLASS]:14742270,[D.DOOR_CLOSED]:11817737,[D.SWORD]:13421772};class ci{blockType;mesh;body;scene;physicsWorld;age=0;isAttracted=!1;static sharedGeometry=new Qt(.2,.2,.2);static materialPool=new Map;static tempVec3=new H;static tempVec3_2=new H;constructor(t,e,n,i,s){this.blockType=t,this.scene=n,this.physicsWorld=i;let r=ci.materialPool.get(t);if(!r){const a=uv[t]||16777215;r=new ve({color:a,roughness:.8,metalness:.1}),ci.materialPool.set(t,r)}this.mesh=new Dt(ci.sharedGeometry,r),this.mesh.position.copy(e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh);const o=new Yn(new M(.1,.1,.1));if(this.body=new dt({mass:1,shape:o,position:new M(e.x,e.y,e.z)}),s){const a=s.clone().sub(e),c=a.length();a.normalize(),a.y+=.5,a.normalize();const h=Math.min(Math.max(c*2,4),15);this.body.velocity.set(a.x*h,a.y*h,a.z*h),this.body.linearDamping=.1}else this.body.velocity.set((Math.random()-.5)*4,Math.random()*4+2,(Math.random()-.5)*4);this.physicsWorld.addBody(this.body)}update(t,e){if(this.age+=t,this.age>mt.ITEM_DESPAWN_TIME)return this.destroy(),!0;const n=ci.tempVec3.set(this.body.position.x,this.body.position.y,this.body.position.z),i=n.distanceTo(e);if(i<mt.ITEM_PICKUP_RADIUS){this.isAttracted=!0,this.body.world&&this.physicsWorld.removeBody(this.body);const s=ci.tempVec3_2.copy(e).sub(n).normalize();if(n.add(s.multiplyScalar(22*t)),this.mesh.position.copy(n),i<.5)return this.destroy(),!0}else this.isAttracted?(this.isAttracted=!1,this.body.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z),this.body.velocity.set(0,0,0),this.physicsWorld.addBody(this.body)):(this.mesh.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.mesh.rotation.x+=t*2,this.mesh.rotation.y+=t*1.5);return!1}destroy(){this.mesh&&this.scene.remove(this.mesh),this.body.world&&this.physicsWorld.removeBody(this.body)}}class Me{mesh;body;hp=4;scene;physicsWorld;head;leftLeg;rightLeg;speed=3;jumpForce=6;attackCooldown=0;damageFlashTime=0;static sharedHeadGeo=new Qt(.4,.4,.4);static sharedBodyGeo=new Qt(.4,.6,.2);static sharedLimbGeo=new Qt(.2,.6,.2);static zombieGreenMat=new ve({color:5614165,roughness:.9});static zombieBlueMat=new ve({color:3362408,roughness:.9});static zombiePurpleMat=new ve({color:4729947,roughness:.9});static damageMat=new ve({color:16724787,roughness:.5});static tempVec3=new H;static tempDirection=new H;constructor(t,e,n){this.scene=e,this.physicsWorld=n;const i=.35,s=.9,r=new Yn(new M(i,s,i));this.body=new dt({mass:50,shape:r,position:new M(t.x,t.y+s,t.z),fixedRotation:!0,linearDamping:.1}),this.physicsWorld.addBody(this.body),this.mesh=new we,this.buildAvatar(),this.scene.add(this.mesh)}buildAvatar(){const t=Me.zombieGreenMat,e=Me.zombieBlueMat,n=Me.zombieGreenMat,i=Me.zombiePurpleMat;this.head=new Dt(Me.sharedHeadGeo,t),this.head.position.y=.5,this.head.castShadow=!0,this.head.receiveShadow=!0,this.mesh.add(this.head);const s=new Dt(Me.sharedBodyGeo,e);s.position.y=0,s.castShadow=!0,s.receiveShadow=!0,this.mesh.add(s);const r=Me.sharedLimbGeo.clone();r.translate(0,-.3,0);const o=new we,a=new Dt(r,n);a.castShadow=!0,a.receiveShadow=!0,o.add(a),o.position.set(.3,.3,0),o.rotation.x=-Math.PI/2,this.mesh.add(o);const c=new we,h=new Dt(r,n);h.castShadow=!0,h.receiveShadow=!0,c.add(h),c.position.set(-.3,.3,0),c.rotation.x=-Math.PI/2,this.mesh.add(c),this.leftLeg=new we;const d=new Dt(r,i);d.castShadow=!0,d.receiveShadow=!0,this.leftLeg.add(d),this.leftLeg.position.set(.1,-.3,0),this.mesh.add(this.leftLeg),this.rightLeg=new we;const u=new Dt(r,i);u.castShadow=!0,u.receiveShadow=!0,this.rightLeg.add(u),this.rightLeg.position.set(-.1,-.3,0),this.mesh.add(this.rightLeg)}update(t,e){const n=e.position,s=Me.tempVec3.set(this.body.position.x,this.body.position.y,this.body.position.z).distanceTo(n);if(s>mt.MOB_DESPAWN_RADIUS)return this.destroy(),!0;if(this.damageFlashTime>0&&(this.damageFlashTime-=t,this.damageFlashTime<=0&&this.setMaterials(!1)),e.hp>0?this.runAI(t,n,s,e):(this.body.velocity.x*=.8,this.body.velocity.z*=.8),this.mesh.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z>.1){const o=performance.now()*.01,a=Math.sin(o)*.8;this.leftLeg.rotation.x=-a,this.rightLeg.rotation.x=a}else this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0;return!1}runAI(t,e,n,i){const s=Me.tempDirection.set(e.x-this.body.position.x,0,e.z-this.body.position.z);s.normalize();const r=Math.atan2(s.x,s.z);if(this.mesh.rotation.y=r,n<mt.MOB_SPAWN_RADIUS){this.body.velocity.x=s.x*this.speed,this.body.velocity.z=s.z*this.speed;const o=this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z,a=this.speed*this.speed,c=o<a*.25,h=Math.abs(this.body.velocity.y)<.02;c&&h&&(this.body.velocity.y=this.jumpForce)}else this.body.velocity.x*=.8,this.body.velocity.z*=.8;this.attackCooldown>0&&(this.attackCooldown-=t),n<1.3&&this.attackCooldown<=0&&(i.takeDamage(2),this.attackCooldown=1.2)}takeDamage(t,e){return this.hp-=t,this.damageFlashTime=.2,this.setMaterials(!0),ke.playHit(),this.body.velocity.y=4,this.body.velocity.x=e.x*6,this.body.velocity.z=e.z*6,this.hp<=0?(this.destroy(),!0):!1}setMaterials(t){this.mesh.traverse(e=>{e instanceof Dt&&(t?e.material=Me.damageMat:e===this.head||e.parent===this.head?e.material=Me.zombieGreenMat:e.name==="hair"?e.material=new ve({color:5913896,roughness:.9}):e.position.y===0?e.material=Me.zombieBlueMat:e.position.y===-.3||e.parent?.position.y===-.3?e.material=Me.zombiePurpleMat:e.material=Me.zombieGreenMat)})}destroy(){this.mesh&&this.scene.remove(this.mesh),this.body.world&&this.physicsWorld.removeBody(this.body)}}class dv{player;world;accountId=null;worldId="shared_world_1";autoSaveInterval=null;isSaving=!1;onSaveCustomData;onLoadCustomData;constructor(t,e){this.player=t,this.world=e}setAccountId(t){this.accountId=t}getAccountId(){return this.accountId}setWorldId(t){this.worldId=t||"shared_world_1"}async loadData(){if(!this.accountId)return console.error("Account ID is not set."),!1;try{this.showToast("データをロード中...");const e=await(await fetch(`${mt.GAS_WEB_APP_URL}?accountId=${encodeURIComponent(this.accountId)}&worldId=${encodeURIComponent(this.worldId)}`)).json();if(e.worldData&&this.world.setModifiedBlocksData(e.worldData),e.playerData)this.player.loadSaveData(e.playerData),this.onLoadCustomData&&e.playerData.customData&&this.onLoadCustomData(e.playerData.customData);else{const i=Math.floor(Math.random()*300*2)-300+100,s=Math.floor(Math.random()*300*2)-300+100;this.player.position.set(i,30,s),this.player.body.position.set(i,30,s),this.player.body.velocity.set(0,0,0),this.player.spawnPosition.set(i,30,s)}return this.world.clearAndRebuild(this.player.position.x,this.player.position.z),this.showToast("ロードが完了しました"),!0}catch(t){return console.error("Failed to load data:",t),this.showToast("ロードに失敗しました",!0),!1}}async saveData(){if(!this.accountId)return console.error("Account ID is not set."),!1;if(this.isSaving)return!1;this.isSaving=!0;try{this.showToast("セーブ中...");const t=this.world.getModifiedBlocksData(),e=this.player.getSaveData();this.onSaveCustomData&&(e.customData=this.onSaveCustomData());const n={accountId:this.accountId,worldId:this.worldId,worldData:t,playerData:e},s=await(await fetch(mt.GAS_WEB_APP_URL,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(n)})).json();if(this.isSaving=!1,s.success)return this.showToast("セーブしました"),!0;throw new Error(s.error)}catch(t){return console.error("Failed to save data:",t),this.showToast("セーブに失敗しました",!0),this.isSaving=!1,!1}}startAutoSave(t=3){this.stopAutoSave(),this.autoSaveInterval=window.setInterval(()=>{this.accountId&&this.saveData()},t*60*1e3)}stopAutoSave(){this.autoSaveInterval!==null&&(window.clearInterval(this.autoSaveInterval),this.autoSaveInterval=null)}showToast(t,e=!1){const n=document.getElementById("save-toast");n&&(n.textContent=t,n.style.backgroundColor=e?"rgba(220, 53, 69, 0.9)":"rgba(40, 167, 69, 0.9)",n.style.opacity="1",n.style.transform="translateY(0)",setTimeout(()=>{n.style.opacity="0",n.style.transform="translateY(-20px)"},3e3))}}const cn=new Lm("canvas-container"),ps=new lv,Ue=new zm(document.body),Nt=new Ye(cn.camera,new H(8,5,8),ps,cn.scene),ao=new hv(cn.scene),In=[],je=[],Ve={[D.AIR]:0,[D.GROUND]:64,[D.DIRT]:64,[D.STONE]:64,[D.WOOD]:64,[D.LEAVES]:64,[D.PLANK]:64,[D.BRICK]:64,[D.SAND]:64,[D.COAL_ORE]:64,[D.TORCH]:64,[D.GLASS]:64,[D.DOOR_CLOSED]:64,[D.DOOR_OPEN]:0,[D.SWORD]:1,[D.STAIRS]:64,[D.FENCE]:64,[D.BED_HEAD]:64,[D.BED_FOOT]:0,[D.FURNACE]:64,[D.CHEST]:64,[D.WATER]:64,[D.DIAMOND_SWORD]:1,[D.HAMMER]:1,[D.BEDROCK]:0,[D.IRON_ORE]:64,[D.GOLD_ORE]:64,[D.DIAMOND_ORE]:64},fv=new cv;fv.updateInstructionsUI();const hl=document.getElementById("respawn-btn");hl&&hl.addEventListener("click",()=>{Nt.respawn(),Ue.requestLock(),ke.init(),er||(er=!0,requestAnimationFrame(wo))});let ee=D.GROUND,jn=0;const $e=[[D.GROUND,D.DIRT,D.STONE,D.WOOD,D.LEAVES,D.PLANK,D.BRICK,D.SAND,D.TORCH],[D.GLASS,D.DOOR_CLOSED,D.COAL_ORE,D.DIAMOND_SWORD,D.HAMMER,D.STAIRS,D.FENCE,D.BED_HEAD,D.FURNACE]];let Je=0,Bn=$e[Je];const Ql=document.querySelectorAll(".hotbar-slot"),ul=document.getElementById("hotbar-label");function Mo(l){switch(l){case D.GROUND:return"slot-grass";case D.DIRT:return"slot-dirt";case D.STONE:return"slot-stone";case D.WOOD:return"slot-wood";case D.LEAVES:return"slot-leaves";case D.PLANK:return"slot-plank";case D.BRICK:return"slot-brick";case D.SAND:return"slot-sand";case D.TORCH:return"slot-torch";case D.GLASS:return"slot-glass";case D.DOOR_CLOSED:return"slot-door";case D.COAL_ORE:return"slot-coal";case D.STAIRS:return"slot-stairs";case D.FENCE:return"slot-fence";case D.BED_HEAD:return"slot-bed";case D.FURNACE:return"slot-furnace";case D.CHEST:return"slot-chest";case D.WATER:return"slot-water";case D.SWORD:return"slot-sword";case D.DIAMOND_SWORD:return"slot-diamond-sword";case D.HAMMER:return"slot-hammer";default:return""}}function bn(){Ql.forEach((t,e)=>{const n=Bn[e];t.setAttribute("data-block",n.toString());const i=t.querySelector(".slot-icon");if(i){i.className="slot-icon";const r=Mo(n);r&&i.classList.add(r)}const s=document.getElementById(`count-${e}`);s&&(s.textContent=(Ve[n]||0).toString())});const l=document.getElementById("hotbar-page-indicator");l&&(l.textContent=(Je+1).toString()),tr(jn)}bn();function tr(l){l<0||l>=Bn.length||(jn=l,ee=Bn[l],Ql.forEach((t,e)=>{e===l?t.classList.add("active"):t.classList.remove("active")}),ul&&(ul.textContent=_s[ee].name))}const Ot=new Nm(cn.scene);Nt.setWorld(Ot);const Re=new dv(Nt,Ot);Re.onSaveCustomData=()=>({inventory:{blocks:Ve,hotbarPages:$e,activePage:Je,activeSlotIndex:jn}});Re.onLoadCustomData=l=>{if(l&&l.inventory){const t=l.inventory;t.blocks&&Object.assign(Ve,t.blocks),t.hotbarPages&&($e[0]=[...t.hotbarPages[0]],$e[1]=[...t.hotbarPages[1]]),typeof t.activePage=="number"&&(Je=t.activePage,Bn=$e[Je]),typeof t.activeSlotIndex=="number"&&(jn=t.activeSlotIndex),bn()}};const pv=yv();pv?Ot.clearAndRebuild(Nt.position.x,Nt.position.z):Ot.generateWorldAround(Nt.position.x,Nt.position.z);const on=document.getElementById("account-id-input"),Fn=document.getElementById("world-id-input");function rr(l){const t=document.getElementById("account-id-list");if(!t)return;let e=[];try{const i=localStorage.getItem("maikurafu_account_ids");i&&(e=JSON.parse(i))}catch{}l&&!e.includes(l)&&(e.push(l),localStorage.setItem("maikurafu_account_ids",JSON.stringify(e)));const n=i=>{t.innerHTML="",i.forEach(s=>{const r=document.createElement("option");r.value=s,t.appendChild(r)})};n(e);{const i=Fn&&Fn.value.trim()||"shared_world_1";fetch(`${mt.GAS_WEB_APP_URL}?action=listAccounts&worldId=${encodeURIComponent(i)}`).then(s=>s.json()).then(s=>{if(s.accounts&&Array.isArray(s.accounts)){let r=!1;s.accounts.forEach(o=>{e.includes(o)||(e.push(o),r=!0)}),r&&(localStorage.setItem("maikurafu_account_ids",JSON.stringify(e)),n(e))}}).catch(s=>console.warn("Failed to fetch accounts from server:",s))}}rr();const Yr=new Tm,dl=6;function mv(){const l=document.getElementById("hp-container");if(l){const t=mt.PLAYER_MAX_HP,e=Nt.hp;let n="";for(let i=1;i<=t;i++)n+=i<=e?"❤":"🖤";l.textContent=n}}function Zs(l,t,e){if(In.length>=mt.MAX_DROPPED_ITEMS){const i=In.shift();i&&i.destroy()}const n=new ci(l,t,cn.scene,ps.world,e);In.push(n)}const as=new H,js=new H;let jr=0,Kr=0,fl=0;function wo(l){requestAnimationFrame(wo);const t=Math.min((l-fl)/1e3,.1);if(fl=l,ps.updateBlockBodies(Nt.position,Ot),ps.step(t),Nt.update(Ue,t,Ot,ee),ao.update(t,Nt.position),Ue.consumeJustPressed("Tab")&&(Je=1-Je,Bn=$e[Je],bn()),Ue.consumeJustPressed("KeyE")&&(xn&&xn.style.display==="flex"?ec():_v()),Ue.consumeJustPressed("KeyQ")&&Ve[ee]>0){Ve[ee]--,bn();const n=mt.PLAYER_HEIGHT/2-.2;js.copy(Nt.position),js.y+=n,as.set(0,0,-1).applyQuaternion(cn.camera.quaternion),js.addScaledVector(as,.8),Zs(ee,js);const i=In[In.length-1];i&&i.body.velocity.set(as.x*6+(Math.random()-.5)*.5,as.y*6+2,as.z*6+(Math.random()-.5)*.5)}for(let n=In.length-1;n>=0;n--){const i=In[n],s=i.update(t,Nt.position);i.mesh.position.distanceTo(Nt.position)<1.2?(Ve[i.blockType]=(Ve[i.blockType]||0)+1,bn(),ke.playPickup(),i.destroy(),In.splice(n,1)):s&&In.splice(n,1)}if(ao.isNight()){if(jr+=t,jr>2&&(jr=0,je.length<mt.MAX_MOBS)){const n=mt.MOB_SPAWN_RADIUS,i=Math.random()*Math.PI*2,s=12+Math.random()*(n-12),r=Math.floor(Nt.position.x+Math.cos(i)*s),o=Math.floor(Nt.position.z+Math.sin(i)*s);let a=0,c=!1;for(let h=15;h>=-10;h--)if(Ot.getBlock(r,h,o)!==D.AIR){a=h+1,c=!0;break}if(c){const h=new Me(new H(r,a,o),cn.scene,ps.world);je.push(h)}}}else for(let n=je.length-1;n>=0;n--)je[n].destroy(),je.splice(n,1);for(let n=je.length-1;n>=0;n--)je[n].update(t,Nt)&&je.splice(n,1);mv(),Ue.isLocked&&Ot.generateWorldAround(Nt.position.x,Nt.position.z),Kr+=t,Kr>5&&(Kr=0,So());const e=_n.getConfig();Ue.consumeJustPressed(e.keyPlaceBlock)&&lo(!1,!0),Ue.consumeJustPressed(e.keyBreakBlock)&&lo(!0,!1),cn.render()}function lo(l,t){if(!l&&!t)return;Yr.setFromCamera(new qt(0,0),Nt.camera);const e=Ot.getChunkMeshes(),n=Yr.intersectObjects(e);if(n.length>0){const i=n[0];if(i.distance>dl)return;const s=i.point,r=i.face?.normal;if(!r)return;if(l){Nt.swing(),ke.playSwing();const o=[];je.forEach(g=>{g.mesh.traverse(f=>{f instanceof Dt&&o.push(f)})});const a=Yr.intersectObjects(o);if(a.length>0&&a[0].distance<dl){const g=a[0].object;let f=null;for(const p of je){let _=!1;if(p.mesh.traverse(v=>{v===g&&(_=!0)}),_){f=p;break}}if(f){const p=new H(0,0,-1).applyQuaternion(cn.camera.quaternion);p.y=.2,p.normalize();const _=ee===D.DIAMOND_SWORD?6:ee===D.HAMMER?5:ee===D.SWORD?4:2;if(f.takeDamage(_,p)){const x=Math.random()<.4?D.COAL_ORE:D.STONE;Zs(x,new H(f.body.position.x,f.body.position.y,f.body.position.z),Nt.position);const y=je.indexOf(f);y>-1&&je.splice(y,1)}return}}const c=s.clone().sub(r.clone().multiplyScalar(.1)),h=Math.floor(c.x),d=Math.floor(c.y),u=Math.floor(c.z),m=Ot.getBlock(h,d,u);if(m!==D.AIR){if(m===D.BEDROCK)return;if(Ot.setBlock(h,d,u,D.AIR),ke.playBreak(m),m===D.DOOR_CLOSED||m===D.DOOR_OPEN){const g=Ot.getBlock(h,d+1,u);(g===D.DOOR_CLOSED||g===D.DOOR_OPEN)&&Ot.setBlock(h,d+1,u,D.AIR);const f=Ot.getBlock(h,d-1,u);(f===D.DOOR_CLOSED||f===D.DOOR_OPEN)&&(Ot.setBlock(h,d-1,u,D.AIR),Ot.removeDoorOrientation(h,d-1,u)),Ot.removeDoorOrientation(h,d,u)}if(m===D.BED_HEAD||m===D.BED_FOOT){const g=m===D.BED_HEAD?D.BED_FOOT:D.BED_HEAD,f=[[h+1,u],[h-1,u],[h,u+1],[h,u-1]];for(const[p,_]of f)if(Ot.getBlock(p,d,_)===g){Ot.setBlock(p,d,_,D.AIR);break}Zs(D.BED_HEAD,new H(h+.5,d+.5,u+.5),Nt.position)}else m!==D.DOOR_OPEN&&Zs(m,new H(h+.5,d+.5,u+.5),Nt.position)}}else if(t){if(ee===D.SWORD||ee===D.DIAMOND_SWORD||ee===D.HAMMER)return;const o=s.clone().sub(r.clone().multiplyScalar(.1)),a=Math.floor(o.x),c=Math.floor(o.y),h=Math.floor(o.z),d=Ot.getBlock(a,c,h);if(d===D.DOOR_CLOSED){Ot.setBlock(a,c,h,D.DOOR_OPEN),Ot.getBlock(a,c+1,h)===D.DOOR_CLOSED&&Ot.setBlock(a,c+1,h,D.DOOR_OPEN),ke.playPlace(D.DOOR_OPEN);return}else if(d===D.DOOR_OPEN){Ot.setBlock(a,c,h,D.DOOR_CLOSED),Ot.getBlock(a,c+1,h)===D.DOOR_OPEN&&Ot.setBlock(a,c+1,h,D.DOOR_CLOSED),ke.playPlace(D.DOOR_CLOSED);return}if(Ve[ee]<=0)return;const u=s.clone().add(r.clone().multiplyScalar(.1)),m=Math.floor(u.x),g=Math.floor(u.y),f=Math.floor(u.z),p=mt.PLAYER_HEIGHT/2,_=Math.floor(Nt.position.x),v=Math.floor(Nt.position.y-p),x=Math.floor(Nt.position.z),y=m===_&&f===x&&(g===v||g===v+1),w=m===_&&f===x&&g===v,S=m===_&&f===x&&g===v+1,C=ee===D.TORCH,b=ee===D.DOOR_CLOSED,A=ee===D.BED_HEAD;if(C||!y||w||S){if(b){Ot.setBlock(m,g,f,D.DOOR_CLOSED);const P=Nt.getYaw(),G=Math.abs(Math.sin(P))<.707?"NS":"EW";Ot.setDoorOrientation(m,g,f,G),Ot.getBlock(m,g+1,f)===D.AIR&&(Ot.setBlock(m,g+1,f,D.DOOR_CLOSED),Ot.setDoorOrientation(m,g+1,f,G)),ke.playPlace(ee),Ve[ee]--,bn()}else if(A){Ot.setBlock(m,g,f,D.BED_HEAD);const P=Nt.getYaw();let k=0,G=0;const L=-Math.sin(P),I=-Math.cos(P);Math.abs(L)>Math.abs(I)?k=Math.sign(L):G=Math.sign(I);const N=m+k,z=f+G;Ot.getBlock(N,g,z)===D.AIR&&Ot.setBlock(N,g,z,D.BED_FOOT),ke.playPlace(ee),Ve[D.BED_HEAD]--,bn()}else Ot.setBlock(m,g,f,ee),ke.playPlace(ee),Ve[ee]--,bn();w&&(Nt.body.position.y=g+1+p+.05,Nt.position.y=Nt.body.position.y,Nt.body.velocity.y<0&&(Nt.body.velocity.y=0))}}}}window.addEventListener("mousedown",l=>{if(!Ue.isLocked)return;const t=_n.getConfig(),e=l.button===0,n=l.button===2,i=t.invertClicks?n:e,s=t.invertClicks?e:n;lo(i,s)});window.addEventListener("contextmenu",l=>{l.preventDefault()});const Ii=document.getElementById("start-btn"),gv=document.getElementById("menu-overlay");let er=!1;if(Ii&&gv){Ii.addEventListener("click",async()=>{if(Fn&&Fn.value.trim()!==""&&Re.setWorldId(Fn.value.trim()),on&&on.value.trim()!==""){const e=on.value.trim();Re.setAccountId(e),rr(e),Ii.textContent="データをロード中...",Ii.setAttribute("disabled","true"),await Re.loadData(),Ii.textContent="ゲームスタート",Ii.removeAttribute("disabled"),Re.startAutoSave(3)}else Re.setAccountId(""),Re.stopAutoSave();Ue.requestLock(),ke.init(),er||(er=!0,requestAnimationFrame(wo))});const l=document.getElementById("hotbar"),t=document.getElementById("hud");document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===document.body?(l&&(l.style.display="flex"),t&&(t.style.display="block"),xn&&(xn.style.display="none")):xn&&xn.style.display==="flex"||(l&&(l.style.display="none"),t&&(t.style.display="none"),So(),on&&on.value.trim()!==""&&Re.saveData().catch(n=>console.error("Cloud save failed:",n)))})}window.addEventListener("keydown",l=>{if(Ue.isLocked&&l.code.startsWith("Digit")){const t=parseInt(l.code.substring(5));t>=1&&t<=9&&tr(t-1)}});window.addEventListener("wheel",l=>{if(Ue.isLocked){if(l.deltaY>0){const t=(jn+1)%Bn.length;tr(t)}else if(l.deltaY<0){const t=(jn-1+Bn.length)%Bn.length;tr(t)}}},{passive:!0});window.addEventListener("config-changed",()=>{const l=_n.getConfig();cn.renderer.shadowMap.enabled=l.enableShadows,ao.setShadowsEnabled(l.enableShadows),cn.scene.traverse(t=>{t instanceof Dt&&t.material&&(Array.isArray(t.material)?t.material.forEach(e=>{e.needsUpdate=!0}):t.material.needsUpdate=!0)})});const xn=document.getElementById("inventory-modal"),Zr=document.getElementById("inventory-item-list"),$r=document.getElementById("inventory-hotbar-slots"),pl=document.getElementById("inventory-close-btn");let xs=null;const vv=[D.GROUND,D.DIRT,D.STONE,D.WOOD,D.LEAVES,D.PLANK,D.BRICK,D.SAND,D.COAL_ORE,D.TORCH,D.GLASS,D.DOOR_CLOSED,D.STAIRS,D.SWORD,D.FENCE,D.BED_HEAD,D.FURNACE,D.CHEST,D.WATER,D.DIAMOND_SWORD,D.HAMMER,D.BEDROCK,D.IRON_ORE,D.GOLD_ORE,D.DIAMOND_ORE];function tc(){const l=Nt.armorType;document.querySelectorAll(".armor-btn").forEach(e=>{e.getAttribute("data-armor")===l?e.classList.add("active"):e.classList.remove("active")})}function _v(){xn&&(document.exitPointerLock(),xn.style.display="flex",xs=null,nc(),ic(),tc())}function ec(){xn&&(xn.style.display="none",Ue.requestLock())}pl&&pl.addEventListener("click",ec);const xv=document.querySelectorAll(".armor-btn");xv.forEach(l=>{l.addEventListener("click",()=>{const t=l.getAttribute("data-armor");t&&(Nt.setArmor(t),tc())})});function nc(){Zr&&(Zr.innerHTML="",vv.forEach(l=>{const t=_s[l],e=document.createElement("div");e.className="inventory-item",xs===l&&e.classList.add("selected");const n=document.createElement("div");n.className=`slot-icon ${Mo(l)}`,e.appendChild(n);const i=document.createElement("div");i.className="item-name",i.textContent=t.name,e.appendChild(i),e.addEventListener("click",()=>{xs=l,nc()}),Zr.appendChild(e)}))}function ic(){$r&&($r.innerHTML="",$e.forEach((l,t)=>{l.forEach((e,n)=>{const i=document.createElement("div");i.className="inventory-hotbar-slot",t===Je&&(i.style.borderColor="rgba(255, 255, 255, 0.4)",i.style.background="rgba(255, 255, 255, 0.05)");const s=document.createElement("div");s.className=`slot-icon ${Mo(e)}`,i.appendChild(s);const r=document.createElement("div");r.className="slot-num",r.textContent=(n+1).toString(),i.appendChild(r),i.addEventListener("click",()=>{xs!==null&&($e[t][n]=xs,bn(),ic())}),$r.appendChild(i)})}))}function yv(){const l=localStorage.getItem("maikurafu_autosave");if(!l)return!1;try{const t=JSON.parse(l);if(t.player&&Nt.loadSaveData(t.player),t.inventory){const e=t.inventory;e.blocks&&Object.assign(Ve,e.blocks),e.hotbarPages&&($e[0]=[...e.hotbarPages[0]],$e[1]=[...e.hotbarPages[1]]),typeof e.activePage=="number"&&(Je=e.activePage,Bn=$e[Je]),typeof e.activeSlotIndex=="number"&&(jn=e.activeSlotIndex),bn()}return t.world&&Ot.setModifiedBlocksData(t.world),console.log("Game auto-saved state successfully loaded from localStorage."),!0}catch(t){return console.warn("Failed to parse autosave data:",t),!1}}function So(){const l={version:"1.0.0",timestamp:Date.now(),player:Nt.getSaveData(),inventory:{blocks:Ve,hotbarPages:$e,activePage:Je,activeSlotIndex:jn},world:Ot.getModifiedBlocksData()};localStorage.setItem("maikurafu_autosave",JSON.stringify(l)),console.log("Game auto-saved to localStorage.")}const ii=document.getElementById("cloud-save-btn"),si=document.getElementById("cloud-load-btn");ii&&ii.addEventListener("click",async()=>{if(on&&on.value.trim()!==""){const l=on.value.trim();Re.setAccountId(l),rr(l),Fn&&Re.setWorldId(Fn.value.trim()),So();const t=ii.textContent;ii.textContent="セーブ中...",ii.setAttribute("disabled","true"),await Re.saveData(),ii.textContent=t,ii.removeAttribute("disabled")}else alert("アカウントIDを入力してください")});si&&si.addEventListener("click",async()=>{if(on&&on.value.trim()!==""){const l=on.value.trim();Re.setAccountId(l),rr(l),Fn&&Re.setWorldId(Fn.value.trim());const t=si.textContent;si.textContent="ロード中...",si.setAttribute("disabled","true"),await Re.loadData(),si.textContent=t,si.removeAttribute("disabled")}else alert("アカウントIDを入力してください")});

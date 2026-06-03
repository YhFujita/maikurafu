(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eo="150",nc=0,xo=1,ic=2,cl=1,hl=2,es=3,Wn=0,Oe=1,Dn=2,Gn=0,Pi=1,yo=2,Mo=3,wo=4,sc=5,Ci=100,rc=101,oc=102,bo=103,So=104,ac=200,lc=201,cc=202,hc=203,ul=204,dl=205,uc=206,dc=207,fc=208,pc=209,mc=210,gc=0,vc=1,_c=2,Hr=3,xc=4,yc=5,Mc=6,wc=7,fl=0,bc=1,Sc=2,zn=0,Ec=1,Ac=2,Tc=3,Cc=4,Lc=5,pl=300,zi=301,Ni=302,qr=303,Xr=304,Ks=306,jr=1e3,Be=1001,Yr=1002,fe=1003,Eo=1004,nr=1005,He=1006,Rc=1007,ls=1008,ai=1009,Pc=1010,Dc=1011,ml=1012,Ic=1013,si=1014,ri=1015,cs=1016,zc=1017,Nc=1018,Di=1020,Fc=1021,Qe=1023,Bc=1024,Oc=1025,oi=1026,Fi=1027,kc=1028,Uc=1029,Gc=1030,Vc=1031,Wc=1033,ir=33776,sr=33777,rr=33778,or=33779,Ao=35840,To=35841,Co=35842,Lo=35843,Hc=36196,Ro=37492,Po=37496,Do=37808,Io=37809,zo=37810,No=37811,Fo=37812,Bo=37813,Oo=37814,ko=37815,Uo=37816,Go=37817,Vo=37818,Wo=37819,Ho=37820,qo=37821,ar=36492,qc=36283,Xo=36284,jo=36285,Yo=36286,li=3e3,qt=3001,Xc=3200,jc=3201,gl=0,Yc=1,fn="srgb",hs="srgb-linear",vl="display-p3",lr=7680,Kc=519,Ko=35044,Zo="300 es",Kr=1035;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $o=1234567;const ss=Math.PI/180,Hs=180/Math.PI;function ki(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[a&255]+me[a>>8&255]+me[a>>16&255]+me[a>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function Le(a,t,e){return Math.max(t,Math.min(e,a))}function no(a,t){return(a%t+t)%t}function Zc(a,t,e,n,i){return n+(a-t)*(i-n)/(e-t)}function $c(a,t,e){return a!==t?(e-a)/(t-a):0}function rs(a,t,e){return(1-e)*a+e*t}function Jc(a,t,e,n){return rs(a,t,1-Math.exp(-e*n))}function Qc(a,t=1){return t-Math.abs(no(a,t*2)-t)}function th(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*(3-2*a))}function eh(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*a*(a*(a*6-15)+10))}function nh(a,t){return a+Math.floor(Math.random()*(t-a+1))}function ih(a,t){return a+Math.random()*(t-a)}function sh(a){return a*(.5-Math.random())}function rh(a){a!==void 0&&($o=a);let t=$o+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function oh(a){return a*ss}function ah(a){return a*Hs}function Zr(a){return(a&a-1)===0&&a!==0}function lh(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function _l(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function ch(a,t,e,n,i){const s=Math.cos,r=Math.sin,o=s(e/2),l=r(e/2),c=s((t+n)/2),h=r((t+n)/2),d=s((t-n)/2),u=r((t-n)/2),m=s((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":a.set(o*h,l*d,l*u,o*c);break;case"YZY":a.set(l*u,o*h,l*d,o*c);break;case"ZXZ":a.set(l*d,l*u,o*h,o*c);break;case"XZX":a.set(o*h,l*g,l*m,o*c);break;case"YXY":a.set(l*m,o*h,l*g,o*c);break;case"ZYZ":a.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ns(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ce(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Ye={DEG2RAD:ss,RAD2DEG:Hs,generateUUID:ki,clamp:Le,euclideanModulo:no,mapLinear:Zc,inverseLerp:$c,lerp:rs,damp:Jc,pingpong:Qc,smoothstep:th,smootherstep:eh,randInt:nh,randFloat:ih,randFloatSpread:sh,seededRandom:rh,degToRad:oh,radToDeg:ah,isPowerOfTwo:Zr,ceilPowerOfTwo:lh,floorPowerOfTwo:_l,setQuaternionFromProperEuler:ch,normalize:Ce,denormalize:ns};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ae{constructor(){Ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],p=i[0],f=i[3],v=i[6],_=i[1],x=i[4],y=i[7],b=i[2],A=i[5],L=i[8];return s[0]=r*p+o*_+l*b,s[3]=r*f+o*x+l*A,s[6]=r*v+o*y+l*L,s[1]=c*p+h*_+d*b,s[4]=c*f+h*x+d*A,s[7]=c*v+h*y+d*L,s[2]=u*p+m*_+g*b,s[5]=u*f+m*x+g*A,s[8]=u*v+m*y+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*s,m=c*s-r*l,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=d*p,t[1]=(i*c-h*n)*p,t[2]=(o*n-i*r)*p,t[3]=u*p,t[4]=(h*e-i*l)*p,t[5]=(i*s-o*e)*p,t[6]=m*p,t[7]=(n*l-c*e)*p,t[8]=(r*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(cr.makeScale(t,e)),this}rotate(t){return this.premultiply(cr.makeRotation(-t)),this}translate(t,e){return this.premultiply(cr.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cr=new Ae;function xl(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function qs(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}let ci=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],m=s[r+1],g=s[r+2],p=s[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(d!==p||l!==u||c!==m||h!==g){let f=1-o;const v=l*u+c*m+h*g+d*p,_=v>=0?1:-1,x=1-v*v;if(x>Number.EPSILON){const b=Math.sqrt(x),A=Math.atan2(b,v*_);f=Math.sin(f*A)/b,o=Math.sin(o*A)/b}const y=o*_;if(l=l*f+u*y,c=c*f+m*y,h=h*f+g*y,d=d*f+p*y,f===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r],u=s[r+1],m=s[r+2],g=s[r+3];return t[e]=o*g+h*d+l*m-c*u,t[e+1]=l*g+h*u+c*d-o*m,t[e+2]=c*g+h*m+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),m=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(r-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(r-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=l*e+r*i-o*n,h=l*n+o*e-s*i,d=l*i+s*n-r*e,u=-s*e-r*n-o*i;return this.x=c*l+u*-s+h*-o-d*-r,this.y=h*l+u*-r+d*-s-c*-o,this.z=d*l+u*-o+c*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hr.copy(this).projectOnVector(t),this.sub(hr)}reflect(t){return this.sub(hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hr=new G,Jo=new ci;function Ii(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ur(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const hh=new Ae().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),uh=new Ae().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Un=new G;function dh(a){return a.convertSRGBToLinear(),Un.set(a.r,a.g,a.b).applyMatrix3(uh),a.setRGB(Un.x,Un.y,Un.z)}function fh(a){return Un.set(a.r,a.g,a.b).applyMatrix3(hh),a.setRGB(Un.x,Un.y,Un.z).convertLinearToSRGB()}const ph={[hs]:a=>a,[fn]:a=>a.convertSRGBToLinear(),[vl]:dh},mh={[hs]:a=>a,[fn]:a=>a.convertLinearToSRGB(),[vl]:fh},be={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return hs},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;const n=ph[t],i=mh[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}};let fi;class yl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=qs("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Ii(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ii(e[n]/255)*255):e[n]=Ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Ml{constructor(t=null){this.isSource=!0,this.uuid=ki(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(dr(i[r].image)):s.push(dr(i[r]))}else s=dr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function dr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?yl.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gh=0;class Re extends Oi{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Be,i=Be,s=He,r=ls,o=Qe,l=ai,c=Re.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=ki(),this.name="",this.source=new Ml(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jr:t.x=t.x-Math.floor(t.x);break;case Be:t.x=t.x<0?0:1;break;case Yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jr:t.y=t.y-Math.floor(t.y);break;case Be:t.y=t.y<0?0:1;break;case Yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=pl;Re.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],p=l[2],f=l[6],v=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(m+1)/2,b=(v+1)/2,A=(h+u)/4,L=(d+p)/4,w=(g+f)/4;return x>y&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=L/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=w/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=L/s,i=w/s),this.set(n,i,s,e),this}let _=Math.sqrt((f-g)*(f-g)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(f-g)/_,this.y=(d-p)/_,this.z=(u-h)/_,this.w=Math.acos((c+m+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hi extends Oi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Re(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:He,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ml(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wl extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fe,this.minFilter=fe,this.wrapR=Be,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vh extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fe,this.minFilter=fe,this.wrapR=Be,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],d=t[l+1],u=t[l+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),d=t.getY(l),u=t.getZ(l);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)Kn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Kn)}else n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox),fr.applyMatrix4(t.matrixWorld),this.union(fr);const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vi),_s.subVectors(this.max,Vi),pi.subVectors(t.a,Vi),mi.subVectors(t.b,Vi),gi.subVectors(t.c,Vi),Nn.subVectors(mi,pi),Fn.subVectors(gi,mi),Zn.subVectors(pi,gi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Zn.z,Zn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Zn.z,0,-Zn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Zn.y,Zn.x,0];return!pr(e,pi,mi,gi,_s)||(e=[1,0,0,0,1,0,0,0,1],!pr(e,pi,mi,gi,_s))?!1:(xs.crossVectors(Nn,Fn),e=[xs.x,xs.y,xs.z],pr(e,pi,mi,gi,_s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new G,new G,new G,new G,new G,new G,new G,new G],Kn=new G,fr=new fs,pi=new G,mi=new G,gi=new G,Nn=new G,Fn=new G,Zn=new G,Vi=new G,_s=new G,xs=new G,$n=new G;function pr(a,t,e,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){$n.fromArray(a,s);const o=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const _h=new fs,Wi=new G,mr=new G;class io{constructor(t=new G,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_h.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);const e=Wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(mr)),this.expandByPoint(Wi.copy(t.center).sub(mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new G,gr=new G,ys=new G,Bn=new G,vr=new G,Ms=new G,_r=new G;let bl=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gr.copy(t).add(e).multiplyScalar(.5),ys.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(gr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(ys),o=Bn.dot(this.direction),l=-Bn.dot(ys),c=Bn.lengthSq(),h=Math.abs(1-r*r);let d,u,m,g;if(h>0)if(d=r*l-o,u=r*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const p=1/h;d*=p,u*=p,m=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(gr).addScaledVector(ys,u),m}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,i,s){vr.subVectors(e,t),Ms.subVectors(n,t),_r.crossVectors(vr,Ms);let r=this.direction.dot(_r),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Bn.subVectors(this.origin,t);const l=o*this.direction.dot(Ms.crossVectors(Bn,Ms));if(l<0)return null;const c=o*this.direction.dot(vr.cross(Bn));if(c<0||l+c>r)return null;const h=-o*Bn.dot(_r);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ie{constructor(){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,o,l,c,h,d,u,m,g,p,f){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=i,v[1]=s,v[5]=r,v[9]=o,v[13]=l,v[2]=c,v[6]=h,v[10]=d,v[14]=u,v[3]=m,v[7]=g,v[11]=p,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/vi.setFromMatrixColumn(t,0).length(),s=1/vi.setFromMatrixColumn(t,1).length(),r=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*h,m=r*d,g=o*h,p=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=u-p*c,e[9]=-o*l,e[2]=p-u*c,e[6]=g+m*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,m=l*d,g=c*h,p=c*d;e[0]=u+p*o,e[4]=g*o-m,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=m*o-g,e[6]=p+u*o,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,m=l*d,g=c*h,p=c*d;e[0]=u-p*o,e[4]=-r*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*h,e[9]=p-u*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,m=r*d,g=o*h,p=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+p,e[1]=l*d,e[5]=p*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,m=r*c,g=o*l,p=o*c;e[0]=l*h,e[4]=p-u*d,e[8]=g*d+m,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=u-p*d}else if(t.order==="XZY"){const u=r*l,m=r*c,g=o*l,p=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+p,e[5]=r*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=p*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xh,t,yh)}lookAt(t,e,n){const i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),On.crossVectors(n,ze),On.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),On.crossVectors(n,ze)),On.normalize(),ws.crossVectors(ze,On),i[0]=On.x,i[4]=ws.x,i[8]=ze.x,i[1]=On.y,i[5]=ws.y,i[9]=ze.y,i[2]=On.z,i[6]=ws.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],p=n[6],f=n[10],v=n[14],_=n[3],x=n[7],y=n[11],b=n[15],A=i[0],L=i[4],w=i[8],E=i[12],P=i[1],B=i[5],W=i[9],R=i[13],D=i[2],z=i[6],I=i[10],H=i[14],O=i[3],X=i[7],K=i[11],nt=i[15];return s[0]=r*A+o*P+l*D+c*O,s[4]=r*L+o*B+l*z+c*X,s[8]=r*w+o*W+l*I+c*K,s[12]=r*E+o*R+l*H+c*nt,s[1]=h*A+d*P+u*D+m*O,s[5]=h*L+d*B+u*z+m*X,s[9]=h*w+d*W+u*I+m*K,s[13]=h*E+d*R+u*H+m*nt,s[2]=g*A+p*P+f*D+v*O,s[6]=g*L+p*B+f*z+v*X,s[10]=g*w+p*W+f*I+v*K,s[14]=g*E+p*R+f*H+v*nt,s[3]=_*A+x*P+y*D+b*O,s[7]=_*L+x*B+y*z+b*X,s[11]=_*w+x*W+y*I+b*K,s[15]=_*E+x*R+y*H+b*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],p=t[7],f=t[11],v=t[15];return g*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*m-n*l*m)+p*(+e*l*m-e*c*u+s*r*u-i*r*m+i*c*h-s*l*h)+f*(+e*c*d-e*o*m-s*r*d+n*r*m+s*o*h-n*c*h)+v*(-i*o*h-e*l*d+e*o*u+i*r*d-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],p=t[13],f=t[14],v=t[15],_=d*f*c-p*u*c+p*l*m-o*f*m-d*l*v+o*u*v,x=g*u*c-h*f*c-g*l*m+r*f*m+h*l*v-r*u*v,y=h*p*c-g*d*c+g*o*m-r*p*m-h*o*v+r*d*v,b=g*d*l-h*p*l-g*o*u+r*p*u+h*o*f-r*d*f,A=e*_+n*x+i*y+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return t[0]=_*L,t[1]=(p*u*s-d*f*s-p*i*m+n*f*m+d*i*v-n*u*v)*L,t[2]=(o*f*s-p*l*s+p*i*c-n*f*c-o*i*v+n*l*v)*L,t[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*m-n*l*m)*L,t[4]=x*L,t[5]=(h*f*s-g*u*s+g*i*m-e*f*m-h*i*v+e*u*v)*L,t[6]=(g*l*s-r*f*s-g*i*c+e*f*c+r*i*v-e*l*v)*L,t[7]=(r*u*s-h*l*s+h*i*c-e*u*c-r*i*m+e*l*m)*L,t[8]=y*L,t[9]=(g*d*s-h*p*s-g*n*m+e*p*m+h*n*v-e*d*v)*L,t[10]=(r*p*s-g*o*s+g*n*c-e*p*c-r*n*v+e*o*v)*L,t[11]=(h*o*s-r*d*s-h*n*c+e*d*c+r*n*m-e*o*m)*L,t[12]=b*L,t[13]=(h*p*i-g*d*i+g*n*u-e*p*u-h*n*f+e*d*f)*L,t[14]=(g*o*i-r*p*i-g*n*l+e*p*l+r*n*f-e*o*f)*L,t[15]=(r*d*i-h*o*i+h*n*l-e*d*l-r*n*u+e*o*u)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,l=e._w,c=s+s,h=r+r,d=o+o,u=s*c,m=s*h,g=s*d,p=r*h,f=r*d,v=o*d,_=l*c,x=l*h,y=l*d,b=n.x,A=n.y,L=n.z;return i[0]=(1-(p+v))*b,i[1]=(m+y)*b,i[2]=(g-x)*b,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(u+v))*A,i[6]=(f+_)*A,i[7]=0,i[8]=(g+x)*L,i[9]=(f-_)*L,i[10]=(1-(u+p))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=vi.set(i[0],i[1],i[2]).length();const r=vi.set(i[4],i[5],i[6]).length(),o=vi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ke.copy(this);const c=1/s,h=1/r,d=1/o;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=d,Ke.elements[9]*=d,Ke.elements[10]*=d,e.setFromRotationMatrix(Ke),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r){const o=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(r+s)/(r-s),m=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r){const o=this.elements,l=1/(e-t),c=1/(n-i),h=1/(r-s),d=(e+t)*l,u=(n+i)*c,m=(r+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new G,Ke=new ie,xh=new G(0,0,0),yh=new G(1,1,1),On=new G,ws=new G,ze=new G,Qo=new ie,ta=new ci;class Zs{constructor(t=0,e=0,n=0,i=Zs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Le(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ta.setFromEuler(this),this.setFromQuaternion(ta,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zs.DEFAULT_ORDER="XYZ";class so{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mh=0;const ea=new G,_i=new ci,wn=new ie,bs=new G,Hi=new G,wh=new G,bh=new ci,na=new G(1,0,0),ia=new G(0,1,0),sa=new G(0,0,1),Sh={type:"added"},ra={type:"removed"};class xe extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new G,e=new Zs,n=new ci,i=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ae}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(na,t)}rotateY(t){return this.rotateOnAxis(ia,t)}rotateZ(t){return this.rotateOnAxis(sa,t)}translateOnAxis(t,e){return ea.copy(t).applyQuaternion(this.quaternion),this.position.add(ea.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(na,t)}translateY(t){return this.translateOnAxis(ia,t)}translateZ(t){return this.translateOnAxis(sa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Hi,bs,this.up):wn.lookAt(bs,Hi,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),_i.setFromRotationMatrix(wn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Sh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ra)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ra)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,t,wh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,bh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new G(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new G,bn=new G,xr=new G,Sn=new G,xi=new G,yi=new G,oa=new G,yr=new G,Mr=new G,wr=new G;class Pn{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ze.subVectors(t,e),i.cross(Ze);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ze.subVectors(i,e),bn.subVectors(n,e),xr.subVectors(t,e);const r=Ze.dot(Ze),o=Ze.dot(bn),l=Ze.dot(xr),c=bn.dot(bn),h=bn.dot(xr),d=r*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(c*l-o*h)*u,g=(r*h-o*l)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(t,e,n,i,s,r,o,l){return this.getBarycoord(t,e,n,i,Sn),l.set(0,0),l.addScaledVector(s,Sn.x),l.addScaledVector(r,Sn.y),l.addScaledVector(o,Sn.z),l}static isFrontFacing(t,e,n,i){return Ze.subVectors(n,e),bn.subVectors(t,e),Ze.cross(bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),Ze.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Pn.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;xi.subVectors(i,n),yi.subVectors(s,n),yr.subVectors(t,n);const l=xi.dot(yr),c=yi.dot(yr);if(l<=0&&c<=0)return e.copy(n);Mr.subVectors(t,i);const h=xi.dot(Mr),d=yi.dot(Mr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(xi,r);wr.subVectors(t,s);const m=xi.dot(wr),g=yi.dot(wr);if(g>=0&&m<=g)return e.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(yi,o);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return oa.subVectors(s,i),o=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(oa,o);const v=1/(f+p+u);return r=p*v,o=u*v,e.copy(n).addScaledVector(xi,r).addScaledVector(yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Eh=0,ps=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Pi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ul,this.blendDst=dl,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$e={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function br(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=be.workingColorSpace){if(t=no(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=br(r,s,t+1/3),this.g=br(r,s,t),this.b=br(r,s,t-1/3)}return be.toWorkingColorSpace(this,i),this}setStyle(t,e=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,be.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,be.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,be.toWorkingColorSpace(this,e),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,be.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=Sl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return be.fromWorkingColorSpace(ge.copy(this),t),Le(ge.r*255,0,255)<<16^Le(ge.g*255,0,255)<<8^Le(ge.b*255,0,255)<<0}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(ge.copy(this),e);const n=ge.r,i=ge.g,s=ge.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(ge.copy(this),e),t.r=ge.r,t.g=ge.g,t.b=ge.b,t}getStyle(t=fn){be.fromWorkingColorSpace(ge.copy(this),t);const e=ge.r,n=ge.g,i=ge.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL($e),$e.h+=t,$e.s+=e,$e.l+=n,this.setHSL($e.h,$e.s,$e.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($e),t.getHSL(Ss);const n=rs($e.h,Ss.h,e),i=rs($e.s,Ss.s,e),s=rs($e.l,Ss.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ge=new kt;kt.NAMES=Sl;class El extends ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Jt=new G,Es=new Gt;class gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ko,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Jt.fromBufferAttribute(this,e),Jt.applyMatrix3(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Jt.fromBufferAttribute(this,e),Jt.applyMatrix4(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Jt.fromBufferAttribute(this,e),Jt.applyNormalMatrix(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Jt.fromBufferAttribute(this,e),Jt.transformDirection(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ko&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Al extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tl extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class nn extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ah=0;const Ge=new ie,Sr=new xe,Mi=new G,Ne=new fs,qi=new fs,ce=new G;class qn extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xl(t)?Tl:Al)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ae().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Sr.lookAt(t),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ne.setFromBufferAttribute(s),this.morphTargetsRelative?(ce.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(ce),ce.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(ce)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];qi.setFromBufferAttribute(o),this.morphTargetsRelative?(ce.addVectors(Ne.min,qi.min),Ne.expandByPoint(ce),ce.addVectors(Ne.max,qi.max),Ne.expandByPoint(ce)):(Ne.expandByPoint(qi.min),Ne.expandByPoint(qi.max))}Ne.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)ce.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ce));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ce.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(t,c),ce.add(Mi)),i=Math.max(i,n.distanceToSquared(ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<o;P++)c[P]=new G,h[P]=new G;const d=new G,u=new G,m=new G,g=new Gt,p=new Gt,f=new Gt,v=new G,_=new G;function x(P,B,W){d.fromArray(i,P*3),u.fromArray(i,B*3),m.fromArray(i,W*3),g.fromArray(r,P*2),p.fromArray(r,B*2),f.fromArray(r,W*2),u.sub(d),m.sub(d),p.sub(g),f.sub(g);const R=1/(p.x*f.y-f.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(R),_.copy(m).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(R),c[P].add(v),c[B].add(v),c[W].add(v),h[P].add(_),h[B].add(_),h[W].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,B=y.length;P<B;++P){const W=y[P],R=W.start,D=W.count;for(let z=R,I=R+D;z<I;z+=3)x(n[z+0],n[z+1],n[z+2])}const b=new G,A=new G,L=new G,w=new G;function E(P){L.fromArray(s,P*3),w.copy(L);const B=c[P];b.copy(B),b.sub(L.multiplyScalar(L.dot(B))).normalize(),A.crossVectors(w,B);const R=A.dot(h[P])<0?-1:1;l[P*4]=b.x,l[P*4+1]=b.y,l[P*4+2]=b.z,l[P*4+3]=R}for(let P=0,B=y.length;P<B;++P){const W=y[P],R=W.start,D=W.count;for(let z=R,I=R+D;z<I;z+=3)E(n[z+0]),E(n[z+1]),E(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new G,s=new G,r=new G,o=new G,l=new G,c=new G,h=new G,d=new G;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),p=t.getX(u+1),f=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,f),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ce.fromBufferAttribute(t,e),ce.normalize(),t.setXYZ(e,ce.x,ce.y,ce.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let p=0,f=l.length;p<f;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*h;for(let v=0;v<h;v++)u[g++]=c[m++]}return new gn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const aa=new ie,cn=new bl,As=new io,la=new G,Xi=new G,ji=new G,Yi=new G,Er=new G,Ts=new G,Cs=new Gt,Ls=new Gt,Rs=new Gt,Ar=new G,Ps=new G;class Pt extends xe{constructor(t=new qn,e=new El){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Ts.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Er.fromBufferAttribute(d,t),r?Ts.addScaledVector(Er,h):Ts.addScaledVector(Er.sub(e),h))}e.add(Ts)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(s),cn.copy(t.ray).recast(t.near),As.containsPoint(cn.origin)===!1&&(cn.intersectSphere(As,la)===null||cn.origin.distanceToSquared(la)>(t.far-t.near)**2))||(aa.copy(s).invert(),cn.copy(t.ray).applyMatrix4(aa),n.boundingBox!==null&&cn.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],v=Math.max(p.start,u.start),_=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let x=v,y=_;x<y;x+=3){const b=o.getX(x),A=o.getX(x+1),L=o.getX(x+2);r=Ds(this,f,t,cn,c,h,b,A,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const m=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const v=o.getX(p),_=o.getX(p+1),x=o.getX(p+2);r=Ds(this,i,t,cn,c,h,v,_,x),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],v=Math.max(p.start,u.start),_=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let x=v,y=_;x<y;x+=3){const b=x,A=x+1,L=x+2;r=Ds(this,f,t,cn,c,h,b,A,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const m=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const v=p,_=p+1,x=p+2;r=Ds(this,i,t,cn,c,h,v,_,x),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Th(a,t,e,n,i,s,r,o){let l;if(t.side===Oe?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,t.side===Wn,o),l===null)return null;Ps.copy(o),Ps.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Ps);return c<e.near||c>e.far?null:{distance:c,point:Ps.clone(),object:a}}function Ds(a,t,e,n,i,s,r,o,l){a.getVertexPosition(r,Xi),a.getVertexPosition(o,ji),a.getVertexPosition(l,Yi);const c=Th(a,t,e,n,Xi,ji,Yi,Ar);if(c){i&&(Cs.fromBufferAttribute(i,r),Ls.fromBufferAttribute(i,o),Rs.fromBufferAttribute(i,l),c.uv=Pn.getUV(Ar,Xi,ji,Yi,Cs,Ls,Rs,new Gt)),s&&(Cs.fromBufferAttribute(s,r),Ls.fromBufferAttribute(s,o),Rs.fromBufferAttribute(s,l),c.uv2=Pn.getUV(Ar,Xi,ji,Yi,Cs,Ls,Rs,new Gt));const h={a:r,b:o,c:l,normal:new G,materialIndex:0};Pn.getNormal(Xi,ji,Yi,h.normal),c.face=h}return c}class Kt extends qn{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(d,2));function g(p,f,v,_,x,y,b,A,L,w,E){const P=y/L,B=b/w,W=y/2,R=b/2,D=A/2,z=L+1,I=w+1;let H=0,O=0;const X=new G;for(let K=0;K<I;K++){const nt=K*B-R;for(let N=0;N<z;N++){const Q=N*P-W;X[p]=Q*_,X[f]=nt*x,X[v]=D,c.push(X.x,X.y,X.z),X[p]=0,X[f]=0,X[v]=A>0?1:-1,h.push(X.x,X.y,X.z),d.push(N/L),d.push(1-K/w),H+=1}}for(let K=0;K<w;K++)for(let nt=0;nt<L;nt++){const N=u+nt+z*K,Q=u+nt+z*(K+1),et=u+(nt+1)+z*(K+1),U=u+(nt+1)+z*K;l.push(N,Q,U),l.push(Q,et,U),O+=6}o.addGroup(m,O,E),m+=O,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bi(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Se(a){const t={};for(let e=0;e<a.length;e++){const n=Bi(a[e]);for(const i in n)t[i]=n[i]}return t}function Ch(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function Cl(a){return a.getRenderTarget()===null&&a.outputEncoding===qt?fn:hs}const Lh={clone:Bi,merge:Se};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=Ch(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ll extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qe extends Ll{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ss*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,bi=1;class Dh extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new qe(wi,bi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new qe(wi,bi,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new qe(wi,bi,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new qe(wi,bi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new qe(wi,bi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new qe(wi,bi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=zn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Rl extends Re{constructor(t,e,n,i,s,r,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,i,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ih extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Rl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Kt(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Gn});s.uniforms.tEquirect.value=e;const r=new Pt(i,s),o=e.minFilter;return e.minFilter===ls&&(e.minFilter=He),new Dh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const Tr=new G,zh=new G,Nh=new Ae;let Qn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Tr.subVectors(n,e).cross(zh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Tr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nh.getNormalMatrix(t),i=this.coplanarPoint(Tr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Si=new io,Is=new G;class ro{constructor(t=new Qn,e=new Qn,n=new Qn,i=new Qn,s=new Qn,r=new Qn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],m=n[9],g=n[10],p=n[11],f=n[12],v=n[13],_=n[14],x=n[15];return e[0].setComponents(o-i,d-l,p-u,x-f).normalize(),e[1].setComponents(o+i,d+l,p+u,x+f).normalize(),e[2].setComponents(o+s,d+c,p+m,x+v).normalize(),e[3].setComponents(o-s,d-c,p-m,x-v).normalize(),e[4].setComponents(o-r,d-h,p-g,x-_).normalize(),e[5].setComponents(o+r,d+h,p+g,x+_).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Is.x=i.normal.x>0?t.max.x:t.min.x,Is.y=i.normal.y>0?t.max.y:t.min.y,Is.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pl(){let a=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function Fh(a,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,m=h.updateRange;a.bindBuffer(d,c),m.count===-1?a.bufferSubData(d,0,u):(e?a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:r,remove:o,update:l}}class oo extends qn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,m=[],g=[],p=[],f=[];for(let v=0;v<h;v++){const _=v*u-r;for(let x=0;x<c;x++){const y=x*d-s;g.push(y,-_,0),p.push(0,0,1),f.push(x/o),f.push(1-v/l)}}for(let v=0;v<l;v++)for(let _=0;_<o;_++){const x=_+c*v,y=_+c*(v+1),b=_+1+c*(v+1),A=_+1+c*v;m.push(x,y,A),m.push(y,b,A)}this.setIndex(m),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(p,3)),this.setAttribute("uv",new nn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Uh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wh="vec3 transformed = vec3( position );",Hh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Xh=`#ifdef USE_IRIDESCENCE
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
#endif`,jh=`#ifdef USE_BUMPMAP
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
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nu=`#define PI 3.141592653589793
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
}`,iu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,su=`vec3 transformedNormal = objectNormal;
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
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",hu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uu=`#ifdef USE_ENVMAP
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
	
#endif`,fu=`#ifdef USE_ENVMAP
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
#endif`,pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yu=`#ifdef USE_GRADIENTMAP
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
}`,Mu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eu=`uniform bool receiveShadow;
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
#endif`,Au=`#if defined( USE_ENVMAP )
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
#endif`,Tu=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lu=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pu=`PhysicalMaterial material;
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
#endif`,zu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Fu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ou=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Uu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ju=`#ifdef USE_MORPHNORMALS
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
#endif`,Yu=`#ifdef USE_MORPHTARGETS
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
#endif`,Ku=`#ifdef USE_MORPHTARGETS
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
#endif`,Zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,Ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ed=`#ifdef USE_NORMALMAP
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
#endif`,nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ad=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vd=`float getShadowMask() {
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
}`,_d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xd=`#ifdef USE_SKINNING
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
#endif`,yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Md=`#ifdef USE_SKINNING
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
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ed=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ad=`#ifdef USE_TRANSMISSION
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
#endif`,Td=`#ifdef USE_TRANSMISSION
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
#endif`,Cd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ld=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Rd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Pd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Dd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Id=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
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
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ud=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gd=`#include <common>
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
}`,Vd=`#if DEPTH_PACKING == 3200
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
}`,Wd=`#define DISTANCE
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
}`,Hd=`#define DISTANCE
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
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jd=`uniform float scale;
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
}`,Yd=`uniform vec3 diffuse;
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
}`,Kd=`#include <common>
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
}`,Zd=`uniform vec3 diffuse;
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
}`,$d=`#define LAMBERT
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
}`,Jd=`#define LAMBERT
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
}`,Qd=`#define MATCAP
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
}`,tf=`#define MATCAP
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
}`,ef=`#define NORMAL
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
}`,nf=`#define NORMAL
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
}`,sf=`#define PHONG
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
}`,rf=`#define PHONG
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
}`,of=`#define STANDARD
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
}`,af=`#define STANDARD
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
}`,lf=`#define TOON
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
}`,cf=`#define TOON
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
}`,hf=`uniform float size;
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
}`,uf=`uniform vec3 diffuse;
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
}`,df=`#include <common>
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
}`,ff=`uniform vec3 color;
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
}`,pf=`uniform float rotation;
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
}`,mf=`uniform vec3 diffuse;
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
}`,Tt={alphamap_fragment:Bh,alphamap_pars_fragment:Oh,alphatest_fragment:kh,alphatest_pars_fragment:Uh,aomap_fragment:Gh,aomap_pars_fragment:Vh,begin_vertex:Wh,beginnormal_vertex:Hh,bsdfs:qh,iridescence_fragment:Xh,bumpmap_pars_fragment:jh,clipping_planes_fragment:Yh,clipping_planes_pars_fragment:Kh,clipping_planes_pars_vertex:Zh,clipping_planes_vertex:$h,color_fragment:Jh,color_pars_fragment:Qh,color_pars_vertex:tu,color_vertex:eu,common:nu,cube_uv_reflection_fragment:iu,defaultnormal_vertex:su,displacementmap_pars_vertex:ru,displacementmap_vertex:ou,emissivemap_fragment:au,emissivemap_pars_fragment:lu,encodings_fragment:cu,encodings_pars_fragment:hu,envmap_fragment:uu,envmap_common_pars_fragment:du,envmap_pars_fragment:fu,envmap_pars_vertex:pu,envmap_physical_pars_fragment:Au,envmap_vertex:mu,fog_vertex:gu,fog_pars_vertex:vu,fog_fragment:_u,fog_pars_fragment:xu,gradientmap_pars_fragment:yu,lightmap_fragment:Mu,lightmap_pars_fragment:wu,lights_lambert_fragment:bu,lights_lambert_pars_fragment:Su,lights_pars_begin:Eu,lights_toon_fragment:Tu,lights_toon_pars_fragment:Cu,lights_phong_fragment:Lu,lights_phong_pars_fragment:Ru,lights_physical_fragment:Pu,lights_physical_pars_fragment:Du,lights_fragment_begin:Iu,lights_fragment_maps:zu,lights_fragment_end:Nu,logdepthbuf_fragment:Fu,logdepthbuf_pars_fragment:Bu,logdepthbuf_pars_vertex:Ou,logdepthbuf_vertex:ku,map_fragment:Uu,map_pars_fragment:Gu,map_particle_fragment:Vu,map_particle_pars_fragment:Wu,metalnessmap_fragment:Hu,metalnessmap_pars_fragment:qu,morphcolor_vertex:Xu,morphnormal_vertex:ju,morphtarget_pars_vertex:Yu,morphtarget_vertex:Ku,normal_fragment_begin:Zu,normal_fragment_maps:$u,normal_pars_fragment:Ju,normal_pars_vertex:Qu,normal_vertex:td,normalmap_pars_fragment:ed,clearcoat_normal_fragment_begin:nd,clearcoat_normal_fragment_maps:id,clearcoat_pars_fragment:sd,iridescence_pars_fragment:rd,output_fragment:od,packing:ad,premultiplied_alpha_fragment:ld,project_vertex:cd,dithering_fragment:hd,dithering_pars_fragment:ud,roughnessmap_fragment:dd,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:pd,shadowmap_pars_vertex:md,shadowmap_vertex:gd,shadowmask_pars_fragment:vd,skinbase_vertex:_d,skinning_pars_vertex:xd,skinning_vertex:yd,skinnormal_vertex:Md,specularmap_fragment:wd,specularmap_pars_fragment:bd,tonemapping_fragment:Sd,tonemapping_pars_fragment:Ed,transmission_fragment:Ad,transmission_pars_fragment:Td,uv_pars_fragment:Cd,uv_pars_vertex:Ld,uv_vertex:Rd,uv2_pars_fragment:Pd,uv2_pars_vertex:Dd,uv2_vertex:Id,worldpos_vertex:zd,background_vert:Nd,background_frag:Fd,backgroundCube_vert:Bd,backgroundCube_frag:Od,cube_vert:kd,cube_frag:Ud,depth_vert:Gd,depth_frag:Vd,distanceRGBA_vert:Wd,distanceRGBA_frag:Hd,equirect_vert:qd,equirect_frag:Xd,linedashed_vert:jd,linedashed_frag:Yd,meshbasic_vert:Kd,meshbasic_frag:Zd,meshlambert_vert:$d,meshlambert_frag:Jd,meshmatcap_vert:Qd,meshmatcap_frag:tf,meshnormal_vert:ef,meshnormal_frag:nf,meshphong_vert:sf,meshphong_frag:rf,meshphysical_vert:of,meshphysical_frag:af,meshtoon_vert:lf,meshtoon_frag:cf,points_vert:hf,points_frag:uf,shadow_vert:df,shadow_frag:ff,sprite_vert:pf,sprite_frag:mf},rt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ae},uv2Transform:{value:new Ae},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ae}}},pn={basic:{uniforms:Se([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Se([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Se([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Se([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Se([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Se([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Se([rt.points,rt.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Se([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Se([rt.common,rt.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Se([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Se([rt.sprite,rt.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:Se([rt.common,rt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:Se([rt.lights,rt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};pn.physical={uniforms:Se([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const zs={r:0,b:0,g:0};function gf(a,t,e,n,i,s,r){const o=new kt(0);let l=s===!0?0:1,c,h,d=null,u=0,m=null;function g(f,v){let _=!1,x=v.isScene===!0?v.background:null;x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x));const y=a.xr,b=y.getSession&&y.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?p(o,l):x&&x.isColor&&(p(x,1),_=!0),(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ks)?(h===void 0&&(h=new Pt(new Kt(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Bi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,L,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=x.encoding!==qt,(d!==x||u!==x.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,m=a.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Pt(new oo(2,2),new ui({name:"BackgroundMaterial",uniforms:Bi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=x.encoding!==qt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,m=a.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function p(f,v){f.getRGB(zs,Cl(a)),n.buffers.color.setClear(zs.r,zs.g,zs.b,v,r)}return{getClearColor:function(){return o},setClearColor:function(f,v=1){o.set(f),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,p(o,l)},render:g}}function vf(a,t,e,n){const i=a.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=f(null);let c=l,h=!1;function d(D,z,I,H,O){let X=!1;if(r){const K=p(H,I,z);c!==K&&(c=K,m(c.object)),X=v(D,H,I,O),X&&_(D,H,I,O)}else{const K=z.wireframe===!0;(c.geometry!==H.id||c.program!==I.id||c.wireframe!==K)&&(c.geometry=H.id,c.program=I.id,c.wireframe=K,X=!0)}O!==null&&e.update(O,34963),(X||h)&&(h=!1,w(D,z,I,H),O!==null&&a.bindBuffer(34963,e.get(O).buffer))}function u(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(D){return n.isWebGL2?a.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?a.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,z,I){const H=I.wireframe===!0;let O=o[D.id];O===void 0&&(O={},o[D.id]=O);let X=O[z.id];X===void 0&&(X={},O[z.id]=X);let K=X[H];return K===void 0&&(K=f(u()),X[H]=K),K}function f(D){const z=[],I=[],H=[];for(let O=0;O<i;O++)z[O]=0,I[O]=0,H[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:I,attributeDivisors:H,object:D,attributes:{},index:null}}function v(D,z,I,H){const O=c.attributes,X=z.attributes;let K=0;const nt=I.getAttributes();for(const N in nt)if(nt[N].location>=0){const et=O[N];let U=X[N];if(U===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(U=D.instanceColor)),et===void 0||et.attribute!==U||U&&et.data!==U.data)return!0;K++}return c.attributesNum!==K||c.index!==H}function _(D,z,I,H){const O={},X=z.attributes;let K=0;const nt=I.getAttributes();for(const N in nt)if(nt[N].location>=0){let et=X[N];et===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(et=D.instanceColor));const U={};U.attribute=et,et&&et.data&&(U.data=et.data),O[N]=U,K++}c.attributes=O,c.attributesNum=K,c.index=H}function x(){const D=c.newAttributes;for(let z=0,I=D.length;z<I;z++)D[z]=0}function y(D){b(D,0)}function b(D,z){const I=c.newAttributes,H=c.enabledAttributes,O=c.attributeDivisors;I[D]=1,H[D]===0&&(a.enableVertexAttribArray(D),H[D]=1),O[D]!==z&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),O[D]=z)}function A(){const D=c.newAttributes,z=c.enabledAttributes;for(let I=0,H=z.length;I<H;I++)z[I]!==D[I]&&(a.disableVertexAttribArray(I),z[I]=0)}function L(D,z,I,H,O,X){n.isWebGL2===!0&&(I===5124||I===5125)?a.vertexAttribIPointer(D,z,I,O,X):a.vertexAttribPointer(D,z,I,H,O,X)}function w(D,z,I,H){if(n.isWebGL2===!1&&(D.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const O=H.attributes,X=I.getAttributes(),K=z.defaultAttributeValues;for(const nt in X){const N=X[nt];if(N.location>=0){let Q=O[nt];if(Q===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const et=Q.normalized,U=Q.itemSize,ot=e.get(Q);if(ot===void 0)continue;const at=ot.buffer,ut=ot.type,pt=ot.bytesPerElement;if(Q.isInterleavedBufferAttribute){const xt=Q.data,At=xt.stride,Ct=Q.offset;if(xt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<N.locationSize;Nt++)b(N.location+Nt,xt.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Nt=0;Nt<N.locationSize;Nt++)y(N.location+Nt);a.bindBuffer(34962,at);for(let Nt=0;Nt<N.locationSize;Nt++)L(N.location+Nt,U/N.locationSize,ut,et,At*pt,(Ct+U/N.locationSize*Nt)*pt)}else{if(Q.isInstancedBufferAttribute){for(let xt=0;xt<N.locationSize;xt++)b(N.location+xt,Q.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xt=0;xt<N.locationSize;xt++)y(N.location+xt);a.bindBuffer(34962,at);for(let xt=0;xt<N.locationSize;xt++)L(N.location+xt,U/N.locationSize,ut,et,U*pt,U/N.locationSize*xt*pt)}}else if(K!==void 0){const et=K[nt];if(et!==void 0)switch(et.length){case 2:a.vertexAttrib2fv(N.location,et);break;case 3:a.vertexAttrib3fv(N.location,et);break;case 4:a.vertexAttrib4fv(N.location,et);break;default:a.vertexAttrib1fv(N.location,et)}}}}A()}function E(){W();for(const D in o){const z=o[D];for(const I in z){const H=z[I];for(const O in H)g(H[O].object),delete H[O];delete z[I]}delete o[D]}}function P(D){if(o[D.id]===void 0)return;const z=o[D.id];for(const I in z){const H=z[I];for(const O in H)g(H[O].object),delete H[O];delete z[I]}delete o[D.id]}function B(D){for(const z in o){const I=o[z];if(I[D.id]===void 0)continue;const H=I[D.id];for(const O in H)g(H[O].object),delete H[O];delete I[D.id]}}function W(){R(),h=!0,c!==l&&(c=l,m(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function _f(a,t,e,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,h){a.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,m;if(i)u=a,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,h,d),e.update(h,s,d)}this.setMode=r,this.render=o,this.renderInstances=l}function xf(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=a.getParameter(34930),u=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),p=a.getParameter(34921),f=a.getParameter(36347),v=a.getParameter(36348),_=a.getParameter(36349),x=u>0,y=r||t.has("OES_texture_float"),b=x&&y,A=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:A}}function yf(a){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Qn,o=new Ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,v=a.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):c();else{const _=s?0:n,x=_*4;let y=v.clippingState||null;l.value=y,y=h(g,u,x,m);for(let b=0;b!==x;++b)y[b]=e[b];v.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=l.value,g!==!0||f===null){const v=m+p*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(f===null||f.length<v)&&(f=new Float32Array(v));for(let x=0,y=m;x!==p;++x,y+=4)r.copy(d[x]).applyMatrix4(_,o),r.normal.toArray(f,y),f[y+3]=r.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function Mf(a){let t=new WeakMap;function e(r,o){return o===qr?r.mapping=zi:o===Xr&&(r.mapping=Ni),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===qr||o===Xr)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Ih(l.height/2);return c.fromEquirectangularTexture(a,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Dl extends Ll{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Li=4,ca=[.125,.215,.35,.446,.526,.582],ei=20,Cr=new Dl,ha=new kt;let Lr=null;const ti=(1+Math.sqrt(5))/2,Ei=1/ti,ua=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,ti,Ei),new G(0,ti,-Ei),new G(Ei,0,ti),new G(-Ei,0,ti),new G(ti,Ei,0),new G(-ti,Ei,0)];class da{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Lr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ma(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lr),t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:cs,format:Qe,encoding:li,depthBuffer:!1},i=fa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fa(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wf(s)),this._blurMaterial=bf(s,t,e)}return i}_compileMaterial(t){const e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,Cr)}_sceneToCubeUV(t,e,n,i){const o=new qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ha),h.toneMapping=zn,h.autoClear=!1;const m=new El({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new Pt(new Kt,m);let p=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(ha),p=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):_===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const x=this._cubeSize;Ns(i,_*x,v>2?x:0,x,x),h.setRenderTarget(i),p&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===zi||t.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ma()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pa());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Pt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=ua[(i-1)%ua.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Pt(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ei-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):ei;f>ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ei}`);const v=[];let _=0;for(let L=0;L<ei;++L){const w=L/p,E=Math.exp(-w*w/2);v.push(E),L===0?_+=E:L<f&&(_+=2*E)}for(let L=0;L<v.length;L++)v[L]=v[L]/_;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=v,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const y=this._sizeLods[i],b=3*y*(i>x-Li?i-x+Li:0),A=4*(this._cubeSize-y);Ns(e,b,A,3*y,2*y),l.setRenderTarget(e),l.render(d,Cr)}}function wf(a){const t=[],e=[],n=[];let i=a;const s=a-Li+1+ca.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>a-Li?l=ca[r-a+Li-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,p=3,f=2,v=1,_=new Float32Array(p*g*m),x=new Float32Array(f*g*m),y=new Float32Array(v*g*m);for(let A=0;A<m;A++){const L=A%3*2/3-1,w=A>2?0:-1,E=[L,w,0,L+2/3,w,0,L+2/3,w+1,0,L,w,0,L+2/3,w+1,0,L,w+1,0];_.set(E,p*g*A),x.set(u,f*g*A);const P=[A,A,A,A,A,A];y.set(P,v*g*A)}const b=new qn;b.setAttribute("position",new gn(_,p)),b.setAttribute("uv",new gn(x,f)),b.setAttribute("faceIndex",new gn(y,v)),t.push(b),i>Li&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fa(a,t,e){const n=new hi(a,t,e);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function bf(a,t,e){const n=new Float32Array(ei),i=new G(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ao(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function pa(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ma(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ao(){return`

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
	`}function Sf(a){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===qr||l===Xr,h=l===zi||l===Ni;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new da(a)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new da(a));const u=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Ef(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Af(a,t,e,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let f=0,v=p.length;f<v;f++)t.update(p[f],34962)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const _=m.array;p=m.version;for(let x=0,y=_.length;x<y;x+=3){const b=_[x+0],A=_[x+1],L=_[x+2];u.push(b,A,A,L,L,b)}}else{const _=g.array;p=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const b=x+0,A=x+1,L=x+2;u.push(b,A,A,L,L,b)}}const f=new(xl(u)?Tl:Al)(u,1);f.version=p;const v=s.get(d);v&&t.remove(v),s.set(d,f)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Tf(a,t,e,n){const i=n.isWebGL2;let s;function r(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,m){a.drawElements(s,m,o,u*l),e.update(m,s,1)}function d(u,m,g){if(g===0)return;let p,f;if(i)p=a,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,o,u*l,g),e.update(m,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=d}function Cf(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Lf(a,t){return a[0]-t[0]}function Rf(a,t){return Math.abs(t[1])-Math.abs(a[1])}function Pf(a,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new ue,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let f=s.get(h);if(f===void 0||f.count!==p){let z=function(){R.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var m=z;f!==void 0&&f.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let E=0;x===!0&&(E=1),y===!0&&(E=2),b===!0&&(E=3);let P=h.attributes.position.count*E,B=1;P>t.maxTextureSize&&(B=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const W=new Float32Array(P*B*4*p),R=new wl(W,P,B,p);R.type=ri,R.needsUpdate=!0;const D=E*4;for(let I=0;I<p;I++){const H=A[I],O=L[I],X=w[I],K=P*B*4*I;for(let nt=0;nt<H.count;nt++){const N=nt*D;x===!0&&(r.fromBufferAttribute(H,nt),W[K+N+0]=r.x,W[K+N+1]=r.y,W[K+N+2]=r.z,W[K+N+3]=0),y===!0&&(r.fromBufferAttribute(O,nt),W[K+N+4]=r.x,W[K+N+5]=r.y,W[K+N+6]=r.z,W[K+N+7]=0),b===!0&&(r.fromBufferAttribute(X,nt),W[K+N+8]=r.x,W[K+N+9]=r.y,W[K+N+10]=r.z,W[K+N+11]=X.itemSize===4?r.w:1)}}f={count:p,texture:R,size:new Gt(P,B)},s.set(h,f),h.addEventListener("dispose",z)}let v=0;for(let x=0;x<u.length;x++)v+=u[x];const _=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(a,"morphTargetBaseInfluence",_),d.getUniforms().setValue(a,"morphTargetInfluences",u),d.getUniforms().setValue(a,"morphTargetsTexture",f.texture,e),d.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}else{const g=u===void 0?0:u.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];n[h.id]=p}for(let y=0;y<g;y++){const b=p[y];b[0]=y,b[1]=u[y]}p.sort(Rf);for(let y=0;y<8;y++)y<g&&p[y][1]?(o[y][0]=p[y][0],o[y][1]=p[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Lf);const f=h.morphAttributes.position,v=h.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const b=o[y],A=b[0],L=b[1];A!==Number.MAX_SAFE_INTEGER&&L?(f&&h.getAttribute("morphTarget"+y)!==f[A]&&h.setAttribute("morphTarget"+y,f[A]),v&&h.getAttribute("morphNormal"+y)!==v[A]&&h.setAttribute("morphNormal"+y,v[A]),i[y]=L,_+=L):(f&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),v&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const x=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(a,"morphTargetBaseInfluence",x),d.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Df(a,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}const Il=new Re,zl=new wl,Nl=new vh,Fl=new Rl,ga=[],va=[],_a=new Float32Array(16),xa=new Float32Array(9),ya=new Float32Array(4);function Ui(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=ga[i];if(s===void 0&&(s=new Float32Array(i),ga[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function se(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function re(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function $s(a,t){let e=va[t];e===void 0&&(e=new Int32Array(t),va[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function If(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function zf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;a.uniform2fv(this.addr,t),re(e,t)}}function Nf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(se(e,t))return;a.uniform3fv(this.addr,t),re(e,t)}}function Ff(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;a.uniform4fv(this.addr,t),re(e,t)}}function Bf(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;ya.set(n),a.uniformMatrix2fv(this.addr,!1,ya),re(e,n)}}function Of(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;xa.set(n),a.uniformMatrix3fv(this.addr,!1,xa),re(e,n)}}function kf(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;_a.set(n),a.uniformMatrix4fv(this.addr,!1,_a),re(e,n)}}function Uf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Gf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;a.uniform2iv(this.addr,t),re(e,t)}}function Vf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;a.uniform3iv(this.addr,t),re(e,t)}}function Wf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;a.uniform4iv(this.addr,t),re(e,t)}}function Hf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function qf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;a.uniform2uiv(this.addr,t),re(e,t)}}function Xf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;a.uniform3uiv(this.addr,t),re(e,t)}}function jf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;a.uniform4uiv(this.addr,t),re(e,t)}}function Yf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Il,i)}function Kf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nl,i)}function Zf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Fl,i)}function $f(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||zl,i)}function Jf(a){switch(a){case 5126:return If;case 35664:return zf;case 35665:return Nf;case 35666:return Ff;case 35674:return Bf;case 35675:return Of;case 35676:return kf;case 5124:case 35670:return Uf;case 35667:case 35671:return Gf;case 35668:case 35672:return Vf;case 35669:case 35673:return Wf;case 5125:return Hf;case 36294:return qf;case 36295:return Xf;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return $f}}function Qf(a,t){a.uniform1fv(this.addr,t)}function tp(a,t){const e=Ui(t,this.size,2);a.uniform2fv(this.addr,e)}function ep(a,t){const e=Ui(t,this.size,3);a.uniform3fv(this.addr,e)}function np(a,t){const e=Ui(t,this.size,4);a.uniform4fv(this.addr,e)}function ip(a,t){const e=Ui(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function sp(a,t){const e=Ui(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function rp(a,t){const e=Ui(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function op(a,t){a.uniform1iv(this.addr,t)}function ap(a,t){a.uniform2iv(this.addr,t)}function lp(a,t){a.uniform3iv(this.addr,t)}function cp(a,t){a.uniform4iv(this.addr,t)}function hp(a,t){a.uniform1uiv(this.addr,t)}function up(a,t){a.uniform2uiv(this.addr,t)}function dp(a,t){a.uniform3uiv(this.addr,t)}function fp(a,t){a.uniform4uiv(this.addr,t)}function pp(a,t,e){const n=this.cache,i=t.length,s=$s(e,i);se(n,s)||(a.uniform1iv(this.addr,s),re(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Il,s[r])}function mp(a,t,e){const n=this.cache,i=t.length,s=$s(e,i);se(n,s)||(a.uniform1iv(this.addr,s),re(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Nl,s[r])}function gp(a,t,e){const n=this.cache,i=t.length,s=$s(e,i);se(n,s)||(a.uniform1iv(this.addr,s),re(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Fl,s[r])}function vp(a,t,e){const n=this.cache,i=t.length,s=$s(e,i);se(n,s)||(a.uniform1iv(this.addr,s),re(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||zl,s[r])}function _p(a){switch(a){case 5126:return Qf;case 35664:return tp;case 35665:return ep;case 35666:return np;case 35674:return ip;case 35675:return sp;case 35676:return rp;case 5124:case 35670:return op;case 35667:case 35671:return ap;case 35668:case 35672:return lp;case 35669:case 35673:return cp;case 5125:return hp;case 36294:return up;case 36295:return dp;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return vp}}class xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Jf(e.type)}}class yp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=_p(e.type)}}class Mp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Rr=/(\w+)(\])?(\[|\.)?/g;function Ma(a,t){a.seq.push(t),a.map[t.id]=t}function wp(a,t,e){const n=a.name,i=n.length;for(Rr.lastIndex=0;;){const s=Rr.exec(n),r=Rr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Ma(e,c===void 0?new xp(o,a,t):new yp(o,a,t));break}else{let d=e.map[o];d===void 0&&(d=new Mp(o),Ma(e,d)),e=d}}}class Ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);wp(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function wa(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}let bp=0;function Sp(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function Ep(a){switch(a){case li:return["Linear","( value )"];case qt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function ba(a,t,e){const n=a.getShaderParameter(t,35713),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Sp(a.getShaderSource(t),r)}else return i}function Ap(a,t){const e=Ep(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Tp(a,t){let e;switch(t){case Ec:e="Linear";break;case Ac:e="Reinhard";break;case Tc:e="OptimizedCineon";break;case Cc:e="ACESFilmic";break;case Lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Cp(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}function Lp(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rp(a,t){const e={},n=a.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function is(a){return a!==""}function Sa(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ea(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function $r(a){return a.replace(Pp,Dp)}function Dp(a,t){const e=Tt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return $r(e)}const Ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Aa(a){return a.replace(Ip,zp)}function zp(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ta(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Np(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===cl?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===es&&(t="SHADOWMAP_TYPE_VSM"),t}function Fp(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case zi:case Ni:t="ENVMAP_TYPE_CUBE";break;case Ks:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bp(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ni:t="ENVMAP_MODE_REFRACTION";break}return t}function Op(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case fl:t="ENVMAP_BLENDING_MULTIPLY";break;case bc:t="ENVMAP_BLENDING_MIX";break;case Sc:t="ENVMAP_BLENDING_ADD";break}return t}function kp(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Up(a,t,e,n){const i=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Np(e),c=Fp(e),h=Bp(e),d=Op(e),u=kp(e),m=e.isWebGL2?"":Cp(e),g=Lp(s),p=i.createProgram();let f,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(is).join(`
`),f.length>0&&(f+=`
`),v=[m,g].filter(is).join(`
`),v.length>0&&(v+=`
`)):(f=[Ta(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),v=[m,Ta(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Tt.tonemapping_pars_fragment:"",e.toneMapping!==zn?Tp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Tt.encodings_pars_fragment,Ap("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),r=$r(r),r=Sa(r,e),r=Ea(r,e),o=$r(o),o=Sa(o,e),o=Ea(o,e),r=Aa(r),o=Aa(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",e.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=_+f+r,y=_+v+o,b=wa(i,35633,x),A=wa(i,35632,y);if(i.attachShader(p,b),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(b).trim(),B=i.getShaderInfoLog(A).trim();let W=!0,R=!0;if(i.getProgramParameter(p,35714)===!1){W=!1;const D=ba(i,b,"vertex"),z=ba(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+D+`
`+z)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(P===""||B==="")&&(R=!1);R&&(this.diagnostics={runnable:W,programLog:E,vertexShader:{log:P,prefix:f},fragmentShader:{log:B,prefix:v}})}i.deleteShader(b),i.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new Ws(i,p)),L};let w;return this.getAttributes=function(){return w===void 0&&(w=Rp(i,p)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=bp++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=A,this}let Gp=0;class Vp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wp(t),e.set(t,n)),n}}class Wp{constructor(t){this.id=Gp++,this.code=t,this.usedTimes=0}}function Hp(a,t,e,n,i,s,r){const o=new so,l=new Vp,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w,E,P,B,W){const R=B.fog,D=W.geometry,z=w.isMeshStandardMaterial?B.environment:null,I=(w.isMeshStandardMaterial?e:t).get(w.envMap||z),H=I&&I.mapping===Ks?I.image.height:null,O=g[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const X=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,K=X!==void 0?X.length:0;let nt=0;D.morphAttributes.position!==void 0&&(nt=1),D.morphAttributes.normal!==void 0&&(nt=2),D.morphAttributes.color!==void 0&&(nt=3);let N,Q,et,U;if(O){const At=pn[O];N=At.vertexShader,Q=At.fragmentShader}else N=w.vertexShader,Q=w.fragmentShader,l.update(w),et=l.getVertexShaderID(w),U=l.getFragmentShaderID(w);const ot=a.getRenderTarget(),at=w.alphaTest>0,ut=w.clearcoat>0,pt=w.iridescence>0;return{isWebGL2:h,shaderID:O,shaderName:w.type,vertexShader:N,fragmentShader:Q,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:U,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:u,outputEncoding:ot===null?a.outputEncoding:ot.isXRRenderTarget===!0?ot.texture.encoding:li,map:!!w.map,matcap:!!w.matcap,envMap:!!I,envMapMode:I&&I.mapping,envMapCubeUVHeight:H,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===Yc,tangentSpaceNormalMap:w.normalMapType===gl,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===qt,clearcoat:ut,clearcoatMap:ut&&!!w.clearcoatMap,clearcoatRoughnessMap:ut&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:ut&&!!w.clearcoatNormalMap,iridescence:pt,iridescenceMap:pt&&!!w.iridescenceMap,iridescenceThicknessMap:pt&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===Pi,alphaMap:!!w.alphaMap,alphaTest:at,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!D.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!R,useFog:w.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:nt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&P.length>0,shadowMapType:a.shadowMap.type,toneMapping:w.toneMapped?a.toneMapping:zn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Dn,flipSided:w.side===Oe,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)E.push(P),E.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(v(E,w),_(E,w),E.push(a.outputEncoding)),E.push(w.customProgramCacheKey),E.join()}function v(w,E){w.push(E.precision),w.push(E.outputEncoding),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.combine),w.push(E.vertexUvs),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function _(w,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),w.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),w.push(o.mask)}function x(w){const E=g[w.type];let P;if(E){const B=pn[E];P=Lh.clone(B.uniforms)}else P=w.uniforms;return P}function y(w,E){let P;for(let B=0,W=c.length;B<W;B++){const R=c[B];if(R.cacheKey===E){P=R,++P.usedTimes;break}}return P===void 0&&(P=new Up(a,E,w,s),c.push(P)),P}function b(w){if(--w.usedTimes===0){const E=c.indexOf(w);c[E]=c[c.length-1],c.pop(),w.destroy()}}function A(w){l.remove(w)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:y,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:L}}function qp(){let a=new WeakMap;function t(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function e(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Xp(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function Ca(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function La(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,m,g,p,f){let v=a[t];return v===void 0?(v={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:f},a[t]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=m,v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=p,v.group=f),t++,v}function o(d,u,m,g,p,f){const v=r(d,u,m,g,p,f);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):e.push(v)}function l(d,u,m,g,p,f){const v=r(d,u,m,g,p,f);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function c(d,u){e.length>1&&e.sort(d||Xp),n.length>1&&n.sort(u||Ca),i.length>1&&i.sort(u||Ca)}function h(){for(let d=t,u=a.length;d<u;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function jp(){let a=new WeakMap;function t(n,i){const s=a.get(n);let r;return s===void 0?(r=new La,a.set(n,[r])):i>=s.length?(r=new La,s.push(r)):r=s[i],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function Yp(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new kt};break;case"SpotLight":e={position:new G,direction:new G,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new G,halfWidth:new G,halfHeight:new G};break}return a[t.id]=e,e}}}function Kp(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let Zp=0;function $p(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function Jp(a,t){const e=new Yp,n=Kp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new G);const s=new G,r=new ie,o=new ie;function l(h,d){let u=0,m=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,f=0,v=0,_=0,x=0,y=0,b=0,A=0,L=0,w=0;h.sort($p);const E=d===!0?Math.PI:1;for(let B=0,W=h.length;B<W;B++){const R=h[B],D=R.color,z=R.intensity,I=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=D.r*z*E,m+=D.g*z*E,g+=D.b*z*E;else if(R.isLightProbe)for(let O=0;O<9;O++)i.probe[O].addScaledVector(R.sh.coefficients[O],z);else if(R.isDirectionalLight){const O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity*E),R.castShadow){const X=R.shadow,K=n.get(R);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=R.shadow.matrix,y++}i.directional[p]=O,p++}else if(R.isSpotLight){const O=e.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(D).multiplyScalar(z*E),O.distance=I,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,i.spot[v]=O;const X=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,X.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[v]=X.matrix,R.castShadow){const K=n.get(R);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.spotShadow[v]=K,i.spotShadowMap[v]=H,A++}v++}else if(R.isRectAreaLight){const O=e.get(R);O.color.copy(D).multiplyScalar(z),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),i.rectArea[_]=O,_++}else if(R.isPointLight){const O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity*E),O.distance=R.distance,O.decay=R.decay,R.castShadow){const X=R.shadow,K=n.get(R);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,i.pointShadow[f]=K,i.pointShadowMap[f]=H,i.pointShadowMatrix[f]=R.shadow.matrix,b++}i.point[f]=O,f++}else if(R.isHemisphereLight){const O=e.get(R);O.skyColor.copy(R.color).multiplyScalar(z*E),O.groundColor.copy(R.groundColor).multiplyScalar(z*E),i.hemi[x]=O,x++}}_>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==p||P.pointLength!==f||P.spotLength!==v||P.rectAreaLength!==_||P.hemiLength!==x||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==A||P.numSpotMaps!==L)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=_,i.point.length=f,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=A+L-w,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=w,P.directionalLength=p,P.pointLength=f,P.spotLength=v,P.rectAreaLength=_,P.hemiLength=x,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=A,P.numSpotMaps=L,i.version=Zp++)}function c(h,d){let u=0,m=0,g=0,p=0,f=0;const v=d.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const y=h[_];if(y.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(v),u++}else if(y.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(v),g++}else if(y.isRectAreaLight){const b=i.rectArea[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(v),o.identity(),r.copy(y.matrixWorld),r.premultiply(v),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(v),m++}else if(y.isHemisphereLight){const b=i.hemi[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(v),f++}}}return{setup:l,setupView:c,state:i}}function Ra(a,t){const e=new Jp(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Qp(a,t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let l;return o===void 0?(l=new Ra(a,t),e.set(s,[l])):r>=o.length?(l=new Ra(a,t),o.push(l)):l=o[r],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class tm extends ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class em extends ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,im=`uniform sampler2D shadow_pass;
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
}`;function sm(a,t,e){let n=new ro;const i=new Gt,s=new Gt,r=new ue,o=new tm({depthPacking:jc}),l=new em,c={},h=e.maxTextureSize,d={[Wn]:Oe,[Oe]:Wn,[Dn]:Dn},u=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:nm,fragmentShader:im}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new qn;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Pt(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl,this.render=function(y,b,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const L=a.getRenderTarget(),w=a.getActiveCubeFace(),E=a.getActiveMipmapLevel(),P=a.state;P.setBlending(Gn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let B=0,W=y.length;B<W;B++){const R=y[B],D=R.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const z=D.getFrameExtents();if(i.multiply(z),s.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,D.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,D.mapSize.y=s.y)),D.map===null){const H=this.type!==es?{minFilter:fe,magFilter:fe}:{};D.map=new hi(i.x,i.y,H),D.map.texture.name=R.name+".shadowMap",D.camera.updateProjectionMatrix()}a.setRenderTarget(D.map),a.clear();const I=D.getViewportCount();for(let H=0;H<I;H++){const O=D.getViewport(H);r.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),P.viewport(r),D.updateMatrices(R,H),n=D.getFrustum(),x(b,A,D.camera,R,this.type)}D.isPointLightShadow!==!0&&this.type===es&&v(D,A),D.needsUpdate=!1}f.needsUpdate=!1,a.setRenderTarget(L,w,E)};function v(y,b){const A=t.update(p);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new hi(i.x,i.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,a.setRenderTarget(y.mapPass),a.clear(),a.renderBufferDirect(b,null,A,u,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,a.setRenderTarget(y.map),a.clear(),a.renderBufferDirect(b,null,A,m,p,null)}function _(y,b,A,L,w,E){let P=null;const B=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(B!==void 0)P=B;else if(P=A.isPointLight===!0?l:o,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const W=P.uuid,R=b.uuid;let D=c[W];D===void 0&&(D={},c[W]=D);let z=D[R];z===void 0&&(z=P.clone(),D[R]=z),P=z}return P.visible=b.visible,P.wireframe=b.wireframe,E===es?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:d[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=L,P.farDistance=w),P}function x(y,b,A,L,w){if(y.visible===!1)return;if(y.layers.test(b.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&w===es)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const B=t.update(y),W=y.material;if(Array.isArray(W)){const R=B.groups;for(let D=0,z=R.length;D<z;D++){const I=R[D],H=W[I.materialIndex];if(H&&H.visible){const O=_(y,H,L,A.near,A.far,w);a.renderBufferDirect(A,null,B,O,y,I)}}}else if(W.visible){const R=_(y,W,L,A.near,A.far,w);a.renderBufferDirect(A,null,B,R,y,null)}}const P=y.children;for(let B=0,W=P.length;B<W;B++)x(P[B],b,A,L,w)}}function rm(a,t,e){const n=e.isWebGL2;function i(){let F=!1;const Y=new ue;let tt=null;const ht=new ue(0,0,0,0);return{setMask:function(mt){tt!==mt&&!F&&(a.colorMask(mt,mt,mt,mt),tt=mt)},setLocked:function(mt){F=mt},setClear:function(mt,Wt,ae,Me,an){an===!0&&(mt*=Me,Wt*=Me,ae*=Me),Y.set(mt,Wt,ae,Me),ht.equals(Y)===!1&&(a.clearColor(mt,Wt,ae,Me),ht.copy(Y))},reset:function(){F=!1,tt=null,ht.set(-1,0,0,0)}}}function s(){let F=!1,Y=null,tt=null,ht=null;return{setTest:function(mt){mt?at(2929):ut(2929)},setMask:function(mt){Y!==mt&&!F&&(a.depthMask(mt),Y=mt)},setFunc:function(mt){if(tt!==mt){switch(mt){case gc:a.depthFunc(512);break;case vc:a.depthFunc(519);break;case _c:a.depthFunc(513);break;case Hr:a.depthFunc(515);break;case xc:a.depthFunc(514);break;case yc:a.depthFunc(518);break;case Mc:a.depthFunc(516);break;case wc:a.depthFunc(517);break;default:a.depthFunc(515)}tt=mt}},setLocked:function(mt){F=mt},setClear:function(mt){ht!==mt&&(a.clearDepth(mt),ht=mt)},reset:function(){F=!1,Y=null,tt=null,ht=null}}}function r(){let F=!1,Y=null,tt=null,ht=null,mt=null,Wt=null,ae=null,Me=null,an=null;return{setTest:function(Yt){F||(Yt?at(2960):ut(2960))},setMask:function(Yt){Y!==Yt&&!F&&(a.stencilMask(Yt),Y=Yt)},setFunc:function(Yt,Ue,ln){(tt!==Yt||ht!==Ue||mt!==ln)&&(a.stencilFunc(Yt,Ue,ln),tt=Yt,ht=Ue,mt=ln)},setOp:function(Yt,Ue,ln){(Wt!==Yt||ae!==Ue||Me!==ln)&&(a.stencilOp(Yt,Ue,ln),Wt=Yt,ae=Ue,Me=ln)},setLocked:function(Yt){F=Yt},setClear:function(Yt){an!==Yt&&(a.clearStencil(Yt),an=Yt)},reset:function(){F=!1,Y=null,tt=null,ht=null,mt=null,Wt=null,ae=null,Me=null,an=null}}}const o=new i,l=new s,c=new r,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,p=[],f=null,v=!1,_=null,x=null,y=null,b=null,A=null,L=null,w=null,E=!1,P=null,B=null,W=null,R=null,D=null;const z=a.getParameter(35661);let I=!1,H=0;const O=a.getParameter(7938);O.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(O)[1]),I=H>=1):O.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),I=H>=2);let X=null,K={};const nt=a.getParameter(3088),N=a.getParameter(2978),Q=new ue().fromArray(nt),et=new ue().fromArray(N);function U(F,Y,tt){const ht=new Uint8Array(4),mt=a.createTexture();a.bindTexture(F,mt),a.texParameteri(F,10241,9728),a.texParameteri(F,10240,9728);for(let Wt=0;Wt<tt;Wt++)a.texImage2D(Y+Wt,0,6408,1,1,0,6408,5121,ht);return mt}const ot={};ot[3553]=U(3553,3553,1),ot[34067]=U(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),at(2929),l.setFunc(Hr),pe(!1),de(xo),at(2884),ee(Gn);function at(F){u[F]!==!0&&(a.enable(F),u[F]=!0)}function ut(F){u[F]!==!1&&(a.disable(F),u[F]=!1)}function pt(F,Y){return m[F]!==Y?(a.bindFramebuffer(F,Y),m[F]=Y,n&&(F===36009&&(m[36160]=Y),F===36160&&(m[36009]=Y)),!0):!1}function xt(F,Y){let tt=p,ht=!1;if(F)if(tt=g.get(Y),tt===void 0&&(tt=[],g.set(Y,tt)),F.isWebGLMultipleRenderTargets){const mt=F.texture;if(tt.length!==mt.length||tt[0]!==36064){for(let Wt=0,ae=mt.length;Wt<ae;Wt++)tt[Wt]=36064+Wt;tt.length=mt.length,ht=!0}}else tt[0]!==36064&&(tt[0]=36064,ht=!0);else tt[0]!==1029&&(tt[0]=1029,ht=!0);ht&&(e.isWebGL2?a.drawBuffers(tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(tt))}function At(F){return f!==F?(a.useProgram(F),f=F,!0):!1}const Ct={[Ci]:32774,[rc]:32778,[oc]:32779};if(n)Ct[bo]=32775,Ct[So]=32776;else{const F=t.get("EXT_blend_minmax");F!==null&&(Ct[bo]=F.MIN_EXT,Ct[So]=F.MAX_EXT)}const Nt={[ac]:0,[lc]:1,[cc]:768,[ul]:770,[mc]:776,[fc]:774,[uc]:772,[hc]:769,[dl]:771,[pc]:775,[dc]:773};function ee(F,Y,tt,ht,mt,Wt,ae,Me){if(F===Gn){v===!0&&(ut(3042),v=!1);return}if(v===!1&&(at(3042),v=!0),F!==sc){if(F!==_||Me!==E){if((x!==Ci||A!==Ci)&&(a.blendEquation(32774),x=Ci,A=Ci),Me)switch(F){case Pi:a.blendFuncSeparate(1,771,1,771);break;case yo:a.blendFunc(1,1);break;case Mo:a.blendFuncSeparate(0,769,0,1);break;case wo:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Pi:a.blendFuncSeparate(770,771,1,771);break;case yo:a.blendFunc(770,1);break;case Mo:a.blendFuncSeparate(0,769,0,1);break;case wo:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,b=null,L=null,w=null,_=F,E=Me}return}mt=mt||Y,Wt=Wt||tt,ae=ae||ht,(Y!==x||mt!==A)&&(a.blendEquationSeparate(Ct[Y],Ct[mt]),x=Y,A=mt),(tt!==y||ht!==b||Wt!==L||ae!==w)&&(a.blendFuncSeparate(Nt[tt],Nt[ht],Nt[Wt],Nt[ae]),y=tt,b=ht,L=Wt,w=ae),_=F,E=!1}function ye(F,Y){F.side===Dn?ut(2884):at(2884);let tt=F.side===Oe;Y&&(tt=!tt),pe(tt),F.blending===Pi&&F.transparent===!1?ee(Gn):ee(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const ht=F.stencilWrite;c.setTest(ht),ht&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Vt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?at(32926):ut(32926)}function pe(F){P!==F&&(F?a.frontFace(2304):a.frontFace(2305),P=F)}function de(F){F!==nc?(at(2884),F!==B&&(F===xo?a.cullFace(1029):F===ic?a.cullFace(1028):a.cullFace(1032))):ut(2884),B=F}function Xt(F){F!==W&&(I&&a.lineWidth(F),W=F)}function Vt(F,Y,tt){F?(at(32823),(R!==Y||D!==tt)&&(a.polygonOffset(Y,tt),R=Y,D=tt)):ut(32823)}function Pe(F){F?at(3089):ut(3089)}function je(F){F===void 0&&(F=33984+z-1),X!==F&&(a.activeTexture(F),X=F)}function C(F,Y,tt){tt===void 0&&(X===null?tt=33984+z-1:tt=X);let ht=K[tt];ht===void 0&&(ht={type:void 0,texture:void 0},K[tt]=ht),(ht.type!==F||ht.texture!==Y)&&(X!==tt&&(a.activeTexture(tt),X=tt),a.bindTexture(F,Y||ot[F]),ht.type=F,ht.texture=Y)}function S(){const F=K[X];F!==void 0&&F.type!==void 0&&(a.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{a.compressedTexImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{a.compressedTexImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{a.texSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{a.texSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{a.texStorage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{a.texStorage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{a.texImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{a.texImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(F){Q.equals(F)===!1&&(a.scissor(F.x,F.y,F.z,F.w),Q.copy(F))}function _t(F){et.equals(F)===!1&&(a.viewport(F.x,F.y,F.z,F.w),et.copy(F))}function Ft(F,Y){let tt=d.get(Y);tt===void 0&&(tt=new WeakMap,d.set(Y,tt));let ht=tt.get(F);ht===void 0&&(ht=a.getUniformBlockIndex(Y,F.name),tt.set(F,ht))}function jt(F,Y){const ht=d.get(Y).get(F);h.get(Y)!==ht&&(a.uniformBlockBinding(Y,ht,F.__bindingPointIndex),h.set(Y,ht))}function oe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},X=null,K={},m={},g=new WeakMap,p=[],f=null,v=!1,_=null,x=null,y=null,b=null,A=null,L=null,w=null,E=!1,P=null,B=null,W=null,R=null,D=null,Q.set(0,0,a.canvas.width,a.canvas.height),et.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:at,disable:ut,bindFramebuffer:pt,drawBuffers:xt,useProgram:At,setBlending:ee,setMaterial:ye,setFlipSided:pe,setCullFace:de,setLineWidth:Xt,setPolygonOffset:Vt,setScissorTest:Pe,activeTexture:je,bindTexture:C,unbindTexture:S,compressedTexImage2D:Z,compressedTexImage3D:it,texImage2D:gt,texImage3D:St,updateUBOMapping:Ft,uniformBlockBinding:jt,texStorage2D:J,texStorage3D:bt,texSubImage2D:st,texSubImage3D:lt,compressedTexSubImage2D:yt,compressedTexSubImage3D:dt,scissor:wt,viewport:_t,reset:oe}}function om(a,t,e,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return v?new OffscreenCanvas(C,S):qs("canvas")}function x(C,S,Z,it){let st=1;if((C.width>it||C.height>it)&&(st=it/Math.max(C.width,C.height)),st<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const lt=S?_l:Math.floor,yt=lt(st*C.width),dt=lt(st*C.height);p===void 0&&(p=_(yt,dt));const J=Z?_(yt,dt):p;return J.width=yt,J.height=dt,J.getContext("2d").drawImage(C,0,0,yt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+yt+"x"+dt+")."),J}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Zr(C.width)&&Zr(C.height)}function b(C){return o?!1:C.wrapS!==Be||C.wrapT!==Be||C.minFilter!==fe&&C.minFilter!==He}function A(C,S){return C.generateMipmaps&&S&&C.minFilter!==fe&&C.minFilter!==He}function L(C){a.generateMipmap(C)}function w(C,S,Z,it,st=!1){if(o===!1)return S;if(C!==null){if(a[C]!==void 0)return a[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let lt=S;return S===6403&&(Z===5126&&(lt=33326),Z===5131&&(lt=33325),Z===5121&&(lt=33321)),S===33319&&(Z===5126&&(lt=33328),Z===5131&&(lt=33327),Z===5121&&(lt=33323)),S===6408&&(Z===5126&&(lt=34836),Z===5131&&(lt=34842),Z===5121&&(lt=it===qt&&st===!1?35907:32856),Z===32819&&(lt=32854),Z===32820&&(lt=32855)),(lt===33325||lt===33326||lt===33327||lt===33328||lt===34842||lt===34836)&&t.get("EXT_color_buffer_float"),lt}function E(C,S,Z){return A(C,Z)===!0||C.isFramebufferTexture&&C.minFilter!==fe&&C.minFilter!==He?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){return C===fe||C===Eo||C===nr?9728:9729}function B(C){const S=C.target;S.removeEventListener("dispose",B),R(S),S.isVideoTexture&&g.delete(S)}function W(C){const S=C.target;S.removeEventListener("dispose",W),z(S)}function R(C){const S=n.get(C);if(S.__webglInit===void 0)return;const Z=C.source,it=f.get(Z);if(it){const st=it[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&D(C),Object.keys(it).length===0&&f.delete(Z)}n.remove(C)}function D(C){const S=n.get(C);a.deleteTexture(S.__webglTexture);const Z=C.source,it=f.get(Z);delete it[S.__cacheKey],r.memory.textures--}function z(C){const S=C.texture,Z=n.get(C),it=n.get(S);if(it.__webglTexture!==void 0&&(a.deleteTexture(it.__webglTexture),r.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let st=0;st<6;st++)a.deleteFramebuffer(Z.__webglFramebuffer[st]),Z.__webglDepthbuffer&&a.deleteRenderbuffer(Z.__webglDepthbuffer[st]);else{if(a.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&a.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&a.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let st=0;st<Z.__webglColorRenderbuffer.length;st++)Z.__webglColorRenderbuffer[st]&&a.deleteRenderbuffer(Z.__webglColorRenderbuffer[st]);Z.__webglDepthRenderbuffer&&a.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let st=0,lt=S.length;st<lt;st++){const yt=n.get(S[st]);yt.__webglTexture&&(a.deleteTexture(yt.__webglTexture),r.memory.textures--),n.remove(S[st])}n.remove(S),n.remove(C)}let I=0;function H(){I=0}function O(){const C=I;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),I+=1,C}function X(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.encoding),S.join()}function K(C,S){const Z=n.get(C);if(C.isVideoTexture&&Pe(C),C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){const it=C.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(Z,C,S);return}}e.bindTexture(3553,Z.__webglTexture,33984+S)}function nt(C,S){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){ut(Z,C,S);return}e.bindTexture(35866,Z.__webglTexture,33984+S)}function N(C,S){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){ut(Z,C,S);return}e.bindTexture(32879,Z.__webglTexture,33984+S)}function Q(C,S){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){pt(Z,C,S);return}e.bindTexture(34067,Z.__webglTexture,33984+S)}const et={[jr]:10497,[Be]:33071,[Yr]:33648},U={[fe]:9728,[Eo]:9984,[nr]:9986,[He]:9729,[Rc]:9985,[ls]:9987};function ot(C,S,Z){if(Z?(a.texParameteri(C,10242,et[S.wrapS]),a.texParameteri(C,10243,et[S.wrapT]),(C===32879||C===35866)&&a.texParameteri(C,32882,et[S.wrapR]),a.texParameteri(C,10240,U[S.magFilter]),a.texParameteri(C,10241,U[S.minFilter])):(a.texParameteri(C,10242,33071),a.texParameteri(C,10243,33071),(C===32879||C===35866)&&a.texParameteri(C,32882,33071),(S.wrapS!==Be||S.wrapT!==Be)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(C,10240,P(S.magFilter)),a.texParameteri(C,10241,P(S.minFilter)),S.minFilter!==fe&&S.minFilter!==He&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===fe||S.minFilter!==nr&&S.minFilter!==ls||S.type===ri&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===cs&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(a.texParameterf(C,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function at(C,S){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",B));const it=S.source;let st=f.get(it);st===void 0&&(st={},f.set(it,st));const lt=X(S);if(lt!==C.__cacheKey){st[lt]===void 0&&(st[lt]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,Z=!0),st[lt].usedTimes++;const yt=st[C.__cacheKey];yt!==void 0&&(st[C.__cacheKey].usedTimes--,yt.usedTimes===0&&D(S)),C.__cacheKey=lt,C.__webglTexture=st[lt].texture}return Z}function ut(C,S,Z){let it=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(it=35866),S.isData3DTexture&&(it=32879);const st=at(C,S),lt=S.source;e.bindTexture(it,C.__webglTexture,33984+Z);const yt=n.get(lt);if(lt.version!==yt.__version||st===!0){e.activeTexture(33984+Z),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const dt=b(S)&&y(S.image)===!1;let J=x(S.image,dt,!1,h);J=je(S,J);const bt=y(J)||o,gt=s.convert(S.format,S.encoding);let St=s.convert(S.type),wt=w(S.internalFormat,gt,St,S.encoding,S.isVideoTexture);ot(it,S,bt);let _t;const Ft=S.mipmaps,jt=o&&S.isVideoTexture!==!0,oe=yt.__version===void 0||st===!0,F=E(S,J,bt);if(S.isDepthTexture)wt=6402,o?S.type===ri?wt=36012:S.type===si?wt=33190:S.type===Di?wt=35056:wt=33189:S.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===oi&&wt===6402&&S.type!==ml&&S.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=si,St=s.convert(S.type)),S.format===Fi&&wt===6402&&(wt=34041,S.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Di,St=s.convert(S.type))),oe&&(jt?e.texStorage2D(3553,1,wt,J.width,J.height):e.texImage2D(3553,0,wt,J.width,J.height,0,gt,St,null));else if(S.isDataTexture)if(Ft.length>0&&bt){jt&&oe&&e.texStorage2D(3553,F,wt,Ft[0].width,Ft[0].height);for(let Y=0,tt=Ft.length;Y<tt;Y++)_t=Ft[Y],jt?e.texSubImage2D(3553,Y,0,0,_t.width,_t.height,gt,St,_t.data):e.texImage2D(3553,Y,wt,_t.width,_t.height,0,gt,St,_t.data);S.generateMipmaps=!1}else jt?(oe&&e.texStorage2D(3553,F,wt,J.width,J.height),e.texSubImage2D(3553,0,0,0,J.width,J.height,gt,St,J.data)):e.texImage2D(3553,0,wt,J.width,J.height,0,gt,St,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){jt&&oe&&e.texStorage3D(35866,F,wt,Ft[0].width,Ft[0].height,J.depth);for(let Y=0,tt=Ft.length;Y<tt;Y++)_t=Ft[Y],S.format!==Qe?gt!==null?jt?e.compressedTexSubImage3D(35866,Y,0,0,0,_t.width,_t.height,J.depth,gt,_t.data,0,0):e.compressedTexImage3D(35866,Y,wt,_t.width,_t.height,J.depth,0,_t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage3D(35866,Y,0,0,0,_t.width,_t.height,J.depth,gt,St,_t.data):e.texImage3D(35866,Y,wt,_t.width,_t.height,J.depth,0,gt,St,_t.data)}else{jt&&oe&&e.texStorage2D(3553,F,wt,Ft[0].width,Ft[0].height);for(let Y=0,tt=Ft.length;Y<tt;Y++)_t=Ft[Y],S.format!==Qe?gt!==null?jt?e.compressedTexSubImage2D(3553,Y,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(3553,Y,wt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage2D(3553,Y,0,0,_t.width,_t.height,gt,St,_t.data):e.texImage2D(3553,Y,wt,_t.width,_t.height,0,gt,St,_t.data)}else if(S.isDataArrayTexture)jt?(oe&&e.texStorage3D(35866,F,wt,J.width,J.height,J.depth),e.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,gt,St,J.data)):e.texImage3D(35866,0,wt,J.width,J.height,J.depth,0,gt,St,J.data);else if(S.isData3DTexture)jt?(oe&&e.texStorage3D(32879,F,wt,J.width,J.height,J.depth),e.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,gt,St,J.data)):e.texImage3D(32879,0,wt,J.width,J.height,J.depth,0,gt,St,J.data);else if(S.isFramebufferTexture){if(oe)if(jt)e.texStorage2D(3553,F,wt,J.width,J.height);else{let Y=J.width,tt=J.height;for(let ht=0;ht<F;ht++)e.texImage2D(3553,ht,wt,Y,tt,0,gt,St,null),Y>>=1,tt>>=1}}else if(Ft.length>0&&bt){jt&&oe&&e.texStorage2D(3553,F,wt,Ft[0].width,Ft[0].height);for(let Y=0,tt=Ft.length;Y<tt;Y++)_t=Ft[Y],jt?e.texSubImage2D(3553,Y,0,0,gt,St,_t):e.texImage2D(3553,Y,wt,gt,St,_t);S.generateMipmaps=!1}else jt?(oe&&e.texStorage2D(3553,F,wt,J.width,J.height),e.texSubImage2D(3553,0,0,0,gt,St,J)):e.texImage2D(3553,0,wt,gt,St,J);A(S,bt)&&L(it),yt.__version=lt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function pt(C,S,Z){if(S.image.length!==6)return;const it=at(C,S),st=S.source;e.bindTexture(34067,C.__webglTexture,33984+Z);const lt=n.get(st);if(st.version!==lt.__version||it===!0){e.activeTexture(33984+Z),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const yt=S.isCompressedTexture||S.image[0].isCompressedTexture,dt=S.image[0]&&S.image[0].isDataTexture,J=[];for(let Y=0;Y<6;Y++)!yt&&!dt?J[Y]=x(S.image[Y],!1,!0,c):J[Y]=dt?S.image[Y].image:S.image[Y],J[Y]=je(S,J[Y]);const bt=J[0],gt=y(bt)||o,St=s.convert(S.format,S.encoding),wt=s.convert(S.type),_t=w(S.internalFormat,St,wt,S.encoding),Ft=o&&S.isVideoTexture!==!0,jt=lt.__version===void 0||it===!0;let oe=E(S,bt,gt);ot(34067,S,gt);let F;if(yt){Ft&&jt&&e.texStorage2D(34067,oe,_t,bt.width,bt.height);for(let Y=0;Y<6;Y++){F=J[Y].mipmaps;for(let tt=0;tt<F.length;tt++){const ht=F[tt];S.format!==Qe?St!==null?Ft?e.compressedTexSubImage2D(34069+Y,tt,0,0,ht.width,ht.height,St,ht.data):e.compressedTexImage2D(34069+Y,tt,_t,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(34069+Y,tt,0,0,ht.width,ht.height,St,wt,ht.data):e.texImage2D(34069+Y,tt,_t,ht.width,ht.height,0,St,wt,ht.data)}}}else{F=S.mipmaps,Ft&&jt&&(F.length>0&&oe++,e.texStorage2D(34067,oe,_t,J[0].width,J[0].height));for(let Y=0;Y<6;Y++)if(dt){Ft?e.texSubImage2D(34069+Y,0,0,0,J[Y].width,J[Y].height,St,wt,J[Y].data):e.texImage2D(34069+Y,0,_t,J[Y].width,J[Y].height,0,St,wt,J[Y].data);for(let tt=0;tt<F.length;tt++){const mt=F[tt].image[Y].image;Ft?e.texSubImage2D(34069+Y,tt+1,0,0,mt.width,mt.height,St,wt,mt.data):e.texImage2D(34069+Y,tt+1,_t,mt.width,mt.height,0,St,wt,mt.data)}}else{Ft?e.texSubImage2D(34069+Y,0,0,0,St,wt,J[Y]):e.texImage2D(34069+Y,0,_t,St,wt,J[Y]);for(let tt=0;tt<F.length;tt++){const ht=F[tt];Ft?e.texSubImage2D(34069+Y,tt+1,0,0,St,wt,ht.image[Y]):e.texImage2D(34069+Y,tt+1,_t,St,wt,ht.image[Y])}}}A(S,gt)&&L(34067),lt.__version=st.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function xt(C,S,Z,it,st){const lt=s.convert(Z.format,Z.encoding),yt=s.convert(Z.type),dt=w(Z.internalFormat,lt,yt,Z.encoding);n.get(S).__hasExternalTextures||(st===32879||st===35866?e.texImage3D(st,0,dt,S.width,S.height,S.depth,0,lt,yt,null):e.texImage2D(st,0,dt,S.width,S.height,0,lt,yt,null)),e.bindFramebuffer(36160,C),Vt(S)?u.framebufferTexture2DMultisampleEXT(36160,it,st,n.get(Z).__webglTexture,0,Xt(S)):(st===3553||st>=34069&&st<=34074)&&a.framebufferTexture2D(36160,it,st,n.get(Z).__webglTexture,0),e.bindFramebuffer(36160,null)}function At(C,S,Z){if(a.bindRenderbuffer(36161,C),S.depthBuffer&&!S.stencilBuffer){let it=33189;if(Z||Vt(S)){const st=S.depthTexture;st&&st.isDepthTexture&&(st.type===ri?it=36012:st.type===si&&(it=33190));const lt=Xt(S);Vt(S)?u.renderbufferStorageMultisampleEXT(36161,lt,it,S.width,S.height):a.renderbufferStorageMultisample(36161,lt,it,S.width,S.height)}else a.renderbufferStorage(36161,it,S.width,S.height);a.framebufferRenderbuffer(36160,36096,36161,C)}else if(S.depthBuffer&&S.stencilBuffer){const it=Xt(S);Z&&Vt(S)===!1?a.renderbufferStorageMultisample(36161,it,35056,S.width,S.height):Vt(S)?u.renderbufferStorageMultisampleEXT(36161,it,35056,S.width,S.height):a.renderbufferStorage(36161,34041,S.width,S.height),a.framebufferRenderbuffer(36160,33306,36161,C)}else{const it=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let st=0;st<it.length;st++){const lt=it[st],yt=s.convert(lt.format,lt.encoding),dt=s.convert(lt.type),J=w(lt.internalFormat,yt,dt,lt.encoding),bt=Xt(S);Z&&Vt(S)===!1?a.renderbufferStorageMultisample(36161,bt,J,S.width,S.height):Vt(S)?u.renderbufferStorageMultisampleEXT(36161,bt,J,S.width,S.height):a.renderbufferStorage(36161,J,S.width,S.height)}}a.bindRenderbuffer(36161,null)}function Ct(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const it=n.get(S.depthTexture).__webglTexture,st=Xt(S);if(S.depthTexture.format===oi)Vt(S)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,it,0,st):a.framebufferTexture2D(36160,36096,3553,it,0);else if(S.depthTexture.format===Fi)Vt(S)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,it,0,st):a.framebufferTexture2D(36160,33306,3553,it,0);else throw new Error("Unknown depthTexture format")}function Nt(C){const S=n.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ct(S.__webglFramebuffer,C)}else if(Z){S.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(36160,S.__webglFramebuffer[it]),S.__webglDepthbuffer[it]=a.createRenderbuffer(),At(S.__webglDepthbuffer[it],C,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),At(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(36160,null)}function ee(C,S,Z){const it=n.get(C);S!==void 0&&xt(it.__webglFramebuffer,C,C.texture,36064,3553),Z!==void 0&&Nt(C)}function ye(C){const S=C.texture,Z=n.get(C),it=n.get(S);C.addEventListener("dispose",W),C.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=a.createTexture()),it.__version=S.version,r.memory.textures++);const st=C.isWebGLCubeRenderTarget===!0,lt=C.isWebGLMultipleRenderTargets===!0,yt=y(C)||o;if(st){Z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)Z.__webglFramebuffer[dt]=a.createFramebuffer()}else{if(Z.__webglFramebuffer=a.createFramebuffer(),lt)if(i.drawBuffers){const dt=C.texture;for(let J=0,bt=dt.length;J<bt;J++){const gt=n.get(dt[J]);gt.__webglTexture===void 0&&(gt.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Vt(C)===!1){const dt=lt?S:[S];Z.__webglMultisampledFramebuffer=a.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let J=0;J<dt.length;J++){const bt=dt[J];Z.__webglColorRenderbuffer[J]=a.createRenderbuffer(),a.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[J]);const gt=s.convert(bt.format,bt.encoding),St=s.convert(bt.type),wt=w(bt.internalFormat,gt,St,bt.encoding,C.isXRRenderTarget===!0),_t=Xt(C);a.renderbufferStorageMultisample(36161,_t,wt,C.width,C.height),a.framebufferRenderbuffer(36160,36064+J,36161,Z.__webglColorRenderbuffer[J])}a.bindRenderbuffer(36161,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=a.createRenderbuffer(),At(Z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(36160,null)}}if(st){e.bindTexture(34067,it.__webglTexture),ot(34067,S,yt);for(let dt=0;dt<6;dt++)xt(Z.__webglFramebuffer[dt],C,S,36064,34069+dt);A(S,yt)&&L(34067),e.unbindTexture()}else if(lt){const dt=C.texture;for(let J=0,bt=dt.length;J<bt;J++){const gt=dt[J],St=n.get(gt);e.bindTexture(3553,St.__webglTexture),ot(3553,gt,yt),xt(Z.__webglFramebuffer,C,gt,36064+J,3553),A(gt,yt)&&L(3553)}e.unbindTexture()}else{let dt=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?dt=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,it.__webglTexture),ot(dt,S,yt),xt(Z.__webglFramebuffer,C,S,36064,dt),A(S,yt)&&L(dt),e.unbindTexture()}C.depthBuffer&&Nt(C)}function pe(C){const S=y(C)||o,Z=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let it=0,st=Z.length;it<st;it++){const lt=Z[it];if(A(lt,S)){const yt=C.isWebGLCubeRenderTarget?34067:3553,dt=n.get(lt).__webglTexture;e.bindTexture(yt,dt),L(yt),e.unbindTexture()}}}function de(C){if(o&&C.samples>0&&Vt(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Z=C.width,it=C.height;let st=16384;const lt=[],yt=C.stencilBuffer?33306:36096,dt=n.get(C),J=C.isWebGLMultipleRenderTargets===!0;if(J)for(let bt=0;bt<S.length;bt++)e.bindFramebuffer(36160,dt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+bt,36161,null),e.bindFramebuffer(36160,dt.__webglFramebuffer),a.framebufferTexture2D(36009,36064+bt,3553,null,0);e.bindFramebuffer(36008,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,dt.__webglFramebuffer);for(let bt=0;bt<S.length;bt++){lt.push(36064+bt),C.depthBuffer&&lt.push(yt);const gt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(gt===!1&&(C.depthBuffer&&(st|=256),C.stencilBuffer&&(st|=1024)),J&&a.framebufferRenderbuffer(36008,36064,36161,dt.__webglColorRenderbuffer[bt]),gt===!0&&(a.invalidateFramebuffer(36008,[yt]),a.invalidateFramebuffer(36009,[yt])),J){const St=n.get(S[bt]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,St,0)}a.blitFramebuffer(0,0,Z,it,0,0,Z,it,st,9728),m&&a.invalidateFramebuffer(36008,lt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),J)for(let bt=0;bt<S.length;bt++){e.bindFramebuffer(36160,dt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+bt,36161,dt.__webglColorRenderbuffer[bt]);const gt=n.get(S[bt]).__webglTexture;e.bindFramebuffer(36160,dt.__webglFramebuffer),a.framebufferTexture2D(36009,36064+bt,3553,gt,0)}e.bindFramebuffer(36009,dt.__webglMultisampledFramebuffer)}}function Xt(C){return Math.min(d,C.samples)}function Vt(C){const S=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(C){const S=r.render.frame;g.get(C)!==S&&(g.set(C,S),C.update())}function je(C,S){const Z=C.encoding,it=C.format,st=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Kr||Z!==li&&(Z===qt?o===!1?t.has("EXT_sRGB")===!0&&it===Qe?(C.format=Kr,C.minFilter=He,C.generateMipmaps=!1):S=yl.sRGBToLinear(S):(it!==Qe||st!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),S}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=nt,this.setTexture3D=N,this.setTextureCube=Q,this.rebindTextures=ee,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Vt}function am(a,t,e){const n=e.isWebGL2;function i(s,r=null){let o;if(s===ai)return 5121;if(s===zc)return 32819;if(s===Nc)return 32820;if(s===Pc)return 5120;if(s===Dc)return 5122;if(s===ml)return 5123;if(s===Ic)return 5124;if(s===si)return 5125;if(s===ri)return 5126;if(s===cs)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Fc)return 6406;if(s===Qe)return 6408;if(s===Bc)return 6409;if(s===Oc)return 6410;if(s===oi)return 6402;if(s===Fi)return 34041;if(s===Kr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===kc)return 6403;if(s===Uc)return 36244;if(s===Gc)return 33319;if(s===Vc)return 33320;if(s===Wc)return 36249;if(s===ir||s===sr||s===rr||s===or)if(r===qt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ir)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===sr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ir)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===sr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===rr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===or)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ao||s===To||s===Co||s===Lo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ao)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===To)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Co)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ro||s===Po)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ro)return r===qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Po)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Do||s===Io||s===zo||s===No||s===Fo||s===Bo||s===Oo||s===ko||s===Uo||s===Go||s===Vo||s===Wo||s===Ho||s===qo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Do)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Io)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zo)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===No)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fo)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bo)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Oo)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ko)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Uo)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Go)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vo)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wo)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ho)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qo)return r===qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ar)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===ar)return r===qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===qc||s===Xo||s===jo||s===Yo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===ar)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Xo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===jo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Di?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class lm extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ee extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cm={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const p of t.hand.values()){const f=e.getJointPose(p,n),v=this._getHandJoint(c,p);f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class hm extends Re{constructor(t,e,n,i,s,r,o,l,c,h){if(h=h!==void 0?h:oi,h!==oi&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oi&&(n=si),n===void 0&&h===Fi&&(n=Di),super(null,i,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:fe,this.minFilter=l!==void 0?l:fe,this.flipY=!1,this.generateMipmaps=!1}}class um extends Oi{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null;const p=e.getContextAttributes();let f=null,v=null;const _=[],x=[],y=new Set,b=new Map,A=new qe;A.layers.enable(1),A.viewport=new ue;const L=new qe;L.layers.enable(2),L.viewport=new ue;const w=[A,L],E=new lm;E.layers.enable(1),E.layers.enable(2);let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Q=_[N];return Q===void 0&&(Q=new Pr,_[N]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(N){let Q=_[N];return Q===void 0&&(Q=new Pr,_[N]=Q),Q.getGripSpace()},this.getHand=function(N){let Q=_[N];return Q===void 0&&(Q=new Pr,_[N]=Q),Q.getHandSpace()};function W(N){const Q=x.indexOf(N.inputSource);if(Q===-1)return;const et=_[Q];et!==void 0&&et.dispatchEvent({type:N.type,data:N.inputSource})}function R(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",D);for(let N=0;N<_.length;N++){const Q=x[N];Q!==null&&(x[N]=null,_[N].disconnect(Q))}P=null,B=null,t.setRenderTarget(f),m=null,u=null,d=null,i=null,v=null,nt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",R),i.addEventListener("inputsourceschange",D),p.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:m}),v=new hi(m.framebufferWidth,m.framebufferHeight,{format:Qe,type:ai,encoding:t.outputEncoding,stencilBuffer:p.stencil})}else{let Q=null,et=null,U=null;p.depth&&(U=p.stencil?35056:33190,Q=p.stencil?Fi:oi,et=p.stencil?Di:si);const ot={colorFormat:32856,depthFormat:U,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(ot),i.updateRenderState({layers:[u]}),v=new hi(u.textureWidth,u.textureHeight,{format:Qe,type:ai,depthTexture:new hm(u.textureWidth,u.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const at=t.properties.get(v);at.__ignoreDepthValues=u.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(N){for(let Q=0;Q<N.removed.length;Q++){const et=N.removed[Q],U=x.indexOf(et);U>=0&&(x[U]=null,_[U].disconnect(et))}for(let Q=0;Q<N.added.length;Q++){const et=N.added[Q];let U=x.indexOf(et);if(U===-1){for(let at=0;at<_.length;at++)if(at>=x.length){x.push(et),U=at;break}else if(x[at]===null){x[at]=et,U=at;break}if(U===-1)break}const ot=_[U];ot&&ot.connect(et)}}const z=new G,I=new G;function H(N,Q,et){z.setFromMatrixPosition(Q.matrixWorld),I.setFromMatrixPosition(et.matrixWorld);const U=z.distanceTo(I),ot=Q.projectionMatrix.elements,at=et.projectionMatrix.elements,ut=ot[14]/(ot[10]-1),pt=ot[14]/(ot[10]+1),xt=(ot[9]+1)/ot[5],At=(ot[9]-1)/ot[5],Ct=(ot[8]-1)/ot[0],Nt=(at[8]+1)/at[0],ee=ut*Ct,ye=ut*Nt,pe=U/(-Ct+Nt),de=pe*-Ct;Q.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(de),N.translateZ(pe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Xt=ut+pe,Vt=pt+pe,Pe=ee-de,je=ye+(U-de),C=xt*pt/Vt*Xt,S=At*pt/Vt*Xt;N.projectionMatrix.makePerspective(Pe,je,C,S,Xt,Vt)}function O(N,Q){Q===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Q.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;E.near=L.near=A.near=N.near,E.far=L.far=A.far=N.far,(P!==E.near||B!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,B=E.far);const Q=N.parent,et=E.cameras;O(E,Q);for(let ot=0;ot<et.length;ot++)O(et[ot],Q);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),N.matrix.copy(E.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const U=N.children;for(let ot=0,at=U.length;ot<at;ot++)U[ot].updateMatrixWorld(!0);et.length===2?H(E,A,L):E.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(N){l=N,u!==null&&(u.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)},this.getPlanes=function(){return y};let X=null;function K(N,Q){if(h=Q.getViewerPose(c||r),g=Q,h!==null){const et=h.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let U=!1;et.length!==E.cameras.length&&(E.cameras.length=0,U=!0);for(let ot=0;ot<et.length;ot++){const at=et[ot];let ut=null;if(m!==null)ut=m.getViewport(at);else{const xt=d.getViewSubImage(u,at);ut=xt.viewport,ot===0&&(t.setRenderTargetTextures(v,xt.colorTexture,u.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(v))}let pt=w[ot];pt===void 0&&(pt=new qe,pt.layers.enable(ot),pt.viewport=new ue,w[ot]=pt),pt.matrix.fromArray(at.transform.matrix),pt.projectionMatrix.fromArray(at.projectionMatrix),pt.viewport.set(ut.x,ut.y,ut.width,ut.height),ot===0&&E.matrix.copy(pt.matrix),U===!0&&E.cameras.push(pt)}}for(let et=0;et<_.length;et++){const U=x[et],ot=_[et];U!==null&&ot!==void 0&&ot.update(U,Q,c||r)}if(X&&X(N,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let et=null;for(const U of y)Q.detectedPlanes.has(U)||(et===null&&(et=[]),et.push(U));if(et!==null)for(const U of et)y.delete(U),b.delete(U),n.dispatchEvent({type:"planeremoved",data:U});for(const U of Q.detectedPlanes)if(!y.has(U))y.add(U),b.set(U,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:U});else{const ot=b.get(U);U.lastChangedTime>ot&&(b.set(U,U.lastChangedTime),n.dispatchEvent({type:"planechanged",data:U}))}}g=null}const nt=new Pl;nt.setAnimationLoop(K),this.setAnimationLoop=function(N){X=N},this.dispose=function(){}}}function dm(a,t){function e(p,f){f.color.getRGB(p.fogColor.value,Cl(a)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,v,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),c(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&u(p,f,x)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&r(p,f)):f.isPointsMaterial?o(p,f,v,_):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Oe&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Oe&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=t.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const y=a.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let _;f.map?_=f.map:f.specularMap?_=f.specularMap:f.displacementMap?_=f.displacementMap:f.normalMap?_=f.normalMap:f.bumpMap?_=f.bumpMap:f.roughnessMap?_=f.roughnessMap:f.metalnessMap?_=f.metalnessMap:f.alphaMap?_=f.alphaMap:f.emissiveMap?_=f.emissiveMap:f.clearcoatMap?_=f.clearcoatMap:f.clearcoatNormalMap?_=f.clearcoatNormalMap:f.clearcoatRoughnessMap?_=f.clearcoatRoughnessMap:f.iridescenceMap?_=f.iridescenceMap:f.iridescenceThicknessMap?_=f.iridescenceThicknessMap:f.specularIntensityMap?_=f.specularIntensityMap:f.specularColorMap?_=f.specularColorMap:f.transmissionMap?_=f.transmissionMap:f.thicknessMap?_=f.thicknessMap:f.sheenColorMap?_=f.sheenColorMap:f.sheenRoughnessMap&&(_=f.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix));let x;f.aoMap?x=f.aoMap:f.lightMap&&(x=f.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function r(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,v,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=_*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Oe&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function fm(a,t,e,n){let i={},s={},r=[];const o=e.isWebGL2?a.getParameter(35375):0;function l(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function c(_,x){let y=i[_.id];y===void 0&&(g(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",f));const b=x.program;n.updateUBOMapping(_,b);const A=t.render.frame;s[_.id]!==A&&(u(_),s[_.id]=A)}function h(_){const x=d();_.__bindingPointIndex=x;const y=a.createBuffer(),b=_.__size,A=_.usage;return a.bindBuffer(35345,y),a.bufferData(35345,b,A),a.bindBuffer(35345,null),a.bindBufferBase(35345,x,y),y}function d(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const x=i[_.id],y=_.uniforms,b=_.__cache;a.bindBuffer(35345,x);for(let A=0,L=y.length;A<L;A++){const w=y[A];if(m(w,A,b)===!0){const E=w.__offset,P=Array.isArray(w.value)?w.value:[w.value];let B=0;for(let W=0;W<P.length;W++){const R=P[W],D=p(R);typeof R=="number"?(w.__data[0]=R,a.bufferSubData(35345,E+B,w.__data)):R.isMatrix3?(w.__data[0]=R.elements[0],w.__data[1]=R.elements[1],w.__data[2]=R.elements[2],w.__data[3]=R.elements[0],w.__data[4]=R.elements[3],w.__data[5]=R.elements[4],w.__data[6]=R.elements[5],w.__data[7]=R.elements[0],w.__data[8]=R.elements[6],w.__data[9]=R.elements[7],w.__data[10]=R.elements[8],w.__data[11]=R.elements[0]):(R.toArray(w.__data,B),B+=D.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,E,w.__data)}}a.bindBuffer(35345,null)}function m(_,x,y){const b=_.value;if(y[x]===void 0){if(typeof b=="number")y[x]=b;else{const A=Array.isArray(b)?b:[b],L=[];for(let w=0;w<A.length;w++)L.push(A[w].clone());y[x]=L}return!0}else if(typeof b=="number"){if(y[x]!==b)return y[x]=b,!0}else{const A=Array.isArray(y[x])?y[x]:[y[x]],L=Array.isArray(b)?b:[b];for(let w=0;w<A.length;w++){const E=A[w];if(E.equals(L[w])===!1)return E.copy(L[w]),!0}}return!1}function g(_){const x=_.uniforms;let y=0;const b=16;let A=0;for(let L=0,w=x.length;L<w;L++){const E=x[L],P={boundary:0,storage:0},B=Array.isArray(E.value)?E.value:[E.value];for(let W=0,R=B.length;W<R;W++){const D=B[W],z=p(D);P.boundary+=z.boundary,P.storage+=z.storage}if(E.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,L>0){A=y%b;const W=b-A;A!==0&&W-P.boundary<0&&(y+=b-A,E.__offset=y)}y+=P.storage}return A=y%b,A>0&&(y+=b-A),_.__size=y,_.__cache={},this}function p(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function f(_){const x=_.target;x.removeEventListener("dispose",f);const y=r.indexOf(x.__bindingPointIndex);r.splice(y,1),a.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function v(){for(const _ in i)a.deleteBuffer(i[_]);r=[],i={},s={}}return{bind:l,update:c,dispose:v}}function pm(){const a=qs("canvas");return a.style.display="block",a}function lo(a={}){this.isWebGLRenderer=!0;const t=a.canvas!==void 0?a.canvas:pm(),e=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let d=null,u=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=li,this.useLegacyLights=!0,this.toneMapping=zn,this.toneMappingExposure=1;const p=this;let f=!1,v=0,_=0,x=null,y=-1,b=null;const A=new ue,L=new ue;let w=null,E=t.width,P=t.height,B=1,W=null,R=null;const D=new ue(0,0,E,P),z=new ue(0,0,E,P);let I=!1;const H=new ro;let O=!1,X=!1,K=null;const nt=new ie,N=new G,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return x===null?B:1}let U=e;function ot(T,V){for(let j=0;j<T.length;j++){const k=T[j],$=t.getContext(k,V);if($!==null)return $}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eo}`),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",_t,!1),U===null){const V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),U=ot(V,T),U===null)throw ot(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let at,ut,pt,xt,At,Ct,Nt,ee,ye,pe,de,Xt,Vt,Pe,je,C,S,Z,it,st,lt,yt,dt,J;function bt(){at=new Ef(U),ut=new xf(U,at,a),at.init(ut),yt=new am(U,at,ut),pt=new rm(U,at,ut),xt=new Cf,At=new qp,Ct=new om(U,at,pt,At,ut,yt,xt),Nt=new Mf(p),ee=new Sf(p),ye=new Fh(U,ut),dt=new vf(U,at,ye,ut),pe=new Af(U,ye,xt,dt),de=new Df(U,pe,ye,xt),it=new Pf(U,ut,Ct),C=new yf(At),Xt=new Hp(p,Nt,ee,at,ut,dt,C),Vt=new dm(p,At),Pe=new jp,je=new Qp(at,ut),Z=new gf(p,Nt,ee,pt,de,h,r),S=new sm(p,de,ut),J=new fm(U,xt,ut,pt),st=new _f(U,at,xt,ut),lt=new Tf(U,at,xt,ut),xt.programs=Xt.programs,p.capabilities=ut,p.extensions=at,p.properties=At,p.renderLists=Pe,p.shadowMap=S,p.state=pt,p.info=xt}bt();const gt=new um(p,U);this.xr=gt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(E,P,!1))},this.getSize=function(T){return T.set(E,P)},this.setSize=function(T,V,j=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,P=V,t.width=Math.floor(T*B),t.height=Math.floor(V*B),j===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(E*B,P*B).floor()},this.setDrawingBufferSize=function(T,V,j){E=T,P=V,B=j,t.width=Math.floor(T*j),t.height=Math.floor(V*j),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,V,j,k){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,V,j,k),pt.viewport(A.copy(D).multiplyScalar(B).floor())},this.getScissor=function(T){return T.copy(z)},this.setScissor=function(T,V,j,k){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,V,j,k),pt.scissor(L.copy(z).multiplyScalar(B).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(T){pt.setScissorTest(I=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){R=T},this.getClearColor=function(T){return T.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(T=!0,V=!0,j=!0){let k=0;T&&(k|=16384),V&&(k|=256),j&&(k|=1024),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),Pe.dispose(),je.dispose(),At.dispose(),Nt.dispose(),ee.dispose(),de.dispose(),dt.dispose(),J.dispose(),Xt.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",tt),gt.removeEventListener("sessionend",ht),K&&(K.dispose(),K=null),mt.stop()};function St(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const T=xt.autoReset,V=S.enabled,j=S.autoUpdate,k=S.needsUpdate,$=S.type;bt(),xt.autoReset=T,S.enabled=V,S.autoUpdate=j,S.needsUpdate=k,S.type=$}function _t(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ft(T){const V=T.target;V.removeEventListener("dispose",Ft),jt(V)}function jt(T){oe(T),At.remove(T)}function oe(T){const V=At.get(T).programs;V!==void 0&&(V.forEach(function(j){Xt.releaseProgram(j)}),T.isShaderMaterial&&Xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,j,k,$,Mt){V===null&&(V=Q);const Et=$.isMesh&&$.matrixWorld.determinant()<0,Lt=Jl(T,V,j,k,$);pt.setMaterial(k,Et);let Rt=j.index,Bt=1;k.wireframe===!0&&(Rt=pe.getWireframeAttribute(j),Bt=2);const Dt=j.drawRange,It=j.attributes.position;let Zt=Dt.start*Bt,De=(Dt.start+Dt.count)*Bt;Mt!==null&&(Zt=Math.max(Zt,Mt.start*Bt),De=Math.min(De,(Mt.start+Mt.count)*Bt)),Rt!==null?(Zt=Math.max(Zt,0),De=Math.min(De,Rt.count)):It!=null&&(Zt=Math.max(Zt,0),De=Math.min(De,It.count));const xn=De-Zt;if(xn<0||xn===1/0)return;dt.setup($,k,Lt,j,Rt);let Xn,$t=st;if(Rt!==null&&(Xn=ye.get(Rt),$t=lt,$t.setIndex(Xn)),$.isMesh)k.wireframe===!0?(pt.setLineWidth(k.wireframeLinewidth*et()),$t.setMode(1)):$t.setMode(4);else if($.isLine){let zt=k.linewidth;zt===void 0&&(zt=1),pt.setLineWidth(zt*et()),$.isLineSegments?$t.setMode(1):$.isLineLoop?$t.setMode(2):$t.setMode(3)}else $.isPoints?$t.setMode(0):$.isSprite&&$t.setMode(4);if($.isInstancedMesh)$t.renderInstances(Zt,xn,$.count);else if(j.isInstancedBufferGeometry){const zt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Js=Math.min(j.instanceCount,zt);$t.renderInstances(Zt,xn,Js)}else $t.render(Zt,xn)},this.compile=function(T,V){function j(k,$,Mt){k.transparent===!0&&k.side===Dn&&k.forceSinglePass===!1?(k.side=Oe,k.needsUpdate=!0,Ue(k,$,Mt),k.side=Wn,k.needsUpdate=!0,Ue(k,$,Mt),k.side=Dn):Ue(k,$,Mt)}u=je.get(T),u.init(),g.push(u),T.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights(p.useLegacyLights),T.traverse(function(k){const $=k.material;if($)if(Array.isArray($))for(let Mt=0;Mt<$.length;Mt++){const Et=$[Mt];j(Et,T,k)}else j($,T,k)}),g.pop(),u=null};let F=null;function Y(T){F&&F(T)}function tt(){mt.stop()}function ht(){mt.start()}const mt=new Pl;mt.setAnimationLoop(Y),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(T){F=T,gt.setAnimationLoop(T),T===null?mt.stop():mt.start()},gt.addEventListener("sessionstart",tt),gt.addEventListener("sessionend",ht),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(V),V=gt.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,V,x),u=je.get(T,g.length),u.init(),g.push(u),nt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),H.setFromProjectionMatrix(nt),X=this.localClippingEnabled,O=C.init(this.clippingPlanes,X),d=Pe.get(T,m.length),d.init(),m.push(d),Wt(T,V,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(W,R),O===!0&&C.beginShadows();const j=u.state.shadowsArray;if(S.render(j,T,V),O===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(d,T),u.setupLights(p.useLegacyLights),V.isArrayCamera){const k=V.cameras;for(let $=0,Mt=k.length;$<Mt;$++){const Et=k[$];ae(d,T,Et,Et.viewport)}}else ae(d,T,V);x!==null&&(Ct.updateMultisampleRenderTarget(x),Ct.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(p,T,V),dt.resetDefaultState(),y=-1,b=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Wt(T,V,j,k){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||H.intersectsSprite(T)){k&&N.setFromMatrixPosition(T.matrixWorld).applyMatrix4(nt);const Et=de.update(T),Lt=T.material;Lt.visible&&d.push(T,Et,Lt,j,N.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==xt.render.frame&&(T.skeleton.update(),T.skeleton.frame=xt.render.frame),!T.frustumCulled||H.intersectsObject(T))){k&&N.setFromMatrixPosition(T.matrixWorld).applyMatrix4(nt);const Et=de.update(T),Lt=T.material;if(Array.isArray(Lt)){const Rt=Et.groups;for(let Bt=0,Dt=Rt.length;Bt<Dt;Bt++){const It=Rt[Bt],Zt=Lt[It.materialIndex];Zt&&Zt.visible&&d.push(T,Et,Zt,j,N.z,It)}}else Lt.visible&&d.push(T,Et,Lt,j,N.z,null)}}const Mt=T.children;for(let Et=0,Lt=Mt.length;Et<Lt;Et++)Wt(Mt[Et],V,j,k)}function ae(T,V,j,k){const $=T.opaque,Mt=T.transmissive,Et=T.transparent;u.setupLightsView(j),O===!0&&C.setGlobalState(p.clippingPlanes,j),Mt.length>0&&Me($,V,j),k&&pt.viewport(A.copy(k)),$.length>0&&an($,V,j),Mt.length>0&&an(Mt,V,j),Et.length>0&&an(Et,V,j),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Me(T,V,j){const k=ut.isWebGL2;K===null&&(K=new hi(1024,1024,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")?cs:ai,minFilter:ls,samples:k&&s===!0?4:0}));const $=p.getRenderTarget();p.setRenderTarget(K),p.clear();const Mt=p.toneMapping;p.toneMapping=zn,an(T,V,j),p.toneMapping=Mt,Ct.updateMultisampleRenderTarget(K),Ct.updateRenderTargetMipmap(K),p.setRenderTarget($)}function an(T,V,j){const k=V.isScene===!0?V.overrideMaterial:null;for(let $=0,Mt=T.length;$<Mt;$++){const Et=T[$],Lt=Et.object,Rt=Et.geometry,Bt=k===null?Et.material:k,Dt=Et.group;Lt.layers.test(j.layers)&&Yt(Lt,V,j,Rt,Bt,Dt)}}function Yt(T,V,j,k,$,Mt){T.onBeforeRender(p,V,j,k,$,Mt),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(p,V,j,k,T,Mt),$.transparent===!0&&$.side===Dn&&$.forceSinglePass===!1?($.side=Oe,$.needsUpdate=!0,p.renderBufferDirect(j,V,k,$,T,Mt),$.side=Wn,$.needsUpdate=!0,p.renderBufferDirect(j,V,k,$,T,Mt),$.side=Dn):p.renderBufferDirect(j,V,k,$,T,Mt),T.onAfterRender(p,V,j,k,$,Mt)}function Ue(T,V,j){V.isScene!==!0&&(V=Q);const k=At.get(T),$=u.state.lights,Mt=u.state.shadowsArray,Et=$.state.version,Lt=Xt.getParameters(T,$.state,Mt,V,j),Rt=Xt.getProgramCacheKey(Lt);let Bt=k.programs;k.environment=T.isMeshStandardMaterial?V.environment:null,k.fog=V.fog,k.envMap=(T.isMeshStandardMaterial?ee:Nt).get(T.envMap||k.environment),Bt===void 0&&(T.addEventListener("dispose",Ft),Bt=new Map,k.programs=Bt);let Dt=Bt.get(Rt);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===Et)return ln(T,Lt),Dt}else Lt.uniforms=Xt.getUniforms(T),T.onBuild(j,Lt,p),T.onBeforeCompile(Lt,p),Dt=Xt.acquireProgram(Lt,Rt),Bt.set(Rt,Dt),k.uniforms=Lt.uniforms;const It=k.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=C.uniform),ln(T,Lt),k.needsLights=tc(T),k.lightsStateVersion=Et,k.needsLights&&(It.ambientLightColor.value=$.state.ambient,It.lightProbe.value=$.state.probe,It.directionalLights.value=$.state.directional,It.directionalLightShadows.value=$.state.directionalShadow,It.spotLights.value=$.state.spot,It.spotLightShadows.value=$.state.spotShadow,It.rectAreaLights.value=$.state.rectArea,It.ltc_1.value=$.state.rectAreaLTC1,It.ltc_2.value=$.state.rectAreaLTC2,It.pointLights.value=$.state.point,It.pointLightShadows.value=$.state.pointShadow,It.hemisphereLights.value=$.state.hemi,It.directionalShadowMap.value=$.state.directionalShadowMap,It.directionalShadowMatrix.value=$.state.directionalShadowMatrix,It.spotShadowMap.value=$.state.spotShadowMap,It.spotLightMatrix.value=$.state.spotLightMatrix,It.spotLightMap.value=$.state.spotLightMap,It.pointShadowMap.value=$.state.pointShadowMap,It.pointShadowMatrix.value=$.state.pointShadowMatrix);const Zt=Dt.getUniforms(),De=Ws.seqWithValue(Zt.seq,It);return k.currentProgram=Dt,k.uniformsList=De,Dt}function ln(T,V){const j=At.get(T);j.outputEncoding=V.outputEncoding,j.instancing=V.instancing,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function Jl(T,V,j,k,$){V.isScene!==!0&&(V=Q),Ct.resetTextureUnits();const Mt=V.fog,Et=k.isMeshStandardMaterial?V.environment:null,Lt=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:li,Rt=(k.isMeshStandardMaterial?ee:Nt).get(k.envMap||Et),Bt=k.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Dt=!!k.normalMap&&!!j.attributes.tangent,It=!!j.morphAttributes.position,Zt=!!j.morphAttributes.normal,De=!!j.morphAttributes.color,xn=k.toneMapped?p.toneMapping:zn,Xn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,$t=Xn!==void 0?Xn.length:0,zt=At.get(k),Js=u.state.lights;if(O===!0&&(X===!0||T!==b)){const Ie=T===b&&k.id===y;C.setState(k,T,Ie)}let le=!1;k.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Js.state.version||zt.outputEncoding!==Lt||$.isInstancedMesh&&zt.instancing===!1||!$.isInstancedMesh&&zt.instancing===!0||$.isSkinnedMesh&&zt.skinning===!1||!$.isSkinnedMesh&&zt.skinning===!0||zt.envMap!==Rt||k.fog===!0&&zt.fog!==Mt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==C.numPlanes||zt.numIntersection!==C.numIntersection)||zt.vertexAlphas!==Bt||zt.vertexTangents!==Dt||zt.morphTargets!==It||zt.morphNormals!==Zt||zt.morphColors!==De||zt.toneMapping!==xn||ut.isWebGL2===!0&&zt.morphTargetsCount!==$t)&&(le=!0):(le=!0,zt.__version=k.version);let jn=zt.currentProgram;le===!0&&(jn=Ue(k,V,$));let vo=!1,Gi=!1,Qs=!1;const we=jn.getUniforms(),Yn=zt.uniforms;if(pt.useProgram(jn.program)&&(vo=!0,Gi=!0,Qs=!0),k.id!==y&&(y=k.id,Gi=!0),vo||b!==T){if(we.setValue(U,"projectionMatrix",T.projectionMatrix),ut.logarithmicDepthBuffer&&we.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,Gi=!0,Qs=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Ie=we.map.cameraPosition;Ie!==void 0&&Ie.setValue(U,N.setFromMatrixPosition(T.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&we.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||$.isSkinnedMesh)&&we.setValue(U,"viewMatrix",T.matrixWorldInverse)}if($.isSkinnedMesh){we.setOptional(U,$,"bindMatrix"),we.setOptional(U,$,"bindMatrixInverse");const Ie=$.skeleton;Ie&&(ut.floatVertexTextures?(Ie.boneTexture===null&&Ie.computeBoneTexture(),we.setValue(U,"boneTexture",Ie.boneTexture,Ct),we.setValue(U,"boneTextureSize",Ie.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const tr=j.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0&&ut.isWebGL2===!0)&&it.update($,j,jn),(Gi||zt.receiveShadow!==$.receiveShadow)&&(zt.receiveShadow=$.receiveShadow,we.setValue(U,"receiveShadow",$.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Yn.envMap.value=Rt,Yn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Gi&&(we.setValue(U,"toneMappingExposure",p.toneMappingExposure),zt.needsLights&&Ql(Yn,Qs),Mt&&k.fog===!0&&Vt.refreshFogUniforms(Yn,Mt),Vt.refreshMaterialUniforms(Yn,k,B,P,K),Ws.upload(U,zt.uniformsList,Yn,Ct)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ws.upload(U,zt.uniformsList,Yn,Ct),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&we.setValue(U,"center",$.center),we.setValue(U,"modelViewMatrix",$.modelViewMatrix),we.setValue(U,"normalMatrix",$.normalMatrix),we.setValue(U,"modelMatrix",$.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ie=k.uniformsGroups;for(let er=0,ec=Ie.length;er<ec;er++)if(ut.isWebGL2){const _o=Ie[er];J.update(_o,jn),J.bind(_o,jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jn}function Ql(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function tc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,V,j){At.get(T.texture).__webglTexture=V,At.get(T.depthTexture).__webglTexture=j;const k=At.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=j===void 0,k.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){const j=At.get(T);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,j=0){x=T,v=V,_=j;let k=!0,$=null,Mt=!1,Et=!1;if(T){const Rt=At.get(T);Rt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(36160,null),k=!1):Rt.__webglFramebuffer===void 0?Ct.setupRenderTarget(T):Rt.__hasExternalTextures&&Ct.rebindTextures(T,At.get(T.texture).__webglTexture,At.get(T.depthTexture).__webglTexture);const Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Et=!0);const Dt=At.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?($=Dt[V],Mt=!0):ut.isWebGL2&&T.samples>0&&Ct.useMultisampledRTT(T)===!1?$=At.get(T).__webglMultisampledFramebuffer:$=Dt,A.copy(T.viewport),L.copy(T.scissor),w=T.scissorTest}else A.copy(D).multiplyScalar(B).floor(),L.copy(z).multiplyScalar(B).floor(),w=I;if(pt.bindFramebuffer(36160,$)&&ut.drawBuffers&&k&&pt.drawBuffers(T,$),pt.viewport(A),pt.scissor(L),pt.setScissorTest(w),Mt){const Rt=At.get(T.texture);U.framebufferTexture2D(36160,36064,34069+V,Rt.__webglTexture,j)}else if(Et){const Rt=At.get(T.texture),Bt=V||0;U.framebufferTextureLayer(36160,36064,Rt.__webglTexture,j||0,Bt)}y=-1},this.readRenderTargetPixels=function(T,V,j,k,$,Mt,Et){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=At.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){pt.bindFramebuffer(36160,Lt);try{const Rt=T.texture,Bt=Rt.format,Dt=Rt.type;if(Bt!==Qe&&yt.convert(Bt)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Dt===cs&&(at.has("EXT_color_buffer_half_float")||ut.isWebGL2&&at.has("EXT_color_buffer_float"));if(Dt!==ai&&yt.convert(Dt)!==U.getParameter(35738)&&!(Dt===ri&&(ut.isWebGL2||at.has("OES_texture_float")||at.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-k&&j>=0&&j<=T.height-$&&U.readPixels(V,j,k,$,yt.convert(Bt),yt.convert(Dt),Mt)}finally{const Rt=x!==null?At.get(x).__webglFramebuffer:null;pt.bindFramebuffer(36160,Rt)}}},this.copyFramebufferToTexture=function(T,V,j=0){const k=Math.pow(2,-j),$=Math.floor(V.image.width*k),Mt=Math.floor(V.image.height*k);Ct.setTexture2D(V,0),U.copyTexSubImage2D(3553,j,0,0,T.x,T.y,$,Mt),pt.unbindTexture()},this.copyTextureToTexture=function(T,V,j,k=0){const $=V.image.width,Mt=V.image.height,Et=yt.convert(j.format),Lt=yt.convert(j.type);Ct.setTexture2D(j,0),U.pixelStorei(37440,j.flipY),U.pixelStorei(37441,j.premultiplyAlpha),U.pixelStorei(3317,j.unpackAlignment),V.isDataTexture?U.texSubImage2D(3553,k,T.x,T.y,$,Mt,Et,Lt,V.image.data):V.isCompressedTexture?U.compressedTexSubImage2D(3553,k,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,Et,V.mipmaps[0].data):U.texSubImage2D(3553,k,T.x,T.y,Et,Lt,V.image),k===0&&j.generateMipmaps&&U.generateMipmap(3553),pt.unbindTexture()},this.copyTextureToTexture3D=function(T,V,j,k,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Mt=T.max.x-T.min.x+1,Et=T.max.y-T.min.y+1,Lt=T.max.z-T.min.z+1,Rt=yt.convert(k.format),Bt=yt.convert(k.type);let Dt;if(k.isData3DTexture)Ct.setTexture3D(k,0),Dt=32879;else if(k.isDataArrayTexture)Ct.setTexture2DArray(k,0),Dt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,k.flipY),U.pixelStorei(37441,k.premultiplyAlpha),U.pixelStorei(3317,k.unpackAlignment);const It=U.getParameter(3314),Zt=U.getParameter(32878),De=U.getParameter(3316),xn=U.getParameter(3315),Xn=U.getParameter(32877),$t=j.isCompressedTexture?j.mipmaps[0]:j.image;U.pixelStorei(3314,$t.width),U.pixelStorei(32878,$t.height),U.pixelStorei(3316,T.min.x),U.pixelStorei(3315,T.min.y),U.pixelStorei(32877,T.min.z),j.isDataTexture||j.isData3DTexture?U.texSubImage3D(Dt,$,V.x,V.y,V.z,Mt,Et,Lt,Rt,Bt,$t.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Dt,$,V.x,V.y,V.z,Mt,Et,Lt,Rt,$t.data)):U.texSubImage3D(Dt,$,V.x,V.y,V.z,Mt,Et,Lt,Rt,Bt,$t),U.pixelStorei(3314,It),U.pixelStorei(32878,Zt),U.pixelStorei(3316,De),U.pixelStorei(3315,xn),U.pixelStorei(32877,Xn),$===0&&k.generateMipmaps&&U.generateMipmap(Dt),pt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ct.setTextureCube(T,0):T.isData3DTexture?Ct.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ct.setTexture2DArray(T,0):Ct.setTexture2D(T,0),pt.unbindTexture()},this.resetState=function(){v=0,_=0,x=null,pt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(lo.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class mm extends lo{}mm.prototype.isWebGL1Renderer=!0;class co{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new co(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class gm extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class vm extends Re{constructor(t,e,n,i,s,r,o,l,c){super(t,e,n,i,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _e extends ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bl extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Dr=new ie,Pa=new G,Da=new G;class _m{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pa),Da.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Da),e.updateMatrixWorld(),Dr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xm extends _m{constructor(){super(new Dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ym extends Bl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new xm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mm extends Bl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class wm{constructor(t,e,n=0,i=1/0){this.ray=new bl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new so,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Jr(t,this,n,e),n.sort(Ia),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Jr(t[i],this,n,e);return n.sort(Ia),n}}function Ia(a,t){return a.distance-t.distance}function Jr(a,t,e,n){if(a.layers.test(t.layers)&&a.raycast(t,e),n===!0){const i=a.children;for(let s=0,r=i.length;s<r;s++)Jr(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);const vt={CHUNK_SIZE:16,RENDER_DISTANCE:3,GRAVITY:-19.8,PLAYER_SPEED:12,PLAYER_JUMP_FORCE:8,PLAYER_HEIGHT:1.8,PLAYER_RADIUS:.4,FOVY:75,NEAR:.1,FAR:1e3,PLAYER_MAX_HP:10,FALL_DAMAGE_MIN_SPEED:-12,FALL_DAMAGE_FACTOR:1.5,MAX_MOBS:5,MOB_SPAWN_RADIUS:25,MOB_DESPAWN_RADIUS:35,MAX_DROPPED_ITEMS:30,ITEM_DESPAWN_TIME:30,ITEM_PICKUP_RADIUS:3.5},Fs={keyForward:"KeyW",keyBackward:"KeyS",keyLeft:"KeyA",keyRight:"KeyD",keyJump:"Space",invertClicks:!1,enableShadows:!0},za="maikurafu_config";class bm{currentConfig;constructor(){this.currentConfig={...Fs},this.load()}load(){try{const t=localStorage.getItem(za);if(t){const e=JSON.parse(t);this.currentConfig={...Fs,...e}}}catch(t){console.error("設定の読み込みに失敗しました。デフォルト設定を使用します。",t),this.currentConfig={...Fs}}return this.currentConfig}getConfig(){return this.currentConfig}save(t){this.currentConfig={...this.currentConfig,...t};try{localStorage.setItem(za,JSON.stringify(this.currentConfig))}catch(e){console.error("設定の保存に失敗しました。",e)}}reset(){return this.currentConfig={...Fs},this.save(this.currentConfig),this.currentConfig}}const In=new bm;class Sm{scene;camera;renderer;container;constructor(t){const e=document.getElementById(t);if(!e)throw new Error(`Container element with id "${t}" not found.`);this.container=e,this.initScene(),this.initCamera(),this.initRenderer(),window.addEventListener("resize",this.onWindowResize.bind(this))}initScene(){this.scene=new gm,this.scene.background=new kt(8306926),this.scene.fog=new co(8306926,.015)}initCamera(){const t=this.container.clientWidth/this.container.clientHeight;this.camera=new qe(vt.FOVY,t,vt.NEAR,vt.FAR),this.camera.position.set(0,5,10),this.camera.lookAt(0,0,0)}initRenderer(){const t=In.getConfig();this.renderer=new lo({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=t.enableShadows,this.renderer.shadowMap.type=hl,this.container.appendChild(this.renderer.domElement)}onWindowResize(){const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}render(){this.renderer.render(this.scene,this.camera)}}var q=(a=>(a[a.AIR=0]="AIR",a[a.GROUND=1]="GROUND",a[a.DIRT=2]="DIRT",a[a.STONE=3]="STONE",a[a.WOOD=4]="WOOD",a[a.LEAVES=5]="LEAVES",a[a.PLANK=6]="PLANK",a[a.BRICK=7]="BRICK",a[a.SAND=8]="SAND",a[a.COAL_ORE=9]="COAL_ORE",a[a.TORCH=10]="TORCH",a[a.GLASS=11]="GLASS",a[a.DOOR_CLOSED=12]="DOOR_CLOSED",a[a.DOOR_OPEN=13]="DOOR_OPEN",a[a.SWORD=14]="SWORD",a))(q||{});const us={0:{id:0,name:"くうき",isSolid:!1,isTransparent:!0,uvs:{front:0,back:0,left:0,right:0,top:0,bottom:0}},1:{id:1,name:"くさ",isSolid:!0,isTransparent:!1,uvs:{front:3,back:3,left:3,right:3,top:0,bottom:1}},2:{id:2,name:"つち",isSolid:!0,isTransparent:!1,uvs:{front:1,back:1,left:1,right:1,top:1,bottom:1}},3:{id:3,name:"いし",isSolid:!0,isTransparent:!1,uvs:{front:2,back:2,left:2,right:2,top:2,bottom:2}},4:{id:4,name:"まるた",isSolid:!0,isTransparent:!1,uvs:{front:4,back:4,left:4,right:4,top:5,bottom:5}},5:{id:5,name:"はっぱ",isSolid:!0,isTransparent:!1,uvs:{front:6,back:6,left:6,right:6,top:6,bottom:6}},6:{id:6,name:"いた",isSolid:!0,isTransparent:!1,uvs:{front:9,back:9,left:9,right:9,top:9,bottom:9}},7:{id:7,name:"れんが",isSolid:!0,isTransparent:!1,uvs:{front:7,back:7,left:7,right:7,top:7,bottom:7}},8:{id:8,name:"すな",isSolid:!0,isTransparent:!1,uvs:{front:8,back:8,left:8,right:8,top:8,bottom:8}},9:{id:9,name:"せきたん",isSolid:!0,isTransparent:!1,uvs:{front:10,back:10,left:10,right:10,top:10,bottom:10}},10:{id:10,name:"たいまつ",isSolid:!1,isTransparent:!0,lightLevel:14,uvs:{front:11,back:11,left:11,right:11,top:11,bottom:11}},11:{id:11,name:"ガラス",isSolid:!0,isTransparent:!0,uvs:{front:12,back:12,left:12,right:12,top:12,bottom:12}},12:{id:12,name:"ドア（しめる）",isSolid:!0,isTransparent:!0,uvs:{front:13,back:13,left:13,right:13,top:13,bottom:13}},13:{id:13,name:"ドア（あける）",isSolid:!1,isTransparent:!0,uvs:{front:13,back:13,left:13,right:13,top:13,bottom:13}},14:{id:14,name:"いしのけん",isSolid:!1,isTransparent:!0,uvs:{front:14,back:14,left:14,right:14,top:14,bottom:14}}},Em=[{dir:[1,0,0],corners:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uvName:"right"},{dir:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uvName:"left"},{dir:[0,1,0],corners:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],uvName:"top"},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uvName:"bottom"},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uvName:"front"},{dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uvName:"back"}],Am={top:1,bottom:.5,front:.8,back:.8,left:.65,right:.65};class Na{x;y;z;blocks;mesh=null;isDirty=!0;size=vt.CHUNK_SIZE;constructor(t,e,n){this.x=t,this.y=e,this.z=n,this.blocks=new Uint8Array(this.size*this.size*this.size)}getIndex(t,e,n){return t+e*this.size+n*this.size*this.size}isOutOfBounds(t,e,n){return t<0||t>=this.size||e<0||e>=this.size||n<0||n>=this.size}setBlock(t,e,n,i){if(this.isOutOfBounds(t,e,n))return;const s=this.getIndex(t,e,n);this.blocks[s]!==i&&(this.blocks[s]=i,this.isDirty=!0)}getBlock(t,e,n){if(this.isOutOfBounds(t,e,n))return q.AIR;const i=this.getIndex(t,e,n);return this.blocks[i]}generateMesh(t,e){if(!this.isDirty&&this.mesh)return this.mesh;const n=[],i=[],s=[],r=[],o=[];let l=0;const c=4,h=1/c,d=[],u=2;for(let g=-u;g<this.size+u;g++)for(let p=-u;p<this.size+u;p++)for(let f=-u;f<this.size+u;f++){const v=this.x*this.size+g,_=this.y*this.size+p,x=this.z*this.size+f;t.getBlock(v,_,x)===q.TORCH&&d.push({x:v+.5,y:_+.5,z:x+.5})}for(let g=0;g<this.size;g++)for(let p=0;p<this.size;p++)for(let f=0;f<this.size;f++){const v=this.getBlock(g,p,f);if(v===q.AIR)continue;const _=us[v],x=this.x*this.size+g,y=this.y*this.size+p,b=this.z*this.size+f;for(const A of Em){const L=g+A.dir[0],w=p+A.dir[1],E=f+A.dir[2];let P=!1;if(v===q.TORCH||v===q.DOOR_CLOSED||v===q.DOOR_OPEN)P=!0;else{let B;this.isOutOfBounds(L,w,E)?B=t.getBlock(x+A.dir[0],y+A.dir[1],b+A.dir[2]):B=this.getBlock(L,w,E);const W=us[B];!W.isSolid||W.isTransparent?_.isTransparent&&B===v?P=!1:P=!0:P=!1}if(P){const B=v===q.TORCH,W=v===q.DOOR_CLOSED,R=v===q.DOOR_OPEN;for(const nt of A.corners){let N=x+nt[0],Q=y+nt[1],et=b+nt[2];B?(N=x+.5+(nt[0]-.5)*.14,Q=y+nt[1]*.65,et=b+.5+(nt[2]-.5)*.14):W?et=b+.5+(nt[2]-.5)*.14:R&&(N=x+.5+(nt[0]-.5)*.14),n.push(N,Q,et),i.push(...A.dir);const U=Am[A.uvName];let ot=0;for(let ee=0;ee<d.length;ee++){const ye=d[ee],pe=N-ye.x,de=Q-ye.y,Xt=et-ye.z,Vt=Math.abs(pe)+Math.abs(de)+Math.abs(Xt),Pe=Math.max(0,1-Vt/8);Pe>ot&&(ot=Pe)}const at=v===q.TORCH,ut=at?1:ot,pt=Math.min(1,.52+ut*.48),xt=U*pt,At=xt,Ct=xt*(at?.9:.93-(1-ut)*.08),Nt=xt*(at?.6:.85-(1-ut)*.15);s.push(At,Ct,Nt)}const D=_.uvs[A.uvName],z=D%c,I=Math.floor(D/c),H=z*h,O=1-(I+1)*h,X=H+h,K=O+h;r.push(H,O,X,O,X,K,H,K),o.push(l,l+1,l+2,l,l+2,l+3),l+=4}}}if(n.length===0)return this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null),this.isDirty=!1,null;const m=new qn;return m.setAttribute("position",new nn(n,3)),m.setAttribute("normal",new nn(i,3)),m.setAttribute("color",new nn(s,3)),m.setAttribute("uv",new nn(r,2)),m.setIndex(o),this.mesh?(this.mesh.geometry.dispose(),this.mesh.geometry=m):(this.mesh=new Pt(m,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0),this.isDirty=!1,this.mesh}}function Tm(){const a=document.createElement("canvas"),t=16,e=4,n=4;a.width=t*e,a.height=t*n;const i=a.getContext("2d"),s=(I,H,O,X,K,nt)=>{const N=I*t,Q=H*t;for(let et=0;et<t;et++)for(let U=0;U<t;U++){const ot=(Math.random()-.5)*nt,at=Math.max(0,Math.min(255,Math.floor(O+ot))),ut=Math.max(0,Math.min(255,Math.floor(X+ot))),pt=Math.max(0,Math.min(255,Math.floor(K+ot)));i.fillStyle=`rgb(${at}, ${ut}, ${pt})`,i.fillRect(N+et,Q+U,1,1)}};s(0,0,100,180,70,30),s(1,0,130,95,65,20),s(2,0,120,120,120,20),s(3,0,130,95,65,20);const r=3*t;for(let I=0;I<t;I++){const H=3+Math.floor(Math.random()*3);for(let O=0;O<H;O++){const X=(Math.random()-.5)*30,K=Math.max(0,Math.min(255,Math.floor(100+X))),nt=Math.max(0,Math.min(255,Math.floor(180+X))),N=Math.max(0,Math.min(255,Math.floor(70+X)));i.fillStyle=`rgb(${K}, ${nt}, ${N})`,i.fillRect(r+I,O,1,1)}}s(0,1,100,70,45,15);const o=0*t,l=1*t;for(let I=0;I<t;I++)for(let H=0;H<t;H++)(I+H*2)%5===0&&(i.fillStyle=`rgb(${70+Math.random()*10}, ${50+Math.random()*10}, ${30+Math.random()*10})`,i.fillRect(o+I,l+H,1,1));s(1,1,185,150,105,10);const c=1*t,h=1*t;i.fillStyle="rgb(115, 80, 50)";for(let I=0;I<t;I++)for(let H=0;H<t;H++){const O=I-7.5,X=H-7.5,K=Math.sqrt(O*O+X*X);(Math.abs(K-3)<.6||Math.abs(K-6)<.6)&&i.fillRect(c+I,h+H,1,1)}s(2,1,35,115,30,20);const d=2*t,u=1*t;for(let I=0;I<30;I++){const H=Math.floor(Math.random()*t),O=Math.floor(Math.random()*t);i.fillStyle=`rgb(${15+Math.random()*10}, ${45+Math.random()*10}, ${10+Math.random()*10})`,i.fillRect(d+H,u+O,1,1)}s(3,1,155,75,55,15);const m=3*t,g=1*t;i.fillStyle="rgb(205, 200, 195)",i.fillRect(m,g+4,t,1),i.fillRect(m,g+9,t,1),i.fillRect(m,g+14,t,1),i.fillRect(m+4,g,1,4),i.fillRect(m+12,g,1,4),i.fillRect(m+8,g+5,1,4),i.fillRect(m+4,g+10,1,4),i.fillRect(m+12,g+10,1,4),i.fillRect(m+8,g+15,1,1),s(0,2,220,205,150,30),s(1,2,190,145,85,12);const p=1*t,f=2*t;i.fillStyle="rgb(140, 100, 55)",i.fillRect(p,f+4,t,1),i.fillRect(p,f+8,t,1),i.fillRect(p,f+12,t,1),s(2,2,120,120,120,20);const v=2*t,_=2*t;i.fillStyle="rgb(40, 40, 40)",[[2,3],[3,3],[3,4],[8,8],[9,8],[9,9],[8,9],[11,2],[12,3],[4,12],[5,11],[5,12]].forEach(([I,H])=>{i.fillRect(v+I,_+H,1,1)});const y=3*t,b=2*t;i.fillStyle="rgba(0, 0, 0, 0)",i.clearRect(y,b,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(y+7,b+6,2,10),i.fillStyle="rgb(255, 100, 0)",i.fillRect(y+6,b+2,4,4),i.fillStyle="rgb(255, 220, 0)",i.fillRect(y+7,b+3,2,2);const A=0*t,L=3*t;i.clearRect(A,L,t,t),i.fillStyle="rgba(240, 248, 255, 0.8)",i.fillRect(A,L,t,1),i.fillRect(A,L+t-1,t,1),i.fillRect(A,L,1,t),i.fillRect(A+t-1,L,1,t),i.fillStyle="rgba(255, 255, 255, 0.6)",i.fillRect(A+3,L+3,1,1),i.fillRect(A+4,L+2,1,1),i.fillRect(A+2,L+4,1,1),i.fillRect(A+10,L+10,1,1),i.fillRect(A+11,L+9,1,1),i.fillRect(A+9,L+11,1,1);const w=1*t,E=3*t;i.clearRect(w,E,t,t),i.fillStyle="rgb(130, 85, 45)",i.fillRect(w,E,t,t),i.fillStyle="rgb(90, 55, 25)",i.fillRect(w,E,t,1),i.fillRect(w,E+t-1,t,1),i.fillRect(w,E,1,t),i.fillRect(w+t-1,E,1,t),i.fillRect(w+t/2-1,E,2,t),i.clearRect(w+2,E+2,4,5),i.clearRect(w+10,E+2,4,5),i.fillStyle="rgba(255, 255, 255, 0.4)",i.fillRect(w+2,E+2,4,1),i.fillRect(w+10,E+2,4,1),i.fillStyle="rgb(230, 190, 50)",i.fillRect(w+13,E+9,2,2),i.fillStyle="rgb(180, 140, 20)",i.fillRect(w+14,E+11,1,1);const P=2*t,B=3*t;i.clearRect(P,B,t,t),i.fillStyle="rgb(120, 80, 40)",i.fillRect(P+2,B+13,1,1),i.fillRect(P+3,B+12,1,1),i.fillRect(P+4,B+11,1,1),i.fillStyle="rgb(90, 60, 30)",i.fillRect(P+1,B+14,1,1),i.fillStyle="rgb(230, 190, 50)",i.fillRect(P+5,B+10,1,1),i.fillRect(P+3,B+11,1,1),i.fillRect(P+4,B+12,1,1),i.fillRect(P+5,B+12,1,1),i.fillRect(P+2,B+12,1,1),i.fillRect(P+3,B+13,1,1),i.fillStyle="rgb(120, 120, 120)",[[5,11],[6,10],[7,9],[8,8],[9,7],[10,6],[11,5],[12,4],[13,3]].forEach(([I,H])=>{i.fillRect(P+I,B+H,1,1)}),i.fillStyle="rgb(180, 180, 180)",[[5,10],[6,9],[7,8],[8,7],[9,6],[10,5],[11,4],[12,3],[13,2],[14,1]].forEach(([I,H])=>{i.fillRect(P+I,B+H,1,1)}),i.fillStyle="rgb(240, 240, 240)",[[4,9],[5,8],[6,7],[7,6],[8,5],[9,4],[10,3],[11,2],[12,1],[13,0]].forEach(([I,H])=>{i.fillRect(P+I,B+H,1,1)});const z=new vm(a);return z.magFilter=fe,z.minFilter=fe,z.wrapS=Be,z.wrapT=Be,z}let Cm=class{chunks=new Map;scene;material;modifiedBlocks=new Map;constructor(t){this.scene=t;const e=Tm(),n=new _e({map:e,vertexColors:!0,roughness:.85,metalness:.05,alphaTest:.5,side:Dn});n.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("vec3 totalEmissiveRadiance = emissive;",`
        // 頂点カラーから松明光成分（最低輝度0.52を超える部分）を抽出し、自己発光として加算する
        vec3 torchLight = max(vec3(0.0), vColor - vec3(0.52));
        // 温かみのあるオレンジ色の自己発光を1.5倍で加算（夜間でも綺麗に光る）
        vec3 totalEmissiveRadiance = emissive + torchLight * 1.5;
        `)},this.material=n}getChunkKey(t,e,n){return`${t},${e},${n}`}getChunk(t,e,n){return this.chunks.get(this.getChunkKey(t,e,n))}getBlock(t,e,n){const i=Math.floor(t/vt.CHUNK_SIZE),s=Math.floor(e/vt.CHUNK_SIZE),r=Math.floor(n/vt.CHUNK_SIZE),o=this.getChunk(i,s,r);if(!o)return q.AIR;const l=(t%vt.CHUNK_SIZE+vt.CHUNK_SIZE)%vt.CHUNK_SIZE,c=(e%vt.CHUNK_SIZE+vt.CHUNK_SIZE)%vt.CHUNK_SIZE,h=(n%vt.CHUNK_SIZE+vt.CHUNK_SIZE)%vt.CHUNK_SIZE;return o.getBlock(l,c,h)}setBlock(t,e,n,i){const s=Math.floor(t/vt.CHUNK_SIZE),r=Math.floor(e/vt.CHUNK_SIZE),o=Math.floor(n/vt.CHUNK_SIZE),l=this.getChunkKey(s,r,o),c=vt.CHUNK_SIZE,h=(t%c+c)%c,d=(e%c+c)%c,u=(n%c+c)%c,m=h+d*c+u*c*c;let g=this.modifiedBlocks.get(l);g||(g=new Map,this.modifiedBlocks.set(l,g)),g.set(m,i);let p=this.getChunk(s,r,o);p||(p=new Na(s,r,o),this.chunks.set(l,p)),p.setBlock(h,d,u,i),this.updateChunkMesh(s,r,o),h===0&&this.updateChunkMesh(s-1,r,o),h===vt.CHUNK_SIZE-1&&this.updateChunkMesh(s+1,r,o),d===0&&this.updateChunkMesh(s,r-1,o),d===vt.CHUNK_SIZE-1&&this.updateChunkMesh(s,r+1,o),u===0&&this.updateChunkMesh(s,r,o-1),u===vt.CHUNK_SIZE-1&&this.updateChunkMesh(s,r,o+1)}updateChunkMesh(t,e,n){const i=this.getChunk(t,e,n);if(!i)return;const s=i.mesh,r=i.generateMesh(this,this.material);r&&!s?this.scene.add(r):!r&&s&&this.scene.remove(s)}generateWorldAround(t,e){const n=Math.floor(t/vt.CHUNK_SIZE),i=Math.floor(e/vt.CHUNK_SIZE),s=vt.RENDER_DISTANCE,r=new Set;for(let l=n-s;l<=n+s;l++)for(let c=i-s;c<=i+s;c++)for(let h=-1;h<=1;h++){const d=this.getChunkKey(l,h,c);if(r.add(d),!this.chunks.has(d)){const u=new Na(l,h,c);this.generateChunkTerrain(u),this.chunks.set(d,u)}}for(const[l,c]of this.chunks.entries())r.has(l)||(c.mesh&&(this.scene.remove(c.mesh),c.mesh.geometry.dispose(),c.mesh=null),this.chunks.delete(l));for(let l=n-s;l<=n+s;l++)for(let c=i-s;c<=i+s;c++)for(let h=-1;h<=1;h++)this.updateChunkMesh(l,h,c);const o=document.getElementById("chunks-display");o&&(o.textContent=this.chunks.size.toString())}generateChunkTerrain(t){const e=vt.CHUNK_SIZE,n=t.y*e;for(let r=0;r<e;r++)for(let o=0;o<e;o++)for(let l=0;l<e;l++){const c=n+l;let h=q.AIR;if(c<-4){const d=Math.sin(t.x*17.13+t.y*31.41+t.z*53.57+r*7.1+l*13.3+o*19.9)*43758.5453;h=d-Math.floor(d)<.05?q.COAL_ORE:q.STONE}else c<0?h=q.DIRT:c===0&&(h=q.GROUND);t.setBlock(r,l,o,h)}if(t.y===0)for(let r=2;r<e-2;r++)for(let o=2;o<e-2;o++){const l=Math.sin(t.x*12.9898+t.z*78.233+r*43.123+o*93.314)*43758.5453;if(l-Math.floor(l)<.015){t.setBlock(r,1,o,q.WOOD),t.setBlock(r,2,o,q.WOOD),t.setBlock(r,3,o,q.WOOD),t.setBlock(r+1,3,o,q.LEAVES),t.setBlock(r-1,3,o,q.LEAVES),t.setBlock(r,3,o+1,q.LEAVES),t.setBlock(r,3,o-1,q.LEAVES);for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++)(h!==0||d!==0)&&t.setBlock(r+h,4,o+d,q.LEAVES);t.setBlock(r,4,o,q.LEAVES),t.setBlock(r,5,o,q.LEAVES),t.setBlock(r+1,5,o,q.LEAVES),t.setBlock(r-1,5,o,q.LEAVES),t.setBlock(r,5,o+1,q.LEAVES),t.setBlock(r,5,o-1,q.LEAVES)}}const i=this.getChunkKey(t.x,t.y,t.z),s=this.modifiedBlocks.get(i);if(s){const r=vt.CHUNK_SIZE;for(const[o,l]of s.entries()){const c=o%r,h=Math.floor(o%(r*r)/r),d=Math.floor(o/(r*r));t.setBlock(c,h,d,l)}}}getChunkMeshes(){const t=[];for(const e of this.chunks.values())e.mesh&&t.push(e.mesh);return t}getChunksCount(){return this.chunks.size}getModifiedBlocksData(){const t={};for(const[e,n]of this.modifiedBlocks.entries()){if(n.size===0)continue;const i={};for(const[s,r]of n.entries())i[s.toString()]=r;t[e]=i}return t}setModifiedBlocksData(t){if(this.modifiedBlocks.clear(),!!t)for(const e of Object.keys(t)){const n=new Map,i=t[e];for(const s of Object.keys(i)){const r=parseInt(s,10),o=i[s];n.set(r,o)}this.modifiedBlocks.set(e,n)}}clearAndRebuild(t,e){for(const n of this.chunks.values())n.mesh&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh=null);this.chunks.clear(),this.generateWorldAround(t,e)}};class Lm{keys={};justPressedKeys={};mouseDelta={x:0,y:0};isLocked=!1;isActionActive(t){const e=In.getConfig();switch(t){case"forward":return!!this.keys[e.keyForward];case"backward":return!!this.keys[e.keyBackward];case"left":return!!this.keys[e.keyLeft];case"right":return!!this.keys[e.keyRight];case"jump":return!!this.keys[e.keyJump];default:return!1}}targetElement;constructor(t){this.targetElement=t,window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),document.addEventListener("mousemove",this.onMouseMove.bind(this)),document.addEventListener("pointerlockchange",this.onPointerLockChange.bind(this))}requestLock(){this.isLocked||this.targetElement.requestPointerLock()}onKeyDown(t){const e=t.code;e==="Tab"&&t.preventDefault(),this.isLocked&&(e==="F5"||e==="KeyQ"||e==="KeyE")&&(e==="KeyE"||e==="F5")&&t.preventDefault(),this.keys[e]||(this.justPressedKeys[e]=!0),this.keys[e]=!0}onKeyUp(t){const e=t.code;this.keys[e]=!1,this.justPressedKeys[e]=!1}onMouseMove(t){this.isLocked&&(this.mouseDelta.x+=t.movementX,this.mouseDelta.y+=t.movementY)}onPointerLockChange(){const t=document.getElementById("menu-overlay"),e=document.getElementById("crosshair"),n=document.getElementById("inventory-modal");document.pointerLockElement===this.targetElement?(this.isLocked=!0,t&&(t.style.display="none"),e&&(e.style.display="block")):(this.isLocked=!1,this.clearKeys(),n&&n.style.display==="flex"||t&&(t.style.display="flex",t.style.opacity="1"),e&&(e.style.display="none"))}clearKeys(){this.keys={},this.justPressedKeys={}}consumeJustPressed(t){return this.justPressedKeys[t]?(this.justPressedKeys[t]=!1,!0):!1}consumeMouseDelta(){const t={...this.mouseDelta};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}}class sn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new sn);const n=this.elements,i=t.elements,s=e.elements,r=n[0],o=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],p=i[0],f=i[1],v=i[2],_=i[3],x=i[4],y=i[5],b=i[6],A=i[7],L=i[8];return s[0]=r*p+o*_+l*b,s[1]=r*f+o*x+l*A,s[2]=r*v+o*y+l*L,s[3]=c*p+h*_+d*b,s[4]=c*f+h*x+d*A,s[5]=c*v+h*y+d*L,s[6]=u*p+m*_+g*b,s[7]=u*f+m*x+g*A,s[8]=u*v+m*y+g*L,e}scale(t,e){e===void 0&&(e=new sn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new M);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(r=c-l,s[r+i*r]===0){for(o=r+1;o<c;o++)if(s[r+i*o]!==0){h=d;do u=d-h,s[u+i*r]+=s[u+i*o];while(--h);break}}if(s[r+i*r]!==0)for(o=r+1;o<c;o++){const m=s[r+i*o]/s[r+i*r];h=d;do u=d-h,s[u+i*o]=u<=r?0:s[u+i*o]-s[u+i*r]*m;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new sn);const e=3,n=6,i=Rm;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const l=o;let c;const h=n;let d;do{if(s=l-o,i[s+n*s]===0){for(r=s+1;r<l;r++)if(i[s+n*r]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<l;r++){const u=i[s+n*r]/i[s+n*s];c=h;do d=h-c,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*u;while(--c)}}while(--o);s=2;do{r=s-1;do{const u=i[s+n*r]/i[s+n*s];c=n;do d=n-c,i[d+n*r]=i[d+n*r]-i[d+n*s]*u;while(--c)}while(r--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{r=2;do{if(d=i[e+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,d)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,o=n+n,l=i+i,c=e*r,h=e*o,d=e*l,u=n*o,m=n*l,g=i*l,p=s*r,f=s*o,v=s*l,_=this.elements;return _[3*0+0]=1-(u+g),_[3*0+1]=h-v,_[3*0+2]=d+f,_[3*1+0]=h+v,_[3*1+1]=1-(c+g),_[3*1+2]=m-p,_[3*2+0]=d-f,_[3*2+1]=m+p,_[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new sn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Rm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z;return e.x=o*s-l*i,e.y=l*n-r*s,e.z=r*i-o*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new sn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new M);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i)}scale(t,e){e===void 0&&(e=new M);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new M),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Pm,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=Dm;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Fa),Fa.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const Pm=new M,Dm=new M,Fa=new M;class ke{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(t[0]),o&&o.vmult(s,s),r.copy(s);for(let l=1;l<t.length;l++){let c=t[l];o&&(o.vmult(c,Ba),c=Ba),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new ke().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&o&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,o,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),o.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=Oa,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Oa,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,o=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,m=Math.max(Math.max(Math.min(o,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,h)),Math.max(d,u));return!(g<0||m>g)}}const Ba=new M,Oa=[new M,new M,new M,new M,new M,new M,new M,new M];class ka{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Ol{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class te{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Im,i=zm;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new te);const n=this.x,i=this.y,s=this.z,r=this.w,o=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+r*o+i*c-s*l,e.y=i*h+r*l+s*o-n*c,e.z=s*h+r*c+n*l-i*o,e.w=r*h-n*o-i*l-s*c,e}inverse(t){t===void 0&&(t=new te);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new te),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z,c=this.w,h=c*n+o*s-l*i,d=c*i+l*n-r*s,u=c*s+r*i-o*n,m=-r*n-o*i-l*s;return e.x=h*c+m*-r+d*-l-u*-o,e.y=d*c+m*-o+u*-r-h*-l,e.z=u*c+m*-l+h*-o-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,o=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=r*o+l*c;if(h>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const d=r*r,u=o*o,m=l*l;n=Math.atan2(2*o*c-2*r*l,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*r*c-2*o*l,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*o+s*c*h,this.y=s*c*o-l*r*h,this.z=s*r*h+l*c*o,this.w=s*r*o-l*c*h):i==="YXZ"?(this.x=l*r*o+s*c*h,this.y=s*c*o-l*r*h,this.z=s*r*h-l*c*o,this.w=s*r*o+l*c*h):i==="ZXY"?(this.x=l*r*o-s*c*h,this.y=s*c*o+l*r*h,this.z=s*r*h+l*c*o,this.w=s*r*o-l*c*h):i==="ZYX"?(this.x=l*r*o-s*c*h,this.y=s*c*o+l*r*h,this.z=s*r*h-l*c*o,this.w=s*r*o+l*c*h):i==="YZX"?(this.x=l*r*o+s*c*h,this.y=s*c*o+l*r*h,this.z=s*r*h-l*c*o,this.w=s*r*o-l*c*h):i==="XZY"&&(this.x=l*r*o-s*c*h,this.y=s*c*o-l*r*h,this.z=s*r*h+l*c*o,this.w=s*r*o+l*c*h),this}clone(){return new te(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new te);const i=this.x,s=this.y,r=this.z,o=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,m,g,p,f;return m=i*l+s*c+r*h+o*d,m<0&&(m=-m,l=-l,c=-c,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),p=Math.sin((1-e)*u)/g,f=Math.sin(e*u)/g):(p=1-e,f=e),n.x=p*i+f*l,n.y=p*s+f*c,n.z=p*r+f*h,n.w=p*o+f*d,n}integrate(t,e,n,i){i===void 0&&(i=new te);const s=t.x*n.x,r=t.y*n.y,o=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+r*h-o*c),i.y+=u*(r*d+o*l-s*h),i.z+=u*(o*d+s*c-r*l),i.w+=u*(-s*l-r*c-o*h),i}}const Im=new M,zm=new M,Nm={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ft{constructor(t){t===void 0&&(t={}),this.id=ft.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ft.idCounter=0;ft.types=Nm;class Ut{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new te,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ut.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ut.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),n.vsub(t,i),e.conjugate(Ua),Ua.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new M),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Ua=new te;class os extends ft{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:ft.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==t.length;s++){const r=t[s],o=r.length;for(let l=0;l!==o;l++){const c=(l+1)%o;e[r[l]].vsub(e[r[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];os.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new M,r=new M;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,o,l,c){const h=new M;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const p=h.dot(r);p>u&&(u=p,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const p=n.vertices[n.faces[d][g]],f=new M;f.copy(p),s.vmult(f,f),i.vadd(f,f),m.push(f)}d>=0&&this.clipFaceAgainstHull(r,t,e,m,o,l,c)}findSeparatingAxis(t,e,n,i,s,r,o,l){const c=new M,h=new M,d=new M,u=new M,m=new M,g=new M;let p=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let v=0;v!==f.uniqueAxes.length;v++){n.vmult(f.uniqueAxes[v],c);const _=f.testSepAxis(c,t,e,n,i,s);if(_===!1)return!1;_<p&&(p=_,r.copy(c))}else{const v=o?o.length:f.faces.length;for(let _=0;_<v;_++){const x=o?o[_]:_;c.copy(f.faceNormals[x]),n.vmult(c,c);const y=f.testSepAxis(c,t,e,n,i,s);if(y===!1)return!1;y<p&&(p=y,r.copy(c))}}if(t.uniqueAxes)for(let v=0;v!==t.uniqueAxes.length;v++){s.vmult(t.uniqueAxes[v],h);const _=f.testSepAxis(h,t,e,n,i,s);if(_===!1)return!1;_<p&&(p=_,r.copy(h))}else{const v=l?l.length:t.faces.length;for(let _=0;_<v;_++){const x=l?l[_]:_;h.copy(t.faceNormals[x]),s.vmult(h,h);const y=f.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<p&&(p=y,r.copy(h))}}for(let v=0;v!==f.uniqueEdges.length;v++){n.vmult(f.uniqueEdges[v],u);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],m),u.cross(m,g),!g.almostZero()){g.normalize();const x=f.testSepAxis(g,t,e,n,i,s);if(x===!1)return!1;x<p&&(p=x,r.copy(g))}}return i.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const o=this;os.project(o,t,n,i,Ir),os.project(e,t,s,r,zr);const l=Ir[0],c=Ir[1],h=zr[0],d=zr[1];if(l<d||h<c)return!1;const u=l-d,m=h-c;return u<m?u:m}calculateLocalInertia(t,e){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*o*2*o),e.y=1/12*t*(2*s*2*s+2*o*2*o),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,o){const l=new M,c=new M,h=new M,d=new M,u=new M,m=new M,g=new M,p=new M,f=this,v=[],_=i,x=v;let y=-1,b=Number.MAX_VALUE;for(let P=0;P<f.faces.length;P++){l.copy(f.faceNormals[P]),n.vmult(l,l);const B=l.dot(t);B<b&&(b=B,y=P)}if(y<0)return;const A=f.faces[y];A.connectedFaces=[];for(let P=0;P<f.faces.length;P++)for(let B=0;B<f.faces[P].length;B++)A.indexOf(f.faces[P][B])!==-1&&P!==y&&A.connectedFaces.indexOf(P)===-1&&A.connectedFaces.push(P);const L=A.length;for(let P=0;P<L;P++){const B=f.vertices[A[P]],W=f.vertices[A[(P+1)%L]];B.vsub(W,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(B),n.vmult(m,m),e.vadd(m,m);const R=A.connectedFaces[P];g.copy(this.faceNormals[R]);const D=this.getPlaneConstantOfFace(R);p.copy(g),n.vmult(p,p);const z=D-p.dot(e);for(this.clipFaceAgainstPlane(_,x,p,z);_.length;)_.shift();for(;x.length;)_.push(x.shift())}g.copy(this.faceNormals[y]);const w=this.getPlaneConstantOfFace(y);p.copy(g),n.vmult(p,p);const E=w-p.dot(e);for(let P=0;P<_.length;P++){let B=p.dot(_[P])+E;if(B<=s&&(console.log(`clamped: depth=${B} to minDist=${s}`),B=s),B<=r){const W=_[P];if(B<=1e-6){const R={point:W,normal:p,depth:B};o.push(R)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const o=t.length;if(o<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<o;h++){if(c=t[h],r=n.dot(c)+i,s<0)if(r<0){const d=new M;d.copy(c),e.push(d)}else{const d=new M;l.lerp(c,s/(s-r),d),e.push(d)}else if(r<0){const d=new M;l.lerp(c,s/(s-r),d),e.push(d),e.push(c)}l=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,o,l,c,h,d,u=new M;for(let m=0;m<s.length;m++){u.copy(s[m]),e.vmult(u,u),t.vadd(u,u);const g=u;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,o,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new M;this.getAveragePointLocal(s);for(let r=0;r<this.faces.length;r++){let o=i[r];const l=e[n[r][0]],c=new M;t.vsub(l,c);const h=o.dot(c),d=new M;s.vsub(l,d);const u=o.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const r=t.vertices.length,o=Fm;let l=0,c=0;const h=Bm,d=t.vertices;h.setZero(),Ut.vectorToLocalFrame(n,i,e,o),Ut.pointToLocalFrame(n,i,h,h);const u=h.dot(o);c=l=d[0].dot(o);for(let m=1;m<r;m++){const g=d[m].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const m=c;c=l,l=m}s[0]=l,s[1]=c}}const Ir=[],zr=[];new M;const Fm=new M,Bm=new M;class di extends ft{constructor(t){super({type:ft.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new os({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),di.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)kn.set(s[r][0],s[r][1],s[r][2]),e.vmult(kn,kn),t.vadd(kn,kn),n(kn.x,kn.y,kn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;hn[0].set(s.x,s.y,s.z),hn[1].set(-s.x,s.y,s.z),hn[2].set(-s.x,-s.y,s.z),hn[3].set(-s.x,-s.y,-s.z),hn[4].set(s.x,-s.y,-s.z),hn[5].set(s.x,s.y,-s.z),hn[6].set(-s.x,s.y,-s.z),hn[7].set(s.x,-s.y,s.z);const r=hn[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const l=hn[o];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const kn=new M,hn=[new M,new M,new M,new M,new M,new M,new M,new M],ho={DYNAMIC:1,STATIC:2,KINEMATIC:4},uo={AWAKE:0,SLEEPY:1,SLEEPING:2};class ct extends Ol{constructor(t){t===void 0&&(t={}),super(),this.id=ct.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ct.STATIC:ct.DYNAMIC,typeof t.type==typeof ct.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=ct.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new te,this.initQuaternion=new te,this.previousQuaternion=new te,this.interpolatedQuaternion=new te,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new sn,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new sn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new ke,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=ct.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ct.SLEEPING&&this.dispatchEvent(ct.wakeupEvent)}sleep(){this.sleepState=ct.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===ct.AWAKE&&n<i?(this.sleepState=ct.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ct.sleepyEvent)):e===ct.SLEEPY&&n>i?this.wakeUp():e===ct.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ct.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ct.SLEEPING||this.type===ct.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new M,s=new te;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const o=e[s].length(),l=r.boundingSphereRadius;o+l>i&&(i=o+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Om,r=km,o=this.quaternion,l=this.aabb,c=Um;for(let h=0;h!==i;h++){const d=t[h];o.vmult(e[h],s),s.vadd(this.position,s),o.mult(n[h],r),d.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Gm,i=Vm;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==ct.DYNAMIC)return;this.sleepState===ct.SLEEPING&&this.wakeUp();const n=Wm;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==ct.DYNAMIC)return;const n=Hm,i=qm;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===ct.DYNAMIC&&(this.sleepState===ct.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==ct.DYNAMIC)return;this.sleepState===ct.SLEEPING&&this.wakeUp();const n=e,i=Xm;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=jm;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==ct.DYNAMIC)return;const n=Ym,i=Km;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Zm;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),di.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ct.DYNAMIC||this.type===ct.KINEMATIC)||this.sleepState===ct.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*t;i.x+=o.x*m*u.x,i.y+=o.y*m*u.y,i.z+=o.z*m*u.z;const g=d.elements,p=this.angularFactor,f=l.x*p.x,v=l.y*p.y,_=l.z*p.z;s.x+=t*(g[0]*f+g[1]*v+g[2]*_),s.y+=t*(g[3]*f+g[4]*v+g[5]*_),s.z+=t*(g[6]*f+g[7]*v+g[8]*_),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ct.idCounter=0;ct.COLLIDE_EVENT_NAME="collide";ct.DYNAMIC=ho.DYNAMIC;ct.STATIC=ho.STATIC;ct.KINEMATIC=ho.KINEMATIC;ct.AWAKE=uo.AWAKE;ct.SLEEPY=uo.SLEEPY;ct.SLEEPING=uo.SLEEPING;ct.wakeupEvent={type:"wakeup"};ct.sleepyEvent={type:"sleepy"};ct.sleepEvent={type:"sleep"};const Om=new M,km=new te,Um=new ke,Gm=new sn,Vm=new sn;new sn;const Wm=new M,Hm=new M,qm=new M,Xm=new M,jm=new M,Ym=new M,Km=new M,Zm=new M;class kl{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&ct.STATIC||t.sleepState===ct.SLEEPING)&&(e.type&ct.STATIC||e.sleepState===ct.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=$m;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Jm,i=Qm,s=tg,r=t.length;for(let o=0;o!==r;o++)i[o]=t[o],s[o]=e[o];t.length=0,e.length=0;for(let o=0;o!==r;o++){const l=i[o].id,c=s[o].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=o,n.keys.push(h)}for(let o=0;o!==n.keys.length;o++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new M;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const $m=new M;new M;new te;new M;const Jm={keys:[]},Qm=[],tg=[];new M;new M;new M;class eg extends kl{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,o;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],o=i[c],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Xs{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let Ul,Gl,Vl,Wl,Hl,ql,Xl;const fo={CLOSEST:1,ANY:2,ALL:4};Ul=ft.types.SPHERE;Gl=ft.types.PLANE;Vl=ft.types.BOX;Wl=ft.types.CYLINDER;Hl=ft.types.CONVEXPOLYHEDRON;ql=ft.types.HEIGHTFIELD;Xl=ft.types.TRIMESH;class Qt{get[Ul](){return this._intersectSphere}get[Gl](){return this._intersectPlane}get[Vl](){return this._intersectBox}get[Wl](){return this._intersectConvex}get[Hl](){return this._intersectConvex}get[ql](){return this._intersectHeightfield}get[Xl](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Qt.ANY,this.result=new Xs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Qt.ANY,this.result=e.result||new Xs,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ga),Nr.length=0,t.broadphase.aabbQuery(t,Ga,Nr),this.intersectBodies(Nr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=ng,s=ig;for(let r=0,o=t.shapes.length;r<o;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(vg(s,this.direction,n)>t.boundingSphereRadius)return;const o=this[t.type];o&&o.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,o=this.to,l=this.direction,c=new M(0,0,1);e.vmult(c,c);const h=new M;r.vsub(n,h);const d=h.dot(c);o.vsub(n,h);const u=h.dot(c);if(d*u>0||r.distanceTo(o)<d)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const g=new M,p=new M,f=new M;r.vsub(n,g);const v=-c.dot(g)/m;l.scale(v,p),r.vadd(p,f),this.reportIntersection(c,f,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=sg;r.from.copy(this.from),r.to.copy(this.to),Ut.pointToLocalFrame(n,e,r.from,r.from),Ut.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const o=rg;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new ke;r.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),h=Math.min(h,o[0]+1),d=Math.min(d,o[1]+1);for(let m=l;m<h;m++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,u),!!u.overlapsRay(r)){if(t.getConvexTrianglePillar(m,g,!1),Ut.pointToWorldFrame(n,e,t.pillarOffset,Bs),this._intersectConvex(t.pillarConvex,e,Bs,i,s,Va),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Ut.pointToWorldFrame(n,e,t.pillarOffset,Bs),this._intersectConvex(t.pillarConvex,e,Bs,i,s,Va)}}}_intersectSphere(t,e,n,i,s){const r=this.from,o=this.to,l=t.radius,c=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,h=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,u=h**2-4*c*d,m=og,g=ag;if(!(u<0))if(u===0)r.lerp(o,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const p=(-h-Math.sqrt(u))/(2*c),f=(-h+Math.sqrt(u))/(2*c);if(p>=0&&p<=1&&(r.lerp(o,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(r.lerp(o,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const o=lg,l=Wa,c=r&&r.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,m=this.direction,g=this.from,p=this.to,f=g.distanceTo(p),v=c?c.length:h.length,_=this.result;for(let x=0;!_.shouldStop&&x<v;x++){const y=c?c[x]:x,b=h[y],A=u[y],L=e,w=n;l.copy(d[b[0]]),L.vmult(l,l),l.vadd(w,l),l.vsub(g,l),L.vmult(A,o);const E=m.dot(o);if(Math.abs(E)<this.precision)continue;const P=o.dot(l)/E;if(!(P<0)){m.scale(P,Te),Te.vadd(g,Te),Je.copy(d[b[0]]),L.vmult(Je,Je),w.vadd(Je,Je);for(let B=1;!_.shouldStop&&B<b.length-1;B++){un.copy(d[b[B]]),dn.copy(d[b[B+1]]),L.vmult(un,un),L.vmult(dn,dn),w.vadd(un,un),w.vadd(dn,dn);const W=Te.distanceTo(g);!(Qt.pointInTriangle(Te,Je,un,dn)||Qt.pointInTriangle(Te,un,Je,dn))||W>f||this.reportIntersection(o,Te,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,r){const o=cg,l=mg,c=gg,h=Wa,d=hg,u=ug,m=dg,g=pg,p=fg,f=t.indices;t.vertices;const v=this.from,_=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(e),Ut.vectorToLocalFrame(n,e,x,d),Ut.pointToLocalFrame(n,e,v,u),Ut.pointToLocalFrame(n,e,_,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,m.vsub(u,d),d.normalize();const y=u.distanceSquared(m);t.tree.rayQuery(this,c,l);for(let b=0,A=l.length;!this.result.shouldStop&&b!==A;b++){const L=l[b];t.getNormal(L,o),t.getVertex(f[L*3],Je),Je.vsub(u,h);const w=d.dot(o),E=o.dot(h)/w;if(E<0)continue;d.scale(E,Te),Te.vadd(u,Te),t.getVertex(f[L*3+1],un),t.getVertex(f[L*3+2],dn);const P=Te.distanceSquared(u);!(Qt.pointInTriangle(Te,un,Je,dn)||Qt.pointInTriangle(Te,Je,un,dn))||P>y||(Ut.vectorToWorldFrame(e,o,p),Ut.pointToWorldFrame(n,e,Te,g),this.reportIntersection(p,g,s,i,L))}l.length=0}reportIntersection(t,e,n,i,s){const r=this.from,o=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Qt.ALL:this.hasHit=!0,c.set(r,o,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case Qt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l));break;case Qt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ni),n.vsub(e,Ki),t.vsub(e,Fr);const s=ni.dot(ni),r=ni.dot(Ki),o=ni.dot(Fr),l=Ki.dot(Ki),c=Ki.dot(Fr);let h,d;return(h=l*o-r*c)>=0&&(d=s*c-r*o)>=0&&h+d<s*l-r*r}}Qt.CLOSEST=fo.CLOSEST;Qt.ANY=fo.ANY;Qt.ALL=fo.ALL;const Ga=new ke,Nr=[],Ki=new M,Fr=new M,ng=new M,ig=new te,Te=new M,Je=new M,un=new M,dn=new M;new M;new Xs;const Va={faceList:[0]},Bs=new M,sg=new Qt,rg=[],og=new M,ag=new M,lg=new M;new M;new M;const Wa=new M,cg=new M,hg=new M,ug=new M,dg=new M,fg=new M,pg=new M;new ke;const mg=[],gg=new Ut,ni=new M,Os=new M;function vg(a,t,e){e.vsub(a,ni);const n=ni.dot(t);return t.scale(n,Os),Os.vadd(a,Os),e.distanceTo(Os)}class Ri extends kl{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const r=t.boundingRadius,o=e.boundingRadius,l=i+r;return s-o<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,r=this.axisIndex;let o,l;for(this.dirty&&(this.sortList(),this.dirty=!1),o=0;o!==s;o++){const c=i[o];for(l=o+1;l<s;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!Ri.checkBounds(c,h,r))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Ri.insertionSortX(t):e===1?Ri.insertionSortY(t):e===2&&Ri.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,r=0;const o=this.axisList,l=o.length,c=1/l;for(let m=0;m!==l;m++){const g=o[m],p=g.position.x;t+=p,e+=p*p;const f=g.position.y;n+=f,i+=f*f;const v=g.position.z;s+=v,r+=v*v}const h=e-t*t*c,d=i-n*n*c,u=r-s*s*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const r=this.axisList;e.lowerBound[s],e.upperBound[s];for(let o=0;o<r.length;o++){const l=r[o];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class _g{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Ha{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class ms{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=ms.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ha,this.jacobianElementB=new Ha,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,o)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,o)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,qa),o.scale(h,Xa),n.invInertiaWorldSolve.vmult(r,ja),i.invInertiaWorldSolve.vmult(l,Ya),t.multiplyVectors(qa,ja)+e.multiplyVectors(Xa,Ya)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return o.vmult(t.rotational,ks),c+=ks.dot(t.rotational),l.vmult(e.rotational,ks),c+=ks.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=xg;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ms.idCounter=0;const qa=new M,Xa=new M,ja=new M,Ya=new M,ks=new M,xg=new M;class yg extends ms{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,l=Mg,c=wg,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=bg,p=this.jacobianElementA,f=this.jacobianElementB,v=this.ni;r.cross(v,l),o.cross(v,c),v.negate(p.spatial),l.negate(p.rotational),f.spatial.copy(v),f.rotational.copy(c),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(r,g);const _=v.dot(g),x=this.restitution+1,y=x*u.dot(v)-x*h.dot(v)+m.dot(c)-d.dot(l),b=this.computeGiMf();return-_*e-y*n-t*b}getImpactVelocityAlongNormal(){const t=Sg,e=Eg,n=Ag,i=Tg,s=Cg;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Mg=new M,wg=new M,bg=new M,Sg=new M,Eg=new M,Ag=new M,Tg=new M,Cg=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Ka extends ms{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Lg,r=Rg,o=this.t;n.cross(o,s),i.cross(o,r);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const Lg=new M,Rg=new M;class gs{constructor(t,e,n){n=_g.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=gs.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}gs.idCounter=0;class vs{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=vs.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}vs.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Qt;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Pg extends ft{constructor(){super({type:ft.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new M),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){En.set(0,0,1),e.vmult(En,En);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),En.x===1?i.x=t.x:En.x===-1&&(n.x=t.x),En.y===1?i.y=t.y:En.y===-1&&(n.y=t.y),En.z===1?i.z=t.z:En.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const En=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new ke;new M;new ke;new M;new M;new M;new M;new M;new M;new M;new ke;new M;new Ut;new ke;class Dg{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Ig extends Dg{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,l=e.bodies,c=l.length,h=t;let d,u,m,g,p,f;if(o!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const v=Ng,_=Fg,x=zg;v.length=o,_.length=o,x.length=o;for(let y=0;y!==o;y++){const b=r[y];x[y]=0,_[y]=b.computeB(h),v[y]=1/b.computeC()}if(o!==0){for(let A=0;A!==c;A++){const L=l[A],w=L.vlambda,E=L.wlambda;w.set(0,0,0),E.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let A=0;A!==o;A++){const L=r[A];d=_[A],u=v[A],f=x[A],p=L.computeGWlambda(),m=u*(d-p-L.eps*f),f+m<L.minForce?m=L.minForce-f:f+m>L.maxForce&&(m=L.maxForce-f),x[A]+=m,g+=m>0?m:-m,L.addToWlambda(m)}if(g*g<s)break}for(let A=0;A!==c;A++){const L=l[A],w=L.velocity,E=L.angularVelocity;L.vlambda.vmul(L.linearFactor,L.vlambda),w.vadd(L.vlambda,w),L.wlambda.vmul(L.angularFactor,L.wlambda),E.vadd(L.wlambda,E)}let y=r.length;const b=1/h;for(;y--;)r[y].multiplier=x[y]*b}return n}}const zg=[],Ng=[],Fg=[];class Bg{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Og extends Bg{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const Ht={sphereSphere:ft.types.SPHERE,spherePlane:ft.types.SPHERE|ft.types.PLANE,boxBox:ft.types.BOX|ft.types.BOX,sphereBox:ft.types.SPHERE|ft.types.BOX,planeBox:ft.types.PLANE|ft.types.BOX,convexConvex:ft.types.CONVEXPOLYHEDRON,sphereConvex:ft.types.SPHERE|ft.types.CONVEXPOLYHEDRON,planeConvex:ft.types.PLANE|ft.types.CONVEXPOLYHEDRON,boxConvex:ft.types.BOX|ft.types.CONVEXPOLYHEDRON,sphereHeightfield:ft.types.SPHERE|ft.types.HEIGHTFIELD,boxHeightfield:ft.types.BOX|ft.types.HEIGHTFIELD,convexHeightfield:ft.types.CONVEXPOLYHEDRON|ft.types.HEIGHTFIELD,sphereParticle:ft.types.PARTICLE|ft.types.SPHERE,planeParticle:ft.types.PLANE|ft.types.PARTICLE,boxParticle:ft.types.BOX|ft.types.PARTICLE,convexParticle:ft.types.PARTICLE|ft.types.CONVEXPOLYHEDRON,cylinderCylinder:ft.types.CYLINDER,sphereCylinder:ft.types.SPHERE|ft.types.CYLINDER,planeCylinder:ft.types.PLANE|ft.types.CYLINDER,boxCylinder:ft.types.BOX|ft.types.CYLINDER,convexCylinder:ft.types.CONVEXPOLYHEDRON|ft.types.CYLINDER,heightfieldCylinder:ft.types.HEIGHTFIELD|ft.types.CYLINDER,particleCylinder:ft.types.PARTICLE|ft.types.CYLINDER,sphereTrimesh:ft.types.SPHERE|ft.types.TRIMESH,planeTrimesh:ft.types.PLANE|ft.types.TRIMESH};class kg{get[Ht.sphereSphere](){return this.sphereSphere}get[Ht.spherePlane](){return this.spherePlane}get[Ht.boxBox](){return this.boxBox}get[Ht.sphereBox](){return this.sphereBox}get[Ht.planeBox](){return this.planeBox}get[Ht.convexConvex](){return this.convexConvex}get[Ht.sphereConvex](){return this.sphereConvex}get[Ht.planeConvex](){return this.planeConvex}get[Ht.boxConvex](){return this.boxConvex}get[Ht.sphereHeightfield](){return this.sphereHeightfield}get[Ht.boxHeightfield](){return this.boxHeightfield}get[Ht.convexHeightfield](){return this.convexHeightfield}get[Ht.sphereParticle](){return this.sphereParticle}get[Ht.planeParticle](){return this.planeParticle}get[Ht.boxParticle](){return this.boxParticle}get[Ht.convexParticle](){return this.convexParticle}get[Ht.cylinderCylinder](){return this.convexConvex}get[Ht.sphereCylinder](){return this.sphereConvex}get[Ht.planeCylinder](){return this.planeConvex}get[Ht.boxCylinder](){return this.boxConvex}get[Ht.convexCylinder](){return this.convexConvex}get[Ht.heightfieldCylinder](){return this.heightfieldCylinder}get[Ht.particleCylinder](){return this.particleCylinder}get[Ht.sphereTrimesh](){return this.sphereTrimesh}get[Ht.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Og,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=t,o.bj=e):o=new yg(t,e),o.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(o.restitution=c.restitution*h.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(o.frictionGravity||o.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,p=g.length?g.pop():new Ka(n,i,u*m),f=g.length?g.pop():new Ka(n,i,u*m);return p.bi=f.bi=n,p.bj=f.bj=i,p.minForce=f.minForce=-u*m,p.maxForce=f.maxForce=u*m,p.ri.copy(t.ri),p.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(p.t,f.t),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),p.enabled=f.enabled=t.enabled,e.push(p,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Jn.setZero(),Ai.setZero(),Ti.setZero();const s=e.bi;e.bj;for(let o=0;o!==t;o++)e=this.result[this.result.length-1-o],e.bi!==s?(Jn.vadd(e.ni,Jn),Ai.vadd(e.ri,Ai),Ti.vadd(e.rj,Ti)):(Jn.vsub(e.ni,Jn),Ai.vadd(e.rj,Ai),Ti.vadd(e.ri,Ti));const r=1/t;Ai.scale(r,n.ri),Ti.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Jn.normalize(),Jn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;const l=Vg,c=Wg,h=Ug,d=Gg;for(let u=0,m=t.length;u!==m;u++){const g=t[u],p=e[u];let f=null;g.material&&p.material&&(f=n.getContactMaterial(g.material,p.material)||null);const v=g.type&ct.KINEMATIC&&p.type&ct.STATIC||g.type&ct.STATIC&&p.type&ct.KINEMATIC||g.type&ct.KINEMATIC&&p.type&ct.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],l),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const x=g.shapes[_];for(let y=0;y<p.shapes.length;y++){p.quaternion.mult(p.shapeOrientations[y],c),p.quaternion.vmult(p.shapeOffsets[y],d),d.vadd(p.position,d);const b=p.shapes[y];if(!(x.collisionFilterMask&b.collisionFilterGroup&&b.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+b.boundingSphereRadius)continue;let A=null;x.material&&b.material&&(A=n.getContactMaterial(x.material,b.material)||null),this.currentContactMaterial=A||f||n.defaultContactMaterial;const L=x.type|b.type,w=this[L];if(w){let E=!1;x.type<b.type?E=w.call(this,x,b,h,d,l,c,g,p,x,b,v):E=w.call(this,b,x,d,h,c,l,p,g,x,b,v),E&&v&&(n.shapeOverlapKeeper.set(x.id,b.id),n.bodyOverlapKeeper.set(g.id,p.id))}}}}}sphereSphere(t,e,n,i,s,r,o,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(o,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,r,o,l,c,h,d){const u=this.createContactEquation(o,l,t,e,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Us),u.ni.scale(u.ni.dot(Us),Za),Us.vsub(Za,u.rj),-Us.dot(u.ni)<=t.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(o.position,m),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,o,l,t,e,d)}sphereBox(t,e,n,i,s,r,o,l,c,h,d){const u=this.v3pool,m=m0;n.vsub(i,Gs),e.getSideNormals(m,r);const g=t.radius;let p=!1;const f=v0,v=_0,_=x0;let x=null,y=0,b=0,A=0,L=null;for(let I=0,H=m.length;I!==H&&p===!1;I++){const O=d0;O.copy(m[I]);const X=O.length();O.normalize();const K=Gs.dot(O);if(K<X+g&&K>0){const nt=f0,N=p0;nt.copy(m[(I+1)%3]),N.copy(m[(I+2)%3]);const Q=nt.length(),et=N.length();nt.normalize(),N.normalize();const U=Gs.dot(nt),ot=Gs.dot(N);if(U<Q&&U>-Q&&ot<et&&ot>-et){const at=Math.abs(K-X-g);if((L===null||at<L)&&(L=at,b=U,A=ot,x=X,f.copy(O),v.copy(nt),_.copy(N),y++,d))return!0}}}if(y){p=!0;const I=this.createContactEquation(o,l,t,e,c,h);f.scale(-g,I.ri),I.ni.copy(f),I.ni.negate(I.ni),f.scale(x,f),v.scale(b,v),f.vadd(v,f),_.scale(A,_),f.vadd(_,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(l.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let w=u.get();const E=g0;for(let I=0;I!==2&&!p;I++)for(let H=0;H!==2&&!p;H++)for(let O=0;O!==2&&!p;O++)if(w.set(0,0,0),I?w.vadd(m[0],w):w.vsub(m[0],w),H?w.vadd(m[1],w):w.vsub(m[1],w),O?w.vadd(m[2],w):w.vsub(m[2],w),i.vadd(w,E),E.vsub(n,E),E.lengthSquared()<g*g){if(d)return!0;p=!0;const X=this.createContactEquation(o,l,t,e,c,h);X.ri.copy(E),X.ri.normalize(),X.ni.copy(X.ri),X.ri.scale(g,X.ri),X.rj.copy(w),X.ri.vadd(n,X.ri),X.ri.vsub(o.position,X.ri),X.rj.vadd(i,X.rj),X.rj.vsub(l.position,X.rj),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}u.release(w),w=null;const P=u.get(),B=u.get(),W=u.get(),R=u.get(),D=u.get(),z=m.length;for(let I=0;I!==z&&!p;I++)for(let H=0;H!==z&&!p;H++)if(I%3!==H%3){m[H].cross(m[I],P),P.normalize(),m[I].vadd(m[H],B),W.copy(n),W.vsub(B,W),W.vsub(i,W);const O=W.dot(P);P.scale(O,R);let X=0;for(;X===I%3||X===H%3;)X++;D.copy(n),D.vsub(R,D),D.vsub(B,D),D.vsub(i,D);const K=Math.abs(O),nt=D.length();if(K<m[X].length()&&nt<g){if(d)return!0;p=!0;const N=this.createContactEquation(o,l,t,e,c,h);B.vadd(R,N.rj),N.rj.copy(N.rj),D.negate(N.ni),N.ni.normalize(),N.ri.copy(N.rj),N.ri.vadd(i,N.ri),N.ri.vsub(n,N.ri),N.ri.normalize(),N.ri.scale(g,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}u.release(P,B,W,R,D)}planeBox(t,e,n,i,s,r,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,o,l,t,e,d)}convexConvex(t,e,n,i,s,r,o,l,c,h,d,u,m){const g=z0;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,g,u,m)){const p=[],f=N0;t.clipAgainstHull(n,s,e,i,r,g,-100,100,p);let v=0;for(let _=0;_!==p.length;_++){if(d)return!0;const x=this.createContactEquation(o,l,t,e,c,h),y=x.ri,b=x.rj;g.negate(x.ni),p[_].normal.negate(f),f.scale(p[_].depth,f),p[_].point.vadd(f,y),b.copy(p[_].point),y.vsub(n,y),b.vsub(i,b),y.vadd(n,y),y.vsub(o.position,y),b.vadd(i,b),b.vsub(l.position,b),this.result.push(x),v++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&v&&this.createFrictionFromAverage(v)}}sphereConvex(t,e,n,i,s,r,o,l,c,h,d){const u=this.v3pool;n.vsub(i,y0);const m=e.faceNormals,g=e.faces,p=e.vertices,f=t.radius;let v=!1;for(let _=0;_!==p.length;_++){const x=p[_],y=S0;r.vmult(x,y),i.vadd(y,y);const b=b0;if(y.vsub(n,b),b.lengthSquared()<f*f){if(d)return!0;v=!0;const A=this.createContactEquation(o,l,t,e,c,h);A.ri.copy(b),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(f,A.ri),y.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(o.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(l.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let _=0,x=g.length;_!==x&&v===!1;_++){const y=m[_],b=g[_],A=E0;r.vmult(y,A);const L=A0;r.vmult(p[b[0]],L),L.vadd(i,L);const w=T0;A.scale(-f,w),n.vadd(w,w);const E=C0;w.vsub(L,E);const P=E.dot(A),B=L0;if(n.vsub(L,B),P<0&&B.dot(A)>0){const W=[];for(let R=0,D=b.length;R!==D;R++){const z=u.get();r.vmult(p[b[R]],z),i.vadd(z,z),W.push(z)}if(u0(W,A,n)){if(d)return!0;v=!0;const R=this.createContactEquation(o,l,t,e,c,h);A.scale(-f,R.ri),A.negate(R.ni);const D=u.get();A.scale(-P,D);const z=u.get();A.scale(-f,z),n.vsub(i,R.rj),R.rj.vadd(z,R.rj),R.rj.vadd(D,R.rj),R.rj.vadd(i,R.rj),R.rj.vsub(l.position,R.rj),R.ri.vadd(n,R.ri),R.ri.vsub(o.position,R.ri),u.release(D),u.release(z),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult);for(let I=0,H=W.length;I!==H;I++)u.release(W[I]);return}else for(let R=0;R!==b.length;R++){const D=u.get(),z=u.get();r.vmult(p[b[(R+1)%b.length]],D),r.vmult(p[b[(R+2)%b.length]],z),i.vadd(D,D),i.vadd(z,z);const I=M0;z.vsub(D,I);const H=w0;I.unit(H);const O=u.get(),X=u.get();n.vsub(D,X);const K=X.dot(H);H.scale(K,O),O.vadd(D,O);const nt=u.get();if(O.vsub(n,nt),K>0&&K*K<I.lengthSquared()&&nt.lengthSquared()<f*f){if(d)return!0;const N=this.createContactEquation(o,l,t,e,c,h);O.vsub(i,N.rj),O.vsub(n,N.ni),N.ni.normalize(),N.ni.scale(f,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let Q=0,et=W.length;Q!==et;Q++)u.release(W[Q]);u.release(D),u.release(z),u.release(O),u.release(nt),u.release(X);return}u.release(D),u.release(z),u.release(O),u.release(nt),u.release(X)}for(let R=0,D=W.length;R!==D;R++)u.release(W[R])}}}planeConvex(t,e,n,i,s,r,o,l,c,h,d){const u=R0,m=P0;m.set(0,0,1),s.vmult(m,m);let g=0;const p=D0;for(let f=0;f!==e.vertices.length;f++)if(u.copy(e.vertices[f]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,p),m.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(o,l,t,e,c,h),x=I0;m.scale(m.dot(p),x),u.vsub(x,x),x.vsub(n,_.ri),_.ni.copy(m),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(o.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}sphereHeightfield(t,e,n,i,s,r,o,l,c,h,d){const u=e.data,m=t.radius,g=e.elementSize,p=j0,f=X0;Ut.pointToLocalFrame(i,r,n,f);let v=Math.floor((f.x-m)/g)-1,_=Math.ceil((f.x+m)/g)+1,x=Math.floor((f.y-m)/g)-1,y=Math.ceil((f.y+m)/g)+1;if(_<0||y<0||v>u.length||x>u[0].length)return;v<0&&(v=0),_<0&&(_=0),x<0&&(x=0),y<0&&(y=0),v>=u.length&&(v=u.length-1),_>=u.length&&(_=u.length-1),y>=u[0].length&&(y=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const b=[];e.getRectMinMax(v,x,_,y,b);const A=b[0],L=b[1];if(f.z-m>L||f.z+m<A)return;const w=this.result;for(let E=v;E<_;E++)for(let P=x;P<y;P++){const B=w.length;let W=!1;if(e.getConvexTrianglePillar(E,P,!1),Ut.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(W=this.sphereConvex(t,e.pillarConvex,n,p,s,r,o,l,t,e,d)),d&&W||(e.getConvexTrianglePillar(E,P,!0),Ut.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(W=this.sphereConvex(t,e.pillarConvex,n,p,s,r,o,l,t,e,d)),d&&W))return!0;if(w.length-B>2)return}}boxHeightfield(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}convexHeightfield(t,e,n,i,s,r,o,l,c,h,d){const u=e.data,m=e.elementSize,g=t.boundingSphereRadius,p=H0,f=q0,v=W0;Ut.pointToLocalFrame(i,r,n,v);let _=Math.floor((v.x-g)/m)-1,x=Math.ceil((v.x+g)/m)+1,y=Math.floor((v.y-g)/m)-1,b=Math.ceil((v.y+g)/m)+1;if(x<0||b<0||_>u.length||y>u[0].length)return;_<0&&(_=0),x<0&&(x=0),y<0&&(y=0),b<0&&(b=0),_>=u.length&&(_=u.length-1),x>=u.length&&(x=u.length-1),b>=u[0].length&&(b=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const A=[];e.getRectMinMax(_,y,x,b,A);const L=A[0],w=A[1];if(!(v.z-g>w||v.z+g<L))for(let E=_;E<x;E++)for(let P=y;P<b;P++){let B=!1;if(e.getConvexTrianglePillar(E,P,!1),Ut.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.convexConvex(t,e.pillarConvex,n,p,s,r,o,l,null,null,d,f,null)),d&&B||(e.getConvexTrianglePillar(E,P,!0),Ut.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.convexConvex(t,e.pillarConvex,n,p,s,r,o,l,null,null,d,f,null)),d&&B))return!0}}sphereParticle(t,e,n,i,s,r,o,l,c,h,d){const u=k0;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,o,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,r,o,l,c,h,d){const u=F0;u.set(0,0,1),o.quaternion.vmult(u,u);const m=B0;if(i.vsub(o.position,m),u.dot(m)<=0){if(d)return!0;const p=this.createContactEquation(l,o,e,t,c,h);p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0);const f=O0;u.scale(u.dot(i),f),i.vsub(f,f),p.rj.copy(f),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}boxParticle(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}convexParticle(t,e,n,i,s,r,o,l,c,h,d){let u=-1;const m=G0,g=V0;let p=null;const f=U0;if(f.copy(i),f.vsub(n,f),s.conjugate($a),$a.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let v=0,_=t.faces.length;v!==_;v++){const x=[t.worldVertices[t.faces[v][0]]],y=t.worldFaceNormals[v];i.vsub(x[0],Ja);const b=-y.dot(Ja);if(p===null||Math.abs(b)<Math.abs(p)){if(d)return!0;p=b,u=v,m.copy(y)}}if(u!==-1){const v=this.createContactEquation(l,o,e,t,c,h);m.scale(p,g),g.vadd(i,g),g.vsub(n,g),v.rj.copy(g),m.negate(v.ni),v.ri.set(0,0,0);const _=v.ri,x=v.rj;_.vadd(i,_),_.vsub(l.position,_),x.vadd(n,x),x.vsub(o.position,x),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,o,l,c,h,d){return this.convexHeightfield(e,t,i,n,r,s,l,o,c,h,d)}particleCylinder(t,e,n,i,s,r,o,l,c,h,d){return this.convexParticle(e,t,i,n,r,s,l,o,c,h,d)}sphereTrimesh(t,e,n,i,s,r,o,l,c,h,d){const u=$g,m=Jg,g=Qg,p=t0,f=e0,v=n0,_=o0,x=Zg,y=Yg,b=a0;Ut.pointToLocalFrame(i,r,n,f);const A=t.radius;_.lowerBound.set(f.x-A,f.y-A,f.z-A),_.upperBound.set(f.x+A,f.y+A,f.z+A),e.getTrianglesInAABB(_,b);const L=Kg,w=t.radius*t.radius;for(let R=0;R<b.length;R++)for(let D=0;D<3;D++)if(e.getVertex(e.indices[b[R]*3+D],L),L.vsub(f,y),y.lengthSquared()<=w){if(x.copy(L),Ut.pointToWorldFrame(i,r,x,L),L.vsub(n,y),d)return!0;let z=this.createContactEquation(o,l,t,e,c,h);z.ni.copy(y),z.ni.normalize(),z.ri.copy(z.ni),z.ri.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(o.position,z.ri),z.rj.copy(L),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}for(let R=0;R<b.length;R++)for(let D=0;D<3;D++){e.getVertex(e.indices[b[R]*3+D],u),e.getVertex(e.indices[b[R]*3+(D+1)%3],m),m.vsub(u,g),f.vsub(m,v);const z=v.dot(g);f.vsub(u,v);let I=v.dot(g);if(I>0&&z<0&&(f.vsub(u,v),p.copy(g),p.normalize(),I=v.dot(p),p.scale(I,v),v.vadd(u,v),v.distanceTo(f)<t.radius)){if(d)return!0;const O=this.createContactEquation(o,l,t,e,c,h);v.vsub(f,O.ni),O.ni.normalize(),O.ni.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(o.position,O.ri),Ut.pointToWorldFrame(i,r,v,v),v.vsub(l.position,O.rj),Ut.vectorToWorldFrame(r,O.ni,O.ni),Ut.vectorToWorldFrame(r,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}const E=i0,P=s0,B=r0,W=jg;for(let R=0,D=b.length;R!==D;R++){e.getTriangleVertices(b[R],E,P,B),e.getNormal(b[R],W),f.vsub(E,v);let z=v.dot(W);if(W.scale(z,v),f.vsub(v,v),z=v.distanceTo(f),Qt.pointInTriangle(v,E,P,B)&&z<t.radius){if(d)return!0;let I=this.createContactEquation(o,l,t,e,c,h);v.vsub(f,I.ni),I.ni.normalize(),I.ni.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),Ut.pointToWorldFrame(i,r,v,v),v.vsub(l.position,I.rj),Ut.vectorToWorldFrame(r,I.ni,I.ni),Ut.vectorToWorldFrame(r,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}b.length=0}planeTrimesh(t,e,n,i,s,r,o,l,c,h,d){const u=new M,m=Hg;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const p=new M;p.copy(u),Ut.pointToWorldFrame(i,r,p,u);const f=qg;if(u.vsub(n,f),m.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(o,l,t,e,c,h);_.ni.copy(m);const x=Xg;m.scale(f.dot(m),x),u.vsub(x,x),_.ri.copy(x),_.ri.vsub(o.position,_.ri),_.rj.copy(u),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Jn=new M,Ai=new M,Ti=new M,Ug=new M,Gg=new M,Vg=new te,Wg=new te,Hg=new M,qg=new M,Xg=new M,jg=new M,Yg=new M;new M;const Kg=new M,Zg=new M,$g=new M,Jg=new M,Qg=new M,t0=new M,e0=new M,n0=new M,i0=new M,s0=new M,r0=new M,o0=new ke,a0=[],Us=new M,Za=new M,l0=new M,c0=new M,h0=new M;function u0(a,t,e){let n=null;const i=a.length;for(let s=0;s!==i;s++){const r=a[s],o=l0;a[(s+1)%i].vsub(r,o);const l=c0;o.cross(t,l);const c=h0;e.vsub(r,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Gs=new M,d0=new M,f0=new M,p0=new M,m0=[new M,new M,new M,new M,new M,new M],g0=new M,v0=new M,_0=new M,x0=new M,y0=new M,M0=new M,w0=new M,b0=new M,S0=new M,E0=new M,A0=new M,T0=new M,C0=new M,L0=new M;new M;new M;const R0=new M,P0=new M,D0=new M,I0=new M,z0=new M,N0=new M,F0=new M,B0=new M,O0=new M,k0=new M,$a=new te,U0=new M;new M;const G0=new M,Ja=new M,V0=new M,W0=new M,H0=new M,q0=[0],X0=new M,j0=new M;class Qa{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let o=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[o];)o++;c=h===i[o],c||tl(t,h)}o=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>n[o];)o++;c=n[o]===h,c||tl(e,h)}}}function tl(a,t){a.push((t&4294901760)>>16,t&65535)}const Br=(a,t)=>a<t?`${a}-${t}`:`${t}-${a}`;class Y0{constructor(){this.data={keys:[]}}get(t,e){const n=Br(t,e);return this.data[n]}set(t,e,n){const i=Br(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Br(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class K0 extends Ol{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new eg,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Ig,this.constraints=[],this.narrowphase=new kg(this),this.collisionMatrix=new ka,this.collisionMatrixPrevious=new ka,this.bodyOverlapKeeper=new Qa,this.shapeOverlapKeeper=new Qa,this.contactmaterials=[],this.contactMaterialTable=new Y0,this.defaultMaterial=new vs("default"),this.defaultContactMaterial=new gs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Xs?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Qt.ALL,n.from=t,n.to=e,n.callback=i,Or.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Qt.ANY,n.from=t,n.to=e,n.result=i,Or.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Qt.CLOSEST,n.from=t,n.to=e,n.result=i,Or.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ct&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ne.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ne.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ne.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=tv,i=ev,s=this.bodies.length,r=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=ct.DYNAMIC;let u=-1/0;const m=this.constraints,g=Q0;l.length();const p=l.x,f=l.y,v=l.z;let _=0;for(c&&(u=ne.now()),_=0;_!==s;_++){const R=r[_];if(R.type===d){const D=R.force,z=R.mass;D.x+=z*p,D.y+=z*f,D.z+=z*v}}for(let R=0,D=this.subsystems.length;R!==D;R++)this.subsystems[R].update();c&&(u=ne.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=ne.now()-u);let x=m.length;for(_=0;_!==x;_++){const R=m[_];if(!R.collideConnected)for(let D=n.length-1;D>=0;D-=1)(R.bodyA===n[D]&&R.bodyB===i[D]||R.bodyB===n[D]&&R.bodyA===i[D])&&(n.splice(D,1),i.splice(D,1))}this.collisionMatrixTick(),c&&(u=ne.now());const y=J0,b=e.length;for(_=0;_!==b;_++)y.push(e[_]);e.length=0;const A=this.frictionEquations.length;for(_=0;_!==A;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,g),c&&(h.narrowphase=ne.now()-u),c&&(u=ne.now()),_=0;_<this.frictionEquations.length;_++)o.addEquation(this.frictionEquations[_]);const L=e.length;for(let R=0;R!==L;R++){const D=e[R],z=D.bi,I=D.bj,H=D.si,O=D.sj;let X;if(z.material&&I.material?X=this.getContactMaterial(z.material,I.material)||this.defaultContactMaterial:X=this.defaultContactMaterial,X.friction,z.material&&I.material&&(z.material.friction>=0&&I.material.friction>=0&&z.material.friction*I.material.friction,z.material.restitution>=0&&I.material.restitution>=0&&(D.restitution=z.material.restitution*I.material.restitution)),o.addEquation(D),z.allowSleep&&z.type===ct.DYNAMIC&&z.sleepState===ct.SLEEPING&&I.sleepState===ct.AWAKE&&I.type!==ct.STATIC){const K=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),nt=I.sleepSpeedLimit**2;K>=nt*2&&(z.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===ct.DYNAMIC&&I.sleepState===ct.SLEEPING&&z.sleepState===ct.AWAKE&&z.type!==ct.STATIC){const K=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),nt=z.sleepSpeedLimit**2;K>=nt*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(z,I,!0),this.collisionMatrixPrevious.get(z,I)||(Zi.body=I,Zi.contact=D,z.dispatchEvent(Zi),Zi.body=z,I.dispatchEvent(Zi)),this.bodyOverlapKeeper.set(z.id,I.id),this.shapeOverlapKeeper.set(H.id,O.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=ne.now()-u,u=ne.now()),_=0;_!==s;_++){const R=r[_];R.wakeUpAfterNarrowphase&&(R.wakeUp(),R.wakeUpAfterNarrowphase=!1)}for(x=m.length,_=0;_!==x;_++){const R=m[_];R.update();for(let D=0,z=R.equations.length;D!==z;D++){const I=R.equations[D];o.addEquation(I)}}o.solve(t,this),c&&(h.solve=ne.now()-u),o.removeAllEquations();const w=Math.pow;for(_=0;_!==s;_++){const R=r[_];if(R.type&d){const D=w(1-R.linearDamping,t),z=R.velocity;z.scale(D,z);const I=R.angularVelocity;if(I){const H=w(1-R.angularDamping,t);I.scale(H,I)}}}this.dispatchEvent($0),c&&(u=ne.now());const P=this.stepnumber%(this.quatNormalizeSkip+1)===0,B=this.quatNormalizeFast;for(_=0;_!==s;_++)r[_].integrate(t,P,B);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=ne.now()-u),this.stepnumber+=1,this.dispatchEvent(Z0);let W=!0;if(this.allowSleep)for(W=!1,_=0;_!==s;_++){const R=r[_];R.sleepTick(this.time),R.sleepState!==ct.SLEEPING&&(W=!0)}this.hasActiveBodies=W}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(An,Tn),t){for(let s=0,r=An.length;s<r;s+=2)$i.bodyA=this.getBodyById(An[s]),$i.bodyB=this.getBodyById(An[s+1]),this.dispatchEvent($i);$i.bodyA=$i.bodyB=null}if(e){for(let s=0,r=Tn.length;s<r;s+=2)Ji.bodyA=this.getBodyById(Tn[s]),Ji.bodyB=this.getBodyById(Tn[s+1]),this.dispatchEvent(Ji);Ji.bodyA=Ji.bodyB=null}An.length=Tn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(An,Tn),n){for(let s=0,r=An.length;s<r;s+=2){const o=this.getShapeById(An[s]),l=this.getShapeById(An[s+1]);Cn.shapeA=o,Cn.shapeB=l,o&&(Cn.bodyA=o.body),l&&(Cn.bodyB=l.body),this.dispatchEvent(Cn)}Cn.bodyA=Cn.bodyB=Cn.shapeA=Cn.shapeB=null}if(i){for(let s=0,r=Tn.length;s<r;s+=2){const o=this.getShapeById(Tn[s]),l=this.getShapeById(Tn[s+1]);Ln.shapeA=o,Ln.shapeB=l,o&&(Ln.bodyA=o.body),l&&(Ln.bodyB=l.body),this.dispatchEvent(Ln)}Ln.bodyA=Ln.bodyB=Ln.shapeA=Ln.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new ke;const Or=new Qt,ne=globalThis.performance||{};if(!ne.now){let a=Date.now();ne.timing&&ne.timing.navigationStart&&(a=ne.timing.navigationStart),ne.now=()=>Date.now()-a}new M;const Z0={type:"postStep"},$0={type:"preStep"},Zi={type:ct.COLLIDE_EVENT_NAME,body:null,contact:null},J0=[],Q0=[],tv=[],ev=[],An=[],Tn=[],$i={type:"beginContact",bodyA:null,bodyB:null},Ji={type:"endContact",bodyA:null,bodyB:null},Cn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ln={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class tn{static audioCtx=null;static noiseBuffer=null;static init(){if(this.audioCtx){this.audioCtx.state==="suspended"&&this.audioCtx.resume();return}try{const t=window.AudioContext||window.webkitAudioContext;t&&(this.audioCtx=new t,this.createNoiseBuffer())}catch(t){console.warn("Failed to initialize AudioContext:",t)}}static createNoiseBuffer(){if(!this.audioCtx)return;const t=this.audioCtx.sampleRate*1;this.noiseBuffer=this.audioCtx.createBuffer(1,t,this.audioCtx.sampleRate);const e=this.noiseBuffer.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1}static playNoise(t,e,n,i="lowpass"){if(!this.audioCtx||!this.noiseBuffer)return;const s=this.audioCtx.createBufferSource();s.buffer=this.noiseBuffer;const r=this.audioCtx.createGain();r.gain.setValueAtTime(e,this.audioCtx.currentTime),r.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+t);let o=s;if(n!==void 0){const l=this.audioCtx.createBiquadFilter();l.type=i,l.frequency.setValueAtTime(n,this.audioCtx.currentTime),s.connect(l),o=l}o.connect(r),r.connect(this.audioCtx.destination),s.start(),s.stop(this.audioCtx.currentTime+t)}static playTone(t,e,n,i,s){if(!this.audioCtx)return;const r=this.audioCtx.createOscillator();r.type=t;const o=this.audioCtx.createGain();o.gain.setValueAtTime(s,this.audioCtx.currentTime),o.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+i),r.frequency.setValueAtTime(e,this.audioCtx.currentTime),e!==n&&r.frequency.exponentialRampToValueAtTime(n,this.audioCtx.currentTime+i),r.connect(o),o.connect(this.audioCtx.destination),r.start(),r.stop(this.audioCtx.currentTime+i)}static playBreak(t){if(this.init(),!!this.audioCtx)switch(t){case q.STONE:case q.COAL_ORE:case q.BRICK:this.playNoise(.18,.35,450,"bandpass"),this.playTone("triangle",130,40,.15,.3);break;case q.WOOD:case q.PLANK:case q.DOOR_CLOSED:case q.DOOR_OPEN:this.playNoise(.12,.3,600,"lowpass"),this.playTone("triangle",180,80,.12,.35);break;case q.GROUND:case q.DIRT:case q.LEAVES:this.playNoise(.08,.25,1200,"bandpass");break;case q.GLASS:this.playTone("sine",1600,800,.25,.35),this.playTone("sine",2200,1e3,.2,.2),this.playNoise(.18,.15,4e3,"highpass");break;default:this.playNoise(.1,.25,800,"lowpass");break}}static playPlace(t){if(this.init(),!!this.audioCtx)switch(t){case q.STONE:case q.COAL_ORE:case q.BRICK:this.playNoise(.08,.2,700,"bandpass"),this.playTone("triangle",180,120,.08,.18);break;case q.WOOD:case q.PLANK:case q.DOOR_CLOSED:case q.DOOR_OPEN:this.playNoise(.06,.2,900,"lowpass"),this.playTone("triangle",240,180,.06,.2);break;case q.GLASS:this.playTone("sine",1900,1700,.1,.2);break;default:this.playNoise(.05,.18,1400,"lowpass");break}}static playSwing(){this.init(),this.playTone("sine",600,90,.12,.25),this.playNoise(.08,.1,2500,"bandpass")}static playHit(){this.init(),this.playNoise(.12,.4,250,"lowpass"),this.playTone("sawtooth",120,40,.1,.3)}static playDamage(){this.init(),this.playTone("sawtooth",85,45,.16,.45),this.playNoise(.14,.25,350,"lowpass")}static playJump(){this.init(),this.playTone("triangle",160,280,.12,.2)}static playPickup(){this.init(),this.playTone("sine",950,1400,.08,.22)}}class Ve{position;camera;body;avatar;head;bodyMesh;leftArm;rightArm;leftLeg;rightLeg;cameraMode="1PV";armorType="none";armorMat;sword1PV;sword3PV;swingTime=0;hp=vt.PLAYER_MAX_HP;isDead=!1;spawnPosition;pitch=0;yaw=0;sensitivity=.002;speed=vt.PLAYER_SPEED;jumpForce=vt.PLAYER_JUMP_FORCE;isGrounded=!1;lastVelocityY=0;static tempVec3=new G;static tempVec3_2=new G;static tempQuat=new ci;static tempQuat_2=new ci;static tempDirection=new G;constructor(t,e,n,i){this.camera=t,this.position=e.clone(),this.spawnPosition=e.clone();const s=vt.PLAYER_RADIUS,r=vt.PLAYER_HEIGHT/2,o=new di(new M(s,r,s));this.body=new ct({mass:60,shape:o,position:new M(e.x,e.y+r,e.z),fixedRotation:!0,linearDamping:.1}),n.addBody(this.body),this.avatar=new Ee,this.buildAvatar(),i.add(this.avatar),this.sword1PV=this.buildSword(),this.sword1PV.position.set(.24,-.24,-.38),this.sword1PV.rotation.set(-30*Math.PI/180,45*Math.PI/180,15*Math.PI/180),this.camera.add(this.sword1PV),this.sword3PV=this.buildSword(),this.sword3PV.position.set(0,-.6,.1),this.sword3PV.rotation.x=Math.PI/2,this.rightArm.add(this.sword3PV),this.syncCamera()}buildAvatar(){const t=new _e({color:16767916,roughness:.9}),e=new _e({color:33023,roughness:.9}),n=new _e({color:16767916,roughness:.9}),i=new _e({color:2829184,roughness:.9}),s=new _e({color:5913896,roughness:.9});this.armorMat=new _e({color:16777215,roughness:.8,metalness:.1,visible:!1});const r=new Kt(.44,.44,.44),o=new Kt(.44,.62,.24),l=new Kt(.24,.35,.24);l.translate(0,-.175,0);const c=new Kt(.23,.4,.23);c.translate(0,-.2,0);const h=new Kt(.24,.2,.24);h.translate(0,-.5,0);const d=new Kt(.4,.4,.4);this.head=new Pt(d,t),this.head.position.y=.5,this.head.castShadow=!0,this.head.receiveShadow=!0;const u=new Kt(.42,.15,.42),m=new Pt(u,s);m.position.y=.15,this.head.add(m);const g=new Pt(r,this.armorMat);g.castShadow=!0,g.receiveShadow=!0,this.head.add(g),this.avatar.add(this.head);const p=new Kt(.4,.6,.2);this.bodyMesh=new Pt(p,e),this.bodyMesh.position.y=0,this.bodyMesh.castShadow=!0,this.bodyMesh.receiveShadow=!0;const f=new Pt(o,this.armorMat);f.castShadow=!0,f.receiveShadow=!0,this.bodyMesh.add(f),this.avatar.add(this.bodyMesh);const v=new Kt(.2,.6,.2);v.translate(0,-.3,0),this.leftArm=new Ee;const _=new Pt(v,n);_.castShadow=!0,_.receiveShadow=!0;const x=new Pt(l,this.armorMat);x.castShadow=!0,x.receiveShadow=!0,_.add(x),this.leftArm.add(_),this.leftArm.position.set(.3,.3,0),this.avatar.add(this.leftArm),this.rightArm=new Ee;const y=new Pt(v,n);y.castShadow=!0,y.receiveShadow=!0;const b=new Pt(l,this.armorMat);b.castShadow=!0,b.receiveShadow=!0,y.add(b),this.rightArm.add(y),this.rightArm.position.set(-.3,.3,0),this.avatar.add(this.rightArm),this.leftLeg=new Ee;const A=new Pt(v,i);A.castShadow=!0,A.receiveShadow=!0;const L=new Pt(c,this.armorMat);L.castShadow=!0,L.receiveShadow=!0,A.add(L);const w=new Pt(h,this.armorMat);w.castShadow=!0,w.receiveShadow=!0,A.add(w),this.leftLeg.add(A),this.leftLeg.position.set(.1,-.3,0),this.avatar.add(this.leftLeg),this.rightLeg=new Ee;const E=new Pt(v,i);E.castShadow=!0,E.receiveShadow=!0;const P=new Pt(c,this.armorMat);P.castShadow=!0,P.receiveShadow=!0,E.add(P);const B=new Pt(h,this.armorMat);B.castShadow=!0,B.receiveShadow=!0,E.add(B),this.rightLeg.add(E),this.rightLeg.position.set(-.1,-.3,0),this.avatar.add(this.rightLeg)}buildSword(){const t=new Ee,e=new _e({color:13421772,roughness:.3,metalness:.8}),n=new _e({color:15381256,roughness:.5,metalness:.5}),i=new _e({color:7877903,roughness:.9}),s=new Kt(.06,.45,.02);s.translate(0,.225,0);const r=new Pt(s,e);r.castShadow=!0,r.receiveShadow=!0,r.position.y=.02,t.add(r);const o=new Kt(.16,.04,.04),l=new Pt(o,n);l.castShadow=!0,l.receiveShadow=!0,l.position.y=0,t.add(l);const c=new Kt(.04,.12,.04);c.translate(0,-.06,0);const h=new Pt(c,i);return h.castShadow=!0,h.receiveShadow=!0,h.position.y=-.02,t.add(h),t}update(t,e,n,i){if(this.isDead)return;if(t.consumeJustPressed("F5")&&(this.cameraMode==="1PV"?this.cameraMode="3PV_BACK":this.cameraMode==="3PV_BACK"?this.cameraMode="3PV_FRONT":this.cameraMode="1PV"),this.position.set(this.body.position.x,this.body.position.y,this.body.position.z),!t.isLocked){this.body.velocity.x*=.8,this.body.velocity.z*=.8;return}const s=i===14;this.cameraMode==="1PV"?(this.sword1PV.visible=s,this.sword3PV.visible=!1):(this.sword1PV.visible=!1,this.sword3PV.visible=s),this.handleRotation(t),this.checkGrounded(n),this.handleMovement(t,e),this.animateAvatar(e),this.syncCamera(),this.updateHUD()}handleRotation(t){const e=t.consumeMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch-=e.y*this.sensitivity;const n=85*Math.PI/180;this.pitch=Math.max(-n,Math.min(n,this.pitch))}checkGrounded(t){const e=this.position.y-vt.PLAYER_HEIGHT/2-.1,n=[{x:this.position.x,z:this.position.z},{x:this.position.x-.3,z:this.position.z-.3},{x:this.position.x+.3,z:this.position.z-.3},{x:this.position.x-.3,z:this.position.z+.3},{x:this.position.x+.3,z:this.position.z+.3}];let i=!1;for(const r of n){const o=Math.floor(r.x),l=Math.floor(e),c=Math.floor(r.z);if(t.getBlock(o,l,c)!==0){i=!0;break}}const s=i||Math.abs(this.body.velocity.y)<.05;if(s&&!this.isGrounded&&this.lastVelocityY<vt.FALL_DAMAGE_MIN_SPEED){const r=Math.floor((vt.FALL_DAMAGE_MIN_SPEED-this.lastVelocityY)*vt.FALL_DAMAGE_FACTOR);r>0&&this.takeDamage(r)}this.isGrounded=s,this.lastVelocityY=this.body.velocity.y}setArmor(t){this.armorType=t,t==="none"?this.armorMat.visible=!1:(this.armorMat.visible=!0,t==="leather"?(this.armorMat.color.setHex(9132587),this.armorMat.roughness=.9,this.armorMat.metalness=0):t==="iron"?(this.armorMat.color.setHex(14211288),this.armorMat.roughness=.4,this.armorMat.metalness=.8):t==="diamond"&&(this.armorMat.color.setHex(2282478),this.armorMat.roughness=.3,this.armorMat.metalness=.6),this.armorMat.needsUpdate=!0)}takeDamage(t){if(this.isDead)return;t>0&&(this.armorType==="leather"?t=Math.max(1,Math.floor(t*.9)):this.armorType==="iron"?t=Math.max(1,Math.floor(t*.7)):this.armorType==="diamond"&&(t=Math.max(1,Math.floor(t*.4)))),this.hp=Math.max(0,this.hp-t),tn.playDamage();const e=document.getElementById("damage-overlay");e&&(e.style.opacity="0.5",setTimeout(()=>{e.style.opacity="0"},150)),this.hp<=0&&this.die()}die(){this.isDead=!0,this.body.velocity.set(0,0,0);const t=document.getElementById("death-screen");t&&(t.style.display="flex"),document.exitPointerLock()}respawn(){this.hp=vt.PLAYER_MAX_HP,this.isDead=!1,this.body.position.set(this.spawnPosition.x,this.spawnPosition.y+vt.PLAYER_HEIGHT/2,this.spawnPosition.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.pitch=0,this.yaw=0;const t=document.getElementById("death-screen");t&&(t.style.display="none");const e=document.getElementById("menu-overlay");e&&(e.style.display="flex")}handleMovement(t,e){const n=Ve.tempVec3.set(0,0,0);t.isActionActive("forward")&&(n.z-=1),t.isActionActive("backward")&&(n.z+=1),t.isActionActive("left")&&(n.x-=1),t.isActionActive("right")&&(n.x+=1),n.normalize();const i=Ve.tempDirection.copy(n);i.applyAxisAngle(Ve.tempVec3_2.set(0,1,0),this.yaw);const r=t.keys.ShiftLeft||t.keys.ShiftRight?this.speed*1.5:this.speed;this.body.velocity.x=i.x*r,this.body.velocity.z=i.z*r,t.isActionActive("jump")&&this.isGrounded&&(this.body.velocity.y=this.jumpForce,this.isGrounded=!1,tn.playJump())}animateAvatar(t){if(this.avatar.position.copy(this.position),this.avatar.rotation.y=this.yaw,this.head.rotation.x=this.pitch,this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z>.1&&this.isGrounded){const i=performance.now()*.01,s=Math.sin(i)*.8;this.leftArm.rotation.x=s,this.swingTime<=0&&(this.rightArm.rotation.x=-s),this.leftLeg.rotation.x=-s,this.rightLeg.rotation.x=s}else{const i=10*t;this.leftArm.rotation.x+=(0-this.leftArm.rotation.x)*i,this.swingTime<=0&&(this.rightArm.rotation.x+=(0-this.rightArm.rotation.x)*i),this.leftLeg.rotation.x+=(0-this.leftLeg.rotation.x)*i,this.rightLeg.rotation.x+=(0-this.rightLeg.rotation.x)*i}if(this.swingTime>0){this.swingTime-=t;const i=(.15-this.swingTime)/.15,s=Math.sin(i*Math.PI)*1.2;this.cameraMode==="1PV"?(this.sword1PV.rotation.x=-30*Math.PI/180+s,this.sword1PV.rotation.y=45*Math.PI/180-s*.5,this.sword1PV.position.z=-.38+s*.15):(this.rightArm.rotation.x=-Math.PI/3-s*1.5,this.rightArm.rotation.y=-s*.5)}else this.cameraMode==="1PV"&&(this.sword1PV.rotation.set(-30*Math.PI/180,45*Math.PI/180,15*Math.PI/180),this.sword1PV.position.set(.24,-.24,-.38))}syncCamera(){const t=Ve.tempQuat.setFromAxisAngle(Ve.tempVec3.set(0,1,0),this.yaw),e=Ve.tempQuat_2.setFromAxisAngle(Ve.tempVec3_2.set(1,0,0),this.pitch),n=Ve.tempQuat.multiplyQuaternions(t,e);this.camera.quaternion.copy(n);const i=vt.PLAYER_HEIGHT/2-.2;if(this.cameraMode==="1PV")this.camera.position.set(this.position.x,this.position.y+i,this.position.z),this.avatar.visible=!1;else{this.avatar.visible=!0,this.head.visible=this.cameraMode==="3PV_FRONT";const s=4,r=Ve.tempVec3.set(0,i+.4,0),o=Ve.tempVec3_2.set(0,0,-1).applyQuaternion(n);this.cameraMode==="3PV_BACK"?this.camera.position.copy(this.position).add(r).sub(o.multiplyScalar(s)):(this.camera.position.copy(this.position).add(r).add(o.multiplyScalar(s)),this.camera.lookAt(this.position.x,this.position.y+i,this.position.z))}}updateHUD(){const t=document.getElementById("pos-display");t&&(t.textContent=`${this.position.x.toFixed(1)}, ${this.position.y.toFixed(1)}, ${this.position.z.toFixed(1)}`)}swing(){this.swingTime<=0&&(this.swingTime=.15)}getYaw(){return this.yaw}getSaveData(){return{x:this.body.position.x,y:this.body.position.y,z:this.body.position.z,hp:this.hp,yaw:this.yaw,pitch:this.pitch,armorType:this.armorType}}loadSaveData(t){if(!t)return;this.hp=typeof t.hp=="number"?t.hp:vt.PLAYER_MAX_HP,this.isDead=this.hp<=0,t.armorType?this.setArmor(t.armorType):this.setArmor("none");const e=document.getElementById("death-screen");e&&(e.style.display=this.isDead?"flex":"none"),this.yaw=typeof t.yaw=="number"?t.yaw:0,this.pitch=typeof t.pitch=="number"?t.pitch:0,this.body.position.set(t.x,t.y,t.z),this.body.velocity.set(0,0,0),this.lastVelocityY=0,this.position.set(t.x,t.y,t.z),this.syncCamera(),this.updateHUD()}}class nv{world;blockBodies=new Map;blockShape;constructor(){this.world=new K0,this.world.gravity.set(0,vt.GRAVITY,0),this.world.broadphase=new Ri(this.world),this.world.solver.iterations=5;const t=new vs("default"),e=new gs(t,t,{friction:.1,restitution:0});this.world.addContactMaterial(e),this.world.defaultContactMaterial=e,this.blockShape=new di(new M(.5,.5,.5));const n=new ct({mass:0,shape:new Pg});n.quaternion.setFromEuler(-Math.PI/2,0,0),n.position.set(0,-50,0),this.world.addBody(n)}updateBlockBodies(t,e){const i=Math.floor(t.x),s=Math.floor(t.y),r=Math.floor(t.z),o=new Set;for(let l=i-3;l<=i+3;l++)for(let c=s-3-1;c<=s+3;c++)for(let h=r-3;h<=r+3;h++){const d=e.getBlock(l,c,h),u=us[d];if(u&&u.isSolid){const m=`${l},${c},${h}`;if(o.add(m),!this.blockBodies.has(m)){const g=new ct({mass:0,shape:this.blockShape,position:new M(l+.5,c+.5,h+.5)});this.world.addBody(g),this.blockBodies.set(m,g)}}}for(const[l,c]of this.blockBodies.entries())o.has(l)||(this.world.removeBody(c),this.blockBodies.delete(l))}step(t){this.world.step(1/60,t,3);const e=document.getElementById("bodies-display");e&&(e.textContent=this.world.bodies.length.toString())}}class iv{overlay;modal;configBtn;keyButtons;invertClicksChk;enableShadowsChk;saveBtn;defaultBtn;closeBtn;tempConfig;activeBindingKey=null;globalKeydownListener=null;constructor(){this.overlay=document.getElementById("menu-overlay"),this.modal=document.getElementById("config-modal"),this.configBtn=document.getElementById("config-btn"),this.keyButtons={forward:document.getElementById("key-forward-btn"),backward:document.getElementById("key-backward-btn"),left:document.getElementById("key-left-btn"),right:document.getElementById("key-right-btn"),jump:document.getElementById("key-jump-btn")},this.invertClicksChk=document.getElementById("invert-clicks-chk"),this.enableShadowsChk=document.getElementById("enable-shadows-chk"),this.saveBtn=document.getElementById("config-save-btn"),this.defaultBtn=document.getElementById("config-default-btn"),this.closeBtn=document.getElementById("config-close-btn"),this.tempConfig={...In.getConfig()},this.initEvents()}initEvents(){this.configBtn.addEventListener("click",()=>{this.openModal()}),this.keyButtons.forward.addEventListener("click",()=>this.startBinding("keyForward",this.keyButtons.forward)),this.keyButtons.backward.addEventListener("click",()=>this.startBinding("keyBackward",this.keyButtons.backward)),this.keyButtons.left.addEventListener("click",()=>this.startBinding("keyLeft",this.keyButtons.left)),this.keyButtons.right.addEventListener("click",()=>this.startBinding("keyRight",this.keyButtons.right)),this.keyButtons.jump.addEventListener("click",()=>this.startBinding("keyJump",this.keyButtons.jump)),this.saveBtn.addEventListener("click",()=>{this.saveConfig()}),this.defaultBtn.addEventListener("click",()=>{this.loadDefaultConfig()}),this.closeBtn.addEventListener("click",()=>{this.closeModal()})}openModal(){this.tempConfig={...In.getConfig()},this.updateUI(),this.modal.style.display="flex"}closeModal(){this.stopBinding(),this.modal.style.display="none"}updateUI(){this.keyButtons.forward.textContent=this.formatKeyName(this.tempConfig.keyForward),this.keyButtons.backward.textContent=this.formatKeyName(this.tempConfig.keyBackward),this.keyButtons.left.textContent=this.formatKeyName(this.tempConfig.keyLeft),this.keyButtons.right.textContent=this.formatKeyName(this.tempConfig.keyRight),this.keyButtons.jump.textContent=this.formatKeyName(this.tempConfig.keyJump),this.invertClicksChk.checked=this.tempConfig.invertClicks,this.enableShadowsChk.checked=this.tempConfig.enableShadows}formatKeyName(t){return t.startsWith("Key")?t.substring(3):t.startsWith("Digit")?t.substring(5):t==="Space"?"Space":t}startBinding(t,e){this.stopBinding(),this.activeBindingKey=t,e.classList.add("waiting"),e.textContent="キーを入力...",this.globalKeydownListener=n=>{n.preventDefault(),n.stopPropagation();const i=n.code;if(i==="Escape"){this.stopBinding(),this.updateUI();return}this.activeBindingKey&&(this.tempConfig[this.activeBindingKey]=i),this.stopBinding(),this.updateUI()},window.addEventListener("keydown",this.globalKeydownListener,!0)}stopBinding(){this.globalKeydownListener&&(window.removeEventListener("keydown",this.globalKeydownListener,!0),this.globalKeydownListener=null),Object.values(this.keyButtons).forEach(t=>{t.classList.remove("waiting")}),this.activeBindingKey=null}saveConfig(){this.tempConfig.invertClicks=this.invertClicksChk.checked,this.tempConfig.enableShadows=this.enableShadowsChk.checked,In.save(this.tempConfig),this.closeModal(),this.updateInstructionsUI(),window.dispatchEvent(new CustomEvent("config-changed"))}loadDefaultConfig(){const t={keyForward:"KeyW",keyBackward:"KeyS",keyLeft:"KeyA",keyRight:"KeyD",keyJump:"Space",invertClicks:!1,enableShadows:!0};this.tempConfig={...t},this.updateUI()}updateInstructionsUI(){const t=In.getConfig(),e=this.overlay.querySelectorAll(".key-badge");e.length>=5&&(e[0].textContent=this.formatKeyName(t.keyForward),e[1].textContent=this.formatKeyName(t.keyLeft),e[2].textContent=this.formatKeyName(t.keyBackward),e[3].textContent=this.formatKeyName(t.keyRight),e[4].textContent=this.formatKeyName(t.keyJump)),this.overlay.querySelectorAll(".instruction-row").forEach(i=>{const s=i.querySelector("span:first-child")?.textContent,r=i.querySelector("span:last-child");r&&(s==="ブロックを削る / 壊す"?r.textContent=t.invertClicks?"右クリック":"左クリック":s==="ブロックを設置"&&(r.textContent=t.invertClicks?"左クリック":"右クリック"))})}}class sv{time=0;timeScale=.01;sunLight;ambientLight;scene;skyColor=new kt;sunColor=new kt;ambientColor=new kt;constructor(t){this.scene=t,this.scene.background=this.skyColor;const e=In.getConfig();this.sunLight=new ym(16777215,1.2),this.sunLight.castShadow=e.enableShadows,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=80;const n=30;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.ambientLight=new Mm(16777215,.4),this.scene.add(this.ambientLight)}update(t,e){const n=this.time*Math.PI*2,i=Math.sin(n);let s=1;i>-.1?s=.35:s=2.5,this.time=(this.time+this.timeScale*s*t)%1;const r=this.time*Math.PI*2,o=Math.sin(r),l=Math.cos(r);this.sunLight.position.set(e.x+l*40,e.y+o*40,e.z+l*20),this.sunLight.target.position.copy(e),this.sunLight.target.updateMatrixWorld();const c=Math.max(0,Math.min(1,o*2+.5)),h=Ye.lerp(.02,.45,c),d=Ye.lerp(.03,.65,c),u=Ye.lerp(.08,.95,c);this.skyColor.setRGB(h,d,u);const m=Ye.lerp(0,1.2,c);this.sunLight.intensity=m;const g=Ye.lerp(.1,1,c),p=Ye.lerp(.1,.95,c),f=Ye.lerp(.2,.85,c);this.sunColor.setRGB(g,p,f),this.sunLight.color.copy(this.sunColor);const v=Ye.lerp(.22,.45,c);this.ambientLight.intensity=v;const _=Ye.lerp(.15,1,c),x=Ye.lerp(.18,1,c),y=Ye.lerp(.35,1,c);this.ambientColor.setRGB(_,x,y),this.ambientLight.color.copy(this.ambientColor)}setShadowsEnabled(t){this.sunLight.castShadow=t}isNight(){const t=this.time*Math.PI*2;return Math.sin(t)<-.1}}const rv={[q.GROUND]:4906624,[q.DIRT]:8736014,[q.STONE]:10265519,[q.WOOD]:7877903,[q.LEAVES]:2278750,[q.PLANK]:16096779,[q.BRICK]:15680580,[q.SAND]:16707722,[q.COAL_ORE]:3621201,[q.TORCH]:16347926,[q.GLASS]:14742270,[q.DOOR_CLOSED]:11817737,[q.SWORD]:13421772};class ii{blockType;mesh;body;scene;physicsWorld;age=0;isAttracted=!1;static sharedGeometry=new Kt(.2,.2,.2);static materialPool=new Map;static tempVec3=new G;static tempVec3_2=new G;constructor(t,e,n,i){this.blockType=t,this.scene=n,this.physicsWorld=i;let s=ii.materialPool.get(t);if(!s){const o=rv[t]||16777215;s=new _e({color:o,roughness:.8,metalness:.1}),ii.materialPool.set(t,s)}this.mesh=new Pt(ii.sharedGeometry,s),this.mesh.position.copy(e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh);const r=new di(new M(.1,.1,.1));this.body=new ct({mass:1,shape:r,position:new M(e.x,e.y,e.z)}),this.body.velocity.set((Math.random()-.5)*4,Math.random()*4+2,(Math.random()-.5)*4),this.physicsWorld.addBody(this.body)}update(t,e){if(this.age+=t,this.age>vt.ITEM_DESPAWN_TIME)return this.destroy(),!0;const n=ii.tempVec3.set(this.body.position.x,this.body.position.y,this.body.position.z),i=n.distanceTo(e);if(i<vt.ITEM_PICKUP_RADIUS){this.isAttracted=!0,this.body.world&&this.physicsWorld.removeBody(this.body);const s=ii.tempVec3_2.copy(e).sub(n).normalize();if(n.add(s.multiplyScalar(22*t)),this.mesh.position.copy(n),i<.5)return this.destroy(),!0}else this.isAttracted?(this.isAttracted=!1,this.body.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z),this.body.velocity.set(0,0,0),this.physicsWorld.addBody(this.body)):(this.mesh.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.mesh.rotation.x+=t*2,this.mesh.rotation.y+=t*1.5);return!1}destroy(){this.mesh&&this.scene.remove(this.mesh),this.body.world&&this.physicsWorld.removeBody(this.body)}}class ve{mesh;body;hp=4;scene;physicsWorld;head;leftLeg;rightLeg;speed=3;jumpForce=6;attackCooldown=0;damageFlashTime=0;static sharedHeadGeo=new Kt(.4,.4,.4);static sharedBodyGeo=new Kt(.4,.6,.2);static sharedLimbGeo=new Kt(.2,.6,.2);static zombieGreenMat=new _e({color:5614165,roughness:.9});static zombieBlueMat=new _e({color:3362408,roughness:.9});static zombiePurpleMat=new _e({color:4729947,roughness:.9});static damageMat=new _e({color:16724787,roughness:.5});static tempVec3=new G;static tempDirection=new G;constructor(t,e,n){this.scene=e,this.physicsWorld=n;const i=.35,s=.9,r=new di(new M(i,s,i));this.body=new ct({mass:50,shape:r,position:new M(t.x,t.y+s,t.z),fixedRotation:!0,linearDamping:.1}),this.physicsWorld.addBody(this.body),this.mesh=new Ee,this.buildAvatar(),this.scene.add(this.mesh)}buildAvatar(){const t=ve.zombieGreenMat,e=ve.zombieBlueMat,n=ve.zombieGreenMat,i=ve.zombiePurpleMat;this.head=new Pt(ve.sharedHeadGeo,t),this.head.position.y=.5,this.head.castShadow=!0,this.head.receiveShadow=!0,this.mesh.add(this.head);const s=new Pt(ve.sharedBodyGeo,e);s.position.y=0,s.castShadow=!0,s.receiveShadow=!0,this.mesh.add(s);const r=ve.sharedLimbGeo.clone();r.translate(0,-.3,0);const o=new Ee,l=new Pt(r,n);l.castShadow=!0,l.receiveShadow=!0,o.add(l),o.position.set(.3,.3,0),o.rotation.x=-Math.PI/2,this.mesh.add(o);const c=new Ee,h=new Pt(r,n);h.castShadow=!0,h.receiveShadow=!0,c.add(h),c.position.set(-.3,.3,0),c.rotation.x=-Math.PI/2,this.mesh.add(c),this.leftLeg=new Ee;const d=new Pt(r,i);d.castShadow=!0,d.receiveShadow=!0,this.leftLeg.add(d),this.leftLeg.position.set(.1,-.3,0),this.mesh.add(this.leftLeg),this.rightLeg=new Ee;const u=new Pt(r,i);u.castShadow=!0,u.receiveShadow=!0,this.rightLeg.add(u),this.rightLeg.position.set(-.1,-.3,0),this.mesh.add(this.rightLeg)}update(t,e){const n=e.position,s=ve.tempVec3.set(this.body.position.x,this.body.position.y,this.body.position.z).distanceTo(n);if(s>vt.MOB_DESPAWN_RADIUS)return this.destroy(),!0;if(this.damageFlashTime>0&&(this.damageFlashTime-=t,this.damageFlashTime<=0&&this.setMaterials(!1)),e.hp>0?this.runAI(t,n,s,e):(this.body.velocity.x*=.8,this.body.velocity.z*=.8),this.mesh.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z>.1){const o=performance.now()*.01,l=Math.sin(o)*.8;this.leftLeg.rotation.x=-l,this.rightLeg.rotation.x=l}else this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0;return!1}runAI(t,e,n,i){const s=ve.tempDirection.set(e.x-this.body.position.x,0,e.z-this.body.position.z);s.normalize();const r=Math.atan2(s.x,s.z);if(this.mesh.rotation.y=r,n<vt.MOB_SPAWN_RADIUS){this.body.velocity.x=s.x*this.speed,this.body.velocity.z=s.z*this.speed;const o=this.body.velocity.x*this.body.velocity.x+this.body.velocity.z*this.body.velocity.z,l=this.speed*this.speed,c=o<l*.25,h=Math.abs(this.body.velocity.y)<.02;c&&h&&(this.body.velocity.y=this.jumpForce)}else this.body.velocity.x*=.8,this.body.velocity.z*=.8;this.attackCooldown>0&&(this.attackCooldown-=t),n<1.3&&this.attackCooldown<=0&&(i.takeDamage(2),this.attackCooldown=1.2)}takeDamage(t,e){return this.hp-=t,this.damageFlashTime=.2,this.setMaterials(!0),tn.playHit(),this.body.velocity.y=4,this.body.velocity.x=e.x*6,this.body.velocity.z=e.z*6,this.hp<=0?(this.destroy(),!0):!1}setMaterials(t){this.mesh.traverse(e=>{e instanceof Pt&&(t?e.material=ve.damageMat:e===this.head||e.parent===this.head?e.material=ve.zombieGreenMat:e.name==="hair"?e.material=new _e({color:5913896,roughness:.9}):e.position.y===0?e.material=ve.zombieBlueMat:e.position.y===-.3||e.parent?.position.y===-.3?e.material=ve.zombiePurpleMat:e.material=ve.zombieGreenMat)})}destroy(){this.mesh&&this.scene.remove(this.mesh),this.body.world&&this.physicsWorld.removeBody(this.body)}}const Xe=new Sm("canvas-container"),as=new nv,en=new Lm(document.body),Ot=new Ve(Xe.camera,new G(8,5,8),as.world,Xe.scene),Qr=new sv(Xe.scene),Rn=[],We=[],rn={[q.AIR]:0,[q.GROUND]:64,[q.DIRT]:64,[q.STONE]:64,[q.WOOD]:64,[q.LEAVES]:64,[q.PLANK]:64,[q.BRICK]:64,[q.SAND]:64,[q.COAL_ORE]:64,[q.TORCH]:64,[q.GLASS]:64,[q.DOOR_CLOSED]:64,[q.DOOR_OPEN]:0,[q.SWORD]:1},ov=new iv;ov.updateInstructionsUI();const el=document.getElementById("respawn-btn");el&&el.addEventListener("click",()=>{Ot.respawn(),en.requestLock(),tn.init(),Ys||(Ys=!0,requestAnimationFrame(mo))});let Fe=q.GROUND,Hn=0;const vn=[[q.GROUND,q.DIRT,q.STONE,q.WOOD,q.LEAVES,q.PLANK,q.BRICK,q.SAND,q.TORCH],[q.GLASS,q.DOOR_CLOSED,q.COAL_ORE,q.SWORD,q.GROUND,q.DIRT,q.STONE,q.WOOD,q.TORCH]];let _n=0,on=vn[_n];const jl=document.querySelectorAll(".hotbar-slot"),nl=document.getElementById("hotbar-label");function po(a){switch(a){case q.GROUND:return"slot-grass";case q.DIRT:return"slot-dirt";case q.STONE:return"slot-stone";case q.WOOD:return"slot-wood";case q.LEAVES:return"slot-leaves";case q.PLANK:return"slot-plank";case q.BRICK:return"slot-brick";case q.SAND:return"slot-sand";case q.TORCH:return"slot-torch";case q.GLASS:return"slot-glass";case q.DOOR_CLOSED:return"slot-door";case q.COAL_ORE:return"slot-coal";default:return""}}function Vn(){jl.forEach((a,t)=>{const e=on[t];a.setAttribute("data-block",e.toString());const n=a.querySelector(".slot-icon");if(n){n.className="slot-icon";const s=po(e);s&&n.classList.add(s)}const i=document.getElementById(`count-${t}`);i&&(i.textContent=(rn[e]||0).toString())}),js(Hn)}Vn();function js(a){a<0||a>=on.length||(Hn=a,Fe=on[a],jl.forEach((t,e)=>{e===a?t.classList.add("active"):t.classList.remove("active")}),nl&&(nl.textContent=us[Fe].name))}const he=new Cm(Xe.scene),av=fv();av?he.clearAndRebuild(Ot.position.x,Ot.position.z):he.generateWorldAround(Ot.position.x,Ot.position.z);const kr=new wm,il=6;function lv(){const a=document.getElementById("hp-container");if(a){const t=vt.PLAYER_MAX_HP,e=Ot.hp;let n="";for(let i=1;i<=t;i++)n+=i<=e?"❤":"🖤";a.textContent=n}}function to(a,t){if(Rn.length>=vt.MAX_DROPPED_ITEMS){const n=Rn.shift();n&&n.destroy()}const e=new ii(a,t,Xe.scene,as.world);Rn.push(e)}const Qi=new G,Vs=new G;let Ur=0,Gr=0,sl=0;function mo(a){requestAnimationFrame(mo);const t=Math.min((a-sl)/1e3,.1);if(sl=a,as.updateBlockBodies(Ot.position,he),as.step(t),Ot.update(en,t,he,Fe),Qr.update(t,Ot.position),en.consumeJustPressed("Tab")&&(_n=1-_n,on=vn[_n],Vn()),en.consumeJustPressed("KeyE")&&(mn&&mn.style.display==="flex"?Kl():uv()),en.consumeJustPressed("KeyQ")&&rn[Fe]>0){rn[Fe]--,Vn();const e=vt.PLAYER_HEIGHT/2-.2;Vs.copy(Ot.position),Vs.y+=e,Qi.set(0,0,-1).applyQuaternion(Xe.camera.quaternion),Vs.addScaledVector(Qi,.8),to(Fe,Vs);const n=Rn[Rn.length-1];n&&n.body.velocity.set(Qi.x*6+(Math.random()-.5)*.5,Qi.y*6+2,Qi.z*6+(Math.random()-.5)*.5)}for(let e=Rn.length-1;e>=0;e--){const n=Rn[e],i=n.update(t,Ot.position);n.mesh.position.distanceTo(Ot.position)<1.2?(rn[n.blockType]=(rn[n.blockType]||0)+1,Vn(),tn.playPickup(),n.destroy(),Rn.splice(e,1)):i&&Rn.splice(e,1)}if(Qr.isNight()){if(Ur+=t,Ur>2&&(Ur=0,We.length<vt.MAX_MOBS)){const e=vt.MOB_SPAWN_RADIUS,n=Math.random()*Math.PI*2,i=12+Math.random()*(e-12),s=Math.floor(Ot.position.x+Math.cos(n)*i),r=Math.floor(Ot.position.z+Math.sin(n)*i);let o=0,l=!1;for(let c=15;c>=-10;c--)if(he.getBlock(s,c,r)!==q.AIR){o=c+1,l=!0;break}if(l){const c=new ve(new G(s,o,r),Xe.scene,as.world);We.push(c)}}}else for(let e=We.length-1;e>=0;e--)We[e].destroy(),We.splice(e,1);for(let e=We.length-1;e>=0;e--)We[e].update(t,Ot)&&We.splice(e,1);lv(),en.isLocked&&he.generateWorldAround(Ot.position.x,Ot.position.z),Gr+=t,Gr>5&&(Gr=0,go()),Xe.render()}window.addEventListener("mousedown",a=>{if(!en.isLocked)return;kr.setFromCamera(new Gt(0,0),Xe.camera);const t=he.getChunkMeshes(),e=kr.intersectObjects(t);if(e.length>0){const n=e[0];if(n.distance>il)return;const i=n.point,s=n.face?.normal;if(!s)return;const r=In.getConfig(),o=a.button===0,l=a.button===2,c=r.invertClicks?l:o,h=r.invertClicks?o:l;if(c){Ot.swing(),tn.playSwing();const d=[];We.forEach(_=>{_.mesh.traverse(x=>{x instanceof Pt&&d.push(x)})});const u=kr.intersectObjects(d);if(u.length>0&&u[0].distance<il){const _=u[0].object;let x=null;for(const y of We){let b=!1;if(y.mesh.traverse(A=>{A===_&&(b=!0)}),b){x=y;break}}if(x){const y=new G(0,0,-1).applyQuaternion(Xe.camera.quaternion);y.y=.2,y.normalize();const b=Fe===q.SWORD?4:2;if(x.takeDamage(b,y)){const L=Math.random()<.4?q.COAL_ORE:q.STONE;to(L,new G(x.body.position.x,x.body.position.y,x.body.position.z));const w=We.indexOf(x);w>-1&&We.splice(w,1)}return}}const m=i.clone().sub(s.clone().multiplyScalar(.1)),g=Math.floor(m.x),p=Math.floor(m.y),f=Math.floor(m.z),v=he.getBlock(g,p,f);v!==q.AIR&&(he.setBlock(g,p,f,q.AIR),tn.playBreak(v),to(v,new G(g+.5,p+.5,f+.5)))}else if(h){if(Fe===q.SWORD)return;const d=i.clone().sub(s.clone().multiplyScalar(.1)),u=Math.floor(d.x),m=Math.floor(d.y),g=Math.floor(d.z),p=he.getBlock(u,m,g);if(p===q.DOOR_CLOSED){he.setBlock(u,m,g,q.DOOR_OPEN),tn.playPlace(q.DOOR_OPEN);return}else if(p===q.DOOR_OPEN){he.setBlock(u,m,g,q.DOOR_CLOSED),tn.playPlace(q.DOOR_CLOSED);return}if(rn[Fe]<=0)return;const f=i.clone().add(s.clone().multiplyScalar(.1)),v=Math.floor(f.x),_=Math.floor(f.y),x=Math.floor(f.z),y=Ot.position.x-vt.PLAYER_RADIUS,b=Ot.position.x+vt.PLAYER_RADIUS,A=Ot.position.y-vt.PLAYER_HEIGHT/2,L=Ot.position.y+vt.PLAYER_HEIGHT/2,w=Ot.position.z-vt.PLAYER_RADIUS,E=Ot.position.z+vt.PLAYER_RADIUS,P=v,B=v+1,W=_,R=_+1,D=x,z=x+1,I=y<B&&b>P&&A<R&&L>W&&w<z&&E>D,H=Fe===q.TORCH;(!I||H)&&(he.setBlock(v,_,x,Fe),tn.playPlace(Fe),rn[Fe]--,Vn())}}});window.addEventListener("contextmenu",a=>{a.preventDefault()});const rl=document.getElementById("start-btn"),cv=document.getElementById("menu-overlay");let Ys=!1;if(rl&&cv){rl.addEventListener("click",()=>{en.requestLock(),tn.init(),Ys||(Ys=!0,requestAnimationFrame(mo))});const a=document.getElementById("hotbar"),t=document.getElementById("hud");document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===document.body?(a&&(a.style.display="flex"),t&&(t.style.display="block"),mn&&(mn.style.display="none")):mn&&mn.style.display==="flex"||(a&&(a.style.display="none"),t&&(t.style.display="none"))})}window.addEventListener("keydown",a=>{if(en.isLocked&&a.code.startsWith("Digit")){const t=parseInt(a.code.substring(5));t>=1&&t<=9&&js(t-1)}});window.addEventListener("wheel",a=>{if(en.isLocked){if(a.deltaY>0){const t=(Hn+1)%on.length;js(t)}else if(a.deltaY<0){const t=(Hn-1+on.length)%on.length;js(t)}}},{passive:!0});window.addEventListener("config-changed",()=>{const a=In.getConfig();Xe.renderer.shadowMap.enabled=a.enableShadows,Qr.setShadowsEnabled(a.enableShadows),Xe.scene.traverse(t=>{t instanceof Pt&&t.material&&(Array.isArray(t.material)?t.material.forEach(e=>{e.needsUpdate=!0}):t.material.needsUpdate=!0)})});const mn=document.getElementById("inventory-modal"),Vr=document.getElementById("inventory-item-list"),Wr=document.getElementById("inventory-hotbar-slots"),ol=document.getElementById("inventory-close-btn");let ds=null;const hv=[q.GROUND,q.DIRT,q.STONE,q.WOOD,q.LEAVES,q.PLANK,q.BRICK,q.SAND,q.COAL_ORE,q.TORCH,q.GLASS,q.DOOR_CLOSED,q.SWORD];function Yl(){const a=Ot.armorType;document.querySelectorAll(".armor-btn").forEach(e=>{e.getAttribute("data-armor")===a?e.classList.add("active"):e.classList.remove("active")})}function uv(){mn&&(document.exitPointerLock(),mn.style.display="flex",ds=null,Zl(),$l(),Yl())}function Kl(){mn&&(mn.style.display="none",en.requestLock())}ol&&ol.addEventListener("click",Kl);const dv=document.querySelectorAll(".armor-btn");dv.forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-armor");t&&(Ot.setArmor(t),Yl())})});function Zl(){Vr&&(Vr.innerHTML="",hv.forEach(a=>{const t=us[a],e=document.createElement("div");e.className="inventory-item",ds===a&&e.classList.add("selected");const n=document.createElement("div");n.className=`slot-icon ${po(a)}`,e.appendChild(n);const i=document.createElement("div");i.className="item-name",i.textContent=t.name,e.appendChild(i),e.addEventListener("click",()=>{ds=a,Zl()}),Vr.appendChild(e)}))}function $l(){Wr&&(Wr.innerHTML="",on.forEach((a,t)=>{const e=document.createElement("div");e.className="inventory-hotbar-slot",e.setAttribute("data-index",t.toString());const n=document.createElement("div");n.className=`slot-icon ${po(a)}`,e.appendChild(n);const i=document.createElement("div");i.className="slot-num",i.textContent=(t+1).toString(),e.appendChild(i),e.addEventListener("click",()=>{ds!==null&&(on[t]=ds,Vn(),$l())}),Wr.appendChild(e)}))}function fv(){const a=localStorage.getItem("maikurafu_autosave");if(!a)return!1;try{const t=JSON.parse(a);if(t.player&&Ot.loadSaveData(t.player),t.inventory){const e=t.inventory;e.blocks&&Object.assign(rn,e.blocks),e.hotbarPages&&(vn[0]=[...e.hotbarPages[0]],vn[1]=[...e.hotbarPages[1]]),typeof e.activePage=="number"&&(_n=e.activePage,on=vn[_n]),typeof e.activeSlotIndex=="number"&&(Hn=e.activeSlotIndex),Vn()}return t.world&&he.setModifiedBlocksData(t.world),console.log("Game auto-saved state successfully loaded from localStorage."),!0}catch(t){return console.warn("Failed to parse autosave data:",t),!1}}function go(){const a={version:"1.0.0",timestamp:Date.now(),player:Ot.getSaveData(),inventory:{blocks:rn,hotbarPages:vn,activePage:_n,activeSlotIndex:Hn},world:he.getModifiedBlocksData()};localStorage.setItem("maikurafu_autosave",JSON.stringify(a)),console.log("Game auto-saved to localStorage.")}function pv(){go();const a={version:"1.0.0",timestamp:Date.now(),player:Ot.getSaveData(),inventory:{blocks:rn,hotbarPages:vn,activePage:_n,activeSlotIndex:Hn},world:he.getModifiedBlocksData()},t=JSON.stringify(a,null,2),e=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=`maikurafu_save_${new Date().toISOString().slice(0,10)}.json`,i.click(),URL.revokeObjectURL(n)}function mv(a){try{const t=JSON.parse(a);if(t.player&&Ot.loadSaveData(t.player),t.inventory){const e=t.inventory;e.blocks&&Object.assign(rn,e.blocks),e.hotbarPages&&(vn[0]=[...e.hotbarPages[0]],vn[1]=[...e.hotbarPages[1]]),typeof e.activePage=="number"&&(_n=e.activePage,on=vn[_n]),typeof e.activeSlotIndex=="number"&&(Hn=e.activeSlotIndex),Vn()}t.world&&(he.setModifiedBlocksData(t.world),he.clearAndRebuild(Ot.position.x,Ot.position.z)),go(),alert("セーブデータを正常にロードしました！")}catch(t){console.error("Failed to load save data:",t),alert("セーブデータのロードに失敗しました。正しいJSONファイルか確認してください。")}}const al=document.getElementById("save-json-btn"),ll=document.getElementById("load-json-btn"),ts=document.getElementById("load-file-input");al&&al.addEventListener("click",()=>{pv()});ll&&ts&&(ll.addEventListener("click",()=>{ts.click()}),ts.addEventListener("change",()=>{const a=ts.files?.[0];if(!a)return;const t=new FileReader;t.onload=e=>{const n=e.target?.result;n&&mv(n),ts.value=""},t.readAsText(a)}));

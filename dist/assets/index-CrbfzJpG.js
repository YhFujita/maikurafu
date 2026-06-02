(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wr="150",cl=0,Nr=1,hl=2,Ma=1,wa=2,Ri=3,Sn=0,Ae=1,yn=2,wn=0,ci=1,Fr=2,Br=3,Ur=4,ul=5,oi=100,dl=101,fl=102,Or=103,kr=104,pl=200,ml=201,gl=202,_l=203,ba=204,Sa=205,xl=206,vl=207,yl=208,Ml=209,wl=210,bl=0,Sl=1,El=2,fr=3,Tl=4,Al=5,Cl=6,Ll=7,Ea=0,Rl=1,Pl=2,pn=0,Dl=1,Il=2,zl=3,Nl=4,Fl=5,Ta=300,di=301,fi=302,pr=303,mr=304,ys=306,gr=1e3,Te=1001,_r=1002,oe=1003,Gr=1004,Cs=1005,Pe=1006,Bl=1007,Ii=1008,Gn=1009,Ul=1010,Ol=1011,Aa=1012,kl=1013,Bn=1014,Un=1015,zi=1016,Gl=1017,Vl=1018,hi=1020,Wl=1021,ke=1023,Hl=1024,ql=1025,On=1026,pi=1027,Xl=1028,jl=1029,Yl=1030,Zl=1031,$l=1033,Ls=33776,Rs=33777,Ps=33778,Ds=33779,Vr=35840,Wr=35841,Hr=35842,qr=35843,Kl=36196,Xr=37492,jr=37496,Yr=37808,Zr=37809,$r=37810,Kr=37811,Jr=37812,Qr=37813,to=37814,eo=37815,no=37816,io=37817,so=37818,ro=37819,oo=37820,ao=37821,Is=36492,Jl=36283,lo=36284,co=36285,ho=36286,Vn=3e3,Gt=3001,Ql=3200,tc=3201,Ca=0,ec=1,$e="srgb",Ni="srgb-linear",La="display-p3",zs=7680,nc=519,uo=35044,fo="300 es",xr=1035;class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ns=Math.PI/180,po=180/Math.PI;function Fi(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ae[c&255]+ae[c>>8&255]+ae[c>>16&255]+ae[c>>24&255]+"-"+ae[t&255]+ae[t>>8&255]+"-"+ae[t>>16&15|64]+ae[t>>24&255]+"-"+ae[e&63|128]+ae[e>>8&255]+"-"+ae[e>>16&255]+ae[e>>24&255]+ae[n&255]+ae[n>>8&255]+ae[n>>16&255]+ae[n>>24&255]).toLowerCase()}function Ee(c,t,e){return Math.max(t,Math.min(e,c))}function ic(c,t){return(c%t+t)%t}function Fs(c,t,e){return(1-e)*c+e*t}function mo(c){return(c&c-1)===0&&c!==0}function sc(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function Hi(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function we(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,o,a,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=a,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],a=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],p=i[0],f=i[3],x=i[6],_=i[1],y=i[4],M=i[7],S=i[2],C=i[5],P=i[8];return s[0]=r*p+o*_+a*S,s[3]=r*f+o*y+a*C,s[6]=r*x+o*M+a*P,s[1]=l*p+h*_+d*S,s[4]=l*f+h*y+d*C,s[7]=l*x+h*M+d*P,s[2]=u*p+m*_+g*S,s[5]=u*f+m*y+g*C,s[8]=u*x+m*M+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],l=t[7],h=t[8];return e*r*h-e*o*l-n*s*h+n*o*a+i*s*l-i*r*a}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],l=t[7],h=t[8],d=h*r-o*l,u=o*a-h*s,m=l*s-r*a,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=d*p,t[1]=(i*l-h*n)*p,t[2]=(o*n-i*r)*p,t[3]=u*p,t[4]=(h*e-i*a)*p,t[5]=(i*s-o*e)*p,t[6]=m*p,t[7]=(n*a-l*e)*p,t[8]=(r*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*r+l*o)+r+t,-i*l,i*a,-i*(-l*r+a*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Bs.makeScale(t,e)),this}rotate(t){return this.premultiply(Bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bs.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new ge;function Ra(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function _s(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}let bn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let a=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],m=s[r+1],g=s[r+2],p=s[r+3];if(o===0){t[e+0]=a,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(d!==p||a!==u||l!==m||h!==g){let f=1-o;const x=a*u+l*m+h*g+d*p,_=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){const S=Math.sqrt(y),C=Math.atan2(S,x*_);f=Math.sin(f*C)/S,o=Math.sin(o*C)/S}const M=o*_;if(a=a*f+u*M,l=l*f+m*M,h=h*f+g*M,d=d*f+p*M,f===1-o){const S=1/Math.sqrt(a*a+l*l+h*h+d*d);a*=S,l*=S,h*=S,d*=S}}t[e]=a,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],a=n[i+1],l=n[i+2],h=n[i+3],d=s[r],u=s[r+1],m=s[r+2],g=s[r+3];return t[e]=o*g+h*d+a*m-l*u,t[e+1]=a*g+h*u+l*d-o*m,t[e+2]=l*g+h*m+o*u-a*d,t[e+3]=h*g-o*d-a*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,a=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),u=a(n/2),m=a(i/2),g=a(s/2);switch(r){case"XYZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"YZX":this._x=u*h*d+l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d-u*m*g;break;case"XZY":this._x=u*h*d-l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-a)*m,this._y=(s-l)*m,this._z=(r-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-a)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-l)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(a+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(r-i)/m,this._x=(s+l)/m,this._y=(a+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,a=e._y,l=e._z,h=e._w;return this._x=n*h+r*o+i*l-s*a,this._y=i*h+r*a+s*o-n*l,this._z=s*h+r*l+n*a-i*o,this._w=r*h-n*o-i*a-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const a=1-o*o;if(a<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(a),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(go.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(go.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,a=t.w,l=a*e+r*i-o*n,h=a*n+o*e-s*i,d=a*i+s*n-r*e,u=-s*e-r*n-o*i;return this.x=l*a+u*-s+h*-o-d*-r,this.y=h*a+u*-r+d*-s-l*-o,this.z=d*a+u*-o+l*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,a=e.z;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Us.copy(this).projectOnVector(t),this.sub(Us)}reflect(t){return this.sub(Us.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new G,go=new bn;function ui(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function Os(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const rc=new ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),oc=new ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Mn=new G;function ac(c){return c.convertSRGBToLinear(),Mn.set(c.r,c.g,c.b).applyMatrix3(oc),c.setRGB(Mn.x,Mn.y,Mn.z)}function lc(c){return Mn.set(c.r,c.g,c.b).applyMatrix3(rc),c.setRGB(Mn.x,Mn.y,Mn.z).convertLinearToSRGB()}const cc={[Ni]:c=>c,[$e]:c=>c.convertSRGBToLinear(),[La]:ac},hc={[Ni]:c=>c,[$e]:c=>c.convertLinearToSRGB(),[La]:lc},pe={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(c){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!c},get workingColorSpace(){return Ni},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,t,e){if(this.enabled===!1||t===e||!t||!e)return c;const n=cc[t],i=hc[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(c))},fromWorkingColorSpace:function(c,t){return this.convert(c,this.workingColorSpace,t)},toWorkingColorSpace:function(c,t){return this.convert(c,t,this.workingColorSpace)}};let qn;class Pa{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qn===void 0&&(qn=_s("canvas")),qn.width=t.width,qn.height=t.height;const n=qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_s("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ui(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Da{constructor(t=null){this.isSource=!0,this.uuid=Fi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(ks(i[r].image)):s.push(ks(i[r]))}else s=ks(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ks(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?Pa.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uc=0;class ve extends gi{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=Te,i=Te,s=Pe,r=Ii,o=ke,a=Gn,l=ve.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=Fi(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ta)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case Te:t.x=t.x<0?0:1;break;case _r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case Te:t.y=t.y<0?0:1;break;case _r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=Ta;ve.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,i=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const a=t.elements,l=a[0],h=a[4],d=a[8],u=a[1],m=a[5],g=a[9],p=a[2],f=a[6],x=a[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,M=(m+1)/2,S=(x+1)/2,C=(h+u)/4,P=(d+p)/4,w=(g+f)/4;return y>M&&y>S?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=C/n,s=P/n):M>S?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=C/i,s=w/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=P/s,i=w/s),this.set(n,i,s,e),this}let _=Math.sqrt((f-g)*(f-g)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(f-g)/_,this.y=(d-p)/_,this.z=(u-h)/_,this.w=Math.acos((l+m+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wn extends gi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ia extends ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=oe,this.minFilter=oe,this.wrapR=Te,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dc extends ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=oe,this.minFilter=oe,this.wrapR=Te,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,l=t.length;a<l;a+=3){const h=t[a],d=t[a+1],u=t[a+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,l=t.count;a<l;a++){const h=t.getX(a),d=t.getY(a),u=t.getZ(a);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)Ln.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Ln)}else n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox),Gs.applyMatrix4(t.matrixWorld),this.union(Gs);const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vi),qi.subVectors(this.max,vi),Xn.subVectors(t.a,vi),jn.subVectors(t.b,vi),Yn.subVectors(t.c,vi),mn.subVectors(jn,Xn),gn.subVectors(Yn,jn),Rn.subVectors(Xn,Yn);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Rn.z,Rn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Rn.z,0,-Rn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Rn.y,Rn.x,0];return!Vs(e,Xn,jn,Yn,qi)||(e=[1,0,0,0,1,0,0,0,1],!Vs(e,Xn,jn,Yn,qi))?!1:(Xi.crossVectors(mn,gn),e=[Xi.x,Xi.y,Xi.z],Vs(e,Xn,jn,Yn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const en=[new G,new G,new G,new G,new G,new G,new G,new G],Ln=new G,Gs=new Bi,Xn=new G,jn=new G,Yn=new G,mn=new G,gn=new G,Rn=new G,vi=new G,qi=new G,Xi=new G,Pn=new G;function Vs(c,t,e,n,i){for(let s=0,r=c.length-3;s<=r;s+=3){Pn.fromArray(c,s);const o=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),a=t.dot(Pn),l=e.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(a,l,h),Math.min(a,l,h))>o)return!1}return!0}const fc=new Bi,yi=new G,Ws=new G;class br{constructor(t=new G,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fc.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const e=yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(yi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ws.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(Ws)),this.expandByPoint(yi.copy(t.center).sub(Ws))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new G,Hs=new G,ji=new G,_n=new G,qs=new G,Yi=new G,Xs=new G;let za=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Hs.copy(t).add(e).multiplyScalar(.5),ji.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(Hs);const s=t.distanceTo(e)*.5,r=-this.direction.dot(ji),o=_n.dot(this.direction),a=-_n.dot(ji),l=_n.lengthSq(),h=Math.abs(1-r*r);let d,u,m,g;if(h>0)if(d=r*a-o,u=r*o-a,g=s*h,d>=0)if(u>=-g)if(u<=g){const p=1/h;d*=p,u*=p,m=d*(d+r*u+2*o)+u*(r*d+u+2*a)+l}else u=s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*a)+l;else u=-s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*a)+l;else u<=-g?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-a),s),m=-d*d+u*(u+2*a)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-a),s),m=u*(u+2*a)+l):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-a),s),m=-d*d+u*(u+2*a)+l);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*a)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Hs).addScaledVector(ji,u),m}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,a=n+r;return a<0?null:o<0?this.at(a,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,a;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(o=(t.min.z-u.z)*d,a=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,a=(t.min.z-u.z)*d),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,i,s){qs.subVectors(e,t),Yi.subVectors(n,t),Xs.crossVectors(qs,Yi);let r=this.direction.dot(Xs),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;_n.subVectors(this.origin,t);const a=o*this.direction.dot(Yi.crossVectors(_n,Yi));if(a<0)return null;const l=o*this.direction.dot(qs.cross(_n));if(l<0||a+l>r)return null;const h=-o*_n.dot(Xs);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Jt{constructor(){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,o,a,l,h,d,u,m,g,p,f){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=r,x[9]=o,x[13]=a,x[2]=l,x[6]=h,x[10]=d,x[14]=u,x[3]=m,x[7]=g,x[11]=p,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Zn.setFromMatrixColumn(t,0).length(),s=1/Zn.setFromMatrixColumn(t,1).length(),r=1/Zn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*h,m=r*d,g=o*h,p=o*d;e[0]=a*h,e[4]=-a*d,e[8]=l,e[1]=m+g*l,e[5]=u-p*l,e[9]=-o*a,e[2]=p-u*l,e[6]=g+m*l,e[10]=r*a}else if(t.order==="YXZ"){const u=a*h,m=a*d,g=l*h,p=l*d;e[0]=u+p*o,e[4]=g*o-m,e[8]=r*l,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=m*o-g,e[6]=p+u*o,e[10]=r*a}else if(t.order==="ZXY"){const u=a*h,m=a*d,g=l*h,p=l*d;e[0]=u-p*o,e[4]=-r*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*h,e[9]=p-u*o,e[2]=-r*l,e[6]=o,e[10]=r*a}else if(t.order==="ZYX"){const u=r*h,m=r*d,g=o*h,p=o*d;e[0]=a*h,e[4]=g*l-m,e[8]=u*l+p,e[1]=a*d,e[5]=p*l+u,e[9]=m*l-g,e[2]=-l,e[6]=o*a,e[10]=r*a}else if(t.order==="YZX"){const u=r*a,m=r*l,g=o*a,p=o*l;e[0]=a*h,e[4]=p-u*d,e[8]=g*d+m,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*d+g,e[10]=u-p*d}else if(t.order==="XZY"){const u=r*a,m=r*l,g=o*a,p=o*l;e[0]=a*h,e[4]=-d,e[8]=l*h,e[1]=u*d+p,e[5]=r*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=p*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pc,t,mc)}lookAt(t,e,n){const i=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),xn.crossVectors(n,be),xn.lengthSq()===0&&(Math.abs(n.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),xn.crossVectors(n,be)),xn.normalize(),Zi.crossVectors(be,xn),i[0]=xn.x,i[4]=Zi.x,i[8]=be.x,i[1]=xn.y,i[5]=Zi.y,i[9]=be.y,i[2]=xn.z,i[6]=Zi.z,i[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],a=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],p=n[6],f=n[10],x=n[14],_=n[3],y=n[7],M=n[11],S=n[15],C=i[0],P=i[4],w=i[8],T=i[12],D=i[1],V=i[5],W=i[9],L=i[13],R=i[2],I=i[6],N=i[10],Z=i[14],O=i[3],q=i[7],K=i[11],st=i[15];return s[0]=r*C+o*D+a*R+l*O,s[4]=r*P+o*V+a*I+l*q,s[8]=r*w+o*W+a*N+l*K,s[12]=r*T+o*L+a*Z+l*st,s[1]=h*C+d*D+u*R+m*O,s[5]=h*P+d*V+u*I+m*q,s[9]=h*w+d*W+u*N+m*K,s[13]=h*T+d*L+u*Z+m*st,s[2]=g*C+p*D+f*R+x*O,s[6]=g*P+p*V+f*I+x*q,s[10]=g*w+p*W+f*N+x*K,s[14]=g*T+p*L+f*Z+x*st,s[3]=_*C+y*D+M*R+S*O,s[7]=_*P+y*V+M*I+S*q,s[11]=_*w+y*W+M*N+S*K,s[15]=_*T+y*L+M*Z+S*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],a=t[9],l=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],p=t[7],f=t[11],x=t[15];return g*(+s*a*d-i*l*d-s*o*u+n*l*u+i*o*m-n*a*m)+p*(+e*a*m-e*l*u+s*r*u-i*r*m+i*l*h-s*a*h)+f*(+e*l*d-e*o*m-s*r*d+n*r*m+s*o*h-n*l*h)+x*(-i*o*h-e*a*d+e*o*u+i*r*d-n*r*u+n*a*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],l=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],p=t[13],f=t[14],x=t[15],_=d*f*l-p*u*l+p*a*m-o*f*m-d*a*x+o*u*x,y=g*u*l-h*f*l-g*a*m+r*f*m+h*a*x-r*u*x,M=h*p*l-g*d*l+g*o*m-r*p*m-h*o*x+r*d*x,S=g*d*a-h*p*a-g*o*u+r*p*u+h*o*f-r*d*f,C=e*_+n*y+i*M+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=_*P,t[1]=(p*u*s-d*f*s-p*i*m+n*f*m+d*i*x-n*u*x)*P,t[2]=(o*f*s-p*a*s+p*i*l-n*f*l-o*i*x+n*a*x)*P,t[3]=(d*a*s-o*u*s-d*i*l+n*u*l+o*i*m-n*a*m)*P,t[4]=y*P,t[5]=(h*f*s-g*u*s+g*i*m-e*f*m-h*i*x+e*u*x)*P,t[6]=(g*a*s-r*f*s-g*i*l+e*f*l+r*i*x-e*a*x)*P,t[7]=(r*u*s-h*a*s+h*i*l-e*u*l-r*i*m+e*a*m)*P,t[8]=M*P,t[9]=(g*d*s-h*p*s-g*n*m+e*p*m+h*n*x-e*d*x)*P,t[10]=(r*p*s-g*o*s+g*n*l-e*p*l-r*n*x+e*o*x)*P,t[11]=(h*o*s-r*d*s-h*n*l+e*d*l+r*n*m-e*o*m)*P,t[12]=S*P,t[13]=(h*p*i-g*d*i+g*n*u-e*p*u-h*n*f+e*d*f)*P,t[14]=(g*o*i-r*p*i-g*n*a+e*p*a+r*n*f-e*o*f)*P,t[15]=(r*d*i-h*o*i+h*n*a-e*d*a-r*n*u+e*o*u)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,a=t.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*a,l*a+i*o,0,l*o+i*a,h*o+n,h*a-i*r,0,l*a-i*o,h*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,a=e._w,l=s+s,h=r+r,d=o+o,u=s*l,m=s*h,g=s*d,p=r*h,f=r*d,x=o*d,_=a*l,y=a*h,M=a*d,S=n.x,C=n.y,P=n.z;return i[0]=(1-(p+x))*S,i[1]=(m+M)*S,i[2]=(g-y)*S,i[3]=0,i[4]=(m-M)*C,i[5]=(1-(u+x))*C,i[6]=(f+_)*C,i[7]=0,i[8]=(g+y)*P,i[9]=(f-_)*P,i[10]=(1-(u+p))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Zn.set(i[0],i[1],i[2]).length();const r=Zn.set(i[4],i[5],i[6]).length(),o=Zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Fe.copy(this);const l=1/s,h=1/r,d=1/o;return Fe.elements[0]*=l,Fe.elements[1]*=l,Fe.elements[2]*=l,Fe.elements[4]*=h,Fe.elements[5]*=h,Fe.elements[6]*=h,Fe.elements[8]*=d,Fe.elements[9]*=d,Fe.elements[10]*=d,e.setFromRotationMatrix(Fe),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r){const o=this.elements,a=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(r+s)/(r-s),m=-2*r*s/(r-s);return o[0]=a,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r){const o=this.elements,a=1/(e-t),l=1/(n-i),h=1/(r-s),d=(e+t)*a,u=(n+i)*l,m=(r+s)*h;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zn=new G,Fe=new Jt,pc=new G(0,0,0),mc=new G(1,1,1),xn=new G,Zi=new G,be=new G,_o=new Jt,xo=new bn;class Ms{constructor(t=0,e=0,n=0,i=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],a=i[1],l=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ee(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _o.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_o,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xo.setFromEuler(this),this.setFromQuaternion(xo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ms.DEFAULT_ORDER="XYZ";class Sr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gc=0;const vo=new G,$n=new bn,sn=new Jt,$i=new G,Mi=new G,_c=new G,xc=new bn,yo=new G(1,0,0),Mo=new G(0,1,0),wo=new G(0,0,1),vc={type:"added"},bo={type:"removed"};class ce extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new G,e=new Ms,n=new bn,i=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ge}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(yo,t)}rotateY(t){return this.rotateOnAxis(Mo,t)}rotateZ(t){return this.rotateOnAxis(wo,t)}translateOnAxis(t,e){return vo.copy(t).applyQuaternion(this.quaternion),this.position.add(vo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yo,t)}translateY(t){return this.translateOnAxis(Mo,t)}translateZ(t){return this.translateOnAxis(wo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$i.copy(t):$i.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Mi,$i,this.up):sn.lookAt($i,Mi,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),$n.setFromRotationMatrix(sn),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(vc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bo)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(bo)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(sn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,t,_c),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,xc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let l=0,h=a.length;l<h;l++){const d=a[l];s(t.shapes,d)}else s(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(s(t.materials,this.material[a]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(s(t.animations,a))}}if(e){const o=r(t.geometries),a=r(t.materials),l=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const a=[];for(const l in o){const h=o[l];delete h.metadata,a.push(h)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ce.DEFAULT_UP=new G(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Be=new G,rn=new G,js=new G,on=new G,Kn=new G,Jn=new G,So=new G,Ys=new G,Zs=new G,$s=new G;class dn{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Be.subVectors(t,e),i.cross(Be);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Be.subVectors(i,e),rn.subVectors(n,e),js.subVectors(t,e);const r=Be.dot(Be),o=Be.dot(rn),a=Be.dot(js),l=rn.dot(rn),h=rn.dot(js),d=r*l-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(l*a-o*h)*u,g=(r*h-o*a)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,on),on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(t,e,n,i,s,r,o,a){return this.getBarycoord(t,e,n,i,on),a.set(0,0),a.addScaledVector(s,on.x),a.addScaledVector(r,on.y),a.addScaledVector(o,on.z),a}static isFrontFacing(t,e,n,i){return Be.subVectors(n,e),rn.subVectors(t,e),Be.cross(rn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Be.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Be.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return dn.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;Kn.subVectors(i,n),Jn.subVectors(s,n),Ys.subVectors(t,n);const a=Kn.dot(Ys),l=Jn.dot(Ys);if(a<=0&&l<=0)return e.copy(n);Zs.subVectors(t,i);const h=Kn.dot(Zs),d=Jn.dot(Zs);if(h>=0&&d<=h)return e.copy(i);const u=a*d-h*l;if(u<=0&&a>=0&&h<=0)return r=a/(a-h),e.copy(n).addScaledVector(Kn,r);$s.subVectors(t,s);const m=Kn.dot($s),g=Jn.dot($s);if(g>=0&&m<=g)return e.copy(s);const p=m*l-a*g;if(p<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Jn,o);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return So.subVectors(s,i),o=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(So,o);const x=1/(f+p+u);return r=p*x,o=u*x,e.copy(n).addScaledVector(Kn,r).addScaledVector(Jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let yc=0,Ui=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=ci,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ba,this.blendDst=Sa,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const a=s[o];delete a.metadata,r.push(a)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const Na={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ue={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Ks(c,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?c+(t-c)*6*e:e<1/2?t:e<2/3?c+(t-c)*6*(2/3-e):c}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=ic(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Ks(r,s,t+1/3),this.g=Ks(r,s,t),this.b=Ks(r,s,t-1/3)}return pe.toWorkingColorSpace(this,i),this}setStyle(t,e=$e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,pe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,pe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(a,l,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,pe.toWorkingColorSpace(this,e),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,pe.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=Na[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return pe.fromWorkingColorSpace(le.copy(this),t),Ee(le.r*255,0,255)<<16^Ee(le.g*255,0,255)<<8^Ee(le.b*255,0,255)<<0}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(le.copy(this),e);const n=le.r,i=le.g,s=le.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let a,l;const h=(o+r)/2;if(o===r)a=0,l=0;else{const d=r-o;switch(l=h<=.5?d/(r+o):d/(2-r-o),r){case n:a=(i-s)/d+(i<s?6:0);break;case i:a=(s-n)/d+2;break;case s:a=(n-i)/d+4;break}a/=6}return t.h=a,t.s=l,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(le.copy(this),e),t.r=le.r,t.g=le.g,t.b=le.b,t}getStyle(t=$e){pe.fromWorkingColorSpace(le.copy(this),t);const e=le.r,n=le.g,i=le.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ue),Ue.h+=t,Ue.s+=e,Ue.l+=n,this.setHSL(Ue.h,Ue.s,Ue.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ue),t.getHSL(Ki);const n=Fs(Ue.h,Ki.h,e),i=Fs(Ue.s,Ki.s,e),s=Fs(Ue.l,Ki.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const le=new Bt;Bt.NAMES=Na;class Fa extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yt=new G,Ji=new Ut;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ji.fromBufferAttribute(this,e),Ji.applyMatrix3(t),this.setXY(e,Ji.x,Ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix3(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix4(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyNormalMatrix(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.transformDirection(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ba extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ua extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ge extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Mc=0;const Re=new Jt,Js=new ce,Qn=new G,Se=new Bi,wi=new Bi,se=new G;class En extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ra(t)?Ua:Ba)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ge().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Re.makeRotationFromQuaternion(t),this.applyMatrix4(Re),this}rotateX(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this}rotateY(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this}rotateZ(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this}translate(t,e,n){return Re.makeTranslation(t,e,n),this.applyMatrix4(Re),this}scale(t,e,n){return Re.makeScale(t,e,n),this.applyMatrix4(Re),this}lookAt(t){return Js.lookAt(t),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Se.setFromBufferAttribute(s),this.morphTargetsRelative?(se.addVectors(this.boundingBox.min,Se.min),this.boundingBox.expandByPoint(se),se.addVectors(this.boundingBox.max,Se.max),this.boundingBox.expandByPoint(se)):(this.boundingBox.expandByPoint(Se.min),this.boundingBox.expandByPoint(Se.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(Se.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(se.addVectors(Se.min,wi.min),Se.expandByPoint(se),se.addVectors(Se.max,wi.max),Se.expandByPoint(se)):(Se.expandByPoint(wi.min),Se.expandByPoint(wi.max))}Se.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)se.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(se));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],a=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)se.fromBufferAttribute(o,l),a&&(Qn.fromBufferAttribute(t,l),se.add(Qn)),i=Math.max(i,n.distanceToSquared(se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*o),4));const a=this.getAttribute("tangent").array,l=[],h=[];for(let D=0;D<o;D++)l[D]=new G,h[D]=new G;const d=new G,u=new G,m=new G,g=new Ut,p=new Ut,f=new Ut,x=new G,_=new G;function y(D,V,W){d.fromArray(i,D*3),u.fromArray(i,V*3),m.fromArray(i,W*3),g.fromArray(r,D*2),p.fromArray(r,V*2),f.fromArray(r,W*2),u.sub(d),m.sub(d),p.sub(g),f.sub(g);const L=1/(p.x*f.y-f.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(L),_.copy(m).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(L),l[D].add(x),l[V].add(x),l[W].add(x),h[D].add(_),h[V].add(_),h[W].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,V=M.length;D<V;++D){const W=M[D],L=W.start,R=W.count;for(let I=L,N=L+R;I<N;I+=3)y(n[I+0],n[I+1],n[I+2])}const S=new G,C=new G,P=new G,w=new G;function T(D){P.fromArray(s,D*3),w.copy(P);const V=l[D];S.copy(V),S.sub(P.multiplyScalar(P.dot(V))).normalize(),C.crossVectors(w,V);const L=C.dot(h[D])<0?-1:1;a[D*4]=S.x,a[D*4+1]=S.y,a[D*4+2]=S.z,a[D*4+3]=L}for(let D=0,V=M.length;D<V;++D){const W=M[D],L=W.start,R=W.count;for(let I=L,N=L+R;I<N;I+=3)T(n[I+0]),T(n[I+1]),T(n[I+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new G,s=new G,r=new G,o=new G,a=new G,l=new G,h=new G,d=new G;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),p=t.getX(u+1),f=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,f),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),o.add(h),a.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)se.fromBufferAttribute(t,e),se.normalize(),t.setXYZ(e,se.x,se.y,se.z)}toNonIndexed(){function t(o,a){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(a.length*h);let m=0,g=0;for(let p=0,f=a.length;p<f;p++){o.isInterleavedBufferAttribute?m=a[p]*o.data.stride+o.offset:m=a[p]*h;for(let x=0;x<h;x++)u[g++]=l[m++]}return new Qe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new En,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],l=t(a,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const a=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],m=t(u,n);a.push(m)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,a=r.length;o<a;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(t[l]=a[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const l=n[a];t.data.attributes[a]=l.toJSON(t.data)}const i={};let s=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],h=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(i[a]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eo=new Jt,Xe=new za,Qi=new br,To=new G,bi=new G,Si=new G,Ei=new G,Qs=new G,ts=new G,es=new Ut,ns=new Ut,is=new Ut,tr=new G,ss=new G;class fn extends ce{constructor(t=new En,e=new Fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){ts.set(0,0,0);for(let a=0,l=s.length;a<l;a++){const h=o[a],d=s[a];h!==0&&(Qs.fromBufferAttribute(d,t),r?ts.addScaledVector(Qs,h):ts.addScaledVector(Qs.sub(e),h))}e.add(ts)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(s),Xe.copy(t.ray).recast(t.near),Qi.containsPoint(Xe.origin)===!1&&(Xe.intersectSphere(Qi,To)===null||Xe.origin.distanceToSquared(To)>(t.far-t.near)**2))||(Eo.copy(s).invert(),Xe.copy(t.ray).applyMatrix4(Eo),n.boundingBox!==null&&Xe.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,a=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],x=Math.max(p.start,u.start),_=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let y=x,M=_;y<M;y+=3){const S=o.getX(y),C=o.getX(y+1),P=o.getX(y+2);r=rs(this,f,t,Xe,l,h,S,C,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const m=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const x=o.getX(p),_=o.getX(p+1),y=o.getX(p+2);r=rs(this,i,t,Xe,l,h,x,_,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],x=Math.max(p.start,u.start),_=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=x,M=_;y<M;y+=3){const S=y,C=y+1,P=y+2;r=rs(this,f,t,Xe,l,h,S,C,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const m=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const x=p,_=p+1,y=p+2;r=rs(this,i,t,Xe,l,h,x,_,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function wc(c,t,e,n,i,s,r,o){let a;if(t.side===Ae?a=n.intersectTriangle(r,s,i,!0,o):a=n.intersectTriangle(i,s,r,t.side===Sn,o),a===null)return null;ss.copy(o),ss.applyMatrix4(c.matrixWorld);const l=e.ray.origin.distanceTo(ss);return l<e.near||l>e.far?null:{distance:l,point:ss.clone(),object:c}}function rs(c,t,e,n,i,s,r,o,a){c.getVertexPosition(r,bi),c.getVertexPosition(o,Si),c.getVertexPosition(a,Ei);const l=wc(c,t,e,n,bi,Si,Ei,tr);if(l){i&&(es.fromBufferAttribute(i,r),ns.fromBufferAttribute(i,o),is.fromBufferAttribute(i,a),l.uv=dn.getUV(tr,bi,Si,Ei,es,ns,is,new Ut)),s&&(es.fromBufferAttribute(s,r),ns.fromBufferAttribute(s,o),is.fromBufferAttribute(s,a),l.uv2=dn.getUV(tr,bi,Si,Ei,es,ns,is,new Ut));const h={a:r,b:o,c:a,normal:new G,materialIndex:0};dn.getNormal(bi,Si,Ei,h.normal),l.face=h}return l}class Oi extends En{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const a=[],l=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(d,2));function g(p,f,x,_,y,M,S,C,P,w,T){const D=M/P,V=S/w,W=M/2,L=S/2,R=C/2,I=P+1,N=w+1;let Z=0,O=0;const q=new G;for(let K=0;K<N;K++){const st=K*V-L;for(let z=0;z<I;z++){const J=z*D-W;q[p]=J*_,q[f]=st*y,q[x]=R,l.push(q.x,q.y,q.z),q[p]=0,q[f]=0,q[x]=C>0?1:-1,h.push(q.x,q.y,q.z),d.push(z/P),d.push(1-K/w),Z+=1}}for(let K=0;K<w;K++)for(let st=0;st<P;st++){const z=u+st+I*K,J=u+st+I*(K+1),nt=u+(st+1)+I*(K+1),U=u+(st+1)+I*K;a.push(z,J,U),a.push(J,nt,U),O+=6}o.addGroup(m,O,T),m+=O,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mi(c){const t={};for(const e in c){t[e]={};for(const n in c[e]){const i=c[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function me(c){const t={};for(let e=0;e<c.length;e++){const n=mi(c[e]);for(const i in n)t[i]=n[i]}return t}function bc(c){const t=[];for(let e=0;e<c.length;e++)t.push(c[e].clone());return t}function Oa(c){return c.getRenderTarget()===null&&c.outputEncoding===Gt?$e:Ni}const Sc={clone:mi,merge:me};var Ec=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ec,this.fragmentShader=Tc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.uniformsGroups=bc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ka extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class De extends ka{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/a,e-=r.offsetY*n/l,i*=r.width/a,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ti=-90,ei=1;class Ac extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new De(ti,ei,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new De(ti,ei,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new De(ti,ei,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new De(ti,ei,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const a=new De(ti,ei,t,e);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const l=new De(ti,ei,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,a,l]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=pn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,a),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Ga extends ve{constructor(t,e,n,i,s,r,o,a,l,h){t=t!==void 0?t:[],e=e!==void 0?e:di,super(t,e,n,i,s,r,o,a,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cc extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ga(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oi(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:wn});s.uniforms.tEquirect.value=e;const r=new fn(i,s),o=e.minFilter;return e.minFilter===Ii&&(e.minFilter=Pe),new Ac(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const er=new G,Lc=new G,Rc=new ge;let In=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=er.subVectors(n,e).cross(Lc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rc.getNormalMatrix(t),i=this.coplanarPoint(er).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const ni=new br,os=new G;class Er{constructor(t=new In,e=new In,n=new In,i=new In,s=new In,r=new In){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],h=n[6],d=n[7],u=n[8],m=n[9],g=n[10],p=n[11],f=n[12],x=n[13],_=n[14],y=n[15];return e[0].setComponents(o-i,d-a,p-u,y-f).normalize(),e[1].setComponents(o+i,d+a,p+u,y+f).normalize(),e[2].setComponents(o+s,d+l,p+m,y+x).normalize(),e[3].setComponents(o-s,d-l,p-m,y-x).normalize(),e[4].setComponents(o-r,d-h,p-g,y-_).normalize(),e[5].setComponents(o+r,d+h,p+g,y+_).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(os.x=i.normal.x>0?t.max.x:t.min.x,os.y=i.normal.y>0?t.max.y:t.min.y,os.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Va(){let c=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=c.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=c.requestAnimationFrame(i),t=!0)},stop:function(){c.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){c=s}}}function Pc(c,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,m=c.createBuffer();c.bindBuffer(h,m),c.bufferData(h,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){const u=h.array,m=h.updateRange;c.bindBuffer(d,l),m.count===-1?c.bufferSubData(d,0,u):(e?c.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):c.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(c.deleteBuffer(h.buffer),n.delete(l))}function a(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:r,remove:o,update:a}}class Tr extends En{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),a=Math.floor(i),l=o+1,h=a+1,d=t/o,u=e/a,m=[],g=[],p=[],f=[];for(let x=0;x<h;x++){const _=x*u-r;for(let y=0;y<l;y++){const M=y*d-s;g.push(M,-_,0),p.push(0,0,1),f.push(y/o),f.push(1-x/a)}}for(let x=0;x<a;x++)for(let _=0;_<o;_++){const y=_+l*x,M=_+l*(x+1),S=_+1+l*(x+1),C=_+1+l*x;m.push(y,M,C),m.push(M,S,C)}this.setIndex(m),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(p,3)),this.setAttribute("uv",new Ge(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ic=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uc="vec3 transformed = vec3( position );",Oc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Gc=`#ifdef USE_IRIDESCENCE
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
#endif`,Vc=`#ifdef USE_BUMPMAP
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
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kc=`#define PI 3.141592653589793
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
}`,Jc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qc=`vec3 transformedNormal = objectNormal;
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
#endif`,th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sh="gl_FragColor = linearToOutputTexel( gl_FragColor );",rh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oh=`#ifdef USE_ENVMAP
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
#endif`,ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,ch=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hh=`#ifdef USE_ENVMAP
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
#endif`,uh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mh=`#ifdef USE_GRADIENTMAP
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
}`,gh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_h=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yh=`uniform bool receiveShadow;
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
#endif`,Mh=`#if defined( USE_ENVMAP )
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
#endif`,wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Th=`PhysicalMaterial material;
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
#endif`,Ah=`struct PhysicalMaterial {
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
}`,Ch=`
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
#endif`,Lh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ph=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ih=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vh=`#ifdef USE_MORPHNORMALS
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
#endif`,Wh=`#ifdef USE_MORPHTARGETS
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
#endif`,Hh=`#ifdef USE_MORPHTARGETS
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
#endif`,qh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Xh=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$h=`#ifdef USE_NORMALMAP
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
#endif`,Kh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Qh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,tu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,su=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ru=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ou=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,du=`float getShadowMask() {
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
}`,fu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pu=`#ifdef USE_SKINNING
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
#endif`,mu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gu=`#ifdef USE_SKINNING
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
#endif`,_u=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mu=`#ifdef USE_TRANSMISSION
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
#endif`,wu=`#ifdef USE_TRANSMISSION
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
#endif`,bu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Su=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Eu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Tu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Au=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Cu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Lu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ru=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pu=`uniform sampler2D t2D;
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
}`,Du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fu=`#include <common>
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
}`,Bu=`#if DEPTH_PACKING == 3200
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
}`,Uu=`#define DISTANCE
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
}`,Ou=`#define DISTANCE
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
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vu=`uniform float scale;
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
}`,Wu=`uniform vec3 diffuse;
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
}`,Hu=`#include <common>
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
}`,qu=`uniform vec3 diffuse;
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
}`,Xu=`#define LAMBERT
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
}`,ju=`#define LAMBERT
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
}`,Yu=`#define MATCAP
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
}`,Zu=`#define MATCAP
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
}`,$u=`#define NORMAL
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
}`,Ku=`#define NORMAL
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
}`,Ju=`#define PHONG
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
}`,Qu=`#define PHONG
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
}`,td=`#define STANDARD
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
}`,ed=`#define STANDARD
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
}`,nd=`#define TOON
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
}`,id=`#define TOON
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
}`,sd=`uniform float size;
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
}`,rd=`uniform vec3 diffuse;
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
}`,od=`#include <common>
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
}`,ad=`uniform vec3 color;
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
}`,ld=`uniform float rotation;
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
}`,cd=`uniform vec3 diffuse;
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
}`,Et={alphamap_fragment:Dc,alphamap_pars_fragment:Ic,alphatest_fragment:zc,alphatest_pars_fragment:Nc,aomap_fragment:Fc,aomap_pars_fragment:Bc,begin_vertex:Uc,beginnormal_vertex:Oc,bsdfs:kc,iridescence_fragment:Gc,bumpmap_pars_fragment:Vc,clipping_planes_fragment:Wc,clipping_planes_pars_fragment:Hc,clipping_planes_pars_vertex:qc,clipping_planes_vertex:Xc,color_fragment:jc,color_pars_fragment:Yc,color_pars_vertex:Zc,color_vertex:$c,common:Kc,cube_uv_reflection_fragment:Jc,defaultnormal_vertex:Qc,displacementmap_pars_vertex:th,displacementmap_vertex:eh,emissivemap_fragment:nh,emissivemap_pars_fragment:ih,encodings_fragment:sh,encodings_pars_fragment:rh,envmap_fragment:oh,envmap_common_pars_fragment:ah,envmap_pars_fragment:lh,envmap_pars_vertex:ch,envmap_physical_pars_fragment:Mh,envmap_vertex:hh,fog_vertex:uh,fog_pars_vertex:dh,fog_fragment:fh,fog_pars_fragment:ph,gradientmap_pars_fragment:mh,lightmap_fragment:gh,lightmap_pars_fragment:_h,lights_lambert_fragment:xh,lights_lambert_pars_fragment:vh,lights_pars_begin:yh,lights_toon_fragment:wh,lights_toon_pars_fragment:bh,lights_phong_fragment:Sh,lights_phong_pars_fragment:Eh,lights_physical_fragment:Th,lights_physical_pars_fragment:Ah,lights_fragment_begin:Ch,lights_fragment_maps:Lh,lights_fragment_end:Rh,logdepthbuf_fragment:Ph,logdepthbuf_pars_fragment:Dh,logdepthbuf_pars_vertex:Ih,logdepthbuf_vertex:zh,map_fragment:Nh,map_pars_fragment:Fh,map_particle_fragment:Bh,map_particle_pars_fragment:Uh,metalnessmap_fragment:Oh,metalnessmap_pars_fragment:kh,morphcolor_vertex:Gh,morphnormal_vertex:Vh,morphtarget_pars_vertex:Wh,morphtarget_vertex:Hh,normal_fragment_begin:qh,normal_fragment_maps:Xh,normal_pars_fragment:jh,normal_pars_vertex:Yh,normal_vertex:Zh,normalmap_pars_fragment:$h,clearcoat_normal_fragment_begin:Kh,clearcoat_normal_fragment_maps:Jh,clearcoat_pars_fragment:Qh,iridescence_pars_fragment:tu,output_fragment:eu,packing:nu,premultiplied_alpha_fragment:iu,project_vertex:su,dithering_fragment:ru,dithering_pars_fragment:ou,roughnessmap_fragment:au,roughnessmap_pars_fragment:lu,shadowmap_pars_fragment:cu,shadowmap_pars_vertex:hu,shadowmap_vertex:uu,shadowmask_pars_fragment:du,skinbase_vertex:fu,skinning_pars_vertex:pu,skinning_vertex:mu,skinnormal_vertex:gu,specularmap_fragment:_u,specularmap_pars_fragment:xu,tonemapping_fragment:vu,tonemapping_pars_fragment:yu,transmission_fragment:Mu,transmission_pars_fragment:wu,uv_pars_fragment:bu,uv_pars_vertex:Su,uv_vertex:Eu,uv2_pars_fragment:Tu,uv2_pars_vertex:Au,uv2_vertex:Cu,worldpos_vertex:Lu,background_vert:Ru,background_frag:Pu,backgroundCube_vert:Du,backgroundCube_frag:Iu,cube_vert:zu,cube_frag:Nu,depth_vert:Fu,depth_frag:Bu,distanceRGBA_vert:Uu,distanceRGBA_frag:Ou,equirect_vert:ku,equirect_frag:Gu,linedashed_vert:Vu,linedashed_frag:Wu,meshbasic_vert:Hu,meshbasic_frag:qu,meshlambert_vert:Xu,meshlambert_frag:ju,meshmatcap_vert:Yu,meshmatcap_frag:Zu,meshnormal_vert:$u,meshnormal_frag:Ku,meshphong_vert:Ju,meshphong_frag:Qu,meshphysical_vert:td,meshphysical_frag:ed,meshtoon_vert:nd,meshtoon_frag:id,points_vert:sd,points_frag:rd,shadow_vert:od,shadow_frag:ad,sprite_vert:ld,sprite_frag:cd},it={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ge},uv2Transform:{value:new ge},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ge}}},Ke={basic:{uniforms:me([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:me([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:me([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:me([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:me([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:me([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:me([it.points,it.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:me([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:me([it.common,it.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:me([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:me([it.sprite,it.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:me([it.common,it.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:me([it.lights,it.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Ke.physical={uniforms:me([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const as={r:0,b:0,g:0};function hd(c,t,e,n,i,s,r){const o=new Bt(0);let a=s===!0?0:1,l,h,d=null,u=0,m=null;function g(f,x){let _=!1,y=x.isScene===!0?x.background:null;y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y));const M=c.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(y=null),y===null?p(o,a):y&&y.isColor&&(p(y,1),_=!0),(c.autoClear||_)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ys)?(h===void 0&&(h=new fn(new Oi(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:mi(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=y.encoding!==Gt,(d!==y||u!==y.version||m!==c.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,m=c.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new fn(new Tr(2,2),new Hn({name:"BackgroundMaterial",uniforms:mi(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=y.encoding!==Gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||m!==c.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,m=c.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,x){f.getRGB(as,Oa(c)),n.buffers.color.setClear(as.r,as.g,as.b,x,r)}return{getClearColor:function(){return o},setClearColor:function(f,x=1){o.set(f),a=x,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,p(o,a)},render:g}}function ud(c,t,e,n){const i=c.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},a=f(null);let l=a,h=!1;function d(R,I,N,Z,O){let q=!1;if(r){const K=p(Z,N,I);l!==K&&(l=K,m(l.object)),q=x(R,Z,N,O),q&&_(R,Z,N,O)}else{const K=I.wireframe===!0;(l.geometry!==Z.id||l.program!==N.id||l.wireframe!==K)&&(l.geometry=Z.id,l.program=N.id,l.wireframe=K,q=!0)}O!==null&&e.update(O,34963),(q||h)&&(h=!1,w(R,I,N,Z),O!==null&&c.bindBuffer(34963,e.get(O).buffer))}function u(){return n.isWebGL2?c.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?c.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?c.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,I,N){const Z=N.wireframe===!0;let O=o[R.id];O===void 0&&(O={},o[R.id]=O);let q=O[I.id];q===void 0&&(q={},O[I.id]=q);let K=q[Z];return K===void 0&&(K=f(u()),q[Z]=K),K}function f(R){const I=[],N=[],Z=[];for(let O=0;O<i;O++)I[O]=0,N[O]=0,Z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:Z,object:R,attributes:{},index:null}}function x(R,I,N,Z){const O=l.attributes,q=I.attributes;let K=0;const st=N.getAttributes();for(const z in st)if(st[z].location>=0){const nt=O[z];let U=q[z];if(U===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),nt===void 0||nt.attribute!==U||U&&nt.data!==U.data)return!0;K++}return l.attributesNum!==K||l.index!==Z}function _(R,I,N,Z){const O={},q=I.attributes;let K=0;const st=N.getAttributes();for(const z in st)if(st[z].location>=0){let nt=q[z];nt===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor));const U={};U.attribute=nt,nt&&nt.data&&(U.data=nt.data),O[z]=U,K++}l.attributes=O,l.attributesNum=K,l.index=Z}function y(){const R=l.newAttributes;for(let I=0,N=R.length;I<N;I++)R[I]=0}function M(R){S(R,0)}function S(R,I){const N=l.newAttributes,Z=l.enabledAttributes,O=l.attributeDivisors;N[R]=1,Z[R]===0&&(c.enableVertexAttribArray(R),Z[R]=1),O[R]!==I&&((n.isWebGL2?c:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,I),O[R]=I)}function C(){const R=l.newAttributes,I=l.enabledAttributes;for(let N=0,Z=I.length;N<Z;N++)I[N]!==R[N]&&(c.disableVertexAttribArray(N),I[N]=0)}function P(R,I,N,Z,O,q){n.isWebGL2===!0&&(N===5124||N===5125)?c.vertexAttribIPointer(R,I,N,O,q):c.vertexAttribPointer(R,I,N,Z,O,q)}function w(R,I,N,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const O=Z.attributes,q=N.getAttributes(),K=I.defaultAttributeValues;for(const st in q){const z=q[st];if(z.location>=0){let J=O[st];if(J===void 0&&(st==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),st==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),J!==void 0){const nt=J.normalized,U=J.itemSize,ht=e.get(J);if(ht===void 0)continue;const ut=ht.buffer,ft=ht.type,pt=ht.bytesPerElement;if(J.isInterleavedBufferAttribute){const Mt=J.data,At=Mt.stride,Lt=J.offset;if(Mt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<z.locationSize;Nt++)S(z.location+Nt,Mt.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Nt=0;Nt<z.locationSize;Nt++)M(z.location+Nt);c.bindBuffer(34962,ut);for(let Nt=0;Nt<z.locationSize;Nt++)P(z.location+Nt,U/z.locationSize,ft,nt,At*pt,(Lt+U/z.locationSize*Nt)*pt)}else{if(J.isInstancedBufferAttribute){for(let Mt=0;Mt<z.locationSize;Mt++)S(z.location+Mt,J.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Mt=0;Mt<z.locationSize;Mt++)M(z.location+Mt);c.bindBuffer(34962,ut);for(let Mt=0;Mt<z.locationSize;Mt++)P(z.location+Mt,U/z.locationSize,ft,nt,U*pt,U/z.locationSize*Mt*pt)}}else if(K!==void 0){const nt=K[st];if(nt!==void 0)switch(nt.length){case 2:c.vertexAttrib2fv(z.location,nt);break;case 3:c.vertexAttrib3fv(z.location,nt);break;case 4:c.vertexAttrib4fv(z.location,nt);break;default:c.vertexAttrib1fv(z.location,nt)}}}}C()}function T(){W();for(const R in o){const I=o[R];for(const N in I){const Z=I[N];for(const O in Z)g(Z[O].object),delete Z[O];delete I[N]}delete o[R]}}function D(R){if(o[R.id]===void 0)return;const I=o[R.id];for(const N in I){const Z=I[N];for(const O in Z)g(Z[O].object),delete Z[O];delete I[N]}delete o[R.id]}function V(R){for(const I in o){const N=o[I];if(N[R.id]===void 0)continue;const Z=N[R.id];for(const O in Z)g(Z[O].object),delete Z[O];delete N[R.id]}}function W(){L(),h=!0,l!==a&&(l=a,m(l.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:W,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:V,initAttributes:y,enableAttribute:M,disableUnusedAttributes:C}}function dd(c,t,e,n){const i=n.isWebGL2;let s;function r(l){s=l}function o(l,h){c.drawArrays(s,l,h),e.update(h,s,1)}function a(l,h,d){if(d===0)return;let u,m;if(i)u=c,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,l,h,d),e.update(h,s,d)}this.setMode=r,this.render=o,this.renderInstances=a}function fd(c,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=c.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext;let o=e.precision!==void 0?e.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=c.getParameter(34930),u=c.getParameter(35660),m=c.getParameter(3379),g=c.getParameter(34076),p=c.getParameter(34921),f=c.getParameter(36347),x=c.getParameter(36348),_=c.getParameter(36349),y=u>0,M=r||t.has("OES_texture_float"),S=y&&M,C=r?c.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:C}}function pd(c){const t=this;let e=null,n=0,i=!1,s=!1;const r=new In,o=new ge,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,x=c.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):l();else{const _=s?0:n,y=_*4;let M=x.clippingState||null;a.value=M,M=h(g,u,y,m);for(let S=0;S!==y;++S)M[S]=e[S];x.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=_}};function l(){a.value!==e&&(a.value=e,a.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=a.value,g!==!0||f===null){const x=m+p*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(f===null||f.length<x)&&(f=new Float32Array(x));for(let y=0,M=m;y!==p;++y,M+=4)r.copy(d[y]).applyMatrix4(_,o),r.normal.toArray(f,M),f[M+3]=r.constant}a.value=f,a.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function md(c){let t=new WeakMap;function e(r,o){return o===pr?r.mapping=di:o===mr&&(r.mapping=fi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===pr||o===mr)if(t.has(r)){const a=t.get(r).texture;return e(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const l=new Cc(a.height/2);return l.fromEquirectangularTexture(c,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const a=t.get(o);a!==void 0&&(t.delete(o),a.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Wa extends ka{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,a=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ai=4,Ao=[.125,.215,.35,.446,.526,.582],Nn=20,nr=new Wa,Co=new Bt;let ir=null;const zn=(1+Math.sqrt(5))/2,ii=1/zn,Lo=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,zn,ii),new G(0,zn,-ii),new G(ii,0,zn),new G(-ii,0,zn),new G(zn,ii,0),new G(-zn,ii,0)];class Ro{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ir=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Do(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ir),t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ir=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:zi,format:ke,encoding:Vn,depthBuffer:!1},i=Po(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Po(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gd(s)),this._blurMaterial=_d(s,t,e)}return i}_compileMaterial(t){const e=new fn(this._lodPlanes[0],t);this._renderer.compile(e,nr)}_sceneToCubeUV(t,e,n,i){const o=new De(90,1,e,n),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Co),h.toneMapping=pn,h.autoClear=!1;const m=new Fa({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new fn(new Oi,m);let p=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(Co),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(o.up.set(0,a[x],0),o.lookAt(l[x],0,0)):_===1?(o.up.set(0,0,a[x]),o.lookAt(0,l[x],0)):(o.up.set(0,a[x],0),o.lookAt(0,0,l[x]));const y=this._cubeSize;ls(i,_*y,x>2?y:0,y,y),h.setRenderTarget(i),p&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===di||t.mapping===fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Io()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Do());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new fn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const a=this._cubeSize;ls(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(r,nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Lo[(i-1)%Lo.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const a=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new fn(this._lodPlanes[i],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Nn-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):Nn;f>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Nn}`);const x=[];let _=0;for(let P=0;P<Nn;++P){const w=P/p,T=Math.exp(-w*w/2);x.push(T),P===0?_+=T:P<f&&(_+=2*T)}for(let P=0;P<x.length;P++)x[P]=x[P]/_;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=x,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const M=this._sizeLods[i],S=3*M*(i>y-ai?i-y+ai:0),C=4*(this._cubeSize-M);ls(e,S,C,3*M,2*M),a.setRenderTarget(e),a.render(d,nr)}}function gd(c){const t=[],e=[],n=[];let i=c;const s=c-ai+1+Ao.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let a=1/o;r>c-ai?a=Ao[r-c+ai-1]:r===0&&(a=0),n.push(a);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,p=3,f=2,x=1,_=new Float32Array(p*g*m),y=new Float32Array(f*g*m),M=new Float32Array(x*g*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,w=C>2?0:-1,T=[P,w,0,P+2/3,w,0,P+2/3,w+1,0,P,w,0,P+2/3,w+1,0,P,w+1,0];_.set(T,p*g*C),y.set(u,f*g*C);const D=[C,C,C,C,C,C];M.set(D,x*g*C)}const S=new En;S.setAttribute("position",new Qe(_,p)),S.setAttribute("uv",new Qe(y,f)),S.setAttribute("faceIndex",new Qe(M,x)),t.push(S),i>ai&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Po(c,t,e){const n=new Wn(c,t,e);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(c,t,e,n,i){c.viewport.set(t,e,n,i),c.scissor.set(t,e,n,i)}function _d(c,t,e){const n=new Float32Array(Nn),i=new G(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ar(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Do(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ar(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Io(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ar(){return`

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
	`}function xd(c){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const a=o.mapping,l=a===pr||a===mr,h=a===di||a===fi;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Ro(c)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Ro(c));const u=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let a=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&a++;return a===l}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function vd(c){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=c.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yd(c,t,e,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function a(d){const u=d.attributes;for(const g in u)t.update(u[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let f=0,x=p.length;f<x;f++)t.update(p[f],34962)}}function l(d){const u=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const _=m.array;p=m.version;for(let y=0,M=_.length;y<M;y+=3){const S=_[y+0],C=_[y+1],P=_[y+2];u.push(S,C,C,P,P,S)}}else{const _=g.array;p=g.version;for(let y=0,M=_.length/3-1;y<M;y+=3){const S=y+0,C=y+1,P=y+2;u.push(S,C,C,P,P,S)}}const f=new(Ra(u)?Ua:Ba)(u,1);f.version=p;const x=s.get(d);x&&t.remove(x),s.set(d,f)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:a,getWireframeAttribute:h}}function Md(c,t,e,n){const i=n.isWebGL2;let s;function r(u){s=u}let o,a;function l(u){o=u.type,a=u.bytesPerElement}function h(u,m){c.drawElements(s,m,o,u*a),e.update(m,s,1)}function d(u,m,g){if(g===0)return;let p,f;if(i)p=c,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,o,u*a,g),e.update(m,s,g)}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=d}function wd(c){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function bd(c,t){return c[0]-t[0]}function Sd(c,t){return Math.abs(t[1])-Math.abs(c[1])}function Ed(c,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new re,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function a(l,h,d){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let f=s.get(h);if(f===void 0||f.count!==p){let I=function(){L.dispose(),s.delete(h),h.removeEventListener("dispose",I)};var m=I;f!==void 0&&f.texture.dispose();const y=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let T=0;y===!0&&(T=1),M===!0&&(T=2),S===!0&&(T=3);let D=h.attributes.position.count*T,V=1;D>t.maxTextureSize&&(V=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const W=new Float32Array(D*V*4*p),L=new Ia(W,D,V,p);L.type=Un,L.needsUpdate=!0;const R=T*4;for(let N=0;N<p;N++){const Z=C[N],O=P[N],q=w[N],K=D*V*4*N;for(let st=0;st<Z.count;st++){const z=st*R;y===!0&&(r.fromBufferAttribute(Z,st),W[K+z+0]=r.x,W[K+z+1]=r.y,W[K+z+2]=r.z,W[K+z+3]=0),M===!0&&(r.fromBufferAttribute(O,st),W[K+z+4]=r.x,W[K+z+5]=r.y,W[K+z+6]=r.z,W[K+z+7]=0),S===!0&&(r.fromBufferAttribute(q,st),W[K+z+8]=r.x,W[K+z+9]=r.y,W[K+z+10]=r.z,W[K+z+11]=q.itemSize===4?r.w:1)}}f={count:p,texture:L,size:new Ut(D,V)},s.set(h,f),h.addEventListener("dispose",I)}let x=0;for(let y=0;y<u.length;y++)x+=u[y];const _=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(c,"morphTargetBaseInfluence",_),d.getUniforms().setValue(c,"morphTargetInfluences",u),d.getUniforms().setValue(c,"morphTargetsTexture",f.texture,e),d.getUniforms().setValue(c,"morphTargetsTextureSize",f.size)}else{const g=u===void 0?0:u.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let M=0;M<g;M++)p[M]=[M,0];n[h.id]=p}for(let M=0;M<g;M++){const S=p[M];S[0]=M,S[1]=u[M]}p.sort(Sd);for(let M=0;M<8;M++)M<g&&p[M][1]?(o[M][0]=p[M][0],o[M][1]=p[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(bd);const f=h.morphAttributes.position,x=h.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const S=o[M],C=S[0],P=S[1];C!==Number.MAX_SAFE_INTEGER&&P?(f&&h.getAttribute("morphTarget"+M)!==f[C]&&h.setAttribute("morphTarget"+M,f[C]),x&&h.getAttribute("morphNormal"+M)!==x[C]&&h.setAttribute("morphNormal"+M,x[C]),i[M]=P,_+=P):(f&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),x&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const y=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(c,"morphTargetBaseInfluence",y),d.getUniforms().setValue(c,"morphTargetInfluences",i)}}return{update:a}}function Td(c,t,e,n){let i=new WeakMap;function s(a){const l=n.render.frame,h=a.geometry,d=t.get(a,h);return i.get(d)!==l&&(t.update(d),i.set(d,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),e.update(a.instanceMatrix,34962),a.instanceColor!==null&&e.update(a.instanceColor,34962)),d}function r(){i=new WeakMap}function o(a){const l=a.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}const Ha=new ve,qa=new Ia,Xa=new dc,ja=new Ga,zo=[],No=[],Fo=new Float32Array(16),Bo=new Float32Array(9),Uo=new Float32Array(4);function _i(c,t,e){const n=c[0];if(n<=0||n>0)return c;const i=t*e;let s=zo[i];if(s===void 0&&(s=new Float32Array(i),zo[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,c[r].toArray(s,o)}return s}function Qt(c,t){if(c.length!==t.length)return!1;for(let e=0,n=c.length;e<n;e++)if(c[e]!==t[e])return!1;return!0}function te(c,t){for(let e=0,n=t.length;e<n;e++)c[e]=t[e]}function ws(c,t){let e=No[t];e===void 0&&(e=new Int32Array(t),No[t]=e);for(let n=0;n!==t;++n)e[n]=c.allocateTextureUnit();return e}function Ad(c,t){const e=this.cache;e[0]!==t&&(c.uniform1f(this.addr,t),e[0]=t)}function Cd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qt(e,t))return;c.uniform2fv(this.addr,t),te(e,t)}}function Ld(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qt(e,t))return;c.uniform3fv(this.addr,t),te(e,t)}}function Rd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qt(e,t))return;c.uniform4fv(this.addr,t),te(e,t)}}function Pd(c,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qt(e,t))return;c.uniformMatrix2fv(this.addr,!1,t),te(e,t)}else{if(Qt(e,n))return;Uo.set(n),c.uniformMatrix2fv(this.addr,!1,Uo),te(e,n)}}function Dd(c,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qt(e,t))return;c.uniformMatrix3fv(this.addr,!1,t),te(e,t)}else{if(Qt(e,n))return;Bo.set(n),c.uniformMatrix3fv(this.addr,!1,Bo),te(e,n)}}function Id(c,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qt(e,t))return;c.uniformMatrix4fv(this.addr,!1,t),te(e,t)}else{if(Qt(e,n))return;Fo.set(n),c.uniformMatrix4fv(this.addr,!1,Fo),te(e,n)}}function zd(c,t){const e=this.cache;e[0]!==t&&(c.uniform1i(this.addr,t),e[0]=t)}function Nd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qt(e,t))return;c.uniform2iv(this.addr,t),te(e,t)}}function Fd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qt(e,t))return;c.uniform3iv(this.addr,t),te(e,t)}}function Bd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qt(e,t))return;c.uniform4iv(this.addr,t),te(e,t)}}function Ud(c,t){const e=this.cache;e[0]!==t&&(c.uniform1ui(this.addr,t),e[0]=t)}function Od(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qt(e,t))return;c.uniform2uiv(this.addr,t),te(e,t)}}function kd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qt(e,t))return;c.uniform3uiv(this.addr,t),te(e,t)}}function Gd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qt(e,t))return;c.uniform4uiv(this.addr,t),te(e,t)}}function Vd(c,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Ha,i)}function Wd(c,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xa,i)}function Hd(c,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ja,i)}function qd(c,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||qa,i)}function Xd(c){switch(c){case 5126:return Ad;case 35664:return Cd;case 35665:return Ld;case 35666:return Rd;case 35674:return Pd;case 35675:return Dd;case 35676:return Id;case 5124:case 35670:return zd;case 35667:case 35671:return Nd;case 35668:case 35672:return Fd;case 35669:case 35673:return Bd;case 5125:return Ud;case 36294:return Od;case 36295:return kd;case 36296:return Gd;case 35678:case 36198:case 36298:case 36306:case 35682:return Vd;case 35679:case 36299:case 36307:return Wd;case 35680:case 36300:case 36308:case 36293:return Hd;case 36289:case 36303:case 36311:case 36292:return qd}}function jd(c,t){c.uniform1fv(this.addr,t)}function Yd(c,t){const e=_i(t,this.size,2);c.uniform2fv(this.addr,e)}function Zd(c,t){const e=_i(t,this.size,3);c.uniform3fv(this.addr,e)}function $d(c,t){const e=_i(t,this.size,4);c.uniform4fv(this.addr,e)}function Kd(c,t){const e=_i(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,e)}function Jd(c,t){const e=_i(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,e)}function Qd(c,t){const e=_i(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,e)}function tf(c,t){c.uniform1iv(this.addr,t)}function ef(c,t){c.uniform2iv(this.addr,t)}function nf(c,t){c.uniform3iv(this.addr,t)}function sf(c,t){c.uniform4iv(this.addr,t)}function rf(c,t){c.uniform1uiv(this.addr,t)}function of(c,t){c.uniform2uiv(this.addr,t)}function af(c,t){c.uniform3uiv(this.addr,t)}function lf(c,t){c.uniform4uiv(this.addr,t)}function cf(c,t,e){const n=this.cache,i=t.length,s=ws(e,i);Qt(n,s)||(c.uniform1iv(this.addr,s),te(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Ha,s[r])}function hf(c,t,e){const n=this.cache,i=t.length,s=ws(e,i);Qt(n,s)||(c.uniform1iv(this.addr,s),te(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Xa,s[r])}function uf(c,t,e){const n=this.cache,i=t.length,s=ws(e,i);Qt(n,s)||(c.uniform1iv(this.addr,s),te(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||ja,s[r])}function df(c,t,e){const n=this.cache,i=t.length,s=ws(e,i);Qt(n,s)||(c.uniform1iv(this.addr,s),te(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||qa,s[r])}function ff(c){switch(c){case 5126:return jd;case 35664:return Yd;case 35665:return Zd;case 35666:return $d;case 35674:return Kd;case 35675:return Jd;case 35676:return Qd;case 5124:case 35670:return tf;case 35667:case 35671:return ef;case 35668:case 35672:return nf;case 35669:case 35673:return sf;case 5125:return rf;case 36294:return of;case 36295:return af;case 36296:return lf;case 35678:case 36198:case 36298:case 36306:case 35682:return cf;case 35679:case 36299:case 36307:return hf;case 35680:case 36300:case 36308:case 36293:return uf;case 36289:case 36303:case 36311:case 36292:return df}}class pf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Xd(e.type)}}class mf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=ff(e.type)}}class gf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const sr=/(\w+)(\])?(\[|\.)?/g;function Oo(c,t){c.seq.push(t),c.map[t.id]=t}function _f(c,t,e){const n=c.name,i=n.length;for(sr.lastIndex=0;;){const s=sr.exec(n),r=sr.lastIndex;let o=s[1];const a=s[2]==="]",l=s[3];if(a&&(o=o|0),l===void 0||l==="["&&r+2===i){Oo(e,l===void 0?new pf(o,c,t):new mf(o,c,t));break}else{let d=e.map[o];d===void 0&&(d=new gf(o),Oo(e,d)),e=d}}}class ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);_f(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function ko(c,t,e){const n=c.createShader(t);return c.shaderSource(n,e),c.compileShader(n),n}let xf=0;function vf(c,t){const e=c.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function yf(c){switch(c){case Vn:return["Linear","( value )"];case Gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function Go(c,t,e){const n=c.getShaderParameter(t,35713),i=c.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+vf(c.getShaderSource(t),r)}else return i}function Mf(c,t){const e=yf(t);return"vec4 "+c+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function wf(c,t){let e;switch(t){case Dl:e="Linear";break;case Il:e="Reinhard";break;case zl:e="OptimizedCineon";break;case Nl:e="ACESFilmic";break;case Fl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+c+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function bf(c){return[c.extensionDerivatives||c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function Sf(c){const t=[];for(const e in c){const n=c[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ef(c,t){const e={},n=c.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=c.getActiveAttrib(t,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[r]={type:s.type,location:c.getAttribLocation(t,r),locationSize:o}}return e}function Pi(c){return c!==""}function Vo(c,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wo(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tf=/^[ \t]*#include +<([\w\d./]+)>/gm;function vr(c){return c.replace(Tf,Af)}function Af(c,t){const e=Et[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return vr(e)}const Cf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ho(c){return c.replace(Cf,Lf)}function Lf(c,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function qo(c){let t="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?t+=`
#define HIGH_PRECISION`:c.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rf(c){let t="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===Ma?t="SHADOWMAP_TYPE_PCF":c.shadowMapType===wa?t="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function Pf(c){let t="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case di:case fi:t="ENVMAP_TYPE_CUBE";break;case ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Df(c){let t="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case fi:t="ENVMAP_MODE_REFRACTION";break}return t}function If(c){let t="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case Ea:t="ENVMAP_BLENDING_MULTIPLY";break;case Rl:t="ENVMAP_BLENDING_MIX";break;case Pl:t="ENVMAP_BLENDING_ADD";break}return t}function zf(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Nf(c,t,e,n){const i=c.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const a=Rf(e),l=Pf(e),h=Df(e),d=If(e),u=zf(e),m=e.isWebGL2?"":bf(e),g=Sf(s),p=i.createProgram();let f,x,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(Pi).join(`
`),f.length>0&&(f+=`
`),x=[m,g].filter(Pi).join(`
`),x.length>0&&(x+=`
`)):(f=[qo(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),x=[m,qo(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?Et.tonemapping_pars_fragment:"",e.toneMapping!==pn?wf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Et.encodings_pars_fragment,Mf("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pi).join(`
`)),r=vr(r),r=Vo(r,e),r=Wo(r,e),o=vr(o),o=Vo(o,e),o=Wo(o,e),r=Ho(r),o=Ho(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",e.glslVersion===fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=_+f+r,M=_+x+o,S=ko(i,35633,y),C=ko(i,35632,M);if(i.attachShader(p,S),i.attachShader(p,C),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),c.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(S).trim(),V=i.getShaderInfoLog(C).trim();let W=!0,L=!0;if(i.getProgramParameter(p,35714)===!1){W=!1;const R=Go(i,S,"vertex"),I=Go(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+R+`
`+I)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||V==="")&&(L=!1);L&&(this.diagnostics={runnable:W,programLog:T,vertexShader:{log:D,prefix:f},fragmentShader:{log:V,prefix:x}})}i.deleteShader(S),i.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new ms(i,p)),P};let w;return this.getAttributes=function(){return w===void 0&&(w=Ef(i,p)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=xf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}let Ff=0;class Bf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Uf(t),e.set(t,n)),n}}class Uf{constructor(t){this.id=Ff++,this.code=t,this.usedTimes=0}}function Of(c,t,e,n,i,s,r){const o=new Sr,a=new Bf,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w,T,D,V,W){const L=V.fog,R=W.geometry,I=w.isMeshStandardMaterial?V.environment:null,N=(w.isMeshStandardMaterial?e:t).get(w.envMap||I),Z=N&&N.mapping===ys?N.image.height:null,O=g[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,K=q!==void 0?q.length:0;let st=0;R.morphAttributes.position!==void 0&&(st=1),R.morphAttributes.normal!==void 0&&(st=2),R.morphAttributes.color!==void 0&&(st=3);let z,J,nt,U;if(O){const At=Ke[O];z=At.vertexShader,J=At.fragmentShader}else z=w.vertexShader,J=w.fragmentShader,a.update(w),nt=a.getVertexShaderID(w),U=a.getFragmentShaderID(w);const ht=c.getRenderTarget(),ut=w.alphaTest>0,ft=w.clearcoat>0,pt=w.iridescence>0;return{isWebGL2:h,shaderID:O,shaderName:w.type,vertexShader:z,fragmentShader:J,defines:w.defines,customVertexShaderID:nt,customFragmentShaderID:U,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:u,outputEncoding:ht===null?c.outputEncoding:ht.isXRRenderTarget===!0?ht.texture.encoding:Vn,map:!!w.map,matcap:!!w.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:Z,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===ec,tangentSpaceNormalMap:w.normalMapType===Ca,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===Gt,clearcoat:ft,clearcoatMap:ft&&!!w.clearcoatMap,clearcoatRoughnessMap:ft&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:ft&&!!w.clearcoatNormalMap,iridescence:pt,iridescenceMap:pt&&!!w.iridescenceMap,iridescenceThicknessMap:pt&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===ci,alphaMap:!!w.alphaMap,alphaTest:ut,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!R.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!L,useFog:w.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:st,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:c.shadowMap.enabled&&D.length>0,shadowMapType:c.shadowMap.type,toneMapping:w.toneMapped?c.toneMapping:pn,useLegacyLights:c.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===yn,flipSided:w.side===Ae,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)T.push(D),T.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(x(T,w),_(T,w),T.push(c.outputEncoding)),T.push(w.customProgramCacheKey),T.join()}function x(w,T){w.push(T.precision),w.push(T.outputEncoding),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.combine),w.push(T.vertexUvs),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function _(w,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.lightMap&&o.enable(7),T.aoMap&&o.enable(8),T.emissiveMap&&o.enable(9),T.bumpMap&&o.enable(10),T.normalMap&&o.enable(11),T.objectSpaceNormalMap&&o.enable(12),T.tangentSpaceNormalMap&&o.enable(13),T.clearcoat&&o.enable(14),T.clearcoatMap&&o.enable(15),T.clearcoatRoughnessMap&&o.enable(16),T.clearcoatNormalMap&&o.enable(17),T.iridescence&&o.enable(18),T.iridescenceMap&&o.enable(19),T.iridescenceThicknessMap&&o.enable(20),T.displacementMap&&o.enable(21),T.specularMap&&o.enable(22),T.roughnessMap&&o.enable(23),T.metalnessMap&&o.enable(24),T.gradientMap&&o.enable(25),T.alphaMap&&o.enable(26),T.alphaTest&&o.enable(27),T.vertexColors&&o.enable(28),T.vertexAlphas&&o.enable(29),T.vertexUvs&&o.enable(30),T.vertexTangents&&o.enable(31),T.uvsVertexOnly&&o.enable(32),w.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.specularIntensityMap&&o.enable(15),T.specularColorMap&&o.enable(16),T.transmission&&o.enable(17),T.transmissionMap&&o.enable(18),T.thicknessMap&&o.enable(19),T.sheen&&o.enable(20),T.sheenColorMap&&o.enable(21),T.sheenRoughnessMap&&o.enable(22),T.decodeVideoTexture&&o.enable(23),T.opaque&&o.enable(24),w.push(o.mask)}function y(w){const T=g[w.type];let D;if(T){const V=Ke[T];D=Sc.clone(V.uniforms)}else D=w.uniforms;return D}function M(w,T){let D;for(let V=0,W=l.length;V<W;V++){const L=l[V];if(L.cacheKey===T){D=L,++D.usedTimes;break}}return D===void 0&&(D=new Nf(c,T,w,s),l.push(D)),D}function S(w){if(--w.usedTimes===0){const T=l.indexOf(w);l[T]=l[l.length-1],l.pop(),w.destroy()}}function C(w){a.remove(w)}function P(){a.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:M,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:P}}function kf(){let c=new WeakMap;function t(s){let r=c.get(s);return r===void 0&&(r={},c.set(s,r)),r}function e(s){c.delete(s)}function n(s,r,o){c.get(s)[r]=o}function i(){c=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Gf(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function Xo(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function jo(){const c=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,m,g,p,f){let x=c[t];return x===void 0?(x={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:f},c[t]=x):(x.id=d.id,x.object=d,x.geometry=u,x.material=m,x.groupOrder=g,x.renderOrder=d.renderOrder,x.z=p,x.group=f),t++,x}function o(d,u,m,g,p,f){const x=r(d,u,m,g,p,f);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):e.push(x)}function a(d,u,m,g,p,f){const x=r(d,u,m,g,p,f);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):e.unshift(x)}function l(d,u){e.length>1&&e.sort(d||Gf),n.length>1&&n.sort(u||Xo),i.length>1&&i.sort(u||Xo)}function h(){for(let d=t,u=c.length;d<u;d++){const m=c[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:a,finish:h,sort:l}}function Vf(){let c=new WeakMap;function t(n,i){const s=c.get(n);let r;return s===void 0?(r=new jo,c.set(n,[r])):i>=s.length?(r=new jo,s.push(r)):r=s[i],r}function e(){c=new WeakMap}return{get:t,dispose:e}}function Wf(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Bt};break;case"SpotLight":e={position:new G,direction:new G,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new G,halfWidth:new G,halfHeight:new G};break}return c[t.id]=e,e}}}function Hf(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=e,e}}}let qf=0;function Xf(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function jf(c,t){const e=new Wf,n=Hf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new G);const s=new G,r=new Jt,o=new Jt;function a(h,d){let u=0,m=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,f=0,x=0,_=0,y=0,M=0,S=0,C=0,P=0,w=0;h.sort(Xf);const T=d===!0?Math.PI:1;for(let V=0,W=h.length;V<W;V++){const L=h[V],R=L.color,I=L.intensity,N=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=R.r*I*T,m+=R.g*I*T,g+=R.b*I*T;else if(L.isLightProbe)for(let O=0;O<9;O++)i.probe[O].addScaledVector(L.sh.coefficients[O],I);else if(L.isDirectionalLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const q=L.shadow,K=n.get(L);K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=L.shadow.matrix,M++}i.directional[p]=O,p++}else if(L.isSpotLight){const O=e.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(R).multiplyScalar(I*T),O.distance=N,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,i.spot[x]=O;const q=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,q.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[x]=q.matrix,L.castShadow){const K=n.get(L);K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,i.spotShadow[x]=K,i.spotShadowMap[x]=Z,C++}x++}else if(L.isRectAreaLight){const O=e.get(L);O.color.copy(R).multiplyScalar(I),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=O,_++}else if(L.isPointLight){const O=e.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*T),O.distance=L.distance,O.decay=L.decay,L.castShadow){const q=L.shadow,K=n.get(L);K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,K.shadowCameraNear=q.camera.near,K.shadowCameraFar=q.camera.far,i.pointShadow[f]=K,i.pointShadowMap[f]=Z,i.pointShadowMatrix[f]=L.shadow.matrix,S++}i.point[f]=O,f++}else if(L.isHemisphereLight){const O=e.get(L);O.skyColor.copy(L.color).multiplyScalar(I*T),O.groundColor.copy(L.groundColor).multiplyScalar(I*T),i.hemi[y]=O,y++}}_>0&&(t.isWebGL2||c.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==p||D.pointLength!==f||D.spotLength!==x||D.rectAreaLength!==_||D.hemiLength!==y||D.numDirectionalShadows!==M||D.numPointShadows!==S||D.numSpotShadows!==C||D.numSpotMaps!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=_,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+P-w,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=w,D.directionalLength=p,D.pointLength=f,D.spotLength=x,D.rectAreaLength=_,D.hemiLength=y,D.numDirectionalShadows=M,D.numPointShadows=S,D.numSpotShadows=C,D.numSpotMaps=P,i.version=qf++)}function l(h,d){let u=0,m=0,g=0,p=0,f=0;const x=d.matrixWorldInverse;for(let _=0,y=h.length;_<y;_++){const M=h[_];if(M.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),u++}else if(M.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),g++}else if(M.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),o.identity(),r.copy(M.matrixWorld),r.premultiply(x),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),m++}else if(M.isHemisphereLight){const S=i.hemi[f];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(x),f++}}}return{setup:a,setupView:l,state:i}}function Yo(c,t){const e=new jf(c,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function a(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Yf(c,t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Yo(c,t),e.set(s,[a])):r>=o.length?(a=new Yo(c,t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Zf extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $f extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jf=`uniform sampler2D shadow_pass;
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
}`;function Qf(c,t,e){let n=new Er;const i=new Ut,s=new Ut,r=new re,o=new Zf({depthPacking:tc}),a=new $f,l={},h=e.maxTextureSize,d={[Sn]:Ae,[Ae]:Sn,[yn]:yn},u=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Kf,fragmentShader:Jf}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new En;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new fn(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma,this.render=function(M,S,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;const P=c.getRenderTarget(),w=c.getActiveCubeFace(),T=c.getActiveMipmapLevel(),D=c.state;D.setBlending(wn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let V=0,W=M.length;V<W;V++){const L=M[V],R=L.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const I=R.getFrameExtents();if(i.multiply(I),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/I.x),i.x=s.x*I.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/I.y),i.y=s.y*I.y,R.mapSize.y=s.y)),R.map===null){const Z=this.type!==Ri?{minFilter:oe,magFilter:oe}:{};R.map=new Wn(i.x,i.y,Z),R.map.texture.name=L.name+".shadowMap",R.camera.updateProjectionMatrix()}c.setRenderTarget(R.map),c.clear();const N=R.getViewportCount();for(let Z=0;Z<N;Z++){const O=R.getViewport(Z);r.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),D.viewport(r),R.updateMatrices(L,Z),n=R.getFrustum(),y(S,C,R.camera,L,this.type)}R.isPointLightShadow!==!0&&this.type===Ri&&x(R,C),R.needsUpdate=!1}f.needsUpdate=!1,c.setRenderTarget(P,w,T)};function x(M,S){const C=t.update(p);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Wn(i.x,i.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,c.setRenderTarget(M.mapPass),c.clear(),c.renderBufferDirect(S,null,C,u,p,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,c.setRenderTarget(M.map),c.clear(),c.renderBufferDirect(S,null,C,m,p,null)}function _(M,S,C,P,w,T){let D=null;const V=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(V!==void 0)D=V;else if(D=C.isPointLight===!0?a:o,c.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const W=D.uuid,L=S.uuid;let R=l[W];R===void 0&&(R={},l[W]=R);let I=R[L];I===void 0&&(I=D.clone(),R[L]=I),D=I}return D.visible=S.visible,D.wireframe=S.wireframe,T===Ri?D.side=S.shadowSide!==null?S.shadowSide:S.side:D.side=S.shadowSide!==null?S.shadowSide:d[S.side],D.alphaMap=S.alphaMap,D.alphaTest=S.alphaTest,D.map=S.map,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,C.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(C.matrixWorld),D.nearDistance=P,D.farDistance=w),D}function y(M,S,C,P,w){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===Ri)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const V=t.update(M),W=M.material;if(Array.isArray(W)){const L=V.groups;for(let R=0,I=L.length;R<I;R++){const N=L[R],Z=W[N.materialIndex];if(Z&&Z.visible){const O=_(M,Z,P,C.near,C.far,w);c.renderBufferDirect(C,null,V,O,M,N)}}}else if(W.visible){const L=_(M,W,P,C.near,C.far,w);c.renderBufferDirect(C,null,V,L,M,null)}}const D=M.children;for(let V=0,W=D.length;V<W;V++)y(D[V],S,C,P,w)}}function tp(c,t,e){const n=e.isWebGL2;function i(){let F=!1;const X=new re;let Q=null;const ot=new re(0,0,0,0);return{setMask:function(dt){Q!==dt&&!F&&(c.colorMask(dt,dt,dt,dt),Q=dt)},setLocked:function(dt){F=dt},setClear:function(dt,Ot,ne,de,He){He===!0&&(dt*=de,Ot*=de,ne*=de),X.set(dt,Ot,ne,de),ot.equals(X)===!1&&(c.clearColor(dt,Ot,ne,de),ot.copy(X))},reset:function(){F=!1,Q=null,ot.set(-1,0,0,0)}}}function s(){let F=!1,X=null,Q=null,ot=null;return{setTest:function(dt){dt?ut(2929):ft(2929)},setMask:function(dt){X!==dt&&!F&&(c.depthMask(dt),X=dt)},setFunc:function(dt){if(Q!==dt){switch(dt){case bl:c.depthFunc(512);break;case Sl:c.depthFunc(519);break;case El:c.depthFunc(513);break;case fr:c.depthFunc(515);break;case Tl:c.depthFunc(514);break;case Al:c.depthFunc(518);break;case Cl:c.depthFunc(516);break;case Ll:c.depthFunc(517);break;default:c.depthFunc(515)}Q=dt}},setLocked:function(dt){F=dt},setClear:function(dt){ot!==dt&&(c.clearDepth(dt),ot=dt)},reset:function(){F=!1,X=null,Q=null,ot=null}}}function r(){let F=!1,X=null,Q=null,ot=null,dt=null,Ot=null,ne=null,de=null,He=null;return{setTest:function(qt){F||(qt?ut(2960):ft(2960))},setMask:function(qt){X!==qt&&!F&&(c.stencilMask(qt),X=qt)},setFunc:function(qt,Le,qe){(Q!==qt||ot!==Le||dt!==qe)&&(c.stencilFunc(qt,Le,qe),Q=qt,ot=Le,dt=qe)},setOp:function(qt,Le,qe){(Ot!==qt||ne!==Le||de!==qe)&&(c.stencilOp(qt,Le,qe),Ot=qt,ne=Le,de=qe)},setLocked:function(qt){F=qt},setClear:function(qt){He!==qt&&(c.clearStencil(qt),He=qt)},reset:function(){F=!1,X=null,Q=null,ot=null,dt=null,Ot=null,ne=null,de=null,He=null}}}const o=new i,a=new s,l=new r,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,p=[],f=null,x=!1,_=null,y=null,M=null,S=null,C=null,P=null,w=null,T=!1,D=null,V=null,W=null,L=null,R=null;const I=c.getParameter(35661);let N=!1,Z=0;const O=c.getParameter(7938);O.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(O)[1]),N=Z>=1):O.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),N=Z>=2);let q=null,K={};const st=c.getParameter(3088),z=c.getParameter(2978),J=new re().fromArray(st),nt=new re().fromArray(z);function U(F,X,Q){const ot=new Uint8Array(4),dt=c.createTexture();c.bindTexture(F,dt),c.texParameteri(F,10241,9728),c.texParameteri(F,10240,9728);for(let Ot=0;Ot<Q;Ot++)c.texImage2D(X+Ot,0,6408,1,1,0,6408,5121,ot);return dt}const ht={};ht[3553]=U(3553,3553,1),ht[34067]=U(34067,34069,6),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ut(2929),a.setFunc(fr),_e(!1),ue(Nr),ut(2884),he(wn);function ut(F){u[F]!==!0&&(c.enable(F),u[F]=!0)}function ft(F){u[F]!==!1&&(c.disable(F),u[F]=!1)}function pt(F,X){return m[F]!==X?(c.bindFramebuffer(F,X),m[F]=X,n&&(F===36009&&(m[36160]=X),F===36160&&(m[36009]=X)),!0):!1}function Mt(F,X){let Q=p,ot=!1;if(F)if(Q=g.get(X),Q===void 0&&(Q=[],g.set(X,Q)),F.isWebGLMultipleRenderTargets){const dt=F.texture;if(Q.length!==dt.length||Q[0]!==36064){for(let Ot=0,ne=dt.length;Ot<ne;Ot++)Q[Ot]=36064+Ot;Q.length=dt.length,ot=!0}}else Q[0]!==36064&&(Q[0]=36064,ot=!0);else Q[0]!==1029&&(Q[0]=1029,ot=!0);ot&&(e.isWebGL2?c.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function At(F){return f!==F?(c.useProgram(F),f=F,!0):!1}const Lt={[oi]:32774,[dl]:32778,[fl]:32779};if(n)Lt[Or]=32775,Lt[kr]=32776;else{const F=t.get("EXT_blend_minmax");F!==null&&(Lt[Or]=F.MIN_EXT,Lt[kr]=F.MAX_EXT)}const Nt={[pl]:0,[ml]:1,[gl]:768,[ba]:770,[wl]:776,[yl]:774,[xl]:772,[_l]:769,[Sa]:771,[Ml]:775,[vl]:773};function he(F,X,Q,ot,dt,Ot,ne,de){if(F===wn){x===!0&&(ft(3042),x=!1);return}if(x===!1&&(ut(3042),x=!0),F!==ul){if(F!==_||de!==T){if((y!==oi||C!==oi)&&(c.blendEquation(32774),y=oi,C=oi),de)switch(F){case ci:c.blendFuncSeparate(1,771,1,771);break;case Fr:c.blendFunc(1,1);break;case Br:c.blendFuncSeparate(0,769,0,1);break;case Ur:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ci:c.blendFuncSeparate(770,771,1,771);break;case Fr:c.blendFunc(770,1);break;case Br:c.blendFuncSeparate(0,769,0,1);break;case Ur:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,S=null,P=null,w=null,_=F,T=de}return}dt=dt||X,Ot=Ot||Q,ne=ne||ot,(X!==y||dt!==C)&&(c.blendEquationSeparate(Lt[X],Lt[dt]),y=X,C=dt),(Q!==M||ot!==S||Ot!==P||ne!==w)&&(c.blendFuncSeparate(Nt[Q],Nt[ot],Nt[Ot],Nt[ne]),M=Q,S=ot,P=Ot,w=ne),_=F,T=!1}function ze(F,X){F.side===yn?ft(2884):ut(2884);let Q=F.side===Ae;X&&(Q=!Q),_e(Q),F.blending===ci&&F.transparent===!1?he(wn):he(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),o.setMask(F.colorWrite);const ot=F.stencilWrite;l.setTest(ot),ot&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Vt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ut(32926):ft(32926)}function _e(F){D!==F&&(F?c.frontFace(2304):c.frontFace(2305),D=F)}function ue(F){F!==cl?(ut(2884),F!==V&&(F===Nr?c.cullFace(1029):F===hl?c.cullFace(1028):c.cullFace(1032))):ft(2884),V=F}function Ht(F){F!==W&&(N&&c.lineWidth(F),W=F)}function Vt(F,X,Q){F?(ut(32823),(L!==X||R!==Q)&&(c.polygonOffset(X,Q),L=X,R=Q)):ft(32823)}function We(F){F?ut(3089):ft(3089)}function Ne(F){F===void 0&&(F=33984+I-1),q!==F&&(c.activeTexture(F),q=F)}function A(F,X,Q){Q===void 0&&(q===null?Q=33984+I-1:Q=q);let ot=K[Q];ot===void 0&&(ot={type:void 0,texture:void 0},K[Q]=ot),(ot.type!==F||ot.texture!==X)&&(q!==Q&&(c.activeTexture(Q),q=Q),c.bindTexture(F,X||ht[F]),ot.type=F,ot.texture=X)}function b(){const F=K[q];F!==void 0&&F.type!==void 0&&(c.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{c.compressedTexImage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{c.compressedTexImage3D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{c.texSubImage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{c.texSubImage3D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{c.texStorage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{c.texStorage3D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{c.texImage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{c.texImage3D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(F){J.equals(F)===!1&&(c.scissor(F.x,F.y,F.z,F.w),J.copy(F))}function gt(F){nt.equals(F)===!1&&(c.viewport(F.x,F.y,F.z,F.w),nt.copy(F))}function It(F,X){let Q=d.get(X);Q===void 0&&(Q=new WeakMap,d.set(X,Q));let ot=Q.get(F);ot===void 0&&(ot=c.getUniformBlockIndex(X,F.name),Q.set(F,ot))}function Wt(F,X){const ot=d.get(X).get(F);h.get(X)!==ot&&(c.uniformBlockBinding(X,ot,F.__bindingPointIndex),h.set(X,ot))}function ee(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),n===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),u={},q=null,K={},m={},g=new WeakMap,p=[],f=null,x=!1,_=null,y=null,M=null,S=null,C=null,P=null,w=null,T=!1,D=null,V=null,W=null,L=null,R=null,J.set(0,0,c.canvas.width,c.canvas.height),nt.set(0,0,c.canvas.width,c.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:ut,disable:ft,bindFramebuffer:pt,drawBuffers:Mt,useProgram:At,setBlending:he,setMaterial:ze,setFlipSided:_e,setCullFace:ue,setLineWidth:Ht,setPolygonOffset:Vt,setScissorTest:We,activeTexture:Ne,bindTexture:A,unbindTexture:b,compressedTexImage2D:j,compressedTexImage3D:tt,texImage2D:mt,texImage3D:bt,updateUBOMapping:It,uniformBlockBinding:Wt,texStorage2D:$,texStorage3D:wt,texSubImage2D:et,texSubImage3D:rt,compressedTexSubImage2D:_t,compressedTexSubImage3D:lt,scissor:vt,viewport:gt,reset:ee}}function ep(c,t,e,n,i,s,r){const o=i.isWebGL2,a=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return x?new OffscreenCanvas(A,b):_s("canvas")}function y(A,b,j,tt){let et=1;if((A.width>tt||A.height>tt)&&(et=tt/Math.max(A.width,A.height)),et<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const rt=b?sc:Math.floor,_t=rt(et*A.width),lt=rt(et*A.height);p===void 0&&(p=_(_t,lt));const $=j?_(_t,lt):p;return $.width=_t,$.height=lt,$.getContext("2d").drawImage(A,0,0,_t,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_t+"x"+lt+")."),$}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function M(A){return mo(A.width)&&mo(A.height)}function S(A){return o?!1:A.wrapS!==Te||A.wrapT!==Te||A.minFilter!==oe&&A.minFilter!==Pe}function C(A,b){return A.generateMipmaps&&b&&A.minFilter!==oe&&A.minFilter!==Pe}function P(A){c.generateMipmap(A)}function w(A,b,j,tt,et=!1){if(o===!1)return b;if(A!==null){if(c[A]!==void 0)return c[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=b;return b===6403&&(j===5126&&(rt=33326),j===5131&&(rt=33325),j===5121&&(rt=33321)),b===33319&&(j===5126&&(rt=33328),j===5131&&(rt=33327),j===5121&&(rt=33323)),b===6408&&(j===5126&&(rt=34836),j===5131&&(rt=34842),j===5121&&(rt=tt===Gt&&et===!1?35907:32856),j===32819&&(rt=32854),j===32820&&(rt=32855)),(rt===33325||rt===33326||rt===33327||rt===33328||rt===34842||rt===34836)&&t.get("EXT_color_buffer_float"),rt}function T(A,b,j){return C(A,j)===!0||A.isFramebufferTexture&&A.minFilter!==oe&&A.minFilter!==Pe?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function D(A){return A===oe||A===Gr||A===Cs?9728:9729}function V(A){const b=A.target;b.removeEventListener("dispose",V),L(b),b.isVideoTexture&&g.delete(b)}function W(A){const b=A.target;b.removeEventListener("dispose",W),I(b)}function L(A){const b=n.get(A);if(b.__webglInit===void 0)return;const j=A.source,tt=f.get(j);if(tt){const et=tt[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(A),Object.keys(tt).length===0&&f.delete(j)}n.remove(A)}function R(A){const b=n.get(A);c.deleteTexture(b.__webglTexture);const j=A.source,tt=f.get(j);delete tt[b.__cacheKey],r.memory.textures--}function I(A){const b=A.texture,j=n.get(A),tt=n.get(b);if(tt.__webglTexture!==void 0&&(c.deleteTexture(tt.__webglTexture),r.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)c.deleteFramebuffer(j.__webglFramebuffer[et]),j.__webglDepthbuffer&&c.deleteRenderbuffer(j.__webglDepthbuffer[et]);else{if(c.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&c.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&c.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let et=0;et<j.__webglColorRenderbuffer.length;et++)j.__webglColorRenderbuffer[et]&&c.deleteRenderbuffer(j.__webglColorRenderbuffer[et]);j.__webglDepthRenderbuffer&&c.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let et=0,rt=b.length;et<rt;et++){const _t=n.get(b[et]);_t.__webglTexture&&(c.deleteTexture(_t.__webglTexture),r.memory.textures--),n.remove(b[et])}n.remove(b),n.remove(A)}let N=0;function Z(){N=0}function O(){const A=N;return A>=a&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a),N+=1,A}function q(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.encoding),b.join()}function K(A,b){const j=n.get(A);if(A.isVideoTexture&&We(A),A.isRenderTargetTexture===!1&&A.version>0&&j.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(j,A,b);return}}e.bindTexture(3553,j.__webglTexture,33984+b)}function st(A,b){const j=n.get(A);if(A.version>0&&j.__version!==A.version){ft(j,A,b);return}e.bindTexture(35866,j.__webglTexture,33984+b)}function z(A,b){const j=n.get(A);if(A.version>0&&j.__version!==A.version){ft(j,A,b);return}e.bindTexture(32879,j.__webglTexture,33984+b)}function J(A,b){const j=n.get(A);if(A.version>0&&j.__version!==A.version){pt(j,A,b);return}e.bindTexture(34067,j.__webglTexture,33984+b)}const nt={[gr]:10497,[Te]:33071,[_r]:33648},U={[oe]:9728,[Gr]:9984,[Cs]:9986,[Pe]:9729,[Bl]:9985,[Ii]:9987};function ht(A,b,j){if(j?(c.texParameteri(A,10242,nt[b.wrapS]),c.texParameteri(A,10243,nt[b.wrapT]),(A===32879||A===35866)&&c.texParameteri(A,32882,nt[b.wrapR]),c.texParameteri(A,10240,U[b.magFilter]),c.texParameteri(A,10241,U[b.minFilter])):(c.texParameteri(A,10242,33071),c.texParameteri(A,10243,33071),(A===32879||A===35866)&&c.texParameteri(A,32882,33071),(b.wrapS!==Te||b.wrapT!==Te)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(A,10240,D(b.magFilter)),c.texParameteri(A,10241,D(b.minFilter)),b.minFilter!==oe&&b.minFilter!==Pe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===oe||b.minFilter!==Cs&&b.minFilter!==Ii||b.type===Un&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===zi&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(c.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function ut(A,b){let j=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",V));const tt=b.source;let et=f.get(tt);et===void 0&&(et={},f.set(tt,et));const rt=q(b);if(rt!==A.__cacheKey){et[rt]===void 0&&(et[rt]={texture:c.createTexture(),usedTimes:0},r.memory.textures++,j=!0),et[rt].usedTimes++;const _t=et[A.__cacheKey];_t!==void 0&&(et[A.__cacheKey].usedTimes--,_t.usedTimes===0&&R(b)),A.__cacheKey=rt,A.__webglTexture=et[rt].texture}return j}function ft(A,b,j){let tt=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=35866),b.isData3DTexture&&(tt=32879);const et=ut(A,b),rt=b.source;e.bindTexture(tt,A.__webglTexture,33984+j);const _t=n.get(rt);if(rt.version!==_t.__version||et===!0){e.activeTexture(33984+j),c.pixelStorei(37440,b.flipY),c.pixelStorei(37441,b.premultiplyAlpha),c.pixelStorei(3317,b.unpackAlignment),c.pixelStorei(37443,0);const lt=S(b)&&M(b.image)===!1;let $=y(b.image,lt,!1,h);$=Ne(b,$);const wt=M($)||o,mt=s.convert(b.format,b.encoding);let bt=s.convert(b.type),vt=w(b.internalFormat,mt,bt,b.encoding,b.isVideoTexture);ht(tt,b,wt);let gt;const It=b.mipmaps,Wt=o&&b.isVideoTexture!==!0,ee=_t.__version===void 0||et===!0,F=T(b,$,wt);if(b.isDepthTexture)vt=6402,o?b.type===Un?vt=36012:b.type===Bn?vt=33190:b.type===hi?vt=35056:vt=33189:b.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===On&&vt===6402&&b.type!==Aa&&b.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Bn,bt=s.convert(b.type)),b.format===pi&&vt===6402&&(vt=34041,b.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=hi,bt=s.convert(b.type))),ee&&(Wt?e.texStorage2D(3553,1,vt,$.width,$.height):e.texImage2D(3553,0,vt,$.width,$.height,0,mt,bt,null));else if(b.isDataTexture)if(It.length>0&&wt){Wt&&ee&&e.texStorage2D(3553,F,vt,It[0].width,It[0].height);for(let X=0,Q=It.length;X<Q;X++)gt=It[X],Wt?e.texSubImage2D(3553,X,0,0,gt.width,gt.height,mt,bt,gt.data):e.texImage2D(3553,X,vt,gt.width,gt.height,0,mt,bt,gt.data);b.generateMipmaps=!1}else Wt?(ee&&e.texStorage2D(3553,F,vt,$.width,$.height),e.texSubImage2D(3553,0,0,0,$.width,$.height,mt,bt,$.data)):e.texImage2D(3553,0,vt,$.width,$.height,0,mt,bt,$.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Wt&&ee&&e.texStorage3D(35866,F,vt,It[0].width,It[0].height,$.depth);for(let X=0,Q=It.length;X<Q;X++)gt=It[X],b.format!==ke?mt!==null?Wt?e.compressedTexSubImage3D(35866,X,0,0,0,gt.width,gt.height,$.depth,mt,gt.data,0,0):e.compressedTexImage3D(35866,X,vt,gt.width,gt.height,$.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(35866,X,0,0,0,gt.width,gt.height,$.depth,mt,bt,gt.data):e.texImage3D(35866,X,vt,gt.width,gt.height,$.depth,0,mt,bt,gt.data)}else{Wt&&ee&&e.texStorage2D(3553,F,vt,It[0].width,It[0].height);for(let X=0,Q=It.length;X<Q;X++)gt=It[X],b.format!==ke?mt!==null?Wt?e.compressedTexSubImage2D(3553,X,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(3553,X,vt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(3553,X,0,0,gt.width,gt.height,mt,bt,gt.data):e.texImage2D(3553,X,vt,gt.width,gt.height,0,mt,bt,gt.data)}else if(b.isDataArrayTexture)Wt?(ee&&e.texStorage3D(35866,F,vt,$.width,$.height,$.depth),e.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,mt,bt,$.data)):e.texImage3D(35866,0,vt,$.width,$.height,$.depth,0,mt,bt,$.data);else if(b.isData3DTexture)Wt?(ee&&e.texStorage3D(32879,F,vt,$.width,$.height,$.depth),e.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,mt,bt,$.data)):e.texImage3D(32879,0,vt,$.width,$.height,$.depth,0,mt,bt,$.data);else if(b.isFramebufferTexture){if(ee)if(Wt)e.texStorage2D(3553,F,vt,$.width,$.height);else{let X=$.width,Q=$.height;for(let ot=0;ot<F;ot++)e.texImage2D(3553,ot,vt,X,Q,0,mt,bt,null),X>>=1,Q>>=1}}else if(It.length>0&&wt){Wt&&ee&&e.texStorage2D(3553,F,vt,It[0].width,It[0].height);for(let X=0,Q=It.length;X<Q;X++)gt=It[X],Wt?e.texSubImage2D(3553,X,0,0,mt,bt,gt):e.texImage2D(3553,X,vt,mt,bt,gt);b.generateMipmaps=!1}else Wt?(ee&&e.texStorage2D(3553,F,vt,$.width,$.height),e.texSubImage2D(3553,0,0,0,mt,bt,$)):e.texImage2D(3553,0,vt,mt,bt,$);C(b,wt)&&P(tt),_t.__version=rt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function pt(A,b,j){if(b.image.length!==6)return;const tt=ut(A,b),et=b.source;e.bindTexture(34067,A.__webglTexture,33984+j);const rt=n.get(et);if(et.version!==rt.__version||tt===!0){e.activeTexture(33984+j),c.pixelStorei(37440,b.flipY),c.pixelStorei(37441,b.premultiplyAlpha),c.pixelStorei(3317,b.unpackAlignment),c.pixelStorei(37443,0);const _t=b.isCompressedTexture||b.image[0].isCompressedTexture,lt=b.image[0]&&b.image[0].isDataTexture,$=[];for(let X=0;X<6;X++)!_t&&!lt?$[X]=y(b.image[X],!1,!0,l):$[X]=lt?b.image[X].image:b.image[X],$[X]=Ne(b,$[X]);const wt=$[0],mt=M(wt)||o,bt=s.convert(b.format,b.encoding),vt=s.convert(b.type),gt=w(b.internalFormat,bt,vt,b.encoding),It=o&&b.isVideoTexture!==!0,Wt=rt.__version===void 0||tt===!0;let ee=T(b,wt,mt);ht(34067,b,mt);let F;if(_t){It&&Wt&&e.texStorage2D(34067,ee,gt,wt.width,wt.height);for(let X=0;X<6;X++){F=$[X].mipmaps;for(let Q=0;Q<F.length;Q++){const ot=F[Q];b.format!==ke?bt!==null?It?e.compressedTexSubImage2D(34069+X,Q,0,0,ot.width,ot.height,bt,ot.data):e.compressedTexImage2D(34069+X,Q,gt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?e.texSubImage2D(34069+X,Q,0,0,ot.width,ot.height,bt,vt,ot.data):e.texImage2D(34069+X,Q,gt,ot.width,ot.height,0,bt,vt,ot.data)}}}else{F=b.mipmaps,It&&Wt&&(F.length>0&&ee++,e.texStorage2D(34067,ee,gt,$[0].width,$[0].height));for(let X=0;X<6;X++)if(lt){It?e.texSubImage2D(34069+X,0,0,0,$[X].width,$[X].height,bt,vt,$[X].data):e.texImage2D(34069+X,0,gt,$[X].width,$[X].height,0,bt,vt,$[X].data);for(let Q=0;Q<F.length;Q++){const dt=F[Q].image[X].image;It?e.texSubImage2D(34069+X,Q+1,0,0,dt.width,dt.height,bt,vt,dt.data):e.texImage2D(34069+X,Q+1,gt,dt.width,dt.height,0,bt,vt,dt.data)}}else{It?e.texSubImage2D(34069+X,0,0,0,bt,vt,$[X]):e.texImage2D(34069+X,0,gt,bt,vt,$[X]);for(let Q=0;Q<F.length;Q++){const ot=F[Q];It?e.texSubImage2D(34069+X,Q+1,0,0,bt,vt,ot.image[X]):e.texImage2D(34069+X,Q+1,gt,bt,vt,ot.image[X])}}}C(b,mt)&&P(34067),rt.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Mt(A,b,j,tt,et){const rt=s.convert(j.format,j.encoding),_t=s.convert(j.type),lt=w(j.internalFormat,rt,_t,j.encoding);n.get(b).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,lt,b.width,b.height,b.depth,0,rt,_t,null):e.texImage2D(et,0,lt,b.width,b.height,0,rt,_t,null)),e.bindFramebuffer(36160,A),Vt(b)?u.framebufferTexture2DMultisampleEXT(36160,tt,et,n.get(j).__webglTexture,0,Ht(b)):(et===3553||et>=34069&&et<=34074)&&c.framebufferTexture2D(36160,tt,et,n.get(j).__webglTexture,0),e.bindFramebuffer(36160,null)}function At(A,b,j){if(c.bindRenderbuffer(36161,A),b.depthBuffer&&!b.stencilBuffer){let tt=33189;if(j||Vt(b)){const et=b.depthTexture;et&&et.isDepthTexture&&(et.type===Un?tt=36012:et.type===Bn&&(tt=33190));const rt=Ht(b);Vt(b)?u.renderbufferStorageMultisampleEXT(36161,rt,tt,b.width,b.height):c.renderbufferStorageMultisample(36161,rt,tt,b.width,b.height)}else c.renderbufferStorage(36161,tt,b.width,b.height);c.framebufferRenderbuffer(36160,36096,36161,A)}else if(b.depthBuffer&&b.stencilBuffer){const tt=Ht(b);j&&Vt(b)===!1?c.renderbufferStorageMultisample(36161,tt,35056,b.width,b.height):Vt(b)?u.renderbufferStorageMultisampleEXT(36161,tt,35056,b.width,b.height):c.renderbufferStorage(36161,34041,b.width,b.height),c.framebufferRenderbuffer(36160,33306,36161,A)}else{const tt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let et=0;et<tt.length;et++){const rt=tt[et],_t=s.convert(rt.format,rt.encoding),lt=s.convert(rt.type),$=w(rt.internalFormat,_t,lt,rt.encoding),wt=Ht(b);j&&Vt(b)===!1?c.renderbufferStorageMultisample(36161,wt,$,b.width,b.height):Vt(b)?u.renderbufferStorageMultisampleEXT(36161,wt,$,b.width,b.height):c.renderbufferStorage(36161,$,b.width,b.height)}}c.bindRenderbuffer(36161,null)}function Lt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const tt=n.get(b.depthTexture).__webglTexture,et=Ht(b);if(b.depthTexture.format===On)Vt(b)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,et):c.framebufferTexture2D(36160,36096,3553,tt,0);else if(b.depthTexture.format===pi)Vt(b)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,et):c.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function Nt(A){const b=n.get(A),j=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Lt(b.__webglFramebuffer,A)}else if(j){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]=c.createRenderbuffer(),At(b.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=c.createRenderbuffer(),At(b.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function he(A,b,j){const tt=n.get(A);b!==void 0&&Mt(tt.__webglFramebuffer,A,A.texture,36064,3553),j!==void 0&&Nt(A)}function ze(A){const b=A.texture,j=n.get(A),tt=n.get(b);A.addEventListener("dispose",W),A.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=c.createTexture()),tt.__version=b.version,r.memory.textures++);const et=A.isWebGLCubeRenderTarget===!0,rt=A.isWebGLMultipleRenderTargets===!0,_t=M(A)||o;if(et){j.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)j.__webglFramebuffer[lt]=c.createFramebuffer()}else{if(j.__webglFramebuffer=c.createFramebuffer(),rt)if(i.drawBuffers){const lt=A.texture;for(let $=0,wt=lt.length;$<wt;$++){const mt=n.get(lt[$]);mt.__webglTexture===void 0&&(mt.__webglTexture=c.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Vt(A)===!1){const lt=rt?b:[b];j.__webglMultisampledFramebuffer=c.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let $=0;$<lt.length;$++){const wt=lt[$];j.__webglColorRenderbuffer[$]=c.createRenderbuffer(),c.bindRenderbuffer(36161,j.__webglColorRenderbuffer[$]);const mt=s.convert(wt.format,wt.encoding),bt=s.convert(wt.type),vt=w(wt.internalFormat,mt,bt,wt.encoding,A.isXRRenderTarget===!0),gt=Ht(A);c.renderbufferStorageMultisample(36161,gt,vt,A.width,A.height),c.framebufferRenderbuffer(36160,36064+$,36161,j.__webglColorRenderbuffer[$])}c.bindRenderbuffer(36161,null),A.depthBuffer&&(j.__webglDepthRenderbuffer=c.createRenderbuffer(),At(j.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,tt.__webglTexture),ht(34067,b,_t);for(let lt=0;lt<6;lt++)Mt(j.__webglFramebuffer[lt],A,b,36064,34069+lt);C(b,_t)&&P(34067),e.unbindTexture()}else if(rt){const lt=A.texture;for(let $=0,wt=lt.length;$<wt;$++){const mt=lt[$],bt=n.get(mt);e.bindTexture(3553,bt.__webglTexture),ht(3553,mt,_t),Mt(j.__webglFramebuffer,A,mt,36064+$,3553),C(mt,_t)&&P(3553)}e.unbindTexture()}else{let lt=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?lt=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,tt.__webglTexture),ht(lt,b,_t),Mt(j.__webglFramebuffer,A,b,36064,lt),C(b,_t)&&P(lt),e.unbindTexture()}A.depthBuffer&&Nt(A)}function _e(A){const b=M(A)||o,j=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let tt=0,et=j.length;tt<et;tt++){const rt=j[tt];if(C(rt,b)){const _t=A.isWebGLCubeRenderTarget?34067:3553,lt=n.get(rt).__webglTexture;e.bindTexture(_t,lt),P(_t),e.unbindTexture()}}}function ue(A){if(o&&A.samples>0&&Vt(A)===!1){const b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],j=A.width,tt=A.height;let et=16384;const rt=[],_t=A.stencilBuffer?33306:36096,lt=n.get(A),$=A.isWebGLMultipleRenderTargets===!0;if($)for(let wt=0;wt<b.length;wt++)e.bindFramebuffer(36160,lt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+wt,36161,null),e.bindFramebuffer(36160,lt.__webglFramebuffer),c.framebufferTexture2D(36009,36064+wt,3553,null,0);e.bindFramebuffer(36008,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,lt.__webglFramebuffer);for(let wt=0;wt<b.length;wt++){rt.push(36064+wt),A.depthBuffer&&rt.push(_t);const mt=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(mt===!1&&(A.depthBuffer&&(et|=256),A.stencilBuffer&&(et|=1024)),$&&c.framebufferRenderbuffer(36008,36064,36161,lt.__webglColorRenderbuffer[wt]),mt===!0&&(c.invalidateFramebuffer(36008,[_t]),c.invalidateFramebuffer(36009,[_t])),$){const bt=n.get(b[wt]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,bt,0)}c.blitFramebuffer(0,0,j,tt,0,0,j,tt,et,9728),m&&c.invalidateFramebuffer(36008,rt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),$)for(let wt=0;wt<b.length;wt++){e.bindFramebuffer(36160,lt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+wt,36161,lt.__webglColorRenderbuffer[wt]);const mt=n.get(b[wt]).__webglTexture;e.bindFramebuffer(36160,lt.__webglFramebuffer),c.framebufferTexture2D(36009,36064+wt,3553,mt,0)}e.bindFramebuffer(36009,lt.__webglMultisampledFramebuffer)}}function Ht(A){return Math.min(d,A.samples)}function Vt(A){const b=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function We(A){const b=r.render.frame;g.get(A)!==b&&(g.set(A,b),A.update())}function Ne(A,b){const j=A.encoding,tt=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===xr||j!==Vn&&(j===Gt?o===!1?t.has("EXT_sRGB")===!0&&tt===ke?(A.format=xr,A.minFilter=Pe,A.generateMipmaps=!1):b=Pa.sRGBToLinear(b):(tt!==ke||et!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),b}this.allocateTextureUnit=O,this.resetTextureUnits=Z,this.setTexture2D=K,this.setTexture2DArray=st,this.setTexture3D=z,this.setTextureCube=J,this.rebindTextures=he,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Vt}function np(c,t,e){const n=e.isWebGL2;function i(s,r=null){let o;if(s===Gn)return 5121;if(s===Gl)return 32819;if(s===Vl)return 32820;if(s===Ul)return 5120;if(s===Ol)return 5122;if(s===Aa)return 5123;if(s===kl)return 5124;if(s===Bn)return 5125;if(s===Un)return 5126;if(s===zi)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Wl)return 6406;if(s===ke)return 6408;if(s===Hl)return 6409;if(s===ql)return 6410;if(s===On)return 6402;if(s===pi)return 34041;if(s===xr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Xl)return 6403;if(s===jl)return 36244;if(s===Yl)return 33319;if(s===Zl)return 33320;if(s===$l)return 36249;if(s===Ls||s===Rs||s===Ps||s===Ds)if(r===Gt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ls)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ls)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ps)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ds)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vr||s===Wr||s===Hr||s===qr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Vr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Wr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kl)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xr||s===jr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Xr)return r===Gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===jr)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yr||s===Zr||s===$r||s===Kr||s===Jr||s===Qr||s===to||s===eo||s===no||s===io||s===so||s===ro||s===oo||s===ao)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Yr)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zr)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$r)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kr)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jr)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qr)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===to)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===eo)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===no)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===io)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===so)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ro)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===oo)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ao)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Is)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Is)return r===Gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Jl||s===lo||s===co||s===ho)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Is)return o.COMPRESSED_RED_RGTC1_EXT;if(s===lo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===co)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ho)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hi?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):c[s]!==void 0?c[s]:null}return{convert:i}}class ip extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class cs extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sp={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,a=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const p of t.hand.values()){const f=e.getJointPose(p,n),x=this._getHandJoint(l,p);f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new cs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class rp extends ve{constructor(t,e,n,i,s,r,o,a,l,h){if(h=h!==void 0?h:On,h!==On&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===On&&(n=Bn),n===void 0&&h===pi&&(n=hi),super(null,i,s,r,o,a,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:oe,this.minFilter=a!==void 0?a:oe,this.flipY=!1,this.generateMipmaps=!1}}class op extends gi{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",a=1,l=null,h=null,d=null,u=null,m=null,g=null;const p=e.getContextAttributes();let f=null,x=null;const _=[],y=[],M=new Set,S=new Map,C=new De;C.layers.enable(1),C.viewport=new re;const P=new De;P.layers.enable(2),P.viewport=new re;const w=[C,P],T=new ip;T.layers.enable(1),T.layers.enable(2);let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let J=_[z];return J===void 0&&(J=new rr,_[z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(z){let J=_[z];return J===void 0&&(J=new rr,_[z]=J),J.getGripSpace()},this.getHand=function(z){let J=_[z];return J===void 0&&(J=new rr,_[z]=J),J.getHandSpace()};function W(z){const J=y.indexOf(z.inputSource);if(J===-1)return;const nt=_[J];nt!==void 0&&nt.dispatchEvent({type:z.type,data:z.inputSource})}function L(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",R);for(let z=0;z<_.length;z++){const J=y[z];J!==null&&(y[z]=null,_[z].disconnect(J))}D=null,V=null,t.setRenderTarget(f),m=null,u=null,d=null,i=null,x=null,st.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",L),i.addEventListener("inputsourceschange",R),p.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:m}),x=new Wn(m.framebufferWidth,m.framebufferHeight,{format:ke,type:Gn,encoding:t.outputEncoding,stencilBuffer:p.stencil})}else{let J=null,nt=null,U=null;p.depth&&(U=p.stencil?35056:33190,J=p.stencil?pi:On,nt=p.stencil?hi:Bn);const ht={colorFormat:32856,depthFormat:U,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(ht),i.updateRenderState({layers:[u]}),x=new Wn(u.textureWidth,u.textureHeight,{format:ke,type:Gn,depthTexture:new rp(u.textureWidth,u.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const ut=t.properties.get(x);ut.__ignoreDepthValues=u.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(a),l=null,r=await i.requestReferenceSpace(o),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(z){for(let J=0;J<z.removed.length;J++){const nt=z.removed[J],U=y.indexOf(nt);U>=0&&(y[U]=null,_[U].disconnect(nt))}for(let J=0;J<z.added.length;J++){const nt=z.added[J];let U=y.indexOf(nt);if(U===-1){for(let ut=0;ut<_.length;ut++)if(ut>=y.length){y.push(nt),U=ut;break}else if(y[ut]===null){y[ut]=nt,U=ut;break}if(U===-1)break}const ht=_[U];ht&&ht.connect(nt)}}const I=new G,N=new G;function Z(z,J,nt){I.setFromMatrixPosition(J.matrixWorld),N.setFromMatrixPosition(nt.matrixWorld);const U=I.distanceTo(N),ht=J.projectionMatrix.elements,ut=nt.projectionMatrix.elements,ft=ht[14]/(ht[10]-1),pt=ht[14]/(ht[10]+1),Mt=(ht[9]+1)/ht[5],At=(ht[9]-1)/ht[5],Lt=(ht[8]-1)/ht[0],Nt=(ut[8]+1)/ut[0],he=ft*Lt,ze=ft*Nt,_e=U/(-Lt+Nt),ue=_e*-Lt;J.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ue),z.translateZ(_e),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Ht=ft+_e,Vt=pt+_e,We=he-ue,Ne=ze+(U-ue),A=Mt*pt/Vt*Ht,b=At*pt/Vt*Ht;z.projectionMatrix.makePerspective(We,Ne,A,b,Ht,Vt)}function O(z,J){J===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(J.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;T.near=P.near=C.near=z.near,T.far=P.far=C.far=z.far,(D!==T.near||V!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,V=T.far);const J=z.parent,nt=T.cameras;O(T,J);for(let ht=0;ht<nt.length;ht++)O(nt[ht],J);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),z.matrix.copy(T.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const U=z.children;for(let ht=0,ut=U.length;ht<ut;ht++)U[ht].updateMatrixWorld(!0);nt.length===2?Z(T,C,P):T.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(u===null&&m===null))return a},this.setFoveation=function(z){a=z,u!==null&&(u.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.getPlanes=function(){return M};let q=null;function K(z,J){if(h=J.getViewerPose(l||r),g=J,h!==null){const nt=h.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let U=!1;nt.length!==T.cameras.length&&(T.cameras.length=0,U=!0);for(let ht=0;ht<nt.length;ht++){const ut=nt[ht];let ft=null;if(m!==null)ft=m.getViewport(ut);else{const Mt=d.getViewSubImage(u,ut);ft=Mt.viewport,ht===0&&(t.setRenderTargetTextures(x,Mt.colorTexture,u.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(x))}let pt=w[ht];pt===void 0&&(pt=new De,pt.layers.enable(ht),pt.viewport=new re,w[ht]=pt),pt.matrix.fromArray(ut.transform.matrix),pt.projectionMatrix.fromArray(ut.projectionMatrix),pt.viewport.set(ft.x,ft.y,ft.width,ft.height),ht===0&&T.matrix.copy(pt.matrix),U===!0&&T.cameras.push(pt)}}for(let nt=0;nt<_.length;nt++){const U=y[nt],ht=_[nt];U!==null&&ht!==void 0&&ht.update(U,J,l||r)}if(q&&q(z,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let nt=null;for(const U of M)J.detectedPlanes.has(U)||(nt===null&&(nt=[]),nt.push(U));if(nt!==null)for(const U of nt)M.delete(U),S.delete(U),n.dispatchEvent({type:"planeremoved",data:U});for(const U of J.detectedPlanes)if(!M.has(U))M.add(U),S.set(U,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:U});else{const ht=S.get(U);U.lastChangedTime>ht&&(S.set(U,U.lastChangedTime),n.dispatchEvent({type:"planechanged",data:U}))}}g=null}const st=new Va;st.setAnimationLoop(K),this.setAnimationLoop=function(z){q=z},this.dispose=function(){}}}function ap(c,t){function e(p,f){f.color.getRGB(p.fogColor.value,Oa(c)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,x,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&u(p,f,y)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&r(p,f)):f.isPointsMaterial?o(p,f,x,_):f.isSpriteMaterial?a(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ae&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ae&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const M=c.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*M}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let _;f.map?_=f.map:f.specularMap?_=f.specularMap:f.displacementMap?_=f.displacementMap:f.normalMap?_=f.normalMap:f.bumpMap?_=f.bumpMap:f.roughnessMap?_=f.roughnessMap:f.metalnessMap?_=f.metalnessMap:f.alphaMap?_=f.alphaMap:f.emissiveMap?_=f.emissiveMap:f.clearcoatMap?_=f.clearcoatMap:f.clearcoatNormalMap?_=f.clearcoatNormalMap:f.clearcoatRoughnessMap?_=f.clearcoatRoughnessMap:f.iridescenceMap?_=f.iridescenceMap:f.iridescenceThicknessMap?_=f.iridescenceThicknessMap:f.specularIntensityMap?_=f.specularIntensityMap:f.specularColorMap?_=f.specularColorMap:f.transmissionMap?_=f.transmissionMap:f.thicknessMap?_=f.thicknessMap:f.sheenColorMap?_=f.sheenColorMap:f.sheenRoughnessMap&&(_=f.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix));let y;f.aoMap?y=f.aoMap:f.lightMap&&(y=f.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function r(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,x,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=_*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y;f.map?y=f.map:f.alphaMap&&(y=f.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ae&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function lp(c,t,e,n){let i={},s={},r=[];const o=e.isWebGL2?c.getParameter(35375):0;function a(_,y){const M=y.program;n.uniformBlockBinding(_,M)}function l(_,y){let M=i[_.id];M===void 0&&(g(_),M=h(_),i[_.id]=M,_.addEventListener("dispose",f));const S=y.program;n.updateUBOMapping(_,S);const C=t.render.frame;s[_.id]!==C&&(u(_),s[_.id]=C)}function h(_){const y=d();_.__bindingPointIndex=y;const M=c.createBuffer(),S=_.__size,C=_.usage;return c.bindBuffer(35345,M),c.bufferData(35345,S,C),c.bindBuffer(35345,null),c.bindBufferBase(35345,y,M),M}function d(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const y=i[_.id],M=_.uniforms,S=_.__cache;c.bindBuffer(35345,y);for(let C=0,P=M.length;C<P;C++){const w=M[C];if(m(w,C,S)===!0){const T=w.__offset,D=Array.isArray(w.value)?w.value:[w.value];let V=0;for(let W=0;W<D.length;W++){const L=D[W],R=p(L);typeof L=="number"?(w.__data[0]=L,c.bufferSubData(35345,T+V,w.__data)):L.isMatrix3?(w.__data[0]=L.elements[0],w.__data[1]=L.elements[1],w.__data[2]=L.elements[2],w.__data[3]=L.elements[0],w.__data[4]=L.elements[3],w.__data[5]=L.elements[4],w.__data[6]=L.elements[5],w.__data[7]=L.elements[0],w.__data[8]=L.elements[6],w.__data[9]=L.elements[7],w.__data[10]=L.elements[8],w.__data[11]=L.elements[0]):(L.toArray(w.__data,V),V+=R.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(35345,T,w.__data)}}c.bindBuffer(35345,null)}function m(_,y,M){const S=_.value;if(M[y]===void 0){if(typeof S=="number")M[y]=S;else{const C=Array.isArray(S)?S:[S],P=[];for(let w=0;w<C.length;w++)P.push(C[w].clone());M[y]=P}return!0}else if(typeof S=="number"){if(M[y]!==S)return M[y]=S,!0}else{const C=Array.isArray(M[y])?M[y]:[M[y]],P=Array.isArray(S)?S:[S];for(let w=0;w<C.length;w++){const T=C[w];if(T.equals(P[w])===!1)return T.copy(P[w]),!0}}return!1}function g(_){const y=_.uniforms;let M=0;const S=16;let C=0;for(let P=0,w=y.length;P<w;P++){const T=y[P],D={boundary:0,storage:0},V=Array.isArray(T.value)?T.value:[T.value];for(let W=0,L=V.length;W<L;W++){const R=V[W],I=p(R);D.boundary+=I.boundary,D.storage+=I.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,P>0){C=M%S;const W=S-C;C!==0&&W-D.boundary<0&&(M+=S-C,T.__offset=M)}M+=D.storage}return C=M%S,C>0&&(M+=S-C),_.__size=M,_.__cache={},this}function p(_){const y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function f(_){const y=_.target;y.removeEventListener("dispose",f);const M=r.indexOf(y.__bindingPointIndex);r.splice(M,1),c.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function x(){for(const _ in i)c.deleteBuffer(i[_]);r=[],i={},s={}}return{bind:a,update:l,dispose:x}}function cp(){const c=_s("canvas");return c.style.display="block",c}function Cr(c={}){this.isWebGLRenderer=!0;const t=c.canvas!==void 0?c.canvas:cp(),e=c.context!==void 0?c.context:null,n=c.depth!==void 0?c.depth:!0,i=c.stencil!==void 0?c.stencil:!0,s=c.antialias!==void 0?c.antialias:!1,r=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,o=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,a=c.powerPreference!==void 0?c.powerPreference:"default",l=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=c.alpha!==void 0?c.alpha:!1;let d=null,u=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Vn,this.useLegacyLights=!0,this.toneMapping=pn,this.toneMappingExposure=1;const p=this;let f=!1,x=0,_=0,y=null,M=-1,S=null;const C=new re,P=new re;let w=null,T=t.width,D=t.height,V=1,W=null,L=null;const R=new re(0,0,T,D),I=new re(0,0,T,D);let N=!1;const Z=new Er;let O=!1,q=!1,K=null;const st=new Jt,z=new G,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return y===null?V:1}let U=e;function ht(E,k){for(let H=0;H<E.length;H++){const B=E[H],Y=t.getContext(B,k);if(Y!==null)return Y}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:a,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wr}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",gt,!1),U===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),U=ht(k,E),U===null)throw ht(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ut,ft,pt,Mt,At,Lt,Nt,he,ze,_e,ue,Ht,Vt,We,Ne,A,b,j,tt,et,rt,_t,lt,$;function wt(){ut=new vd(U),ft=new fd(U,ut,c),ut.init(ft),_t=new np(U,ut,ft),pt=new tp(U,ut,ft),Mt=new wd,At=new kf,Lt=new ep(U,ut,pt,At,ft,_t,Mt),Nt=new md(p),he=new xd(p),ze=new Pc(U,ft),lt=new ud(U,ut,ze,ft),_e=new yd(U,ze,Mt,lt),ue=new Td(U,_e,ze,Mt),tt=new Ed(U,ft,Lt),A=new pd(At),Ht=new Of(p,Nt,he,ut,ft,lt,A),Vt=new ap(p,At),We=new Vf,Ne=new Yf(ut,ft),j=new hd(p,Nt,he,pt,ue,h,r),b=new Qf(p,ue,ft),$=new lp(U,Mt,ft,pt),et=new dd(U,ut,Mt,ft),rt=new Md(U,ut,Mt,ft),Mt.programs=Ht.programs,p.capabilities=ft,p.extensions=ut,p.properties=At,p.renderLists=We,p.shadowMap=b,p.state=pt,p.info=Mt}wt();const mt=new op(p,U);this.xr=mt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=ut.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ut.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(T,D,!1))},this.getSize=function(E){return E.set(T,D)},this.setSize=function(E,k,H=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,D=k,t.width=Math.floor(E*V),t.height=Math.floor(k*V),H===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(T*V,D*V).floor()},this.setDrawingBufferSize=function(E,k,H){T=E,D=k,V=H,t.width=Math.floor(E*H),t.height=Math.floor(k*H),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,k,H,B){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,k,H,B),pt.viewport(C.copy(R).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(I)},this.setScissor=function(E,k,H,B){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,k,H,B),pt.scissor(P.copy(I).multiplyScalar(V).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(E){pt.setScissorTest(N=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){L=E},this.getClearColor=function(E){return E.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(E=!0,k=!0,H=!0){let B=0;E&&(B|=16384),k&&(B|=256),H&&(B|=1024),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),We.dispose(),Ne.dispose(),At.dispose(),Nt.dispose(),he.dispose(),ue.dispose(),lt.dispose(),$.dispose(),Ht.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Q),mt.removeEventListener("sessionend",ot),K&&(K.dispose(),K=null),dt.stop()};function bt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const E=Mt.autoReset,k=b.enabled,H=b.autoUpdate,B=b.needsUpdate,Y=b.type;wt(),Mt.autoReset=E,b.enabled=k,b.autoUpdate=H,b.needsUpdate=B,b.type=Y}function gt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function It(E){const k=E.target;k.removeEventListener("dispose",It),Wt(k)}function Wt(E){ee(E),At.remove(E)}function ee(E){const k=At.get(E).programs;k!==void 0&&(k.forEach(function(H){Ht.releaseProgram(H)}),E.isShaderMaterial&&Ht.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,H,B,Y,xt){k===null&&(k=J);const St=Y.isMesh&&Y.matrixWorld.determinant()<0,Tt=rl(E,k,H,B,Y);pt.setMaterial(B,St);let Ct=H.index,zt=1;B.wireframe===!0&&(Ct=_e.getWireframeAttribute(H),zt=2);const Rt=H.drawRange,Pt=H.attributes.position;let Xt=Rt.start*zt,ye=(Rt.start+Rt.count)*zt;xt!==null&&(Xt=Math.max(Xt,xt.start*zt),ye=Math.min(ye,(xt.start+xt.count)*zt)),Ct!==null?(Xt=Math.max(Xt,0),ye=Math.min(ye,Ct.count)):Pt!=null&&(Xt=Math.max(Xt,0),ye=Math.min(ye,Pt.count));const tn=ye-Xt;if(tn<0||tn===1/0)return;lt.setup(Y,B,Tt,H,Ct);let Tn,jt=et;if(Ct!==null&&(Tn=ze.get(Ct),jt=rt,jt.setIndex(Tn)),Y.isMesh)B.wireframe===!0?(pt.setLineWidth(B.wireframeLinewidth*nt()),jt.setMode(1)):jt.setMode(4);else if(Y.isLine){let Dt=B.linewidth;Dt===void 0&&(Dt=1),pt.setLineWidth(Dt*nt()),Y.isLineSegments?jt.setMode(1):Y.isLineLoop?jt.setMode(2):jt.setMode(3)}else Y.isPoints?jt.setMode(0):Y.isSprite&&jt.setMode(4);if(Y.isInstancedMesh)jt.renderInstances(Xt,tn,Y.count);else if(H.isInstancedBufferGeometry){const Dt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ss=Math.min(H.instanceCount,Dt);jt.renderInstances(Xt,tn,Ss)}else jt.render(Xt,tn)},this.compile=function(E,k){function H(B,Y,xt){B.transparent===!0&&B.side===yn&&B.forceSinglePass===!1?(B.side=Ae,B.needsUpdate=!0,Le(B,Y,xt),B.side=Sn,B.needsUpdate=!0,Le(B,Y,xt),B.side=yn):Le(B,Y,xt)}u=Ne.get(E),u.init(),g.push(u),E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights(p.useLegacyLights),E.traverse(function(B){const Y=B.material;if(Y)if(Array.isArray(Y))for(let xt=0;xt<Y.length;xt++){const St=Y[xt];H(St,E,B)}else H(Y,E,B)}),g.pop(),u=null};let F=null;function X(E){F&&F(E)}function Q(){dt.stop()}function ot(){dt.start()}const dt=new Va;dt.setAnimationLoop(X),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(E){F=E,mt.setAnimationLoop(E),E===null?dt.stop():dt.start()},mt.addEventListener("sessionstart",Q),mt.addEventListener("sessionend",ot),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(k),k=mt.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,k,y),u=Ne.get(E,g.length),u.init(),g.push(u),st.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Z.setFromProjectionMatrix(st),q=this.localClippingEnabled,O=A.init(this.clippingPlanes,q),d=We.get(E,m.length),d.init(),m.push(d),Ot(E,k,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(W,L),O===!0&&A.beginShadows();const H=u.state.shadowsArray;if(b.render(H,E,k),O===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(d,E),u.setupLights(p.useLegacyLights),k.isArrayCamera){const B=k.cameras;for(let Y=0,xt=B.length;Y<xt;Y++){const St=B[Y];ne(d,E,St,St.viewport)}}else ne(d,E,k);y!==null&&(Lt.updateMultisampleRenderTarget(y),Lt.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(p,E,k),lt.resetDefaultState(),M=-1,S=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Ot(E,k,H,B){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){B&&z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(st);const St=ue.update(E),Tt=E.material;Tt.visible&&d.push(E,St,Tt,H,z.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Mt.render.frame&&(E.skeleton.update(),E.skeleton.frame=Mt.render.frame),!E.frustumCulled||Z.intersectsObject(E))){B&&z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(st);const St=ue.update(E),Tt=E.material;if(Array.isArray(Tt)){const Ct=St.groups;for(let zt=0,Rt=Ct.length;zt<Rt;zt++){const Pt=Ct[zt],Xt=Tt[Pt.materialIndex];Xt&&Xt.visible&&d.push(E,St,Xt,H,z.z,Pt)}}else Tt.visible&&d.push(E,St,Tt,H,z.z,null)}}const xt=E.children;for(let St=0,Tt=xt.length;St<Tt;St++)Ot(xt[St],k,H,B)}function ne(E,k,H,B){const Y=E.opaque,xt=E.transmissive,St=E.transparent;u.setupLightsView(H),O===!0&&A.setGlobalState(p.clippingPlanes,H),xt.length>0&&de(Y,k,H),B&&pt.viewport(C.copy(B)),Y.length>0&&He(Y,k,H),xt.length>0&&He(xt,k,H),St.length>0&&He(St,k,H),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function de(E,k,H){const B=ft.isWebGL2;K===null&&(K=new Wn(1024,1024,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")?zi:Gn,minFilter:Ii,samples:B&&s===!0?4:0}));const Y=p.getRenderTarget();p.setRenderTarget(K),p.clear();const xt=p.toneMapping;p.toneMapping=pn,He(E,k,H),p.toneMapping=xt,Lt.updateMultisampleRenderTarget(K),Lt.updateRenderTargetMipmap(K),p.setRenderTarget(Y)}function He(E,k,H){const B=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,xt=E.length;Y<xt;Y++){const St=E[Y],Tt=St.object,Ct=St.geometry,zt=B===null?St.material:B,Rt=St.group;Tt.layers.test(H.layers)&&qt(Tt,k,H,Ct,zt,Rt)}}function qt(E,k,H,B,Y,xt){E.onBeforeRender(p,k,H,B,Y,xt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(p,k,H,B,E,xt),Y.transparent===!0&&Y.side===yn&&Y.forceSinglePass===!1?(Y.side=Ae,Y.needsUpdate=!0,p.renderBufferDirect(H,k,B,Y,E,xt),Y.side=Sn,Y.needsUpdate=!0,p.renderBufferDirect(H,k,B,Y,E,xt),Y.side=yn):p.renderBufferDirect(H,k,B,Y,E,xt),E.onAfterRender(p,k,H,B,Y,xt)}function Le(E,k,H){k.isScene!==!0&&(k=J);const B=At.get(E),Y=u.state.lights,xt=u.state.shadowsArray,St=Y.state.version,Tt=Ht.getParameters(E,Y.state,xt,k,H),Ct=Ht.getProgramCacheKey(Tt);let zt=B.programs;B.environment=E.isMeshStandardMaterial?k.environment:null,B.fog=k.fog,B.envMap=(E.isMeshStandardMaterial?he:Nt).get(E.envMap||B.environment),zt===void 0&&(E.addEventListener("dispose",It),zt=new Map,B.programs=zt);let Rt=zt.get(Ct);if(Rt!==void 0){if(B.currentProgram===Rt&&B.lightsStateVersion===St)return qe(E,Tt),Rt}else Tt.uniforms=Ht.getUniforms(E),E.onBuild(H,Tt,p),E.onBeforeCompile(Tt,p),Rt=Ht.acquireProgram(Tt,Ct),zt.set(Ct,Rt),B.uniforms=Tt.uniforms;const Pt=B.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=A.uniform),qe(E,Tt),B.needsLights=al(E),B.lightsStateVersion=St,B.needsLights&&(Pt.ambientLightColor.value=Y.state.ambient,Pt.lightProbe.value=Y.state.probe,Pt.directionalLights.value=Y.state.directional,Pt.directionalLightShadows.value=Y.state.directionalShadow,Pt.spotLights.value=Y.state.spot,Pt.spotLightShadows.value=Y.state.spotShadow,Pt.rectAreaLights.value=Y.state.rectArea,Pt.ltc_1.value=Y.state.rectAreaLTC1,Pt.ltc_2.value=Y.state.rectAreaLTC2,Pt.pointLights.value=Y.state.point,Pt.pointLightShadows.value=Y.state.pointShadow,Pt.hemisphereLights.value=Y.state.hemi,Pt.directionalShadowMap.value=Y.state.directionalShadowMap,Pt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Pt.spotShadowMap.value=Y.state.spotShadowMap,Pt.spotLightMatrix.value=Y.state.spotLightMatrix,Pt.spotLightMap.value=Y.state.spotLightMap,Pt.pointShadowMap.value=Y.state.pointShadowMap,Pt.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Xt=Rt.getUniforms(),ye=ms.seqWithValue(Xt.seq,Pt);return B.currentProgram=Rt,B.uniformsList=ye,Rt}function qe(E,k){const H=At.get(E);H.outputEncoding=k.outputEncoding,H.instancing=k.instancing,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function rl(E,k,H,B,Y){k.isScene!==!0&&(k=J),Lt.resetTextureUnits();const xt=k.fog,St=B.isMeshStandardMaterial?k.environment:null,Tt=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Vn,Ct=(B.isMeshStandardMaterial?he:Nt).get(B.envMap||St),zt=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Rt=!!B.normalMap&&!!H.attributes.tangent,Pt=!!H.morphAttributes.position,Xt=!!H.morphAttributes.normal,ye=!!H.morphAttributes.color,tn=B.toneMapped?p.toneMapping:pn,Tn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,jt=Tn!==void 0?Tn.length:0,Dt=At.get(B),Ss=u.state.lights;if(O===!0&&(q===!0||E!==S)){const Me=E===S&&B.id===M;A.setState(B,E,Me)}let ie=!1;B.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ss.state.version||Dt.outputEncoding!==Tt||Y.isInstancedMesh&&Dt.instancing===!1||!Y.isInstancedMesh&&Dt.instancing===!0||Y.isSkinnedMesh&&Dt.skinning===!1||!Y.isSkinnedMesh&&Dt.skinning===!0||Dt.envMap!==Ct||B.fog===!0&&Dt.fog!==xt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==A.numPlanes||Dt.numIntersection!==A.numIntersection)||Dt.vertexAlphas!==zt||Dt.vertexTangents!==Rt||Dt.morphTargets!==Pt||Dt.morphNormals!==Xt||Dt.morphColors!==ye||Dt.toneMapping!==tn||ft.isWebGL2===!0&&Dt.morphTargetsCount!==jt)&&(ie=!0):(ie=!0,Dt.__version=B.version);let An=Dt.currentProgram;ie===!0&&(An=Le(B,k,Y));let Ir=!1,xi=!1,Es=!1;const fe=An.getUniforms(),Cn=Dt.uniforms;if(pt.useProgram(An.program)&&(Ir=!0,xi=!0,Es=!0),B.id!==M&&(M=B.id,xi=!0),Ir||S!==E){if(fe.setValue(U,"projectionMatrix",E.projectionMatrix),ft.logarithmicDepthBuffer&&fe.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,xi=!0,Es=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Me=fe.map.cameraPosition;Me!==void 0&&Me.setValue(U,z.setFromMatrixPosition(E.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&fe.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Y.isSkinnedMesh)&&fe.setValue(U,"viewMatrix",E.matrixWorldInverse)}if(Y.isSkinnedMesh){fe.setOptional(U,Y,"bindMatrix"),fe.setOptional(U,Y,"bindMatrixInverse");const Me=Y.skeleton;Me&&(ft.floatVertexTextures?(Me.boneTexture===null&&Me.computeBoneTexture(),fe.setValue(U,"boneTexture",Me.boneTexture,Lt),fe.setValue(U,"boneTextureSize",Me.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ts=H.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0&&ft.isWebGL2===!0)&&tt.update(Y,H,An),(xi||Dt.receiveShadow!==Y.receiveShadow)&&(Dt.receiveShadow=Y.receiveShadow,fe.setValue(U,"receiveShadow",Y.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Cn.envMap.value=Ct,Cn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),xi&&(fe.setValue(U,"toneMappingExposure",p.toneMappingExposure),Dt.needsLights&&ol(Cn,Es),xt&&B.fog===!0&&Vt.refreshFogUniforms(Cn,xt),Vt.refreshMaterialUniforms(Cn,B,V,D,K),ms.upload(U,Dt.uniformsList,Cn,Lt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ms.upload(U,Dt.uniformsList,Cn,Lt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&fe.setValue(U,"center",Y.center),fe.setValue(U,"modelViewMatrix",Y.modelViewMatrix),fe.setValue(U,"normalMatrix",Y.normalMatrix),fe.setValue(U,"modelMatrix",Y.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Me=B.uniformsGroups;for(let As=0,ll=Me.length;As<ll;As++)if(ft.isWebGL2){const zr=Me[As];$.update(zr,An),$.bind(zr,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function ol(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function al(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,k,H){At.get(E.texture).__webglTexture=k,At.get(E.depthTexture).__webglTexture=H;const B=At.get(E);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=H===void 0,B.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const H=At.get(E);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,H=0){y=E,x=k,_=H;let B=!0,Y=null,xt=!1,St=!1;if(E){const Ct=At.get(E);Ct.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(36160,null),B=!1):Ct.__webglFramebuffer===void 0?Lt.setupRenderTarget(E):Ct.__hasExternalTextures&&Lt.rebindTextures(E,At.get(E.texture).__webglTexture,At.get(E.depthTexture).__webglTexture);const zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(St=!0);const Rt=At.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Y=Rt[k],xt=!0):ft.isWebGL2&&E.samples>0&&Lt.useMultisampledRTT(E)===!1?Y=At.get(E).__webglMultisampledFramebuffer:Y=Rt,C.copy(E.viewport),P.copy(E.scissor),w=E.scissorTest}else C.copy(R).multiplyScalar(V).floor(),P.copy(I).multiplyScalar(V).floor(),w=N;if(pt.bindFramebuffer(36160,Y)&&ft.drawBuffers&&B&&pt.drawBuffers(E,Y),pt.viewport(C),pt.scissor(P),pt.setScissorTest(w),xt){const Ct=At.get(E.texture);U.framebufferTexture2D(36160,36064,34069+k,Ct.__webglTexture,H)}else if(St){const Ct=At.get(E.texture),zt=k||0;U.framebufferTextureLayer(36160,36064,Ct.__webglTexture,H||0,zt)}M=-1},this.readRenderTargetPixels=function(E,k,H,B,Y,xt,St){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){pt.bindFramebuffer(36160,Tt);try{const Ct=E.texture,zt=Ct.format,Rt=Ct.type;if(zt!==ke&&_t.convert(zt)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pt=Rt===zi&&(ut.has("EXT_color_buffer_half_float")||ft.isWebGL2&&ut.has("EXT_color_buffer_float"));if(Rt!==Gn&&_t.convert(Rt)!==U.getParameter(35738)&&!(Rt===Un&&(ft.isWebGL2||ut.has("OES_texture_float")||ut.has("WEBGL_color_buffer_float")))&&!Pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-B&&H>=0&&H<=E.height-Y&&U.readPixels(k,H,B,Y,_t.convert(zt),_t.convert(Rt),xt)}finally{const Ct=y!==null?At.get(y).__webglFramebuffer:null;pt.bindFramebuffer(36160,Ct)}}},this.copyFramebufferToTexture=function(E,k,H=0){const B=Math.pow(2,-H),Y=Math.floor(k.image.width*B),xt=Math.floor(k.image.height*B);Lt.setTexture2D(k,0),U.copyTexSubImage2D(3553,H,0,0,E.x,E.y,Y,xt),pt.unbindTexture()},this.copyTextureToTexture=function(E,k,H,B=0){const Y=k.image.width,xt=k.image.height,St=_t.convert(H.format),Tt=_t.convert(H.type);Lt.setTexture2D(H,0),U.pixelStorei(37440,H.flipY),U.pixelStorei(37441,H.premultiplyAlpha),U.pixelStorei(3317,H.unpackAlignment),k.isDataTexture?U.texSubImage2D(3553,B,E.x,E.y,Y,xt,St,Tt,k.image.data):k.isCompressedTexture?U.compressedTexSubImage2D(3553,B,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,St,k.mipmaps[0].data):U.texSubImage2D(3553,B,E.x,E.y,St,Tt,k.image),B===0&&H.generateMipmaps&&U.generateMipmap(3553),pt.unbindTexture()},this.copyTextureToTexture3D=function(E,k,H,B,Y=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=E.max.x-E.min.x+1,St=E.max.y-E.min.y+1,Tt=E.max.z-E.min.z+1,Ct=_t.convert(B.format),zt=_t.convert(B.type);let Rt;if(B.isData3DTexture)Lt.setTexture3D(B,0),Rt=32879;else if(B.isDataArrayTexture)Lt.setTexture2DArray(B,0),Rt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,B.flipY),U.pixelStorei(37441,B.premultiplyAlpha),U.pixelStorei(3317,B.unpackAlignment);const Pt=U.getParameter(3314),Xt=U.getParameter(32878),ye=U.getParameter(3316),tn=U.getParameter(3315),Tn=U.getParameter(32877),jt=H.isCompressedTexture?H.mipmaps[0]:H.image;U.pixelStorei(3314,jt.width),U.pixelStorei(32878,jt.height),U.pixelStorei(3316,E.min.x),U.pixelStorei(3315,E.min.y),U.pixelStorei(32877,E.min.z),H.isDataTexture||H.isData3DTexture?U.texSubImage3D(Rt,Y,k.x,k.y,k.z,xt,St,Tt,Ct,zt,jt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Rt,Y,k.x,k.y,k.z,xt,St,Tt,Ct,jt.data)):U.texSubImage3D(Rt,Y,k.x,k.y,k.z,xt,St,Tt,Ct,zt,jt),U.pixelStorei(3314,Pt),U.pixelStorei(32878,Xt),U.pixelStorei(3316,ye),U.pixelStorei(3315,tn),U.pixelStorei(32877,Tn),Y===0&&B.generateMipmaps&&U.generateMipmap(Rt),pt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Lt.setTextureCube(E,0):E.isData3DTexture?Lt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Lt.setTexture2DArray(E,0):Lt.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){x=0,_=0,y=null,pt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Cr.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(c){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!c}}});class hp extends Cr{}hp.prototype.isWebGL1Renderer=!0;class Lr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new Lr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class up extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class dp extends ve{constructor(t,e,n,i,s,r,o,a,l){super(t,e,n,i,s,r,o,a,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fp extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ya extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const or=new Jt,Zo=new G,$o=new G;class pp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zo),$o.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($o),e.updateMatrixWorld(),or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(or),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mp extends pp{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gp extends Ya{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new mp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _p extends Ya{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class xp{constructor(t,e,n=0,i=1/0){this.ray=new za(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return yr(t,this,n,e),n.sort(Ko),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)yr(t[i],this,n,e);return n.sort(Ko),n}}function Ko(c,t){return c.distance-t.distance}function yr(c,t,e,n){if(c.layers.test(t.layers)&&c.raycast(t,e),n===!0){const i=c.children;for(let s=0,r=i.length;s<r;s++)yr(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wr);const yt={CHUNK_SIZE:16,RENDER_DISTANCE:3,GRAVITY:-19.8,PLAYER_SPEED:8,PLAYER_JUMP_FORCE:8,PLAYER_HEIGHT:1.8,PLAYER_RADIUS:.4,FOVY:75,NEAR:.1,FAR:1e3};class vp{scene;camera;renderer;container;constructor(t){const e=document.getElementById(t);if(!e)throw new Error(`Container element with id "${t}" not found.`);this.container=e,this.initScene(),this.initCamera(),this.initRenderer(),this.initLights(),window.addEventListener("resize",this.onWindowResize.bind(this))}initScene(){this.scene=new up,this.scene.background=new Bt(8306926),this.scene.fog=new Lr(8306926,.015)}initCamera(){const t=this.container.clientWidth/this.container.clientHeight;this.camera=new De(yt.FOVY,t,yt.NEAR,yt.FAR),this.camera.position.set(0,5,10),this.camera.lookAt(0,0,0)}initRenderer(){this.renderer=new Cr({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wa,this.container.appendChild(this.renderer.domElement)}initLights(){const t=new _p(16777215,.4);this.scene.add(t);const e=new gp(16777215,.8);e.position.set(20,40,20),e.castShadow=!0,e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,e.shadow.camera.near=.5,e.shadow.camera.far=150;const n=40;e.shadow.camera.left=-n,e.shadow.camera.right=n,e.shadow.camera.top=n,e.shadow.camera.bottom=-n,this.scene.add(e)}onWindowResize(){const t=this.container.clientWidth,e=this.container.clientHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}render(){this.renderer.render(this.scene,this.camera)}}var Je=(c=>(c[c.AIR=0]="AIR",c[c.GROUND=1]="GROUND",c[c.DIRT=2]="DIRT",c[c.STONE=3]="STONE",c))(Je||{});const gs={0:{id:0,name:"Air",isSolid:!1,isTransparent:!0,uvs:{front:0,back:0,left:0,right:0,top:0,bottom:0}},1:{id:1,name:"Grass",isSolid:!0,isTransparent:!1,uvs:{front:3,back:3,left:3,right:3,top:0,bottom:1}},2:{id:2,name:"Dirt",isSolid:!0,isTransparent:!1,uvs:{front:1,back:1,left:1,right:1,top:1,bottom:1}},3:{id:3,name:"Stone",isSolid:!0,isTransparent:!1,uvs:{front:2,back:2,left:2,right:2,top:2,bottom:2}}},yp=[{dir:[1,0,0],corners:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uvName:"right"},{dir:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uvName:"left"},{dir:[0,1,0],corners:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],uvName:"top"},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uvName:"bottom"},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uvName:"front"},{dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uvName:"back"}],Mp={top:1,bottom:.5,front:.8,back:.8,left:.65,right:.65};class Jo{x;y;z;blocks;mesh=null;isDirty=!0;size=yt.CHUNK_SIZE;constructor(t,e,n){this.x=t,this.y=e,this.z=n,this.blocks=new Uint8Array(this.size*this.size*this.size)}getIndex(t,e,n){return t+e*this.size+n*this.size*this.size}isOutOfBounds(t,e,n){return t<0||t>=this.size||e<0||e>=this.size||n<0||n>=this.size}setBlock(t,e,n,i){if(this.isOutOfBounds(t,e,n))return;const s=this.getIndex(t,e,n);this.blocks[s]!==i&&(this.blocks[s]=i,this.isDirty=!0)}getBlock(t,e,n){if(this.isOutOfBounds(t,e,n))return Je.AIR;const i=this.getIndex(t,e,n);return this.blocks[i]}generateMesh(t,e){if(!this.isDirty&&this.mesh)return this.mesh;const n=[],i=[],s=[],r=[],o=[];let a=0;const l=4,h=1/l;for(let u=0;u<this.size;u++)for(let m=0;m<this.size;m++)for(let g=0;g<this.size;g++){const p=this.getBlock(u,m,g);if(p===Je.AIR)continue;const f=gs[p],x=this.x*this.size+u,_=this.y*this.size+m,y=this.z*this.size+g;for(const M of yp){const S=u+M.dir[0],C=m+M.dir[1],P=g+M.dir[2];let w=!1;if(this.isOutOfBounds(S,C,P)){const T=t.getBlock(x+M.dir[0],_+M.dir[1],y+M.dir[2]);w=!gs[T].isSolid}else{const T=this.getBlock(S,C,P);w=!gs[T].isSolid}if(w){for(const N of M.corners){n.push(x+N[0],_+N[1],y+N[2]),i.push(...M.dir);const Z=Mp[M.uvName];s.push(Z,Z,Z)}const T=f.uvs[M.uvName],D=T%l,V=Math.floor(T/l),W=D*h,L=1-(V+1)*h,R=W+h,I=L+h;r.push(W,L,R,L,R,I,W,I),o.push(a,a+1,a+2,a,a+2,a+3),a+=4}}}if(n.length===0)return this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null),this.isDirty=!1,null;const d=new En;return d.setAttribute("position",new Ge(n,3)),d.setAttribute("normal",new Ge(i,3)),d.setAttribute("color",new Ge(s,3)),d.setAttribute("uv",new Ge(r,2)),d.setIndex(o),this.mesh?(this.mesh.geometry.dispose(),this.mesh.geometry=d):(this.mesh=new fn(d,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0),this.isDirty=!1,this.mesh}}function wp(){const c=document.createElement("canvas"),t=16,e=4,n=4;c.width=t*e,c.height=t*n;const i=c.getContext("2d"),s=(a,l,h,d,u,m)=>{const g=a*t,p=l*t;for(let f=0;f<t;f++)for(let x=0;x<t;x++){const _=(Math.random()-.5)*m,y=Math.max(0,Math.min(255,Math.floor(h+_))),M=Math.max(0,Math.min(255,Math.floor(d+_))),S=Math.max(0,Math.min(255,Math.floor(u+_)));i.fillStyle=`rgb(${y}, ${M}, ${S})`,i.fillRect(g+f,p+x,1,1)}};s(0,0,100,180,70,30),s(1,0,130,95,65,20),s(2,0,120,120,120,20),s(3,0,130,95,65,20);const r=3*t;for(let a=0;a<t;a++){const l=3+Math.floor(Math.random()*3);for(let h=0;h<l;h++){const d=(Math.random()-.5)*30,u=Math.max(0,Math.min(255,Math.floor(100+d))),m=Math.max(0,Math.min(255,Math.floor(180+d))),g=Math.max(0,Math.min(255,Math.floor(70+d)));i.fillStyle=`rgb(${u}, ${m}, ${g})`,i.fillRect(r+a,h,1,1)}}const o=new dp(c);return o.magFilter=oe,o.minFilter=oe,o.wrapS=Te,o.wrapT=Te,o}let bp=class{chunks=new Map;scene;material;constructor(t){this.scene=t;const e=wp();this.material=new fp({map:e,vertexColors:!0,roughness:.85,metalness:.05})}getChunkKey(t,e,n){return`${t},${e},${n}`}getChunk(t,e,n){return this.chunks.get(this.getChunkKey(t,e,n))}getBlock(t,e,n){const i=Math.floor(t/yt.CHUNK_SIZE),s=Math.floor(e/yt.CHUNK_SIZE),r=Math.floor(n/yt.CHUNK_SIZE),o=this.getChunk(i,s,r);if(!o)return Je.AIR;const a=(t%yt.CHUNK_SIZE+yt.CHUNK_SIZE)%yt.CHUNK_SIZE,l=(e%yt.CHUNK_SIZE+yt.CHUNK_SIZE)%yt.CHUNK_SIZE,h=(n%yt.CHUNK_SIZE+yt.CHUNK_SIZE)%yt.CHUNK_SIZE;return o.getBlock(a,l,h)}setBlock(t,e,n,i){const s=Math.floor(t/yt.CHUNK_SIZE),r=Math.floor(e/yt.CHUNK_SIZE),o=Math.floor(n/yt.CHUNK_SIZE);let a=this.getChunk(s,r,o);a||(a=new Jo(s,r,o),this.chunks.set(this.getChunkKey(s,r,o),a));const l=(t%yt.CHUNK_SIZE+yt.CHUNK_SIZE)%yt.CHUNK_SIZE,h=(e%yt.CHUNK_SIZE+yt.CHUNK_SIZE)%yt.CHUNK_SIZE,d=(n%yt.CHUNK_SIZE+yt.CHUNK_SIZE)%yt.CHUNK_SIZE;a.setBlock(l,h,d,i),this.updateChunkMesh(s,r,o),l===0&&this.updateChunkMesh(s-1,r,o),l===yt.CHUNK_SIZE-1&&this.updateChunkMesh(s+1,r,o),h===0&&this.updateChunkMesh(s,r-1,o),h===yt.CHUNK_SIZE-1&&this.updateChunkMesh(s,r+1,o),d===0&&this.updateChunkMesh(s,r,o-1),d===yt.CHUNK_SIZE-1&&this.updateChunkMesh(s,r,o+1)}updateChunkMesh(t,e,n){const i=this.getChunk(t,e,n);if(!i)return;const s=i.mesh,r=i.generateMesh(this,this.material);r&&!s?this.scene.add(r):!r&&s&&this.scene.remove(s)}generateWorldAround(t,e){const n=Math.floor(t/yt.CHUNK_SIZE),i=Math.floor(e/yt.CHUNK_SIZE),s=yt.RENDER_DISTANCE,r=new Set;for(let a=n-s;a<=n+s;a++)for(let l=i-s;l<=i+s;l++)for(let h=-1;h<=1;h++){const d=this.getChunkKey(a,h,l);if(r.add(d),!this.chunks.has(d)){const u=new Jo(a,h,l);this.generateChunkTerrain(u),this.chunks.set(d,u)}}for(const[a,l]of this.chunks.entries())r.has(a)||(l.mesh&&(this.scene.remove(l.mesh),l.mesh.geometry.dispose(),l.mesh=null),this.chunks.delete(a));for(let a=n-s;a<=n+s;a++)for(let l=i-s;l<=i+s;l++)for(let h=-1;h<=1;h++)this.updateChunkMesh(a,h,l);const o=document.getElementById("chunks-display");o&&(o.textContent=this.chunks.size.toString())}generateChunkTerrain(t){const e=yt.CHUNK_SIZE,n=t.y*e;for(let i=0;i<e;i++)for(let s=0;s<e;s++)for(let r=0;r<e;r++){const o=n+r;let a=Je.AIR;o<-4?a=Je.STONE:o<0?a=Je.DIRT:o===0&&(a=Je.GROUND),t.setBlock(i,r,s,a)}}getChunkMeshes(){const t=[];for(const e of this.chunks.values())e.mesh&&t.push(e.mesh);return t}getChunksCount(){return this.chunks.size}};class Sp{keys={};mouseDelta={x:0,y:0};isLocked=!1;targetElement;constructor(t){this.targetElement=t,window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this)),document.addEventListener("mousemove",this.onMouseMove.bind(this)),document.addEventListener("pointerlockchange",this.onPointerLockChange.bind(this))}requestLock(){this.isLocked||this.targetElement.requestPointerLock()}onKeyDown(t){const e=t.code;this.keys[e]=!0}onKeyUp(t){const e=t.code;this.keys[e]=!1}onMouseMove(t){this.isLocked&&(this.mouseDelta.x+=t.movementX,this.mouseDelta.y+=t.movementY)}onPointerLockChange(){const t=document.getElementById("menu-overlay"),e=document.getElementById("crosshair");document.pointerLockElement===this.targetElement?(this.isLocked=!0,t&&(t.style.display="none"),e&&(e.style.display="block")):(this.isLocked=!1,this.clearKeys(),t&&(t.style.display="flex",t.style.opacity="1"),e&&(e.style.display="none"))}clearKeys(){this.keys={}}consumeMouseDelta(){const t={...this.mouseDelta};return this.mouseDelta.x=0,this.mouseDelta.y=0,t}}class Ve{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new v);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new v);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Ve);const n=this.elements,i=t.elements,s=e.elements,r=n[0],o=n[1],a=n[2],l=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],p=i[0],f=i[1],x=i[2],_=i[3],y=i[4],M=i[5],S=i[6],C=i[7],P=i[8];return s[0]=r*p+o*_+a*S,s[1]=r*f+o*y+a*C,s[2]=r*x+o*M+a*P,s[3]=l*p+h*_+d*S,s[4]=l*f+h*y+d*C,s[5]=l*x+h*M+d*P,s[6]=u*p+m*_+g*S,s[7]=u*f+m*y+g*C,s[8]=u*x+m*M+g*P,e}scale(t,e){e===void 0&&(e=new Ve);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new v);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let a=3;const l=a;let h;const d=4;let u;do{if(r=l-a,s[r+i*r]===0){for(o=r+1;o<l;o++)if(s[r+i*o]!==0){h=d;do u=d-h,s[u+i*r]+=s[u+i*o];while(--h);break}}if(s[r+i*r]!==0)for(o=r+1;o<l;o++){const m=s[r+i*o]/s[r+i*r];h=d;do u=d-h,s[u+i*o]=u<=r?0:s[u+i*o]-s[u+i*r]*m;while(--h)}}while(--a);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Ve);const e=3,n=6,i=Ep;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const a=o;let l;const h=n;let d;do{if(s=a-o,i[s+n*s]===0){for(r=s+1;r<a;r++)if(i[s+n*r]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*r];while(--l);break}}if(i[s+n*s]!==0)for(r=s+1;r<a;r++){const u=i[s+n*r]/i[s+n*s];l=h;do d=h-l,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*u;while(--l)}}while(--o);s=2;do{r=s-1;do{const u=i[s+n*r]/i[s+n*s];l=n;do d=n-l,i[d+n*r]=i[d+n*r]-i[d+n*s]*u;while(--l)}while(r--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{r=2;do{if(d=i[e+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,d)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,o=n+n,a=i+i,l=e*r,h=e*o,d=e*a,u=n*o,m=n*a,g=i*a,p=s*r,f=s*o,x=s*a,_=this.elements;return _[3*0+0]=1-(u+g),_[3*0+1]=h-x,_[3*0+2]=d+f,_[3*1+0]=h+x,_[3*1+1]=1-(l+g),_[3*1+2]=m-p,_[3*2+0]=d-f,_[3*2+1]=m+p,_[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new Ve);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Ep=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class v{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new v);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,a=this.z;return e.x=o*s-a*i,e.y=a*n-r*s,e.z=r*i-o*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new v(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new v(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Ve([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new v);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i)}scale(t,e){e===void 0&&(e=new v);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new v),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new v),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new v),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Tp,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=Ap;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Qo),Qo.almostEquals(t,e)}clone(){return new v(this.x,this.y,this.z)}}v.ZERO=new v(0,0,0);v.UNIT_X=new v(1,0,0);v.UNIT_Y=new v(0,1,0);v.UNIT_Z=new v(0,0,1);const Tp=new v,Ap=new v,Qo=new v;class Ce{constructor(t){t===void 0&&(t={}),this.lowerBound=new v,this.upperBound=new v,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(t[0]),o&&o.vmult(s,s),r.copy(s);for(let a=1;a<t.length;a++){let l=t[a];o&&(o.vmult(l,ta),l=ta),l.x>r.x&&(r.x=l.x),l.x<s.x&&(s.x=l.x),l.y>r.y&&(r.y=l.y),l.y<s.y&&(s.y=l.y),l.z>r.z&&(r.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Ce().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,a=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&o&&a}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,o,a){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),r.set(l.x,h.y,l.z),o.set(l.x,l.y,h.z),a.copy(h)}toLocalFrame(t,e){const n=ea,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,a,l,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=ea,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,a,l,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,o=(this.lowerBound.x-n.x)*i,a=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,m=Math.max(Math.max(Math.min(o,a),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,a),Math.max(l,h)),Math.max(d,u));return!(g<0||m>g)}}const ta=new v,ea=[new v,new v,new v,new v,new v,new v,new v,new v];class na{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Za{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class $t{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new v),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Cp,i=Lp;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new $t);const n=this.x,i=this.y,s=this.z,r=this.w,o=t.x,a=t.y,l=t.z,h=t.w;return e.x=n*h+r*o+i*l-s*a,e.y=i*h+r*a+s*o-n*l,e.z=s*h+r*l+n*a-i*o,e.w=r*h-n*o-i*a-s*l,e}inverse(t){t===void 0&&(t=new $t);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new $t),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new v);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,a=this.z,l=this.w,h=l*n+o*s-a*i,d=l*i+a*n-r*s,u=l*s+r*i-o*n,m=-r*n-o*i-a*s;return e.x=h*l+m*-r+d*-a-u*-o,e.y=d*l+m*-o+u*-r-h*-a,e.z=u*l+m*-a+h*-o-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,o=this.y,a=this.z,l=this.w;switch(e){case"YZX":const h=r*o+a*l;if(h>.499&&(n=2*Math.atan2(r,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,l),i=-Math.PI/2,s=0),n===void 0){const d=r*r,u=o*o,m=a*a;n=Math.atan2(2*o*l-2*r*a,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*r*l-2*o*a,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(n/2),a=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=a*r*o+s*l*h,this.y=s*l*o-a*r*h,this.z=s*r*h+a*l*o,this.w=s*r*o-a*l*h):i==="YXZ"?(this.x=a*r*o+s*l*h,this.y=s*l*o-a*r*h,this.z=s*r*h-a*l*o,this.w=s*r*o+a*l*h):i==="ZXY"?(this.x=a*r*o-s*l*h,this.y=s*l*o+a*r*h,this.z=s*r*h+a*l*o,this.w=s*r*o-a*l*h):i==="ZYX"?(this.x=a*r*o-s*l*h,this.y=s*l*o+a*r*h,this.z=s*r*h-a*l*o,this.w=s*r*o+a*l*h):i==="YZX"?(this.x=a*r*o+s*l*h,this.y=s*l*o+a*r*h,this.z=s*r*h-a*l*o,this.w=s*r*o-a*l*h):i==="XZY"&&(this.x=a*r*o-s*l*h,this.y=s*l*o-a*r*h,this.z=s*r*h+a*l*o,this.w=s*r*o+a*l*h),this}clone(){return new $t(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new $t);const i=this.x,s=this.y,r=this.z,o=this.w;let a=t.x,l=t.y,h=t.z,d=t.w,u,m,g,p,f;return m=i*a+s*l+r*h+o*d,m<0&&(m=-m,a=-a,l=-l,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),p=Math.sin((1-e)*u)/g,f=Math.sin(e*u)/g):(p=1-e,f=e),n.x=p*i+f*a,n.y=p*s+f*l,n.z=p*r+f*h,n.w=p*o+f*d,n}integrate(t,e,n,i){i===void 0&&(i=new $t);const s=t.x*n.x,r=t.y*n.y,o=t.z*n.z,a=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+r*h-o*l),i.y+=u*(r*d+o*a-s*h),i.z+=u*(o*d+s*l-r*a),i.w+=u*(-s*a-r*l-o*h),i}}const Cp=new v,Lp=new v,Rp={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ct{constructor(t){t===void 0&&(t={}),this.id=ct.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ct.idCounter=0;ct.types=Rp;class Ft{constructor(t){t===void 0&&(t={}),this.position=new v,this.quaternion=new $t,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ft.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ft.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new v),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new v),n.vsub(t,i),e.conjugate(ia),ia.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new v),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new v),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new v),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const ia=new $t;class Di extends ct{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:ct.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new v;for(let s=0;s!==t.length;s++){const r=t[s],o=r.length;for(let a=0;a!==o;a++){const l=(a+1)%o;e[r[a]].vsub(e[r[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new v;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];Di.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new v,r=new v;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,o,a,l){const h=new v;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const p=h.dot(r);p>u&&(u=p,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const p=n.vertices[n.faces[d][g]],f=new v;f.copy(p),s.vmult(f,f),i.vadd(f,f),m.push(f)}d>=0&&this.clipFaceAgainstHull(r,t,e,m,o,a,l)}findSeparatingAxis(t,e,n,i,s,r,o,a){const l=new v,h=new v,d=new v,u=new v,m=new v,g=new v;let p=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let x=0;x!==f.uniqueAxes.length;x++){n.vmult(f.uniqueAxes[x],l);const _=f.testSepAxis(l,t,e,n,i,s);if(_===!1)return!1;_<p&&(p=_,r.copy(l))}else{const x=o?o.length:f.faces.length;for(let _=0;_<x;_++){const y=o?o[_]:_;l.copy(f.faceNormals[y]),n.vmult(l,l);const M=f.testSepAxis(l,t,e,n,i,s);if(M===!1)return!1;M<p&&(p=M,r.copy(l))}}if(t.uniqueAxes)for(let x=0;x!==t.uniqueAxes.length;x++){s.vmult(t.uniqueAxes[x],h);const _=f.testSepAxis(h,t,e,n,i,s);if(_===!1)return!1;_<p&&(p=_,r.copy(h))}else{const x=a?a.length:t.faces.length;for(let _=0;_<x;_++){const y=a?a[_]:_;h.copy(t.faceNormals[y]),s.vmult(h,h);const M=f.testSepAxis(h,t,e,n,i,s);if(M===!1)return!1;M<p&&(p=M,r.copy(h))}}for(let x=0;x!==f.uniqueEdges.length;x++){n.vmult(f.uniqueEdges[x],u);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],m),u.cross(m,g),!g.almostZero()){g.normalize();const y=f.testSepAxis(g,t,e,n,i,s);if(y===!1)return!1;y<p&&(p=y,r.copy(g))}}return i.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const o=this;Di.project(o,t,n,i,ar),Di.project(e,t,s,r,lr);const a=ar[0],l=ar[1],h=lr[0],d=lr[1];if(a<d||h<l)return!1;const u=a-d,m=h-l;return u<m?u:m}calculateLocalInertia(t,e){const n=new v,i=new v;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*o*2*o),e.y=1/12*t*(2*s*2*s+2*o*2*o),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,o){const a=new v,l=new v,h=new v,d=new v,u=new v,m=new v,g=new v,p=new v,f=this,x=[],_=i,y=x;let M=-1,S=Number.MAX_VALUE;for(let D=0;D<f.faces.length;D++){a.copy(f.faceNormals[D]),n.vmult(a,a);const V=a.dot(t);V<S&&(S=V,M=D)}if(M<0)return;const C=f.faces[M];C.connectedFaces=[];for(let D=0;D<f.faces.length;D++)for(let V=0;V<f.faces[D].length;V++)C.indexOf(f.faces[D][V])!==-1&&D!==M&&C.connectedFaces.indexOf(D)===-1&&C.connectedFaces.push(D);const P=C.length;for(let D=0;D<P;D++){const V=f.vertices[C[D]],W=f.vertices[C[(D+1)%P]];V.vsub(W,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(V),n.vmult(m,m),e.vadd(m,m);const L=C.connectedFaces[D];g.copy(this.faceNormals[L]);const R=this.getPlaneConstantOfFace(L);p.copy(g),n.vmult(p,p);const I=R-p.dot(e);for(this.clipFaceAgainstPlane(_,y,p,I);_.length;)_.shift();for(;y.length;)_.push(y.shift())}g.copy(this.faceNormals[M]);const w=this.getPlaneConstantOfFace(M);p.copy(g),n.vmult(p,p);const T=w-p.dot(e);for(let D=0;D<_.length;D++){let V=p.dot(_[D])+T;if(V<=s&&(console.log(`clamped: depth=${V} to minDist=${s}`),V=s),V<=r){const W=_[D];if(V<=1e-6){const L={point:W,normal:p,depth:V};o.push(L)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const o=t.length;if(o<2)return e;let a=t[t.length-1],l=t[0];s=n.dot(a)+i;for(let h=0;h<o;h++){if(l=t[h],r=n.dot(l)+i,s<0)if(r<0){const d=new v;d.copy(l),e.push(d)}else{const d=new v;a.lerp(l,s/(s-r),d),e.push(d)}else if(r<0){const d=new v;a.lerp(l,s/(s-r),d),e.push(d),e.push(l)}a=l,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new v);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new v);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,o,a,l,h,d,u=new v;for(let m=0;m<s.length;m++){u.copy(s[m]),e.vmult(u,u),t.vadd(u,u);const g=u;(r===void 0||g.x<r)&&(r=g.x),(l===void 0||g.x>l)&&(l=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(a===void 0||g.z<a)&&(a=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,o,a),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new v);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new v;this.getAveragePointLocal(s);for(let r=0;r<this.faces.length;r++){let o=i[r];const a=e[n[r][0]],l=new v;t.vsub(a,l);const h=o.dot(l),d=new v;s.vsub(a,d);const u=o.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const r=t.vertices.length,o=Pp;let a=0,l=0;const h=Dp,d=t.vertices;h.setZero(),Ft.vectorToLocalFrame(n,i,e,o),Ft.pointToLocalFrame(n,i,h,h);const u=h.dot(o);l=a=d[0].dot(o);for(let m=1;m<r;m++){const g=d[m].dot(o);g>a&&(a=g),g<l&&(l=g)}if(l-=u,a-=u,l>a){const m=l;l=a,a=m}s[0]=a,s[1]=l}}const ar=[],lr=[];new v;const Pp=new v,Dp=new v;class ki extends ct{constructor(t){super({type:ct.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=v,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new Di({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new v),ki.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)vn.set(s[r][0],s[r][1],s[r][2]),e.vmult(vn,vn),t.vadd(vn,vn),n(vn.x,vn.y,vn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;je[0].set(s.x,s.y,s.z),je[1].set(-s.x,s.y,s.z),je[2].set(-s.x,-s.y,s.z),je[3].set(-s.x,-s.y,-s.z),je[4].set(s.x,-s.y,-s.z),je[5].set(s.x,s.y,-s.z),je[6].set(-s.x,s.y,-s.z),je[7].set(s.x,-s.y,s.z);const r=je[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const a=je[o];e.vmult(a,a),t.vadd(a,a);const l=a.x,h=a.y,d=a.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const vn=new v,je=[new v,new v,new v,new v,new v,new v,new v,new v],Rr={DYNAMIC:1,STATIC:2,KINEMATIC:4},Pr={AWAKE:0,SLEEPY:1,SLEEPING:2};class at extends Za{constructor(t){t===void 0&&(t={}),super(),this.id=at.idCounter++,this.index=-1,this.world=null,this.vlambda=new v,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new v,this.previousPosition=new v,this.interpolatedPosition=new v,this.initPosition=new v,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new v,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new v,this.force=new v;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?at.STATIC:at.DYNAMIC,typeof t.type==typeof at.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=at.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new v,this.quaternion=new $t,this.initQuaternion=new $t,this.previousQuaternion=new $t,this.interpolatedQuaternion=new $t,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new v,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new v,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new v,this.invInertia=new v,this.invInertiaWorld=new Ve,this.invMassSolve=0,this.invInertiaSolve=new v,this.invInertiaWorldSolve=new Ve,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new v(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new v(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ce,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new v,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=at.AWAKE,this.wakeUpAfterNarrowphase=!1,t===at.SLEEPING&&this.dispatchEvent(at.wakeupEvent)}sleep(){this.sleepState=at.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===at.AWAKE&&n<i?(this.sleepState=at.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(at.sleepyEvent)):e===at.SLEEPY&&n>i?this.wakeUp():e===at.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(at.sleepEvent))}}updateSolveMassProperties(){this.sleepState===at.SLEEPING||this.type===at.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new v),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new v),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new v),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new v),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new v,s=new $t;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const o=e[s].length(),a=r.boundingSphereRadius;o+a>i&&(i=o+a)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Ip,r=zp,o=this.quaternion,a=this.aabb,l=Np;for(let h=0;h!==i;h++){const d=t[h];o.vmult(e[h],s),s.vadd(this.position,s),o.mult(n[h],r),d.calculateWorldAABB(s,r,l.lowerBound,l.upperBound),h===0?a.copy(l):a.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Fp,i=Bp;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new v),this.type!==at.DYNAMIC)return;this.sleepState===at.SLEEPING&&this.wakeUp();const n=Up;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new v),this.type!==at.DYNAMIC)return;const n=Op,i=kp;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===at.DYNAMIC&&(this.sleepState===at.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new v),this.type!==at.DYNAMIC)return;this.sleepState===at.SLEEPING&&this.wakeUp();const n=e,i=Gp;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Vp;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new v),this.type!==at.DYNAMIC)return;const n=Wp,i=Hp;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=qp;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ki.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new v;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===at.DYNAMIC||this.type===at.KINEMATIC)||this.sleepState===at.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,a=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*t;i.x+=o.x*m*u.x,i.y+=o.y*m*u.y,i.z+=o.z*m*u.z;const g=d.elements,p=this.angularFactor,f=a.x*p.x,x=a.y*p.y,_=a.z*p.z;s.x+=t*(g[0]*f+g[1]*x+g[2]*_),s.y+=t*(g[3]*f+g[4]*x+g[5]*_),s.z+=t*(g[6]*f+g[7]*x+g[8]*_),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}at.idCounter=0;at.COLLIDE_EVENT_NAME="collide";at.DYNAMIC=Rr.DYNAMIC;at.STATIC=Rr.STATIC;at.KINEMATIC=Rr.KINEMATIC;at.AWAKE=Pr.AWAKE;at.SLEEPY=Pr.SLEEPY;at.SLEEPING=Pr.SLEEPING;at.wakeupEvent={type:"wakeup"};at.sleepyEvent={type:"sleepy"};at.sleepEvent={type:"sleep"};const Ip=new v,zp=new $t,Np=new Ce,Fp=new Ve,Bp=new Ve;new Ve;const Up=new v,Op=new v,kp=new v,Gp=new v,Vp=new v,Wp=new v,Hp=new v,qp=new v;class $a{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&at.STATIC||t.sleepState===at.SLEEPING)&&(e.type&at.STATIC||e.sleepState===at.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Xp;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=jp,i=Yp,s=Zp,r=t.length;for(let o=0;o!==r;o++)i[o]=t[o],s[o]=e[o];t.length=0,e.length=0;for(let o=0;o!==r;o++){const a=i[o].id,l=s[o].id,h=a<l?`${a},${l}`:`${l},${a}`;n[h]=o,n.keys.push(h)}for(let o=0;o!==n.keys.length;o++){const a=n.keys.pop(),l=n[a];t.push(i[l]),e.push(s[l]),delete n[a]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new v;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Xp=new v;new v;new $t;new v;const jp={keys:[]},Yp=[],Zp=[];new v;new v;new v;class $p extends $a{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,o;for(let a=0;a!==s;a++)for(let l=0;l!==a;l++)r=i[a],o=i[l],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class xs{constructor(){this.rayFromWorld=new v,this.rayToWorld=new v,this.hitNormalWorld=new v,this.hitPointWorld=new v,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let Ka,Ja,Qa,tl,el,nl,il;const Dr={CLOSEST:1,ANY:2,ALL:4};Ka=ct.types.SPHERE;Ja=ct.types.PLANE;Qa=ct.types.BOX;tl=ct.types.CYLINDER;el=ct.types.CONVEXPOLYHEDRON;nl=ct.types.HEIGHTFIELD;il=ct.types.TRIMESH;class Zt{get[Ka](){return this._intersectSphere}get[Ja](){return this._intersectPlane}get[Qa](){return this._intersectBox}get[tl](){return this._intersectConvex}get[el](){return this._intersectConvex}get[nl](){return this._intersectHeightfield}get[il](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new v),e===void 0&&(e=new v),this.from=t.clone(),this.to=e.clone(),this.direction=new v,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Zt.ANY,this.result=new xs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Zt.ANY,this.result=e.result||new xs,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(sa),cr.length=0,t.broadphase.aabbQuery(t,sa,cr),this.intersectBodies(cr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=Kp,s=Jp;for(let r=0,o=t.shapes.length;r<o;r++){const a=t.shapes[r];if(!(n&&!a.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(a,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(dm(s,this.direction,n)>t.boundingSphereRadius)return;const o=this[t.type];o&&o.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,o=this.to,a=this.direction,l=new v(0,0,1);e.vmult(l,l);const h=new v;r.vsub(n,h);const d=h.dot(l);o.vsub(n,h);const u=h.dot(l);if(d*u>0||r.distanceTo(o)<d)return;const m=l.dot(a);if(Math.abs(m)<this.precision)return;const g=new v,p=new v,f=new v;r.vsub(n,g);const x=-l.dot(g)/m;a.scale(x,p),r.vadd(p,f),this.reportIntersection(l,f,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=Qp;r.from.copy(this.from),r.to.copy(this.to),Ft.pointToLocalFrame(n,e,r.from,r.from),Ft.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const o=tm;let a,l,h,d;a=l=0,h=d=t.data.length-1;const u=new Ce;r.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),a=Math.max(a,o[0]),l=Math.max(l,o[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),h=Math.min(h,o[0]+1),d=Math.min(d,o[1]+1);for(let m=a;m<h;m++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,u),!!u.overlapsRay(r)){if(t.getConvexTrianglePillar(m,g,!1),Ft.pointToWorldFrame(n,e,t.pillarOffset,hs),this._intersectConvex(t.pillarConvex,e,hs,i,s,ra),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Ft.pointToWorldFrame(n,e,t.pillarOffset,hs),this._intersectConvex(t.pillarConvex,e,hs,i,s,ra)}}}_intersectSphere(t,e,n,i,s){const r=this.from,o=this.to,a=t.radius,l=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,h=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-a**2,u=h**2-4*l*d,m=em,g=nm;if(!(u<0))if(u===0)r.lerp(o,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const p=(-h-Math.sqrt(u))/(2*l),f=(-h+Math.sqrt(u))/(2*l);if(p>=0&&p<=1&&(r.lerp(o,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(r.lerp(o,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const o=im,a=oa,l=r&&r.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,m=this.direction,g=this.from,p=this.to,f=g.distanceTo(p),x=l?l.length:h.length,_=this.result;for(let y=0;!_.shouldStop&&y<x;y++){const M=l?l[y]:y,S=h[M],C=u[M],P=e,w=n;a.copy(d[S[0]]),P.vmult(a,a),a.vadd(w,a),a.vsub(g,a),P.vmult(C,o);const T=m.dot(o);if(Math.abs(T)<this.precision)continue;const D=o.dot(a)/T;if(!(D<0)){m.scale(D,xe),xe.vadd(g,xe),Oe.copy(d[S[0]]),P.vmult(Oe,Oe),w.vadd(Oe,Oe);for(let V=1;!_.shouldStop&&V<S.length-1;V++){Ye.copy(d[S[V]]),Ze.copy(d[S[V+1]]),P.vmult(Ye,Ye),P.vmult(Ze,Ze),w.vadd(Ye,Ye),w.vadd(Ze,Ze);const W=xe.distanceTo(g);!(Zt.pointInTriangle(xe,Oe,Ye,Ze)||Zt.pointInTriangle(xe,Ye,Oe,Ze))||W>f||this.reportIntersection(o,xe,s,i,M)}}}}_intersectTrimesh(t,e,n,i,s,r){const o=sm,a=hm,l=um,h=oa,d=rm,u=om,m=am,g=cm,p=lm,f=t.indices;t.vertices;const x=this.from,_=this.to,y=this.direction;l.position.copy(n),l.quaternion.copy(e),Ft.vectorToLocalFrame(n,e,y,d),Ft.pointToLocalFrame(n,e,x,u),Ft.pointToLocalFrame(n,e,_,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,m.vsub(u,d),d.normalize();const M=u.distanceSquared(m);t.tree.rayQuery(this,l,a);for(let S=0,C=a.length;!this.result.shouldStop&&S!==C;S++){const P=a[S];t.getNormal(P,o),t.getVertex(f[P*3],Oe),Oe.vsub(u,h);const w=d.dot(o),T=o.dot(h)/w;if(T<0)continue;d.scale(T,xe),xe.vadd(u,xe),t.getVertex(f[P*3+1],Ye),t.getVertex(f[P*3+2],Ze);const D=xe.distanceSquared(u);!(Zt.pointInTriangle(xe,Ye,Oe,Ze)||Zt.pointInTriangle(xe,Oe,Ye,Ze))||D>M||(Ft.vectorToWorldFrame(e,o,p),Ft.pointToWorldFrame(n,e,xe,g),this.reportIntersection(p,g,s,i,P))}a.length=0}reportIntersection(t,e,n,i,s){const r=this.from,o=this.to,a=r.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Zt.ALL:this.hasHit=!0,l.set(r,o,t,e,n,i,a),l.hasHit=!0,this.callback(l);break;case Zt.CLOSEST:(a<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(r,o,t,e,n,i,a));break;case Zt.ANY:this.hasHit=!0,l.hasHit=!0,l.set(r,o,t,e,n,i,a),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Fn),n.vsub(e,Ti),t.vsub(e,hr);const s=Fn.dot(Fn),r=Fn.dot(Ti),o=Fn.dot(hr),a=Ti.dot(Ti),l=Ti.dot(hr);let h,d;return(h=a*o-r*l)>=0&&(d=s*l-r*o)>=0&&h+d<s*a-r*r}}Zt.CLOSEST=Dr.CLOSEST;Zt.ANY=Dr.ANY;Zt.ALL=Dr.ALL;const sa=new Ce,cr=[],Ti=new v,hr=new v,Kp=new v,Jp=new $t,xe=new v,Oe=new v,Ye=new v,Ze=new v;new v;new xs;const ra={faceList:[0]},hs=new v,Qp=new Zt,tm=[],em=new v,nm=new v,im=new v;new v;new v;const oa=new v,sm=new v,rm=new v,om=new v,am=new v,lm=new v,cm=new v;new Ce;const hm=[],um=new Ft,Fn=new v,us=new v;function dm(c,t,e){e.vsub(c,Fn);const n=Fn.dot(t);return t.scale(n,us),us.vadd(c,us),e.distanceTo(us)}class li extends $a{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const r=t.boundingRadius,o=e.boundingRadius,a=i+r;return s-o<a}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,r=this.axisIndex;let o,a;for(this.dirty&&(this.sortList(),this.dirty=!1),o=0;o!==s;o++){const l=i[o];for(a=o+1;a<s;a++){const h=i[a];if(this.needBroadphaseCollision(l,h)){if(!li.checkBounds(l,h,r))break;this.intersectionTest(l,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?li.insertionSortX(t):e===1?li.insertionSortY(t):e===2&&li.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,r=0;const o=this.axisList,a=o.length,l=1/a;for(let m=0;m!==a;m++){const g=o[m],p=g.position.x;t+=p,e+=p*p;const f=g.position.y;n+=f,i+=f*f;const x=g.position.z;s+=x,r+=x*x}const h=e-t*t*l,d=i-n*n*l,u=r-s*s*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const r=this.axisList;e.lowerBound[s],e.upperBound[s];for(let o=0;o<r.length;o++){const a=r[o];a.aabbNeedsUpdate&&a.updateAABB(),a.aabb.overlaps(e)&&n.push(a)}return n}}class fm{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class aa{constructor(){this.spatial=new v,this.rotational=new v}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Gi{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Gi.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new aa,this.jacobianElementB=new aa,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,a=i.angularVelocity;return t.multiplyVectors(s,o)+e.multiplyVectors(r,a)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,a=i.wlambda;return t.multiplyVectors(s,o)+e.multiplyVectors(r,a)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,a=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,la),o.scale(h,ca),n.invInertiaWorldSolve.vmult(r,ha),i.invInertiaWorldSolve.vmult(a,ua),t.multiplyVectors(la,ha)+e.multiplyVectors(ca,ua)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,a=i.invInertiaWorldSolve;let l=s+r;return o.vmult(t.rotational,ds),l+=ds.dot(t.rotational),a.vmult(e.rotational,ds),l+=ds.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=pm;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Gi.idCounter=0;const la=new v,ca=new v,ha=new v,ua=new v,ds=new v,pm=new v;class mm extends Gi{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new v,this.rj=new v,this.ni=new v}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,a=gm,l=_m,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=xm,p=this.jacobianElementA,f=this.jacobianElementB,x=this.ni;r.cross(x,a),o.cross(x,l),x.negate(p.spatial),a.negate(p.rotational),f.spatial.copy(x),f.rotational.copy(l),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(r,g);const _=x.dot(g),y=this.restitution+1,M=y*u.dot(x)-y*h.dot(x)+m.dot(l)-d.dot(a),S=this.computeGiMf();return-_*e-M*n-t*S}getImpactVelocityAlongNormal(){const t=vm,e=ym,n=Mm,i=wm,s=bm;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const gm=new v,_m=new v,xm=new v,vm=new v,ym=new v,Mm=new v,wm=new v,bm=new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;class da extends Gi{constructor(t,e,n){super(t,e,-n,n),this.ri=new v,this.rj=new v,this.t=new v}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Sm,r=Em,o=this.t;n.cross(o,s),i.cross(o,r);const a=this.jacobianElementA,l=this.jacobianElementB;o.negate(a.spatial),s.negate(a.rotational),l.spatial.copy(o),l.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const Sm=new v,Em=new v;class Vi{constructor(t,e,n){n=fm.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Vi.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Vi.idCounter=0;class Wi{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Wi.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Wi.idCounter=0;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new Zt;new v;new v;new v;new v(1,0,0),new v(0,1,0),new v(0,0,1);new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;class Tm extends ct{constructor(){super({type:ct.types.PLANE}),this.worldNormal=new v,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new v),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){an.set(0,0,1),e.vmult(an,an);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),an.x===1?i.x=t.x:an.x===-1&&(n.x=t.x),an.y===1?i.y=t.y:an.y===-1&&(n.y=t.y),an.z===1?i.z=t.z:an.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const an=new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new v;new Ce;new v;new Ce;new v;new v;new v;new v;new v;new v;new v;new Ce;new v;new Ft;new Ce;class Am{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Cm extends Am{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,a=e.bodies,l=a.length,h=t;let d,u,m,g,p,f;if(o!==0)for(let M=0;M!==l;M++)a[M].updateSolveMassProperties();const x=Rm,_=Pm,y=Lm;x.length=o,_.length=o,y.length=o;for(let M=0;M!==o;M++){const S=r[M];y[M]=0,_[M]=S.computeB(h),x[M]=1/S.computeC()}if(o!==0){for(let C=0;C!==l;C++){const P=a[C],w=P.vlambda,T=P.wlambda;w.set(0,0,0),T.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let C=0;C!==o;C++){const P=r[C];d=_[C],u=x[C],f=y[C],p=P.computeGWlambda(),m=u*(d-p-P.eps*f),f+m<P.minForce?m=P.minForce-f:f+m>P.maxForce&&(m=P.maxForce-f),y[C]+=m,g+=m>0?m:-m,P.addToWlambda(m)}if(g*g<s)break}for(let C=0;C!==l;C++){const P=a[C],w=P.velocity,T=P.angularVelocity;P.vlambda.vmul(P.linearFactor,P.vlambda),w.vadd(P.vlambda,w),P.wlambda.vmul(P.angularFactor,P.wlambda),T.vadd(P.wlambda,T)}let M=r.length;const S=1/h;for(;M--;)r[M].multiplier=y[M]*S}return n}}const Lm=[],Rm=[],Pm=[];class Dm{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Im extends Dm{constructor(){super(...arguments),this.type=v}constructObject(){return new v}}const kt={sphereSphere:ct.types.SPHERE,spherePlane:ct.types.SPHERE|ct.types.PLANE,boxBox:ct.types.BOX|ct.types.BOX,sphereBox:ct.types.SPHERE|ct.types.BOX,planeBox:ct.types.PLANE|ct.types.BOX,convexConvex:ct.types.CONVEXPOLYHEDRON,sphereConvex:ct.types.SPHERE|ct.types.CONVEXPOLYHEDRON,planeConvex:ct.types.PLANE|ct.types.CONVEXPOLYHEDRON,boxConvex:ct.types.BOX|ct.types.CONVEXPOLYHEDRON,sphereHeightfield:ct.types.SPHERE|ct.types.HEIGHTFIELD,boxHeightfield:ct.types.BOX|ct.types.HEIGHTFIELD,convexHeightfield:ct.types.CONVEXPOLYHEDRON|ct.types.HEIGHTFIELD,sphereParticle:ct.types.PARTICLE|ct.types.SPHERE,planeParticle:ct.types.PLANE|ct.types.PARTICLE,boxParticle:ct.types.BOX|ct.types.PARTICLE,convexParticle:ct.types.PARTICLE|ct.types.CONVEXPOLYHEDRON,cylinderCylinder:ct.types.CYLINDER,sphereCylinder:ct.types.SPHERE|ct.types.CYLINDER,planeCylinder:ct.types.PLANE|ct.types.CYLINDER,boxCylinder:ct.types.BOX|ct.types.CYLINDER,convexCylinder:ct.types.CONVEXPOLYHEDRON|ct.types.CYLINDER,heightfieldCylinder:ct.types.HEIGHTFIELD|ct.types.CYLINDER,particleCylinder:ct.types.PARTICLE|ct.types.CYLINDER,sphereTrimesh:ct.types.SPHERE|ct.types.TRIMESH,planeTrimesh:ct.types.PLANE|ct.types.TRIMESH};class zm{get[kt.sphereSphere](){return this.sphereSphere}get[kt.spherePlane](){return this.spherePlane}get[kt.boxBox](){return this.boxBox}get[kt.sphereBox](){return this.sphereBox}get[kt.planeBox](){return this.planeBox}get[kt.convexConvex](){return this.convexConvex}get[kt.sphereConvex](){return this.sphereConvex}get[kt.planeConvex](){return this.planeConvex}get[kt.boxConvex](){return this.boxConvex}get[kt.sphereHeightfield](){return this.sphereHeightfield}get[kt.boxHeightfield](){return this.boxHeightfield}get[kt.convexHeightfield](){return this.convexHeightfield}get[kt.sphereParticle](){return this.sphereParticle}get[kt.planeParticle](){return this.planeParticle}get[kt.boxParticle](){return this.boxParticle}get[kt.convexParticle](){return this.convexParticle}get[kt.cylinderCylinder](){return this.convexConvex}get[kt.sphereCylinder](){return this.sphereConvex}get[kt.planeCylinder](){return this.planeConvex}get[kt.boxCylinder](){return this.boxConvex}get[kt.convexCylinder](){return this.convexConvex}get[kt.heightfieldCylinder](){return this.heightfieldCylinder}get[kt.particleCylinder](){return this.particleCylinder}get[kt.sphereTrimesh](){return this.sphereTrimesh}get[kt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Im,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=t,o.bj=e):o=new mm(t,e),o.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const a=this.currentContactMaterial;o.restitution=a.restitution,o.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(o.restitution=l.restitution*h.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,o=this.world,a=this.currentContactMaterial;let l=a.friction;const h=s.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(o.frictionGravity||o.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,p=g.length?g.pop():new da(n,i,u*m),f=g.length?g.pop():new da(n,i,u*m);return p.bi=f.bi=n,p.bj=f.bj=i,p.minForce=f.minForce=-u*m,p.maxForce=f.maxForce=u*m,p.ri.copy(t.ri),p.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(p.t,f.t),p.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),f.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),p.enabled=f.enabled=t.enabled,e.push(p,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Dn.setZero(),si.setZero(),ri.setZero();const s=e.bi;e.bj;for(let o=0;o!==t;o++)e=this.result[this.result.length-1-o],e.bi!==s?(Dn.vadd(e.ni,Dn),si.vadd(e.ri,si),ri.vadd(e.rj,ri)):(Dn.vsub(e.ni,Dn),si.vadd(e.rj,si),ri.vadd(e.ri,ri));const r=1/t;si.scale(r,n.ri),ri.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Dn.normalize(),Dn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;const a=Bm,l=Um,h=Nm,d=Fm;for(let u=0,m=t.length;u!==m;u++){const g=t[u],p=e[u];let f=null;g.material&&p.material&&(f=n.getContactMaterial(g.material,p.material)||null);const x=g.type&at.KINEMATIC&&p.type&at.STATIC||g.type&at.STATIC&&p.type&at.KINEMATIC||g.type&at.KINEMATIC&&p.type&at.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],a),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const y=g.shapes[_];for(let M=0;M<p.shapes.length;M++){p.quaternion.mult(p.shapeOrientations[M],l),p.quaternion.vmult(p.shapeOffsets[M],d),d.vadd(p.position,d);const S=p.shapes[M];if(!(y.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+S.boundingSphereRadius)continue;let C=null;y.material&&S.material&&(C=n.getContactMaterial(y.material,S.material)||null),this.currentContactMaterial=C||f||n.defaultContactMaterial;const P=y.type|S.type,w=this[P];if(w){let T=!1;y.type<S.type?T=w.call(this,y,S,h,d,a,l,g,p,y,S,x):T=w.call(this,S,y,d,h,l,a,p,g,y,S,x),T&&x&&(n.shapeOverlapKeeper.set(y.id,S.id),n.bodyOverlapKeeper.set(g.id,p.id))}}}}}sphereSphere(t,e,n,i,s,r,o,a,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(o,a,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(a.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,r,o,a,l,h,d){const u=this.createContactEquation(o,a,t,e,l,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,fs),u.ni.scale(u.ni.dot(fs),fa),fs.vsub(fa,u.rj),-fs.dot(u.ni)<=t.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(o.position,m),g.vadd(i,g),g.vsub(a.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,r,o,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,o,a,t,e,d)}sphereBox(t,e,n,i,s,r,o,a,l,h,d){const u=this.v3pool,m=hg;n.vsub(i,ps),e.getSideNormals(m,r);const g=t.radius;let p=!1;const f=dg,x=fg,_=pg;let y=null,M=0,S=0,C=0,P=null;for(let N=0,Z=m.length;N!==Z&&p===!1;N++){const O=ag;O.copy(m[N]);const q=O.length();O.normalize();const K=ps.dot(O);if(K<q+g&&K>0){const st=lg,z=cg;st.copy(m[(N+1)%3]),z.copy(m[(N+2)%3]);const J=st.length(),nt=z.length();st.normalize(),z.normalize();const U=ps.dot(st),ht=ps.dot(z);if(U<J&&U>-J&&ht<nt&&ht>-nt){const ut=Math.abs(K-q-g);if((P===null||ut<P)&&(P=ut,S=U,C=ht,y=q,f.copy(O),x.copy(st),_.copy(z),M++,d))return!0}}}if(M){p=!0;const N=this.createContactEquation(o,a,t,e,l,h);f.scale(-g,N.ri),N.ni.copy(f),N.ni.negate(N.ni),f.scale(y,f),x.scale(S,x),f.vadd(x,f),_.scale(C,_),f.vadd(_,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(a.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let w=u.get();const T=ug;for(let N=0;N!==2&&!p;N++)for(let Z=0;Z!==2&&!p;Z++)for(let O=0;O!==2&&!p;O++)if(w.set(0,0,0),N?w.vadd(m[0],w):w.vsub(m[0],w),Z?w.vadd(m[1],w):w.vsub(m[1],w),O?w.vadd(m[2],w):w.vsub(m[2],w),i.vadd(w,T),T.vsub(n,T),T.lengthSquared()<g*g){if(d)return!0;p=!0;const q=this.createContactEquation(o,a,t,e,l,h);q.ri.copy(T),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(g,q.ri),q.rj.copy(w),q.ri.vadd(n,q.ri),q.ri.vsub(o.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(a.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}u.release(w),w=null;const D=u.get(),V=u.get(),W=u.get(),L=u.get(),R=u.get(),I=m.length;for(let N=0;N!==I&&!p;N++)for(let Z=0;Z!==I&&!p;Z++)if(N%3!==Z%3){m[Z].cross(m[N],D),D.normalize(),m[N].vadd(m[Z],V),W.copy(n),W.vsub(V,W),W.vsub(i,W);const O=W.dot(D);D.scale(O,L);let q=0;for(;q===N%3||q===Z%3;)q++;R.copy(n),R.vsub(L,R),R.vsub(V,R),R.vsub(i,R);const K=Math.abs(O),st=R.length();if(K<m[q].length()&&st<g){if(d)return!0;p=!0;const z=this.createContactEquation(o,a,t,e,l,h);V.vadd(L,z.rj),z.rj.copy(z.rj),R.negate(z.ni),z.ni.normalize(),z.ri.copy(z.rj),z.ri.vadd(i,z.ri),z.ri.vsub(n,z.ri),z.ri.normalize(),z.ri.scale(g,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(o.position,z.ri),z.rj.vadd(i,z.rj),z.rj.vsub(a.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}u.release(D,V,W,L,R)}planeBox(t,e,n,i,s,r,o,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,o,a,t,e,d)}convexConvex(t,e,n,i,s,r,o,a,l,h,d,u,m){const g=Lg;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,g,u,m)){const p=[],f=Rg;t.clipAgainstHull(n,s,e,i,r,g,-100,100,p);let x=0;for(let _=0;_!==p.length;_++){if(d)return!0;const y=this.createContactEquation(o,a,t,e,l,h),M=y.ri,S=y.rj;g.negate(y.ni),p[_].normal.negate(f),f.scale(p[_].depth,f),p[_].point.vadd(f,M),S.copy(p[_].point),M.vsub(n,M),S.vsub(i,S),M.vadd(n,M),M.vsub(o.position,M),S.vadd(i,S),S.vsub(a.position,S),this.result.push(y),x++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&x&&this.createFrictionFromAverage(x)}}sphereConvex(t,e,n,i,s,r,o,a,l,h,d){const u=this.v3pool;n.vsub(i,mg);const m=e.faceNormals,g=e.faces,p=e.vertices,f=t.radius;let x=!1;for(let _=0;_!==p.length;_++){const y=p[_],M=vg;r.vmult(y,M),i.vadd(M,M);const S=xg;if(M.vsub(n,S),S.lengthSquared()<f*f){if(d)return!0;x=!0;const C=this.createContactEquation(o,a,t,e,l,h);C.ri.copy(S),C.ri.normalize(),C.ni.copy(C.ri),C.ri.scale(f,C.ri),M.vsub(i,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(o.position,C.ri),C.rj.vadd(i,C.rj),C.rj.vsub(a.position,C.rj),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);return}}for(let _=0,y=g.length;_!==y&&x===!1;_++){const M=m[_],S=g[_],C=yg;r.vmult(M,C);const P=Mg;r.vmult(p[S[0]],P),P.vadd(i,P);const w=wg;C.scale(-f,w),n.vadd(w,w);const T=bg;w.vsub(P,T);const D=T.dot(C),V=Sg;if(n.vsub(P,V),D<0&&V.dot(C)>0){const W=[];for(let L=0,R=S.length;L!==R;L++){const I=u.get();r.vmult(p[S[L]],I),i.vadd(I,I),W.push(I)}if(og(W,C,n)){if(d)return!0;x=!0;const L=this.createContactEquation(o,a,t,e,l,h);C.scale(-f,L.ri),C.negate(L.ni);const R=u.get();C.scale(-D,R);const I=u.get();C.scale(-f,I),n.vsub(i,L.rj),L.rj.vadd(I,L.rj),L.rj.vadd(R,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(a.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(o.position,L.ri),u.release(R),u.release(I),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let N=0,Z=W.length;N!==Z;N++)u.release(W[N]);return}else for(let L=0;L!==S.length;L++){const R=u.get(),I=u.get();r.vmult(p[S[(L+1)%S.length]],R),r.vmult(p[S[(L+2)%S.length]],I),i.vadd(R,R),i.vadd(I,I);const N=gg;I.vsub(R,N);const Z=_g;N.unit(Z);const O=u.get(),q=u.get();n.vsub(R,q);const K=q.dot(Z);Z.scale(K,O),O.vadd(R,O);const st=u.get();if(O.vsub(n,st),K>0&&K*K<N.lengthSquared()&&st.lengthSquared()<f*f){if(d)return!0;const z=this.createContactEquation(o,a,t,e,l,h);O.vsub(i,z.rj),O.vsub(n,z.ni),z.ni.normalize(),z.ni.scale(f,z.ri),z.rj.vadd(i,z.rj),z.rj.vsub(a.position,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(o.position,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(let J=0,nt=W.length;J!==nt;J++)u.release(W[J]);u.release(R),u.release(I),u.release(O),u.release(st),u.release(q);return}u.release(R),u.release(I),u.release(O),u.release(st),u.release(q)}for(let L=0,R=W.length;L!==R;L++)u.release(W[L])}}}planeConvex(t,e,n,i,s,r,o,a,l,h,d){const u=Eg,m=Tg;m.set(0,0,1),s.vmult(m,m);let g=0;const p=Ag;for(let f=0;f!==e.vertices.length;f++)if(u.copy(e.vertices[f]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,p),m.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(o,a,t,e,l,h),y=Cg;m.scale(m.dot(p),y),u.vsub(y,y),y.vsub(n,_.ri),_.ni.copy(m),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(o.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(a.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,r,o,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,o,a,t,e,d)}sphereHeightfield(t,e,n,i,s,r,o,a,l,h,d){const u=e.data,m=t.radius,g=e.elementSize,p=Vg,f=Gg;Ft.pointToLocalFrame(i,r,n,f);let x=Math.floor((f.x-m)/g)-1,_=Math.ceil((f.x+m)/g)+1,y=Math.floor((f.y-m)/g)-1,M=Math.ceil((f.y+m)/g)+1;if(_<0||M<0||x>u.length||y>u[0].length)return;x<0&&(x=0),_<0&&(_=0),y<0&&(y=0),M<0&&(M=0),x>=u.length&&(x=u.length-1),_>=u.length&&(_=u.length-1),M>=u[0].length&&(M=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const S=[];e.getRectMinMax(x,y,_,M,S);const C=S[0],P=S[1];if(f.z-m>P||f.z+m<C)return;const w=this.result;for(let T=x;T<_;T++)for(let D=y;D<M;D++){const V=w.length;let W=!1;if(e.getConvexTrianglePillar(T,D,!1),Ft.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(W=this.sphereConvex(t,e.pillarConvex,n,p,s,r,o,a,t,e,d)),d&&W||(e.getConvexTrianglePillar(T,D,!0),Ft.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(W=this.sphereConvex(t,e.pillarConvex,n,p,s,r,o,a,t,e,d)),d&&W))return!0;if(w.length-V>2)return}}boxHeightfield(t,e,n,i,s,r,o,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,o,a,t,e,d)}convexHeightfield(t,e,n,i,s,r,o,a,l,h,d){const u=e.data,m=e.elementSize,g=t.boundingSphereRadius,p=Og,f=kg,x=Ug;Ft.pointToLocalFrame(i,r,n,x);let _=Math.floor((x.x-g)/m)-1,y=Math.ceil((x.x+g)/m)+1,M=Math.floor((x.y-g)/m)-1,S=Math.ceil((x.y+g)/m)+1;if(y<0||S<0||_>u.length||M>u[0].length)return;_<0&&(_=0),y<0&&(y=0),M<0&&(M=0),S<0&&(S=0),_>=u.length&&(_=u.length-1),y>=u.length&&(y=u.length-1),S>=u[0].length&&(S=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const C=[];e.getRectMinMax(_,M,y,S,C);const P=C[0],w=C[1];if(!(x.z-g>w||x.z+g<P))for(let T=_;T<y;T++)for(let D=M;D<S;D++){let V=!1;if(e.getConvexTrianglePillar(T,D,!1),Ft.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.convexConvex(t,e.pillarConvex,n,p,s,r,o,a,null,null,d,f,null)),d&&V||(e.getConvexTrianglePillar(T,D,!0),Ft.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.convexConvex(t,e.pillarConvex,n,p,s,r,o,a,null,null,d,f,null)),d&&V))return!0}}sphereParticle(t,e,n,i,s,r,o,a,l,h,d){const u=zg;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(a,o,e,t,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,r,o,a,l,h,d){const u=Pg;u.set(0,0,1),o.quaternion.vmult(u,u);const m=Dg;if(i.vsub(o.position,m),u.dot(m)<=0){if(d)return!0;const p=this.createContactEquation(a,o,e,t,l,h);p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0);const f=Ig;u.scale(u.dot(i),f),i.vsub(f,f),p.rj.copy(f),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}boxParticle(t,e,n,i,s,r,o,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,o,a,t,e,d)}convexParticle(t,e,n,i,s,r,o,a,l,h,d){let u=-1;const m=Fg,g=Bg;let p=null;const f=Ng;if(f.copy(i),f.vsub(n,f),s.conjugate(pa),pa.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let x=0,_=t.faces.length;x!==_;x++){const y=[t.worldVertices[t.faces[x][0]]],M=t.worldFaceNormals[x];i.vsub(y[0],ma);const S=-M.dot(ma);if(p===null||Math.abs(S)<Math.abs(p)){if(d)return!0;p=S,u=x,m.copy(M)}}if(u!==-1){const x=this.createContactEquation(a,o,e,t,l,h);m.scale(p,g),g.vadd(i,g),g.vsub(n,g),x.rj.copy(g),m.negate(x.ni),x.ri.set(0,0,0);const _=x.ri,y=x.rj;_.vadd(i,_),_.vsub(a.position,_),y.vadd(n,y),y.vsub(o.position,y),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,o,a,l,h,d){return this.convexHeightfield(e,t,i,n,r,s,a,o,l,h,d)}particleCylinder(t,e,n,i,s,r,o,a,l,h,d){return this.convexParticle(e,t,i,n,r,s,a,o,l,h,d)}sphereTrimesh(t,e,n,i,s,r,o,a,l,h,d){const u=Xm,m=jm,g=Ym,p=Zm,f=$m,x=Km,_=eg,y=qm,M=Wm,S=ng;Ft.pointToLocalFrame(i,r,n,f);const C=t.radius;_.lowerBound.set(f.x-C,f.y-C,f.z-C),_.upperBound.set(f.x+C,f.y+C,f.z+C),e.getTrianglesInAABB(_,S);const P=Hm,w=t.radius*t.radius;for(let L=0;L<S.length;L++)for(let R=0;R<3;R++)if(e.getVertex(e.indices[S[L]*3+R],P),P.vsub(f,M),M.lengthSquared()<=w){if(y.copy(P),Ft.pointToWorldFrame(i,r,y,P),P.vsub(n,M),d)return!0;let I=this.createContactEquation(o,a,t,e,l,h);I.ni.copy(M),I.ni.normalize(),I.ri.copy(I.ni),I.ri.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),I.rj.copy(P),I.rj.vsub(a.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}for(let L=0;L<S.length;L++)for(let R=0;R<3;R++){e.getVertex(e.indices[S[L]*3+R],u),e.getVertex(e.indices[S[L]*3+(R+1)%3],m),m.vsub(u,g),f.vsub(m,x);const I=x.dot(g);f.vsub(u,x);let N=x.dot(g);if(N>0&&I<0&&(f.vsub(u,x),p.copy(g),p.normalize(),N=x.dot(p),p.scale(N,x),x.vadd(u,x),x.distanceTo(f)<t.radius)){if(d)return!0;const O=this.createContactEquation(o,a,t,e,l,h);x.vsub(f,O.ni),O.ni.normalize(),O.ni.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(o.position,O.ri),Ft.pointToWorldFrame(i,r,x,x),x.vsub(a.position,O.rj),Ft.vectorToWorldFrame(r,O.ni,O.ni),Ft.vectorToWorldFrame(r,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}const T=Jm,D=Qm,V=tg,W=Vm;for(let L=0,R=S.length;L!==R;L++){e.getTriangleVertices(S[L],T,D,V),e.getNormal(S[L],W),f.vsub(T,x);let I=x.dot(W);if(W.scale(I,x),f.vsub(x,x),I=x.distanceTo(f),Zt.pointInTriangle(x,T,D,V)&&I<t.radius){if(d)return!0;let N=this.createContactEquation(o,a,t,e,l,h);x.vsub(f,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),Ft.pointToWorldFrame(i,r,x,x),x.vsub(a.position,N.rj),Ft.vectorToWorldFrame(r,N.ni,N.ni),Ft.vectorToWorldFrame(r,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}S.length=0}planeTrimesh(t,e,n,i,s,r,o,a,l,h,d){const u=new v,m=Om;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const p=new v;p.copy(u),Ft.pointToWorldFrame(i,r,p,u);const f=km;if(u.vsub(n,f),m.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(o,a,t,e,l,h);_.ni.copy(m);const y=Gm;m.scale(f.dot(m),y),u.vsub(y,y),_.ri.copy(y),_.ri.vsub(o.position,_.ri),_.rj.copy(u),_.rj.vsub(a.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Dn=new v,si=new v,ri=new v,Nm=new v,Fm=new v,Bm=new $t,Um=new $t,Om=new v,km=new v,Gm=new v,Vm=new v,Wm=new v;new v;const Hm=new v,qm=new v,Xm=new v,jm=new v,Ym=new v,Zm=new v,$m=new v,Km=new v,Jm=new v,Qm=new v,tg=new v,eg=new Ce,ng=[],fs=new v,fa=new v,ig=new v,sg=new v,rg=new v;function og(c,t,e){let n=null;const i=c.length;for(let s=0;s!==i;s++){const r=c[s],o=ig;c[(s+1)%i].vsub(r,o);const a=sg;o.cross(t,a);const l=rg;e.vsub(r,l);const h=a.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const ps=new v,ag=new v,lg=new v,cg=new v,hg=[new v,new v,new v,new v,new v,new v],ug=new v,dg=new v,fg=new v,pg=new v,mg=new v,gg=new v,_g=new v,xg=new v,vg=new v,yg=new v,Mg=new v,wg=new v,bg=new v,Sg=new v;new v;new v;const Eg=new v,Tg=new v,Ag=new v,Cg=new v,Lg=new v,Rg=new v,Pg=new v,Dg=new v,Ig=new v,zg=new v,pa=new $t,Ng=new v;new v;const Fg=new v,ma=new v,Bg=new v,Ug=new v,Og=new v,kg=[0],Gg=new v,Vg=new v;class ga{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let o=0;for(let a=0;a<s;a++){let l=!1;const h=n[a];for(;h>i[o];)o++;l=h===i[o],l||_a(t,h)}o=0;for(let a=0;a<r;a++){let l=!1;const h=i[a];for(;h>n[o];)o++;l=n[o]===h,l||_a(e,h)}}}function _a(c,t){c.push((t&4294901760)>>16,t&65535)}const ur=(c,t)=>c<t?`${c}-${t}`:`${t}-${c}`;class Wg{constructor(){this.data={keys:[]}}get(t,e){const n=ur(t,e);return this.data[n]}set(t,e,n){const i=ur(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=ur(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Hg extends Za{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new v,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new v,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new $p,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Cm,this.constraints=[],this.narrowphase=new zm(this),this.collisionMatrix=new na,this.collisionMatrixPrevious=new na,this.bodyOverlapKeeper=new ga,this.shapeOverlapKeeper=new ga,this.contactmaterials=[],this.contactMaterialTable=new Wg,this.defaultMaterial=new Wi("default"),this.defaultContactMaterial=new Vi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof xs?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Zt.ALL,n.from=t,n.to=e,n.callback=i,dr.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Zt.ANY,n.from=t,n.to=e,n.result=i,dr.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Zt.CLOSEST,n.from=t,n.to=e,n.result=i,dr.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof at&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Kt.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Kt.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Kt.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let o=0;o!==this.bodies.length;o++){const a=this.bodies[o];a.previousPosition.lerp(a.position,r,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,r,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Zg,i=$g,s=this.bodies.length,r=this.bodies,o=this.solver,a=this.gravity,l=this.doProfiling,h=this.profile,d=at.DYNAMIC;let u=-1/0;const m=this.constraints,g=Yg;a.length();const p=a.x,f=a.y,x=a.z;let _=0;for(l&&(u=Kt.now()),_=0;_!==s;_++){const L=r[_];if(L.type===d){const R=L.force,I=L.mass;R.x+=I*p,R.y+=I*f,R.z+=I*x}}for(let L=0,R=this.subsystems.length;L!==R;L++)this.subsystems[L].update();l&&(u=Kt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Kt.now()-u);let y=m.length;for(_=0;_!==y;_++){const L=m[_];if(!L.collideConnected)for(let R=n.length-1;R>=0;R-=1)(L.bodyA===n[R]&&L.bodyB===i[R]||L.bodyB===n[R]&&L.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),l&&(u=Kt.now());const M=jg,S=e.length;for(_=0;_!==S;_++)M.push(e[_]);e.length=0;const C=this.frictionEquations.length;for(_=0;_!==C;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,g),l&&(h.narrowphase=Kt.now()-u),l&&(u=Kt.now()),_=0;_<this.frictionEquations.length;_++)o.addEquation(this.frictionEquations[_]);const P=e.length;for(let L=0;L!==P;L++){const R=e[L],I=R.bi,N=R.bj,Z=R.si,O=R.sj;let q;if(I.material&&N.material?q=this.getContactMaterial(I.material,N.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,I.material&&N.material&&(I.material.friction>=0&&N.material.friction>=0&&I.material.friction*N.material.friction,I.material.restitution>=0&&N.material.restitution>=0&&(R.restitution=I.material.restitution*N.material.restitution)),o.addEquation(R),I.allowSleep&&I.type===at.DYNAMIC&&I.sleepState===at.SLEEPING&&N.sleepState===at.AWAKE&&N.type!==at.STATIC){const K=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),st=N.sleepSpeedLimit**2;K>=st*2&&(I.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===at.DYNAMIC&&N.sleepState===at.SLEEPING&&I.sleepState===at.AWAKE&&I.type!==at.STATIC){const K=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),st=I.sleepSpeedLimit**2;K>=st*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(I,N,!0),this.collisionMatrixPrevious.get(I,N)||(Ai.body=N,Ai.contact=R,I.dispatchEvent(Ai),Ai.body=I,N.dispatchEvent(Ai)),this.bodyOverlapKeeper.set(I.id,N.id),this.shapeOverlapKeeper.set(Z.id,O.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Kt.now()-u,u=Kt.now()),_=0;_!==s;_++){const L=r[_];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(y=m.length,_=0;_!==y;_++){const L=m[_];L.update();for(let R=0,I=L.equations.length;R!==I;R++){const N=L.equations[R];o.addEquation(N)}}o.solve(t,this),l&&(h.solve=Kt.now()-u),o.removeAllEquations();const w=Math.pow;for(_=0;_!==s;_++){const L=r[_];if(L.type&d){const R=w(1-L.linearDamping,t),I=L.velocity;I.scale(R,I);const N=L.angularVelocity;if(N){const Z=w(1-L.angularDamping,t);N.scale(Z,N)}}}this.dispatchEvent(Xg),l&&(u=Kt.now());const D=this.stepnumber%(this.quatNormalizeSkip+1)===0,V=this.quatNormalizeFast;for(_=0;_!==s;_++)r[_].integrate(t,D,V);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Kt.now()-u),this.stepnumber+=1,this.dispatchEvent(qg);let W=!0;if(this.allowSleep)for(W=!1,_=0;_!==s;_++){const L=r[_];L.sleepTick(this.time),L.sleepState!==at.SLEEPING&&(W=!0)}this.hasActiveBodies=W}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ln,cn),t){for(let s=0,r=ln.length;s<r;s+=2)Ci.bodyA=this.getBodyById(ln[s]),Ci.bodyB=this.getBodyById(ln[s+1]),this.dispatchEvent(Ci);Ci.bodyA=Ci.bodyB=null}if(e){for(let s=0,r=cn.length;s<r;s+=2)Li.bodyA=this.getBodyById(cn[s]),Li.bodyB=this.getBodyById(cn[s+1]),this.dispatchEvent(Li);Li.bodyA=Li.bodyB=null}ln.length=cn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(ln,cn),n){for(let s=0,r=ln.length;s<r;s+=2){const o=this.getShapeById(ln[s]),a=this.getShapeById(ln[s+1]);hn.shapeA=o,hn.shapeB=a,o&&(hn.bodyA=o.body),a&&(hn.bodyB=a.body),this.dispatchEvent(hn)}hn.bodyA=hn.bodyB=hn.shapeA=hn.shapeB=null}if(i){for(let s=0,r=cn.length;s<r;s+=2){const o=this.getShapeById(cn[s]),a=this.getShapeById(cn[s+1]);un.shapeA=o,un.shapeB=a,o&&(un.bodyA=o.body),a&&(un.bodyB=a.body),this.dispatchEvent(un)}un.bodyA=un.bodyB=un.shapeA=un.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ce;const dr=new Zt,Kt=globalThis.performance||{};if(!Kt.now){let c=Date.now();Kt.timing&&Kt.timing.navigationStart&&(c=Kt.timing.navigationStart),Kt.now=()=>Date.now()-c}new v;const qg={type:"postStep"},Xg={type:"preStep"},Ai={type:at.COLLIDE_EVENT_NAME,body:null,contact:null},jg=[],Yg=[],Zg=[],$g=[],ln=[],cn=[],Ci={type:"beginContact",bodyA:null,bodyB:null},Li={type:"endContact",bodyA:null,bodyB:null},hn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},un={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Kg{position;camera;body;pitch=0;yaw=0;sensitivity=.002;speed=yt.PLAYER_SPEED;jumpForce=yt.PLAYER_JUMP_FORCE;isGrounded=!1;constructor(t,e,n){this.camera=t,this.position=e.clone();const i=yt.PLAYER_RADIUS,s=yt.PLAYER_HEIGHT/2,r=new ki(new v(i,s,i));this.body=new at({mass:60,shape:r,position:new v(e.x,e.y+s,e.z),fixedRotation:!0,linearDamping:.1}),n.addBody(this.body),this.syncCamera()}update(t,e,n){if(this.position.set(this.body.position.x,this.body.position.y,this.body.position.z),!t.isLocked){this.body.velocity.x*=.8,this.body.velocity.z*=.8;return}this.handleRotation(t),this.checkGrounded(n),this.handleMovement(t,e),this.syncCamera(),this.updateHUD()}handleRotation(t){const e=t.consumeMouseDelta();this.yaw-=e.x*this.sensitivity,this.pitch-=e.y*this.sensitivity;const n=85*Math.PI/180;this.pitch=Math.max(-n,Math.min(n,this.pitch))}checkGrounded(t){const e=this.position.y-yt.PLAYER_HEIGHT/2-.1,n=[{x:this.position.x,z:this.position.z},{x:this.position.x-.3,z:this.position.z-.3},{x:this.position.x+.3,z:this.position.z-.3},{x:this.position.x-.3,z:this.position.z+.3},{x:this.position.x+.3,z:this.position.z+.3}];let i=!1;for(const s of n){const r=Math.floor(s.x),o=Math.floor(e),a=Math.floor(s.z);if(t.getBlock(r,o,a)!==0){i=!0;break}}this.isGrounded=i||Math.abs(this.body.velocity.y)<.05}handleMovement(t,e){const n=new G;t.keys.KeyW&&(n.z-=1),t.keys.KeyS&&(n.z+=1),t.keys.KeyA&&(n.x-=1),t.keys.KeyD&&(n.x+=1),n.normalize();const i=new G;i.copy(n),i.applyAxisAngle(new G(0,1,0),this.yaw),this.body.velocity.x=i.x*this.speed,this.body.velocity.z=i.z*this.speed,t.keys.Space&&this.isGrounded&&(this.body.velocity.y=this.jumpForce,this.isGrounded=!1)}syncCamera(){const t=new bn,e=new bn().setFromAxisAngle(new G(0,1,0),this.yaw),n=new bn().setFromAxisAngle(new G(1,0,0),this.pitch);t.multiplyQuaternions(e,n),this.camera.quaternion.copy(t);const i=yt.PLAYER_HEIGHT/2-.2;this.camera.position.set(this.position.x,this.position.y+i,this.position.z)}updateHUD(){const t=document.getElementById("pos-display");t&&(t.textContent=`${this.position.x.toFixed(1)}, ${this.position.y.toFixed(1)}, ${this.position.z.toFixed(1)}`)}getYaw(){return this.yaw}}class Jg{world;blockBodies=new Map;blockShape;constructor(){this.world=new Hg,this.world.gravity.set(0,yt.GRAVITY,0),this.world.broadphase=new li(this.world),this.world.solver.iterations=5;const t=new Wi("default"),e=new Vi(t,t,{friction:.1,restitution:0});this.world.addContactMaterial(e),this.world.defaultContactMaterial=e,this.blockShape=new ki(new v(.5,.5,.5));const n=new at({mass:0,shape:new Tm});n.quaternion.setFromEuler(-Math.PI/2,0,0),n.position.set(0,-50,0),this.world.addBody(n)}updateBlockBodies(t,e){const i=Math.floor(t.x),s=Math.floor(t.y),r=Math.floor(t.z),o=new Set;for(let a=i-3;a<=i+3;a++)for(let l=s-3-1;l<=s+3;l++)for(let h=r-3;h<=r+3;h++){const d=e.getBlock(a,l,h),u=gs[d];if(u&&u.isSolid){const m=`${a},${l},${h}`;if(o.add(m),!this.blockBodies.has(m)){const g=new at({mass:0,shape:this.blockShape,position:new v(a+.5,l+.5,h+.5)});this.world.addBody(g),this.blockBodies.set(m,g)}}}for(const[a,l]of this.blockBodies.entries())o.has(a)||(this.world.removeBody(l),this.blockBodies.delete(a))}step(t){this.world.step(1/60,t,3);const e=document.getElementById("bodies-display");e&&(e.textContent=this.world.bodies.length.toString())}}const bs=new vp("canvas-container"),Mr=new Jg,vs=new Sp(document.body),Ie=new Kg(bs.camera,new G(8,5,8),Mr.world),kn=new bp(bs.scene);kn.generateWorldAround(Ie.position.x,Ie.position.z);const xa=new xp,Qg=6;let va=0;function sl(c){requestAnimationFrame(sl);const t=Math.min((c-va)/1e3,.1);va=c,Mr.updateBlockBodies(Ie.position,kn),Mr.step(t),Ie.update(vs,t,kn),vs.isLocked&&kn.generateWorldAround(Ie.position.x,Ie.position.z),bs.render()}window.addEventListener("mousedown",c=>{if(!vs.isLocked)return;xa.setFromCamera(new Ut(0,0),bs.camera);const t=kn.getChunkMeshes(),e=xa.intersectObjects(t);if(e.length>0){const n=e[0];if(n.distance>Qg)return;const i=n.point,s=n.face?.normal;if(!s)return;if(c.button===0){const r=i.clone().sub(s.clone().multiplyScalar(.1)),o=Math.floor(r.x),a=Math.floor(r.y),l=Math.floor(r.z);kn.setBlock(o,a,l,Je.AIR)}else if(c.button===2){const r=i.clone().add(s.clone().multiplyScalar(.1)),o=Math.floor(r.x),a=Math.floor(r.y),l=Math.floor(r.z),h=Ie.position.x-yt.PLAYER_RADIUS,d=Ie.position.x+yt.PLAYER_RADIUS,u=Ie.position.y-yt.PLAYER_HEIGHT/2,m=Ie.position.y+yt.PLAYER_HEIGHT/2,g=Ie.position.z-yt.PLAYER_RADIUS,p=Ie.position.z+yt.PLAYER_RADIUS,f=o,x=o+1,_=a,y=a+1,M=l,S=l+1;h<x&&d>f&&u<y&&m>_&&g<S&&p>M||kn.setBlock(o,a,l,Je.DIRT)}}});window.addEventListener("contextmenu",c=>{c.preventDefault()});const ya=document.getElementById("start-btn"),t0=document.getElementById("menu-overlay");if(ya&&t0){ya.addEventListener("click",()=>{vs.requestLock()});let c=!1;document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===document.body&&!c&&(c=!0,requestAnimationFrame(sl))})}

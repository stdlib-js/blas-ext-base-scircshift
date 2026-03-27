"use strict";var h=function(o,u){return function(){return u||o((u={exports:{}}).exports,u),u.exports}};var y=h(function(K,j){
var p=require('@stdlib/math-base-special-floor/dist');function w(o,u,r,d,l){var q,c,v,e,s,f,a,n,i,t;if(o<=0||(u%=o,u<0&&(u+=o),u===0))return r;if(i=d,c=o-u,q=u,c<q){for(e=l,s=e+c*i,f=s,a=s+q*i,n=p(c/2),t=0;t<n;t++)s-=i,a-=i,v=r[s],r[s]=r[e],r[e]=r[f],r[f]=r[a],r[a]=v,e+=i,f+=i;for(n=p((a-f)/i/2),t=0;t<n;t++)a-=i,v=r[f],r[f]=r[a],r[a]=r[e],r[e]=v,e+=i,f+=i;for(n=p((a-e)/i/2),t=0;t<n;t++)a-=i,v=r[e],r[e]=r[a],r[a]=v,e+=i}else if(c>q){for(e=l,s=e+c*i,f=s,a=s+q*i,n=p(q/2),t=0;t<n;t++)s-=i,a-=i,v=r[s],r[s]=r[e],r[e]=r[f],r[f]=r[a],r[a]=v,e+=i,f+=i;for(n=p((s-e)/i/2),t=0;t<n;t++)s-=i,a-=i,v=r[s],r[s]=r[e],r[e]=r[a],r[a]=v,e+=i;for(n=p((a-e)/i/2),t=0;t<n;t++)a-=i,v=r[e],r[e]=r[a],r[a]=v,e+=i}else for(e=l,s=e+c*i,t=0;t<c;t++)v=r[e],r[e]=r[s],r[s]=v,e+=i,s+=i;return r}j.exports=w
});var _=h(function(L,R){
var z=require('@stdlib/strided-base-stride2offset/dist'),A=y();function B(o,u,r,d){return A(o,u,r,d,z(o,d))}R.exports=B
});var E=h(function(M,g){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=_(),D=y();C(b,"ndarray",D);g.exports=b
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=E(),m,O=G(F(__dirname,"./native.js"));H(O)?m=I:m=O;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

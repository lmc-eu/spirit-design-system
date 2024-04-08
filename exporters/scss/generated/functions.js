"use strict";function T(t){return t.replace(/\s/g,"-").replace(/\//g,"-").replace(/-\d\d-/g,"-").replace(/--+/g,"-").toLowerCase()}function W(t){return t.slice(-1)==="s"?t.replace(/.$/,""):t}function w(t){return t==="radius"?"radii":t.slice(-1)==="s"?t:`${t}s`}function G(t,n){let i="";return Object.entries(t).forEach(([s,u])=>{i=`${i}
$${n?`${s}-colors`:w(s)}: (
${u.map(a=>`    ${a}: $${s}-${a},`).join(`
`)}
) !default;
`}),i}function m(t,n){let i=t.toString();return+t!=0&&(n==="Pixels"&&(i+="px"),n==="rem"&&(i+="rem")),i}const S={SHORT:"short",LONG:"long"};function L(t,n=S.SHORT){const i=t.match(/.{1,2}/g);let s=n===S.SHORT;return i&&i.forEach(u=>{n===S.SHORT&&(s=/^(.)\1+$/.test(u))}),s?`${t.substring(0,1)}${t.substring(2,3)}${t.substring(4,5)}${t.substring(6,7)}`:n===S.LONG&&t.length===3?t.split("").map(u=>u+u).join(""):t}function E(t){return t.a<255?`#${t.hex}`:`#${L(t.hex.substring(0,6))}`}function M(t,n){const i=n.y-t.y,s=n.x-t.x;let a=Math.atan2(i,s)*180/Math.PI;return a+=90,(a<0?360+a:a)%360}function H(t,n){const i=T(t.origin?t.origin.name:t.name),s=T(n.origin?n.origin.name:n.name);return i.localeCompare(s)}function R(t,n){return+t.value.text-+n.value.text}function b(t,n,i,s){const u=i.trim().split(",");let a="",$="";if(u.some(d=>((t.origin?t.origin.name:t.name).includes(d)&&(a=d),(n.origin?n.origin.name:n.name).includes(d)&&($=d),!1)),s&&!a)return-1;let g=u.indexOf(a)-u.indexOf($);return g===0&&(g=H(t,n)),g}function z(t){return t.name.match(/ \d$/)}function D(t,n=[],i=!1,s=!1,u="",a=""){let $=t.sort((e,l)=>{if(i){const o=e.name.match(/\d+$/),c=l.name.match(/\d+$/);if(o&&c)return parseInt(o[0],10)-parseInt(c[0],10)}return s?R(e,l):H(e,l)});u.length>0&&($=t.sort((e,l)=>b(e,l,u,s)));const g=[],d={};$.forEach(e=>{if(a.length>0&&!e.name.startsWith(a))return;let l=T(e.name);e.origin&&!e.origin.name.toLowerCase().startsWith("gradients/gradient")&&(l=T(e.origin.name));const o=z(e);let c="";!o&&n.length>0&&n.forEach(p=>{Object.values(p.tokenIds).indexOf(e.id)>-1&&p.isRoot===!1&&(c=W(T(p.name)))});const r=l.split("-"),h=c===""?r[0]:c,v=c===""?l.replace(`${r[0]}-`,""):l.replace(`${c}-`,"");!o&&r[0]!==l&&(d[h]&&d[h].length>0?d[h].push(v):d[h]=[v]);let f="";if(e.tokenType==="Color")f=E(e.value);else if(e.tokenType==="Radius")f=m(e.value.radius.measure,e.value.radius.unit);else if(e.tokenType==="GenericToken")e.propertyValues.unitless?f=e.value.text:f=m(e.value.text,"Pixels");else if(e.tokenType==="Shadow")f=`${m(e.value.x.measure,e.value.x.unit)} ${m(e.value.y.measure,e.value.y.unit)} ${m(e.value.radius.measure,e.value.radius.unit)} ${m(e.value.spread.measure,e.value.spread.unit)} ${E(e.value.color)}`;else if(e.tokenType==="Gradient"){let p="linear-gradient",y=`${Math.round(M(e.value.from,e.value.to)*100)/100}deg`;e.value.type==="Radial"&&(p="radial-gradient",y="circle at center"),f=`${p}(var(--angle, ${y}), ${e.value.stops.map(x=>`${E(x.color)} ${Math.round(x.position*10)/10*100}%`).join(", ")})`}else e.tokenType==="Border"?f=e.propertyValues.style??m(e.value.width.measure,e.value.width.unit):f=m(e.value.measure,e.value.unit);if(o){const p=T(e.name.replace(/ \d$/,"")),y=g.filter(C=>C.startsWith(`$${p}: `))[0],x=g.indexOf(y);x>-1&&(g[x]=g[x].replace(/: (.*) !default;/g,`: ${f}, $1 !default;`))}else g.push(`$${l}: ${f} !default;`)});const O=$.length===0||$[0].tokenType==="Border"?"":G(d,$[0].tokenType==="Color");return`${g.join(`
`)}
${O}`}const F={400:300,600:400};function N(t,n,i,s=""){const u=t.sort(H),a=s.trim().split(","),$={};u.forEach(e=>{var I;const l=T(((I=e.origin)==null?void 0:I.name)||e.name);let o=l,c=a[0];a.forEach(P=>{o.includes(P)&&(c=P,o=o.replace(`-${P}`,""))});const r=m(Math.round(e.value.fontSize.measure/n*1e3)/1e3,"rem");let h="normal",v=+e.value.font.subfamily;e.value.font.family==="Ebony"&&(v=F[v]),l.includes("italic")&&(h="italic");const f=e.value.lineHeight&&Math.round(e.value.lineHeight.measure/100*1e3)/1e3,p=m(e.value.letterSpacing.measure,e.value.letterSpacing.unit),y=e.value.textDecoration.toLowerCase(),x=m(e.value.paragraphIndent.measure,e.value.paragraphIndent.unit),C=e.value.textCase==="Original"?"none":e.value.textCase.toLowerCase(),j={fontFamily:`'${e.value.font.family}'${i}`,fontSize:r,fontStyle:h,fontWeight:v,lineHeight:f,letterSpacing:p,textDecoration:y,paragraphIndent:x,textTransform:C};typeof $[o]<"u"?$[o][c]=j:$[o]={[c]:j}});const g=[],d=[];Object.entries($).forEach(([e,l])=>{if(e.includes("-link"))return;d.push(`${e}: $${e},`);const o=[];a.forEach(c=>{const r=l[c];if(typeof r<"u"){const h=r.lineHeight?`
        line-height: ${r.lineHeight},`:"",v=r.letterSpacing!=="0"?`
        letter-spacing: ${r.letterSpacing},`:"",f=r.textDecoration!=="none"?`
        text-decoration: ${r.textDecoration},`:"",p=r.paragraphIndent!=="0"?`
        text-indent: ${r.paragraphIndent},`:"",y=r.textTransform!=="none"?`
        text-transform: ${r.textTransform},`:"";o.push(`${c}: (
        font-family: "${r.fontFamily}",
        font-size: ${r.fontSize},
        font-style: ${r.fontStyle},
        font-weight: ${r.fontWeight},${h}${v}${f}${p}${y}
    ),`)}}),g.push(`$${e}: (
    ${o.join(`
    `)}
) !default;
`)});const O=`$styles: (
    ${d.join(`
    `)}
) !default;`;return`${g.join(`
`)}
${O}
`}Pulsar.registerFunction("generateSimple",D);Pulsar.registerFunction("generateTypography",N);

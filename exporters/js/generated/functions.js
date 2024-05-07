"use strict";function T(t){return t.replace(/\s/g,"-").replace(/\//g,"-").replace(/-\d\d-/g,"-").replace(/--+/g,"-").toLowerCase()}function L(t){return t.split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join("")}function S(t){return t.split("-").map((n,i)=>i>0?n.charAt(0).toUpperCase()+n.slice(1).toLowerCase():n).join("")}function W(t){return t.slice(-1)==="s"?t.replace(/.$/,""):t}function w(t,n){let i="";const u=[];return Object.entries(t).forEach(([o,l])=>{const m=S(o);u.push(m),l.length>0&&(i=`${i}
export const ${m} = {
${l.map($=>`    ${S($)}: ${S(o)}${L($)},`).join(`
`)}
};
`)}),u.length>0&&(i=`${i}
export const ${n} = {
    ${u.join(`,
    `)},
};
`),i}function d(t,n){let i=t.toString();return+t!=0&&(n==="Pixels"&&(i+="px"),n==="rem"&&(i+="rem")),i}const j={SHORT:"short",LONG:"long"};function G(t,n=j.SHORT){const i=t.match(/.{1,2}/g);let u=n===j.SHORT;return i&&i.forEach(o=>{n===j.SHORT&&(u=/^(.)\1+$/.test(o))}),u?`${t.substring(0,1)}${t.substring(2,3)}${t.substring(4,5)}${t.substring(6,7)}`:n===j.LONG&&t.length===3?t.split("").map(o=>o+o).join(""):t}function E(t){return t.a<255?`#${t.hex}`:`#${G(t.hex.substring(0,6))}`}function M(t,n){const i=n.y-t.y,u=n.x-t.x;let l=Math.atan2(i,u)*180/Math.PI;return l+=90,(l<0?360+l:l)%360}function I(t,n){const i=T(t.origin?t.origin.name:t.name),u=T(n.origin?n.origin.name:n.name);return i.localeCompare(u)}function R(t,n){return+t.value.text-+n.value.text}function D(t,n,i,u){const o=i.trim().split(",");let l="",m="";if(o.some(p=>((t.origin?t.origin.name:t.name).includes(p)&&(l=p),(n.origin?n.origin.name:n.name).includes(p)&&(m=p),!1)),u&&!l)return-1;let $=o.indexOf(l)-o.indexOf(m);return $===0&&($=I(t,n)),$}function z(t){return t.name.match(/ \d$/)}function F(t,n,i=[],u=!1,o=!1,l="",m=""){let $=n.sort((e,a)=>{if(u){const f=e.name.match(/\d+$/),r=a.name.match(/\d+$/);if(f&&r)return parseInt(f[0],10)-parseInt(r[0],10)}return o?R(e,a):I(e,a)});l.length>0&&($=n.sort((e,a)=>D(e,a,l,o)));const p=[],v={};$.forEach(e=>{if(m.length>0&&!e.name.startsWith(m))return;let a=T(e.name);e.origin&&!e.origin.name.toLowerCase().startsWith("gradients/gradient")&&(a=T(e.origin.name));const f=z(e);let r="";!f&&i.length>0&&i.forEach(g=>{Object.values(g.tokenIds).indexOf(e.id)>-1&&g.isRoot===!1&&(r=W(T(g.name)))});const y=a.split("-"),h=r===""?y[0]:r,C=r===""?a.replace(`${y[0]}-`,""):a.replace(`${r}-`,"");v[h]&&v[h].length>0?!f&&y[0]!==a?v[h].push(C):v[h]=[]:!f&&y[0]!==a?v[h]=[C]:v[h]=[];let c="";if(e.tokenType==="Color")c=E(e.value);else if(e.tokenType==="Radius")c=d(e.value.radius.measure,e.value.radius.unit);else if(e.tokenType==="GenericToken")e.propertyValues.unitless?c=e.value.text:c=d(e.value.text,"Pixels");else if(e.tokenType==="Shadow")c=`${d(e.value.x.measure,e.value.x.unit)} ${d(e.value.y.measure,e.value.y.unit)} ${d(e.value.radius.measure,e.value.radius.unit)} ${d(e.value.spread.measure,e.value.spread.unit)} ${E(e.value.color)}`;else if(e.tokenType==="Gradient"){let g="linear-gradient",O=`${Math.round(M(e.value.from,e.value.to)*100)/100}deg`;e.value.type==="Radial"&&(g="radial-gradient",O="circle at center"),c=`${g}(var(--gradient-angle, ${O}), ${e.value.stops.map(x=>`${E(x.color)} ${Math.round(x.position*10)/10*100}%`).join(", ")})`}else e.tokenType==="Border"?c=e.propertyValues.style??d(e.value.width.measure,e.value.width.unit):c=d(e.value.measure,e.value.unit);if(f){const g=T(e.name.replace(/ \d$/,"")),O=p.filter(P=>P.startsWith(`$${g}: `))[0],x=p.indexOf(O);x>-1&&(p[x]=p[x].replace(/= '(.*)';/g,`= '${c}, $1';`))}else p.push(`export const ${S(a)} = ${c==="0"?0:`'${c}'`};`)});const s=$.length===0?"":w(v,t);return`${p.join(`
`)}
${s}`}const N={400:300,600:400};function V(t,n,i,u=""){const o=t.sort(I),l=u.trim().split(","),m={};o.forEach(s=>{var b;const e=T(((b=s.origin)==null?void 0:b.name)||s.name);let a=e,f=l[0];l.forEach(H=>{a.includes(H)&&(f=H,a=a.replace(`-${H}`,""))});const r=d(Math.round(s.value.fontSize.measure/n*1e3)/1e3,"rem");let y="normal",h=+s.value.font.subfamily;s.value.font.family==="Ebony"&&(h=N[h]),e.includes("italic")&&(y="italic");const C=s.value.lineHeight&&Math.round(s.value.lineHeight.measure/100*1e3)/1e3,c=d(s.value.letterSpacing.measure,s.value.letterSpacing.unit),g=s.value.textDecoration.toLowerCase(),O=d(s.value.paragraphIndent.measure,s.value.paragraphIndent.unit),x=s.value.textCase==="Original"?"none":s.value.textCase.toLowerCase(),P={fontFamily:`'${s.value.font.family}'${i}`,fontSize:r,fontStyle:y,fontWeight:h,lineHeight:C,letterSpacing:c,textDecoration:g,paragraphIndent:O,textTransform:x};typeof m[a]<"u"?m[a][f]=P:m[a]={[f]:P}});const $=[],p=[];Object.entries(m).forEach(([s,e])=>{if(s.includes("-link"))return;p.push(`${S(s)}: ${S(s)},`);const a=[];l.forEach(f=>{const r=e[f];if(typeof r<"u"){const y=r.lineHeight?`
        lineHeight: ${r.lineHeight},`:"",h=r.letterSpacing!=="0"?`
        letterSpacing: ${r.letterSpacing},`:"",C=r.textDecoration!=="none"?`
        textDecoration: ${r.textDecoration},`:"",c=r.paragraphIndent!=="0"?`
        textIndent: ${r.paragraphIndent},`:"",g=r.textTransform!=="none"?`
        textTransform: ${r.textTransform},`:"";a.push(`${f}: {
        fontFamily: "${r.fontFamily}",
        fontSize: '${r.fontSize}',
        fontStyle: '${r.fontStyle}',
        fontWeight: ${r.fontWeight},${y}${h}${C}${c}${g}
    },`)}}),$.push(`export const ${S(s)} = {
    ${a.join(`
    `)}
};
`)});const v=`export const styles = {
    ${p.join(`
    `)}
};`;return`${$.join(`
`)}
${v}
`}Pulsar.registerFunction("generateSimple",F);Pulsar.registerFunction("generateTypography",V);

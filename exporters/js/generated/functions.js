"use strict";function T(t){return t.replace(/\s/g,"-").replace(/\//g,"-").replace(/-\d\d-/g,"-").replace(/--+/g,"-").toLowerCase()}function E(t){return t.split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join("")}function C(t){return t.split("-").map((n,r)=>r>0?n.charAt(0).toUpperCase()+n.slice(1).toLowerCase():n).join("")}function O(t){return t.slice(-1)==="s"?t.replace(/.$/,""):t}function H(t,n){let r="";const l=[];return Object.entries(t).forEach(([$,o])=>{const g=C($);l.push(g),o.length>0&&(r=`${r}
export const ${g} = {
${o.map(m=>`    ${C(m)}: ${C($)}${E(m)},`).join(`
`)}
};
`)}),l.length>0&&(r=`${r}
export const ${n} = {
    ${l.join(`,
    `)},
};
`),r}function d(t,n){let r=t.toString();return+t!=0&&(n==="Pixels"&&(r+="px"),n==="rem"&&(r+="rem")),r}function L(t){const n=t.match(/.{1,2}/g);let r=!0;return n&&n.forEach(l=>{r&&(r=/^(.)\1+$/.test(l))}),r?`${t.substring(0,1)}${t.substring(2,3)}${t.substring(4,5)}`:t}function W(t){return t.a<255?`#${t.hex}`:`#${L(t.hex.substring(0,6))}`}function M(t,n){const r=n.y-t.y,l=n.x-t.x;let o=Math.atan2(r,l)*180/Math.PI;return o+=90,(o<0?360+o:o)%360}function b(t,n){const r=T(t.origin?t.origin.name:t.name),l=T(n.origin?n.origin.name:n.name);return r.localeCompare(l)}function D(t,n){return+t.value.text-+n.value.text}function z(t,n,r,l){const $=r.trim().split(",");let o="",g="";if($.some(c=>((t.origin?t.origin.name:t.name).includes(c)&&(o=c),(n.origin?n.origin.name:n.name).includes(c)&&(g=c),!1)),l&&!o)return-1;let m=$.indexOf(o)-$.indexOf(g);return m===0&&(m=b(t,n)),m}function F(t){return t.name.match(/ \d$/)}function G(t,n,r=[],l=!1,$=!1,o="",g=""){let m=n.sort((e,a)=>{if(l){const p=e.name.match(/\d+$/),i=a.name.match(/\d+$/);if(p&&i)return parseInt(p[0],10)-parseInt(i[0],10)}return $?D(e,a):b(e,a)});o.length>0&&(m=n.sort((e,a)=>z(e,a,o,$)));const c=[],v={};m.forEach(e=>{if(g.length>0&&!e.name.startsWith(g))return;let a=T(e.name);e.origin&&!e.origin.name.toLowerCase().startsWith("gradients/gradient")&&(a=T(e.origin.name));const p=F(e);let i="";!p&&r.length>0&&r.forEach(f=>{Object.values(f.tokenIds).indexOf(e.id)>-1&&f.isRoot===!1&&(i=O(T(f.name)))});const x=a.split("-"),h=i===""?x[0]:i,S=i===""?a.replace(`${x[0]}-`,""):a.replace(`${i}-`,"");v[h]&&v[h].length>0?!p&&x[0]!==a?v[h].push(S):v[h]=[]:!p&&x[0]!==a?v[h]=[S]:v[h]=[];let u="";if(e.tokenType==="Color")u=W(e.value);else if(e.tokenType==="Radius")u=d(e.value.radius.measure,e.value.radius.unit);else if(e.tokenType==="GenericToken")e.propertyValues.unitless?u=e.value.text:u=d(e.value.text,"Pixels");else if(e.tokenType==="Shadow")u=`${d(e.value.x.measure,e.value.x.unit)} ${d(e.value.y.measure,e.value.y.unit)} ${d(e.value.radius.measure,e.value.radius.unit)} ${d(e.value.spread.measure,e.value.spread.unit)} ${W(e.value.color)}`;else if(e.tokenType==="Gradient"){let f="linear-gradient",P=`${Math.round(M(e.value.from,e.value.to)*100)/100}deg`;e.value.type==="Radial"&&(f="radial-gradient",P="circle at center"),u=`${f}(var(--angle, ${P}), ${e.value.stops.map(y=>`${W(y.color)} ${Math.round(y.position*10)/10*100}%`).join(", ")})`}else e.tokenType==="Border"?u=e.propertyValues.style??d(e.value.width.measure,e.value.width.unit):u=d(e.value.measure,e.value.unit);if(p){const f=T(e.name.replace(/ \d$/,"")),P=c.filter(j=>j.startsWith(`$${f}: `))[0],y=c.indexOf(P);y>-1&&(c[y]=c[y].replace(/= '(.*)';/g,`= '${u}, $1';`))}else c.push(`export const ${C(a)} = ${u==="0"?0:`'${u}'`};`)});const s=m.length===0?"":H(v,t);return`${c.join(`
`)}
${s}`}const V={400:300,600:400};function A(t,n,r,l=""){const $=t.sort(b),o=l.trim().split(","),g={};$.forEach(s=>{var w;const e=T(((w=s.origin)==null?void 0:w.name)||s.name);let a=e,p=o[0];o.forEach(I=>{a.includes(I)&&(p=I,a=a.replace(`-${I}`,""))});const i=d(Math.round(s.value.fontSize.measure/n*1e3)/1e3,"rem");let x="normal",h=+s.value.font.subfamily;s.value.font.family==="Ebony"&&(h=V[h]),e.includes("italic")&&(x="italic");const S=s.value.lineHeight&&Math.round(s.value.lineHeight.measure/100*1e3)/1e3,u=d(s.value.letterSpacing.measure,s.value.letterSpacing.unit),f=s.value.textDecoration.toLowerCase(),P=d(s.value.paragraphIndent.measure,s.value.paragraphIndent.unit),y=s.value.textCase==="Original"?"none":s.value.textCase.toLowerCase(),j={fontFamily:`'${s.value.font.family}'${r}`,fontSize:i,fontStyle:x,fontWeight:h,lineHeight:S,letterSpacing:u,textDecoration:f,paragraphIndent:P,textTransform:y};typeof g[a]<"u"?g[a][p]=j:g[a]={[p]:j}});const m=[],c=[];Object.entries(g).forEach(([s,e])=>{if(s.includes("-link"))return;c.push(`${C(s)}: ${C(s)},`);const a=[];o.forEach(p=>{const i=e[p];if(typeof i<"u"){const x=i.lineHeight?`
        lineHeight: ${i.lineHeight},`:"",h=i.letterSpacing!=="0"?`
        letterSpacing: ${i.letterSpacing},`:"",S=i.textDecoration!=="none"?`
        textDecoration: ${i.textDecoration},`:"",u=i.paragraphIndent!=="0"?`
        textIndent: ${i.paragraphIndent},`:"",f=i.textTransform!=="none"?`
        textTransform: ${i.textTransform},`:"";a.push(`${p}: {
        fontFamily: "${i.fontFamily}",
        fontSize: '${i.fontSize}',
        fontStyle: '${i.fontStyle}',
        fontWeight: ${i.fontWeight},${x}${h}${S}${u}${f}
    },`)}}),m.push(`export const ${C(s)} = {
    ${a.join(`
    `)}
};
`)});const v=`export const styles = {
    ${c.join(`
    `)}
};`;return`${m.join(`
`)}
${v}
`}Pulsar.registerFunction("generateSimple",G);Pulsar.registerFunction("generateTypography",A);

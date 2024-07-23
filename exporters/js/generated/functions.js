"use strict";function O(t){const n=t.length===3||t.length===4,i=s=>s.length%2===0&&s.split("").every((c,u,p)=>u%2===0?c===p[u+1]:!0),f=s=>s.split("").map((c,u)=>u%2===0?c:"").join("");let a;return n?a=t:i(t)?a=f(t):a=t,a.length===8&&a.endsWith("ff")?`#${a.slice(0,-2)}`:a.length===4&&a.endsWith("f")?`#${a.slice(0,-1)}`:`#${a}`}function P(t){return O(t.hex)}function A(t,n){const i=n.y-t.y,f=n.x-t.x;let s=Math.atan2(i,f)*180/Math.PI;return s+=90,(s<0?360+s:s)%360}function y(t){return t.replace(/\s/g,"-").replace(/\//g,"-").replace(/-\d\d-/g,"-").replace(/--+/g,"-").toLowerCase()}function C(t){return t.split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join("")}function x(t){return t.split("-").map((n,i)=>i>0?n.charAt(0).toUpperCase()+n.slice(1).toLowerCase():n).join("")}function G(t){return t.slice(-1)==="s"?t.replace(/.$/,""):t}function j(t,n){let i="";const f=[];return Object.entries(t).forEach(([a,s])=>{const c=x(a);f.push(c),s.length>0&&(i=`${i}
export const ${c} = {
${s.map(u=>`    ${x(u)}: ${x(a)}${C(u)},`).join(`
`)}
};
`)}),f.length>0&&(i=`${i}
export const ${n} = {
    ${f.join(`,
    `)},
};
`),i}function d(t,n){let i=t.toString();return+t!=0&&(n==="Pixels"&&(i+="px"),n==="rem"&&(i+="rem")),i}function W(t,n){const i=y(t.origin?t.origin.name:t.name),f=y(n.origin?n.origin.name:n.name);return i.localeCompare(f)}function N(t,n,i,f){const a=i.trim().split(",");let s="",c="";if(a.some(p=>((t.origin?t.origin.name:t.name).includes(p)&&(s=p),(n.origin?n.origin.name:n.name).includes(p)&&(c=p),!1)),f&&!s)return-1;let u=a.indexOf(s)-a.indexOf(c);return u===0&&(u=W(t,n)),u}function w(t,n){return+t.value.text-+n.value.text}function M(t){return t.name.match(/ \d$/)}function R(t,n,i=[],f=!1,a=!1,s="",c=""){let u=n.sort((e,l)=>{if(f){const m=e.name.match(/\d+$/),r=l.name.match(/\d+$/);if(m&&r)return parseInt(m[0],10)-parseInt(r[0],10)}return a?w(e,l):W(e,l)});s.length>0&&(u=n.sort((e,l)=>N(e,l,s,a)));const p=[],H={};u.forEach(e=>{if(c.length>0&&!e.name.startsWith(c))return;let l=y(e.name);e.origin&&!e.origin.name.toLowerCase().startsWith("gradients/gradient")&&(l=y(e.origin.name));const m=M(e);let r="";!m&&i.length>0&&i.forEach(h=>{Object.values(h.tokenIds).indexOf(e.id)>-1&&h.isRoot===!1&&(r=G(y(h.name)))});const T=l.split("-"),$=r===""?T[0]:r,_=r===""?l.replace(`${T[0]}-`,""):l.replace(`${r}-`,"");H[$]&&H[$].length>0?!m&&T[0]!==l?H[$].push(_):H[$]=[]:!m&&T[0]!==l?H[$]=[_]:H[$]=[];let g="";if(e.tokenType==="Color")g=P(e.value);else if(e.tokenType==="Radius")g=d(e.value.radius.measure,e.value.radius.unit);else if(e.tokenType==="GenericToken")e.propertyValues.unitless?g=e.value.text:g=d(e.value.text,"Pixels");else if(e.tokenType==="Shadow")g=`${d(e.value.x.measure,e.value.x.unit)} ${d(e.value.y.measure,e.value.y.unit)} ${d(e.value.radius.measure,e.value.radius.unit)} ${d(e.value.spread.measure,e.value.spread.unit)} ${P(e.value.color)}`;else if(e.tokenType==="Gradient"){let h="linear-gradient",S=`${Math.round(A(e.value.from,e.value.to)*100)/100}deg`;e.value.type==="Radial"&&(h="radial-gradient",S="circle at center"),g=`${h}(var(--gradient-angle, ${S}), ${e.value.stops.map(v=>`${P(v.color)} ${Math.round(v.position*10)/10*100}%`).join(", ")})`}else e.tokenType==="Border"?g=e.propertyValues.style??d(e.value.width.measure,e.value.width.unit):g=d(e.value.measure,e.value.unit);if(m){const h=y(e.name.replace(/ \d$/,"")),S=p.filter(L=>L.startsWith(`$${h}: `))[0],v=p.indexOf(S);v>-1&&(p[v]=p[v].replace(/= '(.*)';/g,`= '${g}, $1';`))}else p.push(`export const ${x(l)} = ${g==="0"?0:`'${g}'`};`)});const o=u.length===0?"":j(H,t);return`${p.join(`
`)}
${o}`}const X={400:300,600:400};function D(t,n,i,f=""){const a=t.sort(W),s=f.trim().split(","),c={};a.forEach(o=>{var I;const e=y(((I=o.origin)==null?void 0:I.name)||o.name);let l=e,m=s[0];s.forEach(E=>{l.includes(E)&&(m=E,l=l.replace(`-${E}`,""))});const r=d(Math.round(o.value.fontSize.measure/n*1e3)/1e3,"rem");let T="normal",$=+o.value.font.subfamily;o.value.font.family==="Ebony"&&($=X[$]),e.includes("italic")&&(T="italic");const _=o.value.lineHeight&&Math.round(o.value.lineHeight.measure/100*1e3)/1e3,g=d(o.value.letterSpacing.measure,o.value.letterSpacing.unit),h=o.value.textDecoration.toLowerCase(),S=d(o.value.paragraphIndent.measure,o.value.paragraphIndent.unit),v=o.value.textCase==="Original"?"none":o.value.textCase.toLowerCase(),L={fontFamily:`'${o.value.font.family}'${i}`,fontSize:r,fontStyle:T,fontWeight:$,lineHeight:_,letterSpacing:g,textDecoration:h,paragraphIndent:S,textTransform:v};typeof c[l]<"u"?c[l][m]=L:c[l]={[m]:L}});const u=[],p=[];Object.entries(c).forEach(([o,e])=>{if(o.includes("-link"))return;p.push(`${x(o)}: ${x(o)},`);const l=[];s.forEach(m=>{const r=e[m];if(typeof r<"u"){const T=r.lineHeight?`
        lineHeight: ${r.lineHeight},`:"",$=r.letterSpacing!=="0"?`
        letterSpacing: ${r.letterSpacing},`:"",_=r.textDecoration!=="none"?`
        textDecoration: ${r.textDecoration},`:"",g=r.paragraphIndent!=="0"?`
        textIndent: ${r.paragraphIndent},`:"",h=r.textTransform!=="none"?`
        textTransform: ${r.textTransform},`:"";l.push(`${m}: {
        fontFamily: "${r.fontFamily}",
        fontSize: '${r.fontSize}',
        fontStyle: '${r.fontStyle}',
        fontWeight: ${r.fontWeight},${T}${$}${_}${g}${h}
    },`)}}),u.push(`export const ${x(o)} = {
    ${l.join(`
    `)}
};
`)});const H=`export const styles = {
    ${p.join(`
    `)}
};`;return`${u.join(`
`)}
${H}
`}Pulsar.registerFunction("generateSimple",R);Pulsar.registerFunction("generateTypography",D);

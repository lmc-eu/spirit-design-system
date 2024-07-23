"use strict";function W(t){const n=t.length===3||t.length===4,l=r=>r.length%2===0&&r.split("").every((o,s,p)=>s%2===0?o===p[s+1]:!0),c=r=>r.split("").map((o,s)=>s%2===0?o:"").join("");let i;return n?i=t:l(t)?i=c(t):i=t,i.length===8&&i.endsWith("ff")?`#${i.slice(0,-2)}`:i.length===4&&i.endsWith("f")?`#${i.slice(0,-1)}`:`#${i}`}function E(t){return W(t.hex)}function I(t,n){const l=n.y-t.y,c=n.x-t.x;let r=Math.atan2(l,c)*180/Math.PI;return r+=90,(r<0?360+r:r)%360}function y(t){return t.replace(/\s/g,"-").replace(/\//g,"-").replace(/-\d\d-/g,"-").replace(/--+/g,"-").toLowerCase()}function A(t){return t.slice(-1)==="s"?t.replace(/.$/,""):t}function G(t){return t==="radius"?"radii":t.slice(-1)==="s"?t:`${t}s`}function N(t,n){let l="";return Object.entries(t).forEach(([c,i])=>{l=`${l}
$${n?`${c}-colors`:G(c)}: (
${i.map(r=>`    ${r}: $${c}-${r},`).join(`
`)}
) !default;
`}),l}function m(t,n){let l=t.toString();return+t!=0&&(n==="Pixels"&&(l+="px"),n==="rem"&&(l+="rem")),l}function L(t,n){const l=y(t.origin?t.origin.name:t.name),c=y(n.origin?n.origin.name:n.name);return l.localeCompare(c)}function j(t,n,l,c){const i=l.trim().split(",");let r="",o="";if(i.some(p=>((t.origin?t.origin.name:t.name).includes(p)&&(r=p),(n.origin?n.origin.name:n.name).includes(p)&&(o=p),!1)),c&&!r)return-1;let s=i.indexOf(r)-i.indexOf(o);return s===0&&(s=L(t,n)),s}function w(t,n){return+t.value.text-+n.value.text}function C(t){return t.name.match(/ \d$/)}function M(t,n=[],l=!1,c=!1,i="",r=""){let o=t.sort((e,u)=>{if(l){const f=e.name.match(/\d+$/),g=u.name.match(/\d+$/);if(f&&g)return parseInt(f[0],10)-parseInt(g[0],10)}return c?w(e,u):L(e,u)});i.length>0&&(o=t.sort((e,u)=>j(e,u,i,c)));const s=[],p={};o.forEach(e=>{if(r.length>0&&!e.name.startsWith(r))return;let u=y(e.name);e.origin&&!e.origin.name.toLowerCase().startsWith("gradients/gradient")&&(u=y(e.origin.name));const f=C(e);let g="";!f&&n.length>0&&n.forEach($=>{Object.values($.tokenIds).indexOf(e.id)>-1&&$.isRoot===!1&&(g=A(y($.name)))});const a=u.split("-"),h=g===""?a[0]:g,H=g===""?u.replace(`${a[0]}-`,""):u.replace(`${g}-`,"");!f&&a[0]!==u&&(p[h]&&p[h].length>0?p[h].push(H):p[h]=[H]);let d="";if(e.tokenType==="Color")d=E(e.value);else if(e.tokenType==="Radius")d=m(e.value.radius.measure,e.value.radius.unit);else if(e.tokenType==="GenericToken")e.propertyValues.unitless?d=e.value.text:d=m(e.value.text,"Pixels");else if(e.tokenType==="Shadow")d=`${m(e.value.x.measure,e.value.x.unit)} ${m(e.value.y.measure,e.value.y.unit)} ${m(e.value.radius.measure,e.value.radius.unit)} ${m(e.value.spread.measure,e.value.spread.unit)} ${E(e.value.color)}`;else if(e.tokenType==="Gradient"){let $="linear-gradient",v=`${Math.round(I(e.value.from,e.value.to)*100)/100}deg`;e.value.type==="Radial"&&($="radial-gradient",v="circle at center"),d=`${$}(var(--gradient-angle, ${v}), ${e.value.stops.map(T=>`${E(T.color)} ${Math.round(T.position*10)/10*100}%`).join(", ")})`}else e.tokenType==="Border"?d=e.propertyValues.style??m(e.value.width.measure,e.value.width.unit):d=m(e.value.measure,e.value.unit);if(f){const $=y(e.name.replace(/ \d$/,"")),v=s.filter(_=>_.startsWith(`$${$}: `))[0],T=s.indexOf(v);T>-1&&(s[T]=s[T].replace(/: (.*) !default;/g,`: ${d}, $1 !default;`))}else s.push(`$${u}: ${d} !default;`)});const x=o.length===0||o[0].tokenType==="Border"?"":N(p,o[0].tokenType==="Color");return`${s.join(`
`)}
${x}`}const R={400:300,600:400};function X(t,n,l,c=""){const i=t.sort(L),r=c.trim().split(","),o={};i.forEach(e=>{var O;const u=y(((O=e.origin)==null?void 0:O.name)||e.name);let f=u,g=r[0];r.forEach(S=>{f.includes(S)&&(g=S,f=f.replace(`-${S}`,""))});const a=m(Math.round(e.value.fontSize.measure/n*1e3)/1e3,"rem");let h="normal",H=+e.value.font.subfamily;e.value.font.family==="Ebony"&&(H=R[H]),u.includes("italic")&&(h="italic");const d=e.value.lineHeight&&Math.round(e.value.lineHeight.measure/100*1e3)/1e3,$=m(e.value.letterSpacing.measure,e.value.letterSpacing.unit),v=e.value.textDecoration.toLowerCase(),T=m(e.value.paragraphIndent.measure,e.value.paragraphIndent.unit),_=e.value.textCase==="Original"?"none":e.value.textCase.toLowerCase(),P={fontFamily:`'${e.value.font.family}'${l}`,fontSize:a,fontStyle:h,fontWeight:H,lineHeight:d,letterSpacing:$,textDecoration:v,paragraphIndent:T,textTransform:_};typeof o[f]<"u"?o[f][g]=P:o[f]={[g]:P}});const s=[],p=[];Object.entries(o).forEach(([e,u])=>{if(e.includes("-link"))return;p.push(`${e}: $${e},`);const f=[];r.forEach(g=>{const a=u[g];if(typeof a<"u"){const h=a.lineHeight?`
        line-height: ${a.lineHeight},`:"",H=a.letterSpacing!=="0"?`
        letter-spacing: ${a.letterSpacing},`:"",d=a.textDecoration!=="none"?`
        text-decoration: ${a.textDecoration},`:"",$=a.paragraphIndent!=="0"?`
        text-indent: ${a.paragraphIndent},`:"",v=a.textTransform!=="none"?`
        text-transform: ${a.textTransform},`:"";f.push(`${g}: (
        font-family: "${a.fontFamily}",
        font-size: ${a.fontSize},
        font-style: ${a.fontStyle},
        font-weight: ${a.fontWeight},${h}${H}${d}${$}${v}
    ),`)}}),s.push(`$${e}: (
    ${f.join(`
    `)}
) !default;
`)});const x=`$styles: (
    ${p.join(`
    `)}
) !default;`;return`${s.join(`
`)}
${x}
`}Pulsar.registerFunction("generateSimple",M);Pulsar.registerFunction("generateTypography",X);

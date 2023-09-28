"use strict";function T(t){return t.replace(/\s/g,"-").replace(/\//g,"-").replace(/-\d\d-/g,"-").replace(/--+/g,"-").toLowerCase()}function W(t){return t.slice(-1)==="s"?t.replace(/.$/,""):t}function w(t){return t==="radius"?"radii":t.slice(-1)==="s"?t:`${t}s`}function M(t,n){let r="";return Object.entries(t).forEach(([l,g])=>{r=`${r}
$${n?`${l}-colors`:w(l)}: (
${g.map(a=>`    ${a}: $${l}-${a},`).join(`
`)}
) !default;
`}),r}function m(t,n){let r=t.toString();return t>0&&(n==="Pixels"&&(r+="px"),n==="rem"&&(r+="rem")),r}function H(t){const n=t.match(/.{1,2}/g);let r=!0;return n&&n.forEach(l=>{r&&(r=/^(.)\1+$/.test(l))}),r?`${t.substring(0,1)}${t.substring(2,3)}${t.substring(4,5)}`:t}function I(t){return t.a<255?`#${t.hex}`:`#${H(t.hex.substring(0,6))}`}function z(t,n){const r=n.y-t.y,l=n.x-t.x;let a=Math.atan2(r,l)*180/Math.PI;return a+=90,(a<0?360+a:a)%360}function j(t,n){const r=T(t.origin?t.origin.name:t.name),l=T(n.origin?n.origin.name:n.name);return r.localeCompare(l)}function D(t,n){return+t.value.text-+n.value.text}function L(t,n,r,l){const g=r.trim().split(",");let a="",p="";if(g.some(d=>((t.origin?t.origin.name:t.name).includes(d)&&(a=d),(n.origin?n.origin.name:n.name).includes(d)&&(p=d),!1)),l&&!a)return-1;let $=g.indexOf(a)-g.indexOf(p);return $===0&&($=j(t,n)),$}function b(t){return t.name.match(/ \d$/)}function F(t,n=[],r=!1,l=!1,g="",a=""){let p=t.sort((e,s)=>{if(r){const u=e.name.match(/\d+$/),o=s.name.match(/\d+$/);if(u&&o)return parseInt(u[0],10)-parseInt(o[0],10)}return l?D(e,s):j(e,s)});g.length>0&&(p=t.sort((e,s)=>L(e,s,g,l)));const $=[],d={};p.forEach(e=>{if(a.length>0&&!e.name.startsWith(a))return;let s=T(e.name);e.origin&&!e.origin.name.toLowerCase().startsWith("gradients/gradient")&&(s=T(e.origin.name));const u=b(e);let o="";!u&&n.length>0&&n.forEach(f=>{Object.values(f.tokenIds).indexOf(e.id)>-1&&f.isRoot===!1&&(o=W(T(f.name)))});const i=s.split("-"),h=o===""?i[0]:o,v=o===""?s.replace(`${i[0]}-`,""):s.replace(`${o}-`,"");!u&&i[0]!==s&&(d[h]&&d[h].length>0?d[h].push(v):d[h]=[v]);let c="";if(e.tokenType==="Color")c=I(e.value);else if(e.tokenType==="Radius")c=m(e.value.radius.measure,e.value.radius.unit);else if(e.tokenType==="GenericToken")e.propertyValues.unitless?c=e.value.text:c=m(e.value.text,"Pixels");else if(e.tokenType==="Shadow")c=`${m(e.value.x.measure,e.value.x.unit)} ${m(e.value.y.measure,e.value.y.unit)} ${m(e.value.radius.measure,e.value.radius.unit)} ${m(e.value.spread.measure,e.value.spread.unit)} ${I(e.value.color)}`;else if(e.tokenType==="Gradient"){let f="linear-gradient",y=`${Math.round(z(e.value.from,e.value.to)*100)/100}deg`;e.value.type==="Radial"&&(f="radial-gradient",y="circle at center"),c=`${f}(var(--angle, ${y}), ${e.value.stops.map(x=>`${I(x.color)} ${Math.round(x.position*10)/10*100}%`).join(", ")})`}else e.tokenType==="Border"?c=e.propertyValues.style??m(e.value.width.measure,e.value.width.unit):c=m(e.value.measure,e.value.unit);if(u){const f=T(e.name.replace(/ \d$/,"")),y=$.filter(C=>C.startsWith(`$${f}: `))[0],x=$.indexOf(y);x>-1&&($[x]=$[x].replace(/: (.*) !default;/g,`: ${c}, $1 !default;`))}else $.push(`$${s}: ${c} !default;`)});const S=p.length===0||p[0].tokenType==="Border"?"":M(d,p[0].tokenType==="Color");return`${$.join(`
`)}
${S}`}const G={400:300,600:400};function V(t,n,r,l=""){const g=t.sort(j),a=l.trim().split(","),p={};g.forEach(e=>{var O;const s=T(((O=e.origin)==null?void 0:O.name)||e.name);let u=s,o=a[0];a.forEach(P=>{u.includes(P)&&(o=P,u=u.replace(`-${P}`,""))});const i=m(Math.round(e.value.fontSize.measure/n*1e3)/1e3,"rem");let h="normal",v=+e.value.font.subfamily;e.value.font.family==="Ebony"&&(v=G[v]),s.includes("italic")&&(h="italic");const c=e.value.lineHeight&&Math.round(e.value.lineHeight.measure/100*1e3)/1e3,f=m(e.value.letterSpacing.measure,e.value.letterSpacing.unit),y=e.value.textDecoration.toLowerCase(),x=m(e.value.paragraphIndent.measure,e.value.paragraphIndent.unit),C=e.value.textCase==="Original"?"none":e.value.textCase.toLowerCase(),E={fontFamily:`'${e.value.font.family}'${r}`,fontSize:i,fontStyle:h,fontWeight:v,lineHeight:c,letterSpacing:f,textDecoration:y,paragraphIndent:x,textTransform:C};typeof p[u]<"u"?p[u][o]=E:p[u]={[o]:E}});const $=[],d=[];Object.entries(p).forEach(([e,s])=>{if(e.includes("-link"))return;d.push(`${e}: $${e},`);const u=[];a.forEach(o=>{const i=s[o];if(typeof i<"u"){const h=i.lineHeight?`
        line-height: ${i.lineHeight},`:"",v=i.letterSpacing!=="0"?`
        letter-spacing: ${i.letterSpacing},`:"",c=i.textDecoration!=="none"?`
        text-decoration: ${i.textDecoration},`:"",f=i.paragraphIndent!=="0"?`
        text-indent: ${i.paragraphIndent},`:"",y=i.textTransform!=="none"?`
        text-transform: ${i.textTransform},`:"";u.push(`${o}: (
        font-family: "${i.fontFamily}",
        font-size: ${i.fontSize},
        font-style: ${i.fontStyle},
        font-weight: ${i.fontWeight},${h}${v}${c}${f}${y}
    ),`)}}),$.push(`$${e}: (
    ${u.join(`
    `)}
) !default;
`)});const S=`$styles: (
    ${d.join(`
    `)}
) !default;`;return`${$.join(`
`)}
${S}
`}Pulsar.registerFunction("generateSimple",F);Pulsar.registerFunction("generateTypography",V);

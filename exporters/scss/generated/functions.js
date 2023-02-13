"use strict";function y(t){return t.replace(/\s/g,"-").replace(/\//g,"-").replace(/\d+-/g,"").replace(/--+/g,"-").toLowerCase()}function j(t){return t.slice(-1)==="s"?t.replace(/.$/,""):t}function E(t){return t==="radius"?"radii":t.slice(-1)==="s"?t:`${t}s`}function M(t,r){let a="";return Object.entries(t).forEach(([u,g])=>{a=`${a}
$${r?`${u}-colors`:E(u)}: (
${g.map(i=>`    ${i}: $${u}-${i},`).join(`
`)}
) !default;
`}),a}function $(t,r){let a=t.toString();return t>0&&(r==="Pixels"&&(a+="px"),r==="rem"&&(a+="rem")),a}function W(t){const r=t.match(/.{1,2}/g);let a=!0;return r&&r.forEach(u=>{a&&(a=/^(.)\1+$/.test(u))}),a?`${t.substring(0,1)}${t.substring(2,3)}${t.substring(4,5)}`:t}function P(t){return t.a<255?`#${t.hex}`:`#${W(t.hex.substring(0,6))}`}function z(t,r){const a=r.y-t.y,u=r.x-t.x;let i=Math.atan2(a,u)*180/Math.PI;return i+=90,(i<0?360+i:i)%360}function w(t,r){const a=y(t.origin?t.origin.name:t.name),u=y(r.origin?r.origin.name:r.name);return a.localeCompare(u)}function H(t,r){return+t.value.text-+r.value.text}function L(t,r,a,u){const g=a.trim().split(",");let i="",f="";if(g.some(m=>((t.origin?t.origin.name:t.name).includes(m)&&(i=m),(r.origin?r.origin.name:r.name).includes(m)&&(f=m),!1)),u&&!i)return-1;let d=g.indexOf(i)-g.indexOf(f);return d===0&&(d=w(t,r)),d}function D(t,r=[],a=!1,u=!1,g=""){let i=t.sort((e,s)=>{if(a){const l=e.name.match(/\d+$/),o=s.name.match(/\d+$/);if(l&&o)return parseInt(l[0],10)-parseInt(o[0],10)}return u?H(e,s):w(e,s)});g.length>0&&(i=t.sort((e,s)=>L(e,s,g,u)));const f=[],d={},m=[];i.forEach(e=>{let s=y(e.name);e.origin&&e.tokenType!=="Gradient"&&(s=y(e.origin.name));let l=!1;m.indexOf(s)>-1?l=!0:m.push(s);let o="";!l&&r.length>0&&r.forEach(p=>{Object.values(p.tokenIds).indexOf(e.id)>-1&&p.isRoot===!1&&(o=j(y(p.name)))});const n=s.split("-"),v=o===""?n[0]:o,x=o===""?s.replace(`${n[0]}-`,""):s.replace(`${o}-`,"");!l&&n[0]!==s&&(d[v]&&d[v].length>0?d[v].push(x):d[v]=[x]);let c="";if(e.tokenType==="Color")c=P(e.value);else if(e.tokenType==="Radius")c=$(e.value.radius.measure,e.value.radius.unit);else if(e.tokenType==="GenericToken")e.propertyValues.unitless?c=e.value.text:c=$(e.value.text,"Pixels");else if(e.tokenType==="Shadow")c=`${$(e.value.x.measure,e.value.x.unit)} ${$(e.value.y.measure,e.value.y.unit)} ${$(e.value.radius.measure,e.value.radius.unit)} ${$(e.value.spread.measure,e.value.spread.unit)} ${P(e.value.color)}`;else if(e.tokenType==="Gradient"){let p="linear-gradient",h=`${Math.round(z(e.value.from,e.value.to)*100)/100}deg`;e.value.type==="Radial"&&(p="radial-gradient",h="circle at center"),c=`${p}(${h}, ${e.value.stops.map(T=>`${P(T.color)} ${Math.round(T.position*10)/10*100}%`).join(", ")})`}else e.tokenType==="Border"?c=e.propertyValues.style??$(e.value.width.measure,e.value.width.unit):c=$(e.value.measure,e.value.unit);if(l){const p=f.filter(T=>T.startsWith(`$${s}: `))[0],h=f.indexOf(p);h>-1&&(f[h]=f[h].replace(/: (.*) !default;/g,`: ${c}, $1 !default;`))}else f.push(`$${s}: ${c} !default;`)});const S=i.length===0||i[0].tokenType==="Border"?"":M(d,i[0].tokenType==="Color");return`${f.join(`
`)}
${S}`}function B(t){switch(t.toLowerCase().replace(/\W/g,"")){case"thin":return 100;case"extralight":return 200;case"light":return 300;case"normal":return 400;case"regular":return 400;case"medium":return 500;case"semibold":return 600;case"bold":return 700;case"extrabold":return 800;case"black":return 900;case"extrablack":return 950;default:return t}}function F(t,r,a,u=""){const g=t.sort(w),i=u.trim().split(","),f={};g.forEach(e=>{let s=y(e.name);e.origin&&(s=y(e.origin.name));let l=s,o=i[0];i.forEach(C=>{l.includes(C)&&(o=C,l=l.replace(`-${C}`,""))});const n=e.value.font.subfamily.toLowerCase(),v=$(Math.round(e.value.fontSize.measure/r*1e3)/1e3,"rem");let x="normal",c="normal";n==="italic"?x="italic":c=n;const p=e.value.lineHeight&&Math.round(e.value.lineHeight.measure/100*1e3)/1e3,h=$(e.value.letterSpacing.measure,e.value.letterSpacing.unit),T=e.value.textDecoration.toLowerCase(),O=$(e.value.paragraphIndent.measure,e.value.paragraphIndent.unit),b=e.value.textCase==="Original"?"none":e.value.textCase.toLowerCase(),I={fontFamily:`'${e.value.font.family}'${a}`,fontSize:v,fontStyle:x,fontWeight:B(c),lineHeight:p,letterSpacing:h,textDecoration:T,paragraphIndent:O,textTransform:b};typeof f[l]<"u"?f[l][o]=I:f[l]={[o]:I}});const d=[],m=[];Object.entries(f).forEach(([e,s])=>{if(e.includes("-link"))return;m.push(`${e}: $${e},`);const l=[];i.forEach(o=>{const n=s[o];if(typeof n<"u"){const v=n.lineHeight?`
        line-height: ${n.lineHeight},`:"",x=n.letterSpacing!=="0"?`
        letter-spacing: ${n.letterSpacing},`:"",c=n.textDecoration!=="none"?`
        text-decoration: ${n.textDecoration},`:"",p=n.paragraphIndent!=="0"?`
        text-indent: ${n.paragraphIndent},`:"",h=n.textTransform!=="none"?`
        text-transform: ${n.textTransform},`:"";l.push(`${o}: (
        font-family: "${n.fontFamily}",
        font-size: ${n.fontSize},
        font-style: ${n.fontStyle},
        font-weight: ${n.fontWeight},${v}${x}${c}${p}${h}
    ),`)}}),d.push(`$${e}: (
    ${l.join(`
    `)}
) !default;
`)});const S=`$styles: (
    ${m.join(`
    `)}
) !default;`;return`${d.join(`
`)}
${S}
`}Pulsar.registerFunction("generateSimple",D);Pulsar.registerFunction("generateTypography",F);

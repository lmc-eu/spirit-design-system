"use strict";function y(t){return t.replace(/\s/g,"-").replace(/\//g,"-").replace(/\d+-/g,"").replace(/--+/g,"-").toLowerCase()}function j(t){return t.slice(-1)==="s"?t.replace(/.$/,""):t}function E(t){return t==="radius"?"radii":t.slice(-1)==="s"?t:`${t}s`}function M(t,r){let a="";return Object.entries(t).forEach(([o,g])=>{a=`${a}
$${r?`${o}-colors`:E(o)}: (
${g.map(i=>`    ${i}: $${o}-${i},`).join(`
`)}
) !default;
`}),a}function $(t,r){let a=t.toString();return t>0&&(r==="Pixels"&&(a+="px"),r==="rem"&&(a+="rem")),a}function W(t){const r=t.match(/.{1,2}/g);let a=!0;return r&&r.forEach(o=>{a&&(a=/^(.)\1+$/.test(o))}),a?`${t.substring(0,1)}${t.substring(2,3)}${t.substring(4,5)}`:t}function w(t){return t.a<255?`#${t.hex}`:`#${W(t.hex.substring(0,6))}`}function z(t,r){const a=r.y-t.y,o=r.x-t.x;let i=Math.atan2(a,o)*180/Math.PI;return i+=90,(i<0?360+i:i)%360}function I(t,r){const a=y(t.origin?t.origin.name:t.name),o=y(r.origin?r.origin.name:r.name);return a.localeCompare(o)}function H(t,r){return+t.value.text-+r.value.text}function L(t,r,a,o){const g=a.trim().split(",");let i="",p="";if(g.some(m=>((t.origin?t.origin.name:t.name).includes(m)&&(i=m),(r.origin?r.origin.name:r.name).includes(m)&&(p=m),!1)),!!o&&!i)return-1;let d=g.indexOf(i)-g.indexOf(p);return d===0&&(d=I(t,r)),d}function D(t,r=[],a=!1,o=!1,g=""){let i=t.sort((e,s)=>{if(a){const l=e.name.match(/\d+$/),c=s.name.match(/\d+$/);if(l&&c)return parseInt(l[0],10)-parseInt(c[0],10)}return o?H(e,s):I(e,s)});g.length>0&&(i=t.sort((e,s)=>L(e,s,g,o)));const p=[],d={},m=[];i.forEach(e=>{let s=y(e.name);e.origin&&e.tokenType!=="Gradient"&&(s=y(e.origin.name));let l=!1;m.indexOf(s)>-1?l=!0:m.push(s);let c="";!l&&r.length>0&&r.forEach(u=>{Object.values(u.tokenIds).indexOf(e.id)>-1&&u.isRoot===!1&&(c=j(y(u.name)))});const n=s.split("-"),v=c===""?n[0]:c,x=c===""?s.replace(`${n[0]}-`,""):s.replace(`${c}-`,"");!l&&n[0]!==s&&(d[v]&&d[v].length>0?d[v].push(x):d[v]=[x]);let f="";if(e.tokenType==="Color")f=w(e.value);else if(e.tokenType==="Radius")f=$(e.value.radius.measure,e.value.radius.unit);else if(e.tokenType==="GenericToken")e.propertyValues.unitless?f=e.value.text:f=$(e.value.text,"Pixels");else if(e.tokenType==="Shadow")f=`${$(e.value.x.measure,e.value.x.unit)} ${$(e.value.y.measure,e.value.y.unit)} ${$(e.value.radius.measure,e.value.radius.unit)} ${$(e.value.spread.measure,e.value.spread.unit)} ${w(e.value.color)}`;else if(e.tokenType==="Gradient"){let u="linear-gradient",h=`${Math.round(z(e.value.from,e.value.to)*100)/100}deg`;e.value.type==="Radial"&&(u="radial-gradient",h="circle at center"),f=`${u}(${h}, ${e.value.stops.map(T=>`${w(T.color)} ${Math.round(T.position*10)/10*100}%`).join(", ")})`}else if(e.tokenType==="Border"){const u=e.propertyValues.style;f=u!=null?u:$(e.value.width.measure,e.value.width.unit)}else f=$(e.value.measure,e.value.unit);if(l){const u=p.filter(T=>T.startsWith(`$${s}: `))[0],h=p.indexOf(u);h>-1&&(p[h]=p[h].replace(/: (.*) !default;/g,`: ${f}, $1 !default;`))}else p.push(`$${s}: ${f} !default;`)});const S=i.length===0||i[0].tokenType==="Border"?"":M(d,i[0].tokenType==="Color");return`${p.join(`
`)}
${S}`}function B(t){switch(t.toLowerCase().replace(/\W/g,"")){case"thin":return 100;case"extralight":return 200;case"light":return 300;case"normal":return 400;case"regular":return 400;case"medium":return 500;case"semibold":return 600;case"bold":return 700;case"extrabold":return 800;case"black":return 900;case"extrablack":return 950;default:return t}}function F(t,r,a,o=""){const g=t.sort(I),i=o.trim().split(","),p={};g.forEach(e=>{let s=y(e.name);e.origin&&(s=y(e.origin.name));let l=s,c=i[0];i.forEach(C=>{l.includes(C)&&(c=C,l=l.replace(`-${C}`,""))});const n=e.value.font.subfamily.toLowerCase(),v=$(Math.round(e.value.fontSize.measure/r*1e3)/1e3,"rem");let x="normal",f="normal";n==="italic"?x="italic":f=n;const u=e.value.lineHeight&&Math.round(e.value.lineHeight.measure/100*1e3)/1e3,h=$(e.value.letterSpacing.measure,e.value.letterSpacing.unit),T=e.value.textDecoration.toLowerCase(),P=$(e.value.paragraphIndent.measure,e.value.paragraphIndent.unit),b=e.value.textCase==="Original"?"none":e.value.textCase.toLowerCase(),O={fontFamily:`'${e.value.font.family}'${a}`,fontSize:v,fontStyle:x,fontWeight:B(f),lineHeight:u,letterSpacing:h,textDecoration:T,paragraphIndent:P,textTransform:b};typeof p[l]<"u"?p[l][c]=O:p[l]={[c]:O}});const d=[],m=[];Object.entries(p).forEach(([e,s])=>{if(e.includes("-link"))return;m.push(`${e}: $${e},`);const l=[];i.forEach(c=>{const n=s[c];if(typeof n<"u"){const v=n.lineHeight?`
        line-height: ${n.lineHeight},`:"",x=n.letterSpacing!=="0"?`
        letter-spacing: ${n.letterSpacing},`:"",f=n.textDecoration!=="none"?`
        text-decoration: ${n.textDecoration},`:"",u=n.paragraphIndent!=="0"?`
        text-indent: ${n.paragraphIndent},`:"",h=n.textTransform!=="none"?`
        text-transform: ${n.textTransform},`:"";l.push(`${c}: (
        font-family: "${n.fontFamily}",
        font-size: ${n.fontSize},
        font-style: ${n.fontStyle},
        font-weight: ${n.fontWeight},${v}${x}${f}${u}${h}
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

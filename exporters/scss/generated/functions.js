"use strict";function y(t){return t.replace(/\s/g,"-").replace(/\//g,"-").replace(/\d+-/g,"").replace(/--+/g,"-").toLowerCase()}function E(t){return t.slice(-1)==="s"?t.replace(/.$/,""):t}function P(t){return t==="radius"?"radii":t.slice(-1)==="s"?t:`${t}s`}function M(t,r){let n="";return Object.entries(t).forEach(([u,$])=>{n=`${n}
$${r?`${u}-colors`:P(u)}: (
${$.map(a=>`    ${a}: $${u}-${a},`).join(`
`)}
) !default;
`}),n}function g(t,r){let n=t.toString();return t>0&&(r==="Pixels"&&(n+="px"),r==="rem"&&(n+="rem")),n}function W(t){const r=t.match(/.{1,2}/g);let n=!0;return r&&r.forEach(u=>{n&&(n=/^(.)\1+$/.test(u))}),n?`${t.substring(0,1)}${t.substring(2,3)}${t.substring(4,5)}`:t}function w(t){return t.a<255?`#${t.hex}`:`#${W(t.hex.substring(0,6))}`}function z(t,r){const n=r.y-t.y,u=r.x-t.x;let a=Math.atan2(n,u)*180/Math.PI;return a+=90,(a<0?360+a:a)%360}function I(t,r){const n=y(t.origin?t.origin.name:t.name),u=y(r.origin?r.origin.name:r.name);return n.localeCompare(u)}function D(t,r){return+t.value.text-+r.value.text}function L(t,r,n,u){const $=n.trim().split(",");let a="",p="";if($.some(m=>((t.origin?t.origin.name:t.name).includes(m)&&(a=m),(r.origin?r.origin.name:r.name).includes(m)&&(p=m),!1)),!!u&&!a)return-1;let d=$.indexOf(a)-$.indexOf(p);return d===0&&(d=I(t,r)),d}function B(t,r=[],n=!1,u=!1,$=""){let a=t.sort((e,l)=>{if(n){const s=e.name.match(/\d+$/),c=l.name.match(/\d+$/);if(s&&c)return parseInt(s[0],10)-parseInt(c[0],10)}return u?D(e,l):I(e,l)});$.length>0&&(a=t.sort((e,l)=>L(e,l,$,u)));const p=[],d={},m=[];a.forEach(e=>{let l=y(e.name);e.origin&&e.tokenType!=="Gradient"&&(l=y(e.origin.name));let s=!1;m.indexOf(l)>-1?s=!0:m.push(l);let c="";!s&&r.length>0&&r.forEach(o=>{Object.values(o.tokenIds).indexOf(e.id)>-1&&o.isRoot===!1&&(c=E(y(o.name)))});const i=l.split("-"),h=c===""?i[0]:c,x=c===""?l.replace(`${i[0]}-`,""):l.replace(`${c}-`,"");!s&&i[0]!==l&&(d[h]&&d[h].length>0?d[h].push(x):d[h]=[x]);let f="";if(e.tokenType==="Color")f=w(e.value);else if(e.tokenType==="Radius")f=g(e.value.radius.measure,e.value.radius.unit);else if(e.tokenType==="GenericToken")f=g(e.value.text,"Pixels");else if(e.tokenType==="Shadow")f=`${g(e.value.x.measure,e.value.x.unit)} ${g(e.value.y.measure,e.value.y.unit)} ${g(e.value.radius.measure,e.value.radius.unit)} ${g(e.value.spread.measure,e.value.spread.unit)} ${w(e.value.color)}`;else if(e.tokenType==="Gradient"){let o="linear-gradient",v=`${Math.round(z(e.value.from,e.value.to)*100)/100}deg`;e.value.type==="Radial"&&(o="radial-gradient",v="circle at center"),f=`${o}(${v}, ${e.value.stops.map(T=>`${w(T.color)} ${Math.round(T.position*10)/10*100}%`).join(", ")})`}else e.tokenType==="Border"?e.properties.forEach(o=>{o.codeName==="style"&&o.value.length>0?f=o.value:f=g(e.value.width.measure,e.value.width.unit)}):f=g(e.value.measure,e.value.unit);if(s){const o=p.filter(T=>T.startsWith(`$${l}: `))[0],v=p.indexOf(o);v>-1&&(p[v]=p[v].replace(/: (.*) !default;/g,`: ${f}, $1 !default;`))}else p.push(`$${l}: ${f} !default;`)});const S=a.length===0||a[0].tokenType==="Border"?"":M(d,a[0].tokenType==="Color");return`${p.join(`
`)}
${S}`}function F(t){switch(t.toLowerCase().replace(/\W/g,"")){case"thin":return 100;case"extralight":return 200;case"light":return 300;case"normal":return 400;case"regular":return 400;case"medium":return 500;case"semibold":return 600;case"bold":return 700;case"extrabold":return 800;case"black":return 900;case"extrablack":return 950;default:return t}}function G(t,r,n,u=""){const $=t.sort(I),a=u.trim().split(","),p={};$.forEach(e=>{let l=y(e.name);e.origin&&(l=y(e.origin.name));let s=l,c=a[0];a.forEach(C=>{s.includes(C)&&(c=C,s=s.replace(`-${C}`,""))});const i=e.value.font.subfamily.toLowerCase(),h=g(Math.round(e.value.fontSize.measure/r*1e3)/1e3,"rem");let x="normal",f="normal";i==="italic"?x="italic":f=i;const o=Math.round(e.value.lineHeight.measure/100*1e3)/1e3,v=g(e.value.letterSpacing.measure,e.value.letterSpacing.unit),T=e.value.textDecoration.toLowerCase(),b=g(e.value.paragraphIndent.measure,e.value.paragraphIndent.unit),j=e.value.textCase==="Original"?"none":e.value.textCase.toLowerCase(),O={fontFamily:`'${e.value.font.family}'${n}`,fontSize:h,fontStyle:x,fontWeight:F(f),lineHeight:o,letterSpacing:v,textDecoration:T,paragraphIndent:b,textTransform:j};typeof p[s]<"u"?p[s][c]=O:p[s]={[c]:O}});const d=[],m=[];Object.entries(p).forEach(([e,l])=>{if(e.includes("-link-"))return;m.push(`${e}: $${e},`);const s=[];a.forEach(c=>{const i=l[c];if(typeof i<"u"){const h=i.letterSpacing!==0?`
        letter-spacing: ${i.letterSpacing},`:"",x=i.textDecoration!=="none"?`
        text-decoration: ${i.textDecoration},`:"",f=i.paragraphIndent!==0?`
        text-indent: ${i.paragraphIndent},`:"",o=i.textTransform!=="none"?`
        text-transform: ${i.textTransform},`:"";s.push(`${c}: (
        font-family: "${i.fontFamily}",
        font-size: ${i.fontSize},
        font-style: ${i.fontStyle},
        font-weight: ${i.fontWeight},
        line-height: ${i.lineHeight},${h}${x}${f}${o}
    ),`)}}),d.push(`$${e}: (
    ${s.join(`
    `)}
) !default;
`)});const S=`$styles: (
    ${m.join(`
    `)}
) !default;`;return`${d.join(`
`)}
${S}
`}Pulsar.registerFunction("generateSimple",B);Pulsar.registerFunction("generateTypography",G);

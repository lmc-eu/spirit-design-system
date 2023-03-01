"use strict";function x(t){return t.replace(/\s/g,"-").replace(/\//g,"-").replace(/\d+-/g,"").replace(/--+/g,"-").toLowerCase()}function L(t){return t.slice(-1)==="s"?t.replace(/.$/,""):t}function z(t){return t==="radius"?"radii":t.slice(-1)==="s"?t:`${t}s`}function E(t,n){let r="";return Object.entries(t).forEach(([o,g])=>{r=`${r}
$${n?`${o}-colors`:z(o)}: (
${g.map(a=>`    ${a}: $${o}-${a},`).join(`
`)}
) !default;
`}),r}function $(t,n){let r=t.toString();return t>0&&(n==="Pixels"&&(r+="px"),n==="rem"&&(r+="rem")),r}function M(t){const n=t.match(/.{1,2}/g);let r=!0;return n&&n.forEach(o=>{r&&(r=/^(.)\1+$/.test(o))}),r?`${t.substring(0,1)}${t.substring(2,3)}${t.substring(4,5)}`:t}function P(t){return t.a<255?`#${t.hex}`:`#${M(t.hex.substring(0,6))}`}function H(t,n){const r=n.y-t.y,o=n.x-t.x;let a=Math.atan2(r,o)*180/Math.PI;return a+=90,(a<0?360+a:a)%360}function b(t,n){const r=x(t.origin?t.origin.name:t.name),o=x(n.origin?n.origin.name:n.name);return r.localeCompare(o)}function D(t,n){return+t.value.text-+n.value.text}function F(t,n,r,o){const g=r.trim().split(",");let a="",f="";if(g.some(m=>((t.origin?t.origin.name:t.name).includes(m)&&(a=m),(n.origin?n.origin.name:n.name).includes(m)&&(f=m),!1)),o&&!a)return-1;let d=g.indexOf(a)-g.indexOf(f);return d===0&&(d=b(t,n)),d}function B(t,n=[],r=!1,o=!1,g=""){let a=t.sort((e,l)=>{if(r){const s=e.name.match(/\d+$/),u=l.name.match(/\d+$/);if(s&&u)return parseInt(s[0],10)-parseInt(u[0],10)}return o?D(e,l):b(e,l)});g.length>0&&(a=t.sort((e,l)=>F(e,l,g,o)));const f=[],d={},m=[];a.forEach(e=>{let l=x(e.name);e.origin&&e.tokenType!=="Gradient"&&(l=x(e.origin.name));let s=!1;m.indexOf(l)>-1?s=!0:m.push(l);let u="";!s&&n.length>0&&n.forEach(p=>{Object.values(p.tokenIds).indexOf(e.id)>-1&&p.isRoot===!1&&(u=L(x(p.name)))});const i=l.split("-"),v=u===""?i[0]:u,y=u===""?l.replace(`${i[0]}-`,""):l.replace(`${u}-`,"");!s&&i[0]!==l&&(d[v]&&d[v].length>0?d[v].push(y):d[v]=[y]);let c="";if(e.tokenType==="Color")c=P(e.value);else if(e.tokenType==="Radius")c=$(e.value.radius.measure,e.value.radius.unit);else if(e.tokenType==="GenericToken")e.propertyValues.unitless?c=e.value.text:c=$(e.value.text,"Pixels");else if(e.tokenType==="Shadow")c=`${$(e.value.x.measure,e.value.x.unit)} ${$(e.value.y.measure,e.value.y.unit)} ${$(e.value.radius.measure,e.value.radius.unit)} ${$(e.value.spread.measure,e.value.spread.unit)} ${P(e.value.color)}`;else if(e.tokenType==="Gradient"){let p="linear-gradient",h=`${Math.round(H(e.value.from,e.value.to)*100)/100}deg`;e.value.type==="Radial"&&(p="radial-gradient",h="circle at center"),c=`${p}(${h}, ${e.value.stops.map(T=>`${P(T.color)} ${Math.round(T.position*10)/10*100}%`).join(", ")})`}else e.tokenType==="Border"?c=e.propertyValues.style??$(e.value.width.measure,e.value.width.unit):c=$(e.value.measure,e.value.unit);if(s){const p=f.filter(T=>T.startsWith(`$${l}: `))[0],h=f.indexOf(p);h>-1&&(f[h]=f[h].replace(/: (.*) !default;/g,`: ${c}, $1 !default;`))}else f.push(`$${l}: ${c} !default;`)});const S=a.length===0||a[0].tokenType==="Border"?"":E(d,a[0].tokenType==="Color");return`${f.join(`
`)}
${S}`}const I={thin:100,extralight:200,light:300,normal:400,regular:400,medium:500,semibold:600,bold:700,extrabold:800,black:900,extrablack:950},O={default:I,ebony:{...I,regular:300,semibold:400}};function G(t,n){const r=n.toLowerCase();return O[O[r]?r:"default"][t.toLowerCase().replace(/\W/g,"")]||t}function V(t,n,r,o=""){const g=t.sort(b),a=o.trim().split(","),f={};g.forEach(e=>{let l=x(e.name);e.origin&&(l=x(e.origin.name));let s=l,u=a[0];a.forEach(C=>{s.includes(C)&&(u=C,s=s.replace(`-${C}`,""))});const i=e.value.font.subfamily.toLowerCase(),v=$(Math.round(e.value.fontSize.measure/n*1e3)/1e3,"rem");let y="normal",c="normal";i==="italic"?y="italic":c=i;const p=e.value.lineHeight&&Math.round(e.value.lineHeight.measure/100*1e3)/1e3,h=$(e.value.letterSpacing.measure,e.value.letterSpacing.unit),T=e.value.textDecoration.toLowerCase(),W=$(e.value.paragraphIndent.measure,e.value.paragraphIndent.unit),j=e.value.textCase==="Original"?"none":e.value.textCase.toLowerCase(),w={fontFamily:`'${e.value.font.family}'${r}`,fontSize:v,fontStyle:y,fontWeight:G(c,e.value.font.family),lineHeight:p,letterSpacing:h,textDecoration:T,paragraphIndent:W,textTransform:j};typeof f[s]<"u"?f[s][u]=w:f[s]={[u]:w}});const d=[],m=[];Object.entries(f).forEach(([e,l])=>{if(e.includes("-link"))return;m.push(`${e}: $${e},`);const s=[];a.forEach(u=>{const i=l[u];if(typeof i<"u"){const v=i.lineHeight?`
        line-height: ${i.lineHeight},`:"",y=i.letterSpacing!=="0"?`
        letter-spacing: ${i.letterSpacing},`:"",c=i.textDecoration!=="none"?`
        text-decoration: ${i.textDecoration},`:"",p=i.paragraphIndent!=="0"?`
        text-indent: ${i.paragraphIndent},`:"",h=i.textTransform!=="none"?`
        text-transform: ${i.textTransform},`:"";s.push(`${u}: (
        font-family: "${i.fontFamily}",
        font-size: ${i.fontSize},
        font-style: ${i.fontStyle},
        font-weight: ${i.fontWeight},${v}${y}${c}${p}${h}
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
`}Pulsar.registerFunction("generateSimple",B);Pulsar.registerFunction("generateTypography",V);

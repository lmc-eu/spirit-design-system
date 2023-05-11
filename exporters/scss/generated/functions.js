"use strict";function x(t){return t.replace(/\s/g,"-").replace(/\//g,"-").replace(/\d+-/g,"").replace(/--+/g,"-").toLowerCase()}function j(t){return t.slice(-1)==="s"?t.replace(/.$/,""):t}function z(t){return t==="radius"?"radii":t.slice(-1)==="s"?t:`${t}s`}function E(t,n){let r="";return Object.entries(t).forEach(([o,d])=>{r=`${r}
$${n?`${o}-colors`:z(o)}: (
${d.map(a=>`    ${a}: $${o}-${a},`).join(`
`)}
) !default;
`}),r}function m(t,n){let r=t.toString();return t>0&&(n==="Pixels"&&(r+="px"),n==="rem"&&(r+="rem")),r}function M(t){const n=t.match(/.{1,2}/g);let r=!0;return n&&n.forEach(o=>{r&&(r=/^(.)\1+$/.test(o))}),r?`${t.substring(0,1)}${t.substring(2,3)}${t.substring(4,5)}`:t}function P(t){return t.a<255?`#${t.hex}`:`#${M(t.hex.substring(0,6))}`}function H(t,n){const r=n.y-t.y,o=n.x-t.x;let a=Math.atan2(r,o)*180/Math.PI;return a+=90,(a<0?360+a:a)%360}function w(t,n){const r=x(t.origin?t.origin.name:t.name),o=x(n.origin?n.origin.name:n.name);return r.localeCompare(o)}function D(t,n){return+t.value.text-+n.value.text}function F(t,n,r,o){const d=r.trim().split(",");let a="",f="";if(d.some($=>((t.origin?t.origin.name:t.name).includes($)&&(a=$),(n.origin?n.origin.name:n.name).includes($)&&(f=$),!1)),o&&!a)return-1;let g=d.indexOf(a)-d.indexOf(f);return g===0&&(g=w(t,n)),g}function B(t,n=[],r=!1,o=!1,d=""){let a=t.sort((e,l)=>{if(r){const s=e.name.match(/\d+$/),u=l.name.match(/\d+$/);if(s&&u)return parseInt(s[0],10)-parseInt(u[0],10)}return o?D(e,l):w(e,l)});d.length>0&&(a=t.sort((e,l)=>F(e,l,d,o)));const f=[],g={},$=[];a.forEach(e=>{let l=x(e.name);e.origin&&!e.origin.name.toLowerCase().startsWith("gradients/gradient")&&(l=x(e.origin.name));let s=!1;$.indexOf(l)>-1?s=!0:$.push(l);let u="";!s&&n.length>0&&n.forEach(p=>{Object.values(p.tokenIds).indexOf(e.id)>-1&&p.isRoot===!1&&(u=j(x(p.name)))});const i=l.split("-"),v=u===""?i[0]:u,y=u===""?l.replace(`${i[0]}-`,""):l.replace(`${u}-`,"");!s&&i[0]!==l&&(g[v]&&g[v].length>0?g[v].push(y):g[v]=[y]);let c="";if(e.tokenType==="Color")c=P(e.value);else if(e.tokenType==="Radius")c=m(e.value.radius.measure,e.value.radius.unit);else if(e.tokenType==="GenericToken")e.propertyValues.unitless?c=e.value.text:c=m(e.value.text,"Pixels");else if(e.tokenType==="Shadow")c=`${m(e.value.x.measure,e.value.x.unit)} ${m(e.value.y.measure,e.value.y.unit)} ${m(e.value.radius.measure,e.value.radius.unit)} ${m(e.value.spread.measure,e.value.spread.unit)} ${P(e.value.color)}`;else if(e.tokenType==="Gradient"){let p="linear-gradient",h=`${Math.round(H(e.value.from,e.value.to)*100)/100}deg`;e.value.type==="Radial"&&(p="radial-gradient",h="circle at center"),c=`${p}(var(--angle, ${h}), ${e.value.stops.map(T=>`${P(T.color)} ${Math.round(T.position*10)/10*100}%`).join(", ")})`}else e.tokenType==="Border"?c=e.propertyValues.style??m(e.value.width.measure,e.value.width.unit):c=m(e.value.measure,e.value.unit);if(s){const p=f.filter(T=>T.startsWith(`$${l}: `))[0],h=f.indexOf(p);h>-1&&(f[h]=f[h].replace(/: (.*) !default;/g,`: ${c}, $1 !default;`))}else f.push(`$${l}: ${c} !default;`)});const C=a.length===0||a[0].tokenType==="Border"?"":E(g,a[0].tokenType==="Color");return`${f.join(`
`)}
${C}`}const W={thin:100,extralight:200,light:300,normal:400,regular:400,medium:500,semibold:600,bold:700,extrabold:800,black:900,extrablack:950},I={default:W,ebony:{...W,regular:300,semibold:400}};function V(t,n){const r=n.toLowerCase();return I[I[r]?r:"default"][t.toLowerCase().replace(/\W/g,"")]||t}function G(t,n,r,o=""){const d=t.sort(w),a=o.trim().split(","),f={};d.forEach(e=>{let l=x(e.name);e.origin&&(l=x(e.origin.name));let s=l,u=a[0];a.forEach(S=>{s.includes(S)&&(u=S,s=s.replace(`-${S}`,""))});const i=e.value.font.subfamily.toLowerCase(),v=m(Math.round(e.value.fontSize.measure/n*1e3)/1e3,"rem");let y="normal",c="normal";i==="italic"?y="italic":c=i;const p=e.value.lineHeight&&Math.round(e.value.lineHeight.measure/100*1e3)/1e3,h=m(e.value.letterSpacing.measure,e.value.letterSpacing.unit),T=e.value.textDecoration.toLowerCase(),L=m(e.value.paragraphIndent.measure,e.value.paragraphIndent.unit),O=e.value.textCase==="Original"?"none":e.value.textCase.toLowerCase(),b={fontFamily:`'${e.value.font.family}'${r}`,fontSize:v,fontStyle:y,fontWeight:V(c,e.value.font.family),lineHeight:p,letterSpacing:h,textDecoration:T,paragraphIndent:L,textTransform:O};typeof f[s]<"u"?f[s][u]=b:f[s]={[u]:b}});const g=[],$=[];Object.entries(f).forEach(([e,l])=>{if(e.includes("-link"))return;$.push(`${e}: $${e},`);const s=[];a.forEach(u=>{const i=l[u];if(typeof i<"u"){const v=i.lineHeight?`
        line-height: ${i.lineHeight},`:"",y=i.letterSpacing!=="0"?`
        letter-spacing: ${i.letterSpacing},`:"",c=i.textDecoration!=="none"?`
        text-decoration: ${i.textDecoration},`:"",p=i.paragraphIndent!=="0"?`
        text-indent: ${i.paragraphIndent},`:"",h=i.textTransform!=="none"?`
        text-transform: ${i.textTransform},`:"";s.push(`${u}: (
        font-family: "${i.fontFamily}",
        font-size: ${i.fontSize},
        font-style: ${i.fontStyle},
        font-weight: ${i.fontWeight},${v}${y}${c}${p}${h}
    ),`)}}),g.push(`$${e}: (
    ${s.join(`
    `)}
) !default;
`)});const C=`$styles: (
    ${$.join(`
    `)}
) !default;`;return`${g.join(`
`)}
${C}
`}Pulsar.registerFunction("generateSimple",B);Pulsar.registerFunction("generateTypography",G);

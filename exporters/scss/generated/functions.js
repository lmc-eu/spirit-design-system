"use strict";function y(t){return t.replace(/\s/g,"-").replace(/\//g,"-").replace(/\d+-/g,"").replace(/--+/g,"-").toLowerCase()}function j(t){return t.slice(-1)==="s"?t.replace(/.$/,""):t}function E(t){return t==="radius"?"radii":t.slice(-1)==="s"?t:`${t}s`}function M(t,r){let n="";return Object.entries(t).forEach(([o,g])=>{n=`${n}
$${r?`${o}-colors`:E(o)}: (
${g.map(a=>`    ${a}: $${o}-${a},`).join(`
`)}
) !default;
`}),n}function m(t,r){let n=t.toString();return t>0&&(r==="Pixels"&&(n+="px"),r==="rem"&&(n+="rem")),n}function W(t){const r=t.match(/.{1,2}/g);let n=!0;return r&&r.forEach(o=>{n&&(n=/^(.)\1+$/.test(o))}),n?`${t.substring(0,1)}${t.substring(2,3)}${t.substring(4,5)}`:t}function P(t){return t.a<255?`#${t.hex}`:`#${W(t.hex.substring(0,6))}`}function z(t,r){const n=r.y-t.y,o=r.x-t.x;let a=Math.atan2(n,o)*180/Math.PI;return a+=90,(a<0?360+a:a)%360}function w(t,r){const n=y(t.origin?t.origin.name:t.name),o=y(r.origin?r.origin.name:r.name);return n.localeCompare(o)}function L(t,r){return+t.value.text-+r.value.text}function D(t,r,n,o){const g=n.trim().split(",");let a="",p="";if(g.some(h=>((t.origin?t.origin.name:t.name).includes(h)&&(a=h),(r.origin?r.origin.name:r.name).includes(h)&&(p=h),!1)),!!o&&!a)return-1;let d=g.indexOf(a)-g.indexOf(p);return d===0&&(d=w(t,r)),d}function N(t,r=[],n=!1,o=!1,g=""){let a=t.sort((e,s)=>{if(n){const u=e.name.match(/\d+$/),f=s.name.match(/\d+$/);if(u&&f)return parseInt(u[0],10)-parseInt(f[0],10)}return o?L(e,s):w(e,s)});g.length>0&&(a=t.sort((e,s)=>D(e,s,g,o)));const p=[],d={},h=[];a.forEach(e=>{let s=y(e.name);e.origin&&e.tokenType!=="Gradient"&&(s=y(e.origin.name));let u=!1;h.indexOf(s)>-1?u=!0:h.push(s);let f="";!u&&r.length>0&&r.forEach(l=>{Object.values(l.tokenIds).indexOf(e.id)>-1&&l.isRoot===!1&&(f=j(y(l.name)))});const i=s.split("-"),v=f===""?i[0]:f,x=f===""?s.replace(`${i[0]}-`,""):s.replace(`${f}-`,"");!u&&i[0]!==s&&(d[v]&&d[v].length>0?d[v].push(x):d[v]=[x]);let c="";if(e.tokenType==="Color")c=P(e.value);else if(e.tokenType==="Radius")c=m(e.value.radius.measure,e.value.radius.unit);else if(e.tokenType==="GenericToken"){const l=e.properties.find($=>$.codeName==="unitless");l&&!!l.value?c=e.value.text:c=m(e.value.text,"Pixels")}else if(e.tokenType==="Shadow")c=`${m(e.value.x.measure,e.value.x.unit)} ${m(e.value.y.measure,e.value.y.unit)} ${m(e.value.radius.measure,e.value.radius.unit)} ${m(e.value.spread.measure,e.value.spread.unit)} ${P(e.value.color)}`;else if(e.tokenType==="Gradient"){let l="linear-gradient",$=`${Math.round(z(e.value.from,e.value.to)*100)/100}deg`;e.value.type==="Radial"&&(l="radial-gradient",$="circle at center"),c=`${l}(${$}, ${e.value.stops.map(T=>`${P(T.color)} ${Math.round(T.position*10)/10*100}%`).join(", ")})`}else if(e.tokenType==="Border"){const l=e.properties.find($=>$.codeName==="style");l&&l.value.length>0?c=l.value:c=m(e.value.width.measure,e.value.width.unit)}else c=m(e.value.measure,e.value.unit);if(u){const l=p.filter(T=>T.startsWith(`$${s}: `))[0],$=p.indexOf(l);$>-1&&(p[$]=p[$].replace(/: (.*) !default;/g,`: ${c}, $1 !default;`))}else p.push(`$${s}: ${c} !default;`)});const S=a.length===0||a[0].tokenType==="Border"?"":M(d,a[0].tokenType==="Color");return`${p.join(`
`)}
${S}`}function B(t){switch(t.toLowerCase().replace(/\W/g,"")){case"thin":return 100;case"extralight":return 200;case"light":return 300;case"normal":return 400;case"regular":return 400;case"medium":return 500;case"semibold":return 600;case"bold":return 700;case"extrabold":return 800;case"black":return 900;case"extrablack":return 950;default:return t}}function F(t,r,n,o=""){const g=t.sort(w),a=o.trim().split(","),p={};g.forEach(e=>{let s=y(e.name);e.origin&&(s=y(e.origin.name));let u=s,f=a[0];a.forEach(C=>{u.includes(C)&&(f=C,u=u.replace(`-${C}`,""))});const i=e.value.font.subfamily.toLowerCase(),v=m(Math.round(e.value.fontSize.measure/r*1e3)/1e3,"rem");let x="normal",c="normal";i==="italic"?x="italic":c=i;const l=Math.round(e.value.lineHeight.measure/100*1e3)/1e3,$=m(e.value.letterSpacing.measure,e.value.letterSpacing.unit),T=e.value.textDecoration.toLowerCase(),O=m(e.value.paragraphIndent.measure,e.value.paragraphIndent.unit),b=e.value.textCase==="Original"?"none":e.value.textCase.toLowerCase(),I={fontFamily:`'${e.value.font.family}'${n}`,fontSize:v,fontStyle:x,fontWeight:B(c),lineHeight:l,letterSpacing:$,textDecoration:T,paragraphIndent:O,textTransform:b};typeof p[u]<"u"?p[u][f]=I:p[u]={[f]:I}});const d=[],h=[];Object.entries(p).forEach(([e,s])=>{if(e.includes("-link"))return;h.push(`${e}: $${e},`);const u=[];a.forEach(f=>{const i=s[f];if(typeof i<"u"){const v=i.letterSpacing!=="0"?`
        letter-spacing: ${i.letterSpacing},`:"",x=i.textDecoration!=="none"?`
        text-decoration: ${i.textDecoration},`:"",c=i.paragraphIndent!=="0"?`
        text-indent: ${i.paragraphIndent},`:"",l=i.textTransform!=="none"?`
        text-transform: ${i.textTransform},`:"";u.push(`${f}: (
        font-family: "${i.fontFamily}",
        font-size: ${i.fontSize},
        font-style: ${i.fontStyle},
        font-weight: ${i.fontWeight},
        line-height: ${i.lineHeight},${v}${x}${c}${l}
    ),`)}}),d.push(`$${e}: (
    ${u.join(`
    `)}
) !default;
`)});const S=`$styles: (
    ${h.join(`
    `)}
) !default;`;return`${d.join(`
`)}
${S}
`}Pulsar.registerFunction("generateSimple",N);Pulsar.registerFunction("generateTypography",F);

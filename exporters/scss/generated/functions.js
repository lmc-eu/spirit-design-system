"use strict";function g(t){return t.replace(/\s/g,"-").replace(/\//g,"-").replace(/\d+-/g,"").replace(/--+/g,"-").toLowerCase()}function P(t){return t.slice(-1)==="s"?t.replace(/.$/,""):t}function b(t){return t==="radius"?"radii":t.slice(-1)==="s"?t:`${t}s`}function I(t,f){let s="";return Object.entries(t).forEach(([p,v])=>{s=`${s}
$${f?`${p}-colors`:b(p)}: (
${v.map(l=>`    ${l}: $${p}-${l},`).join(`
`)}
) !default;
`}),s}function d(t,f){let s=t;return t>0&&(f==="Pixels"&&(s+="px"),f==="rem"&&(s+="rem")),s}function M(t){const f=t.match(/.{1,2}/g);let s=!0;return f.forEach(p=>{s&&(s=/^(.)\1+$/.test(p))}),s?`${t.substring(0,1)}${t.substring(2,3)}${t.substring(4,5)}`:t}function w(t){return t.a<255?`#${t.hex}`:`#${M(t.hex.substring(0,6))}`}function W(t,f){const s=f.y-t.y,p=f.x-t.x;let l=Math.atan2(s,p)*180/Math.PI;return l+=90,(l<0?360+l:l)%360}function z(t,f={},s=!1,p=!1,v=""){let l=t.sort((e,n)=>{if(s){const r=e.name.match(/\d+$/),u=n.name.match(/\d+$/);if(r&&u)return r[0]-u[0]}if(p)return+e.value.text-+n.value.text;const a=g(e.origin?e.origin.name:e.name),i=g(n.origin?n.origin.name:n.name);return a.localeCompare(i)});v.length>0&&(l=t.sort((e,n)=>{const a=v.trim().split(",");let i="",r="";return a.some(u=>((e.origin?e.origin.name:e.name).includes(u)&&(i=u),(n.origin?n.origin.name:n.name).includes(u)&&(r=u),!1)),!!p&&!i?-1:a.indexOf(i)-a.indexOf(r)}));const m=[],$={},T=[];l.forEach(e=>{let n=g(e.name);e.origin&&e.tokenType!=="Gradient"&&(n=g(e.origin.name));let a=!1;T.indexOf(n)>-1?a=!0:T.push(n);let i="";!a&&f.length>0&&f.forEach(o=>{Object.values(o.tokenIds).indexOf(e.id)>-1&&o.isRoot===!1&&(i=P(g(o.name)))});const r=n.split("-"),u=i===""?r[0]:i,x=i===""?n.replace(`${r[0]}-`,""):n.replace(`${i}-`,"");!a&&r[0]!==n&&($[u]&&$[u].length>0?$[u].push(x):$[u]=[x]);let c="";if(e.tokenType==="Color")c=w(e.value);else if(e.tokenType==="Radius")c=d(e.value.radius.measure,e.value.radius.unit);else if(e.tokenType==="GenericToken")c=d(e.value.text,"Pixels");else if(e.tokenType==="Shadow")c=`${d(e.value.x.measure,e.value.x.unit)} ${d(e.value.y.measure,e.value.y.unit)} ${d(e.value.radius.measure,e.value.radius.unit)} ${d(e.value.spread.measure,e.value.spread.unit)} ${w(e.value.color)}`;else if(e.tokenType==="Gradient"){let o="linear-gradient",h=`${Math.round(W(e.value.from,e.value.to)*100)/100}deg`;e.value.type==="Radial"&&(o="radial-gradient",h="circle at center"),c=`${o}(${h}, ${e.value.stops.map(y=>`${w(y.color)} ${Math.round(y.position*10)/10*100}%`).join(", ")})`}else e.tokenType==="Border"?e.properties.forEach(o=>{o.codeName==="style"&&o.value.length>0?c=o.value:c=d(e.value.width.measure,e.value.width.unit)}):c=d(e.value.measure,e.value.unit);if(a){const o=m.filter(y=>y.startsWith(`$${n}: `))[0],h=m.indexOf(o);h>-1&&(m[h]=m[h].replace(/: (.*) !default;/g,`: ${c}, $1 !default;`))}else m.push(`$${n}: ${c} !default;`)});const C=l.length===0||l[0].tokenType==="Border"?"":I($,l[0].tokenType==="Color");return`${m.join(`
`)}
${C}`}function D(t){switch(t.toLowerCase().replace(/\W/g,"")){case"thin":return 100;case"extralight":return 200;case"light":return 300;case"normal":return 400;case"regular":return 400;case"medium":return 500;case"semibold":return 600;case"bold":return 700;case"extrabold":return 800;case"black":return 900;case"extrablack":return 950;default:return t}}function L(t=[],f,s,p=""){const v=t.sort((e,n)=>{const a=g(e.origin?e.origin.name:e.name),i=g(n.origin?n.origin.name:n.name);return a.localeCompare(i)}),l=p.trim().split(","),m={};v.forEach(e=>{let n=g(e.name);e.origin&&(n=g(e.origin.name));let a=n,i=l[0];l.forEach(S=>{a.includes(S)&&(i=S,a=a.replace(`-${S}`,""))});const r=e.value.font.subfamily.toLowerCase(),u=d(Math.round(e.value.fontSize.measure/f*1e3)/1e3,"rem");let x="normal",c="normal";r==="italic"?x="italic":c=r;const o=Math.round(e.value.lineHeight.measure/100*1e3)/1e3,h=d(e.value.letterSpacing.measure,e.value.letterSpacing.unit),y=e.value.textDecoration.toLowerCase(),j=d(e.value.paragraphIndent.measure,e.value.paragraphIndent.unit),E=e.value.textCase==="Original"?"none":e.value.textCase.toLowerCase(),O={fontFamily:`'${e.value.font.family}'${s}`,fontSize:u,fontStyle:x,fontWeight:D(c),lineHeight:o,letterSpacing:h,textDecoration:y,paragraphIndent:j,textTransform:E};typeof m[a]<"u"?m[a][i]=O:m[a]={[i]:O}});const $=[],T=[];Object.entries(m).forEach(([e,n])=>{if(e.includes("-link-"))return;T.push(`${e}: $${e},`);const a=[];l.forEach(i=>{const r=n[i];if(typeof r<"u"){const u=r.letterSpacing!==0?`
        letter-spacing: ${r.letterSpacing},`:"",x=r.textDecoration!=="none"?`
        text-decoration: ${r.textDecoration},`:"",c=r.paragraphIndent!==0?`
        text-indent: ${r.paragraphIndent},`:"",o=r.textTransform!=="none"?`
        text-transform: ${r.textTransform},`:"";a.push(`${i}: (
        font-family: "${r.fontFamily}",
        font-size: ${r.fontSize},
        font-style: ${r.fontStyle},
        font-weight: ${r.fontWeight},
        line-height: ${r.lineHeight},${u}${x}${c}${o}
    ),`)}}),$.push(`$${e}: (
    ${a.join(`
    `)}
) !default;
`)});const C=`$styles: (
    ${T.join(`
    `)}
) !default;`;return`${$.join(`
`)}
${C}
`}Pulsar.registerFunction("generateSimple",z);Pulsar.registerFunction("generateTypography",L);

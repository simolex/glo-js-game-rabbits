(()=>{"use strict";(()=>{const t=document.querySelector(".square-body"),e=document.querySelector(".btn-reset");let c=t.querySelectorAll(".block");const o=t=>t.querySelector(".block-number"),r=(t,e)=>{[o(t).textContent,o(e).textContent]=[o(e).textContent,o(t).textContent]};t.addEventListener("click",(t=>{const e=(t=>{let e;return c.forEach(((c,o)=>{c===t&&(e=o)})),e})(t.target.closest(".block"));switch(!0){case!!t.target.closest(".left"):e>0&&r(c[e-1],c[e]);break;case!!t.target.closest(".right"):e<24&&r(c[e+1],c[e]);break;case!!t.target.closest(".top"):e-5>=0&&r(c[e-5],c[e]);break;case!!t.target.closest(".bottom"):e+5<=24&&r(c[e+5],c[e])}})),e.addEventListener("click",(()=>{c.forEach(((t,e)=>{o(t).textContent=e+1+""}))}))})()})();
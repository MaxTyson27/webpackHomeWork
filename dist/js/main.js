(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let r=performance.now();requestAnimationFrame((function n(c){let l=(c-r)/o;l>1&&(l=1);let a=e(l);t(a),l<1&&requestAnimationFrame(n)}))};(e=>{const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),r=document.querySelector("#timer-seconds"),n=setInterval((()=>{let e=(()=>{let e=(new Date("25 february 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();for(let t in e)e[t]<10&&(e[t]="0"+e[t]);e.timeRemaining>0?(t.textContent=e.hours,o.textContent=e.minutes,r.textContent=e.seconds):clearInterval(n)}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector("main"),o=document.querySelector("main>a"),r=()=>{e.classList.toggle("active-menu")},n=e=>{const t=e.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})};t.addEventListener("click",(e=>{e.target.closest("a")?(e.preventDefault(),n(o)):e.target.closest(".menu")&&r()})),e.addEventListener("click",(e=>{e.target.classList.contains("close-btn")?(e.preventDefault(),r()):e.target.matches("li a")&&(e.preventDefault(),r(),n(e.target))}))})(),(()=>{const t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup"),r=o.querySelector(".popup-content");let n=document.documentElement.offsetWidth,c=(l=function(e){return 1-Math.sin(Math.acos(e))},function(e){return 1-l(1-e)});var l;t.forEach((t=>{t.addEventListener("click",(()=>{o.style.display="block",n>768&&e({duration:1e3,timing:c,draw(e){r.style.left=38*e+"%"}})}))})),o.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(o.style.display="none")}))})(),(()=>{const e=document.querySelectorAll('.calc-block>input[type="text"]'),t=document.querySelector("#form1"),o=document.querySelector("#form3"),r=document.querySelector("#form2"),n={formTop:t,formModal:o};function c(e,t,o,r){let n=!1;if(!/[^а-яёА-ЯЁ\-\ ]+/g.test(e.value))return!0;if(n=!0,!/[^\d\(\)\-]+/g.test(t.value))return!0;if(n=!0,!/[^a-zA-z\d\@\-\.\!\~\*\']+/g.test(o.value))return!0;if(n=!0,null!=arguments[3]){if(!/[^а-яёА-ЯЁ\-\ ]+/g.test(r.value))return!0;n=!0}n?console.log("fail"):alert("Ваша заявка была успешно отправлена!")}!function(){e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d]/g,"")}))}));const t=[...document.querySelectorAll('input[type="text"]')];t.splice(1,3),t.forEach((e=>{e.addEventListener("input",(function(){1==this.value.length&&(this.value=this.value.toUpperCase())}))}))}(),(()=>{for(let e in n)n[e].addEventListener("submit",(e=>{e.preventDefault(),c(e.target.querySelector('input[type="text"]'),e.target.querySelector('input[type="tel"]'),e.target.querySelector('input[type="email"]'))}));r.addEventListener("submit",(e=>{e.preventDefault(),c(e.target.querySelector('input[type="text"]'),e.target.querySelector('input[type="tel"]'),e.target.querySelector('input[type="email"]'),e.target.querySelector("#form2-message"))}))})()})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelectorAll(".service-header-tab");document.querySelector(".service-header").addEventListener("click",(o=>{if(o.target.closest(".service-header-tab")){const r=o.target.closest(".service-header-tab");t.forEach(((t,o)=>{t===r?(t.classList.add("active"),e[o].classList.remove("d-none")):(t.classList.remove("active"),e[o].classList.add("d-none"))}))}}))})(),((e,t)=>{if(".portfolio-content"===e&&".portfolio-item"===t){const o=document.querySelector(e),r=document.querySelectorAll(t),n=2e3;let c,l,a=0,i=document.querySelector(".portfolio-dots");const u=()=>{for(let e=0;e<r.length;e++){const t=document.createElement("li");0===e?t.classList.add("dot","dot-active"):t.classList.add("dot"),i.appendChild(t),l=document.querySelectorAll(".dot")}},s=(e,t,o)=>{e[t].classList.remove(o)},d=(e,t,o)=>{e[t].classList.add(o)},m=()=>{s(r,a,"portfolio-item-active"),s(l,a,"dot-active"),a++,a>=r.length&&(a=0),d(r,a,"portfolio-item-active"),d(l,a,"dot-active")},v=(e=1500)=>{c=setInterval(m,e)},p=()=>{clearInterval(c)};o.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(s(r,a,"portfolio-item-active"),s(l,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.classList.contains("dot")&&l.forEach(((t,o)=>{e.target===t&&(a=o)})),a>=r.length&&(a=0),a<0&&(a=r.length-1),d(r,a,"portfolio-item-active"),d(l,a,"dot-active"))})),o.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&p()}),!0),o.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&v(n)}),!0),u(),v(n)}})(".portfolio-content",".portfolio-item"),((t=100)=>{const o=document.querySelector(".calc-block"),r=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),a=document.getElementById("total");o.addEventListener("input",(o=>{o.target!==r&&o.target!==n&&o.target!==c&&o.target!==l||(()=>{const o=+r.options[r.selectedIndex].value,i=+n.value;let u=0,s=1,d=1;l.value&&l.value<5?d=2:l.value&&l.value<10&&(d=1.5),c.value>1&&(s+=+c.value/10),u=r.value&&n.value?t*o*i*s*d:0,e({duration:1e3,timing:e=>e,draw(e){a.textContent=Math.floor(e*u)}})})()}))})(100)})();
(()=>{"use strict";(e=>{const t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),r=document.querySelector("#timer-seconds"),o=setInterval((()=>{let e=(()=>{let e=(new Date("25 february 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();for(let t in e)e[t]<10&&(e[t]="0"+e[t]);e.timeRemaining>0?(t.textContent=e.hours,n.textContent=e.minutes,r.textContent=e.seconds):clearInterval(o)}),1e3)})()})();
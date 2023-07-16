
/**
 * @copyright amex / @macl2189 | Liberluna
 * @description <div include="./components/header.html"></div> <- load sample
 * @param {function} Build
 */
"use strict";async function Build(){let t=!1;globalThis.ComponentLoaderJS={version:"1.00",auther:"@macl2189 / amex",active:t};let e=document.querySelectorAll("[include]");async function n(t){let e=await fetch(t),n=await e.text();return n}for(let a of e){let i=await n(a.getAttribute("include"));a.innerHTML=i}t=!0; if(window.callbackBuild){window.callbackBuild()}}window.onload=()=>{Build();};
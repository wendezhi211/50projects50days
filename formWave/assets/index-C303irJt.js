(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let d=document.querySelector("form");[...d==null?void 0:d.children].forEach((r,s)=>{s<2?(r.children[1].addEventListener("focus",()=>{r.children[0].classList.add("checked")}),r.children[1].addEventListener("blur",()=>{r.children[1].value.trim().length==0&&r.children[0].classList.remove("checked")}),[...r.children[0].children].forEach((i,o)=>{i.style.transitionDelay=o*50+"ms"})):(r.addEventListener("mousedown",()=>{r.classList.add("mousedown")}),r.addEventListener("mouseup",()=>{r.classList.remove("mousedown")}))});

(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();var l;(l=document.querySelector("body"))==null||l.addEventListener("keydown",o=>{let r=document.querySelector("#app");r.style.gridTemplateColumns="repeat(3, 1fr)",r.innerHTML=`
    <div class="key">
      <small>event.key</small>
      ${o.key}
    </div>
    <div class="key">
      <small>event.keyCode</small>
      ${o.keyCode}
    </div>
    <div class="key">
      <small>event.code</small>
      ${o.code}
    </div>
  `});

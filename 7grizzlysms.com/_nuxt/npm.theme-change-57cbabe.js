(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{260:function(t,e,c){function o(){var t=document.querySelector("[data-toggle-theme]");!function(e=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",e),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach((e=>{e.classList.add(t.getAttribute("data-act-class"))})))}(),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach((t=>{t.addEventListener("click",(function(){var e=t.getAttribute("data-toggle-theme");if(e){var c=e.split(",");document.documentElement.getAttribute("data-theme")==c[0]?1==c.length?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("data-theme",c[1]),localStorage.setItem("theme",c[1])):(document.documentElement.setAttribute("data-theme",c[0]),localStorage.setItem("theme",c[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach((t=>{t.classList.toggle(this.getAttribute("data-act-class"))}))}))}))}function l(){!function(t=localStorage.getItem("theme")){var e;null!=t&&""!=t&&(localStorage.getItem("theme")&&""!=localStorage.getItem("theme")?(document.documentElement.setAttribute("data-theme",t),(e=document.querySelector("[data-set-theme='"+t.toString()+"']"))&&([...document.querySelectorAll("[data-set-theme]")].forEach((t=>{t.classList.remove(t.getAttribute("data-act-class"))})),e.getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class")))):(e=document.querySelector("[data-set-theme='']")).getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class")))}(),[...document.querySelectorAll("[data-set-theme]")].forEach((t=>{t.addEventListener("click",(function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach((t=>{t.classList.remove(t.getAttribute("data-act-class"))})),t.getAttribute("data-act-class")&&t.classList.add(t.getAttribute("data-act-class"))}))}))}function m(){!function(t=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",t),document.querySelector("select[data-choose-theme] [value='"+t.toString()+"']")&&[...document.querySelectorAll("select[data-choose-theme] [value='"+t.toString()+"']")].forEach((t=>{t.selected=!0})))}(),document.querySelector("select[data-choose-theme]")&&[...document.querySelectorAll("select[data-choose-theme]")].forEach((t=>{t.addEventListener("change",(function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem("theme")+"']")].forEach((t=>{t.selected=!0}))}))}))}t.exports={themeChange:function(t=!0){!0===t?document.addEventListener("DOMContentLoaded",(function(t){o(),m(),l()})):(o(),m(),l())}}}}]);
//# sourceMappingURL=npm.theme-change-57cbabe.js.map
import{g as m,c as u}from"./QBtn.c47aa8c6.js";import{a1 as p}from"./index.c5bdb514.js";const g=[null,document,document.body,document.scrollingElement,document.documentElement];function b(o,e){let n=m(e);if(n===void 0){if(o==null)return window;n=o.closest(".scroll,.scroll-y,.overflow-auto")}return g.includes(n)?window:n}function h(o){return o===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:o.scrollTop}function v(o){return o===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:o.scrollLeft}function f(o,e,n=0){const t=arguments[3]===void 0?performance.now():arguments[3],i=h(o);if(n<=0){i!==e&&d(o,e);return}requestAnimationFrame(l=>{const c=l-t,s=i+(e-i)/Math.max(c,n)*c;d(o,s),s!==e&&f(o,e,n-c,l)})}function w(o,e,n=0){const t=arguments[3]===void 0?performance.now():arguments[3],i=v(o);if(n<=0){i!==e&&a(o,e);return}requestAnimationFrame(l=>{const c=l-t,s=i+(e-i)/Math.max(c,n)*c;a(o,s),s!==e&&w(o,e,n-c,l)})}function d(o,e){if(o===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,e);return}o.scrollTop=e}function a(o,e){if(o===window){window.scrollTo(e,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}o.scrollLeft=e}function x(o,e,n){if(n){f(o,e,n);return}d(o,e)}function E(o,e,n){if(n){w(o,e,n);return}a(o,e)}let r;function L(){if(r!==void 0)return r;const o=document.createElement("p"),e=document.createElement("div");u(o,{width:"100%",height:"200px"}),u(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(o),document.body.appendChild(e);const n=o.offsetWidth;e.style.overflow="scroll";let t=o.offsetWidth;return n===t&&(t=e.clientWidth),e.remove(),r=n-t,r}function T(o,e=!0){return!o||o.nodeType!==Node.ELEMENT_NODE?!1:e?o.scrollHeight>o.clientHeight&&(o.classList.contains("scroll")||o.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(o)["overflow-y"])):o.scrollWidth>o.clientWidth&&(o.classList.contains("scroll")||o.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(o)["overflow-x"]))}function P(){if(window.getSelection!==void 0){const o=window.getSelection();o.empty!==void 0?o.empty():o.removeAllRanges!==void 0&&(o.removeAllRanges(),p.is.mobile!==!0&&o.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{b as a,h as b,P as c,v as d,x as e,L as g,T as h,E as s};
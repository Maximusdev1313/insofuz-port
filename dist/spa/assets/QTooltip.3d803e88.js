import{c as te,a as ne,j as E,g as be}from"./use-router-link.2c7f4719.js";import{c as b,h as $,r as T,A as we,J as R,N as le,B as M,w as x,o as xe,G as S,g as j,C as A,K as B,a9 as V,a as ye,aa as Te,ab as Pe,a0 as Ce,W as Se,H as He,I as Ee}from"./index.c5bdb514.js";import{c as D,g as $e,a as Me}from"./selection.363d3796.js";import{u as qe,a as We,b as ke,c as Le}from"./use-timeout.e4900cd8.js";import{r as K,a as Oe}from"./focus-manager.32f8d49a.js";var it=te({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:n}){const l=b(()=>{const t=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(o=>e[o]===!0).map(o=>`q-btn-group--${o}`).join(" ");return`q-btn-group row no-wrap${t.length>0?" "+t:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>$("div",{class:l.value},ne(n.default))}});const Ae={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Be({showing:e,avoidEmit:n,configureAnchorEl:l}){const{props:t,proxy:o,emit:u}=j(),i=T(null);let r=null;function c(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};l===void 0&&(Object.assign(s,{hide(a){o.hide(a)},toggle(a){o.toggle(a),a.qAnchorHandled=!0},toggleKey(a){we(a,13)===!0&&s.toggle(a)},contextClick(a){o.hide(a),R(a),le(()=>{o.show(a),a.qAnchorHandled=!0})},prevent:R,mobileTouch(a){if(s.mobileCleanup(a),c(a)!==!0)return;o.hide(a),i.value.classList.add("non-selectable");const h=a.target;M(s,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,o.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&a!==void 0&&D()}}),l=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let h;a===!0?o.$q.platform.is.mobile===!0?h=[[i.value,"touchstart","mobileTouch","passive"]]:h=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:h=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],M(s,"anchor",h)});function d(){A(s,"anchor")}function m(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;l()}function g(){if(t.target===!1||t.target===""||o.$el.parentNode===null)i.value=null;else if(t.target===!0)m(o.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,l()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return x(()=>t.contextMenu,a=>{i.value!==null&&(d(),l(a))}),x(()=>t.target,()=>{i.value!==null&&d(),g()}),x(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?d():l())}),xe(()=>{g(),n!==!0&&t.modelValue===!0&&i.value===null&&u("update:modelValue",!1)}),S(()=>{r!==null&&clearTimeout(r),d()}),{anchorEl:i,canShow:c,anchorEvents:s}}function De(e,n){const l=T(null);let t;function o(r,c){const s=`${c!==void 0?"add":"remove"}EventListener`,d=c!==void 0?c:t;r!==window&&r[s]("scroll",d,B.passive),window[s]("scroll",d,B.passive),t=c}function u(){l.value!==null&&(o(l.value),l.value=null)}const i=x(()=>e.noParentEvent,()=>{l.value!==null&&(u(),n())});return S(i),{localScrollTarget:l,unconfigureScrollTarget:u,changeScrollEvent:o}}let ze=1,je=document.body;function Ne(e,n){const l=document.createElement("div");if(l.id=n!==void 0?`q-portal--${n}--${ze++}`:e,V.globalNodes!==void 0){const t=V.globalNodes.class;t!==void 0&&(l.className=t)}return je.appendChild(l),l}function Qe(e){e.remove()}const y=[];function at(e){return y.find(n=>n.contentEl!==null&&n.contentEl.contains(e))}function Fe(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return E(e)}else if(e.__qPortal===!0){const l=E(e);return l!==void 0&&l.$options.name==="QPopupProxy"?(e.hide(n),l):e}e=E(e)}while(e!=null)}function rt(e,n,l){for(;l!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(l--,e.$options.name==="QMenu"){e=Fe(e,n);continue}e.hide(n)}e=E(e)}}function Ge(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ie(e,n,l,t){const o=T(!1),u=T(!1);let i=null;const r={},c=t==="dialog"&&Ge(e);function s(m){if(m===!0){K(r),u.value=!0;return}u.value=!1,o.value===!1&&(c===!1&&i===null&&(i=Ne(!1,t)),o.value=!0,y.push(e.proxy),Oe(r))}function d(m){if(u.value=!1,m!==!0)return;K(r),o.value=!1;const g=y.indexOf(e.proxy);g!==-1&&y.splice(g,1),i!==null&&(Qe(i),i=null)}return ye(()=>{d(!0)}),e.proxy.__qPortal=!0,Te(e.proxy,"contentEl",()=>n.value),{showPortal:s,hidePortal:d,portalIsActive:o,portalIsAccessible:u,renderPortal:()=>c===!0?l():o.value===!0?[$(Pe,{to:i},l())]:void 0}}const _e={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Re(e,n=()=>{},l=()=>{}){return{transitionProps:b(()=>{const t=`q-transition--${e.transitionShow||n()}`,o=`q-transition--${e.transitionHide||l()}`;return{appear:!0,enterFromClass:`${t}-enter-from`,enterActiveClass:`${t}-enter-active`,enterToClass:`${t}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:b(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ve(){let e;const n=j();function l(){e=void 0}return Ce(l),S(l),{removeTick:l,registerTick(t){e=t,le(()=>{e===t&&(be(n)===!1&&e(),e=void 0)})}}}const{notPassiveCapture:q}=B,w=[];function W(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let l=y.length-1;for(;l>=0;){const t=y[l].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;l--}for(let t=w.length-1;t>=0;t--){const o=w[t];if((o.anchorEl.value===null||o.anchorEl.value.contains(n)===!1)&&(n===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(n)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Ke(e){w.push(e),w.length===1&&(document.addEventListener("mousedown",W,q),document.addEventListener("touchstart",W,q))}function U(e){const n=w.findIndex(l=>l===e);n>-1&&(w.splice(n,1),w.length===0&&(document.removeEventListener("mousedown",W,q),document.removeEventListener("touchstart",W,q)))}let X,Y;function J(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ue(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const z={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{z[`${e}#ltr`]=e,z[`${e}#rtl`]=e});function Z(e,n){const l=e.split(" ");return{vertical:l[0],horizontal:z[`${l[1]}#${n===!0?"rtl":"ltr"}`]}}function Xe(e,n){let{top:l,left:t,right:o,bottom:u,width:i,height:r}=e.getBoundingClientRect();return n!==void 0&&(l-=n[1],t-=n[0],u+=n[1],o+=n[0],i+=n[0],r+=n[1]),{top:l,bottom:u,height:r,left:t,right:o,width:i,middle:t+(o-t)/2,center:l+(u-l)/2}}function Ye(e,n,l){let{top:t,left:o}=e.getBoundingClientRect();return t+=n.top,o+=n.left,l!==void 0&&(t+=l[1],o+=l[0]),{top:t,bottom:t+1,height:1,left:o,right:o+1,width:1,middle:o,center:t}}function Je(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function ee(e,n,l){return{top:e[l.anchorOrigin.vertical]-n[l.selfOrigin.vertical],left:e[l.anchorOrigin.horizontal]-n[l.selfOrigin.horizontal]}}function Ze(e){if(Se.is.ios===!0&&window.visualViewport!==void 0){const r=document.body.style,{offsetLeft:c,offsetTop:s}=window.visualViewport;c!==X&&(r.setProperty("--q-pe-left",c+"px"),X=c),s!==Y&&(r.setProperty("--q-pe-top",s+"px"),Y=s)}const{scrollLeft:n,scrollTop:l}=e.el,t=e.absoluteOffset===void 0?Xe(e.anchorEl,e.cover===!0?[0,0]:e.offset):Ye(e.anchorEl,e.absoluteOffset,e.offset);let o={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(o.minWidth=t.width+"px",e.cover===!0&&(o.minHeight=t.height+"px")),Object.assign(e.el.style,o);const u=Je(e.el);let i=ee(t,u,e);if(e.absoluteOffset===void 0||e.offset===void 0)O(i,t,u,e.anchorOrigin,e.selfOrigin);else{const{top:r,left:c}=i;O(i,t,u,e.anchorOrigin,e.selfOrigin);let s=!1;if(i.top!==r){s=!0;const d=2*e.offset[1];t.center=t.top-=d,t.bottom-=d+2}if(i.left!==c){s=!0;const d=2*e.offset[0];t.middle=t.left-=d,t.right-=d+2}s===!0&&(i=ee(t,u,e),O(i,t,u,e.anchorOrigin,e.selfOrigin))}o={top:i.top+"px",left:i.left+"px"},i.maxHeight!==void 0&&(o.maxHeight=i.maxHeight+"px",t.height>i.maxHeight&&(o.minHeight=o.maxHeight)),i.maxWidth!==void 0&&(o.maxWidth=i.maxWidth+"px",t.width>i.maxWidth&&(o.minWidth=o.maxWidth)),Object.assign(e.el.style,o),e.el.scrollTop!==l&&(e.el.scrollTop=l),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function O(e,n,l,t,o){const u=l.bottom,i=l.right,r=$e(),c=window.innerHeight-r,s=document.body.clientWidth;if(e.top<0||e.top+u>c)if(o.vertical==="center")e.top=n[t.vertical]>c/2?Math.max(0,c-u):0,e.maxHeight=Math.min(u,c);else if(n[t.vertical]>c/2){const d=Math.min(c,t.vertical==="center"?n.center:t.vertical===o.vertical?n.bottom:n.top);e.maxHeight=Math.min(u,d),e.top=Math.max(0,d-u)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===o.vertical?n.top:n.bottom),e.maxHeight=Math.min(u,c-e.top);if(e.left<0||e.left+i>s)if(e.maxWidth=Math.min(i,s),o.horizontal==="middle")e.left=n[t.horizontal]>s/2?Math.max(0,s-i):0;else if(n[t.horizontal]>s/2){const d=Math.min(s,t.horizontal==="middle"?n.middle:t.horizontal===o.horizontal?n.right:n.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===o.horizontal?n.left:n.right),e.maxWidth=Math.min(i,s-e.left)}var st=te({name:"QTooltip",inheritAttrs:!1,props:{...Ae,...qe,..._e,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:J},self:{type:String,default:"top middle",validator:J},offset:{type:Array,default:()=>[14,14],validator:Ue},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...We],setup(e,{slots:n,emit:l,attrs:t}){let o,u;const i=j(),{proxy:{$q:r}}=i,c=T(null),s=T(!1),d=b(()=>Z(e.anchor,r.lang.rtl)),m=b(()=>Z(e.self,r.lang.rtl)),g=b(()=>e.persistent!==!0),{registerTick:a,removeTick:h}=Ve(),{registerTimeout:H}=ke(),{transitionProps:oe,transitionStyle:ie}=Re(e),{localScrollTarget:N,changeScrollEvent:ae,unconfigureScrollTarget:re}=De(e,I),{anchorEl:v,canShow:se,anchorEvents:P}=Be({showing:s,configureAnchorEl:me}),{show:ue,hide:k}=Le({showing:s,canShow:se,handleShow:de,handleHide:fe,hideOnRouteChange:g,processOnMount:!0});Object.assign(P,{delayShow:he,delayHide:ve});const{showPortal:Q,hidePortal:F,renderPortal:ce}=Ie(i,c,pe,"tooltip");if(r.platform.is.mobile===!0){const f={anchorEl:v,innerRef:c,onClickOutside(p){return k(p),p.target.classList.contains("q-dialog__backdrop")&&Ee(p),!0}},L=b(()=>e.modelValue===null&&e.persistent!==!0&&s.value===!0);x(L,p=>{(p===!0?Ke:U)(f)}),S(()=>{U(f)})}function de(f){Q(),a(()=>{u=new MutationObserver(()=>C()),u.observe(c.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),C(),I()}),o===void 0&&(o=x(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,C)),H(()=>{Q(!0),l("show",f)},e.transitionDuration)}function fe(f){h(),F(),G(),H(()=>{F(!0),l("hide",f)},e.transitionDuration)}function G(){u!==void 0&&(u.disconnect(),u=void 0),o!==void 0&&(o(),o=void 0),re(),A(P,"tooltipTemp")}function C(){const f=c.value;v.value===null||!f||Ze({el:f,offset:e.offset,anchorEl:v.value,anchorOrigin:d.value,selfOrigin:m.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function he(f){if(r.platform.is.mobile===!0){D(),document.body.classList.add("non-selectable");const L=v.value,p=["touchmove","touchcancel","touchend","click"].map(_=>[L,_,"delayHide","passiveCapture"]);M(P,"tooltipTemp",p)}H(()=>{ue(f)},e.delay)}function ve(f){r.platform.is.mobile===!0&&(A(P,"tooltipTemp"),D(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),H(()=>{k(f)},e.hideDelay)}function me(){if(e.noParentEvent===!0||v.value===null)return;const f=r.platform.is.mobile===!0?[[v.value,"touchstart","delayShow","passive"]]:[[v.value,"mouseenter","delayShow","passive"],[v.value,"mouseleave","delayHide","passive"]];M(P,"anchor",f)}function I(){if(v.value!==null||e.scrollTarget!==void 0){N.value=Me(v.value,e.scrollTarget);const f=e.noParentEvent===!0?C:k;ae(N.value,f)}}function ge(){return s.value===!0?$("div",{...t,ref:c,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",t.class],style:[t.style,ie.value],role:"tooltip"},ne(n.default)):null}function pe(){return $(He,oe.value,ge)}return S(G),Object.assign(i.proxy,{updatePosition:C}),ce}});export{it as Q,st as a,Ve as b,Re as c,Ie as d,rt as e,Ae as f,at as g,Ue as h,De as i,Be as j,Ke as k,Fe as l,Z as p,U as r,Ze as s,_e as u,J as v};
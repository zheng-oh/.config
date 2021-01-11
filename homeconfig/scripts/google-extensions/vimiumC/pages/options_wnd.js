"use strict";function C(n){var t=document.createElement("script");return t.src=n,t.async=false,t.defer=true,document.head.appendChild(t),t}function P(){null==P.Yo&&(P.Yo=this.id,C("options_checker.js"))}function W(){function n(){var n,t,e,i,o=S.yu;for(n in o)"object"==typeof(e=(t=o[n]).fo)&&e&&(t.fo=R.on(t.p));i=false,(o.exclusionRules.fr.length||o.keyMappings.So)&&(i=true),i&&!u.KeyMappings&&u.r.me("KeyMappings"),u.r.Fe(1)}u.removeEventListener("unload",W),setTimeout(function(){if(u=chrome.extension.getBackgroundPage(),!u)return window.onbeforeunload=null,void window.close();R=u.l,R?(u.addEventListener("unload",W),"loading"===u.document.readyState?u.addEventListener("DOMContentLoaded",function t(){u.removeEventListener("DOMContentLoaded",t,true),setTimeout(n,100)},true):setTimeout(n,67)):u=null},200)}function q(n){var t=document.createEvent("MouseEvents");return t.initMouseEvent("click",true,true,window,1,0,0,0,0,false,false,false,false,0,null),n.dispatchEvent(t)}var I,K,Q;J&&x(J),x(function(n){var t=document.documentElement.classList,e=function(){removeEventListener("DOMContentLoaded",e),R.Xe.d&&t.add("auto-dark"),R.Xe.m&&t.add("less-motion")};addEventListener("DOMContentLoaded",e),n.textContent=R.C.Cn},t(".version")),z.onclick=function(n){if(false===n||S.u()){var t=S.$o;S.$o=[],this.disabled=true,this.firstChild.data=s("o115_3"),A.disabled=false,U(false),window.onbeforeunload=null,0!==t.length&&setTimeout(function(n){R.hn({N:6,d:n.map(function(n){return R.ln[n]})})},100,t)}},I=function(){var n,e,i,o,r,a=false,c=t("#advancedOptionsButton");for(c.onclick=function(n,e){var i,o=this;null==e||"hash"===e&&false===R.on("showAdvancedOptions")?(a=!a,R.sn("showAdvancedOptions",a)):a=R.on("showAdvancedOptions"),i=t("#advancedOptions"),x(function(){i.previousElementSibling.style.display=i.style.display=a?"":"none";var n=a?"Hide":"Show";o.firstChild.data=s(n)||n,o.setAttribute("aria-checked",""+a)},9)},c.onclick(null,true),x(function(){var n,t;for(n in S.Oo=false,S.yu)(t=S.yu[n]).No(t.fo)}),S.yu.exclusionRules.fo.length>0&&x(function(n){n.style.visibility=""},t("#exclusionToolbar")),e=(n=p("[data-check]")).length;0<=--e;)(c=n[e]).addEventListener(c.dataset.check||"input",P);for(document.addEventListener("keyup",function(n){var t=n.target,e=n.keyCode;if(13===e){if(t instanceof HTMLAnchorElement)t.hasAttribute("href")||setTimeout(function(n){q(n),n.blur()},0,t);else if((n.ctrlKey||n.metaKey)&&(t.blur&&t.blur(),U()))return z.onclick()}else{if(32!==e)return;t instanceof HTMLSpanElement&&t.parentElement instanceof HTMLLabelElement&&(n.preventDefault(),q(t.parentElement.control))}}),i=function(){var n,e,i=t("#"+this.dataset.autoResize),o=i.scrollHeight,r=i.scrollWidth,s=r-i.clientWidth;o<=i.clientHeight&&s<=0||(n=Math.max(Math.min(innerWidth,1024)-120,550),i.style.maxWidth=r>n?n+"px":"",i.style.height=i.style.width="",e=i.offsetHeight-i.clientHeight,o+=e=(s=r-i.clientWidth)>0?Math.max(26,e):e+18,s>0&&(i.style.width=i.offsetWidth+s+4+"px"),i.style.height=o+"px")},e=(n=p("[data-auto-resize]")).length;0<=--e;)n[e].onclick=i;for(i=function(n){var t=this.dataset.delay,e=null;"continue"!==t&&n&&n.preventDefault(),"event"===t&&(e=n||null),window.ws=["#"+this.id,e],"complete"!==document.readyState?window.addEventListener("load",function n(t){t.target===document&&(window.removeEventListener("load",n),C("options_ext.js"))}):C("options_ext.js")},e=(n=p("[data-delay]")).length;0<=--e;)n[e].onclick=i;if(N<53)for(i=function(n){n.target===this&&(n.preventDefault(),getSelection().selectAllChildren(this))},e=(n=p(".sel-all")).length;0<=--e;)n[e].onmousedown=i;for((n=p("[data-permission]")).length>0&&(function(n){function t(){var n,t=this.querySelector("[data-permission]");this.onclick=null,t&&(n=t.dataset.permission,t.placeholder=s("lackPermission",[n?': "'+n+'"':""]))}var e,i,o,r,u=chrome.runtime.getManifest();for(e=0,i=u.permissions||[];e<i.length;e++)u[i[e]]=true;for(o=function(e){var i=n[e],o=i.dataset.permission;if("C"===o[0]){if(N>=+o.slice(1))return"continue";o=s("beforeChromium",[o.slice(1)])}else{if(o in u)return"continue";o=s("lackPermission",[o?":\n* "+o:""])}o=s("invalidOption",[o]),x(function(n){n.disabled=true,n instanceof HTMLInputElement&&"checkbox"===n.type?(n.nextElementSibling.tabIndex=-1,(n=n.parentElement).title=o):(n.value="",n.title=o,n.parentElement.onclick=t)},i)},r=n.length;0<=--r;)o(r)})(n),0===u.l.C.Fn.length&&x(function(n){for(var t=n.length;0<=--t;)n[t].remove()},p(".require-shortcuts")),x(function(n){var t,e,i;for(t=n.length;0<=--t;)i=(e=n[t]).dataset.href,i=u.r.V(i,null,-1),e.removeAttribute("data-href"),e.setAttribute("href",i)},p("[data-href]")),c=t("#openExtensionsPage"),N<65&&(c.href="chrome://extensions/configureCommands"),c.onclick=function(n){n.preventDefault(),u.a.ot[19]({u:this.href,r:1,p:true})},x(function(n){n.children[1].title=s("NewTabAdapter")+" - "+s("webstore")},t("#chromeExtVomnibar")),n=p(".ref-text"),o=function(n){a||t("#advancedOptionsButton").onclick(null),n.preventDefault();var e=S.yu[this.getAttribute("for")].Ht.nextElementSibling;N<61?e.scrollIntoViewIfNeeded():e.scrollIntoView({block:"center"}),e.focus(),window.VApi&&VApi.x(e.parentElement.parentElement)},r=function(e){var i=S.yu[n[e].getAttribute("for")],r=i.xo;i.xo=function(){r.call(i),x(function(n){n.textContent=s(i.Ao()>1?"o145_2":"o144")},t("#"+i.Ht.id+"Status"))},n[e].onclick=o,i.Ht.addEventListener("change",i.xo,true)},e=n.length;0<=--e;)r(e)},K=function(){var n,e,i,o;for(n in I(),I=K=null,S.yu)S.yu[n].xo();(e=S.yu.newTabUrl).So._o(e.fo),R.Xe.o||x(function(n){n.textContent="Cmd"},t("#Ctrl")),window.onhashchange(),N>76&&((i=matchMedia("(prefers-color-scheme: dark)")).onchange=function(){R.wn(),o(),setTimeout(o,34)},o=function(){var n,t,e,o=S.yu.autoDarkMode;o.fo&&o.wo&&window.VApi&&VApi.z&&(n=i.matches,e=(t=VApi.y().r)&&t.querySelector(".HUD:not(.UI)"),R.un("d",n,VApi.z),e&&e.classList.toggle("D",n))},setTimeout(o,800))},t("#userDefinedCss").addEventListener("input",O(function(){var n,t,e,i,o,r,s,a=S.yu.userDefinedCss,c=a.Ht.classList.contains("debugging");(!a.wo||c)&&window.VApi&&VApi.z&&(t=(n=a.Ao())===a.fo,e=R.kn(-1,n),i=VApi.y().r,!c&&u&&chrome.tabs.query({currentWindow:true,active:true},function(n){if(n&&n[0]&&n[0].url===location.href){var t=u.a.gn(n[0].id,0);t&&(t.s.f|=36)}}),a.Ht.classList.toggle("debugging",!t),VApi.t({k:i||t?0:1,t:"Debugging CSS\u2026",H:e.ui,f:e.find}),(r=(o=i&&i.querySelector("iframe.Omnibar"))&&o.contentDocument)&&((s=r.querySelector("style.debugged")||r.querySelector("style#custom"))||((s=r.createElement("style")).type="text/css",s.id="custom"),s.parentNode||r.head.appendChild(s),s.classList.add("debugged"),s.textContent=(t?"\n":"\n.transparent { opacity: 1; }\n")+(e.omni&&e.omni+"\n"||"")))},1200,t("#userDefinedCss"),0)),t("#importButton").onclick=function(){var n=t("#importOptions");n.onchange?n.onchange(null):q(t("#settingsFile"))},x(function(n){var e,i=R.C.An;n.textContent=(u.o?["MS Edge"]:/\bChromium\b/.exec(navigator.appVersion)||["Chrome"])[0]+" "+N+s("comma")+s("NS")+(s(i)||i[0].toUpperCase()+i.slice(1)),u.o&&((e=t("#openExtensionsPage")).textContent=e.href="edge://extensions/shortcuts")},t("#browserName")),document.addEventListener("keydown",function(n){var e,i,o,r,s;if(32===n.keyCode)"span"===(s=n.target).localName&&"label"===s.parentElement.localName&&n.preventDefault();else{if(!window.VApi||!VApi.z||"input textarea".includes(document.activeElement.localName))return;"a-f12"===(e=VApi.m({c:" ",e:n,i:n.keyCode},9))?(i=t("#importOptions"),o=i.selectedIndex,r=function(){i.onchange&&i.onchange(),i.selectedIndex=o},t("#recommendedSettings").selected=true,null!=i.onchange?r():setTimeout(r,100)&&i.click()):"?"===e&&t("#showCommands").click()}}),window.onhashchange=function(){var n,e=location.hash;(e=e.slice("!"===e[1]?2:1))&&/^[a-z][a-z\d_-]*$/i.test(e)&&((n=t('[data-hash="'+e+'"]'))?n.onclick&&x(function(){n.onclick(null,"hash")}):(n=t("#"+e))&&x(function(){n.dataset.model&&n.classList.add("highlight");var t=function(t){t&&t.target!==window||(window.onload&&(window.onload=null,window.scrollTo(0,0)),n.scrollIntoViewIfNeeded())};if("complete"===document.readyState)return t();window.scrollTo(0,0),window.onload=t}))},R.zn&&R.zn()?R.zn().then(K):K(),window.onunload=function(){u.removeEventListener("unload",W),u.r.Fe(-1)},u.r.Fe(1),u.addEventListener("unload",W),(Q=u.c.Et.get("?"))&&7===Q.St||(function(){var n=u.c.Et,e="";n.forEach(function(n,t){7===n.St&&(e=e&&e.length<t.length?e:t)}),e&&x(function(n){return n.textContent=e},t("#questionShortcut"))})(),document.addEventListener("click",function n(){var t=window.VApi,e=t&&t.y();e&&e.r&&(document.removeEventListener("click",n,true),e.r.addEventListener("click",function(n){var t,e=n.target;VApi&&e.classList.contains("HelpCommandName")&&(t=e.textContent.slice(1,-1),VApi.p({H:16,s:t}))},true))},true);
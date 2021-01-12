"use strict";var HelpDialog={e:null,o:null,Tt:function(e){var t,a,i,s,d,g,m,p,T,b,v,u,h,k=this;return k.e||(t=l.ce.helpDialog,a=51===f,i=t.indexOf("</style>")+8,s=t.slice(0,i),d=t.slice(i).trim(),a&&(a&&(s=s.replace(/contain:\s?[\w\s]+/g,"contain: none !important")),l.sn("helpDialog","")),d=d.replace(/\$(\w+)/g,function(e,o){return n(o)||("_"===o[0]||"NS"===o?"":o)}),g=r.T({homePage:l.C.ie,version:l.C.Cn,release:r.V("vimium://release"),reviewPage:(o?"https://microsoftedge.microsoft.com/addons/detail/aibcglbfblnogfjhbcmmpobjhnomhcdo":"https://chrome.google.com/webstore/detail/vimium-c-all-by-keyboard/$id/reviews").replace("$id",chrome.runtime.id),webStore:n(o?"edgestore":"webstore"),browserHelp:o?"https://support.microsoft.com/help/4531783/microsoft-edge-keyboard-shortcuts":"https://support.google.com/chrome/answer/157179"}),d=d.replace(/\{\{(\w+)}}/g,function(e,o){return g[o]||e}),k.e=[s,d]),m=new Map,p=c.Et,T=!e,b=e,p.forEach(function(e,o){var t,a=e.Mt;a.endsWith(".activateMode")?a=a.slice(0,-4):a.endsWith("GotoMode")?a=a.slice(0,-8):a.endsWith("Unhover")?a=a.slice(0,-6)+"Leave":a.includes("EditUrl")?a=a.replace("EditUrl","Url"):"quickNext"===a?a="nextTab":"newTab"===a&&(a="createTab"),(t=m.get(a))||m.set(a,t=[]),t.push([o,e])}),v=r.T({className:l.Xe.d,title:n(e?"cmdList":"help"),tip:b?n("tipClickToCopy"):"",lbPad:b?'\n\t\t<tr><td class="HelpTd TdBottom">&#160;</td></tr>':""}),h=(u=k.e)[1].replace(/\{\{(\w+)}}/g,function(e,o){var t=v[o];return null!=t?t:HelpDialog.t(o,m,T,b)}),k.o=null,u[0].replace("{{className}}",l.Xe.d)+h},t:function(e,o,t,a){var i,s,l,c,d,g,m,p,T,b,v,u,h,k,L,H=this,w=H.n,f=n("cmdParams"),_=H.s,M="";for(i=0,s=H.l[e];i<s.length;i++)if(c=o.get(l=s[i]),!t||c){if(d=1===H.c[l],g=-2,m="",(p=_.get(l))||(T=l.replace(".","_"),b=n(T+"_p"),p=n(T).replace("<","&lt;").replace(">","&gt;")+(b?f.replace("*",b):" "),_.set(l,p)),c&&c.length>0){for(m='\n\t\t<span class="HelpKey">',v=0,u=c;v<u.length;v++)(k=(h=u[v])[1].Dt)&&H.N(k),T=k&&k.go||r.R(h[0]),(L=k&&k.To)?M+=w(d,'\n\t\t<span class="HelpKey">'+T+"</span>\n\t",a?L+" ":L,a?l:""):(g>=0&&(m+='</span> <span class="HelpKey">'),m+=T,g+=h[0].length+2);m+="</span>\n\t"}g<=12?M+=w(d,m,p,a?l:""):(M+=w(d,m,"",""),M+=w(d,"",p,a?l:""))}return M},n:function(e,o,t,a){var n=e?'<tr class="HelpAdv">\n\t':"<tr>\n\t";return t?(n+='<td class="HelpTd HelpKeys">',n+=o,n+='</td>\n\t<td class="HelpTd HelpCommandInfo">',n+=t,a&&(n+='<span class="HelpCommandName" role="button">(',n+=a,n+=")</span>\n\t")):(n+='<td class="HelpTd HelpKeys HelpLongKeys" colspan="2">',n+=o),n+"</td>\n</tr>\n"},N:function(e){var o,t,a;null==e.go&&((o=this.o)?o||(o=this.o=new DOMParser):(t=document.createElement("template"),a=document.createElement("td"),t.content.appendChild(a),o=this.o=a),e.go=e.oo?this.bo(e.oo,o):"",e.To=e.no?this.bo(e.no,o):"")},vo:{a:1,abbr:1,acronym:1,address:1,b:1,big:1,blockquote:1,br:1,cite:1,code:1,colgroup:1,dd:1,del:1,dfn:1,div:1,dl:1,dt:1,em:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,i:1,id:1,img:1,ins:1,kbd:1,li:1,ol:1,p:1,pre:1,samp:1,small:1,span:1,strong:1,sub:1,sup:1,table:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1,tt:1,u:1,ul:1,var:1,svg:1,path:1,__proto__:null},bo:function(e,o){var t,a,n,i,r,s,l,c,d,g,m;for(o.innerHTML=e,a=0,n=(t=o.querySelectorAll("*")).length;a<n;a++)if((i=t[a]).localName+""in this.vo||i instanceof HTMLUnknownElement){for(r=[],l=(s=i.attributes).length,c=0;c<l;c++)d=s[c].name.toLowerCase(),/^on|[^\w\-]|href$|^is/i.test(d)&&r.push(s[c]);for(g=0,m=r;g<m.length;g++)i.removeAttributeNode(m[g])}else i.remove();return o.innerHTML},l:{__proto__:null,pageNavigation:["scrollDown","scrollUp","scrollLeft","scrollRight","scrollToTop","scrollToBottom","scrollToLeft","scrollToRight","scrollPageDown","scrollPageUp","scrollPxDown","scrollPxUp","scrollPxLeft","scrollPxRight","scrollFullPageDown","scrollFullPageUp","scrollSelect","reload","reloadTab","reloadGivenTab","zoomIn","zoomOut","toggleViewSource","copyCurrentUrl","copyCurrentTitle","switchFocus","simBackspace","LinkHints.activateModeToCopyLinkUrl","LinkHints.activateModeToCopyLinkText","openCopiedUrlInCurrentTab","openCopiedUrlInNewTab","goUp","goToRoot","focusInput","LinkHints.activate","LinkHints.activateModeToOpenInNewTab","LinkHints.activateModeToOpenInNewForegroundTab","LinkHints.activateModeWithQueue","LinkHints.activateModeToDownloadImage","LinkHints.activateModeToOpenImage","LinkHints.activateModeToDownloadLink","LinkHints.activateModeToOpenIncognito","LinkHints.activateModeToHover","LinkHints.activateModeToLeave","LinkHints.unhoverLast","LinkHints.activateModeToSearchLinkText","LinkHints.activateModeToEdit","LinkHints.activateModeToSelect","LinkHints.click","goPrevious","goNext","nextFrame","mainFrame","parentFrame","enterInsertMode","enterVisualMode","enterVisualLineMode","Marks.activateCreateMode","Marks.activate","Marks.clearLocal","Marks.clearGlobal","openUrl","focusOrLaunch"],vomnibarCommands:["Vomnibar.activate","Vomnibar.activateInNewTab","Vomnibar.activateBookmarks","Vomnibar.activateBookmarksInNewTab","Vomnibar.activateHistory","Vomnibar.activateHistoryInNewTab","Vomnibar.activateTabSelection","Vomnibar.activateUrl","Vomnibar.activateUrlInNewTab","LinkHints.activateModeToOpenVomnibar","toggleVomnibarStyle"],historyNavigation:["goBack","goForward","reopenTab"],findCommands:["enterFindMode","performFind","performBackwardsFind","performAnotherFind","clearFindHistory"],tabManipulation:["nextTab","previousTab","firstTab","lastTab","createTab","duplicateTab","removeTab","removeRightTab","restoreTab","restoreGivenTab","discardTab","moveTabToNextWindow","moveTabToNewWindow","moveTabToIncognito","joinTabs","sortTabs","togglePinTab","toggleMuteTab","visitPreviousTab","closeTabsOnLeft","closeTabsOnRight","closeOtherTabs","moveTabLeft","moveTabRight","enableCSTemp","toggleCS","clearCS","copyWindowInfo","captureTab"],misc:["showHelp","autoCopy","autoOpen","searchAs","searchInAnother","addBookmark","toggleStyle","toggleLinkHintCharacters","toggleSwitchTemp","passNextKey","debugBackground","closeDownloadBar","reset","runKey","sendToExtension","blank"]},c:{__proto__:null,toggleViewSource:1,clearFindHistory:1,scrollToLeft:1,scrollToRight:1,moveTabToNextWindow:1,moveTabToNewWindow:1,moveTabToIncognito:1,reloadGivenTab:1,focusOrLaunch:1,goUp:1,goToRoot:1,focusInput:1,"LinkHints.activateModeWithQueue":1,enableCSTemp:1,toggleCS:1,toggleStyle:1,clearCS:1,"LinkHints.activateModeToDownloadImage":1,reopenTab:1,"LinkHints.activateModeToOpenImage":1,removeRightTab:1,"LinkHints.activateModeToDownloadLink":1,restoreGivenTab:1,runKey:1,sendToExtension:1,discardTab:1,copyWindowInfo:1,"LinkHints.activateModeToOpenIncognito":1,passNextKey:1,goNext:1,goPrevious:1,"Marks.clearLocal":1,"Marks.clearGlobal":1,moveTabLeft:1,moveTabRight:1,closeTabsOnLeft:1,closeTabsOnRight:1,closeOtherTabs:1,scrollPxDown:1,scrollPxUp:1,scrollPxLeft:1,scrollPxRight:1,debugBackground:1,blank:1,reset:1,scrollSelect:1,"LinkHints.activateModeToHover":1,"LinkHints.unhoverLast":1,toggleLinkHintCharacters:1,toggleSwitchTemp:1,"LinkHints.activateModeToLeave":1,"Vomnibar.activateUrl":1,"Vomnibar.activateUrlInNewTab":1,closeDownloadBar:0},s:new Map};o&&HelpDialog.l.tabManipulation.push("toggleReaderMode");
!function(i){function a(a){for(var t,r,l=a[0],o=a[1],d=a[2],p=0,u=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(i[t]=o[t]);for(c&&c(a);u.length;)u.shift()();return n.push.apply(n,d||[]),e()}function e(){for(var i,a=0;a<n.length;a++){for(var e=n[a],t=!0,l=1;l<e.length;l++){var o=e[l];0!==s[o]&&(t=!1)}t&&(n.splice(a--,1),i=r(r.s=e[0]))}return i}var t={},s={0:0},n=[];function r(a){if(t[a])return t[a].exports;var e=t[a]={i:a,l:!1,exports:{}};return i[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=i,r.c=t,r.d=function(i,a,e){r.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:e})},r.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,a){if(1&a&&(i=r(i)),8&a)return i;if(4&a&&"object"==typeof i&&i&&i.__esModule)return i;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:i}),2&a&&"string"!=typeof i)for(var t in i)r.d(e,t,function(a){return i[a]}.bind(null,t));return e},r.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(a,"a",a),a},r.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},r.p="";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var c=o;n.push([74,1]),e()}({72:function(i,a,e){},74:function(i,a,e){"use strict";e.r(a);var t=e(0),s=e.n(t),n=e(6),r=e.n(n),l=e(51),o=e(32),d=e(36),c=e.n(d),p=e(26),u=e.n(p),m=e(106),b=e(16),k=e(111),h=e(112),v=e(109),g=e(113),f=e(115),w=e(110),_=e(116),j=e(114),C=e(42),x=e.n(C),y=e(43),A=e.n(y),L=e(39),R=e.n(L),z=e(37),E=e.n(z),P=e(38),S=e.n(P),V=e(44),B=e.n(V),K=Object(m.a)((function(i){return{grow:{flexGrow:1},menuButton:{marginRight:i.spacing(2)},title:u()({display:"none"},i.breakpoints.up("sm"),{display:"block"}),search:u()({position:"relative",borderRadius:i.shape.borderRadius,backgroundColor:Object(b.b)(i.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.b)(i.palette.common.white,.25)},marginRight:i.spacing(2),marginLeft:0,width:"100%"},i.breakpoints.up("sm"),{marginLeft:i.spacing(3),width:"auto"}),searchIcon:{width:i.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:u()({padding:i.spacing(1,1,1,7),transition:i.transitions.create("width"),width:"100%"},i.breakpoints.up("md"),{width:200}),sectionDesktop:u()({display:"none"},i.breakpoints.up("md"),{display:"flex"}),sectionMobile:u()({display:"flex"},i.breakpoints.up("md"),{display:"none"})}}));function M(){var i=K(),a=s.a.useState(null),e=c()(a,2),t=e[0],n=e[1],r=s.a.useState(null),l=c()(r,2),o=l[0],d=l[1],p=Boolean(t),u=Boolean(o);function m(i){n(i.currentTarget)}function b(){d(null)}function C(){n(null),b()}var y="primary-search-account-menu",L=s.a.createElement(j.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},id:y,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:C},s.a.createElement(_.a,{onClick:C},"Profile"),s.a.createElement(_.a,{onClick:C},"My account")),z=s.a.createElement(j.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:b},s.a.createElement(_.a,null,s.a.createElement(v.a,{"aria-label":"Show 4 new mails",color:"inherit"},s.a.createElement(w.a,{badgeContent:4,color:"secondary"},s.a.createElement(E.a,null))),s.a.createElement("p",null,"Messages")),s.a.createElement(_.a,null,s.a.createElement(v.a,{"aria-label":"Show 11 new notifications",color:"inherit"},s.a.createElement(w.a,{badgeContent:11,color:"secondary"},s.a.createElement(S.a,null))),s.a.createElement("p",null,"Notifications")),s.a.createElement(_.a,{onClick:m},s.a.createElement(v.a,{"aria-label":"Account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},s.a.createElement(R.a,null)),s.a.createElement("p",null,"Profile")));return s.a.createElement("div",{className:i.grow},s.a.createElement(k.a,{position:"static"},s.a.createElement(h.a,null,s.a.createElement(v.a,{edge:"start",className:i.menuButton,color:"inherit","aria-label":"Open drawer"},s.a.createElement(x.a,null)),s.a.createElement(g.a,{className:i.title,variant:"h6",noWrap:!0},"NPP"),s.a.createElement(_.a,{onClick:C},"Saraksts"),s.a.createElement(_.a,{onClick:C},"Dashboard"),s.a.createElement(_.a,{onClick:function(){return window.open("//tools.wmflabs.org/npp-lv","_blank")}},"Pašreizējā versija"),s.a.createElement("div",{className:i.grow}),s.a.createElement("div",{className:i.search},s.a.createElement("div",{className:i.searchIcon},s.a.createElement(A.a,null)),s.a.createElement(f.a,{placeholder:"Search…",classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"Search"}})),s.a.createElement("div",{className:i.sectionDesktop},s.a.createElement(v.a,{"aria-label":"Show 4 new mails",color:"inherit"},s.a.createElement(w.a,{badgeContent:4,color:"secondary"},s.a.createElement(E.a,null))),s.a.createElement(v.a,{"aria-label":"Show 17 new notifications",color:"inherit"},s.a.createElement(w.a,{badgeContent:17,color:"secondary"},s.a.createElement(S.a,null))),s.a.createElement(v.a,{edge:"end","aria-label":"Account of current user","aria-controls":y,"aria-haspopup":"true",onClick:m,color:"inherit"},s.a.createElement(R.a,null))),s.a.createElement("div",{className:i.sectionMobile},s.a.createElement(v.a,{"aria-label":"Show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(i){d(i.currentTarget)},color:"inherit"},s.a.createElement(B.a,null))))),z,L)}var O=e(45),T=e.n(O),N=e(46),F=e.n(N),I=e(47),J=e.n(I),D=e(48),U=e.n(D),W=e(49),G=e.n(W),q=(e(72),function(){return s.a.createElement("div",{dangerouslySetInnerHTML:{__html:'<div class="mw-parser-output"><table class="infobox vcard plainlist" style="width:22em;width:26em;"><tbody><tr><th colspan="2" style="text-align:center;font-size:125%;font-weight:bold;font-weight:normal;"><b>Sandis Ģirģens</b></th></tr><tr><td colspan="2" style="text-align:center">\n<a href="/wiki/Att%C4%93ls:Sandis_%C4%A2ir%C4%A3ens_in_2019.jpg" class="image"><img alt="Sandis Ģirģens in 2019.jpg" src="//upload.wikimedia.org/wikipedia/commons/thumb/7/71/Sandis_%C4%A2ir%C4%A3ens_in_2019.jpg/200px-Sandis_%C4%A2ir%C4%A3ens_in_2019.jpg" decoding="async" width="200" height="300" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/7/71/Sandis_%C4%A2ir%C4%A3ens_in_2019.jpg/300px-Sandis_%C4%A2ir%C4%A3ens_in_2019.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/71/Sandis_%C4%A2ir%C4%A3ens_in_2019.jpg/400px-Sandis_%C4%A2ir%C4%A3ens_in_2019.jpg 2x" data-file-width="500" data-file-height="750" /></a></td></tr><tr><td colspan="2" style="text-align:center">\n</td></tr><tr><td colspan="2" style="text-align:center">\n</td></tr><tr><td colspan="2" style="text-align:center;background-color:lavender; border-top:1px solid #B1B3A5; font-weight:bold; font-size:110%;">\n<a href="/wiki/Latvijas_Republikas_iek%C5%A1lietu_ministrs" class="mw-redirect" title="Latvijas Republikas iekšlietu ministrs">Latvijas Republikas iekšlietu ministrs</a></td></tr><tr style="display:none"><td colspan="2">\n</td></tr><tr><td colspan="2" style="text-align:center">\n<b>Amata sākums</b><br /><a href="/wiki/2019._gads" title="2019. gads">2019</a>.&#160;gada <a href="/wiki/23._janv%C4%81ris" title="23. janvāris">23.&#160;janvārī</a></td></tr><tr><th scope="row" style="text-align:left">Prezidents</th><td class="plainlist">\n<ul><li><a href="/wiki/Raimonds_V%C4%93jonis" title="Raimonds Vējonis">Raimonds Vējonis</a></li>\n<li><a href="/wiki/Egils_Levits" title="Egils Levits">Egils Levits</a></li></ul>\n</td></tr><tr><th scope="row" style="text-align:left">Premjerministrs</th><td class="plainlist">\n<a href="/wiki/Arturs_Kri%C5%A1j%C4%81nis_Kari%C5%86%C5%A1" title="Arturs Krišjānis Kariņš">Arturs Krišjānis Kariņš</a></td></tr><tr><th scope="row" style="text-align:left">Priekštecis</th><td class="plainlist">\n<a href="/wiki/Rihards_Kozlovskis" title="Rihards Kozlovskis">Rihards Kozlovskis</a></td></tr><tr style="display:none"><td colspan="2">\n</td></tr><tr><td colspan="2" style="text-align:center">\n<hr /></td></tr><tr><th scope="row" style="text-align:left">Dzimšanas dati</th><td>\n1980. gada 11.&#160;maijā<span class="noprint"> (39&#160;gadi)</span><br /><span class="flagicon"><a href="/wiki/Att%C4%93ls:Flag_of_the_Soviet_Union.svg" class="image" title="Valsts karogs: Padomju Savienība"><img alt="Valsts karogs: Padomju Savienība" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/22px-Flag_of_the_Soviet_Union.svg.png" decoding="async" width="22" height="11" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/33px-Flag_of_the_Soviet_Union.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/44px-Flag_of_the_Soviet_Union.svg.png 2x" data-file-width="1200" data-file-height="600" /></a></span> <a href="/wiki/Varak%C4%BC%C4%81ni" title="Varakļāni">Varakļāni</a>, <a href="/wiki/Latvijas_PSR" title="Latvijas PSR">Latvijas PSR</a>, <a href="/wiki/Padomju_Savien%C4%ABba" title="Padomju Savienība">PSRS</a> <span style="white-space:nowrap;">(tagad <span class="flagicon"><a href="/wiki/Att%C4%93ls:Flag_of_Latvia.svg" class="image" title="Karogs: Latvija"><img alt="Karogs: Latvija" src="//upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/22px-Flag_of_Latvia.svg.png" decoding="async" width="22" height="11" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/33px-Flag_of_Latvia.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/44px-Flag_of_Latvia.svg.png 2x" data-file-width="1200" data-file-height="600" /></a>&#160;</span><a href="/wiki/Latvija" title="Latvija">Latvija</a>)</span><sup title="Nepieciešama atsauce">[<a href="/wiki/Vikip%C4%93dija:Atsauces" title="Vikipēdija:Atsauces"><i>nepieciešama&#160;atsauce</i></a>]</sup></td></tr><tr><th scope="row" style="text-align:left">Politiskā partija</th><td>\n<a href="/wiki/KPV_LV" title="KPV LV">KPV LV</a></td></tr><tr><th scope="row" style="text-align:left">Profesija</th><td>\nAdvokāts</td></tr><tr><th scope="row" style="text-align:left">Augstskola</th><td>\n<a href="/wiki/BA_%22Tur%C4%ABba%22" class="mw-redirect" title="BA &quot;Turība&quot;">BA "Turība"</a></td></tr></tbody></table>\n<p><b>Sandis Ģirģens</b> (dzimis 1980.&#160;gada 11.&#160;maijā<sup title="Nepieciešama atsauce">[<a href="/wiki/Vikip%C4%93dija:Atsauces" title="Vikipēdija:Atsauces"><i>nepieciešama&#160;atsauce</i></a>]</sup>) ir <a href="/wiki/Latvie%C5%A1i" title="Latvieši">latviešu</a> jurists (zvērināts advokāts) un politiķis, pašreizējais <a href="/wiki/Latvijas_Republikas_iek%C5%A1lietu_ministrs" class="mw-redirect" title="Latvijas Republikas iekšlietu ministrs">Latvijas Republikas iekšlietu ministrs</a>.\n</p><p>Absolvējis <a href="/wiki/BA_Tur%C4%ABba" class="mw-redirect" title="BA Turība">Biznesa augstskolu "Turība"</a>, kur ieguvis bakalaura grādu tiesību zinātnēs. Individuāli praktizējošs zvērināts advokāts. Partijas <a href="/wiki/KPV_LV" title="KPV LV">KPV LV</a> sastāvā kandidēja <a href="/wiki/13._Saeimas_v%C4%93l%C4%93%C5%A1anas" title="13. Saeimas vēlēšanas">13. Saeimas vēlēšanās</a>, bet netika ievēlēts. Viņa brālis <a href="/w/index.php?title=Kaspars_%C4%A2ir%C4%A3ens&amp;action=edit&amp;redlink=1" class="new" title="Kaspars Ģirģens (vēl nav uzrakstīts)">Kaspars Ģirģens</a> bijis Jēkabpils pašvaldības deputāts, ievēlēts 13. Saeimā no šī paša saraksta.<sup id="cite_ref-1" class="reference"><a href="#cite_note-1">&#91;1&#93;</a></sup><sup id="cite_ref-2" class="reference"><a href="#cite_note-2">&#91;2&#93;</a></sup> 2019. gadā kļuvis par <a href="/wiki/Latvijas_Republikas_iek%C5%A1lietu_ministrs" class="mw-redirect" title="Latvijas Republikas iekšlietu ministrs">Latvijas iekšlietu ministru</a> <a href="/wiki/Kari%C5%86a_Ministru_kabinets" title="Kariņa Ministru kabinets">Kariņa Ministru kabinetā</a>.\n</p>\n<h2><span class="mw-headline" id="Atsauces">Atsauces</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Sandis_%C4%A2ir%C4%A3ens&amp;action=edit&amp;section=1" title="Labot sadaļu: Atsauces">labot šo sadaļu</a><span class="mw-editsection-bracket">]</span></span></h2>\n<div class="references-small" style="list-style-type: decimal;">\n<ol class="references">\n<li id="cite_note-1"><span class="mw-cite-backlink"><a href="#cite_ref-1">↑</a></span> <span class="reference-text"><span class="citation web"><a rel="nofollow" class="external text" href="http://www.bauskasdzive.lv/projekts-iesaukums-politika/ar-kaju-atspert-durvis-un-iesolot-saeima-173987">«Ar kāju atspert durvis un iesoļot Saeimā»</a>. <i>Bauskasdzive.lv</i><span class="reference-accessdate">. Skatīts: 2019.&#160;gada 21.&#160;janvārī</span>.</span></span>\n</li>\n<li id="cite_note-2"><span class="mw-cite-backlink"><a href="#cite_ref-2">↑</a></span> <span class="reference-text"><span class="citation web"><a rel="nofollow" class="external text" href="http://www.la.lv/toposais-iekslietu-ministrs-girgens-ko-paveicis-ko-plano">«Topošais iekšlietu ministrs Ģirģens. Ko paveicis, ko plāno?»</a>. <i>LA.lv</i> (latviešu)<span class="reference-accessdate">. Skatīts: 2019.&#160;gada 21.&#160;janvārī</span>.</span></span>\n</li>\n</ol></div>\n<p><br />\n</p>\n<table class="metadata plainlinks stub" role="presentation" style="background:transparent"><tbody><tr><td><a href="/wiki/Att%C4%93ls:Wp-latvia-bio-stub.svg" class="image"><img alt="Aizmetņa ikona" src="//upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wp-latvia-bio-stub.svg/30px-Wp-latvia-bio-stub.svg.png" decoding="async" width="30" height="30" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wp-latvia-bio-stub.svg/45px-Wp-latvia-bio-stub.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wp-latvia-bio-stub.svg/60px-Wp-latvia-bio-stub.svg.png 2x" data-file-width="635" data-file-height="645" /></a></td><td><i>Šī ar <a href="/wiki/Latvija" title="Latvija">Latviju</a> saistītā cilvēka <a href="/wiki/Biogr%C4%81fija" title="Biogrāfija">biogrāfija</a> ir <a href="/wiki/Vikip%C4%93dija:Aizmetnis" title="Vikipēdija:Aizmetnis">nepilnīga</a>. Jūs varat <a href="/wiki/Pal%C4%ABdz%C4%ABba:Redi%C4%A3%C4%93%C5%A1ana,_noform%C4%93%C5%A1ana" title="Palīdzība:Rediģēšana, noformēšana">dot savu ieguldījumu</a> Vikipēdijā, <a class="external text" href="https://lv.wikipedia.org/w/index.php?title=Sandis_%C4%A2ir%C4%A3ens&amp;action=edit">papildinot to</a>.</i><div class="plainlinks hlist navbar mini" style="position: absolute; right: 15px; display: none;"><ul><li class="nv-skatīt"><a href="/wiki/Veidne:Latvijas_cilv%C4%93ks-aizmetnis" title="Veidne:Latvijas cilvēks-aizmetnis"><abbr title="Skatīt šo veidni" style=";">s</abbr></a></li><li class="nv-diskusija"><a href="/w/index.php?title=Veidnes_diskusija:Latvijas_cilv%C4%93ks-aizmetnis&amp;action=edit&amp;redlink=1" class="new" title="Veidnes diskusija:Latvijas cilvēks-aizmetnis (vēl nav uzrakstīts)"><abbr title="Diskusija par šo veidni" style="color:#002bb8;;">d</abbr></a></li><li class="nv-labot"><a class="external text" href="https://lv.wikipedia.org/w/index.php?title=Veidne:Latvijas_cilv%C4%93ks-aizmetnis&amp;action=edit"><abbr title="Labot šo veidni" style=";">l</abbr></a></li></ul></div></td></tr></tbody></table>\n<table cellspacing="0" class="navbox" style="border-spacing:0;"><tbody><tr><td style="padding:2px;"><table cellspacing="0" class="nowraplinks hlist collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit;"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><div class="plainlinks hlist navbar mini"><ul><li class="nv-skatīt"><a href="/wiki/Veidne:Kari%C5%86a_Ministru_kabinets" title="Veidne:Kariņa Ministru kabinets"><abbr title="Skatīt šo veidni" style=";;;background:none transparent;border:none;">s</abbr></a></li><li class="nv-diskusija"><a href="/w/index.php?title=Veidnes_diskusija:Kari%C5%86a_Ministru_kabinets&amp;action=edit&amp;redlink=1" class="new" title="Veidnes diskusija:Kariņa Ministru kabinets (vēl nav uzrakstīts)"><abbr title="Diskusija par šo veidni" style="color:#002bb8;;;;background:none transparent;border:none;">d</abbr></a></li><li class="nv-labot"><a class="external text" href="https://lv.wikipedia.org/w/index.php?title=Veidne:Kari%C5%86a_Ministru_kabinets&amp;action=edit"><abbr title="Labot šo veidni" style=";;;background:none transparent;border:none;">l</abbr></a></li></ul></div><div style="font-size:110%;"><a href="/wiki/Kari%C5%86a_Ministru_kabinets" title="Kariņa Ministru kabinets">Kariņa Ministru kabinets</a> <small>(<a href="/wiki/2019._gads_Latvij%C4%81" title="2019. gads Latvijā">2019</a>—pašlaik)</small></div></th></tr><tr style="height:2px;"><td colspan="2"></td></tr><tr><th scope="row" class="navbox-group"><a href="/wiki/Latvijas_Republikas_Ministru_prezidents" title="Latvijas Republikas Ministru prezidents">Ministru prezidents</a></th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;"><div style="padding:0em 0.25em;"><b><a href="/wiki/Arturs_Kri%C5%A1j%C4%81nis_Kari%C5%86%C5%A1" title="Arturs Krišjānis Kariņš">Arturs Krišjānis Kariņš</a></b></div></td></tr><tr style="height:2px;"><td colspan="2"></td></tr><tr><th scope="row" class="navbox-group"><a href="/wiki/Latvijas_Republikas_Ministru_prezidenta_biedrs" class="mw-redirect" title="Latvijas Republikas Ministru prezidenta biedrs">Ministru prezidenta biedri</a></th><td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;"><div style="padding:0em 0.25em;">\n<ul><li><b><a href="/wiki/Artis_Pabriks" title="Artis Pabriks">Artis Pabriks</a></b></li>\n<li><b><a href="/wiki/J%C4%81nis_Bord%C4%81ns" title="Jānis Bordāns">Jānis Bordāns</a></b></li></ul>\n</div></td></tr><tr style="height:2px;"><td colspan="2"></td></tr><tr><th scope="row" class="navbox-group">Ministri</th><td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;"><div style="padding:0em 0.25em;">\n<ul><li><a href="/wiki/Latvijas_Republikas_aizsardz%C4%ABbas_ministrs" class="mw-redirect" title="Latvijas Republikas aizsardzības ministrs">aizsardzības ministrs</a> <b><a href="/wiki/Artis_Pabriks" title="Artis Pabriks">Artis Pabriks</a></b></li>\n<li><a href="/wiki/Latvijas_Republikas_%C4%81rlietu_ministrs" class="mw-redirect" title="Latvijas Republikas ārlietu ministrs">ārlietu ministrs</a> <b><a href="/wiki/Edgars_Rink%C4%93vi%C4%8Ds" title="Edgars Rinkēvičs">Edgars Rinkēvičs</a></b></li>\n<li><a href="/wiki/Latvijas_Republikas_ekonomikas_ministrs" class="mw-redirect" title="Latvijas Republikas ekonomikas ministrs">ekonomikas ministrs</a> <b><a href="/wiki/Ralfs_Nemiro" title="Ralfs Nemiro">Ralfs Nemiro</a></b></li>\n<li><a href="/wiki/Latvijas_Republikas_finan%C5%A1u_ministrs" class="mw-redirect" title="Latvijas Republikas finanšu ministrs">finanšu ministrs</a> <b><a href="/wiki/J%C4%81nis_Reirs" title="Jānis Reirs">Jānis Reirs</a></b></li>\n<li><a href="/wiki/Latvijas_Republikas_iek%C5%A1lietu_ministrs" class="mw-redirect" title="Latvijas Republikas iekšlietu ministrs">iekšlietu ministrs</a> <b><a class="mw-selflink selflink">Sandis Ģirģens</a></b></li>\n<li><a href="/wiki/Latvijas_Republikas_izgl%C4%ABt%C4%ABbas_un_zin%C4%81tnes_ministrs" class="mw-redirect" title="Latvijas Republikas izglītības un zinātnes ministrs">izglītības un zinātnes ministrs</a> <b><a href="/wiki/Ilga_%C5%A0uplinska" title="Ilga Šuplinska">Ilga Šuplinska</a></b></li>\n<li><a href="/wiki/Latvijas_Republikas_kult%C5%ABras_ministrs" class="mw-redirect" title="Latvijas Republikas kultūras ministrs">kultūras ministrs</a> <b><a href="/wiki/Nauris_Puntulis" title="Nauris Puntulis">Nauris Puntulis</a></b></li>\n<li><a href="/wiki/Latvijas_Republikas_labkl%C4%81j%C4%ABbas_ministrs" class="mw-redirect" title="Latvijas Republikas labklājības ministrs">labklājības ministre</a> <b><a href="/wiki/Ramona_Petravi%C4%8Da" title="Ramona Petraviča">Ramona Petraviča</a></b></li>\n<li><a href="/wiki/Latvijas_Republikas_satiksmes_ministrs" class="mw-redirect" title="Latvijas Republikas satiksmes ministrs">satiksmes ministrs</a> <b><a href="/wiki/T%C4%81lis_Linkaits" title="Tālis Linkaits">Tālis Linkaits</a></b></li>\n<li><a href="/wiki/Latvijas_Republikas_tieslietu_ministrs" class="mw-redirect" title="Latvijas Republikas tieslietu ministrs">tieslietu ministrs</a> <b><a href="/wiki/J%C4%81nis_Bord%C4%81ns" title="Jānis Bordāns">Jānis Bordāns</a></b></li>\n<li><a href="/wiki/Latvijas_Republikas_vesel%C4%ABbas_ministrs" class="mw-redirect" title="Latvijas Republikas veselības ministrs">veselības ministre</a> <b><a href="/wiki/Ilze_Vi%C5%86%C4%B7ele" title="Ilze Viņķele">Ilze Viņķele</a></b></li>\n<li><a href="/wiki/Latvijas_Republikas_vides_aizsardz%C4%ABbas_un_re%C4%A3ion%C4%81l%C4%81s_att%C4%ABst%C4%ABbas_ministrs" class="mw-redirect" title="Latvijas Republikas vides aizsardzības un reģionālās attīstības ministrs">vides aizsardzības un reģionālās attīstības ministrs</a> <b><a href="/wiki/Juris_P%C5%ABce" title="Juris Pūce">Juris Pūce</a></b></li>\n<li><a href="/wiki/Latvijas_Republikas_zemkop%C4%ABbas_ministrs" class="mw-redirect" title="Latvijas Republikas zemkopības ministrs">zemkopības ministrs</a> <b><a href="/wiki/Kaspars_Gerhards" title="Kaspars Gerhards">Kaspars Gerhards</a></b></li></ul>\n</div></td></tr><tr style="height:2px;"><td colspan="2"></td></tr><tr><th scope="row" class="navbox-group">Zaudējuši amatu</th><td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px;"><div style="padding:0em 0.25em;">\n<ul><li><a href="/wiki/Latvijas_Republikas_kult%C5%ABras_ministrs" class="mw-redirect" title="Latvijas Republikas kultūras ministrs">kultūras ministre</a> <b><a href="/wiki/Dace_Melb%C4%81rde" title="Dace Melbārde">Dace Melbārde</a></b></li></ul>\n</div></td></tr></tbody></table></td></tr></tbody></table>\n\x3c!-- \nNewPP limit report\nParsed by mw1317\nCached time: 20191207101225\nCache expiry: 3600\nDynamic content: true\nComplications: []\nCPU time usage: 0.536 seconds\nReal time usage: 0.637 seconds\nPreprocessor visited node count: 3847/1000000\nPreprocessor generated node count: 0/1500000\nPost‐expand include size: 32394/2097152 bytes\nTemplate argument size: 1652/2097152 bytes\nHighest expansion depth: 28/40\nExpensive parser function count: 0/500\nUnstrip recursion depth: 0/20\nUnstrip post‐expand size: 1153/5000000 bytes\nNumber of Wikibase entities loaded: 0/400\nLua time usage: 0.317/10.000 seconds\nLua memory usage: 2.82 MB/50 MB\n--\x3e\n\x3c!--\nTransclusion expansion time report (%,ms,calls,template)\n179.35% 1068.535     41 Veidne:Infobox\n100.00%  595.775      1 -total\n 87.92%  523.822      1 Veidne:Valsts_amatpersonas_infokaste\n 67.00%  399.146     20 Veidne:Valsts_amatpersonas_infokaste/amats\n 12.09%   72.024      3 Veidne:Br_separated_entries\n  8.45%   50.323     43 Veidne:Ifempty\n  5.97%   35.578      1 Veidne:Atsauces\n  5.07%   30.187      2 Veidne:Tīmekļa_atsauce\n  4.07%   24.239      4 Veidne:Dat\n  3.57%   21.273      1 Veidne:Vieta\n--\x3e\n\n\x3c!-- Saved in parser cache with key lvwiki:pcache:idhash:417731-0!canonical!tmh-videojs and timestamp 20191207101224 and revision id 3107297\n --\x3e\n</div>'}})}),H=function(i){function a(i){var e;return T()(this,a),(e=J()(this,U()(a).call(this,i))).state={title:"",id:null},e}return G()(a,i),F()(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,"Title"),s.a.createElement(q,null))}}]),a}(s.a.Component),Z=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(M,null),s.a.createElement(H,null))},Q=e(11),X=0,Y=Object(o.b)({name:"article",initialState:[],reducers:{addTodo:{reducer:function(i,a){var e=a.payload,t=e.id,s=e.text;i.push({id:t,text:s,completed:!1})},prepare:function(i){return{payload:{text:i,id:X++}}}}}}),$=(Y.actions.addTodo,Y.reducer),ii=Object(Q.combineReducers)({article:$}),ai=Object(o.a)({reducer:ii});r.a.render(s.a.createElement(l.a,{store:ai},s.a.createElement(Z,null)),document.getElementById("app"))}});
//# sourceMappingURL=main.9147faffc403793fec5c.js.map
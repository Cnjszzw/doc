(()=>{var Jo={1804:()=>{+function(E){"use strict";var m=".dropdown-backdrop",r='[data-toggle="dropdown"]',u=function(f){E(f).on("click.bs.dropdown",this.toggle)};u.VERSION="3.4.1";function a(f){var s=f.attr("data-target");s||(s=f.attr("href"),s=s&&/#[A-Za-z]/.test(s)&&s.replace(/.*(?=#[^\s]*$)/,""));var p=s!=="#"?E(document).find(s):null;return p&&p.length?p:f.parent()}function n(f){f&&f.which===3||(E(m).remove(),E(r).each(function(){var s=E(this),p=a(s),S={relatedTarget:this};p.hasClass("open")&&(f&&f.type=="click"&&/input|textarea/i.test(f.target.tagName)&&E.contains(p[0],f.target)||(p.trigger(f=E.Event("hide.bs.dropdown",S)),!f.isDefaultPrevented()&&(s.attr("aria-expanded","false"),p.removeClass("open").trigger(E.Event("hidden.bs.dropdown",S)))))}))}u.prototype.toggle=function(f){var s=E(this);if(!s.is(".disabled, :disabled")){var p=a(s),S=p.hasClass("open");if(n(),!S){"ontouchstart"in document.documentElement&&!p.closest(".navbar-nav").length&&E(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(E(this)).on("click",n);var i={relatedTarget:this};if(p.trigger(f=E.Event("show.bs.dropdown",i)),f.isDefaultPrevented())return;s.trigger("focus").attr("aria-expanded","true"),p.toggleClass("open").trigger(E.Event("shown.bs.dropdown",i))}return!1}},u.prototype.keydown=function(f){if(!(!/(38|40|27|32)/.test(f.which)||/input|textarea/i.test(f.target.tagName))){var s=E(this);if(f.preventDefault(),f.stopPropagation(),!s.is(".disabled, :disabled")){var p=a(s),S=p.hasClass("open");if(!S&&f.which!=27||S&&f.which==27)return f.which==27&&p.find(r).trigger("focus"),s.trigger("click");var i=" li:not(.disabled):visible a",g=p.find(".dropdown-menu"+i);if(g.length){var d=g.index(f.target);f.which==38&&d>0&&d--,f.which==40&&d<g.length-1&&d++,~d||(d=0),g.eq(d).trigger("focus")}}}};function l(f){return this.each(function(){var s=E(this),p=s.data("bs.dropdown");p||s.data("bs.dropdown",p=new u(this)),typeof f=="string"&&p[f].call(s)})}var h=E.fn.dropdown;E.fn.dropdown=l,E.fn.dropdown.Constructor=u,E.fn.dropdown.noConflict=function(){return E.fn.dropdown=h,this},E(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(f){f.stopPropagation()}).on("click.bs.dropdown.data-api",r,u.prototype.toggle).on("keydown.bs.dropdown.data-api",r,u.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",u.prototype.keydown)}(jQuery)},5516:()=>{+function(E){"use strict";var m=function(a,n){this.init("popover",a,n)};if(!E.fn.tooltip)throw new Error("Popover requires tooltip.js");m.VERSION="3.4.1",m.DEFAULTS=E.extend({},E.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),m.prototype=E.extend({},E.fn.tooltip.Constructor.prototype),m.prototype.constructor=m,m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.setContent=function(){var a=this.tip(),n=this.getTitle(),l=this.getContent();if(this.options.html){var h=typeof l;this.options.sanitize&&(n=this.sanitizeHtml(n),h==="string"&&(l=this.sanitizeHtml(l))),a.find(".popover-title").html(n),a.find(".popover-content").children().detach().end()[h==="string"?"html":"append"](l)}else a.find(".popover-title").text(n),a.find(".popover-content").children().detach().end().text(l);a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},m.prototype.hasContent=function(){return this.getTitle()||this.getContent()},m.prototype.getContent=function(){var a=this.$element,n=this.options;return a.attr("data-content")||(typeof n.content=="function"?n.content.call(a[0]):n.content)},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};function r(a){return this.each(function(){var n=E(this),l=n.data("bs.popover"),h=typeof a=="object"&&a;!l&&/destroy|hide/.test(a)||(l||n.data("bs.popover",l=new m(this,h)),typeof a=="string"&&l[a]())})}var u=E.fn.popover;E.fn.popover=r,E.fn.popover.Constructor=m,E.fn.popover.noConflict=function(){return E.fn.popover=u,this}}(jQuery)},9644:()=>{+function(E){"use strict";function m(a,n){this.$body=E(document.body),this.$scrollElement=E(a).is(document.body)?E(window):E(a),this.options=E.extend({},m.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",E.proxy(this.process,this)),this.refresh(),this.process()}m.VERSION="3.4.1",m.DEFAULTS={offset:10},m.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},m.prototype.refresh=function(){var a=this,n="offset",l=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),E.isWindow(this.$scrollElement[0])||(n="position",l=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var h=E(this),f=h.data("target")||h.attr("href"),s=/^#./.test(f)&&E(f);return s&&s.length&&s.is(":visible")&&[[s[n]().top+l,f]]||null}).sort(function(h,f){return h[0]-f[0]}).each(function(){a.offsets.push(this[0]),a.targets.push(this[1])})},m.prototype.process=function(){var a=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),l=this.options.offset+n-this.$scrollElement.height(),h=this.offsets,f=this.targets,s=this.activeTarget,p;if(this.scrollHeight!=n&&this.refresh(),a>=l)return s!=(p=f[f.length-1])&&this.activate(p);if(s&&a<h[0])return this.activeTarget=null,this.clear();for(p=h.length;p--;)s!=f[p]&&a>=h[p]&&(h[p+1]===void 0||a<h[p+1])&&this.activate(f[p])},m.prototype.activate=function(a){this.activeTarget=a,this.clear();var n=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',l=E(n).parents("li").addClass("active");l.parent(".dropdown-menu").length&&(l=l.closest("li.dropdown").addClass("active")),l.trigger("activate.bs.scrollspy")},m.prototype.clear=function(){E(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function r(a){return this.each(function(){var n=E(this),l=n.data("bs.scrollspy"),h=typeof a=="object"&&a;l||n.data("bs.scrollspy",l=new m(this,h)),typeof a=="string"&&l[a]()})}var u=E.fn.scrollspy;E.fn.scrollspy=r,E.fn.scrollspy.Constructor=m,E.fn.scrollspy.noConflict=function(){return E.fn.scrollspy=u,this},E(window).on("load.bs.scrollspy.data-api",function(){E('[data-spy="scroll"]').each(function(){var a=E(this);r.call(a,a.data())})})}(jQuery)},158:()=>{+function(E){"use strict";var m=function(n){this.element=E(n)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.prototype.show=function(){var n=this.element,l=n.closest("ul:not(.dropdown-menu)"),h=n.data("target");if(h||(h=n.attr("href"),h=h&&h.replace(/.*(?=#[^\s]*$)/,"")),!n.parent("li").hasClass("active")){var f=l.find(".active:last a"),s=E.Event("hide.bs.tab",{relatedTarget:n[0]}),p=E.Event("show.bs.tab",{relatedTarget:f[0]});if(f.trigger(s),n.trigger(p),!(p.isDefaultPrevented()||s.isDefaultPrevented())){var S=E(document).find(h);this.activate(n.closest("li"),l),this.activate(S,S.parent(),function(){f.trigger({type:"hidden.bs.tab",relatedTarget:n[0]}),n.trigger({type:"shown.bs.tab",relatedTarget:f[0]})})}}},m.prototype.activate=function(n,l,h){var f=l.find("> .active"),s=h&&E.support.transition&&(f.length&&f.hasClass("fade")||!!l.find("> .fade").length);function p(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),s?(n[0].offsetWidth,n.addClass("in")):n.removeClass("fade"),n.parent(".dropdown-menu").length&&n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),h&&h()}f.length&&s?f.one("bsTransitionEnd",p).emulateTransitionEnd(m.TRANSITION_DURATION):p(),f.removeClass("in")};function r(n){return this.each(function(){var l=E(this),h=l.data("bs.tab");h||l.data("bs.tab",h=new m(this)),typeof n=="string"&&h[n]()})}var u=E.fn.tab;E.fn.tab=r,E.fn.tab.Constructor=m,E.fn.tab.noConflict=function(){return E.fn.tab=u,this};var a=function(n){n.preventDefault(),r.call(E(this),"show")};E(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',a).on("click.bs.tab.data-api",'[data-toggle="pill"]',a)}(jQuery)},4550:()=>{+function(E){"use strict";var m=["sanitize","whiteList","sanitizeFn"],r=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],u=/^aria-[\w-]*$/i,a={"*":["class","dir","id","lang","role",u],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},n=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function h(i,g){var d=i.nodeName.toLowerCase();if(E.inArray(d,g)!==-1)return E.inArray(d,r)!==-1?Boolean(i.nodeValue.match(n)||i.nodeValue.match(l)):!0;for(var c=E(g).filter(function(I,C){return C instanceof RegExp}),y=0,v=c.length;y<v;y++)if(d.match(c[y]))return!0;return!1}function f(i,g,d){if(i.length===0)return i;if(d&&typeof d=="function")return d(i);if(!document.implementation||!document.implementation.createHTMLDocument)return i;var c=document.implementation.createHTMLDocument("sanitization");c.body.innerHTML=i;for(var y=E.map(g,function(P,T){return T}),v=E(c.body).find("*"),I=0,C=v.length;I<C;I++){var D=v[I],R=D.nodeName.toLowerCase();if(E.inArray(R,y)===-1){D.parentNode.removeChild(D);continue}for(var x=E.map(D.attributes,function(P){return P}),_=[].concat(g["*"]||[],g[R]||[]),B=0,w=x.length;B<w;B++)h(x[B],_)||D.removeAttribute(x[B].nodeName)}return c.body.innerHTML}var s=function(i,g){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",i,g)};s.VERSION="3.4.1",s.TRANSITION_DURATION=150,s.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:a},s.prototype.init=function(i,g,d){if(this.enabled=!0,this.type=i,this.$element=E(g),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&E(document).find(E.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var c=this.options.trigger.split(" "),y=c.length;y--;){var v=c[y];if(v=="click")this.$element.on("click."+this.type,this.options.selector,E.proxy(this.toggle,this));else if(v!="manual"){var I=v=="hover"?"mouseenter":"focusin",C=v=="hover"?"mouseleave":"focusout";this.$element.on(I+"."+this.type,this.options.selector,E.proxy(this.enter,this)),this.$element.on(C+"."+this.type,this.options.selector,E.proxy(this.leave,this))}}this.options.selector?this._options=E.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},s.prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.getOptions=function(i){var g=this.$element.data();for(var d in g)g.hasOwnProperty(d)&&E.inArray(d,m)!==-1&&delete g[d];return i=E.extend({},this.getDefaults(),g,i),i.delay&&typeof i.delay=="number"&&(i.delay={show:i.delay,hide:i.delay}),i.sanitize&&(i.template=f(i.template,i.whiteList,i.sanitizeFn)),i},s.prototype.getDelegateOptions=function(){var i={},g=this.getDefaults();return this._options&&E.each(this._options,function(d,c){g[d]!=c&&(i[d]=c)}),i},s.prototype.enter=function(i){var g=i instanceof this.constructor?i:E(i.currentTarget).data("bs."+this.type);if(g||(g=new this.constructor(i.currentTarget,this.getDelegateOptions()),E(i.currentTarget).data("bs."+this.type,g)),i instanceof E.Event&&(g.inState[i.type=="focusin"?"focus":"hover"]=!0),g.tip().hasClass("in")||g.hoverState=="in"){g.hoverState="in";return}if(clearTimeout(g.timeout),g.hoverState="in",!g.options.delay||!g.options.delay.show)return g.show();g.timeout=setTimeout(function(){g.hoverState=="in"&&g.show()},g.options.delay.show)},s.prototype.isInStateTrue=function(){for(var i in this.inState)if(this.inState[i])return!0;return!1},s.prototype.leave=function(i){var g=i instanceof this.constructor?i:E(i.currentTarget).data("bs."+this.type);if(g||(g=new this.constructor(i.currentTarget,this.getDelegateOptions()),E(i.currentTarget).data("bs."+this.type,g)),i instanceof E.Event&&(g.inState[i.type=="focusout"?"focus":"hover"]=!1),!g.isInStateTrue()){if(clearTimeout(g.timeout),g.hoverState="out",!g.options.delay||!g.options.delay.hide)return g.hide();g.timeout=setTimeout(function(){g.hoverState=="out"&&g.hide()},g.options.delay.hide)}},s.prototype.show=function(){var i=E.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(i);var g=E.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(i.isDefaultPrevented()||!g)return;var d=this,c=this.tip(),y=this.getUID(this.type);this.setContent(),c.attr("id",y),this.$element.attr("aria-describedby",y),this.options.animation&&c.addClass("fade");var v=typeof this.options.placement=="function"?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,I=/\s?auto?\s?/i,C=I.test(v);C&&(v=v.replace(I,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(v).data("bs."+this.type,this),this.options.container?c.appendTo(E(document).find(this.options.container)):c.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var D=this.getPosition(),R=c[0].offsetWidth,x=c[0].offsetHeight;if(C){var _=v,B=this.getPosition(this.$viewport);v=v=="bottom"&&D.bottom+x>B.bottom?"top":v=="top"&&D.top-x<B.top?"bottom":v=="right"&&D.right+R>B.width?"left":v=="left"&&D.left-R<B.left?"right":v,c.removeClass(_).addClass(v)}var w=this.getCalculatedOffset(v,D,R,x);this.applyPlacement(w,v);var P=function(){var T=d.hoverState;d.$element.trigger("shown.bs."+d.type),d.hoverState=null,T=="out"&&d.leave(d)};E.support.transition&&this.$tip.hasClass("fade")?c.one("bsTransitionEnd",P).emulateTransitionEnd(s.TRANSITION_DURATION):P()}},s.prototype.applyPlacement=function(i,g){var d=this.tip(),c=d[0].offsetWidth,y=d[0].offsetHeight,v=parseInt(d.css("margin-top"),10),I=parseInt(d.css("margin-left"),10);isNaN(v)&&(v=0),isNaN(I)&&(I=0),i.top+=v,i.left+=I,E.offset.setOffset(d[0],E.extend({using:function(w){d.css({top:Math.round(w.top),left:Math.round(w.left)})}},i),0),d.addClass("in");var C=d[0].offsetWidth,D=d[0].offsetHeight;g=="top"&&D!=y&&(i.top=i.top+y-D);var R=this.getViewportAdjustedDelta(g,i,C,D);R.left?i.left+=R.left:i.top+=R.top;var x=/top|bottom/.test(g),_=x?R.left*2-c+C:R.top*2-y+D,B=x?"offsetWidth":"offsetHeight";d.offset(i),this.replaceArrow(_,d[0][B],x)},s.prototype.replaceArrow=function(i,g,d){this.arrow().css(d?"left":"top",50*(1-i/g)+"%").css(d?"top":"left","")},s.prototype.setContent=function(){var i=this.tip(),g=this.getTitle();this.options.html?(this.options.sanitize&&(g=f(g,this.options.whiteList,this.options.sanitizeFn)),i.find(".tooltip-inner").html(g)):i.find(".tooltip-inner").text(g),i.removeClass("fade in top bottom left right")},s.prototype.hide=function(i){var g=this,d=E(this.$tip),c=E.Event("hide.bs."+this.type);function y(){g.hoverState!="in"&&d.detach(),g.$element&&g.$element.removeAttr("aria-describedby").trigger("hidden.bs."+g.type),i&&i()}if(this.$element.trigger(c),!c.isDefaultPrevented())return d.removeClass("in"),E.support.transition&&d.hasClass("fade")?d.one("bsTransitionEnd",y).emulateTransitionEnd(s.TRANSITION_DURATION):y(),this.hoverState=null,this},s.prototype.fixTitle=function(){var i=this.$element;(i.attr("title")||typeof i.attr("data-original-title")!="string")&&i.attr("data-original-title",i.attr("title")||"").attr("title","")},s.prototype.hasContent=function(){return this.getTitle()},s.prototype.getPosition=function(i){i=i||this.$element;var g=i[0],d=g.tagName=="BODY",c=g.getBoundingClientRect();c.width==null&&(c=E.extend({},c,{width:c.right-c.left,height:c.bottom-c.top}));var y=window.SVGElement&&g instanceof window.SVGElement,v=d?{top:0,left:0}:y?null:i.offset(),I={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:i.scrollTop()},C=d?{width:E(window).width(),height:E(window).height()}:null;return E.extend({},c,I,C,v)},s.prototype.getCalculatedOffset=function(i,g,d,c){return i=="bottom"?{top:g.top+g.height,left:g.left+g.width/2-d/2}:i=="top"?{top:g.top-c,left:g.left+g.width/2-d/2}:i=="left"?{top:g.top+g.height/2-c/2,left:g.left-d}:{top:g.top+g.height/2-c/2,left:g.left+g.width}},s.prototype.getViewportAdjustedDelta=function(i,g,d,c){var y={top:0,left:0};if(!this.$viewport)return y;var v=this.options.viewport&&this.options.viewport.padding||0,I=this.getPosition(this.$viewport);if(/right|left/.test(i)){var C=g.top-v-I.scroll,D=g.top+v-I.scroll+c;C<I.top?y.top=I.top-C:D>I.top+I.height&&(y.top=I.top+I.height-D)}else{var R=g.left-v,x=g.left+v+d;R<I.left?y.left=I.left-R:x>I.right&&(y.left=I.left+I.width-x)}return y},s.prototype.getTitle=function(){var i,g=this.$element,d=this.options;return i=g.attr("data-original-title")||(typeof d.title=="function"?d.title.call(g[0]):d.title),i},s.prototype.getUID=function(i){do i+=~~(Math.random()*1e6);while(document.getElementById(i));return i},s.prototype.tip=function(){if(!this.$tip&&(this.$tip=E(this.options.template),this.$tip.length!=1))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},s.prototype.enable=function(){this.enabled=!0},s.prototype.disable=function(){this.enabled=!1},s.prototype.toggleEnabled=function(){this.enabled=!this.enabled},s.prototype.toggle=function(i){var g=this;i&&(g=E(i.currentTarget).data("bs."+this.type),g||(g=new this.constructor(i.currentTarget,this.getDelegateOptions()),E(i.currentTarget).data("bs."+this.type,g))),i?(g.inState.click=!g.inState.click,g.isInStateTrue()?g.enter(g):g.leave(g)):g.tip().hasClass("in")?g.leave(g):g.enter(g)},s.prototype.destroy=function(){var i=this;clearTimeout(this.timeout),this.hide(function(){i.$element.off("."+i.type).removeData("bs."+i.type),i.$tip&&i.$tip.detach(),i.$tip=null,i.$arrow=null,i.$viewport=null,i.$element=null})},s.prototype.sanitizeHtml=function(i){return f(i,this.options.whiteList,this.options.sanitizeFn)};function p(i){return this.each(function(){var g=E(this),d=g.data("bs.tooltip"),c=typeof i=="object"&&i;!d&&/destroy|hide/.test(i)||(d||g.data("bs.tooltip",d=new s(this,c)),typeof i=="string"&&d[i]())})}var S=E.fn.tooltip;E.fn.tooltip=p,E.fn.tooltip.Constructor=s,E.fn.tooltip.noConflict=function(){return E.fn.tooltip=S,this}}(jQuery)},7393:E=>{var m=function(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=32},r=-1,u=1,a=0;m.Diff=function(n,l){return[n,l]},m.prototype.diff_main=function(n,l,h,f){typeof f=="undefined"&&(this.Diff_Timeout<=0?f=Number.MAX_VALUE:f=new Date().getTime()+this.Diff_Timeout*1e3);var s=f;if(n==null||l==null)throw new Error("Null input. (diff_main)");if(n==l)return n?[new m.Diff(a,n)]:[];typeof h=="undefined"&&(h=!0);var p=h,S=this.diff_commonPrefix(n,l),i=n.substring(0,S);n=n.substring(S),l=l.substring(S),S=this.diff_commonSuffix(n,l);var g=n.substring(n.length-S);n=n.substring(0,n.length-S),l=l.substring(0,l.length-S);var d=this.diff_compute_(n,l,p,s);return i&&d.unshift(new m.Diff(a,i)),g&&d.push(new m.Diff(a,g)),this.diff_cleanupMerge(d),d},m.prototype.diff_compute_=function(n,l,h,f){var s;if(!n)return[new m.Diff(u,l)];if(!l)return[new m.Diff(r,n)];var p=n.length>l.length?n:l,S=n.length>l.length?l:n,i=p.indexOf(S);if(i!=-1)return s=[new m.Diff(u,p.substring(0,i)),new m.Diff(a,S),new m.Diff(u,p.substring(i+S.length))],n.length>l.length&&(s[0][0]=s[2][0]=r),s;if(S.length==1)return[new m.Diff(r,n),new m.Diff(u,l)];var g=this.diff_halfMatch_(n,l);if(g){var d=g[0],c=g[1],y=g[2],v=g[3],I=g[4],C=this.diff_main(d,y,h,f),D=this.diff_main(c,v,h,f);return C.concat([new m.Diff(a,I)],D)}return h&&n.length>100&&l.length>100?this.diff_lineMode_(n,l,f):this.diff_bisect_(n,l,f)},m.prototype.diff_lineMode_=function(n,l,h){var f=this.diff_linesToChars_(n,l);n=f.chars1,l=f.chars2;var s=f.lineArray,p=this.diff_main(n,l,!1,h);this.diff_charsToLines_(p,s),this.diff_cleanupSemantic(p),p.push(new m.Diff(a,""));for(var S=0,i=0,g=0,d="",c="";S<p.length;){switch(p[S][0]){case u:g++,c+=p[S][1];break;case r:i++,d+=p[S][1];break;case a:if(i>=1&&g>=1){p.splice(S-i-g,i+g),S=S-i-g;for(var y=this.diff_main(d,c,!1,h),v=y.length-1;v>=0;v--)p.splice(S,0,y[v]);S=S+y.length}g=0,i=0,d="",c="";break}S++}return p.pop(),p},m.prototype.diff_bisect_=function(n,l,h){for(var f=n.length,s=l.length,p=Math.ceil((f+s)/2),S=p,i=2*p,g=new Array(i),d=new Array(i),c=0;c<i;c++)g[c]=-1,d[c]=-1;g[S+1]=0,d[S+1]=0;for(var y=f-s,v=y%2!=0,I=0,C=0,D=0,R=0,x=0;x<p&&!(new Date().getTime()>h);x++){for(var _=-x+I;_<=x-C;_+=2){var B=S+_,w;_==-x||_!=x&&g[B-1]<g[B+1]?w=g[B+1]:w=g[B-1]+1;for(var P=w-_;w<f&&P<s&&n.charAt(w)==l.charAt(P);)w++,P++;if(g[B]=w,w>f)C+=2;else if(P>s)I+=2;else if(v){var T=S+y-_;if(T>=0&&T<i&&d[T]!=-1){var b=f-d[T];if(w>=b)return this.diff_bisectSplit_(n,l,w,P,h)}}}for(var F=-x+D;F<=x-R;F+=2){var T=S+F,b;F==-x||F!=x&&d[T-1]<d[T+1]?b=d[T+1]:b=d[T-1]+1;for(var j=b-F;b<f&&j<s&&n.charAt(f-b-1)==l.charAt(s-j-1);)b++,j++;if(d[T]=b,b>f)R+=2;else if(j>s)D+=2;else if(!v){var B=S+y-F;if(B>=0&&B<i&&g[B]!=-1){var w=g[B],P=S+w-B;if(b=f-b,w>=b)return this.diff_bisectSplit_(n,l,w,P,h)}}}}return[new m.Diff(r,n),new m.Diff(u,l)]},m.prototype.diff_bisectSplit_=function(n,l,h,f,s){var p=n.substring(0,h),S=l.substring(0,f),i=n.substring(h),g=l.substring(f),d=this.diff_main(p,S,!1,s),c=this.diff_main(i,g,!1,s);return d.concat(c)},m.prototype.diff_linesToChars_=function(n,l){var h=[],f={};h[0]="";function s(g){for(var d="",c=0,y=-1,v=h.length;y<g.length-1;){y=g.indexOf(`
`,c),y==-1&&(y=g.length-1);var I=g.substring(c,y+1);(f.hasOwnProperty?f.hasOwnProperty(I):f[I]!==void 0)?d+=String.fromCharCode(f[I]):(v==p&&(I=g.substring(c),y=g.length),d+=String.fromCharCode(v),f[I]=v,h[v++]=I),c=y+1}return d}var p=4e4,S=s(n);p=65535;var i=s(l);return{chars1:S,chars2:i,lineArray:h}},m.prototype.diff_charsToLines_=function(n,l){for(var h=0;h<n.length;h++){for(var f=n[h][1],s=[],p=0;p<f.length;p++)s[p]=l[f.charCodeAt(p)];n[h][1]=s.join("")}},m.prototype.diff_commonPrefix=function(n,l){if(!n||!l||n.charAt(0)!=l.charAt(0))return 0;for(var h=0,f=Math.min(n.length,l.length),s=f,p=0;h<s;)n.substring(p,s)==l.substring(p,s)?(h=s,p=h):f=s,s=Math.floor((f-h)/2+h);return s},m.prototype.diff_commonSuffix=function(n,l){if(!n||!l||n.charAt(n.length-1)!=l.charAt(l.length-1))return 0;for(var h=0,f=Math.min(n.length,l.length),s=f,p=0;h<s;)n.substring(n.length-s,n.length-p)==l.substring(l.length-s,l.length-p)?(h=s,p=h):f=s,s=Math.floor((f-h)/2+h);return s},m.prototype.diff_commonOverlap_=function(n,l){var h=n.length,f=l.length;if(h==0||f==0)return 0;h>f?n=n.substring(h-f):h<f&&(l=l.substring(0,h));var s=Math.min(h,f);if(n==l)return s;for(var p=0,S=1;;){var i=n.substring(s-S),g=l.indexOf(i);if(g==-1)return p;S+=g,(g==0||n.substring(s-S)==l.substring(0,S))&&(p=S,S++)}},m.prototype.diff_halfMatch_=function(n,l){if(this.Diff_Timeout<=0)return null;var h=n.length>l.length?n:l,f=n.length>l.length?l:n;if(h.length<4||f.length*2<h.length)return null;var s=this;function p(C,D,R){for(var x=C.substring(R,R+Math.floor(C.length/4)),_=-1,B="",w,P,T,b;(_=D.indexOf(x,_+1))!=-1;){var F=s.diff_commonPrefix(C.substring(R),D.substring(_)),j=s.diff_commonSuffix(C.substring(0,R),D.substring(0,_));B.length<j+F&&(B=D.substring(_-j,_)+D.substring(_,_+F),w=C.substring(0,R-j),P=C.substring(R+F),T=D.substring(0,_-j),b=D.substring(_+F))}return B.length*2>=C.length?[w,P,T,b,B]:null}var S=p(h,f,Math.ceil(h.length/4)),i=p(h,f,Math.ceil(h.length/2)),g;if(!S&&!i)return null;i?S?g=S[4].length>i[4].length?S:i:g=i:g=S;var d,c,y,v;n.length>l.length?(d=g[0],c=g[1],y=g[2],v=g[3]):(y=g[0],v=g[1],d=g[2],c=g[3]);var I=g[4];return[d,c,y,v,I]},m.prototype.diff_cleanupSemantic=function(n){for(var l=!1,h=[],f=0,s=null,p=0,S=0,i=0,g=0,d=0;p<n.length;)n[p][0]==a?(h[f++]=p,S=g,i=d,g=0,d=0,s=n[p][1]):(n[p][0]==u?g+=n[p][1].length:d+=n[p][1].length,s&&s.length<=Math.max(S,i)&&s.length<=Math.max(g,d)&&(n.splice(h[f-1],0,new m.Diff(r,s)),n[h[f-1]+1][0]=u,f--,f--,p=f>0?h[f-1]:-1,S=0,i=0,g=0,d=0,s=null,l=!0)),p++;for(l&&this.diff_cleanupMerge(n),this.diff_cleanupSemanticLossless(n),p=1;p<n.length;){if(n[p-1][0]==r&&n[p][0]==u){var c=n[p-1][1],y=n[p][1],v=this.diff_commonOverlap_(c,y),I=this.diff_commonOverlap_(y,c);v>=I?(v>=c.length/2||v>=y.length/2)&&(n.splice(p,0,new m.Diff(a,y.substring(0,v))),n[p-1][1]=c.substring(0,c.length-v),n[p+1][1]=y.substring(v),p++):(I>=c.length/2||I>=y.length/2)&&(n.splice(p,0,new m.Diff(a,c.substring(0,I))),n[p-1][0]=u,n[p-1][1]=y.substring(0,y.length-I),n[p+1][0]=r,n[p+1][1]=c.substring(I),p++),p++}p++}},m.prototype.diff_cleanupSemanticLossless=function(n){function l(I,C){if(!I||!C)return 6;var D=I.charAt(I.length-1),R=C.charAt(0),x=D.match(m.nonAlphaNumericRegex_),_=R.match(m.nonAlphaNumericRegex_),B=x&&D.match(m.whitespaceRegex_),w=_&&R.match(m.whitespaceRegex_),P=B&&D.match(m.linebreakRegex_),T=w&&R.match(m.linebreakRegex_),b=P&&I.match(m.blanklineEndRegex_),F=T&&C.match(m.blanklineStartRegex_);return b||F?5:P||T?4:x&&!B&&w?3:B||w?2:x||_?1:0}for(var h=1;h<n.length-1;){if(n[h-1][0]==a&&n[h+1][0]==a){var f=n[h-1][1],s=n[h][1],p=n[h+1][1],S=this.diff_commonSuffix(f,s);if(S){var i=s.substring(s.length-S);f=f.substring(0,f.length-S),s=i+s.substring(0,s.length-S),p=i+p}for(var g=f,d=s,c=p,y=l(f,s)+l(s,p);s.charAt(0)===p.charAt(0);){f+=s.charAt(0),s=s.substring(1)+p.charAt(0),p=p.substring(1);var v=l(f,s)+l(s,p);v>=y&&(y=v,g=f,d=s,c=p)}n[h-1][1]!=g&&(g?n[h-1][1]=g:(n.splice(h-1,1),h--),n[h][1]=d,c?n[h+1][1]=c:(n.splice(h+1,1),h--))}h++}},m.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,m.whitespaceRegex_=/\s/,m.linebreakRegex_=/[\r\n]/,m.blanklineEndRegex_=/\n\r?\n$/,m.blanklineStartRegex_=/^\r?\n\r?\n/,m.prototype.diff_cleanupEfficiency=function(n){for(var l=!1,h=[],f=0,s=null,p=0,S=!1,i=!1,g=!1,d=!1;p<n.length;)n[p][0]==a?(n[p][1].length<this.Diff_EditCost&&(g||d)?(h[f++]=p,S=g,i=d,s=n[p][1]):(f=0,s=null),g=d=!1):(n[p][0]==r?d=!0:g=!0,s&&(S&&i&&g&&d||s.length<this.Diff_EditCost/2&&S+i+g+d==3)&&(n.splice(h[f-1],0,new m.Diff(r,s)),n[h[f-1]+1][0]=u,f--,s=null,S&&i?(g=d=!0,f=0):(f--,p=f>0?h[f-1]:-1,g=d=!1),l=!0)),p++;l&&this.diff_cleanupMerge(n)},m.prototype.diff_cleanupMerge=function(n){n.push(new m.Diff(a,""));for(var l=0,h=0,f=0,s="",p="",S;l<n.length;)switch(n[l][0]){case u:f++,p+=n[l][1],l++;break;case r:h++,s+=n[l][1],l++;break;case a:h+f>1?(h!==0&&f!==0&&(S=this.diff_commonPrefix(p,s),S!==0&&(l-h-f>0&&n[l-h-f-1][0]==a?n[l-h-f-1][1]+=p.substring(0,S):(n.splice(0,0,new m.Diff(a,p.substring(0,S))),l++),p=p.substring(S),s=s.substring(S)),S=this.diff_commonSuffix(p,s),S!==0&&(n[l][1]=p.substring(p.length-S)+n[l][1],p=p.substring(0,p.length-S),s=s.substring(0,s.length-S))),l-=h+f,n.splice(l,h+f),s.length&&(n.splice(l,0,new m.Diff(r,s)),l++),p.length&&(n.splice(l,0,new m.Diff(u,p)),l++),l++):l!==0&&n[l-1][0]==a?(n[l-1][1]+=n[l][1],n.splice(l,1)):l++,f=0,h=0,s="",p="";break}n[n.length-1][1]===""&&n.pop();var i=!1;for(l=1;l<n.length-1;)n[l-1][0]==a&&n[l+1][0]==a&&(n[l][1].substring(n[l][1].length-n[l-1][1].length)==n[l-1][1]?(n[l][1]=n[l-1][1]+n[l][1].substring(0,n[l][1].length-n[l-1][1].length),n[l+1][1]=n[l-1][1]+n[l+1][1],n.splice(l-1,1),i=!0):n[l][1].substring(0,n[l+1][1].length)==n[l+1][1]&&(n[l-1][1]+=n[l+1][1],n[l][1]=n[l][1].substring(n[l+1][1].length)+n[l+1][1],n.splice(l+1,1),i=!0)),l++;i&&this.diff_cleanupMerge(n)},m.prototype.diff_xIndex=function(n,l){var h=0,f=0,s=0,p=0,S;for(S=0;S<n.length&&(n[S][0]!==u&&(h+=n[S][1].length),n[S][0]!==r&&(f+=n[S][1].length),!(h>l));S++)s=h,p=f;return n.length!=S&&n[S][0]===r?p:p+(l-s)},m.prototype.diff_prettyHtml=function(n){for(var l=[],h=/&/g,f=/</g,s=/>/g,p=/\n/g,S=0;S<n.length;S++){var i=n[S][0],g=n[S][1],d=g.replace(h,"&amp;").replace(f,"&lt;").replace(s,"&gt;").replace(p,"&para;<br>");switch(i){case u:l[S]='<ins style="background:#e6ffe6;">'+d+"</ins>";break;case r:l[S]='<del style="background:#ffe6e6;">'+d+"</del>";break;case a:l[S]="<span>"+d+"</span>";break}}return l.join("")},m.prototype.diff_text1=function(n){for(var l=[],h=0;h<n.length;h++)n[h][0]!==u&&(l[h]=n[h][1]);return l.join("")},m.prototype.diff_text2=function(n){for(var l=[],h=0;h<n.length;h++)n[h][0]!==r&&(l[h]=n[h][1]);return l.join("")},m.prototype.diff_levenshtein=function(n){for(var l=0,h=0,f=0,s=0;s<n.length;s++){var p=n[s][0],S=n[s][1];switch(p){case u:h+=S.length;break;case r:f+=S.length;break;case a:l+=Math.max(h,f),h=0,f=0;break}}return l+=Math.max(h,f),l},m.prototype.diff_toDelta=function(n){for(var l=[],h=0;h<n.length;h++)switch(n[h][0]){case u:l[h]="+"+encodeURI(n[h][1]);break;case r:l[h]="-"+n[h][1].length;break;case a:l[h]="="+n[h][1].length;break}return l.join("	").replace(/%20/g," ")},m.prototype.diff_fromDelta=function(n,l){for(var h=[],f=0,s=0,p=l.split(/\t/g),S=0;S<p.length;S++){var i=p[S].substring(1);switch(p[S].charAt(0)){case"+":try{h[f++]=new m.Diff(u,decodeURI(i))}catch(c){throw new Error("Illegal escape in diff_fromDelta: "+i)}break;case"-":case"=":var g=parseInt(i,10);if(isNaN(g)||g<0)throw new Error("Invalid number in diff_fromDelta: "+i);var d=n.substring(s,s+=g);p[S].charAt(0)=="="?h[f++]=new m.Diff(a,d):h[f++]=new m.Diff(r,d);break;default:if(p[S])throw new Error("Invalid diff operation in diff_fromDelta: "+p[S])}}if(s!=n.length)throw new Error("Delta length ("+s+") does not equal source text length ("+n.length+").");return h},m.prototype.match_main=function(n,l,h){if(n==null||l==null||h==null)throw new Error("Null input. (match_main)");return h=Math.max(0,Math.min(h,n.length)),n==l?0:n.length?n.substring(h,h+l.length)==l?h:this.match_bitap_(n,l,h):-1},m.prototype.match_bitap_=function(n,l,h){if(l.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var f=this.match_alphabet_(l),s=this;function p(w,P){var T=w/l.length,b=Math.abs(h-P);return s.Match_Distance?T+b/s.Match_Distance:b?1:T}var S=this.Match_Threshold,i=n.indexOf(l,h);i!=-1&&(S=Math.min(p(0,i),S),i=n.lastIndexOf(l,h+l.length),i!=-1&&(S=Math.min(p(0,i),S)));var g=1<<l.length-1;i=-1;for(var d,c,y=l.length+n.length,v,I=0;I<l.length;I++){for(d=0,c=y;d<c;)p(I,h+c)<=S?d=c:y=c,c=Math.floor((y-d)/2+d);y=c;var C=Math.max(1,h-c+1),D=Math.min(h+c,n.length)+l.length,R=Array(D+2);R[D+1]=(1<<I)-1;for(var x=D;x>=C;x--){var _=f[n.charAt(x-1)];if(I===0?R[x]=(R[x+1]<<1|1)&_:R[x]=(R[x+1]<<1|1)&_|((v[x+1]|v[x])<<1|1)|v[x+1],R[x]&g){var B=p(I,x-1);if(B<=S)if(S=B,i=x-1,i>h)C=Math.max(1,2*h-i);else break}}if(p(I+1,h)>S)break;v=R}return i},m.prototype.match_alphabet_=function(n){for(var l={},h=0;h<n.length;h++)l[n.charAt(h)]=0;for(var h=0;h<n.length;h++)l[n.charAt(h)]|=1<<n.length-h-1;return l},m.prototype.patch_addContext_=function(n,l){if(l.length!=0){if(n.start2===null)throw Error("patch not initialized");for(var h=l.substring(n.start2,n.start2+n.length1),f=0;l.indexOf(h)!=l.lastIndexOf(h)&&h.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)f+=this.Patch_Margin,h=l.substring(n.start2-f,n.start2+n.length1+f);f+=this.Patch_Margin;var s=l.substring(n.start2-f,n.start2);s&&n.diffs.unshift(new m.Diff(a,s));var p=l.substring(n.start2+n.length1,n.start2+n.length1+f);p&&n.diffs.push(new m.Diff(a,p)),n.start1-=s.length,n.start2-=s.length,n.length1+=s.length+p.length,n.length2+=s.length+p.length}},m.prototype.patch_make=function(n,l,h){var f,s;if(typeof n=="string"&&typeof l=="string"&&typeof h=="undefined")f=n,s=this.diff_main(f,l,!0),s.length>2&&(this.diff_cleanupSemantic(s),this.diff_cleanupEfficiency(s));else if(n&&typeof n=="object"&&typeof l=="undefined"&&typeof h=="undefined")s=n,f=this.diff_text1(s);else if(typeof n=="string"&&l&&typeof l=="object"&&typeof h=="undefined")f=n,s=l;else if(typeof n=="string"&&typeof l=="string"&&h&&typeof h=="object")f=n,s=h;else throw new Error("Unknown call format to patch_make.");if(s.length===0)return[];for(var p=[],S=new m.patch_obj,i=0,g=0,d=0,c=f,y=f,v=0;v<s.length;v++){var I=s[v][0],C=s[v][1];switch(!i&&I!==a&&(S.start1=g,S.start2=d),I){case u:S.diffs[i++]=s[v],S.length2+=C.length,y=y.substring(0,d)+C+y.substring(d);break;case r:S.length1+=C.length,S.diffs[i++]=s[v],y=y.substring(0,d)+y.substring(d+C.length);break;case a:C.length<=2*this.Patch_Margin&&i&&s.length!=v+1?(S.diffs[i++]=s[v],S.length1+=C.length,S.length2+=C.length):C.length>=2*this.Patch_Margin&&i&&(this.patch_addContext_(S,c),p.push(S),S=new m.patch_obj,i=0,c=y,g=d);break}I!==u&&(g+=C.length),I!==r&&(d+=C.length)}return i&&(this.patch_addContext_(S,c),p.push(S)),p},m.prototype.patch_deepCopy=function(n){for(var l=[],h=0;h<n.length;h++){var f=n[h],s=new m.patch_obj;s.diffs=[];for(var p=0;p<f.diffs.length;p++)s.diffs[p]=new m.Diff(f.diffs[p][0],f.diffs[p][1]);s.start1=f.start1,s.start2=f.start2,s.length1=f.length1,s.length2=f.length2,l[h]=s}return l},m.prototype.patch_apply=function(n,l){if(n.length==0)return[l,[]];n=this.patch_deepCopy(n);var h=this.patch_addPadding(n);l=h+l+h,this.patch_splitMax(n);for(var f=0,s=[],p=0;p<n.length;p++){var S=n[p].start2+f,i=this.diff_text1(n[p].diffs),g,d=-1;if(i.length>this.Match_MaxBits?(g=this.match_main(l,i.substring(0,this.Match_MaxBits),S),g!=-1&&(d=this.match_main(l,i.substring(i.length-this.Match_MaxBits),S+i.length-this.Match_MaxBits),(d==-1||g>=d)&&(g=-1))):g=this.match_main(l,i,S),g==-1)s[p]=!1,f-=n[p].length2-n[p].length1;else{s[p]=!0,f=g-S;var c;if(d==-1?c=l.substring(g,g+i.length):c=l.substring(g,d+this.Match_MaxBits),i==c)l=l.substring(0,g)+this.diff_text2(n[p].diffs)+l.substring(g+i.length);else{var y=this.diff_main(i,c,!1);if(i.length>this.Match_MaxBits&&this.diff_levenshtein(y)/i.length>this.Patch_DeleteThreshold)s[p]=!1;else{this.diff_cleanupSemanticLossless(y);for(var v=0,I,C=0;C<n[p].diffs.length;C++){var D=n[p].diffs[C];D[0]!==a&&(I=this.diff_xIndex(y,v)),D[0]===u?l=l.substring(0,g+I)+D[1]+l.substring(g+I):D[0]===r&&(l=l.substring(0,g+I)+l.substring(g+this.diff_xIndex(y,v+D[1].length))),D[0]!==r&&(v+=D[1].length)}}}}}return l=l.substring(h.length,l.length-h.length),[l,s]},m.prototype.patch_addPadding=function(n){for(var l=this.Patch_Margin,h="",f=1;f<=l;f++)h+=String.fromCharCode(f);for(var f=0;f<n.length;f++)n[f].start1+=l,n[f].start2+=l;var s=n[0],p=s.diffs;if(p.length==0||p[0][0]!=a)p.unshift(new m.Diff(a,h)),s.start1-=l,s.start2-=l,s.length1+=l,s.length2+=l;else if(l>p[0][1].length){var S=l-p[0][1].length;p[0][1]=h.substring(p[0][1].length)+p[0][1],s.start1-=S,s.start2-=S,s.length1+=S,s.length2+=S}if(s=n[n.length-1],p=s.diffs,p.length==0||p[p.length-1][0]!=a)p.push(new m.Diff(a,h)),s.length1+=l,s.length2+=l;else if(l>p[p.length-1][1].length){var S=l-p[p.length-1][1].length;p[p.length-1][1]+=h.substring(0,S),s.length1+=S,s.length2+=S}return h},m.prototype.patch_splitMax=function(n){for(var l=this.Match_MaxBits,h=0;h<n.length;h++)if(!(n[h].length1<=l)){var f=n[h];n.splice(h--,1);for(var s=f.start1,p=f.start2,S="";f.diffs.length!==0;){var i=new m.patch_obj,g=!0;for(i.start1=s-S.length,i.start2=p-S.length,S!==""&&(i.length1=i.length2=S.length,i.diffs.push(new m.Diff(a,S)));f.diffs.length!==0&&i.length1<l-this.Patch_Margin;){var d=f.diffs[0][0],c=f.diffs[0][1];d===u?(i.length2+=c.length,p+=c.length,i.diffs.push(f.diffs.shift()),g=!1):d===r&&i.diffs.length==1&&i.diffs[0][0]==a&&c.length>2*l?(i.length1+=c.length,s+=c.length,g=!1,i.diffs.push(new m.Diff(d,c)),f.diffs.shift()):(c=c.substring(0,l-i.length1-this.Patch_Margin),i.length1+=c.length,s+=c.length,d===a?(i.length2+=c.length,p+=c.length):g=!1,i.diffs.push(new m.Diff(d,c)),c==f.diffs[0][1]?f.diffs.shift():f.diffs[0][1]=f.diffs[0][1].substring(c.length))}S=this.diff_text2(i.diffs),S=S.substring(S.length-this.Patch_Margin);var y=this.diff_text1(f.diffs).substring(0,this.Patch_Margin);y!==""&&(i.length1+=y.length,i.length2+=y.length,i.diffs.length!==0&&i.diffs[i.diffs.length-1][0]===a?i.diffs[i.diffs.length-1][1]+=y:i.diffs.push(new m.Diff(a,y))),g||n.splice(++h,0,i)}}},m.prototype.patch_toText=function(n){for(var l=[],h=0;h<n.length;h++)l[h]=n[h];return l.join("")},m.prototype.patch_fromText=function(n){var l=[];if(!n)return l;for(var h=n.split(`
`),f=0,s=/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;f<h.length;){var p=h[f].match(s);if(!p)throw new Error("Invalid patch string: "+h[f]);var S=new m.patch_obj;for(l.push(S),S.start1=parseInt(p[1],10),p[2]===""?(S.start1--,S.length1=1):p[2]=="0"?S.length1=0:(S.start1--,S.length1=parseInt(p[2],10)),S.start2=parseInt(p[3],10),p[4]===""?(S.start2--,S.length2=1):p[4]=="0"?S.length2=0:(S.start2--,S.length2=parseInt(p[4],10)),f++;f<h.length;){var i=h[f].charAt(0);try{var g=decodeURI(h[f].substring(1))}catch(d){throw new Error("Illegal escape in patch_fromText: "+g)}if(i=="-")S.diffs.push(new m.Diff(r,g));else if(i=="+")S.diffs.push(new m.Diff(u,g));else if(i==" ")S.diffs.push(new m.Diff(a,g));else{if(i=="@")break;if(i!=="")throw new Error('Invalid patch mode "'+i+'" in: '+g)}f++}}return l},m.patch_obj=function(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0},m.patch_obj.prototype.toString=function(){var n,l;this.length1===0?n=this.start1+",0":this.length1==1?n=this.start1+1:n=this.start1+1+","+this.length1,this.length2===0?l=this.start2+",0":this.length2==1?l=this.start2+1:l=this.start2+1+","+this.length2;for(var h=["@@ -"+n+" +"+l+` @@
`],f,s=0;s<this.diffs.length;s++){switch(this.diffs[s][0]){case u:f="+";break;case r:f="-";break;case a:f=" ";break}h[s+1]=f+encodeURI(this.diffs[s][1])+`
`}return h.join("").replace(/%20/g," ")},E.exports=m,E.exports.diff_match_patch=m,E.exports.DIFF_DELETE=r,E.exports.DIFF_INSERT=u,E.exports.DIFF_EQUAL=a},8954:function(E){/**!

 @license
 handlebars v4.7.8

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/(function(m,r){E.exports=r()})(this,function(){return function(m){function r(a){if(u[a])return u[a].exports;var n=u[a]={exports:{},id:a,loaded:!1};return m[a].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}var u={};return r.m=m,r.c=u,r.p="",r(0)}([function(m,r,u){"use strict";function a(){var D=I();return D.compile=function(R,x){return S.compile(R,x,D)},D.precompile=function(R,x){return S.precompile(R,x,D)},D.AST=s.default,D.Compiler=S.Compiler,D.JavaScriptCompiler=g.default,D.Parser=p.parser,D.parse=p.parse,D.parseWithoutProcessing=p.parseWithoutProcessing,D}var n=u(1).default;r.__esModule=!0;var l=u(2),h=n(l),f=u(84),s=n(f),p=u(85),S=u(90),i=u(91),g=n(i),d=u(88),c=n(d),y=u(83),v=n(y),I=h.default.create,C=a();C.create=a,v.default(C),C.Visitor=c.default,C.default=C,r.default=C,m.exports=r.default},function(m,r){"use strict";r.default=function(u){return u&&u.__esModule?u:{default:u}},r.__esModule=!0},function(m,r,u){"use strict";function a(){var D=new f.HandlebarsEnvironment;return d.extend(D,f),D.SafeString=p.default,D.Exception=i.default,D.Utils=d,D.escapeExpression=d.escapeExpression,D.VM=y,D.template=function(R){return y.template(R,D)},D}var n=u(3).default,l=u(1).default;r.__esModule=!0;var h=u(4),f=n(h),s=u(77),p=l(s),S=u(6),i=l(S),g=u(5),d=n(g),c=u(78),y=n(c),v=u(83),I=l(v),C=a();C.create=a,I.default(C),C.default=C,r.default=C,m.exports=r.default},function(m,r){"use strict";r.default=function(u){if(u&&u.__esModule)return u;var a={};if(u!=null)for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(a[n]=u[n]);return a.default=u,a},r.__esModule=!0},function(m,r,u){"use strict";function a(D,R,x){this.helpers=D||{},this.partials=R||{},this.decorators=x||{},s.registerDefaultHelpers(this),p.registerDefaultDecorators(this)}var n=u(1).default;r.__esModule=!0,r.HandlebarsEnvironment=a;var l=u(5),h=u(6),f=n(h),s=u(10),p=u(70),S=u(72),i=n(S),g=u(73),d="4.7.8";r.VERSION=d;var c=8;r.COMPILER_REVISION=c;var y=7;r.LAST_COMPATIBLE_COMPILER_REVISION=y;var v={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};r.REVISION_CHANGES=v;var I="[object Object]";a.prototype={constructor:a,logger:i.default,log:i.default.log,registerHelper:function(D,R){if(l.toString.call(D)===I){if(R)throw new f.default("Arg not supported with multiple helpers");l.extend(this.helpers,D)}else this.helpers[D]=R},unregisterHelper:function(D){delete this.helpers[D]},registerPartial:function(D,R){if(l.toString.call(D)===I)l.extend(this.partials,D);else{if(typeof R=="undefined")throw new f.default('Attempting to register a partial called "'+D+'" as undefined');this.partials[D]=R}},unregisterPartial:function(D){delete this.partials[D]},registerDecorator:function(D,R){if(l.toString.call(D)===I){if(R)throw new f.default("Arg not supported with multiple decorators");l.extend(this.decorators,D)}else this.decorators[D]=R},unregisterDecorator:function(D){delete this.decorators[D]},resetLoggedPropertyAccesses:function(){g.resetLoggedProperties()}};var C=i.default.log;r.log=C,r.createFrame=l.createFrame,r.logger=i.default},function(m,r){"use strict";function u(v){return S[v]}function a(v){for(var I=1;I<arguments.length;I++)for(var C in arguments[I])Object.prototype.hasOwnProperty.call(arguments[I],C)&&(v[C]=arguments[I][C]);return v}function n(v,I){for(var C=0,D=v.length;C<D;C++)if(v[C]===I)return C;return-1}function l(v){if(typeof v!="string"){if(v&&v.toHTML)return v.toHTML();if(v==null)return"";if(!v)return v+"";v=""+v}return g.test(v)?v.replace(i,u):v}function h(v){return!v&&v!==0||!(!y(v)||v.length!==0)}function f(v){var I=a({},v);return I._parent=v,I}function s(v,I){return v.path=I,v}function p(v,I){return(v?v+".":"")+I}r.__esModule=!0,r.extend=a,r.indexOf=n,r.escapeExpression=l,r.isEmpty=h,r.createFrame=f,r.blockParams=s,r.appendContextPath=p;var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,g=/[&<>"'`=]/,d=Object.prototype.toString;r.toString=d;var c=function(v){return typeof v=="function"};c(/x/)&&(r.isFunction=c=function(v){return typeof v=="function"&&d.call(v)==="[object Function]"}),r.isFunction=c;var y=Array.isArray||function(v){return!(!v||typeof v!="object")&&d.call(v)==="[object Array]"};r.isArray=y},function(m,r,u){"use strict";function a(h,f){var s=f&&f.loc,p=void 0,S=void 0,i=void 0,g=void 0;s&&(p=s.start.line,S=s.end.line,i=s.start.column,g=s.end.column,h+=" - "+p+":"+i);for(var d=Error.prototype.constructor.call(this,h),c=0;c<l.length;c++)this[l[c]]=d[l[c]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{s&&(this.lineNumber=p,this.endLineNumber=S,n?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:g,enumerable:!0})):(this.column=i,this.endColumn=g))}catch(y){}}var n=u(7).default;r.__esModule=!0;var l=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];a.prototype=new Error,r.default=a,m.exports=r.default},function(m,r,u){m.exports={default:u(8),__esModule:!0}},function(m,r,u){var a=u(9);m.exports=function(n,l,h){return a.setDesc(n,l,h)}},function(m,r){var u=Object;m.exports={create:u.create,getProto:u.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:u.getOwnPropertyDescriptor,setDesc:u.defineProperty,setDescs:u.defineProperties,getKeys:u.keys,getNames:u.getOwnPropertyNames,getSymbols:u.getOwnPropertySymbols,each:[].forEach}},function(m,r,u){"use strict";function a(R){f.default(R),p.default(R),i.default(R),d.default(R),y.default(R),I.default(R),D.default(R)}function n(R,x,_){R.helpers[x]&&(R.hooks[x]=R.helpers[x],_||delete R.helpers[x])}var l=u(1).default;r.__esModule=!0,r.registerDefaultHelpers=a,r.moveHelperToHooks=n;var h=u(11),f=l(h),s=u(12),p=l(s),S=u(65),i=l(S),g=u(66),d=l(g),c=u(67),y=l(c),v=u(68),I=l(v),C=u(69),D=l(C)},function(m,r,u){"use strict";r.__esModule=!0;var a=u(5);r.default=function(n){n.registerHelper("blockHelperMissing",function(l,h){var f=h.inverse,s=h.fn;if(l===!0)return s(this);if(l===!1||l==null)return f(this);if(a.isArray(l))return l.length>0?(h.ids&&(h.ids=[h.name]),n.helpers.each(l,h)):f(this);if(h.data&&h.ids){var p=a.createFrame(h.data);p.contextPath=a.appendContextPath(h.data.contextPath,h.name),h={data:p}}return s(l,h)})},m.exports=r.default},function(m,r,u){"use strict";var a=u(13).default,n=u(43).default,l=u(55).default,h=u(60).default,f=u(1).default;r.__esModule=!0;var s=u(5),p=u(6),S=f(p);r.default=function(i){i.registerHelper("each",function(g,d){function c(P,T,b){D&&(D.key=P,D.index=T,D.first=T===0,D.last=!!b,R&&(D.contextPath=R+P)),C+=y(g[P],{data:D,blockParams:s.blockParams([g[P],P],[R+P,null])})}if(!d)throw new S.default("Must pass iterator to #each");var y=d.fn,v=d.inverse,I=0,C="",D=void 0,R=void 0;if(d.data&&d.ids&&(R=s.appendContextPath(d.data.contextPath,d.ids[0])+"."),s.isFunction(g)&&(g=g.call(this)),d.data&&(D=s.createFrame(d.data)),g&&typeof g=="object")if(s.isArray(g))for(var x=g.length;I<x;I++)I in g&&c(I,I,I===g.length-1);else if(typeof a=="function"&&g[n]){for(var _=[],B=l(g),w=B.next();!w.done;w=B.next())_.push(w.value);g=_;for(var x=g.length;I<x;I++)c(I,I,I===g.length-1)}else(function(){var P=void 0;h(g).forEach(function(T){P!==void 0&&c(P,I-1),P=T,I++}),P!==void 0&&c(P,I-1,!0)})();return I===0&&(C=v(this)),C})},m.exports=r.default},function(m,r,u){m.exports={default:u(14),__esModule:!0}},function(m,r,u){u(15),u(42),m.exports=u(21).Symbol},function(m,r,u){"use strict";var a=u(9),n=u(16),l=u(17),h=u(18),f=u(20),s=u(24),p=u(19),S=u(27),i=u(28),g=u(30),d=u(29),c=u(31),y=u(36),v=u(37),I=u(38),C=u(39),D=u(32),R=u(26),x=a.getDesc,_=a.setDesc,B=a.create,w=y.get,P=n.Symbol,T=n.JSON,b=T&&T.stringify,F=!1,j=d("_hidden"),K=a.isEnum,W=S("symbol-registry"),$=S("symbols"),k=typeof P=="function",H=Object.prototype,U=h&&p(function(){return B(_({},"a",{get:function(){return _(this,"a",{value:7}).a}})).a!=7})?function(de,Ne,Ie){var ke=x(H,Ne);ke&&delete H[Ne],_(de,Ne,Ie),ke&&de!==H&&_(H,Ne,ke)}:_,Q=function(de){var Ne=$[de]=B(P.prototype);return Ne._k=de,h&&F&&U(H,de,{configurable:!0,set:function(Ie){l(this,j)&&l(this[j],de)&&(this[j][de]=!1),U(this,de,R(1,Ie))}}),Ne},ne=function(de){return typeof de=="symbol"},ie=function(de,Ne,Ie){return Ie&&l($,Ne)?(Ie.enumerable?(l(de,j)&&de[j][Ne]&&(de[j][Ne]=!1),Ie=B(Ie,{enumerable:R(0,!1)})):(l(de,j)||_(de,j,R(1,{})),de[j][Ne]=!0),U(de,Ne,Ie)):_(de,Ne,Ie)},J=function(de,Ne){C(de);for(var Ie,ke=v(Ne=D(Ne)),ht=0,Ut=ke.length;Ut>ht;)ie(de,Ie=ke[ht++],Ne[Ie]);return de},ge=function(de,Ne){return Ne===void 0?B(de):J(B(de),Ne)},ye=function(de){var Ne=K.call(this,de);return!(Ne||!l(this,de)||!l($,de)||l(this,j)&&this[j][de])||Ne},Ce=function(de,Ne){var Ie=x(de=D(de),Ne);return!Ie||!l($,Ne)||l(de,j)&&de[j][Ne]||(Ie.enumerable=!0),Ie},Be=function(de){for(var Ne,Ie=w(D(de)),ke=[],ht=0;Ie.length>ht;)l($,Ne=Ie[ht++])||Ne==j||ke.push(Ne);return ke},it=function(de){for(var Ne,Ie=w(D(de)),ke=[],ht=0;Ie.length>ht;)l($,Ne=Ie[ht++])&&ke.push($[Ne]);return ke},yt=function(de){if(de!==void 0&&!ne(de)){for(var Ne,Ie,ke=[de],ht=1,Ut=arguments;Ut.length>ht;)ke.push(Ut[ht++]);return Ne=ke[1],typeof Ne=="function"&&(Ie=Ne),!Ie&&I(Ne)||(Ne=function(tt,Me){if(Ie&&(Me=Ie.call(this,tt,Me)),!ne(Me))return Me}),ke[1]=Ne,b.apply(T,ke)}},Dt=p(function(){var de=P();return b([de])!="[null]"||b({a:de})!="{}"||b(Object(de))!="{}"});k||(P=function(){if(ne(this))throw TypeError("Symbol is not a constructor");return Q(g(arguments.length>0?arguments[0]:void 0))},s(P.prototype,"toString",function(){return this._k}),ne=function(de){return de instanceof P},a.create=ge,a.isEnum=ye,a.getDesc=Ce,a.setDesc=ie,a.setDescs=J,a.getNames=y.get=Be,a.getSymbols=it,h&&!u(41)&&s(H,"propertyIsEnumerable",ye,!0));var Pt={for:function(de){return l(W,de+="")?W[de]:W[de]=P(de)},keyFor:function(de){return c(W,de)},useSetter:function(){F=!0},useSimple:function(){F=!1}};a.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(de){var Ne=d(de);Pt[de]=k?Ne:Q(Ne)}),F=!0,f(f.G+f.W,{Symbol:P}),f(f.S,"Symbol",Pt),f(f.S+f.F*!k,"Object",{create:ge,defineProperty:ie,defineProperties:J,getOwnPropertyDescriptor:Ce,getOwnPropertyNames:Be,getOwnPropertySymbols:it}),T&&f(f.S+f.F*(!k||Dt),"JSON",{stringify:yt}),i(P,"Symbol"),i(Math,"Math",!0),i(n.JSON,"JSON",!0)},function(m,r){var u=m.exports=typeof window!="undefined"&&window.Math==Math?window:typeof self!="undefined"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=u)},function(m,r){var u={}.hasOwnProperty;m.exports=function(a,n){return u.call(a,n)}},function(m,r,u){m.exports=!u(19)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(m,r){m.exports=function(u){try{return!!u()}catch(a){return!0}}},function(m,r,u){var a=u(16),n=u(21),l=u(22),h="prototype",f=function(s,p,S){var i,g,d,c=s&f.F,y=s&f.G,v=s&f.S,I=s&f.P,C=s&f.B,D=s&f.W,R=y?n:n[p]||(n[p]={}),x=y?a:v?a[p]:(a[p]||{})[h];y&&(S=p);for(i in S)g=!c&&x&&i in x,g&&i in R||(d=g?x[i]:S[i],R[i]=y&&typeof x[i]!="function"?S[i]:C&&g?l(d,a):D&&x[i]==d?function(_){var B=function(w){return this instanceof _?new _(w):_(w)};return B[h]=_[h],B}(d):I&&typeof d=="function"?l(Function.call,d):d,I&&((R[h]||(R[h]={}))[i]=d))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,m.exports=f},function(m,r){var u=m.exports={version:"1.2.6"};typeof __e=="number"&&(__e=u)},function(m,r,u){var a=u(23);m.exports=function(n,l,h){if(a(n),l===void 0)return n;switch(h){case 1:return function(f){return n.call(l,f)};case 2:return function(f,s){return n.call(l,f,s)};case 3:return function(f,s,p){return n.call(l,f,s,p)}}return function(){return n.apply(l,arguments)}}},function(m,r){m.exports=function(u){if(typeof u!="function")throw TypeError(u+" is not a function!");return u}},function(m,r,u){m.exports=u(25)},function(m,r,u){var a=u(9),n=u(26);m.exports=u(18)?function(l,h,f){return a.setDesc(l,h,n(1,f))}:function(l,h,f){return l[h]=f,l}},function(m,r){m.exports=function(u,a){return{enumerable:!(1&u),configurable:!(2&u),writable:!(4&u),value:a}}},function(m,r,u){var a=u(16),n="__core-js_shared__",l=a[n]||(a[n]={});m.exports=function(h){return l[h]||(l[h]={})}},function(m,r,u){var a=u(9).setDesc,n=u(17),l=u(29)("toStringTag");m.exports=function(h,f,s){h&&!n(h=s?h:h.prototype,l)&&a(h,l,{configurable:!0,value:f})}},function(m,r,u){var a=u(27)("wks"),n=u(30),l=u(16).Symbol;m.exports=function(h){return a[h]||(a[h]=l&&l[h]||(l||n)("Symbol."+h))}},function(m,r){var u=0,a=Math.random();m.exports=function(n){return"Symbol(".concat(n===void 0?"":n,")_",(++u+a).toString(36))}},function(m,r,u){var a=u(9),n=u(32);m.exports=function(l,h){for(var f,s=n(l),p=a.getKeys(s),S=p.length,i=0;S>i;)if(s[f=p[i++]]===h)return f}},function(m,r,u){var a=u(33),n=u(35);m.exports=function(l){return a(n(l))}},function(m,r,u){var a=u(34);m.exports=Object("z").propertyIsEnumerable(0)?Object:function(n){return a(n)=="String"?n.split(""):Object(n)}},function(m,r){var u={}.toString;m.exports=function(a){return u.call(a).slice(8,-1)}},function(m,r){m.exports=function(u){if(u==null)throw TypeError("Can't call method on  "+u);return u}},function(m,r,u){var a=u(32),n=u(9).getNames,l={}.toString,h=typeof window=="object"&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(s){try{return n(s)}catch(p){return h.slice()}};m.exports.get=function(s){return h&&l.call(s)=="[object Window]"?f(s):n(a(s))}},function(m,r,u){var a=u(9);m.exports=function(n){var l=a.getKeys(n),h=a.getSymbols;if(h)for(var f,s=h(n),p=a.isEnum,S=0;s.length>S;)p.call(n,f=s[S++])&&l.push(f);return l}},function(m,r,u){var a=u(34);m.exports=Array.isArray||function(n){return a(n)=="Array"}},function(m,r,u){var a=u(40);m.exports=function(n){if(!a(n))throw TypeError(n+" is not an object!");return n}},function(m,r){m.exports=function(u){return typeof u=="object"?u!==null:typeof u=="function"}},function(m,r){m.exports=!0},function(m,r){},function(m,r,u){m.exports={default:u(44),__esModule:!0}},function(m,r,u){u(45),u(51),m.exports=u(29)("iterator")},function(m,r,u){"use strict";var a=u(46)(!0);u(48)(String,"String",function(n){this._t=String(n),this._i=0},function(){var n,l=this._t,h=this._i;return h>=l.length?{value:void 0,done:!0}:(n=a(l,h),this._i+=n.length,{value:n,done:!1})})},function(m,r,u){var a=u(47),n=u(35);m.exports=function(l){return function(h,f){var s,p,S=String(n(h)),i=a(f),g=S.length;return i<0||i>=g?l?"":void 0:(s=S.charCodeAt(i),s<55296||s>56319||i+1===g||(p=S.charCodeAt(i+1))<56320||p>57343?l?S.charAt(i):s:l?S.slice(i,i+2):(s-55296<<10)+(p-56320)+65536)}}},function(m,r){var u=Math.ceil,a=Math.floor;m.exports=function(n){return isNaN(n=+n)?0:(n>0?a:u)(n)}},function(m,r,u){"use strict";var a=u(41),n=u(20),l=u(24),h=u(25),f=u(17),s=u(49),p=u(50),S=u(28),i=u(9).getProto,g=u(29)("iterator"),d=!([].keys&&"next"in[].keys()),c="@@iterator",y="keys",v="values",I=function(){return this};m.exports=function(C,D,R,x,_,B,w){p(R,D,x);var P,T,b=function(U){if(!d&&U in W)return W[U];switch(U){case y:return function(){return new R(this,U)};case v:return function(){return new R(this,U)}}return function(){return new R(this,U)}},F=D+" Iterator",j=_==v,K=!1,W=C.prototype,$=W[g]||W[c]||_&&W[_],k=$||b(_);if($){var H=i(k.call(new C));S(H,F,!0),!a&&f(W,c)&&h(H,g,I),j&&$.name!==v&&(K=!0,k=function(){return $.call(this)})}if(a&&!w||!d&&!K&&W[g]||h(W,g,k),s[D]=k,s[F]=I,_)if(P={values:j?k:b(v),keys:B?k:b(y),entries:j?b("entries"):k},w)for(T in P)T in W||l(W,T,P[T]);else n(n.P+n.F*(d||K),D,P);return P}},function(m,r){m.exports={}},function(m,r,u){"use strict";var a=u(9),n=u(26),l=u(28),h={};u(25)(h,u(29)("iterator"),function(){return this}),m.exports=function(f,s,p){f.prototype=a.create(h,{next:n(1,p)}),l(f,s+" Iterator")}},function(m,r,u){u(52);var a=u(49);a.NodeList=a.HTMLCollection=a.Array},function(m,r,u){"use strict";var a=u(53),n=u(54),l=u(49),h=u(32);m.exports=u(48)(Array,"Array",function(f,s){this._t=h(f),this._i=0,this._k=s},function(){var f=this._t,s=this._k,p=this._i++;return!f||p>=f.length?(this._t=void 0,n(1)):s=="keys"?n(0,p):s=="values"?n(0,f[p]):n(0,[p,f[p]])},"values"),l.Arguments=l.Array,a("keys"),a("values"),a("entries")},function(m,r){m.exports=function(){}},function(m,r){m.exports=function(u,a){return{value:a,done:!!u}}},function(m,r,u){m.exports={default:u(56),__esModule:!0}},function(m,r,u){u(51),u(45),m.exports=u(57)},function(m,r,u){var a=u(39),n=u(58);m.exports=u(21).getIterator=function(l){var h=n(l);if(typeof h!="function")throw TypeError(l+" is not iterable!");return a(h.call(l))}},function(m,r,u){var a=u(59),n=u(29)("iterator"),l=u(49);m.exports=u(21).getIteratorMethod=function(h){if(h!=null)return h[n]||h["@@iterator"]||l[a(h)]}},function(m,r,u){var a=u(34),n=u(29)("toStringTag"),l=a(function(){return arguments}())=="Arguments";m.exports=function(h){var f,s,p;return h===void 0?"Undefined":h===null?"Null":typeof(s=(f=Object(h))[n])=="string"?s:l?a(f):(p=a(f))=="Object"&&typeof f.callee=="function"?"Arguments":p}},function(m,r,u){m.exports={default:u(61),__esModule:!0}},function(m,r,u){u(62),m.exports=u(21).Object.keys},function(m,r,u){var a=u(63);u(64)("keys",function(n){return function(l){return n(a(l))}})},function(m,r,u){var a=u(35);m.exports=function(n){return Object(a(n))}},function(m,r,u){var a=u(20),n=u(21),l=u(19);m.exports=function(h,f){var s=(n.Object||{})[h]||Object[h],p={};p[h]=f(s),a(a.S+a.F*l(function(){s(1)}),"Object",p)}},function(m,r,u){"use strict";var a=u(1).default;r.__esModule=!0;var n=u(6),l=a(n);r.default=function(h){h.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new l.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},m.exports=r.default},function(m,r,u){"use strict";var a=u(1).default;r.__esModule=!0;var n=u(5),l=u(6),h=a(l);r.default=function(f){f.registerHelper("if",function(s,p){if(arguments.length!=2)throw new h.default("#if requires exactly one argument");return n.isFunction(s)&&(s=s.call(this)),!p.hash.includeZero&&!s||n.isEmpty(s)?p.inverse(this):p.fn(this)}),f.registerHelper("unless",function(s,p){if(arguments.length!=2)throw new h.default("#unless requires exactly one argument");return f.helpers.if.call(this,s,{fn:p.inverse,inverse:p.fn,hash:p.hash})})},m.exports=r.default},function(m,r){"use strict";r.__esModule=!0,r.default=function(u){u.registerHelper("log",function(){for(var a=[void 0],n=arguments[arguments.length-1],l=0;l<arguments.length-1;l++)a.push(arguments[l]);var h=1;n.hash.level!=null?h=n.hash.level:n.data&&n.data.level!=null&&(h=n.data.level),a[0]=h,u.log.apply(u,a)})},m.exports=r.default},function(m,r){"use strict";r.__esModule=!0,r.default=function(u){u.registerHelper("lookup",function(a,n,l){return a&&l.lookupProperty(a,n)})},m.exports=r.default},function(m,r,u){"use strict";var a=u(1).default;r.__esModule=!0;var n=u(5),l=u(6),h=a(l);r.default=function(f){f.registerHelper("with",function(s,p){if(arguments.length!=2)throw new h.default("#with requires exactly one argument");n.isFunction(s)&&(s=s.call(this));var S=p.fn;if(n.isEmpty(s))return p.inverse(this);var i=p.data;return p.data&&p.ids&&(i=n.createFrame(p.data),i.contextPath=n.appendContextPath(p.data.contextPath,p.ids[0])),S(s,{data:i,blockParams:n.blockParams([s],[i&&i.contextPath])})})},m.exports=r.default},function(m,r,u){"use strict";function a(f){h.default(f)}var n=u(1).default;r.__esModule=!0,r.registerDefaultDecorators=a;var l=u(71),h=n(l)},function(m,r,u){"use strict";r.__esModule=!0;var a=u(5);r.default=function(n){n.registerDecorator("inline",function(l,h,f,s){var p=l;return h.partials||(h.partials={},p=function(S,i){var g=f.partials;f.partials=a.extend({},g,h.partials);var d=l(S,i);return f.partials=g,d}),h.partials[s.args[0]]=s.fn,p})},m.exports=r.default},function(m,r,u){"use strict";r.__esModule=!0;var a=u(5),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(l){if(typeof l=="string"){var h=a.indexOf(n.methodMap,l.toLowerCase());l=h>=0?h:parseInt(l,10)}return l},log:function(l){if(l=n.lookupLevel(l),typeof console!="undefined"&&n.lookupLevel(n.level)<=l){var h=n.methodMap[l];console[h]||(h="log");for(var f=arguments.length,s=Array(f>1?f-1:0),p=1;p<f;p++)s[p-1]=arguments[p];console[h].apply(console,s)}}};r.default=n,m.exports=r.default},function(m,r,u){"use strict";function a(y){var v=s(null);v.constructor=!1,v.__defineGetter__=!1,v.__defineSetter__=!1,v.__lookupGetter__=!1;var I=s(null);return I.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(I,y.allowedProtoProperties),defaultValue:y.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(v,y.allowedProtoMethods),defaultValue:y.allowProtoMethodsByDefault}}}function n(y,v,I){return l(typeof y=="function"?v.methods:v.properties,I)}function l(y,v){return y.whitelist[v]!==void 0?y.whitelist[v]===!0:y.defaultValue!==void 0?y.defaultValue:(h(v),!1)}function h(y){c[y]!==!0&&(c[y]=!0,d.default.log("error",'Handlebars: Access has been denied to resolve the property "'+y+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function f(){p(c).forEach(function(y){delete c[y]})}var s=u(74).default,p=u(60).default,S=u(1).default;r.__esModule=!0,r.createProtoAccessControl=a,r.resultIsAllowed=n,r.resetLoggedProperties=f;var i=u(76),g=u(72),d=S(g),c=s(null)},function(m,r,u){m.exports={default:u(75),__esModule:!0}},function(m,r,u){var a=u(9);m.exports=function(n,l){return a.create(n,l)}},function(m,r,u){"use strict";function a(){for(var h=arguments.length,f=Array(h),s=0;s<h;s++)f[s]=arguments[s];return l.extend.apply(void 0,[n(null)].concat(f))}var n=u(74).default;r.__esModule=!0,r.createNewLookupObject=a;var l=u(5)},function(m,r){"use strict";function u(a){this.string=a}r.__esModule=!0,u.prototype.toString=u.prototype.toHTML=function(){return""+this.string},r.default=u,m.exports=r.default},function(m,r,u){"use strict";function a(P){var T=P&&P[0]||1,b=x.COMPILER_REVISION;if(!(T>=x.LAST_COMPATIBLE_COMPILER_REVISION&&T<=x.COMPILER_REVISION)){if(T<x.LAST_COMPATIBLE_COMPILER_REVISION){var F=x.REVISION_CHANGES[b],j=x.REVISION_CHANGES[T];throw new R.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+F+") or downgrade your runtime to an older version ("+j+").")}throw new R.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+P[1]+").")}}function n(P,T){function b(W,$,k){k.hash&&($=C.extend({},$,k.hash),k.ids&&(k.ids[0]=!0)),W=T.VM.resolvePartial.call(this,W,$,k);var H=C.extend({},k,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),U=T.VM.invokePartial.call(this,W,$,H);if(U==null&&T.compile&&(k.partials[k.name]=T.compile(W,P.compilerOptions,T),U=k.partials[k.name]($,H)),U!=null){if(k.indent){for(var Q=U.split(`
`),ne=0,ie=Q.length;ne<ie&&(Q[ne]||ne+1!==ie);ne++)Q[ne]=k.indent+Q[ne];U=Q.join(`
`)}return U}throw new R.default("The partial "+k.name+" could not be compiled when running in runtime-only mode")}function F(W){function $(ne){return""+P.main(K,ne,K.helpers,K.partials,H,Q,U)}var k=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],H=k.data;F._setup(k),!k.partial&&P.useData&&(H=p(W,H));var U=void 0,Q=P.useBlockParams?[]:void 0;return P.useDepths&&(U=k.depths?W!=k.depths[0]?[W].concat(k.depths):k.depths:[W]),($=S(P.main,$,K,k.depths||[],H,Q))(W,k)}if(!T)throw new R.default("No environment passed to template");if(!P||!P.main)throw new R.default("Unknown template object: "+typeof P);P.main.decorator=P.main_d,T.VM.checkRevision(P.compiler);var j=P.compiler&&P.compiler[0]===7,K={strict:function(W,$,k){if(!(W&&$ in W))throw new R.default('"'+$+'" not defined in '+W,{loc:k});return K.lookupProperty(W,$)},lookupProperty:function(W,$){var k=W[$];return k==null||Object.prototype.hasOwnProperty.call(W,$)||w.resultIsAllowed(k,K.protoAccessControl,$)?k:void 0},lookup:function(W,$){for(var k=W.length,H=0;H<k;H++){var U=W[H]&&K.lookupProperty(W[H],$);if(U!=null)return W[H][$]}},lambda:function(W,$){return typeof W=="function"?W.call($):W},escapeExpression:C.escapeExpression,invokePartial:b,fn:function(W){var $=P[W];return $.decorator=P[W+"_d"],$},programs:[],program:function(W,$,k,H,U){var Q=this.programs[W],ne=this.fn(W);return $||U||H||k?Q=l(this,W,ne,$,k,H,U):Q||(Q=this.programs[W]=l(this,W,ne)),Q},data:function(W,$){for(;W&&$--;)W=W._parent;return W},mergeIfNeeded:function(W,$){var k=W||$;return W&&$&&W!==$&&(k=C.extend({},$,W)),k},nullContext:d({}),noop:T.VM.noop,compilerInfo:P.compiler};return F.isTop=!0,F._setup=function(W){if(W.partial)K.protoAccessControl=W.protoAccessControl,K.helpers=W.helpers,K.partials=W.partials,K.decorators=W.decorators,K.hooks=W.hooks;else{var $=C.extend({},T.helpers,W.helpers);i($,K),K.helpers=$,P.usePartial&&(K.partials=K.mergeIfNeeded(W.partials,T.partials)),(P.usePartial||P.useDecorators)&&(K.decorators=C.extend({},T.decorators,W.decorators)),K.hooks={},K.protoAccessControl=w.createProtoAccessControl(W);var k=W.allowCallsToHelperMissing||j;_.moveHelperToHooks(K,"helperMissing",k),_.moveHelperToHooks(K,"blockHelperMissing",k)}},F._child=function(W,$,k,H){if(P.useBlockParams&&!k)throw new R.default("must pass block params");if(P.useDepths&&!H)throw new R.default("must pass parent depths");return l(K,W,P[W],$,0,k,H)},F}function l(P,T,b,F,j,K,W){function $(k){var H=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],U=W;return!W||k==W[0]||k===P.nullContext&&W[0]===null||(U=[k].concat(W)),b(P,k,P.helpers,P.partials,H.data||F,K&&[H.blockParams].concat(K),U)}return $=S(b,$,P,W,F,K),$.program=T,$.depth=W?W.length:0,$.blockParams=j||0,$}function h(P,T,b){return P?P.call||b.name||(b.name=P,P=b.partials[P]):P=b.name==="@partial-block"?b.data["partial-block"]:b.partials[b.name],P}function f(P,T,b){var F=b.data&&b.data["partial-block"];b.partial=!0,b.ids&&(b.data.contextPath=b.ids[0]||b.data.contextPath);var j=void 0;if(b.fn&&b.fn!==s&&function(){b.data=x.createFrame(b.data);var K=b.fn;j=b.data["partial-block"]=function(W){var $=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return $.data=x.createFrame($.data),$.data["partial-block"]=F,K(W,$)},K.partials&&(b.partials=C.extend({},b.partials,K.partials))}(),P===void 0&&j&&(P=j),P===void 0)throw new R.default("The partial "+b.name+" could not be found");if(P instanceof Function)return P(T,b)}function s(){return""}function p(P,T){return T&&"root"in T||(T=T?x.createFrame(T):{},T.root=P),T}function S(P,T,b,F,j,K){if(P.decorator){var W={};T=P.decorator(T,W,b,F&&F[0],j,K,F),C.extend(T,W)}return T}function i(P,T){c(P).forEach(function(b){var F=P[b];P[b]=g(F,T)})}function g(P,T){var b=T.lookupProperty;return B.wrapHelper(P,function(F){return C.extend({lookupProperty:b},F)})}var d=u(79).default,c=u(60).default,y=u(3).default,v=u(1).default;r.__esModule=!0,r.checkRevision=a,r.template=n,r.wrapProgram=l,r.resolvePartial=h,r.invokePartial=f,r.noop=s;var I=u(5),C=y(I),D=u(6),R=v(D),x=u(4),_=u(10),B=u(82),w=u(73)},function(m,r,u){m.exports={default:u(80),__esModule:!0}},function(m,r,u){u(81),m.exports=u(21).Object.seal},function(m,r,u){var a=u(40);u(64)("seal",function(n){return function(l){return n&&a(l)?n(l):l}})},function(m,r){"use strict";function u(a,n){if(typeof a!="function")return a;var l=function(){var h=arguments[arguments.length-1];return arguments[arguments.length-1]=n(h),a.apply(this,arguments)};return l}r.__esModule=!0,r.wrapHelper=u},function(m,r){"use strict";r.__esModule=!0,r.default=function(u){(function(){typeof globalThis!="object"&&(Object.prototype.__defineGetter__("__magic__",function(){return this}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__)})();var a=globalThis.Handlebars;u.noConflict=function(){return globalThis.Handlebars===u&&(globalThis.Handlebars=a),u}},m.exports=r.default},function(m,r){"use strict";r.__esModule=!0;var u={helpers:{helperExpression:function(a){return a.type==="SubExpression"||(a.type==="MustacheStatement"||a.type==="BlockStatement")&&!!(a.params&&a.params.length||a.hash)},scopedId:function(a){return/^\.|this\b/.test(a.original)},simpleId:function(a){return a.parts.length===1&&!u.helpers.scopedId(a)&&!a.depth}}};r.default=u,m.exports=r.default},function(m,r,u){"use strict";function a(y,v){if(y.type==="Program")return y;s.default.yy=c,c.locInfo=function(C){return new c.SourceLocation(v&&v.srcName,C)};var I=s.default.parse(y);return I}function n(y,v){var I=a(y,v),C=new S.default(v);return C.accept(I)}var l=u(1).default,h=u(3).default;r.__esModule=!0,r.parseWithoutProcessing=a,r.parse=n;var f=u(86),s=l(f),p=u(87),S=l(p),i=u(89),g=h(i),d=u(5);r.parser=s.default;var c={};d.extend(c,g)},function(m,r){"use strict";r.__esModule=!0;var u=function(){function a(){this.yy={}}var n={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(h,f,s,p,S,i,g){var d=i.length-1;switch(S){case 1:return i[d-1];case 2:this.$=p.prepareProgram(i[d]);break;case 3:this.$=i[d];break;case 4:this.$=i[d];break;case 5:this.$=i[d];break;case 6:this.$=i[d];break;case 7:this.$=i[d];break;case 8:this.$=i[d];break;case 9:this.$={type:"CommentStatement",value:p.stripComment(i[d]),strip:p.stripFlags(i[d],i[d]),loc:p.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:i[d],value:i[d],loc:p.locInfo(this._$)};break;case 11:this.$=p.prepareRawBlock(i[d-2],i[d-1],i[d],this._$);break;case 12:this.$={path:i[d-3],params:i[d-2],hash:i[d-1]};break;case 13:this.$=p.prepareBlock(i[d-3],i[d-2],i[d-1],i[d],!1,this._$);break;case 14:this.$=p.prepareBlock(i[d-3],i[d-2],i[d-1],i[d],!0,this._$);break;case 15:this.$={open:i[d-5],path:i[d-4],params:i[d-3],hash:i[d-2],blockParams:i[d-1],strip:p.stripFlags(i[d-5],i[d])};break;case 16:this.$={path:i[d-4],params:i[d-3],hash:i[d-2],blockParams:i[d-1],strip:p.stripFlags(i[d-5],i[d])};break;case 17:this.$={path:i[d-4],params:i[d-3],hash:i[d-2],blockParams:i[d-1],strip:p.stripFlags(i[d-5],i[d])};break;case 18:this.$={strip:p.stripFlags(i[d-1],i[d-1]),program:i[d]};break;case 19:var c=p.prepareBlock(i[d-2],i[d-1],i[d],i[d],!1,this._$),y=p.prepareProgram([c],i[d-1].loc);y.chained=!0,this.$={strip:i[d-2].strip,program:y,chain:!0};break;case 20:this.$=i[d];break;case 21:this.$={path:i[d-1],strip:p.stripFlags(i[d-2],i[d])};break;case 22:this.$=p.prepareMustache(i[d-3],i[d-2],i[d-1],i[d-4],p.stripFlags(i[d-4],i[d]),this._$);break;case 23:this.$=p.prepareMustache(i[d-3],i[d-2],i[d-1],i[d-4],p.stripFlags(i[d-4],i[d]),this._$);break;case 24:this.$={type:"PartialStatement",name:i[d-3],params:i[d-2],hash:i[d-1],indent:"",strip:p.stripFlags(i[d-4],i[d]),loc:p.locInfo(this._$)};break;case 25:this.$=p.preparePartialBlock(i[d-2],i[d-1],i[d],this._$);break;case 26:this.$={path:i[d-3],params:i[d-2],hash:i[d-1],strip:p.stripFlags(i[d-4],i[d])};break;case 27:this.$=i[d];break;case 28:this.$=i[d];break;case 29:this.$={type:"SubExpression",path:i[d-3],params:i[d-2],hash:i[d-1],loc:p.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:i[d],loc:p.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:p.id(i[d-2]),value:i[d],loc:p.locInfo(this._$)};break;case 32:this.$=p.id(i[d-1]);break;case 33:this.$=i[d];break;case 34:this.$=i[d];break;case 35:this.$={type:"StringLiteral",value:i[d],original:i[d],loc:p.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(i[d]),original:Number(i[d]),loc:p.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:i[d]==="true",original:i[d]==="true",loc:p.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:p.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:p.locInfo(this._$)};break;case 40:this.$=i[d];break;case 41:this.$=i[d];break;case 42:this.$=p.preparePath(!0,i[d],this._$);break;case 43:this.$=p.preparePath(!1,i[d],this._$);break;case 44:i[d-2].push({part:p.id(i[d]),original:i[d],separator:i[d-1]}),this.$=i[d-2];break;case 45:this.$=[{part:p.id(i[d]),original:i[d]}];break;case 46:this.$=[];break;case 47:i[d-1].push(i[d]);break;case 48:this.$=[];break;case 49:i[d-1].push(i[d]);break;case 50:this.$=[];break;case 51:i[d-1].push(i[d]);break;case 58:this.$=[];break;case 59:i[d-1].push(i[d]);break;case 64:this.$=[];break;case 65:i[d-1].push(i[d]);break;case 70:this.$=[];break;case 71:i[d-1].push(i[d]);break;case 78:this.$=[];break;case 79:i[d-1].push(i[d]);break;case 82:this.$=[];break;case 83:i[d-1].push(i[d]);break;case 86:this.$=[];break;case 87:i[d-1].push(i[d]);break;case 90:this.$=[];break;case 91:i[d-1].push(i[d]);break;case 94:this.$=[];break;case 95:i[d-1].push(i[d]);break;case 98:this.$=[i[d]];break;case 99:i[d-1].push(i[d]);break;case 100:this.$=[i[d]];break;case 101:i[d-1].push(i[d])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(h,f){throw new Error(h)},parse:function(h){function f(){var K;return K=s.lexer.lex()||1,typeof K!="number"&&(K=s.symbols_[K]||K),K}var s=this,p=[0],S=[null],i=[],g=this.table,d="",c=0,y=0,v=0;this.lexer.setInput(h),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var I=this.lexer.yylloc;i.push(I);var C=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);for(var D,R,x,_,B,w,P,T,b,F={};;){if(x=p[p.length-1],this.defaultActions[x]?_=this.defaultActions[x]:(D!==null&&typeof D!="undefined"||(D=f()),_=g[x]&&g[x][D]),typeof _=="undefined"||!_.length||!_[0]){var j="";if(!v){b=[];for(w in g[x])this.terminals_[w]&&w>2&&b.push("'"+this.terminals_[w]+"'");j=this.lexer.showPosition?"Parse error on line "+(c+1)+`:
`+this.lexer.showPosition()+`
Expecting `+b.join(", ")+", got '"+(this.terminals_[D]||D)+"'":"Parse error on line "+(c+1)+": Unexpected "+(D==1?"end of input":"'"+(this.terminals_[D]||D)+"'"),this.parseError(j,{text:this.lexer.match,token:this.terminals_[D]||D,line:this.lexer.yylineno,loc:I,expected:b})}}if(_[0]instanceof Array&&_.length>1)throw new Error("Parse Error: multiple actions possible at state: "+x+", token: "+D);switch(_[0]){case 1:p.push(D),S.push(this.lexer.yytext),i.push(this.lexer.yylloc),p.push(_[1]),D=null,R?(D=R,R=null):(y=this.lexer.yyleng,d=this.lexer.yytext,c=this.lexer.yylineno,I=this.lexer.yylloc,v>0&&v--);break;case 2:if(P=this.productions_[_[1]][1],F.$=S[S.length-P],F._$={first_line:i[i.length-(P||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(P||1)].first_column,last_column:i[i.length-1].last_column},C&&(F._$.range=[i[i.length-(P||1)].range[0],i[i.length-1].range[1]]),B=this.performAction.call(F,d,y,c,this.yy,_[1],S,i),typeof B!="undefined")return B;P&&(p=p.slice(0,-1*P*2),S=S.slice(0,-1*P),i=i.slice(0,-1*P)),p.push(this.productions_[_[1]][0]),S.push(F.$),i.push(F._$),T=g[p[p.length-2]][p[p.length-1]],p.push(T);break;case 3:return!0}}return!0}},l=function(){var h={EOF:1,parseError:function(f,s){if(!this.yy.parser)throw new Error(f);this.yy.parser.parseError(f,s)},setInput:function(f){return this._input=f,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var f=this._input[0];this.yytext+=f,this.yyleng++,this.offset++,this.match+=f,this.matched+=f;var s=f.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),f},unput:function(f){var s=f.length,p=f.split(/(?:\r\n?|\n)/g);this._input=f+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s-1),this.offset-=s;var S=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),p.length-1&&(this.yylineno-=p.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:p?(p.length===S.length?this.yylloc.first_column:0)+S[S.length-p.length].length-p[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-s]),this},more:function(){return this._more=!0,this},less:function(f){this.unput(this.match.slice(f))},pastInput:function(){var f=this.matched.substr(0,this.matched.length-this.match.length);return(f.length>20?"...":"")+f.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var f=this.match;return f.length<20&&(f+=this._input.substr(0,20-f.length)),(f.substr(0,20)+(f.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var f=this.pastInput(),s=new Array(f.length+1).join("-");return f+this.upcomingInput()+`
`+s+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var f,s,p,S,i;this._more||(this.yytext="",this.match="");for(var g=this._currentRules(),d=0;d<g.length&&(p=this._input.match(this.rules[g[d]]),!p||s&&!(p[0].length>s[0].length)||(s=p,S=d,this.options.flex));d++);return s?(i=s[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],f=this.performAction.call(this,this.yy,this,g[S],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var f=this.next();return typeof f!="undefined"?f:this.lex()},begin:function(f){this.conditionStack.push(f)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(f){this.begin(f)}};return h.options={},h.performAction=function(f,s,p,S){function i(g,d){return s.yytext=s.yytext.substring(g,s.yyleng-d+g)}switch(p){case 0:if(s.yytext.slice(-2)==="\\\\"?(i(0,1),this.begin("mu")):s.yytext.slice(-1)==="\\"?(i(0,1),this.begin("emu")):this.begin("mu"),s.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(i(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(s.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return s.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return s.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return s.yytext=s.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},h.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],h.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},h}();return n.lexer=l,a.prototype=n,n.Parser=a,new a}();r.default=u,m.exports=r.default},function(m,r,u){"use strict";function a(){var i=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=i}function n(i,g,d){g===void 0&&(g=i.length);var c=i[g-1],y=i[g-2];return c?c.type==="ContentStatement"?(y||!d?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(c.original):void 0:d}function l(i,g,d){g===void 0&&(g=-1);var c=i[g+1],y=i[g+2];return c?c.type==="ContentStatement"?(y||!d?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(c.original):void 0:d}function h(i,g,d){var c=i[g==null?0:g+1];if(c&&c.type==="ContentStatement"&&(d||!c.rightStripped)){var y=c.value;c.value=c.value.replace(d?/^\s+/:/^[ \t]*\r?\n?/,""),c.rightStripped=c.value!==y}}function f(i,g,d){var c=i[g==null?i.length-1:g-1];if(c&&c.type==="ContentStatement"&&(d||!c.leftStripped)){var y=c.value;return c.value=c.value.replace(d?/\s+$/:/[ \t]+$/,""),c.leftStripped=c.value!==y,c.leftStripped}}var s=u(1).default;r.__esModule=!0;var p=u(88),S=s(p);a.prototype=new S.default,a.prototype.Program=function(i){var g=!this.options.ignoreStandalone,d=!this.isRootSeen;this.isRootSeen=!0;for(var c=i.body,y=0,v=c.length;y<v;y++){var I=c[y],C=this.accept(I);if(C){var D=n(c,y,d),R=l(c,y,d),x=C.openStandalone&&D,_=C.closeStandalone&&R,B=C.inlineStandalone&&D&&R;C.close&&h(c,y,!0),C.open&&f(c,y,!0),g&&B&&(h(c,y),f(c,y)&&I.type==="PartialStatement"&&(I.indent=/([ \t]+$)/.exec(c[y-1].original)[1])),g&&x&&(h((I.program||I.inverse).body),f(c,y)),g&&_&&(h(c,y),f((I.inverse||I.program).body))}}return i},a.prototype.BlockStatement=a.prototype.DecoratorBlock=a.prototype.PartialBlockStatement=function(i){this.accept(i.program),this.accept(i.inverse);var g=i.program||i.inverse,d=i.program&&i.inverse,c=d,y=d;if(d&&d.chained)for(c=d.body[0].program;y.chained;)y=y.body[y.body.length-1].program;var v={open:i.openStrip.open,close:i.closeStrip.close,openStandalone:l(g.body),closeStandalone:n((c||g).body)};if(i.openStrip.close&&h(g.body,null,!0),d){var I=i.inverseStrip;I.open&&f(g.body,null,!0),I.close&&h(c.body,null,!0),i.closeStrip.open&&f(y.body,null,!0),!this.options.ignoreStandalone&&n(g.body)&&l(c.body)&&(f(g.body),h(c.body))}else i.closeStrip.open&&f(g.body,null,!0);return v},a.prototype.Decorator=a.prototype.MustacheStatement=function(i){return i.strip},a.prototype.PartialStatement=a.prototype.CommentStatement=function(i){var g=i.strip||{};return{inlineStandalone:!0,open:g.open,close:g.close}},r.default=a,m.exports=r.default},function(m,r,u){"use strict";function a(){this.parents=[]}function n(S){this.acceptRequired(S,"path"),this.acceptArray(S.params),this.acceptKey(S,"hash")}function l(S){n.call(this,S),this.acceptKey(S,"program"),this.acceptKey(S,"inverse")}function h(S){this.acceptRequired(S,"name"),this.acceptArray(S.params),this.acceptKey(S,"hash")}var f=u(1).default;r.__esModule=!0;var s=u(6),p=f(s);a.prototype={constructor:a,mutating:!1,acceptKey:function(S,i){var g=this.accept(S[i]);if(this.mutating){if(g&&!a.prototype[g.type])throw new p.default('Unexpected node type "'+g.type+'" found when accepting '+i+" on "+S.type);S[i]=g}},acceptRequired:function(S,i){if(this.acceptKey(S,i),!S[i])throw new p.default(S.type+" requires "+i)},acceptArray:function(S){for(var i=0,g=S.length;i<g;i++)this.acceptKey(S,i),S[i]||(S.splice(i,1),i--,g--)},accept:function(S){if(S){if(!this[S.type])throw new p.default("Unknown type: "+S.type,S);this.current&&this.parents.unshift(this.current),this.current=S;var i=this[S.type](S);return this.current=this.parents.shift(),!this.mutating||i?i:i!==!1?S:void 0}},Program:function(S){this.acceptArray(S.body)},MustacheStatement:n,Decorator:n,BlockStatement:l,DecoratorBlock:l,PartialStatement:h,PartialBlockStatement:function(S){h.call(this,S),this.acceptKey(S,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:n,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(S){this.acceptArray(S.pairs)},HashPair:function(S){this.acceptRequired(S,"value")}},r.default=a,m.exports=r.default},function(m,r,u){"use strict";function a(I,C){if(C=C.path?C.path.original:C,I.path.original!==C){var D={loc:I.path.loc};throw new v.default(I.path.original+" doesn't match "+C,D)}}function n(I,C){this.source=I,this.start={line:C.first_line,column:C.first_column},this.end={line:C.last_line,column:C.last_column}}function l(I){return/^\[.*\]$/.test(I)?I.substring(1,I.length-1):I}function h(I,C){return{open:I.charAt(2)==="~",close:C.charAt(C.length-3)==="~"}}function f(I){return I.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function s(I,C,D){D=this.locInfo(D);for(var R=I?"@":"",x=[],_=0,B=0,w=C.length;B<w;B++){var P=C[B].part,T=C[B].original!==P;if(R+=(C[B].separator||"")+P,T||P!==".."&&P!=="."&&P!=="this")x.push(P);else{if(x.length>0)throw new v.default("Invalid path: "+R,{loc:D});P===".."&&_++}}return{type:"PathExpression",data:I,depth:_,parts:x,original:R,loc:D}}function p(I,C,D,R,x,_){var B=R.charAt(3)||R.charAt(2),w=B!=="{"&&B!=="&",P=/\*/.test(R);return{type:P?"Decorator":"MustacheStatement",path:I,params:C,hash:D,escaped:w,strip:x,loc:this.locInfo(_)}}function S(I,C,D,R){a(I,D),R=this.locInfo(R);var x={type:"Program",body:C,strip:{},loc:R};return{type:"BlockStatement",path:I.path,params:I.params,hash:I.hash,program:x,openStrip:{},inverseStrip:{},closeStrip:{},loc:R}}function i(I,C,D,R,x,_){R&&R.path&&a(I,R);var B=/\*/.test(I.open);C.blockParams=I.blockParams;var w=void 0,P=void 0;if(D){if(B)throw new v.default("Unexpected inverse block on decorator",D);D.chain&&(D.program.body[0].closeStrip=R.strip),P=D.strip,w=D.program}return x&&(x=w,w=C,C=x),{type:B?"DecoratorBlock":"BlockStatement",path:I.path,params:I.params,hash:I.hash,program:C,inverse:w,openStrip:I.strip,inverseStrip:P,closeStrip:R&&R.strip,loc:this.locInfo(_)}}function g(I,C){if(!C&&I.length){var D=I[0].loc,R=I[I.length-1].loc;D&&R&&(C={source:D.source,start:{line:D.start.line,column:D.start.column},end:{line:R.end.line,column:R.end.column}})}return{type:"Program",body:I,strip:{},loc:C}}function d(I,C,D,R){return a(I,D),{type:"PartialBlockStatement",name:I.path,params:I.params,hash:I.hash,program:C,openStrip:I.strip,closeStrip:D&&D.strip,loc:this.locInfo(R)}}var c=u(1).default;r.__esModule=!0,r.SourceLocation=n,r.id=l,r.stripFlags=h,r.stripComment=f,r.preparePath=s,r.prepareMustache=p,r.prepareRawBlock=S,r.prepareBlock=i,r.prepareProgram=g,r.preparePartialBlock=d;var y=u(6),v=c(y)},function(m,r,u){"use strict";function a(){}function n(v,I,C){if(v==null||typeof v!="string"&&v.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+v);I=I||{},"data"in I||(I.data=!0),I.compat&&(I.useDepths=!0);var D=C.parse(v,I),R=new C.Compiler().compile(D,I);return new C.JavaScriptCompiler().compile(R,I)}function l(v,I,C){function D(){var _=C.parse(v,I),B=new C.Compiler().compile(_,I),w=new C.JavaScriptCompiler().compile(B,I,void 0,!0);return C.template(w)}function R(_,B){return x||(x=D()),x.call(this,_,B)}if(I===void 0&&(I={}),v==null||typeof v!="string"&&v.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+v);I=g.extend({},I),"data"in I||(I.data=!0),I.compat&&(I.useDepths=!0);var x=void 0;return R._setup=function(_){return x||(x=D()),x._setup(_)},R._child=function(_,B,w,P){return x||(x=D()),x._child(_,B,w,P)},R}function h(v,I){if(v===I)return!0;if(g.isArray(v)&&g.isArray(I)&&v.length===I.length){for(var C=0;C<v.length;C++)if(!h(v[C],I[C]))return!1;return!0}}function f(v){if(!v.path.parts){var I=v.path;v.path={type:"PathExpression",data:!1,depth:0,parts:[I.original+""],original:I.original+"",loc:I.loc}}}var s=u(74).default,p=u(1).default;r.__esModule=!0,r.Compiler=a,r.precompile=n,r.compile=l;var S=u(6),i=p(S),g=u(5),d=u(84),c=p(d),y=[].slice;a.prototype={compiler:a,equals:function(v){var I=this.opcodes.length;if(v.opcodes.length!==I)return!1;for(var C=0;C<I;C++){var D=this.opcodes[C],R=v.opcodes[C];if(D.opcode!==R.opcode||!h(D.args,R.args))return!1}I=this.children.length;for(var C=0;C<I;C++)if(!this.children[C].equals(v.children[C]))return!1;return!0},guid:0,compile:function(v,I){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=I,this.stringParams=I.stringParams,this.trackIds=I.trackIds,I.blockParams=I.blockParams||[],I.knownHelpers=g.extend(s(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},I.knownHelpers),this.accept(v)},compileProgram:function(v){var I=new this.compiler,C=I.compile(v,this.options),D=this.guid++;return this.usePartial=this.usePartial||C.usePartial,this.children[D]=C,this.useDepths=this.useDepths||C.useDepths,D},accept:function(v){if(!this[v.type])throw new i.default("Unknown type: "+v.type,v);this.sourceNode.unshift(v);var I=this[v.type](v);return this.sourceNode.shift(),I},Program:function(v){this.options.blockParams.unshift(v.blockParams);for(var I=v.body,C=I.length,D=0;D<C;D++)this.accept(I[D]);return this.options.blockParams.shift(),this.isSimple=C===1,this.blockParams=v.blockParams?v.blockParams.length:0,this},BlockStatement:function(v){f(v);var I=v.program,C=v.inverse;I=I&&this.compileProgram(I),C=C&&this.compileProgram(C);var D=this.classifySexpr(v);D==="helper"?this.helperSexpr(v,I,C):D==="simple"?(this.simpleSexpr(v),this.opcode("pushProgram",I),this.opcode("pushProgram",C),this.opcode("emptyHash"),this.opcode("blockValue",v.path.original)):(this.ambiguousSexpr(v,I,C),this.opcode("pushProgram",I),this.opcode("pushProgram",C),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(v){var I=v.program&&this.compileProgram(v.program),C=this.setupFullMustacheParams(v,I,void 0),D=v.path;this.useDecorators=!0,this.opcode("registerDecorator",C.length,D.original)},PartialStatement:function(v){this.usePartial=!0;var I=v.program;I&&(I=this.compileProgram(v.program));var C=v.params;if(C.length>1)throw new i.default("Unsupported number of partial arguments: "+C.length,v);C.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):C.push({type:"PathExpression",parts:[],depth:0}));var D=v.name.original,R=v.name.type==="SubExpression";R&&this.accept(v.name),this.setupFullMustacheParams(v,I,void 0,!0);var x=v.indent||"";this.options.preventIndent&&x&&(this.opcode("appendContent",x),x=""),this.opcode("invokePartial",R,D,x),this.opcode("append")},PartialBlockStatement:function(v){this.PartialStatement(v)},MustacheStatement:function(v){this.SubExpression(v),v.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(v){this.DecoratorBlock(v)},ContentStatement:function(v){v.value&&this.opcode("appendContent",v.value)},CommentStatement:function(){},SubExpression:function(v){f(v);var I=this.classifySexpr(v);I==="simple"?this.simpleSexpr(v):I==="helper"?this.helperSexpr(v):this.ambiguousSexpr(v)},ambiguousSexpr:function(v,I,C){var D=v.path,R=D.parts[0],x=I!=null||C!=null;this.opcode("getContext",D.depth),this.opcode("pushProgram",I),this.opcode("pushProgram",C),D.strict=!0,this.accept(D),this.opcode("invokeAmbiguous",R,x)},simpleSexpr:function(v){var I=v.path;I.strict=!0,this.accept(I),this.opcode("resolvePossibleLambda")},helperSexpr:function(v,I,C){var D=this.setupFullMustacheParams(v,I,C),R=v.path,x=R.parts[0];if(this.options.knownHelpers[x])this.opcode("invokeKnownHelper",D.length,x);else{if(this.options.knownHelpersOnly)throw new i.default("You specified knownHelpersOnly, but used the unknown helper "+x,v);R.strict=!0,R.falsy=!0,this.accept(R),this.opcode("invokeHelper",D.length,R.original,c.default.helpers.simpleId(R))}},PathExpression:function(v){this.addDepth(v.depth),this.opcode("getContext",v.depth);var I=v.parts[0],C=c.default.helpers.scopedId(v),D=!v.depth&&!C&&this.blockParamIndex(I);D?this.opcode("lookupBlockParam",D,v.parts):I?v.data?(this.options.data=!0,this.opcode("lookupData",v.depth,v.parts,v.strict)):this.opcode("lookupOnContext",v.parts,v.falsy,v.strict,C):this.opcode("pushContext")},StringLiteral:function(v){this.opcode("pushString",v.value)},NumberLiteral:function(v){this.opcode("pushLiteral",v.value)},BooleanLiteral:function(v){this.opcode("pushLiteral",v.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(v){var I=v.pairs,C=0,D=I.length;for(this.opcode("pushHash");C<D;C++)this.pushParam(I[C].value);for(;C--;)this.opcode("assignToHash",I[C].key);this.opcode("popHash")},opcode:function(v){this.opcodes.push({opcode:v,args:y.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(v){v&&(this.useDepths=!0)},classifySexpr:function(v){var I=c.default.helpers.simpleId(v.path),C=I&&!!this.blockParamIndex(v.path.parts[0]),D=!C&&c.default.helpers.helperExpression(v),R=!C&&(D||I);if(R&&!D){var x=v.path.parts[0],_=this.options;_.knownHelpers[x]?D=!0:_.knownHelpersOnly&&(R=!1)}return D?"helper":R?"ambiguous":"simple"},pushParams:function(v){for(var I=0,C=v.length;I<C;I++)this.pushParam(v[I])},pushParam:function(v){var I=v.value!=null?v.value:v.original||"";if(this.stringParams)I.replace&&(I=I.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),v.depth&&this.addDepth(v.depth),this.opcode("getContext",v.depth||0),this.opcode("pushStringParam",I,v.type),v.type==="SubExpression"&&this.accept(v);else{if(this.trackIds){var C=void 0;if(!v.parts||c.default.helpers.scopedId(v)||v.depth||(C=this.blockParamIndex(v.parts[0])),C){var D=v.parts.slice(1).join(".");this.opcode("pushId","BlockParam",C,D)}else I=v.original||I,I.replace&&(I=I.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",v.type,I)}this.accept(v)}},setupFullMustacheParams:function(v,I,C,D){var R=v.params;return this.pushParams(R),this.opcode("pushProgram",I),this.opcode("pushProgram",C),v.hash?this.accept(v.hash):this.opcode("emptyHash",D),R},blockParamIndex:function(v){for(var I=0,C=this.options.blockParams.length;I<C;I++){var D=this.options.blockParams[I],R=D&&g.indexOf(D,v);if(D&&R>=0)return[I,R]}}}},function(m,r,u){"use strict";function a(c){this.value=c}function n(){}function l(c,y,v,I,C){var D=y.popStack(),R=v.length;for(c&&R--;I<R;I++)D=y.nameLookup(D,v[I],C);return c?[y.aliasable("container.strict"),"(",D,", ",y.quotedString(v[I]),", ",JSON.stringify(y.source.currentLocation)," )"]:D}var h=u(60).default,f=u(1).default;r.__esModule=!0;var s=u(4),p=u(6),S=f(p),i=u(5),g=u(92),d=f(g);n.prototype={nameLookup:function(c,y){return this.internalNameLookup(c,y)},depthedLookup:function(c){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(c),")"]},compilerInfo:function(){var c=s.COMPILER_REVISION,y=s.REVISION_CHANGES[c];return[c,y]},appendToBuffer:function(c,y,v){return i.isArray(c)||(c=[c]),c=this.source.wrap(c,y),this.environment.isSimple?["return ",c,";"]:v?["buffer += ",c,";"]:(c.appendToBuffer=!0,c)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(c,y){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",c,",",JSON.stringify(y),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(c,y,v,I){this.environment=c,this.options=y,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!I,this.name=this.environment.name,this.isChild=!!v,this.context=v||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(c,y),this.useDepths=this.useDepths||c.useDepths||c.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||c.useBlockParams;var C=c.opcodes,D=void 0,R=void 0,x=void 0,_=void 0;for(x=0,_=C.length;x<_;x++)D=C[x],this.source.currentLocation=D.loc,R=R||D.loc,this[D.opcode].apply(this,D.args);if(this.source.currentLocation=R,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new S.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),I?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var B=this.createFunctionContext(I);if(this.isChild)return B;var w={compiler:this.compilerInfo(),main:B};this.decorators&&(w.main_d=this.decorators,w.useDecorators=!0);var P=this.context,T=P.programs,b=P.decorators;for(x=0,_=T.length;x<_;x++)T[x]&&(w[x]=T[x],b[x]&&(w[x+"_d"]=b[x],w.useDecorators=!0));return this.environment.usePartial&&(w.usePartial=!0),this.options.data&&(w.useData=!0),this.useDepths&&(w.useDepths=!0),this.useBlockParams&&(w.useBlockParams=!0),this.options.compat&&(w.compat=!0),I?w.compilerOptions=this.options:(w.compiler=JSON.stringify(w.compiler),this.source.currentLocation={start:{line:1,column:0}},w=this.objectLiteral(w),y.srcName?(w=w.toStringWithSourceMap({file:y.destName}),w.map=w.map&&w.map.toString()):w=w.toString()),w},preamble:function(){this.lastContext=0,this.source=new d.default(this.options.srcName),this.decorators=new d.default(this.options.srcName)},createFunctionContext:function(c){var y=this,v="",I=this.stackVars.concat(this.registers.list);I.length>0&&(v+=", "+I.join(", "));var C=0;h(this.aliases).forEach(function(x){var _=y.aliases[x];_.children&&_.referenceCount>1&&(v+=", alias"+ ++C+"="+x,_.children[0]="alias"+C)}),this.lookupPropertyFunctionIsUsed&&(v+=", "+this.lookupPropertyFunctionVarDeclaration());var D=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&D.push("blockParams"),this.useDepths&&D.push("depths");var R=this.mergeSource(v);return c?(D.push(R),Function.apply(this,D)):this.source.wrap(["function(",D.join(","),`) {
  `,R,"}"])},mergeSource:function(c){var y=this.environment.isSimple,v=!this.forceBuffer,I=void 0,C=void 0,D=void 0,R=void 0;return this.source.each(function(x){x.appendToBuffer?(D?x.prepend("  + "):D=x,R=x):(D&&(C?D.prepend("buffer += "):I=!0,R.add(";"),D=R=void 0),C=!0,y||(v=!1))}),v?D?(D.prepend("return "),R.add(";")):C||this.source.push('return "";'):(c+=", buffer = "+(I?"":this.initializeBuffer()),D?(D.prepend("return buffer + "),R.add(";")):this.source.push("return buffer;")),c&&this.source.prepend("var "+c.substring(2)+(I?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(c){var y=this.aliasable("container.hooks.blockHelperMissing"),v=[this.contextName(0)];this.setupHelperArgs(c,0,v);var I=this.popStack();v.splice(1,0,I),this.push(this.source.functionCall(y,"call",v))},ambiguousBlockValue:function(){var c=this.aliasable("container.hooks.blockHelperMissing"),y=[this.contextName(0)];this.setupHelperArgs("",0,y,!0),this.flushInline();var v=this.topStack();y.splice(1,0,v),this.pushSource(["if (!",this.lastHelper,") { ",v," = ",this.source.functionCall(c,"call",y),"}"])},appendContent:function(c){this.pendingContent?c=this.pendingContent+c:this.pendingLocation=this.source.currentLocation,this.pendingContent=c},append:function(){if(this.isInline())this.replaceStack(function(y){return[" != null ? ",y,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var c=this.popStack();this.pushSource(["if (",c," != null) { ",this.appendToBuffer(c,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(c){this.lastContext=c},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(c,y,v,I){var C=0;I||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(c[C++])),this.resolvePath("context",c,C,y,v)},lookupBlockParam:function(c,y){this.useBlockParams=!0,this.push(["blockParams[",c[0],"][",c[1],"]"]),this.resolvePath("context",y,1)},lookupData:function(c,y,v){c?this.pushStackLiteral("container.data(data, "+c+")"):this.pushStackLiteral("data"),this.resolvePath("data",y,0,!0,v)},resolvePath:function(c,y,v,I,C){var D=this;if(this.options.strict||this.options.assumeObjects)return void this.push(l(this.options.strict&&C,this,y,v,c));for(var R=y.length;v<R;v++)this.replaceStack(function(x){var _=D.nameLookup(x,y[v],c);return I?[" && ",_]:[" != null ? ",_," : ",x]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(c,y){this.pushContext(),this.pushString(y),y!=="SubExpression"&&(typeof c=="string"?this.pushString(c):this.pushStackLiteral(c))},emptyHash:function(c){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(c?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var c=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(c.ids)),this.stringParams&&(this.push(this.objectLiteral(c.contexts)),this.push(this.objectLiteral(c.types))),this.push(this.objectLiteral(c.values))},pushString:function(c){this.pushStackLiteral(this.quotedString(c))},pushLiteral:function(c){this.pushStackLiteral(c)},pushProgram:function(c){c!=null?this.pushStackLiteral(this.programExpression(c)):this.pushStackLiteral(null)},registerDecorator:function(c,y){var v=this.nameLookup("decorators",y,"decorator"),I=this.setupHelperArgs(y,c);this.decorators.push(["fn = ",this.decorators.functionCall(v,"",["fn","props","container",I])," || fn;"])},invokeHelper:function(c,y,v){var I=this.popStack(),C=this.setupHelper(c,y),D=[];v&&D.push(C.name),D.push(I),this.options.strict||D.push(this.aliasable("container.hooks.helperMissing"));var R=["(",this.itemsSeparatedBy(D,"||"),")"],x=this.source.functionCall(R,"call",C.callParams);this.push(x)},itemsSeparatedBy:function(c,y){var v=[];v.push(c[0]);for(var I=1;I<c.length;I++)v.push(y,c[I]);return v},invokeKnownHelper:function(c,y){var v=this.setupHelper(c,y);this.push(this.source.functionCall(v.name,"call",v.callParams))},invokeAmbiguous:function(c,y){this.useRegister("helper");var v=this.popStack();this.emptyHash();var I=this.setupHelper(0,c,y),C=this.lastHelper=this.nameLookup("helpers",c,"helper"),D=["(","(helper = ",C," || ",v,")"];this.options.strict||(D[0]="(helper = ",D.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",D,I.paramsInit?["),(",I.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",I.callParams)," : helper))"])},invokePartial:function(c,y,v){var I=[],C=this.setupParams(y,1,I);c&&(y=this.popStack(),delete C.name),v&&(C.indent=JSON.stringify(v)),C.helpers="helpers",C.partials="partials",C.decorators="container.decorators",c?I.unshift(y):I.unshift(this.nameLookup("partials",y,"partial")),this.options.compat&&(C.depths="depths"),C=this.objectLiteral(C),I.push(C),this.push(this.source.functionCall("container.invokePartial","",I))},assignToHash:function(c){var y=this.popStack(),v=void 0,I=void 0,C=void 0;this.trackIds&&(C=this.popStack()),this.stringParams&&(I=this.popStack(),v=this.popStack());var D=this.hash;v&&(D.contexts[c]=v),I&&(D.types[c]=I),C&&(D.ids[c]=C),D.values[c]=y},pushId:function(c,y,v){c==="BlockParam"?this.pushStackLiteral("blockParams["+y[0]+"].path["+y[1]+"]"+(v?" + "+JSON.stringify("."+v):"")):c==="PathExpression"?this.pushString(y):c==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:n,compileChildren:function(c,y){for(var v=c.children,I=void 0,C=void 0,D=0,R=v.length;D<R;D++){I=v[D],C=new this.compiler;var x=this.matchExistingProgram(I);if(x==null){this.context.programs.push("");var _=this.context.programs.length;I.index=_,I.name="program"+_,this.context.programs[_]=C.compile(I,y,this.context,!this.precompile),this.context.decorators[_]=C.decorators,this.context.environments[_]=I,this.useDepths=this.useDepths||C.useDepths,this.useBlockParams=this.useBlockParams||C.useBlockParams,I.useDepths=this.useDepths,I.useBlockParams=this.useBlockParams}else I.index=x.index,I.name="program"+x.index,this.useDepths=this.useDepths||x.useDepths,this.useBlockParams=this.useBlockParams||x.useBlockParams}},matchExistingProgram:function(c){for(var y=0,v=this.context.environments.length;y<v;y++){var I=this.context.environments[y];if(I&&I.equals(c))return I}},programExpression:function(c){var y=this.environment.children[c],v=[y.index,"data",y.blockParams];return(this.useBlockParams||this.useDepths)&&v.push("blockParams"),this.useDepths&&v.push("depths"),"container.program("+v.join(", ")+")"},useRegister:function(c){this.registers[c]||(this.registers[c]=!0,this.registers.list.push(c))},push:function(c){return c instanceof a||(c=this.source.wrap(c)),this.inlineStack.push(c),c},pushStackLiteral:function(c){this.push(new a(c))},pushSource:function(c){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),c&&this.source.push(c)},replaceStack:function(c){var y=["("],v=void 0,I=void 0,C=void 0;if(!this.isInline())throw new S.default("replaceStack on non-inline");var D=this.popStack(!0);if(D instanceof a)v=[D.value],y=["(",v],C=!0;else{I=!0;var R=this.incrStack();y=["((",this.push(R)," = ",D,")"],v=this.topStack()}var x=c.call(this,v);C||this.popStack(),I&&this.stackSlot--,this.push(y.concat(x,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var c=this.inlineStack;this.inlineStack=[];for(var y=0,v=c.length;y<v;y++){var I=c[y];if(I instanceof a)this.compileStack.push(I);else{var C=this.incrStack();this.pushSource([C," = ",I,";"]),this.compileStack.push(C)}}},isInline:function(){return this.inlineStack.length},popStack:function(c){var y=this.isInline(),v=(y?this.inlineStack:this.compileStack).pop();if(!c&&v instanceof a)return v.value;if(!y){if(!this.stackSlot)throw new S.default("Invalid stack pop");this.stackSlot--}return v},topStack:function(){var c=this.isInline()?this.inlineStack:this.compileStack,y=c[c.length-1];return y instanceof a?y.value:y},contextName:function(c){return this.useDepths&&c?"depths["+c+"]":"depth"+c},quotedString:function(c){return this.source.quotedString(c)},objectLiteral:function(c){return this.source.objectLiteral(c)},aliasable:function(c){var y=this.aliases[c];return y?(y.referenceCount++,y):(y=this.aliases[c]=this.source.wrap(c),y.aliasable=!0,y.referenceCount=1,y)},setupHelper:function(c,y,v){var I=[],C=this.setupHelperArgs(y,c,I,v),D=this.nameLookup("helpers",y,"helper"),R=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:I,paramsInit:C,name:D,callParams:[R].concat(I)}},setupParams:function(c,y,v){var I={},C=[],D=[],R=[],x=!v,_=void 0;x&&(v=[]),I.name=this.quotedString(c),I.hash=this.popStack(),this.trackIds&&(I.hashIds=this.popStack()),this.stringParams&&(I.hashTypes=this.popStack(),I.hashContexts=this.popStack());var B=this.popStack(),w=this.popStack();(w||B)&&(I.fn=w||"container.noop",I.inverse=B||"container.noop");for(var P=y;P--;)_=this.popStack(),v[P]=_,this.trackIds&&(R[P]=this.popStack()),this.stringParams&&(D[P]=this.popStack(),C[P]=this.popStack());return x&&(I.args=this.source.generateArray(v)),this.trackIds&&(I.ids=this.source.generateArray(R)),this.stringParams&&(I.types=this.source.generateArray(D),I.contexts=this.source.generateArray(C)),this.options.data&&(I.data="data"),this.useBlockParams&&(I.blockParams="blockParams"),I},setupHelperArgs:function(c,y,v,I){var C=this.setupParams(c,y,v);return C.loc=JSON.stringify(this.source.currentLocation),C=this.objectLiteral(C),I?(this.useRegister("options"),v.push("options"),["options=",C]):v?(v.push(C),""):C}},function(){for(var c="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),y=n.RESERVED_WORDS={},v=0,I=c.length;v<I;v++)y[c[v]]=!0}(),n.isValidJavaScriptVariableName=function(c){return!n.RESERVED_WORDS[c]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(c)},r.default=n,m.exports=r.default},function(m,r,u){"use strict";function a(s,p,S){if(h.isArray(s)){for(var i=[],g=0,d=s.length;g<d;g++)i.push(p.wrap(s[g],S));return i}return typeof s=="boolean"||typeof s=="number"?s+"":s}function n(s){this.srcFile=s,this.source=[]}var l=u(60).default;r.__esModule=!0;var h=u(5),f=void 0;try{}catch(s){}f||(f=function(s,p,S,i){this.src="",i&&this.add(i)},f.prototype={add:function(s){h.isArray(s)&&(s=s.join("")),this.src+=s},prepend:function(s){h.isArray(s)&&(s=s.join("")),this.src=s+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),n.prototype={isEmpty:function(){return!this.source.length},prepend:function(s,p){this.source.unshift(this.wrap(s,p))},push:function(s,p){this.source.push(this.wrap(s,p))},merge:function(){var s=this.empty();return this.each(function(p){s.add(["  ",p,`
`])}),s},each:function(s){for(var p=0,S=this.source.length;p<S;p++)s(this.source[p])},empty:function(){var s=this.currentLocation||{start:{}};return new f(s.start.line,s.start.column,this.srcFile)},wrap:function(s){var p=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return s instanceof f?s:(s=a(s,this,p),new f(p.start.line,p.start.column,this.srcFile,s))},functionCall:function(s,p,S){return S=this.generateList(S),this.wrap([s,p?"."+p+"(":"(",S,")"])},quotedString:function(s){return'"'+(s+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(s){var p=this,S=[];l(s).forEach(function(g){var d=a(s[g],p);d!=="undefined"&&S.push([p.quotedString(g),":",d])});var i=this.generateList(S);return i.prepend("{"),i.add("}"),i},generateList:function(s){for(var p=this.empty(),S=0,i=s.length;S<i;S++)S&&p.add(","),p.add(a(s[S],this));return p},generateArray:function(s){var p=this.generateList(s);return p.prepend("["),p.add("]"),p}},r.default=n,m.exports=r.default}])})},3926:(E,m,r)=>{var u,a;u=[r(1047),r(3187),r(3938),r(335),r(1448),r(3904),r(7025),r(6456),r(8342),r(4997),r(1843),r(4364)],a=function(n,l,h,f,s,p,S){"use strict";var i=/%20/g,g=/#.*$/,d=/([?&])_=[^&]*/,c=/^(.*?):[ \t]*([^\r\n]*)$/mg,y=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,v=/^(?:GET|HEAD)$/,I=/^\/\//,C={},D={},R="*/".concat("*"),x=l.createElement("a");x.href=s.href;function _(b){return function(F,j){typeof F!="string"&&(j=F,F="*");var K,W=0,$=F.toLowerCase().match(f)||[];if(h(j))for(;K=$[W++];)K[0]==="+"?(K=K.slice(1)||"*",(b[K]=b[K]||[]).unshift(j)):(b[K]=b[K]||[]).push(j)}}function B(b,F,j,K){var W={},$=b===D;function k(H){var U;return W[H]=!0,n.each(b[H]||[],function(Q,ne){var ie=ne(F,j,K);if(typeof ie=="string"&&!$&&!W[ie])return F.dataTypes.unshift(ie),k(ie),!1;if($)return!(U=ie)}),U}return k(F.dataTypes[0])||!W["*"]&&k("*")}function w(b,F){var j,K,W=n.ajaxSettings.flatOptions||{};for(j in F)F[j]!==void 0&&((W[j]?b:K||(K={}))[j]=F[j]);return K&&n.extend(!0,b,K),b}function P(b,F,j){for(var K,W,$,k,H=b.contents,U=b.dataTypes;U[0]==="*";)U.shift(),K===void 0&&(K=b.mimeType||F.getResponseHeader("Content-Type"));if(K){for(W in H)if(H[W]&&H[W].test(K)){U.unshift(W);break}}if(U[0]in j)$=U[0];else{for(W in j){if(!U[0]||b.converters[W+" "+U[0]]){$=W;break}k||(k=W)}$=$||k}if($)return $!==U[0]&&U.unshift($),j[$]}function T(b,F,j,K){var W,$,k,H,U,Q={},ne=b.dataTypes.slice();if(ne[1])for(k in b.converters)Q[k.toLowerCase()]=b.converters[k];for($=ne.shift();$;)if(b.responseFields[$]&&(j[b.responseFields[$]]=F),!U&&K&&b.dataFilter&&(F=b.dataFilter(F,b.dataType)),U=$,$=ne.shift(),$){if($==="*")$=U;else if(U!=="*"&&U!==$){if(k=Q[U+" "+$]||Q["* "+$],!k){for(W in Q)if(H=W.split(" "),H[1]===$&&(k=Q[U+" "+H[0]]||Q["* "+H[0]],k)){k===!0?k=Q[W]:Q[W]!==!0&&($=H[0],ne.unshift(H[1]));break}}if(k!==!0)if(k&&b.throws)F=k(F);else try{F=k(F)}catch(ie){return{state:"parsererror",error:k?ie:"No conversion from "+U+" to "+$}}}}return{state:"success",data:F}}return n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:s.href,type:"GET",isLocal:y.test(s.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":R,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(b,F){return F?w(w(b,n.ajaxSettings),F):w(n.ajaxSettings,b)},ajaxPrefilter:_(C),ajaxTransport:_(D),ajax:function(b,F){typeof b=="object"&&(F=b,b=void 0),F=F||{};var j,K,W,$,k,H,U,Q,ne,ie,J=n.ajaxSetup({},F),ge=J.context||J,ye=J.context&&(ge.nodeType||ge.jquery)?n(ge):n.event,Ce=n.Deferred(),Be=n.Callbacks("once memory"),it=J.statusCode||{},yt={},Dt={},Pt="canceled",de={readyState:0,getResponseHeader:function(Ie){var ke;if(U){if(!$)for($={};ke=c.exec(W);)$[ke[1].toLowerCase()+" "]=($[ke[1].toLowerCase()+" "]||[]).concat(ke[2]);ke=$[Ie.toLowerCase()+" "]}return ke==null?null:ke.join(", ")},getAllResponseHeaders:function(){return U?W:null},setRequestHeader:function(Ie,ke){return U==null&&(Ie=Dt[Ie.toLowerCase()]=Dt[Ie.toLowerCase()]||Ie,yt[Ie]=ke),this},overrideMimeType:function(Ie){return U==null&&(J.mimeType=Ie),this},statusCode:function(Ie){var ke;if(Ie)if(U)de.always(Ie[de.status]);else for(ke in Ie)it[ke]=[it[ke],Ie[ke]];return this},abort:function(Ie){var ke=Ie||Pt;return j&&j.abort(ke),Ne(0,ke),this}};if(Ce.promise(de),J.url=((b||J.url||s.href)+"").replace(I,s.protocol+"//"),J.type=F.method||F.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(f)||[""],J.crossDomain==null){H=l.createElement("a");try{H.href=J.url,H.href=H.href,J.crossDomain=x.protocol+"//"+x.host!=H.protocol+"//"+H.host}catch(Ie){J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=n.param(J.data,J.traditional)),B(C,J,F,de),U)return de;Q=n.event&&J.global,Q&&n.active++===0&&n.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!v.test(J.type),K=J.url.replace(g,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace(i,"+")):(ie=J.url.slice(K.length),J.data&&(J.processData||typeof J.data=="string")&&(K+=(S.test(K)?"&":"?")+J.data,delete J.data),J.cache===!1&&(K=K.replace(d,"$1"),ie=(S.test(K)?"&":"?")+"_="+p.guid+++ie),J.url=K+ie),J.ifModified&&(n.lastModified[K]&&de.setRequestHeader("If-Modified-Since",n.lastModified[K]),n.etag[K]&&de.setRequestHeader("If-None-Match",n.etag[K])),(J.data&&J.hasContent&&J.contentType!==!1||F.contentType)&&de.setRequestHeader("Content-Type",J.contentType),de.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+R+"; q=0.01":""):J.accepts["*"]);for(ne in J.headers)de.setRequestHeader(ne,J.headers[ne]);if(J.beforeSend&&(J.beforeSend.call(ge,de,J)===!1||U))return de.abort();if(Pt="abort",Be.add(J.complete),de.done(J.success),de.fail(J.error),j=B(D,J,F,de),!j)Ne(-1,"No Transport");else{if(de.readyState=1,Q&&ye.trigger("ajaxSend",[de,J]),U)return de;J.async&&J.timeout>0&&(k=window.setTimeout(function(){de.abort("timeout")},J.timeout));try{U=!1,j.send(yt,Ne)}catch(Ie){if(U)throw Ie;Ne(-1,Ie)}}function Ne(Ie,ke,ht,Ut){var tt,Me,fe,we,Te,X=ke;U||(U=!0,k&&window.clearTimeout(k),j=void 0,W=Ut||"",de.readyState=Ie>0?4:0,tt=Ie>=200&&Ie<300||Ie===304,ht&&(we=P(J,de,ht)),!tt&&n.inArray("script",J.dataTypes)>-1&&n.inArray("json",J.dataTypes)<0&&(J.converters["text script"]=function(){}),we=T(J,we,de,tt),tt?(J.ifModified&&(Te=de.getResponseHeader("Last-Modified"),Te&&(n.lastModified[K]=Te),Te=de.getResponseHeader("etag"),Te&&(n.etag[K]=Te)),Ie===204||J.type==="HEAD"?X="nocontent":Ie===304?X="notmodified":(X=we.state,Me=we.data,fe=we.error,tt=!fe)):(fe=X,(Ie||!X)&&(X="error",Ie<0&&(Ie=0))),de.status=Ie,de.statusText=(ke||X)+"",tt?Ce.resolveWith(ge,[Me,X,de]):Ce.rejectWith(ge,[de,X,fe]),de.statusCode(it),it=void 0,Q&&ye.trigger(tt?"ajaxSuccess":"ajaxError",[de,J,tt?Me:fe]),Be.fireWith(ge,[de,X]),Q&&(ye.trigger("ajaxComplete",[de,J]),--n.active||n.event.trigger("ajaxStop")))}return de},getJSON:function(b,F,j){return n.get(b,F,j,"json")},getScript:function(b,F){return n.get(b,void 0,F,"script")}}),n.each(["get","post"],function(b,F){n[F]=function(j,K,W,$){return h(K)&&($=$||W,W=K,K=void 0),n.ajax(n.extend({url:j,type:F,dataType:$,data:K,success:W},n.isPlainObject(j)&&j))}}),n.ajaxPrefilter(function(b){var F;for(F in b.headers)F.toLowerCase()==="content-type"&&(b.contentType=b.headers[F]||"")}),n}.apply(m,u),a!==void 0&&(E.exports=a)},767:(E,m,r)=>{var u,a;u=[r(1047),r(3938),r(3904),r(7025),r(3926)],a=function(n,l,h,f){"use strict";var s=[],p=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var S=s.pop()||n.expando+"_"+h.guid++;return this[S]=!0,S}}),n.ajaxPrefilter("json jsonp",function(S,i,g){var d,c,y,v=S.jsonp!==!1&&(p.test(S.url)?"url":typeof S.data=="string"&&(S.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&p.test(S.data)&&"data");if(v||S.dataTypes[0]==="jsonp")return d=S.jsonpCallback=l(S.jsonpCallback)?S.jsonpCallback():S.jsonpCallback,v?S[v]=S[v].replace(p,"$1"+d):S.jsonp!==!1&&(S.url+=(f.test(S.url)?"&":"?")+S.jsonp+"="+d),S.converters["script json"]=function(){return y||n.error(d+" was not called"),y[0]},S.dataTypes[0]="json",c=window[d],window[d]=function(){y=arguments},g.always(function(){c===void 0?n(window).removeProp(d):window[d]=c,S[d]&&(S.jsonpCallback=i.jsonpCallback,s.push(d)),y&&l(c)&&c(y[0]),y=c=void 0}),"script"})}.apply(m,u),a!==void 0&&(E.exports=a)},4289:(E,m,r)=>{var u,a;u=[r(1047),r(7078),r(3938),r(2042),r(3926),r(4477),r(7897),r(5037)],a=function(n,l,h){"use strict";n.fn.load=function(f,s,p){var S,i,g,d=this,c=f.indexOf(" ");return c>-1&&(S=l(f.slice(c)),f=f.slice(0,c)),h(s)?(p=s,s=void 0):s&&typeof s=="object"&&(i="POST"),d.length>0&&n.ajax({url:f,type:i||"GET",dataType:"html",data:s}).done(function(y){g=arguments,d.html(S?n("<div>").append(n.parseHTML(y)).find(S):y)}).always(p&&function(y,v){d.each(function(){p.apply(this,g||[y.responseText,v,y])})}),this}}.apply(m,u),a!==void 0&&(E.exports=a)},6118:(E,m,r)=>{var u,a;u=[r(1047),r(3187),r(3926)],a=function(n,l){"use strict";n.ajaxPrefilter(function(h){h.crossDomain&&(h.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(h){return n.globalEval(h),h}}}),n.ajaxPrefilter("script",function(h){h.cache===void 0&&(h.cache=!1),h.crossDomain&&(h.type="GET")}),n.ajaxTransport("script",function(h){if(h.crossDomain||h.scriptAttrs){var f,s;return{send:function(p,S){f=n("<script>").attr(h.scriptAttrs||{}).prop({charset:h.scriptCharset,src:h.url}).on("load error",s=function(i){f.remove(),s=null,i&&S(i.type==="error"?404:200,i.type)}),l.head.appendChild(f[0])},abort:function(){s&&s()}}}})}.apply(m,u),a!==void 0&&(E.exports=a)},1448:(E,m,r)=>{var u;u=function(){"use strict";return window.location}.call(m,r,m,E),u!==void 0&&(E.exports=u)},3904:(E,m,r)=>{var u;u=function(){"use strict";return{guid:Date.now()}}.call(m,r,m,E),u!==void 0&&(E.exports=u)},7025:(E,m,r)=>{var u;u=function(){"use strict";return/\?/}.call(m,r,m,E),u!==void 0&&(E.exports=u)},7411:(E,m,r)=>{var u,a;u=[r(1047),r(5751),r(3926)],a=function(n,l){"use strict";n.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest}catch(s){}};var h={0:200,1223:204},f=n.ajaxSettings.xhr();l.cors=!!f&&"withCredentials"in f,l.ajax=f=!!f,n.ajaxTransport(function(s){var p,S;if(l.cors||f&&!s.crossDomain)return{send:function(i,g){var d,c=s.xhr();if(c.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(d in s.xhrFields)c[d]=s.xhrFields[d];s.mimeType&&c.overrideMimeType&&c.overrideMimeType(s.mimeType),!s.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");for(d in i)c.setRequestHeader(d,i[d]);p=function(y){return function(){p&&(p=S=c.onload=c.onerror=c.onabort=c.ontimeout=c.onreadystatechange=null,y==="abort"?c.abort():y==="error"?typeof c.status!="number"?g(0,"error"):g(c.status,c.statusText):g(h[c.status]||c.status,c.statusText,(c.responseType||"text")!=="text"||typeof c.responseText!="string"?{binary:c.response}:{text:c.responseText},c.getAllResponseHeaders()))}},c.onload=p(),S=c.onerror=c.ontimeout=p("error"),c.onabort!==void 0?c.onabort=S:c.onreadystatechange=function(){c.readyState===4&&window.setTimeout(function(){p&&S()})},p=p("abort");try{c.send(s.hasContent&&s.data||null)}catch(y){if(p)throw y}},abort:function(){p&&p()}}})}.apply(m,u),a!==void 0&&(E.exports=a)},5217:(E,m,r)=>{var u,a;u=[r(1047),r(9403),r(8313),r(4946),r(837)],a=function(n){"use strict";return n}.apply(m,u),a!==void 0&&(E.exports=a)},9403:(E,m,r)=>{var u,a;u=[r(1047),r(6440),r(9441),r(257),r(335),r(5037)],a=function(n,l,h,f,s){"use strict";var p,S=n.expr.attrHandle;n.fn.extend({attr:function(i,g){return l(this,n.attr,i,g,arguments.length>1)},removeAttr:function(i){return this.each(function(){n.removeAttr(this,i)})}}),n.extend({attr:function(i,g,d){var c,y,v=i.nodeType;if(!(v===3||v===8||v===2)){if(typeof i.getAttribute=="undefined")return n.prop(i,g,d);if((v!==1||!n.isXMLDoc(i))&&(y=n.attrHooks[g.toLowerCase()]||(n.expr.match.bool.test(g)?p:void 0)),d!==void 0){if(d===null){n.removeAttr(i,g);return}return y&&"set"in y&&(c=y.set(i,d,g))!==void 0?c:(i.setAttribute(g,d+""),d)}return y&&"get"in y&&(c=y.get(i,g))!==null?c:(c=n.find.attr(i,g),c==null?void 0:c)}},attrHooks:{type:{set:function(i,g){if(!f.radioValue&&g==="radio"&&h(i,"input")){var d=i.value;return i.setAttribute("type",g),d&&(i.value=d),g}}}},removeAttr:function(i,g){var d,c=0,y=g&&g.match(s);if(y&&i.nodeType===1)for(;d=y[c++];)i.removeAttribute(d)}}),p={set:function(i,g,d){return g===!1?n.removeAttr(i,d):i.setAttribute(d,d),d}},n.each(n.expr.match.bool.source.match(/\w+/g),function(i,g){var d=S[g]||n.find.attr;S[g]=function(c,y,v){var I,C,D=y.toLowerCase();return v||(C=S[D],S[D]=I,I=d(c,y,v)!=null?D:null,S[D]=C),I}})}.apply(m,u),a!==void 0&&(E.exports=a)},4946:(E,m,r)=>{var u,a;u=[r(1047),r(7078),r(3938),r(335),r(8956),r(6456)],a=function(n,l,h,f,s){"use strict";function p(i){return i.getAttribute&&i.getAttribute("class")||""}function S(i){return Array.isArray(i)?i:typeof i=="string"?i.match(f)||[]:[]}n.fn.extend({addClass:function(i){var g,d,c,y,v,I;return h(i)?this.each(function(C){n(this).addClass(i.call(this,C,p(this)))}):(g=S(i),g.length?this.each(function(){if(c=p(this),d=this.nodeType===1&&" "+l(c)+" ",d){for(v=0;v<g.length;v++)y=g[v],d.indexOf(" "+y+" ")<0&&(d+=y+" ");I=l(d),c!==I&&this.setAttribute("class",I)}}):this)},removeClass:function(i){var g,d,c,y,v,I;return h(i)?this.each(function(C){n(this).removeClass(i.call(this,C,p(this)))}):arguments.length?(g=S(i),g.length?this.each(function(){if(c=p(this),d=this.nodeType===1&&" "+l(c)+" ",d){for(v=0;v<g.length;v++)for(y=g[v];d.indexOf(" "+y+" ")>-1;)d=d.replace(" "+y+" "," ");I=l(d),c!==I&&this.setAttribute("class",I)}}):this):this.attr("class","")},toggleClass:function(i,g){var d,c,y,v,I=typeof i,C=I==="string"||Array.isArray(i);return h(i)?this.each(function(D){n(this).toggleClass(i.call(this,D,p(this),g),g)}):typeof g=="boolean"&&C?g?this.addClass(i):this.removeClass(i):(d=S(i),this.each(function(){if(C)for(v=n(this),y=0;y<d.length;y++)c=d[y],v.hasClass(c)?v.removeClass(c):v.addClass(c);else(i===void 0||I==="boolean")&&(c=p(this),c&&s.set(this,"__className__",c),this.setAttribute&&this.setAttribute("class",c||i===!1?"":s.get(this,"__className__")||""))}))},hasClass:function(i){var g,d,c=0;for(g=" "+i+" ";d=this[c++];)if(d.nodeType===1&&(" "+l(p(d))+" ").indexOf(g)>-1)return!0;return!1}})}.apply(m,u),a!==void 0&&(E.exports=a)},8313:(E,m,r)=>{var u,a;u=[r(1047),r(6440),r(257),r(5037)],a=function(n,l,h){"use strict";var f=/^(?:input|select|textarea|button)$/i,s=/^(?:a|area)$/i;n.fn.extend({prop:function(p,S){return l(this,n.prop,p,S,arguments.length>1)},removeProp:function(p){return this.each(function(){delete this[n.propFix[p]||p]})}}),n.extend({prop:function(p,S,i){var g,d,c=p.nodeType;if(!(c===3||c===8||c===2))return(c!==1||!n.isXMLDoc(p))&&(S=n.propFix[S]||S,d=n.propHooks[S]),i!==void 0?d&&"set"in d&&(g=d.set(p,i,S))!==void 0?g:p[S]=i:d&&"get"in d&&(g=d.get(p,S))!==null?g:p[S]},propHooks:{tabIndex:{get:function(p){var S=n.find.attr(p,"tabindex");return S?parseInt(S,10):f.test(p.nodeName)||s.test(p.nodeName)&&p.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),h.optSelected||(n.propHooks.selected={get:function(p){var S=p.parentNode;return S&&S.parentNode&&S.parentNode.selectedIndex,null},set:function(p){var S=p.parentNode;S&&(S.selectedIndex,S.parentNode&&S.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this})}.apply(m,u),a!==void 0&&(E.exports=a)},257:(E,m,r)=>{var u,a;u=[r(3187),r(5751)],a=function(n,l){"use strict";return function(){var h=n.createElement("input"),f=n.createElement("select"),s=f.appendChild(n.createElement("option"));h.type="checkbox",l.checkOn=h.value!=="",l.optSelected=s.selected,h=n.createElement("input"),h.value="t",h.type="radio",l.radioValue=h.value==="t"}(),l}.apply(m,u),a!==void 0&&(E.exports=a)},837:(E,m,r)=>{var u,a;u=[r(1047),r(7078),r(257),r(9441),r(3938),r(6456)],a=function(n,l,h,f,s){"use strict";var p=/\r/g;n.fn.extend({val:function(S){var i,g,d,c=this[0];return arguments.length?(d=s(S),this.each(function(y){var v;this.nodeType===1&&(d?v=S.call(this,y,n(this).val()):v=S,v==null?v="":typeof v=="number"?v+="":Array.isArray(v)&&(v=n.map(v,function(I){return I==null?"":I+""})),i=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],(!i||!("set"in i)||i.set(this,v,"value")===void 0)&&(this.value=v))})):c?(i=n.valHooks[c.type]||n.valHooks[c.nodeName.toLowerCase()],i&&"get"in i&&(g=i.get(c,"value"))!==void 0?g:(g=c.value,typeof g=="string"?g.replace(p,""):g==null?"":g)):void 0}}),n.extend({valHooks:{option:{get:function(S){var i=n.find.attr(S,"value");return i!=null?i:l(n.text(S))}},select:{get:function(S){var i,g,d,c=S.options,y=S.selectedIndex,v=S.type==="select-one",I=v?null:[],C=v?y+1:c.length;for(y<0?d=C:d=v?y:0;d<C;d++)if(g=c[d],(g.selected||d===y)&&!g.disabled&&(!g.parentNode.disabled||!f(g.parentNode,"optgroup"))){if(i=n(g).val(),v)return i;I.push(i)}return I},set:function(S,i){for(var g,d,c=S.options,y=n.makeArray(i),v=c.length;v--;)d=c[v],(d.selected=n.inArray(n.valHooks.option.get(d),y)>-1)&&(g=!0);return g||(S.selectedIndex=-1),y}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(S,i){if(Array.isArray(i))return S.checked=n.inArray(n(S).val(),i)>-1}},h.checkOn||(n.valHooks[this].get=function(S){return S.getAttribute("value")===null?"on":S.value})})}.apply(m,u),a!==void 0&&(E.exports=a)},7958:(E,m,r)=>{var u,a;u=[r(1047),r(7539),r(3938),r(335)],a=function(n,l,h,f){"use strict";function s(p){var S={};return n.each(p.match(f)||[],function(i,g){S[g]=!0}),S}return n.Callbacks=function(p){p=typeof p=="string"?s(p):n.extend({},p);var S,i,g,d,c=[],y=[],v=-1,I=function(){for(d=d||p.once,g=S=!0;y.length;v=-1)for(i=y.shift();++v<c.length;)c[v].apply(i[0],i[1])===!1&&p.stopOnFalse&&(v=c.length,i=!1);p.memory||(i=!1),S=!1,d&&(i?c=[]:c="")},C={add:function(){return c&&(i&&!S&&(v=c.length-1,y.push(i)),function D(R){n.each(R,function(x,_){h(_)?(!p.unique||!C.has(_))&&c.push(_):_&&_.length&&l(_)!=="string"&&D(_)})}(arguments),i&&!S&&I()),this},remove:function(){return n.each(arguments,function(D,R){for(var x;(x=n.inArray(R,c,x))>-1;)c.splice(x,1),x<=v&&v--}),this},has:function(D){return D?n.inArray(D,c)>-1:c.length>0},empty:function(){return c&&(c=[]),this},disable:function(){return d=y=[],c=i="",this},disabled:function(){return!c},lock:function(){return d=y=[],!i&&!S&&(c=i=""),this},locked:function(){return!!d},fireWith:function(D,R){return d||(R=R||[],R=[D,R.slice?R.slice():R],y.push(R),S||I()),this},fire:function(){return C.fireWith(this,arguments),this},fired:function(){return!!g}};return C},n}.apply(m,u),a!==void 0&&(E.exports=a)},1047:(E,m,r)=>{var u,a;u=[r(4959),r(2760),r(8482),r(6453),r(5846),r(249),r(6004),r(9918),r(6014),r(5390),r(8124),r(5751),r(3938),r(9334),r(7258),r(7539)],a=function(n,l,h,f,s,p,S,i,g,d,c,y,v,I,C,D){"use strict";var R="3.7.1",x=/HTML$/i,_=function(w,P){return new _.fn.init(w,P)};_.fn=_.prototype={jquery:R,constructor:_,length:0,toArray:function(){return h.call(this)},get:function(w){return w==null?h.call(this):w<0?this[w+this.length]:this[w]},pushStack:function(w){var P=_.merge(this.constructor(),w);return P.prevObject=this,P},each:function(w){return _.each(this,w)},map:function(w){return this.pushStack(_.map(this,function(P,T){return w.call(P,T,P)}))},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(_.grep(this,function(w,P){return(P+1)%2}))},odd:function(){return this.pushStack(_.grep(this,function(w,P){return P%2}))},eq:function(w){var P=this.length,T=+w+(w<0?P:0);return this.pushStack(T>=0&&T<P?[this[T]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},_.extend=_.fn.extend=function(){var w,P,T,b,F,j,K=arguments[0]||{},W=1,$=arguments.length,k=!1;for(typeof K=="boolean"&&(k=K,K=arguments[W]||{},W++),typeof K!="object"&&!v(K)&&(K={}),W===$&&(K=this,W--);W<$;W++)if((w=arguments[W])!=null)for(P in w)b=w[P],!(P==="__proto__"||K===b)&&(k&&b&&(_.isPlainObject(b)||(F=Array.isArray(b)))?(T=K[P],F&&!Array.isArray(T)?j=[]:!F&&!_.isPlainObject(T)?j={}:j=T,F=!1,K[P]=_.extend(k,j,b)):b!==void 0&&(K[P]=b));return K},_.extend({expando:"jQuery"+(R+Math.random()).replace(/\D/g,""),isReady:!0,error:function(w){throw new Error(w)},noop:function(){},isPlainObject:function(w){var P,T;return!w||i.call(w)!=="[object Object]"?!1:(P=l(w),P?(T=g.call(P,"constructor")&&P.constructor,typeof T=="function"&&d.call(T)===c):!0)},isEmptyObject:function(w){var P;for(P in w)return!1;return!0},globalEval:function(w,P,T){C(w,{nonce:P&&P.nonce},T)},each:function(w,P){var T,b=0;if(B(w))for(T=w.length;b<T&&P.call(w[b],b,w[b])!==!1;b++);else for(b in w)if(P.call(w[b],b,w[b])===!1)break;return w},text:function(w){var P,T="",b=0,F=w.nodeType;if(!F)for(;P=w[b++];)T+=_.text(P);return F===1||F===11?w.textContent:F===9?w.documentElement.textContent:F===3||F===4?w.nodeValue:T},makeArray:function(w,P){var T=P||[];return w!=null&&(B(Object(w))?_.merge(T,typeof w=="string"?[w]:w):s.call(T,w)),T},inArray:function(w,P,T){return P==null?-1:p.call(P,w,T)},isXMLDoc:function(w){var P=w&&w.namespaceURI,T=w&&(w.ownerDocument||w).documentElement;return!x.test(P||T&&T.nodeName||"HTML")},merge:function(w,P){for(var T=+P.length,b=0,F=w.length;b<T;b++)w[F++]=P[b];return w.length=F,w},grep:function(w,P,T){for(var b,F=[],j=0,K=w.length,W=!T;j<K;j++)b=!P(w[j],j),b!==W&&F.push(w[j]);return F},map:function(w,P,T){var b,F,j=0,K=[];if(B(w))for(b=w.length;j<b;j++)F=P(w[j],j,T),F!=null&&K.push(F);else for(j in w)F=P(w[j],j,T),F!=null&&K.push(F);return f(K)},guid:1,support:y}),typeof Symbol=="function"&&(_.fn[Symbol.iterator]=n[Symbol.iterator]),_.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(w,P){S["[object "+P+"]"]=P.toLowerCase()});function B(w){var P=!!w&&"length"in w&&w.length,T=D(w);return v(w)||I(w)?!1:T==="array"||P===0||typeof P=="number"&&P>0&&P-1 in w}return _}.apply(m,u),a!==void 0&&(E.exports=a)},7258:(E,m,r)=>{var u,a;u=[r(3187)],a=function(n){"use strict";var l={type:!0,src:!0,nonce:!0,noModule:!0};function h(f,s,p){p=p||n;var S,i,g=p.createElement("script");if(g.text=f,s)for(S in l)i=s[S]||s.getAttribute&&s.getAttribute(S),i&&g.setAttribute(S,i);p.head.appendChild(g).parentNode.removeChild(g)}return h}.apply(m,u),a!==void 0&&(E.exports=a)},6440:(E,m,r)=>{var u,a;u=[r(1047),r(7539),r(3938)],a=function(n,l,h){"use strict";var f=function(s,p,S,i,g,d,c){var y=0,v=s.length,I=S==null;if(l(S)==="object"){g=!0;for(y in S)f(s,p,y,S[y],!0,d,c)}else if(i!==void 0&&(g=!0,h(i)||(c=!0),I&&(c?(p.call(s,i),p=null):(I=p,p=function(C,D,R){return I.call(n(C),R)})),p))for(;y<v;y++)p(s[y],S,c?i:i.call(s[y],y,p(s[y],S)));return g?s:I?p.call(s):v?p(s[0],S):d};return f}.apply(m,u),a!==void 0&&(E.exports=a)},2530:(E,m)=>{var r,u;r=[],u=function(){"use strict";var a=/^-ms-/,n=/-([a-z])/g;function l(f,s){return s.toUpperCase()}function h(f){return f.replace(a,"ms-").replace(n,l)}return h}.apply(m,r),u!==void 0&&(E.exports=u)},6456:(E,m,r)=>{var u,a;u=[r(1047),r(3187),r(3938),r(3346),r(4841)],a=function(n,l,h,f){"use strict";var s,p=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,S=n.fn.init=function(i,g,d){var c,y;if(!i)return this;if(d=d||s,typeof i=="string")if(i[0]==="<"&&i[i.length-1]===">"&&i.length>=3?c=[null,i,null]:c=p.exec(i),c&&(c[1]||!g))if(c[1]){if(g=g instanceof n?g[0]:g,n.merge(this,n.parseHTML(c[1],g&&g.nodeType?g.ownerDocument||g:l,!0)),f.test(c[1])&&n.isPlainObject(g))for(c in g)h(this[c])?this[c](g[c]):this.attr(c,g[c]);return this}else return y=l.getElementById(c[2]),y&&(this[0]=y,this.length=1),this;else return!g||g.jquery?(g||d).find(i):this.constructor(g).find(i);else{if(i.nodeType)return this[0]=i,this.length=1,this;if(h(i))return d.ready!==void 0?d.ready(i):i(n)}return n.makeArray(i,this)};return S.prototype=n.fn,s=n(l),S}.apply(m,u),a!==void 0&&(E.exports=a)},5958:(E,m,r)=>{var u,a;u=[r(1047),r(7963),r(8721)],a=function(n,l){"use strict";var h=function(s){return n.contains(s.ownerDocument,s)},f={composed:!0};return l.getRootNode&&(h=function(s){return n.contains(s.ownerDocument,s)||s.getRootNode(f)===s.ownerDocument}),h}.apply(m,u),a!==void 0&&(E.exports=a)},9441:(E,m,r)=>{var u;u=function(){"use strict";function a(n,l){return n.nodeName&&n.nodeName.toLowerCase()===l.toLowerCase()}return a}.call(m,r,m,E),u!==void 0&&(E.exports=u)},2042:(E,m,r)=>{var u,a;u=[r(1047),r(3187),r(3346),r(7610),r(4967)],a=function(n,l,h,f,s){"use strict";return n.parseHTML=function(p,S,i){if(typeof p!="string")return[];typeof S=="boolean"&&(i=S,S=!1);var g,d,c;return S||(s.createHTMLDocument?(S=l.implementation.createHTMLDocument(""),g=S.createElement("base"),g.href=l.location.href,S.head.appendChild(g)):S=l),d=h.exec(p),c=!i&&[],d?[S.createElement(d[1])]:(d=f([p],S,c),c&&c.length&&n(c).remove(),n.merge([],d.childNodes))},n.parseHTML}.apply(m,u),a!==void 0&&(E.exports=a)},8342:(E,m,r)=>{var u,a;u=[r(1047)],a=function(n){"use strict";return n.parseXML=function(l){var h,f;if(!l||typeof l!="string")return null;try{h=new window.DOMParser().parseFromString(l,"text/xml")}catch(s){}return f=h&&h.getElementsByTagName("parsererror")[0],(!h||f)&&n.error("Invalid XML: "+(f?n.map(f.childNodes,function(s){return s.textContent}).join(`
`):l)),h},n.parseXML}.apply(m,u),a!==void 0&&(E.exports=a)},2099:(E,m,r)=>{var u,a;u=[r(1047),r(3187),r(1502),r(1843)],a=function(n,l){"use strict";var h=n.Deferred();n.fn.ready=function(s){return h.then(s).catch(function(p){n.readyException(p)}),this},n.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--n.readyWait:n.isReady)||(n.isReady=!0,!(s!==!0&&--n.readyWait>0)&&h.resolveWith(l,[n]))}}),n.ready.then=h.then;function f(){l.removeEventListener("DOMContentLoaded",f),window.removeEventListener("load",f),n.ready()}l.readyState==="complete"||l.readyState!=="loading"&&!l.documentElement.doScroll?window.setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",f),window.addEventListener("load",f))}.apply(m,u),a!==void 0&&(E.exports=a)},1502:(E,m,r)=>{var u,a;u=[r(1047)],a=function(n){"use strict";n.readyException=function(l){window.setTimeout(function(){throw l})}}.apply(m,u),a!==void 0&&(E.exports=a)},7078:(E,m,r)=>{var u,a;u=[r(335)],a=function(n){"use strict";function l(h){var f=h.match(n)||[];return f.join(" ")}return l}.apply(m,u),a!==void 0&&(E.exports=a)},4967:(E,m,r)=>{var u,a;u=[r(3187),r(5751)],a=function(n,l){"use strict";return l.createHTMLDocument=function(){var h=n.implementation.createHTMLDocument("").body;return h.innerHTML="<form></form><form></form>",h.childNodes.length===2}(),l}.apply(m,u),a!==void 0&&(E.exports=a)},7539:(E,m,r)=>{var u,a;u=[r(6004),r(9918)],a=function(n,l){"use strict";function h(f){return f==null?f+"":typeof f=="object"||typeof f=="function"?n[l.call(f)]||"object":typeof f}return h}.apply(m,u),a!==void 0&&(E.exports=a)},3346:(E,m,r)=>{var u;u=function(){"use strict";return/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i}.call(m,r,m,E),u!==void 0&&(E.exports=u)},9249:(E,m,r)=>{var u,a;u=[r(1047),r(6440),r(2530),r(9441),r(1375),r(9933),r(9556),r(3583),r(5786),r(4969),r(9885),r(9960),r(1313),r(2225),r(4036),r(6456),r(2099),r(5037)],a=function(n,l,h,f,s,p,S,i,g,d,c,y,v,I,C){"use strict";var D=/^(none|table(?!-c[ea]).+)/,R={position:"absolute",visibility:"hidden",display:"block"},x={letterSpacing:"0",fontWeight:"400"};function _(P,T,b){var F=s.exec(T);return F?Math.max(0,F[2]-(b||0))+(F[3]||"px"):T}function B(P,T,b,F,j,K){var W=T==="width"?1:0,$=0,k=0,H=0;if(b===(F?"border":"content"))return 0;for(;W<4;W+=2)b==="margin"&&(H+=n.css(P,b+i[W],!0,j)),F?(b==="content"&&(k-=n.css(P,"padding"+i[W],!0,j)),b!=="margin"&&(k-=n.css(P,"border"+i[W]+"Width",!0,j))):(k+=n.css(P,"padding"+i[W],!0,j),b!=="padding"?k+=n.css(P,"border"+i[W]+"Width",!0,j):$+=n.css(P,"border"+i[W]+"Width",!0,j));return!F&&K>=0&&(k+=Math.max(0,Math.ceil(P["offset"+T[0].toUpperCase()+T.slice(1)]-K-k-$-.5))||0),k+H}function w(P,T,b){var F=g(P),j=!I.boxSizingReliable()||b,K=j&&n.css(P,"boxSizing",!1,F)==="border-box",W=K,$=c(P,T,F),k="offset"+T[0].toUpperCase()+T.slice(1);if(p.test($)){if(!b)return $;$="auto"}return(!I.boxSizingReliable()&&K||!I.reliableTrDimensions()&&f(P,"tr")||$==="auto"||!parseFloat($)&&n.css(P,"display",!1,F)==="inline")&&P.getClientRects().length&&(K=n.css(P,"boxSizing",!1,F)==="border-box",W=k in P,W&&($=P[k])),$=parseFloat($)||0,$+B(P,T,b||(K?"border":"content"),W,F,$)+"px"}return n.extend({cssHooks:{opacity:{get:function(P,T){if(T){var b=c(P,"opacity");return b===""?"1":b}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(P,T,b,F){if(!(!P||P.nodeType===3||P.nodeType===8||!P.style)){var j,K,W,$=h(T),k=S.test(T),H=P.style;if(k||(T=C($)),W=n.cssHooks[T]||n.cssHooks[$],b!==void 0){if(K=typeof b,K==="string"&&(j=s.exec(b))&&j[1]&&(b=y(P,T,j),K="number"),b==null||b!==b)return;K==="number"&&!k&&(b+=j&&j[3]||(n.cssNumber[$]?"":"px")),!I.clearCloneStyle&&b===""&&T.indexOf("background")===0&&(H[T]="inherit"),(!W||!("set"in W)||(b=W.set(P,b,F))!==void 0)&&(k?H.setProperty(T,b):H[T]=b)}else return W&&"get"in W&&(j=W.get(P,!1,F))!==void 0?j:H[T]}},css:function(P,T,b,F){var j,K,W,$=h(T),k=S.test(T);return k||(T=C($)),W=n.cssHooks[T]||n.cssHooks[$],W&&"get"in W&&(j=W.get(P,!0,b)),j===void 0&&(j=c(P,T,F)),j==="normal"&&T in x&&(j=x[T]),b===""||b?(K=parseFloat(j),b===!0||isFinite(K)?K||0:j):j}}),n.each(["height","width"],function(P,T){n.cssHooks[T]={get:function(b,F,j){if(F)return D.test(n.css(b,"display"))&&(!b.getClientRects().length||!b.getBoundingClientRect().width)?d(b,R,function(){return w(b,T,j)}):w(b,T,j)},set:function(b,F,j){var K,W=g(b),$=!I.scrollboxSize()&&W.position==="absolute",k=$||j,H=k&&n.css(b,"boxSizing",!1,W)==="border-box",U=j?B(b,T,j,H,W):0;return H&&$&&(U-=Math.ceil(b["offset"+T[0].toUpperCase()+T.slice(1)]-parseFloat(W[T])-B(b,T,"border",!1,W)-.5)),U&&(K=s.exec(F))&&(K[3]||"px")!=="px"&&(b.style[T]=F,F=n.css(b,T)),_(b,F,U)}}}),n.cssHooks.marginLeft=v(I.reliableMarginLeft,function(P,T){if(T)return(parseFloat(c(P,"marginLeft"))||P.getBoundingClientRect().left-d(P,{marginLeft:0},function(){return P.getBoundingClientRect().left}))+"px"}),n.each({margin:"",padding:"",border:"Width"},function(P,T){n.cssHooks[P+T]={expand:function(b){for(var F=0,j={},K=typeof b=="string"?b.split(" "):[b];F<4;F++)j[P+i[F]+T]=K[F]||K[F-2]||K[0];return j}},P!=="margin"&&(n.cssHooks[P+T].set=_)}),n.fn.extend({css:function(P,T){return l(this,function(b,F,j){var K,W,$={},k=0;if(Array.isArray(F)){for(K=g(b),W=F.length;k<W;k++)$[F[k]]=n.css(b,F[k],!1,K);return $}return j!==void 0?n.style(b,F,j):n.css(b,F)},P,T,arguments.length>1)}}),n}.apply(m,u),a!==void 0&&(E.exports=a)},1313:(E,m,r)=>{var u;u=function(){"use strict";function a(n,l){return{get:function(){if(n()){delete this.get;return}return(this.get=l).apply(this,arguments)}}}return a}.call(m,r,m,E),u!==void 0&&(E.exports=u)},9960:(E,m,r)=>{var u,a;u=[r(1047),r(1375)],a=function(n,l){"use strict";function h(f,s,p,S){var i,g,d=20,c=S?function(){return S.cur()}:function(){return n.css(f,s,"")},y=c(),v=p&&p[3]||(n.cssNumber[s]?"":"px"),I=f.nodeType&&(n.cssNumber[s]||v!=="px"&&+y)&&l.exec(n.css(f,s));if(I&&I[3]!==v){for(y=y/2,v=v||I[3],I=+y||1;d--;)n.style(f,s,I+v),(1-g)*(1-(g=c()/y||.5))<=0&&(d=0),I=I/g;I=I*2,n.style(f,s,I+v),p=p||[]}return p&&(I=+I||+y||0,i=p[1]?I+(p[1]+1)*p[2]:+p[2],S&&(S.unit=v,S.start=I,S.end=i)),i}return h}.apply(m,u),a!==void 0&&(E.exports=a)},9885:(E,m,r)=>{var u,a;u=[r(1047),r(5958),r(7076),r(9933),r(5786),r(9556),r(211),r(2225)],a=function(n,l,h,f,s,p,S,i){"use strict";function g(d,c,y){var v,I,C,D,R=p.test(c),x=d.style;return y=y||s(d),y&&(D=y.getPropertyValue(c)||y[c],R&&D&&(D=D.replace(S,"$1")||void 0),D===""&&!l(d)&&(D=n.style(d,c)),!i.pixelBoxStyles()&&f.test(D)&&h.test(c)&&(v=x.width,I=x.minWidth,C=x.maxWidth,x.minWidth=x.maxWidth=x.width=D,D=y.width,x.width=v,x.minWidth=I,x.maxWidth=C)),D!==void 0?D+"":D}return g}.apply(m,u),a!==void 0&&(E.exports=a)},4036:(E,m,r)=>{var u,a;u=[r(3187),r(1047)],a=function(n,l){"use strict";var h=["Webkit","Moz","ms"],f=n.createElement("div").style,s={};function p(i){for(var g=i[0].toUpperCase()+i.slice(1),d=h.length;d--;)if(i=h[d]+g,i in f)return i}function S(i){var g=l.cssProps[i]||s[i];return g||(i in f?i:s[i]=p(i)||i)}return S}.apply(m,u),a!==void 0&&(E.exports=a)},1788:(E,m,r)=>{var u,a;u=[r(1047),r(5037)],a=function(n){"use strict";n.expr.pseudos.hidden=function(l){return!n.expr.pseudos.visible(l)},n.expr.pseudos.visible=function(l){return!!(l.offsetWidth||l.offsetHeight||l.getClientRects().length)}}.apply(m,u),a!==void 0&&(E.exports=a)},6617:(E,m,r)=>{var u,a;u=[r(1047),r(8956),r(3381)],a=function(n,l,h){"use strict";var f={};function s(S){var i,g=S.ownerDocument,d=S.nodeName,c=f[d];return c||(i=g.body.appendChild(g.createElement(d)),c=n.css(i,"display"),i.parentNode.removeChild(i),c==="none"&&(c="block"),f[d]=c,c)}function p(S,i){for(var g,d,c=[],y=0,v=S.length;y<v;y++)d=S[y],d.style&&(g=d.style.display,i?(g==="none"&&(c[y]=l.get(d,"display")||null,c[y]||(d.style.display="")),d.style.display===""&&h(d)&&(c[y]=s(d))):g!=="none"&&(c[y]="none",l.set(d,"display",g)));for(y=0;y<v;y++)c[y]!=null&&(S[y].style.display=c[y]);return S}return n.fn.extend({show:function(){return p(this,!0)},hide:function(){return p(this)},toggle:function(S){return typeof S=="boolean"?S?this.show():this.hide():this.each(function(){h(this)?n(this).show():n(this).hide()})}}),p}.apply(m,u),a!==void 0&&(E.exports=a)},2225:(E,m,r)=>{var u,a;u=[r(1047),r(3187),r(7963),r(5751)],a=function(n,l,h,f){"use strict";return function(){function s(){if(I){v.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",I.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",h.appendChild(v).appendChild(I);var C=window.getComputedStyle(I);S=C.top!=="1%",y=p(C.marginLeft)===12,I.style.right="60%",d=p(C.right)===36,i=p(C.width)===36,I.style.position="absolute",g=p(I.offsetWidth/3)===12,h.removeChild(v),I=null}}function p(C){return Math.round(parseFloat(C))}var S,i,g,d,c,y,v=l.createElement("div"),I=l.createElement("div");I.style&&(I.style.backgroundClip="content-box",I.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle=I.style.backgroundClip==="content-box",n.extend(f,{boxSizingReliable:function(){return s(),i},pixelBoxStyles:function(){return s(),d},pixelPosition:function(){return s(),S},reliableMarginLeft:function(){return s(),y},scrollboxSize:function(){return s(),g},reliableTrDimensions:function(){var C,D,R,x;return c==null&&(C=l.createElement("table"),D=l.createElement("tr"),R=l.createElement("div"),C.style.cssText="position:absolute;left:-11111px;border-collapse:separate",D.style.cssText="box-sizing:content-box;border:1px solid",D.style.height="1px",R.style.height="9px",R.style.display="block",h.appendChild(C).appendChild(D).appendChild(R),x=window.getComputedStyle(D),c=parseInt(x.height,10)+parseInt(x.borderTopWidth,10)+parseInt(x.borderBottomWidth,10)===D.offsetHeight,h.removeChild(C)),c}}))}(),f}.apply(m,u),a!==void 0&&(E.exports=a)},3583:(E,m,r)=>{var u;u=function(){"use strict";return["Top","Right","Bottom","Left"]}.call(m,r,m,E),u!==void 0&&(E.exports=u)},5786:(E,m,r)=>{var u;u=function(){"use strict";return function(a){var n=a.ownerDocument.defaultView;return(!n||!n.opener)&&(n=window),n.getComputedStyle(a)}}.call(m,r,m,E),u!==void 0&&(E.exports=u)},3381:(E,m,r)=>{var u,a;u=[r(1047),r(5958)],a=function(n,l){"use strict";return function(h,f){return h=f||h,h.style.display==="none"||h.style.display===""&&l(h)&&n.css(h,"display")==="none"}}.apply(m,u),a!==void 0&&(E.exports=a)},7076:(E,m,r)=>{var u,a;u=[r(3583)],a=function(n){"use strict";return new RegExp(n.join("|"),"i")}.apply(m,u),a!==void 0&&(E.exports=a)},9556:(E,m,r)=>{var u;u=function(){"use strict";return/^--/}.call(m,r,m,E),u!==void 0&&(E.exports=u)},9933:(E,m,r)=>{var u,a;u=[r(4694)],a=function(n){"use strict";return new RegExp("^("+n+")(?!px)[a-z%]+$","i")}.apply(m,u),a!==void 0&&(E.exports=a)},4969:(E,m,r)=>{var u;u=function(){"use strict";return function(a,n,l){var h,f,s={};for(f in n)s[f]=a.style[f],a.style[f]=n[f];h=l.call(a);for(f in n)a.style[f]=s[f];return h}}.call(m,r,m,E),u!==void 0&&(E.exports=u)},4048:(E,m,r)=>{var u,a;u=[r(1047),r(6440),r(2530),r(8956),r(5650)],a=function(n,l,h,f,s){"use strict";var p=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,S=/[A-Z]/g;function i(d){return d==="true"?!0:d==="false"?!1:d==="null"?null:d===+d+""?+d:p.test(d)?JSON.parse(d):d}function g(d,c,y){var v;if(y===void 0&&d.nodeType===1)if(v="data-"+c.replace(S,"-$&").toLowerCase(),y=d.getAttribute(v),typeof y=="string"){try{y=i(y)}catch(I){}s.set(d,c,y)}else y=void 0;return y}return n.extend({hasData:function(d){return s.hasData(d)||f.hasData(d)},data:function(d,c,y){return s.access(d,c,y)},removeData:function(d,c){s.remove(d,c)},_data:function(d,c,y){return f.access(d,c,y)},_removeData:function(d,c){f.remove(d,c)}}),n.fn.extend({data:function(d,c){var y,v,I,C=this[0],D=C&&C.attributes;if(d===void 0){if(this.length&&(I=s.get(C),C.nodeType===1&&!f.get(C,"hasDataAttrs"))){for(y=D.length;y--;)D[y]&&(v=D[y].name,v.indexOf("data-")===0&&(v=h(v.slice(5)),g(C,v,I[v])));f.set(C,"hasDataAttrs",!0)}return I}return typeof d=="object"?this.each(function(){s.set(this,d)}):l(this,function(R){var x;if(C&&R===void 0)return x=s.get(C,d),x!==void 0||(x=g(C,d),x!==void 0)?x:void 0;this.each(function(){s.set(this,d,R)})},null,c,arguments.length>1,null,!0)},removeData:function(d){return this.each(function(){s.remove(this,d)})}}),n}.apply(m,u),a!==void 0&&(E.exports=a)},3595:(E,m,r)=>{var u,a;u=[r(1047),r(2530),r(335),r(3969)],a=function(n,l,h,f){"use strict";function s(){this.expando=n.expando+s.uid++}return s.uid=1,s.prototype={cache:function(p){var S=p[this.expando];return S||(S={},f(p)&&(p.nodeType?p[this.expando]=S:Object.defineProperty(p,this.expando,{value:S,configurable:!0}))),S},set:function(p,S,i){var g,d=this.cache(p);if(typeof S=="string")d[l(S)]=i;else for(g in S)d[l(g)]=S[g];return d},get:function(p,S){return S===void 0?this.cache(p):p[this.expando]&&p[this.expando][l(S)]},access:function(p,S,i){return S===void 0||S&&typeof S=="string"&&i===void 0?this.get(p,S):(this.set(p,S,i),i!==void 0?i:S)},remove:function(p,S){var i,g=p[this.expando];if(g!==void 0){if(S!==void 0)for(Array.isArray(S)?S=S.map(l):(S=l(S),S=S in g?[S]:S.match(h)||[]),i=S.length;i--;)delete g[S[i]];(S===void 0||n.isEmptyObject(g))&&(p.nodeType?p[this.expando]=void 0:delete p[this.expando])}},hasData:function(p){var S=p[this.expando];return S!==void 0&&!n.isEmptyObject(S)}},s}.apply(m,u),a!==void 0&&(E.exports=a)},3969:(E,m,r)=>{var u;u=function(){"use strict";return function(a){return a.nodeType===1||a.nodeType===9||!+a.nodeType}}.call(m,r,m,E),u!==void 0&&(E.exports=u)},8956:(E,m,r)=>{var u,a;u=[r(3595)],a=function(n){"use strict";return new n}.apply(m,u),a!==void 0&&(E.exports=a)},5650:(E,m,r)=>{var u,a;u=[r(3595)],a=function(n){"use strict";return new n}.apply(m,u),a!==void 0&&(E.exports=a)},1843:(E,m,r)=>{var u,a;u=[r(1047),r(3938),r(8482),r(7958)],a=function(n,l,h){"use strict";function f(S){return S}function s(S){throw S}function p(S,i,g,d){var c;try{S&&l(c=S.promise)?c.call(S).done(i).fail(g):S&&l(c=S.then)?c.call(S,i,g):i.apply(void 0,[S].slice(d))}catch(y){g.apply(void 0,[y])}}return n.extend({Deferred:function(S){var i=[["notify","progress",n.Callbacks("memory"),n.Callbacks("memory"),2],["resolve","done",n.Callbacks("once memory"),n.Callbacks("once memory"),0,"resolved"],["reject","fail",n.Callbacks("once memory"),n.Callbacks("once memory"),1,"rejected"]],g="pending",d={state:function(){return g},always:function(){return c.done(arguments).fail(arguments),this},catch:function(y){return d.then(null,y)},pipe:function(){var y=arguments;return n.Deferred(function(v){n.each(i,function(I,C){var D=l(y[C[4]])&&y[C[4]];c[C[1]](function(){var R=D&&D.apply(this,arguments);R&&l(R.promise)?R.promise().progress(v.notify).done(v.resolve).fail(v.reject):v[C[0]+"With"](this,D?[R]:arguments)})}),y=null}).promise()},then:function(y,v,I){var C=0;function D(R,x,_,B){return function(){var w=this,P=arguments,T=function(){var F,j;if(!(R<C)){if(F=_.apply(w,P),F===x.promise())throw new TypeError("Thenable self-resolution");j=F&&(typeof F=="object"||typeof F=="function")&&F.then,l(j)?B?j.call(F,D(C,x,f,B),D(C,x,s,B)):(C++,j.call(F,D(C,x,f,B),D(C,x,s,B),D(C,x,f,x.notifyWith))):(_!==f&&(w=void 0,P=[F]),(B||x.resolveWith)(w,P))}},b=B?T:function(){try{T()}catch(F){n.Deferred.exceptionHook&&n.Deferred.exceptionHook(F,b.error),R+1>=C&&(_!==s&&(w=void 0,P=[F]),x.rejectWith(w,P))}};R?b():(n.Deferred.getErrorHook?b.error=n.Deferred.getErrorHook():n.Deferred.getStackHook&&(b.error=n.Deferred.getStackHook()),window.setTimeout(b))}}return n.Deferred(function(R){i[0][3].add(D(0,R,l(I)?I:f,R.notifyWith)),i[1][3].add(D(0,R,l(y)?y:f)),i[2][3].add(D(0,R,l(v)?v:s))}).promise()},promise:function(y){return y!=null?n.extend(y,d):d}},c={};return n.each(i,function(y,v){var I=v[2],C=v[5];d[v[1]]=I.add,C&&I.add(function(){g=C},i[3-y][2].disable,i[3-y][3].disable,i[0][2].lock,i[0][3].lock),I.add(v[3].fire),c[v[0]]=function(){return c[v[0]+"With"](this===c?void 0:this,arguments),this},c[v[0]+"With"]=I.fireWith}),d.promise(c),S&&S.call(c,c),c},when:function(S){var i=arguments.length,g=i,d=Array(g),c=h.call(arguments),y=n.Deferred(),v=function(I){return function(C){d[I]=this,c[I]=arguments.length>1?h.call(arguments):C,--i||y.resolveWith(d,c)}};if(i<=1&&(p(S,y.done(v(g)).resolve,y.reject,!i),y.state()==="pending"||l(c[g]&&c[g].then)))return y.then();for(;g--;)p(c[g],v(g),y.reject);return y.promise()}}),n}.apply(m,u),a!==void 0&&(E.exports=a)},5382:(E,m,r)=>{var u,a;u=[r(1047),r(1843)],a=function(n){"use strict";var l=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;n.Deferred.exceptionHook=function(h,f){window.console&&window.console.warn&&h&&l.test(h.name)&&window.console.warn("jQuery.Deferred exception: "+h.message,h.stack,f)}}.apply(m,u),a!==void 0&&(E.exports=a)},1389:(E,m,r)=>{var u,a;u=[r(1047),r(9441),r(2530),r(7539),r(3938),r(9334),r(8482),r(6894),r(2430)],a=function(n,l,h,f,s,p,S){"use strict";var i=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;n.proxy=function(g,d){var c,y,v;if(typeof d=="string"&&(c=g[d],d=g,g=c),!!s(g))return y=S.call(arguments,2),v=function(){return g.apply(d||this,y.concat(S.call(arguments)))},v.guid=g.guid=g.guid||n.guid++,v},n.holdReady=function(g){g?n.readyWait++:n.ready(!0)},n.isArray=Array.isArray,n.parseJSON=JSON.parse,n.nodeName=l,n.isFunction=s,n.isWindow=p,n.camelCase=h,n.type=f,n.now=Date.now,n.isNumeric=function(g){var d=n.type(g);return(d==="number"||d==="string")&&!isNaN(g-parseFloat(g))},n.trim=function(g){return g==null?"":(g+"").replace(i,"$1")}}.apply(m,u),a!==void 0&&(E.exports=a)},6894:(E,m,r)=>{var u,a;u=[r(1047),r(3926),r(234)],a=function(n){"use strict";n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(l,h){n.fn[h]=function(f){return this.on(h,f)}})}.apply(m,u),a!==void 0&&(E.exports=a)},2430:(E,m,r)=>{var u,a;u=[r(1047),r(234),r(4997)],a=function(n){"use strict";n.fn.extend({bind:function(l,h,f){return this.on(l,null,h,f)},unbind:function(l,h){return this.off(l,null,h)},delegate:function(l,h,f,s){return this.on(h,l,f,s)},undelegate:function(l,h,f){return arguments.length===1?this.off(l,"**"):this.off(h,l||"**",f)},hover:function(l,h){return this.on("mouseenter",l).on("mouseleave",h||l)}}),n.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(l,h){n.fn[h]=function(f,s){return arguments.length>0?this.on(h,null,f,s):this.trigger(h)}})}.apply(m,u),a!==void 0&&(E.exports=a)},4469:(E,m,r)=>{var u,a;u=[r(1047),r(6440),r(9334),r(9249)],a=function(n,l,h){"use strict";return n.each({Height:"height",Width:"width"},function(f,s){n.each({padding:"inner"+f,content:s,"":"outer"+f},function(p,S){n.fn[S]=function(i,g){var d=arguments.length&&(p||typeof i!="boolean"),c=p||(i===!0||g===!0?"margin":"border");return l(this,function(y,v,I){var C;return h(y)?S.indexOf("outer")===0?y["inner"+f]:y.document.documentElement["client"+f]:y.nodeType===9?(C=y.documentElement,Math.max(y.body["scroll"+f],C["scroll"+f],y.body["offset"+f],C["offset"+f],C["client"+f])):I===void 0?n.css(y,v,c):n.style(y,v,I,c)},s,d?i:void 0,d)}})}),n}.apply(m,u),a!==void 0&&(E.exports=a)},5020:(E,m,r)=>{var u,a;u=[r(1047),r(2530),r(3187),r(3938),r(1375),r(335),r(3583),r(3381),r(9960),r(8956),r(6617),r(6456),r(1229),r(1843),r(4477),r(7897),r(9249),r(172)],a=function(n,l,h,f,s,p,S,i,g,d,c){"use strict";var y,v,I=/^(?:toggle|show|hide)$/,C=/queueHooks$/;function D(){v&&(h.hidden===!1&&window.requestAnimationFrame?window.requestAnimationFrame(D):window.setTimeout(D,n.fx.interval),n.fx.tick())}function R(){return window.setTimeout(function(){y=void 0}),y=Date.now()}function x(T,b){var F,j=0,K={height:T};for(b=b?1:0;j<4;j+=2-b)F=S[j],K["margin"+F]=K["padding"+F]=T;return b&&(K.opacity=K.width=T),K}function _(T,b,F){for(var j,K=(P.tweeners[b]||[]).concat(P.tweeners["*"]),W=0,$=K.length;W<$;W++)if(j=K[W].call(F,b,T))return j}function B(T,b,F){var j,K,W,$,k,H,U,Q,ne="width"in b||"height"in b,ie=this,J={},ge=T.style,ye=T.nodeType&&i(T),Ce=d.get(T,"fxshow");F.queue||($=n._queueHooks(T,"fx"),$.unqueued==null&&($.unqueued=0,k=$.empty.fire,$.empty.fire=function(){$.unqueued||k()}),$.unqueued++,ie.always(function(){ie.always(function(){$.unqueued--,n.queue(T,"fx").length||$.empty.fire()})}));for(j in b)if(K=b[j],I.test(K)){if(delete b[j],W=W||K==="toggle",K===(ye?"hide":"show"))if(K==="show"&&Ce&&Ce[j]!==void 0)ye=!0;else continue;J[j]=Ce&&Ce[j]||n.style(T,j)}if(H=!n.isEmptyObject(b),!(!H&&n.isEmptyObject(J))){ne&&T.nodeType===1&&(F.overflow=[ge.overflow,ge.overflowX,ge.overflowY],U=Ce&&Ce.display,U==null&&(U=d.get(T,"display")),Q=n.css(T,"display"),Q==="none"&&(U?Q=U:(c([T],!0),U=T.style.display||U,Q=n.css(T,"display"),c([T]))),(Q==="inline"||Q==="inline-block"&&U!=null)&&n.css(T,"float")==="none"&&(H||(ie.done(function(){ge.display=U}),U==null&&(Q=ge.display,U=Q==="none"?"":Q)),ge.display="inline-block")),F.overflow&&(ge.overflow="hidden",ie.always(function(){ge.overflow=F.overflow[0],ge.overflowX=F.overflow[1],ge.overflowY=F.overflow[2]})),H=!1;for(j in J)H||(Ce?"hidden"in Ce&&(ye=Ce.hidden):Ce=d.access(T,"fxshow",{display:U}),W&&(Ce.hidden=!ye),ye&&c([T],!0),ie.done(function(){ye||c([T]),d.remove(T,"fxshow");for(j in J)n.style(T,j,J[j])})),H=_(ye?Ce[j]:0,j,ie),j in Ce||(Ce[j]=H.start,ye&&(H.end=H.start,H.start=0))}}function w(T,b){var F,j,K,W,$;for(F in T)if(j=l(F),K=b[j],W=T[F],Array.isArray(W)&&(K=W[1],W=T[F]=W[0]),F!==j&&(T[j]=W,delete T[F]),$=n.cssHooks[j],$&&"expand"in $){W=$.expand(W),delete T[j];for(F in W)F in T||(T[F]=W[F],b[F]=K)}else b[j]=K}function P(T,b,F){var j,K,W=0,$=P.prefilters.length,k=n.Deferred().always(function(){delete H.elem}),H=function(){if(K)return!1;for(var ne=y||R(),ie=Math.max(0,U.startTime+U.duration-ne),J=ie/U.duration||0,ge=1-J,ye=0,Ce=U.tweens.length;ye<Ce;ye++)U.tweens[ye].run(ge);return k.notifyWith(T,[U,ge,ie]),ge<1&&Ce?ie:(Ce||k.notifyWith(T,[U,1,0]),k.resolveWith(T,[U]),!1)},U=k.promise({elem:T,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},F),originalProperties:b,originalOptions:F,startTime:y||R(),duration:F.duration,tweens:[],createTween:function(ne,ie){var J=n.Tween(T,U.opts,ne,ie,U.opts.specialEasing[ne]||U.opts.easing);return U.tweens.push(J),J},stop:function(ne){var ie=0,J=ne?U.tweens.length:0;if(K)return this;for(K=!0;ie<J;ie++)U.tweens[ie].run(1);return ne?(k.notifyWith(T,[U,1,0]),k.resolveWith(T,[U,ne])):k.rejectWith(T,[U,ne]),this}}),Q=U.props;for(w(Q,U.opts.specialEasing);W<$;W++)if(j=P.prefilters[W].call(U,T,Q,U.opts),j)return f(j.stop)&&(n._queueHooks(U.elem,U.opts.queue).stop=j.stop.bind(j)),j;return n.map(Q,_,U),f(U.opts.start)&&U.opts.start.call(T,U),U.progress(U.opts.progress).done(U.opts.done,U.opts.complete).fail(U.opts.fail).always(U.opts.always),n.fx.timer(n.extend(H,{elem:T,anim:U,queue:U.opts.queue})),U}return n.Animation=n.extend(P,{tweeners:{"*":[function(T,b){var F=this.createTween(T,b);return g(F.elem,T,s.exec(b),F),F}]},tweener:function(T,b){f(T)?(b=T,T=["*"]):T=T.match(p);for(var F,j=0,K=T.length;j<K;j++)F=T[j],P.tweeners[F]=P.tweeners[F]||[],P.tweeners[F].unshift(b)},prefilters:[B],prefilter:function(T,b){b?P.prefilters.unshift(T):P.prefilters.push(T)}}),n.speed=function(T,b,F){var j=T&&typeof T=="object"?n.extend({},T):{complete:F||!F&&b||f(T)&&T,duration:T,easing:F&&b||b&&!f(b)&&b};return n.fx.off?j.duration=0:typeof j.duration!="number"&&(j.duration in n.fx.speeds?j.duration=n.fx.speeds[j.duration]:j.duration=n.fx.speeds._default),(j.queue==null||j.queue===!0)&&(j.queue="fx"),j.old=j.complete,j.complete=function(){f(j.old)&&j.old.call(this),j.queue&&n.dequeue(this,j.queue)},j},n.fn.extend({fadeTo:function(T,b,F,j){return this.filter(i).css("opacity",0).show().end().animate({opacity:b},T,F,j)},animate:function(T,b,F,j){var K=n.isEmptyObject(T),W=n.speed(b,F,j),$=function(){var k=P(this,n.extend({},T),W);(K||d.get(this,"finish"))&&k.stop(!0)};return $.finish=$,K||W.queue===!1?this.each($):this.queue(W.queue,$)},stop:function(T,b,F){var j=function(K){var W=K.stop;delete K.stop,W(F)};return typeof T!="string"&&(F=b,b=T,T=void 0),b&&this.queue(T||"fx",[]),this.each(function(){var K=!0,W=T!=null&&T+"queueHooks",$=n.timers,k=d.get(this);if(W)k[W]&&k[W].stop&&j(k[W]);else for(W in k)k[W]&&k[W].stop&&C.test(W)&&j(k[W]);for(W=$.length;W--;)$[W].elem===this&&(T==null||$[W].queue===T)&&($[W].anim.stop(F),K=!1,$.splice(W,1));(K||!F)&&n.dequeue(this,T)})},finish:function(T){return T!==!1&&(T=T||"fx"),this.each(function(){var b,F=d.get(this),j=F[T+"queue"],K=F[T+"queueHooks"],W=n.timers,$=j?j.length:0;for(F.finish=!0,n.queue(this,T,[]),K&&K.stop&&K.stop.call(this,!0),b=W.length;b--;)W[b].elem===this&&W[b].queue===T&&(W[b].anim.stop(!0),W.splice(b,1));for(b=0;b<$;b++)j[b]&&j[b].finish&&j[b].finish.call(this);delete F.finish})}}),n.each(["toggle","show","hide"],function(T,b){var F=n.fn[b];n.fn[b]=function(j,K,W){return j==null||typeof j=="boolean"?F.apply(this,arguments):this.animate(x(b,!0),j,K,W)}}),n.each({slideDown:x("show"),slideUp:x("hide"),slideToggle:x("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(T,b){n.fn[T]=function(F,j,K){return this.animate(b,F,j,K)}}),n.timers=[],n.fx.tick=function(){var T,b=0,F=n.timers;for(y=Date.now();b<F.length;b++)T=F[b],!T()&&F[b]===T&&F.splice(b--,1);F.length||n.fx.stop(),y=void 0},n.fx.timer=function(T){n.timers.push(T),n.fx.start()},n.fx.interval=13,n.fx.start=function(){v||(v=!0,D())},n.fx.stop=function(){v=null},n.fx.speeds={slow:600,fast:200,_default:400},n}.apply(m,u),a!==void 0&&(E.exports=a)},172:(E,m,r)=>{var u,a;u=[r(1047),r(4036),r(9249)],a=function(n,l){"use strict";function h(f,s,p,S,i){return new h.prototype.init(f,s,p,S,i)}n.Tween=h,h.prototype={constructor:h,init:function(f,s,p,S,i,g){this.elem=f,this.prop=p,this.easing=i||n.easing._default,this.options=s,this.start=this.now=this.cur(),this.end=S,this.unit=g||(n.cssNumber[p]?"":"px")},cur:function(){var f=h.propHooks[this.prop];return f&&f.get?f.get(this):h.propHooks._default.get(this)},run:function(f){var s,p=h.propHooks[this.prop];return this.options.duration?this.pos=s=n.easing[this.easing](f,this.options.duration*f,0,1,this.options.duration):this.pos=s=f,this.now=(this.end-this.start)*s+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),p&&p.set?p.set(this):h.propHooks._default.set(this),this}},h.prototype.init.prototype=h.prototype,h.propHooks={_default:{get:function(f){var s;return f.elem.nodeType!==1||f.elem[f.prop]!=null&&f.elem.style[f.prop]==null?f.elem[f.prop]:(s=n.css(f.elem,f.prop,""),!s||s==="auto"?0:s)},set:function(f){n.fx.step[f.prop]?n.fx.step[f.prop](f):f.elem.nodeType===1&&(n.cssHooks[f.prop]||f.elem.style[l(f.prop)]!=null)?n.style(f.elem,f.prop,f.now+f.unit):f.elem[f.prop]=f.now}}},h.propHooks.scrollTop=h.propHooks.scrollLeft={set:function(f){f.elem.nodeType&&f.elem.parentNode&&(f.elem[f.prop]=f.now)}},n.easing={linear:function(f){return f},swing:function(f){return .5-Math.cos(f*Math.PI)/2},_default:"swing"},n.fx=h.prototype.init,n.fx.step={}}.apply(m,u),a!==void 0&&(E.exports=a)},1143:(E,m,r)=>{var u,a;u=[r(1047),r(5037),r(5020)],a=function(n){"use strict";n.expr.pseudos.animated=function(l){return n.grep(n.timers,function(h){return l===h.elem}).length}}.apply(m,u),a!==void 0&&(E.exports=a)},234:(E,m,r)=>{var u,a;u=[r(1047),r(3187),r(7963),r(3938),r(335),r(1320),r(8482),r(3969),r(8956),r(9441),r(6456),r(5037)],a=function(n,l,h,f,s,p,S,i,g,d){"use strict";var c=/^([^.]*)(?:\.(.+)|)/;function y(){return!0}function v(){return!1}function I(D,R,x,_,B,w){var P,T;if(typeof R=="object"){typeof x!="string"&&(_=_||x,x=void 0);for(T in R)I(D,T,x,_,R[T],w);return D}if(_==null&&B==null?(B=x,_=x=void 0):B==null&&(typeof x=="string"?(B=_,_=void 0):(B=_,_=x,x=void 0)),B===!1)B=v;else if(!B)return D;return w===1&&(P=B,B=function(b){return n().off(b),P.apply(this,arguments)},B.guid=P.guid||(P.guid=n.guid++)),D.each(function(){n.event.add(this,R,B,_,x)})}n.event={global:{},add:function(D,R,x,_,B){var w,P,T,b,F,j,K,W,$,k,H,U=g.get(D);if(i(D))for(x.handler&&(w=x,x=w.handler,B=w.selector),B&&n.find.matchesSelector(h,B),x.guid||(x.guid=n.guid++),(b=U.events)||(b=U.events=Object.create(null)),(P=U.handle)||(P=U.handle=function(Q){return typeof n!="undefined"&&n.event.triggered!==Q.type?n.event.dispatch.apply(D,arguments):void 0}),R=(R||"").match(s)||[""],F=R.length;F--;)T=c.exec(R[F])||[],$=H=T[1],k=(T[2]||"").split(".").sort(),$&&(K=n.event.special[$]||{},$=(B?K.delegateType:K.bindType)||$,K=n.event.special[$]||{},j=n.extend({type:$,origType:H,data:_,handler:x,guid:x.guid,selector:B,needsContext:B&&n.expr.match.needsContext.test(B),namespace:k.join(".")},w),(W=b[$])||(W=b[$]=[],W.delegateCount=0,(!K.setup||K.setup.call(D,_,k,P)===!1)&&D.addEventListener&&D.addEventListener($,P)),K.add&&(K.add.call(D,j),j.handler.guid||(j.handler.guid=x.guid)),B?W.splice(W.delegateCount++,0,j):W.push(j),n.event.global[$]=!0)},remove:function(D,R,x,_,B){var w,P,T,b,F,j,K,W,$,k,H,U=g.hasData(D)&&g.get(D);if(!(!U||!(b=U.events))){for(R=(R||"").match(s)||[""],F=R.length;F--;){if(T=c.exec(R[F])||[],$=H=T[1],k=(T[2]||"").split(".").sort(),!$){for($ in b)n.event.remove(D,$+R[F],x,_,!0);continue}for(K=n.event.special[$]||{},$=(_?K.delegateType:K.bindType)||$,W=b[$]||[],T=T[2]&&new RegExp("(^|\\.)"+k.join("\\.(?:.*\\.|)")+"(\\.|$)"),P=w=W.length;w--;)j=W[w],(B||H===j.origType)&&(!x||x.guid===j.guid)&&(!T||T.test(j.namespace))&&(!_||_===j.selector||_==="**"&&j.selector)&&(W.splice(w,1),j.selector&&W.delegateCount--,K.remove&&K.remove.call(D,j));P&&!W.length&&((!K.teardown||K.teardown.call(D,k,U.handle)===!1)&&n.removeEvent(D,$,U.handle),delete b[$])}n.isEmptyObject(b)&&g.remove(D,"handle events")}},dispatch:function(D){var R,x,_,B,w,P,T=new Array(arguments.length),b=n.event.fix(D),F=(g.get(this,"events")||Object.create(null))[b.type]||[],j=n.event.special[b.type]||{};for(T[0]=b,R=1;R<arguments.length;R++)T[R]=arguments[R];if(b.delegateTarget=this,!(j.preDispatch&&j.preDispatch.call(this,b)===!1)){for(P=n.event.handlers.call(this,b,F),R=0;(B=P[R++])&&!b.isPropagationStopped();)for(b.currentTarget=B.elem,x=0;(w=B.handlers[x++])&&!b.isImmediatePropagationStopped();)(!b.rnamespace||w.namespace===!1||b.rnamespace.test(w.namespace))&&(b.handleObj=w,b.data=w.data,_=((n.event.special[w.origType]||{}).handle||w.handler).apply(B.elem,T),_!==void 0&&(b.result=_)===!1&&(b.preventDefault(),b.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,b),b.result}},handlers:function(D,R){var x,_,B,w,P,T=[],b=R.delegateCount,F=D.target;if(b&&F.nodeType&&!(D.type==="click"&&D.button>=1)){for(;F!==this;F=F.parentNode||this)if(F.nodeType===1&&!(D.type==="click"&&F.disabled===!0)){for(w=[],P={},x=0;x<b;x++)_=R[x],B=_.selector+" ",P[B]===void 0&&(P[B]=_.needsContext?n(B,this).index(F)>-1:n.find(B,this,null,[F]).length),P[B]&&w.push(_);w.length&&T.push({elem:F,handlers:w})}}return F=this,b<R.length&&T.push({elem:F,handlers:R.slice(b)}),T},addProp:function(D,R){Object.defineProperty(n.Event.prototype,D,{enumerable:!0,configurable:!0,get:f(R)?function(){if(this.originalEvent)return R(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[D]},set:function(x){Object.defineProperty(this,D,{enumerable:!0,configurable:!0,writable:!0,value:x})}})},fix:function(D){return D[n.expando]?D:new n.Event(D)},special:{load:{noBubble:!0},click:{setup:function(D){var R=this||D;return p.test(R.type)&&R.click&&d(R,"input")&&C(R,"click",!0),!1},trigger:function(D){var R=this||D;return p.test(R.type)&&R.click&&d(R,"input")&&C(R,"click"),!0},_default:function(D){var R=D.target;return p.test(R.type)&&R.click&&d(R,"input")&&g.get(R,"click")||d(R,"a")}},beforeunload:{postDispatch:function(D){D.result!==void 0&&D.originalEvent&&(D.originalEvent.returnValue=D.result)}}}};function C(D,R,x){if(!x){g.get(D,R)===void 0&&n.event.add(D,R,y);return}g.set(D,R,!1),n.event.add(D,R,{namespace:!1,handler:function(_){var B,w=g.get(this,R);if(_.isTrigger&1&&this[R]){if(w)(n.event.special[R]||{}).delegateType&&_.stopPropagation();else if(w=S.call(arguments),g.set(this,R,w),this[R](),B=g.get(this,R),g.set(this,R,!1),w!==B)return _.stopImmediatePropagation(),_.preventDefault(),B}else w&&(g.set(this,R,n.event.trigger(w[0],w.slice(1),this)),_.stopPropagation(),_.isImmediatePropagationStopped=y)}})}return n.removeEvent=function(D,R,x){D.removeEventListener&&D.removeEventListener(R,x)},n.Event=function(D,R){if(!(this instanceof n.Event))return new n.Event(D,R);D&&D.type?(this.originalEvent=D,this.type=D.type,this.isDefaultPrevented=D.defaultPrevented||D.defaultPrevented===void 0&&D.returnValue===!1?y:v,this.target=D.target&&D.target.nodeType===3?D.target.parentNode:D.target,this.currentTarget=D.currentTarget,this.relatedTarget=D.relatedTarget):this.type=D,R&&n.extend(this,R),this.timeStamp=D&&D.timeStamp||Date.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v,isSimulated:!1,preventDefault:function(){var D=this.originalEvent;this.isDefaultPrevented=y,D&&!this.isSimulated&&D.preventDefault()},stopPropagation:function(){var D=this.originalEvent;this.isPropagationStopped=y,D&&!this.isSimulated&&D.stopPropagation()},stopImmediatePropagation:function(){var D=this.originalEvent;this.isImmediatePropagationStopped=y,D&&!this.isSimulated&&D.stopImmediatePropagation(),this.stopPropagation()}},n.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},n.event.addProp),n.each({focus:"focusin",blur:"focusout"},function(D,R){function x(_){if(l.documentMode){var B=g.get(this,"handle"),w=n.event.fix(_);w.type=_.type==="focusin"?"focus":"blur",w.isSimulated=!0,B(_),w.target===w.currentTarget&&B(w)}else n.event.simulate(R,_.target,n.event.fix(_))}n.event.special[D]={setup:function(){var _;if(C(this,D,!0),l.documentMode)_=g.get(this,R),_||this.addEventListener(R,x),g.set(this,R,(_||0)+1);else return!1},trigger:function(){return C(this,D),!0},teardown:function(){var _;if(l.documentMode)_=g.get(this,R)-1,_?g.set(this,R,_):(this.removeEventListener(R,x),g.remove(this,R));else return!1},_default:function(_){return g.get(_.target,D)},delegateType:R},n.event.special[R]={setup:function(){var _=this.ownerDocument||this.document||this,B=l.documentMode?this:_,w=g.get(B,R);w||(l.documentMode?this.addEventListener(R,x):_.addEventListener(D,x,!0)),g.set(B,R,(w||0)+1)},teardown:function(){var _=this.ownerDocument||this.document||this,B=l.documentMode?this:_,w=g.get(B,R)-1;w?g.set(B,R,w):(l.documentMode?this.removeEventListener(R,x):_.removeEventListener(D,x,!0),g.remove(B,R))}}}),n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(D,R){n.event.special[D]={delegateType:R,bindType:R,handle:function(x){var _,B=this,w=x.relatedTarget,P=x.handleObj;return(!w||w!==B&&!n.contains(B,w))&&(x.type=P.origType,_=P.handler.apply(this,arguments),x.type=R),_}}}),n.fn.extend({on:function(D,R,x,_){return I(this,D,R,x,_)},one:function(D,R,x,_){return I(this,D,R,x,_,1)},off:function(D,R,x){var _,B;if(D&&D.preventDefault&&D.handleObj)return _=D.handleObj,n(D.delegateTarget).off(_.namespace?_.origType+"."+_.namespace:_.origType,_.selector,_.handler),this;if(typeof D=="object"){for(B in D)this.off(B,R,D[B]);return this}return(R===!1||typeof R=="function")&&(x=R,R=void 0),x===!1&&(x=v),this.each(function(){n.event.remove(this,D,x,R)})}}),n}.apply(m,u),a!==void 0&&(E.exports=a)},4997:(E,m,r)=>{var u,a;u=[r(1047),r(3187),r(8956),r(3969),r(6014),r(3938),r(9334),r(234)],a=function(n,l,h,f,s,p,S){"use strict";var i=/^(?:focusinfocus|focusoutblur)$/,g=function(d){d.stopPropagation()};return n.extend(n.event,{trigger:function(d,c,y,v){var I,C,D,R,x,_,B,w,P=[y||l],T=s.call(d,"type")?d.type:d,b=s.call(d,"namespace")?d.namespace.split("."):[];if(C=w=D=y=y||l,!(y.nodeType===3||y.nodeType===8)&&!i.test(T+n.event.triggered)&&(T.indexOf(".")>-1&&(b=T.split("."),T=b.shift(),b.sort()),x=T.indexOf(":")<0&&"on"+T,d=d[n.expando]?d:new n.Event(T,typeof d=="object"&&d),d.isTrigger=v?2:3,d.namespace=b.join("."),d.rnamespace=d.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,d.result=void 0,d.target||(d.target=y),c=c==null?[d]:n.makeArray(c,[d]),B=n.event.special[T]||{},!(!v&&B.trigger&&B.trigger.apply(y,c)===!1))){if(!v&&!B.noBubble&&!S(y)){for(R=B.delegateType||T,i.test(R+T)||(C=C.parentNode);C;C=C.parentNode)P.push(C),D=C;D===(y.ownerDocument||l)&&P.push(D.defaultView||D.parentWindow||window)}for(I=0;(C=P[I++])&&!d.isPropagationStopped();)w=C,d.type=I>1?R:B.bindType||T,_=(h.get(C,"events")||Object.create(null))[d.type]&&h.get(C,"handle"),_&&_.apply(C,c),_=x&&C[x],_&&_.apply&&f(C)&&(d.result=_.apply(C,c),d.result===!1&&d.preventDefault());return d.type=T,!v&&!d.isDefaultPrevented()&&(!B._default||B._default.apply(P.pop(),c)===!1)&&f(y)&&x&&p(y[T])&&!S(y)&&(D=y[x],D&&(y[x]=null),n.event.triggered=T,d.isPropagationStopped()&&w.addEventListener(T,g),y[T](),d.isPropagationStopped()&&w.removeEventListener(T,g),n.event.triggered=void 0,D&&(y[x]=D)),d.result}},simulate:function(d,c,y){var v=n.extend(new n.Event,y,{type:d,isSimulated:!0});n.event.trigger(v,null,c)}}),n.fn.extend({trigger:function(d,c){return this.each(function(){n.event.trigger(d,c,this)})},triggerHandler:function(d,c){var y=this[0];if(y)return n.event.trigger(d,c,y,!0)}}),n}.apply(m,u),a!==void 0&&(E.exports=a)},1140:(E,m,r)=>{var u,a,u,a;u=[r(1047)],a=function(n){"use strict";u=[],a=function(){return n}.apply(m,u),a!==void 0&&(E.exports=a)}.apply(m,u),a!==void 0&&(E.exports=a)},4647:(E,m,r)=>{var u,a;u=[r(1047)],a=function(n){"use strict";var l=window.jQuery,h=window.$;n.noConflict=function(f){return window.$===n&&(window.$=h),f&&window.jQuery===n&&(window.jQuery=l),n},typeof noGlobal=="undefined"&&(window.jQuery=window.$=n)}.apply(m,u),a!==void 0&&(E.exports=a)},3650:(E,m,r)=>{var u,a;u=[r(1047),r(5037),r(4477),r(7958),r(1843),r(5382),r(2099),r(4048),r(1229),r(8537),r(5217),r(234),r(7897),r(1600),r(2624),r(9249),r(1788),r(4364),r(3926),r(7411),r(6118),r(767),r(4289),r(8342),r(2042),r(5020),r(1143),r(1655),r(4469),r(1389),r(1140),r(4647)],a=function(n){"use strict";return n}.apply(m,u),a!==void 0&&(E.exports=a)},7897:(E,m,r)=>{var u,a;u=[r(1047),r(5958),r(6453),r(3938),r(5846),r(1320),r(6440),r(9391),r(6781),r(2480),r(7291),r(7675),r(7610),r(937),r(8956),r(5650),r(3969),r(7258),r(9441),r(6456),r(4477),r(5037),r(234)],a=function(n,l,h,f,s,p,S,i,g,d,c,y,v,I,C,D,R,x,_){"use strict";var B=/<script|<style|<link/i,w=/checked\s*(?:[^=]|=\s*.checked.)/i,P=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function T(k,H){return _(k,"table")&&_(H.nodeType!==11?H:H.firstChild,"tr")&&n(k).children("tbody")[0]||k}function b(k){return k.type=(k.getAttribute("type")!==null)+"/"+k.type,k}function F(k){return(k.type||"").slice(0,5)==="true/"?k.type=k.type.slice(5):k.removeAttribute("type"),k}function j(k,H){var U,Q,ne,ie,J,ge,ye;if(H.nodeType===1){if(C.hasData(k)&&(ie=C.get(k),ye=ie.events,ye)){C.remove(H,"handle events");for(ne in ye)for(U=0,Q=ye[ne].length;U<Q;U++)n.event.add(H,ne,ye[ne][U])}D.hasData(k)&&(J=D.access(k),ge=n.extend({},J),D.set(H,ge))}}function K(k,H){var U=H.nodeName.toLowerCase();U==="input"&&p.test(k.type)?H.checked=k.checked:(U==="input"||U==="textarea")&&(H.defaultValue=k.defaultValue)}function W(k,H,U,Q){H=h(H);var ne,ie,J,ge,ye,Ce,Be=0,it=k.length,yt=it-1,Dt=H[0],Pt=f(Dt);if(Pt||it>1&&typeof Dt=="string"&&!I.checkClone&&w.test(Dt))return k.each(function(de){var Ne=k.eq(de);Pt&&(H[0]=Dt.call(this,de,Ne.html())),W(Ne,H,U,Q)});if(it&&(ne=v(H,k[0].ownerDocument,!1,k,Q),ie=ne.firstChild,ne.childNodes.length===1&&(ne=ie),ie||Q)){for(J=n.map(c(ne,"script"),b),ge=J.length;Be<it;Be++)ye=ne,Be!==yt&&(ye=n.clone(ye,!0,!0),ge&&n.merge(J,c(ye,"script"))),U.call(k[Be],ye,Be);if(ge)for(Ce=J[J.length-1].ownerDocument,n.map(J,F),Be=0;Be<ge;Be++)ye=J[Be],g.test(ye.type||"")&&!C.access(ye,"globalEval")&&n.contains(Ce,ye)&&(ye.src&&(ye.type||"").toLowerCase()!=="module"?n._evalUrl&&!ye.noModule&&n._evalUrl(ye.src,{nonce:ye.nonce||ye.getAttribute("nonce")},Ce):x(ye.textContent.replace(P,""),ye,Ce))}return k}function $(k,H,U){for(var Q,ne=H?n.filter(H,k):k,ie=0;(Q=ne[ie])!=null;ie++)!U&&Q.nodeType===1&&n.cleanData(c(Q)),Q.parentNode&&(U&&l(Q)&&y(c(Q,"script")),Q.parentNode.removeChild(Q));return k}return n.extend({htmlPrefilter:function(k){return k},clone:function(k,H,U){var Q,ne,ie,J,ge=k.cloneNode(!0),ye=l(k);if(!I.noCloneChecked&&(k.nodeType===1||k.nodeType===11)&&!n.isXMLDoc(k))for(J=c(ge),ie=c(k),Q=0,ne=ie.length;Q<ne;Q++)K(ie[Q],J[Q]);if(H)if(U)for(ie=ie||c(k),J=J||c(ge),Q=0,ne=ie.length;Q<ne;Q++)j(ie[Q],J[Q]);else j(k,ge);return J=c(ge,"script"),J.length>0&&y(J,!ye&&c(k,"script")),ge},cleanData:function(k){for(var H,U,Q,ne=n.event.special,ie=0;(U=k[ie])!==void 0;ie++)if(R(U)){if(H=U[C.expando]){if(H.events)for(Q in H.events)ne[Q]?n.event.remove(U,Q):n.removeEvent(U,Q,H.handle);U[C.expando]=void 0}U[D.expando]&&(U[D.expando]=void 0)}}}),n.fn.extend({detach:function(k){return $(this,k,!0)},remove:function(k){return $(this,k)},text:function(k){return S(this,function(H){return H===void 0?n.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=H)})},null,k,arguments.length)},append:function(){return W(this,arguments,function(k){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var H=T(this,k);H.appendChild(k)}})},prepend:function(){return W(this,arguments,function(k){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var H=T(this,k);H.insertBefore(k,H.firstChild)}})},before:function(){return W(this,arguments,function(k){this.parentNode&&this.parentNode.insertBefore(k,this)})},after:function(){return W(this,arguments,function(k){this.parentNode&&this.parentNode.insertBefore(k,this.nextSibling)})},empty:function(){for(var k,H=0;(k=this[H])!=null;H++)k.nodeType===1&&(n.cleanData(c(k,!1)),k.textContent="");return this},clone:function(k,H){return k=k==null?!1:k,H=H==null?k:H,this.map(function(){return n.clone(this,k,H)})},html:function(k){return S(this,function(H){var U=this[0]||{},Q=0,ne=this.length;if(H===void 0&&U.nodeType===1)return U.innerHTML;if(typeof H=="string"&&!B.test(H)&&!d[(i.exec(H)||["",""])[1].toLowerCase()]){H=n.htmlPrefilter(H);try{for(;Q<ne;Q++)U=this[Q]||{},U.nodeType===1&&(n.cleanData(c(U,!1)),U.innerHTML=H);U=0}catch(ie){}}U&&this.empty().append(H)},null,k,arguments.length)},replaceWith:function(){var k=[];return W(this,arguments,function(H){var U=this.parentNode;n.inArray(this,k)<0&&(n.cleanData(c(this)),U&&U.replaceChild(H,this))},k)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(k,H){n.fn[k]=function(U){for(var Q,ne=[],ie=n(U),J=ie.length-1,ge=0;ge<=J;ge++)Q=ge===J?this:this.clone(!0),n(ie[ge])[H](Q),s.apply(ne,Q.get());return this.pushStack(ne)}}),n}.apply(m,u),a!==void 0&&(E.exports=a)},1600:(E,m,r)=>{var u,a;u=[r(3926)],a=function(n){"use strict";return n._evalUrl=function(l,h,f){return n.ajax({url:l,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(s){n.globalEval(s,h,f)}})},n._evalUrl}.apply(m,u),a!==void 0&&(E.exports=a)},7610:(E,m,r)=>{var u,a;u=[r(1047),r(7539),r(5958),r(9391),r(6781),r(2480),r(7291),r(7675)],a=function(n,l,h,f,s,p,S,i){"use strict";var g=/<|&#?\w+;/;function d(c,y,v,I,C){for(var D,R,x,_,B,w,P=y.createDocumentFragment(),T=[],b=0,F=c.length;b<F;b++)if(D=c[b],D||D===0)if(l(D)==="object")n.merge(T,D.nodeType?[D]:D);else if(!g.test(D))T.push(y.createTextNode(D));else{for(R=R||P.appendChild(y.createElement("div")),x=(f.exec(D)||["",""])[1].toLowerCase(),_=p[x]||p._default,R.innerHTML=_[1]+n.htmlPrefilter(D)+_[2],w=_[0];w--;)R=R.lastChild;n.merge(T,R.childNodes),R=P.firstChild,R.textContent=""}for(P.textContent="",b=0;D=T[b++];){if(I&&n.inArray(D,I)>-1){C&&C.push(D);continue}if(B=h(D),R=S(P.appendChild(D),"script"),B&&i(R),v)for(w=0;D=R[w++];)s.test(D.type||"")&&v.push(D)}return P}return d}.apply(m,u),a!==void 0&&(E.exports=a)},7291:(E,m,r)=>{var u,a;u=[r(1047),r(9441)],a=function(n,l){"use strict";function h(f,s){var p;return typeof f.getElementsByTagName!="undefined"?p=f.getElementsByTagName(s||"*"):typeof f.querySelectorAll!="undefined"?p=f.querySelectorAll(s||"*"):p=[],s===void 0||s&&l(f,s)?n.merge([f],p):p}return h}.apply(m,u),a!==void 0&&(E.exports=a)},7675:(E,m,r)=>{var u,a;u=[r(8956)],a=function(n){"use strict";function l(h,f){for(var s=0,p=h.length;s<p;s++)n.set(h[s],"globalEval",!f||n.get(f[s],"globalEval"))}return l}.apply(m,u),a!==void 0&&(E.exports=a)},937:(E,m,r)=>{var u,a;u=[r(3187),r(5751)],a=function(n,l){"use strict";return function(){var h=n.createDocumentFragment(),f=h.appendChild(n.createElement("div")),s=n.createElement("input");s.setAttribute("type","radio"),s.setAttribute("checked","checked"),s.setAttribute("name","t"),f.appendChild(s),l.checkClone=f.cloneNode(!0).cloneNode(!0).lastChild.checked,f.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!f.cloneNode(!0).lastChild.defaultValue,f.innerHTML="<option></option>",l.option=!!f.lastChild}(),l}.apply(m,u),a!==void 0&&(E.exports=a)},6781:(E,m,r)=>{var u;u=function(){"use strict";return/^$|^module$|\/(?:java|ecma)script/i}.call(m,r,m,E),u!==void 0&&(E.exports=u)},9391:(E,m,r)=>{var u;u=function(){"use strict";return/<([a-z][^\/\0>\x20\t\r\n\f]*)/i}.call(m,r,m,E),u!==void 0&&(E.exports=u)},2480:(E,m,r)=>{var u,a;u=[r(937)],a=function(n){"use strict";var l={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return l.tbody=l.tfoot=l.colgroup=l.caption=l.thead,l.th=l.td,n.option||(l.optgroup=l.option=[1,"<select multiple='multiple'>","</select>"]),l}.apply(m,u),a!==void 0&&(E.exports=a)},1655:(E,m,r)=>{var u,a;u=[r(1047),r(6440),r(7963),r(3938),r(9933),r(9885),r(1313),r(2225),r(9334),r(6456),r(9249),r(5037)],a=function(n,l,h,f,s,p,S,i,g){"use strict";return n.offset={setOffset:function(d,c,y){var v,I,C,D,R,x,_,B=n.css(d,"position"),w=n(d),P={};B==="static"&&(d.style.position="relative"),R=w.offset(),C=n.css(d,"top"),x=n.css(d,"left"),_=(B==="absolute"||B==="fixed")&&(C+x).indexOf("auto")>-1,_?(v=w.position(),D=v.top,I=v.left):(D=parseFloat(C)||0,I=parseFloat(x)||0),f(c)&&(c=c.call(d,y,n.extend({},R))),c.top!=null&&(P.top=c.top-R.top+D),c.left!=null&&(P.left=c.left-R.left+I),"using"in c?c.using.call(d,P):w.css(P)}},n.fn.extend({offset:function(d){if(arguments.length)return d===void 0?this:this.each(function(I){n.offset.setOffset(this,d,I)});var c,y,v=this[0];if(v)return v.getClientRects().length?(c=v.getBoundingClientRect(),y=v.ownerDocument.defaultView,{top:c.top+y.pageYOffset,left:c.left+y.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var d,c,y,v=this[0],I={top:0,left:0};if(n.css(v,"position")==="fixed")c=v.getBoundingClientRect();else{for(c=this.offset(),y=v.ownerDocument,d=v.offsetParent||y.documentElement;d&&(d===y.body||d===y.documentElement)&&n.css(d,"position")==="static";)d=d.parentNode;d&&d!==v&&d.nodeType===1&&(I=n(d).offset(),I.top+=n.css(d,"borderTopWidth",!0),I.left+=n.css(d,"borderLeftWidth",!0))}return{top:c.top-I.top-n.css(v,"marginTop",!0),left:c.left-I.left-n.css(v,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var d=this.offsetParent;d&&n.css(d,"position")==="static";)d=d.offsetParent;return d||h})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(d,c){var y=c==="pageYOffset";n.fn[d]=function(v){return l(this,function(I,C,D){var R;if(g(I)?R=I:I.nodeType===9&&(R=I.defaultView),D===void 0)return R?R[c]:I[C];R?R.scrollTo(y?R.pageXOffset:D,y?D:R.pageYOffset):I[C]=D},d,v,arguments.length)}}),n.each(["top","left"],function(d,c){n.cssHooks[c]=S(i.pixelPosition,function(y,v){if(v)return v=p(y,c),s.test(v)?n(y).position()[c]+"px":v})}),n}.apply(m,u),a!==void 0&&(E.exports=a)},1229:(E,m,r)=>{var u,a;u=[r(1047),r(8956),r(1843),r(7958)],a=function(n,l){"use strict";return n.extend({queue:function(h,f,s){var p;if(h)return f=(f||"fx")+"queue",p=l.get(h,f),s&&(!p||Array.isArray(s)?p=l.access(h,f,n.makeArray(s)):p.push(s)),p||[]},dequeue:function(h,f){f=f||"fx";var s=n.queue(h,f),p=s.length,S=s.shift(),i=n._queueHooks(h,f),g=function(){n.dequeue(h,f)};S==="inprogress"&&(S=s.shift(),p--),S&&(f==="fx"&&s.unshift("inprogress"),delete i.stop,S.call(h,g,i)),!p&&i&&i.empty.fire()},_queueHooks:function(h,f){var s=f+"queueHooks";return l.get(h,s)||l.access(h,s,{empty:n.Callbacks("once memory").add(function(){l.remove(h,[f+"queue",s])})})}}),n.fn.extend({queue:function(h,f){var s=2;return typeof h!="string"&&(f=h,h="fx",s--),arguments.length<s?n.queue(this[0],h):f===void 0?this:this.each(function(){var p=n.queue(this,h,f);n._queueHooks(this,h),h==="fx"&&p[0]!=="inprogress"&&n.dequeue(this,h)})},dequeue:function(h){return this.each(function(){n.dequeue(this,h)})},clearQueue:function(h){return this.queue(h||"fx",[])},promise:function(h,f){var s,p=1,S=n.Deferred(),i=this,g=this.length,d=function(){--p||S.resolveWith(i,[i])};for(typeof h!="string"&&(f=h,h=void 0),h=h||"fx";g--;)s=l.get(i[g],h+"queueHooks"),s&&s.empty&&(p++,s.empty.add(d));return d(),S.promise(f)}}),n}.apply(m,u),a!==void 0&&(E.exports=a)},8537:(E,m,r)=>{var u,a;u=[r(1047),r(1229),r(5020)],a=function(n){"use strict";return n.fn.delay=function(l,h){return l=n.fx&&n.fx.speeds[l]||l,h=h||"fx",this.queue(h,function(f,s){var p=window.setTimeout(f,l);s.stop=function(){window.clearTimeout(p)}})},n.fn.delay}.apply(m,u),a!==void 0&&(E.exports=a)},5037:(E,m,r)=>{var u,a;u=[r(1047),r(9441),r(4959),r(3187),r(249),r(6014),r(3791),r(5846),r(8482),r(4506),r(2502),r(8879),r(211),r(5751),r(8721),r(590)],a=function(n,l,h,f,s,p,S,i,g,d,c,y,v,I){"use strict";var C=f,D=i;(function(){var R,x,_,B,w,P=D,T,b,F,j,K,W=n.expando,$=0,k=0,H=Se(),U=Se(),Q=Se(),ne=Se(),ie=function(O,q){return O===q&&(w=!0),0},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ge="(?:\\\\[\\da-fA-F]{1,6}"+y+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ye="\\["+y+"*("+ge+")(?:"+y+"*([*^$|!~]?=)"+y+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ge+"))|)"+y+"*\\]",Ce=":("+ge+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ye+")*)|.*)\\)|)",Be=new RegExp(y+"+","g"),it=new RegExp("^"+y+"*,"+y+"*"),yt=new RegExp("^"+y+"*([>+~]|"+y+")"+y+"*"),Dt=new RegExp(y+"|>"),Pt=new RegExp(Ce),de=new RegExp("^"+ge+"$"),Ne={ID:new RegExp("^#("+ge+")"),CLASS:new RegExp("^\\.("+ge+")"),TAG:new RegExp("^("+ge+"|[*])"),ATTR:new RegExp("^"+ye),PSEUDO:new RegExp("^"+Ce),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+y+"*(even|odd|(([+-]|)(\\d*)n|)"+y+"*(?:([+-]|)"+y+"*(\\d+)|))"+y+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+y+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+y+"*((?:-\\d)?\\d*)"+y+"*\\)|)(?=[^-]|$)","i")},Ie=/^(?:input|select|textarea|button)$/i,ke=/^h\d$/i,ht=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ut=/[+~]/,tt=new RegExp("\\\\[\\da-fA-F]{1,6}"+y+"?|\\\\([^\\r\\n\\f])","g"),Me=function(O,q){var Z="0x"+O.slice(1)-65536;return q||(Z<0?String.fromCharCode(Z+65536):String.fromCharCode(Z>>10|55296,Z&1023|56320))},fe=function(){lt()},we=Tt(function(O){return O.disabled===!0&&l(O,"fieldset")},{dir:"parentNode",next:"legend"});function Te(){try{return T.activeElement}catch(O){}}try{P.apply(h=g.call(C.childNodes),C.childNodes),h[C.childNodes.length].nodeType}catch(O){P={apply:function(q,Z){D.apply(q,g.call(Z))},call:function(q){D.apply(q,g.call(arguments,1))}}}function X(O,q,Z,ee){var se,De,Ae,be,Ee,Ke,re,ae=q&&q.ownerDocument,ue=q?q.nodeType:9;if(Z=Z||[],typeof O!="string"||!O||ue!==1&&ue!==9&&ue!==11)return Z;if(!ee&&(lt(q),q=q||T,F)){if(ue!==11&&(Ee=ht.exec(O)))if(se=Ee[1]){if(ue===9)if(Ae=q.getElementById(se)){if(Ae.id===se)return P.call(Z,Ae),Z}else return Z;else if(ae&&(Ae=ae.getElementById(se))&&X.contains(q,Ae)&&Ae.id===se)return P.call(Z,Ae),Z}else{if(Ee[2])return P.apply(Z,q.getElementsByTagName(O)),Z;if((se=Ee[3])&&q.getElementsByClassName)return P.apply(Z,q.getElementsByClassName(se)),Z}if(!ne[O+" "]&&(!j||!j.test(O))){if(re=O,ae=q,ue===1&&(Dt.test(O)||yt.test(O))){for(ae=Ut.test(O)&&et(q.parentNode)||q,(ae!=q||!I.scope)&&((be=q.getAttribute("id"))?be=n.escapeSelector(be):q.setAttribute("id",be=W)),Ke=Bt(O),De=Ke.length;De--;)Ke[De]=(be?"#"+be:":scope")+" "+Lt(Ke[De]);re=Ke.join(",")}try{return P.apply(Z,ae.querySelectorAll(re)),Z}catch(le){ne(O,!0)}finally{be===W&&q.removeAttribute("id")}}}return On(O.replace(v,"$1"),q,Z,ee)}function Se(){var O=[];function q(Z,ee){return O.push(Z+" ")>x.cacheLength&&delete q[O.shift()],q[Z+" "]=ee}return q}function he(O){return O[W]=!0,O}function ve(O){var q=T.createElement("fieldset");try{return!!O(q)}catch(Z){return!1}finally{q.parentNode&&q.parentNode.removeChild(q),q=null}}function Fe(O){return function(q){return l(q,"input")&&q.type===O}}function Ge(O){return function(q){return(l(q,"input")||l(q,"button"))&&q.type===O}}function Ue(O){return function(q){return"form"in q?q.parentNode&&q.disabled===!1?"label"in q?"label"in q.parentNode?q.parentNode.disabled===O:q.disabled===O:q.isDisabled===O||q.isDisabled!==!O&&we(q)===O:q.disabled===O:"label"in q?q.disabled===O:!1}}function qe(O){return he(function(q){return q=+q,he(function(Z,ee){for(var se,De=O([],Z.length,q),Ae=De.length;Ae--;)Z[se=De[Ae]]&&(Z[se]=!(ee[se]=Z[se]))})})}function et(O){return O&&typeof O.getElementsByTagName!="undefined"&&O}function lt(O){var q,Z=O?O.ownerDocument||O:C;return Z==T||Z.nodeType!==9||!Z.documentElement||(T=Z,b=T.documentElement,F=!n.isXMLDoc(T),K=b.matches||b.webkitMatchesSelector||b.msMatchesSelector,b.msMatchesSelector&&C!=T&&(q=T.defaultView)&&q.top!==q&&q.addEventListener("unload",fe),I.getById=ve(function(ee){return b.appendChild(ee).id=n.expando,!T.getElementsByName||!T.getElementsByName(n.expando).length}),I.disconnectedMatch=ve(function(ee){return K.call(ee,"*")}),I.scope=ve(function(){return T.querySelectorAll(":scope")}),I.cssHas=ve(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(ee){return!0}}),I.getById?(x.filter.ID=function(ee){var se=ee.replace(tt,Me);return function(De){return De.getAttribute("id")===se}},x.find.ID=function(ee,se){if(typeof se.getElementById!="undefined"&&F){var De=se.getElementById(ee);return De?[De]:[]}}):(x.filter.ID=function(ee){var se=ee.replace(tt,Me);return function(De){var Ae=typeof De.getAttributeNode!="undefined"&&De.getAttributeNode("id");return Ae&&Ae.value===se}},x.find.ID=function(ee,se){if(typeof se.getElementById!="undefined"&&F){var De,Ae,be,Ee=se.getElementById(ee);if(Ee){if(De=Ee.getAttributeNode("id"),De&&De.value===ee)return[Ee];for(be=se.getElementsByName(ee),Ae=0;Ee=be[Ae++];)if(De=Ee.getAttributeNode("id"),De&&De.value===ee)return[Ee]}return[]}}),x.find.TAG=function(ee,se){return typeof se.getElementsByTagName!="undefined"?se.getElementsByTagName(ee):se.querySelectorAll(ee)},x.find.CLASS=function(ee,se){if(typeof se.getElementsByClassName!="undefined"&&F)return se.getElementsByClassName(ee)},j=[],ve(function(ee){var se;b.appendChild(ee).innerHTML="<a id='"+W+"' href='' disabled='disabled'></a><select id='"+W+"-\r\\' disabled='disabled'><option selected=''></option></select>",ee.querySelectorAll("[selected]").length||j.push("\\["+y+"*(?:value|"+J+")"),ee.querySelectorAll("[id~="+W+"-]").length||j.push("~="),ee.querySelectorAll("a#"+W+"+*").length||j.push(".#.+[+~]"),ee.querySelectorAll(":checked").length||j.push(":checked"),se=T.createElement("input"),se.setAttribute("type","hidden"),ee.appendChild(se).setAttribute("name","D"),b.appendChild(ee).disabled=!0,ee.querySelectorAll(":disabled").length!==2&&j.push(":enabled",":disabled"),se=T.createElement("input"),se.setAttribute("name",""),ee.appendChild(se),ee.querySelectorAll("[name='']").length||j.push("\\["+y+"*name"+y+"*="+y+`*(?:''|"")`)}),I.cssHas||j.push(":has"),j=j.length&&new RegExp(j.join("|")),ie=function(ee,se){if(ee===se)return w=!0,0;var De=!ee.compareDocumentPosition-!se.compareDocumentPosition;return De||(De=(ee.ownerDocument||ee)==(se.ownerDocument||se)?ee.compareDocumentPosition(se):1,De&1||!I.sortDetached&&se.compareDocumentPosition(ee)===De?ee===T||ee.ownerDocument==C&&X.contains(C,ee)?-1:se===T||se.ownerDocument==C&&X.contains(C,se)?1:B?s.call(B,ee)-s.call(B,se):0:De&4?-1:1)}),T}X.matches=function(O,q){return X(O,null,null,q)},X.matchesSelector=function(O,q){if(lt(O),F&&!ne[q+" "]&&(!j||!j.test(q)))try{var Z=K.call(O,q);if(Z||I.disconnectedMatch||O.document&&O.document.nodeType!==11)return Z}catch(ee){ne(q,!0)}return X(q,T,null,[O]).length>0},X.contains=function(O,q){return(O.ownerDocument||O)!=T&&lt(O),n.contains(O,q)},X.attr=function(O,q){(O.ownerDocument||O)!=T&&lt(O);var Z=x.attrHandle[q.toLowerCase()],ee=Z&&p.call(x.attrHandle,q.toLowerCase())?Z(O,q,!F):void 0;return ee!==void 0?ee:O.getAttribute(q)},X.error=function(O){throw new Error("Syntax error, unrecognized expression: "+O)},n.uniqueSort=function(O){var q,Z=[],ee=0,se=0;if(w=!I.sortStable,B=!I.sortStable&&g.call(O,0),d.call(O,ie),w){for(;q=O[se++];)q===O[se]&&(ee=Z.push(se));for(;ee--;)c.call(O,Z[ee],1)}return B=null,O},n.fn.uniqueSort=function(){return this.pushStack(n.uniqueSort(g.apply(this)))},x=n.expr={cacheLength:50,createPseudo:he,match:Ne,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(O){return O[1]=O[1].replace(tt,Me),O[3]=(O[3]||O[4]||O[5]||"").replace(tt,Me),O[2]==="~="&&(O[3]=" "+O[3]+" "),O.slice(0,4)},CHILD:function(O){return O[1]=O[1].toLowerCase(),O[1].slice(0,3)==="nth"?(O[3]||X.error(O[0]),O[4]=+(O[4]?O[5]+(O[6]||1):2*(O[3]==="even"||O[3]==="odd")),O[5]=+(O[7]+O[8]||O[3]==="odd")):O[3]&&X.error(O[0]),O},PSEUDO:function(O){var q,Z=!O[6]&&O[2];return Ne.CHILD.test(O[0])?null:(O[3]?O[2]=O[4]||O[5]||"":Z&&Pt.test(Z)&&(q=Bt(Z,!0))&&(q=Z.indexOf(")",Z.length-q)-Z.length)&&(O[0]=O[0].slice(0,q),O[2]=Z.slice(0,q)),O.slice(0,3))}},filter:{TAG:function(O){var q=O.replace(tt,Me).toLowerCase();return O==="*"?function(){return!0}:function(Z){return l(Z,q)}},CLASS:function(O){var q=H[O+" "];return q||(q=new RegExp("(^|"+y+")"+O+"("+y+"|$)"))&&H(O,function(Z){return q.test(typeof Z.className=="string"&&Z.className||typeof Z.getAttribute!="undefined"&&Z.getAttribute("class")||"")})},ATTR:function(O,q,Z){return function(ee){var se=X.attr(ee,O);return se==null?q==="!=":q?(se+="",q==="="?se===Z:q==="!="?se!==Z:q==="^="?Z&&se.indexOf(Z)===0:q==="*="?Z&&se.indexOf(Z)>-1:q==="$="?Z&&se.slice(-Z.length)===Z:q==="~="?(" "+se.replace(Be," ")+" ").indexOf(Z)>-1:q==="|="?se===Z||se.slice(0,Z.length+1)===Z+"-":!1):!0}},CHILD:function(O,q,Z,ee,se){var De=O.slice(0,3)!=="nth",Ae=O.slice(-4)!=="last",be=q==="of-type";return ee===1&&se===0?function(Ee){return!!Ee.parentNode}:function(Ee,Ke,re){var ae,ue,le,xe,We,_e=De!==Ae?"nextSibling":"previousSibling",ut=Ee.parentNode,At=be&&Ee.nodeName.toLowerCase(),wt=!re&&!be,gt=!1;if(ut){if(De){for(;_e;){for(le=Ee;le=le[_e];)if(be?l(le,At):le.nodeType===1)return!1;We=_e=O==="only"&&!We&&"nextSibling"}return!0}if(We=[Ae?ut.firstChild:ut.lastChild],Ae&&wt){for(ue=ut[W]||(ut[W]={}),ae=ue[O]||[],xe=ae[0]===$&&ae[1],gt=xe&&ae[2],le=xe&&ut.childNodes[xe];le=++xe&&le&&le[_e]||(gt=xe=0)||We.pop();)if(le.nodeType===1&&++gt&&le===Ee){ue[O]=[$,xe,gt];break}}else if(wt&&(ue=Ee[W]||(Ee[W]={}),ae=ue[O]||[],xe=ae[0]===$&&ae[1],gt=xe),gt===!1)for(;(le=++xe&&le&&le[_e]||(gt=xe=0)||We.pop())&&!((be?l(le,At):le.nodeType===1)&&++gt&&(wt&&(ue=le[W]||(le[W]={}),ue[O]=[$,gt]),le===Ee)););return gt-=se,gt===ee||gt%ee===0&&gt/ee>=0}}},PSEUDO:function(O,q){var Z,ee=x.pseudos[O]||x.setFilters[O.toLowerCase()]||X.error("unsupported pseudo: "+O);return ee[W]?ee(q):ee.length>1?(Z=[O,O,"",q],x.setFilters.hasOwnProperty(O.toLowerCase())?he(function(se,De){for(var Ae,be=ee(se,q),Ee=be.length;Ee--;)Ae=s.call(se,be[Ee]),se[Ae]=!(De[Ae]=be[Ee])}):function(se){return ee(se,0,Z)}):ee}},pseudos:{not:he(function(O){var q=[],Z=[],ee=It(O.replace(v,"$1"));return ee[W]?he(function(se,De,Ae,be){for(var Ee,Ke=ee(se,null,be,[]),re=se.length;re--;)(Ee=Ke[re])&&(se[re]=!(De[re]=Ee))}):function(se,De,Ae){return q[0]=se,ee(q,null,Ae,Z),q[0]=null,!Z.pop()}}),has:he(function(O){return function(q){return X(O,q).length>0}}),contains:he(function(O){return O=O.replace(tt,Me),function(q){return(q.textContent||n.text(q)).indexOf(O)>-1}}),lang:he(function(O){return de.test(O||"")||X.error("unsupported lang: "+O),O=O.replace(tt,Me).toLowerCase(),function(q){var Z;do if(Z=F?q.lang:q.getAttribute("xml:lang")||q.getAttribute("lang"))return Z=Z.toLowerCase(),Z===O||Z.indexOf(O+"-")===0;while((q=q.parentNode)&&q.nodeType===1);return!1}}),target:function(O){var q=window.location&&window.location.hash;return q&&q.slice(1)===O.id},root:function(O){return O===b},focus:function(O){return O===Te()&&T.hasFocus()&&!!(O.type||O.href||~O.tabIndex)},enabled:Ue(!1),disabled:Ue(!0),checked:function(O){return l(O,"input")&&!!O.checked||l(O,"option")&&!!O.selected},selected:function(O){return O.parentNode&&O.parentNode.selectedIndex,O.selected===!0},empty:function(O){for(O=O.firstChild;O;O=O.nextSibling)if(O.nodeType<6)return!1;return!0},parent:function(O){return!x.pseudos.empty(O)},header:function(O){return ke.test(O.nodeName)},input:function(O){return Ie.test(O.nodeName)},button:function(O){return l(O,"input")&&O.type==="button"||l(O,"button")},text:function(O){var q;return l(O,"input")&&O.type==="text"&&((q=O.getAttribute("type"))==null||q.toLowerCase()==="text")},first:qe(function(){return[0]}),last:qe(function(O,q){return[q-1]}),eq:qe(function(O,q,Z){return[Z<0?Z+q:Z]}),even:qe(function(O,q){for(var Z=0;Z<q;Z+=2)O.push(Z);return O}),odd:qe(function(O,q){for(var Z=1;Z<q;Z+=2)O.push(Z);return O}),lt:qe(function(O,q,Z){var ee;for(Z<0?ee=Z+q:Z>q?ee=q:ee=Z;--ee>=0;)O.push(ee);return O}),gt:qe(function(O,q,Z){for(var ee=Z<0?Z+q:Z;++ee<q;)O.push(ee);return O})}},x.pseudos.nth=x.pseudos.eq;for(R in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[R]=Fe(R);for(R in{submit:!0,reset:!0})x.pseudos[R]=Ge(R);function mt(){}mt.prototype=x.filters=x.pseudos,x.setFilters=new mt;function Bt(O,q){var Z,ee,se,De,Ae,be,Ee,Ke=U[O+" "];if(Ke)return q?0:Ke.slice(0);for(Ae=O,be=[],Ee=x.preFilter;Ae;){(!Z||(ee=it.exec(Ae)))&&(ee&&(Ae=Ae.slice(ee[0].length)||Ae),be.push(se=[])),Z=!1,(ee=yt.exec(Ae))&&(Z=ee.shift(),se.push({value:Z,type:ee[0].replace(v," ")}),Ae=Ae.slice(Z.length));for(De in x.filter)(ee=Ne[De].exec(Ae))&&(!Ee[De]||(ee=Ee[De](ee)))&&(Z=ee.shift(),se.push({value:Z,type:De,matches:ee}),Ae=Ae.slice(Z.length));if(!Z)break}return q?Ae.length:Ae?X.error(O):U(O,be).slice(0)}function Lt(O){for(var q=0,Z=O.length,ee="";q<Z;q++)ee+=O[q].value;return ee}function Tt(O,q,Z){var ee=q.dir,se=q.next,De=se||ee,Ae=Z&&De==="parentNode",be=k++;return q.first?function(Ee,Ke,re){for(;Ee=Ee[ee];)if(Ee.nodeType===1||Ae)return O(Ee,Ke,re);return!1}:function(Ee,Ke,re){var ae,ue,le=[$,be];if(re){for(;Ee=Ee[ee];)if((Ee.nodeType===1||Ae)&&O(Ee,Ke,re))return!0}else for(;Ee=Ee[ee];)if(Ee.nodeType===1||Ae)if(ue=Ee[W]||(Ee[W]={}),se&&l(Ee,se))Ee=Ee[ee]||Ee;else{if((ae=ue[De])&&ae[0]===$&&ae[1]===be)return le[2]=ae[2];if(ue[De]=le,le[2]=O(Ee,Ke,re))return!0}return!1}}function dn(O){return O.length>1?function(q,Z,ee){for(var se=O.length;se--;)if(!O[se](q,Z,ee))return!1;return!0}:O[0]}function fn(O,q,Z){for(var ee=0,se=q.length;ee<se;ee++)X(O,q[ee],Z);return Z}function Tn(O,q,Z,ee,se){for(var De,Ae=[],be=0,Ee=O.length,Ke=q!=null;be<Ee;be++)(De=O[be])&&(!Z||Z(De,ee,se))&&(Ae.push(De),Ke&&q.push(be));return Ae}function Fn(O,q,Z,ee,se,De){return ee&&!ee[W]&&(ee=Fn(ee)),se&&!se[W]&&(se=Fn(se,De)),he(function(Ae,be,Ee,Ke){var re,ae,ue,le,xe=[],We=[],_e=be.length,ut=Ae||fn(q||"*",Ee.nodeType?[Ee]:Ee,[]),At=O&&(Ae||!q)?Tn(ut,xe,O,Ee,Ke):ut;if(Z?(le=se||(Ae?O:_e||ee)?[]:be,Z(At,le,Ee,Ke)):le=At,ee)for(re=Tn(le,We),ee(re,[],Ee,Ke),ae=re.length;ae--;)(ue=re[ae])&&(le[We[ae]]=!(At[We[ae]]=ue));if(Ae){if(se||O){if(se){for(re=[],ae=le.length;ae--;)(ue=le[ae])&&re.push(At[ae]=ue);se(null,le=[],re,Ke)}for(ae=le.length;ae--;)(ue=le[ae])&&(re=se?s.call(Ae,ue):xe[ae])>-1&&(Ae[re]=!(be[re]=ue))}}else le=Tn(le===be?le.splice(_e,le.length):le),se?se(null,be,le,Ke):P.apply(be,le)})}function Ot(O){for(var q,Z,ee,se=O.length,De=x.relative[O[0].type],Ae=De||x.relative[" "],be=De?1:0,Ee=Tt(function(ae){return ae===q},Ae,!0),Ke=Tt(function(ae){return s.call(q,ae)>-1},Ae,!0),re=[function(ae,ue,le){var xe=!De&&(le||ue!=_)||((q=ue).nodeType?Ee(ae,ue,le):Ke(ae,ue,le));return q=null,xe}];be<se;be++)if(Z=x.relative[O[be].type])re=[Tt(dn(re),Z)];else{if(Z=x.filter[O[be].type].apply(null,O[be].matches),Z[W]){for(ee=++be;ee<se&&!x.relative[O[ee].type];ee++);return Fn(be>1&&dn(re),be>1&&Lt(O.slice(0,be-1).concat({value:O[be-2].type===" "?"*":""})).replace(v,"$1"),Z,be<ee&&Ot(O.slice(be,ee)),ee<se&&Ot(O=O.slice(ee)),ee<se&&Lt(O))}re.push(Z)}return dn(re)}function Bn(O,q){var Z=q.length>0,ee=O.length>0,se=function(De,Ae,be,Ee,Ke){var re,ae,ue,le=0,xe="0",We=De&&[],_e=[],ut=_,At=De||ee&&x.find.TAG("*",Ke),wt=$+=ut==null?1:Math.random()||.1,gt=At.length;for(Ke&&(_=Ae==T||Ae||Ke);xe!==gt&&(re=At[xe])!=null;xe++){if(ee&&re){for(ae=0,!Ae&&re.ownerDocument!=T&&(lt(re),be=!F);ue=O[ae++];)if(ue(re,Ae||T,be)){P.call(Ee,re);break}Ke&&($=wt)}Z&&((re=!ue&&re)&&le--,De&&We.push(re))}if(le+=xe,Z&&xe!==le){for(ae=0;ue=q[ae++];)ue(We,_e,Ae,be);if(De){if(le>0)for(;xe--;)We[xe]||_e[xe]||(_e[xe]=S.call(Ee));_e=Tn(_e)}P.apply(Ee,_e),Ke&&!De&&_e.length>0&&le+q.length>1&&n.uniqueSort(Ee)}return Ke&&($=wt,_=ut),We};return Z?he(se):se}function It(O,q){var Z,ee=[],se=[],De=Q[O+" "];if(!De){for(q||(q=Bt(O)),Z=q.length;Z--;)De=Ot(q[Z]),De[W]?ee.push(De):se.push(De);De=Q(O,Bn(se,ee)),De.selector=O}return De}function On(O,q,Z,ee){var se,De,Ae,be,Ee,Ke=typeof O=="function"&&O,re=!ee&&Bt(O=Ke.selector||O);if(Z=Z||[],re.length===1){if(De=re[0]=re[0].slice(0),De.length>2&&(Ae=De[0]).type==="ID"&&q.nodeType===9&&F&&x.relative[De[1].type]){if(q=(x.find.ID(Ae.matches[0].replace(tt,Me),q)||[])[0],q)Ke&&(q=q.parentNode);else return Z;O=O.slice(De.shift().value.length)}for(se=Ne.needsContext.test(O)?0:De.length;se--&&(Ae=De[se],!x.relative[be=Ae.type]);)if((Ee=x.find[be])&&(ee=Ee(Ae.matches[0].replace(tt,Me),Ut.test(De[0].type)&&et(q.parentNode)||q))){if(De.splice(se,1),O=ee.length&&Lt(De),!O)return P.apply(Z,ee),Z;break}}return(Ke||It(O,re))(ee,q,!F,Z,!q||Ut.test(O)&&et(q.parentNode)||q),Z}I.sortStable=W.split("").sort(ie).join("")===W,lt(),I.sortDetached=ve(function(O){return O.compareDocumentPosition(T.createElement("fieldset"))&1}),n.find=X,n.expr[":"]=n.expr.pseudos,n.unique=n.uniqueSort,X.compile=It,X.select=On,X.setDocument=lt,X.tokenize=Bt,X.escape=n.escapeSelector,X.getText=n.text,X.isXML=n.isXMLDoc,X.selectors=n.expr,X.support=n.support,X.uniqueSort=n.uniqueSort})()}.apply(m,u),a!==void 0&&(E.exports=a)},8721:(E,m,r)=>{var u,a;u=[r(1047)],a=function(n){"use strict";n.contains=function(l,h){var f=h&&h.parentNode;return l===f||!!(f&&f.nodeType===1&&(l.contains?l.contains(f):l.compareDocumentPosition&&l.compareDocumentPosition(f)&16))}}.apply(m,u),a!==void 0&&(E.exports=a)},590:(E,m,r)=>{var u,a;u=[r(1047)],a=function(n){"use strict";var l=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function h(f,s){return s?f==="\0"?"\uFFFD":f.slice(0,-1)+"\\"+f.charCodeAt(f.length-1).toString(16)+" ":"\\"+f}n.escapeSelector=function(f){return(f+"").replace(l,h)}}.apply(m,u),a!==void 0&&(E.exports=a)},4364:(E,m,r)=>{var u,a;u=[r(1047),r(7539),r(1320),r(3938),r(6456),r(4477),r(8313)],a=function(n,l,h,f){"use strict";var s=/\[\]$/,p=/\r?\n/g,S=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i;function g(d,c,y,v){var I;if(Array.isArray(c))n.each(c,function(C,D){y||s.test(d)?v(d,D):g(d+"["+(typeof D=="object"&&D!=null?C:"")+"]",D,y,v)});else if(!y&&l(c)==="object")for(I in c)g(d+"["+I+"]",c[I],y,v);else v(d,c)}return n.param=function(d,c){var y,v=[],I=function(C,D){var R=f(D)?D():D;v[v.length]=encodeURIComponent(C)+"="+encodeURIComponent(R==null?"":R)};if(d==null)return"";if(Array.isArray(d)||d.jquery&&!n.isPlainObject(d))n.each(d,function(){I(this.name,this.value)});else for(y in d)g(y,d[y],c,I);return v.join("&")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var d=n.prop(this,"elements");return d?n.makeArray(d):this}).filter(function(){var d=this.type;return this.name&&!n(this).is(":disabled")&&i.test(this.nodeName)&&!S.test(d)&&(this.checked||!h.test(d))}).map(function(d,c){var y=n(this).val();return y==null?null:Array.isArray(y)?n.map(y,function(v){return{name:c.name,value:v.replace(p,`\r
`)}}):{name:c.name,value:y.replace(p,`\r
`)}}).get()}}),n}.apply(m,u),a!==void 0&&(E.exports=a)},4477:(E,m,r)=>{var u,a;u=[r(1047),r(2760),r(249),r(6575),r(2637),r(6506),r(9441),r(6456),r(4841),r(5037)],a=function(n,l,h,f,s,p,S){"use strict";var i=/^(?:parents|prev(?:Until|All))/,g={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(c){var y=n(c,this),v=y.length;return this.filter(function(){for(var I=0;I<v;I++)if(n.contains(this,y[I]))return!0})},closest:function(c,y){var v,I=0,C=this.length,D=[],R=typeof c!="string"&&n(c);if(!p.test(c)){for(;I<C;I++)for(v=this[I];v&&v!==y;v=v.parentNode)if(v.nodeType<11&&(R?R.index(v)>-1:v.nodeType===1&&n.find.matchesSelector(v,c))){D.push(v);break}}return this.pushStack(D.length>1?n.uniqueSort(D):D)},index:function(c){return c?typeof c=="string"?h.call(n(c),this[0]):h.call(this,c.jquery?c[0]:c):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(c,y){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(c,y))))},addBack:function(c){return this.add(c==null?this.prevObject:this.prevObject.filter(c))}});function d(c,y){for(;(c=c[y])&&c.nodeType!==1;);return c}return n.each({parent:function(c){var y=c.parentNode;return y&&y.nodeType!==11?y:null},parents:function(c){return f(c,"parentNode")},parentsUntil:function(c,y,v){return f(c,"parentNode",v)},next:function(c){return d(c,"nextSibling")},prev:function(c){return d(c,"previousSibling")},nextAll:function(c){return f(c,"nextSibling")},prevAll:function(c){return f(c,"previousSibling")},nextUntil:function(c,y,v){return f(c,"nextSibling",v)},prevUntil:function(c,y,v){return f(c,"previousSibling",v)},siblings:function(c){return s((c.parentNode||{}).firstChild,c)},children:function(c){return s(c.firstChild)},contents:function(c){return c.contentDocument!=null&&l(c.contentDocument)?c.contentDocument:(S(c,"template")&&(c=c.content||c),n.merge([],c.childNodes))}},function(c,y){n.fn[c]=function(v,I){var C=n.map(this,y,v);return c.slice(-5)!=="Until"&&(I=v),I&&typeof I=="string"&&(C=n.filter(I,C)),this.length>1&&(g[c]||n.uniqueSort(C),i.test(c)&&C.reverse()),this.pushStack(C)}}),n}.apply(m,u),a!==void 0&&(E.exports=a)},4841:(E,m,r)=>{var u,a;u=[r(1047),r(249),r(3938),r(6506),r(5037)],a=function(n,l,h,f){"use strict";function s(p,S,i){return h(S)?n.grep(p,function(g,d){return!!S.call(g,d,g)!==i}):S.nodeType?n.grep(p,function(g){return g===S!==i}):typeof S!="string"?n.grep(p,function(g){return l.call(S,g)>-1!==i}):n.filter(S,p,i)}n.filter=function(p,S,i){var g=S[0];return i&&(p=":not("+p+")"),S.length===1&&g.nodeType===1?n.find.matchesSelector(g,p)?[g]:[]:n.find.matches(p,n.grep(S,function(d){return d.nodeType===1}))},n.fn.extend({find:function(p){var S,i,g=this.length,d=this;if(typeof p!="string")return this.pushStack(n(p).filter(function(){for(S=0;S<g;S++)if(n.contains(d[S],this))return!0}));for(i=this.pushStack([]),S=0;S<g;S++)n.find(p,d[S],i);return g>1?n.uniqueSort(i):i},filter:function(p){return this.pushStack(s(this,p||[],!1))},not:function(p){return this.pushStack(s(this,p||[],!0))},is:function(p){return!!s(this,typeof p=="string"&&f.test(p)?n(p):p||[],!1).length}})}.apply(m,u),a!==void 0&&(E.exports=a)},6575:(E,m,r)=>{var u,a;u=[r(1047)],a=function(n){"use strict";return function(l,h,f){for(var s=[],p=f!==void 0;(l=l[h])&&l.nodeType!==9;)if(l.nodeType===1){if(p&&n(l).is(f))break;s.push(l)}return s}}.apply(m,u),a!==void 0&&(E.exports=a)},6506:(E,m,r)=>{var u,a;u=[r(1047),r(5037)],a=function(n){"use strict";return n.expr.match.needsContext}.apply(m,u),a!==void 0&&(E.exports=a)},2637:(E,m,r)=>{var u;u=function(){"use strict";return function(a,n){for(var l=[];a;a=a.nextSibling)a.nodeType===1&&a!==n&&l.push(a);return l}}.call(m,r,m,E),u!==void 0&&(E.exports=u)},8124:(E,m,r)=>{var u,a;u=[r(5390)],a=function(n){"use strict";return n.call(Object)}.apply(m,u),a!==void 0&&(E.exports=a)},4959:(E,m,r)=>{var u;u=function(){"use strict";return[]}.call(m,r,m,E),u!==void 0&&(E.exports=u)},6004:(E,m,r)=>{var u;u=function(){"use strict";return{}}.call(m,r,m,E),u!==void 0&&(E.exports=u)},3187:(E,m,r)=>{var u;u=function(){"use strict";return window.document}.call(m,r,m,E),u!==void 0&&(E.exports=u)},7963:(E,m,r)=>{var u,a;u=[r(3187)],a=function(n){"use strict";return n.documentElement}.apply(m,u),a!==void 0&&(E.exports=a)},6453:(E,m,r)=>{var u,a;u=[r(4959)],a=function(n){"use strict";return n.flat?function(l){return n.flat.call(l)}:function(l){return n.concat.apply([],l)}}.apply(m,u),a!==void 0&&(E.exports=a)},5390:(E,m,r)=>{var u,a;u=[r(6014)],a=function(n){"use strict";return n.toString}.apply(m,u),a!==void 0&&(E.exports=a)},2760:(E,m,r)=>{var u;u=function(){"use strict";return Object.getPrototypeOf}.call(m,r,m,E),u!==void 0&&(E.exports=u)},6014:(E,m,r)=>{var u,a;u=[r(6004)],a=function(n){"use strict";return n.hasOwnProperty}.apply(m,u),a!==void 0&&(E.exports=a)},249:(E,m,r)=>{var u,a;u=[r(4959)],a=function(n){"use strict";return n.indexOf}.apply(m,u),a!==void 0&&(E.exports=a)},3938:(E,m,r)=>{var u;u=function(){"use strict";return function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"}}.call(m,r,m,E),u!==void 0&&(E.exports=u)},9334:(E,m,r)=>{var u;u=function(){"use strict";return function(n){return n!=null&&n===n.window}}.call(m,r,m,E),u!==void 0&&(E.exports=u)},4694:(E,m,r)=>{var u;u=function(){"use strict";return/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source}.call(m,r,m,E),u!==void 0&&(E.exports=u)},3791:(E,m,r)=>{var u,a;u=[r(4959)],a=function(n){"use strict";return n.pop}.apply(m,u),a!==void 0&&(E.exports=a)},5846:(E,m,r)=>{var u,a;u=[r(4959)],a=function(n){"use strict";return n.push}.apply(m,u),a!==void 0&&(E.exports=a)},1320:(E,m,r)=>{var u;u=function(){"use strict";return/^(?:checkbox|radio)$/i}.call(m,r,m,E),u!==void 0&&(E.exports=u)},1375:(E,m,r)=>{var u,a;u=[r(4694)],a=function(n){"use strict";return new RegExp("^(?:([+-])=|)("+n+")([a-z%]*)$","i")}.apply(m,u),a!==void 0&&(E.exports=a)},335:(E,m,r)=>{var u;u=function(){"use strict";return/[^\x20\t\r\n\f]+/g}.call(m,r,m,E),u!==void 0&&(E.exports=u)},211:(E,m,r)=>{var u,a;u=[r(8879)],a=function(n){"use strict";return new RegExp("^"+n+"+|((?:^|[^\\\\])(?:\\\\.)*)"+n+"+$","g")}.apply(m,u),a!==void 0&&(E.exports=a)},8482:(E,m,r)=>{var u,a;u=[r(4959)],a=function(n){"use strict";return n.slice}.apply(m,u),a!==void 0&&(E.exports=a)},4506:(E,m,r)=>{var u,a;u=[r(4959)],a=function(n){"use strict";return n.sort}.apply(m,u),a!==void 0&&(E.exports=a)},2502:(E,m,r)=>{var u,a;u=[r(4959)],a=function(n){"use strict";return n.splice}.apply(m,u),a!==void 0&&(E.exports=a)},5751:(E,m,r)=>{var u;u=function(){"use strict";return{}}.call(m,r,m,E),u!==void 0&&(E.exports=u)},9918:(E,m,r)=>{var u,a;u=[r(6004)],a=function(n){"use strict";return n.toString}.apply(m,u),a!==void 0&&(E.exports=a)},8879:(E,m,r)=>{var u;u=function(){"use strict";return"[\\x20\\t\\r\\n\\f]"}.call(m,r,m,E),u!==void 0&&(E.exports=u)},2624:(E,m,r)=>{var u,a;u=[r(1047),r(3938),r(6456),r(7897),r(4477)],a=function(n,l){"use strict";return n.fn.extend({wrapAll:function(h){var f;return this[0]&&(l(h)&&(h=h.call(this[0])),f=n(h,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&f.insertBefore(this[0]),f.map(function(){for(var s=this;s.firstElementChild;)s=s.firstElementChild;return s}).append(this)),this},wrapInner:function(h){return l(h)?this.each(function(f){n(this).wrapInner(h.call(this,f))}):this.each(function(){var f=n(this),s=f.contents();s.length?s.wrapAll(h):f.append(h)})},wrap:function(h){var f=l(h);return this.each(function(s){n(this).wrapAll(f?h.call(this,s):h)})},unwrap:function(h){return this.parent(h).not("body").each(function(){n(this).replaceWith(this.childNodes)}),this}}),n}.apply(m,u),a!==void 0&&(E.exports=a)},2467:function(E,m,r){E=r.nmd(E);var u;/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/(function(){var a,n="4.17.21",l=200,h="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",f="Expected a function",s="Invalid `variable` option passed into `_.template`",p="__lodash_hash_undefined__",S=500,i="__lodash_placeholder__",g=1,d=2,c=4,y=1,v=2,I=1,C=2,D=4,R=8,x=16,_=32,B=64,w=128,P=256,T=512,b=30,F="...",j=800,K=16,W=1,$=2,k=3,H=1/0,U=9007199254740991,Q=17976931348623157e292,ne=0/0,ie=4294967295,J=ie-1,ge=ie>>>1,ye=[["ary",w],["bind",I],["bindKey",C],["curry",R],["curryRight",x],["flip",T],["partial",_],["partialRight",B],["rearg",P]],Ce="[object Arguments]",Be="[object Array]",it="[object AsyncFunction]",yt="[object Boolean]",Dt="[object Date]",Pt="[object DOMException]",de="[object Error]",Ne="[object Function]",Ie="[object GeneratorFunction]",ke="[object Map]",ht="[object Number]",Ut="[object Null]",tt="[object Object]",Me="[object Promise]",fe="[object Proxy]",we="[object RegExp]",Te="[object Set]",X="[object String]",Se="[object Symbol]",he="[object Undefined]",ve="[object WeakMap]",Fe="[object WeakSet]",Ge="[object ArrayBuffer]",Ue="[object DataView]",qe="[object Float32Array]",et="[object Float64Array]",lt="[object Int8Array]",mt="[object Int16Array]",Bt="[object Int32Array]",Lt="[object Uint8Array]",Tt="[object Uint8ClampedArray]",dn="[object Uint16Array]",fn="[object Uint32Array]",Tn=/\b__p \+= '';/g,Fn=/\b(__p \+=) '' \+/g,Ot=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Bn=/&(?:amp|lt|gt|quot|#39);/g,It=/[&<>"']/g,On=RegExp(Bn.source),O=RegExp(It.source),q=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,ee=/<%=([\s\S]+?)%>/g,se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,De=/^\w*$/,Ae=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,be=/[\\^$.*+?()[\]{}|]/g,Ee=RegExp(be.source),Ke=/^\s+/,re=/\s/,ae=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ue=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,xe=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,We=/[()=,{}\[\]\/\s]/,_e=/\\(\\)?/g,ut=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,At=/\w*$/,wt=/^[-+]0x[0-9a-f]+$/i,gt=/^0b[01]+$/i,st=/^\[object .+?Constructor\]$/,nt=/^0o[0-7]+$/i,dr=/^(?:0|[1-9]\d*)$/,Ei=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,oa=/($^)/,qn=/['\n\r\u2028\u2029\\]/g,Ra="\\ud800-\\udfff",Zo="\\u0300-\\u036f",Qo="\\ufe20-\\ufe2f",el="\\u20d0-\\u20ff",Ri=Zo+Qo+el,Ci="\\u2700-\\u27bf",Ti="a-z\\xdf-\\xf6\\xf8-\\xff",tl="\\xac\\xb1\\xd7\\xf7",nl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",al="\\u2000-\\u206f",rl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xi="A-Z\\xc0-\\xd6\\xd8-\\xde",Ni="\\ufe0e\\ufe0f",Pi=tl+nl+al+rl,fr="['\u2019]",il="["+Ra+"]",bi="["+Pi+"]",Ca="["+Ri+"]",wi="\\d+",sl="["+Ci+"]",_i="["+Ti+"]",Mi="[^"+Ra+Pi+wi+Ci+Ti+xi+"]",hr="\\ud83c[\\udffb-\\udfff]",ol="(?:"+Ca+"|"+hr+")",Li="[^"+Ra+"]",mr="(?:\\ud83c[\\udde6-\\uddff]){2}",gr="[\\ud800-\\udbff][\\udc00-\\udfff]",Vn="["+xi+"]",ki="\\u200d",Fi="(?:"+_i+"|"+Mi+")",ll="(?:"+Vn+"|"+Mi+")",Bi="(?:"+fr+"(?:d|ll|m|re|s|t|ve))?",Oi="(?:"+fr+"(?:D|LL|M|RE|S|T|VE))?",Wi=ol+"?",ji="["+Ni+"]?",ul="(?:"+ki+"(?:"+[Li,mr,gr].join("|")+")"+ji+Wi+")*",cl="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",pl="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",$i=ji+Wi+ul,dl="(?:"+[sl,mr,gr].join("|")+")"+$i,fl="(?:"+[Li+Ca+"?",Ca,mr,gr,il].join("|")+")",hl=RegExp(fr,"g"),ml=RegExp(Ca,"g"),vr=RegExp(hr+"(?="+hr+")|"+fl+$i,"g"),gl=RegExp([Vn+"?"+_i+"+"+Bi+"(?="+[bi,Vn,"$"].join("|")+")",ll+"+"+Oi+"(?="+[bi,Vn+Fi,"$"].join("|")+")",Vn+"?"+Fi+"+"+Bi,Vn+"+"+Oi,pl,cl,wi,dl].join("|"),"g"),vl=RegExp("["+ki+Ra+Ri+Ni+"]"),Sl=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,yl=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Dl=-1,ft={};ft[qe]=ft[et]=ft[lt]=ft[mt]=ft[Bt]=ft[Lt]=ft[Tt]=ft[dn]=ft[fn]=!0,ft[Ce]=ft[Be]=ft[Ge]=ft[yt]=ft[Ue]=ft[Dt]=ft[de]=ft[Ne]=ft[ke]=ft[ht]=ft[tt]=ft[we]=ft[Te]=ft[X]=ft[ve]=!1;var dt={};dt[Ce]=dt[Be]=dt[Ge]=dt[Ue]=dt[yt]=dt[Dt]=dt[qe]=dt[et]=dt[lt]=dt[mt]=dt[Bt]=dt[ke]=dt[ht]=dt[tt]=dt[we]=dt[Te]=dt[X]=dt[Se]=dt[Lt]=dt[Tt]=dt[dn]=dt[fn]=!0,dt[de]=dt[Ne]=dt[ve]=!1;var Il={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Al={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},El={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Rl={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Cl=parseFloat,Tl=parseInt,Ui=typeof r.g=="object"&&r.g&&r.g.Object===Object&&r.g,xl=typeof self=="object"&&self&&self.Object===Object&&self,_t=Ui||xl||Function("return this")(),Gi=m&&!m.nodeType&&m,la=Gi&&!0&&E&&!E.nodeType&&E,Ki=la&&la.exports===Gi,Sr=Ki&&Ui.process,Qt=function(){try{var V=la&&la.require&&la.require("util").types;return V||Sr&&Sr.binding&&Sr.binding("util")}catch(oe){}}(),Hi=Qt&&Qt.isArrayBuffer,zi=Qt&&Qt.isDate,qi=Qt&&Qt.isMap,Vi=Qt&&Qt.isRegExp,Yi=Qt&&Qt.isSet,Xi=Qt&&Qt.isTypedArray;function qt(V,oe,te){switch(te.length){case 0:return V.call(oe);case 1:return V.call(oe,te[0]);case 2:return V.call(oe,te[0],te[1]);case 3:return V.call(oe,te[0],te[1],te[2])}return V.apply(oe,te)}function Nl(V,oe,te,Pe){for(var He=-1,rt=V==null?0:V.length;++He<rt;){var xt=V[He];oe(Pe,xt,te(xt),V)}return Pe}function en(V,oe){for(var te=-1,Pe=V==null?0:V.length;++te<Pe&&oe(V[te],te,V)!==!1;);return V}function Pl(V,oe){for(var te=V==null?0:V.length;te--&&oe(V[te],te,V)!==!1;);return V}function Ji(V,oe){for(var te=-1,Pe=V==null?0:V.length;++te<Pe;)if(!oe(V[te],te,V))return!1;return!0}function xn(V,oe){for(var te=-1,Pe=V==null?0:V.length,He=0,rt=[];++te<Pe;){var xt=V[te];oe(xt,te,V)&&(rt[He++]=xt)}return rt}function Ta(V,oe){var te=V==null?0:V.length;return!!te&&Yn(V,oe,0)>-1}function yr(V,oe,te){for(var Pe=-1,He=V==null?0:V.length;++Pe<He;)if(te(oe,V[Pe]))return!0;return!1}function vt(V,oe){for(var te=-1,Pe=V==null?0:V.length,He=Array(Pe);++te<Pe;)He[te]=oe(V[te],te,V);return He}function Nn(V,oe){for(var te=-1,Pe=oe.length,He=V.length;++te<Pe;)V[He+te]=oe[te];return V}function Dr(V,oe,te,Pe){var He=-1,rt=V==null?0:V.length;for(Pe&&rt&&(te=V[++He]);++He<rt;)te=oe(te,V[He],He,V);return te}function bl(V,oe,te,Pe){var He=V==null?0:V.length;for(Pe&&He&&(te=V[--He]);He--;)te=oe(te,V[He],He,V);return te}function Ir(V,oe){for(var te=-1,Pe=V==null?0:V.length;++te<Pe;)if(oe(V[te],te,V))return!0;return!1}var wl=Ar("length");function _l(V){return V.split("")}function Ml(V){return V.match(xe)||[]}function Zi(V,oe,te){var Pe;return te(V,function(He,rt,xt){if(oe(He,rt,xt))return Pe=rt,!1}),Pe}function xa(V,oe,te,Pe){for(var He=V.length,rt=te+(Pe?1:-1);Pe?rt--:++rt<He;)if(oe(V[rt],rt,V))return rt;return-1}function Yn(V,oe,te){return oe===oe?Hl(V,oe,te):xa(V,Qi,te)}function Ll(V,oe,te,Pe){for(var He=te-1,rt=V.length;++He<rt;)if(Pe(V[He],oe))return He;return-1}function Qi(V){return V!==V}function es(V,oe){var te=V==null?0:V.length;return te?Rr(V,oe)/te:ne}function Ar(V){return function(oe){return oe==null?a:oe[V]}}function Er(V){return function(oe){return V==null?a:V[oe]}}function ts(V,oe,te,Pe,He){return He(V,function(rt,xt,pt){te=Pe?(Pe=!1,rt):oe(te,rt,xt,pt)}),te}function kl(V,oe){var te=V.length;for(V.sort(oe);te--;)V[te]=V[te].value;return V}function Rr(V,oe){for(var te,Pe=-1,He=V.length;++Pe<He;){var rt=oe(V[Pe]);rt!==a&&(te=te===a?rt:te+rt)}return te}function Cr(V,oe){for(var te=-1,Pe=Array(V);++te<V;)Pe[te]=oe(te);return Pe}function Fl(V,oe){return vt(oe,function(te){return[te,V[te]]})}function ns(V){return V&&V.slice(0,ss(V)+1).replace(Ke,"")}function Vt(V){return function(oe){return V(oe)}}function Tr(V,oe){return vt(oe,function(te){return V[te]})}function ua(V,oe){return V.has(oe)}function as(V,oe){for(var te=-1,Pe=V.length;++te<Pe&&Yn(oe,V[te],0)>-1;);return te}function rs(V,oe){for(var te=V.length;te--&&Yn(oe,V[te],0)>-1;);return te}function Bl(V,oe){for(var te=V.length,Pe=0;te--;)V[te]===oe&&++Pe;return Pe}var Ol=Er(Il),Wl=Er(Al);function jl(V){return"\\"+Rl[V]}function $l(V,oe){return V==null?a:V[oe]}function Xn(V){return vl.test(V)}function Ul(V){return Sl.test(V)}function Gl(V){for(var oe,te=[];!(oe=V.next()).done;)te.push(oe.value);return te}function xr(V){var oe=-1,te=Array(V.size);return V.forEach(function(Pe,He){te[++oe]=[He,Pe]}),te}function is(V,oe){return function(te){return V(oe(te))}}function Pn(V,oe){for(var te=-1,Pe=V.length,He=0,rt=[];++te<Pe;){var xt=V[te];(xt===oe||xt===i)&&(V[te]=i,rt[He++]=te)}return rt}function Na(V){var oe=-1,te=Array(V.size);return V.forEach(function(Pe){te[++oe]=Pe}),te}function Kl(V){var oe=-1,te=Array(V.size);return V.forEach(function(Pe){te[++oe]=[Pe,Pe]}),te}function Hl(V,oe,te){for(var Pe=te-1,He=V.length;++Pe<He;)if(V[Pe]===oe)return Pe;return-1}function zl(V,oe,te){for(var Pe=te+1;Pe--;)if(V[Pe]===oe)return Pe;return Pe}function Jn(V){return Xn(V)?Vl(V):wl(V)}function ln(V){return Xn(V)?Yl(V):_l(V)}function ss(V){for(var oe=V.length;oe--&&re.test(V.charAt(oe)););return oe}var ql=Er(El);function Vl(V){for(var oe=vr.lastIndex=0;vr.test(V);)++oe;return oe}function Yl(V){return V.match(vr)||[]}function Xl(V){return V.match(gl)||[]}var Jl=function V(oe){oe=oe==null?_t:Pa.defaults(_t.Object(),oe,Pa.pick(_t,yl));var te=oe.Array,Pe=oe.Date,He=oe.Error,rt=oe.Function,xt=oe.Math,pt=oe.Object,Nr=oe.RegExp,Zl=oe.String,tn=oe.TypeError,ba=te.prototype,Ql=rt.prototype,Zn=pt.prototype,wa=oe["__core-js_shared__"],_a=Ql.toString,ct=Zn.hasOwnProperty,eu=0,os=function(){var e=/[^.]+$/.exec(wa&&wa.keys&&wa.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ma=Zn.toString,tu=_a.call(pt),nu=_t._,au=Nr("^"+_a.call(ct).replace(be,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),La=Ki?oe.Buffer:a,bn=oe.Symbol,ka=oe.Uint8Array,ls=La?La.allocUnsafe:a,Fa=is(pt.getPrototypeOf,pt),us=pt.create,cs=Zn.propertyIsEnumerable,Ba=ba.splice,ps=bn?bn.isConcatSpreadable:a,ca=bn?bn.iterator:a,Wn=bn?bn.toStringTag:a,Oa=function(){try{var e=Kn(pt,"defineProperty");return e({},"",{}),e}catch(t){}}(),ru=oe.clearTimeout!==_t.clearTimeout&&oe.clearTimeout,iu=Pe&&Pe.now!==_t.Date.now&&Pe.now,su=oe.setTimeout!==_t.setTimeout&&oe.setTimeout,Wa=xt.ceil,ja=xt.floor,Pr=pt.getOwnPropertySymbols,ou=La?La.isBuffer:a,ds=oe.isFinite,lu=ba.join,uu=is(pt.keys,pt),Nt=xt.max,kt=xt.min,cu=Pe.now,pu=oe.parseInt,fs=xt.random,du=ba.reverse,br=Kn(oe,"DataView"),pa=Kn(oe,"Map"),wr=Kn(oe,"Promise"),Qn=Kn(oe,"Set"),da=Kn(oe,"WeakMap"),fa=Kn(pt,"create"),$a=da&&new da,ea={},fu=Hn(br),hu=Hn(pa),mu=Hn(wr),gu=Hn(Qn),vu=Hn(da),Ua=bn?bn.prototype:a,ha=Ua?Ua.valueOf:a,hs=Ua?Ua.toString:a;function M(e){if(Et(e)&&!ze(e)&&!(e instanceof Ze)){if(e instanceof nn)return e;if(ct.call(e,"__wrapped__"))return go(e)}return new nn(e)}var ta=function(){function e(){}return function(t){if(!St(t))return{};if(us)return us(t);e.prototype=t;var o=new e;return e.prototype=a,o}}();function Ga(){}function nn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=a}M.templateSettings={escape:q,evaluate:Z,interpolate:ee,variable:"",imports:{_:M}},M.prototype=Ga.prototype,M.prototype.constructor=M,nn.prototype=ta(Ga.prototype),nn.prototype.constructor=nn;function Ze(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ie,this.__views__=[]}function Su(){var e=new Ze(this.__wrapped__);return e.__actions__=Gt(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Gt(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Gt(this.__views__),e}function yu(){if(this.__filtered__){var e=new Ze(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Du(){var e=this.__wrapped__.value(),t=this.__dir__,o=ze(e),A=t<0,N=o?e.length:0,L=_c(0,N,this.__views__),G=L.start,z=L.end,Y=z-G,ce=A?z:G-1,pe=this.__iteratees__,me=pe.length,Re=0,Le=kt(Y,this.__takeCount__);if(!o||!A&&N==Y&&Le==Y)return Os(e,this.__actions__);var je=[];e:for(;Y--&&Re<Le;){ce+=t;for(var Ye=-1,$e=e[ce];++Ye<me;){var Je=pe[Ye],Qe=Je.iteratee,Jt=Je.type,$t=Qe($e);if(Jt==$)$e=$t;else if(!$t){if(Jt==W)continue e;break e}}je[Re++]=$e}return je}Ze.prototype=ta(Ga.prototype),Ze.prototype.constructor=Ze;function jn(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var A=e[t];this.set(A[0],A[1])}}function Iu(){this.__data__=fa?fa(null):{},this.size=0}function Au(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function Eu(e){var t=this.__data__;if(fa){var o=t[e];return o===p?a:o}return ct.call(t,e)?t[e]:a}function Ru(e){var t=this.__data__;return fa?t[e]!==a:ct.call(t,e)}function Cu(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=fa&&t===a?p:t,this}jn.prototype.clear=Iu,jn.prototype.delete=Au,jn.prototype.get=Eu,jn.prototype.has=Ru,jn.prototype.set=Cu;function vn(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var A=e[t];this.set(A[0],A[1])}}function Tu(){this.__data__=[],this.size=0}function xu(e){var t=this.__data__,o=Ka(t,e);if(o<0)return!1;var A=t.length-1;return o==A?t.pop():Ba.call(t,o,1),--this.size,!0}function Nu(e){var t=this.__data__,o=Ka(t,e);return o<0?a:t[o][1]}function Pu(e){return Ka(this.__data__,e)>-1}function bu(e,t){var o=this.__data__,A=Ka(o,e);return A<0?(++this.size,o.push([e,t])):o[A][1]=t,this}vn.prototype.clear=Tu,vn.prototype.delete=xu,vn.prototype.get=Nu,vn.prototype.has=Pu,vn.prototype.set=bu;function Sn(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var A=e[t];this.set(A[0],A[1])}}function wu(){this.size=0,this.__data__={hash:new jn,map:new(pa||vn),string:new jn}}function _u(e){var t=nr(this,e).delete(e);return this.size-=t?1:0,t}function Mu(e){return nr(this,e).get(e)}function Lu(e){return nr(this,e).has(e)}function ku(e,t){var o=nr(this,e),A=o.size;return o.set(e,t),this.size+=o.size==A?0:1,this}Sn.prototype.clear=wu,Sn.prototype.delete=_u,Sn.prototype.get=Mu,Sn.prototype.has=Lu,Sn.prototype.set=ku;function $n(e){var t=-1,o=e==null?0:e.length;for(this.__data__=new Sn;++t<o;)this.add(e[t])}function Fu(e){return this.__data__.set(e,p),this}function Bu(e){return this.__data__.has(e)}$n.prototype.add=$n.prototype.push=Fu,$n.prototype.has=Bu;function un(e){var t=this.__data__=new vn(e);this.size=t.size}function Ou(){this.__data__=new vn,this.size=0}function Wu(e){var t=this.__data__,o=t.delete(e);return this.size=t.size,o}function ju(e){return this.__data__.get(e)}function $u(e){return this.__data__.has(e)}function Uu(e,t){var o=this.__data__;if(o instanceof vn){var A=o.__data__;if(!pa||A.length<l-1)return A.push([e,t]),this.size=++o.size,this;o=this.__data__=new Sn(A)}return o.set(e,t),this.size=o.size,this}un.prototype.clear=Ou,un.prototype.delete=Wu,un.prototype.get=ju,un.prototype.has=$u,un.prototype.set=Uu;function ms(e,t){var o=ze(e),A=!o&&zn(e),N=!o&&!A&&kn(e),L=!o&&!A&&!N&&ia(e),G=o||A||N||L,z=G?Cr(e.length,Zl):[],Y=z.length;for(var ce in e)(t||ct.call(e,ce))&&!(G&&(ce=="length"||N&&(ce=="offset"||ce=="parent")||L&&(ce=="buffer"||ce=="byteLength"||ce=="byteOffset")||An(ce,Y)))&&z.push(ce);return z}function gs(e){var t=e.length;return t?e[Ur(0,t-1)]:a}function Gu(e,t){return ar(Gt(e),Un(t,0,e.length))}function Ku(e){return ar(Gt(e))}function _r(e,t,o){(o!==a&&!cn(e[t],o)||o===a&&!(t in e))&&yn(e,t,o)}function ma(e,t,o){var A=e[t];(!(ct.call(e,t)&&cn(A,o))||o===a&&!(t in e))&&yn(e,t,o)}function Ka(e,t){for(var o=e.length;o--;)if(cn(e[o][0],t))return o;return-1}function Hu(e,t,o,A){return wn(e,function(N,L,G){t(A,N,o(N),G)}),A}function vs(e,t){return e&&mn(t,bt(t),e)}function zu(e,t){return e&&mn(t,Ht(t),e)}function yn(e,t,o){t=="__proto__"&&Oa?Oa(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o}function Mr(e,t){for(var o=-1,A=t.length,N=te(A),L=e==null;++o<A;)N[o]=L?a:fi(e,t[o]);return N}function Un(e,t,o){return e===e&&(o!==a&&(e=e<=o?e:o),t!==a&&(e=e>=t?e:t)),e}function an(e,t,o,A,N,L){var G,z=t&g,Y=t&d,ce=t&c;if(o&&(G=N?o(e,A,N,L):o(e)),G!==a)return G;if(!St(e))return e;var pe=ze(e);if(pe){if(G=Lc(e),!z)return Gt(e,G)}else{var me=Ft(e),Re=me==Ne||me==Ie;if(kn(e))return $s(e,z);if(me==tt||me==Ce||Re&&!N){if(G=Y||Re?{}:so(e),!z)return Y?Ec(e,zu(G,e)):Ac(e,vs(G,e))}else{if(!dt[me])return N?e:{};G=kc(e,me,z)}}L||(L=new un);var Le=L.get(e);if(Le)return Le;L.set(e,G),Fo(e)?e.forEach(function($e){G.add(an($e,t,o,$e,e,L))}):Lo(e)&&e.forEach(function($e,Je){G.set(Je,an($e,t,o,Je,e,L))});var je=ce?Y?Qr:Zr:Y?Ht:bt,Ye=pe?a:je(e);return en(Ye||e,function($e,Je){Ye&&(Je=$e,$e=e[Je]),ma(G,Je,an($e,t,o,Je,e,L))}),G}function qu(e){var t=bt(e);return function(o){return Ss(o,e,t)}}function Ss(e,t,o){var A=o.length;if(e==null)return!A;for(e=pt(e);A--;){var N=o[A],L=t[N],G=e[N];if(G===a&&!(N in e)||!L(G))return!1}return!0}function ys(e,t,o){if(typeof e!="function")throw new tn(f);return Aa(function(){e.apply(a,o)},t)}function ga(e,t,o,A){var N=-1,L=Ta,G=!0,z=e.length,Y=[],ce=t.length;if(!z)return Y;o&&(t=vt(t,Vt(o))),A?(L=yr,G=!1):t.length>=l&&(L=ua,G=!1,t=new $n(t));e:for(;++N<z;){var pe=e[N],me=o==null?pe:o(pe);if(pe=A||pe!==0?pe:0,G&&me===me){for(var Re=ce;Re--;)if(t[Re]===me)continue e;Y.push(pe)}else L(t,me,A)||Y.push(pe)}return Y}var wn=zs(hn),Ds=zs(kr,!0);function Vu(e,t){var o=!0;return wn(e,function(A,N,L){return o=!!t(A,N,L),o}),o}function Ha(e,t,o){for(var A=-1,N=e.length;++A<N;){var L=e[A],G=t(L);if(G!=null&&(z===a?G===G&&!Xt(G):o(G,z)))var z=G,Y=L}return Y}function Yu(e,t,o,A){var N=e.length;for(o=Ve(o),o<0&&(o=-o>N?0:N+o),A=A===a||A>N?N:Ve(A),A<0&&(A+=N),A=o>A?0:Oo(A);o<A;)e[o++]=t;return e}function Is(e,t){var o=[];return wn(e,function(A,N,L){t(A,N,L)&&o.push(A)}),o}function Mt(e,t,o,A,N){var L=-1,G=e.length;for(o||(o=Bc),N||(N=[]);++L<G;){var z=e[L];t>0&&o(z)?t>1?Mt(z,t-1,o,A,N):Nn(N,z):A||(N[N.length]=z)}return N}var Lr=qs(),As=qs(!0);function hn(e,t){return e&&Lr(e,t,bt)}function kr(e,t){return e&&As(e,t,bt)}function za(e,t){return xn(t,function(o){return En(e[o])})}function Gn(e,t){t=Mn(t,e);for(var o=0,A=t.length;e!=null&&o<A;)e=e[gn(t[o++])];return o&&o==A?e:a}function Es(e,t,o){var A=t(e);return ze(e)?A:Nn(A,o(e))}function Wt(e){return e==null?e===a?he:Ut:Wn&&Wn in pt(e)?wc(e):Kc(e)}function Fr(e,t){return e>t}function Xu(e,t){return e!=null&&ct.call(e,t)}function Ju(e,t){return e!=null&&t in pt(e)}function Zu(e,t,o){return e>=kt(t,o)&&e<Nt(t,o)}function Br(e,t,o){for(var A=o?yr:Ta,N=e[0].length,L=e.length,G=L,z=te(L),Y=1/0,ce=[];G--;){var pe=e[G];G&&t&&(pe=vt(pe,Vt(t))),Y=kt(pe.length,Y),z[G]=!o&&(t||N>=120&&pe.length>=120)?new $n(G&&pe):a}pe=e[0];var me=-1,Re=z[0];e:for(;++me<N&&ce.length<Y;){var Le=pe[me],je=t?t(Le):Le;if(Le=o||Le!==0?Le:0,!(Re?ua(Re,je):A(ce,je,o))){for(G=L;--G;){var Ye=z[G];if(!(Ye?ua(Ye,je):A(e[G],je,o)))continue e}Re&&Re.push(je),ce.push(Le)}}return ce}function Qu(e,t,o,A){return hn(e,function(N,L,G){t(A,o(N),L,G)}),A}function va(e,t,o){t=Mn(t,e),e=co(e,t);var A=e==null?e:e[gn(sn(t))];return A==null?a:qt(A,e,o)}function Rs(e){return Et(e)&&Wt(e)==Ce}function ec(e){return Et(e)&&Wt(e)==Ge}function tc(e){return Et(e)&&Wt(e)==Dt}function Sa(e,t,o,A,N){return e===t?!0:e==null||t==null||!Et(e)&&!Et(t)?e!==e&&t!==t:nc(e,t,o,A,Sa,N)}function nc(e,t,o,A,N,L){var G=ze(e),z=ze(t),Y=G?Be:Ft(e),ce=z?Be:Ft(t);Y=Y==Ce?tt:Y,ce=ce==Ce?tt:ce;var pe=Y==tt,me=ce==tt,Re=Y==ce;if(Re&&kn(e)){if(!kn(t))return!1;G=!0,pe=!1}if(Re&&!pe)return L||(L=new un),G||ia(e)?ao(e,t,o,A,N,L):Pc(e,t,Y,o,A,N,L);if(!(o&y)){var Le=pe&&ct.call(e,"__wrapped__"),je=me&&ct.call(t,"__wrapped__");if(Le||je){var Ye=Le?e.value():e,$e=je?t.value():t;return L||(L=new un),N(Ye,$e,o,A,L)}}return Re?(L||(L=new un),bc(e,t,o,A,N,L)):!1}function ac(e){return Et(e)&&Ft(e)==ke}function Or(e,t,o,A){var N=o.length,L=N,G=!A;if(e==null)return!L;for(e=pt(e);N--;){var z=o[N];if(G&&z[2]?z[1]!==e[z[0]]:!(z[0]in e))return!1}for(;++N<L;){z=o[N];var Y=z[0],ce=e[Y],pe=z[1];if(G&&z[2]){if(ce===a&&!(Y in e))return!1}else{var me=new un;if(A)var Re=A(ce,pe,Y,e,t,me);if(!(Re===a?Sa(pe,ce,y|v,A,me):Re))return!1}}return!0}function Cs(e){if(!St(e)||Wc(e))return!1;var t=En(e)?au:st;return t.test(Hn(e))}function rc(e){return Et(e)&&Wt(e)==we}function ic(e){return Et(e)&&Ft(e)==Te}function sc(e){return Et(e)&&ur(e.length)&&!!ft[Wt(e)]}function Ts(e){return typeof e=="function"?e:e==null?zt:typeof e=="object"?ze(e)?Ps(e[0],e[1]):Ns(e):Yo(e)}function Wr(e){if(!Ia(e))return uu(e);var t=[];for(var o in pt(e))ct.call(e,o)&&o!="constructor"&&t.push(o);return t}function oc(e){if(!St(e))return Gc(e);var t=Ia(e),o=[];for(var A in e)A=="constructor"&&(t||!ct.call(e,A))||o.push(A);return o}function jr(e,t){return e<t}function xs(e,t){var o=-1,A=Kt(e)?te(e.length):[];return wn(e,function(N,L,G){A[++o]=t(N,L,G)}),A}function Ns(e){var t=ti(e);return t.length==1&&t[0][2]?lo(t[0][0],t[0][1]):function(o){return o===e||Or(o,e,t)}}function Ps(e,t){return ai(e)&&oo(t)?lo(gn(e),t):function(o){var A=fi(o,e);return A===a&&A===t?hi(o,e):Sa(t,A,y|v)}}function qa(e,t,o,A,N){e!==t&&Lr(t,function(L,G){if(N||(N=new un),St(L))lc(e,t,G,o,qa,A,N);else{var z=A?A(ii(e,G),L,G+"",e,t,N):a;z===a&&(z=L),_r(e,G,z)}},Ht)}function lc(e,t,o,A,N,L,G){var z=ii(e,o),Y=ii(t,o),ce=G.get(Y);if(ce){_r(e,o,ce);return}var pe=L?L(z,Y,o+"",e,t,G):a,me=pe===a;if(me){var Re=ze(Y),Le=!Re&&kn(Y),je=!Re&&!Le&&ia(Y);pe=Y,Re||Le||je?ze(z)?pe=z:Rt(z)?pe=Gt(z):Le?(me=!1,pe=$s(Y,!0)):je?(me=!1,pe=Us(Y,!0)):pe=[]:Ea(Y)||zn(Y)?(pe=z,zn(z)?pe=Wo(z):(!St(z)||En(z))&&(pe=so(Y))):me=!1}me&&(G.set(Y,pe),N(pe,Y,A,L,G),G.delete(Y)),_r(e,o,pe)}function bs(e,t){var o=e.length;if(o)return t+=t<0?o:0,An(t,o)?e[t]:a}function ws(e,t,o){t.length?t=vt(t,function(L){return ze(L)?function(G){return Gn(G,L.length===1?L[0]:L)}:L}):t=[zt];var A=-1;t=vt(t,Vt(Oe()));var N=xs(e,function(L,G,z){var Y=vt(t,function(ce){return ce(L)});return{criteria:Y,index:++A,value:L}});return kl(N,function(L,G){return Ic(L,G,o)})}function uc(e,t){return _s(e,t,function(o,A){return hi(e,A)})}function _s(e,t,o){for(var A=-1,N=t.length,L={};++A<N;){var G=t[A],z=Gn(e,G);o(z,G)&&ya(L,Mn(G,e),z)}return L}function cc(e){return function(t){return Gn(t,e)}}function $r(e,t,o,A){var N=A?Ll:Yn,L=-1,G=t.length,z=e;for(e===t&&(t=Gt(t)),o&&(z=vt(e,Vt(o)));++L<G;)for(var Y=0,ce=t[L],pe=o?o(ce):ce;(Y=N(z,pe,Y,A))>-1;)z!==e&&Ba.call(z,Y,1),Ba.call(e,Y,1);return e}function Ms(e,t){for(var o=e?t.length:0,A=o-1;o--;){var N=t[o];if(o==A||N!==L){var L=N;An(N)?Ba.call(e,N,1):Hr(e,N)}}return e}function Ur(e,t){return e+ja(fs()*(t-e+1))}function pc(e,t,o,A){for(var N=-1,L=Nt(Wa((t-e)/(o||1)),0),G=te(L);L--;)G[A?L:++N]=e,e+=o;return G}function Gr(e,t){var o="";if(!e||t<1||t>U)return o;do t%2&&(o+=e),t=ja(t/2),t&&(e+=e);while(t);return o}function Xe(e,t){return si(uo(e,t,zt),e+"")}function dc(e){return gs(sa(e))}function fc(e,t){var o=sa(e);return ar(o,Un(t,0,o.length))}function ya(e,t,o,A){if(!St(e))return e;t=Mn(t,e);for(var N=-1,L=t.length,G=L-1,z=e;z!=null&&++N<L;){var Y=gn(t[N]),ce=o;if(Y==="__proto__"||Y==="constructor"||Y==="prototype")return e;if(N!=G){var pe=z[Y];ce=A?A(pe,Y,z):a,ce===a&&(ce=St(pe)?pe:An(t[N+1])?[]:{})}ma(z,Y,ce),z=z[Y]}return e}var Ls=$a?function(e,t){return $a.set(e,t),e}:zt,hc=Oa?function(e,t){return Oa(e,"toString",{configurable:!0,enumerable:!1,value:gi(t),writable:!0})}:zt;function mc(e){return ar(sa(e))}function rn(e,t,o){var A=-1,N=e.length;t<0&&(t=-t>N?0:N+t),o=o>N?N:o,o<0&&(o+=N),N=t>o?0:o-t>>>0,t>>>=0;for(var L=te(N);++A<N;)L[A]=e[A+t];return L}function gc(e,t){var o;return wn(e,function(A,N,L){return o=t(A,N,L),!o}),!!o}function Va(e,t,o){var A=0,N=e==null?A:e.length;if(typeof t=="number"&&t===t&&N<=ge){for(;A<N;){var L=A+N>>>1,G=e[L];G!==null&&!Xt(G)&&(o?G<=t:G<t)?A=L+1:N=L}return N}return Kr(e,t,zt,o)}function Kr(e,t,o,A){var N=0,L=e==null?0:e.length;if(L===0)return 0;t=o(t);for(var G=t!==t,z=t===null,Y=Xt(t),ce=t===a;N<L;){var pe=ja((N+L)/2),me=o(e[pe]),Re=me!==a,Le=me===null,je=me===me,Ye=Xt(me);if(G)var $e=A||je;else ce?$e=je&&(A||Re):z?$e=je&&Re&&(A||!Le):Y?$e=je&&Re&&!Le&&(A||!Ye):Le||Ye?$e=!1:$e=A?me<=t:me<t;$e?N=pe+1:L=pe}return kt(L,J)}function ks(e,t){for(var o=-1,A=e.length,N=0,L=[];++o<A;){var G=e[o],z=t?t(G):G;if(!o||!cn(z,Y)){var Y=z;L[N++]=G===0?0:G}}return L}function Fs(e){return typeof e=="number"?e:Xt(e)?ne:+e}function Yt(e){if(typeof e=="string")return e;if(ze(e))return vt(e,Yt)+"";if(Xt(e))return hs?hs.call(e):"";var t=e+"";return t=="0"&&1/e==-H?"-0":t}function _n(e,t,o){var A=-1,N=Ta,L=e.length,G=!0,z=[],Y=z;if(o)G=!1,N=yr;else if(L>=l){var ce=t?null:xc(e);if(ce)return Na(ce);G=!1,N=ua,Y=new $n}else Y=t?[]:z;e:for(;++A<L;){var pe=e[A],me=t?t(pe):pe;if(pe=o||pe!==0?pe:0,G&&me===me){for(var Re=Y.length;Re--;)if(Y[Re]===me)continue e;t&&Y.push(me),z.push(pe)}else N(Y,me,o)||(Y!==z&&Y.push(me),z.push(pe))}return z}function Hr(e,t){return t=Mn(t,e),e=co(e,t),e==null||delete e[gn(sn(t))]}function Bs(e,t,o,A){return ya(e,t,o(Gn(e,t)),A)}function Ya(e,t,o,A){for(var N=e.length,L=A?N:-1;(A?L--:++L<N)&&t(e[L],L,e););return o?rn(e,A?0:L,A?L+1:N):rn(e,A?L+1:0,A?N:L)}function Os(e,t){var o=e;return o instanceof Ze&&(o=o.value()),Dr(t,function(A,N){return N.func.apply(N.thisArg,Nn([A],N.args))},o)}function zr(e,t,o){var A=e.length;if(A<2)return A?_n(e[0]):[];for(var N=-1,L=te(A);++N<A;)for(var G=e[N],z=-1;++z<A;)z!=N&&(L[N]=ga(L[N]||G,e[z],t,o));return _n(Mt(L,1),t,o)}function Ws(e,t,o){for(var A=-1,N=e.length,L=t.length,G={};++A<N;){var z=A<L?t[A]:a;o(G,e[A],z)}return G}function qr(e){return Rt(e)?e:[]}function Vr(e){return typeof e=="function"?e:zt}function Mn(e,t){return ze(e)?e:ai(e,t)?[e]:mo(ot(e))}var vc=Xe;function Ln(e,t,o){var A=e.length;return o=o===a?A:o,!t&&o>=A?e:rn(e,t,o)}var js=ru||function(e){return _t.clearTimeout(e)};function $s(e,t){if(t)return e.slice();var o=e.length,A=ls?ls(o):new e.constructor(o);return e.copy(A),A}function Yr(e){var t=new e.constructor(e.byteLength);return new ka(t).set(new ka(e)),t}function Sc(e,t){var o=t?Yr(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function yc(e){var t=new e.constructor(e.source,At.exec(e));return t.lastIndex=e.lastIndex,t}function Dc(e){return ha?pt(ha.call(e)):{}}function Us(e,t){var o=t?Yr(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function Gs(e,t){if(e!==t){var o=e!==a,A=e===null,N=e===e,L=Xt(e),G=t!==a,z=t===null,Y=t===t,ce=Xt(t);if(!z&&!ce&&!L&&e>t||L&&G&&Y&&!z&&!ce||A&&G&&Y||!o&&Y||!N)return 1;if(!A&&!L&&!ce&&e<t||ce&&o&&N&&!A&&!L||z&&o&&N||!G&&N||!Y)return-1}return 0}function Ic(e,t,o){for(var A=-1,N=e.criteria,L=t.criteria,G=N.length,z=o.length;++A<G;){var Y=Gs(N[A],L[A]);if(Y){if(A>=z)return Y;var ce=o[A];return Y*(ce=="desc"?-1:1)}}return e.index-t.index}function Ks(e,t,o,A){for(var N=-1,L=e.length,G=o.length,z=-1,Y=t.length,ce=Nt(L-G,0),pe=te(Y+ce),me=!A;++z<Y;)pe[z]=t[z];for(;++N<G;)(me||N<L)&&(pe[o[N]]=e[N]);for(;ce--;)pe[z++]=e[N++];return pe}function Hs(e,t,o,A){for(var N=-1,L=e.length,G=-1,z=o.length,Y=-1,ce=t.length,pe=Nt(L-z,0),me=te(pe+ce),Re=!A;++N<pe;)me[N]=e[N];for(var Le=N;++Y<ce;)me[Le+Y]=t[Y];for(;++G<z;)(Re||N<L)&&(me[Le+o[G]]=e[N++]);return me}function Gt(e,t){var o=-1,A=e.length;for(t||(t=te(A));++o<A;)t[o]=e[o];return t}function mn(e,t,o,A){var N=!o;o||(o={});for(var L=-1,G=t.length;++L<G;){var z=t[L],Y=A?A(o[z],e[z],z,o,e):a;Y===a&&(Y=e[z]),N?yn(o,z,Y):ma(o,z,Y)}return o}function Ac(e,t){return mn(e,ni(e),t)}function Ec(e,t){return mn(e,ro(e),t)}function Xa(e,t){return function(o,A){var N=ze(o)?Nl:Hu,L=t?t():{};return N(o,e,Oe(A,2),L)}}function na(e){return Xe(function(t,o){var A=-1,N=o.length,L=N>1?o[N-1]:a,G=N>2?o[2]:a;for(L=e.length>3&&typeof L=="function"?(N--,L):a,G&&jt(o[0],o[1],G)&&(L=N<3?a:L,N=1),t=pt(t);++A<N;){var z=o[A];z&&e(t,z,A,L)}return t})}function zs(e,t){return function(o,A){if(o==null)return o;if(!Kt(o))return e(o,A);for(var N=o.length,L=t?N:-1,G=pt(o);(t?L--:++L<N)&&A(G[L],L,G)!==!1;);return o}}function qs(e){return function(t,o,A){for(var N=-1,L=pt(t),G=A(t),z=G.length;z--;){var Y=G[e?z:++N];if(o(L[Y],Y,L)===!1)break}return t}}function Rc(e,t,o){var A=t&I,N=Da(e);function L(){var G=this&&this!==_t&&this instanceof L?N:e;return G.apply(A?o:this,arguments)}return L}function Vs(e){return function(t){t=ot(t);var o=Xn(t)?ln(t):a,A=o?o[0]:t.charAt(0),N=o?Ln(o,1).join(""):t.slice(1);return A[e]()+N}}function aa(e){return function(t){return Dr(qo(zo(t).replace(hl,"")),e,"")}}function Da(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var o=ta(e.prototype),A=e.apply(o,t);return St(A)?A:o}}function Cc(e,t,o){var A=Da(e);function N(){for(var L=arguments.length,G=te(L),z=L,Y=ra(N);z--;)G[z]=arguments[z];var ce=L<3&&G[0]!==Y&&G[L-1]!==Y?[]:Pn(G,Y);if(L-=ce.length,L<o)return Qs(e,t,Ja,N.placeholder,a,G,ce,a,a,o-L);var pe=this&&this!==_t&&this instanceof N?A:e;return qt(pe,this,G)}return N}function Ys(e){return function(t,o,A){var N=pt(t);if(!Kt(t)){var L=Oe(o,3);t=bt(t),o=function(z){return L(N[z],z,N)}}var G=e(t,o,A);return G>-1?N[L?t[G]:G]:a}}function Xs(e){return In(function(t){var o=t.length,A=o,N=nn.prototype.thru;for(e&&t.reverse();A--;){var L=t[A];if(typeof L!="function")throw new tn(f);if(N&&!G&&tr(L)=="wrapper")var G=new nn([],!0)}for(A=G?A:o;++A<o;){L=t[A];var z=tr(L),Y=z=="wrapper"?ei(L):a;Y&&ri(Y[0])&&Y[1]==(w|R|_|P)&&!Y[4].length&&Y[9]==1?G=G[tr(Y[0])].apply(G,Y[3]):G=L.length==1&&ri(L)?G[z]():G.thru(L)}return function(){var ce=arguments,pe=ce[0];if(G&&ce.length==1&&ze(pe))return G.plant(pe).value();for(var me=0,Re=o?t[me].apply(this,ce):pe;++me<o;)Re=t[me].call(this,Re);return Re}})}function Ja(e,t,o,A,N,L,G,z,Y,ce){var pe=t&w,me=t&I,Re=t&C,Le=t&(R|x),je=t&T,Ye=Re?a:Da(e);function $e(){for(var Je=arguments.length,Qe=te(Je),Jt=Je;Jt--;)Qe[Jt]=arguments[Jt];if(Le)var $t=ra($e),Zt=Bl(Qe,$t);if(A&&(Qe=Ks(Qe,A,N,Le)),L&&(Qe=Hs(Qe,L,G,Le)),Je-=Zt,Le&&Je<ce){var Ct=Pn(Qe,$t);return Qs(e,t,Ja,$e.placeholder,o,Qe,Ct,z,Y,ce-Je)}var pn=me?o:this,Cn=Re?pn[e]:e;return Je=Qe.length,z?Qe=Hc(Qe,z):je&&Je>1&&Qe.reverse(),pe&&Y<Je&&(Qe.length=Y),this&&this!==_t&&this instanceof $e&&(Cn=Ye||Da(Cn)),Cn.apply(pn,Qe)}return $e}function Js(e,t){return function(o,A){return Qu(o,e,t(A),{})}}function Za(e,t){return function(o,A){var N;if(o===a&&A===a)return t;if(o!==a&&(N=o),A!==a){if(N===a)return A;typeof o=="string"||typeof A=="string"?(o=Yt(o),A=Yt(A)):(o=Fs(o),A=Fs(A)),N=e(o,A)}return N}}function Xr(e){return In(function(t){return t=vt(t,Vt(Oe())),Xe(function(o){var A=this;return e(t,function(N){return qt(N,A,o)})})})}function Qa(e,t){t=t===a?" ":Yt(t);var o=t.length;if(o<2)return o?Gr(t,e):t;var A=Gr(t,Wa(e/Jn(t)));return Xn(t)?Ln(ln(A),0,e).join(""):A.slice(0,e)}function Tc(e,t,o,A){var N=t&I,L=Da(e);function G(){for(var z=-1,Y=arguments.length,ce=-1,pe=A.length,me=te(pe+Y),Re=this&&this!==_t&&this instanceof G?L:e;++ce<pe;)me[ce]=A[ce];for(;Y--;)me[ce++]=arguments[++z];return qt(Re,N?o:this,me)}return G}function Zs(e){return function(t,o,A){return A&&typeof A!="number"&&jt(t,o,A)&&(o=A=a),t=Rn(t),o===a?(o=t,t=0):o=Rn(o),A=A===a?t<o?1:-1:Rn(A),pc(t,o,A,e)}}function er(e){return function(t,o){return typeof t=="string"&&typeof o=="string"||(t=on(t),o=on(o)),e(t,o)}}function Qs(e,t,o,A,N,L,G,z,Y,ce){var pe=t&R,me=pe?G:a,Re=pe?a:G,Le=pe?L:a,je=pe?a:L;t|=pe?_:B,t&=~(pe?B:_),t&D||(t&=~(I|C));var Ye=[e,t,N,Le,me,je,Re,z,Y,ce],$e=o.apply(a,Ye);return ri(e)&&po($e,Ye),$e.placeholder=A,fo($e,e,t)}function Jr(e){var t=xt[e];return function(o,A){if(o=on(o),A=A==null?0:kt(Ve(A),292),A&&ds(o)){var N=(ot(o)+"e").split("e"),L=t(N[0]+"e"+(+N[1]+A));return N=(ot(L)+"e").split("e"),+(N[0]+"e"+(+N[1]-A))}return t(o)}}var xc=Qn&&1/Na(new Qn([,-0]))[1]==H?function(e){return new Qn(e)}:yi;function eo(e){return function(t){var o=Ft(t);return o==ke?xr(t):o==Te?Kl(t):Fl(t,e(t))}}function Dn(e,t,o,A,N,L,G,z){var Y=t&C;if(!Y&&typeof e!="function")throw new tn(f);var ce=A?A.length:0;if(ce||(t&=~(_|B),A=N=a),G=G===a?G:Nt(Ve(G),0),z=z===a?z:Ve(z),ce-=N?N.length:0,t&B){var pe=A,me=N;A=N=a}var Re=Y?a:ei(e),Le=[e,t,o,A,N,pe,me,L,G,z];if(Re&&Uc(Le,Re),e=Le[0],t=Le[1],o=Le[2],A=Le[3],N=Le[4],z=Le[9]=Le[9]===a?Y?0:e.length:Nt(Le[9]-ce,0),!z&&t&(R|x)&&(t&=~(R|x)),!t||t==I)var je=Rc(e,t,o);else t==R||t==x?je=Cc(e,t,z):(t==_||t==(I|_))&&!N.length?je=Tc(e,t,o,A):je=Ja.apply(a,Le);var Ye=Re?Ls:po;return fo(Ye(je,Le),e,t)}function to(e,t,o,A){return e===a||cn(e,Zn[o])&&!ct.call(A,o)?t:e}function no(e,t,o,A,N,L){return St(e)&&St(t)&&(L.set(t,e),qa(e,t,a,no,L),L.delete(t)),e}function Nc(e){return Ea(e)?a:e}function ao(e,t,o,A,N,L){var G=o&y,z=e.length,Y=t.length;if(z!=Y&&!(G&&Y>z))return!1;var ce=L.get(e),pe=L.get(t);if(ce&&pe)return ce==t&&pe==e;var me=-1,Re=!0,Le=o&v?new $n:a;for(L.set(e,t),L.set(t,e);++me<z;){var je=e[me],Ye=t[me];if(A)var $e=G?A(Ye,je,me,t,e,L):A(je,Ye,me,e,t,L);if($e!==a){if($e)continue;Re=!1;break}if(Le){if(!Ir(t,function(Je,Qe){if(!ua(Le,Qe)&&(je===Je||N(je,Je,o,A,L)))return Le.push(Qe)})){Re=!1;break}}else if(!(je===Ye||N(je,Ye,o,A,L))){Re=!1;break}}return L.delete(e),L.delete(t),Re}function Pc(e,t,o,A,N,L,G){switch(o){case Ue:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Ge:return!(e.byteLength!=t.byteLength||!L(new ka(e),new ka(t)));case yt:case Dt:case ht:return cn(+e,+t);case de:return e.name==t.name&&e.message==t.message;case we:case X:return e==t+"";case ke:var z=xr;case Te:var Y=A&y;if(z||(z=Na),e.size!=t.size&&!Y)return!1;var ce=G.get(e);if(ce)return ce==t;A|=v,G.set(e,t);var pe=ao(z(e),z(t),A,N,L,G);return G.delete(e),pe;case Se:if(ha)return ha.call(e)==ha.call(t)}return!1}function bc(e,t,o,A,N,L){var G=o&y,z=Zr(e),Y=z.length,ce=Zr(t),pe=ce.length;if(Y!=pe&&!G)return!1;for(var me=Y;me--;){var Re=z[me];if(!(G?Re in t:ct.call(t,Re)))return!1}var Le=L.get(e),je=L.get(t);if(Le&&je)return Le==t&&je==e;var Ye=!0;L.set(e,t),L.set(t,e);for(var $e=G;++me<Y;){Re=z[me];var Je=e[Re],Qe=t[Re];if(A)var Jt=G?A(Qe,Je,Re,t,e,L):A(Je,Qe,Re,e,t,L);if(!(Jt===a?Je===Qe||N(Je,Qe,o,A,L):Jt)){Ye=!1;break}$e||($e=Re=="constructor")}if(Ye&&!$e){var $t=e.constructor,Zt=t.constructor;$t!=Zt&&"constructor"in e&&"constructor"in t&&!(typeof $t=="function"&&$t instanceof $t&&typeof Zt=="function"&&Zt instanceof Zt)&&(Ye=!1)}return L.delete(e),L.delete(t),Ye}function In(e){return si(uo(e,a,yo),e+"")}function Zr(e){return Es(e,bt,ni)}function Qr(e){return Es(e,Ht,ro)}var ei=$a?function(e){return $a.get(e)}:yi;function tr(e){for(var t=e.name+"",o=ea[t],A=ct.call(ea,t)?o.length:0;A--;){var N=o[A],L=N.func;if(L==null||L==e)return N.name}return t}function ra(e){var t=ct.call(M,"placeholder")?M:e;return t.placeholder}function Oe(){var e=M.iteratee||vi;return e=e===vi?Ts:e,arguments.length?e(arguments[0],arguments[1]):e}function nr(e,t){var o=e.__data__;return Oc(t)?o[typeof t=="string"?"string":"hash"]:o.map}function ti(e){for(var t=bt(e),o=t.length;o--;){var A=t[o],N=e[A];t[o]=[A,N,oo(N)]}return t}function Kn(e,t){var o=$l(e,t);return Cs(o)?o:a}function wc(e){var t=ct.call(e,Wn),o=e[Wn];try{e[Wn]=a;var A=!0}catch(L){}var N=Ma.call(e);return A&&(t?e[Wn]=o:delete e[Wn]),N}var ni=Pr?function(e){return e==null?[]:(e=pt(e),xn(Pr(e),function(t){return cs.call(e,t)}))}:Di,ro=Pr?function(e){for(var t=[];e;)Nn(t,ni(e)),e=Fa(e);return t}:Di,Ft=Wt;(br&&Ft(new br(new ArrayBuffer(1)))!=Ue||pa&&Ft(new pa)!=ke||wr&&Ft(wr.resolve())!=Me||Qn&&Ft(new Qn)!=Te||da&&Ft(new da)!=ve)&&(Ft=function(e){var t=Wt(e),o=t==tt?e.constructor:a,A=o?Hn(o):"";if(A)switch(A){case fu:return Ue;case hu:return ke;case mu:return Me;case gu:return Te;case vu:return ve}return t});function _c(e,t,o){for(var A=-1,N=o.length;++A<N;){var L=o[A],G=L.size;switch(L.type){case"drop":e+=G;break;case"dropRight":t-=G;break;case"take":t=kt(t,e+G);break;case"takeRight":e=Nt(e,t-G);break}}return{start:e,end:t}}function Mc(e){var t=e.match(ue);return t?t[1].split(le):[]}function io(e,t,o){t=Mn(t,e);for(var A=-1,N=t.length,L=!1;++A<N;){var G=gn(t[A]);if(!(L=e!=null&&o(e,G)))break;e=e[G]}return L||++A!=N?L:(N=e==null?0:e.length,!!N&&ur(N)&&An(G,N)&&(ze(e)||zn(e)))}function Lc(e){var t=e.length,o=new e.constructor(t);return t&&typeof e[0]=="string"&&ct.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function so(e){return typeof e.constructor=="function"&&!Ia(e)?ta(Fa(e)):{}}function kc(e,t,o){var A=e.constructor;switch(t){case Ge:return Yr(e);case yt:case Dt:return new A(+e);case Ue:return Sc(e,o);case qe:case et:case lt:case mt:case Bt:case Lt:case Tt:case dn:case fn:return Us(e,o);case ke:return new A;case ht:case X:return new A(e);case we:return yc(e);case Te:return new A;case Se:return Dc(e)}}function Fc(e,t){var o=t.length;if(!o)return e;var A=o-1;return t[A]=(o>1?"& ":"")+t[A],t=t.join(o>2?", ":" "),e.replace(ae,`{
/* [wrapped with `+t+`] */
`)}function Bc(e){return ze(e)||zn(e)||!!(ps&&e&&e[ps])}function An(e,t){var o=typeof e;return t=t==null?U:t,!!t&&(o=="number"||o!="symbol"&&dr.test(e))&&e>-1&&e%1==0&&e<t}function jt(e,t,o){if(!St(o))return!1;var A=typeof t;return(A=="number"?Kt(o)&&An(t,o.length):A=="string"&&t in o)?cn(o[t],e):!1}function ai(e,t){if(ze(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||Xt(e)?!0:De.test(e)||!se.test(e)||t!=null&&e in pt(t)}function Oc(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ri(e){var t=tr(e),o=M[t];if(typeof o!="function"||!(t in Ze.prototype))return!1;if(e===o)return!0;var A=ei(o);return!!A&&e===A[0]}function Wc(e){return!!os&&os in e}var jc=wa?En:Ii;function Ia(e){var t=e&&e.constructor,o=typeof t=="function"&&t.prototype||Zn;return e===o}function oo(e){return e===e&&!St(e)}function lo(e,t){return function(o){return o==null?!1:o[e]===t&&(t!==a||e in pt(o))}}function $c(e){var t=or(e,function(A){return o.size===S&&o.clear(),A}),o=t.cache;return t}function Uc(e,t){var o=e[1],A=t[1],N=o|A,L=N<(I|C|w),G=A==w&&o==R||A==w&&o==P&&e[7].length<=t[8]||A==(w|P)&&t[7].length<=t[8]&&o==R;if(!(L||G))return e;A&I&&(e[2]=t[2],N|=o&I?0:D);var z=t[3];if(z){var Y=e[3];e[3]=Y?Ks(Y,z,t[4]):z,e[4]=Y?Pn(e[3],i):t[4]}return z=t[5],z&&(Y=e[5],e[5]=Y?Hs(Y,z,t[6]):z,e[6]=Y?Pn(e[5],i):t[6]),z=t[7],z&&(e[7]=z),A&w&&(e[8]=e[8]==null?t[8]:kt(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=N,e}function Gc(e){var t=[];if(e!=null)for(var o in pt(e))t.push(o);return t}function Kc(e){return Ma.call(e)}function uo(e,t,o){return t=Nt(t===a?e.length-1:t,0),function(){for(var A=arguments,N=-1,L=Nt(A.length-t,0),G=te(L);++N<L;)G[N]=A[t+N];N=-1;for(var z=te(t+1);++N<t;)z[N]=A[N];return z[t]=o(G),qt(e,this,z)}}function co(e,t){return t.length<2?e:Gn(e,rn(t,0,-1))}function Hc(e,t){for(var o=e.length,A=kt(t.length,o),N=Gt(e);A--;){var L=t[A];e[A]=An(L,o)?N[L]:a}return e}function ii(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var po=ho(Ls),Aa=su||function(e,t){return _t.setTimeout(e,t)},si=ho(hc);function fo(e,t,o){var A=t+"";return si(e,Fc(A,zc(Mc(A),o)))}function ho(e){var t=0,o=0;return function(){var A=cu(),N=K-(A-o);if(o=A,N>0){if(++t>=j)return arguments[0]}else t=0;return e.apply(a,arguments)}}function ar(e,t){var o=-1,A=e.length,N=A-1;for(t=t===a?A:t;++o<t;){var L=Ur(o,N),G=e[L];e[L]=e[o],e[o]=G}return e.length=t,e}var mo=$c(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Ae,function(o,A,N,L){t.push(N?L.replace(_e,"$1"):A||o)}),t});function gn(e){if(typeof e=="string"||Xt(e))return e;var t=e+"";return t=="0"&&1/e==-H?"-0":t}function Hn(e){if(e!=null){try{return _a.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function zc(e,t){return en(ye,function(o){var A="_."+o[0];t&o[1]&&!Ta(e,A)&&e.push(A)}),e.sort()}function go(e){if(e instanceof Ze)return e.clone();var t=new nn(e.__wrapped__,e.__chain__);return t.__actions__=Gt(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function qc(e,t,o){(o?jt(e,t,o):t===a)?t=1:t=Nt(Ve(t),0);var A=e==null?0:e.length;if(!A||t<1)return[];for(var N=0,L=0,G=te(Wa(A/t));N<A;)G[L++]=rn(e,N,N+=t);return G}function Vc(e){for(var t=-1,o=e==null?0:e.length,A=0,N=[];++t<o;){var L=e[t];L&&(N[A++]=L)}return N}function Yc(){var e=arguments.length;if(!e)return[];for(var t=te(e-1),o=arguments[0],A=e;A--;)t[A-1]=arguments[A];return Nn(ze(o)?Gt(o):[o],Mt(t,1))}var Xc=Xe(function(e,t){return Rt(e)?ga(e,Mt(t,1,Rt,!0)):[]}),Jc=Xe(function(e,t){var o=sn(t);return Rt(o)&&(o=a),Rt(e)?ga(e,Mt(t,1,Rt,!0),Oe(o,2)):[]}),Zc=Xe(function(e,t){var o=sn(t);return Rt(o)&&(o=a),Rt(e)?ga(e,Mt(t,1,Rt,!0),a,o):[]});function Qc(e,t,o){var A=e==null?0:e.length;return A?(t=o||t===a?1:Ve(t),rn(e,t<0?0:t,A)):[]}function ep(e,t,o){var A=e==null?0:e.length;return A?(t=o||t===a?1:Ve(t),t=A-t,rn(e,0,t<0?0:t)):[]}function tp(e,t){return e&&e.length?Ya(e,Oe(t,3),!0,!0):[]}function np(e,t){return e&&e.length?Ya(e,Oe(t,3),!0):[]}function ap(e,t,o,A){var N=e==null?0:e.length;return N?(o&&typeof o!="number"&&jt(e,t,o)&&(o=0,A=N),Yu(e,t,o,A)):[]}function vo(e,t,o){var A=e==null?0:e.length;if(!A)return-1;var N=o==null?0:Ve(o);return N<0&&(N=Nt(A+N,0)),xa(e,Oe(t,3),N)}function So(e,t,o){var A=e==null?0:e.length;if(!A)return-1;var N=A-1;return o!==a&&(N=Ve(o),N=o<0?Nt(A+N,0):kt(N,A-1)),xa(e,Oe(t,3),N,!0)}function yo(e){var t=e==null?0:e.length;return t?Mt(e,1):[]}function rp(e){var t=e==null?0:e.length;return t?Mt(e,H):[]}function ip(e,t){var o=e==null?0:e.length;return o?(t=t===a?1:Ve(t),Mt(e,t)):[]}function sp(e){for(var t=-1,o=e==null?0:e.length,A={};++t<o;){var N=e[t];A[N[0]]=N[1]}return A}function Do(e){return e&&e.length?e[0]:a}function op(e,t,o){var A=e==null?0:e.length;if(!A)return-1;var N=o==null?0:Ve(o);return N<0&&(N=Nt(A+N,0)),Yn(e,t,N)}function lp(e){var t=e==null?0:e.length;return t?rn(e,0,-1):[]}var up=Xe(function(e){var t=vt(e,qr);return t.length&&t[0]===e[0]?Br(t):[]}),cp=Xe(function(e){var t=sn(e),o=vt(e,qr);return t===sn(o)?t=a:o.pop(),o.length&&o[0]===e[0]?Br(o,Oe(t,2)):[]}),pp=Xe(function(e){var t=sn(e),o=vt(e,qr);return t=typeof t=="function"?t:a,t&&o.pop(),o.length&&o[0]===e[0]?Br(o,a,t):[]});function dp(e,t){return e==null?"":lu.call(e,t)}function sn(e){var t=e==null?0:e.length;return t?e[t-1]:a}function fp(e,t,o){var A=e==null?0:e.length;if(!A)return-1;var N=A;return o!==a&&(N=Ve(o),N=N<0?Nt(A+N,0):kt(N,A-1)),t===t?zl(e,t,N):xa(e,Qi,N,!0)}function hp(e,t){return e&&e.length?bs(e,Ve(t)):a}var mp=Xe(Io);function Io(e,t){return e&&e.length&&t&&t.length?$r(e,t):e}function gp(e,t,o){return e&&e.length&&t&&t.length?$r(e,t,Oe(o,2)):e}function vp(e,t,o){return e&&e.length&&t&&t.length?$r(e,t,a,o):e}var Sp=In(function(e,t){var o=e==null?0:e.length,A=Mr(e,t);return Ms(e,vt(t,function(N){return An(N,o)?+N:N}).sort(Gs)),A});function yp(e,t){var o=[];if(!(e&&e.length))return o;var A=-1,N=[],L=e.length;for(t=Oe(t,3);++A<L;){var G=e[A];t(G,A,e)&&(o.push(G),N.push(A))}return Ms(e,N),o}function oi(e){return e==null?e:du.call(e)}function Dp(e,t,o){var A=e==null?0:e.length;return A?(o&&typeof o!="number"&&jt(e,t,o)?(t=0,o=A):(t=t==null?0:Ve(t),o=o===a?A:Ve(o)),rn(e,t,o)):[]}function Ip(e,t){return Va(e,t)}function Ap(e,t,o){return Kr(e,t,Oe(o,2))}function Ep(e,t){var o=e==null?0:e.length;if(o){var A=Va(e,t);if(A<o&&cn(e[A],t))return A}return-1}function Rp(e,t){return Va(e,t,!0)}function Cp(e,t,o){return Kr(e,t,Oe(o,2),!0)}function Tp(e,t){var o=e==null?0:e.length;if(o){var A=Va(e,t,!0)-1;if(cn(e[A],t))return A}return-1}function xp(e){return e&&e.length?ks(e):[]}function Np(e,t){return e&&e.length?ks(e,Oe(t,2)):[]}function Pp(e){var t=e==null?0:e.length;return t?rn(e,1,t):[]}function bp(e,t,o){return e&&e.length?(t=o||t===a?1:Ve(t),rn(e,0,t<0?0:t)):[]}function wp(e,t,o){var A=e==null?0:e.length;return A?(t=o||t===a?1:Ve(t),t=A-t,rn(e,t<0?0:t,A)):[]}function _p(e,t){return e&&e.length?Ya(e,Oe(t,3),!1,!0):[]}function Mp(e,t){return e&&e.length?Ya(e,Oe(t,3)):[]}var Lp=Xe(function(e){return _n(Mt(e,1,Rt,!0))}),kp=Xe(function(e){var t=sn(e);return Rt(t)&&(t=a),_n(Mt(e,1,Rt,!0),Oe(t,2))}),Fp=Xe(function(e){var t=sn(e);return t=typeof t=="function"?t:a,_n(Mt(e,1,Rt,!0),a,t)});function Bp(e){return e&&e.length?_n(e):[]}function Op(e,t){return e&&e.length?_n(e,Oe(t,2)):[]}function Wp(e,t){return t=typeof t=="function"?t:a,e&&e.length?_n(e,a,t):[]}function li(e){if(!(e&&e.length))return[];var t=0;return e=xn(e,function(o){if(Rt(o))return t=Nt(o.length,t),!0}),Cr(t,function(o){return vt(e,Ar(o))})}function Ao(e,t){if(!(e&&e.length))return[];var o=li(e);return t==null?o:vt(o,function(A){return qt(t,a,A)})}var jp=Xe(function(e,t){return Rt(e)?ga(e,t):[]}),$p=Xe(function(e){return zr(xn(e,Rt))}),Up=Xe(function(e){var t=sn(e);return Rt(t)&&(t=a),zr(xn(e,Rt),Oe(t,2))}),Gp=Xe(function(e){var t=sn(e);return t=typeof t=="function"?t:a,zr(xn(e,Rt),a,t)}),Kp=Xe(li);function Hp(e,t){return Ws(e||[],t||[],ma)}function zp(e,t){return Ws(e||[],t||[],ya)}var qp=Xe(function(e){var t=e.length,o=t>1?e[t-1]:a;return o=typeof o=="function"?(e.pop(),o):a,Ao(e,o)});function Eo(e){var t=M(e);return t.__chain__=!0,t}function Vp(e,t){return t(e),e}function rr(e,t){return t(e)}var Yp=In(function(e){var t=e.length,o=t?e[0]:0,A=this.__wrapped__,N=function(L){return Mr(L,e)};return t>1||this.__actions__.length||!(A instanceof Ze)||!An(o)?this.thru(N):(A=A.slice(o,+o+(t?1:0)),A.__actions__.push({func:rr,args:[N],thisArg:a}),new nn(A,this.__chain__).thru(function(L){return t&&!L.length&&L.push(a),L}))});function Xp(){return Eo(this)}function Jp(){return new nn(this.value(),this.__chain__)}function Zp(){this.__values__===a&&(this.__values__=Bo(this.value()));var e=this.__index__>=this.__values__.length,t=e?a:this.__values__[this.__index__++];return{done:e,value:t}}function Qp(){return this}function ed(e){for(var t,o=this;o instanceof Ga;){var A=go(o);A.__index__=0,A.__values__=a,t?N.__wrapped__=A:t=A;var N=A;o=o.__wrapped__}return N.__wrapped__=e,t}function td(){var e=this.__wrapped__;if(e instanceof Ze){var t=e;return this.__actions__.length&&(t=new Ze(this)),t=t.reverse(),t.__actions__.push({func:rr,args:[oi],thisArg:a}),new nn(t,this.__chain__)}return this.thru(oi)}function nd(){return Os(this.__wrapped__,this.__actions__)}var ad=Xa(function(e,t,o){ct.call(e,o)?++e[o]:yn(e,o,1)});function rd(e,t,o){var A=ze(e)?Ji:Vu;return o&&jt(e,t,o)&&(t=a),A(e,Oe(t,3))}function id(e,t){var o=ze(e)?xn:Is;return o(e,Oe(t,3))}var sd=Ys(vo),od=Ys(So);function ld(e,t){return Mt(ir(e,t),1)}function ud(e,t){return Mt(ir(e,t),H)}function cd(e,t,o){return o=o===a?1:Ve(o),Mt(ir(e,t),o)}function Ro(e,t){var o=ze(e)?en:wn;return o(e,Oe(t,3))}function Co(e,t){var o=ze(e)?Pl:Ds;return o(e,Oe(t,3))}var pd=Xa(function(e,t,o){ct.call(e,o)?e[o].push(t):yn(e,o,[t])});function dd(e,t,o,A){e=Kt(e)?e:sa(e),o=o&&!A?Ve(o):0;var N=e.length;return o<0&&(o=Nt(N+o,0)),cr(e)?o<=N&&e.indexOf(t,o)>-1:!!N&&Yn(e,t,o)>-1}var fd=Xe(function(e,t,o){var A=-1,N=typeof t=="function",L=Kt(e)?te(e.length):[];return wn(e,function(G){L[++A]=N?qt(t,G,o):va(G,t,o)}),L}),hd=Xa(function(e,t,o){yn(e,o,t)});function ir(e,t){var o=ze(e)?vt:xs;return o(e,Oe(t,3))}function md(e,t,o,A){return e==null?[]:(ze(t)||(t=t==null?[]:[t]),o=A?a:o,ze(o)||(o=o==null?[]:[o]),ws(e,t,o))}var gd=Xa(function(e,t,o){e[o?0:1].push(t)},function(){return[[],[]]});function vd(e,t,o){var A=ze(e)?Dr:ts,N=arguments.length<3;return A(e,Oe(t,4),o,N,wn)}function Sd(e,t,o){var A=ze(e)?bl:ts,N=arguments.length<3;return A(e,Oe(t,4),o,N,Ds)}function yd(e,t){var o=ze(e)?xn:Is;return o(e,lr(Oe(t,3)))}function Dd(e){var t=ze(e)?gs:dc;return t(e)}function Id(e,t,o){(o?jt(e,t,o):t===a)?t=1:t=Ve(t);var A=ze(e)?Gu:fc;return A(e,t)}function Ad(e){var t=ze(e)?Ku:mc;return t(e)}function Ed(e){if(e==null)return 0;if(Kt(e))return cr(e)?Jn(e):e.length;var t=Ft(e);return t==ke||t==Te?e.size:Wr(e).length}function Rd(e,t,o){var A=ze(e)?Ir:gc;return o&&jt(e,t,o)&&(t=a),A(e,Oe(t,3))}var Cd=Xe(function(e,t){if(e==null)return[];var o=t.length;return o>1&&jt(e,t[0],t[1])?t=[]:o>2&&jt(t[0],t[1],t[2])&&(t=[t[0]]),ws(e,Mt(t,1),[])}),sr=iu||function(){return _t.Date.now()};function Td(e,t){if(typeof t!="function")throw new tn(f);return e=Ve(e),function(){if(--e<1)return t.apply(this,arguments)}}function To(e,t,o){return t=o?a:t,t=e&&t==null?e.length:t,Dn(e,w,a,a,a,a,t)}function xo(e,t){var o;if(typeof t!="function")throw new tn(f);return e=Ve(e),function(){return--e>0&&(o=t.apply(this,arguments)),e<=1&&(t=a),o}}var ui=Xe(function(e,t,o){var A=I;if(o.length){var N=Pn(o,ra(ui));A|=_}return Dn(e,A,t,o,N)}),No=Xe(function(e,t,o){var A=I|C;if(o.length){var N=Pn(o,ra(No));A|=_}return Dn(t,A,e,o,N)});function Po(e,t,o){t=o?a:t;var A=Dn(e,R,a,a,a,a,a,t);return A.placeholder=Po.placeholder,A}function bo(e,t,o){t=o?a:t;var A=Dn(e,x,a,a,a,a,a,t);return A.placeholder=bo.placeholder,A}function wo(e,t,o){var A,N,L,G,z,Y,ce=0,pe=!1,me=!1,Re=!0;if(typeof e!="function")throw new tn(f);t=on(t)||0,St(o)&&(pe=!!o.leading,me="maxWait"in o,L=me?Nt(on(o.maxWait)||0,t):L,Re="trailing"in o?!!o.trailing:Re);function Le(Ct){var pn=A,Cn=N;return A=N=a,ce=Ct,G=e.apply(Cn,pn),G}function je(Ct){return ce=Ct,z=Aa(Je,t),pe?Le(Ct):G}function Ye(Ct){var pn=Ct-Y,Cn=Ct-ce,Xo=t-pn;return me?kt(Xo,L-Cn):Xo}function $e(Ct){var pn=Ct-Y,Cn=Ct-ce;return Y===a||pn>=t||pn<0||me&&Cn>=L}function Je(){var Ct=sr();if($e(Ct))return Qe(Ct);z=Aa(Je,Ye(Ct))}function Qe(Ct){return z=a,Re&&A?Le(Ct):(A=N=a,G)}function Jt(){z!==a&&js(z),ce=0,A=Y=N=z=a}function $t(){return z===a?G:Qe(sr())}function Zt(){var Ct=sr(),pn=$e(Ct);if(A=arguments,N=this,Y=Ct,pn){if(z===a)return je(Y);if(me)return js(z),z=Aa(Je,t),Le(Y)}return z===a&&(z=Aa(Je,t)),G}return Zt.cancel=Jt,Zt.flush=$t,Zt}var xd=Xe(function(e,t){return ys(e,1,t)}),Nd=Xe(function(e,t,o){return ys(e,on(t)||0,o)});function Pd(e){return Dn(e,T)}function or(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new tn(f);var o=function(){var A=arguments,N=t?t.apply(this,A):A[0],L=o.cache;if(L.has(N))return L.get(N);var G=e.apply(this,A);return o.cache=L.set(N,G)||L,G};return o.cache=new(or.Cache||Sn),o}or.Cache=Sn;function lr(e){if(typeof e!="function")throw new tn(f);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function bd(e){return xo(2,e)}var wd=vc(function(e,t){t=t.length==1&&ze(t[0])?vt(t[0],Vt(Oe())):vt(Mt(t,1),Vt(Oe()));var o=t.length;return Xe(function(A){for(var N=-1,L=kt(A.length,o);++N<L;)A[N]=t[N].call(this,A[N]);return qt(e,this,A)})}),ci=Xe(function(e,t){var o=Pn(t,ra(ci));return Dn(e,_,a,t,o)}),_o=Xe(function(e,t){var o=Pn(t,ra(_o));return Dn(e,B,a,t,o)}),_d=In(function(e,t){return Dn(e,P,a,a,a,t)});function Md(e,t){if(typeof e!="function")throw new tn(f);return t=t===a?t:Ve(t),Xe(e,t)}function Ld(e,t){if(typeof e!="function")throw new tn(f);return t=t==null?0:Nt(Ve(t),0),Xe(function(o){var A=o[t],N=Ln(o,0,t);return A&&Nn(N,A),qt(e,this,N)})}function kd(e,t,o){var A=!0,N=!0;if(typeof e!="function")throw new tn(f);return St(o)&&(A="leading"in o?!!o.leading:A,N="trailing"in o?!!o.trailing:N),wo(e,t,{leading:A,maxWait:t,trailing:N})}function Fd(e){return To(e,1)}function Bd(e,t){return ci(Vr(t),e)}function Od(){if(!arguments.length)return[];var e=arguments[0];return ze(e)?e:[e]}function Wd(e){return an(e,c)}function jd(e,t){return t=typeof t=="function"?t:a,an(e,c,t)}function $d(e){return an(e,g|c)}function Ud(e,t){return t=typeof t=="function"?t:a,an(e,g|c,t)}function Gd(e,t){return t==null||Ss(e,t,bt(t))}function cn(e,t){return e===t||e!==e&&t!==t}var Kd=er(Fr),Hd=er(function(e,t){return e>=t}),zn=Rs(function(){return arguments}())?Rs:function(e){return Et(e)&&ct.call(e,"callee")&&!cs.call(e,"callee")},ze=te.isArray,zd=Hi?Vt(Hi):ec;function Kt(e){return e!=null&&ur(e.length)&&!En(e)}function Rt(e){return Et(e)&&Kt(e)}function qd(e){return e===!0||e===!1||Et(e)&&Wt(e)==yt}var kn=ou||Ii,Vd=zi?Vt(zi):tc;function Yd(e){return Et(e)&&e.nodeType===1&&!Ea(e)}function Xd(e){if(e==null)return!0;if(Kt(e)&&(ze(e)||typeof e=="string"||typeof e.splice=="function"||kn(e)||ia(e)||zn(e)))return!e.length;var t=Ft(e);if(t==ke||t==Te)return!e.size;if(Ia(e))return!Wr(e).length;for(var o in e)if(ct.call(e,o))return!1;return!0}function Jd(e,t){return Sa(e,t)}function Zd(e,t,o){o=typeof o=="function"?o:a;var A=o?o(e,t):a;return A===a?Sa(e,t,a,o):!!A}function pi(e){if(!Et(e))return!1;var t=Wt(e);return t==de||t==Pt||typeof e.message=="string"&&typeof e.name=="string"&&!Ea(e)}function Qd(e){return typeof e=="number"&&ds(e)}function En(e){if(!St(e))return!1;var t=Wt(e);return t==Ne||t==Ie||t==it||t==fe}function Mo(e){return typeof e=="number"&&e==Ve(e)}function ur(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=U}function St(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Et(e){return e!=null&&typeof e=="object"}var Lo=qi?Vt(qi):ac;function ef(e,t){return e===t||Or(e,t,ti(t))}function tf(e,t,o){return o=typeof o=="function"?o:a,Or(e,t,ti(t),o)}function nf(e){return ko(e)&&e!=+e}function af(e){if(jc(e))throw new He(h);return Cs(e)}function rf(e){return e===null}function sf(e){return e==null}function ko(e){return typeof e=="number"||Et(e)&&Wt(e)==ht}function Ea(e){if(!Et(e)||Wt(e)!=tt)return!1;var t=Fa(e);if(t===null)return!0;var o=ct.call(t,"constructor")&&t.constructor;return typeof o=="function"&&o instanceof o&&_a.call(o)==tu}var di=Vi?Vt(Vi):rc;function of(e){return Mo(e)&&e>=-U&&e<=U}var Fo=Yi?Vt(Yi):ic;function cr(e){return typeof e=="string"||!ze(e)&&Et(e)&&Wt(e)==X}function Xt(e){return typeof e=="symbol"||Et(e)&&Wt(e)==Se}var ia=Xi?Vt(Xi):sc;function lf(e){return e===a}function uf(e){return Et(e)&&Ft(e)==ve}function cf(e){return Et(e)&&Wt(e)==Fe}var pf=er(jr),df=er(function(e,t){return e<=t});function Bo(e){if(!e)return[];if(Kt(e))return cr(e)?ln(e):Gt(e);if(ca&&e[ca])return Gl(e[ca]());var t=Ft(e),o=t==ke?xr:t==Te?Na:sa;return o(e)}function Rn(e){if(!e)return e===0?e:0;if(e=on(e),e===H||e===-H){var t=e<0?-1:1;return t*Q}return e===e?e:0}function Ve(e){var t=Rn(e),o=t%1;return t===t?o?t-o:t:0}function Oo(e){return e?Un(Ve(e),0,ie):0}function on(e){if(typeof e=="number")return e;if(Xt(e))return ne;if(St(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=St(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ns(e);var o=gt.test(e);return o||nt.test(e)?Tl(e.slice(2),o?2:8):wt.test(e)?ne:+e}function Wo(e){return mn(e,Ht(e))}function ff(e){return e?Un(Ve(e),-U,U):e===0?e:0}function ot(e){return e==null?"":Yt(e)}var hf=na(function(e,t){if(Ia(t)||Kt(t)){mn(t,bt(t),e);return}for(var o in t)ct.call(t,o)&&ma(e,o,t[o])}),jo=na(function(e,t){mn(t,Ht(t),e)}),pr=na(function(e,t,o,A){mn(t,Ht(t),e,A)}),mf=na(function(e,t,o,A){mn(t,bt(t),e,A)}),gf=In(Mr);function vf(e,t){var o=ta(e);return t==null?o:vs(o,t)}var Sf=Xe(function(e,t){e=pt(e);var o=-1,A=t.length,N=A>2?t[2]:a;for(N&&jt(t[0],t[1],N)&&(A=1);++o<A;)for(var L=t[o],G=Ht(L),z=-1,Y=G.length;++z<Y;){var ce=G[z],pe=e[ce];(pe===a||cn(pe,Zn[ce])&&!ct.call(e,ce))&&(e[ce]=L[ce])}return e}),yf=Xe(function(e){return e.push(a,no),qt($o,a,e)});function Df(e,t){return Zi(e,Oe(t,3),hn)}function If(e,t){return Zi(e,Oe(t,3),kr)}function Af(e,t){return e==null?e:Lr(e,Oe(t,3),Ht)}function Ef(e,t){return e==null?e:As(e,Oe(t,3),Ht)}function Rf(e,t){return e&&hn(e,Oe(t,3))}function Cf(e,t){return e&&kr(e,Oe(t,3))}function Tf(e){return e==null?[]:za(e,bt(e))}function xf(e){return e==null?[]:za(e,Ht(e))}function fi(e,t,o){var A=e==null?a:Gn(e,t);return A===a?o:A}function Nf(e,t){return e!=null&&io(e,t,Xu)}function hi(e,t){return e!=null&&io(e,t,Ju)}var Pf=Js(function(e,t,o){t!=null&&typeof t.toString!="function"&&(t=Ma.call(t)),e[t]=o},gi(zt)),bf=Js(function(e,t,o){t!=null&&typeof t.toString!="function"&&(t=Ma.call(t)),ct.call(e,t)?e[t].push(o):e[t]=[o]},Oe),wf=Xe(va);function bt(e){return Kt(e)?ms(e):Wr(e)}function Ht(e){return Kt(e)?ms(e,!0):oc(e)}function _f(e,t){var o={};return t=Oe(t,3),hn(e,function(A,N,L){yn(o,t(A,N,L),A)}),o}function Mf(e,t){var o={};return t=Oe(t,3),hn(e,function(A,N,L){yn(o,N,t(A,N,L))}),o}var Lf=na(function(e,t,o){qa(e,t,o)}),$o=na(function(e,t,o,A){qa(e,t,o,A)}),kf=In(function(e,t){var o={};if(e==null)return o;var A=!1;t=vt(t,function(L){return L=Mn(L,e),A||(A=L.length>1),L}),mn(e,Qr(e),o),A&&(o=an(o,g|d|c,Nc));for(var N=t.length;N--;)Hr(o,t[N]);return o});function Ff(e,t){return Uo(e,lr(Oe(t)))}var Bf=In(function(e,t){return e==null?{}:uc(e,t)});function Uo(e,t){if(e==null)return{};var o=vt(Qr(e),function(A){return[A]});return t=Oe(t),_s(e,o,function(A,N){return t(A,N[0])})}function Of(e,t,o){t=Mn(t,e);var A=-1,N=t.length;for(N||(N=1,e=a);++A<N;){var L=e==null?a:e[gn(t[A])];L===a&&(A=N,L=o),e=En(L)?L.call(e):L}return e}function Wf(e,t,o){return e==null?e:ya(e,t,o)}function jf(e,t,o,A){return A=typeof A=="function"?A:a,e==null?e:ya(e,t,o,A)}var Go=eo(bt),Ko=eo(Ht);function $f(e,t,o){var A=ze(e),N=A||kn(e)||ia(e);if(t=Oe(t,4),o==null){var L=e&&e.constructor;N?o=A?new L:[]:St(e)?o=En(L)?ta(Fa(e)):{}:o={}}return(N?en:hn)(e,function(G,z,Y){return t(o,G,z,Y)}),o}function Uf(e,t){return e==null?!0:Hr(e,t)}function Gf(e,t,o){return e==null?e:Bs(e,t,Vr(o))}function Kf(e,t,o,A){return A=typeof A=="function"?A:a,e==null?e:Bs(e,t,Vr(o),A)}function sa(e){return e==null?[]:Tr(e,bt(e))}function Hf(e){return e==null?[]:Tr(e,Ht(e))}function zf(e,t,o){return o===a&&(o=t,t=a),o!==a&&(o=on(o),o=o===o?o:0),t!==a&&(t=on(t),t=t===t?t:0),Un(on(e),t,o)}function qf(e,t,o){return t=Rn(t),o===a?(o=t,t=0):o=Rn(o),e=on(e),Zu(e,t,o)}function Vf(e,t,o){if(o&&typeof o!="boolean"&&jt(e,t,o)&&(t=o=a),o===a&&(typeof t=="boolean"?(o=t,t=a):typeof e=="boolean"&&(o=e,e=a)),e===a&&t===a?(e=0,t=1):(e=Rn(e),t===a?(t=e,e=0):t=Rn(t)),e>t){var A=e;e=t,t=A}if(o||e%1||t%1){var N=fs();return kt(e+N*(t-e+Cl("1e-"+((N+"").length-1))),t)}return Ur(e,t)}var Yf=aa(function(e,t,o){return t=t.toLowerCase(),e+(o?Ho(t):t)});function Ho(e){return mi(ot(e).toLowerCase())}function zo(e){return e=ot(e),e&&e.replace(Ei,Ol).replace(ml,"")}function Xf(e,t,o){e=ot(e),t=Yt(t);var A=e.length;o=o===a?A:Un(Ve(o),0,A);var N=o;return o-=t.length,o>=0&&e.slice(o,N)==t}function Jf(e){return e=ot(e),e&&O.test(e)?e.replace(It,Wl):e}function Zf(e){return e=ot(e),e&&Ee.test(e)?e.replace(be,"\\$&"):e}var Qf=aa(function(e,t,o){return e+(o?"-":"")+t.toLowerCase()}),eh=aa(function(e,t,o){return e+(o?" ":"")+t.toLowerCase()}),th=Vs("toLowerCase");function nh(e,t,o){e=ot(e),t=Ve(t);var A=t?Jn(e):0;if(!t||A>=t)return e;var N=(t-A)/2;return Qa(ja(N),o)+e+Qa(Wa(N),o)}function ah(e,t,o){e=ot(e),t=Ve(t);var A=t?Jn(e):0;return t&&A<t?e+Qa(t-A,o):e}function rh(e,t,o){e=ot(e),t=Ve(t);var A=t?Jn(e):0;return t&&A<t?Qa(t-A,o)+e:e}function ih(e,t,o){return o||t==null?t=0:t&&(t=+t),pu(ot(e).replace(Ke,""),t||0)}function sh(e,t,o){return(o?jt(e,t,o):t===a)?t=1:t=Ve(t),Gr(ot(e),t)}function oh(){var e=arguments,t=ot(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var lh=aa(function(e,t,o){return e+(o?"_":"")+t.toLowerCase()});function uh(e,t,o){return o&&typeof o!="number"&&jt(e,t,o)&&(t=o=a),o=o===a?ie:o>>>0,o?(e=ot(e),e&&(typeof t=="string"||t!=null&&!di(t))&&(t=Yt(t),!t&&Xn(e))?Ln(ln(e),0,o):e.split(t,o)):[]}var ch=aa(function(e,t,o){return e+(o?" ":"")+mi(t)});function ph(e,t,o){return e=ot(e),o=o==null?0:Un(Ve(o),0,e.length),t=Yt(t),e.slice(o,o+t.length)==t}function dh(e,t,o){var A=M.templateSettings;o&&jt(e,t,o)&&(t=a),e=ot(e),t=pr({},t,A,to);var N=pr({},t.imports,A.imports,to),L=bt(N),G=Tr(N,L),z,Y,ce=0,pe=t.interpolate||oa,me="__p += '",Re=Nr((t.escape||oa).source+"|"+pe.source+"|"+(pe===ee?ut:oa).source+"|"+(t.evaluate||oa).source+"|$","g"),Le="//# sourceURL="+(ct.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Dl+"]")+`
`;e.replace(Re,function($e,Je,Qe,Jt,$t,Zt){return Qe||(Qe=Jt),me+=e.slice(ce,Zt).replace(qn,jl),Je&&(z=!0,me+=`' +
__e(`+Je+`) +
'`),$t&&(Y=!0,me+=`';
`+$t+`;
__p += '`),Qe&&(me+=`' +
((__t = (`+Qe+`)) == null ? '' : __t) +
'`),ce=Zt+$e.length,$e}),me+=`';
`;var je=ct.call(t,"variable")&&t.variable;if(!je)me=`with (obj) {
`+me+`
}
`;else if(We.test(je))throw new He(s);me=(Y?me.replace(Tn,""):me).replace(Fn,"$1").replace(Ot,"$1;"),me="function("+(je||"obj")+`) {
`+(je?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(Y?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+me+`return __p
}`;var Ye=Vo(function(){return rt(L,Le+"return "+me).apply(a,G)});if(Ye.source=me,pi(Ye))throw Ye;return Ye}function fh(e){return ot(e).toLowerCase()}function hh(e){return ot(e).toUpperCase()}function mh(e,t,o){if(e=ot(e),e&&(o||t===a))return ns(e);if(!e||!(t=Yt(t)))return e;var A=ln(e),N=ln(t),L=as(A,N),G=rs(A,N)+1;return Ln(A,L,G).join("")}function gh(e,t,o){if(e=ot(e),e&&(o||t===a))return e.slice(0,ss(e)+1);if(!e||!(t=Yt(t)))return e;var A=ln(e),N=rs(A,ln(t))+1;return Ln(A,0,N).join("")}function vh(e,t,o){if(e=ot(e),e&&(o||t===a))return e.replace(Ke,"");if(!e||!(t=Yt(t)))return e;var A=ln(e),N=as(A,ln(t));return Ln(A,N).join("")}function Sh(e,t){var o=b,A=F;if(St(t)){var N="separator"in t?t.separator:N;o="length"in t?Ve(t.length):o,A="omission"in t?Yt(t.omission):A}e=ot(e);var L=e.length;if(Xn(e)){var G=ln(e);L=G.length}if(o>=L)return e;var z=o-Jn(A);if(z<1)return A;var Y=G?Ln(G,0,z).join(""):e.slice(0,z);if(N===a)return Y+A;if(G&&(z+=Y.length-z),di(N)){if(e.slice(z).search(N)){var ce,pe=Y;for(N.global||(N=Nr(N.source,ot(At.exec(N))+"g")),N.lastIndex=0;ce=N.exec(pe);)var me=ce.index;Y=Y.slice(0,me===a?z:me)}}else if(e.indexOf(Yt(N),z)!=z){var Re=Y.lastIndexOf(N);Re>-1&&(Y=Y.slice(0,Re))}return Y+A}function yh(e){return e=ot(e),e&&On.test(e)?e.replace(Bn,ql):e}var Dh=aa(function(e,t,o){return e+(o?" ":"")+t.toUpperCase()}),mi=Vs("toUpperCase");function qo(e,t,o){return e=ot(e),t=o?a:t,t===a?Ul(e)?Xl(e):Ml(e):e.match(t)||[]}var Vo=Xe(function(e,t){try{return qt(e,a,t)}catch(o){return pi(o)?o:new He(o)}}),Ih=In(function(e,t){return en(t,function(o){o=gn(o),yn(e,o,ui(e[o],e))}),e});function Ah(e){var t=e==null?0:e.length,o=Oe();return e=t?vt(e,function(A){if(typeof A[1]!="function")throw new tn(f);return[o(A[0]),A[1]]}):[],Xe(function(A){for(var N=-1;++N<t;){var L=e[N];if(qt(L[0],this,A))return qt(L[1],this,A)}})}function Eh(e){return qu(an(e,g))}function gi(e){return function(){return e}}function Rh(e,t){return e==null||e!==e?t:e}var Ch=Xs(),Th=Xs(!0);function zt(e){return e}function vi(e){return Ts(typeof e=="function"?e:an(e,g))}function xh(e){return Ns(an(e,g))}function Nh(e,t){return Ps(e,an(t,g))}var Ph=Xe(function(e,t){return function(o){return va(o,e,t)}}),bh=Xe(function(e,t){return function(o){return va(e,o,t)}});function Si(e,t,o){var A=bt(t),N=za(t,A);o==null&&!(St(t)&&(N.length||!A.length))&&(o=t,t=e,e=this,N=za(t,bt(t)));var L=!(St(o)&&"chain"in o)||!!o.chain,G=En(e);return en(N,function(z){var Y=t[z];e[z]=Y,G&&(e.prototype[z]=function(){var ce=this.__chain__;if(L||ce){var pe=e(this.__wrapped__),me=pe.__actions__=Gt(this.__actions__);return me.push({func:Y,args:arguments,thisArg:e}),pe.__chain__=ce,pe}return Y.apply(e,Nn([this.value()],arguments))})}),e}function wh(){return _t._===this&&(_t._=nu),this}function yi(){}function _h(e){return e=Ve(e),Xe(function(t){return bs(t,e)})}var Mh=Xr(vt),Lh=Xr(Ji),kh=Xr(Ir);function Yo(e){return ai(e)?Ar(gn(e)):cc(e)}function Fh(e){return function(t){return e==null?a:Gn(e,t)}}var Bh=Zs(),Oh=Zs(!0);function Di(){return[]}function Ii(){return!1}function Wh(){return{}}function jh(){return""}function $h(){return!0}function Uh(e,t){if(e=Ve(e),e<1||e>U)return[];var o=ie,A=kt(e,ie);t=Oe(t),e-=ie;for(var N=Cr(A,t);++o<e;)t(o);return N}function Gh(e){return ze(e)?vt(e,gn):Xt(e)?[e]:Gt(mo(ot(e)))}function Kh(e){var t=++eu;return ot(e)+t}var Hh=Za(function(e,t){return e+t},0),zh=Jr("ceil"),qh=Za(function(e,t){return e/t},1),Vh=Jr("floor");function Yh(e){return e&&e.length?Ha(e,zt,Fr):a}function Xh(e,t){return e&&e.length?Ha(e,Oe(t,2),Fr):a}function Jh(e){return es(e,zt)}function Zh(e,t){return es(e,Oe(t,2))}function Qh(e){return e&&e.length?Ha(e,zt,jr):a}function em(e,t){return e&&e.length?Ha(e,Oe(t,2),jr):a}var tm=Za(function(e,t){return e*t},1),nm=Jr("round"),am=Za(function(e,t){return e-t},0);function rm(e){return e&&e.length?Rr(e,zt):0}function im(e,t){return e&&e.length?Rr(e,Oe(t,2)):0}return M.after=Td,M.ary=To,M.assign=hf,M.assignIn=jo,M.assignInWith=pr,M.assignWith=mf,M.at=gf,M.before=xo,M.bind=ui,M.bindAll=Ih,M.bindKey=No,M.castArray=Od,M.chain=Eo,M.chunk=qc,M.compact=Vc,M.concat=Yc,M.cond=Ah,M.conforms=Eh,M.constant=gi,M.countBy=ad,M.create=vf,M.curry=Po,M.curryRight=bo,M.debounce=wo,M.defaults=Sf,M.defaultsDeep=yf,M.defer=xd,M.delay=Nd,M.difference=Xc,M.differenceBy=Jc,M.differenceWith=Zc,M.drop=Qc,M.dropRight=ep,M.dropRightWhile=tp,M.dropWhile=np,M.fill=ap,M.filter=id,M.flatMap=ld,M.flatMapDeep=ud,M.flatMapDepth=cd,M.flatten=yo,M.flattenDeep=rp,M.flattenDepth=ip,M.flip=Pd,M.flow=Ch,M.flowRight=Th,M.fromPairs=sp,M.functions=Tf,M.functionsIn=xf,M.groupBy=pd,M.initial=lp,M.intersection=up,M.intersectionBy=cp,M.intersectionWith=pp,M.invert=Pf,M.invertBy=bf,M.invokeMap=fd,M.iteratee=vi,M.keyBy=hd,M.keys=bt,M.keysIn=Ht,M.map=ir,M.mapKeys=_f,M.mapValues=Mf,M.matches=xh,M.matchesProperty=Nh,M.memoize=or,M.merge=Lf,M.mergeWith=$o,M.method=Ph,M.methodOf=bh,M.mixin=Si,M.negate=lr,M.nthArg=_h,M.omit=kf,M.omitBy=Ff,M.once=bd,M.orderBy=md,M.over=Mh,M.overArgs=wd,M.overEvery=Lh,M.overSome=kh,M.partial=ci,M.partialRight=_o,M.partition=gd,M.pick=Bf,M.pickBy=Uo,M.property=Yo,M.propertyOf=Fh,M.pull=mp,M.pullAll=Io,M.pullAllBy=gp,M.pullAllWith=vp,M.pullAt=Sp,M.range=Bh,M.rangeRight=Oh,M.rearg=_d,M.reject=yd,M.remove=yp,M.rest=Md,M.reverse=oi,M.sampleSize=Id,M.set=Wf,M.setWith=jf,M.shuffle=Ad,M.slice=Dp,M.sortBy=Cd,M.sortedUniq=xp,M.sortedUniqBy=Np,M.split=uh,M.spread=Ld,M.tail=Pp,M.take=bp,M.takeRight=wp,M.takeRightWhile=_p,M.takeWhile=Mp,M.tap=Vp,M.throttle=kd,M.thru=rr,M.toArray=Bo,M.toPairs=Go,M.toPairsIn=Ko,M.toPath=Gh,M.toPlainObject=Wo,M.transform=$f,M.unary=Fd,M.union=Lp,M.unionBy=kp,M.unionWith=Fp,M.uniq=Bp,M.uniqBy=Op,M.uniqWith=Wp,M.unset=Uf,M.unzip=li,M.unzipWith=Ao,M.update=Gf,M.updateWith=Kf,M.values=sa,M.valuesIn=Hf,M.without=jp,M.words=qo,M.wrap=Bd,M.xor=$p,M.xorBy=Up,M.xorWith=Gp,M.zip=Kp,M.zipObject=Hp,M.zipObjectDeep=zp,M.zipWith=qp,M.entries=Go,M.entriesIn=Ko,M.extend=jo,M.extendWith=pr,Si(M,M),M.add=Hh,M.attempt=Vo,M.camelCase=Yf,M.capitalize=Ho,M.ceil=zh,M.clamp=zf,M.clone=Wd,M.cloneDeep=$d,M.cloneDeepWith=Ud,M.cloneWith=jd,M.conformsTo=Gd,M.deburr=zo,M.defaultTo=Rh,M.divide=qh,M.endsWith=Xf,M.eq=cn,M.escape=Jf,M.escapeRegExp=Zf,M.every=rd,M.find=sd,M.findIndex=vo,M.findKey=Df,M.findLast=od,M.findLastIndex=So,M.findLastKey=If,M.floor=Vh,M.forEach=Ro,M.forEachRight=Co,M.forIn=Af,M.forInRight=Ef,M.forOwn=Rf,M.forOwnRight=Cf,M.get=fi,M.gt=Kd,M.gte=Hd,M.has=Nf,M.hasIn=hi,M.head=Do,M.identity=zt,M.includes=dd,M.indexOf=op,M.inRange=qf,M.invoke=wf,M.isArguments=zn,M.isArray=ze,M.isArrayBuffer=zd,M.isArrayLike=Kt,M.isArrayLikeObject=Rt,M.isBoolean=qd,M.isBuffer=kn,M.isDate=Vd,M.isElement=Yd,M.isEmpty=Xd,M.isEqual=Jd,M.isEqualWith=Zd,M.isError=pi,M.isFinite=Qd,M.isFunction=En,M.isInteger=Mo,M.isLength=ur,M.isMap=Lo,M.isMatch=ef,M.isMatchWith=tf,M.isNaN=nf,M.isNative=af,M.isNil=sf,M.isNull=rf,M.isNumber=ko,M.isObject=St,M.isObjectLike=Et,M.isPlainObject=Ea,M.isRegExp=di,M.isSafeInteger=of,M.isSet=Fo,M.isString=cr,M.isSymbol=Xt,M.isTypedArray=ia,M.isUndefined=lf,M.isWeakMap=uf,M.isWeakSet=cf,M.join=dp,M.kebabCase=Qf,M.last=sn,M.lastIndexOf=fp,M.lowerCase=eh,M.lowerFirst=th,M.lt=pf,M.lte=df,M.max=Yh,M.maxBy=Xh,M.mean=Jh,M.meanBy=Zh,M.min=Qh,M.minBy=em,M.stubArray=Di,M.stubFalse=Ii,M.stubObject=Wh,M.stubString=jh,M.stubTrue=$h,M.multiply=tm,M.nth=hp,M.noConflict=wh,M.noop=yi,M.now=sr,M.pad=nh,M.padEnd=ah,M.padStart=rh,M.parseInt=ih,M.random=Vf,M.reduce=vd,M.reduceRight=Sd,M.repeat=sh,M.replace=oh,M.result=Of,M.round=nm,M.runInContext=V,M.sample=Dd,M.size=Ed,M.snakeCase=lh,M.some=Rd,M.sortedIndex=Ip,M.sortedIndexBy=Ap,M.sortedIndexOf=Ep,M.sortedLastIndex=Rp,M.sortedLastIndexBy=Cp,M.sortedLastIndexOf=Tp,M.startCase=ch,M.startsWith=ph,M.subtract=am,M.sum=rm,M.sumBy=im,M.template=dh,M.times=Uh,M.toFinite=Rn,M.toInteger=Ve,M.toLength=Oo,M.toLower=fh,M.toNumber=on,M.toSafeInteger=ff,M.toString=ot,M.toUpper=hh,M.trim=mh,M.trimEnd=gh,M.trimStart=vh,M.truncate=Sh,M.unescape=yh,M.uniqueId=Kh,M.upperCase=Dh,M.upperFirst=mi,M.each=Ro,M.eachRight=Co,M.first=Do,Si(M,function(){var e={};return hn(M,function(t,o){ct.call(M.prototype,o)||(e[o]=t)}),e}(),{chain:!1}),M.VERSION=n,en(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){M[e].placeholder=M}),en(["drop","take"],function(e,t){Ze.prototype[e]=function(o){o=o===a?1:Nt(Ve(o),0);var A=this.__filtered__&&!t?new Ze(this):this.clone();return A.__filtered__?A.__takeCount__=kt(o,A.__takeCount__):A.__views__.push({size:kt(o,ie),type:e+(A.__dir__<0?"Right":"")}),A},Ze.prototype[e+"Right"]=function(o){return this.reverse()[e](o).reverse()}}),en(["filter","map","takeWhile"],function(e,t){var o=t+1,A=o==W||o==k;Ze.prototype[e]=function(N){var L=this.clone();return L.__iteratees__.push({iteratee:Oe(N,3),type:o}),L.__filtered__=L.__filtered__||A,L}}),en(["head","last"],function(e,t){var o="take"+(t?"Right":"");Ze.prototype[e]=function(){return this[o](1).value()[0]}}),en(["initial","tail"],function(e,t){var o="drop"+(t?"":"Right");Ze.prototype[e]=function(){return this.__filtered__?new Ze(this):this[o](1)}}),Ze.prototype.compact=function(){return this.filter(zt)},Ze.prototype.find=function(e){return this.filter(e).head()},Ze.prototype.findLast=function(e){return this.reverse().find(e)},Ze.prototype.invokeMap=Xe(function(e,t){return typeof e=="function"?new Ze(this):this.map(function(o){return va(o,e,t)})}),Ze.prototype.reject=function(e){return this.filter(lr(Oe(e)))},Ze.prototype.slice=function(e,t){e=Ve(e);var o=this;return o.__filtered__&&(e>0||t<0)?new Ze(o):(e<0?o=o.takeRight(-e):e&&(o=o.drop(e)),t!==a&&(t=Ve(t),o=t<0?o.dropRight(-t):o.take(t-e)),o)},Ze.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Ze.prototype.toArray=function(){return this.take(ie)},hn(Ze.prototype,function(e,t){var o=/^(?:filter|find|map|reject)|While$/.test(t),A=/^(?:head|last)$/.test(t),N=M[A?"take"+(t=="last"?"Right":""):t],L=A||/^find/.test(t);N&&(M.prototype[t]=function(){var G=this.__wrapped__,z=A?[1]:arguments,Y=G instanceof Ze,ce=z[0],pe=Y||ze(G),me=function(Je){var Qe=N.apply(M,Nn([Je],z));return A&&Re?Qe[0]:Qe};pe&&o&&typeof ce=="function"&&ce.length!=1&&(Y=pe=!1);var Re=this.__chain__,Le=!!this.__actions__.length,je=L&&!Re,Ye=Y&&!Le;if(!L&&pe){G=Ye?G:new Ze(this);var $e=e.apply(G,z);return $e.__actions__.push({func:rr,args:[me],thisArg:a}),new nn($e,Re)}return je&&Ye?e.apply(this,z):($e=this.thru(me),je?A?$e.value()[0]:$e.value():$e)})}),en(["pop","push","shift","sort","splice","unshift"],function(e){var t=ba[e],o=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",A=/^(?:pop|shift)$/.test(e);M.prototype[e]=function(){var N=arguments;if(A&&!this.__chain__){var L=this.value();return t.apply(ze(L)?L:[],N)}return this[o](function(G){return t.apply(ze(G)?G:[],N)})}}),hn(Ze.prototype,function(e,t){var o=M[t];if(o){var A=o.name+"";ct.call(ea,A)||(ea[A]=[]),ea[A].push({name:t,func:o})}}),ea[Ja(a,C).name]=[{name:"wrapper",func:a}],Ze.prototype.clone=Su,Ze.prototype.reverse=yu,Ze.prototype.value=Du,M.prototype.at=Yp,M.prototype.chain=Xp,M.prototype.commit=Jp,M.prototype.next=Zp,M.prototype.plant=ed,M.prototype.reverse=td,M.prototype.toJSON=M.prototype.valueOf=M.prototype.value=nd,M.prototype.first=M.prototype.head,ca&&(M.prototype[ca]=Qp),M},Pa=Jl();_t._=Pa,u=function(){return Pa}.call(m,r,m,E),u!==a&&(E.exports=u)}).call(this)},1226:()=>{(function(E){var m="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},u={bash:r,environment:{pattern:RegExp("\\$"+m),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+m),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};E.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+m),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:u},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:u},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:u.entity}}],environment:{pattern:RegExp("\\$?"+m),alias:"constant"},variable:u.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=E.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],n=u.variable[1].inside,l=0;l<a.length;l++)n[a[l]]=E.languages.bash[a[l]];E.languages.sh=E.languages.bash,E.languages.shell=E.languages.bash})(Prism)},6067:()=>{(function(E){E.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var m={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(m).forEach(function(r){var u=m[r],a=[];/^\w+$/.test(r)||a.push(/\w+/.exec(r)[0]),r==="diff"&&a.push("bold"),E.languages.diff[r]={pattern:RegExp("^(?:["+u+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:a,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(r)[0]}}}}),Object.defineProperty(E.languages.diff,"PREFIXES",{value:m})})(Prism)},4588:()=>{(function(E){function m(s){return RegExp("(^(?:"+s+"):[ 	]*(?![ 	]))[^]+","i")}E.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:E.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:m(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:E.languages.csp},{pattern:m(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:E.languages.hpkp},{pattern:m(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:E.languages.hsts},{pattern:m(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var r=E.languages,u={"application/javascript":r.javascript,"application/json":r.json||r.javascript,"application/xml":r.xml,"text/xml":r.xml,"text/html":r.html,"text/css":r.css,"text/plain":r.plain},a={"application/json":!0,"application/xml":!0};function n(s){var p=s.replace(/^[a-z]+\//,""),S="\\w+/(?:[\\w.-]+\\+)+"+p+"(?![+\\w.-])";return"(?:"+s+"|"+S+")"}var l;for(var h in u)if(u[h]){l=l||{};var f=a[h]?n(h):h;l[h.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+f+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:u[h]}}l&&E.languages.insertBefore("http","header",l)})(Prism)},2222:()=>{Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json},9661:()=>{Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},4209:()=>{(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;if(!Prism.plugins.toolbar){console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");return}function E(n,l){n.addEventListener("click",function(){r(l)})}function m(n){var l=document.createElement("textarea");l.value=n.getText(),l.style.top="0",l.style.left="0",l.style.position="fixed",document.body.appendChild(l),l.focus(),l.select();try{var h=document.execCommand("copy");setTimeout(function(){h?n.success():n.error()},1)}catch(f){setTimeout(function(){n.error(f)},1)}document.body.removeChild(l)}function r(n){navigator.clipboard?navigator.clipboard.writeText(n.getText()).then(n.success,function(){m(n)}):m(n)}function u(n){window.getSelection().selectAllChildren(n)}function a(n){var l={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3},h="data-prismjs-";for(var f in l){for(var s=h+f,p=n;p&&!p.hasAttribute(s);)p=p.parentElement;p&&(l[f]=p.getAttribute(s))}return l}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(n){var l=n.element,h=a(l),f=document.createElement("button");f.className="copy-to-clipboard-button",f.setAttribute("type","button");var s=document.createElement("span");return f.appendChild(s),S("copy"),E(f,{getText:function(){return l.textContent},success:function(){S("copy-success"),p()},error:function(){S("copy-error"),setTimeout(function(){u(l)},1),p()}}),f;function p(){setTimeout(function(){S("copy")},h["copy-timeout"])}function S(i){s.textContent=h[i],f.setAttribute("data-copy-state",i)}})})()},55:()=>{(function(){if(typeof Prism!="undefined"){var E=/^diff-([\w-]+)/i,m=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,r=RegExp(/(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n]))/.source.replace(/__/g,function(){return m.source}),"gi"),u=!1;Prism.hooks.add("before-sanity-check",function(a){var n=a.language;E.test(n)&&!a.grammar&&(a.grammar=Prism.languages[n]=Prism.languages.diff)}),Prism.hooks.add("before-tokenize",function(a){!u&&!Prism.languages.diff&&!Prism.plugins.autoloader&&(u=!0,console.warn("Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js).Make sure the language definition is loaded or use Prism's Autoloader plugin."));var n=a.language;E.test(n)&&!Prism.languages[n]&&(Prism.languages[n]=Prism.languages.diff)}),Prism.hooks.add("wrap",function(a){var n,l;if(a.language!=="diff"){var h=E.exec(a.language);if(!h)return;n=h[1],l=Prism.languages[n]}var f=Prism.languages.diff&&Prism.languages.diff.PREFIXES;if(f&&a.type in f){var s=a.content.replace(m,""),p=s.replace(/&lt;/g,"<").replace(/&amp;/g,"&"),S=p.replace(/(^|[\r\n])./g,"$1"),i;l?i=Prism.highlight(S,l,n):i=Prism.util.encode(S);var g=new Prism.Token("prefix",f[a.type],[/\w+/.exec(a.type)[0]]),d=Prism.Token.stringify(g,a.language),c=[],y;for(r.lastIndex=0;y=r.exec(i);)c.push(d+y[0]);/(?:^|[\r\n]).$/.test(p)&&c.push(d),a.content=c.join(""),l&&a.classes.push("language-"+n)}})}})()},7657:()=>{(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;var E=[],m={},r=function(){};Prism.plugins.toolbar={};var u=Prism.plugins.toolbar.registerButton=function(l,h){var f;if(typeof h=="function"?f=h:f=function(s){var p;return typeof h.onClick=="function"?(p=document.createElement("button"),p.type="button",p.addEventListener("click",function(){h.onClick.call(this,s)})):typeof h.url=="string"?(p=document.createElement("a"),p.href=h.url):p=document.createElement("span"),h.className&&p.classList.add(h.className),p.textContent=h.text,p},l in m){console.warn('There is a button with the key "'+l+'" registered already.');return}E.push(m[l]=f)};function a(l){for(;l;){var h=l.getAttribute("data-toolbar-order");if(h!=null)return h=h.trim(),h.length?h.split(/\s*,\s*/g):[];l=l.parentElement}}var n=Prism.plugins.toolbar.hook=function(l){var h=l.element.parentNode;if(!(!h||!/pre/i.test(h.nodeName))&&!h.parentNode.classList.contains("code-toolbar")){var f=document.createElement("div");f.classList.add("code-toolbar"),h.parentNode.insertBefore(f,h),f.appendChild(h);var s=document.createElement("div");s.classList.add("toolbar");var p=E,S=a(l.element);S&&(p=S.map(function(i){return m[i]||r})),p.forEach(function(i){var g=i(l);if(g){var d=document.createElement("div");d.classList.add("toolbar-item"),d.appendChild(g),s.appendChild(d)}}),f.appendChild(s)}};u("label",function(l){var h=l.element.parentNode;if(!(!h||!/pre/i.test(h.nodeName))&&h.hasAttribute("data-label")){var f,s,p=h.getAttribute("data-label");try{s=document.querySelector("template#"+p)}catch(S){}return s?f=s.content:(h.hasAttribute("data-url")?(f=document.createElement("a"),f.href=h.getAttribute("data-url")):f=document.createElement("span"),f.textContent=p),f}}),Prism.hooks.add("complete",n)})()},5220:(E,m,r)=>{var u=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(n){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,h=0,f={},s={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function D(R){return R instanceof p?new p(R.type,D(R.content),R.alias):Array.isArray(R)?R.map(D):R.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(D){return Object.prototype.toString.call(D).slice(8,-1)},objId:function(D){return D.__id||Object.defineProperty(D,"__id",{value:++h}),D.__id},clone:function D(R,x){x=x||{};var _,B;switch(s.util.type(R)){case"Object":if(B=s.util.objId(R),x[B])return x[B];_={},x[B]=_;for(var w in R)R.hasOwnProperty(w)&&(_[w]=D(R[w],x));return _;case"Array":return B=s.util.objId(R),x[B]?x[B]:(_=[],x[B]=_,R.forEach(function(P,T){_[T]=D(P,x)}),_);default:return R}},getLanguage:function(D){for(;D;){var R=l.exec(D.className);if(R)return R[1].toLowerCase();D=D.parentElement}return"none"},setLanguage:function(D,R){D.className=D.className.replace(RegExp(l,"gi"),""),D.classList.add("language-"+R)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(_){var D=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(_.stack)||[])[1];if(D){var R=document.getElementsByTagName("script");for(var x in R)if(R[x].src==D)return R[x]}return null}},isActive:function(D,R,x){for(var _="no-"+R;D;){var B=D.classList;if(B.contains(R))return!0;if(B.contains(_))return!1;D=D.parentElement}return!!x}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(D,R){var x=s.util.clone(s.languages[D]);for(var _ in R)x[_]=R[_];return x},insertBefore:function(D,R,x,_){_=_||s.languages;var B=_[D],w={};for(var P in B)if(B.hasOwnProperty(P)){if(P==R)for(var T in x)x.hasOwnProperty(T)&&(w[T]=x[T]);x.hasOwnProperty(P)||(w[P]=B[P])}var b=_[D];return _[D]=w,s.languages.DFS(s.languages,function(F,j){j===b&&F!=D&&(this[F]=w)}),w},DFS:function D(R,x,_,B){B=B||{};var w=s.util.objId;for(var P in R)if(R.hasOwnProperty(P)){x.call(R,P,R[P],_||P);var T=R[P],b=s.util.type(T);b==="Object"&&!B[w(T)]?(B[w(T)]=!0,D(T,x,null,B)):b==="Array"&&!B[w(T)]&&(B[w(T)]=!0,D(T,x,P,B))}}},plugins:{},highlightAll:function(D,R){s.highlightAllUnder(document,D,R)},highlightAllUnder:function(D,R,x){var _={callback:x,container:D,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",_),_.elements=Array.prototype.slice.apply(_.container.querySelectorAll(_.selector)),s.hooks.run("before-all-elements-highlight",_);for(var B=0,w;w=_.elements[B++];)s.highlightElement(w,R===!0,_.callback)},highlightElement:function(D,R,x){var _=s.util.getLanguage(D),B=s.languages[_];s.util.setLanguage(D,_);var w=D.parentElement;w&&w.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(w,_);var P=D.textContent,T={element:D,language:_,grammar:B,code:P};function b(j){T.highlightedCode=j,s.hooks.run("before-insert",T),T.element.innerHTML=T.highlightedCode,s.hooks.run("after-highlight",T),s.hooks.run("complete",T),x&&x.call(T.element)}if(s.hooks.run("before-sanity-check",T),w=T.element.parentElement,w&&w.nodeName.toLowerCase()==="pre"&&!w.hasAttribute("tabindex")&&w.setAttribute("tabindex","0"),!T.code){s.hooks.run("complete",T),x&&x.call(T.element);return}if(s.hooks.run("before-highlight",T),!T.grammar){b(s.util.encode(T.code));return}if(R&&n.Worker){var F=new Worker(s.filename);F.onmessage=function(j){b(j.data)},F.postMessage(JSON.stringify({language:T.language,code:T.code,immediateClose:!0}))}else b(s.highlight(T.code,T.grammar,T.language))},highlight:function(D,R,x){var _={code:D,grammar:R,language:x};if(s.hooks.run("before-tokenize",_),!_.grammar)throw new Error('The language "'+_.language+'" has no grammar.');return _.tokens=s.tokenize(_.code,_.grammar),s.hooks.run("after-tokenize",_),p.stringify(s.util.encode(_.tokens),_.language)},tokenize:function(D,R){var x=R.rest;if(x){for(var _ in x)R[_]=x[_];delete R.rest}var B=new g;return d(B,B.head,D),i(D,B,R,B.head,0),y(B)},hooks:{all:{},add:function(D,R){var x=s.hooks.all;x[D]=x[D]||[],x[D].push(R)},run:function(D,R){var x=s.hooks.all[D];if(!(!x||!x.length))for(var _=0,B;B=x[_++];)B(R)}},Token:p};n.Prism=s;function p(D,R,x,_){this.type=D,this.content=R,this.alias=x,this.length=(_||"").length|0}p.stringify=function D(R,x){if(typeof R=="string")return R;if(Array.isArray(R)){var _="";return R.forEach(function(b){_+=D(b,x)}),_}var B={type:R.type,content:D(R.content,x),tag:"span",classes:["token",R.type],attributes:{},language:x},w=R.alias;w&&(Array.isArray(w)?Array.prototype.push.apply(B.classes,w):B.classes.push(w)),s.hooks.run("wrap",B);var P="";for(var T in B.attributes)P+=" "+T+'="'+(B.attributes[T]||"").replace(/"/g,"&quot;")+'"';return"<"+B.tag+' class="'+B.classes.join(" ")+'"'+P+">"+B.content+"</"+B.tag+">"};function S(D,R,x,_){D.lastIndex=R;var B=D.exec(x);if(B&&_&&B[1]){var w=B[1].length;B.index+=w,B[0]=B[0].slice(w)}return B}function i(D,R,x,_,B,w){for(var P in x)if(!(!x.hasOwnProperty(P)||!x[P])){var T=x[P];T=Array.isArray(T)?T:[T];for(var b=0;b<T.length;++b){if(w&&w.cause==P+","+b)return;var F=T[b],j=F.inside,K=!!F.lookbehind,W=!!F.greedy,$=F.alias;if(W&&!F.pattern.global){var k=F.pattern.toString().match(/[imsuy]*$/)[0];F.pattern=RegExp(F.pattern.source,k+"g")}for(var H=F.pattern||F,U=_.next,Q=B;U!==R.tail&&!(w&&Q>=w.reach);Q+=U.value.length,U=U.next){var ne=U.value;if(R.length>D.length)return;if(!(ne instanceof p)){var ie=1,J;if(W){if(J=S(H,Q,D,K),!J||J.index>=D.length)break;var Be=J.index,ge=J.index+J[0].length,ye=Q;for(ye+=U.value.length;Be>=ye;)U=U.next,ye+=U.value.length;if(ye-=U.value.length,Q=ye,U.value instanceof p)continue;for(var Ce=U;Ce!==R.tail&&(ye<ge||typeof Ce.value=="string");Ce=Ce.next)ie++,ye+=Ce.value.length;ie--,ne=D.slice(Q,ye),J.index-=Q}else if(J=S(H,0,ne,K),!J)continue;var Be=J.index,it=J[0],yt=ne.slice(0,Be),Dt=ne.slice(Be+it.length),Pt=Q+ne.length;w&&Pt>w.reach&&(w.reach=Pt);var de=U.prev;yt&&(de=d(R,de,yt),Q+=yt.length),c(R,de,ie);var Ne=new p(P,j?s.tokenize(it,j):it,$,it);if(U=d(R,de,Ne),Dt&&d(R,U,Dt),ie>1){var Ie={cause:P+","+b,reach:Pt};i(D,R,x,U.prev,Q,Ie),w&&Ie.reach>w.reach&&(w.reach=Ie.reach)}}}}}}function g(){var D={value:null,prev:null,next:null},R={value:null,prev:D,next:null};D.next=R,this.head=D,this.tail=R,this.length=0}function d(D,R,x){var _=R.next,B={value:x,prev:R,next:_};return R.next=B,_.prev=B,D.length++,B}function c(D,R,x){for(var _=R.next,B=0;B<x&&_!==D.tail;B++)_=_.next;R.next=_,_.prev=R,D.length-=B}function y(D){for(var R=[],x=D.head.next;x!==D.tail;)R.push(x.value),x=x.next;return R}if(!n.document)return n.addEventListener&&(s.disableWorkerMessageHandler||n.addEventListener("message",function(D){var R=JSON.parse(D.data),x=R.language,_=R.code,B=R.immediateClose;n.postMessage(s.highlight(_,s.languages[x],x)),B&&n.close()},!1)),s;var v=s.util.currentScript();v&&(s.filename=v.src,v.hasAttribute("data-manual")&&(s.manual=!0));function I(){s.manual||s.highlightAll()}if(!s.manual){var C=document.readyState;C==="loading"||C==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",I):window.requestAnimationFrame?window.requestAnimationFrame(I):window.setTimeout(I,16)}return s}(u);E.exports&&(E.exports=a),typeof r.g!="undefined"&&(r.g.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(l,h){var f={};f["language-"+h]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[h]},f.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:f}};s["language-"+h]={pattern:/[\s\S]+/,inside:a.languages[h]};var p={};p[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:s},a.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(n,l){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[l,"language-"+l],inside:a.languages[l]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(n){var l=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+l.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+l.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+l.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+l.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:l,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var h=n.languages.markup;h&&(h.tag.addInlined("style","css"),h.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var n="Loading\u2026",l=function(v,I){return"\u2716 Error "+v+" while fetching file: "+I},h="\u2716 Error: File does not exist or is empty",f={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",p="loading",S="loaded",i="failed",g="pre[data-src]:not(["+s+'="'+S+'"]):not(['+s+'="'+p+'"])';function d(v,I,C){var D=new XMLHttpRequest;D.open("GET",v,!0),D.onreadystatechange=function(){D.readyState==4&&(D.status<400&&D.responseText?I(D.responseText):D.status>=400?C(l(D.status,D.statusText)):C(h))},D.send(null)}function c(v){var I=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(I){var C=Number(I[1]),D=I[2],R=I[3];return D?R?[C,Number(R)]:[C,void 0]:[C,C]}}a.hooks.add("before-highlightall",function(v){v.selector+=", "+g}),a.hooks.add("before-sanity-check",function(v){var I=v.element;if(I.matches(g)){v.code="",I.setAttribute(s,p);var C=I.appendChild(document.createElement("CODE"));C.textContent=n;var D=I.getAttribute("data-src"),R=v.language;if(R==="none"){var x=(/\.(\w+)$/.exec(D)||[,"none"])[1];R=f[x]||x}a.util.setLanguage(C,R),a.util.setLanguage(I,R);var _=a.plugins.autoloader;_&&_.loadLanguages(R),d(D,function(B){I.setAttribute(s,S);var w=c(I.getAttribute("data-range"));if(w){var P=B.split(/\r\n?|\n/g),T=w[0],b=w[1]==null?P.length:w[1];T<0&&(T+=P.length),T=Math.max(0,Math.min(T-1,P.length)),b<0&&(b+=P.length),b=Math.max(0,Math.min(b,P.length)),B=P.slice(T,b).join(`
`),I.hasAttribute("data-start")||I.setAttribute("data-start",String(T+1))}C.textContent=B,a.highlightElement(C)},function(B){I.setAttribute(s,i),C.textContent=B})}}),a.plugins.fileHighlight={highlight:function(I){for(var C=(I||document).querySelectorAll(g),D=0,R;R=C[D++];)a.highlightElement(R)}};var y=!1;a.fileHighlight=function(){y||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),y=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()},4636:(E,m,r)=>{const u=Symbol("SemVer ANY");class a{static get ANY(){return u}constructor(g,d){if(d=n(d),g instanceof a){if(g.loose===!!d.loose)return g;g=g.value}g=g.trim().split(/\s+/).join(" "),s("comparator",g,d),this.options=d,this.loose=!!d.loose,this.parse(g),this.semver===u?this.value="":this.value=this.operator+this.semver.version,s("comp",this)}parse(g){const d=this.options.loose?l[h.COMPARATORLOOSE]:l[h.COMPARATOR],c=g.match(d);if(!c)throw new TypeError(`Invalid comparator: ${g}`);this.operator=c[1]!==void 0?c[1]:"",this.operator==="="&&(this.operator=""),c[2]?this.semver=new p(c[2],this.options.loose):this.semver=u}toString(){return this.value}test(g){if(s("Comparator.test",g,this.options.loose),this.semver===u||g===u)return!0;if(typeof g=="string")try{g=new p(g,this.options)}catch(d){return!1}return f(g,this.operator,this.semver,this.options)}intersects(g,d){if(!(g instanceof a))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new S(g.value,d).test(this.value):g.operator===""?g.value===""?!0:new S(this.value,d).test(g.semver):(d=n(d),d.includePrerelease&&(this.value==="<0.0.0-0"||g.value==="<0.0.0-0")||!d.includePrerelease&&(this.value.startsWith("<0.0.0")||g.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&g.operator.startsWith(">")||this.operator.startsWith("<")&&g.operator.startsWith("<")||this.semver.version===g.semver.version&&this.operator.includes("=")&&g.operator.includes("=")||f(this.semver,"<",g.semver,d)&&this.operator.startsWith(">")&&g.operator.startsWith("<")||f(this.semver,">",g.semver,d)&&this.operator.startsWith("<")&&g.operator.startsWith(">")))}}E.exports=a;const n=r(591),{safeRe:l,t:h}=r(586),f=r(1851),s=r(8908),p=r(1344),S=r(1283)},1283:(E,m,r)=>{const u=/\s+/g;class a{constructor(k,H){if(H=h(H),k instanceof a)return k.loose===!!H.loose&&k.includePrerelease===!!H.includePrerelease?k:new a(k.raw,H);if(k instanceof f)return this.raw=k.value,this.set=[[k]],this.formatted=void 0,this;if(this.options=H,this.loose=!!H.loose,this.includePrerelease=!!H.includePrerelease,this.raw=k.trim().replace(u," "),this.set=this.raw.split("||").map(U=>this.parseRange(U.trim())).filter(U=>U.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const U=this.set[0];if(this.set=this.set.filter(Q=>!I(Q[0])),this.set.length===0)this.set=[U];else if(this.set.length>1){for(const Q of this.set)if(Q.length===1&&C(Q[0])){this.set=[Q];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let k=0;k<this.set.length;k++){k>0&&(this.formatted+="||");const H=this.set[k];for(let U=0;U<H.length;U++)U>0&&(this.formatted+=" "),this.formatted+=H[U].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(k){const U=((this.options.includePrerelease&&y)|(this.options.loose&&v))+":"+k,Q=l.get(U);if(Q)return Q;const ne=this.options.loose,ie=ne?S[i.HYPHENRANGELOOSE]:S[i.HYPHENRANGE];k=k.replace(ie,K(this.options.includePrerelease)),s("hyphen replace",k),k=k.replace(S[i.COMPARATORTRIM],g),s("comparator trim",k),k=k.replace(S[i.TILDETRIM],d),s("tilde trim",k),k=k.replace(S[i.CARETTRIM],c),s("caret trim",k);let J=k.split(" ").map(Be=>R(Be,this.options)).join(" ").split(/\s+/).map(Be=>j(Be,this.options));ne&&(J=J.filter(Be=>(s("loose invalid filter",Be,this.options),!!Be.match(S[i.COMPARATORLOOSE])))),s("range list",J);const ge=new Map,ye=J.map(Be=>new f(Be,this.options));for(const Be of ye){if(I(Be))return[Be];ge.set(Be.value,Be)}ge.size>1&&ge.has("")&&ge.delete("");const Ce=[...ge.values()];return l.set(U,Ce),Ce}intersects(k,H){if(!(k instanceof a))throw new TypeError("a Range is required");return this.set.some(U=>D(U,H)&&k.set.some(Q=>D(Q,H)&&U.every(ne=>Q.every(ie=>ne.intersects(ie,H)))))}test(k){if(!k)return!1;if(typeof k=="string")try{k=new p(k,this.options)}catch(H){return!1}for(let H=0;H<this.set.length;H++)if(W(this.set[H],k,this.options))return!0;return!1}}E.exports=a;const n=r(4414),l=new n,h=r(591),f=r(4636),s=r(8908),p=r(1344),{safeRe:S,t:i,comparatorTrimReplace:g,tildeTrimReplace:d,caretTrimReplace:c}=r(586),{FLAG_INCLUDE_PRERELEASE:y,FLAG_LOOSE:v}=r(3094),I=$=>$.value==="<0.0.0-0",C=$=>$.value==="",D=($,k)=>{let H=!0;const U=$.slice();let Q=U.pop();for(;H&&U.length;)H=U.every(ne=>Q.intersects(ne,k)),Q=U.pop();return H},R=($,k)=>(s("comp",$,k),$=w($,k),s("caret",$),$=_($,k),s("tildes",$),$=T($,k),s("xrange",$),$=F($,k),s("stars",$),$),x=$=>!$||$.toLowerCase()==="x"||$==="*",_=($,k)=>$.trim().split(/\s+/).map(H=>B(H,k)).join(" "),B=($,k)=>{const H=k.loose?S[i.TILDELOOSE]:S[i.TILDE];return $.replace(H,(U,Q,ne,ie,J)=>{s("tilde",$,U,Q,ne,ie,J);let ge;return x(Q)?ge="":x(ne)?ge=`>=${Q}.0.0 <${+Q+1}.0.0-0`:x(ie)?ge=`>=${Q}.${ne}.0 <${Q}.${+ne+1}.0-0`:J?(s("replaceTilde pr",J),ge=`>=${Q}.${ne}.${ie}-${J} <${Q}.${+ne+1}.0-0`):ge=`>=${Q}.${ne}.${ie} <${Q}.${+ne+1}.0-0`,s("tilde return",ge),ge})},w=($,k)=>$.trim().split(/\s+/).map(H=>P(H,k)).join(" "),P=($,k)=>{s("caret",$,k);const H=k.loose?S[i.CARETLOOSE]:S[i.CARET],U=k.includePrerelease?"-0":"";return $.replace(H,(Q,ne,ie,J,ge)=>{s("caret",$,Q,ne,ie,J,ge);let ye;return x(ne)?ye="":x(ie)?ye=`>=${ne}.0.0${U} <${+ne+1}.0.0-0`:x(J)?ne==="0"?ye=`>=${ne}.${ie}.0${U} <${ne}.${+ie+1}.0-0`:ye=`>=${ne}.${ie}.0${U} <${+ne+1}.0.0-0`:ge?(s("replaceCaret pr",ge),ne==="0"?ie==="0"?ye=`>=${ne}.${ie}.${J}-${ge} <${ne}.${ie}.${+J+1}-0`:ye=`>=${ne}.${ie}.${J}-${ge} <${ne}.${+ie+1}.0-0`:ye=`>=${ne}.${ie}.${J}-${ge} <${+ne+1}.0.0-0`):(s("no pr"),ne==="0"?ie==="0"?ye=`>=${ne}.${ie}.${J}${U} <${ne}.${ie}.${+J+1}-0`:ye=`>=${ne}.${ie}.${J}${U} <${ne}.${+ie+1}.0-0`:ye=`>=${ne}.${ie}.${J} <${+ne+1}.0.0-0`),s("caret return",ye),ye})},T=($,k)=>(s("replaceXRanges",$,k),$.split(/\s+/).map(H=>b(H,k)).join(" ")),b=($,k)=>{$=$.trim();const H=k.loose?S[i.XRANGELOOSE]:S[i.XRANGE];return $.replace(H,(U,Q,ne,ie,J,ge)=>{s("xRange",$,U,Q,ne,ie,J,ge);const ye=x(ne),Ce=ye||x(ie),Be=Ce||x(J),it=Be;return Q==="="&&it&&(Q=""),ge=k.includePrerelease?"-0":"",ye?Q===">"||Q==="<"?U="<0.0.0-0":U="*":Q&&it?(Ce&&(ie=0),J=0,Q===">"?(Q=">=",Ce?(ne=+ne+1,ie=0,J=0):(ie=+ie+1,J=0)):Q==="<="&&(Q="<",Ce?ne=+ne+1:ie=+ie+1),Q==="<"&&(ge="-0"),U=`${Q+ne}.${ie}.${J}${ge}`):Ce?U=`>=${ne}.0.0${ge} <${+ne+1}.0.0-0`:Be&&(U=`>=${ne}.${ie}.0${ge} <${ne}.${+ie+1}.0-0`),s("xRange return",U),U})},F=($,k)=>(s("replaceStars",$,k),$.trim().replace(S[i.STAR],"")),j=($,k)=>(s("replaceGTE0",$,k),$.trim().replace(S[k.includePrerelease?i.GTE0PRE:i.GTE0],"")),K=$=>(k,H,U,Q,ne,ie,J,ge,ye,Ce,Be,it)=>(x(U)?H="":x(Q)?H=`>=${U}.0.0${$?"-0":""}`:x(ne)?H=`>=${U}.${Q}.0${$?"-0":""}`:ie?H=`>=${H}`:H=`>=${H}${$?"-0":""}`,x(ye)?ge="":x(Ce)?ge=`<${+ye+1}.0.0-0`:x(Be)?ge=`<${ye}.${+Ce+1}.0-0`:it?ge=`<=${ye}.${Ce}.${Be}-${it}`:$?ge=`<${ye}.${Ce}.${+Be+1}-0`:ge=`<=${ge}`,`${H} ${ge}`.trim()),W=($,k,H)=>{for(let U=0;U<$.length;U++)if(!$[U].test(k))return!1;if(k.prerelease.length&&!H.includePrerelease){for(let U=0;U<$.length;U++)if(s($[U].semver),$[U].semver!==f.ANY&&$[U].semver.prerelease.length>0){const Q=$[U].semver;if(Q.major===k.major&&Q.minor===k.minor&&Q.patch===k.patch)return!0}return!1}return!0}},1344:(E,m,r)=>{const u=r(8908),{MAX_LENGTH:a,MAX_SAFE_INTEGER:n}=r(3094),{safeRe:l,t:h}=r(586),f=r(591),{compareIdentifiers:s}=r(8855);class p{constructor(i,g){if(g=f(g),i instanceof p){if(i.loose===!!g.loose&&i.includePrerelease===!!g.includePrerelease)return i;i=i.version}else if(typeof i!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof i}".`);if(i.length>a)throw new TypeError(`version is longer than ${a} characters`);u("SemVer",i,g),this.options=g,this.loose=!!g.loose,this.includePrerelease=!!g.includePrerelease;const d=i.trim().match(g.loose?l[h.LOOSE]:l[h.FULL]);if(!d)throw new TypeError(`Invalid Version: ${i}`);if(this.raw=i,this.major=+d[1],this.minor=+d[2],this.patch=+d[3],this.major>n||this.major<0)throw new TypeError("Invalid major version");if(this.minor>n||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>n||this.patch<0)throw new TypeError("Invalid patch version");d[4]?this.prerelease=d[4].split(".").map(c=>{if(/^[0-9]+$/.test(c)){const y=+c;if(y>=0&&y<n)return y}return c}):this.prerelease=[],this.build=d[5]?d[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(i){if(u("SemVer.compare",this.version,this.options,i),!(i instanceof p)){if(typeof i=="string"&&i===this.version)return 0;i=new p(i,this.options)}return i.version===this.version?0:this.compareMain(i)||this.comparePre(i)}compareMain(i){return i instanceof p||(i=new p(i,this.options)),s(this.major,i.major)||s(this.minor,i.minor)||s(this.patch,i.patch)}comparePre(i){if(i instanceof p||(i=new p(i,this.options)),this.prerelease.length&&!i.prerelease.length)return-1;if(!this.prerelease.length&&i.prerelease.length)return 1;if(!this.prerelease.length&&!i.prerelease.length)return 0;let g=0;do{const d=this.prerelease[g],c=i.prerelease[g];if(u("prerelease compare",g,d,c),d===void 0&&c===void 0)return 0;if(c===void 0)return 1;if(d===void 0)return-1;if(d===c)continue;return s(d,c)}while(++g)}compareBuild(i){i instanceof p||(i=new p(i,this.options));let g=0;do{const d=this.build[g],c=i.build[g];if(u("build compare",g,d,c),d===void 0&&c===void 0)return 0;if(c===void 0)return 1;if(d===void 0)return-1;if(d===c)continue;return s(d,c)}while(++g)}inc(i,g,d){switch(i){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",g,d);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",g,d);break;case"prepatch":this.prerelease.length=0,this.inc("patch",g,d),this.inc("pre",g,d);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",g,d),this.inc("pre",g,d);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const c=Number(d)?1:0;if(!g&&d===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[c];else{let y=this.prerelease.length;for(;--y>=0;)typeof this.prerelease[y]=="number"&&(this.prerelease[y]++,y=-2);if(y===-1){if(g===this.prerelease.join(".")&&d===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(c)}}if(g){let y=[g,c];d===!1&&(y=[g]),s(this.prerelease[0],g)===0?isNaN(this.prerelease[1])&&(this.prerelease=y):this.prerelease=y}break}default:throw new Error(`invalid increment argument: ${i}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}E.exports=p},4626:(E,m,r)=>{const u=r(1756),a=(n,l)=>{const h=u(n.trim().replace(/^[=v]+/,""),l);return h?h.version:null};E.exports=a},1851:(E,m,r)=>{const u=r(1765),a=r(5811),n=r(7272),l=r(7957),h=r(2767),f=r(1708),s=(p,S,i,g)=>{switch(S){case"===":return typeof p=="object"&&(p=p.version),typeof i=="object"&&(i=i.version),p===i;case"!==":return typeof p=="object"&&(p=p.version),typeof i=="object"&&(i=i.version),p!==i;case"":case"=":case"==":return u(p,i,g);case"!=":return a(p,i,g);case">":return n(p,i,g);case">=":return l(p,i,g);case"<":return h(p,i,g);case"<=":return f(p,i,g);default:throw new TypeError(`Invalid operator: ${S}`)}};E.exports=s},1102:(E,m,r)=>{const u=r(1344),a=r(1756),{safeRe:n,t:l}=r(586),h=(f,s)=>{if(f instanceof u)return f;if(typeof f=="number"&&(f=String(f)),typeof f!="string")return null;s=s||{};let p=null;if(!s.rtl)p=f.match(s.includePrerelease?n[l.COERCEFULL]:n[l.COERCE]);else{const y=s.includePrerelease?n[l.COERCERTLFULL]:n[l.COERCERTL];let v;for(;(v=y.exec(f))&&(!p||p.index+p[0].length!==f.length);)(!p||v.index+v[0].length!==p.index+p[0].length)&&(p=v),y.lastIndex=v.index+v[1].length+v[2].length;y.lastIndex=-1}if(p===null)return null;const S=p[2],i=p[3]||"0",g=p[4]||"0",d=s.includePrerelease&&p[5]?`-${p[5]}`:"",c=s.includePrerelease&&p[6]?`+${p[6]}`:"";return a(`${S}.${i}.${g}${d}${c}`,s)};E.exports=h},4761:(E,m,r)=>{const u=r(1344),a=(n,l,h)=>{const f=new u(n,h),s=new u(l,h);return f.compare(s)||f.compareBuild(s)};E.exports=a},8183:(E,m,r)=>{const u=r(7852),a=(n,l)=>u(n,l,!0);E.exports=a},7852:(E,m,r)=>{const u=r(1344),a=(n,l,h)=>new u(n,h).compare(new u(l,h));E.exports=a},8652:(E,m,r)=>{const u=r(1756),a=(n,l)=>{const h=u(n,null,!0),f=u(l,null,!0),s=h.compare(f);if(s===0)return null;const p=s>0,S=p?h:f,i=p?f:h,g=!!S.prerelease.length;if(!!i.prerelease.length&&!g)return!i.patch&&!i.minor?"major":S.patch?"patch":S.minor?"minor":"major";const c=g?"pre":"";return h.major!==f.major?c+"major":h.minor!==f.minor?c+"minor":h.patch!==f.patch?c+"patch":"prerelease"};E.exports=a},1765:(E,m,r)=>{const u=r(7852),a=(n,l,h)=>u(n,l,h)===0;E.exports=a},7272:(E,m,r)=>{const u=r(7852),a=(n,l,h)=>u(n,l,h)>0;E.exports=a},7957:(E,m,r)=>{const u=r(7852),a=(n,l,h)=>u(n,l,h)>=0;E.exports=a},6939:(E,m,r)=>{const u=r(1344),a=(n,l,h,f,s)=>{typeof h=="string"&&(s=f,f=h,h=void 0);try{return new u(n instanceof u?n.version:n,h).inc(l,f,s).version}catch(p){return null}};E.exports=a},2767:(E,m,r)=>{const u=r(7852),a=(n,l,h)=>u(n,l,h)<0;E.exports=a},1708:(E,m,r)=>{const u=r(7852),a=(n,l,h)=>u(n,l,h)<=0;E.exports=a},5278:(E,m,r)=>{const u=r(1344),a=(n,l)=>new u(n,l).major;E.exports=a},3642:(E,m,r)=>{const u=r(1344),a=(n,l)=>new u(n,l).minor;E.exports=a},5811:(E,m,r)=>{const u=r(7852),a=(n,l,h)=>u(n,l,h)!==0;E.exports=a},1756:(E,m,r)=>{const u=r(1344),a=(n,l,h=!1)=>{if(n instanceof u)return n;try{return new u(n,l)}catch(f){if(!h)return null;throw f}};E.exports=a},281:(E,m,r)=>{const u=r(1344),a=(n,l)=>new u(n,l).patch;E.exports=a},8117:(E,m,r)=>{const u=r(1756),a=(n,l)=>{const h=u(n,l);return h&&h.prerelease.length?h.prerelease:null};E.exports=a},1830:(E,m,r)=>{const u=r(7852),a=(n,l,h)=>u(l,n,h);E.exports=a},9049:(E,m,r)=>{const u=r(4761),a=(n,l)=>n.sort((h,f)=>u(f,h,l));E.exports=a},8370:(E,m,r)=>{const u=r(1283),a=(n,l,h)=>{try{l=new u(l,h)}catch(f){return!1}return l.test(n)};E.exports=a},9779:(E,m,r)=>{const u=r(4761),a=(n,l)=>n.sort((h,f)=>u(h,f,l));E.exports=a},9173:(E,m,r)=>{const u=r(1756),a=(n,l)=>{const h=u(n,l);return h?h.version:null};E.exports=a},3497:(E,m,r)=>{const u=r(586),a=r(3094),n=r(1344),l=r(8855),h=r(1756),f=r(9173),s=r(4626),p=r(6939),S=r(8652),i=r(5278),g=r(3642),d=r(281),c=r(8117),y=r(7852),v=r(1830),I=r(8183),C=r(4761),D=r(9779),R=r(9049),x=r(7272),_=r(2767),B=r(1765),w=r(5811),P=r(7957),T=r(1708),b=r(1851),F=r(1102),j=r(4636),K=r(1283),W=r(8370),$=r(7235),k=r(3352),H=r(930),U=r(6153),Q=r(3518),ne=r(3455),ie=r(6759),J=r(2050),ge=r(5728),ye=r(3457),Ce=r(1244);E.exports={parse:h,valid:f,clean:s,inc:p,diff:S,major:i,minor:g,patch:d,prerelease:c,compare:y,rcompare:v,compareLoose:I,compareBuild:C,sort:D,rsort:R,gt:x,lt:_,eq:B,neq:w,gte:P,lte:T,cmp:b,coerce:F,Comparator:j,Range:K,satisfies:W,toComparators:$,maxSatisfying:k,minSatisfying:H,minVersion:U,validRange:Q,outside:ne,gtr:ie,ltr:J,intersects:ge,simplifyRange:ye,subset:Ce,SemVer:n,re:u.re,src:u.src,tokens:u.t,SEMVER_SPEC_VERSION:a.SEMVER_SPEC_VERSION,RELEASE_TYPES:a.RELEASE_TYPES,compareIdentifiers:l.compareIdentifiers,rcompareIdentifiers:l.rcompareIdentifiers}},3094:E=>{const m="2.0.0",u=Number.MAX_SAFE_INTEGER||9007199254740991,a=16,n=256-6,l=["major","premajor","minor","preminor","patch","prepatch","prerelease"];E.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:a,MAX_SAFE_BUILD_LENGTH:n,MAX_SAFE_INTEGER:u,RELEASE_TYPES:l,SEMVER_SPEC_VERSION:m,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},8908:E=>{const m=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...r)=>console.error("SEMVER",...r):()=>{};E.exports=m},8855:E=>{const m=/^[0-9]+$/,r=(a,n)=>{const l=m.test(a),h=m.test(n);return l&&h&&(a=+a,n=+n),a===n?0:l&&!h?-1:h&&!l?1:a<n?-1:1},u=(a,n)=>r(n,a);E.exports={compareIdentifiers:r,rcompareIdentifiers:u}},4414:E=>{class m{constructor(){this.max=1e3,this.map=new Map}get(u){const a=this.map.get(u);if(a!==void 0)return this.map.delete(u),this.map.set(u,a),a}delete(u){return this.map.delete(u)}set(u,a){if(!this.delete(u)&&a!==void 0){if(this.map.size>=this.max){const l=this.map.keys().next().value;this.delete(l)}this.map.set(u,a)}return this}}E.exports=m},591:E=>{const m=Object.freeze({loose:!0}),r=Object.freeze({}),u=a=>a?typeof a!="object"?m:a:r;E.exports=u},586:(E,m,r)=>{const{MAX_SAFE_COMPONENT_LENGTH:u,MAX_SAFE_BUILD_LENGTH:a,MAX_LENGTH:n}=r(3094),l=r(8908);m=E.exports={};const h=m.re=[],f=m.safeRe=[],s=m.src=[],p=m.t={};let S=0;const i="[a-zA-Z0-9-]",g=[["\\s",1],["\\d",n],[i,a]],d=y=>{for(const[v,I]of g)y=y.split(`${v}*`).join(`${v}{0,${I}}`).split(`${v}+`).join(`${v}{1,${I}}`);return y},c=(y,v,I)=>{const C=d(v),D=S++;l(y,D,v),p[y]=D,s[D]=v,h[D]=new RegExp(v,I?"g":void 0),f[D]=new RegExp(C,I?"g":void 0)};c("NUMERICIDENTIFIER","0|[1-9]\\d*"),c("NUMERICIDENTIFIERLOOSE","\\d+"),c("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${i}*`),c("MAINVERSION",`(${s[p.NUMERICIDENTIFIER]})\\.(${s[p.NUMERICIDENTIFIER]})\\.(${s[p.NUMERICIDENTIFIER]})`),c("MAINVERSIONLOOSE",`(${s[p.NUMERICIDENTIFIERLOOSE]})\\.(${s[p.NUMERICIDENTIFIERLOOSE]})\\.(${s[p.NUMERICIDENTIFIERLOOSE]})`),c("PRERELEASEIDENTIFIER",`(?:${s[p.NUMERICIDENTIFIER]}|${s[p.NONNUMERICIDENTIFIER]})`),c("PRERELEASEIDENTIFIERLOOSE",`(?:${s[p.NUMERICIDENTIFIERLOOSE]}|${s[p.NONNUMERICIDENTIFIER]})`),c("PRERELEASE",`(?:-(${s[p.PRERELEASEIDENTIFIER]}(?:\\.${s[p.PRERELEASEIDENTIFIER]})*))`),c("PRERELEASELOOSE",`(?:-?(${s[p.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[p.PRERELEASEIDENTIFIERLOOSE]})*))`),c("BUILDIDENTIFIER",`${i}+`),c("BUILD",`(?:\\+(${s[p.BUILDIDENTIFIER]}(?:\\.${s[p.BUILDIDENTIFIER]})*))`),c("FULLPLAIN",`v?${s[p.MAINVERSION]}${s[p.PRERELEASE]}?${s[p.BUILD]}?`),c("FULL",`^${s[p.FULLPLAIN]}$`),c("LOOSEPLAIN",`[v=\\s]*${s[p.MAINVERSIONLOOSE]}${s[p.PRERELEASELOOSE]}?${s[p.BUILD]}?`),c("LOOSE",`^${s[p.LOOSEPLAIN]}$`),c("GTLT","((?:<|>)?=?)"),c("XRANGEIDENTIFIERLOOSE",`${s[p.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),c("XRANGEIDENTIFIER",`${s[p.NUMERICIDENTIFIER]}|x|X|\\*`),c("XRANGEPLAIN",`[v=\\s]*(${s[p.XRANGEIDENTIFIER]})(?:\\.(${s[p.XRANGEIDENTIFIER]})(?:\\.(${s[p.XRANGEIDENTIFIER]})(?:${s[p.PRERELEASE]})?${s[p.BUILD]}?)?)?`),c("XRANGEPLAINLOOSE",`[v=\\s]*(${s[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[p.XRANGEIDENTIFIERLOOSE]})(?:${s[p.PRERELEASELOOSE]})?${s[p.BUILD]}?)?)?`),c("XRANGE",`^${s[p.GTLT]}\\s*${s[p.XRANGEPLAIN]}$`),c("XRANGELOOSE",`^${s[p.GTLT]}\\s*${s[p.XRANGEPLAINLOOSE]}$`),c("COERCEPLAIN",`(^|[^\\d])(\\d{1,${u}})(?:\\.(\\d{1,${u}}))?(?:\\.(\\d{1,${u}}))?`),c("COERCE",`${s[p.COERCEPLAIN]}(?:$|[^\\d])`),c("COERCEFULL",s[p.COERCEPLAIN]+`(?:${s[p.PRERELEASE]})?(?:${s[p.BUILD]})?(?:$|[^\\d])`),c("COERCERTL",s[p.COERCE],!0),c("COERCERTLFULL",s[p.COERCEFULL],!0),c("LONETILDE","(?:~>?)"),c("TILDETRIM",`(\\s*)${s[p.LONETILDE]}\\s+`,!0),m.tildeTrimReplace="$1~",c("TILDE",`^${s[p.LONETILDE]}${s[p.XRANGEPLAIN]}$`),c("TILDELOOSE",`^${s[p.LONETILDE]}${s[p.XRANGEPLAINLOOSE]}$`),c("LONECARET","(?:\\^)"),c("CARETTRIM",`(\\s*)${s[p.LONECARET]}\\s+`,!0),m.caretTrimReplace="$1^",c("CARET",`^${s[p.LONECARET]}${s[p.XRANGEPLAIN]}$`),c("CARETLOOSE",`^${s[p.LONECARET]}${s[p.XRANGEPLAINLOOSE]}$`),c("COMPARATORLOOSE",`^${s[p.GTLT]}\\s*(${s[p.LOOSEPLAIN]})$|^$`),c("COMPARATOR",`^${s[p.GTLT]}\\s*(${s[p.FULLPLAIN]})$|^$`),c("COMPARATORTRIM",`(\\s*)${s[p.GTLT]}\\s*(${s[p.LOOSEPLAIN]}|${s[p.XRANGEPLAIN]})`,!0),m.comparatorTrimReplace="$1$2$3",c("HYPHENRANGE",`^\\s*(${s[p.XRANGEPLAIN]})\\s+-\\s+(${s[p.XRANGEPLAIN]})\\s*$`),c("HYPHENRANGELOOSE",`^\\s*(${s[p.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[p.XRANGEPLAINLOOSE]})\\s*$`),c("STAR","(<|>)?=?\\s*\\*"),c("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),c("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},6759:(E,m,r)=>{const u=r(3455),a=(n,l,h)=>u(n,l,">",h);E.exports=a},5728:(E,m,r)=>{const u=r(1283),a=(n,l,h)=>(n=new u(n,h),l=new u(l,h),n.intersects(l,h));E.exports=a},2050:(E,m,r)=>{const u=r(3455),a=(n,l,h)=>u(n,l,"<",h);E.exports=a},3352:(E,m,r)=>{const u=r(1344),a=r(1283),n=(l,h,f)=>{let s=null,p=null,S=null;try{S=new a(h,f)}catch(i){return null}return l.forEach(i=>{S.test(i)&&(!s||p.compare(i)===-1)&&(s=i,p=new u(s,f))}),s};E.exports=n},930:(E,m,r)=>{const u=r(1344),a=r(1283),n=(l,h,f)=>{let s=null,p=null,S=null;try{S=new a(h,f)}catch(i){return null}return l.forEach(i=>{S.test(i)&&(!s||p.compare(i)===1)&&(s=i,p=new u(s,f))}),s};E.exports=n},6153:(E,m,r)=>{const u=r(1344),a=r(1283),n=r(7272),l=(h,f)=>{h=new a(h,f);let s=new u("0.0.0");if(h.test(s)||(s=new u("0.0.0-0"),h.test(s)))return s;s=null;for(let p=0;p<h.set.length;++p){const S=h.set[p];let i=null;S.forEach(g=>{const d=new u(g.semver.version);switch(g.operator){case">":d.prerelease.length===0?d.patch++:d.prerelease.push(0),d.raw=d.format();case"":case">=":(!i||n(d,i))&&(i=d);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${g.operator}`)}}),i&&(!s||n(s,i))&&(s=i)}return s&&h.test(s)?s:null};E.exports=l},3455:(E,m,r)=>{const u=r(1344),a=r(4636),{ANY:n}=a,l=r(1283),h=r(8370),f=r(7272),s=r(2767),p=r(1708),S=r(7957),i=(g,d,c,y)=>{g=new u(g,y),d=new l(d,y);let v,I,C,D,R;switch(c){case">":v=f,I=p,C=s,D=">",R=">=";break;case"<":v=s,I=S,C=f,D="<",R="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(h(g,d,y))return!1;for(let x=0;x<d.set.length;++x){const _=d.set[x];let B=null,w=null;if(_.forEach(P=>{P.semver===n&&(P=new a(">=0.0.0")),B=B||P,w=w||P,v(P.semver,B.semver,y)?B=P:C(P.semver,w.semver,y)&&(w=P)}),B.operator===D||B.operator===R||(!w.operator||w.operator===D)&&I(g,w.semver))return!1;if(w.operator===R&&C(g,w.semver))return!1}return!0};E.exports=i},3457:(E,m,r)=>{const u=r(8370),a=r(7852);E.exports=(n,l,h)=>{const f=[];let s=null,p=null;const S=n.sort((c,y)=>a(c,y,h));for(const c of S)u(c,l,h)?(p=c,s||(s=c)):(p&&f.push([s,p]),p=null,s=null);s&&f.push([s,null]);const i=[];for(const[c,y]of f)c===y?i.push(c):!y&&c===S[0]?i.push("*"):y?c===S[0]?i.push(`<=${y}`):i.push(`${c} - ${y}`):i.push(`>=${c}`);const g=i.join(" || "),d=typeof l.raw=="string"?l.raw:String(l);return g.length<d.length?g:l}},1244:(E,m,r)=>{const u=r(1283),a=r(4636),{ANY:n}=a,l=r(8370),h=r(7852),f=(d,c,y={})=>{if(d===c)return!0;d=new u(d,y),c=new u(c,y);let v=!1;e:for(const I of d.set){for(const C of c.set){const D=S(I,C,y);if(v=v||D!==null,D)continue e}if(v)return!1}return!0},s=[new a(">=0.0.0-0")],p=[new a(">=0.0.0")],S=(d,c,y)=>{if(d===c)return!0;if(d.length===1&&d[0].semver===n){if(c.length===1&&c[0].semver===n)return!0;y.includePrerelease?d=s:d=p}if(c.length===1&&c[0].semver===n){if(y.includePrerelease)return!0;c=p}const v=new Set;let I,C;for(const T of d)T.operator===">"||T.operator===">="?I=i(I,T,y):T.operator==="<"||T.operator==="<="?C=g(C,T,y):v.add(T.semver);if(v.size>1)return null;let D;if(I&&C){if(D=h(I.semver,C.semver,y),D>0)return null;if(D===0&&(I.operator!==">="||C.operator!=="<="))return null}for(const T of v){if(I&&!l(T,String(I),y)||C&&!l(T,String(C),y))return null;for(const b of c)if(!l(T,String(b),y))return!1;return!0}let R,x,_,B,w=C&&!y.includePrerelease&&C.semver.prerelease.length?C.semver:!1,P=I&&!y.includePrerelease&&I.semver.prerelease.length?I.semver:!1;w&&w.prerelease.length===1&&C.operator==="<"&&w.prerelease[0]===0&&(w=!1);for(const T of c){if(B=B||T.operator===">"||T.operator===">=",_=_||T.operator==="<"||T.operator==="<=",I){if(P&&T.semver.prerelease&&T.semver.prerelease.length&&T.semver.major===P.major&&T.semver.minor===P.minor&&T.semver.patch===P.patch&&(P=!1),T.operator===">"||T.operator===">="){if(R=i(I,T,y),R===T&&R!==I)return!1}else if(I.operator===">="&&!l(I.semver,String(T),y))return!1}if(C){if(w&&T.semver.prerelease&&T.semver.prerelease.length&&T.semver.major===w.major&&T.semver.minor===w.minor&&T.semver.patch===w.patch&&(w=!1),T.operator==="<"||T.operator==="<="){if(x=g(C,T,y),x===T&&x!==C)return!1}else if(C.operator==="<="&&!l(C.semver,String(T),y))return!1}if(!T.operator&&(C||I)&&D!==0)return!1}return!(I&&_&&!C&&D!==0||C&&B&&!I&&D!==0||P||w)},i=(d,c,y)=>{if(!d)return c;const v=h(d.semver,c.semver,y);return v>0?d:v<0||c.operator===">"&&d.operator===">="?c:d},g=(d,c,y)=>{if(!d)return c;const v=h(d.semver,c.semver,y);return v<0?d:v>0||c.operator==="<"&&d.operator==="<="?c:d};E.exports=f},7235:(E,m,r)=>{const u=r(1283),a=(n,l)=>new u(n,l).set.map(h=>h.map(f=>f.value).join(" ").trim().split(" "));E.exports=a},3518:(E,m,r)=>{const u=r(1283),a=(n,l)=>{try{return new u(n,l).range||"*"}catch(h){return null}};E.exports=a}},Ai={};function at(E){var m=Ai[E];if(m!==void 0)return m.exports;var r=Ai[E]={id:E,loaded:!1,exports:{}};return Jo[E].call(r.exports,r,r.exports,at),r.loaded=!0,r.exports}at.n=E=>{var m=E&&E.__esModule?()=>E.default:()=>E;return at.d(m,{a:m}),m},at.d=(E,m)=>{for(var r in m)at.o(m,r)&&!at.o(E,r)&&Object.defineProperty(E,r,{enumerable:!0,get:m[r]})},at.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(E){if(typeof window=="object")return window}}(),at.o=(E,m)=>Object.prototype.hasOwnProperty.call(E,m),at.nmd=E=>(E.paths=[],E.children||(E.children=[]),E);var sm={};(()=>{var tt;"use strict";var E=at(3650),m=at.n(E),r=at(2467),u=at(3497),a=at.n(u),n=at(8954),l=at.n(n),h=at(1804),f=at(4550),s=at(5516),p=at(9644),S=at(158),i=at(5220),g=at.n(i),d=at(1226),c=at(6067),y=at(2222),v=at(4588),I=at(9661),C=at(7657),D=at(4209),R=at(55);class x{hydrate(fe,we){const Te=new URL(fe,typeof window=="undefined"?"https://dummy.base":window.location.origin),X={};Te.pathname.split("/").forEach((Se,he)=>{if(Se.charAt(0)===":"){const ve=Se.slice(1);typeof we[ve]!="undefined"&&(Te.pathname=Te.pathname.replace(Se,encodeURIComponent(we[ve])),X[ve]=we[ve])}});for(const Se in we)(typeof X[Se]=="undefined"||Te.searchParams.has(Se))&&Te.searchParams.set(Se,we[Se]);return Te.toString()}}function _(){m()(".sample-request-send").off("click"),m()(".sample-request-send").on("click",function(Me){Me.preventDefault();const fe=m()(this).parents("article"),we=fe.data("group"),Te=fe.data("name"),X=fe.data("version");T(we,Te,X,m()(this).data("type"))}),m()(".sample-request-clear").off("click"),m()(".sample-request-clear").on("click",function(Me){Me.preventDefault();const fe=m()(this).parents("article"),we=fe.data("group"),Te=fe.data("name"),X=fe.data("version");b(we,Te,X)})}function B(Me){return Me.replace(/{(.+?)}/g,":$1")}function w(Me,fe){const we=Me.find(".sample-request-url").val(),Te=new x,X=B(we);return Te.hydrate(X,fe)}function P(Me){const fe={};["header","query","body"].forEach(Te=>{const X={};try{Me.find(m()(`[data-family="${Te}"]:visible`)).each((Se,he)=>{const ve=he.dataset.name;let Fe=he.value;if(he.type==="checkbox")if(he.checked)Fe="on";else return!0;if(!Fe&&!he.dataset.optional&&he.type!=="checkbox")return m()(he).addClass("border-danger"),!0;X[ve]=Fe})}catch(Se){return}fe[Te]=X});const we=Me.find(m()('[data-family="body-json"]'));return we.is(":visible")?(fe.body=we.val(),fe.header["Content-Type"]="application/json"):fe.header["Content-Type"]="multipart/form-data",fe}function T(Me,fe,we,Te){const X=m()(`article[data-group="${Me}"][data-name="${fe}"][data-version="${we}"]`),Se=P(X),he={};if(he.url=w(X,Se.query),he.headers=Se.header,he.headers["Content-Type"]==="application/json")he.data=Se.body;else if(he.headers["Content-Type"]==="multipart/form-data"){const Ge=new FormData;for(const[Ue,qe]of Object.entries(Se.body))Ge.append(Ue,qe);he.data=Ge,he.processData=!1,delete he.headers["Content-Type"],he.contentType=!1}he.type=Te,he.success=ve,he.error=Fe,m().ajax(he),X.find(".sample-request-response").fadeTo(200,1),X.find(".sample-request-response-json").html("Loading...");function ve(Ge,Ue,qe){let et;try{et=JSON.parse(qe.responseText),et=JSON.stringify(et,null,4)}catch(lt){et=qe.responseText}X.find(".sample-request-response-json").text(et),g().highlightAll()}function Fe(Ge,Ue,qe){let et="Error "+Ge.status+": "+qe,lt;try{lt=JSON.parse(Ge.responseText),lt=JSON.stringify(lt,null,4)}catch(mt){lt=Ge.responseText}lt&&(et+=`
`+lt),X.find(".sample-request-response").is(":visible")&&X.find(".sample-request-response").fadeTo(1,.1),X.find(".sample-request-response").fadeTo(250,1),X.find(".sample-request-response-json").text(et),g().highlightAll()}}function b(Me,fe,we){const Te=m()('article[data-group="'+Me+'"][data-name="'+fe+'"][data-version="'+we+'"]');Te.find(".sample-request-response-json").html(""),Te.find(".sample-request-response").hide(),Te.find(".sample-request-input").each((Se,he)=>{he.value=he.placeholder!==he.dataset.name?he.placeholder:""});const X=Te.find(".sample-request-url");X.val(X.prop("defaultValue"))}const F={"Allowed values:":"Valors permesos:","Compare all with predecessor":"Comparar tot amb versi\xF3 anterior","compare changes to:":"comparar canvis amb:","compared to":"comparat amb","Default value:":"Valor per defecte:",Description:"Descripci\xF3",Field:"Camp",General:"General","Generated with":"Generat amb",Name:"Nom","No response values.":"Sense valors en la resposta.",optional:"opcional",Parameter:"Par\xE0metre","Permission:":"Permisos:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3 d'exemple","show up to version:":"mostrar versi\xF3:","Size range:":"Tamany de rang:","Toggle navigation":"Canvia la navegaci\xF3",Type:"Tipus",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Premeu Ctrl+C per copiar","copied!":"Copiat!"},j={"Allowed values:":"Povolen\xE9 hodnoty:","Compare all with predecessor":"Porovnat v\u0161e s p\u0159edchoz\xEDmi verzemi","compare changes to:":"porovnat zm\u011Bny s:","compared to":"porovnat s","Default value:":"V\xFDchoz\xED hodnota:",Description:"Popis",Field:"Pole",General:"Obecn\xE9","Generated with":"Vygenerov\xE1no pomoc\xED",Name:"N\xE1zev","No response values.":"Nebyly vr\xE1ceny \u017E\xE1dn\xE9 hodnoty.",optional:"voliteln\xE9",Parameter:"Parametr","Permission:":"Opr\xE1vn\u011Bn\xED:",Response:"Odpov\u011B\u010F",Send:"Odeslat","Send a Sample Request":"Odeslat uk\xE1zkov\xFD po\u017Eadavek","show up to version:":"zobrazit po verzi:","Size range:":"Rozsah velikosti:","Toggle navigation":"P\u0159epnout navigaci",Type:"Typ",url:"url",Copy:"Kop\xEDrovat","Press Ctrl+C to copy":"Stisknut\xEDm kombinace kl\xE1ves Ctrl+C zkop\xEDrujte","copied!":"Zkop\xEDrovan\xFD!"},K={"Allowed values:":"Erlaubte Werte:","Compare all with predecessor":"Vergleiche alle mit ihren Vorg\xE4ngern","compare changes to:":"vergleiche \xC4nderungen mit:","compared to":"verglichen mit","Default value:":"Standardwert:",Description:"Beschreibung",Field:"Feld",General:"Allgemein","Generated with":"Erstellt mit",Name:"Name","No response values.":"Keine R\xFCckgabewerte.",optional:"optional",Parameter:"Parameter","Permission:":"Berechtigung:",Response:"Antwort",Send:"Senden","Send a Sample Request":"Eine Beispielanfrage senden","show up to version:":"zeige bis zur Version:","Size range:":"Gr\xF6\xDFenbereich:","Toggle navigation":"Navigation ein-/ausblenden",Type:"Typ",url:"url",Copy:"Kopieren","Press Ctrl+C to copy":"Dr\xFCcken Sie Ctrl+C zum kopieren","Copied!":"Kopiert!"},W={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Comparar todo con versi\xF3n anterior","compare changes to:":"comparar cambios con:","compared to":"comparado con","Default value:":"Valor por defecto:",Description:"Descripci\xF3n",Field:"Campo",General:"General","Generated with":"Generado con",Name:"Nombre","No response values.":"Sin valores en la respuesta.",optional:"opcional",Parameter:"Par\xE1metro","Permission:":"Permisos:",Response:"Respuesta",Send:"Enviar","Send a Sample Request":"Enviar una petici\xF3n de ejemplo","show up to version:":"mostrar a versi\xF3n:","Size range:":"Tama\xF1o de rango:","Toggle navigation":"Alternar navegaci\xF3n",Type:"Tipo",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Presione Ctrl+C para copiar","copied!":"\xA1Copiado!"},$={"Allowed values:":"Valeurs autoris\xE9es :",Body:"Corps","Compare all with predecessor":"Tout comparer avec ...","compare changes to:":"comparer les changements \xE0 :","compared to":"comparer \xE0","Default value:":"Valeur par d\xE9faut :",Description:"Description",Field:"Champ",General:"G\xE9n\xE9ral","Generated with":"G\xE9n\xE9r\xE9 avec",Header:"En-t\xEAte",Headers:"En-t\xEAtes",Name:"Nom","No response values.":"Aucune valeur de r\xE9ponse.","No value":"Aucune valeur",optional:"optionnel",Parameter:"Param\xE8tre",Parameters:"Param\xE8tres","Permission:":"Permission :","Query Parameter(s)":"Param\xE8tre(s) de la requ\xEAte","Query Parameters":"Param\xE8tres de la requ\xEAte","Request Body":"Corps de la requ\xEAte",required:"requis",Response:"R\xE9ponse",Send:"Envoyer","Send a Sample Request":"Envoyer une requ\xEAte repr\xE9sentative","show up to version:":"Montrer \xE0 partir de la version :","Size range:":"Ordre de grandeur :","Toggle navigation":"Basculer la navigation",Type:"Type",url:"url",Copy:"Copier","Press Ctrl+C to copy":"Appuyez sur Ctrl+C pour copier","copied!":"Copi\xE9!"},k={"Allowed values:":"Valori permessi:","Compare all with predecessor":"Confronta tutto con versioni precedenti","compare changes to:":"confronta modifiche con:","compared to":"confrontato con","Default value:":"Valore predefinito:",Description:"Descrizione",Field:"Campo",General:"Generale","Generated with":"Creato con",Name:"Nome","No response values.":"Nessun valore di risposta.",optional:"opzionale",Parameter:"Parametro","Permission:":"Permessi:",Response:"Risposta",Send:"Invia","Send a Sample Request":"Invia una richiesta di esempio","show up to version:":"mostra alla versione:","Size range:":"Intervallo dimensione:","Toggle navigation":"Attiva/disattiva la navigazione",Type:"Tipo",url:"url",Copy:"Copiare","Press Ctrl+C to copy":"Premere CTRL+C per copiare","copied!":"Copiato!"},H={"Allowed values:":"Toegestane waarden:","Compare all with predecessor":"Vergelijk alle met voorgaande versie","compare changes to:":"vergelijk veranderingen met:","compared to":"vergelijk met","Default value:":"Standaard waarde:",Description:"Omschrijving",Field:"Veld",General:"Algemeen","Generated with":"Gegenereerd met",Name:"Naam","No response values.":"Geen response waardes.",optional:"optioneel",Parameter:"Parameter","Permission:":"Permissie:",Response:"Antwoorden",Send:"Sturen","Send a Sample Request":"Stuur een sample aanvragen","show up to version:":"toon tot en met versie:","Size range:":"Maatbereik:","Toggle navigation":"Navigatie in-/uitschakelen",Type:"Type",url:"url",Copy:"Kopi\xEBren","Press Ctrl+C to copy":"Druk op Ctrl+C om te kopi\xEBren","copied!":"Gekopieerd!"},U={"Allowed values:":"Dozwolone warto\u015Bci:","Compare all with predecessor":"Por\xF3wnaj z poprzednimi wersjami","compare changes to:":"por\xF3wnaj zmiany do:","compared to":"por\xF3wnaj do:","Default value:":"Warto\u015B\u0107 domy\u015Blna:",Description:"Opis",Field:"Pole",General:"Generalnie","Generated with":"Wygenerowano z",Name:"Nazwa","No response values.":"Brak odpowiedzi.",optional:"opcjonalny",Parameter:"Parametr","Permission:":"Uprawnienia:",Response:"Odpowied\u017A",Send:"Wy\u015Blij","Send a Sample Request":"Wy\u015Blij przyk\u0142adowe \u017C\u0105danie","show up to version:":"poka\u017C do wersji:","Size range:":"Zakres rozmiaru:","Toggle navigation":"Prze\u0142\u0105cz nawigacj\u0119",Type:"Typ",url:"url",Copy:"Kopiowa\u0107","Press Ctrl+C to copy":"Naci\u015Bnij Ctrl+C, aby skopiowa\u0107","copied!":"Kopiowane!"},Q={"Allowed values:":"Valores permitidos:","Compare all with predecessor":"Compare todos com antecessores","compare changes to:":"comparar altera\xE7\xF5es com:","compared to":"comparado com","Default value:":"Valor padr\xE3o:",Description:"Descri\xE7\xE3o",Field:"Campo",General:"Geral","Generated with":"Gerado com",Name:"Nome","No response values.":"Sem valores de resposta.",optional:"opcional",Parameter:"Par\xE2metro","Permission:":"Permiss\xE3o:",Response:"Resposta",Send:"Enviar","Send a Sample Request":"Enviar um Exemplo de Pedido","show up to version:":"aparecer para a vers\xE3o:","Size range:":"Faixa de tamanho:","Toggle navigation":"Alternar navega\xE7\xE3o",Type:"Tipo",url:"url",Copy:"Copiar","Press Ctrl+C to copy":"Pressione Ctrl+C para copiar","copied!":"Copiado!"},ne={"Allowed values:":"Valori permise:","Compare all with predecessor":"Compar\u0103 toate cu versiunea precedent\u0103","compare changes to:":"compar\u0103 cu versiunea:","compared to":"comparat cu","Default value:":"Valoare implicit\u0103:",Description:"Descriere",Field:"C\xE2mp",General:"General","Generated with":"Generat cu",Name:"Nume","No response values.":"Nici o valoare returnat\u0103.",optional:"op\u021Bional",Parameter:"Parametru","Permission:":"Permisiune:",Response:"R\u0103spuns",Send:"Trimite","Send a Sample Request":"Trimite o cerere de prob\u0103","show up to version:":"arat\u0103 p\xE2n\u0103 la versiunea:","Size range:":"Interval permis:","Toggle navigation":"Comutarea navig\u0103rii",Type:"Tip",url:"url",Copy:"Copie","Press Ctrl+C to copy":"Ap\u0103sa\u021Bi Ctrl+C pentru a copia","copied!":"Copiat!"},ie={"Allowed values:":"\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F:","Compare all with predecessor":"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439","compare changes to:":"\u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0441:","compared to":"\u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441","Default value:":"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E:",Description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",Field:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",General:"\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F","Generated with":"\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",Name:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435","No response values.":"\u041D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430.",optional:"\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",Parameter:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440","Permission:":"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E:",Response:"\u041E\u0442\u0432\u0435\u0442",Send:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Send a Sample Request":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441","show up to version:":"\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E:","Size range:":"\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F:","Toggle navigation":"\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438",Type:"\u0422\u0438\u043F",url:"URL",Copy:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C","Press Ctrl+C to copy":"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 Ctrl+C, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C","copied!":"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!"},J={"Allowed values:":"\u0130zin verilen de\u011Ferler:","Compare all with predecessor":"T\xFCm\xFCn\xFC \xF6ncekiler ile kar\u015F\u0131la\u015Ft\u0131r","compare changes to:":"de\u011Fi\u015Fiklikleri kar\u015F\u0131la\u015Ft\u0131r:","compared to":"kar\u015F\u0131la\u015Ft\u0131r","Default value:":"Varsay\u0131lan de\u011Fer:",Description:"A\xE7\u0131klama",Field:"Alan",General:"Genel","Generated with":"Olu\u015Fturan",Name:"\u0130sim","No response values.":"D\xF6n\xFC\u015F verisi yok.",optional:"opsiyonel",Parameter:"Parametre","Permission:":"\u0130zin:",Response:"D\xF6n\xFC\u015F",Send:"G\xF6nder","Send a Sample Request":"\xD6rnek istek g\xF6nder","show up to version:":"bu versiyona kadar g\xF6ster:","Size range:":"Boyut aral\u0131\u011F\u0131:","Toggle navigation":"Navigasyonu de\u011Fi\u015Ftir",Type:"Tip",url:"url",Copy:"Kopya etmek","Press Ctrl+C to copy":"Kopyalamak i\xE7in Ctrl+C tu\u015Flar\u0131na bas\u0131n","copied!":"Kopya -lanan!"},ge={"Allowed values:":"Gi\xE1 tr\u1ECB ch\u1EA5p nh\u1EADn:","Compare all with predecessor":"So s\xE1nh v\u1EDBi t\u1EA5t c\u1EA3 phi\xEAn b\u1EA3n tr\u01B0\u1EDBc","compare changes to:":"so s\xE1nh s\u1EF1 thay \u0111\u1ED5i v\u1EDBi:","compared to":"so s\xE1nh v\u1EDBi","Default value:":"Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh:",Description:"Ch\xFA th\xEDch",Field:"Tr\u01B0\u1EDDng d\u1EEF li\u1EC7u",General:"T\u1ED5ng quan","Generated with":"\u0110\u01B0\u1EE3c t\u1EA1o b\u1EDFi",Name:"T\xEAn","No response values.":"Kh\xF4ng c\xF3 k\u1EBFt qu\u1EA3 tr\u1EA3 v\u1EC1.",optional:"T\xF9y ch\u1ECDn",Parameter:"Tham s\u1ED1","Permission:":"Quy\u1EC1n h\u1EA1n:",Response:"K\u1EBFt qu\u1EA3",Send:"G\u1EEDi","Send a Sample Request":"G\u1EEDi m\u1ED9t y\xEAu c\u1EA7u m\u1EABu","show up to version:":"hi\u1EC3n th\u1ECB phi\xEAn b\u1EA3n:","Size range:":"K\xEDch c\u1EE1:","Toggle navigation":"Chuy\u1EC3n \u0111\u1ED5i \u0111i\u1EC1u h\u01B0\u1EDBng",Type:"Ki\u1EC3u",url:"li\xEAn k\u1EBFt",Copy:"B\u1EA3n sao","Press Ctrl+C to copy":"Nh\u1EA5n Ctrl+C \u0111\u1EC3 sao ch\xE9p","copied!":"Sao ch\xE9p!"},ye={"Allowed values:":"\u5141\u8BB8\u503C:",Body:"\u8BF7\u6C42\u4F53","Compare all with predecessor":"\u4E0E\u6240\u6709\u4E4B\u524D\u7684\u7248\u672C\u6BD4\u8F83","compare changes to:":"\u5C06\u5F53\u524D\u7248\u672C\u4E0E\u6307\u5B9A\u7248\u672C\u6BD4\u8F83:","compared to":"\u76F8\u6BD4\u4E8E","Default value:":"\u9ED8\u8BA4\u503C:",DEPRECATED:"\u5F03\u7528",Description:"\u63CF\u8FF0","Error 4xx":"\u8BF7\u6C42\u5931\u8D25\uFF084xx\uFF09",Field:"\u5B57\u6BB5","Filter...":"\u7B5B\u9009\u2026",General:"\u6982\u8981","Generated with":"\u6784\u5EFA\u4E8E",Header:"\u8BF7\u6C42\u5934",Headers:"\u8BF7\u6C42\u5934",Name:"\u540D\u79F0","No response values.":"\u65E0\u8FD4\u56DE\u503C.","No value":"\u7A7A\u503C",optional:"\u53EF\u9009",Parameter:"\u53C2\u6570",Parameters:"\u53C2\u6570","Permission:":"\u6743\u9650:","Query Parameter(s)":"\u67E5\u8BE2\u53C2\u6570","Query Parameters":"\u67E5\u8BE2\u53C2\u6570","Request Body":"\u8BF7\u6C42\u6570\u636E",required:"\u5FC5\u9700",Reset:"\u91CD\u7F6E",Response:"\u8FD4\u56DE",Send:"\u53D1\u9001","Send a Sample Request":"\u53D1\u9001\u793A\u4F8B\u8BF7\u6C42","show up to version:":"\u663E\u793A\u6307\u5B9A\u7248\u672C:","Size range:":"\u53D6\u503C\u8303\u56F4:","Success 200":"\u8BF7\u6C42\u6210\u529F\uFF08200\uFF09","Toggle navigation":"\u5207\u63DB\u5C0E\u822A",Type:"\u7C7B\u578B",url:"\u5730\u5740",Copy:"\u590D\u5236\u6587\u672C","Press Ctrl+C to copy":"\u6309Ctrl+C\u590D\u5236","copied!":"\u6587\u672C\u5DF2\u590D\u5236!"},Ce={ca:F,cn:ye,cs:j,de:K,es:W,en:{},fr:$,it:k,nl:H,pl:U,pt:Q,pt_br:Q,ro:ne,ru:ie,tr:J,vi:ge,zh:ye,zh_cn:ye},Be=((tt=window.navigator.language)!=null?tt:"en-GB").toLowerCase().substr(0,2);let it=Ce[Be]?Ce[Be]:Ce.en;function yt(Me){const fe=it[Me];return fe===void 0?Me:fe}function Dt(Me){if(!Object.prototype.hasOwnProperty.call(Ce,Me))throw new Error(`Invalid value for language setting! Available values are ${Object.keys(Ce).join(",")}`);it=Ce[Me]}const Pt=Me=>{let fe={};const we=(Se,he)=>he.split(".").reduce((ve,Fe)=>{if(ve){if(ve[Fe])return ve[Fe];if(Array.isArray(ve)&&ve[0]&&ve[0][Fe])return ve[0][Fe]}return null},Se),Te=(Se,he,ve)=>{Se?Array.isArray(Se)?Se.length?Se[0][he]=ve:Se.push({[he]:ve}):Se[he]=ve:fe[he]=ve};Me.forEach(Se=>{const{parentNode:he,field:ve,type:Fe}=Se[0],Ge=he?we(fe,he.path):void 0,Ue=Ge?ve.substring(he.path.length+1):ve,qe=Fe.indexOf("[]")!==-1;Fe.indexOf("Object")!==-1?Te(Ge,Ue,qe?[]:{}):Te(Ge,Ue,qe?[]:Se[1])});const X=Object.keys(fe);return X.length===1&&Me[0][0].optional&&(fe=fe[X[0]]),de(fe)};function de(Me){return JSON.stringify(Me,null,4)}function Ne(Me){const fe=[];return Me.forEach(we=>{let Te;switch(we.type.toLowerCase()){case"string":Te=we.defaultValue||"";break;case"boolean":Te=Boolean(we.defaultValue)||!1;break;case"number":Te=parseInt(we.defaultValue||0,10);break;case"date":Te=we.defaultValue||new Date().toLocaleDateString(window.navigator.language);break}fe.push([we,Te])}),Pt(fe)}var Ie=at(7393);class ke extends Ie{constructor(fe){super(),this.testMode=fe}diffMain(fe,we,Te,X){return super.diff_main(this._stripHtml(fe),this._stripHtml(we),Te,X)}diffLineMode(fe,we){const Te=this.diff_linesToChars_(fe,we),X=Te.chars1,Se=Te.chars2,he=Te.lineArray,ve=super.diff_main(X,Se,!1);return this.diff_charsToLines_(ve,he),ve}diffPrettyHtml(fe){const we=[],Te=/&/g,X=/</g,Se=/>/g,he=/\n/g;for(let ve=0;ve<fe.length;ve++){const Fe=fe[ve][0],Ue=fe[ve][1].replace(Te,"&amp;").replace(X,"&lt;").replace(Se,"&gt;").replace(he,"&para;<br>");switch(Fe){case Ie.DIFF_INSERT:we[ve]="<ins>"+Ue+"</ins>";break;case Ie.DIFF_DELETE:we[ve]="<del>"+Ue+"</del>";break;case Ie.DIFF_EQUAL:we[ve]="<span>"+Ue+"</span>";break}}return we.join("")}diffPrettyCode(fe){const we=[],Te=/\n/g;for(let X=0;X<fe.length;X++){const Se=fe[X][0],he=fe[X][1],ve=he.match(Te)?"":`
`;switch(Se){case Ie.DIFF_INSERT:we[X]=he.replace(/^(.)/gm,"+ $1")+ve;break;case Ie.DIFF_DELETE:we[X]=he.replace(/^(.)/gm,"- $1")+ve;break;case Ie.DIFF_EQUAL:we[X]=he.replace(/^(.)/gm,"  $1");break}}return we.join("")}diffCleanupSemantic(fe){return this.diff_cleanupSemantic(fe)}_stripHtml(fe){if(this.testMode)return fe;const we=document.createElement("div");return we.innerHTML=fe,we.textContent||we.innerText||""}}function ht(){l().registerHelper("markdown",function(X){return X&&(X=X.replace(/((\[(.*?)\])?\(#)((.+?):(.+?))(\))/mg,function(Se,he,ve,Fe,Ge,Ue,qe){const et=Fe||Ue+"/"+qe;return'<a href="#api-'+Ue+"-"+qe+'">'+et+"</a>"}),X)}),l().registerHelper("setInputType",function(X){switch(X){case"File":case"Email":case"Color":case"Number":case"Date":return X[0].toLowerCase()+X.substring(1);case"Boolean":return"checkbox";default:return"text"}});let Me;l().registerHelper("startTimer",function(X){return Me=new Date,""}),l().registerHelper("stopTimer",function(X){return console.log(new Date-Me),""}),l().registerHelper("__",function(X){return yt(X)}),l().registerHelper("cl",function(X){return console.log(X),""}),l().registerHelper("underscoreToSpace",function(X){return X.replace(/(_+)/g," ")}),l().registerHelper("removeDblQuotes",function(X){return X.replace(/"/g,"")}),l().registerHelper("assign",function(X){if(arguments.length>0){const Se=typeof arguments[1];let he=null;(Se==="string"||Se==="number"||Se==="boolean")&&(he=arguments[1]),l().registerHelper(X,function(){return he})}return""}),l().registerHelper("nl2br",function(X){return we(X)}),l().registerHelper("ifNotObject",function(X,Se){return X&&X.indexOf("Object")!==0?Se.fn(this):Se.inverse(this)}),l().registerHelper("ifCond",function(X,Se,he,ve){switch(Se){case"==":return X==he?ve.fn(this):ve.inverse(this);case"===":return X===he?ve.fn(this):ve.inverse(this);case"!=":return X!=he?ve.fn(this):ve.inverse(this);case"!==":return X!==he?ve.fn(this):ve.inverse(this);case"<":return X<he?ve.fn(this):ve.inverse(this);case"<=":return X<=he?ve.fn(this):ve.inverse(this);case">":return X>he?ve.fn(this):ve.inverse(this);case">=":return X>=he?ve.fn(this):ve.inverse(this);case"&&":return X&&he?ve.fn(this):ve.inverse(this);case"||":return X||he?ve.fn(this):ve.inverse(this);default:return ve.inverse(this)}});const fe={};l().registerHelper("subTemplate",function(X,Se){fe[X]||(fe[X]=l().compile(document.getElementById("template-"+X).innerHTML));const he=fe[X],ve=m().extend({},this,Se.hash);return new(l()).SafeString(he(ve))}),l().registerHelper("toLowerCase",function(X){return X&&typeof X=="string"?X.toLowerCase():""}),l().registerHelper("dot2bracket",function(X){const{parentNode:Se,field:he,isArray:ve}=X;let Fe="";if(Se){let Ge=X;do{const Ue=Ge.parentNode;Ue.isArray&&(Fe=`[]${Fe}`),Ue.parentNode?Fe=`[${Ue.field.substring(Ue.parentNode.path.length+1)}]${Fe}`:Fe=Ue.field+Fe,Ge=Ge.parentNode}while(Ge.parentNode);Fe+=`[${he.substring(Se.path.length+1)}]`}else Fe=he,ve&&(Fe+="[]");return Fe}),l().registerHelper("nestObject",function(X){const{parentNode:Se,field:he}=X;return Se?"&nbsp;&nbsp;".repeat(Se.path.split(".").length)+he.substring(Se.path.length+1):he});function we(X){return(""+X).replace(/(?:^|<\/pre>)[^]*?(?:<pre>|$)/g,Se=>Se.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2"))}l().registerHelper("each_compare_list_field",function(X,Se,he){const ve=he.hash.field,Fe=[];X&&X.forEach(function(Ue){const qe=Ue;qe.key=Ue[ve],Fe.push(qe)});const Ge=[];return Se&&Se.forEach(function(Ue){const qe=Ue;qe.key=Ue[ve],Ge.push(qe)}),Te("key",Fe,Ge,he)}),l().registerHelper("each_compare_keys",function(X,Se,he){const ve=[];X&&Object.keys(X).forEach(function(Ue){const qe={};qe.value=X[Ue],qe.key=Ue,ve.push(qe)});const Fe=[];return Se&&Object.keys(Se).forEach(function(Ue){const qe={};qe.value=Se[Ue],qe.key=Ue,Fe.push(qe)}),Te("key",ve,Fe,he)}),l().registerHelper("body2json",function(X,Se){return Ne(X)}),l().registerHelper("each_compare_field",function(X,Se,he){return Te("field",X,Se,he)}),l().registerHelper("each_compare_title",function(X,Se,he){return Te("title",X,Se,he)}),l().registerHelper("reformat",function(X,Se){if(Se==="json")try{return JSON.stringify(JSON.parse(X.trim()),null,"    ")}catch(he){}return X}),l().registerHelper("showDiff",function(X,Se,he){let ve="";if(X===Se)ve=X;else{if(!X)return Se;if(!Se)return X;const Fe=new ke;if(he==="code"){const Ge=Fe.diffLineMode(Se,X);ve=Fe.diffPrettyCode(Ge)}else{const Ge=Fe.diffMain(Se,X);Fe.diffCleanupSemantic(Ge),ve=Fe.diffPrettyHtml(Ge),ve=ve.replace(/&para;/gm,""),he==="nl2br"&&(ve=we(ve))}}return ve});function Te(X,Se,he,ve){const Fe=[];let Ge=0;Se&&Se.forEach(function(et){let lt=!1;if(he&&he.forEach(function(mt){if(et[X]===mt[X]){const Bt={typeSame:!0,source:et,compare:mt,index:Ge};Fe.push(Bt),lt=!0,Ge++}}),!lt){const mt={typeIns:!0,source:et,index:Ge};Fe.push(mt),Ge++}}),he&&he.forEach(function(et){let lt=!1;if(Se&&Se.forEach(function(mt){mt[X]===et[X]&&(lt=!0)}),!lt){const mt={typeDel:!0,compare:et,index:Ge};Fe.push(mt),Ge++}});let Ue="";const qe=Fe.length;for(const et in Fe)parseInt(et,10)===qe-1&&(Fe[et]._last=!0),Ue=Ue+ve.fn(Fe[et]);return Ue}}document.addEventListener("DOMContentLoaded",()=>{Ut(),_(),g().highlightAll()});function Ut(){var Ke;let Me=[{group:"\u540C\u6B65\u5173\u8054",type:"post",url:"AddSyncLink",title:"\u540C\u6B65\u5173\u8054-\u5355\u4E2A\u65B0\u589E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "socDataIden": "source1",         // \u6E90\u5934\u6570\u636E\u6E90\uFF0CString\uFF0C\u5FC5\u4F20
    "socDataSchemaIden": "schema1",   // \u6E90\u5934\u6570\u636E\u6A21\u5F0F\u8BC6\u522B\uFF0CString\uFF0C\u5FC5\u4F20
    "desiDataIden": "target1",        // \u76EE\u6807\u6570\u636E\u6E90\uFF0CString\uFF0C\u5FC5\u4F20
    "desiDataSchemaIden": "schema2",  // \u76EE\u6807\u6570\u636E\u6A21\u5F0F\u8BC6\u522B\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\"slId\\":\\"newId1\\",\\"socDataIden\\":\\"source1\\",\\"socDataSchemaIden\\":\\"schema1\\",\\"socMainKey\\":\\"key1\\",\\"desiDataIden\\":\\"target1\\",\\"desiDataSchemaIden\\":\\"targetSchema1\\",\\"desiMainKey\\":\\"targetKey1\\",\\"syncPeriod\\":\\"30\\",\\"syncClass\\":\\"class1\\",\\"displaySort\\":\\"1\\",\\"lastSyncTime\\":\\"2024-01-01\\",\\"delayMinutes\\":\\"5\\",\\"overMainKeyBacks\\":\\"60\\",\\"syncUnit\\":\\"R\\",\\"remark\\":\\"remark1\\",\\"timestampSs\\":\\"2024-01-01\\",\\"currStopTime\\":\\"2024-01-02\\",\\"dataClass\\":\\"\u8BB0\u5F55\\",\\"fromSysName\\":\\"sys1\\",\\"targetSysName\\":\\"sys2\\",\\"bizClass\\":\\"biz1\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "slId": "newId1",
    "socDataIden": "source1",
    "socDataSchemaIden": "schema1",
    "socMainKey": "key1",
    "desiDataIden": "target1",
    "desiDataSchemaIden": "targetSchema1",
    "desiMainKey": "targetKey1",
    "syncPeriod": "30",
    "syncClass": "class1",
    "displaySort": "1",
    "lastSyncTime": "2024-01-01",
    "delayMinutes": "5",
    "overMainKeyBacks": "60",
    "syncUnit": "R",
    "remark": "remark1",
    "timestampSs": "2024-01-01",
    "currStopTime": "2024-01-02",
    "dataClass": "\u8BB0\u5F55",
    "fromSysName": "sys1",
    "targetSysName": "sys2",
    "bizClass": "biz1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u540C\u6B65\u5173\u8054",name:"PostAddsynclink",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/AddSyncLink"}]},{group:"\u540C\u6B65\u5173\u8054",type:"post",url:"BatchDeleteSyncLinks",title:"\u540C\u6B65\u5173\u8054-\u6279\u91CF\u5220\u9664",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:'["id1", "id2", "id3"]  // \u540C\u6B65\u5173\u8054ID\u96C6\u5408\uFF0CArray<String>\uFF0C\u5FC5\u4F20',type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u540C\u6B65\u5173\u8054",name:"PostBatchdeletesynclinks",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/BatchDeleteSyncLinks"}]},{group:"\u540C\u6B65\u5173\u8054",type:"post",url:"GetAllSyncClasses",title:"\u540C\u6B65\u5173\u8054-\u67E5\u8BE2\u6240\u6709\u540C\u6B65\u5206\u7C7B",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "[\\"class1\\",\\"class2\\",\\"class3\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
[
  "class1",
  "class2",
  "class3"
]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u540C\u6B65\u5173\u8054",name:"PostGetallsyncclasses",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetAllSyncClasses"}]},{group:"\u540C\u6B65\u5173\u8054",type:"post",url:"GetAllSyncUnits",title:"\u540C\u6B65\u5173\u8054-\u67E5\u8BE2\u6240\u6709\u540C\u6B65\u7C92\u5EA6",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "[\\"R\\",\\"F\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
[
  "R",
  "F"
]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u540C\u6B65\u5173\u8054",name:"PostGetallsyncunits",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetAllSyncUnits"}]},{group:"\u540C\u6B65\u5173\u8054",type:"post",url:"GetSyncLinkById",title:"\u540C\u6B65\u5173\u8054-\u5355\u8BB0\u5F55\u67E5\u8BE2",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "slId": "id1"    // \u540C\u6B65\u5173\u8054ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\"slId\\":\\"id1\\",\\"socDataIden\\":\\"source1\\",\\"socDataSchemaIden\\":\\"schema1\\",\\"socMainKey\\":\\"key1\\",\\"desiDataIden\\":\\"target1\\",\\"desiDataSchemaIden\\":\\"targetSchema1\\",\\"desiMainKey\\":\\"targetKey1\\",\\"syncPeriod\\":\\"30\\",\\"syncClass\\":\\"class1\\",\\"displaySort\\":\\"1\\",\\"lastSyncTime\\":\\"2024-01-01\\",\\"delayMinutes\\":\\"5\\",\\"overMainKeyBacks\\":\\"60\\",\\"syncUnit\\":\\"R\\",\\"remark\\":\\"remark1\\",\\"timestampSs\\":\\"2024-01-01\\",\\"currStopTime\\":\\"2024-01-02\\",\\"dataClass\\":\\"\u8BB0\u5F55\\",\\"fromSysName\\":\\"sys1\\",\\"targetSysName\\":\\"sys2\\",\\"bizClass\\":\\"biz1\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "slId": "id1",
    "socDataIden": "source1",
    "socDataSchemaIden": "schema1",
    "socMainKey": "key1",
    "desiDataIden": "target1",
    "desiDataSchemaIden": "targetSchema1",
    "desiMainKey": "targetKey1",
    "syncPeriod": "30",
    "syncClass": "class1",
    "displaySort": "1",
    "lastSyncTime": "2024-01-01",
    "delayMinutes": "5",
    "overMainKeyBacks": "60",
    "syncUnit": "R",
    "remark": "remark1",
    "timestampSs": "2024-01-01",
    "currStopTime": "2024-01-02",
    "dataClass": "\u8BB0\u5F55",
    "fromSysName": "sys1",
    "targetSysName": "sys2",
    "bizClass": "biz1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u540C\u6B65\u5173\u8054",name:"PostGetsynclinkbyid",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetSyncLinkById"}]},{group:"\u540C\u6B65\u5173\u8054",type:"post",url:"GetSyncLinkPager",title:"\u540C\u6B65\u5173\u8054-\u5E26\u6761\u4EF6\u5206\u9875\u67E5\u8BE2",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "page": 1,           // \u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
    "pageSize": 10,      // \u9875\u5927\u5C0F\uFF0CInteger\uFF0C\u5FC5\u4F20
    "sortType": "ASC",   // \u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "socDataIden": "",   // \u6E90\u5934\u6570\u636E\u6E90\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "socDataSchemaIden": "", // \u6E90\u5934\u6570\u636E\u6A21\u5F0F\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "desiDataIden": "",  // \u76EE\u6807\u6570\u636E\u6E90\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "desiDataSchemaIden": "", // \u76EE\u6807\u6570\u636E\u6A21\u5F0F\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "syncClass": ""      // \u540C\u6B65\u5206\u7C7B\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u7CBE\u786E\u5339\u914D
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"totalSize\\":30,\\"totalPage\\":3,\\"pageSize\\":10,\\"page\\":1,\\"list\\":[{\\"slId\\":\\"id1\\",\\"socDataIden\\":\\"source1\\",\\"socDataSchemaIden\\":\\"schema1\\",\\"socMainKey\\":\\"key1\\",\\"desiDataIden\\":\\"target1\\",\\"desiDataSchemaIden\\":\\"targetSchema1\\",\\"desiMainKey\\":\\"targetKey1\\",\\"syncPeriod\\":\\"30\\",\\"syncClass\\":\\"class1\\",\\"displaySort\\":\\"1\\",\\"lastSyncTime\\":\\"2024-01-01\\",\\"delayMinutes\\":\\"5\\",\\"overMainKeyBacks\\":\\"60\\",\\"syncUnit\\":\\"R\\",\\"remark\\":\\"remark1\\",\\"timestampSs\\":\\"2024-01-01\\",\\"currStopTime\\":\\"2024-01-02\\",\\"dataClass\\":\\"\u8BB0\u5F55\\",\\"fromSysName\\":\\"sys1\\",\\"targetSysName\\":\\"sys2\\",\\"bizClass\\":\\"biz1\\"}]}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "totalSize": 30,
    "totalPage": 3,
    "pageSize": 10,
    "page": 1,
    "list": [
        {
            "slId": "id1",
            "socDataIden": "source1",
            "socDataSchemaIden": "schema1",
            "socMainKey": "key1",
            "desiDataIden": "target1",
            "desiDataSchemaIden": "targetSchema1",
            "desiMainKey": "targetKey1",
            "syncPeriod": "30",
            "syncClass": "class1",
            "displaySort": "1",
            "lastSyncTime": "2024-01-01",
            "delayMinutes": "5",
            "overMainKeyBacks": "60",
            "syncUnit": "R",
            "remark": "remark1",
            "timestampSs": "2024-01-01",
            "currStopTime": "2024-01-02",
            "dataClass": "\u8BB0\u5F55",
            "fromSysName": "sys1",
            "targetSysName": "sys2",
            "bizClass": "biz1"
        }
    ]
}

\u6570\u636E\u5E93\u5B57\u6BB5\u8BF4\u660E\uFF1A
\u9A7C\u5CF0\u5B57\u6BB5          | \u5BF9\u5E94\u7684\u6CE8\u91CA\u53CA\u4E3B\u952E/\u7A7A\u503C\u4FE1\u606F
------------------|----------------------------------------------
slId              | \u540C\u6B65\u5173\u8054ID\uFF08\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
socDataIden       | \u6E90\u5934\u6570\u636E\u6E90\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
socDataSchemaIden | \u6E90\u5934\u6570\u636E\u6A21\u5F0F\u8BC6\u522B\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
socMainKey        | \u6E90\u5934\u4E3B\u952E\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
desiDataIden      | \u76EE\u6807\u6570\u636E\u6E90\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
desiDataSchemaIden| \u76EE\u6807\u6570\u636E\u6A21\u5F0F\u8BC6\u522B\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
desiMainKey       | \u76EE\u6807\u4E3B\u952E\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
syncPeriod        | \u540C\u6B65\u5468\u671F(\u5355\u4F4D\u5206\u949F)\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
syncClass         | \u540C\u6B65\u5206\u7C7B\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
displaySort       | \u663E\u793A\u6392\u5E8F,\u6570\u503C\u5B57\u7B26\u4E32\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
lastSyncTime      | \u4E0A\u6B21\u540C\u6B65\u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
delayMinutes      | \u5EF6\u540E\u6F02\u79FB\u5206\u949F\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
overMainKeyBacks  | \u5DF2\u5B8C\u6210\u4E3B\u952E\u6587\u4EF6\u4FDD\u7559\u5206\u949F\u6570\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
syncUnit          | \u540C\u6B65\u7C92\u5EA6,\uFF08\u8BB0\u5F55 R  \u6587\u4EF6 F,\u9ED8\u8BA4R\uFF09\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
remark            | \u5907\u6CE8\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
timestampSs       | \u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
currStopTime      | \u672C\u6B21\u540C\u6B65\u622A\u81F3\u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
dataClass         | \u6570\u636E\u7C7B\u578B,\u8BB0\u5F55\u3001\u6587\u672C\u3001\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891 \u9ED8\u8BA4 \u8BB0\u5F55\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
fromSysName       | \u6765\u6E90\u7CFB\u7EDF\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
targetSysName     | \u76EE\u6807\u7CFB\u7EDF\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
bizClass          | \u4E1A\u52A1\u7C7B\u578B\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u540C\u6B65\u5173\u8054",name:"PostGetsynclinkpager",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetSyncLinkPager"}]},{group:"\u540C\u6B65\u5173\u8054",type:"post",url:"UpdateSyncLink",title:"\u540C\u6B65\u5173\u8054-\u5355\u4E2A\u4FEE\u6539",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "slId": "sild11",         // \u552F\u4E00Id\uFF0CString\uFF0C\u5FC5\u4F20
    \u201Cremark": "remark1",       // \u5907\u6CE8\uFF0CString\uFF0C\u9009\u4F20(\u9700\u8981\u4FEE\u6539\u4EC0\u4E48\u5B57\u6BB5\uFF0C\u4F20\u5165\u4EC0\u4E48\u5B57\u6BB5)\u6E90\u5934\u6570\u636E\u6E90\u3001\u6E90\u5934\u6570\u636E\u6A21\u5F0F\u3001\u6E90\u5934\u4E3B\u952E\u3001\u76EE\u6807\u6570\u636E\u6E90\u3001\u76EE\u6807\u6570\u636E\u6A21\u5F0F\u3001\u76EE\u6807\u4E3B\u952E\uFF0C\u65E0\u6CD5\u8FDB\u884C\u4FEE\u6539\uFF0C\u4E0D\u5E94\u8BE5\u4F20\u5165\uFF0C\u4E0A\u6B21\u540C\u6B65\u65F6\u95F4\u6233\u548C\u672C\u6B21\u540C\u6B65\u65F6\u95F4\u6233\u524D\u7AEF\u65E0\u6CD5\u4FEE\u6539\uFF0C\u65E0\u6CD5\u4F20\u5165
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\"slId\\":\\"id1\\",\\"socDataIden\\":\\"source1\\",\\"socDataSchemaIden\\":\\"schema1\\",\\"socMainKey\\":\\"key1\\",\\"desiDataIden\\":\\"target1\\",\\"desiDataSchemaIden\\":\\"targetSchema1\\",\\"desiMainKey\\":\\"targetKey1\\",\\"syncPeriod\\":\\"30\\",\\"syncClass\\":\\"class1\\",\\"displaySort\\":\\"1\\",\\"lastSyncTime\\":\\"2024-01-01\\",\\"delayMinutes\\":\\"5\\",\\"overMainKeyBacks\\":\\"60\\",\\"syncUnit\\":\\"R\\",\\"remark\\":\\"remark1\\",\\"timestampSs\\":\\"2024-01-01\\",\\"currStopTime\\":\\"2024-01-02\\",\\"dataClass\\":\\"\u8BB0\u5F55\\",\\"fromSysName\\":\\"sys1\\",\\"targetSysName\\":\\"sys2\\",\\"bizClass\\":\\"biz1\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "slId": "id1",
    "socDataIden": "source1",
    "socDataSchemaIden": "schema1",
    "socMainKey": "key1",
    "desiDataIden": "target1",
    "desiDataSchemaIden": "targetSchema1",
    "desiMainKey": "targetKey1",
    "syncPeriod": "30",
    "syncClass": "class1",
    "displaySort": "1",
    "lastSyncTime": "2024-01-01",
    "delayMinutes": "5",
    "overMainKeyBacks": "60",
    "syncUnit": "R",
    "remark": "remark1",
    "timestampSs": "2024-01-01",
    "currStopTime": "2024-01-02",
    "dataClass": "\u8BB0\u5F55",
    "fromSysName": "sys1",
    "targetSysName": "sys2",
    "bizClass": "biz1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u540C\u6B65\u5173\u8054",name:"PostUpdatesynclink",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/UpdateSyncLink"}]},{group:"\u540C\u6B65\u5173\u8054\u5339\u914D",type:"post",url:"AddSyncLinkMatch",title:"\u540C\u6B65\u5173\u8054\u5339\u914D-\u5355\u4E2A\u65B0\u589E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "slId": "id1", // \u540C\u6B65\u5173\u8054ID\uFF0CString\uFF0C\u5FC5\u4F20
    "socDataItemIden": "sourceItemIden", // \u6E90\u5934\u6570\u636E\u9879\u8BC6\u522B\uFF0CString\uFF0C\u5FC5\u4F20
    "desiDataItemIden": "targetItemIden" // \u76EE\u6807\u6570\u636E\u9879\u8BC6\u522B\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\"slmId\\":\\"newSlmId\\",\\"slId\\":\\"id1\\",\\"socDataItemIden\\":\\"sourceItemIden\\",\\"socDataItemIdenName\\":\\"sourceItemName\\",\\"desiDataItemIden\\":\\"targetItemIden\\",\\"desiDataItemIdenName\\":\\"targetItemName\\",\\"remark\\":\\"remark1\\",\\"timestampSs\\":\\"2024-01-01\\",\\"desiSort\\":\\"1\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "slmId": "newSlmId",
    "slId": "id1",
    "socDataItemIden": "sourceItemIden",
    "socDataItemIdenName": "sourceItemName",
    "desiDataItemIden": "targetItemIden",
    "desiDataItemIdenName": "targetItemName",
    "remark": "remark1",
    "timestampSs": "2024-01-01",
    "desiSort": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u540C\u6B65\u5173\u8054\u5339\u914D",name:"PostAddsynclinkmatch",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/AddSyncLinkMatch"}]},{group:"\u540C\u6B65\u5173\u8054\u5339\u914D",type:"post",url:"BatchDeleteSyncLinkMatches",title:"\u540C\u6B65\u5173\u8054\u5339\u914D-\u6279\u91CF\u5220\u9664",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:'["slmId1", "slmId2"] // \u540C\u6B65\u5173\u8054\u5339\u914DID\u96C6\u5408\uFF0CArray<String>\uFF0C\u5FC5\u4F20',type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "[\\"slmId1\\",\\"slmId2\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u540C\u6B65\u5173\u8054\u5339\u914D",name:"PostBatchdeletesynclinkmatches",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/BatchDeleteSyncLinkMatches"}]},{group:"\u540C\u6B65\u5173\u8054\u5339\u914D",type:"post",url:"GetSyncLinkMatchById",title:"\u540C\u6B65\u5173\u8054\u5339\u914D-\u5355\u4E2A\u67E5\u8BE2",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "slmId": "slmId1" // \u540C\u6B65\u5173\u8054\u5339\u914DID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\n        \\"slmId\\": \\"slmId1\\",\\n        \\"socDataItemIden\\": \\"sourceItemIden\\",\\n        \\"socDataItemIdenName\\": \\"sourceItemName\\",\\n        \\"desiDataItemIden\\": \\"targetItemIden\\",\\n        \\"desiDataItemIdenName\\": \\"targetItemName\\",\\n        \\"remark\\": \\"remark\\",\\n        \\"timestampSs\\": \\"timestampSs\\",\\n        \\"slId\\": \\"slId\\",\\n        \\"desiSort\\": \\"desiSort\\"\\n    }",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "slmId": "slmId1",
    "socDataItemIden": "sourceItemIden",
    "socDataItemIdenName": "sourceItemName",
    "desiDataItemIden": "targetItemIden",
    "desiDataItemIdenName": "targetItemName",
    "remark": "remark",
    "timestampSs": "timestampSs",
    "slId": "slId",
    "desiSort": "desiSort"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u540C\u6B65\u5173\u8054\u5339\u914D",name:"PostGetsynclinkmatchbyid",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetSyncLinkMatchById"}]},{group:"\u540C\u6B65\u5173\u8054\u5339\u914D",type:"post",url:"GetSyncLinkMatchByIdPager",title:"\u540C\u6B65\u5173\u8054\u5339\u914D-\u6839\u636E\u540C\u6B65\u5173\u8054ID\u5206\u9875\u67E5\u8BE2",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "page": 1,           // \u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
    "pageSize": 10,      // \u9875\u5927\u5C0F\uFF0CInteger\uFF0C\u5FC5\u4F20
    "sortType": "ASC",   // \u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "slId": "id1"        // \u540C\u6B65\u5173\u8054ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"totalSize\\":30,\\"totalPage\\":3,\\"pageSize\\":10,\\"page\\":1,\\"socDataIden\\":\\"source1\\",\\"socDataSchemaIden\\":\\"schema1\\",\\"desiDataIden\\":\\"target1\\",\\"desiDataSchemaIden\\":\\"targetSchema1\\",\\"list\\":[{\\"slmId\\":\\"slmId1\\",\\"socDataItemIden\\":\\"sourceItemIden\\",\\"socDataItemIdenName\\":\\"sourceItemName\\",\\"desiDataItemIden\\":\\"targetItemIden\\",\\"desiDataItemIdenName\\":\\"targetItemName\\",\\"remark\\":\\"remark1\\",\\"timestampSs\\":\\"2024-01-01\\",\\"slId\\":\\"id1\\",\\"desiSort\\":\\"1\\"}]}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "totalSize": 30, // \u603B\u8BB0\u5F55\u6570
    "totalPage": 3, // \u603B\u9875\u6570
    "pageSize": 10, // \u6BCF\u9875\u5927\u5C0F
    "page": 1, // \u5F53\u524D\u9875\u7801
    "socDataIden": "source1", // \u6E90\u5934\u6570\u636E\u6E90
    "socDataSchemaIden": "schema1", // \u6E90\u5934\u6570\u636E\u6A21\u5F0F
    "desiDataIden": "target1", // \u76EE\u6807\u6570\u636E\u6E90
    "desiDataSchemaIden": "targetSchema1", // \u76EE\u6807\u6570\u636E\u6A21\u5F0F
    "list": [
        {
            "slmId": "slmId1",
            "socDataItemIden": "sourceItemIden",
            "socDataItemIdenName": "sourceItemName",
            "desiDataItemIden": "targetItemIden",
            "desiDataItemIdenName": "targetItemName",
            "remark": "remark1",
            "timestampSs": "2024-01-01",
            "slId": "id1",
            "desiSort": "1"
        }
    ]
}

 * \u6570\u636E\u5E93\u8868\u540D\uFF1ASYNCLINKMATCH
 *
 * \u9A7C\u5CF0\u5B57\u6BB5          | \u5BF9\u5E94\u7684\u6CE8\u91CA\u53CA\u4E3B\u952E/\u7A7A\u503C\u4FE1\u606F
 * -------------------|----------------------------------------------
 * slmId             | \u540C\u6B65\u5173\u8054\u5339\u914DID\uFF08\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
 * socDataItemIden   | \u6E90\u5934\u6570\u636E\u9879\u8BC6\u522B\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
 * socDataItemIdenName| \u6E90\u5934\u6570\u636E\u9879\u540D\u79F0\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
 * desiDataItemIden  | \u76EE\u6807\u6570\u636E\u9879\u8BC6\u522B\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
 * desiDataItemIdenName| \u76EE\u6807\u6570\u636E\u9879\u540D\u79F0\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
 * remark            | \u5907\u6CE8\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
 * timestampSs       | \u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
 * slId              | \u540C\u6B65\u5173\u8054ID\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
 * desiSort          | \u76EE\u6807\u6570\u636E\u9879\u987A\u5E8F\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u540C\u6B65\u5173\u8054\u5339\u914D",name:"PostGetsynclinkmatchbyidpager",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetSyncLinkMatchByIdPager"}]},{group:"\u540C\u6B65\u5173\u8054\u5339\u914D",type:"post",url:"GetSyncLinkMatchPager",title:"\u540C\u6B65\u5173\u8054\u5339\u914D-\u540C\u6B65\u5173\u8054\u5E26\u6761\u4EF6\u5206\u9875\u67E5\u8BE2",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "page": 1,           // \u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
    "pageSize": 10,      // \u9875\u5927\u5C0F\uFF0CInteger\uFF0C\u5FC5\u4F20
    "sortType": "ASC",   // \u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "socDataIden": "",   // \u6E90\u5934\u6570\u636E\u6E90\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "socDataSchemaIden": "", // \u6E90\u5934\u6570\u636E\u6A21\u5F0F\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "desiDataIden": "",  // \u76EE\u6807\u6570\u636E\u6E90\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "desiDataSchemaIden": "", // \u76EE\u6807\u6570\u636E\u6A21\u5F0F\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "socDataItemIden": "", // \u6E90\u5934\u6570\u636E\u9879\u8BC6\u522B\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "socDataItemIdenName": "", // \u6E90\u5934\u6570\u636E\u9879\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "desiDataItemIden": "", // \u76EE\u6807\u6570\u636E\u9879\u8BC6\u522B\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "desiDataItemIdenName": "", // \u76EE\u6807\u6570\u636E\u9879\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "syncClass": ""      // \u540C\u6B65\u5206\u7C7B\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u7CBE\u786E\u5339\u914D
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"totalSize\\":30,\\"totalPage\\":3,\\"pageSize\\":10,\\"page\\":1,\\"list\\":[{\\"slmId\\":\\"slmId1\\",\\"socDataItemIden\\":\\"sourceItemIden\\",\\"socDataItemIdenName\\":\\"sourceItemName\\",\\"desiDataItemIden\\":\\"targetItemIden\\",\\"desiDataItemIdenName\\":\\"targetItemName\\",\\"remark\\":\\"remark1\\",\\"timestampSs\\":\\"2024-01-01\\",\\"slId\\":\\"id1\\",\\"desiSort\\":\\"1\\"}]}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "totalSize": 30,
    "totalPage": 3,
    "pageSize": 10,
    "page": 1,
    "list": [
        {
            "slmId": "slmId1",
            "socDataItemIden": "sourceItemIden",
            "socDataItemIdenName": "sourceItemName",
            "desiDataItemIden": "targetItemIden",
            "desiDataItemIdenName": "targetItemName",
            "remark": "remark1",
            "timestampSs": "2024-01-01",
            "slId": "id1",
            "desiSort": "1"
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u540C\u6B65\u5173\u8054\u5339\u914D",name:"PostGetsynclinkmatchpager",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetSyncLinkMatchPager"}]},{group:"\u540C\u6B65\u5173\u8054\u5339\u914D",type:"post",url:"UpdateSyncLinkMatch",title:"\u540C\u6B65\u5173\u8054\u5339\u914D-\u5355\u4E2A\u4FEE\u6539",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "slId": "id1", // \u540C\u6B65\u5173\u8054ID\uFF0CString\uFF0C\u5FC5\u4F20
    "slmId": "newSlmId",// \u540C\u6B65\u5173\u8054\u5339\u914DID\uFF0CString\uFF0C\u5FC5\u4F20
    "remark": "updated remark", // \u5907\u6CE8\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u5176\u4ED6\u4E1A\u52A1\u5B57\u6BB5\u4E5F\u662F\uFF0C\u6539\u4EC0\u4E48\uFF0C\u4F20\u4EC0\u4E48\uFF0C\u6E90\u5934\u6570\u636E\u9879\u8BC6\u522B\u548C\u76EE\u6807\u6570\u636E\u9879\u8BC6\u522B\u4E0D\u80FD\u4FEE\u6539
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\"slmId\\":\\"slmId1\\",\\"slId\\":\\"id1\\",\\"socDataItemIden\\":\\"sourceItemIden\\",\\"socDataItemIdenName\\":\\"sourceItemName\\",\\"desiDataItemIden\\":\\"targetItemIden\\",\\"desiDataItemIdenName\\":\\"targetItemName\\",\\"remark\\":\\"updated remark\\",\\"timestampSs\\":\\"2024-01-01\\",\\"desiSort\\":\\"2\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "slmId": "slmId1",
    "slId": "id1",
    "socDataItemIden": "sourceItemIden",
    "socDataItemIdenName": "sourceItemName",
    "desiDataItemIden": "targetItemIden",
    "desiDataItemIdenName": "targetItemName",
    "remark": "updated remark",
    "timestampSs": "2024-01-01",
    "desiSort": "2"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u540C\u6B65\u5173\u8054\u5339\u914D",name:"PostUpdatesynclinkmatch",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/UpdateSyncLinkMatch"}]},{group:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",type:"post",url:"CustomAnalysisTemplate/Add",title:"\u65B0\u589E\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "names": "\u6A21\u72481",           // \u5FC5\u4F20
        "tmpClass": "\u4E1A\u52A1\u5206\u7C7B1",    // \u53EF\u9009\uFF0C\u677E\u6563\u5206\u7C7B\u76F4\u63A5\u5BBF\u4E3B\u5230\u5B57\u6BB5
        "dataClass": "\u6587\u672C",       // \u53EF\u9009\uFF0C\u53EF\u9009\u503C\uFF1A\u8BB0\u5F55/\u6587\u672C/\u56FE\u7247/\u97F3\u9891/\u89C6\u9891
        "data2Sub": "\u4E3B\u6570\u636E",      // \u53EF\u9009\uFF0C\u53EF\u9009\u503C\uFF1A\u4E3B\u6570\u636E/\u7D20\u6750
        "remark": "\u5907\u6CE8\u8BF4\u660E"       // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "catId": "catId1",
        "names": "\u6A21\u72481",
        "tmpClass": "\u4E1A\u52A1\u5206\u7C7B1",
        "dataClass": "\u6587\u672C",
        "data2Sub": "\u4E3B\u6570\u636E",
        "createTime": "20240108110334",
        "remark": "\u5907\u6CE8\u8BF4\u660E",
        "timestampss": "20240108110334"
    },
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",name:"PostCustomanalysistemplateAdd",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomAnalysisTemplate/Add"}]},{group:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",type:"post",url:"CustomAnalysisTemplate/Delete",title:"\u5220\u9664\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": ["catId1", "catId2"]   // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\u5217\u8868\uFF09
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",name:"PostCustomanalysistemplateDelete",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomAnalysisTemplate/Delete"}]},{group:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",type:"post",url:"CustomAnalysisTemplate/GetAllBusinessTypes",title:"\u83B7\u53D6\u6240\u6709\u4E1A\u52A1\u5206\u7C7B",success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": ["\u4E1A\u52A1\u5206\u7C7B1", "\u4E1A\u52A1\u5206\u7C7B2", "\u4E1A\u52A1\u5206\u7C7B3"],
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",name:"PostCustomanalysistemplateGetallbusinesstypes",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomAnalysisTemplate/GetAllBusinessTypes"}]},{group:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",type:"post",url:"CustomAnalysisTemplate/Modify",title:"\u4FEE\u6539\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "catId": "catId1",         // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
        "tmpClass": "\u4E1A\u52A1\u5206\u7C7B2",    // \u53EF\u9009\uFF0C\u677E\u6563\u5206\u7C7B\u76F4\u63A5\u5BBF\u4E3B\u5230\u5B57\u6BB5
        "dataClass": "\u56FE\u7247",       // \u53EF\u9009\uFF0C\u53EF\u9009\u503C\uFF1A\u8BB0\u5F55/\u6587\u672C/\u56FE\u7247/\u97F3\u9891/\u89C6\u9891
        "data2Sub": "\u7D20\u6750",        // \u53EF\u9009\uFF0C\u53EF\u9009\u503C\uFF1A\u4E3B\u6570\u636E/\u7D20\u6750
        "remark": "\u66F4\u65B0\u7684\u5907\u6CE8"     // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "catId": "catId1",
        "names": "\u6A21\u72481",
        "tmpClass": "\u4E1A\u52A1\u5206\u7C7B2",
        "dataClass": "\u56FE\u7247",
        "data2Sub": "\u7D20\u6750",
        "createTime": "20240108110334",
        "remark": "\u66F4\u65B0\u7684\u5907\u6CE8",
        "timestampss": "20240108110334"
    },
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",name:"PostCustomanalysistemplateModify",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomAnalysisTemplate/Modify"}]},{group:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",type:"post",url:"CustomAnalysisTemplate/PageQueryTemplate",title:"\u5206\u9875\u67E5\u8BE2\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "page": 1,           // \u5FC5\u4F20
        "pageSize": 10,           // \u5FC5\u4F20
        "sortType": "DESC",       // \u5FC5\u4F20
        "names": "\u6A21\u7248",          // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
        "tmpClass": "\u4E1A\u52A1\u5206\u7C7B1",   // \u53EF\u9009
        "dataClass": "\u6587\u672C"       // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "pageSize": 10,
        "page": 1,
        "totalSize": 100,
        "totalPage": 10,
        "list": [{
            "catId": "catId1",
            "names": "\u6A21\u72481",
            "tmpClass": "\u4E1A\u52A1\u5206\u7C7B1",
            "dataClass": "\u6587\u672C",
            "data2Sub": "\u4E3B\u6570\u636E",
            "createTime": "20240108110334",
            "remark": "\u5907\u6CE8\u8BF4\u660E",
            "timestampss": "20240108110334",
            "OPFlag": "M"
        }]
    },
    "RespSuccessInfo": "successStr",
    "TottleRecords": "100"
}
| \u5C5E\u6027\u540D      | \u7C7B\u578B    | \u6CE8\u91CA                                                                                     |
|-------------|---------|------------------------------------------------------------------------------------------|
| catId       | String  | \u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248ID                                                                         |
| names       | String  | \u540D\u79F0                                                                                     |
| tmpClass    | String  | \u4E1A\u52A1\u5206\u7C7B<br>\u677E\u6563\u5206\u7C7B\u76F4\u63A5\u5BBF\u4E3B\u5230\u5B57\u6BB5                                                       |
| dataClass   | String  | \u6570\u636E\u7C7B\u578B<br>\u8BB0\u5F55\u3001\u6587\u672C\u3001\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891                                                 |
| data2Sub    | String  | \u4E3B\u7D20\u8BC6\u522B<br>\u53EF\u9009\u503C\uFF1A\u4E3B\u6570\u636E\u3001\u7D20\u6750                                                         |
| createTime  | String  | \u521B\u5EFA\u65F6\u95F4                                                                                 |
| remark      | String  | \u5907\u6CE8                                                                                     |
| OPFlag      | String  | \u64CD\u4F5C\u6807\u8BC6\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0C\u65B0\u589EI\uFF0C\u4FEE\u6539M\uFF0C\u5220\u9664D\uFF09                                                 |
| timestampss | String  | \u65F6\u95F4\u6233                                                                                    |`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",name:"PostCustomanalysistemplatePagequerytemplate",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomAnalysisTemplate/PageQueryTemplate"}]},{group:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",type:"post",url:"CustomAnalysisTemplate/QueryTemplate",title:"\u67E5\u8BE2\u5355\u4E2A\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "catId": "catId1"    // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "catId": "catId1",
        "names": "\u6A21\u72481",
        "tmpClass": "\u4E1A\u52A1\u5206\u7C7B1",
        "dataClass": "\u6587\u672C",
        "data2Sub": "\u4E3B\u6570\u636E",
        "createTime": "20240108110334",
        "remark": "\u5907\u6CE8\u8BF4\u660E",
        "timestampss": "20240108110334",
        "OPFlag": "M"
    },
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248",name:"PostCustomanalysistemplateQuerytemplate",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomAnalysisTemplate/QueryTemplate"}]},{group:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6",type:"post",url:"CustomAnalysisTemplateDetail/Add",title:"\u65B0\u589E\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "catId": "catId1",           // \u5FC5\u4F20\uFF08\u5916\u952E\uFF09
        "idenItemCode": "CODE001",   // \u5FC5\u4F20
        "idenItemValue": "\u5185\u5BB91",    // \u53EF\u9009
        "remark": "\u5907\u6CE8\u8BF4\u660E"         // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "catdId": "detailId1",
        "catId": "catId1",
        "idenItemCode": "CODE001",
        "idenItemValue": "\u5185\u5BB91",
        "remark": "\u5907\u6CE8\u8BF4\u660E",
        "timestampss": "20240108110334"
    },
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomAnalysisTemplateDetailController.java",groupTitle:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6",name:"PostCustomanalysistemplatedetailAdd",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomAnalysisTemplateDetail/Add"}]},{group:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6",type:"post",url:"CustomAnalysisTemplateDetail/Delete",title:"\u5220\u9664\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": ["detailId1", "detailId2"]   // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\u5217\u8868\uFF09
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomAnalysisTemplateDetailController.java",groupTitle:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6",name:"PostCustomanalysistemplatedetailDelete",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomAnalysisTemplateDetail/Delete"}]},{group:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6",type:"post",url:"CustomAnalysisTemplateDetail/Modify",title:"\u4FEE\u6539\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "catdId": "detailId1",      // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
        "idenItemValue": "\u66F4\u65B0\u7684\u5185\u5BB9", // \u53EF\u9009
        "remark": "\u66F4\u65B0\u7684\u5907\u6CE8"       // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "catdId": "detailId1",
        "catId": "catId1",
        "idenItemCode": "CODE001",
        "idenItemValue": "\u66F4\u65B0\u7684\u5185\u5BB9",
        "remark": "\u66F4\u65B0\u7684\u5907\u6CE8",
        "timestampss": "20240108110334"
    },
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomAnalysisTemplateDetailController.java",groupTitle:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6",name:"PostCustomanalysistemplatedetailModify",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomAnalysisTemplateDetail/Modify"}]},{group:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6",type:"post",url:"CustomAnalysisTemplateDetail/QueryById",title:"\u6839\u636E\u660E\u7EC6ID\u67E5\u8BE2",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "catdId": "detailId1"    // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "catdId": "detailId1",
        "catId": "catId1",
        "idenItemCode": "CODE001",
        "idenItemValue": "\u5185\u5BB91",
        "remark": "\u5907\u6CE8\u8BF4\u660E",
        "timestampss": "20240108110334",
        "OPFlag": "M"
    },
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomAnalysisTemplateDetailController.java",groupTitle:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6",name:"PostCustomanalysistemplatedetailQuerybyid",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomAnalysisTemplateDetail/QueryById"}]},{group:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6",type:"post",url:"CustomAnalysisTemplateDetail/QueryByTemplateId",title:"\u6839\u636E\u6A21\u7248ID\u67E5\u8BE2\u660E\u7EC6\u5217\u8868",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
            "page": 1,           // \u5FC5\u4F20
        "pageSize": 10,           // \u5FC5\u4F20
        "sortType": "DESC",       // \u5FC5\u4F20
        "catId": "catId1"    // \u5FC5\u4F20\uFF08\u5916\u952E\uFF09
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas":
    {
    "totalSize": 30, // \u603B\u8BB0\u5F55\u6570
    "totalPage": 3, // \u603B\u9875\u6570
    "pageSize": 10, // \u6BCF\u9875\u5927\u5C0F
    "page": 1, // \u5F53\u524D\u9875\u7801
    "list": [{
              "catdId": "detailId1",
              "catId": "catId1",
              "idenItemCode": "CODE001",
              "idenItemValue": "\u5185\u5BB91",
              "remark": "\u5907\u6CE8\u8BF4\u660E",
              "timestampss": "20240108110334",
              "OPFlag": "M"
          }]
     },
    "RespSuccessInfo": "successStr",
    "TottleRecords": "1"
}
| \u5C5E\u6027\u540D          | \u7C7B\u578B    | \u6CE8\u91CA                                                                                     |
|-----------------|---------|------------------------------------------------------------------------------------------|
| catdId          | String  | \u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6ID                                                                     |
| catId           | String  | \u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248                                                                           |
| idenItemCode    | String  | \u8BC6\u522B\u9879\u6807\u8BC6                                                                               |
| idenItemValue   | String  | \u8BC6\u522B\u9879\u5185\u5BB9                                                                               |
| remark          | String  | \u5907\u6CE8                                                                                     |
| timestampss     | String  | \u65F6\u95F4\u6233                                                                                    |
| OPFlag          | String  | \u64CD\u4F5C\u6807\u8BC6\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0C\u65B0\u589EI\uFF0C\u4FEE\u6539M\uFF0C\u5220\u9664D\uFF09                                                 |`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomAnalysisTemplateDetailController.java",groupTitle:"\u5BA2\u6237\u5316\u5206\u6790\u6A21\u7248\u660E\u7EC6",name:"PostCustomanalysistemplatedetailQuerybytemplateid",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomAnalysisTemplateDetail/QueryByTemplateId"}]},{group:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",type:"post",url:"CustomLogicAnalysisTemplate/Add",title:"\u65B0\u589E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "names": "\u6A21\u677F\u540D\u79F0", // String\uFF0C\u5FC5\u4F20
    "logicIden": "\u903B\u8F91\u8BC6\u522B", // String\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"id\\":\\"id1\\",\\"name\\":\\"\u6A21\u677F\u540D\u79F0\\",\\"businessType\\":\\"\u4E1A\u52A1\u5206\u7C7B\\",\\"dataType\\":\\"\u6570\u636E\u7C7B\u578B\\",\\"remark\\":\\"\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "cltId": "id1",
    "names": "\u6A21\u677F\u540D\u79F0",
    "tmpClass": "\u4E1A\u52A1\u5206\u7C7B",
    "logicIden": "\u903B\u8F91\u8BC6\u522B"
    "dataClass": "\u6570\u636E\u7C7B\u578B",
    "remark": "\u5907\u6CE8",
    "timestampSs": "2024-11-28 11:43:02"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomLogicAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",name:"PostCustomlogicanalysistemplateAdd",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomLogicAnalysisTemplate/Add"}]},{group:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",type:"post",url:"CustomLogicAnalysisTemplate/Delete",title:"\u5220\u9664",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`[
    "cltId1","cltId12"
]`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomLogicAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",name:"PostCustomlogicanalysistemplateDelete",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomLogicAnalysisTemplate/Delete"}]},{group:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",type:"post",url:"CustomLogicAnalysisTemplate/GetAllDataClass",title:"\u67E5\u8BE2\u6240\u6709\u6570\u636E\u7C7B\u578B",success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\"\u8BB0\u5F55\\",\\"\u6587\u672C\\",\\"\u56FE\u7247\\",\\"\u97F3\u9891\\",\\"\u89C6\u9891\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
["\u8BB0\u5F55", "\u6587\u672C", "\u56FE\u7247", "\u97F3\u9891", "\u89C6\u9891"]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomLogicAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",name:"PostCustomlogicanalysistemplateGetalldataclass",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomLogicAnalysisTemplate/GetAllDataClass"}]},{group:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",type:"post",url:"CustomLogicAnalysisTemplate/GetAllIdentificationTypes",title:"\u67E5\u8BE2\u6240\u6709\u4E3B\u7D20\u8BC6\u522B",success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\"\u4E3B\u6570\u636E\\",\\"\u7D20\u6750\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
["\u4E3B\u6570\u636E", "\u7D20\u6750"]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomLogicAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",name:"PostCustomlogicanalysistemplateGetallidentificationtypes",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomLogicAnalysisTemplate/GetAllIdentificationTypes"}]},{group:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",type:"post",url:"CustomLogicAnalysisTemplate/GetAllTmpClass",title:"\u67E5\u8BE2\u6240\u6709\u4E1A\u52A1\u5206\u7C7B",success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\"\u7C7B\u578B1\\",\\"\u7C7B\u578B2\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
["\u7C7B\u578B1", "\u7C7B\u578B2"]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomLogicAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",name:"PostCustomlogicanalysistemplateGetalltmpclass",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomLogicAnalysisTemplate/GetAllTmpClass"}]},{group:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",type:"post",url:"CustomLogicAnalysisTemplate/GetDetail",title:"\u67E5\u8BE2\u8BE6\u60C5",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "cltId": "\u4E3B\u952EID" // String\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{...}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "cltId": "id1", // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248ID\uFF0CString
    "names": "\u6A21\u677F\u540D\u79F0", // \u540D\u79F0\uFF0CString
    "tmpClass": "\u4E1A\u52A1\u5206\u7C7B", // \u4E1A\u52A1\u5206\u7C7B,\u677E\u6563\u5206\u7C7B\u76F4\u63A5\u5BBF\u4E3B\u5230\u5B57\u6BB5\uFF0CString
    "dataClass": "\u8BB0\u5F55", // \u6570\u636E\u7C7B\u578B,\u8BB0\u5F55\u3001\u6587\u672C\u3001\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891\uFF0CString
    "data2Sub": "\u4E3B\u6570\u636E", // \u4E3B\u7D20\u8BC6\u522B,\u53EF\u9009\u503C\uFF1A\u4E3B\u6570\u636E\u3001\u7D20\u6750\uFF0CString
    "createTime": "2024-11-28 11:43:02", // \u521B\u5EFA\u65F6\u95F4\uFF0CString
    "remark": "\u5907\u6CE8", // \u5907\u6CE8\uFF0CString
    "timestampSs": "2024-11-28 11:43:02", // \u65F6\u95F4\u6233\uFF0CString
    "logicIden": "HLS00w", // \u903B\u8F91\u6807\u8BC6\uFF0CString
    "OPFlag": "A" // \u64CD\u4F5C\u6807\u8BC6\uFF0CString\uFF0CA-\u65B0\u589E\uFF0CM-\u4FEE\u6539\uFF0CD-\u5220\u9664
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomLogicAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",name:"PostCustomlogicanalysistemplateGetdetail",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomLogicAnalysisTemplate/GetDetail"}]},{group:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",type:"post",url:"CustomLogicAnalysisTemplate/GetPager",title:"\u5E26\u6761\u4EF6\u5206\u9875\u67E5\u8BE2",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "page": 1, // \u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
    "pageSize": 10, // \u9875\u5927\u5C0F\uFF0CInteger\uFF0C\u5FC5\u4F20
    "sortType": "ASC", // \u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "names": "\u6A21\u677F\u540D\u79F0", // \u540D\u79F0\uFF08\u6A21\u7CCA\u5339\u914D\uFF09\uFF0CString\uFF0C\u9009\u4F20
    "tmpClass": "\u4E1A\u52A1\u5206\u7C7B", // \u4E1A\u52A1\u5206\u7C7B\uFF08\u51C6\u786E\u5339\u914D\uFF09\uFF0CString\uFF0C\u9009\u4F20
    "dataClass": "\u6570\u636E\u7C7B\u578B" // \u6570\u636E\u7C7B\u578B\uFF08\u51C6\u786E\u5339\u914D\uFF09\uFF0CString\uFF0C\u9009\u4F20
    "logicIden": "HLS00w", // \u6570\u636E\u7C7B\u578B\uFF08\u51C6\u786E\u5339\u914D\uFF09\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"totalSize\\":30,\\"totalPage\\":3,\\"pageSize\\":10,\\"page\\":1,\\"list\\":[{...}]}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "totalSize": 30,
    "totalPage": 3,
    "pageSize": 10,
    "page": 1,
    "list": [
        {
            "cltId": "id1", // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248ID\uFF0CString
            "names": "\u6A21\u677F\u540D\u79F0", // \u540D\u79F0\uFF0CString
            "tmpClass": "\u4E1A\u52A1\u5206\u7C7B", // \u4E1A\u52A1\u5206\u7C7B,\u677E\u6563\u5206\u7C7B\u76F4\u63A5\u5BBF\u4E3B\u5230\u5B57\u6BB5\uFF0CString
            "dataClass": "\u8BB0\u5F55", // \u6570\u636E\u7C7B\u578B,\u8BB0\u5F55\u3001\u6587\u672C\u3001\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891\uFF0CString
            "data2Sub": "\u4E3B\u6570\u636E", // \u4E3B\u7D20\u8BC6\u522B,\u53EF\u9009\u503C\uFF1A\u4E3B\u6570\u636E\u3001\u7D20\u6750\uFF0CString
            "createTime": "2024-11-28 11:43:02", // \u521B\u5EFA\u65F6\u95F4\uFF0CString
            "remark": "\u5907\u6CE8", // \u5907\u6CE8\uFF0CString
            "timestampSs": "2024-11-28 11:43:02", // \u65F6\u95F4\u6233\uFF0CString
            "logicIden": "HLS00w", // \u903B\u8F91\u6807\u8BC6\uFF0CString
            "OPFlag": "A" // \u64CD\u4F5C\u6807\u8BC6\uFF0CString\uFF0CA-\u65B0\u589E\uFF0CM-\u4FEE\u6539\uFF0CD-\u5220\u9664
        }
    ]
}

totalSize\uFF1A\u603B\u6570\u636E\u91CF\uFF0CInteger
totalPage\uFF1A\u603B\u9875\u6570\uFF0CInteger
pageSize\uFF1A\u6BCF\u9875\u6570\u636E\u91CF\uFF0CInteger
page\uFF1A\u5F53\u524D\u9875\u7801\uFF0CInteger
\u6570\u636E\u5E93\u8868\u540D\uFF1ACUSTOMLOGICTPL / \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248

\u9A7C\u5CF0\u5B57\u6BB5      | \u5BF9\u5E94\u7684\u6CE8\u91CA\u53CA\u4E3B\u952E/\u7A7A\u503C\u4FE1\u606F
--------------|----------------------------------------------
cltId        | \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248ID\uFF08\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
names        | \u540D\u79F0\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
tmpClass     | \u4E1A\u52A1\u5206\u7C7B,\u677E\u6563\u5206\u7C7B\u76F4\u63A5\u5BBF\u4E3B\u5230\u5B57\u6BB5\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
dataClass    | \u6570\u636E\u7C7B\u578B,\u8BB0\u5F55\u3001\u6587\u672C\u3001\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
data2Sub     | \u4E3B\u7D20\u8BC6\u522B,\u53EF\u9009\u503C\uFF1A\u4E3B\u6570\u636E\u3001\u7D20\u6750\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
createTime   | \u521B\u5EFA\u65F6\u95F4\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
remark       | \u5907\u6CE8\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
logicIden    | \u903B\u8F91\u6807\u8BC6\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
timestampSs  | \u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomLogicAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",name:"PostCustomlogicanalysistemplateGetpager",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomLogicAnalysisTemplate/GetPager"}]},{group:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",type:"post",url:"CustomLogicAnalysisTemplate/Update",title:"\u4FEE\u6539",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "cltId": "\u4E3B\u952EID", // String\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"id\\":\\"id1\\",\\"name\\":\\"\u6A21\u677F\u540D\u79F0\\",\\"businessType\\":\\"\u4E1A\u52A1\u5206\u7C7B\\",\\"dataType\\":\\"\u6570\u636E\u7C7B\u578B\\",\\"remark\\":\\"\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "cltId": "id1",
    "names": "\u6A21\u677F\u540D\u79F0",
    "tmpClass": "\u4E1A\u52A1\u5206\u7C7B",
    "dataClass": "\u6570\u636E\u7C7B\u578B",
    "remark": "\u5907\u6CE8",
    "timestampSs": "2024-11-28 11:43:02"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomLogicAnalysisTemplateController.java",groupTitle:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F",name:"PostCustomlogicanalysistemplateUpdate",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomLogicAnalysisTemplate/Update"}]},{group:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F\u660E\u7EC6",type:"post",url:"CustomLogicAnalysisTemplateDetail/Add",title:"\u65B0\u589E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "cltId": "CLT001", // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248ID\uFF0CString\uFF0C\u5FC5\u4F20
    "idenItemCode": "CODE001", // \u8BC6\u522B\u9879\u6807\u8BC6\uFF0CString\uFF0C\u5FC5\u4F20
    "remark": "\u5907\u6CE8" // \u5907\u6CE8\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{...}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "cltdId": "CLTD001", // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248\u660E\u7EC6ID\uFF0CString
    "cltId": "CLT001", // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248ID\uFF0CString
    "idenItemCode": "CODE001", // \u8BC6\u522B\u9879\u6807\u8BC6\uFF0CString
    "idenItemValue": "VALUE001", // \u8BC6\u522B\u9879\u5185\u5BB9\uFF0CString
    "remark": "\u5907\u6CE8", // \u5907\u6CE8\uFF0CString
    "timestampSs": "2024-11-28 11:43:02", // \u65F6\u95F4\u6233\uFF0CString
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomLogicAnalysisTemplateDetailController.java",groupTitle:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F\u660E\u7EC6",name:"PostCustomlogicanalysistemplatedetailAdd",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomLogicAnalysisTemplateDetail/Add"}]},{group:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F\u660E\u7EC6",type:"post",url:"CustomLogicAnalysisTemplateDetail/Delete",title:"\u5220\u9664",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`[
    "CLTD001","CLTD002"
]`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomLogicAnalysisTemplateDetailController.java",groupTitle:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F\u660E\u7EC6",name:"PostCustomlogicanalysistemplatedetailDelete",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomLogicAnalysisTemplateDetail/Delete"}]},{group:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F\u660E\u7EC6",type:"post",url:"CustomLogicAnalysisTemplateDetail/GetDetail",title:"\u67E5\u8BE2\u8BE6\u60C5",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "cltdId": "CLTD001" // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248\u660E\u7EC6ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{...}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "cltdId": "CLTD001", // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248\u660E\u7EC6ID\uFF0CString
    "cltId": "CLT001", // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248ID\uFF0CString
    "idenItemCode": "CODE001", // \u8BC6\u522B\u9879\u6807\u8BC6\uFF0CString
    "idenItemValue": "VALUE001", // \u8BC6\u522B\u9879\u5185\u5BB9\uFF0CString
    "remark": "\u5907\u6CE8", // \u5907\u6CE8\uFF0CString
    "timestampSs": "2024-11-28 11:43:02", // \u65F6\u95F4\u6233\uFF0CString
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomLogicAnalysisTemplateDetailController.java",groupTitle:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F\u660E\u7EC6",name:"PostCustomlogicanalysistemplatedetailGetdetail",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomLogicAnalysisTemplateDetail/GetDetail"}]},{group:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F\u660E\u7EC6",type:"post",url:"CustomLogicAnalysisTemplateDetail/GetPager",title:"\u5E26\u6761\u4EF6\u5206\u9875\u67E5\u8BE2",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "page": 1, // \u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
    "pageSize": 10, // \u9875\u5927\u5C0F\uFF0CInteger\uFF0C\u5FC5\u4F20
    "sortType": "ASC", // \u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "cltId": "CLT001", // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248ID\uFF08\u51C6\u786E\u5339\u914D\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"totalSize\\":30,\\"totalPage\\":3,\\"pageSize\\":10,\\"page\\":1,\\"list\\":[{...}]}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "totalSize": 30,
    "totalPage": 3,
    "pageSize": 10,
    "page": 1,
    "list": [
        {
            "cltdId": "CLTD001", // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248\u660E\u7EC6ID\uFF0CString
            "cltId": "CLT001", // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248ID\uFF0CString
            "idenItemCode": "CODE001", // \u8BC6\u522B\u9879\u6807\u8BC6\uFF0CString
            "idenItemValue": "VALUE001", // \u8BC6\u522B\u9879\u5185\u5BB9\uFF0CString
            "remark": "\u5907\u6CE8", // \u5907\u6CE8\uFF0CString
            "timestampSs": "2024-11-28 11:43:02", // \u65F6\u95F4\u6233\uFF0CString
        }
    ]
}
\u6570\u636E\u5E93\u8868\u540D\uFF1ACLTDETAIL / \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248\u660E\u7EC6

\u9A7C\u5CF0\u5B57\u6BB5          | \u5BF9\u5E94\u7684\u6CE8\u91CA\u53CA\u4E3B\u952E/\u7A7A\u503C\u4FE1\u606F
-------------------|----------------------------------------------
cltdId            | \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248\u660E\u7EC6ID\uFF08\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
cltId             | \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248\uFF08\u5916\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
idenItemCode      | \u8BC6\u522B\u9879\u6807\u8BC6\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
idenItemValue     | \u8BC6\u522B\u9879\u5185\u5BB9\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
remark            | \u5907\u6CE8\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
timestampSs       | \u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomLogicAnalysisTemplateDetailController.java",groupTitle:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F\u660E\u7EC6",name:"PostCustomlogicanalysistemplatedetailGetpager",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomLogicAnalysisTemplateDetail/GetPager"}]},{group:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F\u660E\u7EC6",type:"post",url:"CustomLogicAnalysisTemplateDetail/Update",title:"\u4FEE\u6539",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "cltdId": "CLTD001", // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248\u660E\u7EC6ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{...}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "cltdId": "CLTD001", // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248\u660E\u7EC6ID\uFF0CString
    "cltId": "CLT001", // \u5BA2\u6237\u5316\u903B\u8F91\u6A21\u7248ID\uFF0CString
    "idenItemCode": "CODE001", // \u8BC6\u522B\u9879\u6807\u8BC6\uFF0CString
    "idenItemValue": "VALUE001", // \u8BC6\u522B\u9879\u5185\u5BB9\uFF0CString
    "remark": "\u5907\u6CE8", // \u5907\u6CE8\uFF0CString
    "timestampSs": "2024-11-28 11:43:02", // \u65F6\u95F4\u6233\uFF0CString
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CustomLogicAnalysisTemplateDetailController.java",groupTitle:"\u5BA2\u6237\u5316\u903B\u8F91\u6A21\u677F\u660E\u7EC6",name:"PostCustomlogicanalysistemplatedetailUpdate",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CustomLogicAnalysisTemplateDetail/Update"}]},{group:"\u6570\u5B57\u5316\u76D1\u63A7-\u5F02\u5E38\u9884\u8B66",type:"post",url:"DigitalSurveillance/AddEarlyWarningDetail",title:"\u65B0\u589E\u5F02\u5E38\u9884\u8B66\u660E\u7EC6",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "eewId": "\u5F02\u5E38\u9884\u8B66ID" // \u5F02\u5E38\u9884\u8B66ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"eewdId\\":\\"\u9884\u8B66\u5904\u7406ID\\",\\"eewId\\":\\"\u5F02\u5E38\u9884\u8B66ID\\",\\"submitContent\\":\\"\u5904\u7406\u610F\u89C1\\",\\"filePath\\":\\"\u9644\u4EF6\u8DEF\u5F84\\",\\"fileFormat\\":\\"\u9644\u4EF6\u683C\u5F0F\\",\\"submitter\\":\\"\u5904\u7406\u4EBA\\",\\"submitTime\\":\\"\u5904\u7406\u65F6\u95F4\\",\\"remark\\":\\"\u5907\u6CE8\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "eewdId": "\u9884\u8B66\u5904\u7406ID",
    "eewId": "\u5F02\u5E38\u9884\u8B66ID",
    "submitContent": "\u5904\u7406\u610F\u89C1",
    "filePath": "\u9644\u4EF6\u8DEF\u5F84",
    "fileFormat": "\u9644\u4EF6\u683C\u5F0F",
    "submitter": "\u5904\u7406\u4EBA",
    "submitTime": "\u5904\u7406\u65F6\u95F4",
    "remark": "\u5907\u6CE8"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DigitalSurveillanceController.java",groupTitle:"\u6570\u5B57\u5316\u76D1\u63A7-\u5F02\u5E38\u9884\u8B66",name:"PostDigitalsurveillanceAddearlywarningdetail",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DigitalSurveillance/AddEarlyWarningDetail"}]},{group:"\u6570\u5B57\u5316\u76D1\u63A7-\u5F02\u5E38\u9884\u8B66",type:"post",url:"DigitalSurveillance/GetDigitalSurveillance",title:"\u67E5\u8BE2\u6570\u5B57\u5316\u76D1\u63A7\u4FE1\u606F",success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\n  \\"allSyncLinkInfo\\": [\\n    {\\n      \\"bizClass\\": \\"BizClass2\\",\\n      \\
    "currFinishTime\\": \\"2025-01-19 08:36:02\\",\\n      \\"fromSysNameSocDataSchemaIdenName\\": \\"Sy
    stem2-\u6A21\u5F0F_01\\",\\n      \\"sdcId\\": \\"SDC0001\\",\\n      \\"syncCount\\": \\"890.09582131945814665
    2756156370381413493\\",\\n      \\"targetSysNameDesiDataSchemaIdenName\\": \\"TargetSystem2-\u6A21\u5F0F_0
    2\\"\\n    }\\n  ],\\n  \\"allEarlyWarnings\\": [\\n    {\\n      \\"bizClass\\": \\"BizClass2\\",\\n
    \\"currState\\": \\"Over\\",\\n      \\"eewId\\": \\"EEW202501080020\\",\\n      \\"expClass\\": \\"Other
    Exp\\",\\n      \\"fromSysNameSocDataSchemaIdenName\\": \\"System2-\u6A21\u5F0F_01\\",\\n      \\"imporntLeve
    l\\": \\"1\\",\\n      \\"makeTime\\": \\"2025-01-09 10:53:44\\",\\n      \\"remark\\": \\"\u81EA\u52A8\u751F\u6210\u6570\u636E\u7B2C 2
    0 \u6761\\",\\n      \\"submitTime\\": \\"\\",\\n      \\"targetSysNameDesiDataSchemaIdenName\\": \\"Targe
    tSystem2-\u6A21\u5F0F_02\\",\\n      \\"timestampSs\\": \\"2025-01-08 14:53:44\\"\\n    }\\n  ],\\n  \\"allBizC
    lassInfo\\": [\\n    {\\n      \\"fromSysNameNum\\": 2,\\n      \\"bizClass\\": \\"BizClass1\\",\\n
    \\"targetSysNameNUm\\": 2\\n    }\\n  ],\\n  \\"allAuditExceptionsInfo\\": [\\n    {\\n      \\"arId\\":
    \\"AR002\\",\\n      \\"auditContents\\": \\"\u89E6\u53D1\u89C4\u5219\u660E\u7EC63\\",\\n      \\"pendingAuditContents\\": \\"\u5BA1\u6838\u5185
    \u5BB9\\",\\n      \\"bizClass\\": \\"BizClass2\\",\\n      \\"currResult\\": \\"D\\",\\n      \\"currState\\":
    \\"Ing\\",\\n      \\"fromSysNameSocDataSchemaIdenName\\": \\"System2-\u6A21\u5F0F_01\\",\\n      \\"makeTime\\
    ": \\"2024-12-26 16:01:55\\",\\n      \\"remark\\": \\"test\\",\\n      \\"ruleName\\": \\"\u89C4\u52192\\",\\n
    \\"targetSysNameDesiDataSchemaIdenName\\": \\"TargetSystem2-\u6A21\u5F0F_02\\"\\n    }\\n  ]\\n}",
    "RespErrorDatas": "",

    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
     //\u5F53\u524D\u540C\u6B65\u72B6\u6001
    "allSyncLinkInfo": [
        {
            "bizClass": "BizClass2",//\u4E1A\u52A1\u7C7B\u578B
            "currFinishTime": "2025-01-19 08:36:02",
            "fromSysNameSocDataSchemaIdenName": "System2-\u6A21\u5F0F_01",//\u6765\u6E90\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F
            "sdcId": "SDC0001",
            "syncCount": "890.095821319458146652756156370381413493",//\u5904\u7406\u6570\u91CF
            "targetSysNameDesiDataSchemaIdenName": "TargetSystem2-\u6A21\u5F0F_02"//\u76EE\u6807\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F
        }
    ],
     //\u5F02\u5E38\u9884\u8B66
    "allEarlyWarnings": [
        {
            "bizClass": "BizClass2",//\u4E1A\u52A1\u7C7B\u578B
            "currState": "Over",//\u5904\u7406\u72B6\u6001
            "eewId": "EEW202501080020",//\u5F02\u5E38\u9884\u8B66Id
            "expClass": "OtherExp",//\u5F02\u5E38\u5206\u7C7B
            "fromSysNameSocDataSchemaIdenName": "System2-\u6A21\u5F0F_01",//\u6765\u6E90\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F
            "imporntLevel": "1",//\u91CD\u8981\u7B49\u7EA7
            "makeTime": "2025-01-09 10:53:44",//\u53D1\u751F\u65F6\u95F4
            "remark": "\u81EA\u52A8\u751F\u6210\u6570\u636E\u7B2C 20 \u6761",//\u5904\u7406\u610F\u89C1
            "submitTime": "",//\u5904\u7406\u65F6\u95F4
            "targetSysNameDesiDataSchemaIdenName": "TargetSystem2-\u6A21\u5F0F_02",//\u76EE\u6807\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F
            "timestampSs": "2025-01-08 14:53:44"
        }
    ],
     //\u8986\u76D6\u4E1A\u52A1
    "allBizClassInfo": [
        {
            "fromSysNameNum": 2,//\u6765\u6E90\u7CFB\u7EDF\u6570\u91CF
            "bizClass": "BizClass1",//\u4E1A\u52A1\u7C7B\u578B
            "targetSysNameNUm": 2//\u76EE\u6807\u7CFB\u7EDF\u6570\u91CF
        }
    ],
     //\u5BA1\u6838\u9884\u8B66
    "allAuditExceptionsInfo": [
        {
            "aeId": "AR002",//\u5BA1\u6838\u5F02\u5E38Id
            "arId": "AR002",
            "auditContents": "\u89E6\u53D1\u89C4\u5219\u660E\u7EC63",//\u89C4\u5219\u660E\u7EC6
            "pendingAuditContents": "\u5BA1\u6838\u5185\u5BB9",//\u5F85\u5BA1\u6838\u5185\u5BB9
            "bizClass": "BizClass2",//\u4E1A\u52A1\u7C7B\u578B
            "currResult": "D",//\u5904\u7406\u7ED3\u679C
            "currState": "Ing",//\u5904\u7406\u72B6\u6001
            "fromSysNameSocDataSchemaIdenName": "System2-\u6A21\u5F0F_01",//\u6765\u6E90\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F
            "makeTime": "2024-12-26 16:01:55",//\u53D1\u751F\u65F6\u95F4
            "remark": "test",//\u5904\u7406\u610F\u89C1
            "ruleName": "\u89C4\u52192",//\u5BA1\u6838\u89C4\u5219
            "targetSysNameDesiDataSchemaIdenName": "TargetSystem2-\u6A21\u5F0F_02"//\u76EE\u6807\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F
        }
    ]
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DigitalSurveillanceController.java",groupTitle:"\u6570\u5B57\u5316\u76D1\u63A7-\u5F02\u5E38\u9884\u8B66",name:"PostDigitalsurveillanceGetdigitalsurveillance",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DigitalSurveillance/GetDigitalSurveillance"}]},{group:"\u6570\u5B57\u5316\u76D1\u63A7-\u5F02\u5E38\u9884\u8B66",type:"post",url:"DigitalSurveillance/GetEarlyWarningById",title:"\u67E5\u8BE2\u5F02\u5E38\u9884\u8B66",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "eewId": "\u5F02\u5E38\u9884\u8B66ID" // \u5F02\u5E38\u9884\u8B66ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"eewId\\":\\"\u5F02\u5E38\u9884\u8B66ID\\",\\"expClass\\":\\"\u5F02\u5E38\u5206\u7C7B\\",\\"currState\\":\\"\u5904\u7406\u72B6\u6001\\",\\"makeTime\\":\\"\u53D1\u751F\u65F6\u95F4\\",\\"submitTime\\":\\"\u5904\u7406\u65F6\u95F4\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "imporntLevel": "\u91CD\u8981\u7B49\u7EA7",
    "eewId": "\u5F02\u5E38\u9884\u8B66ID",
    "fromSysNameSocDataSchemaIdenName": "\u6765\u6E90\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F",
    "targetSysNameDesiDataSchemaIdenName": "\u76EE\u6807\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F",
    "expClass": "\u5F02\u5E38\u5206\u7C7B",
    "currState": "\u5904\u7406\u72B6\u6001",
    "remark": "\u5904\u7406\u610F\u89C1",
    "bizClass" : "\u4E1A\u52A1\u7C7B\u578B"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DigitalSurveillanceController.java",groupTitle:"\u6570\u5B57\u5316\u76D1\u63A7-\u5F02\u5E38\u9884\u8B66",name:"PostDigitalsurveillanceGetearlywarningbyid",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DigitalSurveillance/GetEarlyWarningById"}]},{group:"\u6570\u5B57\u5316\u76D1\u63A7-\u5F02\u5E38\u9884\u8B66",type:"post",url:"DigitalSurveillance/GetEarlyWarningDetails",title:"\u67E5\u8BE2\u6240\u6709\u5F02\u5E38\u9884\u8B66\u660E\u7EC6",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "eewId": "\u5F02\u5E38\u9884\u8B66ID" // \u5F02\u5E38\u9884\u8B66ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[{\\"eewdId\\":\\"\u9884\u8B66\u5904\u7406ID\\",\\"eewId\\":\\"\u5F02\u5E38\u9884\u8B66ID\\",\\"submitContent\\":\\"\u5904\u7406\u610F\u89C1\\",\\"filePath\\":\\"\u9644\u4EF6\u8DEF\u5F84\\",\\"fileFormat\\":\\"\u9644\u4EF6\u683C\u5F0F\\",\\"submitter\\":\\"\u5904\u7406\u4EBA\\",\\"submitTime\\":\\"\u5904\u7406\u65F6\u95F4\\",\\"remark\\":\\"\u5907\u6CE8\\"}]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "eewdId": "\u9884\u8B66\u5904\u7406ID",
    "eewId": "\u5F02\u5E38\u9884\u8B66ID",
    "submitContent": "\u5904\u7406\u610F\u89C1",
    "filePath": "\u9644\u4EF6\u8DEF\u5F84",
    "fileFormat": "\u9644\u4EF6\u683C\u5F0F",
    "submitter": "\u5904\u7406\u4EBA",
    "submitTime": "\u5904\u7406\u65F6\u95F4",
    "remark": "\u5907\u6CE8"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DigitalSurveillanceController.java",groupTitle:"\u6570\u5B57\u5316\u76D1\u63A7-\u5F02\u5E38\u9884\u8B66",name:"PostDigitalsurveillanceGetearlywarningdetails",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DigitalSurveillance/GetEarlyWarningDetails"}]},{group:"\u6570\u5B57\u5316\u76D1\u63A7-\u5F02\u5E38\u9884\u8B66",type:"post",url:"DigitalSurveillance/UpdateEarlyWarning",title:"\u4FEE\u6539\u5F02\u5E38\u9884\u8B66",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "eewId": "\u5F02\u5E38\u9884\u8B66ID" // \u5F02\u5E38\u9884\u8B66ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"eewId\\":\\"\u5F02\u5E38\u9884\u8B66ID\\",\\"expClass\\":\\"\u5F02\u5E38\u5206\u7C7B\\",\\"currState\\":\\"\u5904\u7406\u72B6\u6001\\",\\"makeTime\\":\\"\u53D1\u751F\u65F6\u95F4\\",\\"submitTime\\":\\"\u5904\u7406\u65F6\u95F4\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "imporntLevel": "\u91CD\u8981\u7B49\u7EA7",
    "eewId": "\u5F02\u5E38\u9884\u8B66ID",
    "fromSysNameSocDataSchemaIdenName": "\u6765\u6E90\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F",
    "targetSysNameDesiDataSchemaIdenName": "\u76EE\u6807\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F",
    "expClass": "\u5F02\u5E38\u5206\u7C7B",
    "currState": "\u5904\u7406\u72B6\u6001",
    "remark": "\u5904\u7406\u610F\u89C1",
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DigitalSurveillanceController.java",groupTitle:"\u6570\u5B57\u5316\u76D1\u63A7-\u5F02\u5E38\u9884\u8B66",name:"PostDigitalsurveillanceUpdateearlywarning",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DigitalSurveillance/UpdateEarlyWarning"}]},{group:"\u6570\u5B57\u5316\u76D1\u63A7",type:"post",url:"DigitalSurveillance/GetAllAuditExceptionsInfo",title:"\u67E5\u8BE2\u5BA1\u6838\u5F02\u5E38",success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[{\\"aeId\\":\\"AEID0001\\",\\"arId\\":\\"AR002\\",\\"auditContents\\":\\"\u89E6\u53D1\u89C4\u5219\u660E\u7EC61\\",\\"bizClass\\":\\"BizClass2\\",\\"currResult\\":\\"D\\",\\"currState\\":\\"Ing\\",\\"fromSysNameSocDataSchemaIdenName\\":\\"System2-\u6A21\u5F0F_01\\",\\"makeTime\\":\\"2024-12-26 16:01:55\\",\\"pendingAuditContents\\":\\"\u5BA1\u6838\u5185\u5BB9\\",\\"remark\\":\\"test\\",\\"ruleName\\":\\"\u89C4\u52192\\",\\"targetSysNameDesiDataSchemaIdenName\\":\\"TargetSystem2-\u6A21\u5F0F_02\\"}]\u201D
    "RespErrorDatas": "",

    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
[
             {
                 "arId": "AR002",
                 "auditContents": "\u89E6\u53D1\u89C4\u5219\u660E\u7EC63",//\u89C4\u5219\u660E\u7EC6
                 "pendingAuditContents": "\u5BA1\u6838\u5185\u5BB9",//\u5F85\u5BA1\u6838\u5185\u5BB9
                 "bizClass": "BizClass2",//\u4E1A\u52A1\u7C7B\u578B
                 "currResult": "D",//\u5904\u7406\u7ED3\u679C
                 "currState": "Ing",//\u5904\u7406\u72B6\u6001
                 "fromSysNameSocDataSchemaIdenName": "System2-\u6A21\u5F0F_01",//\u6765\u6E90\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F
                 "makeTime": "2024-12-26 16:01:55",//\u53D1\u751F\u65F6\u95F4
                 "remark": "test",//\u5904\u7406\u610F\u89C1
                 "ruleName": "\u89C4\u52192",//\u5BA1\u6838\u89C4\u5219
                 "targetSysNameDesiDataSchemaIdenName": "TargetSystem2-\u6A21\u5F0F_02"//\u76EE\u6807\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F
             }
         ]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DigitalSurveillanceController.java",groupTitle:"\u6570\u5B57\u5316\u76D1\u63A7",name:"PostDigitalsurveillanceGetallauditexceptionsinfo",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DigitalSurveillance/GetAllAuditExceptionsInfo"}]},{group:"\u6570\u5B57\u5316\u76D1\u63A7",type:"post",url:"DigitalSurveillance/GetAllBizClassInfo",title:"\u67E5\u8BE2\u8986\u76D6\u4E1A\u52A1",success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "",
    "RespErrorDatas": "[{\\"fromSysNameNum\\":2,\\"bizClass\\":\\"BizClass1\\",\\"targetSysNameNUm\\":2},{\\"fromSysNameNum\\":3,\\"bizClass\\":\\"BizClass2\\",\\"targetSysNameNUm\\":3},{\\"fromSysNameNum\\":3,\\"bizClass\\":\\"BizClass3\\",\\"targetSysNameNUm\\":3},{\\"fromSysNameNum\\":3,\\"bizClass\\":\\"BizClass4\\",\\"targetSysNameNUm\\":3},{\\"fromSysNameNum\\":2,\\"bizClass\\":\\"BizClass5\\",\\"targetSysNameNUm\\":2}]",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
[
             {
                 "fromSysNameNum": 2,//\u6765\u6E90\u7CFB\u7EDF\u6570\u91CF
                 "bizClass": "BizClass1",//\u4E1A\u52A1\u7C7B\u578B
                 "targetSysNameNUm": 2//\u76EE\u6807\u7CFB\u7EDF\u6570\u91CF
             }
         ]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DigitalSurveillanceController.java",groupTitle:"\u6570\u5B57\u5316\u76D1\u63A7",name:"PostDigitalsurveillanceGetallbizclassinfo",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DigitalSurveillance/GetAllBizClassInfo"}]},{group:"\u6570\u5B57\u5316\u76D1\u63A7",type:"post",url:"DigitalSurveillance/GetAllEarlyWarnings",title:"\u67E5\u8BE2\u5F02\u5E38\u9884\u8B66",success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    tate\\":\\"Ing\\",\\"eewId\\":\\"EEW202501080007\\",\\"expClass\\":\\"SyncExp
    \\",\\"fromSysNameSocDataSchemaIdenName\\":\\"System2-\u6A21\u5F0F_01\\",\\"imporntLevel\\"
    :\\"4\\",\\"makeTime\\":\\"2025-01-08 21:53:44\\",\\"remark\\":\\"\u81EA\u52A8\u751F\u6210\u6570\u636E\u7B2C 7 \u6761\\",
    \\"submitTime\\":\\"\\",\\"targetSysNameDesiDataSchemaIdenName\\":\\"TargetSystem2-
    \u6A21\u5F0F_02\\",\\"timestampSs\\":\\"2025-01-08 14:53:44\\"},{\\"bizClass\\":\\"BizClass2\\",
    \\"currState\\":\\"Add\\",\\"eewId\\":\\"EEW202501080006\\",\\"expClass\\":\\"WashExp\\",\\"fromS
    ysNameSocDataSchemaIdenName\\":\\"System2-\u6A21\u5F0F_01\\",\\"imporntLevel\\":\\"3\\",\\"makeTime\\]",
    "RespErrorDatas": "",

    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
[
             {
                 "bizClass": "BizClass2",//\u4E1A\u52A1\u7C7B\u578B
                 "currState": "Over",//\u5904\u7406\u72B6\u6001
                 "eewId": "EEW202501080020",
                 "expClass": "OtherExp",//\u5F02\u5E38\u5206\u7C7B
                 "fromSysNameSocDataSchemaIdenName": "System2-\u6A21\u5F0F_01",//\u6765\u6E90\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F
                 "imporntLevel": "1",//\u91CD\u8981\u7B49\u7EA7
                 "makeTime": "2025-01-09 10:53:44",//\u53D1\u751F\u65F6\u95F4
                 "remark": "\u81EA\u52A8\u751F\u6210\u6570\u636E\u7B2C 20 \u6761",//\u5904\u7406\u610F\u89C1
                 "submitTime": "",//\u5904\u7406\u65F6\u95F4
                 "targetSysNameDesiDataSchemaIdenName": "TargetSystem2-\u6A21\u5F0F_02",//\u76EE\u6807\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F
                 "timestampSs": "2025-01-08 14:53:44"
             }
         ]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DigitalSurveillanceController.java",groupTitle:"\u6570\u5B57\u5316\u76D1\u63A7",name:"PostDigitalsurveillanceGetallearlywarnings",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DigitalSurveillance/GetAllEarlyWarnings"}]},{group:"\u6570\u5B57\u5316\u76D1\u63A7",type:"post",url:"DigitalSurveillance/GetAllSyncLinkInfo",title:"\u67E5\u8BE2\u5F53\u524D\u540C\u6B65\u72B6\u6001",success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "",
    "RespErrorDatas": "[{\\"bizClass\\":\\"BizClass2\\",\\"currFinishTime\\":\\"2025-01-19 08:36:02\\",\\"fromSysNameSocDataSchemaIdenName\\":\\"System2-\u6A21\u5F0F_01\\",\\"sdcId\\":\\"SDC0001\\",\\"syncCount\\":\\"890.095821319458146652756156370381413493\\",\\"targetSy
    sNameDesiDataSchemaIdenName\\":\\"TargetSystem2-\u6A21\u5F0F_02\\"},{\\"bizClass\\":\\"BizClass3\\",\\"currFinishTime\\":\\"2025-01-19
    13:00:24\\",\\"fromSysNameSocDataSchemaIdenName\\":\\"System3-\\",\\"sdcId\\":\\"SDC0002\\",\\"syncCount\\":\\"775.04032175146420
    6337851706978175490189\\",\\"targetSysNameDesiDataSchemaIdenName\\":\\"TargetSystem3-\\"},{\\"bizClass\\":\\"BizClass4\\",\\"
    currFinishTime\\":\\"2025-01-16 21:19:02\\",\\"fromSysNameSocDataSchemaIdenName\\":\\"System1-\\",\\"sdcId\\":\\"SDC0003\\",\\
    "syncCount\\":\\"600.351806008749409827271976405060934292\\",\\"targetSysNameDesiDataSchemaIdenName\\":\\"TargetSystem1-
    \\"},{\\"bizClass\\":\\"BizClass1\\",\\"currFinishTime\\":\\"2025-01-14 22:19:04\\",\\"fromSysNameSocDataSchemaIdenName\\":\\
    "System2-\\",\\"sdcId\\":\\"SDC0004\\",\\"syncCount\\":\\"169.139977808020913731764118125312118036\\",\\"targetSysNameDesiD
    ataSchemaIdenName\\":\\"TargetSystem2-\\"},{\\"bizClass\\":\\"BizClass2\\",\\"currFinishTime\\":\\"2025-01-11 11:27:54\\",\\
    "fromSysNameSocDataSchemaIdenName\\":\\"System3-\\",\\"sdcId\\":\\"SDC0005\\",\\"syncCount\\":\\"972.6694794678593284673
    74894935937658746\\",\\"targetSysNameDesiDataSchemaIdenName\\":\\"TargetSystem3-\\"}]",

    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
[
             {
                 "bizClass": "BizClass2",//\u4E1A\u52A1\u7C7B\u578B
                 "currFinishTime": "2025-01-19 08:36:02",
                 "fromSysNameSocDataSchemaIdenName": "System2-\u6A21\u5F0F_01",//\u6765\u6E90\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F
                 "sdcId": "SDC0001",
                 "syncCount": "890.095821319458146652756156370381413493",//\u5904\u7406\u6570\u91CF
                 "targetSysNameDesiDataSchemaIdenName": "TargetSystem2-\u6A21\u5F0F_02"//\u76EE\u6807\u7CFB\u7EDF-\u6570\u636E\u6A21\u5F0F
             }
         ]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DigitalSurveillanceController.java",groupTitle:"\u6570\u5B57\u5316\u76D1\u63A7",name:"PostDigitalsurveillanceGetallsynclinkinfo",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DigitalSurveillance/GetAllSyncLinkInfo"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u5F02\u5E38",type:"post",url:"DataAudit/GetAllCurrResults",title:"\u67E5\u8BE2\u6240\u6709\u5904\u7406\u7ED3\u679C",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[{\\"currResult\\":\\"N\\",\\"currResultnName\\":\\"\u6B63\u5728\u5904\u7406\\"},{\\"currResult\\":\\"D\\",\\"currResultnName\\":\\"\u4E22\u5F03\\"},{\\"currResult\\":\\"A\\",\\"currResultnName\\":\\"\u624B\u5DE5\u540C\u6B65\\"},{\\"currResult\\":\\"C\\",\\"currResultnName\\":\\"\u672C\u89C4\u5219\u5DF2\u7B26\u5408\\"},{\\"currResult\\":\\"H\\",\\"currResultnName\\":\\"\u4ECD\u65E7\u5F02\u5E38\\"}]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
[
{
"currResult": "N",
"currResultnName": "\u6B63\u5728\u5904\u7406"
},
{
"currResult": "D",
"currResultnName": "\u4E22\u5F03"
},
{
"currResult": "A",
"currResultnName": "\u624B\u5DE5\u540C\u6B65"
},
{
"currResult": "C",
"currResultnName": "\u672C\u89C4\u5219\u5DF2\u7B26\u5408"
},
{
"currResult": "H",
"currResultnName": "\u4ECD\u65E7\u5F02\u5E38"
}
]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u5F02\u5E38",name:"PostDataauditGetallcurrresults",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAllCurrResults"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u5F02\u5E38",type:"post",url:"DataAudit/GetAllCurrStates",title:"\u67E5\u8BE2\u6240\u6709\u5904\u7406\u72B6\u6001",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[{\\"currState\\":\\"Add\\",\\"currStateName\\":\\"\u65B0\u589E\\"},{\\"currState\\":\\"Ing\\",\\"currStateName\\":\\"\u5904\u7406\u4E2D\\"},{\\"currState\\":\\"Over\\",\\"currStateName\\":\\"\u5B8C\u6210\\"}]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
[
{
"currState": "Add",
"currStateName": "\u65B0\u589E"
},
{
"currState": "Ing",
"currStateName": "\u5904\u7406\u4E2D"
},
{
"currState": "Over",
"currStateName": "\u5B8C\u6210"
}
]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u5F02\u5E38",name:"PostDataauditGetallcurrstates",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAllCurrStates"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u5F02\u5E38",type:"post",url:"DataAudit/GetAuditExceptionById",title:"\u67E5\u8BE2\u5BA1\u6838\u5F02\u5E38\u5904\u7406\u8BE6\u60C5",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "aeId": "\u5BA1\u6838\u5F02\u5E38ID" // \u5BA1\u6838\u5F02\u5E38ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"aeId\\":\\"aeId1\\",\\"arId\\":\\"arId1\\",\\"slId\\":\\"slId1\\",\\"auditContents\\":\\"\u5185\u5BB9\\",\\"socMainKeyValue\\":\\"\u4E3B\u952E\u503C\\",\\"currState\\":\\"\u5904\u7406\u72B6\u6001\\",\\"socDataItemValues\\":\\"\u6570\u636E\u9879\u5185\u5BB9\\",\\"currResult\\":\\"\u5904\u7406\u7ED3\u679C\\",\\"remark\\":\\"\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "aeId": "aeId1",
    "arId": "arId1",
    "slId": "slId1",
    "auditContents": "\u5185\u5BB9",
    "socMainKeyValue": "\u4E3B\u952E\u503C",
    "currState": "\u5904\u7406\u72B6\u6001",
    "socDataItemValues": "\u6570\u636E\u9879\u5185\u5BB9",
    "currResult": "\u5904\u7406\u7ED3\u679C",
    "remark": "\u5907\u6CE8",
    "timestampSs": "2024-11-28 11:43:02"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u5F02\u5E38",name:"PostDataauditGetauditexceptionbyid",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAuditExceptionById"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u5F02\u5E38",type:"post",url:"DataAudit/GetAuditExceptionsPager",title:"\u5E26\u6761\u4EF6\u5206\u9875\u67E5\u8BE2\u5BA1\u6838\u5F02\u5E38",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "page": 1, // \u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
    "pageSize": 10, // \u9875\u5927\u5C0F\uFF0CInteger\uFF0C\u5FC5\u4F20
    "sortType": "ASC", // \u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "ruleName": "\u89C4\u5219\u540D\u79F0", // \u89C4\u5219\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20
    "socDatas": "\u76EE\u6807\u6570\u636E", // \u76EE\u6807\u6570\u636E\uFF0CString\uFF0C\u9009\u4F20
    "socDataItemValues": "\u76EE\u6807\u6570\u636E\u9879\u5185\u5BB9", // \u76EE\u6807\u6570\u636E\u9879\u5185\u5BB9\uFF0CString\uFF0C\u9009\u4F20
    "ruleClass": "\u89C4\u5219\u5206\u7C7B", // \u89C4\u5219\u5206\u7C7B\uFF0CString\uFF0C\u9009\u4F20
    "infoClass": "\u5185\u5BB9\u7C7B\u578B", // \u5185\u5BB9\u7C7B\u578B\uFF0CString\uFF0C\u9009\u4F20
    "currState": "\u5904\u7406\u72B6\u6001" // \u5904\u7406\u72B6\u6001\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"totalSize\\":30,\\"totalPage\\":3,\\"pageSize\\":10,\\"page\\":1,\\"list\\":[{\\"aeId\\":\\"aeId1\\",\\"arId\\":\\"arId1\\",\\"slId\\":\\"slId1\\",\\"auditContents\\":\\"\u5185\u5BB9\\",\\"socMainKeyValue\\":\\"\u4E3B\u952E\u503C\\",\\"currState\\":\\"\u5904\u7406\u72B6\u6001\\",\\"socDataItemValues\\":\\"\u6570\u636E\u9879\u5185\u5BB9\\",\\"currResult\\":\\"\u5904\u7406\u7ED3\u679C\\",\\"remark\\":\\"\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}]}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "totalSize": 30,
    "totalPage": 3,
    "pageSize": 10,
    "page": 1,
    "list": [
        {
            "aeId": "aeId1",
            "arId": "arId1",
            "slId": "slId1",
            "auditContents": "\u5185\u5BB9",
            "socMainKeyValue": "\u4E3B\u952E\u503C",
            "currState": "\u5904\u7406\u72B6\u6001",
            "socDataItemValues": "\u6570\u636E\u9879\u5185\u5BB9",
            "currResult": "\u5904\u7406\u7ED3\u679C",
            "remark": "\u5907\u6CE8",
            "timestampSs": "2024-11-28 11:43:02"
        }
    ]
}

\u9A7C\u5CF0\u5B57\u6BB5          | \u5BF9\u5E94\u7684\u6CE8\u91CA\u53CA\u4E3B\u952E/\u7A7A\u503C\u4FE1\u606F
-------------------|----------------------------------------------
aeId              | \u5BA1\u6838\u5F02\u5E38ID\uFF08\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
arId              | \u5BA1\u6838\u89C4\u5219\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
slId              | \u540C\u6B65\u5173\u8054\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
auditContents     | \u89E6\u53D1\u89C4\u5219\u660E\u7EC6,\u591A\u4E2A|\u5206\u5272 \u53D6\u5BA1\u6838\u5185\u5BB9\u5B57\u6BB5\u5373\u53EF\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
socMainKeyValue   | \u6E90\u5934\u6570\u636E\u4E3B\u952E\u503C\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
currState         | \u5904\u7406\u72B6\u6001,\u65B0\u589E Add \u3001 \u5904\u7406\u4E2D Ing\u3001\u5B8C\u6210 Over\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
socDataItemValues | \u76EE\u6807\u6570\u636E\u9879\u5185\u5BB9,\u591A\u4E2A|\u5206\u5272 \u53D6\u89C4\u5219\u5E94\u7528\u6570\u636E\u9879\u8BC6\u522B\u5B57\u6BB5\u5185\u5BB9\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
currResult        | \u5904\u7406\u7ED3\u679C,\u6B63\u5728\u5904\u7406 N\u3001\u4E22\u5F03 D\u3001\u624B\u5DE5\u540C\u6B65 A\u3001\u672C\u89C4\u5219\u5DF2\u7B26\u5408  C\u3001\u4ECD\u65E7\u5F02\u5E38 H\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
remark            | \u5907\u6CE8\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
timestampSs       | \u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
raId              | \u89C4\u5219\u5E94\u7528ID\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
socDataItems      | \u76EE\u6807\u6570\u636E\u9879,\u591A\u4E2A|\u5206\u5272 \u53D6\u89C4\u5219\u5E94\u7528\u6570\u636E\u9879\u8BC6\u522B\u5B57\u6BB5\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
socDatas          | \u76EE\u6807\u6570\u636E,\u8FD9\u91CC\u76F4\u63A5\u62FC\u63A5\u6570\u636E\u6E90-\u6570\u636E\u6A21\u5F0F\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u5F02\u5E38",name:"PostDataauditGetauditexceptionspager",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAuditExceptionsPager"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u5F02\u5E38",type:"post",url:"DataAudit/UpdateAuditException",title:"\u4FEE\u6539\u5BA1\u6838\u5F02\u5E38\u5904\u7406",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "aeId": "\u5BA1\u6838\u5F02\u5E38ID" // \u5BA1\u6838\u5F02\u5E38ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"aeId\\":\\"aeId1\\",\\"arId\\":\\"arId1\\",\\"slId\\":\\"slId1\\",\\"auditContents\\":\\"\u5185\u5BB9\\",\\"socMainKeyValue\\":\\"\u4E3B\u952E\u503C\\",\\"currState\\":\\"\u5904\u7406\u72B6\u6001\\",\\"socDataItemValues\\":\\"\u6570\u636E\u9879\u5185\u5BB9\\",\\"currResult\\":\\"\u5904\u7406\u7ED3\u679C\\",\\"remark\\":\\"\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "aeId": "aeId1",
    "arId": "arId1",
    "slId": "slId1",
    "auditContents": "\u5185\u5BB9",
    "socMainKeyValue": "\u4E3B\u952E\u503C",
    "currState": "\u5904\u7406\u72B6\u6001",
    "socDataItemValues": "\u6570\u636E\u9879\u5185\u5BB9",
    "currResult": "\u5904\u7406\u7ED3\u679C",
    "remark": "\u5907\u6CE8",
    "timestampSs": "2024-11-28 11:43:02"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u5F02\u5E38",name:"PostDataauditUpdateauditexception",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/UpdateAuditException"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/AddAuditRule",title:"\u5355\u4E2A\u65B0\u589E\u5BA1\u6838\u89C4\u5219",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "ruleName": "\u89C4\u5219\u540D\u79F0", // \u540D\u79F0\uFF0CString\uFF0C\u5FC5\u4F20
    "ruleIdentity": "\u89C4\u5219\u8BC6\u522B" // \u8BC6\u522B\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"arId\\":\\"newArId\\",\\"ruleName\\":\\"\u89C4\u5219\u540D\u79F0\\",\\"ruleIdentity\\":\\"\u89C4\u5219\u8BC6\u522B\\",\\"ruleClass\\":\\"\u5206\u7C7B\\",\\"interface3pt\\":\\"\u63A5\u53E3\\",\\"interSecurity\\":\\"\u5B89\u5168\\",\\"securityMothed\\":\\"\u5B89\u5168\u65B9\u5F0F\\",\\"infoClass\\":\\"\u5185\u5BB9\u7C7B\u578B\\",\\"remark\\":\\"\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "arId": "newArId",
    "ruleName": "\u89C4\u5219\u540D\u79F0",
    "ruleIdentity": "\u89C4\u5219\u8BC6\u522B",
    "ruleClass": "\u5206\u7C7B",
    "interface3pt": "\u63A5\u53E3",
    "interSecurity": "\u5B89\u5168",
    "securityMothed": "\u5B89\u5168\u65B9\u5F0F",
    "infoClass": "\u5185\u5BB9\u7C7B\u578B",
    "remark": "\u5907\u6CE8",
    "timestampSs": "2024-11-28 11:43:02"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditAddauditrule",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/AddAuditRule"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/AddAuditRuleDetail",title:"\u589E\u52A0\u5355\u4E2A\u660E\u7EC6\u89C4\u5219",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "arId": "arId1", // \u5BA1\u6838\u89C4\u5219ID\uFF0CString\uFF0C\u5FC5\u4F20
    "auditContent": "\u5BA1\u6838\u5185\u5BB9" // \u5BA1\u6838\u5185\u5BB9\uFF0CString\uFF0C\u5FC5\u4F20
    "matchAction" : "matchAction" // \u5339\u914D\u52A8\u4F5C\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"ardId\\":\\"newArdId\\",\\"arId\\":\\"arId1\\",\\"auditContent\\":\\"\u5BA1\u6838\u5185\u5BB9\\",\\"matchAction\\":\\"\u5339\u914D\u52A8\u4F5C\\",\\"filePath\\":\\"\u6587\u4EF6\u8DEF\u5F84\\",\\"fileFormat\\":\\"\u6587\u4EF6\u683C\u5F0F\\",\\"remark\\":\\"\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "ardId": "newArdId",
    "arId": "arId1",
    "auditContent": "\u5BA1\u6838\u5185\u5BB9",
    "matchAction": "\u5339\u914D\u52A8\u4F5C",
    "filePath": "\u6587\u4EF6\u8DEF\u5F84",
    "fileFormat": "\u6587\u4EF6\u683C\u5F0F",
    "remark": "\u5907\u6CE8",
    "timestampSs": "2024-11-28 11:43:02"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditAddauditruledetail",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/AddAuditRuleDetail"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/BatchDeleteAuditRuleDetails",title:"\u6279\u91CF\u5220\u9664\u660E\u7EC6\u89C4\u5219",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:'["ardId1", "ardId2"] // \u89C4\u5219\u660E\u7EC6ID\u5217\u8868\uFF0CArray<String>\uFF0C\u5FC5\u4F20',type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\"ardId1\\",\\"ardId2\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
["ardId1", "ardId2"]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditBatchdeleteauditruledetails",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/BatchDeleteAuditRuleDetails"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/BatchDeleteAuditRules",title:"\u6279\u91CF\u5220\u9664\u5BA1\u6838\u89C4\u5219",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:'["arId1", "arId2"] // \u5BA1\u6838\u89C4\u5219ID\u5217\u8868\uFF0CArray<String>\uFF0C\u5FC5\u4F20',type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\"arId1\\",\\"arId2\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
["arId1", "arId2"]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditBatchdeleteauditrules",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/BatchDeleteAuditRules"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/GetAllFileFormats",title:"\u67E5\u8BE2\u6240\u6709\u6587\u4EF6\u683C\u5F0F",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\"\u6587\u4EF6\u683C\u5F0F1\\",\\"\u6587\u4EF6\u683C\u5F0F2\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
["\u6587\u4EF6\u683C\u5F0F1", "\u6587\u4EF6\u683C\u5F0F2"]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditGetallfileformats",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAllFileFormats"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/GetAllInfoClasses",title:"\u67E5\u8BE2\u6240\u6709\u5185\u5BB9\u7C7B\u578B",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\"\u5185\u5BB9\u7C7B\u578B1\\",\\"\u5185\u5BB9\u7C7B\u578B2\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
["\u5185\u5BB9\u7C7B\u578B1", "\u5185\u5BB9\u7C7B\u578B2"]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditGetallinfoclasses",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAllInfoClasses"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/GetAllMatchActions",title:"\u67E5\u8BE2\u6240\u6709\u5339\u914D\u52A8\u4F5C",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\"\u5339\u914D\u52A8\u4F5C1\\",\\"\u5339\u914D\u52A8\u4F5C2\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
["\u5339\u914D\u52A8\u4F5C1", "\u5339\u914D\u52A8\u4F5C2"]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditGetallmatchactions",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAllMatchActions"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/GetAllRuleClasses",title:"\u67E5\u8BE2\u6240\u6709\u5206\u7C7B",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\"\u5206\u7C7B1\\",\\"\u5206\u7C7B2\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
["\u5206\u7C7B1", "\u5206\u7C7B2"]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditGetallruleclasses",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAllRuleClasses"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/GetAllSecurityMotheds",title:"\u67E5\u8BE2\u6240\u6709\u5B89\u5168\u63A7\u5236\u65B9\u5F0F",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\n    {\\n        \\"securityMothed\\" : \\"\u5B89\u5168\u63A7\u5236\u65B9\u5F0Fcode\\",\\n        \\"securityMothedName\\" : \\"\u5B89\u5168\u63A7\u5236\u65B9\u5F0F\u540D\u79F0\\"\\n    }\\n]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
\u8D26\u6237\u5BC6\u7801 A \u3001Tokens T \u3001AKSK  AKSK
RespDatas:
[
    {
        "securityMothed" : "\u5B89\u5168\u63A7\u5236\u65B9\u5F0Fcode",
        "securityMothedName" : "\u5B89\u5168\u63A7\u5236\u65B9\u5F0F\u540D\u79F0"
    }
]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditGetallsecuritymotheds",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAllSecurityMotheds"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/GetAuditRuleById",title:"\u67E5\u8BE2\u5355\u4E2A\u5BA1\u6838\u89C4\u5219\u8BE6\u60C5",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "arId": "arId1" // \u5BA1\u6838\u89C4\u5219ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"arId\\":\\"arId1\\",\\"ruleName\\":\\"\u89C4\u5219\u540D\u79F0\\",\\"ruleIdentity\\":\\"\u89C4\u5219\u8BC6\u522B\\",\\"ruleClass\\":\\"\u5206\u7C7B\\",\\"interface3pt\\":\\"\u63A5\u53E3\\",\\"interSecurity\\":\\"\u5B89\u5168\\",\\"securityMothed\\":\\"\u5B89\u5168\u65B9\u5F0F\\",\\"infoClass\\":\\"\u5185\u5BB9\u7C7B\u578B\\",\\"remark\\":\\"\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "arId": "arId1",
    "ruleName": "\u89C4\u5219\u540D\u79F0",
    "ruleIdentity": "\u89C4\u5219\u8BC6\u522B",
    "ruleClass": "\u5206\u7C7B",
    "interface3pt": "\u63A5\u53E3",
    "interSecurity": "\u5B89\u5168",
    "securitye": "\u5B89\u5168\u65B9\u5F0F",
    "infoClass": "\u5185\u5BB9\u7C7B\u578B",
    "remark": "\u5907\u6CE8",
    "timestampSs": "2024-11-28 11:43:02"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditGetauditrulebyid",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAuditRuleById"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/GetAuditRuleDetailById",title:"\u67E5\u8BE2\u5355\u4E2A\u89C4\u5219\u660E\u7EC6",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "ardId": "ardId1" // \u89C4\u5219\u660E\u7EC6ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"ardId\\":\\"ardId1\\",\\"arId\\":\\"arId1\\",\\"auditContent\\":\\"\u5BA1\u6838\u5185\u5BB9\\",\\"matchAction\\":\\"\u5339\u914D\u52A8\u4F5C\\",\\"filePath\\":\\"\u6587\u4EF6\u8DEF\u5F84\\",\\"fileFormat\\":\\"\u6587\u4EF6\u683C\u5F0F\\",\\"remark\\":\\"\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "ardId": "ardId1",
    "ruleName" : "\u89C4\u521922\u4E3A",//\u5BA1\u6838\u89C4\u5219
    "arId": "arId1",
    "auditContent": "\u5BA1\u6838\u5185\u5BB9",
    "matchAction": "\u5339\u914D\u52A8\u4F5C",
    "filePath": "\u6587\u4EF6\u8DEF\u5F84",
    "fileFormat": "\u6587\u4EF6\u683C\u5F0F",
    "remark": "\u5907\u6CE8",
    "timestampSs": "2024-11-28 11:43:02"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditGetauditruledetailbyid",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAuditRuleDetailById"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/GetAuditRuleDetailsPager",title:"\u5206\u9875\u67E5\u8BE2\u6240\u6709\u89C4\u5219\u660E\u7EC6",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "page": 1, // \u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
    "pageSize": 10, // \u9875\u5927\u5C0F\uFF0CInteger\uFF0C\u5FC5\u4F20
    "sortType": "ASC" // \u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "arId" : "arId1" //\u5BA1\u6838\u89C4\u5219ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"totalSize\\":30,\\"totalPage\\":3,\\"pageSize\\":10,\\"page\\":1,\\"list\\":[{\\"ardId\\":\\"ardId1\\",\\"arId\\":\\"arId1\\",\\"auditContent\\":\\"\u5BA1\u6838\u5185\u5BB9\\",\\"matchAction\\":\\"\u5339\u914D\u52A8\u4F5C\\",\\"filePath\\":\\"\u6587\u4EF6\u8DEF\u5F84\\",\\"fileFormat\\":\\"\u6587\u4EF6\u683C\u5F0F\\",\\"remark\\":\\"\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}]}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "totalSize": 30,
    "totalPage": 3,
    "pageSize": 10,
    "page": 1,
    "list": [
        {
            "ardId": "ardId1",
            "arId": "arId1",
            "auditContent": "\u5BA1\u6838\u5185\u5BB9",
            "matchAction": "\u5339\u914D\u52A8\u4F5C",
            "filePath": "\u6587\u4EF6\u8DEF\u5F84",
            "fileFormat": "\u6587\u4EF6\u683C\u5F0F",
            "remark": "\u5907\u6CE8",
            "timestampSs": "2024-11-28 11:43:02"
        }
    ]
}
totalSize\uFF1A\u603B\u6570\u636E\u91CF\uFF0CInteger
totalPage\uFF1A\u603B\u9875\u6570\uFF0CInteger
pageSize\uFF1A\u6BCF\u9875\u6570\u636E\u91CF\uFF0CInteger
page\uFF1A\u5F53\u524D\u9875\u7801\uFF0CInteger
\u6570\u636E\u5E93\u8868\u540D\uFF1AAUDITRULEDETAIL / \u89C4\u5219\u660E\u7EC6\u8868

\u9A7C\u5CF0\u5B57\u6BB5          | \u5BF9\u5E94\u7684\u6CE8\u91CA\u53CA\u4E3B\u952E/\u7A7A\u503C\u4FE1\u606F
------------------|----------------------------------------------
ardId             | \u89C4\u5219\u660E\u7EC6ID\uFF08\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
arId              | \u5BA1\u6838\u89C4\u5219ID\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
auditContent      | \u5BA1\u6838\u5185\u5BB9\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
matchAction       | \u5339\u914D\u52A8\u4F5C\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
filePath          | \u6587\u4EF6\u8DEF\u5F84\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
fileFormat        | \u6587\u4EF6\u683C\u5F0F\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
remark            | \u5907\u6CE8\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
timestampSs       | \u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditGetauditruledetailspager",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAuditRuleDetailsPager"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/GetAuditRulesPager",title:"\u5E26\u6761\u4EF6\u5206\u9875\u67E5\u8BE2\u5BA1\u6838\u89C4\u5219",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "page": 1, // \u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
    "pageSize": 10, // \u9875\u5927\u5C0F\uFF0CInteger\uFF0C\u5FC5\u4F20
    "sortType": "ASC", // \u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "ruleName": "\u89C4\u5219\u540D\u79F0", // \u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20
    "ruleIdentity": "\u89C4\u5219\u8BC6\u522B", // \u8BC6\u522B\uFF0CString\uFF0C\u9009\u4F20
    "ruleClass": "\u5206\u7C7B", // \u5206\u7C7B\uFF0CString\uFF0C\u9009\u4F20
    "infoClass": "\u5185\u5BB9\u7C7B\u578B" // \u5185\u5BB9\u7C7B\u578B\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"totalSize\\":30,\\"totalPage\\":3,\\"pageSize\\":10,\\"page\\":1,\\"list\\":[{\\"arId\\":\\"arId1\\",\\"ruleName\\":\\"\u89C4\u5219\u540D\u79F0\\",\\"ruleIdentity\\":\\"\u89C4\u5219\u8BC6\u522B\\",\\"ruleClass\\":\\"\u5206\u7C7B\\",\\"interface3pt\\":\\"\u63A5\u53E3\\",\\"interSecurity\\":\\"\u5B89\u5168\\",\\"securityMothed\\":\\"\u5B89\u5168\u65B9\u5F0F\\",\\"infoClass\\":\\"\u5185\u5BB9\u7C7B\u578B\\",\\"remark\\":\\"\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}]}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "totalSize": 30,
    "totalPage": 3,
    "pageSize": 10,
    "page": 1,
    "list": [
        {
            "arId": "arId1",
            "ruleName": "\u89C4\u5219\u540D\u79F0",
            "ruleIdentity": "\u89C4\u5219\u8BC6\u522B",
            "ruleClass": "\u5206\u7C7B",
            "interface3pt": "\u63A5\u53E3",
            "interSecurity": "\u5B89\u5168",
            "securityMothed": "\u5B89\u5168\u65B9\u5F0F",
            "infoClass": "\u5185\u5BB9\u7C7B\u578B",
            "remark": "\u5907\u6CE8",
            "timestampSs": "2024-11-28 11:43:02"
        }
    ]
}
totalSize\uFF1A\u603B\u6570\u636E\u91CF\uFF0CInteger
totalPage\uFF1A\u603B\u9875\u6570\uFF0CInteger
pageSize\uFF1A\u6BCF\u9875\u6570\u636E\u91CF\uFF0CInteger
page\uFF1A\u5F53\u524D\u9875\u7801\uFF0CInteger
\u6570\u636E\u5E93\u8868\u540D\uFF1AAUDITRULE / \u5BA1\u6838\u89C4\u5219\u8868

\u9A7C\u5CF0\u5B57\u6BB5          | \u5BF9\u5E94\u7684\u6CE8\u91CA\u53CA\u4E3B\u952E/\u7A7A\u503C\u4FE1\u606F
------------------|----------------------------------------------
arId              | \u5BA1\u6838\u89C4\u5219ID\uFF08\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
ruleName          | \u5BA1\u6838\u89C4\u5219\u540D\u79F0\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
ruleIdentity      | \u5BA1\u6838\u89C4\u5219\u8BC6\u522B\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
ruleClass         | \u5206\u7C7B,\u654F\u611F\u7B5B\u67E5 MS\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
interface3pt      | \u4E09\u65B9\u63A5\u53E3\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
interSecurity     | \u63A5\u53E3\u5B89\u5168\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
securityMothed    | \u5B89\u5168\u63A7\u5236\u65B9\u5F0F,\u8D26\u6237\u5BC6\u7801 A \u3001Tokens T \u3001AKSK  AKSK\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
infoClass         | \u5185\u5BB9\u7C7B\u578B\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
remark            | \u5907\u6CE8\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
timestampSs       | \u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditGetauditrulespager",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAuditRulesPager"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/UpdateAuditRule",title:"\u5355\u4E2A\u4FEE\u6539\u5BA1\u6838\u89C4\u5219",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "arId": "arId1", // \u5BA1\u6838\u89C4\u5219ID\uFF0CString\uFF0C\u5FC5\u4F20
    "remark": "\u66F4\u65B0\u5907\u6CE8" // \u5907\u6CE8\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"arId\\":\\"arId1\\",\\"ruleName\\":\\"\u89C4\u5219\u540D\u79F0\\",\\"ruleIdentity\\":\\"\u89C4\u5219\u8BC6\u522B\\",\\"ruleClass\\":\\"\u5206\u7C7B\\",\\"interface3pt\\":\\"\u63A5\u53E3\\",\\"interSecurity\\":\\"\u5B89\u5168\\",\\"securityMothed\\":\\"\u5B89\u5168\u65B9\u5F0F\\",\\"infoClass\\":\\"\u5185\u5BB9\u7C7B\u578B\\",\\"remark\\":\\"\u66F4\u65B0\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "arId": "arId1",
    "ruleName": "\u89C4\u5219\u540D\u79F0",
    "ruleIdentity": "\u89C4\u5219\u8BC6\u522B",
    "ruleClass": "\u5206\u7C7B",
    "interface3pt": "\u63A5\u53E3",
    "interSecurity": "\u5B89\u5168",
    "securityMothed": "\u5B89\u5168\u65B9\u5F0F",
    "infoClass": "\u5185\u5BB9\u7C7B\u578B",
    "remark": "\u66F4\u65B0\u5907\u6CE8",
    "timestampSs": "2024-11-28 11:43:02"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditUpdateauditrule",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/UpdateAuditRule"}]},{group:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",type:"post",url:"DataAudit/UpdateAuditRuleDetail",title:"\u4FEE\u6539\u5355\u4E2A\u660E\u7EC6\u89C4\u5219",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "ardId": "ardId1", // \u89C4\u5219\u660E\u7EC6ID\uFF0CString\uFF0C\u5FC5\u4F20
    "remark": "\u66F4\u65B0\u5907\u6CE8" // \u5907\u6CE8\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"ardId\\":\\"ardId1\\",\\"arId\\":\\"arId1\\",\\"auditContent\\":\\"\u5BA1\u6838\u5185\u5BB9\\",\\"matchAction\\":\\"\u5339\u914D\u52A8\u4F5C\\",\\"filePath\\":\\"\u6587\u4EF6\u8DEF\u5F84\\",\\"fileFormat\\":\\"\u6587\u4EF6\u683C\u5F0F\\",\\"remark\\":\\"\u66F4\u65B0\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "ardId": "ardId1",
    "arId": "arId1",
    "auditContent": "\u5BA1\u6838\u5185\u5BB9",
    "matchAction": "\u5339\u914D\u52A8\u4F5C",
    "filePath": "\u6587\u4EF6\u8DEF\u5F84",
    "fileFormat": "\u6587\u4EF6\u683C\u5F0F",
    "remark": "\u66F4\u65B0\u5907\u6CE8",
    "timestampSs": "2024-11-28 11:43:02"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u5BA1\u6838\u89C4\u5219",name:"PostDataauditUpdateauditruledetail",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/UpdateAuditRuleDetail"}]},{group:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",type:"post",url:"DataAudit/AddRuleApp",title:"\u5355\u4E2A\u65B0\u589E\u89C4\u5219\u5E94\u7528",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "socDataIden": "\u6E90\u5934\u6570\u636E\u6E90\u8BC6\u522B", // \u6E90\u5934\u6570\u636E\u6E90\u8BC6\u522B\uFF0CString\uFF0C\u5FC5\u4F20
    "socDataSchemaIden": "\u6E90\u5934\u6570\u636E\u6A21\u5F0F\u8BC6\u522B", // \u6E90\u5934\u6570\u636E\u6A21\u5F0F\u8BC6\u522B\uFF0CString\uFF0C\u5FC5\u4F20
    "arId": "\u5BA1\u6838\u89C4\u5219" // \u5BA1\u6838\u89C4\u5219\uFF0CString\uFF0C\u5FC5\u4F20
    "socDataItemIdensList": ["item01" , "item02"] // \u6570\u636E\u9879\u8BC6\u522B\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"ruleAppId\\":\\"newRuleAppId\\",\\"socDataIden\\":\\"\u6E90\u5934\u6570\u636E\u6E90\u8BC6\u522B\\",\\"socDataSchemaIden\\":\\"\u6E90\u5934\u6570\u636E\u6A21\u5F0F\u8BC6\u522B\\",\\"arId\\":\\"\u5BA1\u6838\u89C4\u5219\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
         "arId": "AR011",
         "raId": "RAID0001",
         "remark": "This is a test remark 1",
         "ruleClass": "MS",
         "socDataIden": "source_01",
         "socDataItemIdens": "item_01|ITEM0002",
         "socDataSchemaIdens": "schema_01",
         "timestampSs": "2025-01-02 10:59:30",
         "usageType": "Add",
         "socDataItemIdensList": ["item01" , "item02"]
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",name:"PostDataauditAddruleapp",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/AddRuleApp"}]},{group:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",type:"post",url:"DataAudit/BatchDeleteRuleApps",title:"\u6279\u91CF\u5220\u9664\u89C4\u5219\u5E94\u7528",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:'["raId1", "raId2"] // \u89C4\u5219\u5E94\u7528ID\u5217\u8868\uFF0CArray<String>\uFF0C\u5FC5\u4F20',type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\"raId1\\",\\"raId2\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
["raId1", "raId2"]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",name:"PostDataauditBatchdeleteruleapps",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/BatchDeleteRuleApps"}]},{group:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",type:"post",url:"DataAudit/GetAllAuditRules",title:"\u67E5\u8BE2\u6240\u6709\u5BA1\u6838\u89C4\u5219",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "ruleClass" : "\u89C4\u5219\u5206\u7C7B", // \u89C4\u5219\u5206\u7C7B\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[{\\"arId\\":\\"AR006\\",\\"ruleName\\":\\"\u89C4\u52196\\"},{\\"arId\\":\\"AR009\\",\\"ruleName\\":\\"\u89C4\u52199\\"},{\\"arId\\":\\"AR012\\",\\"ruleName\\":\\"\u89C4\u521912\\"},{\\"arId\\":\\"AR015\\",\\"ruleName\\":\\"\u89C4\u521915\\"},{\\"arId\\":\\"AR018\\",\\"ruleName\\":\\"\u89C4\u521918\\"}]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
[{"arId":"AR006","ruleName":"\u89C4\u52196"},{"arId":"AR009","ruleName":"\u89C4\u52199"},{"arId":"AR012","ruleName":"\u89C4\u521912"},{"arId":"AR015","ruleName":"\u89C4\u521915"},{"arId":"AR018","ruleName":"\u89C4\u521918"}]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",name:"PostDataauditGetallauditrules",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAllAuditRules"}]},{group:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",type:"post",url:"DataAudit/GetAllDataItems",title:"\u67E5\u8BE2\u6240\u6709\u6570\u636E\u9879",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "disId": "\u6570\u636E\u8BC6\u522B\u6A21\u5F0FID" // \u6570\u636E\u8BC6\u522B\u6A21\u5F0FID\uFF0CString\uFF0C\u9009\u4F20
    "raId" : "RAID0001" //\u89C4\u5219\u5E94\u7528ID,String,\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\n  {\\n    \\"socDataItemIden\\": \\"1\\",\\n    \\"dataItemIdenName\\": \\"1\\",\\n    \\"isAdded\\": \\"0\\"\\n  }\\n]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
[
  {
    "socDataItemIden": "1",
    "dataItemIdenName": "1",
    "isAdded": "0"
  }
]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",name:"PostDataauditGetalldataitems",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAllDataItems"}]},{group:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",type:"post",url:"DataAudit/GetAllDataSchemas",title:"\u67E5\u8BE2\u6240\u6709\u6570\u636E\u6A21\u5F0F",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "diId": "\u6570\u636E\u6E90ID" // \u6570\u636E\u6E90ID\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\"\u6570\u636E\u6A21\u5F0F1\\",\\"\u6570\u636E\u6A21\u5F0F2\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
["\u6570\u636E\u6A21\u5F0F1", "\u6570\u636E\u6A21\u5F0F2"]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",name:"PostDataauditGetalldataschemas",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAllDataSchemas"}]},{group:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",type:"post",url:"DataAudit/GetAllDataSources",title:"\u67E5\u8BE2\u6240\u6709\u6570\u636E\u6E90",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\"\u6570\u636E\u6E901\\",\\"\u6570\u636E\u6E902\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
["\u6570\u636E\u6E901", "\u6570\u636E\u6E902"]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",name:"PostDataauditGetalldatasources",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAllDataSources"}]},{group:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",type:"post",url:"DataAudit/GetAllUsageTypes",title:"\u67E5\u8BE2\u6240\u6709\u5E94\u7528\u65B9\u5F0F",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "[\\"\u5E94\u7528\u65B9\u5F0F1\\",\\"\u5E94\u7528\u65B9\u5F0F2\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
["\u5E94\u7528\u65B9\u5F0F1", "\u5E94\u7528\u65B9\u5F0F2"]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",name:"PostDataauditGetallusagetypes",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetAllUsageTypes"}]},{group:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",type:"post",url:"DataAudit/GetRuleAppById",title:"\u5355\u4E2A\u67E5\u8BE2\u89C4\u5219\u5E94\u7528",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "raId": "\u89C4\u5219\u5E94\u7528ID" // \u89C4\u5219\u5E94\u7528ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"raId\\":\\"raId1\\",\\"socDataIden\\":\\"\u6E90\u5934\u6570\u636E\u6E90\u8BC6\u522B\\",\\"socDataSchemaIden\\":\\"\u6E90\u5934\u6570\u636E\u6A21\u5F0F\u8BC6\u522B\\",\\"arId\\":\\"\u5BA1\u6838\u89C4\u5219\\",\\"ruleClass\\":\\"\u89C4\u5219\u5206\u7C7B\\",\\"usageType\\":\\"\u5E94\u7528\u65B9\u5F0F\\",\\"remark\\":\\"\u5907\u6CE8\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:

{
  "raId": "123456",
  "socDataIden": "SOC001",
  "socDataSchemaIden": "SCHEMA001",
  "socDataItemIdens": "ITEM001,ITEM002,ITEM003",
  "ruleClass": "RULE_CLASS_A",
  "usageType": "USAGE_TYPE_X",
  "arId": "AR001",
  "remark": "This is a remark.",
  "timestampSs": "2025-01-06T12:34:56",
  "dataIdenName": "Sample Data Identifier Name",
  "dataSchemaName": "Sample Data Schema Name",
  "socDataItemNames": "Item 1, Item 2, Item 3",
  "disId": "DIS001"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",name:"PostDataauditGetruleappbyid",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetRuleAppById"}]},{group:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",type:"post",url:"DataAudit/GetRuleAppsPager",title:"\u5E26\u6761\u4EF6\u5206\u9875\u67E5\u8BE2\u89C4\u5219\u5E94\u7528",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "page": 1, // \u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
    "pageSize": 10, // \u9875\u5927\u5C0F\uFF0CInteger\uFF0C\u5FC5\u4F20
    "sortType": "ASC", // \u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "ruleName": "\u5BA1\u6838\u89C4\u5219\u540D\u79F0", // \u5BA1\u6838\u89C4\u5219\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20
    "dataIdenName": "\u6570\u636E\u6E90\u540D\u79F0", // \u6570\u636E\u6E90\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20
    "dataSchemaName": "\u6570\u636E\u6A21\u5F0F\u540D\u79F0", // \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20
    "dataItemIdenName": "\u6570\u636E\u9879\u540D\u79F0" // \u6570\u636E\u9879\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": ,
    "RespErrorDatas": "",{"DueWithDateTime":"2025-01-02 16:39:35","RespDatas":"{\\"totalSize\\":2,\\"totalPage\\":1,\\"pageSize\\":5,\\"page\\":1,\\"list\\":[{\\"arId\\":\\"AR011\\",\\"dataIdenName\\":\\"DataSource_01\\",\\"dataSchemaName\\":\\"\u6A21\u5F0F_01\\",\\"raId\\":\\"RAID0001\\",\\"remark\\":\\"This is a test remark 1\\",\\"ruleClass\\":\\"MS\\",\\"ruleName\\":\\"\u89C4\u521911\\",\\"socDataIden\\":\\"source_01\\",\\"socDataItemIdens\\":\\"item_01|ITEM0002\\",\\"socDataItemNames\\":\\"\u6570\u636E\u9879_01\\",\\"socDataSchemaIden\\":\\"schema_01\\",\\"timestampSs\\":\\"2025-01-02 10:59:30\\",\\"usageType\\":\\"Add\\"},{\\"arId\\":\\"AR012\\",\\"dataIdenName\\":\\"DataSource_02\\",\\"dataSchemaName\\":\\"\u6A21\u5F0F_02\\",\\"raId\\":\\"RAID0002\\",\\"remark\\":\\"This is a test remark 2\\",\\"ruleClass\\":\\"MS\\",\\"ruleName\\":\\"\u89C4\u521912\\",\\"socDataIden\\":\\"source_02\\",\\"socDataItemIdens\\":\\"item_02|ITEM0003\\",\\"socDataItemNames\\":\\"\u6570\u636E\u9879_02\\",\\"socDataSchemaIden\\":\\"schema_02\\",\\"timestampSs\\":\\"2025-01-02 11:13:54\\",\\"usageType\\":\\"OR\\"}]}","RespErrorDatas":"","RespSuccCode":"","RespSuccessInfo":"successStr","Status":"1","TottleRecords":"2"}
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "totalSize": 30,
    "totalPage": 3,
    "pageSize": 10,
    "page": 1,
    "list": [
        {
         "arId": "AR011",
         "dataIdenName": "DataSource_01",
         "dataSchemaName": "\u6A21\u5F0F_01",
         "raId": "RAID0001",
         "remark": "This is a test remark 1",
         "ruleClass": "MS",
         "ruleName": "\u89C4\u521911",
         "socDataIden": "source_01",
         "socDataItemIdens": "item_01|ITEM0002",
         "socDataItemNames": "\u6570\u636E\u9879_01",
         "socDataSchemaIden": "schema_01",
         "timestampSs": "2025-01-02 10:59:30",
         "usageType": "Add"
         },
    ]
}
\u6570\u636E\u5E93\u8868\u540D\uFF1ARULEAPP / \u89C4\u5219\u5E94\u7528\u8868

\u9A7C\u5CF0\u5B57\u6BB5          | \u5BF9\u5E94\u7684\u6CE8\u91CA\u53CA\u4E3B\u952E/\u7A7A\u503C\u4FE1\u606F
------------------|----------------------------------------------
raId              | \u89C4\u5219\u5E94\u7528ID\uFF08\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
socDataIden       | \u6E90\u5934\u6570\u636E\u6E90\u8BC6\u522B\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
socDataSchemaIden | \u6E90\u5934\u6570\u636E\u6A21\u5F0F\u8BC6\u522B\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
socDataItemIdens  | \u6E90\u5934\u6570\u636E\u9879\u8BC6\u522B,\u591A\u4E2A|\u5206\u5272\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
ruleClass         | \u89C4\u5219\u5206\u7C7B,\u654F\u611F\u7B5B\u67E5 MS\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
usageType         | \u5E94\u7528\u65B9\u5F0F,\u6216\u5E94\u7528 OR \u3001\u4E0E\u5E94\u7528 Add\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
arId              | \u5BA1\u6838\u89C4\u5219\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
remark            | \u5907\u6CE8\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
timestampSs       | \u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09

dataIdenName      | \u6570\u636E\u6E90\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0CString\uFF09
dataSchemaName    | \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0CString\uFF09
ruleName          | \u89C4\u5219\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0CString\uFF09
dataItemIdenName  | \u6570\u636E\u9879\u540D\u79F0(\u4F20\u5165\u7684\u503C)\uFF09\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0CString\uFF09
socDataItemNames  | \u6570\u636E\u9879\u540D\u79F0(\u8FD4\u56DE\u5C55\u793A\u7684\u503C)\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0CString\uFF09`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",name:"PostDataauditGetruleappspager",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/GetRuleAppsPager"}]},{group:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",type:"post",url:"DataAudit/UpdateRuleApp",title:"\u5355\u4E2A\u4FEE\u6539\u89C4\u5219\u5E94\u7528",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "raId": "\u89C4\u5219\u5E94\u7528ID" // \u89C4\u5219\u5E94\u7528ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"ruleAppId\\":\\"raId\\",\\"socDataIden\\":\\"\u6E90\u5934\u6570\u636E\u6E90\u8BC6\u522B\\",\\"socDataSchemaIden\\":\\"\u6E90\u5934\u6570\u636E\u6A21\u5F0F\u8BC6\u522B\\",\\"arId\\":\\"\u5BA1\u6838\u89C4\u5219\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}
RespDatas:
{
    "ruleAppId": "raId",
    "socDataIden": "\u6E90\u5934\u6570\u636E\u6E90\u8BC6\u522B",
    "socDataSchemaIden": "\u6E90\u5934\u6570\u636E\u6A21\u5F0F\u8BC6\u522B",
    "arId": "\u5BA1\u6838\u89C4\u5219"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DataAuditController.java",groupTitle:"\u6570\u636E\u5BA1\u6838-\u89C4\u5219\u5E94\u7528",name:"PostDataauditUpdateruleapp",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DataAudit/UpdateRuleApp"}]},{group:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",type:"post",url:"AddDataIdenSchema",title:"\u6570\u636E\u6A21\u5F0F-\u5355\u4E2A\u65B0\u589E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "dataSchemaIden": "schemaIden", // \u6570\u636E\u6A21\u5F0F\u8BC6\u522B\uFF0CString\uFF0C\u5FC5\u4F20
    "dataSchemaName": "schemaName", // \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF0CString\uFF0C\u5FC5\u4F20
    "dataIden": "dataIden", // \u6570\u636E\u6E90\u8BC6\u522B\uFF0CString\uFF0C\u5FC5\u4F20
    "diId": "diId" // \u6570\u636E\u6E90ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\"disId\\":\\"disId1\\",\\"dataSchemaIden\\":\\"schemaIden1\\",\\"dataSchemaName\\":\\"schemaName1\\",\\"dataContentSql\\":\\"SELECT * FROM table\\",\\"filePath\\":\\"/path/to/file\\",\\"remark\\":\\"This is a remark\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\",\\"diId\\":\\"diId1\\",\\"dataIden\\":\\"dataIden1\\",\\"fileFormat\\":\\"CSV\\",\\"disRepeatHours\\":\\"24\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "disId": "disId1",
    "dataSchemaIden": "schemaIden1",
    "dataSchemaName": "schemaName1",
    "dataContentSql": "SELECT * FROM table",
    "filePath": "/path/to/file",
    "remark": "This is a remark",
    "timestampSs": "2024-11-28 11:43:02",
    "diId": "diId1",
    "dataIden": "dataIden1",
    "fileFormat": "CSV",
    "disRepeatHours": "24"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",name:"PostAdddataidenschema",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/AddDataIdenSchema"}]},{group:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",type:"post",url:"BatchDeleteDataIdenSchemas",title:"\u6570\u636E\u6A21\u5F0F-\u6279\u91CF\u5220\u9664",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`[
    "disId1", // \u6570\u636E\u8BC6\u522B\u6A21\u5F0FID\uFF0CString\uFF0C\u5FC5\u4F20
    "disId2"  // \u6570\u636E\u8BC6\u522B\u6A21\u5F0FID\uFF0CString\uFF0C\u5FC5\u4F20
]`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",name:"PostBatchdeletedataidenschemas",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/BatchDeleteDataIdenSchemas"}]},{group:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",type:"post",url:"GetAllDataIdens",title:"\u6570\u636E\u6A21\u5F0F-\u67E5\u8BE2\u6240\u6709\u6570\u636E\u6E90\u8BC6\u522B",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "[{\\"dataIden\\":\\"dataIden1\\",\\"dataIdenName\\":\\"Data Identifier 1\\",\\"diId\\":\\"diId1\\"},{\\"dataIden\\":\\"dataIden2\\",\\"dataIdenName\\":\\"Data Identifier 2\\",\\"diId\\":\\"diId2\\"}]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
[
  {
    "dataIden": "dataIden1",
    "dataIdenName": "Data Identifier 1",
    "diId": "diId1"
  },
  {
    "dataIden": "dataIden2",
    "dataIdenName": "Data Identifier 2",
    "diId": "diId2"
  }
]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",name:"PostGetalldataidens",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetAllDataIdens"}]},{group:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",type:"post",url:"GetAllFileFormats",title:"\u6570\u636E\u6A21\u5F0F-\u67E5\u8BE2\u6240\u6709\u6587\u4EF6\u683C\u5F0F",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "[\\"CSV\\",\\"JSON\\",\\"XML\\"]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
[
  "CSV",
  "JSON",
  "XML"
]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",name:"PostGetallfileformats",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetAllFileFormats"}]},{group:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",type:"post",url:"GetDataIdenSchemaById",title:"\u6570\u636E\u6A21\u5F0F-\u5355\u8BB0\u5F55\u67E5\u8BE2",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "disId": "disId" // \u6570\u636E\u8BC6\u522B\u6A21\u5F0FID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\"disId\\":\\"disId1\\",\\"dataSchemaIden\\":\\"schemaIden1\\",\\"dataSchemaName\\":\\"schemaName1\\",\\"dataContentSql\\":\\"SELECT * FROM table\\",\\"filePath\\":\\"/path/to/file\\",\\"remark\\":\\"This is a remark\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\",\\"diId\\":\\"diId1\\",\\"dataIden\\":\\"dataIden1\\",\\"fileFormat\\":\\"CSV\\",\\"disRepeatHours\\":\\"24\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "disId": "disId1",
    "dataSchemaIden": "schemaIden1",
    "dataSchemaName": "schemaName1",
    "dataContentSql": "SELECT * FROM table",
    "filePath": "/path/to/file",
    "remark": "This is a remark",
    "timestampSs": "2024-11-28 11:43:02",
    "diId": "diId1",
    "dataIden": "dataIden1",
    "fileFormat": "CSV",
    "disRepeatHours": "24",
    "dataIdenName" : "test"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",name:"PostGetdataidenschemabyid",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetDataIdenSchemaById"}]},{group:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",type:"post",url:"GetDataIdenSchemaPager",title:"\u6570\u636E\u6A21\u5F0F-\u5E26\u6761\u4EF6\u5206\u9875\u67E5\u8BE2",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "page": 1,           // \u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
    "pageSize": 10,      // \u9875\u5927\u5C0F\uFF0CInteger\uFF0C\u5FC5\u4F20
    "sortType": "ASC",   // \u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "dataSchemaName": "schemaName", // \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20
    "dataSchemaIden": "schemaIden" // \u6570\u636E\u6A21\u5F0F\u8BC6\u522B\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"totalSize\\":30,\\"totalPage\\":3,\\"pageSize\\":10,\\"page\\":1,\\"list\\":[{\\"disId\\":\\"disId1\\",\\"dataSchemaIden\\":\\"schemaIden1\\",\\"dataSchemaName\\":\\"schemaName1\\",\\"dataContentSql\\":\\"SELECT * FROM table\\",\\"filePath\\":\\"/path/to/file\\",\\"remark\\":\\"This is a remark\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\",\\"diId\\":\\"diId1\\",\\"dataIden\\":\\"dataIden1\\",\\"fileFormat\\":\\"CSV\\",\\"disRepeatHours\\":\\"24\\"}]}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "totalSize": 30,
    "totalPage": 3,
    "pageSize": 10,
    "page": 1,
    "list": [
        {
            "disId": "disId1",
            "dataSchemaIden": "schemaIden1",
            "dataSchemaName": "schemaName1",
            "dataContentSql": "SELECT * FROM table",
            "filePath": "/path/to/file",
            "remark": "This is a remark",
            "timestampSs": "2024-11-28 11:43:02",
            "diId": "diId1",
            "dataIden": "dataIden1",
            "fileFormat": "CSV",
            "disRepeatHours": "24"
        }
    ]
}

\u6570\u636E\u5E93\u5B57\u6BB5\u8BF4\u660E\uFF1A
\u9A7C\u5CF0\u5B57\u6BB5          | \u5BF9\u5E94\u7684\u6CE8\u91CA\u53CA\u4E3B\u952E/\u7A7A\u503C\u4FE1\u606F
------------------|----------------------------------------------
disId             | \u6570\u636E\u8BC6\u522B\u6A21\u5F0FID\uFF08\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
dataSchemaIden    | \u6570\u636E\u6A21\u5F0F\u8BC6\u522B\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
dataSchemaName    | \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
dataContentSql    | \u6570\u636E\u5185\u5BB9\u7EC4\u7EC7,\u52A0\u8F7D\u6570\u636E\u8D77\u6B62\u65F6\u95F4\u56FA\u5B9A\u4E3A\uFF1AstartTime\u548CendTime\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
filePath          | \u6587\u4EF6\u8DEF\u5F84,\u6807\u8BC6\u636E\u6E90\u5934\u6587\u4EF6\u8DEF\u5F84\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
remark            | \u5907\u6CE8\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
timestampSs       | \u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
diId              | \u6570\u636E\u6E90ID\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
dataIden          | \u6570\u636E\u6E90\u8BC6\u522B\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
fileFormat        | \u6587\u4EF6\u683C\u5F0F\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
disRepeatHours    | \u53BB\u91CD\u590D\u9A8C\u8BC1\u6570\u636E\u8303\u56F4\u8DE8\u5EA6\u5C0F\u65F6\u6570,\u82E5\u4E3A\u7A7A\u5FFD\u7565\u53BB\u91CD\u590D\u5904\u7406\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",name:"PostGetdataidenschemapager",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetDataIdenSchemaPager"}]},{group:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",type:"post",url:"UpdateDataIdenSchema",title:"\u6570\u636E\u6A21\u5F0F-\u5355\u4E2A\u4FEE\u6539",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "disId": "disId", // \u6570\u636E\u8BC6\u522B\u6A21\u5F0FID\uFF0CString\uFF0C\u5FC5\u4F20
    "dataSchemaName": "schemaName" // \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u5176\u4ED6\u4E1A\u52A1\u5B57\u6BB5\u4E5F\u4E00\u6837\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\"disId\\":\\"disId1\\",\\"dataSchemaIden\\":\\"schemaIden1\\",\\"dataSchemaName\\":\\"schemaName1\\",\\"dataContentSql\\":\\"SELECT * FROM table\\",\\"filePath\\":\\"/path/to/file\\",\\"remark\\":\\"This is a remark\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\",\\"diId\\":\\"diId1\\",\\"dataIden\\":\\"dataIden1\\",\\"fileFormat\\":\\"CSV\\",\\"disRepeatHours\\":\\"24\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "disId": "disId1",
    "dataSchemaIden": "schemaIden1",
    "dataSchemaName": "schemaName1",
    "dataContentSql": "SELECT * FROM table",
    "filePath": "/path/to/file",
    "remark": "This is a remark",
    "timestampSs": "2024-11-28 11:43:02",
    "diId": "diId1",
    "dataIden": "dataIden1",
    "fileFormat": "CSV",
    "disRepeatHours": "24"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u6570\u636E\u6A21\u5F0F\u7BA1\u7406",name:"PostUpdatedataidenschema",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/UpdateDataIdenSchema"}]},{group:"\u6570\u636E\u6E05\u6D17-public",type:"post",url:"public/GetAllDataSources",title:"\u83B7\u53D6\u6240\u6709\u6570\u636E\u6E90",success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "list": [{
            "diId": "dsId1",
            "dataIden": "source1",
            "dataIdenName": "\u6570\u636E\u6E901"
        }, {
            "diId": "dsId2",
            "dataIden": "source2",
            "dataIdenName": "\u6570\u636E\u6E902"
        }]
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/AddNonValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-public",name:"PostPublicGetalldatasources",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/public/GetAllDataSources"}]},{group:"\u6570\u636E\u6E05\u6D17-public",type:"post",url:"public/GetDataItems",title:"\u83B7\u53D6\u6570\u636E\u6A21\u5F0F\u4E0B\u7684\u6570\u636E\u9879",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "disId": "schemaId1"
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "list": [{
            "dataItemId": "itemId1",
            "dataItemIden": "item1",
            "dataItemName": "\u6570\u636E\u98791"
        }, {
            "dataItemId": "itemId2",
            "dataItemIden": "item2",
            "dataItemName": "\u6570\u636E\u98792"
        }]
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/AddNonValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-public",name:"PostPublicGetdataitems",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/public/GetDataItems"}]},{group:"\u6570\u636E\u6E05\u6D17-public",type:"post",url:"public/GetDataSchemas",title:"\u83B7\u53D6\u6570\u636E\u6E90\u4E0B\u7684\u6570\u636E\u6A21\u5F0F",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "diId": "dsId1"
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "list": [{
            "disId": "schemaId1",
            "dataSchemaIden": "schema1",
            "dataSchemaName": "\u6570\u636E\u6A21\u5F0F1"
        }, {
            "disId": "schemaId2",
            "dataSchemaIden": "schema2",
            "dataSchemaName": "\u6570\u636E\u6A21\u5F0F2"
        }]
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/AddNonValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-public",name:"PostPublicGetdataschemas",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/public/GetDataSchemas"}]},{group:"\u6570\u636E\u6E05\u6D17-\u4E22\u5F03\u7BA1\u7406",type:"post",url:"DiscardMgt/Add",title:"\u65B0\u589E\u4E22\u5F03\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "disId": "schema123",      // \u5FC5\u4F20\uFF08\u5916\u952E\uFF09
        "refKey": "key1|key2",     // \u53EF\u9009
        "matchAction": "E|C",      // \u53EF\u9009\uFF0C\u9ED8\u8BA4E\uFF08\u76F8\u7B49E/\u5305\u542BC/\u5927\u4E8EDY/\u5C0F\u4E8EXY/\u4E0D\u7B49\u4E8ENE/\u5927\u4E8E\u7B49\u4E8EDE/\u5C0F\u4E8E\u7B49\u4E8EXE\uFF09
        "targetValue": "value1|value2", // \u53EF\u9009
        "dataTypes": "str|int",    // \u53EF\u9009\uFF0C\u9ED8\u8BA4str\uFF08int/float/long/str/date\uFF09
        "sortSeq": "1",            // \u53EF\u9009
        "remark": "\u5907\u6CE8\u4FE1\u606F"        // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "dmId": "uuid",
        "disId": "schema123",
        "refKey": "key1|key2",
        "matchAction": "E|C",
        "targetValue": "value1|value2",
        "dataTypes": "str|int",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DiscardMgtController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u4E22\u5F03\u7BA1\u7406",name:"PostDiscardmgtAdd",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DiscardMgt/Add"}]},{group:"\u6570\u636E\u6E05\u6D17-\u4E22\u5F03\u7BA1\u7406",type:"post",url:"DiscardMgt/Delete",title:"\u5220\u9664\u4E22\u5F03\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": ["dmId1", "dmId2"]   // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\u5217\u8868\uFF09
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DiscardMgtController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u4E22\u5F03\u7BA1\u7406",name:"PostDiscardmgtDelete",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DiscardMgt/Delete"}]},{group:"\u6570\u636E\u6E05\u6D17-\u4E22\u5F03\u7BA1\u7406",type:"post",url:"DiscardMgt/Modify",title:"\u4FEE\u6539\u4E22\u5F03\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "dmId": "uuid",            // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
        "disId": "schema123",      // \u53EF\u9009
        "refKey": "key1|key2",     // \u53EF\u9009
        "matchAction": "E|C",      // \u53EF\u9009\uFF0C\u9ED8\u8BA4E\uFF08\u76F8\u7B49E/\u5305\u542BC/\u5927\u4E8EDY/\u5C0F\u4E8EXY/\u4E0D\u7B49\u4E8ENE/\u5927\u4E8E\u7B49\u4E8EDE/\u5C0F\u4E8E\u7B49\u4E8EXE\uFF09
        "targetValue": "value1|value2", // \u53EF\u9009
        "dataTypes": "str|int",    // \u53EF\u9009\uFF0C\u9ED8\u8BA4str\uFF08int/float/long/str/date\uFF09
        "sortSeq": "1",            // \u53EF\u9009
        "remark": "\u66F4\u65B0\u7684\u5907\u6CE8"      // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "dmId": "uuid",
        "disId": "schema123",
        "refKey": "key1|key2",
        "matchAction": "E|C",
        "targetValue": "value1|value2",
        "dataTypes": "str|int",
        "sortSeq": "1",
        "remark": "\u66F4\u65B0\u7684\u5907\u6CE8",
        "timeStampSS": "20240108110334"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DiscardMgtController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u4E22\u5F03\u7BA1\u7406",name:"PostDiscardmgtModify",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DiscardMgt/Modify"}]},{group:"\u6570\u636E\u6E05\u6D17-\u4E22\u5F03\u7BA1\u7406",type:"post",url:"DiscardMgt/PageQueryDiscardMgt",title:"\u5206\u9875\u67E5\u8BE2\u4E22\u5F03\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "page": 1,                  // \u5FC5\u4F20
        "pageSize": 10,             // \u5FC5\u4F20
        "sortType": "DESC",         // \u5FC5\u4F20
        "dataSourceName": "source", // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
        "dataSchemaName": "schema", // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
        "refKey": "key"            // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "pageSize": 10,
        "page": 1,
        "totalSize": 100,
        "totalPage": 10,
        "list": [{
            "dmId": "dmId1",
            "disId": "schema123",
            "refKey": "key1|key2",
            "matchAction": "E|C",
            "targetValue": "value1|value2",
            "dataTypes": "str|int",
            "sortSeq": "1",
            "remark": "\u5907\u6CE8\u4FE1\u606F",
            "timeStampSS": "20240108110334",
            "OPFlag": "M",
            "dataSourceName": "\u6570\u636E\u6E901",
            "dataSchemaName": "\u6570\u636E\u6A21\u5F0F1"
        }]
    }
}
| \u5C5E\u6027\u540D          | \u7C7B\u578B    | \u6CE8\u91CA                                                                                     | \u9ED8\u8BA4\u503C  |
|-----------------|---------|------------------------------------------------------------------------------------------|---------|
| dmId            | String  | \u4E22\u5F03\u7BA1\u7406ID                                                                               |         |
| refKey          | String  | \u4F9D\u8D56\u952E,\u591A\u4E2A\u4EE5|\u5206\u5272                                                                       |         |
| matchAction     | String  | \u5339\u914D\u52A8\u4F5C,\u591A\u4E2A\u4EE5|\u5206\u5272\uFF08\u76F8\u7B49 E \u5305\u542B C \u5927\u4E8E DY \u5C0F\u4E8E XY \u4E0D\u7B49\u4E8E NE \u5927\u4E8E\u7B49\u4E8E DE  \u5C0F\u4E8E\u7B49\u4E8E XE \u9ED8\u8BA4 E\uFF09 | "E"     |
| targetValue     | String  | \u76EE\u6807\u503C,\u591A\u4E2A\u4EE5|\u5206\u5272                                                                       |         |
| remark          | String  | \u5907\u6CE8                                                                                     |         |
| timeStampSS     | String  | \u65F6\u95F4\u6233                                                                                    |         |
| disId           | String  | \u6570\u636E\u8BC6\u522B\u6A21\u5F0F                                                                             |         |
| sortSeq         | String  | \u6392\u5E8F\u53F7                                                                                    |         |
| dataTypes       | String  | \u6570\u636E\u7C7B\u578B,\u591A\u4E2A\u4EE5|\u5206\u5272\uFF08int float long \u5B57\u7B26\u4E32 str \u65E5\u671F\u65F6\u95F4 date \u9ED8\u8BA4 str\uFF09                  | "str"   |
| OPFlag          | String  | \u64CD\u4F5C\u6807\u8BC6\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0C\u65B0\u589EI\uFF0C\u4FEE\u6539M\uFF0C\u5220\u9664D\uFF09                                                 |         |
| dataSourceName| String  | \u6570\u636E\u6E90\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF09                                                                   |         |
| dataSchemaName  | String  | \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF09                                                                 |         |`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DiscardMgtController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u4E22\u5F03\u7BA1\u7406",name:"PostDiscardmgtPagequerydiscardmgt",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DiscardMgt/PageQueryDiscardMgt"}]},{group:"\u6570\u636E\u6E05\u6D17-\u4E22\u5F03\u7BA1\u7406",type:"post",url:"DiscardMgt/QueryDiscardMgt",title:"\u67E5\u8BE2\u5355\u4E2A\u4E22\u5F03\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "dmId": "dmId1"    // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "dmId": "dmId1",
        "disId": "schema123",
        "refKey": "key1|key2",
        "matchAction": "E|C",
        "targetValue": "value1|value2",
        "dataTypes": "str|int",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334",
        "OPFlag": "M",
        "dataSourceName": "\u6570\u636E\u6E901",
        "dataSchemaName": "\u6570\u636E\u6A21\u5F0F1"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DiscardMgtController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u4E22\u5F03\u7BA1\u7406",name:"PostDiscardmgtQuerydiscardmgt",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DiscardMgt/QueryDiscardMgt"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u53BB\u91CD",type:"post",url:"DistRepData/Add",title:"\u65B0\u589E\u6570\u636E\u53BB\u91CD\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "disId": "schema123",      // \u5FC5\u4F20\uFF08\u5916\u952E\uFF09
        "refKey": "key1|key2",     // \u53EF\u9009
        "matchAction": "E|C",      // \u53EF\u9009\uFF0C\u9ED8\u8BA4E\uFF08\u76F8\u7B49E/\u5305\u542BC\uFF09
        "sortSeq": "1",            // \u53EF\u9009
        "remark": "\u5907\u6CE8\u4FE1\u606F"        // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "drdId": "uuid",
        "disId": "schema123",
        "refKey": "key1|key2",
        "matchAction": "E|C",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DistRepDataController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u53BB\u91CD",name:"PostDistrepdataAdd",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DistRepData/Add"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u53BB\u91CD",type:"post",url:"DistRepData/Delete",title:"\u5220\u9664\u6570\u636E\u53BB\u91CD\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": ["drdId1", "drdId2"]   // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\u5217\u8868\uFF09
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DistRepDataController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u53BB\u91CD",name:"PostDistrepdataDelete",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DistRepData/Delete"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u53BB\u91CD",type:"post",url:"DistRepData/Modify",title:"\u4FEE\u6539\u6570\u636E\u53BB\u91CD\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "drdId": "uuid",            // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
        "disId": "schema123",      // \u53EF\u9009
        "refKey": "key1|key2",     // \u53EF\u9009
        "matchAction": "E|C",      // \u53EF\u9009\uFF0C\u9ED8\u8BA4E\uFF08\u76F8\u7B49E/\u5305\u542BC\uFF09
        "sortSeq": "1",            // \u53EF\u9009
        "remark": "\u66F4\u65B0\u7684\u5907\u6CE8"      // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "drdId": "uuid",
        "disId": "schema123",
        "refKey": "key1|key2",
        "matchAction": "E|C",
        "sortSeq": "1",
        "remark": "\u66F4\u65B0\u7684\u5907\u6CE8",
        "timeStampSS": "20240108110334"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DistRepDataController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u53BB\u91CD",name:"PostDistrepdataModify",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DistRepData/Modify"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u53BB\u91CD",type:"post",url:"DistRepData/PageQueryDistRepData",title:"\u5206\u9875\u67E5\u8BE2\u6570\u636E\u53BB\u91CD\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "page": 1,                  // \u5FC5\u4F20
        "pageSize": 10,             // \u5FC5\u4F20
        "sortType": "DESC",         // \u5FC5\u4F20
        "refKey": "key",            // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
        "dataSourceName": "source", // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
        "dataSchemaName": "schema", // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
        "dataItemName": "item"      // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "pageSize": 10,
        "page": 1,
        "totalSize": 100,
        "totalPage": 10,
        "list": [{
            "drdId": "drdId1",
            "disId": "schema123",
            "refKey": "key1|key2",
            "matchAction": "E|C",
            "sortSeq": "1",
            "remark": "\u5907\u6CE8\u4FE1\u606F",
            "timeStampSS": "20240108110334",
            "OPFlag": "M",
            "dataSourceName": "\u6570\u636E\u6E901",
            "dataSchemaName": "\u6570\u636E\u6A21\u5F0F1"
        }]
    }
}
| \u5C5E\u6027\u540D           | \u7C7B\u578B    | \u6CE8\u91CA                                                                                     | \u9ED8\u8BA4\u503C  |
|------------------|---------|------------------------------------------------------------------------------------------|---------|
| drdId            | String  | \u6570\u636E\u53BB\u91CDID                                                                               |         |
| refKey           | String  | \u4F9D\u8D56\u952E,\u591A\u4E2A\u4EE5|\u5206\u5272                                                                       |         |
| matchAction      | String  | \u5339\u914D\u52A8\u4F5C,\uFF08\u76F8\u7B49 E \u5305\u542B C \u9ED8\u8BA4 E\uFF09                                                        | "E"     |
| remark           | String  | \u5907\u6CE8                                                                                     |         |
| timeStampSS      | String  | \u65F6\u95F4\u6233                                                                                    |         |
| disId            | String  | \u6570\u636E\u8BC6\u522B\u6A21\u5F0F                                                                             |         |
| sortSeq          | String  | \u6392\u5E8F\u53F7                                                                                    |         |
| OPFlag           | String  | \u64CD\u4F5C\u6807\u8BC6\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0C\u65B0\u589EI\uFF0C\u4FEE\u6539M\uFF0C\u5220\u9664D\uFF09                                                 |         |
| dataSourceName | String  | \u6570\u636E\u6E90\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF09                                                                   |         |
| dataSchemaName   | String  | \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF09                                                                 |         |`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DistRepDataController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u53BB\u91CD",name:"PostDistrepdataPagequerydistrepdata",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DistRepData/PageQueryDistRepData"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u53BB\u91CD",type:"post",url:"DistRepData/QueryDistRepData",title:"\u67E5\u8BE2\u5355\u4E2A\u6570\u636E\u53BB\u91CD\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "drdId": "drdId1"    // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "drdId": "drdId1",
        "disId": "schema123",
        "refKey": "key1|key2",
        "matchAction": "E|C",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334",
        "OPFlag": "M",
        "dataSourceName": "\u6570\u636E\u6E901",
        "dataSchemaName": "\u6570\u636E\u6A21\u5F0F1"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/DistRepDataController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u53BB\u91CD",name:"PostDistrepdataQuerydistrepdata",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/DistRepData/QueryDistRepData"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u66FF\u6362",type:"post",url:"ReplaceValue/Add",title:"\u65B0\u589E\u6570\u636E\u66FF\u6362\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "dataItemId": "123",       // \u5FC5\u4F20\uFF08\u5916\u952E\uFF09
        "refKey": "key1|key2",     // \u53EF\u9009
        "refKeyValue": "value1|value2", // \u53EF\u9009
        "matchAction": "R",        // \u53EF\u9009\uFF0C\u9ED8\u8BA4R\uFF08\u7C7B\u578B\u8F6C\u6362C/\u76F4\u63A5\u66FF\u6362R\uFF09
        "socDataType": "int",      // \u53EF\u9009\uFF0C\u9ED8\u8BA4str\uFF08int/float/long/str/date/time/datetime\uFF09
        "socValue": "100",         // \u53EF\u9009
        "desiDataType": "str",     // \u53EF\u9009\uFF0C\u9ED8\u8BA4str\uFF08int/float/long/str/date/time/datetime\uFF09
        "desiValue": "\u4E00\u767E",       // \u53EF\u9009
        "repCaluLogic": "\u8BA1\u7B97\u903B\u8F91", // \u53EF\u9009\uFF08\u6807\u8BC6\u540D\u79F0\u89C4\u5219\uFF1A\u76EE\u6807\u6570\u636E\u6E90_\u76EE\u6807\u6570\u636E\u6A21\u5F0F_\u76EE\u6807\u6570\u636E\u9879_Rx\uFF0C\u5176\u4E2Dx\u4E3A\u6D41\u6C34\u53F7\uFF0C\u4E00\u822C\u53D6\u8BB0\u5F55\u6240\u5728\u884C\u53F7\uFF09
        "sortSeq": "1",            // \u53EF\u9009
        "remark": "\u5907\u6CE8\u4FE1\u606F"        // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "rvId": "uuid",
        "dataItemId": "123",
        "refKey": "key1|key2",
        "refKeyValue": "value1|value2",
        "matchAction": "R",
        "socDataType": "int",
        "socValue": "100",
        "desiDataType": "str",
        "desiValue": "\u4E00\u767E",
        "repCaluLogic": "\u8BA1\u7B97\u903B\u8F91",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ReplaceValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u66FF\u6362",name:"PostReplacevalueAdd",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/ReplaceValue/Add"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u66FF\u6362",type:"post",url:"ReplaceValue/Delete",title:"\u5220\u9664\u6570\u636E\u66FF\u6362\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": ["rvId1", "rvId2"]   // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\u5217\u8868\uFF09
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ReplaceValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u66FF\u6362",name:"PostReplacevalueDelete",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/ReplaceValue/Delete"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u66FF\u6362",type:"post",url:"ReplaceValue/Modify",title:"\u4FEE\u6539\u6570\u636E\u66FF\u6362\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "rvId": "uuid",            // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
        "refKeyValue": "newValue1|newValue2", // \u53EF\u9009
        "matchAction": "R",        // \u53EF\u9009\uFF0C\u9ED8\u8BA4R\uFF08\u7C7B\u578B\u8F6C\u6362C/\u76F4\u63A5\u66FF\u6362R\uFF09
        "socDataType": "int",      // \u53EF\u9009\uFF0C\u9ED8\u8BA4str\uFF08int/float/long/str/date/time/datetime\uFF09
        "socValue": "200",         // \u53EF\u9009
        "desiDataType": "str",     // \u53EF\u9009\uFF0C\u9ED8\u8BA4str\uFF08int/float/long/str/date/time/datetime\uFF09
        "desiValue": "\u4E8C\u767E",       // \u53EF\u9009
        "repCaluLogic": "\u65B0\u8BA1\u7B97\u903B\u8F91", // \u53EF\u9009\uFF08\u6807\u8BC6\u540D\u79F0\u89C4\u5219\uFF1A\u76EE\u6807\u6570\u636E\u6E90_\u76EE\u6807\u6570\u636E\u6A21\u5F0F_\u76EE\u6807\u6570\u636E\u9879_Rx\uFF0C\u5176\u4E2Dx\u4E3A\u6D41\u6C34\u53F7\uFF0C\u4E00\u822C\u53D6\u8BB0\u5F55\u6240\u5728\u884C\u53F7\uFF09
        "sortSeq": "2",            // \u53EF\u9009
        "remark": "\u65B0\u5907\u6CE8"          // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "rvId": "uuid",
        "dataItemId": "123",
        "refKey": "key1|key2",
        "refKeyValue": "newValue1|newValue2",
        "matchAction": "R",
        "socDataType": "int",
        "socValue": "200",
        "desiDataType": "str",
        "desiValue": "\u4E8C\u767E",
        "repCaluLogic": "\u65B0\u8BA1\u7B97\u903B\u8F91",
        "sortSeq": "2",
        "remark": "\u65B0\u5907\u6CE8",
        "timeStampSS": "20240108110334"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ReplaceValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u66FF\u6362",name:"PostReplacevalueModify",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/ReplaceValue/Modify"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u66FF\u6362",type:"post",url:"ReplaceValue/PageQueryReplaceValue",title:"\u5206\u9875\u67E5\u8BE2\u6570\u636E\u66FF\u6362\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "page": 1,                  // \u5FC5\u4F20
        "pageSize": 10,             // \u5FC5\u4F20
        "sortType": "DESC",         // \u5FC5\u4F20
        "dataSourceName": "source", // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
        "dataSchemaName": "schema", // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
        "dataItemName": "item",     // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
        "refKey": "key"             // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "pageSize": 10,
        "page": 1,
        "totalSize": 100,
        "totalPage": 10,
        "list": [{
            "rvId": "uuid",
            "dataItemId": "123",
            "refKey": "key1|key2",
            "refKeyValue": "value1|value2",
            "matchAction": "R",
            "socDataType": "int",
            "socValue": "100",
            "desiDataType": "str",
            "desiValue": "\u4E00\u767E",
            "repCaluLogic": "\u8BA1\u7B97\u903B\u8F91",
            "sortSeq": "1",
            "remark": "\u5907\u6CE8\u4FE1\u606F",
            "timeStampSS": "20240108110334",
            "OPFlag": "M",
            "dataItemName": "\u6570\u636E\u98791",
            "dataSourceName": "\u6570\u636E\u6E901",
            "dataSchemaName": "\u6570\u636E\u6A21\u5F0F1"
        }]
    }
}
| \u5C5E\u6027\u540D          | \u7C7B\u578B    | \u6CE8\u91CA                                                                                     | \u9ED8\u8BA4\u503C  |
|-----------------|---------|------------------------------------------------------------------------------------------|---------|
| rvId            | String  | \u6570\u503C\u66FF\u6362ID                                                                               |         |
| refKey          | String  | \u4F9D\u8D56\u952E,\u591A\u4E2A\u4EE5|\u5206\u5272                                                                       |         |
| refKeyValue     | String  | \u4F9D\u8D56\u952E\u503C,\u591A\u4E2A\u4EE5|\u5206\u5272                                                                     |         |
| matchAction     | String  | \u5339\u914D\u52A8\u4F5C,\uFF08\u7C7B\u578B\u8F6C\u6362C/\u76F4\u63A5\u66FF\u6362R\uFF09                                                         | "R"     |
| socDataType     | String  | \u6765\u6E90\u7C7B\u578B,SocDataType\uFF08int/float/long/str/date/time/datetime\uFF09                            | "str"   |
| socValue        | String  | \u6765\u6E90\u503C                                                                                    |         |
| desiDataType    | String  | \u76EE\u6807\u7C7B\u578B,DesiDataType\uFF08int/float/long/str/date/time/datetime\uFF09                           | "str"   |
| desiValue       | String  | \u66FF\u6362\u76EE\u6807\u503C                                                                                |         |
| repCaluLogic    | String  | \u66FF\u6362\u8BA1\u7B97\u903B\u8F91,\uFF08\u6807\u8BC6\u540D\u79F0\u89C4\u5219\uFF1A\u76EE\u6807\u6570\u636E\u6E90_\u76EE\u6807\u6570\u636E\u6A21\u5F0F_\u76EE\u6807\u6570\u636E\u9879_Rx\uFF0C\u5176\u4E2Dx\u4E3A\u6D41\u6C34\u53F7\uFF0C\u4E00\u822C\u53D6\u8BB0\u5F55\u6240\u5728\u884C\u53F7\uFF09 |         |
| remark          | String  | \u5907\u6CE8                                                                                     |         |
| timeStampSS     | String  | \u65F6\u95F4\u6233                                                                                    |         |
| dataItemId      | String  | \u6570\u636E\u9879ID                                                                                  |         |
| sortSeq         | String  | \u6392\u5E8F\u53F7                                                                                    |         |
| OPFlag          | String  | \u64CD\u4F5C\u6807\u8BC6\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0C\u65B0\u589EI\uFF0C\u4FEE\u6539M\uFF0C\u5220\u9664D\uFF09                                                 |         |
| dataItemName    | String  | \u6570\u636E\u9879\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0C\u5173\u8054\u5B57\u6BB5\uFF09                                                          |         |
| dataSourceName| String  | \u6570\u636E\u6E90\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF09                                                                   |         |
| dataSchemaName  | String  | \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF09                                                                 |         |`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ReplaceValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u66FF\u6362",name:"PostReplacevaluePagequeryreplacevalue",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/ReplaceValue/PageQueryReplaceValue"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u66FF\u6362",type:"post",url:"ReplaceValue/QueryReplaceValue",title:"\u67E5\u8BE2\u5355\u4E2A\u6570\u636E\u66FF\u6362\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "rvId": "rvId1"    // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "rvId": "uuid",
        "dataItemId": "123",
        "refKey": "key1|key2",
        "refKeyValue": "value1|value2",
        "matchAction": "R",
        "socDataType": "int",
        "socValue": "100",
        "desiDataType": "str",
        "desiValue": "\u4E00\u767E",
        "repCaluLogic": "\u8BA1\u7B97\u903B\u8F91",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334",
        "OPFlag": "M",
        "dataItemName": "\u6570\u636E\u98791",
        "dataSourceName": "\u6570\u636E\u6E901",
        "dataSchemaName": "\u6570\u636E\u6A21\u5F0F1"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ReplaceValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u66FF\u6362",name:"PostReplacevalueQueryreplacevalue",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/ReplaceValue/QueryReplaceValue"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u68C0\u67E5",type:"post",url:"CheckValue/Add",title:"\u65B0\u589E\u6570\u636E\u68C0\u67E5\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "dataItemId": "123",          // \u5FC5\u4F20\uFF08\u5916\u952E\uFF09
        "refKey": "key1|key2",        // \u53EF\u9009
        "refKeyValue": "value1|value2",// \u53EF\u9009
        "matchAction": "E|C",         // \u53EF\u9009\uFF0C\u9ED8\u8BA4E
        "dataType": "int",           // \u53EF\u9009\uFF0C\u9ED8\u8BA4str
        "dataRange": "0-100",        // \u53EF\u9009
        "defaultValue": "0",         // \u53EF\u9009
        "sortSeq": "1",              // \u53EF\u9009
        "remark": "\u5907\u6CE8\u4FE1\u606F"          // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "ckId": "uuid",
        "dataItemId": "123",
        "refKey": "key1|key2",
        "refKeyValue": "value1|value2",
        "matchAction": "E|C",
        "dataType": "int",
        "dataRange": "0-100",
        "defaultValue": "0",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CheckValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u68C0\u67E5",name:"PostCheckvalueAdd",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CheckValue/Add"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u68C0\u67E5",type:"post",url:"CheckValue/Delete",title:"\u5220\u9664\u6570\u636E\u68C0\u67E5\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": ["cvId1", "cvId2"]   // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\u5217\u8868\uFF09
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CheckValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u68C0\u67E5",name:"PostCheckvalueDelete",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CheckValue/Delete"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u68C0\u67E5",type:"post",url:"CheckValue/Modify",title:"\u4FEE\u6539\u6570\u636E\u68C0\u67E5\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "ckId": "uuid",              // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
        "dataItemId": "123",          // \u53EF\u9009
        "refKey": "key1|key2",        // \u53EF\u9009
        "refKeyValue": "value1|value2",// \u53EF\u9009
        "matchAction": "E|C",         // \u53EF\u9009\uFF0C\u9ED8\u8BA4E
        "dataType": "int",           // \u53EF\u9009\uFF0C\u9ED8\u8BA4str
        "dataRange": "0-100",        // \u53EF\u9009
        "defaultValue": "0",         // \u53EF\u9009
        "sortSeq": "1",              // \u53EF\u9009
        "remark": "\u5907\u6CE8\u4FE1\u606F"          // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "ckId": "uuid",
        "dataItemId": "123",
        "refKey": "key1|key2",
        "refKeyValue": "value1|value2",
        "matchAction": "E|C",
        "dataType": "int",
        "dataRange": "0-100",
        "defaultValue": "0",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CheckValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u68C0\u67E5",name:"PostCheckvalueModify",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CheckValue/Modify"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u68C0\u67E5",type:"post",url:"CheckValue/PageQueryCheckValue",title:"\u5206\u9875\u67E5\u8BE2\u6570\u636E\u68C0\u67E5\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "page": 1,                    // \u5FC5\u4F20
        "pageSize": 10,               // \u5FC5\u4F20
        "sortType": "DESC",           // \u5FC5\u4F20
        "dataSourceName": "source",    // \u53EF\u9009
        "dataSchemaName": "schema",    // \u53EF\u9009
        "dataItemName": "item",        // \u53EF\u9009
        "refKey": "key"               // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "pageSize": 10,
        "page": 1,
        "totalSize": 100,
        "totalPage": 10,
        "list": [{
            "ckId": "ckId1",
            "dataItemId": "123",
            "refKey": "key1|key2",
            "refKeyValue": "value1|value2",
            "matchAction": "E|C",
            "dataType": "int",
            "dataRange": "0-100",
            "defaultValue": "0",
            "sortSeq": "1",
            "remark": "\u5907\u6CE8\u4FE1\u606F",
            "timeStampSS": "20240108110334",
            "OPFlag": "M",
            "dataItemName": "\u6570\u636E\u98791",
            "dataSourceName": "\u6570\u636E\u6E901",
            "dataSchemaName": "\u6570\u636E\u6A21\u5F0F1"
        }]
    }
}
| \u5C5E\u6027\u540D          | \u7C7B\u578B    | \u6CE8\u91CA                                                                                     | \u9ED8\u8BA4\u503C  |
|-----------------|---------|------------------------------------------------------------------------------------------|---------|
| ckId            | String  | \u6570\u503C\u68C0\u67E5ID                                                                               |         |
| refKey          | String  | \u4F9D\u8D56\u952E,\u591A\u4E2A\u4EE5|\u5206\u5272                                                                       |         |
| refKeyValue     | String  | \u4F9D\u8D56\u952E\u503C,\u591A\u4E2A\u4EE5|\u5206\u5272                                                                     |         |
| matchAction     | String  | \u5339\u914D\u52A8\u4F5C,\u591A\u4E2A\u4EE5|\u5206\u5272\uFF08\u76F8\u7B49 E \u5305\u542B C \u5927\u4E8E DY \u5C0F\u4E8E XY \u4E0D\u7B49\u4E8E NE \u5927\u4E8E\u7B49\u4E8E DE  \u5C0F\u4E8E\u7B49\u4E8E XE \u9ED8\u8BA4 E\uFF09 | "B"     |
| dataType        | String  | \u6570\u636E\u7C7B\u578B, DataType\uFF08int float long str date time datetime \u9ED8\u8BA4 str\uFF09                     | "str"   |
| dataRange       | String  | \u6570\u636E\u8303\u56F4,\u683C\u5F0F\uFF1Astart-end                                                                 |         |
| remark          | String  | \u5907\u6CE8                                                                                      |         |
| timeStampSS     | String  | \u65F6\u95F4\u6233                                                                                    |         |
| dataItemId      | String  | \u6570\u636E\u9879ID                                                                                  |         |
| sortSeq         | String  | \u6392\u5E8F\u53F7                                                                                    |         |
| defaultValue    | String  | \u9ED8\u8BA4\u8865\u5145\u503C                                                                                |         |
| OPFlag          | String  | \u64CD\u4F5C\u6807\u8BC6\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0C\u65B0\u589EI\uFF0C\u4FEE\u6539M\uFF0C\u5220\u9664D\uFF09                                                 |         |
| dataItemName    | String  | \u6570\u636E\u9879\u540D\u79F0(\u5197\u4F59\u5B57\u6BB5\uFF09                                                                     |         |
| dataSourceName| String  | \u6570\u636E\u6E90\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF09                                                                   |         |
| dataSchemaName  | String  | \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF09                                                                 |         |`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CheckValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u68C0\u67E5",name:"PostCheckvaluePagequerycheckvalue",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CheckValue/PageQueryCheckValue"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u68C0\u67E5",type:"post",url:"CheckValue/QueryCheckValue",title:"\u67E5\u8BE2\u5355\u4E2A\u6570\u636E\u68C0\u67E5\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "ckId": "ckId1"              // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "ckId": "ckId1",
        "dataItemId": "123",
        "refKey": "key1|key2",
        "refKeyValue": "value1|value2",
        "matchAction": "E|C",
        "dataType": "int",
        "dataRange": "0-100",
        "defaultValue": "0",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334",
        "OPFlag": "M",
        "dataItemName": "\u6570\u636E\u98791",
        "dataSourceName": "\u6570\u636E\u6E901",
        "dataSchemaName": "\u6570\u636E\u6A21\u5F0F1"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/CheckValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u68C0\u67E5",name:"PostCheckvalueQuerycheckvalue",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/CheckValue/QueryCheckValue"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u8FC7\u6EE4",type:"post",url:"FilterData/Add",title:"\u65B0\u589E\u6570\u636E\u8FC7\u6EE4\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "disId": "schema123",      // \u5FC5\u4F20\uFF08\u5916\u952E\uFF09
        "refKey": "key1|key2",     // \u53EF\u9009
        "matchAction": "E|C",      // \u53EF\u9009\uFF0C\u9ED8\u8BA4E\uFF08\u76F8\u7B49E/\u5305\u542BC/\u5927\u4E8EDY/\u5C0F\u4E8EXY/\u4E0D\u7B49\u4E8ENE/\u5927\u4E8E\u7B49\u4E8EDE/\u5C0F\u4E8E\u7B49\u4E8EXE\uFF09
        "targetValue": "value1|value2", // \u53EF\u9009
        "dataTypes": "str|int",    // \u53EF\u9009\uFF0C\u9ED8\u8BA4str\uFF08int/float/long/str/date\uFF09
        "sortSeq": "1",            // \u53EF\u9009
        "remark": "\u5907\u6CE8\u4FE1\u606F"        // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "fdId": "uuid",
        "disId": "schema123",
        "refKey": "key1|key2",
        "matchAction": "E|C",
        "targetValue": "value1|value2",
        "dataTypes": "str|int",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/FilterDataController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u8FC7\u6EE4",name:"PostFilterdataAdd",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/FilterData/Add"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u8FC7\u6EE4",type:"post",url:"FilterData/Delete",title:"\u5220\u9664\u6570\u636E\u8FC7\u6EE4\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": ["fdId1", "fdId2"]   // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\u5217\u8868\uFF09
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/FilterDataController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u8FC7\u6EE4",name:"PostFilterdataDelete",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/FilterData/Delete"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u8FC7\u6EE4",type:"post",url:"FilterData/Modify",title:"\u4FEE\u6539\u6570\u636E\u8FC7\u6EE4\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "fdId": "uuid",            // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
        "disId": "schema123",      // \u53EF\u9009
        "refKey": "key1|key2",     // \u53EF\u9009
        "matchAction": "E|C",      // \u53EF\u9009\uFF0C\u9ED8\u8BA4E\uFF08\u76F8\u7B49E/\u5305\u542BC/\u5927\u4E8EDY/\u5C0F\u4E8EXY/\u4E0D\u7B49\u4E8ENE/\u5927\u4E8E\u7B49\u4E8EDE/\u5C0F\u4E8E\u7B49\u4E8EXE\uFF09
        "targetValue": "value1|value2", // \u53EF\u9009
        "dataTypes": "str|int",    // \u53EF\u9009\uFF0C\u9ED8\u8BA4str\uFF08int/float/long/str/date\uFF09
        "sortSeq": "1",            // \u53EF\u9009
        "remark": "\u66F4\u65B0\u7684\u5907\u6CE8"      // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "fdId": "uuid",
        "disId": "schema123",
        "refKey": "key1|key2",
        "matchAction": "E|C",
        "targetValue": "value1|value2",
        "dataTypes": "str|int",
        "sortSeq": "1",
        "remark": "\u66F4\u65B0\u7684\u5907\u6CE8",
        "timeStampSS": "20240108110334"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/FilterDataController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u8FC7\u6EE4",name:"PostFilterdataModify",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/FilterData/Modify"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u8FC7\u6EE4",type:"post",url:"FilterData/PageQueryFilterData",title:"\u5206\u9875\u67E5\u8BE2\u6570\u636E\u8FC7\u6EE4\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "page": 1,                  // \u5FC5\u4F20
        "pageSize": 10,             // \u5FC5\u4F20
        "sortType": "DESC",         // \u5FC5\u4F20
        "dataSourceName": "source", // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
        "dataSchemaNamed": "schema", // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
        "dataItemName": "item",     // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
        "refKey": "key"             // \u53EF\u9009\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "pageSize": 10,
        "page": 1,
        "totalSize": 100,
        "totalPage": 10,
        "list": [{
            "fdId": "fdId1",
            "disId": "schema123",
            "refKey": "key1|key2",
            "matchAction": "E|C",
            "targetValue": "value1|value2",
            "dataTypes": "str|int",
            "sortSeq": "1",
            "remark": "\u5907\u6CE8\u4FE1\u606F",
            "timeStampSS": "20240108110334",
            "OPFlag": "M",
            "dataSourceName": "\u6570\u636E\u6E901",
            "dataSchemaName": "\u6570\u636E\u6A21\u5F0F1"
        }]
    }
}
| \u5C5E\u6027\u540D          | \u7C7B\u578B    | \u6CE8\u91CA                                                                                     | \u9ED8\u8BA4\u503C  |
|-----------------|---------|------------------------------------------------------------------------------------------|---------|
| fdId            | String  | \u6570\u636E\u8FC7\u6EE4ID                                                                               |         |
| refKey          | String  | \u4F9D\u8D56\u952E,\u591A\u4E2A\u4EE5|\u5206\u5272                                                                       |         |
| matchAction     | String  | \u5339\u914D\u52A8\u4F5C,\u591A\u4E2A\u4EE5|\u5206\u5272\uFF08\u76F8\u7B49E/\u5305\u542BC/\u5927\u4E8EDY/\u5C0F\u4E8EXY/\u4E0D\u7B49\u4E8ENE/\u5927\u4E8E\u7B49\u4E8EDE/\u5C0F\u4E8E\u7B49\u4E8EXE\uFF09         | "E"     |
| targetValue     | String  | \u76EE\u6807\u503C,\u591A\u4E2A\u4EE5|\u5206\u5272\uFF0C\u8FD9\u4E2A\u5C31\u662F\u4F9D\u8D56\u952E\u503C                                                                     |         |
| remark          | String  | \u5907\u6CE8                                                                                     |         |
| timeStampSS     | String  | \u65F6\u95F4\u6233                                                                                    |         |
| disId           | String  | \u6570\u636E\u8BC6\u522B\u6A21\u5F0F                                                                             |         |
| sortSeq         | String  | \u6392\u5E8F\u53F7                                                                                    |         |
| dataTypes       | String  | \u6570\u636E\u7C7B\u578B,\u591A\u4E2A\u4EE5|\u5206\u5272\uFF08int/float/long/str/date\uFF09                                          | "str"   |
| OPFlag          | String  | \u64CD\u4F5C\u6807\u8BC6\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0C\u65B0\u589EI\uFF0C\u4FEE\u6539M\uFF0C\u5220\u9664D\uFF09                                                 |         |
| dataSourceName| String  | \u6570\u636E\u6E90\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF09                                                                   |         |
| dataSchemaName  | String  | \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF09                                                                 |         |`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/FilterDataController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u8FC7\u6EE4",name:"PostFilterdataPagequeryfilterdata",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/FilterData/PageQueryFilterData"}]},{group:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u8FC7\u6EE4",type:"post",url:"FilterData/QueryFilterData",title:"\u67E5\u8BE2\u5355\u4E2A\u6570\u636E\u8FC7\u6EE4\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "fdId": "fdId1"    // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "fdId": "fdId1",
        "disId": "schema123",
        "refKey": "key1|key2",
        "matchAction": "E|C",
        "targetValue": "value1|value2",
        "dataTypes": "str|int",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334",
        "OPFlag": "M",
        "dataSourceName": "\u6570\u636E\u6E901",
        "dataSchemaName": "\u6570\u636E\u6A21\u5F0F1"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/FilterDataController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u6570\u636E\u8FC7\u6EE4",name:"PostFilterdataQueryfilterdata",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/FilterData/QueryFilterData"}]},{group:"\u6570\u636E\u6E05\u6D17-\u7F3A\u5931\u503C\u7BA1\u7406",type:"post",url:"AddNonValue/Add",title:"\u65B0\u589E\u7F3A\u5931\u503C\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "dataItemId": "123",          // \u5FC5\u4F20\uFF08\u5916\u952E\uFF09
        "refKey": "key1|key2",        // \u53EF\u9009
        "refKeyValue": "value1|value2",// \u53EF\u9009
        "matchAction": "E|C",         // \u53EF\u9009\uFF0C\u9ED8\u8BA4E
        "desiValue": "\u8865\u5145\u503C",        // \u53EF\u9009
        "specCaluLogic": "\u8BA1\u7B97\u903B\u8F91",  // \u53EF\u9009
        "sortSeq": "1",              // \u53EF\u9009
        "remark": "\u5907\u6CE8\u4FE1\u606F"          // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "anvId": "uuid",
        "dataItemId": "123",
        "refKey": "key1|key2",
        "refKeyValue": "value1|value2",
        "matchAction": "E|C",
        "desiValue": "\u8865\u5145\u503C",
        "specCaluLogic": "\u8BA1\u7B97\u903B\u8F91",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/AddNonValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u7F3A\u5931\u503C\u7BA1\u7406",name:"PostAddnonvalueAdd",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/AddNonValue/Add"}]},{group:"\u6570\u636E\u6E05\u6D17-\u7F3A\u5931\u503C\u7BA1\u7406",type:"post",url:"AddNonValue/Delete",title:"\u5220\u9664\u7F3A\u5931\u503C\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": ["anvId1", "anvId2"]   // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\u5217\u8868\uFF09
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {}
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/AddNonValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u7F3A\u5931\u503C\u7BA1\u7406",name:"PostAddnonvalueDelete",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/AddNonValue/Delete"}]},{group:"\u6570\u636E\u6E05\u6D17-\u7F3A\u5931\u503C\u7BA1\u7406",type:"post",url:"AddNonValue/GetById",title:"\u6839\u636EID\u67E5\u8BE2\u7F3A\u5931\u503C\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "anvId": "anvId1"              // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "anvId": "uuid",
        "dataItemId": "123",
        "refKey": "key1|key2",
        "refKeyValue": "value1|value2",
        "matchAction": "E|C",
        "desiValue": "\u8865\u5145\u503C",
        "specCaluLogic": "\u8BA1\u7B97\u903B\u8F91",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334",
        "OPFlag": "M",
        "dataItemName": "\u6570\u636E\u98791",
        "dataSourceName": "\u6570\u636E\u6E901",
        "dataSchemaName": "\u6570\u636E\u6A21\u5F0F1"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/AddNonValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u7F3A\u5931\u503C\u7BA1\u7406",name:"PostAddnonvalueGetbyid",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/AddNonValue/GetById"}]},{group:"\u6570\u636E\u6E05\u6D17-\u7F3A\u5931\u503C\u7BA1\u7406",type:"post",url:"AddNonValue/Modify",title:"\u4FEE\u6539\u7F3A\u5931\u503C\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "anvId": "uuid",              // \u5FC5\u4F20\uFF08\u5B9E\u4F53ID\uFF09
        "refKeyValue": "value1|value2",// \u53EF\u9009
        "matchAction": "E|C",         // \u53EF\u9009\uFF0C\u9ED8\u8BA4E
        "desiValue": "\u8865\u5145\u503C",        // \u53EF\u9009
        "specCaluLogic": "\u8BA1\u7B97\u903B\u8F91",  // \u53EF\u9009
        "sortSeq": "1",              // \u53EF\u9009
        "remark": "\u5907\u6CE8\u4FE1\u606F"          // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "anvId": "uuid",
        "dataItemId": "123",
        "refKey": "key1|key2",
        "refKeyValue": "value1|value2",
        "matchAction": "E|C",
        "desiValue": "\u8865\u5145\u503C",
        "specCaluLogic": "\u8BA1\u7B97\u903B\u8F91",
        "sortSeq": "1",
        "remark": "\u5907\u6CE8\u4FE1\u606F",
        "timeStampSS": "20240108110334"
    }
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/AddNonValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u7F3A\u5931\u503C\u7BA1\u7406",name:"PostAddnonvalueModify",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/AddNonValue/Modify"}]},{group:"\u6570\u636E\u6E05\u6D17-\u7F3A\u5931\u503C\u7BA1\u7406",type:"post",url:"AddNonValue/PageQuery",title:"\u5206\u9875\u67E5\u8BE2\u7F3A\u5931\u503C\u914D\u7F6E",parameter:{examples:[{title:"Request-Example:",content:`{
    "ReqDatas": {
        "page": 1,                // \u5FC5\u4F20
        "pageSize": 10,               // \u5FC5\u4F20
        "sortType": "DESC",           // \u5FC5\u4F20
        "dataSourceName": "source",    // \u53EF\u9009
        "dataSchemaName": "schema",    // \u53EF\u9009
        "dataItemName": "item",        // \u53EF\u9009
        "refKey": "key"               // \u53EF\u9009
    }
}`,type:"json"}]},success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "pageSize": 10,
        "page": 1,
        "totalSize": 100,
        "totalPage": 10,
        "list": [{
            "anvId": "uuid1",
            "dataItemId": "123",
            "refKey": "key1|key2",
            "refKeyValue": "value1|value2",
            "matchAction": "E|C",
            "desiValue": "\u8865\u5145\u503C1",
            "specCaluLogic": "\u8BA1\u7B97\u903B\u8F911",
            "sortSeq": "1",
            "remark": "\u5907\u6CE81",
            "timeStampSS": "20240108110334",
            "OPFlag": "M",
            "dataItemName": "\u6570\u636E\u98791",
            "dataSourceName": "\u6570\u636E\u6E901",
            "dataSchemaName": "\u6570\u636E\u6A21\u5F0F1"
        }]
    }
}

| \u5C5E\u6027\u540D          | \u7C7B\u578B    | \u6CE8\u91CA                                                                                     |
|-----------------|---------|------------------------------------------------------------------------------------------|
| anvId           | String  | \u7F3A\u5931\u503C\u8865\u5145ID                                                                             |
| refKey          | String  | \u4F9D\u8D56\u952E,\u591A\u4E2A\u4EE5|\u5206\u5272                                                                       |
| refKeyValue     | String  | \u4F9D\u8D56\u952E\u503C,\u591A\u4E2A\u4EE5|\u5206\u5272                                                                     |
| matchAction     | String  | \u5339\u914D\u52A8\u4F5C,\u591A\u4E2A\u4EE5|\u5206\u5272\uFF08\u76F8\u7B49 E \u5305\u542B C \u9ED8\u8BA4 E\uFF09                                             |
| desiValue       | String  | \u8865\u5145\u503C                                                                                    |
| specCaluLogic   | String  | \u7279\u6B8A\u8BA1\u7B97\u903B\u8F91(\u7528\u4E8E\u8BA1\u7B97\u8865\u5145\u503C\uFF0C\u82E5\u5B58\u5728\u4F7F\u7528\u8BA1\u7B97\u7ED3\u679C\uFF0C\u4E0D\u5B58\u5728\u76F4\u63A5\u7528\u914D\u7F6E\u8865\u5145\u503C\uFF08\u6807\u8BC6\u540D\u79F0\u89C4\u5219\uFF1A\u76EE\u6807\u6570\u636E\u6E90_\u76EE\u6807\u6570\u636E\u6A21\u5F0F_\u76EE\u6807\u6570\u636E\u9879_Ax\uFF0C\u5176\u4E2Dx\u4E3A\u6D41\u6C34\u53F7\uFF0C\u4E00\u822C\u53D6\u8BB0\u5F55\u6240\u5728\u884C\u53F7\uFF09) |
| remark          | String  | \u5907\u6CE8                                                                                      |
| timeStampSS     | String  | \u65F6\u95F4\u6233                                                                                    |
| dataItemId      | String  | \u6570\u636E\u9879ID                                                                                  |
| sortSeq         | String  | \u6392\u5E8F\u53F7                                                                                    |
| OPFlag          | String  | \u64CD\u4F5C\u6807\u8BC6(\u5197\u4F59\u5B57\u6BB5\uFF0C\u7528\u4F5C\u6807\u8BC6:\u65B0\u589EI\uFF0C\u4FEE\u6539M\uFF0C\u5220\u9664D\uFF09                                         |
| dataItemName    | String  | \u6570\u636E\u9879\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF0C\u5173\u8054\u5B57\u6BB5\uFF09                                                          |
| dataSourceName| String  | \u6570\u636E\u6E90\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF09                                                                   |
| dataSchemaName  | String  | \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF08\u5197\u4F59\u5B57\u6BB5\uFF09                                                                 |`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/AddNonValueController.java",groupTitle:"\u6570\u636E\u6E05\u6D17-\u7F3A\u5931\u503C\u7BA1\u7406",name:"PostAddnonvaluePagequery",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/AddNonValue/PageQuery"}]},{group:"\u6570\u636E\u9879\u7BA1\u7406",type:"post",url:"AddDataItem",title:"\u6570\u636E\u9879-\u5355\u4E2A\u65B0\u589E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "disId": "disId", // \u6570\u636E\u9879\u8BC6\u522B\u6A21\u5F0FID\uFF0CString\uFF0C\u5FC5\u4F20
    "DATAITEMIDEN": "dataItemIden" // \u6570\u636E\u9879\u8BC6\u522B\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\"dataItemId\\":\\"itemId1\\",\\"dataItemIden\\":\\"itemIden1\\",\\"dataItemIdenName\\":\\"itemName1\\",\\"remark\\":\\"This is a remark\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\",\\"disId\\":\\"disId1\\",\\"nullsAble\\":\\"1\\",\\"checkAutoAdd\\":\\"0\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "dataItemId": "itemId1",
    "dataItemIden": "itemIden1",
    "dataItemIdenName": "itemName1",
    "remark": "This is a remark",
    "timestampSs": "2024-11-28 11:43:02",
    "disId": "disId1",
    "nullsAble": "1",
    "checkAutoAdd": "0"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u6570\u636E\u9879\u7BA1\u7406",name:"PostAdddataitem",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/AddDataItem"}]},{group:"\u6570\u636E\u9879\u7BA1\u7406",type:"post",url:"BatchDeleteDataItems",title:"\u6570\u636E\u9879-\u6279\u91CF\u5220\u9664",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`[
    "itemId1", // \u6570\u636E\u9879ID\uFF0CString\uFF0C\u5FC5\u4F20
    "itemId2"  // \u6570\u636E\u9879ID\uFF0CString\uFF0C\u5FC5\u4F20
]`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u6570\u636E\u9879\u7BA1\u7406",name:"PostBatchdeletedataitems",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/BatchDeleteDataItems"}]},{group:"\u6570\u636E\u9879\u7BA1\u7406",type:"post",url:"GetAllDataSchemaNames",title:"\u6570\u636E\u9879-\u67E5\u8BE2\u6240\u6709\u6570\u636E\u6A21\u5F0F\u540D\u79F0",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:"{}",type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "[{\\"dataSchemaName\\":\\"schemaName1\\",\\"dataSchemaIden\\":\\"schemaIden1\\"},{\\"dataSchemaName\\":\\"schemaName2\\",\\"dataSchemaIden\\":\\"schemaIden2\\"}]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
[
  {
    "dataSchemaName": "schemaName1",
    "dataSchemaIden": "schemaIden1"
  },
  {
    "dataSchemaName": "schemaName2",
    "dataSchemaIden": "schemaIden2"
  }
]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u6570\u636E\u9879\u7BA1\u7406",name:"PostGetalldataschemanames",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetAllDataSchemaNames"}]},{group:"\u6570\u636E\u9879\u7BA1\u7406",type:"post",url:"GetDataItemById",title:"\u6570\u636E\u9879-\u5355\u8BB0\u5F55\u67E5\u8BE2",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "dataItemId": "itemId" // \u6570\u636E\u9879ID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\"dataItemId\\":\\"itemId1\\",\\"dataItemIden\\":\\"itemIden1\\",\\"dataItemIdenName\\":\\"itemName1\\",\\"remark\\":\\"This is a remark\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\",\\"disId\\":\\"disId1\\",\\"nullsAble\\":\\"1\\",\\"checkAutoAdd\\":\\"0\\",\\"dataIdenName\\":\\"sourceName1\\",\\"dataSchemaName\\":\\"schemaName1\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "dataItemId": "itemId1",
    "dataItemIden": "itemIden1",
    "dataItemIdenName": "itemName1",
    "remark": "This is a remark",
    "timestampSs": "2024-11-28 11:43:02",
    "disId": "disId1",
    "nullsAble": "1",
    "checkAutoAdd": "0",
    "dataIdenName": "sourceName1", // \u6570\u636E\u6E90\u540D\u79F0\uFF0C\u901A\u8FC7\u8FDE\u8868\u67E5\u8BE2
    "dataSchemaName": "schemaName1" // \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF0C\u901A\u8FC7\u8FDE\u8868\u67E5\u8BE2
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u6570\u636E\u9879\u7BA1\u7406",name:"PostGetdataitembyid",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetDataItemById"}]},{group:"\u6570\u636E\u9879\u7BA1\u7406",type:"post",url:"GetDataItemsPager",title:"\u6570\u636E\u9879-\u5E26\u6761\u4EF6\u5206\u9875\u67E5\u8BE2",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "page": 1,           // \u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
    "pageSize": 10,      // \u9875\u5927\u5C0F\uFF0CInteger\uFF0C\u5FC5\u4F20
    "sortType": "ASC",   // \u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "dataIdenName": "sourceName", // \u6570\u636E\u6E90\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "dataSchemaName": "schemaName", // \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "dataItemIdenName": "itemName", // \u6570\u636E\u9879\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u6A21\u7CCA\u67E5\u8BE2
    "dataItemIden": "itemIden" // \u6570\u636E\u9879\u8BC6\u522B\uFF0CString\uFF0C\u9009\u4F20\uFF0C\u5339\u914D\u67E5\u8BE2
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"totalSize\\":30,\\"totalPage\\":3,\\"pageSize\\":10,\\"page\\":1,\\"list\\":[{\\"dataItemId\\":\\"itemId1\\",\\"dataItemIden\\":\\"itemIden1\\",\\"dataItemIdenName\\":\\"itemName1\\",\\"remark\\":\\"This is a remark\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\",\\"disId\\":\\"disId1\\",\\"nullsAble\\":\\"1\\",\\"checkAutoAdd\\":\\"0\\",\\"dataIdenName\\":\\"sourceName1\\",\\"dataSchemaName\\":\\"schemaName1\\"}]}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "totalSize": 30,
    "totalPage": 3,
    "pageSize": 10,
    "page": 1,
    "list": [
        {
            "dataItemId": "itemId1",
            "dataItemIden": "itemIden1",
            "dataItemIdenName": "itemName1",
            "remark": "This is a remark",
            "timestampSs": "2024-11-28 11:43:02",
            "disId": "disId1",
            "nullsAble": "1",
            "checkAutoAdd": "0",
            "dataIdenName": "sourceName1", // \u6570\u636E\u6E90\u540D\u79F0\uFF0C\u901A\u8FC7\u8FDE\u8868\u67E5\u8BE2
            "dataSchemaName": "schemaName1" // \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF0C\u901A\u8FC7\u8FDE\u8868\u67E5\u8BE2
        }
    ]
}

\u6570\u636E\u5E93\u5B57\u6BB5\u8BF4\u660E\uFF1A
\u9A7C\u5CF0\u5B57\u6BB5          | \u5BF9\u5E94\u7684\u6CE8\u91CA\u53CA\u4E3B\u952E/\u7A7A\u503C\u4FE1\u606F
------------------|----------------------------------------------
dataItemId        | \u6570\u636E\u9879ID\uFF08\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
dataItemIden      | \u6570\u636E\u9879\u8BC6\u522B\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
dataItemIdenName  | \u6570\u636E\u9879\u8BC6\u522B\u540D\u79F0\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
remark            | \u5907\u6CE8\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
timestampSs       | \u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
disId             | \u6570\u636E\u8BC6\u522B\u6A21\u5F0FID\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
nullsAble         | \u662F\u5426\u53EF\u4E3A\u7A7A,( \u975E\u7A7A 1  \u53EF\u7A7A 0 \u9ED8\u8BA4 0 )\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
checkAutoAdd      | \u68C0\u67E5\u8FDD\u89C4\u53EF\u81EA\u52A8\u8865\u5145,( \u8865\u5145 1  \u4E0D\u8865\u5145 0 \u9ED8\u8BA4 0 )\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
dataIdenName      | \u6570\u636E\u6E90\u540D\u79F0\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u552F\u4E00\uFF01\uFF0CString\uFF09 // \u6765\u81EA DataSocIdens
dataSchemaName    | \u6570\u636E\u6A21\u5F0F\u540D\u79F0\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09 // \u6765\u81EA DataIdenSchema`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u6570\u636E\u9879\u7BA1\u7406",name:"PostGetdataitemspager",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetDataItemsPager"}]},{group:"\u6570\u636E\u9879\u7BA1\u7406",type:"post",url:"UpdateDataItem",title:"\u6570\u636E\u9879-\u5355\u4E2A\u4FEE\u6539",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "dataItemId": "itemId", // \u6570\u636E\u9879ID\uFF0CString\uFF0C\u5FC5\u4F20
    "dataItemIdenName": "itemName" // \u6570\u636E\u9879\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20,\u5176\u4ED6\u4E1A\u52A1\u5B57\u6BB5\u4E5F\u662F\u4E00\u6837\uFF0C\u9009\u4F20\uFF0C\u4F46\u662F\u6570\u636E\u9879\u8BC6\u522BdataItemIden\u4E0D\u53EF\u4EE5\u4FEE\u6539
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\"dataItemId\\":\\"itemId1\\",\\"dataItemIden\\":\\"itemIden1\\",\\"dataItemIdenName\\":\\"itemName1\\",\\"remark\\":\\"This is a remark\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\",\\"disId\\":\\"disId1\\",\\"nullsAble\\":\\"1\\",\\"checkAutoAdd\\":\\"0\\"}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "dataItemId": "itemId1",
    "dataItemIden": "itemIden1",
    "dataItemIdenName": "itemName1",
    "remark": "This is a remark",
    "timestampSs": "2024-11-28 11:43:02",
    "disId": "disId1",
    "nullsAble": "1",
    "checkAutoAdd": "0"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u6570\u636E\u9879\u7BA1\u7406",name:"PostUpdatedataitem",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/UpdateDataItem"}]},{type:"post",url:"upload-file",title:"\u6587\u4EF6\u4E0A\u4F20",group:"\u6587\u4EF6\u4E0A\u4F20",version:"0.0.1",body:[{group:"Body",type:"File",optional:!1,field:"file",isArray:!1,description:"<p>\u4E0A\u4F20\u7684\u6587\u4EF6</p>"}],success:{examples:[{title:"Success-Response:",content:`{
    "Status": "1",
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespSuccessInfo": "successStr",
    "RespData": {
        "fileName": "fdf",//\u6587\u4EF6\u540D\u79F0
        "filePath": "/schema123",//\u6587\u4EF6\u8DEF\u5F84
        "fileFormat": "csv"//\u6587\u4EF6\u683C\u5F0F
        "fileSize": "123"//\u6587\u4EF6\u5927\u5C0F,\u5355\u4F4DKB
    }
}`,type:"json"}]},filename:"main/java/codefc/datamagicmgtapi/controller/FileController.java",groupTitle:"\u6587\u4EF6\u4E0A\u4F20",name:"PostUploadFile",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/upload-file"}]},{type:"delete",url:"/delete-file",title:"\u5220\u9664\u6587\u4EF6",group:"\u6587\u4EF6\u7BA1\u7406",version:"1.0.0",query:[{group:"Query",type:"String",optional:!1,field:"fmcId",isArray:!1,description:"<p>\u6587\u4EF6ID\uFF0C\u5FC5\u586B</p>"}],parameter:{examples:[{title:"\u8BF7\u6C42\u793A\u4F8B:",content:`/delete-file?fmcId=123456

\u54CD\u5E94\u793A\u4F8B:
{
    "Status": "1",                                  // \u72B6\u6001\u7801 1-\u6210\u529F 0-\u5931\u8D25
    "DueWithDateTime": "2024-03-21 15:30:45",      // \u5904\u7406\u65F6\u95F4
    "RespSuccessInfo": "\u6587\u4EF6\u5220\u9664\u6210\u529F"               // \u6210\u529F\u4FE1\u606F
}`,type:"query"}]},filename:"main/java/codefc/datamagicmgtapi/controller/FileController.java",groupTitle:"\u6587\u4EF6\u7BA1\u7406",name:"DeleteDeleteFile",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi//delete-file"}]},{type:"get",url:"/file-metadata",title:"\u83B7\u53D6\u6587\u4EF6\u5143\u6570\u636E",group:"\u6587\u4EF6\u7BA1\u7406",version:"1.0.0",query:[{group:"Query",type:"String",optional:!1,field:"fmcId",isArray:!1,description:"<p>\u6587\u4EF6ID\uFF0C\u5FC5\u586B</p>"}],parameter:{examples:[{title:"\u8BF7\u6C42\u793A\u4F8B:",content:`/file-metadata?fmcId=123456

\u54CD\u5E94\u793A\u4F8B:
{
    "Status": "1",                                  // \u72B6\u6001\u7801 1-\u6210\u529F 0-\u5931\u8D25
    "DueWithDateTime": "2024-03-21 15:30:45",      // \u5904\u7406\u65F6\u95F4
    "RespSuccessInfo": "\u83B7\u53D6\u6210\u529F",                  // \u6210\u529F\u4FE1\u606F
    "RespData": {                                  // \u6587\u4EF6\u5143\u6570\u636E
        "amiid": "123456",                         // \u6587\u4EF6ID
        "filename": "example.pdf",                 // \u6587\u4EF6\u540D\u79F0
        "savehostpath": "/2024-03-21/example.pdf", // \u5B58\u50A8\u8DEF\u5F84
        "filetype": "\u6587\u6863"                         // \u6587\u4EF6\u7C7B\u578B
    }
}`,type:"query"}]},filename:"main/java/codefc/datamagicmgtapi/controller/FileController.java",groupTitle:"\u6587\u4EF6\u7BA1\u7406",name:"GetFileMetadata",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi//file-metadata"}]},{type:"get",url:"/storage-path",title:"\u83B7\u53D6\u5B58\u50A8\u5730\u5740",group:"\u6587\u4EF6\u7BA1\u7406",version:"1.0.0",query:[{group:"Query",type:"String",optional:!1,field:"bizClass",isArray:!1,description:"<p>\u4E1A\u52A1\u7C7B\u578B\uFF0C\u5FC5\u586B</p>"},{group:"Query",type:"String",optional:!1,field:"type",isArray:!1,description:"<p>\u6587\u4EF6\u7C7B\u578B\uFF0C\u5FC5\u586B</p>"}],parameter:{examples:[{title:"\u8BF7\u6C42\u793A\u4F8B:",content:`/storage-path?bizClass=exampleBiz&type=exampleType

\u54CD\u5E94\u793A\u4F8B:
{
    "Status": "1",                                  // \u72B6\u6001\u7801 1-\u6210\u529F 0-\u5931\u8D25
    "DueWithDateTime": "2024-03-21 15:30:45",      // \u5904\u7406\u65F6\u95F4
    "RespSuccessInfo": "\u83B7\u53D6\u6210\u529F",                  // \u6210\u529F\u4FE1\u606F
    "RespData": "http://localhost:8080"            // \u5B58\u50A8\u5730\u5740(\u4E3B\u673A\u5730\u5740\u52A0\u7AEF\u53E3)
}`,type:"query"}]},filename:"main/java/codefc/datamagicmgtapi/controller/FileController.java",groupTitle:"\u6587\u4EF6\u7BA1\u7406",name:"GetStoragePath",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi//storage-path"}]},{type:"post",url:"/upload-multi-modal-files",title:"\u591A\u6A21\u6001\u6587\u4EF6\u4E0A\u4F20",group:"\u6587\u4EF6\u7BA1\u7406",version:"1.0.0",body:[{group:"Body",type:"File[]",optional:!1,field:"files",isArray:!0,description:"<p>\u8981\u4E0A\u4F20\u7684\u6587\u4EF6\u6570\u7EC4\uFF0C\u5FC5\u586B</p> <p>\u54CD\u5E94\u793A\u4F8B: { &quot;Status&quot;: &quot;1&quot;,                                  // \u72B6\u6001\u7801 1-\u6210\u529F 0-\u5931\u8D25 &quot;DueWithDateTime&quot;: &quot;2024-03-21 15:30:45&quot;,      // \u5904\u7406\u65F6\u95F4 &quot;RespSuccessInfo&quot;: &quot;\u6587\u4EF6\u4E0A\u4F20\u6210\u529F&quot;,              // \u6210\u529F\u4FE1\u606F &quot;RespData&quot;: [{                                 // \u8FD4\u56DE\u6570\u636E\u6570\u7EC4 &quot;amiid&quot;: &quot;123456&quot;,                         // \u6587\u4EF6ID &quot;filename&quot;: &quot;example.pdf&quot;,                 // \u6587\u4EF6\u540D\u79F0 &quot;savehostpath&quot;: &quot;/2024-03-21/example.pdf&quot;, // \u5B58\u50A8\u8DEF\u5F84 &quot;filetype&quot;: &quot;\u6587\u6863&quot;,                        // \u6587\u4EF6\u7C7B\u578B &quot;filesize&quot;: &quot;1024.50&quot;,                    // \u6587\u4EF6\u5927\u5C0F(KB) &quot;uploadtime&quot;: &quot;2024-03-21 15:30:45&quot;,      // \u4E0A\u4F20\u65F6\u95F4 &quot;filestatus&quot;: &quot;1&quot;                         // \u6587\u4EF6\u72B6\u6001(1-\u6B63\u5E38,0-\u5220\u9664) }] }</p>"}],filename:"main/java/codefc/datamagicmgtapi/controller/FileController.java",groupTitle:"\u6587\u4EF6\u7BA1\u7406",name:"PostUploadMultiModalFiles",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi//upload-multi-modal-files"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/AddTag1",title:"\u65B0\u589E\u4E00\u7EA7\u6807\u7B7E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "lableName": "\u6807\u7B7E\u540D\u79F0", // \u6807\u7B7E\u540D\u79F0\uFF0CString\uFF0C\u5FC5\u4F20
    "lableDesc": "\u6807\u7B7E\u542B\u4E49", // \u6807\u7B7E\u542B\u4E49\uFF0CString\uFF0C\u9009\u4F20
    "remark": "\u5907\u6CE8" // \u5907\u6CE8\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "lblId": "LBL001",
        "lableName": "\u6807\u7B7E\u540D\u79F0",
        "lableDesc": "\u6807\u7B7E\u542B\u4E49",
        "remark": "\u5907\u6CE8",
        "timestampSs": "2024-11-28 11:43:02",
        "createTime": "2024-11-28 11:43:02"
    },
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagAddtag1",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/AddTag1"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/AddTag2",title:"\u65B0\u589E\u4E8C\u7EA7\u6807\u7B7E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "lblId": "LBL001", // \u4E00\u7EA7\u6807\u7B7EID\uFF0CString\uFF0C\u5FC5\u4F20
    "lableName": "\u6807\u7B7E\u540D\u79F0", // \u6807\u7B7E\u540D\u79F0\uFF0CString\uFF0C\u5FC5\u4F20
    "lableDesc": "\u6807\u7B7E\u542B\u4E49", // \u6807\u7B7E\u542B\u4E49\uFF0CString\uFF0C\u9009\u4F20
    "remark": "\u5907\u6CE8" // \u5907\u6CE8\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "lbl2Id": "LBL2001",
        "lblId": "LBL001",
        "lableName": "\u6807\u7B7E\u540D\u79F0",
        "lableDesc": "\u6807\u7B7E\u542B\u4E49",
        "remark": "\u5907\u6CE8",
        "timestampSs": "2024-11-28 11:43:02",
        "createTime": "2024-11-28 11:43:02"
    },
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagAddtag2",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/AddTag2"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/AddTagTree",title:"\u65B0\u589E\u591A\u7EA7\u6807\u7B7E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "parentLblId": "LBL2001", // \u7236\u6807\u7B7EID\uFF0CString\uFF0C\u5FC5\u4F20
    "parentLabelClass": "\u4E8C\u7EA7", // \u7236\u6807\u7B7E\u7C7B\u578B\uFF08\u4E8C\u7EA7\u6216\u591A\u7EA7\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "lableName": "\u6807\u7B7E\u540D\u79F0", // \u6807\u7B7E\u540D\u79F0\uFF0CString\uFF0C\u5FC5\u4F20
    "lableDesc": "\u6807\u7B7E\u542B\u4E49", // \u6807\u7B7E\u542B\u4E49\uFF0CString\uFF0C\u9009\u4F20
    "remark": "\u5907\u6CE8" // \u5907\u6CE8\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "lblTreeId": "LBLT001",
        "parentLblId": "LBL2001",
        "parentLabelClass": "\u4E8C\u7EA7",
        "lableName": "\u6807\u7B7E\u540D\u79F0",
        "lableDesc": "\u6807\u7B7E\u542B\u4E49",
        "remark": "\u5907\u6CE8",
        "timestampSs": "2024-11-28 11:43:02",
        "createTime": "2024-11-28 11:43:02"
    },
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagAddtagtree",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/AddTagTree"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/DeleteTag1",title:"\u5220\u9664\u4E00\u7EA7\u6807\u7B7E(\u5305\u542B\u5B50\u6807\u7B7E)",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`[
    "LBL001","LBL002"
]`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagDeletetag1",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/DeleteTag1"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/DeleteTag2",title:"\u5220\u9664\u4E8C\u7EA7\u6807\u7B7E(\u5305\u542B\u5B50\u6807\u7B7E)",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`[
    "LBL2001","LBL2002"
]`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagDeletetag2",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/DeleteTag2"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/DeleteTagTree",title:"\u5220\u9664\u591A\u7EA7\u6807\u7B7E\uFF08\u5305\u542B\u5B50\u6807\u7B7E\uFF09",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`[
    "LBLT001","LBLT002"//\u4F20\u5165\u8981\u5220\u9664\u7684\u591A\u7EA7\u6807\u7B7EId:lblTreeId
]`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},description:"<p>\u8BE5\u63A5\u53E3\u4F1A\u7EA7\u8054\u5220\u9664\u6307\u5B9A\u6807\u7B7E\u4E0B\u7684\u6240\u6709\u5B50\u6807\u7B7E\u3002\u4F8B\u5982\uFF0C\u5220\u9664\u4E00\u4E2A\u4E09\u7EA7\u6807\u7B7E\u65F6\uFF0C\u4F1A\u540C\u65F6\u5220\u9664\u5176\u4E0B\u7684\u6240\u6709\u56DB\u7EA7\u3001\u4E94\u7EA7\u7B49\u5B50\u6807\u7B7E\u3002</p>",version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagDeletetagtree",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/DeleteTagTree"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/GetTag1Detail",title:"\u67E5\u8BE2\u4E00\u7EA7\u6807\u7B7E\u8BE6\u60C5",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "lblId": "LBL001" // \u4E00\u7EA7\u6807\u7B7EID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "lblId": "LBL001",
        "lableName": "\u6807\u7B7E\u540D\u79F0",
        "lableDesc": "\u6807\u7B7E\u542B\u4E49",
        "remark": "\u5907\u6CE8",
        "timestampSs": "2024-11-28 11:43:02",
        "createTime": "2024-11-28 11:43:02"
        "parentLableName": ""//\u7236\u6807\u7B7E\u7684\u540D\u5B57\uFF0C\u9ED8\u8BA4\u4E3A\u201C\u201D
    },
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagGettag1detail",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/GetTag1Detail"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/GetTag2Detail",title:"\u67E5\u8BE2\u4E8C\u7EA7\u6807\u7B7E\u8BE6\u60C5",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "lbl2Id": "LBL2001" // \u4E8C\u7EA7\u6807\u7B7EID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "lbl2Id": "LBL2001",
        "lblId": "LBL001",
        "lableName": "\u6807\u7B7E\u540D\u79F0",
        "lableDesc": "\u6807\u7B7E\u542B\u4E49",
        "remark": "\u5907\u6CE8",
        "timestampSs": "2024-11-28 11:43:02",
        "createTime": "2024-11-28 11:43:02"
        "parentLableName": ""//\u7236\u6807\u7B7E\u7684\u540D\u5B57\uFF0C
    },
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagGettag2detail",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/GetTag2Detail"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/GetTagTreeDetail",title:"\u67E5\u8BE2\u591A\u7EA7\u6807\u7B7E\u8BE6\u60C5",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "lblTreeId": "LBLT001" // \u591A\u7EA7\u6807\u7B7EID\uFF0CString\uFF0C\u5FC5\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "lblTreeId": "LBLT001",
        "parentLblId": "LBL2001",
        "parentLabelClass": "2",
        "lableName": "\u6807\u7B7E\u540D\u79F0",
        "lableDesc": "\u6807\u7B7E\u542B\u4E49",
        "remark": "\u5907\u6CE8",
        "timestampSs": "2024-11-28 11:43:02",
        "createTime": "2024-11-28 11:43:02"
    },
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagGettagtreedetail",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/GetTagTreeDetail"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/GetTagTreeList",title:"\u9012\u5F52\u67E5\u8BE2\u6807\u7B7E\u6811",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "parentId": "LBL2001" // \u7236\u6807\u7B7EID\uFF0CString\uFF0C\u5FC5\u4F20,\u8FD9\u4E2A\u4F20\u5165\u503C\u5C31\u662F\u4E8C\u7EA7\u6807\u7B7E\u7684\u4E3B\u952Eid:lbl2Id
    "lableName": "rfgdr" // \u6807\u7B7E\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20
    "lableDesc": "dgfg" // \u6807\u7B7E\u542B\u4E49\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas":

    [
  {
    "children": [],
    "lableName": "\u7535\u5F71",
    "lblTreeId": "T002",
    "level": 3,
    "parentLabelClass": "\u4E8C\u7EA7",
    "parentLblId": "LBL2ID_13"
  },
  {
    "children": [
      {
        "children": [],
        "lableName": "\u53E4\u5178\u97F3\u4E50",
        "lblTreeId": "T005",
        "level": 4,
        "parentLabelClass": "\u591A\u7EA7",
        "parentLblId": "T001"
      },
      {
        "children": [
          {
            "children": [],
            "lableName": "\u7535\u5B50\u6D41\u884C",
            "lblTreeId": "T013",
            "level": 5,
            "parentLabelClass": "\u591A\u7EA7",
            "parentLblId": "T004"
          },
          {
            "children": [
              {
                "children": [],
                "lableName": "\u6B27\u7F8E\u6D41\u884C\u7537\u6B4C\u624B",
                "lblTreeId": "T019",
                "level": 6,
                "parentLabelClass": "\u591A\u7EA7",
                "parentLblId": "T010"
              }
            ],
            "lableName": "\u6B27\u7F8E\u6D41\u884C",
            "lblTreeId": "T010",
            "level": 5,
            "parentLabelClass": "\u591A\u7EA7",
            "parentLblId": "T004"
          },
          {
            "children": [
              {
                "children": [],
                "lableName": "\u534E\u8BED\u6D41\u884C\u7ECF\u5178",
                "lblTreeId": "T018",
                "level": 6,
                "parentLabelClass": "\u591A\u7EA7",
                "parentLblId": "T009"
              }
            ],
            "lableName": "\u534E\u8BED\u6D41\u884C",
            "lblTreeId": "T009",
            "level": 5,
            "parentLabelClass": "\u591A\u7EA7",
            "parentLblId": "T004"
          }
        ],
        "lableName": "\u6D41\u884C\u97F3\u4E50",
        "lblTreeId": "T004",
        "level": 4,
        "parentLabelClass": "\u591A\u7EA7",
        "parentLblId": "T001"
      }
    ],
    "lableName": "\u97F3\u4E50",
    "lblTreeId": "T001",
    "level": 3,
    "parentLabelClass": "\u4E8C\u7EA7",
    "parentLblId": "LBL2ID_13"
  }
]

    ,
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagGettagtreelist",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/GetTagTreeList"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/QueryTag1Page",title:"\u5E26\u6761\u4EF6\u5206\u9875\u67E5\u8BE2\u4E00\u7EA7\u6807\u7B7E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "page": 1, // \u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
    "pageSize": 10, // \u9875\u5927\u5C0F\uFF0CInteger\uFF0C\u5FC5\u4F20
    "sortType": "ASC", // \u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "lableName": "\u6807\u7B7E\u540D\u79F0", // \u6807\u7B7E\u540D\u79F0\uFF08\u6A21\u7CCA\u5339\u914D\uFF09\uFF0CString\uFF0C\u9009\u4F20
    "lableDesc": "\u6807\u7B7E\u542B\u4E49" // \u6807\u7B7E\u542B\u4E49\uFF08\u6A21\u7CCA\u5339\u914D\uFF09\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "totalSize": 30,
        "totalPage": 3,
        "pageSize": 10,
        "page": 1,
        "list": [
            {
                "lblId": "LBL001",
                "lableName": "\u6807\u7B7E\u540D\u79F0",
                "lableDesc": "\u6807\u7B7E\u542B\u4E49",
                "remark": "\u5907\u6CE8",
                "timestampSs": "2024-11-28 11:43:02",
                "createTime": "2024-11-28 11:43:02"
            }
        ]
    },
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}

\u6570\u636E\u5E93\u8868\u540D\uFF1ATAG1 / \u4E00\u7EA7\u6807\u7B7E

\u9A7C\u5CF0\u5B57\u6BB5          | \u5BF9\u5E94\u7684\u6CE8\u91CA\u53CA\u4E3B\u952E/\u7A7A\u503C\u4FE1\u606F
------------------|----------------------------------------------
lblId            | \u4E00\u7EA7\u6807\u7B7EID\uFF08\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
lableName        | \u6807\u7B7E\u540D\u79F0\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
lableDesc        | \u6807\u7B7E\u542B\u4E49\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
remark           | \u5907\u6CE8\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
timestampSs      | \u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
createTime       | \u521B\u5EFA\u65F6\u95F4\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
parentLableName  | \u7236\u6807\u7B7E\u540D\u79F0\uFF0C\u9ED8\u8BA4\u4E3A\u201C\u201D\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagQuerytag1page",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/QueryTag1Page"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/QueryTag2Page",title:"\u5E26\u6761\u4EF6\u5206\u9875\u67E5\u8BE2\u4E8C\u7EA7\u6807\u7B7E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "page": 1, // \u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
    "pageSize": 10, // \u9875\u5927\u5C0F\uFF0CInteger\uFF0C\u5FC5\u4F20
    "sortType": "ASC", // \u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20
    "lblId": "LBL001", // \u4E00\u7EA7\u6807\u7B7EID\uFF0CString\uFF0C\u5FC5\u4F20
    "lableName": "\u6807\u7B7E\u540D\u79F0", // \u6807\u7B7E\u540D\u79F0\uFF08\u6A21\u7CCA\u5339\u914D\uFF09\uFF0CString\uFF0C\u9009\u4F20
    "lableDesc": "\u6807\u7B7E\u542B\u4E49" // \u6807\u7B7E\u542B\u4E49\uFF08\u6A21\u7CCA\u5339\u914D\uFF09\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "totalSize": 30,
        "totalPage": 3,
        "pageSize": 10,
        "page": 1,
        "list": [
            {
                "lbl2Id": "LBL2001",
                "lblId": "LBL001",
                "lableName": "\u6807\u7B7E\u540D\u79F0",
                "lableDesc": "\u6807\u7B7E\u542B\u4E49",
                "remark": "\u5907\u6CE8",
                "timestampSs": "2024-11-28 11:43:02",
                "createTime": "2024-11-28 11:43:02"
            }
        ]
    },
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}


\u6570\u636E\u5E93\u8868\u540D\uFF1ATAG2 / \u4E8C\u7EA7\u6807\u7B7E

\u9A7C\u5CF0\u5B57\u6BB5 | \u5BF9\u5E94\u7684\u6CE8\u91CA\u53CA\u4E3B\u952E/\u7A7A\u503C\u4FE1\u606F

|-------------------|----------------------------------------------|
| lblId             | \u4E00\u7EA7\u6807\u7B7EID\uFF08\u5916\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09         |
| lableName         | \u6807\u7B7E\u540D\u79F0\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09         |
| lableDesc         | \u6807\u7B7E\u542B\u4E49\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09           |
| remark            | \u5907\u6CE8\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09               |
| timestampSs       | \u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09             |
| createTime        | \u521B\u5EFA\u65F6\u95F4\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09           |
| parentLableName   | \u7236\u6807\u7B7E\u540D\u79F0\uFF0C\u9ED8\u8BA4\u4E3A\u201C\u201D\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09 |

---`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagQuerytag2page",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/QueryTag2Page"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/UpdateTag1",title:"\u4FEE\u6539\u4E00\u7EA7\u6807\u7B7E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "lblId": "LBL001", // \u4E00\u7EA7\u6807\u7B7EID\uFF0CString\uFF0C\u5FC5\u4F20
    "lableName": "\u6807\u7B7E\u540D\u79F0", // \u6807\u7B7E\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20
    "lableDesc": "\u6807\u7B7E\u542B\u4E49", // \u6807\u7B7E\u542B\u4E49\uFF0CString\uFF0C\u9009\u4F20
    "remark": "\u5907\u6CE8" // \u5907\u6CE8\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "lblId": "LBL001",
        "lableName": "\u6807\u7B7E\u540D\u79F0",
        "lableDesc": "\u6807\u7B7E\u542B\u4E49",
        "remark": "\u5907\u6CE8",
        "timestampSs": "2024-11-28 11:43:02",
        "createTime": "2024-11-28 11:43:02"
    },
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagUpdatetag1",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/UpdateTag1"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/UpdateTag2",title:"\u4FEE\u6539\u4E8C\u7EA7\u6807\u7B7E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "lbl2Id": "LBL2001", // \u4E8C\u7EA7\u6807\u7B7EID\uFF0CString\uFF0C\u5FC5\u4F20
    "lableName": "\u6807\u7B7E\u540D\u79F0", // \u6807\u7B7E\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20
    "lableDesc": "\u6807\u7B7E\u542B\u4E49", // \u6807\u7B7E\u542B\u4E49\uFF0CString\uFF0C\u9009\u4F20
    "remark": "\u5907\u6CE8" // \u5907\u6CE8\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "lbl2Id": "LBL2001",
        "lblId": "LBL001",
        "lableName": "\u6807\u7B7E\u540D\u79F0",
        "lableDesc": "\u6807\u7B7E\u542B\u4E49",
        "remark": "\u5907\u6CE8",
        "timestampSs": "2024-11-28 11:43:02",
        "createTime": "2024-11-28 11:43:02"
    },
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagUpdatetag2",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/UpdateTag2"}]},{group:"\u6807\u7B7E\u7BA1\u7406",type:"post",url:"Tag/UpdateTagTree",title:"\u4FEE\u6539\u591A\u7EA7\u6807\u7B7E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "lblTreeId": "LBLT001", // \u591A\u7EA7\u6807\u7B7EID\uFF0CString\uFF0C\u5FC5\u4F20
    "lableName": "\u6807\u7B7E\u540D\u79F0", // \u6807\u7B7E\u540D\u79F0\uFF0CString\uFF0C\u9009\u4F20
    "lableDesc": "\u6807\u7B7E\u542B\u4E49", // \u6807\u7B7E\u542B\u4E49\uFF0CString\uFF0C\u9009\u4F20
    "remark": "\u5907\u6CE8" // \u5907\u6CE8\uFF0CString\uFF0C\u9009\u4F20
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": {
        "lblTreeId": "LBLT001",
        "parentLblId": "LBL2001",
        "parentLabelClass": "2",
        "lableName": "\u6807\u7B7E\u540D\u79F0",
        "lableDesc": "\u6807\u7B7E\u542B\u4E49",
        "remark": "\u5907\u6CE8",
        "timestampSs": "2024-11-28 11:43:02",
        "createTime": "2024-11-28 11:43:02"
    },
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/TagController.java",groupTitle:"\u6807\u7B7E\u7BA1\u7406",name:"PostTagUpdatetagtree",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/Tag/UpdateTagTree"}]},{group:"\u7ED3\u6784\u5316\u7BA1\u7406",type:"post",url:"AddDatasocidens",title:"\u6570\u636E\u6E90-\u5355\u4E2A\u65B0\u589E",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "DataUrl": "DevCodingToolManagerApi/coding/makeBOneTableQuery",
    "ReqDataType": "json",
    "ReqMethod": "post",
    "ReqDatas": {
        "dataIden": "dataIden",
        "dataIdenName": "dataIdenName",
        "dataIdenClass": "dataIdenClass",
        "locationIp": "locationIp",
        "portNum": "portNum",
        "accessUser": "accessUser",
        "accessPwd": "accessPwd",
        "remark": "remark",
        "dataSoc": "dataSoc",
        "sidName": "sidName",
        "dbFactoryName": "dbFactoryName",
        "dataConn": "dataConn",
        "dataSchema": "dataSchema"
    },
    "ReqI18n": "zh-CN",
    "ServIdentifer": "CAPPMgtMain",
    "ServVersionIden": "1.0",
    "BizType": "nodecenter",
    "ClientType": "F"
}
//     * dataIden\u6570\u636E\u6E90\u8BC6\u522B\u3001dataIdenName\u540D\u79F0\u3001dataIdenClass\u6570\u636E\u6E90\u5206\u7C7B\u3001dataSoc\u6570\u636E\u6E90\u8BC6\u522B\u4E0D\u4E3A\u7A7A\uFF0C\u5176\u4ED6\u5B57\u6BB5\u9009\u586B`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\n        \\"diId\\": \\"diId\\",\\n        \\"dataIden\\": \\"dataIden\\",\\n        \\"dataIdenName\\": \\"dataIdenName\\",\\n        \\"dataIdenClass\\": \\"dataIdenClass\\",\\n        \\"locationIp\\": \\"locationIp\\",\\n        \\"portNum\\": \\"portNum\\",\\n        \\"accessUser\\": \\"accessUser\\",\\n        \\"accessPwd\\": \\"accessPwd\\",\\n        \\"remark\\": \\"remark\\",\\n        \\"timestampSs\\": \\"timestampSs\\",\\n        \\"dataSoc\\": \\"dataSoc\\",\\n        \\"sidName\\": \\"sidName\\",\\n        \\"dbFactoryName\\": \\"dbFactoryName\\",\\n        \\"dataConn\\": \\"dataConn\\",\\n        \\"dataSchema\\": \\"dataSchema\\"\\n    }",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "diId": "diId",
    "dataIden": "dataIden",
    "dataIdenName": "dataIdenName",
    "dataIdenClass": "dataIdenClass",
    "locationIp": "locationIp",
    "portNum": "portNum",
    "accessUser": "accessUser",
    "accessPwd": "accessPwd",
    "remark": "remark",
    "timestampSs": "timestampSs",
    "dataSoc": "dataSoc",
    "sidName": "sidName",
    "dbFactoryName": "dbFactoryName",
    "dataConn": "dataConn",
    "dataSchema": "dataSchema"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u7ED3\u6784\u5316\u7BA1\u7406",name:"PostAdddatasocidens",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/AddDatasocidens"}]},{group:"\u7ED3\u6784\u5316\u7BA1\u7406",type:"post",url:"BatchDeleteDatasocidens",title:"\u6570\u636E\u6E90-\u6279\u91CF\u5220\u9664",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "DataUrl": "DevCodingToolManagerApi/coding/makeBOneTableQuery",
    "ReqDataType": "json",
    "ReqMethod": "post",
    "ReqDatas": ["DiId1","DiId2","id3","id4","id5"],
    "ReqI18n": "zh-CN",
    "ServIdentifer": "CAPPMgtMain",
    "ServVersionIden": "1.0",
    "BizType": "nodecenter",
    "ClientType": "F"
}
#ReqDatas\u4F20\u5165\u5220\u9664\u6570\u636E\u7684\u6240\u6709\u552F\u4E00ID\u5373diId`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u7ED3\u6784\u5316\u7BA1\u7406",name:"PostBatchdeletedatasocidens",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/BatchDeleteDatasocidens"}]},{group:"\u7ED3\u6784\u5316\u7BA1\u7406",type:"post",url:"GetAllDataIdenClass",title:"\u6570\u636E\u6E90-\u67E5\u8BE2\u6240\u6709\u4E1A\u52A1\u7C7B\u578B",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "DataUrl": "DevCodingToolManagerApi/coding/makeBOneTableQuery",
    "ReqDataType": "json",
    "ReqMethod": "post",
    "ReqDatas": {},
    "ReqI18n": "zh-CN",
    "ServIdentifer": "CAPPMgtMain",
    "ServVersionIden": "1.0",
    "BizType": "nodecenter",
    "ClientType": "F"
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "[\\n    \\"class_1\\",\\n    \\"class_0\\"\\n]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
[
  "class_1",
  "class_0"
]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u7ED3\u6784\u5316\u7BA1\u7406",name:"PostGetalldataidenclass",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetAllDataIdenClass"}]},{group:"\u7ED3\u6784\u5316\u7BA1\u7406",type:"post",url:"GetAllDbFactoryNames",title:"\u6570\u636E\u6E90-\u67E5\u8BE2\u6240\u6709\u6570\u636E\u6E90\u7C7B\u578B",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "DataUrl": "DevCodingToolManagerApi/coding/makeBOneTableQuery",
    "ReqDataType": "json",
    "ReqMethod": "post",
    "ReqDatas": {},
    "ReqI18n": "zh-CN",
    "ServIdentifer": "CAPPMgtMain",
    "ServVersionIden": "1.0",
    "BizType": "nodecenter",
    "ClientType": "F"
}`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "[\\n    \\"Oracle\\",\\n    \\"MySQL\\"\\n]",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
[
  "Oracle",
  "MySQL"
]`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u7ED3\u6784\u5316\u7BA1\u7406",name:"PostGetalldbfactorynames",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetAllDbFactoryNames"}]},{group:"\u7ED3\u6784\u5316\u7BA1\u7406",type:"post",url:"GetDatasocidensById",title:"\u6570\u636E\u6E90-\u5355\u8BB0\u5F55\u67E5\u8BE2",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "DataUrl": "DevCodingToolManagerApi/coding/makeBOneTableQuery",
    "ReqDataType": "json",
    "ReqMethod": "post",
    "ReqDatas": {
        "diId": "diId",
    },
    "ReqI18n": "zh-CN",
    "ServIdentifer": "CAPPMgtMain",
    "ServVersionIden": "1.0",
    "BizType": "nodecenter",
    "ClientType": "F"
}
diId\u5FC5\u4F20`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\n        \\"diId\\": \\"diId\\",\\n        \\"dataIden\\": \\"dataIden\\",\\n        \\"dataIdenName\\": \\"dataIdenName\\",\\n        \\"dataIdenClass\\": \\"dataIdenClass\\",\\n        \\"locationIp\\": \\"locationIp\\",\\n        \\"portNum\\": \\"portNum\\",\\n        \\"accessUser\\": \\"accessUser\\",\\n        \\"accessPwd\\": \\"accessPwd\\",\\n        \\"remark\\": \\"remark\\",\\n        \\"timestampSs\\": \\"timestampSs\\",\\n        \\"dataSoc\\": \\"dataSoc\\",\\n        \\"sidName\\": \\"sidName\\",\\n        \\"dbFactoryName\\": \\"dbFactoryName\\",\\n        \\"dataConn\\": \\"dataConn\\",\\n        \\"dataSchema\\": \\"dataSchema\\"\\n    }",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "diId": "diId",
    "dataIden": "dataIden",
    "dataIdenName": "dataIdenName",
    "dataIdenClass": "dataIdenClass",
    "locationIp": "locationIp",
    "portNum": "portNum",
    "accessUser": "accessUser",
    "accessPwd": "accessPwd",
    "remark": "remark",
    "timestampSs": "timestampSs",
    "dataSoc": "dataSoc",
    "sidName": "sidName",
    "dbFactoryName": "dbFactoryName",
    "dataConn": "dataConn",
    "dataSchema": "dataSchema"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u7ED3\u6784\u5316\u7BA1\u7406",name:"PostGetdatasocidensbyid",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetDatasocidensById"}]},{group:"\u7ED3\u6784\u5316\u7BA1\u7406",type:"post",url:"GetDatasocidensPager",title:"\u6570\u636E\u6E90-\u5E26\u6761\u4EF6\u5206\u9875\u67E5\u8BE2",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "DataUrl": "DevCodingToolManagerApi/coding/makeBOneTableQuery",
    "ReqDataType": "json",
    "ReqMethod": "post",
    "ReqDatas": {
        "page": 1,
        "pageSize": 10,
        "sortType": "ASC",
        "dataIdenName": "11",
        "dataIdenClass": "class_1"
    },
    "ReqI18n": "zh-CN",
    "ServIdentifer": "CAPPMgtMain",
    "ServVersionIden": "1.0",
    "BizType": "nodecenter",
    "ClientType": "F"
}
pageIndex\uFF1A\u9875\u7801\uFF0CInteger\uFF0C\u5FC5\u4F20
pageSize\uFF1A\u9875\u5927\u5C0F,Integer\uFF0C\u5FC5\u4F20
sortType\uFF1A\u6392\u5E8F\u65B9\u5F0F\uFF08ASC\u6216DESC\uFF09\uFF0CString\uFF0C\u5FC5\u4F20\uFF0C
dataIdenName\uFF1A\u540D\u79F0,String\uFF0C\u9009\u4F20
dataIdenClass\uFF1A\u4E1A\u52A1\u7C7B\u578B,String\uFF0C\u9009\u4F20`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:03:34",
    "RespDatas": "{\\"totalSize\\":30,\\"totalPage\\":3,\\"pageSize\\":10,\\"page\\":1,\\"list\\":[{\\"accessPwd\\":\\"Pwd_11\\",\\"accessUser\\":\\"User_11\\",\\"dataConn\\":\\"Connection_11\\",\\"dataIden\\":\\"DATAIDEN_11\\",\\"dataIdenClass\\":\\"Class_1\\",\\"dataIdenName\\":\\"Data Identifier Name 11\\",\\"dataSoc\\":\\"DataSOC_11\\",\\"dbFactoryName\\":\\"DBFactory_2\\",\\"diId\\":\\"DIID_11\\",\\"remark\\":\\"This is remark 11\\",\\"sidName\\":\\"SID_11\\",\\"timestampSs\\":\\"2024-11-28 11:43:02\\"}]}",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "totalSize": 30,
    "totalPage": 3,
    "pageSize": 10,
    "page": 1,
    "list": [
        {
            "accessPwd": "Pwd_11",
            "accessUser": "User_11",
            "dataConn": "Connection_11",
            "dataIden": "DATAIDEN_11",
            "dataIdenClass": "Class_1",
            "dataIdenName": "Data Identifier Name 11",
            "dataSoc": "DataSOC_11",
            "dbFactoryName": "DBFactory_2",
            "diId": "DIID_11",
            "remark": "This is remark 11",
            "sidName": "SID_11",
            "timestampSs": "2024-11-28 11:43:02"
        }
    ]
}
totalSize\uFF1A\u603B\u6570\u636E\u91CF\uFF0CInteger
totalPage\uFF1A\u603B\u9875\u6570\uFF0CInteger
pageSize\uFF1A\u6BCF\u9875\u6570\u636E\u91CF\uFF0CInteger
page\uFF1A\u5F53\u524D\u9875\u7801\uFF0CInteger
\u9A7C\u5CF0\u5B57\u6BB5        | \u5BF9\u5E94\u7684\u6CE8\u91CA\u53CA\u4E3B\u952E/\u7A7A\u503C\u4FE1\u606F
-----------------|----------------------------------------------
diId             | \u6570\u636E\u6E90ID\uFF08\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
dataIden         | \u6570\u636E\u6E90\u8BC6\u522B\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u552F\u4E00\uFF01\uFF0CString\uFF09
dataIdenName     | \u540D\u79F0\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u552F\u4E00\uFF01\uFF0CString\uFF09
dataIdenClass    | \u6570\u636E\u6E90\u5206\u7C7B\uFF08\u975E\u4E3B\u952E\uFF0C\u4E0D\u80FD\u4E3A\u7A7A\uFF0CString\uFF09
locationIp       | \u5BBF\u4E3B\u5730\u5740\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
portNum          | \u7AEF\u53E3\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
accessUser       | \u8BBF\u95EE\u8D26\u6237\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
accessPwd        | \u8BBF\u95EE\u53E3\u4EE4\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
remark           | \u5907\u6CE8\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
timestampSs      | \u65F6\u95F4\u6233\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
dataSoc          | \u6570\u636E\u6E90\u8BBF\u95EE\u8BC6\u522B\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0C\u552F\u4E00\uFF01\uFF0CString\uFF09
sidName          | \u6570\u636E\u5B9E\u4F8B\u540D\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
dbFactoryName    | \u6570\u636E\u6E90\u7C7B\u578B\uFF0C\u4F8B\u5982\uFF1AOracle\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
dataConn         | \u6570\u636E\u8BBF\u95EE\u683C\u5F0F\uFF0C\u4F8B\u5982\uFF1AData Source=%s;User ID=%s;password=%s\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09
dataSchema       | \u6570\u636E\u6A21\u5F0F\u62E5\u6709\u8005\uFF08\u975E\u4E3B\u952E\uFF0C\u53EF\u4E3A\u7A7A\uFF0CString\uFF09`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u7ED3\u6784\u5316\u7BA1\u7406",name:"PostGetdatasocidenspager",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/GetDatasocidensPager"}]},{group:"\u7ED3\u6784\u5316\u7BA1\u7406",type:"post",url:"UpdateDatasocidens",title:"\u6570\u636E\u6E90-\u5355\u4E2A\u4FEE\u6539",body:[{group:"Body",type:"json",optional:!1,field:"ReqDatas",isArray:!1,description:"<p>\u8F93\u5165json\u683C\u5F0F\u5E8F\u5217\u5316\u5B57\u7B26\u4E32</p>"}],parameter:{examples:[{title:"\u5165\u53C2\u6837\u4F8B\uFF1A",content:`{
    "DataUrl": "DevCodingToolManagerApi/coding/makeBOneTableQuery",
    "ReqDataType": "json",
    "ReqMethod": "post",
    "ReqDatas": {
        "diId": "diId"
        "dataIden": "dataIden",
        "dataIdenName": "dataIdenName",
        "dataIdenClass": "dataIdenClass",
        "locationIp": "locationIp",
        "portNum": "portNum",
        "accessUser": "accessUser",
        "accessPwd": "accessPwd",
        "remark": "remark",
        "dataSoc": "dataSoc",
        "sidName": "sidName",
        "dbFactoryName": "dbFactoryName",
        "dataConn": "dataConn",
        "dataSchema": "dataSchema"
    },
    "ReqI18n": "zh-CN",
    "ServIdentifer": "CAPPMgtMain",
    "ServVersionIden": "1.0",
    "BizType": "nodecenter",
    "ClientType": "F"
}
#diId\u5FC5\u4F20\uFF0C\u5176\u4ED6\u4E1A\u52A1\u5B57\u6BB5\u4FEE\u6539\u4EC0\u4E48\u5C31\u4F20\u8F93\u4EC0\u4E48`,type:"json"}]},success:{examples:[{title:"\u6210\u529F\u6837\u4F8B\uFF1A",content:`{
    "DueWithDateTime": "2024-12-11 11:37:04",
    "RespDatas": "{\\n        \\"diId\\": \\"diId\\",\\n        \\"dataIden\\": \\"dataIden\\",\\n        \\"dataIdenName\\": \\"dataIdenName\\",\\n        \\"dataIdenClass\\": \\"dataIdenClass\\",\\n        \\"locationIp\\": \\"locationIp\\",\\n        \\"portNum\\": \\"portNum\\",\\n        \\"accessUser\\": \\"accessUser\\",\\n        \\"accessPwd\\": \\"accessPwd\\",\\n        \\"remark\\": \\"remark\\",\\n        \\"timestampSs\\": \\"timestampSs\\",\\n        \\"dataSoc\\": \\"dataSoc\\",\\n        \\"sidName\\": \\"sidName\\",\\n        \\"dbFactoryName\\": \\"dbFactoryName\\",\\n        \\"dataConn\\": \\"dataConn\\",\\n        \\"dataSchema\\": \\"dataSchema\\"\\n    }",
    "RespErrorDatas": "",
    "RespSuccCode": "",
    "RespSuccessInfo": "successStr",
    "Status": "1",
    "TottleRecords": "30"
}
RespDatas:
{
    "diId": "diId",
    "dataIden": "dataIden",
    "dataIdenName": "dataIdenName",
    "dataIdenClass": "dataIdenClass",
    "locationIp": "locationIp",
    "portNum": "portNum",
    "accessUser": "accessUser",
    "accessPwd": "accessPwd",
    "remark": "remark",
    "timestampSs": "timestampSs",
    "dataSoc": "dataSoc",
    "sidName": "sidName",
    "dbFactoryName": "dbFactoryName",
    "dataConn": "dataConn",
    "dataSchema": "dataSchema"
}`,type:"json"}]},version:"0.0.0",filename:"main/java/codefc/datamagicmgtapi/controller/ConstituteManagementController.java",groupTitle:"\u7ED3\u6784\u5316\u7BA1\u7406",name:"PostUpdatedatasocidens",sampleRequest:[{url:"http://127.0.0.1:18900/DataMagicMgtApi/UpdateDatasocidens"}]}];const fe={name:"DataMagicMgt",version:"0.0.1",description:"\u6570\u636E\u91C7\u96C6\u53CA\u6570\u5B57\u5316",title:"DataMagicMgt",url:"http://127.0.0.1:18900/DataMagicMgtApi/",sampleUrl:"http://127.0.0.1:18900/DataMagicMgtApi/",order:["\u751F\u6210\u6587\u6863Demo","\u591A\u6A21\u6001\u4E0A\u4F20","\u4EBA\u5DE5\u521D\u59CB\u5316","\u7ED3\u6784\u5316\u7BA1\u7406","\u6570\u636E\u6E05\u6D17","\u6570\u636E\u5BA1\u6838","\u6570\u5B57\u5316\u76D1\u63A7","\u5BA2\u6237\u5316\u7BA1\u7406"],template:{forceLanguage:"zh_cn"},defaultVersion:"0.0.0",apidoc:"0.3.0",generator:{name:"apidoc",time:"Wed Feb 26 2025 15:14:42 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)",url:"https://apidocjs.com",version:"1.2.0"}};ht();const we=l().compile(m()("#template-header").html()),Te=l().compile(m()("#template-footer").html()),X=l().compile(m()("#template-article").html()),Se=l().compile(m()("#template-compare-article").html()),he=l().compile(m()("#template-generator").html()),ve=l().compile(m()("#template-project").html()),Fe=l().compile(m()("#template-sections").html()),Ge=l().compile(m()("#template-sidenav").html()),Ue={aloneDisplay:!1,showRequiredLabels:!1,withGenerator:!0,withCompare:!0};fe.template=Object.assign(Ue,(Ke=fe.template)!=null?Ke:{}),fe.template.forceLanguage&&Dt(fe.template.forceLanguage);const qe=(0,r.groupBy)(Me,re=>re.group),et={};m().each(qe,(re,ae)=>{et[re]=(0,r.groupBy)(ae,ue=>ue.name)});const lt=[];m().each(et,(re,ae)=>{let ue=[];m().each(ae,(le,xe)=>{const We=xe[0].title;We&&ue.push(We.toLowerCase()+"#~#"+le)}),ue.sort(),fe.order&&(ue=be(ue,fe.order,"#~#")),ue.forEach(le=>{const We=le.split("#~#")[1];ae[We].forEach(_e=>{lt.push(_e)})})}),Me=lt;let mt={};const Bt={};let Lt={};Lt[fe.version]=1,m().each(Me,(re,ae)=>{mt[ae.group]=1,Bt[ae.group]=ae.groupTitle||ae.group,Lt[ae.version]=1}),mt=Object.keys(mt),mt.sort(),fe.order&&(mt=Ee(Bt,fe.order)),Lt=Object.keys(Lt),Lt.sort(a().compare),Lt.reverse();const Tt=[];mt.forEach(re=>{Tt.push({group:re,isHeader:!0,title:Bt[re]});let ae="";Me.forEach(ue=>{ue.group===re&&(ae!==ue.name?Tt.push({title:ue.title,group:re,name:ue.name,type:ue.type,version:ue.version,url:ue.url}):Tt.push({title:ue.title,group:re,hidden:!0,name:ue.name,type:ue.type,version:ue.version,url:ue.url}),ae=ue.name)})});function dn(re,ae,ue){let le=!1;if(!ae)return le;const xe=ae.match(/<h(1|2).*?>(.+?)<\/h(1|2)>/gi);return xe&&xe.forEach(function(We){const _e=We.substring(2,3),ut=We.replace(/<.+?>/g,""),At=We.match(/id="api-([^-]+)(?:-(.+))?"/),wt=At?At[1]:null,gt=At?At[2]:null;_e==="1"&&ut&&wt&&(re.splice(ue,0,{group:wt,isHeader:!0,title:ut,isFixed:!0}),ue++,le=!0),_e==="2"&&ut&&wt&&gt&&(re.splice(ue,0,{group:wt,name:gt,isHeader:!1,title:ut,isFixed:!1,version:"1.0"}),ue++)}),le}let fn;if(fe.header&&(fn=dn(Tt,fe.header.content,0),fn||Tt.unshift({group:"_header",isHeader:!0,title:fe.header.title==null?yt("General"):fe.header.title,isFixed:!0})),fe.footer){const re=Tt.length;fn=dn(Tt,fe.footer.content,Tt.length),!fn&&fe.footer.title!=null&&Tt.splice(re,0,{group:"_footer",isHeader:!0,title:fe.footer.title,isFixed:!0})}const Tn=fe.title?fe.title:"apiDoc: "+fe.name+" - "+fe.version;m()(document).attr("title",Tn),m()("#loader").remove();const Fn={nav:Tt};m()("#sidenav").append(Ge(Fn)),m()("#generator").append(he(fe)),(0,r.extend)(fe,{versions:Lt}),m()("#project").append(ve(fe)),fe.header&&m()("#header").append(we(fe.header)),fe.footer&&(m()("#footer").append(Te(fe.footer)),fe.template.aloneDisplay&&document.getElementById("api-_footer").classList.add("hide"));const Ot={};let Bn="";mt.forEach(function(re){const ae=[];let ue="",le={},xe=re,We="";Ot[re]={},Me.forEach(function(_e){re===_e.group&&(ue!==_e.name?(Me.forEach(function(ut){re===ut.group&&_e.name===ut.name&&(Object.prototype.hasOwnProperty.call(Ot[_e.group],_e.name)||(Ot[_e.group][_e.name]=[]),Ot[_e.group][_e.name].push(ut.version))}),le={article:_e,versions:Ot[_e.group][_e.name]}):le={article:_e,hidden:!0,versions:Ot[_e.group][_e.name]},fe.sampleUrl&&fe.sampleUrl===!0&&(fe.sampleUrl=window.location.origin),fe.url&&le.article.url.substr(0,4).toLowerCase()!=="http"&&(le.article.url=fe.url+le.article.url),se(le,_e),_e.groupTitle&&(xe=_e.groupTitle),_e.groupDescription&&(We=_e.groupDescription),ae.push({article:X(le),group:_e.group,name:_e.name,aloneDisplay:fe.template.aloneDisplay}),ue=_e.name)}),le={group:re,title:xe,description:We,articles:ae,aloneDisplay:fe.template.aloneDisplay},Bn+=Fe(le)}),m()("#sections").append(Bn),fe.template.aloneDisplay||(document.body.dataset.spy="scroll",m()("body").scrollspy({target:"#scrollingNav"})),m()(".form-control").on("focus change",function(){m()(this).removeClass("border-danger")}),m()(".sidenav").find("a").on("click",function(re){re.preventDefault();const ae=this.getAttribute("href");if(fe.template.aloneDisplay){const ue=document.querySelector(".sidenav > li.active");ue&&ue.classList.remove("active"),this.parentNode.classList.add("active")}else{const ue=document.querySelector(ae);ue&&m()("html,body").animate({scrollTop:ue.offsetTop},400)}window.location.hash=ae});function It(re){let ae=!1;return m().each(re,ue=>{ae=ae||(0,r.some)(re[ue],le=>le.type)}),ae}function On(){m()('button[data-toggle="popover"]').popover().click(function(ae){ae.preventDefault()});const re=m()("#version strong").html();if(m()("#sidenav li").removeClass("is-new"),fe.template.withCompare&&m()("#sidenav li[data-version='"+re+"']").each(function(){const ae=m()(this).data("group"),ue=m()(this).data("name"),le=m()("#sidenav li[data-group='"+ae+"'][data-name='"+ue+"']").length,xe=m()("#sidenav li[data-group='"+ae+"'][data-name='"+ue+"']").index(m()(this));(le===1||xe===le-1)&&m()(this).addClass("is-new")}),m()(".nav-tabs-examples a").click(function(ae){ae.preventDefault(),m()(this).tab("show")}),m()(".nav-tabs-examples").find("a:first").tab("show"),m()(".sample-request-content-type-switch").change(function(){m()(this).val()==="body-form-data"?(m()("#sample-request-body-json-input-"+m()(this).data("id")).hide(),m()("#sample-request-body-form-input-"+m()(this).data("id")).show()):(m()("#sample-request-body-form-input-"+m()(this).data("id")).hide(),m()("#sample-request-body-json-input-"+m()(this).data("id")).show())}),fe.template.aloneDisplay&&(m()(".show-group").click(function(){const ae="."+m()(this).attr("data-group")+"-group",ue="."+m()(this).attr("data-group")+"-article";m()(".show-api-group").addClass("hide"),m()(ae).removeClass("hide"),m()(".show-api-article").addClass("hide"),m()(ue).removeClass("hide")}),m()(".show-api").click(function(){const ae=this.getAttribute("href").substring(1),ue=document.getElementById("version").textContent.trim(),le=`.${this.dataset.name}-article`,xe=`[id="${ae}-${ue}"]`,We=`.${this.dataset.group}-group`;m()(".show-api-group").addClass("hide"),m()(We).removeClass("hide"),m()(".show-api-article").addClass("hide");let _e=m()(le);m()(xe).length&&(_e=m()(xe).parent()),_e.removeClass("hide"),ae.match(/_(header|footer)/)&&document.getElementById(ae).classList.remove("hide")})),fe.template.aloneDisplay||m()("body").scrollspy("refresh"),fe.template.aloneDisplay){const ae=decodeURI(window.location.hash);if(ae!=null&&ae.length!==0){const ue=document.getElementById("version").textContent.trim(),le=document.querySelector(`li .${ae.slice(1)}-init`),xe=document.querySelector(`li[data-version="${ue}"] .show-api.${ae.slice(1)}-init`);let We=le;xe&&(We=xe),We.click()}}}function O(re){typeof re=="undefined"?re=m()("#version strong").html():m()("#version strong").html(re),m()("article").addClass("hide"),m()("#sidenav li:not(.nav-fixed)").addClass("hide");const ae={};document.querySelectorAll("article[data-version]").forEach(ue=>{const le=ue.dataset.group,xe=ue.dataset.name,We=ue.dataset.version,_e=le+xe;!ae[_e]&&a().lte(We,re)&&(ae[_e]=!0,document.querySelector(`article[data-group="${le}"][data-name="${xe}"][data-version="${We}"]`).classList.remove("hide"),document.querySelector(`#sidenav li[data-group="${le}"][data-name="${xe}"][data-version="${We}"]`).classList.remove("hide"),document.querySelector(`#sidenav li.nav-header[data-group="${le}"]`).classList.remove("hide"))}),m()("article[data-version]").each(function(ue){const le=m()(this).data("group");m()("section#api-"+le).removeClass("hide"),m()("section#api-"+le+" article:visible").length===0?m()("section#api-"+le).addClass("hide"):m()("section#api-"+le).removeClass("hide")})}if(O(),m()("#versions li.version a").on("click",function(re){re.preventDefault(),O(m()(this).html())}),m()("#compareAllWithPredecessor").on("click",ee),m()("article .versions li.version a").on("click",Z),m().urlParam=function(re){const ae=new RegExp("[\\?&amp;]"+re+"=([^&amp;#]*)").exec(window.location.href);return ae&&ae[1]?ae[1]:null},m().urlParam("compare")&&m()("#compareAllWithPredecessor").trigger("click"),window.location.hash){const re=decodeURI(window.location.hash);m()(re).length>0&&m()("html,body").animate({scrollTop:parseInt(m()(re).offset().top)},0)}document.querySelector('[data-toggle="offcanvas"]').addEventListener("click",function(){const re=document.querySelector(".row-offcanvas");re&&re.classList.toggle("active")}),m()("#scrollingNav .sidenav-search input.search").focus(),m()('[data-action="filter-search"]').on("keyup",q(re=>{const ae=re.currentTarget.value.toLowerCase();m()(".sidenav a.nav-list-item").filter((ue,le)=>m()(le).toggle(m()(le).text().toLowerCase().indexOf(ae)>-1))},200)),m()("span.search-reset").on("click",function(){m()("#scrollingNav .sidenav-search input.search").val("").focus(),m()(".sidenav").find("a.nav-list-item").show()});function q(re,ae){let ue=null;return(...le)=>{clearTimeout(ue),ue=setTimeout(re.bind(this,...le),ae||0)}}function Z(re){re.preventDefault();const ae=m()(this).parents("article"),ue=m()(this).html(),le=ae.find(".version"),xe=le.find("strong").html();le.find("strong").html(ue);const We=ae.data("group"),_e=ae.data("name"),ut=ae.data("version"),At=ae.data("compare-version");if(At!==ue&&!(!At&&ut===ue)){if(At&&Ot[We][_e][0]===ue||ut===ue)Ae(We,_e,ut);else{let wt={},gt={};m().each(et[We][_e],function(oa,qn){qn.version===ut&&(wt=qn),qn.version===ue&&(gt=qn)});const st={article:wt,compare:gt,versions:Ot[We][_e]};st.article.id=st.article.group+"-"+st.article.name+"-"+st.article.version,st.article.id=st.article.id.replace(/\./g,"_"),st.compare.id=st.compare.group+"-"+st.compare.name+"-"+st.compare.version,st.compare.id=st.compare.id.replace(/\./g,"_");let nt=wt;nt.header&&nt.header.fields&&(st._hasTypeInHeaderFields=It(nt.header.fields)),nt.parameter&&nt.parameter.fields&&(st._hasTypeInParameterFields=It(nt.parameter.fields)),nt.error&&nt.error.fields&&(st._hasTypeInErrorFields=It(nt.error.fields)),nt.success&&nt.success.fields&&(st._hasTypeInSuccessFields=It(nt.success.fields)),nt.info&&nt.info.fields&&(st._hasTypeInInfoFields=It(nt.info.fields)),nt=gt,st._hasTypeInHeaderFields!==!0&&nt.header&&nt.header.fields&&(st._hasTypeInHeaderFields=It(nt.header.fields)),st._hasTypeInParameterFields!==!0&&nt.parameter&&nt.parameter.fields&&(st._hasTypeInParameterFields=It(nt.parameter.fields)),st._hasTypeInErrorFields!==!0&&nt.error&&nt.error.fields&&(st._hasTypeInErrorFields=It(nt.error.fields)),st._hasTypeInSuccessFields!==!0&&nt.success&&nt.success.fields&&(st._hasTypeInSuccessFields=It(nt.success.fields)),st._hasTypeInInfoFields!==!0&&nt.info&&nt.info.fields&&(st._hasTypeInInfoFields=It(nt.info.fields));const dr=Se(st);ae.after(dr),ae.next().find(".versions li.version a").on("click",Z),m()("#sidenav li[data-group='"+We+"'][data-name='"+_e+"'][data-version='"+xe+"']").addClass("has-modifications"),ae.remove()}On(),g().highlightAll()}}function ee(re){re.preventDefault(),m()("article:visible .versions").each(function(){const ue=m()(this).parents("article").data("version");let le=null;m()(this).find("li.version a").each(function(){m()(this).html()<ue&&!le&&(le=m()(this))}),le&&le.trigger("click")})}function se(re,ae){re.id=re.article.group+"-"+re.article.name+"-"+re.article.version,re.id=re.id.replace(/\./g,"_"),ae.header&&ae.header.fields&&(re._hasTypeInHeaderFields=It(ae.header.fields)),ae.parameter&&ae.parameter.fields&&(re._hasTypeInParameterFields=It(ae.parameter.fields)),ae.error&&ae.error.fields&&(re._hasTypeInErrorFields=It(ae.error.fields)),ae.success&&ae.success.fields&&(re._hasTypeInSuccessFields=It(ae.success.fields)),ae.info&&ae.info.fields&&(re._hasTypeInInfoFields=It(ae.info.fields)),re.template=fe.template}function De(re,ae,ue){let le={};m().each(et[re][ae],function(We,_e){_e.version===ue&&(le=_e)});const xe={article:le,versions:Ot[re][ae]};return se(xe,le),X(xe)}function Ae(re,ae,ue){const le=m()("article[data-group='"+re+"'][data-name='"+ae+"']:visible"),xe=De(re,ae,ue);le.after(xe),le.next().find(".versions li.version a").on("click",Z),m()("#sidenav li[data-group='"+re+"'][data-name='"+ae+"'][data-version='"+ue+"']").removeClass("has-modifications"),le.remove()}function be(re,ae,ue){const le=[];return ae.forEach(function(xe){ue?re.forEach(function(We){const _e=We.split(ue);(_e[0]===xe||_e[1]===xe)&&le.push(We)}):re.forEach(function(We){We===xe&&le.push(xe)})}),re.forEach(function(xe){le.indexOf(xe)===-1&&le.push(xe)}),le}function Ee(re,ae){const ue=[];return ae.forEach(le=>{Object.keys(re).forEach(xe=>{re[xe].replace(/_/g," ")===le&&ue.push(xe)})}),Object.keys(re).forEach(le=>{ue.indexOf(le)===-1&&ue.push(le)}),ue}On()}})()})();

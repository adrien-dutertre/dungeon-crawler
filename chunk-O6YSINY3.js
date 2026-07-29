import{a as Le,b as Ie}from"./chunk-VGAGRXRW.js";import{a as ge,b as be}from"./chunk-BZHK4UYK.js";import{c as H,d as R,e as p,g as xe,h as Me,l as De,m as $}from"./chunk-CFANM7DC.js";import{$ as ee,$a as re,Ab as ce,Ac as Ce,Dc as N,Eb as z,Gb as pe,Gc as _e,Ha as g,Ia as x,J as k,K as O,Ka as M,La as D,Lc as J,M as T,Ma as q,Mb as G,O as r,Oc as we,Qb as K,Qc as Se,T as m,Tb as C,U as f,Ub as ue,Wa as ie,Xa as L,Ya as I,Za as oe,_ as Z,_a as ne,a as j,ab as a,bb as l,cb as c,db as w,dc as me,ga as _,gc as fe,hc as he,ic as A,id as ke,kb as E,kd as Oe,ld as h,mb as b,mc as V,nb as d,ob as P,od as Te,pb as B,pc as ve,qb as se,rc as ye,rd as F,sb as Y,ta as te,tb as Q,ua as s,ub as ae,vb as le,wb as y,xb as S,yb as W,zb as de}from"./chunk-BIGNO5GP.js";var Ee=`
    .p-popover {
        margin-block-start: dt('popover.gutter');
        background: dt('popover.background');
        color: dt('popover.color');
        border: 1px solid dt('popover.border.color');
        border-radius: dt('popover.border.radius');
        box-shadow: dt('popover.shadow');
        will-change: transform;
    }

    .p-popover-content {
        padding: dt('popover.content.padding');
    }

    .p-popover-flipped {
        margin-block-start: calc(dt('popover.gutter') * -1);
        margin-block-end: dt('popover.gutter');
    }

    .p-popover:after,
    .p-popover:before {
        bottom: 100%;
        left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-popover:after {
        border-width: calc(dt('popover.gutter') - 2px);
        margin-left: calc(-1 * (dt('popover.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.background');
    }

    .p-popover:before {
        border-width: dt('popover.gutter');
        margin-left: calc(-1 * dt('popover.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.border.color');
    }

    .p-popover-flipped:after,
    .p-popover-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-popover.p-popover-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('popover.background');
    }

    .p-popover.p-popover-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('popover.border.color');
    }
`;var $e=["content"],je=["*"],Ze=t=>({closeCallback:t});function qe(t,u){}function Ye(t,u){t&1&&q(0,qe,0,0,"ng-template")}function Qe(t,u){if(t&1){let e=E();l(0,"div",1),b("click",function(o){m(e);let n=d();return f(n.onOverlayClick(o))})("pMotionOnEnter",function(o){m(e);let n=d();return f(n.onAnimationStart(o))})("pMotionOnAfterLeave",function(){m(e);let o=d();return f(o.onAnimationEnd())}),l(1,"div",2),b("click",function(o){m(e);let n=d();return f(n.onContentClick(o))})("mousedown",function(o){m(e);let n=d();return f(n.onContentClick(o))}),B(2),q(3,Ye,1,0,null,3),c()()}if(t&2){let e=d();y(e.sx("root")),S(e.cn(e.cx("root"),e.styleClass)),a("pBind",e.ptm("root"))("ngStyle",e.style)("pMotion",e.overlayVisible)("pMotionAppear",!0)("pMotionOptions",e.computedMotionOptions()),ie("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),s(),S(e.cx("content")),a("pBind",e.ptm("content")),s(2),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",pe(17,Ze,e.onCloseClick.bind(e)))}}var We={root:()=>({position:"absolute"})},Ge={root:"p-popover p-component",content:"p-popover-content"},Pe=(()=>{class t extends F{name="popover";style=Ee;classes=Ge;inlineStyles=We;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),Be=new T("POPOVER_INSTANCE"),U=(()=>{class t extends R{componentName="Popover";$pcPopover=r(Be,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(p,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo=K("body");autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";motionOptions=K(void 0);computedMotionOptions=G(()=>j(j({},this.ptm("motion")),this.motionOptions()));onShow=new Z;onHide=new Z;$appendTo=G(()=>this.appendTo()||this.config.overlayAppendTo());container;overlayVisible=!1;render=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=r(Pe);zone=r(ee);overlayService=r(ke);onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="content"&&(this._contentTemplate=e.template)})}bindDocumentClickListener(){if(V(this.platformId)&&!this.documentClickListener){let e=we()?"touchstart":"click",i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,e,o=>{this.dismissable&&(!this.container?.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,i){this.overlayVisible?(this.hasTargetChanged(e,i)&&(this.destroyCallback=()=>{this.show(null,i||e.currentTarget||e.target)}),this.hide()):this.show(e,i)}show(e,i){i&&e&&e.stopPropagation(),this.container&&!this.overlayVisible&&(this.container=null),this.target=i||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck()}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let i=e.target;this.selfClick=e.offsetX<i.clientWidth&&e.offsetY<i.clientHeight}hasTargetChanged(e,i){return this.target!=null&&this.target!==(i||e.currentTarget||e.target)}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?N(this.document.body,this.container):N(this.$appendTo(),this.container))}restoreAppend(){this.container&&this.$appendTo()&&this.$appendTo()!=="self"&&N(this.el.nativeElement,this.container)}setZIndex(){this.autoZIndex&&$.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay)}align(){if(this.target&&this.container){Ce(this.container,this.target,!1);let e=J(this.container),i=J(this.target),o=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),n=0;e.left<i.left&&(n=i.left-e.left-parseFloat(o)*2),this.container.style.setProperty(Te("popover.arrow.left").name,`${n}px`),e.top<i.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.$unstyled()&&ye(this.container,"p-popover-flipped"))}}onAnimationStart(e){this.container=e.element,this.container?.setAttribute(this.$attrSelector,""),this.appendOverlay(),this.align(),this.setZIndex(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=i=>{this.container&&this.container.contains(i.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)}onAnimationEnd(){this.overlayVisible||(this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.autoZIndex&&$.clear(this.container),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1,this.container=null)}focus(){let e=_e(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!Se()&&this.hide()}bindDocumentResizeListener(){if(V(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){V(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new De(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&$.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=g({type:t,selectors:[["p-popover"]],contentQueries:function(i,o,n){if(i&1&&se(n,$e,4)(n,Oe,4),i&2){let v;Y(v=Q())&&(o.contentTemplate=v.first),Y(v=Q())&&(o.templates=v)}},hostBindings:function(i,o){i&1&&b("keydown.escape",function(v){return o.onEscapeKeydown(v)},te)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",C],style:"style",styleClass:"styleClass",appendTo:[1,"appendTo"],autoZIndex:[2,"autoZIndex","autoZIndex",C],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",ue],focusOnShow:[2,"focusOnShow","focusOnShow",C],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"]},outputs:{onShow:"onShow",onHide:"onHide"},features:[z([Pe,{provide:Be,useExisting:t},{provide:H,useExisting:t}]),M([p]),D],ngContentSelectors:je,decls:1,vars:1,consts:[["role","dialog","pMotionName","p-anchored-overlay",3,"pBind","class","style","ngStyle","pMotion","pMotionAppear","pMotionOptions"],["role","dialog","pMotionName","p-anchored-overlay",3,"click","pMotionOnEnter","pMotionOnAfterLeave","pBind","ngStyle","pMotion","pMotionAppear","pMotionOptions"],[3,"click","mousedown","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&(P(),L(0,Qe,4,19,"div",0)),i&2&&I(o.render?0:-1)},dependencies:[A,he,fe,h,p,Ie,Le],encapsulation:2,changeDetection:0})}return t})(),Ae=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=x({type:t});static \u0275inj=O({imports:[U,h,h]})}return t})();var Je=["*"],Ue=`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: dt('overlaybadge.outline.width');
    outline-style: solid;
    outline-color: dt('overlaybadge.outline.color');
}
`,Xe={root:"p-overlaybadge"},Ve=(()=>{class t extends F{name="overlaybadge";style=Ue;classes=Xe;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=k({token:t,factory:t.\u0275fac})}return t})(),Ne=new T("OVERLAYBADGE_INSTANCE"),X=(()=>{class t extends R{componentName="OverlayBadge";$pcOverlayBadge=r(Ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(p,{self:!0});styleClass;style;badgeSize;severity;value;badgeDisabled=!1;set size(e){this._size=e,!this.badgeSize&&this.size&&console.log("size property is deprecated and will removed in v18, use badgeSize instead.")}get size(){return this._size}_size;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}_componentStyle=r(Ve);constructor(){super()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=g({type:t,selectors:[["p-overlayBadge"],["p-overlay-badge"],["p-overlaybadge"]],inputs:{styleClass:"styleClass",style:"style",badgeSize:"badgeSize",severity:"severity",value:"value",badgeDisabled:[2,"badgeDisabled","badgeDisabled",C],size:"size"},features:[z([Ve,{provide:Ne,useExisting:t},{provide:H,useExisting:t}]),M([p]),D],ngContentSelectors:Je,decls:3,vars:11,consts:[[3,"pBind"],[3,"pt","styleClass","badgeSize","severity","value","badgeDisabled"]],template:function(i,o){i&1&&(P(),l(0,"div",0),B(1),w(2,"p-badge",1),c()),i&2&&(S(o.cx("root")),a("pBind",o.ptm("root")),s(2),y(o.style),a("pt",o.ptm("pcBadge"))("styleClass",o.styleClass)("badgeSize",o.badgeSize)("severity",o.severity)("value",o.value)("badgeDisabled",o.badgeDisabled))},dependencies:[A,Me,xe,h,p],encapsulation:2,changeDetection:0})}return t})(),Fe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=x({type:t});static \u0275inj=O({imports:[X,h,h]})}return t})();function tt(t,u){if(t&1){let e=E();l(0,"p-overlaybadge",7)(1,"img",8),b("click",function(o){m(e);let n=ae(3);return f(n.toggle(o))}),c()(),l(2,"p-popover",null,0)(4,"p"),W(5),c()()}if(t&2){let e=d().$implicit;a("value",e.value()??"?"),s(),a("ngSrc",e.source()),s(4),de(e.description())}}function it(t,u){if(t&1&&w(0,"img",6),t&2){let e=d().$implicit;a("ngSrc",e.source())}}function ot(t,u){if(t&1&&(l(0,"div",5),L(1,tt,6,3)(2,it,1,1,"img",6),c()),t&2){let e=u.$implicit,i=u.$index,o=d();le("--value",i),a("ngClass",o.level.transition()?"tileOff":"tileOn"),s(),I(e.interactible&&e.value&&e.description?1:2)}}var He=class t{level=r(be);hero=r(ge);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=g({type:t,selectors:[["app-level"]],decls:6,vars:3,consts:[["pop",""],[1,"p-2","font-mono","text-lg","font-bold","w-full","sm:max-w-96","justify-self-start"],[1,"grid","grid-cols-15","grid-rows-15","aspect-square","sm:max-w-96","w-full","relative"],[1,"w-full","h-auto","aspect-square","border","border-neutral-100","backface-hidden",3,"ngClass","--value"],["id","hero",1,"hero","absolute","w-1/15","aspect-square","outline-2","outline-blue-500","outline-offset-2","z-10"],[1,"w-full","h-auto","aspect-square","border","border-neutral-100","backface-hidden",3,"ngClass"],["width","32","height","32",3,"ngSrc"],["severity","secondary","badgeSize","small",3,"value"],["width","32","height","32",3,"click","ngSrc"]],template:function(e,i){e&1&&(l(0,"h2",1),W(1),c(),l(2,"div",2),ne(3,ot,3,4,"div",3,oe),w(5,"div",4),c()),e&2&&(s(),ce("Niveau ",i.level.floor(),`
`),s(2),re(i.level.current()),s(2),y(i.hero.calculatedPosition()))},dependencies:[Ae,U,Fe,X,ve,me],styles:['[_nghost-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;align-items:center}.hero[_ngcontent-%COMP%]{background-image:url("./media/hero-1-ZZKGJW5O.png");background-repeat:no-repeat;background-size:100% 100%;transition:all 1s}.tileOn[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_endTransition 1s ease-out 1 backwards;animation-delay:calc(var(--value) * 10ms)}.tileOff[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_startTransition 1s ease-out 1;animation-delay:calc(var(--value) * 10ms)}@keyframes _ngcontent-%COMP%_startTransition{0%{opacity:0}to{transform:rotateY(180deg)}}@keyframes _ngcontent-%COMP%_endTransition{0%{opacity:0;transform:rotateY(180deg)}to{opacity:1;transform:rotateY(0)}}']})};export{He as Level};

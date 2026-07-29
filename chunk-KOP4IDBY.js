import{a as x,d as f}from"./chunk-CFANM7DC.js";import{$ as h,Cc as A,Eb as c,Ha as y,J as l,Ja as v,Jc as m,La as p,Lc as F,Mc as B,Nc as u,O as s,Sc as C,Tb as D,ea as g,ga as o,mc as I,ob as k,pb as b,rc as M,rd as d,tc as a,xb as w}from"./chunk-BIGNO5GP.js";var L=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var T=`
    ${L}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,O={root:"p-ink"},j=(()=>{class i extends d{name="ripple";style=T;classes=O;static \u0275fac=(()=>{let e;return function(n){return(e||(e=o(i)))(n||i)}})();static \u0275prov=l({token:i,factory:i.\u0275fac})}return i})();var U=(()=>{class i extends f{componentName="Ripple";zone=s(h);_componentStyle=s(j);animationListener;mouseDownListener;timeout;constructor(){super(),g(()=>{I(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(!this.$unstyled()&&a(t,"p-ink-active"),t.setAttribute("data-p-ink-active","false"),!m(t)&&!u(t)){let r=Math.max(A(this.el.nativeElement),B(this.el.nativeElement));t.style.height=r+"px",t.style.width=r+"px"}let n=F(this.el.nativeElement),N=e.pageX-n.left+this.document.body.scrollTop-u(t)/2,S=e.pageY-n.top+this.document.body.scrollLeft-m(t)/2;this.renderer.setStyle(t,"top",S+"px"),this.renderer.setStyle(t,"left",N+"px"),!this.$unstyled()&&M(t,"p-ink-active"),t.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let r=this.getInk();r&&(!this.$unstyled()&&a(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&a(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&a(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,C(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=v({type:i,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[c([j]),p]})}return i})();var P=["*"],R=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,E=(()=>{class i extends d{name="baseicon";css=R;static \u0275fac=(()=>{let e;return function(n){return(e||(e=o(i)))(n||i)}})();static \u0275prov=l({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var pe=(()=>{class i extends f{spin=!1;_componentStyle=s(E);getClassNames(){return x("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=o(i)))(n||i)}})();static \u0275cmp=y({type:i,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(t,n){t&2&&w(n.getClassNames())},inputs:{spin:[2,"spin","spin",D]},features:[c([E]),p],ngContentSelectors:P,decls:1,vars:0,template:function(t,n){t&1&&(k(),b(0))},encapsulation:2,changeDetection:0})}return i})();export{pe as a,U as b};

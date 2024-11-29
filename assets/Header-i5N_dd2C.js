import{r as u,R as e}from"./index-Cs7sjTYM.js";import{B as _}from"./Base-fHV16vWU.js";import{p as k}from"./polymorphic-factory-23vJzvkj.js";import{c as o}from"./clsx-B-dksMZM.js";import{f as c}from"./factory-DehWrhRO.js";import{V as L}from"./VisuallyHidden-DonKESKA.js";const B=u.createContext({}),S=()=>u.useContext(B),q=B.Provider,N=({className:n,...a})=>e.createElement("svg",{className:o("nhsuk-icon nhsuk-icon__search",n),...a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",width:"34",height:"34"},e.createElement("path",{d:"M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"}));N.displayName="SearchIcon";N.__docgenInfo={description:"",methods:[],displayName:"SearchIcon"};const y=({className:n})=>e.createElement("svg",{className:o("nhsuk-icon nhsuk-icon__chevron-down",n),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},e.createElement("path",{d:"M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"}));y.displayName="ChevronDownIcon";y.__docgenInfo={description:"",methods:[],displayName:"ChevronDownIcon"};let V=class{constructor(){this.menuIsOpen=!1,this.navigation=document.querySelector(".nhsuk-navigation"),this.navigationList=document.querySelector(".nhsuk-header__navigation-list"),this.mobileMenu=document.createElement("ul"),this.mobileMenuToggleButton=document.querySelector(".nhsuk-header__menu-toggle"),this.mobileMenuCloseButton=document.createElement("button"),this.mobileMenuContainer=document.querySelector(".nhsuk-mobile-menu-container"),this.breakpoints=[],this.width=document.body.offsetWidth}init(){!this.navigation||!this.navigationList||!this.mobileMenuToggleButton||!this.mobileMenuContainer||(this.setupMobileMenu(),this.calculateBreakpoints(),this.updateNavigation(),this.doOnOrientationChange(),this.handleResize=this.debounce(()=>{this.calculateBreakpoints(),this.updateNavigation()}),this.mobileMenuToggleButton.addEventListener("click",this.toggleMobileMenu.bind(this)),window.addEventListener("resize",this.handleResize),window.addEventListener("orientationchange",this.doOnOrientationChange()))}debounce(a,t=100){let i;return(...s)=>{clearTimeout(i),i=setTimeout(()=>{a.apply(this,s)},t)}}calculateBreakpoints(){let a=0;for(let t=0;t<this.navigationList.children.length;t++)a+=this.navigationList.children[t].offsetWidth,this.breakpoints[t]=a}setupMobileMenu(){const a=this.mobileMenuContainer.querySelector(".nhsuk-header__drop-down");if(a){this.mobileMenu=a;return}this.mobileMenuContainer.appendChild(this.mobileMenu),this.mobileMenu.classList.add("nhsuk-header__drop-down","nhsuk-header__drop-down--hidden")}closeMobileMenu(){this.menuIsOpen=!1,this.mobileMenu.classList.add("nhsuk-header__drop-down--hidden"),this.navigation.style.marginBottom=0,this.mobileMenuToggleButton.setAttribute("aria-expanded","false"),this.mobileMenuToggleButton.focus(),this.mobileMenuCloseButton.removeEventListener("click",this.closeMobileMenu.bind(this)),document.removeEventListener("keydown",this.handleEscapeKey.bind(this))}handleEscapeKey(a){a.key==="Escape"&&this.closeMobileMenu()}openMobileMenu(){this.menuIsOpen=!0,this.mobileMenu.classList.remove("nhsuk-header__drop-down--hidden");const a=this.mobileMenu.offsetHeight;this.navigation.style.marginBottom=`${a}px`,this.mobileMenuToggleButton.setAttribute("aria-expanded","true"),document.addEventListener("keydown",this.handleEscapeKey.bind(this)),this.mobileMenuCloseButton.addEventListener("click",this.closeMobileMenu.bind(this))}toggleMobileMenu(){this.menuIsOpen?this.closeMobileMenu():this.openMobileMenu()}updateNavigation(){const a=this.navigation.offsetWidth;let t=this.navigationList.children.length;if(a<this.breakpoints[t-1]){if(this.mobileMenuToggleButton.classList.add("nhsuk-header__menu-toggle--visible"),this.mobileMenuContainer.classList.add("nhsuk-mobile-menu-container--visible"),t===2)return;for(;a<this.breakpoints[t-1];)this.mobileMenu.insertBefore(this.navigationList.children[t-2],this.mobileMenu.firstChild),t-=1}else if(a>this.breakpoints[t])for(;a>this.breakpoints[t];)this.navigationList.insertBefore(this.mobileMenu.removeChild(this.mobileMenu.firstChild),this.mobileMenuContainer),t+=1;this.mobileMenu.children.length||(this.mobileMenuToggleButton.classList.remove("nhsuk-header__menu-toggle--visible"),this.mobileMenuContainer.classList.remove("nhsuk-mobile-menu-container--visible")),document.body.offsetWidth!==this.width&&this.menuIsOpen&&this.closeMobileMenu()}doOnOrientationChange(){switch(window.orientation){case 90:setTimeout(()=>{this.calculateBreakpoints(),this.updateNavigation()},200);break}}};const O=()=>{new V().init()},r=c(({children:n,className:a,serviceName:t,transactional:i,organisationName:s,organisationSplit:d,organisationDescriptor:l,variant:h="blue-header-blue-nav",...p},g)=>{const x=u.useMemo(()=>({serviceName:t,transactional:i,organisationName:s,organisationSplit:d,organisationDescriptor:l,white:h.includes("white-header"),whiteNav:h.includes("white-nav")}),[]);return e.createElement(q,{value:x},e.createElement("header",{className:o("nhsuk-header",{"nhsuk-header__transactional":i,"nhsuk-header--organisation":s,"nhsuk-header--white":h.includes("white-header"),"nhsuk-header--white-nav":h.includes("white-nav")},a),role:"banner",...p,ref:g},n))}),M=({children:n,className:a,...t})=>e.createElement("div",{className:o("nhsuk-header__container",a),...t},n),w=k(({className:n,as:a="a",variant:t,...i},s)=>{const{transactional:d,serviceName:l,organisationName:h,organisationSplit:p,organisationDescriptor:g}=S();return e.createElement("div",{className:o("nhsuk-header__logo",{"nhsuk-header__logo--only":t})},e.createElement(_,{as:a,className:o("nhsuk-header__link",{"nhsuk-header__transactional--logo":d,"nhsuk-header__link--service":l},n),...i,ref:s},e.createElement("svg",{className:"nhsuk-logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 16",height:"40",width:"100"},e.createElement("path",{className:"nhsuk-logo__background",fill:"#005eb8",d:"M0 0h40v16H0z"}),e.createElement("path",{className:"nhsuk-logo__text",fill:"#fff",d:"M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"})),l&&e.createElement("span",{className:"nhsuk-header__service-name"},l),h&&e.createElement("span",{className:"nhsuk-organisation-name"},h,p&&e.createElement(e.Fragment,null," ",e.createElement("span",{className:"nhsuk-organisation-split"},p))),g&&e.createElement("span",{className:"nhsuk-organisation-descriptor"},g)))}),E=k(({className:n,as:a="a",...t},i)=>{const{transactional:s}=S();return s?e.createElement("div",{className:"nhsuk-header__transactional-service-name"},e.createElement(_,{as:a,className:o("nhsuk-header__transactional-service-name--link",n),...t,ref:i})):null}),H=({children:n,className:a,...t})=>e.createElement("div",{className:"nhsuk-navigation-container"},e.createElement("nav",{className:o("nhsuk-navigation",a),role:"navigation","aria-label":"Primary navigation",...t},n)),C=c(({children:n,className:a,...t},i)=>{const s=u.useRef(null);u.useImperativeHandle(i,()=>s.current),u.useEffect(()=>{s.current&&O()},[s,n]);const d=u.Children.toArray(n).filter(l=>e.isValidElement(l)&&l.type===v);return e.createElement("ul",{className:o("nhsuk-header__navigation-list",{"nhsuk-header__navigation-list--left-aligned":d.length<4},a),...t,ref:s},n)}),v=k(({className:n,variant:a,as:t="a",...i},s)=>e.createElement("li",{className:o("nhsuk-header__navigation-item",{"nhsuk-header__navigation-item--home":a==="home-link"})},e.createElement(_,{as:t,className:o("nhsuk-header__navigation-link",n),...i,ref:s}))),T=({children:n,className:a,...t})=>e.createElement("div",{className:o("nhsuk-header__content",a),...t},n),m=c(({children:n,className:a,inputProps:t={visuallyHiddenText:"Search the NHS website"},buttonProps:i={visuallyHiddenText:"Search"},...s},d)=>e.createElement("div",{className:"nhsuk-header__search"},e.createElement("div",{className:"nhsuk-header__search-wrap"},e.createElement("form",{className:o("nhsuk-header__search-form",a),role:"search",...s,ref:d},n||e.createElement(e.Fragment,null,e.createElement(f,{...t}),e.createElement(b,{...i})))))),f=c(({visuallyHiddenText:n,className:a,placeholder:t="Search",...i},s)=>e.createElement(e.Fragment,null,e.createElement("label",{className:"nhsuk-u-visually-hidden",htmlFor:"search-field"},n),e.createElement("input",{className:o("nhsuk-search__input",a),id:"search-field",name:"search-field",type:"search",placeholder:t,autoComplete:"off",...i,ref:s}))),b=c(({visuallyHiddenText:n,className:a,...t},i)=>e.createElement("button",{className:o("nhsuk-search__submit",a),...t,type:"submit",ref:i},e.createElement(N,null),e.createElement(L,null,n))),I=({visuallyHiddenText:n="Browse",children:a="More",className:t,...i})=>e.createElement("li",{className:"nhsuk-mobile-menu-container"},e.createElement("button",{className:o("nhsuk-header__menu-toggle nhsuk-header__navigation-link",t),id:"toggle-menu","aria-expanded":"false",...i,type:"button"},e.createElement(L,null,n)," ",a,e.createElement(y,null)));r.displayName="Header";M.displayName="Header.Container";w.displayName="Header.Logo";E.displayName="Header.TransactionLink";H.displayName="Header.Nav";C.displayName="Header.NavList";v.displayName="Header.NavItem";I.displayName="Header.MobileMenu";T.displayName="Header.Content";m.displayName="Header.Search";f.displayName="Header.Search.Input";b.displayName="Header.Search.Button";m.Input=f;m.Button=b;r.Container=M;r.Logo=w;r.TransactionLink=E;r.Nav=H;r.NavList=C;r.NavItem=v;r.MobileMenu=I;r.Content=T;r.Search=m;r.__docgenInfo={description:"",methods:[],displayName:"Header",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'blue-header-blue-nav'
| 'blue-header-white-nave'
| 'white-header-blue-nav'
| 'white-header-white-nav'`,elements:[{name:"literal",value:"'blue-header-blue-nav'"},{name:"literal",value:"'blue-header-white-nave'"},{name:"literal",value:"'white-header-blue-nav'"},{name:"literal",value:"'white-header-white-nav'"}]},description:"",defaultValue:{value:"'blue-header-blue-nav'",computed:!1}}}};M.__docgenInfo={description:"",methods:[],displayName:"Header.Container"};w.__docgenInfo={description:"",methods:[],displayName:"Header.Logo",props:{"aria-label":{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"literal",value:"'logo-only'"},description:"If set, there will be extra space around the logo to account for the lack of a service/oganisation name"},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};E.__docgenInfo={description:"",methods:[],displayName:"Header.TransactionLink",props:{as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};H.__docgenInfo={description:"",methods:[],displayName:"Header.Nav"};C.__docgenInfo={description:"",methods:[],displayName:"Header.NavList"};v.__docgenInfo={description:"",methods:[],displayName:"Header.NavItem",props:{variant:{required:!1,tsType:{name:"literal",value:"'home-link'"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};I.__docgenInfo={description:"",methods:[],displayName:"Header.MobileMenu",props:{visuallyHiddenText:{required:!1,tsType:{name:"string"},description:`Visually hidden text for screen readers.

@type {string | undefined}`,defaultValue:{value:"'Browse'",computed:!1}},children:{defaultValue:{value:"'More'",computed:!1},required:!1}}};T.__docgenInfo={description:"",methods:[],displayName:"Header.Content"};m.__docgenInfo={description:"",methods:[],displayName:"Header.Search",props:{inputProps:{defaultValue:{value:"{ visuallyHiddenText: 'Search the NHS website' }",computed:!1},required:!1},buttonProps:{defaultValue:{value:"{ visuallyHiddenText: 'Search' }",computed:!1},required:!1}}};f.__docgenInfo={description:"",methods:[],displayName:"Header.Search.Input",props:{placeholder:{defaultValue:{value:"'Search'",computed:!1},required:!1}}};b.__docgenInfo={description:"",methods:[],displayName:"Header.Search.Button"};export{r as H};

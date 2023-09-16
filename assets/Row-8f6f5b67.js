import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{c as u}from"./clsx-1229b3e0.js";import{L as $}from"./Label-94ff57cd.js";import{E as be}from"./ErrorMessage-7fb437da.js";import{H as J}from"./Hint-fa47fa6a.js";import"./Details-3bda738e.js";import"./DoDontList-c9d5ccab.js";import"./Image-6a997706.js";import"./InsetText-679dda7d.js";import"./SummaryList-700e977e.js";import"./Table-abfb9231.js";import"./Tag-8d0caf20.js";import"./WarningCallout-6787373a.js";import"./ActionLink-92d9554a.js";import"./BackLink-ddeb1684.js";import"./Breadcrumbs-44813de0.js";import"./Card-de649efd.js";import"./ContentsList-47721945.js";import{C as ae}from"./Footer-ccd1a6a5.js";import"./Pagination-9a45d4cd.js";import"./SkipLink-1b15983e.js";import"./Button-c27bbde9.js";import"./ErrorSummary-06368e4f.js";import{u as ve}from"./Fieldset-3b2b35c4.js";import"./index-32a1c154.js";import"./index-b109e4e1.js";import"./index-149b7452.js";import{b as re,c as ke,S as ee}from"./index-49b2d0ee.js";const se=i.createContext({setHasSearch:()=>{},setHasMenuToggle:()=>{},toggleMenu:()=>{},toggleSearch:()=>{},setHasTransactionalLink:()=>{},hasTransactionalLink:!1,hasSearch:!1,hasMenuToggle:!1,menuOpen:!1,searchOpen:!1,transactional:!1}),H=()=>i.useContext(se),B=({className:a,height:r="40",width:n="100",...s})=>e.jsxs("svg",{className:u("nhsuk-logo",a),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 16",height:r,width:n,...s,children:[e.jsx("path",{className:"nhsuk-logo__background",fill:"#005eb8",d:"M0 0h40v16H0z"}),e.jsx("path",{className:"nhsuk-logo__text",fill:"#fff",d:"M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"})]});try{B.displayName="NhsLogo",B.__docgenInfo={description:"",displayName:"NhsLogo",props:{}}}catch{}const ne=({className:a,asElement:r="a",...n})=>{const{orgName:s,orgDescriptor:l,orgSplit:c,serviceName:t,hasMenuToggle:p,hasSearch:g,hasTransactionalLink:y}=H(),x=s?`${s} ${c} ${l} homepage`:"NHS homepage";return e.jsx("div",{className:u("nhsuk-header__logo",{"nhsuk-header__logo--only":!p&&!g&&y}),children:e.jsxs(r,{className:u("nhsuk-header__link",{"nhsuk-header__link--service":!s&&t},a),"aria-label":x,...n,children:[e.jsx(B,{}),s&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"nhsuk-organisation-name",children:[s,c&&e.jsx("span",{className:"nhsuk-organisation-name-split",children:c})]}),l&&e.jsx("span",{className:"nhsuk-organisation-descriptor",children:l})]}),!y&&t&&e.jsx("span",{className:"nhsuk-header__service-name",children:t})]})})},te=({className:a,asElement:r="a",...n})=>{const{serviceName:s,setHasTransactionalLink:l}=H();return i.useEffect(()=>(l(!0),()=>l(!1)),[]),e.jsx("div",{className:"nhsuk-header__transactional-service-name",children:e.jsx(r,{className:u("nhsuk-header__transactional-service-name--link",a),...n,children:s})})},oe=({className:a,onClick:r,...n})=>{const{toggleMenu:s,setHasMenuToggle:l,menuOpen:c}=H(),t=p=>{s(),r==null||r(p)};return i.useEffect(()=>(l(!0),()=>l(!1)),[]),e.jsx("div",{className:"nhsuk-header__menu",children:e.jsx("button",{className:u("nhsuk-header__menu-toggle",a),"aria-label":"Open menu","aria-expanded":c?"true":"false",onClick:t,...n,children:"Menu"})})},le=({children:a,className:r,...n})=>e.jsx(ae,{className:u("nhsuk-header__container",r),...n,children:a}),ie=({children:a,className:r,id:n="content-header",...s})=>{const{searchOpen:l}=H();return e.jsx("div",{className:u("nhsuk-header__content",{"js-show":l},r),id:n,...s,children:a})},de=({children:a,className:r,open:n,role:s="navigation",containerProps:l={},...c})=>{const{menuOpen:t,toggleMenu:p}=H();return e.jsx("nav",{className:u("nhsuk-header__navigation",{"js-show":n??t},r),"aria-label":"Primary navigation","aria-labelledby":"label-navigation",role:s,...c,children:e.jsxs(ae,{...l,children:[e.jsxs("p",{className:"nhsuk-header__navigation-title",children:[e.jsx("span",{id:"label-navigation",children:"Menu"}),e.jsxs("button",{className:"nhsuk-header__navigation-close",id:"close-menu",onClick:p,children:[e.jsx(re,{}),e.jsx("span",{className:"nhsuk-u-visually-hidden",children:"Close menu"})]})]}),e.jsx("ul",{className:"nhsuk-header__navigation-list",children:a})]})})},ue=({children:a,className:r,mobileOnly:n,asElement:s="a",...l})=>e.jsx("li",{className:u("nhsuk-header__navigation-item",{"nhsuk-header__navigation-item--for-mobile":n},r),children:e.jsxs(s,{className:"nhsuk-header__navigation-link",...l,children:[a,e.jsx(ke,{})]})}),ce=({className:a,action:r="/search",method:n="get",id:s="search-field",type:l="search",autoComplete:c="off",placeholder:t="Search",role:p="search",visuallyHiddenText:g="Search",toggleProps:y={},submitProps:x={},closeProps:h={},...o})=>{const{toggleSearch:d,setHasSearch:f,searchOpen:m}=H();return i.useEffect(()=>(f(!0),()=>f(!1)),[]),e.jsxs("div",{className:u("nhsuk-header__search",a),children:[e.jsxs("button",{className:u("nhsuk-header__search-toggle",{"is-active":m}),onClick:d,...y,children:[e.jsx("span",{className:"nhsuk-u-visually-hidden",children:g}),e.jsx(ee,{})]}),e.jsx("div",{className:u("nhsuk-header__search-wrap",{"js-show":m}),children:e.jsxs("form",{className:"nhsuk-header__search-form",action:r,method:n,role:p,children:[e.jsx("label",{className:"nhsuk-u-visually-hidden",htmlFor:s,children:g}),e.jsx("input",{className:"nhsuk-search__input",id:s,type:l,placeholder:t,autoComplete:c,...o}),e.jsx("button",{className:"nhsuk-search__submit",type:"submit","aria-label":"Submit search",...x,children:e.jsx(ee,{})}),e.jsxs("button",{className:"nhsuk-search__close",type:"button",onClick:d,...h,children:[e.jsx(re,{}),e.jsx("span",{className:"nhsuk-u-visually-hidden",children:"Close search"})]})]})})]})},R=({children:a,className:r,role:n="banner",transactional:s,orgName:l,orgSplit:c,orgDescriptor:t,serviceName:p,white:g,...y})=>{const[x,h]=i.useState(!1),[o,d]=i.useState(!1),[f,m]=i.useState(!1),[N,_]=i.useState(!1),[I,k]=i.useState(!1),b={orgName:l,orgSplit:c,orgDescriptor:t,serviceName:p,transactional:s??!1,hasSearch:N,searchOpen:f,menuOpen:o,hasMenuToggle:x,hasTransactionalLink:I,setHasTransactionalLink:k,setHasMenuToggle:h,setHasSearch:_,toggleMenu:()=>d(!o),toggleSearch:()=>m(!f)};return e.jsx("header",{className:u("nhsuk-header",{"nhsuk-header--transactional":s,"nhsuk-header--organisation":l,"nhsuk-header--white":g},r),role:n,...y,children:e.jsx(se.Provider,{value:b,children:a})})};R.Container=le;R.Logo=ne;R.TransactionalLink=te;R.MenuToggle=oe;R.Content=ie;R.Nav=de;R.NavItem=ue;R.Search=ce;R.displayName="Header";le.displayName="Header.Container";ne.displayName="Header.Logo";te.displayName="Header.TransactionalLink";oe.displayName="Header.MenuToggle";ie.displayName="Header.Content";de.displayName="Header.Nav";ue.displayName="Header.NavItem";ce.displayName="Header.Search";try{R.displayName="Header",R.__docgenInfo={description:`Use the header to show users they are on an NHS service and help them get started in finding what they need.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/header).`,displayName:"Header",props:{transactional:{defaultValue:null,description:"",name:"transactional",required:!1,type:{name:"boolean"}},orgName:{defaultValue:null,description:"",name:"orgName",required:!1,type:{name:"string"}},orgSplit:{defaultValue:null,description:"",name:"orgSplit",required:!1,type:{name:"string"}},orgDescriptor:{defaultValue:null,description:"",name:"orgDescriptor",required:!1,type:{name:"string"}},serviceName:{defaultValue:null,description:"",name:"serviceName",required:!1,type:{name:"string"}},white:{defaultValue:null,description:"",name:"white",required:!1,type:{name:"boolean"}}}}}catch{}const Pe=a=>`${a}_${i.useId()}`,M=a=>{const{render:r,hint:n,label:s,id:l,labelProps:c,error:t,hintProps:p,errorProps:g,formGroupProps:y,inputType:x,disableErrorLine:h,name:o,...d}=a,[f]=i.useState(Pe(x)),{isFieldset:m,dispatch:N}=ve(),_=l||f,I=`${_}--label`,k=`${_}--hint`,b=`${_}--error-message`,v={"aria-describedby":n?k:void 0,"aria-labelledby":s?I:void 0,error:t,name:o||_,id:_,...d};i.useEffect(()=>{if(m)return N({type:"set_error",data:{id:_,error:!!t}}),()=>N({type:"set_error",data:{id:_,error:!1}})},[_,t,m]),i.useEffect(()=>(N({type:"register_component",data:{id:_,unregister:!1}}),()=>N({type:"register_component",data:{id:_,unregister:!0}})),[]);const{className:P,...j}=y||{};return e.jsxs("div",{className:u("nhsuk-form-group",{"nhsuk-form-group--error":!h&&t},P),...j,children:[s&&e.jsx($,{id:I,htmlFor:_,...c,children:s}),n&&e.jsx(J,{id:k,htmlFor:_,...p,children:n}),t&&typeof t=="string"&&e.jsx(be,{id:b,htmlFor:_,...g,children:t}),r(v)]})};M.displayName="FormGroup";try{M.displayName="FormGroup",M.__docgenInfo={description:"",displayName:"FormGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:"LabelProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},errorProps:{defaultValue:null,description:"",name:"errorProps",required:!1,type:{name:"ErrorMessageProps"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},hintProps:{defaultValue:null,description:"",name:"hintProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},formGroupProps:{defaultValue:null,description:"",name:"formGroupProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},disableErrorLine:{defaultValue:null,description:"",name:"disableErrorLine",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},render:{defaultValue:null,description:"",name:"render",required:!0,type:{name:"(props: FormElementRenderProps<T>) => ReactNode"}},inputType:{defaultValue:null,description:"",name:"inputType",required:!0,type:{name:"enum",value:[{value:'"input"'},{value:'"select"'},{value:'"textarea"'},{value:'"radios"'},{value:'"checkboxes"'},{value:'"dateinput"'}]}}}}}catch{}const je=(a,{type:r,data:n})=>{switch(r){case"set_conditional":return{...a,conditional:n.hasConditional?a.conditional.filter(s=>s!==n.refId).concat(n.refId):a.conditional.filter(s=>s!==n.refId)}}},K=i.createContext({name:"",dispatch:()=>{},getCheckboxId:()=>"",leaseReference:()=>"",releaseReference:()=>{}});K.displayName="CheckboxesContext";const Ve=()=>i.useContext(K),pe=(a=8)=>[...Array(a)].map(()=>Math.random().toString(36)[2]).join(""),Re=({children:a,className:r,id:n,hint:s,hintProps:l,labelProps:c,conditional:t,forceShowConditional:p,conditionalWrapperProps:g,checked:y,defaultChecked:x,onChange:h,type:o="checkbox",...d},f)=>{const{name:m,getCheckboxId:N,leaseReference:_,releaseReference:I,dispatch:k}=Ve(),[b]=i.useState(_()),[v,P]=i.useState(!!(y||x)),j=n||N(b),{className:T,...w}=c||{},{className:E,...L}=l||{},{className:S,...V}=g||{};return i.useEffect(()=>()=>I(b),[]),i.useEffect(()=>{y!==void 0&&P(y)},[y]),i.useEffect(()=>(k({type:"set_conditional",data:{refId:b,hasConditional:!!t}}),()=>k({type:"set_conditional",data:{refId:b,hasConditional:!1}})),[t]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:u("nhsuk-checkboxes__item",r),children:[e.jsx("input",{className:"nhsuk-checkboxes__input",id:j,name:m,type:o,checked:y,defaultChecked:x,ref:f,onChange:C=>{y===void 0&&P(C.target.checked),h==null||h(C)},...d}),a&&e.jsx($,{className:u("nhsuk-checkboxes__label",T),id:`${j}--label`,htmlFor:j,...w,children:a}),s&&e.jsx(J,{className:u("nhsuk-checkboxes__hint",E),...L,children:s})]}),t&&(v||p)&&e.jsx("div",{className:u("nhsuk-checkboxes__conditional",S),...V,children:t})]})},me=i.forwardRef(Re),F=({children:a,idPrefix:r,...n})=>{let s={},l=[],c=0;const[t,p]=i.useReducer(je,{conditional:[]}),g=i.useCallback((o,d)=>(d in s||(c+=1,s[d]=`${r||o}-${c}`),s[d]),[]),y=()=>{const o=pe();return l.includes(o)?y():(l.push(o),o)},x=o=>{l=l.filter(d=>d!==o)},h=()=>{s={},c=0};return e.jsx(M,{...n,inputType:"checkboxes",render:({id:o,name:d,className:f,...m})=>{h();const N={name:d,getCheckboxId:_=>g(o,_),leaseReference:y,releaseReference:x,dispatch:p};return e.jsx("div",{className:u("nhsuk-checkboxes",{"nhsuk-checkboxes--conditional":t.conditional.length>0},f),id:o,...m,children:e.jsx(K.Provider,{value:N,children:a})})}})};me.displayName="Checkboxes.Box";F.displayName="Checkboxes";F.Box=me;try{F.Box.displayName="Checkboxes.Box",F.Box.__docgenInfo={description:`Use checkboxes to let users select 1 or more options on a form.

For more information on when to use this component, got to the [NHS Digital service manual](https://service-manual.nhs.uk/design-system/components/checkboxes).`,displayName:"Checkboxes.Box",props:{idPrefix:{defaultValue:null,description:"",name:"idPrefix",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:"LabelProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},errorProps:{defaultValue:null,description:"",name:"errorProps",required:!1,type:{name:"ErrorMessageProps"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},hintProps:{defaultValue:null,description:"",name:"hintProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},formGroupProps:{defaultValue:null,description:"",name:"formGroupProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},disableErrorLine:{defaultValue:null,description:"",name:"disableErrorLine",required:!1,type:{name:"boolean"}}}}}catch{}const Q=i.createContext({id:"",name:"",handleChange:()=>{},registerInput:()=>{}});Q.displayName="DateInputContext";const Ie=()=>i.useContext(Q),qe={day:"Day",month:"Month",year:"Year"},Me=({id:a,className:r,name:n,onChange:s,labelProps:l={},label:c,part:t,error:p,value:g,defaultValue:y,...x},h)=>{const{id:o,name:d,value:f,defaultValue:m,registerInput:N,handleChange:_}=Ie(),I=i.useCallback(V=>{V.persist(),s==null||s(V),V.isPropagationStopped()||_(t,V)},[]),k=h,b=V=>{N(t,V),k==null||k(V)},v=g??(f==null?void 0:f[t]),P=y??(m==null?void 0:m[t]),j=a||`${o}-${t}`,T=n||`${d}-${t}`,w=`${j}--label`,{className:E,id:L,...S}=l;return e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx($,{className:u("nhsuk-date-input__label",E),id:w,htmlFor:j,...S,children:c||qe[t]}),e.jsx("input",{className:u("nhsuk-input nhsuk-date-input__input",{"nhsuk-input--width-2":t!=="year","nhsuk-input--width-4":t==="year","nhsuk-input--error":p||!1},r),id:j,value:v,defaultValue:P,"aria-labelledby":L||L,name:T,onChange:I,ref:b,...x})]})})},X=i.forwardRef(Me),he=i.forwardRef((a,r)=>e.jsx(X,{...a,part:"day",ref:r})),fe=i.forwardRef((a,r)=>e.jsx(X,{...a,part:"month",ref:r})),ye=i.forwardRef((a,r)=>e.jsx(X,{...a,part:"year",ref:r})),q=({children:a,value:r,defaultValue:n,autoSelectNext:s,onChange:l,...c})=>{const[,t]=i.useState({values:{day:(r==null?void 0:r.day)??"",month:(r==null?void 0:r.month)??"",year:(r==null?void 0:r.year)??""}});i.useEffect(()=>{t(o=>{if(!r||o.values===r)return o;const{day:d,month:f,year:m}=r;return{values:{day:d&&o.values.day!==d?d:o.values.day,month:f&&o.values.month!==f?f:o.values.month,year:m&&o.values.year!==m?m:o.values.year}}})},[r]);const p=i.useRef(null),g=i.useRef(null),y=(o,d)=>{var f,m;s&&(o==="day"&&d.length===2?(f=p==null?void 0:p.current)==null||f.focus():o==="month"&&d.length===2&&((m=g==null?void 0:g.current)==null||m.focus()))},x=(o,d)=>{switch(o){case"month":p.current=d;break;case"year":g.current=d;break}},h=(o,d)=>{y(o,d.target.value),d.stopPropagation(),t(f=>{const m={...f.values,[o]:d.target.value};if(l){const N={...d,target:{...d.target,value:m},currentTarget:{...d.currentTarget,value:m}};l(N)}return{values:m}})};return e.jsx(M,{...c,inputType:"dateinput",render:({id:o,name:d,className:f,error:m,...N})=>{const _={id:o,name:d,error:m,defaultValue:n,handleChange:h,registerInput:x};return e.jsx("div",{className:u("nhsuk-date-input",f),id:o,...N,children:e.jsx(Q.Provider,{value:_,children:a||e.jsxs(e.Fragment,{children:[e.jsx(q.Day,{}),e.jsx(q.Month,{}),e.jsx(q.Year,{})]})})})}})};q.displayName="DateInput";he.displayName="DateInput.Day";fe.displayName="DateInput.Month";ye.displayName="DateInput.Year";q.Day=he;q.Month=fe;q.Year=ye;try{q.displayName="DateInput",q.__docgenInfo={description:`Use date input to help users enter a memorable date, like their date of birth.

For more information on when to use this component, go to the [HTN Digital service manual](https://service-manual.nhs.uk/design-system/components/date-input).`,displayName:"DateInput",props:{autoSelectNext:{defaultValue:null,description:"",name:"autoSelectNext",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Partial<DateInputValue>"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"Partial<DateInputValue>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(((event: DateInputChangeEvent) => void) & FormEventHandler<HTMLDivElement>)"}},labelProps:{defaultValue:{value:"{}"},description:"",name:"labelProps",required:!1,type:{name:"LabelProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},errorProps:{defaultValue:null,description:"",name:"errorProps",required:!1,type:{name:"ErrorMessageProps"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},hintProps:{defaultValue:null,description:"",name:"hintProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},formGroupProps:{defaultValue:null,description:"",name:"formGroupProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},disableErrorLine:{defaultValue:null,description:"",name:"disableErrorLine",required:!1,type:{name:"boolean"}}}}}catch{}const O=(a,r)=>e.jsx(M,{...a,inputType:"input",render:({id:n,name:s,className:l,error:c,width:t,type:p="text",...g})=>e.jsx("input",{id:n,name:s,className:u("nhsuk-input",{[`nhsuk-input--width-${t}`]:t,"nhsuk-input--error":c},l),type:p,ref:r,...g})}),Le=i.forwardRef(O);Le.displayName="Input";try{O.displayName="Input",O.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"10"'},{value:'"20"'},{value:'"30"'}]}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:"LabelProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},errorProps:{defaultValue:null,description:"",name:"errorProps",required:!1,type:{name:"ErrorMessageProps"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},hintProps:{defaultValue:null,description:"",name:"hintProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},formGroupProps:{defaultValue:null,description:"",name:"formGroupProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},disableErrorLine:{defaultValue:null,description:"",name:"disableErrorLine",required:!1,type:{name:"boolean"}}}}}catch{}const Ce=(a,{type:r,data:n})=>{switch(r){case"set_conditional":return{...a,conditional:n.hasConditional?a.conditional.filter(s=>s!==n.refId).concat(n.refId):a.conditional.concat(n.refId)};case"set_selected":return{...a,selected:n.refId}}},Z=i.createContext({name:"",selectedRadio:"",dispatch:()=>{},getRadioId:()=>"",leaseReference:()=>"",releaseReference:()=>{}});Z.displayName="RadiosContext";const He=()=>i.useContext(Z),_e=({children:a,className:r,...n})=>e.jsx("div",{className:u("nhsuk-radios__divider",r),...n,children:a}),Te=({children:a,className:r,id:n,hint:s,hintProps:l,labelProps:c,conditional:t,forceShowConditional:p,conditionalWrapperProps:g,checked:y,defaultChecked:x,onChange:h,type:o="radio",...d},f)=>{const{name:m,getRadioId:N,leaseReference:_,releaseReference:I,selectedRadio:k,dispatch:b}=He(),[v]=i.useState(_()),P=n||N(v),j=k===v&&y!==!1,{className:T,...w}=c||{},{className:E,...L}=l||{},{className:S,...V}=g||{},C=G=>{b({type:"set_selected",data:{refId:G}})};return i.useEffect(()=>(x&&C(v),()=>I(v)),[]),i.useEffect(()=>{y&&C(v)},[y]),i.useEffect(()=>(b({type:"set_conditional",data:{refId:v,hasConditional:!!t}}),()=>b({type:"set_conditional",data:{refId:v,hasConditional:!1}})),[t]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:u("nhsuk-radios__item",r),children:[e.jsx("input",{className:"nhsuk-radios__input",id:P,name:m,type:o,checked:y,defaultChecked:x,ref:f,onChange:G=>{C(v),h==null||h(G)},...d}),a&&e.jsx($,{className:u("nhsuk-radios__label",T),id:`${P}--label`,htmlFor:P,...w,children:a}),s&&e.jsx(J,{className:u("nhsuk-radios__hint",E),id:`${P}--hint`,...L,children:s})]}),t&&(j||p)&&e.jsx("div",{className:u("nhsuk-radios__conditional",S),id:`${P}--conditional`,...V,children:t})]})},ge=i.forwardRef(Te),D=({children:a,...r})=>{let n={},s=[],l=0;const[c,t]=i.useReducer(Ce,{selected:"",conditional:[]}),p=i.useCallback((h,o)=>(o in n||(l+=1,n[o]=`${r.idPrefix||h}-${l}`),n[o]),[]),g=()=>{const h=pe();return s.includes(h)?g():(s.push(h),h)},y=h=>{s=s.filter(o=>o!==h)},x=()=>{n={},l=0};return e.jsx(M,{...r,inputType:"radios",render:({id:h,name:o,inline:d,className:f,...m})=>{x();const N={name:o,getRadioId:_=>p(h,_),selectedRadio:c.selected,leaseReference:g,releaseReference:y,dispatch:t};return e.jsx("div",{className:u("nhsuk-radios",{"nhsuk-radios--inline":d},f),id:h,...m,children:e.jsx(Z.Provider,{value:N,children:a})})}})};_e.displayName="Radios.Divider";ge.displayName="Radios.Radio";D.displayName="Radios";D.Divider=_e;D.Radio=ge;try{D.Divider.displayName="Radios.Divider",D.Divider.__docgenInfo={description:`Use radios when you want users to select only 1 option from a list.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/radios).`,displayName:"Radios.Divider",props:{inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},idPrefix:{defaultValue:null,description:"",name:"idPrefix",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:"LabelProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},errorProps:{defaultValue:null,description:"",name:"errorProps",required:!1,type:{name:"ErrorMessageProps"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},hintProps:{defaultValue:null,description:"",name:"hintProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},formGroupProps:{defaultValue:null,description:"",name:"formGroupProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},disableErrorLine:{defaultValue:null,description:"",name:"disableErrorLine",required:!1,type:{name:"boolean"}}}}}catch{}const xe=({children:a,...r})=>e.jsx("option",{...r,children:a}),U=({children:a,...r},n)=>e.jsx(M,{...r,inputType:"select",render:({id:s,name:l,className:c,error:t,...p})=>e.jsx("select",{id:s,name:l,className:u("nhsuk-select",{"nhsuk-select--error":t},c),ref:n,...p,children:a})}),Ne=i.forwardRef(U);Ne.displayName="Select";xe.displayName="Select.Option";Ne.Option=xe;try{U.displayName="Select",U.__docgenInfo={description:"",displayName:"Select",props:{labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:"LabelProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},errorProps:{defaultValue:null,description:"",name:"errorProps",required:!1,type:{name:"ErrorMessageProps"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},hintProps:{defaultValue:null,description:"",name:"hintProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},formGroupProps:{defaultValue:null,description:"",name:"formGroupProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},disableErrorLine:{defaultValue:null,description:"",name:"disableErrorLine",required:!1,type:{name:"boolean"}}}}}catch{}const Y=(a,r)=>e.jsx(M,{...a,inputType:"textarea",render:({id:n,name:s,error:l,className:c,rows:t,...p})=>e.jsx("textarea",{id:n,name:s,className:u("nhsuk-textarea",{"nhsuk-textarea--error":l},c),ref:r,rows:t,...p})}),we=i.forwardRef(Y);we.displayName="Textarea";try{Y.displayName="Textarea",Y.__docgenInfo={description:`Use textarea to let users enter more than 1 line of text.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/textarea).`,displayName:"Textarea",props:{labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:"LabelProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},errorProps:{defaultValue:null,description:"",name:"errorProps",required:!1,type:{name:"ErrorMessageProps"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},hintProps:{defaultValue:null,description:"",name:"hintProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},formGroupProps:{defaultValue:null,description:"",name:"formGroupProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},disableErrorLine:{defaultValue:null,description:"",name:"disableErrorLine",required:!1,type:{name:"boolean"}}}}}catch{}const A=({children:a,className:r,width:n="full",...s})=>e.jsx("div",{className:u(`nhsuk-grid-column-${n}`,r),...s,children:a});A.displayName="Column";try{A.displayName="Column",A.__docgenInfo={description:"",displayName:"Column",props:{width:{defaultValue:{value:"full"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"one-half"'},{value:'"one-third"'},{value:'"two-thirds"'},{value:'"one-quarter"'},{value:'"three-quarters"'}]}}}}}catch{}const z=({children:a,className:r,size:n,role:s="main",...l})=>e.jsx("main",{className:u("nhsuk-main-wrapper",{[`nhsuk-main-wrapper--${n}`]:n},r),role:s,...l,children:a});z.displayName="Main";try{z.displayName="Main",z.__docgenInfo={description:"",displayName:"Main",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"l"'}]}}}}}catch{}const W=({children:a,className:r,...n})=>e.jsx("div",{className:u("nhsuk-grid-row",r),...n,children:a});W.displayName="Row";try{W.displayName="Row",W.__docgenInfo={description:"",displayName:"Row",props:{}}}catch{}export{A as C,q as D,R as H,Le as I,z as M,W as R,Ne as S,we as T,D as a,F as b};
//# sourceMappingURL=Row-8f6f5b67.js.map

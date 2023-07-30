import{j as o}from"./jsx-runtime-ffb262ed.js";import{c}from"./clsx-1229b3e0.js";import{r as d}from"./index-76fb7be0.js";const f=(e,{type:s,data:r})=>{switch(s){case"set_error":return{...e,errored:r.error?e.errored.filter(t=>t!==r.id).concat(r.id):e.errored.concat(r.id)};case"register_component":return{...e,registered:r.unregister?e.registered.filter(t=>t!==r.id):e.registered.concat(r.id)}}},a=d.createContext({isFieldset:!1,dispatch:()=>{}});a.displayName="FieldsetContext";const y=()=>d.useContext(a),m=({className:e,children:s,isPageHeading:r,asElement:t="h1",size:n,...l})=>o.jsx("legend",{className:c("nhsuk-legend",{"nhsuk-fieldset__legend--xl":r&&!n},{[`nhsuk-fieldset__legend--${n}`]:n},e),...l,children:r?o.jsx(t,{className:"nhsuk-fieldset__heading",children:s}):s}),x=({className:e,children:s,...r})=>o.jsx("fieldset",{className:c("nhsuk-fieldset",e),...r,children:s}),u=d.memo(x),i=({className:e,children:s,disableErrorLine:r,...t})=>{const[n,l]=d.useReducer(f,{registered:[],errored:[]}),p={isFieldset:!0,dispatch:l},h=n.registered.length>0,g=n.errored.length>0;return o.jsx(a.Provider,{value:p,children:h?o.jsx("div",{className:c("nhsuk-form-group",{"nhsuk-form-group--error":r?!1:g}),children:o.jsx(u,{className:e,...t,children:s})}):o.jsx(u,{className:e,...t,children:s})})};i.displayName="Fieldset";m.displayName="Fieldset.Legend";i.Legend=m;try{i.displayName="Fieldset",i.__docgenInfo={description:`Use a fieldset to group related form inputs.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/fieldset).`,displayName:"Fieldset",props:{disableErrorLine:{defaultValue:null,description:"",name:"disableErrorLine",required:!1,type:{name:"boolean"}}}}}catch{}export{i as F,y as u};
//# sourceMappingURL=Fieldset-3b2b35c4.js.map

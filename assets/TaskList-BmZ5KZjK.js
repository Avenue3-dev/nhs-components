import{r as T,R as a}from"./index-DCEVbkbO.js";import{c as o}from"./clsx-B-dksMZM.js";import{B as E}from"./Base-DkqVgamr.js";import{f}from"./factory-B-vprWl1.js";import{u as w}from"./use-id-with-prefix-JqmxMMgI.js";import{p as x}from"./polymorphic-factory-Bh8XY5CE.js";import{T as q}from"./Tag-5bbu7dN8.js";const k=T.createContext({}),h=()=>T.useContext(k),W=k.Provider,r=f(({className:e,...t},s)=>a.createElement("ul",{ref:s,className:o("nhsuk-task-list",e),...t})),m=f(({variant:e,className:t,...s},i)=>{const n=w("task-list-item");return a.createElement(W,{value:{variant:e,rowId:n}},a.createElement("li",{ref:i,className:o("nhsuk-task-list__item",{[`nhsuk-task-list__item--${e}`]:e},t),...s}))}),l=x(({children:e,hint:t,as:s="a",containerProps:i={},hintProps:n={},...y},I)=>{const{variant:c,rowId:d}=h(),{className:N,...v}=i,{className:_,...P}=n,u=`${d}-hint`,C=`${d}-status`,L=c==="with-link"?s:"div",R=c==="with-link"?{ref:I,...y,"aria-described-by":o(C,{[u]:t})}:{};return a.createElement("div",{className:o("nhsuk-task-list__item-name-and-hint",N),...v},a.createElement(E,{as:L,...R},e),t&&a.createElement("div",{id:u,className:o("nhsuk-task-list__hint",_),...P},t))}),p=({variant:e="incomplete",children:t,...s})=>{const{rowId:i}=h(),n=`${i}-status`;return a.createElement("div",{id:n,className:o("nhsuk-task-list__status",`nhsuk-task-list__status--${e}`),...s},e==="incomplete"?a.createElement(q,{id:n,variant:"blue",...s},t):t)};r.Item=m;m.NameAndHint=l;m.Status=p;r.displayName="TaskList";m.displayName="TaskList.Item";l.displayName="TaskList.Item.NameAndHint";p.displayName="TaskList.Item.Status";r.__docgenInfo={description:"",methods:[],displayName:"TaskList"};m.__docgenInfo={description:"",methods:[],displayName:"TaskList.Item",props:{variant:{required:!1,tsType:{name:"literal",value:"'with-link'"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"TaskList.Item.NameAndHint",props:{hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},containerProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"never"}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>"},description:"",defaultValue:{value:"{}",computed:!1}},hintProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"never"}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>"},description:"",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"TaskList.Item.Status",props:{variant:{required:!1,tsType:{name:"union",raw:"'completed' | 'cannot-start-yet' | 'incomplete'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'cannot-start-yet'"},{name:"literal",value:"'incomplete'"}]},description:"",defaultValue:{value:"'incomplete'",computed:!1}}}};export{r as T};

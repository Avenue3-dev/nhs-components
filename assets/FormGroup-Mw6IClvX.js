import{H}from"./Hint-Cy41Y5xV.js";import{L as V}from"./Label-BVxFGFqs.js";import{E as D}from"./ErrorMessage-C5IFgkMq.js";import{r as i,R as n}from"./index-uCp2LrAq.js";import{u as I}from"./use-id-with-prefix-ctfEntwL.js";import{B as h,c as J}from"./Base-CQ_ipzy_.js";import{c as l}from"./clsx-B-dksMZM.js";import{f as K}from"./factory-Dl037jXY.js";const Q=(r,{type:t,data:s})=>{switch(t){case"set_error":return{...r,errored:s.error?r.errored.concat(s.id):r.errored.filter(o=>o!==s.id)};case"register_component":return{...r,registered:s.unregister?r.registered.filter(o=>o!==s.id):r.registered.concat(s.id)}}},b=i.createContext({isFieldset:!1,dispatch:()=>{}});b.displayName="FieldsetContext";const U=()=>i.useContext(b),X=b.Provider,Y=K(({className:r,...t},s)=>n.createElement("fieldset",{className:l("nhsuk-fieldset",r),...t,ref:s})),Z=i.memo(Y),y=({disableErrorLine:r,...t})=>{const[s,o]=i.useReducer(Q,{registered:[],errored:[]}),p=i.useMemo(()=>({isFieldset:!0,dispatch:o}),[o]),d=s.registered.length>0,e=s.errored.length>0,m=d?{as:"div",className:l(["nhsuk-form-group",{"nhsuk-form-group--error":!r&&e}])}:{as:n.Fragment};return n.createElement(X,{value:p},n.createElement(h,{...m},n.createElement(Z,{...t})))},F=({variant:r,size:t,as:s,className:o,children:p,...d})=>{const e=r==="page-heading"||t==="xl"?s||"h1":n.Fragment,m={as:e,...e!==n.Fragment?{className:r==="page-heading"?"nhsuk-fieldset__heading":void 0}:{}};return n.createElement("legend",{className:l("nhsuk-legend",{"nhsuk-fieldset__legend--xl":r==="page-heading"&&!t,[`nhsuk-fieldset__legend--${t}`]:t},o),...d},n.createElement(h,{...m},p))};y.displayName="Fieldset";F.displayName="Fieldset.Legend";y.Legend=F;y.__docgenInfo={description:"",methods:[{name:"Legend",docblock:null,modifiers:["static"],params:[{name:`{
  variant,
  size,
  as: component,
  className,
  children,
  ...props
}: FieldsetLegendProps & AsElementProps`,optional:!1,type:{name:"intersection",raw:"FieldsetLegendProps & AsElementProps",elements:[{name:"intersection",raw:`(
  | {
      size?: undefined;
      variant?: undefined;
    }
  | {
      size: Size;
      variant?: undefined;
    }
  | {
      variant: 'page-heading';
      size?: Size;
    }
) &
  ElementProps<'legend', 'size' | 'as'> &
  BaseProps`,elements:[{name:"unknown"},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'legend'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"union",raw:"'style' | TPropsToOmit",elements:[{name:"literal",value:"'style'"},{name:"union",raw:"'size' | 'as'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'as'"}]}]}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, 'style' | TPropsToOmit>"},{name:"intersection",raw:`{
  className?: string;
} & PropsWithChildren`,elements:[{name:"signature",type:"object",raw:`{
  className?: string;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}},{name:"PropsWithChildren"}]}]},{name:"signature",type:"object",raw:`{
  /**
   * The component to render as.
   */
  as?: TComponent;
}`,signature:{properties:[{key:"as",value:{name:"TComponent",required:!1},description:"The component to render as."}]}}]}}],returns:null}],displayName:"Fieldset",props:{disableErrorLine:{required:!1,tsType:{name:"boolean"},description:""}}};F.__docgenInfo={description:"",methods:[],displayName:"Fieldset.Legend",props:{className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as."}}};const N=i.forwardRef((r,t)=>{const{render:s,formGroupProps:o={},fieldsetProps:p={},disableErrorLine:d,error:e,label:m,hint:u,labelProps:L={},hintProps:_={},errorProps:B={},inputType:g,id:R,withFieldset:G,...W}=r,[j]=i.useState(I(g)),{isFieldset:k,dispatch:f}=U(),P=Array.isArray(u)?u:[u],z=typeof e=="string"?[e]:typeof e=="object"?Object.values(e):[],a=R||j,v=`${a}--label`,T=P.map(()=>`${I(a)}--hint`),q=`${a}--error-message`;i.useEffect(()=>{if(k)return f({type:"set_error",data:{id:a,error:!!e}}),()=>f({type:"set_error",data:{id:a,error:!1}})},[a,e,k]),i.useEffect(()=>(f({type:"register_component",data:{id:a,unregister:!1}}),()=>f({type:"register_component",data:{id:a,unregister:!0}})),[]);const{className:w,...C}=o,x={"aria-labelledby":v,"aria-describedby":l({hintId:u,errorId:e})||void 0},c=g==="checkboxes"||g==="radios"||g==="dateinput"||G,A={as:void 0,id:a,withError:!!e,ref:t,...W,...typeof e=="object"&&g==="dateinput"?{errorMap:e}:{},...c?{}:x},M={as:c?"div":n.Fragment,...c?{className:l("nhsuk-form-group",{"nhsuk-form-group--error":!d&&e},w),...C}:{}},O={as:c?y:"div",...c?{...p,...x}:{className:l("nhsuk-form-group",{"nhsuk-form-group--error":!d&&e},w),...C}},$={as:c?F:V,id:v,htmlFor:a,...L};return n.createElement(h,{...M},n.createElement(h,{...O},m&&n.createElement(h,{...$,children:m}),u&&P.map((S,E)=>n.createElement(H,{key:T[E],id:T[E],..._,className:l(_.className,{"nhsuk-u-margin-bottom-2":E<P.length-1}),children:S})),e&&n.createElement(D,{id:q,...B,children:z.join(" ")}),s(A)))});N.displayName="FormGroup";const le=J(N);N.__docgenInfo={description:"",methods:[],displayName:"FormGroup"};export{le as F,y as a};

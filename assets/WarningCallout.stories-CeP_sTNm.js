import{R as e}from"./index-uCp2LrAq.js";import{V as E}from"./VisuallyHidden-SShDg0Sg.js";import{B as k}from"./Base-CQ_ipzy_.js";import{p as I}from"./polymorphic-factory-C1jPlyAy.js";import{c as v}from"./clsx-B-dksMZM.js";import{f as x}from"./factory-Dl037jXY.js";import"./_commonjsHelpers-BosuxZz1.js";const a=x(({className:r,children:l,...i},t)=>e.createElement("div",{className:v("nhsuk-warning-callout",r),...i,ref:t},l)),c=I(({className:r,children:l,as:i="h3",visuallyHiddenText:t,...L},w)=>e.createElement(k,{as:i,className:v("nhsuk-warning-callout__label",r),...L,ref:w},e.createElement("span",{role:"text"},t&&e.createElement(E,null,t),l)));a.displayName="WarningCallout";c.displayName="WarningCallout.Label";a.Label=c;a.__docgenInfo={description:"",methods:[],displayName:"WarningCallout"};c.__docgenInfo={description:"",methods:[],displayName:"WarningCallout.Label",props:{as:{defaultValue:{value:"'h3'",computed:!1},required:!1}}};const D={title:"Components/Content Presentation/Warning Callout",component:a,parameters:{docs:{description:{component:`Use a warning callout to help users identify and understand warning content on the page, even if they do not read the whole page.

https://service-manual.nhs.uk/design-system/components/warning-callout`}}}},o={render:r=>e.createElement(a,{...r},e.createElement(a.Label,{visuallyHiddenText:"Important: "},"School, nursery or work"),e.createElement("p",null,"Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared."))},n={render:r=>e.createElement(a,{...r},e.createElement(a.Label,null,"Important"),e.createElement("p",null,"For safety, tell your doctor or pharmacist if you're taking any other medicines, including herbal medicines, vitamins or supplements."))},s={render:r=>e.createElement(a,{...r},e.createElement(a.Label,{as:"h3"},"Important"),e.createElement("p",null,"For safety, tell your doctor or pharmacist if you're taking any other medicines, including herbal medicines, vitamins or supplements."))};var m,u,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <WarningCallout {...args}>
      <WarningCallout.Label visuallyHiddenText="Important: ">
        School, nursery or work
      </WarningCallout.Label>
      <p>
        Stay away from school, nursery or work until all the spots have crusted
        over. This is usually 5 days after the spots first appeared.
      </p>
    </WarningCallout>
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,g,h,y,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <WarningCallout {...args}>
      <WarningCallout.Label>Important</WarningCallout.Label>
      <p>
        For safety, tell your doctor or pharmacist if you're taking any other
        medicines, including herbal medicines, vitamins or supplements.
      </p>
    </WarningCallout>
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:'If the heading is simply the word "Important" or it includes the word "important", you do not need to use visually hidden text.',...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var W,C,b;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <WarningCallout {...args}>
      <WarningCallout.Label as="h3">Important</WarningCallout.Label>
      <p>
        For safety, tell your doctor or pharmacist if you're taking any other
        medicines, including herbal medicines, vitamins or supplements.
      </p>
    </WarningCallout>
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const B=["Default","WithNoVisuallyHiddenText","WithDifferentHeadingLevels"];export{o as Default,s as WithDifferentHeadingLevels,n as WithNoVisuallyHiddenText,B as __namedExportsOrder,D as default};

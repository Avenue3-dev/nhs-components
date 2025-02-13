import{R as n}from"./index-DCEVbkbO.js";import{c as s}from"./clsx-B-dksMZM.js";import{f as u}from"./factory-B-vprWl1.js";import{H as y}from"./Heading-CC_RIS_G.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Base-DkqVgamr.js";import"./polymorphic-factory-Bh8XY5CE.js";const e=u(({className:a,children:t,...c},d)=>n.createElement("div",{className:s("nhsuk-panel",a),...c,ref:d},t)),o=({className:a,...t})=>n.createElement(y,{className:s("nhsuk-panel__title",a),...t}),r=({className:a,...t})=>n.createElement("div",{className:s("nhsuk-panel__body",a),...t});e.displayName="Panel";o.displayName="Panel.Title";r.displayName="Panel.Body";e.Title=o;e.Body=r;e.__docgenInfo={description:"",methods:[],displayName:"Panel"};o.__docgenInfo={description:"",methods:[],displayName:"Panel.Title",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:""},variant:{required:!1,tsType:{name:"literal",value:"'caption-bottom'"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as."}}};r.__docgenInfo={description:"",methods:[],displayName:"Panel.Body"};const N={title:"Components/Content Presentation/Panel",component:e,parameters:{docs:{description:{component:`Use a panel to highlight that users have done something successfully.

https://service-manual.nhs.uk/design-system/components/panel`}}}},l={render:a=>n.createElement(e,{...a},n.createElement(e.Title,null,"Application complete"),n.createElement(e.Body,null,"Confirmation has been sent to you by email"))};var i,m,p;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Panel {...args}>
      <Panel.Title>Application complete</Panel.Title>
      <Panel.Body>
        Confirmation has been sent to you by email
      </Panel.Body>
    </Panel>
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const x=["Default"];export{l as Default,x as __namedExportsOrder,N as default};

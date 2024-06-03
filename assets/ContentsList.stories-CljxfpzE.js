import{R as e}from"./index-uCp2LrAq.js";import{C as t}from"./ContentsList-B2iv0A8U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Base-CQ_ipzy_.js";import"./VisuallyHidden-io1tb15n.js";import"./polymorphic-factory-C1jPlyAy.js";import"./clsx-B-dksMZM.js";import"./factory-Dl037jXY.js";const C={title:"Components/Navigation/Contents List",component:t,subcomponents:{"ContentsList.Item":t.Item},argTypes:{visuallyHiddenText:{control:{type:"text"},table:{type:{summary:"string"}}},role:{control:{type:"select"},options:["navigation"],table:{type:{summary:'"navigation"'}}}},parameters:{docs:{description:{component:`Use contents lists to allow users to navigate between related pages, for example about a single condition.

https://service-manual.nhs.uk/design-system/components/contents-list`}}}},n={args:{visuallyHiddenText:"Contents"},render:a=>e.createElement(t,{...a,"aria-label":"Pages in this guide"},e.createElement(t.Item,{href:"#",active:!0},"What is AMD?"),e.createElement(t.Item,{href:"#"},"Symptoms"),e.createElement(t.Item,{href:"#"},"Getting diagnosed"),e.createElement(t.Item,{href:"#"},"Treatment"),e.createElement(t.Item,{href:"#"},"Living with AMD"))};var s,o,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    visuallyHiddenText: 'Contents'
  },
  render: args => <ContentsList {...args} aria-label="Pages in this guide">
      <ContentsList.Item href="#" active>
        What is AMD?
      </ContentsList.Item>
      <ContentsList.Item href="#">Symptoms</ContentsList.Item>
      <ContentsList.Item href="#">Getting diagnosed</ContentsList.Item>
      <ContentsList.Item href="#">Treatment</ContentsList.Item>
      <ContentsList.Item href="#">Living with AMD</ContentsList.Item>
    </ContentsList>
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const h=["Default"];export{n as Default,h as __namedExportsOrder,C as default};

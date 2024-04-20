import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{S as e}from"./index-CK4LW6m4.js";import"./index-BBkUAzwr.js";import"./FormGroup-10nvBGAl.js";import"./clsx-CH7BE6MN.js";import"./use-id-with-prefix-Dzx8tZmb.js";import"./Label-BNiKYQQA.js";import"./ErrorMessage-qXgaBtKk.js";import"./Hint-BZ4h_WhZ.js";import"./index-BVDTxkrF.js";const C={component:e,title:"Components/Form Elements/Select",tags:["autodocs"]},l={args:{label:"Select a country or territory",hint:"If you are from the Guernsey or Jersey, please select Channel Islands",error:"",disabled:!1},render:r=>n.jsxs(e,{...r,children:[n.jsx(e.Option,{value:"england",children:"England"}),n.jsx(e.Option,{value:"northern-ireland",children:"Northern Ireland"}),n.jsx(e.Option,{value:"scotland",children:"Scotland"}),n.jsx(e.Option,{value:"wales",children:"Wales"}),n.jsx(e.Option,{value:"channel-islands",children:"Channel Islands"}),n.jsx(e.Option,{value:"isle-of-man",children:"Isle of Man"})]})},t={args:{label:"Select a country or territory",hint:"If you are from the Guernsey or Jersey, please select Channel Islands",error:""},render:r=>n.jsxs(e,{...r,children:[n.jsx(e.Option,{value:"england",children:"England"}),n.jsx(e.Option,{value:"northern-ireland",children:"Northern Ireland"}),n.jsx(e.Option,{value:"scotland",children:"Scotland"}),n.jsx(e.Option,{value:"wales",children:"Wales"}),n.jsx(e.Option,{value:"channel-islands",children:"Channel Islands"}),n.jsx(e.Option,{value:"isle-of-man",disabled:!0,children:"Isle of Man"})]})};var a,o,s,i,c;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Select a country or territory',
    hint: 'If you are from the Guernsey or Jersey, please select Channel Islands',
    error: '',
    disabled: false
  },
  render: args => <Select {...args}>
      <Select.Option value="england">England</Select.Option>
      <Select.Option value="northern-ireland">Northern Ireland</Select.Option>
      <Select.Option value="scotland">Scotland</Select.Option>
      <Select.Option value="wales">Wales</Select.Option>
      <Select.Option value="channel-islands">Channel Islands</Select.Option>
      <Select.Option value="isle-of-man">Isle of Man</Select.Option>
    </Select>
}`,...(s=(o=l.parameters)==null?void 0:o.docs)==null?void 0:s.source},description:{story:"The basic usage of the Select component.",...(c=(i=l.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};var d,p,h,u,S;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Select a country or territory',
    hint: 'If you are from the Guernsey or Jersey, please select Channel Islands',
    error: ''
  },
  render: args => <Select {...args}>
      <Select.Option value="england">England</Select.Option>
      <Select.Option value="northern-ireland">Northern Ireland</Select.Option>
      <Select.Option value="scotland">Scotland</Select.Option>
      <Select.Option value="wales">Wales</Select.Option>
      <Select.Option value="channel-islands">Channel Islands</Select.Option>
      <Select.Option value="isle-of-man" disabled>
        Isle of Man
      </Select.Option>
    </Select>
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:"The Select component with a disabled option.",...(S=(u=t.parameters)==null?void 0:u.docs)==null?void 0:S.description}}};const E=["Basic","WithDisabledOption"];export{l as Basic,t as WithDisabledOption,E as __namedExportsOrder,C as default};

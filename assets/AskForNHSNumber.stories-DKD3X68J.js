import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import"./index-DxCgvSsG.js";import"./index-bKu4c-LD.js";import"./index-COIVcMio.js";import"./index-BXCpFO5W.js";import"./index-BKyyBhzj.js";import"./index-Byd0UdIz.js";import"./index-ajY7Wto0.js";import"./index-7guOvb1T.js";import"./index-CU5QPJNg.js";import"./index-BG-Ve-Gz.js";import"./index-TMwtTJCd.js";import"./index-CJQcWJaq.js";import"./index-C5AoZCoa.js";import"./index-CQ8-xhOi.js";import"./index-DObgesoT.js";import"./index-BBcqs_kV.js";import"./index-wVXJtWAN.js";import{B as w}from"./Button-ABlqZV6L.js";import"./index-D2jAb2ZP.js";import"./index-C5CUN5uy.js";import"./index-GwSuHVHi.js";import"./index-C0MXixQ7.js";import"./index-BVDTxkrF.js";import"./index-YMjqK2a4.js";import{I as g}from"./index-CZL8Ryw7.js";import"./index-B9y4vrjZ.js";import"./index-CK4LW6m4.js";import"./index-WMqyvWoQ.js";import{c as p}from"./clsx-CH7BE6MN.js";import"./FormGroup-10nvBGAl.js";import"./index-CNJOavoI.js";import"./index-BNAbGPPW.js";import"./index-BJZX35FI.js";import"./index-DCz-pOyH.js";import"./index-BWzVQ7MN.js";import{C as f}from"./Container-C71ETtQt.js";import"./index-BBkUAzwr.js";import"./random-Cu-dbJeB.js";import"./Label-BNiKYQQA.js";import"./Hint-BZ4h_WhZ.js";import"./ErrorMessage-qXgaBtKk.js";import"./use-id-with-prefix-Dzx8tZmb.js";const n=({children:e,className:t,width:o="full",...m})=>r.jsx("div",{className:p(`nhsuk-grid-column-${o}`,t),...m,children:e});n.displayName="Column";n.__docgenInfo={description:"",methods:[],displayName:"Column",props:{width:{defaultValue:{value:"'full'",computed:!1},required:!1}}};n.__docgenInfo={description:"",methods:[],displayName:"Column",props:{width:{defaultValue:{value:"'full'",computed:!1},required:!1}}};const s=({children:e,className:t,size:o,role:m="main",...N})=>r.jsx("main",{className:p("nhsuk-main-wrapper",{[`nhsuk-main-wrapper--${o}`]:o},t),role:m,...N,children:e});s.displayName="Main";s.__docgenInfo={description:"",methods:[],displayName:"Main",props:{role:{defaultValue:{value:"'main'",computed:!1},required:!1}}};s.__docgenInfo={description:"",methods:[],displayName:"Main",props:{role:{defaultValue:{value:"'main'",computed:!1},required:!1}}};const a=({children:e,className:t,...o})=>r.jsx("div",{className:p("nhsuk-grid-row",t),...o,children:e});a.displayName="Row";a.__docgenInfo={description:"",methods:[],displayName:"Row"};a.__docgenInfo={description:"",methods:[],displayName:"Row"};const mr={component:f,title:"Patterns/Ask for their NHS number",tags:["autodocs"]},i={render:e=>r.jsx(f,{...e,children:r.jsx(s,{children:r.jsx(a,{children:r.jsxs(n,{width:"two-thirds",children:[r.jsx(g,{label:"What is your NHS number?",labelProps:{isPageHeading:!0,size:"l"},hint:r.jsxs(r.Fragment,{children:["Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example,"," ",r.jsx("span",{className:"nhsuk-u-nowrap",children:"485 777 3456"}),"."]}),width:"10"}),r.jsx(w,{children:"Continue"})]})})})})};var d,l,u,c,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: object) => <Container {...args}>
      <Main>
        <Row>
          <Column width="two-thirds">
            <Input label="What is your NHS number?" labelProps={{
            isPageHeading: true,
            size: 'l'
          }} hint={<>
                  Your NHS number is a 10 digit number that you find on any
                  letter the NHS has sent you. For example,{' '}
                  <span className="nhsuk-u-nowrap">485 777 3456</span>.
                </>} width="10" />
            <Button>Continue</Button>
          </Column>
        </Row>
      </Main>
    </Container>
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"Use this pattern to ask people for their NHS number and help them find it.",...(h=(c=i.parameters)==null?void 0:c.docs)==null?void 0:h.description}}};const pr=["AskForTheirNHSNumber"];export{i as AskForTheirNHSNumber,pr as __namedExportsOrder,mr as default};

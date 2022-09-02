"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[716],{1598:function(n,e,r){r.d(e,{II:function(){return p},__:function(){return l},jj:function(){return m},ss:function(){return x},tP:function(){return u}});var t,i,o,a,s,c=r(168),d=r(7691),u=d.ZP.form(t||(t=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 400px;\n  border-radius: 5px;\n  padding: 10px;\n  background-color: rgba(244, 244, 246, 0.5);\n  box-shadow: 2px 2px 20px 10px rgba(0, 0, 0, 0.4);\n"]))),l=d.ZP.label(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n  color: white;\n  font-weight: 700;\n  font-size: 20px;\n"]))),p=d.ZP.input(o||(o=(0,c.Z)(["\n  width: 220px;\n  height: 25px;\n  margin-top: 10px;\n  border: 1px solid #030e1845;\n  border-radius: 5px;\n  box-shadow: 0 0 2px 1px;\n"]))),m=d.ZP.p(a||(a=(0,c.Z)(["\n  margin: 0;\n  color: red;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 10px;\n"]))),x=d.ZP.button(s||(s=(0,c.Z)(["\n  margin-top: 10px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1),\n    background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: #212529;\n    color: #fff;\n  }\n"])))},6716:function(n,e,r){r.r(e),r.d(e,{default:function(){return cn}});var t,i,o,a,s,c,d,u,l,p,m,x,b,f,h=r(1413),g=r(8748),v=r(168),Z=r(7691),j=Z.ZP.div(t||(t=(0,v.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 99;\n"]))),w=r(184),y=function(){return(0,w.jsx)(j,{children:(0,w.jsx)(g.gy,{ariaLabel:"loading-indicator",height:"80",width:"80",radius:"10",color:"green"})})},k=r(1598),P=function(n){var e,r,t=n.btnText,i=n.onSubmit,o=n.contact,a=n.isLoading,s=n.register,c=n.handleSubmit,d=n.errors;return(0,w.jsxs)(k.tP,{onSubmit:c(i),autoComplete:"off",children:[(0,w.jsxs)(k.__,{htmlFor:"name",children:["Name:",(0,w.jsx)(k.II,(0,h.Z)((0,h.Z)({id:"name",type:"text",defaultValue:o?o.name:""},s("name",{required:"This is required field",minLength:{value:3,message:"Min length is 3 symbols"},pattern:{value:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}})),{},{placeholder:"Surname Name"}))]}),(null===d||void 0===d?void 0:d.name)&&(0,w.jsx)(k.jj,{children:(null===d||void 0===d||null===(e=d.name)||void 0===e?void 0:e.message)||"Error!"}),(0,w.jsxs)(k.__,{htmlFor:"number",children:["Number:",(0,w.jsx)(k.II,(0,h.Z)((0,h.Z)({id:"number",type:"tel",defaultValue:o?o.number:""},s("number",{required:"This is required field",minLength:{value:5,message:"Min length is 5 symbols"},maxLength:{value:20,message:"Max length is 20 symbols"},pattern:{value:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}})),{},{placeholder:"+38(000)000-00-00"}))]}),(null===d||void 0===d?void 0:d.number)&&(0,w.jsx)(k.jj,{children:(null===d||void 0===d||null===(r=d.number)||void 0===r?void 0:r.message)||"Error!"}),(0,w.jsxs)(k.ss,{disabled:a,variant:"contained",type:"submit",children:[a&&(0,w.jsx)(y,{size:20}),t]})]})},S=Z.ZP.ul(i||(i=(0,v.Z)(["\n  padding: 0 15px;\n  width: 400px;\n"]))),C=r(885),L=r(3978),z=r(7247),E=r(1286),I=r(9224),_=Z.ZP.li(o||(o=(0,v.Z)(["\n  list-style: none;\n  background-color: rgba(0, 21, 255, 0.05);\n  border-radius: 4px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n  border: 2px solid #fff;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  &:hover {\n    background-color: #f0efed;\n    border: 2px solid #acfc00;\n  }\n"]))),T=(0,Z.ZP)(L.Z)(a||(a=(0,v.Z)(["\n  margin-right: 10px;\n"]))),A=(0,Z.ZP)(z.Z)(s||(s=(0,v.Z)(["\n  margin-right: -10px;\n  margin-left: 4px;\n"]))),F=(0,Z.ZP)(E.Z)(c||(c=(0,v.Z)(["\n  margin-right: -10px;\n  margin-left: 4px;\n"]))),M=(0,Z.ZP)(I.Z)(d||(d=(0,v.Z)(["\n  min-width: 30px;\n  margin-right: 5px;\n"]))),q=(0,Z.ZP)(I.Z)(u||(u=(0,v.Z)(["\n  min-width: 30px;\n"]))),N=r(9782),Y=r(2791),V=r(5218),B=r(4164),K=Z.ZP.div(l||(l=(0,v.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1000;\n"]))),J=Z.ZP.div(p||(p=(0,v.Z)(["\n  /* position: relative; */\n  max-width: calc(100vw - 300px);\n  max-height: calc(100vh - 50px);\n  background-color: white;\n"]))),O=Z.ZP.button(m||(m=(0,v.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  border: none;\n  border-radius: 50%;\n  background-color: #1976d2;\n  color: white;\n  display: flex;\n  align-items: center;\n  padding: 3px;\n  &:hover {\n    background-color: #1565c0;\n  }\n"]))),U=r(9823),X=r(5861),$=r(4687),D=r.n($),G=r(3896),H=document.querySelector("#modal-root"),Q=function(n){var e=n.onClose,r=n.id,t=function(n,e){var r=(0,N.wY)().data.find((function(n){return n.id===e})),t=(0,N.wv)(),i=(0,C.Z)(t,2),o=i[0],a=i[1],s=a.isLoading,c=a.isSuccess,d=a.isError;(0,Y.useEffect)((function(){c&&V.ZP.success("Contact updated"),d&&V.ZP.error("Sorry, try again")}),[c,d]);var u=function(){var e=(0,X.Z)(D().mark((function e(t){return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o((0,h.Z)({id:r.id},t));case 3:n(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),l=(0,G.cI)();return{register:l.register,handleSubmit:l.handleSubmit,errors:l.formState.errors,onSubmit:u,contact:r,isLoading:s}}(e,r),i=t.register,o=t.handleSubmit,a=t.errors,s=t.onSubmit,c=t.contact,d=t.isLoading;(0,Y.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,B.createPortal)((0,w.jsx)(K,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,w.jsxs)(J,{children:[(0,w.jsx)(P,{btnText:"Save changes",onSubmit:s,contact:c,isLoading:d,register:i,handleSubmit:o,errors:a}),(0,w.jsx)(O,{type:"button",onClick:function(){return e()},children:(0,w.jsx)(U.Z,{})})]})}),H)},R=function(n){var e=n.id,r=n.name,t=n.number,i=(0,N.Nt)(),o=(0,C.Z)(i,2),a=o[0],s=o[1],c=s.isLoading,d=s.isSuccess;(0,Y.useEffect)((function(){d&&V.ZP.success("Contact deleted")}),[d]);var u=(0,Y.useState)(!1),l=(0,C.Z)(u,2),p=l[0],m=l[1],x=function(){m((function(n){return!n}))};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(_,{children:[(0,w.jsx)(T,{children:r.charAt(0).toUpperCase()}),(0,w.jsxs)("p",{children:[r,": ",t]}),(0,w.jsx)(M,{type:"button",onClick:function(){return a(e)},disabled:c,variant:"outlined",startIcon:(0,w.jsx)(A,{}),children:c&&(0,w.jsx)(y,{})}),(0,w.jsx)(q,{type:"button",onClick:x,variant:"outlined",startIcon:(0,w.jsx)(F,{})})]},e),p&&(0,w.jsx)(Q,{onClose:x,isModalOpen:p,id:e})]})},W=r(5048),nn=r(1538),en=function(){var n=(0,N.wY)(),e=n.data,r=n.error,t=n.isLoading,i=(0,W.v9)(nn.zK),o=(0,Y.useMemo)((function(){var n;return null!==(n=null===e||void 0===e?void 0:e.filter((function(n){return n.name.toLowerCase().includes(i.toLowerCase())})))&&void 0!==n?n:[]}),[i,e]);return(0,w.jsxs)(w.Fragment,{children:[r&&(0,w.jsx)("p",{children:"Contacts not found"}),t?(0,w.jsx)(y,{}):(0,w.jsx)(S,{children:null===o||void 0===o?void 0:o.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,w.jsx)(R,{name:r,number:t,id:e},e)}))})]})},rn=Z.ZP.label(x||(x=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  margin-top: 20px;\n  font-size: 20px;\n  width: 400px;\n  font-weight: 700;\n"]))),tn=Z.ZP.input(b||(b=(0,v.Z)(["\n  margin-top: 10px;\n  width: 400px;\n  padding: 5px;\n  margin-bottom: 10px;\n  border: 1px solid #030e1845;\n  border-radius: 5px;\n  box-shadow: 2px 2px 20px 10px rgba(0, 0, 0, 0.4);\n"]))),on=function(){var n=(0,W.I0)(),e=(0,W.v9)(nn.zK);return(0,w.jsxs)(rn,{children:["Find contacts by name:",(0,w.jsx)(tn,{type:"text",name:"filter",value:e,onChange:function(e){n((0,nn.hX)(e.currentTarget.value))}})]})},an=r(2814),sn=Z.ZP.div(f||(f=(0,v.Z)(["\n  background: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100vh;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding-top: 50px;\n"])),an),cn=function(){var n=(0,N.wY)().data,e=function(){var n=(0,G.cI)({defaultValues:{name:"",number:""},mode:"onBlur"}),e=n.register,r=n.reset,t=n.handleSubmit,i=n.formState.errors,o=(0,N.Lr)(),a=(0,C.Z)(o,2),s=a[0],c=a[1],d=c.isLoading,u=c.isSuccess,l=c.isError,p=(0,N.wY)().data;(0,Y.useEffect)((function(){u&&V.ZP.success("Contact added"),l&&V.ZP.error("Sorry, try again")}),[u,l]);var m=function(){var n=(0,X.Z)(D().mark((function n(e){var t,i,o;return D().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t={name:e.name,number:e.number},i=p.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})),!i){n.next=5;break}return n.abrupt("return",V.ZP.error("".concat(e.name," is already in contacts.")));case 5:if(o=p.find((function(n){return n.number===e.number})),!o){n.next=10;break}return n.abrupt("return",V.ZP.error("This phone number is already in contacts."));case 10:s(t),r();case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}();return{register:e,handleSubmit:t,errors:i,isLoading:d,onSubmit:m}}(),r=e.register,t=e.handleSubmit,i=e.errors,o=e.isLoading,a=e.onSubmit;return(0,w.jsxs)(sn,{children:[(0,w.jsx)("h1",{children:"Phonebook"}),(0,w.jsx)(P,{btnText:"Add contact",onSubmit:a,isLoading:o,register:r,handleSubmit:t,errors:i}),n&&(n.length>1?(0,w.jsx)(on,{}):""),(0,w.jsx)("h2",{children:"Contacts"}),(0,w.jsx)(en,{})]})}},2814:function(n,e,r){n.exports=r.p+"static/media/cell-phones.c51f0fb4868e6140be5b.jpg"}}]);
//# sourceMappingURL=716.5814c3f6.chunk.js.map
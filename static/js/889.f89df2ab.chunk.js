"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[889],{1889:function(n,e,r){r.r(e);var t=r(9439),i=r(8131),o=r(2920),a=r(7689),s=r(1087),x=r(2791),p=r(9434),c=r(9258),l=r(9268),d=r(1686),u=r.n(d),f=r(9135),h=r(184);e.default=function(){var n=(0,x.useState)(""),e=(0,t.Z)(n,2),r=e[0],d=e[1],b=(0,x.useState)(""),g=(0,t.Z)(b,2),w=g[0],m=g[1],j=(0,a.s0)(),Z=(0,p.I0)(),v=function(n){var e=n.target,r=e.name,t=e.value;"email"===r&&d(t),"password"===r&&m(t)},k=function(n){n.preventDefault();var e={email:r,password:w};Z((0,c.Ib)(e)).unwrap().then((function(){return j("/contacts")})).catch((function(){return u().Notify.failure("Log in failed, please try again.")})),d(""),m("")};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(l.B,{children:[(0,h.jsx)(a.j3,{}),(0,h.jsx)(s.rU,{to:"/",children:(0,h.jsx)(o.j,{children:"Back"})}),(0,h.jsx)(i.Dr,{children:"Please enter your login information..."}),(0,h.jsx)(i.l0,{onSubmit:k,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i.gN,{children:[(0,h.jsx)(i.II,{onChange:v,type:"text",name:"email",placeholder:"Username or email",value:r}),(0,h.jsx)(i.I,{children:(0,h.jsx)(f.SRX,{})})]}),(0,h.jsxs)(i.gN,{children:[(0,h.jsx)(i.II,{onChange:v,type:"password",name:"password",placeholder:"Password",value:w}),(0,h.jsx)(i.I,{children:(0,h.jsx)(f.WIW,{})})]}),(0,h.jsx)(s.rU,{children:(0,h.jsx)(i.Mm,{children:(0,h.jsx)(i.zx,{onClick:k,type:"submit",name:"submit",children:(0,h.jsx)("i",{children:(0,h.jsx)(f.Z1Y,{})})})})})]})})]})})}},8131:function(n,e,r){r.d(e,{Dr:function(){return d},I:function(){return w},II:function(){return g},Mm:function(){return h},gN:function(){return f},l0:function(){return u},zx:function(){return b}});var t,i,o,a,s,x,p,c=r(168),l=r(6444),d=l.ZP.div(t||(t=(0,c.Z)(["\n  color: #42a2bc;\n  font-size: 30px;\n  text-align: center;\n  margin-top: 20px;\n"]))),u=l.ZP.form(i||(i=(0,c.Z)(["\n  width: 300px;\n  margin: 60px auto 30px;\n  padding: 10px;\n  position: relative;\n\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 3px 7px rgba(0, 0, 0, 0.3),\n    inset 0 1px rgba(255, 255, 255, 1), inset 0 -3px 2px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  background: linear-gradient(#eeefef, #ffffff 10%);\n"]))),f=l.ZP.p(o||(o=(0,c.Z)(["\n  position: relative;\n"]))),h=l.ZP.div(a||(a=(0,c.Z)(["\n  width: 65px;\n  height: 65px;\n  position: absolute;\n  top: 17px;\n  right: -25px;\n  padding: 10px;\n  z-index: 2;\n\n  background: #ffffff;\n  border-radius: 50%;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 3px 2px rgba(0, 0, 0, 0.1),\n    inset 0 -3px 2px rgba(0, 0, 0, 0.2);\n  /* &:after {\n    content: '';\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    top: -2px;\n    left: 30px;\n\n    background: #ffffff;\n\n    box-shadow: 0 62px white, -32px 31px white;\n  } */\n"]))),b=l.ZP.button(s||(s=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  margin-top: -1px;\n\n  font-size: 1.4em;\n  line-height: 1.75;\n  color: white;\n\n  border: none;\n  border-radius: inherit;\n  background: linear-gradient(#52cfeb, #42a2bc);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3),\n    0 1px 2px rgba(0, 0, 0, 0.35), inset 0 3px 2px rgba(255, 255, 255, 0.2),\n    inset 0 -3px 2px rgba(0, 0, 0, 0.1);\n\n  cursor: pointer;\n  &:focus {\n    outline: none;\n    background: #52cfeb;\n    transition: all 0.3s ease-out;\n  }\n  &:active {\n    background: #42a2bc;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3),\n      inset 0 3px 4px rgba(0, 0, 0, 0.3);\n  }\n"]))),g=l.ZP.input(x||(x=(0,c.Z)(["\n  font-family: 'Lato', Calibri, Arial, sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\n\n  width: 80%;\n  padding: 10px 18px 10px 45px;\n\n  border: none;\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1),\n    inset 0 3px 2px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  background: #f9f9f9;\n  color: #777;\n  transition: color 0.3s ease-out;\n  &:hover {\n    color: #52cfeb;\n  }\n  &:focus {\n    color: #42a2bc;\n    outline: none;\n  }\n"]))),w=l.ZP.i(p||(p=(0,c.Z)(["\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  height: 36px;\n  width: 36px;\n\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.7);\n\n  color: #777777;\n  text-align: center;\n  line-height: 42px;\n  transition: all 0.3s ease-out;\n  pointer-events: none;\n"])))}}]);
//# sourceMappingURL=889.f89df2ab.chunk.js.map
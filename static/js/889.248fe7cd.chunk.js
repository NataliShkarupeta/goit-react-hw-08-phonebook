"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[889],{1889:function(n,e,t){t.r(e);var r=t(9439),i=t(8131),o=t(2920),a=t(7689),s=t(1087),p=t(2791),x=t(9434),c=t(9258),l=t(9268),d=t(1686),u=t.n(d),f=t(184);e.default=function(){var n=(0,p.useState)(""),e=(0,r.Z)(n,2),t=e[0],d=e[1],b=(0,p.useState)(""),h=(0,r.Z)(b,2),g=h[0],w=h[1],m=(0,a.s0)(),j=(0,x.I0)(),v=function(n){var e=n.target,t=e.name,r=e.value;"email"===t&&d(r),"password"===t&&w(r)},Z=function(n){n.preventDefault();var e={email:t,password:g};j((0,c.Ib)(e)).unwrap().then((function(){return m("/contacts")})).catch((function(){return u().Notify.failure("Log in failed, please try again.")})),d(""),w("")};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(l.B,{children:[(0,f.jsx)(a.j3,{}),(0,f.jsx)(s.rU,{to:"/",children:(0,f.jsx)(o.j,{children:"Back"})}),(0,f.jsx)(i.Dr,{children:"Please enter your login information..."}),(0,f.jsx)(i.l0,{onSubmit:Z,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(i.gN,{children:[(0,f.jsx)(i.II,{onChange:v,type:"text",name:"email",placeholder:"Username or email",value:t}),(0,f.jsx)(i.I,{})]}),(0,f.jsxs)(i.gN,{children:[(0,f.jsx)(i.II,{onChange:v,type:"password",name:"password",placeholder:"Password",value:g}),(0,f.jsx)(i.I,{})]}),(0,f.jsx)(s.rU,{children:(0,f.jsx)(i.Mm,{children:(0,f.jsx)(i.zx,{onClick:Z,type:"submit",name:"submit",children:(0,f.jsx)("i",{})})})})]})})]})})}},8131:function(n,e,t){t.d(e,{Dr:function(){return d},I:function(){return w},II:function(){return g},Mm:function(){return b},gN:function(){return f},l0:function(){return u},zx:function(){return h}});var r,i,o,a,s,p,x,c=t(168),l=t(6444),d=l.ZP.div(r||(r=(0,c.Z)(["\n  color: #42a2bc;\n  font-size: 30px;\n  text-align: center;\n  margin-top: 20px;\n"]))),u=l.ZP.form(i||(i=(0,c.Z)(["\n  width: 300px;\n  margin: 60px auto 30px;\n  padding: 10px;\n  position: relative;\n\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 3px 7px rgba(0, 0, 0, 0.3),\n    inset 0 1px rgba(255, 255, 255, 1), inset 0 -3px 2px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  background: linear-gradient(#eeefef, #ffffff 10%);\n"]))),f=l.ZP.p(o||(o=(0,c.Z)(["\n  position: relative;\n"]))),b=l.ZP.div(a||(a=(0,c.Z)(["\n  width: 65px;\n  height: 65px;\n  position: absolute;\n  top: 17px;\n  right: -25px;\n  padding: 10px;\n  z-index: 2;\n\n  background: #ffffff;\n  border-radius: 50%;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 3px 2px rgba(0, 0, 0, 0.1),\n    inset 0 -3px 2px rgba(0, 0, 0, 0.2);\n  /* &:after {\n    content: '';\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    top: -2px;\n    left: 30px;\n\n    background: #ffffff;\n\n    box-shadow: 0 62px white, -32px 31px white;\n  } */\n"]))),h=l.ZP.button(s||(s=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  margin-top: -1px;\n\n  font-size: 1.4em;\n  line-height: 1.75;\n  color: white;\n\n  border: none;\n  border-radius: inherit;\n  background: linear-gradient(#52cfeb, #42a2bc);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3),\n    0 1px 2px rgba(0, 0, 0, 0.35), inset 0 3px 2px rgba(255, 255, 255, 0.2),\n    inset 0 -3px 2px rgba(0, 0, 0, 0.1);\n\n  cursor: pointer;\n  &:focus {\n    outline: none;\n    background: #52cfeb;\n    transition: all 0.3s ease-out;\n  }\n  &:active {\n    background: #42a2bc;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3),\n      inset 0 3px 4px rgba(0, 0, 0, 0.3);\n  }\n"]))),g=l.ZP.input(p||(p=(0,c.Z)(["\n  font-family: 'Lato', Calibri, Arial, sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\n\n  width: 80%;\n  padding: 10px 18px 10px 45px;\n\n  border: none;\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1),\n    inset 0 3px 2px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  background: #f9f9f9;\n  color: #777;\n  transition: color 0.3s ease-out;\n  &:hover {\n    color: #52cfeb;\n  }\n  &:focus {\n    color: #42a2bc;\n    outline: none;\n  }\n"]))),w=l.ZP.i(x||(x=(0,c.Z)(["\n  left: 0px;\n  top: 0px;\n  position: absolute;\n  height: 36px;\n  width: 36px;\n\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.7);\n\n  color: #777777;\n  text-align: center;\n  line-height: 42px;\n  transition: all 0.3s ease-out;\n  pointer-events: none;\n"])))}}]);
//# sourceMappingURL=889.248fe7cd.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[675],{4675:function(n,t,e){e.r(t),e.d(t,{default:function(){return mt}});var r,o,a,i,s,c=e(9439),u=e(2791),d=e(168),l=e(7691),f=l.ZP.form(r||(r=(0,d.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n\n    width: 400px;\n    padding: 60px;\n\n    background-color: #f0f8ff;\n    border: 2px solid lightblue;\n    border-radius: 4px;\n"]))),p=l.ZP.label(o||(o=(0,d.Z)(["\n    display: flex;\n    justify-content: space-between;\n    color: #7d3cff;\n"]))),m=l.ZP.input(a||(a=(0,d.Z)(["\n    padding: 12px;\n    margin-left: 20px;\n\n    border: 2px solid lightblue;\n    background-color: #f0f8ff;\n    border-radius: 4px;\n    color: #7d3cff;\n"]))),h=(l.ZP.button(i||(i=(0,d.Z)(["\n    padding: 12px 24px 12px 24px;\n\n    background-color: #fef6dd;\n    border: 2px solid lightblue;\n    border-radius: 4px;\n    color: #7d3cff;\n"]))),l.ZP.button(s||(s=(0,d.Z)(["\n  width: 100px;\n  height: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: 2px solid lightblue;\n  color: #7d3cff;\n  cursor: pointer;\n  font-size: 15px;\n  background-color: #f0f8ff;\n"])))),g=e(3433),x=e(1413),b=e(4942),v={data:""},y=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||v},Z=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,w=/\/\*[^]*?\*\/|  +/g,j=/\n+/g,k=function n(t,e){var r="",o="",a="",i=function(i){var c=t[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":o+="f"==i[1]?n(c,i):i+"{"+n(c,"k"==i[1]?"":e)+"}":"object"==typeof c?o+=n(c,e?e.replace(/([^,])+/g,(function(n){return i.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=n.p?n.p(i,c):i+":"+c+";"),s=i};for(var s in t)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},C={},E=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},z=function(n,t,e,r,o){var a=E(n),i=C[a]||(C[a]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(a));if(!C[i]){var s=a!==n?n:function(n){for(var t,e,r=[{}];t=Z.exec(n.replace(w,""));)t[4]?r.shift():t[3]?(e=t[3].replace(j," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(j," ").trim();return r[0]}(n);C[i]=k(o?(0,b.Z)({},"@keyframes "+i,s):s,e?"":"."+i)}var c=e&&C.g?C.g:null;return e&&(C.g=C[i]),function(n,t,e,r){r?t.data=t.data.replace(r,n):-1===t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(C[i],t,r,c),i},A=function(n,t,e){return n.reduce((function(n,r,o){var a=t[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":k(i,""):!1===i?"":i}return n+r+(null==a?"":a)}),"")};function N(n){var t=this||{},e=n.call?n(t.p):n;return z(e.unshift?e.raw?A(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,y(t.target),t.g,t.o,t.k)}N.bind({g:1});var P,O,L,D,S,_,I,T,F,M,H,U,q,J,B,R,$,V,X,Y=N.bind({k:1});function G(n,t){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:O&&O()},s),e.o=/ *go\d+/.test(c),s.className=N.apply(e,r)+(c?" "+c:""),t&&(s.ref=i);var u=n;return n[0]&&(u=s.as||n,delete s.as),L&&u[0]&&L(s),P(u,s)}return t?t(o):o}}var K=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},Q=function(){var n=0;return function(){return(++n).toString()}}(),W=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}(),nn=new Map,tn=function(n){if(!nn.has(n)){var t=setTimeout((function(){nn.delete(n),an({type:4,toastId:n})}),1e3);nn.set(n,t)}},en=function n(t,e){switch(e.type){case 0:return(0,x.Z)((0,x.Z)({},t),{},{toasts:[e.toast].concat((0,g.Z)(t.toasts)).slice(0,20)});case 1:return e.toast.id&&function(n){var t=nn.get(n);t&&clearTimeout(t)}(e.toast.id),(0,x.Z)((0,x.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===e.toast.id?(0,x.Z)((0,x.Z)({},n),e.toast):n}))});case 2:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:1,toast:r}):n(t,{type:0,toast:r});case 3:var o=e.toastId;return o?tn(o):t.toasts.forEach((function(n){tn(n.id)})),(0,x.Z)((0,x.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===o||void 0===o?(0,x.Z)((0,x.Z)({},n),{},{visible:!1}):n}))});case 4:return void 0===e.toastId?(0,x.Z)((0,x.Z)({},t),{},{toasts:[]}):(0,x.Z)((0,x.Z)({},t),{},{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case 5:return(0,x.Z)((0,x.Z)({},t),{},{pausedAt:e.time});case 6:var a=e.time-(t.pausedAt||0);return(0,x.Z)((0,x.Z)({},t),{},{pausedAt:void 0,toasts:t.toasts.map((function(n){return(0,x.Z)((0,x.Z)({},n),{},{pauseDuration:n.pauseDuration+a})}))})}},rn=[],on={toasts:[],pausedAt:void 0},an=function(n){on=en(on,n),rn.forEach((function(n){n(on)}))},sn={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},cn=function(n){return function(t,e){var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,x.Z)((0,x.Z)({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||Q()})}(t,n,e);return an({type:2,toast:r}),r.id}},un=function(n,t){return cn("blank")(n,t)};un.error=cn("error"),un.success=cn("success"),un.loading=cn("loading"),un.custom=cn("custom"),un.dismiss=function(n){an({type:3,toastId:n})},un.remove=function(n){return an({type:4,toastId:n})},un.promise=function(n,t,e){var r=un.loading(t.loading,(0,x.Z)((0,x.Z)({},e),null==e?void 0:e.loading));return n.then((function(n){return un.success(K(t.success,n),(0,x.Z)((0,x.Z)({id:r},e),null==e?void 0:e.success)),n})).catch((function(n){un.error(K(t.error,n),(0,x.Z)((0,x.Z)({id:r},e),null==e?void 0:e.error))})),n};var dn=function(n,t){an({type:1,toast:{id:n,height:t}})},ln=function(){an({type:5,time:Date.now()})},fn=function(n){var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,u.useState)(on),e=(0,c.Z)(t,2),r=e[0],o=e[1];(0,u.useEffect)((function(){return rn.push(o),function(){var n=rn.indexOf(o);n>-1&&rn.splice(n,1)}}),[r]);var a=r.toasts.map((function(t){var e,r;return(0,x.Z)((0,x.Z)((0,x.Z)((0,x.Z)({},n),n[t.type]),t),{},{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==n?void 0:n.duration)||sn[t.type],style:(0,x.Z)((0,x.Z)((0,x.Z)({},n.style),null==(r=n[t.type])?void 0:r.style),t.style)})}));return(0,x.Z)((0,x.Z)({},r),{},{toasts:a})}(n),e=t.toasts,r=t.pausedAt;(0,u.useEffect)((function(){if(!r){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return un.dismiss(t.id)}),e);t.visible&&un.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,r]);var o=(0,u.useCallback)((function(){r&&an({type:6,time:Date.now()})}),[r]),a=(0,u.useCallback)((function(n,t){var r,o=t||{},a=o.reverseOrder,i=void 0!==a&&a,s=o.gutter,c=void 0===s?8:s,u=o.defaultPosition,d=e.filter((function(t){return(t.position||u)===(n.position||u)&&t.height})),l=d.findIndex((function(t){return t.id===n.id})),f=d.filter((function(n,t){return t<l&&n.visible})).length;return(r=d.filter((function(n){return n.visible}))).slice.apply(r,(0,g.Z)(i?[f+1]:[0,f])).reduce((function(n,t){return n+(t.height||0)+c}),0)}),[e]);return{toasts:e,handlers:{updateHeight:dn,startPause:ln,endPause:o,calculateOffset:a}}},pn=Y(D||(D=(0,d.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),mn=Y(S||(S=(0,d.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),hn=Y(_||(_=(0,d.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),gn=G("div")(I||(I=(0,d.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),pn,mn,(function(n){return n.secondary||"#fff"}),hn),xn=Y(T||(T=(0,d.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),bn=G("div")(F||(F=(0,d.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),xn),vn=Y(M||(M=(0,d.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),yn=Y(H||(H=(0,d.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),Zn=G("div")(U||(U=(0,d.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),vn,yn,(function(n){return n.secondary||"#fff"})),wn=G("div")(q||(q=(0,d.Z)(["\n  position: absolute;\n"]))),jn=G("div")(J||(J=(0,d.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),kn=Y(B||(B=(0,d.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),Cn=G("div")(R||(R=(0,d.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),kn),En=function(n){var t=n.toast,e=t.icon,r=t.type,o=t.iconTheme;return void 0!==e?"string"==typeof e?u.createElement(Cn,null,e):e:"blank"===r?null:u.createElement(jn,null,u.createElement(bn,(0,x.Z)({},o)),"loading"!==r&&u.createElement(wn,null,"error"===r?u.createElement(gn,(0,x.Z)({},o)):u.createElement(Zn,(0,x.Z)({},o))))},zn=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},An=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},Nn=G("div")($||($=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Pn=G("div")(V||(V=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),On=u.memo((function(n){var t=n.toast,e=n.position,r=n.style,o=n.children,a=t.height?function(n,t){var e=n.includes("top")?1:-1,r=W()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[zn(e),An(e)],o=(0,c.Z)(r,2),a=o[0],i=o[1];return{animation:t?"".concat(Y(a)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(Y(i)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(t.position||e||"top-center",t.visible):{opacity:0},i=u.createElement(En,{toast:t}),s=u.createElement(Pn,(0,x.Z)({},t.ariaProps),K(t.message,t));return u.createElement(Nn,{className:t.className,style:(0,x.Z)((0,x.Z)((0,x.Z)({},a),r),t.style)},"function"==typeof o?o({icon:i,message:s}):u.createElement(u.Fragment,null,i,s))}));!function(n,t,e,r){k.p=t,P=n,O=e,L=r}(u.createElement);var Ln=function(n){var t=n.id,e=n.className,r=n.style,o=n.onHeightUpdate,a=n.children,i=u.useCallback((function(n){if(n){var e=function(){var e=n.getBoundingClientRect().height;o(t,e)};e(),new MutationObserver(e).observe(n,{subtree:!0,childList:!0,characterData:!0})}}),[t,o]);return u.createElement("div",{ref:i,className:e,style:r},a)},Dn=N(X||(X=(0,d.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Sn=function(n){var t=n.reverseOrder,e=n.position,r=void 0===e?"top-center":e,o=n.toastOptions,a=n.gutter,i=n.children,s=n.containerStyle,c=n.containerClassName,d=fn(o),l=d.toasts,f=d.handlers;return u.createElement("div",{style:(0,x.Z)({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:c,onMouseEnter:f.startPause,onMouseLeave:f.endPause},l.map((function(n){var e=n.position||r,o=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return(0,x.Z)((0,x.Z)({left:0,right:0,display:"flex",position:"absolute",transition:W()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(e?1:-1),"px)")},r),o)}(e,f.calculateOffset(n,{reverseOrder:t,gutter:a,defaultPosition:r}));return u.createElement(Ln,{id:n.id,key:n.id,onHeightUpdate:f.updateHeight,className:n.visible?Dn:"",style:o},"custom"===n.type?K(n.message,n):i?i(n):u.createElement(On,{toast:n,position:e}))})))},_n=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",e=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&e[n];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t},In=e(9782),Tn=e(8929),Fn=e(3329);var Mn,Hn,Un=function(){var n=(0,u.useState)(""),t=(0,c.Z)(n,2),e=t[0],r=t[1],o=(0,u.useState)(""),a=(0,c.Z)(o,2),i=a[0],s=a[1],d=(0,In.Jx)(),l=d.data,g=d.isLoading,x=(0,In.Lr)(),b=(0,c.Z)(x,1)[0],v=function(n){var t=n.currentTarget,e=t.name,o=t.value;switch(e){case"name":r(o);break;case"number":s(o);break;default:return}},y=function(){r(""),s("")};return(0,Fn.jsxs)(f,{onSubmit:function(n){n.preventDefault();var t,r={id:_n(),name:e,number:i};t=r,l.map((function(n){return n.name.toLowerCase()})).includes(t.name.toLowerCase())?alert("\ud83d\ude0f".concat(t.name," is already in contacts.")):(b(t),y(),alert("\ud83d\ude03 Contact, ".concat(e," successfully added")))},autoComplete:"off",children:[(0,Fn.jsxs)(p,{children:["Name",(0,Fn.jsx)(m,{type:"text",id:"name_input",name:"name",value:e,onChange:v,placeholder:"Enter your name...",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,Fn.jsxs)(p,{children:["Number",(0,Fn.jsx)(m,{type:"tel",id:"name_input",name:"number",value:i,onChange:v,placeholder:"Enter your number...",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,Fn.jsx)(h,{type:"submit",children:"Add contact"}),(0,Fn.jsx)(Sn,{}),g&&(0,Fn.jsx)(Tn.Z,{})]})},qn=e(1109),Jn=qn.Z.li(Mn||(Mn=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n  color: #7d3cff;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  padding: 10px;\n\n  font-size: 10px;\n  border-radius: 5px;\n  border: 2px solid lightblue;\n  cursor: pointer;\n  font-size: 15px;\n  box-shadow: 17px 17px 84px 18px rgba(21, 15, 15, 0.2) inset;\n  background-color: #f0f8ff;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),Bn=qn.Z.button(Hn||(Hn=(0,d.Z)(["\n  width: 100px;\n  height: 100%;\n  padding: 5px;\n  border-radius: 5px;\n  border: 2px solid lightblue;\n  color: #7d3cff;\n  cursor: pointer;\n  font-size: 15px;\n  background-color: #f0f8ff;\n"]))),Rn=e(5243);var $n,Vn,Xn,Yn,Gn,Kn,Qn,Wn,nt=function(n){var t=n.id,e=n.name,r=n.number,o=(0,In.Nt)(),a=(0,c.Z)(o,2),i=a[0],s=a[1].isLoading;return(0,Fn.jsxs)(Jn,{children:[(0,Fn.jsxs)("p",{children:[e,": ",r," "," "]}),(0,Fn.jsxs)(Bn,{type:"button",onClick:function(){return i(t)},disabled:s,children:[s&&(0,Fn.jsx)(Rn.s5,{width:"10"}),"  Delete"]})]},t)},tt=qn.Z.ul($n||($n=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),et=qn.Z.h2(Vn||(Vn=(0,d.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1.62;\n  letter-spacing: 0.03em;\n  text-align: center;\n  color: #7d3cff;\n"]))),rt=e(5048),ot=function(n){return n.contacts.filter},at=function(){var n=(0,In.Jx)(),t=n.data,e=n.error,r=n.isLoading,o=(0,rt.v9)(ot),a=t&&t.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase())})),i=t&&a.length>0;return(0,Fn.jsx)(Fn.Fragment,{children:(0,Fn.jsxs)(tt,{children:[i&&a.map((function(n){var t=n.id,e=n.name,r=n.number;return(0,Fn.jsx)(nt,{id:t,name:e,number:r},t)})),r&&(0,Fn.jsx)(Tn.Z,{}),e&&(0,Fn.jsx)(et,{children:"Try adding phone details or contact your administrator"})]})})},it=qn.Z.label(Xn||(Xn=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  width: 100%;\n  color: #7d3cff;\n"]))),st=qn.Z.p(Yn||(Yn=(0,d.Z)(["\n  text-align: center;\n  color: #7d3cff;\n"]))),ct=qn.Z.input(Gn||(Gn=(0,d.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2px;\n  padding: 10px;\n  width: 100%;\n  border: 2px solid lightblue;\n  background-color: #f0f8ff;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 15px;\n  &::placeholder {\n    color: #7d3cff;\n  }\n"]))),ut=e(1538),dt=function(){var n=(0,rt.I0)(),t=(0,rt.v9)(ot);return(0,Fn.jsxs)(it,{htmlFor:"",value:t,children:[(0,Fn.jsx)(st,{children:"Search contact"}),(0,Fn.jsx)(ct,{type:"text",onChange:function(t){n((0,ut.hX)(t.currentTarget.value.trim()))},placeholder:"Search"})]})},lt=qn.Z.div(Kn||(Kn=(0,d.Z)(["\n  display: block;\n  margin-top: 20px;\n  max-width: 800px;\n  margin: 1em auto;\n  padding: 1em;\n  border-radius: 10px;\n"]))),ft=qn.Z.h1(Qn||(Qn=(0,d.Z)(["\n  text-align: center;\n  margin-bottom: 10px;\n  font-weight: 700;\n  color: #7d3cff;\n  transition: all 0.5s ease;\n"]))),pt=qn.Z.h2(Wn||(Wn=(0,d.Z)(["\n  text-align: center;\n  margin-bottom: 10px;\n  font-weight: 700;\n  color: #7d3cff;\n"])));var mt=function(){return(0,Fn.jsxs)(lt,{children:[(0,Fn.jsx)(ft,{children:"Contacts list"}),(0,Fn.jsx)(pt,{children:"Add contact"}),(0,Fn.jsx)(Un,{}),(0,Fn.jsx)(pt,{children:"Contacts"}),(0,Fn.jsx)(dt,{}),(0,Fn.jsx)(at,{})]})}}}]);
//# sourceMappingURL=675.87276ac9.chunk.js.map
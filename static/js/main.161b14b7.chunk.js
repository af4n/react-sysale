(this["webpackJsonpreact-sysale"]=this["webpackJsonpreact-sysale"]||[]).push([[0],[,,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var i=t(0),n=t(1),s=t.n(n),o=t(4),a=t.n(o),r=t(5),d=(t(11),t(2)),m=(t(12),t(13),function(e){var c=e.option,t=e.setOption,s=e.options,o=Object(n.useState)(!1),a=Object(d.a)(o,2),r=a[0],m=a[1];function u(e){t(e.target.textContent),m(!1)}function l(){r&&m(!1)}return Object(i.jsxs)("div",{className:"select",onMouseLeave:l,children:[Object(i.jsxs)("div",{className:"select-header",onClick:function(){m((function(e){return!e}))},children:[Object(i.jsx)("span",{className:"select-current",children:c||"\u0426\u0432\u0435\u0442"}),Object(i.jsx)("div",{className:"select-icon ".concat(r?"select-icon-hide":"select-icon-show"),children:"\u276f"})]}),Object(i.jsx)("div",{className:"select-body",style:{display:r?"block":"none"},onMouseLeave:l,children:s.map((function(e){return Object(i.jsx)("div",{className:"select-item",onClick:u,children:e},e)}))})]})}),u=(t(14),function(e){var c=e.volume,t=e.isChecked;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"checkbox",children:[Object(i.jsx)("input",{className:"custom-checkbox",type:"checkbox",id:"checkbox-100",name:"color-1",onClick:t=!t,checked:!0}),Object(i.jsxs)("label",{htmlFor:"checkbox-100",children:[c[0]," \u043c\u043b"]})]}),Object(i.jsxs)("div",{className:"checkbox",children:[Object(i.jsx)("input",{className:"custom-checkbox",type:"checkbox",id:"checkbox-200",name:"color-2",onClick:t=!t}),Object(i.jsxs)("label",{htmlFor:"checkbox-200",children:[c[1]," \u043c\u043b"]})]}),Object(i.jsxs)("div",{className:"checkbox",children:[Object(i.jsx)("input",{className:"custom-checkbox",type:"checkbox",id:"checkbox-300",name:"color-3",onClick:t=!t}),Object(i.jsxs)("label",{htmlFor:"checkbox-300",children:[c[2]," \u043c\u043b"]})]})]})}),l=(t(15),function(e){var c=e.counter,t=e.setCounter;return Object(i.jsxs)("div",{className:"btn-counter",children:[Object(i.jsx)("button",{onClick:function(){return t((function(e){return e>1?e-1:e}))},children:"-"}),Object(i.jsx)("span",{children:c}),Object(i.jsx)("button",{onClick:function(){return t((function(e){return e+1}))},children:"+"})]})}),j=function(e){var c=e.imageProduct,t=e.imageProductHover,s=e.name,o=e.description,a=e.price,r=e.imageCompare,j=e.imageAdded,b=e.volume,p=e.options,h=e.isChecked,x=Object(n.useState)(""),O=Object(d.a)(x,2),g=O[0],v=O[1],k=Object(n.useState)(1),f=Object(d.a)(k,2),N=f[0],C=f[1],y=Object(n.useState)(!1),P=Object(d.a)(y,2),L=P[0],F=P[1],S=Object(n.useState)(!1),q=Object(d.a)(S,2),A=q[0],M=q[1];return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsxs)("div",{className:"card-top",children:[Object(i.jsx)("span",{className:"new-product",children:"NEW"}),Object(i.jsx)("img",{src:A?t:c,className:"image-product",alt:"image",onMouseEnter:function(){return M(!0)},onMouseLeave:function(){return M(!1)}}),Object(i.jsx)("button",{className:"compare-product",onClick:function(){return F(!0)},children:Object(i.jsx)("img",{src:L?j:r,alt:"image-compare"})})]}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("h3",{children:s}),Object(i.jsx)("p",{children:o})]}),Object(i.jsxs)("div",{className:"card-bottom",children:[Object(i.jsxs)("div",{className:"select-group",children:[Object(i.jsx)(m,{options:p,option:g,setOption:v}),Object(i.jsxs)("span",{className:"price",children:[a," \u0433\u0440\u043d"]})]}),Object(i.jsx)("div",{className:"checkbox-group",children:Object(i.jsx)(u,{volume:b,isChecked:h})}),Object(i.jsxs)("div",{className:"btn-group",children:[Object(i.jsx)(l,{counter:N,setCounter:C}),Object(i.jsx)("button",{className:"btn-buy",children:"\u041a\u0423\u041f\u0418\u0422\u042c"})]})]})]})},b=t.p+"static/media/img-product1.80e428b6.png",p=t.p+"static/media/img-product1-hover.d89d396c.png",h=t.p+"static/media/img-product2.bd372f4f.png",x=t.p+"static/media/img-product2-hover.42062aba.png",O=t.p+"static/media/img-product3.278a6730.png",g=t.p+"static/media/img-product3-hover.829f1721.png",v=t.p+"static/media/compare.78c0a707.svg",k=t.p+"static/media/ok.a1a7fcc0.svg",f=[{id:1,name:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",imageProduct:b,imageProductHover:p,imageCompare:v,imageAdded:k,price:200,volume:["100","200","300"],options:["\u041a\u0440\u0430\u0441\u043d\u044b\u0439","\u0420\u043e\u0437\u043e\u0432\u044b\u0439","\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439","\u0421\u0438\u043d\u0438\u0439","\u0416\u0435\u043b\u0442\u044b\u0439"],isChecked:!0},{id:2,name:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",imageProduct:h,imageProductHover:x,imageCompare:v,imageAdded:k,price:200,volume:["100","200","300"],options:["\u041a\u0440\u0430\u0441\u043d\u044b\u0439","\u0420\u043e\u0437\u043e\u0432\u044b\u0439","\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439","\u0421\u0438\u043d\u0438\u0439","\u0416\u0435\u043b\u0442\u044b\u0439"],isChecked:!0},{id:3,name:"\u0428\u0430\u043c\u043f\u0443\u043d\u044c",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",imageProduct:O,imageProductHover:g,imageCompare:v,imageAdded:k,price:200,volume:["100","200","300"],options:["\u041a\u0440\u0430\u0441\u043d\u044b\u0439","\u0420\u043e\u0437\u043e\u0432\u044b\u0439","\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439","\u0421\u0438\u043d\u0438\u0439","\u0416\u0435\u043b\u0442\u044b\u0439"],isChecked:!0}],N=function(){return Object(i.jsx)("div",{className:"cards",children:f.map((function(e){return Object(i.jsx)(j,Object(r.a)({},e),e.id)}))})};var C=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(N,{})})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(c){var t=c.getCLS,i=c.getFID,n=c.getFCP,s=c.getLCP,o=c.getTTFB;t(e),i(e),n(e),s(e),o(e)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root")),y()}],[[16,1,2]]]);
//# sourceMappingURL=main.161b14b7.chunk.js.map
(this["webpackJsonpaspicientis-lux"]=this["webpackJsonpaspicientis-lux"]||[]).push([[17],{37:function(n,e,t){"use strict";var i,a=t(4),r=t(5),o=t(1);e.a=function(n){var e=n.variant,t=n.children,i=n.justify,a=void 0===i?"center":i,r=s(e);return Object(o.jsx)(c,{justify:a,font:r,children:t})};var s=function(n){switch(n){case"large":return{style:"normal",size:"min(2.5rem, 1rem + 1.67vh);"};case"italic":return{style:"italic",size:"min(2.5rem, 1rem + 1.67vh);"};default:return{style:"normal",size:"min(2.125rem, 1rem + 1.25vh)"}}},c=r.a.h1(i||(i=Object(a.a)(["\n    font-family: 'Forum';\n    font-weight: 400;\n    line-height: 1.4em;\n    font-size: ",";\n    font-style: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: ",";\n    text-align: ",";\n"])),(function(n){return n.font.size}),(function(n){return n.font.style}),(function(n){return n.justify}),(function(n){return n.justify}))},38:function(n,e,t){"use strict";var i,a=t(4),r=t(5),o=t(37),s=t(1);e.a=function(n){var e=n.header,t=n.variant,i=n.children;return Object(s.jsxs)(c,{children:[Object(s.jsx)(o.a,{variant:t,children:e}),i]})};var c=r.a.div(i||(i=Object(a.a)(["\n    padding: 5.5vmax 4.75vw;\n    @media (min-width: 576px) { padding: 40px 7vw; }\n    @media (min-width: 768px) { padding: 40px 5.75vw; }\n    @media (min-width: 1200px) { padding: 40px 4.75vw; }\n    box-sizing: border-box;\n"])))},39:function(n,e,t){"use strict";var i,a=t(4),r=t(5).a.p(i||(i=Object(a.a)(['\n    color:#373737;\n    font-family: "Cormorant Garamond", serif;\n    font-size: min(1.125rem, 1rem + 0.14vh);\n    font-weight: 400;\n    font-style: normal;\n    line-height: 1.75em;\n'])));e.a=r},42:function(n,e,t){"use strict";var i,a=t(4),r=t(5).a.div(i||(i=Object(a.a)(["\n    width : 100vw;\n    display: flex;\n    flex-wrap: wrap;\n\n    div {\n        flex: 0 0 100vw;\n        @media (min-width: 768px) {\n            flex: 0 0 ","vw;\n        }\n    }\n"])),(function(n){return 100/n.columns}));e.a=r},43:function(n,e,t){"use strict";var i,a,r,o,s,c,l=t(4),d=t(5),u=t(6),m=t(1),h=function(n){switch(n){case"cinematic":return"43.75%";case"portrait":return"125%";default:return"84%"}},f=d.a.div(i||(i=Object(l.a)(["\n    position: absolute;\n    bottom: 4vw;\n    z-index:4;\n    pointer-events: none;\n"]))),p=d.a.h2(a||(a=Object(l.a)(["\n    font-family: 'Forum';\n    font-weight: 400;\n    font-style: normal;\n    line-height: 1.4em;\n    font-size: min(2.125rem, 1rem + 1.25vh);\n    color:white;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    margin:0;\n"]))),g=d.a.h3(r||(r=Object(l.a)(["\n    font-family: 'Forum';\n    font-weight: 400;\n    font-style: normal;\n    line-height: 1.43em;\n    letter-spacing: 0.29em;\n    font-size: min(0.875rem, 1rem + -0.14vh);\n    color:white;\n    text-transform: uppercase;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n\n    margin: .75vw 0 0 0;\n"]))),b=function(n){return n?n.left?n.top?"".concat(n.left," ").concat(n.top):"".concat(n.left," center"):"center ".concat(n.top):"center center"};e.a=function(n){var e=n.img,t=n.to,i=n.title,a=n.subTitle,r=n.variant,o=n.focal,s=b(o),c=h(r);return Object(m.jsx)(u.b,{to:t,children:Object(m.jsxs)(j,{ratio:c,children:[Object(m.jsx)(x,{}),Object(m.jsx)(v,{position:s,img:e}),Object(m.jsxs)(f,{children:[Object(m.jsx)(p,{children:i}),Object(m.jsx)(g,{children:a})]})]})})};var j=d.a.div(o||(o=Object(l.a)(["\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-top: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-items: stretch;\n"])),(function(n){return n.ratio})),v=d.a.div(s||(s=Object(l.a)(["\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right:0;\n\n    background-image: url(",");\n    background-size: cover;\n\n    background-position: ",";\n    transition : transform 1s linear;\n    &:hover { transform: scale(1.05); }\n    z-index:2;\n"])),(function(n){return n.img}),(function(n){return n.position})),x=d.a.div(c||(c=Object(l.a)(["\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right:0;\n    z-index:3;\n    background: linear-gradient(180deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.1) 60%,rgba(0,0,0,.2));\n    pointer-events: none;\n"])))},71:function(n,e,t){"use strict";t.r(e);var i=t(43),a=t(38),r=t(39),o=t(42),s=t(1);e.default=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(a.a,{header:"An endeavor into photography...",variant:"small",children:Object(s.jsx)(r.a,{children:"When I picked up a camera for the first time, I found it a bit dull, looking through a small eye piece, pushing a button and after some time picking up unsharp, meaningless pictures. But sometime later I saw a good friend playing with his camera, explaining me it was not about the camera, but about experiencing the world. It took me years to understand what he meant. Being a computer scientist and an engineer in profession I tend to focus on technology all the time. Yes, photography can be technical from time to time, but it is so much more. It is about capturing that overwhelming feeling when standing on mountain overlooking some incredible scene or trying to communicate the stunning beauty of a bird looking straight into my lens. So, an image doesn't always have to be technical perfect. thus, what you find on these pages is a bit of my endeavors in photography and the world."})}),Object(s.jsxs)(o.a,{columns:2,children:[Object(s.jsx)("div",{children:Object(s.jsx)(i.a,{title:"Birds",subTitle:"Magic and Majesty",to:"/birds",img:"https://images-pw.pixieset.com/elementfield/22902569/DSC_6302-2d8de341.jpg"})}),Object(s.jsx)("div",{children:Object(s.jsx)(i.a,{title:"Landscapes",subTitle:"Incredible scenery",to:"/landscapes",img:"https://images-pw.pixieset.com/elementfield/72902569/DSC_8868-6aab1656.jpg"})})]})]})}}}]);
//# sourceMappingURL=17.2f3e509d.chunk.js.map
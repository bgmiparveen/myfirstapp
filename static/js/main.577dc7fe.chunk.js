(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){var t=Object(c.useState)("default text value"),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsxs)("div",{className:"my-4",children:[Object(o.jsxs)("h1",{children:[e.Heading," "]}),Object(o.jsx)("div",{className:"mb-3 my-3 ",children:Object(o.jsx)("textarea",{className:"form-control  ",style:{background:"dark"===e.mode?"#54546e":"white",color:"dark"===e.mode?"white":"black"},value:n,onChange:function(e){console.log("on change"),s(e.target.value)},id:"exampleFormControlTextarea1",rows:"8"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=n.toUpperCase();s(e)},children:"switch to uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=n.toLowerCase();s(e)},children:"switch to lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=n.charAt(0).toUpperCase()+n.substr(1).toLowerCase();s(e)},children:"switch to Title"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s("")},children:"Clear"})]}),Object(o.jsx)("h2",{children:"Your text summery"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters "]}),Object(o.jsxs)("p",{children:[" ",.008*n.split(" ").length," Minutes to read the text "]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsxs)("p",{children:[n," "]})]})})}function b(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsxs)("a",{className:"navbar-brand",href:"/",children:[" ",e.title]}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"./",children:e.aboutText})})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," "),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,id:"flexSwitchCheckDefault",type:"checkbox"}),Object(o.jsx)("label",{className:"form-check-lable",htmlFor:"flexSwitchCheckDefault",children:"Enable Darkmode"})]})]})]})})}b.defaultProps={title:"set title here",aboutText:"default text"};var d=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{title:"My first app",aboutText:"about text",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#434362"):(n("light"),document.body.style.backgroundColor="white")}}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(i,{Heading:"Enter the text to analyse below",mode:a})}),Object(o.jsx)("div",{className:"container"})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.577dc7fe.chunk.js.map
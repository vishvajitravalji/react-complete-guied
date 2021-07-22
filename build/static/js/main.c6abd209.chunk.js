(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(7),a=n.n(s),i=(n(13),n(8)),l=n(2),r=n(6),j=(n(14),n(0)),o=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(""),r=Object(l.a)(i,2),o=r[0],d=r[1],u=Object(c.useState)(""),b=Object(l.a)(u,2),x=b[0],O=b[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:s,amount:o,date:new Date(x)};e.onSaveExpenseData(n),a(""),d(""),O("")},children:[Object(j.jsxs)("div",{className:"new-expense__controls",children:[Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",value:s,onChange:function(e){a(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Amount"}),Object(j.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:o,onChange:function(e){d(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Date"}),Object(j.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"new-expense__actions",children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{type:"submit",children:"Add Expense"})]})]})},d=(n(16),function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),s=n[0],a=n[1];return Object(j.jsxs)("div",{className:"new-expense",children:[!s&&Object(j.jsx)("button",{onClick:function(){a(!0)},children:"Add New Expense"}),s&&Object(j.jsx)(o,{onSaveExpenseData:function(t){var n=Object(r.a)(Object(r.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),a(!1)},onCancel:function(){a(!1)}})]})}),u=(n(17),function(e){var t="card "+e.className;return Object(j.jsx)("div",{className:t,children:e.children})}),b=(n(18),function(e){return Object(j.jsx)("div",{className:"expenses-filter",children:Object(j.jsxs)("div",{className:"expenses-filter__control",children:[Object(j.jsx)("label",{children:"Filter by year"}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2019",children:"2019"})]})]})})}),x=(n(19),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),c=e.date.getFullYear();return Object(j.jsxs)("div",{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__month",children:t}),Object(j.jsx)("div",{className:"expense-date__year",children:c}),Object(j.jsx)("div",{className:"expense-date__day",children:n})]})}),O=(n(20),function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)(u,{className:"expense-item",children:[Object(j.jsx)(x,{date:e.date}),Object(j.jsxs)("div",{className:"expense-item__description",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})}),h=(n(21),function(e){return 0===e.items.length?Object(j.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(j.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(j.jsx)(O,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),m=(n(22),function(e){var t=Object(c.useState)("2020"),n=Object(l.a)(t,2),s=n[0],a=n[1],i=e.items.filter((function(e){return e.date.getFullYear().toString()===s}));return Object(j.jsx)("div",{children:Object(j.jsxs)(u,{className:"expenses",children:[Object(j.jsx)(b,{selected:s,onChangeFilter:function(e){a(e)}}),Object(j.jsx)(h,{items:i})]})})}),p=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],v=function(){var e=Object(c.useState)(p),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{onAddExpense:function(e){s((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(j.jsx)(m,{items:n})]})};a.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.c6abd209.chunk.js.map
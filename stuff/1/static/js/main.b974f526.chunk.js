(this["webpackJsonpsimple-app"]=this["webpackJsonpsimple-app"]||[]).push([[0],{3:function(e,a,t){e.exports=t(8)},8:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(2),c=function(e){return e.map((function(e){var a=[];for(var t in e)a.push({cellKey:t,cellValue:e[t]});return a}))},o=function(e){e.idDataRow;var a=e.dataCell;return n.a.createElement("div",{tabIndex:"1",className:"table-data__data-cell",style:{display:"inline-block",verticalAlign:"top",padding:"6px 12px",border:"1px solid #f1f1f1",margin:"1px",color:"#333",width:"15%",height:"100%",boxSizing:"border-box"}},a.cellValue)},i=function(e){var a=e.idDataRow,t=e.dataRow;return n.a.createElement("div",{className:"table-data__data-row",style:{height:"35px"}},t.map((function(e){return n.a.createElement(o,{key:"".concat(e.cellKey,"-").concat(a),dataCell:e})})))},u=function(e){var a=e.tableData;return n.a.createElement("div",{onDoubleClick:function(e){console.log(" doubleClickHandle::evt  ",e,a,c(a.content))}},"Test TableData ",n.a.createElement("br",null),"---------------------",n.a.createElement("br",null),n.a.createElement("br",null),c(a.content).map((function(e){return n.a.createElement(i,{key:e[0].cellValue,idDataRow:e[0].cellValue,dataRow:e})})))},d=function(e){var a=e.tableData;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"React test!"),n.a.createElement("h2",null,"TableData component"),n.a.createElement(u,{tableData:a}))},m={isMock:!0,content:[{id:"1",fullName:"John",age:10,avaSrc:""},{id:"2",fullName:"Rayahn",age:12,avaSrc:""},{id:"3",fullName:"Mark",age:30,avaSrc:""},{id:"4",fullName:"Yehuda",age:40,avaSrc:""},{id:"5",fullName:"Bill",age:60,avaSrc:""}]};t.n(r).a.render(n.a.createElement(d,{tableData:m}),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.b974f526.chunk.js.map
(this["webpackJsonpcab230-assignment1"]=this["webpackJsonpcab230-assignment1"]||[]).push([[0],{200:function(e,t,c){},201:function(e,t,c){},202:function(e,t,c){},203:function(e,t,c){},204:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(12),s=c.n(n),r=(c(83),c(84),c(5)),l=c(8),o=c(10),i=Object(a.createContext)({}),j=c(22),u=c(205),d=c(218),b=c(206),m=c(207),h=c(208),O=c(209),f=(c(28),c(29),c(23)),x=(c(92),c(1));var g=function(e){var t=Object(a.useState)("".concat(e.currentCountry)),c=Object(r.a)(t,2),n=c[0],s=c[1],l=Object(a.useState)("".concat(e.currentYear)),o=Object(r.a)(l,2),i=o[0],j=o[1],u=Object(a.useState)("All"),d=Object(r.a)(u,2),b=d[0],m=d[1],h=Object(a.useState)([]),O=Object(r.a)(h,2),g=O[0],p=O[1],v=Object(a.useState)(!1),y=Object(r.a)(v,2),N=y[0],S=y[1],w=Object(a.useState)(!1),C=Object(r.a)(w,2),k=C[0],A=C[1],L=Object(a.useState)(!1),E=Object(r.a)(L,2),R=E[0],F=E[1],D=Object(a.useState)(!1),H=Object(r.a)(D,2),I=H[0],Y=H[1],T=Object(a.useState)(e.defaultLimitOptions),P=Object(r.a)(T,2),B=P[0],z=P[1],G=Object(a.useState)(e.rowData.length),U=Object(r.a)(G,2),q=U[0],J=U[1],W=[{label:"2020",value:"2020"},{label:"2019",value:"2019"},{label:"2018",value:"2018"},{label:"2017",value:"2017"},{label:"2016",value:"2016"},{label:"2015",value:"2015"}];function M(){S(!N)}function V(){A(!k)}function K(){F(!R)}return Object(a.useEffect)((function(){fetch("http://131.181.190.87:3000/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{label:e,value:e}}));t.unshift({label:"All",value:"All"}),p(t)}))}),[]),e.showAllYears&&W.unshift({label:"All",value:"All"}),Object(a.useEffect)((function(){var e=localStorage.getItem("token"),t={accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)},c="http://131.181.190.87:3000/factors/".concat(i);fetch(c,{headers:t}).then((function(e){return e.json()})).then((function(e){J(e.length)}))}),[i]),Object(a.useEffect)((function(){z(e.defaultLimitOptions)}),[e.defaultLimitOptions]),Object(a.useEffect)((function(){var e=Array.from({length:q},(function(e,t){return t+1}));e.reverse();var t=e.map((function(e){return{label:e,value:e}}));t.unshift({label:"All",value:"All"}),z(t)}),[i,q]),Object(a.useEffect)((function(){Y("All"!==n)}),[n]),Object(x.jsx)("div",{className:"search-bar",children:Object(x.jsxs)("div",{className:"row my-4 d-flex mt-3",children:[Object(x.jsxs)("div",{className:"col-lg-3 col-sm-12 d-flex my-2 my-lg-0",children:[Object(x.jsx)("p",{class:"my-2 mr-3 d-none d-sm-block",children:"Country:"}),Object(x.jsx)(f.a,{options:g,className:"react-select-country",value:g.filter((function(e){return e.label===n})),isClearable:N,onChange:function(t){null!==t?"All"===t.value?(e.onSubmitCountry(""),s("All"),N&&M()):(e.onSubmitCountry(t.value),s(t.value),N||M()):(e.onSubmitCountry(""),s("All"),M())}})]}),Object(x.jsxs)("div",{className:"col-lg-3 col-sm-12 d-flex my-2 my-lg-0",children:[Object(x.jsx)("p",{class:"my-2 mx-3 d-none d-sm-block",children:"Year:"}),Object(x.jsx)(f.a,{options:W,className:"react-select-small",value:W.filter((function(e){return e.label===i})),isClearable:k,onChange:function(t){null!==t?"All"===t.value?(e.onSubmitYear(""),j("All"),k||V()):(e.onSubmitYear(t.value),j(t.value),k||V()):("All"===n?(e.onSubmitCountry(""),e.onSubmitYear("2020")):(e.onSubmitCountry(n),e.onSubmitYear("2020")),j("2020"),V())}})]}),Object(x.jsx)("div",{className:"col-lg-3 col-sm-12 d-flex my-2 my-lg-0",children:e.showLimit?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("p",{class:"my-2 mx-3 d-none d-sm-block",children:"Limit: "}),Object(x.jsx)(f.a,{options:B,className:"react-select-small",value:B.filter((function(e){return e.label===b})),isClearable:R,isDisabled:I,onChange:function(t){null!==t?"All"===t.value?(e.onSubmitLimit("200"),m("All"),R&&K()):(e.onSubmitLimit(t.value),m(t.value),R||K()):(e.onSubmitLimit("200"),m("All"),K())}})]}):null})]})})},p=c(76);var v=function(e){var t=Object(a.useState)({}),c=Object(r.a)(t,2),n=c[0],s=c[1],l=["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)"];return Object(a.useEffect)((function(){s({chartData:{labels:e.yAxis,datasets:[{label:e.category,data:e.xAxis,backgroundColor:l}]}})}),[e.countryNames,e.scores,e.category,l]),Object(x.jsx)("div",{className:"chart container my-5",children:Object(x.jsx)(p.HorizontalBar,{data:n.chartData,options:{responsive:!0,title:{text:"".concat(e.category," Scores ").concat(e.label),display:!0},scales:{xAxes:[{maxBarThickness:100}]}}})})};function y(e,t,c,n){var s=Object(a.useState)(!0),l=Object(r.a)(s,2),o=l[0],i=l[1],j=Object(a.useState)([]),u=Object(r.a)(j,2),d=u[0],b=u[1],m=Object(a.useState)(null),h=Object(r.a)(m,2),O=h[0],f=h[1];return Object(a.useEffect)((function(){"rankings"===e?function(e,t){var c="http://131.181.190.87:3000/rankings?year=".concat(t,"&country=").concat(e);return fetch(c).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{rank:e.rank,country:e.country,score:e.score,year:e.year}}))}))}(t,c).then((function(e){b(e),i(!1)})).catch((function(e){f(e),i(!1)})):"factors"===e&&function(e,t,c){var a=localStorage.getItem("token"),n={accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)},s="http://131.181.190.87:3000/factors/".concat(t,"?limit=").concat(c,"&country=").concat(e);return fetch(s,{headers:n}).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{rank:e.rank,country:e.country,score:e.score,economy:e.economy,family:e.family,health:e.health,freedom:e.freedom,generosity:e.generosity,trust:e.trust}}))}))}(t,c,n).then((function(e){b(e),i(!1)})).catch((function(e){f(e),i(!1)}))}),[e,t,c,n]),{loading:o,rowData:d,error:O}}var N=function(){document.title="Euphorus | Happiness Rankings";var e=Object(o.g)(),t=Object(a.useState)(""),c=Object(r.a)(t,2),n=c[0],s=c[1],l=Object(a.useState)("2020"),i=Object(r.a)(l,2),f=i[0],p=i[1],N=y("rankings",n,f),S=N.loading,w=N.rowData,C=N.error,k=Object(a.useState)(""),A=Object(r.a)(k,2),L=A[0],E=A[1],R=Object(a.useState)(!1),F=Object(r.a)(R,2),D=F[0],H=F[1],I=function(){return H(!D)},Y=[],T=[];if(w.length>15)if(""===f)Y=[],T=[];else for(var P=0;P<15;P++)Y.push(w[P].country),T.push(parseFloat(w[P].score));return Object(a.useEffect)((function(){0===w.length&&!1===S&&H(!0)}),[S,w]),Object(a.useEffect)((function(){E(""===n?""===f?"Results for countries across all years":"Results for countries in ".concat(f):""===f?"Results for ".concat(n," for all years"):"Result for ".concat(n," in ").concat(f))}),[w]),Object(x.jsxs)("div",{children:[Object(x.jsx)(g,{onSubmitCountry:s,onSubmitYear:p,currentYear:f,currentCountry:"All",showAllYears:!0,rowData:w,showLimit:!1}),null===C?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{children:[Object(x.jsx)(u.a,{className:"bg-secondary-blue",children:w.length})," ",L]}),Object(x.jsx)("div",{className:"ag-theme-alpine mx-auto ",style:{height:"100%"},children:Object(x.jsx)(j.AgGridReact,{columnDefs:[{headerName:"Rank",field:"rank",sortable:!0},{headerName:"Country",field:"country"},{headerName:"Score",field:"score"},{headerName:"Year",field:"year"}],rowData:w,pagination:!0,paginationPageSize:40,defaultColDef:{flex:1,minWidth:100},domLayout:"autoHeight",onRowClicked:function(t){return e.push({pathname:"/details",search:"?country=".concat(t.data.country),state:{data:w}})}})}),Y.length>0?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h3",{className:"text-center mt-5",children:["Top 15 Happiest Countries ",f]}),Object(x.jsx)(v,{category:"Happiness Index",yAxis:Y,xAxis:T,label:f})]}):null,Object(x.jsxs)(d.a,{isOpen:D,toggle:I,className:"",children:[Object(x.jsx)(b.a,{toggle:I,children:"Error"}),Object(x.jsxs)(m.a,{children:["Could not find data for '",n,"' in year '",f,"'"]}),Object(x.jsxs)(h.a,{children:[Object(x.jsx)(O.a,{color:"primary",onClick:function(){I()},children:"Ok"})," "]})]})]}):e.push("/503error")]})},S=c(210),w=c.p+"static/media/header-img.8820eb51.svg";var C=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(S.a,{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row align-items-center",children:[Object(x.jsxs)("div",{className:"col-md-6 text-center text-md-left",children:[Object(x.jsx)("h1",{className:"jumbotron-heading",children:"Country Happiness Rankings"}),Object(x.jsx)("p",{className:"lead",children:"Euphorus measures what matters - sustainable wellbeing for all. Browse the below data and view by country."}),Object(x.jsx)(O.a,{className:"btn-rounded",color:"primary",children:"Learn More"})]}),Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsx)("img",{className:"img-fluid",src:w,alt:"Two people running through field"})})]})})}),Object(x.jsx)("section",{className:"container py-1 px-3 rounded bg-light-grey",children:Object(x.jsx)(N,{})})]})};c(200);var k=function(){document.title="Euphorus | Happiness Factors";var e=Object(o.g)(),t=Object(a.useState)(""),c=Object(r.a)(t,2),n=c[0],s=c[1],l=Object(a.useState)("2020"),i=Object(r.a)(l,2),p=i[0],N=i[1],S=Object(a.useState)([]),w=Object(r.a)(S,2),C=w[0],k=w[1],A=Object(a.useState)(200),L=Object(r.a)(A,2),E=L[0],R=L[1],F=y("factors",n,p,E),D=F.loading,H=F.rowData,I=F.error,Y=Object(a.useState)(""),T=Object(r.a)(Y,2),P=T[0],B=T[1],z=Object(a.useState)("Economy"),G=Object(r.a)(z,2),U=G[0],q=G[1],J=Object(a.useState)([]),W=Object(r.a)(J,2),M=W[0],V=W[1],K=Object(a.useState)(!1),Q=Object(r.a)(K,2),X=Q[0],Z=Q[1],$=function(){return Z(!X)},_=[{label:"Economy",value:"Economy"},{label:"Family",value:"Family"},{label:"Health",value:"Health"},{label:"Freedom",value:"Freedom"},{label:"Generosity",value:"Generosity"},{label:"Trust",value:"Trust"}],ee=[],te=[],ce=[],ae=[],ne=[],se=[],re=[];if(H.length>=15&&E>=15){for(var le=0;le<15;le++)ee.push(H[le].country);for(var oe=0;oe<15;oe++)te.push(H[oe].economy),ce.push(H[oe].family),ne.push(H[oe].freedom),ae.push(H[oe].health),se.push(H[oe].generosity),re.push(H[oe].trust)}return Object(a.useEffect)((function(){if(!1===D){V(te);var e=Array.from({length:H.length},(function(e,t){return t+1}));e.reverse();var t=e.map((function(e){return{label:e,value:e}}));t.unshift({label:"All",value:"All"}),k(t)}}),[D]),Object(a.useEffect)((function(){0===H.length&&!1===D&&Z(!0)}),[D,H]),Object(a.useEffect)((function(){B(""===n?"Results for countries in ".concat(p):"Result for ".concat(n," in ").concat(p))}),[H]),Object(x.jsxs)("div",{children:[Object(x.jsx)(g,{onSubmitCountry:s,onSubmitYear:N,onSubmitLimit:R,currentYear:p,currentCountry:"All",showAllYears:!1,rowData:H,showLimit:!0,defaultLimitOptions:C}),null===I?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{children:[Object(x.jsx)(u.a,{className:"bg-secondary-blue",children:H.length})," ",P]}),Object(x.jsx)("div",{className:"ag-theme-alpine mx-auto ",style:{height:"100%"},children:Object(x.jsx)(j.AgGridReact,{columnDefs:[{headerName:"Rank",field:"rank",sortable:!0},{headerName:"Country",field:"country"},{headerName:"Score",field:"score"},{headerName:"Economy",field:"economy"},{headerName:"Family",field:"family"},{headerName:"Health",field:"health"},{headerName:"Freedom",field:"freedom"},{headerName:"Generosity",field:"generosity"},{headerName:"Trust",field:"trust"}],rowData:H,pagination:!0,paginationPageSize:40,defaultColDef:{flex:1,minWidth:100},domLayout:"autoHeight"})}),ee.length>0?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h3",{className:"text-center mt-5",children:["Happiness Factors Comparison ",p]}),Object(x.jsx)("h4",{className:"text-center text-muted",children:"(Top 15 Countries)"}),Object(x.jsx)(f.a,{options:_,className:"react-select-factor",value:_.filter((function(e){return e.label===U})),onChange:function(e){"Economy"===e.value?V(te):"Family"===e.value?V(ce):"Health"===e.value?V(ae):"Freedom"===e.value?V(ne):"Family"===e.value?V(se):"Trust"===e.value&&V(re),q(e.value)}}),Object(x.jsx)(v,{category:U,yAxis:ee,xAxis:M,label:p})]}):null,Object(x.jsxs)(d.a,{isOpen:X,toggle:$,className:"",children:[Object(x.jsx)(b.a,{toggle:$,children:"Error"}),Object(x.jsxs)(m.a,{children:["Could not find data for '",n,"' in year '",p,"'"]}),Object(x.jsxs)(h.a,{children:[Object(x.jsx)(O.a,{color:"primary",onClick:function(){$()},children:"Ok"})," "]})]})]}):e.push("/503error")]})},A=c.p+"static/media/factors.70d77bab.svg";var L=Object(o.i)((function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(S.a,{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row align-items-center",children:[Object(x.jsxs)("div",{className:"col-md-6 text-center text-md-left",children:[Object(x.jsx)("h1",{className:"jumbotron-heading",children:"Country Happiness Factors"}),Object(x.jsx)("p",{className:"lead",children:"Explore happiness factors by country."}),Object(x.jsx)(O.a,{className:"btn-rounded",color:"primary",children:"Learn More"})]}),Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsx)("img",{className:"img-fluid",src:A,alt:"Location markers on globe"})})]})})}),Object(x.jsx)("section",{className:"container py-1 px-3 rounded bg-light-grey",children:Object(x.jsx)(k,{})})]})})),E=c(211),R=c.p+"static/media/login.fc2f83c9.svg";var F=function(e){document.title="Euphorus | Login";var t=Object(a.useState)(""),c=Object(r.a)(t,2),n=c[0],s=c[1],j=Object(a.useState)(""),u=Object(r.a)(j,2),d=u[0],b=u[1],m=Object(a.useState)(e.location.state.msg),h=Object(r.a)(m,2),O=h[0],f=h[1],g=Object(a.useContext)(i),p=(g.loggedIn,g.setLoggedIn),v=Object(o.g)();return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row mt-5",children:[Object(x.jsxs)("div",{className:"col-md-6 my-3",children:[Object(x.jsx)("h2",{children:"Login"}),""!==O&&"Login Successful!"!==O?Object(x.jsx)(E.a,{color:"danger",children:O}):"Login Successful!"===O?Object(x.jsx)(E.a,{color:"success",children:O}):null,Object(x.jsxs)("form",{className:"form mt-4",children:[Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{id:"email",type:"text",name:"email",placeholder:"Email Address",className:"form-control",onChange:function(e){return s(e.target.value)},required:!0})}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("input",{id:"password",type:"password",name:"password",placeholder:"Password",className:"form-control",onChange:function(e){return b(e.target.value)},required:!0}),Object(x.jsx)("input",{type:"submit",id:"submit",className:"btn btn-primary my-3",name:"submit",value:"Login",onClick:function(e){e.preventDefault(),function(){var e="".concat("http://131.181.190.87:3000","/user/login");fetch(e,{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:n,password:d})}).then((function(e){return e.json()})).then((function(e){""!==e.message&&void 0!==e.message?f(e.message):(f("Login Successful!"),p(!0),localStorage.setItem("token",e.token),v.push("/factors"))}))}()}})]})]}),Object(x.jsxs)("p",{className:"mt-4",children:["No Account Yet? ",Object(x.jsx)(l.b,{to:"/register",children:"Register here"})]})]}),Object(x.jsx)("div",{className:"col-md-6 my-3",children:Object(x.jsx)("img",{className:"img-fluid",src:R,alt:"Laptop with lock on the screen"})})]})})},D=c.p+"static/media/register.63e33ab4.svg";var H=function(){document.title="Euphorus | Register";var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),o=Object(r.a)(s,2),i=o[0],j=o[1],u=Object(a.useState)(""),d=Object(r.a)(u,2),b=d[0],m=d[1];return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row mt-5",children:[Object(x.jsxs)("div",{className:"col-md-6 my-3",children:[Object(x.jsx)("h2",{children:"Register"}),""!==b&&"User created"!==b?Object(x.jsx)(E.a,{color:"danger",children:b}):"User created"===b?Object(x.jsxs)(E.a,{color:"success",children:["Registration Successful! Click"," ",Object(x.jsx)(l.b,{to:{pathname:"/login",state:{msg:""}},children:"here"})," ","to login"]}):null,Object(x.jsxs)("form",{className:"form mt-4",children:[Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{id:"email",type:"text",name:"email",placeholder:"Email Address",className:"form-control",onChange:function(e){return n(e.target.value)},required:!0})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{id:"password",type:"password",name:"password",placeholder:"Password",className:"form-control",onChange:function(e){return j(e.target.value)},required:!0})}),Object(x.jsx)("input",{type:"submit",id:"submit",className:"btn btn-primary",name:"submit",value:"Register",onClick:function(e){e.preventDefault(),function(){var e="".concat("http://131.181.190.87:3000","/user/register");fetch(e,{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:c,password:i})}).then((function(e){return e.json()})).then((function(e){console.log(e),m(e.message)}))}()}})]})]}),Object(x.jsx)("div",{className:"col-md-6 my-3",children:Object(x.jsx)("img",{className:"img-fluid",src:D,alt:"Person putting password into form"})})]})})};var I=function(e){for(var t=Object(o.g)(),c=new URLSearchParams(Object(o.h)().search).get("country"),a=y("rankings",c,""),n=a.loading,s=a.rowData,r=(a.error,[]),l=0;l<s.length;l++)r.push(parseFloat(s[l].score));return Object(x.jsxs)("div",{className:"container my-5",children:[Object(x.jsx)("h2",{children:c}),Object(x.jsx)("div",{className:"row mt-5 mb-3",children:!1===n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"col-12 col-lg-6",children:Object(x.jsx)("div",{className:"ag-theme-alpine mx-auto ",style:{height:"100%"},children:Object(x.jsx)(j.AgGridReact,{columnDefs:[{headerName:"Rank",field:"rank",sortable:!0},{headerName:"Country",field:"country"},{headerName:"Score",field:"score"},{headerName:"Year",field:"year"}],rowData:s,pagination:!0,paginationPageSize:40,defaultColDef:{flex:1,minWidth:100},domLayout:"autoHeight"})})}),Object(x.jsx)("div",{className:"col-12 col-lg-6",children:Object(x.jsx)(v,{category:"Happiness Index",yAxis:[2020,2019,2018,2017,2016,2015],xAxis:r,label:c})})]}):Object(x.jsx)("h3",{className:"mx-auto",children:"Loading..."})}),Object(x.jsx)(O.a,{color:"btn btn-rounded btn-secondary",size:"sm",className:"mt-3",onClick:function(){return t.goBack()},children:"Back"})]})},Y=c(212),T=c(213),P=c(214),B=c(215),z=c(216),G=c(217),U=c.p+"static/media/logo.3fd0af86.PNG";c(201);var q=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useContext)(i),o=s.loggedIn,j=s.setLoggedIn,u=Object(a.useState)(!1),f=Object(r.a)(u,2),g=f[0],p=f[1],v=function(){return p(!g)};return Object(x.jsx)("div",{className:"my-1",children:Object(x.jsxs)(Y.a,{children:[Object(x.jsxs)(T.a,{light:!0,expand:"md",children:[Object(x.jsx)(P.a,{children:Object(x.jsx)(l.b,{to:"/",children:Object(x.jsx)("img",{className:"logo",src:U,alt:"Euphorus Logo"})})}),Object(x.jsx)(B.a,{onClick:function(){return n(!c)}}),Object(x.jsx)(z.a,{isOpen:c,navbar:!0,children:Object(x.jsxs)(G.a,{className:"text-center ml-md-auto",navbar:!0,children:[Object(x.jsx)(l.b,{to:"/",children:Object(x.jsx)(O.a,{color:"link shadow-none",children:"Rankings"})}),Object(x.jsx)(l.b,{to:"/factors",children:Object(x.jsx)(O.a,{color:"link shadow-none",children:"Factors"})}),o?Object(x.jsx)(O.a,{color:"primary",className:"btn-rounded btn-primary w-100",onClick:v,children:"Logout"}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.b,{to:{pathname:"/login",state:{msg:""}},children:Object(x.jsx)(O.a,{color:"link shadow-none",children:"Login"})}),Object(x.jsx)(l.b,{to:"/register",children:Object(x.jsx)(O.a,{color:"primary",className:"btn-rounded btn-primary w-100",children:"Register"})})]})]})})]}),Object(x.jsxs)(d.a,{isOpen:g,toggle:v,className:"",children:[Object(x.jsx)(b.a,{toggle:v,children:"Logout"}),Object(x.jsx)(m.a,{children:"Are you sure you want to logout?"}),Object(x.jsxs)(h.a,{children:[Object(x.jsx)(O.a,{color:"primary",onClick:function(){v(),localStorage.removeItem("token"),j(!1)},children:"Logout"})," "]})]})]})})},J=c.p+"static/media/logowhite.d7bcc23b.png";c(202);var W=function(){return Object(x.jsx)("footer",{className:"mt-5 py-4",children:Object(x.jsx)("div",{className:"footer-main container text-center text-md-left",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(x.jsx)("img",{class:"logo",src:J,alt:"logo"})}),Object(x.jsx)("div",{className:"col-md-2 col-sm-12",children:Object(x.jsxs)("ul",{className:"list-unstyled",children:[Object(x.jsx)("li",{className:"my-3",children:Object(x.jsx)(l.b,{to:"/",className:"text-white",children:"Rankings"})}),Object(x.jsx)("li",{className:"my-3",children:Object(x.jsx)(l.b,{to:"/factors",className:"text-white",children:"Factors"})}),Object(x.jsx)("li",{className:"my-3",children:Object(x.jsx)("a",{className:"text-white",href:"",children:"Blog"})})]})}),Object(x.jsx)("div",{className:"col-md-2 col-sm-12",children:Object(x.jsxs)("ul",{className:"list-unstyled",children:[Object(x.jsx)("li",{className:"my-3",children:Object(x.jsx)("a",{className:"text-white",href:"",children:"About Us"})}),Object(x.jsx)("li",{className:"my-3",children:Object(x.jsx)("a",{className:"text-white",href:"",children:"Use Cases"})}),Object(x.jsx)("li",{className:"my-2",children:Object(x.jsx)("a",{className:"text-white",href:"",children:"API"})})]})}),Object(x.jsx)("div",{className:"col-md-4 col-sm-12 ",children:Object(x.jsxs)("div",{className:"d-flex flex-column align-items-md-end",children:[Object(x.jsx)("div",{class:"btn-container",children:Object(x.jsx)(O.a,{className:"btn-rounded btn-secondary my-3",children:"View API"})}),Object(x.jsx)("p",{className:"text-white mt-2",children:"\xa9 Euphorus. All Rights Reserved"})]})})]})})})},M=(c(203),c(50)),V=c(78);var K=Object(o.i)((function(e){var t=e.isAuth,c=e.component,a=Object(V.a)(e,["isAuth","component"]);return Object(x.jsx)(o.b,Object(M.a)(Object(M.a)({},a),{},{render:function(e){return t?Object(x.jsx)(c,{}):Object(x.jsx)(o.a,{to:{pathname:"/login",state:{from:e.location,msg:"You must be logged in to view this page!"}}})}}))})),Q=c.p+"static/media/pagenotfound.9ba286cb.svg";var X=function(){return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row align-items-center my-5",children:[Object(x.jsxs)("div",{className:"col-md-6",children:[Object(x.jsx)("h2",{children:"Oh No! Error 404."}),Object(x.jsx)("p",{children:"The page your looking for could not be found"}),Object(x.jsx)(l.b,{to:"/",children:Object(x.jsx)(O.a,{className:"btn-rounded",children:"Back to Home"})})]}),Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsx)("img",{className:"img-fluid",src:Q,alt:"pagenotfound"})})]})})},Z=c.p+"static/media/503error.0b6dc65a.svg";var $=function(){return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row align-items-center my-5",children:[Object(x.jsxs)("div",{className:"col-md-6",children:[Object(x.jsx)("h2",{children:"Internal Server Error"}),Object(x.jsx)("p",{children:"There was a problem fetching the country data"}),Object(x.jsx)(l.b,{to:"/",children:Object(x.jsx)(O.a,{className:"btn-rounded",children:"Back to Home"})})]}),Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsx)("img",{className:"img-fluid",src:Z,alt:"pagenotfound"})})]})})};var _=function(){var e=localStorage.getItem("token"),t=Object(a.useState)(!0),c=Object(r.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){s(""!==e&&void 0!==e&&null!==e)}),[e]),Object(x.jsx)(i.Provider,{value:{loggedIn:n,setLoggedIn:s},children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(q,{}),Object(x.jsxs)(o.d,{children:[Object(x.jsx)(o.b,{path:"/",exact:!0,component:C}),Object(x.jsx)(K,{path:"/factors",component:L,isAuth:n}),Object(x.jsx)(o.b,{path:"/login",component:F}),Object(x.jsx)(o.b,{path:"/register",component:H}),Object(x.jsx)(o.b,{path:"/503error",component:$}),Object(x.jsx)(o.b,{path:"/details",component:I}),Object(x.jsx)(o.b,{component:X})]}),Object(x.jsx)(W,{})]})})};s.a.render(Object(x.jsx)(_,{}),document.getElementById("root"))},83:function(e,t,c){},92:function(e,t,c){}},[[204,1,2]]]);
//# sourceMappingURL=main.32750624.chunk.js.map
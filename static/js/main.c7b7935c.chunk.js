(this["webpackJsonpcovid19-indonesia"]=this["webpackJsonpcovid19-indonesia"]||[]).push([[0],{180:function(e,t,a){},299:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n,r=a(5),c=a(0),i=a.n(c),s=a(12),o=a.n(s),l=(a(180),a(24)),u=a.n(l),d=a(18),b=a(47),j=a(36),p=a(7),h=a(309),g=a(351),f=a(76),v=a(301),O=Object(v.a)({container:{width:"85%",marginTop:"3rem"}})((function(e){var t=e.data,a=e.classes,n=e.indo;if(!t)return null;var c=t.positif,i=t.dirawat,s=t.sembuh,o=t.meninggal,l=t.kasus;return Object(r.jsx)("section",{className:a.container,children:Object(r.jsx)(f.Bar,{data:{labels:n?["Kasus","Dirawat","Sembuh","Meninggal"]:["Cases","In Recovery","Recovered","Deaths"],datasets:[{label:n?"Orang":"People",data:[c||l,i,s,o],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(255, 0, 0, 1)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(255, 0, 0, 1)"]}]}})})})),x=a(19),m=a(352),C=a(353),w=a(305),k=a(144),y=a.n(k),D=function(e){return"@media(max-width:".concat({xs:"576.98px",sm:"767.98px",md:"991.98px)",lg:"1199.98px"}[e],")")},N={Card:{backgroundColor:function(e){return e.bgColor?e.bgColor:"white"},color:function(e){return e.color?e.color:"black"}},CardFont:(n={fontSize:"1.9rem"},Object(x.a)(n,D("md"),{fontSize:"1.7rem"}),Object(x.a)(n,D("xs"),{fontSize:"1.3rem"}),n)},S=Object(v.a)(N)((function(e){var t=e.type,a=e.total,n=e.classes;e.color,e.bgColor;return Object(r.jsx)(g.a,{item:!0,xs:5,sm:5,md:3,lg:2,children:Object(r.jsx)(m.a,{className:n.Card,children:Object(r.jsxs)(C.a,{children:[Object(r.jsx)(w.a,{variant:"h4",className:n.CardFont,children:t}),Object(r.jsx)(w.a,{variant:"h4",className:n.CardFont,children:Object(r.jsx)(y.a,{start:0,end:parseInt(a),duration:5,separator:","})})]})})})})),I=function(e){var t=e.provinces,a=e.selected,n=e.indo,i=Object(c.useState)(""),s=Object(p.a)(i,2),o=s[0],l=s[1];if(Object(c.useEffect)((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"INDONESIA",a=t.find((function(t){return t.provinsi===e}));l(a)}(a)}),[t,a]),o){var u=o.positif,d=o.dirawat,b=o.sembuh,j=o.meninggal,h=o.kasus;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(g.a,{container:!0,spacing:2,justify:"center",children:[Object(r.jsx)(S,{type:n?"Kasus":"Cases",total:u||h,color:"white",bgColor:"rgba(230,0,0,0.7)"}),Object(r.jsx)(S,{type:n?"Dirawat":"In Recovery",total:d,color:"white",bgColor:"rgba(0,0,200,0.7)"}),Object(r.jsx)(S,{type:n?"Sembuh":"Recovered",total:b,color:"white",bgColor:"rgba(0,170,0,0.9)"}),Object(r.jsx)(S,{type:n?"Meninggal":"Deaths",total:j,color:"white",bgColor:"rgba(170,0,0,0.9)"})]}),Object(r.jsx)(O,{data:o,indo:n})]})}return Object(r.jsx)(S,{type:"Loading Data Please Wait",total:"Total",lastUpdate:"LastUpdate"})},A=a(66),M=a(112),P=a(147),R=function(e){var t=e.data,a=e.changeProvince,n=e.indo;if(!t)return null;var c=t.map((function(e,t){return Object(r.jsx)("option",{value:e.provinsi,children:e.provinsi},t)}));return Object(r.jsxs)(A.a,{margin:"normal",children:[Object(r.jsx)(M.a,{htmlFor:"select",children:n?"Pilih Provinsi":"Select Province"}),Object(r.jsx)(P.a,{onChange:a,id:"select",children:c})]})},F=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Des"],E=function(e){var t=new Date(e);return"".concat(t.getDate()," ").concat(F[t.getMonth()]," ").concat(t.getFullYear())},K=a(88),L=a.n(K),T=function(){var e=Object(j.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(j.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(j.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian");case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),z={container:Object(x.a)({marginTop:"2rem",width:"85%"},D("xs"),{display:"none"})},_=Object(v.a)(z)((function(e){var t=e.classes,a=e.indo,n=Object(c.useState)([]),i=Object(p.a)(n,2),s=i[0],o=i[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),s.length?Object(r.jsxs)("section",{className:t.container,children:[Object(r.jsx)("h2",{children:a?"Grafik Kasus Kumulatif":"Cumulative Cases chart"}),Object(r.jsx)(f.Line,{data:{labels:s.map((function(e){return E(e.tanggal)})),datasets:[{label:a?"Kasus":"Case",data:s.map((function(e){return e.positif_kumulatif})),backgroundColor:["rgba(230, 105, 180, 0)"],borderColor:"rgba(230, 105, 180, 0.7)",fill:!0},{label:a?"Sembuh":"Recovered ",data:s.map((function(e){return e.sembuh_kumulatif})),backgroundColor:["rgba(0, 250 , 0, 0)"],borderColor:"rgba(0, 250 , 0, 0.7)",fill:!0},{label:a?"Dirawat":"In Recovery ",data:s.map((function(e){return e.dirawat_kumulatif})),backgroundColor:["rgba(0 , 0, 200, 0)"],borderColor:"rgba(0,0,200,0.7)",fill:!0},{label:a?"Meninggal":"Deaths ",data:s.map((function(e){return e.meninggal_kumulatif})),backgroundColor:["rgba(255 , 0, 0, 0)"],borderColor:"rgba(255,0,0,0.7)",fill:!0}]}})]}):null})),G=a(28),B=a(355),V=a(359),H=a(358),W=a(354),Y=a(356),q=a(357),Q=a(107),X=Object(G.a)({table:Object(x.a)({width:"85%",marginTop:"2.5rem",display:"none"},D("xs"),{display:"block"})});function Z(e){var t=e.provinsis,a=e.indo,n=X();return t?Object(r.jsx)("section",{className:n.table,children:Object(r.jsx)(W.a,{component:Q.a,children:Object(r.jsxs)(B.a,{"aria-label":"Covid19 cases table",children:[Object(r.jsx)(Y.a,{children:Object(r.jsxs)(q.a,{children:[Object(r.jsx)(H.a,{children:"Province"}),Object(r.jsx)(H.a,{align:"center",children:a?"Kasus":"Cases"}),Object(r.jsx)(H.a,{align:"center",children:a?"Dirawat":"In Recovery"}),Object(r.jsx)(H.a,{align:"center",children:a?"Sembuh":"Recovered"}),Object(r.jsx)(H.a,{align:"center",children:a?"Meninggal":"Deaths"})]})}),Object(r.jsx)(V.a,{children:t.map((function(e){return Object(r.jsxs)(q.a,{children:[Object(r.jsx)(H.a,{component:"th",scope:"row",children:e.provinsi}),Object(r.jsx)(H.a,{align:"center",children:e.kasus||e.positif}),Object(r.jsx)(H.a,{align:"center",children:e.dirawat}),Object(r.jsx)(H.a,{align:"center",children:e.sembuh}),Object(r.jsx)(H.a,{align:"center",children:e.meninggal})]},e.provinsi)}))})]})})}):null}var $=a(148),ee={DataGrid:Object(x.a)({minHeight:500,width:"85%",marginTop:"2.5rem"},D("xs"),{display:"none"})};var te=Object(v.a)(ee)((function(e){var t=e.provinsis,a=e.classes,n=e.indo,i=[{field:"provinsi",headerName:n?"Provinsi":"Province",flex:1.5,headerAlign:"center",align:"center"},{field:"kasus",headerName:n?"Kasus":"Cases",flex:1,type:"number",headerAlign:"center",align:"center",sort:"asc"},{field:"meninggal",headerName:n?"Meninggal":"Deaths",flex:1,type:"number",align:"center",headerAlign:"center"},{field:"sembuh",headerName:n?"Sembuh":"Recovered",type:"string",flex:1,headerAlign:"center",align:"center"},{field:"dirawat",headerName:n?"Dirawat":"In Recovery",flex:1,type:"number",align:"center",headerAlign:"center"}],s=c.useMemo((function(){return t?t.filter((function(e){return"INDONESIA"!==e.provinsi})):null}),[t]);return Object(r.jsxs)("div",{className:a.DataGrid,children:[Object(r.jsx)("p",{children:n?"Tekan header pada tabel untuk mengurutkan baris":"Click on header to sort"}),Object(r.jsx)($.a,{rows:s,columns:i,pageSize:s.length,checkboxSelection:!1,disableColumnMenu:!0,disableColumnReorder:!0,hideFooterPagination:!0,hideFooter:!0})]})})),ae=function(e){var t=i.a.useState(e),a=Object(p.a)(t,2),n=a[0],r=a[1];return[n,function(){return r(!n)}]};a(299);var ne=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),a=t[0],n=t[1],i=ae(!0),s=Object(p.a)(i,2),o=s[0],l=s[1];if(Object(c.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:return t=e.sent,e.next=6,U();case 6:a=e.sent,r=a.map((function(e,t){return Object(b.a)(Object(b.a)({},e),{},{id:t})})),n({provinsi:[Object(b.a)(Object(b.a)({},t),{},{provinsi:"INDONESIA",id:99})].concat(Object(d.a)(r)),lastUpdate:t.lastUpdate}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),n({error:"Something went wrong, please check your connection and try again later"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]),a.error)return Object(r.jsx)("h1",{style:{textAlign:"center"},children:a.error});if(!a.provinsi)return Object(r.jsx)("h1",{style:{textAlign:"center"},children:"Loading Data......"});var g=a.provinsi,f=a.lastUpdate,v=a.selected;return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("div",{className:"Language",children:[Object(r.jsx)("span",{children:o?"ID":"EN"}),Object(r.jsx)(h.a,{checked:o,onChange:l,color:"default"})]}),Object(r.jsx)("h2",{children:o?"Kasus COVID-19 Indonesia":"Indonesia COVID-19 Cases"}),Object(r.jsx)(R,{data:g,changeProvince:function(e){n(Object(b.a)(Object(b.a)({},a),{},{selected:e.target.value}))},indo:o}),Object(r.jsx)("p",{children:"".concat(o?"Diperbarui":"Last Update",": ").concat(E(f))}),Object(r.jsx)(I,{provinces:g,selected:v,indo:o}),Object(r.jsx)(_,{indo:o}),Object(r.jsx)(te,{provinsis:g,indo:o}),Object(r.jsx)(Z,{provinsis:g,indo:o})]})};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(ne,{})}),document.getElementById("root"))}},[[300,1,2]]]);
//# sourceMappingURL=main.c7b7935c.chunk.js.map
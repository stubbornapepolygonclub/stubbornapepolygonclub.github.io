(this.webpackJsonpthe_stripes_nft_dapp=this.webpackJsonpthe_stripes_nft_dapp||[]).push([[0],{234:function(t,n){},258:function(t,n){},260:function(t,n){},337:function(t,n){},339:function(t,n){},349:function(t,n){},351:function(t,n){},376:function(t,n){},382:function(t,n){},395:function(t,n){},418:function(t,n){},493:function(t,n,e){},494:function(t,n,e){"use strict";e.r(n);var c,r,a,o,i,s,l,d,u,j,p,x,b,h,f,O,g=e(1),y=e(79),C=e.n(y),v=e(16),m=e.n(v),A=e(44),S=e(64),w=e(14),E=e(55),T=e(63),N=e.n(T),_=e(206),k=e.n(_),M=e(65),D=e(207),I=e(18),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},L),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},t),{},{account:n.payload.account});default:return t}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},K),{},{loading:!1,error:!0,errorMsg:n.payload});default:return t}},F=Object(M.b)({blockchain:R,data:U}),P=[D.a],W=Object(M.c)(M.a.apply(void 0,P)),z=Object(M.d)(F,W),Y=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},B=function(){return function(){var t=Object(A.a)(m.a.mark((function t(n){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,z.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=t.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n(Y("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},H=function(t){return{type:"CONNECTION_FAILED",payload:t}},G=function(t){return function(){var n=Object(A.a)(m.a.mark((function n(e){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:t}}),e(B());case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},Q=e(15),q=Q.a.div(c||(c=Object(w.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),X=Q.a.div(r||(r=Object(w.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=Q.a.div(a||(a=Object(w.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=Q.a.div(o||(o=Object(w.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(i||(i=Object(w.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(w.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var n=t.flex;return n||0}),(function(t){var n=t.fd;return n||"column"}),(function(t){var n=t.jc;return n||"flex-start"}),(function(t){var n=t.ai;return n||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),tt=Q.a.p(l||(l=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),nt=(Q.a.p(d||(d=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(u||(u=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),et=(Q.a.div(j||(j=Object(w.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(4)),ct=Q.a.button(p||(p=Object(w.a)(["\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding-left: 100px;\n  padding-right: 100px;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  margin-top: 40px;\n  font-weight: bold;\n  font-size: 20px;\n  color: var(--secondary-text);\n  cursor: pointer;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rt=Q.a.button(x||(x=Object(w.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: #6933e5;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),at=Q.a.div(b||(b=Object(w.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ot=Q.a.img(h||(h=Object(w.a)(["\n  width: 800px;\n  @media (min-width: 767px) {\n    width: 400px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),it=(Q.a.img(f||(f=Object(w.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 0px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 5%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),Q.a.a(O||(O=Object(w.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))));var st=function(){var t,n,e=Object(E.b)(),c=Object(E.c)((function(t){return t.blockchain})),r=Object(E.c)((function(t){return t.data})),a=Object(g.useState)(!1),o=Object(S.a)(a,2),i=o[0],s=o[1],l=Object(g.useState)("Click buy to mint your NFT."),d=Object(S.a)(l,2),u=d[0],j=d[1],p=Object(g.useState)(1),x=Object(S.a)(p,2),b=x[0],h=x[1],f=Object(g.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),O=Object(S.a)(f,2),y=O[0],C=O[1],v=function(){""!==c.account&&null!==c.smartContract&&e(B(c.account))},w=function(){var t=Object(A.a)(m.a.mark((function t(){var n,e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,C(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(g.useEffect)((function(){w()}),[]),Object(g.useEffect)((function(){v()}),[c.account]),Object(et.jsx)(q,{children:Object(et.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:y.SHOW_BACKGROUND?"config/images/bg.png":null,children:[Object(et.jsx)(ot,{alt:"logo",src:"config/images/logo.png"}),Object(et.jsx)(J,{}),Object(et.jsxs)(at,{flex:1,style:{padding:24},test:!0,children:[Object(et.jsx)($,{flex:1,jc:"center",ai:"center"}),Object(et.jsx)(Z,{}),Object(et.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"#ffffff00",padding:24,borderRadius:24,border:"0px dashed var(--secondary)",boxShadow:"0px 0px 0px 0px rgba(0,0,0,0.7)",align:"center"},children:[Object(et.jsxs)(tt,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",y.MAX_SUPPLY]}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(et.jsx)(it,{target:"_blank",href:y.SCAN_LINK,children:(t=y.CONTRACT_ADDRESS,n=15,t.length>n?"".concat(t.substring(0,n),"..."):t)})}),Object(et.jsx)(J,{}),Number(r.totalSupply)>=y.MAX_SUPPLY?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",y.NFT_NAME," on"]}),Object(et.jsx)(J,{}),Object(et.jsx)(it,{target:"_blank",href:y.MARKETPLACE_LINK,children:y.MARKETPLACE})]}):Object(et.jsxs)(et.Fragment,{children:[Object(et.jsxs)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",y.SYMBOL," costs ",y.DISPLAY_COST," ",y.NETWORK.SYMBOL,"."]}),Object(et.jsx)(X,{}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(et.jsx)(J,{}),""===c.account||null===c.smartContract?Object(et.jsxs)($,{ai:"center",jc:"center",children:[Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",y.NETWORK.NAME," network"]}),Object(et.jsx)(J,{}),Object(et.jsx)(ct,{onClick:function(t){t.preventDefault(),e(function(){var t=Object(A.a)(m.a.mark((function t(n){var e,c,r,a,o,i,s,l,d;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=t.sent,t.next=12,r.json();case 12:if(a=t.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){t.next=33;break}return N.a.setProvider(i),s=new k.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==a.NETWORK.ID?(d=new N.a(c,a.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(t){n(G(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(H("Change network to ".concat(a.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),n(H("Something went wrong."));case 31:t.next=34;break;case 33:n(H("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(n){return t.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(J,{}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(et.jsx)(V,{}),Object(et.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(et.jsx)(rt,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=b-1;t<1&&(t=1),h(t)}()},children:"-"}),Object(et.jsx)(V,{}),Object(et.jsx)(nt,{style:{textAlign:"center",fontSize:"30px",color:"var(--accent-text)"},children:b}),Object(et.jsx)(V,{}),Object(et.jsx)(rt,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=b+1;t>20&&(t=20),h(t)}()},children:"+"})]}),Object(et.jsx)(J,{}),Object(et.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(et.jsx)(ct,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=y.WEI_COST,n=y.GAS_LIMIT,r=String(t*b),a=String(n*b);console.log("Cost: ",r),console.log("Gas limit: ",a),j("Minting your ".concat(y.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(b).send({gasLimit:String(a),to:y.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(t){console.log(t),j("Sorry, something went wrong please try again later."),s(!1)})).then((function(t){console.log(t),j("WOW, the ".concat(y.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),e(B(c.account))}))}(),v()},children:i?"BUSY":"BUY"})})]})]}),Object(et.jsx)(V,{})]}),Object(et.jsx)(Z,{}),Object(et.jsx)($,{flex:1,jc:"center",ai:"center"})]}),Object(et.jsx)(V,{}),Object(et.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--primary-text)",fontSize:"12px"},children:["Please make sure you are connected to the right network (",y.NETWORK.NAME," Mainnet) and the correct address."]}),Object(et.jsx)(J,{}),Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--primary-text)",fontSize:"12px"},children:["We have set the gas limit to ",y.GAS_LIMIT," for the contract to successfully mint your NFT."]}),Object(et.jsx)(J,{}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--primary-text)",fontSize:"12px"},children:"We recommend that you don't lower the gas limit."})]})]})})},lt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,498)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;e(t),c(t),r(t),a(t),o(t)}))};e(493);C.a.render(Object(et.jsx)(E.a,{store:z,children:Object(et.jsx)(st,{})}),document.getElementById("root")),lt()}},[[494,1,2]]]);
//# sourceMappingURL=main.1d119a2b.chunk.js.map
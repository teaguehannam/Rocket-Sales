(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/atlasIV.6946bb65.png"},21:function(e,a,t){e.exports=t.p+"static/media/deltaVheavy.0ec2142b.png"},22:function(e,a,t){e.exports=t.p+"static/media/electron.0c8a5244.png"},23:function(e,a,t){e.exports=t.p+"static/media/falcon9.64df7a3c.png"},24:function(e,a,t){e.exports=t.p+"static/media/falconHeavy.1dbe3976.png"},25:function(e,a,t){e.exports=t.p+"static/media/protonM.5c056cb5.png"},28:function(e,a,t){e.exports=t(39)},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(11),r=t.n(c),o=t(4),m=t(2),s=t(7);var i=function(){return l.a.createElement("div",{className:"HeaderC"},l.a.createElement("div",{className:"Content"},l.a.createElement("div",{className:"Brand"},l.a.createElement(s.a,{to:"/"},"Rocketzon")),l.a.createElement("nav",null,l.a.createElement(s.a,{to:"/rockets"},"Rockets"),l.a.createElement(s.a,{to:"/account"},"Account"),l.a.createElement(s.a,{to:"/checkout"},l.a.createElement("span",{role:"img","aria-label":"Cart Logo"},"\ud83d\uded2")))))};var u=function(){return l.a.createElement("div",{className:"HomeC"},l.a.createElement("div",{className:"Intro"},l.a.createElement("h2",null,"Welcome!")),l.a.createElement("div",{className:"RocketPreview"},l.a.createElement("h4",null,l.a.createElement(s.a,{to:"/rockets"},"Go to Rockets tab to pick out a rocket.")),l.a.createElement("p",null,"- or -"),l.a.createElement("h4",null,l.a.createElement(s.a,{to:"/smart_shop"},"Use AI assistant to find your ideal rocket.")," ")),l.a.createElement("div",{className:"Account"},l.a.createElement("p",null,l.a.createElement(s.a,{to:"/account"},"Login/Register in Account tab"))),l.a.createElement("div",{className:"PS"},l.a.createElement("p",null,"*Website still being built*")))};var E=function(){return l.a.createElement("div",{className:"HomeC"},l.a.createElement("h3",null,"AI Questionaire"))},d=function(e){var a=Math.round((e.data.totalLaunches-e.data.failedLaunches)/e.data.totalLaunches*100);return l.a.createElement("div",{className:"SkuPreviewC"},l.a.createElement("div",{className:"Title"},l.a.createElement("h2",null,e.data.title),l.a.createElement("p",null,e.data.cost)),l.a.createElement("div",{className:"Preview"},l.a.createElement("img",{src:e.data.image,alt:"Rocket Thumbnail"})),l.a.createElement("div",{className:"Stats"},l.a.createElement("div",{className:"Box"},l.a.createElement("p",null,a,"% success Rate")),l.a.createElement("div",{className:"Box"},l.a.createElement("p",null,"Earth orbit:"),l.a.createElement("p",null,e.data.LEO)),e.data.GTO?l.a.createElement("div",{className:"Box"},l.a.createElement("p",null,"Geo transfer:"),l.a.createElement("p",null,e.data.GTO)):l.a.createElement("div",null),e.data.MTO?l.a.createElement("div",{className:"Box"},l.a.createElement("p",null,"Mars transfer:"),l.a.createElement("p",null,e.data.MTO)):l.a.createElement("div",null),e.data.PTO?l.a.createElement("div",{className:"Box"},l.a.createElement("p",null,"Pluto transfer:"),l.a.createElement("p",null,e.data.PTO)):l.a.createElement("div",null)))},p=t(20),v=t.n(p),h=t(21),b=t.n(h),f=t(22),O=t.n(f),L=t(23),g=t.n(L),N=t(24),k=t.n(N),T=t(25),x=t.n(T),y=[{title:"Atlas V",image:v.a,cost:"$110 million",LEO:"45,240 lbs",GTO:"19,620 lbs",totalLaunches:83,failedLaunches:0},{title:"Delta IV Heavy",image:b.a,cost:"$350 million",LEO:"63,470 lbs",GTO:"31,350 lbs",MTO:"18,000 lbs",totalLaunches:11,failedLaunches:0},{title:"Electron",image:O.a,cost:"$6 million",LEO:"660 lbs",totalLaunches:14,failedLaunches:2},{title:"Falcon 9",image:g.a,cost:"$60 million",LEO:"50,300 lbs",GTO:"18,300 lbs",MTO:"8,860 lbs",totalLaunches:93,failedLaunches:1},{title:"Falcon Heavy",image:k.a,cost:"$90 million",LEO:"140,700 lbs",GTO:"58,900 lbs",MTO:"37,700 lbs",PTO:"7,700 lbs",totalLaunches:3,failedLaunches:0},{title:"Proton-M",image:x.a,cost:"$65 million",LEO:"51,000 lbs",GTO:"15,260 lbs",totalLaunches:111,failedLaunches:9}];var A=function(){return l.a.createElement("div",{className:"RocketsC"},y.map((function(e,a){return l.a.createElement(d,{data:e,key:a})})))};var C=function(){return l.a.createElement("div",{className:"HomeC"},l.a.createElement("h3",null,"Account management page"))};var B=function(){return l.a.createElement("div",{className:"CheckoutC"},l.a.createElement("h3",null,"Shopping cart"))};var G=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,{path:"/",component:i}),l.a.createElement(m.a,{exact:!0,path:"/",component:u}),l.a.createElement(m.a,{exact:!0,path:"/smart_shop",component:E}),l.a.createElement(m.a,{path:"/rockets",component:A}),l.a.createElement(m.a,{path:"/account",component:C}),l.a.createElement(m.a,{path:"/checkout",component:B}))},M=t(13),P=Object(M.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,a){e.value+=a.payload}}}),R=P.actions,H=(R.increment,R.decrement,R.incrementByAmount,P.reducer),I=Object(M.a)({reducer:{counter:H}}),$=t(27),w=(t(38),Object(o.a)());r.a.render(l.a.createElement(m.b,{history:w},l.a.createElement($.a,{store:I},l.a.createElement(G,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.71f3bea8.chunk.js.map
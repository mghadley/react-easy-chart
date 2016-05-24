webpackJsonp([6],[function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(3),i=n(c),u=a(25),s=n(u),f=a(23),m=a(73),p=n(m),y=a(22),h=a(26),g=n(h),E=[{key:"Cats",value:100},{key:"Dogs",value:200},{key:"Other",value:50}],b=[{key:"Cats",value:100,color:"#aaac84"},{key:"Dogs",value:200,color:"#dce7c5"},{key:"Other",value:50,color:"#e3a51a"}],v=[{color:"#aaac84"},{color:"#dce7c5"},{color:"#e3a51a"}],x={".legend":{backgroundColor:"#f9f9f9",border:"1px solid #e5e5e5",borderRadius:"12px",fontSize:"0.8em",maxWidth:"300px",padding:"12px"}},k={".legend":{backgroundColor:"#f9f9f9",border:"1px solid #e5e5e5",borderRadius:"12px",fontSize:"0.8em",maxWidth:"480px",padding:"12px"}},S=[{type:"One",x:1,y:5},{type:"One",x:2,y:6},{type:"One",x:3,y:7},{type:"Two",x:3,y:1},{type:"Two",x:4,y:2},{type:"Two",x:5,y:3},{type:"Three",x:0,y:6},{type:"Three",x:1,y:7},{type:"Three",x:2,y:8},{type:"Four",x:5,y:2},{type:"Four",x:6,y:3},{type:"Four",x:7,y:4},{type:"Five",x:4,y:4},{type:"Five",x:5,y:5},{type:"Five",x:6,y:6}],C=function(e){function t(e){l(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={active:!1},a}return o(t,e),d(t,[{key:"toggleState",value:function(){this.setState({active:!this.state.active})}},{key:"render",value:function(){var e=this.state.active?"menu active":"menu";return i["default"].createElement("div",null,i["default"].createElement("aside",{id:"menu",className:e},i["default"].createElement("a",{id:"menuToggle",className:"menu__toggle","aria-hidden":"true",href:"#",onClick:this.toggleState.bind(this)},i["default"].createElement("span",null,"Toggle menu")),i["default"].createElement("nav",{className:"menu__nav"},i["default"].createElement("ul",null,i["default"].createElement("li",null,i["default"].createElement("a",{href:"../",className:"menu__all-charts"},"← All charts"))),i["default"].createElement(g["default"],{items:["introduction","basic","horizontal","config","styles","scatterplot"],currentClassName:"active"},i["default"].createElement("li",null,i["default"].createElement("a",{href:"#introduction"},"Introduction")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"#basic"},"Basic")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"#horizontal"},"Horizontal")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"#config"},"Config")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"#styles"},"Styles")),i["default"].createElement("li",null,i["default"].createElement("a",{href:"#scatterplot"},"Scatterplot"))))),i["default"].createElement("div",{className:"content"},i["default"].createElement("h1",null,"The React Easy Chart Legend"),i["default"].createElement("section",{id:"introduction"},i["default"].createElement("h2",null,"Introduction"),i["default"].createElement("p",null,"The legend component provides a key to the data and is designed to work with the Pie and Scatter plot charts. The legend component is easily cusomised via css")),i["default"].createElement("section",{id:"basic"},i["default"].createElement("h2",null,"Basic"),i["default"].createElement("p",null,"Simply pass the same data used for the chart and provide a data id (dataId) for the label."),i["default"].createElement("pre",null,i["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,y.escapeHTML)("\nconst pieData = [\n  {key: 'Cats', value: 100},\n  {key: 'Dogs', value: 200},\n  {key: 'Other', value: 50}\n];\n\n<PieChart data={pieData} size={300} />\n\n<Legend data={pieData} dataId={'key'} />\n            ")}})),i["default"].createElement("div",null,i["default"].createElement(f.PieChart,{data:E,size:300}),i["default"].createElement(f.Legend,{data:E,dataId:"key"}),i["default"].createElement("pre",null,i["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,y.escapeHTML)("\n<Legend data={pieData} dataId={'value'} />\n              ")}})),i["default"].createElement(f.Legend,{data:E,dataId:"value"}))),i["default"].createElement("section",{id:"horizontal"},i["default"].createElement("h2",null,"Horizontal"),i["default"].createElement("p",null,"Pass `horizontal` as a parameter to switch the list items from block to inline-block"),i["default"].createElement("pre",null,i["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,y.escapeHTML)("\n<Legend data={pieData} dataId={'key'} horizontal />\n            ")}})),i["default"].createElement("div",null,i["default"].createElement(f.PieChart,{data:E,size:300}),i["default"].createElement(f.Legend,{data:E,dataId:"key",horizontal:!0}))),i["default"].createElement("section",{id:"config"},i["default"].createElement("h2",null,"Config"),i["default"].createElement("p",null,"React Easy Charts use ",i["default"].createElement("a",{href:"https://github.com/mbostock/d3/wiki/Ordinal-Scales#category20"},"d3.scale.category20")," to generate a list of default colours. If your chart has a custom colour scheme, pass this colour array to the config property."),i["default"].createElement("pre",null,i["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,y.escapeHTML)("\nconst pieDataCustom = [\n  {key: 'Cats', value: 100, color: '#aaac84'},\n  {key: 'Dogs', value: 200, color: '#dce7c5'},\n  {key: 'Other', value: 50, color: '#e3a51a'}\n];\n\nconst config = [\n  {color: '#aaac84'},\n  {color: '#dce7c5'},\n  {color: '#e3a51a'}\n];\n\n<PieChart data={pieDataCustom} size={300} />\n\n<Legend data={pieDataCustom} dataId={'key'} config={config}/>\n            ")}})),i["default"].createElement("div",null,i["default"].createElement(f.PieChart,{data:b,size:300,padding:20}),i["default"].createElement(f.Legend,{data:b,dataId:"key",config:v,horizontal:!0}))),i["default"].createElement("section",{id:"styles"},i["default"].createElement("h2",null,"Styles"),i["default"].createElement("p",null,"Legend is a styled unordered list and can be easily customised by overriding (all or parts of) the default styles. Simply create a javascript based style object and pass this in through the styles parameter"),i["default"].createElement("pre",null,i["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,y.escapeHTML)("\n/* default component styles */\nconst defaultStyles = {\n  '.legend': {\n    'list-style': 'none',\n    margin: 0,\n    padding: 0\n  },\n  '.legend li': {\n    display: 'block',\n    lineHeight: '24px',\n    marginRight: '24px',\n    marginBottom: '6px',\n    paddingLeft: '24px',\n    position: 'relative'\n  },\n  '.legend li.horizontal': {\n    display: 'inline-block'\n  },\n  '.legend .icon': {\n    width: '12px',\n    height: '12px',\n    background: 'red',\n    borderRadius: '6px',\n    position: 'absolute',\n    left: '0',\n    top: '50%',\n    marginTop: '-6px'\n  }\n};\n\n/* example override */\nconst customStyle = {\n  '.legend': {\n    backgroundColor: '#f9f9f9',\n    border: '1px solid #e5e5e5',\n    borderRadius: '12px',\n    fontSize: '0.8em',\n    maxWidth: '300px',\n    padding: '12px'\n  }\n};\n\n<Legend\n  data={pieDataCustom}\n  dataId={'key'}\n  config={config}\n  styles={customStyle}\n  horizontal\n/>\n            ")}})),i["default"].createElement("div",null,i["default"].createElement(f.PieChart,{data:b,size:300,padding:20,innerHoleSize:150}),i["default"].createElement(f.Legend,{data:b,dataId:"key",config:v,styles:x,horizontal:!0}))),i["default"].createElement("section",{id:"scatterplot"},i["default"].createElement("h2",null,"Scatterplot"),i["default"].createElement("p",null,"A scatterplot example"),i["default"].createElement("pre",null,i["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,y.escapeHTML)("\nconst scatterStyle = {\n  '.legend': {\n    backgroundColor: '#f9f9f9',\n    border: '1px solid #e5e5e5',\n    borderRadius: '12px',\n    fontSize: '0.8em',\n    maxWidth: '480px',\n    padding: '12px'\n  }\n};\n\n<ScatterplotChart\n  data={bigData}\n  width={480}\n  height={270}\n  axes\n/>\n<Legend\n  data={bigData}\n  dataId={'type'}\n  styles={scatterStyle}\n  horizontal\n/>\n            ")}})),i["default"].createElement(p["default"],{data:S,width:480,height:270,axes:!0}),i["default"].createElement(f.Legend,{data:S,dataId:"type",styles:k,horizontal:!0}))))}}]),t}(i["default"].Component);t["default"]=C,s["default"].render(i["default"].createElement(C,null),document.getElementById("root"))}]);
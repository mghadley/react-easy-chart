webpackJsonp([4],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(3),c=l(u),s=a(25),d=l(s),f=a(12),h=l(f),p=a(22),m=a(23),y=a(26),v=l(y),E={greyBlueOne:"#1e313c",greyBlueTwo:"#3f4c55",greyBlueThree:"#667178",yellow:"#f4e956",orange:"#e3a51a",green:"#aaac84",lightGreen:"#dce7c5",lightGrey:"#e4e8ec"},g=function(e){function t(e){n(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.data=a.generateData(),a.state={showToolTip:!1,componentWidth:300},a.styles={".pie-chart-lines":{stroke:"rgba(0, 0, 0, 1)",strokeWidth:1},".pie-chart-text":{fontSize:"10px",fill:"white"}},a}return o(t,e),i(t,[{key:"getRandomArbitrary",value:function(e,t){return Math.random()*(t-e)+e}},{key:"generateData",value:function(){var e=this,t=[],a=["A","B","C","D","E","F","G"],l=["#1e313c","#3f4c55","#667178","#f4e956","#e3a51a","#aaac84","#dce7c5"];return a.map(function(a,n){t.push({key:a,value:e.getRandomArbitrary(1,1e3),color:l[n]})}),t}},{key:"turnOnRandomData",value:function(){this.setState({randomDataIntervalId:setInterval(this.updateData.bind(this),1e3)})}},{key:"turnOffRandomData",value:function(){clearInterval(this.state.randomDataIntervalId),this.setState({randomDataIntervalId:null})}},{key:"updateData",value:function(){this.data=this.generateData(),this.forceUpdate()}},{key:"mouseOverHandler",value:function(e,t){this.setState({showToolTip:!0,top:t.y-10+"px",left:t.x+10+"px",value:e.value,key:e.data.key})}},{key:"mouseMoveHandler",value:function(e){this.state.showToolTip&&this.setState({top:e.y+"px",left:e.x+10+"px"})}},{key:"mouseOutHandler",value:function(){this.setState({showToolTip:!1})}},{key:"clickHandler",value:function(e){this.setState({dataDisplay:"The amount selected is "+e.value})}},{key:"toggleState",value:function(){this.setState({active:!this.state.active})}},{key:"render",value:function(){var e=this,t=this.state.active?"menu active":"menu";return c["default"].createElement("div",null,this.state.showToolTip?c["default"].createElement(h["default"],{top:this.state.top,left:this.state.left},"The value of ",this.state.key," is ",this.state.value):null,c["default"].createElement("aside",{id:"menu",className:t},c["default"].createElement("a",{id:"menuToggle",className:"menu__toggle","aria-hidden":"true",href:"#",onClick:this.toggleState.bind(this)},c["default"].createElement("span",null,"Toggle menu")),c["default"].createElement("nav",{className:"menu__nav"},c["default"].createElement("ul",null,c["default"].createElement("li",null,c["default"].createElement("a",{href:"../",className:"menu__all-charts"},"← All charts"))),c["default"].createElement(v["default"],{items:["introduction","data","size","donut","padding","labels","style","mouseHandlers","clickHandler","updatingData"],currentClassName:"active"},c["default"].createElement("li",null,c["default"].createElement("a",{href:"#introduction"},"Introduction")),c["default"].createElement("li",null,c["default"].createElement("a",{href:"#data"},"Data")),c["default"].createElement("li",null,c["default"].createElement("a",{href:"#size"},"Size")),c["default"].createElement("li",null,c["default"].createElement("a",{href:"#donut"},"Donut")),c["default"].createElement("li",null,c["default"].createElement("a",{href:"#padding"},"Padding")),c["default"].createElement("li",null,c["default"].createElement("a",{href:"#labels"},"Labels")),c["default"].createElement("li",null,c["default"].createElement("a",{href:"#style"},"Style")),c["default"].createElement("li",null,c["default"].createElement("a",{href:"#mouseHandlers"},"Mouse handlers")),c["default"].createElement("li",null,c["default"].createElement("a",{href:"#clickHandler"},"Click handler")),c["default"].createElement("li",null,c["default"].createElement("a",{href:"#updatingData"},"Updating the data"))))),c["default"].createElement("div",{className:"content"},c["default"].createElement("h1",null,"The React Easy Pie chart"),c["default"].createElement("section",{id:"introduction"},c["default"].createElement("h2",null,"Introduction"),c["default"].createElement("p",null,"A pie chart (or a circle chart) is a circular statistical graphic, which is divided into slices to illustrate numerical proportion.",c["default"].createElement("sup",null,"(",c["default"].createElement("a",{href:"https://en.wikipedia.org/wiki/Pie_chart"},"ref"),")"))),c["default"].createElement("section",{id:"data"},c["default"].createElement("h2",null,"data"),c["default"].createElement("p",null,"At the most basic the Pie chart can just take a single data file supplied in a JSON format and will render a simple Pie chart. This is a single array of JavaScript objects with a key and value."),c["default"].createElement("pre",null,c["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,p.escapeHTML)("\n <PieChart\n data={[{key: 1, value: 20}, {key: 2, value: 10}, {key: 3, value: 25}]}/>\n ")}})),c["default"].createElement(m.PieChart,{data:[{key:"A",value:100},{key:"B",value:200},{key:"C",value:50}]}),c["default"].createElement("p",null,"By default the color is automatically assigned. The color can be overwritten for each section of the pie by providing an extra color hex value to the object."),c["default"].createElement("pre",null,c["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,p.escapeHTML)("\n<PieChart\n  data={[\n    {key: 'A', value: 100, color: '#aaac84'},\n    {key: 'B', value: 200, color: '#dce7c5'},\n    {key: 'C', value: 50, color: '#e3a51a'}\n  ]}\n/>\n       ")}})),c["default"].createElement(m.PieChart,{data:[{key:"A",value:100,color:E.green},{key:"B",value:200,color:E.lightGreen},{key:"C",value:50,color:E.orange}]})),c["default"].createElement("section",{id:"size"},c["default"].createElement("h2",null,"Size"),c["default"].createElement("p",null,"The size of the pie chart can be set easily by passing in a size param number."),c["default"].createElement("pre",null,c["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,p.escapeHTML)("\n<PieChart\n  size={100}\n  data={[\n    {key: 'A', value: 100, color: '#aaac84'},\n    {key: 'B', value: 200, color: '#dce7c5'},\n    {key: 'C', value: 50, color: '#e3a51a'}\n  ]}\n/>\n")}})),c["default"].createElement(m.PieChart,{size:100,data:[{key:"A",value:100,color:E.green},{key:"B",value:200,color:E.lightGreen},{key:"C",value:50,color:E.orange}]})),c["default"].createElement("section",{id:"donut"},c["default"].createElement("h2",null,"donut"),c["default"].createElement("p",null,"A donut can be produced by passing in a innerHoleSize prop. This should be less than the size prop."),c["default"].createElement("pre",null,c["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,p.escapeHTML)("\n<PieChart\n  size={400}\n  innerHoleSize={200}\n  data={[\n    {key: 'A', value: 100, color: '#aaac84'},\n    {key: 'B', value: 200, color: '#dce7c5'},\n    {key: 'C', value: 50, color: '#e3a51a'}\n  ]}\n/>\n       ")}})),c["default"].createElement(m.PieChart,{size:400,innerHoleSize:200,data:[{key:"A",value:100,color:E.green},{key:"B",value:200,color:E.lightGreen},{key:"C",value:50,color:E.orange}]})),c["default"].createElement("section",{id:"padding"},c["default"].createElement("h2",null,"padding"),c["default"].createElement("p",null,"padding can be set by passing in a padding prop."),c["default"].createElement("pre",null,c["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,p.escapeHTML)("\n<PieChart\n  padding={50}\n  data={[\n    {key: 'A', value: 100, color: '#aaac84'},\n    {key: 'B', value: 200, color: '#dce7c5'},\n    {key: 'C', value: 50, color: '#e3a51a'}\n  ]}\n/>\n       ")}})),c["default"].createElement(m.PieChart,{padding:50,data:[{key:"A",value:100,color:E.green},{key:"B",value:200,color:E.lightGreen},{key:"C",value:50,color:E.orange}]})),c["default"].createElement("section",{id:"labels"},c["default"].createElement("h2",null,"labels"),c["default"].createElement("p",null,"Labels can be added by passing in a labels boolean prop. The labels will be the key value passed in with the data. The example below passes a custom style object to set the text colour to white"),c["default"].createElement("pre",null,c["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,p.escapeHTML)("\n<PieChart\n  labels\n  data={[\n    {key: 'A', value: 100, color: '#aaac84'},\n    {key: 'B', value: 200, color: '#dce7c5'},\n    {key: 'C', value: 50, color: '#e3a51a'}\n  ]}\n  styles={{\n    '.chart_text': {\n      fontSize: '1em',\n      fill: '#fff'\n    }\n  }}\n/>\n       ")}})),c["default"].createElement(m.PieChart,{labels:!0,data:[{key:"A",value:100,color:E.green},{key:"B",value:200,color:E.lightGreen},{key:"C",value:50,color:E.orange}],styles:{".chart_text":{fontSize:"1em",fill:"#fff"}}})),c["default"].createElement("section",{id:"style"},c["default"].createElement("h2",null,"style"),c["default"].createElement("p",null,"Styles for the lines and the text can be overridden by passing in a styles object prop."),c["default"].createElement("pre",null,c["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,p.escapeHTML)("\n<PieChart\n  labels\n  styles={{\n    '.chart_lines': {\n      strokeWidth: 0\n    },\n    '.chart_text': {\n      fontFamily: 'serif',\n      fontSize: '1.25em',\n      fill: '#333'\n    }\n  }}\n  data={[\n    {key: 'A', value: 100, color: '#aaac84'},\n    {key: 'B', value: 200, color: '#dce7c5'},\n    {key: 'C', value: 50, color: '#e3a51a'}\n/>      ")}})),c["default"].createElement(m.PieChart,{labels:!0,styles:{".chart_lines":{strokeWidth:0},".chart_text":{fontFamily:"serif",fontSize:"1.25em",fill:"#333"}},data:[{key:"A",value:100,color:E.green},{key:"B",value:200,color:E.lightGreen},{key:"C",value:50,color:E.orange}]})),c["default"].createElement("section",{id:"mouseHandlers"},c["default"].createElement("h2",null,"Mouse handlers"),c["default"].createElement("p",null,"The chart will send out a mouseOver event, mouseMove and mouseOut event. This can be used by your react application in anyway you would require. The event handlers provides the mouse event and the segment data. The mouse event can for instance provide the x and y coordinates which can be used for a tool tip. The data can be segment related to the pie chart."),c["default"].createElement("pre",null,c["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,p.escapeHTML)("\nmouseOverHandler(d, e) {\n this.setState({\n   showToolTip: true,\n   top: e.y,\n   left: e.x,\n   value: d.value,\n   key: d.data.key});\n}\n\nmouseMoveHandler(e) {\n if (this.state.showToolTip) {\n   this.setState({top: e.y, left: e.x});\n }\n}\n\nmouseOutHandler() {\n this.setState({showToolTip: false});\n}\n\n{this.state.showToolTip ? <ToolTip top={this.state.top} left={this.state.left}>The value of {this.state.key} is {this.state.value}</ToolTip> : null}\n\n<PieChart\n data={[\n   {key: 'A', value: 100, color: '#aaac84'},\n   {key: 'B', value: 200, color: '#dce7c5'},\n   {key: 'C', value: 50, color: '#e3a51a'}\n ]}\n innerHoleSize={200}\n mouseOverHandler={this.mouseOverHandler.bind(this)}\n mouseOutHandler={this.mouseOutHandler.bind(this)}\n mouseMoveHandler={this.mouseMoveHandler.bind(this)}\n padding={10}\n styles={this.styles}\n/>\n       ")}})),c["default"].createElement(m.PieChart,{data:[{key:"A",value:100,color:E.green},{key:"B",value:200,color:E.lightGreen},{key:"C",value:50,color:E.orange}],innerHoleSize:200,mouseOverHandler:this.mouseOverHandler.bind(this),mouseOutHandler:this.mouseOutHandler.bind(this),mouseMoveHandler:this.mouseMoveHandler.bind(this),padding:10,styles:this.styles})),c["default"].createElement("section",{id:"clickHandler"},c["default"].createElement("h2",null,"Click Handler"),c["default"].createElement("p",null,"The chart will send out a click event. The event will pass the data and the event. This allows the data to be presented from the clicking of a segment in any way the react developer requires."),c["default"].createElement("pre",null,c["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,p.escapeHTML)("\n <div>\n   <div>\n     <PieChart\n       data={[\n         {key: 'A', value: 100, color: '#aaac84'},\n         {key: 'B', value: 200, color: '#dce7c5'},\n         {key: 'C', value: 50, color: '#e3a51a'}\n       ]}\n       clickHandler={\n         (d) => this.setState({\n           dataDisplay: `The value of ${d.data.key} is ${d.value}`\n         })\n       }\n     />\n   </div>\n   <div>\n   {this.state.dataDisplay ? this.state.dataDisplay : 'Click on a segment to show the value'}\n   </div>\n </div>\n     ")}})),c["default"].createElement("div",null,c["default"].createElement("div",null,c["default"].createElement(m.PieChart,{data:[{key:"A",value:100,color:E.green},{key:"B",value:200,color:E.lightGreen},{key:"C",value:50,color:E.orange}],clickHandler:function(t){return e.setState({dataDisplay:"The value of "+t.data.key+" is "+t.value})}})),c["default"].createElement("div",null,this.state.dataDisplay?this.state.dataDisplay:"Click on a segment to show the value"))),c["default"].createElement("section",{id:"updatingData"},c["default"].createElement("h2",null,"Updating the data"),c["default"].createElement("p",null,"By selecting the button below to start the random data you can see a simulation of the performance if a data feed is passed in. React provides the functionality to only update the elements of the dom when required so will just change the path attributes. The data is passed in as a react param only and as soon as that data changes the chart will reflect that change automatically."),c["default"].createElement("br",null),this.state.randomDataIntervalId?c["default"].createElement("input",{type:"button",value:"Stop random data",onClick:this.turnOffRandomData.bind(this)}):c["default"].createElement("input",{type:"button",value:"Start random data",onClick:this.turnOnRandomData.bind(this)}),c["default"].createElement("pre",null,c["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,p.escapeHTML)("\n<PieChart\n labels\n data={this.data}\n/>\n      ")}})),c["default"].createElement(m.PieChart,{labels:!0,data:this.data,padding:10,styles:{".chart_lines":{strokeWidth:0},".chart_text":{fontSize:"1em",fill:"#fff"}}}))))}}]),t}(c["default"].Component);t["default"]=g,d["default"].render(c["default"].createElement(g,null),document.getElementById("root"))},12:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(3),c=l(u),s=a(7),d={".tooltip":{border:"solid silver 1px",position:"fixed",backgroundColor:"white",borderRadius:"4px",padding:"10px"}},f=function(e){function t(){return n(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"tooltip-container"},c["default"].createElement(s.Style,{scopeSelector:".tooltip-container",rules:d}),c["default"].createElement("div",{className:"tooltip",style:{top:this.props.top,left:this.props.left}},this.props.children))}}]),t}(c["default"].Component);f.propTypes={left:c["default"].PropTypes.string,top:c["default"].PropTypes.string},t["default"]=f}});
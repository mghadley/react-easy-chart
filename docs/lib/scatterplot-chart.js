webpackJsonp([3],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var d=a(4),s=n(d),u=a(25),c=n(u),h=a(23),f=a(12),p=n(f),y=a(122),m=n(y),x=a(22),g=a(26),E=n(g),b=[{type:1,x:"Tue",y:10},{type:1,x:"Wed",y:20},{type:2,x:"Thu",y:30},{type:3,x:"Wed",y:40}],v=[{type:1,x:"1-Jan-15",y:10},{type:1,x:"2-Jan-15",y:20},{type:2,x:"1-Jan-15",y:30},{type:2,x:"2-Jan-15",y:30},{type:3,x:"3-Jan-15",y:40}],T=[{type:"One",x:1,y:5},{type:"Two",x:3,y:1},{type:"Three",x:0,y:6},{type:"Four",x:5,y:2},{type:"Five",x:4,y:4},{type:"Six",x:5,y:9},{type:"Seven",x:9,y:1},{type:"Eight",x:5,y:6},{type:"Nine",x:3,y:9},{type:"Ten",x:7,y:9}],w=[{type:"One",x:1,y:5,z:500},{type:"One",x:3,y:1,z:100},{type:"One",x:0,y:6,z:600},{type:"One",x:5,y:2,z:200},{type:"One",x:4,y:4,z:400},{type:"One",x:5,y:9,z:900},{type:"One",x:9,y:1,z:100},{type:"One",x:5,y:6,z:600},{type:"One",x:3,y:9,z:900},{type:"One",x:7,y:9,z:900}],M=[{type:"One",color:"#1e313c",stroke:"black"},{type:"Two",color:"#3f4c55",stroke:"black"},{type:"Three",color:"#667178",stroke:"black"},{type:"Four",color:"#f4e956",stroke:"black"},{type:"Five",color:"#e3a51a",stroke:"black"},{type:"Six",color:"#aaac84",stroke:"black"},{type:"Seven",color:"#dce7c5",stroke:"black"},{type:"Eight",color:"#e4e8ec",stroke:"black"}],O=function(e){function t(e){l(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={dataDisplay:"",showToolTip:!1,randomDataIntervalId:null,windowWidth:400,componentWidth:1e3},a.data=a.generateData(),a}return i(t,e),o(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize.bind(this)),this.handleResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"getRandomArbitrary",value:function(e,t){return Math.random()*(t-e)+e}},{key:"generateData",value:function(){var e=this,t=[],a=["A","B","C","D","E","F","G","H","I","J","A","B","C","D","E","F","G","H","I","J"];return a.map(function(a){t.push({type:a,x:e.getRandomArbitrary(1,1e3),y:e.getRandomArbitrary(1,1e3)})}),t}},{key:"handleResize",value:function(){this.setState({windowWidth:window.innerWidth-100,componentWidth:this.refs.component.offsetWidth})}},{key:"mouseOverHandler",value:function(e,t){this.setState({showToolTip:!0,top:t.screenY-10+"px",left:t.screenX+10+"px",y:e.y,x:e.x})}},{key:"mouseMoveHandler",value:function(e){this.state.showToolTip&&this.setState({top:e.y-10+"px",left:e.x+10+"px"})}},{key:"mouseOutHandler",value:function(){this.setState({showToolTip:!1})}},{key:"clickHandler",value:function(e){this.setState({dataDisplay:"The amount selected is "+e.y})}},{key:"turnOnRandomData",value:function(){this.setState({randomDataIntervalId:setInterval(this.updateData.bind(this),1e3)})}},{key:"turnOffRandomData",value:function(){clearInterval(this.state.randomDataIntervalId),this.setState({randomDataIntervalId:null})}},{key:"updateData",value:function(){this.data=this.generateData(),this.forceUpdate()}},{key:"toggleState",value:function(){this.setState({active:!this.state.active})}},{key:"render",value:function(){var e=this,t=this.state.active?"menu active":"menu";return s["default"].createElement("div",null,s["default"].createElement("aside",{id:"menu",className:t},s["default"].createElement("a",{id:"menuToggle",className:"menu__toggle","aria-hidden":"true",href:"#",onClick:this.toggleState.bind(this)},s["default"].createElement("span",null,"Toggle menu")),s["default"].createElement("nav",{className:"menu__nav"},s["default"].createElement("ul",null,s["default"].createElement("li",null,s["default"].createElement("a",{href:"../",className:"menu__all-charts"},"← All charts"))),s["default"].createElement(E["default"],{items:["introduction","data","heightAndWidth","margin","axes","yaxesorientation","axesLabels","dotRadius","config","grid","verticalGrid","axisType","domainRange","mouseEvents","customLegend","dataType","generateData","fluid"],currentClassName:"active"},s["default"].createElement("li",null,s["default"].createElement("a",{href:"#introduction"},"Introduction")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#data"},"Data")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#heightAndWidth"},"height & Width")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#margin"},"Margin")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#axes"},"Axes")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#yaxesorientation"},"Y Axis orientation")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#axesLabels"},"Axes labels")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#dotRadius"},"Dot Radius")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#config"},"Config")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#grid"},"Grid")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#verticalGrid"},"Vertical Grid")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#axisType"},"Axis type")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#domainRange"},"Domain range")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#mouseEvents"},"Mouse events")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#customLegend"},"Custom legend")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#dataType"},"3rd data type")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#generateData"},"Generate data")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"#fluid"},"Fluid"))))),s["default"].createElement("div",{className:"content"},s["default"].createElement("h1",null,"Scatterplot chart"),s["default"].createElement("div",{ref:"component"},s["default"].createElement(h.ScatterplotChart,{data:this.data,dotRadius:20,width:this.state.componentWidth,height:this.state.componentWidth/2})),s["default"].createElement("h2",{id:"introduction"},"Introduction"),s["default"].createElement("p",null,"A scatter plot, scatterplot, or scattergraph is a type of mathematical diagram using Cartesian coordinates to display values for typically two variables for a set of data.",s["default"].createElement("sup",null,"(",s["default"].createElement("a",{href:"https://en.wikipedia.org/wiki/Scatter_plot"},"ref"),")")),s["default"].createElement("h2",{id:"data"},"Data"),s["default"].createElement("p",null,"At the most basic the scatterplot chart can just take a single data file supplied in a JSON format and will render a simple scatterplot chart."),s["default"].createElement("p",null,"The format of the data is an array of objects, with each object representing a single data item to be plotted."),s["default"].createElement("p",null,"Each data item is give a type identifier and two variables"),s["default"].createElement("ul",null,s["default"].createElement("li",null,s["default"].createElement("b",null,"type"),": a generic identifier for the data. Muliple instances of the same type can exist"),s["default"].createElement("li",null,s["default"].createElement("b",null,"x"),": data value for the x axis"),s["default"].createElement("li",null,s["default"].createElement("b",null,"y"),": data value for the y axis")),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n  const data = [\n    {\n      'type': 'One',\n      'x': 1,\n      'y': 5\n    },\n    {\n      'type': 'Two',\n      'x': 3,\n      'y': 1\n    },\n    {\n      'type': 'Three',\n      'x': 0,\n      'y': 6\n    },\n    {\n      'type': 'Four',\n      'x': 5,\n      'y': 2\n    },\n    {\n      'type': 'Five',\n      'x': 4,\n      'y': 4\n    },\n    {\n      'type': 'Six',\n      'x': 5,\n      'y': 9\n    },\n    {\n      'type': 'Seven',\n      'x': 9,\n      'y': 1\n    },\n    {\n      'type': 'Eight',\n      'x': 5,\n      'y': 6\n    },\n    {\n      'type': 'Nine',\n      'x': 3,\n      'y': 9\n    },\n    {\n      'type': 'Ten',\n      'x': 7,\n      'y': 9\n    }\n  ];\n\n  <ScatterplotChart data={data} />\n         ")}})),s["default"].createElement(h.ScatterplotChart,{data:T}),s["default"].createElement("h2",{id:"heightAndWidth"},"Height and Width"),s["default"].createElement("p",null,"The height and width can be easily set by passing in a numeric value in as a prop."),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n  <ScatterplotChart data={data} width={160} height={90} />\n         ")}})),s["default"].createElement(h.ScatterplotChart,{data:T,width:160,height:90}),s["default"].createElement("h2",{id:"margin"},"Margin"),s["default"].createElement("p",null,"The Margin can be overridden by passing in a margin object. The margin object must define the following: top, right, bottom and left"),s["default"].createElement("p",null,"This can be particulary useful if a label is cut off."),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n  <ScatterplotChart\n    data={data}\n    margin={{top: 10, right: 10, bottom: 30, left: 100}} />\n         ")}})),s["default"].createElement(h.ScatterplotChart,{data:T,margin:{top:10,right:10,bottom:30,left:100}}),s["default"].createElement("h2",{id:"axes"},"Axes"),s["default"].createElement("p",null,"The axes can be turned on by simply passing a boolean flag to true for ",s["default"].createElement("strong",null,"axes"),"."),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n    <ScatterplotChart\n      data={data}\n      axes\n      width={480}\n      height={270} />\n         ")}})),s["default"].createElement(h.ScatterplotChart,{data:T,axes:!0,width:480,height:270}),s["default"].createElement("h2",{id:"yaxesorientation"},"Y Axis orientation"),s["default"].createElement("p",null,"The Y axis can be placed on the right hand side by passing a boolean flag to true for yAxisOrientRight"),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n  <ScatterplotChart\n    data={bigData}\n    axes\n    yAxisOrientRight\n    axisLabels={{x: 'My x Axis', y: 'My y Axis'}}\n    width={480}\n    height={270}\n  />\n            ")}})),s["default"].createElement(h.ScatterplotChart,{data:T,axes:!0,yAxisOrientRight:!0,axisLabels:{x:"My x Axis",y:"My y Axis"},width:480,height:270}),s["default"].createElement("h2",{id:"axesLabels"},"Axes labels"),s["default"].createElement("p",null,"The axes labels (",s["default"].createElement("strong",null,"axisLabels"),") can be passed in for the x and y value."),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n   <ScatterplotChart\n     data={data}\n     axes\n     axisLabels={{x: 'My x Axis', y: 'My y Axis'}}\n     width={480}\n     height={270} />\n         ")}})),s["default"].createElement(h.ScatterplotChart,{data:T,axes:!0,axisLabels:{x:"My x Axis",y:"My y Axis"},width:480,height:270}),s["default"].createElement("h2",{id:"dotRadius"},"Dot radius"),s["default"].createElement("p",null,"The default size of the dot can be changed via the ",s["default"].createElement("strong",null,"dotRadius")," parameter"),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n   <ScatterplotChart\n     data={data}\n     axes\n     axisLabels={{x: 'My x Axis', y: 'My y Axis'}}\n     dotRadius={10}\n     width={480}\n     height={270} />\n         ")}})),s["default"].createElement(h.ScatterplotChart,{data:T,axes:!0,axisLabels:{x:"My x Axis",y:"My y Axis"},dotRadius:10,width:480,height:270}),s["default"].createElement("h2",{id:"config"},"Config"),s["default"].createElement("p",null,"The ",s["default"].createElement("strong",null,"config")," property allows for greater control over the look and feel."),s["default"].createElement("ul",null,s["default"].createElement("li",null,s["default"].createElement("strong",null,"type"),": a reference to the type value in the data object"),s["default"].createElement("li",null,s["default"].createElement("strong",null,"color"),": dot color as a hex value"),s["default"].createElement("li",null,s["default"].createElement("strong",null,"stroke"),": stroke color as a hex value")),s["default"].createElement("p",null,"The following example changes the default color for types 'One', 'Two' and 'Three' and adds a stroke"),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n const config = [\n   {\n     type: 'One',\n     color: '#ff0000',\n     stroke: 'blue'\n   },\n   {\n     type: 'Two',\n     color: '#00ff00',\n     stroke: 'blue'\n   },\n   {\n     type: 'Three',\n     color: '#ffffff',\n     stroke: 'black'\n   }\n ];\n         ")}})),s["default"].createElement(h.ScatterplotChart,{data:T,axes:!0,axisLabels:{x:"My x Axis",y:"My y Axis"},dotRadius:10,width:480,height:270,config:M}),s["default"].createElement("h2",{id:"grid"},"Grid"),s["default"].createElement("p",null,"Apply a background grid with the grid boolean property"),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n    <ScatterplotChart\n      data={data}\n      axes\n      axisLabels={{x: 'My x Axis', y: 'My y Axis'}}\n      dotRadius={10}\n      width={480}\n      height={270}\n      grid\n    />\n          ")}})),s["default"].createElement(h.ScatterplotChart,{data:T,axes:!0,axisLabels:{x:"My x Axis",y:"My y Axis"},dotRadius:6,width:480,height:270,grid:!0}),s["default"].createElement("h2",{id:"verticalGrid"},"Vertical Grid"),s["default"].createElement("p",null,"A vertical grid can be added to the graph by just passing in a boolean for verticalGrid."),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n<ScatterplotChart\n  data={data}\n  axes\n  verticalGrid\n  axisLabels={{x: 'My x Axis', y: 'My y Axis'}}\n  dotRadius={10}\n  width={480}\n  height={270}\n  grid\n/>\n        ")}})),s["default"].createElement(h.ScatterplotChart,{data:T,axes:!0,verticalGrid:!0,axisLabels:{x:"My x Axis",y:"My y Axis"},dotRadius:6,width:480,height:270,grid:!0}),s["default"].createElement("h2",{id:"axisType"},"Axis type"),s["default"].createElement("p",null,"The data passed associated to the particular axes can be in numeric, date (the default format is for example 1-Jan-15 but can be overridden) or textual formats (used for labelling)."),s["default"].createElement("p",null,"For the example below the data for the x is text and so the ",s["default"].createElement("strong",null,"xType")," needs to be changed to ",s["default"].createElement("strong",null,"text"),"."),s["default"].createElement("ul",null,s["default"].createElement("li",null,s["default"].createElement("strong",null,"xType")),s["default"].createElement("li",null,s["default"].createElement("strong",null,"yType"))),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n  const data = [\n    {\n      type: 1,\n      x: 'Tue',\n      y: 10\n    },\n    {\n      type: 1,\n      x: 'Wed',\n      y: 20\n    },\n    {\n      type: 2,\n      x: 'Tue',\n      y: 30\n    },\n    {\n      type: 3,\n      x: 'Thu',\n      y: 40\n    }\n  ];\n\n  <ScatterplotChart\n    data={data}\n    axes\n    axisLabels={{x: 'My x Axis', y: 'My y Axis'}}\n    dotRadius={6}\n    width={480}\n    height={270}\n    grid\n    xType=\"text\"\n  />\n        ")}})),s["default"].createElement(h.ScatterplotChart,{data:b,axes:!0,axisLabels:{x:"My x Axis",y:"My y Axis"},dotRadius:6,width:480,height:270,grid:!0,xType:"text"}),s["default"].createElement("h2",{id:"domainRange"},"Domain Range"),s["default"].createElement("p",null,"By default the axis ranges are automatically calculated based on the smallest and the largest values"),s["default"].createElement("p",null,"The range can be fixed by passing an array param of 2 value for the particular axis. The first number is the bottom of the range the second is the higher point of the range."),s["default"].createElement("p",null,"The following example sets the ",s["default"].createElement("strong",null,"xType")," to time then passes a date range to ",s["default"].createElement("strong",null,"xDomainRange")),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n    const data = [\n      {\n        type: 1,\n        x: '1-Jan-15',\n        y: 10\n      },\n      {\n        type: 1,\n        x: '2-Jan-15',\n        y: 20\n      },\n      {\n        type: 2,\n        x: '1-Jan-15',\n        y: 30\n      },\n      {\n        type: 2,\n        x: '2-Jan-15',\n        y: 30\n      },\n      {\n        type: 3,\n        x: '3-Jan-15',\n        y: 40\n      }\n    ];\n\n    <ScatterplotChart\n      data={data}\n      axes\n      axisLabels={{x: 'My x Axis', y: 'My y Axis'}}\n      dotRadius={6}\n      width={480}\n      height={270}\n      grid\n      xType=\"time\"\n      xDomainRange={['31-Dec-14', '4-Jan-15']}\n    />\n          ")}})),s["default"].createElement(h.ScatterplotChart,{data:v,axes:!0,axisLabels:{x:"My x Axis",y:"My y Axis"},dotRadius:6,width:480,height:270,grid:!0,xType:"time",xDomainRange:["31-Dec-14","4-Jan-15"]}),s["default"].createElement("h2",{id:"mouseEvents"},"Mouse events"),s["default"].createElement("p",null,"The chart accepts the following mouse events"),s["default"].createElement("ul",null,s["default"].createElement("li",null,"- Mouse over"),s["default"].createElement("li",null,"- Mouse out"),s["default"].createElement("li",null,"- Mouse move"),s["default"].createElement("li",null,"- Click")),s["default"].createElement("p",null,"The event handlers provides the mouse event and the point data."),s["default"].createElement("p",null,"The example below demostrates a simple tooltip"),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n  mouseOverHandler(d, e) {\n    this.setState({\n      showToolTip: true,\n      top: `${e.screenY - 10}px`,\n      left: `${e.screenX + 10}px`,\n      y: d.y,\n      x: d.x});\n  }\n\n  mouseMoveHandler(e) {\n    if (this.state.showToolTip) {\n      this.setState({top: `${e.y - 10}px`, left: `${e.x + 10}px`});\n    }\n  }\n\n  mouseOutHandler() {\n    this.setState({showToolTip: false});\n  }\n\n  <ScatterplotChart\n    data={exampleOne}\n    axes\n    axisLabels={{x: 'My x Axis', y: 'My y Axis'}}\n    dotRadius={6}\n    width={480}\n    height={270}\n    grid\n    mouseOverHandler={this.mouseOverHandler.bind(this)}\n    mouseOutHandler={this.mouseOutHandler.bind(this)}\n    mouseMoveHandler={this.mouseMoveHandler.bind(this)}\n    clickHandler={this.clickHandler.bind(this)}\n  />\n          ")}})),s["default"].createElement(h.ScatterplotChart,{data:T,axes:!0,axisLabels:{x:"My x Axis",y:"My y Axis"},dotRadius:6,width:480,height:270,grid:!0,mouseOverHandler:this.mouseOverHandler.bind(this),mouseOutHandler:this.mouseOutHandler.bind(this),mouseMoveHandler:this.mouseMoveHandler.bind(this),clickHandler:function(t){return e.setState({dataDisplay:"The x value id "+t.x+" and the y value is "+t.y})}}),s["default"].createElement("div",{style:{display:"inline-block",verticalAlign:"top",paddingLeft:"20px"}},this.state.dataDisplay?this.state.dataDisplay:"Click on a circle to show the value"),s["default"].createElement("h2",{id:"customLegend"},"Custom legend"),s["default"].createElement("p",null,"The scatterplot does not provide a legend by default. Below is an example of custom implementation"),s["default"].createElement(h.ScatterplotChart,{data:T,axes:!0,axisLabels:{x:"My x Axis",y:"My y Axis"},dotRadius:6,width:480,height:270,grid:!0,mouseOverHandler:this.mouseOverHandler.bind(this),mouseOutHandler:this.mouseOutHandler.bind(this),mouseMoveHandler:this.mouseMoveHandler.bind(this),clickHandler:function(t){return e.setState({dataDisplay:"The x value id "+t.x+" and the y value is "+t.y})}}),s["default"].createElement("div",{style:{width:"480px"}},s["default"].createElement(m["default"],{data:T})),s["default"].createElement("h2",{id:"dataType"},"3rd data type"),s["default"].createElement("p",null,"It's also possible to pass in a third variable (z). This variable is a number and is used to scale the radius of the dot"),s["default"].createElement("pre",null,s["default"].createElement("code",{dangerouslySetInnerHTML:{__html:(0,x.escapeHTML)("\n  const data = [\n    {\n      'type': 'One',\n      'x': 1,\n      'y': 5,\n      'z': 500\n    },\n    {\n      'type': 'One',\n      'x': 3,\n      'y': 1,\n      'z': 100\n    },\n    {\n      'type': 'One',\n      'x': 0,\n      'y': 6,\n      'z': 600\n    },\n    {\n      'type': 'One',\n      'x': 5,\n      'y': 2,\n      'z': 200\n    },\n    {\n      'type': 'One',\n      'x': 4,\n      'y': 4,\n      'z': 400\n    },\n    {\n      'type': 'One',\n      'x': 5,\n      'y': 9,\n      'z': 900\n    },\n    {\n      'type': 'One',\n      'x': 9,\n      'y': 1,\n      'z': 100\n    },\n    {\n      'type': 'One',\n      'x': 5,\n      'y': 6,\n      'z': 600\n    },\n    {\n      'type': 'One',\n      'x': 3,\n      'y': 9,\n      'z': 900\n    },\n    {\n      'type': 'One',\n      'x': 7,\n      'y': 9,\n      'z': 900\n    }\n  ];\n\n  <ScatterplotChart\n    data={bigDataZ}\n    axes\n    axisLabels={{x: 'My x Axis', y: 'My y Axis'}}\n    width={480}\n    height={270}\n    grid\n    mouseOverHandler={this.mouseOverHandler.bind(this)}\n    mouseOutHandler={this.mouseOutHandler.bind(this)}\n    mouseMoveHandler={this.mouseMoveHandler.bind(this)}\n  />\n          ")}})),s["default"].createElement(h.ScatterplotChart,{data:w,axes:!0,axisLabels:{x:"My x Axis",y:"My y Axis"},width:480,height:270,grid:!0,mouseOverHandler:this.mouseOverHandler.bind(this),mouseOutHandler:this.mouseOutHandler.bind(this),mouseMoveHandler:this.mouseMoveHandler.bind(this)}),s["default"].createElement("h2",{id:"generateData"},"Generate data"),s["default"].createElement("p",null,"By selecting the button below to start the random data you can see a simulation of the performance if a data feed is passed in. React provides the functionality to only update the elements of the dom when required so will just change the path attributes. The data is passed in as a react param only and as soon as that data changes the chart will reflect that change automatically."),s["default"].createElement("br",null),this.state.randomDataIntervalId?s["default"].createElement("input",{type:"button",value:"Stop random data",onClick:this.turnOffRandomData.bind(this)}):s["default"].createElement("input",{type:"button",value:"Start random data",onClick:this.turnOnRandomData.bind(this)}),s["default"].createElement(h.ScatterplotChart,{data:this.data,grid:!0,axes:!0,axisLabels:{x:"My x Axis",y:"My y Axis"},margin:{top:10,right:10,bottom:30,left:60},width:480,height:270}),s["default"].createElement("h2",{id:"fluid"},"Fluid"),s["default"].createElement("p",null,"Because the width and height of the chart can be passed in by a param then changes to the size of a window or container can change the chart dynamically. If you shrink your browser window width you will see the chart change in a fluid manor. You can also introduce basic break points such as removing the axes if below a certain width width."),s["default"].createElement(h.ScatterplotChart,{data:this.data,grid:!0,axes:this.state.componentWidth>400?!0:!1,axisLabels:{x:"My x Axis",y:"My y Axis"},margin:{top:10,right:10,bottom:30,left:60},width:this.state.componentWidth,height:this.state.componentWidth/2}),s["default"].createElement("br",null),s["default"].createElement("br",null),s["default"].createElement("br",null),this.state.showToolTip?s["default"].createElement(p["default"],{top:this.state.top,left:this.state.left},"The x value is ",this.state.x," and the y value is ",this.state.y):null))}}]),t}(s["default"].Component);t["default"]=O,c["default"].render(s["default"].createElement(O,null),document.getElementById("root"))},12:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var d=a(4),s=n(d),u=a(8),c={".tooltip":{border:"solid silver 1px",position:"fixed",backgroundColor:"white",borderRadius:"4px",padding:"10px"}},h=function(e){function t(){return l(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),o(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:"tooltip-container"},s["default"].createElement(u.Style,{scopeSelector:".tooltip-container",rules:c}),s["default"].createElement("div",{className:"tooltip",style:{top:this.props.top,left:this.props.left}},this.props.children))}}]),t}(s["default"].Component);h.propTypes={left:s["default"].PropTypes.string,top:s["default"].PropTypes.string},t["default"]=h},122:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Object.defineProperty(t,"__esModule",{value:!0});var d=a(4),s=n(d),u=a(8),c=a(15),h=n(c),f={".legend":{border:"solid silver 1px",backgroundColor:"white",borderRadius:"6px",padding:"12px"},".legend li":{display:"inline-block",lineHeight:"24px",marginRight:"24px",marginBottom:"6px",paddingLeft:"18px",position:"relative"},".legend .icon":{width:"12px",height:"12px",background:"red",borderRadius:"6px",position:"absolute",left:"0",top:"50%",marginTop:"-6px"}},p=h["default"].scale.category10().range(),y=function(e){function t(e){return l(this,t),r(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),o(t,null,[{key:"propTypes",get:function(){return{config:s["default"].PropTypes.array,data:s["default"].PropTypes.array}}},{key:"defaultProps",get:function(){return{data:[1,2,3,4,5,6,7,8,9,10]}}}]),o(t,[{key:"getList",value:function(){var e=this;return this.props.data.map(function(t,a){return s["default"].createElement("li",{key:a},s["default"].createElement("span",{className:"icon",style:{backgroundColor:e.getIconColor(a)}}),t.type)})}},{key:"getIconColor",value:function(e){return"undefined"!=typeof this.props.config&&this.props.config.length>e?this.props.config[e].color:p[e]}},{key:"render",value:function(){return s["default"].createElement("div",{className:"legend-container"},s["default"].createElement(u.Style,{scopeSelector:".legend-container",rules:f}),s["default"].createElement("ul",{className:"legend"},this.getList()))}}]),t}(s["default"].Component);t["default"]=y}});
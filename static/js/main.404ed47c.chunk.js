(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(n){n.exports=[{question:"\u3042",answer:"a"},{question:"\u3044",answer:"i"},{question:"\u3046",answer:"u"},{question:"\u3048",answer:"e"},{question:"\u304a",answer:"o"},{question:"\u304b",answer:"ka"},{question:"\u304d",answer:"ki"},{question:"\u304f",answer:"ku"},{question:"\u3051",answer:"ke"},{question:"\u3053",answer:"ko"},{question:"\u3055",answer:"sa"},{question:"\u3057",answer:"shi"},{question:"\u3059",answer:"su"},{question:"\u305b",answer:"se"},{question:"\u305d",answer:"so"}]},18:function(n,e,t){n.exports=t(30)},30:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(9),o=t.n(i),c=(t(24),t(4)),u=t(5),s=t(7),l=t(6),h=t(3),f=t(8),b=t(11),d=function(n){for(var e,t,r=n.length;r;)t=Math.floor(Math.random()*r--),e=n[r],n[r]=n[t],n[t]=e;return n},p=t(2),m=t(1);function v(){var n=Object(p.a)(["\n    background: ",";\n    color: ",";\n    font-size: 20px;\n    font-style: italic;\n    font-weight: 400;\n    border: none;\n    border-bottom: "," solid 3px;\n    padding: 10px;\n    margin: 10px;\n    width: 120px;\n    flex: none;\n    display: flex;\n    justify-content: center;\n    :focus {outline:0;}\n    :visited{\n          color: black;\n    }\n    @media (hover) {\n        :hover {\n            color: ",";\n            border-bottom: "," solid 3px;\n        }\n    }\n\n"]);return v=function(){return n},n}var w=m.c.button(v(),function(n){return n.theme.bg},function(n){return n.theme.fg},function(n){return n.theme.fg},function(n){return n.theme.main},function(n){return n.theme.main});function g(){var n=Object(p.a)(["\n    height: 150px;\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n"]);return g=function(){return n},n}var j=m.c.div(g());function O(){var n=Object(p.a)(["\n  width: 220px;\n  text-align: left;\n  margin-top: 0;\n  font-size: 50px;\n  display: flex;\n  justify-content: center;\n  p {\n    margin: 0;\n    font-style: italic;\n    font-weight: 400;\n  }\n"]);return O=function(){return n},n}var x=m.c.div(O()),k=function(n){function e(n){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(l.a)(e).call(this,n))).handleSubmit=t.handleSubmit.bind(Object(h.a)(t)),t}return Object(f.a)(e,n),Object(u.a)(e,[{key:"handleSubmit",value:function(n){this.props.onSubmit(n)}},{key:"render",value:function(){return a.a.createElement(j,null,a.a.createElement(x,null,a.a.createElement("p",null,this.props.answer)),a.a.createElement(w,{onClick:this.handleSubmit},"Go again"))}}]),e}(r.Component),y=function(n){function e(n){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(l.a)(e).call(this,n))).handleClick=t.handleClick.bind(Object(h.a)(t)),t.state={class:""},t}return Object(f.a)(e,n),Object(u.a)(e,[{key:"handleClick",value:function(n){this.props.answer===this.props.value?this.props.onClick():this.setState({class:"incorrect"})}},{key:"render",value:function(){return a.a.createElement(w,{onClick:this.handleClick,className:this.state.class},this.props.children)}}]),e}(r.Component),E=function(n){function e(n){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(l.a)(e).call(this,n))).handleSubmit=t.handleSubmit.bind(Object(h.a)(t)),t}return Object(f.a)(e,n),Object(u.a)(e,[{key:"handleSubmit",value:function(n){this.props.onSubmit(n)}},{key:"render",value:function(){var n=this;return a.a.createElement(j,null,this.props.choices.map(function(e){return a.a.createElement(y,{key:e,value:e,answer:n.props.answer,onClick:function(){return n.handleSubmit(e)}},e)}))}}]),e}(r.Component);function S(){var n=Object(p.a)(["\n  background-color: ",";\n  color: ",";\n  flex: none;\n  height: 350px;\n  width: 300px;\n  margin-top: 10vh;\n  padding: 30px 0;\n  border: solid 1px ",";\n  border-radius: 30px;\n  box-shadow: 3px 3px rgb(30, 30, 30);\n  text-align: center;\n"]);return S=function(){return n},n}function q(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n"]);return q=function(){return n},n}var C=m.c.div(q()),R=m.c.div(S(),function(n){return n.theme.bg},function(n){return n.theme.fg},function(n){return n.theme.fg}),z=function(n){return a.a.createElement(C,null,a.a.createElement(R,null,n.children))};function B(){var n=Object(p.a)(["\n  font-size: 6rem;\n  margin: 3rem;\n"]);return B=function(){return n},n}var F=m.c.h1(B());function I(){var n=Object(p.a)(["\n  position: absolute;\n  font-size: 60px;\n  margin: 0 30px;\n  transform: rotate(330deg);\n"]);return I=function(){return n},n}var L=m.c.div(I()),M=function(n){return a.a.createElement(L,null,a.a.createElement("span",{role:"img","aria-label":"props.label"},n.value))};function U(){var n=Object(p.a)(['\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    background: ',";\n  }\n  \n  .incorrect {\n    color: #eee;\n    border-bottom: 3px solid #eee;\n    pointer-events: none;\n  };\n  "]);return U=function(){return n},n}var G={bg:"#fff",fg:"rgb(10,10,10)",main:"LIGHTSTEELBLUE"},H=Object(m.b)(U(),function(n){return n.theme.main}),J=function(n){return a.a.createElement(m.a,{theme:G},a.a.createElement(r.Fragment,null,a.a.createElement(H,null),n.children))},N=function(n){var e=d(n).slice(0,4);return{question:e[0],choices:d(e).map(function(n){return n.answer})}},T=N(b),D=function(n){function e(n){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(l.a)(e).call(this,n))).handleSubmit=t.handleSubmit.bind(Object(h.a)(t)),t.handleReset=t.handleReset.bind(Object(h.a)(t)),t.state={test:T.question,choices:T.choices,flipped:!1},t}return Object(f.a)(e,n),Object(u.a)(e,[{key:"handleSubmit",value:function(n){this.setState({flipped:!0})}},{key:"handleReset",value:function(n){var e=N(b);this.setState({test:e.question,choices:e.choices,flipped:!1})}},{key:"render",value:function(){var n=this.state.flipped;return a.a.createElement(J,null,a.a.createElement(z,null,n&&a.a.createElement(M,{label:"white-flower",value:"\ud83d\udcae"}),a.a.createElement(F,null,this.state.test.question),n?a.a.createElement(k,{answer:this.state.test.answer,onSubmit:this.handleReset}):a.a.createElement(E,{choices:this.state.choices,answer:this.state.test.answer,onSubmit:this.handleSubmit})))}}]),e}(r.Component);o.a.render(a.a.createElement(D,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.404ed47c.chunk.js.map
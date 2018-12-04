[1, 2, 3].map(n => n ** 2);
const x = [1, 2, 3];
console.log("es6 syantax above");

class Second extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement("h2", null, "Hello from Second Class "), React.createElement(Hello, null));
  }

}

ReactDOM.render(React.createElement(Second, null), document.getElementById('root'));
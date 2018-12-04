class Hello extends React.Component {
  render() {
    return React.createElement("div", {
      className: "Hello"
    }, React.createElement("h1", null, "Hello World from es6"));
  }

}
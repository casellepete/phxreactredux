
      alert("hhi");

      console.log("hey");

    var BookBox = React.createClass({
      displayName: "Toolbox",
      getInitialState: function() {
      return {color: "#EEEEEE", tools: [ {name: "Hammer", is_rusty: false },
                                         {name: "Wrench", is_rusty: false }]
      },
      render: function render() {
        console.log(this.state.tools)
        var tools = this.state.tools.map(function(tool){
          return React.createElement(Tool, tool);
        });
        return React.createElement( 
          "div", 
          "null", 
          tools);
      }
    });
  
    var Tool = React.createClass({
      render: function render() {
        return React.createElement("div", "null", "hi");
      }
 
  
  ReactDOM.render(React.createElement(Toolbox, $("#toolbox")[0]);
  




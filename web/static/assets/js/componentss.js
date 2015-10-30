
    var Toolbox = React.createClass({
      displayName: "Toolbox",
      getInitialState: function() {
      return {color: "#EEEEEE", tools: [ {name: "Hammer", used: 0 },
                                         {name: "Wrench", used: 0 }] }
      },
      render: function render() {
        var tools = this.state.tools.map(function(tool){
          return <Tool tool={tool} />
        });
        return <div style={{backgroundColor: this.state.color}}>{tools}</div>;
      }
    });
  
    var Tool = React.createClass({
      render: function render() {
        return <div>{this.props.tool.name} &nbsp; &nbsp; uused {this.props.tool.used} times.</div>;
      }
    });
 
 
  ReactDOM.render(<Toolbox />, $("#toolbox")[0] );
  




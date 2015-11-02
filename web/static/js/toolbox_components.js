
import React from 'react'
import { Provider, connect } from 'react-redux'
import { toolboxStore } from './toolbox_store.js'



class ToolboxComponents extends React.Component { 
  constructor (props) {
    console.log("store:");
    console.log(toolboxStore.getState());
    console.log(":store:");
    super(props);
    this.state = toolboxStore.getState();
  }
  componentDidMount () {
    console.log("component mounted");
  }
  render() {
    console.log("renderprops:");
    console.log(this.props);
    console.log(":renderprops");
    var tools = this.state.tools.map(function(tool){
      return <Tool key={key} tool={tool} />
    });
    return <div style={{backgroundColor: this.state.color}} >{tools}</div>;
  }
 
}


function mapStateToProps (state) {
  return {color: state.color,
          tools: state.tools}
}


function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: () => dispatch('INCREMENT_USED')
  }
}


console.log("hello from wwwebpack");


export default connect(mapStateToProps, mapDispatchToProps)(ToolboxComponents)



class Tool extends React.Component {
  increment (e) {
    alert("clicked");
    e.preventDefault()
    toolboxStore.dispatch({ type: 'INCREMENT_USED' })
  }

  render() {
    return (
      <div>
        {this.props.tool.name} 
        <button onClick={this.increment}>used: {this.props.tool.used}</button>
      </div>
    );
  }
}


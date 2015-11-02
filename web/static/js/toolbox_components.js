
import React from 'react';
import { Provider, connect } from 'react-redux';
import { toolboxStore } from './toolbox_store.js';
import * as ToolboxActions from './toolbox_actions.js';
import { bindActionCreators } from 'redux';




class ToolboxComponents extends React.Component { 
  constructor (props) {
    super(props);
    this.state = toolboxStore.getState();
  }
  increment (e) {
    e.preventDefault()
    toolboxStore.dispatch(ToolboxActions.increment_used("hi"));
  }
  componentDidMount () {
    console.log("component mounted");
  }
  render() {
    var tools = this.props.tools.map(function(tool){
      return <Tool key={tool.key} tool={tool} />
    });
    return (<div style={{backgroundColor: this.props.color}} >
             <span onClick={this.increment} >bigclick</span>
             {tools}
            </div>);
  }
 
}


function mapStateToProps (state) {
  return {color: state.color,
          tools: state.tools}
}


function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: bindActionCreators(ToolboxActions, dispatch)
  }
}


console.log("hello from wwwebpack");


export default connect(mapStateToProps, mapDispatchToProps)(ToolboxComponents)



class Tool extends React.Component {
  increment (e) {
    alert("clicked");
    e.preventDefault()
    toolboxStore.dispatch(ToolboxActions.increment_used("hi"));
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


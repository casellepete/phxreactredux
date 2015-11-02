
import React from 'react';
import { Provider, connect } from 'react-redux';
import { toolboxStore } from './toolbox_store.js';
import * as ToolboxActions from './toolbox_actions.js';
import { bindActionCreators } from 'redux';




///////////////////////////////
//          Toolbox          //
///////////////////////////////
class ToolboxComponents extends React.Component { 
  constructor (props) {
    super(props);
    this.state = toolboxStore.getState();
  }
  change_color (e) {
    e.preventDefault()
    toolboxStore.dispatch(ToolboxActions.change_color());
  }
  componentDidMount () {
    console.log("component mounted");
  }
  render() {
    var tools = this.props.tools.map(function(tool){
      return <Tool key={tool.key} tool={tool} />
    });
    return (<div style={{backgroundColor: this.props.color}} >
             <span onClick={this.change_color}>random color</span>
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



///////////////////////////////
//            Tool           //
///////////////////////////////
class Tool extends React.Component {
  increment(e) {
    e.preventDefault()
    toolboxStore.dispatch(ToolboxActions.increment_used("hi"));
  }

  render(e) {
    return (
      <div>
        {this.props.tool.name} 
        <button onClick={this.increment}>used: {this.props.tool.used}</button>
      </div>
    );
  }
}


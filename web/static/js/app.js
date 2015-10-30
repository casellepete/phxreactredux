//import socket from "./socket"

import React from 'react'
import { Provider, connect } from 'react-redux'
import { toolboxStore } from './toolbox_store.js'
//import ToolboxComponents from './toolbox_components.js'

// Requiring scss in javascript? Ya... I know it's weird
require("../css/app.scss");


let ToolboxComponents = React.createClass({
      displayName: "Toolbox",
      getInitialState: function() {
        return this.props
      },
      render: function render() {
        console.log(this.props);
        var tools = this.state.tools.map(function(tool){
          return <Tool tool={tool} />
        });
        return <div style={{backgroundColor: this.state.color}} >{tools}</div>;
      }
    });
  
    var Tool = React.createClass({
      render: function render() {
        return (
          <div>
            {this.props.tool.name} 
            <button onClick={this.increment}>used: {this.props.tool.used}</button>
          </div>);
      },
      increment (e) {
        e.preventDefault()
        toolboxStore.dispatch({ type: 'INCREMENT_USED' })
      }

    });
 


function mapStateToProps (state) {
  return {tools: state.tools,
          color: state.color
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: () => dispatch('INCREMENT_USED')
  }
}

var App = connect(mapStateToProps, mapDispatchToProps)(ToolboxComponents)

    console.log("hello from wwwebpack");

    var someitem = $("#toolbox")[0] 


    let abc = (      <Provider store={toolboxStore}>
               {() => <App />}
                     </Provider>)

    $(document).ready(function() {
    React.render( abc, someitem);

    });





 
  




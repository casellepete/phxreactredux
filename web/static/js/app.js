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
      return {color: "#EEEEEE", tools: [ {key: 1, name: "Hammer", used: 0 },
                                         {key: 2, name: "Wrench", used: 0 }] }
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
  return {}
}

let App = connect(mapStateToProps,
                  mapDispatchToProps
)(ToolboxComponents)

    console.log("hello from wwwebpack");

    var someitem = $("#toolbox")[0] 

//    let abc = (<Provider store={toolboxStore}>
//                 <App />
//              </Provider>)

    let abc = (      <Provider store={toolboxStore}>
               {() => <App />}
                     </Provider>)

    $(document).ready(function() {
    React.render( abc, someitem);

    });

                 //<Provider store={toolboxStore}>
                 //</Provider>,




 
  




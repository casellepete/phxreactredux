//import socket from "./socket"

import React from 'react'
import { Provider, connect } from 'react-redux'
import { toolboxStore } from './toolbox_store.js'
import ToolboxComponents from './toolbox_components.js'

// Requiring scss in javascript? Ya... I know it's weird
require("../css/app.scss");


React.render(
    <Provider store={toolboxStore}>
      {() => <ToolboxComponents />}
    </Provider>,
    $("#toolbox")[0]
);




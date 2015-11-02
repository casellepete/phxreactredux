


const initialState = {
  color: "#FF00FF", tools: [{key: 101, name: "Hammer", used: 15},
                            {key: 102, name: "Wrench", used: 16}] 
                     }


export const ToolboxReducers = function tools(state = initialState, action) {
      let count = state.tools[0].used
      switch (action.type) {
        case 'INCREMENT_USED':
          var new_tools = state.tools.map(function (tool) {
            return {key: tool.key,
                    name: tool.name,
                    used: tool.used + (tool.key == action.tool_id ? 1 : 0) }
          });
          return {color: state.color, tools: new_tools }
        case 'CHANGE_COLOR':
          return {color: action.new_color, 
                  tools: [...state.tools]}
        default:
          return state
      }
    }


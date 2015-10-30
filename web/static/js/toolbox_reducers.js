


const initialState = {
                      color: "#FF00FF", tools: [{name: "Hammer", used: 15},
                                                {name: "Wrench", used: 16}] 
                     }


export const ToolboxReducers = function tools(state = initialState, action) {
      let count = state.tools[0].used
      switch (action.type) {
        case 'INCREMENT_USED':
          return {color: "#555555", tools: [{name: "Hammer", used: 35}, {name: "Wrench", used: 36}] }
        default:
          return state
      }
    }





const initialState = {
  color: "#FF00FF", tools: [{key: 101, name: "Hammer", used: 15},
                            {key: 102, name: "Wrench", used: 16}] 
                     }


export const ToolboxReducers = function tools(state = initialState, action) {
      let count = state.tools[0].used
      switch (action.type) {
        case 'INCREMENT_USED':
          return {color: state.color, tools: [{key: 101, name: "Hammer", used: 35}, {key: 102, name: "Wrench", used: 36}] }
        case 'CHANGE_COLOR':
          return {color: ('#' + Math.floor(Math.random()*16777215).toString(16) ), 
                  tools: [...state.tools]}
        default:
          return state
      }
    }


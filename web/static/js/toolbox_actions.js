
import toolboxStore from './toolbox_store.js';

const ToolboxActions = {};


ToolboxActions.increment_used = function increment_used(tool_id) {
  return { type: 'INCREMENT_USED', 
           tool_id: tool_id}
}

ToolboxActions.change_color = function change_color(new_color) {
  return { type: 'CHANGE_COLOR',
           new_color: new_color}
}

export default ToolboxActions;

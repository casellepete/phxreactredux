
import toolboxStore from './toolbox_store.js';

const ToolboxActions = {};


ToolboxActions.increment_used = function increment_used(something) {
  return { type: 'INCREMENT_USED', something }
}

ToolboxActions.change_color = function change_color() {
  return { type: 'CHANGE_COLOR' }
}

export default ToolboxActions;

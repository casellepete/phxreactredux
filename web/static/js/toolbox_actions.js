
import toolboxStore from './toolbox_store.js';

const ToolboxActions = {};


ToolboxActions.increment_used = function increment_used(something) {
  console.log("hello from the action");
  return { type: 'INCREMENT_USED', something }
}

export default ToolboxActions;

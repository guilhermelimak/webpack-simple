export const incrementCounter = makeAction('INCREMENT');

function makeAction (type) {
  return ({dispatch}, ...args) => dispatch(type, ...args);
}

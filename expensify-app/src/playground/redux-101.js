import {createStore} from 'redux';



const store = createStore((state = {count: 0}, action) => {


  const actionHandler = {
    'INCREMENT': () => ({count: state.count + 1})
  }

  if (actions.indexOf(action.type) === -1) return state;
  
  return actionHandler[action.type]();
  
});

console.log(store.getState())

store.dispatch({
  type: 'INCREMENT'
});

console.log(store.getState())
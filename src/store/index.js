import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';


// Örnek Reducer
const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

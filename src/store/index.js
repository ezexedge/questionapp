import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  categoryReducer,
  productReducer,
  cartReducer,
  ordersReducer,
  authReducer,
} from './reducers';
import {
  questionListReducer,
  questionReducer,
  questionSingleReducer,
} from './reducers/question.reducer';

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
  question: questionReducer,
  questionList: questionListReducer,
  questionSingle: questionSingleReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

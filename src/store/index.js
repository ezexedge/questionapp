import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  categoryReducer,
  productReducer,
  cartReducer,
  ordersReducer,
  authReducer,
  questionReducer,
} from './reducers';

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
  question: questionReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

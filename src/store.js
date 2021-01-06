import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';//rootReducer可以理解成一个数组，里面有多个函数，函数返回值为新的state
const data = {};//初始状态
const middleware = [ thunk ];//中间件，处理异步函数
export const store = createStore(rootReducer,data,applyMiddleware(...middleware))

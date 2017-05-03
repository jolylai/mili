import thunk from 'redux-thunk' // redux 作者开发的异步处理方案 可以在action 里传入 dispatch getState
import { createLogger } from 'redux-logger' // 利用redux-logger打印日志
import { createStore, applyMiddleware } from 'redux'; // 引入redux createStore、中间件及compose
import rootReducer from '../reducers/index';// 引入reducers集合

//引入redux-devtools-extension的可视化工具（有点吊）
import { composeWithDevTools } from 'redux-devtools-extension';//devToolsEnhancer,

// 调用日志打印方法 collapsed是让action折叠，看着舒服点
const loggerMiddleware = createLogger({collapsed:true});

// 创建一个中间件集合
const middleware = [thunk, loggerMiddleware];

let appStore = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);
export default appStore;

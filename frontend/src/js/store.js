import { applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import reducer from "./reducers/reducer";

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(reducer, middleware);
import postReducers from "./postReducers";
import commentReducers from "./commentReducers";
import replyReducers from "./replyReducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    postReducers, commentReducers, replyReducers
})

export default rootReducer;
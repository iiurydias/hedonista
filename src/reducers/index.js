import destination from "./destination";
import duration from "./duration";
import distance from "./distance";
import clicked from "./clicked";

import {combineReducers} from "redux";


export default combineReducers({
    destination,
    duration,
    distance,
    clicked
});
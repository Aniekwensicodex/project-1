import {combineReducers} from "redux"
import {userRegisterReducer, userSignInReducer} from "./userReducer"

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userAuth: userSignInReducer,
})

export {rootReducer}

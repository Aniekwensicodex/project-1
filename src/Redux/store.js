import {legacy_createStore as createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {persistReducer} from "redux-persist"
import {rootReducer} from "./Reducers/rootReducer"
import storage from "redux-persist/lib/storage"
import {createLogger} from "redux-logger"
const logger = createLogger()

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userAuth"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunk]

const configStore = () => {
  return createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware, logger))
  )
}

export default configStore

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { createWrapper } from "next-redux-wrapper";
function makeStore(context) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  if (!context.ctx?.req) {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  return store;
}

export const reduxWrapper = createWrapper(makeStore, { debug: true });

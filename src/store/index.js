import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer } from '../reducers';
import sagas from '../sagas';

export function configureStore(history, initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware( sagaMiddleware, routerMiddleware(history));
  const store = createStore(rootReducer, initialState, middleware);

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from './sagas'

// const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  collapsed: true
})

const createStore = () => {
  const store = reduxCreateStore(
    rootReducer,
    // applyMiddleware(sagaMiddleware, logger)
    applyMiddleware(logger)
  )

  // sagaMiddleware.run(rootSaga)

  return store
}

export default createStore

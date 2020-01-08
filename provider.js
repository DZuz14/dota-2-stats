/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Provider } from 'react-redux'
import createStore from './src/store'

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)

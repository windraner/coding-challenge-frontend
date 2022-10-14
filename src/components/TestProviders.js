import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import reducer from 'redux-store/main-slice'
import theme from 'styles/theme'

export default function TestProviders ({ preloadedState, children }) {
  return (
    <Provider store={configureStore({ reducer, preloadedState })}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Provider>
  )
}

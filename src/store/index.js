import { configureStore } from '@reduxjs/toolkit'

import weather from './features/weather';

export const store = configureStore({
  reducer: {
    weather
  },
})
import { configureStore } from '@reduxjs/toolkit'
import { Mealdb } from './Mealdb'




export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [Mealdb.reducerPath]: Mealdb.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([Mealdb.middleware]),
})
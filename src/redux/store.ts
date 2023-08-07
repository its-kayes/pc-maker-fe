import { configureStore } from '@reduxjs/toolkit'
import pcBuildSliceRed from './features/pcBuild/pcBuildSlice'

export const store = configureStore({
    reducer: {
        pcBuild: pcBuildSliceRed
    },
    devTools: process.env.NODE_ENV !== 'production',
    // middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
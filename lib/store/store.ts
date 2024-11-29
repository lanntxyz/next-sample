import { api } from "@/lib/slices/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const makeStore = () => {
    return configureStore({
        reducer: {
            // TODO: Add your reducers here
            [api.reducerPath]: api.reducer,
        },
        // TODO: Add your middleware here
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
        devTools: process.env.NODE_ENV !== 'production',
    });
}

setupListeners(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

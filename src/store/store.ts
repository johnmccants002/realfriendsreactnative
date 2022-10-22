import {
    AnyAction,
    combineReducers,
    configureStore,
    Store,
    ThunkAction,
    ThunkDispatch,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'

import usersSlice from './usersSlice'

// import postsSlice from './postsSlice'

export const rootReducer = combineReducers({
    users: usersSlice.reducer
})

export const store = configureStore({
    reducer: {
        // users: usersSlice.reducer,
    },
    enhancers: getDefaultEnhancers => getDefaultEnhancers.concat(),
    middleware(getDefaultMiddlewares) {
            return getDefaultMiddlewares();
        },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type AppStore = Omit<Store<RootState, AnyAction>, 'dispatch'> & {
    dispatch: AppThunkDispatch;
}

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>;




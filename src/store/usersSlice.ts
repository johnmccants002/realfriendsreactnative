import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { AppThunk } from '../store';
import { Alert } from 'react-native';
import * as _ from 'lodash';


const BASE_URL = 'http://localhost:3000/api'

export interface UserProps {
    id?: number;
    email?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    token?: string;
    about?: string;
    imageUrl?: string;
}


export interface UsersState {
    currentUser: UserProps;
    selectedUsers: UserProps[];
    isRegistered: false;
    loading: boolean;
    error: typeof undefined | object;
}

const initialState = {
    currentUser: {} || null,
    selectedUsers: [],
    isRegistered: false,
    loading: false,
    error: undefined
} as UsersState;

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})



export default usersSlice
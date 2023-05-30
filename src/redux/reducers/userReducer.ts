import { createReducer } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


type userReducerType = {
    _id: string,
    email: string,
    name: string,
    role: string
}

const initialState = {
    _id: '',
    email: '',
    name: '',
    role: ''
} as userReducerType

const userReducer = createReducer(initialState, {
    setUser: (state, action: PayloadAction<userReducerType>) => {
        state._id = action.payload._id
        state.email = action.payload.email
        state.name = action.payload.name
        state.role = action.payload.role
    }
});

export default userReducer;
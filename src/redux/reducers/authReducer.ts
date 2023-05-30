import { createReducer } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface AuthReducerUserType {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    image?: string;
    gender?: string;
    currentAddress?: string;
    permanentAddress?: string;
    dateOfBirth?: string;
    createdAt?: string;
    updatedAt?: string;
};

export interface AuthReducerStateType {
    isLoading?: boolean;
    isAuthenticate?: boolean;
    role?: string;
    isAdmin?: boolean;
    isUser?: boolean;
    accessToken?: string;
    accountStatus: string;
    ownerInfo: AuthReducerUserType;
};




const initialState = {
    isLoading: false,
    isAuthenticate: false,
    role: "",
    isAdmin: false,
    isUser: false,
    accessToken: "",
    accountStatus: '',
    ownerInfo: {
        _id: "",
        name: '',
        email: '',
        phone: '',
        image: '',
        gender: '',
        currentAddress: '',
        permanentAddress: '',
        dateOfBirth: '',
        createdAt: '',
        updatedAt: ''
    },
} as AuthReducerStateType;



const authReducer = createReducer(initialState, {
    loginUser: (state, action) => {
        state.isAuthenticate = true
    },
    accessAdmin: (state, action) => {
        state.isAdmin = true
    },
    accessUser: (state, action) => {
        state.isUser = true;
    },
    accountStatus: (state, action) => {
        state.accountStatus = action.payload
    },
    userRole: (state, action) => {
        state.role = action.payload
    },
    accessToken: (state, action: PayloadAction<string>) => {
        state.accessToken = action.payload
    },
    setOwnerInfo: (state, action: PayloadAction<AuthReducerUserType>) => {
        state.ownerInfo._id = action.payload._id
        state.ownerInfo.name = action.payload.name
        state.ownerInfo.email = action.payload.email
        state.ownerInfo.phone = action.payload.phone
        state.ownerInfo.image = action.payload.image
        state.ownerInfo.gender = action.payload.gender
        state.ownerInfo.currentAddress = action.payload.currentAddress
        state.ownerInfo.permanentAddress = action.payload.permanentAddress
        state.ownerInfo.dateOfBirth = action.payload.dateOfBirth
        state.ownerInfo.createdAt = action.payload.createdAt
        state.ownerInfo.updatedAt = action.payload.updatedAt
    },
    logOutUser: (state, action) => {
        state.isAuthenticate = false;
        state.isLoading = false;
        state.isAdmin = false;
        state.role = "";
        state.isUser = false;
        state.accountStatus = "";
        state.accessToken = "";
        state.ownerInfo = {
            _id: "",
            name: '',
            email: '',
            phone: '',
            image: '',
            gender: '',
            currentAddress: '',
            permanentAddress: '',
            dateOfBirth: '',
            createdAt: '',
            updatedAt: ''
        };
    },
})

export default authReducer;
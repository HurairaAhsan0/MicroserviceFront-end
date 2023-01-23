import { configureStore } from '@reduxjs/toolkit';
import OrganizationListReducer from '../Reducers/OrganizationReducers/OrganizationListReducer';
import UserListReducer from '../Reducers/UserReducers/UserListReducer';

export const store = configureStore({
    reducer: {
        UserList: UserListReducer,
        OrganizationList: OrganizationListReducer,

    },
})
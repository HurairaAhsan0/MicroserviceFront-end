import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const access_Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzbWFuQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFprSDJSM3hLbFRmYVBvQ0xhekt3dk9XRGVBcXZ6OHBScDQuYmM0Y0NvekQ1UXk4bzg3amouIiwiaWF0IjoxNjc0NDU2NTg2LCJleHAiOjE2NzQ0NjAxODZ9.-upwn1YXxXbwSXyGWHY1LK6mAqiBXN7LKk5OY_QsXx0';
export const UserListAsync = createAsyncThunk('UserList', async () => {
    const Response = await axios.get('http://localhost:3000/user', {
        headers: {
            'Authorization': `Bearer ${access_Token}`
        }
    });
    return Response.data;
})

export const initialState = {
    UserList: [],
}
export const UserListSlice = createSlice({
    name: "UserList",
    initialState,
    reducers: {
        List: (state, { payload }) => {
            state.UserList = payload;
        }
    },
    extraReducers: {
        [UserListAsync.pending]: () => {
            console.log('pending...')
        },
        [UserListAsync.fulfilled]: (state, { payload }) => {
            console.log('fullfilled')
            return { ...state, UserList: payload }
        },
        [UserListAsync.rejected]: () => {
            console.log('rejected....')
        },
    }

})
export const { List } = UserListSlice.actions;
export default UserListSlice.reducer;
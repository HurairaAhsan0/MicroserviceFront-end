import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const access_Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzbWFuQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJFprSDJSM3hLbFRmYVBvQ0xhekt3dk9XRGVBcXZ6OHBScDQuYmM0Y0NvekQ1UXk4bzg3amouIiwiaWF0IjoxNjc0NDU2NTg2LCJleHAiOjE2NzQ0NjAxODZ9.-upwn1YXxXbwSXyGWHY1LK6mAqiBXN7LKk5OY_QsXx0';
export const OrganizationListAsync = createAsyncThunk('OrganizationList', async () => {
    const Response = await axios.get('http://localhost:3000/org', {
        headers: {
            'Authorization': `Bearer ${access_Token}`
        }
    });
    return Response.data;
})

export const initialState = {
    OrganizationList: [],
}
export const OrganizationListSlice = createSlice({
    name: "OrganizationList",
    initialState,
    reducers: {
        OrganizationList: (state, { payload }) => {
            state.OrganizationList = payload;
        }
    },
    extraReducers: {
        [OrganizationListAsync.pending]: () => {
            console.log('pending...')
        },
        [OrganizationListAsync.fulfilled]: (state, { payload }) => {
            console.log('fullfilled')
            return { ...state, OrganizationList: payload }
        },
        [OrganizationListAsync.rejected]: () => {
            console.log('rejected....')
        },
    }

})
export const { OrganizationList } = OrganizationListSlice.actions;
export default OrganizationListSlice.reducer;
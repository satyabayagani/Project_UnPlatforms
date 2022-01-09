import { configureStore, createSlice } from "@reduxjs/toolkit";

const initial = [{ views: 0, likes: 0, shares: 0, comments: 0 }]
let initComments = []
const dataSlice = createSlice({
    name: 'dataslice',
    initialState: { initial },
    reducers: {
        getData(state, action) {
            state.initial = [...action.payload];
        }
    }
})

const commentSlice = createSlice({
    name: 'comment',
    initialState: { initComments, showbox: false, showcomments: false },
    reducers: {
        addComment(state, action) {

            state.initComments = [...action.payload, ...state.initComments]
        },
        showOrHideBox(state) {
            state.showbox = !state.showbox
        },
        showOrHideComments(state) {
            state.showcomments = !state.showcomments
        }
    }
})

const store = configureStore({
    reducer: { dataslice: dataSlice.reducer, comment: commentSlice.reducer }
})

// export const visible_action=commentSlice.actions;
export const action = dataSlice.actions;
export const commentAction = commentSlice.actions;
export default store;
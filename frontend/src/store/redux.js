import { configureStore, createSlice } from "@reduxjs/toolkit";

const initial=[{views:0,likes:0,shares:0,comments:0}]
const dataSlice = createSlice({
    name:'dataslice',
    initialState:{initial},
    reducers:{
        getData(state, action){
            state.initial=[...action.payload];
        }
    }
})

// const commentSlice = createSlice({
//     name:'comment',
//     initialState:true,
//     reducers:{
//         hideshow(state){
//             state=!state
//         }
//     }
// })

const store=configureStore({
    reducer:{dataslice:dataSlice.reducer}
})

// export const visible_action=commentSlice.actions;
export const action=dataSlice.actions;
export default store;
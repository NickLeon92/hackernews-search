import { createSlice } from '@reduxjs/toolkit'

const termSlice = createSlice({
    name: 'term',
    initialState: [],
    reducers: {
        updateHistory: (state,actions) => {
            state = state.push(actions.payload)
        }
    }
})

export const {updateHistory} = termSlice.actions

export default termSlice.reducer
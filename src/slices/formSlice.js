import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions:[]
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
        
        let oldState = state.questions;
        oldState.push(action.payload)

        state.questions = oldState;
    },
    removeQuestion: (state, action) => {
        let targetIndex = state.questions.indexOf(action.payload )
        if (!state.questions) return;

        state.questions = state.questions.filter( questionItem => state.questions.indexOf(questionItem) !== targetIndex)
    }
  },
})

export const { removeQuestion, addQuestion } = formSlice.actions

export default formSlice.reducer
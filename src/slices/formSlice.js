import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions:[]
}

//if you have a question check it off and push in the URL and then the summary page will go thru the array 
// and if there is say 'changes' add a questions image in front of the list

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
        //pushing in a specific page 
        console.log(action.payload, 'action payload')
        
        let oldState = state.questions;
        oldState.push(action.payload)

        state.questions = oldState;
        console.log(state.questions, 'did it get added')
    },
    removeQuestion: (state, action) => {
        let targetIndex = state.questions.indexOf(action.payload )
        if (!state.questions) return;

        state.questions = state.questions.filter( questionItem => state.questions.indexOf(questionItem) !== targetIndex)
    }
  },
})

// Action creators are generated for each case reducer function
export const { removeQuestion, addQuestion } = formSlice.actions

export default formSlice.reducer
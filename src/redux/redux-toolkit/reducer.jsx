import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const combineReducersAction = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.task.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.task = state.task.filter((x) => x.id !== action.payload);
    },
  },
});

export const {addtodo,deleteTodo} = combineReducersAction.actions
const allreducers = combineReducersAction.reducer
export default allreducers;

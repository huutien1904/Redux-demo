import { ADD_TODO,MARK_COMPLETE,DELETE_TODO,GET_TODOS } from "../types";

const initialState = {
    todos :[]
}
const todoReducer = (state = initialState,action) => {
  switch(action.type){
    case GET_TODOS:
        return {
            ...state,
            todos: action.payload
        }
    default: 
        return state;
  }
}

export default todoReducer
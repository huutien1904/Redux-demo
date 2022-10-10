import axios from "axios";
import { ADD_TODO,MARK_COMPLETE,DELETE_TODO,GET_TODOS } from "../types";


export const getTodos = () => async dispatch => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/todos?_limit=3'
		)
		console.log(response.data);
		dispatch({
			type: GET_TODOS,
			payload: response.data
		})
	} catch (error) {
		console.log(error)
	}
}
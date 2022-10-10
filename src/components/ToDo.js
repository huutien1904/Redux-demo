import React from 'react'
import TodoForm from './TodoForm'

const ToDo = () => {
  return (
    <div className='todo-list'>
			<TodoForm />
			<ul>
				{todos.map(todo => (
					<li key={todo.id} className={todo.completed ? 'completed' : ''}>
						{todo.title}
						<input
							type='checkbox'
							// onChange={markComplete.bind(this, todo.id)}
						/>
						<button 
                        // onClick={deleteTodo.bind(this, todo.id)}
                        >Delete</button>
					</li>
				))}
                
			</ul>
		</div>
  )
}

export default ToDo
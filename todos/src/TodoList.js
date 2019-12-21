import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const APIURL = "/api/todos/";

function TodoList(props) {
	const [todos, setTodos] = useState([]);

	const loadTodos = () => {
		fetch(APIURL)
			.then((res) => {
				if (!res.ok) {
					if (res.status >= 400 && res.status < 500) {
						return res.json().then((data) => {
							let err = { errorMessage: data.message };
							throw err;
						});
					} else {
						let err = { errorMessage: "please try again later" };
						throw err;
					}
				}
				return res.json();
			})
			.then((todos) => setTodos(todos));
	};

	useEffect(() => {
		loadTodos();
	});

	const addTodo = (val) => {
		fetch(APIURL, {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: JSON.stringify({ name: val })
		})
			.then((res) => {
				if (!res.ok) {
					if (res.status >= 400 && res.status < 500) {
						return res.json().then((data) => {
							let err = { errorMessage: data.message };
							throw err;
						});
					} else {
						let err = { errorMessage: "please try again later" };
						throw err;
					}
				}
				return res.json();
			})
			.then((newTodo) => {
				setTodos([...todos, newTodo]);
			});
	};

	const deleteTodo = (id) => {
		const deleteURL = APIURL + id;
		fetch(deleteURL, {
			method: "delete"
		})
			.then((res) => {
				if (!res.ok) {
					if (res.status >= 400 && res.status < 500) {
						return res.json().then((data) => {
							let err = { errorMessage: data.message };
							throw err;
						});
					} else {
						let err = { errorMessage: "please try again later" };
						throw err;
					}
				}
				return res.json();
			})
			.then(() => {
				const todos2 = todos.filter((todo) => todo._id !== id);
				setTodos(todos2);
			});
	};

	const toggleTodo = (todo) => {
		const updateURL = APIURL + todo._id;
		fetch(updateURL, {
			method: "PUT",
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: JSON.stringify({ completed: !todo.completed })
		})
			.then((res) => {
				if (!res.ok) {
					if (res.status >= 400 && res.status < 500) {
						return res.json().then((data) => {
							let err = { errorMessage: data.message };
							throw err;
						});
					} else {
						let err = { errorMessage: "please try again later" };
						throw err;
					}
				}
				return res.json();
			})
			.then((updatedTodo) => {
				const todo3 = todos.map((t) =>
					t._id === updatedTodo._id ? { ...t, completed: !t.completed } : t
				);
				setTodos(todo3);
			});
	};

	return (
		<div>
			<h1>TodoList</h1>
			<TodoForm addTodo={addTodo} />
			<ul>
				{todos.map((t) => (
					<TodoItem
						key={t._id}
						{...t}
						id={t._id}
						t={t}
						onDelete={deleteTodo}
						onToggle={toggleTodo}
					/>
				))}
			</ul>
		</div>
	);
}

export default TodoList;

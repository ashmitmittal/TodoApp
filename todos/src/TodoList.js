import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const APIURL = "/api/todos";

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

	const todos1 = todos.map((t) => <TodoItem key={t._id} {...t} />);

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

	return (
		<div>
			<h1>TodoList</h1>
			<TodoForm addTodo={addTodo} />
			<ol>{todos1}</ol>
		</div>
	);
}

export default TodoList;

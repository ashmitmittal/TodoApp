import React, { useState, useEffect } from "react";

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

	return (
		<div>
			<h1>TodoList</h1>
		</div>
	);
}

export default TodoList;

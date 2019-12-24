import React, { useState } from "react";
import "./App.css";

function TodoFrom(props) {
	const [Inputvalue, SetInput] = useState("");

	const handelChange = (e) => {
		SetInput(e.target.value);
	};

	const handelSubmit = () => {
		props.addTodo(Inputvalue);
	};

	return (
		<div>
			<section className="form">
				<input
					id="todoInput"
					type="text"
					value={Inputvalue}
					placeholder="Add some new task"
					onChange={handelChange}
				/>
				<button className="btn" onClick={handelSubmit}>
					Add Todo
				</button>
			</section>
		</div>
	);
}

export default TodoFrom;

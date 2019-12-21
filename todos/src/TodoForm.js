import React, { useState } from "react";

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
			<input
				type="text"
				value={Inputvalue}
				placeholder="add some new task"
				onChange={handelChange}
			/>
			<button onClick={handelSubmit}>Add Todo</button>
		</div>
	);
}

export default TodoFrom;

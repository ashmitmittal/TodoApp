import React from "react";
import "./App.css";

function TodoItem(props) {
	const handelDelete = () => {
		props.onDelete(props._id);
	};

	const handelToggle = () => {
		props.onToggle(props.t);
	};

	return (
		<div>
			<li className="task">
				<span
					style={{
						textDecoration: props.completed ? "line-through" : "none"
					}}
					onClick={handelToggle}
				>
					{props.name}
				</span>
				<em onClick={handelDelete}> X </em>
			</li>
		</div>
	);
}

export default TodoItem;

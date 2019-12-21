import React from "react";

function TodoItem(props) {
	const handelDelete = () => {
		props.onDelete(props._id);
	};

	const handelToggle = () => {
		props.onToggle(props.t);
	};

	return (
		<div>
			<li>
				<span
					style={{
						textDecoration: props.completed ? "line-through" : "none"
					}}
					onClick={handelToggle}
				>
					{props.name}
				</span>
				<span onClick={handelDelete}> X </span>
			</li>
		</div>
	);
}

export default TodoItem;

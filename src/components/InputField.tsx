import React from "react";
import "./inputfield.scss";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
	return (
		<form
			onClick={(e) => {
				e.preventDefault();
			}}
			className="input"
		>
			<input
				onChange={(e) => e.target.value}
				value={todo}
				type="input"
				placeholder="Enter a task"
				className="input_box"
			/>
			<button className="input_submit">Go</button>
		</form>
	);
};

export default InputField;

import "./App.scss";
import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./components/model";

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	return (
		<div className="App">
			<span className="heading">Taskify</span>
			<InputField todo={todo} setTodo={setTodo} />
		</div>
	);
};

export default App;

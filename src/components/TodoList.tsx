import React from "react";
import { Todo } from "../model";
import { SingleTodo } from "./SingleTodo";
import "./styles.scss";

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
	return (
		<div className="todos">
			{todos.map((todo) => {
				return (
					<SingleTodo
						todo={todo}
						key={todo.id}
						todos={todos}
						setTodos={setTodos}
					/>
				);
			})}
		</div>
	);
};
import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function CompleteTodoList() {
    const todos = useSelector((state) => state.todos);

    const filterByCompleteTodos = (todo) => todo.completed === true;

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
                .filter(filterByCompleteTodos)
                .map((todo) => (
                    <Todo todo={todo} key={todo.id} />
                ))}
        </div>
    );
}

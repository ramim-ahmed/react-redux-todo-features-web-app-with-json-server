import { updateTextField } from "../actions";

const updateText = (todoId, text) => {
    return async (dispatch) => {
        const response = await fetch(`https://json-web-server-2023.herokuapp.com/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                text: text,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const todo = await response.json();

        dispatch(updateTextField(todo.id, todo.text));
    };
};

export default updateText;

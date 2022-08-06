import { Fragment, useState, useEffect } from "react"
import './Todo.css';
import TodoList from "./TodoList";

const Todo = () => {
    const [enteredTodo, setEnteredTodo] = useState('');
    const [todoList, settodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchTodoList = async () => {
            const response = await fetch('https://todo-react-portfolio-default-rtdb.firebaseio.com/TodoList.json');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseData = await response.json();
            const loadedTodos = [];

            for (const key in responseData) {
                loadedTodos.push({
                    id: responseData[key].id,
                    todo: responseData[key].todo
                });
            }

            settodoList(loadedTodos);
            setIsLoading(false);
        };

        fetchTodoList().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    const onAddTodoHandler = (event) => {
        setEnteredTodo(event.target.value);
        if (enteredTodo.trim !== '') {
            setEnteredTodo(event.target.value);
        }
    }

    const onkeyPressHandler = async (e) => {
        if (e.key === "Enter") {
            setEnteredTodo('');
            await fetch('https://todo-react-portfolio-default-rtdb.firebaseio.com/TodoList.json', {
                method: 'POST',
                body: JSON.stringify({
                    id: Math.random(),
                    todo: enteredTodo
                })
            })
        }
    }

    const showTodos = todoList.map((list) => {
        return <TodoList todoItem={list.todo} />
    });

    return (
        <Fragment>
            <div id="container">
                <h1>To-Do To-Day <i class="fa fa-plus"></i></h1>
                <input type="text" value={enteredTodo} placeholder="Add New Todo" onChange={onAddTodoHandler} onKeyPress={(e) => onkeyPressHandler(e)} />
                {isLoading && <p>Loading your Todos...</p>}
                {httpError}
                {console.log('Before')}
                {showTodos}
                {console.log('After')}
            </div>
        </Fragment>
    );
}

export default Todo;
import { Fragment } from "react";

const TodoList = (props) => {
    //Below code is not correct. Hence commented
    // const onDeleteHandler = () => {
    //     console.log('Delete clicked');
    //     fetch('https://todo-react-portfolio-default-rtdb.firebaseio.com/TodoLost.json/0', {
    //         method: 'DELETE'
    //     });
    // }

    return (
        <Fragment>
            <ul>
                <li><span><i class="fa fa-trash"></i> </span>{props.todoItem}</li>
            </ul>
        </Fragment>
    );
}

export default TodoList;
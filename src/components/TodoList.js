import axios from "axios";
import { Fragment, useEffect } from "react";

const TodoList = (props) => {
    const onDeleteHandler = () => {
        console.log('Delete clicked');
        axios.delete('https://todo-react-portfolio-default-rtdb.firebaseio.com/TodoLost/id/0')
            .then(() => console.log('Deleted Successfully'));
    }

    return (
        <Fragment>
            <ul>
                <li><span><i onClick={onDeleteHandler} class="fa fa-trash"></i> </span>{props.todoItem}</li>
            </ul>
        </Fragment>
    );
}

export default TodoList;
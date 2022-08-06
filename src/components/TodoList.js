import { Fragment } from "react";

const TodoList = (props) => {
    return (
        <Fragment>
            <ul>
                <li><span><i class="fa fa-trash"></i> </span>{props.todoItem}</li>
            </ul>
        </Fragment>
    );
}

export default TodoList;
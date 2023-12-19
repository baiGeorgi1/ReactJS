import { Component } from "react";
import TodoListItem from "./TodoListItem";

//може и така да се пише клас компонент
export default class TodoList extends Component {
    render() {
        console.log(this.props.todos);
        return (
            <>
                {this.props.todos.map((todo) => (
                    <TodoListItem
                        key={todo.id}
                        {...todo}
                        toggleTodo={this.props.toggleTodo}
                        deleteTodo={this.props.deleteTodo}
                    />
                ))}
            </>
        );
    }
}

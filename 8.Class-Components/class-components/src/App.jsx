import React from "react";

import TodoList from "./components/TODO";
import Todoctx from "./contexts/TodoContext";
import Header from "./components/Header";

// тези клас комп. можем да ги изнесем в друг файл!
//Това са компоненти на навигацията!

// така се прави клас компоненти от функц.
class App extends React.Component {
    constructor(props) {
        super(props);
        // В конструктора имаме САМО един стейт, но можем да му зададем много props
        this.state = {
            todos: [],
            name: "Pesho",
        };
        // С bind презаписваме метода с правилният контекст
        this.toggleTodo = this.toggleTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    //компонент за зареждане
    componentDidMount() {
        console.log("mount");
        fetch("http://localhost:3030/jsonstore/todos")
            .then((res) => res.json())
            .then((result) => {
                // и тук сетваме стейта от конструктора с:
                this.setState({
                    todos: Object.values(result),
                });
            });
    }
    toggleTodo(todoId) {
        console.log(todoId);
        this.setState({
            todos: this.state.todos.map((todo) =>
                todo.id === todoId
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo,
            ),
        });
    }
    deleteTodo(todoId) {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== todoId),
        });
    }
    //задължително трябва да има 'render'метод!
    render() {
        return (
            <Todoctx.Provider value={{ name: "Gogo", todos: this.state.todos }}>
                <Header />
                <h1>{this.state.name}</h1>
                <TodoList
                    todos={this.state.todos}
                    toggleTodo={this.toggleTodo}
                    deleteTodo={this.deleteTodo}
                />
            </Todoctx.Provider>
        );
    }
}

export default App;

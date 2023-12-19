import React from "react";

import { Button } from "antd";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import TodoList from "./components/TODO";
// тези клас комп. можем да ги изнесем в друг файл!
//Това са компоненти на навигацията!
const items = [
    {
        label: "Имейл",
        key: "mail",
        icon: <MailOutlined />,
    },
    {
        label: "Меню",
        key: "app",
        icon: <AppstoreOutlined />,
        disabled: true,
    },
    {
        label: "Настройки",
        key: "SubMenu",
        icon: <SettingOutlined />,
        children: [
            {
                type: "group",
                label: "Item 1",
                children: [
                    {
                        label: "Option 1",
                        key: "setting:1",
                    },
                    {
                        label: "Option 2",
                        key: "setting:2",
                    },
                ],
            },
            {
                type: "group",
                label: "Item 2",
                children: [
                    {
                        label: "Option 3",
                        key: "setting:3",
                    },
                    {
                        label: "Option 4",
                        key: "setting:4",
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
            >
                Navigation Four - Link
            </a>
        ),
        key: "alipay",
    },
];
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
            <div className="App">
                <Menu mode="horizontal" items={items} />
                <h1>{this.state.name}</h1>
                <TodoList
                    todos={this.state.todos}
                    toggleTodo={this.toggleTodo}
                    deleteTodo={this.deleteTodo}
                />
            </div>
        );
    }
}

export default App;

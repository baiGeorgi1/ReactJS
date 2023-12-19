import { Component } from "react";
import { Card, Space, Button } from "antd";

export default class TodoListItem extends Component {
    render() {
        return (
            <Space direction="horizontal" size={16}>
                <Card
                    title={this.props.label}
                    style={{
                        width: 300,
                        backgroundColor: !this.props.isCompleted
                            ? "red"
                            : "green",
                    }}
                >
                    <p>{this.props.isCompleted}</p>
                    <Button
                        type="primary"
                        onClick={() => this.props.toggleTodo(this.props.id)}
                    >
                        {this.props.isCompleted ? "Done" : "Undo"}
                    </Button>
                    <Button
                        type="primary"
                        danger
                        onClick={() => this.props.deleteTodo(this.props.id)}
                    >
                        Remove
                    </Button>
                </Card>
            </Space>
        );
    }
}

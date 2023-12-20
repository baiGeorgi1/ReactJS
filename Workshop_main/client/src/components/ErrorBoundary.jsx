import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        };
    }
    //Статичен метод (по-важен)
    static getetDerivedStateFromError(err) {
        console.log("GetDerivedStateFromError");
    }
    //live-cycle метод
    componetntDidCatch(erro, errorInfo) {
        console.log("componetntDidCatch");
    }
    render() {
        if (this.state.hasError) {
            return <h1>404</h1>;
        }
        return this.props.children;
    }
}

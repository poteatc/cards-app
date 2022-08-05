import React from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.reset = this.reset.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    reset() {
        this.setState({ count: 0 });
    }
    increment() {
        this.setState({ count: this.state.count + 1 });
    }
    decrement() {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return ( <
            div >
            <
            button className = "inc"
            onClick = { this.increment } >
            Increment!
            <
            /button> <
            button className = "dec"
            onClick = { this.decrement } >
            Decrement!
            <
            /button> <
            button className = "reset"
            onClick = { this.reset } >
            Reset!
            <
            /button> <
            h1 > Current count: { this.state.count } < /h1> <
            /div>
        );
    }
}

export default Counter;
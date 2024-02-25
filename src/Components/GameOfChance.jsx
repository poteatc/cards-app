import React from "react";
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1> {this.props.fiftyFifty > 0.5 ? "You Win!" : "You Lose!"} </h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      // Complete the return statement:
      return {
        //counter: this.state.counter + 1,
        counter: prevState.counter + 1,
      };
    });
  }
  render() {
    const expression = Math.random() >= 0.5; // Change this line
    return (
      <div>
        <h3>Click Play for a 50% chance of winning</h3>
        <button onClick={this.handleClick}> Play Again </button>
        <Results fiftyFifty={expression} />
        <p> {"Turn: " + this.state.counter} </p>{" "}
      </div>
    );
  }
}

export default GameOfChance;

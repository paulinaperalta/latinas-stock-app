import React, { Component } from "react";

class Comprar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="component">
        <h2> Comprar acciones </h2>
        <div className="myStocks">
          <p>Precio de cada acción: $2.00</p>
          <p>
            Acciones a comprar:
            <span className="buyQty"> {this.state.count}</span>
          </p>
          Total: ${this.state.count * 2}.00
        </div>
        <button className="buttonBuy" onClick={this.increment}>
          +
        </button>
        <button className="buttonReset" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}

export default Comprar;

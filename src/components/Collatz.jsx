import React, { Component } from 'react'

export default class Collatz extends Component {
    state = {
        numero: null,
        secuencia: []
    }

    calcularCollatz = () => {
        let numeroCollatz = parseInt(this.props.numero);
        let secuencia = [];
        while (numeroCollatz != 1) {
            secuencia.push(numeroCollatz);
            if (numeroCollatz % 2 === 0) {
                numeroCollatz = numeroCollatz / 2;
            } else {
                numeroCollatz = 3 * numeroCollatz + 1;
            }
        }
        secuencia.push(1);
        // ESTO ES LO QUE FALTABA: actualizar el estado
        this.setState({
            numero: this.props.numero,
            secuencia: secuencia
        });
    }
    componentDidMount = () => {
        this.calcularCollatz();
    }

  render() {
    return (
      <div>
        <h1>Secuencia de Collatz Rutas</h1>
        <h3 style={{color: "fuchsia"}}>
            Número {this.props.numero}
        </h3>
        <ul>
            {
                this.state.secuencia.map((valor, index) => {
                    return (
                        <li key={index}>
                            {valor}
                        </li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        tabla: []
    }

    generarTablaMultiplicar = () => {
        let aux = [];
        let numero = parseInt(this.props.numero);

        this.setState({
            tabla: aux
        })
        for (var i = 1; i <= 10; i++) {
            var resultado = numero * i;
            aux.push(resultado);
        }
    }

    componentDidMount = () => {
        this.generarTablaMultiplicar();
    }
  render() {
    return (
      <div>
        <h1>Tabla de Multiplicar Rutas</h1>
        <h3 style={{color: "fuchsia"}}>
            Número {this.props.numero}
        </h3>

        <ul>
            {
                this.state.tabla.map((resultado, index) => {
                    return (
                        <li key={index}>
                            {this.props.numero} x {index + 1} = {resultado}
                        </li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}

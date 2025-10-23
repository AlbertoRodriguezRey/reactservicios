import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        tabla: []
    }

    generarTablaMultiplicar = () => {
        let aux = [];
        let numero = parseInt(this.props.numero);
        for (var i = 1; i <= 10; i++){
            var resultado = numero * i;
            aux.push(resultado);
        }

        this.setState({
            tabla: aux
        })
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.numero != this.props.numero){
            this.generarTablaMultiplicar();
        }
    }

    componentDidMount = () => {
        this.generarTablaMultiplicar();
    }
  render() {
    return (
      <div>
        <h1>Tabla Multiplicar Rutas</h1>
        <h3 style={{color: "fuchsia"}}>
            Número {this.props.numero}
        </h3>
        <ul>
            {
                this.state.tabla.map((num, index) => {
                    return (<li key={index}>{num}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}

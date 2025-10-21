import axios from 'axios'
import React, { Component } from 'react'
import Global from '../../Global';

export default class Empleados extends Component {
    url = Global.urlEmpleados;

    state = {
        empleados: [],
        texto: ""
    }
    loadEmpleados = () => {
        let idDepartamento = this.props.iddepartamentos;
        let request = "api/empleados/empleadosdepartamento/" + idDepartamento;
        axios.get(this.url + request).then(response => {
            console.log("Leyendo empleados...");
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidUpdate = (oldProps) => {
        //DIBUJAMOS LAS NUEVAS Y LAS ANTIGUAS
        console.log("Current: " + this.props.iddepartamentos);
        console.log("Old: " + oldProps.iddepartamentos);
        //SOLAMENTE ACTUALIZAMOS STATE  SI PROPS HA CAMBIADO
        //NUNCA SE HACE SETSTATE SIN CONDICION
        if (oldProps.iddepartamentos != this.props.iddepartamentos) {
            this.loadEmpleados();
        }
    }
    
  render() {
    return (
      <div>
        <h1 style={{color: "blue"}}>Empleados Component {this.props.iddepartamentos}</h1>
        <h2 style={{color: "green"}}>{this.state.texto}</h2>
        <ul>
            {
                this.state.empleados.map((empleado, index) => {
                    return (<li key={index}>
                        {empleado.apellido} - {empleado.oficio}
                        - {empleado.departamento}
                    </li>)
                })
            }
        </ul>
      </div>
    )
  }
}

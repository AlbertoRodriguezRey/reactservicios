import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';

export default class EmpleadosDepartamento extends Component {
    url = Global.urlEmpleados;
    cajaDepartamento = React.createRef();

    buscarEmpleados = (event) => {
        event.preventDefault();
        let idDepartamento = this.cajaDepartamento.current.value;
        let request = "api/empleados/empleadosdepartamento/" +  idDepartamento;
        axios.get(this.url + request).then(response => {
            console.log("Leyendo empleados" + response.data);
            this.setState({
                empleados: response.data
            })
        })
    }

    state = {
        empleados: [],
        departamento: null
    }
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>
            Api empleados departamento
        </h1>
        <form>
            <label>Introduzca ID Departamento:</label><br/><br/>
            <input type="number" ref={this.cajaDepartamento}/>
            <button onClick={this.buscarEmpleados}>
                Buscar empleados
            </button>
            <ul>
                {
                    this.state.empleados.map((empleado, index) => {
                        return (<li key={index}>{empleado.apellido}</li>)
                    })
                }
            </ul>
        </form>
      </div>
    )
  }
}

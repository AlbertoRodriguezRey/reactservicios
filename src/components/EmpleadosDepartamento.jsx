import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosDepartamento extends Component {
    urlEmpleados = Global.urlEmpleados;
    urlDepartamentos = Global.urlDepartamentos;
    selectDepartamento = React.createRef();

    buscarEmpleados = (event) => {
        event.preventDefault();
        let idDepartamento = this.selectDepartamento.current.value;
        let request = "api/empleados/empleadosdepartamento/" + idDepartamento;
        axios.get(this.urlEmpleados + request).then(response => {
            console.log("Leyendo empleados");
            this.setState({
                empleados: response.data
            })
        })
    }

    loadDepartamentos = () => {
        let request = "webresources/departamentos";
        axios.get(this.urlDepartamentos + request).then(response => {
            console.log("Cargando departamentos");
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    state = {
        empleados: [], 
        departamentos: []
    }

  render() {
    return (
      <div>
        <h1 style={{color: "blue"}}>
            Api Empleados Departamento
        </h1>
        <form>
            <label>Seleccione Departamento</label>
            <select ref={this.selectDepartamento}>
                {
                    this.state.departamentos.map((departamento, index) => {
                        return (<option key={index} value={departamento.numero}>
                            {departamento.nombre}
                        </option>)
                    })
                }
            </select>
            <button onClick={this.buscarEmpleados}>
                Buscar empleados
            </button>
        </form>
        <ul>
            {
                this.state.empleados.map((empleado, index) => {
                    return (<li key={index}>{empleado.apellido}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}

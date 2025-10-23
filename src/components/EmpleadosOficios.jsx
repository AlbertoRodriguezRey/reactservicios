import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class EmpleadosOficios extends Component {
    url = Global.urlEmpleadosOficios;
    selectOficio = React.createRef();
    state = {
        empleados: [],
        empleadosOficios: []
    }

    loadOficios = () => {
        var request = "api/empleados";
        axios.get(this.url + request).then(response => {
            console.log("Leyendo empleados");
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadOficios();
    }

    buscarEmpleados = (event) => {
        event.preventDefault();
        let oficio = this.selectOficio.current.value;
        let request = "api/empleados/empleadosoficio/" + oficio;
        axios.get(this.url + request).then(response => {
            console.log("Filtrando oficios")
            this.setState({
                empleadosOficios: response.data
            })
        })
    }
  render() {
    return (
      <div>
        <h1>Empleados Oficios</h1>
        <form>
            <select ref={this.selectOficio}>
                {
                    this.state.empleados.map((empleado, index) => {
                        return (<option key={index}>{empleado.oficio}</option>)
                    })
                }
            </select>
            <button onClick={this.buscarEmpleados}>
                Buscar empleados
            </button>
        </form>
        <table border="1">
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.empleadosOficios.map((empleado, index)=> {
                        return (<tr key={index}>
                            <td>{empleado.apellido}</td>
                            <td>{empleado.oficio}</td>
                            <td>{empleado.salario}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}

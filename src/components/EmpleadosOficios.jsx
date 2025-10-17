import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';

export default class EmpleadosDepartamentov2 extends Component {
    urlEmpleados = Global.urlEmpleados;
    urlDepartamentos = Global.urlDepartamentos;
    selectOficio = React.createRef();

    buscarEmpleados = (event) => {
        event.preventDefault();
        let idOficio = this.selectOficio.current.value;
        let request = "api/Empleados/EmpleadosOficio/" +  idOficio;
        axios.get(this.urlEmpleados + request).then(response => {
            console.log("Leyendo Oficios" + response.data);
            this.setState({
                empleadosFiltrados: response.data
            })
        })
    }

    loadOficios = () => {
        let request = "api/empleados";
        axios.get(this.urlEmpleados + request).then(response => {
            console.log("Cargando oficios");
            this.setState({
                empleados: response.data,
                empleadosFiltrados: []
            })
        })
    }

    componentDidMount = () => {
        this.loadOficios();
    }

    state = {
        empleados: [],
        empleadosFiltrados: []
    }

  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>
            Api empleados oficio
        </h1>
        <form>
            <label>Seleccione Oficio:</label><br/><br/>
            <select ref={this.selectOficio}>
              {
                this.state.empleados.filter((empleado, index, self) => 
                   index === self.findIndex(e => e.oficio === empleado.oficio) 
                ).map((empleado, index) => {
                    return (<option key={index} value={empleado.oficio}>
                        {empleado.oficio}
                    </option>)
                })
              }  
            </select>
            <button onClick={this.buscarEmpleados}>
                Buscar empleados
            </button><br/><br/>
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
                        this.state.empleadosFiltrados.map((empleado, index) => {
                            return (<tr key={index}>
                                <td>{empleado.apellido}</td>
                                <td>{empleado.oficio}</td>
                                <td>{empleado.salario}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </form>
      </div>
    )
  }
}
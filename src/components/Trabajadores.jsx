import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class Trabajadores extends Component {
    url = Global.apiTrabajadores;
    state = {
        mensaje: "",
        trabajadores: []
    }

    loadTrabajadores = () => {
        //RECUPERAMOS EL ARRAY DE IDS DE HOSPITAL
        let idsHospitales = this.props.idhospitales;
        let data = "";
        //idhospital=17&idhospital=22
        for (var id of idsHospitales){
            data += "idhospital=" + id + "&"
        }
        //idhospital=19&idhospital=22&
        //ELIMINAMOS EL ULTIMO CARACTER DEL STRING
        data = data.substring(0, data.length - 1);

        this.setState({
            mensaje: data
        })
        let request = "api/trabajadores/trabajadoreshospitales?" + data;
        axios.get(this.url + request).then(response => {
            console.log("Trabajadores!!!");
            this.setState({
                trabajadores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadTrabajadores();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospitales != this.props.idhospitales){
            this.loadTrabajadores();
        }
    }

  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Trabajadores</h1>
        <h2 style={{color:"red"}}>
            {this.state.mensaje}
        </h2>
        <table className='table table-primary'>
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Id Hospital</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.trabajadores.map((worker, index) => {
                        return (<tr key={index}>
                            <td>{worker.apellido}</td>
                            <td>{worker.oficio}</td>
                            <td>{worker.salario}</td>
                            <td>{worker.idHospital}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}

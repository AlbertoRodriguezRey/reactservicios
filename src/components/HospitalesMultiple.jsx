import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import Global from '../Global'
import axios from 'axios'

export default class HospitalesMultiple extends Component {
    selectHospital = React.createRef();
    
    url = Global.apiTrabajadores;
    state = {
        hospitales: [],
        hospitalesSeleccionados:[]
    }

    loadHospitales = () => {
        let request = "api/hospitales";
        axios.get(this.url + request).then(response => {
            console.log("Cargando hospitales");
            this.setState({
                hospitales: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadHospitales();
    }

    getHospitalesSeleccionados = (event) => {
        event.preventDefault();
        let aux = [];
        let options = this.selectHospital.current.options;
        for (var option of options){
            if (option.selected == true){
                aux.push(option.value);
            }
        }
        this.setState({
            hospitalesSeleccionados: aux
        })
    }

  render() {
    return (
      <div>
        <h1>Hospitales Múltiple</h1>
        <form>
            <select ref={this.selectHospital} className='form-control'
            size="8" multiple>
                {
                    this.state.hospitales.map((hospital, index) => {
                        return (<option key={index} value={hospital.idHospital}>
                            {hospital.nombre}
                        </option>)
                    })
                }
            </select>
            <button onClick={this.getHospitalesSeleccionados} 
            className='btn btn-warning'>
                Mostrar trabajadores
            </button>
        </form>
        {
            this.state.hospitalesSeleccionados.length != 0 && 
            <Trabajadores idhospitales={this.state.hospitalesSeleccionados}/>
        }
 
      </div>
    )
  }
}

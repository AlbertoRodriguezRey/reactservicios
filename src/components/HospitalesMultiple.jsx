import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import Global from '../Global'
import axios from 'axios'

export default class HospitalesMultiple extends Component {
    selectHospital = React.createRef();
    cajaIncremento = React.createRef();
    
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

    getSeleccion = () => {
        let aux = [];
        let options = this.selectHospital.current.options;
        for (var option of options){
            if (option.selected == true){
                aux.push(option.value);
            }
        }
        return aux;
    }

    getHospitalesSeleccionados = (event) => {
        event.preventDefault();
        let aux = this.getSeleccion();
        this.setState({
            hospitalesSeleccionados: aux
        })
    }

    incrementarSalarios = (event) => {
        event.preventDefault();
        let incremento = this.cajaIncremento.current.value;
        //idhospital=17&idhospital=22
        let aux = this.getSeleccion();
        let data = "";
        //idhospital=17&idhospital=22
        for (var id of aux){
            data += "idhospital=" + id + "&"
        }
        //idhospital=19&idhospital=22&
        //ELIMINAMOS EL ULTIMO CARACTER DEL STRING
        data = data + "incremento=" + incremento;
        let request = "api/trabajadores/updatesalariotrabajadoreshospitales?"
        + data;
        axios.put(this.url + request).then(response => {
            this.setState({
                hospitalesSeleccionados: aux
            })
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
            </select><br/>
            <button onClick={this.getHospitalesSeleccionados} 
            className='btn btn-warning'>
                Mostrar trabajadores
            </button><hr/>
            <label>Incremento salarial</label>
            <input type="text" ref={this.cajaIncremento}
            className='form-control'/><br/>
            <button className='btn btn-info' onClick={this.incrementarSalarios}>
                Incrementar salarios
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
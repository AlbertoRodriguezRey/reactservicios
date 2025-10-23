import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Alumnos extends Component {
    url = Global.urlAlumnos;

    state = {
        alumnos: []
    }

    loadAlumnos = () => {
        let idCurso = this.props.idcurso;
        let request = "api/alumnos/filtrarcurso/" + idCurso;
        axios.get(this.url + request).then(response => {
            console.log("Leyendo alumnos");
            this.setState({
                alumnos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadAlumnos();
    }

    componentDidUpdate = (oldProps) => {
        //DEBEMOS COMPROBAR QUE LOS ELEMENTOS CAMBIAN CON UN IF
        if (oldProps.idcurso != this.props.idcurso){
            this.loadAlumnos();
        }
    }

  render() {
    return (
      <div>
        <h1 style={{color:"red"}}>Alumnos curso: {this.props.idcurso}</h1>
        <ul>
            {
                this.state.alumnos.map((alumno, index) => {
                    return (<li key={index}>
                        {alumno.nombre} {alumno.apellidos}
                        <button onClick={() => {
                            this.props.seleccionarAlumno(alumno)
                        }}>
                            Datos alumno
                        </button>
                    </li>)
                })
            }
        </ul>
      </div>
    )
  }
}

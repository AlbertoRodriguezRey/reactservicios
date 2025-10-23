import React, { Component } from 'react'
import Alumnos from './Alumnos'
import Global from '../../Global';
import axios from 'axios';
export default class Cursos extends Component {
    url = Global.urlAlumnos;
    selectCurso = React.createRef();
    state = {
        cursos: [],
        idCurso: -1,
        alumnoSeleccionado: null
    }

    loadCursos = () =>{
        let request = "api/alumnos/cursos";
        axios.get(this.url + request).then(response => {
            console.log("Leyendo cursos");
            this.setState({
                cursos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadCursos();
    }

    mostrarAlumnos = (event) => {
        event.preventDefault();
        let idCurso = this.selectCurso.current.value;
        this.setState({
            idCurso: idCurso
        })
    }

    seleccionarAlumno = (alumno) => {
        console.log(alumno);
        this.setState({
            alumnoSeleccionado: alumno
        })
    }

  render() {
    return (
      <div>
        <h1>Cursos</h1>
        {
            this.state.alumnoSeleccionado && 
            (<div>
                <h2>
                    {this.state.alumnoSeleccionado.nombre} 
                    {this.state.alumnoSeleccionado.apellidos}
                </h2>
                <img src={this.state.alumnoSeleccionado.imagen}
                style={{width: "250px", height: "300px"}} alt="  "/>
            </div>)
        }
        <form>
            <select ref={this.selectCurso}>
                {
                    this.state.cursos.map((curso, index) => {
                        return (<option key={index}>{curso}</option>)
                    })
                }
            </select>
            <button onClick={this.mostrarAlumnos}>
                Mostrar alumnos
            </button>
        </form>
        {
            this.state.idCurso != -1 && 
            <Alumnos idcurso={this.state.idCurso}
            seleccionarAlumno={this.seleccionarAlumno}/>
        }
      </div>
    )
  }
}

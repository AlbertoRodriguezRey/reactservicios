import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';
import Alumnos from './Alumnos';

export default class Cursos extends Component {
    url = Global.urlCursos;
    selectCurso = React.createRef();
    state = {
        cursos: [],
        idCurso: 0
    }

    loadCursos = () => {
        let request = "api/Alumnos/Cursos";
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

    buscarAlumnos = (event) => {
        event.preventDefault();
        let idCurso = this.selectCurso.current.value;
        this.setState({
            idCurso: parseInt(idCurso)
        })
    }

  render() {
    return (
      <div>
        <h1>Practica React</h1>
        <form>
            <select ref={this.selectCurso} onChange={this.buscarAlumnos}>
                {
                    this.state.cursos.map((curso, index) => {
                        return (<option key={index} value={curso}>
                            {curso}
                        </option>)
                    })
                }
            </select>
        </form>
        {
            this.state.idCurso != 0 &&
            <Alumnos idCurso={this.state.idCurso}/>
        }
      </div>
    )
  }
}

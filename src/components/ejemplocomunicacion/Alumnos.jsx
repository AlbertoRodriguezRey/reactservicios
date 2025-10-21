import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios';

export default class Alumnos extends Component {
    url = Global.urlAlumnos;

    state = {
        alumnos: [],
        texto: "",
        alumnosConDetalles: [] // Array para guardar los IDs de alumnos con detalles visibles
    }

    loadAlumnos = () => {
        let idCurso = this.props.idCurso;
        let request = "api/Alumnos/FiltrarCurso/" + idCurso;
        axios.get(this.url + request).then(response => {
            console.log("Leyendo alumnos...");
            this.setState({
                alumnos: response.data
            })
        }).catch(error => {
            console.error("Error cargando alumnos:", error);
        })
    }

    componentDidMount = () => {
        this.loadAlumnos();
    }
    componentDidUpdate = (oldProps) => {
        //DIBUJAMOS LAS NUEVAS Y LAS ANTIGUAS
        console.log("Current: " + this.props.idCurso);
        console.log("Old: " + oldProps.idCurso);
        //SOLAMENTE ACTUALIZAMOS STATE SI PROPS HA CAMBIADO
        //NUNCA SE HACE SETSTATE SIN CONDICION
        if (oldProps.idCurso != this.props.idCurso) {
            this.loadAlumnos();
        }
    }

    cargarDetalles = (alumno) => {
        // Agregar este alumno a la lista de detalles visibles si no está ya
        if (!this.state.alumnosConDetalles.includes(alumno.idAlumno)) {
            this.setState({ 
                alumnosConDetalles: [...this.state.alumnosConDetalles, alumno.idAlumno]
            });
        }
    }
  render() {
    return (
      <div>
        <ul>
            {
                this.state.alumnos.map((alumno, index) => {
                    return (
                        <li key={index}>
                            {alumno.nombre} {alumno.apellidos + " "}
                            <button onClick={() => this.cargarDetalles(alumno)}>
                                Detalles
                            </button>
                            
                            {/* Mostrar detalles debajo de este alumno específico */}
                            {this.state.alumnosConDetalles.includes(alumno.idAlumno) && (
                                <div style={{marginTop: "10px", padding: "10px", border: "1px solid #ccc", backgroundColor: "#f9f9f9"}}>
                                    <h1>{alumno.nombre} {alumno.apellidos}</h1>
                                    <h1>ID Alumno: {alumno.idAlumno}</h1>
                                    <img 
                                        src={alumno.imagen || "https://via.placeholder.com/150"} 
                                        alt={`Foto de ${alumno.nombre}`}
                                        style={{width: "150px", height: "150px", objectFit: "cover"}}
                                    />
                                </div>
                            )}
                        </li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}

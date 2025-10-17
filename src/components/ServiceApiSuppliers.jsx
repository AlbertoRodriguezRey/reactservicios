import React, { Component } from 'react'
import axios from 'axios'

export default class ServiceApiSuppliers extends Component {
    cajaId = React.createRef();
    state = {
        suppliers:[]
    }
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers"
    //CREAMOS UN METODO PARA CARGAR LOS SUPPLIERS
    loadSuppliers = () => {

        console.log("Antes del servicio")
        //LA INFORMACION YA SABEMOS DE DONDE VIENE
        axios.get(this.url).then((response) => {
            console.log("Leyendo servicio");
            //SACAMOS LA INFO DE RESPONSE
            this.setState({
                suppliers: response.data.value
            })
        })
        console.log("Despues del servicio") 
    }

    componentDidMount = () => {
        console.log("Creando component");
        this.loadSuppliers();
        
    }

    loadSuppliersById = (event) => {
        event.preventDefault();
        let id = this.cajaId.current.value;
        if (id) {
            let urlById = this.url + "(" + id + ")";
            axios.get(urlById).then((response) => {
                console.log("Leyendo supplier por ID");
                this.setState({
                    suppliers: [response.data]
                })
            }).catch((error) => {
                console.log("Error al buscar supplier por ID:", error);
                alert("No se encontró el supplier con ID: " + id);
            })
        } else {
            this.loadSuppliers();
        }
    }

  render() {
    return (
      <form onSubmit={this.loadSuppliersById}>
        <h1>Servicio Api Suppliers</h1>
        <ul>
        {
            this.state.suppliers.map((supplier, index) => {
                return <li key={index}>
                    ID: {supplier.SupplierID}, Nombre: {supplier.ContactName}
                </li>
            })
        }
        </ul>
        <label>Seleccione un ID:</label><br/>
        <input type="text" ref={this.cajaId} placeholder="Ingrese ID del supplier"/>
        <button type="submit">Buscar por ID</button>
        <button type="button" onClick={this.loadSuppliers}>Cargar Todos</button>
      </form>)
  }
}

import React, { Component } from 'react'
import axios from 'axios'

export default class ServiceApiSuppliers extends Component {
    cajaId = React.createRef();
    state = {
        suppliers:[],
        selectedSupplier: null
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
        let id = parseInt(this.cajaId.current.value);
        if (id) {
            let urlById = this.url + "(" + id + ")";
            axios.get(urlById).then((response) => {
                console.log("Leyendo supplier por ID");
                this.setState({
                    selectedSupplier: response.data
                })
            }).catch((error) => {
                console.log("Error al buscar supplier por ID:", error);
                this.setState({
                    selectedSupplier: null
                })
            })
        } else {
            this.setState({
                selectedSupplier: null
            })
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
        <input type="text" ref={this.cajaId}/>
        <button type="submit">Buscar proovedor</button>
        
        {this.state.selectedSupplier && (
          <div>
            <h1>Compañia: {this.state.selectedSupplier.CompanyName}</h1>
            <h2>Titulo: {this.state.selectedSupplier.ContactTitle}</h2>
            <h3>Direccion: {this.state.selectedSupplier.Address}</h3>
          </div>
        )}
      </form>)
  }
}

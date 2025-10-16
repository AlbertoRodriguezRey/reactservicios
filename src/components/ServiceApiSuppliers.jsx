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
            let aux
        }

  render() {
    return (
      <form onSubmit={this.loadSuppliers}>
        <h1>Servicio Api Suppliers</h1>
        <ul>
        {
            this.state.suppliers.map((supplier, index) => {
                return <div key={index}>
                    <li>ID: {supplier.SupplierID}, Nombre: {supplier.ContactName}</li>
                </div>
            })
        }
        </ul>
        <label>Seleccione un ID:</label><br/>
        <input type="text" ref={this.cajaId}/>
        <button>Cargar Suppliers</button>
        {

        }
      </form>
    )
  }
}

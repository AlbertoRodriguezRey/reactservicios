import React, { Component } from 'react'
import axios from 'axios'

export default class ServicioApiCustomers extends Component {
    state = {
        customers: []
    }
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";
    //CREAMOS UN METODO PARA CARGAR LOS CLIENTES
    loadCustomers = () => {
        console.log("Antes del servicio");
        axios.get(this.url).then((response) => {
            console.log("Leyendo servicio");
            //LA INFORMACION VIENE EN response.data
            this.setState({
                customers: response.data.value
            })
        })
        console.log("Despues del servicio");
    }

    componentDidMount = () => {
        console.log("Creando componet");
        this.loadCustomers();
    }
  render() {
    return (
      <div>
        <h1>Servicio Api Customers</h1>
        <button>
            Load Customers
        </button>
        {
            this.state.customers.map((cliente, index) => {
                return <h3 key={index} style={{color:"blue"}}>{cliente.ContactName}</h3>
            })
        }
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';

export default class ServicioApiCustomers extends Component {
    state = {
        customers: []
    }

    url = Global.urlNorthwind;
    //CREAMOS UN METODO PARA CARGAR LOS CLIENTES
    loadCustomers = () => {
        console.log("Antes del servicio");
        let request = "customers";
        axios.get(this.url + request).then(response => {
            console.log("Leyendo servicio");
            //LA INFORMACION VIENE EN response.data
            this.setState({
                customers: response.data.value
            })
        }) 
        console.log("Después del servicio");
    }

    componentDidMount = () => {
        console.log("Creando component");
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
                return (<h3 key={index} 
                    style={{color: "blue"}}>{cliente.ContactName}</h3>)
            })
        }
      </div>
    )
  }
}

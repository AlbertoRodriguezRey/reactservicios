import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TablaMultiplicar from './TablaMultiplicar'
import NotFound from './NotFound'
import { useParams } from 'react-router-dom'
import MenuRutas from './MenuRutas'

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
        //ESTA FUNCION NOS SERVIRA PARA CAPTURAR LOS PARAMETROS
        //RECIBIDOS EN UNA RUTA Y ENVIARLOS CON PROPS A NUESTRO COMPONENT
        //VOY A ENVIAR UN PARAMETRO LLAMADO minumero
        let {minumero} = useParams();
        //DEVOLVEMOS EL COMPONENT TABLA MULTIPLICAR CON SUS PROPS
        return <TablaMultiplicar numero={minumero}/>
    }

    return (
      <BrowserRouter>
        <MenuRutas/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tabla/:minumero"
                element={<TablaMultiplicarElement/>}/>
            {/* PARA INCLUIR LAS RUTAS QUE NO EXISTEN CON UNA 
            PAGINA 404 PERSONALIZADA DEBEMOS UTILIZAR EL ASTERISCO
            Y SIEMPRE DEBE SER LA ULTIMA RUTA */}
            <Route path="*"
                element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

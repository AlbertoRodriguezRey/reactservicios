import { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './Home'
import TablaMultiplicar from './TablaMultiplicar'
import NotFound from './NotFound'
import Collatz from './Collatz'

export default class Router extends Component {
  render() {

    function TablaMultiplicarElement() {
        //ESTA FUNCION NOS SERVIRA PARA CAPTURAR LOS PARAMETROS
        //RECIBIDOS EN UNA RUTA Y ENVIARLOS CON PROPS A NUESTRO COMPONENT
        //VOY A ENVIAR UN PARAMETRO LLAMADO minumero
        let { minumero } = useParams();
        //DEVOLVEMOS EL COMPONENT TABLA DE MULTIPLICAR CON SUS PROPS
        return <TablaMultiplicar numero={minumero}/>
    }

    function CollatzElement() {
        let { numeroCollatz } = useParams();
        return <Collatz numero={numeroCollatz}/>
    }
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/tabla/:minumero' element={<TablaMultiplicarElement/>}/>
            <Route path='/collatz/:numeroCollatz' element={<CollatzElement/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes> 
      </BrowserRouter>
    )
  }
}

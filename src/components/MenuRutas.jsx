import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/21">Tabla de Multiplicar 21</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/35">Tabla de Multiplicar 35</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/40">Tabla de Multiplicar 40</NavLink>
          </li>
          <li>
            <NavLink to="/collatz/21">Collatz 21</NavLink>
          </li>
          <li>
            <NavLink to="/collatz/35">Collatz 35</NavLink>
          </li>
          <li>
            <NavLink to="/collatz/40">Collatz 40</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

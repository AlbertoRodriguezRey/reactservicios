import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tabla/21">Tabla 21</NavLink>
            </li>
            <li>
              <NavLink to="/tabla/7">Tabla 7</NavLink>
            </li>  
            <li>
              <NavLink to="/tabla/33">Tabla 33</NavLink>
            </li>                      
        </ul>
      </div>
    )
  }
}

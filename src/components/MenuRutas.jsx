import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/tabla/21">Tabla de Multiplicar 21</a>
            </li>
            <li>
                <a href="/tabla/35">Tabla de Multiplicar 35</a>
            </li>
            <li>
                <a href="/tabla/40">Tabla de Multiplicar 40</a>
            </li>
            <li>
                <a href="/collatz/21">Collatz 21</a>
            </li>
            <li>
                <a href="/collatz/35">Collatz 35</a>
            </li>
            <li>
                <a href="/collatz/40">Collatz 40</a>
            </li>
        </ul>
      </div>
    )
  }
}

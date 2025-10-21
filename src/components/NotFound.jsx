import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Página No Encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <img src="https://http.cat/404" alt="404 Not Found" style={{width: "200px", height: "200px"}}/>
      </div>
    )
  }
}

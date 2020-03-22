import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'

import  WritersList from './WritersList'
import './App.css'

const BaseLayout = () => (
    <div className="container-fluid" >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Tiny React API list</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">writers</a>
          </div>
        </div>
      </nav>

      <div className="content">
        <Route path="/" exact component={WritersList} />
      </div>
    </div>
)

class App extends Component {
  render() {
    return (
        <BrowserRouter data-test = "component-app">
          <BaseLayout/>
        </BrowserRouter>
    )
  }
}

export default App;

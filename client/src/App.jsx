import React from 'react'
import { withRouter } from 'react-router-dom'
import './App.css'
import Routes from './routes/routes.js'
function App () {
  return (
    <div className="App">
      <Routes/>
    </div>
  )
}
export default withRouter(App)

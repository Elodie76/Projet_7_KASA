import { BrowserRouter } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Rooter/Index'
import Header from './components/Header'
import Footer from './components/Footer'
// import { HashRouter } from "react-router-dom";
import '../src/sass/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)

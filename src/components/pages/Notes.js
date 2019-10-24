import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Header from '../layout/header';
import Footer from '../layout/footer';
import {initMaterialComponents,
  removeMaterialComponents
  } from "../../help/functional"

 
 class Notes extends Component {
  componentDidMount(){
    initMaterialComponents();
  }
  componentWillUnmount(){
    removeMaterialComponents();
  }
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="container">
          <div  className="row">
            <div className="col s12">
              <div className="card">
                <img  style={{width:"100%"}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fac%2FUniversidad_Nacional_de_Trujillo.JPG%2F1200px-Universidad_Nacional_de_Trujillo.JPG&f=1&nofb=1"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6 ">
              <div className="card">
                <div className="divider"></div>
                <h3 className="center">Why do we use it?</h3>
                < p style={{padding:"15px"}} > is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                  ItIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                  recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              </div>
              <div className="col s12 m6">
              <div className="card">
              <div className="divider"></div>
                <h3 className="center">Why do we use it?</h3>
                <p className="text" style={{padding:"15px"}}> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                  ItIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                  recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="row">
            <p className="col s12 m6">Para solicitar tus notas, recuerda poner bien tu 
              cedula, nombre y apellido, tu carrera y el semestre.
            </p>
            <button className="btn indigo col s12 m6"><Link style={{color:"white"}}to="notas_formulario">solicitar</Link></button>
          </div>
          </div>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}
export default Notes
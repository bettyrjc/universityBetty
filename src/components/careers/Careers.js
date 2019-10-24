import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';

import {initMaterialComponents,
        removeMaterialComponents
        } from "../../help/functional"

class careers extends Component {
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
          <div className="card">
            <img  style={{width:"100%",height:'300px'}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fac%2FUniversidad_Nacional_de_Trujillo.JPG%2F1200px-Universidad_Nacional_de_Trujillo.JPG&f=1&nofb=1"/>
          </div>
        <div className="card">
          <div className="card-content">
            <h3 className="center deep-purple-text">Carreras</h3>
            <p className="center gray-text">
              Carreras que estan disponibles en la universidad.
            </p>
          </div>
          <div className="card-tabs">
            <ul className="tabs tabs-fixed-width">
              <li className="tab "><a className="indigo-text" href="#test1">Ingenerias</a></li>
              <li className="tab"><a href="#test2" className="indigo-text">Licenciatura</a></li>
            </ul>
          </div>
          <div className="card-content grey lighten-4">
            <div id="test1">             
              <div className="row">
                <div className="col s12 m6">
                  <div className="card grey lighten-2">
                    <div className="card-content  black-text">
                      <span className=" card-title center">Mecanica</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <span className="card-content black-text">Diponible: Diurno Nocturno</span>
                    <div className="card-action">
                      <Link to="Pensum_ing">Pensum</Link>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card grey lighten-2">
                    <div className="card-content black-text">
                      <span className=" card-title center ">Quimica</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <span className="card-content dark-text">Diponible: Diurno Nocturno</span>
                    <div className="card-action">
                      <Link to="Pensum_ing">Pensum</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6">
                  <div className="card grey lighten-2">
                    <div className="card-content  black-text">
                      <span className=" card-title center">Informatica</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <span className="card-content black-text">Diponible: Diurno Nocturno</span>
                    <div className="card-action">
                      <Link to="Pensum_ing">Pensum</Link>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card grey lighten-2">
                    <div className="card-content black-text">
                      <span className=" card-title center ">Software</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <span className="card-content dark-text">Diponible: Diurno Nocturno</span>
                    <div className="card-action">
                      <Link to="Pensum_ing">Pensum</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6">
                  <div className="card grey lighten-2">
                    <div className="card-content  black-text">
                      <span className=" card-title center">Industrial</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <span className="card-content black-text">Diponible: Diurno Nocturno</span>
                    <div className="card-action">
                      <Link to="Pensum_ing">Pensum</Link>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card grey lighten-2">
                    <div className="card-content black-text">
                      <span className=" card-title center ">Telecomunicaciones</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <span className="card-content dark-text">Diponible: Diurno Nocturno</span>
                    <div className="card-action">
                      <Link to="Pensum_ing">Pensum</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="test2">
              <div className="row">
                <div className="col s12 m6">
                  <div className="card grey lighten-2">
                    <div className="card-content  black-text">
                      <span className=" card-title center">Administracion</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <span className="card-content black-text">Diponible: Diurno Nocturno</span>
                    <div className="card-action">
                      <Link to="Pensum_lice">Pensum</Link>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card grey lighten-2">
                    <div className="card-content black-text">
                      <span className=" card-title center ">Contabilidad</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <span className="card-content dark-text">Diponible: Diurno Nocturno</span>
                    <div className="card-action">
                      <Link to="Pensum_lice">Pensum</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6">
                  <div className="card grey lighten-2">
                    <div className="card-content  black-text">
                      <span className=" card-title center">Relaciones Industriales</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <span className="card-content black-text">Diponible: Diurno Nocturno</span>
                    <div className="card-action">
                      <Link to="Pensum_lice">Pensum</Link>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card grey lighten-2">
                    <div className="card-content black-text">
                      <span className=" card-title center ">Idiomas</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <span className="card-content dark-text">Diponible: Diurno Nocturno</span>
                    <div className="card-action">
                      <Link to="Pensum_lice">Pensum</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6">
                  <div className="card grey lighten-2">
                    <div className="card-content  black-text">
                      <span className=" card-title center">Finanzas</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <span className="card-content black-text">Diponible: Diurno Nocturno</span>
                    <div className="card-action">
                      <Link to="Pensum_lice">Pensum</Link>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="card grey lighten-2">
                    <div className="card-content black-text">
                      <span className=" card-title center ">Quimica</span>
                      <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <span className="card-content dark-text">Diponible: Diurno Nocturno</span>
                    <div className="card-action">
                      <Link to="Pensum_lice">Pensum</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default careers;
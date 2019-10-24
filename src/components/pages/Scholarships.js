import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Header from '../layout/header';
import Footer from '../layout/footer';
import {initMaterialComponents,
  removeMaterialComponents
  } from "../../help/functional"

class Scholarships extends Component {
  
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
          <div class="row">
            <div className="col s12 ">
              <div className="card">
                <div className="card-image">
                  <img style={{height:"400px"}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Fvector-gratis%2Fdibujos-animados-vuelta-al-concepto-colegio-estudiantes-alegres_33099-361.jpg&f=1&nofb=1"/>
                  <span className="card-title">Becas Universitarias</span>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>

                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
          </div> 
          <div className="card">
            <div class="row">
              <div className="col s12 ">
                <div class="card horizontal">
                  <div class="card-stacked">
                    <div class="card-content">
                      <h5>Beca Trabajo</h5>
                      <div className="divider"></div>
                      <span>Requisitos</span>
                      <ul>
                        <li>Promedio 7.0</li>
                        <li>Constancia de Inscripcion</li>
                        <li>Carta explicativa del porque necesita la beca</li>
                        <li>DNI</li>
                        <li>Notas</li>
                      </ul>
                    </div>
                    <div class="card-action">
                      <Link to="becas_formularios">Solicitar</Link>
                    </div>
                  </div>
                </div>
                <div className="card horizontal">
                  <div className="card-stacked">
                    <div className="card-content">
                      <h5>Beca Estudiantil</h5>
                      <div className="divider"></div>
                      <span>Requisitos</span>
                      <ul>
                        <li>Promedio 9.0</li>
                        <li>Constancia de Inscripcion</li>
                        <li>Carta explicativa del porque necesita la beca</li>
                        <li>DNI</li>
                        <li>Notas</li>
                      </ul>
                    </div>
                    <div className="card-action">
                      <Link to="becas_formularios">Solicitar</Link>                      
                    </div>
                  </div>
                </div>
                <div className="card horizontal">
                  <div className="card-stacked">
                    <div className="card-content">
                      <h5>Beca Pagada</h5>
                      <div className="divider"></div>
                      <span>Requisitos</span>
                      <ul>
                        <li>Promedio 9.0</li>
                        <li>Constancia de Inscripcion</li>
                        <li>Carta explicativa del porque necesita la beca</li>
                        <li>DNI</li>
                        <li>Notas</li>
                        <span>La universidad costea el 50% de la matricula, el otro 50% lo paga el estudiante</span>
                      </ul>                       
                    </div>                      
                    <div className="card-action">
                      <Link to="becas_formularios">Solicitar</Link>
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
export default Scholarships;
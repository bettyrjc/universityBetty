import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';

import {initMaterialComponents,
        removeMaterialComponents
        } from "../../help/functional"

class Teachers extends Component {

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
       <div className="row">
        <div className="col s12 ">
         <div className="card">
           <div className="card-image">
             <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearnandplaychristian.org%2Fhp_wordpress%2Fwp-content%2Fuploads%2F2014%2F01%2Fpeople.gif&f=1&nofb=1"
             />
           </div>
          <div className="card">
           <ul className="card">
              <li className="card-content ">
                <Link to="Profesores_I">Profesores Iniciales</Link>
              </li>
              <li className="card-content ">
                <Link to="Profesores_II">Profesores medios</Link>
              </li>
              <li className="card-content">
                <Link to="Profesores_III">Profesores final</Link>
              </li>   
           </ul> 
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
 export default Teachers;
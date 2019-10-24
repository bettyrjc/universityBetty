import React, { Component } from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';

import {initMaterialComponents,
        removeMaterialComponents
        } from "../../help/functional"

class ChemicalAfternoon extends Component {
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
          <h6>Horario Diurno / tarde</h6>
          <table>
            <thead>
              <tr className=" amber lighten-3">
                <th>HORA</th>
                <th>LUNES</th>
                <th>MARTES</th>
                <th>MIERCOLES</th>
                <th>JUEVES</th>
                <th>VIERNES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1:00pm - 2pm</th>
                <th>MATEMATICA</th>
                <th>FISICA</th>
                <th>INGLES</th>
                <th>FISICA</th>
                <th>-</th>
              </tr>
              <tr>
                <th>2:00pm- 3pm</th>
                <th>MATEMATICA</th>
                <th>FISICA</th>
                <th>INGLES</th>
                <th>FISICA</th>
                <th>FISICA LAB</th>
              </tr>
              <tr>
                <th>4:00-5pm</th>
                <th>FISICA</th>
                <th>INGLES</th>
                <th>INGLES</th>
                <th>FISICA</th>
                <th>-</th>
              </tr>
            </tbody>
          </table>
          <div className="divider"></div>
        </div>
        <Footer/>
      </React.Fragment>
    )
    }
  }
export default ChemicalAfternoon; 
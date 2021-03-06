import React, { Component } from 'react'

import Header from '../layout/header';
import Footer from '../layout/footer';

import {initMaterialComponents,
        removeMaterialComponents
        } from "../../help/functional"

class LiceMorning extends Component {
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
          <h6>Horario Diurno / Mañana</h6>
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
                <th>8:00am - 9am</th>
                <th>MATEMATICA</th>
                <th>FINANZAS</th>
                <th>INGLES</th>
                <th>LENGUA</th>
                <th>-</th>
              </tr>
              <tr>
                <th>9:00am- 10am</th>
                <th>MATEMATICA</th>
                <th>RELACIONES HUMANAS</th>
                <th>INGLES</th>
                <th>FINANZAS</th>
                <th>FINANZAS</th>
              </tr>
              <tr>
                <th>11:00-12pm</th>
                <th>LENGUA</th>
                <th>INGLES</th>
                <th>INGLES</th>
                <th>FINANZAS</th>
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
export default LiceMorning; 
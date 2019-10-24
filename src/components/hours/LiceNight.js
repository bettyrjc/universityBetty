import React, { Component } from 'react'

import Header from '../layout/header';
import Footer from '../layout/footer';

import {initMaterialComponents,
        removeMaterialComponents
        } from "../../help/functional"

class LiceNight extends Component {
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
          <h6>Horario Nocturno</h6>
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
                <th>5:00pm - 6pm</th>
                <th>MATEMATICA</th>
                <th>FINANZAS</th>
                <th>INGLES</th>
                <th>LENGUA</th>
                <th>-</th>
              </tr>
              <tr>
                <th>6:00pm- 7pm</th>
                <th>MATEMATICA</th>
                <th>RELACIONES HUMANAS</th>
                <th>INGLES</th>
                <th>FINANZAS</th>
                <th>FINANZAS</th>
              </tr>
              <tr>
                <th>7:00pm -8pm</th>
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
export default LiceNight; 
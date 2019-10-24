import React, { Component } from 'react'

import Header from '../layout/header';
import Footer from '../layout/footer';

import {initMaterialComponents,
        removeMaterialComponents
        } from "../../help/functional"

class PcAfternoon extends Component {
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
          <h6>Horario Diurno / Tarde</h6>
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
                <th>HTML </th>
                <th>BASE DE DATOS</th>
                <th>CSS</th>
                <th>INGLES</th>
              </tr>
              <tr>
                <th>6:00pm- 7pm</th>
                <th>MATEMATICA</th>
                <th>FISICA</th>
                <th>INGLES</th>
                <th>HTML</th>
                <th>CSS LAB</th>
              </tr>
              <tr>
                <th>7pm-8pm</th>
                <th>BASE DE DATOS</th>
                <th>INGLES</th>
                <th>INGLES</th>
                <th>BASE DE DATOS LAB</th>
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
export default PcAfternoon; 
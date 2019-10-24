import React, { Component } from 'react'


import Header from '../layout/header';
import Footer from '../layout/footer';

import {initMaterialComponents,
  removeMaterialComponents
  } from "../../help/functional"

class ChemicalEng extends Component {
  componentDidMount(){
    initMaterialComponents()
  }
  componentWillUnmount(){
    removeMaterialComponents()
  }
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="container">
          <table className="responsive-table highlight">
            <thead>
              <tr>
                  <th>Materia</th>
                  <th>Creditos</th>
                  <th>Prelaciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Matematica I</td>
                <td>5</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Matematica II</td>
                <td>5</td>
                <td>Matematica I</td>
              </tr>
              <tr>
                <td>Fisca I</td>
                <td>4</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Fisica II</td>
                <td>5</td>
                <td>Fisica I</td>
              </tr>
              <tr>
                <td>Termodinamica I</td>
                <td>3</td>
                <td>Fisica I</td>
              </tr>
              <tr>
                <td>Mecanica de los Fluidos I</td>
                <td>4</td>
                <td>Fisica I</td>
              </tr>
              <tr>
                <td>Ingles I</td>
                <td>2</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Ingles II</td>
                <td>2</td>
                <td>Ingles I</td>
              </tr>
              <tr>
                <td>Ingles  III</td>
                <td>2</td>
                <td>Ingles II</td>
              </tr>
              <tr>
                <td>Laboratorio I</td>
                <td>2</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Laboratorio II</td>
                <td>2</td>
                <td>Laboratorio I</td>
              </tr>
              <tr>
                <td>Laboratorio  III</td>
                <td>2</td>
                <td>Laboratorio II</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}
export default  ChemicalEng;
import React, { Component } from 'react'


import Header from '../layout/header';
import Footer from '../layout/footer';

import {initMaterialComponents,
  removeMaterialComponents
  } from "../../help/functional"

class Lice extends Component {
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
          <h3 className="orange-text center">Pemsun</h3>
          <table className="responsive-table highlight">
            <thead>
              <tr className=" amber lighten-3">
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
                <td>Finanzas I</td>
                <td>4</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Finanzas II</td>
                <td>5</td>
                <td>Finanzas I</td>
              </tr>
              <tr>
                <td>Lengua I</td>
                <td>3</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Lengua II</td>
                <td>4</td>
                <td>Lengua I</td>
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
                <td>Relaciones Humanas I</td>
                <td>2</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Relaciones Humanas II</td>
                <td>2</td>
                <td>Relaciones Humanas I</td>
              </tr>
              <tr>
                <td>Relaciones Humanas  III</td>
                <td>2</td>
                <td>Relaciones Humanas II</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}
export default  Lice;
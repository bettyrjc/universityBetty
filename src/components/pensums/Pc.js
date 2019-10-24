import React, { Component } from 'react'


import Header from '../layout/header';
import Footer from '../layout/footer';

import {initMaterialComponents,
  removeMaterialComponents
  } from "../../help/functional"

class Pc extends Component {
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
                <td>HTML I</td>
                <td>5</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Base de datos I</td>
                <td>5</td>
                <td>-</td>
              </tr>
              <tr>
                <td> JavaScript I</td>
                <td>4</td>
                <td>-</td>
              </tr>
              <tr>
                <td>JavaScript II</td>
                <td>5</td>
                <td>JavaScript I - HTML I</td>
              </tr>
              <tr>
                <td>Base de datos II </td>
                <td>3</td>
                <td>Base de datos I</td>
              </tr>
              <tr>
                <td>CSS I</td>
                <td>4</td>
                <td>HTML I</td>
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
                <td>Lenguaje backend I</td>
                <td>2</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Lenguaje backend II</td>
                <td>2</td>
                <td>Lenguaje backend I</td>
              </tr>
              <tr>
                <td>Lenguaje backend  III</td>
                <td>2</td>
                <td>Lenguaje backend II</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}
export default  Pc;
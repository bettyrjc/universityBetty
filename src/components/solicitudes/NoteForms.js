import React, { Component } from 'react';

import Spinner from '../common/loaders'

import Input from '../common/input';
import Header from '../layout/header';
import Footer from '../layout/footer';

import {initMaterialComponents,
  removeMaterialComponents
  } from "../../help/functional"

 class NoteForms extends Component {
   state={
     name:'',
     apellido:'',
     cedula:'',
     carrera:'',
     correo:'',
     semestre:'',
     año:'',
     errors:{}
   }
  componentDidMount(){
    initMaterialComponents();
  }
  componentWillUnmount(){
    removeMaterialComponents();
  }
  onChange = e  => this.setState({ [e.target.name]: e.target.value });


  render() {
    const {name, apellido, cedula,correo,semestre, año, errors} = this.state
    return (
      <React.Fragment>
        <Header/>
          <div className="container">
            <div className="card">
              <h4 className="center indigo-text">Solicitud de Notas y Constancia de Estudio</h4>
              <form className="card-content">
                <div className="row">
                  <Input
                    id="name"
                    label="nombre"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                    
                  />
                  <Input
                    id="apellido"
                    label="Apellido"
                    value={apellido}
                    onChange={this.onChange}
                    error={errors.apellido}
                  />
                </div>
                <div className="row">
                  <Input
                  id="cedula"
                  label="Cedula"
                  value={cedula}
                  onChange={this.onChange}
                  error={errors.cedula}
                />
                    <Input
                      id="correo"
                      label="Correo"
                      value={correo}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                  </div>
                  <div className="row">
                    <Input
                      id="semestre"
                      label="Semestre"
                      value={semestre}
                      onChange={this.onChange}
                      error={errors.semestre}
                     />
                    <Input
                      id="año"
                      label="Año de ingreso"
                      value={año}
                      onChange={this.onChange}
                      error={errors.año}
                    />
                  </div>
              </form>
              {this.props.loading && <Spinner />}
              <button
              onClick={this.onSubmit} 
              className="center btn indigo">Solicitar</button>
          </div>   
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default NoteForms;
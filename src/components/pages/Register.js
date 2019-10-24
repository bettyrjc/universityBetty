import React, { Component } from 'react';

import Spinner from '../common/loaders'
import File from '../common/inputFile'
import Input from '../common/input';
import Header from '../layout/header';
import Footer from '../layout/footer';
import {initMaterialComponents,
  removeMaterialComponents
  } from "../../help/functional"

 class Register extends Component {
   state={
     name:'',
     apellido:'',
     code:'',
     cedula:'',
     carrera:'',
     tipo:'',
     file:null,
     correo:'',
     errors:{}
   }
  componentDidMount(){
    initMaterialComponents();
  }
  componentWillUnmount(){
    removeMaterialComponents();
  }
  onChange = e  => this.setState({ [e.target.name]: e.target.value });

  onChangeFile = e => {
    if (e.files.length > 0) {
      this.setState({ file: e.files[0] });
    }
  };

  render() {
    const {name, apellido, cedula,correo,file,code, errors} = this.state
    return (
      <React.Fragment>
        <Header/>
          <div className="container">
            <div className="card">
              <div className="card horizontal">
                  <div className="card-stacked">
                    <div className="card-content">
                    <h6 className="center">Requisitos</h6>                   
                      <div className="divider"></div>
                      <ul>
                        <li>Fotocopia de la cedula</li>
                        <li>Constancia de culminacion de estudios</li>
                        <li>Partida de nacimiento</li>
                        <li>Notas</li>
                        <li>Titulo de bachiller</li>
                        <li>Foto carnet</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
            <div className="card">
              <h6 className="center indigo-text"> Solicitud de Inscripcion</h6>
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
                    <File
                      label="Seleccionar Archivos"
                      id="file"
                      filee_id="_file"
                      file={file}
                      onChange={this.onChangeFile}
                      multiple={true}
                    />
                    <Input
                      id="code"
                      label="Codigo de pago"
                      value={code}
                      onChange={this.onChange}
                      error={errors.code}
                    />
                  </div>
              </form>
              {this.props.loading && <Spinner />}
              <button
              style={{margin:'15px'}}
              onClick={this.onSubmitComments} 
              className="center btn indigo">Solicitar</button>
          </div>   
        </div>
        <Footer/>
      </React.Fragment>
    )

  }
}
export default Register;
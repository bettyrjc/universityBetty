import React, { Component } from 'react';

import Spinner from '../common/loaders'
import SelectInputField from '../common/selectInputField'
import File from '../common/inputFile'
import Input from '../common/input';
import Header from '../layout/header';
import Footer from '../layout/footer';
import {initMaterialComponents,
  removeMaterialComponents
  } from "../../help/functional"

 class ScholarshipsForm extends Component {
   state={
     tipo:'0',
     tipos:[
       {value : 4, nombre:'rossana'}
     ],
     name:'',
     apellido:'',
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
    const {name, apellido, cedula,correo,file, errors, tipo, tipos} = this.state
    return (
      <React.Fragment>
        <Header/>
          <div className="container">
            <div className="card">
              <h4 className="center indigo-text">Solicitud de Beca</h4>
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
                  <SelectInputField
                    id="tipo"
                    label="Tipo de beca"
                    value={tipo}
                    options={tipos.nombre}
                    onChange={this.onChange}
                  />
                  <Input
                  id="cedula"
                  label="Cedula"
                  value={cedula}
                  onChange={this.onChange}
                  error={errors.cedula}
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
                      id="correo"
                      label="Correo"
                      value={correo}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                  </div>
              </form>
              {this.props.loading && <Spinner />}
              <button
              onClick={this.onSubmitComments} 
              className="center btn indigo">Solicitar</button>
          </div>   
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default ScholarshipsForm;
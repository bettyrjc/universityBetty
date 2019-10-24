import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class English extends Component {

  
  render() {
    const {id, name,email, phone, username, website} = this.props.user;
    return (
      <React.Fragment>
        <div className="container">
         <div className="row">
          <div className="col s12">
            <span className="orange-text">Profesores de Matematicas</span>
            <div className="card blue">
              <div className="card-content">
               <span>
                <Link to={`usuarios/${id}`}>
                 Nombre: {name}{""}
                </Link>
               </span>  
               <p>Correo: {email}</p>
               <p>Telefono: {phone}</p>
               <p>Sitio Web: {website}</p>
              <span className="card-title">User  de la app de universidad: {username}{''}</span>
            </div>
            </div>
          </div>
         </div>
        </div>     
      </React.Fragment>
    )
  }
}

English.propTypes = {
  user: PropTypes.object.isRequired
};

export default English;
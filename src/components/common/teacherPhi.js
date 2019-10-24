import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Phy extends Component {

  
  render() {
    const {id, name,email, phone, username, website} = this.props.user;
    return (
      <React.Fragment>
        {/* <div className="container"> */}
         <div className="row">
          <div className="col s12">
            
            <div className="card light-green accent-1">
              <div className="card-content">
               <span>
                <Link to={`usuarios/${id}`}>
                 Nombre: {name}{""}
                </Link>
               </span>  
               <p>Correo: {email}</p>
               <p>Telefono: {phone}</p>
               <p>Sitio Web: {website}</p>
              <span className="card-title">User  de la app de universidad: <strong>{username}</strong>{''}</span>
            </div>
            </div>
          </div>
         </div>
        {/* </div>      */}
      </React.Fragment>
    )
  }
}

Phy.propTypes = {
  user: PropTypes.object.isRequired
};

export default Phy
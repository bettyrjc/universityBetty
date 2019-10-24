import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

 const  Header = props => {
   const {name_pag} = props;
  return (
    <div>
    <nav>
    <div className="nav-wrapper grey darken-4">
      <Link to="/" className="brand-logo"><i class="material-icons">cloud</i>{name_pag}</Link>
      <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
        <i className="material-icons">menu</i></Link>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/carreras">Carreras</Link></li>
        <li><Link to="/inscripcion">Inscribirse</Link></li>
        <li><Link to="/becas">Becas</Link></li>
        <li><Link to="/notas">Notas</Link></li>
        <li><Link to="/profesores">Profesores</Link></li>
        <li><Link to="/horarios">Horarios</Link></li>
      </ul>
    </div>
  </nav>
  <ul className="sidenav" id="mobile-demo">
    <li><Link to="/">Inicio</Link></li>
    {/* <li><Link to="/usuarios">BettyUniversity</Link></li> */}
    <li><Link to="/carreras">Carreras</Link></li>
    <li><Link to="/inscripcion">Inscribirse</Link></li>
    <li><Link to="/becas">Becas</Link></li>
    <li><Link to="/notas">Notas</Link></li>
  </ul>
</div>
  )
}
Header.defaultProps = {
  name_pag: 'Unversity'
};

Header.propTypes = {
  name_pag: PropTypes.string.isRequired
};

export default Header;
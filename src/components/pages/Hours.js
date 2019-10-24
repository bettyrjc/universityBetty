import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';

import {initMaterialComponents,
        removeMaterialComponents
        } from "../../help/functional"

class Hours extends Component {
  state={
    showHours:false,
    showHoursLice:false,
    showHoursTech:false
  }
  componentDidMount(){
    initMaterialComponents();
  }
  componentWillUnmount(){
    removeMaterialComponents();
  }
  render() {
    const {showHours,
           showHoursLice,
           showHoursTech
          }  = this.state;
    return (
     <React.Fragment>
      <Header/>
      <div className="container">
       <div className="row">
        <div className="col s12 ">
         <h5>Horarios Disponibles</h5>
         <div className="card">
          <div className="card">
           <span className="card-tittle">Horarios Ingeneria</span>
           <i className="material-icons" style={{ cursor: 'pointer',  with:'30px'}}
                                         onClick={() =>
                                              this.setState({
                                                showHours: !this.state.showHours
                                            })
            }>
             arrow_drop_down
           </i>
           { showHours ? (<ul className="card">
              <li className="card-content ">
              <Link to="horario_mañana_ingeneria">Horario Diurno, mañana</Link>
             </li>
             <li className="card-content ">
               <Link to="horario_tarde_ingeneria">Horario Diurno, tarde</Link>
             </li>
             <li className="card-content ">
              <Link to="horario_noche_ingeneria">Horario Noche</Link>
             </li>
           </ul>) : null }
          </div>
          <div className="card">
           <span className="card-tittle">Horarios Licenciatura</span>
           <i className="material-icons" style={{ cursor: 'pointer',  with:'30px'}}
                                         onClick={() =>
                                              this.setState({
                                                showHoursLice: !this.state.showHoursLice
                                            })
            }>
             arrow_drop_down
           </i>
           { showHoursLice ? (<ul className="card">
              <li className="card-content ">
              <Link to="horario_mañana_licenciatura">Horario Diurno, mañana</Link>
             </li>
             <li className="card-content ">
               <Link to="horario_tarde_licenciatura">Horario Diurno, tarde</Link>
             </li>
             <li className="card-content ">
              <Link to="horario_noche_licenciatura">Horario Noche</Link>
             </li>
           </ul>) : null }
           </div>
          <div className="card">
           <span className="card-tittle">Horarios Tecnología</span>
           <i className="material-icons" style={{ cursor: 'pointer',  with:'30px'}}
                                         onClick={() =>
                                              this.setState({
                                                showHoursTech: !this.state.showHoursTech
                                            })
            }>
             arrow_drop_down
           </i>
           { showHoursTech ? (<ul className="card">
              <li className="card-content ">
              <Link to="horario_mañana_tecnologia">Horario Diurno, mañana</Link>
             </li>
             <li className="card-content ">
               <Link to="horario_tarde_tecnologia">Horario Diurno, tarde</Link>
             </li>
             <li className="card-content ">
              <Link to="horario_noche_tecnologia">Horario Noche</Link>
             </li>
           </ul>) : null }
          </div>
          </div>
         </div>
        </div>
       </div>
      <Footer/>
     </React.Fragment>
    )
  }
 }
 export default Hours;
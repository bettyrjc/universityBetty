import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Careers from './components/careers/Careers';
import './App.css';
// Pensum
import ChemicalPem from './components/pensums/ChemicalEng';
import Lice from './components/pensums/Lice';
import Computers from './components/pensums/Pc';
// Profesores
import TeacherEng from './components/teachers/classI/Engineer';
import TeacherLice from './components/teachers/classII/Engineer'
import TeacherPc from './components/teachers/classII/Engineer'
//Horarios

//Ingeneria
import HourMorningEng from './components/hours/ChemicalMorning';
import HourAfterEng from './components/hours/ChemicalAfternoon';
import HourNightEng from './components/hours/ChemicalNight';

//Licenciatura
import HourMorningLice from './components/hours/LiceMorning';
import HourAfterLice from './components/hours/LiceAfternoon';
import HourNightLice from './components/hours/LiceNight';

// Tech
import HourMorningTech from './components/hours/PcMorning'
import HourAfterTech from './components/hours/PcMorning'
import HourNightTech from './components/hours/PcNight'
//Vistas
import Hours from './components/pages/Hours'
import Teachers from './components/pages/Teachers'
// becas
import Shcolarships from './components/pages/Scholarships';
import ShcolarshipsForm from './components/solicitudes/ScholarshipsForm'
import Notes from './components/pages/Notes';
import NotesForm from './components/solicitudes/NoteForms'

import Register from  './components/pages/Register'
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <div className="App">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/horarios" component={Hours} />
                <Route exact path="/profesores" component={Teachers} />
              </Switch>
              <Switch>
                <Route exact path="/carreras" component={Careers}/>
                <Route exact path="/Pensum_ing" component={ChemicalPem}/>
                <Route exact path="/Pensum_lice" component={Lice}/>
                <Route exact path="/Pensum_computacion" component={Computers}/>
              </Switch>
              <Switch>
                <Route exact path="/Profesores_I" component={TeacherEng}/>
                <Route exact path="/Profesores_II" component={TeacherLice}/>
                <Route exact path="/Profesores_III" component={TeacherPc}/>
              </Switch>
              <Switch>
                <Route exact path="/horario_mañana_ingeneria" component={HourMorningEng}/>
                <Route exact path="/horario_tarde_ingeneria" component={HourAfterEng}/>
                <Route exact path="/horario_noche_ingeneria" component={HourNightEng}/>
              </Switch>
              <Switch>
                <Route exact path="/horario_mañana_licenciatura" component={HourMorningLice}/>
                <Route exact path="/horario_tarde_licenciatura" component={HourAfterLice}/>
                <Route exact path="/horario_noche_licenciatura" component={HourNightLice}/>
              </Switch>
              <Switch>
                <Route exact path="/horario_mañana_tecnologia" component={HourMorningTech}/>
                <Route exact path="/horario_tarde_tecnologia" component={HourAfterTech}/>
                <Route exact path="/horario_noche_tecnologia" component={HourNightTech}/>
              </Switch>
              <Switch>
              <Route exact path="/inscripcion" component={Register}/>
                <Route exact path="/becas" component={Shcolarships}/>
                <Route exact path="/becas_formularios" component={ShcolarshipsForm}/>
                <Route exact path="/notas" component={Notes}/>
                <Route exact path="/notas_formulario" component={NotesForm}/>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App;
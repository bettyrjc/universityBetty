import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
        initMaterialComponents,
        removeMaterialComponents
} from '../../../help/functional';

import Header from '../../layout/header';
import Footer from '../../layout/footer';

import CardTeacherPhy from '../../common/teacherPhi';
import {getUsers} from '../../../actions/userAction'
import Spinner from '../../common/loaders';

class Enginner extends Component{
componentDidMount(){
  this.props.getUsers();
  initMaterialComponents();
}
componentWillUnmount() {
 removeMaterialComponents();
}
 render(){
  const {users, loading} = this.props;
  if(loading){
   return <Spinner/>
  }else{
   return(
    <React.Fragment>
     <Header/>
     <div className="container">
       <div className="col s12">
        <div className="row">
         <h4 className="center">Profesores tipo II</h4>
        </div>
        <div className="row">
         <div className="col s12">
          {
           users.map(
            user => (<CardTeacherPhy key={user.id} user={user}/>)
           )
          }
         </div>
       
        </div>
       </div>
     </div>
     <Footer/>
   </React.Fragment>
   )
  }
 }
}

Enginner.propTypes ={ 
 users: PropTypes.array.isRequired,
 getUsers: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
 users: state.user.users,
 loading: state.user.loading
});

export default connect(
 mapStateToProps,
 { getUsers }
)(Enginner);









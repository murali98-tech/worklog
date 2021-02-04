import './App.css';
import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Login from './Login/Login';
import Navigation from './Navigation/Navigation'
import DashBoard from './DashBoard/DashBoard'
import ListView from './ListView/ListView'
import User from './AddUser/User';
import Logout from './Login/Logout';

class App extends Component {
  state={
    login:true
  }
  
setLogin=()=>{
  this.setState({login:false})
}
setLogout=()=>{
  this.setState({login:true})
}
  render(){
    let nav=null;
    if(!this.state.login){
      nav=(<Navigation />)
    }
  
    
  return (
    
   
    <div>
      
       <Router>
       {nav}
    <Switch>
    <Route path='/' exact render={()=>this.state.login?<Login login={this.setLogin} />:<DashBoard/>} />
    <Route path='/dashboard' component={DashBoard}/>
    <Route path='/adduser' component={User}/>
    <Route path='/logout' render={()=>this.state.login?<Login login={this.setLogin} />:<Logout logout={this.setLogout}/>}/>
    <Route path='/view' component={ListView}/>
    </Switch>
    </Router>
 
    </div>
    
    
  
  
  );
  }
}

export default App;

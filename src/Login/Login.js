import React,{Component} from 'react';
import FormHeader from './Form/FormHeader';
import Form from './Form/Form';
import classes from './Login.module.css';

class Login extends Component{
  state={
    login:this.props.login,
    name:null,
    password:null
  }
  setUser=(event)=>{
    this.setState({name:event.target.value})
  }
  setPassword=(event)=>{
    this.setState({password:event.target.value})
    
  }
  validateUser=()=>{
   
   if(this.state.name==='admin' && this.state.password==='admin'){
   this.setState({login:false})
   console.log(this.props.login);
   this.props.login()
   }
   }
  userLogin
    render(){
      let loginPage=null
      if(this.state.login){

        loginPage=( <div  className={classes.loginform}><FormHeader title="Login" />
        <Form user={(event)=>this.setUser(event)} password={(event)=>this.setPassword(event)} click={this.validateUser}/></div>);
      }
       
        return(
          
            <div>
             {loginPage}
              
            </div>
          );
    }
}

export default Login;
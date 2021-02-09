import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
class Logout extends Component{
    logout(){
    console.log('in logout')
    this.props.logout();
    }

    render(){
      this.logout();
        
        return(
           
            <Redirect to ='/'/>
        )

    }
}

export default Logout;
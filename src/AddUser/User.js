import React,{Component} from 'react';
import AddUser from './AddUser';
class User extends Component{
    state={
        name:null,
        project:null,
        description:null,
        timespent:null
    }
     setname=(event)=>{
        this.setState({name:event.target.value})
      }
      setProject=(event)=>{
        this.setState({project:event.target.value})
      }
      setDescription=(event)=>{
        this.setState({description:event.target.value})
      }
      setTime=(event)=>{
        this.setState({timespent:event.target.value})
      }
      printState=(event)=>{
        event.preventDefault();
          console.log(this.state);
      }
      

    render(){
        return(
            <AddUser name={(e)=>this.setname(e)} project={(e)=>this.setProject(e)} description={(e)=>this.setDescription(e)}
            timespent={(e)=>this.setTime(e)} change={(e)=>this.printState(e)}
            />

        )
    }

}

export default User;
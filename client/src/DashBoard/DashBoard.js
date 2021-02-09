import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './DashBoard.css'
import Card from './Card'
import axios from 'axios'
class DashBoard extends Component{
    state={
        person:[]
    }

    componentDidMount() {
        axios.get(`http://localhost:8888/display-ws/getDetails`)
          .then(res => {  
            console.log(res.data);
            const personData = res.data;
            this.setState({ person:personData });
          }).catch(err=>
         console.log(err) )
      }
    render(){
        return(
               <div className="container">
                <Card person={this.state.person}/>
                </div>
        
                  
        )
    }
}

export default DashBoard;
import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './DashBoard.css'
import Card from './Card'
class DashBoard extends Component{
    state={
        person:[
            {
                name:'joel',
                project:'metlife',
                description:'done with new feature',
                timespent:'9',
            },
            {
                name:'bharath',
                Project:'metlife',
                description:'done with new feature',
                timespent:'9',
            }
        ]
    }
    render(){
        return(
            
                <Card person={this.state.person}/>
        
                  
        )
    }
}

export default DashBoard;
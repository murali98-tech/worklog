
import React,{Component} from 'react';
import List from './ListDisplay';
import './List.css'
import axios from'axios'
class ListView extends Component{
   
   
    findPerson=()=>{
        let name=this.props.location.aboutProps
        
       console.log(name.workLog)
      
            return name.workLog

        }
       
    
  

    render()
    {
        let people=(this.findPerson());
        console.log(people)
        
        return(
            <div>
               
                
               <List person={people}/>
                
            </div>

        );
    }
}

export default ListView;
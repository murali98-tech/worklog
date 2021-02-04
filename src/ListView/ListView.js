
import React,{Component} from 'react';
import List from './ListDisplay';
import './List.css'
class ListView extends Component{
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
    findPerson=()=>{
        let name=this.props.location.aboutProps
        
        let person=null;
        for(let i=0;i<this.state.person.length;i++){
            console.log(this.state.person[i])
            console.log(name.name)
            if(this.state.person[i].name===name.name){
                person={...this.state.person[i]}

            }

        }
        return person
    }
  

    render()
    {
        let people=(this.findPerson());
        console.log(people)
        
        return(
            <div>
               
                
                   <List person={this.state.person[0]}/>
                
            </div>

        );
    }
}

export default ListView;
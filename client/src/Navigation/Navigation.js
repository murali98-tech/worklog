import React,{Component} from 'react';
import './Navigation.css'
import {Link} from 'react-router-dom'
class Navigation extends Component{
    render(){
        return(
            <div>
                <ul>
                  <li> <Link to='/dashboard'> DashBoard</Link></li>
                    <li><Link to='/adduser'> AddUser</Link></li>
                   <li className="button" ><Link to='/logout'> Logout</Link></li>
                </ul>
            </div>

        )
    }
}

export default Navigation;
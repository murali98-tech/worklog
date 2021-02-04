import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './DashBoard.css'
import{Link} from 'react-router-dom'
const Card=(props)=>{
    let cards=props.person.map(person=>{
        return(
            <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
         <img className="card-img-top img img-responsive" height="250" src="http://www.wikihow.com/images/f/ff/Draw-a-Cute-Cartoon-Person-Step-14.jpg" alt="img"/>
         <div className="card-body">
             <h5 className="card-title">{person.name}<span className="float-right">CDE</span></h5>
             <p class="card-text">
               This person is a fullStack developer
               Click below to view the efforts
            </p>
           <Link to={{ pathname:'/view', aboutProps: { name:person.name} }} className='btn btn-primary'>  click to view</Link>
         </div>
       </div>
       </div>
        )
    })
    return(
        <div className="row">
       {cards}
    </div>
         
    )
}

 export default Card;
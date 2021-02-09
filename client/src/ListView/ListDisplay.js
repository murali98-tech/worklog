import './List.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const List=(props)=>{
    let list=props.person.map(person=>{
        return(
         
            <tr>
            <td>{person.description}</td>
    
            <td>{person.timeSpent}</td>
            </tr>
          
            
        )
    })

    return(
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>
                        Description
                    </th>
                    <th>
                        Timespent
                    </th>
                    </tr>
                </thead>
            <tbody>

            {list}
           
            </tbody>
            </table>
        </div>
    )
}
export default List;
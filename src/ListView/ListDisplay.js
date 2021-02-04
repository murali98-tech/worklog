import './List.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const List=(props)=>{

    return(
        <div>
            <table className="table table-striped">
            <tbody>
            <tr>
            <td>Name</td>
            <td>{props.person.name}</td>
            </tr>
            <tr>
            <td>project</td>
            <td>{props.person.project}</td>
            </tr>
            <tr>
            <td>decsription</td>
            <td>{props.person.description}</td>
            </tr>
            <tr>
            <td>TimeSpent</td>
            <td>{props.person.timespent}</td>
            </tr>
            </tbody>
            </table>
        </div>
    )
}
export default List;
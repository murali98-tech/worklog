

const AddUser=(props)=>{
return(
   
        <div className="container">
            <table>
                <tr>
                <div class="form-group">
                    <td>Name:</td>
                    <td>
                        <input type="text" placeholder="name" className="form-control" onChange={props.name} />
                    </td>
                </div>
                </tr>
                <tr>
                <div class="form-group">
                    <td>Project</td>
                    <td>
                        <select className="form-control" >
                            <option value = "gss" onChange={props.project}>Gss</option>
                            <option value = "metlife" onChange={props.project}>metLife</option>
               
                        </select>
                    </td>
                    </div>
                </tr>
                <tr>
                <div class="form-group">
                    <td>Description</td>
                    <td>
                        <textarea placeholder="description" rows="3"className="form-control" onChange={props.description}/>
                    </td>
                    </div>
                </tr>
                <tr>
                <div class="form-group">
                    <td>Time Spent</td>
                    <td>
                        <input type="text" placeholder="Effort" className="form-control" onChange={props.timespent} />
                    </td>
                    </div>
                </tr>
                <tr>
                    <td>
                        <button class="btn btn-primary" onClick={props.change}>submit</button>
                    </td>
                </tr>
            </table>
            </div>
      

  
)

}
export default AddUser;
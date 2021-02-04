

const AddUser=(props)=>{
return(
        
        <div className="container">
            <form onSubmit={props.change}>
           
            <div className="form-group"> 
                    <label>Name:</label>
                  
                        <input type="text" placeholder="name" className="form-control" onChange={props.name} />
                </div>
                
                <div className="form-group">
                    <lable>Project</lable>
                        <select className="form-control" onChange={props.project} >
                            <option  >Gss</option>
                            <option >metLife</option>
                        </select>
                    </div>
              
                <div className="form-group">
                    <lable>Description</lable>
                    
                        <textarea placeholder="description" rows="3"className="form-control" onChange={props.description}/>
                   
                    </div>
               
               
                <div className="form-group">
                    <lable>Time Spent</lable>
                    
                        <input type="text" placeholder="Effort" className="form-control" onChange={props.timespent} />
                
                    </div>
                
               
                        <button className="btn btn-primary" type="submit">submit</button>
                 
             
            </form>
            </div>
      

  
)

}
export default AddUser;
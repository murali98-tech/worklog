import classes from './Form.module.css'
let combinedClass=[];
combinedClass.push(classes.row);
combinedClass.push(classes.input);
combinedClass.push(classes.label)
const FormInput = props => (
    <div className= {classes.row} >
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} onChange={props.user}/>
    </div>  
  );

  export default FormInput;
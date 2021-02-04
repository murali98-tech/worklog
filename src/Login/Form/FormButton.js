import classes from './Form.module.css'
let combinedClass=[];
combinedClass.push(classes.row);
combinedClass.push(classes.btn);
const FormButton = props => (
    <div  className={combinedClass.join(' ')}>
      <button onClick={props.click}>{props.title}</button>
    </div>
  );

  export default FormButton;
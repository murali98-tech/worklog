import classes from './Form.module.css'

const FormHeader = props => (
    <h2 className={classes.headerTitle}>{props.title}</h2>
);

export default FormHeader;
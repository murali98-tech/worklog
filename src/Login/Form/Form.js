import FormInput from './FormInput';
import FormButton from './FormButton';

 
const Form = props => (
  
    <div>
      <FormInput user={props.user}  description="Username" placeholder="Enter your username" type="text"  />
      <FormInput description="Password" placeholder="Enter your password" type="password" user={props.password}/>
      <FormButton title="Log in" click={props.click}/>
    </div>
 );

 export default Form;
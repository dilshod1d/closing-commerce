import SigninComponent from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';
import './signin.styles.scss';
const Signin = () => {
  return (
    <div className='signin'>
      <SigninComponent />
      <SignUp />
    </div>
  );
};

export default Signin;

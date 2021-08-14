import { Component } from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { auth, signinWithGoogle } from '../../firebase/firebase.utils';
import { FcGoogle } from 'react-icons/fc';
class SigninComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Allaqachon akkountingiz bormi?</h2>
        <span>Email va parol bilan kiring</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />

          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Parol'
            required
          />

          <div className='buttons'>
            <Button type='submit'>Kirish</Button>

            <Button
              type='button'
              onClick={signinWithGoogle}
              isGoogleSignin
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <FcGoogle className='icon' />
              oogle bilan kirish
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SigninComponent;

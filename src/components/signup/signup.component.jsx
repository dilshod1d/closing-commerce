import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {
  auth,
  createUserProfileDocument,
  signinWithGoogle,
} from '../../firebase/firebase.utils';
import './signup.styles.scss';
import { Component } from 'react';
class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>Zillionda yangimisiz? </h2>
        <span>Email va parol bilan ro'yxatdan o'ting</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Ismingiz'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Parol'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Parolni Qayta Kiriting'
            required
          />
          <div className='buttons'>
            <Button type='submit' style={{ marginBottom: '10px' }}>
              Ro'yxatdan O'tish
            </Button>
            <Button type='button' onClick={signinWithGoogle} isGoogleSignin>
              Google bilan ro'yxatdan o'tish
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;

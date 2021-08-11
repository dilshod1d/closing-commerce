import { useState } from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { signinWithGoogle } from '../../firebase/firebase.utils';
const SigninComponent = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ email: '', password: '' });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ [name]: value });
  };
  return (
    <div className='sign-in'>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={form.email}
          handleChange={handleChange}
          label='Email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={form.password}
          handleChange={handleChange}
          label='Password'
          required
        />

        <div className='buttons'>
          <Button type='submit'>Sign in</Button>
          <Button onClick={signinWithGoogle} isGoogleSignin>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SigninComponent;

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
      <h2>Allaqachon akkountingiz bormi?</h2>
      <span>Email va parol bilan kiring</span>
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
          label='Parol'
          required
        />

        <div className='buttons'>
          <Button type='submit'>Kirish</Button>
          <Button type='button' onClick={signinWithGoogle} isGoogleSignin>
            Google bilan kirish
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SigninComponent;

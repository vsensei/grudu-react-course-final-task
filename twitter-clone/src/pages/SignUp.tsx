import { FormEvent } from 'react';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
    console.log('[MOCK] Signed up');
    navigate('/');
  };

  return (
    <Form descriptionText='Already have an account? ' linkHref='/' linkText='Sign in'>
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <input type='text' placeholder='Username' />
      <input type='text' placeholder='Full name' />
      <button type='submit' onClick={(e) => handleSignUp(e)}>
        Sign up
      </button>
    </Form>
  );
}

export default SignUp;

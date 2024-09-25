import { FormEvent } from 'react';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    console.log('[MOCK] Logged in');
    navigate('/');
  };

  return (
    <Form descriptionText='Don’t have an account? ' linkHref='/signup' linkText='Sign up'>
      <input type='text' placeholder='Username' />
      <input type='password' placeholder='Password' />
      <button type='submit' onClick={(e) => handleSignIn(e)}>
        Log in
      </button>
    </Form>
  );
}

export default SignIn;

import Form from './Form';

function SignUp() {
  return (
    <Form descriptionText='Already have an account? ' linkHref='#' linkText='Sign in'>
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <input type='text' placeholder='Username' />
      <input type='text' placeholder='Full name' />
      <button type='submit'>Sign up</button>
    </Form>
  );
}

export default SignUp;

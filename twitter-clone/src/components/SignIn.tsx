import Form from './Form';

function SignIn() {
  return (
    <Form descriptionText='Don’t have an account? ' linkHref='#' linkText='Sign up'>
      <input type='text' placeholder='Username' />
      <input type='password' placeholder='Password' />
      <button type='submit'>Log in</button>
    </Form>
  );
}

export default SignIn;

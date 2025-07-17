import bcrypt from 'bcryptjs';
import Form from '../components/Form';
import { signUp } from '../util/signUp';

type ActionData = Record<string, { message: string; status: number }>;

function SignUp() {
  return (
    <Form
      descriptionText='Already have an account?'
      linkHref='/signin'
      linkText='Sign in'
    >
      <input type='email' name='email' placeholder='Email' />
      <input type='password' name='password' placeholder='Password' />
      <input type='text' name='username' placeholder='Username' />
      <input type='text' name='fullname' placeholder='Full name' />
      <button type='submit'>Sign up</button>
    </Form>
  );
}

export default SignUp;

export async function action({ request }: { request: Request }) {
  const errors: ActionData = {};
  const data = await request.formData();

  const password = data.get('password') as string;
  const passwordHash = bcrypt.hashSync(password);

  const authData = {
    id: data.get('username') as string,
    name: data.get('fullname') as string,
    email: data.get('email') as string,
    password: passwordHash as string,
  };

  try {
    return signUp(authData);
  } catch (err) {
    console.log(err);
    errors.autentication = { message: 'Server not available', status: 404 };
    return errors;
  }
}

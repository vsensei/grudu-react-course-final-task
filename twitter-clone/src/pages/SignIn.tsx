import { useActionData } from 'react-router-dom';
import Form from '../components/Form';
import { signIn } from '../util/signIn';

type ActionData = Record<string, { message: string; status: number }>;

function SignIn() {
  const data = useActionData() as ActionData;

  return (
    <Form
      descriptionText='Don’t have an account?'
      linkHref='/signup'
      linkText='Sign up'
    >
      {data && console.log('DATA2', Object.values(data))}
      {data && Object.keys(data).length && (
        <ul>
          {Object.values(data).map((err) => (
            <li key={err.message}>{err.message}</li>
          ))}
        </ul>
      )}
      <input id='username' name='username' type='text' placeholder='Username' />
      <input
        id='password'
        name='password'
        type='password'
        placeholder='Password'
      />
      <button type='submit'>Log in</button>
    </Form>
  );
}

export default SignIn;

export async function action({ request }: { request: Request }) {
  const errors: ActionData = {};
  const data = await request.formData();
  const authData = {
    userName: data.get('username') as string,
    password: data.get('password') as string,
  };

  if (!authData.userName || !authData.password) {
    errors.autentication = { message: 'Password is empty', status: 400 };
    return errors;
  }
  try {
    return signIn(authData);
  } catch (err) {
    console.log(err);
    //@ts-ignore
    errors.autentication = { message: err.message ?? 'Server not available' };
    return errors;
  }
}

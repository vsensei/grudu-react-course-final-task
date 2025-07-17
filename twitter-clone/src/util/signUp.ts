import { redirect } from 'react-router-dom';
import { setupSession } from '../auth';
import { BACKEND_URL_BASE } from '../const';

type AuthData = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export async function signUp(authData: AuthData) {
  const response = await fetch(`${BACKEND_URL_BASE}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 404) {
    throw new Error('Server not available');
  }

  if (!response.ok) {
    throw new Error('Not created');
  }

  const user = await response.json();

  if (!user) {
    throw new Error('Not created');
  }

  delete user.password;

  setupSession(user as any);

  return redirect('/');
}

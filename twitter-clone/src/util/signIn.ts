import bcrypt from 'bcryptjs';
import { redirect } from 'react-router-dom';
import { setupSession } from '../auth';
import { BACKEND_URL_BASE } from '../const';

type AuthData = {
  userName: string;
  password: string;
};

export async function signIn(authData: AuthData) {
  const response = await fetch(
    `${BACKEND_URL_BASE}/users?id=${authData.userName}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (response.status === 404) {
    throw new Error('Server not available');
  }

  if (!response.ok) {
    throw new Error('Not authenticated');
  }

  let user = await response.json();

  if (
    !user.length ||
    !user[0] ||
    !bcrypt.compareSync(authData.password, user[0].password)
  ) {
    throw new Error('Not authenticated');
  }

  user = user[0];

  delete user.password;

  setupSession(user as any);

  return redirect('/');
}

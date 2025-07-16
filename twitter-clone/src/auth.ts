import { redirect } from 'react-router-dom';
import { EXPIRED } from './const';

type User = {
  id: string;
  name: string;
  email: string;
  login: string;
  expiration?: string;
};

export function getSessionDuration() {
  const storedUser = localStorage.getItem('user');

  if (!storedUser) {
    return -1;
  }

  const storedExpiration = (JSON.parse(storedUser) as User).expiration;

  if (!storedExpiration) {
    return -1;
  }

  const expiration = new Date(storedExpiration);
  const now = new Date();
  const duration = expiration.getTime() - now.getTime();

  return duration;
}

export function getSession() {
  const userStr = localStorage.getItem('user');

  if (!userStr) {
    return null;
  }

  const user = JSON.parse(userStr).user;

  if (getSessionDuration() < 0) {
    return EXPIRED;
  }

  return user;
}

export function sessionLoader() {
  return getSession();
}

export function checkAuthLoader() {
  const token = getSession();

  return token ? null : redirect('/signin');
}

export function setupSession(user: User) {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  const exp = date.toISOString();
  const obj = { user, expiration: exp };
  const str = JSON.stringify(obj);
  console.log(str, JSON.parse(str));
  localStorage.setItem('user', str);
}

export function releaseSession() {
  localStorage.removeItem('user');
}

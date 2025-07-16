import './App.css';
import { action as newPostAction } from './components/NewPost';
import Feed, { loader as postsLoader } from './pages/Feed';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn, { action as signInAction } from './pages/SignIn';
import SignUp, { action as signUpAction } from './pages/SignUp';
import Root from './pages/Root';
import { checkAuthLoader, sessionLoader } from './auth';
import { action as LogoutAction } from './pages/Logout';

function App() {
  const router = createBrowserRouter([
    {
      id: 'root',
      path: '/',
      element: <Root />,
      loader: sessionLoader,
      children: [
        {
          path: '/',
          loader: checkAuthLoader,
          children: [
            {
              path: '/',
              element: <Feed />,
              loader: postsLoader,
              action: newPostAction,
            },
          ],
        },
        {
          path: 'signin',
          element: <SignIn />,
          action: signInAction,
        },
        {
          path: 'signup',
          element: <SignUp />,
          action: signUpAction,
        },
        {
          path: 'logout',
          action: LogoutAction,
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

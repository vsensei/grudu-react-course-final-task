import './App.css';
import NewPost from './components/NewPost';
import Feed from './components/Feed';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Root from './pages/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: (
            <>
              <NewPost />
              <Feed />
            </>
          ),
        },
        {
          path: '/signin',
          element: <SignIn />,
        },
        {
          path: '/signup',
          element: <SignUp />,
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

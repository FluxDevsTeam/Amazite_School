import {
  Landing,
  Blog,
  Contact,
  Apply,
  About_us,
  HomeLayout,
  Curriculum,
} from './pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'about-us',
        element: <About_us />,
      },
      {
        path: 'curriculum',
        element: <Curriculum />,
      },
      {
        path: 'apply-now',
        element: <Apply />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'contact-us',
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

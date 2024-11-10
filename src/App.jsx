import {
  Landing,
  Blog,
  Contact,
  Apply,
  About_us,
  HomeLayout,
  Curriculum,
} from './pages';
import Eventspage from './pages/Details/Eventspage';
import Newspage from './pages/Details/Newspage';
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
      {
        path: 'Eventspage/:id',
        element: <Eventspage />,
      },
      {
        path: 'Newspage/:id',
        element: <Newspage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

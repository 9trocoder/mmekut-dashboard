import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './page/Homepage';

import ErrorPage from './components/error-page';
import Loginpage from './page/Loginpage';

const router = createBrowserRouter([
  {
    path: "/mmekut",
    element: <Homepage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <Loginpage />,
    errorElement: <ErrorPage />
  }
])

export default router;
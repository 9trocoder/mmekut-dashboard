import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './page/Homepage';

import ErrorPage from './components/error-page';
import Loginpage from './page/Loginpage';
import Signuppage from './page/Signuppage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
    errorElement: <ErrorPage />
  },{
    path: "/mmekut",
    element: <Homepage />,
    errorElement: <ErrorPage />
  },{
    path: "/signup",
    element: <Signuppage />,
    errorElement: <ErrorPage />
  }
  
])

export default router;
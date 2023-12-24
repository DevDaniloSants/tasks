import { createBrowserRouter } from 'react-router-dom';

// Pages
import RootLayout from './pages/RootLayout';
import New from './pages/New';
import Home from './pages/Home';
import Checklists from './pages/Checklists';
import Checklist from './pages/Checklist';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/new',
        element: <New />,
      },
      {
        path: '/checklists',
        element: <Checklists />,
      },
      {
        path: '/checklists/:id',
        element: <Checklist />,
      },
    ],
  },
]);

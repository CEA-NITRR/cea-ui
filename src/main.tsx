import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx';
import Home from './pages/Home.tsx';
import Team from './pages/Team.tsx';
import Post from './pages/Post.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Loading from './pages/Loading';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
        errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
       element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "team",
            element: (
          <Suspense fallback={<Loading />}>
            <Team />
          </Suspense>
        ),
      },
      {
        path: "post",
            element: (
          <Suspense fallback={<Loading />}>
            <Post />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
 <StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
)

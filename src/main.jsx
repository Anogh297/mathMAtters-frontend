import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import ProblemPage from './components/ProblemPage/ProblemPage.jsx';
import TopicProblems from './components/ProblemPage/TopicProblems.jsx';
import Problem from './components/ProblemPage/Problem.jsx';
// import { Root } from 'postcss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/problempage',
        element: <ProblemPage></ProblemPage>
      },
      {
        path: '/topicproblems/:id',
        element: <TopicProblems></TopicProblems>
      },
      {
        path: '/problem/:id',
        element: <Problem></Problem>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

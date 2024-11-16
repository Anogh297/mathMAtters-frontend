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
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import Login from './components/Authentication/Login/Login.jsx';
import Register from './components/Authentication/Register/Register.jsx';
import MathArticles from './components/MathArticles/MathArticles.jsx';
import Leaderboard from './components/Leaderboard/Leaderboard.jsx';
import { Teams } from './components/Teams/Teams.jsx';

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
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/matharticles',
        element: <MathArticles></MathArticles>
      },
      {
        path: '/leaderboard',
        element: <Leaderboard></Leaderboard>
      },
      {
        path: '/team',
        element: <Teams></Teams>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

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
import SetProblem from './components/ProblemPage/SetProblem.jsx';
import Contests from './components/Contests/Contests.jsx';

import ModeratorApplication from './components/Moderator/ModeratorApplication.jsx';
import AdminDashboard from './components/Admin/AdminDashboard.jsx';
import SingleContest from './components/Contests/SingleContest.jsx';
import { About } from './components/Teams/About.jsx';
import Profile from './components/Profile/Profile.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';


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
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/userprofile',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/team',
        element: <Teams></Teams>
      },
      {
        path: '/setproblem',
        element: <SetProblem></SetProblem>
      },
      {
        path: '/contests',
        element: <Contests></Contests>
      },
      {
        path: '/contest/:id',
        element: <SingleContest></SingleContest>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/application',
        element: <ModeratorApplication></ModeratorApplication>
      },
    
      {
        path: '/aboutus',
        element: <About></About>
      },
      {
        path: '/admin',
        element: <AdminDashboard></AdminDashboard>
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

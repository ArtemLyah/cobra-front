import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App }  from '../pages/app';
import AboutPage from '../pages/about.page';
import HomePage from '../pages/homePage/home.page';
import FAQPage from '../pages/faq.page';
import UserPage from '../pages/user-profile/user-profile.page';
import PresentationPage from '../pages/presentation/presentation.page';
import RegistrationPage from '../pages/registration.page';
import LogInPage from '../pages/login.page';
import PageBuilder from './PageBuilder';
import RoadmapPage from '../pages/roadmap/roadmap.page';
import RoadmapEditor from '../pages/roadmap-editor/roadmap-editor';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      PageBuilder({
        path: '/',
        page: <HomePage/>,
        requireAuth: true,
        menu: true,
        footer: true,
      }),
      PageBuilder({
        path: '/about',
        page: <AboutPage/>,
        menu: true,
        footer: true,
      }),
      PageBuilder({
        path: '/faq',
        page: <FAQPage/>,
        menu: true,
        footer: true,
      }),
      PageBuilder({
        path: '/presentation',
        page: <PresentationPage/>,
        footer: true,
      }),
      PageBuilder({
        path: '/profile',
        page: <UserPage/>,
        requireAuth: true,
        menu: true,
        footer: true,
      }),
      PageBuilder({
        path: '/roadmaps/:roadmapId',
        page: <RoadmapPage/>,
        menu: true,
        footer: true,
      }),
      PageBuilder({
        path: '/roadmaps/editor',
        page: <RoadmapEditor/>,
        requireAuth: false,
      }),
      {
        path: 'auth',
        children: [
          PageBuilder({
            path: '/auth/register',
            page: <RegistrationPage/>,
          }),
          PageBuilder({
            path: '/auth/login',
            page: <LogInPage/>,
          }),
        ],
      },
    ],
  },
]);
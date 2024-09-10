import React, { lazy, Suspense } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import NotFound from './pages/NotFound';
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

const SuspenseFallback = () => <div>Loading...</div>;

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to={'/home'} />,
            },
            {
                path: 'home',
                element: (
                    <Suspense fallback={<SuspenseFallback />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: 'about-us',
                element: (
                    <Suspense fallback={<SuspenseFallback />}>
                        <AboutUs />
                    </Suspense>
                ),
            },
            {
                path: 'services',
                element: (
                    <Suspense fallback={<SuspenseFallback />}>
                        <ServicesPage />
                    </Suspense>
                ),
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />,
    },
], {
    basename: '/alphaa'
});

export default router;

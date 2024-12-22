import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventPage from './EventPage.jsx'; 

// Create a router for your application
const router = createBrowserRouter([
  {
    path: '/',
    element: <EventPage />, // Main EventPage component
  },
]);

// Rendering the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

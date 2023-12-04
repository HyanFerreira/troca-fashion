import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './pages/Login';
import AccoutProfile from './pages/AccoutProfile';
import CadastrarProduto from './pages/CadastrarProduto';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/user/account/profile',
    element: <AccoutProfile />,
  },
  {
    path: '/cadastrar/produto',
    element: <CadastrarProduto />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

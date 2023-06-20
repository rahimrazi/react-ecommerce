import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Cart } from './features/cart/Cart';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/login",
    element: <LoginPage></LoginPage> ,
  },{
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
   
  );
}

export default App;

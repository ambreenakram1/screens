import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import DashboardScreen from "./app/screens/DashboardScreen";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(

    <Provider store={store}>
   <LoginScreen/>
   {/*     <RegisterScreen />*/}
   {/*     <DashboardScreen/>*/}

    </Provider>

);



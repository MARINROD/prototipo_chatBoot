import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './client/pages/main/Main';
import ChatBootContextProvider from './client/Context/chatbootContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChatBootContextProvider>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </ChatBootContextProvider>

);
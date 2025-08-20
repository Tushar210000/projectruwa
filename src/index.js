// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import Main from './Main';
// // import { BrowserRouter } from 'react-router-dom';
// // import Login from './Component/Login';
// // import LoginPage from './Pages/LoginPage';
// import App from './App';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//   <App/>
//   </>

// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Required for routing
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

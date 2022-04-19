import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login/Login.js";
<<<<<<< HEAD
import ChatPage from "./pages/ChatPage/ChatPage.js";
=======
import CreateAccount from './pages/CreateAccount/createAccount.js';
>>>>>>> d0a175a179c62ca9f39ee6d8a914cea8f7efbc8f
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
<<<<<<< HEAD

        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="ChatPage" element={<ChatPage />} />
=======
        {/* Nested Routes leading to url */}
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="createAccount" element={<CreateAccount />} />
>>>>>>> d0a175a179c62ca9f39ee6d8a914cea8f7efbc8f
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


reportWebVitals();

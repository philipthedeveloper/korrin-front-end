import React from "react";
import Home from "./pages/Home";
import Login from "./pages/fans/Login";
import Forgot from "./pages/fans/Forgot";
import Nav from "./components/NavBar/Nav";
import ErrorPage from "./pages/Error";
import ArtisteSignUp from "./pages/artiste/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterFans from "./pages/fans/register";
import VerifyEmail from "./pages/verify-email";
import PrivateRoute from "./pages/fans/PrivateRoute";
import Dashboard from "./pages/fans/Dashboard";
import ArtisteDashboard from "./pages/artiste/Dashboard";
import LoginArtist from "./pages/artiste/Login";
import ErrorModal from "./components/UI/ErrorModal";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorModal />
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="forgoten-password" element={<Forgot />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="verify-email" element={<VerifyEmail />} />

          <Route path="artistes/">
            <Route path="register" element={<ArtisteSignUp />} />
            <Route path="Login" element={<LoginArtist />} />
            <Route path="dashboard" element={<ArtisteDashboard />} />
          </Route>
          <Route path="fans/">
            <Route path="register" element={<RegisterFans />} />
            <Route path="login" element={<Login />} />
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

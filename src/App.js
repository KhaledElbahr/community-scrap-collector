import React from "react";
import "./App.css";
import Home from "./views/home/Home";
import Privacy from "./views/privacy/Privacy";
import About from "./views/about/About";
import ContactUs from "./views/contactus/ContactUs";
import User from "./views/UserProfile";
import { Routes, Route } from "react-router-dom";
import SingleNews from "./componets/singleNews/SingleNews";
import Admin from "./layouts/Admin";
import AllNews from "./componets/allNews/AllNews";
import Login from "./componets/login/Login";
import Register from "./componets/Register/Register";
import TableDetails from "./views/TableDetails/TableDetails";
import IndividualDetails from './views/individualDetails/IndividualDetails';
import OrgDetails from './views/orgDetails/OrgDetails'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="profile" element={<User />} />
        <Route path="allNews" element={<AllNews />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="tableDetails" element={<TableDetails />} />
        <Route path="allNews/:title" element={<SingleNews />} />
        <Route path="individualDetails" element={< IndividualDetails/>} />
        <Route path="orgDetails" element={< OrgDetails/>} />
        
        <Route path="/admin/*" element={<Admin authed={true} />} />
      </Routes>
    </>
  );
}

export default App;

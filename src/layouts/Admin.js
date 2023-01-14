import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Footer from "../componets/Footer/Footer";
import Sidebar from "../componets/Sidebar/Sidebar";
import FixedPlugin from "../componets/FixedPlugin/FixedPlugin";
import {userRoutes,adminRoutes,superAdminRoutes} from "../routes.js";
import sidebarImage from "../assets/images/sidebar-3.jpg";
import Header from "../common/header/Header";
import { useSelector } from "react-redux";



function Admin() {
  const state = useSelector((state) => state);
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
          <Header />
      <div className="wrapper">
       {state.has_loged.type==="super_admin"&& <> <Sidebar color={color} image={hasImage ? image : ""} routes={superAdminRoutes} />
        <div className="main-panel" ref={mainPanel}>
          <div className="content">
            <Routes>
              {superAdminRoutes.map((prop, key) => {
                if (prop.layout === "/admin") {
                  return (
                    <Route
                      exact
                      path={prop.path}
                      element={<prop.component />}
                      key={key}
                    />
                  );
                }
              })}
            </Routes>
          </div>
          <Footer />
        </div>
        </>}

        {state.has_loged.type==="admin"&& <> <Sidebar color={color} image={hasImage ? image : ""} routes={adminRoutes} />
        <div className="main-panel" ref={mainPanel}>
          <Header />
          <div className="content">
            <Routes>
              {adminRoutes.map((prop, key) => {
                if (prop.layout === "/admin") {
                  return (
                    <Route
                      exact
                      path={prop.path}
                      element={<prop.component />}
                      key={key}
                    />
                  );
                }
              })}
            </Routes>
          </div>
          <Footer />
        </div>
        </>}

        {(state.has_loged.type==="org" ||state.has_loged.type==="individual" )&& <> <Sidebar color={color} image={hasImage ? image : ""} routes={userRoutes} />
        <div className="main-panel" ref={mainPanel}>
          <Header />
          <div className="content">
            <Routes>
              {userRoutes.map((prop, key) => {
                if (prop.layout === "/admin") {
                  return (
                    <Route
                      exact
                      path={prop.path}
                      element={<prop.component />}
                      key={key}
                    />
                  );
                }
              })}
            </Routes>
          </div>
        </div>
        </>}

      </div>
      <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      />
    </>
  );
}

export default Admin;

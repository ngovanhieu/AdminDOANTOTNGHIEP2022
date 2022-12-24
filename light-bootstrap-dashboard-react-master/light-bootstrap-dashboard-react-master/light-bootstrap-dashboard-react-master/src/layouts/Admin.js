/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-4.jpg";
import { useSelector } from "react-redux";
import { alertSelector, isLoadingGlobalSelector } from "../redux";
import { AlertMessage } from "components/alert/alert";
import { Login } from "views/Login";

function Admin() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("blue1");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const loading = useSelector(isLoadingGlobalSelector);
  const alert = useSelector(alertSelector);
  const isAdmin = localStorage.getItem("isAdmin");
  const userId = localStorage.getItem("userId");
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  React.useEffect(() => {
    if (isAdmin === "true") {
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
    }
  }, [location]);
  return (
    <>
      {loading && loading}
      {alert.displayAlert && <AlertMessage chilren={alert.itemPropAlert} />}
      {isAdmin === "true" && userId ? (
        <>
          <div className="wrapper">
            <Sidebar
              color={color}
              image={hasImage ? image : ""}
              routes={routes}
            />
            <div className="main-panel" ref={mainPanel}>
              <AdminNavbar />
              <div className="content">
                <Switch>{getRoutes(routes)}</Switch>
              </div>
              <Footer />
            </div>
          </div>
          {/* <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      /> */}
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Admin;

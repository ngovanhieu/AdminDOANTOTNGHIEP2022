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
import Dashboard from "views/Dashboard.js";
import User from "views/UserProfile";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import { DetailProduct } from "views/DetailProduct";
import { AddProduct } from "views/AddProduct";
import ListUser from "views/listUser";
import { AddUser } from "views/AddUser";
import { ListOrder } from "views/listOrder";

const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin"
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "User",
    icon: "nc-icon nc-circle-09",
    component: ListUser,
    layout: "/admin",
  },
  {
    path: "/user/:id",
    name: "Detail User Profile",
    icon: "nc-icon nc-pin-3",
    component: User,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/addProduct",
    name: "Add Product",
    icon: "nc-icon nc-paper-2",
    component: AddProduct,
    layout: "/admin",
  },
  {
    path: "/listOrder",
    name: "List Order",
    icon: "nc-icon nc-paper-2",
    component: ListOrder,
    layout: "/admin",
  },
  {
    path: "/addUser",
    name: "Add User",
    icon: "nc-icon nc-paper-2",
    component: AddUser,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin"
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    path: "/product/:id",
    name: "Details",
    icon: "nc-icon nc-pin-3",
    component: DetailProduct,
    layout: "/admin",
  },

  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;

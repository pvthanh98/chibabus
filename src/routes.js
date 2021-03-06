/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import StorageIcon from '@material-ui/icons/Storage';
import LocationOn from "@material-ui/icons/LocationOn";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Device from "views/Device/Device.js";
import Customer from "views/Customer/Customer.js";
import Documentation from "views/Documentation/Documentation.js";
import Maps from "views/Maps/Maps.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/"
  },
  {
    path: "/device",
    name: "Device",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Device,
    layout: "/"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/"
  },
  {
    path: "/customer",
    name: "Customer",
    rtlName: "خرائط",
    icon: StorageIcon,
    component: Customer,
    layout: "/"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/"
  },  
  {
    path: "/documentation",
    name: "Documentation",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Documentation,
    layout: "/"
  },
  {
    path: "/support",
    name: "Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/"
  }
];

export default dashboardRoutes;

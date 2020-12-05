/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard.jsx";
import UserProfile from "./views/UserProfile.jsx";
import TableList from "./views/TableList.jsx";
import Typography from "./views/Typography.jsx";
import Icons from "./views/Icons.jsx";
import Maps from "./views/Maps.jsx";
import Notifications from "./views/Notifications.jsx";
import teacherView from "./components/member/teacher/view.jsx";
import Upgrade from "./views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/memberSite",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/memberSite"
  },
  {
    path: "",
    name: "Manage Teacher",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/memberSite",
    sub : [
      {
        path: "/table/view1",
        name: "View Teacher",
        icon: "pe-7s-note2",
        component: teacherView,
        layout: "/memberSite",
      },
      {
        path: "/table/edit1",
        name: "Edit Teacher",
        icon: "pe-7s-note2",
        component: TableList,
        layout: "/memberSite",
      },
    ]
  },
  {
    path: "",
    name: "Manage Student",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/memberSite",
    sub : [
      {
        path: "/table/view2",
        name: "View Student",
        icon: "pe-7s-note2",
        component: TableList,
        layout: "/memberSite",
      },
      {
        path: "/table/edit2",
        name: "Edit Student",
        icon: "pe-7s-note2",
        component: TableList,
        layout: "/memberSite",
      },
    ]
  },
  /*
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/memberSite"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/memberSite"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/memberSite"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/memberSite"
  }/*,
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade,
    layout: "/memberSite"
  }*/
];

export default dashboardRoutes;

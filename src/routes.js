import AddUser from "./views/AddUser.js";
import UserProfile from "./views/UserProfile.js";
import TableList from "./views/TableList.js";
import Badges from "./views/Badges.js";
import AllRequests from "./views/AllRequests.js";
import SubmitRequest from "./views/SubmitRequest.js";
import EditProfile from "./views/EditProfile.js";
import LeaderBord from "./views/LeaderBord.js";

export const superAdminRoutes = [
  {
    path: "/user",
    name: "Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/editProfile",
    name: "edit profile",
    icon: "nc-icon nc-circle-09",
    component: EditProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table Of Users",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/badges",
    name: "Badges",
    icon: "nc-icon nc-paper-2",
    component: Badges,
    layout: "/admin",
  },
  {
    path: "/allRequests",
    name: "All Requests",
    icon: "nc-icon nc-atom",
    component: AllRequests,
    layout: "/admin",
  },
  {
    path: "/leaderBord",
    name: "leader Bord",
    icon: "nc-icon nc-bell-55",
    component: LeaderBord,
    layout: "/admin",
  },
  {
    path: "/addUser",
    name: "add user",
    icon: "nc-icon nc-bell-55",
    component: AddUser,
    layout: "/admin",
  },
];

export const adminRoutes  = [
  {
    path: "/user",
    name: "Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/editProfile",
    name: "edit profile",
    icon: "nc-icon nc-circle-09",
    component: EditProfile,
    layout: "/admin",
  },
  {
    path: "/allRequests",
    name: "All Requests",
    icon: "nc-icon nc-atom",
    component: AllRequests,
    layout: "/admin",
  },
  
];

export const userRoutes  = [
  {
    path: "/user",
    name: " Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/editProfile",
    name: "edit profile",
    icon: "nc-icon nc-circle-09",
    component: EditProfile,
    layout: "/admin",
  },
  {
    path: "/request",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: SubmitRequest,
    layout: "/admin",
  },
];



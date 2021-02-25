import {
  Home,
  Box,
  DollarSign,
  Tag,
  Clipboard,
  Camera,
  AlignLeft,
  UserPlus,
  Users,
  Chrome,
  BarChart,
  Settings,
  Archive,
  LogIn,
  User,
} from "react-feather";

const countries = [
  "china",
  "india",
  "thailand",
  "singapore",
  "dubai",
  "hongkong",
  "malaysia",
  "pakistan",
];

export const MENUITEMSFORUSER = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: Home,
    type: "link",
    badgeType: "primary",
    active: false,
  },
  {
    title: "My Profile",
    icon: User,
    type: "link",
    active: false,
    path: "/user/user1-edit-profile",
  },
  {
    title: "My Parcel",
    icon: Box,
    type: "link",
    active: false,
    path: "/user/user1-my-parcel",
  },
  {
    title: "My Bookings",
    icon: Clipboard,
    type: "link",
    active: false,
    path: "/user/user1-my-parcel",
  },
  {
    title: "My Payments",
    icon: DollarSign,
    type: "link",
    active: false,
    path: "/user/user1-my-payments",
  },
  {
    title: "All Delivered",
    icon: BarChart,
    type: "link",
    active: false,
    path: "/user/user1-all-delivered",
  },
  {
    title: "My Refund",
    icon: Box,
    type: "link",
    active: false,
    path: "/user/user1-my-refund",
  },

  {
    title: "My Invoice",
    path: "/user/user1-invoice",
    icon: Archive,
    type: "link",
    active: false,
  },
  {
    title: "Terms & Condition",
    path: "/user/terms-and-condition",
    icon: Chrome,
    type: "link",
    active: false,
  },
  {
    title: "Log Out",
    path: "/",
    icon: LogIn,
    type: "link",
    active: false,
  },
];
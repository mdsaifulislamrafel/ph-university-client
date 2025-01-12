import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/CreateAdmin";
import { NavLink } from "react-router-dom";

type TRoute = {
  path: string;
  element: ReactNode;
};

const adminPaths = [
  {
    name: "dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    Children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

// programmatically way

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.Children) {
    item.Children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);


// programmatically way
type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
}

export const adminSidebarItems = adminPaths.reduce((acc : TSidebarItem[], item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }

  if (item.Children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.Children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }

  return acc;
}, []);


// console.log(JSON.parse(newArray));



// hard cord way

// export const adminPaths = [
//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
// ];

import React from "react";
import NavigationMain from "./NavigationMain/NavigationMain.component";
import Box from "@mui/material/Box";

import MidleMenu from "./MidleMenu/menu.component";
import ButtomMenu from "./ButtomMenu/ButtomMenu.component";
const navList = [
  {
    title: "Головна",
    path: "/",
  },
  {
    title: "Усі продукти",
    path: "/products",
  },
  {
    title: "Про нас",
    path: "/aboutus",
  },
  {
    title: "Акції",
    path: "/disconts",
  },
];
const menuList = [
  {
    title: "Усі товари",
    path: "/products",
    submenu: [
        {
          title: "Стільці",
          path: "/chairs",
        },
      { title: "Столи", path: "/tables" },
      {
        title: "Ліжка",
        path: "/beds",
      }
      ,
      {
        title: "Корпусні меблі",
        path: "/housingfurniture",
      }
    ],
  },
  {
    title: "Столи",
    path: "/tables",
    submenu: [
      { title: "Круглі столи", path: "/table/round" },
      {
        title: "Квадратні столи",
        path: "/table/square",
      },
      {
        title: "Ексклюзивні",
        path: "/table/ekslkuzivni",
      },
      {
        title: "Люкс",
        path: "/table/luxuries",
      },
    ],
  },
  {
    title: "Стільці",
    path: "/chairs",
    submenu: [
      { title: "Круглі Стільці", path: "/chairs/round" },
      {
        title: "Квадратні Стільці",
        path: "/chairs/square",
      },
      {
        title: "Металеві Стільці",
        path: "/chairs/metal",
      },
    ],
  },
  {
    title: "Ліжка",
    path: "/beds",
    submenu: [
      { title: "Ортопедичні", path: "/beds/round" },
      {
        title: "Круглі ліжка",
        path: "/beds/square",
      },
    ],
  },
  {
    title: "Корпусні меблі",
    path: "/housingfurniture",
    submenu: [
      { title: "Ортопедичні", path: "/beds/round" },
      {
        title: "Круглі ліжка",
        path: "/beds/square",
      },
    ],
  }
];
const Header = (props) => {
  return (
    <>
      <Box sx={{ fontFamily: "Open Sans", mx: "auto" }}>
        <NavigationMain navList={navList} />
        <MidleMenu />
        <ButtomMenu menuList={menuList} />
      </Box>
    </>
  );
};
export default Header;

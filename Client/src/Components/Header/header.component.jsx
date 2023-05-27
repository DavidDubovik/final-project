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
    path: "products?categories=tables%2Cchairs%2Cbeds%2Chousingfurniture&maxPrice=50000&minPrice=1&perPage=6&startPage=1",
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
    path: "products?categories=tables&perPage=6&startPage=1",
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
    path: "products?categories=chairs&perPage=6&startPage=1",
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
    path: "products?categories=beds&perPage=6&startPage=1",
    submenu: [
      { title: "Ортопедичні", path: "/beds/round" },
      {
        title: "Круглі ліжка",
        path: "/categories/square",
      },
    ],
  },
  {
    title: "Корпусні меблі",
    path: "products?categories=housingfurniture&perPage=6&startPage=1",
    submenu: [
      { title: "Ортопедичні", path: "/beds/round" },
      {
        title: "Круглі ліжка",
        path: "/categories/square",
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

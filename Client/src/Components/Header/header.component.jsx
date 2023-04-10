import React from "react";
import NavigationMain from "./NavigationMain/NavigationMain.component";
import Box from '@mui/material/Box';

import MidleMenu from "./MidleMenu/menu.component";
import CatMenu from "./CategoryMenu/categoryMenu.component";
import ButtomMenu from "./ButtomMenu/ButtomMenu.component";
const navList =[
    {
        title: "Головна",
        path: "/",
    },
    {
        title: "Партнерам",
        path: "/partners",
    },

    {
        title: "Наші магазини",
        path: "/shops",
    },
    {
        title: "Про нас",
        path: "/aboutus",
    },
    {
        title: "Акції",
        path: "/disconts",
    }
]
const menuList =[
    {
        title: "Столи",
        path: "/table",
        submenu:
            [{"title":"Круглі столи",
            "path" :"/table/round"},{
            "title":"Квадратні столи",
            "path" :"/table/square"
            }]
    },
    {
        title: "Стільці",
        path: "/chairs",
        submenu:
            [{"title":"Круглі Стільці",
            "path" :"/chairs/round"},{
            "title":"Квадратні Стільці",
            "path" :"/chairs/square"
            }]
    },    {
        title: "Лавки",
        path: "/bench",
        submenu:
            [{"title":"Лавки столи",
            "path" :"/bench/round"},{
            "title":"Лавки столи",
            "path" :"/bench/square"
            }]
    },    {
        title: "Корпусні меблі",
        path: "/corpusni",
        submenu:
            [{"title":"Вбудовані",
            "path" :"/corpusni/round"},{
            "title":"Летучі",
            "path" :"/corpusni/square"
            }]
    } ,{
        title: "Ліжка",
        path: "/beds",
        submenu:
            [{"title":"Ортопедичні",
            "path" :"/beds/round"},{
            "title":"Круглі ліжка",
            "path" :"/beds/square"
            }]
    },{
        title: "Аксесуари",
        path: "/acsesuaries",
        submenu:
            [{"title":"Постіль",
            "path" :"/acsesuaries/round"},{
            "title":"Лампи",
            "path" :"/acsesuaries/square"
            }]
    },{
        title: "Вироби з металу",
        path: "/metal",
        submenu:
            [{"title":"Ліжка",
            "path" :"/metal/round"},{
            "title":"Стільці",
            "path" :"/metal/square"
            }]
    }
]
const Header = (props) => {

    return(
        <>
   
            <Box sx={{fontFamily:'Open Sans',mx:'auto'}}>
                <NavigationMain navList={navList}/>
                <MidleMenu/>
                <ButtomMenu menuList={menuList}/>
            </Box>

    </>);
    }
export default Header;

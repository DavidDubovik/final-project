import React from 'react';
import Slider from '../../Components/Slider/slider';
import ImgMediaCard from "../../Components/PopularProducts";
import PopularCategoriesInfo from '../../Components/PopularCategories/PopularCategoriesInfo/PopularCategoriesInfo';


function Home() {

    return (
        <>
            <Slider/>
            <ImgMediaCard />
            <PopularCategoriesInfo />
        </>
    );

}



export default Home;
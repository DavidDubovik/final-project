import React from 'react';
import Slider from '../../Components/Slider/slider';
import { ImgMediaCard } from "../../Components/PopularProducts";
import PopularCategories from '../../Components/PopularCategories/PopularCategories/PopularCategories';


function Home() {

 
    return (
        <>
            <Slider />
            <ImgMediaCard />
            <PopularCategories />
        </>
    );

}



export default Home;
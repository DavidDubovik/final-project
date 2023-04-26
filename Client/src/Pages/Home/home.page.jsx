import React from 'react';
import Slider from '../../Components/Slider/slider';
import ImgMediaCard from "../../Components/PopularProducts";
import PopularCategories from '../../Components/PopularCategories/PopularCategories/PopularCategories';
import Chairs from '../../Components/Chairs/Chairs/Chairs';


function Home() {

    return (
        <>
            <Slider/>
            <ImgMediaCard />
            <PopularCategories />
            <hr />

            <Chairs />

            <hr />

           
        </>
    );

}



export default Home;
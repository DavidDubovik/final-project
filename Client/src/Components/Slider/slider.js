import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Box from '@mui/material/Box';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.scss";

const Style = {
  slideBlock: {
    display: 'flex',
    width: '100%',
    maxWidth: 1000,
    alignItems: 'center',
    justifyContent: 'right',
    margin: '38px auto',
    overflow: 'hidden',
  },

  slideContent: {
    position: 'absolute',
    margin: '0 16px auto',
    maxHeight: 300,
  },

  mainText: { 
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 'calc(54px + 4 * (100vw - 5000px) / 880)',
    color: '#2E3438',
    marginBottom: 22,
  },

  mainText_2: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 'calc(54px + 4 * (100vw - 5000px) / 880)',
    color: '#fff',
    marginBottom: 22,
  },

  mainText_3: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 'calc(52px + 4 * (100vw - 5000px) / 880)',
    color: '#2E3438',
    marginBottom: 22,
  },

  mainText_4: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 'calc(54px + 4 * (100vw - 6000px) / 880)',
    color: '#fff',
    marginBottom: 5,
  },

  mainText_5: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 'calc(44px + 4 * (100vw - 5000px) / 880)',
    color: '#fff',
    marginBottom: 5,
  },

  textDesc: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 'calc(44px + 4 * (100vw - 5000px) / 880)',
    color: '#E03737',
  },

  text: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 'calc(44px + 4 * (100vw - 5000px) / 880)',
    color: '#2E3438',
    whiteSpace: 'nowrap',
    marginBottom: '7%',
  },

  text_5: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 'calc(44px + 4 * (100vw - 5000px) / 880)',
    color: '#fff',
    whiteSpace: 'nowrap',
    marginBottom: '7%',
  },

  persent: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 'calc(44px + 4 * (100vw - 5000px) / 880)',
    color: '#E03737',
  },

  textSlide_1: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 'calc(44px + 4 * (100vw - 5000px) / 880)',
    color: '#2E3438',
    whiteSpace: 'nowrap',
    marginBottom: '7%',
  },

  textSlide_2: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 'calc(44px + 4 * (100vw - 5000px) / 880)',
    marginBottom: '7%',
    color: '#FFC740',
  },

  textSlide_3: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 'calc(44px + 4 * (100vw - 5000px) / 880)',
    marginBottom: '7%',
    color: '#E03737',
  },

  textSlide_4: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 'calc(44px + 4 * (100vw - 5000px) / 880)',
    marginBottom: '7%',
    color: '#E03737',
  },

  textSlide_5: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 'calc(44px + 4 * (100vw - 5000px) / 880)',
    marginBottom: '7%',
    color: '#E03737',
  }
}

export default function Slider() {
  return (
    <Box sx={{fontFamily:'Open Sans',mx:'auto',maxWidth: 'lg'}}>
    <div>
      <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
           delay: 2500,
           disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          pagination: true
        }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">

        <SwiperSlide>
          <div style={Style.slideBlock}>
            <div style={Style.slideContent}>
              <h1 style={Style.mainText}>Відчуй себе <br /> аристократом!</h1>
              <p style={Style.textDesc}>Знижка до <span style={Style.persent}>25%</span></p>
              <p style={Style.textSlide_1}>на усі дубові крісла</p>
              <Link to="#"><button className='btnMore'>Детальніше</button></Link>
            </div>
            <img src="https://res.cloudinary.com/do1ybce55/image/upload/v1681387746/SliderImg/Banner-1_1_ddlxrr.png" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={Style.slideBlock}>
            <div style={Style.slideContent}>
              <h1 style={Style.mainText_2}>Надійне ліжко <br />  – міцний сон!</h1>
              <p style={Style.textSlide_2}>Супер акція на усі <br /> ліжка з масиву дуба</p>
              <Link to="#"><button className='btnMore'>Детальніше</button></Link>
            </div>
            <img src="https://res.cloudinary.com/do1ybce55/image/upload/v1681388010/SliderImg/Banner-2_3_jwq11u.png" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={Style.slideBlock}>
            <div style={Style.slideContent}>
              <h1 style={Style.mainText_3}>Комфортний диван <br /> - гарний відпочинок!</h1>
              <p style={Style.textSlide_3}>Супер знижка до <span style={Style.persent}>55%</span> <br /> <span style={Style.text}>на усі дивани</span></p>
              <Link to="#"><button className='btnMore_3'>Детальніше</button></Link>
            </div>
            <img src="https://res.cloudinary.com/do1ybce55/image/upload/v1681475491/SliderImg/1665417813_42-amiel-club-p-divan-na-fone-beloi-steni-instagram-49_wunsts_klhalq.png" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={Style.slideBlock}>
            <div style={Style.slideContent}>
              <h1 style={Style.mainText_4}>Сучасне крісло <br /> - розслаблюючий <br /> простір</h1>
              <p style={Style.textSlide_4}>Знижка до <span style={Style.persent}>15%</span> <br /> <span style={Style.text}>на всі крісла</span></p>
              <Link to="#"><button className='btnMore_4'>Детальніше</button></Link>
            </div>
            <img src="https://res.cloudinary.com/do1ybce55/image/upload/v1681475812/SliderImg/1665417756_53-amiel-club-p-divan-na-fone-beloi-steni-instagram-61_izxsi8_zj6gbx.png" alt="" />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div style={Style.slideBlock}>
            <div style={Style.slideContent}>
              <h1 style={Style.mainText_5}>Розкішний диван <br /> – затишок в кімнаті <br /> та простор</h1>
              <p style={Style.textSlide_5}>Неймовірна знижка до <span style={Style.persent}>85%</span> <br /> <span style={Style.text_5}>на всі дивани</span></p>
              <Link to="#"><button className='btnMore_4'>Детальніше</button></Link>
            </div>
            <img src="https://res.cloudinary.com/do1ybce55/image/upload/v1681476050/SliderImg/002-1903x536_u5urxu_lr9idx.png" alt="" />
          </div>
        </SwiperSlide>

      </Swiper>
      </>
    </div></Box>
  )
}

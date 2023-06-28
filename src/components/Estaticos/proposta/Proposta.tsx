import {Grid} from "@mui/material";
import "./Proposta.css"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {  Autoplay,Pagination, Navigation, HashNavigation } from "swiper";

function Proposta(){
  return (
    <>
      <Grid 
      className="espaso">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation , HashNavigation]}
          className="mySwiper"
        >
          <SwiperSlide data-hash="slide1"><img src="https://sea.com.uy/wp-content/uploads/2020/01/pancs.jpg" alt="" /></SwiperSlide>
          <SwiperSlide data-hash="slide2"><img src="https://phitoss.com.br/wp-content/uploads/2020/10/01-pancs.jpg" alt="" /></SwiperSlide>

          <SwiperSlide data-hash="slide3"><img src="https://phitoss.com.br/wp-content/uploads/2020/10/02-pancs.jpg" alt="" /></SwiperSlide>

          <SwiperSlide data-hash="slide4"><img src="https://phitoss.com.br/wp-content/uploads/2020/10/04-pancs.jpg" alt="" /></SwiperSlide>

          <SwiperSlide data-hash="slide5"><img src="https://phitoss.com.br/wp-content/uploads/2020/10/07-pancs.jpg" alt="" /></SwiperSlide>

        </Swiper>
      </Grid>
    </>
  );
}
export default Proposta;
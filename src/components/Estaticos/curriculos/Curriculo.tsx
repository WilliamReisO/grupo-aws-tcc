import { Box, Button, Grid} from "@mui/material";
import "./curriculo.css"

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

 function Curriculo() {
  return (
    <>
      <Grid className="fundo">
            <Box className="rectangle-2">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/src/assets/Curriculo Thiago_page-0001.jpg" alt="thiago" /><a href="/src/assets/Curriculo Thiago_page-0001.jpg"
        download="Curriculo thiago">
        <Button>Baixar</Button></a></SwiperSlide>

        <SwiperSlide><img src="/src/assets/Currículo Vitor Santos_page-0001.jpg" alt="vitor" /><a href="/src/assets/Currículo Vitor Santos_page-0001.jpg" download="Curriculo Vitor">
        <Button>Baixar</Button></a>
        </SwiperSlide>
        <SwiperSlide><img src="/src/assets/Currículo Wládia Patrícia_page-0001.jpg" alt="patricia" width={100} /> <a href="/src/assets/Currículo Wládia Patrícia_page-0001.jpg" download="Currículo Wládia "><Button>Baixar</Button></a>
        </SwiperSlide>
        <SwiperSlide>Ainda não fiz o meu </SwiperSlide>
      </Swiper>
      </Box>
      </Grid>

    </>
  );
}
export default Curriculo;
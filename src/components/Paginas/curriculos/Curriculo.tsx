import { Box, Grid, Typography } from '@mui/material';
import "./Curriculo.css"

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


 function Curriculo() {
  return (
    <>
    <Grid className="fundocv">
      <Box className="tituloc">Currículos</Box>
      <Grid>
       
      <Grid className="rectangle-22">
      <Swiper
        className="mySwiper swiper1"
      >
        <SwiperSlide ><a href="https://drive.google.com/file/d/1ugB8ers6lKMJO07QYhWGijGWZAMmYiVt/view?usp=sharing"
        target="_blank" rel="noopener noreferrer"><img src="img/Curriculo Thiago_page-0001.jpg"/></a>
        </SwiperSlide>

        <SwiperSlide ><a href="https://drive.google.com/file/d/1mb8WETAf4yg9VjZtKYNz4yblBBF9RlRO/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img src="img/Currículo Vitor Santos_page-0001.jpg" alt="vitor" /></a>
        </SwiperSlide>
        <SwiperSlide ><a href="https://drive.google.com/file/d/1EfH4dod9gKqDPoWy4DsfIAwCYFKD84pL/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img src="img/Currículo Wládia Patrícia_page-0001.jpg" alt="patricia"/></a>
        </SwiperSlide>
        <SwiperSlide ><a href="https://drive.google.com/file/d/1RVyhR5gf0tCdkfk7e0UIMBB0Q4Nmh6Qe/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img src="img/Curriculo William.png" alt="William"/></a>
        </SwiperSlide>
        <SwiperSlide >Curriculo Vitor </SwiperSlide>
        <SwiperSlide ><a href="https://drive.google.com/file/d/1-fBVXwcjuu2DZpIvlQ55K2R53sLCIdVy/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img src="img/Modelo-de-Currriculo.pdf.png" alt="patricia" width={150}/></a>
        </SwiperSlide>
     </Swiper>
      </Grid>
      <Box className="indica"><Typography className='txt'>
        Click Sobre o Curriculo melhor visualização 
        </Typography></Box>
      </Grid>
     </Grid>
    </>
  );
}
export default Curriculo;
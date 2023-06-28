import React from "react";
import './Contato.css'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Swiper } from 'swiper/react';

import {SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

function Contatos(){
    return(
        <>

    <Grid className='Lista'>
    
      <Grid className="modal" xs={12}>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Grid className="card">
            <Box>
                <img src="https://avatars.githubusercontent.com/u/123428616?v=4" alt="Link para o github do William" className='criador1' />
                <h3> William Reis </h3>
                 <p className="title">Participante
                 </p>
                
                    <div className='redesC'> 
                    <a href="https://github.com/WilliamReisO" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/William-Reis-O/"><i className="fa fa-linkedin"></i></a>
                    </div> 
            </Box>
        </Grid>
        </SwiperSlide>
        <SwiperSlide>
        <Grid className="card">
            <Box>
                <img src="/src/assets/114ee253-ab14-46e8-bb12-238f3ac6857a.jpg" alt="Foto vitor"  className='criador1' />
                <h3> Vitor Santos </h3>
                 <p className="title">Participante</p>
                    <div className='redesC'> 
                    <a href="https://www.linkedin.com/in/vitor-santos235/"><i className="fa fa-linkedin"></i></a>
                    <a href="sr.santos235@gmail.com"><i className="fa fa-gmail"></i></a>
                    </div> 
            </Box>
        </Grid>
        </SwiperSlide> 
        <SwiperSlide>   
        <Grid className="card">
            <Box>
            <img src="/src/assets/351454242_228266949980491_1800561240974425244_n.jpg " className='criador1' />
                <h3> Patricia </h3>
                 <p className="title">Participante</p>
                    <div className='redesC'> 
                    <a href="https://www.linkedin.com/in/cavalcantepatricia"><i className="fa fa-linkedin"></i></a>
                    <a href="cavalcantepatricia31@gmail.com"><i className="fa fa-gmail"></i></a>
                    </div> 
            </Box>
        </Grid>
        </SwiperSlide>
        <SwiperSlide>
        <Grid className="card">
            <Box>
            <img src="/src/assets/978d9ed6-1f43-4214-977b-da64d802b7b2.jpg" alt="foto do thiago" className='criador1' />
                    <h3> Thiago </h3>
                 <p className="title">Participante</p>
                    <div className='redesC'> 
                    <a href="https://www.linkedin.com/in/thiago-augusto-6b5b90218/"><i className="fa fa-linkedin"></i></a>
                    <a href="https://www.cavalcantepatricia31@gmail.com"><i className="fa fa-gmail"></i></a>
                    </div> 
            </Box>
        </Grid>
        </SwiperSlide>  
        </Swiper>      
    </Grid>
    </Grid>
        </>
    )
}
export default Contatos;
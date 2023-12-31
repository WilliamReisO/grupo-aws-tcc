
import './Contato.css'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { } from 'swiper/react';
import {SwiperSlide , Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
function Contatos(){
    return(
        < >
<Grid className="fundo">
    <Grid className='Lista'>
    
      <Grid className="modal" xs={12}><link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
            />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <Swiper
        slidesPerView={3}
        spaceBetween={1}
        className="mySwiper"
      >
        <SwiperSlide>
            <Grid className="card">
            <Box>
                <img src="https://media.licdn.com/dms/image/D4D03AQFkqxPaZLJ27A/profile-displayphoto-shrink_800_800/0/1687462662427?e=1693440000&v=beta&t=G51V9m_LM6w8EStVKpzsPMO899Pw2YXHwdvHF_pNbmc" alt="foto william" className='criador1' />
                <h4> William Reis </h4>
                 <p className="title">Desenvolvedor FullStack
                 </p>
                
                    <div className='redesC'> 
                    <a href="https://github.com/WilliamReisO" target="_blank" rel="noopener noreferrer"><i className="fa fa-github tamanho " ></i></a>
                    <a href="https://www.linkedin.com/in/William-Reis-O/"target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin tamanho"></i></a>
                    <a href="https://drive.google.com/file/d/1RVyhR5gf0tCdkfk7e0UIMBB0Q4Nmh6Qe/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-inbox 
                    tamanho"></i></a>
                    </div> 
            </Box>
        </Grid>
        </SwiperSlide>
        <SwiperSlide>
        <Grid className="card">
            <Box>
                <img src="img/foto-Vitor.jpg" alt="Foto vitor"  className='criador1' />
                <h4> Vitor Santos </h4>
                 <p className="title">Analista de suporte de TI</p>
                    <div className='redesC'> 
                    <a href="https://www.linkedin.com/in/vitor-santos235/"target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin tamanho"></i></a>
                    <a href="https://drive.google.com/file/d/1mb8WETAf4yg9VjZtKYNz4yblBBF9RlRO/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-inbox 
                    tamanho"></i></a>
                    </div> 
            </Box>
        </Grid>
        </SwiperSlide> 
        <SwiperSlide>
        <Grid className="card">
            <Box>
            <img src="img/foto-thiago.jpg" className='criador1' />
                    <h3> Thiago </h3>
                 <p className="title">
Assistente administrativo</p>
                    <div className='redesC'> 
                    <a href="https://www.linkedin.com/in/thiago-augusto-6b5b90218/"target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin 
                    tamanho"></i></a>
                    <a href="https://drive.google.com/file/d/1ugB8ers6lKMJO07QYhWGijGWZAMmYiVt/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-inbox 
                    tamanho"></i></a>
                    </div> 
            </Box>
        </Grid>
        </SwiperSlide>  
        <SwiperSlide>   
        <Grid className="card">
            <Box>
            <img src="img/foto-patricia.jpg" className='criador1' />
                <h4> Patricia Cavalcante </h4>
                 <p className="title">Estudante de tecnologia</p>
                    <div className='redesC'> 
                    <a href="https://www.linkedin.com/in/cavalcantepatricia"target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin tamanho"></i></a>
                    <a href="https://drive.google.com/file/d/1EfH4dod9gKqDPoWy4DsfIAwCYFKD84pL/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-inbox 
                    tamanho"></i></a>
                    </div> 
            </Box>
        </Grid>
        </SwiperSlide>
        <SwiperSlide>
        <Grid className="card">
            <Box>
            <img src="img/1687986027318.jpg" className='criador1' />
                    <h3> Vitor Lucio </h3>
                 <p className="title">
Assistente administrativo</p>
                    <div className='redesC'> 
                    <a href="https://www.linkedin.com/in/vitorlucio98/"target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin 
                    tamanho"></i></a>
                    <a href="https://drive.google.com/file/d/1AprsxF_paxNEd-S4jn-R8ITMqjtgo8pf/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-inbox 
                    tamanho"></i></a>
                    </div> 
            </Box>
        </Grid>
        </SwiperSlide>  
        </Swiper>      
    </Grid>
    </Grid>
</Grid>
        </>
    )
}
export default Contatos;
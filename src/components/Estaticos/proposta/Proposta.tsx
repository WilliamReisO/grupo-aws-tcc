import { Box, Grid} from "@mui/material";
import "./Proposta.css"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper";

function Proposta(){
    return(
        <>

        <Grid className="fundo">
            <Box className="rectangle-2">
            <Swiper
        spaceBetween={0}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide1"><img src="https://source.unsplash.com/random/600x600/?cat" alt="noite img"/></SwiperSlide>
        <SwiperSlide data-hash="slide2"><img src="https://source.unsplash.com/random/600x600/?dog" alt="noite img"/></SwiperSlide>
        <SwiperSlide data-hash="slide3"><img src="https://source.unsplash.com/random/600x600/?night" alt="noite img"/></SwiperSlide>
      </Swiper>
      </Box>
      </Grid>
            
        </>
    )
}
export default Proposta;
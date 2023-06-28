import { Box, Grid } from "@mui/material";
import Contatos from "../contatos/Contato";
import './Home.css'


function Inicial() {
   
   return (
    <>
      <Grid>
         
            <Box className="participantes">
               Nossos participantes</Box>
            <Grid xs={12} className='geral'>
               <Contatos />
            </Grid>
         </Grid>
      </>
   )
}
export default Inicial;
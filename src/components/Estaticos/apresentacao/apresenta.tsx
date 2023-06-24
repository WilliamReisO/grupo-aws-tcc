import Typography from '@mui/material/Typography';
import './apresenta.css'
import { Box, Grid } from '@mui/material';

function Apresenta (){
    return(
        <>
        <Grid className='fundo'>
        <Box className='rectangle-2'>
            <Typography className='modal' >
            Texto de Apresetação
            </Typography>
        </Box>
        </Grid>
        </>
    )
}
export default Apresenta;
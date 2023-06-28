import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "/src/assets/nuvem.png"
import './Navbar.css'

function NavBar() {
    return (
        <>
    <AppBar >
        <Toolbar >

        <Grid container className='nav-estrutura'>
        <img src={logo} alt="icon do site" className="img"/>
            <Box>
                <Typography variant="h4" className="nome">
                     AWS Grupo 7 
                </Typography>
            </Box>
            <Box className='menu-nav' >
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        <Link to="/inicial" >
                            <Button variant='outlined' className='outlinedButton'> 
                            Inicio </Button>
                        </Link>
                        </Typography>
                </Box>
                <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                    <Link to="/contatos">
                    <Button variant='outlined' className='outlinedButton'>
                        Equipe
                    </Button>
                    </Link>
                </Typography>
                    </Box>
                    <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit" marginRight={1}>
                            <Link to="/Curriculo">
                                <Button variant='outlined' className='outlinedButton'>
                                    Curriculos
                                </Button>
                            </Link>
                    </Typography>
                    </Box>
                </Box>
            </Grid>
        </Toolbar>
    </AppBar>
        </>
    )
}
export default NavBar;
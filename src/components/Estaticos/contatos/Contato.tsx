import React from "react";
import './Contato.css'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Contatos(){
    return(
        <>

    <Grid className='Lista'>
        
      <Grid className="modal">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <Grid className="card">
            <Box>
                <img src="https://avatars.githubusercontent.com/u/123428616?v=4" alt="Link para o github do William" className='criador1' />
                <h3> William Reis </h3>
                 <p className="title">#########
                 </p>
                    <div className='redesC'> 
                    <a href="https://github.com/WilliamReisO" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/William-Reis-O/"><i className="fa fa-linkedin"></i></a>
                    </div> 
            </Box>
        </Grid>
        <Grid className="card">
            <Box>
                <img src="https://pps.whatsapp.net/v/t61.24694-24/315258702_1354074408465156_5248196556987699906_n.jpg?ccb=11-4&oh=01_AdQYwAmdDuMNcGy67XLW6EJCUCDjgsOpv2hHIRAfkX-FiQ&oe=64A2E0CA" alt="Link para o github do Giovanni"  className='criador1' />
                <h3> Vitor Santos </h3>
                 <p className="title">#########</p>
                    <div className='redesC'> 
                    <a href="https://www.linkedin.com/in/giovanni-santos-5395551b7/"><i className="fa fa-linkedin"></i></a>
                    </div> 
            </Box>
        </Grid>
            
        <Grid className="card">
            <Box>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/351454242_228266949980491_1800561240974425244_n.jpg?ccb=11-4&oh=01_AdS0_ps91b8YPbZUuIiJdmkOXIdUSyl7onWbk_8pVaXCrQ&oe=64A0868E" alt="foto integrante " className='criador1' />
                <h3> Patricia </h3>
                 <p className="title">#########</p>
                    <div className='redesC'> 
                    <a href="https://www.linkedin.com/in/yasmin-saparolli/"><i className="fa fa-linkedin"></i></a>
                    </div> 
            </Box>
        </Grid>

        <Grid className="card">
            <Box>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/316459987_590432713018347_549731557060243477_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQJe5mVyEw32MY6-nl1NjBWIkgzBKAhYvrSreqqnCVqeQ&oe=64A37D06" alt="Link para o github da Mariane" className='criador1' />
                    <h3> Thiago </h3>
                 <p className="title">#########</p>
                    <div className='redesC'> 
                    <a href="https://www.linkedin.com/in/mariane-anjos-896479173/"><i className="fa fa-linkedin"></i></a>
                    </div> 
            </Box>
        </Grid>        
    </Grid>
    </Grid>
        </>
    )
}
export default Contatos;
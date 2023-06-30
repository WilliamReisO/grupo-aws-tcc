import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Contatos from './components/Paginas/contatos/Contato';
import Curriculo from './components/Paginas/curriculos/Curriculo';
import { Grid, Typography } from '@mui/material';
import NavBar from './components/Estaticos/navbar/Navbar';




function App() {

  return (
    <>
      <Grid className='Fundo'>
        <Router >
          <NavBar/>
          <div style={{ minHeight: '100vh' }}>
            <Routes>
              <Route path="/contatos" element=
                {<Contatos />} />
              <Route path="/" element=
                {<Contatos />} />
              <Route path="/curriculo" element=
                {<Curriculo />} />
            </Routes>
          </div>
        </Router>
        <Grid className='footer'>
          <Typography id='assina'>
            William Reis 
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default App;

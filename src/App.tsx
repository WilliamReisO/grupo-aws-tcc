import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Contatos from './components/Estaticos/contatos/Contato';
import Proposta from './components/Estaticos/proposta/Proposta';
import Curriculo from './components/Estaticos/curriculos/Curriculo';

import Inicial from './components/home/Home';
import { Grid } from '@mui/material';




function App() {

  return (
    <>
    <Grid className='Fundo'>
      <Router >
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/contatos" element=
              {<Contatos />} />
            <Route path="/inicial" element=
              {<Inicial />} />
            <Route path="/" element=
              {<Inicial />} />
            <Route path="/proposta" element=
              {<Proposta />} />
            <Route path="/curriculo" element=
              {<Curriculo />} />
          </Routes>
        </div>
      </Router>
</Grid>
    </>
  )
}

export default App;

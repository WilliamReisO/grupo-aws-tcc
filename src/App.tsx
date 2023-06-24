import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Contatos from './components/Estaticos/contatos/Contato';
import Proposta from './components/Estaticos/proposta/Proposta';
import DrawerAppBar from './components/home/Home';
import Curriculo from './components/Estaticos/curriculos/Curriculo';


function App() {

  return (
    <>

      <Router >
        <DrawerAppBar/>
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element=
              {<Proposta />} />

            <Route path="/contatos" element=
              {<Contatos />} />

            <Route path="/proposta" element=
              {<Proposta />} />

            <Route path="/Curriculos" element=
              {<Curriculo />} />

          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App;

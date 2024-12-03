// Importacao CSS
import './App.css';

//Importacao de Paginas
import Home from './pages/Home';

//Importacao do gerenciador de rotas
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return (
   <div className='App'>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />}/>
        
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;

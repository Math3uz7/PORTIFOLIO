import './App.css';
import Header from "./components/Header/header.jsx"
import Sobre from "./components/Sobre/sobre.jsx"
import Habilidades from "./components/Habilidades/habilidades.jsx"
import Formacao from "./components/Formacao/fomacao.jsx"
import Redes from "./components/Redes/redes.jsx"

function App() {
  return (
    <div>
     <Header/>
     <Sobre/>
     <Habilidades/>
     <Formacao/>
     <Redes/>
    </div>
  );
}

export default App;

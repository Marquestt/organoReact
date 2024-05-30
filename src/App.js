import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario';

function App() {
  const [membros, setMembros] = useState([]);
  const aoNovoMembroAdicionado = (membro) => {
    console.log(membro);
    setMembros([...membros, membro]);
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario aoMembroCadastrado={membro => aoNovoMembroAdicionado(membro)}/>
    </div>
  );
}

export default App;

import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario';
import Equipe from './componentes/Equipe';
import Rodape from './componentes/Rodape';

function App() {
  const equipes = [
    {
      nome: 'Overwatch',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'League of Legends',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Fortnite',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Rocket League',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
  ];
  const [membros, setMembros] = useState([]);
  const aoNovoMembroAdicionado = (membro) => {
    // debugger: serve para depurar o código linha a linha
    setMembros([...membros, membro]);
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario equipes={equipes.map(equipe => equipe.nome)} aoMembroCadastrado={membro => aoNovoMembroAdicionado(membro)}/>
      {equipes.map(equipe => <Equipe key={equipe.nome} nome={equipe.nome} corPrimaria={equipe.corPrimaria} corSecundaria={equipe.corSecundaria} membros={membros.filter(membro => membro.equipe === equipe.nome)}/>)}
      <Rodape/>
    </div>
  );
}

export default App;

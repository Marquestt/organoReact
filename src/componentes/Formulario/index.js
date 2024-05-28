import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {
    const equipes = [
        'Overwatch',
        'League of Legends',
        'Fortnite',
        'Rocket League'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form foi submetido!');
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do membro da equipe</h2>
                <CampoTexto obrigatorio={true} label="Nickname" placeholder="Digite o seu nickname"/>
                <CampoTexto obrigatorio={true} label="Função" placeholder="Digite a função"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Equipe" itens={equipes}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;
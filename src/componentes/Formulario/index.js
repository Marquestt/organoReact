import { useState } from 'react'
import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = (props) => {
    const [nickname, setNickname] = useState('');
    const [funcao, setFuncao] = useState('');
    const [imagem, setImagem] = useState('');
    const [equipe, setEquipe] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoMembroCadastrado({nickname, funcao, imagem, equipe});
        setNickname('');
        setFuncao('');
        setImagem('');
        setEquipe('');
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do membro da equipe</h2>
                <CampoTexto valor={nickname} aoAlterado={valor => setNickname(valor)} obrigatorio={true} label="Nickname" placeholder="Digite o seu nickname"/>
                <CampoTexto valor={funcao} aoAlterado={valor => setFuncao(valor)} obrigatorio={true} label="Função" placeholder="Digite a função"/>
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa valor={equipe} aoAlterado={valor => setEquipe(valor)} obrigatorio={true} label="Equipe" itens={props.equipes}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;
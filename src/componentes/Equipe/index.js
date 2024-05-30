import Membro from '../Membro';
import './Equipe.css';

const Equipe = (props) => {
    //pode usar ambos para estilizar
    //pode usar && no lugar de ? e remover a linha após o fechamento da section, o código funcionará do mesmo modo
    const borda = {borderColor: props.corPrimaria}
    return (
        (props.membros.length> 0) ? <section className='equipe' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={borda}>{props.nome}</h3>
            <div className='membros'>
                {props.membros.map(membro => <Membro corDeFundo={props.corPrimaria} key={membro.nickname} nickname={membro.nickname} funcao={membro.funcao} imagem={membro.imagem}/>)}
            </div>
            
        </section>
        : ''
    )
}

export default Equipe;
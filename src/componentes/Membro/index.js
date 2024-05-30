import './Membro.css';

const Membro = ({nickname, funcao, imagem, corDeFundo}) => {
    return (
        <div className='membro'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nickname}/>
            </div>
            <div className='rodape'>
                <h4>{nickname}</h4>
                <h5>{funcao}</h5>
            </div>
        </div>
    )
}

export default Membro;
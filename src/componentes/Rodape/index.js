import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/AluraCursosOnline/?locale=pt_BR'><img src='/imagens/fb.png' alt='Facebook'/></a>
                    </li>
                    <li>
                        <a href='https://x.com/AluraOnline?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><img src='/imagens/tw.png' alt='Twitter'/></a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/aluraonline/'><img src='/imagens/ig.png' alt='Instagram'/></a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='Logo Organo'/>
            </section>
            <section>
                <p>Desenvolvido por Alura & Thatyane Marques.</p>
            </section>
        </footer>
    )
}

export default Rodape;
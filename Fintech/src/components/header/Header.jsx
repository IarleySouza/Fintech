import '../Styles/Header.css'

function Header() {
    return(
        <header>
            <div>
                <img src="assets/images/logo.svg" alt="" />
            </div>
            <nav>
                <ul>
                    <li>Produtos</li>
                    <li>Cartões</li>
                    <li>Emprestimos</li>
                </ul>
            </nav>
            <div className='button'>
                <div>Clique aqui</div>
            </div>
        </header>
    )
}
export default Header
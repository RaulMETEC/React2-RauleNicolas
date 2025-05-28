import { Link } from 'react-router-dom'
import styles from './Header.module.css'
function Header() {
    return (
        <header className={styles.header}>
            <span> Raul Galdino e Nicolas Domingues </span><nav>
                <Link to="/React2-RauleNicolas">Home</Link>
                <Link to="/contatos">Contato</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>

            </nav>
        </header>
    )
}
export default Header

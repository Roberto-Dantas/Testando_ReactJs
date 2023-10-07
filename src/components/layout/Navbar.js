import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
function Navbar(){
    return (
        <div className={styles.divNavbar}>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/"><p>Home</p></Link></li>
                <li className={styles.item}><Link to="/empresa"><p>Empresa</p></Link></li>
                <li className={styles.item}><Link to="/contato"><p>Contato</p></Link></li>
            </ul>
        </div>
    )
}

export default Navbar
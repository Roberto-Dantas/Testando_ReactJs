import {FaFacebook, FaInstagram} from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer(){
    return (
    <footer>
        <FaFacebook className={styles.icon}/>
        <FaInstagram className={styles.icon}/>
        <p>Direitos autorais: <b>Roberto Dantas</b></p>
        <p>2023</p>
    </footer>
    )
}

export default Footer
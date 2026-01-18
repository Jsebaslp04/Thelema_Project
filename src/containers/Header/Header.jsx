import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './Header.module.css'
import IconSocial from '../../components/Iconsocial/IconSocial'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import Whatsapp from '../../assets/whatsapp.png'
import Estrella from '../../assets/estrella.png'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.menu}>
            <div className={styles.icon}>
                <Link to='/Inicio'>
                    <img src={Estrella} alt="Logo Estrella" className={styles.logo} />
                </Link>
            </div>

            <div className={styles.hamburger} onClick={toggleMenu}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>

            <div className={`${styles.menuLinks} ${isOpen ? styles.open : ''}`}>
                <Link to='/Quienes_somos' onClick={toggleMenu}>¿Quienes somos?</Link>
                <Link to='/Nuestros_servicios' onClick={toggleMenu}>Nuestros servicios</Link>
                <Link to='/Publicaciones' onClick={toggleMenu}>Publicaciones</Link>
                <Link to='/Talleres' onClick={toggleMenu}>Talleres</Link>
                <Link to='/Contacto' onClick={toggleMenu}>Contacto</Link>
            </div>
            <div className={styles.header_IconSocial}>
                <IconSocial icon="Whatsapp" image={Whatsapp} url='https://www.instagram.com/gnosisdethelema/' />
                <IconSocial icon="Instagram" image={Instagram} url='https://www.instagram.com/gnosisdethelema/' />
                <IconSocial icon="Facebook" image={Facebook} url='https://www.facebook.com/gnosis.de.thelema' />
            </div>
        </nav>
    )
}

export default Header; 
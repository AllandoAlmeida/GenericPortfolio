import gitHub from '../../../assets/github-icon.png'
import whatsApp from '../../../assets/whatsapp-icon.png'
import linkedin from '../../../assets/linkedin-icon.png'
import { user } from '../../../data/user.js'
import styles from './styles.module.css'

export const Footer = () => {
    return (
        <section className={styles.container}>
            <ul className={styles.contactSection}>
                <li className="title2">Contato</li>
                <li className={styles.icon}>
                    <img src={whatsApp} alt="whatsApp" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={gitHub} alt="GitHub" />
                </li>
            </ul>
            <ul className={styles.reservationOfRights}>
                <li className="direitosReservados">todos os direitos reservados - {user}</li>
            </ul>
        </section>
    )
}



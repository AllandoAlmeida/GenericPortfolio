
import { username } from "../../../data/user"
import { Banner } from "../../../fragments/Banner"
import styles from './styles.module.css'
import buttons from '../../../Styles/buttons.module.css'


export const WelcomeSection = () => {
    return (
        <section className={styles.container}>
            <ul className={styles.sectionWelcomeTitle}>
                <li className={styles.userName} >{username}</li>
                <li className="title1_2 convite">
                    Bem vindo ao meu portfólio
                </li>
                <li className="paragrafh">Uma frase interessante sobre mim</li>
                <button className={buttons.label}>Saiba mais</button>
            </ul>
            <li>
                <Banner />
            </li>

        </section>
    )
}
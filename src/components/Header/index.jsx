import styles from './styles.module.css'
import buttons from '../../Styles/buttons.module.css'
import portfolio from '../../assets/portfolio.png'

export const Header = () => {
    return (
        <header className={styles.container}>
                <nav className={styles.navegationMenu}>
                    <ul className={styles.logo}>
                        <li>
                            <img src={portfolio} alt="logo portólio" />
                        </li>
                    </ul>
                    <ul className={styles.items}>
                        <li>
                            <button className={buttons.linkNav}>Sobre</button>
                        </li>
                        <li>
                            <button className={buttons.linkNav}>Stack</button>
                        </li>
                        <li>
                            <button className={buttons.linkNav}>Projetos</button>
                        </li>
                    </ul>
                    <ul >
                        <li>
                            <button type="submit" className={buttons.BtnContact}>Contato</button>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}
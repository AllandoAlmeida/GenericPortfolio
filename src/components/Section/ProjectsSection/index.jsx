import styles from './styles.module.css'
import gitHub from '../../../assets/github-icon.png'

export const ProjectCard = ({ project }) => {
    return (

        <div id={styles.card} className={styles.Title}>
            <div className={styles.projectCardTitle}>
                <h1 className="title3">{project.name}</h1>
                <img src={gitHub} alt="logo do GitHub" />
            </div>
            <p className="paragrafh">{project.descricao}</p>
            <a href="#" className={styles.link}>Saiba mais</a>
        </div>


    );
};
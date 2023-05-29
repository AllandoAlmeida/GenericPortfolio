import styles from './styles.module.css'
import gitHub from '../../../assets/git-icon.png'

export const ProjectCard = ({ project }) => {
    return (
        <ul id={styles.card} >
            <li className={styles.container}>
                <h1 className="title3">{project.name}</h1>
                <img src={gitHub} alt="logo do GitHub" id={styles.IconGitHub} />
            </li>
            <li className={styles.paragrafh}>{project.description}
            <a href={project.html_url} className={styles.link} target='_blank'>Saiba mais</a>
            </li>
        </ul>
    );
};
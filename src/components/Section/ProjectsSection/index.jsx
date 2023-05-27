import styles from './styles.module.css'
import gitHub from '../../../assets/git-icon.png'

export const ProjectCard = ({ project }) => {
    return (
        <div id={styles.card} className={styles.Title}>
            <div className={styles.projectCardTitle}>
                <h1 className="title3">{project.name}</h1>
                <img src={gitHub} alt="logo do GitHub" id={styles.IconGitHub} />
            </div>
            <p className="paragrafh">{project.description}</p>
            <a href={project.html_url} className={styles.link} target='_blank'>Saiba mais</a>
        </div>
    );
};
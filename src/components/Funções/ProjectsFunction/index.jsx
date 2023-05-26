import { projects } from "../../../data/projects"
import { ProjectCard } from "../../Section/ProjectsSection"
import styles from './styles.module.css'

projects

export const ProjectsSection = () =>{
    return (
      <div className={styles.sectionProjects}>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
    )
}
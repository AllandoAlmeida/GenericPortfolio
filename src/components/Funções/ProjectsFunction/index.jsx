import React, { useEffect, useState } from 'react';
import { ProjectCard } from "../../Section/ProjectsSection";
import styles from './styles.module.css';
import { searchRepos } from '../../../components/Funções/requests/requests';

export const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const projects = await searchRepos();
      setProjects(projects);
    }

    fetchProjects();
  }, []);

  return (
    <div className={styles.sectionProjects}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

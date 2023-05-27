import { technologies } from "../../../data/technologies"
import { TechCard } from "../../Section/TechnologiesSection"
import styles from './styles.module.css'


export const TechnologiesSection = () => {
  return (
    <div className={styles.sectionLanguages}>
      {technologies.map((technology, index) => (
        <TechCard key={index} technology={technology} />
      ))}
    </div>
  )
}

import { Header } from './components/Header'
import { WelcomeSection } from './components/Section/WelcomeSection'
import { AboutMe } from './components/Section/AboutMeSection'
import { TitleProjects } from './fragments/TitleProjects'
import { ProjectsSection } from './components/Funções/ProjectsFunction'
import { TitleTechnologies } from './fragments/TitleTechnologies'
import { TechnologiesSection } from './components/Funções/TechnologiesFunction'
import { Footer } from './components/Section/FooterSection'

import './Styles/index.css'


export const App = () => {

  return (
    <>
      <main className='containeMain'>
        <div className='SectionMain'>
          <Header />
          <WelcomeSection />
          <AboutMe />
          <TitleTechnologies />
          <TechnologiesSection />
          <TitleProjects />
          <ProjectsSection />
          <Footer />
        </div>
      </main>
    </>
  )
}


import React from 'react'
import ProjectCard from './ProjectCard'
import { farmwise, enabled, hama, revAnim } from './FetchImages'

function Projects() {
  return (
    <div className='flex flex-col m-auto p-10 min-h-screen bg-reviot-blue font-garet'>
      <h2 className='text-center text-reviot-cyan'>Our Projects</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-[90vh] lg:grid-cols-4 overflow-auto m-4 pt-5 pl-5 gap-4'>
        <ProjectCard
        ProjectName='Farmwise'
        Description='Farmwise is an argricultural technology that focuses
        on providing agricultural solutuions through automation.'
        ProjectImage={farmwise}/>

        <ProjectCard
        ProjectName='Enabled'
        Description='Empowering independence through smart vision. Assistive technology for blind and visually impaired'
        ProjectImage={enabled}/>

        <ProjectCard
        ProjectName='Hama'
        Description='Hama is a smart home mobile application that allows users to control their home appliances from anywhere in the world.'
        ProjectImage={hama}
        />

        <ProjectCard
        ProjectName=' Stay tuned ...'
        Description='More projects coming soon, contact us for smart solutions'
        ProjectImage={revAnim}
        />
      </div>
    </div>
  )
}

export default Projects

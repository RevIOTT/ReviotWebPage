import React from 'react'

/**
 * ProjectCard component
 * @param {string} ProjectName - Name of the project
 * @param {string} Description - Description of the project
 * @param {string} ProjectImage - Image of the project
 * @returns {JSX.Element} - Rendered ProjectCard component
 */

interface ProjectCardProps {
  ProjectName: string;
  Description: string;
  ProjectImage: string;
};

function ProjectCard({ ProjectName, Description, ProjectImage }: ProjectCardProps) {
  return (
    <div className='flex flex-col shadow-sm max-w-[90%]  max-h-[50vh] m-auto'>
        <div className='w-full h-[25vh] lg:h-[50vh] items-center justify-center'>
            <img src={ProjectImage} alt={ProjectName} className='w-full h-full object-cover'/>
        </div>
        <div className='w-full h-[50%] items-center justify-center'>
            <h2 className='text-reviot-cyan'>{ProjectName}</h2>
            <p>{Description}</p>
        </div>
    </div>
  )
}

export default ProjectCard

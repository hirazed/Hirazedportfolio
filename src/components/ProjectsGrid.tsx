// components/ProjectsGrid.tsx
import { useState } from 'react';
import { projectsData } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            My Portfolio
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-12 max-w-3xl mx-auto">
            A collection of my work across various design disciplines and industries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
                index={index}
                isVisible={true}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectsGrid;
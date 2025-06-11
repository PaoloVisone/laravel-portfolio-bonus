import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-card-content">
                <h3>{project.title}</h3>
                <div className="project-spans">
                    {project.type && <span>{project.type.name}</span>}
                    {Array.isArray(project.technologies) && project.technologies.map(technology => (
                        <span key={technology.id}>{technology.name}</span>
                    ))}
                    <Link to={`/projects/${project.id}`}>View Details</Link>
                </div>
                <p>{project.client}</p>
            </div>
            <div className="project-card-image">
                {project.image && (
                    <img src={`http://127.0.0.1:8000/storage/${project.image}`} alt={project.title} />
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
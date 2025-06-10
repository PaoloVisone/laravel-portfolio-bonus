import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.content}</p>
            <Link to={`/projects/${project.id}`}>View Details</Link>
        </div>
    );
};

export default ProjectCard;
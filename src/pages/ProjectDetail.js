import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../api/config';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/${id}`);
                setProject(response.data.data || response.data);
                console.log('Project detail API response:', response.data);
            } catch (error) {
                console.error('Error fetching project:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!project) return <div>Project not found</div>;

    return (
        <div className="project-detail">
            <h1>{project.title}</h1>
            <h2>{project.client}</h2>
            {project.image && (
                <img src={`http://127.0.0.1:8000/storage/${project.image}`} alt={project.title} />
            )}
            <p>{project.content}</p>
            <span>{project.type.name}</span>
            <div>
                {Array.isArray(project.technologies) && project.technologies.map(technology => (
                    <span key={technology.id}>{technology.name} </span>
                ))}
            </div>

        </div>
    );
};

export default ProjectDetail;
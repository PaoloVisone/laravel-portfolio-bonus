import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import { API_BASE_URL } from '../api/config';

const Home = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(API_BASE_URL);
                // Log per capire la struttura della risposta
                setProjects(response.data.data || response.data);
                console.log('API response:', response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Swap
    const goLeft = () => setCurrent(current > 0 ? current - 1 : projects.length - 1);
    const goRight = () => setCurrent(current < projects.length - 1 ? current + 1 : 0);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home">
            <div className="carousel-container">
                <button className="carousel-btn left" onClick={goLeft}>&lt;</button>
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${current * 100}vw)` }}
                >
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                <button className="carousel-btn right" onClick={goRight}>&gt;</button>
            </div>
        </div>
    );
};

export default Home;
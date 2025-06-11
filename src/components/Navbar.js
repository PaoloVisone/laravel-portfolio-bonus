import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className='title'>
                <h1>My Projects</h1>
            </div>
            <div className='home-link'>
                <Link to="/">Home</Link>
            </div>
        </nav>
    );
};

export default Navbar;
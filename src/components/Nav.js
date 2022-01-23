import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav id="navBar">
                <div>
                <Link to='/' className='Link'>Home Page</Link>
                </div>
                <div>
                <Link to='swapi' className='Link'>Starship Database</Link>
                </div>
                
                

            </nav>
        </div>
    );
}

export default Nav;

import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';


function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}><Link to='/'>AT</Link></div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
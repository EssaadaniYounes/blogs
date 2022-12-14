import { Link } from 'react-router-dom';
import classes from './Header.module.css';
const Header = () => {
    return (
        <div className={classes.header}>
            <h1>Blogs</h1>
            <ul>
                <li>
                    <Link to='/'>blogs</Link>
                </li>
                <li>
                    <Link to='/create-post'>Create new blog</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
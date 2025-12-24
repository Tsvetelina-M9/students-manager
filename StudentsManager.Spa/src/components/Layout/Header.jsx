import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Header() {
    const { isLoggedIn } = useAuth();

    return (
        <div>
            <header>
                <nav>
                    {isLoggedIn ? (
                        <ul>
                            <li>
                                <Link to='/profile'>Profile</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/slido'>Slido</Link>
                            </li>

                        </ul>
                    )
                    }
                </nav>
            </header>
        </div>
    );
}

export default Header;
import './styles.css';
import imgLogout from './../../assets/logout.svg'
import { Link } from 'react-router-dom';

export default function HeaderAdmin() {
    return (
        <header className='ed-admin-header'>
            <nav className='ed-container ed-navbar-admin'>
                <div className='ed-navbar-icon-admin'>
                    <Link to="/">
                        <h1>Admin</h1>
                    </Link>
                </div>
                <div className='ed-menu-item-rigth'>
                    <img src={imgLogout} alt="Sair" />
                    <p>Sair</p>
                </div>
            </nav>
        </header>
    );
}
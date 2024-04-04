import './styles.css';
import imgLogout from './../../assets/logout.svg'
import { Link, useNavigate } from 'react-router-dom';
import * as authService from "../../services/auth-service";

export default function HeaderAdmin() {
    const navigate = useNavigate();
    
    function handleLogoutClick(){
        authService.logout();
        navigate("/search")
    }
    return (
        <header className='ed-admin-header'>
            <nav className='ed-container ed-navbar-admin'>
                <div className='ed-navbar-icon-admin'>
                    <Link to="/admin">
                        <h1>Admin</h1>
                    </Link>
                </div>
                <div className='ed-menu-item-rigth' onClick={handleLogoutClick}>
                    <img src={imgLogout} alt="Sair" />
                    <p>Sair</p>
                </div>
            </nav>
        </header>
    );
}
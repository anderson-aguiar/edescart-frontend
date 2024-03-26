import './styles.css';
import imgAdmin from './../../assets/admin.svg'
import icon from './../../assets/icon.svg';
import { Link } from 'react-router-dom';

export default function HeaderClient() {
    return (
        <header>
            <nav className='ed-container ed-navbar'>
                <div className='ed-navbar-icon'>
                    <Link to="/">
                        <img src={icon} alt="" />
                        <h1>E-Descart</h1>
                    </Link>
                </div>
                <div>
                    <img src={imgAdmin} alt="Admin" />
                </div>
            </nav>
        </header>
    );
}
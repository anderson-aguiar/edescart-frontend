import './styles.css';
import imgAdmin from './../../assets/admin.svg'

export default function HeaderClient() {
    return (
        <header>
            <nav className='ed-container ed-navbar'>
                <div>
                    <h1>E-Descart</h1>
                </div>
                <div>
                    <img src={imgAdmin} alt="Admin" />
                </div>
            </nav>
        </header>
    );
}
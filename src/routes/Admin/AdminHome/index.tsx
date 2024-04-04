import { useEffect, useState } from 'react';
import './styles.css';
import { UserDTO } from '../../../models/user';
import * as userService from '../../../services/user-service';
import { Link } from 'react-router-dom';
export default function AdminHome() {

    const [user, setUser] = useState<UserDTO>();

    useEffect(() => {
        userService.findMe()
            .then(response => {
                setUser(response.data);
            })
    }, [])
    return (
        <main>
            <section id='admin-home-section' className='ed-container'>
                <h2 className='ed-mb20 ed-section-title ed-line-bottom'>Bem vindo à área administrativa {user?.name}!</h2>
                <div className='ed-admin-nav'>
                    <ul>
                        <li><Link to={"/admin/companies"}>- Pontos de coleta</Link></li>
                        <li><Link to={"/admin/materials"}>- Materiais</Link></li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
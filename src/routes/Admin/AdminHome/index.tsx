import { useEffect, useState } from 'react';
import './styles.css';
import { UserDTO } from '../../../models/user';
import * as userService from '../../../services/user-service';
export default function AdminHome() {

    const [user, setUser] = useState<UserDTO>();

    useEffect(() => {
        userService.findMe()
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.log("Error", error);
            })

    }, [])
    return (
        <main>
            <section id='admin-home-section' className='ed-container'>
                <h2 className='ed-mb20 ed-section-title'>Bem vindo à área administrativa {user?.name}!</h2>
            </section>
        </main>
    );
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css';
import ButtonPrimary from "../../../components/ButtonPrimary";
import { useState } from 'react';
import { CredentialsDTO } from '../../../models/auth';
import * as authService from '../../../services/auth-service';

export default function Login() {

    const [formData, setFormData] = useState<CredentialsDTO>({
        username: '',
        password: ''
    })

    function handleSubmit(event: any){
        event.preventDefault();
        authService.loginRequest(formData)
        .then(response => {
            authService.saveAccessToken(response.data.access_token);
        })
        .catch(error => {
            console.log("Error", error)
        })
    }

    function handleInputChange(event: any){
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value})

    }
    
    return (
        <section className='ed-search-form-container' id='login-section'>
            <div className='ed-login-form-container'>
                <form className='ed-card ed-form' onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className='ed-form-controls-container'>
                        <div>
                            <input
                             className='ed-form-control'
                             type="text"
                             placeholder='Email' 
                             name='username' 
                             value={formData.username}
                             onChange={handleInputChange}
                             />
                        </div>
                        <div className='ed-form-error'>Campo obrigatório</div>
                        <div>
                            <input 
                                type="password" 
                                className="ed-form-control" 
                                placeholder="Senha" 
                                name="password" 
                                value={formData.password}
                                onChange={handleInputChange}
                                />
                        </div>
                    </div>
                    <div className='ed-login-form-buttons'>
                        <ButtonPrimary text={'Entrar'} />
                    </div>
                </form>
            </div>
        </section>
    );
}
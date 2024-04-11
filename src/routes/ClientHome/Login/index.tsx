/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css';
import ButtonPrimary from "../../../components/ButtonPrimary";
import { useState } from 'react';
import * as authService from '../../../services/auth-service';
import *as forms from '../../../utils/forms';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../../components/FormInput';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    })

    function handleSubmit(event: any) {
        event.preventDefault();

        authService.loginRequest(forms.toValues(formData))
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                navigate("/admin")
            })
            .catch(error => {
                console.log("Error", error)
            })

    }

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData(forms.update(formData, name, value));
    }

    return (
        <section className='ed-search-form-container' id='login-section'>
            <div className='ed-login-form-container'>
                <form className='ed-card ed-form' onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className='ed-form-controls-container'>
                        <div>
                            <FormInput
                                { ...formData.username }
                                className='ed-form-control'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='ed-form-error'>Campo obrigatório</div>
                        <div>
                            <FormInput
                                { ...formData.password }
                                className="ed-form-control"
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
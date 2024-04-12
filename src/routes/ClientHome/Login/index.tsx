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
    const [subimitResponseFail, setSubimitResponseFail] = useState(false);
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
        
        setSubimitResponseFail(false);

        const formDataValidated = forms.dirtyAndValidateAll(formData);

        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }
        authService.loginRequest(forms.toValues(formData))
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                navigate("/admin")
            })
            .catch(() => {
                setSubimitResponseFail(true);
            })

    }

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        const result = forms.updateAndValidate(formData, name, value);
        setFormData(result);
    }
    function handleTurnDirty(name: string) {
        const newFormData = forms.dirtyAndValidate(formData, name);
        setFormData(newFormData);
    }
    return (
        <section className='ed-search-form-container' id='login-section'>
            <div className='ed-login-form-container'>
                <form className='ed-card ed-form' onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className='ed-form-controls-container'>
                        <div>
                            <FormInput
                                {...formData.username}
                                onTurnDirty={handleTurnDirty}
                                className='ed-form-control'
                                onChange={handleInputChange}
                            />
                            <div className='ed-form-error'>{formData.username.message}</div>
                        </div>
                        <div className='ed-form-error'>Campo obrigatório</div>
                        <div>
                            <FormInput
                                {...formData.password}
                                onTurnDirty={handleTurnDirty}
                                className="ed-form-control"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    {
                        subimitResponseFail &&
                        <div className='ed-form-global-error'>Usuário ou senha inválidos</div>
                    }
                    <div className='ed-login-form-buttons'>
                        <ButtonPrimary text={'Entrar'} />
                    </div>
                </form>
            </div>
        </section>
    );
}
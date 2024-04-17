/* eslint-disable @typescript-eslint/no-explicit-any */
import './styless.css';
import * as materialService from '../../../services/material-service';
import { useEffect, useState } from 'react';
import * as forms from '../../../utils/forms';
import { MaterialDTO } from '../../../models/material';
import { useNavigate, useParams } from 'react-router-dom';
import FormInput from '../../../components/FormInput';


export default function MaterialForms() {
    const navigate = useNavigate();

    const params = useParams();

    const isEditing = params.materialId !== "create";

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
            validation: function (value: string) {
                return value.length >= 3 && value.length <= 15;
            },
            message: "Favor informar um nome de 3 a 15 caracteres"
        }
    })

    useEffect(() => {
        if (isEditing) {
            materialService.findById(Number(params.materialId))
                .then(response => {
                    setFormData(forms.updateAll(formData, response.data));
                })
        }
    }, [])
    function handleSubmit(event: any) {
        event.preventDefault();
        const formDataValidated = forms.dirtyAndValidateAll(formData);
        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }
        const c = forms.toValues(formData);
        const requestBody: MaterialDTO = {
            name: c.name
        }
        if (isEditing) {
            requestBody.id = Number(params.materialId);
        }

        const request = isEditing ? materialService.updateRequest(requestBody) : materialService.insertRequest(requestBody);
        request
            .then(() => {
                navigate("/admin/materials")
            })
    }
    function handleNewMaterialReset() {
        navigate("/admin/materials");
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

        <>
            <div className='ed-search-form-container ed-mt20'>
                <form className='ed-card ed-form' onSubmit={handleSubmit}>
                    <h2>cadastro de materiais</h2>
                    <div className='ed-form-controls-container'>
                        <div>
                            <FormInput
                                {...formData.name}
                                onTurnDirty={handleTurnDirty}
                                className='ed-form-control'
                                onChange={handleInputChange}
                            />
                            <div className='ed-form-error'>{formData.name.message}</div>
                        </div>
                        
                    </div>
                    <div className='ed-search-form-buttons-admin'>
                        <button type='submit' className='ed-btn ed-btn-admin'>Salvar</button>
                        <button onClick={handleNewMaterialReset} type='reset' className='ed-btn ed-btn-admin-inverse'>Cancelar</button>
                    </div>
                </form>
            </div>
        </>

    );
}
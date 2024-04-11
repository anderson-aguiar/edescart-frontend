/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from 'react-select';
import './styless.css';
import * as materialService from '../../../services/material-service';
import { useEffect, useState } from 'react';
import * as forms from '../../../utils/forms';
import * as companyService from '../../../services/company-service';
import { selectStyles } from '../../../utils/select';
import { MaterialDTO } from '../../../models/material';
import { useNavigate, useParams } from 'react-router-dom';
import FormInput from '../../../components/FormInput';

export default function CompanyForms() {
    const navigate = useNavigate();

    const params = useParams();

    const isEditing = params.companyId !== "create";

    const [formData, setFormData] = useState<any>({
        name: {
            value: "",
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nome",
        },
        phone: {
            value: "",
            id: "phone",
            name: "phone",
            type: "text",
            placeholder: "Telefone",
        },
        materials:{
            value: [],
            id: "materials",
            name: "materials",
            placeholder: "Materiais",
            validation: function(value: MaterialDTO[]){
                return value.length > 0;
            },
            message: "Escolha ao menos um material"
        }

    })
    const [formAddressData, setFormAddressData] = useState<any>({

        street: {
            value: "",
            id: "street",
            name: "street",
            type: "text",
            placeholder: "Rua"
        },
        cep: {
            value: "",
            id: "cep",
            name: "cep",
            type: "text",
            placeholder: "CEP"
        },
        number: {
            value: "",
            id: "number",
            name: "number",
            type: "number",
            placeholder: "Número",
            validation: function (value: any) {
                return Number(value) > 0;
            },
            message: "Favor informar um valor possitivo"
        },
        city: {
            value: "",
            id: "city",
            name: "city",
            type: "text",
            placeholder: "Cidade"
        },
        state: {
            value: "",
            id: "state",
            name: "state",
            type: "text",
            placeholder: "UF"
        }
    })

    const [materials, setMaterials] = useState<MaterialDTO[]>([]);
    useEffect(() => {
        materialService.findAllRequest()
            .then(response => {
                setMaterials(response.data);
            })
    }, [])
    useEffect(() => {
        const obj = forms.validate(formAddressData, "number");
        console.log(obj)
        if (isEditing) {
            companyService.findById(Number(params.companyId))
                .then(response => {
                    const {address} = response.data
                    setFormData(forms.updateAll(formData, response.data));
                    setFormAddressData(forms.updateAll(formAddressData, address));
                })
        }
    }, [])
    function handleSubmit(event: any) {
        event.preventDefault();

    }
    function handleNewCompanyReset() {
        navigate("/admin/companies");
    }
    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData(forms.update(formData, name, value));
    }
    return (

        <>
            <div className='ed-search-form-container ed-mt20'>
                <form className='ed-card ed-form' onSubmit={handleSubmit}>
                    <h2> cadastro ponto de coleta</h2>
                    <div className='ed-form-controls-container'>
                        <div>
                            <FormInput
                                {...formData.name}
                                className='ed-form-control'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <FormInput
                                {...formData.phone}
                                className='ed-form-control'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <FormInput
                                {...formAddressData.street}
                                className='ed-form-control'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='ed-form-address'>
                            <FormInput
                                {...formAddressData.number}
                                className='ed-form-control ed-mb20'
                                onChange={handleInputChange}
                            />
                            <FormInput
                                {...formAddressData.city}
                                className='ed-form-control ed-mb20 ed-ml5'
                                onChange={handleInputChange}
                            />
                            <FormInput
                                {...formAddressData.state}
                                className='ed-form-control ed-mb20 ed-ml5'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <FormInput
                                {...formAddressData.cep}
                                className='ed-form-control'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='ed-form-select'>
                            <Select
                                options={materials}
                                onChange={(obj) => {
                                    const newFormData = forms.update(formData, "materials", obj);
                                    setFormData(newFormData);
                                }}
                                getOptionLabel={(obj) => obj.name}
                                getOptionValue={(obj) => String(obj.id)}
                                styles={selectStyles}
                                isSearchable
                                isMulti
                            />
                        </div>
                    </div>
                    <div className='ed-search-form-buttons-admin'>
                        <button type='submit' className='ed-btn ed-btn-admin'>Salvar</button>
                        <button onClick={handleNewCompanyReset} type='reset' className='ed-btn ed-btn-admin-inverse'>Cancelar</button>
                    </div>
                </form>
            </div>
        </>

    );
}
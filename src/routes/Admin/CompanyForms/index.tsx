/* eslint-disable @typescript-eslint/no-explicit-any */
import './styless.css';
import * as materialService from '../../../services/material-service';
import { useEffect, useState } from 'react';
import * as forms from '../../../utils/forms';
import * as companyService from '../../../services/company-service';
import { selectStyles } from '../../../utils/select';
import { MaterialDTO } from '../../../models/material';
import { useNavigate, useParams } from 'react-router-dom';
import FormInput from '../../../components/FormInput';
import FormSelect from '../../../components/FormSelect';

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
            validation: function (value: string) {
                return value.length >= 3 && value.length <= 80;
            },
            message: "Favor informar um nome de 3 a 80 caracteres"
        },
        phone: {
            value: "",
            id: "phone",
            name: "phone",
            type: "text",
            placeholder: "Telefone",
        },
        materials: {
            value: [],
            id: "materials",
            name: "materials",
            placeholder: "Materiais",
            validation: function (value: MaterialDTO[]) {
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
            placeholder: "Rua",
            validation: function(value: string){
                return /^([^ ]+).*$/.test(value) && value.length >= 10 && value.length <= 80;
            },
            message: "Favor informar uma rua válida"
        },
        cep: {
            value: "",
            id: "cep",
            name: "cep",
            type: "text",
            placeholder: "CEP",
            validation: function (value: string) {
                return /(^\d{5})-?(\d{3}$)/.test(value);
            },
            message: "Informe um CEP válido"
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
            message: "O Nº deve ser possitivo"
        },
        city: {
            value: "",
            id: "city",
            name: "city",
            type: "text",
            placeholder: "Cidade",
            validation: function(value: string){
                return /^([^ ]+).*$/.test(value);
            },
            message: "Favor informar uma cidade"
        },
        state: {
            value: "",
            id: "state",
            name: "state",
            type: "text",
            placeholder: "UF",
            validation: function (value: string) {
                return /^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$/.test(value.toUpperCase())
                 && /^.+$/.test(value)
                 && /^([^ ]+).*$/.test(value);
            },
            message: "Favor informar um UF válido"
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
        if (isEditing) {
            companyService.findById(Number(params.companyId))
                .then(response => {
                    const { address } = response.data
                    setFormData(forms.updateAll(formData, response.data));
                    setFormAddressData(forms.updateAll(formAddressData, address));
                })
        }
    }, [])
    function handleSubmit(event: any) {
        event.preventDefault();
        const formDataValidated = forms.dirtyAndValidateAll(formData);
        const formAddressDataValidated = forms.dirtyAndValidateAll(formAddressData);
        if(forms.hasAnyInvalid(formDataValidated) || forms.hasAnyInvalid(formAddressDataValidated)){
            setFormData(formDataValidated);
            setFormAddressData(formAddressDataValidated);
            return;
        }
        const address = forms.toValues(formAddressData);
        const c = forms.toValues(formData);
        const company = {
            name: c.name,
            phone: c.phone,
            address: address,
            materials: c.materials
        }
        //console.log(company);
    }
    function handleNewCompanyReset() {
        navigate("/admin/companies");
    }
    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        const result = forms.updateAndValidate(formData, name, value);
        setFormData(result);
    }
    function handleInputAddressChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        const result = forms.updateAndValidate(formAddressData, name, value);
        setFormAddressData(result);
    }
    function handleTurnDirty(name: string) {
        const newFormData = forms.dirtyAndValidate(formData, name);
        setFormData(newFormData);
    }
    function handleAddressTurnDirty(name: string) {
        const newFormData = forms.dirtyAndValidate(formAddressData, name);
        setFormAddressData(newFormData);
    }

    return (

        <>
            <div className='ed-search-form-container ed-mt20'>
                <form className='ed-card ed-form' onSubmit={handleSubmit}>
                    <h2>cadastro ponto de coleta</h2>
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
                        <div>
                            <FormInput
                                {...formData.phone}
                                onTurnDirty={handleTurnDirty}
                                className='ed-form-control'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <FormInput
                                {...formAddressData.street}
                                onTurnDirty={handleAddressTurnDirty}
                                className='ed-form-control'
                                onChange={handleInputAddressChange}
                            />
                            <div className='ed-form-error'>{formAddressData.street.message}</div>
                        </div>
                        <div>
                            <FormInput
                                {...formAddressData.city}
                                onTurnDirty={handleAddressTurnDirty}
                                className='ed-form-control'
                                onChange={handleInputAddressChange}
                            />
                            <div className='ed-form-error'>{formAddressData.city.message}</div>
                        </div>
                        <div className='ed-form-address'>
                            <div>
                                <FormInput
                                    {...formAddressData.number}
                                    onTurnDirty={handleAddressTurnDirty}
                                    className='ed-form-control'
                                    onChange={handleInputAddressChange}
                                />
                                <div className='ed-form-error'>{formAddressData.number.message}</div>
                            </div>

                            <div className='ed-ml5 ed-mt20-input'>
                                <FormInput
                                    {...formAddressData.state}
                                    onTurnDirty={handleAddressTurnDirty}
                                    className='ed-form-control ed-form-cep'
                                    onChange={handleInputAddressChange}

                                />
                                <div className='ed-form-error'>{formAddressData.state.message}</div>
                            </div>
                        </div>
                        <div>
                            <FormInput
                                {...formAddressData.cep}
                                onTurnDirty={handleAddressTurnDirty}
                                className='ed-form-control'
                                onChange={handleInputAddressChange}
                            />
                            <div className='ed-form-error'>{formAddressData.cep.message}</div>
                        </div>
                        <div>
                            <FormSelect
                                {...formData.materials}
                                options={materials}
                                onChange={(obj: any) => {
                                    const newFormData = forms.update(formData, "materials", obj);
                                    setFormData(newFormData);
                                }}
                                getOptionLabel={(obj: any) => obj.name}
                                getOptionValue={(obj: any) => String(obj.id)}
                                onTurnDirty={handleTurnDirty}
                                styles={selectStyles}
                                isSearchable
                                isMulti
                                className="ed-form-control ed-form-select"
                            />
                            <div className='ed-form-error'>{formData.materials.message}</div>
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
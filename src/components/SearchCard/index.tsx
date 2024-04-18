/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from 'react-select';
import './styless.css';
import ButtonPrimary from '../ButtonPrimary';
import ButtonInverse from '../ButtonInverse';
import * as materialService from '../../services/material-service';
import { ChangeEvent, useEffect, useState } from 'react';
import { MaterialDTO } from '../../models/material';
import { selectStyles } from '../../utils/select';
import FormInput from '../FormInput';
import * as forms from '../../utils/forms';
import * as viaCep from "../../utils/viacep";
type QueryParams = {
    name: string;
    postalCode: string;
}
type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onSearch: Function;
}
export default function SearchCard({ onSearch }: Props) {
    const [params, setParams] = useState<QueryParams>({
        name: "",
        postalCode: ''
    });

    const [formData, setFormData] = useState<any>({
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
        }
    })
    const [materials, setMaterials] = useState<MaterialDTO[]>([]);
    useEffect(() => {
        materialService.findAllRequest()
            .then(response => {
                setMaterials(response.data);
            })
    }, [])
    const handlePostalCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;
        const result = forms.updateAndValidate(formData, name, value);
        setFormData(result);
        setParams({ ...params, postalCode: value });
    };
    function handleTurnDirty(name: string) {
        const newFormData = forms.dirtyAndValidate(formData, name);
        setFormData(newFormData);
    }


    function handleSubmit(event: any) {
        event.preventDefault();
        viaCep.checkCep(formData.cep.value)
            .then(x => {
                if (x.data.erro !== true) {
                    setFormData(formData)
                }
                else {
                    setFormData(forms.updateAndValidate(formData, "cep", ""))
                    onSearch("", "");
                    return;
                }
            })
        const formDataValidated = forms.dirtyAndValidateAll(formData);
        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated);
            return;
        }
        onSearch(params.name, params.postalCode);
    }
    function handleClear() {
        onSearch("", "");
        setParams({ ...params, name: '' });
        setFormData(forms.update(formData, 'cep', ""))
    }
    return (

        <>
            <div className='ed-search-form-container'>
                <form className='ed-card ed-form' onSubmit={handleSubmit}>
                    <h2>buscar ponto de coleta</h2>
                    <div className='ed-form-controls-container'>
                        <div>
                            <FormInput
                                {...formData.cep}
                                onTurnDirty={handleTurnDirty}
                                className='ed-form-control'
                                onChange={handlePostalCodeChange}
                            />
                            <div className='ed-form-error'>{formData.cep.message}</div>
                            <div className='ed-link-cep'><a href={"https://buscacepinter.correios.com.br/app/endereco/index.php"} target='blank'>Não sei meu cep!</a></div>
                        </div>
                        <div className='ed-form-select ed-form-control'>
                            <Select
                                options={materials}
                                onChange={(obj => {
                                    if (obj?.name) {
                                        setParams({ ...params, name: obj.name })
                                    }
                                })}
                                value={params.name ? { name: params.name } : null}
                                getOptionLabel={(obj) => obj.name}
                                getOptionValue={(obj) => obj.name}
                                placeholder="Materiais"
                                styles={selectStyles}
                                isSearchable
                            />
                        </div>
                    </div>
                    <div className='ed-search-form-buttons'>
                        <ButtonPrimary text={'Encontrar'} />
                        <div onClick={handleClear}>
                            <ButtonInverse text={'Limpar'} />
                        </div>
                    </div>
                </form>
            </div>
        </>

    );
}
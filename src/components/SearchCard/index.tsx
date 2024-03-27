import Select from 'react-select';
import './styless.css';
import ButtonPrimary from '../ButtonPrimary';
import ButtonInverse from '../ButtonInverse';
import * as materialService from '../../services/material-service';
import { ChangeEvent, useEffect, useState } from 'react';
import { MaterialDTO } from '../../models/material';
import { selectStyles } from '../../utils/select';

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


    const [materials, setMaterials] = useState<MaterialDTO[]>([]);
    useEffect(() => {
        materialService.findAllRequest()
            .then(response => {
                setMaterials(response.data);
            })
    }, [])
    const handlePostalCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setParams({ ...params, postalCode: newValue });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(event: any) {
        event.preventDefault();
        onSearch(params.name, params.postalCode);
    }
    function handleClear() {
        onSearch("", "");
        setParams({ ...params, name: ''});
    }
    return (

        <>
            <div className='ed-search-form-container'>
                <form className='ed-card ed-form' onSubmit={handleSubmit}>
                    <h2>buscar ponto de coleta</h2>
                    <div className='ed-form-controls-container'>
                        <div>
                            <input className='ed-form-control' type="text" placeholder='CEP' name='cep'
                                onChange={handlePostalCodeChange} />
                        </div>
                        <div className='ed-form-select'>
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
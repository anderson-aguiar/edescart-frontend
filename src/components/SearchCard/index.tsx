import Select from 'react-select';
import './styless.css';
import ButtonPrimary from '../ButtonPrimary';
import ButtonInverse from '../ButtonInverse';

export default function SearchCard() {
    return (
        <div className='ed-search-form-container'>
            <form className='ed-card ed-form'>
                <h2>buscar ponto de coleta</h2>
                <div className='ed-form-controls-container'>
                    <div>
                        <input className='ed-form-control' type="text" placeholder='CEP' />
                    </div>
                    <div>
                        <Select />
                    </div>
                </div>
                <div className='ed-search-form-buttons'>
                    <ButtonPrimary text={'Encontrar'} />
                    <ButtonInverse text={'Limpar'} />
                </div>
            </form>
        </div>

    );
}
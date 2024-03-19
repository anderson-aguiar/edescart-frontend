import Select from 'react-select';
import './styless.css';

export default function SearchBar() {
    return (
        <main>
            <section id="search-section" className='ed-container'>
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
                            <button type='reset' className='ed-btn ed-btn-inverse'>Limpar</button>
                            <button type='submit' className='ed-btn ed-btn-green'>Encontrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
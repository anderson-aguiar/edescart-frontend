import './styless.css';

export default function SearchBar() {
    return (
        <main>
            <section id="search-section" className='ed-container'>
                <div className='ed-search-form-container'>
                    <form className='ed-card ed-form'>
                        <h2>Dados</h2>
                        <div className='ed-form-controls-container'>
                            <div>
                                <input className='ed-form-control' type="text" placeholder='CEP' />
                            </div>
                            <div>
                                <input className='ed-form-control' type="text" placeholder='Materials' />
                            </div>
                        </div>
                        <div className='ed-search-form-buttons'>
                            <button type='submit' className='ed-btn dsc-btn-green'>Buscar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
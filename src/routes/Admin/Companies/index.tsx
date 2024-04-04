import './styles.css';
import editImg from '../../../assets/edit.svg';
import deleteImg from '../../../assets/delete.svg';
import addCompany from '../../../assets/addCompany.svg';
import ButtonAdmin from '../../../components/ButtonAdmin';

export default function Companies() {
    
    return (
        <>
            <section id="company-listing-section" className='ed-container'>
                <div className='ed-mt20 ed-line-bottom ed-company-listing-itens'>
                    <h2 className=' ed-listing-section-title '>Pontos de Coleta</h2>
                    <img src={addCompany} alt='Adicionar Ponto de Coleta' title='Add Novo'/>
                </div>
                <table className="ed-table ed-mt20 ed-mb20">
                    <thead>
                        <th className='ed-tb576'>ID</th>
                        <th className="ed-txt-left">Nome</th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='ed-tb576'>1</td>
                            <td className='ed-txt-left'>Ponto de coleta</td>
                            <td>
                                <img className='ed-company-listing-btn' src={editImg} alt='Editar' />
                            </td>
                            <td>
                                <img className='ed-company-listing-btn' src={deleteImg} alt='Deletar' />
                            </td>
                        </tr>
                    </tbody>

                </table>
                <ButtonAdmin text='Carregar mais' />
            </section>
        </>
    );
}
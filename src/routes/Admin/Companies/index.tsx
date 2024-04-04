import './styles.css';
import editImg from '../../../assets/edit.svg';
import deleteImg from '../../../assets/delete.svg';
import addCompany from '../../../assets/addCompany.svg';
import ButtonAdmin from '../../../components/ButtonAdmin';
import * as companyService from '../../../services/company-service';
import { useEffect, useState } from 'react';
import { CompanyDTO } from '../../../models/company';
type QueryParams = {
    page: number;
}
export default function Companies() {

    const [isLastPage, setIsLastPage] = useState(false);

    const [companies, setCompanies] = useState<CompanyDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0
    })
    useEffect(() => {
        companyService.findAll(queryParams.page)
            .then(response => {
                const nextPage = response.data.content;
                setCompanies(companies.concat(nextPage));
                setIsLastPage(response.data.last);
            })
    }, [queryParams])

    return (
        <>
            <section id="company-listing-section" className='ed-container'>
                <div className='ed-mt20 ed-line-bottom ed-company-listing-itens'>
                    <h2 className=' ed-listing-section-title '>Pontos de Coleta</h2>
                    <img src={addCompany} alt='Adicionar Ponto de Coleta' title='Add Novo' />
                </div>
                <table className="ed-table ed-mt20 ed-mb20">
                    <thead>
                        <th className='ed-tb576'>ID</th>
                        <th className="ed-txt-left">Nome</th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            companies.map(company => (
                                <tr key={company.id}>
                                    <td className='ed-tb576'>{company.id}</td>
                                    <td className='ed-txt-left'>{company.name}</td>
                                    <td>
                                        <img className='ed-company-listing-btn' src={editImg} alt='Editar' />
                                    </td>
                                    <td>
                                        <img className='ed-company-listing-btn' src={deleteImg} alt='Deletar' />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
                <ButtonAdmin text='Carregar mais' />
            </section>
        </>
    );
}
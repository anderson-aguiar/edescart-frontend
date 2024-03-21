import './styless.css';
import ButtonInverse from '../ButtonInverse';
import { CompanyMinDTO } from '../../models/company';
import CompanyCardDetails from '../CompanyCardDetails';

type Props = {
    company: CompanyMinDTO[];
}
export default function CompanyCard({ company }: Props) {
    return (
        <>
            <div className='ed-mb20'>
                {
                    company.map(item => (
                        <CompanyCardDetails key={item.id} company={item} />
                    ))
                }
            </div>
            <div>
                <ButtonInverse text='Carregar mais' />
            </div>
        </>
    );
}
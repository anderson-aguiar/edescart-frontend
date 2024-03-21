import './styles.css';
import { CompanyMinDTO } from '../../models/company';

type Props = {
    company: CompanyMinDTO;
}
export default function CompanyCardDetails({ company }: Props) {
    return (
        <div className='ed-card ed-mt20'>
            <div className='ed-company-card-top ed-line-bottom'>
                <h3>{company.name}</h3>
            </div>
            <div className='ed-company-card-bottom'>
                <h4>{company.address.street}<span>, {company.address.number}</span></h4>
                <h4>{company.address.city}, {company.address.state}</h4>
                <h4>{company.phone} | Distância:
                <span className='ed-company-card-distance'> {company.distance.toFixed(2)} km</span></h4>
            </div>
        </div>
    );

}
import './styles.css';
import CompanyCard from "../../../../components/CompanyCard";
import { CompanyMinDTO } from '../../../../models/company';

const company: CompanyMinDTO[] = [

    {
        id: 18,
        name: "Suleste",
        phone: "1932425154",
        distance: 5.46,
        address: {
            id: 18,
            street: "Avenida Gov. Pedro de Toleto",
            cep: "13070715",
            number: 2046,
            city: "Campinas",
            state: "SP"
        }
    },
    {
        id: 3,
        name: "Carrefour",
        phone: "1932519820",
        distance: 6.96,
        address: {
            id: 3,
            street: "Avenida José de Souza Campos",
            cep: "13092123",
            number: 690,
            city: "Campinas",
            state: "SP"
        }
    }

]
export default function Result() {
    return (
        <main>
            <section id="result-card-section" className='ed-container'>
                <CompanyCard company={company} />
            </section>
        </main>
    );
}
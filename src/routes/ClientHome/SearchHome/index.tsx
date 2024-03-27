import './styles.css';
import SearchCard from '../../../components/SearchCard';
import { CompanyMinDTO } from '../../../models/company';
import { useEffect, useState } from 'react';
import CompanyCard from '../../../components/CompanyCard';
import * as companyService from '../../../services/company-service';
import { useNavigate } from 'react-router-dom';

type QueryParams = {
    name: string;
    postalCode: string;
}
export default function SearchHome() {
    const navigate = useNavigate();
    const [companies, setCompanies] = useState<CompanyMinDTO[]>([]);
    const [queryParams, setQueryParams] = useState<QueryParams>({
        name: "",
        postalCode: ''
    });

    useEffect(() => {
        if (queryParams.name != "" && queryParams.postalCode != "") {
            companyService.findDistance(queryParams.name, queryParams.postalCode)
                .then(response => {
                    setCompanies(response.data);
                })
                .catch(() => {
                    navigate("/");
                });
        }
    }, [queryParams])

    function handleSearch(name: string, postalCode: string) {
        if(name == "" || postalCode == ""){
            setCompanies([]);
        }
        setQueryParams({ name: name, postalCode: postalCode });
    }

    return (
        <>
            <main>
                <section id="search-home-section" className='ed-container'>
                    <SearchCard onSearch={handleSearch} />
                </section>
                <section id="result-card-section" className='ed-container'>
                    {
                        companies &&
                        <CompanyCard company={companies} />
                    }
                </section>
            </main>
        </>
    );
}
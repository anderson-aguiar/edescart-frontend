import './styles.css';
import HeaderClient from "../../components/HeaderClient";
import SearchCard from '../../components/SearchCard';

export default function SearchHome() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="search-home-section" className='ed-container'>
                    <SearchCard />
                </section>
            </main>
        </>
    );
}
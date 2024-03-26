import './styles.css';
import SearchCard from '../../../components/SearchCard';
import { Outlet } from 'react-router-dom';


export default function SearchHome() {
    return (
        <>
            <main>
                <section id="search-home-section" className='ed-container'>
                    <SearchCard />
                </section>
            </main>
            <Outlet />
        </>
    );
}
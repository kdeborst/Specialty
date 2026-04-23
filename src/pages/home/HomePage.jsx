import { useNavigate } from 'react-router-dom';

import AppLayout from '../../layouts/AppLayout/AppLayout';
import HeroSearch from '../../features/search/components/HeroSearch/HeroSearch';
import BottomNavigation from '../../features/navigation/components/BottomNavigation/BottomNavigation';

import './HomePage.css';

function HomePage() {
    const navigate = useNavigate();

    function handleAccountClick() {
        navigate('/account')
    }
    
    return (
        <AppLayout 
            showLogo={false}
            onAccountClick={handleAccountClick}
        >
            <div className='home-page'>
                <HeroSearch />
                <BottomNavigation />
            </div>
        </AppLayout>
    )
}

export default HomePage;
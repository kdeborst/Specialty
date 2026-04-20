import './HomePage.css';

import AppLayout from '../../layouts/AppLayout/AppLayout';
import HeroSearch from '../../features/search/components/HeroSearch/HeroSearch';
import BottomNavigation from '../../features/navigation/components/BottomNavigation/BottomNavigation';

function HomePage() {
    return (
        <AppLayout showLogo={false}>
            <div className='home-page'>
                <HeroSearch />
                <BottomNavigation />
            </div>
        </AppLayout>
    )
}

export default HomePage;
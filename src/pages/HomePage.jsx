import AppLayout from '../components/layout/AppLayout/AppLayout';
import HeroSearch from '../components/home/HeroSearch/HeroSearch';
import BottomNavigation from '../components/navigation/BottomNavigation/BottomNavigation';

function HomePage() {
    return (
        <AppLayout>
            <HeroSearch />
            <BottomNavigation />
        </AppLayout>
    )
}

export default HomePage;
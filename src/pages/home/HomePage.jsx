import AppLayout from '../../layouts/AppLayout/AppLayout';
import HeroSearch from '../../features/search/components/HeroSearch/HeroSearch';
import BottomNavigation from '../../features/navigation/components/BottomNavigation/BottomNavigation';

function HomePage() {
    return (
        <AppLayout showLogo={false}>
            <HeroSearch />
            <BottomNavigation />
        </AppLayout>
    )
}

export default HomePage;
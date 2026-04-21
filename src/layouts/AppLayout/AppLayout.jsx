import './AppLayout.css'
import AppHeader from '../AppHeader/AppHeader'

function AppLayout({ 
    children,
    showLogo = true,
    onAccountClick
}) {
    return (
        <div className='app-layout'>
           <AppHeader 
                showLogo={showLogo}
                onAccountClick={onAccountClick} 
            />
            <main className='app-layout-main'>
                {children}
            </main>
        </div>
    )
}

export default AppLayout
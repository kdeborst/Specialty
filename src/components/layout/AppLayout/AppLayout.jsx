import './AppLayout.css'
import AppHeader from '../AppHeader/AppHeader'

function AppLayout({ children }) {
    return (
        <div className='app-layout'>
           <AppHeader />
            <main className='app-layout-main'>
                {children}
            </main>
        </div>
    )
}

export default AppLayout;
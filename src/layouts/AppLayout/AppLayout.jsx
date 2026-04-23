import styles from './AppLayout.module.css'

import AppHeader from '../AppHeader/AppHeader'

function AppLayout({ 
    children,
    showLogo = true,
    onAccountClick
}) {
    return (
        <div className={ styles["app-layout"] }>
           <AppHeader 
                showLogo={ showLogo }
                onAccountClick={ onAccountClick } 
            />
            <main className={ styles["app-layout__main"] }>
                { children }
            </main>
        </div>
    )
}

export default AppLayout
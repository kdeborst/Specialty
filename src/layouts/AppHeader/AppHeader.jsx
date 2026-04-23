import styles from './AppHeader.module.css';

import Button from '../../components/button/Button';

import { User, Globe, ShoppingCart, Wallet } from 'lucide-react';

function AppHeader({ showLogo, onAccountClick }) {
    return (
        <header className={styles["app-header"]}>
            <div className={`page-container ${styles["app-header__container"]}`}>
                <div className={styles["app-header__left"]}>
                    <Button 
                        shape='icon'
                        appearance='secondary'
                        bordered={ true }
                        icon={ User }
                        iconProps={{ size: 18 }}
                        onClick={onAccountClick}
                        aria-label='Login of registreer account'
                    />
                    <Button
                        shape='pill'
                        appearance='secondary'
                        icon={ Globe }
                        iconProps={{ size: 16 }}
                        aria-label='Taal'
                    >
                        NL
                    </Button>
                </div>
                <div className={styles["app-header__center"]}>
                {
                    showLogo && (<h1 className={styles["app-header__logo"]}>Specialty</h1>)
                }
                </div>
                <div className={styles["app-header__right"]}>
                    <Button
                        shape='icon'
                        appearance='secondary'
                        icon={ ShoppingCart }
                        iconProps={{ size: 18 }}
                        aria-label='Winkelwagen'
                    >
                        <span className={styles["app-header__cart-badge"]}>2</span>
                    </Button>
                    <Button
                        shape='pill'
                        appearance='secondary'
                        icon={ Wallet }
                        iconProps={{ size: 16 }}
                        iconPosition='end'
                        aria-label='Valuta'
                    >
                        EUR
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;
import './AppHeader.css';
import { User, Globe, ShoppingCart, Wallet, Grid3x3 } from 'lucide-react';

function AppHeader({ showLogo }) {
    return (
        <header className='app-header'>
            <div className='page-container app-header-container'>
                <div className='app-header-left'>
                    <button className='app-header-circle-button' aria-label='Account'>
                        <User size={18}/>
                    </button>
                    <button className='app-header-language-button' aria-label='Taal'>
                        <Globe size={16} />
                        <span>NL</span>
                    </button>
                </div>
                <div className='app-header-center'>
                {
                    showLogo && (<h1 className='app-header-logo'>Specialty</h1>)
                }
                </div>
                <div className='app-header-right'>
                    <button className='app-header-cart-button' aria-label='Winkelwagen'>
                        <ShoppingCart size={18} />
                        <span className='app-header-cart-badge'>2</span>
                    </button>
                    <button className='app-header-currency-button'>
                        <span>EUR</span>
                        <Wallet size={16} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;
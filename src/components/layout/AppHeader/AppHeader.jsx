import './AppHeader.css';

function AppHeader() {
    return (
        <header className='app-header'>
            <div className='page-container app-header-container'>
                <div className='app-header-left'>
                    <span className='app-header-user'>Account</span>
                    <span className='app-header-language'>NL</span>
                </div>
                <div className='app-header-center'>
                    <h1 className='app-header-logo'>Specialty</h1>
                </div>
                <div className='app-header-right'>
                    <button className='app-header-button'>Cart</button>
                    <button className='app-header-button'>EUR</button>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;
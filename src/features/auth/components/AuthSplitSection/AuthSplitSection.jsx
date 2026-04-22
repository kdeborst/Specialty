import './AuthSplitSection.css';

function AuthSplitSection({
    activeTab,
    loginContent,
    registerContent
}) {
    return (
        <section className='auth-split-section'>
            <div className='auth-split-section-mobile-tabs'>
                <button 
                    type='button'
                    className={`auth-split-section-tab ${ activeTab === 'login' ? 'is-active' : '' }`}
                >
                    Aanmelden
                </button>
                <button type='button' className='auth-split-section-tab'>Registreren</button>
            </div>
            <div className='auth-split-section-desktop'>
                <div className='auth-split-section-panel auth-split-section-panel-login'>
                    { loginContent }
                </div>
                <div className='auth-split-section-panel auth-split-section-panel-register'>
                    { registerContent }
                </div>
            </div>
            <div className='auth-split-section-mobile'></div>
        </section>
    )
}

export default AuthSplitSection;
import './AuthSplitSection.css';

function AuthSplitSection() {
    return (
        <section className="auth-split-section">
            <div className="auth-split-section-mobile-tabs">
                <button type="button" className='auth-split-section-tab'>Aanmelden</button>
                <button type="button" className='auth-split-section-tab'>Registreren</button>
            </div>
            <div className="auth-split-section-desktop">
                <div className="auth-split-section-panel auth-split-section-panel-login"></div>
                <div className="auth-split-section-panel auth-split-section-panel-register"></div>
            </div>
            <div className="auth-split-section-mobile"></div>
        </section>
    )
}

export default AuthSplitSection;
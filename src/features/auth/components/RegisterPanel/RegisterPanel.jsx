import { MapPin } from 'lucide-react';

import './RegisterPanel.css';

function RegisterPanel({
    title,
    subtitle,
    buttonText
}) {
    return (
        <div className="register-panel">
            <div className="register-panel-inner">
                <div className="register-panel-brand">
                    <h2 className="register-panel-brand-title">Specialty</h2>
                    <MapPin size={24} />
                </div>
                <div className="register-panel-content">
                    <h3 className="register-panel-title">{title}</h3>
                    <p className="register-panel-subtitle">{subtitle}</p>
                    <button type='button' className='register-panel-primary-button'>
                        {buttonText}
                    </button>
                    <button type='button' className='register-panel-link-button'>
                        Meer informatie
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegisterPanel;
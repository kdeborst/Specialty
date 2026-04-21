import { Mail, Lock } from 'lucide-react';

import './LoginForm.css';

function LoginForm({
    title,
    subtitle,
    formData,
    onInputChange,
    onSubmit
}) {
    return (
        <div className='login-form'>
            <div className='login-form-inner'>
                <h1 className='login-form-title'>{title}</h1>
                <p className='login-form-subtitle'>{subtitle}</p>
                <form className='login-form-fields' onSubmit={onSubmit}>
                    <label className='login-form-input-wrapper'>
                        <Mail size={18} />
                        <input 
                            type='email'
                            name='email'
                            placeholder='e-mail'
                            value={formData.email}
                            onChange={onInputChange}
                        />
                    </label>
                    <p className='login-form-helper-text'>
                        U dient een e-mailadres te gebruiken...
                    </p>
                    <label className='login-form-input-wrapper'>
                        <Lock size={18} />
                        <input
                            type='password'
                            name='password'
                            placeholder='wachtwoord'
                            value={formData.password}
                            onChange={onInputChange}
                        />
                    </label>
                    <p className='login-form-helper-text'>
                        Onbekende email en wachtwoord combinatie...
                    </p>
                    <button type='submit' className='login-form-primary-button'>Login</button>
                    <button type='button' className='login-form-link-button'>wachtwoord vergeten?</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
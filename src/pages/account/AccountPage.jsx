import { useState } from 'react';

import AppLayout from '../../layouts/AppLayout/AppLayout';
import AuthSplitSection from '../../features/auth/components/AuthSplitSection/AuthSplitsection';
import LoginForm from '../../features/auth/components/LoginForm/LoginForm';
import RegisterPanel from '../../features/auth/components/RegisterPanel/RegisterPanel';

import { loginUser } from '../../features/auth/services/authService';

import './AccountPage.css';

function AccountPage () {
    const [activeTab, setActiveTab] = useState('login');
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    function handleLoginInputChange(event) {
        const { name, value } = event.target;

        setLoginData((previousValue) => ({
            ...previousValue,
            [name]: value
        }));
    }

    async function handleLoginSubmit(event) {
        event.preventDefault();
        
        try {
            const data = await loginUser(loginData);
            console.log('Login success:', data);
        } catch (error) {
            console.log('Login error:', error);
        }
    }
    
    return(
        <AppLayout showLogo={false}>
            <section className='account-page'>
                <div className='account-page-container'>
                    <AuthSplitSection 
                        activeTab={activeTab}
                        loginContent={
                            <LoginForm 
                                title='Aanmelden'
                                subtitle='Voer je gegevens in'
                                formData={loginData}
                                onInputChange={handleLoginInputChange}
                                onSubmit={handleLoginSubmit}
                            />
                        }
                        registerContent={
                            <RegisterPanel 
                                title='Registreren'
                                subtitle='Nog geen account? Registreer hieronder!'
                                buttonText='Registreer'
                            />
                        }
                    />
                </div>
            </section>
        </AppLayout>
    )
}

export default AccountPage;
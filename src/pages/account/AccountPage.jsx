import { useState } from 'react';

import AppLayout from '../../layouts/AppLayout/AppLayout';
import AuthSplitSection from '../../features/auth/components/AuthSplitSection/AuthSplitsection';
import LoginForm from '../../features/auth/components/LoginForm/LoginForm';

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

    function handleLoginSubmit(event) {
        event.preventDefault();
        console.log('Login form submitted:', loginData)
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
                    />
                </div>
            </section>
        </AppLayout>
    )
}

export default AccountPage;
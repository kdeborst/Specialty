import { useState } from 'react';

import AppLayout from '../../layouts/AppLayout/AppLayout';
import AuthSplitSection from '../../features/auth/components/AuthSplitSection/AuthSplitsection';
import LoginForm from '../../features/auth/components/LoginForm/LoginForm';

import './AccountPage.css';

function AccountPage () {
    const [activeTab, setActiveTab] = useState('login');
    
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
                            />
                        }
                    />
                </div>
            </section>
        </AppLayout>
    )
}

export default AccountPage;
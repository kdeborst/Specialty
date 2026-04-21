import AppLayout from '../../layouts/AppLayout/AppLayout';
import AuthSplitSection from '../../features/auth/components/AuthSplitSection/AuthSplitsection';

import './AccountPage.css';

function AccountPage () {
    return(
        <AppLayout showLogo={false}>
            <section className="account-page">
                <div className="account-page-containers">
                    <AuthSplitSection />
                </div>
            </section>
        </AppLayout>
    )
}

export default AccountPage;
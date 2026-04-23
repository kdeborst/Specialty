import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home/HomePage';
import AccountPage from '../pages/account/AccountPage';

function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/account' element={<AccountPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;
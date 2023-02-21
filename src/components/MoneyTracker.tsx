import { store } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import Dashboard from './Dashboard';
import Login from './Login';
import CreateAccount from './CreateAccount';
import '../main.css';

const MoneyTracker = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path="*" element={<Dashboard />} />
                    </Route>
                    <Route element={<PublicRoutes />}>
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/createAccount"
                            element={<CreateAccount />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default MoneyTracker;

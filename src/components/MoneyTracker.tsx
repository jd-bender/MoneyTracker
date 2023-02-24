import { Suspense, lazy } from 'react';
import { store } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';

const Login = lazy(() => import('./Login'));
const CreateAccount = lazy(() => import('./CreateAccount'));
const Dashboard = lazy(() => import('./Dashboard'));

import '../main.css';

const MoneyTracker = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route element={<PublicRoutes />}>
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/createAccount"
                                element={<CreateAccount />}
                            />
                        </Route>
                        <Route element={<PrivateRoutes />}>
                            <Route path="*" element={<Dashboard />} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </Provider>
    );
};

export default MoneyTracker;

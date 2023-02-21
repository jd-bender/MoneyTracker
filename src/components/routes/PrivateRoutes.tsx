import { useAppSelector } from '../../hooks';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoutes() {
    const isAuthenticated = useAppSelector((state) => !!state.user.uid);

    return isAuthenticated ? <Outlet /> : <Navigate replace to="/login" />;
}

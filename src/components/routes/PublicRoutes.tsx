import { useAppSelector } from '../../hooks';
import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoutes() {
    const isAuthenticated = useAppSelector((state) => !!state.user.uid);

    return isAuthenticated ? <Navigate replace to="/" /> : <Outlet />;
}

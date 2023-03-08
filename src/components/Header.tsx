import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import Menu from './UI/Menu';
import ListItem from './UI/ListItem';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Header = (props: any) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navigateToMyProfile = () => {
        navigate('/myProfile');
        closeMenu();
    };

    const navigateToHome = () => {
        navigate('/');
    };

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const logout = () => {
        signOut(auth);
    };

    return (
        <div className={props.className}>
            <div className="flex items-center h-24 flex-no-wrap relative w-full justify-between bg-blue-500">
                <div className="flex w-full flex-wrap items-center justify-between mx-6">
                    <span
                        className="text-5xl font-semibold text-white cursor-pointer"
                        onClick={navigateToHome}
                    >
                        Money Tracker
                    </span>

                    <div className="relative">
                        <button onClick={openMenu}>
                            <CgProfile
                                size={50}
                                className="text-white cursor-pointer"
                            />
                        </button>

                        {menuOpen && (
                            <Menu callback={closeMenu}>
                                <ListItem onClick={navigateToMyProfile}>
                                    My Profile
                                </ListItem>
                                <ListItem onClick={logout}>Log Out</ListItem>
                            </Menu>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

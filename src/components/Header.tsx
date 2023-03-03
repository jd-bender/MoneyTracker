import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import Menu from './Menu';
import ListItem from './ListItem';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const logout = () => {
        signOut(auth);
    };

    return (
        <div className="flex items-center h-24 flex-no-wrap relative w-full justify-between bg-blue-500">
            <div className="flex w-full flex-wrap items-center justify-between mx-6">
                <span className="text-5xl font-semibold text-white cursor-default">
                    Money Tracker
                </span>

                <div className="relative">
                    <button onClick={() => setMenuOpen(true)}>
                        <CgProfile
                            size={50}
                            className="text-white cursor-pointer"
                        />
                    </button>

                    {menuOpen && (
                        <Menu callback={() => setMenuOpen(false)}>
                            <ListItem onClick={logout}>Log Out</ListItem>
                        </Menu>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;

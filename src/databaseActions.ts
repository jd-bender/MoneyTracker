import { set, update, push, ref } from 'firebase/database';
import { createUserWithEmailAndPassword, updateEmail } from 'firebase/auth';
import { database, auth } from './firebase';

const createUserAccount = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

const setDB = (path: string, data: any) => {
    return set(ref(database, path), data);
};

const updateDB = (path: string, data: any) => {
    return update(ref(database, path), data);
};

const pushDB = (path: string, data: any) => {
    return push(ref(database, path), data);
};

const updateUserEmail = (email: string) => {
    if (auth.currentUser) {
        return updateEmail(auth.currentUser, email);
    }
};

export { createUserAccount, setDB, updateDB, pushDB, updateUserEmail };

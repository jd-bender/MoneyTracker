import { createRoot } from 'react-dom/client';
import { auth, database as db } from './firebase';
import { child, get, ref } from 'firebase/database';
import { store } from './store';
import { setUser } from './reducers/userSlice';
import MoneyTracker from './components/MoneyTracker';

const root = createRoot(document.getElementById('app') as Element);

auth.onAuthStateChanged((user) => {
    if (user) {
        get(child(ref(db), `users/${user.uid}`)).then((snapshot) => {
            const data = snapshot.val();

            store.dispatch(
                setUser({
                    uid: user.uid,
                    ...data
                })
            );

            root.render(<MoneyTracker />);
        });
    } else {
        store.dispatch(setUser({}));
        root.render(<MoneyTracker />);
    }
});

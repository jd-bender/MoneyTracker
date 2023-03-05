import { createRoot } from 'react-dom/client';
import { auth, database as db } from './firebase';
import { child, get, ref } from 'firebase/database';
import { store } from './store';
import { setUser } from './reducers/userSlice';
import MoneyTracker from './components/MoneyTracker';

const root = createRoot(document.getElementById('app') as Element);

const renderApp = () => root.render(<MoneyTracker />);

auth.onAuthStateChanged((user) => {
    if (user) {
        const uid = user.uid;

        get(child(ref(db), `users/${uid}`)).then((snapshot) => {
            const data = snapshot.val();

            store.dispatch(
                setUser({
                    uid,
                    ...data
                })
            );

            renderApp();
        });
    } else {
        store.dispatch(setUser({}));
        renderApp();
    }
});

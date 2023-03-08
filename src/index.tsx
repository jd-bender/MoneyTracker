import { createRoot } from 'react-dom/client';
import { auth, database as db } from './firebase';
import { child, get, ref } from 'firebase/database';
import { store } from './store';
import { setUser } from './reducers/userSlice';
import { setExpenseTags } from './reducers/expenseTagsSlice';
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
                    ...data.profile
                })
            );

            const expenseTags: any = [];

            Object.keys(data.expenseTags).forEach((expenseTagKey) => {
                const expenseTag = data.expenseTags[expenseTagKey];
                expenseTags.push({ name: expenseTag.name, id: expenseTagKey });
            });

            store.dispatch(setExpenseTags(expenseTags));

            renderApp();
        });
    } else {
        store.dispatch(setUser({}));
        renderApp();
    }
});

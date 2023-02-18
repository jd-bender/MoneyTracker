import { createRoot } from 'react-dom/client';
import { auth, database as db } from './firebase';
import { child, get, ref } from 'firebase/database';
import { store } from './store';
import MoneyTracker from './MoneyTracker';

const root = createRoot(document.getElementById('app') as Element);
root.render(<MoneyTracker teststr="hello" />);

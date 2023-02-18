import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import databaseSecrets from '../databaseSecrets';

const app = initializeApp(databaseSecrets);

const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };

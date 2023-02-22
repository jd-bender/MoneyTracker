import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { initializeAuth } from 'firebase/auth';
import databaseSecrets from '../databaseSecrets';

const app = initializeApp(databaseSecrets);

const database = getDatabase(app);
const auth = initializeAuth(app);

export { database, auth };

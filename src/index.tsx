import { createRoot } from 'react-dom/client';
import MoneyTracker from './MoneyTracker';

const root = createRoot(document.getElementById('app') as Element);
root.render(<MoneyTracker />);

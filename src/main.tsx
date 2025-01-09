import { createRoot } from 'react-dom/client'
import './index.css'

import { Router } from './router';

const root = document.getElementById('root')!

const component = (<Router></Router>);

createRoot(root).render(component);

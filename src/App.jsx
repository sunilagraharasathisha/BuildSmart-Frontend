import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

const App = () => (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
);

export default App;

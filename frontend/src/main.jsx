import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  // Impor Provider
import './index.css';
import App from './App.jsx';
import store from './redux/store'; // Impor store Redux Anda

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Bungkus komponen App dengan Provider */}
      <App />
    </Provider>
  </StrictMode>,
);

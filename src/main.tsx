import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import ini
import App from './App.tsx';
import './index.css'; // Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio"> {/* ✅ Tambahkan ini */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// src/routes/RootLayout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';

export default function RootLayout() {
  const location = useLocation();
  const showHeader = !['/login'].includes(location.pathname);

  return (
    <div className="flex min-h-screen">
      {showHeader && <Header />}
      
      {/* Conteúdo principal */}
      <main className={`flex-1 ${showHeader ? 'ml-60' : ''} transition-margin duration-300`}>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
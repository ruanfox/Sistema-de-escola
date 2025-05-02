import { Outlet, useLocation } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Header from '../components/Header';

export default function RootLayout() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const showHeader = !isLogin;

  return (
    <div className="flex min-h-screen">
      {showHeader && <SideBar />}
      
      {/* Conteúdo principal */}
      <main className={`flex-1 ${showHeader ? 'ml-60' : ''}`}>
        {showHeader && <Header />}  

        <div className={`${isLogin ? '' : 'p-8'}`}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

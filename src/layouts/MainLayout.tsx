import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../Footer';

const MainLayout = () => {
  return (
    <div className='h-dvh flex flex-col'>
      <Navbar />

      <main className='flex-grow overflow-auto bg-orange-50'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;

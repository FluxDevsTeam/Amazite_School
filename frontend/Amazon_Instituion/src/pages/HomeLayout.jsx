import { Outlet } from 'react-router-dom';
import { Navbar, Footer, SideBar } from '../components';

const HomeLayout = () => {
  return (
    <div className="mx-auto max-w-[1280px] w-full min-h-screen flex flex-col justify-between">
      <Navbar />
      <SideBar />
      <main className="px-8 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default HomeLayout;

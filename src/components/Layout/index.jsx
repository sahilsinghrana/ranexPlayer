import { Outlet } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark ">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <section className="flex-grow">
          <Outlet />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
import { Outlet } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark ">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
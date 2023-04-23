import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <div>
            This is the layout
            <Outlet />
        </div>
    )
}

export default Layout;
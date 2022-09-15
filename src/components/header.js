import {NavLink} from 'react-router-dom'
function Header(){
    return (
        <nav className="bg-gray-800 m-3 p-3 rounded-md">
            <div className="flex grid grid-cols-3">
               <NavLink to="/" className="cursor-pointer"><div className="text-white">Logo</div></NavLink>
               <NavLink to="/building" className="cursor-pointer"> <div className="text-center text-white">Dashboard</div></NavLink>
               <div className="text-white text-end">Login</div>
            </div>
        </nav>
    )
}

export default Header;
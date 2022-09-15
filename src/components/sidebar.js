import {NavLink} from 'react-router-dom'
const Sidebar = () => {
    return (
        <aside className="w-64 m-3" aria-label="Sidebar">
            <div className="overflow-y-auto h-full py-4 px-3 rounded-lg bg-gray-800">
                <ul className="space-y-2">
                    <li>
                        <NavLink to="/building" className={({ isActive }) => isActive ? "flex items-center p-2 text-base font-normal rounded-lg text-white bg-gray-700" : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700" }>
                            <svg aria-hidden="true" className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span className="ml-3">Building</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/floor" className={({ isActive }) => isActive ? "flex items-center p-2 text-base font-normal rounded-lg text-white bg-gray-700" : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700" }>
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Floor</span>
                            {/* <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium rounded-full bg-gray-700 text-gray-300">Pro</span> */}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/parking" className={({ isActive }) => isActive ? "flex items-center p-2 text-base font-normal rounded-lg text-white bg-gray-700" : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700" }>
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Parking</span>
                            {/* <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium rounded-full bg-gray-700 text-gray-300">Pro</span> */}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/energy" className={({ isActive }) => isActive ? "flex items-center p-2 text-base font-normal rounded-lg text-white bg-gray-700" : "flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700" }>
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Energy</span>
                            {/* <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium rounded-full bg-gray-700 text-gray-300">Pro</span> */}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Footer from "../components/footer"

function Parking() {
    return (
        <>
            <Header />
            <div className='flex'>
                <Sidebar />
                <div className='rounded-lg w-full m-3 p-3 bg-gray-800'></div>
            </div>
            <Footer />
        </>
    )
}

export default Parking
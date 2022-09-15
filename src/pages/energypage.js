import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import BarChart from "../components/barchart";

function EnergyPage(props) {
    return (
        <>
            <Header />
            <div className='flex'>
                <Sidebar />
                <div className='m-3 w-full'>
                    <div className='p-3 bg-gray-800 rounded-lg'>{props.title}</div>
                    <div className='p-3 mt-3 bg-gray-800 rounded-lg'>
                        <p className='text-center text-white'>รายวัน</p>
                        <BarChart label='00.00, 01.00, 02.00, 03.00, 04.00, 05.00, 06.00, 07.00, 08.00, 09.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00, 21.00, 22.00, 23.00' dataenergy='1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24' datasolar='24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1' />
                    </div>
                    <div className='p-3 mt-3 bg-gray-800 rounded-lg'>
                        <p className='text-center text-white'>รายสัปดาห์</p>
                        <BarChart label='Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday' dataenergy='1,2,3,4,5,6,7' datasolar='7,6,5,4,3,2,1' />
                    </div>
                    <div className='p-3 mt-3 bg-gray-800 rounded-lg'>
                        <p className='text-center text-white'>รายเดือน</p>
                        <BarChart label='Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec' dataenergy='1,2,3,4,5,6,7,8,9,10,11,12' datasolar='2,1,10,9,8,7,6,5,4,3,2,10' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EnergyPage;
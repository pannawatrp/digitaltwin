import Header from '../components/header'
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import Room from '../components/room';
import Energy from '../components/energy';
import Pm from '../components/pm';
import PieChart from '../components/piechart';

function Floor(props) {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        {/* Content */}
        <div className='m-3 w-full'>
          <div className='p-3 bg-gray-800 rounded-lg'></div>
          <div className='mt-3 flex grid grid-cols-2'>
            <div className='mr-2 p-3 bg-gray-800 rounded-lg'>
              <p className='text-center text-white'>Room {props.room}</p>
              <Room title='แอร์ 1' value='ปิด' />
              <Room title='แอร์ 2' value='ปิด' />
              <Room title='แอร์ 3' value='ปิด' />
            </div>
            <div className='ml-2 p-3 bg-gray-800 rounded-lg'>
              <p className='text-center text-white'>Energy</p>
              <Energy title='818' />
              <Energy title='810' />
            </div>
          </div>

          <div className='mt-3 flex grid grid-cols-2'>
            <div className='mr-2 p-3 bg-gray-800 rounded-lg'>
              <p className='text-center text-white'>PM2.5</p>
              <Pm title='818' value='0' />
              <Pm title='โถงทางเดิน' value='0' />
              <Pm title='โถงหน้าลิฟต์' value='0' />
            </div>
            <div className='ml-2 p-3 bg-gray-800 rounded-lg'>
              <p className='text-center text-white'>Space</p>
              <PieChart label='1,2,3,4,5,6' data='6,5,4,3,2,1' />
            </div>
          </div>
        </div>
        {/* /Content */}
      </div>
      <Footer />
    </>
  );
}

export default Floor;
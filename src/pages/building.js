import Header from '../components/header'
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
import Energy from '../components/energy';
import PieChart from '../components/piechart';

function Building() {
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
              <p className='text-center text-white'>Energy</p>
              <Energy title='ชั้น 1' energy='1' />
              <Energy title='ชั้น 2' energy='2' />
              <Energy title='ชั้น 3' energy='3' />
              <Energy title='ชั้น 4' energy='4' />
              <Energy title='ชั้น 5' energy='5' />
              <Energy title='ชั้น 6' energy='6' />
              <Energy title='ชั้น 7' energy='7' />
              <Energy title='ชั้น 8' energy='8' />
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

export default Building;
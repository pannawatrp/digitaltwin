import Header from "../components/header";
import Energy from "../components/energy";
import Footer from "../components/footer";
import Pm from "../components/pm";
import Temp from "../components/temp";

function Home(){
    return(
        <>
            <Header />
            {/* Content */}
            <div className="m-3 p-3 bg-gray-800 rounded-lg">
                {/* 3D Building */}
                
                {/* ./3D Buildung */}
            </div>
            <div className="flex grid grid-cols-3">
                <div className="p-3 ml-3 bg-gray-800 rounded-lg">
                    <p className="text-center text-white">Energy</p>
                    <Energy title='ตึก 30 ปี'/>
                </div>
                <div className="p-3 mx-3 bg-gray-800 rounded-lg">
                    <p className="text-center text-white">PM2.5</p>
                    <Pm title='ตึก 30 ปี' value='30' />
                </div>
                <div className="p-3 mr-3 bg-gray-800 rounded-lg">
                    <p className="text-center text-white">Temperature</p>
                    <Temp title='ตึก 30 ปี' value='27' />
                </div>
            </div>
            {/* ./Content */}
            <Footer />
        </>
    )
}
export default Home;
import Navbar from "../components/Navbar";
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const handleKoala=()=>{
        navigate('/dashboard')
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-200">
      <Navbar />
      <div className="flex justify-center items-center mt-20">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Welcome to KoalaVision
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
            Record, Upload, and Organize Your Meetings Effortlessly
          </h2>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <button onClick={handleKoala} className="w-full md:w-auto bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              Try KoalaVision Extension
            </button>
            <button className="w-full md:w-auto bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              Upload Meeting Videos
            </button>
          </div>
          <div className="mt-8 text-gray-600 text-sm">
            <p>Check us out on:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="hover:underline">
                Twitter
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </div>
            <p className="mt-4">
              Download our{" "}
              <a href="#" className="hover:underline">
                Chrome Extension
              </a>{" "}
              for easier access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


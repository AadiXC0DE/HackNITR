import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleKoala = () => {
    navigate("/dashboard");
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <motion.div
        className="flex justify-center items-center mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Welcome to KoalaVision
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
            Record, Upload, and Organize Your Meetings Effortlessly
          </h2>
          <p className="text-base text-gray-600 mb-8">
            With KoalaVision, you can seamlessly manage your meeting recordings, share important insights, and enhance collaboration within your team.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <motion.button
              onClick={handleKoala}
              className="w-full md:w-auto bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Try KoalaVision Now!
            </motion.button>
            <motion.button
              className="w-full md:w-auto bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Upload Meeting Videos
            </motion.button>
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
      </motion.div>
    </motion.div>
  );
};

export default Home;

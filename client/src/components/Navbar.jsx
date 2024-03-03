import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <nav className="bg-gray-100/30 py-4 px-6 w-full flex justify-between items-center">
      <div className="flex items-center">
        <img src="/image.png" alt="KoalaVision Logo" className="h-12 mr-4" />
      </div>
      <div className="flex flex-grow justify-center space-x-4 md:space-x-8">
        <a href="#" className="text-gray-800 hover:text-gray-600">
          Home
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600">
          About
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600">
          Contact
        </a>
      </div>
      <button
        onClick={() => loginWithRedirect()}
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
      >
        Login/Signup
      </button>
    </nav>
  );
};

export default Navbar;

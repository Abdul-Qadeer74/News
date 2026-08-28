import Menubtn from "./Menubtn";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-2 w-full  bg-black text-white flex justify-between items-center ">
      <div className="h-full lg:w-[12%] md:w-[15%] md:text-2xl sm:text-xl flex justify-evenly items-center font-bold">
        News <span className="text-yellow-400 "> App </span>
      </div>
      <div className="h-full w-[80%]  md:text-2xl  ">
        <ul className="h-full w-full flex justify-evenly items-center lg:flex xs:hidden ">
          <li className="hover:text-yellow-400">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/Search">Search</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/Buisness">Buisness</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/Technology">Technology</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/Sports">Sports</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/Entertainment">Entertainment</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/Health">Health</Link>
          </li>
          <li className="hover:text-yellow-400">
            <Link to="/Science">Science</Link>
          </li>
        </ul>
      </div>
      <Menubtn />
    </div>
  );
};

export default Navbar;

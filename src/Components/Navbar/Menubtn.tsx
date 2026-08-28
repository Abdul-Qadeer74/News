import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Menubtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/Search" },
    { name: "Buisness", path: "/Buisness" },
    { name: "Technology", path: "/Technology" },
    { name: "Sports", path: "/Sports" },
    { name: "Entertainmet", path: "/Entertainment" },
    { name: "Health", path: "/Health" },
    { name: "Science", path: "/Science" },
  ];

  return (
    <div className=" lg:hidden md:flex justify-center items-center  md:w-[5%] text-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center  bg-black text-2xl text-white transition "
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <div
        className={`absolute left-0 top-14  h-[35%] w-full origin-top  bg-black p-2  transition-all duration-200 ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-95 opacity-0"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className="flex flex-col w-full   text-left text-white transition hover:text-yellow-400"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menubtn;

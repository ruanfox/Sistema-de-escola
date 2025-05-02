import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg"

export default function SideBar() {
  return (
    <nav className="fixed flex flex-col w-60 h-full bg-primary-400 text-white">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10 mt-6">
          <img src={Logo} alt="" className="w-[4rem] h-[4rem] rounded-[100%] bg-gray-400"/>
          <Link to="/" className="text-[14px] font-bold mt-4 ver:text-white !no-underline">
            Sistema EduTrack
          </Link>
        </div>
        {/* divider*/ }
          <div className="mx-full h-px bg-gray-400"></div>
        {/* Menu */}
        <div className="w-full p-6 text-[14px]">
          <ul className="list-none m-0 p-0 space-y-2">
            <li className="flex items-center pl-4 h-10 hover:bg-secondary-300 rounded-[4px]">examplo</li>
            <li className="flex items-center pl-4 h-10 hover:bg-secondary-300 rounded-[4px]">exemplo</li>
            <li className="flex items-center pl-4 h-10 hover:bg-secondary-300 rounded-[4px]">exemplo</li>
            <li className="flex items-center pl-4 h-10 hover:bg-secondary-300 rounded-[4px]">exemplo</li>
          </ul>
        </div>
        <p> </p>
    </nav >
  );
}
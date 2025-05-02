import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg"
import { RiHome4Line } from "react-icons/ri";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAssessment } from "react-icons/md";


export default function SideBar() {
  return (
    <nav className="fixed flex flex-col w-60 h-full bg-primary-400 text-white">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10 mt-6">
          <img src={Logo} alt="" className="w-[4rem] h-[4rem] rounded-[100%] bg-gray-400"/>
          <Link to="/" className="text-[14px] font-bold mt-4 ver:text-white no-underline">
            Sistema EduTrack
          </Link>
        </div>
        {/* divider*/ }
          <div className="mx-full h-px bg-gray-400"></div>
        {/* Menu */}
        <div className="w-full p-6 text-[14px] font-semibold">
          <ul className="list-none m-0 p-0 space-y-2">
            <Link to="/Dashboard">
              <li className="flex items-center pl-4 h-10 hover:bg-secondary-300 rounded-[4px]">
                <RiHome4Line className="w-4 h-4 mr-4"/>
                <p>Painel</p>
              </li>
            </Link>
            <li className="flex items-center pl-4 h-10 hover:bg-secondary-300 rounded-[4px]">
              <PiChalkboardTeacherBold className="w-4 h-4 mr-4"/>
              <p>Professores</p></li>
            <li className="flex items-center pl-4 h-10 hover:bg-secondary-300 rounded-[4px]">
              <PiStudentBold className="w-4 h-4 mr-4"/>
              <p>Estudantes/Classes</p></li>
              <li className="flex items-center pl-4 h-10 hover:bg-secondary-300 rounded-[4px]">
              <IoSettingsOutline className="w-4 h-4 mr-4"/>
              <p>Configurações</p>
            </li>
            <li className="flex items-center pl-4 h-10 hover:bg-secondary-300 rounded-[4px]">
              <MdOutlineAssessment className="w-4 h-4 mr-4"/>
              <p>Exames</p>
            </li>
          </ul>
        </div>
        <p> </p>
    </nav >
  );
}
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import { RiHome4Line, RiInformation2Line } from "react-icons/ri";
import { PiChalkboardTeacherBold, PiStudentBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAssessment } from "react-icons/md";


const mainMenu = [
  { to: "/dashboard", label: "Painel", icon: RiHome4Line },
  { to: "/professores", label: "Professores", icon: PiChalkboardTeacherBold },
  { to: "/estudantes", label: "Estudantes/Classes", icon: PiStudentBold },
  { to: "/exames", label: "Exames", icon: MdOutlineAssessment },
  { to: "/configuracoes", label: "Configurações", icon: IoSettingsOutline },
];

export default function SideBar() {
  return (
    <nav className="fixed flex flex-col w-60 h-full bg-primary-400 text-white">
      {/* Top Section */}
      <ul>
        <li className="flex flex-col items-center mt-5 mb-5">
          <img src={Logo} alt="" className="w-[4rem] h-[4rem] rounded-[100%] bg-gray-400"/>
          <Link to="/" className="text-[14px] font-bold mt-4 ver:text-white no-underline">
            Sistema EduTrack
          </Link>
        </li>
        {/* divider*/ }
        <hr className="mx-full h-px bg-gray-400"/>
        <li className="flex-1 flex flex-col space-y-2 p-6">
          <NavLink 
            to="informacaopessoal" 
            className={({ isActive }) =>
              `flex flex-row items-center px-4 py-2 rounded hover:bg-secondary-300 ${
                isActive ? "bg-secondary-500" : ""
              }`
            }>
            <RiInformation2Line className="w-4 h-4 mr-4"/>
            <p>Informação</p>
          </NavLink>
        </li>
        {/* divider*/ }
        <hr className="mx-full h-px bg-gray-400" />
      </ul>

      {/* Main Menu */}
      <ul className="flex-1 flex flex-col space-y-2 p-6">
        {mainMenu.map(({ to, label, icon: Icon }) => (
          <li key={label}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded hover:bg-secondary-300 ${
                  isActive ? "bg-secondary-500" : ""
                }`
              }
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="text-sm font-semibold">{label}</span>
            </NavLink>
          </li>   
        ))}
      </ul>
    </nav>
  );
}

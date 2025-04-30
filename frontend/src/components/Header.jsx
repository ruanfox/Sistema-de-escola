import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 flex flex-col w-60 h-full bg-primary-400 text-white">
      <nav className="h-full w-full px-4 py-6">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="mb-12 px-2">
            <Link to="/" className="text-[14px] font-bold text-white hover:text-primary-100 transition-colors ">
              Technology School
            </Link>
          </div>
          {/* divider*/ }
            <div className="mx-[-16px] h-px bg-gray-400"></div>
          {/* Menu */}
          <ul className="flex flex-col space-y-4">
            <li>
              <Link 
                to="/" 
                className="flex items-center px-2 py-3 rounded-lg hover:bg-primary-500 transition-colors">
                <span className="ml-2">Início</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/sobre" 
                className="flex items-center px-2 py-3 rounded-lg hover:bg-primary-500 transition-colors">
                <span className="ml-2">Alunos</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/contato" 
                className="flex items-center px-2 py-3 rounded-lg hover:bg-primary-500 transition-colors">
                <span className="ml-2">Professores</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
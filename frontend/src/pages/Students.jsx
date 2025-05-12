import { BsSearch } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from "react";
import Logo from "../assets/Logo.jpg"

export default function Students() {
    const [showCard, setShowCard] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    return (
        <div className="w-[96%] m-auto">
            {/* Barra de pesquisa */}
            <div className="flex items-center rounded-md px-3 py-2 w-full max-w-md bg-grey-10 mt-8 mb-4">
                <button className="text-[#8A8A8A] hover:text-black">
                    <BsSearch className="w-5 h-5" />
                </button>
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="flex-grow bg-transparent outline-none text-grey-200 placeholder-grey-200 text-sm ml-4"
                />
            </div>

            <div className="flex justify-between relative overflow-x-auto w-full">
                {/* Tabela com os professores */}
                <div className={`${showCard ? "w-3/4" : "w-full"} overflow-x-auto`}>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3 w-1/4">Nome</th>
                                <th className="px-6 py-3 w-1/5">Matéria</th>
                                <th className="px-6 py-3 w-1/6">Telefone</th>
                                <th className="px-6 py-3 w-1/5">Email</th>
                                <th className="px-6 py-3 w-1/12">Sexo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr 
                            className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                            onClick={() => setShowCard(prev => !prev)}
                            >
                                <td className="flex items-center px-6 py-4">
                                    <img src="" alt="" className="h-6 w-6 rounded-full bg-amber-600 mr-1" />
                                    <p>Apple MacBook Pro 17"</p>
                                </td>
                                <td className="px-6 py-4">Silver</td>
                                <td className="px-6 py-4">38992134612</td>
                                <td className="px-6 py-4">exemple@gmail.com</td>
                                <td className="px-6 py-4">Masculino</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Card lateral fixo */}
                {showCard && (
                    <div className="w-1/4 flex-shrink-0 ml-5 px-6 py-18 items-center flex flex-col rounded-md shadow-lg bg-white">
                        <p className="text-[16px] text-grey-500 mb-2">45654</p>
                        <img src={Logo} alt="Foto do perfil" className="bg-grey-25 w-28 h-28 rounded-full mt-3" />
                        <p className="text-grey-800 text-[12px] mt-5 text-center">Ana Julia Ferreira da Silva</p>
                        <div className="flex justify-around mt-12 w-34">
                        <div className="flex justify-center items-center w-9 h-9 bg-grey-10 rounded-[8px] text-grey-200">
                            <HiOutlineAcademicCap className="w-6 h-6" />
                        </div>
                        <div className="flex justify-center items-center text-grey-200 w-9 h-9 bg-grey-10 rounded-[8px]">
                            <BsTelephone className="w-6 h-6" />
                        </div>
                        <div className="flex justify-center items-center text-grey-200 w-9 h-9 bg-grey-10 rounded-[8px]">
                            <MdOutlineMailOutline className="w-6 h-6" />
                        </div>
                        </div>
                        <div className="flex justify-around w-full mt-26 ">
                        <div>
                            <p className="text-grey-800 text-[12px]">Idade</p>
                            <p className="text-grey-100 text-[14px]">29</p>
                        </div>
                        <div>
                            <p className="text-grey-800 text-[12px]">Sexo</p>
                            <p className="text-grey-100 text-[14px]">Feminino</p>
                        </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

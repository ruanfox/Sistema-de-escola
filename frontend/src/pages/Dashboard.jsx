import { RiUserAddFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import AddStudents from "../components/AddStudents";

export default function Dashboard(){
    const [showAddStudents, setShowAddStudents ] = useState(false);

    return(
        <div className="flex w-full justify-center text-grey-400 mt-[3.5rem]">
            {/*Condicional para exibir o form de adicionar o estudante*/}
            {showAddStudents && (
               <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
                    <AddStudents onClose={() => setShowAddStudents(false)} />
                </div>
            )}

            <div className="w-[59.5rem]">
                <h1 className="text-4xl font-semibold">Bem-vindo ao seu painel,EduTrack</h1>
                <h2 className="text-2xl ml-[6.5rem] mt-6 font-semibold">Uyo/school/@edutrack.com</h2>
                <ul className="pl-20 mt-1.5 pt-17 pb-16">
                    <li className="flex text-grey-400">
                        <div className="flex items-center justify-center w-9 h-9 bg-secondary-10 rounded-[8px] mr-[2.6rem]">
                            <RiUserAddFill className="h-6 w-6 text-primary-400"/>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-2xl mb-4">Adicionar admins</h3>
                            <div className="w-[29rem]">
                                <p className="text-[14px} font-regular">
                                    Use esta funcionalidade para criar novos usuários com perfil de administrador.
                                </p>
                            </div>
                        </div>
                        
                    </li>
                    <li className="flex text-grey-400 mt-12">
                        <div className="flex items-center justify-center w-9 h-9 bg-secondary-10 rounded-[8px] mr-[2.6rem]">
                            <SiGoogleclassroom className="h-6 w-6 text-primary-400"/>
                        </div>
                        <div className="flex flex-col">
                            <h3 
                                className="text-2xl mb-4"
                                onClick={() => setShowAddStudents(prev => !prev)}
                                >Adicionar Turmas
                            </h3>

                            <div className="w-[29rem]">
                                <p className="text-[14px} font-regular">
                                    Use esta funcionalidade para criar novas Turmas.
                                </p>
                            </div>
                        </div>
                        
                    </li>
                    <li className="flex text-grey-400 mt-12">
                        <div className="flex items-center justify-center w-9 h-9 bg-secondary-10 rounded-[8px] mr-[2.6rem]">
                            <IoSettingsOutline className="h-6 w-6 text-primary-400"/>
                        </div>
                        <div className="flex flex-col">
                            <h3 
                                className="text-2xl mb-4 cursor-pointer"
                                onClick={() => setShowAddStudents(prev => !prev)}
                                >
                                Adicionar Alunos
                            </h3>
                            
                            <div className="w-[29rem]">
                                <p className="text-[14px} font-regular">
                                    Use esta funcionalidade para criar novos usuários com perfil de alunos.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="flex text-grey-400 mt-12">
                        <div className="flex items-center justify-center w-9 h-9 bg-secondary-10 rounded-[8px] mr-[2.6rem]">
                            <PiChalkboardTeacherBold className="h-6 w-6 text-primary-400"/>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-2xl mb-4">Adicionar Professores</h3>
                            <div className="w-[29rem]">
                                <p className="text-[14px} font-regular">
                                    Use esta funcionalidade para criar novos usuários com perfil de professores.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
import { useState } from "react";
import { FaBook } from "react-icons/fa";

export default function OngoingDisciplines() {
    const [showDisciplines, setShowDisciplines] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center w-full border-1 border-grey-100 rounded-[8px]">
            <div className="flex items-center">
                <FaBook className="mr-2 text-seco"/>
                <p className="mt-3 mb-3">Disciplinas em andamento</p>
            </div>

            <div className="h-[1px] w-full bg-grey-100"></div>
            
            {/*<p className="mt-5 mb-5">Nenhuma disciplina encontrada!</p>*/}
            <div className="w-full">
                <div className="p-4 w-full h-28 cursor-pointer" onClick={() => setShowDisciplines(prev => !prev)}>
                    <div className="pl-5 pt-3 w-full h-full shadow-[0_4px_5px_2px_rgba(0,0,0,0.2)]">
                        <p className="font-bold text-secondary-400">Computação de auto desempenho</p>
                        <p className="text-secondary-400">Ruan pablo ferreira da Silva</p>
                    </div>
                </div>
                {!showDisciplines
                    ? <p></p>
                    : <div className="w-full pl-4 pr-4">
                            <div className="flex flex-col w-full">
                                <div className="flex justify-between text-secondary-400">
                                    <p className="text-2xl">Frequência</p>
                                    <div className="flex ">
                                        <p className="mr-2">Faltas: 0</p>
                                        <p>Presenças: 0</p>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4 mt-1">
                                    <div className="bg-secondary-400 h-4 rounded-full" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                            <div className="mt-4 mb-4">
                                {/*<p>Nenhuma avaliação lançada.</p>*/}
                                <table className="table-auto w-full border border-gray-300 text-center">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2">#</th>
                                            <th className="border border-gray-300 px-4 py-2">Avaliação</th>
                                            <th className="border border-gray-300 px-4 py-2">Data</th>
                                            <th className="border border-gray-300 px-4 py-2">Max-Pontos</th>
                                            <th className="border border-gray-300 px-4 py-2">Nota</th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]">1</th>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]">Atividade avaliativa 1</th>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]">20/04/2025</th>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]">10</th>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]">8</th>
                                    </tr>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]">2</th>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]">Atividade avaliativa 2</th>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]">13/05/2025</th>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]">10</th>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]">8</th>
                                    </tr>
                                    <tr className="bg-amber-200">
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]"></th>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]"></th>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]"></th>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]">20</th>
                                        <th className="border border-gray-300 px-4 py-2 text-grey-200 text-[0.7rem]">16</th>
                                    </tr>
                                    
                                </table>
                            </div>
                        </div>
                }
            
            </div>
            
        </div>
    )
}

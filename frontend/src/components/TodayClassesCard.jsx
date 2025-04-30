import { useState } from "react";
import WeeklyTimeTable from "./WeeklyTimeTable";

export default function TodayClassesCard() {
    const [showTable, setShowTable ] = useState(false);
    
    return (
        <div className="flex flex-col justify-center items-center w-full border-1 border-grey-100 rounded-[8px] mt-5">
            <p className="mt-3 mb-3">Aulas de hoje (Dia da Semana)</p>
        
            <div className="h-[1px] w-full bg-grey-100"></div>
            {!showTable
              ? <p className="mt-5">Nenhuma aula para hoje!</p>
              : <WeeklyTimeTable />
            }
            
            <strong className="flex justify-center items-center w-full h-10 bg-grey-10">
                <button 
                    className="text-secondary-400 cursor-pointer"
                    onClick={() => setShowTable(prev => !prev) }
                    >
                    Semanal
                </button>
            </strong>
        </div>
    )
}

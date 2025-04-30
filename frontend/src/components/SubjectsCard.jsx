export default function SubjectsCard() {
    return (
        <div className="flex flex-col justify-center items-center w-full border-1 border-grey-100 rounded-[8px]">
            <p className="mt-3 mb-3">Disciplinas em andamento</p>

            <div className="h-[1px] w-full bg-grey-100"></div>
            
            <p className="mt-5 mb-5">Nenhuma disciplina encontrada!</p>
            <strong className="flex justify-center items-center w-full h-10 bg-grey-10">
                <button className="text-secondary-400 cursor-pointer">
                    Ver Todas
                </button>
            </strong>
        </div>
    )
}

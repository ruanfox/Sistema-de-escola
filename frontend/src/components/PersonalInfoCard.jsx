import Logo from "../assets/react.svg"

export default function PersonalInfoCard() {
    return (
        <div className="flex flex-col justify-center items-center w-full border-1 border-grey-100 rounded-[8px]">
            <img 
                src={Logo}
                alt="fala" 
                className="w-20 h-20 rounded-[100%] bg-gray-400 mt-3 mb-5"
            />
            <p className="">Ruan Pablo Ferreira da Silva</p>
            <p><strong className="size-bold">Matrícula:</strong> 1324646</p>
            <button className="bg-secondary-400 text-white w-32 h-10 rounded-2xl mt-2 mb-3 cursor-pointer">
                Visualizar
            </button>
        </div>
    )
}

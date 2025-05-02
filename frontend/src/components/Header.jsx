import { IoIosNotificationsOutline } from "react-icons/io";


export default function Header(){
    return(
        <header className="flex justify-between items-center w-full h-20 bg-grey-10 pr-32 pl-32">
            <div className="mr-12 text-[1rem]">
                <p></p>
            </div>
            <div className="flex items-center">
            <IoIosNotificationsOutline className="w-7 h-7 mr-12"/>
                <button className="bg-secondary-300 text-[14px] w-[7.5rem] h-10 text-white rounded-[0.5rem]">Sair</button>
            </div>
        </header>
    )
}
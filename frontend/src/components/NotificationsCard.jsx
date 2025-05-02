export default function NotificationsCard() {
    return (
        <div className="flex flex-col justify-center items-center w-full border-1 border-grey-100 rounded-[8px] mt-5">
            <p className="mt-3 mb-3">Notificações importantes</p>

            <div className="h-[1px] w-full bg-grey-100"></div>
            
            <p className="mt-5 mb-5">Nenhuma notificação encontrada!</p>
            <strong className="flex justify-center items-center w-full h-10 bg-grey-10 rounded-[8px]">
                <button className="text-secondary-400 cursor-pointer">
                    Ver Todos
                </button>
            </strong>
        </div>
    )
}

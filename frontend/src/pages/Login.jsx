export default function Login() {
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="flex flex-col items-center justify-center w-[32rem] h-[24rem] bg-white rounded-[px]">
                <h2 className="text-grey-300 font-bold text-[1rem]">Bem-vindo, faça login na sua conta!</h2>
                <input 
                    className=" border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3"
                    type="email" 
                    name="email" 
                    placeholder="Usuário"/>

                <input 
                    className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3"
                    type="password" 
                    name="password" 
                    placeholder="Senha"/>
                    
                <button
                    className="bg-secondary-400 text-white w-3xs h-11 mt-3.5 rounded-[4px]"
                    type="submit">
                        Entrar
                </button>
                <p className="text-[12px] text-grey-100 mt-3.5">Esqueceu a senha? <button className="text-[12px] text-secondary-400 font-bold">Recupere aqui</button></p>
            </form>
        </div>
    )
}
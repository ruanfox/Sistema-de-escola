export default function AddClasses({onClose}){
    return(
        <div className="w-2/3 h-[87%] bg-white absolute flex justify-center items-center">
            {/* Botão de fechar */}
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
                ×
            </button>
            <div className="w-4/5 h-9/12">
                <h1 className="text-[2rem] font-semibold text-grey-400">
                    Adicionar Classes
                </h1>
                <div className="overflow-y-auto h-full text-grey-200 text-[17px]">
                    <form action="" className="mt-8">
                        {/*divisão*/}
                        <div className="flex justify-between">
                            <div>
                                <label>Nome</label><br />
                                <input 
                                    type="text" 
                                    placeholder="Nome da turma"
                                    className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input"
                                    name="nome"
                                />
                            </div>

                            <div>
                                <label>Ecolaridade</label><br />
                                <select 
                                    className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs  h-11 mt-3.5 rounded-[4px] pl-3 input"
                                    name="escolaridade"
                                >
                                <option value="FUNDAMENTAL">Ensino Fundamental</option>
                                <option value="MEDIO">Ensino Médio</option>
                                </select>
                            </div>

                            <div>
                                <label>Turno</label><br />
                                <select 
                                    className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs  h-11 mt-3.5 rounded-[4px] pl-3 input"
                                    name="turno"
                                >
                                <option value="MANHA">Manhã</option>
                                <option value="TARDE">Tarde</option>
                                <option value="NOITE">Noite</option>
                                </select>
                            </div>
                        </div>

                        {/*divisão*/}
                        <div className="flex justify-between mt-4">
                            <div>
                                <label>Serie</label><br />
                                <select 
                                    className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs  h-11 mt-3.5 rounded-[4px] pl-3 input"
                                    name="serie"    
                                >
                                <option value="1">1° Ano</option>
                                <option value="2">2° Ano</option>
                                <option value="3">3° Ano</option>
                                <option value="4">4° Ano</option>
                                <option value="5">5° Ano</option>
                                <option value="6">6° Ano</option>
                                <option value="7">7° Ano</option>
                                <option value="8">8° Ano</option>
                                <option value="9">9° Ano</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="mt-auto pt-6">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
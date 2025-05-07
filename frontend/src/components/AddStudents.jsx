export default function AddStudents( {onClose} ){
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
                    Adicionar Estudantes
                </h1>
                <div className="overflow-y-auto h-full text-grey-200 text-[17px]">
                    <form action="" className="mt-8">
                        {/*divisão*/}
                        <div className="flex justify-between">
                            <div>
                                <label>Nome</label><br />
                                <input 
                                    type="text" 
                                    placeholder="Seu nome"
                                    className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>

                            <div>
                                <label>CPF</label><br />
                                <input type="text" placeholder="000.000.000-00"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>

                            <div>
                                <label>RG</label><br />
                                <input type="text" placeholder="Seu RG"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>
                        </div>

                        {/*divisão*/}
                        <div className="flex justify-between mt-4">
                            <div>
                                <label>Data de Nascimento</label><br />
                                <input type="date"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>

                            <div>
                                <label>Nacionalidade</label><br />
                                <input type="text" defaultValue="Brasileira"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>

                            <div>
                                <label>Naturalidade</label><br />
                                <input type="text" placeholder="Cidade natal"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>
                        </div>

                        {/*divisão*/}
                        <div className="flex justify-between mt-4">
                            <div>
                                <label>Telefone</label><br />
                                <input type="tel" placeholder="(xx) xxxxx-xxxx"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>

                            <div>
                                <label>Email</label><br />
                                <input type="email" placeholder="seu@email.com"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>
                            <div>
                                <label>Sexo</label><br />
                                <select className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs  h-11 mt-3.5 rounded-[4px] pl-3 input">
                                <option value="MASCULINO">Masculino</option>
                                <option value="FEMININO">Feminino</option>
                                </select>
                            </div>
                        </div>

                        {/*Endereço*/}      
                        <h2 className="text-2xl font-semibold mt-8 mb-8 text-grey-400">Endereço</h2>

                        <div className="flex justify-between mt-4">
                            <div>
                                <label>Cep</label><br />
                                <input 
                                    type="text" 
                                    placeholder="00000-000"
                                    className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>

                            <div>
                                <label>Rua</label><br />
                                <input type="text" placeholder="000.000.000-00"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>

                            <div>
                                <label>Numero</label><br />
                                <input type="text" placeholder="Seu RG"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div>
                                <label>Bairro</label><br />
                                <input 
                                    type="text" 
                                    placeholder="Seu nome"
                                    className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>

                            <div>
                                <label>Complemento</label><br />
                                <input type="text" placeholder="000.000.000-00"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>

                            <div>
                                <label>Cidade</label><br />
                                <input type="text" placeholder="Seu RG"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>
                        </div>
                        {/*Divisão*/}
                        <div className="flex justify-between mt-4">
                            <div>
                                <label>UF</label><br />
                                <input 
                                    type="text" 
                                    placeholder="Seu nome"
                                    className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>
                        </div>

                        {/*Responsavel*/}
                        <h2 className="text-2xl font-semibold mt-8 mb-8 text-grey-400">Responsavel</h2>
                        <div className="flex justify-between">
                            <div>
                                <label>Nome</label><br />
                                <input 
                                    type="text" 
                                    placeholder="Seu nome"
                                    className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>

                            <div>
                                <label>CPF</label><br />
                                <input type="text" placeholder="000.000.000-00"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>

                            <div>
                                <label>RG</label><br />
                                <input type="text" placeholder="Seu RG"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>
                        </div>

                        {/*divisão*/}
                        <div className="flex justify-between mt-4">
                            <div>
                                <label>Telefone</label><br />
                                <input type="cel" placeholder="Seu telefone"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>

                            <div>
                                <label>Email</label><br />
                                <input type="email" name="email"
                                className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs h-11 mt-3.5 rounded-[4px] pl-3 input" />
                            </div>

                            <div>
                                <label>Sexo</label><br />
                                <select className="border-1 border-grey-100 text-grey-200 text-[14px] w-3xs  h-11 mt-3.5 rounded-[4px] pl-3 input">
                                <option value="PAI">Pai</option>
                                <option value="MÃE">Mãe</option>
                                <option value="AVÓ">Avó</option>
                                <option value="AVÔ">Avô</option>
                                <option value="OUTRO">Outro</option>
                                </select>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Salvar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
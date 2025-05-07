import React from 'react';
import Iconreact from '../assets/Logo.jpg' 

export default function InformacaoPessoal() {

  return (
    <div className="flex flex-row p-8 justify-between">
        <div className="w-[48%] bg-white shadow-[0_4px_5px_3px_rgba(0,0,0,0.2)] rounded-lg p-6">
            <table className="min-w-full table-auto border border-gray-200">
                <thead>
                    <tr>
                        <th colspan="2" class="border bg-secondary-400 px-4 py-2 font-medium text-left">Endereço do Usuário</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium text-gray-600">ID</td>
                    <td className="border px-4 py-2">1</td>
                    </tr>
                    <tr>
                    <td className="border px-4 py-2 font-medium text-gray-600">CEP</td>
                    <td className="border px-4 py-2">39460-000</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium text-gray-600">Rua</td>
                    <td className="border px-4 py-2">Rua das Flores</td>
                    </tr>
                    <tr>
                    <td className="border px-4 py-2 font-medium text-gray-600">Número</td>
                    <td className="border px-4 py-2">123</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium text-gray-600">Bairro</td>
                    <td className="border px-4 py-2">Centro</td>
                    </tr>
                    <tr>
                    <td className="border px-4 py-2 font-medium text-gray-600">Complemento</td>
                    <td className="border px-4 py-2">Apto 101</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium text-gray-600">Cidade</td>
                    <td className="border px-4 py-2">Itacarambi</td>
                    </tr>
                    <tr>
                    <td className="border px-4 py-2 font-medium text-gray-600">UF</td>
                    <td className="border px-4 py-2">MG</td>
                    </tr>

                </tbody>
            </table>
        </div>

        <div className="w-3/6 bg-white shadow-[0_4px_5px_3px_rgba(0,0,0,0.2)] rounded-lg p-6">
            <img src={Iconreact} alt="Foto de perfil"  className='w-20 h-20 rounded-full m-auto mb-2'/>
            <div className='flex w-full justify-center mb-5'>
                <p>João da silva</p>
            </div>
            <table className="min-w-full table-auto border border-gray-200">
                <thead>
                    <tr>
                        <th colspan="2" class="border bg-secondary-400 px-4 py-2 font-medium text-left">Dados do Usuário</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium text-gray-600">ID</td>
                    <td className="border px-4 py-2">1</td>
                    </tr>
                    <tr>
                    <td className="border px-4 py-2 font-medium text-gray-600">CPF</td>
                    <td className="border px-4 py-2">123.456.789-00</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium text-gray-600">RG</td>
                    <td className="border px-4 py-2">MG-12.345.678</td>
                    </tr>
                    <tr>
                    <td className="border px-4 py-2 font-medium text-gray-600">Email</td>
                    <td className="border px-4 py-2">joao.silva@example.com</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium text-gray-600">Telefone</td>
                    <td className="border px-4 py-2">38992104012</td>
                    </tr>
                    <tr>
                    <td className="border px-4 py-2 font-medium text-gray-600">Data de Criação</td>
                    <td className="border px-4 py-2">2025-01-15</td>
                    </tr>
                    <tr>
                    <td className="border px-4 py-2 font-medium text-gray-600">Status</td>
                    <td className="border px-4 py-2">Ativo</td>
                    </tr>
                </tbody>
            </table>
        </div>

    
    </div>
  );
}

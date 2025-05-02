export default function WeeklyTimeTable() {
    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 text-center">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Horários</th>
                        <th className="border border-gray-300 px-4 py-2">Segunda</th>
                        <th className="border border-gray-300 px-4 py-2">Terça</th>
                        <th className="border border-gray-300 px-4 py-2">Quarta</th>
                        <th className="border border-gray-300 px-4 py-2">Quinta</th>
                        <th className="border border-gray-300 px-4 py-2">Sexta</th>
                        <th className="border border-gray-300 px-4 py-2">Sábado</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        "07:30 - 08:20",
                        "08:20 - 09:10",
                        "09:30 - 10:20",
                        "10:20 - 11:10",
                        "13:30 - 14:20",
                        "14:20 - 15:10",
                        "15:30 - 16:20",
                        "16:20 - 17:10",
                    ].map((time, index) => (
                        <tr key={index} className="even:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-medium">{time}</td>
                            {[...Array(6)].map((_, i) => (
                                <td key={i} className="border border-gray-300 px-4 py-2"></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

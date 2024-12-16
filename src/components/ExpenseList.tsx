import { Expense } from '../types/Expense';

interface Props {
	expenses: Expense[];
	onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
	if (expenses.length == 0) return null;

	return (
		<table className="w-full text-left table-auto min-w-max border border-gray-300 border-collapse">
			<thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th className="w-1/3 px-4 py-2 border border-gray-300">
						Description
					</th>
					<th className="w-1/4 px-4 py-2 border border-gray-300">Amount</th>
					<th className="w-1/4 px-4 py-2 border border-gray-300" colSpan={2}>
						Category
					</th>
				</tr>
			</thead>
			<tbody>
				{expenses.map((expense) => (
					<tr key={expense.id}>
						<td className="border border-gray-300 px-4 py-2">
							{expense.description}
						</td>
						<td className="border border-gray-300 px-4 py-2">
							€{expense.amount}
						</td>
						<td className="border border-gray-300 px-4 py-2">
							{expense.category}
						</td>
						<td className="border border-gray-300 px-4 py-2">
							<button
								className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
								onClick={() => onDelete(expense.id)}
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<td className="border border-gray-300 px-4 py-2">Total</td>
					<td className="border border-gray-300 px-4 py-2">
						€
						{expenses
							.reduce((acc, expense) => expense.amount + acc, 0)
							.toFixed(2)}
					</td>
					<td className="border border-gray-300 px-4 py-2" colSpan={2}></td>
				</tr>
			</tfoot>
		</table>
	);
};

export default ExpenseList;

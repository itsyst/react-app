import { Expense } from '../types/Expense';
import ExpenseList from './ExpenseList';
import { ExpenseFilter } from './ExpenseFilter';
import { Category } from '../types/Category';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import { FieldValues } from 'react-hook-form';

interface Props {
	expenses: Expense[];
	categories: Category[];
	onDelete: (id: number) => void;
}

const Products = ({ expenses, categories }: Props) => {
	const [getExpenses, setExpenses] = useState<Expense[]>(expenses);
	const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);
	const [selectedCategory, setSelectedCategory] = useState<string>('');

	const filterExpensesBasedOnCategory = (expenses: Expense[], category: string) => {
		setFilteredExpenses(category ? getExpenses.filter((expense) => expense.category === category) : expenses);
	};

	const handleSelectCategory = (category: string) => {
		setSelectedCategory(category);
		filterExpensesBasedOnCategory(getExpenses, category);
	};

	const handleDelete = (id: number) => {
		const updatedExpenses = getExpenses.filter((expense) => expense.id !== id);
		setExpenses(updatedExpenses);
		filterExpensesBasedOnCategory(updatedExpenses, selectedCategory);
	};

	const handleSubmit = (data: FieldValues) => {
		const newExpense: Expense = {
			...data,
			id: expenses.length + 1
		};

		const updatedExpenses = [newExpense, ...expenses];
		setExpenses(updatedExpenses);
		filterExpensesBasedOnCategory(updatedExpenses, selectedCategory);
		alert('Expense added successfully!');
	};

	return (
		<>
			<ExpenseForm onSubmit={handleSubmit} />
			<div className=' bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"'>
				{/* All Categories filter */}
				<div className="mb-4">
					<label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
						All categories
					</label>
					<ExpenseFilter categories={categories} onSelectCategory={handleSelectCategory} />
				</div>
			</div>
			<div className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
			</div>
		</>
	);
};

export default Products;

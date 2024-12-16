import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { categories } from '../data/category-data';

const schema = z.object({
	description: z.string().min(3, 'Description should be at least 3 characters').nonempty('Description is required'),
	amount: z.number({ invalid_type_error: 'Amount must be a number.' }).min(0.01, 'Amount must be positive.').max(100_000),
	category: z.string().nonempty('Category is required')
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
	onSubmit: (data: FieldValues) => void;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

	const handleFormSubmit = (data: FieldValues) => {
		onSubmit(data);
		reset(); // Reset the form to its initial state
	};

	return (
		<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(handleFormSubmit)}>
			{/* Description Field */}
			<div className="mb-4">
				<label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
					Description
				</label>
				<input
					className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
						errors.description ? 'border-red-500' : ''
					}`}
					id="description"
					type="text"
					placeholder="description"
					{...register('description', { required: true })}
				/>
				{errors.description && <p className="text-red-400 text-xs mt-2">{errors.description.message}</p>}
			</div>

			{/* Amount Field */}
			<div className="mb-4">
				<label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
					Amount
				</label>
				<input
					className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
						errors.amount ? 'border-red-500' : ''
					}`}
					id="amount"
					type="number"
					placeholder="Amount"
					{...register('amount', { valueAsNumber: true })}
				/>
				{errors.amount && <p className="text-red-400 text-xs mt-2">{errors.amount.message}</p>}
			</div>

			{/* Category Field */}
			<div className="mb-4">
				<label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
					Category
				</label>
				<select
					className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
						errors.category ? 'border-red-500' : ''
					}`}
					id="category"
					{...register('category')}
					defaultValue=""
				>
					<option value="" disabled>
						Select a category
					</option>
					{categories.map((category) => (
						<option key={category.id} value={category.name}>
							{category.name}
						</option>
					))}
				</select>
				{errors.category && <p className="text-red-400 text-xs mt-2">{errors.category.message}</p>}
			</div>

			{/* Submit Button */}
			<div className="flex items-center justify-between">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default ExpenseForm;

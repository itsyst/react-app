import { Category } from '../types/Category';

interface Props {
	categories: Category[];
	onSelectCategory: (category: string) => void;
}

export const ExpenseFilter = ({ categories, onSelectCategory }: Props) => {
	return (
		<select
			id="categories"
			className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			onChange={(event) => onSelectCategory(event?.target.value)}
		>
			<option value="">All Categories</option>
			{categories.map((category) => (
				<option value={category.name} key={category.id}>
					{category.name}
				</option>
			))}
		</select>
	);
};

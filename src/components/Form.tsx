import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
	name: z
		.string()
		.min(3, { message: 'Name must be at least 3 characters long.' }),
	age: z
		.number({ invalid_type_error: 'Age must be a number.' })
		.min(12, { message: 'Age must be greater than 12.' }),
	email: z.string().email({ message: 'Invalid email address.' })
});

type FormData = z.infer<typeof schema>;

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid }
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const onSubmit = (data: FieldValues) => {
		console.log('Form Data:', data);
		alert('Form submitted successfully!');
	};

	return (
		<form
			className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="flex flex-wrap -mx-3 mb-6">
				{/* Name Field */}
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="name"
					>
						Name
					</label>
					<input
						className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
							errors.name ? 'border-red-500' : ''
						}`}
						id="name"
						type="text"
						placeholder="Name"
						{...register('name')}
					/>
					{errors.name && (
						<p className="text-red-400 text-xs mt-2">{errors.name.message}</p>
					)}
				</div>

				{/* Age Field */}
				<div className="w-full md:w-1/2 px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="age"
					>
						Age
					</label>
					<input
						className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
							errors.age ? 'border-red-500' : ''
						}`}
						id="age"
						type="number"
						placeholder="Age"
						{...register('age', { valueAsNumber: true })}
					/>
					{errors.age && (
						<p className="text-red-400 text-xs mt-2">{errors.age.message}</p>
					)}
				</div>
			</div>

			{/* Email Field */}
			<div className="mb-4">
				<label
					htmlFor="email"
					className="block text-gray-700 text-sm font-bold mb-2"
				>
					Email
				</label>
				<input
					className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
						errors.email ? 'border-red-500' : ''
					}`}
					id="email"
					type="email"
					placeholder="Email"
					{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
				/>
				{errors.email && (
					<p className="text-red-400 text-xs mt-2">{errors.email.message}</p>
				)}
			</div>

			{/* Submit Button */}
			<div className="flex items-center justify-between">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					disabled={!isValid}
					type="submit"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

export default Form;

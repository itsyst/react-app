import { FormEvent, useState } from 'react';
import { Person } from '../types/Person';

const Form = () => {
	const [person, setPerson] = useState<Person>({});

	const handleSubmit = (event: FormEvent) => {
		event?.preventDefault();
		console.log(person);
	};

	return (
		<form
			className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
			onSubmit={handleSubmit}
		>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="name"
					>
						Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
						placeholder="Name"
						value={person.name}
						onChange={(event) => {
							setPerson({ ...person, name: event.target.value });
						}}
					/>
				</div>
				<div className="w-full md:w-1/2 px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="age"
					>
						Age
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="age"
						type="number"
						placeholder="Age"
						value={person.age}
						onChange={(event) =>
							setPerson({ ...person, age: parseInt(event.target.value) })
						}
					/>
				</div>
			</div>
			<div className="mb-4">
				<label
					htmlFor="email"
					className="block text-gray-700 text-sm font-bold mb-2"
				>
					Email
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="name"
					type="email"
					placeholder="Email"
					value={person.email}
					onChange={(event) =>
						setPerson({ ...person, email: event.target.value })
					}
				/>
			</div>
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

export default Form;

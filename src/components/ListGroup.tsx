import { useState } from 'react';
import { Person } from '../types/Person';

interface Props {
	items: Person[];
	heading: string;
	onSelectItem: (item: Person) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
	const [selectItem, setSelectItem] = useState(-1);

	return (
		<>
			<h1 className="text-xl font-bold">{heading}</h1>
			{items.length === 0 && <p>No items found</p>}
			<ul role="list" className="divide-y divide-slate-200">
				{items.map((person, index) => (
					<li
						key={person.email}
						// Conditional styling for active item
						className={`flex items-center justify-between gap-x-6 py-5 px-5 cursor-pointer rounded-lg ${
							selectItem === index
								? 'bg-slate-200'
								: 'hover:bg-slate-100 transition'
						}`}
						onClick={() => {
							setSelectItem(index);
							onSelectItem(person);
						}}
					>
						<div className="flex items-center gap-x-4">
							<img
								src={person.imageUrl}
								alt={person.name}
								className="h-12 w-12 rounded-full bg-gray-50"
							/>
							<div className="min-w-0 flex-auto">
								<p className="text-sm font-semibold leading-6 text-gray-900">
									{person.name}
								</p>
								<p className="mt-1 truncate text-xs leading-5 text-gray-500">
									{person.email}
								</p>
							</div>
						</div>
						<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
							<p className="text-sm leading-6 text-gray-900">{person.role}</p>
							{person.lastSeen ? (
								<p className="mt-1 text-xs leading-5 text-gray-500">
									Last seen{' '}
									<time dateTime={person.lastSeenDateTime}>
										{person.lastSeen}
									</time>
								</p>
							) : (
								<div className="mt-1 flex items-center gap-x-1.5">
									<div className="flex-none rounded-full bg-emerald-500/20 p-1">
										<div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
									</div>
									<p className="text-xs leading-5 text-gray-500">Online</p>
								</div>
							)}
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;

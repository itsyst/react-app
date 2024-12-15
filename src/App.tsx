import { useState } from 'react';
import { people } from './data/inter-data';
import { Person } from './types/Person';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button';
import './App.css';

function App() {
	const heading = 'People';
	const type = 'info';
	const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

	const handleSelectItem = (item: Person) => {
		console.log(JSON.stringify(item, null, 2));
		setSelectedPerson(item);
	};

	const handleCloseAlert = () => {
		setSelectedPerson(null); // Close alert
	};

	return (
		<>
			<ListGroup
				items={people}
				heading={heading}
				onSelectItem={handleSelectItem}
			/>
			{selectedPerson && (
				<Alert type={type}>
					<p>
						You selected
						<span className="font-bold ml-2 text-black">
							{selectedPerson.name}
						</span>
					</p>
					<Button onClose={handleCloseAlert}>Close</Button>
				</Alert>
			)}
		</>
	);
}

export default App;

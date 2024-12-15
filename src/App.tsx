import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import { people, content } from './data/inter-data';
import { Person } from './types/Person';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button';
import './App.css';
import ExpandableText from './components/ExpandableText';
import Forms from './components/Forms';
import Nav from './components/Nav';

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
		<Router>
			<div className="p-5">
				<Nav/>
				<Routes>
					<Route
						path="/"
						element={
							<>
								{/* ListGroup Component */}
								<ListGroup
									items={people}
									heading={heading}
									onSelectItem={handleSelectItem}
								/>
								{/* Alert Component */}

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
								{/* ExpandableText Component */}
								<ExpandableText>{content}</ExpandableText>
							</>
						}
					/>

					<Route path="/forms" element={<Forms />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

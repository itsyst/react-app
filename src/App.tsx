import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { people, content } from './data/people-data';
import { Person } from './types/Person';
import { expenses } from './data/expense-data';
import { Expense } from './types/Expense';
import { categories } from './data/category-data';
import Alert from './components/Alert';
import Button from './components/Button';
import ExpandableText from './components/ExpandableText';
import Forms from './components/Form';
import ListGroup from './components/ListGroup';
import Nav from './components/Nav';
import Products from './components/Products';
import './App.css';

function App() {
	const heading = 'People';
	const type = 'info';
	const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
	const [getExpenses, setExpenses] = useState<Expense[]>(expenses);

	const handleSelectItem = (item: Person) => {
		setSelectedPerson(item);
	};

	const handleCloseAlert = () => {
		setSelectedPerson(null); // Close alert
	};

	return (
		<Router>
			<div className="p-5">
				<Nav />
				<Routes>
					<Route
						path="/"
						element={
							<>
								{/* ListGroup Component */}
								<ListGroup items={people} heading={heading} onSelectItem={handleSelectItem} />
								{/* Alert Component */}

								{selectedPerson && (
									<Alert type={type}>
										<p>
											You selected
											<span className="font-bold ml-2 text-black">{selectedPerson.name}</span>
										</p>
										<Button onClose={handleCloseAlert}>Close</Button>
									</Alert>
								)}
								{/* ExpandableText Component */}
								<ExpandableText>{content}</ExpandableText>
							</>
						}
					/>
					<Route
						path="/products"
						element={
							<>
								<h1 className="text-xl font-bold">Products</h1>
								<div className="w-full mt-2">
									<Products expenses={getExpenses} categories={categories} onDelete={(id) => setExpenses(getExpenses.filter((e) => e.id !== id))} />
								</div>
							</>
						}
					/>
					<Route
						path="/forms"
						element={
							<>
								<h1 className="text-xl font-bold">Forms</h1>
								<div className="w-full mt-2">
									<Forms />
								</div>
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

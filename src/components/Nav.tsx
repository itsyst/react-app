import { Link } from 'react-router-dom';
import { Links } from '../data/nav-links';

const Nav = () => {
	return (
		<nav className="mb-4">
			{Links.map((link) => (
				<Link to={link.to} className="mr-4 text-blue-600 underline" key={link.to}>
					<p className="pr-2 inline-flex" key={link.id}>
						{link.name}
					</p>
				</Link>
			))}
		</nav>
	);
};

export default Nav;

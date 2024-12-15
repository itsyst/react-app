import { ReactNode } from 'react';
import { alertIcons } from '../utils/alertIcons';
import { alertStyles } from '../utils/alertStyles';

interface Props {
	children: ReactNode;
	type?: 'success' | 'error' | 'warning' | 'info';
}

const Alert = ({ children, type = 'warning' }: Props) => {
	return (
		<div
			className={`flex items-center justify-between ${alertStyles[type]} text-white text-sm font-bold px-4 py-3 mt-3`}
			role="alert"
		>
			{alertIcons[type]}
			{children}
		</div>
	);
};

export default Alert;

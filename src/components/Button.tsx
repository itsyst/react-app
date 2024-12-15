import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	bgColor?: string;
	onClose: () => void;
}

const Button = ({ children, onClose, bgColor = 'slate-50' }: Props) => {
	return (
		<button
			className={`ml-auto text-sm bg-${bgColor} text-black px-2 py-1 rounded`}
			onClick={onClose}
		>
			{children}
		</button>
	);
};

export default Button;

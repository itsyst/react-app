import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	bgColor?: string;
	onClose?: () => void;
	onToggleContent?: () => void;
}

const Button = ({
	children,
	bgColor = 'bg-slate-50',
	onClose,
	onToggleContent
}: Props) => {
	const handleClick = () => {
		if (onClose) onClose();
		if (onToggleContent) onToggleContent();
	};

	return (
		<button
			className={`ml-auto text-sm ${bgColor} text-black px-2 py-1 rounded`}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

export default Button;

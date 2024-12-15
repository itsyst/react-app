import { useState } from 'react';
import Button from './Button';

interface Props {
	children: string;
	maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 180 }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleToggle = () => {
		setIsExpanded(!isExpanded);
	};

	if (children.length <= maxChars) {
		return <div className="mt-2 px-5 text-gray-500">{children}</div>;
	}

	return (
		<div className="mt-2 px-5 divide-y divide-slate-200 text-gray-500">
			{isExpanded ? children : `${children.substring(0, maxChars)}...`}
			<Button onToggleContent={handleToggle} bgColor="bg-transparent underline">
				{isExpanded ? 'Less' : 'More'}
			</Button>
		</div>
	);
};

export default ExpandableText;

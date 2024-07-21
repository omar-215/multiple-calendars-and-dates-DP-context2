import { Button } from '@headlessui/react';
import React, { FC } from 'react';

type Props = {
	onCancel?: () => void;
	onSave?: () => void;
};

export const CalendarFooter: FC<Props> = ({ onCancel, onSave }) => {
	const buttonClassNames =
		'bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full';

	return (
		<div className="flex justify-between my-2">
			<Button className={buttonClassNames} onClick={onCancel}>
				Cancel
			</Button>
			<Button className={buttonClassNames} onClick={onSave}>
				Save
			</Button>
		</div>
	);
};

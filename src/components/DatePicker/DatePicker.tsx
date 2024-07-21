import { DatePickerProvider, DPUserConfig } from '@rehookify/datepicker';
import { PropsWithChildren, FC, useState } from 'react';

type DatePickerProps = PropsWithChildren & {
	config: Omit<DPUserConfig, 'selectedDates' | 'onDatesChange'>;
	selectedDates: Date[];
	onDatesChange: (dates: Date[]) => void;
};

export const DatePicker: FC<DatePickerProps> = ({
	children,
	config,
	selectedDates,
	onDatesChange,
}) => {
	return (
		<DatePickerProvider
			config={{
				selectedDates,
				onDatesChange,
				...config,
			}}
		>
			{children}
			{/* section open */}
			{/*   calendar header */}
			{/*   calendar content */}
			{/*   calendar footer */}
			{/* section close */}
		</DatePickerProvider>
	);
};

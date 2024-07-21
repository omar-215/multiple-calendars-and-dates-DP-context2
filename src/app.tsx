import {
	DatePickerProvider,
	DatePickerStateProvider,
	DPUserConfig,
	useDatePicker,
	useDatePickerContext,
} from '@rehookify/datepicker';
import { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Button, Calendar, Months, Years } from './components';

const IS_RANGE = true;
// const IS_RANGE = false;

export const App = () => {
	const [selectedDates, onDatesChange] = useState<Date[]>([]);

	const config: DPUserConfig = {
		selectedDates,
		onDatesChange,
		dates: {
			mode: IS_RANGE ? 'range' : 'multiple',
			toggle: true,
		},
		calendar: {
			mode: 'fluid',
		},
	};
	const { data, propGetters } = useDatePicker(config);

	return (
		<div className="block p-4 border border-slate-300 rounded shadow-xs shadow shadow-slate-300">
			<h1 className="text-2xl w-full text-center mb-6">
				{data.formattedDates?.length > 0 && data.formattedDates.join(' , ')}
			</h1>
			<main className="grid grid-cols-2 gap-x-6 gap-y-6">
				<Calendar data={data} propGetters={propGetters} />
				<div />
				<Months data={data} propGetters={propGetters} />
				<Years data={data} propGetters={propGetters} />
			</main>
		</div>
	);
};

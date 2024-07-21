import {
	DatePickerProvider,
	DatePickerStateProvider,
	useDatePickerContext,
} from '@rehookify/datepicker';
import { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Button, Calendar, Months, Years } from './components';

const IS_RANGE = true;
// const IS_RANGE = false;

function Root() {
	const {
		data: { calendars, formattedDates, selectedDates },
		propGetters: { addOffset, subtractOffset },
	} = useDatePickerContext();

	const [start, end] = formattedDates;

	return (
		<div className="block p-4 border border-slate-300 rounded shadow-xs shadow shadow-slate-300">
			<h1 className="text-2xl w-full text-center mb-6">
				{formattedDates?.length > 0 && formattedDates.join(' , ')}{' '}
			</h1>
			<h1 className="text-2xl w-full text-center mb-6">
				{start ? start : '...'}&nbsp; - &nbsp;{end ? end : '...'}
			</h1>
			<main className="grid grid-cols-2 gap-x-6 gap-y-6">
				<Calendar />
				<div />
				<Months />
				<Years />
			</main>
		</div>
	);
}

export const App = () => {
	const now = new Date();
	const Y = now.getFullYear();
	const M = now.getMonth();
	const D = now.getDate();

	const minDate = new Date(Y, M - 3, 1);
	const maxDate = new Date(Y, M + 3, 0);

	const [selectedDates, onDatesChange] = useState<Date[]>([]);
	// const [offsetDate, onOffsetChange] = useState<Date>(now);

	const handleSetSelectDates = (dates: Date[]) => {
		// if the selected date is only one and the date is less than the selected date
		if (IS_RANGE && selectedDates.length === 1 && dates[0] < selectedDates[0]) {
			onDatesChange([]);
			return;
		}

		if (IS_RANGE && selectedDates.length === 2) {
			onDatesChange([]);
			return;
		}

		onDatesChange(dates);
	};

	// const handleOffsetChange = (date: Date) => {
	// 	const isChangeInYear = offsetDate.getFullYear() !== date.getFullYear();
	// 	const isChangeInMonth = offsetDate.getMonth() !== date.getMonth();

	// 	// if the change of offset is only in year
	// 	// or the month is not january or december then change the month
	// 	if (isChangeInYear && date.getMonth() !== 0 && date.getMonth() !== 11) {
	// 		date.setMonth(offsetDate.getMonth());
	// 	}

	// 	onOffsetChange(date);
	// };

	const RangeProvider = (
		<DatePickerProvider
			config={{
				selectedDates,
				onDatesChange: handleSetSelectDates,
				// offsetDate,
				// onOffsetChange: handleOffsetChange,
				dates: {
					mode: 'range',
					// minDate,
					// maxDate,
					toggle: true,
					// exclude: []
				},
				years: {
					mode: 'decade',
					step: 2,
				},
				calendar: {
					mode: 'fluid',
				},
			}}
		>
			<Root />
		</DatePickerProvider>
	);

	const MultipleProvider = (
		<DatePickerProvider
			config={{
				selectedDates,
				onDatesChange,
				dates: {
					mode: 'multiple',
					minDate,
					maxDate,
					toggle: true,
				},
				calendar: {
					startDay: 1,
					// 	// offsets: [0],
				},
			}}
		>
			<Root />
		</DatePickerProvider>
	);

	return IS_RANGE ? RangeProvider : MultipleProvider;
};

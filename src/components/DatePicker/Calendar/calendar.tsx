import { FC } from 'react';
import { DPData, DPPropGetters } from '@rehookify/datepicker';

import { getDayClassName } from '../../../classnames-utils';
import { Button } from '../../Button/button';
import { Section } from '../../Section/section';
import './calender.css';
import { CalendarHeader } from './calendar-header';
import { CalendarFooter } from './calendar-footer';

interface CalendarProps {
	onCancel?: () => void;
	onSave?: () => void;
	data: DPData;
	propGetters: DPPropGetters;
}

export const Calendar: FC<CalendarProps> = ({
	data,
	propGetters,
	onCancel,
	onSave,
}) => {
	const {
		weekDays,
		calendars: [defaultCalendar],
	} = data;
	const { days } = defaultCalendar;

	const { dayButton } = propGetters;

	return (
		<Section>
			<CalendarHeader data={data} propGetters={propGetters} />
			<div className="grid grid-cols-7 gap-y-2 mb-2 items-center h-8">
				{weekDays.map((d) => (
					<p className="text-xs text-center" key={d}>
						{d}
					</p>
				))}
			</div>
			<main className="grid grid-cols-7 gap-y-2">
				{days.map((d) => (
					<Button
						key={d.$date.toString()}
						className={getDayClassName('w-8 text-xs', d)}
						{...dayButton(d)}
					>
						{d.day}
					</Button>
				))}
			</main>
			<CalendarFooter onCancel={onCancel} onSave={onSave} />
		</Section>
	);
};

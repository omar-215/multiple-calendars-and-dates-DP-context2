import { FC, PropsWithChildren } from 'react';
import { SectionHeader } from '../../Section/section-header';
import {
	DPData,
	DPPropGetters,
	useDatePickerContext,
} from '@rehookify/datepicker';
import { Button } from '../../Button/button';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { DropDown } from '../../DropDown';
import {
	getMonthClassName,
	getYearsClassName,
} from '../../../classnames-utils';

type Props = PropsWithChildren & {
	data: DPData;
	propGetters: DPPropGetters;
};

export const CalendarHeader: FC<Props> = ({ data, propGetters, children }) => {
	const {
		calendars: [defaultCalendar],
		months,
		years,
	} = data;

	const { subtractOffset, addOffset, monthButton, yearButton } = propGetters;

	const { month, year } = defaultCalendar;

	const MonthsDropDown = (
		<DropDown
			label={month}
			items={months.map((m) => ({
				label: m.month,
				props: {
					...monthButton(m),
					className: getMonthClassName('text-xs w-full', m),
					key: m.month + year,
				},
			}))}
		/>
	);

	const YearsDropDown = (
		<DropDown
			label={year}
			items={years.map((y) => {
				const isActiveYear = year === y.$date.getFullYear().toString();

				return {
					label: y.year.toString(),
					props: {
						...yearButton(y),
						className: getYearsClassName('text-xs w-full', {
							...y,
							// active: isActiveYear,
						}),
						key: y.year,
					},
				};
			})}
		/>
	);

	return (
		<SectionHeader className="grid-cols-4 w-full">
			<Button className="w-8" {...subtractOffset({ months: 1 })}>
				<IoChevronBack />
			</Button>
			{MonthsDropDown}
			{YearsDropDown}
			<Button className="w-8" {...addOffset({ months: 1 })}>
				<IoChevronForward />
			</Button>
		</SectionHeader>
	);
};

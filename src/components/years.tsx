import {
	DPData,
	DPPropGetters,
	useDatePickerContext,
} from '@rehookify/datepicker';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

import { getYearsClassName } from '../classnames-utils';
import { Section } from './Section/section';
import { SectionHeader } from './Section/section-header';
import { Button } from './Button/button';
import { FC } from 'react';
type Props = {
	data: Pick<DPData, 'years' | 'calendars'>;
	propGetters: Pick<
		DPPropGetters,
		'previousYearsButton' | 'nextYearsButton' | 'yearButton'
	>;
};
export const Years: FC<Props> = (props) => {
	const {
		data: {
			years,
			calendars: [defaultCalendar],
		},
		propGetters: { previousYearsButton, nextYearsButton, yearButton },
	} = props;

	const { year } = defaultCalendar;

	return (
		<Section>
			<SectionHeader>
				<Button className="w-8" {...previousYearsButton()}>
					<IoChevronBack />
				</Button>
				<p className="text-center text-sm">
					{`${years[0].year} - ${years[years.length - 1].year}`}
				</p>
				<Button className="w-8" {...nextYearsButton()}>
					<IoChevronForward />
				</Button>
			</SectionHeader>
			<main className="grid grid-cols-3 items-center gap-x-2 gap-y-2">
				{years.map((y) => (
					<Button
						key={y.$date.toString()}
						className={getYearsClassName('text-xs', {
							...y,
							// active: year === y.$date.getFullYear().toString(),
						})}
						{...yearButton(y)}
					>
						{y.year}
					</Button>
				))}
			</main>
		</Section>
	);
};

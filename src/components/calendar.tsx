import { FC, ReactNode } from 'react';
import { DPCalendar, useDatePickerContext } from '@rehookify/datepicker';

import { getDayClassName } from '../classnames-utils';
import { Button } from './button';
import { Section } from './section';
import { SectionHeader } from './section-header';

interface CalendarProps {
    prevButton?: ReactNode;
    nextButton?: ReactNode;
    calendar: DPCalendar;
}

export const Calendar: FC<CalendarProps> = ({ prevButton, nextButton, calendar }) => {
    const { data: { weekDays }, propGetters: { dayButton } } = useDatePickerContext();
    const { days, month } = calendar;
    return (
        <Section>
            <SectionHeader>
            {prevButton || <div />}
            <p className="text-center text-sm">{month}</p>
            {nextButton || <div />}
            </SectionHeader>
            <div className="grid grid-cols-7 gap-y-2 mb-2 items-center h-8">
            {weekDays.map((d) => (
                <p className="text-xs text-center">{d}</p>
            ))}
            </div>
            <main className="grid grid-cols-7 gap-y-2">
            {days.map((d) => (
                <Button 
                key={d.$date.toString()} 
                className={getDayClassName("w-8 text-xs", d)}
                {...dayButton(d)}
                >
                {d.day}
                </Button>
            ))}
            </main>
        </Section>
    );
}
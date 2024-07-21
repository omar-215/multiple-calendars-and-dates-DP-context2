import { DPDay, DPMonth, DPYear } from '@rehookify/datepicker';
import clsx from 'clsx';

export const getDayClassName = (
	className: string,
	{ selected, disabled, inCurrentMonth, now, range }: DPDay,
) =>
	clsx('day', className, range, {
		'bg-slate-700 text-white hover:bg-slate-700 opacity-100': selected,
		'opacity-25 cursor-not-allowed': disabled,
		'opacity-50': !inCurrentMonth,
		'border border-slate-500': now,
	});

export const getMonthClassName = (
	className: string,
	{ selected, now, disabled, month, $date, active }: DPMonth,
) => {
	return clsx(className, {
		// 'bg-red-700 text-white hover:bg-red-700 opacity-100': selected,
		// 'border border-slate-500': now,
		'opacity-25 cursor-not-allowed': disabled,
		'bg-blue-900 text-white hover:bg-blue-900 opacity-100': active,
	});
};

export const getYearsClassName = (
	className: string,
	{ selected, now, disabled, active, $date }: DPYear,
	activated: boolean = false,
) => {
	return clsx(className, {
		// 'bg-slate-700 text-white hover:bg-slate-700 opacity-100': selected,
		'border border-slate-500': now,
		'opacity-25 cursor-not-allowed': disabled,
		'bg-red-900 text-white hover:bg-red-900 opacity-100': active,
	});
};

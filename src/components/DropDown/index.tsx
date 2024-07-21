import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { DPUseMonthsPropGetters } from '@rehookify/datepicker';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import { Button } from '../Button/button';

type DropDownProps = PropsWithChildren & {
	label: string;
	items: {
		label: string;
		props: any;
	}[];
};

export const DropDown: FC<DropDownProps> = ({ children, label, items }) => {
	console.log(items);
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<MenuButton className="border-0 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
					{label}
					<IoChevronDownCircleOutline
						aria-hidden="true"
						className="-mr-1 h-5 w-5 text-gray-400"
					/>
				</MenuButton>
			</div>

			<MenuItems
				transition
				className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
			>
				<div className="py-1">
					{items.map((item, index) => (
						<MenuItem key={index}>
							<Button {...item.props}>{item.label}</Button>
						</MenuItem>
					))}
				</div>
			</MenuItems>
		</Menu>
	);
};

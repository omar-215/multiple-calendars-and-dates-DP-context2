# Notes From Production

- custom logic for handling when the 2nd date is before the 1st date in the range picker :

```jsx
const onDatesChange = (dates: Date[]) => {
	// if `range` and select date less than the selected date, reset the selected date
	if (
		mode === 'range' &&
		selectedDates?.length === 1 &&
		dates[0] < selectedDates[0]
	) {
		setSelectedDates([dates[0]]);
	} else {
		setSelectedDates(dates);
	}

	if (withConfirmation) return;

	// If no confirmation is needed, call onSave immediately
	if (mode === 'single' && dates.length === 1) {
		onSave(dates[0]);
		return;
	}

	if (mode === 'range' && dates.length === 2) {
		onSave(dates);
	}
};
```

# notes

- in case of handling our custom logic for the range picker :

```jsx
const [selectedDates, onDatesChange] = useState<Date[]>([]);

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

config={
  selectedDates,
  onDatesChange: handleSetSelectDates,
}

```

- in case of handling the offset manually use the following snippet:

```jsx
const [offsetDate, onOffsetChange] = useState < Date > now;

const handleOffsetChange = (date: Date) => {
	const isChangeInYear = offsetDate.getFullYear() !== date.getFullYear();
	const isChangeInMonth = offsetDate.getMonth() !== date.getMonth();

	// if the change of offset is only in year
	// or the month is not january or december then change the month
	if (isChangeInYear && date.getMonth() !== 0 && date.getMonth() !== 11) {
		date.setMonth(offsetDate.getMonth());
	}

	onOffsetChange(date);
};

// in the component
config = {
	offsetDate,
	onOffsetChange: handleOffsetChange,
};
```

- in case of `min/max`

```jsx
const now = new Date();
const Y = now.getFullYear();
const M = now.getMonth();
const D = now.getDate();

const minDate = new Date(Y, M - 3, 1);
const maxDate = new Date(Y, M + 3, 0);

config = {
	minDate,
	maxDate,
};
```

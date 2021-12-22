import { DateTime } from 'luxon'

// // Sets the correct names for year, month and day
// Settings.defaultOutputCalendar = 'persian'
// Sets the correct date format
// Settings.defaultLocale = 'fa-IR'

/**
 * Available DateTimeFormat options:
 *		weekday: 'narrow' | 'short' | 'long',
 *		era: 'narrow' | 'short' | 'long',
 *		year: 'numeric' | '2-digit',
 *		month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
 *		day: 'numeric' | '2-digit',
 *		hour: 'numeric' | '2-digit',
 *		minute: 'numeric' | '2-digit',
 *		second: 'numeric' | '2-digit',
 *		timeZoneName: 'short' | 'long',
 *		timeZone: 'Asia/Shanghai',
 *		hour12: true | false,
 *
 */

const dateFormatOptions = {
	weekday: 'long',
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
	hour12: false,
}

/**
 * Converts a timestamp to an object of locale date parts.
 *
 * @param {Number} timestamp Timestamp without the milliseconds.
 * @return {object} An object with date parts and their locale values.
 */
export const getDatePartsFromTS = (timestamp) => {
	const luxDate = DateTime.fromSeconds(Number(timestamp))

	const numericalParts = ['year', 'month', 'day']

	const filteredParts = luxDate
		.toLocaleParts(dateFormatOptions)
		.filter((part) => {
			return part.type !== 'literal'
		})
		.reduce((accu, curr) => {
			return {
				...accu,
				[curr.type]: numericalParts.includes(curr.type)
					? Number(curr.value)
					: curr.value,
			}
		}, {})

	filteredParts.dateString = `${filteredParts.year}/${filteredParts.month}/${filteredParts.day}`
	filteredParts.dateTimeString = luxDate.toISO()

	return filteredParts
}

/**
 * Calculates the correct date in future from now.
 *
 * @param {{days: Number, months: Number, years: Number}} date Future date as on object of numbers.
 * @return {object} An object with numeric date parts.
 */
export const calcDateInFuture = ({ days, months, years }) => {
	const luxDate = DateTime.now()
		.plus({
			days,
			months,
			years,
		})
		.toLocaleParts()
		.filter((part) => {
			return part.type !== 'literal'
		})
		.reduce((accu, curr) => {
			return {
				...accu,
				[curr.type]: Number(curr.value),
			}
		}, {})

	return luxDate
}

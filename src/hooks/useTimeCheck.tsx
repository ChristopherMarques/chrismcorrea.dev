type RelativeTimeFormatUnit =
	| 'second'
	| 'minute'
	| 'hour'
	| 'day'
	| 'week'
	| 'month'
	| 'quarter'
	| 'year'

export type TimeCheckProps = {
	time: number
	type: RelativeTimeFormatUnit
	lang: string
}

export const useTimeCheck = ({ time, type, lang }: TimeCheckProps) => {
	const rt = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })
	return { time: rt.format(time, type) }
}

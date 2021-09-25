import { useRouter } from 'next/router';
import Head from 'next/head';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultTitle';

export default function FilteredEvents() {
	const router = useRouter();
	const query = router.query.slug;
	if (!query) return <p className="error-message">Loading...</p>;
	const year = +query[0];
	const month = +query[1];

	if (isNaN(year) || isNaN(month) || year < 2021 || year > 2029 || month < 1 || month > 12) {
		return (
			<>
				<Head>
					<title>Next Events | FilteredEvents</title>
				</Head>
				<p className="error-message">Invalid filters. Please adjust your values!</p>;
			</>
		);
	}

	const filteredEvents = getFilteredEvents({ year, month });

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<Head>
					<title>Next Events | FilteredEvents</title>
				</Head>
				<p className="error-message">No events found for the chosen filters!</p>;
			</>
		);
	}

	const date = new Date(year, month - 1);

	return (
		<>
			<Head>
				<title>Next Events | FilteredEvents</title>
			</Head>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />;
		</>
	);
}

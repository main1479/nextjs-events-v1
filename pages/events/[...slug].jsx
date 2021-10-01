import Head from 'next/head';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/ResultTitle';
import Button from '../../components/ui/Button';

export default function FilteredEvents({ filteredEvents, invalidFilters, date }) {
	if (invalidFilters) {
		return (
			<>
				<Head>
					<title>Next Events | FilteredEvents</title>
				</Head>
				<p className="error-message">Invalid filters. Please adjust your values!</p>;
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<Head>
					<title>Next Events | FilteredEvents</title>
				</Head>
				<p className="error-message">No events found for the chosen filters!</p>;
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	return (
		<>
			<Head>
				<title>Next Events | FilteredEvents</title>
			</Head>
			<ResultsTitle date={new Date(date.year, date.month - 1)} />
			<EventList items={filteredEvents} />;
		</>
	);
}

export const getServerSideProps = async ({ params }) => {
	const { slug } = params;
	const year = +slug[0];
	const month = +slug[1];

	if (isNaN(year) || isNaN(month) || year < 2021 || year > 2029 || month < 1 || month > 12) {
		return {
			props: {
				invalidFilters: true,
			},
		};
	}
	const res = await fetch('https://max-s-nextjs-course-default-rtdb.firebaseio.com/events.json');
	const events = await res.json();
	const filteredEvents = events.filter((event) => {
		const eventDate = new Date(event.date);
		return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
	});
	return {
		props: {
			filteredEvents,
			date: {
				year,
				month,
			},
		},
	};
};

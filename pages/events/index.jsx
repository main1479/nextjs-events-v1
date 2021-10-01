import Head from 'next/head';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventSearch';

export default function index({ events }) {
	if (!events)
		return (
			<>
				<p className="error-message">Loading...</p>
			</>
		);

	return (
		<>
			<Head>
				<title>Next Events | All Events</title>
			</Head>
			<EventsSearch />
			<EventList items={events} />
		</>
	);
}

export const getStaticProps = async () => {
	const res = await fetch('https://max-s-nextjs-course-default-rtdb.firebaseio.com/events.json');
	const events = await res.json();
	return {
		props: {
			events,
		},
		revalidate: 1800,
	};
};

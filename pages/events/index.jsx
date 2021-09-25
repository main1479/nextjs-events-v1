import Head from 'next/head';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventSearch';
import { getAllEvents } from '../../dummy-data';

export default function index() {
	const events = getAllEvents();

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

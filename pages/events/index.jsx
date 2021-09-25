import Head from 'next/head';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventSearch';
import { getAllEvents } from '../../dummy-data';

const events = getAllEvents();

export default function index() {
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

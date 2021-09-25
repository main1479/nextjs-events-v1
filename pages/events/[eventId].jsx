import { useRouter } from 'next/router';
import Head from 'next/head';
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventContent from '../../components/event-detail/EventContent';
import { getEventById } from '../../dummy-data';
import Button from '../../components/ui/Button';

export default function EventDetails() {
	const router = useRouter();
	const eventId = router.query.eventId;
	const event = getEventById(eventId);
	if (!event)
		return (
			<>
				<Head>
					<title>Next Events | Events</title>
				</Head>
				<p className="error-message">No event found with that ID!</p>;
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);

	return (
		<>
			<Head>
				<title>Next Events | {event.title}</title>
			</Head>
			<EventSummary title={event.title} />
			<EventLogistics {...event} />
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	);
}

import Head from 'next/head';
import EventSummary from '../../components/event-detail/EventSummary';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventContent from '../../components/event-detail/EventContent';
import Comments from '../../components/input/Comments';
import Button from '../../components/ui/Button';

export default function EventDetails({ event }) {
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
			<Comments eventId={event.id} />
		</>
	);
}

export const getStaticPaths = async () => {
	const res = await fetch('https://max-s-nextjs-course-default-rtdb.firebaseio.com/events.json');
	const events = await res.json();
	const paths = events.map((event) => {
		return {
			params: { eventId: event.id },
		};
	});
	return {
		paths,
		fallback: true,
	};
};
export const getStaticProps = async ({ params }) => {
	const { eventId } = params;
	const res = await fetch('https://max-s-nextjs-course-default-rtdb.firebaseio.com/events.json');
	const events = await res.json();
	const event = events.find((event) => event.id === eventId);
	return {
		props: {
			event: event ? event : null,
		},
		revalidate: 30,
	};
};

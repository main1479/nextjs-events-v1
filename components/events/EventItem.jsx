/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { BsCalendar, BsMap, BsArrowRight } from 'react-icons/bs';
import Button from '../ui/Button.jsx';
import classes from './event-item.module.css';

function EventItem({ title, image, date, location, id }) {
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const formattedAddress = location.replace(', ', '\n');
	const exploreLink = `/events/${id}`;

	return (
		<li className={classes.item}>
			<Image src={'/' + image} alt={title} width={250} height={160} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<BsCalendar />
						<time>{humanReadableDate}</time>
					</div>
					<div className={classes.address}>
						<BsMap />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={exploreLink}>
						<span>Explore Event</span>
						<span className={classes.icon}>
							<BsArrowRight />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
}

export default EventItem;

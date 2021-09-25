/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { BsCalendar, BsMap } from 'react-icons/bs';
import classes from './event-logistics.module.css';
import LogisticsItem from './LogisticsItem';

function EventLogistics({ date, location, image, imageAlt }) {
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const addressText = location.replace(', ', '\n');

	return (
		<section className={classes.logistics}>
			<div className={classes.image}>
				<Image src={'/' + image} alt={imageAlt} layout="fill" />
			</div>
			<ul className={classes.list}>
				<LogisticsItem icon={BsCalendar}>
					<time>{humanReadableDate}</time>
				</LogisticsItem>
				<LogisticsItem icon={BsMap}>
					<address>{addressText}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
}

export default EventLogistics;

import Button from '../ui/Button';

function ResultsTitle({ date }) {
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
	});

	return (
		<section className="title">
			<h1>Events in {humanReadableDate}</h1>
			<Button link="/events">Show All Events</Button>

			<style jsx>
				{`
					.title {
						margin: 2rem auto;
						width: 90%;
						max-width: 40rem;
						text-align: center;
					}
					h1 {
						margin: 2rem 0;
					}
				`}
			</style>
		</section>
	);
}

export default ResultsTitle;

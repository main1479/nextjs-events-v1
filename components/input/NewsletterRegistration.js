import { useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
	const emailRef = useRef(null);
	const registrationHandler = async (event) => {
		event.preventDefault();
		const email = emailRef.current.value;
		if (!email) return;
		const res = await fetch('/api/newsLetter', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
			}),
		});
		const data = await res.json();
	};

	return (
		<section className={classes.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={classes.control}>
					<input
						ref={emailRef}
						type="email"
						id="email"
						placeholder="Your email"
						aria-label="Your email"
						required
					/>
					<button>Register</button>
				</div>
			</form>
		</section>
	);
}

export default NewsletterRegistration;

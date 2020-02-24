import React, { useState } from 'react';
import { FormInput } from './components/FormInput';
import { Banner } from './components/Banner';
import { Button } from './components/Button';

const App = () => {
	const [email, setEmail] = useState('');
	const [validated, setValidated] = useState(false);
	const [error, setError] = useState(false);

	const handleChange = ({ target: { value } }) => {
		setEmail(value);
	};

	const submitForm = e => {
		e.preventDefault();
		const isEmail = email.includes('@');
		if (isEmail) {
			setValidated(true);
			setError(false);
		} else {
			setError(true);
		}
		setEmail('');
	};

	return (
		<section>
			<h1>Sign up for the latest updates</h1>
			{validated ? (
				<Banner />
			) : (
				<form onSubmit={submitForm}>
					<FormInput
						label="EMAIL ADDRESS"
						name="mail"
						// type="email"
						value={email}
						className="input"
						required
						onChange={handleChange}
						error={error}
					/>
					<Button type="submit" className="btn" />
				</form>
			)}
			{error && <Banner error />}
		</section>
	);
};

export default App;

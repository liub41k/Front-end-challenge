import React from 'react';
import { FormInput } from './components/FormInput';
// import { Banner } from './components/Banner';
import { Button } from './components/Button';

const App = () => (
	<section>
		<h1>Sign up for the latest updates</h1>
		<form>
			<FormInput
				label="EMAIL ADDRESS"
				name="mail"
				type="email"
				value=""
				className="input"
				required
			/>
			<Button type="submit" className="btn" />
		</form>
		{/* TODO: Banner styles (both) */}
		{/* TODO: validate logic */}
	</section>
);

export default App;

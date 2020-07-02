import React, { useEffect, useState } from 'react';

const App = () => {
	// wheather user prefers dark mode or not
	const getPreferedColorScheme = () => {
		if (!window.matchMedia) return; // feature detection => checks wheather user browser has matchMedia Func

		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	};

	const getInitialMode = () => {
		const isReturningUser = 'dark' in localStorage;
		const savedMode = JSON.parse(localStorage.getItem('dark'));
		const userPrefersDark = getPreferedColorScheme();
		// if mode was saved => dark/light
		if (isReturningUser) {
			return savedMode;
		} else if (userPrefersDark) {
			// if prefered color scheme is dark => dark
			return true;
		} else {
			// otherwise => light
			return false;
		}
	};

	const [darkMode, setDarkMode] = useState(getInitialMode);

	useEffect(() => {
		localStorage.setItem('dark', JSON.stringify(darkMode));
	}, [darkMode]);

	return (
		<div className={darkMode ? 'dark-mode' : 'light-mode'}>
			<nav>
				<div className="toggle-container">
					<span style={{ color: darkMode ? 'gray' : 'yellow' }}>☀</span>
					<span className="toggle">
						<input
							type="checkbox"
							checked={darkMode}
							onChange={() => setDarkMode((prevMode) => !prevMode)}
							className="checkbox"
							id="checkbox"
						/>
						<label htmlFor="checkbox"></label>
					</span>
					<span style={{ color: darkMode ? 'slateblue' : 'gray' }}>☾</span>
				</div>
			</nav>
			<main>
				<h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
				<h2>Toggle the switch to see some magic happen!</h2>
			</main>
		</div>
	);
};

export default App;

import React, { useState, useEffect } from 'react';

const App = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => setUsers(json.slice(0, 3)));
	}, []);

	const cards = users.map(({ id, name, address: { city } }) => (
		<li className="card-item" key={id}>
			<img
				src="https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859"
				alt="img"
			/>
			<div className="card-item__info">
				<div>{name}</div>
				<div>{city}</div>
			</div>
		</li>
	));

	return (
		<>
			<h1 className="heading">Meet the team</h1>
			<ul className="card-list">{cards}</ul>
		</>
	);
};

export default App;

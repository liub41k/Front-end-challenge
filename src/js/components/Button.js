import React from 'react';

export const Button = ({ type, label, className }) => {
	return (
		<button type={type} className={className}>
			{label}
		</button>
	);
};

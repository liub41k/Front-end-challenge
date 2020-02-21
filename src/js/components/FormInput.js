import React from 'react';
import { Banner } from './Banner';

export const FormInput = ({
	name,
	type = 'text',
	placeholder,
	onChange,
	className,
	value,
	error,
	children,
	label,
	...props
}) => {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				className={className}
				style={error && { border: 'solid 1px red' }}
			/>
			{error && <Banner error />}
		</>
	);
};

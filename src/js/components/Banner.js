import React from 'react';

export const Banner = ({ error }) => {
	const successBanner = (
		<div className="banner banner--green">
			<h3 className="banner__title">Yay! Thank you</h3>
			<p className="banner__text">
				We've sent a confirmation link to your inbox
			</p>
		</div>
	);
	const errorBanner = (
		<div className="banner banner-red">
			<h3 className="banner__title">Please use a valid email</h3>
			<p className="banner__text">Like: person@inbox.com</p>
		</div>
	);
	return error ? errorBanner : successBanner;
};

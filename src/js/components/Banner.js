import React from 'react';

export const Banner = ({ error }) => {
	const successBanner = (
		<div className="banner banner-green">
			<h2 className="banner__title">Yay! Thank you</h2>
			<p className="banner__text">
				We've sent a confirmation link to your inbox
			</p>
		</div>
	);
	const errorBanner = (
		<div className="banner banner-red">
			<h2 className="banner__title">Please use a valid email</h2>
			<p className="banner__text">Like: person@inbox.com</p>
		</div>
	);
	return error ? errorBanner : successBanner;
};

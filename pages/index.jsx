import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Home from '../containers/Home'

const Main = () => {
	const router = useRouter();

	useEffect(() => {
		router.push('/vi')
	}, []);

	return (
		<div>
			hello
		</div>
	);
};

Main.propTypes = {};

export default Main;
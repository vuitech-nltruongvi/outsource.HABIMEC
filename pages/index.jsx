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
			<img src='/images/comming-soon.jpg' width={'100%'} />
			{/* <Home /> */}
		</div>
	);
};

Main.propTypes = {};

export default Main;
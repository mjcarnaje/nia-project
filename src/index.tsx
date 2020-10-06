import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/tailwind.output.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { ThemeProvider } from '@chakra-ui/core';
import App from './App';

ReactDOM.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);

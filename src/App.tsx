import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './views/Dashboard';
import Funds from './views/Funds';

const App: React.FC = () => {
	return (
		<>
			<Router>
				<Sidebar />
				<div className='relative h-screen bg-gray-100 md:ml-64'>
					<Navbar />
					<div className='relative py-16'>
						<Switch>
							<Route path='/dashboard' component={Dashboard} />
							<Route path='/funds' component={Funds} />
						</Switch>
					</div>
				</div>
			</Router>
		</>
	);
};

export default App;

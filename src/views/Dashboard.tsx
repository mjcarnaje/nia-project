import React from 'react';
import { Link } from 'react-router-dom';
import CardStats from '../components/CardSummary';
import Table from '../components/Table';

const Dashboard: React.FC = () => {
	return (
		<>
			<div className='w-full px-4 mx-auto md:px-6'>
				<h1 className='my-6 text-2xl font-semibold text-gray-800 font-inter'>
					Dashboard
				</h1>
				<div>
					<div className='flex flex-wrap justify-center xl:flex-no-wrap'>
						<CardStats />
					</div>
				</div>
				<hr className='my-8' />
				<h2 className='mb-6 text-xl font-semibold text-gray-700 font-inter'>
					Recent Funds
				</h2>
				<div className='w-full overflow-hidden rounded-lg shadow-xs'>
					<div className='w-full overflow-x-auto'>
						<Table />
					</div>
					<div className='px-4 py-3 text-gray-500 border bg-gray-10 font-inter '>
						<div className='grid grid-cols-3'>
							<div className='my-auto text-sm font-semibold'>
								SHOWING 1-5 OF 8
							</div>
							<Link
								to='/projects'
								className='block px-3 py-1 mx-auto text-sm font-semibold text-white bg-green-700 rounded-full font-inter hover:bg-green-600 focus:outline-none hover:-translate-y-1 '
							>
								See All Funds
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;

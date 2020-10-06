import React from 'react';
import Table from '../components/Table';
import Pagination from '../components/Layout/Pagination';

const Funds: React.FC = () => {
	return (
		<div className='w-full px-4 mx-auto md:px-6'>
			<h1 className='my-6 text-2xl font-semibold text-gray-800 font-inter'>
				All Funds
			</h1>
			<hr />
			<div className='flex justify-end py-4 text-white font-inter'>
				<button className='px-4 py-1 bg-green-600 rounded-full'>
					Add Fund
				</button>
			</div>
			<div className='w-full overflow-hidden rounded-lg shadow-xs'>
				<div className='w-full overflow-x-auto'>
					<Table />
				</div>

				<Pagination />
			</div>
		</div>
	);
};

export default Funds;

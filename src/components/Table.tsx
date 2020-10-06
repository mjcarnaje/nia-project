import React, { useState } from 'react';
import numeral from 'numeral';
import Modal from './Layout/Modal';

interface TableInfo {
	id: string;
	title: string;
	preparedBy: string;
	approvedBy: string;
	balance: number;
	lastModified: string;
	status: string;
}

const Table: React.FC = () => {
	const [toggleModal, setToggleModal] = useState<boolean>(false);
	const [fundsData] = useState<TableInfo[]>([
		{
			id: '1',
			title: 'Project Dipolog',
			preparedBy: 'John Doe',
			approvedBy: 'Belen Rizon',
			balance: 143213,
			lastModified: '12/3/2018',
			status: 'Finished',
		},
		{
			id: '2',
			title: 'Project Pagadian',
			preparedBy: 'Michael James Carnaje',
			approvedBy: 'Artemio Malinao',
			balance: 163213,
			lastModified: '2/3/2020',
			status: 'Ongoing',
		},
		{
			id: '3',
			title: 'Project Dipolog',
			preparedBy: 'John Paul Carnaje',
			approvedBy: 'Flormelyn Laranjo Malinao',
			balance: 212213,
			lastModified: '2/3/2020',
			status: 'Pending',
		},
		{
			id: '4',
			title: 'Project Dipolog',
			preparedBy: 'John Paul Carnaje',
			approvedBy: 'Flormelyn Laranjo  ',
			balance: 355213,
			lastModified: '2/3/2020',
			status: 'Overdue',
		},
		{
			id: '5',
			title: 'Project Dipolog',
			preparedBy: 'John Doe',
			approvedBy: 'Belen Rizon',
			balance: 153213,
			lastModified: '12/3/2018',
			status: 'Finished',
		},
		{
			id: '6',
			title: 'Project Pagadian',
			preparedBy: 'Michael James Carnaje',
			approvedBy: 'Artemio Malinao',
			balance: 163213,
			lastModified: '2/3/2020',
			status: 'Finished',
		},
		{
			id: '7',
			title: 'Project Dipolog',
			preparedBy: 'John Paul Carnaje',
			approvedBy: 'Flormelyn Laranjo Malinao',
			balance: 125213,
			lastModified: '2/3/2020',
			status: 'Pending',
		},
		{
			id: '8',
			title: 'Project Dipolog',
			preparedBy: 'John Paul Carnaje',
			approvedBy: 'Flormelyn Laranjo  ',
			balance: 325513,
			lastModified: '2/3/2020',
			status: 'Ongoing',
		},
	]);

	return (
		<>
			{toggleModal && <Modal toggleModal={setToggleModal} />}
			<table className='w-full font-inter'>
				<thead className='text-xs font-semibold tracking-wide text-left text-gray-600 uppercase border-b dark:border-gray-700 bg-gray-50 '>
					<tr>
						<th className='w-4/12 px-4 py-3'>Fund</th>
						<th className='px-4 py-3 '>Approved by</th>
						<th className='px-4 py-3 '>Balance</th>
						<th className='px-4 py-3'>Last Modified</th>
						<th className='px-4 py-3'>Status</th>
					</tr>
				</thead>
				<tbody className='text-gray-700 bg-white divide-y '>
					{fundsData.map((fund, i) => {
						const {
							title,
							preparedBy,
							approvedBy,
							lastModified,
							status,
							id,
							balance,
						} = fund;
						let bg;
						if (status === 'Pending') {
							bg = 'bg-orange-100 text-orange-700';
						} else if (status === 'Finished') {
							bg = 'bg-green-100 text-green-700';
						} else if (status === 'Ongoing') {
							bg = 'bg-yellow-100 text-yellow-700';
						} else if (status === 'Dropped' || 'Overdue') {
							bg = 'bg-red-100 text-red-700 ';
						}
						const moneyFormat = numeral(balance).format('0.00a');
						return (
							<tr key={id} className='text-sm cursor-pointer onhover'>
								<td className='flex items-center px-4 py-3'>
									<div>
										<span className='block text-sm font-semibold font-inter'>
											{title}
										</span>
										<span className='block text-sm text-gray-600 font-inter'>
											{preparedBy}
										</span>
									</div>
								</td>
								<td className='px-4 py-3'>{approvedBy}</td>
								<td className='px-4 py-3 '>{`₱ ${moneyFormat}`}</td>
								<td className='px-4 py-3'>{lastModified}</td>
								<td className='px-4 py-3'>
									<div className='flex items-center justify-between '>
										<span
											className={`${bg} inline-flex px-2 text-xs font-semibold uppercase py-1 leading-5 rounded-full  `}
										>
											{status}
										</span>

										<i
											className='text-red-600 opacity-0 fas fa-trash-alt icon '
											onClick={() => setToggleModal(true)}
										></i>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Table;

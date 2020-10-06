import React, { useState } from 'react';
import { thousandSeparator } from '../utils/helpers';

interface CardsInfo {
	title: string;
	value: number;
	icon: string;
	bg: string;
	color: string;
	money?: boolean;
}

const CardSummary: React.FC = () => {
	const [stats] = useState<CardsInfo[]>([
		{
			title: 'NIA Workers',
			value: 54,
			icon: 'fas fa-users',
			bg: 'bg-green-200',
			color: 'text-green-500',
		},
		{
			title: 'Income',
			value: 3353389,
			icon: 'fas fa-coins',
			bg: 'bg-blue-200',
			color: 'text-blue-500',
			money: true,
		},
		{
			title: 'Expenses',
			value: 1312789,
			icon: 'fas fa-credit-card',
			bg: 'bg-red-200',
			color: 'text-red-500',
			money: true,
		},
		{
			title: 'All Funds',
			value: 8,
			icon: 'fas fa-tasks',
			bg: 'bg-orange-200',
			color: 'text-orange-500',
		},
		// {
		// 	title: 'Finished Projects',
		// 	value: 1,
		// 	icon: 'fas fa-tasks',
		// 	bg: 'bg-green-200',
		// 	color: 'text-green-500',
		// },
		// {
		// 	title: 'Ongoing Projects',
		// 	value: 1,
		// 	icon: 'fas fa-tasks',
		// 	bg: 'bg-yellow-200',
		// 	color: 'text-yellow-500',
		// },
	]);
	return (
		<>
			{stats.map((card, index) => {
				const { icon, title, value, bg, color, money } = card;
				return (
					<div
						className='w-full m-2 flex-grow-1 flex-shrink-1 lg:w-3/5 xl:w-56'
						key={index}
					>
						<button className='inline-flex items-center w-full px-4 py-5 bg-white border rounded-lg hover:bg-gray-00 focus:outline-none'>
							<div
								className={`${bg} rounded-full h-10 w-10 flex items-center justify-center`}
							>
								<i className={`${icon} ${color}`}></i>
							</div>
							<span className='flex flex-col items-start ml-3 leading-none font-inter'>
								<span className='text-base font-medium text-gray-700 '>
									{title}
								</span>
								<span className='mt-3 text-xl font-medium '>
									{money === true ? `₱ ${thousandSeparator(value)}` : value}
								</span>
							</span>
						</button>
					</div>
				);
			})}
		</>
	);
};

export default CardSummary;

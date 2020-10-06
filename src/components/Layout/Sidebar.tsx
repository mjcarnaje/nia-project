import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import UserDropdown from './UserDropdown';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/core';

interface Links {
	title: string;
	path: string;
	icon: string;
}

const Sidebar: React.FC = () => {
	const [collapseShow, setCollapseShow] = useState<string>('hidden');
	const [links] = useState<Links[]>([
		{
			title: 'Dashboard',
			path: '/dashboard',
			icon: 'fas fa-tv',
		},
		{
			title: 'Funds',
			path: '/funds',
			icon: 'fas fa-tasks',
		},
	]);

	return (
		<>
			<nav className='relative z-10 flex flex-wrap items-center justify-between py-4 bg-white shadow-sm md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden md:w-64'>
				<div className='flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap'>
					<button
						className='px-3 py-1 ml-6 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden'
						type='button'
						onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
					>
						<i className='fas fa-bars'></i>
					</button>
					<Link
						className='inline-block h-16 ml-6 mr-0 text-left md:block md:pb-2 '
						to='/'
					>
						<img
							src={require('../../assets/img/logo.png')}
							className='h-full'
							alt='logo of nia'
						/>
					</Link>
					<ul className='flex flex-wrap items-center mr-6 list-none md:hidden'>
						<li className='relative inline-block'>
							<UserDropdown />
						</li>
					</ul>

					<div
						className={
							'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
							collapseShow
						}
					>
						<div className='block pb-4 mb-4 border-b border-gray-300 border-solid md:min-w-full md:hidden '>
							<div className='flex flex-wrap'>
								<div className='w-6/12'>
									<Link
										className='inline-block p-4 px-0 mr-0 text-left md:block md:pb-2'
										to='/'
									></Link>
								</div>
								<div className='flex justify-end w-6/12'>
									<button
										type='button'
										className='px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden'
										onClick={() => setCollapseShow('hidden')}
									>
										<i className='fas fa-times'></i>
									</button>
								</div>
							</div>
						</div>

						<form className='mt-6 mb-4 ml-6 md:hidden'>
							<div className='pt-0 mb-3'>
								<InputGroup>
									<InputLeftElement
										children={<i className='fas fa-search'></i>}
									/>
									<Input
										focusBorderColor='green.400'
										variant='filled'
										placeholder='Search for projects'
										className='font-inter'
									/>
								</InputGroup>
							</div>
						</form>

						<ul className='flex flex-col list-none md:flex-col md:min-w-full'>
							{links.map((link, index) => {
								const { title, icon, path } = link;
								return (
									<li className='relative items-center rounded-md' key={index}>
										<NavLink
											className='relative block py-4 text-gray-600 '
											activeClassName='absolute top-0 left-0 block w-1 text-gray-900 bg-green-600 rounded-tr-lg rounded-br-lg '
											to={path}
										>
											<div className='flex items-center px-6'>
												<i className={icon}></i>
												<span className='ml-4 text-sm font-semibold font-inter'>
													{title}
												</span>
											</div>
										</NavLink>
									</li>
								);
							})}
						</ul>

						<hr className='my-4 md:min-w-full' />

						{/* <h6 className='block px-6 pt-1 pb-4 text-xs font-bold text-gray-600 no-underline uppercase md:min-w-full font-inter'>
							Users
						</h6> */}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Sidebar;

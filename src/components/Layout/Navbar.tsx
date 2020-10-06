import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/core';
import UserDropdown from './UserDropdown';

const Navbar: React.FC = () => {
	return (
		<>
			<nav className='absolute top-0 left-0 z-10 items-center hidden w-full px-4 py-3 bg-white md:flex-row md:flex-no-wrap md:justify-start md:flex shadow-bottom'>
				<div className='flex flex-wrap items-center justify-between w-full px-8 md:flex-no-wrap md:px-10'>
					<div className='hidden w-full md:block'>
						<InputGroup w={1 / 2} ml={20}>
							<InputLeftElement
								children={
									<i className='w-5 h-auto text-green-600 fas fa-search' />
								}
							/>
							<Input
								focusBorderColor='green.300'
								variant='filled'
								placeholder='Search for projects'
								className='font-inter'
							/>
						</InputGroup>
					</div>
					<ul className='flex-col items-center hidden list-none md:flex-row md:flex'>
						<UserDropdown />
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

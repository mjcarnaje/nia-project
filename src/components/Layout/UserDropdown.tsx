import React from 'react';

import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	Avatar,
} from '@chakra-ui/core';

const UserDropdown: React.FC = () => {
	return (
		<div>
			<Menu>
				<MenuButton>
					<Avatar
						size='sm'
						name='User'
						src={require('../../assets/img/user.JPG')}
					/>
				</MenuButton>
				<MenuList>
					<MenuItem>
						<i className='fas fa-user-alt' />
						<span className='ml-2 font-inter'>Edit Profile</span>
					</MenuItem>
					<MenuItem>
						<i className='fas fa-cog' />
						<span className='ml-2 font-inter'>Settings</span>
					</MenuItem>
					<MenuDivider />
					<MenuItem>
						<i className='fas fa-sign-out-alt' />
						<span className='ml-2 font-inter'>Logout</span>
					</MenuItem>
				</MenuList>
			</Menu>
		</div>
	);
};

export default UserDropdown;

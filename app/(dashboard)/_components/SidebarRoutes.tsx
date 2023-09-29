'use client';

import { guestRoutes } from '@/constants/constants';
import SidebarItem from './SidebarItem';

const SidebarRoutes = () => {
	const routes = guestRoutes;
	return (
		<>
			<div className='flex flex-col w-full'>
				{routes.map((route) => (
					<SidebarItem
						key={route.href}
						href={route.href}
						label={route.label}
						icon={route.icon}
					/>
				))}
			</div>
		</>
	);
};

export default SidebarRoutes;

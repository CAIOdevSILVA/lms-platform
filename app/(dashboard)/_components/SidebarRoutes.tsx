'use client';

import { guestRoutes, teacherRoutes } from '@/constants/constants';
import { usePathname } from 'next/navigation';

import SidebarItem from './SidebarItem';

const SidebarRoutes = () => {
	const pathname = usePathname();
	const isTeacherPage = pathname?.includes('/teacher');

	const routes = isTeacherPage ? teacherRoutes : guestRoutes;
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

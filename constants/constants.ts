import { BarChart, Compass, Layout, ListIcon } from 'lucide-react';

export const guestRoutes = [
	{
		icon: Layout,
		label: 'Dashboard',
		href: '/',
	},
	{
		icon: Compass,
		label: 'Browse',
		href: '/search',
	},
];

export const teacherRoutes = [
	{
		icon: ListIcon,
		label: 'Courses',
		href: '/teacher/courses',
	},
	{
		icon: BarChart,
		label: 'Analytics',
		href: '/teacher/analytics',
	},
];

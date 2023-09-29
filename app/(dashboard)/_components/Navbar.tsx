import NavbarRoutes from '@/components/NavbarRoutes';
import MobileSidebar from './MobileSidebar';

const Navbar = () => {
	return (
		<>
			<div className='p-4 border-b h-full shadow-sm flex items-center bg-white'>
				<MobileSidebar/>
				<NavbarRoutes/>
			</div>
		</>
	);
};

export default Navbar;

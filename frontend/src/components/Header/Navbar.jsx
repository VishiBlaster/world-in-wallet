import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav className='header-nav'>
				<div>
					<NavLink
						activeClassName='active-tab text-white'
						className='header-tab'
						to='/flights'
						isActive={(match, location) => {
							if (
								location.pathname === '/' ||
								location.pathname === '/flights' ||
								location.pathname.split('/')[1] === 'transport'
							)
								return true;
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='18'
							height='18'
							style={{
								width: '1.125rem',
								height: '1.125rem',
								fill: '#fff',
							}}
						>
							<path d='M3.455 8.78a.775.775 0 0 1 .952.224l1.472 1.91 1.816-.267a2.852 2.852 0 0 1 .536-.051h9.862a5.099 5.099 0 0 1 2.438.62.944.944 0 0 1-.072 1.67l-.046.021a5.1 5.1 0 0 1-2.194.497h-4.314l-3.663 5.867A1.546 1.546 0 0 1 8.93 20H7.78l2.007-5.858v-.738h-1.53a2.865 2.865 0 0 1-.589-.062l-1.765-.288-1.509 1.958a.775.775 0 0 1-.929.237.786.786 0 0 1-.419-.984L3.862 12 3.06 9.749a.785.785 0 0 1 .395-.97zM8.929 4a1.545 1.545 0 0 1 1.312.729l3.19 4.985H9.749L7.778 4z'></path>
						</svg>
						<span className='header-tab-span'>Flights</span>
					</NavLink>
				</div>
				<div className='mx-2'>
					<NavLink
						exact
						activeClassName='active-tab text-white'
						className='header-tab'
						to='/hotels'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='18'
							height='18'
							style={{
								width: '1.125rem',
								height: '1.125rem',
								fill: '#fff',
							}}
						>
							<path d='M18.923 4.038a1.385 1.385 0 0 1 1.385 1.385V9H18V7.692a.692.692 0 0 0-.612-.687L17.308 7h-3.616a.692.692 0 0 0-.688.611L13 7.692V9h-2V7.692a.692.692 0 0 0-.612-.687L10.308 7H6.692a.692.692 0 0 0-.687.611L6 7.692V9H3.692V5.423a1.385 1.385 0 0 1 1.385-1.385zM21 19.961h-1.45c-.664 0-1.55-.578-1.55-1.291V16H6v2.67c0 .68-.808 1.239-1.459 1.288l-.091.003H3v-8.577A1.385 1.385 0 0 1 4.384 10h15.231A1.385 1.385 0 0 1 21 11.384z'></path>
						</svg>
						<span className='header-tab-span'>Hotels</span>
					</NavLink>
				</div>
				<div>
					<NavLink
						exact
						activeClassName='active-tab text-white'
						className='header-tab'
						to='/carhire'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='18'
							height='18'
							style={{
								width: '1.125rem',
								height: '1.125rem',
								fill: '#fff',
							}}
						>
							<path d='M6 14a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 6 14zm12 0a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 18 14zM9.854 7.5a8.552 8.552 0 0 1 2.872.45 15.534 15.534 0 0 1 3.602 2.466 13.077 13.077 0 0 1 4.842 1.1c.54.28.691 1.294.816 2.14.14.946-.812 1.406-1.466 1.638l-.037.017A2.5 2.5 0 1 0 15.54 16H8.45a2.5 2.5 0 1 0-4.95-.5q0 .09.006.183c-.161-.043-.249-.076-.293-.09a1.815 1.815 0 0 1-1.185-2.101v-.003l.503-2.868h10.923c.601 0 .842-.595.271-.981a5.71 5.71 0 0 0-1.326-.72 7.612 7.612 0 0 0-2.546-.394 13.162 13.162 0 0 0-2.681.3c-1.157.243-2.692.69-3.658 1.002a.457.457 0 0 1-.552-.24l-.022-.054-.004-.01a.478.478 0 0 1 .277-.608 27.517 27.517 0 0 1 3.76-1.095 14.094 14.094 0 0 1 2.88-.32z'></path>
						</svg>
						<span className='header-tab-span'>Car hire</span>
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

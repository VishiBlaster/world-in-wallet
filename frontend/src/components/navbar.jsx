import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
	return (
		<div>
			<nav className={`navbar ${menuOpen ? 'open' : ''}`}>
				<div className="navbar-container">
                    <NavLink>

                    </NavLink>
                </div>
			</nav>
		</div>
	);
};

export default Navbar;

import { useContext, useEffect, useState } from 'react';
import { Nav, LogoTitle, NavbarLink, NavbarLinkButton } from '../StyledComponents/NavbarStyled';
import CartContext from '../Context/CartContext';
import { GrCart } from 'react-icons/gr';
import { GoPerson } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import { IoMdSettings } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { getQuantity, getTotal } = useContext(CartContext);
	const [ isLogged, setIsLogged ] = useState(false);
	const [ showProfilePopup, setShowProfilePopup ] = useState(false);
	const [ userData, setUserData ] = useState({});

	useEffect(() => {
		if (localStorage.getItem('token')) setIsLogged(true);
		
		const user_data = JSON.parse(localStorage.getItem('user_data'));

		if (user_data) setUserData(user_data);
	}, []);

	const handleShowProfilePopup = () => {
		setShowProfilePopup(!showProfilePopup);
	}

	const logout = () => {
		localStorage.clear();
		setIsLogged(false);
	}

	return (
		<Nav>
			<div>
				<LogoTitle><Link to='/'>Tiendita</Link></LogoTitle>
			</div>
			<div>
				<NavbarLink to={'/cart'} className='cart-link'> <GrCart className='cart'/> <span className='cart-quantity'>{getQuantity()}</span> </NavbarLink>
				<span className='cart-total-amount'>${getTotal()}</span>
			</div>
			<div>
				<NavbarLink to={'/'}>Home</NavbarLink>
				<NavbarLink to={'/about'}>Nosotros</NavbarLink>
				<NavbarLink to={'/contact'}>Contacto</NavbarLink>
				{!isLogged && <NavbarLinkButton to={'/login'}> <GoPerson className='login-icon'/> Acceder</NavbarLinkButton>}
				{isLogged && 
					<div className='profile-menu-wrapper'>
						<span className='profile-icon-wrapper' onClick={handleShowProfilePopup}><CgProfile className='profile-icon'/> {userData.name} {userData.last_name}</span>
						{showProfilePopup &&
							<>
								<div className='profile-menu-background' onClick={() => setShowProfilePopup(false)}></div>
								<div className='profile-menu'>
									<span>¡Hola, {userData.name}!</span>
									<div className='profile-menu-options'>
										<span> <BsFillPersonFill/> Perfil</span>
										<span> <IoMdSettings/> Configuraciones</span>
										<span onClick={logout}> <BiLogOut/> Cerrar Sesión</span>
									</div>
								</div>
							</>
						}
					</div> 
				}
			</div>
		</Nav>
	)
}

export default Navbar
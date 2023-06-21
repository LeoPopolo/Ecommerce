import { useState } from 'react';
import '../Styles/Login.css';
import happy_face from '../assets/happy_face.png';
import { Button, SecondaryButton } from '../StyledComponents/Button';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import { login, register } from '../Utils/apiRequest';
import Swal from 'sweetalert2'
 
const Login = () => {
	const [ registerData, setRegisterData ] = useState({
		name: '',
		last_name: '',
		email: '',
		phone_number: '',
		address: '',
		password: '',
		confirm_password: '',
		birthdate: new Date(),
		role: 'customer'
	});

	const [ loginData, setLoginData ] = useState({
		email: '',
		password: ''
	});

	const [ registerMode, setRegisterMode ] = useState(false);
	
	const navigate = useNavigate();

	const handleLogin = () => {

        login(loginData).then(resp => resp.json())
        .then(data => {

			if (!data.token) return;
			
			localStorage.setItem('token', data.token);
			localStorage.setItem('user_data', JSON.stringify(data.data));

			navigate('/');
			
        })
        .catch(err => {
            console.log(err);
        });
    }

	const handleRegister = () => {

		register(registerData).then(resp => resp.json())
        .then(data => {

			localStorage.setItem('token', data.token);
			localStorage.setItem('user_data', JSON.stringify(data.data));

			Swal.fire({
				title: 'Registro completo!',
				text: 'revisa tu correo para completar el proceso',
				icon: 'success',
				confirmButtonColor: 'var(--primary-color)',
				confirmButtonText: '¡Entendido!'
			}).then(() => {
				navigate('/');			
			});
        })
        .catch(err => {
            console.log(err);
        });
	}

	const onRegisterDataChanged = (data, blank) => {
		let tmp_data = {...registerData};
		tmp_data[blank] = data.target.value;
		
		setRegisterData(tmp_data);
	}

	const onLoginDataChanged = (data, blank) => {
		let tmp_data = {...loginData};
		tmp_data[blank] = data.target.value;
		
		setLoginData(tmp_data);
	}

	return (
		<main className='wrapper'>
			<section className='message'>
				<h2>Tiendita</h2>
				<div className='logo'>
					<img src={happy_face} alt='happy face'/>

					<h3>Buy,</h3>
					<h3>Simpler.</h3>
				</div>
			</section>
			<section className='form-wrapper'>
				<header> <Button> <HiOutlineShoppingBag/> <Link to='/'>Ir a la tienda</Link> </Button> </header>
				{!registerMode &&
					<div className='form'>
						<h3>Bienvenido</h3>
						<input type='email' onChange={e => onLoginDataChanged(e, 'email')} className='ec-input' placeholder='E-mail'/>
						<input type='password' onChange={e => onLoginDataChanged(e, 'password')} className='ec-input' placeholder='Contraseña'/>
						<Button onClick={handleLogin}>Iniciar sesión</Button>
						<span>o</span>
						<SecondaryButton onClick={() => setRegisterMode(true)}>Registrate</SecondaryButton>
					</div>
				}

				{registerMode && 
					<div className='form register-form'>
						<h3>Completa tus datos</h3>
						<input type='text' onChange={e => onRegisterDataChanged(e, 'name')} className='ec-input' placeholder='Nombre'/>
						<input type='text' onChange={e => onRegisterDataChanged(e, 'last_name')} className='ec-input' placeholder='Apellido'/>
						<input type='email' onChange={e => onRegisterDataChanged(e, 'email')} className='ec-input' placeholder='E-mail'/>
						<input type='text' onChange={e => onRegisterDataChanged(e, 'phone_number')} className='ec-input' placeholder='Teléfono'/>
						<input type='text' onChange={e => onRegisterDataChanged(e, 'address')} className='ec-input' placeholder='Dirección'/>
						<input type='password' onChange={e => onRegisterDataChanged(e, 'password')} className='ec-input' placeholder='Contraseña'/>
						<input type='password' onChange={e => onRegisterDataChanged(e, 'confirm_password')} className='ec-input' placeholder='Repetir contraseña'/>
						<input type='date' onChange={e => onRegisterDataChanged(e, 'birthdate')} className='ec-input' placeholder='Cumpleaños'/>
						<Button onClick={handleRegister}>Registrate</Button>
						<SecondaryButton onClick={() => setRegisterMode(false)}>Volver</SecondaryButton>
					</div>
				}
			</section>
		</main>
	)
}

export default Login
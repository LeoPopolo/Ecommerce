import React from "react";
import '../Styles/Checkout.css';
import payment_method from '../assets/payment_methods.png';
import { Button, SecondaryButton } from '../StyledComponents/Button';
 
const Checkout = () => {
	return (
		<>
			<h1 className="checkout-title">Datos de entrega</h1>

			<div className="checkout-delivery-data">
				<div className="checkout-delivery-data-row ec-row-2">
					<input className="ec-input" type="text" placeholder="Nombre"/>
					<input className="ec-input" type="text" placeholder="Apellido"/>
				</div>
				<div className="checkout-delivery-data-row ec-row-1">
					<input className="ec-input" type="text" placeholder="Calle"/>
				</div>
				<div className="checkout-delivery-data-row ec-row-3">
					<input className="ec-input" type="text" placeholder="Número"/>
					<input className="ec-input" type="text" placeholder="Piso"/>
					<input className="ec-input" type="text" placeholder="Departamento"/>
				</div>
				<div className="checkout-delivery-data-row ec-row-2">
					<input className="ec-input" type="text" placeholder="País"/>
					<input className="ec-input" type="text" placeholder="CP"/>
				</div>
				<div className="checkout-delivery-data-row ec-row-2">
					<select className="ec-input" placeholder="Provincia">
						<option>provincia 1</option>
						<option>provincia 2</option>
						<option>provincia 3</option>
					</select>
					<select className="ec-input" placeholder="Localidad">
						<option>localidad 1</option>
						<option>localidad 2</option>
						<option>localidad 3</option>
					</select>
				</div>
			</div>

			<h1 className="checkout-title">Información de contacto</h1>

			<div className="checkout-contact-data">
				<div className="checkout-contact-data-row ec-row-2">
					<input className="ec-input" type="email" placeholder="E-mail"/>
					<input className="ec-input" type="text" placeholder="Teléfono"/>
				</div>
			</div>

			<h1 className="checkout-title">Método de pago</h1>

			<div className="checkout-payment-data">
				<div className="checkout-payment-data-row ec-row-1">
					<span> <img src={payment_method} alt="visa mastercard american_express"/> <label>Débito/Crédito</label> <input type="radio"/> </span>
				</div>

				
				<div className="checkout-payment-data-row ec-row-2">
					<select className="ec-input" placeholder="Tarjeta">
						<option>Débito</option>
						<option>Crédito</option>
					</select>
					<select className="ec-input" placeholder="Cuotas">
						<option>1 cuota de $tanto</option>
						<option>2 cuotas de $tanto</option>
						<option>3 cuotas de $tanto</option>
					</select>
				</div>

				<div className="checkout-payment-data-row ec-row-2">
					<input className="ec-input" type="text" placeholder="Número de la tarjeta"/>
					<input className="ec-input" type="text" placeholder="Nombre en la tarjeta"/>
				</div>

				<div className="checkout-payment-data-row ec-row-3">
					<input className="ec-input" type="text" placeholder="DNI del titular"/>
					<input className="ec-input" type="text" placeholder="MM/AA"/>
					<input className="ec-input" type="text" placeholder="CVV"/>
				</div>
			</div>

			<footer>
				<SecondaryButton>Volver</SecondaryButton>
				<Button>Pagar</Button>
			</footer>
		</>
	)
};

export default Checkout;

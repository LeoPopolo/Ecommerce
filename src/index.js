import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	Route,
	createBrowserRouter,
	Outlet,
	RouterProvider,
	createRoutesFromElements,
	useLocation,
} from "react-router-dom";
import Home from "./Layouts/Home";
import Checkout from "./Layouts/Checkout";
import Login from "./Layouts/Login";
import Cart from "./Layouts/Cart";
import Navbar from "./Components/Navbar";
import StateCartContext from "./Context/StateCartContext";

const AppLayout = () => {
	const location = useLocation();

	const isLoginPage = location.pathname === "/login";

	return (
		<>
			{!isLoginPage && <Navbar />}
			<Outlet />
		</>
	);
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<AppLayout />}>
			<Route path="/" element={<Home />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/about" element={<Home />} />
			<Route path="/contact" element={<Home />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/thankyou" element={<Home />} />
			<Route path="/login" element={<Login />} />
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<StateCartContext>
			<RouterProvider router={router} />
		</StateCartContext>
	</React.StrictMode>
);

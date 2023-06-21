const api_url = 'http://localhost:3000/api';

const login = (data) => {
    return fetch(`${api_url}/user/login`, {
        method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		}
    });
}

const register = (data) => {
    return fetch(`${api_url}/user/register`, {
        method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		}
    });
}

const getProducts = (filter) => {
    const filter_string = filter ? `?filter=${filter}` : '';

    return fetch(`${api_url}/product${filter_string}`, {
        method: 'GET'
    });
}

export { getProducts, login, register };
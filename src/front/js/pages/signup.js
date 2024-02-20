import React, { useState } from 'react';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignup = async () => {
		try {
			const response = await fetch('http://localhost:5000/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.status === 200) {
				window.location.href = '/login';
			} else {
				const data = await response.json();
				alert(data.error || 'Error en el servidor');
			}
		} catch (error) {
			console.error('Error de red:', error);
			alert('Error de red');
		}
	};

	return (
		<div>
			<h1>Registro</h1>
			<label>Correo:</label>
			<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
			<br />
			<label>Contraseña:</label>
			<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
			<br />
			<button onClick={handleSignup}>Registrarse</button>
		</div>
	);
};

export default Signup;
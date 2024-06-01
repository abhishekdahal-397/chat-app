"use client";
import React, { useState } from "react";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();

		// Implement login logic here, e.g., API call, form validation
		// For demonstration purposes, simulating successful login:
		setUsername("");
		setPassword("");
		setErrorMessage("");

		// Alert for successful login (replace with actual redirection)
		alert("Login successful!");
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
				<h1 className="text-2xl font-bold text-center mb-4">Login</h1>

				{errorMessage && (
					<div className="text-red-500 text-center mb-4">{errorMessage}</div>
				)}

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
						>
							Username
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
							placeholder="Enter username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="Enter password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Login
						</button>
						<a
							href="#"
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
						>
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;

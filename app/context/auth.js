"use client";

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

// create Context
export const AuthContext = createContext({
	user: null,
	isLoading: false,
});

// create Provider

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const logout = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setIsLoading(false);
		});
		return logout;
	}, []);

	const value = {
		user,
		isLoading,
	};
	return (
		<AuthContext.Provider value={value}>
			{!isLoading && children}
		</AuthContext.Provider>
	)
};

"use client";

import { useRouter } from 'next/navigation'
import AuthConsumer from "../hooks/AuthConsumer";

const PublicConsumer = ({ children }) => {
	const route = useRouter()
	const { user } = AuthConsumer();
	if (user) {
		return route.push("/");
	}
	return children;
};

export default PublicConsumer;

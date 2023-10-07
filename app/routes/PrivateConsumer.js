'use client'

import { useRouter } from 'next/navigation'

import Link from "next/link";
import AuthConsumer from "../hooks/AuthConsumer";

const PrivateConsumer = ({ children }) => {
	const route = useRouter()
	const { user } = AuthConsumer();
	if (!user) {
		return route.push("/login")
	}
	return children;
};

export default PrivateConsumer;

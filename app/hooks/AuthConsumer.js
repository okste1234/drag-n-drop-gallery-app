"use client";

import { useContext } from "react";
import { AuthContext } from "../context/auth";

const AuthConsumer = () => {
	return useContext(AuthContext);
};

export default AuthConsumer;

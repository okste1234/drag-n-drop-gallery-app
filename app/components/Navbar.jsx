"use client";

import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/config";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	const handleLogout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="navbar bg-base-100 justify-between items-center pt-1 px-2">
			<a className="normal-case text-2xl underline">
				foto<span className="font-bold text-red-700">G</span>ram
				<span>
					<Image alt="logo" src="/p.png" width={35} height={30} />
				</span>
			</a>
			<div className="">
				<button onClick={handleLogout} className="text-red-700 text-lg">
					Logout
				</button>
				<Link href={"/signup"} className="text-blue-700 text-sm ml-3">
					Signup
				</Link>
			</div>
		</div>
	);
};

export default Navbar;

"use client"

import { useState } from 'react'
import PublicConsumer from '../routes/PublicConsumer'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'



const page = () => {
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const route = useRouter()

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			await createUserWithEmailAndPassword(auth, userName, password)
			route.push("/")
		} catch (error) {
			setError(error.message)
		}

	}

	return (

		<form onSubmit={handleSubmit}>

			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col">
					<div className="text-center">
						<Link href={"/"} className='flex justify-items-center'>
							<h1 className="text-5xl font-semibold underline">foto<span className="font-bold text-red-700">G</span>ram</h1>
							<Image alt="logo" src="/p.png" width={55} height={40} />
						</Link>
						<p className="py-6">Signup to share your photos to the world!</p>
					</div>
					<div className="card sm:w-[30rem] shadow-2xl bg-base-100">
						<div className="card-body">


							<div className="form-control">
								<label className="label">
									<span className="label-text">UserName</span>
								</label>
								<input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="e.g user@example.com" className="input input-bordered" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered" />
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Signup</button>
								{error && <p className='text-center text-red-700 pt-3'>{error}</p>}
							</div>

							<Link href={"/login"} className='mt-8 btn bg-red-500 text-white font-medium text-sm'>Click to Login</Link>
						</div>
					</div>
				</div>
			</div>
		</form>

	)
}

export default page
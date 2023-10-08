"use client"

import { useState } from 'react'
import PublicConsumer from '../routes/PublicConsumer'
import { signInWithEmailAndPassword } from 'firebase/auth'
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
            await signInWithEmailAndPassword(auth, userName, password)
            route.push("/")
        } catch (error) {
            setError(error.message)
        }

    }

    return (
        <PublicConsumer>
            <form onSubmit={handleSubmit} className='flex overflow-hidden'>

                <div className="hidden xl:block w-5/12 my-5 2xl:my-10 mx-2">
                    <div className="flex flex-col items-center text-center">
                        <div className='flex justify-items-center text-center'>
                            <h1 className="text-5xl font-semibold underline">foto<span className="font-bold text-red-700">G</span>ram</h1>
                            <Image alt="logo" src="/p.png" width={55} height={40} style={{ width: "auto", height: "auto" }} />
                        </div>
                        <p className='py-6 font-medium'>Drag and Drop Images with NextJs and Firebase.<br />
                            Made with !happiness.
                        </p>
                    </div>
                    <div className='flex flex-nowrap justify-center pt-6'>
                        <div className='mt-10'>
                            <Image alt="img1" src="/m1.jpg" width={170} height={150} className='h-[150px] hover:scale-110 duration-1000' />
                            <Image alt="img2" src="/m3.jpg" width={170} height={150} className='h-[150px] hover:scale-110 duration-1000' />
                        </div>
                        <div>
                            <Image alt="img3" src="/m2.jpg" width={170} height={150} className='h-[150px] hover:scale-110 duration-1000' />
                            <Image alt="img4" src="/m4.jpg" width={170} height={150} className='h-[150px] hover:scale-110 duration-1000' />
                        </div>
                    </div>
                </div>

                <div className="hero min-h-screen bg-base-200 xl:rounded-l-[3rem]">

                    <div className="hero-content flex-col">

                        <div className="text-center">
                            <Link href={"/"} className='flex justify-center xl:hidden'>
                                <h1 className="text-5xl font-semibold underline">foto<span className="font-bold text-red-700">G</span>ram</h1>
                                <Image alt="logo" src="/p.png" width={55} height={40} />
                            </Link>
                            <p className="py-6 font-medium text-xl">Welcome back! <span className='text-blue-700'>Login</span> to see photos!</p>
                        </div>

                        <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
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
                                    <button className="btn btn-primary">Login</button>
                                    {error && <p className='text-center text-red-700 pt-3'>User Not Found! or invalid password/userName</p>}
                                </div>

                                <Link href={"/signup"} className='mt-8 btn bg-red-500 text-white font-medium text-sm'>Signup Here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </PublicConsumer>
    )
}

export default page
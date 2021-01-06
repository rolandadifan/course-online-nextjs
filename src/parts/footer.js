import React from 'react'
import Link from 'next/link'

export default function footer() {
    function submit(){}

    
    return (
        <footer className="container mx-auto">
            <div className="flex justify-between">
                <div className="w-1/6">
                    <h6 className="text-white">Company</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link href=""><a className="text-indigo-600 hover:text-teal-500 hover:underline">Developer</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-indigo-600 hover:text-teal-500 hover:underline">Career</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-indigo-600 hover:text-teal-500 hover:underline">Our Story</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-indigo-600 hover:text-teal-500 hover:underline">New Soon</a></Link>
                        </li>
                    </ul>
                </div>
                <div className="w-1/6">
                    <h6 className="text-white">Student</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link href=""><a className="text-indigo-600 hover:text-teal-500 hover:underline">Get Scholarship</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-indigo-600 hover:text-teal-500 hover:underline">Get Path Skill</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-indigo-600 hover:text-teal-500 hover:underline">All Fectures</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-indigo-600 hover:text-teal-500 hover:underline">Refund Policy</a></Link>
                        </li>
                    </ul>
                </div>
                <div className="w-1/6">
                    <h6 className="text-white">Touch Us</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link href=""><a className="text-indigo-600 hover:text-teal-500 hover:underline">Courses JKT</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-indigo-600 hover:text-teal-500 hover:underline">jakarta Indonesia</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-indigo-600 hover:text-teal-500 hover:underline">jl. las vegas no.315</a></Link>
                        </li>
                        <li className="mt-2">
                            <Link href=""><a className="text-indigo-600 hover:text-teal-500 hover:underline">+62 8999999</a></Link>
                        </li>
                    </ul>
                </div>
                <div className="w-2/6">
                    <h6 className="text-white">promotions</h6>
                    <p className="mt-4 text-indigo-500">Submit your email for new updates</p>
                    <form onSubmit={submit} className="mt-5">
                        <input type="text" className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2" placeholder="your email address"/>
                        <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">Daftar Now</button>
                    </form>
                </div>
            </div>
            <div className="border-t pt-8 mt-8 border-purple-700 text-center">
                <p className="text-indigo-600">2021 Copyright by Rolanda Difandana. All Right Reserved</p>
            </div>
        </footer>
    )
}
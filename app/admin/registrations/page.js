'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Admin = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const response = await fetch('/api/register', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const json = await response.json()
        setUsers(json.data)
    }
    return (
        <>
        <div className="flex items-center justify-center p-10">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-3 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-3 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-3 py-3">
                                UID
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-3 py-3">
                                Email
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className=" text-gray-900 dark:border-gray-700  "  >
                                {/* <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white" >{user.name}</th> */}
                                <td className="px-3 py-4"> <Image src={user.profilePictureUrl} alt={user.name} width={50} height={50} unoptimized /></td>
                                <td className="px-3 py-4">{user.id}</td> 
                                <td className="px-3 py-4">{user.uid}</td> 
                                <td className='px-3 py-4'>{user.name}</td>
                                <td className=" px-3 py-4">{user.email}</td> 
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            </div>
        </>

    )
}
export default Admin

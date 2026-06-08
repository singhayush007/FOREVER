import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import Title from '../components/Title'

const Profile = () => {

    const { token, backendUrl, navigate } = useContext(ShopContext)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if (!token) {
            navigate('/login')
            return
        }
        const fetchProfile = async () => {
            try {
                const { data } = await axios.post(backendUrl + '/api/user/profile', {}, { headers: { token } })
                if (data.success) {
                    setUserData(data.user)
                } else {
                    toast.error(data.message)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
        fetchProfile()
    }, [token])

    if (!userData) {
        return <div className='min-h-[60vh] flex items-center justify-center text-gray-400'>Loading...</div>
    }

    return (
        <div className='border-t pt-14 min-h-[60vh]'>
            <div className='text-2xl mb-6'>
                <Title text1={'MY'} text2={'PROFILE'} />
            </div>

            <div className='max-w-md'>
                <div className='flex flex-col gap-5'>

                    <div className='w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-semibold'>
                        {userData.name.charAt(0).toUpperCase()}
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div>
                            <p className='text-xs text-gray-400 uppercase tracking-wider mb-1'>Full Name</p>
                            <p className='text-gray-800 font-medium border-b pb-2'>{userData.name}</p>
                        </div>
                        <div>
                            <p className='text-xs text-gray-400 uppercase tracking-wider mb-1'>Email Address</p>
                            <p className='text-gray-800 font-medium border-b pb-2'>{userData.email}</p>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate('/orders')}
                        className='w-fit bg-black text-white text-sm px-8 py-3 hover:bg-gray-800 transition-colors mt-2'
                    >
                        VIEW MY ORDERS
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Profile

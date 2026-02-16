import React from 'react'

const StickySocials = () => {
    return (
        <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex flex-col gap-3">

            <a href='https://www.instagram.com/taxa232025/' target='_blank' className="bg-red-500 text-white px-4 py-2 w-36 translate-x-24 hover:translate-x-0 transition-transform duration-300 cursor-pointer rounded-l-lg">
                Instagram
            </a>

            <a href='https://www.facebook.com/profile.php?id=61576770940387' className="bg-blue-600 text-white px-4 py-2 w-36 translate-x-24 hover:translate-x-0 transition-transform duration-300 cursor-pointer rounded-l-lg">
                Facebook
            </a>

            <a href='https://x.com/_taxa23' className="bg-gray-500 text-white px-4 py-2 w-36 translate-x-24 hover:translate-x-0 transition-transform duration-300 cursor-pointer rounded-l-lg">
                Twitter
            </a>

        </div>
    )
}

export default StickySocials

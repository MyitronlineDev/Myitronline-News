import React from 'react'

const StickySocials = () => {
    return (
        <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex flex-col gap-3">

            <a href='https://www.google.com/' target='_blank' className="bg-red-500 text-white px-4 py-2 w-36 translate-x-24 hover:translate-x-0 transition-transform duration-300 cursor-pointer rounded-l-lg">
                Instagram
            </a>

            <p className="bg-blue-600 text-white px-4 py-2 w-36 translate-x-24 hover:translate-x-0 transition-transform duration-300 cursor-pointer rounded-l-lg">
                Facebook
            </p>

            <p className="bg-black text-white px-4 py-2 w-36 translate-x-24 hover:translate-x-0 transition-transform duration-300 cursor-pointer rounded-l-lg">
                X
            </p>

        </div>
    )
}

export default StickySocials

import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return ( <section className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-5xl font-bold text-black mb-4">Data Fetching Assignment</h1>
      <p className="text-2xl text-gray-800 mb-6">
        Explore data fetching techniques on{' '}
        <span className="text-blue-500 font-semibold">Client-Side Rendering</span> and{' '}
        <span className="text-blue-500 font-semibold">Server-Side Rendering</span> with Next.js.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          href="/client-fetch"
          className="px-4 py-4 bg-black text-2xl text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Client-Side Rendering
        </Link>
        <Link
          href="/server-fetch"
          className="px-4 py-4 bg-black text-2xl text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Server-Side Rendering
        </Link>
      </div>
    </div>
  </section>
  )
}

export default Hero


import React from 'react'
import Hero from './Components/Hero'

export default function page() {
  return (
    <div className="flex justify-center h-screen w-full" style={{backgroundImage: "url('/img.jpeg')" }}>


      <Hero/>
    </div>
  )
}

import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center">

        <h1 className="text-pink-400 text-sm tracking-wide uppercase">
          Optimize Fashion
        </h1>

        {/* Main Heading */}
        <h2 className="font-bold text-4xl md:text-6xl leading-tight mt-3">
          Discover the Perfect Style <br /> for Every Occasion
        </h2>

        {/* Subtext */}
        <p className="text-orange-500 mt-4 max-w-2xl">
          Choose from our curated collection of elegant and modern hijabs, perfect for your daily wear or special events.
        </p>

      </div>

    </section>
  )
}

export default Hero

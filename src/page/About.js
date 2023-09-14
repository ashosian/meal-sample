import React from 'react'

const About = () => {
  return (
    // <div style={{ backgroundImage: `url('	https://media.istockphoto.com/id/1433085046/photo/closeup-of-a-woman-drinking-a-glass-of-water-for-hydration-thirst-and-health-at-her-house.webp?s=1024x1024&w=is&k=20&c=BWBQqAsO3Krcgtc2-GxZnVE7ddos1OGv3grMvK5hQB4=')`, backgroundSize: "contain" }} className="container w-[100vw] mx-auto" >

    //   <h1>about</h1>
    // </div>

    <div className='bg-blue-gray-300 h-[80vh] grid grid-cols-3'>
      <div></div>
      <div className='space-y-5 flex flex-col items-center'>

        <p className='text-center font-bold text-white'>About</p>
        <p className='text-center text-white'>TheMealDB was built in 2016 to provide a free data source api for recipes online
          in the hope that developers would build applications and cool projects ontop of it.
          TheMealDB originated on the Kodi forums as a way to browse recpies on your TV.</p>

        <img src="https://raw.githubusercontent.com/zag2me/script.screensaver.themealdb/master/icon.png" alt="" />
      </div>
      <div></div>
    </div>
  )
}

export default About

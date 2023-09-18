import React from 'react'
import './Styles/about.css'

const about = () => {
  return (
    <>
<div className="card text-bg-light">
  <img src="hello.png" className="card-img" alt="img-about" />
  <div className="card-img-overlay">
  </div>
</div>

<div className='about-us container'>
<div className='row'>
  <div className='col-md-6'>
  <h3 className='welcome-text text-center'>Welcome To The World</h3>
    <img src='about1.png' className='img' alt='about_img'/>
  </div>
  <div className='col-md-6'>
    <h2 className='wel-text text-center'>Our Mission</h2>
    <p className='para text-center'>"At House Market Company, our mission is clear: to transform your dreams of home ownership into reality. We are more than just a real estate company; we are your dedicated partners in finding the perfect place to call home. Our commitment to personalized service, unwavering expertise, and absolute transparency ensures that every step of your real estate journey is a seamless and informed experience. We believe in building not just houses but vibrant communities, and we embrace innovation to make the process efficient and convenient for you. Whether you're a first-time homebuyer, looking to upgrade, or investing in your future, House Market Company is here to guide you. Your dream home awaits with us!"
</p>
<br/>
<p>-Atul Maurya</p>
  </div>
  <hr/>
</div>
</div>
<div className='founding container'>
  <div className='row'>
    <div className='col-md-6'>
      <h2 className='story text-center'>Founding Story</h2>
      <p className='story-para text-center'>House Market Company was founded by Sarah and Michael, two real estate professionals with a vision to redefine the industry. They believed that buying or selling a home should be a personal, transformative experience. Inspired by the dreams of their clients and a commitment to personalized service, transparency, and community building, they set out to create a company that's more than just about properties – it's about people and their aspirations. Today, House Market Company continues to make dreams come true, one home at a time, with a dedicated team and an unwavering commitment to redefining real estate. Join us on our remarkable journey!





</p>
    </div>
    <div className='col-md-6'>
      <img src='founding.png'className='founding-img' alt='founding-pic'/>
    </div>
  </div>
</div>

    </>
  )
}

export default about
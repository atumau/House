import React from 'react'
import './Styles/footer.css'

const footer = () => {
  return (
    <>
       <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
        
          <div className="col-md-4">
            <h3>About Company</h3>
            <p>
            "Welcome to HOUSE Market, where we transform dreams into reality. With our expertise and dedication, we help you find your perfect home or investment property, making real estate transactions seamless and fulfilling."
            </p>
          </div>

          <div className="col-md-4">
            <h3>Contact</h3>
            <p>
              Address: Shankarpura, Burari, Delhi, 110084<br />
              Phone: +918400052053 <br />
              Email: mauryaatul328@gmail.com
            </p>
          </div>

          <div className="col-md-4">
            <h3>Newsletter</h3>
            <p>
              Subscribe to our newsletter to receive updates and news directly in your inbox.
            </p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email address" />
                <button className="btn btn-outline-light" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default footer
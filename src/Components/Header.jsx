import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <section className='header'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Link to="/">
              <img src="https://demo.smartaddons.com/templates/joomla3/sj-thedaily/templates/sj_thedaily/images/styling/red/logo.png" alt="" />
            </Link>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <input type="search" placeholder='Search' /> <span className='h-icon'><i className="text-secondary fa fa-search" aria-hidden="true"></i></span>
          </div>
        </div>
        <div className="nav">
          <div className="col-lg-8">
            <ul className='d-flex gap-4 m-0'>
              <li><Link className='n-link td' to="/"> <i className="fs-5 fa fa-home" aria-hidden="true"></i></Link></li>
              <li><Link className='n-link td' to="/business"> BUSINESS</Link></li>
              <li><Link className='n-link td' to="/health"> HEALTH</Link></li>
              <li><Link className='n-link td' to="/science"> SCIENCE</Link></li>
              <li><Link className='n-link td' to="/world"> WORLD</Link></li>
              <li><Link className='n-link td' to="/entertainment & arts"> ENTERTAINMENT & ARTS</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 d-flex justify-content-end pe-4">
            <div className="n-icons d-flex gap-3 align-items-center">
              <i className="n-icons1 fa fa-linkedin" aria-hidden="true"></i>
              <i className="n-icons1 fa fa-facebook" aria-hidden="true"></i>
              <i className="n-icons1 fa fa-twitter" aria-hidden="true"></i>
              <i className="n-icons1 fa fa-google-plus" aria-hidden="true"></i>
              <i className="n-icons1 bi bi-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header

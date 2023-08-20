import React from 'react'
import { Link } from 'react-router-dom'

function Top() {
    return (
        <section className='top py-1'>
            <div className="n-overlay"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 n-zin"><p className='mb-0 no-text'>BREAKING NEWS</p></div>
                    <div className="col-lg-6 d-flex justify-content-end">
                        <div className=''>
                            <img className='me-1' src="https://demo.smartaddons.com/templates/joomla3/sj-thedaily/media/mod_languages/images/en.gif" width="18" alt="" />
                            <span className='lng'>ENGLISH</span>
                        </div>
                        <Link className='td login'>Login</Link>
                        <Link className='td signup'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Top

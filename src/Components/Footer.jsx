import React from 'react'

function Footer() {
    return (
        <section className='footer'>
            <div className="container">
                <div className="row">                   
                    <div className="col-lg-3">
                        <h3>Useful Links</h3>
                        <ul className='p-0 m-0'>
                            <li className='mb-2'><i className="me-2 text-dark bi bi-caret-right-fill"></i> Terms of the use</li>
                            <li className='mb-2'><i className="me-2 text-dark bi bi-caret-right-fill"></i> Advertise with us</li>
                            <li className='mb-2'><i className="me-2 text-dark bi bi-caret-right-fill"></i> Parental Guidance</li>
                            <li className='mb-2'><i className="me-2 text-dark bi bi-caret-right-fill"></i> Cookies</li>
                            <li className='mb-2'><i className="me-2 text-dark bi bi-caret-right-fill"></i> Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <h3>Get in touch</h3>
                        <ul className='p-0 m-0'>
                            <li className='mb-2'><i className="text-dark me-2 bi bi-buildings-fill"></i> Pepsicola-31 Kathmandu, Nepal</li>
                            <li className='mb-2'><i className="text-dark me-2 bi bi-phone-fill"></i> 9801200000</li>
                            <li className='mb-2'><i className="text-dark me-2 bi bi-telephone-fill"></i> 01 1000000</li>
                            <li className='mb-2'><i className="text-dark me-2 bi bi-envelope-fill"></i> newsportal@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer

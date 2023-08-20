import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import LatestBox from './LatestBox'

function Latest() {
    return (
        <section className='latest'>
            <div className="container">
            <div className="title d-flex align-items-center">
                    <div className="t-line1"></div>
                    <h2 className='mb-0 mx-3'>LATEST NEWS</h2>
                    <div className="t-line2"> <div className="t-line3"></div></div>
                </div>
                <div className="row m--0 latest-box">
                    <div className="col-lg-6 pe-0 lb-border">
                        <div className="l-box mb-4">
                            <div className="d-flex">
                                <img className='of me-3' src="https://demo.smartaddons.com/templates/joomla3/sj-thedaily/cache/resized/7f38d9e7be00204f7604e9ef41c799bd.jpg" width="105" height="90" alt="" />
                                <div className="lb-text">
                                    <h4 className="lbt-title mb-1"><Link className='text-dark td lb-link' to='/latest/news1'>SMELL MAGIC IN THE AIR. OR MAYBE BARBECUE </Link></h4>
                                    <p className="lbt-desc">With what mingled joy and sorrow do I take up the pen to write., write.</p>
                                    <p className="lbt-date mb-0"><i className="me-1 bi bi-calendar3"></i>Sep 18, 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="l-box mb-4">
                            <div className="d-flex">
                                <img className='of me-3' src="https://demo.smartaddons.com/templates/joomla3/sj-thedaily/cache/resized/30bc6106e1a83883dfd74454ad1d2b7c.jpg" width="105" height="90" alt="" />
                                <div className="lb-text">
                                    <h4 className="lbt-title mb-1"><Link className='text-dark td lb-link' to='/latest/news2'>SMELL MAGIC IN THE AIR. OR MAYBE BARBECUE </Link></h4>
                                    <p className="lbt-desc">With what mingled joy and sorrow do I take up the pen to write., write.</p>
                                    <p className="lbt-date mb-0"><i className="me-1 bi bi-calendar3"></i>Sep 18, 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="l-box mb-4">
                            <div className="d-flex">
                                <img className='of me-3' src="https://demo.smartaddons.com/templates/joomla3/sj-thedaily/cache/resized/5af760d02cbdf87ef33bd84eefad98be.jpg" width="105" height="90" alt="" />
                                <div className="lb-text">
                                    <h4 className="lbt-title mb-1"><Link className='text-dark td lb-link' to='/latest/news3'>SMELL MAGIC IN THE AIR. OR MAYBE BARBECUE </Link></h4>
                                    <p className="lbt-desc">With what mingled joy and sorrow do I take up the pen to write., write.</p>
                                    <p className="lbt-date mb-0"><i className="me-1 bi bi-calendar3"></i>Sep 18, 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="l-box mb-4">
                            <div className="d-flex">
                                <img className='of me-3' src="https://demo.smartaddons.com/templates/joomla3/sj-thedaily/cache/resized/5b14e1db3b226d4654b13ff00f4367e5.jpg" width="105" height="90" alt="" />
                                <div className="lb-text">
                                    <h4 className="lbt-title mb-1"><Link className='text-dark td lb-link' to='/latest/news4'>SMELL MAGIC IN THE AIR. OR MAYBE BARBECUE </Link></h4>
                                    <p className="lbt-desc">With what mingled joy and sorrow do I take up the pen to write., write.</p>
                                    <p className="lbt-date mb-0"><i className="me-1 bi bi-calendar3"></i>Sep 18, 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="l-box mb-4">
                            <div className="d-flex">
                                <img className='of me-3' src="https://demo.smartaddons.com/templates/joomla3/sj-thedaily/cache/resized/2a55ff2e2c9d57be91139c2c6ea28d1a.jpg" width="105" height="90" alt="" />
                                <div className="lb-text">
                                    <h4 className="lbt-title mb-1"><Link className='text-dark td lb-link' to='/latest/news5'>SMELL MAGIC IN THE AIR. OR MAYBE BARBECUE </Link></h4>
                                    <p className="lbt-desc">With what mingled joy and sorrow do I take up the pen to write., write.</p>
                                    <p className="lbt-date mb-0"><i className="me-1 bi bi-calendar3"></i>Sep 18, 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="l-box">
                            <div className="d-flex">
                                <img className='of me-3' src="https://demo.smartaddons.com/templates/joomla3/sj-thedaily/cache/resized/46d77185195bb60a72faeff4636e07de.jpg" width="105" height="90" alt="" />
                                <div className="lb-text">
                                    <h4 className="lbt-title mb-1"><Link className='text-dark td lb-link' to='/latest/news6'>SMELL MAGIC IN THE AIR. OR MAYBE BARBECUE </Link></h4>
                                    <p className="lbt-desc">With what mingled joy and sorrow do I take up the pen to write., write.</p>
                                    <p className="lbt-date mb-0"><i className="me-1 bi bi-calendar3"></i>Sep 18, 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-0 ln-pr">
                        <Outlet/>                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Latest

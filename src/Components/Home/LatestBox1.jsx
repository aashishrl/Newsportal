import React from 'react'
import { Link } from 'react-router-dom'

function LatestBox1() {
    return (
        <div>
            <div className="latest-box2">
                <img width="100%" height="300" className='of me-3' src="https://demo.smartaddons.com/templates/joomla3/sj-thedaily/cache/resized/7f38d9e7be00204f7604e9ef41c799bd.jpg" alt="" />
                <div className="lb2-text p-4">
                    <h4 className="lb2t-title mb-3"><Link className='text-dark td lb-link' to='/latest/news1'>SMELL MAGIC IN THE AIR. OR MAYBE BARBECUE </Link></h4>
                    <p className="lb2t-desc pb-3">With what mingled joy and sorrow do I take up the pen to write to my dearest friend! Oh, what a change between to-day and yesterday! Now I am friendless and alone...</p>
                    <div className="d-flex justify-content-between">
                        <p className='mb-0 lb2t-rm'>READ MORE</p>
                        <p className="lb2t-date mb-0"><i className="me-1 bi bi-calendar3"></i>Sep 18, 2018</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBox1

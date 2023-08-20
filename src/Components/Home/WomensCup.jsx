import React from 'react'

function WomensCup() {
    return (
        <section className='w-cup'>
            <div className="container">
                <div className="title d-flex align-items-center">
                    <div className="t-line1"></div>
                    <h2 className='mb-0 mx-3'>WOMENS WORLD CUP</h2>
                    <div className="t-line2"> <div className="t-line3"></div></div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="wc-box">
                            <div className="wc-img mb-1">
                                <img className='of' width="100%" src="https://ichef.bbci.co.uk/news/240/cpsprodpb/170A1/production/_130596349_gettyimages-1582792146.jpg" alt="" />
                            </div>                            
                            <h3>Australia avert 'disaster' to join World Cup party</h3>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="wc-box">
                            <div className="wc-img mb-1">
                                <img className='of' width="100%" src="https://ichef.bbci.co.uk/news/240/cpsprodpb/1840B/production/_130593399_gettyimages-1580110552.jpg" alt="" />
                            </div>                            
                            <h3>England's Stanway relishing filling in for injured Walsh</h3>                        
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="wc-box">
                            <div className="wc-img mb-1">
                                <img className='of' width="100%" src="https://ichef.bbci.co.uk/news/240/cpsprodpb/18539/production/_130414699_groupsandschedules.jpg" alt="" />
                            </div>                            
                            <h3>Who needs what? Women's World Cup permutations</h3>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="wc-box mb-1">
                            <div className="wc-img">
                                <img className='of' width="100%" src="https://ichef.bbci.co.uk/news/240/cpsprodpb/45CD/production/_130596871_fans_getty976.jpg" alt="" />
                            </div>                            
                            <h3>US fans nervy ahead of crunch Portugal game</h3>
                        </div>
                    </div>                   
                </div>
            </div>
        </section>
    )
}

export default WomensCup

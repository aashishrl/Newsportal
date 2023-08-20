import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../Data/Data'

function News() {
    const { id1 } = useParams();
    let filter = Data.filter(aa => aa.category == id1)
    return (
        <section className='news'>
            <div className="container">
                <h3 className='n-title text-capitalize'>{id1}</h3>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row row-gap-4">
                            {filter.map(bb => (
                                <div className="col-lg-4">
                                    <img height="171" className='of' width="100%" src={bb.thumbnail} alt="" />
                                    <div className="n-box">
                                        <h2 className="nb-title text-uppercase">{bb.title}</h2>
                                        <p className='nb-desc'>{bb.description}</p>
                                        <p className='nb-date'><i className="text-secondary me-1 bi bi-clock-fill"></i> {bb.date}</p>
                                        <span className='nb-span text-capitalize'>{bb.category} <i className="ms-1 bi bi-chat-dots-fill"></i></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <img className='of mb-4' width="100%" src="https://www.onlinekhabar.com/wp-content/uploads/2023/07/Combine-300-x200-px1.gif" alt="" />
                        <img className='of mb-4' width="100%" src="https://www.onlinekhabar.com/wp-content/uploads/2023/07/ezgif.com-video-to-gif2-1.gif" alt="" />
                        <img className='of mb-4' width="100%" src="https://www.onlinekhabar.com/wp-content/uploads/2021/10/ezgif.com-gif-maker1.gif" alt="" />
                        <img className='of' width="100%" src="https://www.onlinekhabar.com/wp-content/uploads/2023/07/ON_300pxX200px.gif" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News

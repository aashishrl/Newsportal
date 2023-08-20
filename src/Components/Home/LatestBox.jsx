import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../../Data/Data';

function LatestBox() {
    const { id } = useParams();
    let filter = Data.filter(a => a.category==id)
    return (
        <section>
            {filter.map(b => (
                <div className="latest-box2">
                    <img width="100%" height="300" className='of me-3' src={b.thumbnail} alt="" />
                    <div className="lb2-text p-4">
                        <h4 className="lb2t-title mb-3"><Link className='text-dark td lb-link' to='/latest/News1'>{b.title}</Link></h4>
                        <p className="lb2t-desc pb-3">{b.description}</p>
                        <div className="d-flex justify-content-between">
                            <p className='mb-0 lb2t-rm'>{b.read}</p>
                            <p className="lb2t-date mb-0"><i className="me-1 bi bi-calendar3"></i>{b.date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default LatestBox

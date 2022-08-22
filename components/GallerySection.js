import Link from 'next/link'
import React from 'react'

const GallerySection = () => {
  return (
    <div className='gallery-section'>
        <div className="section-overlay site-section text-center p-5">
            <div className="section-title mb-3">Gallery</div>
            <div className="font-roboto h2 mb-3 px-3 text-white">
                Introducing our collection of high quality photos exhibiting  our exotic designs.
            </div>
            <Link href="/gallery" className="btn btn-lg m-auto text-white text-decoration-none">View our gallery</Link>
        </div>
    </div>
  )
}

export default GallerySection
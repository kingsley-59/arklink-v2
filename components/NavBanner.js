import React from 'react'

const NavBanner = ({heading}) => {
  return (
    <div className='bg-dark'>
        <div className="navbanner-wrapper text-center p-5">
            <div className="h3 text-white text-capitalize fw-bolder m-auto"> {heading} </div>
            <div className='m-auto'>
                <small className="text-white text-decoration-none">
                    <a href="/" className='text-white text-decoration-none'>Home </a> {' > '} {heading}
                </small>
            </div>
        </div>
    </div>
  )
}

export default NavBanner
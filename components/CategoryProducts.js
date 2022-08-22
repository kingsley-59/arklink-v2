import React from 'react'

const ProductCard = ({name}) => {
    let styles = {
        aspectRatio: "auto 4 / 3"
    }
    return (
        <div className="col-lg-4 col-md-3 col-sm-2 col-xs-1 px-2 py-3">
            <div className='bg-primary category-wrapper d-flex align-items-center justify-content-center p-3 mx-3' style={styles}>
                <span className="text-white"> {name} </span>
            </div>
        </div>
    )
}

const Product = ({product}) => {

    return (
        <div className='mb-4'>
            <div className="section-subtitle text-center text-capitalize mb-3">{product}</div>
            <div className="row justify-content-center product-wrapper">
                <ProductCard name='8 x 6 Tiles' />
                <ProductCard name='8 x 6 Tiles' /> 
                <ProductCard name='4 x 6 Tiles' /> 
                <ProductCard name='12 x 9 Tiles' /> 
                <ProductCard name='12 x 10 Tiles' /> 
                <ProductCard name='9 x 9 Tiles' /> 
            </div>
            {/* <div className="text-center mt-5">
                <a className="btn btn-lg text-white text-decoration-none">See all products</a>
            </div> */}
        </div>
    )
}


const CategoryProducts = ({category}) => {
  return (
    <div className="site-seciton p-5">
        <div className="section-title text-center mb-3">Products</div>
        <Product product={category} />
    </div>
  )
}

export default CategoryProducts
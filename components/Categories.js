import React from 'react'
import Slider from "react-slick";

const Category = ({name, photo}) => {
    let styles = {
        aspectRatio: "auto 4 / 3",
        backgroundImage: `url('/assets${photo}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className='bg-green category-wrapper d-flex align-items-center justify-content-center p-3 mx-3' style={styles}>
            <span className="text-white bg-dark bg-opacity-50 rounded p-2"> {name} </span>
        </div>
    );
}

const Categories = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    
    return (
        <div className='site-section bg-brown p-5'>
            <div className="container section-title text-center mb-3">categories</div>
            <div className="slider-wrapper">
                <Slider {...settings} className=''>
                    <div>
                        <Category name='Tiles' photo={'/images/tiles-group-1.jpg'} />
                    </div>
                    <div>
                        <Category name='Toilets' photo={'/images/pexel-bathroom-2.jpg'} />
                    </div>
                    <div>
                        <Category name='Marbles' photo={'/images/marble-1.jpg'} />
                    </div>
                    <div>
                        <Category name='Doors' photo={'/images/pexel-doors-1.jpg'} />
                    </div>
                    <div>
                        <Category name='Bath tubs' photo={'/images/pexel-bathroom-4.jpg'} />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Categories